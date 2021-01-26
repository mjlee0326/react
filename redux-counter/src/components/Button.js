import React from "react";
import PropTypes from "prop-types";

import "./Buttons.css";

const Button = ({ onCreate, onRemove }) => {
    return (
        <div className="Buttons">
            <div className="btn add" onClick={onClick}>
                create
            </div>
            <div className="btn remove" onClick={onClick}>
                remove
            </div>
        </div>
    );
};

Buttons.PropTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func,
};

Buttons.defaultProps = {
    onCreate: () => {
        console.warn("onCreate not defined");
    },
    onRemove: () => {
        console.warn("onRemove not defined");
    },
};
export default Button;
