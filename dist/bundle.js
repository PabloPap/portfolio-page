/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/img sync \\.(png|jpe?g|svg)$":
/*!******************************************************!*\
  !*** ./src/img sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./DSC06627-800.jpg": "./src/img/DSC06627-800.jpg",
	"./DSC06627-w800.jpg": "./src/img/DSC06627-w800.jpg",
	"./Pavlos Papadopoulos Photography.png": "./src/img/Pavlos Papadopoulos Photography.png",
	"./Pavlos-Papadopoulos-Photography-w320.jpg": "./src/img/Pavlos-Papadopoulos-Photography-w320.jpg",
	"./Pavlos-Papadopoulos-Photography-w450.jpg": "./src/img/Pavlos-Papadopoulos-Photography-w450.jpg",
	"./Pavlos-Papadopoulos-Photography-w600.jpg": "./src/img/Pavlos-Papadopoulos-Photography-w600.jpg",
	"./Pavlos-Papadopoulos-Photography-w650.jpg": "./src/img/Pavlos-Papadopoulos-Photography-w650.jpg",
	"./Pavlos-Papadopoulos-Photography-w980.jpg": "./src/img/Pavlos-Papadopoulos-Photography-w980.jpg",
	"./Wikipedia Viewer.png": "./src/img/Wikipedia Viewer.png",
	"./Wikipedia-Viewer-w320.jpg": "./src/img/Wikipedia-Viewer-w320.jpg",
	"./Wikipedia-Viewer-w450.jpg": "./src/img/Wikipedia-Viewer-w450.jpg",
	"./Wikipedia-Viewer-w600.jpg": "./src/img/Wikipedia-Viewer-w600.jpg",
	"./black-sand-w1200.jpg": "./src/img/black-sand-w1200.jpg",
	"./black-sand-w1600.jpg": "./src/img/black-sand-w1600.jpg",
	"./black-sand-w800.jpg": "./src/img/black-sand-w800.jpg",
	"./glitch-2717632_1920.jpg": "./src/img/glitch-2717632_1920.jpg",
	"./glitch-w1280.jpg": "./src/img/glitch-w1280.jpg",
	"./glitch-w1600.jpg": "./src/img/glitch-w1600.jpg",
	"./glitch-w800.jpg": "./src/img/glitch-w800.jpg",
	"./logo-opt.svg": "./src/img/logo-opt.svg",
	"./logo.png": "./src/img/logo.png",
	"./maintenance-2422172_1920.jpg": "./src/img/maintenance-2422172_1920.jpg",
	"./maintenance-w320.jpg": "./src/img/maintenance-w320.jpg",
	"./maintenance-w450.jpg": "./src/img/maintenance-w450.jpg",
	"./metro-design template.png": "./src/img/metro-design template.png",
	"./metro-design-template-w320.jpg": "./src/img/metro-design-template-w320.jpg",
	"./metro-design-template-w450.jpg": "./src/img/metro-design-template-w450.jpg",
	"./metro-design-template-w600.jpg": "./src/img/metro-design-template-w600.jpg",
	"./metro-design_template_wommj9.png": "./src/img/metro-design_template_wommj9.png",
	"./pexels-photo-952670_tlhgvq-c_scale,q_50,w_1600.jpg": "./src/img/pexels-photo-952670_tlhgvq-c_scale,q_50,w_1600.jpg",
	"./pexels-photo-952670_tlhgvq-c_scale,q_50,w_1920.jpg": "./src/img/pexels-photo-952670_tlhgvq-c_scale,q_50,w_1920.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./src/img/DSC06627-800.jpg":
/*!**********************************!*\
  !*** ./src/img/DSC06627-800.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DSC06627-800.jpg";

/***/ }),

/***/ "./src/img/DSC06627-w800.jpg":
/*!***********************************!*\
  !*** ./src/img/DSC06627-w800.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DSC06627-w800.jpg";

/***/ }),

/***/ "./src/img/Pavlos Papadopoulos Photography.png":
/*!*****************************************************!*\
  !*** ./src/img/Pavlos Papadopoulos Photography.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pavlos Papadopoulos Photography.png";

/***/ }),

/***/ "./src/img/Pavlos-Papadopoulos-Photography-w320.jpg":
/*!**********************************************************!*\
  !*** ./src/img/Pavlos-Papadopoulos-Photography-w320.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pavlos-Papadopoulos-Photography-w320.jpg";

/***/ }),

/***/ "./src/img/Pavlos-Papadopoulos-Photography-w450.jpg":
/*!**********************************************************!*\
  !*** ./src/img/Pavlos-Papadopoulos-Photography-w450.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pavlos-Papadopoulos-Photography-w450.jpg";

/***/ }),

/***/ "./src/img/Pavlos-Papadopoulos-Photography-w600.jpg":
/*!**********************************************************!*\
  !*** ./src/img/Pavlos-Papadopoulos-Photography-w600.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pavlos-Papadopoulos-Photography-w600.jpg";

/***/ }),

/***/ "./src/img/Pavlos-Papadopoulos-Photography-w650.jpg":
/*!**********************************************************!*\
  !*** ./src/img/Pavlos-Papadopoulos-Photography-w650.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pavlos-Papadopoulos-Photography-w650.jpg";

/***/ }),

/***/ "./src/img/Pavlos-Papadopoulos-Photography-w980.jpg":
/*!**********************************************************!*\
  !*** ./src/img/Pavlos-Papadopoulos-Photography-w980.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pavlos-Papadopoulos-Photography-w980.jpg";

/***/ }),

/***/ "./src/img/Wikipedia Viewer.png":
/*!**************************************!*\
  !*** ./src/img/Wikipedia Viewer.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Wikipedia Viewer.png";

/***/ }),

/***/ "./src/img/Wikipedia-Viewer-w320.jpg":
/*!*******************************************!*\
  !*** ./src/img/Wikipedia-Viewer-w320.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Wikipedia-Viewer-w320.jpg";

/***/ }),

/***/ "./src/img/Wikipedia-Viewer-w450.jpg":
/*!*******************************************!*\
  !*** ./src/img/Wikipedia-Viewer-w450.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Wikipedia-Viewer-w450.jpg";

/***/ }),

/***/ "./src/img/Wikipedia-Viewer-w600.jpg":
/*!*******************************************!*\
  !*** ./src/img/Wikipedia-Viewer-w600.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Wikipedia-Viewer-w600.jpg";

/***/ }),

/***/ "./src/img/black-sand-w1200.jpg":
/*!**************************************!*\
  !*** ./src/img/black-sand-w1200.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/black-sand-w1200.jpg";

/***/ }),

/***/ "./src/img/black-sand-w1600.jpg":
/*!**************************************!*\
  !*** ./src/img/black-sand-w1600.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/black-sand-w1600.jpg";

/***/ }),

/***/ "./src/img/black-sand-w800.jpg":
/*!*************************************!*\
  !*** ./src/img/black-sand-w800.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/black-sand-w800.jpg";

/***/ }),

/***/ "./src/img/glitch-2717632_1920.jpg":
/*!*****************************************!*\
  !*** ./src/img/glitch-2717632_1920.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/glitch-2717632_1920.jpg";

/***/ }),

/***/ "./src/img/glitch-w1280.jpg":
/*!**********************************!*\
  !*** ./src/img/glitch-w1280.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/glitch-w1280.jpg";

/***/ }),

/***/ "./src/img/glitch-w1600.jpg":
/*!**********************************!*\
  !*** ./src/img/glitch-w1600.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/glitch-w1600.jpg";

/***/ }),

/***/ "./src/img/glitch-w800.jpg":
/*!*********************************!*\
  !*** ./src/img/glitch-w800.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/glitch-w800.jpg";

/***/ }),

/***/ "./src/img/logo-opt.svg":
/*!******************************!*\
  !*** ./src/img/logo-opt.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/logo-opt.svg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.png";

/***/ }),

/***/ "./src/img/maintenance-2422172_1920.jpg":
/*!**********************************************!*\
  !*** ./src/img/maintenance-2422172_1920.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/maintenance-2422172_1920.jpg";

/***/ }),

/***/ "./src/img/maintenance-w320.jpg":
/*!**************************************!*\
  !*** ./src/img/maintenance-w320.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/maintenance-w320.jpg";

/***/ }),

/***/ "./src/img/maintenance-w450.jpg":
/*!**************************************!*\
  !*** ./src/img/maintenance-w450.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/maintenance-w450.jpg";

/***/ }),

/***/ "./src/img/metro-design template.png":
/*!*******************************************!*\
  !*** ./src/img/metro-design template.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/metro-design template.png";

/***/ }),

/***/ "./src/img/metro-design-template-w320.jpg":
/*!************************************************!*\
  !*** ./src/img/metro-design-template-w320.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/metro-design-template-w320.jpg";

/***/ }),

/***/ "./src/img/metro-design-template-w450.jpg":
/*!************************************************!*\
  !*** ./src/img/metro-design-template-w450.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/metro-design-template-w450.jpg";

/***/ }),

/***/ "./src/img/metro-design-template-w600.jpg":
/*!************************************************!*\
  !*** ./src/img/metro-design-template-w600.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/metro-design-template-w600.jpg";

/***/ }),

/***/ "./src/img/metro-design_template_wommj9.png":
/*!**************************************************!*\
  !*** ./src/img/metro-design_template_wommj9.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/metro-design_template_wommj9.png";

/***/ }),

/***/ "./src/img/pexels-photo-952670_tlhgvq-c_scale,q_50,w_1600.jpg":
/*!********************************************************************!*\
  !*** ./src/img/pexels-photo-952670_tlhgvq-c_scale,q_50,w_1600.jpg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pexels-photo-952670_tlhgvq-c_scale,q_50,w_1600.jpg";

/***/ }),

/***/ "./src/img/pexels-photo-952670_tlhgvq-c_scale,q_50,w_1920.jpg":
/*!********************************************************************!*\
  !*** ./src/img/pexels-photo-952670_tlhgvq-c_scale,q_50,w_1920.jpg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pexels-photo-952670_tlhgvq-c_scale,q_50,w_1920.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
__webpack_require__(/*! ./js/picturefill.js */ "./src/js/picturefill.js");

