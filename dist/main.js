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
___CSS_LOADER_EXPORT___.push([module.id, "#content {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: blue;\n}\n#content .square {\n  border-style: solid;\n}\n#content .ship-square {\n  background-color: grey;\n}\n#content .damaged-ship-square {\n  background-color: red;\n}\n#content .missed {\n  background-color: black;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAMA;EACE,aAAA;EACA,mCAAA;EACA,sCAAA;EACA,aAAA;EACA,YAAA;EACA,sBAAA;AALF;AAOE;EACE,mBAAA;AALJ;AAQE;EACE,sBAAA;AANJ;AASE;EACE,qBAAA;AAPJ;AAUE;EACE,uBAAA;AARJ","sourcesContent":["// $body-color: green;\n\n// body {\n//   color: $body-color;\n// }\n\n#content {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: blue;\n\n  .square {\n    border-style: solid;\n  }\n\n  .ship-square {\n    background-color: grey;\n  }\n\n  .damaged-ship-square {\n    background-color: red;\n  }\n\n  .missed {\n    background-color: black;\n  }\n\n}\n\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "displayHit": () => (/* binding */ displayHit),
/* harmony export */   "squareCick": () => (/* binding */ squareCick)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");




function domThing() {
    console.log('I am a dom function')

}

function squareCick(clickedSquare) {
    console.log('I am a square click ' + clickedSquare.target.id)
    _index__WEBPACK_IMPORTED_MODULE_0__.activeGameBoard.receiveAttack(clickedSquare.target.id);


    if (_index__WEBPACK_IMPORTED_MODULE_0__.activeGameBoard.receiveAttack(clickedSquare.target.id) != 'hit') {
        displayMiss(clickedSquare.target.id)
    }
    
    for (var i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.activeGameBoard.shipArray.length; i++) {
        // displayShip(activeGameBoard.shipArray[i])
        displayHit(_index__WEBPACK_IMPORTED_MODULE_0__.activeGameBoard.shipArray[i])

    }


}

function createGrid() {
    let contentDiv = document.getElementById('content');

    for (var i = 10; i > 0; i--) {
        for (var j = 1; j < 11; j++) {
            let squareDiv = document.createElement('div')
            squareDiv.id = j + ',' + i
            squareDiv.classList.add('square')
            squareDiv.addEventListener('click', squareCick);
            contentDiv.appendChild(squareDiv)
        }
    }
}

function displayMiss(missedId) {
    let missedSquare = document.getElementById(missedId);
    missedSquare.classList.add('missed')
}

function displayShip(shipToDisplay) {
    // console.log('shipToDisplay.coordinates: ' + shipToDisplay.coordinates[1])

    for (var i = 0; i < shipToDisplay.coordinates.length; i++) {
        // console.log('shipToDisplay.coordinates: ' + shipToDisplay.coordinates[i])
        let shipSquare = document.getElementById(shipToDisplay.coordinates[i]);
        shipSquare.classList.add('ship-square')
    }

}


function displayHit(shipToDisplay) {
    // console.log('shipToDisplay.coordinates: ' + shipToDisplay.coordinates[1])
    if (shipToDisplay.damage.length > 0) {
        console.log('yup, there is damage')
        for (var i = 0; i < shipToDisplay.damage.length; i++) {
            let shipSquare = document.getElementById(shipToDisplay.damage[i]);
            shipSquare.classList.add('damaged-ship-square')
        }

    }


}




/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGameBoard": () => (/* binding */ createGameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



function createGameBoard() {
    // console.log('game.js factory function works')
    const shipArray = [];


    function placeShip(name, stern, bow) {
        // console.log('placeShip is called')
        const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(name, stern, bow);
        // console.log(newShip)
        shipArray.push(newShip)
        return newShip

    }


    function receiveAttack(hitCoordinates) {
        // let hitCoordinates = target.id
        let hitResult = hitCoordinates
        console.log('recieving attack')
        // console.log(shipArray)

        for (var i = 0; i < shipArray.length; i++) {
            // console.log('i')
            // console.log(i)

            let shipCoordinates = shipArray[i].coordinates

            for (var j = 0; j < shipCoordinates.length; j++) {

                if (shipCoordinates[j].toString() == hitCoordinates.toString()) {
                    console.log('hit ship before hit')
                    console.log(shipArray[i])
                    hitResult = 'hit';
                    shipArray[i].hit(hitCoordinates);

                    console.log('hit ship after hit')
                    console.log(shipArray[i])
                    // return shipArray[i]

                } 
            }
        }

      return hitResult






        // // console.log(ship1)
        // // console.log(ship2)




    };

    const existence = 'exists';


    return {
        receiveAttack,
        placeShip,
        shipArray,
        existence
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
/* harmony export */   "activeGameBoard": () => (/* binding */ activeGameBoard)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domStuff */ "./src/domStuff.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



let activeGameBoard = []


;(0,_domStuff__WEBPACK_IMPORTED_MODULE_1__.createGrid)()
const firstGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.createGameBoard)()
const firstShip = firstGameBoard.placeShip('HMS Cucumber', [1, 1], [1, 3])
const secondShip = firstGameBoard.placeShip('HMS Potato', [4, 4], [7, 4])

activeGameBoard = firstGameBoard
console.log('firstShip')
console.log(firstShip)
console.log('secondShip')
console.log(secondShip)




// displayShip(firstShip)
// displayShip(secondShip)
// displayHit(firstShip)
// displayHit(secondShip)


// console.log('firstShip.damage before attack')
// console.log(firstShip.damage)



// let hitCoordinates = [4,1]
// let hitShip = firstGameBoard.receiveAttack(hitCoordinates);
// console.log('hit result: ' + hitShip)




// console.log('firstShip.damage after attack')
// console.log(firstShip.damage)

// if (hitShip != 'miss') {
//     hitShip.hit(hitCoordinates)
// }

// console.log('ship damage')
// console.log(secondShip.damage)
// console.log('ship sunk yet?' )
// console.log(secondShip.isSunk())

// hitCoordinates = [1,3]
// hitShip = firstGameBoard.receiveAttack(hitCoordinates);

// if (hitShip != 'miss') {
//     hitShip.hit(hitCoordinates)
// }
// console.log('ship damage')
// console.log(secondShip.damage)
// console.log('ship sunk yet?' )
// console.log(secondShip.isSunk())

// hitCoordinates = '1,3'
// hitShip = firstGameBoard.receiveAttack(hitCoordinates);

// if (hitShip != 'miss') {
//     hitShip.hit(hitCoordinates)
// }
// console.log('ship damage')
// console.log(firstShip.damage)
// console.log('ship sunk yet?' )
// console.log(firstShip.isSunk())

// hitCoordinates = '1,4'
// hitShip = firstGameBoard.receiveAttack(hitCoordinates);

// if (hitShip != 'miss') {
//     hitShip.hit(hitCoordinates)
// }
// console.log('ship damage')
// console.log(firstShip.damage)
// console.log('ship sunk yet?' )
// console.log(firstShip.isSunk())// const hitMessage = firstShip.hit(true)


// hitCoordinates = '1,5'
// hitShip = firstGameBoard.receiveAttack(hitCoordinates);

// if (hitShip != 'miss') {
//     hitShip.hit(hitCoordinates)
// }
// console.log('ship damage')
// console.log(firstShip.damage)
// console.log('ship sunk yet?' )
// console.log(firstShip.isSunk())// const hitMessage = firstShip.hit(true)





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


function createShip(name, stern, bow) {
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
        // console.log(this.damage)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNwRDtBQUN0Qjs7O0FBR0Esc0RBQVU7QUFDVix1QkFBdUIsMkRBQWU7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHMEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUYxQjtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVM7OztBQUdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7O1VDNUdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25wbXBhY2thZ2UvLi9zcmMvZG9tU3R1ZmYuanMiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25wbXBhY2thZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25wbXBhY2thZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ucG1wYWNrYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbnBtcGFja2FnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL25wbXBhY2thZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL25wbXBhY2thZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuI2NvbnRlbnQgLnNxdWFyZSB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG4jY29udGVudCAuc2hpcC1zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuI2NvbnRlbnQgLmRhbWFnZWQtc2hpcC1zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4jY29udGVudCAubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUxGO0FBT0U7RUFDRSxtQkFBQTtBQUxKO0FBUUU7RUFDRSxzQkFBQTtBQU5KO0FBU0U7RUFDRSxxQkFBQTtBQVBKO0FBVUU7RUFDRSx1QkFBQTtBQVJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vICRib2R5LWNvbG9yOiBncmVlbjtcXG5cXG4vLyBib2R5IHtcXG4vLyAgIGNvbG9yOiAkYm9keS1jb2xvcjtcXG4vLyB9XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG5cXG4gIC5zcXVhcmUge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgfVxcblxcbiAgLnNoaXAtc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIH1cXG5cXG4gIC5kYW1hZ2VkLXNoaXAtc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgfVxcblxcbiAgLm1pc3NlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuaW1wb3J0IHsgc3F1YXJlQ2xpY2tJbmRleCwgYWN0aXZlR2FtZUJvYXJkIH0gZnJvbSAnLi9pbmRleCdcblxuXG5mdW5jdGlvbiBkb21UaGluZygpIHtcbiAgICBjb25zb2xlLmxvZygnSSBhbSBhIGRvbSBmdW5jdGlvbicpXG5cbn1cblxuZnVuY3Rpb24gc3F1YXJlQ2ljayhjbGlja2VkU3F1YXJlKSB7XG4gICAgY29uc29sZS5sb2coJ0kgYW0gYSBzcXVhcmUgY2xpY2sgJyArIGNsaWNrZWRTcXVhcmUudGFyZ2V0LmlkKVxuICAgIGFjdGl2ZUdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNsaWNrZWRTcXVhcmUudGFyZ2V0LmlkKTtcblxuXG4gICAgaWYgKGFjdGl2ZUdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNsaWNrZWRTcXVhcmUudGFyZ2V0LmlkKSAhPSAnaGl0Jykge1xuICAgICAgICBkaXNwbGF5TWlzcyhjbGlja2VkU3F1YXJlLnRhcmdldC5pZClcbiAgICB9XG4gICAgXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVHYW1lQm9hcmQuc2hpcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGRpc3BsYXlTaGlwKGFjdGl2ZUdhbWVCb2FyZC5zaGlwQXJyYXlbaV0pXG4gICAgICAgIGRpc3BsYXlIaXQoYWN0aXZlR2FtZUJvYXJkLnNoaXBBcnJheVtpXSlcblxuICAgIH1cblxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoKSB7XG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgZm9yICh2YXIgaSA9IDEwOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICAgICAgbGV0IHNxdWFyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBzcXVhcmVEaXYuaWQgPSBqICsgJywnICsgaVxuICAgICAgICAgICAgc3F1YXJlRGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpXG4gICAgICAgICAgICBzcXVhcmVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzcXVhcmVDaWNrKTtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoc3F1YXJlRGl2KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWlzcyhtaXNzZWRJZCkge1xuICAgIGxldCBtaXNzZWRTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtaXNzZWRJZCk7XG4gICAgbWlzc2VkU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTaGlwKHNoaXBUb0Rpc3BsYXkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2hpcFRvRGlzcGxheS5jb29yZGluYXRlczogJyArIHNoaXBUb0Rpc3BsYXkuY29vcmRpbmF0ZXNbMV0pXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoaXBUb0Rpc3BsYXkuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NoaXBUb0Rpc3BsYXkuY29vcmRpbmF0ZXM6ICcgKyBzaGlwVG9EaXNwbGF5LmNvb3JkaW5hdGVzW2ldKVxuICAgICAgICBsZXQgc2hpcFNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoaXBUb0Rpc3BsYXkuY29vcmRpbmF0ZXNbaV0pO1xuICAgICAgICBzaGlwU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtc3F1YXJlJylcbiAgICB9XG5cbn1cblxuXG5mdW5jdGlvbiBkaXNwbGF5SGl0KHNoaXBUb0Rpc3BsYXkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2hpcFRvRGlzcGxheS5jb29yZGluYXRlczogJyArIHNoaXBUb0Rpc3BsYXkuY29vcmRpbmF0ZXNbMV0pXG4gICAgaWYgKHNoaXBUb0Rpc3BsYXkuZGFtYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3l1cCwgdGhlcmUgaXMgZGFtYWdlJylcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGlwVG9EaXNwbGF5LmRhbWFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwVG9EaXNwbGF5LmRhbWFnZVtpXSk7XG4gICAgICAgICAgICBzaGlwU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2RhbWFnZWQtc2hpcC1zcXVhcmUnKVxuICAgICAgICB9XG5cbiAgICB9XG5cblxufVxuXG5cbmV4cG9ydCB7IGRvbVRoaW5nLCBjcmVhdGVHcmlkLCBkaXNwbGF5U2hpcCwgZGlzcGxheUhpdCwgc3F1YXJlQ2ljayB9IiwiaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gJy4vc2hpcCdcblxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lQm9hcmQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2dhbWUuanMgZmFjdG9yeSBmdW5jdGlvbiB3b3JrcycpXG4gICAgY29uc3Qgc2hpcEFycmF5ID0gW107XG5cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChuYW1lLCBzdGVybiwgYm93KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwbGFjZVNoaXAgaXMgY2FsbGVkJylcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IGNyZWF0ZVNoaXAobmFtZSwgc3Rlcm4sIGJvdyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1NoaXApXG4gICAgICAgIHNoaXBBcnJheS5wdXNoKG5ld1NoaXApXG4gICAgICAgIHJldHVybiBuZXdTaGlwXG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soaGl0Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgLy8gbGV0IGhpdENvb3JkaW5hdGVzID0gdGFyZ2V0LmlkXG4gICAgICAgIGxldCBoaXRSZXN1bHQgPSBoaXRDb29yZGluYXRlc1xuICAgICAgICBjb25zb2xlLmxvZygncmVjaWV2aW5nIGF0dGFjaycpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNoaXBBcnJheSlcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoaXBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2knKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSlcblxuICAgICAgICAgICAgbGV0IHNoaXBDb29yZGluYXRlcyA9IHNoaXBBcnJheVtpXS5jb29yZGluYXRlc1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoaXBDb29yZGluYXRlcy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBDb29yZGluYXRlc1tqXS50b1N0cmluZygpID09IGhpdENvb3JkaW5hdGVzLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpdCBzaGlwIGJlZm9yZSBoaXQnKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwQXJyYXlbaV0pXG4gICAgICAgICAgICAgICAgICAgIGhpdFJlc3VsdCA9ICdoaXQnO1xuICAgICAgICAgICAgICAgICAgICBzaGlwQXJyYXlbaV0uaGl0KGhpdENvb3JkaW5hdGVzKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGl0IHNoaXAgYWZ0ZXIgaGl0JylcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hpcEFycmF5W2ldKVxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gc2hpcEFycmF5W2ldXG5cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIHJldHVybiBoaXRSZXN1bHRcblxuXG5cblxuXG5cbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coc2hpcDEpXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKHNoaXAyKVxuXG5cblxuXG4gICAgfTtcblxuICAgIGNvbnN0IGV4aXN0ZW5jZSA9ICdleGlzdHMnO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHNoaXBBcnJheSxcbiAgICAgICAgZXhpc3RlbmNlXG4gICAgfTtcblxuXG59O1xuXG5cbmV4cG9ydCB7IGNyZWF0ZUdhbWVCb2FyZCB9IiwiaW1wb3J0IHsgY3JlYXRlR2FtZUJvYXJkLCBwbGFjZVNoaXAgfSBmcm9tICcuL2dhbWVCb2FyZCdcbmltcG9ydCB7IGRvbVRoaW5nLCBjcmVhdGVHcmlkLCBkaXNwbGF5U2hpcCwgZGlzcGxheUhpdCB9IGZyb20gJy4vZG9tU3R1ZmYnXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmxldCBhY3RpdmVHYW1lQm9hcmQgPSBbXVxuXG5cbmNyZWF0ZUdyaWQoKVxuY29uc3QgZmlyc3RHYW1lQm9hcmQgPSBjcmVhdGVHYW1lQm9hcmQoKVxuY29uc3QgZmlyc3RTaGlwID0gZmlyc3RHYW1lQm9hcmQucGxhY2VTaGlwKCdITVMgQ3VjdW1iZXInLCBbMSwgMV0sIFsxLCAzXSlcbmNvbnN0IHNlY29uZFNoaXAgPSBmaXJzdEdhbWVCb2FyZC5wbGFjZVNoaXAoJ0hNUyBQb3RhdG8nLCBbNCwgNF0sIFs3LCA0XSlcblxuYWN0aXZlR2FtZUJvYXJkID0gZmlyc3RHYW1lQm9hcmRcbmNvbnNvbGUubG9nKCdmaXJzdFNoaXAnKVxuY29uc29sZS5sb2coZmlyc3RTaGlwKVxuY29uc29sZS5sb2coJ3NlY29uZFNoaXAnKVxuY29uc29sZS5sb2coc2Vjb25kU2hpcClcblxuXG5cblxuLy8gZGlzcGxheVNoaXAoZmlyc3RTaGlwKVxuLy8gZGlzcGxheVNoaXAoc2Vjb25kU2hpcClcbi8vIGRpc3BsYXlIaXQoZmlyc3RTaGlwKVxuLy8gZGlzcGxheUhpdChzZWNvbmRTaGlwKVxuXG5cbi8vIGNvbnNvbGUubG9nKCdmaXJzdFNoaXAuZGFtYWdlIGJlZm9yZSBhdHRhY2snKVxuLy8gY29uc29sZS5sb2coZmlyc3RTaGlwLmRhbWFnZSlcblxuXG5cbi8vIGxldCBoaXRDb29yZGluYXRlcyA9IFs0LDFdXG4vLyBsZXQgaGl0U2hpcCA9IGZpcnN0R2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soaGl0Q29vcmRpbmF0ZXMpO1xuLy8gY29uc29sZS5sb2coJ2hpdCByZXN1bHQ6ICcgKyBoaXRTaGlwKVxuXG5cblxuXG4vLyBjb25zb2xlLmxvZygnZmlyc3RTaGlwLmRhbWFnZSBhZnRlciBhdHRhY2snKVxuLy8gY29uc29sZS5sb2coZmlyc3RTaGlwLmRhbWFnZSlcblxuLy8gaWYgKGhpdFNoaXAgIT0gJ21pc3MnKSB7XG4vLyAgICAgaGl0U2hpcC5oaXQoaGl0Q29vcmRpbmF0ZXMpXG4vLyB9XG5cbi8vIGNvbnNvbGUubG9nKCdzaGlwIGRhbWFnZScpXG4vLyBjb25zb2xlLmxvZyhzZWNvbmRTaGlwLmRhbWFnZSlcbi8vIGNvbnNvbGUubG9nKCdzaGlwIHN1bmsgeWV0PycgKVxuLy8gY29uc29sZS5sb2coc2Vjb25kU2hpcC5pc1N1bmsoKSlcblxuLy8gaGl0Q29vcmRpbmF0ZXMgPSBbMSwzXVxuLy8gaGl0U2hpcCA9IGZpcnN0R2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soaGl0Q29vcmRpbmF0ZXMpO1xuXG4vLyBpZiAoaGl0U2hpcCAhPSAnbWlzcycpIHtcbi8vICAgICBoaXRTaGlwLmhpdChoaXRDb29yZGluYXRlcylcbi8vIH1cbi8vIGNvbnNvbGUubG9nKCdzaGlwIGRhbWFnZScpXG4vLyBjb25zb2xlLmxvZyhzZWNvbmRTaGlwLmRhbWFnZSlcbi8vIGNvbnNvbGUubG9nKCdzaGlwIHN1bmsgeWV0PycgKVxuLy8gY29uc29sZS5sb2coc2Vjb25kU2hpcC5pc1N1bmsoKSlcblxuLy8gaGl0Q29vcmRpbmF0ZXMgPSAnMSwzJ1xuLy8gaGl0U2hpcCA9IGZpcnN0R2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soaGl0Q29vcmRpbmF0ZXMpO1xuXG4vLyBpZiAoaGl0U2hpcCAhPSAnbWlzcycpIHtcbi8vICAgICBoaXRTaGlwLmhpdChoaXRDb29yZGluYXRlcylcbi8vIH1cbi8vIGNvbnNvbGUubG9nKCdzaGlwIGRhbWFnZScpXG4vLyBjb25zb2xlLmxvZyhmaXJzdFNoaXAuZGFtYWdlKVxuLy8gY29uc29sZS5sb2coJ3NoaXAgc3VuayB5ZXQ/JyApXG4vLyBjb25zb2xlLmxvZyhmaXJzdFNoaXAuaXNTdW5rKCkpXG5cbi8vIGhpdENvb3JkaW5hdGVzID0gJzEsNCdcbi8vIGhpdFNoaXAgPSBmaXJzdEdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGhpdENvb3JkaW5hdGVzKTtcblxuLy8gaWYgKGhpdFNoaXAgIT0gJ21pc3MnKSB7XG4vLyAgICAgaGl0U2hpcC5oaXQoaGl0Q29vcmRpbmF0ZXMpXG4vLyB9XG4vLyBjb25zb2xlLmxvZygnc2hpcCBkYW1hZ2UnKVxuLy8gY29uc29sZS5sb2coZmlyc3RTaGlwLmRhbWFnZSlcbi8vIGNvbnNvbGUubG9nKCdzaGlwIHN1bmsgeWV0PycgKVxuLy8gY29uc29sZS5sb2coZmlyc3RTaGlwLmlzU3VuaygpKS8vIGNvbnN0IGhpdE1lc3NhZ2UgPSBmaXJzdFNoaXAuaGl0KHRydWUpXG5cblxuLy8gaGl0Q29vcmRpbmF0ZXMgPSAnMSw1J1xuLy8gaGl0U2hpcCA9IGZpcnN0R2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soaGl0Q29vcmRpbmF0ZXMpO1xuXG4vLyBpZiAoaGl0U2hpcCAhPSAnbWlzcycpIHtcbi8vICAgICBoaXRTaGlwLmhpdChoaXRDb29yZGluYXRlcylcbi8vIH1cbi8vIGNvbnNvbGUubG9nKCdzaGlwIGRhbWFnZScpXG4vLyBjb25zb2xlLmxvZyhmaXJzdFNoaXAuZGFtYWdlKVxuLy8gY29uc29sZS5sb2coJ3NoaXAgc3VuayB5ZXQ/JyApXG4vLyBjb25zb2xlLmxvZyhmaXJzdFNoaXAuaXNTdW5rKCkpLy8gY29uc3QgaGl0TWVzc2FnZSA9IGZpcnN0U2hpcC5oaXQodHJ1ZSlcblxuXG5leHBvcnQgeyBhY3RpdmVHYW1lQm9hcmQgfVxuIiwiXG5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXAobmFtZSwgc3Rlcm4sIGJvdykge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzaGlwLmpzIGZhY3RvcnkgZnVuY3Rpb24gd29ya3MnKVxuXG5cbiAgICAvL3R1cm4gc3Rlcm4gY29vcmRpbmF0ZXMgaW50byB0d28gaW50ZWdlcnNcbiAgICAvL3R1cm4gYm93IGNvb3JkaW5hdGVzIGludG8gdHdvIGludGVnZXJzXG5cblxuXG4gICAgbGV0IHNoaXBYMSA9IHN0ZXJuWzBdO1xuICAgIGxldCBzaGlwWDIgPSBib3dbMF07XG5cbiAgICAvLyBjb25zb2xlLmxvZygnc2hpcFgxJylcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwWDEpXG4gICAgLy8gY29uc29sZS5sb2coJ3NoaXBYMicpXG4gICAgLy8gY29uc29sZS5sb2coc2hpcFgyKVxuXG4gICAgbGV0IHNoaXBZMSA9IHN0ZXJuWzFdO1xuICAgIGxldCBzaGlwWTIgPSBib3dbMV07XG5cbiAgICAvLyBjb25zb2xlLmxvZygnc2hpcFkxJylcbiAgICAvLyBjb25zb2xlLmxvZyhzaGlwWTEpXG4gICAgLy8gY29uc29sZS5sb2coJ3NoaXBZMicpXG4gICAgLy8gY29uc29sZS5sb2coc2hpcFkyKVxuXG5cbiAgICBsZXQgbG9hID0gMDtcblxuICAgIGxldCBjb29yZGluYXRlcyA9IFtdXG4gIFxuXG4gICAgaWYgKHNoaXBYMSA9PSBzaGlwWDIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3ZlcnRpY2FsIHNoaXAnKVxuICAgICAgICAvLyB2ZXJ0aWNhbCBzaGlwXG4gICAgICAgIGxvYSA9IHNoaXBZMiAtIHNoaXBZMSArIDFcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2E7IGkrKykge1xuXG5cbiAgICAgICAgICAgIGNvb3JkaW5hdGVzW2ldID0gW3NoaXBYMSwgc2hpcFkxICsgaV1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb29yZGluYXRlcycpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXNbaV0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nvb3JkaW5hdGVzJylcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaG9yaXpvbnRhbCBzaGlwXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdob3Jpem9udGFsIHNoaXAnKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdob3Jpem9udGFsIHNoaXAnKVxuICAgICAgICBsb2EgPSBzaGlwWDIgLSBzaGlwWDEgKyAxXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9hOyBpKyspIHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzW2ldID0gW3NoaXBYMSArIGksIHNoaXBZMV1cbiAgICAgICAgICAgIC8vIGNvb3JkaW5hdGVzW2ldID0gJ2Jvb2JzJ1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY29vcmRpbmF0ZXMnKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzW2ldKVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb29yZGluYXRlcycpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzKVxuXG4gICAgfVxuXG4vLyBjb25zb2xlLmxvZyhjb29yZGluYXRlcylcblxuICAgIGxldCBkYW1hZ2UgPSBbXTtcbiAgICBsZXQgc3VuayA9IGZhbHNlXG5cbiAgICBmdW5jdGlvbiBoaXQobG9jYXRpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lICsgJyBnZXR0aW5nIGhpdCcpXG4gICAgICAgIHRoaXMuZGFtYWdlLnB1c2gobG9jYXRpb24pO1xuXG4gICAgICAgIHRoaXMuZGFtYWdlLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhIDwgYilcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGFtYWdlKVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRhbWFnZVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzaGlwLmpzIGRhbWFnZScpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGFtYWdlLmxlbmd0aClcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NoaXAuanMgbG9hJylcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sb2EpXG5cbiAgICAgICAgaWYgKHRoaXMuZGFtYWdlLmxlbmd0aCA9PSB0aGlzLmxvYSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBsb2EsXG4gICAgICAgIGRhbWFnZSxcbiAgICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rXG4gICAgfTtcblxuXG59O1xuXG5leHBvcnQgeyBjcmVhdGVTaGlwIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=