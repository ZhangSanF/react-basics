import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>header</h1>
            <button onClick={()=>{this.props.sendData('改变了')}}>改变父组件的message</button>
            <div>name is {this.props.name},age is {this.props.age}</div>
            <ul>
              {this.props.user.hobbies.map((item , index) => <li key={index}>{item}--{index}</li>)}
            </ul>
            <div>{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}


Header.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
  user : PropTypes.object,
  children: PropTypes.element.isRequired
}