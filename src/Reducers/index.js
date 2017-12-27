import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';
export const reducers = combineReducers({
  routing:routerReducer,
  users:users
})
export function reducerCall(state,action,reducerClass){
  const [,method] = action.type.split('.');
  const methods = Object.getOwnPropertyNames(reducerClass).filter(name=>{
    if('length' !== name && 'name'!== name && 'prtotype' !== name){
      return name;
    }
  });
  if(methods.find(x=> x==method)){
    const new_state = cloneObject(state);
    return reducerClass[method](new_state,action);
  }
  else{
    return state;
  }

}
/*
coning a object
 */
function cloneObject(object){
  return JSON.parse(JSON.stringify(object));
}
