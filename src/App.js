import React, { useState } from 'react';
import Todo from './Todo'
import TodoForm from './TodoForm'
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    {
      text: "Learn about react",
      isCOmpleted: false
    },
    {
      text: "Meet friend for lunch",
      isCOmpleted: false
    },
    {
      text: "Build todo app",
      isCOmpleted: false
    },
  ])

  const addTodo = text => {
    const NewTodos = [...todos, { text }];
    setTodos(NewTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }


  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
