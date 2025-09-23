import React, { useState } from "react";
import { buttonStyle, form, innerDiv, input, todoStyle } from "./Todo.style";
import ActiveTodos from "./ActiveTodos";

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

        <form css={form} onSubmit={handleAddTodo}>
          <input
            css={input}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your todo"
          />
          {/* 🔹 Add Button (unique style) */}
          <button
            css={buttonStyle("blue", "darkblue", "120px", "50px", "16px")}
            type="submit">
            Add
          </button>
        </form>

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
