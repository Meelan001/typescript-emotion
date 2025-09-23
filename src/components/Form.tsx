import React from "react";
import { buttonStyle, form, input } from "./Todo.style";

interface FormProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({
  inputValue,
  setInputValue,
  handleAddTodo,
}) => {
  return (
    <div>
      <form css={form} onSubmit={handleAddTodo}>
        <input
          css={input}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your todo"
        />
        <button
          css={buttonStyle("blue", "darkblue", "120px", "50px", "16px")}
          type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
