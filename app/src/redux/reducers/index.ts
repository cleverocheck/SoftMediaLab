import { combineReducers } from 'redux'

import global from './global'
import { InitialStateType as InitialStateTypeGlobal } from '../actions/global/types'

export interface ReducersTotal {
    global: InitialStateTypeGlobal
}

export default combineReducers({
    global: global
})
