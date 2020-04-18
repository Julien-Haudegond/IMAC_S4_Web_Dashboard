import axios from 'axios'
import { location } from '@hyperapp/router'

export default {
  location: location.actions,

  setLoading: () => state => {
    document.body.classList.add('loader')
    const htmlContent = '<p id="loading"> La fête va bientôt commencer... <img src="https://zupimages.net/up/20/16/m42g.gif"></p>'
    document.body.insertAdjacentHTML('afterbegin', htmlContent)

    return { ...state, ready: false, loading: true }
  },

  setReady: () => state => {
    document.body.classList.remove('loader')
    document.getElementById('loading').remove()
    return { ...state, ready: true, loading: false }
  },

  fetchApi: () => async (state, actions) => {
    actions.setLoading()

    await axios.get('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals') // Used to get the number of entries
      .then(response => response.data.nhits)
      .then(nbElts => axios.get(`https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&rows=${nbElts}&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut`)) // Real request
      .then(response => {
        console.log(response.data)
        actions.setFestivals(response.data.records.map(item => ({
          name: item.fields.nom_de_la_manifestation,
          domain: item.fields.domaine,
          subdomain: item.fields.complement_domaine,
          city: item.fields.commune_principale,
          departmentNb: parseInt(item.fields.departement, 10),
          department: item.fields.nom_departement,
          region: item.fields.region,
          creationDate: item.fields.date_de_creation,
          periodicity: item.fields.periodicite,
          editionIn2019: item.fields.ndeg_de_l_edition_2019,
          startMonth: item.fields.mois_habituel_de_debut,
          startDate: item.fields.date_de_debut,
          endDate: item.fields.date_de_fin
        })))
        actions.setFilters(response.data.facet_groups.map(item => ({
          name: item.name,
          count: item.facets.length,
          items: item.facets.map(elt => ({
            count: elt.count,
            name: elt.name // Must be a String
          }))
        })))
      })
      .catch(error => console.log(error))

    actions.addSubdomainsToDomains()

    actions.setReady()

    return state
  },

  setFestivals: (elts) => (state) => {
    return { ...state, festivals: elts }
  },

  setFilters: (elts) => (state) => {
    return { ...state, filters: elts }
  },

  addSubdomainsToDomains: () => (state) => {
    const domainFilter = state.filters.find(item => item.name === 'domaine')
    const domainList = domainFilter.items

    if (domainList === undefined) {
      console.error('Error with the domain list.')
      return
    }

    const updatedDomainList = domainList.map(item => {
      const domainName = item.name
      const subdomains = new Set()

      const allFestivalsInThisDomain = state.festivals.filter(item => item.domain === domainName)

      allFestivalsInThisDomain.map(item => {
        subdomains.add(item.subdomain)
      })

      if (subdomains.has(undefined)) subdomains.delete(undefined)

      return {
        ...item,
        subdomains: Array.from(subdomains).map(item => ({
          name: item
        }))
      }
    })

    return {
      ...state,
      filters: state.filters
        .filter(item => item !== domainFilter)
        .concat({ ...domainFilter, items: updatedDomainList })
    }
  }
}
