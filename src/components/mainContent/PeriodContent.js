import { h } from 'hyperapp'
import Loadingbar from '../graphics/Loadingbar'

export default ({ month, festivals, totalCount }) => {

  return (
    <div class="period">
      <Loadingbar
        festivalsnb ={festivals.length}
        festivalsnbtotal = {totalCount}
        festivalsview = {'period'}
      ></Loadingbar>
      <div class="period-view">
        <h1>Period view: {month}</h1> {
          festivals.map(item => <p>{item.name}</p>)
        }
      </div>
    </div>
  )
}
