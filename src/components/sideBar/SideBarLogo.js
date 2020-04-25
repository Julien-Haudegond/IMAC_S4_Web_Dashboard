import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export default () => {
  return (
    <div class="logo">
      <Link to='/'>
        <a href="#" class="icon"><h1>Festiv</h1><img src="https:zupimages.net/up/20/15/p651.png" alt="accueil"/></a>
      </Link>
    </div>
  )
}
