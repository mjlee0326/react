import React from "react";
import { bindActionCreators } from "redux";
import * as types from "../actions/ActionTypes";

//sub reducer
const initialState = {
    color: "black",
};

const color = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_COLOR:
            return {
                color: action.color,
            };
        default:
            return state;
    }
};

export default color;
