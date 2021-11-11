/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#human-content {\n  float: left;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: blue;\n}\n#human-content .square {\n  border-style: solid;\n}\n#human-content .ship-square {\n  background-color: grey;\n}\n#human-content .damaged-ship-square {\n  background-color: red;\n}\n#human-content .missed-square {\n  background-color: black;\n}\n#human-content .builtSquare {\n  background-color: whitesmoke;\n}\n#human-content .partial-ship {\n  background-color: whitesmoke;\n}\n\n#computer-content {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: cornflowerblue;\n  float: right;\n}\n#computer-content .square {\n  border-style: solid;\n}\n#computer-content .ship-square {\n  background-color: grey;\n}\n#computer-content .damaged-ship-square {\n  background-color: red;\n}\n#computer-content .missed-square {\n  background-color: black;\n}\n\n.hidden {\n  display: none;\n}\n\n#human-content.displayed {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: blue;\n}\n\n#computer-content.displayed {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: cornflowerblue;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EAEE,WAAA;EAEA,aAAA;EACA,mCAAA;EACA,sCAAA;EACA,aAAA;EACA,YAAA;EACA,sBAAA;AALF;AAQE;EACE,mBAAA;AANJ;AASE;EACE,sBAAA;AAPJ;AAUE;EACE,qBAAA;AARJ;AAWE;EACE,uBAAA;AATJ;AAYE;EACE,4BAAA;AAVJ;AAaE;EACE,4BAAA;AAXJ;;AAgBA;EAEE,aAAA;EACA,mCAAA;EACA,sCAAA;EACA,aAAA;EACA,YAAA;EACA,gCAAA;EAGA,YAAA;AAhBF;AAkBE;EACE,mBAAA;AAhBJ;AAmBE;EACE,sBAAA;AAjBJ;AAoBE;EACE,qBAAA;AAlBJ;AAqBE;EACE,uBAAA;AAnBJ;;AAwBA;EACE,aAAA;AArBF;;AAwBA;EACE,aAAA;EACA,mCAAA;EACA,sCAAA;EACA,aAAA;EACA,YAAA;EACA,sBAAA;AArBF;;AAyBA;EACE,aAAA;EACA,mCAAA;EACA,sCAAA;EACA,aAAA;EACA,YAAA;EACA,gCAAA;AAtBF","sourcesContent":["#content {\n  // display: flex;\n}\n\n#human-content {\n\n  float: left;\n\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: blue;\n\n\n  .square {\n    border-style: solid;\n  }\n\n  .ship-square {\n    background-color: grey;\n  }\n\n  .damaged-ship-square {\n    background-color: red;\n  }\n\n  .missed-square {\n    background-color: black;\n  }\n\n  .builtSquare {\n    background-color: whitesmoke;\n  }\n\n  .partial-ship {\n    background-color: whitesmoke;\n  }\n\n}\n\n#computer-content {\n\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: cornflowerblue;\n\n\n  float: right;\n  \n  .square {\n    border-style: solid;\n  }\n\n  .ship-square {\n    background-color: grey;\n  }\n\n  .damaged-ship-square {\n    background-color: red;\n  }\n\n  .missed-square {\n    background-color: black;\n  }\n\n}\n\n.hidden {\n  display: none;\n}\n\n#human-content.displayed {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: blue;\n\n}\n\n#computer-content.displayed {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: cornflowerblue;\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domStuff.js":
/*!*************************!*\
  !*** ./src/domStuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domThing": () => (/* binding */ domThing),
/* harmony export */   "createGrid": () => (/* binding */ createGrid),
/* harmony export */   "displayShip": () => (/* binding */ displayShip),
/* harmony export */   "displayHit": () => (/* binding */ displayHits),
/* harmony export */   "squareCick": () => (/* binding */ squareCick),
/* harmony export */   "displayHumanBoard": () => (/* binding */ displayHumanBoard),
/* harmony export */   "hideHumanBoard": () => (/* binding */ hideHumanBoard),
/* harmony export */   "removeGrid": () => (/* binding */ removeGrid),
/* harmony export */   "createShipBuildingGrid": () => (/* binding */ createShipBuildingGrid)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");






function domThing() {
    console.log('I am a dom function')
}















function squareCick(clickedSquare) {

    let targetValid = _index__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard.receiveAttack(clickedSquare.target.id)

    // for (var i = 0; i < computerGameBoard.shipArray.length; i++) {
    //     displayHits(computerGameBoard.shipArray[i])
    // }

    _index__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard.checkForLoss()


    if (targetValid) {
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.render)()
        computerTakesTurn()
    }
}

async function computerTakesTurn() {
    // hideHumanBoard()
    console.log('computer is thinking')
    await pause(1000)
    let poorChoice = true
    let hitCoordinates = '';
    let counter = 0;

    while (poorChoice && counter < 100) {
        let hitX = Math.floor(Math.random() * 10) + 1;
        let hitY = Math.floor(Math.random() * 10) + 1;
        hitCoordinates = [hitX, hitY] + 'h';

        if (_index__WEBPACK_IMPORTED_MODULE_0__.humanGameBoard.checkForPastMisses(hitCoordinates) == false && _index__WEBPACK_IMPORTED_MODULE_0__.humanGameBoard.checkForPastHits(hitCoordinates) == false) {
            poorChoice = false;
        }



        counter++
    }

    _index__WEBPACK_IMPORTED_MODULE_0__.humanGameBoard.receiveAttack(hitCoordinates)

    ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.render)()

}

function pause(id) {
    return new Promise(resolve => setTimeout(() => {
        // console.log(`pause is over`);
        resolve();
    }, id));
}



function renderPartialBuild() {

    removeGrid()
    createShipBuildingGrid()

}

let partialShip = [];

function squareBuildShip(clickedSquare) {
    let builtSquareId = clickedSquare.target.id;
    console.log('builtSquare: ' + builtSquareId)
    let buildShipId = builtSquareId.slice(0, builtSquareId.length - 1)
    console.log('buildShipId: ' + buildShipId)
    // let squareDiv = document.getElementById(builtSquareId)
    partialShip.push(buildShipId);

    let partialSquare = document.getElementById(builtSquareId)
    partialSquare.classList.add('partial-ship')





}


function saveShip() {
    console.log('partialShip[0]: ' + partialShip[0])
    console.log('partialShip[1]: ' + partialShip[1])
    let nameInputElement = document.getElementById('name-input')
    let shipName = nameInputElement.value

    const humanShip = _index__WEBPACK_IMPORTED_MODULE_0__.humanGameBoard.placeShip(shipName, partialShip[0], partialShip[1]);
    console.log(humanShip)
    partialShip = [];
    removeGrid()
    createShipBuildingGrid()
    _index__WEBPACK_IMPORTED_MODULE_0__.humanGameBoard.shipArray.forEach(displayShip)

}

function saveAllShips() {

}




