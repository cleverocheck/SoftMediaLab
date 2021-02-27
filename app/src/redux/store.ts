import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import dataService from './middleware/dataService'
import reducers from './reducers/index'

export default (initialState => createStore(reducers, initialState, composeWithDevTools(
    applyMiddleware(
        thunkMiddleware,
        dataService
    )
)))()
