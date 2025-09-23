"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("react");
var Todo_style_1 = require("./Todo.style");
var ActiveTodos_1 = __importDefault(require("./ActiveTodos"));
var Form_1 = __importDefault(require("./Form"));
var LOCAL_STORAGE_KEY = "todos";
var Todo = function () {
    var _a = (0, react_1.useState)(function () {
        var saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    }), todos = _a[0], setTodos = _a[1];
    var _b = (0, react_1.useState)(""), inputValue = _b[0], setInputValue = _b[1];
    var saveTodos = function (newTodos) {
        setTodos(newTodos);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
    };
    var handleAddTodo = function (e) {
        e.preventDefault();
        if (!inputValue.trim())
            return;
        var newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        };
        saveTodos(__spreadArray(__spreadArray([], todos, true), [newTodo], false));
        setInputValue("");
    };
    var handleToggleComplete = function (id) {
        var updated = todos.map(function (todo) {
            return todo.id === id ? __assign(__assign({}, todo), { completed: !todo.completed }) : todo;
        });
        saveTodos(updated);
    };
    var handleDelete = function (id) {
        var updated = todos.filter(function (todo) { return todo.id !== id; });
        saveTodos(updated);
    };
    return ((0, jsx_runtime_1.jsx)("div", { css: Todo_style_1.todoStyle, children: (0, jsx_runtime_1.jsxs)("div", { css: Todo_style_1.innerDiv, children: [(0, jsx_runtime_1.jsx)("h1", { children: "My Daily Todos" }), (0, jsx_runtime_1.jsx)(Form_1.default, { inputValue: inputValue, setInputValue: setInputValue, handleAddTodo: handleAddTodo }), (0, jsx_runtime_1.jsx)("h2", { children: "Active Todos" }), (0, jsx_runtime_1.jsx)(ActiveTodos_1.default, { todos: todos, onToggleComplete: handleToggleComplete, onDelete: handleDelete })] }) }));
};
exports.default = Todo;
