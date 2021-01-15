import number from "./number";
import color from "./color";

import { combineReducers } from "redux";

const reducers = combineReducers({
    numberData: number,
    colorData: color,
});

export default reducers;

/*
import * as types from '../actions/ActionTypes';
const initialState = {
    clor: 'black',
    number: 0
}

//reducer function
//직접 수정하는 게 아니라 새로운 객체 만들어서 덮어써야 함
function counter(state=initialState, action){
    switch(action.type){
        case types.INCREMENT:
            return {
                ...state,
                number: state.number+1
        }
        case types.DECREMENT:
            return{
                ...state,
                number: state.number-1
            }
        case types.SET_COLOR:
            return{
                ...state,
                color: action.color
            }
        default:
            return state;
    }
}

export default counter;
*/
