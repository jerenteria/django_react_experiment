import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  let [items, setItems] = useState()

  useEffect(() => {
    getItems()
  }, [])

  let getItems = async () => {
    let response = fetch('http://localhost:8000/')
    let data = (await response).json
    console.log(data)
    setItems(data)
  };

  return (
    <div className="App">
      <h1>Notes</h1>
    </div>
  );
}

export default App;
