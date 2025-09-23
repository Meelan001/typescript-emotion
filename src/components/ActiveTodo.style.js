"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.icons = exports.todoH1 = exports.todoList = exports.activeTodoStyle = void 0;
/** @jsxImportSource @emotion/react */
var react_1 = require("@emotion/react");
exports.activeTodoStyle = (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 400px;\n  overflow: auto;\n  padding: 10px;\n"], ["\n  height: 400px;\n  overflow: auto;\n  padding: 10px;\n"])));
exports.todoList = (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #ccc;\n  padding: 10px 20px;\n  width: 550px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  background-color: #fefefe;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #ccc;\n  padding: 10px 20px;\n  width: 550px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  background-color: #fefefe;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n"])));
exports.todoH1 = (0, react_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 18px;\n  font-weight: 600;\n"], ["\n  font-size: 18px;\n  font-weight: 600;\n"])));
exports.icons = (0, react_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"], ["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
