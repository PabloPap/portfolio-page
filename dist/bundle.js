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
	"./Pavlos-Papadopoulos-Photography-w320.jpg": "./src/img/Pavlos-Papadopoulos-Photography-w320.jpg",
	"./Pavlos-Papadopoulos-Photography-w450.jpg": "./src/img/Pavlos-Papadopoulos-Photography-w450.jpg",
	"./Pavlos-Papadopoulos-Photography-w650.jpg": "./src/img/Pavlos-Papadopoulos-Photography-w650.jpg",
	"./Pavlos-Papadopoulos-Photography-w980.jpg": "./src/img/Pavlos-Papadopoulos-Photography-w980.jpg",
	"./Wikipedia-Viewer-w320.jpg": "./src/img/Wikipedia-Viewer-w320.jpg",
	"./Wikipedia-Viewer-w450.jpg": "./src/img/Wikipedia-Viewer-w450.jpg",
	"./farm-life-w320.png": "./src/img/farm-life-w320.png",
	"./farm-life-w450.png": "./src/img/farm-life-w450.png",
	"./logo-img.png": "./src/img/logo-img.png",
	"./logo-opt-img.png": "./src/img/logo-opt-img.png",
	"./logo-opt.svg": "./src/img/logo-opt.svg",
	"./maintenance-w320.jpg": "./src/img/maintenance-w320.jpg",
	"./maintenance-w450.jpg": "./src/img/maintenance-w450.jpg",
	"./metro-design-template-w320.jpg": "./src/img/metro-design-template-w320.jpg",
	"./metro-design-template-w450.jpg": "./src/img/metro-design-template-w450.jpg",
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

/***/ "./src/img/farm-life-w320.png":
/*!************************************!*\
  !*** ./src/img/farm-life-w320.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/farm-life-w320.png";

/***/ }),

