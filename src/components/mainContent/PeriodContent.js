import { h } from 'hyperapp'
import Loadingbar from '../graphics/Loadingbar'

export default ({ festivals, totalCount }) => {
  return (
    <div class="period">
      <Loadingbar
        festivalsnb ={festivals.length}
        festivalsnbtotal = {totalCount}
        festivalsview = {'period'}
      ></Loadingbar>
    </div>
  )
}
