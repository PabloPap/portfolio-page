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
	"./farm-life-w320.png": "./src/img/farm-life-w320.png",
	"./farm-life-w450.png": "./src/img/farm-life-w450.png",
	"./fest-seeker-260.jpg": "./src/img/fest-seeker-260.jpg",
	"./fest-seeker-320.jpg": "./src/img/fest-seeker-320.jpg",
	"./glob-taste-w260.jpg": "./src/img/glob-taste-w260.jpg",
	"./glob-taste-w320.jpg": "./src/img/glob-taste-w320.jpg",
	"./logo-img.png": "./src/img/logo-img.png",
	"./logo-opt-img.png": "./src/img/logo-opt-img.png",
	"./logo-opt.svg": "./src/img/logo-opt.svg",
	"./maintenance-w320.jpg": "./src/img/maintenance-w320.jpg",
	"./maintenance-w450.jpg": "./src/img/maintenance-w450.jpg"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9waWN0dXJlZmlsbC9kaXN0L3BpY3R1cmVmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy96ZW5zY3JvbGwvemVuc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcgc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXcyNjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13MzIwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL1dpa2lwZWRpYS1WaWV3ZXItdzI2MC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9XaWtpcGVkaWEtVmlld2VyLXczMjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmFjay5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9mYXJtLWxpZmUtdzI2MC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9mYXJtLWxpZmUtdzMyMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9mYXJtLWxpZmUtdzMyMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9mYXJtLWxpZmUtdzQ1MC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9mZXN0LXNlZWtlci0yNjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvZmVzdC1zZWVrZXItMzIwLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2dsb2ItdGFzdGUtdzI2MC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9nbG9iLXRhc3RlLXczMjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbG9nby1pbWcucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvbG9nby1vcHQtaW1nLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2xvZ28tb3B0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL21haW50ZW5hbmNlLXczMjAuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbWFpbnRlbmFuY2UtdzQ1MC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2Nzcz9jNDkyIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbXBvcnRJbWdzIiwiciIsImltYWdlcyIsImtleXMiLCJtYXAiLCJpdGVtIiwicmVwbGFjZSIsImNoYW5nZSIsIkV2ZW50IiwibmF2TGlua3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwibmF2bGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJib3hDaGVja2VkIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja2VkIiwidG9nZ2xlIiwiY2hlY2tCb3giLCJkaXNwYXRjaEV2ZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTyxrQkFBa0IsY0FBYyxVQUFVLFlBQVksY0FBYyxVQUFVLGdCQUFnQjtBQUN6SSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qjs7QUFFNUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFVBQVU7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUNBQXFDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsZUFBZSx3QkFBd0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZSxPQUFPOztBQUU5QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZSxPQUFPOztBQUU5QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWUsT0FBTzs7QUFFOUM7QUFDQSxLQUFLLE9BQU87QUFDWixJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sZUFBZTtBQUNmO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBaUU7QUFDakUsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsNkJBQTZCO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUEsMkRBQTJEO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQyxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUgsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0Q0FBNEMsU0FBUztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLDJCQUEyQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsaURBQXFDLG9CQUFvQixFQUFFO0FBQUE7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN2Z0REO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxFQUFFLFFBWUY7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUztBQUN0QjtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsU0FBUztBQUN0QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsU0FBUztBQUN0QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsU0FBUztBQUN0QixhQUFhLE9BQU87QUFDcEI7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBLDBCQUEwQixvREFBb0Q7QUFDOUUsNkJBQTZCO0FBQzdCLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQ0FBZ0M7QUFDdEQsc0JBQXNCLG1DQUFtQztBQUN6RCwyQkFBMkIsNEZBQTRGO0FBQ3ZILDhCQUE4QjtBQUM5QixHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsdUNBQXVDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOzs7QUFHQTs7O0FBR0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcFdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUQ7Ozs7Ozs7Ozs7O0FDeENBLHdGOzs7Ozs7Ozs7OztBQ0FBLHdGOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7Ozs7OztBQ0FBLG1CQUFBQSxDQUFRLDhDQUFSO0FBQ0EsbUJBQUFBLENBQVEsbUVBQVI7QUFDQSxtQkFBQUEsQ0FBUSx3REFBUjs7QUFFQTtBQUNBLFNBQVNDLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXVCO0FBQ3JCLE1BQUlDLFNBQVMsRUFBYjtBQUNBRCxJQUFFRSxJQUFGLEdBQVNDLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDckJILFdBQU9HLEtBQUtDLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLEVBQW5CLENBQVAsSUFBaUNMLEVBQUVJLElBQUYsQ0FBakM7QUFDRCxHQUZEO0FBR0EsU0FBT0gsTUFBUDtBQUNEO0FBQ0RGLFdBQVcseURBQVg7O0FBRUE7QUFDQSxJQUFJTyxTQUFTLElBQUlDLEtBQUosQ0FBVSxRQUFWLENBQWI7QUFDQSxJQUFJQyxXQUFXQyxTQUFTQyxnQkFBVCxDQUEwQixXQUExQixDQUFmO0FBQ0FDLE1BQU1DLElBQU4sQ0FBV0osUUFBWCxFQUFxQkssT0FBckIsQ0FBNkIsVUFBU0MsT0FBVCxFQUFrQjtBQUM3Q0EsVUFBUUMsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVztBQUMzQyxRQUFJQyxhQUFhUCxTQUFTUSxjQUFULENBQXdCLFlBQXhCLEVBQXNDQyxPQUF2RDtBQUNBQyxXQUFPSCxVQUFQO0FBQ0QsR0FIRDtBQUlELENBTEQ7O0FBT0EsU0FBU0csTUFBVCxDQUFnQkQsT0FBaEIsRUFBeUI7QUFDdkIsTUFBR0EsT0FBSCxFQUFZO0FBQ1YsUUFBSUUsV0FBV1gsU0FBU1EsY0FBVCxDQUF3QixZQUF4QixDQUFmO0FBQ0FHLGFBQVNDLGFBQVQsQ0FBdUJmLE1BQXZCO0FBQ0FHLGFBQVNRLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NDLE9BQXRDLEdBQWdELEtBQWhEO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7QUM3QkQ7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyohIHBpY3R1cmVmaWxsIC0gdjMuMC4yIC0gMjAxNi0wMi0xMlxuICogaHR0cHM6Ly9zY290dGplaGwuZ2l0aHViLmlvL3BpY3R1cmVmaWxsL1xuICogQ29weXJpZ2h0IChjKSAyMDE2IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGplaGwvcGljdHVyZWZpbGwvYmxvYi9tYXN0ZXIvQXV0aG9ycy50eHQ7IExpY2Vuc2VkIE1JVFxuICovXG4vKiEgR2Vja28tUGljdHVyZSAtIHYxLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGplaGwvcGljdHVyZWZpbGwvdHJlZS8zLjAvc3JjL3BsdWdpbnMvZ2Vja28tcGljdHVyZVxuICogRmlyZWZveCdzIGVhcmx5IHBpY3R1cmUgaW1wbGVtZW50YXRpb24gKHByaW9yIHRvIEZGNDEpIGlzIHN0YXRpYyBhbmQgZG9lc1xuICogbm90IHJlYWN0IHRvIHZpZXdwb3J0IGNoYW5nZXMuIFRoaXMgdGlueSBtb2R1bGUgZml4ZXMgdGhpcy5cbiAqL1xuKGZ1bmN0aW9uKHdpbmRvdykge1xuXHQvKmpzaGludCBlcW51bGw6dHJ1ZSAqL1xuXHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5cdGlmICggd2luZG93LkhUTUxQaWN0dXJlRWxlbWVudCAmJiAoKC9lY2tvLykudGVzdCh1YSkgJiYgdWEubWF0Y2goL3J2XFw6KFxcZCspLykgJiYgUmVnRXhwLiQxIDwgNDUpICkge1xuXHRcdGFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRpbWVyO1xuXG5cdFx0XHR2YXIgZHVtbXlTcmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuXG5cdFx0XHR2YXIgZml4UmVzcGltZyA9IGZ1bmN0aW9uKGltZykge1xuXHRcdFx0XHR2YXIgc291cmNlLCBzaXplcztcblx0XHRcdFx0dmFyIHBpY3R1cmUgPSBpbWcucGFyZW50Tm9kZTtcblxuXHRcdFx0XHRpZiAocGljdHVyZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIlBJQ1RVUkVcIikge1xuXHRcdFx0XHRcdHNvdXJjZSA9IGR1bW15U3JjLmNsb25lTm9kZSgpO1xuXG5cdFx0XHRcdFx0cGljdHVyZS5pbnNlcnRCZWZvcmUoc291cmNlLCBwaWN0dXJlLmZpcnN0RWxlbWVudENoaWxkKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cGljdHVyZS5yZW1vdmVDaGlsZChzb3VyY2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFpbWcuX3BmTGFzdFNpemUgfHwgaW1nLm9mZnNldFdpZHRoID4gaW1nLl9wZkxhc3RTaXplKSB7XG5cdFx0XHRcdFx0aW1nLl9wZkxhc3RTaXplID0gaW1nLm9mZnNldFdpZHRoO1xuXHRcdFx0XHRcdHNpemVzID0gaW1nLnNpemVzO1xuXHRcdFx0XHRcdGltZy5zaXplcyArPSBcIiwxMDB2d1wiO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpbWcuc2l6ZXMgPSBzaXplcztcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dmFyIGZpbmRQaWN0dXJlSW1ncyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaTtcblx0XHRcdFx0dmFyIGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicGljdHVyZSA+IGltZywgaW1nW3NyY3NldF1bc2l6ZXNdXCIpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGZpeFJlc3BpbWcoaW1nc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2YXIgb25SZXNpemUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KGZpbmRQaWN0dXJlSW1ncywgOTkpO1xuXHRcdFx0fTtcblx0XHRcdHZhciBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhICYmIG1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIik7XG5cdFx0XHR2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRvblJlc2l6ZSgpO1xuXG5cdFx0XHRcdGlmIChtcSAmJiBtcS5hZGRMaXN0ZW5lcikge1xuXHRcdFx0XHRcdG1xLmFkZExpc3RlbmVyKG9uUmVzaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0ZHVtbXlTcmMuc3Jjc2V0ID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PVwiO1xuXG5cdFx0XHRpZiAoL15bY3xpXXxkJC8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlIHx8IFwiXCIpKSB7XG5cdFx0XHRcdGluaXQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb25SZXNpemU7XG5cdFx0fSkoKSk7XG5cdH1cbn0pKHdpbmRvdyk7XG5cbi8qISBQaWN0dXJlZmlsbCAtIHYzLjAuMlxuICogaHR0cDovL3Njb3R0amVobC5naXRodWIuaW8vcGljdHVyZWZpbGxcbiAqIENvcHlyaWdodCAoYykgMjAxNSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRqZWhsL3BpY3R1cmVmaWxsL2Jsb2IvbWFzdGVyL0F1dGhvcnMudHh0O1xuICogIExpY2Vuc2U6IE1JVFxuICovXG5cbihmdW5jdGlvbiggd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkICkge1xuXHQvLyBFbmFibGUgc3RyaWN0IG1vZGVcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0Ly8gSFRNTCBzaGltfHYgaXQgZm9yIG9sZCBJRSAoSUU5IHdpbGwgc3RpbGwgbmVlZCB0aGUgSFRNTCB2aWRlbyB0YWcgd29ya2Fyb3VuZClcblx0ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJwaWN0dXJlXCIgKTtcblxuXHR2YXIgd2FybiwgZW1pbnB4LCBhbHdheXNDaGVja1dEZXNjcmlwdG9yLCBldmFsSWQ7XG5cdC8vIGxvY2FsIG9iamVjdCBmb3IgbWV0aG9kIHJlZmVyZW5jZXMgYW5kIHRlc3RpbmcgZXhwb3N1cmVcblx0dmFyIHBmID0ge307XG5cdHZhciBpc1N1cHBvcnRUZXN0UmVhZHkgPSBmYWxzZTtcblx0dmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuXHR2YXIgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImltZ1wiICk7XG5cdHZhciBnZXRJbWdBdHRyID0gaW1hZ2UuZ2V0QXR0cmlidXRlO1xuXHR2YXIgc2V0SW1nQXR0ciA9IGltYWdlLnNldEF0dHJpYnV0ZTtcblx0dmFyIHJlbW92ZUltZ0F0dHIgPSBpbWFnZS5yZW1vdmVBdHRyaWJ1dGU7XG5cdHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHR2YXIgdHlwZXMgPSB7fTtcblx0dmFyIGNmZyA9IHtcblx0XHQvL3Jlc291cmNlIHNlbGVjdGlvbjpcblx0XHRhbGdvcml0aG06IFwiXCJcblx0fTtcblx0dmFyIHNyY0F0dHIgPSBcImRhdGEtcGZzcmNcIjtcblx0dmFyIHNyY3NldEF0dHIgPSBzcmNBdHRyICsgXCJzZXRcIjtcblx0Ly8gdWEgc25pZmZpbmcgaXMgZG9uZSBmb3IgdW5kZXRlY3RhYmxlIGltZyBsb2FkaW5nIGZlYXR1cmVzLFxuXHQvLyB0byBkbyBzb21lIG5vbiBjcnVjaWFsIHBlcmYgb3B0aW1pemF0aW9uc1xuXHR2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXHR2YXIgc3VwcG9ydEFib3J0ID0gKC9yaWRlbnQvKS50ZXN0KHVhKSB8fCAoKC9lY2tvLykudGVzdCh1YSkgJiYgdWEubWF0Y2goL3J2XFw6KFxcZCspLykgJiYgUmVnRXhwLiQxID4gMzUgKTtcblx0dmFyIGN1clNyY1Byb3AgPSBcImN1cnJlbnRTcmNcIjtcblx0dmFyIHJlZ1dEZXNjID0gL1xccytcXCs/XFxkKyhlXFxkKyk/dy87XG5cdHZhciByZWdTaXplID0gLyhcXChbXildK1xcKSk/XFxzKiguKykvO1xuXHR2YXIgc2V0T3B0aW9ucyA9IHdpbmRvdy5waWN0dXJlZmlsbENGRztcblx0LyoqXG5cdCAqIFNob3J0Y3V0IHByb3BlcnR5IGZvciBodHRwczovL3czYy5naXRodWIuaW8vd2ViYXBwc2VjL3NwZWNzL21peGVkY29udGVudC8jcmVzdHJpY3RzLW1peGVkLWNvbnRlbnQgKCBmb3IgZWFzeSBvdmVycmlkaW5nIGluIHRlc3RzIClcblx0ICovXG5cdC8vIGJhc2VTdHlsZSBhbHNvIHVzZWQgYnkgZ2V0RW1WYWx1ZSAoaS5lLjogd2lkdGg6IDFlbSBpcyBpbXBvcnRhbnQpXG5cdHZhciBiYXNlU3R5bGUgPSBcInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt2aXNpYmlsaXR5OmhpZGRlbjtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MDtib3JkZXI6bm9uZTtmb250LXNpemU6MWVtO3dpZHRoOjFlbTtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDBweCwgMHB4LCAwcHgsIDBweClcIjtcblx0dmFyIGZzQ3NzID0gXCJmb250LXNpemU6MTAwJSFpbXBvcnRhbnQ7XCI7XG5cdHZhciBpc1Z3RGlydHkgPSB0cnVlO1xuXG5cdHZhciBjc3NDYWNoZSA9IHt9O1xuXHR2YXIgc2l6ZUxlbmd0aENhY2hlID0ge307XG5cdHZhciBEUFIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblx0dmFyIHVuaXRzID0ge1xuXHRcdHB4OiAxLFxuXHRcdFwiaW5cIjogOTZcblx0fTtcblx0dmFyIGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiYVwiICk7XG5cdC8qKlxuXHQgKiBhbHJlYWR5UnVuIGZsYWcgdXNlZCBmb3Igc2V0T3B0aW9ucy4gaXMgaXQgdHJ1ZSBzZXRPcHRpb25zIHdpbGwgcmVldmFsdWF0ZVxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdHZhciBhbHJlYWR5UnVuID0gZmFsc2U7XG5cblx0Ly8gUmV1c2FibGUsIG5vbi1cImdcIiBSZWdleGVzXG5cblx0Ly8gKERvbid0IHVzZSBcXHMsIHRvIGF2b2lkIG1hdGNoaW5nIG5vbi1icmVha2luZyBzcGFjZS4pXG5cdHZhciByZWdleExlYWRpbmdTcGFjZXMgPSAvXlsgXFx0XFxuXFxyXFx1MDAwY10rLyxcblx0ICAgIHJlZ2V4TGVhZGluZ0NvbW1hc09yU3BhY2VzID0gL15bLCBcXHRcXG5cXHJcXHUwMDBjXSsvLFxuXHQgICAgcmVnZXhMZWFkaW5nTm90U3BhY2VzID0gL15bXiBcXHRcXG5cXHJcXHUwMDBjXSsvLFxuXHQgICAgcmVnZXhUcmFpbGluZ0NvbW1hcyA9IC9bLF0rJC8sXG5cdCAgICByZWdleE5vbk5lZ2F0aXZlSW50ZWdlciA9IC9eXFxkKyQvLFxuXG5cdCAgICAvLyAoIFBvc2l0aXZlIG9yIG5lZ2F0aXZlIG9yIHVuc2lnbmVkIGludGVnZXJzIG9yIGRlY2ltYWxzLCB3aXRob3V0IG9yIHdpdGhvdXQgZXhwb25lbnRzLlxuXHQgICAgLy8gTXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSBkaWdpdC5cblx0ICAgIC8vIEFjY29yZGluZyB0byBzcGVjIHRlc3RzIGFueSBkZWNpbWFsIHBvaW50IG11c3QgYmUgZm9sbG93ZWQgYnkgYSBkaWdpdC5cblx0ICAgIC8vIE5vIGxlYWRpbmcgcGx1cyBzaWduIGlzIGFsbG93ZWQuKVxuXHQgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5mcmFzdHJ1Y3R1cmUuaHRtbCN2YWxpZC1mbG9hdGluZy1wb2ludC1udW1iZXJcblx0ICAgIHJlZ2V4RmxvYXRpbmdQb2ludCA9IC9eLT8oPzpbMC05XSt8WzAtOV0qXFwuWzAtOV0rKSg/OltlRV1bKy1dP1swLTldKyk/JC87XG5cblx0dmFyIG9uID0gZnVuY3Rpb24ob2JqLCBldnQsIGZuLCBjYXB0dXJlKSB7XG5cdFx0aWYgKCBvYmouYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHRcdG9iai5hZGRFdmVudExpc3RlbmVyKGV2dCwgZm4sIGNhcHR1cmUgfHwgZmFsc2UpO1xuXHRcdH0gZWxzZSBpZiAoIG9iai5hdHRhY2hFdmVudCApIHtcblx0XHRcdG9iai5hdHRhY2hFdmVudCggXCJvblwiICsgZXZ0LCBmbik7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBzaW1wbGUgbWVtb2l6ZSBmdW5jdGlvbjpcblx0ICovXG5cblx0dmFyIG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBjYWNoZSA9IHt9O1xuXHRcdHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuXHRcdFx0aWYgKCAhKGlucHV0IGluIGNhY2hlKSApIHtcblx0XHRcdFx0Y2FjaGVbIGlucHV0IF0gPSBmbihpbnB1dCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2FjaGVbIGlucHV0IF07XG5cdFx0fTtcblx0fTtcblxuXHQvLyBVVElMSVRZIEZVTkNUSU9OU1xuXG5cdC8vIE1hbnVhbCBpcyBmYXN0ZXIgdGhhbiBSZWdFeFxuXHQvLyBodHRwOi8vanNwZXJmLmNvbS93aGl0ZXNwYWNlLWNoYXJhY3Rlci81XG5cdGZ1bmN0aW9uIGlzU3BhY2UoYykge1xuXHRcdHJldHVybiAoYyA9PT0gXCJcXHUwMDIwXCIgfHwgLy8gc3BhY2Vcblx0XHQgICAgICAgIGMgPT09IFwiXFx1MDAwOVwiIHx8IC8vIGhvcml6b250YWwgdGFiXG5cdFx0ICAgICAgICBjID09PSBcIlxcdTAwMEFcIiB8fCAvLyBuZXcgbGluZVxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDBDXCIgfHwgLy8gZm9ybSBmZWVkXG5cdFx0ICAgICAgICBjID09PSBcIlxcdTAwMERcIik7ICAvLyBjYXJyaWFnZSByZXR1cm5cblx0fVxuXG5cdC8qKlxuXHQgKiBnZXRzIGEgbWVkaWFxdWVyeSBhbmQgcmV0dXJucyBhIGJvb2xlYW4gb3IgZ2V0cyBhIGNzcyBsZW5ndGggYW5kIHJldHVybnMgYSBudW1iZXJcblx0ICogQHBhcmFtIGNzcyBtZWRpYXF1ZXJpZXMgb3IgY3NzIGxlbmd0aFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxudW1iZXJ9XG5cdCAqXG5cdCAqIGJhc2VkIG9uOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL2RiNGY3NzAwOWIxNTVmMDgzNzM4XG5cdCAqL1xuXHR2YXIgZXZhbENTUyA9IChmdW5jdGlvbigpIHtcblxuXHRcdHZhciByZWdMZW5ndGggPSAvXihbXFxkXFwuXSspKGVtfHZ3fHB4KSQvO1xuXHRcdHZhciByZXBsYWNlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cywgaW5kZXggPSAwLCBzdHJpbmcgPSBhcmdzWzBdO1xuXHRcdFx0d2hpbGUgKCsraW5kZXggaW4gYXJncykge1xuXHRcdFx0XHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShhcmdzW2luZGV4XSwgYXJnc1srK2luZGV4XSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyaW5nO1xuXHRcdH07XG5cblx0XHR2YXIgYnVpbGRTdHIgPSBtZW1vaXplKGZ1bmN0aW9uKGNzcykge1xuXG5cdFx0XHRyZXR1cm4gXCJyZXR1cm4gXCIgKyByZXBsYWNlKChjc3MgfHwgXCJcIikudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0Ly8gaW50ZXJwcmV0IGBhbmRgXG5cdFx0XHRcdC9cXGJhbmRcXGIvZywgXCImJlwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBgLGBcblx0XHRcdFx0LywvZywgXCJ8fFwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBgbWluLWAgYXMgPj1cblx0XHRcdFx0L21pbi0oW2Etei1cXHNdKyk6L2csIFwiZS4kMT49XCIsXG5cblx0XHRcdFx0Ly8gaW50ZXJwcmV0IGBtYXgtYCBhcyA8PVxuXHRcdFx0XHQvbWF4LShbYS16LVxcc10rKTovZywgXCJlLiQxPD1cIixcblxuXHRcdFx0XHQvL2NhbGMgdmFsdWVcblx0XHRcdFx0L2NhbGMoW14pXSspL2csIFwiKCQxKVwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBjc3MgdmFsdWVzXG5cdFx0XHRcdC8oXFxkK1tcXC5dKltcXGRdKikoW2Etel0rKS9nLCBcIigkMSAqIGUuJDIpXCIsXG5cdFx0XHRcdC8vbWFrZSBldmFsIGxlc3MgZXZpbFxuXHRcdFx0XHQvXig/IShlLlthLXpdfFswLTlcXC4mPXw+PFxcK1xcLVxcKlxcKFxcKVxcL10pKS4qL2lnLCBcIlwiXG5cdFx0XHQpICsgXCI7XCI7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oY3NzLCBsZW5ndGgpIHtcblx0XHRcdHZhciBwYXJzZWRMZW5ndGg7XG5cdFx0XHRpZiAoIShjc3MgaW4gY3NzQ2FjaGUpKSB7XG5cdFx0XHRcdGNzc0NhY2hlW2Nzc10gPSBmYWxzZTtcblx0XHRcdFx0aWYgKGxlbmd0aCAmJiAocGFyc2VkTGVuZ3RoID0gY3NzLm1hdGNoKCByZWdMZW5ndGggKSkpIHtcblx0XHRcdFx0XHRjc3NDYWNoZVtjc3NdID0gcGFyc2VkTGVuZ3RoWyAxIF0gKiB1bml0c1twYXJzZWRMZW5ndGhbIDIgXV07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Lypqc2hpbnQgZXZpbDp0cnVlICovXG5cdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0Y3NzQ2FjaGVbY3NzXSA9IG5ldyBGdW5jdGlvbihcImVcIiwgYnVpbGRTdHIoY3NzKSkodW5pdHMpO1xuXHRcdFx0XHRcdH0gY2F0Y2goZSkge31cblx0XHRcdFx0XHQvKmpzaGludCBldmlsOmZhbHNlICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjc3NDYWNoZVtjc3NdO1xuXHRcdH07XG5cdH0pKCk7XG5cblx0dmFyIHNldFJlc29sdXRpb24gPSBmdW5jdGlvbiggY2FuZGlkYXRlLCBzaXplc2F0dHIgKSB7XG5cdFx0aWYgKCBjYW5kaWRhdGUudyApIHsgLy8gaCA9IG1lYW5zIGhlaWdodDogfHwgZGVzY3JpcHRvci50eXBlID09PSAnaCcgZG8gbm90IGhhbmRsZSB5ZXQuLi5cblx0XHRcdGNhbmRpZGF0ZS5jV2lkdGggPSBwZi5jYWxjTGlzdExlbmd0aCggc2l6ZXNhdHRyIHx8IFwiMTAwdndcIiApO1xuXHRcdFx0Y2FuZGlkYXRlLnJlcyA9IGNhbmRpZGF0ZS53IC8gY2FuZGlkYXRlLmNXaWR0aCA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhbmRpZGF0ZS5yZXMgPSBjYW5kaWRhdGUuZDtcblx0XHR9XG5cdFx0cmV0dXJuIGNhbmRpZGF0ZTtcblx0fTtcblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIG9wdFxuXHQgKi9cblx0dmFyIHBpY3R1cmVmaWxsID0gZnVuY3Rpb24oIG9wdCApIHtcblxuXHRcdGlmICghaXNTdXBwb3J0VGVzdFJlYWR5KSB7cmV0dXJuO31cblxuXHRcdHZhciBlbGVtZW50cywgaSwgcGxlbjtcblxuXHRcdHZhciBvcHRpb25zID0gb3B0IHx8IHt9O1xuXG5cdFx0aWYgKCBvcHRpb25zLmVsZW1lbnRzICYmIG9wdGlvbnMuZWxlbWVudHMubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRpZiAoIG9wdGlvbnMuZWxlbWVudHMubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJJTUdcIiApIHtcblx0XHRcdFx0b3B0aW9ucy5lbGVtZW50cyA9ICBbIG9wdGlvbnMuZWxlbWVudHMgXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdGlvbnMuY29udGV4dCA9IG9wdGlvbnMuZWxlbWVudHM7XG5cdFx0XHRcdG9wdGlvbnMuZWxlbWVudHMgPSAgbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRlbGVtZW50cyA9IG9wdGlvbnMuZWxlbWVudHMgfHwgcGYucXNhKCAob3B0aW9ucy5jb250ZXh0IHx8IGRvY3VtZW50KSwgKCBvcHRpb25zLnJlZXZhbHVhdGUgfHwgb3B0aW9ucy5yZXNlbGVjdCApID8gcGYuc2VsIDogcGYuc2VsU2hvcnQgKTtcblxuXHRcdGlmICggKHBsZW4gPSBlbGVtZW50cy5sZW5ndGgpICkge1xuXG5cdFx0XHRwZi5zZXR1cFJ1biggb3B0aW9ucyApO1xuXHRcdFx0YWxyZWFkeVJ1biA9IHRydWU7XG5cblx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgZWxlbWVudHNcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgcGxlbjsgaSsrICkge1xuXHRcdFx0XHRwZi5maWxsSW1nKGVsZW1lbnRzWyBpIF0sIG9wdGlvbnMpO1xuXHRcdFx0fVxuXG5cdFx0XHRwZi50ZWFyZG93blJ1biggb3B0aW9ucyApO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogb3V0cHV0cyBhIHdhcm5pbmcgZm9yIHRoZSBkZXZlbG9wZXJcblx0ICogQHBhcmFtIHttZXNzYWdlfVxuXHQgKiBAdHlwZSB7RnVuY3Rpb259XG5cdCAqL1xuXHR3YXJuID0gKCB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4gKSA/XG5cdFx0ZnVuY3Rpb24oIG1lc3NhZ2UgKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oIG1lc3NhZ2UgKTtcblx0XHR9IDpcblx0XHRub29wXG5cdDtcblxuXHRpZiAoICEoY3VyU3JjUHJvcCBpbiBpbWFnZSkgKSB7XG5cdFx0Y3VyU3JjUHJvcCA9IFwic3JjXCI7XG5cdH1cblxuXHQvLyBBZGQgc3VwcG9ydCBmb3Igc3RhbmRhcmQgbWltZSB0eXBlcy5cblx0dHlwZXNbIFwiaW1hZ2UvanBlZ1wiIF0gPSB0cnVlO1xuXHR0eXBlc1sgXCJpbWFnZS9naWZcIiBdID0gdHJ1ZTtcblx0dHlwZXNbIFwiaW1hZ2UvcG5nXCIgXSA9IHRydWU7XG5cblx0ZnVuY3Rpb24gZGV0ZWN0VHlwZVN1cHBvcnQoIHR5cGUsIHR5cGVVcmkgKSB7XG5cdFx0Ly8gYmFzZWQgb24gTW9kZXJuaXpyJ3MgbG9zc2xlc3MgaW1nLXdlYnAgdGVzdFxuXHRcdC8vIG5vdGU6IGFzeW5jaHJvbm91c1xuXHRcdHZhciBpbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKTtcblx0XHRpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0eXBlc1sgdHlwZSBdID0gZmFsc2U7XG5cdFx0XHRwaWN0dXJlZmlsbCgpO1xuXHRcdH07XG5cdFx0aW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0eXBlc1sgdHlwZSBdID0gaW1hZ2Uud2lkdGggPT09IDE7XG5cdFx0XHRwaWN0dXJlZmlsbCgpO1xuXHRcdH07XG5cdFx0aW1hZ2Uuc3JjID0gdHlwZVVyaTtcblx0XHRyZXR1cm4gXCJwZW5kaW5nXCI7XG5cdH1cblxuXHQvLyB0ZXN0IHN2ZyBzdXBwb3J0XG5cdHR5cGVzWyBcImltYWdlL3N2Zyt4bWxcIiBdID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSggXCJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0ltYWdlXCIsIFwiMS4xXCIgKTtcblxuXHQvKipcblx0ICogdXBkYXRlcyB0aGUgaW50ZXJuYWwgdlcgcHJvcGVydHkgd2l0aCB0aGUgY3VycmVudCB2aWV3cG9ydCB3aWR0aCBpbiBweFxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlTWV0cmljcygpIHtcblxuXHRcdGlzVndEaXJ0eSA9IGZhbHNlO1xuXHRcdERQUiA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXHRcdGNzc0NhY2hlID0ge307XG5cdFx0c2l6ZUxlbmd0aENhY2hlID0ge307XG5cblx0XHRwZi5EUFIgPSBEUFIgfHwgMTtcblxuXHRcdHVuaXRzLndpZHRoID0gTWF0aC5tYXgod2luZG93LmlubmVyV2lkdGggfHwgMCwgZG9jRWxlbS5jbGllbnRXaWR0aCk7XG5cdFx0dW5pdHMuaGVpZ2h0ID0gTWF0aC5tYXgod2luZG93LmlubmVySGVpZ2h0IHx8IDAsIGRvY0VsZW0uY2xpZW50SGVpZ2h0KTtcblxuXHRcdHVuaXRzLnZ3ID0gdW5pdHMud2lkdGggLyAxMDA7XG5cdFx0dW5pdHMudmggPSB1bml0cy5oZWlnaHQgLyAxMDA7XG5cblx0XHRldmFsSWQgPSBbIHVuaXRzLmhlaWdodCwgdW5pdHMud2lkdGgsIERQUiBdLmpvaW4oXCItXCIpO1xuXG5cdFx0dW5pdHMuZW0gPSBwZi5nZXRFbVZhbHVlKCk7XG5cdFx0dW5pdHMucmVtID0gdW5pdHMuZW07XG5cdH1cblxuXHRmdW5jdGlvbiBjaG9vc2VMb3dSZXMoIGxvd2VyVmFsdWUsIGhpZ2hlclZhbHVlLCBkcHJWYWx1ZSwgaXNDYWNoZWQgKSB7XG5cdFx0dmFyIGJvbnVzRmFjdG9yLCB0b29NdWNoLCBib251cywgbWVhbkRlbnNpdHk7XG5cblx0XHQvL2V4cGVyaW1lbnRhbFxuXHRcdGlmIChjZmcuYWxnb3JpdGhtID09PSBcInNhdmVEYXRhXCIgKXtcblx0XHRcdGlmICggbG93ZXJWYWx1ZSA+IDIuNyApIHtcblx0XHRcdFx0bWVhbkRlbnNpdHkgPSBkcHJWYWx1ZSArIDE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b29NdWNoID0gaGlnaGVyVmFsdWUgLSBkcHJWYWx1ZTtcblx0XHRcdFx0Ym9udXNGYWN0b3IgPSBNYXRoLnBvdyhsb3dlclZhbHVlIC0gMC42LCAxLjUpO1xuXG5cdFx0XHRcdGJvbnVzID0gdG9vTXVjaCAqIGJvbnVzRmFjdG9yO1xuXG5cdFx0XHRcdGlmIChpc0NhY2hlZCkge1xuXHRcdFx0XHRcdGJvbnVzICs9IDAuMSAqIGJvbnVzRmFjdG9yO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWVhbkRlbnNpdHkgPSBsb3dlclZhbHVlICsgYm9udXM7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1lYW5EZW5zaXR5ID0gKGRwclZhbHVlID4gMSkgP1xuXHRcdFx0XHRNYXRoLnNxcnQobG93ZXJWYWx1ZSAqIGhpZ2hlclZhbHVlKSA6XG5cdFx0XHRcdGxvd2VyVmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lYW5EZW5zaXR5ID4gZHByVmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBhcHBseUJlc3RDYW5kaWRhdGUoIGltZyApIHtcblx0XHR2YXIgc3JjU2V0Q2FuZGlkYXRlcztcblx0XHR2YXIgbWF0Y2hpbmdTZXQgPSBwZi5nZXRTZXQoIGltZyApO1xuXHRcdHZhciBldmFsdWF0ZWQgPSBmYWxzZTtcblx0XHRpZiAoIG1hdGNoaW5nU2V0ICE9PSBcInBlbmRpbmdcIiApIHtcblx0XHRcdGV2YWx1YXRlZCA9IGV2YWxJZDtcblx0XHRcdGlmICggbWF0Y2hpbmdTZXQgKSB7XG5cdFx0XHRcdHNyY1NldENhbmRpZGF0ZXMgPSBwZi5zZXRSZXMoIG1hdGNoaW5nU2V0ICk7XG5cdFx0XHRcdHBmLmFwcGx5U2V0Q2FuZGlkYXRlKCBzcmNTZXRDYW5kaWRhdGVzLCBpbWcgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aW1nWyBwZi5ucyBdLmV2YWxlZCA9IGV2YWx1YXRlZDtcblx0fVxuXG5cdGZ1bmN0aW9uIGFzY2VuZGluZ1NvcnQoIGEsIGIgKSB7XG5cdFx0cmV0dXJuIGEucmVzIC0gYi5yZXM7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRTcmNUb0N1ciggaW1nLCBzcmMsIHNldCApIHtcblx0XHR2YXIgY2FuZGlkYXRlO1xuXHRcdGlmICggIXNldCAmJiBzcmMgKSB7XG5cdFx0XHRzZXQgPSBpbWdbIHBmLm5zIF0uc2V0cztcblx0XHRcdHNldCA9IHNldCAmJiBzZXRbc2V0Lmxlbmd0aCAtIDFdO1xuXHRcdH1cblxuXHRcdGNhbmRpZGF0ZSA9IGdldENhbmRpZGF0ZUZvclNyYyhzcmMsIHNldCk7XG5cblx0XHRpZiAoIGNhbmRpZGF0ZSApIHtcblx0XHRcdHNyYyA9IHBmLm1ha2VVcmwoc3JjKTtcblx0XHRcdGltZ1sgcGYubnMgXS5jdXJTcmMgPSBzcmM7XG5cdFx0XHRpbWdbIHBmLm5zIF0uY3VyQ2FuID0gY2FuZGlkYXRlO1xuXG5cdFx0XHRpZiAoICFjYW5kaWRhdGUucmVzICkge1xuXHRcdFx0XHRzZXRSZXNvbHV0aW9uKCBjYW5kaWRhdGUsIGNhbmRpZGF0ZS5zZXQuc2l6ZXMgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhbmRpZGF0ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENhbmRpZGF0ZUZvclNyYyggc3JjLCBzZXQgKSB7XG5cdFx0dmFyIGksIGNhbmRpZGF0ZSwgY2FuZGlkYXRlcztcblx0XHRpZiAoIHNyYyAmJiBzZXQgKSB7XG5cdFx0XHRjYW5kaWRhdGVzID0gcGYucGFyc2VTZXQoIHNldCApO1xuXHRcdFx0c3JjID0gcGYubWFrZVVybChzcmMpO1xuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBjYW5kaWRhdGVzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIHNyYyA9PT0gcGYubWFrZVVybChjYW5kaWRhdGVzWyBpIF0udXJsKSApIHtcblx0XHRcdFx0XHRjYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBpIF07XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhbmRpZGF0ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEFsbFNvdXJjZUVsZW1lbnRzKCBwaWN0dXJlLCBjYW5kaWRhdGVzICkge1xuXHRcdHZhciBpLCBsZW4sIHNvdXJjZSwgc3Jjc2V0O1xuXG5cdFx0Ly8gU1BFQyBtaXNtYXRjaCBpbnRlbmRlZCBmb3Igc2l6ZSBhbmQgcGVyZjpcblx0XHQvLyBhY3R1YWxseSBvbmx5IHNvdXJjZSBlbGVtZW50cyBwcmVjZWRpbmcgdGhlIGltZyBzaG91bGQgYmUgdXNlZFxuXHRcdC8vIGFsc28gbm90ZTogZG9uJ3QgdXNlIHFzYSBoZXJlLCBiZWNhdXNlIElFOCBzb21ldGltZXMgZG9lc24ndCBsaWtlIHNvdXJjZSBhcyB0aGUga2V5IHBhcnQgaW4gYSBzZWxlY3RvclxuXHRcdHZhciBzb3VyY2VzID0gcGljdHVyZS5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJzb3VyY2VcIiApO1xuXG5cdFx0Zm9yICggaSA9IDAsIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRzb3VyY2UgPSBzb3VyY2VzWyBpIF07XG5cdFx0XHRzb3VyY2VbIHBmLm5zIF0gPSB0cnVlO1xuXHRcdFx0c3Jjc2V0ID0gc291cmNlLmdldEF0dHJpYnV0ZSggXCJzcmNzZXRcIiApO1xuXG5cdFx0XHQvLyBpZiBzb3VyY2UgZG9lcyBub3QgaGF2ZSBhIHNyY3NldCBhdHRyaWJ1dGUsIHNraXBcblx0XHRcdGlmICggc3Jjc2V0ICkge1xuXHRcdFx0XHRjYW5kaWRhdGVzLnB1c2goIHtcblx0XHRcdFx0XHRzcmNzZXQ6IHNyY3NldCxcblx0XHRcdFx0XHRtZWRpYTogc291cmNlLmdldEF0dHJpYnV0ZSggXCJtZWRpYVwiICksXG5cdFx0XHRcdFx0dHlwZTogc291cmNlLmdldEF0dHJpYnV0ZSggXCJ0eXBlXCIgKSxcblx0XHRcdFx0XHRzaXplczogc291cmNlLmdldEF0dHJpYnV0ZSggXCJzaXplc1wiIClcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTcmNzZXQgUGFyc2VyXG5cdCAqIEJ5IEFsZXggQmVsbCB8ICBNSVQgTGljZW5zZVxuXHQgKlxuXHQgKiBAcmV0dXJucyBBcnJheSBbe3VybDogXywgZDogXywgdzogXywgaDpfLCBzZXQ6Xyg/Pz8/KX0sIC4uLl1cblx0ICpcblx0ICogQmFzZWQgc3VwZXIgZHVwZXIgY2xvc2VseSBvbiB0aGUgcmVmZXJlbmNlIGFsZ29yaXRobSBhdDpcblx0ICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZW1iZWRkZWQtY29udGVudC5odG1sI3BhcnNlLWEtc3Jjc2V0LWF0dHJpYnV0ZVxuXHQgKi9cblxuXHQvLyAxLiBMZXQgaW5wdXQgYmUgdGhlIHZhbHVlIHBhc3NlZCB0byB0aGlzIGFsZ29yaXRobS5cblx0Ly8gKFRPLURPIDogRXhwbGFpbiB3aGF0IFwic2V0XCIgYXJndW1lbnQgaXMgaGVyZS4gTWF5YmUgY2hvb3NlIGEgbW9yZVxuXHQvLyBkZXNjcmlwdGl2ZSAmIG1vcmUgc2VhcmNoYWJsZSBuYW1lLiAgU2luY2UgcGFzc2luZyB0aGUgXCJzZXRcIiBpbiByZWFsbHkgaGFzXG5cdC8vIG5vdGhpbmcgdG8gZG8gd2l0aCBwYXJzaW5nIHByb3BlciwgSSB3b3VsZCBwcmVmZXIgdGhpcyBhc3NpZ25tZW50IGV2ZW50dWFsbHlcblx0Ly8gZ28gaW4gYW4gZXh0ZXJuYWwgZm4uKVxuXHRmdW5jdGlvbiBwYXJzZVNyY3NldChpbnB1dCwgc2V0KSB7XG5cblx0XHRmdW5jdGlvbiBjb2xsZWN0Q2hhcmFjdGVycyhyZWdFeCkge1xuXHRcdFx0dmFyIGNoYXJzLFxuXHRcdFx0ICAgIG1hdGNoID0gcmVnRXguZXhlYyhpbnB1dC5zdWJzdHJpbmcocG9zKSk7XG5cdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0Y2hhcnMgPSBtYXRjaFsgMCBdO1xuXHRcdFx0XHRwb3MgKz0gY2hhcnMubGVuZ3RoO1xuXHRcdFx0XHRyZXR1cm4gY2hhcnM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuXHRcdCAgICB1cmwsXG5cdFx0ICAgIGRlc2NyaXB0b3JzLFxuXHRcdCAgICBjdXJyZW50RGVzY3JpcHRvcixcblx0XHQgICAgc3RhdGUsXG5cdFx0ICAgIGMsXG5cblx0XHQgICAgLy8gMi4gTGV0IHBvc2l0aW9uIGJlIGEgcG9pbnRlciBpbnRvIGlucHV0LCBpbml0aWFsbHkgcG9pbnRpbmcgYXQgdGhlIHN0YXJ0XG5cdFx0ICAgIC8vICAgIG9mIHRoZSBzdHJpbmcuXG5cdFx0ICAgIHBvcyA9IDAsXG5cblx0XHQgICAgLy8gMy4gTGV0IGNhbmRpZGF0ZXMgYmUgYW4gaW5pdGlhbGx5IGVtcHR5IHNvdXJjZSBzZXQuXG5cdFx0ICAgIGNhbmRpZGF0ZXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCogQWRkcyBkZXNjcmlwdG9yIHByb3BlcnRpZXMgdG8gYSBjYW5kaWRhdGUsIHB1c2hlcyB0byB0aGUgY2FuZGlkYXRlcyBhcnJheVxuXHRcdCogQHJldHVybiB1bmRlZmluZWRcblx0XHQqL1xuXHRcdC8vIChEZWNsYXJlZCBvdXRzaWRlIG9mIHRoZSB3aGlsZSBsb29wIHNvIHRoYXQgaXQncyBvbmx5IGNyZWF0ZWQgb25jZS5cblx0XHQvLyAoVGhpcyBmbiBpcyBkZWZpbmVkIGJlZm9yZSBpdCBpcyB1c2VkLCBpbiBvcmRlciB0byBwYXNzIEpTSElOVC5cblx0XHQvLyBVbmZvcnR1bmF0ZWx5IHRoaXMgYnJlYWtzIHRoZSBzZXF1ZW5jaW5nIG9mIHRoZSBzcGVjIGNvbW1lbnRzLiA6LyApXG5cdFx0ZnVuY3Rpb24gcGFyc2VEZXNjcmlwdG9ycygpIHtcblxuXHRcdFx0Ly8gOS4gRGVzY3JpcHRvciBwYXJzZXI6IExldCBlcnJvciBiZSBuby5cblx0XHRcdHZhciBwRXJyb3IgPSBmYWxzZSxcblxuXHRcdFx0Ly8gMTAuIExldCB3aWR0aCBiZSBhYnNlbnQuXG5cdFx0XHQvLyAxMS4gTGV0IGRlbnNpdHkgYmUgYWJzZW50LlxuXHRcdFx0Ly8gMTIuIExldCBmdXR1cmUtY29tcGF0LWggYmUgYWJzZW50LiAoV2UncmUgaW1wbGVtZW50aW5nIGl0IG5vdyBhcyBoKVxuXHRcdFx0ICAgIHcsIGQsIGgsIGksXG5cdFx0XHQgICAgY2FuZGlkYXRlID0ge30sXG5cdFx0XHQgICAgZGVzYywgbGFzdENoYXIsIHZhbHVlLCBpbnRWYWwsIGZsb2F0VmFsO1xuXG5cdFx0XHQvLyAxMy4gRm9yIGVhY2ggZGVzY3JpcHRvciBpbiBkZXNjcmlwdG9ycywgcnVuIHRoZSBhcHByb3ByaWF0ZSBzZXQgb2Ygc3RlcHNcblx0XHRcdC8vIGZyb20gdGhlIGZvbGxvd2luZyBsaXN0OlxuXHRcdFx0Zm9yIChpID0gMCA7IGkgPCBkZXNjcmlwdG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRkZXNjID0gZGVzY3JpcHRvcnNbIGkgXTtcblxuXHRcdFx0XHRsYXN0Q2hhciA9IGRlc2NbIGRlc2MubGVuZ3RoIC0gMSBdO1xuXHRcdFx0XHR2YWx1ZSA9IGRlc2Muc3Vic3RyaW5nKDAsIGRlc2MubGVuZ3RoIC0gMSk7XG5cdFx0XHRcdGludFZhbCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG5cdFx0XHRcdGZsb2F0VmFsID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGRlc2NyaXB0b3IgY29uc2lzdHMgb2YgYSB2YWxpZCBub24tbmVnYXRpdmUgaW50ZWdlciBmb2xsb3dlZCBieVxuXHRcdFx0XHQvLyBhIFUrMDA3NyBMQVRJTiBTTUFMTCBMRVRURVIgVyBjaGFyYWN0ZXJcblx0XHRcdFx0aWYgKHJlZ2V4Tm9uTmVnYXRpdmVJbnRlZ2VyLnRlc3QodmFsdWUpICYmIChsYXN0Q2hhciA9PT0gXCJ3XCIpKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB3aWR0aCBhbmQgZGVuc2l0eSBhcmUgbm90IGJvdGggYWJzZW50LCB0aGVuIGxldCBlcnJvciBiZSB5ZXMuXG5cdFx0XHRcdFx0aWYgKHcgfHwgZCkge3BFcnJvciA9IHRydWU7fVxuXG5cdFx0XHRcdFx0Ly8gQXBwbHkgdGhlIHJ1bGVzIGZvciBwYXJzaW5nIG5vbi1uZWdhdGl2ZSBpbnRlZ2VycyB0byB0aGUgZGVzY3JpcHRvci5cblx0XHRcdFx0XHQvLyBJZiB0aGUgcmVzdWx0IGlzIHplcm8sIGxldCBlcnJvciBiZSB5ZXMuXG5cdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCBsZXQgd2lkdGggYmUgdGhlIHJlc3VsdC5cblx0XHRcdFx0XHRpZiAoaW50VmFsID09PSAwKSB7cEVycm9yID0gdHJ1ZTt9IGVsc2Uge3cgPSBpbnRWYWw7fVxuXG5cdFx0XHRcdC8vIElmIHRoZSBkZXNjcmlwdG9yIGNvbnNpc3RzIG9mIGEgdmFsaWQgZmxvYXRpbmctcG9pbnQgbnVtYmVyIGZvbGxvd2VkIGJ5XG5cdFx0XHRcdC8vIGEgVSswMDc4IExBVElOIFNNQUxMIExFVFRFUiBYIGNoYXJhY3RlclxuXHRcdFx0XHR9IGVsc2UgaWYgKHJlZ2V4RmxvYXRpbmdQb2ludC50ZXN0KHZhbHVlKSAmJiAobGFzdENoYXIgPT09IFwieFwiKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2lkdGgsIGRlbnNpdHkgYW5kIGZ1dHVyZS1jb21wYXQtaCBhcmUgbm90IGFsbCBhYnNlbnQsIHRoZW4gbGV0IGVycm9yXG5cdFx0XHRcdFx0Ly8gYmUgeWVzLlxuXHRcdFx0XHRcdGlmICh3IHx8IGQgfHwgaCkge3BFcnJvciA9IHRydWU7fVxuXG5cdFx0XHRcdFx0Ly8gQXBwbHkgdGhlIHJ1bGVzIGZvciBwYXJzaW5nIGZsb2F0aW5nLXBvaW50IG51bWJlciB2YWx1ZXMgdG8gdGhlIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyBsZXNzIHRoYW4gemVybywgbGV0IGVycm9yIGJlIHllcy4gT3RoZXJ3aXNlLCBsZXQgZGVuc2l0eVxuXHRcdFx0XHRcdC8vIGJlIHRoZSByZXN1bHQuXG5cdFx0XHRcdFx0aWYgKGZsb2F0VmFsIDwgMCkge3BFcnJvciA9IHRydWU7fSBlbHNlIHtkID0gZmxvYXRWYWw7fVxuXG5cdFx0XHRcdC8vIElmIHRoZSBkZXNjcmlwdG9yIGNvbnNpc3RzIG9mIGEgdmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXIgZm9sbG93ZWQgYnlcblx0XHRcdFx0Ly8gYSBVKzAwNjggTEFUSU4gU01BTEwgTEVUVEVSIEggY2hhcmFjdGVyXG5cdFx0XHRcdH0gZWxzZSBpZiAocmVnZXhOb25OZWdhdGl2ZUludGVnZXIudGVzdCh2YWx1ZSkgJiYgKGxhc3RDaGFyID09PSBcImhcIikpIHtcblxuXHRcdFx0XHRcdC8vIElmIGhlaWdodCBhbmQgZGVuc2l0eSBhcmUgbm90IGJvdGggYWJzZW50LCB0aGVuIGxldCBlcnJvciBiZSB5ZXMuXG5cdFx0XHRcdFx0aWYgKGggfHwgZCkge3BFcnJvciA9IHRydWU7fVxuXG5cdFx0XHRcdFx0Ly8gQXBwbHkgdGhlIHJ1bGVzIGZvciBwYXJzaW5nIG5vbi1uZWdhdGl2ZSBpbnRlZ2VycyB0byB0aGUgZGVzY3JpcHRvci5cblx0XHRcdFx0XHQvLyBJZiB0aGUgcmVzdWx0IGlzIHplcm8sIGxldCBlcnJvciBiZSB5ZXMuIE90aGVyd2lzZSwgbGV0IGZ1dHVyZS1jb21wYXQtaFxuXHRcdFx0XHRcdC8vIGJlIHRoZSByZXN1bHQuXG5cdFx0XHRcdFx0aWYgKGludFZhbCA9PT0gMCkge3BFcnJvciA9IHRydWU7fSBlbHNlIHtoID0gaW50VmFsO31cblxuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlLCBMZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHR9IGVsc2Uge3BFcnJvciA9IHRydWU7fVxuXHRcdFx0fSAvLyAoY2xvc2Ugc3RlcCAxMyBmb3IgbG9vcClcblxuXHRcdFx0Ly8gMTUuIElmIGVycm9yIGlzIHN0aWxsIG5vLCB0aGVuIGFwcGVuZCBhIG5ldyBpbWFnZSBzb3VyY2UgdG8gY2FuZGlkYXRlcyB3aG9zZVxuXHRcdFx0Ly8gVVJMIGlzIHVybCwgYXNzb2NpYXRlZCB3aXRoIGEgd2lkdGggd2lkdGggaWYgbm90IGFic2VudCBhbmQgYSBwaXhlbFxuXHRcdFx0Ly8gZGVuc2l0eSBkZW5zaXR5IGlmIG5vdCBhYnNlbnQuIE90aGVyd2lzZSwgdGhlcmUgaXMgYSBwYXJzZSBlcnJvci5cblx0XHRcdGlmICghcEVycm9yKSB7XG5cdFx0XHRcdGNhbmRpZGF0ZS51cmwgPSB1cmw7XG5cblx0XHRcdFx0aWYgKHcpIHsgY2FuZGlkYXRlLncgPSB3O31cblx0XHRcdFx0aWYgKGQpIHsgY2FuZGlkYXRlLmQgPSBkO31cblx0XHRcdFx0aWYgKGgpIHsgY2FuZGlkYXRlLmggPSBoO31cblx0XHRcdFx0aWYgKCFoICYmICFkICYmICF3KSB7Y2FuZGlkYXRlLmQgPSAxO31cblx0XHRcdFx0aWYgKGNhbmRpZGF0ZS5kID09PSAxKSB7c2V0LmhhczF4ID0gdHJ1ZTt9XG5cdFx0XHRcdGNhbmRpZGF0ZS5zZXQgPSBzZXQ7XG5cblx0XHRcdFx0Y2FuZGlkYXRlcy5wdXNoKGNhbmRpZGF0ZSk7XG5cdFx0XHR9XG5cdFx0fSAvLyAoY2xvc2UgcGFyc2VEZXNjcmlwdG9ycyBmbilcblxuXHRcdC8qKlxuXHRcdCogVG9rZW5pemVzIGRlc2NyaXB0b3IgcHJvcGVydGllcyBwcmlvciB0byBwYXJzaW5nXG5cdFx0KiBSZXR1cm5zIHVuZGVmaW5lZC5cblx0XHQqIChBZ2FpbiwgdGhpcyBmbiBpcyBkZWZpbmVkIGJlZm9yZSBpdCBpcyB1c2VkLCBpbiBvcmRlciB0byBwYXNzIEpTSElOVC5cblx0XHQqIFVuZm9ydHVuYXRlbHkgdGhpcyBicmVha3MgdGhlIGxvZ2ljYWwgc2VxdWVuY2luZyBvZiB0aGUgc3BlYyBjb21tZW50cy4gOi8gKVxuXHRcdCovXG5cdFx0ZnVuY3Rpb24gdG9rZW5pemUoKSB7XG5cblx0XHRcdC8vIDguMS4gRGVzY3JpcHRvciB0b2tlbmlzZXI6IFNraXAgd2hpdGVzcGFjZVxuXHRcdFx0Y29sbGVjdENoYXJhY3RlcnMocmVnZXhMZWFkaW5nU3BhY2VzKTtcblxuXHRcdFx0Ly8gOC4yLiBMZXQgY3VycmVudCBkZXNjcmlwdG9yIGJlIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IFwiXCI7XG5cblx0XHRcdC8vIDguMy4gTGV0IHN0YXRlIGJlIGluIGRlc2NyaXB0b3IuXG5cdFx0XHRzdGF0ZSA9IFwiaW4gZGVzY3JpcHRvclwiO1xuXG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXG5cdFx0XHRcdC8vIDguNC4gTGV0IGMgYmUgdGhlIGNoYXJhY3RlciBhdCBwb3NpdGlvbi5cblx0XHRcdFx0YyA9IGlucHV0LmNoYXJBdChwb3MpO1xuXG5cdFx0XHRcdC8vICBEbyB0aGUgZm9sbG93aW5nIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2Ygc3RhdGUuXG5cdFx0XHRcdC8vICBGb3IgdGhlIHB1cnBvc2Ugb2YgdGhpcyBzdGVwLCBcIkVPRlwiIGlzIGEgc3BlY2lhbCBjaGFyYWN0ZXIgcmVwcmVzZW50aW5nXG5cdFx0XHRcdC8vICB0aGF0IHBvc2l0aW9uIGlzIHBhc3QgdGhlIGVuZCBvZiBpbnB1dC5cblxuXHRcdFx0XHQvLyBJbiBkZXNjcmlwdG9yXG5cdFx0XHRcdGlmIChzdGF0ZSA9PT0gXCJpbiBkZXNjcmlwdG9yXCIpIHtcblx0XHRcdFx0XHQvLyBEbyB0aGUgZm9sbG93aW5nLCBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGM6XG5cblx0XHRcdFx0ICAvLyBTcGFjZSBjaGFyYWN0ZXJcblx0XHRcdFx0ICAvLyBJZiBjdXJyZW50IGRlc2NyaXB0b3IgaXMgbm90IGVtcHR5LCBhcHBlbmQgY3VycmVudCBkZXNjcmlwdG9yIHRvXG5cdFx0XHRcdCAgLy8gZGVzY3JpcHRvcnMgYW5kIGxldCBjdXJyZW50IGRlc2NyaXB0b3IgYmUgdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdFx0ICAvLyBTZXQgc3RhdGUgdG8gYWZ0ZXIgZGVzY3JpcHRvci5cblx0XHRcdFx0XHRpZiAoaXNTcGFjZShjKSkge1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnREZXNjcmlwdG9yKSB7XG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IFwiXCI7XG5cdFx0XHRcdFx0XHRcdHN0YXRlID0gXCJhZnRlciBkZXNjcmlwdG9yXCI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBVKzAwMkMgQ09NTUEgKCwpXG5cdFx0XHRcdFx0Ly8gQWR2YW5jZSBwb3NpdGlvbiB0byB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gaW5wdXQuIElmIGN1cnJlbnQgZGVzY3JpcHRvclxuXHRcdFx0XHRcdC8vIGlzIG5vdCBlbXB0eSwgYXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0byBkZXNjcmlwdG9ycy4gSnVtcCB0byB0aGUgc3RlcFxuXHRcdFx0XHRcdC8vIGxhYmVsZWQgZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIixcIikge1xuXHRcdFx0XHRcdFx0cG9zICs9IDE7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudERlc2NyaXB0b3IpIHtcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRvcnMucHVzaChjdXJyZW50RGVzY3JpcHRvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBVKzAwMjggTEVGVCBQQVJFTlRIRVNJUyAoKClcblx0XHRcdFx0XHQvLyBBcHBlbmQgYyB0byBjdXJyZW50IGRlc2NyaXB0b3IuIFNldCBzdGF0ZSB0byBpbiBwYXJlbnMuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlxcdTAwMjhcIikge1xuXHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBjdXJyZW50RGVzY3JpcHRvciArIGM7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFwiaW4gcGFyZW5zXCI7XG5cblx0XHRcdFx0XHQvLyBFT0Zcblx0XHRcdFx0XHQvLyBJZiBjdXJyZW50IGRlc2NyaXB0b3IgaXMgbm90IGVtcHR5LCBhcHBlbmQgY3VycmVudCBkZXNjcmlwdG9yIHRvXG5cdFx0XHRcdFx0Ly8gZGVzY3JpcHRvcnMuIEp1bXAgdG8gdGhlIHN0ZXAgbGFiZWxlZCBkZXNjcmlwdG9yIHBhcnNlci5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50RGVzY3JpcHRvcikge1xuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9ycy5wdXNoKGN1cnJlbnREZXNjcmlwdG9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdC8vIEFueXRoaW5nIGVsc2Vcblx0XHRcdFx0XHQvLyBBcHBlbmQgYyB0byBjdXJyZW50IGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gY3VycmVudERlc2NyaXB0b3IgKyBjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0Ly8gKGVuZCBcImluIGRlc2NyaXB0b3JcIlxuXG5cdFx0XHRcdC8vIEluIHBhcmVuc1xuXHRcdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09PSBcImluIHBhcmVuc1wiKSB7XG5cblx0XHRcdFx0XHQvLyBVKzAwMjkgUklHSFQgUEFSRU5USEVTSVMgKCkpXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLiBTZXQgc3RhdGUgdG8gaW4gZGVzY3JpcHRvci5cblx0XHRcdFx0XHRpZiAoYyA9PT0gXCIpXCIpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gY3VycmVudERlc2NyaXB0b3IgKyBjO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBcImluIGRlc2NyaXB0b3JcIjtcblxuXHRcdFx0XHRcdC8vIEVPRlxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjdXJyZW50IGRlc2NyaXB0b3IgdG8gZGVzY3JpcHRvcnMuIEp1bXAgdG8gdGhlIHN0ZXAgbGFiZWxlZFxuXHRcdFx0XHRcdC8vIGRlc2NyaXB0b3IgcGFyc2VyLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCJcIikge1xuXHRcdFx0XHRcdFx0ZGVzY3JpcHRvcnMucHVzaChjdXJyZW50RGVzY3JpcHRvcik7XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWZ0ZXIgZGVzY3JpcHRvclxuXHRcdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09PSBcImFmdGVyIGRlc2NyaXB0b3JcIikge1xuXG5cdFx0XHRcdFx0Ly8gRG8gdGhlIGZvbGxvd2luZywgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBjOlxuXHRcdFx0XHRcdC8vIFNwYWNlIGNoYXJhY3RlcjogU3RheSBpbiB0aGlzIHN0YXRlLlxuXHRcdFx0XHRcdGlmIChpc1NwYWNlKGMpKSB7XG5cblx0XHRcdFx0XHQvLyBFT0Y6IEp1bXAgdG8gdGhlIHN0ZXAgbGFiZWxlZCBkZXNjcmlwdG9yIHBhcnNlci5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdC8vIEFueXRoaW5nIGVsc2Vcblx0XHRcdFx0XHQvLyBTZXQgc3RhdGUgdG8gaW4gZGVzY3JpcHRvci4gU2V0IHBvc2l0aW9uIHRvIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXIgaW4gaW5wdXQuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN0YXRlID0gXCJpbiBkZXNjcmlwdG9yXCI7XG5cdFx0XHRcdFx0XHRwb3MgLT0gMTtcblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkdmFuY2UgcG9zaXRpb24gdG8gdGhlIG5leHQgY2hhcmFjdGVyIGluIGlucHV0LlxuXHRcdFx0XHRwb3MgKz0gMTtcblxuXHRcdFx0Ly8gUmVwZWF0IHRoaXMgc3RlcC5cblx0XHRcdH0gLy8gKGNsb3NlIHdoaWxlIHRydWUgbG9vcClcblx0XHR9XG5cblx0XHQvLyA0LiBTcGxpdHRpbmcgbG9vcDogQ29sbGVjdCBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgdGhhdCBhcmUgc3BhY2Vcblx0XHQvLyAgICBjaGFyYWN0ZXJzIG9yIFUrMDAyQyBDT01NQSBjaGFyYWN0ZXJzLiBJZiBhbnkgVSswMDJDIENPTU1BIGNoYXJhY3RlcnNcblx0XHQvLyAgICB3ZXJlIGNvbGxlY3RlZCwgdGhhdCBpcyBhIHBhcnNlIGVycm9yLlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRjb2xsZWN0Q2hhcmFjdGVycyhyZWdleExlYWRpbmdDb21tYXNPclNwYWNlcyk7XG5cblx0XHRcdC8vIDUuIElmIHBvc2l0aW9uIGlzIHBhc3QgdGhlIGVuZCBvZiBpbnB1dCwgcmV0dXJuIGNhbmRpZGF0ZXMgYW5kIGFib3J0IHRoZXNlIHN0ZXBzLlxuXHRcdFx0aWYgKHBvcyA+PSBpbnB1dExlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gY2FuZGlkYXRlczsgLy8gKHdlJ3JlIGRvbmUsIHRoaXMgaXMgdGhlIHNvbGUgcmV0dXJuIHBhdGgpXG5cdFx0XHR9XG5cblx0XHRcdC8vIDYuIENvbGxlY3QgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBzcGFjZSBjaGFyYWN0ZXJzLFxuXHRcdFx0Ly8gICAgYW5kIGxldCB0aGF0IGJlIHVybC5cblx0XHRcdHVybCA9IGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ2V4TGVhZGluZ05vdFNwYWNlcyk7XG5cblx0XHRcdC8vIDcuIExldCBkZXNjcmlwdG9ycyBiZSBhIG5ldyBlbXB0eSBsaXN0LlxuXHRcdFx0ZGVzY3JpcHRvcnMgPSBbXTtcblxuXHRcdFx0Ly8gOC4gSWYgdXJsIGVuZHMgd2l0aCBhIFUrMDAyQyBDT01NQSBjaGFyYWN0ZXIgKCwpLCBmb2xsb3cgdGhlc2Ugc3Vic3RlcHM6XG5cdFx0XHQvL1x0XHQoMSkuIFJlbW92ZSBhbGwgdHJhaWxpbmcgVSswMDJDIENPTU1BIGNoYXJhY3RlcnMgZnJvbSB1cmwuIElmIHRoaXMgcmVtb3ZlZFxuXHRcdFx0Ly8gICAgICAgICBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhhdCBpcyBhIHBhcnNlIGVycm9yLlxuXHRcdFx0aWYgKHVybC5zbGljZSgtMSkgPT09IFwiLFwiKSB7XG5cdFx0XHRcdHVybCA9IHVybC5yZXBsYWNlKHJlZ2V4VHJhaWxpbmdDb21tYXMsIFwiXCIpO1xuXHRcdFx0XHQvLyAoSnVtcCBhaGVhZCB0byBzdGVwIDkgdG8gc2tpcCB0b2tlbml6YXRpb24gYW5kIGp1c3QgcHVzaCB0aGUgY2FuZGlkYXRlKS5cblx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXG5cdFx0XHQvL1x0T3RoZXJ3aXNlLCBmb2xsb3cgdGhlc2Ugc3Vic3RlcHM6XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b2tlbml6ZSgpO1xuXHRcdFx0fSAvLyAoY2xvc2UgZWxzZSBvZiBzdGVwIDgpXG5cblx0XHQvLyAxNi4gUmV0dXJuIHRvIHRoZSBzdGVwIGxhYmVsZWQgc3BsaXR0aW5nIGxvb3AuXG5cdFx0fSAvLyAoQ2xvc2Ugb2YgYmlnIHdoaWxlIGxvb3AuKVxuXHR9XG5cblx0Lypcblx0ICogU2l6ZXMgUGFyc2VyXG5cdCAqXG5cdCAqIEJ5IEFsZXggQmVsbCB8ICBNSVQgTGljZW5zZVxuXHQgKlxuXHQgKiBOb24tc3RyaWN0IGJ1dCBhY2N1cmF0ZSBhbmQgbGlnaHR3ZWlnaHQgSlMgUGFyc2VyIGZvciB0aGUgc3RyaW5nIHZhbHVlIDxpbWcgc2l6ZXM9XCJoZXJlXCI+XG5cdCAqXG5cdCAqIFJlZmVyZW5jZSBhbGdvcml0aG0gYXQ6XG5cdCAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCNwYXJzZS1hLXNpemVzLWF0dHJpYnV0ZVxuXHQgKlxuXHQgKiBNb3N0IGNvbW1lbnRzIGFyZSBjb3BpZWQgaW4gZGlyZWN0bHkgZnJvbSB0aGUgc3BlY1xuXHQgKiAoZXhjZXB0IGZvciBjb21tZW50cyBpbiBwYXJlbnMpLlxuXHQgKlxuXHQgKiBHcmFtbWFyIGlzOlxuXHQgKiA8c291cmNlLXNpemUtbGlzdD4gPSA8c291cmNlLXNpemU+IyBbICwgPHNvdXJjZS1zaXplLXZhbHVlPiBdPyB8IDxzb3VyY2Utc2l6ZS12YWx1ZT5cblx0ICogPHNvdXJjZS1zaXplPiA9IDxtZWRpYS1jb25kaXRpb24+IDxzb3VyY2Utc2l6ZS12YWx1ZT5cblx0ICogPHNvdXJjZS1zaXplLXZhbHVlPiA9IDxsZW5ndGg+XG5cdCAqIGh0dHA6Ly93d3cudzMub3JnL2h0bWwvd2cvZHJhZnRzL2h0bWwvbWFzdGVyL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCNhdHRyLWltZy1zaXplc1xuXHQgKlxuXHQgKiBFLmcuIFwiKG1heC13aWR0aDogMzBlbSkgMTAwdncsIChtYXgtd2lkdGg6IDUwZW0pIDcwdncsIDEwMHZ3XCJcblx0ICogb3IgXCIobWluLXdpZHRoOiAzMGVtKSwgY2FsYygzMHZ3IC0gMTVweClcIiBvciBqdXN0IFwiMzB2d1wiXG5cdCAqXG5cdCAqIFJldHVybnMgdGhlIGZpcnN0IHZhbGlkIDxjc3MtbGVuZ3RoPiB3aXRoIGEgbWVkaWEgY29uZGl0aW9uIHRoYXQgZXZhbHVhdGVzIHRvIHRydWUsXG5cdCAqIG9yIFwiMTAwdndcIiBpZiBhbGwgdmFsaWQgbWVkaWEgY29uZGl0aW9ucyBldmFsdWF0ZSB0byBmYWxzZS5cblx0ICpcblx0ICovXG5cblx0ZnVuY3Rpb24gcGFyc2VTaXplcyhzdHJWYWx1ZSkge1xuXG5cdFx0Ly8gKFBlcmNlbnRhZ2UgQ1NTIGxlbmd0aHMgYXJlIG5vdCBhbGxvd2VkIGluIHRoaXMgY2FzZSwgdG8gYXZvaWQgY29uZnVzaW9uOlxuXHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCN2YWxpZC1zb3VyY2Utc2l6ZS1saXN0XG5cdFx0Ly8gQ1NTIGFsbG93cyBhIHNpbmdsZSBvcHRpb25hbCBwbHVzIG9yIG1pbnVzIHNpZ246XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMi9zeW5kYXRhLmh0bWwjbnVtYmVyc1xuXHRcdC8vIENTUyBpcyBBU0NJSSBjYXNlLWluc2Vuc2l0aXZlOlxuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIvc3luZGF0YS5odG1sI2NoYXJhY3RlcnMgKVxuXHRcdC8vIFNwZWMgYWxsb3dzIGV4cG9uZW50aWFsIG5vdGF0aW9uIGZvciA8bnVtYmVyPiB0eXBlOlxuXHRcdC8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy12YWx1ZXMvI251bWJlcnNcblx0XHR2YXIgcmVnZXhDc3NMZW5ndGhXaXRoVW5pdHMgPSAvXig/OlsrLV0/WzAtOV0rfFswLTldKlxcLlswLTldKykoPzpbZUVdWystXT9bMC05XSspPyg/OmNofGNtfGVtfGV4fGlufG1tfHBjfHB0fHB4fHJlbXx2aHx2bWlufHZtYXh8dncpJC9pO1xuXG5cdFx0Ly8gKFRoaXMgaXMgYSBxdWljayBhbmQgbGVuaWVudCB0ZXN0LiBCZWNhdXNlIG9mIG9wdGlvbmFsIHVubGltaXRlZC1kZXB0aCBpbnRlcm5hbFxuXHRcdC8vIGdyb3VwaW5nIHBhcmVucyBhbmQgc3RyaWN0IHNwYWNpbmcgcnVsZXMsIHRoaXMgY291bGQgZ2V0IHZlcnkgY29tcGxpY2F0ZWQuKVxuXHRcdHZhciByZWdleENzc0NhbGMgPSAvXmNhbGNcXCgoPzpbMC05YS16IFxcLlxcK1xcLVxcKlxcL1xcKFxcKV0rKVxcKSQvaTtcblxuXHRcdHZhciBpO1xuXHRcdHZhciB1bnBhcnNlZFNpemVzTGlzdDtcblx0XHR2YXIgdW5wYXJzZWRTaXplc0xpc3RMZW5ndGg7XG5cdFx0dmFyIHVucGFyc2VkU2l6ZTtcblx0XHR2YXIgbGFzdENvbXBvbmVudFZhbHVlO1xuXHRcdHZhciBzaXplO1xuXG5cdFx0Ly8gVVRJTElUWSBGVU5DVElPTlNcblxuXHRcdC8vICAoVG95IENTUyBwYXJzZXIuIFRoZSBnb2FscyBoZXJlIGFyZTpcblx0XHQvLyAgMSkgZXhwYW5zaXZlIHRlc3QgY292ZXJhZ2Ugd2l0aG91dCB0aGUgd2VpZ2h0IG9mIGEgZnVsbCBDU1MgcGFyc2VyLlxuXHRcdC8vICAyKSBBdm9pZGluZyByZWdleCB3aGVyZXZlciBjb252ZW5pZW50LlxuXHRcdC8vICBRdWljayB0ZXN0czogaHR0cDovL2pzZmlkZGxlLm5ldC9ndG50TDRnci8zL1xuXHRcdC8vICBSZXR1cm5zIGFuIGFycmF5IG9mIGFycmF5cy4pXG5cdFx0ZnVuY3Rpb24gcGFyc2VDb21wb25lbnRWYWx1ZXMoc3RyKSB7XG5cdFx0XHR2YXIgY2hyY3RyO1xuXHRcdFx0dmFyIGNvbXBvbmVudCA9IFwiXCI7XG5cdFx0XHR2YXIgY29tcG9uZW50QXJyYXkgPSBbXTtcblx0XHRcdHZhciBsaXN0QXJyYXkgPSBbXTtcblx0XHRcdHZhciBwYXJlbkRlcHRoID0gMDtcblx0XHRcdHZhciBwb3MgPSAwO1xuXHRcdFx0dmFyIGluQ29tbWVudCA9IGZhbHNlO1xuXG5cdFx0XHRmdW5jdGlvbiBwdXNoQ29tcG9uZW50KCkge1xuXHRcdFx0XHRpZiAoY29tcG9uZW50KSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50QXJyYXkucHVzaChjb21wb25lbnQpO1xuXHRcdFx0XHRcdGNvbXBvbmVudCA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gcHVzaENvbXBvbmVudEFycmF5KCkge1xuXHRcdFx0XHRpZiAoY29tcG9uZW50QXJyYXlbMF0pIHtcblx0XHRcdFx0XHRsaXN0QXJyYXkucHVzaChjb21wb25lbnRBcnJheSk7XG5cdFx0XHRcdFx0Y29tcG9uZW50QXJyYXkgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyAoTG9vcCBmb3J3YXJkcyBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN0cmluZy4pXG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRjaHJjdHIgPSBzdHIuY2hhckF0KHBvcyk7XG5cblx0XHRcdFx0aWYgKGNocmN0ciA9PT0gXCJcIikgeyAvLyAoIEVuZCBvZiBzdHJpbmcgcmVhY2hlZC4pXG5cdFx0XHRcdFx0cHVzaENvbXBvbmVudCgpO1xuXHRcdFx0XHRcdHB1c2hDb21wb25lbnRBcnJheSgpO1xuXHRcdFx0XHRcdHJldHVybiBsaXN0QXJyYXk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaW5Db21tZW50KSB7XG5cdFx0XHRcdFx0aWYgKChjaHJjdHIgPT09IFwiKlwiKSAmJiAoc3RyW3BvcyArIDFdID09PSBcIi9cIikpIHsgLy8gKEF0IGVuZCBvZiBhIGNvbW1lbnQuKVxuXHRcdFx0XHRcdFx0aW5Db21tZW50ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRwb3MgKz0gMjtcblx0XHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwb3MgKz0gMTsgLy8gKFNraXAgYWxsIGNoYXJhY3RlcnMgaW5zaWRlIGNvbW1lbnRzLilcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChpc1NwYWNlKGNocmN0cikpIHtcblx0XHRcdFx0XHQvLyAoSWYgcHJldmlvdXMgY2hhcmFjdGVyIGluIGxvb3Agd2FzIGFsc28gYSBzcGFjZSwgb3IgaWZcblx0XHRcdFx0XHQvLyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcsIGRvIG5vdCBhZGQgc3BhY2UgY2hhciB0b1xuXHRcdFx0XHRcdC8vIGNvbXBvbmVudC4pXG5cdFx0XHRcdFx0aWYgKCAoc3RyLmNoYXJBdChwb3MgLSAxKSAmJiBpc1NwYWNlKCBzdHIuY2hhckF0KHBvcyAtIDEpICkgKSB8fCAhY29tcG9uZW50ICkge1xuXHRcdFx0XHRcdFx0cG9zICs9IDE7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBhcmVuRGVwdGggPT09IDApIHtcblx0XHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRcdHBvcyArPTE7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gKFJlcGxhY2UgYW55IHNwYWNlIGNoYXJhY3RlciB3aXRoIGEgcGxhaW4gc3BhY2UgZm9yIGxlZ2liaWxpdHkuKVxuXHRcdFx0XHRcdFx0Y2hyY3RyID0gXCIgXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGNocmN0ciA9PT0gXCIoXCIpIHtcblx0XHRcdFx0XHRwYXJlbkRlcHRoICs9IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hyY3RyID09PSBcIilcIikge1xuXHRcdFx0XHRcdHBhcmVuRGVwdGggLT0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChjaHJjdHIgPT09IFwiLFwiKSB7XG5cdFx0XHRcdFx0cHVzaENvbXBvbmVudCgpO1xuXHRcdFx0XHRcdHB1c2hDb21wb25lbnRBcnJheSgpO1xuXHRcdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCAoY2hyY3RyID09PSBcIi9cIikgJiYgKHN0ci5jaGFyQXQocG9zICsgMSkgPT09IFwiKlwiKSApIHtcblx0XHRcdFx0XHRpbkNvbW1lbnQgPSB0cnVlO1xuXHRcdFx0XHRcdHBvcyArPSAyO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29tcG9uZW50ID0gY29tcG9uZW50ICsgY2hyY3RyO1xuXHRcdFx0XHRwb3MgKz0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpc1ZhbGlkTm9uTmVnYXRpdmVTb3VyY2VTaXplVmFsdWUocykge1xuXHRcdFx0aWYgKHJlZ2V4Q3NzTGVuZ3RoV2l0aFVuaXRzLnRlc3QocykgJiYgKHBhcnNlRmxvYXQocykgPj0gMCkpIHtyZXR1cm4gdHJ1ZTt9XG5cdFx0XHRpZiAocmVnZXhDc3NDYWxjLnRlc3QocykpIHtyZXR1cm4gdHJ1ZTt9XG5cdFx0XHQvLyAoIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIvc3luZGF0YS5odG1sI251bWJlcnMgc2F5czpcblx0XHRcdC8vIFwiLTAgaXMgZXF1aXZhbGVudCB0byAwIGFuZCBpcyBub3QgYSBuZWdhdGl2ZSBudW1iZXIuXCIgd2hpY2ggbWVhbnMgdGhhdFxuXHRcdFx0Ly8gdW5pdGxlc3MgemVybyBhbmQgdW5pdGxlc3MgbmVnYXRpdmUgemVybyBtdXN0IGJlIGFjY2VwdGVkIGFzIHNwZWNpYWwgY2FzZXMuKVxuXHRcdFx0aWYgKChzID09PSBcIjBcIikgfHwgKHMgPT09IFwiLTBcIikgfHwgKHMgPT09IFwiKzBcIikpIHtyZXR1cm4gdHJ1ZTt9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gV2hlbiBhc2tlZCB0byBwYXJzZSBhIHNpemVzIGF0dHJpYnV0ZSBmcm9tIGFuIGVsZW1lbnQsIHBhcnNlIGFcblx0XHQvLyBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBjb21wb25lbnQgdmFsdWVzIGZyb20gdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50J3Ncblx0XHQvLyBzaXplcyBhdHRyaWJ1dGUgKG9yIHRoZSBlbXB0eSBzdHJpbmcsIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYWJzZW50KSwgYW5kIGxldFxuXHRcdC8vIHVucGFyc2VkIHNpemVzIGxpc3QgYmUgdGhlIHJlc3VsdC5cblx0XHQvLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3Mtc3ludGF4LyNwYXJzZS1jb21tYS1zZXBhcmF0ZWQtbGlzdC1vZi1jb21wb25lbnQtdmFsdWVzXG5cblx0XHR1bnBhcnNlZFNpemVzTGlzdCA9IHBhcnNlQ29tcG9uZW50VmFsdWVzKHN0clZhbHVlKTtcblx0XHR1bnBhcnNlZFNpemVzTGlzdExlbmd0aCA9IHVucGFyc2VkU2l6ZXNMaXN0Lmxlbmd0aDtcblxuXHRcdC8vIEZvciBlYWNoIHVucGFyc2VkIHNpemUgaW4gdW5wYXJzZWQgc2l6ZXMgbGlzdDpcblx0XHRmb3IgKGkgPSAwOyBpIDwgdW5wYXJzZWRTaXplc0xpc3RMZW5ndGg7IGkrKykge1xuXHRcdFx0dW5wYXJzZWRTaXplID0gdW5wYXJzZWRTaXplc0xpc3RbaV07XG5cblx0XHRcdC8vIDEuIFJlbW92ZSBhbGwgY29uc2VjdXRpdmUgPHdoaXRlc3BhY2UtdG9rZW4+cyBmcm9tIHRoZSBlbmQgb2YgdW5wYXJzZWQgc2l6ZS5cblx0XHRcdC8vICggcGFyc2VDb21wb25lbnRWYWx1ZXMoKSBhbHJlYWR5IG9taXRzIHNwYWNlcyBvdXRzaWRlIG9mIHBhcmVucy4gKVxuXG5cdFx0XHQvLyBJZiB1bnBhcnNlZCBzaXplIGlzIG5vdyBlbXB0eSwgdGhhdCBpcyBhIHBhcnNlIGVycm9yOyBjb250aW51ZSB0byB0aGUgbmV4dFxuXHRcdFx0Ly8gaXRlcmF0aW9uIG9mIHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0Ly8gKCBwYXJzZUNvbXBvbmVudFZhbHVlcygpIHdvbid0IHB1c2ggYW4gZW1wdHkgYXJyYXkuIClcblxuXHRcdFx0Ly8gMi4gSWYgdGhlIGxhc3QgY29tcG9uZW50IHZhbHVlIGluIHVucGFyc2VkIHNpemUgaXMgYSB2YWxpZCBub24tbmVnYXRpdmVcblx0XHRcdC8vIDxzb3VyY2Utc2l6ZS12YWx1ZT4sIGxldCBzaXplIGJlIGl0cyB2YWx1ZSBhbmQgcmVtb3ZlIHRoZSBjb21wb25lbnQgdmFsdWVcblx0XHRcdC8vIGZyb20gdW5wYXJzZWQgc2l6ZS4gQW55IENTUyBmdW5jdGlvbiBvdGhlciB0aGFuIHRoZSBjYWxjKCkgZnVuY3Rpb24gaXNcblx0XHRcdC8vIGludmFsaWQuIE90aGVyd2lzZSwgdGhlcmUgaXMgYSBwYXJzZSBlcnJvcjsgY29udGludWUgdG8gdGhlIG5leHQgaXRlcmF0aW9uXG5cdFx0XHQvLyBvZiB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1zeW50YXgvI3BhcnNlLWNvbXBvbmVudC12YWx1ZVxuXHRcdFx0bGFzdENvbXBvbmVudFZhbHVlID0gdW5wYXJzZWRTaXplW3VucGFyc2VkU2l6ZS5sZW5ndGggLSAxXTtcblxuXHRcdFx0aWYgKGlzVmFsaWROb25OZWdhdGl2ZVNvdXJjZVNpemVWYWx1ZShsYXN0Q29tcG9uZW50VmFsdWUpKSB7XG5cdFx0XHRcdHNpemUgPSBsYXN0Q29tcG9uZW50VmFsdWU7XG5cdFx0XHRcdHVucGFyc2VkU2l6ZS5wb3AoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyAzLiBSZW1vdmUgYWxsIGNvbnNlY3V0aXZlIDx3aGl0ZXNwYWNlLXRva2VuPnMgZnJvbSB0aGUgZW5kIG9mIHVucGFyc2VkXG5cdFx0XHQvLyBzaXplLiBJZiB1bnBhcnNlZCBzaXplIGlzIG5vdyBlbXB0eSwgcmV0dXJuIHNpemUgYW5kIGV4aXQgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHQvLyBJZiB0aGlzIHdhcyBub3QgdGhlIGxhc3QgaXRlbSBpbiB1bnBhcnNlZCBzaXplcyBsaXN0LCB0aGF0IGlzIGEgcGFyc2UgZXJyb3IuXG5cdFx0XHRpZiAodW5wYXJzZWRTaXplLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gc2l6ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gNC4gUGFyc2UgdGhlIHJlbWFpbmluZyBjb21wb25lbnQgdmFsdWVzIGluIHVucGFyc2VkIHNpemUgYXMgYVxuXHRcdFx0Ly8gPG1lZGlhLWNvbmRpdGlvbj4uIElmIGl0IGRvZXMgbm90IHBhcnNlIGNvcnJlY3RseSwgb3IgaXQgZG9lcyBwYXJzZVxuXHRcdFx0Ly8gY29ycmVjdGx5IGJ1dCB0aGUgPG1lZGlhLWNvbmRpdGlvbj4gZXZhbHVhdGVzIHRvIGZhbHNlLCBjb250aW51ZSB0byB0aGVcblx0XHRcdC8vIG5leHQgaXRlcmF0aW9uIG9mIHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0Ly8gKFBhcnNpbmcgYWxsIHBvc3NpYmxlIGNvbXBvdW5kIG1lZGlhIGNvbmRpdGlvbnMgaW4gSlMgaXMgaGVhdnksIGNvbXBsaWNhdGVkLFxuXHRcdFx0Ly8gYW5kIHRoZSBwYXlvZmYgaXMgdW5jbGVhci4gSXMgdGhlcmUgZXZlciBhbiBzaXR1YXRpb24gd2hlcmUgdGhlXG5cdFx0XHQvLyBtZWRpYSBjb25kaXRpb24gcGFyc2VzIGluY29ycmVjdGx5IGJ1dCBzdGlsbCBzb21laG93IGV2YWx1YXRlcyB0byB0cnVlP1xuXHRcdFx0Ly8gQ2FuIHdlIGp1c3QgcmVseSBvbiB0aGUgYnJvd3Nlci9wb2x5ZmlsbCB0byBkbyBpdD8pXG5cdFx0XHR1bnBhcnNlZFNpemUgPSB1bnBhcnNlZFNpemUuam9pbihcIiBcIik7XG5cdFx0XHRpZiAoIShwZi5tYXRjaGVzTWVkaWEoIHVucGFyc2VkU2l6ZSApICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyA1LiBSZXR1cm4gc2l6ZSBhbmQgZXhpdCB0aGlzIGFsZ29yaXRobS5cblx0XHRcdHJldHVybiBzaXplO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBhYm92ZSBhbGdvcml0aG0gZXhoYXVzdHMgdW5wYXJzZWQgc2l6ZXMgbGlzdCB3aXRob3V0IHJldHVybmluZyBhXG5cdFx0Ly8gc2l6ZSB2YWx1ZSwgcmV0dXJuIDEwMHZ3LlxuXHRcdHJldHVybiBcIjEwMHZ3XCI7XG5cdH1cblxuXHQvLyBuYW1lc3BhY2Vcblx0cGYubnMgPSAoXCJwZlwiICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpLnN1YnN0cigwLCA5KTtcblxuXHQvLyBzcmNzZXQgc3VwcG9ydCB0ZXN0XG5cdHBmLnN1cFNyY3NldCA9IFwic3Jjc2V0XCIgaW4gaW1hZ2U7XG5cdHBmLnN1cFNpemVzID0gXCJzaXplc1wiIGluIGltYWdlO1xuXHRwZi5zdXBQaWN0dXJlID0gISF3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50O1xuXG5cdC8vIFVDIGJyb3dzZXIgZG9lcyBjbGFpbSB0byBzdXBwb3J0IHNyY3NldCBhbmQgcGljdHVyZSwgYnV0IG5vdCBzaXplcyxcblx0Ly8gdGhpcyBleHRlbmRlZCB0ZXN0IHJldmVhbHMgdGhlIGJyb3dzZXIgZG9lcyBzdXBwb3J0IG5vdGhpbmdcblx0aWYgKHBmLnN1cFNyY3NldCAmJiBwZi5zdXBQaWN0dXJlICYmICFwZi5zdXBTaXplcykge1xuXHRcdChmdW5jdGlvbihpbWFnZTIpIHtcblx0XHRcdGltYWdlLnNyY3NldCA9IFwiZGF0YTosYVwiO1xuXHRcdFx0aW1hZ2UyLnNyYyA9IFwiZGF0YTosYVwiO1xuXHRcdFx0cGYuc3VwU3Jjc2V0ID0gaW1hZ2UuY29tcGxldGUgPT09IGltYWdlMi5jb21wbGV0ZTtcblx0XHRcdHBmLnN1cFBpY3R1cmUgPSBwZi5zdXBTcmNzZXQgJiYgcGYuc3VwUGljdHVyZTtcblx0XHR9KShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpKTtcblx0fVxuXG5cdC8vIFNhZmFyaTkgaGFzIGJhc2ljIHN1cHBvcnQgZm9yIHNpemVzLCBidXQgZG9lcyd0IGV4cG9zZSB0aGUgYHNpemVzYCBpZGwgYXR0cmlidXRlXG5cdGlmIChwZi5zdXBTcmNzZXQgJiYgIXBmLnN1cFNpemVzKSB7XG5cblx0XHQoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgd2lkdGgyID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBZ0FCQVBBQUFQLy8vd0FBQUNINUJBQUFBQUFBTEFBQUFBQUNBQUVBQUFJQ0JBb0FPdz09XCI7XG5cdFx0XHR2YXIgd2lkdGgxID0gXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PVwiO1xuXHRcdFx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0XHR2YXIgdGVzdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgd2lkdGggPSBpbWcud2lkdGg7XG5cblx0XHRcdFx0aWYgKHdpZHRoID09PSAyKSB7XG5cdFx0XHRcdFx0cGYuc3VwU2l6ZXMgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWx3YXlzQ2hlY2tXRGVzY3JpcHRvciA9IHBmLnN1cFNyY3NldCAmJiAhcGYuc3VwU2l6ZXM7XG5cblx0XHRcdFx0aXNTdXBwb3J0VGVzdFJlYWR5ID0gdHJ1ZTtcblx0XHRcdFx0Ly8gZm9yY2UgYXN5bmNcblx0XHRcdFx0c2V0VGltZW91dChwaWN0dXJlZmlsbCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRpbWcub25sb2FkID0gdGVzdDtcblx0XHRcdGltZy5vbmVycm9yID0gdGVzdDtcblx0XHRcdGltZy5zZXRBdHRyaWJ1dGUoXCJzaXplc1wiLCBcIjlweFwiKTtcblxuXHRcdFx0aW1nLnNyY3NldCA9IHdpZHRoMSArIFwiIDF3LFwiICsgd2lkdGgyICsgXCIgOXdcIjtcblx0XHRcdGltZy5zcmMgPSB3aWR0aDE7XG5cdFx0fSkoKTtcblxuXHR9IGVsc2Uge1xuXHRcdGlzU3VwcG9ydFRlc3RSZWFkeSA9IHRydWU7XG5cdH1cblxuXHQvLyB1c2luZyBwZi5xc2EgaW5zdGVhZCBvZiBkb20gdHJhdmVyc2luZyBkb2VzIHNjYWxlIG11Y2ggYmV0dGVyLFxuXHQvLyBlc3BlY2lhbGx5IG9uIHNpdGVzIG1peGluZyByZXNwb25zaXZlIGFuZCBub24tcmVzcG9uc2l2ZSBpbWFnZXNcblx0cGYuc2VsU2hvcnQgPSBcInBpY3R1cmU+aW1nLGltZ1tzcmNzZXRdXCI7XG5cdHBmLnNlbCA9IHBmLnNlbFNob3J0O1xuXHRwZi5jZmcgPSBjZmc7XG5cblx0LyoqXG5cdCAqIFNob3J0Y3V0IHByb3BlcnR5IGZvciBgZGV2aWNlUGl4ZWxSYXRpb2AgKCBmb3IgZWFzeSBvdmVycmlkaW5nIGluIHRlc3RzIClcblx0ICovXG5cdHBmLkRQUiA9IChEUFIgIHx8IDEgKTtcblx0cGYudSA9IHVuaXRzO1xuXG5cdC8vIGNvbnRhaW5lciBvZiBzdXBwb3J0ZWQgbWltZSB0eXBlcyB0aGF0IG9uZSBtaWdodCBuZWVkIHRvIHF1YWxpZnkgYmVmb3JlIHVzaW5nXG5cdHBmLnR5cGVzID0gIHR5cGVzO1xuXG5cdHBmLnNldFNpemUgPSBub29wO1xuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSBhYnNvbHV0ZSBVUkxcblx0ICogQHBhcmFtIHNyY1xuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBhYnNvbHV0ZSBVUkxcblx0ICovXG5cblx0cGYubWFrZVVybCA9IG1lbW9pemUoZnVuY3Rpb24oc3JjKSB7XG5cdFx0YW5jaG9yLmhyZWYgPSBzcmM7XG5cdFx0cmV0dXJuIGFuY2hvci5ocmVmO1xuXHR9KTtcblxuXHQvKipcblx0ICogR2V0cyBhIERPTSBlbGVtZW50IG9yIGRvY3VtZW50IGFuZCBhIHNlbGN0b3IgYW5kIHJldHVybnMgdGhlIGZvdW5kIG1hdGNoZXNcblx0ICogQ2FuIGJlIGV4dGVuZGVkIHdpdGggalF1ZXJ5L1NpenpsZSBmb3IgSUU3IHN1cHBvcnRcblx0ICogQHBhcmFtIGNvbnRleHRcblx0ICogQHBhcmFtIHNlbFxuXHQgKiBAcmV0dXJucyB7Tm9kZUxpc3R8QXJyYXl9XG5cdCAqL1xuXHRwZi5xc2EgPSBmdW5jdGlvbihjb250ZXh0LCBzZWwpIHtcblx0XHRyZXR1cm4gKCBcInF1ZXJ5U2VsZWN0b3JcIiBpbiBjb250ZXh0ICkgPyBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSA6IFtdO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTaG9ydGN1dCBtZXRob2QgZm9yIG1hdGNoTWVkaWEgKCBmb3IgZWFzeSBvdmVycmlkaW5nIGluIHRlc3RzIClcblx0ICogd2V0aGVyIG5hdGl2ZSBvciBwZi5tTVEgaXMgdXNlZCB3aWxsIGJlIGRlY2lkZWQgbGF6eSBvbiBmaXJzdCBjYWxsXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cGYubWF0Y2hlc01lZGlhID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCB3aW5kb3cubWF0Y2hNZWRpYSAmJiAobWF0Y2hNZWRpYSggXCIobWluLXdpZHRoOiAwLjFlbSlcIiApIHx8IHt9KS5tYXRjaGVzICkge1xuXHRcdFx0cGYubWF0Y2hlc01lZGlhID0gZnVuY3Rpb24oIG1lZGlhICkge1xuXHRcdFx0XHRyZXR1cm4gIW1lZGlhIHx8ICggbWF0Y2hNZWRpYSggbWVkaWEgKS5tYXRjaGVzICk7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwZi5tYXRjaGVzTWVkaWEgPSBwZi5tTVE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBmLm1hdGNoZXNNZWRpYS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEEgc2ltcGxpZmllZCBtYXRjaE1lZGlhIGltcGxlbWVudGF0aW9uIGZvciBJRTggYW5kIElFOVxuXHQgKiBoYW5kbGVzIG9ubHkgbWluLXdpZHRoL21heC13aWR0aCB3aXRoIHB4IG9yIGVtIHZhbHVlc1xuXHQgKiBAcGFyYW0gbWVkaWFcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRwZi5tTVEgPSBmdW5jdGlvbiggbWVkaWEgKSB7XG5cdFx0cmV0dXJuIG1lZGlhID8gZXZhbENTUyhtZWRpYSkgOiB0cnVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBjYWxjdWxhdGVkIGxlbmd0aCBpbiBjc3MgcGl4ZWwgZnJvbSB0aGUgZ2l2ZW4gc291cmNlU2l6ZVZhbHVlXG5cdCAqIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy12YWx1ZXMtMy8jbGVuZ3RoLXZhbHVlXG5cdCAqIGludGVuZGVkIFNwZWMgbWlzbWF0Y2hlczpcblx0ICogKiBEb2VzIG5vdCBjaGVjayBmb3IgaW52YWxpZCB1c2Ugb2YgQ1NTIGZ1bmN0aW9uc1xuXHQgKiAqIERvZXMgaGFuZGxlIGEgY29tcHV0ZWQgbGVuZ3RoIG9mIDAgdGhlIHNhbWUgYXMgYSBuZWdhdGl2ZSBhbmQgdGhlcmVmb3JlIGludmFsaWQgdmFsdWVcblx0ICogQHBhcmFtIHNvdXJjZVNpemVWYWx1ZVxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxuXHQgKi9cblx0cGYuY2FsY0xlbmd0aCA9IGZ1bmN0aW9uKCBzb3VyY2VTaXplVmFsdWUgKSB7XG5cblx0XHR2YXIgdmFsdWUgPSBldmFsQ1NTKHNvdXJjZVNpemVWYWx1ZSwgdHJ1ZSkgfHwgZmFsc2U7XG5cdFx0aWYgKHZhbHVlIDwgMCkge1xuXHRcdFx0dmFsdWUgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRha2VzIGEgdHlwZSBzdHJpbmcgYW5kIGNoZWNrcyBpZiBpdHMgc3VwcG9ydGVkXG5cdCAqL1xuXG5cdHBmLnN1cHBvcnRzVHlwZSA9IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdHJldHVybiAoIHR5cGUgKSA/IHR5cGVzWyB0eXBlIF0gOiB0cnVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBQYXJzZXMgYSBzb3VyY2VTaXplIGludG8gbWVkaWFDb25kaXRpb24gKG1lZGlhKSBhbmQgc291cmNlU2l6ZVZhbHVlIChsZW5ndGgpXG5cdCAqIEBwYXJhbSBzb3VyY2VTaXplU3RyXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cGYucGFyc2VTaXplID0gbWVtb2l6ZShmdW5jdGlvbiggc291cmNlU2l6ZVN0ciApIHtcblx0XHR2YXIgbWF0Y2ggPSAoIHNvdXJjZVNpemVTdHIgfHwgXCJcIiApLm1hdGNoKHJlZ1NpemUpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRtZWRpYTogbWF0Y2ggJiYgbWF0Y2hbMV0sXG5cdFx0XHRsZW5ndGg6IG1hdGNoICYmIG1hdGNoWzJdXG5cdFx0fTtcblx0fSk7XG5cblx0cGYucGFyc2VTZXQgPSBmdW5jdGlvbiggc2V0ICkge1xuXHRcdGlmICggIXNldC5jYW5kcyApIHtcblx0XHRcdHNldC5jYW5kcyA9IHBhcnNlU3Jjc2V0KHNldC5zcmNzZXQsIHNldCk7XG5cdFx0fVxuXHRcdHJldHVybiBzZXQuY2FuZHM7XG5cdH07XG5cblx0LyoqXG5cdCAqIHJldHVybnMgMWVtIGluIGNzcyBweCBmb3IgaHRtbC9ib2R5IGRlZmF1bHQgc2l6ZVxuXHQgKiBmdW5jdGlvbiB0YWtlbiBmcm9tIHJlc3BvbmRqc1xuXHQgKiBAcmV0dXJucyB7KnxudW1iZXJ9XG5cdCAqL1xuXHRwZi5nZXRFbVZhbHVlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGJvZHk7XG5cdFx0aWYgKCAhZW1pbnB4ICYmIChib2R5ID0gZG9jdW1lbnQuYm9keSkgKSB7XG5cdFx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLFxuXHRcdFx0XHRvcmlnaW5hbEhUTUxDU1MgPSBkb2NFbGVtLnN0eWxlLmNzc1RleHQsXG5cdFx0XHRcdG9yaWdpbmFsQm9keUNTUyA9IGJvZHkuc3R5bGUuY3NzVGV4dDtcblxuXHRcdFx0ZGl2LnN0eWxlLmNzc1RleHQgPSBiYXNlU3R5bGU7XG5cblx0XHRcdC8vIDFlbSBpbiBhIG1lZGlhIHF1ZXJ5IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZGVmYXVsdCBmb250IHNpemUgb2YgdGhlIGJyb3dzZXJcblx0XHRcdC8vIHJlc2V0IGRvY0VsZW0gYW5kIGJvZHkgdG8gZW5zdXJlIHRoZSBjb3JyZWN0IHZhbHVlIGlzIHJldHVybmVkXG5cdFx0XHRkb2NFbGVtLnN0eWxlLmNzc1RleHQgPSBmc0Nzcztcblx0XHRcdGJvZHkuc3R5bGUuY3NzVGV4dCA9IGZzQ3NzO1xuXG5cdFx0XHRib2R5LmFwcGVuZENoaWxkKCBkaXYgKTtcblx0XHRcdGVtaW5weCA9IGRpdi5vZmZzZXRXaWR0aDtcblx0XHRcdGJvZHkucmVtb3ZlQ2hpbGQoIGRpdiApO1xuXG5cdFx0XHQvL2Fsc28gdXBkYXRlIGVtaW5weCBiZWZvcmUgcmV0dXJuaW5nXG5cdFx0XHRlbWlucHggPSBwYXJzZUZsb2F0KCBlbWlucHgsIDEwICk7XG5cblx0XHRcdC8vIHJlc3RvcmUgdGhlIG9yaWdpbmFsIHZhbHVlc1xuXHRcdFx0ZG9jRWxlbS5zdHlsZS5jc3NUZXh0ID0gb3JpZ2luYWxIVE1MQ1NTO1xuXHRcdFx0Ym9keS5zdHlsZS5jc3NUZXh0ID0gb3JpZ2luYWxCb2R5Q1NTO1xuXG5cdFx0fVxuXHRcdHJldHVybiBlbWlucHggfHwgMTY7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRha2VzIGEgc3RyaW5nIG9mIHNpemVzIGFuZCByZXR1cm5zIHRoZSB3aWR0aCBpbiBwaXhlbHMgYXMgYSBudW1iZXJcblx0ICovXG5cdHBmLmNhbGNMaXN0TGVuZ3RoID0gZnVuY3Rpb24oIHNvdXJjZVNpemVMaXN0U3RyICkge1xuXHRcdC8vIFNwbGl0IHVwIHNvdXJjZSBzaXplIGxpc3QsIGllICggbWF4LXdpZHRoOiAzMGVtICkgMTAwJSwgKCBtYXgtd2lkdGg6IDUwZW0gKSA1MCUsIDMzJVxuXHRcdC8vXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICBvciAobWluLXdpZHRoOjMwZW0pIGNhbGMoMzAlIC0gMTVweClcblx0XHRpZiAoICEoc291cmNlU2l6ZUxpc3RTdHIgaW4gc2l6ZUxlbmd0aENhY2hlKSB8fCBjZmcudVQgKSB7XG5cdFx0XHR2YXIgd2lubmluZ0xlbmd0aCA9IHBmLmNhbGNMZW5ndGgoIHBhcnNlU2l6ZXMoIHNvdXJjZVNpemVMaXN0U3RyICkgKTtcblxuXHRcdFx0c2l6ZUxlbmd0aENhY2hlWyBzb3VyY2VTaXplTGlzdFN0ciBdID0gIXdpbm5pbmdMZW5ndGggPyB1bml0cy53aWR0aCA6IHdpbm5pbmdMZW5ndGg7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNpemVMZW5ndGhDYWNoZVsgc291cmNlU2l6ZUxpc3RTdHIgXTtcblx0fTtcblxuXHQvKipcblx0ICogVGFrZXMgYSBjYW5kaWRhdGUgb2JqZWN0IHdpdGggYSBzcmNzZXQgcHJvcGVydHkgaW4gdGhlIGZvcm0gb2YgdXJsL1xuXHQgKiBleC4gXCJpbWFnZXMvcGljLW1lZGl1bS5wbmcgMXgsIGltYWdlcy9waWMtbWVkaXVtLTJ4LnBuZyAyeFwiIG9yXG5cdCAqICAgICBcImltYWdlcy9waWMtbWVkaXVtLnBuZyA0MDB3LCBpbWFnZXMvcGljLW1lZGl1bS0yeC5wbmcgODAwd1wiIG9yXG5cdCAqICAgICBcImltYWdlcy9waWMtc21hbGwucG5nXCJcblx0ICogR2V0IGFuIGFycmF5IG9mIGltYWdlIGNhbmRpZGF0ZXMgaW4gdGhlIGZvcm0gb2Zcblx0ICogICAgICB7dXJsOiBcIi9mb28vYmFyLnBuZ1wiLCByZXNvbHV0aW9uOiAxfVxuXHQgKiB3aGVyZSByZXNvbHV0aW9uIGlzIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy12YWx1ZXMtMy8jcmVzb2x1dGlvbi12YWx1ZVxuXHQgKiBJZiBzaXplcyBpcyBzcGVjaWZpZWQsIHJlcyBpcyBjYWxjdWxhdGVkXG5cdCAqL1xuXHRwZi5zZXRSZXMgPSBmdW5jdGlvbiggc2V0ICkge1xuXHRcdHZhciBjYW5kaWRhdGVzO1xuXHRcdGlmICggc2V0ICkge1xuXG5cdFx0XHRjYW5kaWRhdGVzID0gcGYucGFyc2VTZXQoIHNldCApO1xuXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGxlbiA9IGNhbmRpZGF0ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdHNldFJlc29sdXRpb24oIGNhbmRpZGF0ZXNbIGkgXSwgc2V0LnNpemVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGVzO1xuXHR9O1xuXG5cdHBmLnNldFJlcy5yZXMgPSBzZXRSZXNvbHV0aW9uO1xuXG5cdHBmLmFwcGx5U2V0Q2FuZGlkYXRlID0gZnVuY3Rpb24oIGNhbmRpZGF0ZXMsIGltZyApIHtcblx0XHRpZiAoICFjYW5kaWRhdGVzLmxlbmd0aCApIHtyZXR1cm47fVxuXHRcdHZhciBjYW5kaWRhdGUsXG5cdFx0XHRpLFxuXHRcdFx0aixcblx0XHRcdGxlbmd0aCxcblx0XHRcdGJlc3RDYW5kaWRhdGUsXG5cdFx0XHRjdXJTcmMsXG5cdFx0XHRjdXJDYW4sXG5cdFx0XHRjYW5kaWRhdGVTcmMsXG5cdFx0XHRhYm9ydEN1clNyYztcblxuXHRcdHZhciBpbWFnZURhdGEgPSBpbWdbIHBmLm5zIF07XG5cdFx0dmFyIGRwciA9IHBmLkRQUjtcblxuXHRcdGN1clNyYyA9IGltYWdlRGF0YS5jdXJTcmMgfHwgaW1nW2N1clNyY1Byb3BdO1xuXG5cdFx0Y3VyQ2FuID0gaW1hZ2VEYXRhLmN1ckNhbiB8fCBzZXRTcmNUb0N1cihpbWcsIGN1clNyYywgY2FuZGlkYXRlc1swXS5zZXQpO1xuXG5cdFx0Ly8gaWYgd2UgaGF2ZSBhIGN1cnJlbnQgc291cmNlLCB3ZSBtaWdodCBlaXRoZXIgYmVjb21lIGxhenkgb3IgZ2l2ZSB0aGlzIHNvdXJjZSBzb21lIGFkdmFudGFnZVxuXHRcdGlmICggY3VyQ2FuICYmIGN1ckNhbi5zZXQgPT09IGNhbmRpZGF0ZXNbIDAgXS5zZXQgKSB7XG5cblx0XHRcdC8vIGlmIGJyb3dzZXIgY2FuIGFib3J0IGltYWdlIHJlcXVlc3QgYW5kIHRoZSBpbWFnZSBoYXMgYSBoaWdoZXIgcGl4ZWwgZGVuc2l0eSB0aGFuIG5lZWRlZFxuXHRcdFx0Ly8gYW5kIHRoaXMgaW1hZ2UgaXNuJ3QgZG93bmxvYWRlZCB5ZXQsIHdlIHNraXAgbmV4dCBwYXJ0IGFuZCB0cnkgdG8gc2F2ZSBiYW5kd2lkdGhcblx0XHRcdGFib3J0Q3VyU3JjID0gKHN1cHBvcnRBYm9ydCAmJiAhaW1nLmNvbXBsZXRlICYmIGN1ckNhbi5yZXMgLSAwLjEgPiBkcHIpO1xuXG5cdFx0XHRpZiAoICFhYm9ydEN1clNyYyApIHtcblx0XHRcdFx0Y3VyQ2FuLmNhY2hlZCA9IHRydWU7XG5cblx0XHRcdFx0Ly8gaWYgY3VycmVudCBjYW5kaWRhdGUgaXMgXCJiZXN0XCIsIFwiYmV0dGVyXCIgb3IgXCJva2F5XCIsXG5cdFx0XHRcdC8vIHNldCBpdCB0byBiZXN0Q2FuZGlkYXRlXG5cdFx0XHRcdGlmICggY3VyQ2FuLnJlcyA+PSBkcHIgKSB7XG5cdFx0XHRcdFx0YmVzdENhbmRpZGF0ZSA9IGN1ckNhbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggIWJlc3RDYW5kaWRhdGUgKSB7XG5cblx0XHRcdGNhbmRpZGF0ZXMuc29ydCggYXNjZW5kaW5nU29ydCApO1xuXG5cdFx0XHRsZW5ndGggPSBjYW5kaWRhdGVzLmxlbmd0aDtcblx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBsZW5ndGggLSAxIF07XG5cblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbIGkgXTtcblx0XHRcdFx0aWYgKCBjYW5kaWRhdGUucmVzID49IGRwciApIHtcblx0XHRcdFx0XHRqID0gaSAtIDE7XG5cblx0XHRcdFx0XHQvLyB3ZSBoYXZlIGZvdW5kIHRoZSBwZXJmZWN0IGNhbmRpZGF0ZSxcblx0XHRcdFx0XHQvLyBidXQgbGV0J3MgaW1wcm92ZSB0aGlzIGEgbGl0dGxlIGJpdCB3aXRoIHNvbWUgYXNzdW1wdGlvbnMgOy0pXG5cdFx0XHRcdFx0aWYgKGNhbmRpZGF0ZXNbIGogXSAmJlxuXHRcdFx0XHRcdFx0KGFib3J0Q3VyU3JjIHx8IGN1clNyYyAhPT0gcGYubWFrZVVybCggY2FuZGlkYXRlLnVybCApKSAmJlxuXHRcdFx0XHRcdFx0Y2hvb3NlTG93UmVzKGNhbmRpZGF0ZXNbIGogXS5yZXMsIGNhbmRpZGF0ZS5yZXMsIGRwciwgY2FuZGlkYXRlc1sgaiBdLmNhY2hlZCkpIHtcblxuXHRcdFx0XHRcdFx0YmVzdENhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbIGogXTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRiZXN0Q2FuZGlkYXRlID0gY2FuZGlkYXRlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggYmVzdENhbmRpZGF0ZSApIHtcblxuXHRcdFx0Y2FuZGlkYXRlU3JjID0gcGYubWFrZVVybCggYmVzdENhbmRpZGF0ZS51cmwgKTtcblxuXHRcdFx0aW1hZ2VEYXRhLmN1clNyYyA9IGNhbmRpZGF0ZVNyYztcblx0XHRcdGltYWdlRGF0YS5jdXJDYW4gPSBiZXN0Q2FuZGlkYXRlO1xuXG5cdFx0XHRpZiAoIGNhbmRpZGF0ZVNyYyAhPT0gY3VyU3JjICkge1xuXHRcdFx0XHRwZi5zZXRTcmMoIGltZywgYmVzdENhbmRpZGF0ZSApO1xuXHRcdFx0fVxuXHRcdFx0cGYuc2V0U2l6ZSggaW1nICk7XG5cdFx0fVxuXHR9O1xuXG5cdHBmLnNldFNyYyA9IGZ1bmN0aW9uKCBpbWcsIGJlc3RDYW5kaWRhdGUgKSB7XG5cdFx0dmFyIG9yaWdXaWR0aDtcblx0XHRpbWcuc3JjID0gYmVzdENhbmRpZGF0ZS51cmw7XG5cblx0XHQvLyBhbHRob3VnaCB0aGlzIGlzIGEgc3BlY2lmaWMgU2FmYXJpIGlzc3VlLCB3ZSBkb24ndCB3YW50IHRvIHRha2UgdG9vIG11Y2ggZGlmZmVyZW50IGNvZGUgcGF0aHNcblx0XHRpZiAoIGJlc3RDYW5kaWRhdGUuc2V0LnR5cGUgPT09IFwiaW1hZ2Uvc3ZnK3htbFwiICkge1xuXHRcdFx0b3JpZ1dpZHRoID0gaW1nLnN0eWxlLndpZHRoO1xuXHRcdFx0aW1nLnN0eWxlLndpZHRoID0gKGltZy5vZmZzZXRXaWR0aCArIDEpICsgXCJweFwiO1xuXG5cdFx0XHQvLyBuZXh0IGxpbmUgb25seSBzaG91bGQgdHJpZ2dlciBhIHJlcGFpbnRcblx0XHRcdC8vIGlmLi4uIGlzIG9ubHkgZG9uZSB0byB0cmljayBkZWFkIGNvZGUgcmVtb3ZhbFxuXHRcdFx0aWYgKCBpbWcub2Zmc2V0V2lkdGggKyAxICkge1xuXHRcdFx0XHRpbWcuc3R5bGUud2lkdGggPSBvcmlnV2lkdGg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHBmLmdldFNldCA9IGZ1bmN0aW9uKCBpbWcgKSB7XG5cdFx0dmFyIGksIHNldCwgc3VwcG9ydHNUeXBlO1xuXHRcdHZhciBtYXRjaCA9IGZhbHNlO1xuXHRcdHZhciBzZXRzID0gaW1nIFsgcGYubnMgXS5zZXRzO1xuXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBzZXRzLmxlbmd0aCAmJiAhbWF0Y2g7IGkrKyApIHtcblx0XHRcdHNldCA9IHNldHNbaV07XG5cblx0XHRcdGlmICggIXNldC5zcmNzZXQgfHwgIXBmLm1hdGNoZXNNZWRpYSggc2V0Lm1lZGlhICkgfHwgIShzdXBwb3J0c1R5cGUgPSBwZi5zdXBwb3J0c1R5cGUoIHNldC50eXBlICkpICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdXBwb3J0c1R5cGUgPT09IFwicGVuZGluZ1wiICkge1xuXHRcdFx0XHRzZXQgPSBzdXBwb3J0c1R5cGU7XG5cdFx0XHR9XG5cblx0XHRcdG1hdGNoID0gc2V0O1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hdGNoO1xuXHR9O1xuXG5cdHBmLnBhcnNlU2V0cyA9IGZ1bmN0aW9uKCBlbGVtZW50LCBwYXJlbnQsIG9wdGlvbnMgKSB7XG5cdFx0dmFyIHNyY3NldEF0dHJpYnV0ZSwgaW1hZ2VTZXQsIGlzV0Rlc2NyaXBvciwgc3Jjc2V0UGFyc2VkO1xuXG5cdFx0dmFyIGhhc1BpY3R1cmUgPSBwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiUElDVFVSRVwiO1xuXHRcdHZhciBpbWFnZURhdGEgPSBlbGVtZW50WyBwZi5ucyBdO1xuXG5cdFx0aWYgKCBpbWFnZURhdGEuc3JjID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5zcmMgKSB7XG5cdFx0XHRpbWFnZURhdGEuc3JjID0gZ2V0SW1nQXR0ci5jYWxsKCBlbGVtZW50LCBcInNyY1wiICk7XG5cdFx0XHRpZiAoIGltYWdlRGF0YS5zcmMgKSB7XG5cdFx0XHRcdHNldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3JjQXR0ciwgaW1hZ2VEYXRhLnNyYyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVtb3ZlSW1nQXR0ci5jYWxsKCBlbGVtZW50LCBzcmNBdHRyICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBpbWFnZURhdGEuc3Jjc2V0ID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5zcmNzZXQgfHwgIXBmLnN1cFNyY3NldCB8fCBlbGVtZW50LnNyY3NldCApIHtcblx0XHRcdHNyY3NldEF0dHJpYnV0ZSA9IGdldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgXCJzcmNzZXRcIiApO1xuXHRcdFx0aW1hZ2VEYXRhLnNyY3NldCA9IHNyY3NldEF0dHJpYnV0ZTtcblx0XHRcdHNyY3NldFBhcnNlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aW1hZ2VEYXRhLnNldHMgPSBbXTtcblxuXHRcdGlmICggaGFzUGljdHVyZSApIHtcblx0XHRcdGltYWdlRGF0YS5waWMgPSB0cnVlO1xuXHRcdFx0Z2V0QWxsU291cmNlRWxlbWVudHMoIHBhcmVudCwgaW1hZ2VEYXRhLnNldHMgKTtcblx0XHR9XG5cblx0XHRpZiAoIGltYWdlRGF0YS5zcmNzZXQgKSB7XG5cdFx0XHRpbWFnZVNldCA9IHtcblx0XHRcdFx0c3Jjc2V0OiBpbWFnZURhdGEuc3Jjc2V0LFxuXHRcdFx0XHRzaXplczogZ2V0SW1nQXR0ci5jYWxsKCBlbGVtZW50LCBcInNpemVzXCIgKVxuXHRcdFx0fTtcblxuXHRcdFx0aW1hZ2VEYXRhLnNldHMucHVzaCggaW1hZ2VTZXQgKTtcblxuXHRcdFx0aXNXRGVzY3JpcG9yID0gKGFsd2F5c0NoZWNrV0Rlc2NyaXB0b3IgfHwgaW1hZ2VEYXRhLnNyYykgJiYgcmVnV0Rlc2MudGVzdChpbWFnZURhdGEuc3Jjc2V0IHx8IFwiXCIpO1xuXG5cdFx0XHQvLyBhZGQgbm9ybWFsIHNyYyBhcyBjYW5kaWRhdGUsIGlmIHNvdXJjZSBoYXMgbm8gdyBkZXNjcmlwdG9yXG5cdFx0XHRpZiAoICFpc1dEZXNjcmlwb3IgJiYgaW1hZ2VEYXRhLnNyYyAmJiAhZ2V0Q2FuZGlkYXRlRm9yU3JjKGltYWdlRGF0YS5zcmMsIGltYWdlU2V0KSAmJiAhaW1hZ2VTZXQuaGFzMXggKSB7XG5cdFx0XHRcdGltYWdlU2V0LnNyY3NldCArPSBcIiwgXCIgKyBpbWFnZURhdGEuc3JjO1xuXHRcdFx0XHRpbWFnZVNldC5jYW5kcy5wdXNoKHtcblx0XHRcdFx0XHR1cmw6IGltYWdlRGF0YS5zcmMsXG5cdFx0XHRcdFx0ZDogMSxcblx0XHRcdFx0XHRzZXQ6IGltYWdlU2V0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIGlmICggaW1hZ2VEYXRhLnNyYyApIHtcblx0XHRcdGltYWdlRGF0YS5zZXRzLnB1c2goIHtcblx0XHRcdFx0c3Jjc2V0OiBpbWFnZURhdGEuc3JjLFxuXHRcdFx0XHRzaXplczogbnVsbFxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGltYWdlRGF0YS5jdXJDYW4gPSBudWxsO1xuXHRcdGltYWdlRGF0YS5jdXJTcmMgPSB1bmRlZmluZWQ7XG5cblx0XHQvLyBpZiBpbWcgaGFzIHBpY3R1cmUgb3IgdGhlIHNyY3NldCB3YXMgcmVtb3ZlZCBvciBoYXMgYSBzcmNzZXQgYW5kIGRvZXMgbm90IHN1cHBvcnQgc3Jjc2V0IGF0IGFsbFxuXHRcdC8vIG9yIGhhcyBhIHcgZGVzY3JpcHRvciAoYW5kIGRvZXMgbm90IHN1cHBvcnQgc2l6ZXMpIHNldCBzdXBwb3J0IHRvIGZhbHNlIHRvIGV2YWx1YXRlXG5cdFx0aW1hZ2VEYXRhLnN1cHBvcnRlZCA9ICEoIGhhc1BpY3R1cmUgfHwgKCBpbWFnZVNldCAmJiAhcGYuc3VwU3Jjc2V0ICkgfHwgKGlzV0Rlc2NyaXBvciAmJiAhcGYuc3VwU2l6ZXMpICk7XG5cblx0XHRpZiAoIHNyY3NldFBhcnNlZCAmJiBwZi5zdXBTcmNzZXQgJiYgIWltYWdlRGF0YS5zdXBwb3J0ZWQgKSB7XG5cdFx0XHRpZiAoIHNyY3NldEF0dHJpYnV0ZSApIHtcblx0XHRcdFx0c2V0SW1nQXR0ci5jYWxsKCBlbGVtZW50LCBzcmNzZXRBdHRyLCBzcmNzZXRBdHRyaWJ1dGUgKTtcblx0XHRcdFx0ZWxlbWVudC5zcmNzZXQgPSBcIlwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVtb3ZlSW1nQXR0ci5jYWxsKCBlbGVtZW50LCBzcmNzZXRBdHRyICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGltYWdlRGF0YS5zdXBwb3J0ZWQgJiYgIWltYWdlRGF0YS5zcmNzZXQgJiYgKCghaW1hZ2VEYXRhLnNyYyAmJiBlbGVtZW50LnNyYykgfHwgIGVsZW1lbnQuc3JjICE9PSBwZi5tYWtlVXJsKGltYWdlRGF0YS5zcmMpKSkge1xuXHRcdFx0aWYgKGltYWdlRGF0YS5zcmMgPT09IG51bGwpIHtcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJzcmNcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LnNyYyA9IGltYWdlRGF0YS5zcmM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aW1hZ2VEYXRhLnBhcnNlZCA9IHRydWU7XG5cdH07XG5cblx0cGYuZmlsbEltZyA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcblx0XHR2YXIgaW1hZ2VEYXRhO1xuXHRcdHZhciBleHRyZW1lID0gb3B0aW9ucy5yZXNlbGVjdCB8fCBvcHRpb25zLnJlZXZhbHVhdGU7XG5cblx0XHQvLyBleHBhbmRvIGZvciBjYWNoaW5nIGRhdGEgb24gdGhlIGltZ1xuXHRcdGlmICggIWVsZW1lbnRbIHBmLm5zIF0gKSB7XG5cdFx0XHRlbGVtZW50WyBwZi5ucyBdID0ge307XG5cdFx0fVxuXG5cdFx0aW1hZ2VEYXRhID0gZWxlbWVudFsgcGYubnMgXTtcblxuXHRcdC8vIGlmIHRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gZXZhbHVhdGVkLCBza2lwIGl0XG5cdFx0Ly8gdW5sZXNzIGBvcHRpb25zLnJlZXZhbHVhdGVgIGlzIHNldCB0byB0cnVlICggdGhpcywgZm9yIGV4YW1wbGUsXG5cdFx0Ly8gaXMgc2V0IHRvIHRydWUgd2hlbiBydW5uaW5nIGBwaWN0dXJlZmlsbGAgb24gYHJlc2l6ZWAgKS5cblx0XHRpZiAoICFleHRyZW1lICYmIGltYWdlRGF0YS5ldmFsZWQgPT09IGV2YWxJZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoICFpbWFnZURhdGEucGFyc2VkIHx8IG9wdGlvbnMucmVldmFsdWF0ZSApIHtcblx0XHRcdHBmLnBhcnNlU2V0cyggZWxlbWVudCwgZWxlbWVudC5wYXJlbnROb2RlLCBvcHRpb25zICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhaW1hZ2VEYXRhLnN1cHBvcnRlZCApIHtcblx0XHRcdGFwcGx5QmVzdENhbmRpZGF0ZSggZWxlbWVudCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbWFnZURhdGEuZXZhbGVkID0gZXZhbElkO1xuXHRcdH1cblx0fTtcblxuXHRwZi5zZXR1cFJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggIWFscmVhZHlSdW4gfHwgaXNWd0RpcnR5IHx8IChEUFIgIT09IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKSApIHtcblx0XHRcdHVwZGF0ZU1ldHJpY3MoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gSWYgcGljdHVyZSBpcyBzdXBwb3J0ZWQsIHdlbGwsIHRoYXQncyBhd2Vzb21lLlxuXHRpZiAoIHBmLnN1cFBpY3R1cmUgKSB7XG5cdFx0cGljdHVyZWZpbGwgPSBub29wO1xuXHRcdHBmLmZpbGxJbWcgPSBub29wO1xuXHR9IGVsc2Uge1xuXG5cdFx0IC8vIFNldCB1cCBwaWN0dXJlIHBvbHlmaWxsIGJ5IHBvbGxpbmcgdGhlIGRvY3VtZW50XG5cdFx0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlzRG9tUmVhZHk7XG5cdFx0XHR2YXIgcmVnUmVhZHkgPSB3aW5kb3cuYXR0YWNoRXZlbnQgPyAvZCR8XmMvIDogL2QkfF5jfF5pLztcblxuXHRcdFx0dmFyIHJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGUgfHwgXCJcIjtcblxuXHRcdFx0XHR0aW1lcklkID0gc2V0VGltZW91dChydW4sIHJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiID8gMjAwIDogIDk5OSk7XG5cdFx0XHRcdGlmICggZG9jdW1lbnQuYm9keSApIHtcblx0XHRcdFx0XHRwZi5maWxsSW1ncygpO1xuXHRcdFx0XHRcdGlzRG9tUmVhZHkgPSBpc0RvbVJlYWR5IHx8IHJlZ1JlYWR5LnRlc3QocmVhZHlTdGF0ZSk7XG5cdFx0XHRcdFx0aWYgKCBpc0RvbVJlYWR5ICkge1xuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lcklkICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHZhciB0aW1lcklkID0gc2V0VGltZW91dChydW4sIGRvY3VtZW50LmJvZHkgPyA5IDogOTkpO1xuXG5cdFx0XHQvLyBBbHNvIGF0dGFjaCBwaWN0dXJlZmlsbCBvbiByZXNpemUgYW5kIHJlYWR5c3RhdGVjaGFuZ2Vcblx0XHRcdC8vIGh0dHA6Ly9tb2Rlcm5qYXZhc2NyaXB0LmJsb2dzcG90LmNvbS8yMDEzLzA4L2J1aWxkaW5nLWJldHRlci1kZWJvdW5jZS5odG1sXG5cdFx0XHR2YXIgZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0KSB7XG5cdFx0XHRcdHZhciB0aW1lb3V0LCB0aW1lc3RhbXA7XG5cdFx0XHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBsYXN0ID0gKG5ldyBEYXRlKCkpIC0gdGltZXN0YW1wO1xuXG5cdFx0XHRcdFx0aWYgKGxhc3QgPCB3YWl0KSB7XG5cdFx0XHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdFx0XHRcdGZ1bmMoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHRpbWVzdGFtcCA9IG5ldyBEYXRlKCk7XG5cblx0XHRcdFx0XHRpZiAoIXRpbWVvdXQpIHtcblx0XHRcdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdFx0dmFyIGxhc3RDbGllbnRXaWR0aCA9IGRvY0VsZW0uY2xpZW50SGVpZ2h0O1xuXHRcdFx0dmFyIG9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlzVndEaXJ0eSA9IE1hdGgubWF4KHdpbmRvdy5pbm5lcldpZHRoIHx8IDAsIGRvY0VsZW0uY2xpZW50V2lkdGgpICE9PSB1bml0cy53aWR0aCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCAhPT0gbGFzdENsaWVudFdpZHRoO1xuXHRcdFx0XHRsYXN0Q2xpZW50V2lkdGggPSBkb2NFbGVtLmNsaWVudEhlaWdodDtcblx0XHRcdFx0aWYgKCBpc1Z3RGlydHkgKSB7XG5cdFx0XHRcdFx0cGYuZmlsbEltZ3MoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0b24oIHdpbmRvdywgXCJyZXNpemVcIiwgZGVib3VuY2Uob25SZXNpemUsIDk5ICkgKTtcblx0XHRcdG9uKCBkb2N1bWVudCwgXCJyZWFkeXN0YXRlY2hhbmdlXCIsIHJ1biApO1xuXHRcdH0pKCk7XG5cdH1cblxuXHRwZi5waWN0dXJlZmlsbCA9IHBpY3R1cmVmaWxsO1xuXHQvL3VzZSB0aGlzIGludGVybmFsbHkgZm9yIGVhc3kgbW9ua2V5IHBhdGNoaW5nL3BlcmZvcm1hbmNlIHRlc3Rpbmdcblx0cGYuZmlsbEltZ3MgPSBwaWN0dXJlZmlsbDtcblx0cGYudGVhcmRvd25SdW4gPSBub29wO1xuXG5cdC8qIGV4cG9zZSBtZXRob2RzIGZvciB0ZXN0aW5nICovXG5cdHBpY3R1cmVmaWxsLl8gPSBwZjtcblxuXHR3aW5kb3cucGljdHVyZWZpbGxDRkcgPSB7XG5cdFx0cGY6IHBmLFxuXHRcdHB1c2g6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdHZhciBuYW1lID0gYXJncy5zaGlmdCgpO1xuXHRcdFx0aWYgKHR5cGVvZiBwZltuYW1lXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHBmW25hbWVdLmFwcGx5KHBmLCBhcmdzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNmZ1tuYW1lXSA9IGFyZ3NbMF07XG5cdFx0XHRcdGlmIChhbHJlYWR5UnVuKSB7XG5cdFx0XHRcdFx0cGYuZmlsbEltZ3MoIHsgcmVzZWxlY3Q6IHRydWUgfSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHdoaWxlIChzZXRPcHRpb25zICYmIHNldE9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0d2luZG93LnBpY3R1cmVmaWxsQ0ZHLnB1c2goc2V0T3B0aW9ucy5zaGlmdCgpKTtcblx0fVxuXG5cdC8qIGV4cG9zZSBwaWN0dXJlZmlsbCAqL1xuXHR3aW5kb3cucGljdHVyZWZpbGwgPSBwaWN0dXJlZmlsbDtcblxuXHQvKiBleHBvc2UgcGljdHVyZWZpbGwgKi9cblx0aWYgKCB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIiApIHtcblx0XHQvLyBDb21tb25KUywganVzdCBleHBvcnRcblx0XHRtb2R1bGUuZXhwb3J0cyA9IHBpY3R1cmVmaWxsO1xuXHR9IGVsc2UgaWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblx0XHQvLyBBTUQgc3VwcG9ydFxuXHRcdGRlZmluZSggXCJwaWN0dXJlZmlsbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHBpY3R1cmVmaWxsOyB9ICk7XG5cdH1cblxuXHQvLyBJRTggZXZhbHMgdGhpcyBzeW5jLCBzbyBpdCBtdXN0IGJlIHRoZSBsYXN0IHRoaW5nIHdlIGRvXG5cdGlmICggIXBmLnN1cFBpY3R1cmUgKSB7XG5cdFx0dHlwZXNbIFwiaW1hZ2Uvd2VicFwiIF0gPSBkZXRlY3RUeXBlU3VwcG9ydChcImltYWdlL3dlYnBcIiwgXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSa29BQUFCWFJVSlFWbEE0V0FvQUFBQVFBQUFBQUFBQUFBQUFRVXhRU0F3QUFBQUJCeEFSL1E5RVJQOERBQUJXVURnZ0dBQUFBREFCQUowQktnRUFBUUFEQURRbHBBQURjQUQrKy8xUUFBPT1cIiApO1xuXHR9XG5cbn0gKSggd2luZG93LCBkb2N1bWVudCApO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIi8qKlxuICogWmVuc2Nyb2xsIDQuMC4yXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemVuZ2Fib3IvemVuc2Nyb2xsL1xuICpcbiAqIENvcHlyaWdodCAyMDE14oCTMjAxOCBHYWJvciBMZW5hcmRcbiAqXG4gKiBUaGlzIGlzIGZyZWUgYW5kIHVuZW5jdW1iZXJlZCBzb2Z0d2FyZSByZWxlYXNlZCBpbnRvIHRoZSBwdWJsaWMgZG9tYWluLlxuICogXG4gKiBBbnlvbmUgaXMgZnJlZSB0byBjb3B5LCBtb2RpZnksIHB1Ymxpc2gsIHVzZSwgY29tcGlsZSwgc2VsbCwgb3JcbiAqIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSwgZWl0aGVyIGluIHNvdXJjZSBjb2RlIGZvcm0gb3IgYXMgYSBjb21waWxlZFxuICogYmluYXJ5LCBmb3IgYW55IHB1cnBvc2UsIGNvbW1lcmNpYWwgb3Igbm9uLWNvbW1lcmNpYWwsIGFuZCBieSBhbnlcbiAqIG1lYW5zLlxuICogXG4gKiBJbiBqdXJpc2RpY3Rpb25zIHRoYXQgcmVjb2duaXplIGNvcHlyaWdodCBsYXdzLCB0aGUgYXV0aG9yIG9yIGF1dGhvcnNcbiAqIG9mIHRoaXMgc29mdHdhcmUgZGVkaWNhdGUgYW55IGFuZCBhbGwgY29weXJpZ2h0IGludGVyZXN0IGluIHRoZVxuICogc29mdHdhcmUgdG8gdGhlIHB1YmxpYyBkb21haW4uIFdlIG1ha2UgdGhpcyBkZWRpY2F0aW9uIGZvciB0aGUgYmVuZWZpdFxuICogb2YgdGhlIHB1YmxpYyBhdCBsYXJnZSBhbmQgdG8gdGhlIGRldHJpbWVudCBvZiBvdXIgaGVpcnMgYW5kXG4gKiBzdWNjZXNzb3JzLiBXZSBpbnRlbmQgdGhpcyBkZWRpY2F0aW9uIHRvIGJlIGFuIG92ZXJ0IGFjdCBvZlxuICogcmVsaW5xdWlzaG1lbnQgaW4gcGVycGV0dWl0eSBvZiBhbGwgcHJlc2VudCBhbmQgZnV0dXJlIHJpZ2h0cyB0byB0aGlzXG4gKiBzb2Z0d2FyZSB1bmRlciBjb3B5cmlnaHQgbGF3LlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXG4gKiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUlxuICogT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsXG4gKiBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSByZWZlciB0byA8aHR0cDovL3VubGljZW5zZS5vcmc+XG4gKiBcbiAqL1xuXG4vKmpzaGludCBkZXZlbDp0cnVlLCBhc2k6dHJ1ZSAqL1xuXG4vKmdsb2JhbCBkZWZpbmUsIG1vZHVsZSAqL1xuXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkoKSlcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcblx0fSBlbHNlIHtcblx0XHQoZnVuY3Rpb24gaW5zdGFsbCgpIHtcblx0XHRcdC8vIFRvIG1ha2Ugc3VyZSBaZW5zY3JvbGwgY2FuIGJlIHJlZmVyZW5jZWQgZnJvbSB0aGUgaGVhZGVyLCBiZWZvcmUgYGJvZHlgIGlzIGF2YWlsYWJsZVxuXHRcdFx0aWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcblx0XHRcdFx0cm9vdC56ZW5zY3JvbGwgPSBmYWN0b3J5KClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHJldHJ5IDltcyBsYXRlclxuXHRcdFx0XHRzZXRUaW1lb3V0KGluc3RhbGwsIDkpXG5cdFx0XHR9XG5cdFx0fSkoKVxuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblx0XCJ1c2Ugc3RyaWN0XCJcblxuXG5cdC8vIERldGVjdCBpZiB0aGUgYnJvd3NlciBhbHJlYWR5IHN1cHBvcnRzIG5hdGl2ZSBzbW9vdGggc2Nyb2xsaW5nIChlLmcuLCBGaXJlZm94IDM2KyBhbmQgQ2hyb21lIDQ5KykgYW5kIGl0IGlzIGVuYWJsZWQ6XG5cdHZhciBpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0cmV0dXJuIGVsZW0gJiYgXCJnZXRDb21wdXRlZFN0eWxlXCIgaW4gd2luZG93ICYmXG5cdFx0XHR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKVtcInNjcm9sbC1iZWhhdmlvclwiXSA9PT0gXCJzbW9vdGhcIlxuXHR9XG5cblxuXHQvLyBFeGl0IGlmIGl04oCZcyBub3QgYSBicm93c2VyIGVudmlyb25tZW50OlxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFwiZG9jdW1lbnRcIiBpbiB3aW5kb3cpKSB7XG5cdFx0cmV0dXJuIHt9XG5cdH1cblxuXG5cdHZhciBtYWtlU2Nyb2xsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpIHtcblxuXHRcdC8vIFVzZSBkZWZhdWx0cyBpZiBub3QgcHJvdmlkZWRcblx0XHRkZWZhdWx0RHVyYXRpb24gPSBkZWZhdWx0RHVyYXRpb24gfHwgOTk5IC8vbXNcblx0XHRpZiAoIWVkZ2VPZmZzZXQgJiYgZWRnZU9mZnNldCAhPT0gMCkge1xuXHRcdFx0Ly8gV2hlbiBzY3JvbGxpbmcsIHRoaXMgYW1vdW50IG9mIGRpc3RhbmNlIGlzIGtlcHQgZnJvbSB0aGUgZWRnZXMgb2YgdGhlIGNvbnRhaW5lcjpcblx0XHRcdGVkZ2VPZmZzZXQgPSA5IC8vcHhcblx0XHR9XG5cblx0XHQvLyBIYW5kbGluZyB0aGUgbGlmZS1jeWNsZSBvZiB0aGUgc2Nyb2xsZXJcblx0XHR2YXIgc2Nyb2xsVGltZW91dElkXG5cdFx0dmFyIHNldFNjcm9sbFRpbWVvdXRJZCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuXHRcdFx0c2Nyb2xsVGltZW91dElkID0gbmV3VmFsdWVcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTdG9wIHRoZSBjdXJyZW50IHNtb290aCBzY3JvbGwgb3BlcmF0aW9uIGltbWVkaWF0ZWx5XG5cdFx0ICovXG5cdFx0dmFyIHN0b3BTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dElkKVxuXHRcdFx0c2V0U2Nyb2xsVGltZW91dElkKDApXG5cdFx0fVxuXG5cdFx0dmFyIGdldFRvcFdpdGhFZGdlT2Zmc2V0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdHJldHVybiBNYXRoLm1heCgwLCBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgLSBlZGdlT2Zmc2V0KVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gYSBzcGVjaWZpYyB2ZXJ0aWNhbCBwb3NpdGlvbiBpbiB0aGUgZG9jdW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3RhcmdldFl9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqICAgICAgICBJZiBub3QgcHJvdmlkZWQgdGhlIGRlZmF1bHQgZHVyYXRpb24gaXMgdXNlZC5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvWSA9IGZ1bmN0aW9uICh0YXJnZXRZLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHRzdG9wU2Nyb2xsKClcblx0XHRcdGlmIChkdXJhdGlvbiA9PT0gMCB8fCAoZHVyYXRpb24gJiYgZHVyYXRpb24gPCAwKSB8fCBpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbihjb250YWluZXIuYm9keSkpIHtcblx0XHRcdFx0Y29udGFpbmVyLnRvWSh0YXJnZXRZKVxuXHRcdFx0XHRpZiAob25Eb25lKSB7XG5cdFx0XHRcdFx0b25Eb25lKClcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHN0YXJ0WSA9IGNvbnRhaW5lci5nZXRZKClcblx0XHRcdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5tYXgoMCwgdGFyZ2V0WSkgLSBzdGFydFlcblx0XHRcdFx0dmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cdFx0XHRcdGR1cmF0aW9uID0gZHVyYXRpb24gfHwgTWF0aC5taW4oTWF0aC5hYnMoZGlzdGFuY2UpLCBkZWZhdWx0RHVyYXRpb24pO1xuXHRcdFx0XHQoZnVuY3Rpb24gbG9vcFNjcm9sbCgpIHtcblx0XHRcdFx0XHRzZXRTY3JvbGxUaW1lb3V0SWQoc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQvLyBDYWxjdWxhdGUgcGVyY2VudGFnZTpcblx0XHRcdFx0XHRcdHZhciBwID0gTWF0aC5taW4oMSwgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uKVxuXHRcdFx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBhYnNvbHV0ZSB2ZXJ0aWNhbCBwb3NpdGlvbjpcblx0XHRcdFx0XHRcdHZhciB5ID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihzdGFydFkgKyBkaXN0YW5jZSoocCA8IDAuNSA/IDIqcCpwIDogcCooNCAtIHAqMiktMSkpKVxuXHRcdFx0XHRcdFx0Y29udGFpbmVyLnRvWSh5KVxuXHRcdFx0XHRcdFx0aWYgKHAgPCAxICYmIChjb250YWluZXIuZ2V0SGVpZ2h0KCkgKyB5KSA8IGNvbnRhaW5lci5ib2R5LnNjcm9sbEhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHRsb29wU2Nyb2xsKClcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoc3RvcFNjcm9sbCwgOTkpIC8vIHdpdGggY29vbGRvd24gdGltZVxuXHRcdFx0XHRcdFx0XHRpZiAob25Eb25lKSB7XG5cdFx0XHRcdFx0XHRcdFx0b25Eb25lKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDkpKVxuXHRcdFx0XHR9KSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byB0aGUgdG9wIG9mIGEgc3BlY2lmaWMgZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQgdG8gc2Nyb2xsIHRvLlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9FbGVtID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpIHtcblx0XHRcdHNjcm9sbFRvWShnZXRUb3BXaXRoRWRnZU9mZnNldChlbGVtKSwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIGFuIGVsZW1lbnQgaW50byB2aWV3IGlmIG5lY2Vzc2FyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZWxlbX0gVGhlIGVsZW1lbnQuXG5cdFx0ICogQHBhcmFtIHtkdXJhdGlvbn0gT3B0aW9uYWxseSB0aGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBvcGVyYXRpb24uXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHR2YXIgZWxlbUhlaWdodCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG5cdFx0XHR2YXIgZWxlbUJvdHRvbSA9IGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSArIGVsZW1IZWlnaHRcblx0XHRcdHZhciBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuZ2V0SGVpZ2h0KClcblx0XHRcdHZhciB5ID0gY29udGFpbmVyLmdldFkoKVxuXHRcdFx0dmFyIGNvbnRhaW5lckJvdHRvbSA9IHkgKyBjb250YWluZXJIZWlnaHRcblx0XHRcdGlmIChnZXRUb3BXaXRoRWRnZU9mZnNldChlbGVtKSA8IHkgfHwgKGVsZW1IZWlnaHQgKyBlZGdlT2Zmc2V0KSA+IGNvbnRhaW5lckhlaWdodCkge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGNsaXBwZWQgYXQgdG9wIG9yIGlzIGhpZ2hlciB0aGFuIHNjcmVlbi5cblx0XHRcdFx0c2Nyb2xsVG9FbGVtKGVsZW0sIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0XHR9IGVsc2UgaWYgKChlbGVtQm90dG9tICsgZWRnZU9mZnNldCkgPiBjb250YWluZXJCb3R0b20pIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBjbGlwcGVkIGF0IHRoZSBib3R0b20uXG5cdFx0XHRcdHNjcm9sbFRvWShlbGVtQm90dG9tIC0gY29udGFpbmVySGVpZ2h0ICsgZWRnZU9mZnNldCwgZHVyYXRpb24sIG9uRG9uZSlcblx0XHRcdH0gZWxzZSBpZiAob25Eb25lKSB7XG5cdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyB0byB0aGUgY2VudGVyIG9mIGFuIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b2Zmc2V0fSBPcHRpb25hbGx5IHRoZSBvZmZzZXQgb2YgdGhlIHRvcCBvZiB0aGUgZWxlbWVudCBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIHNjcmVlbi5cblx0XHQgKiAgICAgICAgQSB2YWx1ZSBvZiAwIGlzIGlnbm9yZWQuXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb0NlbnRlck9mID0gZnVuY3Rpb24gKGVsZW0sIGR1cmF0aW9uLCBvZmZzZXQsIG9uRG9uZSkge1xuXHRcdFx0c2Nyb2xsVG9ZKE1hdGgubWF4KDAsIGNvbnRhaW5lci5nZXRUb3BPZihlbGVtKSAtIGNvbnRhaW5lci5nZXRIZWlnaHQoKS8yICsgKG9mZnNldCB8fCBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodC8yKSksIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQ2hhbmdlcyBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIHNjcm9sbGVyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtuZXdEZWZhdWx0RHVyYXRpb259IE9wdGlvbmFsbHkgYSBuZXcgdmFsdWUgZm9yIGRlZmF1bHQgZHVyYXRpb24sIHVzZWQgZm9yIGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LlxuXHRcdCAqICAgICAgICBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHRcdCAqIEBwYXJhbSB7bmV3RWRnZU9mZnNldH0gT3B0aW9uYWxseSBhIG5ldyB2YWx1ZSBmb3IgdGhlIGVkZ2Ugb2Zmc2V0LCB1c2VkIGJ5IGVhY2ggc2Nyb2xsIG1ldGhvZCBieSBkZWZhdWx0LiBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHRcdCAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBjdXJyZW50IHZhbHVlcy5cblx0XHQgKi9cblx0XHR2YXIgc2V0dXAgPSBmdW5jdGlvbiAobmV3RGVmYXVsdER1cmF0aW9uLCBuZXdFZGdlT2Zmc2V0KSB7XG5cdFx0XHRpZiAobmV3RGVmYXVsdER1cmF0aW9uID09PSAwIHx8IG5ld0RlZmF1bHREdXJhdGlvbikge1xuXHRcdFx0XHRkZWZhdWx0RHVyYXRpb24gPSBuZXdEZWZhdWx0RHVyYXRpb25cblx0XHRcdH1cblx0XHRcdGlmIChuZXdFZGdlT2Zmc2V0ID09PSAwIHx8IG5ld0VkZ2VPZmZzZXQpIHtcblx0XHRcdFx0ZWRnZU9mZnNldCA9IG5ld0VkZ2VPZmZzZXRcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRlZmF1bHREdXJhdGlvbjogZGVmYXVsdER1cmF0aW9uLFxuXHRcdFx0XHRlZGdlT2Zmc2V0OiBlZGdlT2Zmc2V0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldHVwOiBzZXR1cCxcblx0XHRcdHRvOiBzY3JvbGxUb0VsZW0sXG5cdFx0XHR0b1k6IHNjcm9sbFRvWSxcblx0XHRcdGludG9WaWV3OiBzY3JvbGxJbnRvVmlldyxcblx0XHRcdGNlbnRlcjogc2Nyb2xsVG9DZW50ZXJPZixcblx0XHRcdHN0b3A6IHN0b3BTY3JvbGwsXG5cdFx0XHRtb3Zpbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhc2Nyb2xsVGltZW91dElkIH0sXG5cdFx0XHRnZXRZOiBjb250YWluZXIuZ2V0WSxcblx0XHRcdGdldFRvcE9mOiBjb250YWluZXIuZ2V0VG9wT2Zcblx0XHR9XG5cblx0fVxuXG5cblx0dmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblx0dmFyIGdldERvY1kgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCBkb2NFbGVtLnNjcm9sbFRvcCB9XG5cblx0Ly8gQ3JlYXRlIGEgc2Nyb2xsZXIgZm9yIHRoZSBkb2N1bWVudDpcblx0dmFyIHplbnNjcm9sbCA9IG1ha2VTY3JvbGxlcih7XG5cdFx0Ym9keTogZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LFxuXHRcdHRvWTogZnVuY3Rpb24gKHkpIHsgd2luZG93LnNjcm9sbFRvKDAsIHkpIH0sXG5cdFx0Z2V0WTogZ2V0RG9jWSxcblx0XHRnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCB9LFxuXHRcdGdldFRvcE9mOiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBnZXREb2NZKCkgLSBkb2NFbGVtLm9mZnNldFRvcCB9XG5cdH0pXG5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHNjcm9sbGVyIGZyb20gdGhlIHByb3ZpZGVkIGNvbnRhaW5lciBlbGVtZW50IChlLmcuLCBhIERJVilcblx0ICpcblx0ICogQHBhcmFtIHtzY3JvbGxDb250YWluZXJ9IFRoZSB2ZXJ0aWNhbCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50LlxuXHQgKiBAcGFyYW0ge2RlZmF1bHREdXJhdGlvbn0gT3B0aW9uYWxseSBhIHZhbHVlIGZvciBkZWZhdWx0IGR1cmF0aW9uLCB1c2VkIGZvciBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC5cblx0ICogICAgICAgIElnbm9yZWQgaWYgMCBvciBudWxsIG9yIHVuZGVmaW5lZC5cblx0ICogQHBhcmFtIHtlZGdlT2Zmc2V0fSBPcHRpb25hbGx5IGEgdmFsdWUgZm9yIHRoZSBlZGdlIG9mZnNldCwgdXNlZCBieSBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC4gXG5cdCAqICAgICAgICBJZ25vcmVkIGlmIG51bGwgb3IgdW5kZWZpbmVkLlxuXHQgKiBAcmV0dXJucyBBIHNjcm9sbGVyIG9iamVjdCwgc2ltaWxhciB0byBgemVuc2Nyb2xsYCBidXQgY29udHJvbGxpbmcgdGhlIHByb3ZpZGVkIGVsZW1lbnQuXG5cdCAqL1xuXHR6ZW5zY3JvbGwuY3JlYXRlU2Nyb2xsZXIgPSBmdW5jdGlvbiAoc2Nyb2xsQ29udGFpbmVyLCBkZWZhdWx0RHVyYXRpb24sIGVkZ2VPZmZzZXQpIHtcblx0XHRyZXR1cm4gbWFrZVNjcm9sbGVyKHtcblx0XHRcdGJvZHk6IHNjcm9sbENvbnRhaW5lcixcblx0XHRcdHRvWTogZnVuY3Rpb24gKHkpIHsgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IHkgfSxcblx0XHRcdGdldFk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgfSxcblx0XHRcdGdldEhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTWF0aC5taW4oc2Nyb2xsQ29udGFpbmVyLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0KSB9LFxuXHRcdFx0Z2V0VG9wT2Y6IGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLm9mZnNldFRvcCB9XG5cdFx0fSwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KVxuXHR9XG5cblxuXHQvLyBBdXRvbWF0aWMgbGluay1zbW9vdGhpbmcgb24gYWNob3JzXG5cdC8vIEV4Y2x1ZGUgSUU4LSBvciB3aGVuIG5hdGl2ZSBpcyBlbmFibGVkIG9yIFplbnNjcm9sbCBhdXRvLSBpcyBkaXNhYmxlZFxuXHRpZiAoXCJhZGRFdmVudExpc3RlbmVyXCIgaW4gd2luZG93ICYmICF3aW5kb3cubm9aZW5zbW9vdGggJiYgIWlzTmF0aXZlU21vb3RoU2Nyb2xsRW5hYmxlZE9uKGRvY3VtZW50LmJvZHkpKSB7XG5cblx0XHR2YXIgaXNIaXN0b3J5U3VwcG9ydGVkID0gXCJoaXN0b3J5XCIgaW4gd2luZG93ICYmIFwicHVzaFN0YXRlXCIgaW4gaGlzdG9yeVxuXHRcdHZhciBpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkID0gaXNIaXN0b3J5U3VwcG9ydGVkICYmIFwic2Nyb2xsUmVzdG9yYXRpb25cIiBpbiBoaXN0b3J5XG5cblx0XHQvLyBPbiBmaXJzdCBsb2FkICYgcmVmcmVzaCBtYWtlIHN1cmUgdGhlIGJyb3dzZXIgcmVzdG9yZXMgdGhlIHBvc2l0aW9uIGZpcnN0XG5cdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcImF1dG9cIlxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRcdC8vIFNldCBpdCB0byBtYW51YWxcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcIm1hbnVhbFwiIH0sIDkpXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnN0YXRlICYmIFwiemVuc2Nyb2xsWVwiIGluIGV2ZW50LnN0YXRlKSB7XG5cdFx0XHRcdFx0XHR6ZW5zY3JvbGwudG9ZKGV2ZW50LnN0YXRlLnplbnNjcm9sbFkpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCBmYWxzZSlcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIGVkZ2Ugb2Zmc2V0IG9uIGZpcnN0IGxvYWQgaWYgbmVjZXNzYXJ5XG5cdFx0XHQvLyBUaGlzIG1heSBub3Qgd29yayBvbiBJRSAob3Igb2xkZXIgY29tcHV0ZXI/KSBhcyBpdCByZXF1aXJlcyBtb3JlIHRpbWVvdXQsIGFyb3VuZCAxMDAgbXNcblx0XHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQvLyBBZGp1c3RtZW50IGlzIG9ubHkgbmVlZGVkIGlmIHRoZXJlIGlzIGFuIGVkZ2Ugb2Zmc2V0OlxuXHRcdFx0XHRcdHZhciBlZGdlT2Zmc2V0ID0gemVuc2Nyb2xsLnNldHVwKCkuZWRnZU9mZnNldFxuXHRcdFx0XHRcdGlmIChlZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVsxXSlcblx0XHRcdFx0XHRcdGlmICh0YXJnZXRFbGVtKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0YXJnZXRZID0gTWF0aC5tYXgoMCwgemVuc2Nyb2xsLmdldFRvcE9mKHRhcmdldEVsZW0pIC0gZWRnZU9mZnNldClcblx0XHRcdFx0XHRcdFx0dmFyIGRpZmYgPSB6ZW5zY3JvbGwuZ2V0WSgpIC0gdGFyZ2V0WVxuXHRcdFx0XHRcdFx0XHQvLyBPbmx5IGRvIHRoZSBhZGp1c3RtZW50IGlmIHRoZSBicm93c2VyIGlzIHZlcnkgY2xvc2UgdG8gdGhlIGVsZW1lbnQ6XG5cdFx0XHRcdFx0XHRcdGlmICgwIDw9IGRpZmYgJiYgZGlmZiA8IDkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHRhcmdldFkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDkpXG5cdFx0XHR9XG5cblx0XHR9LCBmYWxzZSlcblxuXHRcdC8vIEhhbmRsaW5nIGNsaWNrcyBvbiBhbmNob3JzXG5cdFx0dmFyIFJFX25vWmVuc21vb3RoID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKW5vWmVuc21vb3RoKFxcXFxzfCQpXCIpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdHZhciBhbmNob3IgPSBldmVudC50YXJnZXRcblx0XHRcdHdoaWxlIChhbmNob3IgJiYgYW5jaG9yLnRhZ05hbWUgIT09IFwiQVwiKSB7XG5cdFx0XHRcdGFuY2hvciA9IGFuY2hvci5wYXJlbnROb2RlXG5cdFx0XHR9XG5cdFx0XHQvLyBMZXQgdGhlIGJyb3dzZXIgaGFuZGxlIHRoZSBjbGljayBpZiBpdCB3YXNuJ3Qgd2l0aCB0aGUgcHJpbWFyeSBidXR0b24sIG9yIHdpdGggc29tZSBtb2RpZmllciBrZXlzOlxuXHRcdFx0aWYgKCFhbmNob3IgfHwgZXZlbnQud2hpY2ggIT09IDEgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LmFsdEtleSkge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdC8vIFNhdmUgdGhlIGN1cnJlbnQgc2Nyb2xsaW5nIHBvc2l0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIGZvciBzY3JvbGwgcmVzdG9yYXRpb246XG5cdFx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0XHR2YXIgaGlzdG9yeVN0YXRlID0gaGlzdG9yeS5zdGF0ZSAmJiB0eXBlb2YgaGlzdG9yeS5zdGF0ZSA9PT0gXCJvYmplY3RcIiA/IGhpc3Rvcnkuc3RhdGUgOiB7fVxuXHRcdFx0XHRoaXN0b3J5U3RhdGUuemVuc2Nyb2xsWSA9IHplbnNjcm9sbC5nZXRZKClcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5U3RhdGUsIFwiXCIpXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHQvLyBBdm9pZCB0aGUgQ2hyb21lIFNlY3VyaXR5IGV4Y2VwdGlvbiBvbiBmaWxlIHByb3RvY29sLCBlLmcuLCBmaWxlOi8vaW5kZXguaHRtbFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBGaW5kIHRoZSByZWZlcmVuY2VkIElEOlxuXHRcdFx0dmFyIGhyZWYgPSBhbmNob3IuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiXG5cdFx0XHRpZiAoaHJlZi5pbmRleE9mKFwiI1wiKSA9PT0gMCAmJiAhUkVfbm9aZW5zbW9vdGgudGVzdChhbmNob3IuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0WSA9IDBcblx0XHRcdFx0dmFyIHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmLnN1YnN0cmluZygxKSlcblx0XHRcdFx0aWYgKGhyZWYgIT09IFwiI1wiKSB7XG5cdFx0XHRcdFx0aWYgKCF0YXJnZXRFbGVtKSB7XG5cdFx0XHRcdFx0XHQvLyBMZXQgdGhlIGJyb3dzZXIgaGFuZGxlIHRoZSBjbGljayBpZiB0aGUgdGFyZ2V0IElEIGlzIG5vdCBmb3VuZC5cblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YXJnZXRZID0gemVuc2Nyb2xsLmdldFRvcE9mKHRhcmdldEVsZW0pXG5cdFx0XHRcdH1cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHQvLyBCeSBkZWZhdWx0IHRyaWdnZXIgdGhlIGJyb3dzZXIncyBgaGFzaGNoYW5nZWAgZXZlbnQuLi5cblx0XHRcdFx0dmFyIG9uRG9uZSA9IGZ1bmN0aW9uICgpIHsgd2luZG93LmxvY2F0aW9uID0gaHJlZiB9XG5cdFx0XHRcdC8vIC4uLnVubGVzcyB0aGVyZSBpcyBhbiBlZGdlIG9mZnNldCBzcGVjaWZpZWRcblx0XHRcdFx0dmFyIGVkZ2VPZmZzZXQgPSB6ZW5zY3JvbGwuc2V0dXAoKS5lZGdlT2Zmc2V0XG5cdFx0XHRcdGlmIChlZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdFx0dGFyZ2V0WSA9IE1hdGgubWF4KDAsIHRhcmdldFkgLSBlZGdlT2Zmc2V0KVxuXHRcdFx0XHRcdGlmIChpc0hpc3RvcnlTdXBwb3J0ZWQpIHtcblx0XHRcdFx0XHRcdG9uRG9uZSA9IGZ1bmN0aW9uICgpIHsgaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIGhyZWYpIH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0emVuc2Nyb2xsLnRvWSh0YXJnZXRZLCBudWxsLCBvbkRvbmUpXG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UpXG5cblx0fVxuXG5cblx0cmV0dXJuIHplbnNjcm9sbFxuXG5cbn0pKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9QYXZsb3MtUGFwYWRvcG91bG9zLVBob3RvZ3JhcGh5LXcyNjAuanBnXCI6IFwiLi9zcmMvaW1nL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzI2MC5qcGdcIixcblx0XCIuL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzMyMC5qcGdcIjogXCIuL3NyYy9pbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13MzIwLmpwZ1wiLFxuXHRcIi4vV2lraXBlZGlhLVZpZXdlci13MjYwLmpwZ1wiOiBcIi4vc3JjL2ltZy9XaWtpcGVkaWEtVmlld2VyLXcyNjAuanBnXCIsXG5cdFwiLi9XaWtpcGVkaWEtVmlld2VyLXczMjAuanBnXCI6IFwiLi9zcmMvaW1nL1dpa2lwZWRpYS1WaWV3ZXItdzMyMC5qcGdcIixcblx0XCIuL2JhY2suanBnXCI6IFwiLi9zcmMvaW1nL2JhY2suanBnXCIsXG5cdFwiLi9mYXJtLWxpZmUtdzI2MC5qcGdcIjogXCIuL3NyYy9pbWcvZmFybS1saWZlLXcyNjAuanBnXCIsXG5cdFwiLi9mYXJtLWxpZmUtdzMyMC5qcGdcIjogXCIuL3NyYy9pbWcvZmFybS1saWZlLXczMjAuanBnXCIsXG5cdFwiLi9mYXJtLWxpZmUtdzMyMC5wbmdcIjogXCIuL3NyYy9pbWcvZmFybS1saWZlLXczMjAucG5nXCIsXG5cdFwiLi9mYXJtLWxpZmUtdzQ1MC5wbmdcIjogXCIuL3NyYy9pbWcvZmFybS1saWZlLXc0NTAucG5nXCIsXG5cdFwiLi9mZXN0LXNlZWtlci0yNjAuanBnXCI6IFwiLi9zcmMvaW1nL2Zlc3Qtc2Vla2VyLTI2MC5qcGdcIixcblx0XCIuL2Zlc3Qtc2Vla2VyLTMyMC5qcGdcIjogXCIuL3NyYy9pbWcvZmVzdC1zZWVrZXItMzIwLmpwZ1wiLFxuXHRcIi4vZ2xvYi10YXN0ZS13MjYwLmpwZ1wiOiBcIi4vc3JjL2ltZy9nbG9iLXRhc3RlLXcyNjAuanBnXCIsXG5cdFwiLi9nbG9iLXRhc3RlLXczMjAuanBnXCI6IFwiLi9zcmMvaW1nL2dsb2ItdGFzdGUtdzMyMC5qcGdcIixcblx0XCIuL2xvZ28taW1nLnBuZ1wiOiBcIi4vc3JjL2ltZy9sb2dvLWltZy5wbmdcIixcblx0XCIuL2xvZ28tb3B0LWltZy5wbmdcIjogXCIuL3NyYy9pbWcvbG9nby1vcHQtaW1nLnBuZ1wiLFxuXHRcIi4vbG9nby1vcHQuc3ZnXCI6IFwiLi9zcmMvaW1nL2xvZ28tb3B0LnN2Z1wiLFxuXHRcIi4vbWFpbnRlbmFuY2UtdzMyMC5qcGdcIjogXCIuL3NyYy9pbWcvbWFpbnRlbmFuY2UtdzMyMC5qcGdcIixcblx0XCIuL21haW50ZW5hbmNlLXc0NTAuanBnXCI6IFwiLi9zcmMvaW1nL21haW50ZW5hbmNlLXc0NTAuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1nIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL1Bhdmxvcy1QYXBhZG9wb3Vsb3MtUGhvdG9ncmFwaHktdzI2MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvUGF2bG9zLVBhcGFkb3BvdWxvcy1QaG90b2dyYXBoeS13MzIwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9XaWtpcGVkaWEtVmlld2VyLXcyNjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL1dpa2lwZWRpYS1WaWV3ZXItdzMyMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmFjay5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZmFybS1saWZlLXcyNjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Zhcm0tbGlmZS13MzIwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9mYXJtLWxpZmUtdzMyMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZmFybS1saWZlLXc0NTAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Zlc3Qtc2Vla2VyLTI2MC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZmVzdC1zZWVrZXItMzIwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9nbG9iLXRhc3RlLXcyNjAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2dsb2ItdGFzdGUtdzMyMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbG9nby1pbWcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xvZ28tb3B0LWltZy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9sb2dvLW9wdC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbWFpbnRlbmFuY2UtdzMyMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbWFpbnRlbmFuY2UtdzQ1MC5qcGdcIjsiLCJyZXF1aXJlKCcuL3Njc3MvbWFpbi5zY3NzJyk7XHJcbnJlcXVpcmUoJ3BpY3R1cmVmaWxsJyk7XHJcbnJlcXVpcmUoJ3plbnNjcm9sbCcpO1xyXG5cclxuLy8gTG9hZCBpbWFnZXMgZHltYW1pY2FsbHlcclxuZnVuY3Rpb24gaW1wb3J0SW1ncyhyKSB7XHJcbiAgbGV0IGltYWdlcyA9IHt9O1xyXG4gIHIua2V5cygpLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTtcclxuICB9KTtcclxuICByZXR1cm4gaW1hZ2VzO1xyXG59XHJcbmltcG9ydEltZ3MocmVxdWlyZS5jb250ZXh0KCcuL2ltZycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcclxuXHJcbi8vIGhpZGUgaGFtYnVyZ2VyIG1lbnUgd2hlbiBvbmUgb2YgaXRzIGVsZW1lbnRzIGlzIGNsaWNrZWRcclxudmFyIGNoYW5nZSA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XHJcbnZhciBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbScpO1xyXG5BcnJheS5mcm9tKG5hdkxpbmtzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hdmxpbmspIHtcclxuICBuYXZsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgYm94Q2hlY2tlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LXRvZ2dsZVwiKS5jaGVja2VkO1xyXG4gICAgdG9nZ2xlKGJveENoZWNrZWQpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZShjaGVja2VkKSB7XHJcbiAgaWYoY2hlY2tlZCkge1xyXG4gICAgdmFyIGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtdG9nZ2xlXCIpO1xyXG4gICAgY2hlY2tCb3guZGlzcGF0Y2hFdmVudChjaGFuZ2UpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtdG9nZ2xlXCIpLmNoZWNrZWQgPSBmYWxzZTtcclxuICB9XHJcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9