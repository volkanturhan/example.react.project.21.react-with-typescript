import React, { useContext } from "react";
import { TodosContext, TodosContextObj } from "../store/todos.contex";

import { TodoModel } from "../models/todo";
import classes from "./TodoItem.module.css";
type Props = {
    item: TodoModel;
    onRemoveTodo: () => void;
  };
const TodoItem: React.FC<Props> = (props) => {
    const ctxTodos = useContext<TodosContextObj>(TodosContext);

  return (
    
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.item.text} 
    </li>
  );
};

export default TodoItem;
