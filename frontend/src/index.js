import {createStore} from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer'
import {Provider} from 'react-redux'
import App from './components/App'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
)