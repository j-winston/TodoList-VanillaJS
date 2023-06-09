/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
      /*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "/* CSS resets */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\np {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/* Remove list styles */\\nul,\\nol {\\n  list-style: none;\\n}\\n\\nbody {\\n  height: 100vh;\\n  line-height: 1.5;\\n}\\n\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\nbody {\\n  background-color: #262626;\\n}\\n\\n.mytodo-app {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n}\\n\\n.header {\\n  display: flex;\\n  height: 5%;\\n  background-color: #303030;\\n}\\n\\n.header .icon-container {\\n  font-size: 30px;\\n  color: white;\\n  margin: 4px 10px;\\n\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.content-container {\\n  display: flex;\\n\\n  height: 100%;\\n}\\n\\n.left-nav {\\n  background-color: #575757;\\n  min-width: 30%;\\n  padding: 20px;\\n\\n  color: white;\\n\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n/* Project sidebar */\\n\\n.project-container {\\n  display: flex;\\n  flex-direction: column;\\n\\n  margin-top: 20px;\\n}\\n\\n.project-list-container {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n/* Main content window */\\n\\n.project-viewer {\\n  display: flex;\\n  flex-direction: column;\\n  width: min(700px, 80%);\\n  margin-left: 4%;\\n}\\n\\n.project-viewer-title {\\n  color: white;\\n  font-size: 1.5rem;\\n\\n  margin-top: 1.5rem;\\n}\\n\\n.add-task-btn {\\n  color: red;\\n}\\n\\ninput[type=\\"text\\"] {\\n  margin: 0px;\\n  padding: 0px;\\n}\\n\\n/* \'Add task styling\' */\\n\\n.form-inputs {\\n  display: flex;\\n\\n  align-self: flex-start;\\n  flex-wrap: wrap;\\n  width: 100%;\\n\\n  border: 1px solid gray;\\n  border-radius: 5px;\\n\\n  padding: 6px;\\n}\\n\\n.new-task-form input,\\n.edit-task-form {\\n  background-color: transparent;\\n\\n  font-size: 1.2rem;\\n  font-weight: 800;\\n  color: white;\\n\\n  border: none;\\n  outline: none;\\n\\n  caret-color: white;\\n}\\n\\n.new-task-form input[id=\\"description\\"] {\\n  font-size: 1rem;\\n  font-weight: normal;\\n}\\n\\n.new-task-btn-container {\\n  display: flex;\\n  justify-content: flex-end;\\n\\n  margin-top: 30px;\\n\\n  width: 100%;\\n\\n  gap: 7px;\\n}\\n\\n.add-task-btn {\\n  font-size: 1.2rem;\\n  font-weight: 800;\\n\\n  width: 20%;\\n  height: 2%;\\n\\n  color: lightgray;\\n}\\n\\n.add-task-btn:hover {\\n  cursor: pointer;\\n  color: red;\\n}\\n.due-date-container {\\n  height: 20%;\\n  width: 30%;\\n}\\n\\n.due-date-btn {\\n  height: 100%;\\n  width: 40%;\\n\\n  margin: 10px 0px;\\n\\n  font-weight: 700;\\n  color: white;\\n}\\n\\n.due-date-btn-text {\\n  color: gray;\\n  font-weight: 700;\\n  text-align: left;\\n}\\n\\n.due-date-picker-container {\\n  height: 1px;\\n  width: 1px;\\n}\\n\\n.date-picker {\\n  height: 0px;\\n  width: 0px;\\n}\\n\\n.form-inputs {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 4px;\\n}\\n\\n.confirm-task-btn,\\n.cancel-task-btn {\\n  background-color: darkred;\\n\\n  border: 1px solid transparent;\\n  border-radius: 6px;\\n\\n  color: white;\\n  font-weight: bold;\\n\\n  height: 1.8rem;\\n  width: 6rem;\\n}\\n\\n/* Task container */\\n.task-container {\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-start;\\n  cursor: pointer;\\n\\n  margin-top: 20px;\\n\\n  gap: 10px;\\n}\\n\\ninput[type=\\"checkbox\\"] {\\n  appearance: none;\\n\\n  margin: 0px;\\n\\n  font: inherit;\\n\\n  width: 1.2rem;\\n  height: 1.2rem;\\n\\n  border: 2px solid gray;\\n  border-radius: 2rem;\\n  transform: translateY(-0.075em);\\n}\\n\\n.task-btn-container {\\n  visibility: hidden;\\n\\n  flex-basis: 100%;\\n\\n  height: 100%;\\n  display: flex;\\n  justify-content: end;\\n\\n  align-self: end;\\n\\n  margin-right: 20px;\\n  gap: 20px;\\n\\n  color: white;\\n  font-weight: 800;\\n\\n  cursor: pointer;\\n}\\n\\n.task-container:hover .task-btn-container {\\n  visibility: visible;\\n}\\n\\n.task-title {\\n  color: white;\\n  font-weight: 700;\\n  font-size: 1.5rem;\\n}\\n\\n.task-btn-container div:hover {\\n  color: darkgray;\\n}\\n\\n.add-task-btn {\\n  width: 100%;\\n\\n  border-top: 1px solid gray;\\n}\\n\\n/* \'Edit task\' styling */\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./src/assets/css/style.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        );

        /***/
      },

    /***/ "./src/assets/css/style.css":
      /*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./src/assets/css/style.css?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /***/ "./src/domService.js":
      /*!***************************!*\
  !*** ./src/domService.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");\n// domService.js Role: Service provider Responsibilities: Add/remove/listen to DOM elements. Broadcast DOM related events to pubSub\n\n\nconst domService = (() => {\n  const hideElement = (el) => {\n    el.style.visibility = "hidden";\n  };\n  window.onload = () => {\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish(\'pageLoaded\')\n\n  };\n\n  const showElement = (hiddenElement) => {\n    const element = document.querySelector(hiddenElement);\n\n    element.style.visibility = "visible";\n  };\n\n  const removeElement = (el) => {\n    el.remove();\n  };\n\n  const createForm = (templateId) => {\n    const template = getTemplateClone(templateId);\n    const form = template.querySelector("form");\n    form.setAttribute("data-id", getCurrentProjectName());\n\n    return form;\n  };\n\n  const removeProject = (project) => {\n    const projectElement = document.querySelector(\n      "[data-id=" + CSS.escape(project.id) + "]"\n    );\n    removeElement(projectElement);\n\n    clearTaskViewer();\n\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("projectRemoved", project);\n  };\n\n  const getFormValues = (form) => {\n    const inputElements = form.querySelectorAll("input");\n    const formValues = {};\n\n    inputElements.forEach((input) => {\n      formValues[input.id] = input.value;\n    });\n\n    return formValues;\n  };\n  const getCurrentProjectName = () => {\n    const name = document.querySelector(".project-viewer-title").textContent;\n    return name;\n  };\n\n  const projectExists = (projectId) => {\n    if (document.querySelector("[data-id=" + CSS.escape(projectId) + "]")) {\n      return true;\n    }\n    return false;\n  };\n\n  const createProjectElement = (project) => {\n    if (!projectExists(project.id) && project.name != "Inbox") {\n      const projectContainerElement = document.createElement("div");\n      projectContainerElement.className = "project";\n      projectContainerElement.setAttribute("data-id", project.id);\n\n      const projectTitleElement = document.createElement("div");\n      projectTitleElement.addEventListener("click", () => {\n        updateTaskViewerTitle(project.name);\n        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("projectClicked", project);\n      });\n      projectTitleElement.textContent = project.name;\n      projectTitleElement.className = "project-title";\n\n      const deleteBtn = document.createElement("div");\n      deleteBtn.className = "project-delete-btn";\n      deleteBtn.textContent = "X";\n      deleteBtn.addEventListener("click", () => {\n        removeProject(project);\n      });\n\n      projectContainerElement.appendChild(projectTitleElement);\n      projectContainerElement.appendChild(deleteBtn);\n\n      return projectContainerElement;\n    }\n  };\n\n  const clearTaskViewer = () => {\n    document\n      .querySelectorAll(".task-container")\n      .forEach((task) => removeElement(task));\n  };\n  const updateTaskViewerTitle = (projName) => {\n    const title = document.querySelector(".project-viewer-title");\n    title.textContent = projName;\n  };\n\n  const showTaskEditMenu = (taskContainer) => {\n    // We can use the current task info to autofill the edit fields\n    const titleEl = taskContainer.querySelector(".task-title");\n    const dueDateEl = taskContainer.querySelector(".task-due-date");\n    const descriptionEl = taskContainer.querySelector(".task-description");\n\n    // When user clicks edit, show the edit form\n    const template = document.getElementById("editTaskTemplate");\n    const form = template.content.cloneNode(true);\n\n    const cancelBtn = form.querySelector(".cancel-btn");\n    const saveBtn = form.querySelector(".save-btn");\n\n    // Populate the form inputs initially with current values\n    form.getElementById("title").value = titleEl.textContent;\n    form.getElementById("duedate").value = dueDateEl.textContent;\n    form.getElementById("description").value = descriptionEl.textContent;\n\n    cancelBtn.addEventListener("click", () => {\n      const formEl = document.querySelector(".edit-task-form");\n      removeElement(formEl);\n    });\n\n    saveBtn.addEventListener("click", () => {\n      // We grab all the input values once they click save\n      const editTaskForm = document.querySelector(".edit-task-form .inputs");\n      const titleEl = editTaskForm.querySelector(\'input[class="title"]\');\n      const dueDateEl = editTaskForm.querySelector(\'input[type="date"]\');\n      const descriptionEl = editTaskForm.querySelector(\n        \'input[class="description"]\'\n      );\n\n      // Finally, broadcast all the stored edits along unique\n      // task id\n      const taskEditFormValues = {};\n      const taskId = taskContainer.getAttribute("data-id");\n\n      taskEditFormValues.id = taskId;\n      taskEditFormValues.projName = getCurrentProjectName();\n      taskEditFormValues.name = titleEl.value;\n      taskEditFormValues.duedate = dueDateEl.value;\n      taskEditFormValues.description = descriptionEl.value;\n\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("taskEditSubmitted", taskEditFormValues);\n\n      // Once saved, remove the edit form\n      editTaskForm.remove();\n    });\n\n    taskContainer.appendChild(form);\n  };\n\n  const _createNewTaskNode = (task) => {\n    const newTaskContainer = document.createElement("div");\n    // when task.id is changed to task.getId, this breaks it\n    newTaskContainer.setAttribute("data-id", task.getId);\n    newTaskContainer.classList.add("task-container");\n\n    const taskCompleteBtn = document.createElement("input");\n    taskCompleteBtn.classList.add("task-complete-btn");\n    taskCompleteBtn.setAttribute("type", "checkbox");\n\n    taskCompleteBtn.addEventListener("click", () => {\n      removeElement(newTaskContainer);\n    });\n\n    const nameEl = document.createElement("p");\n    nameEl.classList.add("task-title");\n    nameEl.textContent = task.getTitle;\n\n    const descriptionEl = document.createElement("p");\n    descriptionEl.classList.add("task-description");\n    descriptionEl.textContent = task.getDescription;\n\n    const dueDateEl = document.createElement("p");\n    dueDateEl.classList.add("task-due-date");\n    dueDateEl.textContent = task.getDueDate;\n\n    const taskBtnContainer = document.createElement("div");\n    taskBtnContainer.classList.add("task-btn-container");\n\n    const deleteBtnEl = document.createElement("div");\n    deleteBtnEl.classList.add("delete-btn");\n    deleteBtnEl.textContent = "Del";\n\n    deleteBtnEl.addEventListener("click", () => {\n      removeElement(newTaskContainer);\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("taskDeleted", task);\n    });\n\n    const editBtnEL = document.createElement("div");\n    editBtnEL.classList.add("edit-btn");\n    editBtnEL.textContent = "Edit";\n\n    editBtnEL.addEventListener("click", () => {\n      showTaskEditMenu(newTaskContainer);\n    });\n\n    const taskInfoContainer = document.createElement("div");\n    taskBtnContainer.append(deleteBtnEl, editBtnEL);\n    taskInfoContainer.append(nameEl, descriptionEl, dueDateEl);\n\n    newTaskContainer.append(\n      taskCompleteBtn,\n      taskInfoContainer,\n      taskBtnContainer\n    );\n\n    return newTaskContainer;\n  };\n\n  const showTask = (task) => {\n    // task.getId doesnt work here, either\n    const taskViewer = document.querySelector(".project-tasks");\n\n    const taskEl = _createNewTaskNode(task);\n    taskViewer.appendChild(taskEl);\n  };\n\n  const showAllTasks = (project) => {\n    for (const task of project.tasks) {\n      // When inbox is loaded on start, task.getId doesnt work here\n      showTask(task);\n    }\n  };\n\n  const addProjectToViewer = (projectEl) => {\n    const projectListContainer = document.querySelector(".project-container");\n    projectListContainer.appendChild(projectEl);\n  };\n\n  const showAddProjectDialog = () => {\n    const newProjectForm = createForm("new-project-template");\n\n    const projectContainer = document.querySelector(".project-container");\n    projectContainer.appendChild(newProjectForm);\n\n    const confirmNewProjectBtn = document.querySelector(".confirm-project-btn");\n    confirmNewProjectBtn.addEventListener("click", () => {\n      const formValues = getFormValues(newProjectForm);\n      removeElement(newProjectForm);\n\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("addProjectFormSubmitted", formValues);\n    });\n\n    const cancelNewProjectBtn = document.querySelector(".cancel-project-btn");\n    cancelNewProjectBtn.addEventListener("click", () => {\n      removeElement(newProjectForm);\n    });\n  };\n\n  const showNewAddedProject = (project) => {\n    const projectEl = createProjectElement(project);\n    updateTaskViewerTitle(project.name);\n\n    addProjectToViewer(projectEl);\n\n    clearTaskViewer();\n    showAllTasks(project);\n  };\n\n  const parseDate = (dateVal) => {\n    const strDate = dateVal.split("-");\n    const date = strDate[1] + "/" + strDate[2] + "/" + strDate[0];\n\n    return date;\n  };\n\n  const getTemplateClone = (templateId) => {\n    const template = document.getElementById(templateId);\n    const clone = template.content.cloneNode(true);\n\n    return clone;\n  };\n\n  const appendFormToViewer = (form, el) => {\n    const viewer = document.querySelector(el);\n\n    viewer.appendChild(form);\n  };\n  const showAddTask = () => {\n    const form = createForm("new-task-template");\n    appendFormToViewer(form, ".project-viewer");\n\n    const projectName = getCurrentProjectName();\n    form.setAttribute("data-id", projectName);\n\n    // Event handlers\n    const dueDateBtn = form.querySelector(".due-date-btn-text");\n    dueDateBtn.addEventListener("click", () => {\n      const datePicker = document.getElementById("duedate");\n      datePicker.addEventListener("change", () => {\n        const date = parseDate(datePicker.value);\n\n        dueDateBtn.textContent = date;\n      });\n\n      datePicker.showPicker();\n    });\n\n    const cancelBtn = document.querySelector(".cancel-task-btn");\n    cancelBtn.addEventListener("click", () => {\n      form.remove();\n    });\n\n    const saveBtn = document.querySelector(".save-task-btn");\n    saveBtn.addEventListener("click", () => {\n      const formKeyValues = getFormValues(form);\n      formKeyValues.projName = projectName;\n\n      removeElement(form);\n      showElement(".add-task-btn");\n\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("taskSubmitted", formKeyValues);\n    });\n    // End event handlers\n  };\n\n  const addNewTask = () => {\n    hideElement(document.querySelector(".add-task-btn"));\n    showAddTask();\n  };\n\n  const startTaskEvents = () => {\n    const addProjectBtn = document.querySelector(".add-project-btn");\n    addProjectBtn.addEventListener("click", showAddProjectDialog);\n\n    const addTaskBtn = document.querySelector(".add-task-btn");\n    addTaskBtn.addEventListener("click", addNewTask);\n  };\n\n  const createInbox = () => {\n    updateTaskViewerTitle("Inbox");\n\n    const inboxBtn = document.querySelector(".inbox-nav-link");\n    inboxBtn.textContent = "Inbox";\n    inboxBtn.addEventListener("click", () => {\n      updateTaskViewerTitle("Inbox");\n    });\n  };\n\n  const showInbox = () => {\n    updateTaskViewerTitle("Inbox");\n\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("projectClicked", "Inbox");\n  };\n\n  const getTaskContainer = (taskId) => {\n    // Return the div container for the task\n    const container = document.querySelector(\n      "[data-id=" + CSS.escape(taskId) + "]"\n    );\n\n    return container;\n  };\n\n  const showProject = (project) => {\n    updateTaskViewerTitle(project.name);\n    clearTaskViewer();\n    showAllTasks(project);\n  };\n\n  const showAllProjects = (projArr) => {\n    for (let i = 0; i < projArr.length; i++) {\n      const proj = projArr[i];\n\n      if (projectExists(proj) || proj.name === "Inbox") {\n        showProject(proj);\n      } else {\n        showNewAddedProject(proj);\n      }\n    }\n  };\n  const showUpdatedTask = (task) => {\n    const name = task.name;\n    const description = task.description;\n    const dueDate = task.duedate;\n    const container = getTaskContainer(task.id);\n\n    container.querySelector(".task-title").textContent = name;\n    container.querySelector(".task-description").textContent = description;\n\n    container.querySelector(".task-due-date").textContent = dueDate;\n  };\n\n  const initializeUi = () => {\n    startTaskEvents();\n    createInbox();\n  };\n\n\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("allSavedProjectsRetrieved", showAllProjects);\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("newProjectAdded", showNewAddedProject);\n\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("taskAdded", showTask);\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("taskUpdated", showUpdatedTask);\n\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("projectDeleted", showInbox);\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("projectRetrieved", showProject);\n\n  return {\n    initializeUi,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domService);\n\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./src/domService.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");\n/* harmony import */ var _domService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domService */ "./src/domService.js");\n//index.js\n// on Domcontent loaded\n// use simple form input .value\n// ev.prevent default\n\n\n\n_domService__WEBPACK_IMPORTED_MODULE_1__["default"].initializeUi();\n\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/pubsub.js":
      /*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// pubsub.js\n// Role: Coordinator\n// Responsibilities: Event emitter. Broadcasts and publishes events.\n\nconst pubSub = (() => {\n  const events = {};\n\n  const subscribe = (eventName, fn) => {\n    events[eventName] = events[eventName] || [];\n    events[eventName].push(fn);\n  };\n\n  const publish = (eventName, data) => {\n    if (events[eventName]) {\n      events[eventName].forEach((f) => {\n        f(data);\n      });\n    }\n  };\n\n  const unsubscribe = (eventName, fn) => {\n    if (events[eventName]) {\n      events[eventName].filter((f) => f != fn);\n    }\n  };\n  return {\n    subscribe,\n    publish,\n    unsubscribe,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubSub);\n\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./src/pubsub.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
