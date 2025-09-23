/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export const todoStyle = css `
  height: 100vh;
  background-color: #ccbebc;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const innerDiv = css `
  height: 500px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  margin-top: 50px;
  background-color: #fff8f0;
  border-radius: 15px;
`;
export const form = css `
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
`;
export const input = css `
  height: 50px;
  width: 400px;
  flex: 1;
  font-size: 18px;
  padding: 0 15px;
  outline: none;
  border-radius: 20px;
  border: 1px solid #ccc;
`;
// 🔹 Reusable button style function
export const buttonStyle = (bgColor, hoverBgColor, width, height, fontSize, color = "#fff", fontWeight = "bold", hoverDecoration) => css `
  background-color: ${bgColor};
  width: ${width};
  height: ${height};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  color: ${color};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  &:hover {
    background-color: ${hoverBgColor};
    text-decoration: ${hoverDecoration || "none"};
    transform: ${bgColor === "transparent" ? "none" : "scale(1.05)"};
  }

  &:active {
    transform: ${bgColor === "transparent" ? "none" : "scale(0.95)"};
  }
`;
