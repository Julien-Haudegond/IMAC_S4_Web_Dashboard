import { h } from 'hyperapp'
import { Route, Switch, Redirect } from '@hyperapp/router'

import HomeContent from './HomeContent'
import DomainContent from './DomainContent'
import LocalisationContent from './LocalisationContent'
import PeriodContent from './PeriodContent'

export default ({ festivals }) => {
  return (
    <div class="main">
      <Route path='/' render={() => <Redirect to='/IMAC_S4_Web_Dashboard/' />} />
      <Route path='/IMAC_S4_Web_Dashboard/' render={() =>
        <HomeContent
          festivals={festivals}>
        </HomeContent>
      } />

      <Route path='/IMAC_S4_Web_Dashboard/domain/:name' render={({ match }) => {
        const name = match.params.name
        const title = match.params.name
        return (
          <DomainContent
            title={title}
            totalCount={festivals.length}
            festivals={festivals.filter(item => item.domain === name)}>
          </DomainContent>
        )
      }} />

      <Route path='/IMAC_S4_Web_Dashboard/domain/:name/:subname' render={({ match }) => {
        const name = match.params.subname
        const title = match.params.name + ' /// ' + match.params.subname
        return (
          <DomainContent
            title={title}
            totalCount={festivals.length}
            festivals={festivals.filter(item => item.subdomain === name)}>
          </DomainContent>
        )
      }} />
      <Route path='/IMAC_S4_Web_Dashboard/localisation/:region' render={({ match }) => {
        const region = match.params.region
        return (
          <LocalisationContent
            region={region}
            totalCount={festivals.length}
            festivals={festivals.filter(item => item.region === region)}>
          </LocalisationContent>
        )
      }} />

      <Route path='/IMAC_S4_Web_Dashboard/period/:month' render={({ match }) => {
        const startMonth = match.params.startMonth
        const month = match.params.month
        return (
          <PeriodContent
            month={month}
            totalCount={festivals.length}
            festivals={festivals.filter(item => item.startMonth === month)}>
          </PeriodContent>
        )
      }} />
    </div>
  )
}

// Utilser un Switch autour des routes provoquait un étrange soucis de rendus (les routes précédentes n'étaient pas forcément nettoyées au nouveau rendu) ... ?
