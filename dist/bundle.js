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

/***/ "./node_modules/picturefill/dist/picturefill.js":
/*!******************************************************!*\
  !*** ./node_modules/picturefill/dist/picturefill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function(window) {
	/*jshint eqnull:true */
	var ua = navigator.userAgent;

	if ( window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) ) {
		addEventListener("resize", (function() {
			var timer;

			var dummySrc = document.createElement("source");

			var fixRespimg = function(img) {
				var source, sizes;
				var picture = img.parentNode;

				if (picture.nodeName.toUpperCase() === "PICTURE") {
					source = dummySrc.cloneNode();

					picture.insertBefore(source, picture.firstElementChild);
					setTimeout(function() {
						picture.removeChild(source);
					});
				} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
					img._pfLastSize = img.offsetWidth;
					sizes = img.sizes;
					img.sizes += ",100vw";
					setTimeout(function() {
						img.sizes = sizes;
					});
				}
			};

			var findPictureImgs = function() {
				var i;
				var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (i = 0; i < imgs.length; i++) {
					fixRespimg(imgs[i]);
				}
			};
			var onResize = function() {
				clearTimeout(timer);
				timer = setTimeout(findPictureImgs, 99);
			};
			var mq = window.matchMedia && matchMedia("(orientation: landscape)");
			var init = function() {
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
		})());
	}
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function( window, document, undefined ) {
	// Enable strict mode
	"use strict";

	// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
	document.createElement( "picture" );

	var warn, eminpx, alwaysCheckWDescriptor, evalId;
	// local object for method references and testing exposure
	var pf = {};
	var isSupportTestReady = false;
	var noop = function() {};
	var image = document.createElement( "img" );
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
	var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35 );
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
	var anchor = document.createElement( "a" );
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

	var on = function(obj, evt, fn, capture) {
		if ( obj.addEventListener ) {
			obj.addEventListener(evt, fn, capture || false);
		} else if ( obj.attachEvent ) {
			obj.attachEvent( "on" + evt, fn);
		}
	};

	/**
	 * simple memoize function:
	 */

	var memoize = function(fn) {
		var cache = {};
		return function(input) {
			if ( !(input in cache) ) {
				cache[ input ] = fn(input);
			}
			return cache[ input ];
		};
	};

	// UTILITY FUNCTIONS

	// Manual is faster than RegEx
	// http://jsperf.com/whitespace-character/5
	function isSpace(c) {
		return (c === "\u0020" || // space
		        c === "\u0009" || // horizontal tab
		        c === "\u000A" || // new line
		        c === "\u000C" || // form feed
		        c === "\u000D");  // carriage return
	}

	/**
	 * gets a mediaquery and returns a boolean or gets a css length and returns a number
	 * @param css mediaqueries or css length
	 * @returns {boolean|number}
	 *
	 * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
	 */
	var evalCSS = (function() {

		var regLength = /^([\d\.]+)(em|vw|px)$/;
		var replace = function() {
			var args = arguments, index = 0, string = args[0];
			while (++index in args) {
				string = string.replace(args[index], args[++index]);
			}
			return string;
		};

		var buildStr = memoize(function(css) {

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
				/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, ""
			) + ";";
		});

		return function(css, length) {
			var parsedLength;
			if (!(css in cssCache)) {
				cssCache[css] = false;
				if (length && (parsedLength = css.match( regLength ))) {
					cssCache[css] = parsedLength[ 1 ] * units[parsedLength[ 2 ]];
				} else {
					/*jshint evil:true */
					try{
						cssCache[css] = new Function("e", buildStr(css))(units);
					} catch(e) {}
					/*jshint evil:false */
				}
			}
			return cssCache[css];
		};
	})();

	var setResolution = function( candidate, sizesattr ) {
		if ( candidate.w ) { // h = means height: || descriptor.type === 'h' do not handle yet...
			candidate.cWidth = pf.calcListLength( sizesattr || "100vw" );
			candidate.res = candidate.w / candidate.cWidth ;
		} else {
			candidate.res = candidate.d;
		}
		return candidate;
	};

	/**
	 *
	 * @param opt
	 */
	var picturefill = function( opt ) {

		if (!isSupportTestReady) {return;}

		var elements, i, plen;

		var options = opt || {};

		if ( options.elements && options.elements.nodeType === 1 ) {
			if ( options.elements.nodeName.toUpperCase() === "IMG" ) {
				options.elements =  [ options.elements ];
			} else {
				options.context = options.elements;
				options.elements =  null;
			}
		}

		elements = options.elements || pf.qsa( (options.context || document), ( options.reevaluate || options.reselect ) ? pf.sel : pf.selShort );

		if ( (plen = elements.length) ) {

			pf.setupRun( options );
			alreadyRun = true;

			// Loop through all elements
			for ( i = 0; i < plen; i++ ) {
				pf.fillImg(elements[ i ], options);
			}

			pf.teardownRun( options );
		}
	};

	/**
	 * outputs a warning for the developer
	 * @param {message}
	 * @type {Function}
	 */
	warn = ( window.console && console.warn ) ?
		function( message ) {
			console.warn( message );
		} :
		noop
	;

	if ( !(curSrcProp in image) ) {
		curSrcProp = "src";
	}

	// Add support for standard mime types.
	types[ "image/jpeg" ] = true;
	types[ "image/gif" ] = true;
	types[ "image/png" ] = true;

	function detectTypeSupport( type, typeUri ) {
		// based on Modernizr's lossless img-webp test
		// note: asynchronous
		var image = new window.Image();
		image.onerror = function() {
			types[ type ] = false;
			picturefill();
		};
		image.onload = function() {
			types[ type ] = image.width === 1;
			picturefill();
		};
		image.src = typeUri;
		return "pending";
	}

	// test svg support
	types[ "image/svg+xml" ] = document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" );

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

		evalId = [ units.height, units.width, DPR ].join("-");

		units.em = pf.getEmValue();
		units.rem = units.em;
	}

	function chooseLowRes( lowerValue, higherValue, dprValue, isCached ) {
		var bonusFactor, tooMuch, bonus, meanDensity;

		//experimental
		if (cfg.algorithm === "saveData" ){
			if ( lowerValue > 2.7 ) {
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
			meanDensity = (dprValue > 1) ?
				Math.sqrt(lowerValue * higherValue) :
				lowerValue;
		}

		return meanDensity > dprValue;
	}

	function applyBestCandidate( img ) {
		var srcSetCandidates;
		var matchingSet = pf.getSet( img );
		var evaluated = false;
		if ( matchingSet !== "pending" ) {
			evaluated = evalId;
			if ( matchingSet ) {
				srcSetCandidates = pf.setRes( matchingSet );
				pf.applySetCandidate( srcSetCandidates, img );
			}
		}
		img[ pf.ns ].evaled = evaluated;
	}

	function ascendingSort( a, b ) {
		return a.res - b.res;
	}

	function setSrcToCur( img, src, set ) {
		var candidate;
		if ( !set && src ) {
			set = img[ pf.ns ].sets;
			set = set && set[set.length - 1];
		}

		candidate = getCandidateForSrc(src, set);

		if ( candidate ) {
			src = pf.makeUrl(src);
			img[ pf.ns ].curSrc = src;
			img[ pf.ns ].curCan = candidate;

			if ( !candidate.res ) {
				setResolution( candidate, candidate.set.sizes );
			}
		}
		return candidate;
	}

	function getCandidateForSrc( src, set ) {
		var i, candidate, candidates;
		if ( src && set ) {
			candidates = pf.parseSet( set );
			src = pf.makeUrl(src);
			for ( i = 0; i < candidates.length; i++ ) {
				if ( src === pf.makeUrl(candidates[ i ].url) ) {
					candidate = candidates[ i ];
					break;
				}
			}
		}
		return candidate;
	}

	function getAllSourceElements( picture, candidates ) {
		var i, len, source, srcset;

		// SPEC mismatch intended for size and perf:
		// actually only source elements preceding the img should be used
		// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
		var sources = picture.getElementsByTagName( "source" );

		for ( i = 0, len = sources.length; i < len; i++ ) {
			source = sources[ i ];
			source[ pf.ns ] = true;
			srcset = source.getAttribute( "srcset" );

			// if source does not have a srcset attribute, skip
			if ( srcset ) {
				candidates.push( {
					srcset: srcset,
					media: source.getAttribute( "media" ),
					type: source.getAttribute( "type" ),
					sizes: source.getAttribute( "sizes" )
				} );
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
				chars = match[ 0 ];
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
			    w, d, h, i,
			    candidate = {},
			    desc, lastChar, value, intVal, floatVal;

			// 13. For each descriptor in descriptors, run the appropriate set of steps
			// from the following list:
			for (i = 0 ; i < descriptors.length; i++) {
				desc = descriptors[ i ];

				lastChar = desc[ desc.length - 1 ];
				value = desc.substring(0, desc.length - 1);
				intVal = parseInt(value, 10);
				floatVal = parseFloat(value);

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0077 LATIN SMALL LETTER W character
				if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

					// If width and density are not both absent, then let error be yes.
					if (w || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes.
					// Otherwise, let width be the result.
					if (intVal === 0) {pError = true;} else {w = intVal;}

				// If the descriptor consists of a valid floating-point number followed by
				// a U+0078 LATIN SMALL LETTER X character
				} else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

					// If width, density and future-compat-h are not all absent, then let error
					// be yes.
					if (w || d || h) {pError = true;}

					// Apply the rules for parsing floating-point number values to the descriptor.
					// If the result is less than zero, let error be yes. Otherwise, let density
					// be the result.
					if (floatVal < 0) {pError = true;} else {d = floatVal;}

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0068 LATIN SMALL LETTER H character
				} else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

					// If height and density are not both absent, then let error be yes.
					if (h || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes. Otherwise, let future-compat-h
					// be the result.
					if (intVal === 0) {pError = true;} else {h = intVal;}

				// Anything else, Let error be yes.
				} else {pError = true;}
			} // (close step 13 for loop)

			// 15. If error is still no, then append a new image source to candidates whose
			// URL is url, associated with a width width if not absent and a pixel
			// density density if not absent. Otherwise, there is a parse error.
			if (!pError) {
				candidate.url = url;

				if (w) { candidate.w = w;}
				if (d) { candidate.d = d;}
				if (h) { candidate.h = h;}
				if (!h && !d && !w) {candidate.d = 1;}
				if (candidate.d === 1) {set.has1x = true;}
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
					} else if (c === "\u0028") {
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

				if (chrctr === "") { // ( End of string reached.)
					pushComponent();
					pushComponentArray();
					return listArray;
				} else if (inComment) {
					if ((chrctr === "*") && (str[pos + 1] === "/")) { // (At end of a comment.)
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
					if ( (str.charAt(pos - 1) && isSpace( str.charAt(pos - 1) ) ) || !component ) {
						pos += 1;
						continue;
					} else if (parenDepth === 0) {
						pushComponent();
						pos +=1;
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
				} else if ( (chrctr === "/") && (str.charAt(pos + 1) === "*") ) {
					inComment = true;
					pos += 2;
					continue;
				}

				component = component + chrctr;
				pos += 1;
			}
		}

		function isValidNonNegativeSourceSizeValue(s) {
			if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {return true;}
			if (regexCssCalc.test(s)) {return true;}
			// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
			// "-0 is equivalent to 0 and is not a negative number." which means that
			// unitless zero and unitless negative zero must be accepted as special cases.)
			if ((s === "0") || (s === "-0") || (s === "+0")) {return true;}
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
			if (!(pf.matchesMedia( unparsedSize ) ) ) {
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
		(function(image2) {
			image.srcset = "data:,a";
			image2.src = "data:,a";
			pf.supSrcset = image.complete === image2.complete;
			pf.supPicture = pf.supSrcset && pf.supPicture;
		})(document.createElement("img"));
	}

	// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
	if (pf.supSrcset && !pf.supSizes) {

		(function() {
			var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
			var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
			var img = document.createElement("img");
			var test = function() {
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
	pf.DPR = (DPR  || 1 );
	pf.u = units;

	// container of supported mime types that one might need to qualify before using
	pf.types =  types;

	pf.setSize = noop;

	/**
	 * Gets a string and returns the absolute URL
	 * @param src
	 * @returns {String} absolute URL
	 */

	pf.makeUrl = memoize(function(src) {
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
	pf.qsa = function(context, sel) {
		return ( "querySelector" in context ) ? context.querySelectorAll(sel) : [];
	};

	/**
	 * Shortcut method for matchMedia ( for easy overriding in tests )
	 * wether native or pf.mMQ is used will be decided lazy on first call
	 * @returns {boolean}
	 */
	pf.matchesMedia = function() {
		if ( window.matchMedia && (matchMedia( "(min-width: 0.1em)" ) || {}).matches ) {
			pf.matchesMedia = function( media ) {
				return !media || ( matchMedia( media ).matches );
			};
		} else {
			pf.matchesMedia = pf.mMQ;
		}

		return pf.matchesMedia.apply( this, arguments );
	};

	/**
	 * A simplified matchMedia implementation for IE8 and IE9
	 * handles only min-width/max-width with px or em values
	 * @param media
	 * @returns {boolean}
	 */
	pf.mMQ = function( media ) {
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
	pf.calcLength = function( sourceSizeValue ) {

		var value = evalCSS(sourceSizeValue, true) || false;
		if (value < 0) {
			value = false;
		}

		return value;
	};

	/**
	 * Takes a type string and checks if its supported
	 */

	pf.supportsType = function( type ) {
		return ( type ) ? types[ type ] : true;
	};

	/**
	 * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
	 * @param sourceSizeStr
	 * @returns {*}
	 */
	pf.parseSize = memoize(function( sourceSizeStr ) {
		var match = ( sourceSizeStr || "" ).match(regSize);
		return {
			media: match && match[1],
			length: match && match[2]
		};
	});

	pf.parseSet = function( set ) {
		if ( !set.cands ) {
			set.cands = parseSrcset(set.srcset, set);
		}
		return set.cands;
	};

	/**
	 * returns 1em in css px for html/body default size
	 * function taken from respondjs
	 * @returns {*|number}
	 */
	pf.getEmValue = function() {
		var body;
		if ( !eminpx && (body = document.body) ) {
			var div = document.createElement( "div" ),
				originalHTMLCSS = docElem.style.cssText,
				originalBodyCSS = body.style.cssText;

			div.style.cssText = baseStyle;

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.cssText = fsCss;
			body.style.cssText = fsCss;

			body.appendChild( div );
			eminpx = div.offsetWidth;
			body.removeChild( div );

			//also update eminpx before returning
			eminpx = parseFloat( eminpx, 10 );

			// restore the original values
			docElem.style.cssText = originalHTMLCSS;
			body.style.cssText = originalBodyCSS;

		}
		return eminpx || 16;
	};

	/**
	 * Takes a string of sizes and returns the width in pixels as a number
	 */
	pf.calcListLength = function( sourceSizeListStr ) {
		// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
		//
		//                           or (min-width:30em) calc(30% - 15px)
		if ( !(sourceSizeListStr in sizeLengthCache) || cfg.uT ) {
			var winningLength = pf.calcLength( parseSizes( sourceSizeListStr ) );

			sizeLengthCache[ sourceSizeListStr ] = !winningLength ? units.width : winningLength;
		}

		return sizeLengthCache[ sourceSizeListStr ];
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
	pf.setRes = function( set ) {
		var candidates;
		if ( set ) {

			candidates = pf.parseSet( set );

			for ( var i = 0, len = candidates.length; i < len; i++ ) {
				setResolution( candidates[ i ], set.sizes );
			}
		}
		return candidates;
	};

	pf.setRes.res = setResolution;

	pf.applySetCandidate = function( candidates, img ) {
		if ( !candidates.length ) {return;}
		var candidate,
			i,
			j,
			length,
			bestCandidate,
			curSrc,
			curCan,
			candidateSrc,
			abortCurSrc;

		var imageData = img[ pf.ns ];
		var dpr = pf.DPR;

		curSrc = imageData.curSrc || img[curSrcProp];

		curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

		// if we have a current source, we might either become lazy or give this source some advantage
		if ( curCan && curCan.set === candidates[ 0 ].set ) {

			// if browser can abort image request and the image has a higher pixel density than needed
			// and this image isn't downloaded yet, we skip next part and try to save bandwidth
			abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);

			if ( !abortCurSrc ) {
				curCan.cached = true;

				// if current candidate is "best", "better" or "okay",
				// set it to bestCandidate
				if ( curCan.res >= dpr ) {
					bestCandidate = curCan;
				}
			}
		}

		if ( !bestCandidate ) {

			candidates.sort( ascendingSort );

			length = candidates.length;
			bestCandidate = candidates[ length - 1 ];

			for ( i = 0; i < length; i++ ) {
				candidate = candidates[ i ];
				if ( candidate.res >= dpr ) {
					j = i - 1;

					// we have found the perfect candidate,
					// but let's improve this a little bit with some assumptions ;-)
					if (candidates[ j ] &&
						(abortCurSrc || curSrc !== pf.makeUrl( candidate.url )) &&
						chooseLowRes(candidates[ j ].res, candidate.res, dpr, candidates[ j ].cached)) {

						bestCandidate = candidates[ j ];

					} else {
						bestCandidate = candidate;
					}
					break;
				}
			}
		}

		if ( bestCandidate ) {

			candidateSrc = pf.makeUrl( bestCandidate.url );

			imageData.curSrc = candidateSrc;
			imageData.curCan = bestCandidate;

			if ( candidateSrc !== curSrc ) {
				pf.setSrc( img, bestCandidate );
			}
			pf.setSize( img );
		}
	};

	pf.setSrc = function( img, bestCandidate ) {
		var origWidth;
		img.src = bestCandidate.url;

		// although this is a specific Safari issue, we don't want to take too much different code paths
		if ( bestCandidate.set.type === "image/svg+xml" ) {
			origWidth = img.style.width;
			img.style.width = (img.offsetWidth + 1) + "px";

			// next line only should trigger a repaint
			// if... is only done to trick dead code removal
			if ( img.offsetWidth + 1 ) {
				img.style.width = origWidth;
			}
		}
	};

	pf.getSet = function( img ) {
		var i, set, supportsType;
		var match = false;
		var sets = img [ pf.ns ].sets;

		for ( i = 0; i < sets.length && !match; i++ ) {
			set = sets[i];

			if ( !set.srcset || !pf.matchesMedia( set.media ) || !(supportsType = pf.supportsType( set.type )) ) {
				continue;
			}

			if ( supportsType === "pending" ) {
				set = supportsType;
			}

			match = set;
			break;
		}

		return match;
	};

	pf.parseSets = function( element, parent, options ) {
		var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

		var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
		var imageData = element[ pf.ns ];

		if ( imageData.src === undefined || options.src ) {
			imageData.src = getImgAttr.call( element, "src" );
			if ( imageData.src ) {
				setImgAttr.call( element, srcAttr, imageData.src );
			} else {
				removeImgAttr.call( element, srcAttr );
			}
		}

		if ( imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset ) {
			srcsetAttribute = getImgAttr.call( element, "srcset" );
			imageData.srcset = srcsetAttribute;
			srcsetParsed = true;
		}

		imageData.sets = [];

		if ( hasPicture ) {
			imageData.pic = true;
			getAllSourceElements( parent, imageData.sets );
		}

		if ( imageData.srcset ) {
			imageSet = {
				srcset: imageData.srcset,
				sizes: getImgAttr.call( element, "sizes" )
			};

			imageData.sets.push( imageSet );

			isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

			// add normal src as candidate, if source has no w descriptor
			if ( !isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x ) {
				imageSet.srcset += ", " + imageData.src;
				imageSet.cands.push({
					url: imageData.src,
					d: 1,
					set: imageSet
				});
			}

		} else if ( imageData.src ) {
			imageData.sets.push( {
				srcset: imageData.src,
				sizes: null
			} );
		}

		imageData.curCan = null;
		imageData.curSrc = undefined;

		// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
		// or has a w descriptor (and does not support sizes) set support to false to evaluate
		imageData.supported = !( hasPicture || ( imageSet && !pf.supSrcset ) || (isWDescripor && !pf.supSizes) );

		if ( srcsetParsed && pf.supSrcset && !imageData.supported ) {
			if ( srcsetAttribute ) {
				setImgAttr.call( element, srcsetAttr, srcsetAttribute );
				element.srcset = "";
			} else {
				removeImgAttr.call( element, srcsetAttr );
			}
		}

		if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) ||  element.src !== pf.makeUrl(imageData.src))) {
			if (imageData.src === null) {
				element.removeAttribute("src");
			} else {
				element.src = imageData.src;
			}
		}

		imageData.parsed = true;
	};

	pf.fillImg = function(element, options) {
		var imageData;
		var extreme = options.reselect || options.reevaluate;

		// expando for caching data on the img
		if ( !element[ pf.ns ] ) {
			element[ pf.ns ] = {};
		}

		imageData = element[ pf.ns ];

		// if the element has already been evaluated, skip it
		// unless `options.reevaluate` is set to true ( this, for example,
		// is set to true when running `picturefill` on `resize` ).
		if ( !extreme && imageData.evaled === evalId ) {
			return;
		}

		if ( !imageData.parsed || options.reevaluate ) {
			pf.parseSets( element, element.parentNode, options );
		}

		if ( !imageData.supported ) {
			applyBestCandidate( element );
		} else {
			imageData.evaled = evalId;
		}
	};

	pf.setupRun = function() {
		if ( !alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio) ) {
			updateMetrics();
		}
	};

	// If picture is supported, well, that's awesome.
	if ( pf.supPicture ) {
		picturefill = noop;
		pf.fillImg = noop;
	} else {

		 // Set up picture polyfill by polling the document
		(function() {
			var isDomReady;
			var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

			var run = function() {
				var readyState = document.readyState || "";

				timerId = setTimeout(run, readyState === "loading" ? 200 :  999);
				if ( document.body ) {
					pf.fillImgs();
					isDomReady = isDomReady || regReady.test(readyState);
					if ( isDomReady ) {
						clearTimeout( timerId );
					}

				}
			};

			var timerId = setTimeout(run, document.body ? 9 : 99);

			// Also attach picturefill on resize and readystatechange
			// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
			var debounce = function(func, wait) {
				var timeout, timestamp;
				var later = function() {
					var last = (new Date()) - timestamp;

					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func();
					}
				};

				return function() {
					timestamp = new Date();

					if (!timeout) {
						timeout = setTimeout(later, wait);
					}
				};
			};
			var lastClientWidth = docElem.clientHeight;
			var onResize = function() {
				isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
				lastClientWidth = docElem.clientHeight;
				if ( isVwDirty ) {
					pf.fillImgs();
				}
			};

			on( window, "resize", debounce(onResize, 99 ) );
			on( document, "readystatechange", run );
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
		push: function(args) {
			var name = args.shift();
			if (typeof pf[name] === "function") {
				pf[name].apply(pf, args);
			} else {
				cfg[name] = args[0];
				if (alreadyRun) {
					pf.fillImgs( { reselect: true } );
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
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// CommonJS, just export
		module.exports = picturefill;
	} else if ( true ) {
		// AMD support
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return picturefill; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// IE8 evals this sync, so it must be the last thing we do
	if ( !pf.supPicture ) {
		types[ "image/webp" ] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==" );
	}

} )( window, document );


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

/***/ "./node_modules/zenscroll/zenscroll.js":
/*!*********************************************!*\
  !*** ./node_modules/zenscroll/zenscroll.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Zenscroll 4.0.2
 * https://github.com/zengabor/zenscroll/
 *
 * Copyright 2015–2018 Gabor Lenard
 *
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org>
 * 
 */

/*jshint devel:true, asi:true */

/*global define, module */


(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory()),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	} else {}
}(this, function () {
	"use strict"


	// Detect if the browser already supports native smooth scrolling (e.g., Firefox 36+ and Chrome 49+) and it is enabled:
	var isNativeSmoothScrollEnabledOn = function (elem) {
		return elem && "getComputedStyle" in window &&
			window.getComputedStyle(elem)["scroll-behavior"] === "smooth"
	}


	// Exit if it’s not a browser environment:
	if (typeof window === "undefined" || !("document" in window)) {
		return {}
	}


	var makeScroller = function (container, defaultDuration, edgeOffset) {

		// Use defaults if not provided
		defaultDuration = defaultDuration || 999 //ms
		if (!edgeOffset && edgeOffset !== 0) {
			// When scrolling, this amount of distance is kept from the edges of the container:
			edgeOffset = 9 //px
		}

		// Handling the life-cycle of the scroller
		var scrollTimeoutId
		var setScrollTimeoutId = function (newValue) {
			scrollTimeoutId = newValue
		}

		/**
		 * Stop the current smooth scroll operation immediately
		 */
		var stopScroll = function () {
			clearTimeout(scrollTimeoutId)
			setScrollTimeoutId(0)
		}

		var getTopWithEdgeOffset = function (elem) {
			return Math.max(0, container.getTopOf(elem) - edgeOffset)
		}

		/**
		 * Scrolls to a specific vertical position in the document.
		 *
		 * @param {targetY} The vertical position within the document.
		 * @param {duration} Optionally the duration of the scroll operation.
		 *        If not provided the default duration is used.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToY = function (targetY, duration, onDone) {
			stopScroll()
			if (duration === 0 || (duration && duration < 0) || isNativeSmoothScrollEnabledOn(container.body)) {
				container.toY(targetY)
				if (onDone) {
					onDone()
				}
			} else {
				var startY = container.getY()
				var distance = Math.max(0, targetY) - startY
				var startTime = new Date().getTime()
				duration = duration || Math.min(Math.abs(distance), defaultDuration);
				(function loopScroll() {
					setScrollTimeoutId(setTimeout(function () {
						// Calculate percentage:
						var p = Math.min(1, (new Date().getTime() - startTime) / duration)
						// Calculate the absolute vertical position:
						var y = Math.max(0, Math.floor(startY + distance*(p < 0.5 ? 2*p*p : p*(4 - p*2)-1)))
						container.toY(y)
						if (p < 1 && (container.getHeight() + y) < container.body.scrollHeight) {
							loopScroll()
						} else {
							setTimeout(stopScroll, 99) // with cooldown time
							if (onDone) {
								onDone()
							}
						}
					}, 9))
				})()
			}
		}

		/**
		 * Scrolls to the top of a specific element.
		 *
		 * @param {elem} The element to scroll to.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToElem = function (elem, duration, onDone) {
			scrollToY(getTopWithEdgeOffset(elem), duration, onDone)
		}

		/**
		 * Scrolls an element into view if necessary.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollIntoView = function (elem, duration, onDone) {
			var elemHeight = elem.getBoundingClientRect().height
			var elemBottom = container.getTopOf(elem) + elemHeight
			var containerHeight = container.getHeight()
			var y = container.getY()
			var containerBottom = y + containerHeight
			if (getTopWithEdgeOffset(elem) < y || (elemHeight + edgeOffset) > containerHeight) {
				// Element is clipped at top or is higher than screen.
				scrollToElem(elem, duration, onDone)
			} else if ((elemBottom + edgeOffset) > containerBottom) {
				// Element is clipped at the bottom.
				scrollToY(elemBottom - containerHeight + edgeOffset, duration, onDone)
			} else if (onDone) {
				onDone()
			}
		}

		/**
		 * Scrolls to the center of an element.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {offset} Optionally the offset of the top of the element from the center of the screen.
		 *        A value of 0 is ignored.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToCenterOf = function (elem, duration, offset, onDone) {
			scrollToY(Math.max(0, container.getTopOf(elem) - container.getHeight()/2 + (offset || elem.getBoundingClientRect().height/2)), duration, onDone)
		}

		/**
		 * Changes default settings for this scroller.
		 *
		 * @param {newDefaultDuration} Optionally a new value for default duration, used for each scroll method by default.
		 *        Ignored if null or undefined.
		 * @param {newEdgeOffset} Optionally a new value for the edge offset, used by each scroll method by default. Ignored if null or undefined.
		 * @returns An object with the current values.
		 */
		var setup = function (newDefaultDuration, newEdgeOffset) {
			if (newDefaultDuration === 0 || newDefaultDuration) {
				defaultDuration = newDefaultDuration
			}
			if (newEdgeOffset === 0 || newEdgeOffset) {
				edgeOffset = newEdgeOffset
			}
			return {
				defaultDuration: defaultDuration,
				edgeOffset: edgeOffset
			}
		}

		return {
			setup: setup,
			to: scrollToElem,
			toY: scrollToY,
			intoView: scrollIntoView,
			center: scrollToCenterOf,
			stop: stopScroll,
			moving: function () { return !!scrollTimeoutId },
			getY: container.getY,
			getTopOf: container.getTopOf
		}

	}


	var docElem = document.documentElement
	var getDocY = function () { return window.scrollY || docElem.scrollTop }

	// Create a scroller for the document:
	var zenscroll = makeScroller({
		body: document.scrollingElement || document.body,
		toY: function (y) { window.scrollTo(0, y) },
		getY: getDocY,
		getHeight: function () { return window.innerHeight || docElem.clientHeight },
		getTopOf: function (elem) { return elem.getBoundingClientRect().top + getDocY() - docElem.offsetTop }
	})


	/**
	 * Creates a scroller from the provided container element (e.g., a DIV)
	 *
	 * @param {scrollContainer} The vertical position within the document.
	 * @param {defaultDuration} Optionally a value for default duration, used for each scroll method by default.
	 *        Ignored if 0 or null or undefined.
	 * @param {edgeOffset} Optionally a value for the edge offset, used by each scroll method by default. 
	 *        Ignored if null or undefined.
	 * @returns A scroller object, similar to `zenscroll` but controlling the provided element.
	 */
	zenscroll.createScroller = function (scrollContainer, defaultDuration, edgeOffset) {
		return makeScroller({
			body: scrollContainer,
			toY: function (y) { scrollContainer.scrollTop = y },
			getY: function () { return scrollContainer.scrollTop },
			getHeight: function () { return Math.min(scrollContainer.clientHeight, window.innerHeight || docElem.clientHeight) },
			getTopOf: function (elem) { return elem.offsetTop }
		}, defaultDuration, edgeOffset)
	}


	// Automatic link-smoothing on achors
	// Exclude IE8- or when native is enabled or Zenscroll auto- is disabled
	if ("addEventListener" in window && !window.noZensmooth && !isNativeSmoothScrollEnabledOn(document.body)) {

		var isHistorySupported = "history" in window && "pushState" in history
		var isScrollRestorationSupported = isHistorySupported && "scrollRestoration" in history

		// On first load & refresh make sure the browser restores the position first
		if (isScrollRestorationSupported) {
			history.scrollRestoration = "auto"
		}

		window.addEventListener("load", function () {

			if (isScrollRestorationSupported) {
				// Set it to manual
				setTimeout(function () { history.scrollRestoration = "manual" }, 9)
				window.addEventListener("popstate", function (event) {
					if (event.state && "zenscrollY" in event.state) {
						zenscroll.toY(event.state.zenscrollY)
					}
				}, false)
			}

			// Add edge offset on first load if necessary
			// This may not work on IE (or older computer?) as it requires more timeout, around 100 ms
			if (window.location.hash) {
				setTimeout(function () {
					// Adjustment is only needed if there is an edge offset:
					var edgeOffset = zenscroll.setup().edgeOffset
					if (edgeOffset) {
						var targetElem = document.getElementById(window.location.href.split("#")[1])
						if (targetElem) {
							var targetY = Math.max(0, zenscroll.getTopOf(targetElem) - edgeOffset)
							var diff = zenscroll.getY() - targetY
							// Only do the adjustment if the browser is very close to the element:
							if (0 <= diff && diff < 9 ) {
								window.scrollTo(0, targetY)
							}
						}
					}
				}, 9)
			}

		}, false)

		// Handling clicks on anchors
		var RE_noZensmooth = new RegExp("(^|\\s)noZensmooth(\\s|$)")
		window.addEventListener("click", function (event) {
			var anchor = event.target
			while (anchor && anchor.tagName !== "A") {
				anchor = anchor.parentNode
			}
			// Let the browser handle the click if it wasn't with the primary button, or with some modifier keys:
			if (!anchor || event.which !== 1 || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
				return
			}
			// Save the current scrolling position so it can be used for scroll restoration:
			if (isScrollRestorationSupported) {
				var historyState = history.state && typeof history.state === "object" ? history.state : {}
				historyState.zenscrollY = zenscroll.getY()
				try {
					history.replaceState(historyState, "")
				} catch (e) {
					// Avoid the Chrome Security exception on file protocol, e.g., file://index.html
				}
			}
			// Find the referenced ID:
			var href = anchor.getAttribute("href") || ""
			if (href.indexOf("#") === 0 && !RE_noZensmooth.test(anchor.className)) {
				var targetY = 0
				var targetElem = document.getElementById(href.substring(1))
				if (href !== "#") {
					if (!targetElem) {
						// Let the browser handle the click if the target ID is not found.
						return
					}
					targetY = zenscroll.getTopOf(targetElem)
				}
				event.preventDefault()
				// By default trigger the browser's `hashchange` event...
				var onDone = function () { window.location = href }
				// ...unless there is an edge offset specified
				var edgeOffset = zenscroll.setup().edgeOffset
				if (edgeOffset) {
					targetY = Math.max(0, targetY - edgeOffset)
					if (isHistorySupported) {
						onDone = function () { history.pushState({}, "", href) }
					}
				}
				zenscroll.toY(targetY, null, onDone)
			}
		}, false)

	}


	return zenscroll


}));


/***/ }),

/***/ "./src/img sync \\.(png|jpe?g|svg)$":
/*!******************************************************!*\
  !*** ./src/img sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Pavlos-Papadopoulos-Photography-w260.jpg": "./src/img/Pavlos-Papadopoulos-Photography-w260.jpg",
	"./Pavlos-Papadopoulos-Photography-w320.jpg": "./src/img/Pavlos-Papadopoulos-Photography-w320.jpg",
	"./Wikipedia-Viewer-w260.jpg": "./src/img/Wikipedia-Viewer-w260.jpg",
	"./Wikipedia-Viewer-w320.jpg": "./src/img/Wikipedia-Viewer-w320.jpg",
	"./back.jpg": "./src/img/back.jpg",
	"./farm-life-w260.jpg": "./src/img/farm-life-w260.jpg",
	"./farm-life-w320.jpg": "./src/img/farm-life-w320.jpg",
	"./fest-seeker-260.jpg": "./src/img/fest-seeker-260.jpg",
	"./fest-seeker-320.jpg": "./src/img/fest-seeker-320.jpg",
	"./glob-taste-w260.jpg": "./src/img/glob-taste-w260.jpg",
	"./glob-taste-w320.jpg": "./src/img/glob-taste-w320.jpg",
	"./logo-img.png": "./src/img/logo-img.png",
	"./logo-opt-img.png": "./src/img/logo-opt-img.png",
	"./logo-opt.svg": "./src/img/logo-opt.svg",
	"./time-machine-w260.jpg": "./src/img/time-machine-w260.jpg",
	"./time-machine-w320.jpg": "./src/img/time-machine-w320.jpg",
	"./video-finder-w260.jpg": "./src/img/video-finder-w260.jpg",
	"./video-finder-w320.jpg": "./src/img/video-finder-w320.jpg"
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

/***/ "./src/img/Pavlos-Papadopoulos-Photography-w260.jpg":
/*!**********************************************************!*\
  !*** ./src/img/Pavlos-Papadopoulos-Photography-w260.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pavlos-Papadopoulos-Photography-w260.jpg";

/***/ }),

/***/ "./src/img/Pavlos-Papadopoulos-Photography-w320.jpg":
/*!**********************************************************!*\
  !*** ./src/img/Pavlos-Papadopoulos-Photography-w320.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Pavlos-Papadopoulos-Photography-w320.jpg";

/***/ }),

/***/ "./src/img/Wikipedia-Viewer-w260.jpg":
/*!*******************************************!*\
  !*** ./src/img/Wikipedia-Viewer-w260.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Wikipedia-Viewer-w260.jpg";

/***/ }),

