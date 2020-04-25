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
        labelBar={['Musiques actuelles', 'Cinéma et audiovisuel', 'Musique classiques', 'Cirque et Arts de la rue', 'Spectacle Vivant', 'Livre et littérature', 'Transdisciplinaire', 'Divers spectacle vivant', 'Pluridisciplinaire musique', 'Danse', 'Arts plastiques et visuels', 'Théâtre', 'Domaines divers', 'Divers spectacle vivant', 'Musiques Actuelles']}
        datas={[
          festivals.filter(item => (item.domaine === 'Musiques actuelles')).length,
          festivals.filter(item => (item.domaine === 'Cinéma et audiovisuel')).length,
          festivals.filter(item => (item.domaine === 'Musique classiques')).length,
          festivals.filter(item => (item.domaine === 'Cirque et Arts de la rue)')).length,
          festivals.filter(item => (item.domaine === 'Pluridisciplinaire Spectacle Vivant')).length,
          festivals.filter(item => (item.domaine === 'Livre et littérature')).length,
          festivals.filter(item => (item.domaine === 'Transdisciplinaire')).length,
          festivals.filter(item => (item.domaine === 'Divers Spectacle Vivant')).length,
          festivals.filter(item => (item.domaine === 'Pluridisciplinaire Musique')).length,
          festivals.filter(item => (item.domaine === 'Danse')).length,
          festivals.filter(item => (item.domaine === 'Arts plastiques et visuels')).length,
          festivals.filter(item => (item.domaine === 'Théâtre')).length,
          festivals.filter(item => (item.domaine === 'Domaines divers')).length,
          festivals.filter(item => (item.domaine === 'Divers spectacle vivant' || 'Divers Spectacle Vivant')).length,
          festivals.filter(item => (item.domaine === 'Musiques actuelles')).length
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
