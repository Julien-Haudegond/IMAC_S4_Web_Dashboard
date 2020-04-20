import { h } from 'hyperapp'
import Chart from 'chart.js'

export default ({ labelDoughnut, title, colorOfBackground, datas, widthDoughnut, heightDoughnut }) =>
  <div class="doughnut">
    <canvas id="chartDoughnut"
      oncreate = {(element) => {
        const ctx = element.getContext('2d')
        const c = new Chart(ctx, {
          type: 'doughnut',

          data: {
            labels: labelDoughnut,
            datasets: [{
              label: title || 'default title',
              backgroundColor: colorOfBackground,
              borderColor: colorOfBackground,
              data: datas
            }]
          },

          options: {
            width: widthDoughnut,
            height: heightDoughnut,
            style: 'background-color: #eff1ed',
            cutoutPercentage: 60,
            responsive: true,
            animation: {
              animateRotate: true
            }
            /* layout: {
              padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
              }
            } */
          }
        })
        return (c)
      }}
      width='300'
      height='300'
    ></canvas>
  </div>
