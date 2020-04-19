import { h } from 'hyperapp'

export default ({ region, festivals }) => {
  const nboffestiv = festivals.length
  const totalnboffestiv = 3136
  const percent = Math.round((nboffestiv * 100) / totalnboffestiv) + '%'

  let pluriel = ''

  if (nboffestiv > 1) {
    pluriel = 's'
  }

  return (
    <div class="localisation">
      <div class="localisation-bar">
        <div id="under-bar">
          <div id="bar" style={{ width: percent }}>
          </div>
        </div>
        <p> {nboffestiv} festival{pluriel} de ce domaine sur {totalnboffestiv} festivals tous domaines confondus. </p>
      </div>
      <div class="localisation-view">
        <h1>Localisation view: {region}</h1> {
          festivals.map(item => <p>{item.name}</p>)
        }
      </div>
    </div>
  )
}
