import React from "react";
import { icons, todoH1, todoList } from "./ActiveTodo.style";
import { buttonStyle } from "./Todo.style";
import { TodoItem } from "./Todo";

interface Props {
  todos: TodoItem[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const ActiveTodos: React.FC<Props> = ({
  todos,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} css={todoList}>
          <div
            css={todoH1}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "#999" : "#000",
            }}>
            {todo.text}
          </div>
          <div css={icons}>
            {/* Complete / Undo Button */}
            <button
              css={buttonStyle(
                "transparent",
                "transparent",
                "auto",
                "auto",
                "14px",
                "#0077ff",
                "500",
                "underline"
              )}
              onClick={() => onToggleComplete(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>

            {/* Delete Button */}
            <button
              css={buttonStyle(
                "transparent",
                "transparent",
                "auto",
                "auto",
                "14px",
                "#0077ff",
                "500",
                "underline"
              )}
              onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveTodos;
