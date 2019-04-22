import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Actions from '../Actions.js'
import store from '../Store'

const buttonStyle = {
    margin: '10px'
}

class Counter extends Component {
    constructor(props) {
        super(props)
        this.onIncrement = this.onIncrement.bind(this)
        this.onDecrement = this.onDecrement.bind(this)
        this.onChange = this.onChange.bind(this)
        this.getOwnState = this.getOwnState.bind(this)
        this.state = this.getOwnState()
    }

    getOwnState() {
        return {
            // store.getState() 获取 store 上储存的状态
            value: store.getState()[this.props.caption]
        }
    }
    onIncrement() {
        store.dispatch(Actions.increment(this.props.caption))
    }
    onDecrement() {
        store.dispatch(Actions.decrement(this.props.caption))
    }
    onChange() {
        this.setState(this.getOwnState())
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value);
    }
    componentDidMount() {
        // store.subscribe() 监听其变化来改变 this.state 状态
        store.subscribe(this.onChange)
    }
    componentWillUnmount() {
        store.unsubscribe(this.onChange)
    }

    render() {
        const value = this.state.value
        const {caption} = this.props

        return (
            <div>
                <button style={buttonStyle} onClick={this.onIncrement}>+</button>
                <button style={buttonStyle} onClick={this.onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        )
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
}

export default Counter