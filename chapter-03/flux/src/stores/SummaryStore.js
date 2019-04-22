import AppDispatcher from '../AppDispatcher.js'
import * as ActionTypes from '../ActionTypes.js'
import CounterStore from './CounterStore.js'
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'changed'

function computeSummary(counterValues) {
    let summary = 0
    for(const key in counterValues) {
        if(counterValues.hasOwnProperty(key)) { // 去掉原型上的属性
            summary += counterValues[key]
        }
    }
    return summary    
}

const SummaryStore = Object.assign({}, EventEmitter.prototype,{
    getSummary: function() {
        return computeSummary(CounterStore.getCounterValues())
    },
    emitChange: function() {
        // emit() 广播一个特定事件,第一个参数是字符串类型的事件名称
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function(callback) {
        // on() 事件处理函数,第一个参数是字符串类型的事件名称,第二个参数是处理函数
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeLiserner: function(callback) {
        // removeListener() 删除事件,第一个参数是字符串类型的事件名称,第二个参数是处理函数
        this.removeLiserner(CHANGE_EVENT, callback)
    }
})

SummaryStore.dispatchToken = AppDispatcher.register((action) => {
    if((action.type === ActionTypes.INCREMENT) || (action.type === ActionTypes.DECREMENT)) {
        // waitfFor() 接收一个数组作为参数,作用: 暂停当前的处理,直到 dispatchToken 代表的那些已注册回调函数执行结束才能继续,先计算加减,然后计算总和
        AppDispatcher.waitFor([CounterStore.dispatchToken])
        SummaryStore.emitChange()
    }
})

export default SummaryStore