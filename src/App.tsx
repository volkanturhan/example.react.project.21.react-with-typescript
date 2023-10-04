// import { useState } from "react";

import Todos from "./components/Todos";

import "./App.css";
// import { TodoModel } from "./models/todo";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos.contex";

// const initialTodoItems: TodoModel[] = [
//   new TodoModel("Learn React"),
//   new TodoModel("Learn TypeScript"),
// ];

function App() {
  return (
    <div className="App">
      {/* <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todoItems} onRemoveTodo={removeTodoHandler} /> */}
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
