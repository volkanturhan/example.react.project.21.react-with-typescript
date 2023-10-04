import React, { ReactNode, useState } from "react";
import { TodoModel } from "../models/todo";

export type TodosContextObj = {
  items: TodoModel[];
  addTodo: (todoText: string) => void;
  removeTodo: (item: TodoModel) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (item: TodoModel) => {},
});

type Props = {
    children: ReactNode;
  }
 const TodosContextProvider: React.FC<Props> = (props) => {
  const [todoItems, setTodoItems] = useState<TodoModel[]>([]);

  const addTodoHandler = (todoText: string) => {
    // setTodoItems((prevTodoItems) => [
    //   new TodoModel(todoText),
    //   ...prevTodoItems,
    // ]);
    setTodoItems((prevTodoItems) => {
      return prevTodoItems.concat(new TodoModel(todoText));
    });
  };
  const removeTodoHandler = (item: TodoModel) => {
    setTodoItems((prevTodoItems) => {
      return prevTodoItems.filter((x) => x.id !== item.id);
    });
  };
  const contextValue: TodosContextObj = {
    items: todoItems,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;