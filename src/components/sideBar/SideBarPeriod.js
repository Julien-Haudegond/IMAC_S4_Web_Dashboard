import { h } from 'hyperapp'
import MonthItem from './MonthItem'

export default ({ months }) => {
  return (
    <div class="item">
      <input type="checkbox" id="C"/>
      <img src="https:zupimages.net/up/20/16/fjl5.png" class="arrow"/><label for="C">Période</label>
      <ul>
        {
          // eslint-disable-next-line fp/no-mutating-methods
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
