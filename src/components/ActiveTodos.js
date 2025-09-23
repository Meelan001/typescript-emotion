"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var ActiveTodo_style_1 = require("./ActiveTodo.style");
var Todo_style_1 = require("./Todo.style");
var ActiveTodos = function (_a) {
    var todos = _a.todos, onToggleComplete = _a.onToggleComplete, onDelete = _a.onDelete;
    return ((0, jsx_runtime_1.jsx)("div", { css: ActiveTodo_style_1.activeTodoStyle, children: todos.map(function (todo) { return ((0, jsx_runtime_1.jsxs)("div", { css: ActiveTodo_style_1.todoList, children: [(0, jsx_runtime_1.jsx)("div", { css: ActiveTodo_style_1.todoH1, style: {
                        textDecoration: todo.completed ? "line-through" : "none",
                        color: todo.completed ? "#999" : "#000",
                    }, children: todo.text }), (0, jsx_runtime_1.jsxs)("div", { css: ActiveTodo_style_1.icons, children: [(0, jsx_runtime_1.jsx)("button", { css: (0, Todo_style_1.buttonStyle)("transparent", "transparent", "auto", "auto", "14px", "#0077ff", "500", "underline"), onClick: function () { return onToggleComplete(todo.id); }, children: todo.completed ? "Undo" : "Complete" }), (0, jsx_runtime_1.jsx)("button", { css: (0, Todo_style_1.buttonStyle)("transparent", "transparent", "auto", "auto", "14px", "#0077ff", "500", "underline"), onClick: function () { return onDelete(todo.id); }, children: "Delete" })] })] }, todo.id)); }) }));
};
exports.default = ActiveTodos;
