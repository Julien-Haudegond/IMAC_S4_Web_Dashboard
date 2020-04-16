import { h } from 'hyperapp'

export default ({ name, subdomains }) => {
  const newName = name.replace(/\s+/g, '-').toLowerCase() // Change the domain name from something like "Hello World" to "hello-world"
  const idAndFor = `A-${newName}`

  return (
    <li>
      <div class="sub-item">
        <input type="checkbox" id={idAndFor}/>
        <img src="https:zupimages.net/up/20/16/fjl5.png" class="arrow"/>
        <label for={idAndFor}>{name}</label>
        <ul>
          {
            subdomains.map(item => {
              return (
                <li><a href="#">{item.name}</a></li>
              )
            })
          }
        </ul>
      </div>
    </li>
  )
}
