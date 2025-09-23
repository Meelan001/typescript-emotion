/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const activeTodoStyle = css`
  height: 400px;
  overflow: auto;
  padding: 10px;
`;

export const todoList = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px 20px;
  width: 550px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #fefefe;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const todoH1 = css`
  font-size: 18px;
  font-weight: 600;
`;

export const icons = css`
  display: flex;
  gap: 10px;
  align-items: center;
`;
