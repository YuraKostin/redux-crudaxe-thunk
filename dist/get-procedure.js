parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KUNA":[function(require,module,exports) {
function e(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}module.exports=e;
},{}],"FNXO":[function(require,module,exports) {
var e=require("./_isPlaceholder");function r(r){return function n(t){return 0===arguments.length||e(t)?n:r.apply(this,arguments)}}module.exports=r;
},{"./_isPlaceholder":"KUNA"}],"jKwu":[function(require,module,exports) {
function t(t,e){return Object.prototype.hasOwnProperty.call(e,t)}module.exports=t;
},{}],"kwu9":[function(require,module,exports) {
var t=require("./_has"),e=Object.prototype.toString,r=function(){return"[object Arguments]"===e.call(arguments)?function(t){return"[object Arguments]"===e.call(t)}:function(e){return t("callee",e)}}();module.exports=r;
},{"./_has":"jKwu"}],"E0bJ":[function(require,module,exports) {
module.exports=Array.isArray||function(r){return null!=r&&r.length>=0&&"[object Array]"===Object.prototype.toString.call(r)};
},{}],"XQfS":[function(require,module,exports) {
function t(t){return"[object Object]"===Object.prototype.toString.call(t)}module.exports=t;
},{}],"o8ut":[function(require,module,exports) {
function t(t){return"[object String]"===Object.prototype.toString.call(t)}module.exports=t;
},{}],"ntwp":[function(require,module,exports) {
var n=require("./internal/_curry1"),t=require("./internal/_isArguments"),r=require("./internal/_isArray"),e=require("./internal/_isObject"),u=require("./internal/_isString"),o=n(function(n){return null!=n&&"function"==typeof n["fantasy-land/empty"]?n["fantasy-land/empty"]():null!=n&&null!=n.constructor&&"function"==typeof n.constructor["fantasy-land/empty"]?n.constructor["fantasy-land/empty"]():null!=n&&"function"==typeof n.empty?n.empty():null!=n&&null!=n.constructor&&"function"==typeof n.constructor.empty?n.constructor.empty():r(n)?[]:u(n)?"":e(n)?{}:t(n)?function(){return arguments}():void 0});module.exports=o;
},{"./internal/_curry1":"FNXO","./internal/_isArguments":"kwu9","./internal/_isArray":"E0bJ","./internal/_isObject":"XQfS","./internal/_isString":"o8ut"}],"FYPD":[function(require,module,exports) {
var r=require("./_curry1"),e=require("./_isPlaceholder");function n(n){return function u(t,c){switch(arguments.length){case 0:return u;case 1:return e(t)?u:r(function(r){return n(t,r)});default:return e(t)&&e(c)?u:e(t)?r(function(r){return n(r,c)}):e(c)?r(function(r){return n(t,r)}):n(t,c)}}}module.exports=n;
},{"./_curry1":"FNXO","./_isPlaceholder":"KUNA"}],"my2t":[function(require,module,exports) {
function e(e){for(var n,o=[];!(n=e.next()).done;)o.push(n.value);return o}module.exports=e;
},{}],"W7pH":[function(require,module,exports) {
function r(r,e,n){for(var t=0,o=n.length;t<o;){if(r(e,n[t]))return!0;t+=1}return!1}module.exports=r;
},{}],"UAn0":[function(require,module,exports) {
function n(n){var t=String(n).match(/^function (\w*)/);return null==t?"":t[1]}module.exports=n;
},{}],"jq0P":[function(require,module,exports) {
function t(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}module.exports="function"==typeof Object.is?Object.is:t;
},{}],"nfNX":[function(require,module,exports) {
var r=require("./internal/_curry1"),e=require("./internal/_has"),t=require("./internal/_isArguments"),n=!{toString:null}.propertyIsEnumerable("toString"),o=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],u=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),i=function(r,e){for(var t=0;t<r.length;){if(r[t]===e)return!0;t+=1}return!1},l="function"!=typeof Object.keys||u?r(function(r){if(Object(r)!==r)return[];var l,c,f=[],s=u&&t(r);for(l in r)!e(l,r)||s&&"length"===l||(f[f.length]=l);if(n)for(c=o.length-1;c>=0;)l=o[c],e(l,r)&&!i(f,l)&&(f[f.length]=l),c-=1;return f}):r(function(r){return Object(r)!==r?[]:Object.keys(r)});module.exports=l;
},{"./internal/_curry1":"FNXO","./internal/_has":"jKwu","./internal/_isArguments":"kwu9"}],"mony":[function(require,module,exports) {
var e=require("./internal/_curry1"),r=e(function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)});module.exports=r;
},{"./internal/_curry1":"FNXO"}],"Dq02":[function(require,module,exports) {
var e=require("./_arrayFromIterator"),r=require("./_includesWith"),a=require("./_functionName"),n=require("./_has"),t=require("./_objectIs"),s=require("../keys"),u=require("../type");function c(a,n,t,s){var u=e(a),c=e(n);function o(e,r){return i(e,r,t.slice(),s.slice())}return!r(function(e,a){return!r(o,a,e)},c,u)}function i(e,r,o,f){if(t(e,r))return!0;var l=u(e);if(l!==u(r))return!1;if(null==e||null==r)return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof r["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](r)&&"function"==typeof r["fantasy-land/equals"]&&r["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof r.equals)return"function"==typeof e.equals&&e.equals(r)&&"function"==typeof r.equals&&r.equals(e);switch(l){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===a(e.constructor))return e===r;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof r||!t(e.valueOf(),r.valueOf()))return!1;break;case"Date":if(!t(e.valueOf(),r.valueOf()))return!1;break;case"Error":return e.name===r.name&&e.message===r.message;case"RegExp":if(e.source!==r.source||e.global!==r.global||e.ignoreCase!==r.ignoreCase||e.multiline!==r.multiline||e.sticky!==r.sticky||e.unicode!==r.unicode)return!1}for(var y=o.length-1;y>=0;){if(o[y]===e)return f[y]===r;y-=1}switch(l){case"Map":return e.size===r.size&&c(e.entries(),r.entries(),o.concat([e]),f.concat([r]));case"Set":return e.size===r.size&&c(e.values(),r.values(),o.concat([e]),f.concat([r]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var q=s(e);if(q.length!==s(r).length)return!1;var p=o.concat([e]),g=f.concat([r]);for(y=q.length-1;y>=0;){var m=q[y];if(!n(m,r)||!i(r[m],e[m],p,g))return!1;y-=1}return!0}module.exports=i;
},{"./_arrayFromIterator":"my2t","./_includesWith":"W7pH","./_functionName":"UAn0","./_has":"jKwu","./_objectIs":"jq0P","../keys":"nfNX","../type":"mony"}],"lluB":[function(require,module,exports) {
var r=require("./internal/_curry2"),e=require("./internal/_equals"),n=r(function(r,n){return e(r,n,[],[])});module.exports=n;
},{"./internal/_curry2":"FYPD","./internal/_equals":"Dq02"}],"YROz":[function(require,module,exports) {
var r=require("./internal/_curry1"),e=require("./empty"),u=require("./equals"),n=r(function(r){return null!=r&&u(r,e(r))});module.exports=n;
},{"./internal/_curry1":"FNXO","./empty":"ntwp","./equals":"lluB"}],"xGi1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ACTIONS=exports.RESET=exports.REQUEST=exports.RECEIVE=exports.ERROR=void 0;var E="ERROR";exports.ERROR=E;var e="RECEIVE";exports.RECEIVE=e;var r="REQUEST";exports.REQUEST=r;var R="RESET";exports.RESET=R;var t=[E,e,r,R];exports.ACTIONS=t;
},{}],"eW8s":[function(require,module,exports) {
function t(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,u){return n.apply(this,arguments)};case 5:return function(t,r,e,u,a){return n.apply(this,arguments)};case 6:return function(t,r,e,u,a,i){return n.apply(this,arguments)};case 7:return function(t,r,e,u,a,i,s){return n.apply(this,arguments)};case 8:return function(t,r,e,u,a,i,s,c){return n.apply(this,arguments)};case 9:return function(t,r,e,u,a,i,s,c,p){return n.apply(this,arguments)};case 10:return function(t,r,e,u,a,i,s,c,p,o){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}module.exports=t;
},{}],"uma4":[function(require,module,exports) {
var r=require("./_arity"),e=require("./_isPlaceholder");function t(n,l,i){return function(){for(var u=[],a=0,h=n,o=0;o<l.length||a<arguments.length;){var g;o<l.length&&(!e(l[o])||a>=arguments.length)?g=l[o]:(g=arguments[a],a+=1),u[o]=g,e(g)||(h-=1),o+=1}return h<=0?i.apply(this,u):r(h,t(n,u,i))}}module.exports=t;
},{"./_arity":"eW8s","./_isPlaceholder":"KUNA"}],"jdVg":[function(require,module,exports) {
var r=require("./internal/_arity"),e=require("./internal/_curry1"),n=require("./internal/_curry2"),i=require("./internal/_curryN"),u=n(function(n,u){return 1===n?e(u):r(n,i(n,[],u))});module.exports=u;
},{"./internal/_arity":"eW8s","./internal/_curry1":"FNXO","./internal/_curry2":"FYPD","./internal/_curryN":"uma4"}],"jVSS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAction=void 0;var t=require("../constants/action-types"),e=function(e){return function(E){var n={ERROR:t.ERROR,RECEIVE:t.RECEIVE,REQUEST:t.REQUEST,RESET:t.RESET};return"".concat(e,"/").concat(n[E])}};exports.getAction=e;
},{"../constants/action-types":"xGi1"}],"BT7v":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getActionCreator=void 0;var e=n(require("ramda/src/curryN")),t=require("../constants/action-types"),r=require("../get-action");function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=(0,e.default)(2,function(e,n){var u,a=n.toUpperCase(),i=(0,r.getAction)(e);return(o(u={},t.ERROR,function(e){return{payload:e,type:i(t.ERROR)}}),o(u,t.RECEIVE,function(e){return{payload:e,type:i(t.RECEIVE)}}),o(u,t.REQUEST,function(){return{type:i(t.REQUEST)}}),o(u,t.RESET,function(){return{type:i(t.RESET)}}),u)[a]});exports.getActionCreator=u;
},{"ramda/src/curryN":"jdVg","../constants/action-types":"xGi1","../get-action":"jVSS"}],"U4FK":[function(require,module,exports) {
var r=require("./internal/_curry2"),e=r(function(r,e){for(var n={},t=0;t<r.length;)r[t]in e&&(n[r[t]]=e[r[t]]),t+=1;return n});module.exports=e;
},{"./internal/_curry2":"FYPD"}],"DOCr":[function(require,module,exports) {
var r=require("./internal/_curry2"),e=r(function(r,e){return[r,e]});module.exports=e;
},{"./internal/_curry2":"FYPD"}],"cpCc":[function(require,module,exports) {
var n=require("./_has");function r(r){if(null==r)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(r),o=1,t=arguments.length;o<t;){var i=arguments[o];if(null!=i)for(var u in i)n(u,i)&&(e[u]=i[u]);o+=1}return e}module.exports="function"==typeof Object.assign?Object.assign:r;
},{"./_has":"jKwu"}],"wbBg":[function(require,module,exports) {
var r=require("./internal/_objectAssign"),e=require("./internal/_curry1"),n=e(function(e){return r.apply(null,[{}].concat(e))});module.exports=n;
},{"./internal/_objectAssign":"cpCc","./internal/_curry1":"FNXO"}],"uYup":[function(require,module,exports) {
function t(t,n){return function(){return n.call(this,t.apply(this,arguments))}}module.exports=t;
},{}],"BbYv":[function(require,module,exports) {
var r=require("./_curry1"),n=require("./_curry2"),u=require("./_isPlaceholder");function t(t){return function e(c,i,o){switch(arguments.length){case 0:return e;case 1:return u(c)?e:n(function(r,n){return t(c,r,n)});case 2:return u(c)&&u(i)?e:u(c)?n(function(r,n){return t(r,i,n)}):u(i)?n(function(r,n){return t(c,r,n)}):r(function(r){return t(c,i,r)});default:return u(c)&&u(i)&&u(o)?e:u(c)&&u(i)?n(function(r,n){return t(r,n,o)}):u(c)&&u(o)?n(function(r,n){return t(r,i,n)}):u(i)&&u(o)?n(function(r,n){return t(c,r,n)}):u(c)?r(function(r){return t(r,i,o)}):u(i)?r(function(r){return t(c,r,o)}):u(o)?r(function(r){return t(c,i,r)}):t(c,i,o)}}}module.exports=t;
},{"./_curry1":"FNXO","./_curry2":"FYPD","./_isPlaceholder":"KUNA"}],"hSRT":[function(require,module,exports) {
var e=require("./_curry1"),r=require("./_isArray"),t=require("./_isString"),n=e(function(e){return!!r(e)||!!e&&("object"==typeof e&&(!t(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&(e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1)))))});module.exports=n;
},{"./_curry1":"FNXO","./_isArray":"E0bJ","./_isString":"o8ut"}],"kKRQ":[function(require,module,exports) {
var t=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();function n(n){return new t(n)}module.exports=n;
},{}],"QUfv":[function(require,module,exports) {
var r=require("./internal/_arity"),e=require("./internal/_curry2"),n=e(function(e,n){return r(e.length,function(){return e.apply(n,arguments)})});module.exports=n;
},{"./internal/_arity":"eW8s","./internal/_curry2":"FYPD"}],"bZwk":[function(require,module,exports) {
var r=require("./_isArrayLike"),e=require("./_xwrap"),t=require("../bind");function n(r,e,t){for(var n=0,u=t.length;n<u;){if((e=r["@@transducer/step"](e,t[n]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}n+=1}return r["@@transducer/result"](e)}function u(r,e,t){for(var n=t.next();!n.done;){if((e=r["@@transducer/step"](e,n.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}n=t.next()}return r["@@transducer/result"](e)}function a(r,e,n,u){return r["@@transducer/result"](n[u](t(r["@@transducer/step"],r),e))}var d="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function i(t,i,c){if("function"==typeof t&&(t=e(t)),r(c))return n(t,i,c);if("function"==typeof c["fantasy-land/reduce"])return a(t,i,c,"fantasy-land/reduce");if(null!=c[d])return u(t,i,c[d]());if("function"==typeof c.next)return u(t,i,c);if("function"==typeof c.reduce)return a(t,i,c,"reduce");throw new TypeError("reduce: list must be array or iterable")}module.exports=i;
},{"./_isArrayLike":"hSRT","./_xwrap":"kKRQ","../bind":"QUfv"}],"nr2x":[function(require,module,exports) {
var r=require("./internal/_curry3"),e=require("./internal/_reduce"),u=r(e);module.exports=u;
},{"./internal/_curry3":"BbYv","./internal/_reduce":"bZwk"}],"sUY6":[function(require,module,exports) {
var r=require("./_isArray");function t(t,e){return function(){var n=arguments.length;if(0===n)return e();var a=arguments[n-1];return r(a)||"function"!=typeof a[t]?e.apply(this,arguments):a[t].apply(a,Array.prototype.slice.call(arguments,0,n-1))}}module.exports=t;
},{"./_isArray":"E0bJ"}],"ZXf7":[function(require,module,exports) {
var r=require("./internal/_checkForMethod"),e=require("./internal/_curry3"),t=e(r("slice",function(r,e,t){return Array.prototype.slice.call(t,r,e)}));module.exports=t;
},{"./internal/_checkForMethod":"sUY6","./internal/_curry3":"BbYv"}],"RySi":[function(require,module,exports) {
var e=require("./internal/_checkForMethod"),r=require("./internal/_curry1"),i=require("./slice"),l=r(e("tail",i(1,1/0)));module.exports=l;
},{"./internal/_checkForMethod":"sUY6","./internal/_curry1":"FNXO","./slice":"ZXf7"}],"s4kc":[function(require,module,exports) {
var e=require("./internal/_arity"),r=require("./internal/_pipe"),i=require("./reduce"),t=require("./tail");function n(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return e(arguments[0].length,i(r,arguments[0],t(arguments)))}module.exports=n;
},{"./internal/_arity":"eW8s","./internal/_pipe":"uYup","./reduce":"nr2x","./tail":"RySi"}],"qBsV":[function(require,module,exports) {
var r=require("./internal/_curry1"),e=require("./internal/_isString"),i=r(function(r){return e(r)?r.split("").reverse().join(""):Array.prototype.slice.call(r,0).reverse()});module.exports=i;
},{"./internal/_curry1":"FNXO","./internal/_isString":"o8ut"}],"SRvh":[function(require,module,exports) {
var e=require("./pipe"),r=require("./reverse");function t(){if(0===arguments.length)throw new Error("compose requires at least one argument");return e.apply(this,r(arguments))}module.exports=t;
},{"./pipe":"s4kc","./reverse":"qBsV"}],"sHTF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getEmptyState=void 0;var e=function(){return{data:null,error:null,isInProcess:!1}};exports.getEmptyState=e;
},{}],"jLJN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getInitialState=void 0;var e=s(require("ramda/src/pick")),r=s(require("ramda/src/pair")),t=s(require("ramda/src/mergeAll")),a=s(require("ramda/src/compose")),i=require("../get-empty-state");function s(e){return e&&e.__esModule?e:{default:e}}var u=(0,a.default)(t.default,(0,r.default)((0,i.getEmptyState)()),(0,e.default)(["data","error","isInProcess"]));exports.getInitialState=u;
},{"ramda/src/pick":"U4FK","ramda/src/pair":"DOCr","ramda/src/mergeAll":"wbBg","ramda/src/compose":"SRvh","../get-empty-state":"sHTF"}],"qDVL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getValueByKeyOrDefault=void 0;var e=function(e){return function(t){return function(r){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:r}}};exports.getValueByKeyOrDefault=e;
},{}],"sUou":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getActionHandlers=void 0;var e=require("../get-action"),r=require("../get-initial-state"),t=require("../get-value-by-key-or-default"),n=require("../constants/action-types");function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var a=function(a,o){var u,s=(0,e.getAction)(a),c=(0,t.getValueByKeyOrDefault)(o),l=c("data"),d=c("error"),f=c("isInProcess");return i(u={},s(n.ERROR),function(e,r){return{data:l(null),error:r,isInProcess:f(!1)}}),i(u,s(n.RECEIVE),function(e,r){return{data:r,error:d(!1),isInProcess:f(!1)}}),i(u,s(n.REQUEST),function(){return{data:l(null),error:d(null),isInProcess:!0}}),i(u,s(n.RESET),function(){return(0,r.getInitialState)(o)}),u};exports.getActionHandlers=a;
},{"../get-action":"jVSS","../get-initial-state":"jLJN","../get-value-by-key-or-default":"qDVL","../constants/action-types":"xGi1"}],"QtsW":[function(require,module,exports) {
module.exports={"@@functional/placeholder":!0};
},{}],"jGF4":[function(require,module,exports) {
function e(e,n){var r;n=n||[];var t=(e=e||[]).length,l=n.length,o=[];for(r=0;r<t;)o[o.length]=e[r],r+=1;for(r=0;r<l;)o[o.length]=n[r],r+=1;return o}module.exports=e;
},{}],"rqPf":[function(require,module,exports) {
var r=require("./internal/_concat"),e=require("./internal/_curry2"),n=e(function(e,n){return r(n,[e])});module.exports=n;
},{"./internal/_concat":"jGF4","./internal/_curry2":"FYPD"}],"Hs0m":[function(require,module,exports) {
module.exports=Number.isInteger||function(e){return e<<0===e};
},{}],"oNhL":[function(require,module,exports) {
var r=require("./internal/_curry2"),e=require("./internal/_isString"),n=r(function(r,n){var t=r<0?n.length+r:r;return e(n)?n.charAt(t):n[t]});module.exports=n;
},{"./internal/_curry2":"FYPD","./internal/_isString":"o8ut"}],"HrYX":[function(require,module,exports) {
var r=require("./internal/_curry2"),e=require("./internal/_isInteger"),n=require("./nth"),t=r(function(r,t){return r.map(function(r){for(var u,i=t,l=0;l<r.length;){if(null==i)return;u=r[l],i=e(u)?n(u,i):i[u],l+=1}return i})});module.exports=t;
},{"./internal/_curry2":"FYPD","./internal/_isInteger":"Hs0m","./nth":"oNhL"}],"hVwD":[function(require,module,exports) {
var r=require("./internal/_curry2"),e=require("./paths"),u=r(function(r,u){return e([r],u)[0]});module.exports=u;
},{"./internal/_curry2":"FYPD","./paths":"HrYX"}],"Ggls":[function(require,module,exports) {
function e(e){return e}module.exports=e;
},{}],"EBQt":[function(require,module,exports) {
var r=require("./internal/_curry1"),e=require("./internal/_identity"),i=r(e);module.exports=i;
},{"./internal/_curry1":"FNXO","./internal/_identity":"Ggls"}],"Lgc5":[function(require,module,exports) {
var r=require("./internal/_curry2"),e=r(function(r,e){var n={};return n[r]=e,n});module.exports=e;
},{"./internal/_curry2":"FYPD"}],"ijTz":[function(require,module,exports) {
function r(r,e){for(var n=0,o=e.length,t=Array(o);n<o;)t[n]=r(e[n]),n+=1;return t}module.exports=r;
},{}],"sAsR":[function(require,module,exports) {
var r=require("./internal/_curry2"),e=r(function(r,e){return e>r?e:r});module.exports=e;
},{"./internal/_curry2":"FYPD"}],"KFMn":[function(require,module,exports) {
function n(n){return null!=n&&"function"==typeof n["@@transducer/step"]}module.exports=n;
},{}],"D3LY":[function(require,module,exports) {
var r=require("./_isArray"),e=require("./_isTransformer");function n(n,t,i){return function(){if(0===arguments.length)return i();var p=Array.prototype.slice.call(arguments,0),u=p.pop();if(!r(u)){for(var l=0;l<n.length;){if("function"==typeof u[n[l]])return u[n[l]].apply(u,p);l+=1}if(e(u))return t.apply(null,p)(u)}return i.apply(this,arguments)}}module.exports=n;
},{"./_isArray":"E0bJ","./_isTransformer":"KFMn"}],"fpYD":[function(require,module,exports) {
module.exports={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}};
},{}],"mwcZ":[function(require,module,exports) {
var t=require("./_curry2"),r=require("./_xfBase"),e=function(){function t(t,r){this.xf=r,this.f=t}return t.prototype["@@transducer/init"]=r.init,t.prototype["@@transducer/result"]=r.result,t.prototype["@@transducer/step"]=function(t,r){return this.xf["@@transducer/step"](t,this.f(r))},t}(),n=t(function(t,r){return new e(t,r)});module.exports=n;
},{"./_curry2":"FYPD","./_xfBase":"fpYD"}],"bUOh":[function(require,module,exports) {
var e=require("./internal/_curry2"),r=require("./internal/_dispatchable"),t=require("./internal/_map"),n=require("./internal/_reduce"),a=require("./internal/_xmap"),i=require("./curryN"),u=require("./keys"),c=e(r(["fantasy-land/map","map"],a,function(e,r){switch(Object.prototype.toString.call(r)){case"[object Function]":return i(r.length,function(){return e.call(this,r.apply(this,arguments))});case"[object Object]":return n(function(t,n){return t[n]=e(r[n]),t},{},u(r));default:return t(e,r)}}));module.exports=c;
},{"./internal/_curry2":"FYPD","./internal/_dispatchable":"D3LY","./internal/_map":"ijTz","./internal/_reduce":"bZwk","./internal/_xmap":"mwcZ","./curryN":"jdVg","./keys":"nfNX"}],"peNd":[function(require,module,exports) {
var r=require("./internal/_curry2"),e=require("./path"),u=r(function(r,u){return e([r],u)});module.exports=u;
},{"./internal/_curry2":"FYPD","./path":"hVwD"}],"ZWrn":[function(require,module,exports) {
var r=require("./internal/_curry2"),e=require("./map"),u=require("./prop"),i=r(function(r,i){return e(u(r),i)});module.exports=i;
},{"./internal/_curry2":"FYPD","./map":"bUOh","./prop":"peNd"}],"pvlO":[function(require,module,exports) {
var r=require("./internal/_curry2"),e=require("./internal/_map"),u=require("./curryN"),n=require("./max"),i=require("./pluck"),t=require("./reduce"),a=r(function(r,a){return u(t(n,0,i("length",a)),function(){var u=arguments,n=this;return r.apply(n,e(function(r){return r.apply(n,u)},a))})});module.exports=a;
},{"./internal/_curry2":"FYPD","./internal/_map":"ijTz","./curryN":"jdVg","./max":"sAsR","./pluck":"ZWrn","./reduce":"nr2x"}],"NPMA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPureSelectorsForModuleState=void 0;var e=i(require("ramda/src/__")),r=i(require("ramda/src/append")),a=i(require("ramda/src/path")),t=i(require("ramda/src/identity")),u=i(require("ramda/src/objOf")),d=i(require("ramda/src/converge")),l=i(require("ramda/src/map")),s=i(require("ramda/src/keys")),o=i(require("ramda/src/mergeAll")),c=i(require("ramda/src/compose"));function i(e){return e&&e.__esModule?e:{default:e}}var f=function(i,f){return(0,c.default)(o.default,(0,l.default)((0,d.default)(u.default,[t.default,(0,c.default)(a.default,(0,r.default)(e.default,i))])),s.default)(f)};exports.getPureSelectorsForModuleState=f;
},{"ramda/src/__":"QtsW","ramda/src/append":"rqPf","ramda/src/path":"hVwD","ramda/src/identity":"EBQt","ramda/src/objOf":"Lgc5","ramda/src/converge":"pvlO","ramda/src/map":"bUOh","ramda/src/keys":"nfNX","ramda/src/mergeAll":"wbBg","ramda/src/compose":"SRvh"}],"BLDe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getReducer=void 0;var e=function(e){var t=e.actionHandlersByActionType,r=e.initialState;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,n=arguments.length>1?arguments[1]:void 0,o=n.payload,i=n.type,a=t[i];return a?a(e,o):e}};exports.getReducer=e;
},{}],"Mp97":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.throwError=void 0;var r=function(r){return function(o){throw new Error("[".concat(r,"]: ").concat(o))}};exports.throwError=r;
},{}],"GD2V":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getProcedure=void 0;var e=c(require("ramda/src/isEmpty")),t=require("../constants/action-types"),r=require("../get-action-creator"),o=require("../get-action-handlers"),u=require("../get-initial-state"),a=require("../get-pure-selectors-for-module-state"),n=require("../get-reducer"),i=require("../throw-error");function c(e){return e&&e.__esModule?e:{default:e}}var s=function(c,s){var d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=(0,i.throwError)("getProcedure");(0,e.default)(c)&&l("moduleName cannot be an empty string"),"function"!=typeof s&&l("request should be a function"),"[object Object]"!==Object.prototype.toString.call(d)&&l("stateDefaults should be an object");var g=(0,o.getActionHandlers)(c,d),p=(0,u.getInitialState)(d),f=(0,n.getReducer)({actionHandlersByActionType:g,initialState:p}),y=(0,a.getPureSelectorsForModuleState)([c],p);return{actionCreatorsByType:t.ACTIONS.reduce(function(e,t){return e[t]=(0,r.getActionCreator)(c,t),e},{}),reducer:f,selectors:y}};exports.getProcedure=s;
},{"ramda/src/isEmpty":"YROz","../constants/action-types":"xGi1","../get-action-creator":"BT7v","../get-action-handlers":"sUou","../get-initial-state":"jLJN","../get-pure-selectors-for-module-state":"NPMA","../get-reducer":"BLDe","../throw-error":"Mp97"}]},{},["GD2V"], null)
//# sourceMappingURL=/get-procedure.js.map