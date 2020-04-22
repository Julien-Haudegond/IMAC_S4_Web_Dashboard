import { h } from 'hyperapp'
import Dougnut from '../graphics/Dougnut'
import Loadingbar from '../graphics/Loadingbar'

export default ({ title, festivals, totalCount }) => {
  return (
    <div class="domain">
      <Loadingbar
        festivalsnb ={festivals.length}
        festivalsnbtotal = {totalCount}
        festivalsview = {'domain'}
      ></Loadingbar>
      <div class="domain-view">
        <Dougnut
          title = {'Titre1'}
          titleChartDougnut = {'Répartition en fonction de la parité des départements'}
          labelDoughnut = {['Départements pairs', 'Département impairs']}
          datas = {[festivals.filter(item => (item.departmentNb % 2 === 0)).length, festivals.filter(item => (item.departmentNb % 2 === 1)).length]}
          colorOfBackground = {['#f1c40f', '#ca1551']}
          widthDoughnut = {250}
          heightDoughnut = {250}
        ></Dougnut>
        <Dougnut
          title = {'Titre2'}
          titleChartDougnut = {'Pics d affluence de ces festivals en fonction des saisons'}
          labelDoughnut = {['printemps', 'été', 'automne', 'hiver']}
          datas = {[festivals.filter(item => (item.startMonth === '03 (mars)' || item.startMonth === '04 (avril)' || item.startMonth === '05 (mai)')).length,
                    festivals.filter(item => (item.startMonth === '06 (juin)' || item.startMonth === '07 (juillet)' || item.startMonth === '08 (août)')).length,
                    festivals.filter(item => (item.startMonth === '09 (septembre)' || item.startMonth === '10 (octobre)' || item.startMonth === '11 (novembre)')).length,
                    festivals.filter(item => (item.startMonth === '12 (décembre)' || item.startMonth === '01 (janvier)' || item.startMonth === '02 (février)')).length]}
          colorOfBackground = {['#f1c40f', '#ca1551', '#94d6cE', '#19a09c']}
          widthDoughnut = {250}
          heightDoughnut = {250}
        ></Dougnut>
        <h1>Domain view: {title}</h1>
        {
          festivals.map(item => <p>{item.name}</p>)
        }
      </div>
    </div>
  )
}
