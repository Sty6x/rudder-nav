"use strict";
(self["webpackChunk_sty6x_rudder_nav"] = self["webpackChunk_sty6x_rudder_nav"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/img/home.png */ "./src/resources/img/home.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/img/compass (1).png */ "./src/resources/img/compass (1).png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/img/chat.png */ "./src/resources/img/chat.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/img/user.png */ "./src/resources/img/user.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/img/settings.png */ "./src/resources/img/settings.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ol, ul {\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n\nmain > div{\n  height: 100%;\n}\n\n\n@keyframes compress-nav {\n0%{\n  gap:40px\n}\n25%{\n  gap:30px;\n}\n50%{\n gap: 15px;\n}\n100%{\n  gap:0px;\n}\n}\n@keyframes expand-nav {\n0%{\n  gap:0px;\n}\n25%{\n  gap: 15px;\n}\n50%{\n  gap:30px;\n}\n100%{\n  gap:40px;\n}\n}\n\n@keyframes expand-item {\n0%{\n  background-size: 0px 0px;\n  transform:rotate(0deg);\n}\n25%{\n  background-size: 10px 10px;\n}\n50%{\n  background-size: 20px 20px;\n}\n100%{\n  background-size: 30px 30px;\n  transform:rotate(360deg);\n}\n}\n\n#main-item{\n  font-weight:700;\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 30px 30px;\n  width: 30px;\n  height: 30px;\n  background-position: center;\n}\nnav{\n  display: flex;\n  justify-content:center;\n  position: sticky;\n  bottom: 20px;\n  z-index: 99;\n}\n\n#rudder-item-list{\n  background-color: #ebdbb2;\n  color: #f9f5d7;\n  font-size:2rem;\n} \n\n\n.left-rud-inactive,.right-rud-inactive{\n  animation-name: fade-content;\n  animation-duration: 150ms;\n  animation-fill-mode: forwards;\n  transition: transform 250ms ease-in;\n}\n\n\n#loc{\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n#msg{\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n#user{\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n#settings{\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\n.left-rud-active>li,.right-rud-active>li{\n  width: 30px;\n  height: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  animation-name: expand-item;\n  animation-duration: 250ms;\n  animation-fill-mode: forwards;\n}\n\n/* this is for container */\n.left-rud-active,.right-rud-active{\n  display:flex;\n  gap: 40px;\n}\n\n.rudder-active{\n  display: flex;\n  align-items: center;\n  padding:20px 35px;\n  transition:padding 100ms ease-in ;\n  border-radius:40px;\n  animation-name: expand-nav;\n  animation-duration: 300ms;\n  animation-fill-mode: forwards; \n}\n\n.rudder-inactive{\n  display:flex;\n  animation-name: compress-nav;\n  animation-duration: 200ms;\n  animation-fill-mode: forwards;\n  transition:padding 100ms ease-in ;\n  padding: 20px 20px;\n  border-radius: 40px;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,gBAAgB;CAChB,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;;AAGA;EACE,YAAY;AACd;;;AAGA;AACA;EACE;AACF;AACA;EACE,QAAQ;AACV;AACA;CACC,SAAS;AACV;AACA;EACE,OAAO;AACT;AACA;AACA;AACA;EACE,OAAO;AACT;AACA;EACE,SAAS;AACX;AACA;EACE,QAAQ;AACV;AACA;EACE,QAAQ;AACV;AACA;;AAEA;AACA;EACE,wBAAwB;EACxB,sBAAsB;AACxB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,0BAA0B;EAC1B,wBAAwB;AAC1B;AACA;;AAEA;EACE,eAAe;EACf,wDAAgD;EAChD,0BAA0B;EAC1B,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,cAAc;AAChB;;;AAGA;EACE,4BAA4B;EAC5B,yBAAyB;EACzB,6BAA6B;EAC7B,mCAAmC;AACrC;;;AAGA;EACE,wDAAuD;AACzD;AACA;EACE,wDAAgD;AAClD;;AAEA;EACE,wDAAgD;AAClD;AACA;EACE,wDAAoD;AACtD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,4BAA4B;EAC5B,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA,0BAA0B;AAC1B;EACE,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,iCAAiC;EACjC,kBAAkB;EAClB,0BAA0B;EAC1B,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,yBAAyB;EACzB,6BAA6B;EAC7B,iCAAiC;EACjC,kBAAkB;EAClB,mBAAmB;AACrB","sourcesContent":["ol, ul {\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n\nmain > div{\n  height: 100%;\n}\n\n\n@keyframes compress-nav {\n0%{\n  gap:40px\n}\n25%{\n  gap:30px;\n}\n50%{\n gap: 15px;\n}\n100%{\n  gap:0px;\n}\n}\n@keyframes expand-nav {\n0%{\n  gap:0px;\n}\n25%{\n  gap: 15px;\n}\n50%{\n  gap:30px;\n}\n100%{\n  gap:40px;\n}\n}\n\n@keyframes expand-item {\n0%{\n  background-size: 0px 0px;\n  transform:rotate(0deg);\n}\n25%{\n  background-size: 10px 10px;\n}\n50%{\n  background-size: 20px 20px;\n}\n100%{\n  background-size: 30px 30px;\n  transform:rotate(360deg);\n}\n}\n\n#main-item{\n  font-weight:700;\n  background-image:url('./resources/img/home.png');\n  background-size: 30px 30px;\n  width: 30px;\n  height: 30px;\n  background-position: center;\n}\nnav{\n  display: flex;\n  justify-content:center;\n  position: sticky;\n  bottom: 20px;\n  z-index: 99;\n}\n\n#rudder-item-list{\n  background-color: #ebdbb2;\n  color: #f9f5d7;\n  font-size:2rem;\n} \n\n\n.left-rud-inactive,.right-rud-inactive{\n  animation-name: fade-content;\n  animation-duration: 150ms;\n  animation-fill-mode: forwards;\n  transition: transform 250ms ease-in;\n}\n\n\n#loc{\n  background-image:url('./resources/img/compass (1).png');\n}\n#msg{\n  background-image:url('./resources/img/chat.png');\n}\n\n#user{\n  background-image:url('./resources/img/user.png');\n}\n#settings{\n  background-image:url('./resources/img/settings.png');\n}\n\n.left-rud-active>li,.right-rud-active>li{\n  width: 30px;\n  height: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  animation-name: expand-item;\n  animation-duration: 250ms;\n  animation-fill-mode: forwards;\n}\n\n/* this is for container */\n.left-rud-active,.right-rud-active{\n  display:flex;\n  gap: 40px;\n}\n\n.rudder-active{\n  display: flex;\n  align-items: center;\n  padding:20px 35px;\n  transition:padding 100ms ease-in ;\n  border-radius:40px;\n  animation-name: expand-nav;\n  animation-duration: 300ms;\n  animation-fill-mode: forwards; \n}\n\n.rudder-inactive{\n  display:flex;\n  animation-name: compress-nav;\n  animation-duration: 200ms;\n  animation-fill-mode: forwards;\n  transition:padding 100ms ease-in ;\n  padding: 20px 20px;\n  border-radius: 40px;\n}\n\n\n"],"sourceRoot":""}]);
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
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


