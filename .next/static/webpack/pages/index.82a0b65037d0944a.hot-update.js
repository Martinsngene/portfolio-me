"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/navigation/NavBar.tsx":
/*!******************************************!*\
  !*** ./components/navigation/NavBar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ \"./components/Button.tsx\");\n/* harmony import */ var _constants_NavBar_Schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/NavBar.Schema */ \"./components/constants/NavBar.Schema.ts\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Menu */ \"./components/Menu.tsx\");\n/** @format */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar NavBar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), navBarPosition = ref[0], setNavBarPosition = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), menuState = ref1[0], setMenuState = ref1[1];\n    // This function listens for the offset of the vetical scrollbar and changes its position accordingly\n    var toggleNavPosition = function() {\n        if (window.pageYOffset > 100) {\n            setNavBarPosition(true);\n        } else {\n            setNavBarPosition(false);\n        }\n    };\n    // useEffect Hook used to remove event listener after component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.addEventListener(\"scroll\", toggleNavPosition);\n        return function() {\n            window.removeEventListener(\"scroll\", toggleNavPosition);\n        };\n    }, []);\n    var test = function(test) {\n        console.log(test);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"w-[100%] shadow h-[60px] bg-[#fff] flex items-center justify-between px-[1rem] top-0 left-0 right-0 bg-[rgba(54,25,33,0.2)] \".concat(navBarPosition ? \"fixed shadow-md\" : \"static\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo\",\n                children: \"Martins Ngene\"\n            }, void 0, false, {\n                fileName: \"/home/martins/Desktop/projects/portfolio-me/components/navigation/NavBar.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"links w-[50%] xl:w-[40%] items-center justify-between hidden md:flex\",\n                children: _constants_NavBar_Schema__WEBPACK_IMPORTED_MODULE_4__.Links.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: item.route,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            className: \"text-[#361921] text-[0.75rem] xl:text-[1.25rem] font-[700] leading-[1.5rem]\",\n                            children: item.link\n                        }, void 0, false, {\n                            fileName: \"/home/martins/Desktop/projects/portfolio-me/components/navigation/NavBar.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"/home/martins/Desktop/projects/portfolio-me/components/navigation/NavBar.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/martins/Desktop/projects/portfolio-me/components/navigation/NavBar.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"contact hidden md:block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    className: \"w-[108px] h-[32px] bg-[#fff] rounded-[4px] text-[#5E3BEE] text-[0.75rem] xl:text-[1rem] font-[400] leading-[150%] border-[1px] border-solid border-[#5E3BEE]\",\n                    children: \"Contact\"\n                }, void 0, false, {\n                    fileName: \"/home/martins/Desktop/projects/portfolio-me/components/navigation/NavBar.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/martins/Desktop/projects/portfolio-me/components/navigation/NavBar.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"menuIcon block md:hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__.MenuButton, {\n                    onClick: function() {\n                        return setMenuState(true);\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiMenu5Fill, {}, void 0, false, {\n                        fileName: \"/home/martins/Desktop/projects/portfolio-me/components/navigation/NavBar.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/martins/Desktop/projects/portfolio-me/components/navigation/NavBar.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/martins/Desktop/projects/portfolio-me/components/navigation/NavBar.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            menuState && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                ctrlMenu: function() {\n                    return setMenuState(!menuState);\n                }\n            }, void 0, false, {\n                fileName: \"/home/martins/Desktop/projects/portfolio-me/components/navigation/NavBar.tsx\",\n                lineNumber: 69,\n                columnNumber: 21\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/martins/Desktop/projects/portfolio-me/components/navigation/NavBar.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(NavBar, \"9ip0VbeygKHB3N51NfY26IFA9RQ=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmlnYXRpb24vTmF2QmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLFlBQVksR0FFWjs7O0FBQzZCO0FBQ3NCO0FBQ047QUFDRTtBQUNJO0FBQ3hCO0FBQzNCLElBQU1TLE1BQU0sR0FBRyxXQUFNOztJQUNuQixJQUE0Q04sR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUFwRE8sY0FBYyxHQUF1QlAsR0FBZSxHQUF0QyxFQUFFUSxpQkFBaUIsR0FBSVIsR0FBZSxHQUFuQjtJQUN4QyxJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ1MsU0FBUyxHQUFrQlQsSUFBZSxHQUFqQyxFQUFFVSxZQUFZLEdBQUlWLElBQWUsR0FBbkI7SUFDOUIscUdBQXFHO0lBQ3JHLElBQU1XLGlCQUFpQixHQUFHLFdBQU07UUFDOUIsSUFBSUMsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxFQUFFO1lBQzVCTCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixPQUFPO1lBQ0xBLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDO0lBQ0Qsc0VBQXNFO0lBQ3RFVCxnREFBUyxDQUFDLFdBQU07UUFDZGEsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVILGlCQUFpQixDQUFDLENBQUM7UUFFckQsT0FBTyxXQUFNO1lBQ1hDLE1BQU0sQ0FBQ0csbUJBQW1CLENBQUMsUUFBUSxFQUFFSixpQkFBaUIsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQztJQUNKLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU1LLElBQUksR0FBRyxTQUFDQSxJQUFZLEVBQUs7UUFDN0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0QscUJBQ0UsOERBQUNHLEtBQUc7UUFDRkMsU0FBUyxFQUFFLDhIQUE2SCxDQUV2SSxPQURDYixjQUFjLEdBQUcsaUJBQWlCLEdBQUcsUUFBUSxDQUM3Qzs7MEJBRUYsOERBQUNjLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxNQUFNOzBCQUNzQyxlQUUzRDs7Ozs7cUJBQU07MEJBQ04sOERBQUNFLElBQUU7Z0JBQUNGLFNBQVMsRUFBQyxzRUFBc0U7MEJBRWpGaEIsK0RBQVMsQ0FBQyxTQUFDb0IsSUFBSSxFQUFFQyxLQUFLLEVBQUs7b0JBQzFCLHFCQUNFLDhEQUFDNUIsa0RBQUk7d0JBQWE2QixJQUFJLEVBQUVGLElBQUksQ0FBQ0csS0FBSztrQ0FDaEMsNEVBQUN6QiwyQ0FBTTs0QkFDTGtCLFNBQVMsRUFBRyw2RUFBMkU7c0NBQ3RGSSxJQUFJLENBQUNJLElBQUk7Ozs7O2lDQUNIO3VCQUpBSCxLQUFLOzs7OzZCQUtULENBQ1A7Z0JBQ0osQ0FBQyxDQUFDOzs7OztxQkFDQzswQkFFTCw4REFBQ0osS0FBRztnQkFBQ0QsU0FBUyxFQUFDLHlCQUF5QjswQkFDdEMsNEVBQUNsQiwyQ0FBTTtvQkFBQ2tCLFNBQVMsRUFBQyw4SkFBOEo7OEJBQUMsU0FFakw7Ozs7O3lCQUFTOzs7OztxQkFDTDswQkFFTiw4REFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLDBCQUEwQjswQkFDdkMsNEVBQUNqQiwrQ0FBVTtvQkFBQzBCLE9BQU8sRUFBRTsrQkFBTW5CLFlBQVksQ0FBQyxJQUFJLENBQUM7cUJBQUE7OEJBQzNDLDRFQUFDVCx1REFBVzs7Ozs2QkFBRzs7Ozs7eUJBQ0o7Ozs7O3FCQUNUO1lBRUxRLFNBQVMsa0JBQUksOERBQUNKLDZDQUFJO2dCQUFDeUIsUUFBUSxFQUFFOzJCQUFNcEIsWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztpQkFBQTs7Ozs7cUJBQUk7Ozs7OzthQUM1RCxDQUNOO0FBQ0osQ0FBQztHQTlES0gsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBZ0VaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL05hdkJhci50c3g/YWYwZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSaU1lbnU1RmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xuaW1wb3J0IHsgQnV0dG9uLCBNZW51QnV0dG9uIH0gZnJvbSBcIi4uL0J1dHRvblwiO1xuaW1wb3J0IHsgTGlua3MgfSBmcm9tIFwiLi4vY29uc3RhbnRzL05hdkJhci5TY2hlbWFcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuLi9NZW51XCI7XG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYXZCYXJQb3NpdGlvbiwgc2V0TmF2QmFyUG9zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVudVN0YXRlLCBzZXRNZW51U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBUaGlzIGZ1bmN0aW9uIGxpc3RlbnMgZm9yIHRoZSBvZmZzZXQgb2YgdGhlIHZldGljYWwgc2Nyb2xsYmFyIGFuZCBjaGFuZ2VzIGl0cyBwb3NpdGlvbiBhY2NvcmRpbmdseVxuICBjb25zdCB0b2dnbGVOYXZQb3NpdGlvbiA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMTAwKSB7XG4gICAgICBzZXROYXZCYXJQb3NpdGlvbih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TmF2QmFyUG9zaXRpb24oZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgLy8gdXNlRWZmZWN0IEhvb2sgdXNlZCB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXIgYWZ0ZXIgY29tcG9uZW50IG1vdW50c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRvZ2dsZU5hdlBvc2l0aW9uKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0b2dnbGVOYXZQb3NpdGlvbik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRlc3QgPSAodGVzdDogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2codGVzdCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgY2xhc3NOYW1lPXtgdy1bMTAwJV0gc2hhZG93IGgtWzYwcHhdIGJnLVsjZmZmXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtWzFyZW1dIHRvcC0wIGxlZnQtMCByaWdodC0wIGJnLVtyZ2JhKDU0LDI1LDMzLDAuMildICR7XG4gICAgICAgIG5hdkJhclBvc2l0aW9uID8gXCJmaXhlZCBzaGFkb3ctbWRcIiA6IFwic3RhdGljXCJcbiAgICAgIH1gfT5cbiAgICAgIHsvKiBMb2dvICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28nPlxuICAgICAgICB7LyogPEltYWdlIHNyYz0nL2xvZ28ucG5nJyB3aWR0aD17MTAwfSBoZWlnaHQ9ezI1fSAvPiAqL31cbiAgICAgICAgTWFydGlucyBOZ2VuZVxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdsaW5rcyB3LVs1MCVdIHhsOnctWzQwJV0gaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoaWRkZW4gbWQ6ZmxleCc+XG4gICAgICAgIHsvKiBMaW5rcyBmcm9tIE5hdkJhciBTY2hlbWEgbWFwcGVkIGludG8gYnV0dG9ucyAqL31cbiAgICAgICAge0xpbmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtpbmRleH0gaHJlZj17aXRlbS5yb3V0ZX0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LVsjMzYxOTIxXSB0ZXh0LVswLjc1cmVtXSB4bDp0ZXh0LVsxLjI1cmVtXSBmb250LVs3MDBdIGxlYWRpbmctWzEuNXJlbV1gfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5saW5rfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgICB7LyogQ29udGFjdCBidXR0b24gICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3QgaGlkZGVuIG1kOmJsb2NrJz5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J3ctWzEwOHB4XSBoLVszMnB4XSBiZy1bI2ZmZl0gcm91bmRlZC1bNHB4XSB0ZXh0LVsjNUUzQkVFXSB0ZXh0LVswLjc1cmVtXSB4bDp0ZXh0LVsxcmVtXSBmb250LVs0MDBdIGxlYWRpbmctWzE1MCVdIGJvcmRlci1bMXB4XSBib3JkZXItc29saWQgYm9yZGVyLVsjNUUzQkVFXSc+XG4gICAgICAgICAgQ29udGFjdFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIE9wZW4gTWVudSBCdXR0b24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudUljb24gYmxvY2sgbWQ6aGlkZGVuJz5cbiAgICAgICAgPE1lbnVCdXR0b24gb25DbGljaz17KCkgPT4gc2V0TWVudVN0YXRlKHRydWUpfT5cbiAgICAgICAgICA8UmlNZW51NUZpbGwgLz5cbiAgICAgICAgPC9NZW51QnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogTWVudSAqL31cbiAgICAgIHttZW51U3RhdGUgJiYgPE1lbnUgY3RybE1lbnU9eygpID0+IHNldE1lbnVTdGF0ZSghbWVudVN0YXRlKX0gLz59XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSaU1lbnU1RmlsbCIsIkJ1dHRvbiIsIk1lbnVCdXR0b24iLCJMaW5rcyIsIk1lbnUiLCJOYXZCYXIiLCJuYXZCYXJQb3NpdGlvbiIsInNldE5hdkJhclBvc2l0aW9uIiwibWVudVN0YXRlIiwic2V0TWVudVN0YXRlIiwidG9nZ2xlTmF2UG9zaXRpb24iLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJ1bCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImhyZWYiLCJyb3V0ZSIsImxpbmsiLCJvbkNsaWNrIiwiY3RybE1lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navigation/NavBar.tsx\n"));

/***/ })

});