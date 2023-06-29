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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "/* CSS resets */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\np {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/* Remove list styles */\\nul,\\nol {\\n  list-style: none;\\n}\\n\\nbody {\\n  height: 100vh;\\n  line-height: 1.5;\\n}\\n\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\nbody {\\n  background-color: #262626;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.mytodo-app {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n}\\n\\n.header {\\n  display: flex;\\n  height: 5%;\\n  background-color: #323232;\\n}\\n\\n.header .icon-container {\\n  font-size: 30px;\\n  color: white;\\n  margin: 4px 10px;\\n\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.content-container {\\n  display: flex;\\n\\n  height: 100%;\\n}\\n\\n.inbox-title {\\n  font-size: 1.4rem;\\n  margin-bottom: 20%;\\n\\n  cursor: pointer;\\n}\\n\\n.left-nav {\\n  background-color: #454545;\\n  width: 30%;\\n  max-width: 40%;\\n  padding: 20px;\\n\\n  color: white;\\n\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n/* Project sidebar */\\n\\n.project-container {\\n  display: flex;\\n  flex-direction: column;\\n\\n  margin: 5% 0 5%;\\n}\\n\\n.project-list-container {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n/* Main content window */\\n\\n.project .project-delete-btn {\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.project-viewer {\\n  display: flex;\\n  flex-direction: column;\\n\\n  width: min(700px, 80%);\\n  margin-left: 4%;\\n}\\n\\n.project-viewer-title {\\n  color: white;\\n  font-size: 1.5rem;\\n\\n  margin-top: 1.5rem;\\n}\\n\\ninput[type=\\"text\\"] {\\n  margin: 0px;\\n  padding: 0px;\\n}\\n\\n.project {\\n  display: flex;\\n  flex-wrap: nowrap;\\n  justify-content: space-between;\\n\\n  cursor: pointer;\\n  border-radius: 2px;\\n}\\n\\n.project:nth-child(1) {\\n  display: none;\\n}\\n\\n.project-title {\\n  padding: 2%;\\n}\\n\\n.project:hover {\\n  background-color: darkgrey;\\n}\\n\\n.project:hover .project-delete-btn {\\n  visibility: visible;\\n}\\n\\n.project-delete-btn {\\n  color: white;\\n\\n  font-weight: bold;\\n  visibility: hidden;\\n\\n  padding: 2%;\\n}\\n\\n.add-project-btn {\\n  border-top: 1px solid gray;\\n  cursor: pointer;\\n}\\n\\n.add-project-btn p {\\n  margin-top: 5%;\\n}\\n/* \'Add task styling\' */\\n\\n.form-inputs {\\n  display: flex;\\n\\n  align-self: flex-start;\\n  flex-wrap: wrap;\\n  width: 100%;\\n\\n  border: 1px solid gray;\\n  border-radius: 5px;\\n\\n  padding: 6px;\\n}\\n\\n.form-inputs input {\\n  color: white;\\n}\\n\\n.new-task-form input {\\n  background-color: transparent;\\n\\n  font-size: 1.2rem;\\n  font-weight: 800;\\n  color: white;\\n\\n  border: none;\\n  outline: none;\\n\\n  caret-color: white;\\n}\\n\\n.new-task-form input[id=\\"description\\"] {\\n  font-size: 1rem;\\n  font-weight: normal;\\n}\\n\\n.new-task-btn-container {\\n  display: flex;\\n  justify-content: flex-end;\\n\\n  margin-top: 30px;\\n\\n  width: 100%;\\n\\n  gap: 7px;\\n}\\n\\n.add-task-btn {\\n  font-size: 1.2rem;\\n  font-weight: 800;\\n\\n  width: 20%;\\n  height: 2%;\\n\\n  color: lightgray;\\n}\\n\\n.add-task-btn:hover {\\n  cursor: pointer;\\n  color: red;\\n}\\n.due-date-container {\\n  height: 20%;\\n  width: 30%;\\n}\\n\\n.due-date-btn {\\n  height: 100%;\\n  width: 40%;\\n\\n  margin: 10px 0px;\\n\\n  font-weight: 700;\\n  color: white;\\n}\\n\\n.due-date-btn-text {\\n  color: gray;\\n  font-weight: 700;\\n  text-align: left;\\n}\\n\\n.due-date-picker-container {\\n  height: 1px;\\n  width: 1px;\\n}\\n\\n.date-picker {\\n  height: 0px;\\n  width: 0px;\\n}\\n\\n.form-inputs {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 4px;\\n}\\n\\n.edit-form-btns button,\\n.new-project-form button,\\n.save-task-btn,\\n.cancel-task-btn {\\n  border: 1px solid transparent;\\n  border-radius: 6px;\\n\\n  color: white;\\n  font-weight: bold;\\n\\n  height: 1.8rem;\\n  width: 6rem;\\n}\\n\\n.edit-form-btns button.cancel-btn {\\n  background-color: #333333;\\n  color: white;\\n}\\n\\n.edit-form-btns button.save-btn {\\n  background-color: darkred;\\n  color: white;\\n}\\n.confirm-task-btn {\\n  background-color: darkred;\\n\\n  border: 1px solid transparent;\\n  border-radius: 6px;\\n\\n  color: white;\\n  font-weight: bold;\\n\\n  height: 1.8rem;\\n  width: 6rem;\\n}\\n\\n/* Task container */\\n.task-container {\\n  display: flex;\\n\\n  margin-top: 20px;\\n  padding: 2% 0%;\\n  gap: 10px;\\n}\\n\\n.task-info-container {\\n  flex: 1 0 50%;\\n\\n  padding: 0px;\\n  margin: -4px;\\n\\n  cursor: pointer;\\n}\\n\\n.task-title {\\n  color: white;\\n  font-weight: 400;\\n  font-size: 1.2rem;\\n}\\n.task-description {\\n  color: gray;\\n}\\n\\ninput[type=\\"checkbox\\"] {\\n  flex: 1 0 auto;\\n  appearance: none;\\n\\n  margin: 0px;\\n\\n  font: inherit;\\n\\n  width: 1.2rem;\\n  height: 1.2rem;\\n\\n  border: 2px solid gray;\\n  border-radius: 2rem;\\n}\\n\\ninput[type=\\"checkbox\\"]:hover {\\n  background-color: darkgrey;\\n}\\n\\n.add-task-btn {\\n  color: gray;\\n\\n  margin-top: 1%;\\n  font-size: 1.1em;\\n}\\n\\n.task-btn-container {\\n  visibility: hidden;\\n  flex-basis: 100%;\\n\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: flex-end;\\n\\n  margin-right: 20px;\\n  gap: 20px;\\n\\n  color: white;\\n  font-weight: 800;\\n\\n  cursor: pointer;\\n}\\n\\n.task-container:hover .task-btn-container {\\n  visibility: visible;\\n}\\n\\n.task-btn-container div:hover {\\n  color: darkgray;\\n}\\n\\n.add-task-btn {\\n  width: 100%;\\n\\n  border-top: 1px solid gray;\\n}\\n\\n/* \'Edit task\' styling */\\n\\n.edit-form-container {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr;\\n\\n  border: 1px solid gray;\\n  border-radius: 5px;\\n\\n  padding: 2% 3%;\\n}\\n\\n.edit-form-inputs {\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: nowrap;\\n}\\n\\n.edit-form-inputs .title {\\n  font-size: 1.2rem;\\n  padding-bottom: 4%;\\n}\\n\\n.edit-form-inputs .description {\\n  font-size: 1rem;\\n  font-weight: normal;\\n}\\n\\n.edit-form-inputs .edit-date-picker {\\n  font-size: 0.9rem;\\n  font-weight: normal;\\n\\n  cursor: pointer;\\n}\\n\\n.edit-form-btns {\\n  display: flex;\\n  height: 100%;\\n\\n  justify-content: flex-end;\\n  align-items: flex-end;\\n\\n  gap: 3%;\\n}\\n\\n.edit-form-inputs input {\\n  background: none;\\n  border: none;\\n  outline: none;\\n\\n  color: gray;\\n  font-weight: bold;\\n}\\n\\n.edit-date-placeholder-text {\\n  padding: 0px;\\n}\\n\\n.new-project-form {\\n  border-radius: 4px;\\n\\n  padding: 5%;\\n  margin-top: 3%;\\n}\\n\\n.new-project-form .form-confirm {\\n  display: flex;\\n  flex-wrap: nowrap;\\n  justify-content: flex-end;\\n\\n  align-items: center;\\n\\n  height: 100%;\\n  gap: 4%;\\n}\\n\\n.new-project-form input[type=\\"text\\"] {\\n  border: none;\\n  outline: none;\\n\\n  caret-color: white;\\n\\n  background-color: transparent;\\n}\\n\\n.new-project-form .confirm-project-btn {\\n  background-color: darkred;\\n\\n  width: 30%;\\n}\\n\\n.new-project-form .cancel-project-btn {\\n  background-color: gray;\\n  width: 30%;\\n}\\n\\n.add-project-btn {\\n  cursor: pointer;\\n  font-weight: 600;\\n}\\n\\n.add-project-btn:hover {\\n  color: darkgrey;\\n}\\n\\n.cancel-task-btn {\\n  background-color: darkgrey;\\n}\\n\\n.save-task-btn {\\n  background-color: darkred;\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./src/assets/css/style.css?./node_modules/css-loader/dist/cjs.js'
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

    /***/ "./src/controllerInterface.js":
      /*!************************************!*\
  !*** ./src/controllerInterface.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _uid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uid */ "./src/uid.js");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectController */ "./src/projectController.js");\n//Module: controllerInterface.js\n//Role: Bridge\n\n\n\n\nconst controllerInterface = (() => {\n\n  const newTaskObj = (formDataObj) => {\n    let taskData = {};\n    const entries = formDataObj.entries();\n\n    for (let pair of entries) {\n      const key = pair[0];\n      const value = pair[1];\n      taskData[key] = value;\n    }\n\n    const newTaskValues = {\n      id: _uid__WEBPACK_IMPORTED_MODULE_0__["default"].create(),\n      name: taskData["name"],\n      description: taskData["description"],\n      projectName: taskData["projectName"],\n      dueDate: taskData["dueDate"],\n    };\n\n    return {\n      get id() {\n        return newTaskValues.id;\n      },\n\n      set id(newId) {\n        newTaskValues.id = newId;\n      },\n\n      get name() {\n        return newTaskValues.name;\n      },\n\n      get description() {\n        return newTaskValues.description;\n      },\n\n      get projectName() {\n        return newTaskValues.projectName;\n      },\n      get dueDate() {\n        return newTaskValues.dueDate;\n      },\n    };\n  };\n\n  const addTaskToProject = (formDataObj) => {\n    let task = newTaskObj(formDataObj);\n\n    _projectController__WEBPACK_IMPORTED_MODULE_2__["default"].saveTask(task);\n\n    return task;\n  };\n\n  const delProject = (name) => {\n    if (_projectController__WEBPACK_IMPORTED_MODULE_2__["default"].removeProject(name)) {\n      return true;\n    }\n    return false;\n  };\n\n  const errorCheck = (projName) => {\n    if (projName.length <= 0) {\n      return true;\n    }\n  };\n\n  const addNewProject = (projName) => {\n    if (errorCheck(projName)) {\n      return false;\n    }\n\n    const project = _projectController__WEBPACK_IMPORTED_MODULE_2__["default"].createNewProject(projName);\n\n    if (!project) {\n      return false;\n    } else {\n      let newProject = {\n        name: project.name,\n        tasks: project.tasks,\n        id: project.id,\n      };\n\n      return newProject;\n    }\n  };\n\n  const delTask = (task) => {\n    _projectController__WEBPACK_IMPORTED_MODULE_2__["default"].removeTask(task);\n  };\n\n  const loadTask = (taskId, projName) => {\n    const proj = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].loadProject(projName);\n    for (const task of proj.tasks) {\n      if (task.id === taskId) {\n        return task;\n      }\n    }\n  };\n\n\n  const getUpdatedTask = (formDatObj, oldTask) => {\n    let newTask = newTaskObj(formDatObj);\n    newTask.id = oldTask.id;\n\n    _projectController__WEBPACK_IMPORTED_MODULE_2__["default"].removeTask(oldTask);\n    _projectController__WEBPACK_IMPORTED_MODULE_2__["default"].saveTask(newTask);\n\n    return newTask;\n  };\n\n  const getProject = (name) => {\n    const proj = _projectController__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(name);\n    if (proj) {\n      return proj;\n    }\n    return false;\n  };\n\n  const projectExists = (name) => {\n    if (_storage__WEBPACK_IMPORTED_MODULE_1__["default"].loadProject(name)) {\n      return true;\n    } else return false;\n  };\n\n  const getAllProjects = () => {\n    return _storage__WEBPACK_IMPORTED_MODULE_1__["default"].loadAllProjects();\n  };\n  return {\n    getAllProjects,\n    addNewProject,\n    getProject,\n    delProject,\n    projectExists,\n    addTaskToProject,\n    delTask,\n    getUpdatedTask,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controllerInterface);\n\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./src/controllerInterface.js?'
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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");\n/* harmony import */ var _controllerInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllerInterface */ "./src/controllerInterface.js");\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectController */ "./src/projectController.js");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");\n// domService.js Role: Service provider Responsibilities: Add/remove/listen to DOM elements. Broadcast DOM related events to pubSub\n\n\n\n\n\nconst domService = (() => {\n  const hideElement = (el) => {\n    el.style.visibility = "hidden";\n  };\n\n  const showElement = (el) => {\n    el.style.visibility = "visible";\n  };\n\n  const addProjBtn = (() => {\n    const el = document.querySelector(".add-project-btn");\n\n    const hide = () => {\n      hideElement(el);\n    };\n\n    const show = () => {\n      showElement(el);\n    };\n\n    return {\n      hide,\n      show,\n    };\n  })();\n\n  const addTaskBtn = (() => {\n    const el = document.querySelector(".add-task-btn");\n\n    const hide = () => {\n      hideElement(el);\n    };\n\n    const show = () => {\n      showElement(el);\n    };\n\n    return {\n      hide,\n      show,\n    };\n  })();\n\n  window.onload = () => {\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("pageLoaded");\n  };\n  const removeElement = (el) => {\n    el.remove();\n  };\n  //\n  //\n  //  const removeProject = (project) => {\n  //    const projectElement = document.querySelector(\n  //      "[data-id=" + CSS.escape(project.id) + "]"\n  //    );\n  //    removeElement(projectElement);\n  //\n  //    clearTaskViewer();\n  //\n  //    pubSub.publish("projectRemoved", project);\n  //  };\n  //\n  //  const getFormValues = (form) => {\n  //    const inputElements = form.querySelectorAll("input");\n  //    const formValues = {};\n  //\n  //    inputElements.forEach((input) => {\n  //      formValues[input.id] = input.value;\n  //    });\n  //\n  //    return formValues;\n  //  };\n  //\n  //  const projectExists = (projectId) => {\n  //    if (document.querySelector("[data-id=" + CSS.escape(projectId) + "]")) {\n  //      return true;\n  //    }\n  //    return false;\n  //  };\n  //\n  //\n  const selTaskContainerEl = (id) => {\n    const tskContainer = document.querySelector(\n      "[data-id-task-id= " + CSS.escape(id) + "]"\n    );\n\n    return tskContainer;\n  };\n\n  const hideTaskCard = (taskId) => {\n    const container = selTaskContainerEl(taskId);\n\n    container.querySelector(".task-info-container").style.display = "none";\n    container.querySelector(".task-btn-container").style.display = "none";\n    container.querySelector(".task-complete-btn").style.display = "none";\n  };\n\n  const showTaskCard = (taskId) => {\n    const container = selTaskContainerEl(taskId);\n\n    container.querySelector(".task-info-container").style.display = "";\n    container.querySelector(".task-btn-container").style.display = "";\n    container.querySelector(".task-complete-btn").style.display = "";\n  };\n\n  const showTaskEditMenu = (task) => {\n    addTaskBtn.hide();\n\n    hideTaskCard(task.id);\n\n    const taskContainer = selTaskContainerEl(task.id);\n    const titleEl = taskContainer.querySelector(".task-title");\n    const dueDateEl = taskContainer.querySelector(".task-due-date");\n    const descriptionEl = taskContainer.querySelector(".task-description");\n\n    const template = document.getElementById("editTaskTemplate");\n    const formClone = template.content.cloneNode(true);\n\n    taskContainer.appendChild(formClone);\n    const editTaskForm = document.querySelector(".edit-task-form");\n\n    taskContainer.appendChild(editTaskForm);\n\n    // Populate the form inputs initially with current values\n    editTaskForm.elements["name"].value = titleEl.textContent;\n    editTaskForm.elements["description"].value = descriptionEl.textContent;\n    editTaskForm.elements["dueDate"].value = dueDateEl.textContent;\n\n    const cancelBtn = editTaskForm.querySelector(".cancel-btn");\n    cancelBtn.addEventListener("click", () => {\n      showTaskCard(task.id);\n\n      removeElement(editTaskForm);\n\n      addTaskBtn.show();\n    });\n\n    const saveBtn = editTaskForm.querySelector(".save-btn");\n    saveBtn.addEventListener("click", () => {\n      const formData = new FormData(editTaskForm);\n      formData.set("projectName", task.projectName);\n\n      const updatedTask = _controllerInterface__WEBPACK_IMPORTED_MODULE_1__["default"].getUpdatedTask(formData, task);\n\n      editTaskForm.remove();\n\n      removeElement(taskContainer);\n      showTask(updatedTask);\n    });\n\n    //saveBtn.addEventListener("click", () => {\n    //    const formData = new FormData(taskEditForm);\n\n    //  // We grab all the input values once they click save\n    //  const editTaskForm = document.querySelector(".edit-task-form .inputs");\n    //  const titleEl = editTaskForm.querySelector(\'input[class="title"]\');\n    //  const dueDateEl = editTaskForm.querySelector(\'input[type="date"]\');\n    //  const descriptionEl = editTaskForm.querySelector(\n    //    \'input[class="description"]\'\n    //  );\n\n    //  // Finally, broadcast all the stored edits along unique\n    //  // task id\n    //  const taskEditFormValues = {};\n    //  const taskId = taskContainer.getAttribute("data-id");\n\n    //  taskEditFormValues.id = taskId;\n    //  taskEditFormValues.projName = getCurrentProjectName();\n    //  taskEditFormValues.name = titleEl.value;\n    //  taskEditFormValues.duedate = dueDateEl.value;\n    //  taskEditFormValues.description = descriptionEl.value;\n\n    //  // Once saved, remove the edit form\n    //  editTaskForm.remove();\n    //});\n  };\n  //\n\n  //\n  //\n  //\n  //\n  const parseDate = (dateVal) => {\n    const strDate = dateVal.split("-");\n    const date = strDate[1] + "/" + strDate[2] + "/" + strDate[0];\n\n    return date;\n  };\n  //\n  //\n  //\n  //\n  //\n  //\n  //  const createInbox = () => {\n  //    updateTaskViewerTitle("Inbox");\n  //\n  //    const inboxBtn = document.querySelector(".inbox-nav-link");\n  //    inboxBtn.textContent = "Inbox";\n  //\n  //    let inbox = getProject();\n  //    if (!inbox) {\n  //      inbox = newEmptyProject("Inbox");\n  //    }\n  //\n  //    inboxBtn.addEventListener("click", () => {\n  //      showProject(inbox);\n  //    });\n  //  };\n  //\n  //  const newEmptyProject = (name) => {\n  //    return projectController.newEmptyProject(name);\n  //  };\n  //\n  //  const showInbox = () => {\n  //    updateTaskViewerTitle("Inbox");\n  //  };\n  //\n  //  const getTaskContainer = (taskId) => {\n  //    // Return the div container for the task\n  //    const container = document.querySelector(\n  //      "[data-id=" + CSS.escape(taskId) + "]"\n  //    );\n  //\n  //    return container;\n  //  };\n  //\n\n  //\n  //  const showUpdatedTask = (task) => {\n  //    const name = task.name;\n  //    const description = task.description;\n  //    const dueDate = task.duedate;\n  //    const container = getTaskContainer(task.id);\n  //\n  //    container.querySelector(".task-title").textContent = name;\n  //    container.querySelector(".task-description").textContent = description;\n  //\n  //    container.querySelector(".task-due-date").textContent = dueDate;\n  //  };\n  //\n  const getProject = () => {\n    const proj = _controllerInterface__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(getCurrentProjectName());\n    if (proj) {\n      return proj;\n    }\n    return false;\n  };\n  const _createNewTaskNode = (task) => {\n    const newTaskContainer = document.createElement("div");\n    newTaskContainer.setAttribute("data-id-task-id", task.id);\n    newTaskContainer.classList.add("task-container");\n\n    const taskCompleteBtn = document.createElement("input");\n    taskCompleteBtn.classList.add("task-complete-btn");\n    taskCompleteBtn.setAttribute("type", "checkbox");\n\n    taskCompleteBtn.addEventListener("click", () => {\n      removeElement(newTaskContainer);\n    });\n\n    const nameEl = document.createElement("p");\n    nameEl.classList.add("task-title");\n    nameEl.textContent = task.name;\n\n    const descriptionEl = document.createElement("p");\n    descriptionEl.classList.add("task-description");\n    descriptionEl.textContent = task.description;\n\n    const dueDateEl = document.createElement("p");\n    dueDateEl.classList.add("task-due-date");\n    dueDateEl.textContent = task.dueDate;\n    dueDateEl.style.display = "none";\n\n    const taskBtnContainer = document.createElement("div");\n    taskBtnContainer.classList.add("task-btn-container");\n\n    const deleteBtnEl = document.createElement("div");\n    deleteBtnEl.classList.add("delete-btn");\n    deleteBtnEl.textContent = "Del";\n\n    deleteBtnEl.addEventListener("click", () => {\n      removeElement(newTaskContainer);\n\n      _controllerInterface__WEBPACK_IMPORTED_MODULE_1__["default"].delTask(task);\n    });\n\n    const editBtnEL = document.createElement("div");\n    editBtnEL.classList.add("edit-btn");\n    editBtnEL.textContent = "Edit";\n\n    editBtnEL.addEventListener("click", () => {\n      showTaskEditMenu(task);\n    });\n\n    const taskInfoContainer = document.createElement("div");\n    taskInfoContainer.classList.add("task-info-container");\n    taskBtnContainer.append(deleteBtnEl, editBtnEL);\n    taskInfoContainer.append(nameEl, descriptionEl, dueDateEl);\n\n    newTaskContainer.append(\n      taskCompleteBtn,\n      taskInfoContainer,\n      taskBtnContainer\n    );\n\n    return newTaskContainer;\n  };\n\n  const showTask = (task) => {\n    const taskViewer = document.querySelector(".project-tasks");\n    const taskEl = _createNewTaskNode(task);\n\n    taskViewer.appendChild(taskEl);\n    addTaskBtn.show();\n  };\n\n  const showAllTasks = (tasks) => {\n    if (tasks.length > 0) {\n      for (const task of tasks) {\n        showTask(task);\n      }\n    }\n  };\n\n  const showProject = (project) => {\n    clearTaskViewer();\n    updateTaskViewerTitle(project.name);\n\n    showAllTasks(project.tasks);\n  };\n\n  const showAllLoadedProjects = (projArr) => {\n    for (let i = 0; i < projArr.length; i++) {\n      const proj = projArr[i];\n      addProjectToNavBar(proj);\n      showProject(proj);\n    }\n  };\n\n  const loadProjects = () => {\n    const projects = _controllerInterface__WEBPACK_IMPORTED_MODULE_1__["default"].getAllProjects();\n    showAllLoadedProjects(projects);\n  };\n\n  const getCurrentProjectName = () => {\n    const name = document.querySelector(".project-viewer-title").textContent;\n    return name;\n  };\n  const getTemplateClone = (templateId) => {\n    const template = document.getElementById(templateId);\n    const clone = template.content.cloneNode(true);\n\n    return clone;\n  };\n\n  const createForm = (templateId) => {\n    const template = getTemplateClone(templateId);\n    const form = template.querySelector("form");\n    form.setAttribute("data-id", getCurrentProjectName());\n\n    return form;\n  };\n\n  const clearTaskViewer = () => {\n    document\n      .querySelectorAll(".task-container")\n      .forEach((task) => removeElement(task));\n  };\n\n  const addProjectToViewer = (projectEl) => {\n    const projectListContainer = document.querySelector(".project-container");\n    projectListContainer.appendChild(projectEl);\n  };\n\n  const updateTaskViewerTitle = (projName) => {\n    const title = document.querySelector(".project-viewer-title");\n    title.textContent = projName;\n  };\n\n  const removeProject = (name) => {\n    if (_controllerInterface__WEBPACK_IMPORTED_MODULE_1__["default"].delProject(name)) {\n      return true;\n    }\n    return false;\n  };\n\n  const createInboxElement = () => {\n    const project = _controllerInterface__WEBPACK_IMPORTED_MODULE_1__["default"].getProject("Inbox");\n\n    const projectContainerElement = document.createElement("div");\n\n    const projectTitleElement = document.createElement("div");\n    projectTitleElement.addEventListener("click", () => {\n      updateTaskViewerTitle(project.name);\n      showAllTasks(project);\n    });\n\n    projectTitleElement.textContent = "Inbox";\n    projectContainerElement.appendChild(projectTitleElement);\n\n    return projectContainerElement;\n  };\n\n  const createProjectElement = () => {\n    const project = _controllerInterface__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(getCurrentProjectName());\n\n    const projectContainerElement = document.createElement("div");\n    projectContainerElement.className = "project";\n    projectContainerElement.setAttribute("data-id", project.id);\n\n    const projectTitleElement = document.createElement("div");\n    projectTitleElement.addEventListener("click", () => {\n      if (getCurrentProjectName() != project.name) {\n        clearTaskViewer();\n        updateTaskViewerTitle(project.name);\n        const prj = _controllerInterface__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(project.name);\n        showAllTasks(prj.tasks);\n      }\n    });\n\n    projectTitleElement.textContent = project.name;\n    projectTitleElement.className = "project-title";\n\n    const deleteBtn = document.createElement("div");\n    deleteBtn.className = "project-delete-btn";\n    const deleteIcon = document.createElement("p");\n    deleteIcon.textContent = "X";\n    deleteBtn.appendChild(deleteIcon);\n    deleteBtn.addEventListener("click", () => {\n      if (removeProject(project.name)) {\n        removeElement(projectContainerElement);\n        showInboxTasks();\n      }\n    });\n\n    projectContainerElement.appendChild(projectTitleElement);\n    projectContainerElement.appendChild(deleteBtn);\n\n    return projectContainerElement;\n  };\n  //\n  const addProjectToNavBar = (project) => {\n    if (project.name != "Inbox") {\n      updateTaskViewerTitle(project.name);\n\n      const projectEl = createProjectElement(project);\n      addProjectToViewer(projectEl);\n    }\n  };\n\n  //const getNewTask = (formDataObj) => {\n  //  const projName = getCurrentProjectName();\n  //  const task = controllerInterface.addTaskToProject(formDataObj, projName);\n\n  //  return task;\n  //};\n\n  const appendFormToViewer = (form, el) => {\n    const viewer = document.querySelector(el);\n\n    viewer.appendChild(form);\n  };\n\n  const showAddTask = () => {\n    const form = createForm("new-task-template");\n    appendFormToViewer(form, ".project-viewer");\n\n    const dueDateBtn = form.querySelector(".due-date-btn-text");\n    dueDateBtn.addEventListener("click", () => {\n      const datePicker = document.getElementById("duedate");\n      datePicker.addEventListener("change", () => {\n        const date = parseDate(datePicker.value);\n\n        dueDateBtn.textContent = date;\n      });\n\n      datePicker.showPicker();\n    });\n\n    const cancelBtn = document.querySelector(".cancel-task-btn");\n    cancelBtn.addEventListener("click", () => {\n      addTaskBtn.show();\n\n      form.remove();\n    });\n\n    const saveBtn = document.querySelector(".save-task-btn");\n    saveBtn.addEventListener("click", () => {\n      const prjName = getCurrentProjectName();\n      const formDataObj = new FormData(form);\n\n      formDataObj.set("projectName", prjName);\n\n      const task = _controllerInterface__WEBPACK_IMPORTED_MODULE_1__["default"].addTaskToProject(formDataObj);\n\n      showTask(task);\n      removeElement(form);\n    });\n  };\n\n  const addNewTask = () => {\n    addTaskBtn.hide();\n    showAddTask();\n  };\n\n  const showAddProjectDialog = () => {\n    addProjBtn.hide();\n\n    const newProjectForm = createForm("new-project-template");\n\n    const projectContainer = document.querySelector(".project-container");\n    projectContainer.appendChild(newProjectForm);\n\n    const confirmNewProjectBtn = document.querySelector(".confirm-project-btn");\n    confirmNewProjectBtn.addEventListener("click", () => {\n      const proj = _controllerInterface__WEBPACK_IMPORTED_MODULE_1__["default"].addNewProject(\n        newProjectForm.elements["name"].value\n      );\n\n      if (proj) {\n        addProjectToNavBar(proj);\n        showAllTasks(proj);\n        addProjBtn.show();\n      } else {\n        showProjNameError();\n        addProjBtn.show();\n      }\n\n      newProjectForm.remove();\n    });\n\n    const cancelNewProjectBtn = document.querySelector(".cancel-project-btn");\n    cancelNewProjectBtn.addEventListener("click", () => {\n      removeElement(newProjectForm);\n      addProjBtn.show();\n    });\n  };\n\n  const showProjNameError = () => {\n    console.log("Error: project name already exists");\n  };\n  const showInboxTasks = () => {\n    if (_controllerInterface__WEBPACK_IMPORTED_MODULE_1__["default"].projectExists("Inbox")) {\n      const inboxPrj = _controllerInterface__WEBPACK_IMPORTED_MODULE_1__["default"].getProject("Inbox");\n      showProject(inboxPrj);\n    } else {\n      const newInbox = _controllerInterface__WEBPACK_IMPORTED_MODULE_1__["default"].addNewProject("Inbox");\n      showProject(newInbox);\n    }\n  };\n\n  const startTaskEvents = () => {\n    const inboxBtn = document.querySelector(".inbox-title");\n    inboxBtn.addEventListener("click", () => {\n      showInboxTasks();\n    });\n\n    const addProjectBtn = document.querySelector(".add-project-btn");\n    addProjectBtn.addEventListener("click", showAddProjectDialog);\n\n    const addTaskBtn = document.querySelector(".add-task-btn");\n    addTaskBtn.addEventListener("click", addNewTask);\n  };\n\n  const initializeUi = () => {\n    startTaskEvents();\n    loadProjects();\n    showInboxTasks();\n  };\n\n  return {\n    initializeUi,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domService);\n\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./src/domService.js?'
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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");\n/* harmony import */ var _domService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domService */ "./src/domService.js");\n/* harmony import */ var _controllerInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllerInterface */ "./src/controllerInterface.js");\n//index.js\n// on Domcontent loaded\n// use simple form input .value\n// ev.prevent default\n\n\n\n\n_domService__WEBPACK_IMPORTED_MODULE_1__["default"].initializeUi();\n\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/projectController.js":
      /*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");\n/* harmony import */ var _taskController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskController */ "./src/taskController.js");\n/* harmony import */ var _uid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uid */ "./src/uid.js");\n// Module: projectController.js\n// Role: Coordinator\n// Responsibilities: coordinate movement of project data\n\n\n\n\n\n\nconst projectController = (() => {\n  const store = (project) => {\n    if (_storage__WEBPACK_IMPORTED_MODULE_1__["default"].saveProject(project)) {\n      return true;\n    }\n  };\n  //\n  //\n  //\n  //  const assignProjectValues = (newProject, formKeyValuePairs) => {\n  //    for (let key in formKeyValuePairs) {\n  //      if (key in newProject) {\n  //        newProject[key] = formKeyValuePairs[key];\n  //      } else {\n  //        console.log("KeyError:" + key + " not found");\n  //      }\n  //    }\n  //    return newProject;\n  //  };\n  //\n  //  const loadAllProjects = () => {\n  //    const allSavedProjects = storage.loadAllProjects();\n  //\n  //    return allSavedProjects;\n  //  };\n  //\n  //\n  const removeProject = (name) => {\n    if (_storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(name)) {\n      return true;\n    }\n    return false;\n  };\n\n  //\n  //  const removeAll = () => {\n  //    storage.deleteAllProjects();\n  //  };\n  //\n  //\n  //\n  const getProject = (name) => {\n    return _storage__WEBPACK_IMPORTED_MODULE_1__["default"].loadProject(name);\n  };\n\n  const Project = (projName) => {\n    let name = projName;\n    let id = _uid__WEBPACK_IMPORTED_MODULE_3__["default"].create();\n    let tasks = [];\n\n    return {\n      name,\n      id,\n      tasks,\n    };\n  };\n\n  //const newTask = (formDataObj) => {\n  //  const task = taskController.createNewTask(formDataObj);\n\n  //  saveTask(task);\n  //};\n\n  const removeTask = (task) => {\n    const id = task.id;\n    const name = task.projectName;\n\n    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(id, name);\n  };\n\n  //const newEmptyProject = (name) => {\n  //  const project = Project(name);\n\n  //  store(project);\n\n  //  return project;\n  //};\n  const saveTask = (task) => {\n    const projName = task.projectName;\n    const proj = _storage__WEBPACK_IMPORTED_MODULE_1__["default"].loadProject(projName);\n    proj.tasks.push(task);\n\n    store(proj);\n  };\n\n  const createNewProject = (name) => {\n    if (_storage__WEBPACK_IMPORTED_MODULE_1__["default"].loadProject(name)) {\n      return false;\n    } else {\n      const project = Project(name);\n\n      store(project);\n\n      return project;\n    }\n  };\n\n  return {\n    createNewProject,\n    getProject,\n    removeTask,\n    saveTask,\n    removeProject,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectController);\n\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./src/projectController.js?'
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

    /***/ "./src/storage.js":
      /*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module: storage.js\n// Role: Service provider\n// Responsilities: Save project data to user local drive\nconst storage = (() => {\n  const saveProject = (project) => {\n    localStorage.setItem(`${project.name}`, JSON.stringify(project));\n\n    if (localStorage.getItem(`${project.name}`)) {\n      return true;\n    }\n  };\n\n  //\n  //  if (project) {\n  //    return project;\n  //  }\n\n  //  return false;\n  //};\n\n  const loadAllProjects = () => {\n    const projects = [];\n\n    for (let i = 0; i < localStorage.length; i++) {\n      const projName = localStorage.key(i);\n      const project = loadProject(projName);\n\n      projects.push(project);\n    }\n    return projects;\n  };\n\n  const deleteProject = (name) => {\n    localStorage.removeItem(`${name}`);\n    if (!localStorage.getItem(`${name}`)) {\n      return true;\n    }\n    return false;\n  };\n\n  //const deleteAllProjects = () => {\n  //  localStorage.clear();\n  //};\n\n  const loadTask = (projName, id) => {\n    const proj = loadProject(projName);\n    const tasks = proj.tasks;\n\n    for (const task of tasks) {\n      if (task.id === id) {\n        return task;\n      }\n    }\n  };\n\n  const deleteTask = (id, projName) => {\n    const proj = loadProject(projName);\n    const tasks = proj.tasks;\n\n    if (tasks.length > 0) {\n      for (let task of tasks) {\n        if (task.id === id) {\n          const idx = tasks.indexOf(task);\n          tasks.splice(idx, 1);\n        }\n      }\n    }\n\n    saveProject(proj);\n  };\n\n  const loadProject = (name) => {\n    const jsnData = localStorage.getItem(`${name}`);\n    const project = JSON.parse(jsnData);\n    return project;\n  };\n\n  return {\n    loadAllProjects,\n    saveProject,\n    loadProject,\n    deleteProject,\n    deleteTask,\n  };\n})();\n//  loadProject,\n//  deleteAllProjects,\n//  deleteProject,\n//  loadTask,\n//  deleteTask\n//};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./src/storage.js?'
        );

        /***/
      },

    /***/ "./src/taskController.js":
      /*!*******************************!*\
  !*** ./src/taskController.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");\n/* harmony import */ var _uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uid */ "./src/uid.js");\n// Module: taskController.js\n// Role: Information provider\n// Responsibilities:\n\n\n\n\n\nconst taskController = (() => {\n  //  const Task = (formDataObj) => {\n  //    const _entries = formDataObj.entries();\n  //\n  //    let _taskData = {};\n  //\n  //    const setInitialValues = (_entries) => {\n  //      for (let pair of _entries) {\n  //        const key = pair[0];\n  //        const value = pair[1];\n  //        _taskData[key] = value;\n  //      }\n  //\n  //      _taskData["id"] = uid.create();\n  //    };\n  //\n  //    const getValue = (key) => {\n  //      if (_taskData[key]) {\n  //        return _taskData[key];\n  //      } else return false;\n  //    };\n  //\n  //    const setValue = (key, value) => {\n  //      if (key in _taskData) {\n  //        _taskData[key] = value;\n  //      } else return false;\n  //    };\n  //\n  //    setInitialValues(_entries);\n  //\n  //    return {\n  //      getValue,\n  //      setValue,\n  //    };\n  //  };\n  //\n  //  const createNewTask = (formDataObj) => {\n  //    const task = Task(formDataObj);\n  //    return task;\n  //  };\n\n  //const update = (task) => {\n  //  // \'taskify\' data goes here\n  //  // TODO fix delete bug and move on\n  //  const projName = taskUpdate.projName;\n  //  const id = taskUpdate.id;\n\n  //  const task = storage.loadTask(projName, id);\n\n  //  for (const key in taskUpdate) {\n  //    if (key in task) {\n  //      task[key] = taskUpdate[key];\n  //    }\n  //  }\n\n  //    storage.saveProject()\n  //  // task data now needs to be saved\n  //  // storage.saveTask(task);\n  //  pubSub.publish("taskUpdated", task);\n  //};\n\n  return {};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskController);\n\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./src/taskController.js?'
        );

        /***/
      },

    /***/ "./src/uid.js":
      /*!********************!*\
  !*** ./src/uid.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst uid = (() => {\n  const create = () => {\n    const uid =\n      Date.now().toString(32) + Math.random(16).toString(16).replace(/\\./g, "");\n    return uid;\n  };\n\n  return { create };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uid);\n\n\n//# sourceURL=webpack://lesson-13-project-mytodo/./src/uid.js?'
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
