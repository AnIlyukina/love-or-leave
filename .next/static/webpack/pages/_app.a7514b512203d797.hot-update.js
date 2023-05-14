"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs */ \"./node_modules/prismjs/prism.js\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prismjs_components_prism_bash_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-bash.min */ \"./node_modules/prismjs/components/prism-bash.min.js\");\n/* harmony import */ var prismjs_components_prism_bash_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash_min__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/themes/prism.css */ \"./node_modules/prismjs/themes/prism.css\");\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_globals_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/globals.css */ \"./public/globals.css\");\n/* harmony import */ var _public_globals_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_globals_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n// Import other Prism themes here\n\n\n\nconst TITLE = \"Markdoc\";\nconst DESCRIPTION = \"A powerful, flexible, Markdown-based authoring framework\";\nfunction collectHeadings(node) {\n    let sections = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];\n    if (node) {\n        if (node.name === \"Heading\") {\n            const title = node.children[0];\n            if (typeof title === \"string\") {\n                sections.push({\n                    ...node.attributes,\n                    title\n                });\n            }\n        }\n        if (node.children) {\n            for (const child of node.children){\n                collectHeadings(child, sections);\n            }\n        }\n    }\n    return sections;\n}\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    var _pageProps_markdoc;\n    const { markdoc  } = pageProps;\n    let title = TITLE;\n    let description = DESCRIPTION;\n    if (markdoc) {\n        if (markdoc.frontmatter.title) {\n            title = markdoc.frontmatter.title;\n        }\n        if (markdoc.frontmatter.description) {\n            description = markdoc.frontmatter.description;\n        }\n    }\n    const toc = ((_pageProps_markdoc = pageProps.markdoc) === null || _pageProps_markdoc === void 0 ? void 0 : _pageProps_markdoc.content) ? collectHeadings(pageProps.markdoc.content) : [];\n    console.log(pageProps);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        className: \"jsx-1e175a60a14fec26\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyukinaanna/Documents/love-or-leave/pages/_app.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\",\n                        className: \"jsx-1e175a60a14fec26\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyukinaanna/Documents/love-or-leave/pages/_app.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"referrer\",\n                        content: \"strict-origin\",\n                        className: \"jsx-1e175a60a14fec26\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyukinaanna/Documents/love-or-leave/pages/_app.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"title\",\n                        content: title,\n                        className: \"jsx-1e175a60a14fec26\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyukinaanna/Documents/love-or-leave/pages/_app.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: description,\n                        className: \"jsx-1e175a60a14fec26\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyukinaanna/Documents/love-or-leave/pages/_app.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"/favicon.ico\",\n                        className: \"jsx-1e175a60a14fec26\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyukinaanna/Documents/love-or-leave/pages/_app.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        className: \"jsx-1e175a60a14fec26\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyukinaanna/Documents/love-or-leave/pages/_app.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilyukinaanna/Documents/love-or-leave/pages/_app.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-1e175a60a14fec26\" + \" \" + \"page\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.SideNav, {}, void 0, false, {\n                        fileName: \"/Users/ilyukinaanna/Documents/love-or-leave/pages/_app.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"jsx-1e175a60a14fec26\" + \" \" + \"flex column\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps,\n                            className: \"jsx-1e175a60a14fec26\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n                        }, void 0, false, {\n                            fileName: \"/Users/ilyukinaanna/Documents/love-or-leave/pages/_app.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyukinaanna/Documents/love-or-leave/pages/_app.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.TableOfContents, {\n                        toc: toc\n                    }, void 0, false, {\n                        fileName: \"/Users/ilyukinaanna/Documents/love-or-leave/pages/_app.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilyukinaanna/Documents/love-or-leave/pages/_app.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"1e175a60a14fec26\",\n                children: \".page.jsx-1e175a60a14fec26{position:fixed;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100vw;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}main.jsx-1e175a60a14fec26{overflow:auto;height:-webkit-calc(100vh - var(--top-nav-height));height:-moz-calc(100vh - var(--top-nav-height));height:calc(100vh - var(--top-nav-height));-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;font-size:16px;padding:0 2rem 2rem}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBR29DO0FBRWhEO0FBQ2pCLGlDQUFpQztBQUNVO0FBQ1Q7QUFFSjtBQUs5QixNQUFNSSxRQUFRO0FBQ2QsTUFBTUMsY0FBYztBQUVwQixTQUFTQyxnQkFBZ0JDLElBQUksRUFBaUI7UUFBZkMsV0FBQUEsaUVBQVcsRUFBRTtJQUMxQyxJQUFJRCxNQUFNO1FBQ1IsSUFBSUEsS0FBS0UsSUFBSSxLQUFLLFdBQVc7WUFDM0IsTUFBTUMsUUFBUUgsS0FBS0ksUUFBUSxDQUFDLEVBQUU7WUFFOUIsSUFBSSxPQUFPRCxVQUFVLFVBQVU7Z0JBQzdCRixTQUFTSSxJQUFJLENBQUM7b0JBQ1osR0FBR0wsS0FBS00sVUFBVTtvQkFDbEJIO2dCQUNGO1lBQ0YsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJSCxLQUFLSSxRQUFRLEVBQUU7WUFDakIsS0FBSyxNQUFNRyxTQUFTUCxLQUFLSSxRQUFRLENBQUU7Z0JBQ2pDTCxnQkFBZ0JRLE9BQU9OO1lBQ3pCO1FBQ0YsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPQTtBQUNUO0FBSWUsU0FBU08sTUFBTSxLQUE4QyxFQUFFO1FBQWhELEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUF3QixHQUE5QztRQWNoQkE7SUFiWixNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHRDtJQUVwQixJQUFJUCxRQUFRTjtJQUNaLElBQUllLGNBQWNkO0lBQ2xCLElBQUlhLFNBQVM7UUFDWCxJQUFJQSxRQUFRRSxXQUFXLENBQUNWLEtBQUssRUFBRTtZQUM3QkEsUUFBUVEsUUFBUUUsV0FBVyxDQUFDVixLQUFLO1FBQ25DLENBQUM7UUFDRCxJQUFJUSxRQUFRRSxXQUFXLENBQUNELFdBQVcsRUFBRTtZQUNuQ0EsY0FBY0QsUUFBUUUsV0FBVyxDQUFDRCxXQUFXO1FBQy9DLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTUUsTUFBTUosQ0FBQUEsQ0FBQUEscUJBQUFBLFVBQVVDLE9BQU8sY0FBakJELGdDQUFBQSxLQUFBQSxJQUFBQSxtQkFBbUJLLE9BQU8sSUFDbENoQixnQkFBZ0JXLFVBQVVDLE9BQU8sQ0FBQ0ksT0FBTyxJQUN6QyxFQUFFO0lBRUpDLFFBQVFDLEdBQUcsQ0FBQ1A7SUFDZCxxQkFDRTs7MEJBQ0UsOERBQUNoQixrREFBSUE7O2tDQUNILDhEQUFDUzs7a0NBQU9BOzs7Ozs7a0NBQ1IsOERBQUNlO3dCQUFLaEIsTUFBSzt3QkFBV2EsU0FBUTs7Ozs7OztrQ0FDOUIsOERBQUNHO3dCQUFLaEIsTUFBSzt3QkFBV2EsU0FBUTs7Ozs7OztrQ0FDOUIsOERBQUNHO3dCQUFLaEIsTUFBSzt3QkFBUWEsU0FBU1o7Ozs7Ozs7a0NBQzVCLDhEQUFDZTt3QkFBS2hCLE1BQUs7d0JBQWNhLFNBQVNIOzs7Ozs7O2tDQUNsQyw4REFBQ087d0JBQUtDLEtBQUk7d0JBQWdCQyxNQUFLOzs7Ozs7O2tDQUMvQiw4REFBQ0Y7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7Ozs7MEJBS3hCLDhEQUFDQzswREFBYzs7a0NBQ2IsOERBQUMzQixnREFBT0E7Ozs7O2tDQUNSLDhEQUFDNEI7a0VBQWU7a0NBQ2QsNEVBQUNkOzRCQUFVLEdBQUdDLFNBQVM7dUVBQVRBLGFBQUFBLCtCQUFBQTs7Ozs7Ozs7Ozs7a0NBRWhCLDhEQUFDZCx3REFBZUE7d0JBQUNrQixLQUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0I5QixDQUFDO0tBNUR1Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IFNpZGVOYXYsIFRhYmxlT2ZDb250ZW50cywgVG9wTmF2IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmltcG9ydCAncHJpc21qcyc7XG4vLyBJbXBvcnQgb3RoZXIgUHJpc20gdGhlbWVzIGhlcmVcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWJhc2gubWluJztcbmltcG9ydCAncHJpc21qcy90aGVtZXMvcHJpc20uY3NzJztcblxuaW1wb3J0ICcuLi9wdWJsaWMvZ2xvYmFscy5jc3MnXG5cbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB0eXBlIHsgTWFya2RvY05leHRKc1BhZ2VQcm9wcyB9IGZyb20gJ0BtYXJrZG9jL25leHQuanMnXG5cbmNvbnN0IFRJVExFID0gJ01hcmtkb2MnO1xuY29uc3QgREVTQ1JJUFRJT04gPSAnQSBwb3dlcmZ1bCwgZmxleGlibGUsIE1hcmtkb3duLWJhc2VkIGF1dGhvcmluZyBmcmFtZXdvcmsnO1xuXG5mdW5jdGlvbiBjb2xsZWN0SGVhZGluZ3Mobm9kZSwgc2VjdGlvbnMgPSBbXSkge1xuICBpZiAobm9kZSkge1xuICAgIGlmIChub2RlLm5hbWUgPT09ICdIZWFkaW5nJykge1xuICAgICAgY29uc3QgdGl0bGUgPSBub2RlLmNoaWxkcmVuWzBdO1xuXG4gICAgICBpZiAodHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJykge1xuICAgICAgICBzZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAuLi5ub2RlLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICBjb2xsZWN0SGVhZGluZ3MoY2hpbGQsIHNlY3Rpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2VjdGlvbnM7XG59XG5cbmV4cG9ydCB0eXBlIE15QXBwUHJvcHMgPSBNYXJrZG9jTmV4dEpzUGFnZVByb3BzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHM8TXlBcHBQcm9wcz4pIHtcbiAgY29uc3QgeyBtYXJrZG9jIH0gPSBwYWdlUHJvcHM7XG5cbiAgbGV0IHRpdGxlID0gVElUTEU7XG4gIGxldCBkZXNjcmlwdGlvbiA9IERFU0NSSVBUSU9OO1xuICBpZiAobWFya2RvYykge1xuICAgIGlmIChtYXJrZG9jLmZyb250bWF0dGVyLnRpdGxlKSB7XG4gICAgICB0aXRsZSA9IG1hcmtkb2MuZnJvbnRtYXR0ZXIudGl0bGU7XG4gICAgfVxuICAgIGlmIChtYXJrZG9jLmZyb250bWF0dGVyLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IG1hcmtkb2MuZnJvbnRtYXR0ZXIuZGVzY3JpcHRpb247XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdG9jID0gcGFnZVByb3BzLm1hcmtkb2M/LmNvbnRlbnRcbiAgICA/IGNvbGxlY3RIZWFkaW5ncyhwYWdlUHJvcHMubWFya2RvYy5jb250ZW50KVxuICAgIDogW107XG5cbiAgICBjb25zb2xlLmxvZyhwYWdlUHJvcHMpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInJlZmVycmVyXCIgY29udGVudD1cInN0cmljdC1vcmlnaW5cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgey8qIDxUb3BOYXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZG9jc1wiPkRvY3M8L0xpbms+XG4gICAgICA8L1RvcE5hdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPFNpZGVOYXYgLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBjb2x1bW5cIj5cbiAgICAgICAgICA8Q29tcG9uZW50ey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8VGFibGVPZkNvbnRlbnRzIHRvYz17dG9jfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgICAgICAgICAvLyB0b3A6IHZhcigtLXRvcC1uYXYtaGVpZ2h0KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3AtbmF2LWhlaWdodCkpO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAycmVtIDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJTaWRlTmF2IiwiVGFibGVPZkNvbnRlbnRzIiwiVElUTEUiLCJERVNDUklQVElPTiIsImNvbGxlY3RIZWFkaW5ncyIsIm5vZGUiLCJzZWN0aW9ucyIsIm5hbWUiLCJ0aXRsZSIsImNoaWxkcmVuIiwicHVzaCIsImF0dHJpYnV0ZXMiLCJjaGlsZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWFya2RvYyIsImRlc2NyaXB0aW9uIiwiZnJvbnRtYXR0ZXIiLCJ0b2MiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsIm1ldGEiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});