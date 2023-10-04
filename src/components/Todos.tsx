import React, { useContext } from "react";
import {TodosContext,TodosContextObj} from "../store/todos.contex";
// import { TodoModel } from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";



// type Props = {
//     items: TodoModel[];
//     onRemoveTodo: (item: TodoModel) => void;
//   }
  
// const Todos: React.FC<Props> = ({items,onRemoveTodo}) => {
    const Todos: React.FC = () => {

  const ctxTodos =   useContext<TodosContextObj>(TodosContext);
  return (
    <ul className={classes.todos}>
      {ctxTodos.items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemoveTodo={ctxTodos.removeTodo.bind(null,item)} 
        />
      ))}
    </ul>
    // <ul className={classes.todos}>
    //   {props.items.map((item) => (
    //     <TodoItem
    //       key={item.id}
    //       item={item}
    //       onRemoveTodo={props.onRemoveTodo.bind(null, item)} //bind is a default method of javascript for bind params for this function
    //     />
    //   ))}
    // </ul>
  );
};

export default Todos;