function createShipBuildingGrid() {
    let contentDiv = document.getElementById('content');
    let humanDiv = document.createElement('div');
    humanDiv.id = 'human-content';
    contentDiv.appendChild(humanDiv);


    for (var i = 10; i > 0; i--) {
        for (var j = 1; j < 11; j++) {
            let squareDiv = document.createElement('div')
            squareDiv.id = j + ',' + i + 'h'
            squareDiv.classList.add('square')
            squareDiv.addEventListener('click', squareBuildShip);
            humanDiv.appendChild(squareDiv)
        }
    }

    let btn = document.createElement('button');
    btn.addEventListener('click', saveShip)
    let nameInput = document.createElement('input')
    nameInput.id = 'name-input'
    let btn2 = document.createElement('button');
    btn2.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_0__.render)

    // let contentDiv = document.getElementById('content')
    contentDiv.appendChild(btn)
    contentDiv.appendChild(nameInput)
    contentDiv.appendChild(btn2)


    // humanGameBoard.shipArray.forEach(displayShip)





}













function createGrid() {
    let contentDiv = document.getElementById('content');
    let humanDiv = document.createElement('div');
    humanDiv.id = 'human-content';
    contentDiv.appendChild(humanDiv);
    let computerDiv = document.createElement('div');
    computerDiv.id = 'computer-content';
    contentDiv.appendChild(computerDiv);

    for (var i = 10; i > 0; i--) {
        for (var j = 1; j < 11; j++) {
            let squareDiv = document.createElement('div')
            squareDiv.id = j + ',' + i + 'h'
            squareDiv.classList.add('square')
            squareDiv.classList.add('human')
            squareDiv.addEventListener('click', squareCick);
            humanDiv.appendChild(squareDiv)
        }
    }

    for (var i = 10; i > 0; i--) {
        for (var j = 1; j < 11; j++) {
            let squareDiv = document.createElement('div')
            squareDiv.id = j + ',' + i + 'c'
            squareDiv.classList.add('square')
            squareDiv.classList.add('computer')
            squareDiv.addEventListener('click', squareCick);
            computerDiv.appendChild(squareDiv)
        }
    }

    _index__WEBPACK_IMPORTED_MODULE_0__.humanGameBoard.shipArray.forEach(displayShip)

    _index__WEBPACK_IMPORTED_MODULE_0__.humanGameBoard.shipArray.forEach(displayHits)

    displayMisses(_index__WEBPACK_IMPORTED_MODULE_0__.humanGameBoard)


    // computerGameBoard.shipArray.forEach(displayShip)

    _index__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard.shipArray.forEach(displayHits)

    displayMisses(_index__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard)

}









function removeGrid() {
    parent = document.getElementById('content')
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}



















function displayMisses(thisGameBoard) {

    let shipSquareIdSuffix = ''

    if (thisGameBoard.owner == 'COMPUTER') {
        shipSquareIdSuffix = 'c'
    } else {
        shipSquareIdSuffix = 'h'
    }

    for (var i = 0; i < thisGameBoard.misses.length; i++) {

        let shipSquare = document.getElementById(thisGameBoard.misses[i]);
        shipSquare.classList.add('missed-square')
    }

}

function displayShip(shipToDisplay) {
    let shipSquareIdSuffix = ''

    if (shipToDisplay.owner == 'COMPUTER') {
        shipSquareIdSuffix = 'c'
    } else {
        shipSquareIdSuffix = 'h'
    }

    // console.log('shipSquareIdSuffix: ' + shipSquareIdSuffix)


    for (var i = 0; i < shipToDisplay.coordinates.length; i++) {
        console.log('shipToDisplay.coordinates: ' + shipToDisplay.coordinates[i])


        let shipSquare = document.getElementById(shipToDisplay.coordinates[i] + shipSquareIdSuffix);
        if (!shipSquare) {
            let shipSquare = document.getElementById(shipToDisplay.coordinates[i]);
        }
        // shipSquare = document.getElementById(shipToDisplay.coordinates[i]);
        shipSquare.classList.add('ship-square')
    }

}


function displayHits(shipToDisplay) {
    // console.log('shipToDisplay.damage: ' + shipToDisplay.coordinates[1])
    let shipSquareIdSuffix = ''

    if (shipToDisplay.owner == 'COMPUTER') {
        shipSquareIdSuffix = 'c'
    } else {
        shipSquareIdSuffix = 'h'
    }

    console.log('shipToDisplay.damage: ' + shipToDisplay.damage[0])
    for (var i = 0; i < shipToDisplay.damage.length; i++) {
        console.log('shipToDisplay.damage[i]: ' + shipToDisplay.damage[i])

        let shipSquare = document.getElementById(shipToDisplay.damage[i]);
        shipSquare.classList.add('damaged-ship-square')
    }
}

function displayHumanBoard() {
    let board = document.getElementById('human-content');
    board.classList.add('displayed')
    board.classList.remove('hidden')

    board = document.getElementById('computer-content');
    board.classList.add('hidden')
    board.classList.remove('displayed')
}

function hideHumanBoard() {
    // console.log('hideHumanboard called')

    let board = document.getElementById('human-content');
    board.classList.add('hidden')
    board.classList.remove('displayed')
    board = document.getElementById('computer-content');
    board.classList.add('displayed')
    board.classList.remove('hidden')
}



/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGameBoard": () => (/* binding */ createGameBoard),
/* harmony export */   "createPlayer": () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");





function createPlayer(name) {
    // console.log('createPlayer called')
    return {
        name: name
    }
};


