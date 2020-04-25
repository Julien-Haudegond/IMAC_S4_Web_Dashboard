/* eslint-disable fp/no-loops */
import { h } from 'hyperapp'
import Dougnut from '../graphics/Dougnut'
import Bar from '../graphics/Bar'
import Loadingbar from '../graphics/Loadingbar'
import Top3 from '../graphics/Top3'

export default ({ festivals, totalCount }) => {
  return (
    <div class="domain">
      <Loadingbar
        festivalsnb ={festivals.length}
        festivalsnbtotal = {totalCount}
        festivalsview = {'domain'}
      ></Loadingbar>
      <div class="domain-view">
        <Bar
          title={'Nombre de festivals'}
          titleChartBar={"Pics d'affluences de ces festivals en fonction des mois"}
          labelBar={['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']}
          datas={[
            festivals.filter(item => (item.startMonth === '01 (janvier)')).length,
            festivals.filter(item => (item.startMonth === '02 (février)')).length,
            festivals.filter(item => (item.startMonth === '03 (mars)')).length,
            festivals.filter(item => (item.startMonth === '04 (avril)')).length,
            festivals.filter(item => (item.startMonth === '05 (mai)')).length,
            festivals.filter(item => (item.startMonth === '06 (juin)')).length,
            festivals.filter(item => (item.startMonth === '07 (juillet)')).length,
            festivals.filter(item => (item.startMonth === '08 (août)')).length,
            festivals.filter(item => (item.startMonth === '09 (septembre)')).length,
            festivals.filter(item => (item.startMonth === '10 (octobre)')).length,
            festivals.filter(item => (item.startMonth === '11 (novembre)')).length,
            festivals.filter(item => (item.startMonth === '12 (décembre)')).length
          ]}
          colorOfBackground={'#19a09c'}
          widthBar={300}
          heightBar={300}
        ></Bar>
        <Dougnut
          title = {'Doughnut1'}
          titleChartDougnut = {'Répartition en fonction de la parité des départements'}
          labelDoughnut = {['Départements pairs', 'Département impairs']}
          datas = {[festivals.filter(item => (item.departmentNb % 2 === 0)).length, festivals.filter(item => (item.departmentNb % 2 === 1)).length]}
          colorOfBackground = {['#f1c40f', '#ca1551']}
          widthDoughnut = {250}
          heightDoughnut = {250}
        ></Dougnut>
        <Dougnut
          title = {'Doughnut2'}
          titleChartDougnut = {'Pics d\'affluence de ces festivals en fonction des saisons'}
          labelDoughnut = {['printemps', 'été', 'automne', 'hiver']}
          datas = {[festivals.filter(item => (item.startMonth === '03 (mars)' || item.startMonth === '04 (avril)' || item.startMonth === '05 (mai)')).length,
            festivals.filter(item => (item.startMonth === '06 (juin)' || item.startMonth === '07 (juillet)' || item.startMonth === '08 (août)')).length,
            festivals.filter(item => (item.startMonth === '09 (septembre)' || item.startMonth === '10 (octobre)' || item.startMonth === '11 (novembre)')).length,
            festivals.filter(item => (item.startMonth === '12 (décembre)' || item.startMonth === '01 (janvier)' || item.startMonth === '02 (février)')).length]}
          colorOfBackground = {['#f1c40f', '#ca1551', '#94d6cE', '#19a09c']}
          widthDoughnut = {250}
          heightDoughnut = {250}
        ></Dougnut>
        <Dougnut
          title = {'Doughnut3'}
          titleChartDougnut = {'Répartition des festivals en fonction des îles de la France'}
          labelDoughnut = {['DOMTOM', 'Corse', 'Ile de France', 'Province']}
          datas = {[
            festivals.filter(item => {
              const listDOMTOM = ['La Réunion', 'Guadeloupe', 'Martinique', 'Mayotte', 'Guyane', 'Nouvelle Calédonie', 'Polynésie française']
              for (const elt of listDOMTOM) {
                if (item.region === elt) return true
              }
              return false
            }).length,
            festivals.filter(item => (item.region === 'Corse')).length,
            festivals.filter(item => (item.region === 'Île-de-France')).length,
            festivals.filter(item => {
              const listProvince = ['Auvergne-Rhône-Alpes', 'Occitanie', 'Nouvelle-Aquitaine', 'Provence-Alpes-Côte d Azur', 'Bretagne', 'Grand Est', 'Pays de la Loire', 'Hauts-de-France', 'Bourgogne-Franche-Comté', 'Normandie', 'Centre-Val de Loire']
              for (const elt of listProvince) {
                if (item.region === elt) return true
              }
              return false
            }).length]}
          colorOfBackground = {['#94d6cE', '#19a09c', '#ca1551', '#f1c40f']}
          widthDoughnut = {250}
          heightDoughnut = {250}
        ></Dougnut>
        <Dougnut
          title = {'Doughnut4'}
          titleChartDougnut = {'Répartition des festivals en fonction des environnements'}
          labelDoughnut = {['Au bord de l eau', 'A flanc de montagne', 'Autre']}
          datas = {
            [festivals.filter(item => {
              const listWater = [971, 972, 973, 974, 976, 59, 62, 80, 76, 27, 14, 50, 35, 22, 29, 56, 44, 85, 17, 33, 40, 64, 66, 11, 34, 30, 13, 83, 6]
              for (const elt of listWater) {
                if (item.departmentNb === elt) return true
              }
              return false
            }).length,
            festivals.filter(item => {
              const listMountain = [57, 54, 67, 68, 88, 70, 25, 90, 39, 21, 89, 58, 71, 69, 42, 3, 63, 23, 87, 19, 46, 12, 81, 34, 30, 12, 48, 15, 43, 7, 84, 64, 65, 31, 9, 66, 11, 26, 38, 1, 73, 74, 6, 5, 4, 974, 971, 972]
              for (const elt of listMountain) {
                if (item.departmentNb === elt) return true
              }
              return false
            }).length,
            festivals.filter(item => {
              const listOther = [95, 77, 91, 78, 91, 2, 60, 8, 51, 10, 55, 52, 45, 18, 41, 36, 37, 28, 61, 72, 53, 49, 79, 86, 16, 24, 47, 32]
              for (const elt of listOther) {
                if (item.departmentNb === elt) return true
              }
              return false
            }).length]}
          colorOfBackground = {['#19a09c', '#ca1551', '#f1c40f']}
          widthDoughnut = {250}
          heightDoughnut = {250}
        ></Dougnut>
        <Top3
          festivals = {festivals}
          festivalsfilter = {'region'}>
        </Top3>
        <Top3
          festivals = {festivals}
          festivalsfilter = {'department'}>
        </Top3>
      </div>
    </div>
  )
}
