import { h } from 'hyperapp'
import Loadingbar from '../graphics/Loadingbar'
import Top3 from '../graphics/Top3'
import Top1 from '../graphics/Top1'

export default ({ festivals, totalCount }) => {
  return (
    <div class="localisation">
      <Loadingbar
        festivalsnb ={festivals.length}
        festivalsnbtotal = {totalCount}
        festivalsview = {'localisation'}
      ></Loadingbar>
      <div class="top-in-row">
        <Top3
          festivals = {festivals}
          festivalsfilter = {'department'}>
        </Top3>
        <Top3
          festivals = {festivals}
          festivalsfilter = {'domain'}>
        </Top3>
      </div>
      <div class="top-in-row">
        <Top1
          festivals = {festivals}
          indexSentence = {'2'}>
        </Top1>
        <Top1
          festivals = {festivals}
          indexSentence = {'3'}>
        </Top1>
      </div>
    </div>
  )
}