/***/ "./src/img/Wikipedia-Viewer-w320.jpg":
/*!*******************************************!*\
  !*** ./src/img/Wikipedia-Viewer-w320.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Wikipedia-Viewer-w320.jpg";

/***/ }),

/***/ "./src/img/back.jpg":
/*!**************************!*\
  !*** ./src/img/back.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/back.jpg";

/***/ }),

/***/ "./src/img/farm-life-w260.jpg":
/*!************************************!*\
  !*** ./src/img/farm-life-w260.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/farm-life-w260.jpg";

/***/ }),

/***/ "./src/img/farm-life-w320.jpg":
/*!************************************!*\
  !*** ./src/img/farm-life-w320.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/farm-life-w320.jpg";

/***/ }),

/***/ "./src/img/fest-seeker-260.jpg":
/*!*************************************!*\
  !*** ./src/img/fest-seeker-260.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fest-seeker-260.jpg";

/***/ }),

/***/ "./src/img/fest-seeker-320.jpg":
/*!*************************************!*\
  !*** ./src/img/fest-seeker-320.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fest-seeker-320.jpg";

/***/ }),

/***/ "./src/img/glob-taste-w260.jpg":
/*!*************************************!*\
  !*** ./src/img/glob-taste-w260.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/glob-taste-w260.jpg";

/***/ }),

/***/ "./src/img/glob-taste-w320.jpg":
/*!*************************************!*\
  !*** ./src/img/glob-taste-w320.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/glob-taste-w320.jpg";

/***/ }),

/***/ "./src/img/logo-img.png":
/*!******************************!*\
  !*** ./src/img/logo-img.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-img.png";

/***/ }),

/***/ "./src/img/logo-opt-img.png":
/*!**********************************!*\
  !*** ./src/img/logo-opt-img.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-opt-img.png";

/***/ }),

/***/ "./src/img/logo-opt.svg":
/*!******************************!*\
  !*** ./src/img/logo-opt.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/logo-opt.svg";

/***/ }),

/***/ "./src/img/time-machine-w260.jpg":
/*!***************************************!*\
  !*** ./src/img/time-machine-w260.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/time-machine-w260.jpg";

/***/ }),

/***/ "./src/img/time-machine-w320.jpg":
/*!***************************************!*\
  !*** ./src/img/time-machine-w320.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/time-machine-w320.jpg";

/***/ }),

/***/ "./src/img/video-finder-w260.jpg":
/*!***************************************!*\
  !*** ./src/img/video-finder-w260.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/video-finder-w260.jpg";

/***/ }),

/***/ "./src/img/video-finder-w320.jpg":
/*!***************************************!*\
  !*** ./src/img/video-finder-w320.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/video-finder-w320.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
__webpack_require__(/*! picturefill */ "./node_modules/picturefill/dist/picturefill.js");
__webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");

