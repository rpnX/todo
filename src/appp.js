import React, { Component } from 'react'
import './App.css';


class Appp extends Component {

    constructor() {
        super();
        this.state ={
            
            todos:[
                { id: 1, text:"1 todo" },
                { id: 2, text:"2 todo" },
                { id: 3, text:"3 todo" },
                { id: 4, text:"4 todo" },
                { id: 5, text:"5 todo" },
            ]
        }
    }

    render() {
        return (
        <div className="App">
            <header className="App-header">
                TODO
            </header>
            <div className="list">
                {this.state.todos.map((item, key)=>(
                
                    <div key={key} className="item" id={item.id}>
                        {item.text}
                        <button className="update">u</button>
                        <button className="dell">X</button>
                    </div>
                
                
                    )
                )}
            </div>
    </div>
        )
    }
}

export default Appp