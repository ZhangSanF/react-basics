// 父组件向子组件传参(prop)/生命周期
// forceUpdate() 每个 React 组件都可以通过 forceUpdate 函数强行引发一次重新绘制
import React, { Component } from 'react'
import Counter from './Counter.js'

const style = {
    margin:'20px'
}

class ControlPanel extends Component {
    render() {
        return (
            <div style={style}>
                <Counter caption="First"/>
                <Counter caption="Second" initValue={10}/>
                <Counter caption="Third" initValue={20}/>
                <button onClick={ ()=> this.forceUpdate() }>Click me to re-render!</button>
            </div>
        )
    }
}

export default ControlPanel
