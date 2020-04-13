const INITIAL_STATE = {
  value: 0,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'add': {
      console.log(111)
      return Object.assign({}, state, {
        value: state.value + action.payload,
      })
    }
    default:
      return state
  }
}