// Load images dymamically
function importImgs(r) {
  var images = {};
  r.keys().map(function (item) {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
importImgs(__webpack_require__("./src/img sync \\.(png|jpe?g|svg)$"));

// hide hamburger menu when one of its elements is clicked
var change = new Event('change');
var navLinks = document.querySelectorAll('.nav-item');
Array.from(navLinks).forEach(function (navlink) {
  navlink.addEventListener('click', function () {
    var boxChecked = document.getElementById("nav-toggle").checked;
    toggle(boxChecked);
  });
});

function toggle(checked) {
  if (checked) {
    var checkBox = document.getElementById("nav-toggle");
    checkBox.dispatchEvent(change);
    document.getElementById("nav-toggle").checked = false;
  }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzPzY2ZDUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BpY3R1cmVmaWxsL2Rpc3QvcGljdHVyZWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plbnNjcm9sbC96ZW5zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzI2MC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXczMjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvV2lraXBlZGlhLVZpZXdlci13MjYwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL1dpa2lwZWRpYS1WaWV3ZXItdzMyMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9iYWNrLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Zhcm0tbGlmZS13MjYwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Zhcm0tbGlmZS13MzIwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Zlc3Qtc2Vla2VyLTI2MC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9mZXN0LXNlZWtlci0zMjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvZ2xvYi10YXN0ZS13MjYwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2dsb2ItdGFzdGUtdzMyMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9sb2dvLWltZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9sb2dvLW9wdC1pbWcucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvbG9nby1vcHQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGltZS1tYWNoaW5lLXcyNjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGltZS1tYWNoaW5lLXczMjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvdmlkZW8tZmluZGVyLXcyNjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvdmlkZW8tZmluZGVyLXczMjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/YzQ5MiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW1wb3J0SW1ncyIsInIiLCJpbWFnZXMiLCJrZXlzIiwibWFwIiwiaXRlbSIsInJlcGxhY2UiLCJjaGFuZ2UiLCJFdmVudCIsIm5hdkxpbmtzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsIm5hdmxpbmsiLCJhZGRFdmVudExpc3RlbmVyIiwiYm94Q2hlY2tlZCIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tlZCIsInRvZ2dsZSIsImNoZWNrQm94IiwiZGlzcGF0Y2hFdmVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHVDOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU8sa0JBQWtCLGNBQWMsVUFBVSxZQUFZLGNBQWMsVUFBVSxnQkFBZ0I7QUFDekksdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFDQUFxQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBLGVBQWUsd0JBQXdCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWUsT0FBTzs7QUFFOUM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWUsT0FBTzs7QUFFOUM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlLE9BQU87O0FBRTlDO0FBQ0EsS0FBSyxPQUFPO0FBQ1osSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixZQUFZO0FBQ1osWUFBWTtBQUNaLHlCQUF5QjtBQUN6Qiw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGVBQWU7QUFDZjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFO0FBQ2pFLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDZCQUE2QjtBQUMxQzs7QUFFQTtBQUNBOztBQUVBLDJEQUEyRDtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVILEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYywyQkFBMkI7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGlEQUFxQyxvQkFBb0IsRUFBRTtBQUFBO0FBQzNEOztBQUVBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdmdERDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsRUFBRSxRQVlGO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixhQUFhLFNBQVM7QUFDdEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixhQUFhLFNBQVM7QUFDdEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixhQUFhLFNBQVM7QUFDdEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQSwwQkFBMEIsb0RBQW9EO0FBQzlFLDZCQUE2QjtBQUM3QixFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QixZQUFZLGdCQUFnQjtBQUM1QjtBQUNBLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0NBQWdDO0FBQ3RELHNCQUFzQixtQ0FBbUM7QUFDekQsMkJBQTJCLDRGQUE0RjtBQUN2SCw4QkFBOEI7QUFDOUIsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHVDQUF1QztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7O0FBR0E7OztBQUdBLENBQUM7Ozs7Ozs7Ozs7OztBQ3BXRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEOzs7Ozs7Ozs7OztBQ3hDQSx3Rjs7Ozs7Ozs7Ozs7QUNBQSx3Rjs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7Ozs7QUNBQSxtQkFBQUEsQ0FBUSw4Q0FBUjtBQUNBLG1CQUFBQSxDQUFRLG1FQUFSO0FBQ0EsbUJBQUFBLENBQVEsd0RBQVI7O0FBRUE7QUFDQSxTQUFTQyxVQUFULENBQW9CQyxDQUFwQixFQUF1QjtBQUNyQixNQUFJQyxTQUFTLEVBQWI7QUFDQUQsSUFBRUUsSUFBRixHQUFTQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JCSCxXQUFPRyxLQUFLQyxPQUFMLENBQWEsSUFBYixFQUFtQixFQUFuQixDQUFQLElBQWlDTCxFQUFFSSxJQUFGLENBQWpDO0FBQ0QsR0FGRDtBQUdBLFNBQU9ILE1BQVA7QUFDRDtBQUNERixXQUFXLHlEQUFYOztBQUVBO0FBQ0EsSUFBSU8sU0FBUyxJQUFJQyxLQUFKLENBQVUsUUFBVixDQUFiO0FBQ0EsSUFBSUMsV0FBV0MsU0FBU0MsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBZjtBQUNBQyxNQUFNQyxJQUFOLENBQVdKLFFBQVgsRUFBcUJLLE9BQXJCLENBQTZCLFVBQVNDLE9BQVQsRUFBa0I7QUFDN0NBLFVBQVFDLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQVc7QUFDM0MsUUFBSUMsYUFBYVAsU0FBU1EsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0MsT0FBdkQ7QUFDQUMsV0FBT0gsVUFBUDtBQUNELEdBSEQ7QUFJRCxDQUxEOztBQU9BLFNBQVNHLE1BQVQsQ0FBZ0JELE9BQWhCLEVBQXlCO0FBQ3ZCLE1BQUdBLE9BQUgsRUFBWTtBQUNWLFFBQUlFLFdBQVdYLFNBQVNRLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBZjtBQUNBRyxhQUFTQyxhQUFULENBQXVCZixNQUF2QjtBQUNBRyxhQUFTUSxjQUFULENBQXdCLFlBQXhCLEVBQXNDQyxPQUF0QyxHQUFnRCxLQUFoRDtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDN0JEOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qISBwaWN0dXJlZmlsbCAtIHYzLjAuMiAtIDIwMTYtMDItMTJcbiAqIGh0dHBzOi8vc2NvdHRqZWhsLmdpdGh1Yi5pby9waWN0dXJlZmlsbC9cbiAqIENvcHlyaWdodCAoYykgMjAxNiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRqZWhsL3BpY3R1cmVmaWxsL2Jsb2IvbWFzdGVyL0F1dGhvcnMudHh0OyBMaWNlbnNlZCBNSVRcbiAqL1xuLyohIEdlY2tvLVBpY3R1cmUgLSB2MS4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRqZWhsL3BpY3R1cmVmaWxsL3RyZWUvMy4wL3NyYy9wbHVnaW5zL2dlY2tvLXBpY3R1cmVcbiAqIEZpcmVmb3gncyBlYXJseSBwaWN0dXJlIGltcGxlbWVudGF0aW9uIChwcmlvciB0byBGRjQxKSBpcyBzdGF0aWMgYW5kIGRvZXNcbiAqIG5vdCByZWFjdCB0byB2aWV3cG9ydCBjaGFuZ2VzLiBUaGlzIHRpbnkgbW9kdWxlIGZpeGVzIHRoaXMuXG4gKi9cbihmdW5jdGlvbih3aW5kb3cpIHtcblx0Lypqc2hpbnQgZXFudWxsOnRydWUgKi9cblx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuXHRpZiAoIHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgKCgvZWNrby8pLnRlc3QodWEpICYmIHVhLm1hdGNoKC9ydlxcOihcXGQrKS8pICYmIFJlZ0V4cC4kMSA8IDQ1KSApIHtcblx0XHRhZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0aW1lcjtcblxuXHRcdFx0dmFyIGR1bW15U3JjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcblxuXHRcdFx0dmFyIGZpeFJlc3BpbWcgPSBmdW5jdGlvbihpbWcpIHtcblx0XHRcdFx0dmFyIHNvdXJjZSwgc2l6ZXM7XG5cdFx0XHRcdHZhciBwaWN0dXJlID0gaW1nLnBhcmVudE5vZGU7XG5cblx0XHRcdFx0aWYgKHBpY3R1cmUubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJQSUNUVVJFXCIpIHtcblx0XHRcdFx0XHRzb3VyY2UgPSBkdW1teVNyYy5jbG9uZU5vZGUoKTtcblxuXHRcdFx0XHRcdHBpY3R1cmUuaW5zZXJ0QmVmb3JlKHNvdXJjZSwgcGljdHVyZS5maXJzdEVsZW1lbnRDaGlsZCk7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHBpY3R1cmUucmVtb3ZlQ2hpbGQoc291cmNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIGlmICghaW1nLl9wZkxhc3RTaXplIHx8IGltZy5vZmZzZXRXaWR0aCA+IGltZy5fcGZMYXN0U2l6ZSkge1xuXHRcdFx0XHRcdGltZy5fcGZMYXN0U2l6ZSA9IGltZy5vZmZzZXRXaWR0aDtcblx0XHRcdFx0XHRzaXplcyA9IGltZy5zaXplcztcblx0XHRcdFx0XHRpbWcuc2l6ZXMgKz0gXCIsMTAwdndcIjtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aW1nLnNpemVzID0gc2l6ZXM7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHZhciBmaW5kUGljdHVyZUltZ3MgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGk7XG5cdFx0XHRcdHZhciBpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInBpY3R1cmUgPiBpbWcsIGltZ1tzcmNzZXRdW3NpemVzXVwiKTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRmaXhSZXNwaW1nKGltZ3NbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dmFyIG9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0XHRcdHRpbWVyID0gc2V0VGltZW91dChmaW5kUGljdHVyZUltZ3MsIDk5KTtcblx0XHRcdH07XG5cdFx0XHR2YXIgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYSAmJiBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpO1xuXHRcdFx0dmFyIGluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0b25SZXNpemUoKTtcblxuXHRcdFx0XHRpZiAobXEgJiYgbXEuYWRkTGlzdGVuZXIpIHtcblx0XHRcdFx0XHRtcS5hZGRMaXN0ZW5lcihvblJlc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGR1bW15U3JjLnNyY3NldCA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIjtcblxuXHRcdFx0aWYgKC9eW2N8aV18ZCQvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSB8fCBcIlwiKSkge1xuXHRcdFx0XHRpbml0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9uUmVzaXplO1xuXHRcdH0pKCkpO1xuXHR9XG59KSh3aW5kb3cpO1xuXG4vKiEgUGljdHVyZWZpbGwgLSB2My4wLjJcbiAqIGh0dHA6Ly9zY290dGplaGwuZ2l0aHViLmlvL3BpY3R1cmVmaWxsXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0amVobC9waWN0dXJlZmlsbC9ibG9iL21hc3Rlci9BdXRob3JzLnR4dDtcbiAqICBMaWNlbnNlOiBNSVRcbiAqL1xuXG4oZnVuY3Rpb24oIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCApIHtcblx0Ly8gRW5hYmxlIHN0cmljdCBtb2RlXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdC8vIEhUTUwgc2hpbXx2IGl0IGZvciBvbGQgSUUgKElFOSB3aWxsIHN0aWxsIG5lZWQgdGhlIEhUTUwgdmlkZW8gdGFnIHdvcmthcm91bmQpXG5cdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwicGljdHVyZVwiICk7XG5cblx0dmFyIHdhcm4sIGVtaW5weCwgYWx3YXlzQ2hlY2tXRGVzY3JpcHRvciwgZXZhbElkO1xuXHQvLyBsb2NhbCBvYmplY3QgZm9yIG1ldGhvZCByZWZlcmVuY2VzIGFuZCB0ZXN0aW5nIGV4cG9zdXJlXG5cdHZhciBwZiA9IHt9O1xuXHR2YXIgaXNTdXBwb3J0VGVzdFJlYWR5ID0gZmFsc2U7XG5cdHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblx0dmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbWdcIiApO1xuXHR2YXIgZ2V0SW1nQXR0ciA9IGltYWdlLmdldEF0dHJpYnV0ZTtcblx0dmFyIHNldEltZ0F0dHIgPSBpbWFnZS5zZXRBdHRyaWJ1dGU7XG5cdHZhciByZW1vdmVJbWdBdHRyID0gaW1hZ2UucmVtb3ZlQXR0cmlidXRlO1xuXHR2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0dmFyIHR5cGVzID0ge307XG5cdHZhciBjZmcgPSB7XG5cdFx0Ly9yZXNvdXJjZSBzZWxlY3Rpb246XG5cdFx0YWxnb3JpdGhtOiBcIlwiXG5cdH07XG5cdHZhciBzcmNBdHRyID0gXCJkYXRhLXBmc3JjXCI7XG5cdHZhciBzcmNzZXRBdHRyID0gc3JjQXR0ciArIFwic2V0XCI7XG5cdC8vIHVhIHNuaWZmaW5nIGlzIGRvbmUgZm9yIHVuZGV0ZWN0YWJsZSBpbWcgbG9hZGluZyBmZWF0dXJlcyxcblx0Ly8gdG8gZG8gc29tZSBub24gY3J1Y2lhbCBwZXJmIG9wdGltaXphdGlvbnNcblx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0dmFyIHN1cHBvcnRBYm9ydCA9ICgvcmlkZW50LykudGVzdCh1YSkgfHwgKCgvZWNrby8pLnRlc3QodWEpICYmIHVhLm1hdGNoKC9ydlxcOihcXGQrKS8pICYmIFJlZ0V4cC4kMSA+IDM1ICk7XG5cdHZhciBjdXJTcmNQcm9wID0gXCJjdXJyZW50U3JjXCI7XG5cdHZhciByZWdXRGVzYyA9IC9cXHMrXFwrP1xcZCsoZVxcZCspP3cvO1xuXHR2YXIgcmVnU2l6ZSA9IC8oXFwoW14pXStcXCkpP1xccyooLispLztcblx0dmFyIHNldE9wdGlvbnMgPSB3aW5kb3cucGljdHVyZWZpbGxDRkc7XG5cdC8qKlxuXHQgKiBTaG9ydGN1dCBwcm9wZXJ0eSBmb3IgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmFwcHNlYy9zcGVjcy9taXhlZGNvbnRlbnQvI3Jlc3RyaWN0cy1taXhlZC1jb250ZW50ICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqL1xuXHQvLyBiYXNlU3R5bGUgYWxzbyB1c2VkIGJ5IGdldEVtVmFsdWUgKGkuZS46IHdpZHRoOiAxZW0gaXMgaW1wb3J0YW50KVxuXHR2YXIgYmFzZVN0eWxlID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dmlzaWJpbGl0eTpoaWRkZW47ZGlzcGxheTpibG9jaztwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7Zm9udC1zaXplOjFlbTt3aWR0aDoxZW07b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwcHgsIDBweCwgMHB4LCAwcHgpXCI7XG5cdHZhciBmc0NzcyA9IFwiZm9udC1zaXplOjEwMCUhaW1wb3J0YW50O1wiO1xuXHR2YXIgaXNWd0RpcnR5ID0gdHJ1ZTtcblxuXHR2YXIgY3NzQ2FjaGUgPSB7fTtcblx0dmFyIHNpemVMZW5ndGhDYWNoZSA9IHt9O1xuXHR2YXIgRFBSID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdHZhciB1bml0cyA9IHtcblx0XHRweDogMSxcblx0XHRcImluXCI6IDk2XG5cdH07XG5cdHZhciBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXHQvKipcblx0ICogYWxyZWFkeVJ1biBmbGFnIHVzZWQgZm9yIHNldE9wdGlvbnMuIGlzIGl0IHRydWUgc2V0T3B0aW9ucyB3aWxsIHJlZXZhbHVhdGVcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHR2YXIgYWxyZWFkeVJ1biA9IGZhbHNlO1xuXG5cdC8vIFJldXNhYmxlLCBub24tXCJnXCIgUmVnZXhlc1xuXG5cdC8vIChEb24ndCB1c2UgXFxzLCB0byBhdm9pZCBtYXRjaGluZyBub24tYnJlYWtpbmcgc3BhY2UuKVxuXHR2YXIgcmVnZXhMZWFkaW5nU3BhY2VzID0gL15bIFxcdFxcblxcclxcdTAwMGNdKy8sXG5cdCAgICByZWdleExlYWRpbmdDb21tYXNPclNwYWNlcyA9IC9eWywgXFx0XFxuXFxyXFx1MDAwY10rLyxcblx0ICAgIHJlZ2V4TGVhZGluZ05vdFNwYWNlcyA9IC9eW14gXFx0XFxuXFxyXFx1MDAwY10rLyxcblx0ICAgIHJlZ2V4VHJhaWxpbmdDb21tYXMgPSAvWyxdKyQvLFxuXHQgICAgcmVnZXhOb25OZWdhdGl2ZUludGVnZXIgPSAvXlxcZCskLyxcblxuXHQgICAgLy8gKCBQb3NpdGl2ZSBvciBuZWdhdGl2ZSBvciB1bnNpZ25lZCBpbnRlZ2VycyBvciBkZWNpbWFscywgd2l0aG91dCBvciB3aXRob3V0IGV4cG9uZW50cy5cblx0ICAgIC8vIE11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgZGlnaXQuXG5cdCAgICAvLyBBY2NvcmRpbmcgdG8gc3BlYyB0ZXN0cyBhbnkgZGVjaW1hbCBwb2ludCBtdXN0IGJlIGZvbGxvd2VkIGJ5IGEgZGlnaXQuXG5cdCAgICAvLyBObyBsZWFkaW5nIHBsdXMgc2lnbiBpcyBhbGxvd2VkLilcblx0ICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZnJhc3RydWN0dXJlLmh0bWwjdmFsaWQtZmxvYXRpbmctcG9pbnQtbnVtYmVyXG5cdCAgICByZWdleEZsb2F0aW5nUG9pbnQgPSAvXi0/KD86WzAtOV0rfFswLTldKlxcLlswLTldKykoPzpbZUVdWystXT9bMC05XSspPyQvO1xuXG5cdHZhciBvbiA9IGZ1bmN0aW9uKG9iaiwgZXZ0LCBmbiwgY2FwdHVyZSkge1xuXHRcdGlmICggb2JqLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRvYmouYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZuLCBjYXB0dXJlIHx8IGZhbHNlKTtcblx0XHR9IGVsc2UgaWYgKCBvYmouYXR0YWNoRXZlbnQgKSB7XG5cdFx0XHRvYmouYXR0YWNoRXZlbnQoIFwib25cIiArIGV2dCwgZm4pO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogc2ltcGxlIG1lbW9pemUgZnVuY3Rpb246XG5cdCAqL1xuXG5cdHZhciBtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgY2FjaGUgPSB7fTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcblx0XHRcdGlmICggIShpbnB1dCBpbiBjYWNoZSkgKSB7XG5cdFx0XHRcdGNhY2hlWyBpbnB1dCBdID0gZm4oaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNhY2hlWyBpbnB1dCBdO1xuXHRcdH07XG5cdH07XG5cblx0Ly8gVVRJTElUWSBGVU5DVElPTlNcblxuXHQvLyBNYW51YWwgaXMgZmFzdGVyIHRoYW4gUmVnRXhcblx0Ly8gaHR0cDovL2pzcGVyZi5jb20vd2hpdGVzcGFjZS1jaGFyYWN0ZXIvNVxuXHRmdW5jdGlvbiBpc1NwYWNlKGMpIHtcblx0XHRyZXR1cm4gKGMgPT09IFwiXFx1MDAyMFwiIHx8IC8vIHNwYWNlXG5cdFx0ICAgICAgICBjID09PSBcIlxcdTAwMDlcIiB8fCAvLyBob3Jpem9udGFsIHRhYlxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDBBXCIgfHwgLy8gbmV3IGxpbmVcblx0XHQgICAgICAgIGMgPT09IFwiXFx1MDAwQ1wiIHx8IC8vIGZvcm0gZmVlZFxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDBEXCIpOyAgLy8gY2FycmlhZ2UgcmV0dXJuXG5cdH1cblxuXHQvKipcblx0ICogZ2V0cyBhIG1lZGlhcXVlcnkgYW5kIHJldHVybnMgYSBib29sZWFuIG9yIGdldHMgYSBjc3MgbGVuZ3RoIGFuZCByZXR1cm5zIGEgbnVtYmVyXG5cdCAqIEBwYXJhbSBjc3MgbWVkaWFxdWVyaWVzIG9yIGNzcyBsZW5ndGhcblx0ICogQHJldHVybnMge2Jvb2xlYW58bnVtYmVyfVxuXHQgKlxuXHQgKiBiYXNlZCBvbjogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9kYjRmNzcwMDliMTU1ZjA4MzczOFxuXHQgKi9cblx0dmFyIGV2YWxDU1MgPSAoZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgcmVnTGVuZ3RoID0gL14oW1xcZFxcLl0rKShlbXx2d3xweCkkLztcblx0XHR2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMsIGluZGV4ID0gMCwgc3RyaW5nID0gYXJnc1swXTtcblx0XHRcdHdoaWxlICgrK2luZGV4IGluIGFyZ3MpIHtcblx0XHRcdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoYXJnc1tpbmRleF0sIGFyZ3NbKytpbmRleF0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cmluZztcblx0XHR9O1xuXG5cdFx0dmFyIGJ1aWxkU3RyID0gbWVtb2l6ZShmdW5jdGlvbihjc3MpIHtcblxuXHRcdFx0cmV0dXJuIFwicmV0dXJuIFwiICsgcmVwbGFjZSgoY3NzIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdC8vIGludGVycHJldCBgYW5kYFxuXHRcdFx0XHQvXFxiYW5kXFxiL2csIFwiJiZcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYCxgXG5cdFx0XHRcdC8sL2csIFwifHxcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYG1pbi1gIGFzID49XG5cdFx0XHRcdC9taW4tKFthLXotXFxzXSspOi9nLCBcImUuJDE+PVwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBgbWF4LWAgYXMgPD1cblx0XHRcdFx0L21heC0oW2Etei1cXHNdKyk6L2csIFwiZS4kMTw9XCIsXG5cblx0XHRcdFx0Ly9jYWxjIHZhbHVlXG5cdFx0XHRcdC9jYWxjKFteKV0rKS9nLCBcIigkMSlcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgY3NzIHZhbHVlc1xuXHRcdFx0XHQvKFxcZCtbXFwuXSpbXFxkXSopKFthLXpdKykvZywgXCIoJDEgKiBlLiQyKVwiLFxuXHRcdFx0XHQvL21ha2UgZXZhbCBsZXNzIGV2aWxcblx0XHRcdFx0L14oPyEoZS5bYS16XXxbMC05XFwuJj18PjxcXCtcXC1cXCpcXChcXClcXC9dKSkuKi9pZywgXCJcIlxuXHRcdFx0KSArIFwiO1wiO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGNzcywgbGVuZ3RoKSB7XG5cdFx0XHR2YXIgcGFyc2VkTGVuZ3RoO1xuXHRcdFx0aWYgKCEoY3NzIGluIGNzc0NhY2hlKSkge1xuXHRcdFx0XHRjc3NDYWNoZVtjc3NdID0gZmFsc2U7XG5cdFx0XHRcdGlmIChsZW5ndGggJiYgKHBhcnNlZExlbmd0aCA9IGNzcy5tYXRjaCggcmVnTGVuZ3RoICkpKSB7XG5cdFx0XHRcdFx0Y3NzQ2FjaGVbY3NzXSA9IHBhcnNlZExlbmd0aFsgMSBdICogdW5pdHNbcGFyc2VkTGVuZ3RoWyAyIF1dO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8qanNoaW50IGV2aWw6dHJ1ZSAqL1xuXHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdGNzc0NhY2hlW2Nzc10gPSBuZXcgRnVuY3Rpb24oXCJlXCIsIGJ1aWxkU3RyKGNzcykpKHVuaXRzKTtcblx0XHRcdFx0XHR9IGNhdGNoKGUpIHt9XG5cdFx0XHRcdFx0Lypqc2hpbnQgZXZpbDpmYWxzZSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY3NzQ2FjaGVbY3NzXTtcblx0XHR9O1xuXHR9KSgpO1xuXG5cdHZhciBzZXRSZXNvbHV0aW9uID0gZnVuY3Rpb24oIGNhbmRpZGF0ZSwgc2l6ZXNhdHRyICkge1xuXHRcdGlmICggY2FuZGlkYXRlLncgKSB7IC8vIGggPSBtZWFucyBoZWlnaHQ6IHx8IGRlc2NyaXB0b3IudHlwZSA9PT0gJ2gnIGRvIG5vdCBoYW5kbGUgeWV0Li4uXG5cdFx0XHRjYW5kaWRhdGUuY1dpZHRoID0gcGYuY2FsY0xpc3RMZW5ndGgoIHNpemVzYXR0ciB8fCBcIjEwMHZ3XCIgKTtcblx0XHRcdGNhbmRpZGF0ZS5yZXMgPSBjYW5kaWRhdGUudyAvIGNhbmRpZGF0ZS5jV2lkdGggO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYW5kaWRhdGUucmVzID0gY2FuZGlkYXRlLmQ7XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH07XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSBvcHRcblx0ICovXG5cdHZhciBwaWN0dXJlZmlsbCA9IGZ1bmN0aW9uKCBvcHQgKSB7XG5cblx0XHRpZiAoIWlzU3VwcG9ydFRlc3RSZWFkeSkge3JldHVybjt9XG5cblx0XHR2YXIgZWxlbWVudHMsIGksIHBsZW47XG5cblx0XHR2YXIgb3B0aW9ucyA9IG9wdCB8fCB7fTtcblxuXHRcdGlmICggb3B0aW9ucy5lbGVtZW50cyAmJiBvcHRpb25zLmVsZW1lbnRzLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0aWYgKCBvcHRpb25zLmVsZW1lbnRzLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiSU1HXCIgKSB7XG5cdFx0XHRcdG9wdGlvbnMuZWxlbWVudHMgPSAgWyBvcHRpb25zLmVsZW1lbnRzIF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHRpb25zLmNvbnRleHQgPSBvcHRpb25zLmVsZW1lbnRzO1xuXHRcdFx0XHRvcHRpb25zLmVsZW1lbnRzID0gIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZWxlbWVudHMgPSBvcHRpb25zLmVsZW1lbnRzIHx8IHBmLnFzYSggKG9wdGlvbnMuY29udGV4dCB8fCBkb2N1bWVudCksICggb3B0aW9ucy5yZWV2YWx1YXRlIHx8IG9wdGlvbnMucmVzZWxlY3QgKSA/IHBmLnNlbCA6IHBmLnNlbFNob3J0ICk7XG5cblx0XHRpZiAoIChwbGVuID0gZWxlbWVudHMubGVuZ3RoKSApIHtcblxuXHRcdFx0cGYuc2V0dXBSdW4oIG9wdGlvbnMgKTtcblx0XHRcdGFscmVhZHlSdW4gPSB0cnVlO1xuXG5cdFx0XHQvLyBMb29wIHRocm91Z2ggYWxsIGVsZW1lbnRzXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IHBsZW47IGkrKyApIHtcblx0XHRcdFx0cGYuZmlsbEltZyhlbGVtZW50c1sgaSBdLCBvcHRpb25zKTtcblx0XHRcdH1cblxuXHRcdFx0cGYudGVhcmRvd25SdW4oIG9wdGlvbnMgKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIG91dHB1dHMgYSB3YXJuaW5nIGZvciB0aGUgZGV2ZWxvcGVyXG5cdCAqIEBwYXJhbSB7bWVzc2FnZX1cblx0ICogQHR5cGUge0Z1bmN0aW9ufVxuXHQgKi9cblx0d2FybiA9ICggd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuICkgP1xuXHRcdGZ1bmN0aW9uKCBtZXNzYWdlICkge1xuXHRcdFx0Y29uc29sZS53YXJuKCBtZXNzYWdlICk7XG5cdFx0fSA6XG5cdFx0bm9vcFxuXHQ7XG5cblx0aWYgKCAhKGN1clNyY1Byb3AgaW4gaW1hZ2UpICkge1xuXHRcdGN1clNyY1Byb3AgPSBcInNyY1wiO1xuXHR9XG5cblx0Ly8gQWRkIHN1cHBvcnQgZm9yIHN0YW5kYXJkIG1pbWUgdHlwZXMuXG5cdHR5cGVzWyBcImltYWdlL2pwZWdcIiBdID0gdHJ1ZTtcblx0dHlwZXNbIFwiaW1hZ2UvZ2lmXCIgXSA9IHRydWU7XG5cdHR5cGVzWyBcImltYWdlL3BuZ1wiIF0gPSB0cnVlO1xuXG5cdGZ1bmN0aW9uIGRldGVjdFR5cGVTdXBwb3J0KCB0eXBlLCB0eXBlVXJpICkge1xuXHRcdC8vIGJhc2VkIG9uIE1vZGVybml6cidzIGxvc3NsZXNzIGltZy13ZWJwIHRlc3Rcblx0XHQvLyBub3RlOiBhc3luY2hyb25vdXNcblx0XHR2YXIgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG5cdFx0aW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHlwZXNbIHR5cGUgXSA9IGZhbHNlO1xuXHRcdFx0cGljdHVyZWZpbGwoKTtcblx0XHR9O1xuXHRcdGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHlwZXNbIHR5cGUgXSA9IGltYWdlLndpZHRoID09PSAxO1xuXHRcdFx0cGljdHVyZWZpbGwoKTtcblx0XHR9O1xuXHRcdGltYWdlLnNyYyA9IHR5cGVVcmk7XG5cdFx0cmV0dXJuIFwicGVuZGluZ1wiO1xuXHR9XG5cblx0Ly8gdGVzdCBzdmcgc3VwcG9ydFxuXHR0eXBlc1sgXCJpbWFnZS9zdmcreG1sXCIgXSA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoIFwiaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNJbWFnZVwiLCBcIjEuMVwiICk7XG5cblx0LyoqXG5cdCAqIHVwZGF0ZXMgdGhlIGludGVybmFsIHZXIHByb3BlcnR5IHdpdGggdGhlIGN1cnJlbnQgdmlld3BvcnQgd2lkdGggaW4gcHhcblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZU1ldHJpY3MoKSB7XG5cblx0XHRpc1Z3RGlydHkgPSBmYWxzZTtcblx0XHREUFIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblx0XHRjc3NDYWNoZSA9IHt9O1xuXHRcdHNpemVMZW5ndGhDYWNoZSA9IHt9O1xuXG5cdFx0cGYuRFBSID0gRFBSIHx8IDE7XG5cblx0XHR1bml0cy53aWR0aCA9IE1hdGgubWF4KHdpbmRvdy5pbm5lcldpZHRoIHx8IDAsIGRvY0VsZW0uY2xpZW50V2lkdGgpO1xuXHRcdHVuaXRzLmhlaWdodCA9IE1hdGgubWF4KHdpbmRvdy5pbm5lckhlaWdodCB8fCAwLCBkb2NFbGVtLmNsaWVudEhlaWdodCk7XG5cblx0XHR1bml0cy52dyA9IHVuaXRzLndpZHRoIC8gMTAwO1xuXHRcdHVuaXRzLnZoID0gdW5pdHMuaGVpZ2h0IC8gMTAwO1xuXG5cdFx0ZXZhbElkID0gWyB1bml0cy5oZWlnaHQsIHVuaXRzLndpZHRoLCBEUFIgXS5qb2luKFwiLVwiKTtcblxuXHRcdHVuaXRzLmVtID0gcGYuZ2V0RW1WYWx1ZSgpO1xuXHRcdHVuaXRzLnJlbSA9IHVuaXRzLmVtO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hvb3NlTG93UmVzKCBsb3dlclZhbHVlLCBoaWdoZXJWYWx1ZSwgZHByVmFsdWUsIGlzQ2FjaGVkICkge1xuXHRcdHZhciBib251c0ZhY3RvciwgdG9vTXVjaCwgYm9udXMsIG1lYW5EZW5zaXR5O1xuXG5cdFx0Ly9leHBlcmltZW50YWxcblx0XHRpZiAoY2ZnLmFsZ29yaXRobSA9PT0gXCJzYXZlRGF0YVwiICl7XG5cdFx0XHRpZiAoIGxvd2VyVmFsdWUgPiAyLjcgKSB7XG5cdFx0XHRcdG1lYW5EZW5zaXR5ID0gZHByVmFsdWUgKyAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9vTXVjaCA9IGhpZ2hlclZhbHVlIC0gZHByVmFsdWU7XG5cdFx0XHRcdGJvbnVzRmFjdG9yID0gTWF0aC5wb3cobG93ZXJWYWx1ZSAtIDAuNiwgMS41KTtcblxuXHRcdFx0XHRib251cyA9IHRvb011Y2ggKiBib251c0ZhY3RvcjtcblxuXHRcdFx0XHRpZiAoaXNDYWNoZWQpIHtcblx0XHRcdFx0XHRib251cyArPSAwLjEgKiBib251c0ZhY3Rvcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1lYW5EZW5zaXR5ID0gbG93ZXJWYWx1ZSArIGJvbnVzO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZWFuRGVuc2l0eSA9IChkcHJWYWx1ZSA+IDEpID9cblx0XHRcdFx0TWF0aC5zcXJ0KGxvd2VyVmFsdWUgKiBoaWdoZXJWYWx1ZSkgOlxuXHRcdFx0XHRsb3dlclZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZWFuRGVuc2l0eSA+IGRwclZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXBwbHlCZXN0Q2FuZGlkYXRlKCBpbWcgKSB7XG5cdFx0dmFyIHNyY1NldENhbmRpZGF0ZXM7XG5cdFx0dmFyIG1hdGNoaW5nU2V0ID0gcGYuZ2V0U2V0KCBpbWcgKTtcblx0XHR2YXIgZXZhbHVhdGVkID0gZmFsc2U7XG5cdFx0aWYgKCBtYXRjaGluZ1NldCAhPT0gXCJwZW5kaW5nXCIgKSB7XG5cdFx0XHRldmFsdWF0ZWQgPSBldmFsSWQ7XG5cdFx0XHRpZiAoIG1hdGNoaW5nU2V0ICkge1xuXHRcdFx0XHRzcmNTZXRDYW5kaWRhdGVzID0gcGYuc2V0UmVzKCBtYXRjaGluZ1NldCApO1xuXHRcdFx0XHRwZi5hcHBseVNldENhbmRpZGF0ZSggc3JjU2V0Q2FuZGlkYXRlcywgaW1nICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGltZ1sgcGYubnMgXS5ldmFsZWQgPSBldmFsdWF0ZWQ7XG5cdH1cblxuXHRmdW5jdGlvbiBhc2NlbmRpbmdTb3J0KCBhLCBiICkge1xuXHRcdHJldHVybiBhLnJlcyAtIGIucmVzO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0U3JjVG9DdXIoIGltZywgc3JjLCBzZXQgKSB7XG5cdFx0dmFyIGNhbmRpZGF0ZTtcblx0XHRpZiAoICFzZXQgJiYgc3JjICkge1xuXHRcdFx0c2V0ID0gaW1nWyBwZi5ucyBdLnNldHM7XG5cdFx0XHRzZXQgPSBzZXQgJiYgc2V0W3NldC5sZW5ndGggLSAxXTtcblx0XHR9XG5cblx0XHRjYW5kaWRhdGUgPSBnZXRDYW5kaWRhdGVGb3JTcmMoc3JjLCBzZXQpO1xuXG5cdFx0aWYgKCBjYW5kaWRhdGUgKSB7XG5cdFx0XHRzcmMgPSBwZi5tYWtlVXJsKHNyYyk7XG5cdFx0XHRpbWdbIHBmLm5zIF0uY3VyU3JjID0gc3JjO1xuXHRcdFx0aW1nWyBwZi5ucyBdLmN1ckNhbiA9IGNhbmRpZGF0ZTtcblxuXHRcdFx0aWYgKCAhY2FuZGlkYXRlLnJlcyApIHtcblx0XHRcdFx0c2V0UmVzb2x1dGlvbiggY2FuZGlkYXRlLCBjYW5kaWRhdGUuc2V0LnNpemVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDYW5kaWRhdGVGb3JTcmMoIHNyYywgc2V0ICkge1xuXHRcdHZhciBpLCBjYW5kaWRhdGUsIGNhbmRpZGF0ZXM7XG5cdFx0aWYgKCBzcmMgJiYgc2V0ICkge1xuXHRcdFx0Y2FuZGlkYXRlcyA9IHBmLnBhcnNlU2V0KCBzZXQgKTtcblx0XHRcdHNyYyA9IHBmLm1ha2VVcmwoc3JjKTtcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBzcmMgPT09IHBmLm1ha2VVcmwoY2FuZGlkYXRlc1sgaSBdLnVybCkgKSB7XG5cdFx0XHRcdFx0Y2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgaSBdO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRBbGxTb3VyY2VFbGVtZW50cyggcGljdHVyZSwgY2FuZGlkYXRlcyApIHtcblx0XHR2YXIgaSwgbGVuLCBzb3VyY2UsIHNyY3NldDtcblxuXHRcdC8vIFNQRUMgbWlzbWF0Y2ggaW50ZW5kZWQgZm9yIHNpemUgYW5kIHBlcmY6XG5cdFx0Ly8gYWN0dWFsbHkgb25seSBzb3VyY2UgZWxlbWVudHMgcHJlY2VkaW5nIHRoZSBpbWcgc2hvdWxkIGJlIHVzZWRcblx0XHQvLyBhbHNvIG5vdGU6IGRvbid0IHVzZSBxc2EgaGVyZSwgYmVjYXVzZSBJRTggc29tZXRpbWVzIGRvZXNuJ3QgbGlrZSBzb3VyY2UgYXMgdGhlIGtleSBwYXJ0IGluIGEgc2VsZWN0b3Jcblx0XHR2YXIgc291cmNlcyA9IHBpY3R1cmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwic291cmNlXCIgKTtcblxuXHRcdGZvciAoIGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0c291cmNlID0gc291cmNlc1sgaSBdO1xuXHRcdFx0c291cmNlWyBwZi5ucyBdID0gdHJ1ZTtcblx0XHRcdHNyY3NldCA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwic3Jjc2V0XCIgKTtcblxuXHRcdFx0Ly8gaWYgc291cmNlIGRvZXMgbm90IGhhdmUgYSBzcmNzZXQgYXR0cmlidXRlLCBza2lwXG5cdFx0XHRpZiAoIHNyY3NldCApIHtcblx0XHRcdFx0Y2FuZGlkYXRlcy5wdXNoKCB7XG5cdFx0XHRcdFx0c3Jjc2V0OiBzcmNzZXQsXG5cdFx0XHRcdFx0bWVkaWE6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwibWVkaWFcIiApLFxuXHRcdFx0XHRcdHR5cGU6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICksXG5cdFx0XHRcdFx0c2l6ZXM6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwic2l6ZXNcIiApXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU3Jjc2V0IFBhcnNlclxuXHQgKiBCeSBBbGV4IEJlbGwgfCAgTUlUIExpY2Vuc2Vcblx0ICpcblx0ICogQHJldHVybnMgQXJyYXkgW3t1cmw6IF8sIGQ6IF8sIHc6IF8sIGg6Xywgc2V0Ol8oPz8/Pyl9LCAuLi5dXG5cdCAqXG5cdCAqIEJhc2VkIHN1cGVyIGR1cGVyIGNsb3NlbHkgb24gdGhlIHJlZmVyZW5jZSBhbGdvcml0aG0gYXQ6XG5cdCAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCNwYXJzZS1hLXNyY3NldC1hdHRyaWJ1dGVcblx0ICovXG5cblx0Ly8gMS4gTGV0IGlucHV0IGJlIHRoZSB2YWx1ZSBwYXNzZWQgdG8gdGhpcyBhbGdvcml0aG0uXG5cdC8vIChUTy1ETyA6IEV4cGxhaW4gd2hhdCBcInNldFwiIGFyZ3VtZW50IGlzIGhlcmUuIE1heWJlIGNob29zZSBhIG1vcmVcblx0Ly8gZGVzY3JpcHRpdmUgJiBtb3JlIHNlYXJjaGFibGUgbmFtZS4gIFNpbmNlIHBhc3NpbmcgdGhlIFwic2V0XCIgaW4gcmVhbGx5IGhhc1xuXHQvLyBub3RoaW5nIHRvIGRvIHdpdGggcGFyc2luZyBwcm9wZXIsIEkgd291bGQgcHJlZmVyIHRoaXMgYXNzaWdubWVudCBldmVudHVhbGx5XG5cdC8vIGdvIGluIGFuIGV4dGVybmFsIGZuLilcblx0ZnVuY3Rpb24gcGFyc2VTcmNzZXQoaW5wdXQsIHNldCkge1xuXG5cdFx0ZnVuY3Rpb24gY29sbGVjdENoYXJhY3RlcnMocmVnRXgpIHtcblx0XHRcdHZhciBjaGFycyxcblx0XHRcdCAgICBtYXRjaCA9IHJlZ0V4LmV4ZWMoaW5wdXQuc3Vic3RyaW5nKHBvcykpO1xuXHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdGNoYXJzID0gbWF0Y2hbIDAgXTtcblx0XHRcdFx0cG9zICs9IGNoYXJzLmxlbmd0aDtcblx0XHRcdFx0cmV0dXJuIGNoYXJzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aCxcblx0XHQgICAgdXJsLFxuXHRcdCAgICBkZXNjcmlwdG9ycyxcblx0XHQgICAgY3VycmVudERlc2NyaXB0b3IsXG5cdFx0ICAgIHN0YXRlLFxuXHRcdCAgICBjLFxuXG5cdFx0ICAgIC8vIDIuIExldCBwb3NpdGlvbiBiZSBhIHBvaW50ZXIgaW50byBpbnB1dCwgaW5pdGlhbGx5IHBvaW50aW5nIGF0IHRoZSBzdGFydFxuXHRcdCAgICAvLyAgICBvZiB0aGUgc3RyaW5nLlxuXHRcdCAgICBwb3MgPSAwLFxuXG5cdFx0ICAgIC8vIDMuIExldCBjYW5kaWRhdGVzIGJlIGFuIGluaXRpYWxseSBlbXB0eSBzb3VyY2Ugc2V0LlxuXHRcdCAgICBjYW5kaWRhdGVzID0gW107XG5cblx0XHQvKipcblx0XHQqIEFkZHMgZGVzY3JpcHRvciBwcm9wZXJ0aWVzIHRvIGEgY2FuZGlkYXRlLCBwdXNoZXMgdG8gdGhlIGNhbmRpZGF0ZXMgYXJyYXlcblx0XHQqIEByZXR1cm4gdW5kZWZpbmVkXG5cdFx0Ki9cblx0XHQvLyAoRGVjbGFyZWQgb3V0c2lkZSBvZiB0aGUgd2hpbGUgbG9vcCBzbyB0aGF0IGl0J3Mgb25seSBjcmVhdGVkIG9uY2UuXG5cdFx0Ly8gKFRoaXMgZm4gaXMgZGVmaW5lZCBiZWZvcmUgaXQgaXMgdXNlZCwgaW4gb3JkZXIgdG8gcGFzcyBKU0hJTlQuXG5cdFx0Ly8gVW5mb3J0dW5hdGVseSB0aGlzIGJyZWFrcyB0aGUgc2VxdWVuY2luZyBvZiB0aGUgc3BlYyBjb21tZW50cy4gOi8gKVxuXHRcdGZ1bmN0aW9uIHBhcnNlRGVzY3JpcHRvcnMoKSB7XG5cblx0XHRcdC8vIDkuIERlc2NyaXB0b3IgcGFyc2VyOiBMZXQgZXJyb3IgYmUgbm8uXG5cdFx0XHR2YXIgcEVycm9yID0gZmFsc2UsXG5cblx0XHRcdC8vIDEwLiBMZXQgd2lkdGggYmUgYWJzZW50LlxuXHRcdFx0Ly8gMTEuIExldCBkZW5zaXR5IGJlIGFic2VudC5cblx0XHRcdC8vIDEyLiBMZXQgZnV0dXJlLWNvbXBhdC1oIGJlIGFic2VudC4gKFdlJ3JlIGltcGxlbWVudGluZyBpdCBub3cgYXMgaClcblx0XHRcdCAgICB3LCBkLCBoLCBpLFxuXHRcdFx0ICAgIGNhbmRpZGF0ZSA9IHt9LFxuXHRcdFx0ICAgIGRlc2MsIGxhc3RDaGFyLCB2YWx1ZSwgaW50VmFsLCBmbG9hdFZhbDtcblxuXHRcdFx0Ly8gMTMuIEZvciBlYWNoIGRlc2NyaXB0b3IgaW4gZGVzY3JpcHRvcnMsIHJ1biB0aGUgYXBwcm9wcmlhdGUgc2V0IG9mIHN0ZXBzXG5cdFx0XHQvLyBmcm9tIHRoZSBmb2xsb3dpbmcgbGlzdDpcblx0XHRcdGZvciAoaSA9IDAgOyBpIDwgZGVzY3JpcHRvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZGVzYyA9IGRlc2NyaXB0b3JzWyBpIF07XG5cblx0XHRcdFx0bGFzdENoYXIgPSBkZXNjWyBkZXNjLmxlbmd0aCAtIDEgXTtcblx0XHRcdFx0dmFsdWUgPSBkZXNjLnN1YnN0cmluZygwLCBkZXNjLmxlbmd0aCAtIDEpO1xuXHRcdFx0XHRpbnRWYWwgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuXHRcdFx0XHRmbG9hdFZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG5cdFx0XHRcdC8vIElmIHRoZSBkZXNjcmlwdG9yIGNvbnNpc3RzIG9mIGEgdmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXIgZm9sbG93ZWQgYnlcblx0XHRcdFx0Ly8gYSBVKzAwNzcgTEFUSU4gU01BTEwgTEVUVEVSIFcgY2hhcmFjdGVyXG5cdFx0XHRcdGlmIChyZWdleE5vbk5lZ2F0aXZlSW50ZWdlci50ZXN0KHZhbHVlKSAmJiAobGFzdENoYXIgPT09IFwid1wiKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2lkdGggYW5kIGRlbnNpdHkgYXJlIG5vdCBib3RoIGFic2VudCwgdGhlbiBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdGlmICh3IHx8IGQpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBub24tbmVnYXRpdmUgaW50ZWdlcnMgdG8gdGhlIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyB6ZXJvLCBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgbGV0IHdpZHRoIGJlIHRoZSByZXN1bHQuXG5cdFx0XHRcdFx0aWYgKGludFZhbCA9PT0gMCkge3BFcnJvciA9IHRydWU7fSBlbHNlIHt3ID0gaW50VmFsO31cblxuXHRcdFx0XHQvLyBJZiB0aGUgZGVzY3JpcHRvciBjb25zaXN0cyBvZiBhIHZhbGlkIGZsb2F0aW5nLXBvaW50IG51bWJlciBmb2xsb3dlZCBieVxuXHRcdFx0XHQvLyBhIFUrMDA3OCBMQVRJTiBTTUFMTCBMRVRURVIgWCBjaGFyYWN0ZXJcblx0XHRcdFx0fSBlbHNlIGlmIChyZWdleEZsb2F0aW5nUG9pbnQudGVzdCh2YWx1ZSkgJiYgKGxhc3RDaGFyID09PSBcInhcIikpIHtcblxuXHRcdFx0XHRcdC8vIElmIHdpZHRoLCBkZW5zaXR5IGFuZCBmdXR1cmUtY29tcGF0LWggYXJlIG5vdCBhbGwgYWJzZW50LCB0aGVuIGxldCBlcnJvclxuXHRcdFx0XHRcdC8vIGJlIHllcy5cblx0XHRcdFx0XHRpZiAodyB8fCBkIHx8IGgpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBmbG9hdGluZy1wb2ludCBudW1iZXIgdmFsdWVzIHRvIHRoZSBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdC8vIElmIHRoZSByZXN1bHQgaXMgbGVzcyB0aGFuIHplcm8sIGxldCBlcnJvciBiZSB5ZXMuIE90aGVyd2lzZSwgbGV0IGRlbnNpdHlcblx0XHRcdFx0XHQvLyBiZSB0aGUgcmVzdWx0LlxuXHRcdFx0XHRcdGlmIChmbG9hdFZhbCA8IDApIHtwRXJyb3IgPSB0cnVlO30gZWxzZSB7ZCA9IGZsb2F0VmFsO31cblxuXHRcdFx0XHQvLyBJZiB0aGUgZGVzY3JpcHRvciBjb25zaXN0cyBvZiBhIHZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIGZvbGxvd2VkIGJ5XG5cdFx0XHRcdC8vIGEgVSswMDY4IExBVElOIFNNQUxMIExFVFRFUiBIIGNoYXJhY3RlclxuXHRcdFx0XHR9IGVsc2UgaWYgKHJlZ2V4Tm9uTmVnYXRpdmVJbnRlZ2VyLnRlc3QodmFsdWUpICYmIChsYXN0Q2hhciA9PT0gXCJoXCIpKSB7XG5cblx0XHRcdFx0XHQvLyBJZiBoZWlnaHQgYW5kIGRlbnNpdHkgYXJlIG5vdCBib3RoIGFic2VudCwgdGhlbiBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdGlmIChoIHx8IGQpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBub24tbmVnYXRpdmUgaW50ZWdlcnMgdG8gdGhlIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyB6ZXJvLCBsZXQgZXJyb3IgYmUgeWVzLiBPdGhlcndpc2UsIGxldCBmdXR1cmUtY29tcGF0LWhcblx0XHRcdFx0XHQvLyBiZSB0aGUgcmVzdWx0LlxuXHRcdFx0XHRcdGlmIChpbnRWYWwgPT09IDApIHtwRXJyb3IgPSB0cnVlO30gZWxzZSB7aCA9IGludFZhbDt9XG5cblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSwgTGV0IGVycm9yIGJlIHllcy5cblx0XHRcdFx0fSBlbHNlIHtwRXJyb3IgPSB0cnVlO31cblx0XHRcdH0gLy8gKGNsb3NlIHN0ZXAgMTMgZm9yIGxvb3ApXG5cblx0XHRcdC8vIDE1LiBJZiBlcnJvciBpcyBzdGlsbCBubywgdGhlbiBhcHBlbmQgYSBuZXcgaW1hZ2Ugc291cmNlIHRvIGNhbmRpZGF0ZXMgd2hvc2Vcblx0XHRcdC8vIFVSTCBpcyB1cmwsIGFzc29jaWF0ZWQgd2l0aCBhIHdpZHRoIHdpZHRoIGlmIG5vdCBhYnNlbnQgYW5kIGEgcGl4ZWxcblx0XHRcdC8vIGRlbnNpdHkgZGVuc2l0eSBpZiBub3QgYWJzZW50LiBPdGhlcndpc2UsIHRoZXJlIGlzIGEgcGFyc2UgZXJyb3IuXG5cdFx0XHRpZiAoIXBFcnJvcikge1xuXHRcdFx0XHRjYW5kaWRhdGUudXJsID0gdXJsO1xuXG5cdFx0XHRcdGlmICh3KSB7IGNhbmRpZGF0ZS53ID0gdzt9XG5cdFx0XHRcdGlmIChkKSB7IGNhbmRpZGF0ZS5kID0gZDt9XG5cdFx0XHRcdGlmIChoKSB7IGNhbmRpZGF0ZS5oID0gaDt9XG5cdFx0XHRcdGlmICghaCAmJiAhZCAmJiAhdykge2NhbmRpZGF0ZS5kID0gMTt9XG5cdFx0XHRcdGlmIChjYW5kaWRhdGUuZCA9PT0gMSkge3NldC5oYXMxeCA9IHRydWU7fVxuXHRcdFx0XHRjYW5kaWRhdGUuc2V0ID0gc2V0O1xuXG5cdFx0XHRcdGNhbmRpZGF0ZXMucHVzaChjYW5kaWRhdGUpO1xuXHRcdFx0fVxuXHRcdH0gLy8gKGNsb3NlIHBhcnNlRGVzY3JpcHRvcnMgZm4pXG5cblx0XHQvKipcblx0XHQqIFRva2VuaXplcyBkZXNjcmlwdG9yIHByb3BlcnRpZXMgcHJpb3IgdG8gcGFyc2luZ1xuXHRcdCogUmV0dXJucyB1bmRlZmluZWQuXG5cdFx0KiAoQWdhaW4sIHRoaXMgZm4gaXMgZGVmaW5lZCBiZWZvcmUgaXQgaXMgdXNlZCwgaW4gb3JkZXIgdG8gcGFzcyBKU0hJTlQuXG5cdFx0KiBVbmZvcnR1bmF0ZWx5IHRoaXMgYnJlYWtzIHRoZSBsb2dpY2FsIHNlcXVlbmNpbmcgb2YgdGhlIHNwZWMgY29tbWVudHMuIDovIClcblx0XHQqL1xuXHRcdGZ1bmN0aW9uIHRva2VuaXplKCkge1xuXG5cdFx0XHQvLyA4LjEuIERlc2NyaXB0b3IgdG9rZW5pc2VyOiBTa2lwIHdoaXRlc3BhY2Vcblx0XHRcdGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ2V4TGVhZGluZ1NwYWNlcyk7XG5cblx0XHRcdC8vIDguMi4gTGV0IGN1cnJlbnQgZGVzY3JpcHRvciBiZSB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBcIlwiO1xuXG5cdFx0XHQvLyA4LjMuIExldCBzdGF0ZSBiZSBpbiBkZXNjcmlwdG9yLlxuXHRcdFx0c3RhdGUgPSBcImluIGRlc2NyaXB0b3JcIjtcblxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblxuXHRcdFx0XHQvLyA4LjQuIExldCBjIGJlIHRoZSBjaGFyYWN0ZXIgYXQgcG9zaXRpb24uXG5cdFx0XHRcdGMgPSBpbnB1dC5jaGFyQXQocG9zKTtcblxuXHRcdFx0XHQvLyAgRG8gdGhlIGZvbGxvd2luZyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIHN0YXRlLlxuXHRcdFx0XHQvLyAgRm9yIHRoZSBwdXJwb3NlIG9mIHRoaXMgc3RlcCwgXCJFT0ZcIiBpcyBhIHNwZWNpYWwgY2hhcmFjdGVyIHJlcHJlc2VudGluZ1xuXHRcdFx0XHQvLyAgdGhhdCBwb3NpdGlvbiBpcyBwYXN0IHRoZSBlbmQgb2YgaW5wdXQuXG5cblx0XHRcdFx0Ly8gSW4gZGVzY3JpcHRvclxuXHRcdFx0XHRpZiAoc3RhdGUgPT09IFwiaW4gZGVzY3JpcHRvclwiKSB7XG5cdFx0XHRcdFx0Ly8gRG8gdGhlIGZvbGxvd2luZywgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBjOlxuXG5cdFx0XHRcdCAgLy8gU3BhY2UgY2hhcmFjdGVyXG5cdFx0XHRcdCAgLy8gSWYgY3VycmVudCBkZXNjcmlwdG9yIGlzIG5vdCBlbXB0eSwgYXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0b1xuXHRcdFx0XHQgIC8vIGRlc2NyaXB0b3JzIGFuZCBsZXQgY3VycmVudCBkZXNjcmlwdG9yIGJlIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHRcdCAgLy8gU2V0IHN0YXRlIHRvIGFmdGVyIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0aWYgKGlzU3BhY2UoYykpIHtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50RGVzY3JpcHRvcikge1xuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9ycy5wdXNoKGN1cnJlbnREZXNjcmlwdG9yKTtcblx0XHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHRzdGF0ZSA9IFwiYWZ0ZXIgZGVzY3JpcHRvclwiO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gVSswMDJDIENPTU1BICgsKVxuXHRcdFx0XHRcdC8vIEFkdmFuY2UgcG9zaXRpb24gdG8gdGhlIG5leHQgY2hhcmFjdGVyIGluIGlucHV0LiBJZiBjdXJyZW50IGRlc2NyaXB0b3Jcblx0XHRcdFx0XHQvLyBpcyBub3QgZW1wdHksIGFwcGVuZCBjdXJyZW50IGRlc2NyaXB0b3IgdG8gZGVzY3JpcHRvcnMuIEp1bXAgdG8gdGhlIHN0ZXBcblx0XHRcdFx0XHQvLyBsYWJlbGVkIGRlc2NyaXB0b3IgcGFyc2VyLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCIsXCIpIHtcblx0XHRcdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnREZXNjcmlwdG9yKSB7XG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gVSswMDI4IExFRlQgUEFSRU5USEVTSVMgKCgpXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLiBTZXQgc3RhdGUgdG8gaW4gcGFyZW5zLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCJcXHUwMDI4XCIpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gY3VycmVudERlc2NyaXB0b3IgKyBjO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBcImluIHBhcmVuc1wiO1xuXG5cdFx0XHRcdFx0Ly8gRU9GXG5cdFx0XHRcdFx0Ly8gSWYgY3VycmVudCBkZXNjcmlwdG9yIGlzIG5vdCBlbXB0eSwgYXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0b1xuXHRcdFx0XHRcdC8vIGRlc2NyaXB0b3JzLiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWQgZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudERlc2NyaXB0b3IpIHtcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRvcnMucHVzaChjdXJyZW50RGVzY3JpcHRvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdC8vIChlbmQgXCJpbiBkZXNjcmlwdG9yXCJcblxuXHRcdFx0XHQvLyBJbiBwYXJlbnNcblx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJpbiBwYXJlbnNcIikge1xuXG5cdFx0XHRcdFx0Ly8gVSswMDI5IFJJR0hUIFBBUkVOVEhFU0lTICgpKVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci4gU2V0IHN0YXRlIHRvIGluIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0aWYgKGMgPT09IFwiKVwiKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHRcdHN0YXRlID0gXCJpbiBkZXNjcmlwdG9yXCI7XG5cblx0XHRcdFx0XHQvLyBFT0Zcblx0XHRcdFx0XHQvLyBBcHBlbmQgY3VycmVudCBkZXNjcmlwdG9yIHRvIGRlc2NyaXB0b3JzLiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWRcblx0XHRcdFx0XHQvLyBkZXNjcmlwdG9yIHBhcnNlci5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBjdXJyZW50RGVzY3JpcHRvciArIGM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFmdGVyIGRlc2NyaXB0b3Jcblx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJhZnRlciBkZXNjcmlwdG9yXCIpIHtcblxuXHRcdFx0XHRcdC8vIERvIHRoZSBmb2xsb3dpbmcsIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgYzpcblx0XHRcdFx0XHQvLyBTcGFjZSBjaGFyYWN0ZXI6IFN0YXkgaW4gdGhpcyBzdGF0ZS5cblx0XHRcdFx0XHRpZiAoaXNTcGFjZShjKSkge1xuXG5cdFx0XHRcdFx0Ly8gRU9GOiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWQgZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0Ly8gU2V0IHN0YXRlIHRvIGluIGRlc2NyaXB0b3IuIFNldCBwb3NpdGlvbiB0byB0aGUgcHJldmlvdXMgY2hhcmFjdGVyIGluIGlucHV0LlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFwiaW4gZGVzY3JpcHRvclwiO1xuXHRcdFx0XHRcdFx0cG9zIC09IDE7XG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZHZhbmNlIHBvc2l0aW9uIHRvIHRoZSBuZXh0IGNoYXJhY3RlciBpbiBpbnB1dC5cblx0XHRcdFx0cG9zICs9IDE7XG5cblx0XHRcdC8vIFJlcGVhdCB0aGlzIHN0ZXAuXG5cdFx0XHR9IC8vIChjbG9zZSB3aGlsZSB0cnVlIGxvb3ApXG5cdFx0fVxuXG5cdFx0Ly8gNC4gU3BsaXR0aW5nIGxvb3A6IENvbGxlY3QgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIHNwYWNlXG5cdFx0Ly8gICAgY2hhcmFjdGVycyBvciBVKzAwMkMgQ09NTUEgY2hhcmFjdGVycy4gSWYgYW55IFUrMDAyQyBDT01NQSBjaGFyYWN0ZXJzXG5cdFx0Ly8gICAgd2VyZSBjb2xsZWN0ZWQsIHRoYXQgaXMgYSBwYXJzZSBlcnJvci5cblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0Y29sbGVjdENoYXJhY3RlcnMocmVnZXhMZWFkaW5nQ29tbWFzT3JTcGFjZXMpO1xuXG5cdFx0XHQvLyA1LiBJZiBwb3NpdGlvbiBpcyBwYXN0IHRoZSBlbmQgb2YgaW5wdXQsIHJldHVybiBjYW5kaWRhdGVzIGFuZCBhYm9ydCB0aGVzZSBzdGVwcy5cblx0XHRcdGlmIChwb3MgPj0gaW5wdXRMZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGNhbmRpZGF0ZXM7IC8vICh3ZSdyZSBkb25lLCB0aGlzIGlzIHRoZSBzb2xlIHJldHVybiBwYXRoKVxuXHRcdFx0fVxuXG5cdFx0XHQvLyA2LiBDb2xsZWN0IGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyB0aGF0IGFyZSBub3Qgc3BhY2UgY2hhcmFjdGVycyxcblx0XHRcdC8vICAgIGFuZCBsZXQgdGhhdCBiZSB1cmwuXG5cdFx0XHR1cmwgPSBjb2xsZWN0Q2hhcmFjdGVycyhyZWdleExlYWRpbmdOb3RTcGFjZXMpO1xuXG5cdFx0XHQvLyA3LiBMZXQgZGVzY3JpcHRvcnMgYmUgYSBuZXcgZW1wdHkgbGlzdC5cblx0XHRcdGRlc2NyaXB0b3JzID0gW107XG5cblx0XHRcdC8vIDguIElmIHVybCBlbmRzIHdpdGggYSBVKzAwMkMgQ09NTUEgY2hhcmFjdGVyICgsKSwgZm9sbG93IHRoZXNlIHN1YnN0ZXBzOlxuXHRcdFx0Ly9cdFx0KDEpLiBSZW1vdmUgYWxsIHRyYWlsaW5nIFUrMDAyQyBDT01NQSBjaGFyYWN0ZXJzIGZyb20gdXJsLiBJZiB0aGlzIHJlbW92ZWRcblx0XHRcdC8vICAgICAgICAgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoYXQgaXMgYSBwYXJzZSBlcnJvci5cblx0XHRcdGlmICh1cmwuc2xpY2UoLTEpID09PSBcIixcIikge1xuXHRcdFx0XHR1cmwgPSB1cmwucmVwbGFjZShyZWdleFRyYWlsaW5nQ29tbWFzLCBcIlwiKTtcblx0XHRcdFx0Ly8gKEp1bXAgYWhlYWQgdG8gc3RlcCA5IHRvIHNraXAgdG9rZW5pemF0aW9uIGFuZCBqdXN0IHB1c2ggdGhlIGNhbmRpZGF0ZSkuXG5cdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblxuXHRcdFx0Ly9cdE90aGVyd2lzZSwgZm9sbG93IHRoZXNlIHN1YnN0ZXBzOlxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9rZW5pemUoKTtcblx0XHRcdH0gLy8gKGNsb3NlIGVsc2Ugb2Ygc3RlcCA4KVxuXG5cdFx0Ly8gMTYuIFJldHVybiB0byB0aGUgc3RlcCBsYWJlbGVkIHNwbGl0dGluZyBsb29wLlxuXHRcdH0gLy8gKENsb3NlIG9mIGJpZyB3aGlsZSBsb29wLilcblx0fVxuXG5cdC8qXG5cdCAqIFNpemVzIFBhcnNlclxuXHQgKlxuXHQgKiBCeSBBbGV4IEJlbGwgfCAgTUlUIExpY2Vuc2Vcblx0ICpcblx0ICogTm9uLXN0cmljdCBidXQgYWNjdXJhdGUgYW5kIGxpZ2h0d2VpZ2h0IEpTIFBhcnNlciBmb3IgdGhlIHN0cmluZyB2YWx1ZSA8aW1nIHNpemVzPVwiaGVyZVwiPlxuXHQgKlxuXHQgKiBSZWZlcmVuY2UgYWxnb3JpdGhtIGF0OlxuXHQgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbWJlZGRlZC1jb250ZW50Lmh0bWwjcGFyc2UtYS1zaXplcy1hdHRyaWJ1dGVcblx0ICpcblx0ICogTW9zdCBjb21tZW50cyBhcmUgY29waWVkIGluIGRpcmVjdGx5IGZyb20gdGhlIHNwZWNcblx0ICogKGV4Y2VwdCBmb3IgY29tbWVudHMgaW4gcGFyZW5zKS5cblx0ICpcblx0ICogR3JhbW1hciBpczpcblx0ICogPHNvdXJjZS1zaXplLWxpc3Q+ID0gPHNvdXJjZS1zaXplPiMgWyAsIDxzb3VyY2Utc2l6ZS12YWx1ZT4gXT8gfCA8c291cmNlLXNpemUtdmFsdWU+XG5cdCAqIDxzb3VyY2Utc2l6ZT4gPSA8bWVkaWEtY29uZGl0aW9uPiA8c291cmNlLXNpemUtdmFsdWU+XG5cdCAqIDxzb3VyY2Utc2l6ZS12YWx1ZT4gPSA8bGVuZ3RoPlxuXHQgKiBodHRwOi8vd3d3LnczLm9yZy9odG1sL3dnL2RyYWZ0cy9odG1sL21hc3Rlci9lbWJlZGRlZC1jb250ZW50Lmh0bWwjYXR0ci1pbWctc2l6ZXNcblx0ICpcblx0ICogRS5nLiBcIihtYXgtd2lkdGg6IDMwZW0pIDEwMHZ3LCAobWF4LXdpZHRoOiA1MGVtKSA3MHZ3LCAxMDB2d1wiXG5cdCAqIG9yIFwiKG1pbi13aWR0aDogMzBlbSksIGNhbGMoMzB2dyAtIDE1cHgpXCIgb3IganVzdCBcIjMwdndcIlxuXHQgKlxuXHQgKiBSZXR1cm5zIHRoZSBmaXJzdCB2YWxpZCA8Y3NzLWxlbmd0aD4gd2l0aCBhIG1lZGlhIGNvbmRpdGlvbiB0aGF0IGV2YWx1YXRlcyB0byB0cnVlLFxuXHQgKiBvciBcIjEwMHZ3XCIgaWYgYWxsIHZhbGlkIG1lZGlhIGNvbmRpdGlvbnMgZXZhbHVhdGUgdG8gZmFsc2UuXG5cdCAqXG5cdCAqL1xuXG5cdGZ1bmN0aW9uIHBhcnNlU2l6ZXMoc3RyVmFsdWUpIHtcblxuXHRcdC8vIChQZXJjZW50YWdlIENTUyBsZW5ndGhzIGFyZSBub3QgYWxsb3dlZCBpbiB0aGlzIGNhc2UsIHRvIGF2b2lkIGNvbmZ1c2lvbjpcblx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbWJlZGRlZC1jb250ZW50Lmh0bWwjdmFsaWQtc291cmNlLXNpemUtbGlzdFxuXHRcdC8vIENTUyBhbGxvd3MgYSBzaW5nbGUgb3B0aW9uYWwgcGx1cyBvciBtaW51cyBzaWduOlxuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIvc3luZGF0YS5odG1sI251bWJlcnNcblx0XHQvLyBDU1MgaXMgQVNDSUkgY2FzZS1pbnNlbnNpdGl2ZTpcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyL3N5bmRhdGEuaHRtbCNjaGFyYWN0ZXJzIClcblx0XHQvLyBTcGVjIGFsbG93cyBleHBvbmVudGlhbCBub3RhdGlvbiBmb3IgPG51bWJlcj4gdHlwZTpcblx0XHQvLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLyNudW1iZXJzXG5cdFx0dmFyIHJlZ2V4Q3NzTGVuZ3RoV2l0aFVuaXRzID0gL14oPzpbKy1dP1swLTldK3xbMC05XSpcXC5bMC05XSspKD86W2VFXVsrLV0/WzAtOV0rKT8oPzpjaHxjbXxlbXxleHxpbnxtbXxwY3xwdHxweHxyZW18dmh8dm1pbnx2bWF4fHZ3KSQvaTtcblxuXHRcdC8vIChUaGlzIGlzIGEgcXVpY2sgYW5kIGxlbmllbnQgdGVzdC4gQmVjYXVzZSBvZiBvcHRpb25hbCB1bmxpbWl0ZWQtZGVwdGggaW50ZXJuYWxcblx0XHQvLyBncm91cGluZyBwYXJlbnMgYW5kIHN0cmljdCBzcGFjaW5nIHJ1bGVzLCB0aGlzIGNvdWxkIGdldCB2ZXJ5IGNvbXBsaWNhdGVkLilcblx0XHR2YXIgcmVnZXhDc3NDYWxjID0gL15jYWxjXFwoKD86WzAtOWEteiBcXC5cXCtcXC1cXCpcXC9cXChcXCldKylcXCkkL2k7XG5cblx0XHR2YXIgaTtcblx0XHR2YXIgdW5wYXJzZWRTaXplc0xpc3Q7XG5cdFx0dmFyIHVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoO1xuXHRcdHZhciB1bnBhcnNlZFNpemU7XG5cdFx0dmFyIGxhc3RDb21wb25lbnRWYWx1ZTtcblx0XHR2YXIgc2l6ZTtcblxuXHRcdC8vIFVUSUxJVFkgRlVOQ1RJT05TXG5cblx0XHQvLyAgKFRveSBDU1MgcGFyc2VyLiBUaGUgZ29hbHMgaGVyZSBhcmU6XG5cdFx0Ly8gIDEpIGV4cGFuc2l2ZSB0ZXN0IGNvdmVyYWdlIHdpdGhvdXQgdGhlIHdlaWdodCBvZiBhIGZ1bGwgQ1NTIHBhcnNlci5cblx0XHQvLyAgMikgQXZvaWRpbmcgcmVnZXggd2hlcmV2ZXIgY29udmVuaWVudC5cblx0XHQvLyAgUXVpY2sgdGVzdHM6IGh0dHA6Ly9qc2ZpZGRsZS5uZXQvZ3RudEw0Z3IvMy9cblx0XHQvLyAgUmV0dXJucyBhbiBhcnJheSBvZiBhcnJheXMuKVxuXHRcdGZ1bmN0aW9uIHBhcnNlQ29tcG9uZW50VmFsdWVzKHN0cikge1xuXHRcdFx0dmFyIGNocmN0cjtcblx0XHRcdHZhciBjb21wb25lbnQgPSBcIlwiO1xuXHRcdFx0dmFyIGNvbXBvbmVudEFycmF5ID0gW107XG5cdFx0XHR2YXIgbGlzdEFycmF5ID0gW107XG5cdFx0XHR2YXIgcGFyZW5EZXB0aCA9IDA7XG5cdFx0XHR2YXIgcG9zID0gMDtcblx0XHRcdHZhciBpbkNvbW1lbnQgPSBmYWxzZTtcblxuXHRcdFx0ZnVuY3Rpb24gcHVzaENvbXBvbmVudCgpIHtcblx0XHRcdFx0aWYgKGNvbXBvbmVudCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudEFycmF5LnB1c2goY29tcG9uZW50KTtcblx0XHRcdFx0XHRjb21wb25lbnQgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHB1c2hDb21wb25lbnRBcnJheSgpIHtcblx0XHRcdFx0aWYgKGNvbXBvbmVudEFycmF5WzBdKSB7XG5cdFx0XHRcdFx0bGlzdEFycmF5LnB1c2goY29tcG9uZW50QXJyYXkpO1xuXHRcdFx0XHRcdGNvbXBvbmVudEFycmF5ID0gW107XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gKExvb3AgZm9yd2FyZHMgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcuKVxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0Y2hyY3RyID0gc3RyLmNoYXJBdChwb3MpO1xuXG5cdFx0XHRcdGlmIChjaHJjdHIgPT09IFwiXCIpIHsgLy8gKCBFbmQgb2Ygc3RyaW5nIHJlYWNoZWQuKVxuXHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50QXJyYXkoKTtcblx0XHRcdFx0XHRyZXR1cm4gbGlzdEFycmF5O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGluQ29tbWVudCkge1xuXHRcdFx0XHRcdGlmICgoY2hyY3RyID09PSBcIipcIikgJiYgKHN0cltwb3MgKyAxXSA9PT0gXCIvXCIpKSB7IC8vIChBdCBlbmQgb2YgYSBjb21tZW50Lilcblx0XHRcdFx0XHRcdGluQ29tbWVudCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0cG9zICs9IDI7XG5cdFx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cG9zICs9IDE7IC8vIChTa2lwIGFsbCBjaGFyYWN0ZXJzIGluc2lkZSBjb21tZW50cy4pXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNTcGFjZShjaHJjdHIpKSB7XG5cdFx0XHRcdFx0Ly8gKElmIHByZXZpb3VzIGNoYXJhY3RlciBpbiBsb29wIHdhcyBhbHNvIGEgc3BhY2UsIG9yIGlmXG5cdFx0XHRcdFx0Ly8gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc3RyaW5nLCBkbyBub3QgYWRkIHNwYWNlIGNoYXIgdG9cblx0XHRcdFx0XHQvLyBjb21wb25lbnQuKVxuXHRcdFx0XHRcdGlmICggKHN0ci5jaGFyQXQocG9zIC0gMSkgJiYgaXNTcGFjZSggc3RyLmNoYXJBdChwb3MgLSAxKSApICkgfHwgIWNvbXBvbmVudCApIHtcblx0XHRcdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwYXJlbkRlcHRoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0XHRwb3MgKz0xO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIChSZXBsYWNlIGFueSBzcGFjZSBjaGFyYWN0ZXIgd2l0aCBhIHBsYWluIHNwYWNlIGZvciBsZWdpYmlsaXR5Lilcblx0XHRcdFx0XHRcdGNocmN0ciA9IFwiIFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChjaHJjdHIgPT09IFwiKFwiKSB7XG5cdFx0XHRcdFx0cGFyZW5EZXB0aCArPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNocmN0ciA9PT0gXCIpXCIpIHtcblx0XHRcdFx0XHRwYXJlbkRlcHRoIC09IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hyY3RyID09PSBcIixcIikge1xuXHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50QXJyYXkoKTtcblx0XHRcdFx0XHRwb3MgKz0gMTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fSBlbHNlIGlmICggKGNocmN0ciA9PT0gXCIvXCIpICYmIChzdHIuY2hhckF0KHBvcyArIDEpID09PSBcIipcIikgKSB7XG5cdFx0XHRcdFx0aW5Db21tZW50ID0gdHJ1ZTtcblx0XHRcdFx0XHRwb3MgKz0gMjtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbXBvbmVudCA9IGNvbXBvbmVudCArIGNocmN0cjtcblx0XHRcdFx0cG9zICs9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaXNWYWxpZE5vbk5lZ2F0aXZlU291cmNlU2l6ZVZhbHVlKHMpIHtcblx0XHRcdGlmIChyZWdleENzc0xlbmd0aFdpdGhVbml0cy50ZXN0KHMpICYmIChwYXJzZUZsb2F0KHMpID49IDApKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0aWYgKHJlZ2V4Q3NzQ2FsYy50ZXN0KHMpKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0Ly8gKCBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyL3N5bmRhdGEuaHRtbCNudW1iZXJzIHNheXM6XG5cdFx0XHQvLyBcIi0wIGlzIGVxdWl2YWxlbnQgdG8gMCBhbmQgaXMgbm90IGEgbmVnYXRpdmUgbnVtYmVyLlwiIHdoaWNoIG1lYW5zIHRoYXRcblx0XHRcdC8vIHVuaXRsZXNzIHplcm8gYW5kIHVuaXRsZXNzIG5lZ2F0aXZlIHplcm8gbXVzdCBiZSBhY2NlcHRlZCBhcyBzcGVjaWFsIGNhc2VzLilcblx0XHRcdGlmICgocyA9PT0gXCIwXCIpIHx8IChzID09PSBcIi0wXCIpIHx8IChzID09PSBcIiswXCIpKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIFdoZW4gYXNrZWQgdG8gcGFyc2UgYSBzaXplcyBhdHRyaWJ1dGUgZnJvbSBhbiBlbGVtZW50LCBwYXJzZSBhXG5cdFx0Ly8gY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgY29tcG9uZW50IHZhbHVlcyBmcm9tIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCdzXG5cdFx0Ly8gc2l6ZXMgYXR0cmlidXRlIChvciB0aGUgZW1wdHkgc3RyaW5nLCBpZiB0aGUgYXR0cmlidXRlIGlzIGFic2VudCksIGFuZCBsZXRcblx0XHQvLyB1bnBhcnNlZCBzaXplcyBsaXN0IGJlIHRoZSByZXN1bHQuXG5cdFx0Ly8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLXN5bnRheC8jcGFyc2UtY29tbWEtc2VwYXJhdGVkLWxpc3Qtb2YtY29tcG9uZW50LXZhbHVlc1xuXG5cdFx0dW5wYXJzZWRTaXplc0xpc3QgPSBwYXJzZUNvbXBvbmVudFZhbHVlcyhzdHJWYWx1ZSk7XG5cdFx0dW5wYXJzZWRTaXplc0xpc3RMZW5ndGggPSB1bnBhcnNlZFNpemVzTGlzdC5sZW5ndGg7XG5cblx0XHQvLyBGb3IgZWFjaCB1bnBhcnNlZCBzaXplIGluIHVucGFyc2VkIHNpemVzIGxpc3Q6XG5cdFx0Zm9yIChpID0gMDsgaSA8IHVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoOyBpKyspIHtcblx0XHRcdHVucGFyc2VkU2l6ZSA9IHVucGFyc2VkU2l6ZXNMaXN0W2ldO1xuXG5cdFx0XHQvLyAxLiBSZW1vdmUgYWxsIGNvbnNlY3V0aXZlIDx3aGl0ZXNwYWNlLXRva2VuPnMgZnJvbSB0aGUgZW5kIG9mIHVucGFyc2VkIHNpemUuXG5cdFx0XHQvLyAoIHBhcnNlQ29tcG9uZW50VmFsdWVzKCkgYWxyZWFkeSBvbWl0cyBzcGFjZXMgb3V0c2lkZSBvZiBwYXJlbnMuIClcblxuXHRcdFx0Ly8gSWYgdW5wYXJzZWQgc2l6ZSBpcyBub3cgZW1wdHksIHRoYXQgaXMgYSBwYXJzZSBlcnJvcjsgY29udGludWUgdG8gdGhlIG5leHRcblx0XHRcdC8vIGl0ZXJhdGlvbiBvZiB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vICggcGFyc2VDb21wb25lbnRWYWx1ZXMoKSB3b24ndCBwdXNoIGFuIGVtcHR5IGFycmF5LiApXG5cblx0XHRcdC8vIDIuIElmIHRoZSBsYXN0IGNvbXBvbmVudCB2YWx1ZSBpbiB1bnBhcnNlZCBzaXplIGlzIGEgdmFsaWQgbm9uLW5lZ2F0aXZlXG5cdFx0XHQvLyA8c291cmNlLXNpemUtdmFsdWU+LCBsZXQgc2l6ZSBiZSBpdHMgdmFsdWUgYW5kIHJlbW92ZSB0aGUgY29tcG9uZW50IHZhbHVlXG5cdFx0XHQvLyBmcm9tIHVucGFyc2VkIHNpemUuIEFueSBDU1MgZnVuY3Rpb24gb3RoZXIgdGhhbiB0aGUgY2FsYygpIGZ1bmN0aW9uIGlzXG5cdFx0XHQvLyBpbnZhbGlkLiBPdGhlcndpc2UsIHRoZXJlIGlzIGEgcGFyc2UgZXJyb3I7IGNvbnRpbnVlIHRvIHRoZSBuZXh0IGl0ZXJhdGlvblxuXHRcdFx0Ly8gb2YgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHQvLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3Mtc3ludGF4LyNwYXJzZS1jb21wb25lbnQtdmFsdWVcblx0XHRcdGxhc3RDb21wb25lbnRWYWx1ZSA9IHVucGFyc2VkU2l6ZVt1bnBhcnNlZFNpemUubGVuZ3RoIC0gMV07XG5cblx0XHRcdGlmIChpc1ZhbGlkTm9uTmVnYXRpdmVTb3VyY2VTaXplVmFsdWUobGFzdENvbXBvbmVudFZhbHVlKSkge1xuXHRcdFx0XHRzaXplID0gbGFzdENvbXBvbmVudFZhbHVlO1xuXHRcdFx0XHR1bnBhcnNlZFNpemUucG9wKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gMy4gUmVtb3ZlIGFsbCBjb25zZWN1dGl2ZSA8d2hpdGVzcGFjZS10b2tlbj5zIGZyb20gdGhlIGVuZCBvZiB1bnBhcnNlZFxuXHRcdFx0Ly8gc2l6ZS4gSWYgdW5wYXJzZWQgc2l6ZSBpcyBub3cgZW1wdHksIHJldHVybiBzaXplIGFuZCBleGl0IHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0Ly8gSWYgdGhpcyB3YXMgbm90IHRoZSBsYXN0IGl0ZW0gaW4gdW5wYXJzZWQgc2l6ZXMgbGlzdCwgdGhhdCBpcyBhIHBhcnNlIGVycm9yLlxuXHRcdFx0aWYgKHVucGFyc2VkU2l6ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHNpemU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDQuIFBhcnNlIHRoZSByZW1haW5pbmcgY29tcG9uZW50IHZhbHVlcyBpbiB1bnBhcnNlZCBzaXplIGFzIGFcblx0XHRcdC8vIDxtZWRpYS1jb25kaXRpb24+LiBJZiBpdCBkb2VzIG5vdCBwYXJzZSBjb3JyZWN0bHksIG9yIGl0IGRvZXMgcGFyc2Vcblx0XHRcdC8vIGNvcnJlY3RseSBidXQgdGhlIDxtZWRpYS1jb25kaXRpb24+IGV2YWx1YXRlcyB0byBmYWxzZSwgY29udGludWUgdG8gdGhlXG5cdFx0XHQvLyBuZXh0IGl0ZXJhdGlvbiBvZiB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vIChQYXJzaW5nIGFsbCBwb3NzaWJsZSBjb21wb3VuZCBtZWRpYSBjb25kaXRpb25zIGluIEpTIGlzIGhlYXZ5LCBjb21wbGljYXRlZCxcblx0XHRcdC8vIGFuZCB0aGUgcGF5b2ZmIGlzIHVuY2xlYXIuIElzIHRoZXJlIGV2ZXIgYW4gc2l0dWF0aW9uIHdoZXJlIHRoZVxuXHRcdFx0Ly8gbWVkaWEgY29uZGl0aW9uIHBhcnNlcyBpbmNvcnJlY3RseSBidXQgc3RpbGwgc29tZWhvdyBldmFsdWF0ZXMgdG8gdHJ1ZT9cblx0XHRcdC8vIENhbiB3ZSBqdXN0IHJlbHkgb24gdGhlIGJyb3dzZXIvcG9seWZpbGwgdG8gZG8gaXQ/KVxuXHRcdFx0dW5wYXJzZWRTaXplID0gdW5wYXJzZWRTaXplLmpvaW4oXCIgXCIpO1xuXHRcdFx0aWYgKCEocGYubWF0Y2hlc01lZGlhKCB1bnBhcnNlZFNpemUgKSApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gNS4gUmV0dXJuIHNpemUgYW5kIGV4aXQgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHRyZXR1cm4gc2l6ZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgYWJvdmUgYWxnb3JpdGhtIGV4aGF1c3RzIHVucGFyc2VkIHNpemVzIGxpc3Qgd2l0aG91dCByZXR1cm5pbmcgYVxuXHRcdC8vIHNpemUgdmFsdWUsIHJldHVybiAxMDB2dy5cblx0XHRyZXR1cm4gXCIxMDB2d1wiO1xuXHR9XG5cblx0Ly8gbmFtZXNwYWNlXG5cdHBmLm5zID0gKFwicGZcIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKS5zdWJzdHIoMCwgOSk7XG5cblx0Ly8gc3Jjc2V0IHN1cHBvcnQgdGVzdFxuXHRwZi5zdXBTcmNzZXQgPSBcInNyY3NldFwiIGluIGltYWdlO1xuXHRwZi5zdXBTaXplcyA9IFwic2l6ZXNcIiBpbiBpbWFnZTtcblx0cGYuc3VwUGljdHVyZSA9ICEhd2luZG93LkhUTUxQaWN0dXJlRWxlbWVudDtcblxuXHQvLyBVQyBicm93c2VyIGRvZXMgY2xhaW0gdG8gc3VwcG9ydCBzcmNzZXQgYW5kIHBpY3R1cmUsIGJ1dCBub3Qgc2l6ZXMsXG5cdC8vIHRoaXMgZXh0ZW5kZWQgdGVzdCByZXZlYWxzIHRoZSBicm93c2VyIGRvZXMgc3VwcG9ydCBub3RoaW5nXG5cdGlmIChwZi5zdXBTcmNzZXQgJiYgcGYuc3VwUGljdHVyZSAmJiAhcGYuc3VwU2l6ZXMpIHtcblx0XHQoZnVuY3Rpb24oaW1hZ2UyKSB7XG5cdFx0XHRpbWFnZS5zcmNzZXQgPSBcImRhdGE6LGFcIjtcblx0XHRcdGltYWdlMi5zcmMgPSBcImRhdGE6LGFcIjtcblx0XHRcdHBmLnN1cFNyY3NldCA9IGltYWdlLmNvbXBsZXRlID09PSBpbWFnZTIuY29tcGxldGU7XG5cdFx0XHRwZi5zdXBQaWN0dXJlID0gcGYuc3VwU3Jjc2V0ICYmIHBmLnN1cFBpY3R1cmU7XG5cdFx0fSkoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSk7XG5cdH1cblxuXHQvLyBTYWZhcmk5IGhhcyBiYXNpYyBzdXBwb3J0IGZvciBzaXplcywgYnV0IGRvZXMndCBleHBvc2UgdGhlIGBzaXplc2AgaWRsIGF0dHJpYnV0ZVxuXHRpZiAocGYuc3VwU3Jjc2V0ICYmICFwZi5zdXBTaXplcykge1xuXG5cdFx0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHdpZHRoMiA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQWdBQkFQQUFBUC8vL3dBQUFDSDVCQUFBQUFBQUxBQUFBQUFDQUFFQUFBSUNCQW9BT3c9PVwiO1xuXHRcdFx0dmFyIHdpZHRoMSA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIjtcblx0XHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdFx0dmFyIHRlc3QgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHdpZHRoID0gaW1nLndpZHRoO1xuXG5cdFx0XHRcdGlmICh3aWR0aCA9PT0gMikge1xuXHRcdFx0XHRcdHBmLnN1cFNpemVzID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFsd2F5c0NoZWNrV0Rlc2NyaXB0b3IgPSBwZi5zdXBTcmNzZXQgJiYgIXBmLnN1cFNpemVzO1xuXG5cdFx0XHRcdGlzU3VwcG9ydFRlc3RSZWFkeSA9IHRydWU7XG5cdFx0XHRcdC8vIGZvcmNlIGFzeW5jXG5cdFx0XHRcdHNldFRpbWVvdXQocGljdHVyZWZpbGwpO1xuXHRcdFx0fTtcblxuXHRcdFx0aW1nLm9ubG9hZCA9IHRlc3Q7XG5cdFx0XHRpbWcub25lcnJvciA9IHRlc3Q7XG5cdFx0XHRpbWcuc2V0QXR0cmlidXRlKFwic2l6ZXNcIiwgXCI5cHhcIik7XG5cblx0XHRcdGltZy5zcmNzZXQgPSB3aWR0aDEgKyBcIiAxdyxcIiArIHdpZHRoMiArIFwiIDl3XCI7XG5cdFx0XHRpbWcuc3JjID0gd2lkdGgxO1xuXHRcdH0pKCk7XG5cblx0fSBlbHNlIHtcblx0XHRpc1N1cHBvcnRUZXN0UmVhZHkgPSB0cnVlO1xuXHR9XG5cblx0Ly8gdXNpbmcgcGYucXNhIGluc3RlYWQgb2YgZG9tIHRyYXZlcnNpbmcgZG9lcyBzY2FsZSBtdWNoIGJldHRlcixcblx0Ly8gZXNwZWNpYWxseSBvbiBzaXRlcyBtaXhpbmcgcmVzcG9uc2l2ZSBhbmQgbm9uLXJlc3BvbnNpdmUgaW1hZ2VzXG5cdHBmLnNlbFNob3J0ID0gXCJwaWN0dXJlPmltZyxpbWdbc3Jjc2V0XVwiO1xuXHRwZi5zZWwgPSBwZi5zZWxTaG9ydDtcblx0cGYuY2ZnID0gY2ZnO1xuXG5cdC8qKlxuXHQgKiBTaG9ydGN1dCBwcm9wZXJ0eSBmb3IgYGRldmljZVBpeGVsUmF0aW9gICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqL1xuXHRwZi5EUFIgPSAoRFBSICB8fCAxICk7XG5cdHBmLnUgPSB1bml0cztcblxuXHQvLyBjb250YWluZXIgb2Ygc3VwcG9ydGVkIG1pbWUgdHlwZXMgdGhhdCBvbmUgbWlnaHQgbmVlZCB0byBxdWFsaWZ5IGJlZm9yZSB1c2luZ1xuXHRwZi50eXBlcyA9ICB0eXBlcztcblxuXHRwZi5zZXRTaXplID0gbm9vcDtcblxuXHQvKipcblx0ICogR2V0cyBhIHN0cmluZyBhbmQgcmV0dXJucyB0aGUgYWJzb2x1dGUgVVJMXG5cdCAqIEBwYXJhbSBzcmNcblx0ICogQHJldHVybnMge1N0cmluZ30gYWJzb2x1dGUgVVJMXG5cdCAqL1xuXG5cdHBmLm1ha2VVcmwgPSBtZW1vaXplKGZ1bmN0aW9uKHNyYykge1xuXHRcdGFuY2hvci5ocmVmID0gc3JjO1xuXHRcdHJldHVybiBhbmNob3IuaHJlZjtcblx0fSk7XG5cblx0LyoqXG5cdCAqIEdldHMgYSBET00gZWxlbWVudCBvciBkb2N1bWVudCBhbmQgYSBzZWxjdG9yIGFuZCByZXR1cm5zIHRoZSBmb3VuZCBtYXRjaGVzXG5cdCAqIENhbiBiZSBleHRlbmRlZCB3aXRoIGpRdWVyeS9TaXp6bGUgZm9yIElFNyBzdXBwb3J0XG5cdCAqIEBwYXJhbSBjb250ZXh0XG5cdCAqIEBwYXJhbSBzZWxcblx0ICogQHJldHVybnMge05vZGVMaXN0fEFycmF5fVxuXHQgKi9cblx0cGYucXNhID0gZnVuY3Rpb24oY29udGV4dCwgc2VsKSB7XG5cdFx0cmV0dXJuICggXCJxdWVyeVNlbGVjdG9yXCIgaW4gY29udGV4dCApID8gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkgOiBbXTtcblx0fTtcblxuXHQvKipcblx0ICogU2hvcnRjdXQgbWV0aG9kIGZvciBtYXRjaE1lZGlhICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqIHdldGhlciBuYXRpdmUgb3IgcGYubU1RIGlzIHVzZWQgd2lsbCBiZSBkZWNpZGVkIGxhenkgb24gZmlyc3QgY2FsbFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHBmLm1hdGNoZXNNZWRpYSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggd2luZG93Lm1hdGNoTWVkaWEgJiYgKG1hdGNoTWVkaWEoIFwiKG1pbi13aWR0aDogMC4xZW0pXCIgKSB8fCB7fSkubWF0Y2hlcyApIHtcblx0XHRcdHBmLm1hdGNoZXNNZWRpYSA9IGZ1bmN0aW9uKCBtZWRpYSApIHtcblx0XHRcdFx0cmV0dXJuICFtZWRpYSB8fCAoIG1hdGNoTWVkaWEoIG1lZGlhICkubWF0Y2hlcyApO1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGYubWF0Y2hlc01lZGlhID0gcGYubU1RO1xuXHRcdH1cblxuXHRcdHJldHVybiBwZi5tYXRjaGVzTWVkaWEuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBIHNpbXBsaWZpZWQgbWF0Y2hNZWRpYSBpbXBsZW1lbnRhdGlvbiBmb3IgSUU4IGFuZCBJRTlcblx0ICogaGFuZGxlcyBvbmx5IG1pbi13aWR0aC9tYXgtd2lkdGggd2l0aCBweCBvciBlbSB2YWx1ZXNcblx0ICogQHBhcmFtIG1lZGlhXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cGYubU1RID0gZnVuY3Rpb24oIG1lZGlhICkge1xuXHRcdHJldHVybiBtZWRpYSA/IGV2YWxDU1MobWVkaWEpIDogdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgY2FsY3VsYXRlZCBsZW5ndGggaW4gY3NzIHBpeGVsIGZyb20gdGhlIGdpdmVuIHNvdXJjZVNpemVWYWx1ZVxuXHQgKiBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLTMvI2xlbmd0aC12YWx1ZVxuXHQgKiBpbnRlbmRlZCBTcGVjIG1pc21hdGNoZXM6XG5cdCAqICogRG9lcyBub3QgY2hlY2sgZm9yIGludmFsaWQgdXNlIG9mIENTUyBmdW5jdGlvbnNcblx0ICogKiBEb2VzIGhhbmRsZSBhIGNvbXB1dGVkIGxlbmd0aCBvZiAwIHRoZSBzYW1lIGFzIGEgbmVnYXRpdmUgYW5kIHRoZXJlZm9yZSBpbnZhbGlkIHZhbHVlXG5cdCAqIEBwYXJhbSBzb3VyY2VTaXplVmFsdWVcblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdHBmLmNhbGNMZW5ndGggPSBmdW5jdGlvbiggc291cmNlU2l6ZVZhbHVlICkge1xuXG5cdFx0dmFyIHZhbHVlID0gZXZhbENTUyhzb3VyY2VTaXplVmFsdWUsIHRydWUpIHx8IGZhbHNlO1xuXHRcdGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHZhbHVlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUYWtlcyBhIHR5cGUgc3RyaW5nIGFuZCBjaGVja3MgaWYgaXRzIHN1cHBvcnRlZFxuXHQgKi9cblxuXHRwZi5zdXBwb3J0c1R5cGUgPSBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gKCB0eXBlICkgPyB0eXBlc1sgdHlwZSBdIDogdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogUGFyc2VzIGEgc291cmNlU2l6ZSBpbnRvIG1lZGlhQ29uZGl0aW9uIChtZWRpYSkgYW5kIHNvdXJjZVNpemVWYWx1ZSAobGVuZ3RoKVxuXHQgKiBAcGFyYW0gc291cmNlU2l6ZVN0clxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHBmLnBhcnNlU2l6ZSA9IG1lbW9pemUoZnVuY3Rpb24oIHNvdXJjZVNpemVTdHIgKSB7XG5cdFx0dmFyIG1hdGNoID0gKCBzb3VyY2VTaXplU3RyIHx8IFwiXCIgKS5tYXRjaChyZWdTaXplKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bWVkaWE6IG1hdGNoICYmIG1hdGNoWzFdLFxuXHRcdFx0bGVuZ3RoOiBtYXRjaCAmJiBtYXRjaFsyXVxuXHRcdH07XG5cdH0pO1xuXG5cdHBmLnBhcnNlU2V0ID0gZnVuY3Rpb24oIHNldCApIHtcblx0XHRpZiAoICFzZXQuY2FuZHMgKSB7XG5cdFx0XHRzZXQuY2FuZHMgPSBwYXJzZVNyY3NldChzZXQuc3Jjc2V0LCBzZXQpO1xuXHRcdH1cblx0XHRyZXR1cm4gc2V0LmNhbmRzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm5zIDFlbSBpbiBjc3MgcHggZm9yIGh0bWwvYm9keSBkZWZhdWx0IHNpemVcblx0ICogZnVuY3Rpb24gdGFrZW4gZnJvbSByZXNwb25kanNcblx0ICogQHJldHVybnMgeyp8bnVtYmVyfVxuXHQgKi9cblx0cGYuZ2V0RW1WYWx1ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBib2R5O1xuXHRcdGlmICggIWVtaW5weCAmJiAoYm9keSA9IGRvY3VtZW50LmJvZHkpICkge1xuXHRcdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSxcblx0XHRcdFx0b3JpZ2luYWxIVE1MQ1NTID0gZG9jRWxlbS5zdHlsZS5jc3NUZXh0LFxuXHRcdFx0XHRvcmlnaW5hbEJvZHlDU1MgPSBib2R5LnN0eWxlLmNzc1RleHQ7XG5cblx0XHRcdGRpdi5zdHlsZS5jc3NUZXh0ID0gYmFzZVN0eWxlO1xuXG5cdFx0XHQvLyAxZW0gaW4gYSBtZWRpYSBxdWVyeSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRlZmF1bHQgZm9udCBzaXplIG9mIHRoZSBicm93c2VyXG5cdFx0XHQvLyByZXNldCBkb2NFbGVtIGFuZCBib2R5IHRvIGVuc3VyZSB0aGUgY29ycmVjdCB2YWx1ZSBpcyByZXR1cm5lZFxuXHRcdFx0ZG9jRWxlbS5zdHlsZS5jc3NUZXh0ID0gZnNDc3M7XG5cdFx0XHRib2R5LnN0eWxlLmNzc1RleHQgPSBmc0NzcztcblxuXHRcdFx0Ym9keS5hcHBlbmRDaGlsZCggZGl2ICk7XG5cdFx0XHRlbWlucHggPSBkaXYub2Zmc2V0V2lkdGg7XG5cdFx0XHRib2R5LnJlbW92ZUNoaWxkKCBkaXYgKTtcblxuXHRcdFx0Ly9hbHNvIHVwZGF0ZSBlbWlucHggYmVmb3JlIHJldHVybmluZ1xuXHRcdFx0ZW1pbnB4ID0gcGFyc2VGbG9hdCggZW1pbnB4LCAxMCApO1xuXG5cdFx0XHQvLyByZXN0b3JlIHRoZSBvcmlnaW5hbCB2YWx1ZXNcblx0XHRcdGRvY0VsZW0uc3R5bGUuY3NzVGV4dCA9IG9yaWdpbmFsSFRNTENTUztcblx0XHRcdGJvZHkuc3R5bGUuY3NzVGV4dCA9IG9yaWdpbmFsQm9keUNTUztcblxuXHRcdH1cblx0XHRyZXR1cm4gZW1pbnB4IHx8IDE2O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUYWtlcyBhIHN0cmluZyBvZiBzaXplcyBhbmQgcmV0dXJucyB0aGUgd2lkdGggaW4gcGl4ZWxzIGFzIGEgbnVtYmVyXG5cdCAqL1xuXHRwZi5jYWxjTGlzdExlbmd0aCA9IGZ1bmN0aW9uKCBzb3VyY2VTaXplTGlzdFN0ciApIHtcblx0XHQvLyBTcGxpdCB1cCBzb3VyY2Ugc2l6ZSBsaXN0LCBpZSAoIG1heC13aWR0aDogMzBlbSApIDEwMCUsICggbWF4LXdpZHRoOiA1MGVtICkgNTAlLCAzMyVcblx0XHQvL1xuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgKG1pbi13aWR0aDozMGVtKSBjYWxjKDMwJSAtIDE1cHgpXG5cdFx0aWYgKCAhKHNvdXJjZVNpemVMaXN0U3RyIGluIHNpemVMZW5ndGhDYWNoZSkgfHwgY2ZnLnVUICkge1xuXHRcdFx0dmFyIHdpbm5pbmdMZW5ndGggPSBwZi5jYWxjTGVuZ3RoKCBwYXJzZVNpemVzKCBzb3VyY2VTaXplTGlzdFN0ciApICk7XG5cblx0XHRcdHNpemVMZW5ndGhDYWNoZVsgc291cmNlU2l6ZUxpc3RTdHIgXSA9ICF3aW5uaW5nTGVuZ3RoID8gdW5pdHMud2lkdGggOiB3aW5uaW5nTGVuZ3RoO1xuXHRcdH1cblxuXHRcdHJldHVybiBzaXplTGVuZ3RoQ2FjaGVbIHNvdXJjZVNpemVMaXN0U3RyIF07XG5cdH07XG5cblx0LyoqXG5cdCAqIFRha2VzIGEgY2FuZGlkYXRlIG9iamVjdCB3aXRoIGEgc3Jjc2V0IHByb3BlcnR5IGluIHRoZSBmb3JtIG9mIHVybC9cblx0ICogZXguIFwiaW1hZ2VzL3BpYy1tZWRpdW0ucG5nIDF4LCBpbWFnZXMvcGljLW1lZGl1bS0yeC5wbmcgMnhcIiBvclxuXHQgKiAgICAgXCJpbWFnZXMvcGljLW1lZGl1bS5wbmcgNDAwdywgaW1hZ2VzL3BpYy1tZWRpdW0tMngucG5nIDgwMHdcIiBvclxuXHQgKiAgICAgXCJpbWFnZXMvcGljLXNtYWxsLnBuZ1wiXG5cdCAqIEdldCBhbiBhcnJheSBvZiBpbWFnZSBjYW5kaWRhdGVzIGluIHRoZSBmb3JtIG9mXG5cdCAqICAgICAge3VybDogXCIvZm9vL2Jhci5wbmdcIiwgcmVzb2x1dGlvbjogMX1cblx0ICogd2hlcmUgcmVzb2x1dGlvbiBpcyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLTMvI3Jlc29sdXRpb24tdmFsdWVcblx0ICogSWYgc2l6ZXMgaXMgc3BlY2lmaWVkLCByZXMgaXMgY2FsY3VsYXRlZFxuXHQgKi9cblx0cGYuc2V0UmVzID0gZnVuY3Rpb24oIHNldCApIHtcblx0XHR2YXIgY2FuZGlkYXRlcztcblx0XHRpZiAoIHNldCApIHtcblxuXHRcdFx0Y2FuZGlkYXRlcyA9IHBmLnBhcnNlU2V0KCBzZXQgKTtcblxuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBsZW4gPSBjYW5kaWRhdGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRzZXRSZXNvbHV0aW9uKCBjYW5kaWRhdGVzWyBpIF0sIHNldC5zaXplcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2FuZGlkYXRlcztcblx0fTtcblxuXHRwZi5zZXRSZXMucmVzID0gc2V0UmVzb2x1dGlvbjtcblxuXHRwZi5hcHBseVNldENhbmRpZGF0ZSA9IGZ1bmN0aW9uKCBjYW5kaWRhdGVzLCBpbWcgKSB7XG5cdFx0aWYgKCAhY2FuZGlkYXRlcy5sZW5ndGggKSB7cmV0dXJuO31cblx0XHR2YXIgY2FuZGlkYXRlLFxuXHRcdFx0aSxcblx0XHRcdGosXG5cdFx0XHRsZW5ndGgsXG5cdFx0XHRiZXN0Q2FuZGlkYXRlLFxuXHRcdFx0Y3VyU3JjLFxuXHRcdFx0Y3VyQ2FuLFxuXHRcdFx0Y2FuZGlkYXRlU3JjLFxuXHRcdFx0YWJvcnRDdXJTcmM7XG5cblx0XHR2YXIgaW1hZ2VEYXRhID0gaW1nWyBwZi5ucyBdO1xuXHRcdHZhciBkcHIgPSBwZi5EUFI7XG5cblx0XHRjdXJTcmMgPSBpbWFnZURhdGEuY3VyU3JjIHx8IGltZ1tjdXJTcmNQcm9wXTtcblxuXHRcdGN1ckNhbiA9IGltYWdlRGF0YS5jdXJDYW4gfHwgc2V0U3JjVG9DdXIoaW1nLCBjdXJTcmMsIGNhbmRpZGF0ZXNbMF0uc2V0KTtcblxuXHRcdC8vIGlmIHdlIGhhdmUgYSBjdXJyZW50IHNvdXJjZSwgd2UgbWlnaHQgZWl0aGVyIGJlY29tZSBsYXp5IG9yIGdpdmUgdGhpcyBzb3VyY2Ugc29tZSBhZHZhbnRhZ2Vcblx0XHRpZiAoIGN1ckNhbiAmJiBjdXJDYW4uc2V0ID09PSBjYW5kaWRhdGVzWyAwIF0uc2V0ICkge1xuXG5cdFx0XHQvLyBpZiBicm93c2VyIGNhbiBhYm9ydCBpbWFnZSByZXF1ZXN0IGFuZCB0aGUgaW1hZ2UgaGFzIGEgaGlnaGVyIHBpeGVsIGRlbnNpdHkgdGhhbiBuZWVkZWRcblx0XHRcdC8vIGFuZCB0aGlzIGltYWdlIGlzbid0IGRvd25sb2FkZWQgeWV0LCB3ZSBza2lwIG5leHQgcGFydCBhbmQgdHJ5IHRvIHNhdmUgYmFuZHdpZHRoXG5cdFx0XHRhYm9ydEN1clNyYyA9IChzdXBwb3J0QWJvcnQgJiYgIWltZy5jb21wbGV0ZSAmJiBjdXJDYW4ucmVzIC0gMC4xID4gZHByKTtcblxuXHRcdFx0aWYgKCAhYWJvcnRDdXJTcmMgKSB7XG5cdFx0XHRcdGN1ckNhbi5jYWNoZWQgPSB0cnVlO1xuXG5cdFx0XHRcdC8vIGlmIGN1cnJlbnQgY2FuZGlkYXRlIGlzIFwiYmVzdFwiLCBcImJldHRlclwiIG9yIFwib2theVwiLFxuXHRcdFx0XHQvLyBzZXQgaXQgdG8gYmVzdENhbmRpZGF0ZVxuXHRcdFx0XHRpZiAoIGN1ckNhbi5yZXMgPj0gZHByICkge1xuXHRcdFx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjdXJDYW47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICFiZXN0Q2FuZGlkYXRlICkge1xuXG5cdFx0XHRjYW5kaWRhdGVzLnNvcnQoIGFzY2VuZGluZ1NvcnQgKTtcblxuXHRcdFx0bGVuZ3RoID0gY2FuZGlkYXRlcy5sZW5ndGg7XG5cdFx0XHRiZXN0Q2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgbGVuZ3RoIC0gMSBdO1xuXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRjYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBpIF07XG5cdFx0XHRcdGlmICggY2FuZGlkYXRlLnJlcyA+PSBkcHIgKSB7XG5cdFx0XHRcdFx0aiA9IGkgLSAxO1xuXG5cdFx0XHRcdFx0Ly8gd2UgaGF2ZSBmb3VuZCB0aGUgcGVyZmVjdCBjYW5kaWRhdGUsXG5cdFx0XHRcdFx0Ly8gYnV0IGxldCdzIGltcHJvdmUgdGhpcyBhIGxpdHRsZSBiaXQgd2l0aCBzb21lIGFzc3VtcHRpb25zIDstKVxuXHRcdFx0XHRcdGlmIChjYW5kaWRhdGVzWyBqIF0gJiZcblx0XHRcdFx0XHRcdChhYm9ydEN1clNyYyB8fCBjdXJTcmMgIT09IHBmLm1ha2VVcmwoIGNhbmRpZGF0ZS51cmwgKSkgJiZcblx0XHRcdFx0XHRcdGNob29zZUxvd1JlcyhjYW5kaWRhdGVzWyBqIF0ucmVzLCBjYW5kaWRhdGUucmVzLCBkcHIsIGNhbmRpZGF0ZXNbIGogXS5jYWNoZWQpKSB7XG5cblx0XHRcdFx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBqIF07XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YmVzdENhbmRpZGF0ZSA9IGNhbmRpZGF0ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGJlc3RDYW5kaWRhdGUgKSB7XG5cblx0XHRcdGNhbmRpZGF0ZVNyYyA9IHBmLm1ha2VVcmwoIGJlc3RDYW5kaWRhdGUudXJsICk7XG5cblx0XHRcdGltYWdlRGF0YS5jdXJTcmMgPSBjYW5kaWRhdGVTcmM7XG5cdFx0XHRpbWFnZURhdGEuY3VyQ2FuID0gYmVzdENhbmRpZGF0ZTtcblxuXHRcdFx0aWYgKCBjYW5kaWRhdGVTcmMgIT09IGN1clNyYyApIHtcblx0XHRcdFx0cGYuc2V0U3JjKCBpbWcsIGJlc3RDYW5kaWRhdGUgKTtcblx0XHRcdH1cblx0XHRcdHBmLnNldFNpemUoIGltZyApO1xuXHRcdH1cblx0fTtcblxuXHRwZi5zZXRTcmMgPSBmdW5jdGlvbiggaW1nLCBiZXN0Q2FuZGlkYXRlICkge1xuXHRcdHZhciBvcmlnV2lkdGg7XG5cdFx0aW1nLnNyYyA9IGJlc3RDYW5kaWRhdGUudXJsO1xuXG5cdFx0Ly8gYWx0aG91Z2ggdGhpcyBpcyBhIHNwZWNpZmljIFNhZmFyaSBpc3N1ZSwgd2UgZG9uJ3Qgd2FudCB0byB0YWtlIHRvbyBtdWNoIGRpZmZlcmVudCBjb2RlIHBhdGhzXG5cdFx0aWYgKCBiZXN0Q2FuZGlkYXRlLnNldC50eXBlID09PSBcImltYWdlL3N2Zyt4bWxcIiApIHtcblx0XHRcdG9yaWdXaWR0aCA9IGltZy5zdHlsZS53aWR0aDtcblx0XHRcdGltZy5zdHlsZS53aWR0aCA9IChpbWcub2Zmc2V0V2lkdGggKyAxKSArIFwicHhcIjtcblxuXHRcdFx0Ly8gbmV4dCBsaW5lIG9ubHkgc2hvdWxkIHRyaWdnZXIgYSByZXBhaW50XG5cdFx0XHQvLyBpZi4uLiBpcyBvbmx5IGRvbmUgdG8gdHJpY2sgZGVhZCBjb2RlIHJlbW92YWxcblx0XHRcdGlmICggaW1nLm9mZnNldFdpZHRoICsgMSApIHtcblx0XHRcdFx0aW1nLnN0eWxlLndpZHRoID0gb3JpZ1dpZHRoO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRwZi5nZXRTZXQgPSBmdW5jdGlvbiggaW1nICkge1xuXHRcdHZhciBpLCBzZXQsIHN1cHBvcnRzVHlwZTtcblx0XHR2YXIgbWF0Y2ggPSBmYWxzZTtcblx0XHR2YXIgc2V0cyA9IGltZyBbIHBmLm5zIF0uc2V0cztcblxuXHRcdGZvciAoIGkgPSAwOyBpIDwgc2V0cy5sZW5ndGggJiYgIW1hdGNoOyBpKysgKSB7XG5cdFx0XHRzZXQgPSBzZXRzW2ldO1xuXG5cdFx0XHRpZiAoICFzZXQuc3Jjc2V0IHx8ICFwZi5tYXRjaGVzTWVkaWEoIHNldC5tZWRpYSApIHx8ICEoc3VwcG9ydHNUeXBlID0gcGYuc3VwcG9ydHNUeXBlKCBzZXQudHlwZSApKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3VwcG9ydHNUeXBlID09PSBcInBlbmRpbmdcIiApIHtcblx0XHRcdFx0c2V0ID0gc3VwcG9ydHNUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHRtYXRjaCA9IHNldDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXRjaDtcblx0fTtcblxuXHRwZi5wYXJzZVNldHMgPSBmdW5jdGlvbiggZWxlbWVudCwgcGFyZW50LCBvcHRpb25zICkge1xuXHRcdHZhciBzcmNzZXRBdHRyaWJ1dGUsIGltYWdlU2V0LCBpc1dEZXNjcmlwb3IsIHNyY3NldFBhcnNlZDtcblxuXHRcdHZhciBoYXNQaWN0dXJlID0gcGFyZW50ICYmIHBhcmVudC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIlBJQ1RVUkVcIjtcblx0XHR2YXIgaW1hZ2VEYXRhID0gZWxlbWVudFsgcGYubnMgXTtcblxuXHRcdGlmICggaW1hZ2VEYXRhLnNyYyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc3JjICkge1xuXHRcdFx0aW1hZ2VEYXRhLnNyYyA9IGdldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgXCJzcmNcIiApO1xuXHRcdFx0aWYgKCBpbWFnZURhdGEuc3JjICkge1xuXHRcdFx0XHRzZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIHNyY0F0dHIsIGltYWdlRGF0YS5zcmMgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlbW92ZUltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3JjQXR0ciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggaW1hZ2VEYXRhLnNyY3NldCA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc3Jjc2V0IHx8ICFwZi5zdXBTcmNzZXQgfHwgZWxlbWVudC5zcmNzZXQgKSB7XG5cdFx0XHRzcmNzZXRBdHRyaWJ1dGUgPSBnZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIFwic3Jjc2V0XCIgKTtcblx0XHRcdGltYWdlRGF0YS5zcmNzZXQgPSBzcmNzZXRBdHRyaWJ1dGU7XG5cdFx0XHRzcmNzZXRQYXJzZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGltYWdlRGF0YS5zZXRzID0gW107XG5cblx0XHRpZiAoIGhhc1BpY3R1cmUgKSB7XG5cdFx0XHRpbWFnZURhdGEucGljID0gdHJ1ZTtcblx0XHRcdGdldEFsbFNvdXJjZUVsZW1lbnRzKCBwYXJlbnQsIGltYWdlRGF0YS5zZXRzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBpbWFnZURhdGEuc3Jjc2V0ICkge1xuXHRcdFx0aW1hZ2VTZXQgPSB7XG5cdFx0XHRcdHNyY3NldDogaW1hZ2VEYXRhLnNyY3NldCxcblx0XHRcdFx0c2l6ZXM6IGdldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgXCJzaXplc1wiIClcblx0XHRcdH07XG5cblx0XHRcdGltYWdlRGF0YS5zZXRzLnB1c2goIGltYWdlU2V0ICk7XG5cblx0XHRcdGlzV0Rlc2NyaXBvciA9IChhbHdheXNDaGVja1dEZXNjcmlwdG9yIHx8IGltYWdlRGF0YS5zcmMpICYmIHJlZ1dEZXNjLnRlc3QoaW1hZ2VEYXRhLnNyY3NldCB8fCBcIlwiKTtcblxuXHRcdFx0Ly8gYWRkIG5vcm1hbCBzcmMgYXMgY2FuZGlkYXRlLCBpZiBzb3VyY2UgaGFzIG5vIHcgZGVzY3JpcHRvclxuXHRcdFx0aWYgKCAhaXNXRGVzY3JpcG9yICYmIGltYWdlRGF0YS5zcmMgJiYgIWdldENhbmRpZGF0ZUZvclNyYyhpbWFnZURhdGEuc3JjLCBpbWFnZVNldCkgJiYgIWltYWdlU2V0LmhhczF4ICkge1xuXHRcdFx0XHRpbWFnZVNldC5zcmNzZXQgKz0gXCIsIFwiICsgaW1hZ2VEYXRhLnNyYztcblx0XHRcdFx0aW1hZ2VTZXQuY2FuZHMucHVzaCh7XG5cdFx0XHRcdFx0dXJsOiBpbWFnZURhdGEuc3JjLFxuXHRcdFx0XHRcdGQ6IDEsXG5cdFx0XHRcdFx0c2V0OiBpbWFnZVNldFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0gZWxzZSBpZiAoIGltYWdlRGF0YS5zcmMgKSB7XG5cdFx0XHRpbWFnZURhdGEuc2V0cy5wdXNoKCB7XG5cdFx0XHRcdHNyY3NldDogaW1hZ2VEYXRhLnNyYyxcblx0XHRcdFx0c2l6ZXM6IG51bGxcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpbWFnZURhdGEuY3VyQ2FuID0gbnVsbDtcblx0XHRpbWFnZURhdGEuY3VyU3JjID0gdW5kZWZpbmVkO1xuXG5cdFx0Ly8gaWYgaW1nIGhhcyBwaWN0dXJlIG9yIHRoZSBzcmNzZXQgd2FzIHJlbW92ZWQgb3IgaGFzIGEgc3Jjc2V0IGFuZCBkb2VzIG5vdCBzdXBwb3J0IHNyY3NldCBhdCBhbGxcblx0XHQvLyBvciBoYXMgYSB3IGRlc2NyaXB0b3IgKGFuZCBkb2VzIG5vdCBzdXBwb3J0IHNpemVzKSBzZXQgc3VwcG9ydCB0byBmYWxzZSB0byBldmFsdWF0ZVxuXHRcdGltYWdlRGF0YS5zdXBwb3J0ZWQgPSAhKCBoYXNQaWN0dXJlIHx8ICggaW1hZ2VTZXQgJiYgIXBmLnN1cFNyY3NldCApIHx8IChpc1dEZXNjcmlwb3IgJiYgIXBmLnN1cFNpemVzKSApO1xuXG5cdFx0aWYgKCBzcmNzZXRQYXJzZWQgJiYgcGYuc3VwU3Jjc2V0ICYmICFpbWFnZURhdGEuc3VwcG9ydGVkICkge1xuXHRcdFx0aWYgKCBzcmNzZXRBdHRyaWJ1dGUgKSB7XG5cdFx0XHRcdHNldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3Jjc2V0QXR0ciwgc3Jjc2V0QXR0cmlidXRlICk7XG5cdFx0XHRcdGVsZW1lbnQuc3Jjc2V0ID0gXCJcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlbW92ZUltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3Jjc2V0QXR0ciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpbWFnZURhdGEuc3VwcG9ydGVkICYmICFpbWFnZURhdGEuc3Jjc2V0ICYmICgoIWltYWdlRGF0YS5zcmMgJiYgZWxlbWVudC5zcmMpIHx8ICBlbGVtZW50LnNyYyAhPT0gcGYubWFrZVVybChpbWFnZURhdGEuc3JjKSkpIHtcblx0XHRcdGlmIChpbWFnZURhdGEuc3JjID09PSBudWxsKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zcmMgPSBpbWFnZURhdGEuc3JjO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGltYWdlRGF0YS5wYXJzZWQgPSB0cnVlO1xuXHR9O1xuXG5cdHBmLmZpbGxJbWcgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG5cdFx0dmFyIGltYWdlRGF0YTtcblx0XHR2YXIgZXh0cmVtZSA9IG9wdGlvbnMucmVzZWxlY3QgfHwgb3B0aW9ucy5yZWV2YWx1YXRlO1xuXG5cdFx0Ly8gZXhwYW5kbyBmb3IgY2FjaGluZyBkYXRhIG9uIHRoZSBpbWdcblx0XHRpZiAoICFlbGVtZW50WyBwZi5ucyBdICkge1xuXHRcdFx0ZWxlbWVudFsgcGYubnMgXSA9IHt9O1xuXHRcdH1cblxuXHRcdGltYWdlRGF0YSA9IGVsZW1lbnRbIHBmLm5zIF07XG5cblx0XHQvLyBpZiB0aGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGV2YWx1YXRlZCwgc2tpcCBpdFxuXHRcdC8vIHVubGVzcyBgb3B0aW9ucy5yZWV2YWx1YXRlYCBpcyBzZXQgdG8gdHJ1ZSAoIHRoaXMsIGZvciBleGFtcGxlLFxuXHRcdC8vIGlzIHNldCB0byB0cnVlIHdoZW4gcnVubmluZyBgcGljdHVyZWZpbGxgIG9uIGByZXNpemVgICkuXG5cdFx0aWYgKCAhZXh0cmVtZSAmJiBpbWFnZURhdGEuZXZhbGVkID09PSBldmFsSWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCAhaW1hZ2VEYXRhLnBhcnNlZCB8fCBvcHRpb25zLnJlZXZhbHVhdGUgKSB7XG5cdFx0XHRwZi5wYXJzZVNldHMoIGVsZW1lbnQsIGVsZW1lbnQucGFyZW50Tm9kZSwgb3B0aW9ucyApO1xuXHRcdH1cblxuXHRcdGlmICggIWltYWdlRGF0YS5zdXBwb3J0ZWQgKSB7XG5cdFx0XHRhcHBseUJlc3RDYW5kaWRhdGUoIGVsZW1lbnQgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW1hZ2VEYXRhLmV2YWxlZCA9IGV2YWxJZDtcblx0XHR9XG5cdH07XG5cblx0cGYuc2V0dXBSdW4gPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoICFhbHJlYWR5UnVuIHx8IGlzVndEaXJ0eSB8fCAoRFBSICE9PSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykgKSB7XG5cdFx0XHR1cGRhdGVNZXRyaWNzKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIElmIHBpY3R1cmUgaXMgc3VwcG9ydGVkLCB3ZWxsLCB0aGF0J3MgYXdlc29tZS5cblx0aWYgKCBwZi5zdXBQaWN0dXJlICkge1xuXHRcdHBpY3R1cmVmaWxsID0gbm9vcDtcblx0XHRwZi5maWxsSW1nID0gbm9vcDtcblx0fSBlbHNlIHtcblxuXHRcdCAvLyBTZXQgdXAgcGljdHVyZSBwb2x5ZmlsbCBieSBwb2xsaW5nIHRoZSBkb2N1bWVudFxuXHRcdChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpc0RvbVJlYWR5O1xuXHRcdFx0dmFyIHJlZ1JlYWR5ID0gd2luZG93LmF0dGFjaEV2ZW50ID8gL2QkfF5jLyA6IC9kJHxeY3xeaS87XG5cblx0XHRcdHZhciBydW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlIHx8IFwiXCI7XG5cblx0XHRcdFx0dGltZXJJZCA9IHNldFRpbWVvdXQocnVuLCByZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIiA/IDIwMCA6ICA5OTkpO1xuXHRcdFx0XHRpZiAoIGRvY3VtZW50LmJvZHkgKSB7XG5cdFx0XHRcdFx0cGYuZmlsbEltZ3MoKTtcblx0XHRcdFx0XHRpc0RvbVJlYWR5ID0gaXNEb21SZWFkeSB8fCByZWdSZWFkeS50ZXN0KHJlYWR5U3RhdGUpO1xuXHRcdFx0XHRcdGlmICggaXNEb21SZWFkeSApIHtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCggdGltZXJJZCApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgdGltZXJJZCA9IHNldFRpbWVvdXQocnVuLCBkb2N1bWVudC5ib2R5ID8gOSA6IDk5KTtcblxuXHRcdFx0Ly8gQWxzbyBhdHRhY2ggcGljdHVyZWZpbGwgb24gcmVzaXplIGFuZCByZWFkeXN0YXRlY2hhbmdlXG5cdFx0XHQvLyBodHRwOi8vbW9kZXJuamF2YXNjcmlwdC5ibG9nc3BvdC5jb20vMjAxMy8wOC9idWlsZGluZy1iZXR0ZXItZGVib3VuY2UuaHRtbFxuXHRcdFx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuXHRcdFx0XHR2YXIgdGltZW91dCwgdGltZXN0YW1wO1xuXHRcdFx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgbGFzdCA9IChuZXcgRGF0ZSgpKSAtIHRpbWVzdGFtcDtcblxuXHRcdFx0XHRcdGlmIChsYXN0IDwgd2FpdCkge1xuXHRcdFx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRcdFx0XHRmdW5jKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0XHRcdFx0aWYgKCF0aW1lb3V0KSB7XG5cdFx0XHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHRcdHZhciBsYXN0Q2xpZW50V2lkdGggPSBkb2NFbGVtLmNsaWVudEhlaWdodDtcblx0XHRcdHZhciBvblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpc1Z3RGlydHkgPSBNYXRoLm1heCh3aW5kb3cuaW5uZXJXaWR0aCB8fCAwLCBkb2NFbGVtLmNsaWVudFdpZHRoKSAhPT0gdW5pdHMud2lkdGggfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgIT09IGxhc3RDbGllbnRXaWR0aDtcblx0XHRcdFx0bGFzdENsaWVudFdpZHRoID0gZG9jRWxlbS5jbGllbnRIZWlnaHQ7XG5cdFx0XHRcdGlmICggaXNWd0RpcnR5ICkge1xuXHRcdFx0XHRcdHBmLmZpbGxJbWdzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdG9uKCB3aW5kb3csIFwicmVzaXplXCIsIGRlYm91bmNlKG9uUmVzaXplLCA5OSApICk7XG5cdFx0XHRvbiggZG9jdW1lbnQsIFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBydW4gKTtcblx0XHR9KSgpO1xuXHR9XG5cblx0cGYucGljdHVyZWZpbGwgPSBwaWN0dXJlZmlsbDtcblx0Ly91c2UgdGhpcyBpbnRlcm5hbGx5IGZvciBlYXN5IG1vbmtleSBwYXRjaGluZy9wZXJmb3JtYW5jZSB0ZXN0aW5nXG5cdHBmLmZpbGxJbWdzID0gcGljdHVyZWZpbGw7XG5cdHBmLnRlYXJkb3duUnVuID0gbm9vcDtcblxuXHQvKiBleHBvc2UgbWV0aG9kcyBmb3IgdGVzdGluZyAqL1xuXHRwaWN0dXJlZmlsbC5fID0gcGY7XG5cblx0d2luZG93LnBpY3R1cmVmaWxsQ0ZHID0ge1xuXHRcdHBmOiBwZixcblx0XHRwdXNoOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHR2YXIgbmFtZSA9IGFyZ3Muc2hpZnQoKTtcblx0XHRcdGlmICh0eXBlb2YgcGZbbmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRwZltuYW1lXS5hcHBseShwZiwgYXJncyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjZmdbbmFtZV0gPSBhcmdzWzBdO1xuXHRcdFx0XHRpZiAoYWxyZWFkeVJ1bikge1xuXHRcdFx0XHRcdHBmLmZpbGxJbWdzKCB7IHJlc2VsZWN0OiB0cnVlIH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHR3aGlsZSAoc2V0T3B0aW9ucyAmJiBzZXRPcHRpb25zLmxlbmd0aCkge1xuXHRcdHdpbmRvdy5waWN0dXJlZmlsbENGRy5wdXNoKHNldE9wdGlvbnMuc2hpZnQoKSk7XG5cdH1cblxuXHQvKiBleHBvc2UgcGljdHVyZWZpbGwgKi9cblx0d2luZG93LnBpY3R1cmVmaWxsID0gcGljdHVyZWZpbGw7XG5cblx0LyogZXhwb3NlIHBpY3R1cmVmaWxsICovXG5cdGlmICggdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0Ly8gQ29tbW9uSlMsIGp1c3QgZXhwb3J0XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBwaWN0dXJlZmlsbDtcblx0fSBlbHNlIGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cdFx0Ly8gQU1EIHN1cHBvcnRcblx0XHRkZWZpbmUoIFwicGljdHVyZWZpbGxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBwaWN0dXJlZmlsbDsgfSApO1xuXHR9XG5cblx0Ly8gSUU4IGV2YWxzIHRoaXMgc3luYywgc28gaXQgbXVzdCBiZSB0aGUgbGFzdCB0aGluZyB3ZSBkb1xuXHRpZiAoICFwZi5zdXBQaWN0dXJlICkge1xuXHRcdHR5cGVzWyBcImltYWdlL3dlYnBcIiBdID0gZGV0ZWN0VHlwZVN1cHBvcnQoXCJpbWFnZS93ZWJwXCIsIFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmtvQUFBQlhSVUpRVmxBNFdBb0FBQUFRQUFBQUFBQUFBQUFBUVV4UVNBd0FBQUFCQnhBUi9ROUVSUDhEQUFCV1VEZ2dHQUFBQURBQkFKMEJLZ0VBQVFBREFEUWxwQUFEY0FEKysvMVFBQT09XCIgKTtcblx0fVxuXG59ICkoIHdpbmRvdywgZG9jdW1lbnQgKTtcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvKipcbiAqIFplbnNjcm9sbCA0LjAuMlxuICogaHR0cHM6Ly9naXRodWIuY29tL3plbmdhYm9yL3plbnNjcm9sbC9cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNeKAkzIwMTggR2Fib3IgTGVuYXJkXG4gKlxuICogVGhpcyBpcyBmcmVlIGFuZCB1bmVuY3VtYmVyZWQgc29mdHdhcmUgcmVsZWFzZWQgaW50byB0aGUgcHVibGljIGRvbWFpbi5cbiAqIFxuICogQW55b25lIGlzIGZyZWUgdG8gY29weSwgbW9kaWZ5LCBwdWJsaXNoLCB1c2UsIGNvbXBpbGUsIHNlbGwsIG9yXG4gKiBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUsIGVpdGhlciBpbiBzb3VyY2UgY29kZSBmb3JtIG9yIGFzIGEgY29tcGlsZWRcbiAqIGJpbmFyeSwgZm9yIGFueSBwdXJwb3NlLCBjb21tZXJjaWFsIG9yIG5vbi1jb21tZXJjaWFsLCBhbmQgYnkgYW55XG4gKiBtZWFucy5cbiAqIFxuICogSW4ganVyaXNkaWN0aW9ucyB0aGF0IHJlY29nbml6ZSBjb3B5cmlnaHQgbGF3cywgdGhlIGF1dGhvciBvciBhdXRob3JzXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGRlZGljYXRlIGFueSBhbmQgYWxsIGNvcHlyaWdodCBpbnRlcmVzdCBpbiB0aGVcbiAqIHNvZnR3YXJlIHRvIHRoZSBwdWJsaWMgZG9tYWluLiBXZSBtYWtlIHRoaXMgZGVkaWNhdGlvbiBmb3IgdGhlIGJlbmVmaXRcbiAqIG9mIHRoZSBwdWJsaWMgYXQgbGFyZ2UgYW5kIHRvIHRoZSBkZXRyaW1lbnQgb2Ygb3VyIGhlaXJzIGFuZFxuICogc3VjY2Vzc29ycy4gV2UgaW50ZW5kIHRoaXMgZGVkaWNhdGlvbiB0byBiZSBhbiBvdmVydCBhY3Qgb2ZcbiAqIHJlbGlucXVpc2htZW50IGluIHBlcnBldHVpdHkgb2YgYWxsIHByZXNlbnQgYW5kIGZ1dHVyZSByaWdodHMgdG8gdGhpc1xuICogc29mdHdhcmUgdW5kZXIgY29weXJpZ2h0IGxhdy5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxuICogSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1JcbiAqIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLFxuICogQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gKiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgcmVmZXIgdG8gPGh0dHA6Ly91bmxpY2Vuc2Uub3JnPlxuICogXG4gKi9cblxuLypqc2hpbnQgZGV2ZWw6dHJ1ZSwgYXNpOnRydWUgKi9cblxuLypnbG9iYWwgZGVmaW5lLCBtb2R1bGUgKi9cblxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KCkpXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG5cdH0gZWxzZSB7XG5cdFx0KGZ1bmN0aW9uIGluc3RhbGwoKSB7XG5cdFx0XHQvLyBUbyBtYWtlIHN1cmUgWmVuc2Nyb2xsIGNhbiBiZSByZWZlcmVuY2VkIGZyb20gdGhlIGhlYWRlciwgYmVmb3JlIGBib2R5YCBpcyBhdmFpbGFibGVcblx0XHRcdGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XG5cdFx0XHRcdHJvb3QuemVuc2Nyb2xsID0gZmFjdG9yeSgpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyByZXRyeSA5bXMgbGF0ZXJcblx0XHRcdFx0c2V0VGltZW91dChpbnN0YWxsLCA5KVxuXHRcdFx0fVxuXHRcdH0pKClcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cdFwidXNlIHN0cmljdFwiXG5cblxuXHQvLyBEZXRlY3QgaWYgdGhlIGJyb3dzZXIgYWxyZWFkeSBzdXBwb3J0cyBuYXRpdmUgc21vb3RoIHNjcm9sbGluZyAoZS5nLiwgRmlyZWZveCAzNisgYW5kIENocm9tZSA0OSspIGFuZCBpdCBpcyBlbmFibGVkOlxuXHR2YXIgaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24gPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdHJldHVybiBlbGVtICYmIFwiZ2V0Q29tcHV0ZWRTdHlsZVwiIGluIHdpbmRvdyAmJlxuXHRcdFx0d2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSlbXCJzY3JvbGwtYmVoYXZpb3JcIl0gPT09IFwic21vb3RoXCJcblx0fVxuXG5cblx0Ly8gRXhpdCBpZiBpdOKAmXMgbm90IGEgYnJvd3NlciBlbnZpcm9ubWVudDpcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfHwgIShcImRvY3VtZW50XCIgaW4gd2luZG93KSkge1xuXHRcdHJldHVybiB7fVxuXHR9XG5cblxuXHR2YXIgbWFrZVNjcm9sbGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KSB7XG5cblx0XHQvLyBVc2UgZGVmYXVsdHMgaWYgbm90IHByb3ZpZGVkXG5cdFx0ZGVmYXVsdER1cmF0aW9uID0gZGVmYXVsdER1cmF0aW9uIHx8IDk5OSAvL21zXG5cdFx0aWYgKCFlZGdlT2Zmc2V0ICYmIGVkZ2VPZmZzZXQgIT09IDApIHtcblx0XHRcdC8vIFdoZW4gc2Nyb2xsaW5nLCB0aGlzIGFtb3VudCBvZiBkaXN0YW5jZSBpcyBrZXB0IGZyb20gdGhlIGVkZ2VzIG9mIHRoZSBjb250YWluZXI6XG5cdFx0XHRlZGdlT2Zmc2V0ID0gOSAvL3B4XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxpbmcgdGhlIGxpZmUtY3ljbGUgb2YgdGhlIHNjcm9sbGVyXG5cdFx0dmFyIHNjcm9sbFRpbWVvdXRJZFxuXHRcdHZhciBzZXRTY3JvbGxUaW1lb3V0SWQgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcblx0XHRcdHNjcm9sbFRpbWVvdXRJZCA9IG5ld1ZhbHVlXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU3RvcCB0aGUgY3VycmVudCBzbW9vdGggc2Nyb2xsIG9wZXJhdGlvbiBpbW1lZGlhdGVseVxuXHRcdCAqL1xuXHRcdHZhciBzdG9wU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXRJZClcblx0XHRcdHNldFNjcm9sbFRpbWVvdXRJZCgwKVxuXHRcdH1cblxuXHRcdHZhciBnZXRUb3BXaXRoRWRnZU9mZnNldCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5tYXgoMCwgY29udGFpbmVyLmdldFRvcE9mKGVsZW0pIC0gZWRnZU9mZnNldClcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIHRvIGEgc3BlY2lmaWMgdmVydGljYWwgcG9zaXRpb24gaW4gdGhlIGRvY3VtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHt0YXJnZXRZfSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2l0aGluIHRoZSBkb2N1bWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiAgICAgICAgSWYgbm90IHByb3ZpZGVkIHRoZSBkZWZhdWx0IGR1cmF0aW9uIGlzIHVzZWQuXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb1kgPSBmdW5jdGlvbiAodGFyZ2V0WSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0c3RvcFNjcm9sbCgpXG5cdFx0XHRpZiAoZHVyYXRpb24gPT09IDAgfHwgKGR1cmF0aW9uICYmIGR1cmF0aW9uIDwgMCkgfHwgaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24oY29udGFpbmVyLmJvZHkpKSB7XG5cdFx0XHRcdGNvbnRhaW5lci50b1kodGFyZ2V0WSlcblx0XHRcdFx0aWYgKG9uRG9uZSkge1xuXHRcdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBzdGFydFkgPSBjb250YWluZXIuZ2V0WSgpXG5cdFx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGgubWF4KDAsIHRhcmdldFkpIC0gc3RhcnRZXG5cdFx0XHRcdHZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuXHRcdFx0XHRkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IE1hdGgubWluKE1hdGguYWJzKGRpc3RhbmNlKSwgZGVmYXVsdER1cmF0aW9uKTtcblx0XHRcdFx0KGZ1bmN0aW9uIGxvb3BTY3JvbGwoKSB7XG5cdFx0XHRcdFx0c2V0U2Nyb2xsVGltZW91dElkKHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHBlcmNlbnRhZ2U6XG5cdFx0XHRcdFx0XHR2YXIgcCA9IE1hdGgubWluKDEsIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbilcblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgYWJzb2x1dGUgdmVydGljYWwgcG9zaXRpb246XG5cdFx0XHRcdFx0XHR2YXIgeSA9IE1hdGgubWF4KDAsIE1hdGguZmxvb3Ioc3RhcnRZICsgZGlzdGFuY2UqKHAgPCAwLjUgPyAyKnAqcCA6IHAqKDQgLSBwKjIpLTEpKSlcblx0XHRcdFx0XHRcdGNvbnRhaW5lci50b1koeSlcblx0XHRcdFx0XHRcdGlmIChwIDwgMSAmJiAoY29udGFpbmVyLmdldEhlaWdodCgpICsgeSkgPCBjb250YWluZXIuYm9keS5zY3JvbGxIZWlnaHQpIHtcblx0XHRcdFx0XHRcdFx0bG9vcFNjcm9sbCgpXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KHN0b3BTY3JvbGwsIDk5KSAvLyB3aXRoIGNvb2xkb3duIHRpbWVcblx0XHRcdFx0XHRcdFx0aWYgKG9uRG9uZSkge1xuXHRcdFx0XHRcdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCA5KSlcblx0XHRcdFx0fSkoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gdGhlIHRvcCBvZiBhIHNwZWNpZmljIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50IHRvIHNjcm9sbCB0by5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvRWxlbSA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHRzY3JvbGxUb1koZ2V0VG9wV2l0aEVkZ2VPZmZzZXQoZWxlbSksIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyBhbiBlbGVtZW50IGludG8gdmlldyBpZiBuZWNlc3NhcnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbiAoZWxlbSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0dmFyIGVsZW1IZWlnaHQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuXHRcdFx0dmFyIGVsZW1Cb3R0b20gPSBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgKyBlbGVtSGVpZ2h0XG5cdFx0XHR2YXIgY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmdldEhlaWdodCgpXG5cdFx0XHR2YXIgeSA9IGNvbnRhaW5lci5nZXRZKClcblx0XHRcdHZhciBjb250YWluZXJCb3R0b20gPSB5ICsgY29udGFpbmVySGVpZ2h0XG5cdFx0XHRpZiAoZ2V0VG9wV2l0aEVkZ2VPZmZzZXQoZWxlbSkgPCB5IHx8IChlbGVtSGVpZ2h0ICsgZWRnZU9mZnNldCkgPiBjb250YWluZXJIZWlnaHQpIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBjbGlwcGVkIGF0IHRvcCBvciBpcyBoaWdoZXIgdGhhbiBzY3JlZW4uXG5cdFx0XHRcdHNjcm9sbFRvRWxlbShlbGVtLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdFx0fSBlbHNlIGlmICgoZWxlbUJvdHRvbSArIGVkZ2VPZmZzZXQpID4gY29udGFpbmVyQm90dG9tKSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgY2xpcHBlZCBhdCB0aGUgYm90dG9tLlxuXHRcdFx0XHRzY3JvbGxUb1koZWxlbUJvdHRvbSAtIGNvbnRhaW5lckhlaWdodCArIGVkZ2VPZmZzZXQsIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0XHR9IGVsc2UgaWYgKG9uRG9uZSkge1xuXHRcdFx0XHRvbkRvbmUoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gdGhlIGNlbnRlciBvZiBhbiBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtlbGVtfSBUaGUgZWxlbWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29mZnNldH0gT3B0aW9uYWxseSB0aGUgb2Zmc2V0IG9mIHRoZSB0b3Agb2YgdGhlIGVsZW1lbnQgZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW4uXG5cdFx0ICogICAgICAgIEEgdmFsdWUgb2YgMCBpcyBpZ25vcmVkLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9DZW50ZXJPZiA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb2Zmc2V0LCBvbkRvbmUpIHtcblx0XHRcdHNjcm9sbFRvWShNYXRoLm1heCgwLCBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgLSBjb250YWluZXIuZ2V0SGVpZ2h0KCkvMiArIChvZmZzZXQgfHwgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQvMikpLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENoYW5nZXMgZGVmYXVsdCBzZXR0aW5ncyBmb3IgdGhpcyBzY3JvbGxlci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bmV3RGVmYXVsdER1cmF0aW9ufSBPcHRpb25hbGx5IGEgbmV3IHZhbHVlIGZvciBkZWZhdWx0IGR1cmF0aW9uLCB1c2VkIGZvciBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC5cblx0XHQgKiAgICAgICAgSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0XHQgKiBAcGFyYW0ge25ld0VkZ2VPZmZzZXR9IE9wdGlvbmFsbHkgYSBuZXcgdmFsdWUgZm9yIHRoZSBlZGdlIG9mZnNldCwgdXNlZCBieSBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC4gSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0XHQgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCB2YWx1ZXMuXG5cdFx0ICovXG5cdFx0dmFyIHNldHVwID0gZnVuY3Rpb24gKG5ld0RlZmF1bHREdXJhdGlvbiwgbmV3RWRnZU9mZnNldCkge1xuXHRcdFx0aWYgKG5ld0RlZmF1bHREdXJhdGlvbiA9PT0gMCB8fCBuZXdEZWZhdWx0RHVyYXRpb24pIHtcblx0XHRcdFx0ZGVmYXVsdER1cmF0aW9uID0gbmV3RGVmYXVsdER1cmF0aW9uXG5cdFx0XHR9XG5cdFx0XHRpZiAobmV3RWRnZU9mZnNldCA9PT0gMCB8fCBuZXdFZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdGVkZ2VPZmZzZXQgPSBuZXdFZGdlT2Zmc2V0XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkZWZhdWx0RHVyYXRpb246IGRlZmF1bHREdXJhdGlvbixcblx0XHRcdFx0ZWRnZU9mZnNldDogZWRnZU9mZnNldFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRzZXR1cDogc2V0dXAsXG5cdFx0XHR0bzogc2Nyb2xsVG9FbGVtLFxuXHRcdFx0dG9ZOiBzY3JvbGxUb1ksXG5cdFx0XHRpbnRvVmlldzogc2Nyb2xsSW50b1ZpZXcsXG5cdFx0XHRjZW50ZXI6IHNjcm9sbFRvQ2VudGVyT2YsXG5cdFx0XHRzdG9wOiBzdG9wU2Nyb2xsLFxuXHRcdFx0bW92aW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiAhIXNjcm9sbFRpbWVvdXRJZCB9LFxuXHRcdFx0Z2V0WTogY29udGFpbmVyLmdldFksXG5cdFx0XHRnZXRUb3BPZjogY29udGFpbmVyLmdldFRvcE9mXG5cdFx0fVxuXG5cdH1cblxuXG5cdHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5cdHZhciBnZXREb2NZID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LnNjcm9sbFkgfHwgZG9jRWxlbS5zY3JvbGxUb3AgfVxuXG5cdC8vIENyZWF0ZSBhIHNjcm9sbGVyIGZvciB0aGUgZG9jdW1lbnQ6XG5cdHZhciB6ZW5zY3JvbGwgPSBtYWtlU2Nyb2xsZXIoe1xuXHRcdGJvZHk6IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuYm9keSxcblx0XHR0b1k6IGZ1bmN0aW9uICh5KSB7IHdpbmRvdy5zY3JvbGxUbygwLCB5KSB9LFxuXHRcdGdldFk6IGdldERvY1ksXG5cdFx0Z2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgfSxcblx0XHRnZXRUb3BPZjogZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZ2V0RG9jWSgpIC0gZG9jRWxlbS5vZmZzZXRUb3AgfVxuXHR9KVxuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBzY3JvbGxlciBmcm9tIHRoZSBwcm92aWRlZCBjb250YWluZXIgZWxlbWVudCAoZS5nLiwgYSBESVYpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c2Nyb2xsQ29udGFpbmVyfSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2l0aGluIHRoZSBkb2N1bWVudC5cblx0ICogQHBhcmFtIHtkZWZhdWx0RHVyYXRpb259IE9wdGlvbmFsbHkgYSB2YWx1ZSBmb3IgZGVmYXVsdCBkdXJhdGlvbiwgdXNlZCBmb3IgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuXG5cdCAqICAgICAgICBJZ25vcmVkIGlmIDAgb3IgbnVsbCBvciB1bmRlZmluZWQuXG5cdCAqIEBwYXJhbSB7ZWRnZU9mZnNldH0gT3B0aW9uYWxseSBhIHZhbHVlIGZvciB0aGUgZWRnZSBvZmZzZXQsIHVzZWQgYnkgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuIFxuXHQgKiAgICAgICAgSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0ICogQHJldHVybnMgQSBzY3JvbGxlciBvYmplY3QsIHNpbWlsYXIgdG8gYHplbnNjcm9sbGAgYnV0IGNvbnRyb2xsaW5nIHRoZSBwcm92aWRlZCBlbGVtZW50LlxuXHQgKi9cblx0emVuc2Nyb2xsLmNyZWF0ZVNjcm9sbGVyID0gZnVuY3Rpb24gKHNjcm9sbENvbnRhaW5lciwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KSB7XG5cdFx0cmV0dXJuIG1ha2VTY3JvbGxlcih7XG5cdFx0XHRib2R5OiBzY3JvbGxDb250YWluZXIsXG5cdFx0XHR0b1k6IGZ1bmN0aW9uICh5KSB7IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgPSB5IH0sXG5cdFx0XHRnZXRZOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wIH0sXG5cdFx0XHRnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hdGgubWluKHNjcm9sbENvbnRhaW5lci5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCkgfSxcblx0XHRcdGdldFRvcE9mOiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5vZmZzZXRUb3AgfVxuXHRcdH0sIGRlZmF1bHREdXJhdGlvbiwgZWRnZU9mZnNldClcblx0fVxuXG5cblx0Ly8gQXV0b21hdGljIGxpbmstc21vb3RoaW5nIG9uIGFjaG9yc1xuXHQvLyBFeGNsdWRlIElFOC0gb3Igd2hlbiBuYXRpdmUgaXMgZW5hYmxlZCBvciBaZW5zY3JvbGwgYXV0by0gaXMgZGlzYWJsZWRcblx0aWYgKFwiYWRkRXZlbnRMaXN0ZW5lclwiIGluIHdpbmRvdyAmJiAhd2luZG93Lm5vWmVuc21vb3RoICYmICFpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbihkb2N1bWVudC5ib2R5KSkge1xuXG5cdFx0dmFyIGlzSGlzdG9yeVN1cHBvcnRlZCA9IFwiaGlzdG9yeVwiIGluIHdpbmRvdyAmJiBcInB1c2hTdGF0ZVwiIGluIGhpc3Rvcnlcblx0XHR2YXIgaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCA9IGlzSGlzdG9yeVN1cHBvcnRlZCAmJiBcInNjcm9sbFJlc3RvcmF0aW9uXCIgaW4gaGlzdG9yeVxuXG5cdFx0Ly8gT24gZmlyc3QgbG9hZCAmIHJlZnJlc2ggbWFrZSBzdXJlIHRoZSBicm93c2VyIHJlc3RvcmVzIHRoZSBwb3NpdGlvbiBmaXJzdFxuXHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCJcblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0XHQvLyBTZXQgaXQgdG8gbWFudWFsXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJtYW51YWxcIiB9LCA5KVxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRcdGlmIChldmVudC5zdGF0ZSAmJiBcInplbnNjcm9sbFlcIiBpbiBldmVudC5zdGF0ZSkge1xuXHRcdFx0XHRcdFx0emVuc2Nyb2xsLnRvWShldmVudC5zdGF0ZS56ZW5zY3JvbGxZKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgZmFsc2UpXG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBlZGdlIG9mZnNldCBvbiBmaXJzdCBsb2FkIGlmIG5lY2Vzc2FyeVxuXHRcdFx0Ly8gVGhpcyBtYXkgbm90IHdvcmsgb24gSUUgKG9yIG9sZGVyIGNvbXB1dGVyPykgYXMgaXQgcmVxdWlyZXMgbW9yZSB0aW1lb3V0LCBhcm91bmQgMTAwIG1zXG5cdFx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Ly8gQWRqdXN0bWVudCBpcyBvbmx5IG5lZWRlZCBpZiB0aGVyZSBpcyBhbiBlZGdlIG9mZnNldDpcblx0XHRcdFx0XHR2YXIgZWRnZU9mZnNldCA9IHplbnNjcm9sbC5zZXR1cCgpLmVkZ2VPZmZzZXRcblx0XHRcdFx0XHRpZiAoZWRnZU9mZnNldCkge1xuXHRcdFx0XHRcdFx0dmFyIHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMV0pXG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0RWxlbSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGFyZ2V0WSA9IE1hdGgubWF4KDAsIHplbnNjcm9sbC5nZXRUb3BPZih0YXJnZXRFbGVtKSAtIGVkZ2VPZmZzZXQpXG5cdFx0XHRcdFx0XHRcdHZhciBkaWZmID0gemVuc2Nyb2xsLmdldFkoKSAtIHRhcmdldFlcblx0XHRcdFx0XHRcdFx0Ly8gT25seSBkbyB0aGUgYWRqdXN0bWVudCBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IGNsb3NlIHRvIHRoZSBlbGVtZW50OlxuXHRcdFx0XHRcdFx0XHRpZiAoMCA8PSBkaWZmICYmIGRpZmYgPCA5ICkge1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCB0YXJnZXRZKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCA5KVxuXHRcdFx0fVxuXG5cdFx0fSwgZmFsc2UpXG5cblx0XHQvLyBIYW5kbGluZyBjbGlja3Mgb24gYW5jaG9yc1xuXHRcdHZhciBSRV9ub1plbnNtb290aCA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylub1plbnNtb290aChcXFxcc3wkKVwiKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHR2YXIgYW5jaG9yID0gZXZlbnQudGFyZ2V0XG5cdFx0XHR3aGlsZSAoYW5jaG9yICYmIGFuY2hvci50YWdOYW1lICE9PSBcIkFcIikge1xuXHRcdFx0XHRhbmNob3IgPSBhbmNob3IucGFyZW50Tm9kZVxuXHRcdFx0fVxuXHRcdFx0Ly8gTGV0IHRoZSBicm93c2VyIGhhbmRsZSB0aGUgY2xpY2sgaWYgaXQgd2Fzbid0IHdpdGggdGhlIHByaW1hcnkgYnV0dG9uLCBvciB3aXRoIHNvbWUgbW9kaWZpZXIga2V5czpcblx0XHRcdGlmICghYW5jaG9yIHx8IGV2ZW50LndoaWNoICE9PSAxIHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5hbHRLZXkpIHtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0XHQvLyBTYXZlIHRoZSBjdXJyZW50IHNjcm9sbGluZyBwb3NpdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCBmb3Igc2Nyb2xsIHJlc3RvcmF0aW9uOlxuXHRcdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdFx0dmFyIGhpc3RvcnlTdGF0ZSA9IGhpc3Rvcnkuc3RhdGUgJiYgdHlwZW9mIGhpc3Rvcnkuc3RhdGUgPT09IFwib2JqZWN0XCIgPyBoaXN0b3J5LnN0YXRlIDoge31cblx0XHRcdFx0aGlzdG9yeVN0YXRlLnplbnNjcm9sbFkgPSB6ZW5zY3JvbGwuZ2V0WSgpXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeVN0YXRlLCBcIlwiKVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Ly8gQXZvaWQgdGhlIENocm9tZSBTZWN1cml0eSBleGNlcHRpb24gb24gZmlsZSBwcm90b2NvbCwgZS5nLiwgZmlsZTovL2luZGV4Lmh0bWxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gRmluZCB0aGUgcmVmZXJlbmNlZCBJRDpcblx0XHRcdHZhciBocmVmID0gYW5jaG9yLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIlxuXHRcdFx0aWYgKGhyZWYuaW5kZXhPZihcIiNcIikgPT09IDAgJiYgIVJFX25vWmVuc21vb3RoLnRlc3QoYW5jaG9yLmNsYXNzTmFtZSkpIHtcblx0XHRcdFx0dmFyIHRhcmdldFkgPSAwXG5cdFx0XHRcdHZhciB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZi5zdWJzdHJpbmcoMSkpXG5cdFx0XHRcdGlmIChocmVmICE9PSBcIiNcIikge1xuXHRcdFx0XHRcdGlmICghdGFyZ2V0RWxlbSkge1xuXHRcdFx0XHRcdFx0Ly8gTGV0IHRoZSBicm93c2VyIGhhbmRsZSB0aGUgY2xpY2sgaWYgdGhlIHRhcmdldCBJRCBpcyBub3QgZm91bmQuXG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFyZ2V0WSA9IHplbnNjcm9sbC5nZXRUb3BPZih0YXJnZXRFbGVtKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0Ly8gQnkgZGVmYXVsdCB0cmlnZ2VyIHRoZSBicm93c2VyJ3MgYGhhc2hjaGFuZ2VgIGV2ZW50Li4uXG5cdFx0XHRcdHZhciBvbkRvbmUgPSBmdW5jdGlvbiAoKSB7IHdpbmRvdy5sb2NhdGlvbiA9IGhyZWYgfVxuXHRcdFx0XHQvLyAuLi51bmxlc3MgdGhlcmUgaXMgYW4gZWRnZSBvZmZzZXQgc3BlY2lmaWVkXG5cdFx0XHRcdHZhciBlZGdlT2Zmc2V0ID0gemVuc2Nyb2xsLnNldHVwKCkuZWRnZU9mZnNldFxuXHRcdFx0XHRpZiAoZWRnZU9mZnNldCkge1xuXHRcdFx0XHRcdHRhcmdldFkgPSBNYXRoLm1heCgwLCB0YXJnZXRZIC0gZWRnZU9mZnNldClcblx0XHRcdFx0XHRpZiAoaXNIaXN0b3J5U3VwcG9ydGVkKSB7XG5cdFx0XHRcdFx0XHRvbkRvbmUgPSBmdW5jdGlvbiAoKSB7IGhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCBocmVmKSB9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHplbnNjcm9sbC50b1kodGFyZ2V0WSwgbnVsbCwgb25Eb25lKVxuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKVxuXG5cdH1cblxuXG5cdHJldHVybiB6ZW5zY3JvbGxcblxuXG59KSk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13MjYwLmpwZ1wiOiBcIi4vc3JjL2ltZy9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXcyNjAuanBnXCIsXG5cdFwiLi9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXczMjAuanBnXCI6IFwiLi9zcmMvaW1nL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzMyMC5qcGdcIixcblx0XCIuL1dpa2lwZWRpYS1WaWV3ZXItdzI2MC5qcGdcIjogXCIuL3NyYy9pbWcvV2lraXBlZGlhLVZpZXdlci13MjYwLmpwZ1wiLFxuXHRcIi4vV2lraXBlZGlhLVZpZXdlci13MzIwLmpwZ1wiOiBcIi4vc3JjL2ltZy9XaWtpcGVkaWEtVmlld2VyLXczMjAuanBnXCIsXG5cdFwiLi9iYWNrLmpwZ1wiOiBcIi4vc3JjL2ltZy9iYWNrLmpwZ1wiLFxuXHRcIi4vZmFybS1saWZlLXcyNjAuanBnXCI6IFwiLi9zcmMvaW1nL2Zhcm0tbGlmZS13MjYwLmpwZ1wiLFxuXHRcIi4vZmFybS1saWZlLXczMjAuanBnXCI6IFwiLi9zcmMvaW1nL2Zhcm0tbGlmZS13MzIwLmpwZ1wiLFxuXHRcIi4vZmVzdC1zZWVrZXItMjYwLmpwZ1wiOiBcIi4vc3JjL2ltZy9mZXN0LXNlZWtlci0yNjAuanBnXCIsXG5cdFwiLi9mZXN0LXNlZWtlci0zMjAuanBnXCI6IFwiLi9zcmMvaW1nL2Zlc3Qtc2Vla2VyLTMyMC5qcGdcIixcblx0XCIuL2dsb2ItdGFzdGUtdzI2MC5qcGdcIjogXCIuL3NyYy9pbWcvZ2xvYi10YXN0ZS13MjYwLmpwZ1wiLFxuXHRcIi4vZ2xvYi10YXN0ZS13MzIwLmpwZ1wiOiBcIi4vc3JjL2ltZy9nbG9iLXRhc3RlLXczMjAuanBnXCIsXG5cdFwiLi9sb2dvLWltZy5wbmdcIjogXCIuL3NyYy9pbWcvbG9nby1pbWcucG5nXCIsXG5cdFwiLi9sb2dvLW9wdC1pbWcucG5nXCI6IFwiLi9zcmMvaW1nL2xvZ28tb3B0LWltZy5wbmdcIixcblx0XCIuL2xvZ28tb3B0LnN2Z1wiOiBcIi4vc3JjL2ltZy9sb2dvLW9wdC5zdmdcIixcblx0XCIuL3RpbWUtbWFjaGluZS13MjYwLmpwZ1wiOiBcIi4vc3JjL2ltZy90aW1lLW1hY2hpbmUtdzI2MC5qcGdcIixcblx0XCIuL3RpbWUtbWFjaGluZS13MzIwLmpwZ1wiOiBcIi4vc3JjL2ltZy90aW1lLW1hY2hpbmUtdzMyMC5qcGdcIixcblx0XCIuL3ZpZGVvLWZpbmRlci13MjYwLmpwZ1wiOiBcIi4vc3JjL2ltZy92aWRlby1maW5kZXItdzI2MC5qcGdcIixcblx0XCIuL3ZpZGVvLWZpbmRlci13MzIwLmpwZ1wiOiBcIi4vc3JjL2ltZy92aWRlby1maW5kZXItdzMyMC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWcgc3luYyBcXFxcLihwbmd8anBlP2d8c3ZnKSRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13MjYwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXczMjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL1dpa2lwZWRpYS1WaWV3ZXItdzI2MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvV2lraXBlZGlhLVZpZXdlci13MzIwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iYWNrLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9mYXJtLWxpZmUtdzI2MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZmFybS1saWZlLXczMjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Zlc3Qtc2Vla2VyLTI2MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZmVzdC1zZWVrZXItMzIwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9nbG9iLXRhc3RlLXcyNjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2dsb2ItdGFzdGUtdzMyMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbG9nby1pbWcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xvZ28tb3B0LWltZy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9sb2dvLW9wdC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdGltZS1tYWNoaW5lLXcyNjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3RpbWUtbWFjaGluZS13MzIwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy92aWRlby1maW5kZXItdzI2MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdmlkZW8tZmluZGVyLXczMjAuanBnXCI7IiwicmVxdWlyZSgnLi9zY3NzL21haW4uc2NzcycpO1xyXG5yZXF1aXJlKCdwaWN0dXJlZmlsbCcpO1xyXG5yZXF1aXJlKCd6ZW5zY3JvbGwnKTtcclxuXHJcbi8vIExvYWQgaW1hZ2VzIGR5bWFtaWNhbGx5XHJcbmZ1bmN0aW9uIGltcG9ydEltZ3Mocikge1xyXG4gIGxldCBpbWFnZXMgPSB7fTtcclxuICByLmtleXMoKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgIGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGltYWdlcztcclxufVxyXG5pbXBvcnRJbWdzKHJlcXVpcmUuY29udGV4dCgnLi9pbWcnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XHJcblxyXG4vLyBoaWRlIGhhbWJ1cmdlciBtZW51IHdoZW4gb25lIG9mIGl0cyBlbGVtZW50cyBpcyBjbGlja2VkXHJcbnZhciBjaGFuZ2UgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xyXG52YXIgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWl0ZW0nKTtcclxuQXJyYXkuZnJvbShuYXZMaW5rcykuZm9yRWFjaChmdW5jdGlvbihuYXZsaW5rKSB7XHJcbiAgbmF2bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGJveENoZWNrZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi10b2dnbGVcIikuY2hlY2tlZDtcclxuICAgIHRvZ2dsZShib3hDaGVja2VkKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiB0b2dnbGUoY2hlY2tlZCkge1xyXG4gIGlmKGNoZWNrZWQpIHtcclxuICAgIHZhciBjaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LXRvZ2dsZVwiKTtcclxuICAgIGNoZWNrQm94LmRpc3BhdGNoRXZlbnQoY2hhbmdlKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LXRvZ2dsZVwiKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==