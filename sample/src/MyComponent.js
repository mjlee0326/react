import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps={
        name: '홍길동',
        age: 0
    }
    static propTypes={
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    /*
    constructor(props){
        super(props);
        this.state={
            number: 3
        }
    }
    */
   state={
       number: 10
   }
    render() {
        return (
            <div>
                <p>이름: {this.props.name}</p>
                <p>나이: {this.props.age}</p>
                <p>숫자: {this.state.number}</p>
                <button onClick={()=>{
                    this.setState({
                        number:this.state.number+1
                    })
                }}>더하기</button>
            </div>
        );
    }
}


export default MyComponent;