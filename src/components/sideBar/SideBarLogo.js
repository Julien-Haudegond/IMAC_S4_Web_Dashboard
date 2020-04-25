/* eslint-disable import/no-absolute-path */
import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

import Logo from '/images/splash.png'

export default () => {
  return (
    <div class="logo">
      <Link to='/IMAC_S4_Web_Dashboard/'>
        <a href="#" class="icon"><h1>Festiv</h1><img src={Logo} alt="accueil"/></a>
      </Link>
    </div>
  )
}
