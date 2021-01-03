import React, { Component } from "react";

class EventPractice extends Component {
    state = {
        message: "",
        username: "",
    };

    handleChange = (e) => {
        this.setState({
            //message: e.target.value,
            [e.target.name]: e.target.value,
        });
    };

    handleClick = (e) => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            message: "",
            username: "",
        });
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleClick();
        }
    };
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="input user name please"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="input message please"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
