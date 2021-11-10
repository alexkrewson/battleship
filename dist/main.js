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
___CSS_LOADER_EXPORT___.push([module.id, "#human-content {\n  float: left;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: blue;\n}\n#human-content .square {\n  border-style: solid;\n}\n#human-content .ship-square {\n  background-color: grey;\n}\n#human-content .damaged-ship-square {\n  background-color: red;\n}\n#human-content .missed-square {\n  background-color: black;\n}\n\n#computer-content {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: cornflowerblue;\n  float: right;\n}\n#computer-content .square {\n  border-style: solid;\n}\n#computer-content .ship-square {\n  background-color: grey;\n}\n#computer-content .damaged-ship-square {\n  background-color: red;\n}\n#computer-content .missed-square {\n  background-color: black;\n}\n\n.hidden {\n  display: none;\n}\n\n#human-content.displayed {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: blue;\n}\n\n#computer-content.displayed {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: cornflowerblue;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EAEE,WAAA;EAEA,aAAA;EACA,mCAAA;EACA,sCAAA;EACA,aAAA;EACA,YAAA;EACA,sBAAA;AALF;AAQE;EACE,mBAAA;AANJ;AASE;EACE,sBAAA;AAPJ;AAUE;EACE,qBAAA;AARJ;AAWE;EACE,uBAAA;AATJ;;AAcA;EAEE,aAAA;EACA,mCAAA;EACA,sCAAA;EACA,aAAA;EACA,YAAA;EACA,gCAAA;EAGA,YAAA;AAdF;AAgBE;EACE,mBAAA;AAdJ;AAiBE;EACE,sBAAA;AAfJ;AAkBE;EACE,qBAAA;AAhBJ;AAmBE;EACE,uBAAA;AAjBJ;;AAsBA;EACE,aAAA;AAnBF;;AAsBA;EACE,aAAA;EACA,mCAAA;EACA,sCAAA;EACA,aAAA;EACA,YAAA;EACA,sBAAA;AAnBF;;AAuBA;EACE,aAAA;EACA,mCAAA;EACA,sCAAA;EACA,aAAA;EACA,YAAA;EACA,gCAAA;AApBF","sourcesContent":["#content {\n  // display: flex;\n}\n\n#human-content {\n\n  float: left;\n\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: blue;\n\n\n  .square {\n    border-style: solid;\n  }\n\n  .ship-square {\n    background-color: grey;\n  }\n\n  .damaged-ship-square {\n    background-color: red;\n  }\n\n  .missed-square {\n    background-color: black;\n  }\n\n}\n\n#computer-content {\n\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: cornflowerblue;\n\n\n  float: right;\n  \n  .square {\n    border-style: solid;\n  }\n\n  .ship-square {\n    background-color: grey;\n  }\n\n  .damaged-ship-square {\n    background-color: red;\n  }\n\n  .missed-square {\n    background-color: black;\n  }\n\n}\n\n.hidden {\n  display: none;\n}\n\n#human-content.displayed {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: blue;\n\n}\n\n#computer-content.displayed {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: cornflowerblue;\n\n}"],"sourceRoot":""}]);
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
/* harmony export */   "removeGrid": () => (/* binding */ removeGrid)
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
        // console.log('hitCoordinates: ' + hitCoordinates)

        // console.log('humanGameBoard.checkForPastMisses(hitCoordinates): ' + humanGameBoard.checkForPastMisses(hitCoordinates))

        // console.log('humanGameBoard.checkForPastHits(hitCoordinates): ' + humanGameBoard.checkForPastHits(hitCoordinates))

        if (_index__WEBPACK_IMPORTED_MODULE_0__.humanGameBoard.checkForPastMisses(hitCoordinates) == false && _index__WEBPACK_IMPORTED_MODULE_0__.humanGameBoard.checkForPastHits(hitCoordinates) == false) {
            poorChoice = false;
        }

         

        counter++
    }
    









    _index__WEBPACK_IMPORTED_MODULE_0__.humanGameBoard.receiveAttack(hitCoordinates)
    // console.log(humanGameBoard.shipArray[0].name + ' Damage: ' + humanGameBoard.shipArray[0].damage.length)

    ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.render)()

}

