import { h } from 'hyperapp'
import Loadingbar from '../graphics/Loadingbar'

export default ({ region, festivals, totalCount }) => {
  return (
    <div class="localisation">
      <Loadingbar
        festivalsnb ={festivals.length}
        festivalsnbtotal = {totalCount}
        festivalsview = {'localisation'}
      ></Loadingbar>
      <div class="localisation-view">
        <h1>Localisation view: {region}</h1> {
          festivals.map(item => <p>{item.name}</p>)
        }
      </div>
    </div>
  )
}
