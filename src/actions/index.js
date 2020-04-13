import axios from 'axios'

export default {
  fetchApi: () => (state, actions) => {
    axios.get('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals') // Used to get the number of entries
      .then(response => response.data.nhits)
      .then(nbElts => axios.get(`https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&rows=${nbElts}`)) // Real request
      .then(response => {
        actions.setApi(response.data.records.map(item => ({
          name: item.fields.nom_de_la_manifestation,
          domain: item.fields.domaine,
          subdomain: item.fields.complement_domaine,
          city: item.fields.commune_principale,
          departmentNb: parseInt(item.fields.departement),
          department: item.fields.nom_departement,
          region: item.fields.region,
          creationDate: item.fields.date_de_creation,
          periodicity: item.fields.periodicite,
          editionIn2019: item.fields.ndeg_de_l_edition_2019,
          startMonth: item.fields.mois_habituel_de_debut,
          startDate: item.fields.date_de_debut,
          endDate: item.fields.date_de_fin
        })))
      })
      .catch(error => console.log(error))

    return state
  },

  setApi: (elts) => (state) => {
    return { ...state, festivals: elts }
  }
}
