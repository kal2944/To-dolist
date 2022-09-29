/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\nconst tasks = [\r\n  {\r\n    description: 'Reading book',\r\n    completed: false,\r\n    index: 0,\r\n  },\r\n\r\n  {\r\n    description: 'Exercising',\r\n    completed: false,\r\n    index: 1,\r\n  },\r\n\r\n  {\r\n    description: 'Doing project',\r\n    completed: false,\r\n    index: 2,\r\n  },\r\n];\r\n\r\nconst list = document.getElementById('tasks-list');\r\n\r\nwindow.addEventListener('load', () => {\r\n  for (let i = 0; i < tasks.length; i += 1) {\r\n    // create list item\r\n    const li = document.createElement('li');\r\n    li.classList.add('container-li');\r\n\r\n    // create ceckbox\r\n    const input = document.createElement('input');\r\n    input.setAttribute('type', 'checkbox');\r\n    input.classList.add('checkbox');\r\n    input.id = 'checkbox';\r\n\r\n    // create description\r\n    const label = document.createElement('label');\r\n    label.textContent = `${tasks[i].description}`;\r\n    label.classList.add('description');\r\n    label.setAttribute('for', 'checkbox');\r\n\r\n    // create edit button\r\n    const edit = document.createElement('button');\r\n    edit.classList.add('edit-btn');\r\n    edit.innerHTML = '<i class=\"fa-solid fa-ellipsis-vertical\"></i>';\r\n\r\n    // append the childs\r\n    li.appendChild(input);\r\n    li.appendChild(label);\r\n    li.appendChild(edit);\r\n    list.appendChild(li);\r\n  }\r\n});\n\n//# sourceURL=webpack://webpack-exersise/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;