function pause(id) {
    return new Promise(resolve => setTimeout(() => {
        // console.log(`pause is over`);
        resolve();
    }, id));
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
        // console.log('shipToDisplay.coordinates: ' + shipToDisplay.coordinates[i])
        let shipSquare = document.getElementById(shipToDisplay.coordinates[i] + shipSquareIdSuffix);
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
        console.log('pastMiss: ' + pastMiss)

        console.log('pastHit: ' + pastHit)

        console.log('hitCoordinates: ' + hitCoordinates)



        if (pastHit || pastMiss) {
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
        console.log('sunkShips: ' + sunkShips)

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
    const humanShip1 = humanGameBoard.placeShip('HMS Cucumber', [1, 1], [1, 3]);
    const humanShip2 = humanGameBoard.placeShip('HMS Potato', [4, 4], [7, 4]);

}



function AISetup() {
    const newPlayer = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.createPlayer)('COMPUTER');
    computerGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.createGameBoard)(newPlayer.name);
    const computerShip1 = computerGameBoard.placeShip('HMS Transistor', [1, 1], [1, 4]);
    const computerShip12 = computerGameBoard.placeShip('HMS Electron', [4, 2], [7, 2]);
}

function gameStart() {

    // request player setup
    playerSetup()

    // AI setup
    AISetup()

    // board setup
    render()
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
    // console.log('ship.js factory function works')


    //turn stern coordinates into two integers
    //turn bow coordinates into two integers



    let shipX1 = stern[0];
    let shipX2 = bow[0];

    // console.log('shipX1')
    // console.log(shipX1)
    // console.log('shipX2')
    // console.log(shipX2)

    let shipY1 = stern[1];
    let shipY2 = bow[1];

    // console.log('shipY1')
    // console.log(shipY1)
    // console.log('shipY2')
    // console.log(shipY2)


    let loa = 0;

    let coordinates = []
  

    if (shipX1 == shipX2) {
        // console.log('vertical ship')
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
        // console.log('horizontal ship')

        // console.log('horizontal ship')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9zcmMvZG9tU3R1ZmYuanMiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25wbXBhY2thZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25wbXBhY2thZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL25wbXBhY2thZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL25wbXBhY2thZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2h1bWFuLWNvbnRlbnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4jaHVtYW4tY29udGVudCAuc3F1YXJlIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcbiNodW1hbi1jb250ZW50IC5zaGlwLXNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG4jaHVtYW4tY29udGVudCAuZGFtYWdlZC1zaGlwLXNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbiNodW1hbi1jb250ZW50IC5taXNzZWQtc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jY29tcHV0ZXItY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuI2NvbXB1dGVyLWNvbnRlbnQgLnNxdWFyZSB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG4jY29tcHV0ZXItY29udGVudCAuc2hpcC1zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuI2NvbXB1dGVyLWNvbnRlbnQgLmRhbWFnZWQtc2hpcC1zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4jY29tcHV0ZXItY29udGVudCAubWlzc2VkLXNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jaHVtYW4tY29udGVudC5kaXNwbGF5ZWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuI2NvbXB1dGVyLWNvbnRlbnQuZGlzcGxheWVkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUVFLFdBQUE7RUFFQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFMRjtBQVFFO0VBQ0UsbUJBQUE7QUFOSjtBQVNFO0VBQ0Usc0JBQUE7QUFQSjtBQVVFO0VBQ0UscUJBQUE7QUFSSjtBQVdFO0VBQ0UsdUJBQUE7QUFUSjs7QUFjQTtFQUVFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUdBLFlBQUE7QUFkRjtBQWdCRTtFQUNFLG1CQUFBO0FBZEo7QUFpQkU7RUFDRSxzQkFBQTtBQWZKO0FBa0JFO0VBQ0UscUJBQUE7QUFoQko7QUFtQkU7RUFDRSx1QkFBQTtBQWpCSjs7QUFzQkE7RUFDRSxhQUFBO0FBbkJGOztBQXNCQTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQW5CRjs7QUF1QkE7RUFDRSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFwQkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbnRlbnQge1xcbiAgLy8gZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2h1bWFuLWNvbnRlbnQge1xcblxcbiAgZmxvYXQ6IGxlZnQ7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcblxcblxcbiAgLnNxdWFyZSB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB9XFxuXFxuICAuc2hpcC1zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgfVxcblxcbiAgLmRhbWFnZWQtc2hpcC1zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB9XFxuXFxuICAubWlzc2VkLXNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbn1cXG5cXG4jY29tcHV0ZXItY29udGVudCB7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG5cXG5cXG4gIGZsb2F0OiByaWdodDtcXG4gIFxcbiAgLnNxdWFyZSB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB9XFxuXFxuICAuc2hpcC1zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgfVxcblxcbiAgLmRhbWFnZWQtc2hpcC1zcXVhcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB9XFxuXFxuICAubWlzc2VkLXNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNodW1hbi1jb250ZW50LmRpc3BsYXllZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcblxcbn1cXG5cXG4jY29tcHV0ZXItY29udGVudC5kaXNwbGF5ZWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5pbXBvcnQgeyBzcXVhcmVDbGlja0luZGV4LCBodW1hbkdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQsIHJlbmRlciB9IGZyb20gJy4vaW5kZXgnXG5cbmltcG9ydCB7IGNoZWNrRm9yUGFzdE1pc3NlcywgY2hlY2tGb3JQYXN0SGl0cyB9IGZyb20gJy4vZ2FtZUJvYXJkJ1xuXG5cbmZ1bmN0aW9uIGRvbVRoaW5nKCkge1xuICAgIGNvbnNvbGUubG9nKCdJIGFtIGEgZG9tIGZ1bmN0aW9uJylcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIHNxdWFyZUNpY2soY2xpY2tlZFNxdWFyZSkge1xuXG4gICAgbGV0IHRhcmdldFZhbGlkID0gY29tcHV0ZXJHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhjbGlja2VkU3F1YXJlLnRhcmdldC5pZClcblxuICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcHV0ZXJHYW1lQm9hcmQuc2hpcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIGRpc3BsYXlIaXRzKGNvbXB1dGVyR2FtZUJvYXJkLnNoaXBBcnJheVtpXSlcbiAgICAvLyB9XG5cbiAgICBjb21wdXRlckdhbWVCb2FyZC5jaGVja0Zvckxvc3MoKVxuXG5cbiAgICBpZiAodGFyZ2V0VmFsaWQpIHtcbiAgICAgICAgcmVuZGVyKClcbiAgICAgICAgY29tcHV0ZXJUYWtlc1R1cm4oKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tcHV0ZXJUYWtlc1R1cm4oKSB7XG4gICAgLy8gaGlkZUh1bWFuQm9hcmQoKVxuICAgIGNvbnNvbGUubG9nKCdjb21wdXRlciBpcyB0aGlua2luZycpXG4gICAgYXdhaXQgcGF1c2UoMTAwMClcbiAgICBsZXQgcG9vckNob2ljZSA9IHRydWVcbiAgICBsZXQgaGl0Q29vcmRpbmF0ZXMgPSAnJztcbiAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICB3aGlsZSAocG9vckNob2ljZSAmJiBjb3VudGVyIDwgMTAwKSB7XG4gICAgICAgIGxldCBoaXRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTsgXG4gICAgICAgIGxldCBoaXRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTsgXG4gICAgICAgIGhpdENvb3JkaW5hdGVzID0gW2hpdFgsIGhpdFldICsgJ2gnO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaGl0Q29vcmRpbmF0ZXM6ICcgKyBoaXRDb29yZGluYXRlcylcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaHVtYW5HYW1lQm9hcmQuY2hlY2tGb3JQYXN0TWlzc2VzKGhpdENvb3JkaW5hdGVzKTogJyArIGh1bWFuR2FtZUJvYXJkLmNoZWNrRm9yUGFzdE1pc3NlcyhoaXRDb29yZGluYXRlcykpXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2h1bWFuR2FtZUJvYXJkLmNoZWNrRm9yUGFzdEhpdHMoaGl0Q29vcmRpbmF0ZXMpOiAnICsgaHVtYW5HYW1lQm9hcmQuY2hlY2tGb3JQYXN0SGl0cyhoaXRDb29yZGluYXRlcykpXG5cbiAgICAgICAgaWYgKGh1bWFuR2FtZUJvYXJkLmNoZWNrRm9yUGFzdE1pc3NlcyhoaXRDb29yZGluYXRlcykgPT0gZmFsc2UgJiYgaHVtYW5HYW1lQm9hcmQuY2hlY2tGb3JQYXN0SGl0cyhoaXRDb29yZGluYXRlcykgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHBvb3JDaG9pY2UgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgICBcblxuICAgICAgICBjb3VudGVyKytcbiAgICB9XG4gICAgXG5cblxuXG5cblxuXG5cblxuXG4gICAgaHVtYW5HYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhoaXRDb29yZGluYXRlcylcbiAgICAvLyBjb25zb2xlLmxvZyhodW1hbkdhbWVCb2FyZC5zaGlwQXJyYXlbMF0ubmFtZSArICcgRGFtYWdlOiAnICsgaHVtYW5HYW1lQm9hcmQuc2hpcEFycmF5WzBdLmRhbWFnZS5sZW5ndGgpXG5cbiAgICByZW5kZXIoKVxuXG59XG5cbmZ1bmN0aW9uIHBhdXNlKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBwYXVzZSBpcyBvdmVyYCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICB9LCBpZCkpO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoKSB7XG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGxldCBodW1hbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGh1bWFuRGl2LmlkID0gJ2h1bWFuLWNvbnRlbnQnO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaHVtYW5EaXYpO1xuICAgIGxldCBjb21wdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbXB1dGVyRGl2LmlkID0gJ2NvbXB1dGVyLWNvbnRlbnQnO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29tcHV0ZXJEaXYpO1xuXG4gICAgZm9yICh2YXIgaSA9IDEwOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICAgICAgbGV0IHNxdWFyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBzcXVhcmVEaXYuaWQgPSBqICsgJywnICsgaSArICdoJ1xuICAgICAgICAgICAgc3F1YXJlRGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpXG4gICAgICAgICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0LmFkZCgnaHVtYW4nKVxuICAgICAgICAgICAgc3F1YXJlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3F1YXJlQ2ljayk7XG4gICAgICAgICAgICBodW1hbkRpdi5hcHBlbmRDaGlsZChzcXVhcmVEaXYpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMTA7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHNxdWFyZURpdi5pZCA9IGogKyAnLCcgKyBpICsgJ2MnXG4gICAgICAgICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJylcbiAgICAgICAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QuYWRkKCdjb21wdXRlcicpXG4gICAgICAgICAgICBzcXVhcmVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzcXVhcmVDaWNrKTtcbiAgICAgICAgICAgIGNvbXB1dGVyRGl2LmFwcGVuZENoaWxkKHNxdWFyZURpdilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGh1bWFuR2FtZUJvYXJkLnNoaXBBcnJheS5mb3JFYWNoKGRpc3BsYXlTaGlwKVxuXG4gICAgaHVtYW5HYW1lQm9hcmQuc2hpcEFycmF5LmZvckVhY2goZGlzcGxheUhpdHMpXG5cbiAgICBkaXNwbGF5TWlzc2VzKGh1bWFuR2FtZUJvYXJkKVxuXG5cbiAgICAvLyBjb21wdXRlckdhbWVCb2FyZC5zaGlwQXJyYXkuZm9yRWFjaChkaXNwbGF5U2hpcClcblxuICAgIGNvbXB1dGVyR2FtZUJvYXJkLnNoaXBBcnJheS5mb3JFYWNoKGRpc3BsYXlIaXRzKVxuXG4gICAgZGlzcGxheU1pc3Nlcyhjb21wdXRlckdhbWVCb2FyZClcblxufVxuXG5cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gcmVtb3ZlR3JpZCgpIHtcbiAgICBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQubGFzdENoaWxkKTtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlNaXNzZXModGhpc0dhbWVCb2FyZCkge1xuXG4gICAgbGV0IHNoaXBTcXVhcmVJZFN1ZmZpeCA9ICcnXG5cbiAgICBpZiAodGhpc0dhbWVCb2FyZC5vd25lciA9PSAnQ09NUFVURVInKSB7XG4gICAgICAgIHNoaXBTcXVhcmVJZFN1ZmZpeCA9ICdjJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBTcXVhcmVJZFN1ZmZpeCA9ICdoJ1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpc0dhbWVCb2FyZC5taXNzZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBsZXQgc2hpcFNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXNHYW1lQm9hcmQubWlzc2VzW2ldKTtcbiAgICAgICAgc2hpcFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtc3F1YXJlJylcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheVNoaXAoc2hpcFRvRGlzcGxheSkge1xuICAgIGxldCBzaGlwU3F1YXJlSWRTdWZmaXggPSAnJ1xuXG4gICAgaWYgKHNoaXBUb0Rpc3BsYXkub3duZXIgPT0gJ0NPTVBVVEVSJykge1xuICAgICAgICBzaGlwU3F1YXJlSWRTdWZmaXggPSAnYydcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwU3F1YXJlSWRTdWZmaXggPSAnaCdcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygnc2hpcFNxdWFyZUlkU3VmZml4OiAnICsgc2hpcFNxdWFyZUlkU3VmZml4KVxuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoaXBUb0Rpc3BsYXkuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NoaXBUb0Rpc3BsYXkuY29vcmRpbmF0ZXM6ICcgKyBzaGlwVG9EaXNwbGF5LmNvb3JkaW5hdGVzW2ldKVxuICAgICAgICBsZXQgc2hpcFNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoaXBUb0Rpc3BsYXkuY29vcmRpbmF0ZXNbaV0gKyBzaGlwU3F1YXJlSWRTdWZmaXgpO1xuICAgICAgICBzaGlwU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtc3F1YXJlJylcbiAgICB9XG5cbn1cblxuXG5mdW5jdGlvbiBkaXNwbGF5SGl0cyhzaGlwVG9EaXNwbGF5KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NoaXBUb0Rpc3BsYXkuZGFtYWdlOiAnICsgc2hpcFRvRGlzcGxheS5jb29yZGluYXRlc1sxXSlcbiAgICBsZXQgc2hpcFNxdWFyZUlkU3VmZml4ID0gJydcblxuICAgIGlmIChzaGlwVG9EaXNwbGF5Lm93bmVyID09ICdDT01QVVRFUicpIHtcbiAgICAgICAgc2hpcFNxdWFyZUlkU3VmZml4ID0gJ2MnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcFNxdWFyZUlkU3VmZml4ID0gJ2gnXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ3NoaXBUb0Rpc3BsYXkuZGFtYWdlOiAnICsgc2hpcFRvRGlzcGxheS5kYW1hZ2VbMF0pXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGlwVG9EaXNwbGF5LmRhbWFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hpcFRvRGlzcGxheS5kYW1hZ2VbaV06ICcgKyBzaGlwVG9EaXNwbGF5LmRhbWFnZVtpXSlcblxuICAgICAgICBsZXQgc2hpcFNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoaXBUb0Rpc3BsYXkuZGFtYWdlW2ldKTtcbiAgICAgICAgc2hpcFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdkYW1hZ2VkLXNoaXAtc3F1YXJlJylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIdW1hbkJvYXJkKCkge1xuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1hbi1jb250ZW50Jyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkJylcbiAgICBib2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuXG4gICAgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItY29udGVudCcpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgYm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheWVkJylcbn1cblxuZnVuY3Rpb24gaGlkZUh1bWFuQm9hcmQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2hpZGVIdW1hbmJvYXJkIGNhbGxlZCcpXG5cbiAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtYW4tY29udGVudCcpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgYm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheWVkJylcbiAgICBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1jb250ZW50Jyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkJylcbiAgICBib2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxufVxuXG5leHBvcnQgeyBkb21UaGluZywgY3JlYXRlR3JpZCwgZGlzcGxheVNoaXAsIGRpc3BsYXlIaXRzIGFzIGRpc3BsYXlIaXQsIHNxdWFyZUNpY2ssIGRpc3BsYXlIdW1hbkJvYXJkLCBoaWRlSHVtYW5Cb2FyZCwgcmVtb3ZlR3JpZCB9IiwiaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gJy4vc2hpcCdcblxuaW1wb3J0IHsgc3F1YXJlQ2ljayB9IGZyb20gJy4vZG9tU3R1ZmYnXG5cblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKG5hbWUpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRlUGxheWVyIGNhbGxlZCcpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogbmFtZVxuICAgIH1cbn07XG5cblxuZnVuY3Rpb24gY3JlYXRlR2FtZUJvYXJkKG5hbWUpIHtcbiAgICBsZXQgc2hpcEFycmF5ID0gW107XG4gICAgbGV0IG1pc3NlcyA9IFtdO1xuICAgIGxldCBoaXRzID0gW107XG5cblxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKG5hbWUsIHN0ZXJuLCBib3cpIHtcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcy5vd25lcjtcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IGNyZWF0ZVNoaXAobmFtZSwgc3Rlcm4sIGJvdywgb3duZXIpO1xuICAgICAgICBzaGlwQXJyYXkucHVzaChuZXdTaGlwKVxuICAgICAgICByZXR1cm4gbmV3U2hpcFxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGhpdENvb3JkaW5hdGVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWNlaXZlQXR0YWNrIHRoaXM6ICcgKyB0aGlzKVxuICAgICAgICBsZXQgYm9hcmQgPSB0aGlzO1xuICAgICAgICAvLyBsZXQgcGFzdE1pc3MgPSBjaGVja0ZvclBhc3RNaXNzZXMoYm9hcmQsIGhpdENvb3JkaW5hdGVzKVxuICAgICAgICAvLyBsZXQgcGFzdEhpdCA9IGNoZWNrRm9yUGFzdEhpdHMoYm9hcmQsIGhpdENvb3JkaW5hdGVzKVxuICAgICAgICBsZXQgaGl0UmVzdWx0ID0gJ25vdCBoaXQnXG5cbiAgICAgICAgbGV0IHBhc3RNaXNzID0gdGhpcy5jaGVja0ZvclBhc3RNaXNzZXMoaGl0Q29vcmRpbmF0ZXMpXG4gICAgICAgIGxldCBwYXN0SGl0ID0gdGhpcy5jaGVja0ZvclBhc3RIaXRzKGhpdENvb3JkaW5hdGVzKVxuICAgICAgICBjb25zb2xlLmxvZygncGFzdE1pc3M6ICcgKyBwYXN0TWlzcylcblxuICAgICAgICBjb25zb2xlLmxvZygncGFzdEhpdDogJyArIHBhc3RIaXQpXG5cbiAgICAgICAgY29uc29sZS5sb2coJ2hpdENvb3JkaW5hdGVzOiAnICsgaGl0Q29vcmRpbmF0ZXMpXG5cblxuXG4gICAgICAgIGlmIChwYXN0SGl0IHx8IHBhc3RNaXNzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCB0b3JwZWRvIHRhcmdldCcpXG4gICAgICAgICAgICBoaXRSZXN1bHQgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm93bmVyICsgJyBpcyBiZWluZyBhdHRhY2tlZCBhdCAnICsgaGl0Q29vcmRpbmF0ZXMpXG5cblxuXG4gICAgICAgICAgICAvLyBpdGVyYXRpbmcgdGhyb3VnaCBzaGlwIGFycmF5IFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGlwQXJyYXkubGVuZ3RoOyBpKyspIHtcblxuXG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzU3VmZml4ID0gJydcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm93bmVyID09ICdDT01QVVRFUicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNTdWZmaXggPSAnYydcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1N1ZmZpeCA9ICdoJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgc2hpcENvb3JkaW5hdGVzID0gc2hpcEFycmF5W2ldLmNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzaGlwQ29vcmRpbmF0ZXM6ICcgKyBzaGlwQ29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2hpdENvb3JkaW5hdGVzOiAnICsgaGl0Q29vcmRpbmF0ZXMpXG5cblxuICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGluZyB0aHJvdWdoIHNoaXAgY29vcmRpbmF0ZXMgXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaGlwQ29vcmRpbmF0ZXMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcENvb3JkaW5hdGVzQ29tcGxldGUgPSBzaGlwQ29vcmRpbmF0ZXNbal0gKyBjb29yZGluYXRlc1N1ZmZpeFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2hpcENvb3JkaW5hdGVzQ29tcGxldGU6ICcgKyBzaGlwQ29vcmRpbmF0ZXNDb21wbGV0ZSlcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcENvb3JkaW5hdGVzQ29tcGxldGUudG9TdHJpbmcoKSA9PSBoaXRDb29yZGluYXRlcy50b1N0cmluZygpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpdFJlc3VsdCA9ICdoaXQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEFycmF5W2ldLmhpdChoaXRDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXRzLnB1c2goaGl0Q29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGl0UmVzdWx0ID09ICdub3QgaGl0Jykge1xuICAgICAgICAgICAgICAgIG1pc3Nlcy5wdXNoKGhpdENvb3JkaW5hdGVzKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGl0UmVzdWx0XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrRm9yUGFzdE1pc3Nlcyh0aGVzZUhpdENvb3JkaW5hdGVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGVja2luZyBmb3IgcGFzdCBtaXNzZXMnKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5vd25lcjogJyArIHRoaXMub3duZXIpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLm1pc3NlczogJyArIHRoaXMubWlzc2VzKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhlc2VIaXRDb29yZGluYXRlczogJyArIHRoZXNlSGl0Q29vcmRpbmF0ZXMpXG5cblxuICAgICAgICBpZiAodGhpcy5taXNzZXMudG9TdHJpbmcoKS5pbmNsdWRlcyh0aGVzZUhpdENvb3JkaW5hdGVzLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JQYXN0SGl0cyh0aGVzZUhpdENvb3JkaW5hdGVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGVja2luZyBmb3IgcGFzdCBIaXRzJylcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMub3duZXI6ICcgKyB0aGlzLm93bmVyKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5oaXRzOiAnICsgdGhpcy5oaXRzKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhlc2VIaXRDb29yZGluYXRlczogJyArIHRoZXNlSGl0Q29vcmRpbmF0ZXMpXG5cblxuXG4gICAgICAgIGlmICh0aGlzLmhpdHMudG9TdHJpbmcoKS5pbmNsdWRlcyh0aGVzZUhpdENvb3JkaW5hdGVzLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBjaGVja0Zvckxvc3MobmFtZSwgc3Rlcm4sIGJvdykge1xuICAgICAgICBsZXQgc3Vua1NoaXBzID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGlwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwQXJyYXlbaV0ubG9hID09IHNoaXBBcnJheVtpXS5kYW1hZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3Vua1NoaXBzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnc3Vua1NoaXBzOiAnICsgc3Vua1NoaXBzKVxuXG4gICAgICAgIGlmIChzdW5rU2hpcHMgPT0gc2hpcEFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FsbCBpcyBsb3N0JylcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXhpc3RlbmNlID0gJ2V4aXN0cyc7XG4gICAgY29uc3Qgb3duZXIgPSBuYW1lO1xuICAgIC8vIGNvbnN0IHR1cm4gPSAgdHJ1ZTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBjaGVja0Zvckxvc3MsXG4gICAgICAgIGNoZWNrRm9yUGFzdE1pc3NlcyxcbiAgICAgICAgY2hlY2tGb3JQYXN0SGl0cyxcbiAgICAgICAgc2hpcEFycmF5LFxuICAgICAgICBleGlzdGVuY2UsXG4gICAgICAgIC8vIHR1cm4sXG4gICAgICAgIG93bmVyLFxuICAgICAgICBtaXNzZXMsXG4gICAgICAgIGhpdHNcbiAgICB9O1xuXG5cbn07XG5cblxuZXhwb3J0IHsgY3JlYXRlR2FtZUJvYXJkLCBjcmVhdGVQbGF5ZXIgfSIsImltcG9ydCB7IGNyZWF0ZUdhbWVCb2FyZCwgY3JlYXRlUGxheWVyLCBwbGFjZVNoaXAgfSBmcm9tICcuL2dhbWVCb2FyZCdcbmltcG9ydCB7IGRvbVRoaW5nLCBjcmVhdGVHcmlkLCBkaXNwbGF5U2hpcCwgZGlzcGxheUhpdCwgZGlzcGxheUh1bWFuQm9hcmQsIGhpZGVIdW1hbkJvYXJkLCByZW1vdmVHcmlkIH0gZnJvbSAnLi9kb21TdHVmZidcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xubGV0IGFjdGl2ZUdhbWVCb2FyZCA9IHt9O1xubGV0IGh1bWFuR2FtZUJvYXJkID0ge307XG5sZXQgY29tcHV0ZXJHYW1lQm9hcmQgPSB7fTtcblxuXG5mdW5jdGlvbiBwbGF5ZXJTZXR1cCgpIHtcbiAgICBjb25zdCBuZXdQbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoJ1RpbGx5Jyk7XG4gICAgaHVtYW5HYW1lQm9hcmQgPSBjcmVhdGVHYW1lQm9hcmQobmV3UGxheWVyLm5hbWUpO1xuICAgIGNvbnN0IGh1bWFuU2hpcDEgPSBodW1hbkdhbWVCb2FyZC5wbGFjZVNoaXAoJ0hNUyBDdWN1bWJlcicsIFsxLCAxXSwgWzEsIDNdKTtcbiAgICBjb25zdCBodW1hblNoaXAyID0gaHVtYW5HYW1lQm9hcmQucGxhY2VTaGlwKCdITVMgUG90YXRvJywgWzQsIDRdLCBbNywgNF0pO1xuXG59XG5cblxuXG5mdW5jdGlvbiBBSVNldHVwKCkge1xuICAgIGNvbnN0IG5ld1BsYXllciA9IGNyZWF0ZVBsYXllcignQ09NUFVURVInKTtcbiAgICBjb21wdXRlckdhbWVCb2FyZCA9IGNyZWF0ZUdhbWVCb2FyZChuZXdQbGF5ZXIubmFtZSk7XG4gICAgY29uc3QgY29tcHV0ZXJTaGlwMSA9IGNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcCgnSE1TIFRyYW5zaXN0b3InLCBbMSwgMV0sIFsxLCA0XSk7XG4gICAgY29uc3QgY29tcHV0ZXJTaGlwMTIgPSBjb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXAoJ0hNUyBFbGVjdHJvbicsIFs0LCAyXSwgWzcsIDJdKTtcbn1cblxuZnVuY3Rpb24gZ2FtZVN0YXJ0KCkge1xuXG4gICAgLy8gcmVxdWVzdCBwbGF5ZXIgc2V0dXBcbiAgICBwbGF5ZXJTZXR1cCgpXG5cbiAgICAvLyBBSSBzZXR1cFxuICAgIEFJU2V0dXAoKVxuXG4gICAgLy8gYm9hcmQgc2V0dXBcbiAgICByZW5kZXIoKVxufVxuXG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZW1vdmVHcmlkKClcbiAgICBjcmVhdGVHcmlkKClcblxuXG5cbn1cblxuZ2FtZVN0YXJ0KClcblxuXG4vLyBhY3RpdmVHYW1lQm9hcmQgPSBodW1hbkdhbWVCb2FyZDtcblxuXG5cbmV4cG9ydCB7IGh1bWFuR2FtZUJvYXJkLCBjb21wdXRlckdhbWVCb2FyZCwgcmVuZGVyIH1cbiIsIlxuXG5mdW5jdGlvbiBjcmVhdGVTaGlwKG5hbWUsIHN0ZXJuLCBib3csIG93bmVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NoaXAuanMgZmFjdG9yeSBmdW5jdGlvbiB3b3JrcycpXG5cblxuICAgIC8vdHVybiBzdGVybiBjb29yZGluYXRlcyBpbnRvIHR3byBpbnRlZ2Vyc1xuICAgIC8vdHVybiBib3cgY29vcmRpbmF0ZXMgaW50byB0d28gaW50ZWdlcnNcblxuXG5cbiAgICBsZXQgc2hpcFgxID0gc3Rlcm5bMF07XG4gICAgbGV0IHNoaXBYMiA9IGJvd1swXTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdzaGlwWDEnKVxuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBYMSlcbiAgICAvLyBjb25zb2xlLmxvZygnc2hpcFgyJylcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwWDIpXG5cbiAgICBsZXQgc2hpcFkxID0gc3Rlcm5bMV07XG4gICAgbGV0IHNoaXBZMiA9IGJvd1sxXTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdzaGlwWTEnKVxuICAgIC8vIGNvbnNvbGUubG9nKHNoaXBZMSlcbiAgICAvLyBjb25zb2xlLmxvZygnc2hpcFkyJylcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwWTIpXG5cblxuICAgIGxldCBsb2EgPSAwO1xuXG4gICAgbGV0IGNvb3JkaW5hdGVzID0gW11cbiAgXG5cbiAgICBpZiAoc2hpcFgxID09IHNoaXBYMikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndmVydGljYWwgc2hpcCcpXG4gICAgICAgIC8vIHZlcnRpY2FsIHNoaXBcbiAgICAgICAgbG9hID0gc2hpcFkyIC0gc2hpcFkxICsgMVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvYTsgaSsrKSB7XG5cblxuICAgICAgICAgICAgY29vcmRpbmF0ZXNbaV0gPSBbc2hpcFgxLCBzaGlwWTEgKyBpXVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nvb3JkaW5hdGVzJylcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb29yZGluYXRlc1tpXSlcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY29vcmRpbmF0ZXMnKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb29yZGluYXRlcylcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBob3Jpem9udGFsIHNoaXBcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2hvcml6b250YWwgc2hpcCcpXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2hvcml6b250YWwgc2hpcCcpXG4gICAgICAgIGxvYSA9IHNoaXBYMiAtIHNoaXBYMSArIDFcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2E7IGkrKykge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXNbaV0gPSBbc2hpcFgxICsgaSwgc2hpcFkxXVxuICAgICAgICAgICAgLy8gY29vcmRpbmF0ZXNbaV0gPSAnYm9vYnMnXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb29yZGluYXRlcycpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXNbaV0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nvb3JkaW5hdGVzJylcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXMpXG5cbiAgICB9XG5cbi8vIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzKVxuXG4gICAgbGV0IGRhbWFnZSA9IFtdO1xuICAgIGxldCBzdW5rID0gZmFsc2VcblxuICAgIGZ1bmN0aW9uIGhpdChsb2NhdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUgKyAnIGdldHRpbmcgaGl0JylcbiAgICAgICAgdGhpcy5kYW1hZ2UucHVzaChsb2NhdGlvbik7XG5cbiAgICAgICAgdGhpcy5kYW1hZ2Uuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKGEgPCBiKVxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lICsgJyBkYW1hZ2UgJyArIHRoaXMuZGFtYWdlKVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRhbWFnZVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzaGlwLmpzIGRhbWFnZScpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGFtYWdlLmxlbmd0aClcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NoaXAuanMgbG9hJylcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sb2EpXG5cbiAgICAgICAgaWYgKHRoaXMuZGFtYWdlLmxlbmd0aCA9PSB0aGlzLmxvYSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBsb2EsXG4gICAgICAgIGRhbWFnZSxcbiAgICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAgIG93bmVyLFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3Vua1xuICAgIH07XG5cblxufTtcblxuZXhwb3J0IHsgY3JlYXRlU2hpcCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9