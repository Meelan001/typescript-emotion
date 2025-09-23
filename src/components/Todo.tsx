import React, { useState, useEffect } from "react";
import { innerDiv, todoStyle } from "./Todo.style";
import ActiveTodos from "./ActiveTodos";
import Form from "./Form";

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

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo: TodoItem = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
        {todos.length === 0 ? (
          <p style={{ color: "#555", fontStyle: "italic", marginTop: "10px" }}>
            You have completed all your tasks 🎉
          </p>
        ) : (
          <ActiveTodos
            todos={todos}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
