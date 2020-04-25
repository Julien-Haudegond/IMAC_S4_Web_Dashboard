/* eslint-disable import/no-absolute-path */
import { h } from 'hyperapp'
import Counter from '../graphics/Counter'
import moment from 'moment'

import Circle from '/images/soleil.png'
import Transat from '/images/transat.png'

export default ({ festivals }) => {
  return (
    <div>
      <h1> Bonjour, envie d’être <mark> un as des festivals </mark> <br/> de bandes dessinées ? </h1>
      <div class="circle">
        <img src={Circle} alt="circle"/>
      </div>
      <div class="home-content">
        <div class="content">
          <div class="image_home">
            <img src={Transat} alt="image_home"/>
          </div>
          <div class="text_home">
            <p> <mark> Vous </mark> pouvez ici chercher <br/> des informations sur les <br/> festivals français. </p>
            <p> <mark> Ils </mark> sont classés par <br/> domaines, localisations et <br/> périodes. </p>
          </div>
        </div>
        <div class="home-counters">
          <Counter
            title={'Ce mois-ci en France, il y a...'}
            festivalsNb={festivals.filter(item => {
              if (!item.startDate || !item.endDate) return false

              const today = moment()
              const thisMonth = parseInt(today.format('M'), 10)
              const festStartMonth = parseInt(item.startDate.split('-')[1], 10)
              const festEndMonth = parseInt(item.endDate.split('-')[1], 10)

              return (thisMonth >= festStartMonth && thisMonth <= festEndMonth)
            }).length}>
          </Counter>
          <Counter
            title={'Cette semaine en France, il y a...'}
            festivalsNb={festivals.filter(item => {
              if (!item.startDate || !item.endDate) return false

              const today = moment()
              const thisWeek = parseInt(today.format('W'), 10)
              const festStartWeek = parseInt(moment(item.startDate, 'YYYY-MM-DD').format('W'), 10)
              const festEndWeek = parseInt(moment(item.endDate, 'YYYY-MM-DD').format('W'), 10)

              return (thisWeek >= festStartWeek && thisWeek <= festEndWeek)
            }).length}>
          </Counter>
        </div>
      </div>
    </div>
  )
}
