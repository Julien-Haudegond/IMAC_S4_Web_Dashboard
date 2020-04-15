import { h } from 'hyperapp'
import SideBar from '../sideBar/SideBar'
import MainContent from '../mainContent/MainContent'

export default () => {
  return (
    <div id="container">
      { SideBar() }
      { MainContent() }
    </div>
  )
}
