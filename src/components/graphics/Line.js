/* eslint-disable fp/no-mutation */
import { h } from 'hyperapp'
import Chart from 'chart.js'

const initChartJs = (element, props) => {
  const ctx = element.getContext('2d')
  const chart = new Chart(ctx, {
    type: 'line',

    data: {
      labels: props.labelLine,
      datasets: [{
        fill: props.fill || false,
        label: props.title || 'default title',
        backgroundColor: props.colorOfBackground,
        borderColor: props.colorOfBackground,
        data: props.datas
      }]
    },

    options: {
      width: props.widthLine,
      height: props.heightLine,
      cutoutPercentage: 60,
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: props.titleChartLine,
        position: 'bottom',
        fontSize: 20,
        defaultFontFamily: 'Roboto',
        fontColor: 'black',
        fontStyle: 'bold'
      },
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          defaultFontFamily: 'Roboto',
          fontSize: 20,
          fontColor: 'black',
          boxWidth: 30
        }
      }
    }
  })
}

const updateChartJS = (element, data) => {
  if (data.labels.length === 0) {
    return
  }

  const idToGet = element.parentElement.id.split('_div')[0] + '_canvas'

  Chart.helpers.each(Chart.instances, (instance) => {
    if (idToGet === instance.chart.canvas.id) {
      const upchart = instance.chart
      upchart.data = data
      upchart.update()
    }
  })
}

export default ({ labelLine, title, colorOfBackground, datas, widthLine, heightLine, titleChartLine, fill }) =>
  <div id={`${title}_div`} class="line">
    <canvas id={`${title}_canvas`}
      oncreate={(element) => initChartJs(element, { labelLine, title, titleChartLine, colorOfBackground, datas, widthLine, heightLine })}
      onupdate={(element) => updateChartJS(element, {
        labels: labelLine,
        datasets: [{
          label: title || 'default title',
          backgroundColor: colorOfBackground,
          borderColor: colorOfBackground,
          data: datas,
          fill: fill
        }]
      })}
      width='500'
      height='300'
    ></canvas>
  </div>
