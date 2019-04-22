// 对 redux_basic 优化,在 views 的 counter和Summary 增加子组件  --容器组件和傻瓜组件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanel from './views/ControlPanel';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ControlPanel />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
