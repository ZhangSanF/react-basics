// 使用 react-redux 插件,实现 store 公有化
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanel from './views/ControlPanel';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import store from './Store.js'

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
