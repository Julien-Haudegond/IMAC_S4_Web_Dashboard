import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export default ({ name }) => {
  const localisationPath = '/localisation/' + name

  return (
    <li>
      <div class="sub-item-localisation">
        <Link to={localisationPath}>
          <a href="#">{name}</a>
        </Link>
      </div>
    </li>
  )
}
