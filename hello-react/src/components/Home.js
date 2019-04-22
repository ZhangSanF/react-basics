import React, { Component } from 'react';


export default class Home extends Component {
  constructor(){
    super();//执行父类构造器
    this.state = {//设定初始state
      list : ['test1','test2','test3']
    }
    this.addTodo = this.addTodo.bind(this)
  }
  addTodo () {
    console.log(this);
    console.log(this.refs.todoVal.value);
    this.state.list.push(this.refs.todoVal.value);
    //更新页面需要调用setState
    this.setState({
      list : this.state.list
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>home</h1>
            <ul>
              {/* 读取state */}
              {this.state.list.map((item , index)=>{return <li key={index}>{item}</li>})}
            </ul>
            <input type="text" ref="todoVal"/>
            <button onClick={this.addTodo}>click  me</button>
          </div>
        </div>
      </div>
    );
  }
}


