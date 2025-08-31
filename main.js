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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/home.jpg */ \"./src/assets/home.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n \r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-position: center; \r\n  background-repeat: no-repeat; \r\n  background-size: cover; \r\n  font-family: \"Roboto\", sans-serif;\r\n  background-attachment: fixed;\r\n \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nheader {\r\n  background-color: rgba(56, 56, 56, 0.7);\r\ndisplay: flex; \r\njustify-content: space-between;\r\nalign-items: center;\r\nwidth: 100%;}\r\n\r\n#logo {\r\n  opacity: 1; \r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n\r\nbutton {\r\n  color: white;\r\n  font-size: 30px;\r\n  padding: 0 80px;\r\n  border: none;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  position: relative;\r\n  transition: color 0.3s ease;\r\n}\r\n\r\n\r\nbutton::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 50%;\r\n  bottom: -5px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #c49b63; /* doré chic */\r\n  transition: all 0.3s ease;\r\n  transform: translateX(-50%);\r\n}\r\n\r\nbutton:hover {\r\n  color: #c49b63;\r\n}\r\n\r\nbutton:hover::after {\r\n  width: 60%; /* soulignement partiel (élégant) */\r\n}\r\n\r\n/* Effet clic : léger appui */\r\nbutton:active {\r\n  transform: scale(0.95);\r\n  opacity: 0.8;\r\n  transition: transform 0.1s ease, opacity 0.1s ease;\r\n}\r\n\r\n\r\n\r\n#content{\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0 300px 300px 0\r\n}\r\n#aa{\r\n\r\n  margin-bottom: 200px;\r\n  margin-left: 250px;\r\n}\r\n#content p {\r\n \r\n  width: 60%;\r\n  margin-left: 35px;\r\n  font-size: 1.1rem;      \r\n  line-height: 1.8;       \r\n  color: #222;\r\n  text-align: center;   \r\n    \r\n  font-family: \"Arial\", sans-serif; \r\n  \r\n\r\n}\r\n\r\n.hero-text {\r\n  font-size: 3.5rem;\r\n  font-family: \"Georgia\", serif;\r\n  letter-spacing: 2px;\r\n  color: #333;\r\n  border-bottom: 3px solid #c49b63;\r\n  padding-bottom: 10px;\r\n}\r\nfooter {\r\n background-color: rgba(56, 56, 56, 0.7);\r\n  color: #f5f5f5;\r\n  padding: 20px 40px;\r\n  margin-top: 40px;\r\n\r\n}\r\n\r\n.footer-container {\r\n  max-width: 1100px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between; \r\n  align-items: center;            \r\n  flex-wrap: wrap;              \r\n  gap: 20px;                    \r\n}\r\n\r\n.footer-title {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  color: #c49b63; \r\n}\r\n\r\n.footer-info p {\r\n  margin: 3px 0;\r\n  font-size: 0.95rem;\r\n  color: #ddd;\r\n}\r\n\r\n.footer-copy {\r\n  font-size: 0.8rem;\r\n  color: #aaa;\r\n}\r\n\r\n.about-container{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  \r\n\r\n}\r\n\r\n.text,\r\n.about-conclusion {\r\n  color: #fff; \r\n  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.about-title{\r\n  margin: 20px;\r\n}\r\n\r\n.about-subtitle{\r\n  margin:20px;\r\n}\r\n\r\n.about-list {\r\n  list-style: none; \r\n  padding: 0;\r\n  margin: 30px 0;\r\n  width: 80%;\r\n  max-width: 800px;\r\n}\r\n\r\n.about-list li {\r\n  background: rgba(56, 56, 56, 0.6); \r\n  color: #f5f5f5;\r\n  margin: 12px 0;\r\n  padding: 15px 20px;\r\n  border-left: 4px solid #c49b63;\r\n  border-radius: 6px;\r\n  font-size: 1.1rem;\r\n  font-weight: 300;\r\n  letter-spacing: 0.5px;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n\r\n.about-list li:hover {\r\n  transform: translateX(8px); \r\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);\r\n  background: rgba(56, 56, 56, 0.8);\r\n}\r\n\r\n.about-list li::before {\r\n  content: \"✦\"; \r\n  color: #c49b63;\r\n  font-weight: bold;\r\n  margin-right: 10px;\r\n}\r\n.about-conclusion {\r\n  max-width: 800px;\r\n  margin: 40px auto 20px auto;\r\n  font-size: 1.2rem;\r\n  font-weight: 300;\r\n  line-height: 1.8;\r\n  color: #ddd;\r\n  text-align: center;\r\n  font-style: italic;\r\n  border-top: 2px solid #c49b63;\r\n  padding-top: 20px;\r\n}\r\n\r\n.hero-box {\r\n  width: 90%;\r\n  max-width: 1200px;\r\n  margin: 60px auto;\r\n  padding: 40px 20px;\r\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(0,0,0,0.3) 0%,\r\n    rgba(0,0,0,0.1) 100%\r\n  ); /* voile subtil pour lisibilité */\r\n  border-radius: 12px;\r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.text {\r\n  font-size: 2rem;\r\n  font-weight: 200;\r\n  color: #fff;\r\n  margin: 40px 0 20px 0;\r\n  text-shadow: 1px 1px 4px rgba(0,0,0,0.6);\r\n}\r\n\r\n.grid-box {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\r\n  gap: 40px;\r\n  justify-items: center;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.box {\r\n  background: rgba(0, 0, 0, 0.6);\r\n  border-left: 4px solid #c49b63;\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n  color: white;\r\n  text-align: center;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;\r\n}\r\n\r\n.box:hover {\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);\r\n  background: rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.box img {\r\n  border-radius: 8px;\r\n  margin: 10px 0;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.box h3 {\r\n  color: #c49b63;\r\n  font-size: 1.5rem;\r\n  margin-bottom: 10px;\r\n  text-shadow: 1px 1px 4px rgba(0,0,0,0.5);\r\n}\r\n\r\n.box p {\r\n  font-size: 1rem;\r\n  margin: 5px 0;\r\n  line-height: 1.5;\r\n  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);\r\n}\r\n.menu {\r\n  font-size: 2.5rem;        \r\n  font-family: \"Georgia\", serif;\r\n  color: #8B0000;          \r\n  text-align: center;       \r\n  margin: 40px 0 20px 0;\r\n  letter-spacing: 1px;\r\n  border-bottom: 2px solid #c49b63; \r\n  display: inline-block;    \r\n  padding-bottom: 5px;\r\n  text-shadow: 1px 1px 4px rgba(0,0,0,0.5);\r\n}\r\n\r\n\r\n\r\n\r\n/* Responsive */\r\n\r\n@media (max-width: 1024px) {\r\n  header {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 15px;\r\n  }\r\n\r\n  #content h1 {\r\n    font-size: 2rem;\r\n    margin-left: 0;\r\n    text-align: center;\r\n  }\r\n\r\n  #content p {\r\n    width: 90%;\r\n    margin-left: 0;\r\n    font-size: 1rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .footer-container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n  }\r\n   .hero-text {\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n  .text {\r\n    font-size: 1.8rem;\r\n  }\r\n\r\n  .grid-box {\r\n    gap: 30px;\r\n  }\r\n\r\n  .box h3 {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .box p {\r\n    font-size: 0.95rem;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 600px) {\r\n  .hero-text {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .text {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .grid-box {\r\n    grid-template-columns: 1fr;\r\n    gap: 20px;\r\n  }\r\n\r\n  .box h3 {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .box p {\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  .hero-box {\r\n    padding: 30px 15px;\r\n  }\r\n\r\n  header {\r\n    padding: 10px;\r\n  }\r\n\r\n  button {\r\n    font-size: 1rem;\r\n    padding: 8px 16px;\r\n  }\r\n\r\n  #content {\r\n    padding: 20px 10px;\r\n  }\r\n\r\n  #content h1 {\r\n    font-size: 1.5rem;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  #content p {\r\n    font-size: 0.9rem;\r\n    line-height: 1.4;\r\n  }\r\n\r\n  .footer-container {\r\n    gap: 10px;\r\n  }\r\n  \r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_about_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/about.jpg */ \"./src/assets/about.jpg\");\n\r\n\r\nconst body = document.querySelector(\"body\");\r\nconst content = document.querySelector(\"#content\");\r\n\r\nconst about = () => {\r\n  if (!content) return;\r\n\r\n  body.style.backgroundImage = `url(${_assets_about_jpg__WEBPACK_IMPORTED_MODULE_0__})`;\r\n\r\n  content.innerHTML = `\r\n    <h1 class=\"about-title hero-text\">About Us</h1>\r\n\r\n    <div class=\"about-container\">\r\n\r\n    <p class=\"about-intro\">\r\n      The Nomad’s Table was born from a journey across the Mediterranean, and Europe. \r\n      Its founder, deeply passionate about the diversity of culinary traditions, dreamed of creating \r\n      a place where every dish tells a story and every flavor carries a memory.\r\n    </p>\r\n\r\n    <h2 class=\"about-subtitle hero-text\">Our Philosophy</h2>\r\n    <ul class=\"about-list\">\r\n      <li><strong>Authenticity:</strong> we carefully select seasonal, local ingredients, working hand-in-hand with farmers, fishermen, and artisans who share our respect for nature and quality.</li>\r\n      <li><strong>Journey:</strong> our menu is inspired by the spice routes and nomadic traditions, from Moroccan tagines to Mediterranean seafood.</li>\r\n      <li><strong>Hospitality:</strong> food is more than nourishment—it is connection. Our space is designed for sharing and friendship.</li>\r\n    </ul>\r\n\r\n    <p class=\"about-conclusion\">\r\n      Here, dining is not only about what you eat—it is about what you feel. \r\n      We invite you to slow down, to savor each bite, and to let your senses travel.\r\n    </p>\r\n    </div>\r\n  `;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ }),

