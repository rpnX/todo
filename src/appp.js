import React, { Component } from 'react'
import './App.css';


class Appp extends Component {

    constructor() {
        super();
        this.state ={
            newTodo: "",
            todos:[
                { id: 1, text:"1 todo" },
                { id: 2, text:"2 todo" },
                { id: 3, text:"3 todo" },
                { id: 4, text:"4 todo" },
                { id: 5, text:"5 todo" },
            ]
        }

        this.handleChange = this.handleChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.generatorId = this.generatorId.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
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
        todos.push(newTodo)

        this.setState({
            todos: todos, 
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
            <button className="addtodo"
            onClick={this.addTodo}
            >add todo</button>

            <div className="list">
                {this.state.todos.map((item, key)=>(
                    <div key={key} className="item" id={item.id}>
                        {item.text}
                        <button className="update">U</button>
                        <button className="dell" onClick={() => {this.deleteTodo(key)}}>X</button>
                    </div>
                    )
                )}
            </div>
    </div>
        )
    }
}

export default Appp