import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'

export default ({ name }) => {
  const newName = name.replace(/\s+/g, '-').toLowerCase() // Change the region name from something like "Hello World" to "hello-world"
  const idAndFor = `B-${newName}` // B is the letter used on the upper div but IDK why

  const localisationPath = '/localisation/' + name

  return (
    <li>
      <div class="sub-item">
        <input type="checkbox" id={idAndFor}/>
        <img src="https:zupimages.net/up/20/16/fjl5.png" class="arrow"/>
        <label for={idAndFor}>
          <Link to={localisationPath}>
            <a href="#">{name}</a>
          </Link>
        </label>
      </div>
    </li>
  )
}
