import { createStore, combineReducers, applyMiddleware } from '../src/index'
import logger from '../middleware/redux-logger'
import logger2 from '../middleware/redux-logger2'

import user from './reducer/user'
import number from './reducer/number'

const reducers = combineReducers({
  user,
  number,
})

const enchancer = applyMiddleware(logger, logger2)

const store = createStore(reducers, {}, enchancer)

export default store
