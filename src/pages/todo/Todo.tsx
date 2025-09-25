import React from "react";
import { useTodoLogic } from "./Todo.ligic";
import { form, innerDiv, todoStyle } from "./Todo.styles";
import ActiveTodos from "../../components/ActiveTodos";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Todo: React.FC = () => {
  const {
    todos,
    inputValue,
    setInputValue,
    handleAddTodo,
    handleToggleComplete,
    handleDelete,
  } = useTodoLogic();

  return (
    <div css={todoStyle}>
      <div css={innerDiv}>
        <h1>My Daily Todos</h1>

        <form css={form} onSubmit={handleAddTodo}>
          {/* <input
            css={input}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your todo"
          /> */}

          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your todo"
          />

          <Button type="submit">Shadcn</Button>
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
