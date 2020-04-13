import { h } from 'hyperapp'
import SideBar from '../sideBar/SideBar'
import MainContent from '../mainContent/MainContent'

export default (state, actions) => {
	return(
		<div id="container">
			{ SideBar(state, actions) }
			{ MainContent(state, actions) }
		</div>
	)
}
