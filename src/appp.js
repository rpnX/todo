import React, { Component } from 'react'
import './App.css';
import Item from './item';


class Appp extends Component {

    constructor() {
        super();
        this.state ={
            newTodo: "",
            editing: false,
            todos:[
                { id: 1, text:"1 todo" },
                { id: 2, text:"2 todo" },
                { id: 3, text:"3 todo" },
                { id: 4, text:"4 todo" },
                { id: 5, text:"5 todo" },
            ],
            editingKey: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.generatorId = this.generatorId.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
    }

    handleChange(event) {

        this.setState({
            newTodo: event.target.value
        })

    }
    generatorId() {
        const lastId = this.state.todos[this.state.todos.length - 1]
        if (lastId){
            return lastId.id + 1 
        }
        return 1
    }
    addTodo() {
        const newTodo = {
            id: this.generatorId(),
            text: this.state.newTodo   
        }
        const todos = this.state.todos

        if (newTodo.text !== "") {
            todos.push(newTodo)
        } else {
            alert("write some text!")
        }
        
        this.setState({
            todos: todos, 
            newTodo: ""
        })
    }

    editTodo(key) {

        const todo = this.state.todos[key]

        this.setState({
            editing: true,
            newTodo: todo.text,
            editingKey: key
        })

    }

    updateTodo(key) {

        const todo = this.state.todos[this.state.editingKey]
        console.log(todo)
        todo.text = this.state.newTodo

        const todos = this.state.todos
        todos[this.state.editingKey] = todo

        this.setState({
            todos,
            editing: false,
            editingKey: null,
            newTodo: ""
        })

    }

    deleteTodo(key) {

        const todos = this.state.todos
        delete todos[key]

        this.setState({
            todos
        })

    }

    render() {

        return (
        <div className="App">
            <header className="App-header">
                TODO
            </header>

            <input
            type="text"
            name="todo"
            className="formcotrol"
            placeholder="add new todo"
            onChange={this.handleChange}
            value={this.state.newTodo}
            />
            <button
            onClick={this.state.editing ? this.updateTodo : () =>{this.addTodo()} }
            className="addtodo">
            {this.state.editing ? 'Update Todo' : 'Add Todo'}
            </button>

            {!this.state.editing && 
            <div className="list">
                {this.state.todos.map((item, key)=>(
                    <Item
                    item = {item}
                    key = {key}
                    deleteTodo = {() => {this.deleteTodo(key)}}
                    editTodo = {() => {this.editTodo(key)}}
                    />
                    )
                )}
            </div>}
    </div>
        )
    }
}

export default Appp