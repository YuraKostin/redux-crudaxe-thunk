!function(t){var n={};function e(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,e),u.l=!0,u.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var u in t)e.d(r,u,function(n){return t[n]}.bind(null,u));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=15)}([function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(1),u=e(2);function c(t){return function n(e,c){switch(arguments.length){case 0:return n;case 1:return Object(u.a)(e)?n:Object(r.a)((function(n){return t(e,n)}));default:return Object(u.a)(e)&&Object(u.a)(c)?n:Object(u.a)(e)?Object(r.a)((function(n){return t(n,c)})):Object(u.a)(c)?Object(r.a)((function(n){return t(e,n)})):t(e,c)}}}},function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(2);function u(t){return function n(e){return 0===arguments.length||Object(r.a)(e)?n:t.apply(this,arguments)}}},function(t,n,e){"use strict";function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}e.d(n,"a",(function(){return r}))},function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return c})),e.d(n,"e",(function(){return a})),e.d(n,"a",(function(){return o}));const r="ERROR",u="RECEIVE",c="REQUEST",a="RESET",o=[r,u,c,a]},function(t,n,e){"use strict";function r(t,n){return Object.prototype.hasOwnProperty.call(n,t)}e.d(n,"a",(function(){return r}))},function(t,n,e){"use strict";function r(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,e){return n.apply(this,arguments)};case 3:return function(t,e,r){return n.apply(this,arguments)};case 4:return function(t,e,r,u){return n.apply(this,arguments)};case 5:return function(t,e,r,u,c){return n.apply(this,arguments)};case 6:return function(t,e,r,u,c,a){return n.apply(this,arguments)};case 7:return function(t,e,r,u,c,a,o){return n.apply(this,arguments)};case 8:return function(t,e,r,u,c,a,o,i){return n.apply(this,arguments)};case 9:return function(t,e,r,u,c,a,o,i,f){return n.apply(this,arguments)};case 10:return function(t,e,r,u,c,a,o,i,f,s){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}e.d(n,"a",(function(){return r}))},function(t,n,e){"use strict";n.a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},function(t,n,e){"use strict";function r(t){return"[object String]"===Object.prototype.toString.call(t)}e.d(n,"a",(function(){return r}))},function(t,n,e){"use strict";var r=e(1),u=e(4),c=e(11),a=!{toString:null}.propertyIsEnumerable("toString"),o=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],i=function(){return arguments.propertyIsEnumerable("length")}(),f=function(t,n){for(var e=0;e<t.length;){if(t[e]===n)return!0;e+=1}return!1},s="function"!=typeof Object.keys||i?Object(r.a)((function(t){if(Object(t)!==t)return[];var n,e,r=[],s=i&&Object(c.a)(t);for(n in t)!Object(u.a)(n,t)||s&&"length"===n||(r[r.length]=n);if(a)for(e=o.length-1;e>=0;)n=o[e],Object(u.a)(n,t)&&!f(r,n)&&(r[r.length]=n),e-=1;return r})):Object(r.a)((function(t){return Object(t)!==t?[]:Object.keys(t)}));n.a=s},function(t,n,e){"use strict";var r=e(5),u=e(1),c=e(0),a=e(2);var o=Object(c.a)((function(t,n){return 1===t?Object(u.a)(n):Object(r.a)(t,function t(n,e,u){return function(){for(var c=[],o=0,i=n,f=0;f<e.length||o<arguments.length;){var s;f<e.length&&(!Object(a.a)(e[f])||o>=arguments.length)?s=e[f]:(s=arguments[o],o+=1),c[f]=s,Object(a.a)(s)||(i-=1),f+=1}return i<=0?u.apply(this,c):Object(r.a)(i,t(n,c,u))}}(t,[],n))}));n.a=o},function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(3);const u=t=>n=>{const e={ERROR:r.b,RECEIVE:r.c,REQUEST:r.d,RESET:r.e};return`${t}/${e[n]}`}},function(t,n,e){"use strict";var r=e(4),u=Object.prototype.toString,c=function(){return"[object Arguments]"===u.call(arguments)?function(t){return"[object Arguments]"===u.call(t)}:function(t){return Object(r.a)("callee",t)}}();n.a=c},,function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(9),u=e(3),c=e(10);const a=Object(r.a)(2,(t,n)=>{const e=n.toUpperCase(),r=Object(c.a)(t);return{[u.b]:t=>({payload:t,type:r(u.b)}),[u.c]:t=>({payload:t,type:r(u.c)}),[u.d]:()=>({type:r(u.d)}),[u.e]:()=>({type:r(u.e)})}[e]})},function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));const r=t=>n=>{throw new Error(`[${t}]: ${n}`)}},function(t,n,e){"use strict";e.r(n),e.d(n,"getProcedure",(function(){return at}));var r=e(20),u=e(3),c=e(13),a=e(10),o=e(5);function i(t,n){return function(){return n.call(this,t.apply(this,arguments))}}var f=e(1),s=e(0),l=e(2);function p(t){return function n(e,r,u){switch(arguments.length){case 0:return n;case 1:return Object(l.a)(e)?n:Object(s.a)((function(n,r){return t(e,n,r)}));case 2:return Object(l.a)(e)&&Object(l.a)(r)?n:Object(l.a)(e)?Object(s.a)((function(n,e){return t(n,r,e)})):Object(l.a)(r)?Object(s.a)((function(n,r){return t(e,n,r)})):Object(f.a)((function(n){return t(e,r,n)}));default:return Object(l.a)(e)&&Object(l.a)(r)&&Object(l.a)(u)?n:Object(l.a)(e)&&Object(l.a)(r)?Object(s.a)((function(n,e){return t(n,e,u)})):Object(l.a)(e)&&Object(l.a)(u)?Object(s.a)((function(n,e){return t(n,r,e)})):Object(l.a)(r)&&Object(l.a)(u)?Object(s.a)((function(n,r){return t(e,n,r)})):Object(l.a)(e)?Object(f.a)((function(n){return t(n,r,u)})):Object(l.a)(r)?Object(f.a)((function(n){return t(e,n,u)})):Object(l.a)(u)?Object(f.a)((function(n){return t(e,r,n)})):t(e,r,u)}}}var b=e(6),y=e(7),j=Object(f.a)((function(t){return!!Object(b.a)(t)||!!t&&("object"==typeof t&&(!Object(y.a)(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),O=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();var d=Object(s.a)((function(t,n){return Object(o.a)(t.length,(function(){return t.apply(n,arguments)}))}));function h(t,n,e){for(var r=e.next();!r.done;){if((n=t["@@transducer/step"](n,r.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r=e.next()}return t["@@transducer/result"](n)}function g(t,n,e,r){return t["@@transducer/result"](e[r](d(t["@@transducer/step"],t),n))}var v="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function m(t,n,e){if("function"==typeof t&&(t=function(t){return new O(t)}(t)),j(e))return function(t,n,e){for(var r=0,u=e.length;r<u;){if((n=t["@@transducer/step"](n,e[r]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r+=1}return t["@@transducer/result"](n)}(t,n,e);if("function"==typeof e["fantasy-land/reduce"])return g(t,n,e,"fantasy-land/reduce");if(null!=e[v])return h(t,n,e[v]());if("function"==typeof e.next)return h(t,n,e);if("function"==typeof e.reduce)return g(t,n,e,"reduce");throw new TypeError("reduce: list must be array or iterable")}var E=p(m);function w(t,n){return function(){var e=arguments.length;if(0===e)return n();var r=arguments[e-1];return Object(b.a)(r)||"function"!=typeof r[t]?n.apply(this,arguments):r[t].apply(r,Array.prototype.slice.call(arguments,0,e-1))}}var S=p(w("slice",(function(t,n,e){return Array.prototype.slice.call(e,t,n)}))),A=Object(f.a)(w("tail",S(1,1/0)));function P(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return Object(o.a)(arguments[0].length,E(i,arguments[0],A(arguments)))}var q=Object(f.a)((function(t){return Object(y.a)(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()}));function x(){if(0===arguments.length)throw new Error("compose requires at least one argument");return P.apply(this,q(arguments))}var I=e(4);var R="function"==typeof Object.assign?Object.assign:function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),e=1,r=arguments.length;e<r;){var u=arguments[e];if(null!=u)for(var c in u)Object(I.a)(c,u)&&(n[c]=u[c]);e+=1}return n},T=Object(f.a)((function(t){return R.apply(null,[{}].concat(t))})),k=Object(s.a)((function(t,n){return[t,n]})),C=Object(s.a)((function(t,n){for(var e={},r=0;r<t.length;)t[r]in n&&(e[t[r]]=n[t[r]]),r+=1;return e}));const U=x(T,k({data:null,error:null,isInProcess:!1}),C(["data","error","isInProcess"])),_=(t,n)=>{const e=Object(a.a)(t),r=(c=n,t=>n=>Object.prototype.hasOwnProperty.call(c,t)?c[t]:n);var c;const o=r("data"),i=r("error"),f=r("isInProcess");return{[e(u.b)]:(t,n)=>({data:o(null),error:n,isInProcess:f(!1)}),[e(u.c)]:(t,n)=>({data:n,error:i(!1),isInProcess:f(!1)}),[e(u.d)]:()=>({data:o(null),error:i(null),isInProcess:!0}),[e(u.e)]:()=>U(n)}};function B(t){return null!=t&&"function"==typeof t["@@transducer/step"]}function M(t,n,e){return function(){if(0===arguments.length)return e();var r=Array.prototype.slice.call(arguments,0),u=r.pop();if(!Object(b.a)(u)){for(var c=0;c<t.length;){if("function"==typeof u[t[c]])return u[t[c]].apply(u,r);c+=1}if(B(u)){var a=n.apply(null,r);return a(u)}}return e.apply(this,arguments)}}function N(t,n){for(var e=0,r=n.length,u=Array(r);e<r;)u[e]=t(n[e]),e+=1;return u}var z=function(){return this.xf["@@transducer/init"]()},F=function(t){return this.xf["@@transducer/result"](t)},$=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=z,t.prototype["@@transducer/result"]=F,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},t}(),D=Object(s.a)((function(t,n){return new $(t,n)})),H=e(9),Q=e(8),V=Object(s.a)(M(["fantasy-land/map","map"],D,(function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return Object(H.a)(n.length,(function(){return t.call(this,n.apply(this,arguments))}));case"[object Object]":return m((function(e,r){return e[r]=t(n[r]),e}),{},Object(Q.a)(n));default:return N(t,n)}}))),L=Object(s.a)((function(t,n){return n>t?n:t})),W=Number.isInteger||function(t){return t<<0===t},X=Object(s.a)((function(t,n){var e=t<0?n.length+t:t;return Object(y.a)(n)?n.charAt(e):n[e]})),G=Object(s.a)((function(t,n){return t.map((function(t){for(var e,r=n,u=0;u<t.length;){if(null==r)return;e=t[u],r=W(e)?X(e,r):r[e],u+=1}return r}))})),J=Object(s.a)((function(t,n){return G([t],n)[0]})),K=Object(s.a)((function(t,n){return J([t],n)})),Y=Object(s.a)((function(t,n){return V(K(t),n)})),Z=Object(s.a)((function(t,n){return Object(H.a)(E(L,0,Y("length",n)),(function(){var e=arguments,r=this;return t.apply(r,N((function(t){return t.apply(r,e)}),n))}))})),tt=Object(s.a)((function(t,n){var e={};return e[t]=n,e}));function nt(t){return t}var et=Object(f.a)(nt);var rt=Object(s.a)((function(t,n){return function(t,n){var e;n=n||[];var r=(t=t||[]).length,u=n.length,c=[];for(e=0;e<r;)c[c.length]=t[e],e+=1;for(e=0;e<u;)c[c.length]=n[e],e+=1;return c}(n,[t])})),ut={"@@functional/placeholder":!0};var ct=e(14);const at=(t,n,e={})=>{const a=Object(ct.a)("getProcedure");Object(r.a)(t)&&a("moduleName cannot be an empty string"),"function"!=typeof n&&a("request should be a function"),"[object Object]"!==Object.prototype.toString.call(e)&&a("stateDefaults should be an object");const o=_(t,e),i=U(e),f=(t=>{const{actionHandlersByActionType:n,initialState:e}=t;return(t=e,{payload:r,type:u})=>{const c=n[u];return c?c(t,r):t}})({actionHandlersByActionType:o,initialState:i}),s=((t,n)=>x(T,V(Z(tt,[et,x(J,rt(ut,t))])),Q.a)(n))([t],i);return{actionCreatorsByType:u.a.reduce((n,e)=>(n[e]=Object(c.a)(t,e),n),{}),reducer:f,selectors:s}}},,,,,function(t,n,e){"use strict";var r=e(1),u=e(11),c=e(6);var a=e(7),o=Object(r.a)((function(t){return null!=t&&"function"==typeof t["fantasy-land/empty"]?t["fantasy-land/empty"]():null!=t&&null!=t.constructor&&"function"==typeof t.constructor["fantasy-land/empty"]?t.constructor["fantasy-land/empty"]():null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():Object(c.a)(t)?[]:Object(a.a)(t)?"":function(t){return"[object Object]"===Object.prototype.toString.call(t)}(t)?{}:Object(u.a)(t)?function(){return arguments}():void 0})),i=e(0);function f(t){for(var n,e=[];!(n=t.next()).done;)e.push(n.value);return e}function s(t,n,e){for(var r=0,u=e.length;r<u;){if(t(n,e[r]))return!0;r+=1}return!1}var l=e(4);var p="function"==typeof Object.is?Object.is:function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n},b=e(8),y=Object(r.a)((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function j(t,n,e,r){var u=f(t);function c(t,n){return O(t,n,e.slice(),r.slice())}return!s((function(t,n){return!s(c,n,t)}),f(n),u)}function O(t,n,e,r){if(p(t,n))return!0;var u,c,a=y(t);if(a!==y(n))return!1;if(null==t||null==n)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(a){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(c=String(u).match(/^function (\w*)/))?"":c[1]))return t===n;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!p(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!p(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1}for(var o=e.length-1;o>=0;){if(e[o]===t)return r[o]===n;o-=1}switch(a){case"Map":return t.size===n.size&&j(t.entries(),n.entries(),e.concat([t]),r.concat([n]));case"Set":return t.size===n.size&&j(t.values(),n.values(),e.concat([t]),r.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var i=Object(b.a)(t);if(i.length!==Object(b.a)(n).length)return!1;var f=e.concat([t]),s=r.concat([n]);for(o=i.length-1;o>=0;){var d=i[o];if(!Object(l.a)(d,n)||!O(n[d],t[d],f,s))return!1;o-=1}return!0}var d=Object(i.a)((function(t,n){return O(t,n,[],[])})),h=Object(r.a)((function(t){return null!=t&&d(t,o(t))}));n.a=h}]);