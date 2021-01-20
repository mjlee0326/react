import * as types from "./ActionTypes";
//INCREMENT, DECREMENT, SET_COLOR action이 특정 카운터를
//조작할 수 있도록 설정해야 하므로 index 값을 액션 객체에 포함

export const increment = () => ({
    type: types.INCREMENT,
    index,
});

export const decrement = () => ({
    type: types.DECREMENT,
    index,
});

export const setColor = (color) => ({
    type: types.SET_COLOR,
    index,
    color,
});

//카운터를 새로  만들 때 기본 색상을 받을 수 있도록 color가 파라미터로 설정
export const create = (color) => ({
    type: types.CREATE,
    color,
});

export const remove = () => ({
    type: types.REMOVE,
});
