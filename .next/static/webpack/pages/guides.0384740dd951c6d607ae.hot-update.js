/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/guides",{

/***/ "./pages/guides/index.js":
/*!*******************************!*\
  !*** ./pages/guides/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SingleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SingleCard */ \"./components/SingleCard.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/danielmartin/Documents/Coding/thejuniorwebdev/Frontend/pages/guides/index.js\",\n    _this = undefined;\n\n\n\nvar GuidePage = function GuidePage(_ref) {\n  var categories = _ref.categories;\n  var HTML = categories[1].articles;\n  var CSS = categories[0].articles;\n  var JS = categories[2].articles;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: \"container mt-1 p-6 mx-auto bg-white\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex align-middle\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-xl mb-5  px-6 py-2 font-medium text-blue-800 capitalize underline md:text-2xl\",\n        children: \"Latest HTML Posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        \"class\": \"px-6 py-2 mb-5 font-medium tracking-wide text-blue-800 capitalize transition-colors duration-200 transform bg-blue-200 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700\",\n        children: \"See All Posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex flex-wrap justify-center\",\n      children: HTML.map(function (article) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleCard__WEBPACK_IMPORTED_MODULE_1__.default, {\n          tech: \"HTML\",\n          colour: \"blue\",\n          title: article.title,\n          description: article.description,\n          slug: \"'/html/\".concat(article.slug)\n        }, article.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n      className: \"my-10\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex align-middle\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-xl mb-5  px-6 py-2 font-medium text-yellow-800 capitalize underline md:text-2xl\",\n        children: \"Latest CSS Posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        \"class\": \"px-6 py-2 mb-5 font-medium tracking-wide text-yellow-800 capitalize transition-colors duration-200 transform bg-yellow-200 rounded-md dark:bg-gray-800 hover:bg-yellow-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-yellow-500 dark:focus:bg-gray-700\",\n        children: \"See All Posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex flex-wrap justify-center\",\n      children: CSS.map(function (article) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleCard__WEBPACK_IMPORTED_MODULE_1__.default, {\n          tech: \"CSS\",\n          colour: \"yellow\",\n          title: article.title,\n          description: article.description,\n          slug: article.slug\n        }, article.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n      className: \"my-10\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex align-middle\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-xl mb-5  px-6 py-2 font-medium text-red-800 capitalize underline md:text-2xl\",\n        children: \"Latest JavaScript Posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        \"class\": \"px-6 py-2 mb-5 font-medium tracking-wide text-red-800 capitalize transition-colors duration-200 transform bg-red-200 rounded-md dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-red-500 dark:focus:bg-gray-700\",\n        children: \"See All Posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex flex-wrap justify-center\",\n      children: JS.map(function (article) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleCard__WEBPACK_IMPORTED_MODULE_1__.default, {\n          tech: \"JavaScript\",\n          colour: \"red\",\n          title: article.title,\n          description: article.description,\n          slug: article.slug\n        }, article.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = GuidePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GuidePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GuidePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ3VpZGVzL2luZGV4LmpzPzYxMWQiXSwibmFtZXMiOlsiR3VpZGVQYWdlIiwiY2F0ZWdvcmllcyIsIkhUTUwiLCJhcnRpY2xlcyIsIkNTUyIsIkpTIiwibWFwIiwiYXJ0aWNsZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDcEMsTUFBTUMsSUFBSSxHQUFHRCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNFLFFBQTNCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNFLFFBQTFCO0FBQ0EsTUFBTUUsRUFBRSxHQUFHSixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNFLFFBQXpCO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUMscUNBQW5CO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsb0ZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQVEsaUJBQU0seVBBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVVFO0FBQUssZUFBUyxFQUFDLCtCQUFmO0FBQUEsZ0JBQ0dELElBQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQUNDLE9BQUQsRUFBYTtBQUNyQiw0QkFDRSw4REFBQywyREFBRDtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsZ0JBQU0sRUFBQyxNQUZUO0FBR0UsZUFBSyxFQUFFQSxPQUFPLENBQUNDLEtBSGpCO0FBSUUscUJBQVcsRUFBRUQsT0FBTyxDQUFDRSxXQUp2QjtBQU1FLGNBQUksbUJBQVlGLE9BQU8sQ0FBQ0csSUFBcEI7QUFOTixXQUtPSCxPQUFPLENBQUNJLEVBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVVELE9BWEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsZUF3QkU7QUFBSSxlQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJGLGVBeUJFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLHNGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFRLGlCQUFNLGlRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJGLGVBaUNFO0FBQUssZUFBUyxFQUFDLCtCQUFmO0FBQUEsZ0JBQ0dQLEdBQUcsQ0FBQ0UsR0FBSixDQUFRLFVBQUNDLE9BQUQsRUFBYTtBQUNwQiw0QkFDRSw4REFBQywyREFBRDtBQUNFLGNBQUksRUFBQyxLQURQO0FBRUUsZ0JBQU0sRUFBQyxRQUZUO0FBR0UsZUFBSyxFQUFFQSxPQUFPLENBQUNDLEtBSGpCO0FBSUUscUJBQVcsRUFBRUQsT0FBTyxDQUFDRSxXQUp2QjtBQU1FLGNBQUksRUFBRUYsT0FBTyxDQUFDRztBQU5oQixXQUtPSCxPQUFPLENBQUNJLEVBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVVELE9BWEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNGLGVBK0NFO0FBQUksZUFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9DRixlQWdERTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxtRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBUSxpQkFBTSxxUEFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhERixlQXdERTtBQUFLLGVBQVMsRUFBQywrQkFBZjtBQUFBLGdCQUNHTixFQUFFLENBQUNDLEdBQUgsQ0FBTyxVQUFDQyxPQUFELEVBQWE7QUFDbkIsNEJBQ0UsOERBQUMsMkRBQUQ7QUFDRSxjQUFJLEVBQUMsWUFEUDtBQUVFLGdCQUFNLEVBQUMsS0FGVDtBQUdFLGVBQUssRUFBRUEsT0FBTyxDQUFDQyxLQUhqQjtBQUlFLHFCQUFXLEVBQUVELE9BQU8sQ0FBQ0UsV0FKdkI7QUFNRSxjQUFJLEVBQUVGLE9BQU8sQ0FBQ0c7QUFOaEIsV0FLT0gsT0FBTyxDQUFDSSxFQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFVRCxPQVhBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlFRCxDQTlFRDs7S0FBTVgsUzs7QUEwRk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoiLi9wYWdlcy9ndWlkZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xlQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaW5nbGVDYXJkXCI7XG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5cbmNvbnN0IEd1aWRlUGFnZSA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuICBjb25zdCBIVE1MID0gY2F0ZWdvcmllc1sxXS5hcnRpY2xlcztcbiAgY29uc3QgQ1NTID0gY2F0ZWdvcmllc1swXS5hcnRpY2xlcztcbiAgY29uc3QgSlMgPSBjYXRlZ29yaWVzWzJdLmFydGljbGVzO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTEgcC02IG14LWF1dG8gYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbWItNSAgcHgtNiBweS0yIGZvbnQtbWVkaXVtIHRleHQtYmx1ZS04MDAgY2FwaXRhbGl6ZSB1bmRlcmxpbmUgbWQ6dGV4dC0yeGxcIj5cbiAgICAgICAgICBMYXRlc3QgSFRNTCBQb3N0c1xuICAgICAgICA8L2gyPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHgtNiBweS0yIG1iLTUgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZSB0ZXh0LWJsdWUtODAwIGNhcGl0YWxpemUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHRyYW5zZm9ybSBiZy1ibHVlLTIwMCByb3VuZGVkLW1kIGRhcms6YmctZ3JheS04MDAgaG92ZXI6YmctYmx1ZS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctYmx1ZS01MDAgZGFyazpmb2N1czpiZy1ncmF5LTcwMFwiPlxuICAgICAgICAgIFNlZSBBbGwgUG9zdHNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICB7SFRNTC5tYXAoKGFydGljbGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNpbmdsZUNhcmRcbiAgICAgICAgICAgICAgdGVjaD1cIkhUTUxcIlxuICAgICAgICAgICAgICBjb2xvdXI9XCJibHVlXCJcbiAgICAgICAgICAgICAgdGl0bGU9e2FydGljbGUudGl0bGV9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXthcnRpY2xlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBrZXk9e2FydGljbGUuaWR9XG4gICAgICAgICAgICAgIHNsdWc9e2AnL2h0bWwvJHthcnRpY2xlLnNsdWd9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxociBjbGFzc05hbWU9XCJteS0xMFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTUgIHB4LTYgcHktMiBmb250LW1lZGl1bSB0ZXh0LXllbGxvdy04MDAgY2FwaXRhbGl6ZSB1bmRlcmxpbmUgbWQ6dGV4dC0yeGxcIj5cbiAgICAgICAgICBMYXRlc3QgQ1NTIFBvc3RzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJweC02IHB5LTIgbWItNSBmb250LW1lZGl1bSB0cmFja2luZy13aWRlIHRleHQteWVsbG93LTgwMCBjYXBpdGFsaXplIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCB0cmFuc2Zvcm0gYmcteWVsbG93LTIwMCByb3VuZGVkLW1kIGRhcms6YmctZ3JheS04MDAgaG92ZXI6YmcteWVsbG93LTUwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy15ZWxsb3ctNTAwIGRhcms6Zm9jdXM6YmctZ3JheS03MDBcIj5cbiAgICAgICAgICBTZWUgQWxsIFBvc3RzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHtDU1MubWFwKChhcnRpY2xlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTaW5nbGVDYXJkXG4gICAgICAgICAgICAgIHRlY2g9XCJDU1NcIlxuICAgICAgICAgICAgICBjb2xvdXI9XCJ5ZWxsb3dcIlxuICAgICAgICAgICAgICB0aXRsZT17YXJ0aWNsZS50aXRsZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2FydGljbGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGtleT17YXJ0aWNsZS5pZH1cbiAgICAgICAgICAgICAgc2x1Zz17YXJ0aWNsZS5zbHVnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTEwXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbWItNSAgcHgtNiBweS0yIGZvbnQtbWVkaXVtIHRleHQtcmVkLTgwMCBjYXBpdGFsaXplIHVuZGVybGluZSBtZDp0ZXh0LTJ4bFwiPlxuICAgICAgICAgIExhdGVzdCBKYXZhU2NyaXB0IFBvc3RzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJweC02IHB5LTIgbWItNSBmb250LW1lZGl1bSB0cmFja2luZy13aWRlIHRleHQtcmVkLTgwMCBjYXBpdGFsaXplIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCB0cmFuc2Zvcm0gYmctcmVkLTIwMCByb3VuZGVkLW1kIGRhcms6YmctZ3JheS04MDAgaG92ZXI6YmctcmVkLTUwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy1yZWQtNTAwIGRhcms6Zm9jdXM6YmctZ3JheS03MDBcIj5cbiAgICAgICAgICBTZWUgQWxsIFBvc3RzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHtKUy5tYXAoKGFydGljbGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNpbmdsZUNhcmRcbiAgICAgICAgICAgICAgdGVjaD1cIkphdmFTY3JpcHRcIlxuICAgICAgICAgICAgICBjb2xvdXI9XCJyZWRcIlxuICAgICAgICAgICAgICB0aXRsZT17YXJ0aWNsZS50aXRsZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2FydGljbGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGtleT17YXJ0aWNsZS5pZH1cbiAgICAgICAgICAgICAgc2x1Zz17YXJ0aWNsZS5zbHVnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGNhdGVnb3JpZXMgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBHdWlkZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/guides/index.js\n");

/***/ })

});