import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { activeTodoStyle, icons, todoH1, todoList } from "./ActiveTodo.style";
import { buttonStyle } from "./Todo.style";
const ActiveTodos = ({ todos, onToggleComplete, onDelete, }) => {
    return (_jsx("div", { css: activeTodoStyle, children: todos.map((todo) => (_jsxs("div", { css: todoList, children: [_jsx("div", { css: todoH1, style: {
                        textDecoration: todo.completed ? "line-through" : "none",
                        color: todo.completed ? "#999" : "#000",
                    }, children: todo.text }), _jsxs("div", { css: icons, children: [_jsx("button", { css: buttonStyle("transparent", "transparent", "auto", "auto", "14px", "#0077ff", "500", "underline"), onClick: () => onToggleComplete(todo.id), children: todo.completed ? "Undo" : "Complete" }), _jsx("button", { css: buttonStyle("transparent", "transparent", "auto", "auto", "14px", "#0077ff", "500", "underline"), onClick: () => onDelete(todo.id), children: "Delete" })] })] }, todo.id))) }));
};
export default ActiveTodos;
