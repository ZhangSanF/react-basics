import React, { Component } from 'react'
import PropTypes from 'prop-types'

const buttonStyle = {
    margin: '10px'
}

class Counter extends Component {
    constructor(props) {
        super(props)
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
        this.state = {
            count: props.initValue,
            caption: props.caption
        }
    }

    // 当组件的 props 发生改变时会被调用 || 父组件的 render 函数被调用时也会被调用
    componentWillReceiveProps(nextProps) {
        console.log('enter  componentWillReceiveProps ' + this.props.caption)
    }
    // 挂载之前
    componentWillMount() {
        console.log('enter componentWillMount ' + this.props.caption)
    }
    // 挂载之后
    componentDidMount() {
        console.log('enter componentDidMount ' + this.props.caption)
    }
    onClickIncrementButton() {
        this.setState({ count: this.state.count + 1 })
    }
    onClickDecrementButton() {
        this.setState({ count: this.state.count - 1 })
    }
    // 更新的过程返回 true 重新渲染页面, 返回 false 不重新渲染页面,默认返回 true
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)
    }

    render() {
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{this.state.caption} count: {this.state.count}</span>
            </div>
        )
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number
}

Counter.defaultProps = {
    initValue: 0
}

export default Counter