"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var Todo_style_1 = require("./Todo.style");
var Form = function (_a) {
    var inputValue = _a.inputValue, setInputValue = _a.setInputValue, handleAddTodo = _a.handleAddTodo;
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("form", { css: Todo_style_1.form, onSubmit: handleAddTodo, children: [(0, jsx_runtime_1.jsx)("input", { css: Todo_style_1.input, type: "text", value: inputValue, onChange: function (e) { return setInputValue(e.target.value); }, placeholder: "Enter your todo" }), (0, jsx_runtime_1.jsx)("button", { css: (0, Todo_style_1.buttonStyle)("blue", "darkblue", "120px", "50px", "16px"), type: "submit", children: "Add" })] }) }));
};
exports.default = Form;
