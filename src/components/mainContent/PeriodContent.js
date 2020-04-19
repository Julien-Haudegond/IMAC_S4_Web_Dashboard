import { h } from 'hyperapp'

export default ({ month, festivals }) => {

var nboffestiv = festivals.length
var totalnboffestiv = 3136
var percent = Math.round((nboffestiv*100)/totalnboffestiv)+'%'

var pluriel = '';

if (nboffestiv>1){
	pluriel = 's';
}

  return (
  	<div class="period">
  		<div class="period-bar">
  			<div id="under-bar">
				<div id="bar" style={{ width: percent }}>
				</div>
			</div>
	    	<p> {nboffestiv} festival{pluriel} à cette période sur {totalnboffestiv} festivals par an. </p>
  		</div>
  		<div class="period-view">
    		<h1>Period view: {month}</h1>
    		{
	        festivals.map(item => <p>{item.name}</p>)
	      	}
    	</div>
    </div>
  )
}
