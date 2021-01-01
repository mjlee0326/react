import React, { Component } from "react";
import EventPractice from "./EventPractice";
import IterationSample from "./IterationSample";
import ScrollBox from "./ScrollBox";

class App extends Component {
    render() {
        return (
            /*
            <div>
                <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
                <button
                    onClick={() => {
                        this.ScrollBox.scrollToBottom();
                    }}
                >
                    to Bottom
                </button>
            </div>
            */
            <IterationSample />
        );
    }
}

export default App;
