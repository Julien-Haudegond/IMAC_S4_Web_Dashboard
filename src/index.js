import { app } from 'hyperapp'
import { withLogger } from '@hyperapp/logger'
import { location } from '@hyperapp/router'

import actions from './actions'
import state from './state'
import view from './components/views/MainView'

const main = withLogger(app)(
  state,
  actions,
  view,
  document.body
)

location.subscribe(main.location)
