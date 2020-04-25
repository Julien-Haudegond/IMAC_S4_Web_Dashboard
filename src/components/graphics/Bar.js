import { h } from 'hyperapp'
import Chart from 'chart.js'

const initChartJs = (element, props) => {
  const ctx = element.getContext('2d')
  const chart = new Chart(ctx, {
    type: 'horizontalBar',

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
      offset: false,
      cutoutPercentage: 60,
      responsive: false,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          }
        }]
      },
      title: {
        display: true,
        text: props.titleChartBar,
        position: 'top',
        fontSize: 25,
        defaultFontFamily: 'Roboto',
        fontColor: 'black',
        fontStyle: 'bold'
      },
      legend: {
        display: false,
        position: 'top',
        labels: {
          defaultFontFamily: 'Roboto',
          fontSize: 22,
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
  <div id={`${title}_div`} class="bar">
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
      width='700'
      height='500'
    ></canvas>
  </div>
