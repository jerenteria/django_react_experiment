import './App.css';
import React, { useState, useEffect } from 'react';
import ListItem from './components/ListItem'

function App() {
  // useState is an empty arr that will fill up with the notes that we create then later render on screen
  let [items, setItems] = useState([])

  useEffect(() => {
    getItems()
  }, [])

  let getItems = async () => {
    let response = await fetch('http://localhost:8000/')
    let data = await response.json()
    console.log(data)
    setItems(data)
  };

  return (
    <div className="item-list">
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
}

export default App;
