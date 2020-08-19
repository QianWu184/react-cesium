
import { combineReducers } from 'redux'
import { SET_CESIUM } from '../action/index'

function cesiumReducer(state = {}, action){
  switch (action.type){
    case SET_CESIUM:
      return Object.assign({}, state, action.cesiumViewer);
  }
}

export default  combineReducers({
  cesiumReducer
});