import { app } from 'hyperapp'
import { withLogger } from '@hyperapp/logger'

import actions from './actions'
import state from './state'
import view from './components/views/MainView'

withLogger(app)(
  state,
  actions,
  view,
  document.body
)
