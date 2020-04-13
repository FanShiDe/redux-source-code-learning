const INITIAL_STATE = {
  name: '',
  age: 0,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'setName': {
      console.log(22222)
      return Object.assign({}, state, {
        name: action.payload
      })
    }
    default:
      return state
  }
}
