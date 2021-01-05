import React, { Component } from "react";
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {
    state = {
        input: "", //input value

        //init data
        todos: [
            { id: 0, text: "Study React", done: true },
            { id: 1, text: "styling component", done: false },
        ],
    };

    id = 1;
    getId = () => {
        return ++this.id;
    };

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input: value,
        });
    };

    //add new data
    handleInsert = () => {
        const { todos, input } = this.state;

        //new data object
        const newTodo = {
            text: input,
            done: false,
            id: this.getId(),
        };

        this.setState({
            todos: [...todos, newTodo],
            input: " ",
        });
    };
    handleToggle = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex((todo) => todo.id === id);

        //reverse done value
        const toggled = {
            ...todos[index],
            done: !todos[index].done,
        };

        this.setState({
            todos: [
                ...todos.slice(0, index),
                toggled,
                ...todos.slice(index + 1, todos.length),
            ],
        });
    };

    handleRemove = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex((todo) => todo.id === id);

        ///remove find index
        this.setState({
            todos: [
                ...todos.slice(0, index),
                ...todos.slice(index + 1, todos.length),
            ],
        });
    };
    render() {
        const { input, todos } = this.state; //does not include todos,,,occure error,,
        const { handleChange, handleInsert, handleToggle, handleRemove } = this;

        return (
            <PageTemplate>
                <TodoInput
                    onChange={handleChange}
                    onInsert={handleInsert}
                    value={input}
                />
                <TodoList
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                />
            </PageTemplate>
        );
    }
}

export default App;
