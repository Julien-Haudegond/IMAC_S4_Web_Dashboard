/* eslint-disable import/no-absolute-path */
import { h } from 'hyperapp'
import RegionItem from './RegionItem'

import Arrow from '/images/arrow.png'

export default ({ regions }) => {
  return (
    <div class="item">
      <input type="checkbox" id="B"/>
      <img src={Arrow} class="arrow"/><label for="B">Localisation</label>
      <ul>
        {
          regions.items.map(item =>
            <RegionItem name={item.name}></RegionItem>
          )
        }
      </ul>
    </div>
  )
}
