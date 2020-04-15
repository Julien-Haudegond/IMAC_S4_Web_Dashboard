import { h } from 'hyperapp'

import SideBarDomaine from '../sideBar/SideBarDomaine'
import SideBarLocalisation from '../sideBar/SideBarLocalisation'
import SideBarPeriode from '../sideBar/SideBarPeriode'
import SideBarLogo from '../sideBar/SideBarLogo'

export default () => {
  return (
    <div class="nav">
      <div class="multi-level">
        { SideBarLogo() }
        { SideBarDomaine() }
        { SideBarLocalisation() }
        { SideBarPeriode() }
      </div>
    </div>
  )
}
