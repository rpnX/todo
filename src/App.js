import React from 'react';
import './App.css';

function App() {

    const state = {
      todos : [
        {id: 1, text: "go  home"},
        {id: 2, text: "gwqo  weerg"},
        {id: 3, text: "gero  hoewrgerme"},
        {id: 4, text: "tro  howrwqeme"},
      ]  
    }
    
  return (
    <div className="App">
      <header className="App-header">
        TODO
      </header>
      <div className="list">
        {state.todos.map((item, key)=>(
          
          <div key={key} className="item" id={item.id}>
            {item.text}
            <button className="update">u</button>
            <button className="dell">X</button>
          </div>

    )
  )}
      </div>
    </div>
  );
}

export default App;