/***/ "./src/img/farm-life-w450.png":
/*!************************************!*\
  !*** ./src/img/farm-life-w450.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/farm-life-w450.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzPzY2ZDUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BpY3R1cmVmaWxsL2Rpc3QvcGljdHVyZWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3plbnNjcm9sbC96ZW5zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzMyMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXc0NTAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13NjUwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzk4MC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9XaWtpcGVkaWEtVmlld2VyLXczMjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvV2lraXBlZGlhLVZpZXdlci13NDUwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Zhcm0tbGlmZS13MzIwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Zhcm0tbGlmZS13NDUwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2xvZ28taW1nLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2xvZ28tb3B0LWltZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9sb2dvLW9wdC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9tYWludGVuYW5jZS13MzIwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL21haW50ZW5hbmNlLXc0NTAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbWV0cm8tZGVzaWduLXRlbXBsYXRlLXczMjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbWV0cm8tZGVzaWduLXRlbXBsYXRlLXc0NTAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvcGV4ZWxzLXBob3RvLTk1MjY3MF90bGhndnEtY19zY2FsZSxxXzUwLHdfMTkyMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2Nzcz9jNDkyIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbXBvcnRJbWdzIiwiciIsImltYWdlcyIsImtleXMiLCJtYXAiLCJpdGVtIiwicmVwbGFjZSIsImNoYW5nZSIsIkV2ZW50IiwibmF2TGlua3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwibmF2bGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJib3hDaGVja2VkIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja2VkIiwidG9nZ2xlIiwiY2hlY2tCb3giLCJkaXNwYXRjaEV2ZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTyxrQkFBa0IsY0FBYyxVQUFVLFlBQVksY0FBYyxVQUFVLGdCQUFnQjtBQUN6SSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qjs7QUFFNUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFVBQVU7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUNBQXFDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsZUFBZSx3QkFBd0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZSxPQUFPOztBQUU5QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZSxPQUFPOztBQUU5QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWUsT0FBTzs7QUFFOUM7QUFDQSxLQUFLLE9BQU87QUFDWixJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sZUFBZTtBQUNmO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBaUU7QUFDakUsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsNkJBQTZCO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUEsMkRBQTJEO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQyxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUgsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0Q0FBNEMsU0FBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLDJCQUEyQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsaURBQXFDLG9CQUFvQixFQUFFO0FBQUE7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN2Z0REO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxFQUFFLFFBWUY7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QjtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsU0FBUztBQUN0QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsU0FBUztBQUN0QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsU0FBUztBQUN0QixhQUFhLE9BQU87QUFDcEI7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBLDBCQUEwQixvREFBb0Q7QUFDOUUsNkJBQTZCO0FBQzdCLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQ0FBZ0M7QUFDdEQsc0JBQXNCLG1DQUFtQztBQUN6RCwyQkFBMkIsNEZBQTRGO0FBQ3ZILDhCQUE4QjtBQUM5QixHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsdUNBQXVDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOzs7QUFHQTs7O0FBR0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcFdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RDs7Ozs7Ozs7Ozs7QUN0Q0Esd0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsOEU7Ozs7Ozs7Ozs7O0FDQUEsOEU7Ozs7Ozs7Ozs7O0FDQUEsa0c7Ozs7Ozs7Ozs7Ozs7O0FDQUEsbUJBQUFBLENBQVEsOENBQVI7QUFDQSxtQkFBQUEsQ0FBUSxtRUFBUjtBQUNBLG1CQUFBQSxDQUFRLHdEQUFSOztBQUVBO0FBQ0EsU0FBU0MsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7QUFDckIsTUFBSUMsU0FBUyxFQUFiO0FBQ0FELElBQUVFLElBQUYsR0FBU0MsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUNyQkgsV0FBT0csS0FBS0MsT0FBTCxDQUFhLElBQWIsRUFBbUIsRUFBbkIsQ0FBUCxJQUFpQ0wsRUFBRUksSUFBRixDQUFqQztBQUNELEdBRkQ7QUFHQSxTQUFPSCxNQUFQO0FBQ0Q7QUFDREYsV0FBVyx5REFBWDs7QUFFQTtBQUNBLElBQUlPLFNBQVMsSUFBSUMsS0FBSixDQUFVLFFBQVYsQ0FBYjtBQUNBLElBQUlDLFdBQVdDLFNBQVNDLGdCQUFULENBQTBCLFdBQTFCLENBQWY7QUFDQUMsTUFBTUMsSUFBTixDQUFXSixRQUFYLEVBQXFCSyxPQUFyQixDQUE2QixVQUFTQyxPQUFULEVBQWtCO0FBQzdDQSxVQUFRQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFXO0FBQzNDLFFBQUlDLGFBQWFQLFNBQVNRLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NDLE9BQXZEO0FBQ0FDLFdBQU9ILFVBQVA7QUFDRCxHQUhEO0FBSUQsQ0FMRDs7QUFPQSxTQUFTRyxNQUFULENBQWdCRCxPQUFoQixFQUF5QjtBQUN2QixNQUFHQSxPQUFILEVBQVk7QUFDVixRQUFJRSxXQUFXWCxTQUFTUSxjQUFULENBQXdCLFlBQXhCLENBQWY7QUFDQUcsYUFBU0MsYUFBVCxDQUF1QmYsTUFBdkI7QUFDQUcsYUFBU1EsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0MsT0FBdEMsR0FBZ0QsS0FBaEQ7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7OztBQzdCRDs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKiEgcGljdHVyZWZpbGwgLSB2My4wLjIgLSAyMDE2LTAyLTEyXG4gKiBodHRwczovL3Njb3R0amVobC5naXRodWIuaW8vcGljdHVyZWZpbGwvXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0amVobC9waWN0dXJlZmlsbC9ibG9iL21hc3Rlci9BdXRob3JzLnR4dDsgTGljZW5zZWQgTUlUXG4gKi9cbi8qISBHZWNrby1QaWN0dXJlIC0gdjEuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0amVobC9waWN0dXJlZmlsbC90cmVlLzMuMC9zcmMvcGx1Z2lucy9nZWNrby1waWN0dXJlXG4gKiBGaXJlZm94J3MgZWFybHkgcGljdHVyZSBpbXBsZW1lbnRhdGlvbiAocHJpb3IgdG8gRkY0MSkgaXMgc3RhdGljIGFuZCBkb2VzXG4gKiBub3QgcmVhY3QgdG8gdmlld3BvcnQgY2hhbmdlcy4gVGhpcyB0aW55IG1vZHVsZSBmaXhlcyB0aGlzLlxuICovXG4oZnVuY3Rpb24od2luZG93KSB7XG5cdC8qanNoaW50IGVxbnVsbDp0cnVlICovXG5cdHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cblx0aWYgKCB3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50ICYmICgoL2Vja28vKS50ZXN0KHVhKSAmJiB1YS5tYXRjaCgvcnZcXDooXFxkKykvKSAmJiBSZWdFeHAuJDEgPCA0NSkgKSB7XG5cdFx0YWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGltZXI7XG5cblx0XHRcdHZhciBkdW1teVNyYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG5cblx0XHRcdHZhciBmaXhSZXNwaW1nID0gZnVuY3Rpb24oaW1nKSB7XG5cdFx0XHRcdHZhciBzb3VyY2UsIHNpemVzO1xuXHRcdFx0XHR2YXIgcGljdHVyZSA9IGltZy5wYXJlbnROb2RlO1xuXG5cdFx0XHRcdGlmIChwaWN0dXJlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiUElDVFVSRVwiKSB7XG5cdFx0XHRcdFx0c291cmNlID0gZHVtbXlTcmMuY2xvbmVOb2RlKCk7XG5cblx0XHRcdFx0XHRwaWN0dXJlLmluc2VydEJlZm9yZShzb3VyY2UsIHBpY3R1cmUuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRwaWN0dXJlLnJlbW92ZUNoaWxkKHNvdXJjZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIWltZy5fcGZMYXN0U2l6ZSB8fCBpbWcub2Zmc2V0V2lkdGggPiBpbWcuX3BmTGFzdFNpemUpIHtcblx0XHRcdFx0XHRpbWcuX3BmTGFzdFNpemUgPSBpbWcub2Zmc2V0V2lkdGg7XG5cdFx0XHRcdFx0c2l6ZXMgPSBpbWcuc2l6ZXM7XG5cdFx0XHRcdFx0aW1nLnNpemVzICs9IFwiLDEwMHZ3XCI7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGltZy5zaXplcyA9IHNpemVzO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgZmluZFBpY3R1cmVJbWdzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBpO1xuXHRcdFx0XHR2YXIgaW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwaWN0dXJlID4gaW1nLCBpbWdbc3Jjc2V0XVtzaXplc11cIik7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Zml4UmVzcGltZyhpbWdzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZhciBvblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoZmluZFBpY3R1cmVJbWdzLCA5OSk7XG5cdFx0XHR9O1xuXHRcdFx0dmFyIG1xID0gd2luZG93Lm1hdGNoTWVkaWEgJiYgbWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKTtcblx0XHRcdHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdG9uUmVzaXplKCk7XG5cblx0XHRcdFx0aWYgKG1xICYmIG1xLmFkZExpc3RlbmVyKSB7XG5cdFx0XHRcdFx0bXEuYWRkTGlzdGVuZXIob25SZXNpemUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRkdW1teVNyYy5zcmNzZXQgPSBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBQUFBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09XCI7XG5cblx0XHRcdGlmICgvXltjfGldfGQkLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUgfHwgXCJcIikpIHtcblx0XHRcdFx0aW5pdCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvblJlc2l6ZTtcblx0XHR9KSgpKTtcblx0fVxufSkod2luZG93KTtcblxuLyohIFBpY3R1cmVmaWxsIC0gdjMuMC4yXG4gKiBodHRwOi8vc2NvdHRqZWhsLmdpdGh1Yi5pby9waWN0dXJlZmlsbFxuICogQ29weXJpZ2h0IChjKSAyMDE1IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGplaGwvcGljdHVyZWZpbGwvYmxvYi9tYXN0ZXIvQXV0aG9ycy50eHQ7XG4gKiAgTGljZW5zZTogTUlUXG4gKi9cblxuKGZ1bmN0aW9uKCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQgKSB7XG5cdC8vIEVuYWJsZSBzdHJpY3QgbW9kZVxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHQvLyBIVE1MIHNoaW18diBpdCBmb3Igb2xkIElFIChJRTkgd2lsbCBzdGlsbCBuZWVkIHRoZSBIVE1MIHZpZGVvIHRhZyB3b3JrYXJvdW5kKVxuXHRkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInBpY3R1cmVcIiApO1xuXG5cdHZhciB3YXJuLCBlbWlucHgsIGFsd2F5c0NoZWNrV0Rlc2NyaXB0b3IsIGV2YWxJZDtcblx0Ly8gbG9jYWwgb2JqZWN0IGZvciBtZXRob2QgcmVmZXJlbmNlcyBhbmQgdGVzdGluZyBleHBvc3VyZVxuXHR2YXIgcGYgPSB7fTtcblx0dmFyIGlzU3VwcG9ydFRlc3RSZWFkeSA9IGZhbHNlO1xuXHR2YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XG5cdHZhciBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW1nXCIgKTtcblx0dmFyIGdldEltZ0F0dHIgPSBpbWFnZS5nZXRBdHRyaWJ1dGU7XG5cdHZhciBzZXRJbWdBdHRyID0gaW1hZ2Uuc2V0QXR0cmlidXRlO1xuXHR2YXIgcmVtb3ZlSW1nQXR0ciA9IGltYWdlLnJlbW92ZUF0dHJpYnV0ZTtcblx0dmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdHZhciB0eXBlcyA9IHt9O1xuXHR2YXIgY2ZnID0ge1xuXHRcdC8vcmVzb3VyY2Ugc2VsZWN0aW9uOlxuXHRcdGFsZ29yaXRobTogXCJcIlxuXHR9O1xuXHR2YXIgc3JjQXR0ciA9IFwiZGF0YS1wZnNyY1wiO1xuXHR2YXIgc3Jjc2V0QXR0ciA9IHNyY0F0dHIgKyBcInNldFwiO1xuXHQvLyB1YSBzbmlmZmluZyBpcyBkb25lIGZvciB1bmRldGVjdGFibGUgaW1nIGxvYWRpbmcgZmVhdHVyZXMsXG5cdC8vIHRvIGRvIHNvbWUgbm9uIGNydWNpYWwgcGVyZiBvcHRpbWl6YXRpb25zXG5cdHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdHZhciBzdXBwb3J0QWJvcnQgPSAoL3JpZGVudC8pLnRlc3QodWEpIHx8ICgoL2Vja28vKS50ZXN0KHVhKSAmJiB1YS5tYXRjaCgvcnZcXDooXFxkKykvKSAmJiBSZWdFeHAuJDEgPiAzNSApO1xuXHR2YXIgY3VyU3JjUHJvcCA9IFwiY3VycmVudFNyY1wiO1xuXHR2YXIgcmVnV0Rlc2MgPSAvXFxzK1xcKz9cXGQrKGVcXGQrKT93Lztcblx0dmFyIHJlZ1NpemUgPSAvKFxcKFteKV0rXFwpKT9cXHMqKC4rKS87XG5cdHZhciBzZXRPcHRpb25zID0gd2luZG93LnBpY3R1cmVmaWxsQ0ZHO1xuXHQvKipcblx0ICogU2hvcnRjdXQgcHJvcGVydHkgZm9yIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJhcHBzZWMvc3BlY3MvbWl4ZWRjb250ZW50LyNyZXN0cmljdHMtbWl4ZWQtY29udGVudCAoIGZvciBlYXN5IG92ZXJyaWRpbmcgaW4gdGVzdHMgKVxuXHQgKi9cblx0Ly8gYmFzZVN0eWxlIGFsc28gdXNlZCBieSBnZXRFbVZhbHVlIChpLmUuOiB3aWR0aDogMWVtIGlzIGltcG9ydGFudClcblx0dmFyIGJhc2VTdHlsZSA9IFwicG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3Zpc2liaWxpdHk6aGlkZGVuO2Rpc3BsYXk6YmxvY2s7cGFkZGluZzowO2JvcmRlcjpub25lO2ZvbnQtc2l6ZToxZW07d2lkdGg6MWVtO292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMHB4LCAwcHgsIDBweCwgMHB4KVwiO1xuXHR2YXIgZnNDc3MgPSBcImZvbnQtc2l6ZToxMDAlIWltcG9ydGFudDtcIjtcblx0dmFyIGlzVndEaXJ0eSA9IHRydWU7XG5cblx0dmFyIGNzc0NhY2hlID0ge307XG5cdHZhciBzaXplTGVuZ3RoQ2FjaGUgPSB7fTtcblx0dmFyIERQUiA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXHR2YXIgdW5pdHMgPSB7XG5cdFx0cHg6IDEsXG5cdFx0XCJpblwiOiA5NlxuXHR9O1xuXHR2YXIgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJhXCIgKTtcblx0LyoqXG5cdCAqIGFscmVhZHlSdW4gZmxhZyB1c2VkIGZvciBzZXRPcHRpb25zLiBpcyBpdCB0cnVlIHNldE9wdGlvbnMgd2lsbCByZWV2YWx1YXRlXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0dmFyIGFscmVhZHlSdW4gPSBmYWxzZTtcblxuXHQvLyBSZXVzYWJsZSwgbm9uLVwiZ1wiIFJlZ2V4ZXNcblxuXHQvLyAoRG9uJ3QgdXNlIFxccywgdG8gYXZvaWQgbWF0Y2hpbmcgbm9uLWJyZWFraW5nIHNwYWNlLilcblx0dmFyIHJlZ2V4TGVhZGluZ1NwYWNlcyA9IC9eWyBcXHRcXG5cXHJcXHUwMDBjXSsvLFxuXHQgICAgcmVnZXhMZWFkaW5nQ29tbWFzT3JTcGFjZXMgPSAvXlssIFxcdFxcblxcclxcdTAwMGNdKy8sXG5cdCAgICByZWdleExlYWRpbmdOb3RTcGFjZXMgPSAvXlteIFxcdFxcblxcclxcdTAwMGNdKy8sXG5cdCAgICByZWdleFRyYWlsaW5nQ29tbWFzID0gL1ssXSskLyxcblx0ICAgIHJlZ2V4Tm9uTmVnYXRpdmVJbnRlZ2VyID0gL15cXGQrJC8sXG5cblx0ICAgIC8vICggUG9zaXRpdmUgb3IgbmVnYXRpdmUgb3IgdW5zaWduZWQgaW50ZWdlcnMgb3IgZGVjaW1hbHMsIHdpdGhvdXQgb3Igd2l0aG91dCBleHBvbmVudHMuXG5cdCAgICAvLyBNdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGRpZ2l0LlxuXHQgICAgLy8gQWNjb3JkaW5nIHRvIHNwZWMgdGVzdHMgYW55IGRlY2ltYWwgcG9pbnQgbXVzdCBiZSBmb2xsb3dlZCBieSBhIGRpZ2l0LlxuXHQgICAgLy8gTm8gbGVhZGluZyBwbHVzIHNpZ24gaXMgYWxsb3dlZC4pXG5cdCAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3ZhbGlkLWZsb2F0aW5nLXBvaW50LW51bWJlclxuXHQgICAgcmVnZXhGbG9hdGluZ1BvaW50ID0gL14tPyg/OlswLTldK3xbMC05XSpcXC5bMC05XSspKD86W2VFXVsrLV0/WzAtOV0rKT8kLztcblxuXHR2YXIgb24gPSBmdW5jdGlvbihvYmosIGV2dCwgZm4sIGNhcHR1cmUpIHtcblx0XHRpZiAoIG9iai5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdFx0b2JqLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBmbiwgY2FwdHVyZSB8fCBmYWxzZSk7XG5cdFx0fSBlbHNlIGlmICggb2JqLmF0dGFjaEV2ZW50ICkge1xuXHRcdFx0b2JqLmF0dGFjaEV2ZW50KCBcIm9uXCIgKyBldnQsIGZuKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIHNpbXBsZSBtZW1vaXplIGZ1bmN0aW9uOlxuXHQgKi9cblxuXHR2YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIGNhY2hlID0ge307XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0XHRpZiAoICEoaW5wdXQgaW4gY2FjaGUpICkge1xuXHRcdFx0XHRjYWNoZVsgaW5wdXQgXSA9IGZuKGlucHV0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjYWNoZVsgaW5wdXQgXTtcblx0XHR9O1xuXHR9O1xuXG5cdC8vIFVUSUxJVFkgRlVOQ1RJT05TXG5cblx0Ly8gTWFudWFsIGlzIGZhc3RlciB0aGFuIFJlZ0V4XG5cdC8vIGh0dHA6Ly9qc3BlcmYuY29tL3doaXRlc3BhY2UtY2hhcmFjdGVyLzVcblx0ZnVuY3Rpb24gaXNTcGFjZShjKSB7XG5cdFx0cmV0dXJuIChjID09PSBcIlxcdTAwMjBcIiB8fCAvLyBzcGFjZVxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDA5XCIgfHwgLy8gaG9yaXpvbnRhbCB0YWJcblx0XHQgICAgICAgIGMgPT09IFwiXFx1MDAwQVwiIHx8IC8vIG5ldyBsaW5lXG5cdFx0ICAgICAgICBjID09PSBcIlxcdTAwMENcIiB8fCAvLyBmb3JtIGZlZWRcblx0XHQgICAgICAgIGMgPT09IFwiXFx1MDAwRFwiKTsgIC8vIGNhcnJpYWdlIHJldHVyblxuXHR9XG5cblx0LyoqXG5cdCAqIGdldHMgYSBtZWRpYXF1ZXJ5IGFuZCByZXR1cm5zIGEgYm9vbGVhbiBvciBnZXRzIGEgY3NzIGxlbmd0aCBhbmQgcmV0dXJucyBhIG51bWJlclxuXHQgKiBAcGFyYW0gY3NzIG1lZGlhcXVlcmllcyBvciBjc3MgbGVuZ3RoXG5cdCAqIEByZXR1cm5zIHtib29sZWFufG51bWJlcn1cblx0ICpcblx0ICogYmFzZWQgb246IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2pvbmF0aGFudG5lYWwvZGI0Zjc3MDA5YjE1NWYwODM3Mzhcblx0ICovXG5cdHZhciBldmFsQ1NTID0gKGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHJlZ0xlbmd0aCA9IC9eKFtcXGRcXC5dKykoZW18dnd8cHgpJC87XG5cdFx0dmFyIHJlcGxhY2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzLCBpbmRleCA9IDAsIHN0cmluZyA9IGFyZ3NbMF07XG5cdFx0XHR3aGlsZSAoKytpbmRleCBpbiBhcmdzKSB7XG5cdFx0XHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGFyZ3NbaW5kZXhdLCBhcmdzWysraW5kZXhdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHJpbmc7XG5cdFx0fTtcblxuXHRcdHZhciBidWlsZFN0ciA9IG1lbW9pemUoZnVuY3Rpb24oY3NzKSB7XG5cblx0XHRcdHJldHVybiBcInJldHVybiBcIiArIHJlcGxhY2UoKGNzcyB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYGFuZGBcblx0XHRcdFx0L1xcYmFuZFxcYi9nLCBcIiYmXCIsXG5cblx0XHRcdFx0Ly8gaW50ZXJwcmV0IGAsYFxuXHRcdFx0XHQvLC9nLCBcInx8XCIsXG5cblx0XHRcdFx0Ly8gaW50ZXJwcmV0IGBtaW4tYCBhcyA+PVxuXHRcdFx0XHQvbWluLShbYS16LVxcc10rKTovZywgXCJlLiQxPj1cIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYG1heC1gIGFzIDw9XG5cdFx0XHRcdC9tYXgtKFthLXotXFxzXSspOi9nLCBcImUuJDE8PVwiLFxuXG5cdFx0XHRcdC8vY2FsYyB2YWx1ZVxuXHRcdFx0XHQvY2FsYyhbXildKykvZywgXCIoJDEpXCIsXG5cblx0XHRcdFx0Ly8gaW50ZXJwcmV0IGNzcyB2YWx1ZXNcblx0XHRcdFx0LyhcXGQrW1xcLl0qW1xcZF0qKShbYS16XSspL2csIFwiKCQxICogZS4kMilcIixcblx0XHRcdFx0Ly9tYWtlIGV2YWwgbGVzcyBldmlsXG5cdFx0XHRcdC9eKD8hKGUuW2Etel18WzAtOVxcLiY9fD48XFwrXFwtXFwqXFwoXFwpXFwvXSkpLiovaWcsIFwiXCJcblx0XHRcdCkgKyBcIjtcIjtcblx0XHR9KTtcblxuXHRcdHJldHVybiBmdW5jdGlvbihjc3MsIGxlbmd0aCkge1xuXHRcdFx0dmFyIHBhcnNlZExlbmd0aDtcblx0XHRcdGlmICghKGNzcyBpbiBjc3NDYWNoZSkpIHtcblx0XHRcdFx0Y3NzQ2FjaGVbY3NzXSA9IGZhbHNlO1xuXHRcdFx0XHRpZiAobGVuZ3RoICYmIChwYXJzZWRMZW5ndGggPSBjc3MubWF0Y2goIHJlZ0xlbmd0aCApKSkge1xuXHRcdFx0XHRcdGNzc0NhY2hlW2Nzc10gPSBwYXJzZWRMZW5ndGhbIDEgXSAqIHVuaXRzW3BhcnNlZExlbmd0aFsgMiBdXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvKmpzaGludCBldmlsOnRydWUgKi9cblx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRjc3NDYWNoZVtjc3NdID0gbmV3IEZ1bmN0aW9uKFwiZVwiLCBidWlsZFN0cihjc3MpKSh1bml0cyk7XG5cdFx0XHRcdFx0fSBjYXRjaChlKSB7fVxuXHRcdFx0XHRcdC8qanNoaW50IGV2aWw6ZmFsc2UgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNzc0NhY2hlW2Nzc107XG5cdFx0fTtcblx0fSkoKTtcblxuXHR2YXIgc2V0UmVzb2x1dGlvbiA9IGZ1bmN0aW9uKCBjYW5kaWRhdGUsIHNpemVzYXR0ciApIHtcblx0XHRpZiAoIGNhbmRpZGF0ZS53ICkgeyAvLyBoID0gbWVhbnMgaGVpZ2h0OiB8fCBkZXNjcmlwdG9yLnR5cGUgPT09ICdoJyBkbyBub3QgaGFuZGxlIHlldC4uLlxuXHRcdFx0Y2FuZGlkYXRlLmNXaWR0aCA9IHBmLmNhbGNMaXN0TGVuZ3RoKCBzaXplc2F0dHIgfHwgXCIxMDB2d1wiICk7XG5cdFx0XHRjYW5kaWRhdGUucmVzID0gY2FuZGlkYXRlLncgLyBjYW5kaWRhdGUuY1dpZHRoIDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2FuZGlkYXRlLnJlcyA9IGNhbmRpZGF0ZS5kO1xuXHRcdH1cblx0XHRyZXR1cm4gY2FuZGlkYXRlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gb3B0XG5cdCAqL1xuXHR2YXIgcGljdHVyZWZpbGwgPSBmdW5jdGlvbiggb3B0ICkge1xuXG5cdFx0aWYgKCFpc1N1cHBvcnRUZXN0UmVhZHkpIHtyZXR1cm47fVxuXG5cdFx0dmFyIGVsZW1lbnRzLCBpLCBwbGVuO1xuXG5cdFx0dmFyIG9wdGlvbnMgPSBvcHQgfHwge307XG5cblx0XHRpZiAoIG9wdGlvbnMuZWxlbWVudHMgJiYgb3B0aW9ucy5lbGVtZW50cy5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdGlmICggb3B0aW9ucy5lbGVtZW50cy5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIklNR1wiICkge1xuXHRcdFx0XHRvcHRpb25zLmVsZW1lbnRzID0gIFsgb3B0aW9ucy5lbGVtZW50cyBdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3B0aW9ucy5jb250ZXh0ID0gb3B0aW9ucy5lbGVtZW50cztcblx0XHRcdFx0b3B0aW9ucy5lbGVtZW50cyA9ICBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGVsZW1lbnRzID0gb3B0aW9ucy5lbGVtZW50cyB8fCBwZi5xc2EoIChvcHRpb25zLmNvbnRleHQgfHwgZG9jdW1lbnQpLCAoIG9wdGlvbnMucmVldmFsdWF0ZSB8fCBvcHRpb25zLnJlc2VsZWN0ICkgPyBwZi5zZWwgOiBwZi5zZWxTaG9ydCApO1xuXG5cdFx0aWYgKCAocGxlbiA9IGVsZW1lbnRzLmxlbmd0aCkgKSB7XG5cblx0XHRcdHBmLnNldHVwUnVuKCBvcHRpb25zICk7XG5cdFx0XHRhbHJlYWR5UnVuID0gdHJ1ZTtcblxuXHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGFsbCBlbGVtZW50c1xuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBwbGVuOyBpKysgKSB7XG5cdFx0XHRcdHBmLmZpbGxJbWcoZWxlbWVudHNbIGkgXSwgb3B0aW9ucyk7XG5cdFx0XHR9XG5cblx0XHRcdHBmLnRlYXJkb3duUnVuKCBvcHRpb25zICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBvdXRwdXRzIGEgd2FybmluZyBmb3IgdGhlIGRldmVsb3BlclxuXHQgKiBAcGFyYW0ge21lc3NhZ2V9XG5cdCAqIEB0eXBlIHtGdW5jdGlvbn1cblx0ICovXG5cdHdhcm4gPSAoIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2FybiApID9cblx0XHRmdW5jdGlvbiggbWVzc2FnZSApIHtcblx0XHRcdGNvbnNvbGUud2FybiggbWVzc2FnZSApO1xuXHRcdH0gOlxuXHRcdG5vb3Bcblx0O1xuXG5cdGlmICggIShjdXJTcmNQcm9wIGluIGltYWdlKSApIHtcblx0XHRjdXJTcmNQcm9wID0gXCJzcmNcIjtcblx0fVxuXG5cdC8vIEFkZCBzdXBwb3J0IGZvciBzdGFuZGFyZCBtaW1lIHR5cGVzLlxuXHR0eXBlc1sgXCJpbWFnZS9qcGVnXCIgXSA9IHRydWU7XG5cdHR5cGVzWyBcImltYWdlL2dpZlwiIF0gPSB0cnVlO1xuXHR0eXBlc1sgXCJpbWFnZS9wbmdcIiBdID0gdHJ1ZTtcblxuXHRmdW5jdGlvbiBkZXRlY3RUeXBlU3VwcG9ydCggdHlwZSwgdHlwZVVyaSApIHtcblx0XHQvLyBiYXNlZCBvbiBNb2Rlcm5penIncyBsb3NzbGVzcyBpbWctd2VicCB0ZXN0XG5cdFx0Ly8gbm90ZTogYXN5bmNocm9ub3VzXG5cdFx0dmFyIGltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpO1xuXHRcdGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdHR5cGVzWyB0eXBlIF0gPSBmYWxzZTtcblx0XHRcdHBpY3R1cmVmaWxsKCk7XG5cdFx0fTtcblx0XHRpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHR5cGVzWyB0eXBlIF0gPSBpbWFnZS53aWR0aCA9PT0gMTtcblx0XHRcdHBpY3R1cmVmaWxsKCk7XG5cdFx0fTtcblx0XHRpbWFnZS5zcmMgPSB0eXBlVXJpO1xuXHRcdHJldHVybiBcInBlbmRpbmdcIjtcblx0fVxuXG5cdC8vIHRlc3Qgc3ZnIHN1cHBvcnRcblx0dHlwZXNbIFwiaW1hZ2Uvc3ZnK3htbFwiIF0gPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCBcImh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjSW1hZ2VcIiwgXCIxLjFcIiApO1xuXG5cdC8qKlxuXHQgKiB1cGRhdGVzIHRoZSBpbnRlcm5hbCB2VyBwcm9wZXJ0eSB3aXRoIHRoZSBjdXJyZW50IHZpZXdwb3J0IHdpZHRoIGluIHB4XG5cdCAqL1xuXHRmdW5jdGlvbiB1cGRhdGVNZXRyaWNzKCkge1xuXG5cdFx0aXNWd0RpcnR5ID0gZmFsc2U7XG5cdFx0RFBSID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdFx0Y3NzQ2FjaGUgPSB7fTtcblx0XHRzaXplTGVuZ3RoQ2FjaGUgPSB7fTtcblxuXHRcdHBmLkRQUiA9IERQUiB8fCAxO1xuXG5cdFx0dW5pdHMud2lkdGggPSBNYXRoLm1heCh3aW5kb3cuaW5uZXJXaWR0aCB8fCAwLCBkb2NFbGVtLmNsaWVudFdpZHRoKTtcblx0XHR1bml0cy5oZWlnaHQgPSBNYXRoLm1heCh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCwgZG9jRWxlbS5jbGllbnRIZWlnaHQpO1xuXG5cdFx0dW5pdHMudncgPSB1bml0cy53aWR0aCAvIDEwMDtcblx0XHR1bml0cy52aCA9IHVuaXRzLmhlaWdodCAvIDEwMDtcblxuXHRcdGV2YWxJZCA9IFsgdW5pdHMuaGVpZ2h0LCB1bml0cy53aWR0aCwgRFBSIF0uam9pbihcIi1cIik7XG5cblx0XHR1bml0cy5lbSA9IHBmLmdldEVtVmFsdWUoKTtcblx0XHR1bml0cy5yZW0gPSB1bml0cy5lbTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNob29zZUxvd1JlcyggbG93ZXJWYWx1ZSwgaGlnaGVyVmFsdWUsIGRwclZhbHVlLCBpc0NhY2hlZCApIHtcblx0XHR2YXIgYm9udXNGYWN0b3IsIHRvb011Y2gsIGJvbnVzLCBtZWFuRGVuc2l0eTtcblxuXHRcdC8vZXhwZXJpbWVudGFsXG5cdFx0aWYgKGNmZy5hbGdvcml0aG0gPT09IFwic2F2ZURhdGFcIiApe1xuXHRcdFx0aWYgKCBsb3dlclZhbHVlID4gMi43ICkge1xuXHRcdFx0XHRtZWFuRGVuc2l0eSA9IGRwclZhbHVlICsgMTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRvb011Y2ggPSBoaWdoZXJWYWx1ZSAtIGRwclZhbHVlO1xuXHRcdFx0XHRib251c0ZhY3RvciA9IE1hdGgucG93KGxvd2VyVmFsdWUgLSAwLjYsIDEuNSk7XG5cblx0XHRcdFx0Ym9udXMgPSB0b29NdWNoICogYm9udXNGYWN0b3I7XG5cblx0XHRcdFx0aWYgKGlzQ2FjaGVkKSB7XG5cdFx0XHRcdFx0Ym9udXMgKz0gMC4xICogYm9udXNGYWN0b3I7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtZWFuRGVuc2l0eSA9IGxvd2VyVmFsdWUgKyBib251cztcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVhbkRlbnNpdHkgPSAoZHByVmFsdWUgPiAxKSA/XG5cdFx0XHRcdE1hdGguc3FydChsb3dlclZhbHVlICogaGlnaGVyVmFsdWUpIDpcblx0XHRcdFx0bG93ZXJWYWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVhbkRlbnNpdHkgPiBkcHJWYWx1ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFwcGx5QmVzdENhbmRpZGF0ZSggaW1nICkge1xuXHRcdHZhciBzcmNTZXRDYW5kaWRhdGVzO1xuXHRcdHZhciBtYXRjaGluZ1NldCA9IHBmLmdldFNldCggaW1nICk7XG5cdFx0dmFyIGV2YWx1YXRlZCA9IGZhbHNlO1xuXHRcdGlmICggbWF0Y2hpbmdTZXQgIT09IFwicGVuZGluZ1wiICkge1xuXHRcdFx0ZXZhbHVhdGVkID0gZXZhbElkO1xuXHRcdFx0aWYgKCBtYXRjaGluZ1NldCApIHtcblx0XHRcdFx0c3JjU2V0Q2FuZGlkYXRlcyA9IHBmLnNldFJlcyggbWF0Y2hpbmdTZXQgKTtcblx0XHRcdFx0cGYuYXBwbHlTZXRDYW5kaWRhdGUoIHNyY1NldENhbmRpZGF0ZXMsIGltZyApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpbWdbIHBmLm5zIF0uZXZhbGVkID0gZXZhbHVhdGVkO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXNjZW5kaW5nU29ydCggYSwgYiApIHtcblx0XHRyZXR1cm4gYS5yZXMgLSBiLnJlcztcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFNyY1RvQ3VyKCBpbWcsIHNyYywgc2V0ICkge1xuXHRcdHZhciBjYW5kaWRhdGU7XG5cdFx0aWYgKCAhc2V0ICYmIHNyYyApIHtcblx0XHRcdHNldCA9IGltZ1sgcGYubnMgXS5zZXRzO1xuXHRcdFx0c2V0ID0gc2V0ICYmIHNldFtzZXQubGVuZ3RoIC0gMV07XG5cdFx0fVxuXG5cdFx0Y2FuZGlkYXRlID0gZ2V0Q2FuZGlkYXRlRm9yU3JjKHNyYywgc2V0KTtcblxuXHRcdGlmICggY2FuZGlkYXRlICkge1xuXHRcdFx0c3JjID0gcGYubWFrZVVybChzcmMpO1xuXHRcdFx0aW1nWyBwZi5ucyBdLmN1clNyYyA9IHNyYztcblx0XHRcdGltZ1sgcGYubnMgXS5jdXJDYW4gPSBjYW5kaWRhdGU7XG5cblx0XHRcdGlmICggIWNhbmRpZGF0ZS5yZXMgKSB7XG5cdFx0XHRcdHNldFJlc29sdXRpb24oIGNhbmRpZGF0ZSwgY2FuZGlkYXRlLnNldC5zaXplcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2FuZGlkYXRlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlRm9yU3JjKCBzcmMsIHNldCApIHtcblx0XHR2YXIgaSwgY2FuZGlkYXRlLCBjYW5kaWRhdGVzO1xuXHRcdGlmICggc3JjICYmIHNldCApIHtcblx0XHRcdGNhbmRpZGF0ZXMgPSBwZi5wYXJzZVNldCggc2V0ICk7XG5cdFx0XHRzcmMgPSBwZi5tYWtlVXJsKHNyYyk7XG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IGNhbmRpZGF0ZXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGlmICggc3JjID09PSBwZi5tYWtlVXJsKGNhbmRpZGF0ZXNbIGkgXS51cmwpICkge1xuXHRcdFx0XHRcdGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbIGkgXTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2FuZGlkYXRlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0QWxsU291cmNlRWxlbWVudHMoIHBpY3R1cmUsIGNhbmRpZGF0ZXMgKSB7XG5cdFx0dmFyIGksIGxlbiwgc291cmNlLCBzcmNzZXQ7XG5cblx0XHQvLyBTUEVDIG1pc21hdGNoIGludGVuZGVkIGZvciBzaXplIGFuZCBwZXJmOlxuXHRcdC8vIGFjdHVhbGx5IG9ubHkgc291cmNlIGVsZW1lbnRzIHByZWNlZGluZyB0aGUgaW1nIHNob3VsZCBiZSB1c2VkXG5cdFx0Ly8gYWxzbyBub3RlOiBkb24ndCB1c2UgcXNhIGhlcmUsIGJlY2F1c2UgSUU4IHNvbWV0aW1lcyBkb2Vzbid0IGxpa2Ugc291cmNlIGFzIHRoZSBrZXkgcGFydCBpbiBhIHNlbGVjdG9yXG5cdFx0dmFyIHNvdXJjZXMgPSBwaWN0dXJlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcInNvdXJjZVwiICk7XG5cblx0XHRmb3IgKCBpID0gMCwgbGVuID0gc291cmNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdHNvdXJjZSA9IHNvdXJjZXNbIGkgXTtcblx0XHRcdHNvdXJjZVsgcGYubnMgXSA9IHRydWU7XG5cdFx0XHRzcmNzZXQgPSBzb3VyY2UuZ2V0QXR0cmlidXRlKCBcInNyY3NldFwiICk7XG5cblx0XHRcdC8vIGlmIHNvdXJjZSBkb2VzIG5vdCBoYXZlIGEgc3Jjc2V0IGF0dHJpYnV0ZSwgc2tpcFxuXHRcdFx0aWYgKCBzcmNzZXQgKSB7XG5cdFx0XHRcdGNhbmRpZGF0ZXMucHVzaCgge1xuXHRcdFx0XHRcdHNyY3NldDogc3Jjc2V0LFxuXHRcdFx0XHRcdG1lZGlhOiBzb3VyY2UuZ2V0QXR0cmlidXRlKCBcIm1lZGlhXCIgKSxcblx0XHRcdFx0XHR0eXBlOiBzb3VyY2UuZ2V0QXR0cmlidXRlKCBcInR5cGVcIiApLFxuXHRcdFx0XHRcdHNpemVzOiBzb3VyY2UuZ2V0QXR0cmlidXRlKCBcInNpemVzXCIgKVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNyY3NldCBQYXJzZXJcblx0ICogQnkgQWxleCBCZWxsIHwgIE1JVCBMaWNlbnNlXG5cdCAqXG5cdCAqIEByZXR1cm5zIEFycmF5IFt7dXJsOiBfLCBkOiBfLCB3OiBfLCBoOl8sIHNldDpfKD8/Pz8pfSwgLi4uXVxuXHQgKlxuXHQgKiBCYXNlZCBzdXBlciBkdXBlciBjbG9zZWx5IG9uIHRoZSByZWZlcmVuY2UgYWxnb3JpdGhtIGF0OlxuXHQgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbWJlZGRlZC1jb250ZW50Lmh0bWwjcGFyc2UtYS1zcmNzZXQtYXR0cmlidXRlXG5cdCAqL1xuXG5cdC8vIDEuIExldCBpbnB1dCBiZSB0aGUgdmFsdWUgcGFzc2VkIHRvIHRoaXMgYWxnb3JpdGhtLlxuXHQvLyAoVE8tRE8gOiBFeHBsYWluIHdoYXQgXCJzZXRcIiBhcmd1bWVudCBpcyBoZXJlLiBNYXliZSBjaG9vc2UgYSBtb3JlXG5cdC8vIGRlc2NyaXB0aXZlICYgbW9yZSBzZWFyY2hhYmxlIG5hbWUuICBTaW5jZSBwYXNzaW5nIHRoZSBcInNldFwiIGluIHJlYWxseSBoYXNcblx0Ly8gbm90aGluZyB0byBkbyB3aXRoIHBhcnNpbmcgcHJvcGVyLCBJIHdvdWxkIHByZWZlciB0aGlzIGFzc2lnbm1lbnQgZXZlbnR1YWxseVxuXHQvLyBnbyBpbiBhbiBleHRlcm5hbCBmbi4pXG5cdGZ1bmN0aW9uIHBhcnNlU3Jjc2V0KGlucHV0LCBzZXQpIHtcblxuXHRcdGZ1bmN0aW9uIGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ0V4KSB7XG5cdFx0XHR2YXIgY2hhcnMsXG5cdFx0XHQgICAgbWF0Y2ggPSByZWdFeC5leGVjKGlucHV0LnN1YnN0cmluZyhwb3MpKTtcblx0XHRcdGlmIChtYXRjaCkge1xuXHRcdFx0XHRjaGFycyA9IG1hdGNoWyAwIF07XG5cdFx0XHRcdHBvcyArPSBjaGFycy5sZW5ndGg7XG5cdFx0XHRcdHJldHVybiBjaGFycztcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGgsXG5cdFx0ICAgIHVybCxcblx0XHQgICAgZGVzY3JpcHRvcnMsXG5cdFx0ICAgIGN1cnJlbnREZXNjcmlwdG9yLFxuXHRcdCAgICBzdGF0ZSxcblx0XHQgICAgYyxcblxuXHRcdCAgICAvLyAyLiBMZXQgcG9zaXRpb24gYmUgYSBwb2ludGVyIGludG8gaW5wdXQsIGluaXRpYWxseSBwb2ludGluZyBhdCB0aGUgc3RhcnRcblx0XHQgICAgLy8gICAgb2YgdGhlIHN0cmluZy5cblx0XHQgICAgcG9zID0gMCxcblxuXHRcdCAgICAvLyAzLiBMZXQgY2FuZGlkYXRlcyBiZSBhbiBpbml0aWFsbHkgZW1wdHkgc291cmNlIHNldC5cblx0XHQgICAgY2FuZGlkYXRlcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0KiBBZGRzIGRlc2NyaXB0b3IgcHJvcGVydGllcyB0byBhIGNhbmRpZGF0ZSwgcHVzaGVzIHRvIHRoZSBjYW5kaWRhdGVzIGFycmF5XG5cdFx0KiBAcmV0dXJuIHVuZGVmaW5lZFxuXHRcdCovXG5cdFx0Ly8gKERlY2xhcmVkIG91dHNpZGUgb2YgdGhlIHdoaWxlIGxvb3Agc28gdGhhdCBpdCdzIG9ubHkgY3JlYXRlZCBvbmNlLlxuXHRcdC8vIChUaGlzIGZuIGlzIGRlZmluZWQgYmVmb3JlIGl0IGlzIHVzZWQsIGluIG9yZGVyIHRvIHBhc3MgSlNISU5ULlxuXHRcdC8vIFVuZm9ydHVuYXRlbHkgdGhpcyBicmVha3MgdGhlIHNlcXVlbmNpbmcgb2YgdGhlIHNwZWMgY29tbWVudHMuIDovIClcblx0XHRmdW5jdGlvbiBwYXJzZURlc2NyaXB0b3JzKCkge1xuXG5cdFx0XHQvLyA5LiBEZXNjcmlwdG9yIHBhcnNlcjogTGV0IGVycm9yIGJlIG5vLlxuXHRcdFx0dmFyIHBFcnJvciA9IGZhbHNlLFxuXG5cdFx0XHQvLyAxMC4gTGV0IHdpZHRoIGJlIGFic2VudC5cblx0XHRcdC8vIDExLiBMZXQgZGVuc2l0eSBiZSBhYnNlbnQuXG5cdFx0XHQvLyAxMi4gTGV0IGZ1dHVyZS1jb21wYXQtaCBiZSBhYnNlbnQuIChXZSdyZSBpbXBsZW1lbnRpbmcgaXQgbm93IGFzIGgpXG5cdFx0XHQgICAgdywgZCwgaCwgaSxcblx0XHRcdCAgICBjYW5kaWRhdGUgPSB7fSxcblx0XHRcdCAgICBkZXNjLCBsYXN0Q2hhciwgdmFsdWUsIGludFZhbCwgZmxvYXRWYWw7XG5cblx0XHRcdC8vIDEzLiBGb3IgZWFjaCBkZXNjcmlwdG9yIGluIGRlc2NyaXB0b3JzLCBydW4gdGhlIGFwcHJvcHJpYXRlIHNldCBvZiBzdGVwc1xuXHRcdFx0Ly8gZnJvbSB0aGUgZm9sbG93aW5nIGxpc3Q6XG5cdFx0XHRmb3IgKGkgPSAwIDsgaSA8IGRlc2NyaXB0b3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGRlc2MgPSBkZXNjcmlwdG9yc1sgaSBdO1xuXG5cdFx0XHRcdGxhc3RDaGFyID0gZGVzY1sgZGVzYy5sZW5ndGggLSAxIF07XG5cdFx0XHRcdHZhbHVlID0gZGVzYy5zdWJzdHJpbmcoMCwgZGVzYy5sZW5ndGggLSAxKTtcblx0XHRcdFx0aW50VmFsID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcblx0XHRcdFx0ZmxvYXRWYWwgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuXHRcdFx0XHQvLyBJZiB0aGUgZGVzY3JpcHRvciBjb25zaXN0cyBvZiBhIHZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIGZvbGxvd2VkIGJ5XG5cdFx0XHRcdC8vIGEgVSswMDc3IExBVElOIFNNQUxMIExFVFRFUiBXIGNoYXJhY3RlclxuXHRcdFx0XHRpZiAocmVnZXhOb25OZWdhdGl2ZUludGVnZXIudGVzdCh2YWx1ZSkgJiYgKGxhc3RDaGFyID09PSBcIndcIikpIHtcblxuXHRcdFx0XHRcdC8vIElmIHdpZHRoIGFuZCBkZW5zaXR5IGFyZSBub3QgYm90aCBhYnNlbnQsIHRoZW4gbGV0IGVycm9yIGJlIHllcy5cblx0XHRcdFx0XHRpZiAodyB8fCBkKSB7cEVycm9yID0gdHJ1ZTt9XG5cblx0XHRcdFx0XHQvLyBBcHBseSB0aGUgcnVsZXMgZm9yIHBhcnNpbmcgbm9uLW5lZ2F0aXZlIGludGVnZXJzIHRvIHRoZSBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdC8vIElmIHRoZSByZXN1bHQgaXMgemVybywgbGV0IGVycm9yIGJlIHllcy5cblx0XHRcdFx0XHQvLyBPdGhlcndpc2UsIGxldCB3aWR0aCBiZSB0aGUgcmVzdWx0LlxuXHRcdFx0XHRcdGlmIChpbnRWYWwgPT09IDApIHtwRXJyb3IgPSB0cnVlO30gZWxzZSB7dyA9IGludFZhbDt9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGRlc2NyaXB0b3IgY29uc2lzdHMgb2YgYSB2YWxpZCBmbG9hdGluZy1wb2ludCBudW1iZXIgZm9sbG93ZWQgYnlcblx0XHRcdFx0Ly8gYSBVKzAwNzggTEFUSU4gU01BTEwgTEVUVEVSIFggY2hhcmFjdGVyXG5cdFx0XHRcdH0gZWxzZSBpZiAocmVnZXhGbG9hdGluZ1BvaW50LnRlc3QodmFsdWUpICYmIChsYXN0Q2hhciA9PT0gXCJ4XCIpKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB3aWR0aCwgZGVuc2l0eSBhbmQgZnV0dXJlLWNvbXBhdC1oIGFyZSBub3QgYWxsIGFic2VudCwgdGhlbiBsZXQgZXJyb3Jcblx0XHRcdFx0XHQvLyBiZSB5ZXMuXG5cdFx0XHRcdFx0aWYgKHcgfHwgZCB8fCBoKSB7cEVycm9yID0gdHJ1ZTt9XG5cblx0XHRcdFx0XHQvLyBBcHBseSB0aGUgcnVsZXMgZm9yIHBhcnNpbmcgZmxvYXRpbmctcG9pbnQgbnVtYmVyIHZhbHVlcyB0byB0aGUgZGVzY3JpcHRvci5cblx0XHRcdFx0XHQvLyBJZiB0aGUgcmVzdWx0IGlzIGxlc3MgdGhhbiB6ZXJvLCBsZXQgZXJyb3IgYmUgeWVzLiBPdGhlcndpc2UsIGxldCBkZW5zaXR5XG5cdFx0XHRcdFx0Ly8gYmUgdGhlIHJlc3VsdC5cblx0XHRcdFx0XHRpZiAoZmxvYXRWYWwgPCAwKSB7cEVycm9yID0gdHJ1ZTt9IGVsc2Uge2QgPSBmbG9hdFZhbDt9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGRlc2NyaXB0b3IgY29uc2lzdHMgb2YgYSB2YWxpZCBub24tbmVnYXRpdmUgaW50ZWdlciBmb2xsb3dlZCBieVxuXHRcdFx0XHQvLyBhIFUrMDA2OCBMQVRJTiBTTUFMTCBMRVRURVIgSCBjaGFyYWN0ZXJcblx0XHRcdFx0fSBlbHNlIGlmIChyZWdleE5vbk5lZ2F0aXZlSW50ZWdlci50ZXN0KHZhbHVlKSAmJiAobGFzdENoYXIgPT09IFwiaFwiKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgaGVpZ2h0IGFuZCBkZW5zaXR5IGFyZSBub3QgYm90aCBhYnNlbnQsIHRoZW4gbGV0IGVycm9yIGJlIHllcy5cblx0XHRcdFx0XHRpZiAoaCB8fCBkKSB7cEVycm9yID0gdHJ1ZTt9XG5cblx0XHRcdFx0XHQvLyBBcHBseSB0aGUgcnVsZXMgZm9yIHBhcnNpbmcgbm9uLW5lZ2F0aXZlIGludGVnZXJzIHRvIHRoZSBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdC8vIElmIHRoZSByZXN1bHQgaXMgemVybywgbGV0IGVycm9yIGJlIHllcy4gT3RoZXJ3aXNlLCBsZXQgZnV0dXJlLWNvbXBhdC1oXG5cdFx0XHRcdFx0Ly8gYmUgdGhlIHJlc3VsdC5cblx0XHRcdFx0XHRpZiAoaW50VmFsID09PSAwKSB7cEVycm9yID0gdHJ1ZTt9IGVsc2Uge2ggPSBpbnRWYWw7fVxuXG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UsIExldCBlcnJvciBiZSB5ZXMuXG5cdFx0XHRcdH0gZWxzZSB7cEVycm9yID0gdHJ1ZTt9XG5cdFx0XHR9IC8vIChjbG9zZSBzdGVwIDEzIGZvciBsb29wKVxuXG5cdFx0XHQvLyAxNS4gSWYgZXJyb3IgaXMgc3RpbGwgbm8sIHRoZW4gYXBwZW5kIGEgbmV3IGltYWdlIHNvdXJjZSB0byBjYW5kaWRhdGVzIHdob3NlXG5cdFx0XHQvLyBVUkwgaXMgdXJsLCBhc3NvY2lhdGVkIHdpdGggYSB3aWR0aCB3aWR0aCBpZiBub3QgYWJzZW50IGFuZCBhIHBpeGVsXG5cdFx0XHQvLyBkZW5zaXR5IGRlbnNpdHkgaWYgbm90IGFic2VudC4gT3RoZXJ3aXNlLCB0aGVyZSBpcyBhIHBhcnNlIGVycm9yLlxuXHRcdFx0aWYgKCFwRXJyb3IpIHtcblx0XHRcdFx0Y2FuZGlkYXRlLnVybCA9IHVybDtcblxuXHRcdFx0XHRpZiAodykgeyBjYW5kaWRhdGUudyA9IHc7fVxuXHRcdFx0XHRpZiAoZCkgeyBjYW5kaWRhdGUuZCA9IGQ7fVxuXHRcdFx0XHRpZiAoaCkgeyBjYW5kaWRhdGUuaCA9IGg7fVxuXHRcdFx0XHRpZiAoIWggJiYgIWQgJiYgIXcpIHtjYW5kaWRhdGUuZCA9IDE7fVxuXHRcdFx0XHRpZiAoY2FuZGlkYXRlLmQgPT09IDEpIHtzZXQuaGFzMXggPSB0cnVlO31cblx0XHRcdFx0Y2FuZGlkYXRlLnNldCA9IHNldDtcblxuXHRcdFx0XHRjYW5kaWRhdGVzLnB1c2goY2FuZGlkYXRlKTtcblx0XHRcdH1cblx0XHR9IC8vIChjbG9zZSBwYXJzZURlc2NyaXB0b3JzIGZuKVxuXG5cdFx0LyoqXG5cdFx0KiBUb2tlbml6ZXMgZGVzY3JpcHRvciBwcm9wZXJ0aWVzIHByaW9yIHRvIHBhcnNpbmdcblx0XHQqIFJldHVybnMgdW5kZWZpbmVkLlxuXHRcdCogKEFnYWluLCB0aGlzIGZuIGlzIGRlZmluZWQgYmVmb3JlIGl0IGlzIHVzZWQsIGluIG9yZGVyIHRvIHBhc3MgSlNISU5ULlxuXHRcdCogVW5mb3J0dW5hdGVseSB0aGlzIGJyZWFrcyB0aGUgbG9naWNhbCBzZXF1ZW5jaW5nIG9mIHRoZSBzcGVjIGNvbW1lbnRzLiA6LyApXG5cdFx0Ki9cblx0XHRmdW5jdGlvbiB0b2tlbml6ZSgpIHtcblxuXHRcdFx0Ly8gOC4xLiBEZXNjcmlwdG9yIHRva2VuaXNlcjogU2tpcCB3aGl0ZXNwYWNlXG5cdFx0XHRjb2xsZWN0Q2hhcmFjdGVycyhyZWdleExlYWRpbmdTcGFjZXMpO1xuXG5cdFx0XHQvLyA4LjIuIExldCBjdXJyZW50IGRlc2NyaXB0b3IgYmUgdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gXCJcIjtcblxuXHRcdFx0Ly8gOC4zLiBMZXQgc3RhdGUgYmUgaW4gZGVzY3JpcHRvci5cblx0XHRcdHN0YXRlID0gXCJpbiBkZXNjcmlwdG9yXCI7XG5cblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cblx0XHRcdFx0Ly8gOC40LiBMZXQgYyBiZSB0aGUgY2hhcmFjdGVyIGF0IHBvc2l0aW9uLlxuXHRcdFx0XHRjID0gaW5wdXQuY2hhckF0KHBvcyk7XG5cblx0XHRcdFx0Ly8gIERvIHRoZSBmb2xsb3dpbmcgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBzdGF0ZS5cblx0XHRcdFx0Ly8gIEZvciB0aGUgcHVycG9zZSBvZiB0aGlzIHN0ZXAsIFwiRU9GXCIgaXMgYSBzcGVjaWFsIGNoYXJhY3RlciByZXByZXNlbnRpbmdcblx0XHRcdFx0Ly8gIHRoYXQgcG9zaXRpb24gaXMgcGFzdCB0aGUgZW5kIG9mIGlucHV0LlxuXG5cdFx0XHRcdC8vIEluIGRlc2NyaXB0b3Jcblx0XHRcdFx0aWYgKHN0YXRlID09PSBcImluIGRlc2NyaXB0b3JcIikge1xuXHRcdFx0XHRcdC8vIERvIHRoZSBmb2xsb3dpbmcsIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgYzpcblxuXHRcdFx0XHQgIC8vIFNwYWNlIGNoYXJhY3RlclxuXHRcdFx0XHQgIC8vIElmIGN1cnJlbnQgZGVzY3JpcHRvciBpcyBub3QgZW1wdHksIGFwcGVuZCBjdXJyZW50IGRlc2NyaXB0b3IgdG9cblx0XHRcdFx0ICAvLyBkZXNjcmlwdG9ycyBhbmQgbGV0IGN1cnJlbnQgZGVzY3JpcHRvciBiZSB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0XHQgIC8vIFNldCBzdGF0ZSB0byBhZnRlciBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdGlmIChpc1NwYWNlKGMpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudERlc2NyaXB0b3IpIHtcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRvcnMucHVzaChjdXJyZW50RGVzY3JpcHRvcik7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gXCJcIjtcblx0XHRcdFx0XHRcdFx0c3RhdGUgPSBcImFmdGVyIGRlc2NyaXB0b3JcIjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFUrMDAyQyBDT01NQSAoLClcblx0XHRcdFx0XHQvLyBBZHZhbmNlIHBvc2l0aW9uIHRvIHRoZSBuZXh0IGNoYXJhY3RlciBpbiBpbnB1dC4gSWYgY3VycmVudCBkZXNjcmlwdG9yXG5cdFx0XHRcdFx0Ly8gaXMgbm90IGVtcHR5LCBhcHBlbmQgY3VycmVudCBkZXNjcmlwdG9yIHRvIGRlc2NyaXB0b3JzLiBKdW1wIHRvIHRoZSBzdGVwXG5cdFx0XHRcdFx0Ly8gbGFiZWxlZCBkZXNjcmlwdG9yIHBhcnNlci5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiLFwiKSB7XG5cdFx0XHRcdFx0XHRwb3MgKz0gMTtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50RGVzY3JpcHRvcikge1xuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9ycy5wdXNoKGN1cnJlbnREZXNjcmlwdG9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdC8vIFUrMDAyOCBMRUZUIFBBUkVOVEhFU0lTICgoKVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci4gU2V0IHN0YXRlIHRvIGluIHBhcmVucy5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiXFx1MDAyOFwiKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHRcdHN0YXRlID0gXCJpbiBwYXJlbnNcIjtcblxuXHRcdFx0XHRcdC8vIEVPRlxuXHRcdFx0XHRcdC8vIElmIGN1cnJlbnQgZGVzY3JpcHRvciBpcyBub3QgZW1wdHksIGFwcGVuZCBjdXJyZW50IGRlc2NyaXB0b3IgdG9cblx0XHRcdFx0XHQvLyBkZXNjcmlwdG9ycy4gSnVtcCB0byB0aGUgc3RlcCBsYWJlbGVkIGRlc2NyaXB0b3IgcGFyc2VyLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCJcIikge1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnREZXNjcmlwdG9yKSB7XG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBjdXJyZW50RGVzY3JpcHRvciArIGM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQvLyAoZW5kIFwiaW4gZGVzY3JpcHRvclwiXG5cblx0XHRcdFx0Ly8gSW4gcGFyZW5zXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RhdGUgPT09IFwiaW4gcGFyZW5zXCIpIHtcblxuXHRcdFx0XHRcdC8vIFUrMDAyOSBSSUdIVCBQQVJFTlRIRVNJUyAoKSlcblx0XHRcdFx0XHQvLyBBcHBlbmQgYyB0byBjdXJyZW50IGRlc2NyaXB0b3IuIFNldCBzdGF0ZSB0byBpbiBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdGlmIChjID09PSBcIilcIikge1xuXHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBjdXJyZW50RGVzY3JpcHRvciArIGM7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFwiaW4gZGVzY3JpcHRvclwiO1xuXG5cdFx0XHRcdFx0Ly8gRU9GXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0byBkZXNjcmlwdG9ycy4gSnVtcCB0byB0aGUgc3RlcCBsYWJlbGVkXG5cdFx0XHRcdFx0Ly8gZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRkZXNjcmlwdG9ycy5wdXNoKGN1cnJlbnREZXNjcmlwdG9yKTtcblx0XHRcdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdC8vIEFueXRoaW5nIGVsc2Vcblx0XHRcdFx0XHQvLyBBcHBlbmQgYyB0byBjdXJyZW50IGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gY3VycmVudERlc2NyaXB0b3IgKyBjO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZnRlciBkZXNjcmlwdG9yXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RhdGUgPT09IFwiYWZ0ZXIgZGVzY3JpcHRvclwiKSB7XG5cblx0XHRcdFx0XHQvLyBEbyB0aGUgZm9sbG93aW5nLCBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGM6XG5cdFx0XHRcdFx0Ly8gU3BhY2UgY2hhcmFjdGVyOiBTdGF5IGluIHRoaXMgc3RhdGUuXG5cdFx0XHRcdFx0aWYgKGlzU3BhY2UoYykpIHtcblxuXHRcdFx0XHRcdC8vIEVPRjogSnVtcCB0byB0aGUgc3RlcCBsYWJlbGVkIGRlc2NyaXB0b3IgcGFyc2VyLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCJcIikge1xuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZVxuXHRcdFx0XHRcdC8vIFNldCBzdGF0ZSB0byBpbiBkZXNjcmlwdG9yLiBTZXQgcG9zaXRpb24gdG8gdGhlIHByZXZpb3VzIGNoYXJhY3RlciBpbiBpbnB1dC5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBcImluIGRlc2NyaXB0b3JcIjtcblx0XHRcdFx0XHRcdHBvcyAtPSAxO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWR2YW5jZSBwb3NpdGlvbiB0byB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gaW5wdXQuXG5cdFx0XHRcdHBvcyArPSAxO1xuXG5cdFx0XHQvLyBSZXBlYXQgdGhpcyBzdGVwLlxuXHRcdFx0fSAvLyAoY2xvc2Ugd2hpbGUgdHJ1ZSBsb29wKVxuXHRcdH1cblxuXHRcdC8vIDQuIFNwbGl0dGluZyBsb29wOiBDb2xsZWN0IGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyB0aGF0IGFyZSBzcGFjZVxuXHRcdC8vICAgIGNoYXJhY3RlcnMgb3IgVSswMDJDIENPTU1BIGNoYXJhY3RlcnMuIElmIGFueSBVKzAwMkMgQ09NTUEgY2hhcmFjdGVyc1xuXHRcdC8vICAgIHdlcmUgY29sbGVjdGVkLCB0aGF0IGlzIGEgcGFyc2UgZXJyb3IuXG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ2V4TGVhZGluZ0NvbW1hc09yU3BhY2VzKTtcblxuXHRcdFx0Ly8gNS4gSWYgcG9zaXRpb24gaXMgcGFzdCB0aGUgZW5kIG9mIGlucHV0LCByZXR1cm4gY2FuZGlkYXRlcyBhbmQgYWJvcnQgdGhlc2Ugc3RlcHMuXG5cdFx0XHRpZiAocG9zID49IGlucHV0TGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBjYW5kaWRhdGVzOyAvLyAod2UncmUgZG9uZSwgdGhpcyBpcyB0aGUgc29sZSByZXR1cm4gcGF0aClcblx0XHRcdH1cblxuXHRcdFx0Ly8gNi4gQ29sbGVjdCBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IHNwYWNlIGNoYXJhY3RlcnMsXG5cdFx0XHQvLyAgICBhbmQgbGV0IHRoYXQgYmUgdXJsLlxuXHRcdFx0dXJsID0gY29sbGVjdENoYXJhY3RlcnMocmVnZXhMZWFkaW5nTm90U3BhY2VzKTtcblxuXHRcdFx0Ly8gNy4gTGV0IGRlc2NyaXB0b3JzIGJlIGEgbmV3IGVtcHR5IGxpc3QuXG5cdFx0XHRkZXNjcmlwdG9ycyA9IFtdO1xuXG5cdFx0XHQvLyA4LiBJZiB1cmwgZW5kcyB3aXRoIGEgVSswMDJDIENPTU1BIGNoYXJhY3RlciAoLCksIGZvbGxvdyB0aGVzZSBzdWJzdGVwczpcblx0XHRcdC8vXHRcdCgxKS4gUmVtb3ZlIGFsbCB0cmFpbGluZyBVKzAwMkMgQ09NTUEgY2hhcmFjdGVycyBmcm9tIHVybC4gSWYgdGhpcyByZW1vdmVkXG5cdFx0XHQvLyAgICAgICAgIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGF0IGlzIGEgcGFyc2UgZXJyb3IuXG5cdFx0XHRpZiAodXJsLnNsaWNlKC0xKSA9PT0gXCIsXCIpIHtcblx0XHRcdFx0dXJsID0gdXJsLnJlcGxhY2UocmVnZXhUcmFpbGluZ0NvbW1hcywgXCJcIik7XG5cdFx0XHRcdC8vIChKdW1wIGFoZWFkIHRvIHN0ZXAgOSB0byBza2lwIHRva2VuaXphdGlvbiBhbmQganVzdCBwdXNoIHRoZSBjYW5kaWRhdGUpLlxuXHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cblx0XHRcdC8vXHRPdGhlcndpc2UsIGZvbGxvdyB0aGVzZSBzdWJzdGVwczpcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRva2VuaXplKCk7XG5cdFx0XHR9IC8vIChjbG9zZSBlbHNlIG9mIHN0ZXAgOClcblxuXHRcdC8vIDE2LiBSZXR1cm4gdG8gdGhlIHN0ZXAgbGFiZWxlZCBzcGxpdHRpbmcgbG9vcC5cblx0XHR9IC8vIChDbG9zZSBvZiBiaWcgd2hpbGUgbG9vcC4pXG5cdH1cblxuXHQvKlxuXHQgKiBTaXplcyBQYXJzZXJcblx0ICpcblx0ICogQnkgQWxleCBCZWxsIHwgIE1JVCBMaWNlbnNlXG5cdCAqXG5cdCAqIE5vbi1zdHJpY3QgYnV0IGFjY3VyYXRlIGFuZCBsaWdodHdlaWdodCBKUyBQYXJzZXIgZm9yIHRoZSBzdHJpbmcgdmFsdWUgPGltZyBzaXplcz1cImhlcmVcIj5cblx0ICpcblx0ICogUmVmZXJlbmNlIGFsZ29yaXRobSBhdDpcblx0ICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZW1iZWRkZWQtY29udGVudC5odG1sI3BhcnNlLWEtc2l6ZXMtYXR0cmlidXRlXG5cdCAqXG5cdCAqIE1vc3QgY29tbWVudHMgYXJlIGNvcGllZCBpbiBkaXJlY3RseSBmcm9tIHRoZSBzcGVjXG5cdCAqIChleGNlcHQgZm9yIGNvbW1lbnRzIGluIHBhcmVucykuXG5cdCAqXG5cdCAqIEdyYW1tYXIgaXM6XG5cdCAqIDxzb3VyY2Utc2l6ZS1saXN0PiA9IDxzb3VyY2Utc2l6ZT4jIFsgLCA8c291cmNlLXNpemUtdmFsdWU+IF0/IHwgPHNvdXJjZS1zaXplLXZhbHVlPlxuXHQgKiA8c291cmNlLXNpemU+ID0gPG1lZGlhLWNvbmRpdGlvbj4gPHNvdXJjZS1zaXplLXZhbHVlPlxuXHQgKiA8c291cmNlLXNpemUtdmFsdWU+ID0gPGxlbmd0aD5cblx0ICogaHR0cDovL3d3dy53My5vcmcvaHRtbC93Zy9kcmFmdHMvaHRtbC9tYXN0ZXIvZW1iZWRkZWQtY29udGVudC5odG1sI2F0dHItaW1nLXNpemVzXG5cdCAqXG5cdCAqIEUuZy4gXCIobWF4LXdpZHRoOiAzMGVtKSAxMDB2dywgKG1heC13aWR0aDogNTBlbSkgNzB2dywgMTAwdndcIlxuXHQgKiBvciBcIihtaW4td2lkdGg6IDMwZW0pLCBjYWxjKDMwdncgLSAxNXB4KVwiIG9yIGp1c3QgXCIzMHZ3XCJcblx0ICpcblx0ICogUmV0dXJucyB0aGUgZmlyc3QgdmFsaWQgPGNzcy1sZW5ndGg+IHdpdGggYSBtZWRpYSBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gdHJ1ZSxcblx0ICogb3IgXCIxMDB2d1wiIGlmIGFsbCB2YWxpZCBtZWRpYSBjb25kaXRpb25zIGV2YWx1YXRlIHRvIGZhbHNlLlxuXHQgKlxuXHQgKi9cblxuXHRmdW5jdGlvbiBwYXJzZVNpemVzKHN0clZhbHVlKSB7XG5cblx0XHQvLyAoUGVyY2VudGFnZSBDU1MgbGVuZ3RocyBhcmUgbm90IGFsbG93ZWQgaW4gdGhpcyBjYXNlLCB0byBhdm9pZCBjb25mdXNpb246XG5cdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZW1iZWRkZWQtY29udGVudC5odG1sI3ZhbGlkLXNvdXJjZS1zaXplLWxpc3Rcblx0XHQvLyBDU1MgYWxsb3dzIGEgc2luZ2xlIG9wdGlvbmFsIHBsdXMgb3IgbWludXMgc2lnbjpcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyL3N5bmRhdGEuaHRtbCNudW1iZXJzXG5cdFx0Ly8gQ1NTIGlzIEFTQ0lJIGNhc2UtaW5zZW5zaXRpdmU6XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMi9zeW5kYXRhLmh0bWwjY2hhcmFjdGVycyApXG5cdFx0Ly8gU3BlYyBhbGxvd3MgZXhwb25lbnRpYWwgbm90YXRpb24gZm9yIDxudW1iZXI+IHR5cGU6XG5cdFx0Ly8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLXZhbHVlcy8jbnVtYmVyc1xuXHRcdHZhciByZWdleENzc0xlbmd0aFdpdGhVbml0cyA9IC9eKD86WystXT9bMC05XSt8WzAtOV0qXFwuWzAtOV0rKSg/OltlRV1bKy1dP1swLTldKyk/KD86Y2h8Y218ZW18ZXh8aW58bW18cGN8cHR8cHh8cmVtfHZofHZtaW58dm1heHx2dykkL2k7XG5cblx0XHQvLyAoVGhpcyBpcyBhIHF1aWNrIGFuZCBsZW5pZW50IHRlc3QuIEJlY2F1c2Ugb2Ygb3B0aW9uYWwgdW5saW1pdGVkLWRlcHRoIGludGVybmFsXG5cdFx0Ly8gZ3JvdXBpbmcgcGFyZW5zIGFuZCBzdHJpY3Qgc3BhY2luZyBydWxlcywgdGhpcyBjb3VsZCBnZXQgdmVyeSBjb21wbGljYXRlZC4pXG5cdFx0dmFyIHJlZ2V4Q3NzQ2FsYyA9IC9eY2FsY1xcKCg/OlswLTlhLXogXFwuXFwrXFwtXFwqXFwvXFwoXFwpXSspXFwpJC9pO1xuXG5cdFx0dmFyIGk7XG5cdFx0dmFyIHVucGFyc2VkU2l6ZXNMaXN0O1xuXHRcdHZhciB1bnBhcnNlZFNpemVzTGlzdExlbmd0aDtcblx0XHR2YXIgdW5wYXJzZWRTaXplO1xuXHRcdHZhciBsYXN0Q29tcG9uZW50VmFsdWU7XG5cdFx0dmFyIHNpemU7XG5cblx0XHQvLyBVVElMSVRZIEZVTkNUSU9OU1xuXG5cdFx0Ly8gIChUb3kgQ1NTIHBhcnNlci4gVGhlIGdvYWxzIGhlcmUgYXJlOlxuXHRcdC8vICAxKSBleHBhbnNpdmUgdGVzdCBjb3ZlcmFnZSB3aXRob3V0IHRoZSB3ZWlnaHQgb2YgYSBmdWxsIENTUyBwYXJzZXIuXG5cdFx0Ly8gIDIpIEF2b2lkaW5nIHJlZ2V4IHdoZXJldmVyIGNvbnZlbmllbnQuXG5cdFx0Ly8gIFF1aWNrIHRlc3RzOiBodHRwOi8vanNmaWRkbGUubmV0L2d0bnRMNGdyLzMvXG5cdFx0Ly8gIFJldHVybnMgYW4gYXJyYXkgb2YgYXJyYXlzLilcblx0XHRmdW5jdGlvbiBwYXJzZUNvbXBvbmVudFZhbHVlcyhzdHIpIHtcblx0XHRcdHZhciBjaHJjdHI7XG5cdFx0XHR2YXIgY29tcG9uZW50ID0gXCJcIjtcblx0XHRcdHZhciBjb21wb25lbnRBcnJheSA9IFtdO1xuXHRcdFx0dmFyIGxpc3RBcnJheSA9IFtdO1xuXHRcdFx0dmFyIHBhcmVuRGVwdGggPSAwO1xuXHRcdFx0dmFyIHBvcyA9IDA7XG5cdFx0XHR2YXIgaW5Db21tZW50ID0gZmFsc2U7XG5cblx0XHRcdGZ1bmN0aW9uIHB1c2hDb21wb25lbnQoKSB7XG5cdFx0XHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdFx0XHRjb21wb25lbnRBcnJheS5wdXNoKGNvbXBvbmVudCk7XG5cdFx0XHRcdFx0Y29tcG9uZW50ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBwdXNoQ29tcG9uZW50QXJyYXkoKSB7XG5cdFx0XHRcdGlmIChjb21wb25lbnRBcnJheVswXSkge1xuXHRcdFx0XHRcdGxpc3RBcnJheS5wdXNoKGNvbXBvbmVudEFycmF5KTtcblx0XHRcdFx0XHRjb21wb25lbnRBcnJheSA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIChMb29wIGZvcndhcmRzIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgc3RyaW5nLilcblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdGNocmN0ciA9IHN0ci5jaGFyQXQocG9zKTtcblxuXHRcdFx0XHRpZiAoY2hyY3RyID09PSBcIlwiKSB7IC8vICggRW5kIG9mIHN0cmluZyByZWFjaGVkLilcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0cHVzaENvbXBvbmVudEFycmF5KCk7XG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RBcnJheTtcblx0XHRcdFx0fSBlbHNlIGlmIChpbkNvbW1lbnQpIHtcblx0XHRcdFx0XHRpZiAoKGNocmN0ciA9PT0gXCIqXCIpICYmIChzdHJbcG9zICsgMV0gPT09IFwiL1wiKSkgeyAvLyAoQXQgZW5kIG9mIGEgY29tbWVudC4pXG5cdFx0XHRcdFx0XHRpbkNvbW1lbnQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHBvcyArPSAyO1xuXHRcdFx0XHRcdFx0cHVzaENvbXBvbmVudCgpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBvcyArPSAxOyAvLyAoU2tpcCBhbGwgY2hhcmFjdGVycyBpbnNpZGUgY29tbWVudHMuKVxuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGlzU3BhY2UoY2hyY3RyKSkge1xuXHRcdFx0XHRcdC8vIChJZiBwcmV2aW91cyBjaGFyYWN0ZXIgaW4gbG9vcCB3YXMgYWxzbyBhIHNwYWNlLCBvciBpZlxuXHRcdFx0XHRcdC8vIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN0cmluZywgZG8gbm90IGFkZCBzcGFjZSBjaGFyIHRvXG5cdFx0XHRcdFx0Ly8gY29tcG9uZW50Lilcblx0XHRcdFx0XHRpZiAoIChzdHIuY2hhckF0KHBvcyAtIDEpICYmIGlzU3BhY2UoIHN0ci5jaGFyQXQocG9zIC0gMSkgKSApIHx8ICFjb21wb25lbnQgKSB7XG5cdFx0XHRcdFx0XHRwb3MgKz0gMTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocGFyZW5EZXB0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cHVzaENvbXBvbmVudCgpO1xuXHRcdFx0XHRcdFx0cG9zICs9MTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyAoUmVwbGFjZSBhbnkgc3BhY2UgY2hhcmFjdGVyIHdpdGggYSBwbGFpbiBzcGFjZSBmb3IgbGVnaWJpbGl0eS4pXG5cdFx0XHRcdFx0XHRjaHJjdHIgPSBcIiBcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hyY3RyID09PSBcIihcIikge1xuXHRcdFx0XHRcdHBhcmVuRGVwdGggKz0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChjaHJjdHIgPT09IFwiKVwiKSB7XG5cdFx0XHRcdFx0cGFyZW5EZXB0aCAtPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNocmN0ciA9PT0gXCIsXCIpIHtcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0cHVzaENvbXBvbmVudEFycmF5KCk7XG5cdFx0XHRcdFx0cG9zICs9IDE7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIChjaHJjdHIgPT09IFwiL1wiKSAmJiAoc3RyLmNoYXJBdChwb3MgKyAxKSA9PT0gXCIqXCIpICkge1xuXHRcdFx0XHRcdGluQ29tbWVudCA9IHRydWU7XG5cdFx0XHRcdFx0cG9zICs9IDI7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb21wb25lbnQgPSBjb21wb25lbnQgKyBjaHJjdHI7XG5cdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGlzVmFsaWROb25OZWdhdGl2ZVNvdXJjZVNpemVWYWx1ZShzKSB7XG5cdFx0XHRpZiAocmVnZXhDc3NMZW5ndGhXaXRoVW5pdHMudGVzdChzKSAmJiAocGFyc2VGbG9hdChzKSA+PSAwKSkge3JldHVybiB0cnVlO31cblx0XHRcdGlmIChyZWdleENzc0NhbGMudGVzdChzKSkge3JldHVybiB0cnVlO31cblx0XHRcdC8vICggaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMi9zeW5kYXRhLmh0bWwjbnVtYmVycyBzYXlzOlxuXHRcdFx0Ly8gXCItMCBpcyBlcXVpdmFsZW50IHRvIDAgYW5kIGlzIG5vdCBhIG5lZ2F0aXZlIG51bWJlci5cIiB3aGljaCBtZWFucyB0aGF0XG5cdFx0XHQvLyB1bml0bGVzcyB6ZXJvIGFuZCB1bml0bGVzcyBuZWdhdGl2ZSB6ZXJvIG11c3QgYmUgYWNjZXB0ZWQgYXMgc3BlY2lhbCBjYXNlcy4pXG5cdFx0XHRpZiAoKHMgPT09IFwiMFwiKSB8fCAocyA9PT0gXCItMFwiKSB8fCAocyA9PT0gXCIrMFwiKSkge3JldHVybiB0cnVlO31cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBXaGVuIGFza2VkIHRvIHBhcnNlIGEgc2l6ZXMgYXR0cmlidXRlIGZyb20gYW4gZWxlbWVudCwgcGFyc2UgYVxuXHRcdC8vIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGNvbXBvbmVudCB2YWx1ZXMgZnJvbSB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQnc1xuXHRcdC8vIHNpemVzIGF0dHJpYnV0ZSAob3IgdGhlIGVtcHR5IHN0cmluZywgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhYnNlbnQpLCBhbmQgbGV0XG5cdFx0Ly8gdW5wYXJzZWQgc2l6ZXMgbGlzdCBiZSB0aGUgcmVzdWx0LlxuXHRcdC8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1zeW50YXgvI3BhcnNlLWNvbW1hLXNlcGFyYXRlZC1saXN0LW9mLWNvbXBvbmVudC12YWx1ZXNcblxuXHRcdHVucGFyc2VkU2l6ZXNMaXN0ID0gcGFyc2VDb21wb25lbnRWYWx1ZXMoc3RyVmFsdWUpO1xuXHRcdHVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoID0gdW5wYXJzZWRTaXplc0xpc3QubGVuZ3RoO1xuXG5cdFx0Ly8gRm9yIGVhY2ggdW5wYXJzZWQgc2l6ZSBpbiB1bnBhcnNlZCBzaXplcyBsaXN0OlxuXHRcdGZvciAoaSA9IDA7IGkgPCB1bnBhcnNlZFNpemVzTGlzdExlbmd0aDsgaSsrKSB7XG5cdFx0XHR1bnBhcnNlZFNpemUgPSB1bnBhcnNlZFNpemVzTGlzdFtpXTtcblxuXHRcdFx0Ly8gMS4gUmVtb3ZlIGFsbCBjb25zZWN1dGl2ZSA8d2hpdGVzcGFjZS10b2tlbj5zIGZyb20gdGhlIGVuZCBvZiB1bnBhcnNlZCBzaXplLlxuXHRcdFx0Ly8gKCBwYXJzZUNvbXBvbmVudFZhbHVlcygpIGFscmVhZHkgb21pdHMgc3BhY2VzIG91dHNpZGUgb2YgcGFyZW5zLiApXG5cblx0XHRcdC8vIElmIHVucGFyc2VkIHNpemUgaXMgbm93IGVtcHR5LCB0aGF0IGlzIGEgcGFyc2UgZXJyb3I7IGNvbnRpbnVlIHRvIHRoZSBuZXh0XG5cdFx0XHQvLyBpdGVyYXRpb24gb2YgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHQvLyAoIHBhcnNlQ29tcG9uZW50VmFsdWVzKCkgd29uJ3QgcHVzaCBhbiBlbXB0eSBhcnJheS4gKVxuXG5cdFx0XHQvLyAyLiBJZiB0aGUgbGFzdCBjb21wb25lbnQgdmFsdWUgaW4gdW5wYXJzZWQgc2l6ZSBpcyBhIHZhbGlkIG5vbi1uZWdhdGl2ZVxuXHRcdFx0Ly8gPHNvdXJjZS1zaXplLXZhbHVlPiwgbGV0IHNpemUgYmUgaXRzIHZhbHVlIGFuZCByZW1vdmUgdGhlIGNvbXBvbmVudCB2YWx1ZVxuXHRcdFx0Ly8gZnJvbSB1bnBhcnNlZCBzaXplLiBBbnkgQ1NTIGZ1bmN0aW9uIG90aGVyIHRoYW4gdGhlIGNhbGMoKSBmdW5jdGlvbiBpc1xuXHRcdFx0Ly8gaW52YWxpZC4gT3RoZXJ3aXNlLCB0aGVyZSBpcyBhIHBhcnNlIGVycm9yOyBjb250aW51ZSB0byB0aGUgbmV4dCBpdGVyYXRpb25cblx0XHRcdC8vIG9mIHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0Ly8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLXN5bnRheC8jcGFyc2UtY29tcG9uZW50LXZhbHVlXG5cdFx0XHRsYXN0Q29tcG9uZW50VmFsdWUgPSB1bnBhcnNlZFNpemVbdW5wYXJzZWRTaXplLmxlbmd0aCAtIDFdO1xuXG5cdFx0XHRpZiAoaXNWYWxpZE5vbk5lZ2F0aXZlU291cmNlU2l6ZVZhbHVlKGxhc3RDb21wb25lbnRWYWx1ZSkpIHtcblx0XHRcdFx0c2l6ZSA9IGxhc3RDb21wb25lbnRWYWx1ZTtcblx0XHRcdFx0dW5wYXJzZWRTaXplLnBvcCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDMuIFJlbW92ZSBhbGwgY29uc2VjdXRpdmUgPHdoaXRlc3BhY2UtdG9rZW4+cyBmcm9tIHRoZSBlbmQgb2YgdW5wYXJzZWRcblx0XHRcdC8vIHNpemUuIElmIHVucGFyc2VkIHNpemUgaXMgbm93IGVtcHR5LCByZXR1cm4gc2l6ZSBhbmQgZXhpdCB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vIElmIHRoaXMgd2FzIG5vdCB0aGUgbGFzdCBpdGVtIGluIHVucGFyc2VkIHNpemVzIGxpc3QsIHRoYXQgaXMgYSBwYXJzZSBlcnJvci5cblx0XHRcdGlmICh1bnBhcnNlZFNpemUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiBzaXplO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyA0LiBQYXJzZSB0aGUgcmVtYWluaW5nIGNvbXBvbmVudCB2YWx1ZXMgaW4gdW5wYXJzZWQgc2l6ZSBhcyBhXG5cdFx0XHQvLyA8bWVkaWEtY29uZGl0aW9uPi4gSWYgaXQgZG9lcyBub3QgcGFyc2UgY29ycmVjdGx5LCBvciBpdCBkb2VzIHBhcnNlXG5cdFx0XHQvLyBjb3JyZWN0bHkgYnV0IHRoZSA8bWVkaWEtY29uZGl0aW9uPiBldmFsdWF0ZXMgdG8gZmFsc2UsIGNvbnRpbnVlIHRvIHRoZVxuXHRcdFx0Ly8gbmV4dCBpdGVyYXRpb24gb2YgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHQvLyAoUGFyc2luZyBhbGwgcG9zc2libGUgY29tcG91bmQgbWVkaWEgY29uZGl0aW9ucyBpbiBKUyBpcyBoZWF2eSwgY29tcGxpY2F0ZWQsXG5cdFx0XHQvLyBhbmQgdGhlIHBheW9mZiBpcyB1bmNsZWFyLiBJcyB0aGVyZSBldmVyIGFuIHNpdHVhdGlvbiB3aGVyZSB0aGVcblx0XHRcdC8vIG1lZGlhIGNvbmRpdGlvbiBwYXJzZXMgaW5jb3JyZWN0bHkgYnV0IHN0aWxsIHNvbWVob3cgZXZhbHVhdGVzIHRvIHRydWU/XG5cdFx0XHQvLyBDYW4gd2UganVzdCByZWx5IG9uIHRoZSBicm93c2VyL3BvbHlmaWxsIHRvIGRvIGl0Pylcblx0XHRcdHVucGFyc2VkU2l6ZSA9IHVucGFyc2VkU2l6ZS5qb2luKFwiIFwiKTtcblx0XHRcdGlmICghKHBmLm1hdGNoZXNNZWRpYSggdW5wYXJzZWRTaXplICkgKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDUuIFJldHVybiBzaXplIGFuZCBleGl0IHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0cmV0dXJuIHNpemU7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIGFib3ZlIGFsZ29yaXRobSBleGhhdXN0cyB1bnBhcnNlZCBzaXplcyBsaXN0IHdpdGhvdXQgcmV0dXJuaW5nIGFcblx0XHQvLyBzaXplIHZhbHVlLCByZXR1cm4gMTAwdncuXG5cdFx0cmV0dXJuIFwiMTAwdndcIjtcblx0fVxuXG5cdC8vIG5hbWVzcGFjZVxuXHRwZi5ucyA9IChcInBmXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSkuc3Vic3RyKDAsIDkpO1xuXG5cdC8vIHNyY3NldCBzdXBwb3J0IHRlc3Rcblx0cGYuc3VwU3Jjc2V0ID0gXCJzcmNzZXRcIiBpbiBpbWFnZTtcblx0cGYuc3VwU2l6ZXMgPSBcInNpemVzXCIgaW4gaW1hZ2U7XG5cdHBmLnN1cFBpY3R1cmUgPSAhIXdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQ7XG5cblx0Ly8gVUMgYnJvd3NlciBkb2VzIGNsYWltIHRvIHN1cHBvcnQgc3Jjc2V0IGFuZCBwaWN0dXJlLCBidXQgbm90IHNpemVzLFxuXHQvLyB0aGlzIGV4dGVuZGVkIHRlc3QgcmV2ZWFscyB0aGUgYnJvd3NlciBkb2VzIHN1cHBvcnQgbm90aGluZ1xuXHRpZiAocGYuc3VwU3Jjc2V0ICYmIHBmLnN1cFBpY3R1cmUgJiYgIXBmLnN1cFNpemVzKSB7XG5cdFx0KGZ1bmN0aW9uKGltYWdlMikge1xuXHRcdFx0aW1hZ2Uuc3Jjc2V0ID0gXCJkYXRhOixhXCI7XG5cdFx0XHRpbWFnZTIuc3JjID0gXCJkYXRhOixhXCI7XG5cdFx0XHRwZi5zdXBTcmNzZXQgPSBpbWFnZS5jb21wbGV0ZSA9PT0gaW1hZ2UyLmNvbXBsZXRlO1xuXHRcdFx0cGYuc3VwUGljdHVyZSA9IHBmLnN1cFNyY3NldCAmJiBwZi5zdXBQaWN0dXJlO1xuXHRcdH0pKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIikpO1xuXHR9XG5cblx0Ly8gU2FmYXJpOSBoYXMgYmFzaWMgc3VwcG9ydCBmb3Igc2l6ZXMsIGJ1dCBkb2VzJ3QgZXhwb3NlIHRoZSBgc2l6ZXNgIGlkbCBhdHRyaWJ1dGVcblx0aWYgKHBmLnN1cFNyY3NldCAmJiAhcGYuc3VwU2l6ZXMpIHtcblxuXHRcdChmdW5jdGlvbigpIHtcblx0XHRcdHZhciB3aWR0aDIgPSBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFnQUJBUEFBQVAvLy93QUFBQ0g1QkFBQUFBQUFMQUFBQUFBQ0FBRUFBQUlDQkFvQU93PT1cIjtcblx0XHRcdHZhciB3aWR0aDEgPSBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBQUFBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09XCI7XG5cdFx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHRcdHZhciB0ZXN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciB3aWR0aCA9IGltZy53aWR0aDtcblxuXHRcdFx0XHRpZiAod2lkdGggPT09IDIpIHtcblx0XHRcdFx0XHRwZi5zdXBTaXplcyA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhbHdheXNDaGVja1dEZXNjcmlwdG9yID0gcGYuc3VwU3Jjc2V0ICYmICFwZi5zdXBTaXplcztcblxuXHRcdFx0XHRpc1N1cHBvcnRUZXN0UmVhZHkgPSB0cnVlO1xuXHRcdFx0XHQvLyBmb3JjZSBhc3luY1xuXHRcdFx0XHRzZXRUaW1lb3V0KHBpY3R1cmVmaWxsKTtcblx0XHRcdH07XG5cblx0XHRcdGltZy5vbmxvYWQgPSB0ZXN0O1xuXHRcdFx0aW1nLm9uZXJyb3IgPSB0ZXN0O1xuXHRcdFx0aW1nLnNldEF0dHJpYnV0ZShcInNpemVzXCIsIFwiOXB4XCIpO1xuXG5cdFx0XHRpbWcuc3Jjc2V0ID0gd2lkdGgxICsgXCIgMXcsXCIgKyB3aWR0aDIgKyBcIiA5d1wiO1xuXHRcdFx0aW1nLnNyYyA9IHdpZHRoMTtcblx0XHR9KSgpO1xuXG5cdH0gZWxzZSB7XG5cdFx0aXNTdXBwb3J0VGVzdFJlYWR5ID0gdHJ1ZTtcblx0fVxuXG5cdC8vIHVzaW5nIHBmLnFzYSBpbnN0ZWFkIG9mIGRvbSB0cmF2ZXJzaW5nIGRvZXMgc2NhbGUgbXVjaCBiZXR0ZXIsXG5cdC8vIGVzcGVjaWFsbHkgb24gc2l0ZXMgbWl4aW5nIHJlc3BvbnNpdmUgYW5kIG5vbi1yZXNwb25zaXZlIGltYWdlc1xuXHRwZi5zZWxTaG9ydCA9IFwicGljdHVyZT5pbWcsaW1nW3NyY3NldF1cIjtcblx0cGYuc2VsID0gcGYuc2VsU2hvcnQ7XG5cdHBmLmNmZyA9IGNmZztcblxuXHQvKipcblx0ICogU2hvcnRjdXQgcHJvcGVydHkgZm9yIGBkZXZpY2VQaXhlbFJhdGlvYCAoIGZvciBlYXN5IG92ZXJyaWRpbmcgaW4gdGVzdHMgKVxuXHQgKi9cblx0cGYuRFBSID0gKERQUiAgfHwgMSApO1xuXHRwZi51ID0gdW5pdHM7XG5cblx0Ly8gY29udGFpbmVyIG9mIHN1cHBvcnRlZCBtaW1lIHR5cGVzIHRoYXQgb25lIG1pZ2h0IG5lZWQgdG8gcXVhbGlmeSBiZWZvcmUgdXNpbmdcblx0cGYudHlwZXMgPSAgdHlwZXM7XG5cblx0cGYuc2V0U2l6ZSA9IG5vb3A7XG5cblx0LyoqXG5cdCAqIEdldHMgYSBzdHJpbmcgYW5kIHJldHVybnMgdGhlIGFic29sdXRlIFVSTFxuXHQgKiBAcGFyYW0gc3JjXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IGFic29sdXRlIFVSTFxuXHQgKi9cblxuXHRwZi5tYWtlVXJsID0gbWVtb2l6ZShmdW5jdGlvbihzcmMpIHtcblx0XHRhbmNob3IuaHJlZiA9IHNyYztcblx0XHRyZXR1cm4gYW5jaG9yLmhyZWY7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBHZXRzIGEgRE9NIGVsZW1lbnQgb3IgZG9jdW1lbnQgYW5kIGEgc2VsY3RvciBhbmQgcmV0dXJucyB0aGUgZm91bmQgbWF0Y2hlc1xuXHQgKiBDYW4gYmUgZXh0ZW5kZWQgd2l0aCBqUXVlcnkvU2l6emxlIGZvciBJRTcgc3VwcG9ydFxuXHQgKiBAcGFyYW0gY29udGV4dFxuXHQgKiBAcGFyYW0gc2VsXG5cdCAqIEByZXR1cm5zIHtOb2RlTGlzdHxBcnJheX1cblx0ICovXG5cdHBmLnFzYSA9IGZ1bmN0aW9uKGNvbnRleHQsIHNlbCkge1xuXHRcdHJldHVybiAoIFwicXVlcnlTZWxlY3RvclwiIGluIGNvbnRleHQgKSA/IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWwpIDogW107XG5cdH07XG5cblx0LyoqXG5cdCAqIFNob3J0Y3V0IG1ldGhvZCBmb3IgbWF0Y2hNZWRpYSAoIGZvciBlYXN5IG92ZXJyaWRpbmcgaW4gdGVzdHMgKVxuXHQgKiB3ZXRoZXIgbmF0aXZlIG9yIHBmLm1NUSBpcyB1c2VkIHdpbGwgYmUgZGVjaWRlZCBsYXp5IG9uIGZpcnN0IGNhbGxcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRwZi5tYXRjaGVzTWVkaWEgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIHdpbmRvdy5tYXRjaE1lZGlhICYmIChtYXRjaE1lZGlhKCBcIihtaW4td2lkdGg6IDAuMWVtKVwiICkgfHwge30pLm1hdGNoZXMgKSB7XG5cdFx0XHRwZi5tYXRjaGVzTWVkaWEgPSBmdW5jdGlvbiggbWVkaWEgKSB7XG5cdFx0XHRcdHJldHVybiAhbWVkaWEgfHwgKCBtYXRjaE1lZGlhKCBtZWRpYSApLm1hdGNoZXMgKTtcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBmLm1hdGNoZXNNZWRpYSA9IHBmLm1NUTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGYubWF0Y2hlc01lZGlhLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0fTtcblxuXHQvKipcblx0ICogQSBzaW1wbGlmaWVkIG1hdGNoTWVkaWEgaW1wbGVtZW50YXRpb24gZm9yIElFOCBhbmQgSUU5XG5cdCAqIGhhbmRsZXMgb25seSBtaW4td2lkdGgvbWF4LXdpZHRoIHdpdGggcHggb3IgZW0gdmFsdWVzXG5cdCAqIEBwYXJhbSBtZWRpYVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHBmLm1NUSA9IGZ1bmN0aW9uKCBtZWRpYSApIHtcblx0XHRyZXR1cm4gbWVkaWEgPyBldmFsQ1NTKG1lZGlhKSA6IHRydWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGNhbGN1bGF0ZWQgbGVuZ3RoIGluIGNzcyBwaXhlbCBmcm9tIHRoZSBnaXZlbiBzb3VyY2VTaXplVmFsdWVcblx0ICogaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLXZhbHVlcy0zLyNsZW5ndGgtdmFsdWVcblx0ICogaW50ZW5kZWQgU3BlYyBtaXNtYXRjaGVzOlxuXHQgKiAqIERvZXMgbm90IGNoZWNrIGZvciBpbnZhbGlkIHVzZSBvZiBDU1MgZnVuY3Rpb25zXG5cdCAqICogRG9lcyBoYW5kbGUgYSBjb21wdXRlZCBsZW5ndGggb2YgMCB0aGUgc2FtZSBhcyBhIG5lZ2F0aXZlIGFuZCB0aGVyZWZvcmUgaW52YWxpZCB2YWx1ZVxuXHQgKiBAcGFyYW0gc291cmNlU2l6ZVZhbHVlXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRwZi5jYWxjTGVuZ3RoID0gZnVuY3Rpb24oIHNvdXJjZVNpemVWYWx1ZSApIHtcblxuXHRcdHZhciB2YWx1ZSA9IGV2YWxDU1Moc291cmNlU2l6ZVZhbHVlLCB0cnVlKSB8fCBmYWxzZTtcblx0XHRpZiAodmFsdWUgPCAwKSB7XG5cdFx0XHR2YWx1ZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fTtcblxuXHQvKipcblx0ICogVGFrZXMgYSB0eXBlIHN0cmluZyBhbmQgY2hlY2tzIGlmIGl0cyBzdXBwb3J0ZWRcblx0ICovXG5cblx0cGYuc3VwcG9ydHNUeXBlID0gZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0cmV0dXJuICggdHlwZSApID8gdHlwZXNbIHR5cGUgXSA6IHRydWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIFBhcnNlcyBhIHNvdXJjZVNpemUgaW50byBtZWRpYUNvbmRpdGlvbiAobWVkaWEpIGFuZCBzb3VyY2VTaXplVmFsdWUgKGxlbmd0aClcblx0ICogQHBhcmFtIHNvdXJjZVNpemVTdHJcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRwZi5wYXJzZVNpemUgPSBtZW1vaXplKGZ1bmN0aW9uKCBzb3VyY2VTaXplU3RyICkge1xuXHRcdHZhciBtYXRjaCA9ICggc291cmNlU2l6ZVN0ciB8fCBcIlwiICkubWF0Y2gocmVnU2l6ZSk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG1lZGlhOiBtYXRjaCAmJiBtYXRjaFsxXSxcblx0XHRcdGxlbmd0aDogbWF0Y2ggJiYgbWF0Y2hbMl1cblx0XHR9O1xuXHR9KTtcblxuXHRwZi5wYXJzZVNldCA9IGZ1bmN0aW9uKCBzZXQgKSB7XG5cdFx0aWYgKCAhc2V0LmNhbmRzICkge1xuXHRcdFx0c2V0LmNhbmRzID0gcGFyc2VTcmNzZXQoc2V0LnNyY3NldCwgc2V0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHNldC5jYW5kcztcblx0fTtcblxuXHQvKipcblx0ICogcmV0dXJucyAxZW0gaW4gY3NzIHB4IGZvciBodG1sL2JvZHkgZGVmYXVsdCBzaXplXG5cdCAqIGZ1bmN0aW9uIHRha2VuIGZyb20gcmVzcG9uZGpzXG5cdCAqIEByZXR1cm5zIHsqfG51bWJlcn1cblx0ICovXG5cdHBmLmdldEVtVmFsdWUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgYm9keTtcblx0XHRpZiAoICFlbWlucHggJiYgKGJvZHkgPSBkb2N1bWVudC5ib2R5KSApIHtcblx0XHRcdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICksXG5cdFx0XHRcdG9yaWdpbmFsSFRNTENTUyA9IGRvY0VsZW0uc3R5bGUuY3NzVGV4dCxcblx0XHRcdFx0b3JpZ2luYWxCb2R5Q1NTID0gYm9keS5zdHlsZS5jc3NUZXh0O1xuXG5cdFx0XHRkaXYuc3R5bGUuY3NzVGV4dCA9IGJhc2VTdHlsZTtcblxuXHRcdFx0Ly8gMWVtIGluIGEgbWVkaWEgcXVlcnkgaXMgdGhlIHZhbHVlIG9mIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBvZiB0aGUgYnJvd3NlclxuXHRcdFx0Ly8gcmVzZXQgZG9jRWxlbSBhbmQgYm9keSB0byBlbnN1cmUgdGhlIGNvcnJlY3QgdmFsdWUgaXMgcmV0dXJuZWRcblx0XHRcdGRvY0VsZW0uc3R5bGUuY3NzVGV4dCA9IGZzQ3NzO1xuXHRcdFx0Ym9keS5zdHlsZS5jc3NUZXh0ID0gZnNDc3M7XG5cblx0XHRcdGJvZHkuYXBwZW5kQ2hpbGQoIGRpdiApO1xuXHRcdFx0ZW1pbnB4ID0gZGl2Lm9mZnNldFdpZHRoO1xuXHRcdFx0Ym9keS5yZW1vdmVDaGlsZCggZGl2ICk7XG5cblx0XHRcdC8vYWxzbyB1cGRhdGUgZW1pbnB4IGJlZm9yZSByZXR1cm5pbmdcblx0XHRcdGVtaW5weCA9IHBhcnNlRmxvYXQoIGVtaW5weCwgMTAgKTtcblxuXHRcdFx0Ly8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgdmFsdWVzXG5cdFx0XHRkb2NFbGVtLnN0eWxlLmNzc1RleHQgPSBvcmlnaW5hbEhUTUxDU1M7XG5cdFx0XHRib2R5LnN0eWxlLmNzc1RleHQgPSBvcmlnaW5hbEJvZHlDU1M7XG5cblx0XHR9XG5cdFx0cmV0dXJuIGVtaW5weCB8fCAxNjtcblx0fTtcblxuXHQvKipcblx0ICogVGFrZXMgYSBzdHJpbmcgb2Ygc2l6ZXMgYW5kIHJldHVybnMgdGhlIHdpZHRoIGluIHBpeGVscyBhcyBhIG51bWJlclxuXHQgKi9cblx0cGYuY2FsY0xpc3RMZW5ndGggPSBmdW5jdGlvbiggc291cmNlU2l6ZUxpc3RTdHIgKSB7XG5cdFx0Ly8gU3BsaXQgdXAgc291cmNlIHNpemUgbGlzdCwgaWUgKCBtYXgtd2lkdGg6IDMwZW0gKSAxMDAlLCAoIG1heC13aWR0aDogNTBlbSApIDUwJSwgMzMlXG5cdFx0Ly9cblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIChtaW4td2lkdGg6MzBlbSkgY2FsYygzMCUgLSAxNXB4KVxuXHRcdGlmICggIShzb3VyY2VTaXplTGlzdFN0ciBpbiBzaXplTGVuZ3RoQ2FjaGUpIHx8IGNmZy51VCApIHtcblx0XHRcdHZhciB3aW5uaW5nTGVuZ3RoID0gcGYuY2FsY0xlbmd0aCggcGFyc2VTaXplcyggc291cmNlU2l6ZUxpc3RTdHIgKSApO1xuXG5cdFx0XHRzaXplTGVuZ3RoQ2FjaGVbIHNvdXJjZVNpemVMaXN0U3RyIF0gPSAhd2lubmluZ0xlbmd0aCA/IHVuaXRzLndpZHRoIDogd2lubmluZ0xlbmd0aDtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2l6ZUxlbmd0aENhY2hlWyBzb3VyY2VTaXplTGlzdFN0ciBdO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUYWtlcyBhIGNhbmRpZGF0ZSBvYmplY3Qgd2l0aCBhIHNyY3NldCBwcm9wZXJ0eSBpbiB0aGUgZm9ybSBvZiB1cmwvXG5cdCAqIGV4LiBcImltYWdlcy9waWMtbWVkaXVtLnBuZyAxeCwgaW1hZ2VzL3BpYy1tZWRpdW0tMngucG5nIDJ4XCIgb3Jcblx0ICogICAgIFwiaW1hZ2VzL3BpYy1tZWRpdW0ucG5nIDQwMHcsIGltYWdlcy9waWMtbWVkaXVtLTJ4LnBuZyA4MDB3XCIgb3Jcblx0ICogICAgIFwiaW1hZ2VzL3BpYy1zbWFsbC5wbmdcIlxuXHQgKiBHZXQgYW4gYXJyYXkgb2YgaW1hZ2UgY2FuZGlkYXRlcyBpbiB0aGUgZm9ybSBvZlxuXHQgKiAgICAgIHt1cmw6IFwiL2Zvby9iYXIucG5nXCIsIHJlc29sdXRpb246IDF9XG5cdCAqIHdoZXJlIHJlc29sdXRpb24gaXMgaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLXZhbHVlcy0zLyNyZXNvbHV0aW9uLXZhbHVlXG5cdCAqIElmIHNpemVzIGlzIHNwZWNpZmllZCwgcmVzIGlzIGNhbGN1bGF0ZWRcblx0ICovXG5cdHBmLnNldFJlcyA9IGZ1bmN0aW9uKCBzZXQgKSB7XG5cdFx0dmFyIGNhbmRpZGF0ZXM7XG5cdFx0aWYgKCBzZXQgKSB7XG5cblx0XHRcdGNhbmRpZGF0ZXMgPSBwZi5wYXJzZVNldCggc2V0ICk7XG5cblx0XHRcdGZvciAoIHZhciBpID0gMCwgbGVuID0gY2FuZGlkYXRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0c2V0UmVzb2x1dGlvbiggY2FuZGlkYXRlc1sgaSBdLCBzZXQuc2l6ZXMgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhbmRpZGF0ZXM7XG5cdH07XG5cblx0cGYuc2V0UmVzLnJlcyA9IHNldFJlc29sdXRpb247XG5cblx0cGYuYXBwbHlTZXRDYW5kaWRhdGUgPSBmdW5jdGlvbiggY2FuZGlkYXRlcywgaW1nICkge1xuXHRcdGlmICggIWNhbmRpZGF0ZXMubGVuZ3RoICkge3JldHVybjt9XG5cdFx0dmFyIGNhbmRpZGF0ZSxcblx0XHRcdGksXG5cdFx0XHRqLFxuXHRcdFx0bGVuZ3RoLFxuXHRcdFx0YmVzdENhbmRpZGF0ZSxcblx0XHRcdGN1clNyYyxcblx0XHRcdGN1ckNhbixcblx0XHRcdGNhbmRpZGF0ZVNyYyxcblx0XHRcdGFib3J0Q3VyU3JjO1xuXG5cdFx0dmFyIGltYWdlRGF0YSA9IGltZ1sgcGYubnMgXTtcblx0XHR2YXIgZHByID0gcGYuRFBSO1xuXG5cdFx0Y3VyU3JjID0gaW1hZ2VEYXRhLmN1clNyYyB8fCBpbWdbY3VyU3JjUHJvcF07XG5cblx0XHRjdXJDYW4gPSBpbWFnZURhdGEuY3VyQ2FuIHx8IHNldFNyY1RvQ3VyKGltZywgY3VyU3JjLCBjYW5kaWRhdGVzWzBdLnNldCk7XG5cblx0XHQvLyBpZiB3ZSBoYXZlIGEgY3VycmVudCBzb3VyY2UsIHdlIG1pZ2h0IGVpdGhlciBiZWNvbWUgbGF6eSBvciBnaXZlIHRoaXMgc291cmNlIHNvbWUgYWR2YW50YWdlXG5cdFx0aWYgKCBjdXJDYW4gJiYgY3VyQ2FuLnNldCA9PT0gY2FuZGlkYXRlc1sgMCBdLnNldCApIHtcblxuXHRcdFx0Ly8gaWYgYnJvd3NlciBjYW4gYWJvcnQgaW1hZ2UgcmVxdWVzdCBhbmQgdGhlIGltYWdlIGhhcyBhIGhpZ2hlciBwaXhlbCBkZW5zaXR5IHRoYW4gbmVlZGVkXG5cdFx0XHQvLyBhbmQgdGhpcyBpbWFnZSBpc24ndCBkb3dubG9hZGVkIHlldCwgd2Ugc2tpcCBuZXh0IHBhcnQgYW5kIHRyeSB0byBzYXZlIGJhbmR3aWR0aFxuXHRcdFx0YWJvcnRDdXJTcmMgPSAoc3VwcG9ydEFib3J0ICYmICFpbWcuY29tcGxldGUgJiYgY3VyQ2FuLnJlcyAtIDAuMSA+IGRwcik7XG5cblx0XHRcdGlmICggIWFib3J0Q3VyU3JjICkge1xuXHRcdFx0XHRjdXJDYW4uY2FjaGVkID0gdHJ1ZTtcblxuXHRcdFx0XHQvLyBpZiBjdXJyZW50IGNhbmRpZGF0ZSBpcyBcImJlc3RcIiwgXCJiZXR0ZXJcIiBvciBcIm9rYXlcIixcblx0XHRcdFx0Ly8gc2V0IGl0IHRvIGJlc3RDYW5kaWRhdGVcblx0XHRcdFx0aWYgKCBjdXJDYW4ucmVzID49IGRwciApIHtcblx0XHRcdFx0XHRiZXN0Q2FuZGlkYXRlID0gY3VyQ2FuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCAhYmVzdENhbmRpZGF0ZSApIHtcblxuXHRcdFx0Y2FuZGlkYXRlcy5zb3J0KCBhc2NlbmRpbmdTb3J0ICk7XG5cblx0XHRcdGxlbmd0aCA9IGNhbmRpZGF0ZXMubGVuZ3RoO1xuXHRcdFx0YmVzdENhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbIGxlbmd0aCAtIDEgXTtcblxuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0Y2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgaSBdO1xuXHRcdFx0XHRpZiAoIGNhbmRpZGF0ZS5yZXMgPj0gZHByICkge1xuXHRcdFx0XHRcdGogPSBpIC0gMTtcblxuXHRcdFx0XHRcdC8vIHdlIGhhdmUgZm91bmQgdGhlIHBlcmZlY3QgY2FuZGlkYXRlLFxuXHRcdFx0XHRcdC8vIGJ1dCBsZXQncyBpbXByb3ZlIHRoaXMgYSBsaXR0bGUgYml0IHdpdGggc29tZSBhc3N1bXB0aW9ucyA7LSlcblx0XHRcdFx0XHRpZiAoY2FuZGlkYXRlc1sgaiBdICYmXG5cdFx0XHRcdFx0XHQoYWJvcnRDdXJTcmMgfHwgY3VyU3JjICE9PSBwZi5tYWtlVXJsKCBjYW5kaWRhdGUudXJsICkpICYmXG5cdFx0XHRcdFx0XHRjaG9vc2VMb3dSZXMoY2FuZGlkYXRlc1sgaiBdLnJlcywgY2FuZGlkYXRlLnJlcywgZHByLCBjYW5kaWRhdGVzWyBqIF0uY2FjaGVkKSkge1xuXG5cdFx0XHRcdFx0XHRiZXN0Q2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgaiBdO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjYW5kaWRhdGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBiZXN0Q2FuZGlkYXRlICkge1xuXG5cdFx0XHRjYW5kaWRhdGVTcmMgPSBwZi5tYWtlVXJsKCBiZXN0Q2FuZGlkYXRlLnVybCApO1xuXG5cdFx0XHRpbWFnZURhdGEuY3VyU3JjID0gY2FuZGlkYXRlU3JjO1xuXHRcdFx0aW1hZ2VEYXRhLmN1ckNhbiA9IGJlc3RDYW5kaWRhdGU7XG5cblx0XHRcdGlmICggY2FuZGlkYXRlU3JjICE9PSBjdXJTcmMgKSB7XG5cdFx0XHRcdHBmLnNldFNyYyggaW1nLCBiZXN0Q2FuZGlkYXRlICk7XG5cdFx0XHR9XG5cdFx0XHRwZi5zZXRTaXplKCBpbWcgKTtcblx0XHR9XG5cdH07XG5cblx0cGYuc2V0U3JjID0gZnVuY3Rpb24oIGltZywgYmVzdENhbmRpZGF0ZSApIHtcblx0XHR2YXIgb3JpZ1dpZHRoO1xuXHRcdGltZy5zcmMgPSBiZXN0Q2FuZGlkYXRlLnVybDtcblxuXHRcdC8vIGFsdGhvdWdoIHRoaXMgaXMgYSBzcGVjaWZpYyBTYWZhcmkgaXNzdWUsIHdlIGRvbid0IHdhbnQgdG8gdGFrZSB0b28gbXVjaCBkaWZmZXJlbnQgY29kZSBwYXRoc1xuXHRcdGlmICggYmVzdENhbmRpZGF0ZS5zZXQudHlwZSA9PT0gXCJpbWFnZS9zdmcreG1sXCIgKSB7XG5cdFx0XHRvcmlnV2lkdGggPSBpbWcuc3R5bGUud2lkdGg7XG5cdFx0XHRpbWcuc3R5bGUud2lkdGggPSAoaW1nLm9mZnNldFdpZHRoICsgMSkgKyBcInB4XCI7XG5cblx0XHRcdC8vIG5leHQgbGluZSBvbmx5IHNob3VsZCB0cmlnZ2VyIGEgcmVwYWludFxuXHRcdFx0Ly8gaWYuLi4gaXMgb25seSBkb25lIHRvIHRyaWNrIGRlYWQgY29kZSByZW1vdmFsXG5cdFx0XHRpZiAoIGltZy5vZmZzZXRXaWR0aCArIDEgKSB7XG5cdFx0XHRcdGltZy5zdHlsZS53aWR0aCA9IG9yaWdXaWR0aDtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0cGYuZ2V0U2V0ID0gZnVuY3Rpb24oIGltZyApIHtcblx0XHR2YXIgaSwgc2V0LCBzdXBwb3J0c1R5cGU7XG5cdFx0dmFyIG1hdGNoID0gZmFsc2U7XG5cdFx0dmFyIHNldHMgPSBpbWcgWyBwZi5ucyBdLnNldHM7XG5cblx0XHRmb3IgKCBpID0gMDsgaSA8IHNldHMubGVuZ3RoICYmICFtYXRjaDsgaSsrICkge1xuXHRcdFx0c2V0ID0gc2V0c1tpXTtcblxuXHRcdFx0aWYgKCAhc2V0LnNyY3NldCB8fCAhcGYubWF0Y2hlc01lZGlhKCBzZXQubWVkaWEgKSB8fCAhKHN1cHBvcnRzVHlwZSA9IHBmLnN1cHBvcnRzVHlwZSggc2V0LnR5cGUgKSkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN1cHBvcnRzVHlwZSA9PT0gXCJwZW5kaW5nXCIgKSB7XG5cdFx0XHRcdHNldCA9IHN1cHBvcnRzVHlwZTtcblx0XHRcdH1cblxuXHRcdFx0bWF0Y2ggPSBzZXQ7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gbWF0Y2g7XG5cdH07XG5cblx0cGYucGFyc2VTZXRzID0gZnVuY3Rpb24oIGVsZW1lbnQsIHBhcmVudCwgb3B0aW9ucyApIHtcblx0XHR2YXIgc3Jjc2V0QXR0cmlidXRlLCBpbWFnZVNldCwgaXNXRGVzY3JpcG9yLCBzcmNzZXRQYXJzZWQ7XG5cblx0XHR2YXIgaGFzUGljdHVyZSA9IHBhcmVudCAmJiBwYXJlbnQubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJQSUNUVVJFXCI7XG5cdFx0dmFyIGltYWdlRGF0YSA9IGVsZW1lbnRbIHBmLm5zIF07XG5cblx0XHRpZiAoIGltYWdlRGF0YS5zcmMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnNyYyApIHtcblx0XHRcdGltYWdlRGF0YS5zcmMgPSBnZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIFwic3JjXCIgKTtcblx0XHRcdGlmICggaW1hZ2VEYXRhLnNyYyApIHtcblx0XHRcdFx0c2V0SW1nQXR0ci5jYWxsKCBlbGVtZW50LCBzcmNBdHRyLCBpbWFnZURhdGEuc3JjICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZW1vdmVJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIHNyY0F0dHIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGltYWdlRGF0YS5zcmNzZXQgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnNyY3NldCB8fCAhcGYuc3VwU3Jjc2V0IHx8IGVsZW1lbnQuc3Jjc2V0ICkge1xuXHRcdFx0c3Jjc2V0QXR0cmlidXRlID0gZ2V0SW1nQXR0ci5jYWxsKCBlbGVtZW50LCBcInNyY3NldFwiICk7XG5cdFx0XHRpbWFnZURhdGEuc3Jjc2V0ID0gc3Jjc2V0QXR0cmlidXRlO1xuXHRcdFx0c3Jjc2V0UGFyc2VkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpbWFnZURhdGEuc2V0cyA9IFtdO1xuXG5cdFx0aWYgKCBoYXNQaWN0dXJlICkge1xuXHRcdFx0aW1hZ2VEYXRhLnBpYyA9IHRydWU7XG5cdFx0XHRnZXRBbGxTb3VyY2VFbGVtZW50cyggcGFyZW50LCBpbWFnZURhdGEuc2V0cyApO1xuXHRcdH1cblxuXHRcdGlmICggaW1hZ2VEYXRhLnNyY3NldCApIHtcblx0XHRcdGltYWdlU2V0ID0ge1xuXHRcdFx0XHRzcmNzZXQ6IGltYWdlRGF0YS5zcmNzZXQsXG5cdFx0XHRcdHNpemVzOiBnZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIFwic2l6ZXNcIiApXG5cdFx0XHR9O1xuXG5cdFx0XHRpbWFnZURhdGEuc2V0cy5wdXNoKCBpbWFnZVNldCApO1xuXG5cdFx0XHRpc1dEZXNjcmlwb3IgPSAoYWx3YXlzQ2hlY2tXRGVzY3JpcHRvciB8fCBpbWFnZURhdGEuc3JjKSAmJiByZWdXRGVzYy50ZXN0KGltYWdlRGF0YS5zcmNzZXQgfHwgXCJcIik7XG5cblx0XHRcdC8vIGFkZCBub3JtYWwgc3JjIGFzIGNhbmRpZGF0ZSwgaWYgc291cmNlIGhhcyBubyB3IGRlc2NyaXB0b3Jcblx0XHRcdGlmICggIWlzV0Rlc2NyaXBvciAmJiBpbWFnZURhdGEuc3JjICYmICFnZXRDYW5kaWRhdGVGb3JTcmMoaW1hZ2VEYXRhLnNyYywgaW1hZ2VTZXQpICYmICFpbWFnZVNldC5oYXMxeCApIHtcblx0XHRcdFx0aW1hZ2VTZXQuc3Jjc2V0ICs9IFwiLCBcIiArIGltYWdlRGF0YS5zcmM7XG5cdFx0XHRcdGltYWdlU2V0LmNhbmRzLnB1c2goe1xuXHRcdFx0XHRcdHVybDogaW1hZ2VEYXRhLnNyYyxcblx0XHRcdFx0XHRkOiAxLFxuXHRcdFx0XHRcdHNldDogaW1hZ2VTZXRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHR9IGVsc2UgaWYgKCBpbWFnZURhdGEuc3JjICkge1xuXHRcdFx0aW1hZ2VEYXRhLnNldHMucHVzaCgge1xuXHRcdFx0XHRzcmNzZXQ6IGltYWdlRGF0YS5zcmMsXG5cdFx0XHRcdHNpemVzOiBudWxsXG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aW1hZ2VEYXRhLmN1ckNhbiA9IG51bGw7XG5cdFx0aW1hZ2VEYXRhLmN1clNyYyA9IHVuZGVmaW5lZDtcblxuXHRcdC8vIGlmIGltZyBoYXMgcGljdHVyZSBvciB0aGUgc3Jjc2V0IHdhcyByZW1vdmVkIG9yIGhhcyBhIHNyY3NldCBhbmQgZG9lcyBub3Qgc3VwcG9ydCBzcmNzZXQgYXQgYWxsXG5cdFx0Ly8gb3IgaGFzIGEgdyBkZXNjcmlwdG9yIChhbmQgZG9lcyBub3Qgc3VwcG9ydCBzaXplcykgc2V0IHN1cHBvcnQgdG8gZmFsc2UgdG8gZXZhbHVhdGVcblx0XHRpbWFnZURhdGEuc3VwcG9ydGVkID0gISggaGFzUGljdHVyZSB8fCAoIGltYWdlU2V0ICYmICFwZi5zdXBTcmNzZXQgKSB8fCAoaXNXRGVzY3JpcG9yICYmICFwZi5zdXBTaXplcykgKTtcblxuXHRcdGlmICggc3Jjc2V0UGFyc2VkICYmIHBmLnN1cFNyY3NldCAmJiAhaW1hZ2VEYXRhLnN1cHBvcnRlZCApIHtcblx0XHRcdGlmICggc3Jjc2V0QXR0cmlidXRlICkge1xuXHRcdFx0XHRzZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIHNyY3NldEF0dHIsIHNyY3NldEF0dHJpYnV0ZSApO1xuXHRcdFx0XHRlbGVtZW50LnNyY3NldCA9IFwiXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZW1vdmVJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIHNyY3NldEF0dHIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaW1hZ2VEYXRhLnN1cHBvcnRlZCAmJiAhaW1hZ2VEYXRhLnNyY3NldCAmJiAoKCFpbWFnZURhdGEuc3JjICYmIGVsZW1lbnQuc3JjKSB8fCAgZWxlbWVudC5zcmMgIT09IHBmLm1ha2VVcmwoaW1hZ2VEYXRhLnNyYykpKSB7XG5cdFx0XHRpZiAoaW1hZ2VEYXRhLnNyYyA9PT0gbnVsbCkge1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuc3JjID0gaW1hZ2VEYXRhLnNyYztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpbWFnZURhdGEucGFyc2VkID0gdHJ1ZTtcblx0fTtcblxuXHRwZi5maWxsSW1nID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykge1xuXHRcdHZhciBpbWFnZURhdGE7XG5cdFx0dmFyIGV4dHJlbWUgPSBvcHRpb25zLnJlc2VsZWN0IHx8IG9wdGlvbnMucmVldmFsdWF0ZTtcblxuXHRcdC8vIGV4cGFuZG8gZm9yIGNhY2hpbmcgZGF0YSBvbiB0aGUgaW1nXG5cdFx0aWYgKCAhZWxlbWVudFsgcGYubnMgXSApIHtcblx0XHRcdGVsZW1lbnRbIHBmLm5zIF0gPSB7fTtcblx0XHR9XG5cblx0XHRpbWFnZURhdGEgPSBlbGVtZW50WyBwZi5ucyBdO1xuXG5cdFx0Ly8gaWYgdGhlIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBldmFsdWF0ZWQsIHNraXAgaXRcblx0XHQvLyB1bmxlc3MgYG9wdGlvbnMucmVldmFsdWF0ZWAgaXMgc2V0IHRvIHRydWUgKCB0aGlzLCBmb3IgZXhhbXBsZSxcblx0XHQvLyBpcyBzZXQgdG8gdHJ1ZSB3aGVuIHJ1bm5pbmcgYHBpY3R1cmVmaWxsYCBvbiBgcmVzaXplYCApLlxuXHRcdGlmICggIWV4dHJlbWUgJiYgaW1hZ2VEYXRhLmV2YWxlZCA9PT0gZXZhbElkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggIWltYWdlRGF0YS5wYXJzZWQgfHwgb3B0aW9ucy5yZWV2YWx1YXRlICkge1xuXHRcdFx0cGYucGFyc2VTZXRzKCBlbGVtZW50LCBlbGVtZW50LnBhcmVudE5vZGUsIG9wdGlvbnMgKTtcblx0XHR9XG5cblx0XHRpZiAoICFpbWFnZURhdGEuc3VwcG9ydGVkICkge1xuXHRcdFx0YXBwbHlCZXN0Q2FuZGlkYXRlKCBlbGVtZW50ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGltYWdlRGF0YS5ldmFsZWQgPSBldmFsSWQ7XG5cdFx0fVxuXHR9O1xuXG5cdHBmLnNldHVwUnVuID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCAhYWxyZWFkeVJ1biB8fCBpc1Z3RGlydHkgfHwgKERQUiAhPT0gd2luZG93LmRldmljZVBpeGVsUmF0aW8pICkge1xuXHRcdFx0dXBkYXRlTWV0cmljcygpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBJZiBwaWN0dXJlIGlzIHN1cHBvcnRlZCwgd2VsbCwgdGhhdCdzIGF3ZXNvbWUuXG5cdGlmICggcGYuc3VwUGljdHVyZSApIHtcblx0XHRwaWN0dXJlZmlsbCA9IG5vb3A7XG5cdFx0cGYuZmlsbEltZyA9IG5vb3A7XG5cdH0gZWxzZSB7XG5cblx0XHQgLy8gU2V0IHVwIHBpY3R1cmUgcG9seWZpbGwgYnkgcG9sbGluZyB0aGUgZG9jdW1lbnRcblx0XHQoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaXNEb21SZWFkeTtcblx0XHRcdHZhciByZWdSZWFkeSA9IHdpbmRvdy5hdHRhY2hFdmVudCA/IC9kJHxeYy8gOiAvZCR8XmN8XmkvO1xuXG5cdFx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZSB8fCBcIlwiO1xuXG5cdFx0XHRcdHRpbWVySWQgPSBzZXRUaW1lb3V0KHJ1biwgcmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIgPyAyMDAgOiAgOTk5KTtcblx0XHRcdFx0aWYgKCBkb2N1bWVudC5ib2R5ICkge1xuXHRcdFx0XHRcdHBmLmZpbGxJbWdzKCk7XG5cdFx0XHRcdFx0aXNEb21SZWFkeSA9IGlzRG9tUmVhZHkgfHwgcmVnUmVhZHkudGVzdChyZWFkeVN0YXRlKTtcblx0XHRcdFx0XHRpZiAoIGlzRG9tUmVhZHkgKSB7XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVySWQgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dmFyIHRpbWVySWQgPSBzZXRUaW1lb3V0KHJ1biwgZG9jdW1lbnQuYm9keSA/IDkgOiA5OSk7XG5cblx0XHRcdC8vIEFsc28gYXR0YWNoIHBpY3R1cmVmaWxsIG9uIHJlc2l6ZSBhbmQgcmVhZHlzdGF0ZWNoYW5nZVxuXHRcdFx0Ly8gaHR0cDovL21vZGVybmphdmFzY3JpcHQuYmxvZ3Nwb3QuY29tLzIwMTMvMDgvYnVpbGRpbmctYmV0dGVyLWRlYm91bmNlLmh0bWxcblx0XHRcdHZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQpIHtcblx0XHRcdFx0dmFyIHRpbWVvdXQsIHRpbWVzdGFtcDtcblx0XHRcdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIGxhc3QgPSAobmV3IERhdGUoKSkgLSB0aW1lc3RhbXA7XG5cblx0XHRcdFx0XHRpZiAobGFzdCA8IHdhaXQpIHtcblx0XHRcdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRcdFx0ZnVuYygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dGltZXN0YW1wID0gbmV3IERhdGUoKTtcblxuXHRcdFx0XHRcdGlmICghdGltZW91dCkge1xuXHRcdFx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0XHR2YXIgbGFzdENsaWVudFdpZHRoID0gZG9jRWxlbS5jbGllbnRIZWlnaHQ7XG5cdFx0XHR2YXIgb25SZXNpemUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aXNWd0RpcnR5ID0gTWF0aC5tYXgod2luZG93LmlubmVyV2lkdGggfHwgMCwgZG9jRWxlbS5jbGllbnRXaWR0aCkgIT09IHVuaXRzLndpZHRoIHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0ICE9PSBsYXN0Q2xpZW50V2lkdGg7XG5cdFx0XHRcdGxhc3RDbGllbnRXaWR0aCA9IGRvY0VsZW0uY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRpZiAoIGlzVndEaXJ0eSApIHtcblx0XHRcdFx0XHRwZi5maWxsSW1ncygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRvbiggd2luZG93LCBcInJlc2l6ZVwiLCBkZWJvdW5jZShvblJlc2l6ZSwgOTkgKSApO1xuXHRcdFx0b24oIGRvY3VtZW50LCBcInJlYWR5c3RhdGVjaGFuZ2VcIiwgcnVuICk7XG5cdFx0fSkoKTtcblx0fVxuXG5cdHBmLnBpY3R1cmVmaWxsID0gcGljdHVyZWZpbGw7XG5cdC8vdXNlIHRoaXMgaW50ZXJuYWxseSBmb3IgZWFzeSBtb25rZXkgcGF0Y2hpbmcvcGVyZm9ybWFuY2UgdGVzdGluZ1xuXHRwZi5maWxsSW1ncyA9IHBpY3R1cmVmaWxsO1xuXHRwZi50ZWFyZG93blJ1biA9IG5vb3A7XG5cblx0LyogZXhwb3NlIG1ldGhvZHMgZm9yIHRlc3RpbmcgKi9cblx0cGljdHVyZWZpbGwuXyA9IHBmO1xuXG5cdHdpbmRvdy5waWN0dXJlZmlsbENGRyA9IHtcblx0XHRwZjogcGYsXG5cdFx0cHVzaDogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0dmFyIG5hbWUgPSBhcmdzLnNoaWZ0KCk7XG5cdFx0XHRpZiAodHlwZW9mIHBmW25hbWVdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0cGZbbmFtZV0uYXBwbHkocGYsIGFyZ3MpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2ZnW25hbWVdID0gYXJnc1swXTtcblx0XHRcdFx0aWYgKGFscmVhZHlSdW4pIHtcblx0XHRcdFx0XHRwZi5maWxsSW1ncyggeyByZXNlbGVjdDogdHJ1ZSB9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0d2hpbGUgKHNldE9wdGlvbnMgJiYgc2V0T3B0aW9ucy5sZW5ndGgpIHtcblx0XHR3aW5kb3cucGljdHVyZWZpbGxDRkcucHVzaChzZXRPcHRpb25zLnNoaWZ0KCkpO1xuXHR9XG5cblx0LyogZXhwb3NlIHBpY3R1cmVmaWxsICovXG5cdHdpbmRvdy5waWN0dXJlZmlsbCA9IHBpY3R1cmVmaWxsO1xuXG5cdC8qIGV4cG9zZSBwaWN0dXJlZmlsbCAqL1xuXHRpZiAoIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiICkge1xuXHRcdC8vIENvbW1vbkpTLCBqdXN0IGV4cG9ydFxuXHRcdG1vZHVsZS5leHBvcnRzID0gcGljdHVyZWZpbGw7XG5cdH0gZWxzZSBpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXHRcdC8vIEFNRCBzdXBwb3J0XG5cdFx0ZGVmaW5lKCBcInBpY3R1cmVmaWxsXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcGljdHVyZWZpbGw7IH0gKTtcblx0fVxuXG5cdC8vIElFOCBldmFscyB0aGlzIHN5bmMsIHNvIGl0IG11c3QgYmUgdGhlIGxhc3QgdGhpbmcgd2UgZG9cblx0aWYgKCAhcGYuc3VwUGljdHVyZSApIHtcblx0XHR0eXBlc1sgXCJpbWFnZS93ZWJwXCIgXSA9IGRldGVjdFR5cGVTdXBwb3J0KFwiaW1hZ2Uvd2VicFwiLCBcImRhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1Jrb0FBQUJYUlVKUVZsQTRXQW9BQUFBUUFBQUFBQUFBQUFBQVFVeFFTQXdBQUFBQkJ4QVIvUTlFUlA4REFBQldVRGdnR0FBQUFEQUJBSjBCS2dFQUFRQURBRFFscEFBRGNBRCsrLzFRQUE9PVwiICk7XG5cdH1cblxufSApKCB3aW5kb3csIGRvY3VtZW50ICk7XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiLyoqXG4gKiBaZW5zY3JvbGwgNC4wLjJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5nYWJvci96ZW5zY3JvbGwvXG4gKlxuICogQ29weXJpZ2h0IDIwMTXigJMyMDE4IEdhYm9yIExlbmFyZFxuICpcbiAqIFRoaXMgaXMgZnJlZSBhbmQgdW5lbmN1bWJlcmVkIHNvZnR3YXJlIHJlbGVhc2VkIGludG8gdGhlIHB1YmxpYyBkb21haW4uXG4gKiBcbiAqIEFueW9uZSBpcyBmcmVlIHRvIGNvcHksIG1vZGlmeSwgcHVibGlzaCwgdXNlLCBjb21waWxlLCBzZWxsLCBvclxuICogZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlLCBlaXRoZXIgaW4gc291cmNlIGNvZGUgZm9ybSBvciBhcyBhIGNvbXBpbGVkXG4gKiBiaW5hcnksIGZvciBhbnkgcHVycG9zZSwgY29tbWVyY2lhbCBvciBub24tY29tbWVyY2lhbCwgYW5kIGJ5IGFueVxuICogbWVhbnMuXG4gKiBcbiAqIEluIGp1cmlzZGljdGlvbnMgdGhhdCByZWNvZ25pemUgY29weXJpZ2h0IGxhd3MsIHRoZSBhdXRob3Igb3IgYXV0aG9yc1xuICogb2YgdGhpcyBzb2Z0d2FyZSBkZWRpY2F0ZSBhbnkgYW5kIGFsbCBjb3B5cmlnaHQgaW50ZXJlc3QgaW4gdGhlXG4gKiBzb2Z0d2FyZSB0byB0aGUgcHVibGljIGRvbWFpbi4gV2UgbWFrZSB0aGlzIGRlZGljYXRpb24gZm9yIHRoZSBiZW5lZml0XG4gKiBvZiB0aGUgcHVibGljIGF0IGxhcmdlIGFuZCB0byB0aGUgZGV0cmltZW50IG9mIG91ciBoZWlycyBhbmRcbiAqIHN1Y2Nlc3NvcnMuIFdlIGludGVuZCB0aGlzIGRlZGljYXRpb24gdG8gYmUgYW4gb3ZlcnQgYWN0IG9mXG4gKiByZWxpbnF1aXNobWVudCBpbiBwZXJwZXR1aXR5IG9mIGFsbCBwcmVzZW50IGFuZCBmdXR1cmUgcmlnaHRzIHRvIHRoaXNcbiAqIHNvZnR3YXJlIHVuZGVyIGNvcHlyaWdodCBsYXcuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbiAqIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SXG4gKiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSxcbiAqIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuICogT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICogXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHJlZmVyIHRvIDxodHRwOi8vdW5saWNlbnNlLm9yZz5cbiAqIFxuICovXG5cbi8qanNoaW50IGRldmVsOnRydWUsIGFzaTp0cnVlICovXG5cbi8qZ2xvYmFsIGRlZmluZSwgbW9kdWxlICovXG5cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShbXSwgZmFjdG9yeSgpKVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuXHR9IGVsc2Uge1xuXHRcdChmdW5jdGlvbiBpbnN0YWxsKCkge1xuXHRcdFx0Ly8gVG8gbWFrZSBzdXJlIFplbnNjcm9sbCBjYW4gYmUgcmVmZXJlbmNlZCBmcm9tIHRoZSBoZWFkZXIsIGJlZm9yZSBgYm9keWAgaXMgYXZhaWxhYmxlXG5cdFx0XHRpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xuXHRcdFx0XHRyb290LnplbnNjcm9sbCA9IGZhY3RvcnkoKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gcmV0cnkgOW1zIGxhdGVyXG5cdFx0XHRcdHNldFRpbWVvdXQoaW5zdGFsbCwgOSlcblx0XHRcdH1cblx0XHR9KSgpXG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXHRcInVzZSBzdHJpY3RcIlxuXG5cblx0Ly8gRGV0ZWN0IGlmIHRoZSBicm93c2VyIGFscmVhZHkgc3VwcG9ydHMgbmF0aXZlIHNtb290aCBzY3JvbGxpbmcgKGUuZy4sIEZpcmVmb3ggMzYrIGFuZCBDaHJvbWUgNDkrKSBhbmQgaXQgaXMgZW5hYmxlZDpcblx0dmFyIGlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRyZXR1cm4gZWxlbSAmJiBcImdldENvbXB1dGVkU3R5bGVcIiBpbiB3aW5kb3cgJiZcblx0XHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pW1wic2Nyb2xsLWJlaGF2aW9yXCJdID09PSBcInNtb290aFwiXG5cdH1cblxuXG5cdC8vIEV4aXQgaWYgaXTigJlzIG5vdCBhIGJyb3dzZXIgZW52aXJvbm1lbnQ6XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8ICEoXCJkb2N1bWVudFwiIGluIHdpbmRvdykpIHtcblx0XHRyZXR1cm4ge31cblx0fVxuXG5cblx0dmFyIG1ha2VTY3JvbGxlciA9IGZ1bmN0aW9uIChjb250YWluZXIsIGRlZmF1bHREdXJhdGlvbiwgZWRnZU9mZnNldCkge1xuXG5cdFx0Ly8gVXNlIGRlZmF1bHRzIGlmIG5vdCBwcm92aWRlZFxuXHRcdGRlZmF1bHREdXJhdGlvbiA9IGRlZmF1bHREdXJhdGlvbiB8fCA5OTkgLy9tc1xuXHRcdGlmICghZWRnZU9mZnNldCAmJiBlZGdlT2Zmc2V0ICE9PSAwKSB7XG5cdFx0XHQvLyBXaGVuIHNjcm9sbGluZywgdGhpcyBhbW91bnQgb2YgZGlzdGFuY2UgaXMga2VwdCBmcm9tIHRoZSBlZGdlcyBvZiB0aGUgY29udGFpbmVyOlxuXHRcdFx0ZWRnZU9mZnNldCA9IDkgLy9weFxuXHRcdH1cblxuXHRcdC8vIEhhbmRsaW5nIHRoZSBsaWZlLWN5Y2xlIG9mIHRoZSBzY3JvbGxlclxuXHRcdHZhciBzY3JvbGxUaW1lb3V0SWRcblx0XHR2YXIgc2V0U2Nyb2xsVGltZW91dElkID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG5cdFx0XHRzY3JvbGxUaW1lb3V0SWQgPSBuZXdWYWx1ZVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFN0b3AgdGhlIGN1cnJlbnQgc21vb3RoIHNjcm9sbCBvcGVyYXRpb24gaW1tZWRpYXRlbHlcblx0XHQgKi9cblx0XHR2YXIgc3RvcFNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNsZWFyVGltZW91dChzY3JvbGxUaW1lb3V0SWQpXG5cdFx0XHRzZXRTY3JvbGxUaW1lb3V0SWQoMClcblx0XHR9XG5cblx0XHR2YXIgZ2V0VG9wV2l0aEVkZ2VPZmZzZXQgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0cmV0dXJuIE1hdGgubWF4KDAsIGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSAtIGVkZ2VPZmZzZXQpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byBhIHNwZWNpZmljIHZlcnRpY2FsIHBvc2l0aW9uIGluIHRoZSBkb2N1bWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7dGFyZ2V0WX0gVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdpdGhpbiB0aGUgZG9jdW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogICAgICAgIElmIG5vdCBwcm92aWRlZCB0aGUgZGVmYXVsdCBkdXJhdGlvbiBpcyB1c2VkLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9ZID0gZnVuY3Rpb24gKHRhcmdldFksIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHN0b3BTY3JvbGwoKVxuXHRcdFx0aWYgKGR1cmF0aW9uID09PSAwIHx8IChkdXJhdGlvbiAmJiBkdXJhdGlvbiA8IDApIHx8IGlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uKGNvbnRhaW5lci5ib2R5KSkge1xuXHRcdFx0XHRjb250YWluZXIudG9ZKHRhcmdldFkpXG5cdFx0XHRcdGlmIChvbkRvbmUpIHtcblx0XHRcdFx0XHRvbkRvbmUoKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgc3RhcnRZID0gY29udGFpbmVyLmdldFkoKVxuXHRcdFx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLm1heCgwLCB0YXJnZXRZKSAtIHN0YXJ0WVxuXHRcdFx0XHR2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcblx0XHRcdFx0ZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBNYXRoLm1pbihNYXRoLmFicyhkaXN0YW5jZSksIGRlZmF1bHREdXJhdGlvbik7XG5cdFx0XHRcdChmdW5jdGlvbiBsb29wU2Nyb2xsKCkge1xuXHRcdFx0XHRcdHNldFNjcm9sbFRpbWVvdXRJZChzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSBwZXJjZW50YWdlOlxuXHRcdFx0XHRcdFx0dmFyIHAgPSBNYXRoLm1pbigxLCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24pXG5cdFx0XHRcdFx0XHQvLyBDYWxjdWxhdGUgdGhlIGFic29sdXRlIHZlcnRpY2FsIHBvc2l0aW9uOlxuXHRcdFx0XHRcdFx0dmFyIHkgPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKHN0YXJ0WSArIGRpc3RhbmNlKihwIDwgMC41ID8gMipwKnAgOiBwKig0IC0gcCoyKS0xKSkpXG5cdFx0XHRcdFx0XHRjb250YWluZXIudG9ZKHkpXG5cdFx0XHRcdFx0XHRpZiAocCA8IDEgJiYgKGNvbnRhaW5lci5nZXRIZWlnaHQoKSArIHkpIDwgY29udGFpbmVyLmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdGxvb3BTY3JvbGwoKVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChzdG9wU2Nyb2xsLCA5OSkgLy8gd2l0aCBjb29sZG93biB0aW1lXG5cdFx0XHRcdFx0XHRcdGlmIChvbkRvbmUpIHtcblx0XHRcdFx0XHRcdFx0XHRvbkRvbmUoKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgOSkpXG5cdFx0XHRcdH0pKClcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIHRvIHRoZSB0b3Agb2YgYSBzcGVjaWZpYyBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtlbGVtfSBUaGUgZWxlbWVudCB0byBzY3JvbGwgdG8uXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb0VsZW0gPSBmdW5jdGlvbiAoZWxlbSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0c2Nyb2xsVG9ZKGdldFRvcFdpdGhFZGdlT2Zmc2V0KGVsZW0pLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgYW4gZWxlbWVudCBpbnRvIHZpZXcgaWYgbmVjZXNzYXJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtlbGVtfSBUaGUgZWxlbWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHZhciBlbGVtSGVpZ2h0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcblx0XHRcdHZhciBlbGVtQm90dG9tID0gY29udGFpbmVyLmdldFRvcE9mKGVsZW0pICsgZWxlbUhlaWdodFxuXHRcdFx0dmFyIGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5nZXRIZWlnaHQoKVxuXHRcdFx0dmFyIHkgPSBjb250YWluZXIuZ2V0WSgpXG5cdFx0XHR2YXIgY29udGFpbmVyQm90dG9tID0geSArIGNvbnRhaW5lckhlaWdodFxuXHRcdFx0aWYgKGdldFRvcFdpdGhFZGdlT2Zmc2V0KGVsZW0pIDwgeSB8fCAoZWxlbUhlaWdodCArIGVkZ2VPZmZzZXQpID4gY29udGFpbmVySGVpZ2h0KSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgY2xpcHBlZCBhdCB0b3Agb3IgaXMgaGlnaGVyIHRoYW4gc2NyZWVuLlxuXHRcdFx0XHRzY3JvbGxUb0VsZW0oZWxlbSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHRcdH0gZWxzZSBpZiAoKGVsZW1Cb3R0b20gKyBlZGdlT2Zmc2V0KSA+IGNvbnRhaW5lckJvdHRvbSkge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGNsaXBwZWQgYXQgdGhlIGJvdHRvbS5cblx0XHRcdFx0c2Nyb2xsVG9ZKGVsZW1Cb3R0b20gLSBjb250YWluZXJIZWlnaHQgKyBlZGdlT2Zmc2V0LCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdFx0fSBlbHNlIGlmIChvbkRvbmUpIHtcblx0XHRcdFx0b25Eb25lKClcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIHRvIHRoZSBjZW50ZXIgb2YgYW4gZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvZmZzZXR9IE9wdGlvbmFsbHkgdGhlIG9mZnNldCBvZiB0aGUgdG9wIG9mIHRoZSBlbGVtZW50IGZyb20gdGhlIGNlbnRlciBvZiB0aGUgc2NyZWVuLlxuXHRcdCAqICAgICAgICBBIHZhbHVlIG9mIDAgaXMgaWdub3JlZC5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvQ2VudGVyT2YgPSBmdW5jdGlvbiAoZWxlbSwgZHVyYXRpb24sIG9mZnNldCwgb25Eb25lKSB7XG5cdFx0XHRzY3JvbGxUb1koTWF0aC5tYXgoMCwgY29udGFpbmVyLmdldFRvcE9mKGVsZW0pIC0gY29udGFpbmVyLmdldEhlaWdodCgpLzIgKyAob2Zmc2V0IHx8IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LzIpKSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBDaGFuZ2VzIGRlZmF1bHQgc2V0dGluZ3MgZm9yIHRoaXMgc2Nyb2xsZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge25ld0RlZmF1bHREdXJhdGlvbn0gT3B0aW9uYWxseSBhIG5ldyB2YWx1ZSBmb3IgZGVmYXVsdCBkdXJhdGlvbiwgdXNlZCBmb3IgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuXG5cdFx0ICogICAgICAgIElnbm9yZWQgaWYgbnVsbCBvciB1bmRlZmluZWQuXG5cdFx0ICogQHBhcmFtIHtuZXdFZGdlT2Zmc2V0fSBPcHRpb25hbGx5IGEgbmV3IHZhbHVlIGZvciB0aGUgZWRnZSBvZmZzZXQsIHVzZWQgYnkgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuIElnbm9yZWQgaWYgbnVsbCBvciB1bmRlZmluZWQuXG5cdFx0ICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgdmFsdWVzLlxuXHRcdCAqL1xuXHRcdHZhciBzZXR1cCA9IGZ1bmN0aW9uIChuZXdEZWZhdWx0RHVyYXRpb24sIG5ld0VkZ2VPZmZzZXQpIHtcblx0XHRcdGlmIChuZXdEZWZhdWx0RHVyYXRpb24gPT09IDAgfHwgbmV3RGVmYXVsdER1cmF0aW9uKSB7XG5cdFx0XHRcdGRlZmF1bHREdXJhdGlvbiA9IG5ld0RlZmF1bHREdXJhdGlvblxuXHRcdFx0fVxuXHRcdFx0aWYgKG5ld0VkZ2VPZmZzZXQgPT09IDAgfHwgbmV3RWRnZU9mZnNldCkge1xuXHRcdFx0XHRlZGdlT2Zmc2V0ID0gbmV3RWRnZU9mZnNldFxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGVmYXVsdER1cmF0aW9uOiBkZWZhdWx0RHVyYXRpb24sXG5cdFx0XHRcdGVkZ2VPZmZzZXQ6IGVkZ2VPZmZzZXRcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0dXA6IHNldHVwLFxuXHRcdFx0dG86IHNjcm9sbFRvRWxlbSxcblx0XHRcdHRvWTogc2Nyb2xsVG9ZLFxuXHRcdFx0aW50b1ZpZXc6IHNjcm9sbEludG9WaWV3LFxuXHRcdFx0Y2VudGVyOiBzY3JvbGxUb0NlbnRlck9mLFxuXHRcdFx0c3RvcDogc3RvcFNjcm9sbCxcblx0XHRcdG1vdmluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gISFzY3JvbGxUaW1lb3V0SWQgfSxcblx0XHRcdGdldFk6IGNvbnRhaW5lci5nZXRZLFxuXHRcdFx0Z2V0VG9wT2Y6IGNvbnRhaW5lci5nZXRUb3BPZlxuXHRcdH1cblxuXHR9XG5cblxuXHR2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuXHR2YXIgZ2V0RG9jWSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5zY3JvbGxZIHx8IGRvY0VsZW0uc2Nyb2xsVG9wIH1cblxuXHQvLyBDcmVhdGUgYSBzY3JvbGxlciBmb3IgdGhlIGRvY3VtZW50OlxuXHR2YXIgemVuc2Nyb2xsID0gbWFrZVNjcm9sbGVyKHtcblx0XHRib2R5OiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGRvY3VtZW50LmJvZHksXG5cdFx0dG9ZOiBmdW5jdGlvbiAoeSkgeyB3aW5kb3cuc2Nyb2xsVG8oMCwgeSkgfSxcblx0XHRnZXRZOiBnZXREb2NZLFxuXHRcdGdldEhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0IH0sXG5cdFx0Z2V0VG9wT2Y6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGdldERvY1koKSAtIGRvY0VsZW0ub2Zmc2V0VG9wIH1cblx0fSlcblxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgc2Nyb2xsZXIgZnJvbSB0aGUgcHJvdmlkZWQgY29udGFpbmVyIGVsZW1lbnQgKGUuZy4sIGEgRElWKVxuXHQgKlxuXHQgKiBAcGFyYW0ge3Njcm9sbENvbnRhaW5lcn0gVGhlIHZlcnRpY2FsIHBvc2l0aW9uIHdpdGhpbiB0aGUgZG9jdW1lbnQuXG5cdCAqIEBwYXJhbSB7ZGVmYXVsdER1cmF0aW9ufSBPcHRpb25hbGx5IGEgdmFsdWUgZm9yIGRlZmF1bHQgZHVyYXRpb24sIHVzZWQgZm9yIGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LlxuXHQgKiAgICAgICAgSWdub3JlZCBpZiAwIG9yIG51bGwgb3IgdW5kZWZpbmVkLlxuXHQgKiBAcGFyYW0ge2VkZ2VPZmZzZXR9IE9wdGlvbmFsbHkgYSB2YWx1ZSBmb3IgdGhlIGVkZ2Ugb2Zmc2V0LCB1c2VkIGJ5IGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LiBcblx0ICogICAgICAgIElnbm9yZWQgaWYgbnVsbCBvciB1bmRlZmluZWQuXG5cdCAqIEByZXR1cm5zIEEgc2Nyb2xsZXIgb2JqZWN0LCBzaW1pbGFyIHRvIGB6ZW5zY3JvbGxgIGJ1dCBjb250cm9sbGluZyB0aGUgcHJvdmlkZWQgZWxlbWVudC5cblx0ICovXG5cdHplbnNjcm9sbC5jcmVhdGVTY3JvbGxlciA9IGZ1bmN0aW9uIChzY3JvbGxDb250YWluZXIsIGRlZmF1bHREdXJhdGlvbiwgZWRnZU9mZnNldCkge1xuXHRcdHJldHVybiBtYWtlU2Nyb2xsZXIoe1xuXHRcdFx0Ym9keTogc2Nyb2xsQ29udGFpbmVyLFxuXHRcdFx0dG9ZOiBmdW5jdGlvbiAoeSkgeyBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0geSB9LFxuXHRcdFx0Z2V0WTogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCB9LFxuXHRcdFx0Z2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBNYXRoLm1pbihzY3JvbGxDb250YWluZXIuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQpIH0sXG5cdFx0XHRnZXRUb3BPZjogZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0ub2Zmc2V0VG9wIH1cblx0XHR9LCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpXG5cdH1cblxuXG5cdC8vIEF1dG9tYXRpYyBsaW5rLXNtb290aGluZyBvbiBhY2hvcnNcblx0Ly8gRXhjbHVkZSBJRTgtIG9yIHdoZW4gbmF0aXZlIGlzIGVuYWJsZWQgb3IgWmVuc2Nyb2xsIGF1dG8tIGlzIGRpc2FibGVkXG5cdGlmIChcImFkZEV2ZW50TGlzdGVuZXJcIiBpbiB3aW5kb3cgJiYgIXdpbmRvdy5ub1plbnNtb290aCAmJiAhaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24oZG9jdW1lbnQuYm9keSkpIHtcblxuXHRcdHZhciBpc0hpc3RvcnlTdXBwb3J0ZWQgPSBcImhpc3RvcnlcIiBpbiB3aW5kb3cgJiYgXCJwdXNoU3RhdGVcIiBpbiBoaXN0b3J5XG5cdFx0dmFyIGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQgPSBpc0hpc3RvcnlTdXBwb3J0ZWQgJiYgXCJzY3JvbGxSZXN0b3JhdGlvblwiIGluIGhpc3RvcnlcblxuXHRcdC8vIE9uIGZpcnN0IGxvYWQgJiByZWZyZXNoIG1ha2Ugc3VyZSB0aGUgYnJvd3NlciByZXN0b3JlcyB0aGUgcG9zaXRpb24gZmlyc3Rcblx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0aGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwiYXV0b1wiXG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdFx0Ly8gU2V0IGl0IHRvIG1hbnVhbFxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCIgfSwgOSlcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0XHRpZiAoZXZlbnQuc3RhdGUgJiYgXCJ6ZW5zY3JvbGxZXCIgaW4gZXZlbnQuc3RhdGUpIHtcblx0XHRcdFx0XHRcdHplbnNjcm9sbC50b1koZXZlbnQuc3RhdGUuemVuc2Nyb2xsWSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIGZhbHNlKVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZWRnZSBvZmZzZXQgb24gZmlyc3QgbG9hZCBpZiBuZWNlc3Nhcnlcblx0XHRcdC8vIFRoaXMgbWF5IG5vdCB3b3JrIG9uIElFIChvciBvbGRlciBjb21wdXRlcj8pIGFzIGl0IHJlcXVpcmVzIG1vcmUgdGltZW91dCwgYXJvdW5kIDEwMCBtc1xuXHRcdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdC8vIEFkanVzdG1lbnQgaXMgb25seSBuZWVkZWQgaWYgdGhlcmUgaXMgYW4gZWRnZSBvZmZzZXQ6XG5cdFx0XHRcdFx0dmFyIGVkZ2VPZmZzZXQgPSB6ZW5zY3JvbGwuc2V0dXAoKS5lZGdlT2Zmc2V0XG5cdFx0XHRcdFx0aWYgKGVkZ2VPZmZzZXQpIHtcblx0XHRcdFx0XHRcdHZhciB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzFdKVxuXHRcdFx0XHRcdFx0aWYgKHRhcmdldEVsZW0pIHtcblx0XHRcdFx0XHRcdFx0dmFyIHRhcmdldFkgPSBNYXRoLm1heCgwLCB6ZW5zY3JvbGwuZ2V0VG9wT2YodGFyZ2V0RWxlbSkgLSBlZGdlT2Zmc2V0KVxuXHRcdFx0XHRcdFx0XHR2YXIgZGlmZiA9IHplbnNjcm9sbC5nZXRZKCkgLSB0YXJnZXRZXG5cdFx0XHRcdFx0XHRcdC8vIE9ubHkgZG8gdGhlIGFkanVzdG1lbnQgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBjbG9zZSB0byB0aGUgZWxlbWVudDpcblx0XHRcdFx0XHRcdFx0aWYgKDAgPD0gZGlmZiAmJiBkaWZmIDwgOSApIHtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgdGFyZ2V0WSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgOSlcblx0XHRcdH1cblxuXHRcdH0sIGZhbHNlKVxuXG5cdFx0Ly8gSGFuZGxpbmcgY2xpY2tzIG9uIGFuY2hvcnNcblx0XHR2YXIgUkVfbm9aZW5zbW9vdGggPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpbm9aZW5zbW9vdGgoXFxcXHN8JClcIilcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0dmFyIGFuY2hvciA9IGV2ZW50LnRhcmdldFxuXHRcdFx0d2hpbGUgKGFuY2hvciAmJiBhbmNob3IudGFnTmFtZSAhPT0gXCJBXCIpIHtcblx0XHRcdFx0YW5jaG9yID0gYW5jaG9yLnBhcmVudE5vZGVcblx0XHRcdH1cblx0XHRcdC8vIExldCB0aGUgYnJvd3NlciBoYW5kbGUgdGhlIGNsaWNrIGlmIGl0IHdhc24ndCB3aXRoIHRoZSBwcmltYXJ5IGJ1dHRvbiwgb3Igd2l0aCBzb21lIG1vZGlmaWVyIGtleXM6XG5cdFx0XHRpZiAoIWFuY2hvciB8fCBldmVudC53aGljaCAhPT0gMSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuYWx0S2V5KSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0Ly8gU2F2ZSB0aGUgY3VycmVudCBzY3JvbGxpbmcgcG9zaXRpb24gc28gaXQgY2FuIGJlIHVzZWQgZm9yIHNjcm9sbCByZXN0b3JhdGlvbjpcblx0XHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRcdHZhciBoaXN0b3J5U3RhdGUgPSBoaXN0b3J5LnN0YXRlICYmIHR5cGVvZiBoaXN0b3J5LnN0YXRlID09PSBcIm9iamVjdFwiID8gaGlzdG9yeS5zdGF0ZSA6IHt9XG5cdFx0XHRcdGhpc3RvcnlTdGF0ZS56ZW5zY3JvbGxZID0gemVuc2Nyb2xsLmdldFkoKVxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgXCJcIilcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdC8vIEF2b2lkIHRoZSBDaHJvbWUgU2VjdXJpdHkgZXhjZXB0aW9uIG9uIGZpbGUgcHJvdG9jb2wsIGUuZy4sIGZpbGU6Ly9pbmRleC5odG1sXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEZpbmQgdGhlIHJlZmVyZW5jZWQgSUQ6XG5cdFx0XHR2YXIgaHJlZiA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCJcblx0XHRcdGlmIChocmVmLmluZGV4T2YoXCIjXCIpID09PSAwICYmICFSRV9ub1plbnNtb290aC50ZXN0KGFuY2hvci5jbGFzc05hbWUpKSB7XG5cdFx0XHRcdHZhciB0YXJnZXRZID0gMFxuXHRcdFx0XHR2YXIgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYuc3Vic3RyaW5nKDEpKVxuXHRcdFx0XHRpZiAoaHJlZiAhPT0gXCIjXCIpIHtcblx0XHRcdFx0XHRpZiAoIXRhcmdldEVsZW0pIHtcblx0XHRcdFx0XHRcdC8vIExldCB0aGUgYnJvd3NlciBoYW5kbGUgdGhlIGNsaWNrIGlmIHRoZSB0YXJnZXQgSUQgaXMgbm90IGZvdW5kLlxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhcmdldFkgPSB6ZW5zY3JvbGwuZ2V0VG9wT2YodGFyZ2V0RWxlbSlcblx0XHRcdFx0fVxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdC8vIEJ5IGRlZmF1bHQgdHJpZ2dlciB0aGUgYnJvd3NlcidzIGBoYXNoY2hhbmdlYCBldmVudC4uLlxuXHRcdFx0XHR2YXIgb25Eb25lID0gZnVuY3Rpb24gKCkgeyB3aW5kb3cubG9jYXRpb24gPSBocmVmIH1cblx0XHRcdFx0Ly8gLi4udW5sZXNzIHRoZXJlIGlzIGFuIGVkZ2Ugb2Zmc2V0IHNwZWNpZmllZFxuXHRcdFx0XHR2YXIgZWRnZU9mZnNldCA9IHplbnNjcm9sbC5zZXR1cCgpLmVkZ2VPZmZzZXRcblx0XHRcdFx0aWYgKGVkZ2VPZmZzZXQpIHtcblx0XHRcdFx0XHR0YXJnZXRZID0gTWF0aC5tYXgoMCwgdGFyZ2V0WSAtIGVkZ2VPZmZzZXQpXG5cdFx0XHRcdFx0aWYgKGlzSGlzdG9yeVN1cHBvcnRlZCkge1xuXHRcdFx0XHRcdFx0b25Eb25lID0gZnVuY3Rpb24gKCkgeyBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgaHJlZikgfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR6ZW5zY3JvbGwudG9ZKHRhcmdldFksIG51bGwsIG9uRG9uZSlcblx0XHRcdH1cblx0XHR9LCBmYWxzZSlcblxuXHR9XG5cblxuXHRyZXR1cm4gemVuc2Nyb2xsXG5cblxufSkpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzMyMC5qcGdcIjogXCIuL3NyYy9pbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13MzIwLmpwZ1wiLFxuXHRcIi4vUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13NDUwLmpwZ1wiOiBcIi4vc3JjL2ltZy9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXc0NTAuanBnXCIsXG5cdFwiLi9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXc2NTAuanBnXCI6IFwiLi9zcmMvaW1nL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzY1MC5qcGdcIixcblx0XCIuL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzk4MC5qcGdcIjogXCIuL3NyYy9pbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13OTgwLmpwZ1wiLFxuXHRcIi4vV2lraXBlZGlhLVZpZXdlci13MzIwLmpwZ1wiOiBcIi4vc3JjL2ltZy9XaWtpcGVkaWEtVmlld2VyLXczMjAuanBnXCIsXG5cdFwiLi9XaWtpcGVkaWEtVmlld2VyLXc0NTAuanBnXCI6IFwiLi9zcmMvaW1nL1dpa2lwZWRpYS1WaWV3ZXItdzQ1MC5qcGdcIixcblx0XCIuL2Zhcm0tbGlmZS13MzIwLnBuZ1wiOiBcIi4vc3JjL2ltZy9mYXJtLWxpZmUtdzMyMC5wbmdcIixcblx0XCIuL2Zhcm0tbGlmZS13NDUwLnBuZ1wiOiBcIi4vc3JjL2ltZy9mYXJtLWxpZmUtdzQ1MC5wbmdcIixcblx0XCIuL2xvZ28taW1nLnBuZ1wiOiBcIi4vc3JjL2ltZy9sb2dvLWltZy5wbmdcIixcblx0XCIuL2xvZ28tb3B0LWltZy5wbmdcIjogXCIuL3NyYy9pbWcvbG9nby1vcHQtaW1nLnBuZ1wiLFxuXHRcIi4vbG9nby1vcHQuc3ZnXCI6IFwiLi9zcmMvaW1nL2xvZ28tb3B0LnN2Z1wiLFxuXHRcIi4vbWFpbnRlbmFuY2UtdzMyMC5qcGdcIjogXCIuL3NyYy9pbWcvbWFpbnRlbmFuY2UtdzMyMC5qcGdcIixcblx0XCIuL21haW50ZW5hbmNlLXc0NTAuanBnXCI6IFwiLi9zcmMvaW1nL21haW50ZW5hbmNlLXc0NTAuanBnXCIsXG5cdFwiLi9tZXRyby1kZXNpZ24tdGVtcGxhdGUtdzMyMC5qcGdcIjogXCIuL3NyYy9pbWcvbWV0cm8tZGVzaWduLXRlbXBsYXRlLXczMjAuanBnXCIsXG5cdFwiLi9tZXRyby1kZXNpZ24tdGVtcGxhdGUtdzQ1MC5qcGdcIjogXCIuL3NyYy9pbWcvbWV0cm8tZGVzaWduLXRlbXBsYXRlLXc0NTAuanBnXCIsXG5cdFwiLi9wZXhlbHMtcGhvdG8tOTUyNjcwX3RsaGd2cS1jX3NjYWxlLHFfNTAsd18xOTIwLmpwZ1wiOiBcIi4vc3JjL2ltZy9wZXhlbHMtcGhvdG8tOTUyNjcwX3RsaGd2cS1jX3NjYWxlLHFfNTAsd18xOTIwLmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZyBzeW5jIFxcXFwuKHBuZ3xqcGU/Z3xzdmcpJFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXczMjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzQ1MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13NjUwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXc5ODAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL1dpa2lwZWRpYS1WaWV3ZXItdzMyMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvV2lraXBlZGlhLVZpZXdlci13NDUwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9mYXJtLWxpZmUtdzMyMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZmFybS1saWZlLXc0NTAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xvZ28taW1nLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sb2dvLW9wdC1pbWcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvbG9nby1vcHQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL21haW50ZW5hbmNlLXczMjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL21haW50ZW5hbmNlLXc0NTAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL21ldHJvLWRlc2lnbi10ZW1wbGF0ZS13MzIwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tZXRyby1kZXNpZ24tdGVtcGxhdGUtdzQ1MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvcGV4ZWxzLXBob3RvLTk1MjY3MF90bGhndnEtY19zY2FsZSxxXzUwLHdfMTkyMC5qcGdcIjsiLCJyZXF1aXJlKCcuL3Njc3MvbWFpbi5zY3NzJyk7XHJcbnJlcXVpcmUoJ3BpY3R1cmVmaWxsJyk7XHJcbnJlcXVpcmUoJ3plbnNjcm9sbCcpO1xyXG5cclxuLy8gTG9hZCBpbWFnZXMgZHltYW1pY2FsbHlcclxuZnVuY3Rpb24gaW1wb3J0SW1ncyhyKSB7XHJcbiAgbGV0IGltYWdlcyA9IHt9O1xyXG4gIHIua2V5cygpLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTtcclxuICB9KTtcclxuICByZXR1cm4gaW1hZ2VzO1xyXG59XHJcbmltcG9ydEltZ3MocmVxdWlyZS5jb250ZXh0KCcuL2ltZycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcclxuXHJcbi8vIGhpZGUgaGFtYnVyZ2VyIG1lbnUgd2hlbiBvbmUgb2YgaXRzIGVsZW1lbnRzIGlzIGNsaWNrZWRcclxudmFyIGNoYW5nZSA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XHJcbnZhciBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbScpO1xyXG5BcnJheS5mcm9tKG5hdkxpbmtzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hdmxpbmspIHtcclxuICBuYXZsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgYm94Q2hlY2tlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LXRvZ2dsZVwiKS5jaGVja2VkO1xyXG4gICAgdG9nZ2xlKGJveENoZWNrZWQpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZShjaGVja2VkKSB7XHJcbiAgaWYoY2hlY2tlZCkge1xyXG4gICAgdmFyIGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtdG9nZ2xlXCIpO1xyXG4gICAgY2hlY2tCb3guZGlzcGF0Y2hFdmVudChjaGFuZ2UpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtdG9nZ2xlXCIpLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9XHJcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9