// const main = document.querySelector('nav')
// const rudderContainer = document.createElement('div');
// const rudderItemList = document.createElement('ul')
// const leftRudItem = document.createElement('div')
// const rightRudItem = document.createElement('div')
// const locLi = document.createElement('li')
// const msgLi = document.createElement('li')
// const mainItmLi = document.createElement('li')
// const userLi = document.createElement('li')
// const settingsLi = document.createElement('li')



// export function createNav(container) {
//   leftRudItem.append(locLi, msgLi)
//   rightRudItem.append(userLi, settingsLi)
//   rudderItemList.append(leftRudItem, mainItmLi, rightRudItem)
//   rudderContainer.appendChild(rudderItemList)
//   container.appendChild(rudderContainer)
//   console.log(container)
//   applyIDClassAttr()
// }


// function setIDClass(element, id, cls) {
//   const attributes = {
//     id,
//     class: cls
//   }
//   for (let key in attributes) {
//     element.setAttribute(key, attributes[key])
//   }
// }

// function applyIDClassAttr() {
//   setIDClass(rudderContainer, 'rudder-container', '')
//   setIDClass(rudderItemList, 'rudder-item-list', 'rudder-active')
//   setIDClass(leftRudItem, 'left-rud-item', 'left-rud-active')
//   setIDClass(rightRudItem, 'right-rud-item', 'right-rud-active')
//   setIDClass(locLi, 'loc', '')
//   setIDClass(msgLi, 'msg', '')
//   setIDClass(mainItmLi, 'main-item', '')
//   setIDClass(userLi, 'user', '')
//   setIDClass(settingsLi, 'settings', '')
// }