/***/ "./src/assets/about.jpg":
/*!******************************!*\
  !*** ./src/assets/about.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"326420be49ebe568f443.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/about.jpg?\n}");

/***/ }),

/***/ "./src/assets/home.jpg":
/*!*****************************!*\
  !*** ./src/assets/home.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"a99467f36b64bcc67228.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/home.jpg?\n}");

/***/ }),

/***/ "./src/assets/menu-dessert-1.jpg":
/*!***************************************!*\
  !*** ./src/assets/menu-dessert-1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"69d680aa906726954828.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menu-dessert-1.jpg?\n}");

/***/ }),

/***/ "./src/assets/menu-dessert-2.jpg":
/*!***************************************!*\
  !*** ./src/assets/menu-dessert-2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"4c15cd6de8094a6a13c3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menu-dessert-2.jpg?\n}");

/***/ }),

/***/ "./src/assets/menu-dessert-3.jpg":
/*!***************************************!*\
  !*** ./src/assets/menu-dessert-3.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"8b6ca821fb4d77541ed4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menu-dessert-3.jpg?\n}");

/***/ }),

/***/ "./src/assets/menu-main-1.jpg":
/*!************************************!*\
  !*** ./src/assets/menu-main-1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"b8a787df5f9fcd2cbf76.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menu-main-1.jpg?\n}");

/***/ }),

