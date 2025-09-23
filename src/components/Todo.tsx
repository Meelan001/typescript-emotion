import React, { useState } from "react";
import { buttonStyle, form, innerDiv, input, todoStyle } from "./Todo.style";
import ActiveTodos from "./ActiveTodos";
import Form from "./Form";

// Define what a single todo looks like
export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const LOCAL_STORAGE_KEY = "todos";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [inputValue, setInputValue] = useState("");

  const saveTodos = (newTodos: TodoItem[]) => {
    setTodos(newTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo: TodoItem = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    saveTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleToggleComplete = (id: number) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos(updated);
  };

  const handleDelete = (id: number) => {
    const updated = todos.filter((todo) => todo.id !== id);
    saveTodos(updated);
  };

  return (
    <div css={todoStyle}>
      <div css={innerDiv}>
        <h1>My Daily Todos</h1>

        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleAddTodo={handleAddTodo}
        />

        <h2>Active Todos</h2>
        <ActiveTodos
          todos={todos}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Todo;
