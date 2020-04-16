import { h } from 'hyperapp'
import DomainItem from './DomainItem'

export default ({ domains }) => {
  return (
    <div class="item">
      <input type="checkbox" id="A"/>
      <img src="https:zupimages.net/up/20/16/fjl5.png" class="arrow"/><label for="A">Domaines</label>
      <ul>
        {
          domains.items.map(item =>
            <DomainItem name={item.name} subdomains={item.subdomains}></DomainItem>
          )
        }
      </ul>
    </div>
  )
}
