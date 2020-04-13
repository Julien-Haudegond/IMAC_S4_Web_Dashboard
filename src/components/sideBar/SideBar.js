import { h } from 'hyperapp'

import SideBarDomaine from '../sideBar/SideBarDomaine'
import SideBarLocalisation from '../sideBar/SideBarLocalisation'
import SideBarPeriode from '../sideBar/SideBarPeriode'
import SideBarLogo from '../sideBar/SideBarLogo'

export default (state, actions) => {
	return(
        <div class="nav">        
            <div class="multi-level">
            	{ SideBarLogo(state, actions) }
                { SideBarDomaine(state, actions) }
				{ SideBarLocalisation(state, actions) }
				{ SideBarPeriode(state, actions) }
            </div>
        </div>
	)
}
