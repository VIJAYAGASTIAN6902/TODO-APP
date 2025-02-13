import React from "react";
import { useState } from "react";
import Formnew from "./Components/Formnew";
import Todolist from "./Components/Todolist";





function App() {
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
     <div className='header'>
      <h1>TO DO LIST</h1>
     <div><Formnew todos={todos} setTodos={setTodos} /></div>
     <div><Todolist todos={todos} setTodos={setTodos} /></div>
     
     </div>
    </div>
  );
}

export default App;
