import { useState } from "react";
import { TodoItem } from "./Todo.utils";

const LOCAL_STORAGE_KEY = "todos";

export const useTodoLogic = () => {
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

  return {
    todos,
    inputValue,
    setInputValue,
    handleAddTodo,
    handleToggleComplete,
    handleDelete,
  };
};
