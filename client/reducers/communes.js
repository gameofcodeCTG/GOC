import { combineReducers } from 'redux'

function commune(state = [],action){
   return state;
}


function selectCommune(state = [], action) {
  switch (action.type) {

    case 'SELECT_COMMUNE':


      return {
        id: action.value
      }

    default:
      return state
  }
}

const communes = combineReducers({
  commune, selectCommune
})
export default communes;
