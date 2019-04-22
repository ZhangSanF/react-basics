import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';

let nextTodoId = 0

// 对于只 return 一个对象的函数体, ES6 允许简写省去 return, 直接用圆括号把返回的对象包起来就行
export const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId ++ ,
    text: text
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})