// Load images dymamically
function importImgs(r) {
  var images = {};
  r.keys().map(function (item, index) {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

var images = importImgs(__webpack_require__("./src/img sync \\.(png|jpe?g|svg)$"));

// Smooth scrolling
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPos = target.getBoundingClientRect().top;
  var startPos = window.pageYOffset;
  var distance = targetPos - startPos;
  var startTime = null;
  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');

section1.addEventListener('click', function () {
  smoothScroll('.section2', 1000);
});

// $(".slide").click(function (e) {
//   hrefAttr = $(this).attr("href");
//   $("html, body").animate({
//       scrollTop: $(hrefAttr).offset().top
//   }, 1000);
//   e.preventDefault(e);
// });

// close the expanded hamburger menu on click
// function shutMenu() {
//   var hamburger = {
//      navToggle: document.querySelector('.nav-toggle'),
//      nav: document.querySelector('nav'),
//      toggle: function(e) {
//          e.preventDefault();
//          this.navToggle.classList.toggle('expanded');
//          this.nav.classList.toggle('expanded');
//      }
//   };

//  hamburger.navToggle.addEventListener('click', function(e) {
//      hamburger.toggle(e);
//  });
//  hamburger.nav.addEventListener('click', function(e) {
//      hamburger.toggle(e);
//  });
// }

// shutMenu();

var shutMenu = document.querySelector('.nav-item');
shutMenu.addEventListener('click', function (e) {});

/***/ }),

/***/ "./src/js/picturefill.js":
/*!*******************************!*\
  !*** ./src/js/picturefill.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function (window) {
	/*jshint eqnull:true */
	var ua = navigator.userAgent;

	if (window.HTMLPictureElement && /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) {
		addEventListener("resize", function () {
			var timer;

			var dummySrc = document.createElement("source");

			var fixRespimg = function fixRespimg(img) {
				var source, sizes;
				var picture = img.parentNode;

				if (picture.nodeName.toUpperCase() === "PICTURE") {
					source = dummySrc.cloneNode();

					picture.insertBefore(source, picture.firstElementChild);
					setTimeout(function () {
						picture.removeChild(source);
					});
				} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
					img._pfLastSize = img.offsetWidth;
					sizes = img.sizes;
					img.sizes += ",100vw";
					setTimeout(function () {
						img.sizes = sizes;
					});
				}
			};

			var findPictureImgs = function findPictureImgs() {
				var i;
				var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (i = 0; i < imgs.length; i++) {
					fixRespimg(imgs[i]);
				}
			};
			var onResize = function onResize() {
				clearTimeout(timer);
				timer = setTimeout(findPictureImgs, 99);
			};
			var mq = window.matchMedia && matchMedia("(orientation: landscape)");
			var init = function init() {
				onResize();

				if (mq && mq.addListener) {
					mq.addListener(onResize);
				}
			};

			dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

			if (/^[c|i]|d$/.test(document.readyState || "")) {
				init();
			} else {
				document.addEventListener("DOMContentLoaded", init);
			}

			return onResize;
		}());
	}
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function (window, document, undefined) {
	// Enable strict mode
	"use strict";

	// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)

	document.createElement("picture");

	var warn, eminpx, alwaysCheckWDescriptor, evalId;
	// local object for method references and testing exposure
	var pf = {};
	var isSupportTestReady = false;
	var noop = function noop() {};
	var image = document.createElement("img");
	var getImgAttr = image.getAttribute;
	var setImgAttr = image.setAttribute;
	var removeImgAttr = image.removeAttribute;
	var docElem = document.documentElement;
	var types = {};
	var cfg = {
		//resource selection:
		algorithm: ""
	};
	var srcAttr = "data-pfsrc";
	var srcsetAttr = srcAttr + "set";
	// ua sniffing is done for undetectable img loading features,
	// to do some non crucial perf optimizations
	var ua = navigator.userAgent;
	var supportAbort = /rident/.test(ua) || /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35;
	var curSrcProp = "currentSrc";
	var regWDesc = /\s+\+?\d+(e\d+)?w/;
	var regSize = /(\([^)]+\))?\s*(.+)/;
	var setOptions = window.picturefillCFG;
	/**
  * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
  */
	// baseStyle also used by getEmValue (i.e.: width: 1em is important)
	var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
	var fsCss = "font-size:100%!important;";
	var isVwDirty = true;

	var cssCache = {};
	var sizeLengthCache = {};
	var DPR = window.devicePixelRatio;
	var units = {
		px: 1,
		"in": 96
	};
	var anchor = document.createElement("a");
	/**
  * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
  * @type {boolean}
  */
	var alreadyRun = false;

	// Reusable, non-"g" Regexes

	// (Don't use \s, to avoid matching non-breaking space.)
	var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
	    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
	    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
	    regexTrailingCommas = /[,]+$/,
	    regexNonNegativeInteger = /^\d+$/,


	// ( Positive or negative or unsigned integers or decimals, without or without exponents.
	// Must include at least one digit.
	// According to spec tests any decimal point must be followed by a digit.
	// No leading plus sign is allowed.)
	// https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
	regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

	var on = function on(obj, evt, fn, capture) {
		if (obj.addEventListener) {
			obj.addEventListener(evt, fn, capture || false);
		} else if (obj.attachEvent) {
			obj.attachEvent("on" + evt, fn);
		}
	};

	/**
  * simple memoize function:
  */

	var memoize = function memoize(fn) {
		var cache = {};
		return function (input) {
			if (!(input in cache)) {
				cache[input] = fn(input);
			}
			return cache[input];
		};
	};

	// UTILITY FUNCTIONS

	// Manual is faster than RegEx
	// http://jsperf.com/whitespace-character/5
	function isSpace(c) {
		return c === " " || // space
		c === "\t" || // horizontal tab
		c === "\n" || // new line
		c === "\f" || // form feed
		c === "\r"; // carriage return
	}

	/**
  * gets a mediaquery and returns a boolean or gets a css length and returns a number
  * @param css mediaqueries or css length
  * @returns {boolean|number}
  *
  * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
  */
	var evalCSS = function () {

		var regLength = /^([\d\.]+)(em|vw|px)$/;
		var replace = function replace() {
			var args = arguments,
			    index = 0,
			    string = args[0];
			while (++index in args) {
				string = string.replace(args[index], args[++index]);
			}
			return string;
		};

		var buildStr = memoize(function (css) {

			return "return " + replace((css || "").toLowerCase(),
			// interpret `and`
			/\band\b/g, "&&",

			// interpret `,`
			/,/g, "||",

			// interpret `min-` as >=
			/min-([a-z-\s]+):/g, "e.$1>=",

			// interpret `max-` as <=
			/max-([a-z-\s]+):/g, "e.$1<=",

			//calc value
			/calc([^)]+)/g, "($1)",

			// interpret css values
			/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
			//make eval less evil
			/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, "") + ";";
		});

		return function (css, length) {
			var parsedLength;
			if (!(css in cssCache)) {
				cssCache[css] = false;
				if (length && (parsedLength = css.match(regLength))) {
					cssCache[css] = parsedLength[1] * units[parsedLength[2]];
				} else {
					/*jshint evil:true */
					try {
						cssCache[css] = new Function("e", buildStr(css))(units);
					} catch (e) {}
					/*jshint evil:false */
				}
			}
			return cssCache[css];
		};
	}();

	var setResolution = function setResolution(candidate, sizesattr) {
		if (candidate.w) {
			// h = means height: || descriptor.type === 'h' do not handle yet...
			candidate.cWidth = pf.calcListLength(sizesattr || "100vw");
			candidate.res = candidate.w / candidate.cWidth;
		} else {
			candidate.res = candidate.d;
		}
		return candidate;
	};

	/**
  *
  * @param opt
  */
	var picturefill = function picturefill(opt) {

		if (!isSupportTestReady) {
			return;
		}

		var elements, i, plen;

		var options = opt || {};

		if (options.elements && options.elements.nodeType === 1) {
			if (options.elements.nodeName.toUpperCase() === "IMG") {
				options.elements = [options.elements];
			} else {
				options.context = options.elements;
				options.elements = null;
			}
		}

		elements = options.elements || pf.qsa(options.context || document, options.reevaluate || options.reselect ? pf.sel : pf.selShort);

		if (plen = elements.length) {

			pf.setupRun(options);
			alreadyRun = true;

			// Loop through all elements
			for (i = 0; i < plen; i++) {
				pf.fillImg(elements[i], options);
			}

			pf.teardownRun(options);
		}
	};

	/**
  * outputs a warning for the developer
  * @param {message}
  * @type {Function}
  */
	warn = window.console && console.warn ? function (message) {
		console.warn(message);
	} : noop;

	if (!(curSrcProp in image)) {
		curSrcProp = "src";
	}

	// Add support for standard mime types.
	types["image/jpeg"] = true;
	types["image/gif"] = true;
	types["image/png"] = true;

	function detectTypeSupport(type, typeUri) {
		// based on Modernizr's lossless img-webp test
		// note: asynchronous
		var image = new window.Image();
		image.onerror = function () {
			types[type] = false;
			picturefill();
		};
		image.onload = function () {
			types[type] = image.width === 1;
			picturefill();
		};
		image.src = typeUri;
		return "pending";
	}

	// test svg support
	types["image/svg+xml"] = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");

	/**
  * updates the internal vW property with the current viewport width in px
  */
	function updateMetrics() {

		isVwDirty = false;
		DPR = window.devicePixelRatio;
		cssCache = {};
		sizeLengthCache = {};

		pf.DPR = DPR || 1;

		units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
		units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

		units.vw = units.width / 100;
		units.vh = units.height / 100;

		evalId = [units.height, units.width, DPR].join("-");

		units.em = pf.getEmValue();
		units.rem = units.em;
	}

	function chooseLowRes(lowerValue, higherValue, dprValue, isCached) {
		var bonusFactor, tooMuch, bonus, meanDensity;

		//experimental
		if (cfg.algorithm === "saveData") {
			if (lowerValue > 2.7) {
				meanDensity = dprValue + 1;
			} else {
				tooMuch = higherValue - dprValue;
				bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

				bonus = tooMuch * bonusFactor;

				if (isCached) {
					bonus += 0.1 * bonusFactor;
				}

				meanDensity = lowerValue + bonus;
			}
		} else {
			meanDensity = dprValue > 1 ? Math.sqrt(lowerValue * higherValue) : lowerValue;
		}

		return meanDensity > dprValue;
	}

	function applyBestCandidate(img) {
		var srcSetCandidates;
		var matchingSet = pf.getSet(img);
		var evaluated = false;
		if (matchingSet !== "pending") {
			evaluated = evalId;
			if (matchingSet) {
				srcSetCandidates = pf.setRes(matchingSet);
				pf.applySetCandidate(srcSetCandidates, img);
			}
		}
		img[pf.ns].evaled = evaluated;
	}

	function ascendingSort(a, b) {
		return a.res - b.res;
	}

	function setSrcToCur(img, src, set) {
		var candidate;
		if (!set && src) {
			set = img[pf.ns].sets;
			set = set && set[set.length - 1];
		}

		candidate = getCandidateForSrc(src, set);

		if (candidate) {
			src = pf.makeUrl(src);
			img[pf.ns].curSrc = src;
			img[pf.ns].curCan = candidate;

			if (!candidate.res) {
				setResolution(candidate, candidate.set.sizes);
			}
		}
		return candidate;
	}

	function getCandidateForSrc(src, set) {
		var i, candidate, candidates;
		if (src && set) {
			candidates = pf.parseSet(set);
			src = pf.makeUrl(src);
			for (i = 0; i < candidates.length; i++) {
				if (src === pf.makeUrl(candidates[i].url)) {
					candidate = candidates[i];
					break;
				}
			}
		}
		return candidate;
	}

	function getAllSourceElements(picture, candidates) {
		var i, len, source, srcset;

		// SPEC mismatch intended for size and perf:
		// actually only source elements preceding the img should be used
		// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
		var sources = picture.getElementsByTagName("source");

		for (i = 0, len = sources.length; i < len; i++) {
			source = sources[i];
			source[pf.ns] = true;
			srcset = source.getAttribute("srcset");

			// if source does not have a srcset attribute, skip
			if (srcset) {
				candidates.push({
					srcset: srcset,
					media: source.getAttribute("media"),
					type: source.getAttribute("type"),
					sizes: source.getAttribute("sizes")
				});
			}
		}
	}

	/**
  * Srcset Parser
  * By Alex Bell |  MIT License
  *
  * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
  *
  * Based super duper closely on the reference algorithm at:
  * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
  */

	// 1. Let input be the value passed to this algorithm.
	// (TO-DO : Explain what "set" argument is here. Maybe choose a more
	// descriptive & more searchable name.  Since passing the "set" in really has
	// nothing to do with parsing proper, I would prefer this assignment eventually
	// go in an external fn.)
	function parseSrcset(input, set) {

		function collectCharacters(regEx) {
			var chars,
			    match = regEx.exec(input.substring(pos));
			if (match) {
				chars = match[0];
				pos += chars.length;
				return chars;
			}
		}

		var inputLength = input.length,
		    url,
		    descriptors,
		    currentDescriptor,
		    state,
		    c,


		// 2. Let position be a pointer into input, initially pointing at the start
		//    of the string.
		pos = 0,


		// 3. Let candidates be an initially empty source set.
		candidates = [];

		/**
  * Adds descriptor properties to a candidate, pushes to the candidates array
  * @return undefined
  */
		// (Declared outside of the while loop so that it's only created once.
		// (This fn is defined before it is used, in order to pass JSHINT.
		// Unfortunately this breaks the sequencing of the spec comments. :/ )
		function parseDescriptors() {

			// 9. Descriptor parser: Let error be no.
			var pError = false,


			// 10. Let width be absent.
			// 11. Let density be absent.
			// 12. Let future-compat-h be absent. (We're implementing it now as h)
			w,
			    d,
			    h,
			    i,
			    candidate = {},
			    desc,
			    lastChar,
			    value,
			    intVal,
			    floatVal;

			// 13. For each descriptor in descriptors, run the appropriate set of steps
			// from the following list:
			for (i = 0; i < descriptors.length; i++) {
				desc = descriptors[i];

				lastChar = desc[desc.length - 1];
				value = desc.substring(0, desc.length - 1);
				intVal = parseInt(value, 10);
				floatVal = parseFloat(value);

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0077 LATIN SMALL LETTER W character
				if (regexNonNegativeInteger.test(value) && lastChar === "w") {

					// If width and density are not both absent, then let error be yes.
					if (w || d) {
						pError = true;
					}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes.
					// Otherwise, let width be the result.
					if (intVal === 0) {
						pError = true;
					} else {
						w = intVal;
					}

					// If the descriptor consists of a valid floating-point number followed by
					// a U+0078 LATIN SMALL LETTER X character
				} else if (regexFloatingPoint.test(value) && lastChar === "x") {

					// If width, density and future-compat-h are not all absent, then let error
					// be yes.
					if (w || d || h) {
						pError = true;
					}

					// Apply the rules for parsing floating-point number values to the descriptor.
					// If the result is less than zero, let error be yes. Otherwise, let density
					// be the result.
					if (floatVal < 0) {
						pError = true;
					} else {
						d = floatVal;
					}

					// If the descriptor consists of a valid non-negative integer followed by
					// a U+0068 LATIN SMALL LETTER H character
				} else if (regexNonNegativeInteger.test(value) && lastChar === "h") {

					// If height and density are not both absent, then let error be yes.
					if (h || d) {
						pError = true;
					}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes. Otherwise, let future-compat-h
					// be the result.
					if (intVal === 0) {
						pError = true;
					} else {
						h = intVal;
					}

					// Anything else, Let error be yes.
				} else {
					pError = true;
				}
			} // (close step 13 for loop)

			// 15. If error is still no, then append a new image source to candidates whose
			// URL is url, associated with a width width if not absent and a pixel
			// density density if not absent. Otherwise, there is a parse error.
			if (!pError) {
				candidate.url = url;

				if (w) {
					candidate.w = w;
				}
				if (d) {
					candidate.d = d;
				}
				if (h) {
					candidate.h = h;
				}
				if (!h && !d && !w) {
					candidate.d = 1;
				}
				if (candidate.d === 1) {
					set.has1x = true;
				}
				candidate.set = set;

				candidates.push(candidate);
			}
		} // (close parseDescriptors fn)

		/**
  * Tokenizes descriptor properties prior to parsing
  * Returns undefined.
  * (Again, this fn is defined before it is used, in order to pass JSHINT.
  * Unfortunately this breaks the logical sequencing of the spec comments. :/ )
  */
		function tokenize() {

			// 8.1. Descriptor tokeniser: Skip whitespace
			collectCharacters(regexLeadingSpaces);

			// 8.2. Let current descriptor be the empty string.
			currentDescriptor = "";

			// 8.3. Let state be in descriptor.
			state = "in descriptor";

			while (true) {

				// 8.4. Let c be the character at position.
				c = input.charAt(pos);

				//  Do the following depending on the value of state.
				//  For the purpose of this step, "EOF" is a special character representing
				//  that position is past the end of input.

				// In descriptor
				if (state === "in descriptor") {
					// Do the following, depending on the value of c:

					// Space character
					// If current descriptor is not empty, append current descriptor to
					// descriptors and let current descriptor be the empty string.
					// Set state to after descriptor.
					if (isSpace(c)) {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
							currentDescriptor = "";
							state = "after descriptor";
						}

						// U+002C COMMA (,)
						// Advance position to the next character in input. If current descriptor
						// is not empty, append current descriptor to descriptors. Jump to the step
						// labeled descriptor parser.
					} else if (c === ",") {
						pos += 1;
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

						// U+0028 LEFT PARENTHESIS (()
						// Append c to current descriptor. Set state to in parens.
					} else if (c === "(") {
						currentDescriptor = currentDescriptor + c;
						state = "in parens";

						// EOF
						// If current descriptor is not empty, append current descriptor to
						// descriptors. Jump to the step labeled descriptor parser.
					} else if (c === "") {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

						// Anything else
						// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}
					// (end "in descriptor"

					// In parens
				} else if (state === "in parens") {

					// U+0029 RIGHT PARENTHESIS ())
					// Append c to current descriptor. Set state to in descriptor.
					if (c === ")") {
						currentDescriptor = currentDescriptor + c;
						state = "in descriptor";

						// EOF
						// Append current descriptor to descriptors. Jump to the step labeled
						// descriptor parser.
					} else if (c === "") {
						descriptors.push(currentDescriptor);
						parseDescriptors();
						return;

						// Anything else
						// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}

					// After descriptor
				} else if (state === "after descriptor") {

					// Do the following, depending on the value of c:
					// Space character: Stay in this state.
					if (isSpace(c)) {

						// EOF: Jump to the step labeled descriptor parser.
					} else if (c === "") {
						parseDescriptors();
						return;

						// Anything else
						// Set state to in descriptor. Set position to the previous character in input.
					} else {
						state = "in descriptor";
						pos -= 1;
					}
				}

				// Advance position to the next character in input.
				pos += 1;

				// Repeat this step.
			} // (close while true loop)
		}

		// 4. Splitting loop: Collect a sequence of characters that are space
		//    characters or U+002C COMMA characters. If any U+002C COMMA characters
		//    were collected, that is a parse error.
		while (true) {
			collectCharacters(regexLeadingCommasOrSpaces);

			// 5. If position is past the end of input, return candidates and abort these steps.
			if (pos >= inputLength) {
				return candidates; // (we're done, this is the sole return path)
			}

			// 6. Collect a sequence of characters that are not space characters,
			//    and let that be url.
			url = collectCharacters(regexLeadingNotSpaces);

			// 7. Let descriptors be a new empty list.
			descriptors = [];

			// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
			//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
			//         more than one character, that is a parse error.
			if (url.slice(-1) === ",") {
				url = url.replace(regexTrailingCommas, "");
				// (Jump ahead to step 9 to skip tokenization and just push the candidate).
				parseDescriptors();

				//	Otherwise, follow these substeps:
			} else {
				tokenize();
			} // (close else of step 8)

			// 16. Return to the step labeled splitting loop.
		} // (Close of big while loop.)
	}

	/*
  * Sizes Parser
  *
  * By Alex Bell |  MIT License
  *
  * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
  *
  * Reference algorithm at:
  * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
  *
  * Most comments are copied in directly from the spec
  * (except for comments in parens).
  *
  * Grammar is:
  * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
  * <source-size> = <media-condition> <source-size-value>
  * <source-size-value> = <length>
  * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
  *
  * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
  * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
  *
  * Returns the first valid <css-length> with a media condition that evaluates to true,
  * or "100vw" if all valid media conditions evaluate to false.
  *
  */

	function parseSizes(strValue) {

		// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
		// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
		// CSS allows a single optional plus or minus sign:
		// http://www.w3.org/TR/CSS2/syndata.html#numbers
		// CSS is ASCII case-insensitive:
		// http://www.w3.org/TR/CSS2/syndata.html#characters )
		// Spec allows exponential notation for <number> type:
		// http://dev.w3.org/csswg/css-values/#numbers
		var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

		// (This is a quick and lenient test. Because of optional unlimited-depth internal
		// grouping parens and strict spacing rules, this could get very complicated.)
		var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

		var i;
		var unparsedSizesList;
		var unparsedSizesListLength;
		var unparsedSize;
		var lastComponentValue;
		var size;

		// UTILITY FUNCTIONS

		//  (Toy CSS parser. The goals here are:
		//  1) expansive test coverage without the weight of a full CSS parser.
		//  2) Avoiding regex wherever convenient.
		//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
		//  Returns an array of arrays.)
		function parseComponentValues(str) {
			var chrctr;
			var component = "";
			var componentArray = [];
			var listArray = [];
			var parenDepth = 0;
			var pos = 0;
			var inComment = false;

			function pushComponent() {
				if (component) {
					componentArray.push(component);
					component = "";
				}
			}

			function pushComponentArray() {
				if (componentArray[0]) {
					listArray.push(componentArray);
					componentArray = [];
				}
			}

			// (Loop forwards from the beginning of the string.)
			while (true) {
				chrctr = str.charAt(pos);

				if (chrctr === "") {
					// ( End of string reached.)
					pushComponent();
					pushComponentArray();
					return listArray;
				} else if (inComment) {
					if (chrctr === "*" && str[pos + 1] === "/") {
						// (At end of a comment.)
						inComment = false;
						pos += 2;
						pushComponent();
						continue;
					} else {
						pos += 1; // (Skip all characters inside comments.)
						continue;
					}
				} else if (isSpace(chrctr)) {
					// (If previous character in loop was also a space, or if
					// at the beginning of the string, do not add space char to
					// component.)
					if (str.charAt(pos - 1) && isSpace(str.charAt(pos - 1)) || !component) {
						pos += 1;
						continue;
					} else if (parenDepth === 0) {
						pushComponent();
						pos += 1;
						continue;
					} else {
						// (Replace any space character with a plain space for legibility.)
						chrctr = " ";
					}
				} else if (chrctr === "(") {
					parenDepth += 1;
				} else if (chrctr === ")") {
					parenDepth -= 1;
				} else if (chrctr === ",") {
					pushComponent();
					pushComponentArray();
					pos += 1;
					continue;
				} else if (chrctr === "/" && str.charAt(pos + 1) === "*") {
					inComment = true;
					pos += 2;
					continue;
				}

				component = component + chrctr;
				pos += 1;
			}
		}

		function isValidNonNegativeSourceSizeValue(s) {
			if (regexCssLengthWithUnits.test(s) && parseFloat(s) >= 0) {
				return true;
			}
			if (regexCssCalc.test(s)) {
				return true;
			}
			// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
			// "-0 is equivalent to 0 and is not a negative number." which means that
			// unitless zero and unitless negative zero must be accepted as special cases.)
			if (s === "0" || s === "-0" || s === "+0") {
				return true;
			}
			return false;
		}

		// When asked to parse a sizes attribute from an element, parse a
		// comma-separated list of component values from the value of the element's
		// sizes attribute (or the empty string, if the attribute is absent), and let
		// unparsed sizes list be the result.
		// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

		unparsedSizesList = parseComponentValues(strValue);
		unparsedSizesListLength = unparsedSizesList.length;

		// For each unparsed size in unparsed sizes list:
		for (i = 0; i < unparsedSizesListLength; i++) {
			unparsedSize = unparsedSizesList[i];

			// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
			// ( parseComponentValues() already omits spaces outside of parens. )

			// If unparsed size is now empty, that is a parse error; continue to the next
			// iteration of this algorithm.
			// ( parseComponentValues() won't push an empty array. )

			// 2. If the last component value in unparsed size is a valid non-negative
			// <source-size-value>, let size be its value and remove the component value
			// from unparsed size. Any CSS function other than the calc() function is
			// invalid. Otherwise, there is a parse error; continue to the next iteration
			// of this algorithm.
			// http://dev.w3.org/csswg/css-syntax/#parse-component-value
			lastComponentValue = unparsedSize[unparsedSize.length - 1];

			if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
				size = lastComponentValue;
				unparsedSize.pop();
			} else {
				continue;
			}

			// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
			// size. If unparsed size is now empty, return size and exit this algorithm.
			// If this was not the last item in unparsed sizes list, that is a parse error.
			if (unparsedSize.length === 0) {
				return size;
			}

			// 4. Parse the remaining component values in unparsed size as a
			// <media-condition>. If it does not parse correctly, or it does parse
			// correctly but the <media-condition> evaluates to false, continue to the
			// next iteration of this algorithm.
			// (Parsing all possible compound media conditions in JS is heavy, complicated,
			// and the payoff is unclear. Is there ever an situation where the
			// media condition parses incorrectly but still somehow evaluates to true?
			// Can we just rely on the browser/polyfill to do it?)
			unparsedSize = unparsedSize.join(" ");
			if (!pf.matchesMedia(unparsedSize)) {
				continue;
			}

			// 5. Return size and exit this algorithm.
			return size;
		}

		// If the above algorithm exhausts unparsed sizes list without returning a
		// size value, return 100vw.
		return "100vw";
	}

	// namespace
	pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

	// srcset support test
	pf.supSrcset = "srcset" in image;
	pf.supSizes = "sizes" in image;
	pf.supPicture = !!window.HTMLPictureElement;

	// UC browser does claim to support srcset and picture, but not sizes,
	// this extended test reveals the browser does support nothing
	if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
		(function (image2) {
			image.srcset = "data:,a";
			image2.src = "data:,a";
			pf.supSrcset = image.complete === image2.complete;
			pf.supPicture = pf.supSrcset && pf.supPicture;
		})(document.createElement("img"));
	}

	// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
	if (pf.supSrcset && !pf.supSizes) {

		(function () {
			var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
			var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
			var img = document.createElement("img");
			var test = function test() {
				var width = img.width;

				if (width === 2) {
					pf.supSizes = true;
				}

				alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

				isSupportTestReady = true;
				// force async
				setTimeout(picturefill);
			};

			img.onload = test;
			img.onerror = test;
			img.setAttribute("sizes", "9px");

			img.srcset = width1 + " 1w," + width2 + " 9w";
			img.src = width1;
		})();
	} else {
		isSupportTestReady = true;
	}

	// using pf.qsa instead of dom traversing does scale much better,
	// especially on sites mixing responsive and non-responsive images
	pf.selShort = "picture>img,img[srcset]";
	pf.sel = pf.selShort;
	pf.cfg = cfg;

	/**
  * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
  */
	pf.DPR = DPR || 1;
	pf.u = units;

	// container of supported mime types that one might need to qualify before using
	pf.types = types;

	pf.setSize = noop;

	/**
  * Gets a string and returns the absolute URL
  * @param src
  * @returns {String} absolute URL
  */

	pf.makeUrl = memoize(function (src) {
		anchor.href = src;
		return anchor.href;
	});

	/**
  * Gets a DOM element or document and a selctor and returns the found matches
  * Can be extended with jQuery/Sizzle for IE7 support
  * @param context
  * @param sel
  * @returns {NodeList|Array}
  */
	pf.qsa = function (context, sel) {
		return "querySelector" in context ? context.querySelectorAll(sel) : [];
	};

	/**
  * Shortcut method for matchMedia ( for easy overriding in tests )
  * wether native or pf.mMQ is used will be decided lazy on first call
  * @returns {boolean}
  */
	pf.matchesMedia = function () {
		if (window.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
			pf.matchesMedia = function (media) {
				return !media || matchMedia(media).matches;
			};
		} else {
			pf.matchesMedia = pf.mMQ;
		}

		return pf.matchesMedia.apply(this, arguments);
	};

	/**
  * A simplified matchMedia implementation for IE8 and IE9
  * handles only min-width/max-width with px or em values
  * @param media
  * @returns {boolean}
  */
	pf.mMQ = function (media) {
		return media ? evalCSS(media) : true;
	};

	/**
  * Returns the calculated length in css pixel from the given sourceSizeValue
  * http://dev.w3.org/csswg/css-values-3/#length-value
  * intended Spec mismatches:
  * * Does not check for invalid use of CSS functions
  * * Does handle a computed length of 0 the same as a negative and therefore invalid value
  * @param sourceSizeValue
  * @returns {Number}
  */
	pf.calcLength = function (sourceSizeValue) {

		var value = evalCSS(sourceSizeValue, true) || false;
		if (value < 0) {
			value = false;
		}

		return value;
	};

	/**
  * Takes a type string and checks if its supported
  */

	pf.supportsType = function (type) {
		return type ? types[type] : true;
	};

	/**
  * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
  * @param sourceSizeStr
  * @returns {*}
  */
	pf.parseSize = memoize(function (sourceSizeStr) {
		var match = (sourceSizeStr || "").match(regSize);
		return {
			media: match && match[1],
			length: match && match[2]
		};
	});

	pf.parseSet = function (set) {
		if (!set.cands) {
			set.cands = parseSrcset(set.srcset, set);
		}
		return set.cands;
	};

	/**
  * returns 1em in css px for html/body default size
  * function taken from respondjs
  * @returns {*|number}
  */
	pf.getEmValue = function () {
		var body;
		if (!eminpx && (body = document.body)) {
			var div = document.createElement("div"),
			    originalHTMLCSS = docElem.style.cssText,
			    originalBodyCSS = body.style.cssText;

			div.style.cssText = baseStyle;

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.cssText = fsCss;
			body.style.cssText = fsCss;

			body.appendChild(div);
			eminpx = div.offsetWidth;
			body.removeChild(div);

			//also update eminpx before returning
			eminpx = parseFloat(eminpx, 10);

			// restore the original values
			docElem.style.cssText = originalHTMLCSS;
			body.style.cssText = originalBodyCSS;
		}
		return eminpx || 16;
	};

	/**
  * Takes a string of sizes and returns the width in pixels as a number
  */
	pf.calcListLength = function (sourceSizeListStr) {
		// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
		//
		//                           or (min-width:30em) calc(30% - 15px)
		if (!(sourceSizeListStr in sizeLengthCache) || cfg.uT) {
			var winningLength = pf.calcLength(parseSizes(sourceSizeListStr));

			sizeLengthCache[sourceSizeListStr] = !winningLength ? units.width : winningLength;
		}

		return sizeLengthCache[sourceSizeListStr];
	};

	/**
  * Takes a candidate object with a srcset property in the form of url/
  * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
  *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
  *     "images/pic-small.png"
  * Get an array of image candidates in the form of
  *      {url: "/foo/bar.png", resolution: 1}
  * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
  * If sizes is specified, res is calculated
  */
	pf.setRes = function (set) {
		var candidates;
		if (set) {

			candidates = pf.parseSet(set);

			for (var i = 0, len = candidates.length; i < len; i++) {
				setResolution(candidates[i], set.sizes);
			}
		}
		return candidates;
	};

	pf.setRes.res = setResolution;

	pf.applySetCandidate = function (candidates, img) {
		if (!candidates.length) {
			return;
		}
		var candidate, i, j, length, bestCandidate, curSrc, curCan, candidateSrc, abortCurSrc;

		var imageData = img[pf.ns];
		var dpr = pf.DPR;

		curSrc = imageData.curSrc || img[curSrcProp];

		curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

		// if we have a current source, we might either become lazy or give this source some advantage
		if (curCan && curCan.set === candidates[0].set) {

			// if browser can abort image request and the image has a higher pixel density than needed
			// and this image isn't downloaded yet, we skip next part and try to save bandwidth
			abortCurSrc = supportAbort && !img.complete && curCan.res - 0.1 > dpr;

			if (!abortCurSrc) {
				curCan.cached = true;

				// if current candidate is "best", "better" or "okay",
				// set it to bestCandidate
				if (curCan.res >= dpr) {
					bestCandidate = curCan;
				}
			}
		}

		if (!bestCandidate) {

			candidates.sort(ascendingSort);

			length = candidates.length;
			bestCandidate = candidates[length - 1];

			for (i = 0; i < length; i++) {
				candidate = candidates[i];
				if (candidate.res >= dpr) {
					j = i - 1;

					// we have found the perfect candidate,
					// but let's improve this a little bit with some assumptions ;-)
					if (candidates[j] && (abortCurSrc || curSrc !== pf.makeUrl(candidate.url)) && chooseLowRes(candidates[j].res, candidate.res, dpr, candidates[j].cached)) {

						bestCandidate = candidates[j];
					} else {
						bestCandidate = candidate;
					}
					break;
				}
			}
		}

		if (bestCandidate) {

			candidateSrc = pf.makeUrl(bestCandidate.url);

			imageData.curSrc = candidateSrc;
			imageData.curCan = bestCandidate;

			if (candidateSrc !== curSrc) {
				pf.setSrc(img, bestCandidate);
			}
			pf.setSize(img);
		}
	};

	pf.setSrc = function (img, bestCandidate) {
		var origWidth;
		img.src = bestCandidate.url;

		// although this is a specific Safari issue, we don't want to take too much different code paths
		if (bestCandidate.set.type === "image/svg+xml") {
			origWidth = img.style.width;
			img.style.width = img.offsetWidth + 1 + "px";

			// next line only should trigger a repaint
			// if... is only done to trick dead code removal
			if (img.offsetWidth + 1) {
				img.style.width = origWidth;
			}
		}
	};

	pf.getSet = function (img) {
		var i, set, supportsType;
		var match = false;
		var sets = img[pf.ns].sets;

		for (i = 0; i < sets.length && !match; i++) {
			set = sets[i];

			if (!set.srcset || !pf.matchesMedia(set.media) || !(supportsType = pf.supportsType(set.type))) {
				continue;
			}

			if (supportsType === "pending") {
				set = supportsType;
			}

			match = set;
			break;
		}

		return match;
	};

	pf.parseSets = function (element, parent, options) {
		var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

		var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
		var imageData = element[pf.ns];

		if (imageData.src === undefined || options.src) {
			imageData.src = getImgAttr.call(element, "src");
			if (imageData.src) {
				setImgAttr.call(element, srcAttr, imageData.src);
			} else {
				removeImgAttr.call(element, srcAttr);
			}
		}

		if (imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset) {
			srcsetAttribute = getImgAttr.call(element, "srcset");
			imageData.srcset = srcsetAttribute;
			srcsetParsed = true;
		}

		imageData.sets = [];

		if (hasPicture) {
			imageData.pic = true;
			getAllSourceElements(parent, imageData.sets);
		}

		if (imageData.srcset) {
			imageSet = {
				srcset: imageData.srcset,
				sizes: getImgAttr.call(element, "sizes")
			};

			imageData.sets.push(imageSet);

			isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

			// add normal src as candidate, if source has no w descriptor
			if (!isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x) {
				imageSet.srcset += ", " + imageData.src;
				imageSet.cands.push({
					url: imageData.src,
					d: 1,
					set: imageSet
				});
			}
		} else if (imageData.src) {
			imageData.sets.push({
				srcset: imageData.src,
				sizes: null
			});
		}

		imageData.curCan = null;
		imageData.curSrc = undefined;

		// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
		// or has a w descriptor (and does not support sizes) set support to false to evaluate
		imageData.supported = !(hasPicture || imageSet && !pf.supSrcset || isWDescripor && !pf.supSizes);

		if (srcsetParsed && pf.supSrcset && !imageData.supported) {
			if (srcsetAttribute) {
				setImgAttr.call(element, srcsetAttr, srcsetAttribute);
				element.srcset = "";
			} else {
				removeImgAttr.call(element, srcsetAttr);
			}
		}

		if (imageData.supported && !imageData.srcset && (!imageData.src && element.src || element.src !== pf.makeUrl(imageData.src))) {
			if (imageData.src === null) {
				element.removeAttribute("src");
			} else {
				element.src = imageData.src;
			}
		}

		imageData.parsed = true;
	};

	pf.fillImg = function (element, options) {
		var imageData;
		var extreme = options.reselect || options.reevaluate;

		// expando for caching data on the img
		if (!element[pf.ns]) {
			element[pf.ns] = {};
		}

		imageData = element[pf.ns];

		// if the element has already been evaluated, skip it
		// unless `options.reevaluate` is set to true ( this, for example,
		// is set to true when running `picturefill` on `resize` ).
		if (!extreme && imageData.evaled === evalId) {
			return;
		}

		if (!imageData.parsed || options.reevaluate) {
			pf.parseSets(element, element.parentNode, options);
		}

		if (!imageData.supported) {
			applyBestCandidate(element);
		} else {
			imageData.evaled = evalId;
		}
	};

	pf.setupRun = function () {
		if (!alreadyRun || isVwDirty || DPR !== window.devicePixelRatio) {
			updateMetrics();
		}
	};

	// If picture is supported, well, that's awesome.
	if (pf.supPicture) {
		picturefill = noop;
		pf.fillImg = noop;
	} else {

		// Set up picture polyfill by polling the document
		(function () {
			var isDomReady;
			var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

			var run = function run() {
				var readyState = document.readyState || "";

				timerId = setTimeout(run, readyState === "loading" ? 200 : 999);
				if (document.body) {
					pf.fillImgs();
					isDomReady = isDomReady || regReady.test(readyState);
					if (isDomReady) {
						clearTimeout(timerId);
					}
				}
			};

			var timerId = setTimeout(run, document.body ? 9 : 99);

			// Also attach picturefill on resize and readystatechange
			// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
			var debounce = function debounce(func, wait) {
				var timeout, timestamp;
				var later = function later() {
					var last = new Date() - timestamp;

					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func();
					}
				};

				return function () {
					timestamp = new Date();

					if (!timeout) {
						timeout = setTimeout(later, wait);
					}
				};
			};
			var lastClientWidth = docElem.clientHeight;
			var onResize = function onResize() {
				isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
				lastClientWidth = docElem.clientHeight;
				if (isVwDirty) {
					pf.fillImgs();
				}
			};

			on(window, "resize", debounce(onResize, 99));
			on(document, "readystatechange", run);
		})();
	}

	pf.picturefill = picturefill;
	//use this internally for easy monkey patching/performance testing
	pf.fillImgs = picturefill;
	pf.teardownRun = noop;

	/* expose methods for testing */
	picturefill._ = pf;

	window.picturefillCFG = {
		pf: pf,
		push: function push(args) {
			var name = args.shift();
			if (typeof pf[name] === "function") {
				pf[name].apply(pf, args);
			} else {
				cfg[name] = args[0];
				if (alreadyRun) {
					pf.fillImgs({ reselect: true });
				}
			}
		}
	};

	while (setOptions && setOptions.length) {
		window.picturefillCFG.push(setOptions.shift());
	}

	/* expose picturefill */
	window.picturefill = picturefill;

	/* expose picturefill */
	if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
		// CommonJS, just export
		module.exports = picturefill;
	} else if (true) {
		// AMD support
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return picturefill;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// IE8 evals this sync, so it must be the last thing we do
	if (!pf.supPicture) {
		types["image/webp"] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
	}
})(window, document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/postcss-loader/lib!../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL0RTQzA2NjI3LTgwMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9EU0MwNjYyNy13ODAwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL1BhdmxvcyBQYXBhZG9wb3Vsb3MgUGhvdG9ncmFwaHkucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13MzIwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzQ1MC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXc2MDAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13NjUwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzk4MC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9XaWtpcGVkaWEgVmlld2VyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL1dpa2lwZWRpYS1WaWV3ZXItdzMyMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9XaWtpcGVkaWEtVmlld2VyLXc0NTAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvV2lraXBlZGlhLVZpZXdlci13NjAwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2JsYWNrLXNhbmQtdzEyMDAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmxhY2stc2FuZC13MTYwMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9ibGFjay1zYW5kLXc4MDAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvZ2xpdGNoLTI3MTc2MzJfMTkyMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9nbGl0Y2gtdzEyODAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvZ2xpdGNoLXcxNjAwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2dsaXRjaC13ODAwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2xvZ28tb3B0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvbWFpbnRlbmFuY2UtMjQyMjE3Ml8xOTIwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL21haW50ZW5hbmNlLXczMjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbWFpbnRlbmFuY2UtdzQ1MC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9tZXRyby1kZXNpZ24gdGVtcGxhdGUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvbWV0cm8tZGVzaWduLXRlbXBsYXRlLXczMjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbWV0cm8tZGVzaWduLXRlbXBsYXRlLXc0NTAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbWV0cm8tZGVzaWduLXRlbXBsYXRlLXc2MDAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbWV0cm8tZGVzaWduX3RlbXBsYXRlX3dvbW1qOS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9wZXhlbHMtcGhvdG8tOTUyNjcwX3RsaGd2cS1jX3NjYWxlLHFfNTAsd18xNjAwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3BleGVscy1waG90by05NTI2NzBfdGxoZ3ZxLWNfc2NhbGUscV81MCx3XzE5MjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGljdHVyZWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2M0OTIiXSwibmFtZXMiOlsicmVxdWlyZSIsImltcG9ydEltZ3MiLCJyIiwiaW1hZ2VzIiwia2V5cyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInJlcGxhY2UiLCJzbW9vdGhTY3JvbGwiLCJ0YXJnZXQiLCJkdXJhdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRhcmdldFBvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInN0YXJ0UG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkaXN0YW5jZSIsInN0YXJ0VGltZSIsImFuaW1hdGlvbiIsImN1cnJlbnRUaW1lIiwidGltZUVsYXBzZWQiLCJydW4iLCJlYXNlIiwic2Nyb2xsVG8iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0IiwiYiIsImMiLCJkIiwic2VjdGlvbjEiLCJzZWN0aW9uMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaHV0TWVudSIsImUiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIkhUTUxQaWN0dXJlRWxlbWVudCIsInRlc3QiLCJtYXRjaCIsIlJlZ0V4cCIsIiQxIiwidGltZXIiLCJkdW1teVNyYyIsImNyZWF0ZUVsZW1lbnQiLCJmaXhSZXNwaW1nIiwiaW1nIiwic291cmNlIiwic2l6ZXMiLCJwaWN0dXJlIiwicGFyZW50Tm9kZSIsIm5vZGVOYW1lIiwidG9VcHBlckNhc2UiLCJjbG9uZU5vZGUiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInNldFRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIl9wZkxhc3RTaXplIiwib2Zmc2V0V2lkdGgiLCJmaW5kUGljdHVyZUltZ3MiLCJpIiwiaW1ncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJvblJlc2l6ZSIsImNsZWFyVGltZW91dCIsIm1xIiwibWF0Y2hNZWRpYSIsImluaXQiLCJhZGRMaXN0ZW5lciIsInNyY3NldCIsInJlYWR5U3RhdGUiLCJ1bmRlZmluZWQiLCJ3YXJuIiwiZW1pbnB4IiwiYWx3YXlzQ2hlY2tXRGVzY3JpcHRvciIsImV2YWxJZCIsInBmIiwiaXNTdXBwb3J0VGVzdFJlYWR5Iiwibm9vcCIsImltYWdlIiwiZ2V0SW1nQXR0ciIsImdldEF0dHJpYnV0ZSIsInNldEltZ0F0dHIiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVJbWdBdHRyIiwicmVtb3ZlQXR0cmlidXRlIiwiZG9jRWxlbSIsImRvY3VtZW50RWxlbWVudCIsInR5cGVzIiwiY2ZnIiwiYWxnb3JpdGhtIiwic3JjQXR0ciIsInNyY3NldEF0dHIiLCJzdXBwb3J0QWJvcnQiLCJjdXJTcmNQcm9wIiwicmVnV0Rlc2MiLCJyZWdTaXplIiwic2V0T3B0aW9ucyIsInBpY3R1cmVmaWxsQ0ZHIiwiYmFzZVN0eWxlIiwiZnNDc3MiLCJpc1Z3RGlydHkiLCJjc3NDYWNoZSIsInNpemVMZW5ndGhDYWNoZSIsIkRQUiIsImRldmljZVBpeGVsUmF0aW8iLCJ1bml0cyIsInB4IiwiYW5jaG9yIiwiYWxyZWFkeVJ1biIsInJlZ2V4TGVhZGluZ1NwYWNlcyIsInJlZ2V4TGVhZGluZ0NvbW1hc09yU3BhY2VzIiwicmVnZXhMZWFkaW5nTm90U3BhY2VzIiwicmVnZXhUcmFpbGluZ0NvbW1hcyIsInJlZ2V4Tm9uTmVnYXRpdmVJbnRlZ2VyIiwicmVnZXhGbG9hdGluZ1BvaW50Iiwib24iLCJvYmoiLCJldnQiLCJmbiIsImNhcHR1cmUiLCJhdHRhY2hFdmVudCIsIm1lbW9pemUiLCJjYWNoZSIsImlucHV0IiwiaXNTcGFjZSIsImV2YWxDU1MiLCJyZWdMZW5ndGgiLCJhcmdzIiwiYXJndW1lbnRzIiwic3RyaW5nIiwiYnVpbGRTdHIiLCJjc3MiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlZExlbmd0aCIsIkZ1bmN0aW9uIiwic2V0UmVzb2x1dGlvbiIsImNhbmRpZGF0ZSIsInNpemVzYXR0ciIsInciLCJjV2lkdGgiLCJjYWxjTGlzdExlbmd0aCIsInJlcyIsInBpY3R1cmVmaWxsIiwib3B0IiwiZWxlbWVudHMiLCJwbGVuIiwib3B0aW9ucyIsIm5vZGVUeXBlIiwiY29udGV4dCIsInFzYSIsInJlZXZhbHVhdGUiLCJyZXNlbGVjdCIsInNlbCIsInNlbFNob3J0Iiwic2V0dXBSdW4iLCJmaWxsSW1nIiwidGVhcmRvd25SdW4iLCJjb25zb2xlIiwibWVzc2FnZSIsImRldGVjdFR5cGVTdXBwb3J0IiwidHlwZSIsInR5cGVVcmkiLCJJbWFnZSIsIm9uZXJyb3IiLCJvbmxvYWQiLCJ3aWR0aCIsInNyYyIsImltcGxlbWVudGF0aW9uIiwiaGFzRmVhdHVyZSIsInVwZGF0ZU1ldHJpY3MiLCJNYXRoIiwibWF4IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ2dyIsInZoIiwiam9pbiIsImVtIiwiZ2V0RW1WYWx1ZSIsInJlbSIsImNob29zZUxvd1JlcyIsImxvd2VyVmFsdWUiLCJoaWdoZXJWYWx1ZSIsImRwclZhbHVlIiwiaXNDYWNoZWQiLCJib251c0ZhY3RvciIsInRvb011Y2giLCJib251cyIsIm1lYW5EZW5zaXR5IiwicG93Iiwic3FydCIsImFwcGx5QmVzdENhbmRpZGF0ZSIsInNyY1NldENhbmRpZGF0ZXMiLCJtYXRjaGluZ1NldCIsImdldFNldCIsImV2YWx1YXRlZCIsInNldFJlcyIsImFwcGx5U2V0Q2FuZGlkYXRlIiwibnMiLCJldmFsZWQiLCJhc2NlbmRpbmdTb3J0IiwiYSIsInNldFNyY1RvQ3VyIiwic2V0Iiwic2V0cyIsImdldENhbmRpZGF0ZUZvclNyYyIsIm1ha2VVcmwiLCJjdXJTcmMiLCJjdXJDYW4iLCJjYW5kaWRhdGVzIiwicGFyc2VTZXQiLCJ1cmwiLCJnZXRBbGxTb3VyY2VFbGVtZW50cyIsImxlbiIsInNvdXJjZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInB1c2giLCJtZWRpYSIsInBhcnNlU3Jjc2V0IiwiY29sbGVjdENoYXJhY3RlcnMiLCJyZWdFeCIsImNoYXJzIiwiZXhlYyIsInN1YnN0cmluZyIsInBvcyIsImlucHV0TGVuZ3RoIiwiZGVzY3JpcHRvcnMiLCJjdXJyZW50RGVzY3JpcHRvciIsInN0YXRlIiwicGFyc2VEZXNjcmlwdG9ycyIsInBFcnJvciIsImgiLCJkZXNjIiwibGFzdENoYXIiLCJ2YWx1ZSIsImludFZhbCIsImZsb2F0VmFsIiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwiaGFzMXgiLCJ0b2tlbml6ZSIsImNoYXJBdCIsInNsaWNlIiwicGFyc2VTaXplcyIsInN0clZhbHVlIiwicmVnZXhDc3NMZW5ndGhXaXRoVW5pdHMiLCJyZWdleENzc0NhbGMiLCJ1bnBhcnNlZFNpemVzTGlzdCIsInVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoIiwidW5wYXJzZWRTaXplIiwibGFzdENvbXBvbmVudFZhbHVlIiwic2l6ZSIsInBhcnNlQ29tcG9uZW50VmFsdWVzIiwic3RyIiwiY2hyY3RyIiwiY29tcG9uZW50IiwiY29tcG9uZW50QXJyYXkiLCJsaXN0QXJyYXkiLCJwYXJlbkRlcHRoIiwiaW5Db21tZW50IiwicHVzaENvbXBvbmVudCIsInB1c2hDb21wb25lbnRBcnJheSIsImlzVmFsaWROb25OZWdhdGl2ZVNvdXJjZVNpemVWYWx1ZSIsInMiLCJwb3AiLCJtYXRjaGVzTWVkaWEiLCJEYXRlIiwiZ2V0VGltZSIsInN1YnN0ciIsInN1cFNyY3NldCIsInN1cFNpemVzIiwic3VwUGljdHVyZSIsImltYWdlMiIsImNvbXBsZXRlIiwid2lkdGgyIiwid2lkdGgxIiwidSIsInNldFNpemUiLCJocmVmIiwibWF0Y2hlcyIsIm1NUSIsImFwcGx5IiwiY2FsY0xlbmd0aCIsInNvdXJjZVNpemVWYWx1ZSIsInN1cHBvcnRzVHlwZSIsInBhcnNlU2l6ZSIsInNvdXJjZVNpemVTdHIiLCJjYW5kcyIsImJvZHkiLCJkaXYiLCJvcmlnaW5hbEhUTUxDU1MiLCJzdHlsZSIsImNzc1RleHQiLCJvcmlnaW5hbEJvZHlDU1MiLCJhcHBlbmRDaGlsZCIsInNvdXJjZVNpemVMaXN0U3RyIiwidVQiLCJ3aW5uaW5nTGVuZ3RoIiwiaiIsImJlc3RDYW5kaWRhdGUiLCJjYW5kaWRhdGVTcmMiLCJhYm9ydEN1clNyYyIsImltYWdlRGF0YSIsImRwciIsImNhY2hlZCIsInNvcnQiLCJzZXRTcmMiLCJvcmlnV2lkdGgiLCJwYXJzZVNldHMiLCJlbGVtZW50IiwicGFyZW50Iiwic3Jjc2V0QXR0cmlidXRlIiwiaW1hZ2VTZXQiLCJpc1dEZXNjcmlwb3IiLCJzcmNzZXRQYXJzZWQiLCJoYXNQaWN0dXJlIiwiY2FsbCIsInBpYyIsInN1cHBvcnRlZCIsInBhcnNlZCIsImV4dHJlbWUiLCJpc0RvbVJlYWR5IiwicmVnUmVhZHkiLCJ0aW1lcklkIiwiZmlsbEltZ3MiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwidGltZW91dCIsInRpbWVzdGFtcCIsImxhdGVyIiwibGFzdCIsImxhc3RDbGllbnRXaWR0aCIsIl8iLCJuYW1lIiwic2hpZnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmaW5lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RDs7Ozs7Ozs7Ozs7QUNyREEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsbUY7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsNEU7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsOEU7Ozs7Ozs7Ozs7O0FDQUEsOEU7Ozs7Ozs7Ozs7O0FDQUEsOEU7Ozs7Ozs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7Ozs7O0FDQUEsa0c7Ozs7Ozs7Ozs7O0FDQUEsa0c7Ozs7Ozs7Ozs7Ozs7O0FDQUEsbUJBQUFBLENBQVEsOENBQVI7QUFDQSxtQkFBQUEsQ0FBUSxvREFBUjs7QUFFQTtBQUNBLFNBQVNDLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXVCO0FBQ3JCLE1BQUlDLFNBQVMsRUFBYjtBQUNBRCxJ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SixNQXg3Q0wsRUF3N0NhTixRQXg3Q2IsRTs7Ozs7Ozs7Ozs7OztBQzlFQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL0RTQzA2NjI3LTgwMC5qcGdcIjogXCIuL3NyYy9pbWcvRFNDMDY2MjctODAwLmpwZ1wiLFxuXHRcIi4vRFNDMDY2MjctdzgwMC5qcGdcIjogXCIuL3NyYy9pbWcvRFNDMDY2MjctdzgwMC5qcGdcIixcblx0XCIuL1BhdmxvcyBQYXBhZG9wb3Vsb3MgUGhvdG9ncmFwaHkucG5nXCI6IFwiLi9zcmMvaW1nL1BhdmxvcyBQYXBhZG9wb3Vsb3MgUGhvdG9ncmFwaHkucG5nXCIsXG5cdFwiLi9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXczMjAuanBnXCI6IFwiLi9zcmMvaW1nL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzMyMC5qcGdcIixcblx0XCIuL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzQ1MC5qcGdcIjogXCIuL3NyYy9pbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13NDUwLmpwZ1wiLFxuXHRcIi4vUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13NjAwLmpwZ1wiOiBcIi4vc3JjL2ltZy9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXc2MDAuanBnXCIsXG5cdFwiLi9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXc2NTAuanBnXCI6IFwiLi9zcmMvaW1nL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzY1MC5qcGdcIixcblx0XCIuL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzk4MC5qcGdcIjogXCIuL3NyYy9pbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13OTgwLmpwZ1wiLFxuXHRcIi4vV2lraXBlZGlhIFZpZXdlci5wbmdcIjogXCIuL3NyYy9pbWcvV2lraXBlZGlhIFZpZXdlci5wbmdcIixcblx0XCIuL1dpa2lwZWRpYS1WaWV3ZXItdzMyMC5qcGdcIjogXCIuL3NyYy9pbWcvV2lraXBlZGlhLVZpZXdlci13MzIwLmpwZ1wiLFxuXHRcIi4vV2lraXBlZGlhLVZpZXdlci13NDUwLmpwZ1wiOiBcIi4vc3JjL2ltZy9XaWtpcGVkaWEtVmlld2VyLXc0NTAuanBnXCIsXG5cdFwiLi9XaWtpcGVkaWEtVmlld2VyLXc2MDAuanBnXCI6IFwiLi9zcmMvaW1nL1dpa2lwZWRpYS1WaWV3ZXItdzYwMC5qcGdcIixcblx0XCIuL2JsYWNrLXNhbmQtdzEyMDAuanBnXCI6IFwiLi9zcmMvaW1nL2JsYWNrLXNhbmQtdzEyMDAuanBnXCIsXG5cdFwiLi9ibGFjay1zYW5kLXcxNjAwLmpwZ1wiOiBcIi4vc3JjL2ltZy9ibGFjay1zYW5kLXcxNjAwLmpwZ1wiLFxuXHRcIi4vYmxhY2stc2FuZC13ODAwLmpwZ1wiOiBcIi4vc3JjL2ltZy9ibGFjay1zYW5kLXc4MDAuanBnXCIsXG5cdFwiLi9nbGl0Y2gtMjcxNzYzMl8xOTIwLmpwZ1wiOiBcIi4vc3JjL2ltZy9nbGl0Y2gtMjcxNzYzMl8xOTIwLmpwZ1wiLFxuXHRcIi4vZ2xpdGNoLXcxMjgwLmpwZ1wiOiBcIi4vc3JjL2ltZy9nbGl0Y2gtdzEyODAuanBnXCIsXG5cdFwiLi9nbGl0Y2gtdzE2MDAuanBnXCI6IFwiLi9zcmMvaW1nL2dsaXRjaC13MTYwMC5qcGdcIixcblx0XCIuL2dsaXRjaC13ODAwLmpwZ1wiOiBcIi4vc3JjL2ltZy9nbGl0Y2gtdzgwMC5qcGdcIixcblx0XCIuL2xvZ28tb3B0LnN2Z1wiOiBcIi4vc3JjL2ltZy9sb2dvLW9wdC5zdmdcIixcblx0XCIuL2xvZ28ucG5nXCI6IFwiLi9zcmMvaW1nL2xvZ28ucG5nXCIsXG5cdFwiLi9tYWludGVuYW5jZS0yNDIyMTcyXzE5MjAuanBnXCI6IFwiLi9zcmMvaW1nL21haW50ZW5hbmNlLTI0MjIxNzJfMTkyMC5qcGdcIixcblx0XCIuL21haW50ZW5hbmNlLXczMjAuanBnXCI6IFwiLi9zcmMvaW1nL21haW50ZW5hbmNlLXczMjAuanBnXCIsXG5cdFwiLi9tYWludGVuYW5jZS13NDUwLmpwZ1wiOiBcIi4vc3JjL2ltZy9tYWludGVuYW5jZS13NDUwLmpwZ1wiLFxuXHRcIi4vbWV0cm8tZGVzaWduIHRlbXBsYXRlLnBuZ1wiOiBcIi4vc3JjL2ltZy9tZXRyby1kZXNpZ24gdGVtcGxhdGUucG5nXCIsXG5cdFwiLi9tZXRyby1kZXNpZ24tdGVtcGxhdGUtdzMyMC5qcGdcIjogXCIuL3NyYy9pbWcvbWV0cm8tZGVzaWduLXRlbXBsYXRlLXczMjAuanBnXCIsXG5cdFwiLi9tZXRyby1kZXNpZ24tdGVtcGxhdGUtdzQ1MC5qcGdcIjogXCIuL3NyYy9pbWcvbWV0cm8tZGVzaWduLXRlbXBsYXRlLXc0NTAuanBnXCIsXG5cdFwiLi9tZXRyby1kZXNpZ24tdGVtcGxhdGUtdzYwMC5qcGdcIjogXCIuL3NyYy9pbWcvbWV0cm8tZGVzaWduLXRlbXBsYXRlLXc2MDAuanBnXCIsXG5cdFwiLi9tZXRyby1kZXNpZ25fdGVtcGxhdGVfd29tbWo5LnBuZ1wiOiBcIi4vc3JjL2ltZy9tZXRyby1kZXNpZ25fdGVtcGxhdGVfd29tbWo5LnBuZ1wiLFxuXHRcIi4vcGV4ZWxzLXBob3RvLTk1MjY3MF90bGhndnEtY19zY2FsZSxxXzUwLHdfMTYwMC5qcGdcIjogXCIuL3NyYy9pbWcvcGV4ZWxzLXBob3RvLTk1MjY3MF90bGhndnEtY19zY2FsZSxxXzUwLHdfMTYwMC5qcGdcIixcblx0XCIuL3BleGVscy1waG90by05NTI2NzBfdGxoZ3ZxLWNfc2NhbGUscV81MCx3XzE5MjAuanBnXCI6IFwiLi9zcmMvaW1nL3BleGVscy1waG90by05NTI2NzBfdGxoZ3ZxLWNfc2NhbGUscV81MCx3XzE5MjAuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1nIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL0RTQzA2NjI3LTgwMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvRFNDMDY2MjctdzgwMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvUGF2bG9zIFBhcGFkb3BvdWxvcyBQaG90b2dyYXBoeS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13MzIwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXc0NTAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzYwMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13NjUwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXc5ODAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL1dpa2lwZWRpYSBWaWV3ZXIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL1dpa2lwZWRpYS1WaWV3ZXItdzMyMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvV2lraXBlZGlhLVZpZXdlci13NDUwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9XaWtpcGVkaWEtVmlld2VyLXc2MDAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2JsYWNrLXNhbmQtdzEyMDAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2JsYWNrLXNhbmQtdzE2MDAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2JsYWNrLXNhbmQtdzgwMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZ2xpdGNoLTI3MTc2MzJfMTkyMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZ2xpdGNoLXcxMjgwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9nbGl0Y2gtdzE2MDAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2dsaXRjaC13ODAwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL2xvZ28tb3B0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sb2dvLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tYWludGVuYW5jZS0yNDIyMTcyXzE5MjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL21haW50ZW5hbmNlLXczMjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL21haW50ZW5hbmNlLXc0NTAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL21ldHJvLWRlc2lnbiB0ZW1wbGF0ZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbWV0cm8tZGVzaWduLXRlbXBsYXRlLXczMjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL21ldHJvLWRlc2lnbi10ZW1wbGF0ZS13NDUwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tZXRyby1kZXNpZ24tdGVtcGxhdGUtdzYwMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbWV0cm8tZGVzaWduX3RlbXBsYXRlX3dvbW1qOS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvcGV4ZWxzLXBob3RvLTk1MjY3MF90bGhndnEtY19zY2FsZSxxXzUwLHdfMTYwMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvcGV4ZWxzLXBob3RvLTk1MjY3MF90bGhndnEtY19zY2FsZSxxXzUwLHdfMTkyMC5qcGdcIjsiLCJyZXF1aXJlKCcuL3Njc3MvbWFpbi5zY3NzJyk7XHJcbnJlcXVpcmUoJy4vanMvcGljdHVyZWZpbGwuanMnKTtcclxuXHJcbi8vIExvYWQgaW1hZ2VzIGR5bWFtaWNhbGx5XHJcbmZ1bmN0aW9uIGltcG9ydEltZ3Mocikge1xyXG4gIGxldCBpbWFnZXMgPSB7fTtcclxuICByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBpbWFnZXM7XHJcbn1cclxuXHJcbmNvbnN0IGltYWdlcyA9IGltcG9ydEltZ3MocmVxdWlyZS5jb250ZXh0KCcuL2ltZycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcclxuXHJcbi8vIFNtb290aCBzY3JvbGxpbmdcclxuZnVuY3Rpb24gc21vb3RoU2Nyb2xsKHRhcmdldCxkdXJhdGlvbikge1xyXG4gIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbiAgdmFyIHRhcmdldFBvcyA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgdmFyIHN0YXJ0UG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gIHZhciBkaXN0YW5jZSA9IHRhcmdldFBvcyAtIHN0YXJ0UG9zO1xyXG4gIHZhciBzdGFydFRpbWUgPSBudWxsO1xyXG4gIGZ1bmN0aW9uIGFuaW1hdGlvbihjdXJyZW50VGltZSkge1xyXG4gICAgaWYoc3RhcnRUaW1lID09PSBudWxsKSB7XHJcbiAgICAgIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG4gICAgfVxyXG4gICAgdmFyIHRpbWVFbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XHJcbiAgICB2YXIgcnVuID0gZWFzZSh0aW1lRWxhcHNlZCxzdGFydFBvcyxkaXN0YW5jZSxkdXJhdGlvbik7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcnVuKTtcclxuICAgIGlmKHRpbWVFbGFwc2VkIDwgZHVyYXRpb24pIHtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlYXNlKHQsIGIsIGMsIGQpIHtcclxuXHQgIHQgLz0gZC8yO1xyXG5cdCAgaWYgKHQgPCAxKSByZXR1cm4gYy8yKnQqdCArIGI7XHJcblx0ICB0LS07XHJcblx0ICByZXR1cm4gLWMvMiAqICh0Kih0LTIpIC0gMSkgKyBiO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XHJcbn1cclxuXHJcbnZhciBzZWN0aW9uMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uMScpO1xyXG52YXIgc2VjdGlvbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbjInKTtcclxuXHJcbnNlY3Rpb24xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgc21vb3RoU2Nyb2xsKCcuc2VjdGlvbjInLCAxMDAwKTtcclxufSk7XHJcblxyXG4vLyAkKFwiLnNsaWRlXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgaHJlZkF0dHIgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xyXG4vLyAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xyXG4vLyAgICAgICBzY3JvbGxUb3A6ICQoaHJlZkF0dHIpLm9mZnNldCgpLnRvcFxyXG4vLyAgIH0sIDEwMDApO1xyXG4vLyAgIGUucHJldmVudERlZmF1bHQoZSk7XHJcbi8vIH0pO1xyXG5cclxuLy8gY2xvc2UgdGhlIGV4cGFuZGVkIGhhbWJ1cmdlciBtZW51IG9uIGNsaWNrXHJcbi8vIGZ1bmN0aW9uIHNodXRNZW51KCkge1xyXG4vLyAgIHZhciBoYW1idXJnZXIgPSB7XHJcbi8vICAgICAgbmF2VG9nZ2xlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXRvZ2dsZScpLFxyXG4vLyAgICAgIG5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2JyksXHJcbi8vICAgICAgdG9nZ2xlOiBmdW5jdGlvbihlKSB7XHJcbi8vICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgICAgICAgdGhpcy5uYXZUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcclxuLy8gICAgICAgICAgdGhpcy5uYXYuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcclxuLy8gICAgICB9XHJcbi8vICAgfTtcclxuXHJcbi8vICBoYW1idXJnZXIubmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4vLyAgICAgIGhhbWJ1cmdlci50b2dnbGUoZSk7XHJcbi8vICB9KTtcclxuLy8gIGhhbWJ1cmdlci5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbi8vICAgICAgaGFtYnVyZ2VyLnRvZ2dsZShlKTtcclxuLy8gIH0pO1xyXG4vLyB9XHJcblxyXG4vLyBzaHV0TWVudSgpO1xyXG5cclxudmFyIHNodXRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1pdGVtJyk7XHJcbnNodXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgXHJcbn0pIiwiLyohIHBpY3R1cmVmaWxsIC0gdjMuMC4yIC0gMjAxNi0wMi0xMlxuICogaHR0cHM6Ly9zY290dGplaGwuZ2l0aHViLmlvL3BpY3R1cmVmaWxsL1xuICogQ29weXJpZ2h0IChjKSAyMDE2IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGplaGwvcGljdHVyZWZpbGwvYmxvYi9tYXN0ZXIvQXV0aG9ycy50eHQ7IExpY2Vuc2VkIE1JVFxuICovXG4vKiEgR2Vja28tUGljdHVyZSAtIHYxLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGplaGwvcGljdHVyZWZpbGwvdHJlZS8zLjAvc3JjL3BsdWdpbnMvZ2Vja28tcGljdHVyZVxuICogRmlyZWZveCdzIGVhcmx5IHBpY3R1cmUgaW1wbGVtZW50YXRpb24gKHByaW9yIHRvIEZGNDEpIGlzIHN0YXRpYyBhbmQgZG9lc1xuICogbm90IHJlYWN0IHRvIHZpZXdwb3J0IGNoYW5nZXMuIFRoaXMgdGlueSBtb2R1bGUgZml4ZXMgdGhpcy5cbiAqL1xuKGZ1bmN0aW9uKHdpbmRvdykge1xuXHQvKmpzaGludCBlcW51bGw6dHJ1ZSAqL1xuXHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5cdGlmICggd2luZG93LkhUTUxQaWN0dXJlRWxlbWVudCAmJiAoKC9lY2tvLykudGVzdCh1YSkgJiYgdWEubWF0Y2goL3J2XFw6KFxcZCspLykgJiYgUmVnRXhwLiQxIDwgNDUpICkge1xuXHRcdGFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRpbWVyO1xuXG5cdFx0XHR2YXIgZHVtbXlTcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuXG5cdFx0XHR2YXIgZml4UmVzcGltZyA9IGZ1bmN0aW9uKGltZykge1xuXHRcdFx0XHR2YXIgc291cmNlLCBzaXplcztcblx0XHRcdFx0dmFyIHBpY3R1cmUgPSBpbWcucGFyZW50Tm9kZTtcblxuXHRcdFx0XHRpZiAocGljdHVyZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIlBJQ1RVUkVcIikge1xuXHRcdFx0XHRcdHNvdXJjZSA9IGR1bW15U3JjLmNsb25lTm9kZSgpO1xuXG5cdFx0XHRcdFx0cGljdHVyZS5pbnNlcnRCZWZvcmUoc291cmNlLCBwaWN0dXJlLmZpcnN0RWxlbWVudENoaWxkKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cGljdHVyZS5yZW1vdmVDaGlsZChzb3VyY2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFpbWcuX3BmTGFzdFNpemUgfHwgaW1nLm9mZnNldFdpZHRoID4gaW1nLl9wZkxhc3RTaXplKSB7XG5cdFx0XHRcdFx0aW1nLl9wZkxhc3RTaXplID0gaW1nLm9mZnNldFdpZHRoO1xuXHRcdFx0XHRcdHNpemVzID0gaW1nLnNpemVzO1xuXHRcdFx0XHRcdGltZy5zaXplcyArPSBcIiwxMDB2d1wiO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpbWcuc2l6ZXMgPSBzaXplcztcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dmFyIGZpbmRQaWN0dXJlSW1ncyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaTtcblx0XHRcdFx0dmFyIGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicGljdHVyZSA+IGltZywgaW1nW3NyY3NldF1bc2l6ZXNdXCIpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGZpeFJlc3BpbWcoaW1nc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2YXIgb25SZXNpemUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KGZpbmRQaWN0dXJlSW1ncywgOTkpO1xuXHRcdFx0fTtcblx0XHRcdHZhciBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhICYmIG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik7XG5cdFx0XHR2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRvblJlc2l6ZSgpO1xuXG5cdFx0XHRcdGlmIChtcSAmJiBtcS5hZGRMaXN0ZW5lcikge1xuXHRcdFx0XHRcdG1xLmFkZExpc3RlbmVyKG9uUmVzaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0ZHVtbXlTcmMuc3Jjc2V0ID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PVwiO1xuXG5cdFx0XHRpZiAoL15bY3xpXXxkJC8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlIHx8IFwiXCIpKSB7XG5cdFx0XHRcdGluaXQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb25SZXNpemU7XG5cdFx0fSkoKSk7XG5cdH1cbn0pKHdpbmRvdyk7XG5cbi8qISBQaWN0dXJlZmlsbCAtIHYzLjAuMlxuICogaHR0cDovL3Njb3R0amVobC5naXRodWIuaW8vcGljdHVyZWZpbGxcbiAqIENvcHlyaWdodCAoYykgMjAxNSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRqZWhsL3BpY3R1cmVmaWxsL2Jsb2IvbWFzdGVyL0F1dGhvcnMudHh0O1xuICogIExpY2Vuc2U6IE1JVFxuICovXG5cbihmdW5jdGlvbiggd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkICkge1xuXHQvLyBFbmFibGUgc3RyaWN0IG1vZGVcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0Ly8gSFRNTCBzaGltfHYgaXQgZm9yIG9sZCBJRSAoSUU5IHdpbGwgc3RpbGwgbmVlZCB0aGUgSFRNTCB2aWRlbyB0YWcgd29ya2Fyb3VuZClcblx0ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJwaWN0dXJlXCIgKTtcblxuXHR2YXIgd2FybiwgZW1pbnB4LCBhbHdheXNDaGVja1dEZXNjcmlwdG9yLCBldmFsSWQ7XG5cdC8vIGxvY2FsIG9iamVjdCBmb3IgbWV0aG9kIHJlZmVyZW5jZXMgYW5kIHRlc3RpbmcgZXhwb3N1cmVcblx0dmFyIHBmID0ge307XG5cdHZhciBpc1N1cHBvcnRUZXN0UmVhZHkgPSBmYWxzZTtcblx0dmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuXHR2YXIgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImltZ1wiICk7XG5cdHZhciBnZXRJbWdBdHRyID0gaW1hZ2UuZ2V0QXR0cmlidXRlO1xuXHR2YXIgc2V0SW1nQXR0ciA9IGltYWdlLnNldEF0dHJpYnV0ZTtcblx0dmFyIHJlbW92ZUltZ0F0dHIgPSBpbWFnZS5yZW1vdmVBdHRyaWJ1dGU7XG5cdHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHR2YXIgdHlwZXMgPSB7fTtcblx0dmFyIGNmZyA9IHtcblx0XHQvL3Jlc291cmNlIHNlbGVjdGlvbjpcblx0XHRhbGdvcml0aG06IFwiXCJcblx0fTtcblx0dmFyIHNyY0F0dHIgPSBcImRhdGEtcGZzcmNcIjtcblx0dmFyIHNyY3NldEF0dHIgPSBzcmNBdHRyICsgXCJzZXRcIjtcblx0Ly8gdWEgc25pZmZpbmcgaXMgZG9uZSBmb3IgdW5kZXRlY3RhYmxlIGltZyBsb2FkaW5nIGZlYXR1cmVzLFxuXHQvLyB0byBkbyBzb21lIG5vbiBjcnVjaWFsIHBlcmYgb3B0aW1pemF0aW9uc1xuXHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXHR2YXIgc3VwcG9ydEFib3J0ID0gKC9yaWRlbnQvKS50ZXN0KHVhKSB8fCAoKC9lY2tvLykudGVzdCh1YSkgJiYgdWEubWF0Y2goL3J2XFw6KFxcZCspLykgJiYgUmVnRXhwLiQxID4gMzUgKTtcblx0dmFyIGN1clNyY1Byb3AgPSBcImN1cnJlbnRTcmNcIjtcblx0dmFyIHJlZ1dEZXNjID0gL1xccytcXCs/XFxkKyhlXFxkKyk/dy87XG5cdHZhciByZWdTaXplID0gLyhcXChbXildK1xcKSk/XFxzKiguKykvO1xuXHR2YXIgc2V0T3B0aW9ucyA9IHdpbmRvdy5waWN0dXJlZmlsbENGRztcblx0LyoqXG5cdCAqIFNob3J0Y3V0IHByb3BlcnR5IGZvciBodHRwczovL3czYy5naXRodWIuaW8vd2ViYXBwc2VjL3NwZWNzL21peGVkY29udGVudC8jcmVzdHJpY3RzLW1peGVkLWNvbnRlbnQgKCBmb3IgZWFzeSBvdmVycmlkaW5nIGluIHRlc3RzIClcblx0ICovXG5cdC8vIGJhc2VTdHlsZSBhbHNvIHVzZWQgYnkgZ2V0RW1WYWx1ZSAoaS5lLjogd2lkdGg6IDFlbSBpcyBpbXBvcnRhbnQpXG5cdHZhciBiYXNlU3R5bGUgPSBcInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt2aXNpYmlsaXR5OmhpZGRlbjtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MDtib3JkZXI6bm9uZTtmb250LXNpemU6MWVtO3dpZHRoOjFlbTtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDBweCwgMHB4LCAwcHgsIDBweClcIjtcblx0dmFyIGZzQ3NzID0gXCJmb250LXNpemU6MTAwJSFpbXBvcnRhbnQ7XCI7XG5cdHZhciBpc1Z3RGlydHkgPSB0cnVlO1xuXG5cdHZhciBjc3NDYWNoZSA9IHt9O1xuXHR2YXIgc2l6ZUxlbmd0aENhY2hlID0ge307XG5cdHZhciBEUFIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblx0dmFyIHVuaXRzID0ge1xuXHRcdHB4OiAxLFxuXHRcdFwiaW5cIjogOTZcblx0fTtcblx0dmFyIGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiYVwiICk7XG5cdC8qKlxuXHQgKiBhbHJlYWR5UnVuIGZsYWcgdXNlZCBmb3Igc2V0T3B0aW9ucy4gaXMgaXQgdHJ1ZSBzZXRPcHRpb25zIHdpbGwgcmVldmFsdWF0ZVxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdHZhciBhbHJlYWR5UnVuID0gZmFsc2U7XG5cblx0Ly8gUmV1c2FibGUsIG5vbi1cImdcIiBSZWdleGVzXG5cblx0Ly8gKERvbid0IHVzZSBcXHMsIHRvIGF2b2lkIG1hdGNoaW5nIG5vbi1icmVha2luZyBzcGFjZS4pXG5cdHZhciByZWdleExlYWRpbmdTcGFjZXMgPSAvXlsgXFx0XFxuXFxyXFx1MDAwY10rLyxcblx0ICAgIHJlZ2V4TGVhZGluZ0NvbW1hc09yU3BhY2VzID0gL15bLCBcXHRcXG5cXHJcXHUwMDBjXSsvLFxuXHQgICAgcmVnZXhMZWFkaW5nTm90U3BhY2VzID0gL15bXiBcXHRcXG5cXHJcXHUwMDBjXSsvLFxuXHQgICAgcmVnZXhUcmFpbGluZ0NvbW1hcyA9IC9bLF0rJC8sXG5cdCAgICByZWdleE5vbk5lZ2F0aXZlSW50ZWdlciA9IC9eXFxkKyQvLFxuXG5cdCAgICAvLyAoIFBvc2l0aXZlIG9yIG5lZ2F0aXZlIG9yIHVuc2lnbmVkIGludGVnZXJzIG9yIGRlY2ltYWxzLCB3aXRob3V0IG9yIHdpdGhvdXQgZXhwb25lbnRzLlxuXHQgICAgLy8gTXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSBkaWdpdC5cblx0ICAgIC8vIEFjY29yZGluZyB0byBzcGVjIHRlc3RzIGFueSBkZWNpbWFsIHBvaW50IG11c3QgYmUgZm9sbG93ZWQgYnkgYSBkaWdpdC5cblx0ICAgIC8vIE5vIGxlYWRpbmcgcGx1cyBzaWduIGlzIGFsbG93ZWQuKVxuXHQgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5mcmFzdHJ1Y3R1cmUuaHRtbCN2YWxpZC1mbG9hdGluZy1wb2ludC1udW1iZXJcblx0ICAgIHJlZ2V4RmxvYXRpbmdQb2ludCA9IC9eLT8oPzpbMC05XSt8WzAtOV0qXFwuWzAtOV0rKSg/OltlRV1bKy1dP1swLTldKyk/JC87XG5cblx0dmFyIG9uID0gZnVuY3Rpb24ob2JqLCBldnQsIGZuLCBjYXB0dXJlKSB7XG5cdFx0aWYgKCBvYmouYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHRcdG9iai5hZGRFdmVudExpc3RlbmVyKGV2dCwgZm4sIGNhcHR1cmUgfHwgZmFsc2UpO1xuXHRcdH0gZWxzZSBpZiAoIG9iai5hdHRhY2hFdmVudCApIHtcblx0XHRcdG9iai5hdHRhY2hFdmVudCggXCJvblwiICsgZXZ0LCBmbik7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBzaW1wbGUgbWVtb2l6ZSBmdW5jdGlvbjpcblx0ICovXG5cblx0dmFyIG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBjYWNoZSA9IHt9O1xuXHRcdHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuXHRcdFx0aWYgKCAhKGlucHV0IGluIGNhY2hlKSApIHtcblx0XHRcdFx0Y2FjaGVbIGlucHV0IF0gPSBmbihpbnB1dCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2FjaGVbIGlucHV0IF07XG5cdFx0fTtcblx0fTtcblxuXHQvLyBVVElMSVRZIEZVTkNUSU9OU1xuXG5cdC8vIE1hbnVhbCBpcyBmYXN0ZXIgdGhhbiBSZWdFeFxuXHQvLyBodHRwOi8vanNwZXJmLmNvbS93aGl0ZXNwYWNlLWNoYXJhY3Rlci81XG5cdGZ1bmN0aW9uIGlzU3BhY2UoYykge1xuXHRcdHJldHVybiAoYyA9PT0gXCJcXHUwMDIwXCIgfHwgLy8gc3BhY2Vcblx0XHQgICAgICAgIGMgPT09IFwiXFx1MDAwOVwiIHx8IC8vIGhvcml6b250YWwgdGFiXG5cdFx0ICAgICAgICBjID09PSBcIlxcdTAwMEFcIiB8fCAvLyBuZXcgbGluZVxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDBDXCIgfHwgLy8gZm9ybSBmZWVkXG5cdFx0ICAgICAgICBjID09PSBcIlxcdTAwMERcIik7ICAvLyBjYXJyaWFnZSByZXR1cm5cblx0fVxuXG5cdC8qKlxuXHQgKiBnZXRzIGEgbWVkaWFxdWVyeSBhbmQgcmV0dXJucyBhIGJvb2xlYW4gb3IgZ2V0cyBhIGNzcyBsZW5ndGggYW5kIHJldHVybnMgYSBudW1iZXJcblx0ICogQHBhcmFtIGNzcyBtZWRpYXF1ZXJpZXMgb3IgY3NzIGxlbmd0aFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxudW1iZXJ9XG5cdCAqXG5cdCAqIGJhc2VkIG9uOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL2RiNGY3NzAwOWIxNTVmMDgzNzM4XG5cdCAqL1xuXHR2YXIgZXZhbENTUyA9IChmdW5jdGlvbigpIHtcblxuXHRcdHZhciByZWdMZW5ndGggPSAvXihbXFxkXFwuXSspKGVtfHZ3fHB4KSQvO1xuXHRcdHZhciByZXBsYWNlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cywgaW5kZXggPSAwLCBzdHJpbmcgPSBhcmdzWzBdO1xuXHRcdFx0d2hpbGUgKCsraW5kZXggaW4gYXJncykge1xuXHRcdFx0XHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShhcmdzW2luZGV4XSwgYXJnc1srK2luZGV4XSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyaW5nO1xuXHRcdH07XG5cblx0XHR2YXIgYnVpbGRTdHIgPSBtZW1vaXplKGZ1bmN0aW9uKGNzcykge1xuXG5cdFx0XHRyZXR1cm4gXCJyZXR1cm4gXCIgKyByZXBsYWNlKChjc3MgfHwgXCJcIikudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0Ly8gaW50ZXJwcmV0IGBhbmRgXG5cdFx0XHRcdC9cXGJhbmRcXGIvZywgXCImJlwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBgLGBcblx0XHRcdFx0LywvZywgXCJ8fFwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBgbWluLWAgYXMgPj1cblx0XHRcdFx0L21pbi0oW2Etei1cXHNdKyk6L2csIFwiZS4kMT49XCIsXG5cblx0XHRcdFx0Ly8gaW50ZXJwcmV0IGBtYXgtYCBhcyA8PVxuXHRcdFx0XHQvbWF4LShbYS16LVxcc10rKTovZywgXCJlLiQxPD1cIixcblxuXHRcdFx0XHQvL2NhbGMgdmFsdWVcblx0XHRcdFx0L2NhbGMoW14pXSspL2csIFwiKCQxKVwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBjc3MgdmFsdWVzXG5cdFx0XHRcdC8oXFxkK1tcXC5dKltcXGRdKikoW2Etel0rKS9nLCBcIigkMSAqIGUuJDIpXCIsXG5cdFx0XHRcdC8vbWFrZSBldmFsIGxlc3MgZXZpbFxuXHRcdFx0XHQvXig/IShlLlthLXpdfFswLTlcXC4mPXw+PFxcK1xcLVxcKlxcKFxcKVxcL10pKS4qL2lnLCBcIlwiXG5cdFx0XHQpICsgXCI7XCI7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oY3NzLCBsZW5ndGgpIHtcblx0XHRcdHZhciBwYXJzZWRMZW5ndGg7XG5cdFx0XHRpZiAoIShjc3MgaW4gY3NzQ2FjaGUpKSB7XG5cdFx0XHRcdGNzc0NhY2hlW2Nzc10gPSBmYWxzZTtcblx0XHRcdFx0aWYgKGxlbmd0aCAmJiAocGFyc2VkTGVuZ3RoID0gY3NzLm1hdGNoKCByZWdMZW5ndGggKSkpIHtcblx0XHRcdFx0XHRjc3NDYWNoZVtjc3NdID0gcGFyc2VkTGVuZ3RoWyAxIF0gKiB1bml0c1twYXJzZWRMZW5ndGhbIDIgXV07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Lypqc2hpbnQgZXZpbDp0cnVlICovXG5cdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0Y3NzQ2FjaGVbY3NzXSA9IG5ldyBGdW5jdGlvbihcImVcIiwgYnVpbGRTdHIoY3NzKSkodW5pdHMpO1xuXHRcdFx0XHRcdH0gY2F0Y2goZSkge31cblx0XHRcdFx0XHQvKmpzaGludCBldmlsOmZhbHNlICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjc3NDYWNoZVtjc3NdO1xuXHRcdH07XG5cdH0pKCk7XG5cblx0dmFyIHNldFJlc29sdXRpb24gPSBmdW5jdGlvbiggY2FuZGlkYXRlLCBzaXplc2F0dHIgKSB7XG5cdFx0aWYgKCBjYW5kaWRhdGUudyApIHsgLy8gaCA9IG1lYW5zIGhlaWdodDogfHwgZGVzY3JpcHRvci50eXBlID09PSAnaCcgZG8gbm90IGhhbmRsZSB5ZXQuLi5cblx0XHRcdGNhbmRpZGF0ZS5jV2lkdGggPSBwZi5jYWxjTGlzdExlbmd0aCggc2l6ZXNhdHRyIHx8IFwiMTAwdndcIiApO1xuXHRcdFx0Y2FuZGlkYXRlLnJlcyA9IGNhbmRpZGF0ZS53IC8gY2FuZGlkYXRlLmNXaWR0aCA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhbmRpZGF0ZS5yZXMgPSBjYW5kaWRhdGUuZDtcblx0XHR9XG5cdFx0cmV0dXJuIGNhbmRpZGF0ZTtcblx0fTtcblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIG9wdFxuXHQgKi9cblx0dmFyIHBpY3R1cmVmaWxsID0gZnVuY3Rpb24oIG9wdCApIHtcblxuXHRcdGlmICghaXNTdXBwb3J0VGVzdFJlYWR5KSB7cmV0dXJuO31cblxuXHRcdHZhciBlbGVtZW50cywgaSwgcGxlbjtcblxuXHRcdHZhciBvcHRpb25zID0gb3B0IHx8IHt9O1xuXG5cdFx0aWYgKCBvcHRpb25zLmVsZW1lbnRzICYmIG9wdGlvbnMuZWxlbWVudHMubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRpZiAoIG9wdGlvbnMuZWxlbWVudHMubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJJTUdcIiApIHtcblx0XHRcdFx0b3B0aW9ucy5lbGVtZW50cyA9ICBbIG9wdGlvbnMuZWxlbWVudHMgXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdGlvbnMuY29udGV4dCA9IG9wdGlvbnMuZWxlbWVudHM7XG5cdFx0XHRcdG9wdGlvbnMuZWxlbWVudHMgPSAgbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRlbGVtZW50cyA9IG9wdGlvbnMuZWxlbWVudHMgfHwgcGYucXNhKCAob3B0aW9ucy5jb250ZXh0IHx8IGRvY3VtZW50KSwgKCBvcHRpb25zLnJlZXZhbHVhdGUgfHwgb3B0aW9ucy5yZXNlbGVjdCApID8gcGYuc2VsIDogcGYuc2VsU2hvcnQgKTtcblxuXHRcdGlmICggKHBsZW4gPSBlbGVtZW50cy5sZW5ndGgpICkge1xuXG5cdFx0XHRwZi5zZXR1cFJ1biggb3B0aW9ucyApO1xuXHRcdFx0YWxyZWFkeVJ1biA9IHRydWU7XG5cblx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgZWxlbWVudHNcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgcGxlbjsgaSsrICkge1xuXHRcdFx0XHRwZi5maWxsSW1nKGVsZW1lbnRzWyBpIF0sIG9wdGlvbnMpO1xuXHRcdFx0fVxuXG5cdFx0XHRwZi50ZWFyZG93blJ1biggb3B0aW9ucyApO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogb3V0cHV0cyBhIHdhcm5pbmcgZm9yIHRoZSBkZXZlbG9wZXJcblx0ICogQHBhcmFtIHttZXNzYWdlfVxuXHQgKiBAdHlwZSB7RnVuY3Rpb259XG5cdCAqL1xuXHR3YXJuID0gKCB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4gKSA/XG5cdFx0ZnVuY3Rpb24oIG1lc3NhZ2UgKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oIG1lc3NhZ2UgKTtcblx0XHR9IDpcblx0XHRub29wXG5cdDtcblxuXHRpZiAoICEoY3VyU3JjUHJvcCBpbiBpbWFnZSkgKSB7XG5cdFx0Y3VyU3JjUHJvcCA9IFwic3JjXCI7XG5cdH1cblxuXHQvLyBBZGQgc3VwcG9ydCBmb3Igc3RhbmRhcmQgbWltZSB0eXBlcy5cblx0dHlwZXNbIFwiaW1hZ2UvanBlZ1wiIF0gPSB0cnVlO1xuXHR0eXBlc1sgXCJpbWFnZS9naWZcIiBdID0gdHJ1ZTtcblx0dHlwZXNbIFwiaW1hZ2UvcG5nXCIgXSA9IHRydWU7XG5cblx0ZnVuY3Rpb24gZGV0ZWN0VHlwZVN1cHBvcnQoIHR5cGUsIHR5cGVVcmkgKSB7XG5cdFx0Ly8gYmFzZWQgb24gTW9kZXJuaXpyJ3MgbG9zc2xlc3MgaW1nLXdlYnAgdGVzdFxuXHRcdC8vIG5vdGU6IGFzeW5jaHJvbm91c1xuXHRcdHZhciBpbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKTtcblx0XHRpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0eXBlc1sgdHlwZSBdID0gZmFsc2U7XG5cdFx0XHRwaWN0dXJlZmlsbCgpO1xuXHRcdH07XG5cdFx0aW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0eXBlc1sgdHlwZSBdID0gaW1hZ2Uud2lkdGggPT09IDE7XG5cdFx0XHRwaWN0dXJlZmlsbCgpO1xuXHRcdH07XG5cdFx0aW1hZ2Uuc3JjID0gdHlwZVVyaTtcblx0XHRyZXR1cm4gXCJwZW5kaW5nXCI7XG5cdH1cblxuXHQvLyB0ZXN0IHN2ZyBzdXBwb3J0XG5cdHR5cGVzWyBcImltYWdlL3N2Zyt4bWxcIiBdID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSggXCJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0ltYWdlXCIsIFwiMS4xXCIgKTtcblxuXHQvKipcblx0ICogdXBkYXRlcyB0aGUgaW50ZXJuYWwgdlcgcHJvcGVydHkgd2l0aCB0aGUgY3VycmVudCB2aWV3cG9ydCB3aWR0aCBpbiBweFxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlTWV0cmljcygpIHtcblxuXHRcdGlzVndEaXJ0eSA9IGZhbHNlO1xuXHRcdERQUiA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXHRcdGNzc0NhY2hlID0ge307XG5cdFx0c2l6ZUxlbmd0aENhY2hlID0ge307XG5cblx0XHRwZi5EUFIgPSBEUFIgfHwgMTtcblxuXHRcdHVuaXRzLndpZHRoID0gTWF0aC5tYXgod2luZG93LmlubmVyV2lkdGggfHwgMCwgZG9jRWxlbS5jbGllbnRXaWR0aCk7XG5cdFx0dW5pdHMuaGVpZ2h0ID0gTWF0aC5tYXgod2luZG93LmlubmVySGVpZ2h0IHx8IDAsIGRvY0VsZW0uY2xpZW50SGVpZ2h0KTtcblxuXHRcdHVuaXRzLnZ3ID0gdW5pdHMud2lkdGggLyAxMDA7XG5cdFx0dW5pdHMudmggPSB1bml0cy5oZWlnaHQgLyAxMDA7XG5cblx0XHRldmFsSWQgPSBbIHVuaXRzLmhlaWdodCwgdW5pdHMud2lkdGgsIERQUiBdLmpvaW4oXCItXCIpO1xuXG5cdFx0dW5pdHMuZW0gPSBwZi5nZXRFbVZhbHVlKCk7XG5cdFx0dW5pdHMucmVtID0gdW5pdHMuZW07XG5cdH1cblxuXHRmdW5jdGlvbiBjaG9vc2VMb3dSZXMoIGxvd2VyVmFsdWUsIGhpZ2hlclZhbHVlLCBkcHJWYWx1ZSwgaXNDYWNoZWQgKSB7XG5cdFx0dmFyIGJvbnVzRmFjdG9yLCB0b29NdWNoLCBib251cywgbWVhbkRlbnNpdHk7XG5cblx0XHQvL2V4cGVyaW1lbnRhbFxuXHRcdGlmIChjZmcuYWxnb3JpdGhtID09PSBcInNhdmVEYXRhXCIgKXtcblx0XHRcdGlmICggbG93ZXJWYWx1ZSA+IDIuNyApIHtcblx0XHRcdFx0bWVhbkRlbnNpdHkgPSBkcHJWYWx1ZSArIDE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b29NdWNoID0gaGlnaGVyVmFsdWUgLSBkcHJWYWx1ZTtcblx0XHRcdFx0Ym9udXNGYWN0b3IgPSBNYXRoLnBvdyhsb3dlclZhbHVlIC0gMC42LCAxLjUpO1xuXG5cdFx0XHRcdGJvbnVzID0gdG9vTXVjaCAqIGJvbnVzRmFjdG9yO1xuXG5cdFx0XHRcdGlmIChpc0NhY2hlZCkge1xuXHRcdFx0XHRcdGJvbnVzICs9IDAuMSAqIGJvbnVzRmFjdG9yO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWVhbkRlbnNpdHkgPSBsb3dlclZhbHVlICsgYm9udXM7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1lYW5EZW5zaXR5ID0gKGRwclZhbHVlID4gMSkgP1xuXHRcdFx0XHRNYXRoLnNxcnQobG93ZXJWYWx1ZSAqIGhpZ2hlclZhbHVlKSA6XG5cdFx0XHRcdGxvd2VyVmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lYW5EZW5zaXR5ID4gZHByVmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBhcHBseUJlc3RDYW5kaWRhdGUoIGltZyApIHtcblx0XHR2YXIgc3JjU2V0Q2FuZGlkYXRlcztcblx0XHR2YXIgbWF0Y2hpbmdTZXQgPSBwZi5nZXRTZXQoIGltZyApO1xuXHRcdHZhciBldmFsdWF0ZWQgPSBmYWxzZTtcblx0XHRpZiAoIG1hdGNoaW5nU2V0ICE9PSBcInBlbmRpbmdcIiApIHtcblx0XHRcdGV2YWx1YXRlZCA9IGV2YWxJZDtcblx0XHRcdGlmICggbWF0Y2hpbmdTZXQgKSB7XG5cdFx0XHRcdHNyY1NldENhbmRpZGF0ZXMgPSBwZi5zZXRSZXMoIG1hdGNoaW5nU2V0ICk7XG5cdFx0XHRcdHBmLmFwcGx5U2V0Q2FuZGlkYXRlKCBzcmNTZXRDYW5kaWRhdGVzLCBpbWcgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aW1nWyBwZi5ucyBdLmV2YWxlZCA9IGV2YWx1YXRlZDtcblx0fVxuXG5cdGZ1bmN0aW9uIGFzY2VuZGluZ1NvcnQoIGEsIGIgKSB7XG5cdFx0cmV0dXJuIGEucmVzIC0gYi5yZXM7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRTcmNUb0N1ciggaW1nLCBzcmMsIHNldCApIHtcblx0XHR2YXIgY2FuZGlkYXRlO1xuXHRcdGlmICggIXNldCAmJiBzcmMgKSB7XG5cdFx0XHRzZXQgPSBpbWdbIHBmLm5zIF0uc2V0cztcblx0XHRcdHNldCA9IHNldCAmJiBzZXRbc2V0Lmxlbmd0aCAtIDFdO1xuXHRcdH1cblxuXHRcdGNhbmRpZGF0ZSA9IGdldENhbmRpZGF0ZUZvclNyYyhzcmMsIHNldCk7XG5cblx0XHRpZiAoIGNhbmRpZGF0ZSApIHtcblx0XHRcdHNyYyA9IHBmLm1ha2VVcmwoc3JjKTtcblx0XHRcdGltZ1sgcGYubnMgXS5jdXJTcmMgPSBzcmM7XG5cdFx0XHRpbWdbIHBmLm5zIF0uY3VyQ2FuID0gY2FuZGlkYXRlO1xuXG5cdFx0XHRpZiAoICFjYW5kaWRhdGUucmVzICkge1xuXHRcdFx0XHRzZXRSZXNvbHV0aW9uKCBjYW5kaWRhdGUsIGNhbmRpZGF0ZS5zZXQuc2l6ZXMgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhbmRpZGF0ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENhbmRpZGF0ZUZvclNyYyggc3JjLCBzZXQgKSB7XG5cdFx0dmFyIGksIGNhbmRpZGF0ZSwgY2FuZGlkYXRlcztcblx0XHRpZiAoIHNyYyAmJiBzZXQgKSB7XG5cdFx0XHRjYW5kaWRhdGVzID0gcGYucGFyc2VTZXQoIHNldCApO1xuXHRcdFx0c3JjID0gcGYubWFrZVVybChzcmMpO1xuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBjYW5kaWRhdGVzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIHNyYyA9PT0gcGYubWFrZVVybChjYW5kaWRhdGVzWyBpIF0udXJsKSApIHtcblx0XHRcdFx0XHRjYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBpIF07XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhbmRpZGF0ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEFsbFNvdXJjZUVsZW1lbnRzKCBwaWN0dXJlLCBjYW5kaWRhdGVzICkge1xuXHRcdHZhciBpLCBsZW4sIHNvdXJjZSwgc3Jjc2V0O1xuXG5cdFx0Ly8gU1BFQyBtaXNtYXRjaCBpbnRlbmRlZCBmb3Igc2l6ZSBhbmQgcGVyZjpcblx0XHQvLyBhY3R1YWxseSBvbmx5IHNvdXJjZSBlbGVtZW50cyBwcmVjZWRpbmcgdGhlIGltZyBzaG91bGQgYmUgdXNlZFxuXHRcdC8vIGFsc28gbm90ZTogZG9uJ3QgdXNlIHFzYSBoZXJlLCBiZWNhdXNlIElFOCBzb21ldGltZXMgZG9lc24ndCBsaWtlIHNvdXJjZSBhcyB0aGUga2V5IHBhcnQgaW4gYSBzZWxlY3RvclxuXHRcdHZhciBzb3VyY2VzID0gcGljdHVyZS5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJzb3VyY2VcIiApO1xuXG5cdFx0Zm9yICggaSA9IDAsIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRzb3VyY2UgPSBzb3VyY2VzWyBpIF07XG5cdFx0XHRzb3VyY2VbIHBmLm5zIF0gPSB0cnVlO1xuXHRcdFx0c3Jjc2V0ID0gc291cmNlLmdldEF0dHJpYnV0ZSggXCJzcmNzZXRcIiApO1xuXG5cdFx0XHQvLyBpZiBzb3VyY2UgZG9lcyBub3QgaGF2ZSBhIHNyY3NldCBhdHRyaWJ1dGUsIHNraXBcblx0XHRcdGlmICggc3Jjc2V0ICkge1xuXHRcdFx0XHRjYW5kaWRhdGVzLnB1c2goIHtcblx0XHRcdFx0XHRzcmNzZXQ6IHNyY3NldCxcblx0XHRcdFx0XHRtZWRpYTogc291cmNlLmdldEF0dHJpYnV0ZSggXCJtZWRpYVwiICksXG5cdFx0XHRcdFx0dHlwZTogc291cmNlLmdldEF0dHJpYnV0ZSggXCJ0eXBlXCIgKSxcblx0XHRcdFx0XHRzaXplczogc291cmNlLmdldEF0dHJpYnV0ZSggXCJzaXplc1wiIClcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTcmNzZXQgUGFyc2VyXG5cdCAqIEJ5IEFsZXggQmVsbCB8ICBNSVQgTGljZW5zZVxuXHQgKlxuXHQgKiBAcmV0dXJucyBBcnJheSBbe3VybDogXywgZDogXywgdzogXywgaDpfLCBzZXQ6Xyg/Pz8/KX0sIC4uLl1cblx0ICpcblx0ICogQmFzZWQgc3VwZXIgZHVwZXIgY2xvc2VseSBvbiB0aGUgcmVmZXJlbmNlIGFsZ29yaXRobSBhdDpcblx0ICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZW1iZWRkZWQtY29udGVudC5odG1sI3BhcnNlLWEtc3Jjc2V0LWF0dHJpYnV0ZVxuXHQgKi9cblxuXHQvLyAxLiBMZXQgaW5wdXQgYmUgdGhlIHZhbHVlIHBhc3NlZCB0byB0aGlzIGFsZ29yaXRobS5cblx0Ly8gKFRPLURPIDogRXhwbGFpbiB3aGF0IFwic2V0XCIgYXJndW1lbnQgaXMgaGVyZS4gTWF5YmUgY2hvb3NlIGEgbW9yZVxuXHQvLyBkZXNjcmlwdGl2ZSAmIG1vcmUgc2VhcmNoYWJsZSBuYW1lLiAgU2luY2UgcGFzc2luZyB0aGUgXCJzZXRcIiBpbiByZWFsbHkgaGFzXG5cdC8vIG5vdGhpbmcgdG8gZG8gd2l0aCBwYXJzaW5nIHByb3BlciwgSSB3b3VsZCBwcmVmZXIgdGhpcyBhc3NpZ25tZW50IGV2ZW50dWFsbHlcblx0Ly8gZ28gaW4gYW4gZXh0ZXJuYWwgZm4uKVxuXHRmdW5jdGlvbiBwYXJzZVNyY3NldChpbnB1dCwgc2V0KSB7XG5cblx0XHRmdW5jdGlvbiBjb2xsZWN0Q2hhcmFjdGVycyhyZWdFeCkge1xuXHRcdFx0dmFyIGNoYXJzLFxuXHRcdFx0ICAgIG1hdGNoID0gcmVnRXguZXhlYyhpbnB1dC5zdWJzdHJpbmcocG9zKSk7XG5cdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0Y2hhcnMgPSBtYXRjaFsgMCBdO1xuXHRcdFx0XHRwb3MgKz0gY2hhcnMubGVuZ3RoO1xuXHRcdFx0XHRyZXR1cm4gY2hhcnM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuXHRcdCAgICB1cmwsXG5cdFx0ICAgIGRlc2NyaXB0b3JzLFxuXHRcdCAgICBjdXJyZW50RGVzY3JpcHRvcixcblx0XHQgICAgc3RhdGUsXG5cdFx0ICAgIGMsXG5cblx0XHQgICAgLy8gMi4gTGV0IHBvc2l0aW9uIGJlIGEgcG9pbnRlciBpbnRvIGlucHV0LCBpbml0aWFsbHkgcG9pbnRpbmcgYXQgdGhlIHN0YXJ0XG5cdFx0ICAgIC8vICAgIG9mIHRoZSBzdHJpbmcuXG5cdFx0ICAgIHBvcyA9IDAsXG5cblx0XHQgICAgLy8gMy4gTGV0IGNhbmRpZGF0ZXMgYmUgYW4gaW5pdGlhbGx5IGVtcHR5IHNvdXJjZSBzZXQuXG5cdFx0ICAgIGNhbmRpZGF0ZXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCogQWRkcyBkZXNjcmlwdG9yIHByb3BlcnRpZXMgdG8gYSBjYW5kaWRhdGUsIHB1c2hlcyB0byB0aGUgY2FuZGlkYXRlcyBhcnJheVxuXHRcdCogQHJldHVybiB1bmRlZmluZWRcblx0XHQqL1xuXHRcdC8vIChEZWNsYXJlZCBvdXRzaWRlIG9mIHRoZSB3aGlsZSBsb29wIHNvIHRoYXQgaXQncyBvbmx5IGNyZWF0ZWQgb25jZS5cblx0XHQvLyAoVGhpcyBmbiBpcyBkZWZpbmVkIGJlZm9yZSBpdCBpcyB1c2VkLCBpbiBvcmRlciB0byBwYXNzIEpTSElOVC5cblx0XHQvLyBVbmZvcnR1bmF0ZWx5IHRoaXMgYnJlYWtzIHRoZSBzZXF1ZW5jaW5nIG9mIHRoZSBzcGVjIGNvbW1lbnRzLiA6LyApXG5cdFx0ZnVuY3Rpb24gcGFyc2VEZXNjcmlwdG9ycygpIHtcblxuXHRcdFx0Ly8gOS4gRGVzY3JpcHRvciBwYXJzZXI6IExldCBlcnJvciBiZSBuby5cblx0XHRcdHZhciBwRXJyb3IgPSBmYWxzZSxcblxuXHRcdFx0Ly8gMTAuIExldCB3aWR0aCBiZSBhYnNlbnQuXG5cdFx0XHQvLyAxMS4gTGV0IGRlbnNpdHkgYmUgYWJzZW50LlxuXHRcdFx0Ly8gMTIuIExldCBmdXR1cmUtY29tcGF0LWggYmUgYWJzZW50LiAoV2UncmUgaW1wbGVtZW50aW5nIGl0IG5vdyBhcyBoKVxuXHRcdFx0ICAgIHcsIGQsIGgsIGksXG5cdFx0XHQgICAgY2FuZGlkYXRlID0ge30sXG5cdFx0XHQgICAgZGVzYywgbGFzdENoYXIsIHZhbHVlLCBpbnRWYWwsIGZsb2F0VmFsO1xuXG5cdFx0XHQvLyAxMy4gRm9yIGVhY2ggZGVzY3JpcHRvciBpbiBkZXNjcmlwdG9ycywgcnVuIHRoZSBhcHByb3ByaWF0ZSBzZXQgb2Ygc3RlcHNcblx0XHRcdC8vIGZyb20gdGhlIGZvbGxvd2luZyBsaXN0OlxuXHRcdFx0Zm9yIChpID0gMCA7IGkgPCBkZXNjcmlwdG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRkZXNjID0gZGVzY3JpcHRvcnNbIGkgXTtcblxuXHRcdFx0XHRsYXN0Q2hhciA9IGRlc2NbIGRlc2MubGVuZ3RoIC0gMSBdO1xuXHRcdFx0XHR2YWx1ZSA9IGRlc2Muc3Vic3RyaW5nKDAsIGRlc2MubGVuZ3RoIC0gMSk7XG5cdFx0XHRcdGludFZhbCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG5cdFx0XHRcdGZsb2F0VmFsID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGRlc2NyaXB0b3IgY29uc2lzdHMgb2YgYSB2YWxpZCBub24tbmVnYXRpdmUgaW50ZWdlciBmb2xsb3dlZCBieVxuXHRcdFx0XHQvLyBhIFUrMDA3NyBMQVRJTiBTTUFMTCBMRVRURVIgVyBjaGFyYWN0ZXJcblx0XHRcdFx0aWYgKHJlZ2V4Tm9uTmVnYXRpdmVJbnRlZ2VyLnRlc3QodmFsdWUpICYmIChsYXN0Q2hhciA9PT0gXCJ3XCIpKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB3aWR0aCBhbmQgZGVuc2l0eSBhcmUgbm90IGJvdGggYWJzZW50LCB0aGVuIGxldCBlcnJvciBiZSB5ZXMuXG5cdFx0XHRcdFx0aWYgKHcgfHwgZCkge3BFcnJvciA9IHRydWU7fVxuXG5cdFx0XHRcdFx0Ly8gQXBwbHkgdGhlIHJ1bGVzIGZvciBwYXJzaW5nIG5vbi1uZWdhdGl2ZSBpbnRlZ2VycyB0byB0aGUgZGVzY3JpcHRvci5cblx0XHRcdFx0XHQvLyBJZiB0aGUgcmVzdWx0IGlzIHplcm8sIGxldCBlcnJvciBiZSB5ZXMuXG5cdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCBsZXQgd2lkdGggYmUgdGhlIHJlc3VsdC5cblx0XHRcdFx0XHRpZiAoaW50VmFsID09PSAwKSB7cEVycm9yID0gdHJ1ZTt9IGVsc2Uge3cgPSBpbnRWYWw7fVxuXG5cdFx0XHRcdC8vIElmIHRoZSBkZXNjcmlwdG9yIGNvbnNpc3RzIG9mIGEgdmFsaWQgZmxvYXRpbmctcG9pbnQgbnVtYmVyIGZvbGxvd2VkIGJ5XG5cdFx0XHRcdC8vIGEgVSswMDc4IExBVElOIFNNQUxMIExFVFRFUiBYIGNoYXJhY3RlclxuXHRcdFx0XHR9IGVsc2UgaWYgKHJlZ2V4RmxvYXRpbmdQb2ludC50ZXN0KHZhbHVlKSAmJiAobGFzdENoYXIgPT09IFwieFwiKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2lkdGgsIGRlbnNpdHkgYW5kIGZ1dHVyZS1jb21wYXQtaCBhcmUgbm90IGFsbCBhYnNlbnQsIHRoZW4gbGV0IGVycm9yXG5cdFx0XHRcdFx0Ly8gYmUgeWVzLlxuXHRcdFx0XHRcdGlmICh3IHx8IGQgfHwgaCkge3BFcnJvciA9IHRydWU7fVxuXG5cdFx0XHRcdFx0Ly8gQXBwbHkgdGhlIHJ1bGVzIGZvciBwYXJzaW5nIGZsb2F0aW5nLXBvaW50IG51bWJlciB2YWx1ZXMgdG8gdGhlIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyBsZXNzIHRoYW4gemVybywgbGV0IGVycm9yIGJlIHllcy4gT3RoZXJ3aXNlLCBsZXQgZGVuc2l0eVxuXHRcdFx0XHRcdC8vIGJlIHRoZSByZXN1bHQuXG5cdFx0XHRcdFx0aWYgKGZsb2F0VmFsIDwgMCkge3BFcnJvciA9IHRydWU7fSBlbHNlIHtkID0gZmxvYXRWYWw7fVxuXG5cdFx0XHRcdC8vIElmIHRoZSBkZXNjcmlwdG9yIGNvbnNpc3RzIG9mIGEgdmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXIgZm9sbG93ZWQgYnlcblx0XHRcdFx0Ly8gYSBVKzAwNjggTEFUSU4gU01BTEwgTEVUVEVSIEggY2hhcmFjdGVyXG5cdFx0XHRcdH0gZWxzZSBpZiAocmVnZXhOb25OZWdhdGl2ZUludGVnZXIudGVzdCh2YWx1ZSkgJiYgKGxhc3RDaGFyID09PSBcImhcIikpIHtcblxuXHRcdFx0XHRcdC8vIElmIGhlaWdodCBhbmQgZGVuc2l0eSBhcmUgbm90IGJvdGggYWJzZW50LCB0aGVuIGxldCBlcnJvciBiZSB5ZXMuXG5cdFx0XHRcdFx0aWYgKGggfHwgZCkge3BFcnJvciA9IHRydWU7fVxuXG5cdFx0XHRcdFx0Ly8gQXBwbHkgdGhlIHJ1bGVzIGZvciBwYXJzaW5nIG5vbi1uZWdhdGl2ZSBpbnRlZ2VycyB0byB0aGUgZGVzY3JpcHRvci5cblx0XHRcdFx0XHQvLyBJZiB0aGUgcmVzdWx0IGlzIHplcm8sIGxldCBlcnJvciBiZSB5ZXMuIE90aGVyd2lzZSwgbGV0IGZ1dHVyZS1jb21wYXQtaFxuXHRcdFx0XHRcdC8vIGJlIHRoZSByZXN1bHQuXG5cdFx0XHRcdFx0aWYgKGludFZhbCA9PT0gMCkge3BFcnJvciA9IHRydWU7fSBlbHNlIHtoID0gaW50VmFsO31cblxuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlLCBMZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHR9IGVsc2Uge3BFcnJvciA9IHRydWU7fVxuXHRcdFx0fSAvLyAoY2xvc2Ugc3RlcCAxMyBmb3IgbG9vcClcblxuXHRcdFx0Ly8gMTUuIElmIGVycm9yIGlzIHN0aWxsIG5vLCB0aGVuIGFwcGVuZCBhIG5ldyBpbWFnZSBzb3VyY2UgdG8gY2FuZGlkYXRlcyB3aG9zZVxuXHRcdFx0Ly8gVVJMIGlzIHVybCwgYXNzb2NpYXRlZCB3aXRoIGEgd2lkdGggd2lkdGggaWYgbm90IGFic2VudCBhbmQgYSBwaXhlbFxuXHRcdFx0Ly8gZGVuc2l0eSBkZW5zaXR5IGlmIG5vdCBhYnNlbnQuIE90aGVyd2lzZSwgdGhlcmUgaXMgYSBwYXJzZSBlcnJvci5cblx0XHRcdGlmICghcEVycm9yKSB7XG5cdFx0XHRcdGNhbmRpZGF0ZS51cmwgPSB1cmw7XG5cblx0XHRcdFx0aWYgKHcpIHsgY2FuZGlkYXRlLncgPSB3O31cblx0XHRcdFx0aWYgKGQpIHsgY2FuZGlkYXRlLmQgPSBkO31cblx0XHRcdFx0aWYgKGgpIHsgY2FuZGlkYXRlLmggPSBoO31cblx0XHRcdFx0aWYgKCFoICYmICFkICYmICF3KSB7Y2FuZGlkYXRlLmQgPSAxO31cblx0XHRcdFx0aWYgKGNhbmRpZGF0ZS5kID09PSAxKSB7c2V0LmhhczF4ID0gdHJ1ZTt9XG5cdFx0XHRcdGNhbmRpZGF0ZS5zZXQgPSBzZXQ7XG5cblx0XHRcdFx0Y2FuZGlkYXRlcy5wdXNoKGNhbmRpZGF0ZSk7XG5cdFx0XHR9XG5cdFx0fSAvLyAoY2xvc2UgcGFyc2VEZXNjcmlwdG9ycyBmbilcblxuXHRcdC8qKlxuXHRcdCogVG9rZW5pemVzIGRlc2NyaXB0b3IgcHJvcGVydGllcyBwcmlvciB0byBwYXJzaW5nXG5cdFx0KiBSZXR1cm5zIHVuZGVmaW5lZC5cblx0XHQqIChBZ2FpbiwgdGhpcyBmbiBpcyBkZWZpbmVkIGJlZm9yZSBpdCBpcyB1c2VkLCBpbiBvcmRlciB0byBwYXNzIEpTSElOVC5cblx0XHQqIFVuZm9ydHVuYXRlbHkgdGhpcyBicmVha3MgdGhlIGxvZ2ljYWwgc2VxdWVuY2luZyBvZiB0aGUgc3BlYyBjb21tZW50cy4gOi8gKVxuXHRcdCovXG5cdFx0ZnVuY3Rpb24gdG9rZW5pemUoKSB7XG5cblx0XHRcdC8vIDguMS4gRGVzY3JpcHRvciB0b2tlbmlzZXI6IFNraXAgd2hpdGVzcGFjZVxuXHRcdFx0Y29sbGVjdENoYXJhY3RlcnMocmVnZXhMZWFkaW5nU3BhY2VzKTtcblxuXHRcdFx0Ly8gOC4yLiBMZXQgY3VycmVudCBkZXNjcmlwdG9yIGJlIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IFwiXCI7XG5cblx0XHRcdC8vIDguMy4gTGV0IHN0YXRlIGJlIGluIGRlc2NyaXB0b3IuXG5cdFx0XHRzdGF0ZSA9IFwiaW4gZGVzY3JpcHRvclwiO1xuXG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXG5cdFx0XHRcdC8vIDguNC4gTGV0IGMgYmUgdGhlIGNoYXJhY3RlciBhdCBwb3NpdGlvbi5cblx0XHRcdFx0YyA9IGlucHV0LmNoYXJBdChwb3MpO1xuXG5cdFx0XHRcdC8vICBEbyB0aGUgZm9sbG93aW5nIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2Ygc3RhdGUuXG5cdFx0XHRcdC8vICBGb3IgdGhlIHB1cnBvc2Ugb2YgdGhpcyBzdGVwLCBcIkVPRlwiIGlzIGEgc3BlY2lhbCBjaGFyYWN0ZXIgcmVwcmVzZW50aW5nXG5cdFx0XHRcdC8vICB0aGF0IHBvc2l0aW9uIGlzIHBhc3QgdGhlIGVuZCBvZiBpbnB1dC5cblxuXHRcdFx0XHQvLyBJbiBkZXNjcmlwdG9yXG5cdFx0XHRcdGlmIChzdGF0ZSA9PT0gXCJpbiBkZXNjcmlwdG9yXCIpIHtcblx0XHRcdFx0XHQvLyBEbyB0aGUgZm9sbG93aW5nLCBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGM6XG5cblx0XHRcdFx0ICAvLyBTcGFjZSBjaGFyYWN0ZXJcblx0XHRcdFx0ICAvLyBJZiBjdXJyZW50IGRlc2NyaXB0b3IgaXMgbm90IGVtcHR5LCBhcHBlbmQgY3VycmVudCBkZXNjcmlwdG9yIHRvXG5cdFx0XHRcdCAgLy8gZGVzY3JpcHRvcnMgYW5kIGxldCBjdXJyZW50IGRlc2NyaXB0b3IgYmUgdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdFx0ICAvLyBTZXQgc3RhdGUgdG8gYWZ0ZXIgZGVzY3JpcHRvci5cblx0XHRcdFx0XHRpZiAoaXNTcGFjZShjKSkge1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnREZXNjcmlwdG9yKSB7XG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IFwiXCI7XG5cdFx0XHRcdFx0XHRcdHN0YXRlID0gXCJhZnRlciBkZXNjcmlwdG9yXCI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBVKzAwMkMgQ09NTUEgKCwpXG5cdFx0XHRcdFx0Ly8gQWR2YW5jZSBwb3NpdGlvbiB0byB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gaW5wdXQuIElmIGN1cnJlbnQgZGVzY3JpcHRvclxuXHRcdFx0XHRcdC8vIGlzIG5vdCBlbXB0eSwgYXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0byBkZXNjcmlwdG9ycy4gSnVtcCB0byB0aGUgc3RlcFxuXHRcdFx0XHRcdC8vIGxhYmVsZWQgZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIixcIikge1xuXHRcdFx0XHRcdFx0cG9zICs9IDE7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudERlc2NyaXB0b3IpIHtcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRvcnMucHVzaChjdXJyZW50RGVzY3JpcHRvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBVKzAwMjggTEVGVCBQQVJFTlRIRVNJUyAoKClcblx0XHRcdFx0XHQvLyBBcHBlbmQgYyB0byBjdXJyZW50IGRlc2NyaXB0b3IuIFNldCBzdGF0ZSB0byBpbiBwYXJlbnMuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlxcdTAwMjhcIikge1xuXHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBjdXJyZW50RGVzY3JpcHRvciArIGM7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFwiaW4gcGFyZW5zXCI7XG5cblx0XHRcdFx0XHQvLyBFT0Zcblx0XHRcdFx0XHQvLyBJZiBjdXJyZW50IGRlc2NyaXB0b3IgaXMgbm90IGVtcHR5LCBhcHBlbmQgY3VycmVudCBkZXNjcmlwdG9yIHRvXG5cdFx0XHRcdFx0Ly8gZGVzY3JpcHRvcnMuIEp1bXAgdG8gdGhlIHN0ZXAgbGFiZWxlZCBkZXNjcmlwdG9yIHBhcnNlci5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50RGVzY3JpcHRvcikge1xuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9ycy5wdXNoKGN1cnJlbnREZXNjcmlwdG9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdC8vIEFueXRoaW5nIGVsc2Vcblx0XHRcdFx0XHQvLyBBcHBlbmQgYyB0byBjdXJyZW50IGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gY3VycmVudERlc2NyaXB0b3IgKyBjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0Ly8gKGVuZCBcImluIGRlc2NyaXB0b3JcIlxuXG5cdFx0XHRcdC8vIEluIHBhcmVuc1xuXHRcdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09PSBcImluIHBhcmVuc1wiKSB7XG5cblx0XHRcdFx0XHQvLyBVKzAwMjkgUklHSFQgUEFSRU5USEVTSVMgKCkpXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLiBTZXQgc3RhdGUgdG8gaW4gZGVzY3JpcHRvci5cblx0XHRcdFx0XHRpZiAoYyA9PT0gXCIpXCIpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gY3VycmVudERlc2NyaXB0b3IgKyBjO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBcImluIGRlc2NyaXB0b3JcIjtcblxuXHRcdFx0XHRcdC8vIEVPRlxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjdXJyZW50IGRlc2NyaXB0b3IgdG8gZGVzY3JpcHRvcnMuIEp1bXAgdG8gdGhlIHN0ZXAgbGFiZWxlZFxuXHRcdFx0XHRcdC8vIGRlc2NyaXB0b3IgcGFyc2VyLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCJcIikge1xuXHRcdFx0XHRcdFx0ZGVzY3JpcHRvcnMucHVzaChjdXJyZW50RGVzY3JpcHRvcik7XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWZ0ZXIgZGVzY3JpcHRvclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09PSBcImFmdGVyIGRlc2NyaXB0b3JcIikge1xuXG5cdFx0XHRcdFx0Ly8gRG8gdGhlIGZvbGxvd2luZywgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBjOlxuXHRcdFx0XHRcdC8vIFNwYWNlIGNoYXJhY3RlcjogU3RheSBpbiB0aGlzIHN0YXRlLlxuXHRcdFx0XHRcdGlmIChpc1NwYWNlKGMpKSB7XG5cblx0XHRcdFx0XHQvLyBFT0Y6IEp1bXAgdG8gdGhlIHN0ZXAgbGFiZWxlZCBkZXNjcmlwdG9yIHBhcnNlci5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdC8vIEFueXRoaW5nIGVsc2Vcblx0XHRcdFx0XHQvLyBTZXQgc3RhdGUgdG8gaW4gZGVzY3JpcHRvci4gU2V0IHBvc2l0aW9uIHRvIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXIgaW4gaW5wdXQuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN0YXRlID0gXCJpbiBkZXNjcmlwdG9yXCI7XG5cdFx0XHRcdFx0XHRwb3MgLT0gMTtcblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkdmFuY2UgcG9zaXRpb24gdG8gdGhlIG5leHQgY2hhcmFjdGVyIGluIGlucHV0LlxuXHRcdFx0XHRwb3MgKz0gMTtcblxuXHRcdFx0Ly8gUmVwZWF0IHRoaXMgc3RlcC5cblx0XHRcdH0gLy8gKGNsb3NlIHdoaWxlIHRydWUgbG9vcClcblx0XHR9XG5cblx0XHQvLyA0LiBTcGxpdHRpbmcgbG9vcDogQ29sbGVjdCBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgdGhhdCBhcmUgc3BhY2Vcblx0XHQvLyAgICBjaGFyYWN0ZXJzIG9yIFUrMDAyQyBDT01NQSBjaGFyYWN0ZXJzLiBJZiBhbnkgVSswMDJDIENPTU1BIGNoYXJhY3RlcnNcblx0XHQvLyAgICB3ZXJlIGNvbGxlY3RlZCwgdGhhdCBpcyBhIHBhcnNlIGVycm9yLlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRjb2xsZWN0Q2hhcmFjdGVycyhyZWdleExlYWRpbmdDb21tYXNPclNwYWNlcyk7XG5cblx0XHRcdC8vIDUuIElmIHBvc2l0aW9uIGlzIHBhc3QgdGhlIGVuZCBvZiBpbnB1dCwgcmV0dXJuIGNhbmRpZGF0ZXMgYW5kIGFib3J0IHRoZXNlIHN0ZXBzLlxuXHRcdFx0aWYgKHBvcyA+PSBpbnB1dExlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gY2FuZGlkYXRlczsgLy8gKHdlJ3JlIGRvbmUsIHRoaXMgaXMgdGhlIHNvbGUgcmV0dXJuIHBhdGgpXG5cdFx0XHR9XG5cblx0XHRcdC8vIDYuIENvbGxlY3QgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBzcGFjZSBjaGFyYWN0ZXJzLFxuXHRcdFx0Ly8gICAgYW5kIGxldCB0aGF0IGJlIHVybC5cblx0XHRcdHVybCA9IGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ2V4TGVhZGluZ05vdFNwYWNlcyk7XG5cblx0XHRcdC8vIDcuIExldCBkZXNjcmlwdG9ycyBiZSBhIG5ldyBlbXB0eSBsaXN0LlxuXHRcdFx0ZGVzY3JpcHRvcnMgPSBbXTtcblxuXHRcdFx0Ly8gOC4gSWYgdXJsIGVuZHMgd2l0aCBhIFUrMDAyQyBDT01NQSBjaGFyYWN0ZXIgKCwpLCBmb2xsb3cgdGhlc2Ugc3Vic3RlcHM6XG5cdFx0XHQvL1x0XHQoMSkuIFJlbW92ZSBhbGwgdHJhaWxpbmcgVSswMDJDIENPTU1BIGNoYXJhY3RlcnMgZnJvbSB1cmwuIElmIHRoaXMgcmVtb3ZlZFxuXHRcdFx0Ly8gICAgICAgICBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhhdCBpcyBhIHBhcnNlIGVycm9yLlxuXHRcdFx0aWYgKHVybC5zbGljZSgtMSkgPT09IFwiLFwiKSB7XG5cdFx0XHRcdHVybCA9IHVybC5yZXBsYWNlKHJlZ2V4VHJhaWxpbmdDb21tYXMsIFwiXCIpO1xuXHRcdFx0XHQvLyAoSnVtcCBhaGVhZCB0byBzdGVwIDkgdG8gc2tpcCB0b2tlbml6YXRpb24gYW5kIGp1c3QgcHVzaCB0aGUgY2FuZGlkYXRlKS5cblx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXG5cdFx0XHQvL1x0T3RoZXJ3aXNlLCBmb2xsb3cgdGhlc2Ugc3Vic3RlcHM6XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b2tlbml6ZSgpO1xuXHRcdFx0fSAvLyAoY2xvc2UgZWxzZSBvZiBzdGVwIDgpXG5cblx0XHQvLyAxNi4gUmV0dXJuIHRvIHRoZSBzdGVwIGxhYmVsZWQgc3BsaXR0aW5nIGxvb3AuXG5cdFx0fSAvLyAoQ2xvc2Ugb2YgYmlnIHdoaWxlIGxvb3AuKVxuXHR9XG5cblx0Lypcblx0ICogU2l6ZXMgUGFyc2VyXG5cdCAqXG5cdCAqIEJ5IEFsZXggQmVsbCB8ICBNSVQgTGljZW5zZVxuXHQgKlxuXHQgKiBOb24tc3RyaWN0IGJ1dCBhY2N1cmF0ZSBhbmQgbGlnaHR3ZWlnaHQgSlMgUGFyc2VyIGZvciB0aGUgc3RyaW5nIHZhbHVlIDxpbWcgc2l6ZXM9XCJoZXJlXCI+XG5cdCAqXG5cdCAqIFJlZmVyZW5jZSBhbGdvcml0aG0gYXQ6XG5cdCAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCNwYXJzZS1hLXNpemVzLWF0dHJpYnV0ZVxuXHQgKlxuXHQgKiBNb3N0IGNvbW1lbnRzIGFyZSBjb3BpZWQgaW4gZGlyZWN0bHkgZnJvbSB0aGUgc3BlY1xuXHQgKiAoZXhjZXB0IGZvciBjb21tZW50cyBpbiBwYXJlbnMpLlxuXHQgKlxuXHQgKiBHcmFtbWFyIGlzOlxuXHQgKiA8c291cmNlLXNpemUtbGlzdD4gPSA8c291cmNlLXNpemU+IyBbICwgPHNvdXJjZS1zaXplLXZhbHVlPiBdPyB8IDxzb3VyY2Utc2l6ZS12YWx1ZT5cblx0ICogPHNvdXJjZS1zaXplPiA9IDxtZWRpYS1jb25kaXRpb24+IDxzb3VyY2Utc2l6ZS12YWx1ZT5cblx0ICogPHNvdXJjZS1zaXplLXZhbHVlPiA9IDxsZW5ndGg+XG5cdCAqIGh0dHA6Ly93d3cudzMub3JnL2h0bWwvd2cvZHJhZnRzL2h0bWwvbWFzdGVyL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCNhdHRyLWltZy1zaXplc1xuXHQgKlxuXHQgKiBFLmcuIFwiKG1heC13aWR0aDogMzBlbSkgMTAwdncsIChtYXgtd2lkdGg6IDUwZW0pIDcwdncsIDEwMHZ3XCJcblx0ICogb3IgXCIobWluLXdpZHRoOiAzMGVtKSwgY2FsYygzMHZ3IC0gMTVweClcIiBvciBqdXN0IFwiMzB2d1wiXG5cdCAqXG5cdCAqIFJldHVybnMgdGhlIGZpcnN0IHZhbGlkIDxjc3MtbGVuZ3RoPiB3aXRoIGEgbWVkaWEgY29uZGl0aW9uIHRoYXQgZXZhbHVhdGVzIHRvIHRydWUsXG5cdCAqIG9yIFwiMTAwdndcIiBpZiBhbGwgdmFsaWQgbWVkaWEgY29uZGl0aW9ucyBldmFsdWF0ZSB0byBmYWxzZS5cblx0ICpcblx0ICovXG5cblx0ZnVuY3Rpb24gcGFyc2VTaXplcyhzdHJWYWx1ZSkge1xuXG5cdFx0Ly8gKFBlcmNlbnRhZ2UgQ1NTIGxlbmd0aHMgYXJlIG5vdCBhbGxvd2VkIGluIHRoaXMgY2FzZSwgdG8gYXZvaWQgY29uZnVzaW9uOlxuXHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCN2YWxpZC1zb3VyY2Utc2l6ZS1saXN0XG5cdFx0Ly8gQ1NTIGFsbG93cyBhIHNpbmdsZSBvcHRpb25hbCBwbHVzIG9yIG1pbnVzIHNpZ246XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMi9zeW5kYXRhLmh0bWwjbnVtYmVyc1xuXHRcdC8vIENTUyBpcyBBU0NJSSBjYXNlLWluc2Vuc2l0aXZlOlxuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIvc3luZGF0YS5odG1sI2NoYXJhY3RlcnMgKVxuXHRcdC8vIFNwZWMgYWxsb3dzIGV4cG9uZW50aWFsIG5vdGF0aW9uIGZvciA8bnVtYmVyPiB0eXBlOlxuXHRcdC8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy12YWx1ZXMvI251bWJlcnNcblx0XHR2YXIgcmVnZXhDc3NMZW5ndGhXaXRoVW5pdHMgPSAvXig/OlsrLV0/WzAtOV0rfFswLTldKlxcLlswLTldKykoPzpbZUVdWystXT9bMC05XSspPyg/OmNofGNtfGVtfGV4fGlufG1tfHBjfHB0fHB4fHJlbXx2aHx2bWlufHZtYXh8dncpJC9pO1xuXG5cdFx0Ly8gKFRoaXMgaXMgYSBxdWljayBhbmQgbGVuaWVudCB0ZXN0LiBCZWNhdXNlIG9mIG9wdGlvbmFsIHVubGltaXRlZC1kZXB0aCBpbnRlcm5hbFxuXHRcdC8vIGdyb3VwaW5nIHBhcmVucyBhbmQgc3RyaWN0IHNwYWNpbmcgcnVsZXMsIHRoaXMgY291bGQgZ2V0IHZlcnkgY29tcGxpY2F0ZWQuKVxuXHRcdHZhciByZWdleENzc0NhbGMgPSAvXmNhbGNcXCgoPzpbMC05YS16IFxcLlxcK1xcLVxcKlxcL1xcKFxcKV0rKVxcKSQvaTtcblxuXHRcdHZhciBpO1xuXHRcdHZhciB1bnBhcnNlZFNpemVzTGlzdDtcblx0XHR2YXIgdW5wYXJzZWRTaXplc0xpc3RMZW5ndGg7XG5cdFx0dmFyIHVucGFyc2VkU2l6ZTtcblx0XHR2YXIgbGFzdENvbXBvbmVudFZhbHVlO1xuXHRcdHZhciBzaXplO1xuXG5cdFx0Ly8gVVRJTElUWSBGVU5DVElPTlNcblxuXHRcdC8vICAoVG95IENTUyBwYXJzZXIuIFRoZSBnb2FscyBoZXJlIGFyZTpcblx0XHQvLyAgMSkgZXhwYW5zaXZlIHRlc3QgY292ZXJhZ2Ugd2l0aG91dCB0aGUgd2VpZ2h0IG9mIGEgZnVsbCBDU1MgcGFyc2VyLlxuXHRcdC8vICAyKSBBdm9pZGluZyByZWdleCB3aGVyZXZlciBjb252ZW5pZW50LlxuXHRcdC8vICBRdWljayB0ZXN0czogaHR0cDovL2pzZmlkZGxlLm5ldC9ndG50TDRnci8zL1xuXHRcdC8vICBSZXR1cm5zIGFuIGFycmF5IG9mIGFycmF5cy4pXG5cdFx0ZnVuY3Rpb24gcGFyc2VDb21wb25lbnRWYWx1ZXMoc3RyKSB7XG5cdFx0XHR2YXIgY2hyY3RyO1xuXHRcdFx0dmFyIGNvbXBvbmVudCA9IFwiXCI7XG5cdFx0XHR2YXIgY29tcG9uZW50QXJyYXkgPSBbXTtcblx0XHRcdHZhciBsaXN0QXJyYXkgPSBbXTtcblx0XHRcdHZhciBwYXJlbkRlcHRoID0gMDtcblx0XHRcdHZhciBwb3MgPSAwO1xuXHRcdFx0dmFyIGluQ29tbWVudCA9IGZhbHNlO1xuXG5cdFx0XHRmdW5jdGlvbiBwdXNoQ29tcG9uZW50KCkge1xuXHRcdFx0XHRpZiAoY29tcG9uZW50KSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50QXJyYXkucHVzaChjb21wb25lbnQpO1xuXHRcdFx0XHRcdGNvbXBvbmVudCA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gcHVzaENvbXBvbmVudEFycmF5KCkge1xuXHRcdFx0XHRpZiAoY29tcG9uZW50QXJyYXlbMF0pIHtcblx0XHRcdFx0XHRsaXN0QXJyYXkucHVzaChjb21wb25lbnRBcnJheSk7XG5cdFx0XHRcdFx0Y29tcG9uZW50QXJyYXkgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyAoTG9vcCBmb3J3YXJkcyBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN0cmluZy4pXG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRjaHJjdHIgPSBzdHIuY2hhckF0KHBvcyk7XG5cblx0XHRcdFx0aWYgKGNocmN0ciA9PT0gXCJcIikgeyAvLyAoIEVuZCBvZiBzdHJpbmcgcmVhY2hlZC4pXG5cdFx0XHRcdFx0cHVzaENvbXBvbmVudCgpO1xuXHRcdFx0XHRcdHB1c2hDb21wb25lbnRBcnJheSgpO1xuXHRcdFx0XHRcdHJldHVybiBsaXN0QXJyYXk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaW5Db21tZW50KSB7XG5cdFx0XHRcdFx0aWYgKChjaHJjdHIgPT09IFwiKlwiKSAmJiAoc3RyW3BvcyArIDFdID09PSBcIi9cIikpIHsgLy8gKEF0IGVuZCBvZiBhIGNvbW1lbnQuKVxuXHRcdFx0XHRcdFx0aW5Db21tZW50ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRwb3MgKz0gMjtcblx0XHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwb3MgKz0gMTsgLy8gKFNraXAgYWxsIGNoYXJhY3RlcnMgaW5zaWRlIGNvbW1lbnRzLilcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChpc1NwYWNlKGNocmN0cikpIHtcblx0XHRcdFx0XHQvLyAoSWYgcHJldmlvdXMgY2hhcmFjdGVyIGluIGxvb3Agd2FzIGFsc28gYSBzcGFjZSwgb3IgaWZcblx0XHRcdFx0XHQvLyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcsIGRvIG5vdCBhZGQgc3BhY2UgY2hhciB0b1xuXHRcdFx0XHRcdC8vIGNvbXBvbmVudC4pXG5cdFx0XHRcdFx0aWYgKCAoc3RyLmNoYXJBdChwb3MgLSAxKSAmJiBpc1NwYWNlKCBzdHIuY2hhckF0KHBvcyAtIDEpICkgKSB8fCAhY29tcG9uZW50ICkge1xuXHRcdFx0XHRcdFx0cG9zICs9IDE7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBhcmVuRGVwdGggPT09IDApIHtcblx0XHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRcdHBvcyArPTE7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gKFJlcGxhY2UgYW55IHNwYWNlIGNoYXJhY3RlciB3aXRoIGEgcGxhaW4gc3BhY2UgZm9yIGxlZ2liaWxpdHkuKVxuXHRcdFx0XHRcdFx0Y2hyY3RyID0gXCIgXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGNocmN0ciA9PT0gXCIoXCIpIHtcblx0XHRcdFx0XHRwYXJlbkRlcHRoICs9IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hyY3RyID09PSBcIilcIikge1xuXHRcdFx0XHRcdHBhcmVuRGVwdGggLT0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChjaHJjdHIgPT09IFwiLFwiKSB7XG5cdFx0XHRcdFx0cHVzaENvbXBvbmVudCgpO1xuXHRcdFx0XHRcdHB1c2hDb21wb25lbnRBcnJheSgpO1xuXHRcdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCAoY2hyY3RyID09PSBcIi9cIikgJiYgKHN0ci5jaGFyQXQocG9zICsgMSkgPT09IFwiKlwiKSApIHtcblx0XHRcdFx0XHRpbkNvbW1lbnQgPSB0cnVlO1xuXHRcdFx0XHRcdHBvcyArPSAyO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29tcG9uZW50ID0gY29tcG9uZW50ICsgY2hyY3RyO1xuXHRcdFx0XHRwb3MgKz0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpc1ZhbGlkTm9uTmVnYXRpdmVTb3VyY2VTaXplVmFsdWUocykge1xuXHRcdFx0aWYgKHJlZ2V4Q3NzTGVuZ3RoV2l0aFVuaXRzLnRlc3QocykgJiYgKHBhcnNlRmxvYXQocykgPj0gMCkpIHtyZXR1cm4gdHJ1ZTt9XG5cdFx0XHRpZiAocmVnZXhDc3NDYWxjLnRlc3QocykpIHtyZXR1cm4gdHJ1ZTt9XG5cdFx0XHQvLyAoIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIvc3luZGF0YS5odG1sI251bWJlcnMgc2F5czpcblx0XHRcdC8vIFwiLTAgaXMgZXF1aXZhbGVudCB0byAwIGFuZCBpcyBub3QgYSBuZWdhdGl2ZSBudW1iZXIuXCIgd2hpY2ggbWVhbnMgdGhhdFxuXHRcdFx0Ly8gdW5pdGxlc3MgemVybyBhbmQgdW5pdGxlc3MgbmVnYXRpdmUgemVybyBtdXN0IGJlIGFjY2VwdGVkIGFzIHNwZWNpYWwgY2FzZXMuKVxuXHRcdFx0aWYgKChzID09PSBcIjBcIikgfHwgKHMgPT09IFwiLTBcIikgfHwgKHMgPT09IFwiKzBcIikpIHtyZXR1cm4gdHJ1ZTt9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gV2hlbiBhc2tlZCB0byBwYXJzZSBhIHNpemVzIGF0dHJpYnV0ZSBmcm9tIGFuIGVsZW1lbnQsIHBhcnNlIGFcblx0XHQvLyBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBjb21wb25lbnQgdmFsdWVzIGZyb20gdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50J3Ncblx0XHQvLyBzaXplcyBhdHRyaWJ1dGUgKG9yIHRoZSBlbXB0eSBzdHJpbmcsIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYWJzZW50KSwgYW5kIGxldFxuXHRcdC8vIHVucGFyc2VkIHNpemVzIGxpc3QgYmUgdGhlIHJlc3VsdC5cblx0XHQvLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3Mtc3ludGF4LyNwYXJzZS1jb21tYS1zZXBhcmF0ZWQtbGlzdC1vZi1jb21wb25lbnQtdmFsdWVzXG5cblx0XHR1bnBhcnNlZFNpemVzTGlzdCA9IHBhcnNlQ29tcG9uZW50VmFsdWVzKHN0clZhbHVlKTtcblx0XHR1bnBhcnNlZFNpemVzTGlzdExlbmd0aCA9IHVucGFyc2VkU2l6ZXNMaXN0Lmxlbmd0aDtcblxuXHRcdC8vIEZvciBlYWNoIHVucGFyc2VkIHNpemUgaW4gdW5wYXJzZWQgc2l6ZXMgbGlzdDpcblx0XHRmb3IgKGkgPSAwOyBpIDwgdW5wYXJzZWRTaXplc0xpc3RMZW5ndGg7IGkrKykge1xuXHRcdFx0dW5wYXJzZWRTaXplID0gdW5wYXJzZWRTaXplc0xpc3RbaV07XG5cblx0XHRcdC8vIDEuIFJlbW92ZSBhbGwgY29uc2VjdXRpdmUgPHdoaXRlc3BhY2UtdG9rZW4+cyBmcm9tIHRoZSBlbmQgb2YgdW5wYXJzZWQgc2l6ZS5cblx0XHRcdC8vICggcGFyc2VDb21wb25lbnRWYWx1ZXMoKSBhbHJlYWR5IG9taXRzIHNwYWNlcyBvdXRzaWRlIG9mIHBhcmVucy4gKVxuXG5cdFx0XHQvLyBJZiB1bnBhcnNlZCBzaXplIGlzIG5vdyBlbXB0eSwgdGhhdCBpcyBhIHBhcnNlIGVycm9yOyBjb250aW51ZSB0byB0aGUgbmV4dFxuXHRcdFx0Ly8gaXRlcmF0aW9uIG9mIHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0Ly8gKCBwYXJzZUNvbXBvbmVudFZhbHVlcygpIHdvbid0IHB1c2ggYW4gZW1wdHkgYXJyYXkuIClcblxuXHRcdFx0Ly8gMi4gSWYgdGhlIGxhc3QgY29tcG9uZW50IHZhbHVlIGluIHVucGFyc2VkIHNpemUgaXMgYSB2YWxpZCBub24tbmVnYXRpdmVcblx0XHRcdC8vIDxzb3VyY2Utc2l6ZS12YWx1ZT4sIGxldCBzaXplIGJlIGl0cyB2YWx1ZSBhbmQgcmVtb3ZlIHRoZSBjb21wb25lbnQgdmFsdWVcblx0XHRcdC8vIGZyb20gdW5wYXJzZWQgc2l6ZS4gQW55IENTUyBmdW5jdGlvbiBvdGhlciB0aGFuIHRoZSBjYWxjKCkgZnVuY3Rpb24gaXNcblx0XHRcdC8vIGludmFsaWQuIE90aGVyd2lzZSwgdGhlcmUgaXMgYSBwYXJzZSBlcnJvcjsgY29udGludWUgdG8gdGhlIG5leHQgaXRlcmF0aW9uXG5cdFx0XHQvLyBvZiB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1zeW50YXgvI3BhcnNlLWNvbXBvbmVudC12YWx1ZVxuXHRcdFx0bGFzdENvbXBvbmVudFZhbHVlID0gdW5wYXJzZWRTaXplW3VucGFyc2VkU2l6ZS5sZW5ndGggLSAxXTtcblxuXHRcdFx0aWYgKGlzVmFsaWROb25OZWdhdGl2ZVNvdXJjZVNpemVWYWx1ZShsYXN0Q29tcG9uZW50VmFsdWUpKSB7XG5cdFx0XHRcdHNpemUgPSBsYXN0Q29tcG9uZW50VmFsdWU7XG5cdFx0XHRcdHVucGFyc2VkU2l6ZS5wb3AoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyAzLiBSZW1vdmUgYWxsIGNvbnNlY3V0aXZlIDx3aGl0ZXNwYWNlLXRva2VuPnMgZnJvbSB0aGUgZW5kIG9mIHVucGFyc2VkXG5cdFx0XHQvLyBzaXplLiBJZiB1bnBhcnNlZCBzaXplIGlzIG5vdyBlbXB0eSwgcmV0dXJuIHNpemUgYW5kIGV4aXQgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHQvLyBJZiB0aGlzIHdhcyBub3QgdGhlIGxhc3QgaXRlbSBpbiB1bnBhcnNlZCBzaXplcyBsaXN0LCB0aGF0IGlzIGEgcGFyc2UgZXJyb3IuXG5cdFx0XHRpZiAodW5wYXJzZWRTaXplLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gc2l6ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gNC4gUGFyc2UgdGhlIHJlbWFpbmluZyBjb21wb25lbnQgdmFsdWVzIGluIHVucGFyc2VkIHNpemUgYXMgYVxuXHRcdFx0Ly8gPG1lZGlhLWNvbmRpdGlvbj4uIElmIGl0IGRvZXMgbm90IHBhcnNlIGNvcnJlY3RseSwgb3IgaXQgZG9lcyBwYXJzZVxuXHRcdFx0Ly8gY29ycmVjdGx5IGJ1dCB0aGUgPG1lZGlhLWNvbmRpdGlvbj4gZXZhbHVhdGVzIHRvIGZhbHNlLCBjb250aW51ZSB0byB0aGVcblx0XHRcdC8vIG5leHQgaXRlcmF0aW9uIG9mIHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0Ly8gKFBhcnNpbmcgYWxsIHBvc3NpYmxlIGNvbXBvdW5kIG1lZGlhIGNvbmRpdGlvbnMgaW4gSlMgaXMgaGVhdnksIGNvbXBsaWNhdGVkLFxuXHRcdFx0Ly8gYW5kIHRoZSBwYXlvZmYgaXMgdW5jbGVhci4gSXMgdGhlcmUgZXZlciBhbiBzaXR1YXRpb24gd2hlcmUgdGhlXG5cdFx0XHQvLyBtZWRpYSBjb25kaXRpb24gcGFyc2VzIGluY29ycmVjdGx5IGJ1dCBzdGlsbCBzb21laG93IGV2YWx1YXRlcyB0byB0cnVlP1xuXHRcdFx0Ly8gQ2FuIHdlIGp1c3QgcmVseSBvbiB0aGUgYnJvd3Nlci9wb2x5ZmlsbCB0byBkbyBpdD8pXG5cdFx0XHR1bnBhcnNlZFNpemUgPSB1bnBhcnNlZFNpemUuam9pbihcIiBcIik7XG5cdFx0XHRpZiAoIShwZi5tYXRjaGVzTWVkaWEoIHVucGFyc2VkU2l6ZSApICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyA1LiBSZXR1cm4gc2l6ZSBhbmQgZXhpdCB0aGlzIGFsZ29yaXRobS5cblx0XHRcdHJldHVybiBzaXplO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBhYm92ZSBhbGdvcml0aG0gZXhoYXVzdHMgdW5wYXJzZWQgc2l6ZXMgbGlzdCB3aXRob3V0IHJldHVybmluZyBhXG5cdFx0Ly8gc2l6ZSB2YWx1ZSwgcmV0dXJuIDEwMHZ3LlxuXHRcdHJldHVybiBcIjEwMHZ3XCI7XG5cdH1cblxuXHQvLyBuYW1lc3BhY2Vcblx0cGYubnMgPSAoXCJwZlwiICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpLnN1YnN0cigwLCA5KTtcblxuXHQvLyBzcmNzZXQgc3VwcG9ydCB0ZXN0XG5cdHBmLnN1cFNyY3NldCA9IFwic3Jjc2V0XCIgaW4gaW1hZ2U7XG5cdHBmLnN1cFNpemVzID0gXCJzaXplc1wiIGluIGltYWdlO1xuXHRwZi5zdXBQaWN0dXJlID0gISF3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50O1xuXG5cdC8vIFVDIGJyb3dzZXIgZG9lcyBjbGFpbSB0byBzdXBwb3J0IHNyY3NldCBhbmQgcGljdHVyZSwgYnV0IG5vdCBzaXplcyxcblx0Ly8gdGhpcyBleHRlbmRlZCB0ZXN0IHJldmVhbHMgdGhlIGJyb3dzZXIgZG9lcyBzdXBwb3J0IG5vdGhpbmdcblx0aWYgKHBmLnN1cFNyY3NldCAmJiBwZi5zdXBQaWN0dXJlICYmICFwZi5zdXBTaXplcykge1xuXHRcdChmdW5jdGlvbihpbWFnZTIpIHtcblx0XHRcdGltYWdlLnNyY3NldCA9IFwiZGF0YTosYVwiO1xuXHRcdFx0aW1hZ2UyLnNyYyA9IFwiZGF0YTosYVwiO1xuXHRcdFx0cGYuc3VwU3Jjc2V0ID0gaW1hZ2UuY29tcGxldGUgPT09IGltYWdlMi5jb21wbGV0ZTtcblx0XHRcdHBmLnN1cFBpY3R1cmUgPSBwZi5zdXBTcmNzZXQgJiYgcGYuc3VwUGljdHVyZTtcblx0XHR9KShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpKTtcblx0fVxuXG5cdC8vIFNhZmFyaTkgaGFzIGJhc2ljIHN1cHBvcnQgZm9yIHNpemVzLCBidXQgZG9lcyd0IGV4cG9zZSB0aGUgYHNpemVzYCBpZGwgYXR0cmlidXRlXG5cdGlmIChwZi5zdXBTcmNzZXQgJiYgIXBmLnN1cFNpemVzKSB7XG5cblx0XHQoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgd2lkdGgyID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBZ0FCQVBBQUFQLy8vd0FBQUNINUJBQUFBQUFBTEFBQUFBQUNBQUVBQUFJQ0JBb0FPdz09XCI7XG5cdFx0XHR2YXIgd2lkdGgxID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PVwiO1xuXHRcdFx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0XHR2YXIgdGVzdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgd2lkdGggPSBpbWcud2lkdGg7XG5cblx0XHRcdFx0aWYgKHdpZHRoID09PSAyKSB7XG5cdFx0XHRcdFx0cGYuc3VwU2l6ZXMgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWx3YXlzQ2hlY2tXRGVzY3JpcHRvciA9IHBmLnN1cFNyY3NldCAmJiAhcGYuc3VwU2l6ZXM7XG5cblx0XHRcdFx0aXNTdXBwb3J0VGVzdFJlYWR5ID0gdHJ1ZTtcblx0XHRcdFx0Ly8gZm9yY2UgYXN5bmNcblx0XHRcdFx0c2V0VGltZW91dChwaWN0dXJlZmlsbCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRpbWcub25sb2FkID0gdGVzdDtcblx0XHRcdGltZy5vbmVycm9yID0gdGVzdDtcblx0XHRcdGltZy5zZXRBdHRyaWJ1dGUoXCJzaXplc1wiLCBcIjlweFwiKTtcblxuXHRcdFx0aW1nLnNyY3NldCA9IHdpZHRoMSArIFwiIDF3LFwiICsgd2lkdGgyICsgXCIgOXdcIjtcblx0XHRcdGltZy5zcmMgPSB3aWR0aDE7XG5cdFx0fSkoKTtcblxuXHR9IGVsc2Uge1xuXHRcdGlzU3VwcG9ydFRlc3RSZWFkeSA9IHRydWU7XG5cdH1cblxuXHQvLyB1c2luZyBwZi5xc2EgaW5zdGVhZCBvZiBkb20gdHJhdmVyc2luZyBkb2VzIHNjYWxlIG11Y2ggYmV0dGVyLFxuXHQvLyBlc3BlY2lhbGx5IG9uIHNpdGVzIG1peGluZyByZXNwb25zaXZlIGFuZCBub24tcmVzcG9uc2l2ZSBpbWFnZXNcblx0cGYuc2VsU2hvcnQgPSBcInBpY3R1cmU+aW1nLGltZ1tzcmNzZXRdXCI7XG5cdHBmLnNlbCA9IHBmLnNlbFNob3J0O1xuXHRwZi5jZmcgPSBjZmc7XG5cblx0LyoqXG5cdCAqIFNob3J0Y3V0IHByb3BlcnR5IGZvciBgZGV2aWNlUGl4ZWxSYXRpb2AgKCBmb3IgZWFzeSBvdmVycmlkaW5nIGluIHRlc3RzIClcblx0ICovXG5cdHBmLkRQUiA9IChEUFIgIHx8IDEgKTtcblx0cGYudSA9IHVuaXRzO1xuXG5cdC8vIGNvbnRhaW5lciBvZiBzdXBwb3J0ZWQgbWltZSB0eXBlcyB0aGF0IG9uZSBtaWdodCBuZWVkIHRvIHF1YWxpZnkgYmVmb3JlIHVzaW5nXG5cdHBmLnR5cGVzID0gIHR5cGVzO1xuXG5cdHBmLnNldFNpemUgPSBub29wO1xuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSBhYnNvbHV0ZSBVUkxcblx0ICogQHBhcmFtIHNyY1xuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBhYnNvbHV0ZSBVUkxcblx0ICovXG5cblx0cGYubWFrZVVybCA9IG1lbW9pemUoZnVuY3Rpb24oc3JjKSB7XG5cdFx0YW5jaG9yLmhyZWYgPSBzcmM7XG5cdFx0cmV0dXJuIGFuY2hvci5ocmVmO1xuXHR9KTtcblxuXHQvKipcblx0ICogR2V0cyBhIERPTSBlbGVtZW50IG9yIGRvY3VtZW50IGFuZCBhIHNlbGN0b3IgYW5kIHJldHVybnMgdGhlIGZvdW5kIG1hdGNoZXNcblx0ICogQ2FuIGJlIGV4dGVuZGVkIHdpdGggalF1ZXJ5L1NpenpsZSBmb3IgSUU3IHN1cHBvcnRcblx0ICogQHBhcmFtIGNvbnRleHRcblx0ICogQHBhcmFtIHNlbFxuXHQgKiBAcmV0dXJucyB7Tm9kZUxpc3R8QXJyYXl9XG5cdCAqL1xuXHRwZi5xc2EgPSBmdW5jdGlvbihjb250ZXh0LCBzZWwpIHtcblx0XHRyZXR1cm4gKCBcInF1ZXJ5U2VsZWN0b3JcIiBpbiBjb250ZXh0ICkgPyBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSA6IFtdO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTaG9ydGN1dCBtZXRob2QgZm9yIG1hdGNoTWVkaWEgKCBmb3IgZWFzeSBvdmVycmlkaW5nIGluIHRlc3RzIClcblx0ICogd2V0aGVyIG5hdGl2ZSBvciBwZi5tTVEgaXMgdXNlZCB3aWxsIGJlIGRlY2lkZWQgbGF6eSBvbiBmaXJzdCBjYWxsXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cGYubWF0Y2hlc01lZGlhID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCB3aW5kb3cubWF0Y2hNZWRpYSAmJiAobWF0Y2hNZWRpYSggXCIobWluLXdpZHRoOiAwLjFlbSlcIiApIHx8IHt9KS5tYXRjaGVzICkge1xuXHRcdFx0cGYubWF0Y2hlc01lZGlhID0gZnVuY3Rpb24oIG1lZGlhICkge1xuXHRcdFx0XHRyZXR1cm4gIW1lZGlhIHx8ICggbWF0Y2hNZWRpYSggbWVkaWEgKS5tYXRjaGVzICk7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwZi5tYXRjaGVzTWVkaWEgPSBwZi5tTVE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBmLm1hdGNoZXNNZWRpYS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEEgc2ltcGxpZmllZCBtYXRjaE1lZGlhIGltcGxlbWVudGF0aW9uIGZvciBJRTggYW5kIElFOVxuXHQgKiBoYW5kbGVzIG9ubHkgbWluLXdpZHRoL21heC13aWR0aCB3aXRoIHB4IG9yIGVtIHZhbHVlc1xuXHQgKiBAcGFyYW0gbWVkaWFcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRwZi5tTVEgPSBmdW5jdGlvbiggbWVkaWEgKSB7XG5cdFx0cmV0dXJuIG1lZGlhID8gZXZhbENTUyhtZWRpYSkgOiB0cnVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBjYWxjdWxhdGVkIGxlbmd0aCBpbiBjc3MgcGl4ZWwgZnJvbSB0aGUgZ2l2ZW4gc291cmNlU2l6ZVZhbHVlXG5cdCAqIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy12YWx1ZXMtMy8jbGVuZ3RoLXZhbHVlXG5cdCAqIGludGVuZGVkIFNwZWMgbWlzbWF0Y2hlczpcblx0ICogKiBEb2VzIG5vdCBjaGVjayBmb3IgaW52YWxpZCB1c2Ugb2YgQ1NTIGZ1bmN0aW9uc1xuXHQgKiAqIERvZXMgaGFuZGxlIGEgY29tcHV0ZWQgbGVuZ3RoIG9mIDAgdGhlIHNhbWUgYXMgYSBuZWdhdGl2ZSBhbmQgdGhlcmVmb3JlIGludmFsaWQgdmFsdWVcblx0ICogQHBhcmFtIHNvdXJjZVNpemVWYWx1ZVxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxuXHQgKi9cblx0cGYuY2FsY0xlbmd0aCA9IGZ1bmN0aW9uKCBzb3VyY2VTaXplVmFsdWUgKSB7XG5cblx0XHR2YXIgdmFsdWUgPSBldmFsQ1NTKHNvdXJjZVNpemVWYWx1ZSwgdHJ1ZSkgfHwgZmFsc2U7XG5cdFx0aWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dmFsdWUgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRha2VzIGEgdHlwZSBzdHJpbmcgYW5kIGNoZWNrcyBpZiBpdHMgc3VwcG9ydGVkXG5cdCAqL1xuXG5cdHBmLnN1cHBvcnRzVHlwZSA9IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdHJldHVybiAoIHR5cGUgKSA/IHR5cGVzWyB0eXBlIF0gOiB0cnVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBQYXJzZXMgYSBzb3VyY2VTaXplIGludG8gbWVkaWFDb25kaXRpb24gKG1lZGlhKSBhbmQgc291cmNlU2l6ZVZhbHVlIChsZW5ndGgpXG5cdCAqIEBwYXJhbSBzb3VyY2VTaXplU3RyXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cGYucGFyc2VTaXplID0gbWVtb2l6ZShmdW5jdGlvbiggc291cmNlU2l6ZVN0ciApIHtcblx0XHR2YXIgbWF0Y2ggPSAoIHNvdXJjZVNpemVTdHIgfHwgXCJcIiApLm1hdGNoKHJlZ1NpemUpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRtZWRpYTogbWF0Y2ggJiYgbWF0Y2hbMV0sXG5cdFx0XHRsZW5ndGg6IG1hdGNoICYmIG1hdGNoWzJdXG5cdFx0fTtcblx0fSk7XG5cblx0cGYucGFyc2VTZXQgPSBmdW5jdGlvbiggc2V0ICkge1xuXHRcdGlmICggIXNldC5jYW5kcyApIHtcblx0XHRcdHNldC5jYW5kcyA9IHBhcnNlU3Jjc2V0KHNldC5zcmNzZXQsIHNldCk7XG5cdFx0fVxuXHRcdHJldHVybiBzZXQuY2FuZHM7XG5cdH07XG5cblx0LyoqXG5cdCAqIHJldHVybnMgMWVtIGluIGNzcyBweCBmb3IgaHRtbC9ib2R5IGRlZmF1bHQgc2l6ZVxuXHQgKiBmdW5jdGlvbiB0YWtlbiBmcm9tIHJlc3BvbmRqc1xuXHQgKiBAcmV0dXJucyB7KnxudW1iZXJ9XG5cdCAqL1xuXHRwZi5nZXRFbVZhbHVlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGJvZHk7XG5cdFx0aWYgKCAhZW1pbnB4ICYmIChib2R5ID0gZG9jdW1lbnQuYm9keSkgKSB7XG5cdFx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLFxuXHRcdFx0XHRvcmlnaW5hbEhUTUxDU1MgPSBkb2NFbGVtLnN0eWxlLmNzc1RleHQsXG5cdFx0XHRcdG9yaWdpbmFsQm9keUNTUyA9IGJvZHkuc3R5bGUuY3NzVGV4dDtcblxuXHRcdFx0ZGl2LnN0eWxlLmNzc1RleHQgPSBiYXNlU3R5bGU7XG5cblx0XHRcdC8vIDFlbSBpbiBhIG1lZGlhIHF1ZXJ5IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZGVmYXVsdCBmb250IHNpemUgb2YgdGhlIGJyb3dzZXJcblx0XHRcdC8vIHJlc2V0IGRvY0VsZW0gYW5kIGJvZHkgdG8gZW5zdXJlIHRoZSBjb3JyZWN0IHZhbHVlIGlzIHJldHVybmVkXG5cdFx0XHRkb2NFbGVtLnN0eWxlLmNzc1RleHQgPSBmc0Nzcztcblx0XHRcdGJvZHkuc3R5bGUuY3NzVGV4dCA9IGZzQ3NzO1xuXG5cdFx0XHRib2R5LmFwcGVuZENoaWxkKCBkaXYgKTtcblx0XHRcdGVtaW5weCA9IGRpdi5vZmZzZXRXaWR0aDtcblx0XHRcdGJvZHkucmVtb3ZlQ2hpbGQoIGRpdiApO1xuXG5cdFx0XHQvL2Fsc28gdXBkYXRlIGVtaW5weCBiZWZvcmUgcmV0dXJuaW5nXG5cdFx0XHRlbWlucHggPSBwYXJzZUZsb2F0KCBlbWlucHgsIDEwICk7XG5cblx0XHRcdC8vIHJlc3RvcmUgdGhlIG9yaWdpbmFsIHZhbHVlc1xuXHRcdFx0ZG9jRWxlbS5zdHlsZS5jc3NUZXh0ID0gb3JpZ2luYWxIVE1MQ1NTO1xuXHRcdFx0Ym9keS5zdHlsZS5jc3NUZXh0ID0gb3JpZ2luYWxCb2R5Q1NTO1xuXG5cdFx0fVxuXHRcdHJldHVybiBlbWlucHggfHwgMTY7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRha2VzIGEgc3RyaW5nIG9mIHNpemVzIGFuZCByZXR1cm5zIHRoZSB3aWR0aCBpbiBwaXhlbHMgYXMgYSBudW1iZXJcblx0ICovXG5cdHBmLmNhbGNMaXN0TGVuZ3RoID0gZnVuY3Rpb24oIHNvdXJjZVNpemVMaXN0U3RyICkge1xuXHRcdC8vIFNwbGl0IHVwIHNvdXJjZSBzaXplIGxpc3QsIGllICggbWF4LXdpZHRoOiAzMGVtICkgMTAwJSwgKCBtYXgtd2lkdGg6IDUwZW0gKSA1MCUsIDMzJVxuXHRcdC8vXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICBvciAobWluLXdpZHRoOjMwZW0pIGNhbGMoMzAlIC0gMTVweClcblx0XHRpZiAoICEoc291cmNlU2l6ZUxpc3RTdHIgaW4gc2l6ZUxlbmd0aENhY2hlKSB8fCBjZmcudVQgKSB7XG5cdFx0XHR2YXIgd2lubmluZ0xlbmd0aCA9IHBmLmNhbGNMZW5ndGgoIHBhcnNlU2l6ZXMoIHNvdXJjZVNpemVMaXN0U3RyICkgKTtcblxuXHRcdFx0c2l6ZUxlbmd0aENhY2hlWyBzb3VyY2VTaXplTGlzdFN0ciBdID0gIXdpbm5pbmdMZW5ndGggPyB1bml0cy53aWR0aCA6IHdpbm5pbmdMZW5ndGg7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNpemVMZW5ndGhDYWNoZVsgc291cmNlU2l6ZUxpc3RTdHIgXTtcblx0fTtcblxuXHQvKipcblx0ICogVGFrZXMgYSBjYW5kaWRhdGUgb2JqZWN0IHdpdGggYSBzcmNzZXQgcHJvcGVydHkgaW4gdGhlIGZvcm0gb2YgdXJsL1xuXHQgKiBleC4gXCJpbWFnZXMvcGljLW1lZGl1bS5wbmcgMXgsIGltYWdlcy9waWMtbWVkaXVtLTJ4LnBuZyAyeFwiIG9yXG5cdCAqICAgICBcImltYWdlcy9waWMtbWVkaXVtLnBuZyA0MDB3LCBpbWFnZXMvcGljLW1lZGl1bS0yeC5wbmcgODAwd1wiIG9yXG5cdCAqICAgICBcImltYWdlcy9waWMtc21hbGwucG5nXCJcblx0ICogR2V0IGFuIGFycmF5IG9mIGltYWdlIGNhbmRpZGF0ZXMgaW4gdGhlIGZvcm0gb2Zcblx0ICogICAgICB7dXJsOiBcIi9mb28vYmFyLnBuZ1wiLCByZXNvbHV0aW9uOiAxfVxuXHQgKiB3aGVyZSByZXNvbHV0aW9uIGlzIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy12YWx1ZXMtMy8jcmVzb2x1dGlvbi12YWx1ZVxuXHQgKiBJZiBzaXplcyBpcyBzcGVjaWZpZWQsIHJlcyBpcyBjYWxjdWxhdGVkXG5cdCAqL1xuXHRwZi5zZXRSZXMgPSBmdW5jdGlvbiggc2V0ICkge1xuXHRcdHZhciBjYW5kaWRhdGVzO1xuXHRcdGlmICggc2V0ICkge1xuXG5cdFx0XHRjYW5kaWRhdGVzID0gcGYucGFyc2VTZXQoIHNldCApO1xuXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGxlbiA9IGNhbmRpZGF0ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdHNldFJlc29sdXRpb24oIGNhbmRpZGF0ZXNbIGkgXSwgc2V0LnNpemVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGVzO1xuXHR9O1xuXG5cdHBmLnNldFJlcy5yZXMgPSBzZXRSZXNvbHV0aW9uO1xuXG5cdHBmLmFwcGx5U2V0Q2FuZGlkYXRlID0gZnVuY3Rpb24oIGNhbmRpZGF0ZXMsIGltZyApIHtcblx0XHRpZiAoICFjYW5kaWRhdGVzLmxlbmd0aCApIHtyZXR1cm47fVxuXHRcdHZhciBjYW5kaWRhdGUsXG5cdFx0XHRpLFxuXHRcdFx0aixcblx0XHRcdGxlbmd0aCxcblx0XHRcdGJlc3RDYW5kaWRhdGUsXG5cdFx0XHRjdXJTcmMsXG5cdFx0XHRjdXJDYW4sXG5cdFx0XHRjYW5kaWRhdGVTcmMsXG5cdFx0XHRhYm9ydEN1clNyYztcblxuXHRcdHZhciBpbWFnZURhdGEgPSBpbWdbIHBmLm5zIF07XG5cdFx0dmFyIGRwciA9IHBmLkRQUjtcblxuXHRcdGN1clNyYyA9IGltYWdlRGF0YS5jdXJTcmMgfHwgaW1nW2N1clNyY1Byb3BdO1xuXG5cdFx0Y3VyQ2FuID0gaW1hZ2VEYXRhLmN1ckNhbiB8fCBzZXRTcmNUb0N1cihpbWcsIGN1clNyYywgY2FuZGlkYXRlc1swXS5zZXQpO1xuXG5cdFx0Ly8gaWYgd2UgaGF2ZSBhIGN1cnJlbnQgc291cmNlLCB3ZSBtaWdodCBlaXRoZXIgYmVjb21lIGxhenkgb3IgZ2l2ZSB0aGlzIHNvdXJjZSBzb21lIGFkdmFudGFnZVxuXHRcdGlmICggY3VyQ2FuICYmIGN1ckNhbi5zZXQgPT09IGNhbmRpZGF0ZXNbIDAgXS5zZXQgKSB7XG5cblx0XHRcdC8vIGlmIGJyb3dzZXIgY2FuIGFib3J0IGltYWdlIHJlcXVlc3QgYW5kIHRoZSBpbWFnZSBoYXMgYSBoaWdoZXIgcGl4ZWwgZGVuc2l0eSB0aGFuIG5lZWRlZFxuXHRcdFx0Ly8gYW5kIHRoaXMgaW1hZ2UgaXNuJ3QgZG93bmxvYWRlZCB5ZXQsIHdlIHNraXAgbmV4dCBwYXJ0IGFuZCB0cnkgdG8gc2F2ZSBiYW5kd2lkdGhcblx0XHRcdGFib3J0Q3VyU3JjID0gKHN1cHBvcnRBYm9ydCAmJiAhaW1nLmNvbXBsZXRlICYmIGN1ckNhbi5yZXMgLSAwLjEgPiBkcHIpO1xuXG5cdFx0XHRpZiAoICFhYm9ydEN1clNyYyApIHtcblx0XHRcdFx0Y3VyQ2FuLmNhY2hlZCA9IHRydWU7XG5cblx0XHRcdFx0Ly8gaWYgY3VycmVudCBjYW5kaWRhdGUgaXMgXCJiZXN0XCIsIFwiYmV0dGVyXCIgb3IgXCJva2F5XCIsXG5cdFx0XHRcdC8vIHNldCBpdCB0byBiZXN0Q2FuZGlkYXRlXG5cdFx0XHRcdGlmICggY3VyQ2FuLnJlcyA+PSBkcHIgKSB7XG5cdFx0XHRcdFx0YmVzdENhbmRpZGF0ZSA9IGN1ckNhbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggIWJlc3RDYW5kaWRhdGUgKSB7XG5cblx0XHRcdGNhbmRpZGF0ZXMuc29ydCggYXNjZW5kaW5nU29ydCApO1xuXG5cdFx0XHRsZW5ndGggPSBjYW5kaWRhdGVzLmxlbmd0aDtcblx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBsZW5ndGggLSAxIF07XG5cblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbIGkgXTtcblx0XHRcdFx0aWYgKCBjYW5kaWRhdGUucmVzID49IGRwciApIHtcblx0XHRcdFx0XHRqID0gaSAtIDE7XG5cblx0XHRcdFx0XHQvLyB3ZSBoYXZlIGZvdW5kIHRoZSBwZXJmZWN0IGNhbmRpZGF0ZSxcblx0XHRcdFx0XHQvLyBidXQgbGV0J3MgaW1wcm92ZSB0aGlzIGEgbGl0dGxlIGJpdCB3aXRoIHNvbWUgYXNzdW1wdGlvbnMgOy0pXG5cdFx0XHRcdFx0aWYgKGNhbmRpZGF0ZXNbIGogXSAmJlxuXHRcdFx0XHRcdFx0KGFib3J0Q3VyU3JjIHx8IGN1clNyYyAhPT0gcGYubWFrZVVybCggY2FuZGlkYXRlLnVybCApKSAmJlxuXHRcdFx0XHRcdFx0Y2hvb3NlTG93UmVzKGNhbmRpZGF0ZXNbIGogXS5yZXMsIGNhbmRpZGF0ZS5yZXMsIGRwciwgY2FuZGlkYXRlc1sgaiBdLmNhY2hlZCkpIHtcblxuXHRcdFx0XHRcdFx0YmVzdENhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbIGogXTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRiZXN0Q2FuZGlkYXRlID0gY2FuZGlkYXRlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggYmVzdENhbmRpZGF0ZSApIHtcblxuXHRcdFx0Y2FuZGlkYXRlU3JjID0gcGYubWFrZVVybCggYmVzdENhbmRpZGF0ZS51cmwgKTtcblxuXHRcdFx0aW1hZ2VEYXRhLmN1clNyYyA9IGNhbmRpZGF0ZVNyYztcblx0XHRcdGltYWdlRGF0YS5jdXJDYW4gPSBiZXN0Q2FuZGlkYXRlO1xuXG5cdFx0XHRpZiAoIGNhbmRpZGF0ZVNyYyAhPT0gY3VyU3JjICkge1xuXHRcdFx0XHRwZi5zZXRTcmMoIGltZywgYmVzdENhbmRpZGF0ZSApO1xuXHRcdFx0fVxuXHRcdFx0cGYuc2V0U2l6ZSggaW1nICk7XG5cdFx0fVxuXHR9O1xuXG5cdHBmLnNldFNyYyA9IGZ1bmN0aW9uKCBpbWcsIGJlc3RDYW5kaWRhdGUgKSB7XG5cdFx0dmFyIG9yaWdXaWR0aDtcblx0XHRpbWcuc3JjID0gYmVzdENhbmRpZGF0ZS51cmw7XG5cblx0XHQvLyBhbHRob3VnaCB0aGlzIGlzIGEgc3BlY2lmaWMgU2FmYXJpIGlzc3VlLCB3ZSBkb24ndCB3YW50IHRvIHRha2UgdG9vIG11Y2ggZGlmZmVyZW50IGNvZGUgcGF0aHNcblx0XHRpZiAoIGJlc3RDYW5kaWRhdGUuc2V0LnR5cGUgPT09IFwiaW1hZ2Uvc3ZnK3htbFwiICkge1xuXHRcdFx0b3JpZ1dpZHRoID0gaW1nLnN0eWxlLndpZHRoO1xuXHRcdFx0aW1nLnN0eWxlLndpZHRoID0gKGltZy5vZmZzZXRXaWR0aCArIDEpICsgXCJweFwiO1xuXG5cdFx0XHQvLyBuZXh0IGxpbmUgb25seSBzaG91bGQgdHJpZ2dlciBhIHJlcGFpbnRcblx0XHRcdC8vIGlmLi4uIGlzIG9ubHkgZG9uZSB0byB0cmljayBkZWFkIGNvZGUgcmVtb3ZhbFxuXHRcdFx0aWYgKCBpbWcub2Zmc2V0V2lkdGggKyAxICkge1xuXHRcdFx0XHRpbWcuc3R5bGUud2lkdGggPSBvcmlnV2lkdGg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHBmLmdldFNldCA9IGZ1bmN0aW9uKCBpbWcgKSB7XG5cdFx0dmFyIGksIHNldCwgc3VwcG9ydHNUeXBlO1xuXHRcdHZhciBtYXRjaCA9IGZhbHNlO1xuXHRcdHZhciBzZXRzID0gaW1nIFsgcGYubnMgXS5zZXRzO1xuXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBzZXRzLmxlbmd0aCAmJiAhbWF0Y2g7IGkrKyApIHtcblx0XHRcdHNldCA9IHNldHNbaV07XG5cblx0XHRcdGlmICggIXNldC5zcmNzZXQgfHwgIXBmLm1hdGNoZXNNZWRpYSggc2V0Lm1lZGlhICkgfHwgIShzdXBwb3J0c1R5cGUgPSBwZi5zdXBwb3J0c1R5cGUoIHNldC50eXBlICkpICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdXBwb3J0c1R5cGUgPT09IFwicGVuZGluZ1wiICkge1xuXHRcdFx0XHRzZXQgPSBzdXBwb3J0c1R5cGU7XG5cdFx0XHR9XG5cblx0XHRcdG1hdGNoID0gc2V0O1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hdGNoO1xuXHR9O1xuXG5cdHBmLnBhcnNlU2V0cyA9IGZ1bmN0aW9uKCBlbGVtZW50LCBwYXJlbnQsIG9wdGlvbnMgKSB7XG5cdFx0dmFyIHNyY3NldEF0dHJpYnV0ZSwgaW1hZ2VTZXQsIGlzV0Rlc2NyaXBvciwgc3Jjc2V0UGFyc2VkO1xuXG5cdFx0dmFyIGhhc1BpY3R1cmUgPSBwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiUElDVFVSRVwiO1xuXHRcdHZhciBpbWFnZURhdGEgPSBlbGVtZW50WyBwZi5ucyBdO1xuXG5cdFx0aWYgKCBpbWFnZURhdGEuc3JjID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5zcmMgKSB7XG5cdFx0XHRpbWFnZURhdGEuc3JjID0gZ2V0SW1nQXR0ci5jYWxsKCBlbGVtZW50LCBcInNyY1wiICk7XG5cdFx0XHRpZiAoIGltYWdlRGF0YS5zcmMgKSB7XG5cdFx0XHRcdHNldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3JjQXR0ciwgaW1hZ2VEYXRhLnNyYyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVtb3ZlSW1nQXR0ci5jYWxsKCBlbGVtZW50LCBzcmNBdHRyICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBpbWFnZURhdGEuc3Jjc2V0ID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5zcmNzZXQgfHwgIXBmLnN1cFNyY3NldCB8fCBlbGVtZW50LnNyY3NldCApIHtcblx0XHRcdHNyY3NldEF0dHJpYnV0ZSA9IGdldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgXCJzcmNzZXRcIiApO1xuXHRcdFx0aW1hZ2VEYXRhLnNyY3NldCA9IHNyY3NldEF0dHJpYnV0ZTtcblx0XHRcdHNyY3NldFBhcnNlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aW1hZ2VEYXRhLnNldHMgPSBbXTtcblxuXHRcdGlmICggaGFzUGljdHVyZSApIHtcblx0XHRcdGltYWdlRGF0YS5waWMgPSB0cnVlO1xuXHRcdFx0Z2V0QWxsU291cmNlRWxlbWVudHMoIHBhcmVudCwgaW1hZ2VEYXRhLnNldHMgKTtcblx0XHR9XG5cblx0XHRpZiAoIGltYWdlRGF0YS5zcmNzZXQgKSB7XG5cdFx0XHRpbWFnZVNldCA9IHtcblx0XHRcdFx0c3Jjc2V0OiBpbWFnZURhdGEuc3Jjc2V0LFxuXHRcdFx0XHRzaXplczogZ2V0SW1nQXR0ci5jYWxsKCBlbGVtZW50LCBcInNpemVzXCIgKVxuXHRcdFx0fTtcblxuXHRcdFx0aW1hZ2VEYXRhLnNldHMucHVzaCggaW1hZ2VTZXQgKTtcblxuXHRcdFx0aXNXRGVzY3JpcG9yID0gKGFsd2F5c0NoZWNrV0Rlc2NyaXB0b3IgfHwgaW1hZ2VEYXRhLnNyYykgJiYgcmVnV0Rlc2MudGVzdChpbWFnZURhdGEuc3Jjc2V0IHx8IFwiXCIpO1xuXG5cdFx0XHQvLyBhZGQgbm9ybWFsIHNyYyBhcyBjYW5kaWRhdGUsIGlmIHNvdXJjZSBoYXMgbm8gdyBkZXNjcmlwdG9yXG5cdFx0XHRpZiAoICFpc1dEZXNjcmlwb3IgJiYgaW1hZ2VEYXRhLnNyYyAmJiAhZ2V0Q2FuZGlkYXRlRm9yU3JjKGltYWdlRGF0YS5zcmMsIGltYWdlU2V0KSAmJiAhaW1hZ2VTZXQuaGFzMXggKSB7XG5cdFx0XHRcdGltYWdlU2V0LnNyY3NldCArPSBcIiwgXCIgKyBpbWFnZURhdGEuc3JjO1xuXHRcdFx0XHRpbWFnZVNldC5jYW5kcy5wdXNoKHtcblx0XHRcdFx0XHR1cmw6IGltYWdlRGF0YS5zcmMsXG5cdFx0XHRcdFx0ZDogMSxcblx0XHRcdFx0XHRzZXQ6IGltYWdlU2V0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIGlmICggaW1hZ2VEYXRhLnNyYyApIHtcblx0XHRcdGltYWdlRGF0YS5zZXRzLnB1c2goIHtcblx0XHRcdFx0c3Jjc2V0OiBpbWFnZURhdGEuc3JjLFxuXHRcdFx0XHRzaXplczogbnVsbFxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGltYWdlRGF0YS5jdXJDYW4gPSBudWxsO1xuXHRcdGltYWdlRGF0YS5jdXJTcmMgPSB1bmRlZmluZWQ7XG5cblx0XHQvLyBpZiBpbWcgaGFzIHBpY3R1cmUgb3IgdGhlIHNyY3NldCB3YXMgcmVtb3ZlZCBvciBoYXMgYSBzcmNzZXQgYW5kIGRvZXMgbm90IHN1cHBvcnQgc3Jjc2V0IGF0IGFsbFxuXHRcdC8vIG9yIGhhcyBhIHcgZGVzY3JpcHRvciAoYW5kIGRvZXMgbm90IHN1cHBvcnQgc2l6ZXMpIHNldCBzdXBwb3J0IHRvIGZhbHNlIHRvIGV2YWx1YXRlXG5cdFx0aW1hZ2VEYXRhLnN1cHBvcnRlZCA9ICEoIGhhc1BpY3R1cmUgfHwgKCBpbWFnZVNldCAmJiAhcGYuc3VwU3Jjc2V0ICkgfHwgKGlzV0Rlc2NyaXBvciAmJiAhcGYuc3VwU2l6ZXMpICk7XG5cblx0XHRpZiAoIHNyY3NldFBhcnNlZCAmJiBwZi5zdXBTcmNzZXQgJiYgIWltYWdlRGF0YS5zdXBwb3J0ZWQgKSB7XG5cdFx0XHRpZiAoIHNyY3NldEF0dHJpYnV0ZSApIHtcblx0XHRcdFx0c2V0SW1nQXR0ci5jYWxsKCBlbGVtZW50LCBzcmNzZXRBdHRyLCBzcmNzZXRBdHRyaWJ1dGUgKTtcblx0XHRcdFx0ZWxlbWVudC5zcmNzZXQgPSBcIlwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVtb3ZlSW1nQXR0ci5jYWxsKCBlbGVtZW50LCBzcmNzZXRBdHRyICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGltYWdlRGF0YS5zdXBwb3J0ZWQgJiYgIWltYWdlRGF0YS5zcmNzZXQgJiYgKCghaW1hZ2VEYXRhLnNyYyAmJiBlbGVtZW50LnNyYykgfHwgIGVsZW1lbnQuc3JjICE9PSBwZi5tYWtlVXJsKGltYWdlRGF0YS5zcmMpKSkge1xuXHRcdFx0aWYgKGltYWdlRGF0YS5zcmMgPT09IG51bGwpIHtcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJzcmNcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LnNyYyA9IGltYWdlRGF0YS5zcmM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aW1hZ2VEYXRhLnBhcnNlZCA9IHRydWU7XG5cdH07XG5cblx0cGYuZmlsbEltZyA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcblx0XHR2YXIgaW1hZ2VEYXRhO1xuXHRcdHZhciBleHRyZW1lID0gb3B0aW9ucy5yZXNlbGVjdCB8fCBvcHRpb25zLnJlZXZhbHVhdGU7XG5cblx0XHQvLyBleHBhbmRvIGZvciBjYWNoaW5nIGRhdGEgb24gdGhlIGltZ1xuXHRcdGlmICggIWVsZW1lbnRbIHBmLm5zIF0gKSB7XG5cdFx0XHRlbGVtZW50WyBwZi5ucyBdID0ge307XG5cdFx0fVxuXG5cdFx0aW1hZ2VEYXRhID0gZWxlbWVudFsgcGYubnMgXTtcblxuXHRcdC8vIGlmIHRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gZXZhbHVhdGVkLCBza2lwIGl0XG5cdFx0Ly8gdW5sZXNzIGBvcHRpb25zLnJlZXZhbHVhdGVgIGlzIHNldCB0byB0cnVlICggdGhpcywgZm9yIGV4YW1wbGUsXG5cdFx0Ly8gaXMgc2V0IHRvIHRydWUgd2hlbiBydW5uaW5nIGBwaWN0dXJlZmlsbGAgb24gYHJlc2l6ZWAgKS5cblx0XHRpZiAoICFleHRyZW1lICYmIGltYWdlRGF0YS5ldmFsZWQgPT09IGV2YWxJZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoICFpbWFnZURhdGEucGFyc2VkIHx8IG9wdGlvbnMucmVldmFsdWF0ZSApIHtcblx0XHRcdHBmLnBhcnNlU2V0cyggZWxlbWVudCwgZWxlbWVudC5wYXJlbnROb2RlLCBvcHRpb25zICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhaW1hZ2VEYXRhLnN1cHBvcnRlZCApIHtcblx0XHRcdGFwcGx5QmVzdENhbmRpZGF0ZSggZWxlbWVudCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbWFnZURhdGEuZXZhbGVkID0gZXZhbElkO1xuXHRcdH1cblx0fTtcblxuXHRwZi5zZXR1cFJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggIWFscmVhZHlSdW4gfHwgaXNWd0RpcnR5IHx8IChEUFIgIT09IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKSApIHtcblx0XHRcdHVwZGF0ZU1ldHJpY3MoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gSWYgcGljdHVyZSBpcyBzdXBwb3J0ZWQsIHdlbGwsIHRoYXQncyBhd2Vzb21lLlxuXHRpZiAoIHBmLnN1cFBpY3R1cmUgKSB7XG5cdFx0cGljdHVyZWZpbGwgPSBub29wO1xuXHRcdHBmLmZpbGxJbWcgPSBub29wO1xuXHR9IGVsc2Uge1xuXG5cdFx0IC8vIFNldCB1cCBwaWN0dXJlIHBvbHlmaWxsIGJ5IHBvbGxpbmcgdGhlIGRvY3VtZW50XG5cdFx0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlzRG9tUmVhZHk7XG5cdFx0XHR2YXIgcmVnUmVhZHkgPSB3aW5kb3cuYXR0YWNoRXZlbnQgPyAvZCR8XmMvIDogL2QkfF5jfF5pLztcblxuXHRcdFx0dmFyIHJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGUgfHwgXCJcIjtcblxuXHRcdFx0XHR0aW1lcklkID0gc2V0VGltZW91dChydW4sIHJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiID8gMjAwIDogIDk5OSk7XG5cdFx0XHRcdGlmICggZG9jdW1lbnQuYm9keSApIHtcblx0XHRcdFx0XHRwZi5maWxsSW1ncygpO1xuXHRcdFx0XHRcdGlzRG9tUmVhZHkgPSBpc0RvbVJlYWR5IHx8IHJlZ1JlYWR5LnRlc3QocmVhZHlTdGF0ZSk7XG5cdFx0XHRcdFx0aWYgKCBpc0RvbVJlYWR5ICkge1xuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lcklkICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHZhciB0aW1lcklkID0gc2V0VGltZW91dChydW4sIGRvY3VtZW50LmJvZHkgPyA5IDogOTkpO1xuXG5cdFx0XHQvLyBBbHNvIGF0dGFjaCBwaWN0dXJlZmlsbCBvbiByZXNpemUgYW5kIHJlYWR5c3RhdGVjaGFuZ2Vcblx0XHRcdC8vIGh0dHA6Ly9tb2Rlcm5qYXZhc2NyaXB0LmJsb2dzcG90LmNvbS8yMDEzLzA4L2J1aWxkaW5nLWJldHRlci1kZWJvdW5jZS5odG1sXG5cdFx0XHR2YXIgZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0KSB7XG5cdFx0XHRcdHZhciB0aW1lb3V0LCB0aW1lc3RhbXA7XG5cdFx0XHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBsYXN0ID0gKG5ldyBEYXRlKCkpIC0gdGltZXN0YW1wO1xuXG5cdFx0XHRcdFx0aWYgKGxhc3QgPCB3YWl0KSB7XG5cdFx0XHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdFx0XHRcdGZ1bmMoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHRpbWVzdGFtcCA9IG5ldyBEYXRlKCk7XG5cblx0XHRcdFx0XHRpZiAoIXRpbWVvdXQpIHtcblx0XHRcdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdFx0dmFyIGxhc3RDbGllbnRXaWR0aCA9IGRvY0VsZW0uY2xpZW50SGVpZ2h0O1xuXHRcdFx0dmFyIG9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlzVndEaXJ0eSA9IE1hdGgubWF4KHdpbmRvdy5pbm5lcldpZHRoIHx8IDAsIGRvY0VsZW0uY2xpZW50V2lkdGgpICE9PSB1bml0cy53aWR0aCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCAhPT0gbGFzdENsaWVudFdpZHRoO1xuXHRcdFx0XHRsYXN0Q2xpZW50V2lkdGggPSBkb2NFbGVtLmNsaWVudEhlaWdodDtcblx0XHRcdFx0aWYgKCBpc1Z3RGlydHkgKSB7XG5cdFx0XHRcdFx0cGYuZmlsbEltZ3MoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0b24oIHdpbmRvdywgXCJyZXNpemVcIiwgZGVib3VuY2Uob25SZXNpemUsIDk5ICkgKTtcblx0XHRcdG9uKCBkb2N1bWVudCwgXCJyZWFkeXN0YXRlY2hhbmdlXCIsIHJ1biApO1xuXHRcdH0pKCk7XG5cdH1cblxuXHRwZi5waWN0dXJlZmlsbCA9IHBpY3R1cmVmaWxsO1xuXHQvL3VzZSB0aGlzIGludGVybmFsbHkgZm9yIGVhc3kgbW9ua2V5IHBhdGNoaW5nL3BlcmZvcm1hbmNlIHRlc3Rpbmdcblx0cGYuZmlsbEltZ3MgPSBwaWN0dXJlZmlsbDtcblx0cGYudGVhcmRvd25SdW4gPSBub29wO1xuXG5cdC8qIGV4cG9zZSBtZXRob2RzIGZvciB0ZXN0aW5nICovXG5cdHBpY3R1cmVmaWxsLl8gPSBwZjtcblxuXHR3aW5kb3cucGljdHVyZWZpbGxDRkcgPSB7XG5cdFx0cGY6IHBmLFxuXHRcdHB1c2g6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdHZhciBuYW1lID0gYXJncy5zaGlmdCgpO1xuXHRcdFx0aWYgKHR5cGVvZiBwZltuYW1lXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHBmW25hbWVdLmFwcGx5KHBmLCBhcmdzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNmZ1tuYW1lXSA9IGFyZ3NbMF07XG5cdFx0XHRcdGlmIChhbHJlYWR5UnVuKSB7XG5cdFx0XHRcdFx0cGYuZmlsbEltZ3MoIHsgcmVzZWxlY3Q6IHRydWUgfSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHdoaWxlIChzZXRPcHRpb25zICYmIHNldE9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0d2luZG93LnBpY3R1cmVmaWxsQ0ZHLnB1c2goc2V0T3B0aW9ucy5zaGlmdCgpKTtcblx0fVxuXG5cdC8qIGV4cG9zZSBwaWN0dXJlZmlsbCAqL1xuXHR3aW5kb3cucGljdHVyZWZpbGwgPSBwaWN0dXJlZmlsbDtcblxuXHQvKiBleHBvc2UgcGljdHVyZWZpbGwgKi9cblx0aWYgKCB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIiApIHtcblx0XHQvLyBDb21tb25KUywganVzdCBleHBvcnRcblx0XHRtb2R1bGUuZXhwb3J0cyA9IHBpY3R1cmVmaWxsO1xuXHR9IGVsc2UgaWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblx0XHQvLyBBTUQgc3VwcG9ydFxuXHRcdGRlZmluZSggXCJwaWN0dXJlZmlsbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHBpY3R1cmVmaWxsOyB9ICk7XG5cdH1cblxuXHQvLyBJRTggZXZhbHMgdGhpcyBzeW5jLCBzbyBpdCBtdXN0IGJlIHRoZSBsYXN0IHRoaW5nIHdlIGRvXG5cdGlmICggIXBmLnN1cFBpY3R1cmUgKSB7XG5cdFx0dHlwZXNbIFwiaW1hZ2Uvd2VicFwiIF0gPSBkZXRlY3RUeXBlU3VwcG9ydChcImltYWdlL3dlYnBcIiwgXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSa29BQUFCWFJVSlFWbEE0V0FvQUFBQVFBQUFBQUFBQUFBQUFRVXhRU0F3QUFBQUJCeEFSL1E5RVJQOERBQUJXVURnZ0dBQUFBREFCQUowQktnRUFBUUFEQURRbHBBQURjQUQrKy8xUUFBPT1cIiApO1xuXHR9XG5cbn0gKSggd2luZG93LCBkb2N1bWVudCApO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==