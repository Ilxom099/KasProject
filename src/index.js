import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from './store/store'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);