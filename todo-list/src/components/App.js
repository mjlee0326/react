import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
    state={
        input: '', //input value

        //init data
        todos:[
            {id: 0, text: 'Study React', done: true},
            {id: 1, text: 'styling component', done: false}
        ]
    }

    id =1;
    getId= () => {
        return ++this.id;
    }

    handleChange = (e) =>{
        const {value} = e.target;
        this.setState({
            input: value
        });
    }

    //add new data
    handleInsert = () => {
        const {todos, input} = this.state;

        //new data object
        const newTodo ={
            text: input,
            done: false,
            id: this.getId()
        };

        this.setState({
            todos:[...todos, newTodo],
            input: ' '
        });
    }

    render() {
        const {input, todos} = this.state; //does not include todos,,,occure error,,
        const{
            handleChange,
            handleInsert
        } = this;

        return (
            <PageTemplate>
                <TodoInput onChange = {handleChange} onInsert={handleInsert} value = {input}/>
                <TodoList todos={todos}/>
            </PageTemplate>
        );
    }
}

export default App;