import { h } from 'hyperapp'
import { Route, Switch } from '@hyperapp/router'

import HomeContent from './HomeContent'
import DomainContent from './DomainContent'
import LocalisationContent from './LocalisationContent'
import PeriodContent from './PeriodContent'

export default ({ festivals }) => {
  return (
    <div>
      <Switch>
        <Route path='/' render={() =>
          <HomeContent></HomeContent>
        } />

        <Route path='/domain/:name' render={({ match }) => {
          const name = match.params.name
          const title = match.params.name
          return (
            <DomainContent
              title={title}
              festivals={festivals.filter(item => item.domain === name)}>
            </DomainContent>
          )
        }} />

        <Route path='/domain/:name/:subname' render={({ match }) => {
          const name = match.params.subname
          const title = match.params.name + ' /// ' + match.params.subname
          return (
            <DomainContent
              title={title}
              festivals={festivals.filter(item => item.subdomain === name)}>
            </DomainContent>
          )
        }} />

        <Route path='/localisation/:region' render={({ match }) => {
          const title = match.params.region
          return (
            <LocalisationContent title={title}></LocalisationContent>
          )
        }} />

        <Route path='/period/:month' render={({ match }) => {
          const title = match.params.month
          return (
            <PeriodContent title={title}></PeriodContent>
          )
        }} />
      </Switch>
    </div>
  )
}
