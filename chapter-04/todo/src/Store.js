import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {reducer as todoReducer} from './todos'
import {reducer as filterReducer} from './filter'
// import Perf from 'react-addons-perf'

const win = window
// win.Perf = Perf

// combineReducers() 接收一个对象作为参数, 返回一个新的 reducer 函数
const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
})

const middlewares = []
// if(process.env.NODE_ENV !== 'production') {
//     middlewares.push(require('redux-immutable-state-invariant')())
// }

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
)

export default createStore(reducer, {}, storeEnhancers)