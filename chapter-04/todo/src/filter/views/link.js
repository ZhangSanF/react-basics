import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {setFilter} from '../actions.js';
// children 对于任何一个 React 组件都可以访问这样一个属性 eg: <Foo><Bar>WhatEver<Bar/></Foo>
// 可以说 Foo 组件实例的 children 是 <Bar>WhatEver<Bar/> , Bar 组件实例的 children 是 WhatEver
const Link = ({active, children, onClick}) => {
  if (active) {
    return <b className="filter selected">{children}</b>;
  } else {
    return (
      <button className="filter not-selected" onClick={(ev) => {ev.preventDefault(); onClick();}}>
        {children}
      </button>
    );
  }
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);