/* eslint-disable import/no-absolute-path */
import { h } from 'hyperapp'
import DomainItem from './DomainItem'

import Arrow from '/images/arrow.png'

export default ({ domains }) => {
  return (
    <div class="item">
      <input type="checkbox" id="A"/>
      <img src={Arrow} class="arrow"/><label for="A">Domaines</label>
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
