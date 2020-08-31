import React from 'react';

import ReactDOM from 'react-dom';

import App from './components/App';

import { Provider } from 'react-redux';

import storeGlobal from './store/index';

ReactDOM.render(
    <Provider store={storeGlobal}>
        <App />
    </Provider>, 
document.getElementById("app"))