import { h } from 'hyperapp'

import SideBarDomaine from '../SideBar/SideBarDomaine'
import SideBarLocalisation from '../SideBar/SideBarLocalisation'
import SideBarPeriode from '../SideBar/SideBarPeriode'
import SideBarLogo from '../SideBar/SideBarLogo'

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
