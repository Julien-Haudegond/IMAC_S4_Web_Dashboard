import { h } from 'hyperapp'
import RegionItem from './RegionItem'

export default ({ regions }) => {
  return (
    <div class="item">
      <input type="checkbox" id="B"/>
      <img src="https:zupimages.net/up/20/16/fjl5.png" class="arrow"/><label for="B">Localisation</label>
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
