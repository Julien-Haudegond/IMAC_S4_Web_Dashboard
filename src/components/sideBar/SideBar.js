import { h } from 'hyperapp'

import SideBarDomain from '../sideBar/SideBarDomain'
import SideBarLocalisation from '../sideBar/SideBarLocalisation'
import SideBarPeriode from '../sideBar/SideBarPeriode'
import SideBarLogo from '../sideBar/SideBarLogo'

export default ({ domains }) => {
  return (
    <div class="nav">
      <div class="multi-level">
        <SideBarLogo></SideBarLogo>
        <SideBarDomain
          domains={domains}
        ></SideBarDomain>
        <SideBarLocalisation></SideBarLocalisation>
        <SideBarPeriode></SideBarPeriode>
      </div>
    </div>
  )
}
