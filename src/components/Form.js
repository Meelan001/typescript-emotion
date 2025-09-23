import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { buttonStyle, form, input } from "./Todo.style";
const Form = ({ inputValue, setInputValue, handleAddTodo, }) => {
    return (_jsx("div", { children: _jsxs("form", { css: form, onSubmit: handleAddTodo, children: [_jsx("input", { css: input, type: "text", value: inputValue, onChange: (e) => setInputValue(e.target.value), placeholder: "Enter your todo" }), _jsx("button", { css: buttonStyle("blue", "darkblue", "120px", "50px", "16px"), type: "submit", children: "Add" })] }) }));
};
export default Form;
