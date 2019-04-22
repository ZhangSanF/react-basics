// 抽离组件对 store 的使用,在 index.js 中使用 store -->增加 Proveder
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanel from './views/ControlPanel';
import * as serviceWorker from './serviceWorker';
import store from './Store.js';
import Provider from './Provider.js';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
