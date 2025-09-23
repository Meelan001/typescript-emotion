import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { useState } from "react";
import { innerDiv, todoStyle } from "./Todo.style";
import ActiveTodos from "./ActiveTodos";
import Form from "./Form";
const LOCAL_STORAGE_KEY = "todos";
const Todo = () => {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    });
    const [inputValue, setInputValue] = useState("");
    const saveTodos = (newTodos) => {
        setTodos(newTodos);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
    };
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!inputValue.trim())
            return;
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        };
        saveTodos([...todos, newTodo]);
        setInputValue("");
    };
    const handleToggleComplete = (id) => {
        const updated = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        saveTodos(updated);
    };
    const handleDelete = (id) => {
        const updated = todos.filter((todo) => todo.id !== id);
        saveTodos(updated);
    };
    return (_jsx("div", { css: todoStyle, children: _jsxs("div", { css: innerDiv, children: [_jsx("h1", { children: "My Daily Todos" }), _jsx(Form, { inputValue: inputValue, setInputValue: setInputValue, handleAddTodo: handleAddTodo }), _jsx("h2", { children: "Active Todos" }), _jsx(ActiveTodos, { todos: todos, onToggleComplete: handleToggleComplete, onDelete: handleDelete })] }) }));
};
export default Todo;
