import { h } from 'hyperapp'

import SideBarDomain from '../sideBar/SideBarDomain'
import SideBarLocalisation from '../sideBar/SideBarLocalisation'
import SideBarPeriod from '../sideBar/SideBarPeriod'
import SideBarLogo from '../sideBar/SideBarLogo'

export default ({ domains, regions, months }) => {
  return (
    <div class="nav">
      <div class="multi-level">
        <SideBarLogo></SideBarLogo>
        <SideBarDomain domains={domains}></SideBarDomain>
        <SideBarLocalisation regions={regions}></SideBarLocalisation>
        <SideBarPeriod months={months}></SideBarPeriod>
      </div>
    </div>
  )
}
