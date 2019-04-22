import React, { Component } from 'react';
// 动画
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './App.css'

class Child extends Component {
  componentWillUnmount () {
    console.log('子组件被销毁之前componentWillUnmount')
  }
  render () {
    return (
      <div>这个是子组件</div>
    )
  }
}

class App extends Component {
  constructor(){
    super();
    //初始化state
    this.state = {flag:false,list:[]};
    this.toggle = this.toggle.bind(this);
    this.addTodo = this.addTodo.bind(this)
  }
  componentWillMount () {
    console.log('组件挂载之前componentWillMount')
  }
  componentDidMount () {
    console.log('组件挂载之后componentDidMount')
  }
  toggle () {
    this.setState({
      flag : !this.state.flag
    })
  }
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true;
  }
  componentWillUpdate () {
    console.log('组件更新之前componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('组件更新之后componentDidUpdate')
  }
  addTodo () {
    this.state.list.push(this.refs.todoVal.value);
    this.setState({
      list : this.state.list
    })
  }
  deleteTodo (index) {
    this.state.list.splice(index,1);
    this.setState({
      list : this.state.list
    })
  }
  render() {
    console.log('render');
    let items = this.state.list.map((item,index)=>{return <li key={item}>{item}<button onClick={()=>this.deleteTodo(index)}>X</button></li>})
    return (
      <div className="App">
        <button onClick={this.toggle}>切换</button>
        {this.state.flag ? <Child/> : ''}
        <div>
          <input type="text" ref="todoVal"/>
          <button onClick={this.addTodo}>ADD TODO</button>
          <ul>
            <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            {items}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
