"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonStyle = exports.input = exports.form = exports.innerDiv = exports.todoStyle = void 0;
/** @jsxImportSource @emotion/react */
var react_1 = require("@emotion/react");
exports.todoStyle = (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  background-color: #ccbebc;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n"], ["\n  height: 100vh;\n  background-color: #ccbebc;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n"])));
exports.innerDiv = (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 500px;\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  padding: 20px;\n  margin-top: 50px;\n  background-color: #fff8f0;\n  border-radius: 15px;\n"], ["\n  height: 500px;\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  padding: 20px;\n  margin-top: 50px;\n  background-color: #fff8f0;\n  border-radius: 15px;\n"])));
exports.form = (0, react_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  width: 100%;\n"], ["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  width: 100%;\n"])));
exports.input = (0, react_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 50px;\n  width: 400px;\n  flex: 1;\n  font-size: 18px;\n  padding: 0 15px;\n  outline: none;\n  border-radius: 20px;\n  border: 1px solid #ccc;\n"], ["\n  height: 50px;\n  width: 400px;\n  flex: 1;\n  font-size: 18px;\n  padding: 0 15px;\n  outline: none;\n  border-radius: 20px;\n  border: 1px solid #ccc;\n"])));
// 🔹 Reusable button style function
var buttonStyle = function (bgColor, hoverBgColor, width, height, fontSize, color, fontWeight, hoverDecoration) {
    if (color === void 0) { color = "#fff"; }
    if (fontWeight === void 0) { fontWeight = "bold"; }
    return (0, react_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10px;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: ", ";\n    transform: ", ";\n  }\n\n  &:active {\n    transform: ", ";\n  }\n"], ["\n  background-color: ", ";\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10px;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: ", ";\n    transform: ", ";\n  }\n\n  &:active {\n    transform: ", ";\n  }\n"])), bgColor, width, height, fontSize, fontWeight, color, hoverBgColor, hoverDecoration || "none", bgColor === "transparent" ? "none" : "scale(1.05)", bgColor === "transparent" ? "none" : "scale(0.95)");
};
exports.buttonStyle = buttonStyle;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
