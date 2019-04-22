import React, { Component } from 'react';

//引入组件
import Header from './components/Header';
import Home from './components/Home'

class App extends Component {
  constructor(){
    super();//执行父类构造器
    this.state = {//设定初始state
      message : '你好'
    }
    this.sendData = this.sendData.bind(this)
  }
  sendData (val) {
    this.setState({
      message:val
    })
  }
  render() {
    const user = {
      name : 'Anna',
      hobbies : ['Sports','Reading']
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            {/*使用组件  */}
            <Header name={'Max'} age={12} user={user} sendData={this.sendData}>
              <p>I am child</p>
            </Header>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>{this.state.message}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
