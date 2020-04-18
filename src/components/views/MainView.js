import { h } from 'hyperapp'
import SideBar from '../sideBar/SideBar'
import MainContent from '../mainContent/MainContent'

export default (state, actions) => {
  if (!state.ready && !state.loading) {
    return actions.fetchApi()
  }

  if (state.ready && !state.loading) {
    return (
      <div id="container">
        <SideBar
          domains={state.filters.find(item => item.name === 'domaine')}
          regions={state.filters.find(item => item.name === 'region')}
          months={state.filters.find(item => item.name === 'mois_habituel_de_debut')}>
        </SideBar>
        <MainContent festivals={state.festivals}></MainContent>
      </div>
    )
  }
}
