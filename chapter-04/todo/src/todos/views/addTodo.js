import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

import {addTodo} from '../actions.js';

class AddTodo extends Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      value: ''
    }
  }

  onSubmit(ev) {
    ev.preventDefault();

    const inputValue = this.state.value
    // trim() 去除字符串两边的空格,如果用户只输入空格,直接 return
    if (!inputValue.trim()) {
      return;
    }

    this.props.onAdd(inputValue);
    this.setState({value: ''})
  }

  onInputChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" onChange={this.onInputChange} value={this.state.value} />
          <button className="add-btn" type="submit">
            添加
          </button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};
// 没有用到 store 状态内的属性,所以 mapStateToProps 是 null
export default connect(null, mapDispatchToProps)(AddTodo);