"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _coinbase_onchainkit_checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coinbase/onchainkit/checkout */ \"(app-pages-browser)/./node_modules/@coinbase/onchainkit/esm/checkout/index.js\");\n/* harmony import */ var _coinbase_onchainkit_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coinbase/onchainkit/wallet */ \"(app-pages-browser)/./node_modules/@coinbase/onchainkit/esm/wallet/index.js\");\n/* harmony import */ var _coinbase_onchainkit_identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coinbase/onchainkit/identity */ \"(app-pages-browser)/./node_modules/@coinbase/onchainkit/esm/identity/index.js\");\n/* harmony import */ var _svg_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg/Image */ \"(app-pages-browser)/./app/svg/Image.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst components = [\n    {\n        name: \"Transaction\",\n        url: \"https://onchainkit.xyz/transaction/transaction\"\n    },\n    {\n        name: \"Swap\",\n        url: \"https://onchainkit.xyz/swap/swap\"\n    },\n    {\n        name: \"Checkout\",\n        url: \"https://onchainkit.xyz/checkout/checkout\"\n    },\n    {\n        name: \"Wallet\",\n        url: \"https://onchainkit.xyz/wallet/wallet\"\n    },\n    {\n        name: \"Identity\",\n        url: \"https://onchainkit.xyz/identity/identity\"\n    }\n];\nconst templates = [\n    {\n        name: \"NFT\",\n        url: \"https://github.com/coinbase/onchain-app-template\"\n    },\n    {\n        name: \"Commerce\",\n        url: \"https://github.com/coinbase/onchain-commerce-template\"\n    },\n    {\n        name: \"Fund\",\n        url: \"https://github.com/fakepixels/fund-component\"\n    }\n];\nconst productIds = [\n    \"cf9da605-6b2f-4bb5-97ea-2816717fd6f2\",\n    \"50ca2e2f-1aad-44b5-be47-07dfeed4d808\",\n    \"88bf34d5-4dd8-4f89-81f9-976520fabcfc\"\n];\nfunction App() {\n    _s();\n    const [productId, setProductId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(productIds[0]);\n    const handleRandomizeProduct = ()=>{\n        const randomIndex = Math.floor(Math.random() * productIds.length);\n        setProductId(productIds[randomIndex]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"pt-4 pr-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"wallet-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_wallet__WEBPACK_IMPORTED_MODULE_3__.Wallet, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_wallet__WEBPACK_IMPORTED_MODULE_3__.ConnectWallet, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_identity__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                                            className: \"h-6 w-6\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_identity__WEBPACK_IMPORTED_MODULE_4__.Name, {}, void 0, false, {\n                                            fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_wallet__WEBPACK_IMPORTED_MODULE_3__.WalletDropdown, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_identity__WEBPACK_IMPORTED_MODULE_4__.Identity, {\n                                            className: \"px-4 pt-3 pb-2\",\n                                            hasCopyAddressOnClick: true,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_identity__WEBPACK_IMPORTED_MODULE_4__.Avatar, {}, void 0, false, {\n                                                    fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_identity__WEBPACK_IMPORTED_MODULE_4__.Name, {}, void 0, false, {\n                                                    fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_identity__WEBPACK_IMPORTED_MODULE_4__.Address, {}, void 0, false, {\n                                                    fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_identity__WEBPACK_IMPORTED_MODULE_4__.EthBalance, {}, void 0, false, {\n                                                    fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_wallet__WEBPACK_IMPORTED_MODULE_3__.WalletDropdownLink, {\n                                            icon: \"wallet\",\n                                            href: \"https://keys.coinbase.com\",\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            children: \"Wallet\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_wallet__WEBPACK_IMPORTED_MODULE_3__.WalletDropdownDisconnect, {}, void 0, false, {\n                                            fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-4xl w-full p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/3 mx-auto mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg_Image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-nowrap text-3xl\",\n                                    children: \"Buy Random Things and loose your money\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-w-2xl w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col md:flex-row justify-between mt-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_checkout__WEBPACK_IMPORTED_MODULE_2__.Checkout, {\n                                        productId: productId,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_checkout__WEBPACK_IMPORTED_MODULE_2__.CheckoutButton, {\n                                                coinbaseBranded: true,\n                                                onClick: handleRandomizeProduct\n                                            }, void 0, false, {\n                                                fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_coinbase_onchainkit_checkout__WEBPACK_IMPORTED_MODULE_2__.CheckoutStatus, {}, void 0, false, {\n                                                fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arjun/Documents/ackee/temp/test/app/page.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"p/kXoNQbIg69N/wnUmuxbmDp584=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRWlDO0FBS007QUFPRjtBQU9FO0FBQ0o7QUFFbkMsTUFBTWUsYUFBYTtJQUNqQjtRQUNFQyxNQUFNO1FBQ05DLEtBQUs7SUFDUDtJQUNBO1FBQUVELE1BQU07UUFBUUMsS0FBSztJQUFtQztJQUN4RDtRQUFFRCxNQUFNO1FBQVlDLEtBQUs7SUFBMkM7SUFDcEU7UUFBRUQsTUFBTTtRQUFVQyxLQUFLO0lBQXVDO0lBQzlEO1FBQUVELE1BQU07UUFBWUMsS0FBSztJQUEyQztDQUNyRTtBQUVELE1BQU1DLFlBQVk7SUFDaEI7UUFBRUYsTUFBTTtRQUFPQyxLQUFLO0lBQW1EO0lBQ3ZFO1FBQ0VELE1BQU07UUFDTkMsS0FBSztJQUNQO0lBQ0E7UUFBRUQsTUFBTTtRQUFRQyxLQUFLO0lBQStDO0NBQ3JFO0FBRUQsTUFBTUUsYUFBYTtJQUNqQjtJQUNBO0lBQ0E7Q0FDRDtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR3RCLCtDQUFRQSxDQUFDbUIsVUFBVSxDQUFDLEVBQUU7SUFFeEQsTUFBTUkseUJBQXlCO1FBQzdCLE1BQU1DLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLUixXQUFXUyxNQUFNO1FBQ2hFTixhQUFhSCxVQUFVLENBQUNLLFlBQVk7SUFDdEM7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPRCxXQUFVOzBCQUNoQiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDekIsK0RBQU1BOzs4Q0FDTCw4REFBQ0Qsc0VBQWFBOztzREFDWiw4REFBQ00saUVBQU1BOzRDQUFDb0IsV0FBVTs7Ozs7O3NEQUNsQiw4REFBQ25CLCtEQUFJQTs7Ozs7Ozs7Ozs7OENBRVAsOERBQUNMLHVFQUFjQTs7c0RBQ2IsOERBQUNNLG1FQUFRQTs0Q0FBQ2tCLFdBQVU7NENBQWlCRSxxQkFBcUI7OzhEQUN4RCw4REFBQ3RCLGlFQUFNQTs7Ozs7OERBQ1AsOERBQUNDLCtEQUFJQTs7Ozs7OERBQ0wsOERBQUNGLGtFQUFPQTs7Ozs7OERBQ1IsOERBQUNJLHFFQUFVQTs7Ozs7Ozs7Ozs7c0RBRWIsOERBQUNOLDJFQUFrQkE7NENBQ2pCMEIsTUFBSzs0Q0FDTEMsTUFBSzs0Q0FDTEMsUUFBTzs0Q0FDUEMsS0FBSTtzREFDTDs7Ozs7O3NEQUdELDhEQUFDNUIsaUZBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT25DLDhEQUFDNkI7Z0JBQUtQLFdBQVU7MEJBQ2QsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDaEIsa0RBQVFBOzs7Ozs4Q0FDVCw4REFBQ3dCO29DQUFHUixXQUFVOzhDQUF1Qjs7Ozs7Ozs7Ozs7O3NDQUl2Qyw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQzdCLG1FQUFRQTt3Q0FBQ29CLFdBQVdBOzswREFDbkIsOERBQUNuQix5RUFBY0E7Z0RBQ2JxQyxlQUFlO2dEQUNmQyxTQUFTakI7Ozs7OzswREFFWCw4REFBQ3BCLHlFQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNqQztHQWpFd0JpQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIENoZWNrb3V0LFxuICBDaGVja291dEJ1dHRvbixcbiAgQ2hlY2tvdXRTdGF0dXMsXG59IGZyb20gXCJAY29pbmJhc2Uvb25jaGFpbmtpdC9jaGVja291dFwiO1xuaW1wb3J0IHtcbiAgQ29ubmVjdFdhbGxldCxcbiAgV2FsbGV0LFxuICBXYWxsZXREcm9wZG93bixcbiAgV2FsbGV0RHJvcGRvd25MaW5rLFxuICBXYWxsZXREcm9wZG93bkRpc2Nvbm5lY3QsXG59IGZyb20gXCJAY29pbmJhc2Uvb25jaGFpbmtpdC93YWxsZXRcIjtcbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIEF2YXRhcixcbiAgTmFtZSxcbiAgSWRlbnRpdHksXG4gIEV0aEJhbGFuY2UsXG59IGZyb20gXCJAY29pbmJhc2Uvb25jaGFpbmtpdC9pZGVudGl0eVwiO1xuaW1wb3J0IEltYWdlU3ZnIGZyb20gXCIuL3N2Zy9JbWFnZVwiO1xuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICB7XG4gICAgbmFtZTogXCJUcmFuc2FjdGlvblwiLFxuICAgIHVybDogXCJodHRwczovL29uY2hhaW5raXQueHl6L3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uXCIsXG4gIH0sXG4gIHsgbmFtZTogXCJTd2FwXCIsIHVybDogXCJodHRwczovL29uY2hhaW5raXQueHl6L3N3YXAvc3dhcFwiIH0sXG4gIHsgbmFtZTogXCJDaGVja291dFwiLCB1cmw6IFwiaHR0cHM6Ly9vbmNoYWlua2l0Lnh5ei9jaGVja291dC9jaGVja291dFwiIH0sXG4gIHsgbmFtZTogXCJXYWxsZXRcIiwgdXJsOiBcImh0dHBzOi8vb25jaGFpbmtpdC54eXovd2FsbGV0L3dhbGxldFwiIH0sXG4gIHsgbmFtZTogXCJJZGVudGl0eVwiLCB1cmw6IFwiaHR0cHM6Ly9vbmNoYWlua2l0Lnh5ei9pZGVudGl0eS9pZGVudGl0eVwiIH0sXG5dO1xuXG5jb25zdCB0ZW1wbGF0ZXMgPSBbXG4gIHsgbmFtZTogXCJORlRcIiwgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jb2luYmFzZS9vbmNoYWluLWFwcC10ZW1wbGF0ZVwiIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNvbW1lcmNlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jb2luYmFzZS9vbmNoYWluLWNvbW1lcmNlLXRlbXBsYXRlXCIsXG4gIH0sXG4gIHsgbmFtZTogXCJGdW5kXCIsIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vZmFrZXBpeGVscy9mdW5kLWNvbXBvbmVudFwiIH0sXG5dO1xuXG5jb25zdCBwcm9kdWN0SWRzID0gW1xuICBcImNmOWRhNjA1LTZiMmYtNGJiNS05N2VhLTI4MTY3MTdmZDZmMlwiLFxuICBcIjUwY2EyZTJmLTFhYWQtNDRiNS1iZTQ3LTA3ZGZlZWQ0ZDgwOFwiLFxuICBcIjg4YmYzNGQ1LTRkZDgtNGY4OS04MWY5LTk3NjUyMGZhYmNmY1wiLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbcHJvZHVjdElkLCBzZXRQcm9kdWN0SWRdID0gdXNlU3RhdGUocHJvZHVjdElkc1swXSk7XG5cbiAgY29uc3QgaGFuZGxlUmFuZG9taXplUHJvZHVjdCA9ICgpID0+IHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHByb2R1Y3RJZHMubGVuZ3RoKTtcbiAgICBzZXRQcm9kdWN0SWQocHJvZHVjdElkc1tyYW5kb21JbmRleF0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlbiBmb250LXNhbnMgZGFyazpiZy1iYWNrZ3JvdW5kIGRhcms6dGV4dC13aGl0ZSBiZy13aGl0ZSB0ZXh0LWJsYWNrXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInB0LTQgcHItNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxXYWxsZXQ+XG4gICAgICAgICAgICAgIDxDb25uZWN0V2FsbGV0PlxuICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICAgICAgPE5hbWUgLz5cbiAgICAgICAgICAgICAgPC9Db25uZWN0V2FsbGV0PlxuICAgICAgICAgICAgICA8V2FsbGV0RHJvcGRvd24+XG4gICAgICAgICAgICAgICAgPElkZW50aXR5IGNsYXNzTmFtZT1cInB4LTQgcHQtMyBwYi0yXCIgaGFzQ29weUFkZHJlc3NPbkNsaWNrPlxuICAgICAgICAgICAgICAgICAgPEF2YXRhciAvPlxuICAgICAgICAgICAgICAgICAgPE5hbWUgLz5cbiAgICAgICAgICAgICAgICAgIDxBZGRyZXNzIC8+XG4gICAgICAgICAgICAgICAgICA8RXRoQmFsYW5jZSAvPlxuICAgICAgICAgICAgICAgIDwvSWRlbnRpdHk+XG4gICAgICAgICAgICAgICAgPFdhbGxldERyb3Bkb3duTGlua1xuICAgICAgICAgICAgICAgICAgaWNvbj1cIndhbGxldFwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9rZXlzLmNvaW5iYXNlLmNvbVwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgV2FsbGV0XG4gICAgICAgICAgICAgICAgPC9XYWxsZXREcm9wZG93bkxpbms+XG4gICAgICAgICAgICAgICAgPFdhbGxldERyb3Bkb3duRGlzY29ubmVjdCAvPlxuICAgICAgICAgICAgICA8L1dhbGxldERyb3Bkb3duPlxuICAgICAgICAgICAgPC9XYWxsZXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCB3LWZ1bGwgcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBteC1hdXRvIG1iLTZcIj5cbiAgICAgICAgICAgIDxJbWFnZVN2ZyAvPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbm93cmFwIHRleHQtM3hsXCI+XG4gICAgICAgICAgICAgIEJ1eSBSYW5kb20gVGhpbmdzIGFuZCBsb29zZSB5b3VyIG1vbmV5XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsIHctZnVsbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG10LTRcIj5cbiAgICAgICAgICAgICAgICA8Q2hlY2tvdXQgcHJvZHVjdElkPXtwcm9kdWN0SWR9PlxuICAgICAgICAgICAgICAgICAgPENoZWNrb3V0QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvaW5iYXNlQnJhbmRlZFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSYW5kb21pemVQcm9kdWN0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxDaGVja291dFN0YXR1cyAvPlxuICAgICAgICAgICAgICAgIDwvQ2hlY2tvdXQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2hlY2tvdXQiLCJDaGVja291dEJ1dHRvbiIsIkNoZWNrb3V0U3RhdHVzIiwiQ29ubmVjdFdhbGxldCIsIldhbGxldCIsIldhbGxldERyb3Bkb3duIiwiV2FsbGV0RHJvcGRvd25MaW5rIiwiV2FsbGV0RHJvcGRvd25EaXNjb25uZWN0IiwiQWRkcmVzcyIsIkF2YXRhciIsIk5hbWUiLCJJZGVudGl0eSIsIkV0aEJhbGFuY2UiLCJJbWFnZVN2ZyIsImNvbXBvbmVudHMiLCJuYW1lIiwidXJsIiwidGVtcGxhdGVzIiwicHJvZHVjdElkcyIsIkFwcCIsInByb2R1Y3RJZCIsInNldFByb2R1Y3RJZCIsImhhbmRsZVJhbmRvbWl6ZVByb2R1Y3QiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImhhc0NvcHlBZGRyZXNzT25DbGljayIsImljb24iLCJocmVmIiwidGFyZ2V0IiwicmVsIiwibWFpbiIsImgyIiwiY29pbmJhc2VCcmFuZGVkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});