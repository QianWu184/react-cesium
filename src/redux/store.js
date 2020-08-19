import { createStore } from 'redux'
import appReducer from './reducer/index'

let store = createStore(appReducer)

export default store;