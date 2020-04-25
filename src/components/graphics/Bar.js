import { h } from 'hyperapp'
import Chart from 'chart.js'

const initChartJs = (element, props) => {
  const ctx = element.getContext('2d')
  const chart = new Chart(ctx, {
    type: 'bar',

    data: {
      labels: props.labelBar,
      datasets: [{
        label: props.title || 'default title',
        backgroundColor: props.colorOfBackground,
        borderColor: props.colorOfBackground,
        data: props.datas
      }]
    },

    options: {
      width: props.widthBar,
      height: props.heightBar,
      style: 'background-color: #69d100',
      offset: true,
      cutoutPercentage: 60,
      responsive: false,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: props.titleChartBar,
        position: 'bottom',
        fontSize: 35,
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

export default ({ labelBar, title, colorOfBackground, datas, widthBar, heightBar, titleChartBar }) =>
  <div id={`${title}_div`} class="line">
    <canvas id={`${title}_canvas`}
      oncreate={(element) => initChartJs(element, { labelBar, title, titleChartBar, colorOfBackground, datas, widthBar, heightBar })}
      onupdate={(element) => updateChartJS(element, {
        labels: labelBar,
        datasets: [{
          label: title || 'default title',
          backgroundColor: colorOfBackground,
          borderColor: colorOfBackground,
          data: datas
        }]
      })}
      width='800'
      height='400'
    ></canvas>
  </div>
