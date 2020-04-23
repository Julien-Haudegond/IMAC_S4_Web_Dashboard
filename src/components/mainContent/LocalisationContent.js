import { h } from 'hyperapp'
import Loadingbar from '../graphics/Loadingbar'

export default ({ festivals, totalCount }) => {
  return (
    <div class="localisation">
      <Loadingbar
        festivalsnb ={festivals.length}
        festivalsnbtotal = {totalCount}
        festivalsview = {'localisation'}
      ></Loadingbar>
    </div>
  )
}