function createGameBoard(name) {
    let shipArray = [];
    let misses = [];
    let hits = [];



    function placeShip(name, stern, bow) {
        let owner = this.owner;
        const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(name, stern, bow, owner);
        shipArray.push(newShip)
        return newShip

    }


    function receiveAttack(hitCoordinates) {
        // console.log('receiveAttack this: ' + this)
        let board = this;
        // let pastMiss = checkForPastMisses(board, hitCoordinates)
        // let pastHit = checkForPastHits(board, hitCoordinates)
        let hitResult = 'not hit'

        let pastMiss = this.checkForPastMisses(hitCoordinates)
        let pastHit = this.checkForPastHits(hitCoordinates)
        let wrongBoard = this.checkForWrongBoard(hitCoordinates)
        // console.log('pastMiss: ' + pastMiss)

        // console.log('pastHit: ' + pastHit)

        // console.log('hitCoordinates: ' + hitCoordinates)



        if (pastHit || pastMiss || wrongBoard) {
            console.log('invalid torpedo target')
            hitResult = false
        } else {

            console.log(this.owner + ' is being attacked at ' + hitCoordinates)



            // iterating through ship array 
            for (var i = 0; i < shipArray.length; i++) {


                let coordinatesSuffix = ''

                if (this.owner == 'COMPUTER') {
                    coordinatesSuffix = 'c'
                } else {
                    coordinatesSuffix = 'h'
                }
                let shipCoordinates = shipArray[i].coordinates;
                // console.log('shipCoordinates: ' + shipCoordinates)
                // console.log('hitCoordinates: ' + hitCoordinates)


                // iterating through ship coordinates 
                for (var j = 0; j < shipCoordinates.length; j++) {

                    let shipCoordinatesComplete = shipCoordinates[j] + coordinatesSuffix
                    // console.log('shipCoordinatesComplete: ' + shipCoordinatesComplete)

                    if (shipCoordinatesComplete.toString() == hitCoordinates.toString()) {

                        hitResult = 'hit';
                        shipArray[i].hit(hitCoordinates);
                        hits.push(hitCoordinates);
                    }
                }
            }

            if (hitResult == 'not hit') {
                misses.push(hitCoordinates)
            }

        }

        return hitResult
    };

    function checkForWrongBoard(theseHitCoordinates) {

        let arr = theseHitCoordinates.toString().split('');
        let hitBoardSuffix = theseHitCoordinates.slice(-1);
        let shipSquareIdSuffix = ''

        console.log("hitBoardSuffix: " + hitBoardSuffix)

        if (this.owner == 'COMPUTER') {
            shipSquareIdSuffix = 'c'
        } else {
            shipSquareIdSuffix = 'h'
        }



        if (hitBoardSuffix == shipSquareIdSuffix) {
            return false;
        } else {
            console.log('Friendly fire!!!')
            return true;
        };
    }

    function checkForPastMisses(theseHitCoordinates) {
        // console.log('checking for past misses')
        // console.log('this.owner: ' + this.owner)
        // console.log('this.misses: ' + this.misses)
        // console.log('theseHitCoordinates: ' + theseHitCoordinates)


        if (this.misses.toString().includes(theseHitCoordinates.toString())) {
            return true;
        } else {
            return false;
        };
    };

    function checkForPastHits(theseHitCoordinates) {
        // console.log('checking for past Hits')
        // console.log('this.owner: ' + this.owner)
        // console.log('this.hits: ' + this.hits)
        // console.log('theseHitCoordinates: ' + theseHitCoordinates)



        if (this.hits.toString().includes(theseHitCoordinates.toString())) {
            return true;
        } else {
            return false;
        };
    };


    function checkForLoss(name, stern, bow) {
        let sunkShips = 0;
        for (var i = 0; i < shipArray.length; i++) {
            if (shipArray[i].loa == shipArray[i].damage.length) {
                sunkShips++
            }
        }
        // console.log('sunkShips: ' + sunkShips)

        if (sunkShips == shipArray.length) {
            console.log('all is lost')

        }
    }

    const existence = 'exists';
    const owner = name;
    // const turn =  true;


    return {
        receiveAttack,
        placeShip,
        checkForLoss,
        checkForPastMisses,
        checkForPastHits,
        checkForWrongBoard,
        shipArray,
        existence,
        // turn,
        owner,
        misses,
        hits
    };


};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "humanGameBoard": () => (/* binding */ humanGameBoard),
/* harmony export */   "computerGameBoard": () => (/* binding */ computerGameBoard),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



let activeGameBoard = {};
let humanGameBoard = {};
let computerGameBoard = {};


function playerSetup() {
    const newPlayer = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.createPlayer)('Tilly');
    humanGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.createGameBoard)(newPlayer.name);

    // render ship building grid
    (0,_domStuff__WEBPACK_IMPORTED_MODULE_1__.createShipBuildingGrid)()
    // const humanShip1 = humanGameBoard.placeShip('HMS Cucumber', [1, 1], [1, 3]);
    // const humanShip2 = humanGameBoard.placeShip('HMS Potato', [4, 4], [7, 4]);

}



function AISetup() {
    const newPlayer = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.createPlayer)('COMPUTER');
    computerGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.createGameBoard)(newPlayer.name);
    const computerShip1 = computerGameBoard.placeShip('HMS Transistor', '1,1', '1,4');
    const computerShip12 = computerGameBoard.placeShip('HMS Electron', '4,2', '7,2');
}

function gameStart() {

    // request player setup
    AISetup()
    playerSetup()

    // // AI setup

    // // board setup
    // render()
}


function render() {
    (0,_domStuff__WEBPACK_IMPORTED_MODULE_1__.removeGrid)()
    ;(0,_domStuff__WEBPACK_IMPORTED_MODULE_1__.createGrid)()



}

gameStart()


// activeGameBoard = humanGameBoard;






/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShip": () => (/* binding */ createShip)
/* harmony export */ });


