import { h } from 'hyperapp'

export default ({ festivalsnb, festivalsnbtotal, festivalsview }) => {
  const percent = Math.round((festivalsnb * 100) / festivalsnbtotal) + '%'
  const pluriel = (festivalsnb > 1) ? 's' : ''
  const sentencechanging = (festivalsview, festivalsnbtotal, festivalsnb, pluriel) => {
    switch (festivalsview) {
      case 'domain':
        console.log(festivalsnbtotal)
        return festivalsnb+' festival'+pluriel+' de ce domaine sur '+ festivalsnbtotal +' festivals tous domaines confondus.'
      case 'period':
        return festivalsnb+' festival'+pluriel+' à cette période sur '+ festivalsnbtotal +' festivals toutes périodes confondues.'
      case 'localisation':
        return festivalsnb+' festival'+pluriel+' dans cette région sur '+ festivalsnbtotal +' festivals toutes régions confondues.'
      default:
        return 'default'
    }
  }
  return (
    <div class="loading-bar">
      <div id="under-bar">
        <div id="bar" style={{ width: percent }}>
        </div>
      </div>
      <p> {sentencechanging(festivalsview, festivalsnbtotal, festivalsnb, pluriel)} </p>
    </div>
  )
}
