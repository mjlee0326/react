import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div
        className="Counter"
        onClick={onIncrement}
        //onContextMent event: mouse right button click
        onContextMenu={(e) =>{
            e.preventDefault(); //prevent menu open
            onDecrement();
        }}
        onDoubleClick={onSetColor}
        style={{
            backgroundColor: color
        }}>
            {number}
        </div>
    );
};

Counter.propTypes={
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
}

Counter.defaultProps={
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default Counter;