function createShip(name, stern, bow, owner) {
    console.log('ship.js factory function works')


console.log('stern.split(',')[0]: ' + stern.split(',')[0])
    let shipX1 = Number(stern.split(',')[0]);
    let shipX2 = Number(bow.split(',')[0]);

    let shipY1 = Number(stern.split(',')[1]);
    let shipY2 = Number(bow.split(',')[1]);
    let tempValue = 0

    if (shipX1 > shipX2) {
        tempValue = shipX2
        shipX2 = shipX1;
        shipX1 = tempValue
    }

    if (shipY1 > shipY2) {
        tempValue = shipY2
        shipY2 = shipY1;
        shipY1 = tempValue
    }

    console.log('shipX1: ' + shipX1)
    console.log('shipX2: ' + shipX2)
    console.log('shipY1: ' + shipY1)
    console.log('shipY2: ' + shipY2)

    let loa = 0;

    let coordinates = []
  

    if (shipX1 == shipX2) {
        console.log('vertical ship')
        // vertical ship
        loa = shipY2 - shipY1 + 1
        for (var i = 0; i < loa; i++) {


            coordinates[i] = [shipX1, shipY1 + i]
            // console.log('coordinates')
            // console.log(i)
            // console.log(coordinates[i])
        }
        // console.log('coordinates')
        // console.log(coordinates)
    } else {
        // horizontal ship
        console.log('horizontal ship')

        loa = shipX2 - shipX1 + 1
        for (var i = 0; i < loa; i++) {
            coordinates[i] = [shipX1 + i, shipY1]
            // coordinates[i] = 'boobs'

            // console.log('coordinates')
            // console.log(i)
            // console.log(coordinates[i])
        }
        // console.log('coordinates')
        // console.log(coordinates)

    }

// console.log(coordinates)

    let damage = [];
    let sunk = false

    function hit(location) {
        console.log(this.name + ' getting hit')
        this.damage.push(location);

        this.damage.sort(function (a, b) {
            if (a < b)
                return -1;
            return 1;
        });
        console.log(this.name + ' damage ' + this.damage)

        return this.damage
    };

    function isSunk() {
        // console.log('ship.js damage')
        // console.log(this.damage.length)
        // console.log('ship.js loa')
        // console.log(this.loa)

        if (this.damage.length == this.loa) {
            return true;
        } else {
            return false;
        }
    }

    console.log('stern: ' + stern)

    console.log('bow: ' + bow)

    return {
        name,
        loa,
        damage,
        coordinates,
        owner,
        hit,
        isSunk
    };


};



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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25wbXBhY2thZ2UvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlLy4vc3JjL2RvbVN0dWZmLmpzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL25wbXBhY2thZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25wbXBhY2thZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNodW1hbi1jb250ZW50IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuI2h1bWFuLWNvbnRlbnQgLnNxdWFyZSB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG4jaHVtYW4tY29udGVudCAuc2hpcC1zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuI2h1bWFuLWNvbnRlbnQgLmRhbWFnZWQtc2hpcC1zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4jaHVtYW4tY29udGVudCAubWlzc2VkLXNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuI2h1bWFuLWNvbnRlbnQgLmJ1aWx0U3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcbiNodW1hbi1jb250ZW50IC5wYXJ0aWFsLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI2NvbXB1dGVyLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbiNjb21wdXRlci1jb250ZW50IC5zcXVhcmUge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuI2NvbXB1dGVyLWNvbnRlbnQgLnNoaXAtc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcbiNjb21wdXRlci1jb250ZW50IC5kYW1hZ2VkLXNoaXAtc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuI2NvbXB1dGVyLWNvbnRlbnQgLm1pc3NlZC1zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2h1bWFuLWNvbnRlbnQuZGlzcGxheWVkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbiNjb21wdXRlci1jb250ZW50LmRpc3BsYXllZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFFRSxXQUFBO0VBRUEsYUFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBTEY7QUFRRTtFQUNFLG1CQUFBO0FBTko7QUFTRTtFQUNFLHNCQUFBO0FBUEo7QUFVRTtFQUNFLHFCQUFBO0FBUko7QUFXRTtFQUNFLHVCQUFBO0FBVEo7QUFZRTtFQUNFLDRCQUFBO0FBVko7QUFhRTtFQUNFLDRCQUFBO0FBWEo7O0FBZ0JBO0VBRUUsYUFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBR0EsWUFBQTtBQWhCRjtBQWtCRTtFQUNFLG1CQUFBO0FBaEJKO0FBbUJFO0VBQ0Usc0JBQUE7QUFqQko7QUFvQkU7RUFDRSxxQkFBQTtBQWxCSjtBQXFCRTtFQUNFLHVCQUFBO0FBbkJKOztBQXdCQTtFQUNFLGFBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsYUFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBckJGOztBQXlCQTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQXRCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGVudCB7XFxuICAvLyBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jaHVtYW4tY29udGVudCB7XFxuXFxuICBmbG9hdDogbGVmdDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuXFxuXFxuICAuc3F1YXJlIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIH1cXG5cXG4gIC5zaGlwLXNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICB9XFxuXFxuICAuZGFtYWdlZC1zaGlwLXNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIH1cXG5cXG4gIC5taXNzZWQtc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB9XFxuXFxuICAuYnVpbHRTcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgfVxcblxcbiAgLnBhcnRpYWwtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICB9XFxuXFxufVxcblxcbiNjb21wdXRlci1jb250ZW50IHtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcblxcblxcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgXFxuICAuc3F1YXJlIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIH1cXG5cXG4gIC5zaGlwLXNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICB9XFxuXFxuICAuZGFtYWdlZC1zaGlwLXNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIH1cXG5cXG4gIC5taXNzZWQtc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB9XFxuXFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2h1bWFuLWNvbnRlbnQuZGlzcGxheWVkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuXFxufVxcblxcbiNjb21wdXRlci1jb250ZW50LmRpc3BsYXllZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmltcG9ydCB7IHNxdWFyZUNsaWNrSW5kZXgsIGh1bWFuR2FtZUJvYXJkLCBjb21wdXRlckdhbWVCb2FyZCwgcmVuZGVyIH0gZnJvbSAnLi9pbmRleCdcblxuaW1wb3J0IHsgY2hlY2tGb3JQYXN0TWlzc2VzLCBjaGVja0ZvclBhc3RIaXRzLCBwbGFjZVNoaXAgfSBmcm9tICcuL2dhbWVCb2FyZCdcblxuXG5mdW5jdGlvbiBkb21UaGluZygpIHtcbiAgICBjb25zb2xlLmxvZygnSSBhbSBhIGRvbSBmdW5jdGlvbicpXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBzcXVhcmVDaWNrKGNsaWNrZWRTcXVhcmUpIHtcblxuICAgIGxldCB0YXJnZXRWYWxpZCA9IGNvbXB1dGVyR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY2xpY2tlZFNxdWFyZS50YXJnZXQuaWQpXG5cbiAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXB1dGVyR2FtZUJvYXJkLnNoaXBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICBkaXNwbGF5SGl0cyhjb21wdXRlckdhbWVCb2FyZC5zaGlwQXJyYXlbaV0pXG4gICAgLy8gfVxuXG4gICAgY29tcHV0ZXJHYW1lQm9hcmQuY2hlY2tGb3JMb3NzKClcblxuXG4gICAgaWYgKHRhcmdldFZhbGlkKSB7XG4gICAgICAgIHJlbmRlcigpXG4gICAgICAgIGNvbXB1dGVyVGFrZXNUdXJuKClcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbXB1dGVyVGFrZXNUdXJuKCkge1xuICAgIC8vIGhpZGVIdW1hbkJvYXJkKClcbiAgICBjb25zb2xlLmxvZygnY29tcHV0ZXIgaXMgdGhpbmtpbmcnKVxuICAgIGF3YWl0IHBhdXNlKDEwMDApXG4gICAgbGV0IHBvb3JDaG9pY2UgPSB0cnVlXG4gICAgbGV0IGhpdENvb3JkaW5hdGVzID0gJyc7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gICAgd2hpbGUgKHBvb3JDaG9pY2UgJiYgY291bnRlciA8IDEwMCkge1xuICAgICAgICBsZXQgaGl0WCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICAgIGxldCBoaXRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgICAgaGl0Q29vcmRpbmF0ZXMgPSBbaGl0WCwgaGl0WV0gKyAnaCc7XG5cbiAgICAgICAgaWYgKGh1bWFuR2FtZUJvYXJkLmNoZWNrRm9yUGFzdE1pc3NlcyhoaXRDb29yZGluYXRlcykgPT0gZmFsc2UgJiYgaHVtYW5HYW1lQm9hcmQuY2hlY2tGb3JQYXN0SGl0cyhoaXRDb29yZGluYXRlcykgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHBvb3JDaG9pY2UgPSBmYWxzZTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBjb3VudGVyKytcbiAgICB9XG5cbiAgICBodW1hbkdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGhpdENvb3JkaW5hdGVzKVxuXG4gICAgcmVuZGVyKClcblxufVxuXG5mdW5jdGlvbiBwYXVzZShpZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgcGF1c2UgaXMgb3ZlcmApO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgfSwgaWQpKTtcbn1cblxuXG5cbmZ1bmN0aW9uIHJlbmRlclBhcnRpYWxCdWlsZCgpIHtcblxuICAgIHJlbW92ZUdyaWQoKVxuICAgIGNyZWF0ZVNoaXBCdWlsZGluZ0dyaWQoKVxuXG59XG5cbmxldCBwYXJ0aWFsU2hpcCA9IFtdO1xuXG5mdW5jdGlvbiBzcXVhcmVCdWlsZFNoaXAoY2xpY2tlZFNxdWFyZSkge1xuICAgIGxldCBidWlsdFNxdWFyZUlkID0gY2xpY2tlZFNxdWFyZS50YXJnZXQuaWQ7XG4gICAgY29uc29sZS5sb2coJ2J1aWx0U3F1YXJlOiAnICsgYnVpbHRTcXVhcmVJZClcbiAgICBsZXQgYnVpbGRTaGlwSWQgPSBidWlsdFNxdWFyZUlkLnNsaWNlKDAsIGJ1aWx0U3F1YXJlSWQubGVuZ3RoIC0gMSlcbiAgICBjb25zb2xlLmxvZygnYnVpbGRTaGlwSWQ6ICcgKyBidWlsZFNoaXBJZClcbiAgICAvLyBsZXQgc3F1YXJlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnVpbHRTcXVhcmVJZClcbiAgICBwYXJ0aWFsU2hpcC5wdXNoKGJ1aWxkU2hpcElkKTtcblxuICAgIGxldCBwYXJ0aWFsU3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnVpbHRTcXVhcmVJZClcbiAgICBwYXJ0aWFsU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BhcnRpYWwtc2hpcCcpXG5cblxuXG5cblxufVxuXG5cbmZ1bmN0aW9uIHNhdmVTaGlwKCkge1xuICAgIGNvbnNvbGUubG9nKCdwYXJ0aWFsU2hpcFswXTogJyArIHBhcnRpYWxTaGlwWzBdKVxuICAgIGNvbnNvbGUubG9nKCdwYXJ0aWFsU2hpcFsxXTogJyArIHBhcnRpYWxTaGlwWzFdKVxuICAgIGxldCBuYW1lSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtaW5wdXQnKVxuICAgIGxldCBzaGlwTmFtZSA9IG5hbWVJbnB1dEVsZW1lbnQudmFsdWVcblxuICAgIGNvbnN0IGh1bWFuU2hpcCA9IGh1bWFuR2FtZUJvYXJkLnBsYWNlU2hpcChzaGlwTmFtZSwgcGFydGlhbFNoaXBbMF0sIHBhcnRpYWxTaGlwWzFdKTtcbiAgICBjb25zb2xlLmxvZyhodW1hblNoaXApXG4gICAgcGFydGlhbFNoaXAgPSBbXTtcbiAgICByZW1vdmVHcmlkKClcbiAgICBjcmVhdGVTaGlwQnVpbGRpbmdHcmlkKClcbiAgICBodW1hbkdhbWVCb2FyZC5zaGlwQXJyYXkuZm9yRWFjaChkaXNwbGF5U2hpcClcblxufVxuXG5mdW5jdGlvbiBzYXZlQWxsU2hpcHMoKSB7XG5cbn1cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlU2hpcEJ1aWxkaW5nR3JpZCgpIHtcbiAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgbGV0IGh1bWFuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaHVtYW5EaXYuaWQgPSAnaHVtYW4tY29udGVudCc7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChodW1hbkRpdik7XG5cblxuICAgIGZvciAodmFyIGkgPSAxMDsgaSA+IDA7IGktLSkge1xuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IDExOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBzcXVhcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgc3F1YXJlRGl2LmlkID0gaiArICcsJyArIGkgKyAnaCdcbiAgICAgICAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKVxuICAgICAgICAgICAgc3F1YXJlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3F1YXJlQnVpbGRTaGlwKTtcbiAgICAgICAgICAgIGh1bWFuRGl2LmFwcGVuZENoaWxkKHNxdWFyZURpdilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlU2hpcClcbiAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0J1xuICAgIGxldCBidG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlcilcblxuICAgIC8vIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYnRuKVxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KVxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYnRuMilcblxuXG4gICAgLy8gaHVtYW5HYW1lQm9hcmQuc2hpcEFycmF5LmZvckVhY2goZGlzcGxheVNoaXApXG5cblxuXG5cblxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkKCkge1xuICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBsZXQgaHVtYW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBodW1hbkRpdi5pZCA9ICdodW1hbi1jb250ZW50JztcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGh1bWFuRGl2KTtcbiAgICBsZXQgY29tcHV0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wdXRlckRpdi5pZCA9ICdjb21wdXRlci1jb250ZW50JztcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbXB1dGVyRGl2KTtcblxuICAgIGZvciAodmFyIGkgPSAxMDsgaSA+IDA7IGktLSkge1xuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IDExOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBzcXVhcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgc3F1YXJlRGl2LmlkID0gaiArICcsJyArIGkgKyAnaCdcbiAgICAgICAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKVxuICAgICAgICAgICAgc3F1YXJlRGl2LmNsYXNzTGlzdC5hZGQoJ2h1bWFuJylcbiAgICAgICAgICAgIHNxdWFyZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNxdWFyZUNpY2spO1xuICAgICAgICAgICAgaHVtYW5EaXYuYXBwZW5kQ2hpbGQoc3F1YXJlRGl2KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDEwOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICAgICAgbGV0IHNxdWFyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBzcXVhcmVEaXYuaWQgPSBqICsgJywnICsgaSArICdjJ1xuICAgICAgICAgICAgc3F1YXJlRGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpXG4gICAgICAgICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXInKVxuICAgICAgICAgICAgc3F1YXJlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3F1YXJlQ2ljayk7XG4gICAgICAgICAgICBjb21wdXRlckRpdi5hcHBlbmRDaGlsZChzcXVhcmVEaXYpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBodW1hbkdhbWVCb2FyZC5zaGlwQXJyYXkuZm9yRWFjaChkaXNwbGF5U2hpcClcblxuICAgIGh1bWFuR2FtZUJvYXJkLnNoaXBBcnJheS5mb3JFYWNoKGRpc3BsYXlIaXRzKVxuXG4gICAgZGlzcGxheU1pc3NlcyhodW1hbkdhbWVCb2FyZClcblxuXG4gICAgLy8gY29tcHV0ZXJHYW1lQm9hcmQuc2hpcEFycmF5LmZvckVhY2goZGlzcGxheVNoaXApXG5cbiAgICBjb21wdXRlckdhbWVCb2FyZC5zaGlwQXJyYXkuZm9yRWFjaChkaXNwbGF5SGl0cylcblxuICAgIGRpc3BsYXlNaXNzZXMoY29tcHV0ZXJHYW1lQm9hcmQpXG5cbn1cblxuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIHJlbW92ZUdyaWQoKSB7XG4gICAgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5TWlzc2VzKHRoaXNHYW1lQm9hcmQpIHtcblxuICAgIGxldCBzaGlwU3F1YXJlSWRTdWZmaXggPSAnJ1xuXG4gICAgaWYgKHRoaXNHYW1lQm9hcmQub3duZXIgPT0gJ0NPTVBVVEVSJykge1xuICAgICAgICBzaGlwU3F1YXJlSWRTdWZmaXggPSAnYydcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwU3F1YXJlSWRTdWZmaXggPSAnaCdcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXNHYW1lQm9hcmQubWlzc2VzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgbGV0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzR2FtZUJvYXJkLm1pc3Nlc1tpXSk7XG4gICAgICAgIHNoaXBTcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzc2VkLXNxdWFyZScpXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTaGlwKHNoaXBUb0Rpc3BsYXkpIHtcbiAgICBsZXQgc2hpcFNxdWFyZUlkU3VmZml4ID0gJydcblxuICAgIGlmIChzaGlwVG9EaXNwbGF5Lm93bmVyID09ICdDT01QVVRFUicpIHtcbiAgICAgICAgc2hpcFNxdWFyZUlkU3VmZml4ID0gJ2MnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcFNxdWFyZUlkU3VmZml4ID0gJ2gnXG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coJ3NoaXBTcXVhcmVJZFN1ZmZpeDogJyArIHNoaXBTcXVhcmVJZFN1ZmZpeClcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGlwVG9EaXNwbGF5LmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaGlwVG9EaXNwbGF5LmNvb3JkaW5hdGVzOiAnICsgc2hpcFRvRGlzcGxheS5jb29yZGluYXRlc1tpXSlcblxuXG4gICAgICAgIGxldCBzaGlwU3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2hpcFRvRGlzcGxheS5jb29yZGluYXRlc1tpXSArIHNoaXBTcXVhcmVJZFN1ZmZpeCk7XG4gICAgICAgIGlmICghc2hpcFNxdWFyZSkge1xuICAgICAgICAgICAgbGV0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwVG9EaXNwbGF5LmNvb3JkaW5hdGVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzaGlwU3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2hpcFRvRGlzcGxheS5jb29yZGluYXRlc1tpXSk7XG4gICAgICAgIHNoaXBTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1zcXVhcmUnKVxuICAgIH1cblxufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlIaXRzKHNoaXBUb0Rpc3BsYXkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2hpcFRvRGlzcGxheS5kYW1hZ2U6ICcgKyBzaGlwVG9EaXNwbGF5LmNvb3JkaW5hdGVzWzFdKVxuICAgIGxldCBzaGlwU3F1YXJlSWRTdWZmaXggPSAnJ1xuXG4gICAgaWYgKHNoaXBUb0Rpc3BsYXkub3duZXIgPT0gJ0NPTVBVVEVSJykge1xuICAgICAgICBzaGlwU3F1YXJlSWRTdWZmaXggPSAnYydcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwU3F1YXJlSWRTdWZmaXggPSAnaCdcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnc2hpcFRvRGlzcGxheS5kYW1hZ2U6ICcgKyBzaGlwVG9EaXNwbGF5LmRhbWFnZVswXSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoaXBUb0Rpc3BsYXkuZGFtYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaGlwVG9EaXNwbGF5LmRhbWFnZVtpXTogJyArIHNoaXBUb0Rpc3BsYXkuZGFtYWdlW2ldKVxuXG4gICAgICAgIGxldCBzaGlwU3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2hpcFRvRGlzcGxheS5kYW1hZ2VbaV0pO1xuICAgICAgICBzaGlwU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2RhbWFnZWQtc2hpcC1zcXVhcmUnKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUh1bWFuQm9hcmQoKSB7XG4gICAgbGV0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuLWNvbnRlbnQnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQnKVxuICAgIGJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG5cbiAgICBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1jb250ZW50Jyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBib2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5ZWQnKVxufVxuXG5mdW5jdGlvbiBoaWRlSHVtYW5Cb2FyZCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaGlkZUh1bWFuYm9hcmQgY2FsbGVkJylcblxuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1hbi1jb250ZW50Jyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBib2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5ZWQnKVxuICAgIGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLWNvbnRlbnQnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQnKVxuICAgIGJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59XG5cbmV4cG9ydCB7IGRvbVRoaW5nLCBjcmVhdGVHcmlkLCBkaXNwbGF5U2hpcCwgZGlzcGxheUhpdHMgYXMgZGlzcGxheUhpdCwgc3F1YXJlQ2ljaywgZGlzcGxheUh1bWFuQm9hcmQsIGhpZGVIdW1hbkJvYXJkLCByZW1vdmVHcmlkLCBjcmVhdGVTaGlwQnVpbGRpbmdHcmlkIH0iLCJpbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSAnLi9zaGlwJ1xuXG5pbXBvcnQgeyBzcXVhcmVDaWNrIH0gZnJvbSAnLi9kb21TdHVmZidcblxuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXIobmFtZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGVQbGF5ZXIgY2FsbGVkJylcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBuYW1lXG4gICAgfVxufTtcblxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lQm9hcmQobmFtZSkge1xuICAgIGxldCBzaGlwQXJyYXkgPSBbXTtcbiAgICBsZXQgbWlzc2VzID0gW107XG4gICAgbGV0IGhpdHMgPSBbXTtcblxuXG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAobmFtZSwgc3Rlcm4sIGJvdykge1xuICAgICAgICBsZXQgb3duZXIgPSB0aGlzLm93bmVyO1xuICAgICAgICBjb25zdCBuZXdTaGlwID0gY3JlYXRlU2hpcChuYW1lLCBzdGVybiwgYm93LCBvd25lcik7XG4gICAgICAgIHNoaXBBcnJheS5wdXNoKG5ld1NoaXApXG4gICAgICAgIHJldHVybiBuZXdTaGlwXG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soaGl0Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlY2VpdmVBdHRhY2sgdGhpczogJyArIHRoaXMpXG4gICAgICAgIGxldCBib2FyZCA9IHRoaXM7XG4gICAgICAgIC8vIGxldCBwYXN0TWlzcyA9IGNoZWNrRm9yUGFzdE1pc3Nlcyhib2FyZCwgaGl0Q29vcmRpbmF0ZXMpXG4gICAgICAgIC8vIGxldCBwYXN0SGl0ID0gY2hlY2tGb3JQYXN0SGl0cyhib2FyZCwgaGl0Q29vcmRpbmF0ZXMpXG4gICAgICAgIGxldCBoaXRSZXN1bHQgPSAnbm90IGhpdCdcblxuICAgICAgICBsZXQgcGFzdE1pc3MgPSB0aGlzLmNoZWNrRm9yUGFzdE1pc3NlcyhoaXRDb29yZGluYXRlcylcbiAgICAgICAgbGV0IHBhc3RIaXQgPSB0aGlzLmNoZWNrRm9yUGFzdEhpdHMoaGl0Q29vcmRpbmF0ZXMpXG4gICAgICAgIGxldCB3cm9uZ0JvYXJkID0gdGhpcy5jaGVja0Zvcldyb25nQm9hcmQoaGl0Q29vcmRpbmF0ZXMpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwYXN0TWlzczogJyArIHBhc3RNaXNzKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwYXN0SGl0OiAnICsgcGFzdEhpdClcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaGl0Q29vcmRpbmF0ZXM6ICcgKyBoaXRDb29yZGluYXRlcylcblxuXG5cbiAgICAgICAgaWYgKHBhc3RIaXQgfHwgcGFzdE1pc3MgfHwgd3JvbmdCb2FyZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgdG9ycGVkbyB0YXJnZXQnKVxuICAgICAgICAgICAgaGl0UmVzdWx0ID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vd25lciArICcgaXMgYmVpbmcgYXR0YWNrZWQgYXQgJyArIGhpdENvb3JkaW5hdGVzKVxuXG5cblxuICAgICAgICAgICAgLy8gaXRlcmF0aW5nIHRocm91Z2ggc2hpcCBhcnJheSBcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hpcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cblxuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlc1N1ZmZpeCA9ICcnXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vd25lciA9PSAnQ09NUFVURVInKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzU3VmZml4ID0gJ2MnXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNTdWZmaXggPSAnaCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBDb29yZGluYXRlcyA9IHNoaXBBcnJheVtpXS5jb29yZGluYXRlcztcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2hpcENvb3JkaW5hdGVzOiAnICsgc2hpcENvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoaXRDb29yZGluYXRlczogJyArIGhpdENvb3JkaW5hdGVzKVxuXG5cbiAgICAgICAgICAgICAgICAvLyBpdGVyYXRpbmcgdGhyb3VnaCBzaGlwIGNvb3JkaW5hdGVzIFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2hpcENvb3JkaW5hdGVzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBDb29yZGluYXRlc0NvbXBsZXRlID0gc2hpcENvb3JkaW5hdGVzW2pdICsgY29vcmRpbmF0ZXNTdWZmaXhcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NoaXBDb29yZGluYXRlc0NvbXBsZXRlOiAnICsgc2hpcENvb3JkaW5hdGVzQ29tcGxldGUpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBDb29yZGluYXRlc0NvbXBsZXRlLnRvU3RyaW5nKCkgPT0gaGl0Q29vcmRpbmF0ZXMudG9TdHJpbmcoKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoaXRSZXN1bHQgPSAnaGl0JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBBcnJheVtpXS5oaXQoaGl0Q29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGl0cy5wdXNoKGhpdENvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpdFJlc3VsdCA9PSAnbm90IGhpdCcpIHtcbiAgICAgICAgICAgICAgICBtaXNzZXMucHVzaChoaXRDb29yZGluYXRlcylcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhpdFJlc3VsdFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjaGVja0Zvcldyb25nQm9hcmQodGhlc2VIaXRDb29yZGluYXRlcykge1xuXG4gICAgICAgIGxldCBhcnIgPSB0aGVzZUhpdENvb3JkaW5hdGVzLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICAgICAgICBsZXQgaGl0Qm9hcmRTdWZmaXggPSB0aGVzZUhpdENvb3JkaW5hdGVzLnNsaWNlKC0xKTtcbiAgICAgICAgbGV0IHNoaXBTcXVhcmVJZFN1ZmZpeCA9ICcnXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJoaXRCb2FyZFN1ZmZpeDogXCIgKyBoaXRCb2FyZFN1ZmZpeClcblxuICAgICAgICBpZiAodGhpcy5vd25lciA9PSAnQ09NUFVURVInKSB7XG4gICAgICAgICAgICBzaGlwU3F1YXJlSWRTdWZmaXggPSAnYydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBTcXVhcmVJZFN1ZmZpeCA9ICdoJ1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIGlmIChoaXRCb2FyZFN1ZmZpeCA9PSBzaGlwU3F1YXJlSWRTdWZmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGcmllbmRseSBmaXJlISEhJylcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrRm9yUGFzdE1pc3Nlcyh0aGVzZUhpdENvb3JkaW5hdGVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGVja2luZyBmb3IgcGFzdCBtaXNzZXMnKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5vd25lcjogJyArIHRoaXMub3duZXIpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLm1pc3NlczogJyArIHRoaXMubWlzc2VzKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhlc2VIaXRDb29yZGluYXRlczogJyArIHRoZXNlSGl0Q29vcmRpbmF0ZXMpXG5cblxuICAgICAgICBpZiAodGhpcy5taXNzZXMudG9TdHJpbmcoKS5pbmNsdWRlcyh0aGVzZUhpdENvb3JkaW5hdGVzLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JQYXN0SGl0cyh0aGVzZUhpdENvb3JkaW5hdGVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGVja2luZyBmb3IgcGFzdCBIaXRzJylcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMub3duZXI6ICcgKyB0aGlzLm93bmVyKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5oaXRzOiAnICsgdGhpcy5oaXRzKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhlc2VIaXRDb29yZGluYXRlczogJyArIHRoZXNlSGl0Q29vcmRpbmF0ZXMpXG5cblxuXG4gICAgICAgIGlmICh0aGlzLmhpdHMudG9TdHJpbmcoKS5pbmNsdWRlcyh0aGVzZUhpdENvb3JkaW5hdGVzLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBjaGVja0Zvckxvc3MobmFtZSwgc3Rlcm4sIGJvdykge1xuICAgICAgICBsZXQgc3Vua1NoaXBzID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGlwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwQXJyYXlbaV0ubG9hID09IHNoaXBBcnJheVtpXS5kYW1hZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3Vua1NoaXBzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3Vua1NoaXBzOiAnICsgc3Vua1NoaXBzKVxuXG4gICAgICAgIGlmIChzdW5rU2hpcHMgPT0gc2hpcEFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FsbCBpcyBsb3N0JylcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXhpc3RlbmNlID0gJ2V4aXN0cyc7XG4gICAgY29uc3Qgb3duZXIgPSBuYW1lO1xuICAgIC8vIGNvbnN0IHR1cm4gPSAgdHJ1ZTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBjaGVja0Zvckxvc3MsXG4gICAgICAgIGNoZWNrRm9yUGFzdE1pc3NlcyxcbiAgICAgICAgY2hlY2tGb3JQYXN0SGl0cyxcbiAgICAgICAgY2hlY2tGb3JXcm9uZ0JvYXJkLFxuICAgICAgICBzaGlwQXJyYXksXG4gICAgICAgIGV4aXN0ZW5jZSxcbiAgICAgICAgLy8gdHVybixcbiAgICAgICAgb3duZXIsXG4gICAgICAgIG1pc3NlcyxcbiAgICAgICAgaGl0c1xuICAgIH07XG5cblxufTtcblxuXG5leHBvcnQgeyBjcmVhdGVHYW1lQm9hcmQsIGNyZWF0ZVBsYXllciB9IiwiaW1wb3J0IHsgY3JlYXRlR2FtZUJvYXJkLCBjcmVhdGVQbGF5ZXIsIHBsYWNlU2hpcCB9IGZyb20gJy4vZ2FtZUJvYXJkJ1xuaW1wb3J0IHsgZG9tVGhpbmcsIGNyZWF0ZUdyaWQsIGRpc3BsYXlTaGlwLCBkaXNwbGF5SGl0LCBkaXNwbGF5SHVtYW5Cb2FyZCwgaGlkZUh1bWFuQm9hcmQsIHJlbW92ZUdyaWQsIGNyZWF0ZVNoaXBCdWlsZGluZ0dyaWQgfSBmcm9tICcuL2RvbVN0dWZmJ1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5sZXQgYWN0aXZlR2FtZUJvYXJkID0ge307XG5sZXQgaHVtYW5HYW1lQm9hcmQgPSB7fTtcbmxldCBjb21wdXRlckdhbWVCb2FyZCA9IHt9O1xuXG5cbmZ1bmN0aW9uIHBsYXllclNldHVwKCkge1xuICAgIGNvbnN0IG5ld1BsYXllciA9IGNyZWF0ZVBsYXllcignVGlsbHknKTtcbiAgICBodW1hbkdhbWVCb2FyZCA9IGNyZWF0ZUdhbWVCb2FyZChuZXdQbGF5ZXIubmFtZSk7XG5cbiAgICAvLyByZW5kZXIgc2hpcCBidWlsZGluZyBncmlkXG4gICAgY3JlYXRlU2hpcEJ1aWxkaW5nR3JpZCgpXG4gICAgLy8gY29uc3QgaHVtYW5TaGlwMSA9IGh1bWFuR2FtZUJvYXJkLnBsYWNlU2hpcCgnSE1TIEN1Y3VtYmVyJywgWzEsIDFdLCBbMSwgM10pO1xuICAgIC8vIGNvbnN0IGh1bWFuU2hpcDIgPSBodW1hbkdhbWVCb2FyZC5wbGFjZVNoaXAoJ0hNUyBQb3RhdG8nLCBbNCwgNF0sIFs3LCA0XSk7XG5cbn1cblxuXG5cbmZ1bmN0aW9uIEFJU2V0dXAoKSB7XG4gICAgY29uc3QgbmV3UGxheWVyID0gY3JlYXRlUGxheWVyKCdDT01QVVRFUicpO1xuICAgIGNvbXB1dGVyR2FtZUJvYXJkID0gY3JlYXRlR2FtZUJvYXJkKG5ld1BsYXllci5uYW1lKTtcbiAgICBjb25zdCBjb21wdXRlclNoaXAxID0gY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwKCdITVMgVHJhbnNpc3RvcicsICcxLDEnLCAnMSw0Jyk7XG4gICAgY29uc3QgY29tcHV0ZXJTaGlwMTIgPSBjb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXAoJ0hNUyBFbGVjdHJvbicsICc0LDInLCAnNywyJyk7XG59XG5cbmZ1bmN0aW9uIGdhbWVTdGFydCgpIHtcblxuICAgIC8vIHJlcXVlc3QgcGxheWVyIHNldHVwXG4gICAgQUlTZXR1cCgpXG4gICAgcGxheWVyU2V0dXAoKVxuXG4gICAgLy8gLy8gQUkgc2V0dXBcblxuICAgIC8vIC8vIGJvYXJkIHNldHVwXG4gICAgLy8gcmVuZGVyKClcbn1cblxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmVtb3ZlR3JpZCgpXG4gICAgY3JlYXRlR3JpZCgpXG5cblxuXG59XG5cbmdhbWVTdGFydCgpXG5cblxuLy8gYWN0aXZlR2FtZUJvYXJkID0gaHVtYW5HYW1lQm9hcmQ7XG5cblxuXG5leHBvcnQgeyBodW1hbkdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQsIHJlbmRlciB9XG4iLCJcblxuZnVuY3Rpb24gY3JlYXRlU2hpcChuYW1lLCBzdGVybiwgYm93LCBvd25lcikge1xuICAgIGNvbnNvbGUubG9nKCdzaGlwLmpzIGZhY3RvcnkgZnVuY3Rpb24gd29ya3MnKVxuXG5cbmNvbnNvbGUubG9nKCdzdGVybi5zcGxpdCgnLCcpWzBdOiAnICsgc3Rlcm4uc3BsaXQoJywnKVswXSlcbiAgICBsZXQgc2hpcFgxID0gTnVtYmVyKHN0ZXJuLnNwbGl0KCcsJylbMF0pO1xuICAgIGxldCBzaGlwWDIgPSBOdW1iZXIoYm93LnNwbGl0KCcsJylbMF0pO1xuXG4gICAgbGV0IHNoaXBZMSA9IE51bWJlcihzdGVybi5zcGxpdCgnLCcpWzFdKTtcbiAgICBsZXQgc2hpcFkyID0gTnVtYmVyKGJvdy5zcGxpdCgnLCcpWzFdKTtcbiAgICBsZXQgdGVtcFZhbHVlID0gMFxuXG4gICAgaWYgKHNoaXBYMSA+IHNoaXBYMikge1xuICAgICAgICB0ZW1wVmFsdWUgPSBzaGlwWDJcbiAgICAgICAgc2hpcFgyID0gc2hpcFgxO1xuICAgICAgICBzaGlwWDEgPSB0ZW1wVmFsdWVcbiAgICB9XG5cbiAgICBpZiAoc2hpcFkxID4gc2hpcFkyKSB7XG4gICAgICAgIHRlbXBWYWx1ZSA9IHNoaXBZMlxuICAgICAgICBzaGlwWTIgPSBzaGlwWTE7XG4gICAgICAgIHNoaXBZMSA9IHRlbXBWYWx1ZVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdzaGlwWDE6ICcgKyBzaGlwWDEpXG4gICAgY29uc29sZS5sb2coJ3NoaXBYMjogJyArIHNoaXBYMilcbiAgICBjb25zb2xlLmxvZygnc2hpcFkxOiAnICsgc2hpcFkxKVxuICAgIGNvbnNvbGUubG9nKCdzaGlwWTI6ICcgKyBzaGlwWTIpXG5cbiAgICBsZXQgbG9hID0gMDtcblxuICAgIGxldCBjb29yZGluYXRlcyA9IFtdXG4gIFxuXG4gICAgaWYgKHNoaXBYMSA9PSBzaGlwWDIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZlcnRpY2FsIHNoaXAnKVxuICAgICAgICAvLyB2ZXJ0aWNhbCBzaGlwXG4gICAgICAgIGxvYSA9IHNoaXBZMiAtIHNoaXBZMSArIDFcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2E7IGkrKykge1xuXG5cbiAgICAgICAgICAgIGNvb3JkaW5hdGVzW2ldID0gW3NoaXBYMSwgc2hpcFkxICsgaV1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb29yZGluYXRlcycpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXNbaV0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nvb3JkaW5hdGVzJylcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaG9yaXpvbnRhbCBzaGlwXG4gICAgICAgIGNvbnNvbGUubG9nKCdob3Jpem9udGFsIHNoaXAnKVxuXG4gICAgICAgIGxvYSA9IHNoaXBYMiAtIHNoaXBYMSArIDFcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2E7IGkrKykge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXNbaV0gPSBbc2hpcFgxICsgaSwgc2hpcFkxXVxuICAgICAgICAgICAgLy8gY29vcmRpbmF0ZXNbaV0gPSAnYm9vYnMnXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb29yZGluYXRlcycpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXNbaV0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nvb3JkaW5hdGVzJylcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXMpXG5cbiAgICB9XG5cbi8vIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzKVxuXG4gICAgbGV0IGRhbWFnZSA9IFtdO1xuICAgIGxldCBzdW5rID0gZmFsc2VcblxuICAgIGZ1bmN0aW9uIGhpdChsb2NhdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUgKyAnIGdldHRpbmcgaGl0JylcbiAgICAgICAgdGhpcy5kYW1hZ2UucHVzaChsb2NhdGlvbik7XG5cbiAgICAgICAgdGhpcy5kYW1hZ2Uuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKGEgPCBiKVxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lICsgJyBkYW1hZ2UgJyArIHRoaXMuZGFtYWdlKVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRhbWFnZVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzaGlwLmpzIGRhbWFnZScpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGFtYWdlLmxlbmd0aClcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NoaXAuanMgbG9hJylcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sb2EpXG5cbiAgICAgICAgaWYgKHRoaXMuZGFtYWdlLmxlbmd0aCA9PSB0aGlzLmxvYSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnc3Rlcm46ICcgKyBzdGVybilcblxuICAgIGNvbnNvbGUubG9nKCdib3c6ICcgKyBib3cpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBsb2EsXG4gICAgICAgIGRhbWFnZSxcbiAgICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAgIG93bmVyLFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3Vua1xuICAgIH07XG5cblxufTtcblxuZXhwb3J0IHsgY3JlYXRlU2hpcCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9