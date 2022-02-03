import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';



const reducers=combineReducers({


})

const initialsState={};

const middleware=[thunk]



const store=createStore(reducers,initialsState,applyMiddleware(...middleware))

export default store