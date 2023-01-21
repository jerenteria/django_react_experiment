import React, { useState } from 'react'

const AddItem = props => {
    const [enteredItem, setEnteredItem] = useState(''); 

    return (
        <div className="todo-list">
            {items.map((item, index) => (
                <h3>{item.description}</h3>
            ))}
        </div>
    )

};

export default todoItems;