/***/ "./src/assets/menu-main-2.jpg":
/*!************************************!*\
  !*** ./src/assets/menu-main-2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"c192d326491971fff1c0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menu-main-2.jpg?\n}");

/***/ }),

/***/ "./src/assets/menu-main-3.jpg":
/*!************************************!*\
  !*** ./src/assets/menu-main-3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"0e7ebb65d63f8feb4b77.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menu-main-3.jpg?\n}");

/***/ }),

/***/ "./src/assets/menu-starter-1.webp":
/*!****************************************!*\
  !*** ./src/assets/menu-starter-1.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"8e9dea2b17075b880560.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menu-starter-1.webp?\n}");

/***/ }),

/***/ "./src/assets/menu-starter-2.jpg":
/*!***************************************!*\
  !*** ./src/assets/menu-starter-2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"b563e4ef71edee898bc9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menu-starter-2.jpg?\n}");

/***/ }),

/***/ "./src/assets/menu-starter-3.jpg":
/*!***************************************!*\
  !*** ./src/assets/menu-starter-3.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"83456e82a9eb3088250e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menu-starter-3.jpg?\n}");

/***/ }),

/***/ "./src/assets/menu.jpg":
/*!*****************************!*\
  !*** ./src/assets/menu.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"527e75034e77ca8e597c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/menu.jpg?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_home_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/home.jpg */ \"./src/assets/home.jpg\");\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\nconst body = document.querySelector(\"body\"); \r\n\r\nconst home = ()=>{\r\n    if(!content) return;\r\n    body.style.backgroundImage=`url(${_assets_home_jpg__WEBPACK_IMPORTED_MODULE_0__})`;\r\n    content.innerHTML = `\r\n   \r\n        <h1 id=\"aa\" class=\"hero-text\">The Nomad’s Table</h1>\r\n        <p class=\"text\">\r\n          Welcome to The Nomad’s Table, where flavors travel beyond borders. \r\n          Step inside and embark on a culinary journey inspired by the caravans of the desert, \r\n          the markets of the Mediterranean, and the warmth of shared meals. \r\n          Whether you come for a quick bite, a refined dinner, or simply a moment of escape,\r\n           our table is always open to curious souls and passionate food lovers.\r\n        </p>\r\n      `\r\n\r\n\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet content = document.querySelector(\"#content\");\r\nconst homeBtn = document.querySelector(\"#home-btn\");\r\nconst menuBtn = document.querySelector(\"#menu-btn\");\r\nconst aboutBtn = document.querySelector(\"#about-btn\");\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nhomeBtn.addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nmenuBtn.addEventListener(\"click\",_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\naboutBtn.addEventListener(\"click\",_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_menu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menu.jpg */ \"./src/assets/menu.jpg\");\n/* harmony import */ var _assets_menu_starter_1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/menu-starter-1.webp */ \"./src/assets/menu-starter-1.webp\");\n/* harmony import */ var _assets_menu_starter_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/menu-starter-2.jpg */ \"./src/assets/menu-starter-2.jpg\");\n/* harmony import */ var _assets_menu_starter_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/menu-starter-3.jpg */ \"./src/assets/menu-starter-3.jpg\");\n/* harmony import */ var _assets_menu_main_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/menu-main-1.jpg */ \"./src/assets/menu-main-1.jpg\");\n/* harmony import */ var _assets_menu_main_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/menu-main-2.jpg */ \"./src/assets/menu-main-2.jpg\");\n/* harmony import */ var _assets_menu_main_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/menu-main-3.jpg */ \"./src/assets/menu-main-3.jpg\");\n/* harmony import */ var _assets_menu_dessert_1_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/menu-dessert-1.jpg */ \"./src/assets/menu-dessert-1.jpg\");\n/* harmony import */ var _assets_menu_dessert_2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/menu-dessert-2.jpg */ \"./src/assets/menu-dessert-2.jpg\");\n/* harmony import */ var _assets_menu_dessert_3_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/menu-dessert-3.jpg */ \"./src/assets/menu-dessert-3.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n const body = document.querySelector(\"body\");\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\nconst menu = ()=>{\r\n    if(!content) return;\r\n    body.style.backgroundImage=`url(${_assets_menu_jpg__WEBPACK_IMPORTED_MODULE_0__})`;\r\n    content.innerHTML = ` <div class=\"hero-box\">\r\n  <h1 class=\"hero-text\">Menu</h1>\r\n\r\n\r\n  <h3 class=\"menu\">Starters</h3>\r\n  <div class=\"grid-box\">\r\n    <div class=\"box\">\r\n      <h3>Pumpkin velouté with roasted hazelnuts</h3>\r\n      <img src=\"${_assets_menu_starter_1_webp__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Pumpkin Velouté\" width=\"300\" height=\"200\">\r\n    </div>\r\n    <div class=\"box\">\r\n      <h3>Sea bream carpaccio with lime zest</h3>\r\n      <img src=\"${_assets_menu_starter_2_jpg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Sea Bream Carpaccio\" width=\"300\" height=\"200\">\r\n    </div>\r\n    <div class=\"box\">\r\n      <h3>Nomad Salad (arugula, dates, fresh goat cheese)</h3>\r\n      <img src=\"${_assets_menu_starter_3_jpg__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Nomad Salad\" width=\"300\" height=\"200\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <h3 class=\"menu\">Main Courses</h3>\r\n  <div class=\"grid-box\">\r\n    <div class=\"box\">\r\n      <h3>Lamb tagine with apricots & almonds (served with aromatic couscous)</h3>\r\n      <img src=\"${_assets_menu_main_1_jpg__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"Lamb Tagine\" width=\"300\" height=\"200\">\r\n    </div>\r\n    <div class=\"box\">\r\n      <h3>Roasted sea bass fillet, sweet potato purée & saffron sauce</h3>\r\n      <img src=\"${_assets_menu_main_2_jpg__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"Sea Bass Fillet\" width=\"300\" height=\"200\">\r\n    </div>\r\n    <div class=\"box\">\r\n      <h3>Homemade fresh pasta with pistachio pesto & creamy burrata</h3>\r\n      <img src=\"${_assets_menu_main_3_jpg__WEBPACK_IMPORTED_MODULE_6__}\" alt=\"Fresh Pasta\" width=\"300\" height=\"200\">\r\n    </div>\r\n  </div>\r\n\r\n  <h3 class=\"menu\">Desserts</h3>\r\n  <div class=\"grid-box\">\r\n    <div class=\"box\">\r\n      <h3>Chocolate fondant with cardamom heart</h3>\r\n      <img src=\"${_assets_menu_dessert_1_jpg__WEBPACK_IMPORTED_MODULE_7__}\" alt=\"Chocolate Fondant\" width=\"300\" height=\"200\">\r\n    </div>\r\n    <div class=\"box\">\r\n      <h3>Fig tart with light lavender cream</h3>\r\n      <img src=\"${_assets_menu_dessert_2_jpg__WEBPACK_IMPORTED_MODULE_8__}\" alt=\"Fig Tart\" width=\"300\" height=\"200\">\r\n    </div>\r\n    <div class=\"box\">\r\n      <h3>Homemade ice cream – date & orange blossom flavor</h3>\r\n      <img src=\"${_assets_menu_dessert_3_jpg__WEBPACK_IMPORTED_MODULE_9__}\" alt=\"Ice Cream\" width=\"300\" height=\"200\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n`\r\n}\r\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;