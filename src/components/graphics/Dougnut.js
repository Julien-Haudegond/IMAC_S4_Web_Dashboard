import { h } from 'hyperapp'
import Chart from 'chart.js'

const initChartJs = (element, props) => {
  const ctx = element.getContext('2d')
  const chart = new Chart(ctx, {
    type: 'doughnut',

    data: {
      labels: props.labelDoughnut,
      datasets: [{
        label: props.title || 'default title',
        backgroundColor: props.colorOfBackground,
        borderColor: props.colorOfBackground,
        data: props.datas
      }]
    },

    options: {
      width: props.widthDoughnut,
      height: props.heightDoughnut,
      style: 'background-color: #eff1ed',
      cutoutPercentage: 60,
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: props.titleChartDougnut,
        position: 'top',
        fontSize: 35,
        defaultFontFamily: 'Roboto',
        fontColor: 'black',
        fontStyle: 'bold'
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          defaultFontFamily: 'Roboto',
          fontSize: 20,
          fontColor: 'black',
          boxWidth: 30
        }
      },
      animation: {
        animateRotate: true
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

export default ({ labelDoughnut, title, colorOfBackground, datas, widthDoughnut, heightDoughnut, titleChartDougnut}) =>
  <div id={`${title}_div`} class="doughnut">
    <canvas id={`${title}_canvas`}
      oncreate={(element) => initChartJs(element, { labelDoughnut, title, titleChartDougnut, colorOfBackground, datas, widthDoughnut, heightDoughnut })}
      onupdate={(element) => updateChartJS(element, {
        labels: labelDoughnut,
        datasets: [{
          label: title || 'default title',
          backgroundColor: colorOfBackground,
          borderColor: colorOfBackground,
          data: datas
        }]
      })}
      width='300'
      height='300'
    ></canvas>
  </div>
