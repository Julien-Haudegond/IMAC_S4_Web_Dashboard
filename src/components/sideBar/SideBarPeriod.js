/* eslint-disable import/no-absolute-path */
/* eslint-disable fp/no-mutating-methods */
import { h } from 'hyperapp'
import MonthItem from './MonthItem'

import Arrow from '/images/arrow.png'

export default ({ months }) => {
  return (
    <div class="item">
      <input type="checkbox" id="C"/>
      <img src={Arrow} class="arrow"/><label for="C">Période</label>
      <ul>
        {
          months.items
            .sort((a, b) => parseInt(a.name.split(' ')[0], 10) - parseInt(b.name.split(' ')[0], 10))
            .map(item =>
              <MonthItem name={item.name}></MonthItem>
            )
        }
      </ul>
    </div>
  )
}
