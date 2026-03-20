function sv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Eg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jg={exports:{}},Ul={},Cg={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rs=Symbol.for("react.element"),av=Symbol.for("react.portal"),lv=Symbol.for("react.fragment"),cv=Symbol.for("react.strict_mode"),uv=Symbol.for("react.profiler"),dv=Symbol.for("react.provider"),fv=Symbol.for("react.context"),pv=Symbol.for("react.forward_ref"),hv=Symbol.for("react.suspense"),mv=Symbol.for("react.memo"),gv=Symbol.for("react.lazy"),bp=Symbol.iterator;function yv(e){return e===null||typeof e!="object"?null:(e=bp&&e[bp]||e["@@iterator"],typeof e=="function"?e:null)}var Fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tg=Object.assign,Ag={};function si(e,t,n){this.props=e,this.context=t,this.refs=Ag,this.updater=n||Fg}si.prototype.isReactComponent={};si.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};si.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rg(){}Rg.prototype=si.prototype;function Bd(e,t,n){this.props=e,this.context=t,this.refs=Ag,this.updater=n||Fg}var Vd=Bd.prototype=new Rg;Vd.constructor=Bd;Tg(Vd,si.prototype);Vd.isPureReactComponent=!0;var $p=Array.isArray,Pg=Object.prototype.hasOwnProperty,Wd={current:null},zg={key:!0,ref:!0,__self:!0,__source:!0};function Og(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Pg.call(t,r)&&!zg.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),f=0;f<a;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Rs,type:e,key:i,ref:s,props:o,_owner:Wd.current}}function xv(e,t){return{$$typeof:Rs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rs}function vv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wp=/\/+/g;function Sc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vv(""+e.key):t.toString(36)}function _a(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Rs:case av:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Sc(s,0):r,$p(o)?(n="",e!=null&&(n=e.replace(wp,"$&/")+"/"),_a(o,t,n,"",function(f){return f})):o!=null&&(Hd(o)&&(o=xv(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(wp,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",$p(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+Sc(i,a);s+=_a(i,t,n,c,o)}else if(c=yv(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+Sc(i,a++),s+=_a(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function qs(e,t,n){if(e==null)return e;var r=[],o=0;return _a(e,r,"","",function(i){return t.call(n,i,o++)}),r}function bv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Rt={current:null},Ea={transition:null},$v={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:Wd};function Ng(){throw Error("act(...) is not supported in production builds of React.")}ge.Children={map:qs,forEach:function(e,t,n){qs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qs(e,function(){t++}),t},toArray:function(e){return qs(e,function(t){return t})||[]},only:function(e){if(!Hd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ge.Component=si;ge.Fragment=lv;ge.Profiler=uv;ge.PureComponent=Bd;ge.StrictMode=cv;ge.Suspense=hv;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v;ge.act=Ng;ge.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Tg({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Wd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Pg.call(t,c)&&!zg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var f=0;f<c;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:Rs,type:e.type,key:o,ref:i,props:r,_owner:s}};ge.createContext=function(e){return e={$$typeof:fv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dv,_context:e},e.Consumer=e};ge.createElement=Og;ge.createFactory=function(e){var t=Og.bind(null,e);return t.type=e,t};ge.createRef=function(){return{current:null}};ge.forwardRef=function(e){return{$$typeof:pv,render:e}};ge.isValidElement=Hd;ge.lazy=function(e){return{$$typeof:gv,_payload:{_status:-1,_result:e},_init:bv}};ge.memo=function(e,t){return{$$typeof:mv,type:e,compare:t===void 0?null:t}};ge.startTransition=function(e){var t=Ea.transition;Ea.transition={};try{e()}finally{Ea.transition=t}};ge.unstable_act=Ng;ge.useCallback=function(e,t){return Rt.current.useCallback(e,t)};ge.useContext=function(e){return Rt.current.useContext(e)};ge.useDebugValue=function(){};ge.useDeferredValue=function(e){return Rt.current.useDeferredValue(e)};ge.useEffect=function(e,t){return Rt.current.useEffect(e,t)};ge.useId=function(){return Rt.current.useId()};ge.useImperativeHandle=function(e,t,n){return Rt.current.useImperativeHandle(e,t,n)};ge.useInsertionEffect=function(e,t){return Rt.current.useInsertionEffect(e,t)};ge.useLayoutEffect=function(e,t){return Rt.current.useLayoutEffect(e,t)};ge.useMemo=function(e,t){return Rt.current.useMemo(e,t)};ge.useReducer=function(e,t,n){return Rt.current.useReducer(e,t,n)};ge.useRef=function(e){return Rt.current.useRef(e)};ge.useState=function(e){return Rt.current.useState(e)};ge.useSyncExternalStore=function(e,t,n){return Rt.current.useSyncExternalStore(e,t,n)};ge.useTransition=function(){return Rt.current.useTransition()};ge.version="18.3.1";Cg.exports=ge;var M=Cg.exports;const se=Eg(M),wv=sv({__proto__:null,default:se},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv=M,kv=Symbol.for("react.element"),_v=Symbol.for("react.fragment"),Ev=Object.prototype.hasOwnProperty,jv=Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cv={key:!0,ref:!0,__self:!0,__source:!0};function Ig(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ev.call(t,r)&&!Cv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:kv,type:e,key:i,ref:s,props:o,_owner:jv.current}}Ul.Fragment=_v;Ul.jsx=Ig;Ul.jsxs=Ig;jg.exports=Ul;var l=jg.exports,Su={},Lg={exports:{}},en={},Dg={exports:{}},Ug={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,P){var L=I.length;I.push(P);e:for(;0<L;){var Q=L-1>>>1,V=I[Q];if(0<o(V,P))I[Q]=P,I[L]=V,L=Q;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var P=I[0],L=I.pop();if(L!==P){I[0]=L;e:for(var Q=0,V=I.length,Y=V>>>1;Q<Y;){var G=2*(Q+1)-1,D=I[G],W=G+1,te=I[W];if(0>o(D,L))W<V&&0>o(te,D)?(I[Q]=te,I[W]=L,Q=W):(I[Q]=D,I[G]=L,Q=G);else if(W<V&&0>o(te,L))I[Q]=te,I[W]=L,Q=W;else break e}}return P}function o(I,P){var L=I.sortIndex-P.sortIndex;return L!==0?L:I.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],f=[],u=1,d=null,p=3,m=!1,h=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var P=n(f);P!==null;){if(P.callback===null)r(f);else if(P.startTime<=I)r(f),P.sortIndex=P.expirationTime,t(c,P);else break;P=n(f)}}function $(I){if(b=!1,v(I),!h)if(n(c)!==null)h=!0,E(C);else{var P=n(f);P!==null&&w($,P.startTime-I)}}function C(I,P){h=!1,b&&(b=!1,g(x),x=-1),m=!0;var L=p;try{for(v(P),d=n(c);d!==null&&(!(d.expirationTime>P)||I&&!A());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,p=d.priorityLevel;var V=Q(d.expirationTime<=P);P=e.unstable_now(),typeof V=="function"?d.callback=V:d===n(c)&&r(c),v(P)}else r(c);d=n(c)}if(d!==null)var Y=!0;else{var G=n(f);G!==null&&w($,G.startTime-P),Y=!1}return Y}finally{d=null,p=L,m=!1}}var _=!1,F=null,x=-1,S=5,T=-1;function A(){return!(e.unstable_now()-T<S)}function R(){if(F!==null){var I=e.unstable_now();T=I;var P=!0;try{P=F(!0,I)}finally{P?N():(_=!1,F=null)}}else _=!1}var N;if(typeof y=="function")N=function(){y(R)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,U=O.port2;O.port1.onmessage=R,N=function(){U.postMessage(null)}}else N=function(){k(R,0)};function E(I){F=I,_||(_=!0,N())}function w(I,P){x=k(function(){I(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){h||m||(h=!0,E(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(I){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var L=p;p=P;try{return I()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,P){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=p;p=I;try{return P()}finally{p=L}},e.unstable_scheduleCallback=function(I,P,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,I){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=L+V,I={id:u++,callback:P,priorityLevel:I,startTime:L,expirationTime:V,sortIndex:-1},L>Q?(I.sortIndex=L,t(f,I),n(c)===null&&I===n(f)&&(b?(g(x),x=-1):b=!0,w($,L-Q))):(I.sortIndex=V,t(c,I),h||m||(h=!0,E(C))),I},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(I){var P=p;return function(){var L=p;p=P;try{return I.apply(this,arguments)}finally{p=L}}}})(Ug);Dg.exports=Ug;var Fv=Dg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=M,Zt=Fv;function Z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mg=new Set,as={};function lo(e,t){qo(e,t),qo(e+"Capture",t)}function qo(e,t){for(as[e]=t,e=0;e<t.length;e++)Mg.add(t[e])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=Object.prototype.hasOwnProperty,Av=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sp={},kp={};function Rv(e){return ku.call(kp,e)?!0:ku.call(Sp,e)?!1:Av.test(e)?kp[e]=!0:(Sp[e]=!0,!1)}function Pv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zv(e,t,n,r){if(t===null||typeof t>"u"||Pv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pt(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xt[e]=new Pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xt[t]=new Pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xt[e]=new Pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xt[e]=new Pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xt[e]=new Pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xt[e]=new Pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xt[e]=new Pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xt[e]=new Pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xt[e]=new Pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var qd=/[\-:]([a-z])/g;function Gd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qd,Gd);xt[t]=new Pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qd,Gd);xt[t]=new Pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qd,Gd);xt[t]=new Pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xt[e]=new Pt(e,1,!1,e.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xt[e]=new Pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qd(e,t,n,r){var o=xt.hasOwnProperty(t)?xt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zv(t,n,o,r)&&(n=null),r||o===null?Rv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kn=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gs=Symbol.for("react.element"),Eo=Symbol.for("react.portal"),jo=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),_u=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),Vg=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),Eu=Symbol.for("react.suspense"),ju=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),Wg=Symbol.for("react.offscreen"),_p=Symbol.iterator;function xi(e){return e===null||typeof e!="object"?null:(e=_p&&e[_p]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Object.assign,kc;function Ii(e){if(kc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kc=t&&t[1]||""}return`
`+kc+e}var _c=!1;function Ec(e,t){if(!e||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ii(e):""}function Ov(e){switch(e.tag){case 5:return Ii(e.type);case 16:return Ii("Lazy");case 13:return Ii("Suspense");case 19:return Ii("SuspenseList");case 0:case 2:case 15:return e=Ec(e.type,!1),e;case 11:return e=Ec(e.type.render,!1),e;case 1:return e=Ec(e.type,!0),e;default:return""}}function Cu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jo:return"Fragment";case Eo:return"Portal";case _u:return"Profiler";case Yd:return"StrictMode";case Eu:return"Suspense";case ju:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vg:return(e.displayName||"Context")+".Consumer";case Bg:return(e._context.displayName||"Context")+".Provider";case Kd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xd:return t=e.displayName||null,t!==null?t:Cu(e.type)||"Memo";case or:t=e._payload,e=e._init;try{return Cu(e(t))}catch{}}return null}function Nv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(t);case 8:return t===Yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Iv(e){var t=Hg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qs(e){e._valueTracker||(e._valueTracker=Iv(e))}function qg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fu(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ep(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_r(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gg(e,t){t=t.checked,t!=null&&Qd(e,"checked",t,!1)}function Tu(e,t){Gg(e,t);var n=_r(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Au(e,t.type,n):t.hasOwnProperty("defaultValue")&&Au(e,t.type,_r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Au(e,t,n){(t!=="number"||Ka(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Li=Array.isArray;function Uo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_r(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ru(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Z(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Z(92));if(Li(n)){if(1<n.length)throw Error(Z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_r(n)}}function Qg(e,t){var n=_r(t.value),r=_r(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ys,Kg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ys=Ys||document.createElement("div"),Ys.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ys.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ls(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lv=["Webkit","ms","Moz","O"];Object.keys(qi).forEach(function(e){Lv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qi[t]=qi[e]})});function Xg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qi.hasOwnProperty(e)&&qi[e]?(""+t).trim():t+"px"}function Jg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Xg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Dv=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zu(e,t){if(t){if(Dv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Z(62))}}function Ou(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function Jd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Iu=null,Mo=null,Bo=null;function Tp(e){if(e=Os(e)){if(typeof Iu!="function")throw Error(Z(280));var t=e.stateNode;t&&(t=Hl(t),Iu(e.stateNode,e.type,t))}}function Zg(e){Mo?Bo?Bo.push(e):Bo=[e]:Mo=e}function e0(){if(Mo){var e=Mo,t=Bo;if(Bo=Mo=null,Tp(e),t)for(e=0;e<t.length;e++)Tp(t[e])}}function t0(e,t){return e(t)}function n0(){}var jc=!1;function r0(e,t,n){if(jc)return e(t,n);jc=!0;try{return t0(e,t,n)}finally{jc=!1,(Mo!==null||Bo!==null)&&(n0(),e0())}}function cs(e,t){var n=e.stateNode;if(n===null)return null;var r=Hl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Z(231,t,typeof n));return n}var Lu=!1;if(Hn)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{Lu=!1}function Uv(e,t,n,r,o,i,s,a,c){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(u){this.onError(u)}}var Gi=!1,Xa=null,Ja=!1,Du=null,Mv={onError:function(e){Gi=!0,Xa=e}};function Bv(e,t,n,r,o,i,s,a,c){Gi=!1,Xa=null,Uv.apply(Mv,arguments)}function Vv(e,t,n,r,o,i,s,a,c){if(Bv.apply(this,arguments),Gi){if(Gi){var f=Xa;Gi=!1,Xa=null}else throw Error(Z(198));Ja||(Ja=!0,Du=f)}}function co(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function o0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ap(e){if(co(e)!==e)throw Error(Z(188))}function Wv(e){var t=e.alternate;if(!t){if(t=co(e),t===null)throw Error(Z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ap(o),e;if(i===r)return Ap(o),t;i=i.sibling}throw Error(Z(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(Z(189))}}if(n.alternate!==r)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?e:t}function i0(e){return e=Wv(e),e!==null?s0(e):null}function s0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=s0(e);if(t!==null)return t;e=e.sibling}return null}var a0=Zt.unstable_scheduleCallback,Rp=Zt.unstable_cancelCallback,Hv=Zt.unstable_shouldYield,qv=Zt.unstable_requestPaint,Qe=Zt.unstable_now,Gv=Zt.unstable_getCurrentPriorityLevel,Zd=Zt.unstable_ImmediatePriority,l0=Zt.unstable_UserBlockingPriority,Za=Zt.unstable_NormalPriority,Qv=Zt.unstable_LowPriority,c0=Zt.unstable_IdlePriority,Ml=null,Rn=null;function Yv(e){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:Jv,Kv=Math.log,Xv=Math.LN2;function Jv(e){return e>>>=0,e===0?32:31-(Kv(e)/Xv|0)|0}var Ks=64,Xs=4194304;function Di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function el(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Di(a):(i&=s,i!==0&&(r=Di(i)))}else s=n&~o,s!==0?r=Di(s):i!==0&&(r=Di(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$n(t),o=1<<n,r|=e[n],t&=~o;return r}function Zv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-$n(i),a=1<<s,c=o[s];c===-1?(!(a&n)||a&r)&&(o[s]=Zv(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function Uu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function u0(){var e=Ks;return Ks<<=1,!(Ks&4194240)&&(Ks=64),e}function Cc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ps(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$n(t),e[t]=n}function tb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-$n(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ef(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$n(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var _e=0;function d0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var f0,tf,p0,h0,m0,Mu=!1,Js=[],hr=null,mr=null,gr=null,us=new Map,ds=new Map,sr=[],nb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(e,t){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":us.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ds.delete(t.pointerId)}}function bi(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Os(t),t!==null&&tf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rb(e,t,n,r,o){switch(t){case"focusin":return hr=bi(hr,e,t,n,r,o),!0;case"dragenter":return mr=bi(mr,e,t,n,r,o),!0;case"mouseover":return gr=bi(gr,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return us.set(i,bi(us.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ds.set(i,bi(ds.get(i)||null,e,t,n,r,o)),!0}return!1}function g0(e){var t=Ur(e.target);if(t!==null){var n=co(t);if(n!==null){if(t=n.tag,t===13){if(t=o0(n),t!==null){e.blockedOn=t,m0(e.priority,function(){p0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ja(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Nu=r,n.target.dispatchEvent(r),Nu=null}else return t=Os(n),t!==null&&tf(t),e.blockedOn=n,!1;t.shift()}return!0}function zp(e,t,n){ja(e)&&n.delete(t)}function ob(){Mu=!1,hr!==null&&ja(hr)&&(hr=null),mr!==null&&ja(mr)&&(mr=null),gr!==null&&ja(gr)&&(gr=null),us.forEach(zp),ds.forEach(zp)}function $i(e,t){e.blockedOn===t&&(e.blockedOn=null,Mu||(Mu=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,ob)))}function fs(e){function t(o){return $i(o,e)}if(0<Js.length){$i(Js[0],e);for(var n=1;n<Js.length;n++){var r=Js[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hr!==null&&$i(hr,e),mr!==null&&$i(mr,e),gr!==null&&$i(gr,e),us.forEach(t),ds.forEach(t),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)g0(n),n.blockedOn===null&&sr.shift()}var Vo=Kn.ReactCurrentBatchConfig,tl=!0;function ib(e,t,n,r){var o=_e,i=Vo.transition;Vo.transition=null;try{_e=1,nf(e,t,n,r)}finally{_e=o,Vo.transition=i}}function sb(e,t,n,r){var o=_e,i=Vo.transition;Vo.transition=null;try{_e=4,nf(e,t,n,r)}finally{_e=o,Vo.transition=i}}function nf(e,t,n,r){if(tl){var o=Bu(e,t,n,r);if(o===null)Lc(e,t,r,nl,n),Pp(e,r);else if(rb(o,e,t,n,r))r.stopPropagation();else if(Pp(e,r),t&4&&-1<nb.indexOf(e)){for(;o!==null;){var i=Os(o);if(i!==null&&f0(i),i=Bu(e,t,n,r),i===null&&Lc(e,t,r,nl,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Lc(e,t,r,null,n)}}var nl=null;function Bu(e,t,n,r){if(nl=null,e=Jd(r),e=Ur(e),e!==null)if(t=co(e),t===null)e=null;else if(n=t.tag,n===13){if(e=o0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nl=e,null}function y0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gv()){case Zd:return 1;case l0:return 4;case Za:case Qv:return 16;case c0:return 536870912;default:return 16}default:return 16}}var cr=null,rf=null,Ca=null;function x0(){if(Ca)return Ca;var e,t=rf,n=t.length,r,o="value"in cr?cr.value:cr.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Ca=o.slice(e,1<r?1-r:void 0)}function Fa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zs(){return!0}function Op(){return!1}function tn(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zs:Op,this.isPropagationStopped=Op,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),t}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},of=tn(ai),zs=Ue({},ai,{view:0,detail:0}),ab=tn(zs),Fc,Tc,wi,Bl=Ue({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wi&&(wi&&e.type==="mousemove"?(Fc=e.screenX-wi.screenX,Tc=e.screenY-wi.screenY):Tc=Fc=0,wi=e),Fc)},movementY:function(e){return"movementY"in e?e.movementY:Tc}}),Np=tn(Bl),lb=Ue({},Bl,{dataTransfer:0}),cb=tn(lb),ub=Ue({},zs,{relatedTarget:0}),Ac=tn(ub),db=Ue({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),fb=tn(db),pb=Ue({},ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hb=tn(pb),mb=Ue({},ai,{data:0}),Ip=tn(mb),gb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xb[e])?!!t[e]:!1}function sf(){return vb}var bb=Ue({},zs,{key:function(e){if(e.key){var t=gb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(e){return e.type==="keypress"?Fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$b=tn(bb),wb=Ue({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=tn(wb),Sb=Ue({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),kb=tn(Sb),_b=Ue({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eb=tn(_b),jb=Ue({},Bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cb=tn(jb),Fb=[9,13,27,32],af=Hn&&"CompositionEvent"in window,Qi=null;Hn&&"documentMode"in document&&(Qi=document.documentMode);var Tb=Hn&&"TextEvent"in window&&!Qi,v0=Hn&&(!af||Qi&&8<Qi&&11>=Qi),Dp=" ",Up=!1;function b0(e,t){switch(e){case"keyup":return Fb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Co=!1;function Ab(e,t){switch(e){case"compositionend":return $0(t);case"keypress":return t.which!==32?null:(Up=!0,Dp);case"textInput":return e=t.data,e===Dp&&Up?null:e;default:return null}}function Rb(e,t){if(Co)return e==="compositionend"||!af&&b0(e,t)?(e=x0(),Ca=rf=cr=null,Co=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return v0&&t.locale!=="ko"?null:t.data;default:return null}}var Pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pb[e.type]:t==="textarea"}function w0(e,t,n,r){Zg(r),t=rl(t,"onChange"),0<t.length&&(n=new of("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yi=null,ps=null;function zb(e){P0(e,0)}function Vl(e){var t=Ao(e);if(qg(t))return e}function Ob(e,t){if(e==="change")return t}var S0=!1;if(Hn){var Rc;if(Hn){var Pc="oninput"in document;if(!Pc){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Pc=typeof Bp.oninput=="function"}Rc=Pc}else Rc=!1;S0=Rc&&(!document.documentMode||9<document.documentMode)}function Vp(){Yi&&(Yi.detachEvent("onpropertychange",k0),ps=Yi=null)}function k0(e){if(e.propertyName==="value"&&Vl(ps)){var t=[];w0(t,ps,e,Jd(e)),r0(zb,t)}}function Nb(e,t,n){e==="focusin"?(Vp(),Yi=t,ps=n,Yi.attachEvent("onpropertychange",k0)):e==="focusout"&&Vp()}function Ib(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vl(ps)}function Lb(e,t){if(e==="click")return Vl(t)}function Db(e,t){if(e==="input"||e==="change")return Vl(t)}function Ub(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kn=typeof Object.is=="function"?Object.is:Ub;function hs(e,t){if(kn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ku.call(t,o)||!kn(e[o],t[o]))return!1}return!0}function Wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hp(e,t){var n=Wp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wp(n)}}function _0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function E0(){for(var e=window,t=Ka();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ka(e.document)}return t}function lf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mb(e){var t=E0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_0(n.ownerDocument.documentElement,n)){if(r!==null&&lf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Hp(n,i);var s=Hp(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bb=Hn&&"documentMode"in document&&11>=document.documentMode,Fo=null,Vu=null,Ki=null,Wu=!1;function qp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wu||Fo==null||Fo!==Ka(r)||(r=Fo,"selectionStart"in r&&lf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ki&&hs(Ki,r)||(Ki=r,r=rl(Vu,"onSelect"),0<r.length&&(t=new of("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fo)))}function ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var To={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},zc={},j0={};Hn&&(j0=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function Wl(e){if(zc[e])return zc[e];if(!To[e])return e;var t=To[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in j0)return zc[e]=t[n];return e}var C0=Wl("animationend"),F0=Wl("animationiteration"),T0=Wl("animationstart"),A0=Wl("transitionend"),R0=new Map,Gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){R0.set(e,t),lo(t,[e])}for(var Oc=0;Oc<Gp.length;Oc++){var Nc=Gp[Oc],Vb=Nc.toLowerCase(),Wb=Nc[0].toUpperCase()+Nc.slice(1);jr(Vb,"on"+Wb)}jr(C0,"onAnimationEnd");jr(F0,"onAnimationIteration");jr(T0,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(A0,"onTransitionEnd");qo("onMouseEnter",["mouseout","mouseover"]);qo("onMouseLeave",["mouseout","mouseover"]);qo("onPointerEnter",["pointerout","pointerover"]);qo("onPointerLeave",["pointerout","pointerover"]);lo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lo("onBeforeInput",["compositionend","keypress","textInput","paste"]);lo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function Qp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vv(r,t,void 0,e),e.currentTarget=null}function P0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,f=a.currentTarget;if(a=a.listener,c!==i&&o.isPropagationStopped())break e;Qp(o,a,f),i=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,f=a.currentTarget,a=a.listener,c!==i&&o.isPropagationStopped())break e;Qp(o,a,f),i=c}}}if(Ja)throw e=Du,Ja=!1,Du=null,e}function Fe(e,t){var n=t[Yu];n===void 0&&(n=t[Yu]=new Set);var r=e+"__bubble";n.has(r)||(z0(t,e,2,!1),n.add(r))}function Ic(e,t,n){var r=0;t&&(r|=4),z0(n,e,r,t)}var ta="_reactListening"+Math.random().toString(36).slice(2);function ms(e){if(!e[ta]){e[ta]=!0,Mg.forEach(function(n){n!=="selectionchange"&&(Hb.has(n)||Ic(n,!1,e),Ic(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ta]||(t[ta]=!0,Ic("selectionchange",!1,t))}}function z0(e,t,n,r){switch(y0(t)){case 1:var o=ib;break;case 4:o=sb;break;default:o=nf}n=o.bind(null,t,n,e),o=void 0,!Lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Lc(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Ur(a),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}a=a.parentNode}}r=r.return}r0(function(){var f=i,u=Jd(n),d=[];e:{var p=R0.get(e);if(p!==void 0){var m=of,h=e;switch(e){case"keypress":if(Fa(n)===0)break e;case"keydown":case"keyup":m=$b;break;case"focusin":h="focus",m=Ac;break;case"focusout":h="blur",m=Ac;break;case"beforeblur":case"afterblur":m=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=cb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=kb;break;case C0:case F0:case T0:m=fb;break;case A0:m=Eb;break;case"scroll":m=ab;break;case"wheel":m=Cb;break;case"copy":case"cut":case"paste":m=hb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Lp}var b=(t&4)!==0,k=!b&&e==="scroll",g=b?p!==null?p+"Capture":null:p;b=[];for(var y=f,v;y!==null;){v=y;var $=v.stateNode;if(v.tag===5&&$!==null&&(v=$,g!==null&&($=cs(y,g),$!=null&&b.push(gs(y,$,v)))),k)break;y=y.return}0<b.length&&(p=new m(p,h,null,n,u),d.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==Nu&&(h=n.relatedTarget||n.fromElement)&&(Ur(h)||h[qn]))break e;if((m||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,m?(h=n.relatedTarget||n.toElement,m=f,h=h?Ur(h):null,h!==null&&(k=co(h),h!==k||h.tag!==5&&h.tag!==6)&&(h=null)):(m=null,h=f),m!==h)){if(b=Np,$="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(b=Lp,$="onPointerLeave",g="onPointerEnter",y="pointer"),k=m==null?p:Ao(m),v=h==null?p:Ao(h),p=new b($,y+"leave",m,n,u),p.target=k,p.relatedTarget=v,$=null,Ur(u)===f&&(b=new b(g,y+"enter",h,n,u),b.target=v,b.relatedTarget=k,$=b),k=$,m&&h)t:{for(b=m,g=h,y=0,v=b;v;v=mo(v))y++;for(v=0,$=g;$;$=mo($))v++;for(;0<y-v;)b=mo(b),y--;for(;0<v-y;)g=mo(g),v--;for(;y--;){if(b===g||g!==null&&b===g.alternate)break t;b=mo(b),g=mo(g)}b=null}else b=null;m!==null&&Yp(d,p,m,b,!1),h!==null&&k!==null&&Yp(d,k,h,b,!0)}}e:{if(p=f?Ao(f):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var C=Ob;else if(Mp(p))if(S0)C=Db;else{C=Ib;var _=Nb}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Lb);if(C&&(C=C(e,f))){w0(d,C,n,u);break e}_&&_(e,p,f),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Au(p,"number",p.value)}switch(_=f?Ao(f):window,e){case"focusin":(Mp(_)||_.contentEditable==="true")&&(Fo=_,Vu=f,Ki=null);break;case"focusout":Ki=Vu=Fo=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,qp(d,n,u);break;case"selectionchange":if(Bb)break;case"keydown":case"keyup":qp(d,n,u)}var F;if(af)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Co?b0(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(v0&&n.locale!=="ko"&&(Co||x!=="onCompositionStart"?x==="onCompositionEnd"&&Co&&(F=x0()):(cr=u,rf="value"in cr?cr.value:cr.textContent,Co=!0)),_=rl(f,x),0<_.length&&(x=new Ip(x,e,null,n,u),d.push({event:x,listeners:_}),F?x.data=F:(F=$0(n),F!==null&&(x.data=F)))),(F=Tb?Ab(e,n):Rb(e,n))&&(f=rl(f,"onBeforeInput"),0<f.length&&(u=new Ip("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:f}),u.data=F))}P0(d,t)})}function gs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=cs(e,n),i!=null&&r.unshift(gs(e,i,o)),i=cs(e,t),i!=null&&r.push(gs(e,i,o))),e=e.return}return r}function mo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yp(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,f=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&f!==null&&(a=f,o?(c=cs(n,i),c!=null&&s.unshift(gs(n,c,a))):o||(c=cs(n,i),c!=null&&s.push(gs(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var qb=/\r\n?/g,Gb=/\u0000|\uFFFD/g;function Kp(e){return(typeof e=="string"?e:""+e).replace(qb,`
`).replace(Gb,"")}function na(e,t,n){if(t=Kp(t),Kp(e)!==t&&n)throw Error(Z(425))}function ol(){}var Hu=null,qu=null;function Gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,Qb=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,Yb=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(e){return Xp.resolve(null).then(e).catch(Kb)}:Qu;function Kb(e){setTimeout(function(){throw e})}function Dc(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),fs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);fs(t)}function yr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var li=Math.random().toString(36).slice(2),An="__reactFiber$"+li,ys="__reactProps$"+li,qn="__reactContainer$"+li,Yu="__reactEvents$"+li,Xb="__reactListeners$"+li,Jb="__reactHandles$"+li;function Ur(e){var t=e[An];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qn]||n[An]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jp(e);e!==null;){if(n=e[An])return n;e=Jp(e)}return t}e=n,n=e.parentNode}return null}function Os(e){return e=e[An]||e[qn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ao(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Z(33))}function Hl(e){return e[ys]||null}var Ku=[],Ro=-1;function Cr(e){return{current:e}}function Ae(e){0>Ro||(e.current=Ku[Ro],Ku[Ro]=null,Ro--)}function Ce(e,t){Ro++,Ku[Ro]=e.current,e.current=t}var Er={},Et=Cr(Er),Ut=Cr(!1),Zr=Er;function Go(e,t){var n=e.type.contextTypes;if(!n)return Er;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Mt(e){return e=e.childContextTypes,e!=null}function il(){Ae(Ut),Ae(Et)}function Zp(e,t,n){if(Et.current!==Er)throw Error(Z(168));Ce(Et,t),Ce(Ut,n)}function O0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(Z(108,Nv(e)||"Unknown",o));return Ue({},n,r)}function sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Er,Zr=Et.current,Ce(Et,e),Ce(Ut,Ut.current),!0}function eh(e,t,n){var r=e.stateNode;if(!r)throw Error(Z(169));n?(e=O0(e,t,Zr),r.__reactInternalMemoizedMergedChildContext=e,Ae(Ut),Ae(Et),Ce(Et,e)):Ae(Ut),Ce(Ut,n)}var Mn=null,ql=!1,Uc=!1;function N0(e){Mn===null?Mn=[e]:Mn.push(e)}function Zb(e){ql=!0,N0(e)}function Fr(){if(!Uc&&Mn!==null){Uc=!0;var e=0,t=_e;try{var n=Mn;for(_e=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mn=null,ql=!1}catch(o){throw Mn!==null&&(Mn=Mn.slice(e+1)),a0(Zd,Fr),o}finally{_e=t,Uc=!1}}return null}var Po=[],zo=0,al=null,ll=0,rn=[],on=0,eo=null,Bn=1,Vn="";function Or(e,t){Po[zo++]=ll,Po[zo++]=al,al=e,ll=t}function I0(e,t,n){rn[on++]=Bn,rn[on++]=Vn,rn[on++]=eo,eo=e;var r=Bn;e=Vn;var o=32-$n(r)-1;r&=~(1<<o),n+=1;var i=32-$n(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Bn=1<<32-$n(t)+o|n<<o|r,Vn=i+e}else Bn=1<<i|n<<o|r,Vn=e}function cf(e){e.return!==null&&(Or(e,1),I0(e,1,0))}function uf(e){for(;e===al;)al=Po[--zo],Po[zo]=null,ll=Po[--zo],Po[zo]=null;for(;e===eo;)eo=rn[--on],rn[on]=null,Vn=rn[--on],rn[on]=null,Bn=rn[--on],rn[on]=null}var Jt=null,Kt=null,Pe=!1,xn=null;function L0(e,t){var n=sn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function th(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Jt=e,Kt=yr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Jt=e,Kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=eo!==null?{id:Bn,overflow:Vn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=sn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Jt=e,Kt=null,!0):!1;default:return!1}}function Xu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ju(e){if(Pe){var t=Kt;if(t){var n=t;if(!th(e,t)){if(Xu(e))throw Error(Z(418));t=yr(n.nextSibling);var r=Jt;t&&th(e,t)?L0(r,n):(e.flags=e.flags&-4097|2,Pe=!1,Jt=e)}}else{if(Xu(e))throw Error(Z(418));e.flags=e.flags&-4097|2,Pe=!1,Jt=e}}}function nh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Jt=e}function ra(e){if(e!==Jt)return!1;if(!Pe)return nh(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gu(e.type,e.memoizedProps)),t&&(t=Kt)){if(Xu(e))throw D0(),Error(Z(418));for(;t;)L0(e,t),t=yr(t.nextSibling)}if(nh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Kt=yr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Kt=null}}else Kt=Jt?yr(e.stateNode.nextSibling):null;return!0}function D0(){for(var e=Kt;e;)e=yr(e.nextSibling)}function Qo(){Kt=Jt=null,Pe=!1}function df(e){xn===null?xn=[e]:xn.push(e)}var e$=Kn.ReactCurrentBatchConfig;function Si(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var r=n.stateNode}if(!r)throw Error(Z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,e))}return e}function oa(e,t){throw e=Object.prototype.toString.call(t),Error(Z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rh(e){var t=e._init;return t(e._payload)}function U0(e){function t(g,y){if(e){var v=g.deletions;v===null?(g.deletions=[y],g.flags|=16):v.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function o(g,y){return g=$r(g,y),g.index=0,g.sibling=null,g}function i(g,y,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<y?(g.flags|=2,y):v):(g.flags|=2,y)):(g.flags|=1048576,y)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,y,v,$){return y===null||y.tag!==6?(y=Gc(v,g.mode,$),y.return=g,y):(y=o(y,v),y.return=g,y)}function c(g,y,v,$){var C=v.type;return C===jo?u(g,y,v.props.children,$,v.key):y!==null&&(y.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===or&&rh(C)===y.type)?($=o(y,v.props),$.ref=Si(g,y,v),$.return=g,$):($=Na(v.type,v.key,v.props,null,g.mode,$),$.ref=Si(g,y,v),$.return=g,$)}function f(g,y,v,$){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=Qc(v,g.mode,$),y.return=g,y):(y=o(y,v.children||[]),y.return=g,y)}function u(g,y,v,$,C){return y===null||y.tag!==7?(y=Yr(v,g.mode,$,C),y.return=g,y):(y=o(y,v),y.return=g,y)}function d(g,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Gc(""+y,g.mode,v),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gs:return v=Na(y.type,y.key,y.props,null,g.mode,v),v.ref=Si(g,null,y),v.return=g,v;case Eo:return y=Qc(y,g.mode,v),y.return=g,y;case or:var $=y._init;return d(g,$(y._payload),v)}if(Li(y)||xi(y))return y=Yr(y,g.mode,v,null),y.return=g,y;oa(g,y)}return null}function p(g,y,v,$){var C=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(g,y,""+v,$);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gs:return v.key===C?c(g,y,v,$):null;case Eo:return v.key===C?f(g,y,v,$):null;case or:return C=v._init,p(g,y,C(v._payload),$)}if(Li(v)||xi(v))return C!==null?null:u(g,y,v,$,null);oa(g,v)}return null}function m(g,y,v,$,C){if(typeof $=="string"&&$!==""||typeof $=="number")return g=g.get(v)||null,a(y,g,""+$,C);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Gs:return g=g.get($.key===null?v:$.key)||null,c(y,g,$,C);case Eo:return g=g.get($.key===null?v:$.key)||null,f(y,g,$,C);case or:var _=$._init;return m(g,y,v,_($._payload),C)}if(Li($)||xi($))return g=g.get(v)||null,u(y,g,$,C,null);oa(y,$)}return null}function h(g,y,v,$){for(var C=null,_=null,F=y,x=y=0,S=null;F!==null&&x<v.length;x++){F.index>x?(S=F,F=null):S=F.sibling;var T=p(g,F,v[x],$);if(T===null){F===null&&(F=S);break}e&&F&&T.alternate===null&&t(g,F),y=i(T,y,x),_===null?C=T:_.sibling=T,_=T,F=S}if(x===v.length)return n(g,F),Pe&&Or(g,x),C;if(F===null){for(;x<v.length;x++)F=d(g,v[x],$),F!==null&&(y=i(F,y,x),_===null?C=F:_.sibling=F,_=F);return Pe&&Or(g,x),C}for(F=r(g,F);x<v.length;x++)S=m(F,g,x,v[x],$),S!==null&&(e&&S.alternate!==null&&F.delete(S.key===null?x:S.key),y=i(S,y,x),_===null?C=S:_.sibling=S,_=S);return e&&F.forEach(function(A){return t(g,A)}),Pe&&Or(g,x),C}function b(g,y,v,$){var C=xi(v);if(typeof C!="function")throw Error(Z(150));if(v=C.call(v),v==null)throw Error(Z(151));for(var _=C=null,F=y,x=y=0,S=null,T=v.next();F!==null&&!T.done;x++,T=v.next()){F.index>x?(S=F,F=null):S=F.sibling;var A=p(g,F,T.value,$);if(A===null){F===null&&(F=S);break}e&&F&&A.alternate===null&&t(g,F),y=i(A,y,x),_===null?C=A:_.sibling=A,_=A,F=S}if(T.done)return n(g,F),Pe&&Or(g,x),C;if(F===null){for(;!T.done;x++,T=v.next())T=d(g,T.value,$),T!==null&&(y=i(T,y,x),_===null?C=T:_.sibling=T,_=T);return Pe&&Or(g,x),C}for(F=r(g,F);!T.done;x++,T=v.next())T=m(F,g,x,T.value,$),T!==null&&(e&&T.alternate!==null&&F.delete(T.key===null?x:T.key),y=i(T,y,x),_===null?C=T:_.sibling=T,_=T);return e&&F.forEach(function(R){return t(g,R)}),Pe&&Or(g,x),C}function k(g,y,v,$){if(typeof v=="object"&&v!==null&&v.type===jo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Gs:e:{for(var C=v.key,_=y;_!==null;){if(_.key===C){if(C=v.type,C===jo){if(_.tag===7){n(g,_.sibling),y=o(_,v.props.children),y.return=g,g=y;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===or&&rh(C)===_.type){n(g,_.sibling),y=o(_,v.props),y.ref=Si(g,_,v),y.return=g,g=y;break e}n(g,_);break}else t(g,_);_=_.sibling}v.type===jo?(y=Yr(v.props.children,g.mode,$,v.key),y.return=g,g=y):($=Na(v.type,v.key,v.props,null,g.mode,$),$.ref=Si(g,y,v),$.return=g,g=$)}return s(g);case Eo:e:{for(_=v.key;y!==null;){if(y.key===_)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(g,y.sibling),y=o(y,v.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=Qc(v,g.mode,$),y.return=g,g=y}return s(g);case or:return _=v._init,k(g,y,_(v._payload),$)}if(Li(v))return h(g,y,v,$);if(xi(v))return b(g,y,v,$);oa(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(g,y.sibling),y=o(y,v),y.return=g,g=y):(n(g,y),y=Gc(v,g.mode,$),y.return=g,g=y),s(g)):n(g,y)}return k}var Yo=U0(!0),M0=U0(!1),cl=Cr(null),ul=null,Oo=null,ff=null;function pf(){ff=Oo=ul=null}function hf(e){var t=cl.current;Ae(cl),e._currentValue=t}function Zu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wo(e,t){ul=e,ff=Oo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Dt=!0),e.firstContext=null)}function ln(e){var t=e._currentValue;if(ff!==e)if(e={context:e,memoizedValue:t,next:null},Oo===null){if(ul===null)throw Error(Z(308));Oo=e,ul.dependencies={lanes:0,firstContext:e}}else Oo=Oo.next=e;return t}var Mr=null;function mf(e){Mr===null?Mr=[e]:Mr.push(e)}function B0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,mf(t)):(n.next=o.next,o.next=n),t.interleaved=n,Gn(e,r)}function Gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ir=!1;function gf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function V0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$e&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Gn(e,n)}return o=r.interleaved,o===null?(t.next=t,mf(r)):(t.next=o.next,o.next=t),r.interleaved=t,Gn(e,n)}function Ta(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ef(e,n)}}function oh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function dl(e,t,n,r){var o=e.updateQueue;ir=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,f=c.next;c.next=null,s===null?i=f:s.next=f,s=c;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=f:a.next=f,u.lastBaseUpdate=c))}if(i!==null){var d=o.baseState;s=0,u=f=c=null,a=i;do{var p=a.lane,m=a.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var h=e,b=a;switch(p=t,m=n,b.tag){case 1:if(h=b.payload,typeof h=="function"){d=h.call(m,d,p);break e}d=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=b.payload,p=typeof h=="function"?h.call(m,d,p):h,p==null)break e;d=Ue({},d,p);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else m={eventTime:m,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(f=u=m,c=d):u=u.next=m,s|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(u===null&&(c=d),o.baseState=c,o.firstBaseUpdate=f,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);no|=s,e.lanes=s,e.memoizedState=d}}function ih(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(Z(191,o));o.call(r)}}}var Ns={},Pn=Cr(Ns),xs=Cr(Ns),vs=Cr(Ns);function Br(e){if(e===Ns)throw Error(Z(174));return e}function yf(e,t){switch(Ce(vs,t),Ce(xs,e),Ce(Pn,Ns),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pu(t,e)}Ae(Pn),Ce(Pn,t)}function Ko(){Ae(Pn),Ae(xs),Ae(vs)}function W0(e){Br(vs.current);var t=Br(Pn.current),n=Pu(t,e.type);t!==n&&(Ce(xs,e),Ce(Pn,n))}function xf(e){xs.current===e&&(Ae(Pn),Ae(xs))}var Ie=Cr(0);function fl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mc=[];function vf(){for(var e=0;e<Mc.length;e++)Mc[e]._workInProgressVersionPrimary=null;Mc.length=0}var Aa=Kn.ReactCurrentDispatcher,Bc=Kn.ReactCurrentBatchConfig,to=0,Le=null,ot=null,lt=null,pl=!1,Xi=!1,bs=0,t$=0;function vt(){throw Error(Z(321))}function bf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kn(e[n],t[n]))return!1;return!0}function $f(e,t,n,r,o,i){if(to=i,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Aa.current=e===null||e.memoizedState===null?i$:s$,e=n(r,o),Xi){i=0;do{if(Xi=!1,bs=0,25<=i)throw Error(Z(301));i+=1,lt=ot=null,t.updateQueue=null,Aa.current=a$,e=n(r,o)}while(Xi)}if(Aa.current=hl,t=ot!==null&&ot.next!==null,to=0,lt=ot=Le=null,pl=!1,t)throw Error(Z(300));return e}function wf(){var e=bs!==0;return bs=0,e}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Le.memoizedState=lt=e:lt=lt.next=e,lt}function cn(){if(ot===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=ot.next;var t=lt===null?Le.memoizedState:lt.next;if(t!==null)lt=t,ot=e;else{if(e===null)throw Error(Z(310));ot=e,e={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},lt===null?Le.memoizedState=lt=e:lt=lt.next=e}return lt}function $s(e,t){return typeof t=="function"?t(e):t}function Vc(e){var t=cn(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var r=ot,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,c=null,f=i;do{var u=f.lane;if((to&u)===u)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var d={lane:u,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(a=c=d,s=r):c=c.next=d,Le.lanes|=u,no|=u}f=f.next}while(f!==null&&f!==i);c===null?s=r:c.next=a,kn(r,t.memoizedState)||(Dt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Le.lanes|=i,no|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wc(e){var t=cn(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);kn(i,t.memoizedState)||(Dt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function H0(){}function q0(e,t){var n=Le,r=cn(),o=t(),i=!kn(r.memoizedState,o);if(i&&(r.memoizedState=o,Dt=!0),r=r.queue,Sf(Y0.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,ws(9,Q0.bind(null,n,r,o,t),void 0,null),dt===null)throw Error(Z(349));to&30||G0(n,t,o)}return o}function G0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Q0(e,t,n,r){t.value=n,t.getSnapshot=r,K0(t)&&X0(e)}function Y0(e,t,n){return n(function(){K0(t)&&X0(e)})}function K0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kn(e,n)}catch{return!0}}function X0(e){var t=Gn(e,1);t!==null&&wn(t,e,1,-1)}function sh(e){var t=jn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:e},t.queue=e,e=e.dispatch=o$.bind(null,Le,e),[t.memoizedState,e]}function ws(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function J0(){return cn().memoizedState}function Ra(e,t,n,r){var o=jn();Le.flags|=e,o.memoizedState=ws(1|t,n,void 0,r===void 0?null:r)}function Gl(e,t,n,r){var o=cn();r=r===void 0?null:r;var i=void 0;if(ot!==null){var s=ot.memoizedState;if(i=s.destroy,r!==null&&bf(r,s.deps)){o.memoizedState=ws(t,n,i,r);return}}Le.flags|=e,o.memoizedState=ws(1|t,n,i,r)}function ah(e,t){return Ra(8390656,8,e,t)}function Sf(e,t){return Gl(2048,8,e,t)}function Z0(e,t){return Gl(4,2,e,t)}function ey(e,t){return Gl(4,4,e,t)}function ty(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ny(e,t,n){return n=n!=null?n.concat([e]):null,Gl(4,4,ty.bind(null,t,e),n)}function kf(){}function ry(e,t){var n=cn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function oy(e,t){var n=cn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function iy(e,t,n){return to&21?(kn(n,t)||(n=u0(),Le.lanes|=n,no|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Dt=!0),e.memoizedState=n)}function n$(e,t){var n=_e;_e=n!==0&&4>n?n:4,e(!0);var r=Bc.transition;Bc.transition={};try{e(!1),t()}finally{_e=n,Bc.transition=r}}function sy(){return cn().memoizedState}function r$(e,t,n){var r=br(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ay(e))ly(t,n);else if(n=B0(e,t,n,r),n!==null){var o=At();wn(n,e,r,o),cy(n,t,r)}}function o$(e,t,n){var r=br(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ay(e))ly(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,kn(a,s)){var c=t.interleaved;c===null?(o.next=o,mf(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=B0(e,t,o,r),n!==null&&(o=At(),wn(n,e,r,o),cy(n,t,r))}}function ay(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function ly(e,t){Xi=pl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cy(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ef(e,n)}}var hl={readContext:ln,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},i$={readContext:ln,useCallback:function(e,t){return jn().memoizedState=[e,t===void 0?null:t],e},useContext:ln,useEffect:ah,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ra(4194308,4,ty.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ra(4,2,e,t)},useMemo:function(e,t){var n=jn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=r$.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=jn();return e={current:e},t.memoizedState=e},useState:sh,useDebugValue:kf,useDeferredValue:function(e){return jn().memoizedState=e},useTransition:function(){var e=sh(!1),t=e[0];return e=n$.bind(null,e[1]),jn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,o=jn();if(Pe){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=t(),dt===null)throw Error(Z(349));to&30||G0(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ah(Y0.bind(null,r,i,e),[e]),r.flags|=2048,ws(9,Q0.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=jn(),t=dt.identifierPrefix;if(Pe){var n=Vn,r=Bn;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=t$++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},s$={readContext:ln,useCallback:ry,useContext:ln,useEffect:Sf,useImperativeHandle:ny,useInsertionEffect:Z0,useLayoutEffect:ey,useMemo:oy,useReducer:Vc,useRef:J0,useState:function(){return Vc($s)},useDebugValue:kf,useDeferredValue:function(e){var t=cn();return iy(t,ot.memoizedState,e)},useTransition:function(){var e=Vc($s)[0],t=cn().memoizedState;return[e,t]},useMutableSource:H0,useSyncExternalStore:q0,useId:sy,unstable_isNewReconciler:!1},a$={readContext:ln,useCallback:ry,useContext:ln,useEffect:Sf,useImperativeHandle:ny,useInsertionEffect:Z0,useLayoutEffect:ey,useMemo:oy,useReducer:Wc,useRef:J0,useState:function(){return Wc($s)},useDebugValue:kf,useDeferredValue:function(e){var t=cn();return ot===null?t.memoizedState=e:iy(t,ot.memoizedState,e)},useTransition:function(){var e=Wc($s)[0],t=cn().memoizedState;return[e,t]},useMutableSource:H0,useSyncExternalStore:q0,useId:sy,unstable_isNewReconciler:!1};function mn(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ed(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ql={isMounted:function(e){return(e=e._reactInternals)?co(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=At(),o=br(e),i=Wn(r,o);i.payload=t,n!=null&&(i.callback=n),t=xr(e,i,o),t!==null&&(wn(t,e,o,r),Ta(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=At(),o=br(e),i=Wn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=xr(e,i,o),t!==null&&(wn(t,e,o,r),Ta(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),r=br(e),o=Wn(n,r);o.tag=2,t!=null&&(o.callback=t),t=xr(e,o,r),t!==null&&(wn(t,e,r,n),Ta(t,e,r))}};function lh(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!hs(n,r)||!hs(o,i):!0}function uy(e,t,n){var r=!1,o=Er,i=t.contextType;return typeof i=="object"&&i!==null?i=ln(i):(o=Mt(t)?Zr:Et.current,r=t.contextTypes,i=(r=r!=null)?Go(e,o):Er),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ql,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ch(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ql.enqueueReplaceState(t,t.state,null)}function td(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},gf(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ln(i):(i=Mt(t)?Zr:Et.current,o.context=Go(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ed(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ql.enqueueReplaceState(o,o.state,null),dl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xo(e,t){try{var n="",r=t;do n+=Ov(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Hc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function nd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var l$=typeof WeakMap=="function"?WeakMap:Map;function dy(e,t,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gl||(gl=!0,fd=r),nd(e,t)},n}function fy(e,t,n){n=Wn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){nd(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){nd(e,t),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function uh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new l$;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=w$.bind(null,e,t,n),t.then(e,e))}function dh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fh(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wn(-1,1),t.tag=2,xr(n,t,1))),n.lanes|=1),e)}var c$=Kn.ReactCurrentOwner,Dt=!1;function Ct(e,t,n,r){t.child=e===null?M0(t,null,n,r):Yo(t,e.child,n,r)}function ph(e,t,n,r,o){n=n.render;var i=t.ref;return Wo(t,o),r=$f(e,t,n,r,i,o),n=wf(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qn(e,t,o)):(Pe&&n&&cf(t),t.flags|=1,Ct(e,t,r,o),t.child)}function hh(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Rf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,py(e,t,i,r,o)):(e=Na(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:hs,n(s,r)&&e.ref===t.ref)return Qn(e,t,o)}return t.flags|=1,e=$r(i,r),e.ref=t.ref,e.return=t,t.child=e}function py(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(hs(i,r)&&e.ref===t.ref)if(Dt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Dt=!0);else return t.lanes=e.lanes,Qn(e,t,o)}return rd(e,t,n,r,o)}function hy(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Io,Qt),Qt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(Io,Qt),Qt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ce(Io,Qt),Qt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ce(Io,Qt),Qt|=r;return Ct(e,t,o,n),t.child}function my(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rd(e,t,n,r,o){var i=Mt(n)?Zr:Et.current;return i=Go(t,i),Wo(t,o),n=$f(e,t,n,r,i,o),r=wf(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qn(e,t,o)):(Pe&&r&&cf(t),t.flags|=1,Ct(e,t,n,o),t.child)}function mh(e,t,n,r,o){if(Mt(n)){var i=!0;sl(t)}else i=!1;if(Wo(t,o),t.stateNode===null)Pa(e,t),uy(t,n,r),td(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,f=n.contextType;typeof f=="object"&&f!==null?f=ln(f):(f=Mt(n)?Zr:Et.current,f=Go(t,f));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==f)&&ch(t,s,r,f),ir=!1;var p=t.memoizedState;s.state=p,dl(t,r,s,o),c=t.memoizedState,a!==r||p!==c||Ut.current||ir?(typeof u=="function"&&(ed(t,n,u,r),c=t.memoizedState),(a=ir||lh(t,n,a,r,p,c,f))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=f,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,V0(e,t),a=t.memoizedProps,f=t.type===t.elementType?a:mn(t.type,a),s.props=f,d=t.pendingProps,p=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=ln(c):(c=Mt(n)?Zr:Et.current,c=Go(t,c));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||p!==c)&&ch(t,s,r,c),ir=!1,p=t.memoizedState,s.state=p,dl(t,r,s,o);var h=t.memoizedState;a!==d||p!==h||Ut.current||ir?(typeof m=="function"&&(ed(t,n,m,r),h=t.memoizedState),(f=ir||lh(t,n,f,r,p,h,c)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,h,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,h,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),s.props=r,s.state=h,s.context=c,r=f):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return od(e,t,n,r,i,o)}function od(e,t,n,r,o,i){my(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&eh(t,n,!1),Qn(e,t,i);r=t.stateNode,c$.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Yo(t,e.child,null,i),t.child=Yo(t,null,a,i)):Ct(e,t,a,i),t.memoizedState=r.state,o&&eh(t,n,!0),t.child}function gy(e){var t=e.stateNode;t.pendingContext?Zp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zp(e,t.context,!1),yf(e,t.containerInfo)}function gh(e,t,n,r,o){return Qo(),df(o),t.flags|=256,Ct(e,t,n,r),t.child}var id={dehydrated:null,treeContext:null,retryLane:0};function sd(e){return{baseLanes:e,cachePool:null,transitions:null}}function yy(e,t,n){var r=t.pendingProps,o=Ie.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ce(Ie,o&1),e===null)return Ju(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Xl(s,r,0,null),e=Yr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=sd(n),t.memoizedState=id,e):_f(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return u$(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=$r(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=$r(a,i):(i=Yr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?sd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=id,r}return i=e.child,e=i.sibling,r=$r(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _f(e,t){return t=Xl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ia(e,t,n,r){return r!==null&&df(r),Yo(t,e.child,null,n),e=_f(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function u$(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Hc(Error(Z(422))),ia(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Xl({mode:"visible",children:r.children},o,0,null),i=Yr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Yo(t,e.child,null,s),t.child.memoizedState=sd(s),t.memoizedState=id,i);if(!(t.mode&1))return ia(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(Z(419)),r=Hc(i,r,void 0),ia(e,t,s,r)}if(a=(s&e.childLanes)!==0,Dt||a){if(r=dt,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Gn(e,o),wn(r,e,o,-1))}return Af(),r=Hc(Error(Z(421))),ia(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=S$.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Kt=yr(o.nextSibling),Jt=t,Pe=!0,xn=null,e!==null&&(rn[on++]=Bn,rn[on++]=Vn,rn[on++]=eo,Bn=e.id,Vn=e.overflow,eo=t),t=_f(t,r.children),t.flags|=4096,t)}function yh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zu(e.return,t,n)}function qc(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function xy(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ct(e,t,r.children,n),r=Ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yh(e,n,t);else if(e.tag===19)yh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Ie,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&fl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),qc(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&fl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}qc(t,!0,n,null,i);break;case"together":qc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),no|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Z(153));if(t.child!==null){for(e=t.child,n=$r(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$r(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function d$(e,t,n){switch(t.tag){case 3:gy(t),Qo();break;case 5:W0(t);break;case 1:Mt(t.type)&&sl(t);break;case 4:yf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ce(cl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Ie,Ie.current&1),t.flags|=128,null):n&t.child.childLanes?yy(e,t,n):(Ce(Ie,Ie.current&1),e=Qn(e,t,n),e!==null?e.sibling:null);Ce(Ie,Ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xy(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ce(Ie,Ie.current),r)break;return null;case 22:case 23:return t.lanes=0,hy(e,t,n)}return Qn(e,t,n)}var vy,ad,by,$y;vy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ad=function(){};by=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Br(Pn.current);var i=null;switch(n){case"input":o=Fu(e,o),r=Fu(e,r),i=[];break;case"select":o=Ue({},o,{value:void 0}),r=Ue({},r,{value:void 0}),i=[];break;case"textarea":o=Ru(e,o),r=Ru(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ol)}zu(n,r);var s;n=null;for(f in o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var a=o[f];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(as.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var c=r[f];if(a=o!=null?o[f]:void 0,r.hasOwnProperty(f)&&c!==a&&(c!=null||a!=null))if(f==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(as.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&Fe("scroll",e),i||a===c||(i=[])):(i=i||[]).push(f,c))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};$y=function(e,t,n,r){n!==r&&(t.flags|=4)};function ki(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function bt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function f$(e,t,n){var r=t.pendingProps;switch(uf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(t),null;case 1:return Mt(t.type)&&il(),bt(t),null;case 3:return r=t.stateNode,Ko(),Ae(Ut),Ae(Et),vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ra(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xn!==null&&(md(xn),xn=null))),ad(e,t),bt(t),null;case 5:xf(t);var o=Br(vs.current);if(n=t.type,e!==null&&t.stateNode!=null)by(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Z(166));return bt(t),null}if(e=Br(Pn.current),ra(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[An]=t,r[ys]=i,e=(t.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(o=0;o<Ui.length;o++)Fe(Ui[o],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":Ep(r,i),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Fe("invalid",r);break;case"textarea":Cp(r,i),Fe("invalid",r)}zu(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&na(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&na(r.textContent,a,e),o=["children",""+a]):as.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Fe("scroll",r)}switch(n){case"input":Qs(r),jp(r,i,!0);break;case"textarea":Qs(r),Fp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ol)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[An]=t,e[ys]=r,vy(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ou(n,r),n){case"dialog":Fe("cancel",e),Fe("close",e),o=r;break;case"iframe":case"object":case"embed":Fe("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ui.length;o++)Fe(Ui[o],e);o=r;break;case"source":Fe("error",e),o=r;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),o=r;break;case"details":Fe("toggle",e),o=r;break;case"input":Ep(e,r),o=Fu(e,r),Fe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Ue({},r,{value:void 0}),Fe("invalid",e);break;case"textarea":Cp(e,r),o=Ru(e,r),Fe("invalid",e);break;default:o=r}zu(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?Jg(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Kg(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ls(e,c):typeof c=="number"&&ls(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(as.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Fe("scroll",e):c!=null&&Qd(e,i,c,s))}switch(n){case"input":Qs(e),jp(e,r,!1);break;case"textarea":Qs(e),Fp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_r(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Uo(e,!!r.multiple,i,!1):r.defaultValue!=null&&Uo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return bt(t),null;case 6:if(e&&t.stateNode!=null)$y(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Z(166));if(n=Br(vs.current),Br(Pn.current),ra(t)){if(r=t.stateNode,n=t.memoizedProps,r[An]=t,(i=r.nodeValue!==n)&&(e=Jt,e!==null))switch(e.tag){case 3:na(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&na(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=t,t.stateNode=r}return bt(t),null;case 13:if(Ae(Ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&Kt!==null&&t.mode&1&&!(t.flags&128))D0(),Qo(),t.flags|=98560,i=!1;else if(i=ra(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(Z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Z(317));i[An]=t}else Qo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;bt(t),i=!1}else xn!==null&&(md(xn),xn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ie.current&1?st===0&&(st=3):Af())),t.updateQueue!==null&&(t.flags|=4),bt(t),null);case 4:return Ko(),ad(e,t),e===null&&ms(t.stateNode.containerInfo),bt(t),null;case 10:return hf(t.type._context),bt(t),null;case 17:return Mt(t.type)&&il(),bt(t),null;case 19:if(Ae(Ie),i=t.memoizedState,i===null)return bt(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)ki(i,!1);else{if(st!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=fl(e),s!==null){for(t.flags|=128,ki(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Ie,Ie.current&1|2),t.child}e=e.sibling}i.tail!==null&&Qe()>Jo&&(t.flags|=128,r=!0,ki(i,!1),t.lanes=4194304)}else{if(!r)if(e=fl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ki(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Pe)return bt(t),null}else 2*Qe()-i.renderingStartTime>Jo&&n!==1073741824&&(t.flags|=128,r=!0,ki(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Qe(),t.sibling=null,n=Ie.current,Ce(Ie,r?n&1|2:n&1),t):(bt(t),null);case 22:case 23:return Tf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qt&1073741824&&(bt(t),t.subtreeFlags&6&&(t.flags|=8192)):bt(t),null;case 24:return null;case 25:return null}throw Error(Z(156,t.tag))}function p$(e,t){switch(uf(t),t.tag){case 1:return Mt(t.type)&&il(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ko(),Ae(Ut),Ae(Et),vf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xf(t),null;case 13:if(Ae(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Z(340));Qo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(Ie),null;case 4:return Ko(),null;case 10:return hf(t.type._context),null;case 22:case 23:return Tf(),null;case 24:return null;default:return null}}var sa=!1,kt=!1,h$=typeof WeakSet=="function"?WeakSet:Set,ne=null;function No(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(e,t,r)}else n.current=null}function ld(e,t,n){try{n()}catch(r){qe(e,t,r)}}var xh=!1;function m$(e,t){if(Hu=tl,e=E0(),lf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,f=0,u=0,d=e,p=null;t:for(;;){for(var m;d!==n||o!==0&&d.nodeType!==3||(a=s+o),d!==i||r!==0&&d.nodeType!==3||(c=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)p=d,d=m;for(;;){if(d===e)break t;if(p===n&&++f===o&&(a=s),p===i&&++u===r&&(c=s),(m=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=m}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qu={focusedElem:e,selectionRange:n},tl=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var b=h.memoizedProps,k=h.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:mn(t.type,b),k);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch($){qe(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return h=xh,xh=!1,h}function Ji(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ld(t,n,i)}o=o.next}while(o!==r)}}function Yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function cd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wy(e){var t=e.alternate;t!==null&&(e.alternate=null,wy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[An],delete t[ys],delete t[Yu],delete t[Xb],delete t[Jb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sy(e){return e.tag===5||e.tag===3||e.tag===4}function vh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ud(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ol));else if(r!==4&&(e=e.child,e!==null))for(ud(e,t,n),e=e.sibling;e!==null;)ud(e,t,n),e=e.sibling}function dd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(dd(e,t,n),e=e.sibling;e!==null;)dd(e,t,n),e=e.sibling}var gt=null,gn=!1;function er(e,t,n){for(n=n.child;n!==null;)ky(e,t,n),n=n.sibling}function ky(e,t,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:kt||No(n,t);case 6:var r=gt,o=gn;gt=null,er(e,t,n),gt=r,gn=o,gt!==null&&(gn?(e=gt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(gn?(e=gt,n=n.stateNode,e.nodeType===8?Dc(e.parentNode,n):e.nodeType===1&&Dc(e,n),fs(e)):Dc(gt,n.stateNode));break;case 4:r=gt,o=gn,gt=n.stateNode.containerInfo,gn=!0,er(e,t,n),gt=r,gn=o;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&ld(n,t,s),o=o.next}while(o!==r)}er(e,t,n);break;case 1:if(!kt&&(No(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){qe(n,t,a)}er(e,t,n);break;case 21:er(e,t,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,er(e,t,n),kt=r):er(e,t,n);break;default:er(e,t,n)}}function bh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new h$),t.forEach(function(r){var o=k$.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function pn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:gt=a.stateNode,gn=!1;break e;case 3:gt=a.stateNode.containerInfo,gn=!0;break e;case 4:gt=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(gt===null)throw Error(Z(160));ky(i,s,o),gt=null,gn=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(f){qe(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_y(t,e),t=t.sibling}function _y(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pn(t,e),En(e),r&4){try{Ji(3,e,e.return),Yl(3,e)}catch(b){qe(e,e.return,b)}try{Ji(5,e,e.return)}catch(b){qe(e,e.return,b)}}break;case 1:pn(t,e),En(e),r&512&&n!==null&&No(n,n.return);break;case 5:if(pn(t,e),En(e),r&512&&n!==null&&No(n,n.return),e.flags&32){var o=e.stateNode;try{ls(o,"")}catch(b){qe(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Gg(o,i),Ou(a,s);var f=Ou(a,i);for(s=0;s<c.length;s+=2){var u=c[s],d=c[s+1];u==="style"?Jg(o,d):u==="dangerouslySetInnerHTML"?Kg(o,d):u==="children"?ls(o,d):Qd(o,u,d,f)}switch(a){case"input":Tu(o,i);break;case"textarea":Qg(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Uo(o,!!i.multiple,m,!1):p!==!!i.multiple&&(i.defaultValue!=null?Uo(o,!!i.multiple,i.defaultValue,!0):Uo(o,!!i.multiple,i.multiple?[]:"",!1))}o[ys]=i}catch(b){qe(e,e.return,b)}}break;case 6:if(pn(t,e),En(e),r&4){if(e.stateNode===null)throw Error(Z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){qe(e,e.return,b)}}break;case 3:if(pn(t,e),En(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fs(t.containerInfo)}catch(b){qe(e,e.return,b)}break;case 4:pn(t,e),En(e);break;case 13:pn(t,e),En(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Cf=Qe())),r&4&&bh(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(kt=(f=kt)||u,pn(t,e),kt=f):pn(t,e),En(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!u&&e.mode&1)for(ne=e,u=e.child;u!==null;){for(d=ne=u;ne!==null;){switch(p=ne,m=p.child,p.tag){case 0:case 11:case 14:case 15:Ji(4,p,p.return);break;case 1:No(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(b){qe(r,n,b)}}break;case 5:No(p,p.return);break;case 22:if(p.memoizedState!==null){wh(d);continue}}m!==null?(m.return=p,ne=m):wh(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,f?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,c=d.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Xg("display",s))}catch(b){qe(e,e.return,b)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=f?"":d.memoizedProps}catch(b){qe(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:pn(t,e),En(e),r&4&&bh(e);break;case 21:break;default:pn(t,e),En(e)}}function En(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sy(n)){var r=n;break e}n=n.return}throw Error(Z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ls(o,""),r.flags&=-33);var i=vh(e);dd(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=vh(e);ud(e,a,s);break;default:throw Error(Z(161))}}catch(c){qe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g$(e,t,n){ne=e,Ey(e)}function Ey(e,t,n){for(var r=(e.mode&1)!==0;ne!==null;){var o=ne,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||sa;if(!s){var a=o.alternate,c=a!==null&&a.memoizedState!==null||kt;a=sa;var f=kt;if(sa=s,(kt=c)&&!f)for(ne=o;ne!==null;)s=ne,c=s.child,s.tag===22&&s.memoizedState!==null?Sh(o):c!==null?(c.return=s,ne=c):Sh(o);for(;i!==null;)ne=i,Ey(i),i=i.sibling;ne=o,sa=a,kt=f}$h(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,ne=i):$h(e)}}function $h(e){for(;ne!==null;){var t=ne;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:kt||Yl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!kt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:mn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ih(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ih(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var u=f.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&fs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}kt||t.flags&512&&cd(t)}catch(p){qe(t,t.return,p)}}if(t===e){ne=null;break}if(n=t.sibling,n!==null){n.return=t.return,ne=n;break}ne=t.return}}function wh(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ne=n;break}ne=t.return}}function Sh(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Yl(4,t)}catch(c){qe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){qe(t,o,c)}}var i=t.return;try{cd(t)}catch(c){qe(t,i,c)}break;case 5:var s=t.return;try{cd(t)}catch(c){qe(t,s,c)}}}catch(c){qe(t,t.return,c)}if(t===e){ne=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ne=a;break}ne=t.return}}var y$=Math.ceil,ml=Kn.ReactCurrentDispatcher,Ef=Kn.ReactCurrentOwner,an=Kn.ReactCurrentBatchConfig,$e=0,dt=null,Ze=null,yt=0,Qt=0,Io=Cr(0),st=0,Ss=null,no=0,Kl=0,jf=0,Zi=null,It=null,Cf=0,Jo=1/0,Ln=null,gl=!1,fd=null,vr=null,aa=!1,ur=null,yl=0,es=0,pd=null,za=-1,Oa=0;function At(){return $e&6?Qe():za!==-1?za:za=Qe()}function br(e){return e.mode&1?$e&2&&yt!==0?yt&-yt:e$.transition!==null?(Oa===0&&(Oa=u0()),Oa):(e=_e,e!==0||(e=window.event,e=e===void 0?16:y0(e.type)),e):1}function wn(e,t,n,r){if(50<es)throw es=0,pd=null,Error(Z(185));Ps(e,n,r),(!($e&2)||e!==dt)&&(e===dt&&(!($e&2)&&(Kl|=n),st===4&&ar(e,yt)),Bt(e,r),n===1&&$e===0&&!(t.mode&1)&&(Jo=Qe()+500,ql&&Fr()))}function Bt(e,t){var n=e.callbackNode;eb(e,t);var r=el(e,e===dt?yt:0);if(r===0)n!==null&&Rp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Rp(n),t===1)e.tag===0?Zb(kh.bind(null,e)):N0(kh.bind(null,e)),Yb(function(){!($e&6)&&Fr()}),n=null;else{switch(d0(r)){case 1:n=Zd;break;case 4:n=l0;break;case 16:n=Za;break;case 536870912:n=c0;break;default:n=Za}n=zy(n,jy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jy(e,t){if(za=-1,Oa=0,$e&6)throw Error(Z(327));var n=e.callbackNode;if(Ho()&&e.callbackNode!==n)return null;var r=el(e,e===dt?yt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xl(e,r);else{t=r;var o=$e;$e|=2;var i=Fy();(dt!==e||yt!==t)&&(Ln=null,Jo=Qe()+500,Qr(e,t));do try{b$();break}catch(a){Cy(e,a)}while(!0);pf(),ml.current=i,$e=o,Ze!==null?t=0:(dt=null,yt=0,t=st)}if(t!==0){if(t===2&&(o=Uu(e),o!==0&&(r=o,t=hd(e,o))),t===1)throw n=Ss,Qr(e,0),ar(e,r),Bt(e,Qe()),n;if(t===6)ar(e,r);else{if(o=e.current.alternate,!(r&30)&&!x$(o)&&(t=xl(e,r),t===2&&(i=Uu(e),i!==0&&(r=i,t=hd(e,i))),t===1))throw n=Ss,Qr(e,0),ar(e,r),Bt(e,Qe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(Z(345));case 2:Nr(e,It,Ln);break;case 3:if(ar(e,r),(r&130023424)===r&&(t=Cf+500-Qe(),10<t)){if(el(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){At(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Qu(Nr.bind(null,e,It,Ln),t);break}Nr(e,It,Ln);break;case 4:if(ar(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-$n(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*y$(r/1960))-r,10<r){e.timeoutHandle=Qu(Nr.bind(null,e,It,Ln),r);break}Nr(e,It,Ln);break;case 5:Nr(e,It,Ln);break;default:throw Error(Z(329))}}}return Bt(e,Qe()),e.callbackNode===n?jy.bind(null,e):null}function hd(e,t){var n=Zi;return e.current.memoizedState.isDehydrated&&(Qr(e,t).flags|=256),e=xl(e,t),e!==2&&(t=It,It=n,t!==null&&md(t)),e}function md(e){It===null?It=e:It.push.apply(It,e)}function x$(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!kn(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ar(e,t){for(t&=~jf,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$n(t),r=1<<n;e[n]=-1,t&=~r}}function kh(e){if($e&6)throw Error(Z(327));Ho();var t=el(e,0);if(!(t&1))return Bt(e,Qe()),null;var n=xl(e,t);if(e.tag!==0&&n===2){var r=Uu(e);r!==0&&(t=r,n=hd(e,r))}if(n===1)throw n=Ss,Qr(e,0),ar(e,t),Bt(e,Qe()),n;if(n===6)throw Error(Z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nr(e,It,Ln),Bt(e,Qe()),null}function Ff(e,t){var n=$e;$e|=1;try{return e(t)}finally{$e=n,$e===0&&(Jo=Qe()+500,ql&&Fr())}}function ro(e){ur!==null&&ur.tag===0&&!($e&6)&&Ho();var t=$e;$e|=1;var n=an.transition,r=_e;try{if(an.transition=null,_e=1,e)return e()}finally{_e=r,an.transition=n,$e=t,!($e&6)&&Fr()}}function Tf(){Qt=Io.current,Ae(Io)}function Qr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qb(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:Ko(),Ae(Ut),Ae(Et),vf();break;case 5:xf(r);break;case 4:Ko();break;case 13:Ae(Ie);break;case 19:Ae(Ie);break;case 10:hf(r.type._context);break;case 22:case 23:Tf()}n=n.return}if(dt=e,Ze=e=$r(e.current,null),yt=Qt=t,st=0,Ss=null,jf=Kl=no=0,It=Zi=null,Mr!==null){for(t=0;t<Mr.length;t++)if(n=Mr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Mr=null}return e}function Cy(e,t){do{var n=Ze;try{if(pf(),Aa.current=hl,pl){for(var r=Le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}pl=!1}if(to=0,lt=ot=Le=null,Xi=!1,bs=0,Ef.current=null,n===null||n.return===null){st=1,Ss=t,Ze=null;break}e:{var i=e,s=n.return,a=n,c=t;if(t=yt,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=dh(s);if(m!==null){m.flags&=-257,fh(m,s,a,i,t),m.mode&1&&uh(i,f,t),t=m,c=f;var h=t.updateQueue;if(h===null){var b=new Set;b.add(c),t.updateQueue=b}else h.add(c);break e}else{if(!(t&1)){uh(i,f,t),Af();break e}c=Error(Z(426))}}else if(Pe&&a.mode&1){var k=dh(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),fh(k,s,a,i,t),df(Xo(c,a));break e}}i=c=Xo(c,a),st!==4&&(st=2),Zi===null?Zi=[i]:Zi.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=dy(i,c,t);oh(i,g);break e;case 1:a=c;var y=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(vr===null||!vr.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var $=fy(i,a,t);oh(i,$);break e}}i=i.return}while(i!==null)}Ay(n)}catch(C){t=C,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(!0)}function Fy(){var e=ml.current;return ml.current=hl,e===null?hl:e}function Af(){(st===0||st===3||st===2)&&(st=4),dt===null||!(no&268435455)&&!(Kl&268435455)||ar(dt,yt)}function xl(e,t){var n=$e;$e|=2;var r=Fy();(dt!==e||yt!==t)&&(Ln=null,Qr(e,t));do try{v$();break}catch(o){Cy(e,o)}while(!0);if(pf(),$e=n,ml.current=r,Ze!==null)throw Error(Z(261));return dt=null,yt=0,st}function v$(){for(;Ze!==null;)Ty(Ze)}function b$(){for(;Ze!==null&&!Hv();)Ty(Ze)}function Ty(e){var t=Py(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?Ay(e):Ze=t,Ef.current=null}function Ay(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=p$(n,t),n!==null){n.flags&=32767,Ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{st=6,Ze=null;return}}else if(n=f$(n,t,Qt),n!==null){Ze=n;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);st===0&&(st=5)}function Nr(e,t,n){var r=_e,o=an.transition;try{an.transition=null,_e=1,$$(e,t,n,r)}finally{an.transition=o,_e=r}return null}function $$(e,t,n,r){do Ho();while(ur!==null);if($e&6)throw Error(Z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(tb(e,i),e===dt&&(Ze=dt=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||aa||(aa=!0,zy(Za,function(){return Ho(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=an.transition,an.transition=null;var s=_e;_e=1;var a=$e;$e|=4,Ef.current=null,m$(e,n),_y(n,e),Mb(qu),tl=!!Hu,qu=Hu=null,e.current=n,g$(n),qv(),$e=a,_e=s,an.transition=i}else e.current=n;if(aa&&(aa=!1,ur=e,yl=o),i=e.pendingLanes,i===0&&(vr=null),Yv(n.stateNode),Bt(e,Qe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(gl)throw gl=!1,e=fd,fd=null,e;return yl&1&&e.tag!==0&&Ho(),i=e.pendingLanes,i&1?e===pd?es++:(es=0,pd=e):es=0,Fr(),null}function Ho(){if(ur!==null){var e=d0(yl),t=an.transition,n=_e;try{if(an.transition=null,_e=16>e?16:e,ur===null)var r=!1;else{if(e=ur,ur=null,yl=0,$e&6)throw Error(Z(331));var o=$e;for($e|=4,ne=e.current;ne!==null;){var i=ne,s=i.child;if(ne.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var f=a[c];for(ne=f;ne!==null;){var u=ne;switch(u.tag){case 0:case 11:case 15:Ji(8,u,i)}var d=u.child;if(d!==null)d.return=u,ne=d;else for(;ne!==null;){u=ne;var p=u.sibling,m=u.return;if(wy(u),u===f){ne=null;break}if(p!==null){p.return=m,ne=p;break}ne=m}}}var h=i.alternate;if(h!==null){var b=h.child;if(b!==null){h.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}ne=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,ne=s;else e:for(;ne!==null;){if(i=ne,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ji(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,ne=g;break e}ne=i.return}}var y=e.current;for(ne=y;ne!==null;){s=ne;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,ne=v;else e:for(s=y;ne!==null;){if(a=ne,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yl(9,a)}}catch(C){qe(a,a.return,C)}if(a===s){ne=null;break e}var $=a.sibling;if($!==null){$.return=a.return,ne=$;break e}ne=a.return}}if($e=o,Fr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Ml,e)}catch{}r=!0}return r}finally{_e=n,an.transition=t}}return!1}function _h(e,t,n){t=Xo(n,t),t=dy(e,t,1),e=xr(e,t,1),t=At(),e!==null&&(Ps(e,1,t),Bt(e,t))}function qe(e,t,n){if(e.tag===3)_h(e,e,n);else for(;t!==null;){if(t.tag===3){_h(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){e=Xo(n,e),e=fy(t,e,1),t=xr(t,e,1),e=At(),t!==null&&(Ps(t,1,e),Bt(t,e));break}}t=t.return}}function w$(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=At(),e.pingedLanes|=e.suspendedLanes&n,dt===e&&(yt&n)===n&&(st===4||st===3&&(yt&130023424)===yt&&500>Qe()-Cf?Qr(e,0):jf|=n),Bt(e,t)}function Ry(e,t){t===0&&(e.mode&1?(t=Xs,Xs<<=1,!(Xs&130023424)&&(Xs=4194304)):t=1);var n=At();e=Gn(e,t),e!==null&&(Ps(e,t,n),Bt(e,n))}function S$(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ry(e,n)}function k$(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Z(314))}r!==null&&r.delete(t),Ry(e,n)}var Py;Py=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ut.current)Dt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Dt=!1,d$(e,t,n);Dt=!!(e.flags&131072)}else Dt=!1,Pe&&t.flags&1048576&&I0(t,ll,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pa(e,t),e=t.pendingProps;var o=Go(t,Et.current);Wo(t,n),o=$f(null,t,r,e,o,n);var i=wf();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mt(r)?(i=!0,sl(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,gf(t),o.updater=Ql,t.stateNode=o,o._reactInternals=t,td(t,r,e,n),t=od(null,t,r,!0,i,n)):(t.tag=0,Pe&&i&&cf(t),Ct(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pa(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=E$(r),e=mn(r,e),o){case 0:t=rd(null,t,r,e,n);break e;case 1:t=mh(null,t,r,e,n);break e;case 11:t=ph(null,t,r,e,n);break e;case 14:t=hh(null,t,r,mn(r.type,e),n);break e}throw Error(Z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mn(r,o),rd(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mn(r,o),mh(e,t,r,o,n);case 3:e:{if(gy(t),e===null)throw Error(Z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,V0(e,t),dl(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Xo(Error(Z(423)),t),t=gh(e,t,r,n,o);break e}else if(r!==o){o=Xo(Error(Z(424)),t),t=gh(e,t,r,n,o);break e}else for(Kt=yr(t.stateNode.containerInfo.firstChild),Jt=t,Pe=!0,xn=null,n=M0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qo(),r===o){t=Qn(e,t,n);break e}Ct(e,t,r,n)}t=t.child}return t;case 5:return W0(t),e===null&&Ju(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Gu(r,o)?s=null:i!==null&&Gu(r,i)&&(t.flags|=32),my(e,t),Ct(e,t,s,n),t.child;case 6:return e===null&&Ju(t),null;case 13:return yy(e,t,n);case 4:return yf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yo(t,null,r,n):Ct(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mn(r,o),ph(e,t,r,o,n);case 7:return Ct(e,t,t.pendingProps,n),t.child;case 8:return Ct(e,t,t.pendingProps.children,n),t.child;case 12:return Ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,Ce(cl,r._currentValue),r._currentValue=s,i!==null)if(kn(i.value,s)){if(i.children===o.children&&!Ut.current){t=Qn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Wn(-1,n&-n),c.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var u=f.pending;u===null?c.next=c:(c.next=u.next,u.next=c),f.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Zu(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(Z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Zu(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ct(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Wo(t,n),o=ln(o),r=r(o),t.flags|=1,Ct(e,t,r,n),t.child;case 14:return r=t.type,o=mn(r,t.pendingProps),o=mn(r.type,o),hh(e,t,r,o,n);case 15:return py(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mn(r,o),Pa(e,t),t.tag=1,Mt(r)?(e=!0,sl(t)):e=!1,Wo(t,n),uy(t,r,o),td(t,r,o,n),od(null,t,r,!0,e,n);case 19:return xy(e,t,n);case 22:return hy(e,t,n)}throw Error(Z(156,t.tag))};function zy(e,t){return a0(e,t)}function _$(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,t,n,r){return new _$(e,t,n,r)}function Rf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function E$(e){if(typeof e=="function")return Rf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kd)return 11;if(e===Xd)return 14}return 2}function $r(e,t){var n=e.alternate;return n===null?(n=sn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Na(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Rf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case jo:return Yr(n.children,o,i,t);case Yd:s=8,o|=8;break;case _u:return e=sn(12,n,t,o|2),e.elementType=_u,e.lanes=i,e;case Eu:return e=sn(13,n,t,o),e.elementType=Eu,e.lanes=i,e;case ju:return e=sn(19,n,t,o),e.elementType=ju,e.lanes=i,e;case Wg:return Xl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bg:s=10;break e;case Vg:s=9;break e;case Kd:s=11;break e;case Xd:s=14;break e;case or:s=16,r=null;break e}throw Error(Z(130,e==null?e:typeof e,""))}return t=sn(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Yr(e,t,n,r){return e=sn(7,e,r,t),e.lanes=n,e}function Xl(e,t,n,r){return e=sn(22,e,r,t),e.elementType=Wg,e.lanes=n,e.stateNode={isHidden:!1},e}function Gc(e,t,n){return e=sn(6,e,null,t),e.lanes=n,e}function Qc(e,t,n){return t=sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function j$(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cc(0),this.expirationTimes=Cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cc(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Pf(e,t,n,r,o,i,s,a,c){return e=new j$(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=sn(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(i),e}function C$(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Eo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Oy(e){if(!e)return Er;e=e._reactInternals;e:{if(co(e)!==e||e.tag!==1)throw Error(Z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Z(171))}if(e.tag===1){var n=e.type;if(Mt(n))return O0(e,n,t)}return t}function Ny(e,t,n,r,o,i,s,a,c){return e=Pf(n,r,!0,e,o,i,s,a,c),e.context=Oy(null),n=e.current,r=At(),o=br(n),i=Wn(r,o),i.callback=t??null,xr(n,i,o),e.current.lanes=o,Ps(e,o,r),Bt(e,r),e}function Jl(e,t,n,r){var o=t.current,i=At(),s=br(o);return n=Oy(n),t.context===null?t.context=n:t.pendingContext=n,t=Wn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xr(o,t,s),e!==null&&(wn(e,o,s,i),Ta(e,o,s)),s}function vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Eh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zf(e,t){Eh(e,t),(e=e.alternate)&&Eh(e,t)}function F$(){return null}var Iy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Of(e){this._internalRoot=e}Zl.prototype.render=Of.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Z(409));Jl(e,t,null,null)};Zl.prototype.unmount=Of.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ro(function(){Jl(null,e,null,null)}),t[qn]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=h0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sr.length&&t!==0&&t<sr[n].priority;n++);sr.splice(n,0,e),n===0&&g0(e)}};function Nf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jh(){}function T$(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var f=vl(s);i.call(f)}}var s=Ny(t,r,e,0,null,!1,!1,"",jh);return e._reactRootContainer=s,e[qn]=s.current,ms(e.nodeType===8?e.parentNode:e),ro(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var f=vl(c);a.call(f)}}var c=Pf(e,0,!1,null,null,!1,!1,"",jh);return e._reactRootContainer=c,e[qn]=c.current,ms(e.nodeType===8?e.parentNode:e),ro(function(){Jl(t,c,n,r)}),c}function tc(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var c=vl(s);a.call(c)}}Jl(t,s,e,o)}else s=T$(n,t,e,o,r);return vl(s)}f0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Di(t.pendingLanes);n!==0&&(ef(t,n|1),Bt(t,Qe()),!($e&6)&&(Jo=Qe()+500,Fr()))}break;case 13:ro(function(){var r=Gn(e,1);if(r!==null){var o=At();wn(r,e,1,o)}}),zf(e,1)}};tf=function(e){if(e.tag===13){var t=Gn(e,134217728);if(t!==null){var n=At();wn(t,e,134217728,n)}zf(e,134217728)}};p0=function(e){if(e.tag===13){var t=br(e),n=Gn(e,t);if(n!==null){var r=At();wn(n,e,t,r)}zf(e,t)}};h0=function(){return _e};m0=function(e,t){var n=_e;try{return _e=e,t()}finally{_e=n}};Iu=function(e,t,n){switch(t){case"input":if(Tu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Hl(r);if(!o)throw Error(Z(90));qg(r),Tu(r,o)}}}break;case"textarea":Qg(e,n);break;case"select":t=n.value,t!=null&&Uo(e,!!n.multiple,t,!1)}};t0=Ff;n0=ro;var A$={usingClientEntryPoint:!1,Events:[Os,Ao,Hl,Zg,e0,Ff]},_i={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R$={bundleType:_i.bundleType,version:_i.version,rendererPackageName:_i.rendererPackageName,rendererConfig:_i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=i0(e),e===null?null:e.stateNode},findFiberByHostInstance:_i.findFiberByHostInstance||F$,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Ml=la.inject(R$),Rn=la}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A$;en.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(t))throw Error(Z(200));return C$(e,t,null,n)};en.createRoot=function(e,t){if(!Nf(e))throw Error(Z(299));var n=!1,r="",o=Iy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Pf(e,1,!1,null,null,n,!1,r,o),e[qn]=t.current,ms(e.nodeType===8?e.parentNode:e),new Of(t)};en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Z(188)):(e=Object.keys(e).join(","),Error(Z(268,e)));return e=i0(t),e=e===null?null:e.stateNode,e};en.flushSync=function(e){return ro(e)};en.hydrate=function(e,t,n){if(!ec(t))throw Error(Z(200));return tc(null,e,t,!0,n)};en.hydrateRoot=function(e,t,n){if(!Nf(e))throw Error(Z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Iy;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ny(t,null,e,1,n??null,o,!1,i,s),e[qn]=t.current,ms(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Zl(t)};en.render=function(e,t,n){if(!ec(t))throw Error(Z(200));return tc(null,e,t,!1,n)};en.unmountComponentAtNode=function(e){if(!ec(e))throw Error(Z(40));return e._reactRootContainer?(ro(function(){tc(null,null,e,!1,function(){e._reactRootContainer=null,e[qn]=null})}),!0):!1};en.unstable_batchedUpdates=Ff;en.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ec(n))throw Error(Z(200));if(e==null||e._reactInternals===void 0)throw Error(Z(38));return tc(e,t,n,!1,r)};en.version="18.3.1-next-f1338f8080-20240426";function Ly(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ly)}catch(e){console.error(e)}}Ly(),Lg.exports=en;var P$=Lg.exports,Ch=P$;Su.createRoot=Ch.createRoot,Su.hydrateRoot=Ch.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ks(){return ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ks.apply(this,arguments)}var dr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dr||(dr={}));const Fh="popstate";function z$(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return bl("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:_s(o)}return Dy(t,n,null,e)}function O$(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:a="",hash:c=""}=uo(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),bl("",{pathname:s,search:a,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let c=o.location.href,f=c.indexOf("#");a=f===-1?c:c.slice(0,f)}return a+"#"+(typeof i=="string"?i:_s(i))}function r(o,i){nc(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Dy(t,n,r,e)}function De(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function N$(){return Math.random().toString(36).substr(2,8)}function Th(e,t){return{usr:e.state,key:e.key,idx:t}}function bl(e,t,n,r){return n===void 0&&(n=null),ks({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?uo(t):t,{state:n,key:t&&t.key||r||N$()})}function _s(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function uo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Dy(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=dr.Pop,c=null,f=u();f==null&&(f=0,s.replaceState(ks({},s.state,{idx:f}),""));function u(){return(s.state||{idx:null}).idx}function d(){a=dr.Pop;let k=u(),g=k==null?null:k-f;f=k,c&&c({action:a,location:b.location,delta:g})}function p(k,g){a=dr.Push;let y=bl(b.location,k,g);n&&n(y,k),f=u()+1;let v=Th(y,f),$=b.createHref(y);try{s.pushState(v,"",$)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign($)}i&&c&&c({action:a,location:b.location,delta:1})}function m(k,g){a=dr.Replace;let y=bl(b.location,k,g);n&&n(y,k),f=u();let v=Th(y,f),$=b.createHref(y);s.replaceState(v,"",$),i&&c&&c({action:a,location:b.location,delta:0})}function h(k){let g=o.location.origin!=="null"?o.location.origin:o.location.href,y=typeof k=="string"?k:_s(k);return y=y.replace(/ $/,"%20"),De(g,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,g)}let b={get action(){return a},get location(){return e(o,s)},listen(k){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Fh,d),c=k,()=>{o.removeEventListener(Fh,d),c=null}},createHref(k){return t(o,k)},createURL:h,encodeLocation(k){let g=h(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:m,go(k){return s.go(k)}};return b}var Ah;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ah||(Ah={}));function I$(e,t,n){return n===void 0&&(n="/"),L$(e,t,n)}function L$(e,t,n,r){let o=typeof t=="string"?uo(t):t,i=Zo(o.pathname||"/",n);if(i==null)return null;let s=Uy(e);D$(s);let a=null;for(let c=0;a==null&&c<s.length;++c){let f=K$(i);a=Q$(s[c],f)}return a}function Uy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(De(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let f=wr([r,c.relativePath]),u=n.concat(c);i.children&&i.children.length>0&&(De(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Uy(i.children,t,u,f)),!(i.path==null&&!i.index)&&t.push({path:f,score:q$(f,i.index),routesMeta:u})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let c of My(i.path))o(i,s,c)}),t}function My(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=My(r.join("/")),a=[];return a.push(...s.map(c=>c===""?i:[i,c].join("/"))),o&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function D$(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:G$(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const U$=/^:[\w-]+$/,M$=3,B$=2,V$=1,W$=10,H$=-2,Rh=e=>e==="*";function q$(e,t){let n=e.split("/"),r=n.length;return n.some(Rh)&&(r+=H$),t&&(r+=B$),n.filter(o=>!Rh(o)).reduce((o,i)=>o+(U$.test(i)?M$:i===""?V$:W$),r)}function G$(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Q$(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],f=a===r.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=gd({path:c.relativePath,caseSensitive:c.caseSensitive,end:f},u),p=c.route;if(!d)return null;Object.assign(o,d.params),s.push({params:o,pathname:wr([i,d.pathname]),pathnameBase:t2(wr([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=wr([i,d.pathnameBase]))}return s}function gd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Y$(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((f,u,d)=>{let{paramName:p,isOptional:m}=u;if(p==="*"){let b=a[d]||"";s=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const h=a[d];return m&&!h?f[p]=void 0:f[p]=(h||"").replace(/%2F/g,"/"),f},{}),pathname:i,pathnameBase:s,pattern:e}}function Y$(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),nc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function K$(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return nc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Zo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const X$=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,J$=e=>X$.test(e);function Z$(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?uo(e):e,i;if(n)if(J$(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),nc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=Ph(n.substring(1),"/"):i=Ph(n,t)}else i=t;return{pathname:i,search:n2(r),hash:r2(o)}}function Ph(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Yc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function e2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function If(e,t){let n=e2(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Lf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=uo(e):(o=ks({},e),De(!o.pathname||!o.pathname.includes("?"),Yc("?","pathname","search",o)),De(!o.pathname||!o.pathname.includes("#"),Yc("#","pathname","hash",o)),De(!o.search||!o.search.includes("#"),Yc("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;o.pathname=p.join("/")}a=d>=0?t[d]:"/"}let c=Z$(o,a),f=s&&s!=="/"&&s.endsWith("/"),u=(i||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(f||u)&&(c.pathname+="/"),c}const wr=e=>e.join("/").replace(/\/\/+/g,"/"),t2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),n2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,r2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function o2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const By=["post","put","patch","delete"];new Set(By);const i2=["get",...By];new Set(i2);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Es(){return Es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Es.apply(this,arguments)}const rc=M.createContext(null),Vy=M.createContext(null),Xn=M.createContext(null),oc=M.createContext(null),On=M.createContext({outlet:null,matches:[],isDataRoute:!1}),Wy=M.createContext(null);function s2(e,t){let{relative:n}=t===void 0?{}:t;ci()||De(!1);let{basename:r,navigator:o}=M.useContext(Xn),{hash:i,pathname:s,search:a}=ic(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:wr([r,s])),o.createHref({pathname:c,search:a,hash:i})}function ci(){return M.useContext(oc)!=null}function Tr(){return ci()||De(!1),M.useContext(oc).location}function Hy(e){M.useContext(Xn).static||M.useLayoutEffect(e)}function Ar(){let{isDataRoute:e}=M.useContext(On);return e?$2():a2()}function a2(){ci()||De(!1);let e=M.useContext(rc),{basename:t,future:n,navigator:r}=M.useContext(Xn),{matches:o}=M.useContext(On),{pathname:i}=Tr(),s=JSON.stringify(If(o,n.v7_relativeSplatPath)),a=M.useRef(!1);return Hy(()=>{a.current=!0}),M.useCallback(function(f,u){if(u===void 0&&(u={}),!a.current)return;if(typeof f=="number"){r.go(f);return}let d=Lf(f,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:wr([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,s,i,e])}const l2=M.createContext(null);function c2(e){let t=M.useContext(On).outlet;return t&&M.createElement(l2.Provider,{value:e},t)}function qy(){let{matches:e}=M.useContext(On),t=e[e.length-1];return t?t.params:{}}function ic(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=M.useContext(Xn),{matches:o}=M.useContext(On),{pathname:i}=Tr(),s=JSON.stringify(If(o,r.v7_relativeSplatPath));return M.useMemo(()=>Lf(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function u2(e,t){return d2(e,t)}function d2(e,t,n,r){ci()||De(!1);let{navigator:o}=M.useContext(Xn),{matches:i}=M.useContext(On),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let f=Tr(),u;if(t){var d;let k=typeof t=="string"?uo(t):t;c==="/"||(d=k.pathname)!=null&&d.startsWith(c)||De(!1),u=k}else u=f;let p=u.pathname||"/",m=p;if(c!=="/"){let k=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let h=I$(e,{pathname:m}),b=g2(h&&h.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:wr([c,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:wr([c,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&b?M.createElement(oc.Provider,{value:{location:Es({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:dr.Pop}},b):b}function f2(){let e=b2(),t=o2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},t),n?M.createElement("pre",{style:o},n):null,null)}const p2=M.createElement(f2,null);class h2 extends M.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?M.createElement(On.Provider,{value:this.props.routeContext},M.createElement(Wy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function m2(e){let{routeContext:t,match:n,children:r}=e,o=M.useContext(rc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(On.Provider,{value:t},r)}function g2(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let u=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||De(!1),s=s.slice(0,Math.min(s.length,u+1))}let c=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let d=s[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(f=u),d.route.id){let{loaderData:p,errors:m}=n,h=d.route.loader&&p[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||h){c=!0,f>=0?s=s.slice(0,f+1):s=[s[0]];break}}}return s.reduceRight((u,d,p)=>{let m,h=!1,b=null,k=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,b=d.route.errorElement||p2,c&&(f<0&&p===0?(w2("route-fallback"),h=!0,k=null):f===p&&(h=!0,k=d.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,p+1)),y=()=>{let v;return m?v=b:h?v=k:d.route.Component?v=M.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=u,M.createElement(m2,{match:d,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?M.createElement(h2,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var Gy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gy||{}),Qy=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qy||{});function y2(e){let t=M.useContext(rc);return t||De(!1),t}function x2(e){let t=M.useContext(Vy);return t||De(!1),t}function v2(e){let t=M.useContext(On);return t||De(!1),t}function Yy(e){let t=v2(),n=t.matches[t.matches.length-1];return n.route.id||De(!1),n.route.id}function b2(){var e;let t=M.useContext(Wy),n=x2(),r=Yy();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function $2(){let{router:e}=y2(Gy.UseNavigateStable),t=Yy(Qy.UseNavigateStable),n=M.useRef(!1);return Hy(()=>{n.current=!0}),M.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Es({fromRouteId:t},i)))},[e,t])}const zh={};function w2(e,t,n){zh[e]||(zh[e]=!0)}function Ky(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function $l(e){let{to:t,replace:n,state:r,relative:o}=e;ci()||De(!1);let{future:i,static:s}=M.useContext(Xn),{matches:a}=M.useContext(On),{pathname:c}=Tr(),f=Ar(),u=Lf(t,If(a,i.v7_relativeSplatPath),c,o==="path"),d=JSON.stringify(u);return M.useEffect(()=>f(JSON.parse(d),{replace:n,state:r,relative:o}),[f,d,o,n,r]),null}function Xy(e){return c2(e.context)}function He(e){De(!1)}function Jy(e){let{basename:t="/",children:n=null,location:r,navigationType:o=dr.Pop,navigator:i,static:s=!1,future:a}=e;ci()&&De(!1);let c=t.replace(/^\/*/,"/"),f=M.useMemo(()=>({basename:c,navigator:i,static:s,future:Es({v7_relativeSplatPath:!1},a)}),[c,a,i,s]);typeof r=="string"&&(r=uo(r));let{pathname:u="/",search:d="",hash:p="",state:m=null,key:h="default"}=r,b=M.useMemo(()=>{let k=Zo(u,c);return k==null?null:{location:{pathname:k,search:d,hash:p,state:m,key:h},navigationType:o}},[c,u,d,p,m,h,o]);return b==null?null:M.createElement(Xn.Provider,{value:f},M.createElement(oc.Provider,{children:n,value:b}))}function S2(e){let{children:t,location:n}=e;return u2(yd(t),n)}new Promise(()=>{});function yd(e,t){t===void 0&&(t=[]);let n=[];return M.Children.forEach(e,(r,o)=>{if(!M.isValidElement(r))return;let i=[...t,o];if(r.type===M.Fragment){n.push.apply(n,yd(r.props.children,i));return}r.type!==He&&De(!1),!r.props.index||!r.props.children||De(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=yd(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wl.apply(this,arguments)}function Zy(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function k2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _2(e,t){return e.button===0&&(!t||t==="_self")&&!k2(e)}const E2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],j2=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],C2="6";try{window.__reactRouterVersion=C2}catch{}const F2=M.createContext({isTransitioning:!1}),T2="startTransition",Sl=wv[T2];function A2(e){let{basename:t,children:n,future:r,window:o}=e,i=M.useRef();i.current==null&&(i.current=z$({window:o,v5Compat:!0}));let s=i.current,[a,c]=M.useState({action:s.action,location:s.location}),{v7_startTransition:f}=r||{},u=M.useCallback(d=>{f&&Sl?Sl(()=>c(d)):c(d)},[c,f]);return M.useLayoutEffect(()=>s.listen(u),[s,u]),M.useEffect(()=>Ky(r),[r]),M.createElement(Jy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}function R2(e){let{basename:t,children:n,future:r,window:o}=e,i=M.useRef();i.current==null&&(i.current=O$({window:o,v5Compat:!0}));let s=i.current,[a,c]=M.useState({action:s.action,location:s.location}),{v7_startTransition:f}=r||{},u=M.useCallback(d=>{f&&Sl?Sl(()=>c(d)):c(d)},[c,f]);return M.useLayoutEffect(()=>s.listen(u),[s,u]),M.useEffect(()=>Ky(r),[r]),M.createElement(Jy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const P2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,O2=M.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:c,to:f,preventScrollReset:u,viewTransition:d}=t,p=Zy(t,E2),{basename:m}=M.useContext(Xn),h,b=!1;if(typeof f=="string"&&z2.test(f)&&(h=f,P2))try{let v=new URL(window.location.href),$=f.startsWith("//")?new URL(v.protocol+f):new URL(f),C=Zo($.pathname,m);$.origin===v.origin&&C!=null?f=C+$.search+$.hash:b=!0}catch{}let k=s2(f,{relative:o}),g=L2(f,{replace:s,state:a,target:c,preventScrollReset:u,relative:o,viewTransition:d});function y(v){r&&r(v),v.defaultPrevented||g(v)}return M.createElement("a",wl({},p,{href:h||k,onClick:b||i?r:y,ref:n,target:c}))}),N2=M.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:c,viewTransition:f,children:u}=t,d=Zy(t,j2),p=ic(c,{relative:d.relative}),m=Tr(),h=M.useContext(Vy),{navigator:b,basename:k}=M.useContext(Xn),g=h!=null&&D2(p)&&f===!0,y=b.encodeLocation?b.encodeLocation(p).pathname:p.pathname,v=m.pathname,$=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;o||(v=v.toLowerCase(),$=$?$.toLowerCase():null,y=y.toLowerCase()),$&&k&&($=Zo($,k)||$);const C=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let _=v===y||!s&&v.startsWith(y)&&v.charAt(C)==="/",F=$!=null&&($===y||!s&&$.startsWith(y)&&$.charAt(y.length)==="/"),x={isActive:_,isPending:F,isTransitioning:g},S=_?r:void 0,T;typeof i=="function"?T=i(x):T=[i,_?"active":null,F?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let A=typeof a=="function"?a(x):a;return M.createElement(O2,wl({},d,{"aria-current":S,className:T,ref:n,style:A,to:c,viewTransition:f}),typeof u=="function"?u(x):u)});var xd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xd||(xd={}));var Oh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Oh||(Oh={}));function I2(e){let t=M.useContext(rc);return t||De(!1),t}function L2(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,c=Ar(),f=Tr(),u=ic(e,{relative:s});return M.useCallback(d=>{if(_2(d,n)){d.preventDefault();let p=r!==void 0?r:_s(f)===_s(u);c(e,{replace:p,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[f,c,u,r,o,n,e,i,s,a])}function D2(e,t){t===void 0&&(t={});let n=M.useContext(F2);n==null&&De(!1);let{basename:r}=I2(xd.useViewTransitionState),o=ic(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Zo(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Zo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return gd(o.pathname,s)!=null||gd(o.pathname,i)!=null}var ct=function(){return ct=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ct.apply(this,arguments)};function ei(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Te="-ms-",ts="-moz-",ke="-webkit-",e1="comm",sc="rule",Df="decl",U2="@import",M2="@namespace",t1="@keyframes",B2="@layer",n1=Math.abs,Uf=String.fromCharCode,vd=Object.assign;function V2(e,t){return it(e,0)^45?(((t<<2^it(e,0))<<2^it(e,1))<<2^it(e,2))<<2^it(e,3):0}function r1(e){return e.trim()}function Dn(e,t){return(e=t.exec(e))?e[0]:e}function he(e,t,n){return e.replace(t,n)}function Ia(e,t,n){return e.indexOf(t,n)}function it(e,t){return e.charCodeAt(t)|0}function oo(e,t,n){return e.slice(t,n)}function yn(e){return e.length}function o1(e){return e.length}function Mi(e,t){return t.push(e),e}function W2(e,t){return e.map(t).join("")}function Nh(e,t){return e.filter(function(n){return!Dn(n,t)})}var ac=1,ti=1,i1=0,un=0,Je=0,ui="";function lc(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ac,column:ti,length:s,return:"",siblings:a}}function rr(e,t){return vd(lc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function go(e){for(;e.root;)e=rr(e.root,{children:[e]});Mi(e,e.siblings)}function H2(){return Je}function q2(){return Je=un>0?it(ui,--un):0,ti--,Je===10&&(ti=1,ac--),Je}function Sn(){return Je=un<i1?it(ui,un++):0,ti++,Je===10&&(ti=1,ac++),Je}function fr(){return it(ui,un)}function La(){return un}function cc(e,t){return oo(ui,e,t)}function js(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G2(e){return ac=ti=1,i1=yn(ui=e),un=0,[]}function Q2(e){return ui="",e}function Kc(e){return r1(cc(un-1,bd(e===91?e+2:e===40?e+1:e)))}function Y2(e){for(;(Je=fr())&&Je<33;)Sn();return js(e)>2||js(Je)>3?"":" "}function K2(e,t){for(;--t&&Sn()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return cc(e,La()+(t<6&&fr()==32&&Sn()==32))}function bd(e){for(;Sn();)switch(Je){case e:return un;case 34:case 39:e!==34&&e!==39&&bd(Je);break;case 40:e===41&&bd(e);break;case 92:Sn();break}return un}function X2(e,t){for(;Sn()&&e+Je!==57;)if(e+Je===84&&fr()===47)break;return"/*"+cc(t,un-1)+"*"+Uf(e===47?e:Sn())}function J2(e){for(;!js(fr());)Sn();return cc(e,un)}function Z2(e){return Q2(Da("",null,null,null,[""],e=G2(e),0,[0],e))}function Da(e,t,n,r,o,i,s,a,c){for(var f=0,u=0,d=s,p=0,m=0,h=0,b=1,k=1,g=1,y=0,v="",$=o,C=i,_=r,F=v;k;)switch(h=y,y=Sn()){case 40:if(h!=108&&it(F,d-1)==58){Ia(F+=he(Kc(y),"&","&\f"),"&\f",n1(f?a[f-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:F+=Kc(y);break;case 9:case 10:case 13:case 32:F+=Y2(h);break;case 92:F+=K2(La()-1,7);continue;case 47:switch(fr()){case 42:case 47:Mi(ew(X2(Sn(),La()),t,n,c),c),(js(h||1)==5||js(fr()||1)==5)&&yn(F)&&oo(F,-1,void 0)!==" "&&(F+=" ");break;default:F+="/"}break;case 123*b:a[f++]=yn(F)*g;case 125*b:case 59:case 0:switch(y){case 0:case 125:k=0;case 59+u:g==-1&&(F=he(F,/\f/g,"")),m>0&&(yn(F)-d||b===0&&h===47)&&Mi(m>32?Lh(F+";",r,n,d-1,c):Lh(he(F," ","")+";",r,n,d-2,c),c);break;case 59:F+=";";default:if(Mi(_=Ih(F,t,n,f,u,o,a,v,$=[],C=[],d,i),i),y===123)if(u===0)Da(F,t,_,_,$,i,d,a,C);else{switch(p){case 99:if(it(F,3)===110)break;case 108:if(it(F,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Da(e,_,_,r&&Mi(Ih(e,_,_,0,0,o,a,v,o,$=[],d,C),C),o,C,d,a,r?$:C):Da(F,_,_,_,[""],C,0,a,C)}}f=u=m=0,b=g=1,v=F="",d=s;break;case 58:d=1+yn(F),m=h;default:if(b<1){if(y==123)--b;else if(y==125&&b++==0&&q2()==125)continue}switch(F+=Uf(y),y*b){case 38:g=u>0?1:(F+="\f",-1);break;case 44:a[f++]=(yn(F)-1)*g,g=1;break;case 64:fr()===45&&(F+=Kc(Sn())),p=fr(),u=d=yn(v=F+=J2(La())),y++;break;case 45:h===45&&yn(F)==2&&(b=0)}}return i}function Ih(e,t,n,r,o,i,s,a,c,f,u,d){for(var p=o-1,m=o===0?i:[""],h=o1(m),b=0,k=0,g=0;b<r;++b)for(var y=0,v=oo(e,p+1,p=n1(k=s[b])),$=e;y<h;++y)($=r1(k>0?m[y]+" "+v:he(v,/&\f/g,m[y])))&&(c[g++]=$);return lc(e,t,n,o===0?sc:a,c,f,u,d)}function ew(e,t,n,r){return lc(e,t,n,e1,Uf(H2()),oo(e,2,-2),0,r)}function Lh(e,t,n,r,o){return lc(e,t,n,Df,oo(e,0,r),oo(e,r+1,-1),r,o)}function s1(e,t,n){switch(V2(e,t)){case 5103:return ke+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ke+e+e;case 4855:return ke+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ts+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+e+ts+e+Te+e+e;case 5936:switch(it(e,t+11)){case 114:return ke+e+Te+he(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ke+e+Te+he(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ke+e+Te+he(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ke+e+Te+e+e;case 6165:return ke+e+Te+"flex-"+e+e;case 5187:return ke+e+he(e,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Te+"flex-$1$2")+e;case 5443:return ke+e+Te+"flex-item-"+he(e,/flex-|-self/g,"")+(Dn(e,/flex-|baseline/)?"":Te+"grid-row-"+he(e,/flex-|-self/g,""))+e;case 4675:return ke+e+Te+"flex-line-pack"+he(e,/align-content|flex-|-self/g,"")+e;case 5548:return ke+e+Te+he(e,"shrink","negative")+e;case 5292:return ke+e+Te+he(e,"basis","preferred-size")+e;case 6060:return ke+"box-"+he(e,"-grow","")+ke+e+Te+he(e,"grow","positive")+e;case 4554:return ke+he(e,/([^-])(transform)/g,"$1"+ke+"$2")+e;case 6187:return he(he(he(e,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),e,"")+e;case 5495:case 3959:return he(e,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return he(he(e,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Te+"flex-pack:$3"),/space-between/,"justify")+ke+e+e;case 4200:if(!Dn(e,/flex-|baseline/))return Te+"grid-column-align"+oo(e,t)+e;break;case 2592:case 3360:return Te+he(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Dn(r.props,/grid-\w+-end/)})?~Ia(e+(n=n[t].value),"span",0)?e:Te+he(e,"-start","")+e+Te+"grid-row-span:"+(~Ia(n,"span",0)?Dn(n,/\d+/):+Dn(n,/\d+/)-+Dn(e,/\d+/))+";":Te+he(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Dn(r.props,/grid-\w+-start/)})?e:Te+he(he(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return he(e,/(.+)-inline(.+)/,ke+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yn(e)-1-t>6)switch(it(e,t+1)){case 109:if(it(e,t+4)!==45)break;case 102:return he(e,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+ts+(it(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ia(e,"stretch",0)?s1(he(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return he(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,c,f){return Te+o+":"+i+f+(s?Te+o+"-span:"+(a?c:+c-+i)+f:"")+e});case 4949:if(it(e,t+6)===121)return he(e,":",":"+ke)+e;break;case 6444:switch(it(e,it(e,14)===45?18:11)){case 120:return he(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(it(e,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Te+"$2box$3")+e;case 100:return he(e,":",":"+Te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(e,"scroll-","scroll-snap-")+e}return e}function kl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function tw(e,t,n,r){switch(e.type){case B2:if(e.children.length)break;case U2:case M2:case Df:return e.return=e.return||e.value;case e1:return"";case t1:return e.return=e.value+"{"+kl(e.children,r)+"}";case sc:if(!yn(e.value=e.props.join(",")))return""}return yn(n=kl(e.children,r))?e.return=e.value+"{"+n+"}":""}function nw(e){var t=o1(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function rw(e){return function(t){t.root||(t=t.return)&&e(t)}}function ow(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Df:e.return=s1(e.value,e.length,n);return;case t1:return kl([rr(e,{value:he(e.value,"@","@"+ke)})],r);case sc:if(e.length)return W2(n=e.props,function(o){switch(Dn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":go(rr(e,{props:[he(o,/:(read-\w+)/,":"+ts+"$1")]})),go(rr(e,{props:[o]})),vd(e,{props:Nh(n,r)});break;case"::placeholder":go(rr(e,{props:[he(o,/:(plac\w+)/,":"+ke+"input-$1")]})),go(rr(e,{props:[he(o,/:(plac\w+)/,":"+ts+"$1")]})),go(rr(e,{props:[he(o,/:(plac\w+)/,Te+"input-$1")]})),go(rr(e,{props:[o]})),vd(e,{props:Nh(n,r)});break}return""})}}var iw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gt={},ni=typeof process<"u"&&Gt!==void 0&&(Gt.REACT_APP_SC_ATTR||Gt.SC_ATTR)||"data-styled",a1="active",l1="data-styled-version",uc="6.3.11",Mf=`/*!sc*/
`,ns=typeof window<"u"&&typeof document<"u",sw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==""?Gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.SC_DISABLE_SPEEDY!==void 0&&Gt.SC_DISABLE_SPEEDY!==""&&Gt.SC_DISABLE_SPEEDY!=="false"&&Gt.SC_DISABLE_SPEEDY),aw={};function io(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ua=new Map,_l=new Map,Ma=1,Bi=function(e){if(Ua.has(e))return Ua.get(e);for(;_l.has(Ma);)Ma++;var t=Ma++;return Ua.set(e,t),_l.set(t,e),t},lw=function(e,t){Ma=t+1,Ua.set(e,t),_l.set(t,e)},Bf=Object.freeze([]),ri=Object.freeze({});function c1(e,t,n){return n===void 0&&(n=ri),e.theme!==n.theme&&e.theme||t||n.theme}var u1=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),cw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uw=/(^-|-$)/g;function Dh(e){return e.replace(cw,"-").replace(uw,"")}var dw=/(a)(d)/gi,Uh=function(e){return String.fromCharCode(e+(e>25?39:97))};function $d(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Uh(t%52)+n;return(Uh(t%52)+n).replace(dw,"$1-$2")}var Xc,Lr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},d1=function(e){return Lr(5381,e)};function Vf(e){return $d(d1(e)>>>0)}function fw(e){return e.displayName||e.name||"Component"}function Jc(e){return typeof e=="string"&&!0}var f1=typeof Symbol=="function"&&Symbol.for,p1=f1?Symbol.for("react.memo"):60115,pw=f1?Symbol.for("react.forward_ref"):60112,hw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},h1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gw=((Xc={})[pw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xc[p1]=h1,Xc);function Mh(e){return("type"in(t=e)&&t.type.$$typeof)===p1?h1:"$$typeof"in e?gw[e.$$typeof]:hw;var t}var yw=Object.defineProperty,xw=Object.getOwnPropertyNames,Bh=Object.getOwnPropertySymbols,vw=Object.getOwnPropertyDescriptor,bw=Object.getPrototypeOf,Vh=Object.prototype;function m1(e,t,n){if(typeof t!="string"){if(Vh){var r=bw(t);r&&r!==Vh&&m1(e,r,n)}var o=xw(t);Bh&&(o=o.concat(Bh(t)));for(var i=Mh(e),s=Mh(t),a=0;a<o.length;++a){var c=o[a];if(!(c in mw||n&&n[c]||s&&c in s||i&&c in i)){var f=vw(t,c);try{yw(e,c,f)}catch{}}}}return e}function so(e){return typeof e=="function"}function Wf(e){return typeof e=="object"&&"styledComponentId"in e}function Vr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function El(e,t){return e.join("")}function Cs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function wd(e,t,n){if(n===void 0&&(n=!1),!n&&!Cs(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=wd(e[r],t[r]);else if(Cs(t))for(var r in t)e[r]=wd(e[r],t[r]);return e}function Hf(e,t){Object.defineProperty(e,"toString",{value:t})}var $w=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw io(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),c=0,f=(s=0,n.length);s<f;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++,c++);c>0&&this._cGroup>t&&(this._cIndex+=c)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+=this.tag.getRule(s)+Mf;return n},e}(),ww="style[".concat(ni,"][").concat(l1,'="').concat(uc,'"]'),Sw=new RegExp("^".concat(ni,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Wh=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Sd=function(e){if(!e)return document;if(Wh(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Wh(t))return t}return document},kw=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},_w=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Mf),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var c=a.match(Sw);if(c){var f=0|parseInt(c[1],10),u=c[2];f!==0&&(lw(u,f),kw(e,u,c[3]),e.getTag().insertRules(f,o)),o.length=0}else o.push(a)}}},Zc=function(e){for(var t=Sd(e.options.target).querySelectorAll(ww),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(ni)!==a1&&(_w(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Ew(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var g1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var c=Array.from(a.querySelectorAll("style[".concat(ni,"]")));return c[c.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(ni,a1),r.setAttribute(l1,uc);var s=Ew();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},jw=function(){function e(t){this.element=g1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,i=0,s=o.length;i<s;i++){var a=o[i];if(a.ownerNode===n)return a}throw io(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Cw=function(){function e(t){this.element=g1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Fw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Hh=ns,Tw={isServer:!ns,useCSSOMInjection:!sw},jl=function(){function e(t,n,r){t===void 0&&(t=ri),n===void 0&&(n={});var o=this;this.options=ct(ct({},Tw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ns&&Hh&&(Hh=!1,Zc(this)),Hf(this,function(){return function(i){for(var s=i.getTag(),a=s.length,c="",f=function(d){var p=function(g){return _l.get(g)}(d);if(p===void 0)return"continue";var m=i.names.get(p);if(m===void 0||!m.size)return"continue";var h=s.getGroup(d);if(h.length===0)return"continue";var b=ni+".g"+d+'[id="'+p+'"]',k="";m.forEach(function(g){g.length>0&&(k+=g+",")}),c+=h+b+'{content:"'+k+'"}'+Mf},u=0;u<a;u++)f(u);return c}(o)})}return e.registerId=function(t){return Bi(t)},e.prototype.rehydrate=function(){!this.server&&ns&&Zc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ct(ct({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ns&&t.target!==this.options.target&&Sd(this.options.target)!==Sd(t.target)&&Zc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Fw(o):r?new jw(o):new Cw(o)}(this.options),new $w(t)));var t},e.prototype.hasNameForId=function(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o},e.prototype.registerName=function(t,n){Bi(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Bi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Bi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Aw=/&/g,Un=47,Dr=42;function qh(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,o=!1,i=0;i<t;i++){var s=e.charCodeAt(i);if(r!==0||o||s!==Un||e.charCodeAt(i+1)!==Dr)if(o)s===Dr&&e.charCodeAt(i+1)===Un&&(o=!1,i++);else if(s!==34&&s!==39||i!==0&&e.charCodeAt(i-1)===92){if(r===0){if(s===123)n++;else if(s===125&&--n<0)return!0}}else r===0?r=s:r===s&&(r=0);else o=!0,i++}return n!==0||r!==0}function y1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=y1(n.children,t)),n})}function Rw(e){var t,n,r,o=ri,i=o.options,s=i===void 0?ri:i,a=o.plugins,c=a===void 0?Bf:a,f=function(h,b,k){return k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):h},u=c.slice();u.push(function(h){h.type===sc&&h.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),h.props[0]=h.props[0].replace(Aw,n).replace(r,f))}),s.prefix&&u.push(ow),u.push(tw);var d=[],p=nw(u.concat(rw(function(h){return d.push(h)}))),m=function(h,b,k,g){b===void 0&&(b=""),k===void 0&&(k=""),g===void 0&&(g="&"),t=g,n=b,r=void 0;var y=function($){if(!qh($))return $;for(var C=$.length,_="",F=0,x=0,S=0,T=!1,A=0;A<C;A++){var R=$.charCodeAt(A);if(S!==0||T||R!==Un||$.charCodeAt(A+1)!==Dr)if(T)R===Dr&&$.charCodeAt(A+1)===Un&&(T=!1,A++);else if(R!==34&&R!==39||A!==0&&$.charCodeAt(A-1)===92){if(S===0)if(R===123)x++;else if(R===125){if(--x<0){for(var N=A+1;N<C;){var O=$.charCodeAt(N);if(O===59||O===10)break;N++}N<C&&$.charCodeAt(N)===59&&N++,x=0,A=N-1,F=N;continue}x===0&&(_+=$.substring(F,A+1),F=A+1)}else R===59&&x===0&&(_+=$.substring(F,A+1),F=A+1)}else S===0?S=R:S===R&&(S=0);else T=!0,A++}if(F<C){var U=$.substring(F);qh(U)||(_+=U)}return _}(function($){if($.indexOf("//")===-1)return $;for(var C=$.length,_=[],F=0,x=0,S=0,T=0;x<C;){var A=$.charCodeAt(x);if(A!==34&&A!==39||x!==0&&$.charCodeAt(x-1)===92)if(S===0)if(A===Un&&x+1<C&&$.charCodeAt(x+1)===Dr){for(x+=2;x+1<C&&($.charCodeAt(x)!==Dr||$.charCodeAt(x+1)!==Un);)x++;x+=2}else if(A===40&&x>=3&&(32|$.charCodeAt(x-1))==108&&(32|$.charCodeAt(x-2))==114&&(32|$.charCodeAt(x-3))==117)T=1,x++;else if(T>0)A===41?T--:A===40&&T++,x++;else if(A===Dr&&x+1<C&&$.charCodeAt(x+1)===Un)x>F&&_.push($.substring(F,x)),F=x+=2;else if(A===Un&&x+1<C&&$.charCodeAt(x+1)===Un){for(x>F&&_.push($.substring(F,x));x<C&&$.charCodeAt(x)!==10;)x++;F=x}else x++;else x++;else S===0?S=A:S===A&&(S=0),x++}return F===0?$:(F<C&&_.push($.substring(F)),_.join(""))}(h)),v=Z2(k||b?"".concat(k," ").concat(b," { ").concat(y," }"):y);return s.namespace&&(v=y1(v,s.namespace)),d=[],kl(v,p),d};return m.hash=c.length?c.reduce(function(h,b){return b.name||io(15),Lr(h,b.name)},5381).toString():"",m}var Pw=new jl,kd=Rw(),x1=se.createContext({shouldForwardProp:void 0,styleSheet:Pw,stylis:kd});x1.Consumer;se.createContext(void 0);function _d(){return se.useContext(x1)}var v1=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=kd);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Hf(this,function(){throw io(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=kd),this.name+t.hash},e}();function zw(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in iw||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Ow=function(e){return e>="A"&&e<="Z"};function Gh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Ow(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var b1=function(e){return e==null||e===!1||e===""},$1=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!b1(r)&&(Array.isArray(r)&&r.isCss||so(r)?t.push("".concat(Gh(n),":"),r,";"):Cs(r)?t.push.apply(t,ei(ei(["".concat(n," {")],$1(r),!1),["}"],!1)):t.push("".concat(Gh(n),": ").concat(zw(n,r),";")))}return t};function Sr(e,t,n,r,o){if(o===void 0&&(o=[]),typeof e=="string")return e&&o.push(e),o;if(b1(e))return o;if(Wf(e))return o.push(".".concat(e.styledComponentId)),o;if(so(e)){if(!so(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return o.push(e),o;var i=e(t);return Sr(i,t,n,r,o)}var s;if(e instanceof v1)return n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o;if(Cs(e)){for(var a=$1(e),c=0;c<a.length;c++)o.push(a[c]);return o}if(!Array.isArray(e))return o.push(e.toString()),o;for(c=0;c<e.length;c++)Sr(e[c],t,n,r,o);return o}function w1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(so(n)&&!Wf(n))return!1}return!0}var Nw=d1(uc),Iw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&w1(t),this.componentId=n,this.baseHash=Lr(Nw,n),this.baseStyle=r,jl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Vr(o,this.staticRulesId);else{var i=El(Sr(this.rules,t,n,r)),s=$d(Lr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=Vr(o,s),this.staticRulesId=s}else{for(var c=Lr(this.baseHash,r.hash),f="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")f+=d;else if(d){var p=El(Sr(d,t,n,r));c=Lr(Lr(c,String(u)),p),f+=p}}if(f){var m=$d(c>>>0);if(!n.hasNameForId(this.componentId,m)){var h=r(f,".".concat(m),void 0,this.componentId);n.insertRules(this.componentId,m,h)}o=Vr(o,m)}}return{className:o,css:typeof window>"u"?n.getTag().getGroup(Bi(this.componentId)):""}},e}(),Fs=se.createContext(void 0);Fs.Consumer;function Lw(e){var t=se.useContext(Fs),n=se.useMemo(function(){return function(r,o){if(!r)throw io(14);if(so(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw io(8);return o?ct(ct({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?se.createElement(Fs.Provider,{value:n},e.children):null}var eu={};function Dw(e,t,n){var r=Wf(e),o=e,i=!Jc(e),s=t.attrs,a=s===void 0?Bf:s,c=t.componentId,f=c===void 0?function($,C){var _=typeof $!="string"?"sc":Dh($);eu[_]=(eu[_]||0)+1;var F="".concat(_,"-").concat(Vf(uc+_+eu[_]));return C?"".concat(C,"-").concat(F):F}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function($){return Jc($)?"styled.".concat($):"Styled(".concat(fw($),")")}(e):u,p=t.displayName&&t.componentId?"".concat(Dh(t.displayName),"-").concat(t.componentId):t.componentId||f,m=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,h=t.shouldForwardProp;if(r&&o.shouldForwardProp){var b=o.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;h=function($,C){return b($,C)&&k($,C)}}else h=b}var g=new Iw(n,p,r?o.componentStyle:void 0);function y($,C){return function(_,F,x){var S=_.attrs,T=_.componentStyle,A=_.defaultProps,R=_.foldedComponentIds,N=_.styledComponentId,O=_.target,U=se.useContext(Fs),E=_d(),w=_.shouldForwardProp||E.shouldForwardProp,I=c1(F,U,A)||ri,P=function(W,te,ee){for(var ie,ae=ct(ct({},te),{className:void 0,theme:ee}),de=0;de<W.length;de+=1){var we=so(ie=W[de])?ie(ae):ie;for(var Me in we)Me==="className"?ae.className=Vr(ae.className,we[Me]):Me==="style"?ae.style=ct(ct({},ae.style),we[Me]):ae[Me]=we[Me]}return"className"in te&&typeof te.className=="string"&&(ae.className=Vr(ae.className,te.className)),ae}(S,F,I),L=P.as||O,Q={};for(var V in P)P[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&P.theme===I||(V==="forwardedAs"?Q.as=P.forwardedAs:w&&!w(V,L)||(Q[V]=P[V]));var Y=function(W,te){var ee=_d(),ie=W.generateAndInjectStyles(te,ee.styleSheet,ee.stylis);return ie}(T,P),G=Y.className,D=Vr(R,N);return G&&(D+=" "+G),P.className&&(D+=" "+P.className),Q[Jc(L)&&!u1.has(L)?"class":"className"]=D,x&&(Q.ref=x),M.createElement(L,Q)}(v,$,C)}y.displayName=d;var v=se.forwardRef(y);return v.attrs=m,v.componentStyle=g,v.displayName=d,v.shouldForwardProp=h,v.foldedComponentIds=r?Vr(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=p,v.target=r?o.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=r?function(C){for(var _=[],F=1;F<arguments.length;F++)_[F-1]=arguments[F];for(var x=0,S=_;x<S.length;x++)wd(C,S[x],!0);return C}({},o.defaultProps,$):$}}),Hf(v,function(){return".".concat(v.styledComponentId)}),i&&m1(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Qh(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Yh=function(e){return Object.assign(e,{isCss:!0})};function Is(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(so(e)||Cs(e))return Yh(Sr(Qh(Bf,ei([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Sr(r):Yh(Sr(Qh(r,t)))}function Ed(e,t,n){if(n===void 0&&(n=ri),!t)throw io(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Is.apply(void 0,ei([o],i,!1)))};return r.attrs=function(o){return Ed(e,t,ct(ct({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Ed(e,t,ct(ct({},n),o))},r}var S1=function(e){return Ed(Dw,e)},j=S1;u1.forEach(function(e){j[e]=S1(e)});var Uw=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=w1(t),jl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(El(Sr(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&jl.registerId(this.componentId+t);var i=this.componentId+t;this.isStatic?r.hasNameForId(i,i)||this.createStyles(t,n,r,o):(this.removeStyles(t,r),this.createStyles(t,n,r,o))},e}();function Mw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Is.apply(void 0,ei([e],t,!1)),o="sc-global-".concat(Vf(JSON.stringify(r))),i=new Uw(r,o),s=new WeakMap,a=function(f){var u=_d(),d=se.useContext(Fs),p=s.get(u.styleSheet);return p===void 0&&(p=u.styleSheet.allocateGSInstance(o),s.set(u.styleSheet,p)),(typeof window>"u"||!u.styleSheet.server)&&c(p,f,u.styleSheet,d,u.stylis),se.useLayoutEffect(function(){return u.styleSheet.server||c(p,f,u.styleSheet,d,u.stylis),function(){var m;i.removeStyles(p,u.styleSheet),m=u.styleSheet.options.target,typeof document<"u"&&(m??document).querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(h){return h.remove()})}},[p,f,u.styleSheet,d,u.stylis]),null};function c(f,u,d,p,m){if(i.isStatic)i.renderStyles(f,aw,d,m);else{var h=ct(ct({},u),{theme:c1(u,p,a.defaultProps)});i.renderStyles(f,h,d,m)}}return se.memo(a)}function tt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=El(Is.apply(void 0,ei([e],t,!1))),o=Vf(r);return new v1(o,r)}function k1(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=k1(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function pr(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=k1(e))&&(r&&(r+=" "),r+=t);return r}const Ts=e=>typeof e=="number"&&!isNaN(e),Kr=e=>typeof e=="string",Xt=e=>typeof e=="function",Ba=e=>Kr(e)||Xt(e)?e:null,jd=e=>M.isValidElement(e)||Kr(e)||Xt(e)||Ts(e);function Bw(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function dc(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(s){let{children:a,position:c,preventExitTransition:f,done:u,nodeRef:d,isIn:p,playToast:m}=s;const h=r?`${t}--${c}`:t,b=r?`${n}--${c}`:n,k=M.useRef(0);return M.useLayoutEffect(()=>{const g=d.current,y=h.split(" "),v=$=>{$.target===d.current&&(m(),g.removeEventListener("animationend",v),g.removeEventListener("animationcancel",v),k.current===0&&$.type!=="animationcancel"&&g.classList.remove(...y))};g.classList.add(...y),g.addEventListener("animationend",v),g.addEventListener("animationcancel",v)},[]),M.useEffect(()=>{const g=d.current,y=()=>{g.removeEventListener("animationend",y),o?Bw(g,u,i):u()};p||(f?y():(k.current=1,g.className+=` ${b}`,g.addEventListener("animationend",y)))},[p]),se.createElement(se.Fragment,null,a)}}function Kh(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const Tt=new Map;let As=[];const Cd=new Set,Vw=e=>Cd.forEach(t=>t(e)),_1=()=>Tt.size>0;function E1(e,t){var n;if(t)return!((n=Tt.get(t))==null||!n.isToastActive(e));let r=!1;return Tt.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function j1(e,t){jd(e)&&(_1()||As.push({content:e,options:t}),Tt.forEach(n=>{n.buildToast(e,t)}))}function Xh(e,t){Tt.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function Ww(e){const{subscribe:t,getSnapshot:n,setProps:r}=M.useRef(function(i){const s=i.containerId||1;return{subscribe(a){const c=function(u,d,p){let m=1,h=0,b=[],k=[],g=[],y=d;const v=new Map,$=new Set,C=()=>{g=Array.from(v.values()),$.forEach(x=>x())},_=x=>{k=x==null?[]:k.filter(S=>S!==x),C()},F=x=>{const{toastId:S,onOpen:T,updateId:A,children:R}=x.props,N=A==null;x.staleId&&v.delete(x.staleId),v.set(S,x),k=[...k,x.props.toastId].filter(O=>O!==x.staleId),C(),p(Kh(x,N?"added":"updated")),N&&Xt(T)&&T(M.isValidElement(R)&&R.props)};return{id:u,props:y,observe:x=>($.add(x),()=>$.delete(x)),toggle:(x,S)=>{v.forEach(T=>{S!=null&&S!==T.props.toastId||Xt(T.toggle)&&T.toggle(x)})},removeToast:_,toasts:v,clearQueue:()=>{h-=b.length,b=[]},buildToast:(x,S)=>{if((V=>{let{containerId:Y,toastId:G,updateId:D}=V;const W=Y?Y!==u:u!==1,te=v.has(G)&&D==null;return W||te})(S))return;const{toastId:T,updateId:A,data:R,staleId:N,delay:O}=S,U=()=>{_(T)},E=A==null;E&&h++;const w={...y,style:y.toastStyle,key:m++,...Object.fromEntries(Object.entries(S).filter(V=>{let[Y,G]=V;return G!=null})),toastId:T,updateId:A,data:R,closeToast:U,isIn:!1,className:Ba(S.className||y.toastClassName),bodyClassName:Ba(S.bodyClassName||y.bodyClassName),progressClassName:Ba(S.progressClassName||y.progressClassName),autoClose:!S.isLoading&&(I=S.autoClose,P=y.autoClose,I===!1||Ts(I)&&I>0?I:P),deleteToast(){const V=v.get(T),{onClose:Y,children:G}=V.props;Xt(Y)&&Y(M.isValidElement(G)&&G.props),p(Kh(V,"removed")),v.delete(T),h--,h<0&&(h=0),b.length>0?F(b.shift()):C()}};var I,P;w.closeButton=y.closeButton,S.closeButton===!1||jd(S.closeButton)?w.closeButton=S.closeButton:S.closeButton===!0&&(w.closeButton=!jd(y.closeButton)||y.closeButton);let L=x;M.isValidElement(x)&&!Kr(x.type)?L=M.cloneElement(x,{closeToast:U,toastProps:w,data:R}):Xt(x)&&(L=x({closeToast:U,toastProps:w,data:R}));const Q={content:L,props:w,staleId:N};y.limit&&y.limit>0&&h>y.limit&&E?b.push(Q):Ts(O)?setTimeout(()=>{F(Q)},O):F(Q)},setProps(x){y=x},setToggle:(x,S)=>{v.get(x).toggle=S},isToastActive:x=>k.some(S=>S===x),getSnapshot:()=>g}}(s,i,Vw);Tt.set(s,c);const f=c.observe(a);return As.forEach(u=>j1(u.content,u.options)),As=[],()=>{f(),Tt.delete(s)}},setProps(a){var c;(c=Tt.get(s))==null||c.setProps(a)},getSnapshot(){var a;return(a=Tt.get(s))==null?void 0:a.getSnapshot()}}}(e)).current;r(e);const o=M.useSyncExternalStore(t,n,n);return{getToastToRender:function(i){if(!o)return[];const s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(a=>{const{position:c}=a.props;s.has(c)||s.set(c,[]),s.get(c).push(a)}),Array.from(s,a=>i(a[0],a[1]))},isToastActive:E1,count:o==null?void 0:o.length}}function Hw(e){const[t,n]=M.useState(!1),[r,o]=M.useState(!1),i=M.useRef(null),s=M.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:c,closeToast:f,onClick:u,closeOnClick:d}=e;var p,m;function h(){n(!0)}function b(){n(!1)}function k(v){const $=i.current;s.canDrag&&$&&(s.didMove=!0,t&&b(),s.delta=e.draggableDirection==="x"?v.clientX-s.start:v.clientY-s.start,s.start!==v.clientX&&(s.canCloseOnClick=!1),$.style.transform=`translate3d(${e.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,$.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("pointermove",k),document.removeEventListener("pointerup",g);const v=i.current;if(s.canDrag&&s.didMove&&v){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();v.style.transition="transform 0.2s, opacity 0.2s",v.style.removeProperty("transform"),v.style.removeProperty("opacity")}}(m=Tt.get((p={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||m.setToggle(p.id,p.fn),M.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||b(),window.addEventListener("focus",h),window.addEventListener("blur",b),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",b)}},[e.pauseOnFocusLoss]);const y={onPointerDown:function(v){if(e.draggable===!0||e.draggable===v.pointerType){s.didMove=!1,document.addEventListener("pointermove",k),document.addEventListener("pointerup",g);const $=i.current;s.canCloseOnClick=!0,s.canDrag=!0,$.style.transition="none",e.draggableDirection==="x"?(s.start=v.clientX,s.removalDistance=$.offsetWidth*(e.draggablePercent/100)):(s.start=v.clientY,s.removalDistance=$.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(v){const{top:$,bottom:C,left:_,right:F}=i.current.getBoundingClientRect();v.nativeEvent.type!=="touchend"&&e.pauseOnHover&&v.clientX>=_&&v.clientX<=F&&v.clientY>=$&&v.clientY<=C?b():h()}};return a&&c&&(y.onMouseEnter=b,e.stacked||(y.onMouseLeave=h)),d&&(y.onClick=v=>{u&&u(v),s.canCloseOnClick&&f()}),{playToast:h,pauseToast:b,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:y}}function qw(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:s,style:a,controlledProgress:c,progress:f,rtl:u,isIn:d,theme:p}=e;const m=i||c&&f===0,h={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};c&&(h.transform=`scaleX(${f})`);const b=pr("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":u}),k=Xt(s)?s({rtl:u,type:o,defaultClassName:b}):pr(b,s),g={[c&&f>=1?"onTransitionEnd":"onAnimationEnd"]:c&&f<1?null:()=>{d&&r()}};return se.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},se.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${o}`}),se.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:k,style:h,...g}))}let Gw=1;const C1=()=>""+Gw++;function Qw(e){return e&&(Kr(e.toastId)||Ts(e.toastId))?e.toastId:C1()}function rs(e,t){return j1(e,t),t.toastId}function Cl(e,t){return{...t,type:t&&t.type||e,toastId:Qw(t)}}function ca(e){return(t,n)=>rs(t,Cl(e,n))}function ue(e,t){return rs(e,Cl("default",t))}ue.loading=(e,t)=>rs(e,Cl("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),ue.promise=function(e,t,n){let r,{pending:o,error:i,success:s}=t;o&&(r=Kr(o)?ue.loading(o,n):ue.loading(o.render,{...n,...o}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(u,d,p)=>{if(d==null)return void ue.dismiss(r);const m={type:u,...a,...n,data:p},h=Kr(d)?{render:d}:d;return r?ue.update(r,{...m,...h}):ue(h.render,{...m,...h}),p},f=Xt(e)?e():e;return f.then(u=>c("success",s,u)).catch(u=>c("error",i,u)),f},ue.success=ca("success"),ue.info=ca("info"),ue.error=ca("error"),ue.warning=ca("warning"),ue.warn=ue.warning,ue.dark=(e,t)=>rs(e,Cl("default",{theme:"dark",...t})),ue.dismiss=function(e){(function(t){var n;if(_1()){if(t==null||Kr(n=t)||Ts(n))Tt.forEach(r=>{r.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const r=Tt.get(t.containerId);r?r.removeToast(t.id):Tt.forEach(o=>{o.removeToast(t.id)})}}else As=As.filter(r=>t!=null&&r.options.toastId!==t)})(e)},ue.clearWaitingQueue=function(e){e===void 0&&(e={}),Tt.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},ue.isActive=E1,ue.update=function(e,t){t===void 0&&(t={});const n=((r,o)=>{var i;let{containerId:s}=o;return(i=Tt.get(s||1))==null?void 0:i.toasts.get(r)})(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:C1()};i.toastId!==e&&(i.staleId=e);const s=i.render||o;delete i.render,rs(s,i)}},ue.done=e=>{ue.update(e,{progress:1})},ue.onChange=function(e){return Cd.add(e),()=>{Cd.delete(e)}},ue.play=e=>Xh(!0,e),ue.pause=e=>Xh(!1,e);const Yw=typeof window<"u"?M.useLayoutEffect:M.useEffect,ua=e=>{let{theme:t,type:n,isLoading:r,...o}=e;return se.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},tu={info:function(e){return se.createElement(ua,{...e},se.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return se.createElement(ua,{...e},se.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return se.createElement(ua,{...e},se.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return se.createElement(ua,{...e},se.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return se.createElement("div",{className:"Toastify__spinner"})}},Kw=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=Hw(e),{closeButton:s,children:a,autoClose:c,onClick:f,type:u,hideProgressBar:d,closeToast:p,transition:m,position:h,className:b,style:k,bodyClassName:g,bodyStyle:y,progressClassName:v,progressStyle:$,updateId:C,role:_,progress:F,rtl:x,toastId:S,deleteToast:T,isIn:A,isLoading:R,closeOnClick:N,theme:O}=e,U=pr("Toastify__toast",`Toastify__toast-theme--${O}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":x},{"Toastify__toast--close-on-click":N}),E=Xt(b)?b({rtl:x,position:h,type:u,defaultClassName:U}):pr(U,b),w=function(Q){let{theme:V,type:Y,isLoading:G,icon:D}=Q,W=null;const te={theme:V,type:Y};return D===!1||(Xt(D)?W=D({...te,isLoading:G}):M.isValidElement(D)?W=M.cloneElement(D,te):G?W=tu.spinner():(ee=>ee in tu)(Y)&&(W=tu[Y](te))),W}(e),I=!!F||!c,P={closeToast:p,type:u,theme:O};let L=null;return s===!1||(L=Xt(s)?s(P):M.isValidElement(s)?M.cloneElement(s,P):function(Q){let{closeToast:V,theme:Y,ariaLabel:G="close"}=Q;return se.createElement("button",{className:`Toastify__close-button Toastify__close-button--${Y}`,type:"button",onClick:D=>{D.stopPropagation(),V(D)},"aria-label":G},se.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},se.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(P)),se.createElement(m,{isIn:A,done:T,position:h,preventExitTransition:n,nodeRef:r,playToast:i},se.createElement("div",{id:S,onClick:f,"data-in":A,className:E,...o,style:k,ref:r},se.createElement("div",{...A&&{role:_},className:Xt(g)?g({type:u}):pr("Toastify__toast-body",g),style:y},w!=null&&se.createElement("div",{className:pr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},w),se.createElement("div",null,a)),L,se.createElement(qw,{...C&&!I?{key:`pb-${C}`}:{},rtl:x,theme:O,delay:c,isRunning:t,isIn:A,closeToast:p,hide:d,type:u,style:$,className:v,controlledProgress:I,progress:F||0})))},fc=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Xw=dc(fc("bounce",!0));dc(fc("slide",!0));dc(fc("zoom"));dc(fc("flip"));const Jw={position:"top-right",transition:Xw,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Zw(e){let t={...Jw,...e};const n=e.stacked,[r,o]=M.useState(!0),i=M.useRef(null),{getToastToRender:s,isToastActive:a,count:c}=Ww(t),{className:f,style:u,rtl:d,containerId:p}=t;function m(b){const k=pr("Toastify__toast-container",`Toastify__toast-container--${b}`,{"Toastify__toast-container--rtl":d});return Xt(f)?f({position:b,rtl:d,defaultClassName:k}):pr(k,Ba(f))}function h(){n&&(o(!0),ue.play())}return Yw(()=>{if(n){var b;const k=i.current.querySelectorAll('[data-in="true"]'),g=12,y=(b=t.position)==null?void 0:b.includes("top");let v=0,$=0;Array.from(k).reverse().forEach((C,_)=>{const F=C;F.classList.add("Toastify__toast--stacked"),_>0&&(F.dataset.collapsed=`${r}`),F.dataset.pos||(F.dataset.pos=y?"top":"bot");const x=v*(r?.2:1)+(r?0:g*_);F.style.setProperty("--y",`${y?x:-1*x}px`),F.style.setProperty("--g",`${g}`),F.style.setProperty("--s",""+(1-(r?$:0))),v+=F.offsetHeight,$+=.025})}},[r,c,n]),se.createElement("div",{ref:i,className:"Toastify",id:p,onMouseEnter:()=>{n&&(o(!1),ue.pause())},onMouseLeave:h},s((b,k)=>{const g=k.length?{...u}:{...u,pointerEvents:"none"};return se.createElement("div",{className:m(b),style:g,key:`container-${b}`},k.map(y=>{let{content:v,props:$}=y;return se.createElement(Kw,{...$,stacked:n,collapseAll:h,isIn:a($.toastId,$.containerId),style:$.style,key:`toast-${$.key}`},v)}))}))}const xe={primary:{50:"#fdf3e7",100:"#fae0c3",200:"#f5c28a",300:"#eda04e",400:"#e08530",500:"#C4671A",600:"#B45A14",700:"#96480f",800:"#7a3a0c",900:"#5e2c08"},neutral:{50:"#faf7f5",100:"#f2ece6",200:"#e4d9cf",300:"#cfc0b0",400:"#b5a090",500:"#96806e",600:"#7a6455",700:"#5e4d42",800:"#3d3028",900:"#231b15",950:"#130e0a"},success:{light:"#d1fae5",base:"#059669",dark:"#065f46"},warning:{light:"#fef3c7",base:"#d97706",dark:"#92400e"},error:{light:"#fee2e2",base:"#dc2626",dark:"#991b1b"},info:{light:"#dbeafe",base:"#2563eb",dark:"#1e40af"},white:"#ffffff",black:"#000000",transparent:"transparent"},eS={fontFamily:{sans:"'Sora', 'Helvetica Neue', Arial, sans-serif",serif:"'Playfair Display', Georgia, serif",mono:"'JetBrains Mono', 'Fira Code', monospace"},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem"},fontWeight:{regular:400,medium:500,semibold:600,bold:700},lineHeight:{tight:1.25,snug:1.375,normal:1.5,relaxed:1.625}},tS={0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem"},nS={none:"0",sm:"0.25rem",base:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},rS={sm:"0 1px 2px 0 rgba(35, 27, 21, 0.08)",base:"0 2px 4px 0 rgba(35, 27, 21, 0.10)",md:"0 4px 12px 0 rgba(35, 27, 21, 0.12)",lg:"0 8px 24px 0 rgba(35, 27, 21, 0.15)",xl:"0 16px 48px 0 rgba(35, 27, 21, 0.18)",amber:"0 4px 20px 0 rgba(180, 90, 20, 0.35)"},oS={fast:"150ms ease",base:"200ms ease",slow:"300ms ease",slower:"400ms cubic-bezier(0.4, 0, 0.2, 1)"},iS={base:0,raised:10,dropdown:100,sticky:200,overlay:300,modal:400,toast:500},Jh={colors:xe,typography:eS,spacing:tS,borderRadius:nS,shadows:rS,transitions:oS,zIndex:iS,brand:{primary:xe.primary[600],primaryHover:xe.primary[700],primaryLight:xe.primary[100],primaryGhost:xe.primary[50]},surface:{page:xe.neutral[50],card:xe.white,sidebar:xe.neutral[900],elevated:xe.white,overlay:"rgba(35, 27, 21, 0.55)"},text:{primary:xe.neutral[900],secondary:xe.neutral[600],muted:xe.neutral[400],inverse:xe.white,brand:xe.primary[600],onDark:xe.neutral[200]},border:{default:xe.neutral[200],strong:xe.neutral[300],focus:xe.primary[600],error:xe.error.base},feedback:{success:{bg:xe.success.light,text:xe.success.dark,border:xe.success.base,icon:xe.success.base},warning:{bg:xe.warning.light,text:xe.warning.dark,border:xe.warning.base,icon:xe.warning.base},error:{bg:xe.error.light,text:xe.error.dark,border:xe.error.base,icon:xe.error.base},info:{bg:xe.info.light,text:xe.info.dark,border:xe.info.base,icon:xe.info.base}}},sS=Mw`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${({theme:e})=>e.typography.fontFamily.sans};
    background-color: ${({theme:e})=>e.surface.page};
    color: ${({theme:e})=>e.text.primary};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  button {
    font-family: inherit;
  }

  input, textarea, select {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #root {
    min-height: 100vh;
  }
`;function F1(e,t){return function(){return e.apply(t,arguments)}}const{toString:aS}=Object.prototype,{getPrototypeOf:qf}=Object,{iterator:pc,toStringTag:T1}=Symbol,hc=(e=>t=>{const n=aS.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_n=e=>(e=e.toLowerCase(),t=>hc(t)===e),mc=e=>t=>typeof t===e,{isArray:di}=Array,oi=mc("undefined");function Ls(e){return e!==null&&!oi(e)&&e.constructor!==null&&!oi(e.constructor)&&Vt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const A1=_n("ArrayBuffer");function lS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&A1(e.buffer),t}const cS=mc("string"),Vt=mc("function"),R1=mc("number"),Ds=e=>e!==null&&typeof e=="object",uS=e=>e===!0||e===!1,Va=e=>{if(hc(e)!=="object")return!1;const t=qf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(T1 in e)&&!(pc in e)},dS=e=>{if(!Ds(e)||Ls(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},fS=_n("Date"),pS=_n("File"),hS=e=>!!(e&&typeof e.uri<"u"),mS=e=>e&&typeof e.getParts<"u",gS=_n("Blob"),yS=_n("FileList"),xS=e=>Ds(e)&&Vt(e.pipe);function vS(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Zh=vS(),em=typeof Zh.FormData<"u"?Zh.FormData:void 0,bS=e=>{let t;return e&&(em&&e instanceof em||Vt(e.append)&&((t=hc(e))==="formdata"||t==="object"&&Vt(e.toString)&&e.toString()==="[object FormData]"))},$S=_n("URLSearchParams"),[wS,SS,kS,_S]=["ReadableStream","Request","Response","Headers"].map(_n),ES=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Us(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),di(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(Ls(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function P1(e,t){if(Ls(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Wr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,z1=e=>!oi(e)&&e!==Wr;function Fd(){const{caseless:e,skipUndefined:t}=z1(this)&&this||{},n={},r=(o,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const s=e&&P1(n,i)||i;Va(n[s])&&Va(o)?n[s]=Fd(n[s],o):Va(o)?n[s]=Fd({},o):di(o)?n[s]=o.slice():(!t||!oi(o))&&(n[s]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Us(arguments[o],r);return n}const jS=(e,t,n,{allOwnKeys:r}={})=>(Us(t,(o,i)=>{n&&Vt(o)?Object.defineProperty(e,i,{value:F1(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),CS=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),FS=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},TS=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&qf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},AS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},RS=e=>{if(!e)return null;if(di(e))return e;let t=e.length;if(!R1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},PS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&qf(Uint8Array)),zS=(e,t)=>{const r=(e&&e[pc]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},OS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},NS=_n("HTMLFormElement"),IS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),tm=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),LS=_n("RegExp"),O1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Us(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},DS=e=>{O1(e,(t,n)=>{if(Vt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Vt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},US=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return di(e)?r(e):r(String(e).split(t)),n},MS=()=>{},BS=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function VS(e){return!!(e&&Vt(e.append)&&e[T1]==="FormData"&&e[pc])}const WS=e=>{const t=new Array(10),n=(r,o)=>{if(Ds(r)){if(t.indexOf(r)>=0)return;if(Ls(r))return r;if(!("toJSON"in r)){t[o]=r;const i=di(r)?[]:{};return Us(r,(s,a)=>{const c=n(s,o+1);!oi(c)&&(i[a]=c)}),t[o]=void 0,i}}return r};return n(e,0)},HS=_n("AsyncFunction"),qS=e=>e&&(Ds(e)||Vt(e))&&Vt(e.then)&&Vt(e.catch),N1=((e,t)=>e?setImmediate:t?((n,r)=>(Wr.addEventListener("message",({source:o,data:i})=>{o===Wr&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Wr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Vt(Wr.postMessage)),GS=typeof queueMicrotask<"u"?queueMicrotask.bind(Wr):typeof process<"u"&&process.nextTick||N1,QS=e=>e!=null&&Vt(e[pc]),q={isArray:di,isArrayBuffer:A1,isBuffer:Ls,isFormData:bS,isArrayBufferView:lS,isString:cS,isNumber:R1,isBoolean:uS,isObject:Ds,isPlainObject:Va,isEmptyObject:dS,isReadableStream:wS,isRequest:SS,isResponse:kS,isHeaders:_S,isUndefined:oi,isDate:fS,isFile:pS,isReactNativeBlob:hS,isReactNative:mS,isBlob:gS,isRegExp:LS,isFunction:Vt,isStream:xS,isURLSearchParams:$S,isTypedArray:PS,isFileList:yS,forEach:Us,merge:Fd,extend:jS,trim:ES,stripBOM:CS,inherits:FS,toFlatObject:TS,kindOf:hc,kindOfTest:_n,endsWith:AS,toArray:RS,forEachEntry:zS,matchAll:OS,isHTMLForm:NS,hasOwnProperty:tm,hasOwnProp:tm,reduceDescriptors:O1,freezeMethods:DS,toObjectSet:US,toCamelCase:IS,noop:MS,toFiniteNumber:BS,findKey:P1,global:Wr,isContextDefined:z1,isSpecCompliantForm:VS,toJSONObject:WS,isAsyncFn:HS,isThenable:qS,setImmediate:N1,asap:GS,isIterable:QS};let le=class I1 extends Error{static from(t,n,r,o,i,s){const a=new I1(t.message,n||t.code,r,o,i);return a.cause=t,a.name=t.name,t.status!=null&&a.status==null&&(a.status=t.status),s&&Object.assign(a,s),a}constructor(t,n,r,o,i){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),o&&(this.request=o),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}};le.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";le.ERR_BAD_OPTION="ERR_BAD_OPTION";le.ECONNABORTED="ECONNABORTED";le.ETIMEDOUT="ETIMEDOUT";le.ERR_NETWORK="ERR_NETWORK";le.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";le.ERR_DEPRECATED="ERR_DEPRECATED";le.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";le.ERR_BAD_REQUEST="ERR_BAD_REQUEST";le.ERR_CANCELED="ERR_CANCELED";le.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";le.ERR_INVALID_URL="ERR_INVALID_URL";const YS=null;function Td(e){return q.isPlainObject(e)||q.isArray(e)}function L1(e){return q.endsWith(e,"[]")?e.slice(0,-2):e}function nu(e,t,n){return e?e.concat(t).map(function(o,i){return o=L1(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function KS(e){return q.isArray(e)&&!e.some(Td)}const XS=q.toFlatObject(q,{},null,function(t){return/^is[A-Z]/.test(t)});function gc(e,t,n){if(!q.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,k){return!q.isUndefined(k[b])});const r=n.metaTokens,o=n.visitor||u,i=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(t);if(!q.isFunction(o))throw new TypeError("visitor must be a function");function f(h){if(h===null)return"";if(q.isDate(h))return h.toISOString();if(q.isBoolean(h))return h.toString();if(!c&&q.isBlob(h))throw new le("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(h)||q.isTypedArray(h)?c&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function u(h,b,k){let g=h;if(q.isReactNative(t)&&q.isReactNativeBlob(h))return t.append(nu(k,b,i),f(h)),!1;if(h&&!k&&typeof h=="object"){if(q.endsWith(b,"{}"))b=r?b:b.slice(0,-2),h=JSON.stringify(h);else if(q.isArray(h)&&KS(h)||(q.isFileList(h)||q.endsWith(b,"[]"))&&(g=q.toArray(h)))return b=L1(b),g.forEach(function(v,$){!(q.isUndefined(v)||v===null)&&t.append(s===!0?nu([b],$,i):s===null?b:b+"[]",f(v))}),!1}return Td(h)?!0:(t.append(nu(k,b,i),f(h)),!1)}const d=[],p=Object.assign(XS,{defaultVisitor:u,convertValue:f,isVisitable:Td});function m(h,b){if(!q.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+b.join("."));d.push(h),q.forEach(h,function(g,y){(!(q.isUndefined(g)||g===null)&&o.call(t,g,q.isString(y)?y.trim():y,b,p))===!0&&m(g,b?b.concat(y):[y])}),d.pop()}}if(!q.isObject(e))throw new TypeError("data must be an object");return m(e),t}function nm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Gf(e,t){this._pairs=[],e&&gc(e,this,t)}const D1=Gf.prototype;D1.append=function(t,n){this._pairs.push([t,n])};D1.toString=function(t){const n=t?function(r){return t.call(this,r,nm)}:nm;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function JS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function U1(e,t,n){if(!t)return e;const r=n&&n.encode||JS,o=q.isFunction(n)?{serialize:n}:n,i=o&&o.serialize;let s;if(i?s=i(t,o):s=q.isURLSearchParams(t)?t.toString():new Gf(t,o).toString(r),s){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class rm{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){q.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Qf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},ZS=typeof URLSearchParams<"u"?URLSearchParams:Gf,ek=typeof FormData<"u"?FormData:null,tk=typeof Blob<"u"?Blob:null,nk={isBrowser:!0,classes:{URLSearchParams:ZS,FormData:ek,Blob:tk},protocols:["http","https","file","blob","url","data"]},Yf=typeof window<"u"&&typeof document<"u",Ad=typeof navigator=="object"&&navigator||void 0,rk=Yf&&(!Ad||["ReactNative","NativeScript","NS"].indexOf(Ad.product)<0),ok=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ik=Yf&&window.location.href||"http://localhost",sk=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Yf,hasStandardBrowserEnv:rk,hasStandardBrowserWebWorkerEnv:ok,navigator:Ad,origin:ik},Symbol.toStringTag,{value:"Module"})),_t={...sk,...nk};function ak(e,t){return gc(e,new _t.classes.URLSearchParams,{visitor:function(n,r,o,i){return _t.isNode&&q.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function lk(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ck(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function M1(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),c=i>=n.length;return s=!s&&q.isArray(o)?o.length:s,c?(q.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!q.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&q.isArray(o[s])&&(o[s]=ck(o[s])),!a)}if(q.isFormData(e)&&q.isFunction(e.entries)){const n={};return q.forEachEntry(e,(r,o)=>{t(lk(r),o,n,0)}),n}return null}function uk(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ms={transitional:Qf,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=q.isObject(t);if(i&&q.isHTMLForm(t)&&(t=new FormData(t)),q.isFormData(t))return o?JSON.stringify(M1(t)):t;if(q.isArrayBuffer(t)||q.isBuffer(t)||q.isStream(t)||q.isFile(t)||q.isBlob(t)||q.isReadableStream(t))return t;if(q.isArrayBufferView(t))return t.buffer;if(q.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ak(t,this.formSerializer).toString();if((a=q.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return gc(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),uk(t)):t}],transformResponse:[function(t){const n=this.transitional||Ms.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(q.isResponse(t)||q.isReadableStream(t))return t;if(t&&q.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(a){if(s)throw a.name==="SyntaxError"?le.from(a,le.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_t.classes.FormData,Blob:_t.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],e=>{Ms.headers[e]={}});const dk=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fk=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&dk[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},om=Symbol("internals");function Ei(e){return e&&String(e).trim().toLowerCase()}function Wa(e){return e===!1||e==null?e:q.isArray(e)?e.map(Wa):String(e)}function pk(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const hk=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ru(e,t,n,r,o){if(q.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!q.isString(t)){if(q.isString(r))return t.indexOf(r)!==-1;if(q.isRegExp(r))return r.test(t)}}function mk(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function gk(e,t){const n=q.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}let Wt=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,c,f){const u=Ei(c);if(!u)throw new Error("header name must be a non-empty string");const d=q.findKey(o,u);(!d||o[d]===void 0||f===!0||f===void 0&&o[d]!==!1)&&(o[d||c]=Wa(a))}const s=(a,c)=>q.forEach(a,(f,u)=>i(f,u,c));if(q.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(q.isString(t)&&(t=t.trim())&&!hk(t))s(fk(t),n);else if(q.isObject(t)&&q.isIterable(t)){let a={},c,f;for(const u of t){if(!q.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[f=u[0]]=(c=a[f])?q.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}s(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Ei(t),t){const r=q.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return pk(o);if(q.isFunction(n))return n.call(this,o,r);if(q.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ei(t),t){const r=q.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ru(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Ei(s),s){const a=q.findKey(r,s);a&&(!n||ru(r,r[a],a,n))&&(delete r[a],o=!0)}}return q.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||ru(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return q.forEach(this,(o,i)=>{const s=q.findKey(r,i);if(s){n[s]=Wa(o),delete n[i];return}const a=t?mk(i):String(i).trim();a!==i&&delete n[i],n[a]=Wa(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return q.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&q.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[om]=this[om]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=Ei(s);r[a]||(gk(o,s),r[a]=!0)}return q.isArray(t)?t.forEach(i):i(t),this}};Wt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(Wt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});q.freezeMethods(Wt);function ou(e,t){const n=this||Ms,r=t||n,o=Wt.from(r.headers);let i=r.data;return q.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function B1(e){return!!(e&&e.__CANCEL__)}let Bs=class extends le{constructor(t,n,r){super(t??"canceled",le.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function V1(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new le("Request failed with status code "+n.status,[le.ERR_BAD_REQUEST,le.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function yk(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function xk(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(c){const f=Date.now(),u=r[i];s||(s=f),n[o]=c,r[o]=f;let d=i,p=0;for(;d!==o;)p+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),f-s<t)return;const m=u&&f-u;return m?Math.round(p*1e3/m):void 0}}function vk(e,t){let n=0,r=1e3/t,o,i;const s=(f,u=Date.now())=>{n=u,o=null,i&&(clearTimeout(i),i=null),e(...f)};return[(...f)=>{const u=Date.now(),d=u-n;d>=r?s(f,u):(o=f,i||(i=setTimeout(()=>{i=null,s(o)},r-d)))},()=>o&&s(o)]}const Fl=(e,t,n=3)=>{let r=0;const o=xk(50,250);return vk(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,c=s-r,f=o(c),u=s<=a;r=s;const d={loaded:s,total:a,progress:a?s/a:void 0,bytes:c,rate:f||void 0,estimated:f&&a&&u?(a-s)/f:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(d)},n)},im=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},sm=e=>(...t)=>q.asap(()=>e(...t)),bk=_t.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,_t.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(_t.origin),_t.navigator&&/(msie|trident)/i.test(_t.navigator.userAgent)):()=>!0,$k=_t.hasStandardBrowserEnv?{write(e,t,n,r,o,i,s){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];q.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),q.isString(r)&&a.push(`path=${r}`),q.isString(o)&&a.push(`domain=${o}`),i===!0&&a.push("secure"),q.isString(s)&&a.push(`SameSite=${s}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function wk(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Sk(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function W1(e,t,n){let r=!wk(t);return e&&(r||n==!1)?Sk(e,t):t}const am=e=>e instanceof Wt?{...e}:e;function ao(e,t){t=t||{};const n={};function r(f,u,d,p){return q.isPlainObject(f)&&q.isPlainObject(u)?q.merge.call({caseless:p},f,u):q.isPlainObject(u)?q.merge({},u):q.isArray(u)?u.slice():u}function o(f,u,d,p){if(q.isUndefined(u)){if(!q.isUndefined(f))return r(void 0,f,d,p)}else return r(f,u,d,p)}function i(f,u){if(!q.isUndefined(u))return r(void 0,u)}function s(f,u){if(q.isUndefined(u)){if(!q.isUndefined(f))return r(void 0,f)}else return r(void 0,u)}function a(f,u,d){if(d in t)return r(f,u);if(d in e)return r(void 0,f)}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(f,u,d)=>o(am(f),am(u),d,!0)};return q.forEach(Object.keys({...e,...t}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const d=q.hasOwnProp(c,u)?c[u]:o,p=d(e[u],t[u],u);q.isUndefined(p)&&d!==a||(n[u]=p)}),n}const H1=e=>{const t=ao({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;if(t.headers=s=Wt.from(s),t.url=U1(W1(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),q.isFormData(n)){if(_t.hasStandardBrowserEnv||_t.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(q.isFunction(n.getHeaders)){const c=n.getHeaders(),f=["content-type","content-length"];Object.entries(c).forEach(([u,d])=>{f.includes(u.toLowerCase())&&s.set(u,d)})}}if(_t.hasStandardBrowserEnv&&(r&&q.isFunction(r)&&(r=r(t)),r||r!==!1&&bk(t.url))){const c=o&&i&&$k.read(i);c&&s.set(o,c)}return t},kk=typeof XMLHttpRequest<"u",_k=kk&&function(e){return new Promise(function(n,r){const o=H1(e);let i=o.data;const s=Wt.from(o.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:f}=o,u,d,p,m,h;function b(){m&&m(),h&&h(),o.cancelToken&&o.cancelToken.unsubscribe(u),o.signal&&o.signal.removeEventListener("abort",u)}let k=new XMLHttpRequest;k.open(o.method.toUpperCase(),o.url,!0),k.timeout=o.timeout;function g(){if(!k)return;const v=Wt.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?k.responseText:k.response,status:k.status,statusText:k.statusText,headers:v,config:e,request:k};V1(function(F){n(F),b()},function(F){r(F),b()},C),k=null}"onloadend"in k?k.onloadend=g:k.onreadystatechange=function(){!k||k.readyState!==4||k.status===0&&!(k.responseURL&&k.responseURL.indexOf("file:")===0)||setTimeout(g)},k.onabort=function(){k&&(r(new le("Request aborted",le.ECONNABORTED,e,k)),k=null)},k.onerror=function($){const C=$&&$.message?$.message:"Network Error",_=new le(C,le.ERR_NETWORK,e,k);_.event=$||null,r(_),k=null},k.ontimeout=function(){let $=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const C=o.transitional||Qf;o.timeoutErrorMessage&&($=o.timeoutErrorMessage),r(new le($,C.clarifyTimeoutError?le.ETIMEDOUT:le.ECONNABORTED,e,k)),k=null},i===void 0&&s.setContentType(null),"setRequestHeader"in k&&q.forEach(s.toJSON(),function($,C){k.setRequestHeader(C,$)}),q.isUndefined(o.withCredentials)||(k.withCredentials=!!o.withCredentials),a&&a!=="json"&&(k.responseType=o.responseType),f&&([p,h]=Fl(f,!0),k.addEventListener("progress",p)),c&&k.upload&&([d,m]=Fl(c),k.upload.addEventListener("progress",d),k.upload.addEventListener("loadend",m)),(o.cancelToken||o.signal)&&(u=v=>{k&&(r(!v||v.type?new Bs(null,e,k):v),k.abort(),k=null)},o.cancelToken&&o.cancelToken.subscribe(u),o.signal&&(o.signal.aborted?u():o.signal.addEventListener("abort",u)));const y=yk(o.url);if(y&&_t.protocols.indexOf(y)===-1){r(new le("Unsupported protocol "+y+":",le.ERR_BAD_REQUEST,e));return}k.send(i||null)})},Ek=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(f){if(!o){o=!0,a();const u=f instanceof Error?f:this.reason;r.abort(u instanceof le?u:new Bs(u instanceof Error?u.message:u))}};let s=t&&setTimeout(()=>{s=null,i(new le(`timeout of ${t}ms exceeded`,le.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(f=>{f.unsubscribe?f.unsubscribe(i):f.removeEventListener("abort",i)}),e=null)};e.forEach(f=>f.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>q.asap(a),c}},jk=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},Ck=async function*(e,t){for await(const n of Fk(e))yield*jk(n,t)},Fk=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},lm=(e,t,n,r)=>{const o=Ck(e,t);let i=0,s,a=c=>{s||(s=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:f,value:u}=await o.next();if(f){a(),c.close();return}let d=u.byteLength;if(n){let p=i+=d;n(p)}c.enqueue(new Uint8Array(u))}catch(f){throw a(f),f}},cancel(c){return a(c),o.return()}},{highWaterMark:2})},cm=64*1024,{isFunction:da}=q,Tk=(({Request:e,Response:t})=>({Request:e,Response:t}))(q.global),{ReadableStream:um,TextEncoder:dm}=q.global,fm=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Ak=e=>{e=q.merge.call({skipUndefined:!0},Tk,e);const{fetch:t,Request:n,Response:r}=e,o=t?da(t):typeof fetch=="function",i=da(n),s=da(r);if(!o)return!1;const a=o&&da(um),c=o&&(typeof dm=="function"?(h=>b=>h.encode(b))(new dm):async h=>new Uint8Array(await new n(h).arrayBuffer())),f=i&&a&&fm(()=>{let h=!1;const b=new n(_t.origin,{body:new um,method:"POST",get duplex(){return h=!0,"half"}}).headers.has("Content-Type");return h&&!b}),u=s&&a&&fm(()=>q.isReadableStream(new r("").body)),d={stream:u&&(h=>h.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(h=>{!d[h]&&(d[h]=(b,k)=>{let g=b&&b[h];if(g)return g.call(b);throw new le(`Response type '${h}' is not supported`,le.ERR_NOT_SUPPORT,k)})});const p=async h=>{if(h==null)return 0;if(q.isBlob(h))return h.size;if(q.isSpecCompliantForm(h))return(await new n(_t.origin,{method:"POST",body:h}).arrayBuffer()).byteLength;if(q.isArrayBufferView(h)||q.isArrayBuffer(h))return h.byteLength;if(q.isURLSearchParams(h)&&(h=h+""),q.isString(h))return(await c(h)).byteLength},m=async(h,b)=>{const k=q.toFiniteNumber(h.getContentLength());return k??p(b)};return async h=>{let{url:b,method:k,data:g,signal:y,cancelToken:v,timeout:$,onDownloadProgress:C,onUploadProgress:_,responseType:F,headers:x,withCredentials:S="same-origin",fetchOptions:T}=H1(h),A=t||fetch;F=F?(F+"").toLowerCase():"text";let R=Ek([y,v&&v.toAbortSignal()],$),N=null;const O=R&&R.unsubscribe&&(()=>{R.unsubscribe()});let U;try{if(_&&f&&k!=="get"&&k!=="head"&&(U=await m(x,g))!==0){let Q=new n(b,{method:"POST",body:g,duplex:"half"}),V;if(q.isFormData(g)&&(V=Q.headers.get("content-type"))&&x.setContentType(V),Q.body){const[Y,G]=im(U,Fl(sm(_)));g=lm(Q.body,cm,Y,G)}}q.isString(S)||(S=S?"include":"omit");const E=i&&"credentials"in n.prototype,w={...T,signal:R,method:k.toUpperCase(),headers:x.normalize().toJSON(),body:g,duplex:"half",credentials:E?S:void 0};N=i&&new n(b,w);let I=await(i?A(N,T):A(b,w));const P=u&&(F==="stream"||F==="response");if(u&&(C||P&&O)){const Q={};["status","statusText","headers"].forEach(D=>{Q[D]=I[D]});const V=q.toFiniteNumber(I.headers.get("content-length")),[Y,G]=C&&im(V,Fl(sm(C),!0))||[];I=new r(lm(I.body,cm,Y,()=>{G&&G(),O&&O()}),Q)}F=F||"text";let L=await d[q.findKey(d,F)||"text"](I,h);return!P&&O&&O(),await new Promise((Q,V)=>{V1(Q,V,{data:L,headers:Wt.from(I.headers),status:I.status,statusText:I.statusText,config:h,request:N})})}catch(E){throw O&&O(),E&&E.name==="TypeError"&&/Load failed|fetch/i.test(E.message)?Object.assign(new le("Network Error",le.ERR_NETWORK,h,N,E&&E.response),{cause:E.cause||E}):le.from(E,E&&E.code,h,N,E&&E.response)}}},Rk=new Map,q1=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:o}=t,i=[r,o,n];let s=i.length,a=s,c,f,u=Rk;for(;a--;)c=i[a],f=u.get(c),f===void 0&&u.set(c,f=a?new Map:Ak(t)),u=f;return f};q1();const Kf={http:YS,xhr:_k,fetch:{get:q1}};q.forEach(Kf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const pm=e=>`- ${e}`,Pk=e=>q.isFunction(e)||e===null||e===!1;function zk(e,t){e=q.isArray(e)?e:[e];const{length:n}=e;let r,o;const i={};for(let s=0;s<n;s++){r=e[s];let a;if(o=r,!Pk(r)&&(o=Kf[(a=String(r)).toLowerCase()],o===void 0))throw new le(`Unknown adapter '${a}'`);if(o&&(q.isFunction(o)||(o=o.get(t))))break;i[a||"#"+s]=o}if(!o){const s=Object.entries(i).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let a=n?s.length>1?`since :
`+s.map(pm).join(`
`):" "+pm(s[0]):"as no adapter specified";throw new le("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return o}const G1={getAdapter:zk,adapters:Kf};function iu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Bs(null,e)}function hm(e){return iu(e),e.headers=Wt.from(e.headers),e.data=ou.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),G1.getAdapter(e.adapter||Ms.adapter,e)(e).then(function(r){return iu(e),r.data=ou.call(e,e.transformResponse,r),r.headers=Wt.from(r.headers),r},function(r){return B1(r)||(iu(e),r&&r.response&&(r.response.data=ou.call(e,e.transformResponse,r.response),r.response.headers=Wt.from(r.response.headers))),Promise.reject(r)})}const Q1="1.13.6",yc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{yc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const mm={};yc.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Q1+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new le(o(s," has been removed"+(n?" in "+n:"")),le.ERR_DEPRECATED);return n&&!mm[s]&&(mm[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};yc.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Ok(e,t,n){if(typeof e!="object")throw new le("options must be an object",le.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],c=a===void 0||s(a,i,e);if(c!==!0)throw new le("option "+i+" must be "+c,le.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new le("Unknown option "+i,le.ERR_BAD_OPTION)}}const Ha={assertOptions:Ok,validators:yc},nn=Ha.validators;let Xr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new rm,response:new rm}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ao(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Ha.assertOptions(r,{silentJSONParsing:nn.transitional(nn.boolean),forcedJSONParsing:nn.transitional(nn.boolean),clarifyTimeoutError:nn.transitional(nn.boolean),legacyInterceptorReqResOrdering:nn.transitional(nn.boolean)},!1),o!=null&&(q.isFunction(o)?n.paramsSerializer={serialize:o}:Ha.assertOptions(o,{encode:nn.function,serialize:nn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ha.assertOptions(n,{baseUrl:nn.spelling("baseURL"),withXsrfToken:nn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&q.merge(i.common,i[n.method]);i&&q.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=Wt.concat(s,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){if(typeof b.runWhen=="function"&&b.runWhen(n)===!1)return;c=c&&b.synchronous;const k=n.transitional||Qf;k&&k.legacyInterceptorReqResOrdering?a.unshift(b.fulfilled,b.rejected):a.push(b.fulfilled,b.rejected)});const f=[];this.interceptors.response.forEach(function(b){f.push(b.fulfilled,b.rejected)});let u,d=0,p;if(!c){const h=[hm.bind(this),void 0];for(h.unshift(...a),h.push(...f),p=h.length,u=Promise.resolve(n);d<p;)u=u.then(h[d++],h[d++]);return u}p=a.length;let m=n;for(;d<p;){const h=a[d++],b=a[d++];try{m=h(m)}catch(k){b.call(this,k);break}}try{u=hm.call(this,m)}catch(h){return Promise.reject(h)}for(d=0,p=f.length;d<p;)u=u.then(f[d++],f[d++]);return u}getUri(t){t=ao(this.defaults,t);const n=W1(t.baseURL,t.url,t.allowAbsoluteUrls);return U1(n,t.params,t.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(t){Xr.prototype[t]=function(n,r){return this.request(ao(r||{},{method:t,url:n,data:(r||{}).data}))}});q.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(ao(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Xr.prototype[t]=n(),Xr.prototype[t+"Form"]=n(!0)});let Nk=class Y1{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new Bs(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Y1(function(o){t=o}),cancel:t}}};function Ik(e){return function(n){return e.apply(null,n)}}function Lk(e){return q.isObject(e)&&e.isAxiosError===!0}const Rd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Rd).forEach(([e,t])=>{Rd[t]=e});function K1(e){const t=new Xr(e),n=F1(Xr.prototype.request,t);return q.extend(n,Xr.prototype,t,{allOwnKeys:!0}),q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return K1(ao(e,o))},n}const Re=K1(Ms);Re.Axios=Xr;Re.CanceledError=Bs;Re.CancelToken=Nk;Re.isCancel=B1;Re.VERSION=Q1;Re.toFormData=gc;Re.AxiosError=le;Re.Cancel=Re.CanceledError;Re.all=function(t){return Promise.all(t)};Re.spread=Ik;Re.isAxiosError=Lk;Re.mergeConfig=ao;Re.AxiosHeaders=Wt;Re.formToJSON=e=>M1(q.isHTMLForm(e)?new FormData(e):e);Re.getAdapter=G1.getAdapter;Re.HttpStatusCode=Rd;Re.default=Re;const{Axios:kC,AxiosError:_C,CanceledError:EC,isCancel:jC,CancelToken:CC,VERSION:FC,all:TC,Cancel:AC,isAxiosError:RC,spread:PC,toFormData:zC,AxiosHeaders:OC,HttpStatusCode:NC,formToJSON:IC,getAdapter:LC,mergeConfig:DC}=Re,Xf="https://bgrepresentacoes-api-production.up.railway.app/api/v1",ii={ACCESS_TOKEN:"bg:access_token",REFRESH_TOKEN:"bg:refresh_token"},X1=()=>localStorage.getItem(ii.ACCESS_TOKEN),J1=()=>localStorage.getItem(ii.REFRESH_TOKEN),Z1=({accessToken:e,refreshToken:t})=>{e&&localStorage.setItem(ii.ACCESS_TOKEN,e),t&&localStorage.setItem(ii.REFRESH_TOKEN,t)},Tl=()=>{localStorage.removeItem(ii.ACCESS_TOKEN),localStorage.removeItem(ii.REFRESH_TOKEN)};let fa=!1,Pd=[];const gm=(e,t=null)=>{Pd.forEach(({resolve:n,reject:r})=>e?r(e):n(t)),Pd=[]},ex=e=>{const t=X1();return t&&(e.headers.Authorization=`Bearer ${t}`),e},tx=async e=>{var i,s;const t=e.config,n=((i=e.response)==null?void 0:i.status)===401,r=!t._retry,o=!((s=t.url)!=null&&s.includes("/auth/refresh"));if(n&&r&&o){if(t._retry=!0,fa)return new Promise((c,f)=>{Pd.push({resolve:c,reject:f})}).then(c=>(t.headers.Authorization=`Bearer ${c}`,Re(t)));fa=!0;const a=J1();if(!a)return fa=!1,Tl(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(e);try{const{data:c}=await Re.post(`${Xf}/auth/refresh`,{refreshToken:a},{headers:{"Content-Type":"application/json"}}),f=c.data??c,u=f.token??f.accessToken,d=f.refreshToken;if(!u)throw new Error("Refresh não retornou accessToken");return Z1({accessToken:u,refreshToken:d}),gm(null,u),t.headers.Authorization=`Bearer ${u}`,Re(t)}catch(c){return gm(c,null),Tl(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(c)}finally{fa=!1}}return Promise.reject(e)},ut=Re.create({baseURL:Xf,timeout:15e3,headers:{"Content-Type":"application/json",Accept:"application/json"}});ut.interceptors.request.use(ex,e=>Promise.reject(e));ut.interceptors.response.use(e=>e,tx);const Jf=Re.create({baseURL:Xf,timeout:12e4,headers:{Accept:"application/json"}});Jf.interceptors.request.use(ex,e=>Promise.reject(e));Jf.interceptors.response.use(e=>e,tx);const Yn=(e,t="Ocorreu um erro inesperado.")=>{var n,r,o,i;return((r=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:r.message)??((i=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:i.error)??(e==null?void 0:e.message)??t},St={INIT:"INIT",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGOUT:"LOGOUT",PASSWORD_CHANGED:"PASSWORD_CHANGED",UPDATE_USER:"UPDATE_USER",SET_LOADING:"SET_LOADING"},nx={user:null,isAuthenticated:!1,isLoading:!0,mustChangePassword:!1};function Dk(e,{type:t,payload:n}){switch(t){case St.INIT:return{...e,user:n.user??null,isAuthenticated:!!n.user,isLoading:!1,mustChangePassword:n.mustChangePassword??!1};case St.LOGIN_SUCCESS:return{...e,user:n.user,isAuthenticated:!0,isLoading:!1,mustChangePassword:n.mustChangePassword??!1};case St.LOGOUT:return{...nx,isLoading:!1};case St.PASSWORD_CHANGED:return{...e,mustChangePassword:!1};case St.UPDATE_USER:return{...e,user:{...e.user,...n}};case St.SET_LOADING:return{...e,isLoading:n};default:return e}}const rx=M.createContext(null);function Uk({children:e}){var m,h,b,k;const[t,n]=M.useReducer(Dk,nx),r=M.useRef(!1);M.useEffect(()=>{if(r.current)return;r.current=!0,(async()=>{const y=X1(),v=J1();if(!y&&!v){n({type:St.INIT,payload:{user:null}});return}try{const{data:$}=await ut.get("/users/profile");n({type:St.INIT,payload:{user:$.data}})}catch{Tl(),n({type:St.INIT,payload:{user:null}})}})()},[]),M.useEffect(()=>{const g=()=>{n({type:St.LOGOUT})};return window.addEventListener("bg:session-expired",g),()=>window.removeEventListener("bg:session-expired",g)},[]);const o=M.useCallback(async(g,y)=>{n({type:St.SET_LOADING,payload:!0});try{const{data:v}=await ut.post("/auth/login",{email:g,password:y}),$=v.data??v,C=$.token??$.accessToken,{refreshToken:_,user:F}=$;ue.success("Login efetuado com sucesso!",{toastId:"login-success"}),Z1({accessToken:C,refreshToken:_});const x=($.mustChangePassword??v.mustChangePassword??((F==null?void 0:F.last_login_at)===null||(F==null?void 0:F.last_login_at)===void 0),!1),S=$.mustChangePassword===!0;return n({type:St.LOGIN_SUCCESS,payload:{user:F,mustChangePassword:S}}),{mustChangePassword:S}}catch(v){throw n({type:St.SET_LOADING,payload:!1}),new Error(Yn(v,"E-mail ou senha inválidos."))}},[]),i=M.useCallback(async(g,y,v)=>{try{await ut.patch("/auth/change-password",{currentPassword:g,newPassword:y,confirmPassword:v}),n({type:St.PASSWORD_CHANGED}),ue.success("Senha alterada com sucesso!")}catch($){throw new Error(Yn($,"Erro ao alterar a senha. Tente novamente."))}},[]),s=M.useCallback(()=>{ue.success("Logout efetuado com sucesso!",{toastId:"logout-success"}),Tl(),n({type:St.LOGOUT}),ut.post("/auth/logout").catch(()=>{})},[]),a=M.useCallback(g=>{n({type:St.UPDATE_USER,payload:g})},[]),c=((m=t.user)==null?void 0:m.role)==="admin",f=((h=t.user)==null?void 0:h.role)==="user",u=((b=t.user)==null?void 0:b.role)==="partner",d=M.useCallback((...g)=>{var y;return g.includes((y=t.user)==null?void 0:y.role)},[(k=t.user)==null?void 0:k.role]),p=M.useMemo(()=>({user:t.user,isAuthenticated:t.isAuthenticated,isLoading:t.isLoading,mustChangePassword:t.mustChangePassword,isAdmin:c,isUser:f,isPartner:u,hasRole:d,login:o,logout:s,changePassword:i,updateUser:a}),[t,c,f,u,d,o,s,i,a]);return l.jsx(rx.Provider,{value:p,children:e})}function fo(){const e=M.useContext(rx);if(!e)throw new Error("useAuth deve ser usado dentro de <AuthProvider>.");return e}const Mk=tt`
  to { transform: rotate(360deg); }
`,Bk=j.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.surface.page};
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Vk=j.div`
  width: 36px;
  height: 36px;
  border: 3px solid ${({theme:e})=>e.colors.primary[100]};
  border-top-color: ${({theme:e})=>e.brand.primary};
  border-radius: 50%;
  animation: ${Mk} 0.8s linear infinite;
`,Wk=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,Hk=j.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.surface.page};
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
`,qk=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[200]};
  margin: 0;
  line-height: 1;
`,Gk=j.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,Qk=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
  max-width: 320px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;function su({allowedRoles:e=[]}){const{isAuthenticated:t,isLoading:n,mustChangePassword:r,user:o}=fo(),i=Tr();return n?l.jsxs(Bk,{children:[l.jsx(Vk,{}),l.jsx(Wk,{children:"Verificando sessão…"})]}):t?r&&i.pathname!=="/alterar-senha"?l.jsx($l,{to:"/alterar-senha",replace:!0}):e.length>0&&!e.includes(o==null?void 0:o.role)?l.jsxs(Hk,{children:[l.jsx(qk,{children:"403"}),l.jsx(Gk,{children:"Acesso não autorizado"}),l.jsx(Qk,{children:"Você não tem permissão para acessar esta área. Entre em contato com o administrador caso acredite que isso é um erro."})]}):l.jsx(Xy,{}):l.jsx($l,{to:"/login",state:{from:i},replace:!0})}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ox=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=M.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:s,...a},c)=>M.createElement("svg",{ref:c,...Kk,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ox("lucide",o),...a},[...s.map(([f,u])=>M.createElement(f,u)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(e,t)=>{const n=M.forwardRef(({className:r,...o},i)=>M.createElement(Xk,{ref:i,iconNode:t,className:ox(`lucide-${Yk(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=ye("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=ye("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=ye("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=ye("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=ye("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=ye("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=ye("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=ye("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=ye("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=ye("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=ye("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=ye("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=ye("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=ye("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=ye("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=ye("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=ye("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=ye("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=ye("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=ye("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=ye("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=ye("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=ye("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=ye("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=ye("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=ye("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=ye("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=ye("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=ye("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=ye("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=ye("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=ye("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=ye("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=ye("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),h_=tt`
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
`,m_=j.aside`
  width: 240px;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.surface.sidebar};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  z-index: ${({theme:e})=>e.zIndex.sticky};

  /* Linha âmbar sutil na borda direita */
  border-right: 1px solid ${({theme:e})=>e.colors.neutral[800]};

  /* Scrollbar invisível mas funcional */
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  /* Mobile: drawer por cima do conteúdo */
  @media (max-width: 900px) {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    transform: ${({$open:e})=>e?"translateX(0)":"translateX(-100%)"};
    transition: transform ${({theme:e})=>e.transitions.slower};
    z-index: ${({theme:e})=>e.zIndex.modal};
    box-shadow: ${({$open:e})=>e?"8px 0 32px rgba(0,0,0,0.4)":"none"};
  }
`,g_=j.div`
  padding: ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[5]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral[800]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  animation: ${h_} 0.4s ease both;
`,y_=j.div`
  width: 34px;
  height: 34px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.primary[500]},
    ${({theme:e})=>e.colors.primary[700]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: #fff;
  flex-shrink: 0;
  box-shadow: 0 2px 10px ${({theme:e})=>e.colors.primary[900]}60;
`,x_=j.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
`,v_=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,b_=j.nav`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[3]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,$_=j.div`
  margin-top: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  padding: 0 ${({theme:e})=>e.spacing[2]};
`,w_=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral[600]};
`,S_=j(N2)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.neutral[400]};
  text-decoration: none;
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast};
  position: relative;
  overflow: hidden;

  /* Ícone */
  svg {
    flex-shrink: 0;
    transition: color ${({theme:e})=>e.transitions.fast};
  }

  /* Hover */
  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[800]};
    color: ${({theme:e})=>e.colors.neutral[100]};
  }

  /* Rota ativa — classe injetada pelo NavLink */
  &.active {
    background-color: ${({theme:e})=>e.colors.primary[900]}80;
    color: ${({theme:e})=>e.colors.primary[300]};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};

    svg { color: ${({theme:e})=>e.colors.primary[400]}; }

    /* Barra lateral âmbar indicando página ativa */
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 20%;
      height: 60%;
      width: 3px;
      border-radius: 0 2px 2px 0;
      background-color: ${({theme:e})=>e.colors.primary[500]};
    }
  }
`,k_=j.span`
  flex: 1;
`;j.span`
  background-color: ${({theme:e})=>e.colors.primary[600]};
  color: #fff;
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  padding: 1px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  line-height: 1.6;
`;const __=j.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[3]};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[800]};
`,E_=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  transition: background-color ${({theme:e})=>e.transitions.fast};
  cursor: default;

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[800]};
  }
`,j_=j.div`
  width: 32px;
  height: 32px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.primary[700]},
    ${({theme:e})=>e.colors.primary[900]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[200]};
  flex-shrink: 0;
`,C_=j.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,F_=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,T_=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[500]};
  text-transform: capitalize;
`,A_=j.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    position: fixed;
    inset: 0;
    background-color: rgba(19, 14, 10, 0.65);
    z-index: ${({theme:e})=>e.zIndex.overlay};
    opacity: ${({$open:e})=>e?1:0};
    visibility: ${({$open:e})=>e?"visible":"hidden"};
    transition:
      opacity ${({theme:e})=>e.transitions.slow},
      visibility ${({theme:e})=>e.transitions.slow};
    backdrop-filter: blur(2px);
  }
`,R_=(e="")=>e.split(" ").filter(Boolean).slice(0,2).map(t=>t[0].toUpperCase()).join(""),P_={admin:"Administrador",user:"Usuário",partner:"Parceiro"},z_=[{section:"Principal",items:[{path:"/dashboard",label:"Dashboard",icon:i_},{path:"/clientes",label:"Clientes",icon:p_},{path:"/vendas",label:"Vendas",icon:d_}]},{section:"Administração",adminOnly:!0,items:[{path:"/usuarios",label:"Usuários",icon:px},{path:"/bandeiras",label:"Bandeiras",icon:lx},{path:"/planos",label:"Planos",icon:ym},{path:"/relatorios",label:"Relatórios",icon:ym}]},{section:"Conta",items:[{path:"/perfil",label:"Meu Perfil",icon:t_}]}];function O_({open:e,onClose:t}){const{user:n,isAdmin:r}=fo();return l.jsxs(l.Fragment,{children:[l.jsx(A_,{$open:e,onClick:t}),l.jsxs(m_,{$open:e,children:[l.jsxs(g_,{children:[l.jsx(y_,{children:"BG"}),l.jsx(x_,{children:l.jsx(v_,{children:"BG Representações"})})]}),l.jsx(b_,{children:z_.map(o=>o.adminOnly&&!r?null:l.jsxs("div",{children:[l.jsx($_,{children:l.jsx(w_,{children:o.section})}),o.items.map(({path:i,label:s,icon:a})=>l.jsxs(S_,{to:i,onClick:t,children:[l.jsx(a,{size:17}),l.jsx(k_,{children:s})]},i))]},o.section))}),l.jsx(__,{children:l.jsxs(E_,{children:[l.jsx(j_,{children:R_(n==null?void 0:n.name)}),l.jsxs(C_,{children:[l.jsx(F_,{children:(n==null?void 0:n.name)??"Usuário"}),l.jsx(T_,{children:P_[n==null?void 0:n.role]??(n==null?void 0:n.role)})]})]})})]})]})}const N_=j.header`
  height: 60px;
  background-color: ${({theme:e})=>e.surface.card};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({theme:e})=>e.spacing[6]};
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndex.raised};
  flex-shrink: 0;

  /* Sombra suave para separar do conteúdo */
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,I_=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,L_=j.button`
  display: none;
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  background: transparent;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.secondary};
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast};
  flex-shrink: 0;

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[100]};
    color: ${({theme:e})=>e.text.primary};
  }

  @media (max-width: 900px) {
    display: flex;
  }
`,D_=j.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,U_=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,M_=j.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;

  /* Oculta em telas pequenas para não sobrecarregar */
  @media (max-width: 600px) {
    display: none;
  }
`,B_=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  line-height: 1.2;

  /* Limita o comprimento para não quebrar o layout */
  max-width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,V_=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`,W_=j.div`
  width: 1px;
  height: 24px;
  background-color: ${({theme:e})=>e.border.default};
  flex-shrink: 0;

  @media (max-width: 600px) {
    display: none;
  }
`,H_=j.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  background: transparent;
  cursor: pointer;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.secondary};
  white-space: nowrap;
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast},
    border-color ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.error.light};
    color: ${({theme:e})=>e.colors.error.dark};
    border-color: ${({theme:e})=>e.colors.error.base}55;
  }

  /* Em mobile só mostra o ícone */
  span {
    @media (max-width: 480px) {
      display: none;
    }
  }
`,au={"/dashboard":"Dashboard","/clientes":"Clientes","/vendas":"Vendas","/usuarios":"Usuários","/bandeiras":"Bandeiras","/planos":"Planos","/relatorios":"Relatórios","/perfil":"Meu Perfil","/onboarding":"Novo Cliente"},q_={admin:"Administrador",user:"Usuário",partner:"Parceiro"};function G_({onMenuClick:e}){var s;const{user:t,logout:n}=fo(),r=Tr(),o=(()=>{const a=au[r.pathname];if(a)return a;const c=Object.keys(au).find(f=>r.pathname.startsWith(f+"/"));return c?au[c]:"BG Representações"})(),i=((s=t==null?void 0:t.name)==null?void 0:s.split(" ")[0])??"Usuário";return l.jsxs(N_,{children:[l.jsxs(I_,{children:[l.jsx(L_,{type:"button",onClick:e,"aria-label":"Abrir menu",children:l.jsx(l_,{size:18})}),l.jsx(D_,{children:o})]}),l.jsxs(U_,{children:[l.jsxs(M_,{children:[l.jsxs(B_,{children:["Olá, ",i]}),l.jsx(V_,{children:q_[t==null?void 0:t.role]??(t==null?void 0:t.role)})]}),l.jsx(W_,{}),l.jsxs(H_,{type:"button",onClick:n,children:[l.jsx(a_,{size:15}),l.jsx("span",{children:"Sair"})]})]})]})}const Q_=j.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.surface.page};
`,Y_=j.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; /* evita overflow em flex */
  overflow: hidden;
`,K_=j.main`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[8]};
  background-color: ${({theme:e})=>e.surface.page};

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[4]};
  }
`;function vm(){const[e,t]=M.useState(!1);return l.jsxs(Q_,{children:[l.jsx(O_,{open:e,onClose:()=>t(!1)}),l.jsxs(Y_,{children:[l.jsx(G_,{onMenuClick:()=>t(n=>!n)}),l.jsx(K_,{children:l.jsx(Xy,{})})]})]})}var Vs=e=>e.type==="checkbox",Hr=e=>e instanceof Date,Nt=e=>e==null;const hx=e=>typeof e=="object";var et=e=>!Nt(e)&&!Array.isArray(e)&&hx(e)&&!Hr(e),X_=e=>et(e)&&e.target?Vs(e.target)?e.target.checked:e.target.value:e,J_=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Z_=(e,t)=>e.has(J_(t)),e5=e=>{const t=e.constructor&&e.constructor.prototype;return et(t)&&t.hasOwnProperty("isPrototypeOf")},rp=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function rt(e){if(e instanceof Date)return new Date(e);const t=typeof FileList<"u"&&e instanceof FileList;if(rp&&(e instanceof Blob||t))return e;const n=Array.isArray(e);if(!n&&!(et(e)&&e5(e)))return e;const r=n?[]:Object.create(Object.getPrototypeOf(e));for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=rt(e[o]));return r}var vc=e=>/^\w*$/.test(e),Ne=e=>e===void 0,op=e=>Array.isArray(e)?e.filter(Boolean):[],ip=e=>op(e.replace(/["|']|\]/g,"").split(/\.|\[/)),re=(e,t,n)=>{if(!t||!et(e))return n;const r=(vc(t)?[t]:ip(t)).reduce((o,i)=>Nt(o)?o:o[i],e);return Ne(r)||r===e?Ne(e[t])?n:e[t]:r},Cn=e=>typeof e=="boolean",vn=e=>typeof e=="function",je=(e,t,n)=>{let r=-1;const o=vc(t)?[t]:ip(t),i=o.length,s=i-1;for(;++r<i;){const a=o[r];let c=n;if(r!==s){const f=e[a];c=et(f)||Array.isArray(f)?f:isNaN(+o[r+1])?{}:[]}if(a==="__proto__"||a==="constructor"||a==="prototype")return;e[a]=c,e=e[a]}};const bm={BLUR:"blur",FOCUS_OUT:"focusout"},bn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Nn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},t5=se.createContext(null);t5.displayName="HookFormControlContext";var n5=(e,t,n,r=!0)=>{const o={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(o,i,{get:()=>{const s=i;return t._proxyFormState[s]!==bn.all&&(t._proxyFormState[s]=!r||bn.all),e[s]}});return o};const r5=typeof window<"u"?se.useLayoutEffect:se.useEffect;var Yt=e=>typeof e=="string",o5=(e,t,n,r,o)=>Yt(e)?(r&&t.watch.add(e),re(n,e,o)):Array.isArray(e)?e.map(i=>(r&&t.watch.add(i),re(n,i))):(r&&(t.watchAll=!0),n),Od=e=>Nt(e)||!hx(e);function lr(e,t,n=new WeakSet){if(Od(e)||Od(t))return Object.is(e,t);if(Hr(e)&&Hr(t))return Object.is(e.getTime(),t.getTime());const r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;if(n.has(e)||n.has(t))return!0;n.add(e),n.add(t);for(const i of r){const s=e[i];if(!o.includes(i))return!1;if(i!=="ref"){const a=t[i];if(Hr(s)&&Hr(a)||et(s)&&et(a)||Array.isArray(s)&&Array.isArray(a)?!lr(s,a,n):!Object.is(s,a))return!1}}return!0}const i5=se.createContext(null);i5.displayName="HookFormContext";var mx=(e,t,n,r,o)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:o||!0}}:{},os=e=>Array.isArray(e)?e:[e],$m=()=>{let e=[];return{get observers(){return e},next:o=>{for(const i of e)i.next&&i.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(i=>i!==o)}}),unsubscribe:()=>{e=[]}}};function gx(e,t){const n={};for(const r in e)if(e.hasOwnProperty(r)){const o=e[r],i=t[r];if(o&&et(o)&&i){const s=gx(o,i);et(s)&&(n[r]=s)}else e[r]&&(n[r]=i)}return n}var jt=e=>et(e)&&!Object.keys(e).length,sp=e=>e.type==="file",Rl=e=>{if(!rp)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},yx=e=>e.type==="select-multiple",ap=e=>e.type==="radio",s5=e=>ap(e)||Vs(e),lu=e=>Rl(e)&&e.isConnected;function a5(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Ne(e)?r++:e[t[r++]];return e}function l5(e){for(const t in e)if(e.hasOwnProperty(t)&&!Ne(e[t]))return!1;return!0}function Xe(e,t){const n=Array.isArray(t)?t:vc(t)?[t]:ip(t),r=n.length===1?e:a5(e,n),o=n.length-1,i=n[o];return r&&delete r[i],o!==0&&(et(r)&&jt(r)||Array.isArray(r)&&l5(r))&&Xe(e,n.slice(0,-1)),e}var c5=e=>{for(const t in e)if(vn(e[t]))return!0;return!1};function xx(e){return Array.isArray(e)||et(e)&&!c5(e)}function Nd(e,t={}){for(const n in e){const r=e[n];xx(r)?(t[n]=Array.isArray(r)?[]:{},Nd(r,t[n])):Ne(r)||(t[n]=!0)}return t}function So(e,t,n){n||(n=Nd(t));for(const r in e){const o=e[r];if(xx(o))Ne(t)||Od(n[r])?n[r]=Nd(o,Array.isArray(o)?[]:{}):So(o,Nt(t)?{}:t[r],n[r]);else{const i=t[r];n[r]=!lr(o,i)}}return n}const wm={value:!1,isValid:!1},Sm={value:!0,isValid:!0};var vx=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ne(e[0].attributes.value)?Ne(e[0].value)||e[0].value===""?Sm:{value:e[0].value,isValid:!0}:Sm:wm}return wm},bx=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Ne(e)?e:t?e===""?NaN:e&&+e:n&&Yt(e)?new Date(e):r?r(e):e;const km={isValid:!1,value:null};var $x=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,km):km;function _m(e){const t=e.ref;return sp(t)?t.files:ap(t)?$x(e.refs).value:yx(t)?[...t.selectedOptions].map(({value:n})=>n):Vs(t)?vx(e.refs).value:bx(Ne(t.value)?e.ref.value:t.value,e)}var u5=(e,t,n,r)=>{const o={};for(const i of e){const s=re(t,i);s&&je(o,i,s._f)}return{criteriaMode:n,names:[...e],fields:o,shouldUseNativeValidation:r}},Pl=e=>e instanceof RegExp,ji=e=>Ne(e)?e:Pl(e)?e.source:et(e)?Pl(e.value)?e.value.source:e.value:e,Em=e=>({isOnSubmit:!e||e===bn.onSubmit,isOnBlur:e===bn.onBlur,isOnChange:e===bn.onChange,isOnAll:e===bn.all,isOnTouch:e===bn.onTouched});const jm="AsyncFunction";var d5=e=>!!e&&!!e.validate&&!!(vn(e.validate)&&e.validate.constructor.name===jm||et(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===jm)),f5=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Cm=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const is=(e,t,n,r)=>{for(const o of n||Object.keys(e)){const i=re(e,o);if(i){const{_f:s,...a}=i;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],o)&&!r)return!0;if(s.ref&&t(s.ref,s.name)&&!r)return!0;if(is(a,t))break}else if(et(a)&&is(a,t))break}}};function Fm(e,t,n){const r=re(e,n);if(r||vc(n))return{error:r,name:n};const o=n.split(".");for(;o.length;){const i=o.join("."),s=re(t,i),a=re(e,i);if(s&&!Array.isArray(s)&&n!==i)return{name:n};if(a&&a.type)return{name:i,error:a};if(a&&a.root&&a.root.type)return{name:`${i}.root`,error:a.root};o.pop()}return{name:n}}var p5=(e,t,n,r)=>{n(e);const{name:o,...i}=e;return jt(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(s=>t[s]===(!r||bn.all))},h5=(e,t,n)=>!e||!t||e===t||os(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),m5=(e,t,n,r,o)=>o.isOnAll?!1:!n&&o.isOnTouch?!(t||e):(n?r.isOnBlur:o.isOnBlur)?!e:(n?r.isOnChange:o.isOnChange)?e:!0,g5=(e,t)=>!op(re(e,t)).length&&Xe(e,t),y5=(e,t,n)=>{const r=os(re(e,n));return je(r,"root",t[n]),je(e,n,r),e};function Tm(e,t,n="validate"){if(Yt(e)||Array.isArray(e)&&e.every(Yt)||Cn(e)&&!e)return{type:n,message:Yt(e)?e:"",ref:t}}var yo=e=>et(e)&&!Pl(e)?e:{value:e,message:""},Am=async(e,t,n,r,o,i)=>{const{ref:s,refs:a,required:c,maxLength:f,minLength:u,min:d,max:p,pattern:m,validate:h,name:b,valueAsNumber:k,mount:g}=e._f,y=re(n,b);if(!g||t.has(b))return{};const v=a?a[0]:s,$=R=>{o&&v.reportValidity&&(v.setCustomValidity(Cn(R)?"":R||""),v.reportValidity())},C={},_=ap(s),F=Vs(s),x=_||F,S=(k||sp(s))&&Ne(s.value)&&Ne(y)||Rl(s)&&s.value===""||y===""||Array.isArray(y)&&!y.length,T=mx.bind(null,b,r,C),A=(R,N,O,U=Nn.maxLength,E=Nn.minLength)=>{const w=R?N:O;C[b]={type:R?U:E,message:w,ref:s,...T(R?U:E,w)}};if(i?!Array.isArray(y)||!y.length:c&&(!x&&(S||Nt(y))||Cn(y)&&!y||F&&!vx(a).isValid||_&&!$x(a).isValid)){const{value:R,message:N}=Yt(c)?{value:!!c,message:c}:yo(c);if(R&&(C[b]={type:Nn.required,message:N,ref:v,...T(Nn.required,N)},!r))return $(N),C}if(!S&&(!Nt(d)||!Nt(p))){let R,N;const O=yo(p),U=yo(d);if(!Nt(y)&&!isNaN(y)){const E=s.valueAsNumber||y&&+y;Nt(O.value)||(R=E>O.value),Nt(U.value)||(N=E<U.value)}else{const E=s.valueAsDate||new Date(y),w=L=>new Date(new Date().toDateString()+" "+L),I=s.type=="time",P=s.type=="week";Yt(O.value)&&y&&(R=I?w(y)>w(O.value):P?y>O.value:E>new Date(O.value)),Yt(U.value)&&y&&(N=I?w(y)<w(U.value):P?y<U.value:E<new Date(U.value))}if((R||N)&&(A(!!R,O.message,U.message,Nn.max,Nn.min),!r))return $(C[b].message),C}if((f||u)&&!S&&(Yt(y)||i&&Array.isArray(y))){const R=yo(f),N=yo(u),O=!Nt(R.value)&&y.length>+R.value,U=!Nt(N.value)&&y.length<+N.value;if((O||U)&&(A(O,R.message,N.message),!r))return $(C[b].message),C}if(m&&!S&&Yt(y)){const{value:R,message:N}=yo(m);if(Pl(R)&&!y.match(R)&&(C[b]={type:Nn.pattern,message:N,ref:s,...T(Nn.pattern,N)},!r))return $(N),C}if(h){if(vn(h)){const R=await h(y,n),N=Tm(R,v);if(N&&(C[b]={...N,...T(Nn.validate,N.message)},!r))return $(N.message),C}else if(et(h)){let R={};for(const N in h){if(!jt(R)&&!r)break;const O=Tm(await h[N](y,n),v,N);O&&(R={...O,...T(N,O.message)},$(O.message),r&&(C[b]=R))}if(!jt(R)&&(C[b]={ref:v,...R},!r))return C}}return $(!0),C};const x5={mode:bn.onSubmit,reValidateMode:bn.onChange,shouldFocusError:!0};function v5(e={}){let t={...x5,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:vn(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},o=et(t.defaultValues)||et(t.values)?rt(t.defaultValues||t.values)||{}:{},i=t.shouldUnregister?{}:rt(o),s={action:!1,mount:!1,watch:!1,keepIsValid:!1},a={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},c,f=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={...u};let p={...d};const m={array:$m(),state:$m()},h=t.criteriaMode===bn.all,b=z=>B=>{clearTimeout(f),f=setTimeout(z,B)},k=async z=>{if(!s.keepIsValid&&!t.disabled&&(d.isValid||p.isValid||z)){let B;t.resolver?(B=jt((await x()).errors),g()):B=await T(r,!0),B!==n.isValid&&m.state.next({isValid:B})}},g=(z,B)=>{!t.disabled&&(d.isValidating||d.validatingFields||p.isValidating||p.validatingFields)&&((z||Array.from(a.mount)).forEach(H=>{H&&(B?je(n.validatingFields,H,B):Xe(n.validatingFields,H))}),m.state.next({validatingFields:n.validatingFields,isValidating:!jt(n.validatingFields)}))},y=(z,B=[],H,K,J=!0,X=!0)=>{if(K&&H&&!t.disabled){if(s.action=!0,X&&Array.isArray(re(r,z))){const oe=H(re(r,z),K.argA,K.argB);J&&je(r,z,oe)}if(X&&Array.isArray(re(n.errors,z))){const oe=H(re(n.errors,z),K.argA,K.argB);J&&je(n.errors,z,oe),g5(n.errors,z)}if((d.touchedFields||p.touchedFields)&&X&&Array.isArray(re(n.touchedFields,z))){const oe=H(re(n.touchedFields,z),K.argA,K.argB);J&&je(n.touchedFields,z,oe)}(d.dirtyFields||p.dirtyFields)&&(n.dirtyFields=So(o,i)),m.state.next({name:z,isDirty:R(z,B),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else je(i,z,B)},v=(z,B)=>{je(n.errors,z,B),m.state.next({errors:n.errors})},$=z=>{n.errors=z,m.state.next({errors:n.errors,isValid:!1})},C=(z,B,H,K)=>{const J=re(r,z);if(J){const X=re(i,z,Ne(H)?re(o,z):H);Ne(X)||K&&K.defaultChecked||B?je(i,z,B?X:_m(J._f)):U(z,X),s.mount&&!s.action&&k()}},_=(z,B,H,K,J)=>{let X=!1,oe=!1;const ce={name:z};if(!t.disabled){if(!H||K){(d.isDirty||p.isDirty)&&(oe=n.isDirty,n.isDirty=ce.isDirty=R(),X=oe!==ce.isDirty);const me=lr(re(o,z),B);oe=!!re(n.dirtyFields,z),me?Xe(n.dirtyFields,z):je(n.dirtyFields,z,!0),ce.dirtyFields=n.dirtyFields,X=X||(d.dirtyFields||p.dirtyFields)&&oe!==!me}if(H){const me=re(n.touchedFields,z);me||(je(n.touchedFields,z,H),ce.touchedFields=n.touchedFields,X=X||(d.touchedFields||p.touchedFields)&&me!==H)}X&&J&&m.state.next(ce)}return X?ce:{}},F=(z,B,H,K)=>{const J=re(n.errors,z),X=(d.isValid||p.isValid)&&Cn(B)&&n.isValid!==B;if(t.delayError&&H?(c=b(()=>v(z,H)),c(t.delayError)):(clearTimeout(f),c=null,H?je(n.errors,z,H):Xe(n.errors,z)),(H?!lr(J,H):J)||!jt(K)||X){const oe={...K,...X&&Cn(B)?{isValid:B}:{},errors:n.errors,name:z};n={...n,...oe},m.state.next(oe)}},x=async z=>(g(z,!0),await t.resolver(i,t.context,u5(z||a.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),S=async z=>{const{errors:B}=await x(z);if(g(z),z)for(const H of z){const K=re(B,H);K?je(n.errors,H,K):Xe(n.errors,H)}else n.errors=B;return B},T=async(z,B,H={valid:!0})=>{for(const K in z){const J=z[K];if(J){const{_f:X,...oe}=J;if(X){const ce=a.array.has(X.name),me=J._f&&d5(J._f);me&&d.validatingFields&&g([X.name],!0);const Se=await Am(J,a.disabled,i,h,t.shouldUseNativeValidation&&!B,ce);if(me&&d.validatingFields&&g([X.name]),Se[X.name]&&(H.valid=!1,B||e.shouldUseNativeValidation))break;!B&&(re(Se,X.name)?ce?y5(n.errors,Se,X.name):je(n.errors,X.name,Se[X.name]):Xe(n.errors,X.name))}!jt(oe)&&await T(oe,B,H)}}return H.valid},A=()=>{for(const z of a.unMount){const B=re(r,z);B&&(B._f.refs?B._f.refs.every(H=>!lu(H)):!lu(B._f.ref))&&ee(z)}a.unMount=new Set},R=(z,B)=>!t.disabled&&(z&&B&&je(i,z,B),!lr(Q(),o)),N=(z,B,H)=>o5(z,a,{...s.mount?i:Ne(B)?o:Yt(z)?{[z]:B}:B},H,B),O=z=>op(re(s.mount?i:o,z,t.shouldUnregister?re(o,z,[]):[])),U=(z,B,H={})=>{const K=re(r,z);let J=B;if(K){const X=K._f;X&&(!X.disabled&&je(i,z,bx(B,X)),J=Rl(X.ref)&&Nt(B)?"":B,yx(X.ref)?[...X.ref.options].forEach(oe=>oe.selected=J.includes(oe.value)):X.refs?Vs(X.ref)?X.refs.forEach(oe=>{(!oe.defaultChecked||!oe.disabled)&&(Array.isArray(J)?oe.checked=!!J.find(ce=>ce===oe.value):oe.checked=J===oe.value||!!J)}):X.refs.forEach(oe=>oe.checked=oe.value===J):sp(X.ref)?X.ref.value="":(X.ref.value=J,X.ref.type||m.state.next({name:z,values:rt(i)})))}(H.shouldDirty||H.shouldTouch)&&_(z,J,H.shouldTouch,H.shouldDirty,!0),H.shouldValidate&&L(z)},E=(z,B,H)=>{for(const K in B){if(!B.hasOwnProperty(K))return;const J=B[K],X=z+"."+K,oe=re(r,X);(a.array.has(z)||et(J)||oe&&!oe._f)&&!Hr(J)?E(X,J,H):U(X,J,H)}},w=(z,B,H={})=>{const K=re(r,z),J=a.array.has(z),X=rt(B);je(i,z,X),J?(m.array.next({name:z,values:rt(i)}),(d.isDirty||d.dirtyFields||p.isDirty||p.dirtyFields)&&H.shouldDirty&&m.state.next({name:z,dirtyFields:So(o,i),isDirty:R(z,X)})):K&&!K._f&&!Nt(X)?E(z,X,H):U(z,X,H),Cm(z,a)?m.state.next({...n,name:z,values:rt(i)}):m.state.next({name:s.mount?z:void 0,values:rt(i)})},I=async z=>{s.mount=!0;const B=z.target;let H=B.name,K=!0;const J=re(r,H),X=me=>{K=Number.isNaN(me)||Hr(me)&&isNaN(me.getTime())||lr(me,re(i,H,me))},oe=Em(t.mode),ce=Em(t.reValidateMode);if(J){let me,Se;const nt=B.type?_m(J._f):X_(z),Ge=z.type===bm.BLUR||z.type===bm.FOCUS_OUT,dn=!f5(J._f)&&!t.resolver&&!re(n.errors,H)&&!J._f.deps||m5(Ge,re(n.touchedFields,H),n.isSubmitted,ce,oe),zt=Cm(H,a,Ge);je(i,H,nt),Ge?(!B||!B.readOnly)&&(J._f.onBlur&&J._f.onBlur(z),c&&c(0)):J._f.onChange&&J._f.onChange(z);const fn=_(H,nt,Ge),pi=!jt(fn)||zt;if(!Ge&&m.state.next({name:H,type:z.type,values:rt(i)}),dn)return(d.isValid||p.isValid)&&(t.mode==="onBlur"?Ge&&k():Ge||k()),pi&&m.state.next({name:H,...zt?{}:fn});if(!Ge&&zt&&m.state.next({...n}),t.resolver){const{errors:Hs}=await x([H]);if(g([H]),X(nt),K){const hi=Fm(n.errors,r,H),mi=Fm(Hs,r,hi.name||H);me=mi.error,H=mi.name,Se=jt(Hs)}}else g([H],!0),me=(await Am(J,a.disabled,i,h,t.shouldUseNativeValidation))[H],g([H]),X(nt),K&&(me?Se=!1:(d.isValid||p.isValid)&&(Se=await T(r,!0)));K&&(J._f.deps&&(!Array.isArray(J._f.deps)||J._f.deps.length>0)&&L(J._f.deps),F(H,Se,me,fn))}},P=(z,B)=>{if(re(n.errors,B)&&z.focus)return z.focus(),1},L=async(z,B={})=>{let H,K;const J=os(z);if(t.resolver){const X=await S(Ne(z)?z:J);H=jt(X),K=z?!J.some(oe=>re(X,oe)):H}else z?(K=(await Promise.all(J.map(async X=>{const oe=re(r,X);return await T(oe&&oe._f?{[X]:oe}:oe)}))).every(Boolean),!(!K&&!n.isValid)&&k()):K=H=await T(r);return m.state.next({...!Yt(z)||(d.isValid||p.isValid)&&H!==n.isValid?{}:{name:z},...t.resolver||!z?{isValid:H}:{},errors:n.errors}),B.shouldFocus&&!K&&is(r,P,z?J:a.mount),K},Q=(z,B)=>{let H={...s.mount?i:o};return B&&(H=gx(B.dirtyFields?n.dirtyFields:n.touchedFields,H)),Ne(z)?H:Yt(z)?re(H,z):z.map(K=>re(H,K))},V=(z,B)=>({invalid:!!re((B||n).errors,z),isDirty:!!re((B||n).dirtyFields,z),error:re((B||n).errors,z),isValidating:!!re(n.validatingFields,z),isTouched:!!re((B||n).touchedFields,z)}),Y=z=>{const B=z?os(z):void 0;B==null||B.forEach(H=>Xe(n.errors,H)),B?B.forEach(H=>{m.state.next({name:H,errors:n.errors})}):m.state.next({errors:{}})},G=(z,B,H)=>{const K=(re(r,z,{_f:{}})._f||{}).ref,J=re(n.errors,z)||{},{ref:X,message:oe,type:ce,...me}=J;je(n.errors,z,{...me,...B,ref:K}),m.state.next({name:z,errors:n.errors,isValid:!1}),H&&H.shouldFocus&&K&&K.focus&&K.focus()},D=(z,B)=>vn(z)?m.state.subscribe({next:H=>"values"in H&&z(N(void 0,B),H)}):N(z,B,!0),W=z=>m.state.subscribe({next:B=>{h5(z.name,B.name,z.exact)&&p5(B,z.formState||d,ve,z.reRenderRoot)&&z.callback({values:{...i},...n,...B,defaultValues:o})}}).unsubscribe,te=z=>(s.mount=!0,p={...p,...z.formState},W({...z,formState:{...u,...z.formState}})),ee=(z,B={})=>{for(const H of z?os(z):a.mount)a.mount.delete(H),a.array.delete(H),B.keepValue||(Xe(r,H),Xe(i,H)),!B.keepError&&Xe(n.errors,H),!B.keepDirty&&Xe(n.dirtyFields,H),!B.keepTouched&&Xe(n.touchedFields,H),!B.keepIsValidating&&Xe(n.validatingFields,H),!t.shouldUnregister&&!B.keepDefaultValue&&Xe(o,H);m.state.next({values:rt(i)}),m.state.next({...n,...B.keepDirty?{isDirty:R()}:{}}),!B.keepIsValid&&k()},ie=({disabled:z,name:B})=>{if(Cn(z)&&s.mount||z||a.disabled.has(B)){const J=a.disabled.has(B)!==!!z;z?a.disabled.add(B):a.disabled.delete(B),J&&s.mount&&!s.action&&k()}},ae=(z,B={})=>{let H=re(r,z);const K=Cn(B.disabled)||Cn(t.disabled);return je(r,z,{...H||{},_f:{...H&&H._f?H._f:{ref:{name:z}},name:z,mount:!0,...B}}),a.mount.add(z),H?ie({disabled:Cn(B.disabled)?B.disabled:t.disabled,name:z}):C(z,!0,B.value),{...K?{disabled:B.disabled||t.disabled}:{},...t.progressive?{required:!!B.required,min:ji(B.min),max:ji(B.max),minLength:ji(B.minLength),maxLength:ji(B.maxLength),pattern:ji(B.pattern)}:{},name:z,onChange:I,onBlur:I,ref:J=>{if(J){ae(z,B),H=re(r,z);const X=Ne(J.value)&&J.querySelectorAll&&J.querySelectorAll("input,select,textarea")[0]||J,oe=s5(X),ce=H._f.refs||[];if(oe?ce.find(me=>me===X):X===H._f.ref)return;je(r,z,{_f:{...H._f,...oe?{refs:[...ce.filter(lu),X,...Array.isArray(re(o,z))?[{}]:[]],ref:{type:X.type,name:z}}:{ref:X}}}),C(z,!1,void 0,X)}else H=re(r,z,{}),H._f&&(H._f.mount=!1),(t.shouldUnregister||B.shouldUnregister)&&!(Z_(a.array,z)&&s.action)&&a.unMount.add(z)}}},de=()=>t.shouldFocusError&&is(r,P,a.mount),we=z=>{Cn(z)&&(m.state.next({disabled:z}),is(r,(B,H)=>{const K=re(r,H);K&&(B.disabled=K._f.disabled||z,Array.isArray(K._f.refs)&&K._f.refs.forEach(J=>{J.disabled=K._f.disabled||z}))},0,!1))},Me=(z,B)=>async H=>{let K;H&&(H.preventDefault&&H.preventDefault(),H.persist&&H.persist());let J=rt(i);if(m.state.next({isSubmitting:!0}),t.resolver){const{errors:X,values:oe}=await x();g(),n.errors=X,J=rt(oe)}else await T(r);if(a.disabled.size)for(const X of a.disabled)Xe(J,X);if(Xe(n.errors,"root"),jt(n.errors)){m.state.next({errors:{}});try{await z(J,H)}catch(X){K=X}}else B&&await B({...n.errors},H),de(),setTimeout(de);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:jt(n.errors)&&!K,submitCount:n.submitCount+1,errors:n.errors}),K)throw K},ft=(z,B={})=>{re(r,z)&&(Ne(B.defaultValue)?w(z,rt(re(o,z))):(w(z,B.defaultValue),je(o,z,rt(B.defaultValue))),B.keepTouched||Xe(n.touchedFields,z),B.keepDirty||(Xe(n.dirtyFields,z),n.isDirty=B.defaultValue?R(z,rt(re(o,z))):R()),B.keepError||(Xe(n.errors,z),d.isValid&&k()),m.state.next({...n}))},Ee=(z,B={})=>{const H=z?rt(z):o,K=rt(H),J=jt(z),X=J?o:K;if(B.keepDefaultValues||(o=H),!B.keepValues){if(B.keepDirtyValues){const oe=new Set([...a.mount,...Object.keys(So(o,i))]);for(const ce of Array.from(oe)){const me=re(n.dirtyFields,ce),Se=re(i,ce),nt=re(X,ce);me&&!Ne(Se)?je(X,ce,Se):!me&&!Ne(nt)&&w(ce,nt)}}else{if(rp&&Ne(z))for(const oe of a.mount){const ce=re(r,oe);if(ce&&ce._f){const me=Array.isArray(ce._f.refs)?ce._f.refs[0]:ce._f.ref;if(Rl(me)){const Se=me.closest("form");if(Se){Se.reset();break}}}}if(B.keepFieldsRef)for(const oe of a.mount)w(oe,re(X,oe));else r={}}i=t.shouldUnregister?B.keepDefaultValues?rt(o):{}:rt(X),m.array.next({values:{...X}}),m.state.next({values:{...X}})}a={mount:B.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},s.mount=!d.isValid||!!B.keepIsValid||!!B.keepDirtyValues||!t.shouldUnregister&&!jt(X),s.watch=!!t.shouldUnregister,s.keepIsValid=!!B.keepIsValid,s.action=!1,B.keepErrors||(n.errors={}),m.state.next({submitCount:B.keepSubmitCount?n.submitCount:0,isDirty:J?!1:B.keepDirty?n.isDirty:!!(B.keepDefaultValues&&!lr(z,o)),isSubmitted:B.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:J?{}:B.keepDirtyValues?B.keepDefaultValues&&i?So(o,i):n.dirtyFields:B.keepDefaultValues&&z?So(o,z):B.keepDirty?n.dirtyFields:{},touchedFields:B.keepTouched?n.touchedFields:{},errors:B.keepErrors?n.errors:{},isSubmitSuccessful:B.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:o})},Be=(z,B)=>Ee(vn(z)?z(i):z,{...t.resetOptions,...B}),fe=(z,B={})=>{const H=re(r,z),K=H&&H._f;if(K){const J=K.refs?K.refs[0]:K.ref;J.focus&&setTimeout(()=>{J.focus(),B.shouldSelect&&vn(J.select)&&J.select()})}},ve=z=>{n={...n,...z}},Ke={control:{register:ae,unregister:ee,getFieldState:V,handleSubmit:Me,setError:G,_subscribe:W,_runSchema:x,_updateIsValidating:g,_focusError:de,_getWatch:N,_getDirty:R,_setValid:k,_setFieldArray:y,_setDisabledField:ie,_setErrors:$,_getFieldArray:O,_reset:Ee,_resetDefaultValues:()=>vn(t.defaultValues)&&t.defaultValues().then(z=>{Be(z,t.resetOptions),m.state.next({isLoading:!1})}),_removeUnmounted:A,_disableForm:we,_subjects:m,_proxyFormState:d,get _fields(){return r},get _formValues(){return i},get _state(){return s},set _state(z){s=z},get _defaultValues(){return o},get _names(){return a},set _names(z){a=z},get _formState(){return n},get _options(){return t},set _options(z){t={...t,...z}}},subscribe:te,trigger:L,register:ae,handleSubmit:Me,watch:D,setValue:w,getValues:Q,reset:Be,resetField:ft,clearErrors:Y,unregister:ee,setError:G,setFocus:fe,getFieldState:V};return{...Ke,formControl:Ke}}function bc(e={}){const t=se.useRef(void 0),n=se.useRef(void 0),[r,o]=se.useState({isDirty:!1,isValidating:!1,isLoading:vn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:vn(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:r},e.defaultValues&&!vn(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:s,...a}=v5(e);t.current={...a,formState:r}}const i=t.current.control;return i._options=e,r5(()=>{const s=i._subscribe({formState:i._proxyFormState,callback:()=>o({...i._formState}),reRenderRoot:!0});return o(a=>({...a,isReady:!0})),i._formState.isReady=!0,s},[i]),se.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),se.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode)},[i,e.mode,e.reValidateMode]),se.useEffect(()=>{e.errors&&(i._setErrors(e.errors),i._focusError())},[i,e.errors]),se.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),se.useEffect(()=>{if(i._proxyFormState.isDirty){const s=i._getDirty();s!==r.isDirty&&i._subjects.state.next({isDirty:s})}},[i,r.isDirty]),se.useEffect(()=>{var s;e.values&&!lr(e.values,n.current)?(i._reset(e.values,{keepFieldsRef:!0,...i._options.resetOptions}),!((s=i._options.resetOptions)===null||s===void 0)&&s.keepIsValid||i._setValid(),n.current=e.values,o(a=>({...a}))):i._resetDefaultValues()},[i,e.values]),se.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=se.useMemo(()=>n5(r,i),[i,r]),t.current}const b5=tt`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Ws=tt`
  from { opacity: 0; transform: translateX(-28px); }
  to   { opacity: 1; transform: translateX(0); }
`,$5=tt`
  from { opacity: 0; transform: translateX(28px); }
  to   { opacity: 1; transform: translateX(0); }
`,w5=tt`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,S5=tt`
  from { opacity: 0; transform: scale(1.02); }
  to   { opacity: 1; transform: scale(1); }
`,k5=j.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 55fr 45fr;
  overflow: hidden;

  @media (max-width: 900px) {
    display: block;
    min-height: 100vh;
  }
`,_5=j.section`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[12]};
  min-height: 100vh;

  background-color: #5C3010;
  background-image:
    radial-gradient(
      ellipse 65% 55% at 8% 92%,
      ${({theme:e})=>e.colors.primary[900]}70,
      transparent 60%
    ),
    radial-gradient(
      ellipse 45% 45% at 92% 8%,
      rgba(80, 35, 5, 0.65),
      transparent 55%
    );

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 12%;
    right: 0;
    width: 1px;
    height: 76%;
    background: linear-gradient(
      to bottom,
      transparent,
      ${({theme:e})=>e.colors.primary[500]}55,
      transparent
    );
    z-index: 2;
  }

  animation: ${Ws} 0.6s ease both;

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[6]};
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    &::after { display: none; }
  }
`,E5=j.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
  }
`,j5=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[20]};
  animation: ${Ws} 0.55s 0.05s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({theme:e})=>e.spacing[12]};
    justify-content: center;
  }
`,C5=j.div`
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.primary[400]},
    ${({theme:e})=>e.colors.primary[600]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: #fff;
  letter-spacing: -0.5px;
  box-shadow: 0 4px 18px ${({theme:e})=>e.colors.primary[900]}80;
  flex-shrink: 0;
`,F5=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary[200]};
  letter-spacing: 0.025em;
`,T5=j.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({theme:e})=>e.spacing[5]};
  max-width: 460px;
  animation: ${Ws} 0.55s 0.12s ease both;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.75rem, 7vw, 2.3rem);
    max-width: 320px;
  }
`,A5=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.neutral[500]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0 0 ${({theme:e})=>e.spacing[10]};
  max-width: 360px;
  animation: ${Ws} 0.55s 0.2s ease both;

  @media (max-width: 900px) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    max-width: 280px;
    margin-bottom: ${({theme:e})=>e.spacing[8]};
  }
`,R5=j.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};
  animation: ${Ws} 0.55s 0.28s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[6]};
  }
`,cu=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,uu=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[400]};
  line-height: 1;
`,du=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,P5=j.div`
  position: relative;
  z-index: 3;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[700]};
  animation: ${b5} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`,z5=j.button`
  display: none;

  @media (max-width: 900px) {
    display: inline-flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
    margin-top: ${({theme:e})=>e.spacing[10]};
    padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[8]};
    background: linear-gradient(
      135deg,
      ${({theme:e})=>e.colors.primary[500]},
      ${({theme:e})=>e.colors.primary[600]}
    );
    color: #fff;
    border: none;
    border-radius: ${({theme:e})=>e.borderRadius.full};
    font-family: ${({theme:e})=>e.typography.fontFamily.sans};
    font-size: ${({theme:e})=>e.typography.fontSize.base};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    cursor: pointer;
    box-shadow: 0 8px 28px ${({theme:e})=>e.colors.primary[900]}60;
    animation: ${w5} 0.55s 0.35s ease both;
    transition:
      transform ${({theme:e})=>e.transitions.base},
      box-shadow ${({theme:e})=>e.transitions.base};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px ${({theme:e})=>e.colors.primary[900]}75;
    }
    &:active { transform: translateY(0); }
  }
`,O5=j.section`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[16]};
  animation: ${$5} 0.55s 0.1s ease both;

  @media (max-width: 1100px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[10]};
  }

  @media (max-width: 900px) {
    display: none;
  }
`,N5=j.div`
  width: 100%;
  max-width: 360px;
`,I5=j.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    z-index: ${({theme:e})=>e.zIndex.modal};
    background-color: ${({theme:e})=>e.colors.neutral[50]};
    overflow-y: auto;
    padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[6]};
    padding-bottom: ${({theme:e})=>e.spacing[12]};

    /* Transição de visibilidade */
    visibility: ${({$open:e})=>e?"visible":"hidden"};
    opacity: ${({$open:e})=>e?"1":"0"};
    pointer-events: ${({$open:e})=>e?"auto":"none"};
    transition:
      opacity 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      visibility 0.28s;

    /* Quando aberto, conteúdo entra com animação */
    ${({$open:e})=>e&&Is`
        & > * {
          animation: ${S5} 0.32s 0.05s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}
  }
`,L5=j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing[10]};
  flex-shrink: 0;
`,D5=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,U5=j.div`
  width: 32px;
  height: 32px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.primary[500]},
    ${({theme:e})=>e.colors.primary[700]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: #fff;
`,M5=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
`,B5=j.button`
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background-color: ${({theme:e})=>e.colors.neutral[100]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({theme:e})=>e.text.secondary};
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast};
  flex-shrink: 0;

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[200]};
    color: ${({theme:e})=>e.text.primary};
  }
`,V5=j.div`
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,W5=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.brand.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
`,H5=j.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,q5=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0;
`,G5=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[8]};
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,Rm=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Pm=j.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,zm=j.div`
  position: relative;
  display: flex;
  align-items: center;
`,Om=j.input`
  width: 100%;
  height: 50px;
  padding: 0
    ${({$hasToggle:e,theme:t})=>e?t.spacing[10]:t.spacing[1]}
    0 0;
  border: none;
  border-bottom: 1.5px solid ${({theme:e,$hasError:t})=>t?e.colors.error.base:e.colors.neutral[200]};
  border-radius: 0;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.primary};
  outline: none;
  -webkit-appearance: none;
  box-sizing: border-box;
  transition:
    border-color ${({theme:e})=>e.transitions.base},
    padding-left ${({theme:e})=>e.transitions.fast};

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral[300]};
  }

  &:focus {
    border-bottom-color: ${({theme:e,$hasError:t})=>t?e.colors.error.base:e.colors.primary[500]};
    padding-left: ${({theme:e})=>e.spacing[2]};
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,Q5=j.button`
  position: absolute;
  right: 0;
  bottom: 8px;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.neutral[300]};
  padding: ${({theme:e})=>e.spacing[1]};
  transition: color ${({theme:e})=>e.transitions.fast};

  &:hover { color: ${({theme:e})=>e.colors.primary[500]}; }
`,Nm=j.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,Y5=j.button`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({$isLoading:e,theme:t})=>e?t.colors.primary[700]:`linear-gradient(135deg,
          ${t.colors.primary[600]},
          ${t.colors.primary[500]}
        )`};
  color: #fff;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.02em;
  cursor: ${({$isLoading:e})=>e?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  box-shadow: 0 4px 18px ${({theme:e})=>e.colors.primary[900]}40;
  transition:
    background ${({theme:e})=>e.transitions.base},
    transform ${({theme:e})=>e.transitions.fast},
    box-shadow ${({theme:e})=>e.transitions.base};

  &:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      ${({theme:e})=>e.colors.primary[700]},
      ${({theme:e})=>e.colors.primary[600]}
    );
    box-shadow: 0 8px 30px ${({theme:e})=>e.colors.primary[900]}55;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 8px ${({theme:e})=>e.colors.primary[900]}35;
  }

  &:disabled { opacity: 0.7; cursor: not-allowed; }
`,K5=j.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: _spin 0.7s linear infinite;

  @keyframes _spin { to { transform: rotate(360deg); } }
`,X5=j.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[100]};
  margin: ${({theme:e})=>e.spacing[8]} 0 ${({theme:e})=>e.spacing[6]};
`,J5=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;function Im({onSubmitSuccess:e}){const{login:t}=fo(),[n,r]=M.useState(!1),[o,i]=M.useState(!1),{register:s,handleSubmit:a,formState:{errors:c}}=bc({defaultValues:{email:"",password:""}}),f=async({email:u,password:d})=>{i(!0);try{const{mustChangePassword:p}=await t(u,d);e(p)}catch(p){ue.error(p.message,{toastId:"login-error"})}finally{i(!1)}};return l.jsxs(l.Fragment,{children:[l.jsxs(V5,{children:[l.jsx(W5,{children:"Área restrita"}),l.jsx(H5,{children:"Bem-vindo de volta"}),l.jsx(q5,{children:"Use as credenciais fornecidas pelo administrador para acessar sua conta."})]}),l.jsxs("form",{onSubmit:a(f),noValidate:!0,children:[l.jsxs(G5,{children:[l.jsxs(Rm,{children:[l.jsx(Pm,{htmlFor:"email",children:"E-mail"}),l.jsx(zm,{children:l.jsx(Om,{id:"email",type:"email",placeholder:"seu@email.com",autoComplete:"email",$hasError:!!c.email,disabled:o,...s("email",{required:"O e-mail é obrigatório.",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Informe um e-mail válido."}})})}),c.email&&l.jsxs(Nm,{children:[l.jsx(be,{size:12}),c.email.message]})]}),l.jsxs(Rm,{children:[l.jsx(Pm,{htmlFor:"password",children:"Senha"}),l.jsxs(zm,{children:[l.jsx(Om,{id:"password",type:n?"text":"password",placeholder:"••••••••",autoComplete:"current-password",$hasError:!!c.password,$hasToggle:!0,disabled:o,...s("password",{required:"A senha é obrigatória.",minLength:{value:6,message:"Mínimo 6 caracteres."}})}),l.jsx(Q5,{type:"button",onClick:()=>r(u=>!u),"aria-label":n?"Ocultar senha":"Mostrar senha",tabIndex:-1,children:n?l.jsx(sx,{size:16}):l.jsx(ax,{size:16})})]}),c.password&&l.jsxs(Nm,{children:[l.jsx(be,{size:12}),c.password.message]})]})]}),l.jsx(Y5,{type:"submit",disabled:o,$isLoading:o,children:o?l.jsxs(l.Fragment,{children:[l.jsx(K5,{}),"Carregando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(cx,{size:17}),"Entrar"]})})]}),l.jsx(X5,{}),l.jsx(J5,{children:"Problemas com o acesso? Fale com o administrador do sistema."})]})}function Z5(){const e=Ar(),[t,n]=M.useState(!1);M.useEffect(()=>(document.body.style.overflow=t?"hidden":"",()=>{document.body.style.overflow=""}),[t]),M.useEffect(()=>{const o=i=>{i.key==="Escape"&&n(!1)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[]);const r=o=>{o?(n(!1),setTimeout(()=>e("/alterar-senha",{replace:!0}),180)):e("/dashboard",{replace:!0})};return l.jsxs(k5,{children:[l.jsxs(_5,{children:[l.jsxs(E5,{children:[l.jsxs(j5,{children:[l.jsx(C5,{children:"BG"}),l.jsx(F5,{children:"BG Representações"})]}),l.jsxs(T5,{children:["Gestão de ",l.jsx("em",{children:"benefícios"})," com"," ","precisão corporativa."]}),l.jsx(A5,{children:"Plataforma integrada para gerenciamento de clientes, vendas e cartões de vale alimentação — com rastreabilidade completa e auditoria em cada etapa."}),l.jsxs(R5,{children:[l.jsxs(cu,{children:[l.jsx(uu,{children:"100%"}),l.jsx(du,{children:"Auditado"})]}),l.jsxs(cu,{children:[l.jsx(uu,{children:"JWT"}),l.jsx(du,{children:"Segurança"})]}),l.jsxs(cu,{children:[l.jsx(uu,{children:"3 níveis"}),l.jsx(du,{children:"de acesso"})]})]}),l.jsxs(z5,{type:"button",onClick:()=>n(!0),"aria-label":"Abrir formulário de login",children:["Acessar Sistema",l.jsx(ix,{size:17})]})]}),l.jsxs(P5,{children:["© ",new Date().getFullYear()," BG Representações — Uso interno exclusivo."]})]}),l.jsx(O5,{children:l.jsx(N5,{children:l.jsx(Im,{onSubmitSuccess:r})})}),l.jsxs(I5,{$open:t,role:"dialog","aria-modal":"true","aria-label":"Formulário de login",children:[l.jsxs(L5,{children:[l.jsxs(D5,{children:[l.jsx(U5,{children:"BG"}),l.jsx(M5,{children:"BG Representações"})]}),l.jsx(B5,{type:"button",onClick:()=>n(!1),"aria-label":"Fechar formulário",children:l.jsx(xc,{size:18})})]}),l.jsx(Im,{onSubmitSuccess:r})]})]})}const eE=tt`
  from { opacity: 0; }
  to   { opacity: 1; }
`,tE=tt`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,nE=tt`
  from { opacity: 0; transform: translateX(32px); }
  to   { opacity: 1; transform: translateX(0); }
`,$c=tt`
  from { opacity: 0; transform: translateX(-32px); }
  to   { opacity: 1; transform: translateX(0); }
`;tt`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.03); }
`;const rE=j.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  /* Desktop: 55% brand | 45% form */
  grid-template-columns: 55fr 45fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  background-color: ${({theme:e})=>e.surface.page};

  @media (max-width: 900px) {
    /* Mobile/Tablet: coluna única, formulário empilhado abaixo */
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`,oE=j.section`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[12]};
  min-height: 100vh;

  /* Fundo âmbar escuro, fiel à referência */
  background-color: #5C3010;
  background-image:
    radial-gradient(ellipse 70% 60% at 10% 90%, rgba(180, 90, 20, 0.45) 0%, transparent 60%),
    radial-gradient(ellipse 50% 50% at 90% 10%, rgba(100, 50, 10, 0.6) 0%, transparent 55%),
    radial-gradient(ellipse 80% 40% at 50% 50%, rgba(80, 35, 5, 0.3) 0%, transparent 70%);

  /* Grain texture overlay */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }

  /* Linha decorativa âmbar na direita — separador elegante */
  &::after {
    content: '';
    position: absolute;
    top: 15%;
    right: 0;
    width: 1px;
    height: 70%;
    background: linear-gradient(
      to bottom,
      transparent,
      ${({theme:e})=>e.colors.primary[400]}88,
      transparent
    );
    z-index: 2;
  }

  @media (max-width: 900px) {
    min-height: 100vh;
    padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[6]};
    justify-content: center;
    align-items: center;
    text-align: center;

    &::after { display: none; }
  }
`,iE=j.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (max-width: 900px) {
    align-items: center;
  }
`,sE=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[16]};
  animation: ${$c} 0.6s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({theme:e})=>e.spacing[10]};
    justify-content: center;
  }
`,aE=j.div`
  width: 42px;
  height: 42px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.primary[400]},
    ${({theme:e})=>e.colors.primary[600]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: #fff;
  letter-spacing: -0.5px;
  box-shadow: 0 4px 16px rgba(180, 90, 20, 0.5);
  flex-shrink: 0;
`,lE=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary[200]};
  letter-spacing: 0.02em;
`,cE=j.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({theme:e})=>e.spacing[6]};
  animation: ${$c} 0.6s 0.1s ease both;
  max-width: 480px;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.8rem, 7vw, 2.4rem);
    max-width: 340px;
  }
`,uE=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.neutral[400]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0 0 ${({theme:e})=>e.spacing[10]};
  max-width: 380px;
  animation: ${$c} 0.6s 0.2s ease both;

  @media (max-width: 900px) {
    max-width: 300px;
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }
`,dE=j.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};
  animation: ${$c} 0.6s 0.3s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[6]};
  }

  @media (max-width: 380px) {
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,fu=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,pu=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[300]};
  line-height: 1;
`,hu=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[500]};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`,fE=j.div`
  position: relative;
  z-index: 3;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
  animation: ${eE} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`,pE=j.button`
  display: none;
  margin-top: ${({theme:e})=>e.spacing[8]};
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[8]};
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.primary[500]},
    ${({theme:e})=>e.colors.primary[600]}
  );
  color: #fff;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.base};
  box-shadow: 0 8px 24px rgba(180, 90, 20, 0.45);
  animation: ${tE} 0.6s 0.4s ease both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(180, 90, 20, 0.55);
  }

  @media (max-width: 900px) {
    display: inline-flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,hE=j.section`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[10]};
  animation: ${nE} 0.5s 0.15s ease both;

  @media (max-width: 900px) {
    /* No mobile, o painel de formulário é um drawer/sheet de baixo para cima */
    position: fixed;
    inset: 0;
    z-index: 200;
    background-color: ${({theme:e})=>e.colors.neutral[50]};
    padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[6]};
    overflow-y: auto;
    transform: ${({$open:e})=>e?"translateY(0)":"translateY(100%)"};
    transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  }
`,mE=j.div`
  width: 100%;
  max-width: 380px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`,gE=j.button`
  display: none;
  position: absolute;
  top: ${({theme:e})=>e.spacing[5]};
  right: ${({theme:e})=>e.spacing[5]};
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background-color: ${({theme:e})=>e.colors.neutral[100]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text.secondary};
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[200]};
    color: ${({theme:e})=>e.text.primary};
  }

  @media (max-width: 900px) {
    display: flex;
  }
`,yE=j.div`
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,xE=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.brand.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
`,vE=j.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,bE=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,$E=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
`,Lm=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Dm=j.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,Um=j.div`
  position: relative;
  display: flex;
  align-items: center;
`,Id=j.input`
  width: 100%;
  height: 52px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
  /* Apenas borda inferior — visual clean */
  border: none;
  border-bottom: 2px solid ${({theme:e,$hasError:t})=>t?e.border.error:e.border.default};
  border-radius: 0;
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.primary};
  outline: none;
  transition:
    border-color ${({theme:e})=>e.transitions.fast},
    padding-left ${({theme:e})=>e.transitions.fast};
  box-sizing: border-box;

  &::placeholder {
    color: ${({theme:e})=>e.text.muted};
    font-weight: ${({theme:e})=>e.typography.fontWeight.regular};
  }

  &:focus {
    border-bottom-color: ${({theme:e,$hasError:t})=>t?e.border.error:e.brand.primary};
    padding-left: ${({theme:e})=>e.spacing[2]};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Padding extra para botão de toggle */
  ${({$hasToggle:e,theme:t})=>e&&Is`
    padding-right: ${t.spacing[10]};
  `}
`;j.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: ${({theme:e})=>e.brand.primary};
  transition: width ${({theme:e})=>e.transitions.slow};

  ${Id}:focus ~ & {
    width: 100%;
  }
`;const wE=j.button`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:e})=>e.text.muted};
  padding: ${({theme:e})=>e.spacing[2]};
  transition: color ${({theme:e})=>e.transitions.fast};

  &:hover { color: ${({theme:e})=>e.brand.primary}; }
`,Mm=j.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,SE=j.button`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({$isLoading:e,theme:t})=>e?t.colors.primary[700]:`linear-gradient(135deg, ${t.colors.primary[600]}, ${t.colors.primary[500]})`};
  color: #fff;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.02em;
  cursor: ${({$isLoading:e})=>e?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  transition: all ${({theme:e})=>e.transitions.base};
  box-shadow: 0 4px 16px rgba(180, 90, 20, 0.25);

  &:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      ${({theme:e})=>e.colors.primary[700]},
      ${({theme:e})=>e.colors.primary[600]}
    );
    box-shadow: 0 8px 28px rgba(180, 90, 20, 0.4);
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(180, 90, 20, 0.25);
  }

  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
`,kE=j.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;

  @keyframes spin { to { transform: rotate(360deg); } }
`,_E=j.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[6]} 0;
`,EE=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,jE=j.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    position: fixed;
    inset: 0;
    background-color: rgba(35, 27, 21, 0.6);
    z-index: 199;
    opacity: ${({$open:e})=>e?"1":"0"};
    pointer-events: ${({$open:e})=>e?"auto":"none"};
    transition: opacity 0.3s ease;
    backdrop-filter: blur(2px);
  }
`,CE=j.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    width: 40px;
    height: 4px;
    background-color: ${({theme:e})=>e.colors.neutral[300]};
    border-radius: ${({theme:e})=>e.borderRadius.full};
    margin: 0 auto ${({theme:e})=>e.spacing[8]};
  }
`;function FE(){const{login:e}=fo(),t=Ar(),[n,r]=M.useState(!1),[o,i]=M.useState(!1),[s,a]=M.useState(!1),{register:c,handleSubmit:f,formState:{errors:u}}=bc({defaultValues:{email:"",password:""}}),d=()=>{r(!0),document.body.style.overflow="hidden"},p=()=>{r(!1),document.body.style.overflow=""},m=async({email:h,password:b})=>{a(!0);try{const{mustChangePassword:k}=await e(h,b);document.body.style.overflow="",k?t("/alterar-senha",{replace:!0}):t("/dashboard",{replace:!0})}catch(k){ue.error(k.message,{toastId:"login-error"})}finally{a(!1)}};return l.jsxs(rE,{children:[l.jsxs(oE,{children:[l.jsxs(iE,{children:[l.jsxs(sE,{children:[l.jsx(aE,{children:"BG"}),l.jsx(lE,{children:"BG Representações"})]}),l.jsxs(cE,{children:["Gestão de ",l.jsx("em",{children:"benefícios"})," com"," ","precisão corporativa."]}),l.jsx(uE,{children:"Plataforma integrada para gerenciamento de clientes, vendas e cartões de vale alimentação — com rastreabilidade completa e auditoria em cada etapa."}),l.jsxs(dE,{children:[l.jsxs(fu,{children:[l.jsx(pu,{children:"100%"}),l.jsx(hu,{children:"Auditado"})]}),l.jsxs(fu,{children:[l.jsx(pu,{children:"JWT"}),l.jsx(hu,{children:"Segurança"})]}),l.jsxs(fu,{children:[l.jsx(pu,{children:"3 níveis"}),l.jsx(hu,{children:"de acesso"})]})]}),l.jsxs(pE,{type:"button",onClick:d,children:["Acessar o sistema",l.jsx(ix,{size:17})]})]}),l.jsxs(fE,{children:["© ",new Date().getFullYear()," BG Representações — Uso interno exclusivo."]})]}),l.jsx(jE,{$open:n,onClick:p}),l.jsxs(hE,{$open:n,children:[l.jsx(CE,{}),l.jsx(gE,{type:"button",onClick:p,"aria-label":"Fechar",children:l.jsx(xc,{size:18})}),l.jsxs(mE,{children:[l.jsxs(yE,{children:[l.jsx(xE,{children:"Área restrita"}),l.jsx(vE,{children:"Bem-vindo de volta"}),l.jsx(bE,{children:"Use as credenciais fornecidas pelo administrador para acessar sua conta."})]}),l.jsxs("form",{onSubmit:f(m),noValidate:!0,children:[l.jsxs($E,{children:[l.jsxs(Lm,{children:[l.jsx(Dm,{htmlFor:"email",children:"E-mail"}),l.jsx(Um,{children:l.jsx(Id,{id:"email",type:"email",placeholder:"seu@email.com",autoComplete:"email",$hasError:!!u.email,disabled:s,...c("email",{required:"O e-mail é obrigatório.",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Informe um e-mail válido."}})})}),u.email&&l.jsxs(Mm,{children:[l.jsx(be,{size:12}),u.email.message]})]}),l.jsxs(Lm,{children:[l.jsx(Dm,{htmlFor:"password",children:"Senha"}),l.jsxs(Um,{children:[l.jsx(Id,{id:"password",type:o?"text":"password",placeholder:"••••••••",autoComplete:"current-password",$hasError:!!u.password,$hasToggle:!0,disabled:s,...c("password",{required:"A senha é obrigatória.",minLength:{value:6,message:"Mínimo 6 caracteres."}})}),l.jsx(wE,{type:"button",onClick:()=>i(h=>!h),"aria-label":o?"Ocultar senha":"Mostrar senha",tabIndex:-1,children:o?l.jsx(sx,{size:16}):l.jsx(ax,{size:16})})]}),u.password&&l.jsxs(Mm,{children:[l.jsx(be,{size:12}),u.password.message]})]})]}),l.jsx(SE,{type:"submit",disabled:s,$isLoading:s,children:s?l.jsxs(l.Fragment,{children:[l.jsx(kE,{}),"Carregando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(cx,{size:17}),"Entrar"]})})]}),l.jsx(_E,{}),l.jsx(EE,{children:"Problemas com o acesso? Fale com o administrador do sistema."})]})]})]})}const lp=tt`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,TE=j.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  animation: ${lp} 0.35s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,AE=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,RE=j.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,PE=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,zE=j.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.primary[600]},
    ${({theme:e})=>e.colors.primary[500]}
  );
  color: #fff;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 3px 12px ${({theme:e})=>e.colors.primary[900]}35;
  transition:
    transform ${({theme:e})=>e.transitions.fast},
    box-shadow ${({theme:e})=>e.transitions.base},
    background ${({theme:e})=>e.transitions.base};

  &:hover {
    background: linear-gradient(
      135deg,
      ${({theme:e})=>e.colors.primary[700]},
      ${({theme:e})=>e.colors.primary[600]}
    );
    box-shadow: 0 6px 20px ${({theme:e})=>e.colors.primary[900]}45;
    transform: translateY(-1px);
  }

  &:active { transform: translateY(0); }
`,OE=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  animation: ${lp} 0.35s 0.05s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,NE=j.div`
  position: relative;
  flex: 1;
  max-width: 360px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,IE=j.span`
  position: absolute;
  left: ${({theme:e})=>e.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.text.muted};
  display: flex;
  align-items: center;
  pointer-events: none;
`,LE=j.input`
  width: 100%;
  height: 40px;
  padding: 0 ${({theme:e})=>e.spacing[4]} 0 ${({theme:e})=>e.spacing[9]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.surface.card};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.primary};
  outline: none;
  transition:
    border-color ${({theme:e})=>e.transitions.fast},
    box-shadow ${({theme:e})=>e.transitions.fast};
  box-sizing: border-box;

  &::placeholder { color: ${({theme:e})=>e.text.muted}; }

  &:focus {
    border-color: ${({theme:e})=>e.colors.primary[500]};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary[600]}18;
  }
`,DE=j.select`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.surface.card};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.primary};
  outline: none;
  cursor: pointer;
  transition: border-color ${({theme:e})=>e.transitions.fast};

  &:focus { border-color: ${({theme:e})=>e.colors.primary[500]}; }
`,UE=j.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  animation: ${lp} 0.35s 0.1s ease both;
`,ME=j.table`
  width: 100%;
  border-collapse: collapse;
`,BE=j.thead`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Ci=j.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  text-align: left;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
  white-space: nowrap;
`,VE=j.tbody``,WE=j.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  transition: background-color ${({theme:e})=>e.transitions.fast};
  cursor: pointer;

  &:last-child { border-bottom: none; }

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[50]};
  }
`,Ld=j.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.primary};
  vertical-align: middle;
`,mu=j(Ld)`
  color: ${({theme:e})=>e.text.secondary};
`,Bm={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},HE=j.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=Bm[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=Bm[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  /* Bolinha de status */
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`,qE={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},GE=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[8]};
  gap: ${({theme:e})=>e.spacing[3]};
  text-align: center;
`,QE=j.div`
  color: ${({theme:e})=>e.colors.neutral[300]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,YE=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,KE=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
  max-width: 300px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,XE=j.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  &:last-child { border-bottom: none; }
`,Fi=j.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
`,JE=tt`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,Ti=j.div`
  height: 14px;
  width: ${({$w:e})=>e??"100%"};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.neutral[100]} 25%,
    ${({theme:e})=>e.colors.neutral[50]}  50%,
    ${({theme:e})=>e.colors.neutral[100]} 75%
  );
  background-size: 600px 100%;
  animation: ${JE} 1.4s ease infinite;
`,ZE=j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  border-top: 1px solid ${({theme:e})=>e.border.default};
  background-color: ${({theme:e})=>e.colors.neutral[50]};

  @media (max-width: 500px) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[3]};
    text-align: center;
  }
`,ej=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
`,tj=j.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,ha=j.button`
  height: 32px;
  min-width: 32px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1.5px solid ${({theme:e,$active:t})=>t?e.colors.primary[500]:e.border.default};
  background-color: ${({theme:e,$active:t})=>t?e.colors.primary[50]:e.surface.card};
  color: ${({theme:e,$active:t})=>t?e.colors.primary[700]:e.text.secondary};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({$active:e,theme:t})=>e?t.typography.fontWeight.semibold:t.typography.fontWeight.regular};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.4:1};
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    border-color ${({theme:e})=>e.transitions.fast};

  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>e.colors.neutral[100]};
    border-color: ${({theme:e})=>e.colors.neutral[300]};
  }
`,nj=15,rj=({status:e})=>l.jsx(HE,{$status:e,children:qE[e]??e});function oj(){return Array.from({length:5}).map((e,t)=>l.jsxs(XE,{children:[l.jsx(Fi,{children:l.jsx(Ti,{$w:"60%"})}),l.jsx(Fi,{children:l.jsx(Ti,{$w:"80%"})}),l.jsx(Fi,{children:l.jsx(Ti,{$w:"50%"})}),l.jsx(Fi,{children:l.jsx(Ti,{$w:"70%"})}),l.jsx(Fi,{children:l.jsx(Ti,{$w:"40%"})})]},t))}const Vm=(e="")=>{const t=e.slice(0,14);return t.length<=2?t:t.length<=5?`${t.slice(0,2)}.${t.slice(2)}`:t.length<=8?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5)}`:t.length<=12?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8)}`:`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8,12)}-${t.slice(12)}`},ij=(e="")=>/^[\d.\-/]+$/.test(e)&&/\d/.test(e),sj=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",aj=e=>({food:"Alimentação",meal:"Refeição",both:"Ambos"})[e]??e??"—";function lj(){const e=Ar(),{hasRole:t}=fo(),[n,r]=M.useState([]),[o,i]=M.useState({total:0,totalPages:1,currentPage:1}),[s,a]=M.useState(!0),[c,f]=M.useState(""),[u,d]=M.useState(1),[p,m]=M.useState(""),[h,b]=M.useState(""),k=M.useRef(null),g=M.useCallback(async()=>{var C,_,F;a(!0);try{const x=new URLSearchParams({page:u,limit:nj});h&&x.set("search",h),c&&x.set("overall_status",c);const{data:S}=await ut.get(`/clients?${x.toString()}`);r(S.data??[]),i({total:((C=S.pagination)==null?void 0:C.total)??0,totalPages:((_=S.pagination)==null?void 0:_.totalPages)??1,currentPage:((F=S.pagination)==null?void 0:F.currentPage)??1})}catch(x){ue.error(Yn(x,"Erro ao carregar clientes.")),r([])}finally{a(!1)}},[u,h,c]);M.useEffect(()=>{g()},[g]);const y=C=>{const _=C.target.value,F=_.replace(/\D/g,"");if(ij(_)){const x=Vm(F);m(x),v(x)}else _===""?(m(""),v("")):(m(_),v(_))},v=C=>{k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{b(C),d(1)},400)},$=C=>{f(C.target.value),d(1)};return l.jsxs(l.Fragment,{children:[l.jsxs(TE,{children:[l.jsxs(AE,{children:[l.jsx(RE,{children:"Clientes"}),l.jsx(PE,{children:o.total>0?`${o.total} cliente${o.total!==1?"s":""} cadastrado${o.total!==1?"s":""}`:"Nenhum cliente cadastrado ainda"})]}),t("admin","user")&&l.jsxs(zE,{type:"button",onClick:()=>e("/onboarding"),children:[l.jsx(f_,{size:16}),"Novo Cliente"]})]}),l.jsxs(OE,{children:[l.jsxs(NE,{children:[l.jsxs(IE,{children:[" ",l.jsx(u_,{size:15})]}),l.jsx(LE,{type:"text",placeholder:"Buscar por Razão Social ou CNPJ…",style:{paddingLeft:"30px"},value:p,onChange:y})]}),l.jsxs(DE,{value:c,onChange:$,children:[l.jsx("option",{value:"",children:"Todos os status"}),l.jsx("option",{value:"pending",children:"Pendente"}),l.jsx("option",{value:"analysis",children:"Em análise"}),l.jsx("option",{value:"approved",children:"Aprovado"})]})]}),l.jsxs(UE,{children:[l.jsxs(ME,{children:[l.jsx(BE,{children:l.jsxs("tr",{children:[l.jsx(Ci,{children:"Razão Social"}),l.jsx(Ci,{children:"CNPJ"}),l.jsx(Ci,{children:"Benefício"}),l.jsx(Ci,{children:"Status"}),l.jsx(Ci,{children:"Cadastro"})]})}),l.jsxs(VE,{children:[s&&l.jsx(oj,{}),!s&&n.map(C=>l.jsxs(WE,{onClick:()=>e(`/clientes/${C.id}`),title:"Ver detalhes",children:[l.jsx(Ld,{children:C.corporate_name}),l.jsx(mu,{children:Vm(C.cnpj)??"—"}),l.jsx(mu,{children:aj(C.benefit_type)}),l.jsx(Ld,{children:l.jsx(rj,{status:C.overall_status})}),l.jsx(mu,{children:sj(C.createdAt)})]},C.id)),!s&&n.length===0&&l.jsx("tr",{children:l.jsx("td",{colSpan:5,children:l.jsxs(GE,{children:[l.jsx(QE,{children:l.jsx(px,{size:40})}),l.jsx(YE,{children:"Nenhum cliente encontrado"}),l.jsx(KE,{children:p||c?"Tente ajustar os filtros para ver mais resultados.":'Clique em "Novo Cliente" para iniciar o cadastro.'})]})})})]})]}),!s&&o.totalPages>1&&l.jsxs(ZE,{children:[l.jsxs(ej,{children:["Página ",o.currentPage," de ",o.totalPages," ","· ",o.total," registros"]}),l.jsxs(tj,{children:[l.jsx(ha,{type:"button",onClick:()=>d(C=>Math.max(1,C-1)),disabled:u<=1,"aria-label":"Página anterior",children:l.jsx(Zk,{size:15})}),Array.from({length:o.totalPages},(C,_)=>_+1).filter(C=>C===1||C===o.totalPages||Math.abs(C-u)<=2).reduce((C,_,F,x)=>(F>0&&_-x[F-1]>1&&C.push("…"),C.push(_),C),[]).map((C,_)=>C==="…"?l.jsx(ha,{disabled:!0,as:"span",children:"…"},`ellipsis-${_}`):l.jsx(ha,{type:"button",$active:C===u,onClick:()=>d(C),children:C},C)),l.jsx(ha,{type:"button",onClick:()=>d(C=>Math.min(o.totalPages,C+1)),disabled:u>=o.totalPages,"aria-label":"Próxima página",children:l.jsx(e_,{size:15})})]})]})]})]})}const cj=tt`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,uj=tt`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,wx=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  animation: ${cj} 0.35s ease both;
`,Sx=j.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,kx=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,dj=j.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.secondary};
  cursor: pointer;
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast},
    border-color ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[100]};
    color: ${({theme:e})=>e.text.primary};
    border-color: ${({theme:e})=>e.border.strong};
  }
`,_x=j.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,fj=j.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,pj=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  letter-spacing: 0.04em;
`,hj=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`,Ir=j.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,xo=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,vo=j.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,bo=j.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,Ex=j.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Vi=j.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,at=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`,pt=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,mt=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,mj=j(mt)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,Wm={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},Hm={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},qm=j.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=Wm[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=Wm[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`,gj=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,yj=j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`,xj=j.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,vj=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,bj=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;const $j=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,wj=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.surface.card};
  transition: background-color ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[50]};
  }
`,Sj=j.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,kj=j.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,_j=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ej=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,jj=j.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  background: transparent;
  color: ${({theme:e})=>e.text.muted};
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast},
    border-color ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary[50]};
    color: ${({theme:e})=>e.brand.primary};
    border-color: ${({theme:e})=>e.colors.primary[200]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Cj=j.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,gu=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,yu=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,$o=j.div`
  height: ${({$h:e})=>e??"14px"};
  width: ${({$w:e})=>e??"100%"};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.neutral[100]} 25%,
    ${({theme:e})=>e.colors.neutral[50]}  50%,
    ${({theme:e})=>e.colors.neutral[100]} 75%
  );
  background-size: 600px 100%;
  animation: ${uj} 1.4s ease infinite;
`,Fj=j(Ir)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Tj=j.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[4]} 0;
`,Aj=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length!==14?e:t.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5")},Rj=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length===11?t.replace(/^(\d{2})(\d{5})(\d{4})$/,"($1) $2-$3"):t.length===10?t.replace(/^(\d{2})(\d{4})(\d{4})$/,"($1) $2-$3"):e},Gm=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",Pj=e=>e==null?"—":Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),zj={food:"Vale Alimentação",meal:"Vale Refeição",both:"Alimentação + Refeição"},Oj={company_document:"Documento da Empresa",proof_of_address:"Comprovante de Endereço",bank_account_proof:"Comprovante Bancário",card_machine_proof:"Comprovante de Maquininha"};function Nj(){return l.jsxs(wx,{children:[l.jsx(Sx,{children:l.jsxs(kx,{children:[l.jsx($o,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),l.jsxs(_x,{children:[l.jsx($o,{$w:"220px",$h:"28px"}),l.jsx($o,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]})}),l.jsx(Ex,{children:l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:l.jsxs(Fj,{children:[l.jsx($o,{$w:"40%",$h:"18px"}),l.jsx(Tj,{}),l.jsx(Vi,{children:Array.from({length:6}).map((e,t)=>l.jsxs(at,{children:[l.jsx($o,{$w:"50%",$h:"11px"}),l.jsx($o,{$w:"80%",$h:"16px",style:{marginTop:"4px"}})]},t))})]})})})]})}const Ij=[{value:"pending",label:"Pendente"},{value:"analysis",label:"Em análise"},{value:"approved",label:"Aprovado"}],Qm={approved:{bg:"#d1fae5",color:"#065f46"},analysis:{bg:"#dbeafe",color:"#1e40af"},pending:{bg:"#fef3c7",color:"#92400e"}};function Lj({clientFlagId:e,currentStatus:t,onUpdated:n,onOptimisticUpdate:r}){const[o,i]=M.useState(!1),[s,a]=M.useState(t),c=Qm[s]??Qm.pending;M.useEffect(()=>{a(t)},[t]);const f=async u=>{const d=u.target.value,p=s;if(d!==p){a(d),r(e,d),i(!0);try{await ut.patch(`/client-flags/${e}/status`,{status:d}),ue.success("Status da bandeira atualizado."),n()}catch(m){a(p),r(e,p),ue.error(Yn(m,"Erro ao atualizar status."))}finally{i(!1)}}};return l.jsx("select",{value:s,onChange:f,disabled:o,style:{height:"28px",padding:"0 28px 0 8px",border:"1.5px solid #e4d9cf",borderRadius:"99px",fontFamily:"inherit",fontSize:"11px",fontWeight:600,backgroundColor:c.bg,color:c.color,cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 8px center"},children:Ij.map(u=>l.jsx("option",{value:u.value,children:u.label},u.value))})}function Dj(){var W,te;const{id:e}=qy(),t=Ar(),{isAdmin:n,isPartner:r,isUser:o,user:i}=fo(),[s,a]=M.useState(null),[c,f]=M.useState(!0),[u,d]=M.useState(null),p=M.useCallback(async()=>{try{const{data:ee}=await ut.get(`/clients/${e}`);console.log(ee.data),a(ee.data)}catch(ee){ue.error(Yn(ee,"Erro ao carregar dados.")),t("/clientes",{replace:!0})}finally{f(!1)}},[e,t]);M.useEffect(()=>{p()},[p]);const m=M.useCallback((ee,ie)=>{a(ae=>ae&&{...ae,clientFlags:ae.clientFlags.map(de=>de.id===ee?{...de,status:ie}:de)})},[]),h=M.useCallback(async()=>{try{const{data:ee}=await ut.get(`/clients/${e}`);a(ee.data)}catch{}},[e]),b=async ee=>{d(ee.id);try{const ie=await ut.get(`/documents/${ee.id}/download`,{responseType:"blob"}),ae=URL.createObjectURL(ie.data),de=document.createElement("a");de.href=ae,de.download=ee.original_name??`documento-${ee.id}`,document.body.appendChild(de),de.click(),de.remove(),URL.revokeObjectURL(ae)}catch(ie){ue.error(Yn(ie,"Erro no download."))}finally{d(null)}};if(c)return l.jsx(Nj,{});if(!s)return null;const{corporate_name:k,trade_name:g,cnpj:y,state_registration:v,phone:$,email:C,protocol:_,benefit_type:F,overall_status:x,notes:S,createdAt:T,address_street:A,address_number:R,address_complement:N,address_neighborhood:O,address_city:U,address_state:E,address_zip:w,clientFlags:I=[],documents:P=[],bankAccounts:L=[]}=s,Q=!r&&(n||o&&s.created_by===(i==null?void 0:i.id)),V=!r&&(n||o&&s.created_by===(i==null?void 0:i.id)),Y=A||U,G=[A,R,N].filter(Boolean).join(", "),D=[O,U,E].filter(Boolean).join(" — ");return l.jsxs(wx,{children:[l.jsxs(Sx,{children:[l.jsxs(kx,{children:[l.jsxs(dj,{onClick:()=>t("/clientes"),title:"Voltar",children:[l.jsx(Zf,{size:18})," Voltar"]}),l.jsxs(_x,{children:[l.jsx(fj,{children:g||k}),l.jsxs(pj,{children:["Protocolo #",_]})]})]}),l.jsxs(hj,{children:[Q&&l.jsxs("button",{onClick:()=>t(`/clientes/${e}/editar`),style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 14px",border:"1.5px solid #e4d9cf",borderRadius:"8px",background:"transparent",fontSize:"13px",fontWeight:500,color:"#7a6455",cursor:"pointer"},children:[l.jsx(c_,{size:14})," Editar"]}),l.jsx(qm,{$status:x,children:Hm[x]??x})]})]}),l.jsxs(Ex,{children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l.jsxs(Ir,{children:[l.jsxs(xo,{children:[l.jsx(vo,{children:l.jsx(ep,{size:18})}),l.jsx(bo,{children:"Dados da Empresa"})]}),l.jsxs(Vi,{children:[l.jsxs(at,{children:[l.jsx(pt,{children:"Razão Social"}),l.jsx(mt,{children:k||"—"})]}),!r&&l.jsxs(at,{children:[l.jsx(pt,{children:"Nome Fantasia"}),l.jsx(mt,{children:g||"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"CNPJ"}),l.jsx(mt,{children:Aj(y)})]}),!r&&l.jsxs(at,{children:[l.jsx(pt,{children:"Inscrição Estadual"}),l.jsx(mt,{children:v||"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Telefone"}),l.jsx(mt,{children:Rj($)})]}),!r&&l.jsxs(at,{children:[l.jsx(pt,{children:"E-mail"}),l.jsx(mt,{children:C||"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Tipo de Benefício"}),l.jsx(mt,{children:zj[F]??F??"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Cadastrado em"}),l.jsx(mt,{children:Gm(T)})]}),!r&&S&&l.jsxs(at,{$span:!0,children:[l.jsx(pt,{children:"Observações Internas"}),l.jsx(mj,{children:S})]})]})]}),l.jsxs(Ir,{children:[l.jsxs(xo,{children:[l.jsx(vo,{children:l.jsx(np,{size:18})}),l.jsx(bo,{children:"Endereço"})]}),Y?l.jsxs(Vi,{$cols:2,children:[l.jsxs(at,{$span:!0,children:[l.jsx(pt,{children:"Logradouro"}),l.jsx(mt,{children:G||"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Bairro / Cidade / UF"}),l.jsx(mt,{children:D||"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"CEP"}),l.jsx(mt,{children:w||"—"})]})]}):l.jsx(gu,{children:l.jsx(yu,{children:"Endereço não informado."})})]}),!r&&l.jsxs(Ir,{children:[l.jsxs(xo,{children:[l.jsx(vo,{children:l.jsx(Al,{size:18})}),l.jsx(bo,{children:"Documentos"})]}),P.length>0?l.jsx($j,{children:P.map(ee=>l.jsxs(wj,{children:[l.jsx(Sj,{children:l.jsx(Al,{size:16})}),l.jsxs(kj,{children:[l.jsx(_j,{children:ee.original_name||"Documento"}),l.jsx(Ej,{children:Oj[ee.document_type]??ee.document_type})]}),l.jsx(jj,{onClick:()=>b(ee),disabled:u===ee.id,children:u===ee.id?l.jsx(s_,{size:14,className:"animate-spin"}):l.jsx(r_,{size:14})})]},ee.id))}):l.jsx(gu,{children:l.jsx(yu,{children:"Sem documentos."})})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l.jsxs(Ir,{children:[l.jsxs(xo,{children:[l.jsx(vo,{children:l.jsx(lx,{size:18})}),l.jsx(bo,{children:"Bandeiras"})]}),l.jsx(gj,{children:I.map(ee=>{var ie;return l.jsxs(yj,{children:[l.jsxs(xj,{children:[l.jsx(vj,{children:((ie=ee.flag)==null?void 0:ie.name)||"Bandeira"}),l.jsx(bj,{children:ee.origin})]}),V?l.jsx(Lj,{clientFlagId:ee.id,currentStatus:ee.status,onUpdated:h,onOptimisticUpdate:m}):l.jsx(qm,{$status:ee.status,style:{fontSize:"10px",padding:"2px 8px"},children:Hm[ee.status]??ee.status})]},ee.id)})})]}),!r&&l.jsxs(Ir,{children:[l.jsxs(xo,{children:[l.jsx(vo,{children:l.jsx(tp,{size:18})}),l.jsx(bo,{children:"Dados Bancários"})]}),L.length>0?L.map(ee=>l.jsx(Cj,{children:l.jsxs(Vi,{$cols:1,children:[l.jsxs(at,{children:[l.jsx(pt,{children:"Banco"}),l.jsx(mt,{children:ee.bank_name})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Agência/Conta"}),l.jsxs(mt,{children:[ee.agency,ee.agency_digit?`-${ee.agency_digit}`:""," / ",ee.account,ee.account_digit?`-${ee.account_digit}`:""]})]})]})},ee.id)):l.jsx(gu,{children:l.jsx(yu,{children:"Sem dados bancários."})})]}),s.sales&&s.sales.length>0&&l.jsxs(Ir,{children:[l.jsxs(xo,{children:[l.jsx(vo,{children:l.jsx(n_,{size:18})}),l.jsx(bo,{children:"Plano Contratado"})]}),l.jsxs(Vi,{$cols:1,children:[l.jsxs(at,{children:[l.jsx(pt,{children:"Nome do Plano"}),l.jsx(mt,{children:((W=s.sales[0])==null?void 0:W.plan_name)||"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Valor"}),l.jsx(mt,{children:Pj((te=s.sales[0])==null?void 0:te.total_value)})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Data da Venda"}),l.jsx(mt,{children:Gm(s.sales[0].createdAt)})]})]})]})]})]}),l.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } } .animate-spin { animation: spin 1s linear infinite; }"})]})}const Ym=(e,t,n)=>{if(e&&"reportValidity"in e){const r=re(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},jx=(e,t)=>{for(const n in t.fields){const r=t.fields[n];r&&r.ref&&"reportValidity"in r.ref?Ym(r.ref,n,e):r&&r.refs&&r.refs.forEach(o=>Ym(o,n,e))}},Uj=(e,t)=>{t.shouldUseNativeValidation&&jx(e,t);const n={};for(const r in e){const o=re(t.fields,r),i=Object.assign(e[r]||{},{ref:o&&o.ref});if(Mj(t.names||Object.keys(e),r)){const s=Object.assign({},re(n,r));je(s,"root",i),je(n,r,s)}else je(n,r,i)}return n},Mj=(e,t)=>{const n=Km(t);return e.some(r=>Km(r).match(`^${n}\\.\\d+`))};function Km(e){return e.replace(/\]|\[/g,"")}function Cx(e,t,n){return n===void 0&&(n={}),function(r,o,i){try{return Promise.resolve(function(s,a){try{var c=(t!=null&&t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:o}))).then(function(f){return i.shouldUseNativeValidation&&jx({},i),{values:n.raw?Object.assign({},r):f,errors:{}}}))}catch(f){return a(f)}return c&&c.then?c.then(void 0,a):c}(0,function(s){if(!s.inner)throw s;return{values:{},errors:Uj((a=s,c=!i.shouldUseNativeValidation&&i.criteriaMode==="all",(a.inner||[]).reduce(function(f,u){if(f[u.path]||(f[u.path]={message:u.message,type:u.type}),c){var d=f[u.path].types,p=d&&d[u.type];f[u.path]=mx(u.path,c,f,u.type,p?[].concat(p,u.message):u.message)}return f},{})),i)};var a,c}))}catch(s){return Promise.reject(s)}}}function fi(e){this._maxSize=e,this.clear()}fi.prototype.clear=function(){this._size=0,this._values=Object.create(null)};fi.prototype.get=function(e){return this._values[e]};fi.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var Bj=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Fx=/^\d+$/,Vj=/^\d/,Wj=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Hj=/^\s*(['"]?)(.*?)(\1)\s*$/,cp=512,Xm=new fi(cp);new fi(cp);var Jm=new fi(cp),Jr={split:Dd,normalizePath:Zm,getter:function(e,t){var n=Zm(e);return Jm.get(e)||Jm.set(e,function(o){for(var i=0,s=n.length;i<s;)if(o!=null||!t)o=o[n[i++]];else return;return o})},join:function(e){return e.reduce(function(t,n){return t+(up(n)||Fx.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){qj(Array.isArray(e)?e:Dd(e),t,n)}};function Zm(e){return Xm.get(e)||Xm.set(e,Dd(e).map(function(t){return t.replace(Hj,"$2")}))}function Dd(e){return e.match(Bj)||[""]}function qj(e,t,n){var r=e.length,o,i,s,a;for(i=0;i<r;i++)o=e[i],o&&(Yj(o)&&(o='"'+o+'"'),a=up(o),s=!a&&/^\d+$/.test(o),t.call(n,o,a,s,i,e))}function up(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function Gj(e){return e.match(Vj)&&!e.match(Fx)}function Qj(e){return Wj.test(e)}function Yj(e){return!up(e)&&(Gj(e)||Qj(e))}const Kj=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Tx=e=>e.match(Kj)||[],Xj=(e,t)=>Tx(e).join(t).toLowerCase(),Jj=e=>Tx(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),Zj=e=>Xj(e,"_");var xu={camelCase:Jj,snakeCase:Zj},dp={exports:{}};dp.exports=function(e){return Ax(e3(e),e)};dp.exports.array=Ax;function Ax(e,t){var n=e.length,r=new Array(n),o={},i=n,s=t3(t),a=n3(e);for(t.forEach(function(f){if(!a.has(f[0])||!a.has(f[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)o[i]||c(e[i],i,new Set);return r;function c(f,u,d){if(d.has(f)){var p;try{p=", node was:"+JSON.stringify(f)}catch{p=""}throw new Error("Cyclic dependency"+p)}if(!a.has(f))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(f));if(!o[u]){o[u]=!0;var m=s.get(f)||new Set;if(m=Array.from(m),u=m.length){d.add(f);do{var h=m[--u];c(h,a.get(h),d)}while(u);d.delete(f)}r[--n]=f}}}function e3(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var o=e[n];t.add(o[0]),t.add(o[1])}return Array.from(t)}function t3(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var o=e[n];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}function n3(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var r3=dp.exports;const o3=Eg(r3),i3=Object.prototype.toString,s3=Error.prototype.toString,a3=RegExp.prototype.toString,l3=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",c3=/^Symbol\((.*)\)(.*)$/;function u3(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function eg(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return u3(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return l3.call(e).replace(c3,"Symbol($1)");const r=i3.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+s3.call(e)+"]":r==="RegExp"?a3.call(e):null}function kr(e,t){let n=eg(e,t);return n!==null?n:JSON.stringify(e,function(r,o){let i=eg(this[r],t);return i!==null?i:o},2)}function Rx(e){return e==null?[]:[].concat(e)}let Px,zx,Ox,d3=/\$\{\s*(\w+)\s*\}/g;Px=Symbol.toStringTag;class tg{constructor(t,n,r,o){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[Px]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=o,this.errors=[],this.inner=[],Rx(t).forEach(i=>{if(Ft.isError(i)){this.errors.push(...i.errors);const s=i.inner.length?i.inner:[i];this.inner.push(...s)}else this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}zx=Symbol.hasInstance;Ox=Symbol.toStringTag;class Ft extends Error{static formatError(t,n){const r=n.label||n.path||"this";return n=Object.assign({},n,{path:r,originalPath:n.path}),typeof t=="string"?t.replace(d3,(o,i)=>kr(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,o,i){const s=new tg(t,n,r,o);if(i)return s;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[Ox]="Error",this.name=s.name,this.message=s.message,this.type=s.type,this.value=s.value,this.path=s.path,this.errors=s.errors,this.inner=s.inner,Error.captureStackTrace&&Error.captureStackTrace(this,Ft)}static[zx](t){return tg[Symbol.hasInstance](t)||super[Symbol.hasInstance](t)}}let Fn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const o=r!=null&&r!==n?` (cast from the value \`${kr(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${kr(n,!0)}\``+o:`${e} must match the configured type. The validated value was: \`${kr(n,!0)}\``+o}},Ot={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},f3={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Ud={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},p3={isValue:"${path} field must be ${value}"},qa={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},h3={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},m3={notType:e=>{const{path:t,value:n,spec:r}=e,o=r.types.length;if(Array.isArray(n)){if(n.length<o)return`${t} tuple value has too few items, expected a length of ${o} but got ${n.length} for value: \`${kr(n,!0)}\``;if(n.length>o)return`${t} tuple value has too many items, expected a length of ${o} but got ${n.length} for value: \`${kr(n,!0)}\``}return Ft.formatError(Fn.notType,e)}};Object.assign(Object.create(null),{mixed:Fn,string:Ot,number:f3,date:Ud,object:qa,array:h3,boolean:p3,tuple:m3});const fp=e=>e&&e.__isYupSchema__;class zl{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:o,otherwise:i}=n,s=typeof r=="function"?r:(...a)=>a.every(c=>c===r);return new zl(t,(a,c)=>{var f;let u=s(...a)?o:i;return(f=u==null?void 0:u(c))!=null?f:c})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),o=this.fn(r,t,n);if(o===void 0||o===t)return t;if(!fp(o))throw new TypeError("conditions must return a schema object");return o.resolve(n)}}const ma={context:"$",value:"."};class po{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===ma.context,this.isValue=this.key[0]===ma.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?ma.context:this.isValue?ma.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Jr.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let o=this.isContext?r:this.isValue?t:n;return this.getter&&(o=this.getter(o||{})),this.map&&(o=this.map(o)),o}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}po.prototype.__isYupRef=!0;const qr=e=>e==null;function wo(e){function t({value:n,path:r="",options:o,originalValue:i,schema:s},a,c){const{name:f,test:u,params:d,message:p,skipAbsent:m}=e;let{parent:h,context:b,abortEarly:k=s.spec.abortEarly,disableStackTrace:g=s.spec.disableStackTrace}=o;const y={value:n,parent:h,context:b};function v(A={}){const R=Nx(Object.assign({value:n,originalValue:i,label:s.spec.label,path:A.path||r,spec:s.spec,disableStackTrace:A.disableStackTrace||g},d,A.params),y),N=new Ft(Ft.formatError(A.message||p,R),n,R.path,A.type||f,R.disableStackTrace);return N.params=R,N}const $=k?a:c;let C={path:r,parent:h,type:f,from:o.from,createError:v,resolve(A){return Ix(A,y)},options:o,originalValue:i,schema:s};const _=A=>{Ft.isError(A)?$(A):A?c(null):$(v())},F=A=>{Ft.isError(A)?$(A):a(A)};if(m&&qr(n))return _(!0);let S;try{var T;if(S=u.call(C,n,C),typeof((T=S)==null?void 0:T.then)=="function"){if(o.sync)throw new Error(`Validation test of type: "${C.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(S).then(_,F)}}catch(A){F(A);return}_(S)}return t.OPTIONS=e,t}function Nx(e,t){if(!e)return e;for(const n of Object.keys(e))e[n]=Ix(e[n],t);return e}function Ix(e,t){return po.isRef(e)?e.getValue(t.value,t.parent,t.context):e}function g3(e,t,n,r=n){let o,i,s;return t?(Jr.forEach(t,(a,c,f)=>{let u=c?a.slice(1,a.length-1):a;e=e.resolve({context:r,parent:o,value:n});let d=e.type==="tuple",p=f?parseInt(u,10):0;if(e.innerType||d){if(d&&!f)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(n&&p>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);o=n,n=n&&n[p],e=d?e.spec.types[p]:e.innerType}if(!f){if(!e.fields||!e.fields[u])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);o=n,n=n&&n[u],e=e.fields[u]}i=u,s=c?"["+a+"]":"."+a}),{schema:e,parent:o,parentPath:i}):{parent:o,parentPath:t,schema:e}}class Ol extends Set{describe(){const t=[];for(const n of this.values())t.push(po.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Ol(this.values())}merge(t,n){const r=this.clone();return t.forEach(o=>r.add(o)),n.forEach(o=>r.delete(o)),r}}function Lo(e,t=new Map){if(fp(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=Lo(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,o]of e.entries())n.set(r,Lo(o,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(Lo(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,o]of Object.entries(e))n[r]=Lo(o,t)}else throw Error(`Unable to clone ${e}`);return n}function y3(e){if(!(e!=null&&e.length))return;const t=[];let n="",r=!1,o=!1;for(let i=0;i<e.length;i++){const s=e[i];if(s==="["&&!o){n&&(t.push(...n.split(".").filter(Boolean)),n=""),r=!0;continue}if(s==="]"&&!o){n&&(/^\d+$/.test(n)?t.push(n):t.push(n.replace(/^"|"$/g,"")),n=""),r=!1;continue}if(s==='"'){o=!o;continue}if(s==="."&&!r&&!o){n&&(t.push(n),n="");continue}n+=s}return n&&t.push(...n.split(".").filter(Boolean)),t}function x3(e,t){const n=t?`${t}.${e.path}`:e.path;return e.errors.map(r=>({message:r,path:y3(n)}))}function Lx(e,t){var n;if(!((n=e.inner)!=null&&n.length)&&e.errors.length)return x3(e,t);const r=t?`${t}.${e.path}`:e.path;return e.inner.flatMap(o=>Lx(o,r))}class zn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Ol,this._blacklist=new Ol,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Fn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Lo(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const o=Object.assign({},n.spec,r.spec);return r.spec=o,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(s=>{i.test(s.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((o,i)=>i.resolve(o,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,o,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(o=t.recursive)!=null?o:this.spec.recursive,disableStackTrace:(i=t.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({},n,{value:t})),o=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(o&&qr(i))return i;let s=kr(t),a=kr(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${s} 
`+(a!==s?`result of cast: ${a}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((o,i)=>i.call(this,o,t,this,n),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,o){let{path:i,originalValue:s=t,strict:a=this.spec.strict}=n,c=t;a||(c=this._cast(c,Object.assign({assert:!1},n)));let f=[];for(let u of Object.values(this.internalTests))u&&f.push(u);this.runTests({path:i,value:c,originalValue:s,options:n,tests:f},r,u=>{if(u.length)return o(u,c);this.runTests({path:i,value:c,originalValue:s,options:n,tests:this.tests},r,o)})}runTests(t,n,r){let o=!1,{tests:i,value:s,originalValue:a,path:c,options:f}=t,u=b=>{o||(o=!0,n(b,s))},d=b=>{o||(o=!0,r(b,s))},p=i.length,m=[];if(!p)return d([]);let h={value:s,originalValue:a,path:c,options:f,schema:this};for(let b=0;b<i.length;b++){const k=i[b];k(h,u,function(y){y&&(Array.isArray(y)?m.push(...y):m.push(y)),--p<=0&&d(m)})}}asNestedTest({key:t,index:n,parent:r,parentPath:o,originalParent:i,options:s}){const a=t??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const c=typeof a=="number";let f=r[a];const u=Object.assign({},s,{strict:!0,parent:r,value:f,originalValue:i[a],key:void 0,[c?"index":"key"]:a,path:c||a.includes(".")?`${o||""}[${c?a:`"${a}"`}]`:(o?`${o}.`:"")+t});return(d,p,m)=>this.resolve(u)._validate(f,u,p,m)}validate(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return new Promise((s,a)=>o._validate(t,n,(c,f)=>{Ft.isError(c)&&(c.value=f),a(c)},(c,f)=>{c.length?a(new Ft(c,f,void 0,void 0,i)):s(f)}))}validateSync(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i,s=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return o._validate(t,Object.assign({},n,{sync:!0}),(a,c)=>{throw Ft.isError(a)&&(a.value=c),a},(a,c)=>{if(a.length)throw new Ft(a,t,void 0,void 0,s);i=c}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Ft.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Ft.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):Lo(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=wo({message:n,name:"nullable",test(o){return o===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=wo({message:n,name:"optionality",test(o){return o===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=Fn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Fn.notNull){return this.nullability(!1,t)}required(t=Fn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Fn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),o=wo(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(s=>!(s.OPTIONS.name===n.name&&(i||s.OPTIONS.test===o.OPTIONS.test))),r.tests.push(o),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),o=Rx(t).map(i=>new po(i));return o.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new zl(o,n):zl.fromOptions(o,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=wo({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Fn.oneOf){let r=this.clone();return t.forEach(o=>{r._whitelist.add(o),r._blacklist.delete(o)}),r.internalTests.whiteList=wo({message:n,name:"oneOf",skipAbsent:!0,test(o){let i=this.schema._whitelist,s=i.resolveAll(this.resolve);return s.includes(o)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:s}})}}),r}notOneOf(t,n=Fn.notOneOf){let r=this.clone();return t.forEach(o=>{r._blacklist.add(o),r._whitelist.delete(o)}),r.internalTests.blacklist=wo({message:n,name:"notOneOf",test(o){let i=this.schema._blacklist,s=i.resolveAll(this.resolve);return s.includes(o)?this.createError({params:{values:Array.from(i).join(", "),resolved:s}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:o,optional:i,nullable:s}=n.spec;return{meta:o,label:r,optional:i,nullable:s,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.filter((c,f,u)=>u.findIndex(d=>d.OPTIONS.name===c.OPTIONS.name)===f).map(c=>{const f=c.OPTIONS.params&&t?Nx(Object.assign({},c.OPTIONS.params),t):c.OPTIONS.params;return{name:c.OPTIONS.name,params:f}})}}get"~standard"(){const t=this;return{version:1,vendor:"yup",async validate(r){try{return{value:await t.validate(r,{abortEarly:!1})}}catch(o){if(o instanceof Ft)return{issues:Lx(o)};throw o}}}}}zn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])zn.prototype[`${e}At`]=function(t,n,r={}){const{parent:o,parentPath:i,schema:s}=g3(this,t,n,r.context);return s[e](o&&o[i],Object.assign({},r,{parent:o,path:t}))};for(const e of["equals","is"])zn.prototype[e]=zn.prototype.oneOf;for(const e of["not","nope"])zn.prototype[e]=zn.prototype.notOneOf;const v3=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function b3(e){const t=Md(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;if(t.z===void 0&&t.plusMinus===void 0)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return t.z!=="Z"&&t.plusMinus!==void 0&&(n=t.hourOffset*60+t.minuteOffset,t.plusMinus==="+"&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}function Md(e){var t,n;const r=v3.exec(e);return r?{year:In(r[1]),month:In(r[2],1)-1,day:In(r[3],1),hour:In(r[4]),minute:In(r[5]),second:In(r[6]),millisecond:r[7]?In(r[7].substring(0,3)):0,precision:(t=(n=r[7])==null?void 0:n.length)!=null?t:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:In(r[10]),minuteOffset:In(r[11])}:null}function In(e,t=0){return Number(e)||t}let $3=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,w3=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,S3=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,k3="^\\d{4}-\\d{2}-\\d{2}",_3="\\d{2}:\\d{2}:\\d{2}",E3="(([+-]\\d{2}(:?\\d{2})?)|Z)",j3=new RegExp(`${k3}T${_3}(\\.\\d+)?${E3}$`),C3=e=>qr(e)||e===e.trim(),F3={}.toString();function pe(){return new Dx}class Dx extends zn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n)=>{if(!this.spec.coerce||this.isType(t)||Array.isArray(t))return t;const r=t!=null&&t.toString?t.toString():t;return r===F3?t:r})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||Fn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=Ot.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=Ot.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=Ot.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,o,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:o,name:i}=n:o=n),this.test({name:i||"matches",message:o||Ot.matches,params:{regex:t},skipAbsent:!0,test:s=>s===""&&r||s.search(t)!==-1})}email(t=Ot.email){return this.matches($3,{name:"email",message:t,excludeEmptyString:!0})}url(t=Ot.url){return this.matches(w3,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Ot.uuid){return this.matches(S3,{name:"uuid",message:t,excludeEmptyString:!1})}datetime(t){let n="",r,o;return t&&(typeof t=="object"?{message:n="",allowOffset:r=!1,precision:o=void 0}=t:n=t),this.matches(j3,{name:"datetime",message:n||Ot.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||Ot.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:i=>{if(!i||r)return!0;const s=Md(i);return s?!!s.z:!1}}).test({name:"datetime_precision",message:n||Ot.datetime_precision,params:{precision:o},skipAbsent:!0,test:i=>{if(!i||o==null)return!0;const s=Md(i);return s?s.precision===o:!1}})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Ot.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:C3})}lowercase(t=Ot.lowercase){return this.transform(n=>qr(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>qr(n)||n===n.toLowerCase()})}uppercase(t=Ot.uppercase){return this.transform(n=>qr(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>qr(n)||n===n.toUpperCase()})}}pe.prototype=Dx.prototype;let T3=new Date(""),A3=e=>Object.prototype.toString.call(e)==="[object Date]";class pp extends zn{constructor(){super({type:"date",check(t){return A3(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n)=>!this.spec.coerce||this.isType(t)||t===null?t:(t=b3(t),isNaN(t)?pp.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(po.isRef(t))r=t;else{let o=this.cast(t);if(!this._typeCheck(o))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=o}return r}min(t,n=Ud.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o>=this.resolve(r)}})}max(t,n=Ud.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(o){return o<=this.resolve(r)}})}}pp.INVALID_DATE=T3;function R3(e,t=[]){let n=[],r=new Set,o=new Set(t.map(([s,a])=>`${s}-${a}`));function i(s,a){let c=Jr.split(s)[0];r.add(c),o.has(`${a}-${c}`)||n.push([a,c])}for(const s of Object.keys(e)){let a=e[s];r.add(s),po.isRef(a)&&a.isSibling?i(a.path,s):fp(a)&&"deps"in a&&a.deps.forEach(c=>i(c,s))}return o3.array(Array.from(r),n).reverse()}function ng(e,t){let n=1/0;return e.some((r,o)=>{var i;if((i=t.path)!=null&&i.includes(r))return n=o,!0}),n}function Ux(e){return(t,n)=>ng(e,t)-ng(e,n)}const P3=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function Ga(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Ga(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Ga(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Ga)}):"optional"in e?e.optional():e}const z3=(e,t)=>{const n=[...Jr.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),o=Jr.getter(Jr.join(n),!0)(e);return!!(o&&r in o)};let rg=e=>Object.prototype.toString.call(e)==="[object Object]";function og(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const O3=Ux([]);function hp(e){return new Mx(e)}class Mx extends zn{constructor(t){super({type:"object",check(n){return rg(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=O3,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let o=super._cast(t,n);if(o===void 0)return this.getDefault(n);if(!this._typeCheck(o))return o;let i=this.fields,s=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(o).filter(d=>!this._nodes.includes(d))),c={},f=Object.assign({},n,{parent:c,__validating:n.__validating||!1}),u=!1;for(const d of a){let p=i[d],m=d in o,h=o[d];if(p){let b;f.path=(n.path?`${n.path}.`:"")+d,p=p.resolve({value:h,context:n.context,parent:c});let k=p instanceof zn?p.spec:void 0,g=k==null?void 0:k.strict;if(k!=null&&k.strip){u=u||d in o;continue}b=!n.__validating||!g?p.cast(h,f):h,b!==void 0&&(c[d]=b)}else m&&!s&&(c[d]=h);(m!==d in c||c[d]!==h)&&(u=!0)}return u?c:o}_validate(t,n={},r,o){let{from:i=[],originalValue:s=t,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:s},...i],n.__validating=!0,n.originalValue=s,super._validate(t,n,r,(c,f)=>{if(!a||!rg(f)){o(c,f);return}s=s||f;let u=[];for(let d of this._nodes){let p=this.fields[d];!p||po.isRef(p)||u.push(p.asNestedTest({options:n,key:d,parent:f,parentPath:n.path,originalParent:s}))}this.runTests({tests:u,value:f,originalValue:s,options:n},r,d=>{o(d.sort(this._sortErrors).concat(c),f)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[o,i]of Object.entries(this.fields)){const s=r[o];r[o]=s===void 0?i:s}return n.withMutation(o=>o.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var o;const i=this.fields[r];let s=t;(o=s)!=null&&o.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[r]})),n[r]=i&&"getDefault"in i?i.getDefault(s):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=R3(t,n),r._sortErrors=Ux(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let o=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),o=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),o)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return Ga(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,o])=>t.includes(r)&&t.includes(o)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let o=Jr.getter(t,!0);return this.transform(i=>{if(!i)return i;let s=i;return z3(i,t)&&(s=Object.assign({},i),r||delete s[t],s[n]=o(i)),s})}json(){return this.transform(P3)}exact(t){return this.test({name:"exact",exclusive:!0,message:t||qa.exact,test(n){if(n==null)return!0;const r=og(this.schema,n);return r.length===0||this.createError({params:{properties:r.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(t=!0,n=qa.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(o){if(o==null)return!0;const i=og(this.schema,o);return!t||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=qa.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const o of Object.keys(n))r[t(o)]=n[o];return r})}camelCase(){return this.transformKeys(xu.camelCase)}snakeCase(){return this.transformKeys(xu.snakeCase)}constantCase(){return this.transformKeys(t=>xu.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[i,s]of Object.entries(n.fields)){var o;let a=t;(o=a)!=null&&o.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),r.fields[i]=s.describe(a)}return r}}hp.prototype=Mx.prototype;const N3=tt`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,I3=tt`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,Bx=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px; /* espaço para o footer fixo */
  animation: ${N3} 0.3s ease both;
`,Vx=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,L3=j.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.secondary};
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast},
    border-color ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[100]};
    color: ${({theme:e})=>e.text.primary};
    border-color: ${({theme:e})=>e.border.strong};
  }
`,Wx=j.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,D3=j.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,U3=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,Wi=j.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,ga=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,ya=j.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,xa=j.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,ss=j.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,ig=j.div`
  grid-column: 1 / -1;
`,ze=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ve=j.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,va=j.span`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.neutral[400]};
  flex-shrink: 0;
`,mp=({theme:e,$hasError:t})=>`
  width: 100%;
  background-color: ${e.surface.card};
  border: 1.5px solid ${t?e.colors.error.base:e.colors.neutral[200]};
  border-radius: ${e.borderRadius.md};
  font-family: ${e.typography.fontFamily.sans};
  font-size: ${e.typography.fontSize.base};
  color: ${e.text.primary};
  outline: none;
  transition:
    border-color ${e.transitions.fast},
    box-shadow ${e.transitions.fast};
  box-sizing: border-box;

  &::placeholder {
    color: ${e.colors.neutral[300]};
  }

  &:focus {
    border-color: ${t?e.colors.error.base:e.colors.primary[500]};
    box-shadow: 0 0 0 3px ${t?e.colors.error.base+"20":e.colors.primary[600]+"18"};
  }

  &:disabled {
    background-color: ${e.colors.neutral[50]};
    color: ${e.text.muted};
    cursor: not-allowed;
    opacity: 0.75;
  }
`,Ht=j.input`
  ${({theme:e,$hasError:t})=>mp({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,ba=j.select`
  ${({theme:e,$hasError:t})=>mp({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,M3=j.textarea`
  ${({theme:e,$hasError:t})=>mp({theme:e,$hasError:t})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,$a=j.div`
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1.5px solid ${({theme:e})=>e.colors.neutral[200]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.muted};
  user-select: none;
  cursor: not-allowed;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,wa=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[400]};
  font-style: italic;
`,$t=j.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,Hi=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,B3=j.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,V3=j.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,W3=j.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,H3=j.div`
  border: 1.5px dashed ${({theme:e,$hasFile:t})=>t?e.colors.primary[400]:e.border.strong};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e,$hasFile:t})=>t?e.colors.primary[50]:e.colors.neutral[50]};
  padding: ${({theme:e})=>e.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  transition:
    border-color ${({theme:e})=>e.transitions.fast},
    background-color ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary[400]};
    background-color: ${({theme:e})=>e.colors.primary[50]};
  }
`,q3=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,G3=j.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
  cursor: pointer;
  text-align: center;
  min-height: 96px;
`,Q3=j.div`
  color: ${({theme:e,$hasFile:t})=>t?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,Y3=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,K3=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,sg=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,ag=j.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,lg=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,cg=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,X3=j.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  border: none;
  background-color: ${({theme:e})=>e.colors.neutral[100]};
  color: ${({theme:e})=>e.text.muted};
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.error.light};
    color: ${({theme:e})=>e.colors.error.base};
  }
`,J3=j.div`
  position: fixed;
  bottom: 0;
  left: 240px; /* largura da sidebar */
  right: 0;
  z-index: ${({theme:e})=>e.zIndex.sticky};
  background-color: ${({theme:e})=>e.surface.card};
  border-top: 1px solid ${({theme:e})=>e.border.default};
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[8]};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[3]};
  box-shadow: 0 -4px 16px rgba(35, 27, 21, 0.06);

  @media (max-width: 900px) {
    left: 0;
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Z3=j.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.secondary};
  cursor: pointer;
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast};

  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>e.colors.neutral[100]};
    color: ${({theme:e})=>e.text.primary};
  }

  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,e4=j.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({$isSubmitting:e,theme:t})=>e?t.colors.primary[700]:`linear-gradient(135deg, ${t.colors.primary[600]}, ${t.colors.primary[500]})`};
  color: #fff;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  cursor: ${({$isSubmitting:e})=>e?"not-allowed":"pointer"};
  box-shadow: 0 3px 12px ${({theme:e})=>e.colors.primary[900]}35;
  transition:
    background ${({theme:e})=>e.transitions.base},
    transform ${({theme:e})=>e.transitions.fast},
    box-shadow ${({theme:e})=>e.transitions.base};

  &:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      ${({theme:e})=>e.colors.primary[700]},
      ${({theme:e})=>e.colors.primary[600]}
    );
    box-shadow: 0 6px 20px ${({theme:e})=>e.colors.primary[900]}45;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) { transform: translateY(0); }
  &:disabled { opacity: 0.65; cursor: not-allowed; }
`,t4=j.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,zr=j.div`
  height: ${({$h:e})=>e??"14px"};
  width: ${({$w:e})=>e??"100%"};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.neutral[100]} 25%,
    ${({theme:e})=>e.colors.neutral[50]}  50%,
    ${({theme:e})=>e.colors.neutral[100]} 75%
  );
  background-size: 600px 100%;
  animation: ${I3} 1.4s ease infinite;
`,ug=j(Wi)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,dg=j.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`;j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`;j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`;j.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`;j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`;j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`;j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`;j.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;j.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`;j.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;j.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;j.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  background: transparent;
  color: ${({theme:e})=>e.text.muted};
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast},
    border-color ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary[50]};
    color: ${({theme:e})=>e.brand.primary};
    border-color: ${({theme:e})=>e.colors.primary[200]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`;j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`;j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  /* Span full width dentro do grid (ex: campo "notes") */
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`;j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`;const n4=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};

  /* Valor vazio */
  &:empty::after,
  &[data-empty]::after {
    content: '—';
    color: ${({theme:e})=>e.text.muted};
  }
`;j(n4)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;const fg={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}};j.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=fg[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=fg[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`;const r4=hp({trade_name:pe().nullable().transform(e=>e||null).max(200,"Nome fantasia deve ter no máximo 200 caracteres."),phone:pe().nullable().transform(e=>e||null).max(20,"Telefone deve ter no máximo 20 caracteres."),benefit_type:pe().required("O tipo de benefício é obrigatório.").oneOf(["food","meal","both"],"Selecione um tipo de benefício válido."),notes:pe().nullable().transform(e=>e||null),partner_id:pe().nullable().transform(e=>e||null),address_street:pe().nullable().transform(e=>e||null).max(255,"Logradouro deve ter no máximo 255 caracteres."),address_number:pe().nullable().transform(e=>e||null).max(10,"Número deve ter no máximo 10 caracteres."),address_complement:pe().nullable().transform(e=>e||null).max(100,"Complemento deve ter no máximo 100 caracteres."),address_neighborhood:pe().nullable().transform(e=>e||null).max(100,"Bairro deve ter no máximo 100 caracteres."),address_city:pe().nullable().transform(e=>e||null).max(100,"Cidade deve ter no máximo 100 caracteres."),address_state:pe().nullable().transform(e=>e||null).max(2,"UF deve ter 2 caracteres."),address_zip:pe().nullable().transform(e=>e||null).test("cep-valido","CEP inválido. Use o formato 00000-000.",e=>e?e.replace(/\D/g,"").length===8:!0),bank_bank_name:pe().nullable().transform(e=>e||null).max(100,"Nome do banco deve ter no máximo 100 caracteres."),bank_agency:pe().max(10,"Agência deve ter no máximo 10 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Agência é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_agency_digit:pe().nullable().transform(e=>e||null).max(2,"Dígito da agência deve ter no máximo 2 caracteres."),bank_account:pe().max(20,"Conta deve ter no máximo 20 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Conta é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_account_digit:pe().nullable().transform(e=>e||null).max(2,"Dígito da conta deve ter no máximo 2 caracteres."),bank_account_type:pe().when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Tipo de conta é obrigatório.").oneOf(["checking","savings"],"Tipo de conta inválido."),otherwise:e=>e.nullable().transform(t=>t||null)})}),o4=[{key:"contrato",fieldName:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB."},{key:"proof_of_address",fieldName:"documentos",type:"proof_of_address",label:"Comprovante de Endereço",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:0},{key:"bank_account_proof",fieldName:"documentos",type:"bank_account_proof",label:"Comprovante Bancário",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:1},{key:"card_machine_proof",fieldName:"documentos",type:"card_machine_proof",label:"Comprovante de Maquininha",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:2}],i4=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],s4=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],a4=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"];let vu=null;const pg=(e="")=>{const t=e.replace(/\D/g,"").slice(0,11);return t.length<=2?`(${t}`:t.length<=6?`(${t.slice(0,2)}) ${t.slice(2)}`:t.length<=10?`(${t.slice(0,2)}) ${t.slice(2,6)}-${t.slice(6)}`:`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7)}`},hg=(e="")=>{const t=e.replace(/\D/g,"").slice(0,8);return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5)}`},l4=(e="")=>e.replace(/\D/g,""),mg=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function c4(){const e=t=>Array.from({length:t}).map((n,r)=>l.jsxs(ze,{children:[l.jsx(zr,{$w:"45%",$h:"11px"}),l.jsx(zr,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},r));return l.jsxs(Bx,{children:[l.jsxs(Vx,{children:[l.jsx(zr,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),l.jsxs(Wx,{children:[l.jsx(zr,{$w:"200px",$h:"28px"}),l.jsx(zr,{$w:"140px",$h:"14px",style:{marginTop:"4px"}})]})]}),l.jsxs(ug,{children:[l.jsx(zr,{$w:"35%",$h:"20px"}),l.jsx(dg,{}),l.jsx(ss,{children:e(6)})]}),l.jsxs(ug,{children:[l.jsx(zr,{$w:"30%",$h:"20px"}),l.jsx(dg,{}),l.jsx(ss,{children:e(4)})]})]})}function u4({slot:e,existingDoc:t,selectedFile:n,onFileSelect:r,onClearFile:o,disabled:i}){const s=M.useRef(null),a=!!n,c=!!t;return l.jsxs(H3,{$hasFile:a,children:[l.jsx(q3,{children:e.label}),a?l.jsxs(sg,{children:[l.jsx(zd,{size:16,style:{color:"#B45A14",flexShrink:0}}),l.jsxs(ag,{children:[l.jsx(lg,{children:n.name}),l.jsxs(cg,{children:[mg(n.size)," · Novo arquivo"]})]}),l.jsx(X3,{type:"button",onClick:()=>o(e.key),disabled:i,title:"Remover seleção",children:l.jsx(dx,{size:13})})]}):c?l.jsxs(sg,{children:[l.jsx(zd,{size:16,style:{color:"#7a6455",flexShrink:0}}),l.jsxs(ag,{children:[l.jsx(lg,{children:t.original_name??"Documento existente"}),l.jsxs(cg,{children:[t.file_size?mg(t.file_size)+" · ":"","Substituir clicando abaixo"]})]})]}):null,l.jsxs(G3,{htmlFor:`doc-input-${e.key}`,children:[l.jsx(Q3,{$hasFile:a,children:l.jsx(fx,{size:22})}),l.jsx(Y3,{children:a?"Trocar arquivo":c?"Substituir documento":"Selecionar arquivo"}),l.jsx(K3,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),l.jsx("input",{ref:s,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:i,onChange:f=>{var d;const u=(d=f.target.files)==null?void 0:d[0];if(u){if(u.size>3*1024*1024){ue.error("Arquivo muito grande. O limite é 3 MB.");return}r(e.key,u),f.target.value=""}}}),l.jsx(Hi,{children:e.hint})]})}function d4(){const{id:e}=qy(),t=Ar(),[n,r]=M.useState(!0),[o,i]=M.useState(!1),[s,a]=M.useState(""),[c,f]=M.useState([]),[u,d]=M.useState(!1),[p,m]=M.useState({}),[h,b]=M.useState({}),[k,g]=M.useState({corporate_name:"",cnpj:"",email:"",state_registration:""}),{register:y,handleSubmit:v,reset:$,setValue:C,watch:_,formState:{errors:F,isDirty:x}}=bc({resolver:Cx(r4),defaultValues:{trade_name:"",phone:"",benefit_type:"food",notes:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",partner_id:"",bank_bank_name:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}}),T=!!_("bank_bank_name"),A=M.useCallback(async()=>{var w,I;r(!0);try{const{data:P}=await ut.get(`/clients/${e}`),L=P.data;a(L.trade_name||L.corporate_name||""),g({corporate_name:L.corporate_name??"",cnpj:L.cnpj??"",email:L.email??"",state_registration:L.state_registration??""});const Q={};(L.documents??[]).forEach(Y=>{Q[Y.document_type]=Y}),m(Q);const V=(w=L.bankAccounts)==null?void 0:w[0];$({trade_name:L.trade_name??"",phone:pg(L.phone??""),benefit_type:L.benefit_type??"food",notes:L.notes??"",address_street:L.address_street??"",address_number:L.address_number??"",address_complement:L.address_complement??"",address_neighborhood:L.address_neighborhood??"",address_city:L.address_city??"",address_state:L.address_state??"",address_zip:hg(L.address_zip??""),partner_id:((I=L.partner)==null?void 0:I.id)??L.partner_id??"",bank_bank_name:(V==null?void 0:V.bank_name)??"",bank_agency:(V==null?void 0:V.agency)??"",bank_agency_digit:(V==null?void 0:V.agency_digit)??"",bank_account:(V==null?void 0:V.account)??"",bank_account_digit:(V==null?void 0:V.account_digit)??"",bank_account_type:(V==null?void 0:V.account_type)??"checking"})}catch(P){ue.error(Yn(P,"Erro ao carregar dados do cliente.")),t(`/clientes/${e}`,{replace:!0})}finally{r(!1)}},[e,t,$]);M.useEffect(()=>{A()},[A]),M.useEffect(()=>{(async()=>{if(vu){f(vu);return}d(!0);try{const{data:I}=await ut.get("/users?role=partner&limit=100"),P=I.data??[];vu=P,f(P)}catch{}finally{d(!1)}})()},[]);const R=(w,I)=>{b(P=>({...P,[w]:I}))},N=w=>{b(I=>{const P={...I};return delete P[w],P})},O=async w=>{i(!0);try{const I=Object.keys(h).length>0,P={trade_name:w.trade_name||void 0,phone:l4(w.phone)||void 0,benefit_type:w.benefit_type,notes:w.notes||void 0,address_street:w.address_street||void 0,address_number:w.address_number||void 0,address_complement:w.address_complement||void 0,address_neighborhood:w.address_neighborhood||void 0,address_city:w.address_city||void 0,address_state:w.address_state||void 0,address_zip:w.address_zip||void 0,partner_id:w.partner_id||null,...T?{bankAccount:{bank_name:w.bank_bank_name,agency:w.bank_agency,agency_digit:w.bank_agency_digit||void 0,account:w.bank_account,account_digit:w.bank_account_digit||void 0,account_type:w.bank_account_type}}:{}};if(Object.keys(P).forEach(L=>P[L]===void 0&&delete P[L]),I){const L=new FormData;L.append("data",JSON.stringify(P)),h.contrato&&L.append("contrato",h.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(Q=>{h[Q]&&L.append("documentos",h[Q])}),await ut.patch(`/clients/${e}`,L,{headers:{"Content-Type":"multipart/form-data"}})}else await ut.patch(`/clients/${e}`,P);ue.success("Cliente atualizado com sucesso!",{toastId:"client-updated"}),t(`/clientes/${e}`,{replace:!0})}catch(I){ue.error(Yn(I,"Erro ao salvar alterações."))}finally{i(!1)}};if(n)return l.jsx(c4,{});const U=x||Object.keys(h).length>0,E=w=>{var I;return(I=F[w])==null?void 0:I.message};return l.jsxs(l.Fragment,{children:[l.jsxs(Bx,{children:[l.jsxs(Vx,{children:[l.jsxs(L3,{type:"button",onClick:()=>t(`/clientes/${e}`),children:[l.jsx(Zf,{size:15})," Voltar"]}),l.jsxs(Wx,{children:[l.jsx(D3,{children:"Editar Cliente"}),l.jsx(U3,{children:s})]})]}),l.jsxs("form",{id:"edit-client-form",onSubmit:v(O),noValidate:!0,children:[l.jsxs(Wi,{style:{marginBottom:"24px"},children:[l.jsxs(ga,{children:[l.jsx(ya,{children:l.jsx(ep,{size:18})}),l.jsx(xa,{children:"Dados da Empresa"})]}),l.jsxs(ss,{children:[l.jsxs(ze,{children:[l.jsxs(Ve,{children:[l.jsx(va,{children:l.jsx(pa,{size:11})}),"Razão Social"]}),l.jsx($a,{children:k.corporate_name||"—"}),l.jsx(wa,{children:"Campo único, não pode ser editado."})]}),l.jsxs(ze,{children:[l.jsxs(Ve,{children:[l.jsx(va,{children:l.jsx(pa,{size:11})}),"CNPJ"]}),l.jsx($a,{children:k.cnpj||"—"}),l.jsx(wa,{children:"Campo único, não pode ser editado."})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"trade_name",children:"Nome Fantasia"}),l.jsx(Ht,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",$hasError:!!E("trade_name"),disabled:o,...y("trade_name")}),E("trade_name")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("trade_name")]})]}),l.jsxs(ze,{children:[l.jsxs(Ve,{children:[l.jsx(va,{children:l.jsx(pa,{size:11})}),"Inscrição Estadual"]}),l.jsx($a,{children:k.state_registration||"—"}),l.jsx(wa,{children:"Campo único, não pode ser editado."})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"phone",children:"Telefone"}),l.jsx(Ht,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",$hasError:!!E("phone"),disabled:o,...y("phone",{onChange:w=>C("phone",pg(w.target.value))})}),E("phone")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("phone")]})]}),l.jsxs(ze,{children:[l.jsxs(Ve,{children:[l.jsx(va,{children:l.jsx(pa,{size:11})}),"E-mail"]}),l.jsx($a,{children:k.email||"—"}),l.jsx(wa,{children:"Campo único, não pode ser editado."})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),l.jsx(ba,{id:"benefit_type",$hasError:!!E("benefit_type"),disabled:o,...y("benefit_type"),children:i4.map(w=>l.jsx("option",{value:w.value,children:w.label},w.value))}),E("benefit_type")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("benefit_type")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"partner_id",children:"Parceiro Vinculado"}),l.jsxs(ba,{id:"partner_id",disabled:o||u,...y("partner_id"),children:[l.jsx("option",{value:"",children:u?"Carregando parceiros…":"Sem parceiro vinculado"}),c.map(w=>l.jsx("option",{value:w.id,children:w.name},w.id))]}),l.jsx(Hi,{children:u?"Buscando parceiros…":`${c.length} parceiro${c.length!==1?"s":""} disponível${c.length!==1?"is":""}`})]}),l.jsx(ig,{children:l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"notes",children:"Observações"}),l.jsx(M3,{id:"notes",placeholder:"Observações internas…",disabled:o,...y("notes")}),l.jsx(Hi,{children:"Visível apenas para a equipe interna."})]})})]})]}),l.jsxs(Wi,{style:{marginBottom:"24px"},children:[l.jsxs(ga,{children:[l.jsx(ya,{children:l.jsx(np,{size:18})}),l.jsx(xa,{children:"Endereço"})]}),l.jsxs(ss,{children:[l.jsx(ig,{children:l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_street",children:"Logradouro"}),l.jsx(Ht,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",$hasError:!!E("address_street"),disabled:o,...y("address_street")}),E("address_street")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("address_street")]})]})}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_number",children:"Número"}),l.jsx(Ht,{id:"address_number",type:"text",placeholder:"Nº",$hasError:!!E("address_number"),disabled:o,...y("address_number")}),E("address_number")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("address_number")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_complement",children:"Complemento"}),l.jsx(Ht,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",$hasError:!!E("address_complement"),disabled:o,...y("address_complement")}),E("address_complement")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("address_complement")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_neighborhood",children:"Bairro"}),l.jsx(Ht,{id:"address_neighborhood",type:"text",placeholder:"Bairro",$hasError:!!E("address_neighborhood"),disabled:o,...y("address_neighborhood")}),E("address_neighborhood")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("address_neighborhood")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_city",children:"Cidade"}),l.jsx(Ht,{id:"address_city",type:"text",placeholder:"Cidade",$hasError:!!E("address_city"),disabled:o,...y("address_city")}),E("address_city")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("address_city")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_state",children:"UF"}),l.jsxs(ba,{id:"address_state",$hasError:!!E("address_state"),disabled:o,...y("address_state"),children:[l.jsx("option",{value:"",children:"Selecione"}),a4.map(w=>l.jsx("option",{value:w,children:w},w))]}),E("address_state")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("address_state")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_zip",children:"CEP"}),l.jsx(Ht,{id:"address_zip",type:"text",placeholder:"00000-000",$hasError:!!E("address_zip"),disabled:o,...y("address_zip",{onChange:w=>C("address_zip",hg(w.target.value))})}),E("address_zip")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("address_zip")]})]})]})]}),l.jsxs(Wi,{style:{marginBottom:"24px"},children:[l.jsxs(ga,{children:[l.jsx(ya,{children:l.jsx(tp,{size:18})}),l.jsx(xa,{children:"Conta Bancária"})]}),l.jsxs(B3,{children:[l.jsx(V3,{children:"Dados Bancários Principais"}),T&&l.jsx(Hi,{style:{marginBottom:"12px",display:"block"},children:"Agência e conta são obrigatórios quando o banco é informado."}),l.jsxs(ss,{children:[l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),l.jsx(Ht,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",$hasError:!!E("bank_bank_name"),disabled:o,...y("bank_bank_name")}),E("bank_bank_name")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("bank_bank_name")]})]}),l.jsxs(ze,{children:[l.jsxs(Ve,{htmlFor:"bank_agency",children:["Agência ",T&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(Ht,{id:"bank_agency",type:"text",placeholder:"0000",$hasError:!!E("bank_agency"),disabled:o,...y("bank_agency")}),E("bank_agency")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("bank_agency")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),l.jsx(Ht,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,$hasError:!!E("bank_agency_digit"),disabled:o,...y("bank_agency_digit")}),E("bank_agency_digit")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("bank_agency_digit")]})]}),l.jsxs(ze,{children:[l.jsxs(Ve,{htmlFor:"bank_account",children:["Conta ",T&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(Ht,{id:"bank_account",type:"text",placeholder:"000000",$hasError:!!E("bank_account"),disabled:o,...y("bank_account")}),E("bank_account")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("bank_account")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"bank_account_digit",children:"Dígito Conta"}),l.jsx(Ht,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,$hasError:!!E("bank_account_digit"),disabled:o,...y("bank_account_digit")}),E("bank_account_digit")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("bank_account_digit")]})]}),l.jsxs(ze,{children:[l.jsxs(Ve,{htmlFor:"bank_account_type",children:["Tipo de Conta ",T&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(ba,{id:"bank_account_type",$hasError:!!E("bank_account_type"),disabled:o,...y("bank_account_type"),children:s4.map(w=>l.jsx("option",{value:w.value,children:w.label},w.value))}),E("bank_account_type")&&l.jsxs($t,{children:[l.jsx(be,{size:11}),E("bank_account_type")]})]})]})]})]}),l.jsxs(Wi,{style:{marginBottom:"24px"},children:[l.jsxs(ga,{children:[l.jsx(ya,{children:l.jsx(Al,{size:18})}),l.jsx(xa,{children:"Documentos"})]}),l.jsxs(Hi,{style:{marginBottom:"16px",display:"block"},children:["Selecione um novo arquivo para ",l.jsx("strong",{children:"substituir"})," o documento existente. O arquivo antigo é removido automaticamente do Cloudinary."]}),l.jsx(W3,{children:o4.map(w=>l.jsx(u4,{slot:w,existingDoc:p[w.type],selectedFile:h[w.key],onFileSelect:R,onClearFile:N,disabled:o},w.key))})]})]})]}),l.jsxs(J3,{children:[l.jsxs(Z3,{type:"button",disabled:o,onClick:()=>t(`/clientes/${e}`),children:[l.jsx(xc,{size:15})," Cancelar"]}),l.jsx(e4,{type:"submit",form:"edit-client-form",disabled:o||!U,$isSubmitting:o,title:U?void 0:"Nenhuma alteração detectada",children:o?l.jsxs(l.Fragment,{children:[l.jsx(t4,{}),"Salvando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(ux,{size:15}),"Salvar Alterações"]})})]})]})}function f4(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(e)}function Hx(e,t){return new Promise(function(n,r){let o;return p4(e).then(function(i){try{return o=i,n(new Blob([t.slice(0,2),o,t.slice(2)],{type:"image/jpeg"}))}catch(s){return r(s)}},r)})}const p4=e=>new Promise((t,n)=>{const r=new FileReader;r.addEventListener("load",({target:{result:o}})=>{const i=new DataView(o);let s=0;if(i.getUint16(s)!==65496)return n("not a valid JPEG");for(s+=2;;){const a=i.getUint16(s);if(a===65498)break;const c=i.getUint16(s+2);if(a===65505&&i.getUint32(s+4)===1165519206){const f=s+10;let u;switch(i.getUint16(f)){case 18761:u=!0;break;case 19789:u=!1;break;default:return n("TIFF header contains invalid endian")}if(i.getUint16(f+2,u)!==42)return n("TIFF header contains invalid version");const d=i.getUint32(f+4,u),p=f+d+2+12*i.getUint16(f+d,u);for(let m=f+d+2;m<p;m+=12)if(i.getUint16(m,u)==274){if(i.getUint16(m+2,u)!==3)return n("Orientation data type is invalid");if(i.getUint32(m+4,u)!==1)return n("Orientation data count is invalid");i.setUint16(m+8,1,u);break}return t(o.slice(s,s+2+c))}s+=2+c}return t(new Blob)}),r.readAsArrayBuffer(e)});var Nl={},h4={get exports(){return Nl},set exports(e){Nl=e}};(function(e){var t,n,r={};h4.exports=r,r.parse=function(o,i){for(var s=r.bin.readUshort,a=r.bin.readUint,c=0,f={},u=new Uint8Array(o),d=u.length-4;a(u,d)!=101010256;)d--;c=d,c+=4;var p=s(u,c+=4);s(u,c+=2);var m=a(u,c+=2),h=a(u,c+=4);c+=4,c=h;for(var b=0;b<p;b++){a(u,c),c+=4,c+=4,c+=4,a(u,c+=4),m=a(u,c+=4);var k=a(u,c+=4),g=s(u,c+=4),y=s(u,c+2),v=s(u,c+4);c+=6;var $=a(u,c+=8);c+=4,c+=g+y+v,r._readLocal(u,$,f,m,k,i)}return f},r._readLocal=function(o,i,s,a,c,f){var u=r.bin.readUshort,d=r.bin.readUint;d(o,i),u(o,i+=4),u(o,i+=2);var p=u(o,i+=2);d(o,i+=2),d(o,i+=4),i+=4;var m=u(o,i+=8),h=u(o,i+=2);i+=2;var b=r.bin.readUTF8(o,i,m);if(i+=m,i+=h,f)s[b]={size:c,csize:a};else{var k=new Uint8Array(o.buffer,i);if(p==0)s[b]=new Uint8Array(k.buffer.slice(i,i+a));else{if(p!=8)throw"unknown compression method: "+p;var g=new Uint8Array(c);r.inflateRaw(k,g),s[b]=g}}},r.inflateRaw=function(o,i){return r.F.inflate(o,i)},r.inflate=function(o,i){return o[0],o[1],r.inflateRaw(new Uint8Array(o.buffer,o.byteOffset+2,o.length-6),i)},r.deflate=function(o,i){i==null&&(i={level:6});var s=0,a=new Uint8Array(50+Math.floor(1.1*o.length));a[s]=120,a[s+1]=156,s+=2,s=r.F.deflateRaw(o,a,s,i.level);var c=r.adler(o,0,o.length);return a[s+0]=c>>>24&255,a[s+1]=c>>>16&255,a[s+2]=c>>>8&255,a[s+3]=c>>>0&255,new Uint8Array(a.buffer,0,s+4)},r.deflateRaw=function(o,i){i==null&&(i={level:6});var s=new Uint8Array(50+Math.floor(1.1*o.length)),a=r.F.deflateRaw(o,s,a,i.level);return new Uint8Array(s.buffer,0,a)},r.encode=function(o,i){i==null&&(i=!1);var s=0,a=r.bin.writeUint,c=r.bin.writeUshort,f={};for(var u in o){var d=!r._noNeed(u)&&!i,p=o[u],m=r.crc.crc(p,0,p.length);f[u]={cpr:d,usize:p.length,crc:m,file:d?r.deflateRaw(p):p}}for(var u in f)s+=f[u].file.length+30+46+2*r.bin.sizeUTF8(u);s+=22;var h=new Uint8Array(s),b=0,k=[];for(var u in f){var g=f[u];k.push(b),b=r._writeHeader(h,b,u,g,0)}var y=0,v=b;for(var u in f)g=f[u],k.push(b),b=r._writeHeader(h,b,u,g,1,k[y++]);var $=b-v;return a(h,b,101010256),b+=4,c(h,b+=4,y),c(h,b+=2,y),a(h,b+=2,$),a(h,b+=4,v),b+=4,b+=2,h.buffer},r._noNeed=function(o){var i=o.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(i)!=-1},r._writeHeader=function(o,i,s,a,c,f){var u=r.bin.writeUint,d=r.bin.writeUshort,p=a.file;return u(o,i,c==0?67324752:33639248),i+=4,c==1&&(i+=2),d(o,i,20),d(o,i+=2,0),d(o,i+=2,a.cpr?8:0),u(o,i+=2,0),u(o,i+=4,a.crc),u(o,i+=4,p.length),u(o,i+=4,a.usize),d(o,i+=4,r.bin.sizeUTF8(s)),d(o,i+=2,0),i+=2,c==1&&(i+=2,i+=2,u(o,i+=6,f),i+=4),i+=r.bin.writeUTF8(o,i,s),c==0&&(o.set(p,i),i+=p.length),i},r.crc={table:function(){for(var o=new Uint32Array(256),i=0;i<256;i++){for(var s=i,a=0;a<8;a++)1&s?s=3988292384^s>>>1:s>>>=1;o[i]=s}return o}(),update:function(o,i,s,a){for(var c=0;c<a;c++)o=r.crc.table[255&(o^i[s+c])]^o>>>8;return o},crc:function(o,i,s){return 4294967295^r.crc.update(4294967295,o,i,s)}},r.adler=function(o,i,s){for(var a=1,c=0,f=i,u=i+s;f<u;){for(var d=Math.min(f+5552,u);f<d;)c+=a+=o[f++];a%=65521,c%=65521}return c<<16|a},r.bin={readUshort:function(o,i){return o[i]|o[i+1]<<8},writeUshort:function(o,i,s){o[i]=255&s,o[i+1]=s>>8&255},readUint:function(o,i){return 16777216*o[i+3]+(o[i+2]<<16|o[i+1]<<8|o[i])},writeUint:function(o,i,s){o[i]=255&s,o[i+1]=s>>8&255,o[i+2]=s>>16&255,o[i+3]=s>>24&255},readASCII:function(o,i,s){for(var a="",c=0;c<s;c++)a+=String.fromCharCode(o[i+c]);return a},writeASCII:function(o,i,s){for(var a=0;a<s.length;a++)o[i+a]=s.charCodeAt(a)},pad:function(o){return o.length<2?"0"+o:o},readUTF8:function(o,i,s){for(var a,c="",f=0;f<s;f++)c+="%"+r.bin.pad(o[i+f].toString(16));try{a=decodeURIComponent(c)}catch{return r.bin.readASCII(o,i,s)}return a},writeUTF8:function(o,i,s){for(var a=s.length,c=0,f=0;f<a;f++){var u=s.charCodeAt(f);if(!(4294967168&u))o[i+c]=u,c++;else if(!(4294965248&u))o[i+c]=192|u>>6,o[i+c+1]=128|u>>0&63,c+=2;else if(!(4294901760&u))o[i+c]=224|u>>12,o[i+c+1]=128|u>>6&63,o[i+c+2]=128|u>>0&63,c+=3;else{if(4292870144&u)throw"e";o[i+c]=240|u>>18,o[i+c+1]=128|u>>12&63,o[i+c+2]=128|u>>6&63,o[i+c+3]=128|u>>0&63,c+=4}}return c},sizeUTF8:function(o){for(var i=o.length,s=0,a=0;a<i;a++){var c=o.charCodeAt(a);if(!(4294967168&c))s++;else if(!(4294965248&c))s+=2;else if(!(4294901760&c))s+=3;else{if(4292870144&c)throw"e";s+=4}}return s}},r.F={},r.F.deflateRaw=function(o,i,s,a){var c=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][a],f=r.F.U,u=r.F._goodIndex;r.F._hash;var d=r.F._putsE,p=0,m=s<<3,h=0,b=o.length;if(a==0){for(;p<b;)d(i,m,p+(A=Math.min(65535,b-p))==b?1:0),m=r.F._copyExact(o,p,A,i,m+8),p+=A;return m>>>3}var k=f.lits,g=f.strt,y=f.prev,v=0,$=0,C=0,_=0,F=0,x=0;for(b>2&&(g[x=r.F._hash(o,0)]=0),p=0;p<b;p++){if(F=x,p+1<b-2){x=r.F._hash(o,p+1);var S=p+1&32767;y[S]=g[x],g[x]=S}if(h<=p){(v>14e3||$>26697)&&b-p>100&&(h<p&&(k[v]=p-h,v+=2,h=p),m=r.F._writeBlock(p==b-1||h==b?1:0,k,v,_,o,C,p-C,i,m),v=$=_=0,C=p);var T=0;p<b-2&&(T=r.F._bestMatch(o,p,y,F,Math.min(c[2],b-p),c[3]));var A=T>>>16,R=65535&T;if(T!=0){R=65535&T;var N=u(A=T>>>16,f.of0);f.lhst[257+N]++;var O=u(R,f.df0);f.dhst[O]++,_+=f.exb[N]+f.dxb[O],k[v]=A<<23|p-h,k[v+1]=R<<16|N<<8|O,v+=2,h=p+A}else f.lhst[o[p]]++;$++}}for(C==p&&o.length!=0||(h<p&&(k[v]=p-h,v+=2,h=p),m=r.F._writeBlock(1,k,v,_,o,C,p-C,i,m),v=0,$=0,v=$=_=0,C=p);7&m;)m++;return m>>>3},r.F._bestMatch=function(o,i,s,a,c,f){var u=32767&i,d=s[u],p=u-d+32768&32767;if(d==u||a!=r.F._hash(o,i-p))return 0;for(var m=0,h=0,b=Math.min(32767,i);p<=b&&--f!=0&&d!=u;){if(m==0||o[i+m]==o[i+m-p]){var k=r.F._howLong(o,i,p);if(k>m){if(h=p,(m=k)>=c)break;p+2<k&&(k=p+2);for(var g=0,y=0;y<k-2;y++){var v=i-p+y+32768&32767,$=v-s[v]+32768&32767;$>g&&(g=$,d=v)}}}p+=(u=d)-(d=s[u])+32768&32767}return m<<16|h},r.F._howLong=function(o,i,s){if(o[i]!=o[i-s]||o[i+1]!=o[i+1-s]||o[i+2]!=o[i+2-s])return 0;var a=i,c=Math.min(o.length,i+258);for(i+=3;i<c&&o[i]==o[i-s];)i++;return i-a},r.F._hash=function(o,i){return(o[i]<<8|o[i+1])+(o[i+2]<<4)&65535},r.saved=0,r.F._writeBlock=function(o,i,s,a,c,f,u,d,p){var m,h,b,k,g,y,v,$,C,_=r.F.U,F=r.F._putsF,x=r.F._putsE;_.lhst[256]++,h=(m=r.F.getTrees())[0],b=m[1],k=m[2],g=m[3],y=m[4],v=m[5],$=m[6],C=m[7];var S=32+(p+3&7?8-(p+3&7):0)+(u<<3),T=a+r.F.contSize(_.fltree,_.lhst)+r.F.contSize(_.fdtree,_.dhst),A=a+r.F.contSize(_.ltree,_.lhst)+r.F.contSize(_.dtree,_.dhst);A+=14+3*v+r.F.contSize(_.itree,_.ihst)+(2*_.ihst[16]+3*_.ihst[17]+7*_.ihst[18]);for(var R=0;R<286;R++)_.lhst[R]=0;for(R=0;R<30;R++)_.dhst[R]=0;for(R=0;R<19;R++)_.ihst[R]=0;var N=S<T&&S<A?0:T<A?1:2;if(F(d,p,o),F(d,p+1,N),p+=3,N==0){for(;7&p;)p++;p=r.F._copyExact(c,f,u,d,p)}else{var O,U;if(N==1&&(O=_.fltree,U=_.fdtree),N==2){r.F.makeCodes(_.ltree,h),r.F.revCodes(_.ltree,h),r.F.makeCodes(_.dtree,b),r.F.revCodes(_.dtree,b),r.F.makeCodes(_.itree,k),r.F.revCodes(_.itree,k),O=_.ltree,U=_.dtree,x(d,p,g-257),x(d,p+=5,y-1),x(d,p+=5,v-4),p+=4;for(var E=0;E<v;E++)x(d,p+3*E,_.itree[1+(_.ordr[E]<<1)]);p+=3*v,p=r.F._codeTiny($,_.itree,d,p),p=r.F._codeTiny(C,_.itree,d,p)}for(var w=f,I=0;I<s;I+=2){for(var P=i[I],L=P>>>23,Q=w+(8388607&P);w<Q;)p=r.F._writeLit(c[w++],O,d,p);if(L!=0){var V=i[I+1],Y=V>>16,G=V>>8&255,D=255&V;x(d,p=r.F._writeLit(257+G,O,d,p),L-_.of0[G]),p+=_.exb[G],F(d,p=r.F._writeLit(D,U,d,p),Y-_.df0[D]),p+=_.dxb[D],w+=L}}p=r.F._writeLit(256,O,d,p)}return p},r.F._copyExact=function(o,i,s,a,c){var f=c>>>3;return a[f]=s,a[f+1]=s>>>8,a[f+2]=255-a[f],a[f+3]=255-a[f+1],f+=4,a.set(new Uint8Array(o.buffer,i,s),f),c+(s+4<<3)},r.F.getTrees=function(){for(var o=r.F.U,i=r.F._hufTree(o.lhst,o.ltree,15),s=r.F._hufTree(o.dhst,o.dtree,15),a=[],c=r.F._lenCodes(o.ltree,a),f=[],u=r.F._lenCodes(o.dtree,f),d=0;d<a.length;d+=2)o.ihst[a[d]]++;for(d=0;d<f.length;d+=2)o.ihst[f[d]]++;for(var p=r.F._hufTree(o.ihst,o.itree,7),m=19;m>4&&o.itree[1+(o.ordr[m-1]<<1)]==0;)m--;return[i,s,p,c,u,m,a,f]},r.F.getSecond=function(o){for(var i=[],s=0;s<o.length;s+=2)i.push(o[s+1]);return i},r.F.nonZero=function(o){for(var i="",s=0;s<o.length;s+=2)o[s+1]!=0&&(i+=(s>>1)+",");return i},r.F.contSize=function(o,i){for(var s=0,a=0;a<i.length;a++)s+=i[a]*o[1+(a<<1)];return s},r.F._codeTiny=function(o,i,s,a){for(var c=0;c<o.length;c+=2){var f=o[c],u=o[c+1];a=r.F._writeLit(f,i,s,a);var d=f==16?2:f==17?3:7;f>15&&(r.F._putsE(s,a,u,d),a+=d)}return a},r.F._lenCodes=function(o,i){for(var s=o.length;s!=2&&o[s-1]==0;)s-=2;for(var a=0;a<s;a+=2){var c=o[a+1],f=a+3<s?o[a+3]:-1,u=a+5<s?o[a+5]:-1,d=a==0?-1:o[a-1];if(c==0&&f==c&&u==c){for(var p=a+5;p+2<s&&o[p+2]==c;)p+=2;(m=Math.min(p+1-a>>>1,138))<11?i.push(17,m-3):i.push(18,m-11),a+=2*m-2}else if(c==d&&f==c&&u==c){for(p=a+5;p+2<s&&o[p+2]==c;)p+=2;var m=Math.min(p+1-a>>>1,6);i.push(16,m-3),a+=2*m-2}else i.push(c,0)}return s>>>1},r.F._hufTree=function(o,i,s){var a=[],c=o.length,f=i.length,u=0;for(u=0;u<f;u+=2)i[u]=0,i[u+1]=0;for(u=0;u<c;u++)o[u]!=0&&a.push({lit:u,f:o[u]});var d=a.length,p=a.slice(0);if(d==0)return 0;if(d==1){var m=a[0].lit;return p=m==0?1:0,i[1+(m<<1)]=1,i[1+(p<<1)]=1,1}a.sort(function($,C){return $.f-C.f});var h=a[0],b=a[1],k=0,g=1,y=2;for(a[0]={lit:-1,f:h.f+b.f,l:h,r:b,d:0};g!=d-1;)h=k!=g&&(y==d||a[k].f<a[y].f)?a[k++]:a[y++],b=k!=g&&(y==d||a[k].f<a[y].f)?a[k++]:a[y++],a[g++]={lit:-1,f:h.f+b.f,l:h,r:b};var v=r.F.setDepth(a[g-1],0);for(v>s&&(r.F.restrictDepth(p,s,v),v=s),u=0;u<d;u++)i[1+(p[u].lit<<1)]=p[u].d;return v},r.F.setDepth=function(o,i){return o.lit!=-1?(o.d=i,i):Math.max(r.F.setDepth(o.l,i+1),r.F.setDepth(o.r,i+1))},r.F.restrictDepth=function(o,i,s){var a=0,c=1<<s-i,f=0;for(o.sort(function(d,p){return p.d==d.d?d.f-p.f:p.d-d.d}),a=0;a<o.length&&o[a].d>i;a++){var u=o[a].d;o[a].d=i,f+=c-(1<<s-u)}for(f>>>=s-i;f>0;)(u=o[a].d)<i?(o[a].d++,f-=1<<i-u-1):a++;for(;a>=0;a--)o[a].d==i&&f<0&&(o[a].d--,f++);f!=0&&console.log("debt left")},r.F._goodIndex=function(o,i){var s=0;return i[16|s]<=o&&(s|=16),i[8|s]<=o&&(s|=8),i[4|s]<=o&&(s|=4),i[2|s]<=o&&(s|=2),i[1|s]<=o&&(s|=1),s},r.F._writeLit=function(o,i,s,a){return r.F._putsF(s,a,i[o<<1]),a+i[1+(o<<1)]},r.F.inflate=function(o,i){var s=Uint8Array;if(o[0]==3&&o[1]==0)return i||new s(0);var a=r.F,c=a._bitsF,f=a._bitsE,u=a._decodeTiny,d=a.makeCodes,p=a.codes2map,m=a._get17,h=a.U,b=i==null;b&&(i=new s(o.length>>>2<<3));for(var k,g,y=0,v=0,$=0,C=0,_=0,F=0,x=0,S=0,T=0;y==0;)if(y=c(o,T,1),v=c(o,T+1,2),T+=3,v!=0){if(b&&(i=r.F._check(i,S+(1<<17))),v==1&&(k=h.flmap,g=h.fdmap,F=511,x=31),v==2){$=f(o,T,5)+257,C=f(o,T+5,5)+1,_=f(o,T+10,4)+4,T+=14;for(var A=0;A<38;A+=2)h.itree[A]=0,h.itree[A+1]=0;var R=1;for(A=0;A<_;A++){var N=f(o,T+3*A,3);h.itree[1+(h.ordr[A]<<1)]=N,N>R&&(R=N)}T+=3*_,d(h.itree,R),p(h.itree,R,h.imap),k=h.lmap,g=h.dmap,T=u(h.imap,(1<<R)-1,$+C,o,T,h.ttree);var O=a._copyOut(h.ttree,0,$,h.ltree);F=(1<<O)-1;var U=a._copyOut(h.ttree,$,C,h.dtree);x=(1<<U)-1,d(h.ltree,O),p(h.ltree,O,k),d(h.dtree,U),p(h.dtree,U,g)}for(;;){var E=k[m(o,T)&F];T+=15&E;var w=E>>>4;if(!(w>>>8))i[S++]=w;else{if(w==256)break;var I=S+w-254;if(w>264){var P=h.ldef[w-257];I=S+(P>>>3)+f(o,T,7&P),T+=7&P}var L=g[m(o,T)&x];T+=15&L;var Q=L>>>4,V=h.ddef[Q],Y=(V>>>4)+c(o,T,15&V);for(T+=15&V,b&&(i=r.F._check(i,S+(1<<17)));S<I;)i[S]=i[S++-Y],i[S]=i[S++-Y],i[S]=i[S++-Y],i[S]=i[S++-Y];S=I}}}else{7&T&&(T+=8-(7&T));var G=4+(T>>>3),D=o[G-4]|o[G-3]<<8;b&&(i=r.F._check(i,S+D)),i.set(new s(o.buffer,o.byteOffset+G,D),S),T=G+D<<3,S+=D}return i.length==S?i:i.slice(0,S)},r.F._check=function(o,i){var s=o.length;if(i<=s)return o;var a=new Uint8Array(Math.max(s<<1,i));return a.set(o,0),a},r.F._decodeTiny=function(o,i,s,a,c,f){for(var u=r.F._bitsE,d=r.F._get17,p=0;p<s;){var m=o[d(a,c)&i];c+=15&m;var h=m>>>4;if(h<=15)f[p]=h,p++;else{var b=0,k=0;h==16?(k=3+u(a,c,2),c+=2,b=f[p-1]):h==17?(k=3+u(a,c,3),c+=3):h==18&&(k=11+u(a,c,7),c+=7);for(var g=p+k;p<g;)f[p]=b,p++}}return c},r.F._copyOut=function(o,i,s,a){for(var c=0,f=0,u=a.length>>>1;f<s;){var d=o[f+i];a[f<<1]=0,a[1+(f<<1)]=d,d>c&&(c=d),f++}for(;f<u;)a[f<<1]=0,a[1+(f<<1)]=0,f++;return c},r.F.makeCodes=function(o,i){for(var s,a,c,f,u=r.F.U,d=o.length,p=u.bl_count,m=0;m<=i;m++)p[m]=0;for(m=1;m<d;m+=2)p[o[m]]++;var h=u.next_code;for(s=0,p[0]=0,a=1;a<=i;a++)s=s+p[a-1]<<1,h[a]=s;for(c=0;c<d;c+=2)(f=o[c+1])!=0&&(o[c]=h[f],h[f]++)},r.F.codes2map=function(o,i,s){for(var a=o.length,c=r.F.U.rev15,f=0;f<a;f+=2)if(o[f+1]!=0)for(var u=f>>1,d=o[f+1],p=u<<4|d,m=i-d,h=o[f]<<m,b=h+(1<<m);h!=b;)s[c[h]>>>15-i]=p,h++},r.F.revCodes=function(o,i){for(var s=r.F.U.rev15,a=15-i,c=0;c<o.length;c+=2){var f=o[c]<<i-o[c+1];o[c]=s[f]>>>a}},r.F._putsE=function(o,i,s){s<<=7&i;var a=i>>>3;o[a]|=s,o[a+1]|=s>>>8},r.F._putsF=function(o,i,s){s<<=7&i;var a=i>>>3;o[a]|=s,o[a+1]|=s>>>8,o[a+2]|=s>>>16},r.F._bitsE=function(o,i,s){return(o[i>>>3]|o[1+(i>>>3)]<<8)>>>(7&i)&(1<<s)-1},r.F._bitsF=function(o,i,s){return(o[i>>>3]|o[1+(i>>>3)]<<8|o[2+(i>>>3)]<<16)>>>(7&i)&(1<<s)-1},r.F._get17=function(o,i){return(o[i>>>3]|o[1+(i>>>3)]<<8|o[2+(i>>>3)]<<16)>>>(7&i)},r.F._get25=function(o,i){return(o[i>>>3]|o[1+(i>>>3)]<<8|o[2+(i>>>3)]<<16|o[3+(i>>>3)]<<24)>>>(7&i)},r.F.U=(t=Uint16Array,n=Uint32Array,{next_code:new t(16),bl_count:new t(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new t(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new n(32),flmap:new t(512),fltree:[],fdmap:new t(32),fdtree:[],lmap:new t(32768),ltree:[],ttree:[],dmap:new t(32768),dtree:[],imap:new t(512),itree:[],rev15:new t(32768),lhst:new n(286),dhst:new n(30),ihst:new n(19),lits:new n(15e3),strt:new t(65536),prev:new t(32768)}),function(){for(var o=r.F.U,i=0;i<32768;i++){var s=i;s=(4278255360&(s=(4042322160&(s=(3435973836&(s=(2863311530&s)>>>1|(1431655765&s)<<1))>>>2|(858993459&s)<<2))>>>4|(252645135&s)<<4))>>>8|(16711935&s)<<8,o.rev15[i]=(s>>>16|s<<16)>>>17}function a(c,f,u){for(;f--!=0;)c.push(0,u)}for(i=0;i<32;i++)o.ldef[i]=o.of0[i]<<3|o.exb[i],o.ddef[i]=o.df0[i]<<4|o.dxb[i];a(o.fltree,144,8),a(o.fltree,112,9),a(o.fltree,24,7),a(o.fltree,8,8),r.F.makeCodes(o.fltree,9),r.F.codes2map(o.fltree,9,o.flmap),r.F.revCodes(o.fltree,9),a(o.fdtree,32,5),r.F.makeCodes(o.fdtree,5),r.F.codes2map(o.fdtree,5,o.fdmap),r.F.revCodes(o.fdtree,5),a(o.itree,19,0),a(o.ltree,286,0),a(o.dtree,30,0),a(o.ttree,320,0)}()})();var m4=f4({__proto__:null,default:Nl},[Nl]);const hn=function(){var e={nextZero(u,d){for(;u[d]!=0;)d++;return d},readUshort:(u,d)=>u[d]<<8|u[d+1],writeUshort(u,d,p){u[d]=p>>8&255,u[d+1]=255&p},readUint:(u,d)=>16777216*u[d]+(u[d+1]<<16|u[d+2]<<8|u[d+3]),writeUint(u,d,p){u[d]=p>>24&255,u[d+1]=p>>16&255,u[d+2]=p>>8&255,u[d+3]=255&p},readASCII(u,d,p){let m="";for(let h=0;h<p;h++)m+=String.fromCharCode(u[d+h]);return m},writeASCII(u,d,p){for(let m=0;m<p.length;m++)u[d+m]=p.charCodeAt(m)},readBytes(u,d,p){const m=[];for(let h=0;h<p;h++)m.push(u[d+h]);return m},pad:u=>u.length<2?`0${u}`:u,readUTF8(u,d,p){let m,h="";for(let b=0;b<p;b++)h+=`%${e.pad(u[d+b].toString(16))}`;try{m=decodeURIComponent(h)}catch{return e.readASCII(u,d,p)}return m}};function t(u,d,p,m){const h=d*p,b=i(m),k=Math.ceil(d*b/8),g=new Uint8Array(4*h),y=new Uint32Array(g.buffer),{ctype:v}=m,{depth:$}=m,C=e.readUshort;if(v==6){const P=h<<2;if($==8)for(var _=0;_<P;_+=4)g[_]=u[_],g[_+1]=u[_+1],g[_+2]=u[_+2],g[_+3]=u[_+3];if($==16)for(_=0;_<P;_++)g[_]=u[_<<1]}else if(v==2){const P=m.tabs.tRNS;if(P==null){if($==8)for(_=0;_<h;_++){var F=3*_;y[_]=255<<24|u[F+2]<<16|u[F+1]<<8|u[F]}if($==16)for(_=0;_<h;_++)F=6*_,y[_]=255<<24|u[F+4]<<16|u[F+2]<<8|u[F]}else{var x=P[0];const L=P[1],Q=P[2];if($==8)for(_=0;_<h;_++){var S=_<<2;F=3*_,y[_]=255<<24|u[F+2]<<16|u[F+1]<<8|u[F],u[F]==x&&u[F+1]==L&&u[F+2]==Q&&(g[S+3]=0)}if($==16)for(_=0;_<h;_++)S=_<<2,F=6*_,y[_]=255<<24|u[F+4]<<16|u[F+2]<<8|u[F],C(u,F)==x&&C(u,F+2)==L&&C(u,F+4)==Q&&(g[S+3]=0)}}else if(v==3){const P=m.tabs.PLTE,L=m.tabs.tRNS,Q=L?L.length:0;if($==1)for(var T=0;T<p;T++){var A=T*k,R=T*d;for(_=0;_<d;_++){S=R+_<<2;var N=3*(O=u[A+(_>>3)]>>7-((7&_)<<0)&1);g[S]=P[N],g[S+1]=P[N+1],g[S+2]=P[N+2],g[S+3]=O<Q?L[O]:255}}if($==2)for(T=0;T<p;T++)for(A=T*k,R=T*d,_=0;_<d;_++)S=R+_<<2,N=3*(O=u[A+(_>>2)]>>6-((3&_)<<1)&3),g[S]=P[N],g[S+1]=P[N+1],g[S+2]=P[N+2],g[S+3]=O<Q?L[O]:255;if($==4)for(T=0;T<p;T++)for(A=T*k,R=T*d,_=0;_<d;_++)S=R+_<<2,N=3*(O=u[A+(_>>1)]>>4-((1&_)<<2)&15),g[S]=P[N],g[S+1]=P[N+1],g[S+2]=P[N+2],g[S+3]=O<Q?L[O]:255;if($==8)for(_=0;_<h;_++){var O;S=_<<2,N=3*(O=u[_]),g[S]=P[N],g[S+1]=P[N+1],g[S+2]=P[N+2],g[S+3]=O<Q?L[O]:255}}else if(v==4){if($==8)for(_=0;_<h;_++){S=_<<2;var U=u[E=_<<1];g[S]=U,g[S+1]=U,g[S+2]=U,g[S+3]=u[E+1]}if($==16)for(_=0;_<h;_++){var E;S=_<<2,U=u[E=_<<2],g[S]=U,g[S+1]=U,g[S+2]=U,g[S+3]=u[E+2]}}else if(v==0)for(x=m.tabs.tRNS?m.tabs.tRNS:-1,T=0;T<p;T++){const P=T*k,L=T*d;if($==1)for(var w=0;w<d;w++){var I=(U=255*(u[P+(w>>>3)]>>>7-(7&w)&1))==255*x?0:255;y[L+w]=I<<24|U<<16|U<<8|U}else if($==2)for(w=0;w<d;w++)I=(U=85*(u[P+(w>>>2)]>>>6-((3&w)<<1)&3))==85*x?0:255,y[L+w]=I<<24|U<<16|U<<8|U;else if($==4)for(w=0;w<d;w++)I=(U=17*(u[P+(w>>>1)]>>>4-((1&w)<<2)&15))==17*x?0:255,y[L+w]=I<<24|U<<16|U<<8|U;else if($==8)for(w=0;w<d;w++)I=(U=u[P+w])==x?0:255,y[L+w]=I<<24|U<<16|U<<8|U;else if($==16)for(w=0;w<d;w++)U=u[P+(w<<1)],I=C(u,P+(w<<1))==x?0:255,y[L+w]=I<<24|U<<16|U<<8|U}return g}function n(u,d,p,m){const h=i(u),b=Math.ceil(p*h/8),k=new Uint8Array((b+1+u.interlace)*m);return d=u.tabs.CgBI?o(d,k):r(d,k),u.interlace==0?d=s(d,u,0,p,m):u.interlace==1&&(d=function(y,v){const $=v.width,C=v.height,_=i(v),F=_>>3,x=Math.ceil($*_/8),S=new Uint8Array(C*x);let T=0;const A=[0,0,4,0,2,0,1],R=[0,4,0,2,0,1,0],N=[8,8,8,4,4,2,2],O=[8,8,4,4,2,2,1];let U=0;for(;U<7;){const w=N[U],I=O[U];let P=0,L=0,Q=A[U];for(;Q<C;)Q+=w,L++;let V=R[U];for(;V<$;)V+=I,P++;const Y=Math.ceil(P*_/8);s(y,v,T,P,L);let G=0,D=A[U];for(;D<C;){let W=R[U],te=T+G*Y<<3;for(;W<$;){var E;if(_==1&&(E=(E=y[te>>3])>>7-(7&te)&1,S[D*x+(W>>3)]|=E<<7-((7&W)<<0)),_==2&&(E=(E=y[te>>3])>>6-(7&te)&3,S[D*x+(W>>2)]|=E<<6-((3&W)<<1)),_==4&&(E=(E=y[te>>3])>>4-(7&te)&15,S[D*x+(W>>1)]|=E<<4-((1&W)<<2)),_>=8){const ee=D*x+W*F;for(let ie=0;ie<F;ie++)S[ee+ie]=y[(te>>3)+ie]}te+=_,W+=I}G++,D+=w}P*L!=0&&(T+=L*(1+Y)),U+=1}return S}(d,u)),d}function r(u,d){return o(new Uint8Array(u.buffer,2,u.length-6),d)}var o=function(){const u={H:{}};return u.H.N=function(d,p){const m=Uint8Array;let h,b,k=0,g=0,y=0,v=0,$=0,C=0,_=0,F=0,x=0;if(d[0]==3&&d[1]==0)return p||new m(0);const S=u.H,T=S.b,A=S.e,R=S.R,N=S.n,O=S.A,U=S.Z,E=S.m,w=p==null;for(w&&(p=new m(d.length>>>2<<5));k==0;)if(k=T(d,x,1),g=T(d,x+1,2),x+=3,g!=0){if(w&&(p=u.H.W(p,F+(1<<17))),g==1&&(h=E.J,b=E.h,C=511,_=31),g==2){y=A(d,x,5)+257,v=A(d,x+5,5)+1,$=A(d,x+10,4)+4,x+=14;let P=1;for(var I=0;I<38;I+=2)E.Q[I]=0,E.Q[I+1]=0;for(I=0;I<$;I++){const V=A(d,x+3*I,3);E.Q[1+(E.X[I]<<1)]=V,V>P&&(P=V)}x+=3*$,N(E.Q,P),O(E.Q,P,E.u),h=E.w,b=E.d,x=R(E.u,(1<<P)-1,y+v,d,x,E.v);const L=S.V(E.v,0,y,E.C);C=(1<<L)-1;const Q=S.V(E.v,y,v,E.D);_=(1<<Q)-1,N(E.C,L),O(E.C,L,h),N(E.D,Q),O(E.D,Q,b)}for(;;){const P=h[U(d,x)&C];x+=15&P;const L=P>>>4;if(!(L>>>8))p[F++]=L;else{if(L==256)break;{let Q=F+L-254;if(L>264){const W=E.q[L-257];Q=F+(W>>>3)+A(d,x,7&W),x+=7&W}const V=b[U(d,x)&_];x+=15&V;const Y=V>>>4,G=E.c[Y],D=(G>>>4)+T(d,x,15&G);for(x+=15&G;F<Q;)p[F]=p[F++-D],p[F]=p[F++-D],p[F]=p[F++-D],p[F]=p[F++-D];F=Q}}}}else{7&x&&(x+=8-(7&x));const P=4+(x>>>3),L=d[P-4]|d[P-3]<<8;w&&(p=u.H.W(p,F+L)),p.set(new m(d.buffer,d.byteOffset+P,L),F),x=P+L<<3,F+=L}return p.length==F?p:p.slice(0,F)},u.H.W=function(d,p){const m=d.length;if(p<=m)return d;const h=new Uint8Array(m<<1);return h.set(d,0),h},u.H.R=function(d,p,m,h,b,k){const g=u.H.e,y=u.H.Z;let v=0;for(;v<m;){const $=d[y(h,b)&p];b+=15&$;const C=$>>>4;if(C<=15)k[v]=C,v++;else{let _=0,F=0;C==16?(F=3+g(h,b,2),b+=2,_=k[v-1]):C==17?(F=3+g(h,b,3),b+=3):C==18&&(F=11+g(h,b,7),b+=7);const x=v+F;for(;v<x;)k[v]=_,v++}}return b},u.H.V=function(d,p,m,h){let b=0,k=0;const g=h.length>>>1;for(;k<m;){const y=d[k+p];h[k<<1]=0,h[1+(k<<1)]=y,y>b&&(b=y),k++}for(;k<g;)h[k<<1]=0,h[1+(k<<1)]=0,k++;return b},u.H.n=function(d,p){const m=u.H.m,h=d.length;let b,k,g,y;const v=m.j;for(var $=0;$<=p;$++)v[$]=0;for($=1;$<h;$+=2)v[d[$]]++;const C=m.K;for(b=0,v[0]=0,k=1;k<=p;k++)b=b+v[k-1]<<1,C[k]=b;for(g=0;g<h;g+=2)y=d[g+1],y!=0&&(d[g]=C[y],C[y]++)},u.H.A=function(d,p,m){const h=d.length,b=u.H.m.r;for(let k=0;k<h;k+=2)if(d[k+1]!=0){const g=k>>1,y=d[k+1],v=g<<4|y,$=p-y;let C=d[k]<<$;const _=C+(1<<$);for(;C!=_;)m[b[C]>>>15-p]=v,C++}},u.H.l=function(d,p){const m=u.H.m.r,h=15-p;for(let b=0;b<d.length;b+=2){const k=d[b]<<p-d[b+1];d[b]=m[k]>>>h}},u.H.M=function(d,p,m){m<<=7&p;const h=p>>>3;d[h]|=m,d[h+1]|=m>>>8},u.H.I=function(d,p,m){m<<=7&p;const h=p>>>3;d[h]|=m,d[h+1]|=m>>>8,d[h+2]|=m>>>16},u.H.e=function(d,p,m){return(d[p>>>3]|d[1+(p>>>3)]<<8)>>>(7&p)&(1<<m)-1},u.H.b=function(d,p,m){return(d[p>>>3]|d[1+(p>>>3)]<<8|d[2+(p>>>3)]<<16)>>>(7&p)&(1<<m)-1},u.H.Z=function(d,p){return(d[p>>>3]|d[1+(p>>>3)]<<8|d[2+(p>>>3)]<<16)>>>(7&p)},u.H.i=function(d,p){return(d[p>>>3]|d[1+(p>>>3)]<<8|d[2+(p>>>3)]<<16|d[3+(p>>>3)]<<24)>>>(7&p)},u.H.m=function(){const d=Uint16Array,p=Uint32Array;return{K:new d(16),j:new d(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new d(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new p(32),J:new d(512),_:[],h:new d(32),$:[],w:new d(32768),C:[],v:[],d:new d(32768),D:[],u:new d(512),Q:[],r:new d(32768),s:new p(286),Y:new p(30),a:new p(19),t:new p(15e3),k:new d(65536),g:new d(32768)}}(),function(){const d=u.H.m;for(var p=0;p<32768;p++){let h=p;h=(2863311530&h)>>>1|(1431655765&h)<<1,h=(3435973836&h)>>>2|(858993459&h)<<2,h=(4042322160&h)>>>4|(252645135&h)<<4,h=(4278255360&h)>>>8|(16711935&h)<<8,d.r[p]=(h>>>16|h<<16)>>>17}function m(h,b,k){for(;b--!=0;)h.push(0,k)}for(p=0;p<32;p++)d.q[p]=d.S[p]<<3|d.T[p],d.c[p]=d.p[p]<<4|d.z[p];m(d._,144,8),m(d._,112,9),m(d._,24,7),m(d._,8,8),u.H.n(d._,9),u.H.A(d._,9,d.J),u.H.l(d._,9),m(d.$,32,5),u.H.n(d.$,5),u.H.A(d.$,5,d.h),u.H.l(d.$,5),m(d.Q,19,0),m(d.C,286,0),m(d.D,30,0),m(d.v,320,0)}(),u.H.N}();function i(u){return[1,null,3,1,2,null,4][u.ctype]*u.depth}function s(u,d,p,m,h){let b=i(d);const k=Math.ceil(m*b/8);let g,y;b=Math.ceil(b/8);let v=u[p],$=0;if(v>1&&(u[p]=[0,0,1][v-2]),v==3)for($=b;$<k;$++)u[$+1]=u[$+1]+(u[$+1-b]>>>1)&255;for(let C=0;C<h;C++)if(g=p+C*k,y=g+C+1,v=u[y-1],$=0,v==0)for(;$<k;$++)u[g+$]=u[y+$];else if(v==1){for(;$<b;$++)u[g+$]=u[y+$];for(;$<k;$++)u[g+$]=u[y+$]+u[g+$-b]}else if(v==2)for(;$<k;$++)u[g+$]=u[y+$]+u[g+$-k];else if(v==3){for(;$<b;$++)u[g+$]=u[y+$]+(u[g+$-k]>>>1);for(;$<k;$++)u[g+$]=u[y+$]+(u[g+$-k]+u[g+$-b]>>>1)}else{for(;$<b;$++)u[g+$]=u[y+$]+a(0,u[g+$-k],0);for(;$<k;$++)u[g+$]=u[y+$]+a(u[g+$-b],u[g+$-k],u[g+$-b-k])}return u}function a(u,d,p){const m=u+d-p,h=m-u,b=m-d,k=m-p;return h*h<=b*b&&h*h<=k*k?u:b*b<=k*k?d:p}function c(u,d,p){p.width=e.readUint(u,d),d+=4,p.height=e.readUint(u,d),d+=4,p.depth=u[d],d++,p.ctype=u[d],d++,p.compress=u[d],d++,p.filter=u[d],d++,p.interlace=u[d],d++}function f(u,d,p,m,h,b,k,g,y){const v=Math.min(d,h),$=Math.min(p,b);let C=0,_=0;for(let U=0;U<$;U++)for(let E=0;E<v;E++)if(k>=0&&g>=0?(C=U*d+E<<2,_=(g+U)*h+k+E<<2):(C=(-g+U)*d-k+E<<2,_=U*h+E<<2),y==0)m[_]=u[C],m[_+1]=u[C+1],m[_+2]=u[C+2],m[_+3]=u[C+3];else if(y==1){var F=u[C+3]*.00392156862745098,x=u[C]*F,S=u[C+1]*F,T=u[C+2]*F,A=m[_+3]*(1/255),R=m[_]*A,N=m[_+1]*A,O=m[_+2]*A;const w=1-F,I=F+A*w,P=I==0?0:1/I;m[_+3]=255*I,m[_+0]=(x+R*w)*P,m[_+1]=(S+N*w)*P,m[_+2]=(T+O*w)*P}else if(y==2)F=u[C+3],x=u[C],S=u[C+1],T=u[C+2],A=m[_+3],R=m[_],N=m[_+1],O=m[_+2],F==A&&x==R&&S==N&&T==O?(m[_]=0,m[_+1]=0,m[_+2]=0,m[_+3]=0):(m[_]=x,m[_+1]=S,m[_+2]=T,m[_+3]=F);else if(y==3){if(F=u[C+3],x=u[C],S=u[C+1],T=u[C+2],A=m[_+3],R=m[_],N=m[_+1],O=m[_+2],F==A&&x==R&&S==N&&T==O)continue;if(F<220&&A>20)return!1}return!0}return{decode:function(d){const p=new Uint8Array(d);let m=8;const h=e,b=h.readUshort,k=h.readUint,g={tabs:{},frames:[]},y=new Uint8Array(p.length);let v,$=0,C=0;const _=[137,80,78,71,13,10,26,10];for(var F=0;F<8;F++)if(p[F]!=_[F])throw"The input is not a PNG file!";for(;m<p.length;){const U=h.readUint(p,m);m+=4;const E=h.readASCII(p,m,4);if(m+=4,E=="IHDR")c(p,m,g);else if(E=="iCCP"){for(var x=m;p[x]!=0;)x++;h.readASCII(p,m,x-m),p[x+1];const w=p.slice(x+2,m+U);let I=null;try{I=r(w)}catch{I=o(w)}g.tabs[E]=I}else if(E=="CgBI")g.tabs[E]=p.slice(m,m+4);else if(E=="IDAT"){for(F=0;F<U;F++)y[$+F]=p[m+F];$+=U}else if(E=="acTL")g.tabs[E]={num_frames:k(p,m),num_plays:k(p,m+4)},v=new Uint8Array(p.length);else if(E=="fcTL"){C!=0&&((O=g.frames[g.frames.length-1]).data=n(g,v.slice(0,C),O.rect.width,O.rect.height),C=0);const w={x:k(p,m+12),y:k(p,m+16),width:k(p,m+4),height:k(p,m+8)};let I=b(p,m+22);I=b(p,m+20)/(I==0?100:I);const P={rect:w,delay:Math.round(1e3*I),dispose:p[m+24],blend:p[m+25]};g.frames.push(P)}else if(E=="fdAT"){for(F=0;F<U-4;F++)v[C+F]=p[m+F+4];C+=U-4}else if(E=="pHYs")g.tabs[E]=[h.readUint(p,m),h.readUint(p,m+4),p[m+8]];else if(E=="cHRM")for(g.tabs[E]=[],F=0;F<8;F++)g.tabs[E].push(h.readUint(p,m+4*F));else if(E=="tEXt"||E=="zTXt"){g.tabs[E]==null&&(g.tabs[E]={});var S=h.nextZero(p,m),T=h.readASCII(p,m,S-m),A=m+U-S-1;if(E=="tEXt")N=h.readASCII(p,S+1,A);else{var R=r(p.slice(S+2,S+2+A));N=h.readUTF8(R,0,R.length)}g.tabs[E][T]=N}else if(E=="iTXt"){g.tabs[E]==null&&(g.tabs[E]={}),S=0,x=m,S=h.nextZero(p,x),T=h.readASCII(p,x,S-x);const w=p[x=S+1];var N;p[x+1],x+=2,S=h.nextZero(p,x),h.readASCII(p,x,S-x),x=S+1,S=h.nextZero(p,x),h.readUTF8(p,x,S-x),A=U-((x=S+1)-m),w==0?N=h.readUTF8(p,x,A):(R=r(p.slice(x,x+A)),N=h.readUTF8(R,0,R.length)),g.tabs[E][T]=N}else if(E=="PLTE")g.tabs[E]=h.readBytes(p,m,U);else if(E=="hIST"){const w=g.tabs.PLTE.length/3;for(g.tabs[E]=[],F=0;F<w;F++)g.tabs[E].push(b(p,m+2*F))}else if(E=="tRNS")g.ctype==3?g.tabs[E]=h.readBytes(p,m,U):g.ctype==0?g.tabs[E]=b(p,m):g.ctype==2&&(g.tabs[E]=[b(p,m),b(p,m+2),b(p,m+4)]);else if(E=="gAMA")g.tabs[E]=h.readUint(p,m)/1e5;else if(E=="sRGB")g.tabs[E]=p[m];else if(E=="bKGD")g.ctype==0||g.ctype==4?g.tabs[E]=[b(p,m)]:g.ctype==2||g.ctype==6?g.tabs[E]=[b(p,m),b(p,m+2),b(p,m+4)]:g.ctype==3&&(g.tabs[E]=p[m]);else if(E=="IEND")break;m+=U,h.readUint(p,m),m+=4}var O;return C!=0&&((O=g.frames[g.frames.length-1]).data=n(g,v.slice(0,C),O.rect.width,O.rect.height)),g.data=n(g,y,g.width,g.height),delete g.compress,delete g.interlace,delete g.filter,g},toRGBA8:function(d){const p=d.width,m=d.height;if(d.tabs.acTL==null)return[t(d.data,p,m,d).buffer];const h=[];d.frames[0].data==null&&(d.frames[0].data=d.data);const b=p*m*4,k=new Uint8Array(b),g=new Uint8Array(b),y=new Uint8Array(b);for(let $=0;$<d.frames.length;$++){const C=d.frames[$],_=C.rect.x,F=C.rect.y,x=C.rect.width,S=C.rect.height,T=t(C.data,x,S,d);if($!=0)for(var v=0;v<b;v++)y[v]=k[v];if(C.blend==0?f(T,x,S,k,p,m,_,F,0):C.blend==1&&f(T,x,S,k,p,m,_,F,1),h.push(k.buffer.slice(0)),C.dispose!=0){if(C.dispose==1)f(g,x,S,k,p,m,_,F,0);else if(C.dispose==2)for(v=0;v<b;v++)k[v]=y[v]}}return h},_paeth:a,_copyTile:f,_bin:e}}();(function(){const{_copyTile:e}=hn,{_bin:t}=hn,n=hn._paeth;var r={table:function(){const x=new Uint32Array(256);for(let S=0;S<256;S++){let T=S;for(let A=0;A<8;A++)1&T?T=3988292384^T>>>1:T>>>=1;x[S]=T}return x}(),update(x,S,T,A){for(let R=0;R<A;R++)x=r.table[255&(x^S[T+R])]^x>>>8;return x},crc:(x,S,T)=>4294967295^r.update(4294967295,x,S,T)};function o(x,S,T,A){S[T]+=x[0]*A>>4,S[T+1]+=x[1]*A>>4,S[T+2]+=x[2]*A>>4,S[T+3]+=x[3]*A>>4}function i(x){return Math.max(0,Math.min(255,x))}function s(x,S){const T=x[0]-S[0],A=x[1]-S[1],R=x[2]-S[2],N=x[3]-S[3];return T*T+A*A+R*R+N*N}function a(x,S,T,A,R,N,O){O==null&&(O=1);const U=A.length,E=[];for(var w=0;w<U;w++){const D=A[w];E.push([D>>>0&255,D>>>8&255,D>>>16&255,D>>>24&255])}for(w=0;w<U;w++){let D=4294967295;for(var I=0,P=0;P<U;P++){var L=s(E[w],E[P]);P!=w&&L<D&&(D=L,I=P)}}const Q=new Uint32Array(R.buffer),V=new Int16Array(S*T*4),Y=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(w=0;w<Y.length;w++)Y[w]=255*((Y[w]+.5)/16-.5);for(let D=0;D<T;D++)for(let W=0;W<S;W++){var G;w=4*(D*S+W),O!=2?G=[i(x[w]+V[w]),i(x[w+1]+V[w+1]),i(x[w+2]+V[w+2]),i(x[w+3]+V[w+3])]:(L=Y[4*(3&D)+(3&W)],G=[i(x[w]+L),i(x[w+1]+L),i(x[w+2]+L),i(x[w+3]+L)]),I=0;let te=16777215;for(P=0;P<U;P++){const ae=s(G,E[P]);ae<te&&(te=ae,I=P)}const ee=E[I],ie=[G[0]-ee[0],G[1]-ee[1],G[2]-ee[2],G[3]-ee[3]];O==1&&(W!=S-1&&o(ie,V,w+4,7),D!=T-1&&(W!=0&&o(ie,V,w+4*S-4,3),o(ie,V,w+4*S,5),W!=S-1&&o(ie,V,w+4*S+4,1))),N[w>>2]=I,Q[w>>2]=A[I]}}function c(x,S,T,A,R){R==null&&(R={});const{crc:N}=r,O=t.writeUint,U=t.writeUshort,E=t.writeASCII;let w=8;const I=x.frames.length>1;let P,L=!1,Q=33+(I?20:0);if(R.sRGB!=null&&(Q+=13),R.pHYs!=null&&(Q+=21),R.iCCP!=null&&(P=pako.deflate(R.iCCP),Q+=21+P.length+4),x.ctype==3){for(var V=x.plte.length,Y=0;Y<V;Y++)x.plte[Y]>>>24!=255&&(L=!0);Q+=8+3*V+4+(L?8+1*V+4:0)}for(var G=0;G<x.frames.length;G++)I&&(Q+=38),Q+=(ee=x.frames[G]).cimg.length+12,G!=0&&(Q+=4);Q+=12;const D=new Uint8Array(Q),W=[137,80,78,71,13,10,26,10];for(Y=0;Y<8;Y++)D[Y]=W[Y];if(O(D,w,13),w+=4,E(D,w,"IHDR"),w+=4,O(D,w,S),w+=4,O(D,w,T),w+=4,D[w]=x.depth,w++,D[w]=x.ctype,w++,D[w]=0,w++,D[w]=0,w++,D[w]=0,w++,O(D,w,N(D,w-17,17)),w+=4,R.sRGB!=null&&(O(D,w,1),w+=4,E(D,w,"sRGB"),w+=4,D[w]=R.sRGB,w++,O(D,w,N(D,w-5,5)),w+=4),R.iCCP!=null){const ie=13+P.length;O(D,w,ie),w+=4,E(D,w,"iCCP"),w+=4,E(D,w,"ICC profile"),w+=11,w+=2,D.set(P,w),w+=P.length,O(D,w,N(D,w-(ie+4),ie+4)),w+=4}if(R.pHYs!=null&&(O(D,w,9),w+=4,E(D,w,"pHYs"),w+=4,O(D,w,R.pHYs[0]),w+=4,O(D,w,R.pHYs[1]),w+=4,D[w]=R.pHYs[2],w++,O(D,w,N(D,w-13,13)),w+=4),I&&(O(D,w,8),w+=4,E(D,w,"acTL"),w+=4,O(D,w,x.frames.length),w+=4,O(D,w,R.loop!=null?R.loop:0),w+=4,O(D,w,N(D,w-12,12)),w+=4),x.ctype==3){for(O(D,w,3*(V=x.plte.length)),w+=4,E(D,w,"PLTE"),w+=4,Y=0;Y<V;Y++){const ie=3*Y,ae=x.plte[Y],de=255&ae,we=ae>>>8&255,Me=ae>>>16&255;D[w+ie+0]=de,D[w+ie+1]=we,D[w+ie+2]=Me}if(w+=3*V,O(D,w,N(D,w-3*V-4,3*V+4)),w+=4,L){for(O(D,w,V),w+=4,E(D,w,"tRNS"),w+=4,Y=0;Y<V;Y++)D[w+Y]=x.plte[Y]>>>24&255;w+=V,O(D,w,N(D,w-V-4,V+4)),w+=4}}let te=0;for(G=0;G<x.frames.length;G++){var ee=x.frames[G];I&&(O(D,w,26),w+=4,E(D,w,"fcTL"),w+=4,O(D,w,te++),w+=4,O(D,w,ee.rect.width),w+=4,O(D,w,ee.rect.height),w+=4,O(D,w,ee.rect.x),w+=4,O(D,w,ee.rect.y),w+=4,U(D,w,A[G]),w+=2,U(D,w,1e3),w+=2,D[w]=ee.dispose,w++,D[w]=ee.blend,w++,O(D,w,N(D,w-30,30)),w+=4);const ie=ee.cimg;O(D,w,(V=ie.length)+(G==0?0:4)),w+=4;const ae=w;E(D,w,G==0?"IDAT":"fdAT"),w+=4,G!=0&&(O(D,w,te++),w+=4),D.set(ie,w),w+=V,O(D,w,N(D,ae,w-ae)),w+=4}return O(D,w,0),w+=4,E(D,w,"IEND"),w+=4,O(D,w,N(D,w-4,4)),w+=4,D.buffer}function f(x,S,T){for(let A=0;A<x.frames.length;A++){const R=x.frames[A];R.rect.width;const N=R.rect.height,O=new Uint8Array(N*R.bpl+N);R.cimg=m(R.img,N,R.bpp,R.bpl,O,S,T)}}function u(x,S,T,A,R){const N=R[0],O=R[1],U=R[2],E=R[3],w=R[4],I=R[5];let P=6,L=8,Q=255;for(var V=0;V<x.length;V++){const Be=new Uint8Array(x[V]);for(var Y=Be.length,G=0;G<Y;G+=4)Q&=Be[G+3]}const D=Q!=255,W=function(fe,ve,Ye,Ke,z,B){const H=[];for(var K=0;K<fe.length;K++){const Se=new Uint8Array(fe[K]),nt=new Uint32Array(Se.buffer);var J;let Ge=0,dn=0,zt=ve,fn=Ye,pi=Ke?1:0;if(K!=0){const Hs=B||Ke||K==1||H[K-2].dispose!=0?1:2;let hi=0,mi=1e9;for(let gi=0;gi<Hs;gi++){var X=new Uint8Array(fe[K-1-gi]);const iv=new Uint32Array(fe[K-1-gi]);let Jn=ve,Zn=Ye,ho=-1,yi=-1;for(let Rr=0;Rr<Ye;Rr++)for(let Pr=0;Pr<ve;Pr++)nt[ce=Rr*ve+Pr]!=iv[ce]&&(Pr<Jn&&(Jn=Pr),Pr>ho&&(ho=Pr),Rr<Zn&&(Zn=Rr),Rr>yi&&(yi=Rr));ho==-1&&(Jn=Zn=ho=yi=0),z&&((1&Jn)==1&&Jn--,(1&Zn)==1&&Zn--);const vp=(ho-Jn+1)*(yi-Zn+1);vp<mi&&(mi=vp,hi=gi,Ge=Jn,dn=Zn,zt=ho-Jn+1,fn=yi-Zn+1)}X=new Uint8Array(fe[K-1-hi]),hi==1&&(H[K-1].dispose=2),J=new Uint8Array(zt*fn*4),e(X,ve,Ye,J,zt,fn,-Ge,-dn,0),pi=e(Se,ve,Ye,J,zt,fn,-Ge,-dn,3)?1:0,pi==1?p(Se,ve,Ye,J,{x:Ge,y:dn,width:zt,height:fn}):e(Se,ve,Ye,J,zt,fn,-Ge,-dn,0)}else J=Se.slice(0);H.push({rect:{x:Ge,y:dn,width:zt,height:fn},img:J,blend:pi,dispose:0})}if(Ke)for(K=0;K<H.length;K++){if((me=H[K]).blend==1)continue;const Se=me.rect,nt=H[K-1].rect,Ge=Math.min(Se.x,nt.x),dn=Math.min(Se.y,nt.y),zt={x:Ge,y:dn,width:Math.max(Se.x+Se.width,nt.x+nt.width)-Ge,height:Math.max(Se.y+Se.height,nt.y+nt.height)-dn};H[K-1].dispose=1,K-1!=0&&d(fe,ve,Ye,H,K-1,zt,z),d(fe,ve,Ye,H,K,zt,z)}let oe=0;if(fe.length!=1)for(var ce=0;ce<H.length;ce++){var me;oe+=(me=H[ce]).rect.width*me.rect.height}return H}(x,S,T,N,O,U),te={},ee=[],ie=[];if(A!=0){const Be=[];for(G=0;G<W.length;G++)Be.push(W[G].img.buffer);const fe=function(z){let B=0;for(var H=0;H<z.length;H++)B+=z[H].byteLength;const K=new Uint8Array(B);let J=0;for(H=0;H<z.length;H++){const X=new Uint8Array(z[H]),oe=X.length;for(let ce=0;ce<oe;ce+=4){let me=X[ce],Se=X[ce+1],nt=X[ce+2];const Ge=X[ce+3];Ge==0&&(me=Se=nt=0),K[J+ce]=me,K[J+ce+1]=Se,K[J+ce+2]=nt,K[J+ce+3]=Ge}J+=oe}return K.buffer}(Be),ve=b(fe,A);for(G=0;G<ve.plte.length;G++)ee.push(ve.plte[G].est.rgba);let Ye=0;for(G=0;G<W.length;G++){const Ke=(de=W[G]).img.length;var ae=new Uint8Array(ve.inds.buffer,Ye>>2,Ke>>2);ie.push(ae);const z=new Uint8Array(ve.abuf,Ye,Ke);I&&a(de.img,de.rect.width,de.rect.height,ee,z,ae),de.img.set(z),Ye+=Ke}}else for(V=0;V<W.length;V++){var de=W[V];const Be=new Uint32Array(de.img.buffer);var we=de.rect.width;for(Y=Be.length,ae=new Uint8Array(Y),ie.push(ae),G=0;G<Y;G++){const fe=Be[G];if(G!=0&&fe==Be[G-1])ae[G]=ae[G-1];else if(G>we&&fe==Be[G-we])ae[G]=ae[G-we];else{let ve=te[fe];if(ve==null&&(te[fe]=ve=ee.length,ee.push(fe),ee.length>=300))break;ae[G]=ve}}}const Me=ee.length;for(Me<=256&&w==0&&(L=Me<=2?1:Me<=4?2:Me<=16?4:8,L=Math.max(L,E)),V=0;V<W.length;V++){(de=W[V]).rect.x,de.rect.y,we=de.rect.width;const Be=de.rect.height;let fe=de.img;new Uint32Array(fe.buffer);let ve=4*we,Ye=4;if(Me<=256&&w==0){ve=Math.ceil(L*we/8);var ft=new Uint8Array(ve*Be);const Ke=ie[V];for(let z=0;z<Be;z++){G=z*ve;const B=z*we;if(L==8)for(var Ee=0;Ee<we;Ee++)ft[G+Ee]=Ke[B+Ee];else if(L==4)for(Ee=0;Ee<we;Ee++)ft[G+(Ee>>1)]|=Ke[B+Ee]<<4-4*(1&Ee);else if(L==2)for(Ee=0;Ee<we;Ee++)ft[G+(Ee>>2)]|=Ke[B+Ee]<<6-2*(3&Ee);else if(L==1)for(Ee=0;Ee<we;Ee++)ft[G+(Ee>>3)]|=Ke[B+Ee]<<7-1*(7&Ee)}fe=ft,P=3,Ye=1}else if(D==0&&W.length==1){ft=new Uint8Array(we*Be*3);const Ke=we*Be;for(G=0;G<Ke;G++){const z=3*G,B=4*G;ft[z]=fe[B],ft[z+1]=fe[B+1],ft[z+2]=fe[B+2]}fe=ft,P=2,Ye=3,ve=3*we}de.img=fe,de.bpl=ve,de.bpp=Ye}return{ctype:P,depth:L,plte:ee,frames:W}}function d(x,S,T,A,R,N,O){const U=Uint8Array,E=Uint32Array,w=new U(x[R-1]),I=new E(x[R-1]),P=R+1<x.length?new U(x[R+1]):null,L=new U(x[R]),Q=new E(L.buffer);let V=S,Y=T,G=-1,D=-1;for(let te=0;te<N.height;te++)for(let ee=0;ee<N.width;ee++){const ie=N.x+ee,ae=N.y+te,de=ae*S+ie,we=Q[de];we==0||A[R-1].dispose==0&&I[de]==we&&(P==null||P[4*de+3]!=0)||(ie<V&&(V=ie),ie>G&&(G=ie),ae<Y&&(Y=ae),ae>D&&(D=ae))}G==-1&&(V=Y=G=D=0),O&&((1&V)==1&&V--,(1&Y)==1&&Y--),N={x:V,y:Y,width:G-V+1,height:D-Y+1};const W=A[R];W.rect=N,W.blend=1,W.img=new Uint8Array(N.width*N.height*4),A[R-1].dispose==0?(e(w,S,T,W.img,N.width,N.height,-N.x,-N.y,0),p(L,S,T,W.img,N)):e(L,S,T,W.img,N.width,N.height,-N.x,-N.y,0)}function p(x,S,T,A,R){e(x,S,T,A,R.width,R.height,-R.x,-R.y,2)}function m(x,S,T,A,R,N,O){const U=[];let E,w=[0,1,2,3,4];N!=-1?w=[N]:(S*A>5e5||T==1)&&(w=[0]),O&&(E={level:0});const I=m4;for(var P=0;P<w.length;P++){for(let V=0;V<S;V++)h(R,x,V,A,T,w[P]);U.push(I.deflate(R,E))}let L,Q=1e9;for(P=0;P<U.length;P++)U[P].length<Q&&(L=P,Q=U[P].length);return U[L]}function h(x,S,T,A,R,N){const O=T*A;let U=O+T;if(x[U]=N,U++,N==0)if(A<500)for(var E=0;E<A;E++)x[U+E]=S[O+E];else x.set(new Uint8Array(S.buffer,O,A),U);else if(N==1){for(E=0;E<R;E++)x[U+E]=S[O+E];for(E=R;E<A;E++)x[U+E]=S[O+E]-S[O+E-R]+256&255}else if(T==0){for(E=0;E<R;E++)x[U+E]=S[O+E];if(N==2)for(E=R;E<A;E++)x[U+E]=S[O+E];if(N==3)for(E=R;E<A;E++)x[U+E]=S[O+E]-(S[O+E-R]>>1)+256&255;if(N==4)for(E=R;E<A;E++)x[U+E]=S[O+E]-n(S[O+E-R],0,0)+256&255}else{if(N==2)for(E=0;E<A;E++)x[U+E]=S[O+E]+256-S[O+E-A]&255;if(N==3){for(E=0;E<R;E++)x[U+E]=S[O+E]+256-(S[O+E-A]>>1)&255;for(E=R;E<A;E++)x[U+E]=S[O+E]+256-(S[O+E-A]+S[O+E-R]>>1)&255}if(N==4){for(E=0;E<R;E++)x[U+E]=S[O+E]+256-n(0,S[O+E-A],0)&255;for(E=R;E<A;E++)x[U+E]=S[O+E]+256-n(S[O+E-R],S[O+E-A],S[O+E-R-A])&255}}}function b(x,S){const T=new Uint8Array(x),A=T.slice(0),R=new Uint32Array(A.buffer),N=k(A,S),O=N[0],U=N[1],E=T.length,w=new Uint8Array(E>>2);let I;if(T.length<2e7)for(var P=0;P<E;P+=4)I=g(O,L=T[P]*(1/255),Q=T[P+1]*(1/255),V=T[P+2]*(1/255),Y=T[P+3]*(1/255)),w[P>>2]=I.ind,R[P>>2]=I.est.rgba;else for(P=0;P<E;P+=4){var L=T[P]*.00392156862745098,Q=T[P+1]*(1/255),V=T[P+2]*(1/255),Y=T[P+3]*(1/255);for(I=O;I.left;)I=y(I.est,L,Q,V,Y)<=0?I.left:I.right;w[P>>2]=I.ind,R[P>>2]=I.est.rgba}return{abuf:A.buffer,inds:w,plte:U}}function k(x,S,T){T==null&&(T=1e-4);const A=new Uint32Array(x.buffer),R={i0:0,i1:x.length,bst:null,est:null,tdst:0,left:null,right:null};R.bst=C(x,R.i0,R.i1),R.est=_(R.bst);const N=[R];for(;N.length<S;){let U=0,E=0;for(var O=0;O<N.length;O++)N[O].est.L>U&&(U=N[O].est.L,E=O);if(U<T)break;const w=N[E],I=v(x,A,w.i0,w.i1,w.est.e,w.est.eMq255);if(w.i0>=I||w.i1<=I){w.est.L=0;continue}const P={i0:w.i0,i1:I,bst:null,est:null,tdst:0,left:null,right:null};P.bst=C(x,P.i0,P.i1),P.est=_(P.bst);const L={i0:I,i1:w.i1,bst:null,est:null,tdst:0,left:null,right:null};for(L.bst={R:[],m:[],N:w.bst.N-P.bst.N},O=0;O<16;O++)L.bst.R[O]=w.bst.R[O]-P.bst.R[O];for(O=0;O<4;O++)L.bst.m[O]=w.bst.m[O]-P.bst.m[O];L.est=_(L.bst),w.left=P,w.right=L,N[E]=P,N.push(L)}for(N.sort((U,E)=>E.bst.N-U.bst.N),O=0;O<N.length;O++)N[O].ind=O;return[R,N]}function g(x,S,T,A,R){if(x.left==null)return x.tdst=function(P,L,Q,V,Y){const G=L-P[0],D=Q-P[1],W=V-P[2],te=Y-P[3];return G*G+D*D+W*W+te*te}(x.est.q,S,T,A,R),x;const N=y(x.est,S,T,A,R);let O=x.left,U=x.right;N>0&&(O=x.right,U=x.left);const E=g(O,S,T,A,R);if(E.tdst<=N*N)return E;const w=g(U,S,T,A,R);return w.tdst<E.tdst?w:E}function y(x,S,T,A,R){const{e:N}=x;return N[0]*S+N[1]*T+N[2]*A+N[3]*R-x.eMq}function v(x,S,T,A,R,N){for(A-=4;T<A;){for(;$(x,T,R)<=N;)T+=4;for(;$(x,A,R)>N;)A-=4;if(T>=A)break;const O=S[T>>2];S[T>>2]=S[A>>2],S[A>>2]=O,T+=4,A-=4}for(;$(x,T,R)>N;)T-=4;return T+4}function $(x,S,T){return x[S]*T[0]+x[S+1]*T[1]+x[S+2]*T[2]+x[S+3]*T[3]}function C(x,S,T){const A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],R=[0,0,0,0],N=T-S>>2;for(let O=S;O<T;O+=4){const U=x[O]*.00392156862745098,E=x[O+1]*(1/255),w=x[O+2]*(1/255),I=x[O+3]*(1/255);R[0]+=U,R[1]+=E,R[2]+=w,R[3]+=I,A[0]+=U*U,A[1]+=U*E,A[2]+=U*w,A[3]+=U*I,A[5]+=E*E,A[6]+=E*w,A[7]+=E*I,A[10]+=w*w,A[11]+=w*I,A[15]+=I*I}return A[4]=A[1],A[8]=A[2],A[9]=A[6],A[12]=A[3],A[13]=A[7],A[14]=A[11],{R:A,m:R,N}}function _(x){const{R:S}=x,{m:T}=x,{N:A}=x,R=T[0],N=T[1],O=T[2],U=T[3],E=A==0?0:1/A,w=[S[0]-R*R*E,S[1]-R*N*E,S[2]-R*O*E,S[3]-R*U*E,S[4]-N*R*E,S[5]-N*N*E,S[6]-N*O*E,S[7]-N*U*E,S[8]-O*R*E,S[9]-O*N*E,S[10]-O*O*E,S[11]-O*U*E,S[12]-U*R*E,S[13]-U*N*E,S[14]-U*O*E,S[15]-U*U*E],I=w,P=F;let L=[Math.random(),Math.random(),Math.random(),Math.random()],Q=0,V=0;if(A!=0)for(let G=0;G<16&&(L=P.multVec(I,L),V=Math.sqrt(P.dot(L,L)),L=P.sml(1/V,L),!(G!=0&&Math.abs(V-Q)<1e-9));G++)Q=V;const Y=[R*E,N*E,O*E,U*E];return{Cov:w,q:Y,e:L,L:Q,eMq255:P.dot(P.sml(255,Y),L),eMq:P.dot(L,Y),rgba:(Math.round(255*Y[3])<<24|Math.round(255*Y[2])<<16|Math.round(255*Y[1])<<8|Math.round(255*Y[0])<<0)>>>0}}var F={multVec:(x,S)=>[x[0]*S[0]+x[1]*S[1]+x[2]*S[2]+x[3]*S[3],x[4]*S[0]+x[5]*S[1]+x[6]*S[2]+x[7]*S[3],x[8]*S[0]+x[9]*S[1]+x[10]*S[2]+x[11]*S[3],x[12]*S[0]+x[13]*S[1]+x[14]*S[2]+x[15]*S[3]],dot:(x,S)=>x[0]*S[0]+x[1]*S[1]+x[2]*S[2]+x[3]*S[3],sml:(x,S)=>[x*S[0],x*S[1],x*S[2],x*S[3]]};hn.encode=function(S,T,A,R,N,O,U){R==null&&(R=0),U==null&&(U=!1);const E=u(S,T,A,R,[!1,!1,!1,0,U,!1]);return f(E,-1),c(E,T,A,N,O)},hn.encodeLL=function(S,T,A,R,N,O,U,E){const w={ctype:0+(R==1?0:2)+(N==0?0:4),depth:O,frames:[]},I=(R+N)*O,P=I*T;for(let L=0;L<S.length;L++)w.frames.push({rect:{x:0,y:0,width:T,height:A},img:new Uint8Array(S[L]),blend:0,dispose:1,bpp:Math.ceil(I/8),bpl:Math.ceil(P/8)});return f(w,0,!0),c(w,T,A,U,E)},hn.encode.compress=u,hn.encode.dither=a,hn.quantize=b,hn.quantize.getKDtree=k,hn.quantize.getNearest=g})();const qx={toArrayBuffer(e,t){const n=e.width,r=e.height,o=n<<2,i=e.getContext("2d").getImageData(0,0,n,r),s=new Uint32Array(i.data.buffer),a=(32*n+31)/32<<2,c=a*r,f=122+c,u=new ArrayBuffer(f),d=new DataView(u),p=1<<20;let m,h,b,k,g=p,y=0,v=0,$=0;function C(x){d.setUint16(v,x,!0),v+=2}function _(x){d.setUint32(v,x,!0),v+=4}function F(x){v+=x}C(19778),_(f),F(4),_(122),_(108),_(n),_(-r>>>0),C(1),C(32),_(3),_(c),_(2835),_(2835),F(8),_(16711680),_(65280),_(255),_(4278190080),_(1466527264),function x(){for(;y<r&&g>0;){for(k=122+y*a,m=0;m<o;)g--,h=s[$++],b=h>>>24,d.setUint32(k+m,h<<8|b),m+=4;y++}$<s.length?(g=p,setTimeout(x,qx._dly)):t(u)}()},toBlob(e,t){this.toArrayBuffer(e,n=>{t(new Blob([n],{type:"image/bmp"}))})},_dly:9};var Lt={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},g4={[Lt.CHROME]:16384,[Lt.FIREFOX]:11180,[Lt.DESKTOP_SAFARI]:16384,[Lt.IE]:8192,[Lt.IOS]:4096,[Lt.ETC]:8192};const gp=typeof window<"u",Gx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Il=gp&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),y4=(gp||Gx)&&(Il&&Il.getOriginalSymbol(window,"File")||typeof File<"u"&&File),Qx=(gp||Gx)&&(Il&&Il.getOriginalSymbol(window,"FileReader")||typeof FileReader<"u"&&FileReader);function yp(e,t,n=Date.now()){return new Promise(r=>{const o=e.split(","),i=o[0].match(/:(.*?);/)[1],s=globalThis.atob(o[1]);let a=s.length;const c=new Uint8Array(a);for(;a--;)c[a]=s.charCodeAt(a);const f=new Blob([c],{type:i});f.name=t,f.lastModified=n,r(f)})}function Yx(e){return new Promise((t,n)=>{const r=new Qx;r.onload=()=>t(r.result),r.onerror=o=>n(o),r.readAsDataURL(e)})}function Kx(e){return new Promise((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=o=>n(o),r.src=e})}function Gr(){if(Gr.cachedResult!==void 0)return Gr.cachedResult;let e=Lt.ETC;const{userAgent:t}=navigator;return/Chrom(e|ium)/i.test(t)?e=Lt.CHROME:/iP(ad|od|hone)/i.test(t)&&/WebKit/i.test(t)?e=Lt.IOS:/Safari/i.test(t)?e=Lt.DESKTOP_SAFARI:/Firefox/i.test(t)?e=Lt.FIREFOX:(/MSIE/i.test(t)||document.documentMode)&&(e=Lt.IE),Gr.cachedResult=e,Gr.cachedResult}function Xx(e,t){const n=Gr(),r=g4[n];let o=e,i=t,s=o*i;const a=o>i?i/o:o/i;for(;s>r*r;){const c=(r+o)/2,f=(r+i)/2;c<f?(i=f,o=f*a):(i=c*a,o=c),s=o*i}return{width:o,height:i}}function wc(e,t){let n,r;try{if(n=new OffscreenCanvas(e,t),r=n.getContext("2d"),r===null)throw new Error("getContext of OffscreenCanvas returns null")}catch{n=document.createElement("canvas"),r=n.getContext("2d")}return n.width=e,n.height=t,[n,r]}function Jx(e,t){const{width:n,height:r}=Xx(e.width,e.height),[o,i]=wc(n,r);return t&&/jpe?g/.test(t)&&(i.fillStyle="white",i.fillRect(0,0,o.width,o.height)),i.drawImage(e,0,0,o.width,o.height),o}function Qa(){return Qa.cachedResult!==void 0||(Qa.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&typeof document<"u"&&"ontouchend"in document),Qa.cachedResult}function Ll(e,t={}){return new Promise(function(n,r){let o,i;var s=function(){try{return i=Jx(o,t.fileType||e.type),n([o,i])}catch(c){return r(c)}},a=function(c){try{var f=function(u){try{throw u}catch(d){return r(d)}};try{let u;return Yx(e).then(function(d){try{return u=d,Kx(u).then(function(p){try{return o=p,function(){try{return s()}catch(m){return r(m)}}()}catch(m){return f(m)}},f)}catch(p){return f(p)}},f)}catch(u){f(u)}}catch(u){return r(u)}};try{if(Qa()||[Lt.DESKTOP_SAFARI,Lt.MOBILE_SAFARI].includes(Gr()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(e).then(function(c){try{return o=c,s()}catch{return a()}},a)}catch{a()}})}function Dl(e,t,n,r,o=1){return new Promise(function(i,s){let a;if(t==="image/png"){let d,p,m;return d=e.getContext("2d"),{data:p}=d.getImageData(0,0,e.width,e.height),m=hn.encode([p.buffer],e.width,e.height,4096*o),a=new Blob([m],{type:t}),a.name=n,a.lastModified=r,c.call(this)}{let d=function(){return c.call(this)};var f=d;if(t==="image/bmp")return new Promise(p=>qx.toBlob(e,p)).then((function(p){try{return a=p,a.name=n,a.lastModified=r,d.call(this)}catch(m){return s(m)}}).bind(this),s);{let p=function(){return d.call(this)};var u=p;if(typeof OffscreenCanvas=="function"&&e instanceof OffscreenCanvas)return e.convertToBlob({type:t,quality:o}).then((function(m){try{return a=m,a.name=n,a.lastModified=r,p.call(this)}catch(h){return s(h)}}).bind(this),s);{let m;return m=e.toDataURL(t,o),yp(m,n,r).then((function(h){try{return a=h,p.call(this)}catch(b){return s(b)}}).bind(this),s)}}}function c(){return i(a)}})}function Tn(e){e.width=0,e.height=0}function Do(){return new Promise(function(e,t){let n,r,o,i;return Do.cachedResult!==void 0?e(Do.cachedResult):yp("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then(function(s){try{return n=s,Ll(n).then(function(a){try{return r=a[1],Dl(r,n.type,n.name,n.lastModified).then(function(c){try{return o=c,Tn(r),Ll(o).then(function(f){try{return i=f[0],Do.cachedResult=i.width===1&&i.height===2,e(Do.cachedResult)}catch(u){return t(u)}},t)}catch(f){return t(f)}},t)}catch(c){return t(c)}},t)}catch(a){return t(a)}},t)})}function Zx(e){return new Promise((t,n)=>{const r=new Qx;r.onload=o=>{const i=new DataView(o.target.result);if(i.getUint16(0,!1)!=65496)return t(-2);const s=i.byteLength;let a=2;for(;a<s;){if(i.getUint16(a+2,!1)<=8)return t(-1);const c=i.getUint16(a,!1);if(a+=2,c==65505){if(i.getUint32(a+=2,!1)!=1165519206)return t(-1);const f=i.getUint16(a+=6,!1)==18761;a+=i.getUint32(a+4,f);const u=i.getUint16(a,f);a+=2;for(let d=0;d<u;d++)if(i.getUint16(a+12*d,f)==274)return t(i.getUint16(a+12*d+8,f))}else{if((65280&c)!=65280)break;a+=i.getUint16(a,!1)}}return t(-1)},r.onerror=o=>n(o),r.readAsArrayBuffer(e)})}function ev(e,t){const{width:n}=e,{height:r}=e,{maxWidthOrHeight:o}=t;let i,s=e;return isFinite(o)&&(n>o||r>o)&&([s,i]=wc(n,r),n>r?(s.width=o,s.height=r/n*o):(s.width=n/r*o,s.height=o),i.drawImage(e,0,0,s.width,s.height),Tn(e)),s}function tv(e,t){const{width:n}=e,{height:r}=e,[o,i]=wc(n,r);switch(t>4&&t<9?(o.width=r,o.height=n):(o.width=n,o.height=r),t){case 2:i.transform(-1,0,0,1,n,0);break;case 3:i.transform(-1,0,0,-1,n,r);break;case 4:i.transform(1,0,0,-1,0,r);break;case 5:i.transform(0,1,1,0,0,0);break;case 6:i.transform(0,1,-1,0,r,0);break;case 7:i.transform(0,-1,-1,0,r,n);break;case 8:i.transform(0,-1,1,0,0,n)}return i.drawImage(e,0,0,n,r),Tn(e),o}function gg(e,t,n=0){return new Promise(function(r,o){let i,s,a,c,f,u,d,p,m,h,b,k,g,y,v,$,C,_,F,x;function S(A=5){if(t.signal&&t.signal.aborted)throw t.signal.reason;i+=A,t.onProgress(Math.min(i,100))}function T(A){if(t.signal&&t.signal.aborted)throw t.signal.reason;i=Math.min(Math.max(A,i),100),t.onProgress(i)}return i=n,s=t.maxIteration||10,a=1024*t.maxSizeMB*1024,S(),Ll(e,t).then((function(A){try{return[,c]=A,S(),f=ev(c,t),S(),new Promise(function(R,N){var O;if(!(O=t.exifOrientation))return Zx(e).then((function(E){try{return O=E,U.call(this)}catch(w){return N(w)}}).bind(this),N);function U(){return R(O)}return U.call(this)}).then((function(R){try{return u=R,S(),Do().then((function(N){try{return d=N?f:tv(f,u),S(),p=t.initialQuality||1,m=t.fileType||e.type,Dl(d,m,e.name,e.lastModified,p).then((function(O){try{{let I=function(){if(s--&&(v>a||v>g)){let L,Q;return L=x?.95*F.width:F.width,Q=x?.95*F.height:F.height,[C,_]=wc(L,Q),_.drawImage(F,0,0,L,Q),p*=m==="image/png"?.85:.95,Dl(C,m,e.name,e.lastModified,p).then(function(V){try{return $=V,Tn(F),F=C,v=$.size,T(Math.min(99,Math.floor((y-v)/(y-a)*100))),I}catch(Y){return o(Y)}},o)}return[1]},P=function(){return Tn(F),Tn(C),Tn(f),Tn(d),Tn(c),T(100),r($)};var E=I,w=P;if(h=O,S(),b=h.size>a,k=h.size>e.size,!b&&!k)return T(100),r(h);var U;return g=e.size,y=h.size,v=y,F=d,x=!t.alwaysKeepResolution&&b,(U=(function(L){for(;L;){if(L.then)return void L.then(U,o);try{if(L.pop){if(L.length)return L.pop()?P.call(this):L;L=I}else L=L.call(this)}catch(Q){return o(Q)}}}).bind(this))(I)}}catch(I){return o(I)}}).bind(this),o)}catch(O){return o(O)}}).bind(this),o)}catch(N){return o(N)}}).bind(this),o)}catch(R){return o(R)}}).bind(this),o)})}const x4=`
let scriptImported = false
self.addEventListener('message', async (e) => {
  const { file, id, imageCompressionLibUrl, options } = e.data
  options.onProgress = (progress) => self.postMessage({ progress, id })
  try {
    if (!scriptImported) {
      // console.log('[worker] importScripts', imageCompressionLibUrl)
      self.importScripts(imageCompressionLibUrl)
      scriptImported = true
    }
    // console.log('[worker] self', self)
    const compressedFile = await imageCompression(file, options)
    self.postMessage({ file: compressedFile, id })
  } catch (e) {
    // console.error('[worker] error', e)
    self.postMessage({ error: e.message + '\\n' + e.stack, id })
  }
})
`;let bu;function v4(e,t){return new Promise((n,r)=>{bu||(bu=function(s){const a=[];return a.push(s),URL.createObjectURL(new Blob(a))}(x4));const o=new Worker(bu);o.addEventListener("message",function(s){if(t.signal&&t.signal.aborted)o.terminate();else if(s.data.progress===void 0){if(s.data.error)return r(new Error(s.data.error)),void o.terminate();n(s.data.file),o.terminate()}else t.onProgress(s.data.progress)}),o.addEventListener("error",r),t.signal&&t.signal.addEventListener("abort",()=>{r(t.signal.reason),o.terminate()}),o.postMessage({file:e,imageCompressionLibUrl:t.libURL,options:{...t,onProgress:void 0,signal:void 0}})})}function wt(e,t){return new Promise(function(n,r){let o,i,s,a,c,f;if(o={...t},s=0,{onProgress:a}=o,o.maxSizeMB=o.maxSizeMB||Number.POSITIVE_INFINITY,c=typeof o.useWebWorker!="boolean"||o.useWebWorker,delete o.useWebWorker,o.onProgress=m=>{s=m,typeof a=="function"&&a(s)},!(e instanceof Blob||e instanceof y4))return r(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(e.type))return r(new Error("The file given is not an image"));if(f=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,!c||typeof Worker!="function"||f)return gg(e,o).then((function(m){try{return i=m,p.call(this)}catch(h){return r(h)}}).bind(this),r);var u=(function(){try{return p.call(this)}catch(m){return r(m)}}).bind(this),d=function(m){try{return gg(e,o).then(function(h){try{return i=h,u()}catch(b){return r(b)}},r)}catch(h){return r(h)}};try{return o.libURL=o.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",v4(e,o).then(function(m){try{return i=m,u()}catch{return d()}},d)}catch{d()}function p(){try{i.name=e.name,i.lastModified=e.lastModified}catch{}try{o.preserveExif&&e.type==="image/jpeg"&&(!o.fileType||o.fileType&&o.fileType===e.type)&&(i=Hx(e,i))}catch{}return n(i)}})}wt.getDataUrlFromFile=Yx,wt.getFilefromDataUrl=yp,wt.loadImage=Kx,wt.drawImageInCanvas=Jx,wt.drawFileInCanvas=Ll,wt.canvasToFile=Dl,wt.getExifOrientation=Zx,wt.handleMaxWidthOrHeight=ev,wt.followExifOrientation=tv,wt.cleanupCanvasMemory=Tn,wt.isAutoOrientationInBrowser=Do,wt.approximateBelowMaximumCanvasSizeOfBrowser=Xx,wt.copyExifWithoutOrientation=Hx,wt.getBrowserName=Gr,wt.version="2.0.2";const b4=tt`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,$4=tt`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,nv=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px;
  animation: ${b4} 0.3s ease both;
`,rv=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,w4=j.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.secondary};
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast},
    border-color ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[100]};
    color: ${({theme:e})=>e.text.primary};
    border-color: ${({theme:e})=>e.border.strong};
  }
`,ov=j.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,S4=j.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,k4=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,ko=j.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Ai=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Ri=j.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,Pi=j.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,Ya=j.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,yg=j.div`
  grid-column: 1 / -1;
`,Oe=j.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,We=j.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,xp=({theme:e,$hasError:t})=>`
  width: 100%;
  background-color: ${e.surface.card};
  border: 1.5px solid ${t?e.colors.error.base:e.colors.neutral[200]};
  border-radius: ${e.borderRadius.md};
  font-family: ${e.typography.fontFamily.sans};
  font-size: ${e.typography.fontSize.base};
  color: ${e.text.primary};
  outline: none;
  transition:
    border-color ${e.transitions.fast},
    box-shadow ${e.transitions.fast};
  box-sizing: border-box;

  &::placeholder { color: ${e.colors.neutral[300]}; }

  &:focus {
    border-color: ${t?e.colors.error.base:e.colors.primary[500]};
    box-shadow: 0 0 0 3px ${t?e.colors.error.base+"20":e.colors.primary[600]+"18"};
  }

  &:disabled {
    background-color: ${e.colors.neutral[50]};
    color: ${e.text.muted};
    cursor: not-allowed;
    opacity: 0.75;
  }
`,ht=j.input`
  ${({theme:e,$hasError:t})=>xp({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,Sa=j.select`
  ${({theme:e,$hasError:t})=>xp({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,_4=j.textarea`
  ${({theme:e,$hasError:t})=>xp({theme:e,$hasError:t})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,qt=j.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,_o=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,E4=j.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,j4=j.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,C4=j.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[5]};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,xg=j.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border: 2px solid ${({theme:e,$active:t})=>t?e.colors.primary[500]:e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e,$active:t})=>t?e.colors.primary[50]:"transparent"};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e,$active:t})=>t?e.colors.primary[700]:e.text.secondary};
  cursor: pointer;
  transition:
    border-color ${({theme:e})=>e.transitions.fast},
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({theme:e})=>e.colors.primary[400]};
    background-color: ${({theme:e})=>e.colors.primary[50]};
    color: ${({theme:e})=>e.colors.primary[700]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,F4=j.div`
  padding: ${({theme:e})=>e.spacing[4]};
  border: 2px solid ${({theme:e,$selected:t})=>t?e.colors.primary[400]:e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e,$selected:t})=>t?e.colors.primary[50]:e.surface.card};
  cursor: pointer;
  transition:
    border-color ${({theme:e})=>e.transitions.fast},
    background-color ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary[400]};
    background-color: ${({theme:e})=>e.colors.primary[50]};
  }
`,T4=j.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,A4=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
`,R4=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`,P4=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,z4=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,O4=j.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background-color: ${({theme:e})=>e.colors.primary[100]};
  color: ${({theme:e})=>e.colors.primary[700]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 11px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,N4=j.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,I4=j.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,L4=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border: 2px solid ${({theme:e,$checked:t})=>t?e.colors.primary[400]:e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e,$checked:t})=>t?e.colors.primary[50]:e.surface.card};
  cursor: pointer;
  transition:
    border-color ${({theme:e})=>e.transitions.fast},
    background-color ${({theme:e})=>e.transitions.fast};
  user-select: none;

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary[400]};
    background-color: ${({theme:e})=>e.colors.primary[50]};
  }
`,D4=j.div`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 2px solid ${({theme:e,$checked:t})=>t?e.colors.primary[500]:e.colors.neutral[300]};
  background-color: ${({theme:e,$checked:t})=>t?e.colors.primary[500]:"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    border-color ${({theme:e})=>e.transitions.fast},
    background-color ${({theme:e})=>e.transitions.fast};
`,U4=j.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,M4=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,B4=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.brand.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,vg=j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-top: ${({theme:e})=>e.spacing[4]};
`,bg=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
`,$g=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.brand.primary};
`,V4=j.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,W4=j.div`
  border: 1.5px dashed ${({theme:e,$hasFile:t})=>t?e.colors.primary[400]:e.border.strong};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e,$hasFile:t})=>t?e.colors.primary[50]:e.colors.neutral[50]};
  padding: ${({theme:e})=>e.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  transition:
    border-color ${({theme:e})=>e.transitions.fast},
    background-color ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary[400]};
    background-color: ${({theme:e})=>e.colors.primary[50]};
  }
`,H4=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,q4=j.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
  cursor: pointer;
  text-align: center;
  min-height: 88px;
`,G4=j.div`
  color: ${({theme:e,$hasFile:t})=>t?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,Q4=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,Y4=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,K4=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,X4=j.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,J4=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Z4=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,eC=j.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  border: none;
  background-color: ${({theme:e})=>e.colors.neutral[100]};
  color: ${({theme:e})=>e.text.muted};
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.error.light};
    color: ${({theme:e})=>e.colors.error.base};
  }
`,tC=j.div`
  position: fixed;
  bottom: 0;
  left: 240px;
  right: 0;
  z-index: ${({theme:e})=>e.zIndex.sticky};
  background-color: ${({theme:e})=>e.surface.card};
  border-top: 1px solid ${({theme:e})=>e.border.default};
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[8]};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[3]};
  box-shadow: 0 -4px 16px rgba(35, 27, 21, 0.06);

  @media (max-width: 900px) {
    left: 0;
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,nC=j.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: transparent;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.secondary};
  cursor: pointer;
  transition:
    background-color ${({theme:e})=>e.transitions.fast},
    color ${({theme:e})=>e.transitions.fast};

  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>e.colors.neutral[100]};
    color: ${({theme:e})=>e.text.primary};
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,rC=j.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({$isSubmitting:e,theme:t})=>e?t.colors.primary[700]:`linear-gradient(135deg, ${t.colors.primary[600]}, ${t.colors.primary[500]})`};
  color: #fff;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  cursor: ${({$isSubmitting:e})=>e?"not-allowed":"pointer"};
  box-shadow: 0 3px 12px ${({theme:e})=>e.colors.primary[900]}35;
  transition:
    background ${({theme:e})=>e.transitions.base},
    transform ${({theme:e})=>e.transitions.fast},
    box-shadow ${({theme:e})=>e.transitions.base};

  &:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      ${({theme:e})=>e.colors.primary[700]},
      ${({theme:e})=>e.colors.primary[600]}
    );
    box-shadow: 0 6px 20px ${({theme:e})=>e.colors.primary[900]}45;
    transform: translateY(-1px);
  }
  &:active:not(:disabled) { transform: translateY(0); }
  &:disabled { opacity: 0.65; cursor: not-allowed; }
`,$u=j.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,tr=j.div`
  height: ${({$h:e})=>e??"14px"};
  width: ${({$w:e})=>e??"100%"};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.neutral[100]} 25%,
    ${({theme:e})=>e.colors.neutral[50]}  50%,
    ${({theme:e})=>e.colors.neutral[100]} 75%
  );
  background-size: 600px 100%;
  animation: ${$4} 1.4s ease infinite;
`,wg=j(ko)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Sg=j.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`,kg=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,_g=j.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,oC=j.div`
  flex: 1;
  height: 6px;
  background-color: ${({theme:e})=>e.colors.neutral[100]};
  border-radius: 99px;
  overflow: hidden;
`,iC=j.div`
  height: 100%;
  width: ${({$percent:e})=>e??0}%;
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.primary[500]},
    ${({theme:e})=>e.colors.primary[400]}
  );
  border-radius: 99px;
  transition: width 300ms ease;
`,sC=j.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.muted};
  white-space: nowrap;
  min-width: 32px;
  text-align: right;
`;let zi=null,Oi=null,Ni=null;const aC=hp({corporate_name:pe().required("A razão social é obrigatória.").max(200,"Razão social deve ter no máximo 200 caracteres."),cnpj:pe().required("O CNPJ é obrigatório.").transform(e=>(e==null?void 0:e.replace(/\D/g,""))||"").test("cnpj-valido","CNPJ deve ter 14 dígitos.",e=>!e||e.length===14),email:pe().required("O e-mail é obrigatório.").nullable().transform(e=>e||null).email("Informe um e-mail válido."),state_registration:pe().nullable().transform(e=>e||null).max(15,"Inscrição estadual deve ter no máximo 15 caracteres."),trade_name:pe().nullable().transform(e=>e||null).max(200,"Nome fantasia deve ter no máximo 200 caracteres."),phone:pe().nullable().transform(e=>e||null).max(20,"Telefone deve ter no máximo 20 caracteres."),benefit_type:pe().required("O tipo de benefício é obrigatório.").oneOf(["food","meal","both"],"Tipo inválido."),notes:pe().nullable().transform(e=>e||null),partner_id:pe().nullable().transform(e=>e||null),address_street:pe().nullable().transform(e=>e||null).max(255,"Logradouro deve ter no máximo 255 caracteres."),address_number:pe().nullable().transform(e=>e||null).max(10,"Número deve ter no máximo 10 caracteres."),address_complement:pe().nullable().transform(e=>e||null).max(100,"Complemento deve ter no máximo 100 caracteres."),address_neighborhood:pe().nullable().transform(e=>e||null).max(100,"Bairro deve ter no máximo 100 caracteres."),address_city:pe().nullable().transform(e=>e||null).max(100,"Cidade deve ter no máximo 100 caracteres."),address_state:pe().nullable().transform(e=>e||null).max(2,"UF deve ter 2 caracteres."),address_zip:pe().nullable().transform(e=>e||null).test("cep-valido","CEP inválido. Use o formato 00000-000.",e=>e?e.replace(/\D/g,"").length===8:!0),bank_bank_name:pe().nullable().transform(e=>e||null).max(100,"Nome do banco deve ter no máximo 100 caracteres."),bank_agency:pe().max(10,"Agência deve ter no máximo 10 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Agência é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_agency_digit:pe().nullable().transform(e=>e||null).max(2,"Dígito deve ter no máximo 2 caracteres."),bank_account:pe().max(20,"Conta deve ter no máximo 20 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Conta é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_account_digit:pe().nullable().transform(e=>e||null).max(2,"Dígito deve ter no máximo 2 caracteres."),bank_account_type:pe().when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Tipo é obrigatório.").oneOf(["checking","savings"],"Tipo inválido."),otherwise:e=>e.nullable().transform(t=>t||null)})}),lC=[{key:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",fieldName:"contrato"},{key:"proof_of_address",type:"proof_of_address",label:"Comprovante de Endereço",fieldName:"documentos",docIndex:0},{key:"bank_account_proof",type:"bank_account_proof",label:"Comprovante Bancário",fieldName:"documentos",docIndex:1},{key:"card_machine_proof",type:"card_machine_proof",label:"Comprovante de Maquininha",fieldName:"documentos",docIndex:2}],cC=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],uC=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],dC=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],fC=async e=>{if(!e.type.startsWith("image/"))return e;try{const t=await wt(e,{maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0,fileType:e.type});return new File([t],e.name,{type:e.type})}catch{return e}},pC=(e="")=>{const t=e.replace(/\D/g,"").slice(0,14);return t.length<=2?t:t.length<=5?`${t.slice(0,2)}.${t.slice(2)}`:t.length<=8?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5)}`:t.length<=12?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8)}`:`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8,12)}-${t.slice(12)}`},hC=(e="")=>{const t=e.replace(/\D/g,"").slice(0,11);return t.length<=2?`(${t}`:t.length<=6?`(${t.slice(0,2)}) ${t.slice(2)}`:t.length<=10?`(${t.slice(0,2)}) ${t.slice(2,6)}-${t.slice(6)}`:`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7)}`},mC=(e="")=>{const t=e.replace(/\D/g,"").slice(0,8);return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5)}`},wu=(e="")=>e.replace(/\D/g,""),ka=(e=0)=>Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),gC=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function yC(){const e=t=>Array.from({length:t}).map((n,r)=>l.jsxs(Oe,{children:[l.jsx(tr,{$w:"45%",$h:"11px"}),l.jsx(tr,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},r));return l.jsxs(nv,{children:[l.jsxs(rv,{children:[l.jsx(tr,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),l.jsxs(ov,{children:[l.jsx(tr,{$w:"180px",$h:"28px"}),l.jsx(tr,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]}),l.jsxs(wg,{children:[l.jsx(tr,{$w:"35%",$h:"20px"}),l.jsx(Sg,{}),l.jsx(Ya,{children:e(6)})]}),l.jsxs(wg,{children:[l.jsx(tr,{$w:"40%",$h:"20px"}),l.jsx(Sg,{}),l.jsx(tr,{$h:"120px",style:{borderRadius:"8px"}})]})]})}function xC({slot:e,selectedFile:t,onFileSelect:n,onClearFile:r,disabled:o}){const i=M.useRef(null),s=!!t;return l.jsxs(W4,{$hasFile:s,children:[l.jsx(H4,{children:e.label}),s&&l.jsxs(K4,{children:[l.jsx(zd,{size:16,style:{color:"#B45A14",flexShrink:0}}),l.jsxs(X4,{children:[l.jsx(J4,{children:t.name}),l.jsxs(Z4,{children:[gC(t.size)," · Será comprimido ao enviar"]})]}),l.jsx(eC,{type:"button",onClick:()=>r(e.key),disabled:o,children:l.jsx(dx,{size:13})})]}),l.jsxs(q4,{htmlFor:`doc-input-${e.key}`,children:[l.jsx(G4,{$hasFile:s,children:l.jsx(fx,{size:22})}),l.jsx(Q4,{children:s?"Trocar arquivo":"Selecionar arquivo"}),l.jsx(Y4,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),l.jsx("input",{ref:i,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:o,onChange:a=>{var f;const c=(f=a.target.files)==null?void 0:f[0];if(c){if(c.size>3*1024*1024){ue.error("Arquivo muito grande. O limite é 3 MB.");return}n(e.key,c),a.target.value=""}}}),l.jsx(_o,{children:"Imagens serão comprimidas automaticamente antes do envio."})]})}function vC(){const e=Ar(),[t,n]=M.useState([]),[r,o]=M.useState([]),[i,s]=M.useState([]),[a,c]=M.useState(!0),[f,u]=M.useState(!1),[d,p]=M.useState(0),[m,h]=M.useState(""),[b,k]=M.useState("plan"),[g,y]=M.useState(""),[v,$]=M.useState([]),[C,_]=M.useState({}),[F,x]=M.useState(""),S=M.useRef(null),{register:T,handleSubmit:A,setValue:R,watch:N,formState:{errors:O}}=bc({resolver:Cx(aC),defaultValues:{corporate_name:"",cnpj:"",email:"",state_registration:"",trade_name:"",phone:"",benefit_type:"food",notes:"",partner_id:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",bank_bank_name:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}}),E=!!N("bank_bank_name");M.useEffect(()=>{(async()=>{c(!0);try{await Promise.all([!zi||zi.length===0?ut.get("/plans?limit=100").then(({data:te})=>{zi=te.data??[]}).catch(()=>{ue.error("Erro ao carregar planos."),zi=[]}):Promise.resolve(),!Oi||Oi.length===0?ut.get("/flags?limit=100").then(({data:te})=>{Oi=te.data??[]}).catch(()=>{ue.error("Erro ao carregar bandeiras."),Oi=[]}):Promise.resolve(),!Ni||Ni.length===0?ut.get("/users?role=partner&limit=100").then(({data:te})=>{Ni=te.data??[]}).catch(()=>{Ni=[]}):Promise.resolve()])}finally{n(zi??[]),o(Oi??[]),s(Ni??[]),c(!1)}})()},[]);const w=(W,te)=>{_(ee=>({...ee,[W]:te}))},I=W=>{_(te=>{const ee={...te};return delete ee[W],ee})},P=W=>{const te=W.target.value;x(pC(te)),S.current&&clearTimeout(S.current),S.current=setTimeout(()=>{R("cnpj",wu(te),{shouldValidate:!0})},400)},Q=r.filter(W=>v.includes(W.id)).reduce((W,te)=>W+parseFloat(te.price||0),0),V=t.find(W=>W.id===g),Y=async W=>{var te,ee,ie,ae;if(b==="plan"&&!g){ue.error("Selecione um plano para continuar.");return}if(b==="individual"&&v.length===0){ue.error("Selecione ao menos uma bandeira.");return}u(!0),p(0),h("compressing");try{const de=Object.keys(C).length>0,we={};if(de){const fe=Object.entries(C);for(let ve=0;ve<fe.length;ve++){const[Ye,Ke]=fe[ve];we[Ye]=await fC(Ke),p(Math.round((ve+1)/fe.length*20))}}h("uploading");const Me={corporate_name:W.corporate_name,cnpj:wu(W.cnpj||F),benefit_type:W.benefit_type,trade_name:W.trade_name||void 0,email:W.email||void 0,state_registration:W.state_registration||void 0,phone:wu(W.phone)||void 0,notes:W.notes||void 0,partner_id:W.partner_id||void 0,address_street:W.address_street||void 0,address_number:W.address_number||void 0,address_complement:W.address_complement||void 0,address_neighborhood:W.address_neighborhood||void 0,address_city:W.address_city||void 0,address_state:W.address_state||void 0,address_zip:W.address_zip||void 0,...b==="plan"?{plan_id:g}:{flag_ids:v},...E?{bank_name:W.bank_bank_name,agency:W.bank_agency,agency_digit:W.bank_agency_digit||void 0,account:W.bank_account,account_digit:W.bank_account_digit||void 0,account_type:W.bank_account_type}:{}};Object.keys(Me).forEach(fe=>Me[fe]===void 0&&delete Me[fe]);const ft=new FormData;ft.append("data",JSON.stringify(Me)),we.contrato&&ft.append("contrato",we.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(fe=>{we[fe]&&ft.append("documentos",we[fe])});const{data:Ee}=await Jf.post("/onboarding",ft,{onUploadProgress:fe=>{const ve=Math.round(fe.loaded/(fe.total||1)*70);p(20+ve),fe.loaded>=fe.total&&h("processing")}});p(100),ue.success(`Cliente cadastrado! Protocolo: ${((ee=(te=Ee.data)==null?void 0:te.client)==null?void 0:ee.protocol)??""}`,{autoClose:5e3});const Be=(ae=(ie=Ee.data)==null?void 0:ie.client)==null?void 0:ae.id;e(Be?`/clientes/${Be}`:"/clientes",{replace:!0})}catch(de){p(0),h(""),ue.error(Yn(de,"Erro ao cadastrar cliente."))}finally{u(!1)}},G=()=>f?m==="compressing"?l.jsxs(l.Fragment,{children:[l.jsx($u,{}),"Comprimindo imagens…"]}):m==="processing"?l.jsxs(l.Fragment,{children:[l.jsx($u,{}),"Processando…"]}):l.jsxs(l.Fragment,{children:[l.jsx($u,{}),"Enviando… ",d,"%"]}):l.jsxs(l.Fragment,{children:[l.jsx(ux,{size:15}),"Cadastrar Cliente"]});if(a)return l.jsx(yC,{});const D=W=>{var te;return(te=O[W])==null?void 0:te.message};return l.jsxs(l.Fragment,{children:[l.jsxs(nv,{children:[l.jsxs(rv,{children:[l.jsxs(w4,{type:"button",onClick:()=>e("/clientes"),children:[l.jsx(Zf,{size:15})," Voltar"]}),l.jsxs(ov,{children:[l.jsx(S4,{children:"Novo Cliente"}),l.jsx(k4,{children:"Preencha os dados para iniciar o onboarding"})]})]}),l.jsxs("form",{id:"create-client-form",onSubmit:A(Y),noValidate:!0,children:[l.jsxs(ko,{style:{marginBottom:"24px"},children:[l.jsxs(Ai,{children:[l.jsx(Ri,{children:l.jsx(ep,{size:18})}),l.jsx(Pi,{children:"Dados da Empresa"})]}),l.jsxs(Ya,{children:[l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"corporate_name",children:"Razão Social *"}),l.jsx(ht,{id:"corporate_name",type:"text",placeholder:"Razão social completa",$hasError:!!D("corporate_name"),disabled:f,...T("corporate_name")}),D("corporate_name")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),D("corporate_name")]})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"cnpj",children:"CNPJ *"}),l.jsx(ht,{id:"cnpj",type:"text",placeholder:"00.000.000/0001-00",value:F,$hasError:!!D("cnpj"),disabled:f,onChange:P}),D("cnpj")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),D("cnpj")]})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"trade_name",children:"Nome Fantasia"}),l.jsx(ht,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",disabled:f,...T("trade_name")})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"state_registration",children:"Inscrição Estadual"}),l.jsx(ht,{id:"state_registration",type:"text",placeholder:"Inscrição estadual (opcional)",$hasError:!!D("state_registration"),disabled:f,...T("state_registration")}),D("state_registration")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),D("state_registration")]})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"phone",children:"Telefone"}),l.jsx(ht,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",$hasError:!!D("phone"),disabled:f,...T("phone",{onChange:W=>R("phone",hC(W.target.value))})}),D("phone")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),D("phone")]})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"email",children:"E-mail *"}),l.jsx(ht,{id:"email",type:"email",placeholder:"contato@empresa.com.br",$hasError:!!D("email"),disabled:f,...T("email")}),D("email")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),D("email")]})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),l.jsx(Sa,{id:"benefit_type",$hasError:!!D("benefit_type"),disabled:f,...T("benefit_type"),children:cC.map(W=>l.jsx("option",{value:W.value,children:W.label},W.value))}),D("benefit_type")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),D("benefit_type")]})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"partner_id",children:"Parceiro Vinculado"}),l.jsxs(Sa,{id:"partner_id",disabled:f,...T("partner_id"),children:[l.jsx("option",{value:"",children:"Sem parceiro vinculado"}),i.map(W=>l.jsx("option",{value:W.id,children:W.name},W.id))]}),l.jsxs(_o,{children:[i.length," parceiro",i.length!==1?"s":""," disponível",i.length!==1?"is":""]})]}),l.jsx(yg,{children:l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"notes",children:"Observações"}),l.jsx(_4,{id:"notes",placeholder:"Observações internas…",disabled:f,...T("notes")}),l.jsx(_o,{children:"Visível apenas para a equipe interna."})]})})]})]}),l.jsxs(ko,{style:{marginBottom:"24px"},children:[l.jsxs(Ai,{children:[l.jsx(Ri,{children:l.jsx(xm,{size:18})}),l.jsx(Pi,{children:"Contratação"})]}),l.jsxs(C4,{children:[l.jsxs(xg,{type:"button",$active:b==="plan",disabled:f,onClick:()=>{k("plan"),$([])},children:[l.jsx(xm,{size:16})," Escolher Plano"]}),l.jsxs(xg,{type:"button",$active:b==="individual",disabled:f,onClick:()=>{k("individual"),y("")},children:[l.jsx(o_,{size:16})," Bandeiras Individuais"]})]}),b==="plan"&&l.jsxs(l.Fragment,{children:[t.length===0?l.jsx(kg,{children:l.jsx(_g,{children:"Nenhum plano ativo encontrado."})}):l.jsx(N4,{children:t.map(W=>{var ee;const te=g===W.id;return l.jsxs(F4,{$selected:te,onClick:()=>!f&&y(W.id),children:[l.jsxs(T4,{children:[l.jsx(A4,{children:W.name}),l.jsx(R4,{children:ka(W.price)})]}),W.description&&l.jsx(P4,{children:W.description}),((ee=W.flags)==null?void 0:ee.length)>0&&l.jsx(z4,{children:W.flags.map(ie=>l.jsx(O4,{children:ie.name},ie.id))})]},W.id)})}),V&&l.jsxs(vg,{children:[l.jsxs(bg,{children:["Plano selecionado: ",V.name]}),l.jsx($g,{children:ka(V.price)})]})]}),b==="individual"&&l.jsxs(l.Fragment,{children:[l.jsx(_o,{style:{marginBottom:"12px",display:"block"},children:"Selecione ao menos uma bandeira. O valor total será a soma dos preços individuais."}),r.length===0?l.jsx(kg,{children:l.jsx(_g,{children:"Nenhuma bandeira ativa encontrada."})}):l.jsx(I4,{children:r.map(W=>{const te=v.includes(W.id),ee=()=>{f||$(ie=>te?ie.filter(ae=>ae!==W.id):[...ie,W.id])};return l.jsxs(L4,{$checked:te,onClick:ee,children:[l.jsx(D4,{$checked:te,children:te&&l.jsx(Jk,{size:11,color:"#fff",strokeWidth:3})}),l.jsxs(U4,{children:[l.jsx(M4,{children:W.name}),l.jsx(B4,{children:ka(W.price)})]})]},W.id)})}),v.length>0&&l.jsxs(vg,{children:[l.jsxs(bg,{children:[v.length," bandeira",v.length!==1?"s":""," selecionada",v.length!==1?"s":""]}),l.jsx($g,{children:ka(Q)})]})]})]}),l.jsxs(ko,{style:{marginBottom:"24px"},children:[l.jsxs(Ai,{children:[l.jsx(Ri,{children:l.jsx(np,{size:18})}),l.jsx(Pi,{children:"Endereço"})]}),l.jsxs(Ya,{children:[l.jsx(yg,{children:l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"address_street",children:"Logradouro"}),l.jsx(ht,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",$hasError:!!D("address_street"),disabled:f,...T("address_street")}),D("address_street")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),D("address_street")]})]})}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"address_number",children:"Número"}),l.jsx(ht,{id:"address_number",type:"text",placeholder:"Nº",$hasError:!!D("address_number"),disabled:f,...T("address_number")}),D("address_number")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),D("address_number")]})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"address_complement",children:"Complemento"}),l.jsx(ht,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",disabled:f,...T("address_complement")})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"address_neighborhood",children:"Bairro"}),l.jsx(ht,{id:"address_neighborhood",type:"text",placeholder:"Bairro",disabled:f,...T("address_neighborhood")})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"address_city",children:"Cidade"}),l.jsx(ht,{id:"address_city",type:"text",placeholder:"Cidade",disabled:f,...T("address_city")})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"address_state",children:"UF"}),l.jsxs(Sa,{id:"address_state",disabled:f,...T("address_state"),children:[l.jsx("option",{value:"",children:"Selecione"}),dC.map(W=>l.jsx("option",{value:W,children:W},W))]})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"address_zip",children:"CEP"}),l.jsx(ht,{id:"address_zip",type:"text",placeholder:"00000-000",$hasError:!!D("address_zip"),disabled:f,...T("address_zip",{onChange:W=>R("address_zip",mC(W.target.value))})}),D("address_zip")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),D("address_zip")]})]})]})]}),l.jsxs(ko,{style:{marginBottom:"24px"},children:[l.jsxs(Ai,{children:[l.jsx(Ri,{children:l.jsx(tp,{size:18})}),l.jsx(Pi,{children:"Conta Bancária"})]}),l.jsxs(E4,{children:[l.jsx(j4,{children:"Dados Bancários"}),E&&l.jsx(_o,{style:{marginBottom:"12px",display:"block"},children:"Agência e conta são obrigatórios quando o banco é informado."}),l.jsxs(Ya,{children:[l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),l.jsx(ht,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",$hasError:!!D("bank_bank_name"),disabled:f,...T("bank_bank_name")}),D("bank_bank_name")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),D("bank_bank_name")]})]}),l.jsxs(Oe,{children:[l.jsxs(We,{htmlFor:"bank_agency",children:["Agência ",E&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(ht,{id:"bank_agency",type:"text",placeholder:"0000",$hasError:!!D("bank_agency"),disabled:f,...T("bank_agency")}),D("bank_agency")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),D("bank_agency")]})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),l.jsx(ht,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,disabled:f,...T("bank_agency_digit")})]}),l.jsxs(Oe,{children:[l.jsxs(We,{htmlFor:"bank_account",children:["Conta ",E&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(ht,{id:"bank_account",type:"text",placeholder:"000000",$hasError:!!D("bank_account"),disabled:f,...T("bank_account")}),D("bank_account")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),D("bank_account")]})]}),l.jsxs(Oe,{children:[l.jsx(We,{htmlFor:"bank_account_digit",children:"Dígito Conta"}),l.jsx(ht,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,disabled:f,...T("bank_account_digit")})]}),l.jsxs(Oe,{children:[l.jsxs(We,{htmlFor:"bank_account_type",children:["Tipo de Conta ",E&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(Sa,{id:"bank_account_type",$hasError:!!D("bank_account_type"),disabled:f,...T("bank_account_type"),children:uC.map(W=>l.jsx("option",{value:W.value,children:W.label},W.value))}),D("bank_account_type")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),D("bank_account_type")]})]})]})]})]}),l.jsxs(ko,{style:{marginBottom:"24px"},children:[l.jsxs(Ai,{children:[l.jsx(Ri,{children:l.jsx(Al,{size:18})}),l.jsx(Pi,{children:"Documentos"})]}),l.jsx(_o,{style:{marginBottom:"16px",display:"block"},children:"Documentos são opcionais e podem ser adicionados depois pela edição do cliente."}),l.jsx(V4,{children:lC.map(W=>l.jsx(xC,{slot:W,selectedFile:C[W.key],onFileSelect:w,onClearFile:I,disabled:f},W.key))})]})]})]}),l.jsxs(tC,{children:[l.jsxs(nC,{type:"button",disabled:f,onClick:()=>e("/clientes"),children:[l.jsx(xc,{size:15})," Cancelar"]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px"},children:[f&&l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",width:"220px"},children:[l.jsx(oC,{children:l.jsx(iC,{$percent:d})}),l.jsxs(sC,{children:[d,"%"]})]}),l.jsx(rC,{type:"submit",form:"create-client-form",$isSubmitting:f,disabled:f,children:G()})]})]})]})}const nr=({title:e})=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center",justifyContent:"center",minHeight:"60vh",color:"#7a6455"},children:[l.jsx("p",{style:{fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Em construção"}),l.jsx("p",{style:{fontSize:"22px",fontWeight:"700",fontFamily:"serif"},children:e})]});function bC(){const e=window.location.hostname.includes("github.io"),t=e?R2:A2,n=e?{}:{basename:"/bgrepresentacoes-web/"};return l.jsxs(Lw,{theme:Jh,children:[l.jsx(sS,{}),l.jsx(t,{...n,children:l.jsxs(Uk,{children:[l.jsx(Zw,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",style:{fontFamily:Jh.typography.fontFamily.sans}}),l.jsxs(S2,{children:[l.jsx(He,{path:"/login",element:l.jsx(Z5,{})}),l.jsx(He,{element:l.jsx(su,{}),children:l.jsx(He,{path:"/alterar-senha",element:l.jsx(FE,{})})}),l.jsx(He,{element:l.jsx(su,{}),children:l.jsxs(He,{element:l.jsx(vm,{}),children:[l.jsx(He,{path:"/dashboard",element:l.jsx(nr,{title:"Dashboard"})}),l.jsx(He,{path:"/clientes",element:l.jsx(lj,{})}),l.jsx(He,{path:"/clientes/:id",element:l.jsx(Dj,{})}),l.jsx(He,{path:"/clientes/:id/editar",element:l.jsx(d4,{})}),l.jsx(He,{path:"/onboarding",element:l.jsx(vC,{})}),l.jsx(He,{path:"/vendas",element:l.jsx(nr,{title:"Vendas"})}),l.jsx(He,{path:"/vendas/:id",element:l.jsx(nr,{title:"Detalhe da Venda"})}),l.jsx(He,{path:"/perfil",element:l.jsx(nr,{title:"Meu Perfil"})})]})}),l.jsx(He,{element:l.jsx(su,{allowedRoles:["admin"]}),children:l.jsxs(He,{element:l.jsx(vm,{}),children:[l.jsx(He,{path:"/usuarios",element:l.jsx(nr,{title:"Usuários"})}),l.jsx(He,{path:"/bandeiras",element:l.jsx(nr,{title:"Bandeiras"})}),l.jsx(He,{path:"/planos",element:l.jsx(nr,{title:"Planos"})}),l.jsx(He,{path:"/relatorios",element:l.jsx(nr,{title:"Relatórios"})})]})}),l.jsx(He,{path:"/",element:l.jsx($l,{to:"/dashboard",replace:!0})}),l.jsx(He,{path:"*",element:l.jsx($l,{to:"/dashboard",replace:!0})})]})]})})]})}Su.createRoot(document.getElementById("root")).render(l.jsx(se.StrictMode,{children:l.jsx(bC,{})}));
