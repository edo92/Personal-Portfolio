import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux';
import storeConfig from './store/configStore'
const store = storeConfig();

ReactDOM.render(
        <Provider store={ store }>
                <App/>
        </Provider>,
document.getElementById('root'));

