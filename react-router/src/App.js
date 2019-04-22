import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink,Link,Switch,Redirect,withRouter} from 'react-router-dom'
import './App.css'
import { Button } from 'antd-mobile';
class  Home extends Component {
  constructor() {
    super();
    this.state = {
      list:['10010','10086','10000']
    }
  }
  render() {
    return (
      <div>
        <h2>这是主页</h2>
        <ul>
          {this.state.list.map((item)=>{return <li key={item}><Link to={`/detail/${item}`}>{item}</Link></li>})}
          <li><Link to="/detail">无参数链接</Link></li>
        </ul>
      </div>
    )
  }
}
class  News extends Component {
  render() {
    return (
      <div>
        <h2>这是新闻页</h2>
      </div>
    )
  }
}
class  Others extends Component {
  render() {
    return (
      <div>
        <h2>这是其他页</h2>
      </div>
    )
  }
}
class  Detail extends Component {
  render() {
    return (
      <div>
        <h2>这是详情页</h2>
        <p>{this.props.match.params.tel}</p>
      </div>
    )
  }
}
class App extends Component {
  constructor(){
    super();
    //初始化state
    //this.state = {flag:false,list:[]};
    this.toPath = this.toPath.bind(this);
  }
  toPath(){
    //this.props.history.goBack();
    console.log(this)
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="navbar">
              <NavLink exact activeClassName="active" to="/">主页</NavLink>
              <NavLink activeClassName="active" to="/news">新闻</NavLink>
              <NavLink activeClassName="active" to="/others">其他</NavLink>
            </div>
            <hr/>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/news" component={News}></Route>
              <Route path="/others" component={Others}></Route>
              <Route path="/detail/:tel?" component={Detail}></Route>
              <Redirect from="/*" to="/" />
            </Switch>
          </div>
        </Router>
        <button onClick={this.toPath}>click</button>
        <Button type="primary">primary</Button>
      </div>
    );
  }
}

export default App;
