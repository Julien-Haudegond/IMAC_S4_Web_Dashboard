import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export default ({ name }) => {
  const newName = name.replace(/\s+/g, '-').toLowerCase() // Change the month name from something like "Hello World" to "hello-world"
  const idAndFor = `C-${newName}` // C is the letter used on the upper div but IDK why

  const monthName = name.split('(')[1].split(')')[0] // Get the string inside the parenthesis
  const monthNameToShow = monthName.charAt(0).toUpperCase() + monthName.slice(1)

  const periodPath = '/period/' + name

  return (
    <li>
      <div class="sub-item">
        <input type="checkbox" id={idAndFor}/>
        <img src="https:zupimages.net/up/20/16/fjl5.png" class="arrow"/>
        <label for={idAndFor}>
          <Link to={periodPath}>
            <a href="#">{monthNameToShow}</a>
          </Link>
        </label>
      </div>
    </li>
  )
}
