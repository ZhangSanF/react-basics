// action 代表一个动作,定义 action 通常需要两个文件,一个定义 action 类型,一个定义 action 构造函数
import * as ActionTypes from './ActionTypes.js'
import AppDispatcher from './AppDispatcher.js'

export const increment = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    })
}

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    })
}