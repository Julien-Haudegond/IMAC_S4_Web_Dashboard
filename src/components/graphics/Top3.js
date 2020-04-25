import { h } from 'hyperapp'
import { getOrderedListWithOccurences } from '../utils/Utils'

import King from '../../../images/king.png'

export default ({ festivals, festivalsfilter }) => {
  const orderedList = getOrderedListWithOccurences(festivals, festivalsfilter)
  const listLength = (orderedList.length <= 3) ? orderedList.length : 3

  const sentencechanging = (festivalsfilter) => {
    switch (festivalsfilter) {
      case 'region':
        return `TOP ${listLength} des régions les plus dynamiques`
      case 'department':
        return `TOP ${listLength} des départements les plus dynamiques`
      case 'domain':
        return `TOP ${listLength} des domaines les plus réprésentés de la région`
      default:
        return 'default'
    }
  }

  const returnList = (list, length) => {
    switch (length) {
      case 0:
        return
      case 1:
        return (
          <ul>
            <li> <span> 1. </span> <p> {list[0][0]} </p> <img src={King}></img> <p> {list[0][1]} </p> </li>
          </ul>
        )
      case 2:
        return (
          <ul>
            <li> <span> 1. </span> <p> {list[0][0]} </p> <img src={King}></img> <p> {list[0][1]} </p> </li>
            <li> <span> 2. </span> <p> {orderedList[1][0]} </p> <p> {orderedList[1][1]} </p> </li>
          </ul>
        )
      case 3:
        return (
          <ul>
            <li> <span> 1. </span> <p> {list[0][0]} </p> <img src={King}></img> <p> {list[0][1]} </p> </li>
            <li> <span> 2. </span> <p> {list[1][0]} </p> <p> {list[1][1]} </p> </li>
            <li> <span> 3. </span> <p> {list[2][0]} </p> <p>{list[2][1]} </p> </li>
          </ul>
        )
      default:
        return 'default'
    }
  }

  return (
    <div class="top3">
      <h2> {sentencechanging(festivalsfilter)} </h2>
      <div class="under-top3">
        {
          returnList(orderedList, listLength)
        }
      </div>
    </div>
  )
}
