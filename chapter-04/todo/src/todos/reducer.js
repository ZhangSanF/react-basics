import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js'

export default (state = [], action) =>{
    switch(action.type) {
        case ADD_TODO: {
            // state 是一个数组, 我们 return 一个增加了一个对象的数组 return [newObj, ...state]
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ]
        }
        case TOGGLE_TODO: {
            return state.map((todoItem) => {
                if(todoItem.id === action.id) {
                    // 扩展操作符可以在一对 {} 符号中把一个对象展开, 这样,在{}中后面的部分的字段值,可以覆盖展开的部分
                    return {...todoItem, completed: !todoItem.completed}
                } else {
                    return todoItem
                }
            })
        }
        case REMOVE_TODO: {
            return state.filter((todoItem) => {
                return todoItem.id !== action.id
            })
        }
        default: {
            return state
        }
    }
}