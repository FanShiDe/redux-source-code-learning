import store from './store'

store.dispatch({
  type: 'add',
  payload: 2
})

store.dispatch({
  type: 'setName',
  payload: 'fanshide'
})
