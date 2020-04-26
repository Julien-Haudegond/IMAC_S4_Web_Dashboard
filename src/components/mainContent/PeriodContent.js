/* eslint-disable fp/no-loops */
import { h } from 'hyperapp'
import Dougnut from '../graphics/Dougnut'
import Loadingbar from '../graphics/Loadingbar'
import Top3 from '../graphics/Top3'
import Top1 from '../graphics/Top1'
import Bar from '../graphics/Bar'

export default ({ festivals, totalCount }) => {
  return (
    <div class="period">
      <Loadingbar
        festivalsnb={festivals.length}
        festivalsnbtotal={totalCount}
        festivalsview={'period'}
      ></Loadingbar>
      <Bar
        title={'Nombre de festivals'}
        titleChartBar={'Domaines de festivals les plus présents à cette période'}
        labelBar={['Musiques actuelles', 'Cinéma et audiovisuel', 'Musiques classiques', 'Cirque et Arts de la rue', 'Spectacle Vivant', 'Livre et littérature', 'Transdisciplinaire', 'Divers spectacle vivant', 'Pluridisciplinaire musique', 'Danse', 'Arts plastiques et visuels', 'Théâtre', 'Domaines divers']}
        datas={[
          festivals.filter(item => (item.domain === 'Musiques actuelles' || item.domain === 'Musiques Actuelles')).length,
          festivals.filter(item => (item.domain === 'Cinéma et audiovisuel')).length,
          festivals.filter(item => (item.domain === 'Musiques classiques')).length,
          festivals.filter(item => (item.domain === 'Cirque et Arts de la rue')).length,
          festivals.filter(item => (item.domain === 'Pluridisciplinaire Spectacle vivant')).length,
          festivals.filter(item => (item.domain === 'Livre et littérature')).length,
          festivals.filter(item => (item.domain === 'Transdisciplinaire')).length,
          festivals.filter(item => (item.domain === 'Divers Spectacle vivant')).length,
          festivals.filter(item => (item.domain === 'Pluridisciplinaire Musique')).length,
          festivals.filter(item => (item.domain === 'Danse')).length,
          festivals.filter(item => (item.domain === 'Arts plastiques et visuels')).length,
          festivals.filter(item => (item.domain === 'Théâtre')).length,
          festivals.filter(item => (item.domain === 'Domaines divers')).length,
          festivals.filter(item => (item.domain === 'Divers spectacle vivant' || item.domain === 'Divers Spectacle Vivant')).length,
          festivals.filter(item => (item.domain === 'Domaines Divers')).length
        ]}
        colorOfBackground={'#19a09c'}
        widthBar={300}
        heightBar={300}
      ></Bar>
      <Dougnut
        title={'Doughnut5'}
        titleChartDougnut={'Répartition des festivals adaptés aux enfants'}
        labelDoughnut={['Adaptés aux enfants', 'Pas adaptés aux enfants']}
        datas={[
          festivals.filter(item => {
            const listChildren = ['Livre de jeunesse', 'Jeune public', 'Marionnettes', 'Lyrique et choral', 'Conte', 'Danses du monde et traditionnelles', 'Enfance et jeunesse', 'Magie', 'Mime', 'Humour, conte, musique', 'Jardins', 'Jardins et spectacle vivant']
            for (const elt of listChildren) {
              if (item.subdomain === elt) return true
            }
            return false
          }).length,
          festivals.filter(item => {
            const listChildren = ['Livre de jeunesse', 'Jeune public', 'Marionnettes', 'Lyrique et choral', 'Conte', 'Danses du monde et traditionnelles', 'Enfance et jeunesse', 'Magie', 'Mime', 'Humour, conte, musique', 'Jardins', 'Jardins et spectacle vivant']
            for (const elt of listChildren) {
              if (item.subdomain !== elt) return true
            }
            return false
          }).length]}
        colorOfBackground={['#f1c40f', '#ca1551']}
        widthDoughnut={250}
        heightDoughnut={250}
      ></Dougnut>
      <Top3
        festivals={festivals}
        festivalsfilter={'region'}>
      </Top3>
      <Top1
        festivals={festivals}
        indexSentence={'1'}>
      </Top1>
    </div>
  )
}
