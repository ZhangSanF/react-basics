import { createStore } from 'redux'
import reducer from './Reducer.js'

const initValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
}
// createStore() 第一个参数代表更新状态的 reducer ,第二个参数是状态的初始值, 第三个参数可选,代表 Store Enhancer
const store = createStore(reducer, initValues)

export default store