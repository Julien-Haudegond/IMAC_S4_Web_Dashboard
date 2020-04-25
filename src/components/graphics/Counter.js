import { h } from 'hyperapp'

export default ({ festivalsNb, title }) => {
  return (
    <div class="counter">
      <h2 class="counter-title">{title}</h2>
      <div class="counter-bottom">
        <p class="counter-text"><span class="counter-number">{festivalsNb}</span> festivals.</p>
      </div>
    </div>
  )
}