// // fix this so that we can export this function
// // module will provide the properties needed since
// // the this module will create a rudder navigation once the
// // create nav is invoked

// function rudderAnimation(target) {
//   if (target.matches('li')) {
//     if (!rudderItemList.classList.contains('rudder-inactive')) {

//       rudderItemList.removeAttribute('class', 'rudder-active')
//       rudderItemList.classList.add('rudder-inactive')

//       rightRudItem.classList.remove('right-rud-active')
//       leftRudItem.classList.remove('left-rud-active')
//       rightRudItem.classList.add('right-rud-inactive')
//       leftRudItem.classList.add('left-rud-inactive')

//     } else if (rudderItemList.classList.contains('rudder-inactive')) {

//       rudderItemList.removeAttribute('class', 'rudder-inactive')
//       rudderItemList.classList.add('rudder-active')

//       rightRudItem.classList.remove('right-rud-inactive')
//       leftRudItem.classList.remove('left-rud-inactive')
//       rightRudItem.classList.add('right-rud-active')
//       leftRudItem.classList.add('left-rud-active')
//     }
//   }
// }

// rudderContainer.addEventListener('click', (e) => {
//   const target = e.target;
//   rudderAnimation(target)
// })

// createNav(main)


/***/ }),

/***/ "./src/resources/img/chat.png":
/*!************************************!*\
  !*** ./src/resources/img/chat.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fe05701fb6fe113282c.png";

/***/ }),

/***/ "./src/resources/img/compass (1).png":
/*!*******************************************!*\
  !*** ./src/resources/img/compass (1).png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "651842f4348992d6d3c1.png";

/***/ }),

/***/ "./src/resources/img/home.png":
/*!************************************!*\
  !*** ./src/resources/img/home.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a00de299cb98fef142da.png";

/***/ }),

/***/ "./src/resources/img/settings.png":
/*!****************************************!*\
  !*** ./src/resources/img/settings.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e1d8aec7a8d7e02ae41.png";

/***/ }),

