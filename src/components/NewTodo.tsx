import React, { useContext,useRef } from "react";

import {TodosContext,TodosContextObj} from "../store/todos.contex";
import classes from './NewTodo.module.css'

// const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const NewTodo: React.FC = () => {

    const ctxTodos =   useContext<TodosContextObj>(TodosContext);

  const textInputRef = useRef<HTMLInputElement>(null);

  const sumbitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText?.trim().length === 0) {
      //throw error
    }
    ctxTodos.addTodo(enteredText);
    // props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={sumbitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
