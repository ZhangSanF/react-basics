import AppDispatcher from '../AppDispatcher.js'
import * as ActionTypes from '../ActionTypes.js'
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'changed'
const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 30
}
const CounterStore = Object.assign({}, EventEmitter.prototype,{
    getCounterValues: function() {
        return counterValues
    },
    emitChange: function() {
        // emit() 广播一个特定事件,第一个参数是字符串类型的事件名称
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function(callback) {
        // on() 事件处理函数,第一个参数是字符串类型的事件名称,第二个参数是处理函数
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function(callback) {
        // removeListener() 删除事件,第一个参数是字符串类型的事件名称,第二个参数是处理函数
        this.removeListener(CHANGE_EVENT, callback)
    }
})

CounterStore.dispatchToken = AppDispatcher.register((action) => {
    if(action.type === ActionTypes.INCREMENT) {
        counterValues[action.counterCaption] ++
        CounterStore.emitChange()
    } else if(action.type === ActionTypes.DECREMENT) {
        counterValues[action.counterCaption] --
        CounterStore.emitChange()
    }
})

export default CounterStore