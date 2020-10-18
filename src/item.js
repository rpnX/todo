import React from 'react';

const Item = (props) => {
    return (
    
        <div key={props.key} className="item" id={props.id}>
            <a className="text">{props.item.text}</a>
            <div className="buttons">
                <a className="update btn" onClick={props.editTodo}>U</a>
                <a className="close btn" onClick={props.deleteTodo}></a>
            </div>
        </div>

    );
}
export default Item
