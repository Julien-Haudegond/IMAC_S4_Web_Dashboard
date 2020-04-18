import { h } from 'hyperapp'

import SideBarDomain from '../sideBar/SideBarDomain'
import SideBarLocalisation from '../sideBar/SideBarLocalisation'
import SideBarPeriod from '../sideBar/SideBarPeriod'
import SideBarLogo from '../sideBar/SideBarLogo'

export default ({ domains, regions, months }) => {
  return (
    <div class="main-nav">
      <input type="checkbox" id="mobile-menu"></input>
      <div class="nav-mobile">
        <label for="mobile-menu" class="side-label">
          <img src="https://zupimages.net/up/20/16/3mbm.png"></img>
        </label>
        <div class="logo-mobile">
          <a href="#festiv" class="icon"> <h1> Festiv </h1> <img src="https:zupimages.net/up/20/15/p651.png" alt="accueil"/> </a>
        </div>
      </div>
      <div class="nav">
        <div class="multi-level">
          <SideBarLogo></SideBarLogo>
          <SideBarDomain domains={domains}></SideBarDomain>
          <SideBarLocalisation regions={regions}></SideBarLocalisation>
          <SideBarPeriod months={months}></SideBarPeriod>
        </div>
      </div>
    </div>
  )
}
