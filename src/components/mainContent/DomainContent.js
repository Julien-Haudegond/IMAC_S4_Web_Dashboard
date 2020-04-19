import { h } from 'hyperapp'

export default ({ title, festivals }) => {
  const nboffestiv = festivals.length
  const totalnboffestiv = 3136
  const percent = Math.round((nboffestiv * 100) / totalnboffestiv) + '%'

  let pluriel = ''

  if (nboffestiv > 1) {
    pluriel = 's'
  }
  return (
    <div class="domain">
      <div class="domain-bar">
        <div id="under-bar">
          <div id="bar" style={{ width: percent }}>
          </div>
        </div>
        <p> {nboffestiv} festival{pluriel} de ce domaine sur {totalnboffestiv} festivals tous domaines confondus. </p>
      </div>
      <div class="domain-view">
        <h1>Domain view: {title}</h1>
        {
          festivals.map(item => <p>{item.name}</p>)
        }
      </div>
    </div>
  )
}
