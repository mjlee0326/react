import React, { Component } from "react";
import styles from "./App.module.scss";
import classNames from "classnames/bind";
import StyledButton from "./components/Button/StyledButton";

const cx = classNames.bind(styles);

console.log(styles);

class App extends Component {
    render() {
        const isBlue = true;

        return (
            <div>
                <StyledButton big>BUTTON</StyledButton>
            </div>
        );
    }
}

export default App;
