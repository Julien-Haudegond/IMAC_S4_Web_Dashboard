import { h } from 'hyperapp'
import { getOrdereDataTopUn } from '../utils/Utils'

export default ({ festivals, indexSentence }) => {
  const orderedDatas = getOrdereDataTopUn(festivals, indexSentence)

  const sentencechanging = (indexSentence) => {
    switch (indexSentence) {
      case '1':
        return 'Ville star de la période'
      case '2':
        return 'Ville star de la région, la reine de la fête'
      case '3':
        return 'Département maudit de la région'
      /*
      case '4':
        return 'Jour maudit, celui où les festivals manquent'
      case '5':
        return 'Jour star, celui où les festivals sont nombreux'
      case '6':
        return 'L évènement doyen de la région'
      case '7':
        return 'Le petit nouveau de la région'
    */
      default:
        return 'default'
    }
  }

  return (
    <div class="top1">
      <h2> {sentencechanging(indexSentence)} </h2>
      <div class="under-top1">
        {
          <ul>
            <li> <p> {orderedDatas[0][0]} </p> <p> {orderedDatas[0][1]} </p> </li>
          </ul>
        }
      </div>
    </div>
  )
}
