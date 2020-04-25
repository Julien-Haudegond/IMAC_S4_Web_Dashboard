import { h } from 'hyperapp'
import { getOrderedListWithOccurences } from '../utils/Utils'

import King from '../../../images/king.png'

export default ({ festivals, festivalsfilter }) => {
  const orderedList = getOrderedListWithOccurences(festivals, festivalsfilter)

  const sentencechanging = (festivalsfilter) => {
    switch (festivalsfilter) {
      case 'region':
        return 'TOP 3 des régions les plus dynamiques'
      case 'department':
        return 'TOP 3 des départements les plus dynamiques'
      case 'domain':
        return 'TOP 3 des domaines les plus réprésentés de la région'
      default:
        return 'default'
    }
  }

  return (
    <div class="top3">
      <h2> {sentencechanging(festivalsfilter)} </h2>
      <div class="under-top3">
        {
          <ul>
            <li> <span> 1. </span> <p> {orderedList[0][0]} </p> <img src={King}></img> <p> {orderedList[0][1]} </p> </li>
            <li> <span> 2. </span> <p> {orderedList[1][0]} </p> <p> {orderedList[1][1]} </p> </li>
            <li> <span> 3. </span> <p> {orderedList[2][0]} </p> <p>{orderedList[2][1]} </p> </li>
          </ul>
        }
      </div>
    </div>
  )
}
