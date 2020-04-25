import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export default ({ name }) => {
  const monthName = name.split('(')[1].split(')')[0] // Get the string inside the parenthesis
  const monthNameToShow = monthName.charAt(0).toUpperCase() + monthName.slice(1)

  const periodPath = '/IMAC_S4_Web_Dashboard/period/' + name

  return (
    <li>
      <div class="sub-item-period">
        <Link to={periodPath}>
          <a href="#">{monthNameToShow}</a>
        </Link>
      </div>
    </li>
  )
}
