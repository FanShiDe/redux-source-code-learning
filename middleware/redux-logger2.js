// dispath 是 applyMiddleware 中指定的function
// 调用 dispatch 即可打断后续 middleware、reducer 的执行


// next 为最初未被改变的 store.dispatch

export default ({ getState, dispatch }) => next => action => {
  console.log('******* logger 2 start *******')
  console.log('dispatching action', action)
  console.log('dispatch', dispatch)
  // dispatch(action)
  const currentMiddlewareResult = next(action)
  // currentMiddlewareResult 为 action，因为 store.dispatch 的返回值就是最初传入函数的 action
  console.log('current state', getState())
  console.log('******* logger 2 end *******')
  return currentMiddlewareResult
  // 交给下一个 middleware 处理
}