/***/ "./src/resources/img/user.png":
/*!************************************!*\
  !*** ./src/resources/img/user.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "557587208eb9e232f2ca.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9Ac3R5NngvcnVkZGVyLW5hdi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vQHN0eTZ4L3J1ZGRlci1uYXYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL0BzdHk2eC9ydWRkZXItbmF2Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vQHN0eTZ4L3J1ZGRlci1uYXYvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vQHN0eTZ4L3J1ZGRlci1uYXYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vQHN0eTZ4L3J1ZGRlci1uYXYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0BzdHk2eC9ydWRkZXItbmF2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0BzdHk2eC9ydWRkZXItbmF2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0BzdHk2eC9ydWRkZXItbmF2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vQHN0eTZ4L3J1ZGRlci1uYXYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ac3R5NngvcnVkZGVyLW5hdi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9yZXNvdXJjZXMvaW1nL2hvbWUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9yZXNvdXJjZXMvaW1nL2NvbXBhc3MgKDEpLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vcmVzb3VyY2VzL2ltZy9jaGF0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vcmVzb3VyY2VzL2ltZy91c2VyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vcmVzb3VyY2VzL2ltZy9zZXR0aW5ncy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwib2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcblxcbm1haW4gPiBkaXZ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbkBrZXlmcmFtZXMgY29tcHJlc3MtbmF2IHtcXG4wJXtcXG4gIGdhcDo0MHB4XFxufVxcbjI1JXtcXG4gIGdhcDozMHB4O1xcbn1cXG41MCV7XFxuIGdhcDogMTVweDtcXG59XFxuMTAwJXtcXG4gIGdhcDowcHg7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGV4cGFuZC1uYXYge1xcbjAle1xcbiAgZ2FwOjBweDtcXG59XFxuMjUle1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG41MCV7XFxuICBnYXA6MzBweDtcXG59XFxuMTAwJXtcXG4gIGdhcDo0MHB4O1xcbn1cXG59XFxuXFxuQGtleWZyYW1lcyBleHBhbmQtaXRlbSB7XFxuMCV7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDBweCAwcHg7XFxuICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xcbn1cXG4yNSV7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTBweDtcXG59XFxuNTAle1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxufVxcbjEwMCV7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMzBweDtcXG4gIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcXG59XFxufVxcblxcbiNtYWluLWl0ZW17XFxuICBmb250LXdlaWdodDo3MDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5uYXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBib3R0b206IDIwcHg7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuXFxuI3J1ZGRlci1pdGVtLWxpc3R7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJkYmIyO1xcbiAgY29sb3I6ICNmOWY1ZDc7XFxuICBmb250LXNpemU6MnJlbTtcXG59IFxcblxcblxcbi5sZWZ0LXJ1ZC1pbmFjdGl2ZSwucmlnaHQtcnVkLWluYWN0aXZle1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGUtY29udGVudDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG5cXG4jbG9je1xcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4jbXNne1xcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG4jdXNlcntcXG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuI3NldHRpbmdze1xcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbn1cXG5cXG4ubGVmdC1ydWQtYWN0aXZlPmxpLC5yaWdodC1ydWQtYWN0aXZlPmxpe1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGV4cGFuZC1pdGVtO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyNTBtcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4vKiB0aGlzIGlzIGZvciBjb250YWluZXIgKi9cXG4ubGVmdC1ydWQtYWN0aXZlLC5yaWdodC1ydWQtYWN0aXZle1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4ucnVkZGVyLWFjdGl2ZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzoyMHB4IDM1cHg7XFxuICB0cmFuc2l0aW9uOnBhZGRpbmcgMTAwbXMgZWFzZS1pbiA7XFxuICBib3JkZXItcmFkaXVzOjQwcHg7XFxuICBhbmltYXRpb24tbmFtZTogZXhwYW5kLW5hdjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXFxufVxcblxcbi5ydWRkZXItaW5hY3RpdmV7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBhbmltYXRpb24tbmFtZTogY29tcHJlc3MtbmF2O1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgdHJhbnNpdGlvbjpwYWRkaW5nIDEwMG1zIGVhc2UtaW4gO1xcbiAgcGFkZGluZzogMjBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7O0FBR0E7RUFDRSxZQUFZO0FBQ2Q7OztBQUdBO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7QUFDQTtDQUNDLFNBQVM7QUFDVjtBQUNBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFFBQVE7QUFDVjtBQUNBO0VBQ0UsUUFBUTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCO0FBQ0E7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0RBQWdEO0VBQ2hELDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7O0FBR0E7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixtQ0FBbUM7QUFDckM7OztBQUdBO0VBQ0Usd0RBQXVEO0FBQ3pEO0FBQ0E7RUFDRSx3REFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSx3REFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLHdEQUFvRDtBQUN0RDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJvbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxubWFpbiA+IGRpdntcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuQGtleWZyYW1lcyBjb21wcmVzcy1uYXYge1xcbjAle1xcbiAgZ2FwOjQwcHhcXG59XFxuMjUle1xcbiAgZ2FwOjMwcHg7XFxufVxcbjUwJXtcXG4gZ2FwOiAxNXB4O1xcbn1cXG4xMDAle1xcbiAgZ2FwOjBweDtcXG59XFxufVxcbkBrZXlmcmFtZXMgZXhwYW5kLW5hdiB7XFxuMCV7XFxuICBnYXA6MHB4O1xcbn1cXG4yNSV7XFxuICBnYXA6IDE1cHg7XFxufVxcbjUwJXtcXG4gIGdhcDozMHB4O1xcbn1cXG4xMDAle1xcbiAgZ2FwOjQwcHg7XFxufVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGV4cGFuZC1pdGVtIHtcXG4wJXtcXG4gIGJhY2tncm91bmQtc2l6ZTogMHB4IDBweDtcXG4gIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XFxufVxcbjI1JXtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMHB4O1xcbn1cXG41MCV7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXG59XFxuMTAwJXtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweCAzMHB4O1xcbiAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xcbn1cXG59XFxuXFxuI21haW4taXRlbXtcXG4gIGZvbnQtd2VpZ2h0OjcwMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuL3Jlc291cmNlcy9pbWcvaG9tZS5wbmcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweCAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcbm5hdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG5cXG4jcnVkZGVyLWl0ZW0tbGlzdHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmRiYjI7XFxuICBjb2xvcjogI2Y5ZjVkNztcXG4gIGZvbnQtc2l6ZToycmVtO1xcbn0gXFxuXFxuXFxuLmxlZnQtcnVkLWluYWN0aXZlLC5yaWdodC1ydWQtaW5hY3RpdmV7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZS1jb250ZW50O1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW47XFxufVxcblxcblxcbiNsb2N7XFxuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi9yZXNvdXJjZXMvaW1nL2NvbXBhc3MgKDEpLnBuZycpO1xcbn1cXG4jbXNne1xcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4vcmVzb3VyY2VzL2ltZy9jaGF0LnBuZycpO1xcbn1cXG5cXG4jdXNlcntcXG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuL3Jlc291cmNlcy9pbWcvdXNlci5wbmcnKTtcXG59XFxuI3NldHRpbmdze1xcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4vcmVzb3VyY2VzL2ltZy9zZXR0aW5ncy5wbmcnKTtcXG59XFxuXFxuLmxlZnQtcnVkLWFjdGl2ZT5saSwucmlnaHQtcnVkLWFjdGl2ZT5saXtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBleHBhbmQtaXRlbTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjUwbXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLyogdGhpcyBpcyBmb3IgY29udGFpbmVyICovXFxuLmxlZnQtcnVkLWFjdGl2ZSwucmlnaHQtcnVkLWFjdGl2ZXtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLnJ1ZGRlci1hY3RpdmV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6MjBweCAzNXB4O1xcbiAgdHJhbnNpdGlvbjpwYWRkaW5nIDEwMG1zIGVhc2UtaW4gO1xcbiAgYm9yZGVyLXJhZGl1czo0MHB4O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGV4cGFuZC1uYXY7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IFxcbn1cXG5cXG4ucnVkZGVyLWluYWN0aXZle1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGNvbXByZXNzLW5hdjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIHRyYW5zaXRpb246cGFkZGluZyAxMDBtcyBlYXNlLWluIDtcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG4vLyBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jylcbi8vIGNvbnN0IHJ1ZGRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gY29uc3QgcnVkZGVySXRlbUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4vLyBjb25zdCBsZWZ0UnVkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyBjb25zdCByaWdodFJ1ZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gY29uc3QgbG9jTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4vLyBjb25zdCBtc2dMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbi8vIGNvbnN0IG1haW5JdG1MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbi8vIGNvbnN0IHVzZXJMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbi8vIGNvbnN0IHNldHRpbmdzTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlTmF2KGNvbnRhaW5lcikge1xuLy8gICBsZWZ0UnVkSXRlbS5hcHBlbmQobG9jTGksIG1zZ0xpKVxuLy8gICByaWdodFJ1ZEl0ZW0uYXBwZW5kKHVzZXJMaSwgc2V0dGluZ3NMaSlcbi8vICAgcnVkZGVySXRlbUxpc3QuYXBwZW5kKGxlZnRSdWRJdGVtLCBtYWluSXRtTGksIHJpZ2h0UnVkSXRlbSlcbi8vICAgcnVkZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHJ1ZGRlckl0ZW1MaXN0KVxuLy8gICBjb250YWluZXIuYXBwZW5kQ2hpbGQocnVkZGVyQ29udGFpbmVyKVxuLy8gICBjb25zb2xlLmxvZyhjb250YWluZXIpXG4vLyAgIGFwcGx5SURDbGFzc0F0dHIoKVxuLy8gfVxuXG5cbi8vIGZ1bmN0aW9uIHNldElEQ2xhc3MoZWxlbWVudCwgaWQsIGNscykge1xuLy8gICBjb25zdCBhdHRyaWJ1dGVzID0ge1xuLy8gICAgIGlkLFxuLy8gICAgIGNsYXNzOiBjbHNcbi8vICAgfVxuLy8gICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuLy8gICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKVxuLy8gICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGFwcGx5SURDbGFzc0F0dHIoKSB7XG4vLyAgIHNldElEQ2xhc3MocnVkZGVyQ29udGFpbmVyLCAncnVkZGVyLWNvbnRhaW5lcicsICcnKVxuLy8gICBzZXRJRENsYXNzKHJ1ZGRlckl0ZW1MaXN0LCAncnVkZGVyLWl0ZW0tbGlzdCcsICdydWRkZXItYWN0aXZlJylcbi8vICAgc2V0SURDbGFzcyhsZWZ0UnVkSXRlbSwgJ2xlZnQtcnVkLWl0ZW0nLCAnbGVmdC1ydWQtYWN0aXZlJylcbi8vICAgc2V0SURDbGFzcyhyaWdodFJ1ZEl0ZW0sICdyaWdodC1ydWQtaXRlbScsICdyaWdodC1ydWQtYWN0aXZlJylcbi8vICAgc2V0SURDbGFzcyhsb2NMaSwgJ2xvYycsICcnKVxuLy8gICBzZXRJRENsYXNzKG1zZ0xpLCAnbXNnJywgJycpXG4vLyAgIHNldElEQ2xhc3MobWFpbkl0bUxpLCAnbWFpbi1pdGVtJywgJycpXG4vLyAgIHNldElEQ2xhc3ModXNlckxpLCAndXNlcicsICcnKVxuLy8gICBzZXRJRENsYXNzKHNldHRpbmdzTGksICdzZXR0aW5ncycsICcnKVxuLy8gfVxuXG4vLyAvLyBmaXggdGhpcyBzbyB0aGF0IHdlIGNhbiBleHBvcnQgdGhpcyBmdW5jdGlvblxuLy8gLy8gbW9kdWxlIHdpbGwgcHJvdmlkZSB0aGUgcHJvcGVydGllcyBuZWVkZWQgc2luY2Vcbi8vIC8vIHRoZSB0aGlzIG1vZHVsZSB3aWxsIGNyZWF0ZSBhIHJ1ZGRlciBuYXZpZ2F0aW9uIG9uY2UgdGhlXG4vLyAvLyBjcmVhdGUgbmF2IGlzIGludm9rZWRcblxuLy8gZnVuY3Rpb24gcnVkZGVyQW5pbWF0aW9uKHRhcmdldCkge1xuLy8gICBpZiAodGFyZ2V0Lm1hdGNoZXMoJ2xpJykpIHtcbi8vICAgICBpZiAoIXJ1ZGRlckl0ZW1MaXN0LmNsYXNzTGlzdC5jb250YWlucygncnVkZGVyLWluYWN0aXZlJykpIHtcblxuLy8gICAgICAgcnVkZGVySXRlbUxpc3QucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycsICdydWRkZXItYWN0aXZlJylcbi8vICAgICAgIHJ1ZGRlckl0ZW1MaXN0LmNsYXNzTGlzdC5hZGQoJ3J1ZGRlci1pbmFjdGl2ZScpXG5cbi8vICAgICAgIHJpZ2h0UnVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdyaWdodC1ydWQtYWN0aXZlJylcbi8vICAgICAgIGxlZnRSdWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQtcnVkLWFjdGl2ZScpXG4vLyAgICAgICByaWdodFJ1ZEl0ZW0uY2xhc3NMaXN0LmFkZCgncmlnaHQtcnVkLWluYWN0aXZlJylcbi8vICAgICAgIGxlZnRSdWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2xlZnQtcnVkLWluYWN0aXZlJylcblxuLy8gICAgIH0gZWxzZSBpZiAocnVkZGVySXRlbUxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdydWRkZXItaW5hY3RpdmUnKSkge1xuXG4vLyAgICAgICBydWRkZXJJdGVtTGlzdC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJywgJ3J1ZGRlci1pbmFjdGl2ZScpXG4vLyAgICAgICBydWRkZXJJdGVtTGlzdC5jbGFzc0xpc3QuYWRkKCdydWRkZXItYWN0aXZlJylcblxuLy8gICAgICAgcmlnaHRSdWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0LXJ1ZC1pbmFjdGl2ZScpXG4vLyAgICAgICBsZWZ0UnVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdsZWZ0LXJ1ZC1pbmFjdGl2ZScpXG4vLyAgICAgICByaWdodFJ1ZEl0ZW0uY2xhc3NMaXN0LmFkZCgncmlnaHQtcnVkLWFjdGl2ZScpXG4vLyAgICAgICBsZWZ0UnVkSXRlbS5jbGFzc0xpc3QuYWRkKCdsZWZ0LXJ1ZC1hY3RpdmUnKVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBydWRkZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuLy8gICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbi8vICAgcnVkZGVyQW5pbWF0aW9uKHRhcmdldClcbi8vIH0pXG5cbi8vIGNyZWF0ZU5hdihtYWluKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9