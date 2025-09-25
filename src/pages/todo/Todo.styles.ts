/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// Reusable button style
export const buttonStyle = (
  bgColor: string = "blue",
  hoverBgColor: string = "darkblue",
  width: string = "100px",
  height: string = "40px",
  fontSize: string = "14px",
  color: string = "#fff",
  fontWeight: string = "bold",
  hoverDecoration?: string
) => css`
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

export const todoStyle = css`
  height: 100vh;
  width: 100vw;
  background-color: #ccbebc;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const innerDiv = css`
  height: 500px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
  padding: 20px;

  background-color: #fff8f0;
  border-radius: 15px;
`;

export const form = css`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

export const input = css`
  height: 50px;
  flex: 1;
  font-size: 18px;
  padding: 0 15px;
  outline: none;
  border-radius: 20px;
  border: 1px solid #ccc;
`;
