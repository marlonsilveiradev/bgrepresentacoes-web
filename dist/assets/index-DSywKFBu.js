function Cb(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function F0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var T0={exports:{}},yc={},A0={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),Pb=Symbol.for("react.portal"),Fb=Symbol.for("react.fragment"),Tb=Symbol.for("react.strict_mode"),Ab=Symbol.for("react.profiler"),Rb=Symbol.for("react.provider"),Ob=Symbol.for("react.context"),zb=Symbol.for("react.forward_ref"),Nb=Symbol.for("react.suspense"),Lb=Symbol.for("react.memo"),Db=Symbol.for("react.lazy"),ih=Symbol.iterator;function Ib(e){return e===null||typeof e!="object"?null:(e=ih&&e[ih]||e["@@iterator"],typeof e=="function"?e:null)}var R0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O0=Object.assign,z0={};function $i(e,t,n){this.props=e,this.context=t,this.refs=z0,this.updater=n||R0}$i.prototype.isReactComponent={};$i.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N0(){}N0.prototype=$i.prototype;function Cf(e,t,n){this.props=e,this.context=t,this.refs=z0,this.updater=n||R0}var Pf=Cf.prototype=new N0;Pf.constructor=Cf;O0(Pf,$i.prototype);Pf.isPureReactComponent=!0;var sh=Array.isArray,L0=Object.prototype.hasOwnProperty,Ff={current:null},D0={key:!0,ref:!0,__self:!0,__source:!0};function I0(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)L0.call(t,r)&&!D0.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:ta,type:e,key:i,ref:s,props:o,_owner:Ff.current}}function Mb(e,t){return{$$typeof:ta,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tf(e){return typeof e=="object"&&e!==null&&e.$$typeof===ta}function Ub(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ah=/\/+/g;function eu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ub(""+e.key):t.toString(36)}function tl(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ta:case Pb:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+eu(s,0):r,sh(o)?(n="",e!=null&&(n=e.replace(ah,"$&/")+"/"),tl(o,t,n,"",function(f){return f})):o!=null&&(Tf(o)&&(o=Mb(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(ah,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",sh(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+eu(i,l);s+=tl(i,t,n,c,o)}else if(c=Ib(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+eu(i,l++),s+=tl(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ma(e,t,n){if(e==null)return e;var r=[],o=0;return tl(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Bb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Rt={current:null},nl={transition:null},Wb={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:nl,ReactCurrentOwner:Ff};function M0(){throw Error("act(...) is not supported in production builds of React.")}xe.Children={map:ma,forEach:function(e,t,n){ma(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ma(e,function(){t++}),t},toArray:function(e){return ma(e,function(t){return t})||[]},only:function(e){if(!Tf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};xe.Component=$i;xe.Fragment=Fb;xe.Profiler=Ab;xe.PureComponent=Cf;xe.StrictMode=Tb;xe.Suspense=Nb;xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wb;xe.act=M0;xe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=O0({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Ff.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)L0.call(t,c)&&!D0.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var f=0;f<c;f++)l[f]=arguments[f+2];r.children=l}return{$$typeof:ta,type:e.type,key:o,ref:i,props:r,_owner:s}};xe.createContext=function(e){return e={$$typeof:Ob,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rb,_context:e},e.Consumer=e};xe.createElement=I0;xe.createFactory=function(e){var t=I0.bind(null,e);return t.type=e,t};xe.createRef=function(){return{current:null}};xe.forwardRef=function(e){return{$$typeof:zb,render:e}};xe.isValidElement=Tf;xe.lazy=function(e){return{$$typeof:Db,_payload:{_status:-1,_result:e},_init:Bb}};xe.memo=function(e,t){return{$$typeof:Lb,type:e,compare:t===void 0?null:t}};xe.startTransition=function(e){var t=nl.transition;nl.transition={};try{e()}finally{nl.transition=t}};xe.unstable_act=M0;xe.useCallback=function(e,t){return Rt.current.useCallback(e,t)};xe.useContext=function(e){return Rt.current.useContext(e)};xe.useDebugValue=function(){};xe.useDeferredValue=function(e){return Rt.current.useDeferredValue(e)};xe.useEffect=function(e,t){return Rt.current.useEffect(e,t)};xe.useId=function(){return Rt.current.useId()};xe.useImperativeHandle=function(e,t,n){return Rt.current.useImperativeHandle(e,t,n)};xe.useInsertionEffect=function(e,t){return Rt.current.useInsertionEffect(e,t)};xe.useLayoutEffect=function(e,t){return Rt.current.useLayoutEffect(e,t)};xe.useMemo=function(e,t){return Rt.current.useMemo(e,t)};xe.useReducer=function(e,t,n){return Rt.current.useReducer(e,t,n)};xe.useRef=function(e){return Rt.current.useRef(e)};xe.useState=function(e){return Rt.current.useState(e)};xe.useSyncExternalStore=function(e,t,n){return Rt.current.useSyncExternalStore(e,t,n)};xe.useTransition=function(){return Rt.current.useTransition()};xe.version="18.3.1";A0.exports=xe;var L=A0.exports;const le=F0(L),Vb=Cb({__proto__:null,default:le},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hb=L,qb=Symbol.for("react.element"),Gb=Symbol.for("react.fragment"),Yb=Object.prototype.hasOwnProperty,Qb=Hb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xb={key:!0,ref:!0,__self:!0,__source:!0};function U0(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Yb.call(t,r)&&!Xb.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:qb,type:e,key:i,ref:s,props:o,_owner:Qb.current}}yc.Fragment=Gb;yc.jsx=U0;yc.jsxs=U0;T0.exports=yc;var a=T0.exports,ld={},B0={exports:{}},nn={},W0={exports:{}},V0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,z){var I=D.length;D.push(z);e:for(;0<I;){var Y=I-1>>>1,B=D[Y];if(0<o(B,z))D[Y]=z,D[I]=B,I=Y;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],I=D.pop();if(I!==z){D[0]=I;e:for(var Y=0,B=D.length,K=B>>>1;Y<K;){var G=2*(Y+1)-1,V=D[G],Q=G+1,q=D[Q];if(0>o(V,I))Q<B&&0>o(q,V)?(D[Y]=q,D[Q]=I,Y=Q):(D[Y]=V,D[G]=I,Y=G);else if(Q<B&&0>o(q,I))D[Y]=q,D[Q]=I,Y=Q;else break e}}return z}function o(D,z){var I=D.sortIndex-z.sortIndex;return I!==0?I:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],f=[],u=1,d=null,p=3,m=!1,g=!1,b=!1,$=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var z=n(f);z!==null;){if(z.callback===null)r(f);else if(z.startTime<=D)r(f),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(f)}}function w(D){if(b=!1,x(D),!g)if(n(c)!==null)g=!0,E(C);else{var z=n(f);z!==null&&k(w,z.startTime-D)}}function C(D,z){g=!1,b&&(b=!1,h(v),v=-1),m=!0;var I=p;try{for(x(z),d=n(c);d!==null&&(!(d.expirationTime>z)||D&&!A());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,p=d.priorityLevel;var B=Y(d.expirationTime<=z);z=e.unstable_now(),typeof B=="function"?d.callback=B:d===n(c)&&r(c),x(z)}else r(c);d=n(c)}if(d!==null)var K=!0;else{var G=n(f);G!==null&&k(w,G.startTime-z),K=!1}return K}finally{d=null,p=I,m=!1}}var _=!1,P=null,v=-1,j=5,T=-1;function A(){return!(e.unstable_now()-T<j)}function R(){if(P!==null){var D=e.unstable_now();T=D;var z=!0;try{z=P(!0,D)}finally{z?N():(_=!1,P=null)}}else _=!1}var N;if(typeof y=="function")N=function(){y(R)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,M=F.port2;F.port1.onmessage=R,N=function(){M.postMessage(null)}}else N=function(){$(R,0)};function E(D){P=D,_||(_=!0,N())}function k(D,z){v=$(function(){D(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,E(C))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(D){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var I=p;p=z;try{return D()}finally{p=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=p;p=D;try{return z()}finally{p=I}},e.unstable_scheduleCallback=function(D,z,I){var Y=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Y+I:Y):I=Y,D){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=I+B,D={id:u++,callback:z,priorityLevel:D,startTime:I,expirationTime:B,sortIndex:-1},I>Y?(D.sortIndex=I,t(f,D),n(c)===null&&D===n(f)&&(b?(h(v),v=-1):b=!0,k(w,I-Y))):(D.sortIndex=B,t(c,D),g||m||(g=!0,E(C))),D},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(D){var z=p;return function(){var I=p;p=z;try{return D.apply(this,arguments)}finally{p=I}}}})(V0);W0.exports=V0;var Kb=W0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jb=L,tn=Kb;function te(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H0=new Set,Es={};function wo(e,t){li(e,t),li(e+"Capture",t)}function li(e,t){for(Es[e]=t,e=0;e<t.length;e++)H0.add(t[e])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cd=Object.prototype.hasOwnProperty,Zb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lh={},ch={};function ew(e){return cd.call(ch,e)?!0:cd.call(lh,e)?!1:Zb.test(e)?ch[e]=!0:(lh[e]=!0,!1)}function tw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nw(e,t,n,r){if(t===null||typeof t>"u"||tw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ot(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){vt[e]=new Ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];vt[t]=new Ot(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){vt[e]=new Ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){vt[e]=new Ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){vt[e]=new Ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){vt[e]=new Ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){vt[e]=new Ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){vt[e]=new Ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){vt[e]=new Ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var Af=/[\-:]([a-z])/g;function Rf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Af,Rf);vt[t]=new Ot(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Af,Rf);vt[t]=new Ot(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Af,Rf);vt[t]=new Ot(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){vt[e]=new Ot(e,1,!1,e.toLowerCase(),null,!1,!1)});vt.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){vt[e]=new Ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function Of(e,t,n,r){var o=vt.hasOwnProperty(t)?vt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nw(t,n,o,r)&&(n=null),r||o===null?ew(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nr=Jb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ga=Symbol.for("react.element"),Io=Symbol.for("react.portal"),Mo=Symbol.for("react.fragment"),zf=Symbol.for("react.strict_mode"),ud=Symbol.for("react.profiler"),q0=Symbol.for("react.provider"),G0=Symbol.for("react.context"),Nf=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),fd=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),Y0=Symbol.for("react.offscreen"),uh=Symbol.iterator;function Oi(e){return e===null||typeof e!="object"?null:(e=uh&&e[uh]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Object.assign,tu;function es(e){if(tu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tu=t&&t[1]||""}return`
`+tu+e}var nu=!1;function ru(e,t){if(!e||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?es(e):""}function rw(e){switch(e.tag){case 5:return es(e.type);case 16:return es("Lazy");case 13:return es("Suspense");case 19:return es("SuspenseList");case 0:case 2:case 15:return e=ru(e.type,!1),e;case 11:return e=ru(e.type.render,!1),e;case 1:return e=ru(e.type,!0),e;default:return""}}function pd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mo:return"Fragment";case Io:return"Portal";case ud:return"Profiler";case zf:return"StrictMode";case dd:return"Suspense";case fd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case G0:return(e.displayName||"Context")+".Consumer";case q0:return(e._context.displayName||"Context")+".Provider";case Nf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lf:return t=e.displayName||null,t!==null?t:pd(e.type)||"Memo";case ur:t=e._payload,e=e._init;try{return pd(e(t))}catch{}}return null}function ow(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pd(t);case 8:return t===zf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Q0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function iw(e){var t=Q0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ya(e){e._valueTracker||(e._valueTracker=iw(e))}function X0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Q0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hd(e,t){var n=t.checked;return Ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function dh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function K0(e,t){t=t.checked,t!=null&&Of(e,"checked",t,!1)}function md(e,t){K0(e,t);var n=Rr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gd(e,t.type,n):t.hasOwnProperty("defaultValue")&&gd(e,t.type,Rr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gd(e,t,n){(t!=="number"||Cl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ts=Array.isArray;function Zo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(te(91));return Ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ph(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(te(92));if(ts(n)){if(1<n.length)throw Error(te(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rr(n)}}function J0(e,t){var n=Rr(t.value),r=Rr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Z0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Z0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xa,ey=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sw=["Webkit","ms","Moz","O"];Object.keys(us).forEach(function(e){sw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),us[t]=us[e]})});function ty(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||us.hasOwnProperty(e)&&us[e]?(""+t).trim():t+"px"}function ny(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ty(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var aw=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(e,t){if(t){if(aw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(te(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(te(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(te(61))}if(t.style!=null&&typeof t.style!="object")throw Error(te(62))}}function bd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wd=null;function Df(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $d=null,ei=null,ti=null;function mh(e){if(e=oa(e)){if(typeof $d!="function")throw Error(te(280));var t=e.stateNode;t&&(t=$c(t),$d(e.stateNode,e.type,t))}}function ry(e){ei?ti?ti.push(e):ti=[e]:ei=e}function oy(){if(ei){var e=ei,t=ti;if(ti=ei=null,mh(e),t)for(e=0;e<t.length;e++)mh(t[e])}}function iy(e,t){return e(t)}function sy(){}var ou=!1;function ay(e,t,n){if(ou)return e(t,n);ou=!0;try{return iy(e,t,n)}finally{ou=!1,(ei!==null||ti!==null)&&(sy(),oy())}}function Ps(e,t){var n=e.stateNode;if(n===null)return null;var r=$c(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(te(231,t,typeof n));return n}var kd=!1;if(Jn)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){kd=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{kd=!1}function lw(e,t,n,r,o,i,s,l,c){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(u){this.onError(u)}}var ds=!1,Pl=null,Fl=!1,Sd=null,cw={onError:function(e){ds=!0,Pl=e}};function uw(e,t,n,r,o,i,s,l,c){ds=!1,Pl=null,lw.apply(cw,arguments)}function dw(e,t,n,r,o,i,s,l,c){if(uw.apply(this,arguments),ds){if(ds){var f=Pl;ds=!1,Pl=null}else throw Error(te(198));Fl||(Fl=!0,Sd=f)}}function $o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ly(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gh(e){if($o(e)!==e)throw Error(te(188))}function fw(e){var t=e.alternate;if(!t){if(t=$o(e),t===null)throw Error(te(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return gh(o),e;if(i===r)return gh(o),t;i=i.sibling}throw Error(te(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(te(189))}}if(n.alternate!==r)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?e:t}function cy(e){return e=fw(e),e!==null?uy(e):null}function uy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uy(e);if(t!==null)return t;e=e.sibling}return null}var dy=tn.unstable_scheduleCallback,yh=tn.unstable_cancelCallback,pw=tn.unstable_shouldYield,hw=tn.unstable_requestPaint,Xe=tn.unstable_now,mw=tn.unstable_getCurrentPriorityLevel,If=tn.unstable_ImmediatePriority,fy=tn.unstable_UserBlockingPriority,Tl=tn.unstable_NormalPriority,gw=tn.unstable_LowPriority,py=tn.unstable_IdlePriority,xc=null,Ln=null;function yw(e){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(xc,e,void 0,(e.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:bw,xw=Math.log,vw=Math.LN2;function bw(e){return e>>>=0,e===0?32:31-(xw(e)/vw|0)|0}var va=64,ba=4194304;function ns(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Al(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=ns(l):(i&=s,i!==0&&(r=ns(i)))}else s=n&~o,s!==0?r=ns(s):i!==0&&(r=ns(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Sn(t),o=1<<n,r|=e[n],t&=~o;return r}function ww(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $w(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Sn(i),l=1<<s,c=o[s];c===-1?(!(l&n)||l&r)&&(o[s]=ww(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function jd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hy(){var e=va;return va<<=1,!(va&4194240)&&(va=64),e}function iu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function na(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Sn(t),e[t]=n}function kw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Sn(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Mf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Sn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Ee=0;function my(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gy,Uf,yy,xy,vy,_d=!1,wa=[],$r=null,kr=null,Sr=null,Fs=new Map,Ts=new Map,fr=[],Sw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xh(e,t){switch(e){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Fs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(t.pointerId)}}function Ni(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=oa(t),t!==null&&Uf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function jw(e,t,n,r,o){switch(t){case"focusin":return $r=Ni($r,e,t,n,r,o),!0;case"dragenter":return kr=Ni(kr,e,t,n,r,o),!0;case"mouseover":return Sr=Ni(Sr,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Fs.set(i,Ni(Fs.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ts.set(i,Ni(Ts.get(i)||null,e,t,n,r,o)),!0}return!1}function by(e){var t=Xr(e.target);if(t!==null){var n=$o(t);if(n!==null){if(t=n.tag,t===13){if(t=ly(n),t!==null){e.blockedOn=t,vy(e.priority,function(){yy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ed(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wd=r,n.target.dispatchEvent(r),wd=null}else return t=oa(n),t!==null&&Uf(t),e.blockedOn=n,!1;t.shift()}return!0}function vh(e,t,n){rl(e)&&n.delete(t)}function _w(){_d=!1,$r!==null&&rl($r)&&($r=null),kr!==null&&rl(kr)&&(kr=null),Sr!==null&&rl(Sr)&&(Sr=null),Fs.forEach(vh),Ts.forEach(vh)}function Li(e,t){e.blockedOn===t&&(e.blockedOn=null,_d||(_d=!0,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,_w)))}function As(e){function t(o){return Li(o,e)}if(0<wa.length){Li(wa[0],e);for(var n=1;n<wa.length;n++){var r=wa[n];r.blockedOn===e&&(r.blockedOn=null)}}for($r!==null&&Li($r,e),kr!==null&&Li(kr,e),Sr!==null&&Li(Sr,e),Fs.forEach(t),Ts.forEach(t),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)by(n),n.blockedOn===null&&fr.shift()}var ni=nr.ReactCurrentBatchConfig,Rl=!0;function Ew(e,t,n,r){var o=Ee,i=ni.transition;ni.transition=null;try{Ee=1,Bf(e,t,n,r)}finally{Ee=o,ni.transition=i}}function Cw(e,t,n,r){var o=Ee,i=ni.transition;ni.transition=null;try{Ee=4,Bf(e,t,n,r)}finally{Ee=o,ni.transition=i}}function Bf(e,t,n,r){if(Rl){var o=Ed(e,t,n,r);if(o===null)mu(e,t,r,Ol,n),xh(e,r);else if(jw(o,e,t,n,r))r.stopPropagation();else if(xh(e,r),t&4&&-1<Sw.indexOf(e)){for(;o!==null;){var i=oa(o);if(i!==null&&gy(i),i=Ed(e,t,n,r),i===null&&mu(e,t,r,Ol,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else mu(e,t,r,null,n)}}var Ol=null;function Ed(e,t,n,r){if(Ol=null,e=Df(r),e=Xr(e),e!==null)if(t=$o(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ly(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ol=e,null}function wy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mw()){case If:return 1;case fy:return 4;case Tl:case gw:return 16;case py:return 536870912;default:return 16}default:return 16}}var yr=null,Wf=null,ol=null;function $y(){if(ol)return ol;var e,t=Wf,n=t.length,r,o="value"in yr?yr.value:yr.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return ol=o.slice(e,1<r?1-r:void 0)}function il(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $a(){return!0}function bh(){return!1}function rn(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$a:bh,this.isPropagationStopped=bh,this}return Ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),t}var ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vf=rn(ki),ra=Ve({},ki,{view:0,detail:0}),Pw=rn(ra),su,au,Di,vc=Ve({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Di&&(Di&&e.type==="mousemove"?(su=e.screenX-Di.screenX,au=e.screenY-Di.screenY):au=su=0,Di=e),su)},movementY:function(e){return"movementY"in e?e.movementY:au}}),wh=rn(vc),Fw=Ve({},vc,{dataTransfer:0}),Tw=rn(Fw),Aw=Ve({},ra,{relatedTarget:0}),lu=rn(Aw),Rw=Ve({},ki,{animationName:0,elapsedTime:0,pseudoElement:0}),Ow=rn(Rw),zw=Ve({},ki,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nw=rn(zw),Lw=Ve({},ki,{data:0}),$h=rn(Lw),Dw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mw[e])?!!t[e]:!1}function Hf(){return Uw}var Bw=Ve({},ra,{key:function(e){if(e.key){var t=Dw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Iw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ww=rn(Bw),Vw=Ve({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=rn(Vw),Hw=Ve({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),qw=rn(Hw),Gw=Ve({},ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yw=rn(Gw),Qw=Ve({},vc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xw=rn(Qw),Kw=[9,13,27,32],qf=Jn&&"CompositionEvent"in window,fs=null;Jn&&"documentMode"in document&&(fs=document.documentMode);var Jw=Jn&&"TextEvent"in window&&!fs,ky=Jn&&(!qf||fs&&8<fs&&11>=fs),Sh=" ",jh=!1;function Sy(e,t){switch(e){case"keyup":return Kw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Uo=!1;function Zw(e,t){switch(e){case"compositionend":return jy(t);case"keypress":return t.which!==32?null:(jh=!0,Sh);case"textInput":return e=t.data,e===Sh&&jh?null:e;default:return null}}function e2(e,t){if(Uo)return e==="compositionend"||!qf&&Sy(e,t)?(e=$y(),ol=Wf=yr=null,Uo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ky&&t.locale!=="ko"?null:t.data;default:return null}}var t2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!t2[e.type]:t==="textarea"}function _y(e,t,n,r){ry(r),t=zl(t,"onChange"),0<t.length&&(n=new Vf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ps=null,Rs=null;function n2(e){Ly(e,0)}function bc(e){var t=Vo(e);if(X0(t))return e}function r2(e,t){if(e==="change")return t}var Ey=!1;if(Jn){var cu;if(Jn){var uu="oninput"in document;if(!uu){var Eh=document.createElement("div");Eh.setAttribute("oninput","return;"),uu=typeof Eh.oninput=="function"}cu=uu}else cu=!1;Ey=cu&&(!document.documentMode||9<document.documentMode)}function Ch(){ps&&(ps.detachEvent("onpropertychange",Cy),Rs=ps=null)}function Cy(e){if(e.propertyName==="value"&&bc(Rs)){var t=[];_y(t,Rs,e,Df(e)),ay(n2,t)}}function o2(e,t,n){e==="focusin"?(Ch(),ps=t,Rs=n,ps.attachEvent("onpropertychange",Cy)):e==="focusout"&&Ch()}function i2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bc(Rs)}function s2(e,t){if(e==="click")return bc(t)}function a2(e,t){if(e==="input"||e==="change")return bc(t)}function l2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var En=typeof Object.is=="function"?Object.is:l2;function Os(e,t){if(En(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!cd.call(t,o)||!En(e[o],t[o]))return!1}return!0}function Ph(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fh(e,t){var n=Ph(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ph(n)}}function Py(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Py(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fy(){for(var e=window,t=Cl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Cl(e.document)}return t}function Gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function c2(e){var t=Fy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Py(n.ownerDocument.documentElement,n)){if(r!==null&&Gf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Fh(n,i);var s=Fh(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var u2=Jn&&"documentMode"in document&&11>=document.documentMode,Bo=null,Cd=null,hs=null,Pd=!1;function Th(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pd||Bo==null||Bo!==Cl(r)||(r=Bo,"selectionStart"in r&&Gf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hs&&Os(hs,r)||(hs=r,r=zl(Cd,"onSelect"),0<r.length&&(t=new Vf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bo)))}function ka(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wo={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},du={},Ty={};Jn&&(Ty=document.createElement("div").style,"AnimationEvent"in window||(delete Wo.animationend.animation,delete Wo.animationiteration.animation,delete Wo.animationstart.animation),"TransitionEvent"in window||delete Wo.transitionend.transition);function wc(e){if(du[e])return du[e];if(!Wo[e])return e;var t=Wo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ty)return du[e]=t[n];return e}var Ay=wc("animationend"),Ry=wc("animationiteration"),Oy=wc("animationstart"),zy=wc("transitionend"),Ny=new Map,Ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Ny.set(e,t),wo(t,[e])}for(var fu=0;fu<Ah.length;fu++){var pu=Ah[fu],d2=pu.toLowerCase(),f2=pu[0].toUpperCase()+pu.slice(1);Nr(d2,"on"+f2)}Nr(Ay,"onAnimationEnd");Nr(Ry,"onAnimationIteration");Nr(Oy,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(zy,"onTransitionEnd");li("onMouseEnter",["mouseout","mouseover"]);li("onMouseLeave",["mouseout","mouseover"]);li("onPointerEnter",["pointerout","pointerover"]);li("onPointerLeave",["pointerout","pointerover"]);wo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wo("onBeforeInput",["compositionend","keypress","textInput","paste"]);wo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p2=new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));function Rh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dw(r,t,void 0,e),e.currentTarget=null}function Ly(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,f=l.currentTarget;if(l=l.listener,c!==i&&o.isPropagationStopped())break e;Rh(o,l,f),i=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,f=l.currentTarget,l=l.listener,c!==i&&o.isPropagationStopped())break e;Rh(o,l,f),i=c}}}if(Fl)throw e=Sd,Fl=!1,Sd=null,e}function Ae(e,t){var n=t[Od];n===void 0&&(n=t[Od]=new Set);var r=e+"__bubble";n.has(r)||(Dy(t,e,2,!1),n.add(r))}function hu(e,t,n){var r=0;t&&(r|=4),Dy(n,e,r,t)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function zs(e){if(!e[Sa]){e[Sa]=!0,H0.forEach(function(n){n!=="selectionchange"&&(p2.has(n)||hu(n,!1,e),hu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sa]||(t[Sa]=!0,hu("selectionchange",!1,t))}}function Dy(e,t,n,r){switch(wy(t)){case 1:var o=Ew;break;case 4:o=Cw;break;default:o=Bf}n=o.bind(null,t,n,e),o=void 0,!kd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function mu(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;l!==null;){if(s=Xr(l),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}l=l.parentNode}}r=r.return}ay(function(){var f=i,u=Df(n),d=[];e:{var p=Ny.get(e);if(p!==void 0){var m=Vf,g=e;switch(e){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":m=Ww;break;case"focusin":g="focus",m=lu;break;case"focusout":g="blur",m=lu;break;case"beforeblur":case"afterblur":m=lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Tw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=qw;break;case Ay:case Ry:case Oy:m=Ow;break;case zy:m=Yw;break;case"scroll":m=Pw;break;case"wheel":m=Xw;break;case"copy":case"cut":case"paste":m=Nw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=kh}var b=(t&4)!==0,$=!b&&e==="scroll",h=b?p!==null?p+"Capture":null:p;b=[];for(var y=f,x;y!==null;){x=y;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,h!==null&&(w=Ps(y,h),w!=null&&b.push(Ns(y,w,x)))),$)break;y=y.return}0<b.length&&(p=new m(p,g,null,n,u),d.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==wd&&(g=n.relatedTarget||n.fromElement)&&(Xr(g)||g[Zn]))break e;if((m||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=f,g=g?Xr(g):null,g!==null&&($=$o(g),g!==$||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=f),m!==g)){if(b=wh,w="onMouseLeave",h="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(b=kh,w="onPointerLeave",h="onPointerEnter",y="pointer"),$=m==null?p:Vo(m),x=g==null?p:Vo(g),p=new b(w,y+"leave",m,n,u),p.target=$,p.relatedTarget=x,w=null,Xr(u)===f&&(b=new b(h,y+"enter",g,n,u),b.target=x,b.relatedTarget=$,w=b),$=w,m&&g)t:{for(b=m,h=g,y=0,x=b;x;x=jo(x))y++;for(x=0,w=h;w;w=jo(w))x++;for(;0<y-x;)b=jo(b),y--;for(;0<x-y;)h=jo(h),x--;for(;y--;){if(b===h||h!==null&&b===h.alternate)break t;b=jo(b),h=jo(h)}b=null}else b=null;m!==null&&Oh(d,p,m,b,!1),g!==null&&$!==null&&Oh(d,$,g,b,!0)}}e:{if(p=f?Vo(f):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var C=r2;else if(_h(p))if(Ey)C=a2;else{C=i2;var _=o2}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=s2);if(C&&(C=C(e,f))){_y(d,C,n,u);break e}_&&_(e,p,f),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&gd(p,"number",p.value)}switch(_=f?Vo(f):window,e){case"focusin":(_h(_)||_.contentEditable==="true")&&(Bo=_,Cd=f,hs=null);break;case"focusout":hs=Cd=Bo=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,Th(d,n,u);break;case"selectionchange":if(u2)break;case"keydown":case"keyup":Th(d,n,u)}var P;if(qf)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Uo?Sy(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(ky&&n.locale!=="ko"&&(Uo||v!=="onCompositionStart"?v==="onCompositionEnd"&&Uo&&(P=$y()):(yr=u,Wf="value"in yr?yr.value:yr.textContent,Uo=!0)),_=zl(f,v),0<_.length&&(v=new $h(v,e,null,n,u),d.push({event:v,listeners:_}),P?v.data=P:(P=jy(n),P!==null&&(v.data=P)))),(P=Jw?Zw(e,n):e2(e,n))&&(f=zl(f,"onBeforeInput"),0<f.length&&(u=new $h("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:f}),u.data=P))}Ly(d,t)})}function Ns(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ps(e,n),i!=null&&r.unshift(Ns(e,i,o)),i=Ps(e,t),i!=null&&r.push(Ns(e,i,o))),e=e.return}return r}function jo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oh(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,f=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&f!==null&&(l=f,o?(c=Ps(n,i),c!=null&&s.unshift(Ns(n,c,l))):o||(c=Ps(n,i),c!=null&&s.push(Ns(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var h2=/\r\n?/g,m2=/\u0000|\uFFFD/g;function zh(e){return(typeof e=="string"?e:""+e).replace(h2,`
`).replace(m2,"")}function ja(e,t,n){if(t=zh(t),zh(e)!==t&&n)throw Error(te(425))}function Nl(){}var Fd=null,Td=null;function Ad(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rd=typeof setTimeout=="function"?setTimeout:void 0,g2=typeof clearTimeout=="function"?clearTimeout:void 0,Nh=typeof Promise=="function"?Promise:void 0,y2=typeof queueMicrotask=="function"?queueMicrotask:typeof Nh<"u"?function(e){return Nh.resolve(null).then(e).catch(x2)}:Rd;function x2(e){setTimeout(function(){throw e})}function gu(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),As(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);As(t)}function jr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Si=Math.random().toString(36).slice(2),On="__reactFiber$"+Si,Ls="__reactProps$"+Si,Zn="__reactContainer$"+Si,Od="__reactEvents$"+Si,v2="__reactListeners$"+Si,b2="__reactHandles$"+Si;function Xr(e){var t=e[On];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zn]||n[On]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lh(e);e!==null;){if(n=e[On])return n;e=Lh(e)}return t}e=n,n=e.parentNode}return null}function oa(e){return e=e[On]||e[Zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(te(33))}function $c(e){return e[Ls]||null}var zd=[],Ho=-1;function Lr(e){return{current:e}}function Oe(e){0>Ho||(e.current=zd[Ho],zd[Ho]=null,Ho--)}function Fe(e,t){Ho++,zd[Ho]=e.current,e.current=t}var Or={},Et=Lr(Or),Ut=Lr(!1),uo=Or;function ci(e,t){var n=e.type.contextTypes;if(!n)return Or;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Bt(e){return e=e.childContextTypes,e!=null}function Ll(){Oe(Ut),Oe(Et)}function Dh(e,t,n){if(Et.current!==Or)throw Error(te(168));Fe(Et,t),Fe(Ut,n)}function Iy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(te(108,ow(e)||"Unknown",o));return Ve({},n,r)}function Dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Or,uo=Et.current,Fe(Et,e),Fe(Ut,Ut.current),!0}function Ih(e,t,n){var r=e.stateNode;if(!r)throw Error(te(169));n?(e=Iy(e,t,uo),r.__reactInternalMemoizedMergedChildContext=e,Oe(Ut),Oe(Et),Fe(Et,e)):Oe(Ut),Fe(Ut,n)}var Yn=null,kc=!1,yu=!1;function My(e){Yn===null?Yn=[e]:Yn.push(e)}function w2(e){kc=!0,My(e)}function Dr(){if(!yu&&Yn!==null){yu=!0;var e=0,t=Ee;try{var n=Yn;for(Ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Yn=null,kc=!1}catch(o){throw Yn!==null&&(Yn=Yn.slice(e+1)),dy(If,Dr),o}finally{Ee=t,yu=!1}}return null}var qo=[],Go=0,Il=null,Ml=0,an=[],ln=0,fo=null,Qn=1,Xn="";function Vr(e,t){qo[Go++]=Ml,qo[Go++]=Il,Il=e,Ml=t}function Uy(e,t,n){an[ln++]=Qn,an[ln++]=Xn,an[ln++]=fo,fo=e;var r=Qn;e=Xn;var o=32-Sn(r)-1;r&=~(1<<o),n+=1;var i=32-Sn(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Qn=1<<32-Sn(t)+o|n<<o|r,Xn=i+e}else Qn=1<<i|n<<o|r,Xn=e}function Yf(e){e.return!==null&&(Vr(e,1),Uy(e,1,0))}function Qf(e){for(;e===Il;)Il=qo[--Go],qo[Go]=null,Ml=qo[--Go],qo[Go]=null;for(;e===fo;)fo=an[--ln],an[ln]=null,Xn=an[--ln],an[ln]=null,Qn=an[--ln],an[ln]=null}var en=null,Jt=null,Ne=!1,wn=null;function By(e,t){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,en=e,Jt=jr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,en=e,Jt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fo!==null?{id:Qn,overflow:Xn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,en=e,Jt=null,!0):!1;default:return!1}}function Nd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ld(e){if(Ne){var t=Jt;if(t){var n=t;if(!Mh(e,t)){if(Nd(e))throw Error(te(418));t=jr(n.nextSibling);var r=en;t&&Mh(e,t)?By(r,n):(e.flags=e.flags&-4097|2,Ne=!1,en=e)}}else{if(Nd(e))throw Error(te(418));e.flags=e.flags&-4097|2,Ne=!1,en=e}}}function Uh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;en=e}function _a(e){if(e!==en)return!1;if(!Ne)return Uh(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ad(e.type,e.memoizedProps)),t&&(t=Jt)){if(Nd(e))throw Wy(),Error(te(418));for(;t;)By(e,t),t=jr(t.nextSibling)}if(Uh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(te(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Jt=jr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Jt=null}}else Jt=en?jr(e.stateNode.nextSibling):null;return!0}function Wy(){for(var e=Jt;e;)e=jr(e.nextSibling)}function ui(){Jt=en=null,Ne=!1}function Xf(e){wn===null?wn=[e]:wn.push(e)}var $2=nr.ReactCurrentBatchConfig;function Ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var r=n.stateNode}if(!r)throw Error(te(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,e))}return e}function Ea(e,t){throw e=Object.prototype.toString.call(t),Error(te(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bh(e){var t=e._init;return t(e._payload)}function Vy(e){function t(h,y){if(e){var x=h.deletions;x===null?(h.deletions=[y],h.flags|=16):x.push(y)}}function n(h,y){if(!e)return null;for(;y!==null;)t(h,y),y=y.sibling;return null}function r(h,y){for(h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function o(h,y){return h=Pr(h,y),h.index=0,h.sibling=null,h}function i(h,y,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<y?(h.flags|=2,y):x):(h.flags|=2,y)):(h.flags|=1048576,y)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,y,x,w){return y===null||y.tag!==6?(y=Su(x,h.mode,w),y.return=h,y):(y=o(y,x),y.return=h,y)}function c(h,y,x,w){var C=x.type;return C===Mo?u(h,y,x.props.children,w,x.key):y!==null&&(y.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ur&&Bh(C)===y.type)?(w=o(y,x.props),w.ref=Ii(h,y,x),w.return=h,w):(w=fl(x.type,x.key,x.props,null,h.mode,w),w.ref=Ii(h,y,x),w.return=h,w)}function f(h,y,x,w){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=ju(x,h.mode,w),y.return=h,y):(y=o(y,x.children||[]),y.return=h,y)}function u(h,y,x,w,C){return y===null||y.tag!==7?(y=so(x,h.mode,w,C),y.return=h,y):(y=o(y,x),y.return=h,y)}function d(h,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Su(""+y,h.mode,x),y.return=h,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ga:return x=fl(y.type,y.key,y.props,null,h.mode,x),x.ref=Ii(h,null,y),x.return=h,x;case Io:return y=ju(y,h.mode,x),y.return=h,y;case ur:var w=y._init;return d(h,w(y._payload),x)}if(ts(y)||Oi(y))return y=so(y,h.mode,x,null),y.return=h,y;Ea(h,y)}return null}function p(h,y,x,w){var C=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:l(h,y,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ga:return x.key===C?c(h,y,x,w):null;case Io:return x.key===C?f(h,y,x,w):null;case ur:return C=x._init,p(h,y,C(x._payload),w)}if(ts(x)||Oi(x))return C!==null?null:u(h,y,x,w,null);Ea(h,x)}return null}function m(h,y,x,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(x)||null,l(y,h,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ga:return h=h.get(w.key===null?x:w.key)||null,c(y,h,w,C);case Io:return h=h.get(w.key===null?x:w.key)||null,f(y,h,w,C);case ur:var _=w._init;return m(h,y,x,_(w._payload),C)}if(ts(w)||Oi(w))return h=h.get(x)||null,u(y,h,w,C,null);Ea(y,w)}return null}function g(h,y,x,w){for(var C=null,_=null,P=y,v=y=0,j=null;P!==null&&v<x.length;v++){P.index>v?(j=P,P=null):j=P.sibling;var T=p(h,P,x[v],w);if(T===null){P===null&&(P=j);break}e&&P&&T.alternate===null&&t(h,P),y=i(T,y,v),_===null?C=T:_.sibling=T,_=T,P=j}if(v===x.length)return n(h,P),Ne&&Vr(h,v),C;if(P===null){for(;v<x.length;v++)P=d(h,x[v],w),P!==null&&(y=i(P,y,v),_===null?C=P:_.sibling=P,_=P);return Ne&&Vr(h,v),C}for(P=r(h,P);v<x.length;v++)j=m(P,h,v,x[v],w),j!==null&&(e&&j.alternate!==null&&P.delete(j.key===null?v:j.key),y=i(j,y,v),_===null?C=j:_.sibling=j,_=j);return e&&P.forEach(function(A){return t(h,A)}),Ne&&Vr(h,v),C}function b(h,y,x,w){var C=Oi(x);if(typeof C!="function")throw Error(te(150));if(x=C.call(x),x==null)throw Error(te(151));for(var _=C=null,P=y,v=y=0,j=null,T=x.next();P!==null&&!T.done;v++,T=x.next()){P.index>v?(j=P,P=null):j=P.sibling;var A=p(h,P,T.value,w);if(A===null){P===null&&(P=j);break}e&&P&&A.alternate===null&&t(h,P),y=i(A,y,v),_===null?C=A:_.sibling=A,_=A,P=j}if(T.done)return n(h,P),Ne&&Vr(h,v),C;if(P===null){for(;!T.done;v++,T=x.next())T=d(h,T.value,w),T!==null&&(y=i(T,y,v),_===null?C=T:_.sibling=T,_=T);return Ne&&Vr(h,v),C}for(P=r(h,P);!T.done;v++,T=x.next())T=m(P,h,v,T.value,w),T!==null&&(e&&T.alternate!==null&&P.delete(T.key===null?v:T.key),y=i(T,y,v),_===null?C=T:_.sibling=T,_=T);return e&&P.forEach(function(R){return t(h,R)}),Ne&&Vr(h,v),C}function $(h,y,x,w){if(typeof x=="object"&&x!==null&&x.type===Mo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ga:e:{for(var C=x.key,_=y;_!==null;){if(_.key===C){if(C=x.type,C===Mo){if(_.tag===7){n(h,_.sibling),y=o(_,x.props.children),y.return=h,h=y;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ur&&Bh(C)===_.type){n(h,_.sibling),y=o(_,x.props),y.ref=Ii(h,_,x),y.return=h,h=y;break e}n(h,_);break}else t(h,_);_=_.sibling}x.type===Mo?(y=so(x.props.children,h.mode,w,x.key),y.return=h,h=y):(w=fl(x.type,x.key,x.props,null,h.mode,w),w.ref=Ii(h,y,x),w.return=h,h=w)}return s(h);case Io:e:{for(_=x.key;y!==null;){if(y.key===_)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){n(h,y.sibling),y=o(y,x.children||[]),y.return=h,h=y;break e}else{n(h,y);break}else t(h,y);y=y.sibling}y=ju(x,h.mode,w),y.return=h,h=y}return s(h);case ur:return _=x._init,$(h,y,_(x._payload),w)}if(ts(x))return g(h,y,x,w);if(Oi(x))return b(h,y,x,w);Ea(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(n(h,y.sibling),y=o(y,x),y.return=h,h=y):(n(h,y),y=Su(x,h.mode,w),y.return=h,h=y),s(h)):n(h,y)}return $}var di=Vy(!0),Hy=Vy(!1),Ul=Lr(null),Bl=null,Yo=null,Kf=null;function Jf(){Kf=Yo=Bl=null}function Zf(e){var t=Ul.current;Oe(Ul),e._currentValue=t}function Dd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ri(e,t){Bl=e,Kf=Yo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Mt=!0),e.firstContext=null)}function dn(e){var t=e._currentValue;if(Kf!==e)if(e={context:e,memoizedValue:t,next:null},Yo===null){if(Bl===null)throw Error(te(308));Yo=e,Bl.dependencies={lanes:0,firstContext:e}}else Yo=Yo.next=e;return t}var Kr=null;function ep(e){Kr===null?Kr=[e]:Kr.push(e)}function qy(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ep(t)):(n.next=o.next,o.next=n),t.interleaved=n,er(e,r)}function er(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dr=!1;function tp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _r(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,be&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,er(e,n)}return o=r.interleaved,o===null?(t.next=t,ep(r)):(t.next=o.next,o.next=t),r.interleaved=t,er(e,n)}function sl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mf(e,n)}}function Wh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wl(e,t,n,r){var o=e.updateQueue;dr=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,f=c.next;c.next=null,s===null?i=f:s.next=f,s=c;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==s&&(l===null?u.firstBaseUpdate=f:l.next=f,u.lastBaseUpdate=c))}if(i!==null){var d=o.baseState;s=0,u=f=c=null,l=i;do{var p=l.lane,m=l.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,b=l;switch(p=t,m=n,b.tag){case 1:if(g=b.payload,typeof g=="function"){d=g.call(m,d,p);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,p=typeof g=="function"?g.call(m,d,p):g,p==null)break e;d=Ve({},d,p);break e;case 2:dr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[l]:p.push(l))}else m={eventTime:m,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(f=u=m,c=d):u=u.next=m,s|=p;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;p=l,l=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(u===null&&(c=d),o.baseState=c,o.firstBaseUpdate=f,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ho|=s,e.lanes=s,e.memoizedState=d}}function Vh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(te(191,o));o.call(r)}}}var ia={},Dn=Lr(ia),Ds=Lr(ia),Is=Lr(ia);function Jr(e){if(e===ia)throw Error(te(174));return e}function np(e,t){switch(Fe(Is,t),Fe(Ds,e),Fe(Dn,ia),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xd(t,e)}Oe(Dn),Fe(Dn,t)}function fi(){Oe(Dn),Oe(Ds),Oe(Is)}function Yy(e){Jr(Is.current);var t=Jr(Dn.current),n=xd(t,e.type);t!==n&&(Fe(Ds,e),Fe(Dn,n))}function rp(e){Ds.current===e&&(Oe(Dn),Oe(Ds))}var Ue=Lr(0);function Vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xu=[];function op(){for(var e=0;e<xu.length;e++)xu[e]._workInProgressVersionPrimary=null;xu.length=0}var al=nr.ReactCurrentDispatcher,vu=nr.ReactCurrentBatchConfig,po=0,Be=null,it=null,ut=null,Hl=!1,ms=!1,Ms=0,k2=0;function bt(){throw Error(te(321))}function ip(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!En(e[n],t[n]))return!1;return!0}function sp(e,t,n,r,o,i){if(po=i,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,al.current=e===null||e.memoizedState===null?E2:C2,e=n(r,o),ms){i=0;do{if(ms=!1,Ms=0,25<=i)throw Error(te(301));i+=1,ut=it=null,t.updateQueue=null,al.current=P2,e=n(r,o)}while(ms)}if(al.current=ql,t=it!==null&&it.next!==null,po=0,ut=it=Be=null,Hl=!1,t)throw Error(te(300));return e}function ap(){var e=Ms!==0;return Ms=0,e}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Be.memoizedState=ut=e:ut=ut.next=e,ut}function fn(){if(it===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=it.next;var t=ut===null?Be.memoizedState:ut.next;if(t!==null)ut=t,it=e;else{if(e===null)throw Error(te(310));it=e,e={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ut===null?Be.memoizedState=ut=e:ut=ut.next=e}return ut}function Us(e,t){return typeof t=="function"?t(e):t}function bu(e){var t=fn(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=it,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,c=null,f=i;do{var u=f.lane;if((po&u)===u)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var d={lane:u,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(l=c=d,s=r):c=c.next=d,Be.lanes|=u,ho|=u}f=f.next}while(f!==null&&f!==i);c===null?s=r:c.next=l,En(r,t.memoizedState)||(Mt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Be.lanes|=i,ho|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wu(e){var t=fn(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);En(i,t.memoizedState)||(Mt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Qy(){}function Xy(e,t){var n=Be,r=fn(),o=t(),i=!En(r.memoizedState,o);if(i&&(r.memoizedState=o,Mt=!0),r=r.queue,lp(Zy.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,Bs(9,Jy.bind(null,n,r,o,t),void 0,null),ft===null)throw Error(te(349));po&30||Ky(n,t,o)}return o}function Ky(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jy(e,t,n,r){t.value=n,t.getSnapshot=r,e1(t)&&t1(e)}function Zy(e,t,n){return n(function(){e1(t)&&t1(e)})}function e1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!En(e,n)}catch{return!0}}function t1(e){var t=er(e,1);t!==null&&jn(t,e,1,-1)}function Hh(e){var t=Fn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:e},t.queue=e,e=e.dispatch=_2.bind(null,Be,e),[t.memoizedState,e]}function Bs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function n1(){return fn().memoizedState}function ll(e,t,n,r){var o=Fn();Be.flags|=e,o.memoizedState=Bs(1|t,n,void 0,r===void 0?null:r)}function Sc(e,t,n,r){var o=fn();r=r===void 0?null:r;var i=void 0;if(it!==null){var s=it.memoizedState;if(i=s.destroy,r!==null&&ip(r,s.deps)){o.memoizedState=Bs(t,n,i,r);return}}Be.flags|=e,o.memoizedState=Bs(1|t,n,i,r)}function qh(e,t){return ll(8390656,8,e,t)}function lp(e,t){return Sc(2048,8,e,t)}function r1(e,t){return Sc(4,2,e,t)}function o1(e,t){return Sc(4,4,e,t)}function i1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function s1(e,t,n){return n=n!=null?n.concat([e]):null,Sc(4,4,i1.bind(null,t,e),n)}function cp(){}function a1(e,t){var n=fn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ip(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function l1(e,t){var n=fn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ip(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function c1(e,t,n){return po&21?(En(n,t)||(n=hy(),Be.lanes|=n,ho|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Mt=!0),e.memoizedState=n)}function S2(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var r=vu.transition;vu.transition={};try{e(!1),t()}finally{Ee=n,vu.transition=r}}function u1(){return fn().memoizedState}function j2(e,t,n){var r=Cr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},d1(e))f1(t,n);else if(n=qy(e,t,n,r),n!==null){var o=At();jn(n,e,r,o),p1(n,t,r)}}function _2(e,t,n){var r=Cr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(d1(e))f1(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,En(l,s)){var c=t.interleaved;c===null?(o.next=o,ep(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=qy(e,t,o,r),n!==null&&(o=At(),jn(n,e,r,o),p1(n,t,r))}}function d1(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function f1(e,t){ms=Hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function p1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mf(e,n)}}var ql={readContext:dn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},E2={readContext:dn,useCallback:function(e,t){return Fn().memoizedState=[e,t===void 0?null:t],e},useContext:dn,useEffect:qh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ll(4194308,4,i1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ll(4194308,4,e,t)},useInsertionEffect:function(e,t){return ll(4,2,e,t)},useMemo:function(e,t){var n=Fn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=j2.bind(null,Be,e),[r.memoizedState,e]},useRef:function(e){var t=Fn();return e={current:e},t.memoizedState=e},useState:Hh,useDebugValue:cp,useDeferredValue:function(e){return Fn().memoizedState=e},useTransition:function(){var e=Hh(!1),t=e[0];return e=S2.bind(null,e[1]),Fn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Be,o=Fn();if(Ne){if(n===void 0)throw Error(te(407));n=n()}else{if(n=t(),ft===null)throw Error(te(349));po&30||Ky(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,qh(Zy.bind(null,r,i,e),[e]),r.flags|=2048,Bs(9,Jy.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fn(),t=ft.identifierPrefix;if(Ne){var n=Xn,r=Qn;n=(r&~(1<<32-Sn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ms++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=k2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},C2={readContext:dn,useCallback:a1,useContext:dn,useEffect:lp,useImperativeHandle:s1,useInsertionEffect:r1,useLayoutEffect:o1,useMemo:l1,useReducer:bu,useRef:n1,useState:function(){return bu(Us)},useDebugValue:cp,useDeferredValue:function(e){var t=fn();return c1(t,it.memoizedState,e)},useTransition:function(){var e=bu(Us)[0],t=fn().memoizedState;return[e,t]},useMutableSource:Qy,useSyncExternalStore:Xy,useId:u1,unstable_isNewReconciler:!1},P2={readContext:dn,useCallback:a1,useContext:dn,useEffect:lp,useImperativeHandle:s1,useInsertionEffect:r1,useLayoutEffect:o1,useMemo:l1,useReducer:wu,useRef:n1,useState:function(){return wu(Us)},useDebugValue:cp,useDeferredValue:function(e){var t=fn();return it===null?t.memoizedState=e:c1(t,it.memoizedState,e)},useTransition:function(){var e=wu(Us)[0],t=fn().memoizedState;return[e,t]},useMutableSource:Qy,useSyncExternalStore:Xy,useId:u1,unstable_isNewReconciler:!1};function xn(e,t){if(e&&e.defaultProps){t=Ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Id(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jc={isMounted:function(e){return(e=e._reactInternals)?$o(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=At(),o=Cr(e),i=Kn(r,o);i.payload=t,n!=null&&(i.callback=n),t=_r(e,i,o),t!==null&&(jn(t,e,o,r),sl(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=At(),o=Cr(e),i=Kn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=_r(e,i,o),t!==null&&(jn(t,e,o,r),sl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),r=Cr(e),o=Kn(n,r);o.tag=2,t!=null&&(o.callback=t),t=_r(e,o,r),t!==null&&(jn(t,e,r,n),sl(t,e,r))}};function Gh(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Os(n,r)||!Os(o,i):!0}function h1(e,t,n){var r=!1,o=Or,i=t.contextType;return typeof i=="object"&&i!==null?i=dn(i):(o=Bt(t)?uo:Et.current,r=t.contextTypes,i=(r=r!=null)?ci(e,o):Or),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Yh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jc.enqueueReplaceState(t,t.state,null)}function Md(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},tp(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=dn(i):(i=Bt(t)?uo:Et.current,o.context=ci(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Id(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&jc.enqueueReplaceState(o,o.state,null),Wl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function pi(e,t){try{var n="",r=t;do n+=rw(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function $u(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ud(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var F2=typeof WeakMap=="function"?WeakMap:Map;function m1(e,t,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yl||(Yl=!0,Kd=r),Ud(e,t)},n}function g1(e,t,n){n=Kn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ud(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ud(e,t),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Qh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new F2;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=V2.bind(null,e,t,n),t.then(e,e))}function Xh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kh(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Kn(-1,1),t.tag=2,_r(n,t,1))),n.lanes|=1),e)}var T2=nr.ReactCurrentOwner,Mt=!1;function Pt(e,t,n,r){t.child=e===null?Hy(t,null,n,r):di(t,e.child,n,r)}function Jh(e,t,n,r,o){n=n.render;var i=t.ref;return ri(t,o),r=sp(e,t,n,r,i,o),n=ap(),e!==null&&!Mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,tr(e,t,o)):(Ne&&n&&Yf(t),t.flags|=1,Pt(e,t,r,o),t.child)}function Zh(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!yp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,y1(e,t,i,r,o)):(e=fl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Os,n(s,r)&&e.ref===t.ref)return tr(e,t,o)}return t.flags|=1,e=Pr(i,r),e.ref=t.ref,e.return=t,t.child=e}function y1(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Os(i,r)&&e.ref===t.ref)if(Mt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Mt=!0);else return t.lanes=e.lanes,tr(e,t,o)}return Bd(e,t,n,r,o)}function x1(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fe(Xo,Xt),Xt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Fe(Xo,Xt),Xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Fe(Xo,Xt),Xt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Fe(Xo,Xt),Xt|=r;return Pt(e,t,o,n),t.child}function v1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bd(e,t,n,r,o){var i=Bt(n)?uo:Et.current;return i=ci(t,i),ri(t,o),n=sp(e,t,n,r,i,o),r=ap(),e!==null&&!Mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,tr(e,t,o)):(Ne&&r&&Yf(t),t.flags|=1,Pt(e,t,n,o),t.child)}function em(e,t,n,r,o){if(Bt(n)){var i=!0;Dl(t)}else i=!1;if(ri(t,o),t.stateNode===null)cl(e,t),h1(t,n,r),Md(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,f=n.contextType;typeof f=="object"&&f!==null?f=dn(f):(f=Bt(n)?uo:Et.current,f=ci(t,f));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==f)&&Yh(t,s,r,f),dr=!1;var p=t.memoizedState;s.state=p,Wl(t,r,s,o),c=t.memoizedState,l!==r||p!==c||Ut.current||dr?(typeof u=="function"&&(Id(t,n,u,r),c=t.memoizedState),(l=dr||Gh(t,n,l,r,p,c,f))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=f,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Gy(e,t),l=t.memoizedProps,f=t.type===t.elementType?l:xn(t.type,l),s.props=f,d=t.pendingProps,p=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=dn(c):(c=Bt(n)?uo:Et.current,c=ci(t,c));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||p!==c)&&Yh(t,s,r,c),dr=!1,p=t.memoizedState,s.state=p,Wl(t,r,s,o);var g=t.memoizedState;l!==d||p!==g||Ut.current||dr?(typeof m=="function"&&(Id(t,n,m,r),g=t.memoizedState),(f=dr||Gh(t,n,f,r,p,g,c)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=c,r=f):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Wd(e,t,n,r,i,o)}function Wd(e,t,n,r,o,i){v1(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Ih(t,n,!1),tr(e,t,i);r=t.stateNode,T2.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=di(t,e.child,null,i),t.child=di(t,null,l,i)):Pt(e,t,l,i),t.memoizedState=r.state,o&&Ih(t,n,!0),t.child}function b1(e){var t=e.stateNode;t.pendingContext?Dh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dh(e,t.context,!1),np(e,t.containerInfo)}function tm(e,t,n,r,o){return ui(),Xf(o),t.flags|=256,Pt(e,t,n,r),t.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function Hd(e){return{baseLanes:e,cachePool:null,transitions:null}}function w1(e,t,n){var r=t.pendingProps,o=Ue.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Fe(Ue,o&1),e===null)return Ld(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Cc(s,r,0,null),e=so(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hd(n),t.memoizedState=Vd,e):up(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return A2(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Pr(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Pr(l,i):(i=so(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Hd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Vd,r}return i=e.child,e=i.sibling,r=Pr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function up(e,t){return t=Cc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ca(e,t,n,r){return r!==null&&Xf(r),di(t,e.child,null,n),e=up(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function A2(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=$u(Error(te(422))),Ca(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Cc({mode:"visible",children:r.children},o,0,null),i=so(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&di(t,e.child,null,s),t.child.memoizedState=Hd(s),t.memoizedState=Vd,i);if(!(t.mode&1))return Ca(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(te(419)),r=$u(i,r,void 0),Ca(e,t,s,r)}if(l=(s&e.childLanes)!==0,Mt||l){if(r=ft,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,er(e,o),jn(r,e,o,-1))}return gp(),r=$u(Error(te(421))),Ca(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=H2.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Jt=jr(o.nextSibling),en=t,Ne=!0,wn=null,e!==null&&(an[ln++]=Qn,an[ln++]=Xn,an[ln++]=fo,Qn=e.id,Xn=e.overflow,fo=t),t=up(t,r.children),t.flags|=4096,t)}function nm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Dd(e.return,t,n)}function ku(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function $1(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Pt(e,t,r.children,n),r=Ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nm(e,n,t);else if(e.tag===19)nm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Fe(Ue,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Vl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ku(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Vl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ku(t,!0,n,null,i);break;case"together":ku(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ho|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(te(153));if(t.child!==null){for(e=t.child,n=Pr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function R2(e,t,n){switch(t.tag){case 3:b1(t),ui();break;case 5:Yy(t);break;case 1:Bt(t.type)&&Dl(t);break;case 4:np(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Fe(Ul,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Fe(Ue,Ue.current&1),t.flags|=128,null):n&t.child.childLanes?w1(e,t,n):(Fe(Ue,Ue.current&1),e=tr(e,t,n),e!==null?e.sibling:null);Fe(Ue,Ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $1(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Fe(Ue,Ue.current),r)break;return null;case 22:case 23:return t.lanes=0,x1(e,t,n)}return tr(e,t,n)}var k1,qd,S1,j1;k1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qd=function(){};S1=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Jr(Dn.current);var i=null;switch(n){case"input":o=hd(e,o),r=hd(e,r),i=[];break;case"select":o=Ve({},o,{value:void 0}),r=Ve({},r,{value:void 0}),i=[];break;case"textarea":o=yd(e,o),r=yd(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Nl)}vd(n,r);var s;n=null;for(f in o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var l=o[f];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Es.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var c=r[f];if(l=o!=null?o[f]:void 0,r.hasOwnProperty(f)&&c!==l&&(c!=null||l!=null))if(f==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Es.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&Ae("scroll",e),i||l===c||(i=[])):(i=i||[]).push(f,c))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};j1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mi(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function O2(e,t,n){var r=t.pendingProps;switch(Qf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return Bt(t.type)&&Ll(),wt(t),null;case 3:return r=t.stateNode,fi(),Oe(Ut),Oe(Et),op(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_a(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wn!==null&&(ef(wn),wn=null))),qd(e,t),wt(t),null;case 5:rp(t);var o=Jr(Is.current);if(n=t.type,e!==null&&t.stateNode!=null)S1(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(te(166));return wt(t),null}if(e=Jr(Dn.current),_a(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[On]=t,r[Ls]=i,e=(t.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(o=0;o<rs.length;o++)Ae(rs[o],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":dh(r,i),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ae("invalid",r);break;case"textarea":ph(r,i),Ae("invalid",r)}vd(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ja(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ja(r.textContent,l,e),o=["children",""+l]):Es.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Ae("scroll",r)}switch(n){case"input":ya(r),fh(r,i,!0);break;case"textarea":ya(r),hh(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Nl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Z0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[On]=t,e[Ls]=r,k1(e,t,!1,!1),t.stateNode=e;e:{switch(s=bd(n,r),n){case"dialog":Ae("cancel",e),Ae("close",e),o=r;break;case"iframe":case"object":case"embed":Ae("load",e),o=r;break;case"video":case"audio":for(o=0;o<rs.length;o++)Ae(rs[o],e);o=r;break;case"source":Ae("error",e),o=r;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),o=r;break;case"details":Ae("toggle",e),o=r;break;case"input":dh(e,r),o=hd(e,r),Ae("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Ve({},r,{value:void 0}),Ae("invalid",e);break;case"textarea":ph(e,r),o=yd(e,r),Ae("invalid",e);break;default:o=r}vd(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?ny(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ey(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Cs(e,c):typeof c=="number"&&Cs(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Es.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Ae("scroll",e):c!=null&&Of(e,i,c,s))}switch(n){case"input":ya(e),fh(e,r,!1);break;case"textarea":ya(e),hh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rr(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Zo(e,!!r.multiple,i,!1):r.defaultValue!=null&&Zo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wt(t),null;case 6:if(e&&t.stateNode!=null)j1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(te(166));if(n=Jr(Is.current),Jr(Dn.current),_a(t)){if(r=t.stateNode,n=t.memoizedProps,r[On]=t,(i=r.nodeValue!==n)&&(e=en,e!==null))switch(e.tag){case 3:ja(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ja(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[On]=t,t.stateNode=r}return wt(t),null;case 13:if(Oe(Ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&Jt!==null&&t.mode&1&&!(t.flags&128))Wy(),ui(),t.flags|=98560,i=!1;else if(i=_a(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(te(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(te(317));i[On]=t}else ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),i=!1}else wn!==null&&(ef(wn),wn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ue.current&1?at===0&&(at=3):gp())),t.updateQueue!==null&&(t.flags|=4),wt(t),null);case 4:return fi(),qd(e,t),e===null&&zs(t.stateNode.containerInfo),wt(t),null;case 10:return Zf(t.type._context),wt(t),null;case 17:return Bt(t.type)&&Ll(),wt(t),null;case 19:if(Oe(Ue),i=t.memoizedState,i===null)return wt(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Mi(i,!1);else{if(at!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Vl(e),s!==null){for(t.flags|=128,Mi(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Fe(Ue,Ue.current&1|2),t.child}e=e.sibling}i.tail!==null&&Xe()>hi&&(t.flags|=128,r=!0,Mi(i,!1),t.lanes=4194304)}else{if(!r)if(e=Vl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ne)return wt(t),null}else 2*Xe()-i.renderingStartTime>hi&&n!==1073741824&&(t.flags|=128,r=!0,Mi(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xe(),t.sibling=null,n=Ue.current,Fe(Ue,r?n&1|2:n&1),t):(wt(t),null);case 22:case 23:return mp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xt&1073741824&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),null;case 24:return null;case 25:return null}throw Error(te(156,t.tag))}function z2(e,t){switch(Qf(t),t.tag){case 1:return Bt(t.type)&&Ll(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fi(),Oe(Ut),Oe(Et),op(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rp(t),null;case 13:if(Oe(Ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(te(340));ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(Ue),null;case 4:return fi(),null;case 10:return Zf(t.type._context),null;case 22:case 23:return mp(),null;case 24:return null;default:return null}}var Pa=!1,jt=!1,N2=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Qo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ye(e,t,r)}else n.current=null}function Gd(e,t,n){try{n()}catch(r){Ye(e,t,r)}}var rm=!1;function L2(e,t){if(Fd=Rl,e=Fy(),Gf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,f=0,u=0,d=e,p=null;t:for(;;){for(var m;d!==n||o!==0&&d.nodeType!==3||(l=s+o),d!==i||r!==0&&d.nodeType!==3||(c=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)p=d,d=m;for(;;){if(d===e)break t;if(p===n&&++f===o&&(l=s),p===i&&++u===r&&(c=s),(m=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:e,selectionRange:n},Rl=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,$=g.memoizedState,h=t.stateNode,y=h.getSnapshotBeforeUpdate(t.elementType===t.type?b:xn(t.type,b),$);h.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(w){Ye(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return g=rm,rm=!1,g}function gs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Gd(t,n,i)}o=o.next}while(o!==r)}}function _c(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _1(e){var t=e.alternate;t!==null&&(e.alternate=null,_1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[On],delete t[Ls],delete t[Od],delete t[v2],delete t[b2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function E1(e){return e.tag===5||e.tag===3||e.tag===4}function om(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||E1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nl));else if(r!==4&&(e=e.child,e!==null))for(Qd(e,t,n),e=e.sibling;e!==null;)Qd(e,t,n),e=e.sibling}function Xd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xd(e,t,n),e=e.sibling;e!==null;)Xd(e,t,n),e=e.sibling}var yt=null,vn=!1;function sr(e,t,n){for(n=n.child;n!==null;)C1(e,t,n),n=n.sibling}function C1(e,t,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(xc,n)}catch{}switch(n.tag){case 5:jt||Qo(n,t);case 6:var r=yt,o=vn;yt=null,sr(e,t,n),yt=r,vn=o,yt!==null&&(vn?(e=yt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(vn?(e=yt,n=n.stateNode,e.nodeType===8?gu(e.parentNode,n):e.nodeType===1&&gu(e,n),As(e)):gu(yt,n.stateNode));break;case 4:r=yt,o=vn,yt=n.stateNode.containerInfo,vn=!0,sr(e,t,n),yt=r,vn=o;break;case 0:case 11:case 14:case 15:if(!jt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Gd(n,t,s),o=o.next}while(o!==r)}sr(e,t,n);break;case 1:if(!jt&&(Qo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ye(n,t,l)}sr(e,t,n);break;case 21:sr(e,t,n);break;case 22:n.mode&1?(jt=(r=jt)||n.memoizedState!==null,sr(e,t,n),jt=r):sr(e,t,n);break;default:sr(e,t,n)}}function im(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new N2),t.forEach(function(r){var o=q2.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function gn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:yt=l.stateNode,vn=!1;break e;case 3:yt=l.stateNode.containerInfo,vn=!0;break e;case 4:yt=l.stateNode.containerInfo,vn=!0;break e}l=l.return}if(yt===null)throw Error(te(160));C1(i,s,o),yt=null,vn=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(f){Ye(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)P1(t,e),t=t.sibling}function P1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gn(t,e),Pn(e),r&4){try{gs(3,e,e.return),_c(3,e)}catch(b){Ye(e,e.return,b)}try{gs(5,e,e.return)}catch(b){Ye(e,e.return,b)}}break;case 1:gn(t,e),Pn(e),r&512&&n!==null&&Qo(n,n.return);break;case 5:if(gn(t,e),Pn(e),r&512&&n!==null&&Qo(n,n.return),e.flags&32){var o=e.stateNode;try{Cs(o,"")}catch(b){Ye(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&K0(o,i),bd(l,s);var f=bd(l,i);for(s=0;s<c.length;s+=2){var u=c[s],d=c[s+1];u==="style"?ny(o,d):u==="dangerouslySetInnerHTML"?ey(o,d):u==="children"?Cs(o,d):Of(o,u,d,f)}switch(l){case"input":md(o,i);break;case"textarea":J0(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Zo(o,!!i.multiple,m,!1):p!==!!i.multiple&&(i.defaultValue!=null?Zo(o,!!i.multiple,i.defaultValue,!0):Zo(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ls]=i}catch(b){Ye(e,e.return,b)}}break;case 6:if(gn(t,e),Pn(e),r&4){if(e.stateNode===null)throw Error(te(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){Ye(e,e.return,b)}}break;case 3:if(gn(t,e),Pn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{As(t.containerInfo)}catch(b){Ye(e,e.return,b)}break;case 4:gn(t,e),Pn(e);break;case 13:gn(t,e),Pn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(pp=Xe())),r&4&&im(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(jt=(f=jt)||u,gn(t,e),jt=f):gn(t,e),Pn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!u&&e.mode&1)for(ne=e,u=e.child;u!==null;){for(d=ne=u;ne!==null;){switch(p=ne,m=p.child,p.tag){case 0:case 11:case 14:case 15:gs(4,p,p.return);break;case 1:Qo(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(b){Ye(r,n,b)}}break;case 5:Qo(p,p.return);break;case 22:if(p.memoizedState!==null){am(d);continue}}m!==null?(m.return=p,ne=m):am(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,f?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,c=d.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=ty("display",s))}catch(b){Ye(e,e.return,b)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=f?"":d.memoizedProps}catch(b){Ye(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gn(t,e),Pn(e),r&4&&im(e);break;case 21:break;default:gn(t,e),Pn(e)}}function Pn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(E1(n)){var r=n;break e}n=n.return}throw Error(te(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Cs(o,""),r.flags&=-33);var i=om(e);Xd(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=om(e);Qd(e,l,s);break;default:throw Error(te(161))}}catch(c){Ye(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function D2(e,t,n){ne=e,F1(e)}function F1(e,t,n){for(var r=(e.mode&1)!==0;ne!==null;){var o=ne,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Pa;if(!s){var l=o.alternate,c=l!==null&&l.memoizedState!==null||jt;l=Pa;var f=jt;if(Pa=s,(jt=c)&&!f)for(ne=o;ne!==null;)s=ne,c=s.child,s.tag===22&&s.memoizedState!==null?lm(o):c!==null?(c.return=s,ne=c):lm(o);for(;i!==null;)ne=i,F1(i),i=i.sibling;ne=o,Pa=l,jt=f}sm(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,ne=i):sm(e)}}function sm(e){for(;ne!==null;){var t=ne;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:jt||_c(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!jt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:xn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Vh(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vh(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var u=f.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&As(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}jt||t.flags&512&&Yd(t)}catch(p){Ye(t,t.return,p)}}if(t===e){ne=null;break}if(n=t.sibling,n!==null){n.return=t.return,ne=n;break}ne=t.return}}function am(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ne=n;break}ne=t.return}}function lm(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_c(4,t)}catch(c){Ye(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){Ye(t,o,c)}}var i=t.return;try{Yd(t)}catch(c){Ye(t,i,c)}break;case 5:var s=t.return;try{Yd(t)}catch(c){Ye(t,s,c)}}}catch(c){Ye(t,t.return,c)}if(t===e){ne=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ne=l;break}ne=t.return}}var I2=Math.ceil,Gl=nr.ReactCurrentDispatcher,dp=nr.ReactCurrentOwner,un=nr.ReactCurrentBatchConfig,be=0,ft=null,et=null,xt=0,Xt=0,Xo=Lr(0),at=0,Ws=null,ho=0,Ec=0,fp=0,ys=null,Dt=null,pp=0,hi=1/0,Hn=null,Yl=!1,Kd=null,Er=null,Fa=!1,xr=null,Ql=0,xs=0,Jd=null,ul=-1,dl=0;function At(){return be&6?Xe():ul!==-1?ul:ul=Xe()}function Cr(e){return e.mode&1?be&2&&xt!==0?xt&-xt:$2.transition!==null?(dl===0&&(dl=hy()),dl):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:wy(e.type)),e):1}function jn(e,t,n,r){if(50<xs)throw xs=0,Jd=null,Error(te(185));na(e,n,r),(!(be&2)||e!==ft)&&(e===ft&&(!(be&2)&&(Ec|=n),at===4&&pr(e,xt)),Wt(e,r),n===1&&be===0&&!(t.mode&1)&&(hi=Xe()+500,kc&&Dr()))}function Wt(e,t){var n=e.callbackNode;$w(e,t);var r=Al(e,e===ft?xt:0);if(r===0)n!==null&&yh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yh(n),t===1)e.tag===0?w2(cm.bind(null,e)):My(cm.bind(null,e)),y2(function(){!(be&6)&&Dr()}),n=null;else{switch(my(r)){case 1:n=If;break;case 4:n=fy;break;case 16:n=Tl;break;case 536870912:n=py;break;default:n=Tl}n=D1(n,T1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function T1(e,t){if(ul=-1,dl=0,be&6)throw Error(te(327));var n=e.callbackNode;if(oi()&&e.callbackNode!==n)return null;var r=Al(e,e===ft?xt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xl(e,r);else{t=r;var o=be;be|=2;var i=R1();(ft!==e||xt!==t)&&(Hn=null,hi=Xe()+500,io(e,t));do try{B2();break}catch(l){A1(e,l)}while(!0);Jf(),Gl.current=i,be=o,et!==null?t=0:(ft=null,xt=0,t=at)}if(t!==0){if(t===2&&(o=jd(e),o!==0&&(r=o,t=Zd(e,o))),t===1)throw n=Ws,io(e,0),pr(e,r),Wt(e,Xe()),n;if(t===6)pr(e,r);else{if(o=e.current.alternate,!(r&30)&&!M2(o)&&(t=Xl(e,r),t===2&&(i=jd(e),i!==0&&(r=i,t=Zd(e,i))),t===1))throw n=Ws,io(e,0),pr(e,r),Wt(e,Xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(te(345));case 2:Hr(e,Dt,Hn);break;case 3:if(pr(e,r),(r&130023424)===r&&(t=pp+500-Xe(),10<t)){if(Al(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){At(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Rd(Hr.bind(null,e,Dt,Hn),t);break}Hr(e,Dt,Hn);break;case 4:if(pr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Sn(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*I2(r/1960))-r,10<r){e.timeoutHandle=Rd(Hr.bind(null,e,Dt,Hn),r);break}Hr(e,Dt,Hn);break;case 5:Hr(e,Dt,Hn);break;default:throw Error(te(329))}}}return Wt(e,Xe()),e.callbackNode===n?T1.bind(null,e):null}function Zd(e,t){var n=ys;return e.current.memoizedState.isDehydrated&&(io(e,t).flags|=256),e=Xl(e,t),e!==2&&(t=Dt,Dt=n,t!==null&&ef(t)),e}function ef(e){Dt===null?Dt=e:Dt.push.apply(Dt,e)}function M2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!En(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pr(e,t){for(t&=~fp,t&=~Ec,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Sn(t),r=1<<n;e[n]=-1,t&=~r}}function cm(e){if(be&6)throw Error(te(327));oi();var t=Al(e,0);if(!(t&1))return Wt(e,Xe()),null;var n=Xl(e,t);if(e.tag!==0&&n===2){var r=jd(e);r!==0&&(t=r,n=Zd(e,r))}if(n===1)throw n=Ws,io(e,0),pr(e,t),Wt(e,Xe()),n;if(n===6)throw Error(te(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hr(e,Dt,Hn),Wt(e,Xe()),null}function hp(e,t){var n=be;be|=1;try{return e(t)}finally{be=n,be===0&&(hi=Xe()+500,kc&&Dr())}}function mo(e){xr!==null&&xr.tag===0&&!(be&6)&&oi();var t=be;be|=1;var n=un.transition,r=Ee;try{if(un.transition=null,Ee=1,e)return e()}finally{Ee=r,un.transition=n,be=t,!(be&6)&&Dr()}}function mp(){Xt=Xo.current,Oe(Xo)}function io(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,g2(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(Qf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ll();break;case 3:fi(),Oe(Ut),Oe(Et),op();break;case 5:rp(r);break;case 4:fi();break;case 13:Oe(Ue);break;case 19:Oe(Ue);break;case 10:Zf(r.type._context);break;case 22:case 23:mp()}n=n.return}if(ft=e,et=e=Pr(e.current,null),xt=Xt=t,at=0,Ws=null,fp=Ec=ho=0,Dt=ys=null,Kr!==null){for(t=0;t<Kr.length;t++)if(n=Kr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Kr=null}return e}function A1(e,t){do{var n=et;try{if(Jf(),al.current=ql,Hl){for(var r=Be.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Hl=!1}if(po=0,ut=it=Be=null,ms=!1,Ms=0,dp.current=null,n===null||n.return===null){at=1,Ws=t,et=null;break}e:{var i=e,s=n.return,l=n,c=t;if(t=xt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,u=l,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Xh(s);if(m!==null){m.flags&=-257,Kh(m,s,l,i,t),m.mode&1&&Qh(i,f,t),t=m,c=f;var g=t.updateQueue;if(g===null){var b=new Set;b.add(c),t.updateQueue=b}else g.add(c);break e}else{if(!(t&1)){Qh(i,f,t),gp();break e}c=Error(te(426))}}else if(Ne&&l.mode&1){var $=Xh(s);if($!==null){!($.flags&65536)&&($.flags|=256),Kh($,s,l,i,t),Xf(pi(c,l));break e}}i=c=pi(c,l),at!==4&&(at=2),ys===null?ys=[i]:ys.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=m1(i,c,t);Wh(i,h);break e;case 1:l=c;var y=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Er===null||!Er.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=g1(i,l,t);Wh(i,w);break e}}i=i.return}while(i!==null)}z1(n)}catch(C){t=C,et===n&&n!==null&&(et=n=n.return);continue}break}while(!0)}function R1(){var e=Gl.current;return Gl.current=ql,e===null?ql:e}function gp(){(at===0||at===3||at===2)&&(at=4),ft===null||!(ho&268435455)&&!(Ec&268435455)||pr(ft,xt)}function Xl(e,t){var n=be;be|=2;var r=R1();(ft!==e||xt!==t)&&(Hn=null,io(e,t));do try{U2();break}catch(o){A1(e,o)}while(!0);if(Jf(),be=n,Gl.current=r,et!==null)throw Error(te(261));return ft=null,xt=0,at}function U2(){for(;et!==null;)O1(et)}function B2(){for(;et!==null&&!pw();)O1(et)}function O1(e){var t=L1(e.alternate,e,Xt);e.memoizedProps=e.pendingProps,t===null?z1(e):et=t,dp.current=null}function z1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=z2(n,t),n!==null){n.flags&=32767,et=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,et=null;return}}else if(n=O2(n,t,Xt),n!==null){et=n;return}if(t=t.sibling,t!==null){et=t;return}et=t=e}while(t!==null);at===0&&(at=5)}function Hr(e,t,n){var r=Ee,o=un.transition;try{un.transition=null,Ee=1,W2(e,t,n,r)}finally{un.transition=o,Ee=r}return null}function W2(e,t,n,r){do oi();while(xr!==null);if(be&6)throw Error(te(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(te(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(kw(e,i),e===ft&&(et=ft=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fa||(Fa=!0,D1(Tl,function(){return oi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=un.transition,un.transition=null;var s=Ee;Ee=1;var l=be;be|=4,dp.current=null,L2(e,n),P1(n,e),c2(Td),Rl=!!Fd,Td=Fd=null,e.current=n,D2(n),hw(),be=l,Ee=s,un.transition=i}else e.current=n;if(Fa&&(Fa=!1,xr=e,Ql=o),i=e.pendingLanes,i===0&&(Er=null),yw(n.stateNode),Wt(e,Xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Yl)throw Yl=!1,e=Kd,Kd=null,e;return Ql&1&&e.tag!==0&&oi(),i=e.pendingLanes,i&1?e===Jd?xs++:(xs=0,Jd=e):xs=0,Dr(),null}function oi(){if(xr!==null){var e=my(Ql),t=un.transition,n=Ee;try{if(un.transition=null,Ee=16>e?16:e,xr===null)var r=!1;else{if(e=xr,xr=null,Ql=0,be&6)throw Error(te(331));var o=be;for(be|=4,ne=e.current;ne!==null;){var i=ne,s=i.child;if(ne.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var f=l[c];for(ne=f;ne!==null;){var u=ne;switch(u.tag){case 0:case 11:case 15:gs(8,u,i)}var d=u.child;if(d!==null)d.return=u,ne=d;else for(;ne!==null;){u=ne;var p=u.sibling,m=u.return;if(_1(u),u===f){ne=null;break}if(p!==null){p.return=m,ne=p;break}ne=m}}}var g=i.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var $=b.sibling;b.sibling=null,b=$}while(b!==null)}}ne=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,ne=s;else e:for(;ne!==null;){if(i=ne,i.flags&2048)switch(i.tag){case 0:case 11:case 15:gs(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,ne=h;break e}ne=i.return}}var y=e.current;for(ne=y;ne!==null;){s=ne;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,ne=x;else e:for(s=y;ne!==null;){if(l=ne,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_c(9,l)}}catch(C){Ye(l,l.return,C)}if(l===s){ne=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,ne=w;break e}ne=l.return}}if(be=o,Dr(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(xc,e)}catch{}r=!0}return r}finally{Ee=n,un.transition=t}}return!1}function um(e,t,n){t=pi(n,t),t=m1(e,t,1),e=_r(e,t,1),t=At(),e!==null&&(na(e,1,t),Wt(e,t))}function Ye(e,t,n){if(e.tag===3)um(e,e,n);else for(;t!==null;){if(t.tag===3){um(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){e=pi(n,e),e=g1(t,e,1),t=_r(t,e,1),e=At(),t!==null&&(na(t,1,e),Wt(t,e));break}}t=t.return}}function V2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=At(),e.pingedLanes|=e.suspendedLanes&n,ft===e&&(xt&n)===n&&(at===4||at===3&&(xt&130023424)===xt&&500>Xe()-pp?io(e,0):fp|=n),Wt(e,t)}function N1(e,t){t===0&&(e.mode&1?(t=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):t=1);var n=At();e=er(e,t),e!==null&&(na(e,t,n),Wt(e,n))}function H2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),N1(e,n)}function q2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(te(314))}r!==null&&r.delete(t),N1(e,n)}var L1;L1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ut.current)Mt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Mt=!1,R2(e,t,n);Mt=!!(e.flags&131072)}else Mt=!1,Ne&&t.flags&1048576&&Uy(t,Ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;cl(e,t),e=t.pendingProps;var o=ci(t,Et.current);ri(t,n),o=sp(null,t,r,e,o,n);var i=ap();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Bt(r)?(i=!0,Dl(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,tp(t),o.updater=jc,t.stateNode=o,o._reactInternals=t,Md(t,r,e,n),t=Wd(null,t,r,!0,i,n)):(t.tag=0,Ne&&i&&Yf(t),Pt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(cl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Y2(r),e=xn(r,e),o){case 0:t=Bd(null,t,r,e,n);break e;case 1:t=em(null,t,r,e,n);break e;case 11:t=Jh(null,t,r,e,n);break e;case 14:t=Zh(null,t,r,xn(r.type,e),n);break e}throw Error(te(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xn(r,o),Bd(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xn(r,o),em(e,t,r,o,n);case 3:e:{if(b1(t),e===null)throw Error(te(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Gy(e,t),Wl(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=pi(Error(te(423)),t),t=tm(e,t,r,n,o);break e}else if(r!==o){o=pi(Error(te(424)),t),t=tm(e,t,r,n,o);break e}else for(Jt=jr(t.stateNode.containerInfo.firstChild),en=t,Ne=!0,wn=null,n=Hy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ui(),r===o){t=tr(e,t,n);break e}Pt(e,t,r,n)}t=t.child}return t;case 5:return Yy(t),e===null&&Ld(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Ad(r,o)?s=null:i!==null&&Ad(r,i)&&(t.flags|=32),v1(e,t),Pt(e,t,s,n),t.child;case 6:return e===null&&Ld(t),null;case 13:return w1(e,t,n);case 4:return np(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=di(t,null,r,n):Pt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xn(r,o),Jh(e,t,r,o,n);case 7:return Pt(e,t,t.pendingProps,n),t.child;case 8:return Pt(e,t,t.pendingProps.children,n),t.child;case 12:return Pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,Fe(Ul,r._currentValue),r._currentValue=s,i!==null)if(En(i.value,s)){if(i.children===o.children&&!Ut.current){t=tr(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Kn(-1,n&-n),c.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var u=f.pending;u===null?c.next=c:(c.next=u.next,u.next=c),f.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Dd(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(te(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Dd(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Pt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ri(t,n),o=dn(o),r=r(o),t.flags|=1,Pt(e,t,r,n),t.child;case 14:return r=t.type,o=xn(r,t.pendingProps),o=xn(r.type,o),Zh(e,t,r,o,n);case 15:return y1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xn(r,o),cl(e,t),t.tag=1,Bt(r)?(e=!0,Dl(t)):e=!1,ri(t,n),h1(t,r,o),Md(t,r,o,n),Wd(null,t,r,!0,e,n);case 19:return $1(e,t,n);case 22:return x1(e,t,n)}throw Error(te(156,t.tag))};function D1(e,t){return dy(e,t)}function G2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,t,n,r){return new G2(e,t,n,r)}function yp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Y2(e){if(typeof e=="function")return yp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nf)return 11;if(e===Lf)return 14}return 2}function Pr(e,t){var n=e.alternate;return n===null?(n=cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fl(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")yp(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Mo:return so(n.children,o,i,t);case zf:s=8,o|=8;break;case ud:return e=cn(12,n,t,o|2),e.elementType=ud,e.lanes=i,e;case dd:return e=cn(13,n,t,o),e.elementType=dd,e.lanes=i,e;case fd:return e=cn(19,n,t,o),e.elementType=fd,e.lanes=i,e;case Y0:return Cc(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q0:s=10;break e;case G0:s=9;break e;case Nf:s=11;break e;case Lf:s=14;break e;case ur:s=16,r=null;break e}throw Error(te(130,e==null?e:typeof e,""))}return t=cn(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function so(e,t,n,r){return e=cn(7,e,r,t),e.lanes=n,e}function Cc(e,t,n,r){return e=cn(22,e,r,t),e.elementType=Y0,e.lanes=n,e.stateNode={isHidden:!1},e}function Su(e,t,n){return e=cn(6,e,null,t),e.lanes=n,e}function ju(e,t,n){return t=cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Q2(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=iu(0),this.expirationTimes=iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iu(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function xp(e,t,n,r,o,i,s,l,c){return e=new Q2(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=cn(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tp(i),e}function X2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Io,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function I1(e){if(!e)return Or;e=e._reactInternals;e:{if($o(e)!==e||e.tag!==1)throw Error(te(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(te(171))}if(e.tag===1){var n=e.type;if(Bt(n))return Iy(e,n,t)}return t}function M1(e,t,n,r,o,i,s,l,c){return e=xp(n,r,!0,e,o,i,s,l,c),e.context=I1(null),n=e.current,r=At(),o=Cr(n),i=Kn(r,o),i.callback=t??null,_r(n,i,o),e.current.lanes=o,na(e,o,r),Wt(e,r),e}function Pc(e,t,n,r){var o=t.current,i=At(),s=Cr(o);return n=I1(n),t.context===null?t.context=n:t.pendingContext=n,t=Kn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_r(o,t,s),e!==null&&(jn(e,o,s,i),sl(e,o,s)),s}function Kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vp(e,t){dm(e,t),(e=e.alternate)&&dm(e,t)}function K2(){return null}var U1=typeof reportError=="function"?reportError:function(e){console.error(e)};function bp(e){this._internalRoot=e}Fc.prototype.render=bp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(te(409));Pc(e,t,null,null)};Fc.prototype.unmount=bp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mo(function(){Pc(null,e,null,null)}),t[Zn]=null}};function Fc(e){this._internalRoot=e}Fc.prototype.unstable_scheduleHydration=function(e){if(e){var t=xy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fr.length&&t!==0&&t<fr[n].priority;n++);fr.splice(n,0,e),n===0&&by(e)}};function wp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fm(){}function J2(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var f=Kl(s);i.call(f)}}var s=M1(t,r,e,0,null,!1,!1,"",fm);return e._reactRootContainer=s,e[Zn]=s.current,zs(e.nodeType===8?e.parentNode:e),mo(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var f=Kl(c);l.call(f)}}var c=xp(e,0,!1,null,null,!1,!1,"",fm);return e._reactRootContainer=c,e[Zn]=c.current,zs(e.nodeType===8?e.parentNode:e),mo(function(){Pc(t,c,n,r)}),c}function Ac(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var c=Kl(s);l.call(c)}}Pc(t,s,e,o)}else s=J2(n,t,e,o,r);return Kl(s)}gy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ns(t.pendingLanes);n!==0&&(Mf(t,n|1),Wt(t,Xe()),!(be&6)&&(hi=Xe()+500,Dr()))}break;case 13:mo(function(){var r=er(e,1);if(r!==null){var o=At();jn(r,e,1,o)}}),vp(e,1)}};Uf=function(e){if(e.tag===13){var t=er(e,134217728);if(t!==null){var n=At();jn(t,e,134217728,n)}vp(e,134217728)}};yy=function(e){if(e.tag===13){var t=Cr(e),n=er(e,t);if(n!==null){var r=At();jn(n,e,t,r)}vp(e,t)}};xy=function(){return Ee};vy=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}};$d=function(e,t,n){switch(t){case"input":if(md(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=$c(r);if(!o)throw Error(te(90));X0(r),md(r,o)}}}break;case"textarea":J0(e,n);break;case"select":t=n.value,t!=null&&Zo(e,!!n.multiple,t,!1)}};iy=hp;sy=mo;var Z2={usingClientEntryPoint:!1,Events:[oa,Vo,$c,ry,oy,hp]},Ui={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e$={bundleType:Ui.bundleType,version:Ui.version,rendererPackageName:Ui.rendererPackageName,rendererConfig:Ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cy(e),e===null?null:e.stateNode},findFiberByHostInstance:Ui.findFiberByHostInstance||K2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{xc=Ta.inject(e$),Ln=Ta}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z2;nn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wp(t))throw Error(te(200));return X2(e,t,null,n)};nn.createRoot=function(e,t){if(!wp(e))throw Error(te(299));var n=!1,r="",o=U1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=xp(e,1,!1,null,null,n,!1,r,o),e[Zn]=t.current,zs(e.nodeType===8?e.parentNode:e),new bp(t)};nn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(te(188)):(e=Object.keys(e).join(","),Error(te(268,e)));return e=cy(t),e=e===null?null:e.stateNode,e};nn.flushSync=function(e){return mo(e)};nn.hydrate=function(e,t,n){if(!Tc(t))throw Error(te(200));return Ac(null,e,t,!0,n)};nn.hydrateRoot=function(e,t,n){if(!wp(e))throw Error(te(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=U1;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=M1(t,null,e,1,n??null,o,!1,i,s),e[Zn]=t.current,zs(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Fc(t)};nn.render=function(e,t,n){if(!Tc(t))throw Error(te(200));return Ac(null,e,t,!1,n)};nn.unmountComponentAtNode=function(e){if(!Tc(e))throw Error(te(40));return e._reactRootContainer?(mo(function(){Ac(null,null,e,!1,function(){e._reactRootContainer=null,e[Zn]=null})}),!0):!1};nn.unstable_batchedUpdates=hp;nn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Tc(n))throw Error(te(200));if(e==null||e._reactInternals===void 0)throw Error(te(38));return Ac(e,t,n,!1,r)};nn.version="18.3.1-next-f1338f8080-20240426";function B1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B1)}catch(e){console.error(e)}}B1(),B0.exports=nn;var W1=B0.exports,pm=W1;ld.createRoot=pm.createRoot,ld.hydrateRoot=pm.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vs(){return Vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vs.apply(this,arguments)}var vr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vr||(vr={}));const hm="popstate";function t$(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:l}=r.location;return Jl("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Hs(o)}return V1(t,n,null,e)}function n$(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:l="",hash:c=""}=ko(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Jl("",{pathname:s,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let c=o.location.href,f=c.indexOf("#");l=f===-1?c:c.slice(0,f)}return l+"#"+(typeof i=="string"?i:Hs(i))}function r(o,i){Rc(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return V1(t,n,r,e)}function We(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function r$(){return Math.random().toString(36).substr(2,8)}function mm(e,t){return{usr:e.state,key:e.key,idx:t}}function Jl(e,t,n,r){return n===void 0&&(n=null),Vs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ko(t):t,{state:n,key:t&&t.key||r||r$()})}function Hs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ko(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function V1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,l=vr.Pop,c=null,f=u();f==null&&(f=0,s.replaceState(Vs({},s.state,{idx:f}),""));function u(){return(s.state||{idx:null}).idx}function d(){l=vr.Pop;let $=u(),h=$==null?null:$-f;f=$,c&&c({action:l,location:b.location,delta:h})}function p($,h){l=vr.Push;let y=Jl(b.location,$,h);n&&n(y,$),f=u()+1;let x=mm(y,f),w=b.createHref(y);try{s.pushState(x,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(w)}i&&c&&c({action:l,location:b.location,delta:1})}function m($,h){l=vr.Replace;let y=Jl(b.location,$,h);n&&n(y,$),f=u();let x=mm(y,f),w=b.createHref(y);s.replaceState(x,"",w),i&&c&&c({action:l,location:b.location,delta:0})}function g($){let h=o.location.origin!=="null"?o.location.origin:o.location.href,y=typeof $=="string"?$:Hs($);return y=y.replace(/ $/,"%20"),We(h,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,h)}let b={get action(){return l},get location(){return e(o,s)},listen($){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(hm,d),c=$,()=>{o.removeEventListener(hm,d),c=null}},createHref($){return t(o,$)},createURL:g,encodeLocation($){let h=g($);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:m,go($){return s.go($)}};return b}var gm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gm||(gm={}));function o$(e,t,n){return n===void 0&&(n="/"),i$(e,t,n)}function i$(e,t,n,r){let o=typeof t=="string"?ko(t):t,i=mi(o.pathname||"/",n);if(i==null)return null;let s=H1(e);s$(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let f=y$(i);l=m$(s[c],f)}return l}function H1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(We(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let f=Fr([r,c.relativePath]),u=n.concat(c);i.children&&i.children.length>0&&(We(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),H1(i.children,t,u,f)),!(i.path==null&&!i.index)&&t.push({path:f,score:p$(f,i.index),routesMeta:u})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,s);else for(let c of q1(i.path))o(i,s,c)}),t}function q1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=q1(r.join("/")),l=[];return l.push(...s.map(c=>c===""?i:[i,c].join("/"))),o&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function s$(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:h$(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const a$=/^:[\w-]+$/,l$=3,c$=2,u$=1,d$=10,f$=-2,ym=e=>e==="*";function p$(e,t){let n=e.split("/"),r=n.length;return n.some(ym)&&(r+=f$),t&&(r+=c$),n.filter(o=>!ym(o)).reduce((o,i)=>o+(a$.test(i)?l$:i===""?u$:d$),r)}function h$(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function m$(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],f=l===r.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=tf({path:c.relativePath,caseSensitive:c.caseSensitive,end:f},u),p=c.route;if(!d)return null;Object.assign(o,d.params),s.push({params:o,pathname:Fr([i,d.pathname]),pathnameBase:$$(Fr([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=Fr([i,d.pathnameBase]))}return s}function tf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=g$(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((f,u,d)=>{let{paramName:p,isOptional:m}=u;if(p==="*"){let b=l[d]||"";s=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const g=l[d];return m&&!g?f[p]=void 0:f[p]=(g||"").replace(/%2F/g,"/"),f},{}),pathname:i,pathnameBase:s,pattern:e}}function g$(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function y$(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Rc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function mi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const x$=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,v$=e=>x$.test(e);function b$(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?ko(e):e,i;if(n)if(v$(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Rc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=xm(n.substring(1),"/"):i=xm(n,t)}else i=t;return{pathname:i,search:k$(r),hash:S$(o)}}function xm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function _u(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function w$(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $p(e,t){let n=w$(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function kp(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ko(e):(o=Vs({},e),We(!o.pathname||!o.pathname.includes("?"),_u("?","pathname","search",o)),We(!o.pathname||!o.pathname.includes("#"),_u("#","pathname","hash",o)),We(!o.search||!o.search.includes("#"),_u("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,l;if(s==null)l=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;o.pathname=p.join("/")}l=d>=0?t[d]:"/"}let c=b$(o,l),f=s&&s!=="/"&&s.endsWith("/"),u=(i||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(f||u)&&(c.pathname+="/"),c}const Fr=e=>e.join("/").replace(/\/\/+/g,"/"),$$=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),k$=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,S$=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function j$(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const G1=["post","put","patch","delete"];new Set(G1);const _$=["get",...G1];new Set(_$);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qs(){return qs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qs.apply(this,arguments)}const Oc=L.createContext(null),Y1=L.createContext(null),rr=L.createContext(null),zc=L.createContext(null),Mn=L.createContext({outlet:null,matches:[],isDataRoute:!1}),Q1=L.createContext(null);function E$(e,t){let{relative:n}=t===void 0?{}:t;ji()||We(!1);let{basename:r,navigator:o}=L.useContext(rr),{hash:i,pathname:s,search:l}=Nc(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Fr([r,s])),o.createHref({pathname:c,search:l,hash:i})}function ji(){return L.useContext(zc)!=null}function Ir(){return ji()||We(!1),L.useContext(zc).location}function X1(e){L.useContext(rr).static||L.useLayoutEffect(e)}function Un(){let{isDataRoute:e}=L.useContext(Mn);return e?B$():C$()}function C$(){ji()||We(!1);let e=L.useContext(Oc),{basename:t,future:n,navigator:r}=L.useContext(rr),{matches:o}=L.useContext(Mn),{pathname:i}=Ir(),s=JSON.stringify($p(o,n.v7_relativeSplatPath)),l=L.useRef(!1);return X1(()=>{l.current=!0}),L.useCallback(function(f,u){if(u===void 0&&(u={}),!l.current)return;if(typeof f=="number"){r.go(f);return}let d=kp(f,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Fr([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,s,i,e])}const P$=L.createContext(null);function F$(e){let t=L.useContext(Mn).outlet;return t&&L.createElement(P$.Provider,{value:e},t)}function K1(){let{matches:e}=L.useContext(Mn),t=e[e.length-1];return t?t.params:{}}function Nc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=L.useContext(rr),{matches:o}=L.useContext(Mn),{pathname:i}=Ir(),s=JSON.stringify($p(o,r.v7_relativeSplatPath));return L.useMemo(()=>kp(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function T$(e,t){return A$(e,t)}function A$(e,t,n,r){ji()||We(!1);let{navigator:o}=L.useContext(rr),{matches:i}=L.useContext(Mn),s=i[i.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let f=Ir(),u;if(t){var d;let $=typeof t=="string"?ko(t):t;c==="/"||(d=$.pathname)!=null&&d.startsWith(c)||We(!1),u=$}else u=f;let p=u.pathname||"/",m=p;if(c!=="/"){let $=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice($.length).join("/")}let g=o$(e,{pathname:m}),b=L$(g&&g.map($=>Object.assign({},$,{params:Object.assign({},l,$.params),pathname:Fr([c,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?c:Fr([c,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),i,n,r);return t&&b?L.createElement(zc.Provider,{value:{location:qs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:vr.Pop}},b):b}function R$(){let e=U$(),t=j$(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},t),n?L.createElement("pre",{style:o},n):null,null)}const O$=L.createElement(R$,null);class z$ extends L.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?L.createElement(Mn.Provider,{value:this.props.routeContext},L.createElement(Q1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function N$(e){let{routeContext:t,match:n,children:r}=e,o=L.useContext(Oc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Mn.Provider,{value:t},r)}function L$(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let u=s.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);u>=0||We(!1),s=s.slice(0,Math.min(s.length,u+1))}let c=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let d=s[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(f=u),d.route.id){let{loaderData:p,errors:m}=n,g=d.route.loader&&p[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||g){c=!0,f>=0?s=s.slice(0,f+1):s=[s[0]];break}}}return s.reduceRight((u,d,p)=>{let m,g=!1,b=null,$=null;n&&(m=l&&d.route.id?l[d.route.id]:void 0,b=d.route.errorElement||O$,c&&(f<0&&p===0?(W$("route-fallback"),g=!0,$=null):f===p&&(g=!0,$=d.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,p+1)),y=()=>{let x;return m?x=b:g?x=$:d.route.Component?x=L.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=u,L.createElement(N$,{match:d,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:x})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?L.createElement(z$,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:y(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):y()},null)}var J1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(J1||{}),Z1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Z1||{});function D$(e){let t=L.useContext(Oc);return t||We(!1),t}function I$(e){let t=L.useContext(Y1);return t||We(!1),t}function M$(e){let t=L.useContext(Mn);return t||We(!1),t}function ex(e){let t=M$(),n=t.matches[t.matches.length-1];return n.route.id||We(!1),n.route.id}function U$(){var e;let t=L.useContext(Q1),n=I$(),r=ex();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function B$(){let{router:e}=D$(J1.UseNavigateStable),t=ex(Z1.UseNavigateStable),n=L.useRef(!1);return X1(()=>{n.current=!0}),L.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,qs({fromRouteId:t},i)))},[e,t])}const vm={};function W$(e,t,n){vm[e]||(vm[e]=!0)}function tx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function os(e){let{to:t,replace:n,state:r,relative:o}=e;ji()||We(!1);let{future:i,static:s}=L.useContext(rr),{matches:l}=L.useContext(Mn),{pathname:c}=Ir(),f=Un(),u=kp(t,$p(l,i.v7_relativeSplatPath),c,o==="path"),d=JSON.stringify(u);return L.useEffect(()=>f(JSON.parse(d),{replace:n,state:r,relative:o}),[f,d,o,n,r]),null}function nf(e){return F$(e.context)}function rt(e){We(!1)}function nx(e){let{basename:t="/",children:n=null,location:r,navigationType:o=vr.Pop,navigator:i,static:s=!1,future:l}=e;ji()&&We(!1);let c=t.replace(/^\/*/,"/"),f=L.useMemo(()=>({basename:c,navigator:i,static:s,future:qs({v7_relativeSplatPath:!1},l)}),[c,l,i,s]);typeof r=="string"&&(r=ko(r));let{pathname:u="/",search:d="",hash:p="",state:m=null,key:g="default"}=r,b=L.useMemo(()=>{let $=mi(u,c);return $==null?null:{location:{pathname:$,search:d,hash:p,state:m,key:g},navigationType:o}},[c,u,d,p,m,g,o]);return b==null?null:L.createElement(rr.Provider,{value:f},L.createElement(zc.Provider,{children:n,value:b}))}function V$(e){let{children:t,location:n}=e;return T$(rf(t),n)}new Promise(()=>{});function rf(e,t){t===void 0&&(t=[]);let n=[];return L.Children.forEach(e,(r,o)=>{if(!L.isValidElement(r))return;let i=[...t,o];if(r.type===L.Fragment){n.push.apply(n,rf(r.props.children,i));return}r.type!==rt&&We(!1),!r.props.index||!r.props.children||We(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=rf(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zl(){return Zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zl.apply(this,arguments)}function rx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function H$(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function q$(e,t){return e.button===0&&(!t||t==="_self")&&!H$(e)}const G$=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Y$=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Q$="6";try{window.__reactRouterVersion=Q$}catch{}const X$=L.createContext({isTransitioning:!1}),K$="startTransition",ec=Vb[K$];function J$(e){let{basename:t,children:n,future:r,window:o}=e,i=L.useRef();i.current==null&&(i.current=t$({window:o,v5Compat:!0}));let s=i.current,[l,c]=L.useState({action:s.action,location:s.location}),{v7_startTransition:f}=r||{},u=L.useCallback(d=>{f&&ec?ec(()=>c(d)):c(d)},[c,f]);return L.useLayoutEffect(()=>s.listen(u),[s,u]),L.useEffect(()=>tx(r),[r]),L.createElement(nx,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}function Z$(e){let{basename:t,children:n,future:r,window:o}=e,i=L.useRef();i.current==null&&(i.current=n$({window:o,v5Compat:!0}));let s=i.current,[l,c]=L.useState({action:s.action,location:s.location}),{v7_startTransition:f}=r||{},u=L.useCallback(d=>{f&&ec?ec(()=>c(d)):c(d)},[c,f]);return L.useLayoutEffect(()=>s.listen(u),[s,u]),L.useEffect(()=>tx(r),[r]),L.createElement(nx,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const ek=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nk=L.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:l,target:c,to:f,preventScrollReset:u,viewTransition:d}=t,p=rx(t,G$),{basename:m}=L.useContext(rr),g,b=!1;if(typeof f=="string"&&tk.test(f)&&(g=f,ek))try{let x=new URL(window.location.href),w=f.startsWith("//")?new URL(x.protocol+f):new URL(f),C=mi(w.pathname,m);w.origin===x.origin&&C!=null?f=C+w.search+w.hash:b=!0}catch{}let $=E$(f,{relative:o}),h=ik(f,{replace:s,state:l,target:c,preventScrollReset:u,relative:o,viewTransition:d});function y(x){r&&r(x),x.defaultPrevented||h(x)}return L.createElement("a",Zl({},p,{href:g||$,onClick:b||i?r:y,ref:n,target:c}))}),rk=L.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:l,to:c,viewTransition:f,children:u}=t,d=rx(t,Y$),p=Nc(c,{relative:d.relative}),m=Ir(),g=L.useContext(Y1),{navigator:b,basename:$}=L.useContext(rr),h=g!=null&&sk(p)&&f===!0,y=b.encodeLocation?b.encodeLocation(p).pathname:p.pathname,x=m.pathname,w=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;o||(x=x.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&$&&(w=mi(w,$)||w);const C=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let _=x===y||!s&&x.startsWith(y)&&x.charAt(C)==="/",P=w!=null&&(w===y||!s&&w.startsWith(y)&&w.charAt(y.length)==="/"),v={isActive:_,isPending:P,isTransitioning:h},j=_?r:void 0,T;typeof i=="function"?T=i(v):T=[i,_?"active":null,P?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let A=typeof l=="function"?l(v):l;return L.createElement(nk,Zl({},d,{"aria-current":j,className:T,ref:n,style:A,to:c,viewTransition:f}),typeof u=="function"?u(v):u)});var of;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(of||(of={}));var bm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bm||(bm={}));function ok(e){let t=L.useContext(Oc);return t||We(!1),t}function ik(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:l}=t===void 0?{}:t,c=Un(),f=Ir(),u=Nc(e,{relative:s});return L.useCallback(d=>{if(q$(d,n)){d.preventDefault();let p=r!==void 0?r:Hs(f)===Hs(u);c(e,{replace:p,state:o,preventScrollReset:i,relative:s,viewTransition:l})}},[f,c,u,r,o,n,e,i,s,l])}function sk(e,t){t===void 0&&(t={});let n=L.useContext(X$);n==null&&We(!1);let{basename:r}=ok(of.useViewTransitionState),o=Nc(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=mi(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=mi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return tf(o.pathname,s)!=null||tf(o.pathname,i)!=null}var dt=function(){return dt=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},dt.apply(this,arguments)};function gi(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Re="-ms-",vs="-moz-",$e="-webkit-",ox="comm",Lc="rule",Sp="decl",ak="@import",lk="@namespace",ix="@keyframes",ck="@layer",sx=Math.abs,jp=String.fromCharCode,sf=Object.assign;function uk(e,t){return st(e,0)^45?(((t<<2^st(e,0))<<2^st(e,1))<<2^st(e,2))<<2^st(e,3):0}function ax(e){return e.trim()}function qn(e,t){return(e=t.exec(e))?e[0]:e}function me(e,t,n){return e.replace(t,n)}function pl(e,t,n){return e.indexOf(t,n)}function st(e,t){return e.charCodeAt(t)|0}function go(e,t,n){return e.slice(t,n)}function bn(e){return e.length}function lx(e){return e.length}function is(e,t){return t.push(e),e}function dk(e,t){return e.map(t).join("")}function wm(e,t){return e.filter(function(n){return!qn(n,t)})}var Dc=1,yi=1,cx=0,pn=0,Ze=0,_i="";function Ic(e,t,n,r,o,i,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Dc,column:yi,length:s,return:"",siblings:l}}function cr(e,t){return sf(Ic("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function _o(e){for(;e.root;)e=cr(e.root,{children:[e]});is(e,e.siblings)}function fk(){return Ze}function pk(){return Ze=pn>0?st(_i,--pn):0,yi--,Ze===10&&(yi=1,Dc--),Ze}function _n(){return Ze=pn<cx?st(_i,pn++):0,yi++,Ze===10&&(yi=1,Dc++),Ze}function br(){return st(_i,pn)}function hl(){return pn}function Mc(e,t){return go(_i,e,t)}function Gs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hk(e){return Dc=yi=1,cx=bn(_i=e),pn=0,[]}function mk(e){return _i="",e}function Eu(e){return ax(Mc(pn-1,af(e===91?e+2:e===40?e+1:e)))}function gk(e){for(;(Ze=br())&&Ze<33;)_n();return Gs(e)>2||Gs(Ze)>3?"":" "}function yk(e,t){for(;--t&&_n()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return Mc(e,hl()+(t<6&&br()==32&&_n()==32))}function af(e){for(;_n();)switch(Ze){case e:return pn;case 34:case 39:e!==34&&e!==39&&af(Ze);break;case 40:e===41&&af(e);break;case 92:_n();break}return pn}function xk(e,t){for(;_n()&&e+Ze!==57;)if(e+Ze===84&&br()===47)break;return"/*"+Mc(t,pn-1)+"*"+jp(e===47?e:_n())}function vk(e){for(;!Gs(br());)_n();return Mc(e,pn)}function bk(e){return mk(ml("",null,null,null,[""],e=hk(e),0,[0],e))}function ml(e,t,n,r,o,i,s,l,c){for(var f=0,u=0,d=s,p=0,m=0,g=0,b=1,$=1,h=1,y=0,x="",w=o,C=i,_=r,P=x;$;)switch(g=y,y=_n()){case 40:if(g!=108&&st(P,d-1)==58){pl(P+=me(Eu(y),"&","&\f"),"&\f",sx(f?l[f-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:P+=Eu(y);break;case 9:case 10:case 13:case 32:P+=gk(g);break;case 92:P+=yk(hl()-1,7);continue;case 47:switch(br()){case 42:case 47:is(wk(xk(_n(),hl()),t,n,c),c),(Gs(g||1)==5||Gs(br()||1)==5)&&bn(P)&&go(P,-1,void 0)!==" "&&(P+=" ");break;default:P+="/"}break;case 123*b:l[f++]=bn(P)*h;case 125*b:case 59:case 0:switch(y){case 0:case 125:$=0;case 59+u:h==-1&&(P=me(P,/\f/g,"")),m>0&&(bn(P)-d||b===0&&g===47)&&is(m>32?km(P+";",r,n,d-1,c):km(me(P," ","")+";",r,n,d-2,c),c);break;case 59:P+=";";default:if(is(_=$m(P,t,n,f,u,o,l,x,w=[],C=[],d,i),i),y===123)if(u===0)ml(P,t,_,_,w,i,d,l,C);else{switch(p){case 99:if(st(P,3)===110)break;case 108:if(st(P,2)===97)break;default:u=0;case 100:case 109:case 115:}u?ml(e,_,_,r&&is($m(e,_,_,0,0,o,l,x,o,w=[],d,C),C),o,C,d,l,r?w:C):ml(P,_,_,_,[""],C,0,l,C)}}f=u=m=0,b=h=1,x=P="",d=s;break;case 58:d=1+bn(P),m=g;default:if(b<1){if(y==123)--b;else if(y==125&&b++==0&&pk()==125)continue}switch(P+=jp(y),y*b){case 38:h=u>0?1:(P+="\f",-1);break;case 44:l[f++]=(bn(P)-1)*h,h=1;break;case 64:br()===45&&(P+=Eu(_n())),p=br(),u=d=bn(x=P+=vk(hl())),y++;break;case 45:g===45&&bn(P)==2&&(b=0)}}return i}function $m(e,t,n,r,o,i,s,l,c,f,u,d){for(var p=o-1,m=o===0?i:[""],g=lx(m),b=0,$=0,h=0;b<r;++b)for(var y=0,x=go(e,p+1,p=sx($=s[b])),w=e;y<g;++y)(w=ax($>0?m[y]+" "+x:me(x,/&\f/g,m[y])))&&(c[h++]=w);return Ic(e,t,n,o===0?Lc:l,c,f,u,d)}function wk(e,t,n,r){return Ic(e,t,n,ox,jp(fk()),go(e,2,-2),0,r)}function km(e,t,n,r,o){return Ic(e,t,n,Sp,go(e,0,r),go(e,r+1,-1),r,o)}function ux(e,t,n){switch(uk(e,t)){case 5103:return $e+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return $e+e+e;case 4855:return $e+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return vs+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $e+e+vs+e+Re+e+e;case 5936:switch(st(e,t+11)){case 114:return $e+e+Re+me(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $e+e+Re+me(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $e+e+Re+me(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $e+e+Re+e+e;case 6165:return $e+e+Re+"flex-"+e+e;case 5187:return $e+e+me(e,/(\w+).+(:[^]+)/,$e+"box-$1$2"+Re+"flex-$1$2")+e;case 5443:return $e+e+Re+"flex-item-"+me(e,/flex-|-self/g,"")+(qn(e,/flex-|baseline/)?"":Re+"grid-row-"+me(e,/flex-|-self/g,""))+e;case 4675:return $e+e+Re+"flex-line-pack"+me(e,/align-content|flex-|-self/g,"")+e;case 5548:return $e+e+Re+me(e,"shrink","negative")+e;case 5292:return $e+e+Re+me(e,"basis","preferred-size")+e;case 6060:return $e+"box-"+me(e,"-grow","")+$e+e+Re+me(e,"grow","positive")+e;case 4554:return $e+me(e,/([^-])(transform)/g,"$1"+$e+"$2")+e;case 6187:return me(me(me(e,/(zoom-|grab)/,$e+"$1"),/(image-set)/,$e+"$1"),e,"")+e;case 5495:case 3959:return me(e,/(image-set\([^]*)/,$e+"$1$`$1");case 4968:return me(me(e,/(.+:)(flex-)?(.*)/,$e+"box-pack:$3"+Re+"flex-pack:$3"),/space-between/,"justify")+$e+e+e;case 4200:if(!qn(e,/flex-|baseline/))return Re+"grid-column-align"+go(e,t)+e;break;case 2592:case 3360:return Re+me(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,qn(r.props,/grid-\w+-end/)})?~pl(e+(n=n[t].value),"span",0)?e:Re+me(e,"-start","")+e+Re+"grid-row-span:"+(~pl(n,"span",0)?qn(n,/\d+/):+qn(n,/\d+/)-+qn(e,/\d+/))+";":Re+me(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return qn(r.props,/grid-\w+-start/)})?e:Re+me(me(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return me(e,/(.+)-inline(.+)/,$e+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bn(e)-1-t>6)switch(st(e,t+1)){case 109:if(st(e,t+4)!==45)break;case 102:return me(e,/(.+:)(.+)-([^]+)/,"$1"+$e+"$2-$3$1"+vs+(st(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~pl(e,"stretch",0)?ux(me(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return me(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,l,c,f){return Re+o+":"+i+f+(s?Re+o+"-span:"+(l?c:+c-+i)+f:"")+e});case 4949:if(st(e,t+6)===121)return me(e,":",":"+$e)+e;break;case 6444:switch(st(e,st(e,14)===45?18:11)){case 120:return me(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$e+(st(e,14)===45?"inline-":"")+"box$3$1"+$e+"$2$3$1"+Re+"$2box$3")+e;case 100:return me(e,":",":"+Re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return me(e,"scroll-","scroll-snap-")+e}return e}function tc(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function $k(e,t,n,r){switch(e.type){case ck:if(e.children.length)break;case ak:case lk:case Sp:return e.return=e.return||e.value;case ox:return"";case ix:return e.return=e.value+"{"+tc(e.children,r)+"}";case Lc:if(!bn(e.value=e.props.join(",")))return""}return bn(n=tc(e.children,r))?e.return=e.value+"{"+n+"}":""}function kk(e){var t=lx(e);return function(n,r,o,i){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,i)||"";return s}}function Sk(e){return function(t){t.root||(t=t.return)&&e(t)}}function jk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Sp:e.return=ux(e.value,e.length,n);return;case ix:return tc([cr(e,{value:me(e.value,"@","@"+$e)})],r);case Lc:if(e.length)return dk(n=e.props,function(o){switch(qn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_o(cr(e,{props:[me(o,/:(read-\w+)/,":"+vs+"$1")]})),_o(cr(e,{props:[o]})),sf(e,{props:wm(n,r)});break;case"::placeholder":_o(cr(e,{props:[me(o,/:(plac\w+)/,":"+$e+"input-$1")]})),_o(cr(e,{props:[me(o,/:(plac\w+)/,":"+vs+"$1")]})),_o(cr(e,{props:[me(o,/:(plac\w+)/,Re+"input-$1")]})),_o(cr(e,{props:[o]})),sf(e,{props:wm(n,r)});break}return""})}}var _k={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qt={},xi=typeof process<"u"&&Qt!==void 0&&(Qt.REACT_APP_SC_ATTR||Qt.SC_ATTR)||"data-styled",dx="active",fx="data-styled-version",Uc="6.3.11",_p=`/*!sc*/
`,bs=typeof window<"u"&&typeof document<"u",Ek=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Qt!==void 0&&Qt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Qt.REACT_APP_SC_DISABLE_SPEEDY!==""?Qt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Qt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Qt!==void 0&&Qt.SC_DISABLE_SPEEDY!==void 0&&Qt.SC_DISABLE_SPEEDY!==""&&Qt.SC_DISABLE_SPEEDY!=="false"&&Qt.SC_DISABLE_SPEEDY),Ck={};function yo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var gl=new Map,nc=new Map,yl=1,ss=function(e){if(gl.has(e))return gl.get(e);for(;nc.has(yl);)yl++;var t=yl++;return gl.set(e,t),nc.set(t,e),t},Pk=function(e,t){yl=t+1,gl.set(e,t),nc.set(t,e)},Ep=Object.freeze([]),vi=Object.freeze({});function px(e,t,n){return n===void 0&&(n=vi),e.theme!==n.theme&&e.theme||t||n.theme}var hx=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Fk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tk=/(^-|-$)/g;function Sm(e){return e.replace(Fk,"-").replace(Tk,"")}var Ak=/(a)(d)/gi,jm=function(e){return String.fromCharCode(e+(e>25?39:97))};function lf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=jm(t%52)+n;return(jm(t%52)+n).replace(Ak,"$1-$2")}var Cu,Yr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},mx=function(e){return Yr(5381,e)};function Cp(e){return lf(mx(e)>>>0)}function Rk(e){return e.displayName||e.name||"Component"}function Pu(e){return typeof e=="string"&&!0}var gx=typeof Symbol=="function"&&Symbol.for,yx=gx?Symbol.for("react.memo"):60115,Ok=gx?Symbol.for("react.forward_ref"):60112,zk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lk=((Cu={})[Ok]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cu[yx]=xx,Cu);function _m(e){return("type"in(t=e)&&t.type.$$typeof)===yx?xx:"$$typeof"in e?Lk[e.$$typeof]:zk;var t}var Dk=Object.defineProperty,Ik=Object.getOwnPropertyNames,Em=Object.getOwnPropertySymbols,Mk=Object.getOwnPropertyDescriptor,Uk=Object.getPrototypeOf,Cm=Object.prototype;function vx(e,t,n){if(typeof t!="string"){if(Cm){var r=Uk(t);r&&r!==Cm&&vx(e,r,n)}var o=Ik(t);Em&&(o=o.concat(Em(t)));for(var i=_m(e),s=_m(t),l=0;l<o.length;++l){var c=o[l];if(!(c in Nk||n&&n[c]||s&&c in s||i&&c in i)){var f=Mk(t,c);try{Dk(e,c,f)}catch{}}}}return e}function xo(e){return typeof e=="function"}function Pp(e){return typeof e=="object"&&"styledComponentId"in e}function Zr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function rc(e,t){return e.join("")}function Ys(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cf(e,t,n){if(n===void 0&&(n=!1),!n&&!Ys(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=cf(e[r],t[r]);else if(Ys(t))for(var r in t)e[r]=cf(e[r],t[r]);return e}function Fp(e,t){Object.defineProperty(e,"toString",{value:t})}var Bk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw yo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),c=0,f=(s=0,n.length);s<f;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++,c++);c>0&&this._cGroup>t&&(this._cIndex+=c)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+=this.tag.getRule(s)+_p;return n},e}(),Wk="style[".concat(xi,"][").concat(fx,'="').concat(Uc,'"]'),Vk=new RegExp("^".concat(xi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Pm=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},uf=function(e){if(!e)return document;if(Pm(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Pm(t))return t}return document},Hk=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},qk=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(_p),o=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var c=l.match(Vk);if(c){var f=0|parseInt(c[1],10),u=c[2];f!==0&&(Pk(u,f),Hk(e,u,c[3]),e.getTag().insertRules(f,o)),o.length=0}else o.push(l)}}},Fu=function(e){for(var t=uf(e.options.target).querySelectorAll(Wk),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(xi)!==dx&&(qk(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Gk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var bx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var c=Array.from(l.querySelectorAll("style[".concat(xi,"]")));return c[c.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(xi,dx),r.setAttribute(fx,Uc);var s=Gk();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Yk=function(){function e(t){this.element=bx(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,i=0,s=o.length;i<s;i++){var l=o[i];if(l.ownerNode===n)return l}throw yo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Qk=function(){function e(t){this.element=bx(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Xk=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Fm=bs,Kk={isServer:!bs,useCSSOMInjection:!Ek},oc=function(){function e(t,n,r){t===void 0&&(t=vi),n===void 0&&(n={});var o=this;this.options=dt(dt({},Kk),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&bs&&Fm&&(Fm=!1,Fu(this)),Fp(this,function(){return function(i){for(var s=i.getTag(),l=s.length,c="",f=function(d){var p=function(h){return nc.get(h)}(d);if(p===void 0)return"continue";var m=i.names.get(p);if(m===void 0||!m.size)return"continue";var g=s.getGroup(d);if(g.length===0)return"continue";var b=xi+".g"+d+'[id="'+p+'"]',$="";m.forEach(function(h){h.length>0&&($+=h+",")}),c+=g+b+'{content:"'+$+'"}'+_p},u=0;u<l;u++)f(u);return c}(o)})}return e.registerId=function(t){return ss(t)},e.prototype.rehydrate=function(){!this.server&&bs&&Fu(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(dt(dt({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&bs&&t.target!==this.options.target&&uf(this.options.target)!==uf(t.target)&&Fu(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Xk(o):r?new Yk(o):new Qk(o)}(this.options),new Bk(t)));var t},e.prototype.hasNameForId=function(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o},e.prototype.registerName=function(t,n){ss(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ss(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ss(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Jk=/&/g,Gn=47,Qr=42;function Tm(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,o=!1,i=0;i<t;i++){var s=e.charCodeAt(i);if(r!==0||o||s!==Gn||e.charCodeAt(i+1)!==Qr)if(o)s===Qr&&e.charCodeAt(i+1)===Gn&&(o=!1,i++);else if(s!==34&&s!==39||i!==0&&e.charCodeAt(i-1)===92){if(r===0){if(s===123)n++;else if(s===125&&--n<0)return!0}}else r===0?r=s:r===s&&(r=0);else o=!0,i++}return n!==0||r!==0}function wx(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wx(n.children,t)),n})}function Zk(e){var t,n,r,o=vi,i=o.options,s=i===void 0?vi:i,l=o.plugins,c=l===void 0?Ep:l,f=function(g,b,$){return $.startsWith(n)&&$.endsWith(n)&&$.replaceAll(n,"").length>0?".".concat(t):g},u=c.slice();u.push(function(g){g.type===Lc&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(Jk,n).replace(r,f))}),s.prefix&&u.push(jk),u.push($k);var d=[],p=kk(u.concat(Sk(function(g){return d.push(g)}))),m=function(g,b,$,h){b===void 0&&(b=""),$===void 0&&($=""),h===void 0&&(h="&"),t=h,n=b,r=void 0;var y=function(w){if(!Tm(w))return w;for(var C=w.length,_="",P=0,v=0,j=0,T=!1,A=0;A<C;A++){var R=w.charCodeAt(A);if(j!==0||T||R!==Gn||w.charCodeAt(A+1)!==Qr)if(T)R===Qr&&w.charCodeAt(A+1)===Gn&&(T=!1,A++);else if(R!==34&&R!==39||A!==0&&w.charCodeAt(A-1)===92){if(j===0)if(R===123)v++;else if(R===125){if(--v<0){for(var N=A+1;N<C;){var F=w.charCodeAt(N);if(F===59||F===10)break;N++}N<C&&w.charCodeAt(N)===59&&N++,v=0,A=N-1,P=N;continue}v===0&&(_+=w.substring(P,A+1),P=A+1)}else R===59&&v===0&&(_+=w.substring(P,A+1),P=A+1)}else j===0?j=R:j===R&&(j=0);else T=!0,A++}if(P<C){var M=w.substring(P);Tm(M)||(_+=M)}return _}(function(w){if(w.indexOf("//")===-1)return w;for(var C=w.length,_=[],P=0,v=0,j=0,T=0;v<C;){var A=w.charCodeAt(v);if(A!==34&&A!==39||v!==0&&w.charCodeAt(v-1)===92)if(j===0)if(A===Gn&&v+1<C&&w.charCodeAt(v+1)===Qr){for(v+=2;v+1<C&&(w.charCodeAt(v)!==Qr||w.charCodeAt(v+1)!==Gn);)v++;v+=2}else if(A===40&&v>=3&&(32|w.charCodeAt(v-1))==108&&(32|w.charCodeAt(v-2))==114&&(32|w.charCodeAt(v-3))==117)T=1,v++;else if(T>0)A===41?T--:A===40&&T++,v++;else if(A===Qr&&v+1<C&&w.charCodeAt(v+1)===Gn)v>P&&_.push(w.substring(P,v)),P=v+=2;else if(A===Gn&&v+1<C&&w.charCodeAt(v+1)===Gn){for(v>P&&_.push(w.substring(P,v));v<C&&w.charCodeAt(v)!==10;)v++;P=v}else v++;else v++;else j===0?j=A:j===A&&(j=0),v++}return P===0?w:(P<C&&_.push(w.substring(P)),_.join(""))}(g)),x=bk($||b?"".concat($," ").concat(b," { ").concat(y," }"):y);return s.namespace&&(x=wx(x,s.namespace)),d=[],tc(x,p),d};return m.hash=c.length?c.reduce(function(g,b){return b.name||yo(15),Yr(g,b.name)},5381).toString():"",m}var eS=new oc,df=Zk(),$x=le.createContext({shouldForwardProp:void 0,styleSheet:eS,stylis:df});$x.Consumer;le.createContext(void 0);function ff(){return le.useContext($x)}var kx=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=df);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Fp(this,function(){throw yo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=df),this.name+t.hash},e}();function tS(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in _k||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var nS=function(e){return e>="A"&&e<="Z"};function Am(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;nS(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Sx=function(e){return e==null||e===!1||e===""},jx=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Sx(r)&&(Array.isArray(r)&&r.isCss||xo(r)?t.push("".concat(Am(n),":"),r,";"):Ys(r)?t.push.apply(t,gi(gi(["".concat(n," {")],jx(r),!1),["}"],!1)):t.push("".concat(Am(n),": ").concat(tS(n,r),";")))}return t};function Tr(e,t,n,r,o){if(o===void 0&&(o=[]),typeof e=="string")return e&&o.push(e),o;if(Sx(e))return o;if(Pp(e))return o.push(".".concat(e.styledComponentId)),o;if(xo(e)){if(!xo(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return o.push(e),o;var i=e(t);return Tr(i,t,n,r,o)}var s;if(e instanceof kx)return n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o;if(Ys(e)){for(var l=jx(e),c=0;c<l.length;c++)o.push(l[c]);return o}if(!Array.isArray(e))return o.push(e.toString()),o;for(c=0;c<e.length;c++)Tr(e[c],t,n,r,o);return o}function _x(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xo(n)&&!Pp(n))return!1}return!0}var rS=mx(Uc),oS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_x(t),this.componentId=n,this.baseHash=Yr(rS,n),this.baseStyle=r,oc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Zr(o,this.staticRulesId);else{var i=rc(Tr(this.rules,t,n,r)),s=lf(Yr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}o=Zr(o,s),this.staticRulesId=s}else{for(var c=Yr(this.baseHash,r.hash),f="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")f+=d;else if(d){var p=rc(Tr(d,t,n,r));c=Yr(Yr(c,String(u)),p),f+=p}}if(f){var m=lf(c>>>0);if(!n.hasNameForId(this.componentId,m)){var g=r(f,".".concat(m),void 0,this.componentId);n.insertRules(this.componentId,m,g)}o=Zr(o,m)}}return{className:o,css:typeof window>"u"?n.getTag().getGroup(ss(this.componentId)):""}},e}(),Qs=le.createContext(void 0);Qs.Consumer;function iS(e){var t=le.useContext(Qs),n=le.useMemo(function(){return function(r,o){if(!r)throw yo(14);if(xo(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw yo(8);return o?dt(dt({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?le.createElement(Qs.Provider,{value:n},e.children):null}var Tu={};function sS(e,t,n){var r=Pp(e),o=e,i=!Pu(e),s=t.attrs,l=s===void 0?Ep:s,c=t.componentId,f=c===void 0?function(w,C){var _=typeof w!="string"?"sc":Sm(w);Tu[_]=(Tu[_]||0)+1;var P="".concat(_,"-").concat(Cp(Uc+_+Tu[_]));return C?"".concat(C,"-").concat(P):P}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(w){return Pu(w)?"styled.".concat(w):"Styled(".concat(Rk(w),")")}(e):u,p=t.displayName&&t.componentId?"".concat(Sm(t.displayName),"-").concat(t.componentId):t.componentId||f,m=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var b=o.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;g=function(w,C){return b(w,C)&&$(w,C)}}else g=b}var h=new oS(n,p,r?o.componentStyle:void 0);function y(w,C){return function(_,P,v){var j=_.attrs,T=_.componentStyle,A=_.defaultProps,R=_.foldedComponentIds,N=_.styledComponentId,F=_.target,M=le.useContext(Qs),E=ff(),k=_.shouldForwardProp||E.shouldForwardProp,D=px(P,M,A)||vi,z=function(Q,q,X){for(var oe,se=dt(dt({},q),{className:void 0,theme:X}),fe=0;fe<Q.length;fe+=1){var ke=xo(oe=Q[fe])?oe(se):oe;for(var Le in ke)Le==="className"?se.className=Zr(se.className,ke[Le]):Le==="style"?se.style=dt(dt({},se.style),ke[Le]):se[Le]=ke[Le]}return"className"in q&&typeof q.className=="string"&&(se.className=Zr(se.className,q.className)),se}(j,P,D),I=z.as||F,Y={};for(var B in z)z[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&z.theme===D||(B==="forwardedAs"?Y.as=z.forwardedAs:k&&!k(B,I)||(Y[B]=z[B]));var K=function(Q,q){var X=ff(),oe=Q.generateAndInjectStyles(q,X.styleSheet,X.stylis);return oe}(T,z),G=K.className,V=Zr(R,N);return G&&(V+=" "+G),z.className&&(V+=" "+z.className),Y[Pu(I)&&!hx.has(I)?"class":"className"]=V,v&&(Y.ref=v),L.createElement(I,Y)}(x,w,C)}y.displayName=d;var x=le.forwardRef(y);return x.attrs=m,x.componentStyle=h,x.displayName=d,x.shouldForwardProp=g,x.foldedComponentIds=r?Zr(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=p,x.target=r?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(C){for(var _=[],P=1;P<arguments.length;P++)_[P-1]=arguments[P];for(var v=0,j=_;v<j.length;v++)cf(C,j[v],!0);return C}({},o.defaultProps,w):w}}),Fp(x,function(){return".".concat(x.styledComponentId)}),i&&vx(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Rm(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Om=function(e){return Object.assign(e,{isCss:!0})};function zr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(xo(e)||Ys(e))return Om(Tr(Rm(Ep,gi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Tr(r):Om(Tr(Rm(r,t)))}function pf(e,t,n){if(n===void 0&&(n=vi),!t)throw yo(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,zr.apply(void 0,gi([o],i,!1)))};return r.attrs=function(o){return pf(e,t,dt(dt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return pf(e,t,dt(dt({},n),o))},r}var Ex=function(e){return pf(sS,e)},S=Ex;hx.forEach(function(e){S[e]=Ex(e)});var aS=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=_x(t),oc.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(rc(Tr(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&oc.registerId(this.componentId+t);var i=this.componentId+t;this.isStatic?r.hasNameForId(i,i)||this.createStyles(t,n,r,o):(this.removeStyles(t,r),this.createStyles(t,n,r,o))},e}();function lS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=zr.apply(void 0,gi([e],t,!1)),o="sc-global-".concat(Cp(JSON.stringify(r))),i=new aS(r,o),s=new WeakMap,l=function(f){var u=ff(),d=le.useContext(Qs),p=s.get(u.styleSheet);return p===void 0&&(p=u.styleSheet.allocateGSInstance(o),s.set(u.styleSheet,p)),(typeof window>"u"||!u.styleSheet.server)&&c(p,f,u.styleSheet,d,u.stylis),le.useLayoutEffect(function(){return u.styleSheet.server||c(p,f,u.styleSheet,d,u.stylis),function(){var m;i.removeStyles(p,u.styleSheet),m=u.styleSheet.options.target,typeof document<"u"&&(m??document).querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(g){return g.remove()})}},[p,f,u.styleSheet,d,u.stylis]),null};function c(f,u,d,p,m){if(i.isStatic)i.renderStyles(f,Ck,d,m);else{var g=dt(dt({},u),{theme:px(u,p,l.defaultProps)});i.renderStyles(f,g,d,m)}}return le.memo(l)}function lt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=rc(zr.apply(void 0,gi([e],t,!1))),o=Cp(r);return new kx(o,r)}function Cx(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Cx(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function wr(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Cx(e))&&(r&&(r+=" "),r+=t);return r}const Xs=e=>typeof e=="number"&&!isNaN(e),ao=e=>typeof e=="string",Zt=e=>typeof e=="function",xl=e=>ao(e)||Zt(e)?e:null,hf=e=>L.isValidElement(e)||ao(e)||Zt(e)||Xs(e);function cS(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function Bc(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(s){let{children:l,position:c,preventExitTransition:f,done:u,nodeRef:d,isIn:p,playToast:m}=s;const g=r?`${t}--${c}`:t,b=r?`${n}--${c}`:n,$=L.useRef(0);return L.useLayoutEffect(()=>{const h=d.current,y=g.split(" "),x=w=>{w.target===d.current&&(m(),h.removeEventListener("animationend",x),h.removeEventListener("animationcancel",x),$.current===0&&w.type!=="animationcancel"&&h.classList.remove(...y))};h.classList.add(...y),h.addEventListener("animationend",x),h.addEventListener("animationcancel",x)},[]),L.useEffect(()=>{const h=d.current,y=()=>{h.removeEventListener("animationend",y),o?cS(h,u,i):u()};p||(f?y():($.current=1,h.className+=` ${b}`,h.addEventListener("animationend",y)))},[p]),le.createElement(le.Fragment,null,l)}}function zm(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const Tt=new Map;let Ks=[];const mf=new Set,uS=e=>mf.forEach(t=>t(e)),Px=()=>Tt.size>0;function Fx(e,t){var n;if(t)return!((n=Tt.get(t))==null||!n.isToastActive(e));let r=!1;return Tt.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function Tx(e,t){hf(e)&&(Px()||Ks.push({content:e,options:t}),Tt.forEach(n=>{n.buildToast(e,t)}))}function Nm(e,t){Tt.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function dS(e){const{subscribe:t,getSnapshot:n,setProps:r}=L.useRef(function(i){const s=i.containerId||1;return{subscribe(l){const c=function(u,d,p){let m=1,g=0,b=[],$=[],h=[],y=d;const x=new Map,w=new Set,C=()=>{h=Array.from(x.values()),w.forEach(v=>v())},_=v=>{$=v==null?[]:$.filter(j=>j!==v),C()},P=v=>{const{toastId:j,onOpen:T,updateId:A,children:R}=v.props,N=A==null;v.staleId&&x.delete(v.staleId),x.set(j,v),$=[...$,v.props.toastId].filter(F=>F!==v.staleId),C(),p(zm(v,N?"added":"updated")),N&&Zt(T)&&T(L.isValidElement(R)&&R.props)};return{id:u,props:y,observe:v=>(w.add(v),()=>w.delete(v)),toggle:(v,j)=>{x.forEach(T=>{j!=null&&j!==T.props.toastId||Zt(T.toggle)&&T.toggle(v)})},removeToast:_,toasts:x,clearQueue:()=>{g-=b.length,b=[]},buildToast:(v,j)=>{if((B=>{let{containerId:K,toastId:G,updateId:V}=B;const Q=K?K!==u:u!==1,q=x.has(G)&&V==null;return Q||q})(j))return;const{toastId:T,updateId:A,data:R,staleId:N,delay:F}=j,M=()=>{_(T)},E=A==null;E&&g++;const k={...y,style:y.toastStyle,key:m++,...Object.fromEntries(Object.entries(j).filter(B=>{let[K,G]=B;return G!=null})),toastId:T,updateId:A,data:R,closeToast:M,isIn:!1,className:xl(j.className||y.toastClassName),bodyClassName:xl(j.bodyClassName||y.bodyClassName),progressClassName:xl(j.progressClassName||y.progressClassName),autoClose:!j.isLoading&&(D=j.autoClose,z=y.autoClose,D===!1||Xs(D)&&D>0?D:z),deleteToast(){const B=x.get(T),{onClose:K,children:G}=B.props;Zt(K)&&K(L.isValidElement(G)&&G.props),p(zm(B,"removed")),x.delete(T),g--,g<0&&(g=0),b.length>0?P(b.shift()):C()}};var D,z;k.closeButton=y.closeButton,j.closeButton===!1||hf(j.closeButton)?k.closeButton=j.closeButton:j.closeButton===!0&&(k.closeButton=!hf(y.closeButton)||y.closeButton);let I=v;L.isValidElement(v)&&!ao(v.type)?I=L.cloneElement(v,{closeToast:M,toastProps:k,data:R}):Zt(v)&&(I=v({closeToast:M,toastProps:k,data:R}));const Y={content:I,props:k,staleId:N};y.limit&&y.limit>0&&g>y.limit&&E?b.push(Y):Xs(F)?setTimeout(()=>{P(Y)},F):P(Y)},setProps(v){y=v},setToggle:(v,j)=>{x.get(v).toggle=j},isToastActive:v=>$.some(j=>j===v),getSnapshot:()=>h}}(s,i,uS);Tt.set(s,c);const f=c.observe(l);return Ks.forEach(u=>Tx(u.content,u.options)),Ks=[],()=>{f(),Tt.delete(s)}},setProps(l){var c;(c=Tt.get(s))==null||c.setProps(l)},getSnapshot(){var l;return(l=Tt.get(s))==null?void 0:l.getSnapshot()}}}(e)).current;r(e);const o=L.useSyncExternalStore(t,n,n);return{getToastToRender:function(i){if(!o)return[];const s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(l=>{const{position:c}=l.props;s.has(c)||s.set(c,[]),s.get(c).push(l)}),Array.from(s,l=>i(l[0],l[1]))},isToastActive:Fx,count:o==null?void 0:o.length}}function fS(e){const[t,n]=L.useState(!1),[r,o]=L.useState(!1),i=L.useRef(null),s=L.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:c,closeToast:f,onClick:u,closeOnClick:d}=e;var p,m;function g(){n(!0)}function b(){n(!1)}function $(x){const w=i.current;s.canDrag&&w&&(s.didMove=!0,t&&b(),s.delta=e.draggableDirection==="x"?x.clientX-s.start:x.clientY-s.start,s.start!==x.clientX&&(s.canCloseOnClick=!1),w.style.transform=`translate3d(${e.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,w.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function h(){document.removeEventListener("pointermove",$),document.removeEventListener("pointerup",h);const x=i.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();x.style.transition="transform 0.2s, opacity 0.2s",x.style.removeProperty("transform"),x.style.removeProperty("opacity")}}(m=Tt.get((p={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||m.setToggle(p.id,p.fn),L.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||b(),window.addEventListener("focus",g),window.addEventListener("blur",b),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",b)}},[e.pauseOnFocusLoss]);const y={onPointerDown:function(x){if(e.draggable===!0||e.draggable===x.pointerType){s.didMove=!1,document.addEventListener("pointermove",$),document.addEventListener("pointerup",h);const w=i.current;s.canCloseOnClick=!0,s.canDrag=!0,w.style.transition="none",e.draggableDirection==="x"?(s.start=x.clientX,s.removalDistance=w.offsetWidth*(e.draggablePercent/100)):(s.start=x.clientY,s.removalDistance=w.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(x){const{top:w,bottom:C,left:_,right:P}=i.current.getBoundingClientRect();x.nativeEvent.type!=="touchend"&&e.pauseOnHover&&x.clientX>=_&&x.clientX<=P&&x.clientY>=w&&x.clientY<=C?b():g()}};return l&&c&&(y.onMouseEnter=b,e.stacked||(y.onMouseLeave=g)),d&&(y.onClick=x=>{u&&u(x),s.canCloseOnClick&&f()}),{playToast:g,pauseToast:b,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:y}}function pS(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:s,style:l,controlledProgress:c,progress:f,rtl:u,isIn:d,theme:p}=e;const m=i||c&&f===0,g={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};c&&(g.transform=`scaleX(${f})`);const b=wr("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":u}),$=Zt(s)?s({rtl:u,type:o,defaultClassName:b}):wr(b,s),h={[c&&f>=1?"onTransitionEnd":"onAnimationEnd"]:c&&f<1?null:()=>{d&&r()}};return le.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},le.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${o}`}),le.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:$,style:g,...h}))}let hS=1;const Ax=()=>""+hS++;function mS(e){return e&&(ao(e.toastId)||Xs(e.toastId))?e.toastId:Ax()}function ws(e,t){return Tx(e,t),t.toastId}function ic(e,t){return{...t,type:t&&t.type||e,toastId:mS(t)}}function Aa(e){return(t,n)=>ws(t,ic(e,n))}function ae(e,t){return ws(e,ic("default",t))}ae.loading=(e,t)=>ws(e,ic("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),ae.promise=function(e,t,n){let r,{pending:o,error:i,success:s}=t;o&&(r=ao(o)?ae.loading(o,n):ae.loading(o.render,{...n,...o}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(u,d,p)=>{if(d==null)return void ae.dismiss(r);const m={type:u,...l,...n,data:p},g=ao(d)?{render:d}:d;return r?ae.update(r,{...m,...g}):ae(g.render,{...m,...g}),p},f=Zt(e)?e():e;return f.then(u=>c("success",s,u)).catch(u=>c("error",i,u)),f},ae.success=Aa("success"),ae.info=Aa("info"),ae.error=Aa("error"),ae.warning=Aa("warning"),ae.warn=ae.warning,ae.dark=(e,t)=>ws(e,ic("default",{theme:"dark",...t})),ae.dismiss=function(e){(function(t){var n;if(Px()){if(t==null||ao(n=t)||Xs(n))Tt.forEach(r=>{r.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const r=Tt.get(t.containerId);r?r.removeToast(t.id):Tt.forEach(o=>{o.removeToast(t.id)})}}else Ks=Ks.filter(r=>t!=null&&r.options.toastId!==t)})(e)},ae.clearWaitingQueue=function(e){e===void 0&&(e={}),Tt.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},ae.isActive=Fx,ae.update=function(e,t){t===void 0&&(t={});const n=((r,o)=>{var i;let{containerId:s}=o;return(i=Tt.get(s||1))==null?void 0:i.toasts.get(r)})(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:Ax()};i.toastId!==e&&(i.staleId=e);const s=i.render||o;delete i.render,ws(s,i)}},ae.done=e=>{ae.update(e,{progress:1})},ae.onChange=function(e){return mf.add(e),()=>{mf.delete(e)}},ae.play=e=>Nm(!0,e),ae.pause=e=>Nm(!1,e);const gS=typeof window<"u"?L.useLayoutEffect:L.useEffect,Ra=e=>{let{theme:t,type:n,isLoading:r,...o}=e;return le.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},Au={info:function(e){return le.createElement(Ra,{...e},le.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return le.createElement(Ra,{...e},le.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return le.createElement(Ra,{...e},le.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return le.createElement(Ra,{...e},le.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return le.createElement("div",{className:"Toastify__spinner"})}},yS=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=fS(e),{closeButton:s,children:l,autoClose:c,onClick:f,type:u,hideProgressBar:d,closeToast:p,transition:m,position:g,className:b,style:$,bodyClassName:h,bodyStyle:y,progressClassName:x,progressStyle:w,updateId:C,role:_,progress:P,rtl:v,toastId:j,deleteToast:T,isIn:A,isLoading:R,closeOnClick:N,theme:F}=e,M=wr("Toastify__toast",`Toastify__toast-theme--${F}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":v},{"Toastify__toast--close-on-click":N}),E=Zt(b)?b({rtl:v,position:g,type:u,defaultClassName:M}):wr(M,b),k=function(Y){let{theme:B,type:K,isLoading:G,icon:V}=Y,Q=null;const q={theme:B,type:K};return V===!1||(Zt(V)?Q=V({...q,isLoading:G}):L.isValidElement(V)?Q=L.cloneElement(V,q):G?Q=Au.spinner():(X=>X in Au)(K)&&(Q=Au[K](q))),Q}(e),D=!!P||!c,z={closeToast:p,type:u,theme:F};let I=null;return s===!1||(I=Zt(s)?s(z):L.isValidElement(s)?L.cloneElement(s,z):function(Y){let{closeToast:B,theme:K,ariaLabel:G="close"}=Y;return le.createElement("button",{className:`Toastify__close-button Toastify__close-button--${K}`,type:"button",onClick:V=>{V.stopPropagation(),B(V)},"aria-label":G},le.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},le.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(z)),le.createElement(m,{isIn:A,done:T,position:g,preventExitTransition:n,nodeRef:r,playToast:i},le.createElement("div",{id:j,onClick:f,"data-in":A,className:E,...o,style:$,ref:r},le.createElement("div",{...A&&{role:_},className:Zt(h)?h({type:u}):wr("Toastify__toast-body",h),style:y},k!=null&&le.createElement("div",{className:wr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},k),le.createElement("div",null,l)),I,le.createElement(pS,{...C&&!D?{key:`pb-${C}`}:{},rtl:v,theme:F,delay:c,isRunning:t,isIn:A,closeToast:p,hide:d,type:u,style:w,className:x,controlledProgress:D,progress:P||0})))},Wc=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},xS=Bc(Wc("bounce",!0));Bc(Wc("slide",!0));Bc(Wc("zoom"));Bc(Wc("flip"));const vS={position:"top-right",transition:xS,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function bS(e){let t={...vS,...e};const n=e.stacked,[r,o]=L.useState(!0),i=L.useRef(null),{getToastToRender:s,isToastActive:l,count:c}=dS(t),{className:f,style:u,rtl:d,containerId:p}=t;function m(b){const $=wr("Toastify__toast-container",`Toastify__toast-container--${b}`,{"Toastify__toast-container--rtl":d});return Zt(f)?f({position:b,rtl:d,defaultClassName:$}):wr($,xl(f))}function g(){n&&(o(!0),ae.play())}return gS(()=>{if(n){var b;const $=i.current.querySelectorAll('[data-in="true"]'),h=12,y=(b=t.position)==null?void 0:b.includes("top");let x=0,w=0;Array.from($).reverse().forEach((C,_)=>{const P=C;P.classList.add("Toastify__toast--stacked"),_>0&&(P.dataset.collapsed=`${r}`),P.dataset.pos||(P.dataset.pos=y?"top":"bot");const v=x*(r?.2:1)+(r?0:h*_);P.style.setProperty("--y",`${y?v:-1*v}px`),P.style.setProperty("--g",`${h}`),P.style.setProperty("--s",""+(1-(r?w:0))),x+=P.offsetHeight,w+=.025})}},[r,c,n]),le.createElement("div",{ref:i,className:"Toastify",id:p,onMouseEnter:()=>{n&&(o(!1),ae.pause())},onMouseLeave:g},s((b,$)=>{const h=$.length?{...u}:{...u,pointerEvents:"none"};return le.createElement("div",{className:m(b),style:h,key:`container-${b}`},$.map(y=>{let{content:x,props:w}=y;return le.createElement(yS,{...w,stacked:n,collapseAll:g,isIn:l(w.toastId,w.containerId),style:w.style,key:`toast-${w.key}`},x)}))}))}const ve={primary:{50:"#fdf3e7",100:"#fae0c3",200:"#f5c28a",300:"#eda04e",400:"#e08530",500:"#C4671A",600:"#B45A14",700:"#96480f",800:"#7a3a0c",900:"#5e2c08"},neutral:{50:"#faf7f5",100:"#f2ece6",200:"#e4d9cf",300:"#cfc0b0",400:"#b5a090",500:"#96806e",600:"#7a6455",700:"#5e4d42",800:"#3d3028",900:"#231b15",950:"#130e0a"},success:{light:"#d1fae5",base:"#059669",dark:"#065f46"},warning:{light:"#fef3c7",base:"#d97706",dark:"#92400e"},error:{light:"#fee2e2",base:"#dc2626",dark:"#991b1b"},info:{light:"#dbeafe",base:"#2563eb",dark:"#1e40af"},white:"#ffffff",black:"#000000",transparent:"transparent"},wS={fontFamily:{sans:"var(--font-sans)",serif:"var(--font-serif)",mono:"'JetBrains Mono', monospace"},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem"},fontWeight:{regular:400,medium:500,semibold:600,bold:700},lineHeight:{tight:1.25,snug:1.375,normal:1.5,relaxed:1.625}},$S={0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem"},kS={none:"0",sm:"0.25rem",base:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},SS={sm:"0 1px 2px 0 rgba(35, 27, 21, 0.08)",base:"0 2px 4px 0 rgba(35, 27, 21, 0.10)",md:"0 4px 12px 0 rgba(35, 27, 21, 0.12)",lg:"0 8px 24px 0 rgba(35, 27, 21, 0.15)",xl:"0 16px 48px 0 rgba(35, 27, 21, 0.18)",amber:"0 4px 20px 0 rgba(180, 90, 20, 0.35)"},jS={fast:"150ms ease",base:"200ms ease",slow:"300ms ease",slower:"400ms cubic-bezier(0.4, 0, 0.2, 1)"},_S={base:0,raised:10,dropdown:100,sticky:200,overlay:300,modal:400,toast:500},ES={colors:ve,typography:wS,spacing:$S,borderRadius:kS,shadows:SS,neutral:ve.neutral,transitions:jS,zIndex:_S,brand:{primary:ve.primary[600],primaryHover:ve.primary[700],primaryLight:ve.primary[100],primaryGhost:ve.primary[50]},surface:{page:ve.neutral[50],card:ve.white,sidebar:ve.neutral[900],elevated:ve.white,overlay:"rgba(35, 27, 21, 0.55)"},text:{primary:ve.neutral[900],secondary:ve.neutral[600],muted:ve.neutral[400],inverse:ve.white,brand:ve.primary[600],onDark:ve.neutral[200]},border:{default:ve.neutral[200],strong:ve.neutral[300],focus:ve.primary[600],error:ve.error.base},feedback:{success:{bg:ve.success.light,text:ve.success.dark,border:ve.success.base,icon:ve.success.base},warning:{bg:ve.warning.light,text:ve.warning.dark,border:ve.warning.base,icon:ve.warning.base},error:{bg:ve.error.light,text:ve.error.dark,border:ve.error.base,icon:ve.error.base},info:{bg:ve.info.light,text:ve.info.dark,border:ve.info.base,icon:ve.info.base}}},CS=lS`
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

  h1, h2, h3 {
    font-family: ${({theme:e})=>e.typography.fontFamily.serif};
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
`;function Rx(e,t){return function(){return e.apply(t,arguments)}}const{toString:PS}=Object.prototype,{getPrototypeOf:Tp}=Object,{iterator:Vc,toStringTag:Ox}=Symbol,Hc=(e=>t=>{const n=PS.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Cn=e=>(e=e.toLowerCase(),t=>Hc(t)===e),qc=e=>t=>typeof t===e,{isArray:Ei}=Array,bi=qc("undefined");function sa(e){return e!==null&&!bi(e)&&e.constructor!==null&&!bi(e.constructor)&&Vt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const zx=Cn("ArrayBuffer");function FS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&zx(e.buffer),t}const TS=qc("string"),Vt=qc("function"),Nx=qc("number"),aa=e=>e!==null&&typeof e=="object",AS=e=>e===!0||e===!1,vl=e=>{if(Hc(e)!=="object")return!1;const t=Tp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ox in e)&&!(Vc in e)},RS=e=>{if(!aa(e)||sa(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},OS=Cn("Date"),zS=Cn("File"),NS=e=>!!(e&&typeof e.uri<"u"),LS=e=>e&&typeof e.getParts<"u",DS=Cn("Blob"),IS=Cn("FileList"),MS=e=>aa(e)&&Vt(e.pipe);function US(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Lm=US(),Dm=typeof Lm.FormData<"u"?Lm.FormData:void 0,BS=e=>{let t;return e&&(Dm&&e instanceof Dm||Vt(e.append)&&((t=Hc(e))==="formdata"||t==="object"&&Vt(e.toString)&&e.toString()==="[object FormData]"))},WS=Cn("URLSearchParams"),[VS,HS,qS,GS]=["ReadableStream","Request","Response","Headers"].map(Cn),YS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function la(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Ei(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(sa(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function Lx(e,t){if(sa(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const eo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Dx=e=>!bi(e)&&e!==eo;function gf(){const{caseless:e,skipUndefined:t}=Dx(this)&&this||{},n={},r=(o,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const s=e&&Lx(n,i)||i;vl(n[s])&&vl(o)?n[s]=gf(n[s],o):vl(o)?n[s]=gf({},o):Ei(o)?n[s]=o.slice():(!t||!bi(o))&&(n[s]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&la(arguments[o],r);return n}const QS=(e,t,n,{allOwnKeys:r}={})=>(la(t,(o,i)=>{n&&Vt(o)?Object.defineProperty(e,i,{value:Rx(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),XS=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),KS=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},JS=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&Tp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ZS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ej=e=>{if(!e)return null;if(Ei(e))return e;let t=e.length;if(!Nx(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},tj=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Tp(Uint8Array)),nj=(e,t)=>{const r=(e&&e[Vc]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},rj=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},oj=Cn("HTMLFormElement"),ij=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Im=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),sj=Cn("RegExp"),Ix=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};la(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},aj=e=>{Ix(e,(t,n)=>{if(Vt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Vt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},lj=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Ei(e)?r(e):r(String(e).split(t)),n},cj=()=>{},uj=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function dj(e){return!!(e&&Vt(e.append)&&e[Ox]==="FormData"&&e[Vc])}const fj=e=>{const t=new Array(10),n=(r,o)=>{if(aa(r)){if(t.indexOf(r)>=0)return;if(sa(r))return r;if(!("toJSON"in r)){t[o]=r;const i=Ei(r)?[]:{};return la(r,(s,l)=>{const c=n(s,o+1);!bi(c)&&(i[l]=c)}),t[o]=void 0,i}}return r};return n(e,0)},pj=Cn("AsyncFunction"),hj=e=>e&&(aa(e)||Vt(e))&&Vt(e.then)&&Vt(e.catch),Mx=((e,t)=>e?setImmediate:t?((n,r)=>(eo.addEventListener("message",({source:o,data:i})=>{o===eo&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),eo.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Vt(eo.postMessage)),mj=typeof queueMicrotask<"u"?queueMicrotask.bind(eo):typeof process<"u"&&process.nextTick||Mx,gj=e=>e!=null&&Vt(e[Vc]),H={isArray:Ei,isArrayBuffer:zx,isBuffer:sa,isFormData:BS,isArrayBufferView:FS,isString:TS,isNumber:Nx,isBoolean:AS,isObject:aa,isPlainObject:vl,isEmptyObject:RS,isReadableStream:VS,isRequest:HS,isResponse:qS,isHeaders:GS,isUndefined:bi,isDate:OS,isFile:zS,isReactNativeBlob:NS,isReactNative:LS,isBlob:DS,isRegExp:sj,isFunction:Vt,isStream:MS,isURLSearchParams:WS,isTypedArray:tj,isFileList:IS,forEach:la,merge:gf,extend:QS,trim:YS,stripBOM:XS,inherits:KS,toFlatObject:JS,kindOf:Hc,kindOfTest:Cn,endsWith:ZS,toArray:ej,forEachEntry:nj,matchAll:rj,isHTMLForm:oj,hasOwnProperty:Im,hasOwnProp:Im,reduceDescriptors:Ix,freezeMethods:aj,toObjectSet:lj,toCamelCase:ij,noop:cj,toFiniteNumber:uj,findKey:Lx,global:eo,isContextDefined:Dx,isSpecCompliantForm:dj,toJSONObject:fj,isAsyncFn:pj,isThenable:hj,setImmediate:Mx,asap:mj,isIterable:gj};let ce=class Ux extends Error{static from(t,n,r,o,i,s){const l=new Ux(t.message,n||t.code,r,o,i);return l.cause=t,l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),s&&Object.assign(l,s),l}constructor(t,n,r,o,i){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),o&&(this.request=o),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}};ce.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ce.ERR_BAD_OPTION="ERR_BAD_OPTION";ce.ECONNABORTED="ECONNABORTED";ce.ETIMEDOUT="ETIMEDOUT";ce.ERR_NETWORK="ERR_NETWORK";ce.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ce.ERR_DEPRECATED="ERR_DEPRECATED";ce.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ce.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ce.ERR_CANCELED="ERR_CANCELED";ce.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ce.ERR_INVALID_URL="ERR_INVALID_URL";const yj=null;function yf(e){return H.isPlainObject(e)||H.isArray(e)}function Bx(e){return H.endsWith(e,"[]")?e.slice(0,-2):e}function Ru(e,t,n){return e?e.concat(t).map(function(o,i){return o=Bx(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function xj(e){return H.isArray(e)&&!e.some(yf)}const vj=H.toFlatObject(H,{},null,function(t){return/^is[A-Z]/.test(t)});function Gc(e,t,n){if(!H.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=H.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,$){return!H.isUndefined($[b])});const r=n.metaTokens,o=n.visitor||u,i=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&H.isSpecCompliantForm(t);if(!H.isFunction(o))throw new TypeError("visitor must be a function");function f(g){if(g===null)return"";if(H.isDate(g))return g.toISOString();if(H.isBoolean(g))return g.toString();if(!c&&H.isBlob(g))throw new ce("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(g)||H.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,b,$){let h=g;if(H.isReactNative(t)&&H.isReactNativeBlob(g))return t.append(Ru($,b,i),f(g)),!1;if(g&&!$&&typeof g=="object"){if(H.endsWith(b,"{}"))b=r?b:b.slice(0,-2),g=JSON.stringify(g);else if(H.isArray(g)&&xj(g)||(H.isFileList(g)||H.endsWith(b,"[]"))&&(h=H.toArray(g)))return b=Bx(b),h.forEach(function(x,w){!(H.isUndefined(x)||x===null)&&t.append(s===!0?Ru([b],w,i):s===null?b:b+"[]",f(x))}),!1}return yf(g)?!0:(t.append(Ru($,b,i),f(g)),!1)}const d=[],p=Object.assign(vj,{defaultVisitor:u,convertValue:f,isVisitable:yf});function m(g,b){if(!H.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+b.join("."));d.push(g),H.forEach(g,function(h,y){(!(H.isUndefined(h)||h===null)&&o.call(t,h,H.isString(y)?y.trim():y,b,p))===!0&&m(h,b?b.concat(y):[y])}),d.pop()}}if(!H.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Mm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ap(e,t){this._pairs=[],e&&Gc(e,this,t)}const Wx=Ap.prototype;Wx.append=function(t,n){this._pairs.push([t,n])};Wx.toString=function(t){const n=t?function(r){return t.call(this,r,Mm)}:Mm;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function bj(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Vx(e,t,n){if(!t)return e;const r=n&&n.encode||bj,o=H.isFunction(n)?{serialize:n}:n,i=o&&o.serialize;let s;if(i?s=i(t,o):s=H.isURLSearchParams(t)?t.toString():new Ap(t,o).toString(r),s){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Um{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){H.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Rp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},wj=typeof URLSearchParams<"u"?URLSearchParams:Ap,$j=typeof FormData<"u"?FormData:null,kj=typeof Blob<"u"?Blob:null,Sj={isBrowser:!0,classes:{URLSearchParams:wj,FormData:$j,Blob:kj},protocols:["http","https","file","blob","url","data"]},Op=typeof window<"u"&&typeof document<"u",xf=typeof navigator=="object"&&navigator||void 0,jj=Op&&(!xf||["ReactNative","NativeScript","NS"].indexOf(xf.product)<0),_j=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ej=Op&&window.location.href||"http://localhost",Cj=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Op,hasStandardBrowserEnv:jj,hasStandardBrowserWebWorkerEnv:_j,navigator:xf,origin:Ej},Symbol.toStringTag,{value:"Module"})),_t={...Cj,...Sj};function Pj(e,t){return Gc(e,new _t.classes.URLSearchParams,{visitor:function(n,r,o,i){return _t.isNode&&H.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function Fj(e){return H.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Tj(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Hx(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),c=i>=n.length;return s=!s&&H.isArray(o)?o.length:s,c?(H.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!H.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&H.isArray(o[s])&&(o[s]=Tj(o[s])),!l)}if(H.isFormData(e)&&H.isFunction(e.entries)){const n={};return H.forEachEntry(e,(r,o)=>{t(Fj(r),o,n,0)}),n}return null}function Aj(e,t,n){if(H.isString(e))try{return(t||JSON.parse)(e),H.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ca={transitional:Rp,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=H.isObject(t);if(i&&H.isHTMLForm(t)&&(t=new FormData(t)),H.isFormData(t))return o?JSON.stringify(Hx(t)):t;if(H.isArrayBuffer(t)||H.isBuffer(t)||H.isStream(t)||H.isFile(t)||H.isBlob(t)||H.isReadableStream(t))return t;if(H.isArrayBufferView(t))return t.buffer;if(H.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Pj(t,this.formSerializer).toString();if((l=H.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Gc(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Aj(t)):t}],transformResponse:[function(t){const n=this.transitional||ca.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(H.isResponse(t)||H.isReadableStream(t))return t;if(t&&H.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(l){if(s)throw l.name==="SyntaxError"?ce.from(l,ce.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_t.classes.FormData,Blob:_t.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],e=>{ca.headers[e]={}});const Rj=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Oj=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&Rj[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Bm=Symbol("internals");function Bi(e){return e&&String(e).trim().toLowerCase()}function bl(e){return e===!1||e==null?e:H.isArray(e)?e.map(bl):String(e)}function zj(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Nj=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ou(e,t,n,r,o){if(H.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!H.isString(t)){if(H.isString(r))return t.indexOf(r)!==-1;if(H.isRegExp(r))return r.test(t)}}function Lj(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Dj(e,t){const n=H.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}let Ht=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,c,f){const u=Bi(c);if(!u)throw new Error("header name must be a non-empty string");const d=H.findKey(o,u);(!d||o[d]===void 0||f===!0||f===void 0&&o[d]!==!1)&&(o[d||c]=bl(l))}const s=(l,c)=>H.forEach(l,(f,u)=>i(f,u,c));if(H.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(H.isString(t)&&(t=t.trim())&&!Nj(t))s(Oj(t),n);else if(H.isObject(t)&&H.isIterable(t)){let l={},c,f;for(const u of t){if(!H.isArray(u))throw TypeError("Object iterator must return a key-value pair");l[f=u[0]]=(c=l[f])?H.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}s(l,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Bi(t),t){const r=H.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return zj(o);if(H.isFunction(n))return n.call(this,o,r);if(H.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Bi(t),t){const r=H.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ou(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Bi(s),s){const l=H.findKey(r,s);l&&(!n||Ou(r,r[l],l,n))&&(delete r[l],o=!0)}}return H.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Ou(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return H.forEach(this,(o,i)=>{const s=H.findKey(r,i);if(s){n[s]=bl(o),delete n[i];return}const l=t?Lj(i):String(i).trim();l!==i&&delete n[i],n[l]=bl(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return H.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&H.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Bm]=this[Bm]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=Bi(s);r[l]||(Dj(o,s),r[l]=!0)}return H.isArray(t)?t.forEach(i):i(t),this}};Ht.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(Ht.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});H.freezeMethods(Ht);function zu(e,t){const n=this||ca,r=t||n,o=Ht.from(r.headers);let i=r.data;return H.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function qx(e){return!!(e&&e.__CANCEL__)}let ua=class extends ce{constructor(t,n,r){super(t??"canceled",ce.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function Gx(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ce("Request failed with status code "+n.status,[ce.ERR_BAD_REQUEST,ce.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Ij(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Mj(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(c){const f=Date.now(),u=r[i];s||(s=f),n[o]=c,r[o]=f;let d=i,p=0;for(;d!==o;)p+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),f-s<t)return;const m=u&&f-u;return m?Math.round(p*1e3/m):void 0}}function Uj(e,t){let n=0,r=1e3/t,o,i;const s=(f,u=Date.now())=>{n=u,o=null,i&&(clearTimeout(i),i=null),e(...f)};return[(...f)=>{const u=Date.now(),d=u-n;d>=r?s(f,u):(o=f,i||(i=setTimeout(()=>{i=null,s(o)},r-d)))},()=>o&&s(o)]}const sc=(e,t,n=3)=>{let r=0;const o=Mj(50,250);return Uj(i=>{const s=i.loaded,l=i.lengthComputable?i.total:void 0,c=s-r,f=o(c),u=s<=l;r=s;const d={loaded:s,total:l,progress:l?s/l:void 0,bytes:c,rate:f||void 0,estimated:f&&l&&u?(l-s)/f:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(d)},n)},Wm=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Vm=e=>(...t)=>H.asap(()=>e(...t)),Bj=_t.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,_t.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(_t.origin),_t.navigator&&/(msie|trident)/i.test(_t.navigator.userAgent)):()=>!0,Wj=_t.hasStandardBrowserEnv?{write(e,t,n,r,o,i,s){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];H.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),H.isString(r)&&l.push(`path=${r}`),H.isString(o)&&l.push(`domain=${o}`),i===!0&&l.push("secure"),H.isString(s)&&l.push(`SameSite=${s}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Vj(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Hj(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Yx(e,t,n){let r=!Vj(t);return e&&(r||n==!1)?Hj(e,t):t}const Hm=e=>e instanceof Ht?{...e}:e;function vo(e,t){t=t||{};const n={};function r(f,u,d,p){return H.isPlainObject(f)&&H.isPlainObject(u)?H.merge.call({caseless:p},f,u):H.isPlainObject(u)?H.merge({},u):H.isArray(u)?u.slice():u}function o(f,u,d,p){if(H.isUndefined(u)){if(!H.isUndefined(f))return r(void 0,f,d,p)}else return r(f,u,d,p)}function i(f,u){if(!H.isUndefined(u))return r(void 0,u)}function s(f,u){if(H.isUndefined(u)){if(!H.isUndefined(f))return r(void 0,f)}else return r(void 0,u)}function l(f,u,d){if(d in t)return r(f,u);if(d in e)return r(void 0,f)}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(f,u,d)=>o(Hm(f),Hm(u),d,!0)};return H.forEach(Object.keys({...e,...t}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const d=H.hasOwnProp(c,u)?c[u]:o,p=d(e[u],t[u],u);H.isUndefined(p)&&d!==l||(n[u]=p)}),n}const Qx=e=>{const t=vo({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:l}=t;if(t.headers=s=Ht.from(s),t.url=Vx(Yx(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),H.isFormData(n)){if(_t.hasStandardBrowserEnv||_t.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(H.isFunction(n.getHeaders)){const c=n.getHeaders(),f=["content-type","content-length"];Object.entries(c).forEach(([u,d])=>{f.includes(u.toLowerCase())&&s.set(u,d)})}}if(_t.hasStandardBrowserEnv&&(r&&H.isFunction(r)&&(r=r(t)),r||r!==!1&&Bj(t.url))){const c=o&&i&&Wj.read(i);c&&s.set(o,c)}return t},qj=typeof XMLHttpRequest<"u",Gj=qj&&function(e){return new Promise(function(n,r){const o=Qx(e);let i=o.data;const s=Ht.from(o.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:f}=o,u,d,p,m,g;function b(){m&&m(),g&&g(),o.cancelToken&&o.cancelToken.unsubscribe(u),o.signal&&o.signal.removeEventListener("abort",u)}let $=new XMLHttpRequest;$.open(o.method.toUpperCase(),o.url,!0),$.timeout=o.timeout;function h(){if(!$)return;const x=Ht.from("getAllResponseHeaders"in $&&$.getAllResponseHeaders()),C={data:!l||l==="text"||l==="json"?$.responseText:$.response,status:$.status,statusText:$.statusText,headers:x,config:e,request:$};Gx(function(P){n(P),b()},function(P){r(P),b()},C),$=null}"onloadend"in $?$.onloadend=h:$.onreadystatechange=function(){!$||$.readyState!==4||$.status===0&&!($.responseURL&&$.responseURL.indexOf("file:")===0)||setTimeout(h)},$.onabort=function(){$&&(r(new ce("Request aborted",ce.ECONNABORTED,e,$)),$=null)},$.onerror=function(w){const C=w&&w.message?w.message:"Network Error",_=new ce(C,ce.ERR_NETWORK,e,$);_.event=w||null,r(_),$=null},$.ontimeout=function(){let w=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const C=o.transitional||Rp;o.timeoutErrorMessage&&(w=o.timeoutErrorMessage),r(new ce(w,C.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED,e,$)),$=null},i===void 0&&s.setContentType(null),"setRequestHeader"in $&&H.forEach(s.toJSON(),function(w,C){$.setRequestHeader(C,w)}),H.isUndefined(o.withCredentials)||($.withCredentials=!!o.withCredentials),l&&l!=="json"&&($.responseType=o.responseType),f&&([p,g]=sc(f,!0),$.addEventListener("progress",p)),c&&$.upload&&([d,m]=sc(c),$.upload.addEventListener("progress",d),$.upload.addEventListener("loadend",m)),(o.cancelToken||o.signal)&&(u=x=>{$&&(r(!x||x.type?new ua(null,e,$):x),$.abort(),$=null)},o.cancelToken&&o.cancelToken.subscribe(u),o.signal&&(o.signal.aborted?u():o.signal.addEventListener("abort",u)));const y=Ij(o.url);if(y&&_t.protocols.indexOf(y)===-1){r(new ce("Unsupported protocol "+y+":",ce.ERR_BAD_REQUEST,e));return}$.send(i||null)})},Yj=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(f){if(!o){o=!0,l();const u=f instanceof Error?f:this.reason;r.abort(u instanceof ce?u:new ua(u instanceof Error?u.message:u))}};let s=t&&setTimeout(()=>{s=null,i(new ce(`timeout of ${t}ms exceeded`,ce.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(f=>{f.unsubscribe?f.unsubscribe(i):f.removeEventListener("abort",i)}),e=null)};e.forEach(f=>f.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>H.asap(l),c}},Qj=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},Xj=async function*(e,t){for await(const n of Kj(e))yield*Qj(n,t)},Kj=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},qm=(e,t,n,r)=>{const o=Xj(e,t);let i=0,s,l=c=>{s||(s=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:f,value:u}=await o.next();if(f){l(),c.close();return}let d=u.byteLength;if(n){let p=i+=d;n(p)}c.enqueue(new Uint8Array(u))}catch(f){throw l(f),f}},cancel(c){return l(c),o.return()}},{highWaterMark:2})},Gm=64*1024,{isFunction:Oa}=H,Jj=(({Request:e,Response:t})=>({Request:e,Response:t}))(H.global),{ReadableStream:Ym,TextEncoder:Qm}=H.global,Xm=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Zj=e=>{e=H.merge.call({skipUndefined:!0},Jj,e);const{fetch:t,Request:n,Response:r}=e,o=t?Oa(t):typeof fetch=="function",i=Oa(n),s=Oa(r);if(!o)return!1;const l=o&&Oa(Ym),c=o&&(typeof Qm=="function"?(g=>b=>g.encode(b))(new Qm):async g=>new Uint8Array(await new n(g).arrayBuffer())),f=i&&l&&Xm(()=>{let g=!1;const b=new n(_t.origin,{body:new Ym,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!b}),u=s&&l&&Xm(()=>H.isReadableStream(new r("").body)),d={stream:u&&(g=>g.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!d[g]&&(d[g]=(b,$)=>{let h=b&&b[g];if(h)return h.call(b);throw new ce(`Response type '${g}' is not supported`,ce.ERR_NOT_SUPPORT,$)})});const p=async g=>{if(g==null)return 0;if(H.isBlob(g))return g.size;if(H.isSpecCompliantForm(g))return(await new n(_t.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(H.isArrayBufferView(g)||H.isArrayBuffer(g))return g.byteLength;if(H.isURLSearchParams(g)&&(g=g+""),H.isString(g))return(await c(g)).byteLength},m=async(g,b)=>{const $=H.toFiniteNumber(g.getContentLength());return $??p(b)};return async g=>{let{url:b,method:$,data:h,signal:y,cancelToken:x,timeout:w,onDownloadProgress:C,onUploadProgress:_,responseType:P,headers:v,withCredentials:j="same-origin",fetchOptions:T}=Qx(g),A=t||fetch;P=P?(P+"").toLowerCase():"text";let R=Yj([y,x&&x.toAbortSignal()],w),N=null;const F=R&&R.unsubscribe&&(()=>{R.unsubscribe()});let M;try{if(_&&f&&$!=="get"&&$!=="head"&&(M=await m(v,h))!==0){let Y=new n(b,{method:"POST",body:h,duplex:"half"}),B;if(H.isFormData(h)&&(B=Y.headers.get("content-type"))&&v.setContentType(B),Y.body){const[K,G]=Wm(M,sc(Vm(_)));h=qm(Y.body,Gm,K,G)}}H.isString(j)||(j=j?"include":"omit");const E=i&&"credentials"in n.prototype,k={...T,signal:R,method:$.toUpperCase(),headers:v.normalize().toJSON(),body:h,duplex:"half",credentials:E?j:void 0};N=i&&new n(b,k);let D=await(i?A(N,T):A(b,k));const z=u&&(P==="stream"||P==="response");if(u&&(C||z&&F)){const Y={};["status","statusText","headers"].forEach(V=>{Y[V]=D[V]});const B=H.toFiniteNumber(D.headers.get("content-length")),[K,G]=C&&Wm(B,sc(Vm(C),!0))||[];D=new r(qm(D.body,Gm,K,()=>{G&&G(),F&&F()}),Y)}P=P||"text";let I=await d[H.findKey(d,P)||"text"](D,g);return!z&&F&&F(),await new Promise((Y,B)=>{Gx(Y,B,{data:I,headers:Ht.from(D.headers),status:D.status,statusText:D.statusText,config:g,request:N})})}catch(E){throw F&&F(),E&&E.name==="TypeError"&&/Load failed|fetch/i.test(E.message)?Object.assign(new ce("Network Error",ce.ERR_NETWORK,g,N,E&&E.response),{cause:E.cause||E}):ce.from(E,E&&E.code,g,N,E&&E.response)}}},e_=new Map,Xx=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:o}=t,i=[r,o,n];let s=i.length,l=s,c,f,u=e_;for(;l--;)c=i[l],f=u.get(c),f===void 0&&u.set(c,f=l?new Map:Zj(t)),u=f;return f};Xx();const zp={http:yj,xhr:Gj,fetch:{get:Xx}};H.forEach(zp,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Km=e=>`- ${e}`,t_=e=>H.isFunction(e)||e===null||e===!1;function n_(e,t){e=H.isArray(e)?e:[e];const{length:n}=e;let r,o;const i={};for(let s=0;s<n;s++){r=e[s];let l;if(o=r,!t_(r)&&(o=zp[(l=String(r)).toLowerCase()],o===void 0))throw new ce(`Unknown adapter '${l}'`);if(o&&(H.isFunction(o)||(o=o.get(t))))break;i[l||"#"+s]=o}if(!o){const s=Object.entries(i).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let l=n?s.length>1?`since :
`+s.map(Km).join(`
`):" "+Km(s[0]):"as no adapter specified";throw new ce("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return o}const Kx={getAdapter:n_,adapters:zp};function Nu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ua(null,e)}function Jm(e){return Nu(e),e.headers=Ht.from(e.headers),e.data=zu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Kx.getAdapter(e.adapter||ca.adapter,e)(e).then(function(r){return Nu(e),r.data=zu.call(e,e.transformResponse,r),r.headers=Ht.from(r.headers),r},function(r){return qx(r)||(Nu(e),r&&r.response&&(r.response.data=zu.call(e,e.transformResponse,r.response),r.response.headers=Ht.from(r.response.headers))),Promise.reject(r)})}const Jx="1.13.6",Yc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Yc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Zm={};Yc.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Jx+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new ce(o(s," has been removed"+(n?" in "+n:"")),ce.ERR_DEPRECATED);return n&&!Zm[s]&&(Zm[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,l):!0}};Yc.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function r_(e,t,n){if(typeof e!="object")throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],c=l===void 0||s(l,i,e);if(c!==!0)throw new ce("option "+i+" must be "+c,ce.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ce("Unknown option "+i,ce.ERR_BAD_OPTION)}}const wl={assertOptions:r_,validators:Yc},sn=wl.validators;let lo=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Um,response:new Um}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=vo(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&wl.assertOptions(r,{silentJSONParsing:sn.transitional(sn.boolean),forcedJSONParsing:sn.transitional(sn.boolean),clarifyTimeoutError:sn.transitional(sn.boolean),legacyInterceptorReqResOrdering:sn.transitional(sn.boolean)},!1),o!=null&&(H.isFunction(o)?n.paramsSerializer={serialize:o}:wl.assertOptions(o,{encode:sn.function,serialize:sn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),wl.assertOptions(n,{baseUrl:sn.spelling("baseURL"),withXsrfToken:sn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&H.merge(i.common,i[n.method]);i&&H.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=Ht.concat(s,i);const l=[];let c=!0;this.interceptors.request.forEach(function(b){if(typeof b.runWhen=="function"&&b.runWhen(n)===!1)return;c=c&&b.synchronous;const $=n.transitional||Rp;$&&$.legacyInterceptorReqResOrdering?l.unshift(b.fulfilled,b.rejected):l.push(b.fulfilled,b.rejected)});const f=[];this.interceptors.response.forEach(function(b){f.push(b.fulfilled,b.rejected)});let u,d=0,p;if(!c){const g=[Jm.bind(this),void 0];for(g.unshift(...l),g.push(...f),p=g.length,u=Promise.resolve(n);d<p;)u=u.then(g[d++],g[d++]);return u}p=l.length;let m=n;for(;d<p;){const g=l[d++],b=l[d++];try{m=g(m)}catch($){b.call(this,$);break}}try{u=Jm.call(this,m)}catch(g){return Promise.reject(g)}for(d=0,p=f.length;d<p;)u=u.then(f[d++],f[d++]);return u}getUri(t){t=vo(this.defaults,t);const n=Yx(t.baseURL,t.url,t.allowAbsoluteUrls);return Vx(n,t.params,t.paramsSerializer)}};H.forEach(["delete","get","head","options"],function(t){lo.prototype[t]=function(n,r){return this.request(vo(r||{},{method:t,url:n,data:(r||{}).data}))}});H.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(vo(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}lo.prototype[t]=n(),lo.prototype[t+"Form"]=n(!0)});let o_=class Zx{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new ua(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Zx(function(o){t=o}),cancel:t}}};function i_(e){return function(n){return e.apply(null,n)}}function s_(e){return H.isObject(e)&&e.isAxiosError===!0}const vf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(vf).forEach(([e,t])=>{vf[t]=e});function ev(e){const t=new lo(e),n=Rx(lo.prototype.request,t);return H.extend(n,lo.prototype,t,{allOwnKeys:!0}),H.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return ev(vo(e,o))},n}const ze=ev(ca);ze.Axios=lo;ze.CanceledError=ua;ze.CancelToken=o_;ze.isCancel=qx;ze.VERSION=Jx;ze.toFormData=Gc;ze.AxiosError=ce;ze.Cancel=ze.CanceledError;ze.all=function(t){return Promise.all(t)};ze.spread=i_;ze.isAxiosError=s_;ze.mergeConfig=vo;ze.AxiosHeaders=Ht;ze.formToJSON=e=>Hx(H.isHTMLForm(e)?new FormData(e):e);ze.getAdapter=Kx.getAdapter;ze.HttpStatusCode=vf;ze.default=ze;const{Axios:hF,AxiosError:mF,CanceledError:gF,isCancel:yF,CancelToken:xF,VERSION:vF,all:bF,Cancel:wF,isAxiosError:$F,spread:kF,toFormData:SF,AxiosHeaders:jF,HttpStatusCode:_F,formToJSON:EF,getAdapter:CF,mergeConfig:PF}=ze,Np="https://bgrepresentacoes-api-production.up.railway.app/api/v1",wi={ACCESS_TOKEN:"bg:access_token",REFRESH_TOKEN:"bg:refresh_token"},tv=()=>localStorage.getItem(wi.ACCESS_TOKEN),nv=()=>localStorage.getItem(wi.REFRESH_TOKEN),rv=({accessToken:e,refreshToken:t})=>{e&&localStorage.setItem(wi.ACCESS_TOKEN,e),t&&localStorage.setItem(wi.REFRESH_TOKEN,t)},$s=()=>{localStorage.removeItem(wi.ACCESS_TOKEN),localStorage.removeItem(wi.REFRESH_TOKEN)};let za=!1,bf=[];const eg=(e,t=null)=>{bf.forEach(({resolve:n,reject:r})=>e?r(e):n(t)),bf=[]},ov=e=>{const t=tv();return t&&(e.headers.Authorization=`Bearer ${t}`),e},iv=async e=>{var i,s;const t=e.config,n=((i=e.response)==null?void 0:i.status)===401,r=!t._retry,o=!((s=t.url)!=null&&s.includes("/auth/refresh"));if(n&&r&&o){if(t._retry=!0,za)return new Promise((c,f)=>{bf.push({resolve:c,reject:f})}).then(c=>(t.headers.Authorization=`Bearer ${c}`,ze(t)));za=!0;const l=nv();if(!l)return za=!1,$s(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(e);try{const{data:c}=await ze.post(`${Np}/auth/refresh`,{refreshToken:l},{headers:{"Content-Type":"application/json"}}),f=c.data??c,u=f.token??f.accessToken,d=f.refreshToken;if(!u)throw new Error("Refresh não retornou accessToken");return rv({accessToken:u,refreshToken:d}),eg(null,u),t.headers.Authorization=`Bearer ${u}`,ze(t)}catch(c){return eg(c,null),$s(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(c)}finally{za=!1}}return Promise.reject(e)},Pe=ze.create({baseURL:Np,timeout:15e3,headers:{"Content-Type":"application/json",Accept:"application/json"}});Pe.interceptors.request.use(ov,e=>Promise.reject(e));Pe.interceptors.response.use(e=>e,iv);const Lp=ze.create({baseURL:Np,timeout:12e4,headers:{Accept:"application/json"}});Lp.interceptors.request.use(ov,e=>Promise.reject(e));Lp.interceptors.response.use(e=>e,iv);const qt=(e,t="Ocorreu um erro inesperado.")=>{var n,r,o,i;return((r=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:r.message)??((i=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:i.error)??(e==null?void 0:e.message)??t},St={INIT:"INIT",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGOUT:"LOGOUT",PASSWORD_CHANGED:"PASSWORD_CHANGED",UPDATE_USER:"UPDATE_USER",SET_LOADING:"SET_LOADING"},sv={user:null,isAuthenticated:!1,isLoading:!0,mustChangePassword:!1},Lu=e=>{var n;if(!e)return null;const t=e.dataValues||e;return{...t,firstName:((n=t.name)==null?void 0:n.split(" ")[0])||"Usuário"}};function a_(e,{type:t,payload:n}){switch(t){case St.INIT:return{...e,user:Lu(n.user)??e.user,isAuthenticated:!!(n.user??e.user),isLoading:!1,mustChangePassword:n.mustChangePassword!==void 0?n.mustChangePassword:e.mustChangePassword};case St.LOGIN_SUCCESS:return{...e,user:Lu(n.user),isAuthenticated:!0,isLoading:!1,mustChangePassword:n.mustChangePassword??!1};case St.LOGOUT:return{...sv,isLoading:!1};case St.PASSWORD_CHANGED:return{...e,mustChangePassword:!1};case St.UPDATE_USER:return{...e,user:Lu({...e.user,...n})};case St.SET_LOADING:return{...e,isLoading:n};default:return e}}const av=L.createContext(null);function l_({children:e}){var m,g,b,$;const[t,n]=L.useReducer(a_,sv),r=L.useRef(!1);L.useEffect(()=>{if(r.current)return;r.current=!0,(async()=>{const y=tv(),x=nv();if(!y&&!x){n({type:St.INIT,payload:{user:null,mustChangePassword:!1}});return}try{const{data:w}=await Pe.get("/users/profile"),C=w.data||w;n({type:St.INIT,payload:{user:C,mustChangePassword:C.mustChangePassword??C.last_login_at===null}})}catch(w){console.error("[AUTH INIT ERROR]",w),$s(),n({type:St.LOGOUT})}})()},[]),L.useEffect(()=>{const h=()=>{$s(),n({type:St.LOGOUT})};return window.addEventListener("bg:session-expired",h),()=>window.removeEventListener("bg:session-expired",h)},[]);const o=L.useCallback(async(h,y)=>{n({type:St.SET_LOADING,payload:!0});try{const{data:x}=await Pe.post("/auth/login",{email:h,password:y}),w=x.data??x,C=w.token??w.accessToken,{refreshToken:_,user:P}=w,v=w.mustChangePassword===!0;return rv({accessToken:C,refreshToken:_}),W1.flushSync(()=>{n({type:St.LOGIN_SUCCESS,payload:{user:P,mustChangePassword:v}})}),ae.success("Login efetuado com sucesso!",{toastId:"login-ok"}),{mustChangePassword:v}}catch(x){throw n({type:St.SET_LOADING,payload:!1}),new Error(qt(x,"E-mail ou senha inválidos."))}},[]),i=L.useCallback(async(h,y,x)=>{try{await Pe.patch("/auth/change-password",{currentPassword:h,newPassword:y,confirmPassword:x}),n({type:St.PASSWORD_CHANGED}),ae.success("Senha alterada com sucesso!")}catch(w){throw new Error(qt(w,"Erro ao alterar a senha."))}},[]),s=L.useCallback(async()=>{try{await Pe.post("/auth/logout")}catch{console.warn("[LOGOUT API ERROR] Sessão encerrada apenas localmente")}finally{$s(),n({type:St.LOGOUT}),ae.success("Sessão encerrada.")}},[]),l=L.useCallback(h=>{n({type:St.UPDATE_USER,payload:h})},[]),c=((m=t.user)==null?void 0:m.role)==="admin",f=((g=t.user)==null?void 0:g.role)==="user",u=((b=t.user)==null?void 0:b.role)==="partner",d=L.useCallback((...h)=>{var y;return h.includes((y=t.user)==null?void 0:y.role)},[($=t.user)==null?void 0:$.role]),p=L.useMemo(()=>({user:t.user,isAuthenticated:t.isAuthenticated,isLoading:t.isLoading,mustChangePassword:t.mustChangePassword,isAdmin:c,isUser:f,isPartner:u,hasRole:d,login:o,logout:s,changePassword:i,updateUser:l}),[t.user,t.isAuthenticated,t.isLoading,t.mustChangePassword,c,f,u,d,o,s,i,l]);return a.jsx(av.Provider,{value:p,children:e})}function Bn(){const e=L.useContext(av);if(!e)throw new Error("useAuth deve ser usado dentro de <AuthProvider>.");return e}function Du({allowedRoles:e}){const{isAuthenticated:t,isLoading:n,user:r,mustChangePassword:o}=Bn(),s=Ir().pathname.includes("/alterar-senha");return n?null:o?s?a.jsx(nf,{}):a.jsx(os,{to:"/alterar-senha",replace:!0}):s?a.jsx(os,{to:"/dashboard",replace:!0}):t?e&&!e.includes(r==null?void 0:r.role)?a.jsx(os,{to:"/dashboard",replace:!0}):a.jsx(nf,{}):a.jsx(os,{to:"/login",replace:!0})}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lv=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var u_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=L.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:s,...l},c)=>L.createElement("svg",{ref:c,...u_,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:lv("lucide",o),...l},[...s.map(([f,u])=>L.createElement(f,u)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(e,t)=>{const n=L.forwardRef(({className:r,...o},i)=>L.createElement(d_,{ref:i,iconNode:t,className:lv(`lucide-${c_(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=ue("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=ue("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=ue("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=ue("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=ue("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=ue("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=ue("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=ue("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=ue("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=ue("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=ue("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=ue("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=ue("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=ue("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=ue("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=ue("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=ue("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=ue("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=ue("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=ue("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=ue("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=ue("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=ue("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=ue("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=ue("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=ue("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=ue("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=ue("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=ue("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=ue("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=ue("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=ue("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=ue("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=ue("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=ue("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=ue("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=ue("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=ue("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=ue("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=ue("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ue("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=ue("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=ue("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=ue("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=ue("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),z_=lt`
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
`,N_=S.aside`
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
`,L_=S.div`
  padding: ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[5]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral[800]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  animation: ${z_} 0.4s ease both;
`,D_=S.div`
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
`,I_=S.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
`,M_=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,U_=S.nav`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[3]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,B_=S.div`
  margin-top: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  padding: 0 ${({theme:e})=>e.spacing[2]};
`,W_=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral[600]};
`,V_=S(rk)`
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
`,H_=S.span`
  flex: 1;
`;S.span`
  background-color: ${({theme:e})=>e.colors.primary[600]};
  color: #fff;
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  padding: 1px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  line-height: 1.6;
`;const q_=S.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[3]};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[800]};
`,G_=S.div`
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
`,Y_=S.div`
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
`,Q_=S.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,X_=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,K_=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[500]};
  text-transform: capitalize;
`,J_=S.div`
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
`,Z_=(e="")=>e.split(" ").filter(Boolean).slice(0,2).map(t=>t[0].toUpperCase()).join(""),e5={admin:"Administrador",user:"Usuário",partner:"Parceiro"},t5=[{section:"Principal",items:[{path:"/dashboard",label:"Dashboard",icon:j_},{path:"/clientes",label:"Clientes",icon:O_},{path:"/vendas",label:"Vendas",icon:T_}]},{section:"Administração",adminOnly:!0,items:[{path:"/usuarios",label:"Usuários",icon:Zs},{path:"/bandeiras",label:"Bandeiras",icon:dv},{path:"/planos",label:"Planos",icon:tg},{path:"/relatorios",label:"Relatórios",icon:tg}]},{section:"Conta",items:[{path:"/perfil",label:"Meu Perfil",icon:y_}]}];function n5({open:e,onClose:t}){const{user:n,isAdmin:r}=Bn();return a.jsxs(a.Fragment,{children:[a.jsx(J_,{$open:e,onClick:t}),a.jsxs(N_,{$open:e,children:[a.jsxs(L_,{children:[a.jsx(D_,{children:"BG"}),a.jsx(I_,{children:a.jsx(M_,{children:"BG Representações"})})]}),a.jsx(U_,{children:t5.map(o=>o.adminOnly&&!r?null:a.jsxs("div",{children:[a.jsx(B_,{children:a.jsx(W_,{children:o.section})}),o.items.map(({path:i,label:s,icon:l})=>a.jsxs(V_,{to:i,onClick:t,children:[a.jsx(l,{size:17}),a.jsx(H_,{children:s})]},i))]},o.section))}),a.jsx(q_,{children:a.jsxs(G_,{children:[a.jsx(Y_,{children:Z_(n==null?void 0:n.name)}),a.jsxs(Q_,{children:[a.jsx(X_,{children:(n==null?void 0:n.name)??"Usuário"}),a.jsx(K_,{children:e5[n==null?void 0:n.role]??(n==null?void 0:n.role)})]})]})})]})]})}const r5=S.header`
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
`,o5=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,i5=S.button`
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
`,s5=S.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,a5=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,l5=S.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;

  /* Oculta em telas pequenas para não sobrecarregar */
  @media (max-width: 600px) {
    display: none;
  }
`,c5=S.span`
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
`,u5=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`,d5=S.div`
  width: 1px;
  height: 24px;
  background-color: ${({theme:e})=>e.border.default};
  flex-shrink: 0;

  @media (max-width: 600px) {
    display: none;
  }
`,f5=S.button`
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
`,Iu={"/dashboard":"Dashboard","/clientes":"Clientes","/vendas":"Vendas","/usuarios":"Usuários","/bandeiras":"Bandeiras","/planos":"Planos","/relatorios":"Relatórios","/perfil":"Meu Perfil","/onboarding":"Novo Cliente"},p5={admin:"Administrador",user:"Usuário",partner:"Parceiro"};function h5({onMenuClick:e}){var s;const{user:t,logout:n}=Bn(),r=Ir(),o=(()=>{const l=Iu[r.pathname];if(l)return l;const c=Object.keys(Iu).find(f=>r.pathname.startsWith(f+"/"));return c?Iu[c]:"BG Representações"})(),i=((s=t==null?void 0:t.name)==null?void 0:s.split(" ")[0])??"Usuário";return a.jsxs(r5,{children:[a.jsxs(o5,{children:[a.jsx(i5,{type:"button",onClick:e,"aria-label":"Abrir menu",children:a.jsx(P_,{size:18})}),a.jsx(s5,{children:o})]}),a.jsxs(a5,{children:[a.jsxs(l5,{children:[a.jsxs(c5,{children:["Olá, ",i]}),a.jsx(u5,{children:p5[t==null?void 0:t.role]??(t==null?void 0:t.role)})]}),a.jsx(d5,{}),a.jsxs(f5,{type:"button",onClick:n,children:[a.jsx(C_,{size:15}),a.jsx("span",{children:"Sair"})]})]})]})}const m5=S.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.surface.page};
`,g5=S.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; /* evita overflow em flex */
  overflow: hidden;
`,y5=S.main`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[8]};
  background-color: ${({theme:e})=>e.surface.page};

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[4]};
  }
`;function x5(){const[e,t]=L.useState(!1);return a.jsxs(m5,{children:[a.jsx(n5,{open:e,onClose:()=>t(!1)}),a.jsxs(g5,{children:[a.jsx(h5,{onMenuClick:()=>t(n=>!n)}),a.jsx(y5,{children:a.jsx(nf,{})})]})]})}var fa=e=>e.type==="checkbox",to=e=>e instanceof Date,Lt=e=>e==null;const yv=e=>typeof e=="object";var tt=e=>!Lt(e)&&!Array.isArray(e)&&yv(e)&&!to(e),v5=e=>tt(e)&&e.target?fa(e.target)?e.target.checked:e.target.value:e,b5=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,w5=(e,t)=>e.has(b5(t)),$5=e=>{const t=e.constructor&&e.constructor.prototype;return tt(t)&&t.hasOwnProperty("isPrototypeOf")},Bp=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ot(e){if(e instanceof Date)return new Date(e);const t=typeof FileList<"u"&&e instanceof FileList;if(Bp&&(e instanceof Blob||t))return e;const n=Array.isArray(e);if(!n&&!(tt(e)&&$5(e)))return e;const r=n?[]:Object.create(Object.getPrototypeOf(e));for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=ot(e[o]));return r}var Qc=e=>/^\w*$/.test(e),Me=e=>e===void 0,Wp=e=>Array.isArray(e)?e.filter(Boolean):[],Vp=e=>Wp(e.replace(/["|']|\]/g,"").split(/\.|\[/)),re=(e,t,n)=>{if(!t||!tt(e))return n;const r=(Qc(t)?[t]:Vp(t)).reduce((o,i)=>Lt(o)?o:o[i],e);return Me(r)||r===e?Me(e[t])?n:e[t]:r},Tn=e=>typeof e=="boolean",$n=e=>typeof e=="function",Ce=(e,t,n)=>{let r=-1;const o=Qc(t)?[t]:Vp(t),i=o.length,s=i-1;for(;++r<i;){const l=o[r];let c=n;if(r!==s){const f=e[l];c=tt(f)||Array.isArray(f)?f:isNaN(+o[r+1])?{}:[]}if(l==="__proto__"||l==="constructor"||l==="prototype")return;e[l]=c,e=e[l]}};const og={BLUR:"blur",FOCUS_OUT:"focusout"},kn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Wn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},k5=le.createContext(null);k5.displayName="HookFormControlContext";var S5=(e,t,n,r=!0)=>{const o={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(o,i,{get:()=>{const s=i;return t._proxyFormState[s]!==kn.all&&(t._proxyFormState[s]=!r||kn.all),e[s]}});return o};const j5=typeof window<"u"?le.useLayoutEffect:le.useEffect;var Kt=e=>typeof e=="string",_5=(e,t,n,r,o)=>Kt(e)?(r&&t.watch.add(e),re(n,e,o)):Array.isArray(e)?e.map(i=>(r&&t.watch.add(i),re(n,i))):(r&&(t.watchAll=!0),n),$f=e=>Lt(e)||!yv(e);function hr(e,t,n=new WeakSet){if($f(e)||$f(t))return Object.is(e,t);if(to(e)&&to(t))return Object.is(e.getTime(),t.getTime());const r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;if(n.has(e)||n.has(t))return!0;n.add(e),n.add(t);for(const i of r){const s=e[i];if(!o.includes(i))return!1;if(i!=="ref"){const l=t[i];if(to(s)&&to(l)||tt(s)&&tt(l)||Array.isArray(s)&&Array.isArray(l)?!hr(s,l,n):!Object.is(s,l))return!1}}return!0}const E5=le.createContext(null);E5.displayName="HookFormContext";var xv=(e,t,n,r,o)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:o||!0}}:{},ks=e=>Array.isArray(e)?e:[e],ig=()=>{let e=[];return{get observers(){return e},next:o=>{for(const i of e)i.next&&i.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(i=>i!==o)}}),unsubscribe:()=>{e=[]}}};function vv(e,t){const n={};for(const r in e)if(e.hasOwnProperty(r)){const o=e[r],i=t[r];if(o&&tt(o)&&i){const s=vv(o,i);tt(s)&&(n[r]=s)}else e[r]&&(n[r]=i)}return n}var Ct=e=>tt(e)&&!Object.keys(e).length,Hp=e=>e.type==="file",lc=e=>{if(!Bp)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},bv=e=>e.type==="select-multiple",qp=e=>e.type==="radio",C5=e=>qp(e)||fa(e),Mu=e=>lc(e)&&e.isConnected;function P5(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Me(e)?r++:e[t[r++]];return e}function F5(e){for(const t in e)if(e.hasOwnProperty(t)&&!Me(e[t]))return!1;return!0}function Je(e,t){const n=Array.isArray(t)?t:Qc(t)?[t]:Vp(t),r=n.length===1?e:P5(e,n),o=n.length-1,i=n[o];return r&&delete r[i],o!==0&&(tt(r)&&Ct(r)||Array.isArray(r)&&F5(r))&&Je(e,n.slice(0,-1)),e}var T5=e=>{for(const t in e)if($n(e[t]))return!0;return!1};function wv(e){return Array.isArray(e)||tt(e)&&!T5(e)}function kf(e,t={}){for(const n in e){const r=e[n];wv(r)?(t[n]=Array.isArray(r)?[]:{},kf(r,t[n])):Me(r)||(t[n]=!0)}return t}function Lo(e,t,n){n||(n=kf(t));for(const r in e){const o=e[r];if(wv(o))Me(t)||$f(n[r])?n[r]=kf(o,Array.isArray(o)?[]:{}):Lo(o,Lt(t)?{}:t[r],n[r]);else{const i=t[r];n[r]=!hr(o,i)}}return n}const sg={value:!1,isValid:!1},ag={value:!0,isValid:!0};var $v=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Me(e[0].attributes.value)?Me(e[0].value)||e[0].value===""?ag:{value:e[0].value,isValid:!0}:ag:sg}return sg},kv=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Me(e)?e:t?e===""?NaN:e&&+e:n&&Kt(e)?new Date(e):r?r(e):e;const lg={isValid:!1,value:null};var Sv=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,lg):lg;function cg(e){const t=e.ref;return Hp(t)?t.files:qp(t)?Sv(e.refs).value:bv(t)?[...t.selectedOptions].map(({value:n})=>n):fa(t)?$v(e.refs).value:kv(Me(t.value)?e.ref.value:t.value,e)}var A5=(e,t,n,r)=>{const o={};for(const i of e){const s=re(t,i);s&&Ce(o,i,s._f)}return{criteriaMode:n,names:[...e],fields:o,shouldUseNativeValidation:r}},cc=e=>e instanceof RegExp,Wi=e=>Me(e)?e:cc(e)?e.source:tt(e)?cc(e.value)?e.value.source:e.value:e,ug=e=>({isOnSubmit:!e||e===kn.onSubmit,isOnBlur:e===kn.onBlur,isOnChange:e===kn.onChange,isOnAll:e===kn.all,isOnTouch:e===kn.onTouched});const dg="AsyncFunction";var R5=e=>!!e&&!!e.validate&&!!($n(e.validate)&&e.validate.constructor.name===dg||tt(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===dg)),O5=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),fg=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Ss=(e,t,n,r)=>{for(const o of n||Object.keys(e)){const i=re(e,o);if(i){const{_f:s,...l}=i;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],o)&&!r)return!0;if(s.ref&&t(s.ref,s.name)&&!r)return!0;if(Ss(l,t))break}else if(tt(l)&&Ss(l,t))break}}};function pg(e,t,n){const r=re(e,n);if(r||Qc(n))return{error:r,name:n};const o=n.split(".");for(;o.length;){const i=o.join("."),s=re(t,i),l=re(e,i);if(s&&!Array.isArray(s)&&n!==i)return{name:n};if(l&&l.type)return{name:i,error:l};if(l&&l.root&&l.root.type)return{name:`${i}.root`,error:l.root};o.pop()}return{name:n}}var z5=(e,t,n,r)=>{n(e);const{name:o,...i}=e;return Ct(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(s=>t[s]===(!r||kn.all))},N5=(e,t,n)=>!e||!t||e===t||ks(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),L5=(e,t,n,r,o)=>o.isOnAll?!1:!n&&o.isOnTouch?!(t||e):(n?r.isOnBlur:o.isOnBlur)?!e:(n?r.isOnChange:o.isOnChange)?e:!0,D5=(e,t)=>!Wp(re(e,t)).length&&Je(e,t),I5=(e,t,n)=>{const r=ks(re(e,n));return Ce(r,"root",t[n]),Ce(e,n,r),e};function hg(e,t,n="validate"){if(Kt(e)||Array.isArray(e)&&e.every(Kt)||Tn(e)&&!e)return{type:n,message:Kt(e)?e:"",ref:t}}var Eo=e=>tt(e)&&!cc(e)?e:{value:e,message:""},mg=async(e,t,n,r,o,i)=>{const{ref:s,refs:l,required:c,maxLength:f,minLength:u,min:d,max:p,pattern:m,validate:g,name:b,valueAsNumber:$,mount:h}=e._f,y=re(n,b);if(!h||t.has(b))return{};const x=l?l[0]:s,w=R=>{o&&x.reportValidity&&(x.setCustomValidity(Tn(R)?"":R||""),x.reportValidity())},C={},_=qp(s),P=fa(s),v=_||P,j=($||Hp(s))&&Me(s.value)&&Me(y)||lc(s)&&s.value===""||y===""||Array.isArray(y)&&!y.length,T=xv.bind(null,b,r,C),A=(R,N,F,M=Wn.maxLength,E=Wn.minLength)=>{const k=R?N:F;C[b]={type:R?M:E,message:k,ref:s,...T(R?M:E,k)}};if(i?!Array.isArray(y)||!y.length:c&&(!v&&(j||Lt(y))||Tn(y)&&!y||P&&!$v(l).isValid||_&&!Sv(l).isValid)){const{value:R,message:N}=Kt(c)?{value:!!c,message:c}:Eo(c);if(R&&(C[b]={type:Wn.required,message:N,ref:x,...T(Wn.required,N)},!r))return w(N),C}if(!j&&(!Lt(d)||!Lt(p))){let R,N;const F=Eo(p),M=Eo(d);if(!Lt(y)&&!isNaN(y)){const E=s.valueAsNumber||y&&+y;Lt(F.value)||(R=E>F.value),Lt(M.value)||(N=E<M.value)}else{const E=s.valueAsDate||new Date(y),k=I=>new Date(new Date().toDateString()+" "+I),D=s.type=="time",z=s.type=="week";Kt(F.value)&&y&&(R=D?k(y)>k(F.value):z?y>F.value:E>new Date(F.value)),Kt(M.value)&&y&&(N=D?k(y)<k(M.value):z?y<M.value:E<new Date(M.value))}if((R||N)&&(A(!!R,F.message,M.message,Wn.max,Wn.min),!r))return w(C[b].message),C}if((f||u)&&!j&&(Kt(y)||i&&Array.isArray(y))){const R=Eo(f),N=Eo(u),F=!Lt(R.value)&&y.length>+R.value,M=!Lt(N.value)&&y.length<+N.value;if((F||M)&&(A(F,R.message,N.message),!r))return w(C[b].message),C}if(m&&!j&&Kt(y)){const{value:R,message:N}=Eo(m);if(cc(R)&&!y.match(R)&&(C[b]={type:Wn.pattern,message:N,ref:s,...T(Wn.pattern,N)},!r))return w(N),C}if(g){if($n(g)){const R=await g(y,n),N=hg(R,x);if(N&&(C[b]={...N,...T(Wn.validate,N.message)},!r))return w(N.message),C}else if(tt(g)){let R={};for(const N in g){if(!Ct(R)&&!r)break;const F=hg(await g[N](y,n),x,N);F&&(R={...F,...T(N,F.message)},w(F.message),r&&(C[b]=R))}if(!Ct(R)&&(C[b]={ref:x,...R},!r))return C}}return w(!0),C};const M5={mode:kn.onSubmit,reValidateMode:kn.onChange,shouldFocusError:!0};function U5(e={}){let t={...M5,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:$n(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},o=tt(t.defaultValues)||tt(t.values)?ot(t.defaultValues||t.values)||{}:{},i=t.shouldUnregister?{}:ot(o),s={action:!1,mount:!1,watch:!1,keepIsValid:!1},l={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},c,f=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={...u};let p={...d};const m={array:ig(),state:ig()},g=t.criteriaMode===kn.all,b=O=>U=>{clearTimeout(f),f=setTimeout(O,U)},$=async O=>{if(!s.keepIsValid&&!t.disabled&&(d.isValid||p.isValid||O)){let U;t.resolver?(U=Ct((await v()).errors),h()):U=await T(r,!0),U!==n.isValid&&m.state.next({isValid:U})}},h=(O,U)=>{!t.disabled&&(d.isValidating||d.validatingFields||p.isValidating||p.validatingFields)&&((O||Array.from(l.mount)).forEach(W=>{W&&(U?Ce(n.validatingFields,W,U):Je(n.validatingFields,W))}),m.state.next({validatingFields:n.validatingFields,isValidating:!Ct(n.validatingFields)}))},y=(O,U=[],W,J,ee=!0,Z=!0)=>{if(J&&W&&!t.disabled){if(s.action=!0,Z&&Array.isArray(re(r,O))){const ie=W(re(r,O),J.argA,J.argB);ee&&Ce(r,O,ie)}if(Z&&Array.isArray(re(n.errors,O))){const ie=W(re(n.errors,O),J.argA,J.argB);ee&&Ce(n.errors,O,ie),D5(n.errors,O)}if((d.touchedFields||p.touchedFields)&&Z&&Array.isArray(re(n.touchedFields,O))){const ie=W(re(n.touchedFields,O),J.argA,J.argB);ee&&Ce(n.touchedFields,O,ie)}(d.dirtyFields||p.dirtyFields)&&(n.dirtyFields=Lo(o,i)),m.state.next({name:O,isDirty:R(O,U),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Ce(i,O,U)},x=(O,U)=>{Ce(n.errors,O,U),m.state.next({errors:n.errors})},w=O=>{n.errors=O,m.state.next({errors:n.errors,isValid:!1})},C=(O,U,W,J)=>{const ee=re(r,O);if(ee){const Z=re(i,O,Me(W)?re(o,O):W);Me(Z)||J&&J.defaultChecked||U?Ce(i,O,U?Z:cg(ee._f)):M(O,Z),s.mount&&!s.action&&$()}},_=(O,U,W,J,ee)=>{let Z=!1,ie=!1;const de={name:O};if(!t.disabled){if(!W||J){(d.isDirty||p.isDirty)&&(ie=n.isDirty,n.isDirty=de.isDirty=R(),Z=ie!==de.isDirty);const ye=hr(re(o,O),U);ie=!!re(n.dirtyFields,O),ye?Je(n.dirtyFields,O):Ce(n.dirtyFields,O,!0),de.dirtyFields=n.dirtyFields,Z=Z||(d.dirtyFields||p.dirtyFields)&&ie!==!ye}if(W){const ye=re(n.touchedFields,O);ye||(Ce(n.touchedFields,O,W),de.touchedFields=n.touchedFields,Z=Z||(d.touchedFields||p.touchedFields)&&ye!==W)}Z&&ee&&m.state.next(de)}return Z?de:{}},P=(O,U,W,J)=>{const ee=re(n.errors,O),Z=(d.isValid||p.isValid)&&Tn(U)&&n.isValid!==U;if(t.delayError&&W?(c=b(()=>x(O,W)),c(t.delayError)):(clearTimeout(f),c=null,W?Ce(n.errors,O,W):Je(n.errors,O)),(W?!hr(ee,W):ee)||!Ct(J)||Z){const ie={...J,...Z&&Tn(U)?{isValid:U}:{},errors:n.errors,name:O};n={...n,...ie},m.state.next(ie)}},v=async O=>(h(O,!0),await t.resolver(i,t.context,A5(O||l.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),j=async O=>{const{errors:U}=await v(O);if(h(O),O)for(const W of O){const J=re(U,W);J?Ce(n.errors,W,J):Je(n.errors,W)}else n.errors=U;return U},T=async(O,U,W={valid:!0})=>{for(const J in O){const ee=O[J];if(ee){const{_f:Z,...ie}=ee;if(Z){const de=l.array.has(Z.name),ye=ee._f&&R5(ee._f);ye&&d.validatingFields&&h([Z.name],!0);const we=await mg(ee,l.disabled,i,g,t.shouldUseNativeValidation&&!U,de);if(ye&&d.validatingFields&&h([Z.name]),we[Z.name]&&(W.valid=!1,U||e.shouldUseNativeValidation))break;!U&&(re(we,Z.name)?de?I5(n.errors,we,Z.name):Ce(n.errors,Z.name,we[Z.name]):Je(n.errors,Z.name))}!Ct(ie)&&await T(ie,U,W)}}return W.valid},A=()=>{for(const O of l.unMount){const U=re(r,O);U&&(U._f.refs?U._f.refs.every(W=>!Mu(W)):!Mu(U._f.ref))&&X(O)}l.unMount=new Set},R=(O,U)=>!t.disabled&&(O&&U&&Ce(i,O,U),!hr(Y(),o)),N=(O,U,W)=>_5(O,l,{...s.mount?i:Me(U)?o:Kt(O)?{[O]:U}:U},W,U),F=O=>Wp(re(s.mount?i:o,O,t.shouldUnregister?re(o,O,[]):[])),M=(O,U,W={})=>{const J=re(r,O);let ee=U;if(J){const Z=J._f;Z&&(!Z.disabled&&Ce(i,O,kv(U,Z)),ee=lc(Z.ref)&&Lt(U)?"":U,bv(Z.ref)?[...Z.ref.options].forEach(ie=>ie.selected=ee.includes(ie.value)):Z.refs?fa(Z.ref)?Z.refs.forEach(ie=>{(!ie.defaultChecked||!ie.disabled)&&(Array.isArray(ee)?ie.checked=!!ee.find(de=>de===ie.value):ie.checked=ee===ie.value||!!ee)}):Z.refs.forEach(ie=>ie.checked=ie.value===ee):Hp(Z.ref)?Z.ref.value="":(Z.ref.value=ee,Z.ref.type||m.state.next({name:O,values:ot(i)})))}(W.shouldDirty||W.shouldTouch)&&_(O,ee,W.shouldTouch,W.shouldDirty,!0),W.shouldValidate&&I(O)},E=(O,U,W)=>{for(const J in U){if(!U.hasOwnProperty(J))return;const ee=U[J],Z=O+"."+J,ie=re(r,Z);(l.array.has(O)||tt(ee)||ie&&!ie._f)&&!to(ee)?E(Z,ee,W):M(Z,ee,W)}},k=(O,U,W={})=>{const J=re(r,O),ee=l.array.has(O),Z=ot(U);Ce(i,O,Z),ee?(m.array.next({name:O,values:ot(i)}),(d.isDirty||d.dirtyFields||p.isDirty||p.dirtyFields)&&W.shouldDirty&&m.state.next({name:O,dirtyFields:Lo(o,i),isDirty:R(O,Z)})):J&&!J._f&&!Lt(Z)?E(O,Z,W):M(O,Z,W),fg(O,l)?m.state.next({...n,name:O,values:ot(i)}):m.state.next({name:s.mount?O:void 0,values:ot(i)})},D=async O=>{s.mount=!0;const U=O.target;let W=U.name,J=!0;const ee=re(r,W),Z=ye=>{J=Number.isNaN(ye)||to(ye)&&isNaN(ye.getTime())||hr(ye,re(i,W,ye))},ie=ug(t.mode),de=ug(t.reValidateMode);if(ee){let ye,we;const nt=U.type?cg(ee._f):v5(O),Qe=O.type===og.BLUR||O.type===og.FOCUS_OUT,hn=!O5(ee._f)&&!t.resolver&&!re(n.errors,W)&&!ee._f.deps||L5(Qe,re(n.touchedFields,W),n.isSubmitted,de,ie),zt=fg(W,l,Qe);Ce(i,W,nt),Qe?(!U||!U.readOnly)&&(ee._f.onBlur&&ee._f.onBlur(O),c&&c(0)):ee._f.onChange&&ee._f.onChange(O);const mn=_(W,nt,Qe),Pi=!Ct(mn)||zt;if(!Qe&&m.state.next({name:W,type:O.type,values:ot(i)}),hn)return(d.isValid||p.isValid)&&(t.mode==="onBlur"?Qe&&$():Qe||$()),Pi&&m.state.next({name:W,...zt?{}:mn});if(!Qe&&zt&&m.state.next({...n}),t.resolver){const{errors:ha}=await v([W]);if(h([W]),Z(nt),J){const Fi=pg(n.errors,r,W),Ti=pg(ha,r,Fi.name||W);ye=Ti.error,W=Ti.name,we=Ct(ha)}}else h([W],!0),ye=(await mg(ee,l.disabled,i,g,t.shouldUseNativeValidation))[W],h([W]),Z(nt),J&&(ye?we=!1:(d.isValid||p.isValid)&&(we=await T(r,!0)));J&&(ee._f.deps&&(!Array.isArray(ee._f.deps)||ee._f.deps.length>0)&&I(ee._f.deps),P(W,we,ye,mn))}},z=(O,U)=>{if(re(n.errors,U)&&O.focus)return O.focus(),1},I=async(O,U={})=>{let W,J;const ee=ks(O);if(t.resolver){const Z=await j(Me(O)?O:ee);W=Ct(Z),J=O?!ee.some(ie=>re(Z,ie)):W}else O?(J=(await Promise.all(ee.map(async Z=>{const ie=re(r,Z);return await T(ie&&ie._f?{[Z]:ie}:ie)}))).every(Boolean),!(!J&&!n.isValid)&&$()):J=W=await T(r);return m.state.next({...!Kt(O)||(d.isValid||p.isValid)&&W!==n.isValid?{}:{name:O},...t.resolver||!O?{isValid:W}:{},errors:n.errors}),U.shouldFocus&&!J&&Ss(r,z,O?ee:l.mount),J},Y=(O,U)=>{let W={...s.mount?i:o};return U&&(W=vv(U.dirtyFields?n.dirtyFields:n.touchedFields,W)),Me(O)?W:Kt(O)?re(W,O):O.map(J=>re(W,J))},B=(O,U)=>({invalid:!!re((U||n).errors,O),isDirty:!!re((U||n).dirtyFields,O),error:re((U||n).errors,O),isValidating:!!re(n.validatingFields,O),isTouched:!!re((U||n).touchedFields,O)}),K=O=>{const U=O?ks(O):void 0;U==null||U.forEach(W=>Je(n.errors,W)),U?U.forEach(W=>{m.state.next({name:W,errors:n.errors})}):m.state.next({errors:{}})},G=(O,U,W)=>{const J=(re(r,O,{_f:{}})._f||{}).ref,ee=re(n.errors,O)||{},{ref:Z,message:ie,type:de,...ye}=ee;Ce(n.errors,O,{...ye,...U,ref:J}),m.state.next({name:O,errors:n.errors,isValid:!1}),W&&W.shouldFocus&&J&&J.focus&&J.focus()},V=(O,U)=>$n(O)?m.state.subscribe({next:W=>"values"in W&&O(N(void 0,U),W)}):N(O,U,!0),Q=O=>m.state.subscribe({next:U=>{N5(O.name,U.name,O.exact)&&z5(U,O.formState||d,he,O.reRenderRoot)&&O.callback({values:{...i},...n,...U,defaultValues:o})}}).unsubscribe,q=O=>(s.mount=!0,p={...p,...O.formState},Q({...O,formState:{...u,...O.formState}})),X=(O,U={})=>{for(const W of O?ks(O):l.mount)l.mount.delete(W),l.array.delete(W),U.keepValue||(Je(r,W),Je(i,W)),!U.keepError&&Je(n.errors,W),!U.keepDirty&&Je(n.dirtyFields,W),!U.keepTouched&&Je(n.touchedFields,W),!U.keepIsValidating&&Je(n.validatingFields,W),!t.shouldUnregister&&!U.keepDefaultValue&&Je(o,W);m.state.next({values:ot(i)}),m.state.next({...n,...U.keepDirty?{isDirty:R()}:{}}),!U.keepIsValid&&$()},oe=({disabled:O,name:U})=>{if(Tn(O)&&s.mount||O||l.disabled.has(U)){const ee=l.disabled.has(U)!==!!O;O?l.disabled.add(U):l.disabled.delete(U),ee&&s.mount&&!s.action&&$()}},se=(O,U={})=>{let W=re(r,O);const J=Tn(U.disabled)||Tn(t.disabled);return Ce(r,O,{...W||{},_f:{...W&&W._f?W._f:{ref:{name:O}},name:O,mount:!0,...U}}),l.mount.add(O),W?oe({disabled:Tn(U.disabled)?U.disabled:t.disabled,name:O}):C(O,!0,U.value),{...J?{disabled:U.disabled||t.disabled}:{},...t.progressive?{required:!!U.required,min:Wi(U.min),max:Wi(U.max),minLength:Wi(U.minLength),maxLength:Wi(U.maxLength),pattern:Wi(U.pattern)}:{},name:O,onChange:D,onBlur:D,ref:ee=>{if(ee){se(O,U),W=re(r,O);const Z=Me(ee.value)&&ee.querySelectorAll&&ee.querySelectorAll("input,select,textarea")[0]||ee,ie=C5(Z),de=W._f.refs||[];if(ie?de.find(ye=>ye===Z):Z===W._f.ref)return;Ce(r,O,{_f:{...W._f,...ie?{refs:[...de.filter(Mu),Z,...Array.isArray(re(o,O))?[{}]:[]],ref:{type:Z.type,name:O}}:{ref:Z}}}),C(O,!1,void 0,Z)}else W=re(r,O,{}),W._f&&(W._f.mount=!1),(t.shouldUnregister||U.shouldUnregister)&&!(w5(l.array,O)&&s.action)&&l.unMount.add(O)}}},fe=()=>t.shouldFocusError&&Ss(r,z,l.mount),ke=O=>{Tn(O)&&(m.state.next({disabled:O}),Ss(r,(U,W)=>{const J=re(r,W);J&&(U.disabled=J._f.disabled||O,Array.isArray(J._f.refs)&&J._f.refs.forEach(ee=>{ee.disabled=J._f.disabled||O}))},0,!1))},Le=(O,U)=>async W=>{let J;W&&(W.preventDefault&&W.preventDefault(),W.persist&&W.persist());let ee=ot(i);if(m.state.next({isSubmitting:!0}),t.resolver){const{errors:Z,values:ie}=await v();h(),n.errors=Z,ee=ot(ie)}else await T(r);if(l.disabled.size)for(const Z of l.disabled)Je(ee,Z);if(Je(n.errors,"root"),Ct(n.errors)){m.state.next({errors:{}});try{await O(ee,W)}catch(Z){J=Z}}else U&&await U({...n.errors},W),fe(),setTimeout(fe);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ct(n.errors)&&!J,submitCount:n.submitCount+1,errors:n.errors}),J)throw J},pt=(O,U={})=>{re(r,O)&&(Me(U.defaultValue)?k(O,ot(re(o,O))):(k(O,U.defaultValue),Ce(o,O,ot(U.defaultValue))),U.keepTouched||Je(n.touchedFields,O),U.keepDirty||(Je(n.dirtyFields,O),n.isDirty=U.defaultValue?R(O,ot(re(o,O))):R()),U.keepError||(Je(n.errors,O),d.isValid&&$()),m.state.next({...n}))},Se=(O,U={})=>{const W=O?ot(O):o,J=ot(W),ee=Ct(O),Z=ee?o:J;if(U.keepDefaultValues||(o=W),!U.keepValues){if(U.keepDirtyValues){const ie=new Set([...l.mount,...Object.keys(Lo(o,i))]);for(const de of Array.from(ie)){const ye=re(n.dirtyFields,de),we=re(i,de),nt=re(Z,de);ye&&!Me(we)?Ce(Z,de,we):!ye&&!Me(nt)&&k(de,nt)}}else{if(Bp&&Me(O))for(const ie of l.mount){const de=re(r,ie);if(de&&de._f){const ye=Array.isArray(de._f.refs)?de._f.refs[0]:de._f.ref;if(lc(ye)){const we=ye.closest("form");if(we){we.reset();break}}}}if(U.keepFieldsRef)for(const ie of l.mount)k(ie,re(Z,ie));else r={}}i=t.shouldUnregister?U.keepDefaultValues?ot(o):{}:ot(Z),m.array.next({values:{...Z}}),m.state.next({values:{...Z}})}l={mount:U.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},s.mount=!d.isValid||!!U.keepIsValid||!!U.keepDirtyValues||!t.shouldUnregister&&!Ct(Z),s.watch=!!t.shouldUnregister,s.keepIsValid=!!U.keepIsValid,s.action=!1,U.keepErrors||(n.errors={}),m.state.next({submitCount:U.keepSubmitCount?n.submitCount:0,isDirty:ee?!1:U.keepDirty?n.isDirty:!!(U.keepDefaultValues&&!hr(O,o)),isSubmitted:U.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:ee?{}:U.keepDirtyValues?U.keepDefaultValues&&i?Lo(o,i):n.dirtyFields:U.keepDefaultValues&&O?Lo(o,O):U.keepDirty?n.dirtyFields:{},touchedFields:U.keepTouched?n.touchedFields:{},errors:U.keepErrors?n.errors:{},isSubmitSuccessful:U.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:o})},He=(O,U)=>Se($n(O)?O(i):O,{...t.resetOptions,...U}),je=(O,U={})=>{const W=re(r,O),J=W&&W._f;if(J){const ee=J.refs?J.refs[0]:J.ref;ee.focus&&setTimeout(()=>{ee.focus(),U.shouldSelect&&$n(ee.select)&&ee.select()})}},he=O=>{n={...n,...O}},Ke={control:{register:se,unregister:X,getFieldState:B,handleSubmit:Le,setError:G,_subscribe:Q,_runSchema:v,_updateIsValidating:h,_focusError:fe,_getWatch:N,_getDirty:R,_setValid:$,_setFieldArray:y,_setDisabledField:oe,_setErrors:w,_getFieldArray:F,_reset:Se,_resetDefaultValues:()=>$n(t.defaultValues)&&t.defaultValues().then(O=>{He(O,t.resetOptions),m.state.next({isLoading:!1})}),_removeUnmounted:A,_disableForm:ke,_subjects:m,_proxyFormState:d,get _fields(){return r},get _formValues(){return i},get _state(){return s},set _state(O){s=O},get _defaultValues(){return o},get _names(){return l},set _names(O){l=O},get _formState(){return n},get _options(){return t},set _options(O){t={...t,...O}}},subscribe:q,trigger:I,register:se,handleSubmit:Le,watch:V,setValue:k,getValues:Y,reset:He,resetField:pt,clearErrors:K,unregister:X,setError:G,setFocus:je,getFieldState:B};return{...Ke,formControl:Ke}}function Xc(e={}){const t=le.useRef(void 0),n=le.useRef(void 0),[r,o]=le.useState({isDirty:!1,isValidating:!1,isLoading:$n(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:$n(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:r},e.defaultValues&&!$n(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:s,...l}=U5(e);t.current={...l,formState:r}}const i=t.current.control;return i._options=e,j5(()=>{const s=i._subscribe({formState:i._proxyFormState,callback:()=>o({...i._formState}),reRenderRoot:!0});return o(l=>({...l,isReady:!0})),i._formState.isReady=!0,s},[i]),le.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),le.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode)},[i,e.mode,e.reValidateMode]),le.useEffect(()=>{e.errors&&(i._setErrors(e.errors),i._focusError())},[i,e.errors]),le.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),le.useEffect(()=>{if(i._proxyFormState.isDirty){const s=i._getDirty();s!==r.isDirty&&i._subjects.state.next({isDirty:s})}},[i,r.isDirty]),le.useEffect(()=>{var s;e.values&&!hr(e.values,n.current)?(i._reset(e.values,{keepFieldsRef:!0,...i._options.resetOptions}),!((s=i._options.resetOptions)===null||s===void 0)&&s.keepIsValid||i._setValid(),n.current=e.values,o(l=>({...l}))):i._resetDefaultValues()},[i,e.values]),le.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=le.useMemo(()=>S5(r,i),[i,r]),t.current}const B5=lt`
  from { opacity: 0; }
  to   { opacity: 1; }
`,pa=lt`
  from { opacity: 0; transform: translateX(-28px); }
  to   { opacity: 1; transform: translateX(0); }
`,W5=lt`
  from { opacity: 0; transform: translateX(28px); }
  to   { opacity: 1; transform: translateX(0); }
`,V5=lt`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,H5=lt`
  from { opacity: 0; transform: scale(1.02); }
  to   { opacity: 1; transform: scale(1); }
`,q5=S.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 55fr 45fr;
  overflow: hidden;

  @media (max-width: 900px) {
    display: block;
    min-height: 100vh;
  }
`,G5=S.section`
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

  animation: ${pa} 0.6s ease both;

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[6]};
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    &::after { display: none; }
  }
`,Y5=S.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
  }
`,Q5=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[20]};
  animation: ${pa} 0.55s 0.05s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({theme:e})=>e.spacing[12]};
    justify-content: center;
  }
`,X5=S.div`
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
`,K5=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary[200]};
  letter-spacing: 0.025em;
`,J5=S.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({theme:e})=>e.spacing[5]};
  max-width: 460px;
  animation: ${pa} 0.55s 0.12s ease both;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.75rem, 7vw, 2.3rem);
    max-width: 320px;
  }
`,Z5=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.neutral[500]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0 0 ${({theme:e})=>e.spacing[10]};
  max-width: 360px;
  animation: ${pa} 0.55s 0.2s ease both;

  @media (max-width: 900px) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    max-width: 280px;
    margin-bottom: ${({theme:e})=>e.spacing[8]};
  }
`,eE=S.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};
  animation: ${pa} 0.55s 0.28s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[6]};
  }
`,Uu=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,Bu=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[400]};
  line-height: 1;
`,Wu=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,tE=S.div`
  position: relative;
  z-index: 3;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[700]};
  animation: ${B5} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`,nE=S.button`
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
    animation: ${V5} 0.55s 0.35s ease both;
    transition:
      transform ${({theme:e})=>e.transitions.base},
      box-shadow ${({theme:e})=>e.transitions.base};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px ${({theme:e})=>e.colors.primary[900]}75;
    }
    &:active { transform: translateY(0); }
  }
`,rE=S.section`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[16]};
  animation: ${W5} 0.55s 0.1s ease both;

  @media (max-width: 1100px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[10]};
  }

  @media (max-width: 900px) {
    display: none;
  }
`,oE=S.div`
  width: 100%;
  max-width: 360px;
`,iE=S.div`
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
    ${({$open:e})=>e&&zr`
        & > * {
          animation: ${H5} 0.32s 0.05s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}
  }
`,sE=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing[10]};
  flex-shrink: 0;
`,aE=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,lE=S.div`
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
`,cE=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
`,uE=S.button`
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
`,dE=S.div`
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,fE=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.brand.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
`,pE=S.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,hE=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0;
`,mE=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[8]};
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,gg=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,yg=S.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,xg=S.div`
  position: relative;
  display: flex;
  align-items: center;
`,vg=S.input`
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
`,gE=S.button`
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
`,bg=S.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,yE=S.button`
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
`,xE=S.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: _spin 0.7s linear infinite;

  @keyframes _spin { to { transform: rotate(360deg); } }
`,vE=S.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[100]};
  margin: ${({theme:e})=>e.spacing[8]} 0 ${({theme:e})=>e.spacing[6]};
`,bE=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;function wg({onSubmitSuccess:e}){const{login:t}=Bn(),[n,r]=L.useState(!1),[o,i]=L.useState(!1),{register:s,handleSubmit:l,formState:{errors:c}}=Xc({defaultValues:{email:"",password:""}}),f=async({email:u,password:d})=>{i(!0);try{const{mustChangePassword:p}=await t(u,d);e(p)}catch(p){ae.error(p.message,{toastId:"login-error"})}finally{i(!1)}};return a.jsxs(a.Fragment,{children:[a.jsxs(dE,{children:[a.jsx(fE,{children:"Área restrita"}),a.jsx(pE,{children:"Bem-vindo de volta"}),a.jsx(hE,{children:"Use as credenciais fornecidas pelo administrador para acessar sua conta."})]}),a.jsxs("form",{onSubmit:l(f),noValidate:!0,children:[a.jsxs(mE,{children:[a.jsxs(gg,{children:[a.jsx(yg,{htmlFor:"email",children:"E-mail"}),a.jsx(xg,{children:a.jsx(vg,{id:"email",type:"email",placeholder:"seu@email.com",autoComplete:"email",$hasError:!!c.email,disabled:o,...s("email",{required:"O e-mail é obrigatório.",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Informe um e-mail válido."}})})}),c.email&&a.jsxs(bg,{children:[a.jsx(ge,{size:12}),c.email.message]})]}),a.jsxs(gg,{children:[a.jsx(yg,{htmlFor:"password",children:"Senha"}),a.jsxs(xg,{children:[a.jsx(vg,{id:"password",type:n?"text":"password",placeholder:"••••••••",autoComplete:"current-password",$hasError:!!c.password,$hasToggle:!0,disabled:o,...s("password",{required:"A senha é obrigatória.",minLength:{value:6,message:"Mínimo 6 caracteres."}})}),a.jsx(gE,{type:"button",onClick:()=>r(u=>!u),"aria-label":n?"Ocultar senha":"Mostrar senha",tabIndex:-1,children:n?a.jsx(ii,{size:16}):a.jsx(si,{size:16})})]}),c.password&&a.jsxs(bg,{children:[a.jsx(ge,{size:12}),c.password.message]})]})]}),a.jsx(yE,{type:"submit",disabled:o,$isLoading:o,children:o?a.jsxs(a.Fragment,{children:[a.jsx(xE,{}),"Carregando…"]}):a.jsxs(a.Fragment,{children:[a.jsx(E_,{size:17}),"Entrar"]})})]}),a.jsx(vE,{}),a.jsx(bE,{children:"Problemas com o acesso? Fale com o administrador do sistema."})]})}function wE(){const e=Un(),[t,n]=L.useState(!1);L.useEffect(()=>(document.body.style.overflow=t?"hidden":"",()=>{document.body.style.overflow=""}),[t]),L.useEffect(()=>{const o=i=>{i.key==="Escape"&&n(!1)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[]);const r=o=>{document.body.style.overflow="",o?e("/alterar-senha",{replace:!0}):e("/dashboard",{replace:!0})};return a.jsxs(q5,{children:[a.jsxs(G5,{children:[a.jsxs(Y5,{children:[a.jsxs(Q5,{children:[a.jsx(X5,{children:"BG"}),a.jsx(K5,{children:"BG Representações"})]}),a.jsxs(J5,{children:["Gestão de ",a.jsx("em",{children:"benefícios"})," com"," ","precisão corporativa."]}),a.jsx(Z5,{children:"Plataforma integrada para gerenciamento de clientes, vendas e cartões de vale alimentação — com rastreabilidade completa e auditoria em cada etapa."}),a.jsxs(eE,{children:[a.jsxs(Uu,{children:[a.jsx(Bu,{children:"100%"}),a.jsx(Wu,{children:"Auditado"})]}),a.jsxs(Uu,{children:[a.jsx(Bu,{children:"JWT"}),a.jsx(Wu,{children:"Segurança"})]}),a.jsxs(Uu,{children:[a.jsx(Bu,{children:"3 níveis"}),a.jsx(Wu,{children:"de acesso"})]})]}),a.jsxs(nE,{type:"button",onClick:()=>n(!0),"aria-label":"Abrir formulário de login",children:["Acessar Sistema",a.jsx(p_,{size:17})]})]}),a.jsxs(tE,{children:["© ",new Date().getFullYear()," BG Representações — Uso interno exclusivo."]})]}),a.jsx(rE,{children:a.jsx(oE,{children:a.jsx(wg,{onSubmitSuccess:r})})}),a.jsxs(iE,{$open:t,role:"dialog","aria-modal":"true","aria-label":"Formulário de login",children:[a.jsxs(sE,{children:[a.jsxs(aE,{children:[a.jsx(lE,{children:"BG"}),a.jsx(cE,{children:"BG Representações"})]}),a.jsx(uE,{type:"button",onClick:()=>n(!1),"aria-label":"Fechar formulário",children:a.jsx(da,{size:18})})]}),a.jsx(wg,{onSubmitSuccess:r})]})]})}const $g=(e,t,n)=>{if(e&&"reportValidity"in e){const r=re(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},jv=(e,t)=>{for(const n in t.fields){const r=t.fields[n];r&&r.ref&&"reportValidity"in r.ref?$g(r.ref,n,e):r&&r.refs&&r.refs.forEach(o=>$g(o,n,e))}},$E=(e,t)=>{t.shouldUseNativeValidation&&jv(e,t);const n={};for(const r in e){const o=re(t.fields,r),i=Object.assign(e[r]||{},{ref:o&&o.ref});if(kE(t.names||Object.keys(e),r)){const s=Object.assign({},re(n,r));Ce(s,"root",i),Ce(n,r,s)}else Ce(n,r,i)}return n},kE=(e,t)=>{const n=kg(t);return e.some(r=>kg(r).match(`^${n}\\.\\d+`))};function kg(e){return e.replace(/\]|\[/g,"")}function Gp(e,t,n){return n===void 0&&(n={}),function(r,o,i){try{return Promise.resolve(function(s,l){try{var c=(t!=null&&t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:o}))).then(function(f){return i.shouldUseNativeValidation&&jv({},i),{values:n.raw?Object.assign({},r):f,errors:{}}}))}catch(f){return l(f)}return c&&c.then?c.then(void 0,l):c}(0,function(s){if(!s.inner)throw s;return{values:{},errors:$E((l=s,c=!i.shouldUseNativeValidation&&i.criteriaMode==="all",(l.inner||[]).reduce(function(f,u){if(f[u.path]||(f[u.path]={message:u.message,type:u.type}),c){var d=f[u.path].types,p=d&&d[u.type];f[u.path]=xv(u.path,c,f,u.type,p?[].concat(p,u.message):u.message)}return f},{})),i)};var l,c}))}catch(s){return Promise.reject(s)}}}function Ci(e){this._maxSize=e,this.clear()}Ci.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ci.prototype.get=function(e){return this._values[e]};Ci.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var SE=/[^.^\]^[]+|(?=\[\]|\.\.)/g,_v=/^\d+$/,jE=/^\d/,_E=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,EE=/^\s*(['"]?)(.*?)(\1)\s*$/,Yp=512,Sg=new Ci(Yp);new Ci(Yp);var jg=new Ci(Yp),co={split:Sf,normalizePath:_g,getter:function(e,t){var n=_g(e);return jg.get(e)||jg.set(e,function(o){for(var i=0,s=n.length;i<s;)if(o!=null||!t)o=o[n[i++]];else return;return o})},join:function(e){return e.reduce(function(t,n){return t+(Qp(n)||_v.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){CE(Array.isArray(e)?e:Sf(e),t,n)}};function _g(e){return Sg.get(e)||Sg.set(e,Sf(e).map(function(t){return t.replace(EE,"$2")}))}function Sf(e){return e.match(SE)||[""]}function CE(e,t,n){var r=e.length,o,i,s,l;for(i=0;i<r;i++)o=e[i],o&&(TE(o)&&(o='"'+o+'"'),l=Qp(o),s=!l&&/^\d+$/.test(o),t.call(n,o,l,s,i,e))}function Qp(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function PE(e){return e.match(jE)&&!e.match(_v)}function FE(e){return _E.test(e)}function TE(e){return!Qp(e)&&(PE(e)||FE(e))}const AE=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ev=e=>e.match(AE)||[],RE=(e,t)=>Ev(e).join(t).toLowerCase(),OE=e=>Ev(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),zE=e=>RE(e,"_");var Vu={camelCase:OE,snakeCase:zE},Xp={exports:{}};Xp.exports=function(e){return Cv(NE(e),e)};Xp.exports.array=Cv;function Cv(e,t){var n=e.length,r=new Array(n),o={},i=n,s=LE(t),l=DE(e);for(t.forEach(function(f){if(!l.has(f[0])||!l.has(f[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)o[i]||c(e[i],i,new Set);return r;function c(f,u,d){if(d.has(f)){var p;try{p=", node was:"+JSON.stringify(f)}catch{p=""}throw new Error("Cyclic dependency"+p)}if(!l.has(f))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(f));if(!o[u]){o[u]=!0;var m=s.get(f)||new Set;if(m=Array.from(m),u=m.length){d.add(f);do{var g=m[--u];c(g,l.get(g),d)}while(u);d.delete(f)}r[--n]=f}}}function NE(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var o=e[n];t.add(o[0]),t.add(o[1])}return Array.from(t)}function LE(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var o=e[n];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}function DE(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var IE=Xp.exports;const ME=F0(IE),UE=Object.prototype.toString,BE=Error.prototype.toString,WE=RegExp.prototype.toString,VE=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",HE=/^Symbol\((.*)\)(.*)$/;function qE(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Eg(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return qE(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return VE.call(e).replace(HE,"Symbol($1)");const r=UE.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+BE.call(e)+"]":r==="RegExp"?WE.call(e):null}function Ar(e,t){let n=Eg(e,t);return n!==null?n:JSON.stringify(e,function(r,o){let i=Eg(this[r],t);return i!==null?i:o},2)}function Pv(e){return e==null?[]:[].concat(e)}let Fv,Tv,Av,GE=/\$\{\s*(\w+)\s*\}/g;Fv=Symbol.toStringTag;class Cg{constructor(t,n,r,o){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[Fv]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=o,this.errors=[],this.inner=[],Pv(t).forEach(i=>{if(Ft.isError(i)){this.errors.push(...i.errors);const s=i.inner.length?i.inner:[i];this.inner.push(...s)}else this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Tv=Symbol.hasInstance;Av=Symbol.toStringTag;class Ft extends Error{static formatError(t,n){const r=n.label||n.path||"this";return n=Object.assign({},n,{path:r,originalPath:n.path}),typeof t=="string"?t.replace(GE,(o,i)=>Ar(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,o,i){const s=new Cg(t,n,r,o);if(i)return s;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[Av]="Error",this.name=s.name,this.message=s.message,this.type=s.type,this.value=s.value,this.path=s.path,this.errors=s.errors,this.inner=s.inner,Error.captureStackTrace&&Error.captureStackTrace(this,Ft)}static[Tv](t){return Cg[Symbol.hasInstance](t)||super[Symbol.hasInstance](t)}}let An={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const o=r!=null&&r!==n?` (cast from the value \`${Ar(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Ar(n,!0)}\``+o:`${e} must match the configured type. The validated value was: \`${Ar(n,!0)}\``+o}},Nt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},YE={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},jf={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},QE={isValue:"${path} field must be ${value}"},$l={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},XE={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},KE={notType:e=>{const{path:t,value:n,spec:r}=e,o=r.types.length;if(Array.isArray(n)){if(n.length<o)return`${t} tuple value has too few items, expected a length of ${o} but got ${n.length} for value: \`${Ar(n,!0)}\``;if(n.length>o)return`${t} tuple value has too many items, expected a length of ${o} but got ${n.length} for value: \`${Ar(n,!0)}\``}return Ft.formatError(An.notType,e)}};Object.assign(Object.create(null),{mixed:An,string:Nt,number:YE,date:jf,object:$l,array:XE,boolean:QE,tuple:KE});const Kp=e=>e&&e.__isYupSchema__;class uc{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:o,otherwise:i}=n,s=typeof r=="function"?r:(...l)=>l.every(c=>c===r);return new uc(t,(l,c)=>{var f;let u=s(...l)?o:i;return(f=u==null?void 0:u(c))!=null?f:c})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),o=this.fn(r,t,n);if(o===void 0||o===t)return t;if(!Kp(o))throw new TypeError("conditions must return a schema object");return o.resolve(n)}}const La={context:"$",value:"."};function JE(e,t){return new Mr(e,t)}class Mr{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===La.context,this.isValue=this.key[0]===La.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?La.context:this.isValue?La.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&co.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let o=this.isContext?r:this.isValue?t:n;return this.getter&&(o=this.getter(o||{})),this.map&&(o=this.map(o)),o}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Mr.prototype.__isYupRef=!0;const no=e=>e==null;function Co(e){function t({value:n,path:r="",options:o,originalValue:i,schema:s},l,c){const{name:f,test:u,params:d,message:p,skipAbsent:m}=e;let{parent:g,context:b,abortEarly:$=s.spec.abortEarly,disableStackTrace:h=s.spec.disableStackTrace}=o;const y={value:n,parent:g,context:b};function x(A={}){const R=Rv(Object.assign({value:n,originalValue:i,label:s.spec.label,path:A.path||r,spec:s.spec,disableStackTrace:A.disableStackTrace||h},d,A.params),y),N=new Ft(Ft.formatError(A.message||p,R),n,R.path,A.type||f,R.disableStackTrace);return N.params=R,N}const w=$?l:c;let C={path:r,parent:g,type:f,from:o.from,createError:x,resolve(A){return Ov(A,y)},options:o,originalValue:i,schema:s};const _=A=>{Ft.isError(A)?w(A):A?c(null):w(x())},P=A=>{Ft.isError(A)?w(A):l(A)};if(m&&no(n))return _(!0);let j;try{var T;if(j=u.call(C,n,C),typeof((T=j)==null?void 0:T.then)=="function"){if(o.sync)throw new Error(`Validation test of type: "${C.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(j).then(_,P)}}catch(A){P(A);return}_(j)}return t.OPTIONS=e,t}function Rv(e,t){if(!e)return e;for(const n of Object.keys(e))e[n]=Ov(e[n],t);return e}function Ov(e,t){return Mr.isRef(e)?e.getValue(t.value,t.parent,t.context):e}function ZE(e,t,n,r=n){let o,i,s;return t?(co.forEach(t,(l,c,f)=>{let u=c?l.slice(1,l.length-1):l;e=e.resolve({context:r,parent:o,value:n});let d=e.type==="tuple",p=f?parseInt(u,10):0;if(e.innerType||d){if(d&&!f)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(n&&p>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);o=n,n=n&&n[p],e=d?e.spec.types[p]:e.innerType}if(!f){if(!e.fields||!e.fields[u])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);o=n,n=n&&n[u],e=e.fields[u]}i=u,s=c?"["+l+"]":"."+l}),{schema:e,parent:o,parentPath:i}):{parent:o,parentPath:t,schema:e}}class dc extends Set{describe(){const t=[];for(const n of this.values())t.push(Mr.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new dc(this.values())}merge(t,n){const r=this.clone();return t.forEach(o=>r.add(o)),n.forEach(o=>r.delete(o)),r}}function Ko(e,t=new Map){if(Kp(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=Ko(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,o]of e.entries())n.set(r,Ko(o,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(Ko(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,o]of Object.entries(e))n[r]=Ko(o,t)}else throw Error(`Unable to clone ${e}`);return n}function e4(e){if(!(e!=null&&e.length))return;const t=[];let n="",r=!1,o=!1;for(let i=0;i<e.length;i++){const s=e[i];if(s==="["&&!o){n&&(t.push(...n.split(".").filter(Boolean)),n=""),r=!0;continue}if(s==="]"&&!o){n&&(/^\d+$/.test(n)?t.push(n):t.push(n.replace(/^"|"$/g,"")),n=""),r=!1;continue}if(s==='"'){o=!o;continue}if(s==="."&&!r&&!o){n&&(t.push(n),n="");continue}n+=s}return n&&t.push(...n.split(".").filter(Boolean)),t}function t4(e,t){const n=t?`${t}.${e.path}`:e.path;return e.errors.map(r=>({message:r,path:e4(n)}))}function zv(e,t){var n;if(!((n=e.inner)!=null&&n.length)&&e.errors.length)return t4(e,t);const r=t?`${t}.${e.path}`:e.path;return e.inner.flatMap(o=>zv(o,r))}class In{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new dc,this._blacklist=new dc,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(An.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Ko(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const o=Object.assign({},n.spec,r.spec);return r.spec=o,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(s=>{i.test(s.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((o,i)=>i.resolve(o,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,o,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(o=t.recursive)!=null?o:this.spec.recursive,disableStackTrace:(i=t.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({},n,{value:t})),o=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(o&&no(i))return i;let s=Ar(t),l=Ar(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${s} 
`+(l!==s?`result of cast: ${l}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((o,i)=>i.call(this,o,t,this,n),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,o){let{path:i,originalValue:s=t,strict:l=this.spec.strict}=n,c=t;l||(c=this._cast(c,Object.assign({assert:!1},n)));let f=[];for(let u of Object.values(this.internalTests))u&&f.push(u);this.runTests({path:i,value:c,originalValue:s,options:n,tests:f},r,u=>{if(u.length)return o(u,c);this.runTests({path:i,value:c,originalValue:s,options:n,tests:this.tests},r,o)})}runTests(t,n,r){let o=!1,{tests:i,value:s,originalValue:l,path:c,options:f}=t,u=b=>{o||(o=!0,n(b,s))},d=b=>{o||(o=!0,r(b,s))},p=i.length,m=[];if(!p)return d([]);let g={value:s,originalValue:l,path:c,options:f,schema:this};for(let b=0;b<i.length;b++){const $=i[b];$(g,u,function(y){y&&(Array.isArray(y)?m.push(...y):m.push(y)),--p<=0&&d(m)})}}asNestedTest({key:t,index:n,parent:r,parentPath:o,originalParent:i,options:s}){const l=t??n;if(l==null)throw TypeError("Must include `key` or `index` for nested validations");const c=typeof l=="number";let f=r[l];const u=Object.assign({},s,{strict:!0,parent:r,value:f,originalValue:i[l],key:void 0,[c?"index":"key"]:l,path:c||l.includes(".")?`${o||""}[${c?l:`"${l}"`}]`:(o?`${o}.`:"")+t});return(d,p,m)=>this.resolve(u)._validate(f,u,p,m)}validate(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return new Promise((s,l)=>o._validate(t,n,(c,f)=>{Ft.isError(c)&&(c.value=f),l(c)},(c,f)=>{c.length?l(new Ft(c,f,void 0,void 0,i)):s(f)}))}validateSync(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i,s=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return o._validate(t,Object.assign({},n,{sync:!0}),(l,c)=>{throw Ft.isError(l)&&(l.value=c),l},(l,c)=>{if(l.length)throw new Ft(l,t,void 0,void 0,s);i=c}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Ft.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Ft.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):Ko(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Co({message:n,name:"nullable",test(o){return o===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Co({message:n,name:"optionality",test(o){return o===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=An.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=An.notNull){return this.nullability(!1,t)}required(t=An.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=An.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),o=Co(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(s=>!(s.OPTIONS.name===n.name&&(i||s.OPTIONS.test===o.OPTIONS.test))),r.tests.push(o),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),o=Pv(t).map(i=>new Mr(i));return o.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new uc(o,n):uc.fromOptions(o,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Co({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=An.oneOf){let r=this.clone();return t.forEach(o=>{r._whitelist.add(o),r._blacklist.delete(o)}),r.internalTests.whiteList=Co({message:n,name:"oneOf",skipAbsent:!0,test(o){let i=this.schema._whitelist,s=i.resolveAll(this.resolve);return s.includes(o)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:s}})}}),r}notOneOf(t,n=An.notOneOf){let r=this.clone();return t.forEach(o=>{r._blacklist.add(o),r._whitelist.delete(o)}),r.internalTests.blacklist=Co({message:n,name:"notOneOf",test(o){let i=this.schema._blacklist,s=i.resolveAll(this.resolve);return s.includes(o)?this.createError({params:{values:Array.from(i).join(", "),resolved:s}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:o,optional:i,nullable:s}=n.spec;return{meta:o,label:r,optional:i,nullable:s,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.filter((c,f,u)=>u.findIndex(d=>d.OPTIONS.name===c.OPTIONS.name)===f).map(c=>{const f=c.OPTIONS.params&&t?Rv(Object.assign({},c.OPTIONS.params),t):c.OPTIONS.params;return{name:c.OPTIONS.name,params:f}})}}get"~standard"(){const t=this;return{version:1,vendor:"yup",async validate(r){try{return{value:await t.validate(r,{abortEarly:!1})}}catch(o){if(o instanceof Ft)return{issues:zv(o)};throw o}}}}}In.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])In.prototype[`${e}At`]=function(t,n,r={}){const{parent:o,parentPath:i,schema:s}=ZE(this,t,n,r.context);return s[e](o&&o[i],Object.assign({},r,{parent:o,path:t}))};for(const e of["equals","is"])In.prototype[e]=In.prototype.oneOf;for(const e of["not","nope"])In.prototype[e]=In.prototype.notOneOf;const n4=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function r4(e){const t=_f(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;if(t.z===void 0&&t.plusMinus===void 0)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return t.z!=="Z"&&t.plusMinus!==void 0&&(n=t.hourOffset*60+t.minuteOffset,t.plusMinus==="+"&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}function _f(e){var t,n;const r=n4.exec(e);return r?{year:Vn(r[1]),month:Vn(r[2],1)-1,day:Vn(r[3],1),hour:Vn(r[4]),minute:Vn(r[5]),second:Vn(r[6]),millisecond:r[7]?Vn(r[7].substring(0,3)):0,precision:(t=(n=r[7])==null?void 0:n.length)!=null?t:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:Vn(r[10]),minuteOffset:Vn(r[11])}:null}function Vn(e,t=0){return Number(e)||t}let o4=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,i4=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,s4=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a4="^\\d{4}-\\d{2}-\\d{2}",l4="\\d{2}:\\d{2}:\\d{2}",c4="(([+-]\\d{2}(:?\\d{2})?)|Z)",u4=new RegExp(`${a4}T${l4}(\\.\\d+)?${c4}$`),d4=e=>no(e)||e===e.trim(),f4={}.toString();function pe(){return new Nv}class Nv extends In{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n)=>{if(!this.spec.coerce||this.isType(t)||Array.isArray(t))return t;const r=t!=null&&t.toString?t.toString():t;return r===f4?t:r})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||An.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=Nt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=Nt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=Nt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,o,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:o,name:i}=n:o=n),this.test({name:i||"matches",message:o||Nt.matches,params:{regex:t},skipAbsent:!0,test:s=>s===""&&r||s.search(t)!==-1})}email(t=Nt.email){return this.matches(o4,{name:"email",message:t,excludeEmptyString:!0})}url(t=Nt.url){return this.matches(i4,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Nt.uuid){return this.matches(s4,{name:"uuid",message:t,excludeEmptyString:!1})}datetime(t){let n="",r,o;return t&&(typeof t=="object"?{message:n="",allowOffset:r=!1,precision:o=void 0}=t:n=t),this.matches(u4,{name:"datetime",message:n||Nt.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||Nt.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:i=>{if(!i||r)return!0;const s=_f(i);return s?!!s.z:!1}}).test({name:"datetime_precision",message:n||Nt.datetime_precision,params:{precision:o},skipAbsent:!0,test:i=>{if(!i||o==null)return!0;const s=_f(i);return s?s.precision===o:!1}})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Nt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:d4})}lowercase(t=Nt.lowercase){return this.transform(n=>no(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>no(n)||n===n.toLowerCase()})}uppercase(t=Nt.uppercase){return this.transform(n=>no(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>no(n)||n===n.toUpperCase()})}}pe.prototype=Nv.prototype;let p4=new Date(""),h4=e=>Object.prototype.toString.call(e)==="[object Date]";class Jp extends In{constructor(){super({type:"date",check(t){return h4(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n)=>!this.spec.coerce||this.isType(t)||t===null?t:(t=r4(t),isNaN(t)?Jp.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Mr.isRef(t))r=t;else{let o=this.cast(t);if(!this._typeCheck(o))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=o}return r}min(t,n=jf.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o>=this.resolve(r)}})}max(t,n=jf.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(o){return o<=this.resolve(r)}})}}Jp.INVALID_DATE=p4;function m4(e,t=[]){let n=[],r=new Set,o=new Set(t.map(([s,l])=>`${s}-${l}`));function i(s,l){let c=co.split(s)[0];r.add(c),o.has(`${l}-${c}`)||n.push([l,c])}for(const s of Object.keys(e)){let l=e[s];r.add(s),Mr.isRef(l)&&l.isSibling?i(l.path,s):Kp(l)&&"deps"in l&&l.deps.forEach(c=>i(c,s))}return ME.array(Array.from(r),n).reverse()}function Pg(e,t){let n=1/0;return e.some((r,o)=>{var i;if((i=t.path)!=null&&i.includes(r))return n=o,!0}),n}function Lv(e){return(t,n)=>Pg(e,t)-Pg(e,n)}const g4=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function kl(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=kl(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=kl(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(kl)}):"optional"in e?e.optional():e}const y4=(e,t)=>{const n=[...co.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),o=co.getter(co.join(n),!0)(e);return!!(o&&r in o)};let Fg=e=>Object.prototype.toString.call(e)==="[object Object]";function Tg(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const x4=Lv([]);function Kc(e){return new Dv(e)}class Dv extends In{constructor(t){super({type:"object",check(n){return Fg(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=x4,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let o=super._cast(t,n);if(o===void 0)return this.getDefault(n);if(!this._typeCheck(o))return o;let i=this.fields,s=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,l=[].concat(this._nodes,Object.keys(o).filter(d=>!this._nodes.includes(d))),c={},f=Object.assign({},n,{parent:c,__validating:n.__validating||!1}),u=!1;for(const d of l){let p=i[d],m=d in o,g=o[d];if(p){let b;f.path=(n.path?`${n.path}.`:"")+d,p=p.resolve({value:g,context:n.context,parent:c});let $=p instanceof In?p.spec:void 0,h=$==null?void 0:$.strict;if($!=null&&$.strip){u=u||d in o;continue}b=!n.__validating||!h?p.cast(g,f):g,b!==void 0&&(c[d]=b)}else m&&!s&&(c[d]=g);(m!==d in c||c[d]!==g)&&(u=!0)}return u?c:o}_validate(t,n={},r,o){let{from:i=[],originalValue:s=t,recursive:l=this.spec.recursive}=n;n.from=[{schema:this,value:s},...i],n.__validating=!0,n.originalValue=s,super._validate(t,n,r,(c,f)=>{if(!l||!Fg(f)){o(c,f);return}s=s||f;let u=[];for(let d of this._nodes){let p=this.fields[d];!p||Mr.isRef(p)||u.push(p.asNestedTest({options:n,key:d,parent:f,parentPath:n.path,originalParent:s}))}this.runTests({tests:u,value:f,originalValue:s,options:n},r,d=>{o(d.sort(this._sortErrors).concat(c),f)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[o,i]of Object.entries(this.fields)){const s=r[o];r[o]=s===void 0?i:s}return n.withMutation(o=>o.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var o;const i=this.fields[r];let s=t;(o=s)!=null&&o.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[r]})),n[r]=i&&"getDefault"in i?i.getDefault(s):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=m4(t,n),r._sortErrors=Lv(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let o=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),o=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),o)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return kl(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,o])=>t.includes(r)&&t.includes(o)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let o=co.getter(t,!0);return this.transform(i=>{if(!i)return i;let s=i;return y4(i,t)&&(s=Object.assign({},i),r||delete s[t],s[n]=o(i)),s})}json(){return this.transform(g4)}exact(t){return this.test({name:"exact",exclusive:!0,message:t||$l.exact,test(n){if(n==null)return!0;const r=Tg(this.schema,n);return r.length===0||this.createError({params:{properties:r.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(t=!0,n=$l.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(o){if(o==null)return!0;const i=Tg(this.schema,o);return!t||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=$l.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const o of Object.keys(n))r[t(o)]=n[o];return r})}camelCase(){return this.transformKeys(Vu.camelCase)}snakeCase(){return this.transformKeys(Vu.snakeCase)}constantCase(){return this.transformKeys(t=>Vu.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[i,s]of Object.entries(n.fields)){var o;let l=t;(o=l)!=null&&o.value&&(l=Object.assign({},l,{parent:l.value,value:l.value[i]})),r.fields[i]=s.describe(l)}return r}}Kc.prototype=Dv.prototype;const v4=S.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.surface.page};
`,b4=S.div`
  width: 100%;
  max-width: 420px;
  padding: 32px;
  background: ${({theme:e})=>e.surface.card};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.lg};
`,w4=S.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`,$4=S.h1`
  font-size: 22px;
  text-align: center;
  margin-bottom: 8px;
`,k4=S.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 24px;
  color: ${({theme:e})=>e.text.secondary};
`,S4=S.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Hu=S.div`
  display: flex;
  flex-direction: column;
`,qu=S.label`
  font-size: 13px;
  margin-bottom: 6px;
`,Gu=S.input`
  height: 40px;
  padding: 0 10px;
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
`,Yu=S.span`
  font-size: 12px;
  color: red;
  margin-top: 4px;
`,j4=S.button`
  height: 42px;
  background: ${({theme:e})=>e.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: pointer;
`,_4=pe().required("Campo obrigatório.").min(8,"A senha deve ter pelo menos 8 caracteres.").matches(/[A-Z]/,"A senha deve conter pelo menos uma letra maiúscula.").matches(/[a-z]/,"A senha deve conter pelo menos uma letra minúscula.").matches(/[0-9]/,"A senha deve conter pelo menos um número.").matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,"A senha deve conter pelo menos um caractere especial."),E4=Kc({currentPassword:pe().required("Informe a senha atual."),newPassword:_4,confirmPassword:pe().required("Confirme a nova senha.").oneOf([JE("newPassword")],"As senhas não coincidem.")}),C4=[{label:"Mínimo 8 caracteres",test:e=>e.length>=8},{label:"Letra maiúscula (A–Z)",test:e=>/[A-Z]/.test(e)},{label:"Letra minúscula (a–z)",test:e=>/[a-z]/.test(e)},{label:"Número (0–9)",test:e=>/[0-9]/.test(e)},{label:"Caractere especial (!@#$...)",test:e=>/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(e)}];function P4({password:e}){return e?a.jsx("div",{style:{marginTop:"8px",display:"flex",flexDirection:"column",gap:"4px"},children:C4.map(t=>{const n=t.test(e);return a.jsxs("span",{style:{fontSize:"12px",color:n?"#059669":"#b45309",display:"flex",alignItems:"center",gap:"6px"},children:[n?"✓":"○"," ",t.label]},t.label)})}):null}function F4(){const{changePassword:e,user:t}=Bn(),n=Un(),[r,o]=L.useState(!1),[i,s]=L.useState(!1),[l,c]=L.useState(!1),[f,u]=L.useState(!1),{register:d,handleSubmit:p,watch:m,formState:{errors:g}}=Xc({resolver:Gp(E4)}),b=m("newPassword")??"",$=async h=>{o(!0);try{await e(h.currentPassword,h.newPassword,h.confirmPassword),n("/dashboard",{replace:!0})}catch(y){ae.error(y.message)}finally{o(!1)}};return a.jsx(v4,{children:a.jsxs(b4,{children:[a.jsx(w4,{children:a.jsx(hv,{size:28})}),a.jsx($4,{children:"Alterar senha"}),a.jsxs(k4,{children:[t!=null&&t.name?`Olá, ${t.name.split(" ")[0]}. `:"","Você precisa definir uma nova senha para continuar."]}),a.jsxs(S4,{onSubmit:p($),children:[a.jsxs(Hu,{children:[a.jsx(qu,{children:"Senha atual"}),a.jsxs("div",{style:{position:"relative"},children:[a.jsx(Gu,{type:i?"text":"password",autoComplete:"current-password",...d("currentPassword"),style:{paddingRight:"40px"}}),a.jsx("button",{type:"button",onClick:()=>s(h=>!h),"aria-label":i?"Ocultar senha":"Mostrar senha",style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9ca3af",padding:0},children:i?a.jsx(ii,{size:16}):a.jsx(si,{size:16})})]}),g.currentPassword&&a.jsx(Yu,{children:g.currentPassword.message})]}),a.jsxs(Hu,{children:[a.jsx(qu,{children:"Nova senha"}),a.jsxs("div",{style:{position:"relative"},children:[a.jsx(Gu,{type:l?"text":"password",autoComplete:"new-password",...d("newPassword"),style:{paddingRight:"40px"}}),a.jsx("button",{type:"button",onClick:()=>c(h=>!h),"aria-label":l?"Ocultar senha":"Mostrar senha",style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9ca3af",padding:0},children:l?a.jsx(ii,{size:16}):a.jsx(si,{size:16})})]}),g.newPassword&&a.jsx(Yu,{children:g.newPassword.message}),a.jsx(P4,{password:b})]}),a.jsxs(Hu,{children:[a.jsx(qu,{children:"Confirmar nova senha"}),a.jsxs("div",{style:{position:"relative"},children:[a.jsx(Gu,{type:f?"text":"password",autoComplete:"new-password",...d("confirmPassword"),style:{paddingRight:"40px"}}),a.jsx("button",{type:"button",onClick:()=>u(h=>!h),"aria-label":f?"Ocultar senha":"Mostrar senha",style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9ca3af",padding:0},children:f?a.jsx(ii,{size:16}):a.jsx(si,{size:16})})]}),g.confirmPassword&&a.jsx(Yu,{children:g.confirmPassword.message})]}),a.jsx(j4,{type:"submit",disabled:r,children:r?"Salvando...":"Alterar senha"})]})]})})}function on(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function bo(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const Iv=6048e5,T4=864e5;let A4={};function Jc(){return A4}function ea(e,t){var l,c,f,u;const n=Jc(),r=(t==null?void 0:t.weekStartsOn)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((u=(f=n.locale)==null?void 0:f.options)==null?void 0:u.weekStartsOn)??0,o=on(e),i=o.getDay(),s=(i<r?7:0)+i-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function fc(e){return ea(e,{weekStartsOn:1})}function Mv(e){const t=on(e),n=t.getFullYear(),r=bo(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=fc(r),i=bo(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=fc(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function Ag(e){const t=on(e);return t.setHours(0,0,0,0),t}function Rg(e){const t=on(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function R4(e,t){const n=Ag(e),r=Ag(t),o=+n-Rg(n),i=+r-Rg(r);return Math.round((o-i)/T4)}function O4(e){const t=Mv(e),n=bo(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),fc(n)}function z4(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function N4(e){if(!z4(e)&&typeof e!="number")return!1;const t=on(e);return!isNaN(Number(t))}function L4(e){const t=on(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function D4(e){const t=on(e);return t.setDate(1),t.setHours(0,0,0,0),t}function I4(e){const t=on(e),n=bo(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const M4={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},U4=(e,t,n)=>{let r;const o=M4[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function ai(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const B4={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},W4={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},V4={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},H4={date:ai({formats:B4,defaultWidth:"full"}),time:ai({formats:W4,defaultWidth:"full"}),dateTime:ai({formats:V4,defaultWidth:"full"})},q4={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},G4=(e,t,n,r)=>q4[e];function zn(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):s;o=e.formattingValues[l]||e.formattingValues[s]}else{const s=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[l]||e.values[s]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}const Y4={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Q4={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},X4={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},K4={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},J4={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Z4={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},e3=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},t3={ordinalNumber:e3,era:zn({values:Y4,defaultWidth:"wide"}),quarter:zn({values:Q4,defaultWidth:"wide",argumentCallback:e=>e-1}),month:zn({values:X4,defaultWidth:"wide"}),day:zn({values:K4,defaultWidth:"wide"}),dayPeriod:zn({values:J4,defaultWidth:"wide",formattingValues:Z4,defaultFormattingWidth:"wide"})};function Nn(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const s=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(l)?r3(l,d=>d.test(s)):n3(l,d=>d.test(s));let f;f=e.valueCallback?e.valueCallback(c):c,f=n.valueCallback?n.valueCallback(f):f;const u=t.slice(s.length);return{value:f,rest:u}}}function n3(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function r3(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Uv(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let s=e.valueCallback?e.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const l=t.slice(o.length);return{value:s,rest:l}}}const o3=/^(\d+)(th|st|nd|rd)?/i,i3=/\d+/i,s3={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},a3={any:[/^b/i,/^(a|c)/i]},l3={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},c3={any:[/1/i,/2/i,/3/i,/4/i]},u3={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},d3={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},f3={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},p3={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},h3={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},m3={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},g3={ordinalNumber:Uv({matchPattern:o3,parsePattern:i3,valueCallback:e=>parseInt(e,10)}),era:Nn({matchPatterns:s3,defaultMatchWidth:"wide",parsePatterns:a3,defaultParseWidth:"any"}),quarter:Nn({matchPatterns:l3,defaultMatchWidth:"wide",parsePatterns:c3,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Nn({matchPatterns:u3,defaultMatchWidth:"wide",parsePatterns:d3,defaultParseWidth:"any"}),day:Nn({matchPatterns:f3,defaultMatchWidth:"wide",parsePatterns:p3,defaultParseWidth:"any"}),dayPeriod:Nn({matchPatterns:h3,defaultMatchWidth:"any",parsePatterns:m3,defaultParseWidth:"any"})},y3={code:"en-US",formatDistance:U4,formatLong:H4,formatRelative:G4,localize:t3,match:g3,options:{weekStartsOn:0,firstWeekContainsDate:1}};function x3(e){const t=on(e);return R4(t,I4(t))+1}function v3(e){const t=on(e),n=+fc(t)-+O4(t);return Math.round(n/Iv)+1}function Bv(e,t){var u,d,p,m;const n=on(e),r=n.getFullYear(),o=Jc(),i=(t==null?void 0:t.firstWeekContainsDate)??((d=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??o.firstWeekContainsDate??((m=(p=o.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??1,s=bo(e,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const l=ea(s,t),c=bo(e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const f=ea(c,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function b3(e,t){var l,c,f,u;const n=Jc(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((u=(f=n.locale)==null?void 0:f.options)==null?void 0:u.firstWeekContainsDate)??1,o=Bv(e,t),i=bo(e,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),ea(i,t)}function w3(e,t){const n=on(e),r=+ea(n,t)-+b3(n,t);return Math.round(r/Iv)+1}function _e(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const ar={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return _e(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):_e(n+1,2)},d(e,t){return _e(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return _e(e.getHours()%12||12,t.length)},H(e,t){return _e(e.getHours(),t.length)},m(e,t){return _e(e.getMinutes(),t.length)},s(e,t){return _e(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return _e(o,t.length)}},Po={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Og={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return ar.y(e,t)},Y:function(e,t,n,r){const o=Bv(e,r),i=o>0?o:1-o;if(t==="YY"){const s=i%100;return _e(s,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):_e(i,t.length)},R:function(e,t){const n=Mv(e);return _e(n,t.length)},u:function(e,t){const n=e.getFullYear();return _e(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return _e(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return _e(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return ar.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return _e(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=w3(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):_e(o,t.length)},I:function(e,t,n){const r=v3(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):_e(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):ar.d(e,t)},D:function(e,t,n){const r=x3(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):_e(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return _e(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return _e(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return _e(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=Po.noon:r===0?o=Po.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=Po.evening:r>=12?o=Po.afternoon:r>=4?o=Po.morning:o=Po.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return ar.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):ar.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):_e(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):_e(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):ar.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):ar.s(e,t)},S:function(e,t){return ar.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return Ng(r);case"XXXX":case"XX":return qr(r);case"XXXXX":case"XXX":default:return qr(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return Ng(r);case"xxxx":case"xx":return qr(r);case"xxxxx":case"xxx":default:return qr(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+zg(r,":");case"OOOO":default:return"GMT"+qr(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+zg(r,":");case"zzzz":default:return"GMT"+qr(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return _e(r,t.length)},T:function(e,t,n){const r=e.getTime();return _e(r,t.length)}};function zg(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),i=r%60;return i===0?n+String(o):n+String(o)+t+_e(i,2)}function Ng(e,t){return e%60===0?(e>0?"-":"+")+_e(Math.abs(e)/60,2):qr(e,t)}function qr(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=_e(Math.trunc(r/60),2),i=_e(r%60,2);return n+o+t+i}const Lg=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Wv=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},$3=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return Lg(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",Lg(r,t)).replace("{{time}}",Wv(o,t))},k3={p:Wv,P:$3},S3=/^D+$/,j3=/^Y+$/,_3=["D","DD","YY","YYYY"];function E3(e){return S3.test(e)}function C3(e){return j3.test(e)}function P3(e,t,n){const r=F3(e,t,n);if(console.warn(r),_3.includes(e))throw new RangeError(r)}function F3(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const T3=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,A3=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,R3=/^'([^]*?)'?$/,O3=/''/g,z3=/[a-zA-Z]/;function Sl(e,t,n){var u,d,p,m,g,b,$,h;const r=Jc(),o=(n==null?void 0:n.locale)??r.locale??y3,i=(n==null?void 0:n.firstWeekContainsDate)??((d=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(p=r.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((b=(g=n==null?void 0:n.locale)==null?void 0:g.options)==null?void 0:b.weekStartsOn)??r.weekStartsOn??((h=($=r.locale)==null?void 0:$.options)==null?void 0:h.weekStartsOn)??0,l=on(e);if(!N4(l))throw new RangeError("Invalid time value");let c=t.match(A3).map(y=>{const x=y[0];if(x==="p"||x==="P"){const w=k3[x];return w(y,o.formatLong)}return y}).join("").match(T3).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const x=y[0];if(x==="'")return{isToken:!1,value:N3(y)};if(Og[x])return{isToken:!0,value:y};if(x.match(z3))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");return{isToken:!1,value:y}});o.localize.preprocessor&&(c=o.localize.preprocessor(l,c));const f={firstWeekContainsDate:i,weekStartsOn:s,locale:o};return c.map(y=>{if(!y.isToken)return y.value;const x=y.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&C3(x)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&E3(x))&&P3(x,t,String(e));const w=Og[x[0]];return w(l,x,o.localize,f)}).join("")}function N3(e){const t=e.match(R3);return t?t[1].replace(O3,"'"):e}const L3={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 mês",other:"cerca de {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},D3=(e,t,n)=>{let r;const o=L3[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"em "+r:"há "+r:r},I3={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},M3={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},U3={full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},B3={date:ai({formats:I3,defaultWidth:"full"}),time:ai({formats:M3,defaultWidth:"full"}),dateTime:ai({formats:U3,defaultWidth:"full"})},W3={lastWeek:e=>{const t=e.getDay();return"'"+(t===0||t===6?"último":"última")+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"},V3=(e,t,n,r)=>{const o=W3[e];return typeof o=="function"?o(t):o},H3={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},q3={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},G3={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},Y3={narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","terça","quarta","quinta","sexta","sábado"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},Q3={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"}},X3={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},K3=(e,t)=>{const n=Number(e);return(t==null?void 0:t.unit)==="week"?n+"ª":n+"º"},J3={ordinalNumber:K3,era:zn({values:H3,defaultWidth:"wide"}),quarter:zn({values:q3,defaultWidth:"wide",argumentCallback:e=>e-1}),month:zn({values:G3,defaultWidth:"wide"}),day:zn({values:Y3,defaultWidth:"wide"}),dayPeriod:zn({values:Q3,defaultWidth:"wide",formattingValues:X3,defaultFormattingWidth:"wide"})},Z3=/^(\d+)[ºªo]?/i,eC=/\d+/i,tC={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},nC={any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},rC={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},oC={any:[/1/i,/2/i,/3/i,/4/i]},iC={narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},sC={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},aC={narrow:/^(dom|[23456]ª?|s[aá]b)/i,short:/^(dom|[23456]ª?|s[aá]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,wide:/^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i},lC={short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[aá]b/i]},cC={narrow:/^(a|p|mn|md|(da) (manhã|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i},uC={any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manhã/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},dC={ordinalNumber:Uv({matchPattern:Z3,parsePattern:eC,valueCallback:e=>parseInt(e,10)}),era:Nn({matchPatterns:tC,defaultMatchWidth:"wide",parsePatterns:nC,defaultParseWidth:"any"}),quarter:Nn({matchPatterns:rC,defaultMatchWidth:"wide",parsePatterns:oC,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Nn({matchPatterns:iC,defaultMatchWidth:"wide",parsePatterns:sC,defaultParseWidth:"any"}),day:Nn({matchPatterns:aC,defaultMatchWidth:"wide",parsePatterns:lC,defaultParseWidth:"any"}),dayPeriod:Nn({matchPatterns:cC,defaultMatchWidth:"any",parsePatterns:uC,defaultParseWidth:"any"})},Vv={code:"pt-BR",formatDistance:D3,formatLong:B3,formatRelative:V3,localize:J3,match:dC,options:{weekStartsOn:0,firstWeekContainsDate:1}},fC=lt`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Dg=S.div`
  animation: ${fC} 0.3s ease-out;
  max-width: 1400px;
  margin: 0 auto;
`,Ig=S.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`,Mg=S.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.primary)||"#231b15"}};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`,pC=S.p`
  font-size: 14px;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.secondary)||"#5e4d42"}};
  text-transform: capitalize;
`,hC=S.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Da=S.div`
  background: ${({theme:e})=>{var t;return((t=e.surface)==null?void 0:t.card)||"#ffffff"}};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: ${({theme:e})=>{var t;return((t=e.shadows)==null?void 0:t.sm)||"0 1px 2px rgba(0,0,0,0.05)"}};
  border: 1px solid ${({theme:e})=>{var t;return((t=e.border)==null?void 0:t.default)||"#e4d9cf"}};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>{var t;return((t=e.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0,0,0,0.1)"}};
  }
`,Ia=S.div`
  width: 52px;
  height: 52px;
  background: ${({$color:e})=>`${e}15`};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$color:e})=>e};
`,Ma=S.div`
  flex: 1;
`,Ua=S.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.primary)||"#231b15"}};
  line-height: 1.2;
  margin-bottom: 4px;
`,Ba=S.div`
  font-size: 13px;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.secondary)||"#5e4d42"}};
`,mC=S.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,gC=S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,yC=S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Qu=S.div`
  background: ${({theme:e})=>{var t;return((t=e.surface)==null?void 0:t.card)||"#ffffff"}};
  border-radius: 16px;
  padding: 20px;
  border: 1px solid ${({theme:e})=>{var t;return((t=e.border)==null?void 0:t.default)||"#e4d9cf"}};
  box-shadow: ${({theme:e})=>{var t;return((t=e.shadows)==null?void 0:t.sm)||"0 1px 2px rgba(0,0,0,0.05)"}};
`,Xu=S.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.primary)||"#231b15"}};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`,Ug=S.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Bg=S.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  background: ${({theme:e})=>{var t;return((t=e.surface)==null?void 0:t.page)||"#faf7f5"}};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>{var t,n;return((n=(t=e.colors)==null?void 0:t.neutral)==null?void 0:n[100])||"#f2ece6"}};
    transform: translateX(4px);
  }
`,Wg=S.div`
  width: 36px;
  height: 36px;
  background: ${({$color:e})=>`${e}15`};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$color:e})=>e};
  flex-shrink: 0;
`,Vg=S.div`
  flex: 1;
  min-width: 0;
`,Hg=S.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.primary)||"#231b15"}};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,qg=S.div`
  font-size: 11px;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.muted)||"#96806e"}};
`,Gg=S.div`
  text-align: center;
  padding: 32px;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.muted)||"#96806e"}};
  font-size: 14px;
`,Yg=S.span`
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({$status:e,theme:t})=>{var n,r,o;switch(e){case"approved":return((n=t.success)==null?void 0:n.light)||"#dcfce7";case"analysis":return((r=t.info)==null?void 0:r.light)||"#dbeafe";default:return((o=t.warning)==null?void 0:o.light)||"#fef3c7"}}};
  color: ${({$status:e,theme:t})=>{var n,r,o;switch(e){case"approved":return((n=t.success)==null?void 0:n.dark)||"#166534";case"analysis":return((r=t.info)==null?void 0:r.dark)||"#1e40af";default:return((o=t.warning)==null?void 0:o.dark)||"#92400e"}}};
  white-space: nowrap;
  flex-shrink: 0;
`,xC=S.div`
  margin-top: 8px;
`;S.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.secondary)||"#5e4d42"}};
  margin-bottom: 12px;
`;const vC=S.div`
  background: ${({theme:e})=>{var t,n;return((n=(t=e.colors)==null?void 0:t.neutral)==null?void 0:n[100])||"#f2ece6"}};
  border-radius: 8px;
  overflow: hidden;
`,bC=S.div`
  height: 8px;
  width: ${({$percentage:e})=>e}%;
  background: ${({$color:e})=>e};
  border-radius: 8px;
  transition: width 0.3s ease;
`,wC=S.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({theme:e})=>{var t;return((t=e.border)==null?void 0:t.default)||"#e4d9cf"}};
`,Qg=S.div`
  text-align: center;
  flex: 1;
`,Xg=S.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.primary)||"#231b15"}};
`,Kg=S.div`
  font-size: 11px;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.muted)||"#96806e"}};
  margin-top: 4px;
`,$C=S.div`
  background: linear-gradient(
    135deg, 
    ${({theme:e})=>{var t,n;return((n=(t=e.colors)==null?void 0:t.neutral)==null?void 0:n[800])||"#3d3028"}} 0%, 
    ${({theme:e})=>{var t,n;return((n=(t=e.colors)==null?void 0:t.neutral)==null?void 0:n[900])||"#231b15"}} 100%
  );
  border-radius: 16px;
  padding: 20px;
  color: white;
`,kC=S.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({theme:e})=>{var t,n;return((n=(t=e.colors)==null?void 0:t.neutral)==null?void 0:n[200])||"#e4d9cf"}};
`,SC=S.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Wa=S.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>{var t,n;return((n=(t=e.colors)==null?void 0:t.neutral)==null?void 0:n[200])||"#e4d9cf"}};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(4px);
    color: white;
  }
`,Jg=e=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e||0),Zg=e=>e?Sl(new Date(e),"dd 'de' MMMM",{locale:Vv}):"",jC=()=>{const e=new Date().getHours();return e<12?"Bom dia":e<18?"Boa tarde":"Boa noite"},Ku={pending:{label:"Pendente",color:"#d97706"},analysis:{label:"Em análise",color:"#2563eb"},approved:{label:"Aprovado",color:"#059669"},cancelled:{label:"Cancelado",color:"#dc2626"}};function _C(){var $;const e=Un(),{user:t,isAdmin:n,isUser:r}=Bn(),[o,i]=L.useState(!0),[s,l]=L.useState({totalClients:0,totalSales:0,clientsInAnalysis:0,approvalRate:0}),[c,f]=L.useState([]),[u,d]=L.useState([]),[p,m]=L.useState({pending:0,analysis:0,approved:0}),g=jC(),b=Sl(new Date,"EEEE, dd 'de' MMMM 'de' yyyy",{locale:Vv});return L.useEffect(()=>{(async()=>{var y,x,w,C,_;i(!0);try{const P=Sl(D4(new Date),"yyyy-MM-dd"),v=Sl(L4(new Date),"yyyy-MM-dd"),j=await Promise.allSettled([Pe.get("/clients",{params:{limit:"100"}}),Pe.get("/reports/sales",{params:{date_start:P,date_end:v}}),Pe.get("/clients",{params:{limit:"5"}}),Pe.get("/sales",{params:{limit:"5",page:"1"}})]);let T=[];j[0].status==="fulfilled"&&(T=((y=j[0].value.data)==null?void 0:y.data)||[]);let A=0;j[1].status==="fulfilled"&&(A=((w=(x=j[1].value.data)==null?void 0:x.summary)==null?void 0:w.total_value)||0),j[2].status==="fulfilled"&&f(((C=j[2].value.data)==null?void 0:C.data)||[]),j[3].status==="fulfilled"&&d(((_=j[3].value.data)==null?void 0:_.data)||[]);const R=T.length,N=T.filter(E=>E.overall_status==="analysis").length,F=T.filter(E=>E.overall_status==="approved").length,M=R>0?F/R*100:0;m({pending:T.filter(E=>E.overall_status==="pending").length,analysis:N,approved:F}),l({totalClients:R,totalSales:A,clientsInAnalysis:N,approvalRate:Math.round(M)})}catch(P){console.error("Erro ao carregar dashboard:",P)}finally{i(!1)}})()},[]),o?a.jsx(Dg,{children:a.jsx(Ig,{children:a.jsx(Mg,{children:"Carregando dashboard..."})})}):a.jsxs(Dg,{children:[a.jsx(Ig,{children:a.jsxs("div",{children:[a.jsxs(Mg,{children:[g,", ",(($=t==null?void 0:t.name)==null?void 0:$.split(" ")[0])||"Usuário","!"]}),a.jsx(pC,{children:b})]})}),a.jsxs(hC,{children:[a.jsxs(Da,{children:[a.jsx(Ia,{$color:"#B45A14",children:a.jsx(Zs,{size:24})}),a.jsxs(Ma,{children:[a.jsx(Ua,{children:s.totalClients}),a.jsx(Ba,{children:"Total de Clientes"})]})]}),a.jsxs(Da,{children:[a.jsx(Ia,{$color:"#059669",children:a.jsx(w_,{size:24})}),a.jsxs(Ma,{children:[a.jsx(Ua,{children:Jg(s.totalSales)}),a.jsx(Ba,{children:"Vendas no Mês"})]})]}),a.jsxs(Da,{children:[a.jsx(Ia,{$color:"#2563eb",children:a.jsx(v_,{size:24})}),a.jsxs(Ma,{children:[a.jsx(Ua,{children:s.clientsInAnalysis}),a.jsx(Ba,{children:"Em Análise"})]})]}),a.jsxs(Da,{children:[a.jsx(Ia,{$color:"#8b5cf6",children:a.jsx(rg,{size:24})}),a.jsxs(Ma,{children:[a.jsxs(Ua,{children:[s.approvalRate,"%"]}),a.jsx(Ba,{children:"Taxa de Aprovação"})]})]})]}),a.jsxs(mC,{children:[a.jsxs(gC,{children:[a.jsxs(Qu,{children:[a.jsx(Xu,{children:"Distribuição de Clientes"}),a.jsxs(xC,{children:[Object.entries(p).map(([h,y])=>{const x=s.totalClients||1,w=y/x*100,C=Ku[h];return a.jsxs("div",{style:{marginBottom:"16px"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[a.jsx("span",{style:{fontSize:"12px",color:"#7a6455"},children:(C==null?void 0:C.label)||h}),a.jsxs("span",{style:{fontSize:"12px",fontWeight:500,color:"#5e4d42"},children:[y," (",Math.round(w),"%)"]})]}),a.jsx(vC,{children:a.jsx(bC,{$percentage:w,$color:C==null?void 0:C.color})})]},h)}),a.jsxs(wC,{children:[a.jsxs(Qg,{children:[a.jsx(Xg,{children:s.totalClients}),a.jsx(Kg,{children:"Total"})]}),a.jsxs(Qg,{children:[a.jsxs(Xg,{children:[s.approvalRate,"%"]}),a.jsx(Kg,{children:"Aprovados"})]})]})]})]}),a.jsxs(Qu,{children:[a.jsx(Xu,{children:"Últimos Clientes"}),c.length>0?a.jsx(Ug,{children:c.map(h=>{var y;return a.jsxs(Bg,{onClick:()=>e(`/clientes/${h.id}`),children:[a.jsx(Wg,{$color:"#B45A14",children:a.jsx(Js,{size:16})}),a.jsxs(Vg,{children:[a.jsx(Hg,{children:h.corporate_name}),a.jsxs(qg,{children:["Cadastrado em ",Zg(h.createdAt)]})]}),a.jsx(Yg,{$status:h.overall_status,children:((y=Ku[h.overall_status])==null?void 0:y.label)||h.overall_status})]},h.id)})}):a.jsx(Gg,{children:"Nenhum cliente cadastrado."})]})]}),a.jsxs(yC,{children:[a.jsxs(Qu,{children:[a.jsx(Xu,{children:"Últimas Vendas"}),u.length>0?a.jsx(Ug,{children:u.map(h=>{var y,x;return a.jsxs(Bg,{onClick:()=>e(`/clientes/${h.client_id}`),children:[a.jsx(Wg,{$color:"#059669",children:a.jsx(rg,{size:16})}),a.jsxs(Vg,{children:[a.jsxs(Hg,{children:[((y=h.client)==null?void 0:y.corporate_name)||"Venda"," - ",Jg(h.total_value)]}),a.jsxs(qg,{children:[h.plan_name||"Serviço"," • ",Zg(h.createdAt)]})]}),a.jsx(Yg,{$status:h.status,children:((x=Ku[h.status])==null?void 0:x.label)||h.status})]},h.id)})}):a.jsx(Gg,{children:"Nenhuma venda registrada."})]}),a.jsxs($C,{children:[a.jsx(kC,{children:"Ações Rápidas"}),a.jsxs(SC,{children:[(n||r)&&a.jsxs(a.Fragment,{children:[a.jsxs(Wa,{onClick:()=>e("/onboarding"),children:[a.jsx(Js,{size:18})," Novo Cliente"]}),a.jsxs(Wa,{onClick:()=>e("/clientes"),children:[a.jsx(Zs,{size:18})," Ver Clientes"]})]}),n&&a.jsxs(Wa,{onClick:()=>e("/relatorios"),children:[a.jsx(f_,{size:18})," Relatórios"]}),a.jsxs(Wa,{onClick:()=>e("/perfil"),children:[a.jsx(h_,{size:18})," Meu Perfil"]})]})]})]})]})]})}const Zp=lt`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,EC=S.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  animation: ${Zp} 0.35s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,CC=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,PC=S.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,FC=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,TC=S.button`
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
`,AC=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  animation: ${Zp} 0.35s 0.05s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,RC=S.div`
  position: relative;
  flex: 1;
  max-width: 360px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,OC=S.span`
  position: absolute;
  left: ${({theme:e})=>e.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.text.muted};
  display: flex;
  align-items: center;
  pointer-events: none;
`,zC=S.input`
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
`,NC=S.select`
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
`,LC=S.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  animation: ${Zp} 0.35s 0.1s ease both;
`,DC=S.table`
  width: 100%;
  border-collapse: collapse;
`,IC=S.thead`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Vi=S.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  text-align: left;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
  white-space: nowrap;
`,MC=S.tbody``,UC=S.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  transition: background-color ${({theme:e})=>e.transitions.fast};
  cursor: pointer;

  &:last-child { border-bottom: none; }

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[50]};
  }
`,Ef=S.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.primary};
  vertical-align: middle;
`,Ju=S(Ef)`
  color: ${({theme:e})=>e.text.secondary};
`,e0={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},BC=S.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=e0[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=e0[e])==null?void 0:t.color)??"#374151"}};
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
`,WC={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},VC=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[8]};
  gap: ${({theme:e})=>e.spacing[3]};
  text-align: center;
`,HC=S.div`
  color: ${({theme:e})=>e.colors.neutral[300]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,qC=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,GC=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
  max-width: 300px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,YC=S.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  &:last-child { border-bottom: none; }
`,Hi=S.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
`,QC=lt`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,qi=S.div`
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
  animation: ${QC} 1.4s ease infinite;
`,XC=S.div`
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
`,KC=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
`,JC=S.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,Va=S.button`
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
`,ZC=15,e6=({status:e})=>a.jsx(BC,{$status:e,children:WC[e]??e});function t6(){return Array.from({length:5}).map((e,t)=>a.jsxs(YC,{children:[a.jsx(Hi,{children:a.jsx(qi,{$w:"60%"})}),a.jsx(Hi,{children:a.jsx(qi,{$w:"80%"})}),a.jsx(Hi,{children:a.jsx(qi,{$w:"50%"})}),a.jsx(Hi,{children:a.jsx(qi,{$w:"70%"})}),a.jsx(Hi,{children:a.jsx(qi,{$w:"40%"})})]},t))}const t0=(e="")=>{const t=e.slice(0,14);return t.length<=2?t:t.length<=5?`${t.slice(0,2)}.${t.slice(2)}`:t.length<=8?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5)}`:t.length<=12?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8)}`:`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8,12)}-${t.slice(12)}`},n6=(e="")=>/^[\d.\-/]+$/.test(e)&&/\d/.test(e),r6=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",o6=e=>({food:"Alimentação",meal:"Refeição",both:"Ambos"})[e]??e??"—";function i6(){const e=Un(),{hasRole:t}=Bn(),[n,r]=L.useState([]),[o,i]=L.useState({total:0,totalPages:1,currentPage:1}),[s,l]=L.useState(!0),[c,f]=L.useState(""),[u,d]=L.useState(1),[p,m]=L.useState(""),[g,b]=L.useState(""),$=L.useRef(null),h=L.useCallback(async()=>{var C,_,P;l(!0);try{const v=new URLSearchParams({page:u,limit:ZC});g&&v.set("search",g),c&&v.set("overall_status",c);const{data:j}=await Pe.get(`/clients?${v.toString()}`);r(j.data??[]),i({total:((C=j.pagination)==null?void 0:C.total)??0,totalPages:((_=j.pagination)==null?void 0:_.totalPages)??1,currentPage:((P=j.pagination)==null?void 0:P.currentPage)??1})}catch(v){ae.error(qt(v,"Erro ao carregar clientes.")),r([])}finally{l(!1)}},[u,g,c]);L.useEffect(()=>{h()},[h]);const y=C=>{const _=C.target.value,P=_.replace(/\D/g,"");if(n6(_)){const v=t0(P);m(v),x(v)}else _===""?(m(""),x("")):(m(_),x(_))},x=C=>{$.current&&clearTimeout($.current),$.current=setTimeout(()=>{b(C),d(1)},400)},w=C=>{f(C.target.value),d(1)};return a.jsxs(a.Fragment,{children:[a.jsxs(EC,{children:[a.jsxs(CC,{children:[a.jsx(PC,{children:"Clientes"}),a.jsx(FC,{children:o.total>0?`${o.total} cliente${o.total!==1?"s":""} cadastrado${o.total!==1?"s":""}`:"Nenhum cliente cadastrado ainda"})]}),t("admin","user")&&a.jsxs(TC,{type:"button",onClick:()=>e("/onboarding"),children:[a.jsx(Js,{size:16}),"Novo Cliente"]})]}),a.jsxs(AC,{children:[a.jsxs(RC,{children:[a.jsxs(OC,{children:[" ",a.jsx(pv,{size:15})]}),a.jsx(zC,{type:"text",placeholder:"Buscar por Razão Social ou CNPJ…",style:{paddingLeft:"30px"},value:p,onChange:y})]}),a.jsxs(NC,{value:c,onChange:w,children:[a.jsx("option",{value:"",children:"Todos os status"}),a.jsx("option",{value:"pending",children:"Pendente"}),a.jsx("option",{value:"analysis",children:"Em análise"}),a.jsx("option",{value:"approved",children:"Aprovado"})]})]}),a.jsxs(LC,{children:[a.jsxs(DC,{children:[a.jsx(IC,{children:a.jsxs("tr",{children:[a.jsx(Vi,{children:"Razão Social"}),a.jsx(Vi,{children:"CNPJ"}),a.jsx(Vi,{children:"Benefício"}),a.jsx(Vi,{children:"Status"}),a.jsx(Vi,{children:"Cadastro"})]})}),a.jsxs(MC,{children:[s&&a.jsx(t6,{}),!s&&n.map(C=>a.jsxs(UC,{onClick:()=>e(`/clientes/${C.id}`),title:"Ver detalhes",children:[a.jsx(Ef,{children:C.corporate_name}),a.jsx(Ju,{children:t0(C.cnpj)??"—"}),a.jsx(Ju,{children:o6(C.benefit_type)}),a.jsx(Ef,{children:a.jsx(e6,{status:C.overall_status})}),a.jsx(Ju,{children:r6(C.createdAt)})]},C.id)),!s&&n.length===0&&a.jsx("tr",{children:a.jsx("td",{colSpan:5,children:a.jsxs(VC,{children:[a.jsx(HC,{children:a.jsx(Zs,{size:40})}),a.jsx(qC,{children:"Nenhum cliente encontrado"}),a.jsx(GC,{children:p||c?"Tente ajustar os filtros para ver mais resultados.":'Clique em "Novo Cliente" para iniciar o cadastro.'})]})})})]})]}),!s&&o.totalPages>1&&a.jsxs(XC,{children:[a.jsxs(KC,{children:["Página ",o.currentPage," de ",o.totalPages," ","· ",o.total," registros"]}),a.jsxs(JC,{children:[a.jsx(Va,{type:"button",onClick:()=>d(C=>Math.max(1,C-1)),disabled:u<=1,"aria-label":"Página anterior",children:a.jsx(cv,{size:15})}),Array.from({length:o.totalPages},(C,_)=>_+1).filter(C=>C===1||C===o.totalPages||Math.abs(C-u)<=2).reduce((C,_,P,v)=>(P>0&&_-v[P-1]>1&&C.push("…"),C.push(_),C),[]).map((C,_)=>C==="…"?a.jsx(Va,{disabled:!0,as:"span",children:"…"},`ellipsis-${_}`):a.jsx(Va,{type:"button",$active:C===u,onClick:()=>d(C),children:C},C)),a.jsx(Va,{type:"button",onClick:()=>d(C=>Math.min(o.totalPages,C+1)),disabled:u>=o.totalPages,"aria-label":"Próxima página",children:a.jsx(uv,{size:15})})]})]})]})]})}const s6=lt`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,a6=lt`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,Hv=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  animation: ${s6} 0.35s ease both;
`,qv=S.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,Gv=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,l6=S.button`
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
`,Yv=S.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,c6=S.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,u6=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  letter-spacing: 0.04em;
`,d6=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`,Gr=S.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Fo=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,To=S.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,Ao=S.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,Qv=S.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,as=S.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,ct=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`,ht=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,gt=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,f6=S(gt)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,n0={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},r0={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},o0=S.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=n0[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=n0[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`,p6=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,h6=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`,m6=S.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,g6=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,y6=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;const x6=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,v6=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.surface.card};
  transition: background-color ${({theme:e})=>e.transitions.fast};
  min-width: 0;

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[50]};
  }
`,b6=S.span`
  display: block;
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  color: ${({theme:e})=>e.text.primary};
  
  /* Truncamento mágico: */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  /* No desktop pode ser maior, no mobile limitamos para não empurrar a tela */
  max-width: 250px;

  @media (max-width: 480px) {
    max-width: 150px; /* Ajuste esse valor conforme achar melhor para o seu celular */
  }
`,w6=S.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,$6=S.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,k6=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,S6=S.button`
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
`,j6=S.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,Zu=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,ed=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,Ro=S.div`
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
  animation: ${a6} 1.4s ease infinite;
`,_6=S(Gr)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,E6=S.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[4]} 0;
`,C6=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length!==14?e:t.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5")},P6=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length===11?t.replace(/^(\d{2})(\d{5})(\d{4})$/,"($1) $2-$3"):t.length===10?t.replace(/^(\d{2})(\d{4})(\d{4})$/,"($1) $2-$3"):e},i0=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",F6=e=>e==null?"—":Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),T6={food:"Vale Alimentação",meal:"Vale Refeição",both:"Alimentação + Refeição"},A6={company_document:"Documento da Empresa",proof_of_address:"Comprovante de Endereço",bank_account_proof:"Comprovante Bancário",card_machine_proof:"Comprovante de Maquininha"};function R6(){return a.jsxs(Hv,{children:[a.jsx(qv,{children:a.jsxs(Gv,{children:[a.jsx(Ro,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),a.jsxs(Yv,{children:[a.jsx(Ro,{$w:"220px",$h:"28px"}),a.jsx(Ro,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]})}),a.jsx(Qv,{children:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:a.jsxs(_6,{children:[a.jsx(Ro,{$w:"40%",$h:"18px"}),a.jsx(E6,{}),a.jsx(as,{children:Array.from({length:6}).map((e,t)=>a.jsxs(ct,{children:[a.jsx(Ro,{$w:"50%",$h:"11px"}),a.jsx(Ro,{$w:"80%",$h:"16px",style:{marginTop:"4px"}})]},t))})]})})})]})}const O6=[{value:"pending",label:"Pendente"},{value:"analysis",label:"Em análise"},{value:"approved",label:"Aprovado"}],s0={approved:{bg:"#d1fae5",color:"#065f46"},analysis:{bg:"#dbeafe",color:"#1e40af"},pending:{bg:"#fef3c7",color:"#92400e"}};function z6({clientFlagId:e,currentStatus:t,onUpdated:n,onOptimisticUpdate:r}){const[o,i]=L.useState(!1),[s,l]=L.useState(t),c=s0[s]??s0.pending;L.useEffect(()=>{l(t)},[t]);const f=async u=>{const d=u.target.value,p=s;if(d!==p){l(d),r(e,d),i(!0);try{await Pe.patch(`/client-flags/${e}/status`,{status:d}),ae.success("Status da bandeira atualizado."),n()}catch(m){l(p),r(e,p),ae.error(qt(m,"Erro ao atualizar status."))}finally{i(!1)}}};return a.jsx("select",{value:s,onChange:f,disabled:o,style:{height:"28px",padding:"0 28px 0 8px",border:"1.5px solid #e4d9cf",borderRadius:"99px",fontFamily:"inherit",fontSize:"11px",fontWeight:600,backgroundColor:c.bg,color:c.color,cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 8px center"},children:O6.map(u=>a.jsx("option",{value:u.value,children:u.label},u.value))})}function N6(){var Q,q;const{id:e}=K1(),t=Un(),{isAdmin:n,isPartner:r,isUser:o,user:i}=Bn(),[s,l]=L.useState(null),[c,f]=L.useState(!0),[u,d]=L.useState(null),p=L.useCallback(async()=>{try{const{data:X}=await Pe.get(`/clients/${e}`);l(X.data)}catch(X){ae.error(qt(X,"Erro ao carregar dados.")),t("/clientes",{replace:!0})}finally{f(!1)}},[e,t]);L.useEffect(()=>{p()},[p]);const m=L.useCallback((X,oe)=>{l(se=>se&&{...se,clientFlags:se.clientFlags.map(fe=>fe.id===X?{...fe,status:oe}:fe)})},[]),g=L.useCallback(async()=>{try{const{data:X}=await Pe.get(`/clients/${e}`);l(X.data)}catch{}},[e]),b=async X=>{d(X.id);try{const oe=await Pe.get(`/documents/${X.id}/download`,{responseType:"blob"}),se=URL.createObjectURL(oe.data),fe=document.createElement("a");fe.href=se,fe.download=X.original_name??`documento-${X.id}`,document.body.appendChild(fe),fe.click(),fe.remove(),URL.revokeObjectURL(se)}catch(oe){ae.error(qt(oe,"Erro no download."))}finally{d(null)}};if(c)return a.jsx(R6,{});if(!s)return null;const{corporate_name:$,trade_name:h,cnpj:y,state_registration:x,phone:w,email:C,protocol:_,benefit_type:P,overall_status:v,notes:j,createdAt:T,address_street:A,address_number:R,address_complement:N,address_neighborhood:F,address_city:M,address_state:E,address_zip:k,clientFlags:D=[],documents:z=[],bankAccounts:I=[]}=s,Y=!r&&(n||o&&s.created_by===(i==null?void 0:i.id)),B=!r&&(n||o&&s.created_by===(i==null?void 0:i.id)),K=A||M,G=[A,R,N].filter(Boolean).join(", "),V=[F,M,E].filter(Boolean).join(" — ");return a.jsxs(Hv,{children:[a.jsxs(qv,{children:[a.jsxs(Gv,{children:[a.jsxs(l6,{onClick:()=>t("/clientes"),title:"Voltar",children:[a.jsx(Dp,{size:18})," Voltar"]}),a.jsxs(Yv,{children:[a.jsx(c6,{children:h||$}),a.jsxs(u6,{children:["Protocolo #",_]})]})]}),a.jsxs(d6,{children:[Y&&a.jsxs("button",{onClick:()=>t(`/clientes/${e}/editar`),style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 14px",border:"1.5px solid #e4d9cf",borderRadius:"8px",background:"transparent",fontSize:"13px",fontWeight:500,color:"#7a6455",cursor:"pointer"},children:[a.jsx(F_,{size:14})," Editar"]}),a.jsx(o0,{$status:v,children:r0[v]??v})]})]}),a.jsxs(Qv,{children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs(Gr,{children:[a.jsxs(Fo,{children:[a.jsx(To,{children:a.jsx(Ip,{size:18})}),a.jsx(Ao,{children:"Dados da Empresa"})]}),a.jsxs(as,{children:[a.jsxs(ct,{children:[a.jsx(ht,{children:"Razão Social"}),a.jsx(gt,{children:$||"—"})]}),!r&&a.jsxs(ct,{children:[a.jsx(ht,{children:"Nome Fantasia"}),a.jsx(gt,{children:h||"—"})]}),a.jsxs(ct,{children:[a.jsx(ht,{children:"CNPJ"}),a.jsx(gt,{children:C6(y)})]}),!r&&a.jsxs(ct,{children:[a.jsx(ht,{children:"Inscrição Estadual"}),a.jsx(gt,{children:x||"—"})]}),a.jsxs(ct,{children:[a.jsx(ht,{children:"Telefone"}),a.jsx(gt,{children:P6(w)})]}),!r&&a.jsxs(ct,{children:[a.jsx(ht,{children:"E-mail"}),a.jsx(gt,{children:C||"—"})]}),a.jsxs(ct,{children:[a.jsx(ht,{children:"Tipo de Benefício"}),a.jsx(gt,{children:T6[P]??P??"—"})]}),a.jsxs(ct,{children:[a.jsx(ht,{children:"Cadastrado em"}),a.jsx(gt,{children:i0(T)})]}),!r&&j&&a.jsxs(ct,{$span:!0,children:[a.jsx(ht,{children:"Observações Internas"}),a.jsx(f6,{children:j})]})]})]}),a.jsxs(Gr,{children:[a.jsxs(Fo,{children:[a.jsx(To,{children:a.jsx(Up,{size:18})}),a.jsx(Ao,{children:"Endereço"})]}),K?a.jsxs(as,{$cols:2,children:[a.jsxs(ct,{$span:!0,children:[a.jsx(ht,{children:"Logradouro"}),a.jsx(gt,{children:G||"—"})]}),a.jsxs(ct,{children:[a.jsx(ht,{children:"Bairro / Cidade / UF"}),a.jsx(gt,{children:V||"—"})]}),a.jsxs(ct,{children:[a.jsx(ht,{children:"CEP"}),a.jsx(gt,{children:k||"—"})]})]}):a.jsx(Zu,{children:a.jsx(ed,{children:"Endereço não informado."})})]}),!r&&a.jsxs(Gr,{children:[a.jsxs(Fo,{children:[a.jsx(To,{children:a.jsx(ac,{size:18})}),a.jsx(Ao,{children:"Documentos"})]}),z.length>0?a.jsx(x6,{children:z.map(X=>a.jsxs(v6,{children:[a.jsx(w6,{children:a.jsx(ac,{size:16})}),a.jsxs($6,{style:{flex:1,minWidth:0},children:[a.jsx(b6,{title:X.original_name||"Documento",children:X.original_name||"Documento"}),a.jsx(k6,{children:A6[X.document_type]??X.document_type})]}),a.jsx(S6,{onClick:()=>b(X),disabled:u===X.id,children:u===X.id?a.jsx(__,{size:14,className:"animate-spin"}):a.jsx($_,{size:14})})]},X.id))}):a.jsx(Zu,{children:a.jsx(ed,{children:"Sem documentos."})})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs(Gr,{children:[a.jsxs(Fo,{children:[a.jsx(To,{children:a.jsx(dv,{size:18})}),a.jsx(Ao,{children:"Bandeiras"})]}),a.jsx(p6,{children:D.map(X=>{var oe;return a.jsxs(h6,{children:[a.jsxs(m6,{children:[a.jsx(g6,{children:((oe=X.flag)==null?void 0:oe.name)||"Bandeira"}),a.jsx(y6,{children:X.origin})]}),B?a.jsx(z6,{clientFlagId:X.id,currentStatus:X.status,onUpdated:g,onOptimisticUpdate:m}):a.jsx(o0,{$status:X.status,style:{fontSize:"10px",padding:"2px 8px"},children:r0[X.status]??X.status})]},X.id)})})]}),!r&&a.jsxs(Gr,{children:[a.jsxs(Fo,{children:[a.jsx(To,{children:a.jsx(Mp,{size:18})}),a.jsx(Ao,{children:"Dados Bancários"})]}),I.length>0?I.map(X=>a.jsx(j6,{children:a.jsxs(as,{$cols:1,children:[a.jsxs(ct,{children:[a.jsx(ht,{children:"Banco"}),a.jsx(gt,{children:X.bank_name})]}),a.jsxs(ct,{children:[a.jsx(ht,{children:"Agência/Conta"}),a.jsxs(gt,{children:[X.agency,X.agency_digit?`-${X.agency_digit}`:""," / ",X.account,X.account_digit?`-${X.account_digit}`:""]})]})]})},X.id)):a.jsx(Zu,{children:a.jsx(ed,{children:"Sem dados bancários."})})]}),s.sales&&s.sales.length>0&&a.jsxs(Gr,{children:[a.jsxs(Fo,{children:[a.jsx(To,{children:a.jsx(b_,{size:18})}),a.jsx(Ao,{children:"Plano Contratado"})]}),a.jsxs(as,{$cols:1,children:[a.jsxs(ct,{children:[a.jsx(ht,{children:"Nome do Plano"}),a.jsx(gt,{children:((Q=s.sales[0])==null?void 0:Q.plan_name)||"—"})]}),a.jsxs(ct,{children:[a.jsx(ht,{children:"Valor"}),a.jsx(gt,{children:F6((q=s.sales[0])==null?void 0:q.total_value)})]}),a.jsxs(ct,{children:[a.jsx(ht,{children:"Data da Venda"}),a.jsx(gt,{children:i0(s.sales[0].createdAt)})]})]})]})]})]}),a.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } } .animate-spin { animation: spin 1s linear infinite; }"})]})}const L6=lt`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,D6=lt`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,Xv=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px; /* espaço para o footer fixo */
  animation: ${L6} 0.3s ease both;
`,Kv=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,I6=S.button`
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
`,Jv=S.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,M6=S.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,U6=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,ls=S.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Ha=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,qa=S.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,Ga=S.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,js=S.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,a0=S.div`
  grid-column: 1 / -1;
`,De=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,qe=S.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ya=S.span`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.neutral[400]};
  flex-shrink: 0;
`,eh=({theme:e,$hasError:t})=>`
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
`,Gt=S.input`
  ${({theme:e,$hasError:t})=>eh({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,Qa=S.select`
  ${({theme:e,$hasError:t})=>eh({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,B6=S.textarea`
  ${({theme:e,$hasError:t})=>eh({theme:e,$hasError:t})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,Xa=S.div`
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
`,Ka=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[400]};
  font-style: italic;
`,$t=S.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,cs=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,W6=S.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,V6=S.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,H6=S.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,q6=S.div`
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
`,G6=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,Y6=S.label`
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
`,Q6=S.div`
  color: ${({theme:e,$hasFile:t})=>t?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,X6=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,K6=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,l0=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,c0=S.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,u0=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,d0=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,J6=S.button`
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
`,Z6=S.div`
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
`,eP=S.button`
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
`,tP=S.button`
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
`,nP=S.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,Wr=S.div`
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
  animation: ${D6} 1.4s ease infinite;
`,f0=S(ls)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,p0=S.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`;S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`;S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`;S.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`;S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`;S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`;S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;S.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`;S.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;S.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;S.button`
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
`;S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`;S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  /* Span full width dentro do grid (ex: campo "notes") */
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`;S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`;const rP=S.span`
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
`;S(rP)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;const h0={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}};S.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=h0[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=h0[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`;const oP=Kc({trade_name:pe().nullable().transform(e=>e||null).max(200,"Nome fantasia deve ter no máximo 200 caracteres."),phone:pe().nullable().transform(e=>e||null).max(20,"Telefone deve ter no máximo 20 caracteres."),benefit_type:pe().required("O tipo de benefício é obrigatório.").oneOf(["food","meal","both"],"Selecione um tipo de benefício válido."),notes:pe().nullable().transform(e=>e||null),partner_id:pe().nullable().transform(e=>e||null),address_street:pe().nullable().transform(e=>e||null).max(255,"Logradouro deve ter no máximo 255 caracteres."),address_number:pe().nullable().transform(e=>e||null).max(10,"Número deve ter no máximo 10 caracteres."),address_complement:pe().nullable().transform(e=>e||null).max(100,"Complemento deve ter no máximo 100 caracteres."),address_neighborhood:pe().nullable().transform(e=>e||null).max(100,"Bairro deve ter no máximo 100 caracteres."),address_city:pe().nullable().transform(e=>e||null).max(100,"Cidade deve ter no máximo 100 caracteres."),address_state:pe().nullable().transform(e=>e||null).max(2,"UF deve ter 2 caracteres."),address_zip:pe().nullable().transform(e=>e||null).test("cep-valido","CEP inválido. Use o formato 00000-000.",e=>e?e.replace(/\D/g,"").length===8:!0),bank_bank_name:pe().nullable().transform(e=>e||null).max(100,"Nome do banco deve ter no máximo 100 caracteres."),bank_agency:pe().max(10,"Agência deve ter no máximo 10 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Agência é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_agency_digit:pe().nullable().transform(e=>e||null).max(2,"Dígito da agência deve ter no máximo 2 caracteres."),bank_account:pe().max(20,"Conta deve ter no máximo 20 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Conta é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_account_digit:pe().nullable().transform(e=>e||null).max(2,"Dígito da conta deve ter no máximo 2 caracteres."),bank_account_type:pe().when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Tipo de conta é obrigatório.").oneOf(["checking","savings"],"Tipo de conta inválido."),otherwise:e=>e.nullable().transform(t=>t||null)})}),iP=[{key:"contrato",fieldName:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB."},{key:"proof_of_address",fieldName:"documentos",type:"proof_of_address",label:"Comprovante de Endereço",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:0},{key:"bank_account_proof",fieldName:"documentos",type:"bank_account_proof",label:"Comprovante Bancário",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:1},{key:"card_machine_proof",fieldName:"documentos",type:"card_machine_proof",label:"Comprovante de Maquininha",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:2}],sP=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],aP=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],lP=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"];let td=null;const m0=(e="")=>{const t=e.replace(/\D/g,"").slice(0,11);return t.length<=2?`(${t}`:t.length<=6?`(${t.slice(0,2)}) ${t.slice(2)}`:t.length<=10?`(${t.slice(0,2)}) ${t.slice(2,6)}-${t.slice(6)}`:`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7)}`},g0=(e="")=>{const t=e.replace(/\D/g,"").slice(0,8);return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5)}`},cP=(e="")=>e.replace(/\D/g,""),y0=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function uP(){const e=t=>Array.from({length:t}).map((n,r)=>a.jsxs(De,{children:[a.jsx(Wr,{$w:"45%",$h:"11px"}),a.jsx(Wr,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},r));return a.jsxs(Xv,{children:[a.jsxs(Kv,{children:[a.jsx(Wr,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),a.jsxs(Jv,{children:[a.jsx(Wr,{$w:"200px",$h:"28px"}),a.jsx(Wr,{$w:"140px",$h:"14px",style:{marginTop:"4px"}})]})]}),a.jsxs(f0,{children:[a.jsx(Wr,{$w:"35%",$h:"20px"}),a.jsx(p0,{}),a.jsx(js,{children:e(6)})]}),a.jsxs(f0,{children:[a.jsx(Wr,{$w:"30%",$h:"20px"}),a.jsx(p0,{}),a.jsx(js,{children:e(4)})]})]})}function dP({slot:e,existingDoc:t,selectedFile:n,onFileSelect:r,onClearFile:o,disabled:i}){const s=L.useRef(null),l=!!n,c=!!t;return a.jsxs(q6,{$hasFile:l,children:[a.jsx(G6,{children:e.label}),l?a.jsxs(l0,{children:[a.jsx(wf,{size:16,style:{color:"#B45A14",flexShrink:0}}),a.jsxs(c0,{children:[a.jsx(u0,{children:n.name}),a.jsxs(d0,{children:[y0(n.size)," · Novo arquivo"]})]}),a.jsx(J6,{type:"button",onClick:()=>o(e.key),disabled:i,title:"Remover seleção",children:a.jsx(mv,{size:13})})]}):c?a.jsxs(l0,{children:[a.jsx(wf,{size:16,style:{color:"#7a6455",flexShrink:0}}),a.jsxs(c0,{children:[a.jsx(u0,{children:t.original_name??"Documento existente"}),a.jsxs(d0,{children:[t.file_size?y0(t.file_size)+" · ":"","Substituir clicando abaixo"]})]})]}):null,a.jsxs(Y6,{htmlFor:`doc-input-${e.key}`,children:[a.jsx(Q6,{$hasFile:l,children:a.jsx(gv,{size:22})}),a.jsx(X6,{children:l?"Trocar arquivo":c?"Substituir documento":"Selecionar arquivo"}),a.jsx(K6,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),a.jsx("input",{ref:s,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:i,onChange:f=>{var d;const u=(d=f.target.files)==null?void 0:d[0];if(u){if(u.size>3*1024*1024){ae.error("Arquivo muito grande. O limite é 3 MB.");return}r(e.key,u),f.target.value=""}}}),a.jsx(cs,{children:e.hint})]})}function fP(){const{id:e}=K1(),t=Un(),[n,r]=L.useState(!0),[o,i]=L.useState(!1),[s,l]=L.useState(""),[c,f]=L.useState([]),[u,d]=L.useState(!1),[p,m]=L.useState({}),[g,b]=L.useState({}),[$,h]=L.useState({corporate_name:"",cnpj:"",email:"",state_registration:""}),{register:y,handleSubmit:x,reset:w,setValue:C,watch:_,formState:{errors:P,isDirty:v}}=Xc({resolver:Gp(oP),defaultValues:{trade_name:"",phone:"",benefit_type:"food",notes:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",partner_id:"",bank_bank_name:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}}),T=!!_("bank_bank_name"),A=L.useCallback(async()=>{var k,D;r(!0);try{const{data:z}=await Pe.get(`/clients/${e}`),I=z.data;l(I.trade_name||I.corporate_name||""),h({corporate_name:I.corporate_name??"",cnpj:I.cnpj??"",email:I.email??"",state_registration:I.state_registration??""});const Y={};(I.documents??[]).forEach(K=>{Y[K.document_type]=K}),m(Y);const B=(k=I.bankAccounts)==null?void 0:k[0];w({trade_name:I.trade_name??"",phone:m0(I.phone??""),benefit_type:I.benefit_type??"food",notes:I.notes??"",address_street:I.address_street??"",address_number:I.address_number??"",address_complement:I.address_complement??"",address_neighborhood:I.address_neighborhood??"",address_city:I.address_city??"",address_state:I.address_state??"",address_zip:g0(I.address_zip??""),partner_id:((D=I.partner)==null?void 0:D.id)??I.partner_id??"",bank_bank_name:(B==null?void 0:B.bank_name)??"",bank_agency:(B==null?void 0:B.agency)??"",bank_agency_digit:(B==null?void 0:B.agency_digit)??"",bank_account:(B==null?void 0:B.account)??"",bank_account_digit:(B==null?void 0:B.account_digit)??"",bank_account_type:(B==null?void 0:B.account_type)??"checking"})}catch(z){ae.error(qt(z,"Erro ao carregar dados do cliente.")),t(`/clientes/${e}`,{replace:!0})}finally{r(!1)}},[e,t,w]);L.useEffect(()=>{A()},[A]),L.useEffect(()=>{(async()=>{if(td){f(td);return}d(!0);try{const{data:D}=await Pe.get("/users?role=partner&limit=100"),z=D.data??[];td=z,f(z)}catch{}finally{d(!1)}})()},[]);const R=(k,D)=>{b(z=>({...z,[k]:D}))},N=k=>{b(D=>{const z={...D};return delete z[k],z})},F=async k=>{i(!0);try{const D=Object.keys(g).length>0,z={trade_name:k.trade_name||void 0,phone:cP(k.phone)||void 0,benefit_type:k.benefit_type,notes:k.notes||void 0,address_street:k.address_street||void 0,address_number:k.address_number||void 0,address_complement:k.address_complement||void 0,address_neighborhood:k.address_neighborhood||void 0,address_city:k.address_city||void 0,address_state:k.address_state||void 0,address_zip:k.address_zip||void 0,partner_id:k.partner_id||null,...T?{bankAccount:{bank_name:k.bank_bank_name,agency:k.bank_agency,agency_digit:k.bank_agency_digit||void 0,account:k.bank_account,account_digit:k.bank_account_digit||void 0,account_type:k.bank_account_type}}:{}};if(Object.keys(z).forEach(I=>z[I]===void 0&&delete z[I]),D){const I=new FormData;I.append("data",JSON.stringify(z)),g.contrato&&I.append("contrato",g.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(Y=>{g[Y]&&I.append("documentos",g[Y])}),await Pe.patch(`/clients/${e}`,I,{headers:{"Content-Type":"multipart/form-data"}})}else await Pe.patch(`/clients/${e}`,z);ae.success("Cliente atualizado com sucesso!",{toastId:"client-updated"}),t(`/clientes/${e}`,{replace:!0})}catch(D){ae.error(qt(D,"Erro ao salvar alterações."))}finally{i(!1)}};if(n)return a.jsx(uP,{});const M=v||Object.keys(g).length>0,E=k=>{var D;return(D=P[k])==null?void 0:D.message};return a.jsxs(a.Fragment,{children:[a.jsxs(Xv,{children:[a.jsxs(Kv,{children:[a.jsxs(I6,{type:"button",onClick:()=>t(`/clientes/${e}`),children:[a.jsx(Dp,{size:15})," Voltar"]}),a.jsxs(Jv,{children:[a.jsx(M6,{children:"Editar Cliente"}),a.jsx(U6,{children:s})]})]}),a.jsxs("form",{id:"edit-client-form",onSubmit:x(F),noValidate:!0,children:[a.jsxs(ls,{style:{marginBottom:"24px"},children:[a.jsxs(Ha,{children:[a.jsx(qa,{children:a.jsx(Ip,{size:18})}),a.jsx(Ga,{children:"Dados da Empresa"})]}),a.jsxs(js,{children:[a.jsxs(De,{children:[a.jsxs(qe,{children:[a.jsx(Ya,{children:a.jsx(Na,{size:11})}),"Razão Social"]}),a.jsx(Xa,{children:$.corporate_name||"—"}),a.jsx(Ka,{children:"Campo único, não pode ser editado."})]}),a.jsxs(De,{children:[a.jsxs(qe,{children:[a.jsx(Ya,{children:a.jsx(Na,{size:11})}),"CNPJ"]}),a.jsx(Xa,{children:$.cnpj||"—"}),a.jsx(Ka,{children:"Campo único, não pode ser editado."})]}),a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"trade_name",children:"Nome Fantasia"}),a.jsx(Gt,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",$hasError:!!E("trade_name"),disabled:o,...y("trade_name")}),E("trade_name")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("trade_name")]})]}),a.jsxs(De,{children:[a.jsxs(qe,{children:[a.jsx(Ya,{children:a.jsx(Na,{size:11})}),"Inscrição Estadual"]}),a.jsx(Xa,{children:$.state_registration||"—"}),a.jsx(Ka,{children:"Campo único, não pode ser editado."})]}),a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"phone",children:"Telefone"}),a.jsx(Gt,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",$hasError:!!E("phone"),disabled:o,...y("phone",{onChange:k=>C("phone",m0(k.target.value))})}),E("phone")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("phone")]})]}),a.jsxs(De,{children:[a.jsxs(qe,{children:[a.jsx(Ya,{children:a.jsx(Na,{size:11})}),"E-mail"]}),a.jsx(Xa,{children:$.email||"—"}),a.jsx(Ka,{children:"Campo único, não pode ser editado."})]}),a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),a.jsx(Qa,{id:"benefit_type",$hasError:!!E("benefit_type"),disabled:o,...y("benefit_type"),children:sP.map(k=>a.jsx("option",{value:k.value,children:k.label},k.value))}),E("benefit_type")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("benefit_type")]})]}),a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"partner_id",children:"Parceiro Vinculado"}),a.jsxs(Qa,{id:"partner_id",disabled:o||u,...y("partner_id"),children:[a.jsx("option",{value:"",children:u?"Carregando parceiros…":"Sem parceiro vinculado"}),c.map(k=>a.jsx("option",{value:k.id,children:k.name},k.id))]}),a.jsx(cs,{children:u?"Buscando parceiros…":`${c.length} parceiro${c.length!==1?"s":""} disponível${c.length!==1?"is":""}`})]}),a.jsx(a0,{children:a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"notes",children:"Observações"}),a.jsx(B6,{id:"notes",placeholder:"Observações internas…",disabled:o,...y("notes")}),a.jsx(cs,{children:"Visível apenas para a equipe interna."})]})})]})]}),a.jsxs(ls,{style:{marginBottom:"24px"},children:[a.jsxs(Ha,{children:[a.jsx(qa,{children:a.jsx(Up,{size:18})}),a.jsx(Ga,{children:"Endereço"})]}),a.jsxs(js,{children:[a.jsx(a0,{children:a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"address_street",children:"Logradouro"}),a.jsx(Gt,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",$hasError:!!E("address_street"),disabled:o,...y("address_street")}),E("address_street")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("address_street")]})]})}),a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"address_number",children:"Número"}),a.jsx(Gt,{id:"address_number",type:"text",placeholder:"Nº",$hasError:!!E("address_number"),disabled:o,...y("address_number")}),E("address_number")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("address_number")]})]}),a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"address_complement",children:"Complemento"}),a.jsx(Gt,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",$hasError:!!E("address_complement"),disabled:o,...y("address_complement")}),E("address_complement")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("address_complement")]})]}),a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"address_neighborhood",children:"Bairro"}),a.jsx(Gt,{id:"address_neighborhood",type:"text",placeholder:"Bairro",$hasError:!!E("address_neighborhood"),disabled:o,...y("address_neighborhood")}),E("address_neighborhood")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("address_neighborhood")]})]}),a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"address_city",children:"Cidade"}),a.jsx(Gt,{id:"address_city",type:"text",placeholder:"Cidade",$hasError:!!E("address_city"),disabled:o,...y("address_city")}),E("address_city")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("address_city")]})]}),a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"address_state",children:"UF"}),a.jsxs(Qa,{id:"address_state",$hasError:!!E("address_state"),disabled:o,...y("address_state"),children:[a.jsx("option",{value:"",children:"Selecione"}),lP.map(k=>a.jsx("option",{value:k,children:k},k))]}),E("address_state")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("address_state")]})]}),a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"address_zip",children:"CEP"}),a.jsx(Gt,{id:"address_zip",type:"text",placeholder:"00000-000",$hasError:!!E("address_zip"),disabled:o,...y("address_zip",{onChange:k=>C("address_zip",g0(k.target.value))})}),E("address_zip")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("address_zip")]})]})]})]}),a.jsxs(ls,{style:{marginBottom:"24px"},children:[a.jsxs(Ha,{children:[a.jsx(qa,{children:a.jsx(Mp,{size:18})}),a.jsx(Ga,{children:"Conta Bancária"})]}),a.jsxs(W6,{children:[a.jsx(V6,{children:"Dados Bancários Principais"}),T&&a.jsx(cs,{style:{marginBottom:"12px",display:"block"},children:"Agência e conta são obrigatórios quando o banco é informado."}),a.jsxs(js,{children:[a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),a.jsx(Gt,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",$hasError:!!E("bank_bank_name"),disabled:o,...y("bank_bank_name")}),E("bank_bank_name")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("bank_bank_name")]})]}),a.jsxs(De,{children:[a.jsxs(qe,{htmlFor:"bank_agency",children:["Agência ",T&&a.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),a.jsx(Gt,{id:"bank_agency",type:"text",placeholder:"0000",$hasError:!!E("bank_agency"),disabled:o,...y("bank_agency")}),E("bank_agency")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("bank_agency")]})]}),a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),a.jsx(Gt,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,$hasError:!!E("bank_agency_digit"),disabled:o,...y("bank_agency_digit")}),E("bank_agency_digit")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("bank_agency_digit")]})]}),a.jsxs(De,{children:[a.jsxs(qe,{htmlFor:"bank_account",children:["Conta ",T&&a.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),a.jsx(Gt,{id:"bank_account",type:"text",placeholder:"000000",$hasError:!!E("bank_account"),disabled:o,...y("bank_account")}),E("bank_account")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("bank_account")]})]}),a.jsxs(De,{children:[a.jsx(qe,{htmlFor:"bank_account_digit",children:"Dígito Conta"}),a.jsx(Gt,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,$hasError:!!E("bank_account_digit"),disabled:o,...y("bank_account_digit")}),E("bank_account_digit")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("bank_account_digit")]})]}),a.jsxs(De,{children:[a.jsxs(qe,{htmlFor:"bank_account_type",children:["Tipo de Conta ",T&&a.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),a.jsx(Qa,{id:"bank_account_type",$hasError:!!E("bank_account_type"),disabled:o,...y("bank_account_type"),children:aP.map(k=>a.jsx("option",{value:k.value,children:k.label},k.value))}),E("bank_account_type")&&a.jsxs($t,{children:[a.jsx(ge,{size:11}),E("bank_account_type")]})]})]})]})]}),a.jsxs(ls,{style:{marginBottom:"24px"},children:[a.jsxs(Ha,{children:[a.jsx(qa,{children:a.jsx(ac,{size:18})}),a.jsx(Ga,{children:"Documentos"})]}),a.jsxs(cs,{style:{marginBottom:"16px",display:"block"},children:["Selecione um novo arquivo para ",a.jsx("strong",{children:"substituir"})," o documento existente. O arquivo antigo é removido automaticamente do Cloudinary."]}),a.jsx(H6,{children:iP.map(k=>a.jsx(dP,{slot:k,existingDoc:p[k.type],selectedFile:g[k.key],onFileSelect:R,onClearFile:N,disabled:o},k.key))})]})]})]}),a.jsxs(Z6,{children:[a.jsxs(eP,{type:"button",disabled:o,onClick:()=>t(`/clientes/${e}`),children:[a.jsx(da,{size:15})," Cancelar"]}),a.jsx(tP,{type:"submit",form:"edit-client-form",disabled:o||!M,$isSubmitting:o,title:M?void 0:"Nenhuma alteração detectada",children:o?a.jsxs(a.Fragment,{children:[a.jsx(nP,{}),"Salvando…"]}):a.jsxs(a.Fragment,{children:[a.jsx(fv,{size:15}),"Salvar Alterações"]})})]})]})}function pP(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(e)}function Zv(e,t){return new Promise(function(n,r){let o;return hP(e).then(function(i){try{return o=i,n(new Blob([t.slice(0,2),o,t.slice(2)],{type:"image/jpeg"}))}catch(s){return r(s)}},r)})}const hP=e=>new Promise((t,n)=>{const r=new FileReader;r.addEventListener("load",({target:{result:o}})=>{const i=new DataView(o);let s=0;if(i.getUint16(s)!==65496)return n("not a valid JPEG");for(s+=2;;){const l=i.getUint16(s);if(l===65498)break;const c=i.getUint16(s+2);if(l===65505&&i.getUint32(s+4)===1165519206){const f=s+10;let u;switch(i.getUint16(f)){case 18761:u=!0;break;case 19789:u=!1;break;default:return n("TIFF header contains invalid endian")}if(i.getUint16(f+2,u)!==42)return n("TIFF header contains invalid version");const d=i.getUint32(f+4,u),p=f+d+2+12*i.getUint16(f+d,u);for(let m=f+d+2;m<p;m+=12)if(i.getUint16(m,u)==274){if(i.getUint16(m+2,u)!==3)return n("Orientation data type is invalid");if(i.getUint32(m+4,u)!==1)return n("Orientation data count is invalid");i.setUint16(m+8,1,u);break}return t(o.slice(s,s+2+c))}s+=2+c}return t(new Blob)}),r.readAsArrayBuffer(e)});var pc={},mP={get exports(){return pc},set exports(e){pc=e}};(function(e){var t,n,r={};mP.exports=r,r.parse=function(o,i){for(var s=r.bin.readUshort,l=r.bin.readUint,c=0,f={},u=new Uint8Array(o),d=u.length-4;l(u,d)!=101010256;)d--;c=d,c+=4;var p=s(u,c+=4);s(u,c+=2);var m=l(u,c+=2),g=l(u,c+=4);c+=4,c=g;for(var b=0;b<p;b++){l(u,c),c+=4,c+=4,c+=4,l(u,c+=4),m=l(u,c+=4);var $=l(u,c+=4),h=s(u,c+=4),y=s(u,c+2),x=s(u,c+4);c+=6;var w=l(u,c+=8);c+=4,c+=h+y+x,r._readLocal(u,w,f,m,$,i)}return f},r._readLocal=function(o,i,s,l,c,f){var u=r.bin.readUshort,d=r.bin.readUint;d(o,i),u(o,i+=4),u(o,i+=2);var p=u(o,i+=2);d(o,i+=2),d(o,i+=4),i+=4;var m=u(o,i+=8),g=u(o,i+=2);i+=2;var b=r.bin.readUTF8(o,i,m);if(i+=m,i+=g,f)s[b]={size:c,csize:l};else{var $=new Uint8Array(o.buffer,i);if(p==0)s[b]=new Uint8Array($.buffer.slice(i,i+l));else{if(p!=8)throw"unknown compression method: "+p;var h=new Uint8Array(c);r.inflateRaw($,h),s[b]=h}}},r.inflateRaw=function(o,i){return r.F.inflate(o,i)},r.inflate=function(o,i){return o[0],o[1],r.inflateRaw(new Uint8Array(o.buffer,o.byteOffset+2,o.length-6),i)},r.deflate=function(o,i){i==null&&(i={level:6});var s=0,l=new Uint8Array(50+Math.floor(1.1*o.length));l[s]=120,l[s+1]=156,s+=2,s=r.F.deflateRaw(o,l,s,i.level);var c=r.adler(o,0,o.length);return l[s+0]=c>>>24&255,l[s+1]=c>>>16&255,l[s+2]=c>>>8&255,l[s+3]=c>>>0&255,new Uint8Array(l.buffer,0,s+4)},r.deflateRaw=function(o,i){i==null&&(i={level:6});var s=new Uint8Array(50+Math.floor(1.1*o.length)),l=r.F.deflateRaw(o,s,l,i.level);return new Uint8Array(s.buffer,0,l)},r.encode=function(o,i){i==null&&(i=!1);var s=0,l=r.bin.writeUint,c=r.bin.writeUshort,f={};for(var u in o){var d=!r._noNeed(u)&&!i,p=o[u],m=r.crc.crc(p,0,p.length);f[u]={cpr:d,usize:p.length,crc:m,file:d?r.deflateRaw(p):p}}for(var u in f)s+=f[u].file.length+30+46+2*r.bin.sizeUTF8(u);s+=22;var g=new Uint8Array(s),b=0,$=[];for(var u in f){var h=f[u];$.push(b),b=r._writeHeader(g,b,u,h,0)}var y=0,x=b;for(var u in f)h=f[u],$.push(b),b=r._writeHeader(g,b,u,h,1,$[y++]);var w=b-x;return l(g,b,101010256),b+=4,c(g,b+=4,y),c(g,b+=2,y),l(g,b+=2,w),l(g,b+=4,x),b+=4,b+=2,g.buffer},r._noNeed=function(o){var i=o.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(i)!=-1},r._writeHeader=function(o,i,s,l,c,f){var u=r.bin.writeUint,d=r.bin.writeUshort,p=l.file;return u(o,i,c==0?67324752:33639248),i+=4,c==1&&(i+=2),d(o,i,20),d(o,i+=2,0),d(o,i+=2,l.cpr?8:0),u(o,i+=2,0),u(o,i+=4,l.crc),u(o,i+=4,p.length),u(o,i+=4,l.usize),d(o,i+=4,r.bin.sizeUTF8(s)),d(o,i+=2,0),i+=2,c==1&&(i+=2,i+=2,u(o,i+=6,f),i+=4),i+=r.bin.writeUTF8(o,i,s),c==0&&(o.set(p,i),i+=p.length),i},r.crc={table:function(){for(var o=new Uint32Array(256),i=0;i<256;i++){for(var s=i,l=0;l<8;l++)1&s?s=3988292384^s>>>1:s>>>=1;o[i]=s}return o}(),update:function(o,i,s,l){for(var c=0;c<l;c++)o=r.crc.table[255&(o^i[s+c])]^o>>>8;return o},crc:function(o,i,s){return 4294967295^r.crc.update(4294967295,o,i,s)}},r.adler=function(o,i,s){for(var l=1,c=0,f=i,u=i+s;f<u;){for(var d=Math.min(f+5552,u);f<d;)c+=l+=o[f++];l%=65521,c%=65521}return c<<16|l},r.bin={readUshort:function(o,i){return o[i]|o[i+1]<<8},writeUshort:function(o,i,s){o[i]=255&s,o[i+1]=s>>8&255},readUint:function(o,i){return 16777216*o[i+3]+(o[i+2]<<16|o[i+1]<<8|o[i])},writeUint:function(o,i,s){o[i]=255&s,o[i+1]=s>>8&255,o[i+2]=s>>16&255,o[i+3]=s>>24&255},readASCII:function(o,i,s){for(var l="",c=0;c<s;c++)l+=String.fromCharCode(o[i+c]);return l},writeASCII:function(o,i,s){for(var l=0;l<s.length;l++)o[i+l]=s.charCodeAt(l)},pad:function(o){return o.length<2?"0"+o:o},readUTF8:function(o,i,s){for(var l,c="",f=0;f<s;f++)c+="%"+r.bin.pad(o[i+f].toString(16));try{l=decodeURIComponent(c)}catch{return r.bin.readASCII(o,i,s)}return l},writeUTF8:function(o,i,s){for(var l=s.length,c=0,f=0;f<l;f++){var u=s.charCodeAt(f);if(!(4294967168&u))o[i+c]=u,c++;else if(!(4294965248&u))o[i+c]=192|u>>6,o[i+c+1]=128|u>>0&63,c+=2;else if(!(4294901760&u))o[i+c]=224|u>>12,o[i+c+1]=128|u>>6&63,o[i+c+2]=128|u>>0&63,c+=3;else{if(4292870144&u)throw"e";o[i+c]=240|u>>18,o[i+c+1]=128|u>>12&63,o[i+c+2]=128|u>>6&63,o[i+c+3]=128|u>>0&63,c+=4}}return c},sizeUTF8:function(o){for(var i=o.length,s=0,l=0;l<i;l++){var c=o.charCodeAt(l);if(!(4294967168&c))s++;else if(!(4294965248&c))s+=2;else if(!(4294901760&c))s+=3;else{if(4292870144&c)throw"e";s+=4}}return s}},r.F={},r.F.deflateRaw=function(o,i,s,l){var c=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][l],f=r.F.U,u=r.F._goodIndex;r.F._hash;var d=r.F._putsE,p=0,m=s<<3,g=0,b=o.length;if(l==0){for(;p<b;)d(i,m,p+(A=Math.min(65535,b-p))==b?1:0),m=r.F._copyExact(o,p,A,i,m+8),p+=A;return m>>>3}var $=f.lits,h=f.strt,y=f.prev,x=0,w=0,C=0,_=0,P=0,v=0;for(b>2&&(h[v=r.F._hash(o,0)]=0),p=0;p<b;p++){if(P=v,p+1<b-2){v=r.F._hash(o,p+1);var j=p+1&32767;y[j]=h[v],h[v]=j}if(g<=p){(x>14e3||w>26697)&&b-p>100&&(g<p&&($[x]=p-g,x+=2,g=p),m=r.F._writeBlock(p==b-1||g==b?1:0,$,x,_,o,C,p-C,i,m),x=w=_=0,C=p);var T=0;p<b-2&&(T=r.F._bestMatch(o,p,y,P,Math.min(c[2],b-p),c[3]));var A=T>>>16,R=65535&T;if(T!=0){R=65535&T;var N=u(A=T>>>16,f.of0);f.lhst[257+N]++;var F=u(R,f.df0);f.dhst[F]++,_+=f.exb[N]+f.dxb[F],$[x]=A<<23|p-g,$[x+1]=R<<16|N<<8|F,x+=2,g=p+A}else f.lhst[o[p]]++;w++}}for(C==p&&o.length!=0||(g<p&&($[x]=p-g,x+=2,g=p),m=r.F._writeBlock(1,$,x,_,o,C,p-C,i,m),x=0,w=0,x=w=_=0,C=p);7&m;)m++;return m>>>3},r.F._bestMatch=function(o,i,s,l,c,f){var u=32767&i,d=s[u],p=u-d+32768&32767;if(d==u||l!=r.F._hash(o,i-p))return 0;for(var m=0,g=0,b=Math.min(32767,i);p<=b&&--f!=0&&d!=u;){if(m==0||o[i+m]==o[i+m-p]){var $=r.F._howLong(o,i,p);if($>m){if(g=p,(m=$)>=c)break;p+2<$&&($=p+2);for(var h=0,y=0;y<$-2;y++){var x=i-p+y+32768&32767,w=x-s[x]+32768&32767;w>h&&(h=w,d=x)}}}p+=(u=d)-(d=s[u])+32768&32767}return m<<16|g},r.F._howLong=function(o,i,s){if(o[i]!=o[i-s]||o[i+1]!=o[i+1-s]||o[i+2]!=o[i+2-s])return 0;var l=i,c=Math.min(o.length,i+258);for(i+=3;i<c&&o[i]==o[i-s];)i++;return i-l},r.F._hash=function(o,i){return(o[i]<<8|o[i+1])+(o[i+2]<<4)&65535},r.saved=0,r.F._writeBlock=function(o,i,s,l,c,f,u,d,p){var m,g,b,$,h,y,x,w,C,_=r.F.U,P=r.F._putsF,v=r.F._putsE;_.lhst[256]++,g=(m=r.F.getTrees())[0],b=m[1],$=m[2],h=m[3],y=m[4],x=m[5],w=m[6],C=m[7];var j=32+(p+3&7?8-(p+3&7):0)+(u<<3),T=l+r.F.contSize(_.fltree,_.lhst)+r.F.contSize(_.fdtree,_.dhst),A=l+r.F.contSize(_.ltree,_.lhst)+r.F.contSize(_.dtree,_.dhst);A+=14+3*x+r.F.contSize(_.itree,_.ihst)+(2*_.ihst[16]+3*_.ihst[17]+7*_.ihst[18]);for(var R=0;R<286;R++)_.lhst[R]=0;for(R=0;R<30;R++)_.dhst[R]=0;for(R=0;R<19;R++)_.ihst[R]=0;var N=j<T&&j<A?0:T<A?1:2;if(P(d,p,o),P(d,p+1,N),p+=3,N==0){for(;7&p;)p++;p=r.F._copyExact(c,f,u,d,p)}else{var F,M;if(N==1&&(F=_.fltree,M=_.fdtree),N==2){r.F.makeCodes(_.ltree,g),r.F.revCodes(_.ltree,g),r.F.makeCodes(_.dtree,b),r.F.revCodes(_.dtree,b),r.F.makeCodes(_.itree,$),r.F.revCodes(_.itree,$),F=_.ltree,M=_.dtree,v(d,p,h-257),v(d,p+=5,y-1),v(d,p+=5,x-4),p+=4;for(var E=0;E<x;E++)v(d,p+3*E,_.itree[1+(_.ordr[E]<<1)]);p+=3*x,p=r.F._codeTiny(w,_.itree,d,p),p=r.F._codeTiny(C,_.itree,d,p)}for(var k=f,D=0;D<s;D+=2){for(var z=i[D],I=z>>>23,Y=k+(8388607&z);k<Y;)p=r.F._writeLit(c[k++],F,d,p);if(I!=0){var B=i[D+1],K=B>>16,G=B>>8&255,V=255&B;v(d,p=r.F._writeLit(257+G,F,d,p),I-_.of0[G]),p+=_.exb[G],P(d,p=r.F._writeLit(V,M,d,p),K-_.df0[V]),p+=_.dxb[V],k+=I}}p=r.F._writeLit(256,F,d,p)}return p},r.F._copyExact=function(o,i,s,l,c){var f=c>>>3;return l[f]=s,l[f+1]=s>>>8,l[f+2]=255-l[f],l[f+3]=255-l[f+1],f+=4,l.set(new Uint8Array(o.buffer,i,s),f),c+(s+4<<3)},r.F.getTrees=function(){for(var o=r.F.U,i=r.F._hufTree(o.lhst,o.ltree,15),s=r.F._hufTree(o.dhst,o.dtree,15),l=[],c=r.F._lenCodes(o.ltree,l),f=[],u=r.F._lenCodes(o.dtree,f),d=0;d<l.length;d+=2)o.ihst[l[d]]++;for(d=0;d<f.length;d+=2)o.ihst[f[d]]++;for(var p=r.F._hufTree(o.ihst,o.itree,7),m=19;m>4&&o.itree[1+(o.ordr[m-1]<<1)]==0;)m--;return[i,s,p,c,u,m,l,f]},r.F.getSecond=function(o){for(var i=[],s=0;s<o.length;s+=2)i.push(o[s+1]);return i},r.F.nonZero=function(o){for(var i="",s=0;s<o.length;s+=2)o[s+1]!=0&&(i+=(s>>1)+",");return i},r.F.contSize=function(o,i){for(var s=0,l=0;l<i.length;l++)s+=i[l]*o[1+(l<<1)];return s},r.F._codeTiny=function(o,i,s,l){for(var c=0;c<o.length;c+=2){var f=o[c],u=o[c+1];l=r.F._writeLit(f,i,s,l);var d=f==16?2:f==17?3:7;f>15&&(r.F._putsE(s,l,u,d),l+=d)}return l},r.F._lenCodes=function(o,i){for(var s=o.length;s!=2&&o[s-1]==0;)s-=2;for(var l=0;l<s;l+=2){var c=o[l+1],f=l+3<s?o[l+3]:-1,u=l+5<s?o[l+5]:-1,d=l==0?-1:o[l-1];if(c==0&&f==c&&u==c){for(var p=l+5;p+2<s&&o[p+2]==c;)p+=2;(m=Math.min(p+1-l>>>1,138))<11?i.push(17,m-3):i.push(18,m-11),l+=2*m-2}else if(c==d&&f==c&&u==c){for(p=l+5;p+2<s&&o[p+2]==c;)p+=2;var m=Math.min(p+1-l>>>1,6);i.push(16,m-3),l+=2*m-2}else i.push(c,0)}return s>>>1},r.F._hufTree=function(o,i,s){var l=[],c=o.length,f=i.length,u=0;for(u=0;u<f;u+=2)i[u]=0,i[u+1]=0;for(u=0;u<c;u++)o[u]!=0&&l.push({lit:u,f:o[u]});var d=l.length,p=l.slice(0);if(d==0)return 0;if(d==1){var m=l[0].lit;return p=m==0?1:0,i[1+(m<<1)]=1,i[1+(p<<1)]=1,1}l.sort(function(w,C){return w.f-C.f});var g=l[0],b=l[1],$=0,h=1,y=2;for(l[0]={lit:-1,f:g.f+b.f,l:g,r:b,d:0};h!=d-1;)g=$!=h&&(y==d||l[$].f<l[y].f)?l[$++]:l[y++],b=$!=h&&(y==d||l[$].f<l[y].f)?l[$++]:l[y++],l[h++]={lit:-1,f:g.f+b.f,l:g,r:b};var x=r.F.setDepth(l[h-1],0);for(x>s&&(r.F.restrictDepth(p,s,x),x=s),u=0;u<d;u++)i[1+(p[u].lit<<1)]=p[u].d;return x},r.F.setDepth=function(o,i){return o.lit!=-1?(o.d=i,i):Math.max(r.F.setDepth(o.l,i+1),r.F.setDepth(o.r,i+1))},r.F.restrictDepth=function(o,i,s){var l=0,c=1<<s-i,f=0;for(o.sort(function(d,p){return p.d==d.d?d.f-p.f:p.d-d.d}),l=0;l<o.length&&o[l].d>i;l++){var u=o[l].d;o[l].d=i,f+=c-(1<<s-u)}for(f>>>=s-i;f>0;)(u=o[l].d)<i?(o[l].d++,f-=1<<i-u-1):l++;for(;l>=0;l--)o[l].d==i&&f<0&&(o[l].d--,f++);f!=0&&console.log("debt left")},r.F._goodIndex=function(o,i){var s=0;return i[16|s]<=o&&(s|=16),i[8|s]<=o&&(s|=8),i[4|s]<=o&&(s|=4),i[2|s]<=o&&(s|=2),i[1|s]<=o&&(s|=1),s},r.F._writeLit=function(o,i,s,l){return r.F._putsF(s,l,i[o<<1]),l+i[1+(o<<1)]},r.F.inflate=function(o,i){var s=Uint8Array;if(o[0]==3&&o[1]==0)return i||new s(0);var l=r.F,c=l._bitsF,f=l._bitsE,u=l._decodeTiny,d=l.makeCodes,p=l.codes2map,m=l._get17,g=l.U,b=i==null;b&&(i=new s(o.length>>>2<<3));for(var $,h,y=0,x=0,w=0,C=0,_=0,P=0,v=0,j=0,T=0;y==0;)if(y=c(o,T,1),x=c(o,T+1,2),T+=3,x!=0){if(b&&(i=r.F._check(i,j+(1<<17))),x==1&&($=g.flmap,h=g.fdmap,P=511,v=31),x==2){w=f(o,T,5)+257,C=f(o,T+5,5)+1,_=f(o,T+10,4)+4,T+=14;for(var A=0;A<38;A+=2)g.itree[A]=0,g.itree[A+1]=0;var R=1;for(A=0;A<_;A++){var N=f(o,T+3*A,3);g.itree[1+(g.ordr[A]<<1)]=N,N>R&&(R=N)}T+=3*_,d(g.itree,R),p(g.itree,R,g.imap),$=g.lmap,h=g.dmap,T=u(g.imap,(1<<R)-1,w+C,o,T,g.ttree);var F=l._copyOut(g.ttree,0,w,g.ltree);P=(1<<F)-1;var M=l._copyOut(g.ttree,w,C,g.dtree);v=(1<<M)-1,d(g.ltree,F),p(g.ltree,F,$),d(g.dtree,M),p(g.dtree,M,h)}for(;;){var E=$[m(o,T)&P];T+=15&E;var k=E>>>4;if(!(k>>>8))i[j++]=k;else{if(k==256)break;var D=j+k-254;if(k>264){var z=g.ldef[k-257];D=j+(z>>>3)+f(o,T,7&z),T+=7&z}var I=h[m(o,T)&v];T+=15&I;var Y=I>>>4,B=g.ddef[Y],K=(B>>>4)+c(o,T,15&B);for(T+=15&B,b&&(i=r.F._check(i,j+(1<<17)));j<D;)i[j]=i[j++-K],i[j]=i[j++-K],i[j]=i[j++-K],i[j]=i[j++-K];j=D}}}else{7&T&&(T+=8-(7&T));var G=4+(T>>>3),V=o[G-4]|o[G-3]<<8;b&&(i=r.F._check(i,j+V)),i.set(new s(o.buffer,o.byteOffset+G,V),j),T=G+V<<3,j+=V}return i.length==j?i:i.slice(0,j)},r.F._check=function(o,i){var s=o.length;if(i<=s)return o;var l=new Uint8Array(Math.max(s<<1,i));return l.set(o,0),l},r.F._decodeTiny=function(o,i,s,l,c,f){for(var u=r.F._bitsE,d=r.F._get17,p=0;p<s;){var m=o[d(l,c)&i];c+=15&m;var g=m>>>4;if(g<=15)f[p]=g,p++;else{var b=0,$=0;g==16?($=3+u(l,c,2),c+=2,b=f[p-1]):g==17?($=3+u(l,c,3),c+=3):g==18&&($=11+u(l,c,7),c+=7);for(var h=p+$;p<h;)f[p]=b,p++}}return c},r.F._copyOut=function(o,i,s,l){for(var c=0,f=0,u=l.length>>>1;f<s;){var d=o[f+i];l[f<<1]=0,l[1+(f<<1)]=d,d>c&&(c=d),f++}for(;f<u;)l[f<<1]=0,l[1+(f<<1)]=0,f++;return c},r.F.makeCodes=function(o,i){for(var s,l,c,f,u=r.F.U,d=o.length,p=u.bl_count,m=0;m<=i;m++)p[m]=0;for(m=1;m<d;m+=2)p[o[m]]++;var g=u.next_code;for(s=0,p[0]=0,l=1;l<=i;l++)s=s+p[l-1]<<1,g[l]=s;for(c=0;c<d;c+=2)(f=o[c+1])!=0&&(o[c]=g[f],g[f]++)},r.F.codes2map=function(o,i,s){for(var l=o.length,c=r.F.U.rev15,f=0;f<l;f+=2)if(o[f+1]!=0)for(var u=f>>1,d=o[f+1],p=u<<4|d,m=i-d,g=o[f]<<m,b=g+(1<<m);g!=b;)s[c[g]>>>15-i]=p,g++},r.F.revCodes=function(o,i){for(var s=r.F.U.rev15,l=15-i,c=0;c<o.length;c+=2){var f=o[c]<<i-o[c+1];o[c]=s[f]>>>l}},r.F._putsE=function(o,i,s){s<<=7&i;var l=i>>>3;o[l]|=s,o[l+1]|=s>>>8},r.F._putsF=function(o,i,s){s<<=7&i;var l=i>>>3;o[l]|=s,o[l+1]|=s>>>8,o[l+2]|=s>>>16},r.F._bitsE=function(o,i,s){return(o[i>>>3]|o[1+(i>>>3)]<<8)>>>(7&i)&(1<<s)-1},r.F._bitsF=function(o,i,s){return(o[i>>>3]|o[1+(i>>>3)]<<8|o[2+(i>>>3)]<<16)>>>(7&i)&(1<<s)-1},r.F._get17=function(o,i){return(o[i>>>3]|o[1+(i>>>3)]<<8|o[2+(i>>>3)]<<16)>>>(7&i)},r.F._get25=function(o,i){return(o[i>>>3]|o[1+(i>>>3)]<<8|o[2+(i>>>3)]<<16|o[3+(i>>>3)]<<24)>>>(7&i)},r.F.U=(t=Uint16Array,n=Uint32Array,{next_code:new t(16),bl_count:new t(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new t(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new n(32),flmap:new t(512),fltree:[],fdmap:new t(32),fdtree:[],lmap:new t(32768),ltree:[],ttree:[],dmap:new t(32768),dtree:[],imap:new t(512),itree:[],rev15:new t(32768),lhst:new n(286),dhst:new n(30),ihst:new n(19),lits:new n(15e3),strt:new t(65536),prev:new t(32768)}),function(){for(var o=r.F.U,i=0;i<32768;i++){var s=i;s=(4278255360&(s=(4042322160&(s=(3435973836&(s=(2863311530&s)>>>1|(1431655765&s)<<1))>>>2|(858993459&s)<<2))>>>4|(252645135&s)<<4))>>>8|(16711935&s)<<8,o.rev15[i]=(s>>>16|s<<16)>>>17}function l(c,f,u){for(;f--!=0;)c.push(0,u)}for(i=0;i<32;i++)o.ldef[i]=o.of0[i]<<3|o.exb[i],o.ddef[i]=o.df0[i]<<4|o.dxb[i];l(o.fltree,144,8),l(o.fltree,112,9),l(o.fltree,24,7),l(o.fltree,8,8),r.F.makeCodes(o.fltree,9),r.F.codes2map(o.fltree,9,o.flmap),r.F.revCodes(o.fltree,9),l(o.fdtree,32,5),r.F.makeCodes(o.fdtree,5),r.F.codes2map(o.fdtree,5,o.fdmap),r.F.revCodes(o.fdtree,5),l(o.itree,19,0),l(o.ltree,286,0),l(o.dtree,30,0),l(o.ttree,320,0)}()})();var gP=pP({__proto__:null,default:pc},[pc]);const yn=function(){var e={nextZero(u,d){for(;u[d]!=0;)d++;return d},readUshort:(u,d)=>u[d]<<8|u[d+1],writeUshort(u,d,p){u[d]=p>>8&255,u[d+1]=255&p},readUint:(u,d)=>16777216*u[d]+(u[d+1]<<16|u[d+2]<<8|u[d+3]),writeUint(u,d,p){u[d]=p>>24&255,u[d+1]=p>>16&255,u[d+2]=p>>8&255,u[d+3]=255&p},readASCII(u,d,p){let m="";for(let g=0;g<p;g++)m+=String.fromCharCode(u[d+g]);return m},writeASCII(u,d,p){for(let m=0;m<p.length;m++)u[d+m]=p.charCodeAt(m)},readBytes(u,d,p){const m=[];for(let g=0;g<p;g++)m.push(u[d+g]);return m},pad:u=>u.length<2?`0${u}`:u,readUTF8(u,d,p){let m,g="";for(let b=0;b<p;b++)g+=`%${e.pad(u[d+b].toString(16))}`;try{m=decodeURIComponent(g)}catch{return e.readASCII(u,d,p)}return m}};function t(u,d,p,m){const g=d*p,b=i(m),$=Math.ceil(d*b/8),h=new Uint8Array(4*g),y=new Uint32Array(h.buffer),{ctype:x}=m,{depth:w}=m,C=e.readUshort;if(x==6){const z=g<<2;if(w==8)for(var _=0;_<z;_+=4)h[_]=u[_],h[_+1]=u[_+1],h[_+2]=u[_+2],h[_+3]=u[_+3];if(w==16)for(_=0;_<z;_++)h[_]=u[_<<1]}else if(x==2){const z=m.tabs.tRNS;if(z==null){if(w==8)for(_=0;_<g;_++){var P=3*_;y[_]=255<<24|u[P+2]<<16|u[P+1]<<8|u[P]}if(w==16)for(_=0;_<g;_++)P=6*_,y[_]=255<<24|u[P+4]<<16|u[P+2]<<8|u[P]}else{var v=z[0];const I=z[1],Y=z[2];if(w==8)for(_=0;_<g;_++){var j=_<<2;P=3*_,y[_]=255<<24|u[P+2]<<16|u[P+1]<<8|u[P],u[P]==v&&u[P+1]==I&&u[P+2]==Y&&(h[j+3]=0)}if(w==16)for(_=0;_<g;_++)j=_<<2,P=6*_,y[_]=255<<24|u[P+4]<<16|u[P+2]<<8|u[P],C(u,P)==v&&C(u,P+2)==I&&C(u,P+4)==Y&&(h[j+3]=0)}}else if(x==3){const z=m.tabs.PLTE,I=m.tabs.tRNS,Y=I?I.length:0;if(w==1)for(var T=0;T<p;T++){var A=T*$,R=T*d;for(_=0;_<d;_++){j=R+_<<2;var N=3*(F=u[A+(_>>3)]>>7-((7&_)<<0)&1);h[j]=z[N],h[j+1]=z[N+1],h[j+2]=z[N+2],h[j+3]=F<Y?I[F]:255}}if(w==2)for(T=0;T<p;T++)for(A=T*$,R=T*d,_=0;_<d;_++)j=R+_<<2,N=3*(F=u[A+(_>>2)]>>6-((3&_)<<1)&3),h[j]=z[N],h[j+1]=z[N+1],h[j+2]=z[N+2],h[j+3]=F<Y?I[F]:255;if(w==4)for(T=0;T<p;T++)for(A=T*$,R=T*d,_=0;_<d;_++)j=R+_<<2,N=3*(F=u[A+(_>>1)]>>4-((1&_)<<2)&15),h[j]=z[N],h[j+1]=z[N+1],h[j+2]=z[N+2],h[j+3]=F<Y?I[F]:255;if(w==8)for(_=0;_<g;_++){var F;j=_<<2,N=3*(F=u[_]),h[j]=z[N],h[j+1]=z[N+1],h[j+2]=z[N+2],h[j+3]=F<Y?I[F]:255}}else if(x==4){if(w==8)for(_=0;_<g;_++){j=_<<2;var M=u[E=_<<1];h[j]=M,h[j+1]=M,h[j+2]=M,h[j+3]=u[E+1]}if(w==16)for(_=0;_<g;_++){var E;j=_<<2,M=u[E=_<<2],h[j]=M,h[j+1]=M,h[j+2]=M,h[j+3]=u[E+2]}}else if(x==0)for(v=m.tabs.tRNS?m.tabs.tRNS:-1,T=0;T<p;T++){const z=T*$,I=T*d;if(w==1)for(var k=0;k<d;k++){var D=(M=255*(u[z+(k>>>3)]>>>7-(7&k)&1))==255*v?0:255;y[I+k]=D<<24|M<<16|M<<8|M}else if(w==2)for(k=0;k<d;k++)D=(M=85*(u[z+(k>>>2)]>>>6-((3&k)<<1)&3))==85*v?0:255,y[I+k]=D<<24|M<<16|M<<8|M;else if(w==4)for(k=0;k<d;k++)D=(M=17*(u[z+(k>>>1)]>>>4-((1&k)<<2)&15))==17*v?0:255,y[I+k]=D<<24|M<<16|M<<8|M;else if(w==8)for(k=0;k<d;k++)D=(M=u[z+k])==v?0:255,y[I+k]=D<<24|M<<16|M<<8|M;else if(w==16)for(k=0;k<d;k++)M=u[z+(k<<1)],D=C(u,z+(k<<1))==v?0:255,y[I+k]=D<<24|M<<16|M<<8|M}return h}function n(u,d,p,m){const g=i(u),b=Math.ceil(p*g/8),$=new Uint8Array((b+1+u.interlace)*m);return d=u.tabs.CgBI?o(d,$):r(d,$),u.interlace==0?d=s(d,u,0,p,m):u.interlace==1&&(d=function(y,x){const w=x.width,C=x.height,_=i(x),P=_>>3,v=Math.ceil(w*_/8),j=new Uint8Array(C*v);let T=0;const A=[0,0,4,0,2,0,1],R=[0,4,0,2,0,1,0],N=[8,8,8,4,4,2,2],F=[8,8,4,4,2,2,1];let M=0;for(;M<7;){const k=N[M],D=F[M];let z=0,I=0,Y=A[M];for(;Y<C;)Y+=k,I++;let B=R[M];for(;B<w;)B+=D,z++;const K=Math.ceil(z*_/8);s(y,x,T,z,I);let G=0,V=A[M];for(;V<C;){let Q=R[M],q=T+G*K<<3;for(;Q<w;){var E;if(_==1&&(E=(E=y[q>>3])>>7-(7&q)&1,j[V*v+(Q>>3)]|=E<<7-((7&Q)<<0)),_==2&&(E=(E=y[q>>3])>>6-(7&q)&3,j[V*v+(Q>>2)]|=E<<6-((3&Q)<<1)),_==4&&(E=(E=y[q>>3])>>4-(7&q)&15,j[V*v+(Q>>1)]|=E<<4-((1&Q)<<2)),_>=8){const X=V*v+Q*P;for(let oe=0;oe<P;oe++)j[X+oe]=y[(q>>3)+oe]}q+=_,Q+=D}G++,V+=k}z*I!=0&&(T+=I*(1+K)),M+=1}return j}(d,u)),d}function r(u,d){return o(new Uint8Array(u.buffer,2,u.length-6),d)}var o=function(){const u={H:{}};return u.H.N=function(d,p){const m=Uint8Array;let g,b,$=0,h=0,y=0,x=0,w=0,C=0,_=0,P=0,v=0;if(d[0]==3&&d[1]==0)return p||new m(0);const j=u.H,T=j.b,A=j.e,R=j.R,N=j.n,F=j.A,M=j.Z,E=j.m,k=p==null;for(k&&(p=new m(d.length>>>2<<5));$==0;)if($=T(d,v,1),h=T(d,v+1,2),v+=3,h!=0){if(k&&(p=u.H.W(p,P+(1<<17))),h==1&&(g=E.J,b=E.h,C=511,_=31),h==2){y=A(d,v,5)+257,x=A(d,v+5,5)+1,w=A(d,v+10,4)+4,v+=14;let z=1;for(var D=0;D<38;D+=2)E.Q[D]=0,E.Q[D+1]=0;for(D=0;D<w;D++){const B=A(d,v+3*D,3);E.Q[1+(E.X[D]<<1)]=B,B>z&&(z=B)}v+=3*w,N(E.Q,z),F(E.Q,z,E.u),g=E.w,b=E.d,v=R(E.u,(1<<z)-1,y+x,d,v,E.v);const I=j.V(E.v,0,y,E.C);C=(1<<I)-1;const Y=j.V(E.v,y,x,E.D);_=(1<<Y)-1,N(E.C,I),F(E.C,I,g),N(E.D,Y),F(E.D,Y,b)}for(;;){const z=g[M(d,v)&C];v+=15&z;const I=z>>>4;if(!(I>>>8))p[P++]=I;else{if(I==256)break;{let Y=P+I-254;if(I>264){const Q=E.q[I-257];Y=P+(Q>>>3)+A(d,v,7&Q),v+=7&Q}const B=b[M(d,v)&_];v+=15&B;const K=B>>>4,G=E.c[K],V=(G>>>4)+T(d,v,15&G);for(v+=15&G;P<Y;)p[P]=p[P++-V],p[P]=p[P++-V],p[P]=p[P++-V],p[P]=p[P++-V];P=Y}}}}else{7&v&&(v+=8-(7&v));const z=4+(v>>>3),I=d[z-4]|d[z-3]<<8;k&&(p=u.H.W(p,P+I)),p.set(new m(d.buffer,d.byteOffset+z,I),P),v=z+I<<3,P+=I}return p.length==P?p:p.slice(0,P)},u.H.W=function(d,p){const m=d.length;if(p<=m)return d;const g=new Uint8Array(m<<1);return g.set(d,0),g},u.H.R=function(d,p,m,g,b,$){const h=u.H.e,y=u.H.Z;let x=0;for(;x<m;){const w=d[y(g,b)&p];b+=15&w;const C=w>>>4;if(C<=15)$[x]=C,x++;else{let _=0,P=0;C==16?(P=3+h(g,b,2),b+=2,_=$[x-1]):C==17?(P=3+h(g,b,3),b+=3):C==18&&(P=11+h(g,b,7),b+=7);const v=x+P;for(;x<v;)$[x]=_,x++}}return b},u.H.V=function(d,p,m,g){let b=0,$=0;const h=g.length>>>1;for(;$<m;){const y=d[$+p];g[$<<1]=0,g[1+($<<1)]=y,y>b&&(b=y),$++}for(;$<h;)g[$<<1]=0,g[1+($<<1)]=0,$++;return b},u.H.n=function(d,p){const m=u.H.m,g=d.length;let b,$,h,y;const x=m.j;for(var w=0;w<=p;w++)x[w]=0;for(w=1;w<g;w+=2)x[d[w]]++;const C=m.K;for(b=0,x[0]=0,$=1;$<=p;$++)b=b+x[$-1]<<1,C[$]=b;for(h=0;h<g;h+=2)y=d[h+1],y!=0&&(d[h]=C[y],C[y]++)},u.H.A=function(d,p,m){const g=d.length,b=u.H.m.r;for(let $=0;$<g;$+=2)if(d[$+1]!=0){const h=$>>1,y=d[$+1],x=h<<4|y,w=p-y;let C=d[$]<<w;const _=C+(1<<w);for(;C!=_;)m[b[C]>>>15-p]=x,C++}},u.H.l=function(d,p){const m=u.H.m.r,g=15-p;for(let b=0;b<d.length;b+=2){const $=d[b]<<p-d[b+1];d[b]=m[$]>>>g}},u.H.M=function(d,p,m){m<<=7&p;const g=p>>>3;d[g]|=m,d[g+1]|=m>>>8},u.H.I=function(d,p,m){m<<=7&p;const g=p>>>3;d[g]|=m,d[g+1]|=m>>>8,d[g+2]|=m>>>16},u.H.e=function(d,p,m){return(d[p>>>3]|d[1+(p>>>3)]<<8)>>>(7&p)&(1<<m)-1},u.H.b=function(d,p,m){return(d[p>>>3]|d[1+(p>>>3)]<<8|d[2+(p>>>3)]<<16)>>>(7&p)&(1<<m)-1},u.H.Z=function(d,p){return(d[p>>>3]|d[1+(p>>>3)]<<8|d[2+(p>>>3)]<<16)>>>(7&p)},u.H.i=function(d,p){return(d[p>>>3]|d[1+(p>>>3)]<<8|d[2+(p>>>3)]<<16|d[3+(p>>>3)]<<24)>>>(7&p)},u.H.m=function(){const d=Uint16Array,p=Uint32Array;return{K:new d(16),j:new d(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new d(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new p(32),J:new d(512),_:[],h:new d(32),$:[],w:new d(32768),C:[],v:[],d:new d(32768),D:[],u:new d(512),Q:[],r:new d(32768),s:new p(286),Y:new p(30),a:new p(19),t:new p(15e3),k:new d(65536),g:new d(32768)}}(),function(){const d=u.H.m;for(var p=0;p<32768;p++){let g=p;g=(2863311530&g)>>>1|(1431655765&g)<<1,g=(3435973836&g)>>>2|(858993459&g)<<2,g=(4042322160&g)>>>4|(252645135&g)<<4,g=(4278255360&g)>>>8|(16711935&g)<<8,d.r[p]=(g>>>16|g<<16)>>>17}function m(g,b,$){for(;b--!=0;)g.push(0,$)}for(p=0;p<32;p++)d.q[p]=d.S[p]<<3|d.T[p],d.c[p]=d.p[p]<<4|d.z[p];m(d._,144,8),m(d._,112,9),m(d._,24,7),m(d._,8,8),u.H.n(d._,9),u.H.A(d._,9,d.J),u.H.l(d._,9),m(d.$,32,5),u.H.n(d.$,5),u.H.A(d.$,5,d.h),u.H.l(d.$,5),m(d.Q,19,0),m(d.C,286,0),m(d.D,30,0),m(d.v,320,0)}(),u.H.N}();function i(u){return[1,null,3,1,2,null,4][u.ctype]*u.depth}function s(u,d,p,m,g){let b=i(d);const $=Math.ceil(m*b/8);let h,y;b=Math.ceil(b/8);let x=u[p],w=0;if(x>1&&(u[p]=[0,0,1][x-2]),x==3)for(w=b;w<$;w++)u[w+1]=u[w+1]+(u[w+1-b]>>>1)&255;for(let C=0;C<g;C++)if(h=p+C*$,y=h+C+1,x=u[y-1],w=0,x==0)for(;w<$;w++)u[h+w]=u[y+w];else if(x==1){for(;w<b;w++)u[h+w]=u[y+w];for(;w<$;w++)u[h+w]=u[y+w]+u[h+w-b]}else if(x==2)for(;w<$;w++)u[h+w]=u[y+w]+u[h+w-$];else if(x==3){for(;w<b;w++)u[h+w]=u[y+w]+(u[h+w-$]>>>1);for(;w<$;w++)u[h+w]=u[y+w]+(u[h+w-$]+u[h+w-b]>>>1)}else{for(;w<b;w++)u[h+w]=u[y+w]+l(0,u[h+w-$],0);for(;w<$;w++)u[h+w]=u[y+w]+l(u[h+w-b],u[h+w-$],u[h+w-b-$])}return u}function l(u,d,p){const m=u+d-p,g=m-u,b=m-d,$=m-p;return g*g<=b*b&&g*g<=$*$?u:b*b<=$*$?d:p}function c(u,d,p){p.width=e.readUint(u,d),d+=4,p.height=e.readUint(u,d),d+=4,p.depth=u[d],d++,p.ctype=u[d],d++,p.compress=u[d],d++,p.filter=u[d],d++,p.interlace=u[d],d++}function f(u,d,p,m,g,b,$,h,y){const x=Math.min(d,g),w=Math.min(p,b);let C=0,_=0;for(let M=0;M<w;M++)for(let E=0;E<x;E++)if($>=0&&h>=0?(C=M*d+E<<2,_=(h+M)*g+$+E<<2):(C=(-h+M)*d-$+E<<2,_=M*g+E<<2),y==0)m[_]=u[C],m[_+1]=u[C+1],m[_+2]=u[C+2],m[_+3]=u[C+3];else if(y==1){var P=u[C+3]*.00392156862745098,v=u[C]*P,j=u[C+1]*P,T=u[C+2]*P,A=m[_+3]*(1/255),R=m[_]*A,N=m[_+1]*A,F=m[_+2]*A;const k=1-P,D=P+A*k,z=D==0?0:1/D;m[_+3]=255*D,m[_+0]=(v+R*k)*z,m[_+1]=(j+N*k)*z,m[_+2]=(T+F*k)*z}else if(y==2)P=u[C+3],v=u[C],j=u[C+1],T=u[C+2],A=m[_+3],R=m[_],N=m[_+1],F=m[_+2],P==A&&v==R&&j==N&&T==F?(m[_]=0,m[_+1]=0,m[_+2]=0,m[_+3]=0):(m[_]=v,m[_+1]=j,m[_+2]=T,m[_+3]=P);else if(y==3){if(P=u[C+3],v=u[C],j=u[C+1],T=u[C+2],A=m[_+3],R=m[_],N=m[_+1],F=m[_+2],P==A&&v==R&&j==N&&T==F)continue;if(P<220&&A>20)return!1}return!0}return{decode:function(d){const p=new Uint8Array(d);let m=8;const g=e,b=g.readUshort,$=g.readUint,h={tabs:{},frames:[]},y=new Uint8Array(p.length);let x,w=0,C=0;const _=[137,80,78,71,13,10,26,10];for(var P=0;P<8;P++)if(p[P]!=_[P])throw"The input is not a PNG file!";for(;m<p.length;){const M=g.readUint(p,m);m+=4;const E=g.readASCII(p,m,4);if(m+=4,E=="IHDR")c(p,m,h);else if(E=="iCCP"){for(var v=m;p[v]!=0;)v++;g.readASCII(p,m,v-m),p[v+1];const k=p.slice(v+2,m+M);let D=null;try{D=r(k)}catch{D=o(k)}h.tabs[E]=D}else if(E=="CgBI")h.tabs[E]=p.slice(m,m+4);else if(E=="IDAT"){for(P=0;P<M;P++)y[w+P]=p[m+P];w+=M}else if(E=="acTL")h.tabs[E]={num_frames:$(p,m),num_plays:$(p,m+4)},x=new Uint8Array(p.length);else if(E=="fcTL"){C!=0&&((F=h.frames[h.frames.length-1]).data=n(h,x.slice(0,C),F.rect.width,F.rect.height),C=0);const k={x:$(p,m+12),y:$(p,m+16),width:$(p,m+4),height:$(p,m+8)};let D=b(p,m+22);D=b(p,m+20)/(D==0?100:D);const z={rect:k,delay:Math.round(1e3*D),dispose:p[m+24],blend:p[m+25]};h.frames.push(z)}else if(E=="fdAT"){for(P=0;P<M-4;P++)x[C+P]=p[m+P+4];C+=M-4}else if(E=="pHYs")h.tabs[E]=[g.readUint(p,m),g.readUint(p,m+4),p[m+8]];else if(E=="cHRM")for(h.tabs[E]=[],P=0;P<8;P++)h.tabs[E].push(g.readUint(p,m+4*P));else if(E=="tEXt"||E=="zTXt"){h.tabs[E]==null&&(h.tabs[E]={});var j=g.nextZero(p,m),T=g.readASCII(p,m,j-m),A=m+M-j-1;if(E=="tEXt")N=g.readASCII(p,j+1,A);else{var R=r(p.slice(j+2,j+2+A));N=g.readUTF8(R,0,R.length)}h.tabs[E][T]=N}else if(E=="iTXt"){h.tabs[E]==null&&(h.tabs[E]={}),j=0,v=m,j=g.nextZero(p,v),T=g.readASCII(p,v,j-v);const k=p[v=j+1];var N;p[v+1],v+=2,j=g.nextZero(p,v),g.readASCII(p,v,j-v),v=j+1,j=g.nextZero(p,v),g.readUTF8(p,v,j-v),A=M-((v=j+1)-m),k==0?N=g.readUTF8(p,v,A):(R=r(p.slice(v,v+A)),N=g.readUTF8(R,0,R.length)),h.tabs[E][T]=N}else if(E=="PLTE")h.tabs[E]=g.readBytes(p,m,M);else if(E=="hIST"){const k=h.tabs.PLTE.length/3;for(h.tabs[E]=[],P=0;P<k;P++)h.tabs[E].push(b(p,m+2*P))}else if(E=="tRNS")h.ctype==3?h.tabs[E]=g.readBytes(p,m,M):h.ctype==0?h.tabs[E]=b(p,m):h.ctype==2&&(h.tabs[E]=[b(p,m),b(p,m+2),b(p,m+4)]);else if(E=="gAMA")h.tabs[E]=g.readUint(p,m)/1e5;else if(E=="sRGB")h.tabs[E]=p[m];else if(E=="bKGD")h.ctype==0||h.ctype==4?h.tabs[E]=[b(p,m)]:h.ctype==2||h.ctype==6?h.tabs[E]=[b(p,m),b(p,m+2),b(p,m+4)]:h.ctype==3&&(h.tabs[E]=p[m]);else if(E=="IEND")break;m+=M,g.readUint(p,m),m+=4}var F;return C!=0&&((F=h.frames[h.frames.length-1]).data=n(h,x.slice(0,C),F.rect.width,F.rect.height)),h.data=n(h,y,h.width,h.height),delete h.compress,delete h.interlace,delete h.filter,h},toRGBA8:function(d){const p=d.width,m=d.height;if(d.tabs.acTL==null)return[t(d.data,p,m,d).buffer];const g=[];d.frames[0].data==null&&(d.frames[0].data=d.data);const b=p*m*4,$=new Uint8Array(b),h=new Uint8Array(b),y=new Uint8Array(b);for(let w=0;w<d.frames.length;w++){const C=d.frames[w],_=C.rect.x,P=C.rect.y,v=C.rect.width,j=C.rect.height,T=t(C.data,v,j,d);if(w!=0)for(var x=0;x<b;x++)y[x]=$[x];if(C.blend==0?f(T,v,j,$,p,m,_,P,0):C.blend==1&&f(T,v,j,$,p,m,_,P,1),g.push($.buffer.slice(0)),C.dispose!=0){if(C.dispose==1)f(h,v,j,$,p,m,_,P,0);else if(C.dispose==2)for(x=0;x<b;x++)$[x]=y[x]}}return g},_paeth:l,_copyTile:f,_bin:e}}();(function(){const{_copyTile:e}=yn,{_bin:t}=yn,n=yn._paeth;var r={table:function(){const v=new Uint32Array(256);for(let j=0;j<256;j++){let T=j;for(let A=0;A<8;A++)1&T?T=3988292384^T>>>1:T>>>=1;v[j]=T}return v}(),update(v,j,T,A){for(let R=0;R<A;R++)v=r.table[255&(v^j[T+R])]^v>>>8;return v},crc:(v,j,T)=>4294967295^r.update(4294967295,v,j,T)};function o(v,j,T,A){j[T]+=v[0]*A>>4,j[T+1]+=v[1]*A>>4,j[T+2]+=v[2]*A>>4,j[T+3]+=v[3]*A>>4}function i(v){return Math.max(0,Math.min(255,v))}function s(v,j){const T=v[0]-j[0],A=v[1]-j[1],R=v[2]-j[2],N=v[3]-j[3];return T*T+A*A+R*R+N*N}function l(v,j,T,A,R,N,F){F==null&&(F=1);const M=A.length,E=[];for(var k=0;k<M;k++){const V=A[k];E.push([V>>>0&255,V>>>8&255,V>>>16&255,V>>>24&255])}for(k=0;k<M;k++){let V=4294967295;for(var D=0,z=0;z<M;z++){var I=s(E[k],E[z]);z!=k&&I<V&&(V=I,D=z)}}const Y=new Uint32Array(R.buffer),B=new Int16Array(j*T*4),K=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(k=0;k<K.length;k++)K[k]=255*((K[k]+.5)/16-.5);for(let V=0;V<T;V++)for(let Q=0;Q<j;Q++){var G;k=4*(V*j+Q),F!=2?G=[i(v[k]+B[k]),i(v[k+1]+B[k+1]),i(v[k+2]+B[k+2]),i(v[k+3]+B[k+3])]:(I=K[4*(3&V)+(3&Q)],G=[i(v[k]+I),i(v[k+1]+I),i(v[k+2]+I),i(v[k+3]+I)]),D=0;let q=16777215;for(z=0;z<M;z++){const se=s(G,E[z]);se<q&&(q=se,D=z)}const X=E[D],oe=[G[0]-X[0],G[1]-X[1],G[2]-X[2],G[3]-X[3]];F==1&&(Q!=j-1&&o(oe,B,k+4,7),V!=T-1&&(Q!=0&&o(oe,B,k+4*j-4,3),o(oe,B,k+4*j,5),Q!=j-1&&o(oe,B,k+4*j+4,1))),N[k>>2]=D,Y[k>>2]=A[D]}}function c(v,j,T,A,R){R==null&&(R={});const{crc:N}=r,F=t.writeUint,M=t.writeUshort,E=t.writeASCII;let k=8;const D=v.frames.length>1;let z,I=!1,Y=33+(D?20:0);if(R.sRGB!=null&&(Y+=13),R.pHYs!=null&&(Y+=21),R.iCCP!=null&&(z=pako.deflate(R.iCCP),Y+=21+z.length+4),v.ctype==3){for(var B=v.plte.length,K=0;K<B;K++)v.plte[K]>>>24!=255&&(I=!0);Y+=8+3*B+4+(I?8+1*B+4:0)}for(var G=0;G<v.frames.length;G++)D&&(Y+=38),Y+=(X=v.frames[G]).cimg.length+12,G!=0&&(Y+=4);Y+=12;const V=new Uint8Array(Y),Q=[137,80,78,71,13,10,26,10];for(K=0;K<8;K++)V[K]=Q[K];if(F(V,k,13),k+=4,E(V,k,"IHDR"),k+=4,F(V,k,j),k+=4,F(V,k,T),k+=4,V[k]=v.depth,k++,V[k]=v.ctype,k++,V[k]=0,k++,V[k]=0,k++,V[k]=0,k++,F(V,k,N(V,k-17,17)),k+=4,R.sRGB!=null&&(F(V,k,1),k+=4,E(V,k,"sRGB"),k+=4,V[k]=R.sRGB,k++,F(V,k,N(V,k-5,5)),k+=4),R.iCCP!=null){const oe=13+z.length;F(V,k,oe),k+=4,E(V,k,"iCCP"),k+=4,E(V,k,"ICC profile"),k+=11,k+=2,V.set(z,k),k+=z.length,F(V,k,N(V,k-(oe+4),oe+4)),k+=4}if(R.pHYs!=null&&(F(V,k,9),k+=4,E(V,k,"pHYs"),k+=4,F(V,k,R.pHYs[0]),k+=4,F(V,k,R.pHYs[1]),k+=4,V[k]=R.pHYs[2],k++,F(V,k,N(V,k-13,13)),k+=4),D&&(F(V,k,8),k+=4,E(V,k,"acTL"),k+=4,F(V,k,v.frames.length),k+=4,F(V,k,R.loop!=null?R.loop:0),k+=4,F(V,k,N(V,k-12,12)),k+=4),v.ctype==3){for(F(V,k,3*(B=v.plte.length)),k+=4,E(V,k,"PLTE"),k+=4,K=0;K<B;K++){const oe=3*K,se=v.plte[K],fe=255&se,ke=se>>>8&255,Le=se>>>16&255;V[k+oe+0]=fe,V[k+oe+1]=ke,V[k+oe+2]=Le}if(k+=3*B,F(V,k,N(V,k-3*B-4,3*B+4)),k+=4,I){for(F(V,k,B),k+=4,E(V,k,"tRNS"),k+=4,K=0;K<B;K++)V[k+K]=v.plte[K]>>>24&255;k+=B,F(V,k,N(V,k-B-4,B+4)),k+=4}}let q=0;for(G=0;G<v.frames.length;G++){var X=v.frames[G];D&&(F(V,k,26),k+=4,E(V,k,"fcTL"),k+=4,F(V,k,q++),k+=4,F(V,k,X.rect.width),k+=4,F(V,k,X.rect.height),k+=4,F(V,k,X.rect.x),k+=4,F(V,k,X.rect.y),k+=4,M(V,k,A[G]),k+=2,M(V,k,1e3),k+=2,V[k]=X.dispose,k++,V[k]=X.blend,k++,F(V,k,N(V,k-30,30)),k+=4);const oe=X.cimg;F(V,k,(B=oe.length)+(G==0?0:4)),k+=4;const se=k;E(V,k,G==0?"IDAT":"fdAT"),k+=4,G!=0&&(F(V,k,q++),k+=4),V.set(oe,k),k+=B,F(V,k,N(V,se,k-se)),k+=4}return F(V,k,0),k+=4,E(V,k,"IEND"),k+=4,F(V,k,N(V,k-4,4)),k+=4,V.buffer}function f(v,j,T){for(let A=0;A<v.frames.length;A++){const R=v.frames[A];R.rect.width;const N=R.rect.height,F=new Uint8Array(N*R.bpl+N);R.cimg=m(R.img,N,R.bpp,R.bpl,F,j,T)}}function u(v,j,T,A,R){const N=R[0],F=R[1],M=R[2],E=R[3],k=R[4],D=R[5];let z=6,I=8,Y=255;for(var B=0;B<v.length;B++){const He=new Uint8Array(v[B]);for(var K=He.length,G=0;G<K;G+=4)Y&=He[G+3]}const V=Y!=255,Q=function(je,he,Te,Ke,O,U){const W=[];for(var J=0;J<je.length;J++){const we=new Uint8Array(je[J]),nt=new Uint32Array(we.buffer);var ee;let Qe=0,hn=0,zt=he,mn=Te,Pi=Ke?1:0;if(J!=0){const ha=U||Ke||J==1||W[J-2].dispose!=0?1:2;let Fi=0,Ti=1e9;for(let Ai=0;Ai<ha;Ai++){var Z=new Uint8Array(je[J-1-Ai]);const Eb=new Uint32Array(je[J-1-Ai]);let or=he,ir=Te,So=-1,Ri=-1;for(let Ur=0;Ur<Te;Ur++)for(let Br=0;Br<he;Br++)nt[de=Ur*he+Br]!=Eb[de]&&(Br<or&&(or=Br),Br>So&&(So=Br),Ur<ir&&(ir=Ur),Ur>Ri&&(Ri=Ur));So==-1&&(or=ir=So=Ri=0),O&&((1&or)==1&&or--,(1&ir)==1&&ir--);const oh=(So-or+1)*(Ri-ir+1);oh<Ti&&(Ti=oh,Fi=Ai,Qe=or,hn=ir,zt=So-or+1,mn=Ri-ir+1)}Z=new Uint8Array(je[J-1-Fi]),Fi==1&&(W[J-1].dispose=2),ee=new Uint8Array(zt*mn*4),e(Z,he,Te,ee,zt,mn,-Qe,-hn,0),Pi=e(we,he,Te,ee,zt,mn,-Qe,-hn,3)?1:0,Pi==1?p(we,he,Te,ee,{x:Qe,y:hn,width:zt,height:mn}):e(we,he,Te,ee,zt,mn,-Qe,-hn,0)}else ee=we.slice(0);W.push({rect:{x:Qe,y:hn,width:zt,height:mn},img:ee,blend:Pi,dispose:0})}if(Ke)for(J=0;J<W.length;J++){if((ye=W[J]).blend==1)continue;const we=ye.rect,nt=W[J-1].rect,Qe=Math.min(we.x,nt.x),hn=Math.min(we.y,nt.y),zt={x:Qe,y:hn,width:Math.max(we.x+we.width,nt.x+nt.width)-Qe,height:Math.max(we.y+we.height,nt.y+nt.height)-hn};W[J-1].dispose=1,J-1!=0&&d(je,he,Te,W,J-1,zt,O),d(je,he,Te,W,J,zt,O)}let ie=0;if(je.length!=1)for(var de=0;de<W.length;de++){var ye;ie+=(ye=W[de]).rect.width*ye.rect.height}return W}(v,j,T,N,F,M),q={},X=[],oe=[];if(A!=0){const He=[];for(G=0;G<Q.length;G++)He.push(Q[G].img.buffer);const je=function(O){let U=0;for(var W=0;W<O.length;W++)U+=O[W].byteLength;const J=new Uint8Array(U);let ee=0;for(W=0;W<O.length;W++){const Z=new Uint8Array(O[W]),ie=Z.length;for(let de=0;de<ie;de+=4){let ye=Z[de],we=Z[de+1],nt=Z[de+2];const Qe=Z[de+3];Qe==0&&(ye=we=nt=0),J[ee+de]=ye,J[ee+de+1]=we,J[ee+de+2]=nt,J[ee+de+3]=Qe}ee+=ie}return J.buffer}(He),he=b(je,A);for(G=0;G<he.plte.length;G++)X.push(he.plte[G].est.rgba);let Te=0;for(G=0;G<Q.length;G++){const Ke=(fe=Q[G]).img.length;var se=new Uint8Array(he.inds.buffer,Te>>2,Ke>>2);oe.push(se);const O=new Uint8Array(he.abuf,Te,Ke);D&&l(fe.img,fe.rect.width,fe.rect.height,X,O,se),fe.img.set(O),Te+=Ke}}else for(B=0;B<Q.length;B++){var fe=Q[B];const He=new Uint32Array(fe.img.buffer);var ke=fe.rect.width;for(K=He.length,se=new Uint8Array(K),oe.push(se),G=0;G<K;G++){const je=He[G];if(G!=0&&je==He[G-1])se[G]=se[G-1];else if(G>ke&&je==He[G-ke])se[G]=se[G-ke];else{let he=q[je];if(he==null&&(q[je]=he=X.length,X.push(je),X.length>=300))break;se[G]=he}}}const Le=X.length;for(Le<=256&&k==0&&(I=Le<=2?1:Le<=4?2:Le<=16?4:8,I=Math.max(I,E)),B=0;B<Q.length;B++){(fe=Q[B]).rect.x,fe.rect.y,ke=fe.rect.width;const He=fe.rect.height;let je=fe.img;new Uint32Array(je.buffer);let he=4*ke,Te=4;if(Le<=256&&k==0){he=Math.ceil(I*ke/8);var pt=new Uint8Array(he*He);const Ke=oe[B];for(let O=0;O<He;O++){G=O*he;const U=O*ke;if(I==8)for(var Se=0;Se<ke;Se++)pt[G+Se]=Ke[U+Se];else if(I==4)for(Se=0;Se<ke;Se++)pt[G+(Se>>1)]|=Ke[U+Se]<<4-4*(1&Se);else if(I==2)for(Se=0;Se<ke;Se++)pt[G+(Se>>2)]|=Ke[U+Se]<<6-2*(3&Se);else if(I==1)for(Se=0;Se<ke;Se++)pt[G+(Se>>3)]|=Ke[U+Se]<<7-1*(7&Se)}je=pt,z=3,Te=1}else if(V==0&&Q.length==1){pt=new Uint8Array(ke*He*3);const Ke=ke*He;for(G=0;G<Ke;G++){const O=3*G,U=4*G;pt[O]=je[U],pt[O+1]=je[U+1],pt[O+2]=je[U+2]}je=pt,z=2,Te=3,he=3*ke}fe.img=je,fe.bpl=he,fe.bpp=Te}return{ctype:z,depth:I,plte:X,frames:Q}}function d(v,j,T,A,R,N,F){const M=Uint8Array,E=Uint32Array,k=new M(v[R-1]),D=new E(v[R-1]),z=R+1<v.length?new M(v[R+1]):null,I=new M(v[R]),Y=new E(I.buffer);let B=j,K=T,G=-1,V=-1;for(let q=0;q<N.height;q++)for(let X=0;X<N.width;X++){const oe=N.x+X,se=N.y+q,fe=se*j+oe,ke=Y[fe];ke==0||A[R-1].dispose==0&&D[fe]==ke&&(z==null||z[4*fe+3]!=0)||(oe<B&&(B=oe),oe>G&&(G=oe),se<K&&(K=se),se>V&&(V=se))}G==-1&&(B=K=G=V=0),F&&((1&B)==1&&B--,(1&K)==1&&K--),N={x:B,y:K,width:G-B+1,height:V-K+1};const Q=A[R];Q.rect=N,Q.blend=1,Q.img=new Uint8Array(N.width*N.height*4),A[R-1].dispose==0?(e(k,j,T,Q.img,N.width,N.height,-N.x,-N.y,0),p(I,j,T,Q.img,N)):e(I,j,T,Q.img,N.width,N.height,-N.x,-N.y,0)}function p(v,j,T,A,R){e(v,j,T,A,R.width,R.height,-R.x,-R.y,2)}function m(v,j,T,A,R,N,F){const M=[];let E,k=[0,1,2,3,4];N!=-1?k=[N]:(j*A>5e5||T==1)&&(k=[0]),F&&(E={level:0});const D=gP;for(var z=0;z<k.length;z++){for(let B=0;B<j;B++)g(R,v,B,A,T,k[z]);M.push(D.deflate(R,E))}let I,Y=1e9;for(z=0;z<M.length;z++)M[z].length<Y&&(I=z,Y=M[z].length);return M[I]}function g(v,j,T,A,R,N){const F=T*A;let M=F+T;if(v[M]=N,M++,N==0)if(A<500)for(var E=0;E<A;E++)v[M+E]=j[F+E];else v.set(new Uint8Array(j.buffer,F,A),M);else if(N==1){for(E=0;E<R;E++)v[M+E]=j[F+E];for(E=R;E<A;E++)v[M+E]=j[F+E]-j[F+E-R]+256&255}else if(T==0){for(E=0;E<R;E++)v[M+E]=j[F+E];if(N==2)for(E=R;E<A;E++)v[M+E]=j[F+E];if(N==3)for(E=R;E<A;E++)v[M+E]=j[F+E]-(j[F+E-R]>>1)+256&255;if(N==4)for(E=R;E<A;E++)v[M+E]=j[F+E]-n(j[F+E-R],0,0)+256&255}else{if(N==2)for(E=0;E<A;E++)v[M+E]=j[F+E]+256-j[F+E-A]&255;if(N==3){for(E=0;E<R;E++)v[M+E]=j[F+E]+256-(j[F+E-A]>>1)&255;for(E=R;E<A;E++)v[M+E]=j[F+E]+256-(j[F+E-A]+j[F+E-R]>>1)&255}if(N==4){for(E=0;E<R;E++)v[M+E]=j[F+E]+256-n(0,j[F+E-A],0)&255;for(E=R;E<A;E++)v[M+E]=j[F+E]+256-n(j[F+E-R],j[F+E-A],j[F+E-R-A])&255}}}function b(v,j){const T=new Uint8Array(v),A=T.slice(0),R=new Uint32Array(A.buffer),N=$(A,j),F=N[0],M=N[1],E=T.length,k=new Uint8Array(E>>2);let D;if(T.length<2e7)for(var z=0;z<E;z+=4)D=h(F,I=T[z]*(1/255),Y=T[z+1]*(1/255),B=T[z+2]*(1/255),K=T[z+3]*(1/255)),k[z>>2]=D.ind,R[z>>2]=D.est.rgba;else for(z=0;z<E;z+=4){var I=T[z]*.00392156862745098,Y=T[z+1]*(1/255),B=T[z+2]*(1/255),K=T[z+3]*(1/255);for(D=F;D.left;)D=y(D.est,I,Y,B,K)<=0?D.left:D.right;k[z>>2]=D.ind,R[z>>2]=D.est.rgba}return{abuf:A.buffer,inds:k,plte:M}}function $(v,j,T){T==null&&(T=1e-4);const A=new Uint32Array(v.buffer),R={i0:0,i1:v.length,bst:null,est:null,tdst:0,left:null,right:null};R.bst=C(v,R.i0,R.i1),R.est=_(R.bst);const N=[R];for(;N.length<j;){let M=0,E=0;for(var F=0;F<N.length;F++)N[F].est.L>M&&(M=N[F].est.L,E=F);if(M<T)break;const k=N[E],D=x(v,A,k.i0,k.i1,k.est.e,k.est.eMq255);if(k.i0>=D||k.i1<=D){k.est.L=0;continue}const z={i0:k.i0,i1:D,bst:null,est:null,tdst:0,left:null,right:null};z.bst=C(v,z.i0,z.i1),z.est=_(z.bst);const I={i0:D,i1:k.i1,bst:null,est:null,tdst:0,left:null,right:null};for(I.bst={R:[],m:[],N:k.bst.N-z.bst.N},F=0;F<16;F++)I.bst.R[F]=k.bst.R[F]-z.bst.R[F];for(F=0;F<4;F++)I.bst.m[F]=k.bst.m[F]-z.bst.m[F];I.est=_(I.bst),k.left=z,k.right=I,N[E]=z,N.push(I)}for(N.sort((M,E)=>E.bst.N-M.bst.N),F=0;F<N.length;F++)N[F].ind=F;return[R,N]}function h(v,j,T,A,R){if(v.left==null)return v.tdst=function(z,I,Y,B,K){const G=I-z[0],V=Y-z[1],Q=B-z[2],q=K-z[3];return G*G+V*V+Q*Q+q*q}(v.est.q,j,T,A,R),v;const N=y(v.est,j,T,A,R);let F=v.left,M=v.right;N>0&&(F=v.right,M=v.left);const E=h(F,j,T,A,R);if(E.tdst<=N*N)return E;const k=h(M,j,T,A,R);return k.tdst<E.tdst?k:E}function y(v,j,T,A,R){const{e:N}=v;return N[0]*j+N[1]*T+N[2]*A+N[3]*R-v.eMq}function x(v,j,T,A,R,N){for(A-=4;T<A;){for(;w(v,T,R)<=N;)T+=4;for(;w(v,A,R)>N;)A-=4;if(T>=A)break;const F=j[T>>2];j[T>>2]=j[A>>2],j[A>>2]=F,T+=4,A-=4}for(;w(v,T,R)>N;)T-=4;return T+4}function w(v,j,T){return v[j]*T[0]+v[j+1]*T[1]+v[j+2]*T[2]+v[j+3]*T[3]}function C(v,j,T){const A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],R=[0,0,0,0],N=T-j>>2;for(let F=j;F<T;F+=4){const M=v[F]*.00392156862745098,E=v[F+1]*(1/255),k=v[F+2]*(1/255),D=v[F+3]*(1/255);R[0]+=M,R[1]+=E,R[2]+=k,R[3]+=D,A[0]+=M*M,A[1]+=M*E,A[2]+=M*k,A[3]+=M*D,A[5]+=E*E,A[6]+=E*k,A[7]+=E*D,A[10]+=k*k,A[11]+=k*D,A[15]+=D*D}return A[4]=A[1],A[8]=A[2],A[9]=A[6],A[12]=A[3],A[13]=A[7],A[14]=A[11],{R:A,m:R,N}}function _(v){const{R:j}=v,{m:T}=v,{N:A}=v,R=T[0],N=T[1],F=T[2],M=T[3],E=A==0?0:1/A,k=[j[0]-R*R*E,j[1]-R*N*E,j[2]-R*F*E,j[3]-R*M*E,j[4]-N*R*E,j[5]-N*N*E,j[6]-N*F*E,j[7]-N*M*E,j[8]-F*R*E,j[9]-F*N*E,j[10]-F*F*E,j[11]-F*M*E,j[12]-M*R*E,j[13]-M*N*E,j[14]-M*F*E,j[15]-M*M*E],D=k,z=P;let I=[Math.random(),Math.random(),Math.random(),Math.random()],Y=0,B=0;if(A!=0)for(let G=0;G<16&&(I=z.multVec(D,I),B=Math.sqrt(z.dot(I,I)),I=z.sml(1/B,I),!(G!=0&&Math.abs(B-Y)<1e-9));G++)Y=B;const K=[R*E,N*E,F*E,M*E];return{Cov:k,q:K,e:I,L:Y,eMq255:z.dot(z.sml(255,K),I),eMq:z.dot(I,K),rgba:(Math.round(255*K[3])<<24|Math.round(255*K[2])<<16|Math.round(255*K[1])<<8|Math.round(255*K[0])<<0)>>>0}}var P={multVec:(v,j)=>[v[0]*j[0]+v[1]*j[1]+v[2]*j[2]+v[3]*j[3],v[4]*j[0]+v[5]*j[1]+v[6]*j[2]+v[7]*j[3],v[8]*j[0]+v[9]*j[1]+v[10]*j[2]+v[11]*j[3],v[12]*j[0]+v[13]*j[1]+v[14]*j[2]+v[15]*j[3]],dot:(v,j)=>v[0]*j[0]+v[1]*j[1]+v[2]*j[2]+v[3]*j[3],sml:(v,j)=>[v*j[0],v*j[1],v*j[2],v*j[3]]};yn.encode=function(j,T,A,R,N,F,M){R==null&&(R=0),M==null&&(M=!1);const E=u(j,T,A,R,[!1,!1,!1,0,M,!1]);return f(E,-1),c(E,T,A,N,F)},yn.encodeLL=function(j,T,A,R,N,F,M,E){const k={ctype:0+(R==1?0:2)+(N==0?0:4),depth:F,frames:[]},D=(R+N)*F,z=D*T;for(let I=0;I<j.length;I++)k.frames.push({rect:{x:0,y:0,width:T,height:A},img:new Uint8Array(j[I]),blend:0,dispose:1,bpp:Math.ceil(D/8),bpl:Math.ceil(z/8)});return f(k,0,!0),c(k,T,A,M,E)},yn.encode.compress=u,yn.encode.dither=l,yn.quantize=b,yn.quantize.getKDtree=$,yn.quantize.getNearest=h})();const eb={toArrayBuffer(e,t){const n=e.width,r=e.height,o=n<<2,i=e.getContext("2d").getImageData(0,0,n,r),s=new Uint32Array(i.data.buffer),l=(32*n+31)/32<<2,c=l*r,f=122+c,u=new ArrayBuffer(f),d=new DataView(u),p=1<<20;let m,g,b,$,h=p,y=0,x=0,w=0;function C(v){d.setUint16(x,v,!0),x+=2}function _(v){d.setUint32(x,v,!0),x+=4}function P(v){x+=v}C(19778),_(f),P(4),_(122),_(108),_(n),_(-r>>>0),C(1),C(32),_(3),_(c),_(2835),_(2835),P(8),_(16711680),_(65280),_(255),_(4278190080),_(1466527264),function v(){for(;y<r&&h>0;){for($=122+y*l,m=0;m<o;)h--,g=s[w++],b=g>>>24,d.setUint32($+m,g<<8|b),m+=4;y++}w<s.length?(h=p,setTimeout(v,eb._dly)):t(u)}()},toBlob(e,t){this.toArrayBuffer(e,n=>{t(new Blob([n],{type:"image/bmp"}))})},_dly:9};var It={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},yP={[It.CHROME]:16384,[It.FIREFOX]:11180,[It.DESKTOP_SAFARI]:16384,[It.IE]:8192,[It.IOS]:4096,[It.ETC]:8192};const th=typeof window<"u",tb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,hc=th&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),xP=(th||tb)&&(hc&&hc.getOriginalSymbol(window,"File")||typeof File<"u"&&File),nb=(th||tb)&&(hc&&hc.getOriginalSymbol(window,"FileReader")||typeof FileReader<"u"&&FileReader);function nh(e,t,n=Date.now()){return new Promise(r=>{const o=e.split(","),i=o[0].match(/:(.*?);/)[1],s=globalThis.atob(o[1]);let l=s.length;const c=new Uint8Array(l);for(;l--;)c[l]=s.charCodeAt(l);const f=new Blob([c],{type:i});f.name=t,f.lastModified=n,r(f)})}function rb(e){return new Promise((t,n)=>{const r=new nb;r.onload=()=>t(r.result),r.onerror=o=>n(o),r.readAsDataURL(e)})}function ob(e){return new Promise((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=o=>n(o),r.src=e})}function ro(){if(ro.cachedResult!==void 0)return ro.cachedResult;let e=It.ETC;const{userAgent:t}=navigator;return/Chrom(e|ium)/i.test(t)?e=It.CHROME:/iP(ad|od|hone)/i.test(t)&&/WebKit/i.test(t)?e=It.IOS:/Safari/i.test(t)?e=It.DESKTOP_SAFARI:/Firefox/i.test(t)?e=It.FIREFOX:(/MSIE/i.test(t)||document.documentMode)&&(e=It.IE),ro.cachedResult=e,ro.cachedResult}function ib(e,t){const n=ro(),r=yP[n];let o=e,i=t,s=o*i;const l=o>i?i/o:o/i;for(;s>r*r;){const c=(r+o)/2,f=(r+i)/2;c<f?(i=f,o=f*l):(i=c*l,o=c),s=o*i}return{width:o,height:i}}function Zc(e,t){let n,r;try{if(n=new OffscreenCanvas(e,t),r=n.getContext("2d"),r===null)throw new Error("getContext of OffscreenCanvas returns null")}catch{n=document.createElement("canvas"),r=n.getContext("2d")}return n.width=e,n.height=t,[n,r]}function sb(e,t){const{width:n,height:r}=ib(e.width,e.height),[o,i]=Zc(n,r);return t&&/jpe?g/.test(t)&&(i.fillStyle="white",i.fillRect(0,0,o.width,o.height)),i.drawImage(e,0,0,o.width,o.height),o}function jl(){return jl.cachedResult!==void 0||(jl.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&typeof document<"u"&&"ontouchend"in document),jl.cachedResult}function mc(e,t={}){return new Promise(function(n,r){let o,i;var s=function(){try{return i=sb(o,t.fileType||e.type),n([o,i])}catch(c){return r(c)}},l=function(c){try{var f=function(u){try{throw u}catch(d){return r(d)}};try{let u;return rb(e).then(function(d){try{return u=d,ob(u).then(function(p){try{return o=p,function(){try{return s()}catch(m){return r(m)}}()}catch(m){return f(m)}},f)}catch(p){return f(p)}},f)}catch(u){f(u)}}catch(u){return r(u)}};try{if(jl()||[It.DESKTOP_SAFARI,It.MOBILE_SAFARI].includes(ro()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(e).then(function(c){try{return o=c,s()}catch{return l()}},l)}catch{l()}})}function gc(e,t,n,r,o=1){return new Promise(function(i,s){let l;if(t==="image/png"){let d,p,m;return d=e.getContext("2d"),{data:p}=d.getImageData(0,0,e.width,e.height),m=yn.encode([p.buffer],e.width,e.height,4096*o),l=new Blob([m],{type:t}),l.name=n,l.lastModified=r,c.call(this)}{let d=function(){return c.call(this)};var f=d;if(t==="image/bmp")return new Promise(p=>eb.toBlob(e,p)).then((function(p){try{return l=p,l.name=n,l.lastModified=r,d.call(this)}catch(m){return s(m)}}).bind(this),s);{let p=function(){return d.call(this)};var u=p;if(typeof OffscreenCanvas=="function"&&e instanceof OffscreenCanvas)return e.convertToBlob({type:t,quality:o}).then((function(m){try{return l=m,l.name=n,l.lastModified=r,p.call(this)}catch(g){return s(g)}}).bind(this),s);{let m;return m=e.toDataURL(t,o),nh(m,n,r).then((function(g){try{return l=g,p.call(this)}catch(b){return s(b)}}).bind(this),s)}}}function c(){return i(l)}})}function Rn(e){e.width=0,e.height=0}function Jo(){return new Promise(function(e,t){let n,r,o,i;return Jo.cachedResult!==void 0?e(Jo.cachedResult):nh("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then(function(s){try{return n=s,mc(n).then(function(l){try{return r=l[1],gc(r,n.type,n.name,n.lastModified).then(function(c){try{return o=c,Rn(r),mc(o).then(function(f){try{return i=f[0],Jo.cachedResult=i.width===1&&i.height===2,e(Jo.cachedResult)}catch(u){return t(u)}},t)}catch(f){return t(f)}},t)}catch(c){return t(c)}},t)}catch(l){return t(l)}},t)})}function ab(e){return new Promise((t,n)=>{const r=new nb;r.onload=o=>{const i=new DataView(o.target.result);if(i.getUint16(0,!1)!=65496)return t(-2);const s=i.byteLength;let l=2;for(;l<s;){if(i.getUint16(l+2,!1)<=8)return t(-1);const c=i.getUint16(l,!1);if(l+=2,c==65505){if(i.getUint32(l+=2,!1)!=1165519206)return t(-1);const f=i.getUint16(l+=6,!1)==18761;l+=i.getUint32(l+4,f);const u=i.getUint16(l,f);l+=2;for(let d=0;d<u;d++)if(i.getUint16(l+12*d,f)==274)return t(i.getUint16(l+12*d+8,f))}else{if((65280&c)!=65280)break;l+=i.getUint16(l,!1)}}return t(-1)},r.onerror=o=>n(o),r.readAsArrayBuffer(e)})}function lb(e,t){const{width:n}=e,{height:r}=e,{maxWidthOrHeight:o}=t;let i,s=e;return isFinite(o)&&(n>o||r>o)&&([s,i]=Zc(n,r),n>r?(s.width=o,s.height=r/n*o):(s.width=n/r*o,s.height=o),i.drawImage(e,0,0,s.width,s.height),Rn(e)),s}function cb(e,t){const{width:n}=e,{height:r}=e,[o,i]=Zc(n,r);switch(t>4&&t<9?(o.width=r,o.height=n):(o.width=n,o.height=r),t){case 2:i.transform(-1,0,0,1,n,0);break;case 3:i.transform(-1,0,0,-1,n,r);break;case 4:i.transform(1,0,0,-1,0,r);break;case 5:i.transform(0,1,1,0,0,0);break;case 6:i.transform(0,1,-1,0,r,0);break;case 7:i.transform(0,-1,-1,0,r,n);break;case 8:i.transform(0,-1,1,0,0,n)}return i.drawImage(e,0,0,n,r),Rn(e),o}function x0(e,t,n=0){return new Promise(function(r,o){let i,s,l,c,f,u,d,p,m,g,b,$,h,y,x,w,C,_,P,v;function j(A=5){if(t.signal&&t.signal.aborted)throw t.signal.reason;i+=A,t.onProgress(Math.min(i,100))}function T(A){if(t.signal&&t.signal.aborted)throw t.signal.reason;i=Math.min(Math.max(A,i),100),t.onProgress(i)}return i=n,s=t.maxIteration||10,l=1024*t.maxSizeMB*1024,j(),mc(e,t).then((function(A){try{return[,c]=A,j(),f=lb(c,t),j(),new Promise(function(R,N){var F;if(!(F=t.exifOrientation))return ab(e).then((function(E){try{return F=E,M.call(this)}catch(k){return N(k)}}).bind(this),N);function M(){return R(F)}return M.call(this)}).then((function(R){try{return u=R,j(),Jo().then((function(N){try{return d=N?f:cb(f,u),j(),p=t.initialQuality||1,m=t.fileType||e.type,gc(d,m,e.name,e.lastModified,p).then((function(F){try{{let D=function(){if(s--&&(x>l||x>h)){let I,Y;return I=v?.95*P.width:P.width,Y=v?.95*P.height:P.height,[C,_]=Zc(I,Y),_.drawImage(P,0,0,I,Y),p*=m==="image/png"?.85:.95,gc(C,m,e.name,e.lastModified,p).then(function(B){try{return w=B,Rn(P),P=C,x=w.size,T(Math.min(99,Math.floor((y-x)/(y-l)*100))),D}catch(K){return o(K)}},o)}return[1]},z=function(){return Rn(P),Rn(C),Rn(f),Rn(d),Rn(c),T(100),r(w)};var E=D,k=z;if(g=F,j(),b=g.size>l,$=g.size>e.size,!b&&!$)return T(100),r(g);var M;return h=e.size,y=g.size,x=y,P=d,v=!t.alwaysKeepResolution&&b,(M=(function(I){for(;I;){if(I.then)return void I.then(M,o);try{if(I.pop){if(I.length)return I.pop()?z.call(this):I;I=D}else I=I.call(this)}catch(Y){return o(Y)}}}).bind(this))(D)}}catch(D){return o(D)}}).bind(this),o)}catch(F){return o(F)}}).bind(this),o)}catch(N){return o(N)}}).bind(this),o)}catch(R){return o(R)}}).bind(this),o)})}const vP=`
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
`;let nd;function bP(e,t){return new Promise((n,r)=>{nd||(nd=function(s){const l=[];return l.push(s),URL.createObjectURL(new Blob(l))}(vP));const o=new Worker(nd);o.addEventListener("message",function(s){if(t.signal&&t.signal.aborted)o.terminate();else if(s.data.progress===void 0){if(s.data.error)return r(new Error(s.data.error)),void o.terminate();n(s.data.file),o.terminate()}else t.onProgress(s.data.progress)}),o.addEventListener("error",r),t.signal&&t.signal.addEventListener("abort",()=>{r(t.signal.reason),o.terminate()}),o.postMessage({file:e,imageCompressionLibUrl:t.libURL,options:{...t,onProgress:void 0,signal:void 0}})})}function kt(e,t){return new Promise(function(n,r){let o,i,s,l,c,f;if(o={...t},s=0,{onProgress:l}=o,o.maxSizeMB=o.maxSizeMB||Number.POSITIVE_INFINITY,c=typeof o.useWebWorker!="boolean"||o.useWebWorker,delete o.useWebWorker,o.onProgress=m=>{s=m,typeof l=="function"&&l(s)},!(e instanceof Blob||e instanceof xP))return r(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(e.type))return r(new Error("The file given is not an image"));if(f=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,!c||typeof Worker!="function"||f)return x0(e,o).then((function(m){try{return i=m,p.call(this)}catch(g){return r(g)}}).bind(this),r);var u=(function(){try{return p.call(this)}catch(m){return r(m)}}).bind(this),d=function(m){try{return x0(e,o).then(function(g){try{return i=g,u()}catch(b){return r(b)}},r)}catch(g){return r(g)}};try{return o.libURL=o.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",bP(e,o).then(function(m){try{return i=m,u()}catch{return d()}},d)}catch{d()}function p(){try{i.name=e.name,i.lastModified=e.lastModified}catch{}try{o.preserveExif&&e.type==="image/jpeg"&&(!o.fileType||o.fileType&&o.fileType===e.type)&&(i=Zv(e,i))}catch{}return n(i)}})}kt.getDataUrlFromFile=rb,kt.getFilefromDataUrl=nh,kt.loadImage=ob,kt.drawImageInCanvas=sb,kt.drawFileInCanvas=mc,kt.canvasToFile=gc,kt.getExifOrientation=ab,kt.handleMaxWidthOrHeight=lb,kt.followExifOrientation=cb,kt.cleanupCanvasMemory=Rn,kt.isAutoOrientationInBrowser=Jo,kt.approximateBelowMaximumCanvasSizeOfBrowser=ib,kt.copyExifWithoutOrientation=Zv,kt.getBrowserName=ro,kt.version="2.0.2";const wP=lt`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,$P=lt`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,ub=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px;
  animation: ${wP} 0.3s ease both;
`,db=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,kP=S.button`
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
`,fb=S.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,SP=S.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,jP=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,Do=S.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Gi=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Yi=S.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,Qi=S.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,_l=S.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,v0=S.div`
  grid-column: 1 / -1;
`,Ie=S.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ge=S.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,rh=({theme:e,$hasError:t})=>`
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
`,mt=S.input`
  ${({theme:e,$hasError:t})=>rh({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,Ja=S.select`
  ${({theme:e,$hasError:t})=>rh({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,_P=S.textarea`
  ${({theme:e,$hasError:t})=>rh({theme:e,$hasError:t})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,Yt=S.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,El=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,EP=S.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,CP=S.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,PP=S.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[5]};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,b0=S.button`
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
`,FP=S.div`
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
`,TP=S.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,AP=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
`,RP=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`,OP=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,zP=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,NP=S.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background-color: ${({theme:e})=>e.colors.primary[100]};
  color: ${({theme:e})=>e.colors.primary[700]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 11px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,LP=S.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,DP=S.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,IP=S.div`
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
`,MP=S.div`
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
`,UP=S.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,BP=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,WP=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.brand.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,w0=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-top: ${({theme:e})=>e.spacing[4]};
`,$0=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
`,k0=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.brand.primary};
`,VP=S.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,HP=S.div`
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
`,qP=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,GP=S.label`
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
`,YP=S.div`
  color: ${({theme:e,$hasFile:t})=>t?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,QP=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,XP=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,KP=S.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,JP=S.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,ZP=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,e8=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,t8=S.button`
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
`,n8=S.div`
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
`,r8=S.button`
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
`,o8=S.button`
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
`,rd=S.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,lr=S.div`
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
  animation: ${$P} 1.4s ease infinite;
`,S0=S(Do)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,j0=S.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`,_0=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,E0=S.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,i8=S.div`
  flex: 1;
  height: 6px;
  background-color: ${({theme:e})=>e.colors.neutral[100]};
  border-radius: 99px;
  overflow: hidden;
`,s8=S.div`
  height: 100%;
  width: ${({$percent:e})=>e??0}%;
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.primary[500]},
    ${({theme:e})=>e.colors.primary[400]}
  );
  border-radius: 99px;
  transition: width 300ms ease;
`,a8=S.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.muted};
  white-space: nowrap;
  min-width: 32px;
  text-align: right;
`;let Xi=null,Ki=null,Ji=null;const l8=e=>{if(!e)return!1;const t=e.padStart(14,"0");if(/^(\d)\1+$/.test(t))return!1;let n=t.length-2,r=t.substring(0,n);const o=t.substring(n);let i=0,s=n-7;for(let c=n;c>=1;c--)i+=r.charAt(n-c)*s--,s<2&&(s=9);let l=i%11<2?0:11-i%11;if(l!=o.charAt(0))return!1;n=n+1,r=t.substring(0,n),i=0,s=n-7;for(let c=n;c>=1;c--)i+=r.charAt(n-c)*s--,s<2&&(s=9);return l=i%11<2?0:11-i%11,l==o.charAt(1)},c8=Kc({corporate_name:pe().required("A razão social é obrigatória.").max(200,"Razão social deve ter no máximo 200 caracteres."),cnpj:pe().required("O CNPJ é obrigatório.").transform(e=>(e==null?void 0:e.replace(/\D/g,""))||"").test("cnpj-valido","CNPJ inválido (dígitos verificadores não conferem).",e=>e?e.length===14&&l8(e):!1),email:pe().required("O e-mail é obrigatório.").nullable().transform(e=>e||null).email("Informe um e-mail válido."),state_registration:pe().nullable().transform(e=>e||null).max(15,"Inscrição estadual deve ter no máximo 15 caracteres."),trade_name:pe().nullable().transform(e=>e||null).max(200,"Nome fantasia deve ter no máximo 200 caracteres."),phone:pe().nullable().transform(e=>e||null).max(20,"Telefone deve ter no máximo 20 caracteres."),benefit_type:pe().required("O tipo de benefício é obrigatório.").oneOf(["food","meal","both"],"Tipo inválido."),notes:pe().nullable().transform(e=>e||null),partner_id:pe().nullable().transform(e=>e||null),address_street:pe().nullable().transform(e=>e||null).max(255,"Logradouro deve ter no máximo 255 caracteres."),address_number:pe().nullable().transform(e=>e||null).max(10,"Número deve ter no máximo 10 caracteres."),address_complement:pe().nullable().transform(e=>e||null).max(100,"Complemento deve ter no máximo 100 caracteres."),address_neighborhood:pe().nullable().transform(e=>e||null).max(100,"Bairro deve ter no máximo 100 caracteres."),address_city:pe().nullable().transform(e=>e||null).max(100,"Cidade deve ter no máximo 100 caracteres."),address_state:pe().nullable().transform(e=>e||null).max(2,"UF deve ter 2 caracteres."),address_zip:pe().nullable().transform(e=>e||null).test("cep-valido","CEP inválido. Use o formato 00000-000.",e=>e?e.replace(/\D/g,"").length===8:!0),bank_bank_name:pe().nullable().transform(e=>e||null).max(100,"Nome do banco deve ter no máximo 100 caracteres."),bank_agency:pe().max(10,"Agência deve ter no máximo 10 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Agência é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_agency_digit:pe().nullable().transform(e=>e||null).max(2,"Dígito deve ter no máximo 2 caracteres."),bank_account:pe().max(20,"Conta deve ter no máximo 20 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Conta é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_account_digit:pe().nullable().transform(e=>e||null).max(2,"Dígito deve ter no máximo 2 caracteres."),bank_account_type:pe().when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Tipo é obrigatório.").oneOf(["checking","savings"],"Tipo inválido."),otherwise:e=>e.nullable().transform(t=>t||null)})}),u8=[{key:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",fieldName:"contrato"},{key:"proof_of_address",type:"proof_of_address",label:"Comprovante de Endereço",fieldName:"documentos",docIndex:0},{key:"bank_account_proof",type:"bank_account_proof",label:"Comprovante Bancário",fieldName:"documentos",docIndex:1},{key:"card_machine_proof",type:"card_machine_proof",label:"Comprovante de Maquininha",fieldName:"documentos",docIndex:2}],d8=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],f8=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],p8=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],h8=async e=>{if(!e.type.startsWith("image/"))return e;try{const t=await kt(e,{maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0,fileType:e.type});return new File([t],e.name,{type:e.type})}catch{return e}},m8=(e="")=>{const t=e.replace(/\D/g,"").slice(0,14);return t.length<=2?t:t.length<=5?`${t.slice(0,2)}.${t.slice(2)}`:t.length<=8?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5)}`:t.length<=12?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8)}`:`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8,12)}-${t.slice(12)}`},g8=(e="")=>{const t=e.replace(/\D/g,"").slice(0,11);return t.length<=2?`(${t}`:t.length<=6?`(${t.slice(0,2)}) ${t.slice(2)}`:t.length<=10?`(${t.slice(0,2)}) ${t.slice(2,6)}-${t.slice(6)}`:`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7)}`},y8=(e="")=>{const t=e.replace(/\D/g,"").slice(0,8);return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5)}`},od=(e="")=>e.replace(/\D/g,""),Za=(e=0)=>Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),x8=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function v8(){const e=t=>Array.from({length:t}).map((n,r)=>a.jsxs(Ie,{children:[a.jsx(lr,{$w:"45%",$h:"11px"}),a.jsx(lr,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},r));return a.jsxs(ub,{children:[a.jsxs(db,{children:[a.jsx(lr,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),a.jsxs(fb,{children:[a.jsx(lr,{$w:"180px",$h:"28px"}),a.jsx(lr,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]}),a.jsxs(S0,{children:[a.jsx(lr,{$w:"35%",$h:"20px"}),a.jsx(j0,{}),a.jsx(_l,{children:e(6)})]}),a.jsxs(S0,{children:[a.jsx(lr,{$w:"40%",$h:"20px"}),a.jsx(j0,{}),a.jsx(lr,{$h:"120px",style:{borderRadius:"8px"}})]})]})}function b8({slot:e,selectedFile:t,onFileSelect:n,onClearFile:r,disabled:o}){const i=L.useRef(null),s=!!t;return a.jsxs(HP,{$hasFile:s,children:[a.jsx(qP,{children:e.label}),s&&a.jsxs(KP,{children:[a.jsx(wf,{size:16,style:{color:"#B45A14",flexShrink:0}}),a.jsxs(JP,{children:[a.jsx(ZP,{children:t.name}),a.jsxs(e8,{children:[x8(t.size)," · Será comprimido ao enviar"]})]}),a.jsx(t8,{type:"button",onClick:()=>r(e.key),disabled:o,children:a.jsx(mv,{size:13})})]}),a.jsxs(GP,{htmlFor:`doc-input-${e.key}`,children:[a.jsx(YP,{$hasFile:s,children:a.jsx(gv,{size:22})}),a.jsx(QP,{children:s?"Trocar arquivo":"Selecionar arquivo"}),a.jsx(XP,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),a.jsx("input",{ref:i,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:o,onChange:l=>{var f;const c=(f=l.target.files)==null?void 0:f[0];if(c){if(c.size>3*1024*1024){ae.error("Arquivo muito grande. O limite é 3 MB.");return}n(e.key,c),l.target.value=""}}}),a.jsx(El,{children:"Imagens serão comprimidas automaticamente antes do envio."})]})}function w8(){const e=Un(),{isAdmin:t}=Bn(),[n,r]=L.useState([]),[o,i]=L.useState([]),[s,l]=L.useState([]),[c,f]=L.useState(!0),[u,d]=L.useState(!1),[p,m]=L.useState(0),[g,b]=L.useState(""),[$,h]=L.useState("plan"),[y,x]=L.useState(""),[w,C]=L.useState([]),[_,P]=L.useState({}),[v,j]=L.useState(""),T=L.useRef(null),{register:A,handleSubmit:R,setValue:N,watch:F,formState:{errors:M}}=Xc({resolver:Gp(c8),defaultValues:{corporate_name:"",cnpj:"",email:"",state_registration:"",trade_name:"",phone:"",benefit_type:"food",notes:"",partner_id:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",bank_bank_name:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}}),k=!!F("bank_bank_name");L.useEffect(()=>{(async()=>{f(!0);try{await Promise.all([!Xi||Xi.length===0?Pe.get("/plans?limit=100").then(({data:X})=>{Xi=X.data??[]}).catch(()=>{ae.error("Erro ao carregar planos."),Xi=[]}):Promise.resolve(),!Ki||Ki.length===0?Pe.get("/flags?limit=100").then(({data:X})=>{Ki=X.data??[]}).catch(()=>{ae.error("Erro ao carregar bandeiras."),Ki=[]}):Promise.resolve(),t&&(!Ji||Ji.length===0)?Pe.get("/users?role=partner&limit=100").then(({data:X})=>{Ji=X.data??[]}).catch(()=>{Ji=[]}):Promise.resolve()])}finally{r(Xi??[]),i(Ki??[]),l(Ji??[]),f(!1)}})()},[]);const D=(q,X)=>{P(oe=>({...oe,[q]:X}))},z=q=>{P(X=>{const oe={...X};return delete oe[q],oe})},I=q=>{const X=q.target.value;j(m8(X)),T.current&&clearTimeout(T.current),T.current=setTimeout(()=>{N("cnpj",od(X),{shouldValidate:!0})},400)},B=o.filter(q=>w.includes(q.id)).reduce((q,X)=>q+parseFloat(X.price||0),0),K=n.find(q=>q.id===y),G=async q=>{var X,oe,se,fe;if($==="plan"&&!y){ae.error("Selecione um plano para continuar.");return}if($==="individual"&&w.length===0){ae.error("Selecione ao menos uma bandeira.");return}d(!0),m(0),b("compressing");try{const ke=Object.keys(_).length>0,Le={};if(ke){const he=Object.entries(_);for(let Te=0;Te<he.length;Te++){const[Ke,O]=he[Te];Le[Ke]=await h8(O),m(Math.round((Te+1)/he.length*20))}}b("uploading");const pt={corporate_name:q.corporate_name,cnpj:od(q.cnpj||v),benefit_type:q.benefit_type,trade_name:q.trade_name||void 0,email:q.email||void 0,state_registration:q.state_registration||void 0,phone:od(q.phone)||void 0,notes:q.notes||void 0,partner_id:q.partner_id||void 0,address_street:q.address_street||void 0,address_number:q.address_number||void 0,address_complement:q.address_complement||void 0,address_neighborhood:q.address_neighborhood||void 0,address_city:q.address_city||void 0,address_state:q.address_state||void 0,address_zip:q.address_zip||void 0,...$==="plan"?{plan_id:y}:{flag_ids:w},...k?{bank_name:q.bank_bank_name,agency:q.bank_agency,agency_digit:q.bank_agency_digit||void 0,account:q.bank_account,account_digit:q.bank_account_digit||void 0,account_type:q.bank_account_type}:{}};Object.keys(pt).forEach(he=>pt[he]===void 0&&delete pt[he]);const Se=new FormData;Se.append("data",JSON.stringify(pt)),Le.contrato&&Se.append("contrato",Le.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(he=>{Le[he]&&Se.append("documentos",Le[he])});const{data:He}=await Lp.post("/onboarding",Se,{onUploadProgress:he=>{const Te=Math.round(he.loaded/(he.total||1)*70);m(20+Te),he.loaded>=he.total&&b("processing")}});m(100),ae.success(`Cliente cadastrado! Protocolo: ${((oe=(X=He.data)==null?void 0:X.client)==null?void 0:oe.protocol)??""}`,{autoClose:5e3});const je=(fe=(se=He.data)==null?void 0:se.client)==null?void 0:fe.id;e(je?`/clientes/${je}`:"/clientes",{replace:!0})}catch(ke){m(0),b(""),ae.error(qt(ke,"Erro ao cadastrar cliente."))}finally{d(!1)}},V=()=>u?g==="compressing"?a.jsxs(a.Fragment,{children:[a.jsx(rd,{}),"Comprimindo imagens…"]}):g==="processing"?a.jsxs(a.Fragment,{children:[a.jsx(rd,{}),"Processando…"]}):a.jsxs(a.Fragment,{children:[a.jsx(rd,{}),"Enviando… ",p,"%"]}):a.jsxs(a.Fragment,{children:[a.jsx(fv,{size:15}),"Cadastrar Cliente"]});if(c)return a.jsx(v8,{});const Q=q=>{var X;return(X=M[q])==null?void 0:X.message};return a.jsxs(a.Fragment,{children:[a.jsxs(ub,{children:[a.jsxs(db,{children:[a.jsxs(kP,{type:"button",onClick:()=>e("/clientes"),children:[a.jsx(Dp,{size:15})," Voltar"]}),a.jsxs(fb,{children:[a.jsx(SP,{children:"Novo Cliente"}),a.jsx(jP,{children:"Preencha os dados para cadastrar o cliente"})]})]}),a.jsxs("form",{id:"create-client-form",onSubmit:R(G),noValidate:!0,children:[a.jsxs(Do,{style:{marginBottom:"24px"},children:[a.jsxs(Gi,{children:[a.jsx(Yi,{children:a.jsx(Ip,{size:18})}),a.jsx(Qi,{children:"Dados da Empresa"})]}),a.jsxs(_l,{children:[a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"corporate_name",children:"Razão Social *"}),a.jsx(mt,{id:"corporate_name",type:"text",placeholder:"Razão social completa",$hasError:!!Q("corporate_name"),disabled:u,...A("corporate_name")}),Q("corporate_name")&&a.jsxs(Yt,{children:[a.jsx(ge,{size:11}),Q("corporate_name")]})]}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"cnpj",children:"CNPJ *"}),a.jsx(mt,{id:"cnpj",type:"text",placeholder:"00.000.000/0001-00",value:v,$hasError:!!Q("cnpj"),disabled:u,onChange:I}),Q("cnpj")&&a.jsxs(Yt,{children:[a.jsx(ge,{size:11}),Q("cnpj")]})]}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"trade_name",children:"Nome Fantasia"}),a.jsx(mt,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",disabled:u,...A("trade_name")})]}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"state_registration",children:"Inscrição Estadual"}),a.jsx(mt,{id:"state_registration",type:"text",placeholder:"Inscrição estadual (opcional)",$hasError:!!Q("state_registration"),disabled:u,...A("state_registration")}),Q("state_registration")&&a.jsxs(Yt,{children:[a.jsx(ge,{size:11}),Q("state_registration")]})]}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"phone",children:"Telefone"}),a.jsx(mt,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",$hasError:!!Q("phone"),disabled:u,...A("phone",{onChange:q=>N("phone",g8(q.target.value))})}),Q("phone")&&a.jsxs(Yt,{children:[a.jsx(ge,{size:11}),Q("phone")]})]}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"email",children:"E-mail *"}),a.jsx(mt,{id:"email",type:"email",placeholder:"contato@empresa.com.br",$hasError:!!Q("email"),disabled:u,...A("email")}),Q("email")&&a.jsxs(Yt,{children:[a.jsx(ge,{size:11}),Q("email")]})]}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),a.jsx(Ja,{id:"benefit_type",$hasError:!!Q("benefit_type"),disabled:u,...A("benefit_type"),children:d8.map(q=>a.jsx("option",{value:q.value,children:q.label},q.value))}),Q("benefit_type")&&a.jsxs(Yt,{children:[a.jsx(ge,{size:11}),Q("benefit_type")]})]}),t&&a.jsxs(Ie,{children:[a.jsx(Ge,{children:"Parceiro responsável"}),a.jsxs(Ja,{...A("partner_id"),disabled:c,children:[a.jsx("option",{value:"",children:"Nenhum"}),s.map(q=>a.jsx("option",{value:q.id,children:q.name},q.id))]})]}),a.jsx(v0,{children:a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"notes",children:"Observações"}),a.jsx(_P,{id:"notes",placeholder:"Observações…",disabled:u,...A("notes")})]})})]})]}),a.jsxs(Do,{style:{marginBottom:"24px"},children:[a.jsxs(Gi,{children:[a.jsx(Yi,{children:a.jsx(ng,{size:18})}),a.jsx(Qi,{children:"Contratação"})]}),a.jsxs(PP,{children:[a.jsxs(b0,{type:"button",$active:$==="plan",disabled:u,onClick:()=>{h("plan"),C([])},children:[a.jsx(ng,{size:16})," Escolher Plano"]}),a.jsxs(b0,{type:"button",$active:$==="individual",disabled:u,onClick:()=>{h("individual"),x("")},children:[a.jsx(S_,{size:16})," Bandeiras Individuais"]})]}),$==="plan"&&a.jsxs(a.Fragment,{children:[n.length===0?a.jsx(_0,{children:a.jsx(E0,{children:"Nenhum plano ativo encontrado."})}):a.jsx(LP,{children:n.map(q=>{var oe;const X=y===q.id;return a.jsxs(FP,{$selected:X,onClick:()=>!u&&x(q.id),children:[a.jsxs(TP,{children:[a.jsx(AP,{children:q.name}),a.jsx(RP,{children:Za(q.price)})]}),q.description&&a.jsx(OP,{children:q.description}),((oe=q.flags)==null?void 0:oe.length)>0&&a.jsx(zP,{children:q.flags.map(se=>a.jsx(NP,{children:se.name},se.id))})]},q.id)})}),K&&a.jsxs(w0,{children:[a.jsxs($0,{children:["Plano selecionado: ",K.name]}),a.jsx(k0,{children:Za(K.price)})]})]}),$==="individual"&&a.jsxs(a.Fragment,{children:[a.jsx(El,{style:{marginBottom:"12px",display:"block"},children:"Selecione ao menos uma bandeira. O valor total será a soma dos preços individuais."}),o.length===0?a.jsx(_0,{children:a.jsx(E0,{children:"Nenhuma bandeira ativa encontrada."})}):a.jsx(DP,{children:o.map(q=>{const X=w.includes(q.id),oe=()=>{u||C(se=>X?se.filter(fe=>fe!==q.id):[...se,q.id])};return a.jsxs(IP,{$checked:X,onClick:oe,children:[a.jsx(MP,{$checked:X,children:X&&a.jsx(m_,{size:11,color:"#fff",strokeWidth:3})}),a.jsxs(UP,{children:[a.jsx(BP,{children:q.name}),a.jsx(WP,{children:Za(q.price)})]})]},q.id)})}),w.length>0&&a.jsxs(w0,{children:[a.jsxs($0,{children:[w.length," bandeira",w.length!==1?"s":""," selecionada",w.length!==1?"s":""]}),a.jsx(k0,{children:Za(B)})]})]})]}),a.jsxs(Do,{style:{marginBottom:"24px"},children:[a.jsxs(Gi,{children:[a.jsx(Yi,{children:a.jsx(Up,{size:18})}),a.jsx(Qi,{children:"Endereço"})]}),a.jsxs(_l,{children:[a.jsx(v0,{children:a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"address_street",children:"Logradouro"}),a.jsx(mt,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",$hasError:!!Q("address_street"),disabled:u,...A("address_street")}),Q("address_street")&&a.jsxs(Yt,{children:[a.jsx(ge,{size:11}),Q("address_street")]})]})}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"address_number",children:"Número"}),a.jsx(mt,{id:"address_number",type:"text",placeholder:"Nº",$hasError:!!Q("address_number"),disabled:u,...A("address_number")}),Q("address_number")&&a.jsxs(Yt,{children:[a.jsx(ge,{size:11}),Q("address_number")]})]}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"address_complement",children:"Complemento"}),a.jsx(mt,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",disabled:u,...A("address_complement")})]}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"address_neighborhood",children:"Bairro"}),a.jsx(mt,{id:"address_neighborhood",type:"text",placeholder:"Bairro",disabled:u,...A("address_neighborhood")})]}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"address_city",children:"Cidade"}),a.jsx(mt,{id:"address_city",type:"text",placeholder:"Cidade",disabled:u,...A("address_city")})]}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"address_state",children:"UF"}),a.jsxs(Ja,{id:"address_state",disabled:u,...A("address_state"),children:[a.jsx("option",{value:"",children:"Selecione"}),p8.map(q=>a.jsx("option",{value:q,children:q},q))]})]}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"address_zip",children:"CEP"}),a.jsx(mt,{id:"address_zip",type:"text",placeholder:"00000-000",$hasError:!!Q("address_zip"),disabled:u,...A("address_zip",{onChange:q=>N("address_zip",y8(q.target.value))})}),Q("address_zip")&&a.jsxs(Yt,{children:[a.jsx(ge,{size:11}),Q("address_zip")]})]})]})]}),a.jsxs(Do,{style:{marginBottom:"24px"},children:[a.jsxs(Gi,{children:[a.jsx(Yi,{children:a.jsx(Mp,{size:18})}),a.jsx(Qi,{children:"Conta Bancária"})]}),a.jsxs(EP,{children:[a.jsx(CP,{children:"Dados Bancários"}),k&&a.jsx(El,{style:{marginBottom:"12px",display:"block"},children:"Agência e conta são obrigatórios quando o banco é informado."}),a.jsxs(_l,{children:[a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),a.jsx(mt,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",$hasError:!!Q("bank_bank_name"),disabled:u,...A("bank_bank_name")}),Q("bank_bank_name")&&a.jsxs(Yt,{children:[a.jsx(ge,{size:11}),Q("bank_bank_name")]})]}),a.jsxs(Ie,{children:[a.jsxs(Ge,{htmlFor:"bank_agency",children:["Agência ",k&&a.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),a.jsx(mt,{id:"bank_agency",type:"text",placeholder:"0000",$hasError:!!Q("bank_agency"),disabled:u,...A("bank_agency")}),Q("bank_agency")&&a.jsxs(Yt,{children:[a.jsx(ge,{size:11}),Q("bank_agency")]})]}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),a.jsx(mt,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,disabled:u,...A("bank_agency_digit")})]}),a.jsxs(Ie,{children:[a.jsxs(Ge,{htmlFor:"bank_account",children:["Conta ",k&&a.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),a.jsx(mt,{id:"bank_account",type:"text",placeholder:"000000",$hasError:!!Q("bank_account"),disabled:u,...A("bank_account")}),Q("bank_account")&&a.jsxs(Yt,{children:[a.jsx(ge,{size:11}),Q("bank_account")]})]}),a.jsxs(Ie,{children:[a.jsx(Ge,{htmlFor:"bank_account_digit",children:"Dígito Conta"}),a.jsx(mt,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,disabled:u,...A("bank_account_digit")})]}),a.jsxs(Ie,{children:[a.jsxs(Ge,{htmlFor:"bank_account_type",children:["Tipo de Conta ",k&&a.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),a.jsx(Ja,{id:"bank_account_type",$hasError:!!Q("bank_account_type"),disabled:u,...A("bank_account_type"),children:f8.map(q=>a.jsx("option",{value:q.value,children:q.label},q.value))}),Q("bank_account_type")&&a.jsxs(Yt,{children:[a.jsx(ge,{size:11}),Q("bank_account_type")]})]})]})]})]}),a.jsxs(Do,{style:{marginBottom:"24px"},children:[a.jsxs(Gi,{children:[a.jsx(Yi,{children:a.jsx(ac,{size:18})}),a.jsx(Qi,{children:"Documentos"})]}),a.jsx(El,{style:{marginBottom:"16px",display:"block"},children:"Documentos são opcionais e podem ser adicionados depois pela edição do cliente."}),a.jsx(VP,{children:u8.map(q=>a.jsx(b8,{slot:q,selectedFile:_[q.key],onFileSelect:D,onClearFile:z,disabled:u},q.key))})]})]})]}),a.jsxs(n8,{children:[a.jsxs(r8,{type:"button",disabled:u,onClick:()=>e("/clientes"),children:[a.jsx(da,{size:15})," Cancelar"]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px"},children:[u&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",width:"220px"},children:[a.jsx(i8,{children:a.jsx(s8,{$percent:p})}),a.jsxs(a8,{children:[p,"%"]})]}),a.jsx(o8,{type:"submit",form:"create-client-form",$isSubmitting:u,disabled:u,children:V()})]})]})]})}const $8=lt`
  0%   { background-position: -400px 0; }
  100% { background-position:  400px 0; }
`,pb=lt`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,k8=lt`
  to { transform: rotate(360deg); }
`,S8=lt`
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`,j8=S.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  margin-bottom:   24px;
  gap:             16px;
  flex-wrap:       wrap;
`,_8=S.div`
  display:        flex;
  flex-direction: column;
  gap:            4px;
`,E8=S.h1`
  font-size:   1.375rem;
  font-weight: 700;
  color:       #3d2b1f;
  margin:      0;
  line-height: 1.2;
`,C8=S.p`
  font-size: 0.8125rem;
  color:     #a0856f;
  margin:    0;
`,P8=S.button`
  display:     inline-flex;
  align-items: center;
  gap:         8px;
  padding:     9px 18px;
  border:      none;
  border-radius: 8px;
  background:  #7a6455;
  color:       #fff;
  font-size:   0.8125rem;
  font-weight: 600;
  font-family: inherit;
  cursor:      pointer;
  transition:  background 0.15s, transform 0.1s;
  white-space: nowrap;

  &:hover  { background: #6b5547; }
  &:active { transform: scale(0.98); }
`,F8=S.div`
  display:       flex;
  align-items:   center;
  gap:           12px;
  margin-bottom: 16px;
  flex-wrap:     wrap;
`,T8=S.div`
  position: relative;
  flex:     1;
  min-width: 200px;
`,A8=S.span`
  position:   absolute;
  left:       10px;
  top:        50%;
  transform:  translateY(-50%);
  color:      #b8a49a;
  display:    flex;
  align-items: center;
  pointer-events: none;
`,R8=S.input`
  width:         100%;
  height:        36px;
  padding:       0 12px 0 32px;
  border:        1.5px solid #e4d9cf;
  border-radius: 8px;
  background:    #fdfaf8;
  font-size:     0.8125rem;
  font-family:   inherit;
  color:         #3d2b1f;
  transition:    border-color 0.15s, box-shadow 0.15s;
  box-sizing:    border-box;

  &::placeholder { color: #c2ae9e; }

  &:focus {
    outline:      none;
    border-color: #7a6455;
    box-shadow:   0 0 0 3px rgba(122, 100, 85, 0.12);
  }
`,C0=S.select`
  height:        36px;
  padding:       0 32px 0 10px;
  border:        1.5px solid #e4d9cf;
  border-radius: 8px;
  background:    #fdfaf8;
  font-size:     0.8125rem;
  font-family:   inherit;
  color:         #3d2b1f;
  cursor:        pointer;
  appearance:    none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat:   no-repeat;
  background-position: right 10px center;
  transition:    border-color 0.15s;

  &:focus {
    outline:      none;
    border-color: #7a6455;
    box-shadow:   0 0 0 3px rgba(122, 100, 85, 0.12);
  }
`,O8=S.div`
  background:    #fff;
  border:        1.5px solid #e4d9cf;
  border-radius: 12px;
  overflow:      hidden;
  animation:     ${pb} 0.2s ease;
`,z8=S.table`
  width:           100%;
  border-collapse: collapse;
`,N8=S.thead`
  background: #faf5f1;
  border-bottom: 1.5px solid #e4d9cf;
`,Oo=S.th`
  padding:     12px 16px;
  font-size:   0.6875rem;
  font-weight: 700;
  color:       #a0856f;
  text-align:  left;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
`,L8=S.tbody``,D8=S.tr`
  border-bottom: 1px solid #f0e8e2;
  transition:    background 0.1s;

  &:last-child { border-bottom: none; }
  &:hover      { background: #faf5f1; }
`,id=S.td`
  padding:   13px 16px;
  font-size: 0.8125rem;
  color:     #3d2b1f;
  font-weight: 600;
  vertical-align: middle;
`,P0=S.td`
  padding:   13px 16px;
  font-size: 0.8125rem;
  font-weight: 600;
  color:     #3d2b1f;
  vertical-align: middle;
`,I8=S.td`
  padding:   10px 16px;
  vertical-align: middle;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
`,M8={admin:"Admin",user:"Usuário",partner:"Parceiro"},U8={admin:{bg:"#ede9fe",color:"#5b21b6"},user:{bg:"#dbeafe",color:"#1e40af"},partner:{bg:"#ffedd5",color:"#9a3412"}},B8=S.span`
  display:       inline-flex;
  align-items:   center;
  gap:           4px;
  padding:       3px 9px;
  border-radius: 99px;
  font-size:     0.6875rem;
  font-weight:   700;
  letter-spacing: 0.03em;
  white-space:   nowrap;

  ${({$role:e})=>{const t=U8[e]??{bg:"#f3f4f6",color:"#374151"};return zr`
      background: ${t.bg};
      color:      ${t.color};
    `}}
`,W8=S.span`
  display:     inline-flex;
  align-items: center;
  gap:         5px;
  font-size:   0.8rem;
  font-weight: 600;

  ${({$active:e})=>e?zr`color: #065f46;`:zr`color: #991b1b;`}
`,sd={danger:{border:"#fca5a5",color:"#991b1b",hover:"#fee2e2"},success:{border:"#6ee7b7",color:"#065f46",hover:"#d1fae5"},edit:{border:"#6366f1",color:"#4338ca",hover:"#eef2ff"}},ad=S.button`
display:       inline-flex;
align-items:   center;
gap:           6px;
justify-content: center;
height: 32px;
  padding:       0px 12px;
  line-height: 1;
  border-radius: 6px;
  border:        1.5px solid ${({$variant:e})=>{var t;return((t=sd[e])==null?void 0:t.border)??"#e4d9cf"}};
  background:    transparent;
  color:         ${({$variant:e})=>{var t;return((t=sd[e])==null?void 0:t.color)??"#3d2b1f"}};
  font-size:     0.75rem;
  font-weight:   600;
  font-family:   inherit;
  cursor:        pointer;
  transition:    background 0.15s, transform 0.1s;
  white-space:   nowrap;

  &:hover {
    background: ${({$variant:e})=>{var t;return((t=sd[e])==null?void 0:t.hover)??"#faf5f1"}};
  }
  &:active { transform: scale(0.97); }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,V8=S.div`
  display:        flex;
  flex-direction: column;
  align-items:    center;
  padding:        60px 24px;
  gap:            10px;
  animation:      ${pb} 0.2s ease;
`,H8=S.div`
  color:         #d4c4b8;
  margin-bottom: 4px;
`,q8=S.p`
  font-size:   0.9375rem;
  font-weight: 600;
  color:       #7a6455;
  margin:      0;
`,G8=S.p`
  font-size: 0.8125rem;
  color:     #a0856f;
  margin:    0;
  text-align: center;
`,Y8=zr`
  background: linear-gradient(90deg, #f0e8e2 25%, #f7f0ec 50%, #f0e8e2 75%);
  background-size: 400px 100%;
  animation: ${$8} 1.4s ease infinite;
  border-radius: 4px;
`,Q8=S.tr`
  border-bottom: 1px solid #f0e8e2;
  &:last-child { border-bottom: none; }
`,zo=S.td`
  padding: 15px 16px;
  vertical-align: middle;
`,No=S.span`
  display: block;
  height:  13px;
  width:   ${({$w:e})=>e??"100%"};
  ${Y8}
`,X8=S.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  padding:         14px 20px;
  border-top:      1px solid #f0e8e2;
  flex-wrap:       wrap;
  gap:             12px;
`,K8=S.span`
  font-size: 0.8rem;
  color:     #a0856f;
`,J8=S.div`
  display:     flex;
  align-items: center;
  gap:         4px;
`,el=S.button`
  display:       inline-flex;
  align-items:   center;
  justify-content: center;
  min-width:     32px;
  height:        32px;
  padding:       0 6px;
  border:        1.5px solid ${({$active:e})=>e?"#7a6455":"#e4d9cf"};
  border-radius: 6px;
  background:    ${({$active:e})=>e?"#7a6455":"transparent"};
  color:         ${({$active:e})=>e?"#fff":"#7a6455"};
  font-size:     0.8125rem;
  font-weight:   ${({$active:e})=>e?700:500};
  font-family:   inherit;
  cursor:        ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity:       ${({disabled:e})=>e?.35:1};
  transition:    background 0.15s, border-color 0.15s;

  &:hover:not(:disabled):not([disabled]) {
    background:   ${({$active:e})=>e?"#6b5547":"#faf5f1"};
    border-color: #7a6455;
  }
`,hb=S.div`
  position:   fixed;
  inset:      0;
  background: rgba(30, 18, 10, 0.45);
  backdrop-filter: blur(2px);
  display:    flex;
  align-items: center;
  justify-content: center;
  z-index:    1000;
  padding:    16px;
`,mb=S.div`
  background:    #fff;
  border-radius: 14px;
  width:         100%;
  max-width:     440px;
  box-shadow:    0 20px 60px rgba(30, 18, 10, 0.18);
  animation:     ${S8} 0.2s ease;
  overflow:      hidden;
`,gb=S.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  padding:         20px 24px 16px;
  border-bottom:   1.5px solid #f0e8e2;
`,yb=S.h2`
  font-size:   1rem;
  font-weight: 700;
  color:       #3d2b1f;
  margin:      0;
`,xb=S.button`
  display:       inline-flex;
  align-items:   center;
  justify-content: center;
  width:         32px;
  height:        32px;
  border:        none;
  border-radius: 6px;
  background:    transparent;
  color:         #a0856f;
  cursor:        pointer;
  font-family:   inherit;
  transition:    background 0.15s;

  &:hover { background: #faf5f1; color: #3d2b1f; }
`,vb=S.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,bb=S.div`
  display:         flex;
  align-items:     center;
  justify-content: flex-end;
  gap:             10px;
  padding:         16px 24px 20px;
  border-top:      1.5px solid #f0e8e2;
`,wb=S.button`
  padding:       9px 18px;
  border:        1.5px solid #e4d9cf;
  border-radius: 8px;
  background:    transparent;
  color:         #7a6455;
  font-size:     0.8125rem;
  font-weight:   600;
  font-family:   inherit;
  cursor:        pointer;
  transition:    background 0.15s;

  &:hover:not(:disabled)  { background: #faf5f1; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,$b=S.button`
  display:       inline-flex;
  align-items:   center;
  gap:           7px;
  padding:       9px 18px;
  border:        none;
  border-radius: 8px;
  background:    #7a6455;
  color:         #fff;
  font-size:     0.8125rem;
  font-weight:   600;
  font-family:   inherit;
  cursor:        pointer;
  transition:    background 0.15s, transform 0.1s;

  &:hover:not(:disabled)  { background: #6b5547; }
  &:active:not(:disabled) { transform: scale(0.98); }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,kb=S.span`
  display:       inline-block;
  width:         14px;
  height:        14px;
  border:        2px solid rgba(255,255,255,0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation:     ${k8} 0.7s linear infinite;
`,mr=S.div`
  display:        flex;
  flex-direction: column;
  gap:            5px;
`,gr=S.label`
  font-size:   0.8rem;
  font-weight: 600;
  color:       #5c4033;
`,_s=S.input`
  height:        38px;
  padding:       0 12px;
  border:        1.5px solid ${({$hasError:e})=>e?"#ef4444":"#e4d9cf"};
  border-radius: 8px;
  background:    #fdfaf8;
  font-size:     0.875rem;
  font-family:   inherit;
  color:         #3d2b1f;
  transition:    border-color 0.15s, box-shadow 0.15s;

  &::placeholder { color: #c2ae9e; }

  &:focus {
    outline:      none;
    border-color: ${({$hasError:e})=>e?"#ef4444":"#7a6455"};
    box-shadow:   0 0 0 3px ${({$hasError:e})=>e?"rgba(239,68,68,0.12)":"rgba(122,100,85,0.12)"};
  }

  &:disabled { opacity: 0.6; cursor: not-allowed; background: #f7f0ec; }
`,Sb=S.select`
  height:        38px;
  padding:       0 32px 0 10px;
  border:        1.5px solid ${({$hasError:e})=>e?"#ef4444":"#e4d9cf"};
  border-radius: 8px;
  background:    #fdfaf8;
  font-size:     0.875rem;
  font-family:   inherit;
  color:         #3d2b1f;
  cursor:        pointer;
  appearance:    none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat:   no-repeat;
  background-position: right 10px center;
  transition:    border-color 0.15s, box-shadow 0.15s;

  &:focus {
    outline:      none;
    border-color: ${({$hasError:e})=>e?"#ef4444":"#7a6455"};
    box-shadow:   0 0 0 3px ${({$hasError:e})=>e?"rgba(239,68,68,0.12)":"rgba(122,100,85,0.12)"};
  }

  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,oo=S.span`
  display:     inline-flex;
  align-items: center;
  gap:         4px;
  font-size:   0.75rem;
  color:       #dc2626;
  font-weight: 500;
`,Z8=S.div`
  background:    #fffbeb;
  border:        1.5px solid #fcd34d;
  border-radius: 10px;
  padding:       16px;
  display:       flex;
  flex-direction: column;
  gap:           10px;
`,eF=S.p`
  font-size:   0.8125rem;
  color:       #78350f;
  font-weight: 600;
  margin:      0;
  line-height: 1.4;
`,tF=S.input`
  flex:          1;
  height:        36px;
  padding:       0 36px 0 10px;
  border:        1.5px solid #fcd34d;
  border-radius: 8px;
  background:    #fff;
  font-size:     0.875rem;
  font-family:   monospace;
  color:         #3d2b1f;
  font-weight:   600;
  letter-spacing: 0.08em;

  &:focus { outline: none; }
`,jb=S.div`
  position:    relative;
  display:     flex;
  align-items: center;
`,_b=S.button`
  position:   absolute;
  right:      6px;
  display:    inline-flex;
  align-items: center;
  justify-content: center;
  width:      28px;
  height:     28px;
  border:     none;
  background: transparent;
  color:      #a0856f;
  cursor:     pointer;
  border-radius: 4px;
  font-family: inherit;
  transition: color 0.15s;

  &:hover { color: #3d2b1f; }
`,nF=S.button`
  align-self:    flex-start;
  padding:       6px 14px;
  border:        1.5px solid #fcd34d;
  border-radius: 6px;
  background:    transparent;
  color:         #78350f;
  font-size:     0.75rem;
  font-weight:   700;
  font-family:   inherit;
  cursor:        pointer;
  transition:    background 0.15s;

  &:hover { background: #fef3c7; }
`,rF=15;function oF(){return Array.from({length:6}).map((e,t)=>a.jsxs(Q8,{children:[a.jsx(zo,{children:a.jsx(No,{$w:"55%"})}),a.jsx(zo,{children:a.jsx(No,{$w:"70%"})}),a.jsx(zo,{children:a.jsx(No,{$w:"40%"})}),a.jsx(zo,{children:a.jsx(No,{$w:"30%"})}),a.jsx(zo,{children:a.jsx(No,{$w:"50%"})}),a.jsx(zo,{children:a.jsx(No,{$w:"60px"})})]},t))}const iF=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",sF={admin:a.jsx(hv,{size:12}),user:a.jsx(R_,{size:12}),partner:a.jsx(k_,{size:12})};function aF({onClose:e,onCreated:t}){const[n,r]=L.useState({name:"",email:"",role:"user"}),[o,i]=L.useState({}),[s,l]=L.useState(!1),[c,f]=L.useState(!1),[u,d]=L.useState(null),[p,m]=L.useState(!1);L.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),L.useEffect(()=>{const y=x=>{x.key==="Escape"&&e()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[e]);const g=()=>{const y={};return n.name.trim()?n.name.trim().length>150&&(y.name="Nome deve ter no máximo 150 caracteres."):y.name="Nome é obrigatório.",n.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(y.email="Informe um e-mail válido."):y.email="E-mail é obrigatório.",["admin","user","partner"].includes(n.role)||(y.role="Selecione um papel válido."),y},b=y=>{const{name:x,value:w}=y.target;r(C=>({...C,[x]:w})),o[x]&&i(C=>({...C,[x]:void 0}))},$=async()=>{var x;const y=g();if(Object.keys(y).length>0){i(y);return}l(!0);try{const{data:w}=await Pe.post("/users",{name:n.name.trim(),email:n.email.toLowerCase().trim(),role:n.role});d(((x=w.data)==null?void 0:x.temporaryPassword)??null),ae.success("Usuário criado com sucesso!"),t()}catch(w){ae.error(qt(w,"Erro ao criar usuário."))}finally{l(!1)}},h=()=>{u&&navigator.clipboard.writeText(u).then(()=>{m(!0),setTimeout(()=>m(!1),2e3)})};return a.jsx(hb,{onClick:e,children:a.jsxs(mb,{onClick:y=>y.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[a.jsxs(gb,{children:[a.jsx(yb,{id:"modal-title",children:"Novo Usuário"}),a.jsx(xb,{type:"button",onClick:e,"aria-label":"Fechar",children:a.jsx(da,{size:18})})]}),a.jsxs(vb,{children:[u&&a.jsxs(Z8,{children:[a.jsx(eF,{children:"⚠️ Senha temporária gerada — anote e repasse ao usuário. Ela não será exibida novamente."}),a.jsxs(jb,{children:[a.jsx(tF,{type:c?"text":"password",value:u,readOnly:!0}),a.jsx(_b,{type:"button",onClick:()=>f(y=>!y),"aria-label":c?"Ocultar":"Mostrar",children:c?a.jsx(ii,{size:15}):a.jsx(si,{size:15})})]}),a.jsx(nF,{type:"button",onClick:h,children:p?"✓ Copiado!":"Copiar senha"})]}),!u&&a.jsxs(a.Fragment,{children:[a.jsxs(mr,{children:[a.jsx(gr,{htmlFor:"user-name",children:"Nome *"}),a.jsx(_s,{id:"user-name",name:"name",type:"text",placeholder:"Nome completo",value:n.name,onChange:b,$hasError:!!o.name,disabled:s,autoFocus:!0}),o.name&&a.jsxs(oo,{children:[a.jsx(ge,{size:11}),o.name]})]}),a.jsxs(mr,{children:[a.jsx(gr,{htmlFor:"user-email",children:"E-mail *"}),a.jsx(_s,{id:"user-email",name:"email",type:"email",placeholder:"usuario@empresa.com",value:n.email,onChange:b,$hasError:!!o.email,disabled:s}),o.email&&a.jsxs(oo,{children:[a.jsx(ge,{size:11}),o.email]})]}),a.jsxs(mr,{children:[a.jsx(gr,{htmlFor:"user-role",children:"Papel *"}),a.jsxs(Sb,{id:"user-role",name:"role",value:n.role,onChange:b,$hasError:!!o.role,disabled:s,children:[a.jsx("option",{value:"user",children:"Usuário"}),a.jsx("option",{value:"admin",children:"Administrador"}),a.jsx("option",{value:"partner",children:"Parceiro"})]}),o.role&&a.jsxs(oo,{children:[a.jsx(ge,{size:11}),o.role]})]})]})]}),a.jsxs(bb,{children:[a.jsx(wb,{type:"button",onClick:e,disabled:s,children:u?"Fechar":"Cancelar"}),!u&&a.jsx($b,{type:"button",onClick:$,disabled:s,children:s?a.jsxs(a.Fragment,{children:[a.jsx(kb,{}),"Criando…"]}):a.jsxs(a.Fragment,{children:[a.jsx(Js,{size:15}),"Criar Usuário"]})})]})]})})}function lF({user:e,onClose:t,onUpdated:n}){const[r,o]=L.useState({name:e.name,email:e.email,role:e.role,is_active:e.is_active}),[i,s]=L.useState(""),[l,c]=L.useState({}),[f,u]=L.useState(!1),[d,p]=L.useState(!1);L.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),L.useEffect(()=>{const $=h=>{h.key==="Escape"&&t()};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[t]);const m=()=>{const $={};return r.name.trim()?r.name.trim().length>150&&($.name="Nome deve ter no máximo 150 caracteres."):$.name="Nome é obrigatório.",r.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||($.email="Informe um e-mail válido."):$.email="E-mail é obrigatório.",["admin","user","partner"].includes(r.role)||($.role="Selecione um papel válido."),i&&i.length<8&&($.newPassword="A senha deve ter pelo menos 8 caracteres."),$},g=$=>{const{name:h,value:y,type:x,checked:w}=$.target,C=x==="checkbox"?w:y;o(_=>({..._,[h]:C})),l[h]&&c(_=>({..._,[h]:void 0}))},b=async()=>{const $=m();if(Object.keys($).length>0){c($);return}u(!0);try{const h={name:r.name.trim(),email:r.email.toLowerCase().trim(),role:r.role,is_active:r.is_active};i&&(h.password=i),await Pe.patch(`/users/${e.id}`,h),ae.success("Usuário atualizado com sucesso!"),n(),t()}catch(h){ae.error(qt(h,"Erro ao atualizar usuário."))}finally{u(!1)}};return a.jsx(hb,{onClick:t,children:a.jsxs(mb,{onClick:$=>$.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"edit-modal-title",children:[a.jsxs(gb,{children:[a.jsx(yb,{id:"edit-modal-title",children:"Editar Usuário"}),a.jsx(xb,{type:"button",onClick:t,"aria-label":"Fechar",children:a.jsx(da,{size:18})})]}),a.jsxs(vb,{children:[a.jsxs(mr,{children:[a.jsx(gr,{htmlFor:"edit-name",children:"Nome *"}),a.jsx(_s,{id:"edit-name",name:"name",type:"text",placeholder:"Nome completo",value:r.name,onChange:g,$hasError:!!l.name,disabled:f,autoFocus:!0}),l.name&&a.jsxs(oo,{children:[a.jsx(ge,{size:11}),l.name]})]}),a.jsxs(mr,{children:[a.jsx(gr,{htmlFor:"edit-email",children:"E-mail *"}),a.jsx(_s,{id:"edit-email",name:"email",type:"email",placeholder:"usuario@empresa.com",value:r.email,onChange:g,disabled:!0,$hasError:!!l.email}),l.email&&a.jsxs(oo,{children:[a.jsx(ge,{size:11}),l.email]})]}),a.jsxs(mr,{children:[a.jsx(gr,{htmlFor:"edit-role",children:"Papel *"}),a.jsxs(Sb,{id:"edit-role",name:"role",value:r.role,onChange:g,$hasError:!!l.role,disabled:f,children:[a.jsx("option",{value:"user",children:"Usuário"}),a.jsx("option",{value:"admin",children:"Administrador"}),a.jsx("option",{value:"partner",children:"Parceiro"})]}),l.role&&a.jsxs(oo,{children:[a.jsx(ge,{size:11}),l.role]})]}),a.jsx(mr,{children:a.jsxs(gr,{htmlFor:"edit-is_active",children:[a.jsx("input",{type:"checkbox",id:"edit-is_active",name:"is_active",checked:r.is_active,onChange:g,disabled:f,style:{marginRight:"8px"}}),"Usuário ativo"]})}),a.jsx("hr",{style:{margin:"16px 0",borderColor:"#e4d9cf"}}),a.jsxs(mr,{children:[a.jsx(gr,{htmlFor:"edit-password",children:"Nova senha (opcional)"}),a.jsxs(jb,{children:[a.jsx(_s,{id:"edit-password",type:d?"text":"password",placeholder:"Deixe em branco para manter a atual",value:i,onChange:$=>s($.target.value),$hasError:!!l.newPassword,disabled:f,style:{paddingRight:"40px"}}),a.jsx(_b,{type:"button",onClick:()=>p($=>!$),"aria-label":d?"Ocultar":"Mostrar",children:d?a.jsx(ii,{size:15}):a.jsx(si,{size:15})})]}),l.newPassword&&a.jsxs(oo,{children:[a.jsx(ge,{size:11}),l.newPassword]})]})]}),a.jsxs(bb,{children:[a.jsx(wb,{type:"button",onClick:t,disabled:f,children:"Cancelar"}),a.jsx($b,{type:"button",onClick:b,disabled:f,children:f?a.jsxs(a.Fragment,{children:[a.jsx(kb,{}),"Salvando…"]}):a.jsx(a.Fragment,{children:"Salvar alterações"})})]})]})})}function cF(){const e=Un(),{user:t,isAdmin:n}=Bn();L.useEffect(()=>{n||e("/clientes",{replace:!0})},[n,e]);const[r,o]=L.useState([]),[i,s]=L.useState({total:0,totalPages:1,currentPage:1}),[l,c]=L.useState(!0),[f,u]=L.useState(1),[d,p]=L.useState(""),[m,g]=L.useState(""),[b,$]=L.useState(""),[h,y]=L.useState(""),[x,w]=L.useState(!1),[C,_]=L.useState(null),P=L.useRef(null),v=L.useCallback(async()=>{var F,M,E;c(!0);try{const k=new URLSearchParams({page:f,limit:rF});h&&k.set("search",h),d&&k.set("role",d),m!==""&&k.set("is_active",m==="true"?1:0);const{data:D}=await Pe.get(`/users?${k.toString()}`);o(D.data??[]),s({total:((F=D.pagination)==null?void 0:F.total)??0,totalPages:((M=D.pagination)==null?void 0:M.totalPages)??1,currentPage:((E=D.pagination)==null?void 0:E.currentPage)??1})}catch(k){ae.error(qt(k,"Erro ao carregar usuários.")),o([])}finally{c(!1)}},[f,h,d,m]);L.useEffect(()=>{v()},[v]);const j=F=>{const M=F.target.value;$(M),P.current&&clearTimeout(P.current),P.current=setTimeout(()=>{y(M.trim()),u(1)},400)},T=F=>{p(F.target.value),u(1)},A=F=>{g(F.target.value),u(1)},R=async F=>{if(F.id===(t==null?void 0:t.id)){ae.warning("Você não pode desativar a própria conta.");return}if(window.confirm(`Desativar o usuário "${F.name}"?`))try{await Pe.patch(`/users/${F.id}/deactivate`),ae.success(`Usuário "${F.name}" desativado.`),v()}catch(M){ae.error(qt(M,"Erro ao desativar usuário."))}},N=async F=>{if(window.confirm(`Reativar o usuário "${F.name}"?`))try{await Pe.patch(`/users/${F.id}/reactivate`),ae.success(`Usuário "${F.name}" reativado.`),v()}catch(M){ae.error(qt(M,"Erro ao reativar usuário."))}};return n?a.jsxs(a.Fragment,{children:[a.jsxs(j8,{children:[a.jsxs(_8,{children:[a.jsx(E8,{children:"Usuários"}),a.jsx(C8,{children:i.total>0?`${i.total} usuário${i.total!==1?"s":""} cadastrado${i.total!==1?"s":""}`:"Nenhum usuário cadastrado ainda"})]}),a.jsxs(P8,{type:"button",onClick:()=>w(!0),children:[a.jsx(Js,{size:16}),"Novo Usuário"]})]}),a.jsxs(F8,{children:[a.jsxs(T8,{children:[a.jsx(A8,{children:a.jsx(pv,{size:15})}),a.jsx(R8,{type:"text",placeholder:"Buscar por nome ou e-mail…",value:b,onChange:j})]}),a.jsxs(C0,{value:d,onChange:T,children:[a.jsx("option",{value:"",children:"Todos os papéis"}),a.jsx("option",{value:"admin",children:"Administrador"}),a.jsx("option",{value:"user",children:"Usuário"}),a.jsx("option",{value:"partner",children:"Parceiro"})]}),a.jsxs(C0,{value:m,onChange:A,children:[a.jsx("option",{value:"",children:"Todos os status"}),a.jsx("option",{value:"true",children:"Ativos"}),a.jsx("option",{value:"false",children:"Inativos"})]})]}),a.jsxs(O8,{children:[a.jsxs(z8,{children:[a.jsx(N8,{children:a.jsxs("tr",{children:[a.jsx(Oo,{children:"Nome"}),a.jsx(Oo,{children:"E-mail"}),a.jsx(Oo,{children:"Papel"}),a.jsx(Oo,{children:"Status"}),a.jsx(Oo,{children:"Último acesso"}),a.jsx(Oo,{children:"Ações"})]})}),a.jsxs(L8,{children:[l&&a.jsx(oF,{}),!l&&r.map(F=>a.jsxs(D8,{children:[a.jsx(id,{children:F.name}),a.jsx(P0,{children:F.email}),a.jsx(id,{children:a.jsxs(B8,{$role:F.role,children:[sF[F.role],M8[F.role]??F.role]})}),a.jsx(id,{children:a.jsx(W8,{$active:F.is_active,children:F.is_active?a.jsxs(a.Fragment,{children:[a.jsx(g_,{size:13}),"Ativo"]}):a.jsxs(a.Fragment,{children:[a.jsx(x_,{size:13}),"Inativo"]})})}),a.jsx(P0,{children:F.last_login_at?iF(F.last_login_at):"Nunca acessou"}),a.jsxs(I8,{children:[a.jsxs(ad,{type:"button",$variant:"edit",onClick:()=>_(F),title:"Editar usuário",style:{marginRight:"8px"},children:[a.jsx(A_,{size:14})," Editar"]}),F.is_active?a.jsx(ad,{type:"button",$variant:"danger",onClick:()=>R(F),title:"Desativar usuário",children:"Desativar"}):a.jsx(ad,{type:"button",$variant:"success",onClick:()=>N(F),title:"Reativar usuário",children:"Reativar"})]})]},F.id)),!l&&r.length===0&&a.jsx("tr",{children:a.jsx("td",{colSpan:6,children:a.jsxs(V8,{children:[a.jsx(H8,{children:a.jsx(Zs,{size:40})}),a.jsx(q8,{children:"Nenhum usuário encontrado"}),a.jsx(G8,{children:b||d||m?"Tente ajustar os filtros para ver mais resultados.":'Clique em "Novo Usuário" para criar o primeiro.'})]})})})]})]}),!l&&i.totalPages>1&&a.jsxs(X8,{children:[a.jsxs(K8,{children:["Página ",i.currentPage," de ",i.totalPages," ","· ",i.total," registros"]}),a.jsxs(J8,{children:[a.jsx(el,{type:"button",onClick:()=>u(F=>Math.max(1,F-1)),disabled:f<=1,"aria-label":"Página anterior",children:a.jsx(cv,{size:15})}),Array.from({length:i.totalPages},(F,M)=>M+1).filter(F=>F===1||F===i.totalPages||Math.abs(F-f)<=2).reduce((F,M,E,k)=>(E>0&&M-k[E-1]>1&&F.push("…"),F.push(M),F),[]).map((F,M)=>F==="…"?a.jsx(el,{disabled:!0,as:"span",children:"…"},`ellipsis-${M}`):a.jsx(el,{type:"button",$active:F===f,onClick:()=>u(F),children:F},F)),a.jsx(el,{type:"button",onClick:()=>u(F=>Math.min(i.totalPages,F+1)),disabled:f>=i.totalPages,"aria-label":"Próxima página",children:a.jsx(uv,{size:15})})]})]})]}),x&&a.jsx(aF,{onClose:()=>w(!1),onCreated:()=>v()}),C&&a.jsx(lF,{user:C,onClose:()=>_(null),onUpdated:()=>v()})]}):null}const Zi=({title:e})=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center",justifyContent:"center",minHeight:"60vh",color:"#7a6455"},children:[a.jsx("p",{style:{fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Em construção"}),a.jsx("p",{style:{fontSize:"22px",fontWeight:"700",fontFamily:"serif"},children:e})]});function uF(){const e=window.location.hostname.includes("github.io"),t=e?Z$:J$,n=e?{}:{basename:"/bgrepresentacoes-web/"};return a.jsxs(iS,{theme:ES,children:[a.jsx(CS,{}),a.jsx(t,{...n,children:a.jsxs(l_,{children:[a.jsx(bS,{position:"top-right",autoClose:4e3,theme:"light"}),a.jsxs(V$,{children:[a.jsx(rt,{path:"/login",element:a.jsx(wE,{})}),a.jsxs(rt,{element:a.jsx(Du,{}),children:[a.jsx(rt,{path:"/alterar-senha",element:a.jsx(F4,{})}),a.jsxs(rt,{element:a.jsx(x5,{}),children:[a.jsx(rt,{path:"/dashboard",element:a.jsx(_C,{})}),a.jsx(rt,{path:"/clientes",element:a.jsx(i6,{})}),a.jsx(rt,{path:"/clientes/:id",element:a.jsx(N6,{})}),a.jsx(rt,{path:"/clientes/:id/editar",element:a.jsx(fP,{})}),a.jsx(rt,{path:"/vendas",element:a.jsx(Zi,{title:"Vendas"})}),a.jsx(rt,{path:"/perfil",element:a.jsx(Zi,{title:"Meu Perfil"})}),a.jsx(rt,{element:a.jsx(Du,{allowedRoles:["admin","user"]}),children:a.jsx(rt,{path:"/onboarding",element:a.jsx(w8,{})})}),a.jsxs(rt,{element:a.jsx(Du,{allowedRoles:["admin"]}),children:[a.jsx(rt,{path:"/usuarios",element:a.jsx(cF,{})}),a.jsx(rt,{path:"/bandeiras",element:a.jsx(Zi,{title:"Bandeiras"})}),a.jsx(rt,{path:"/planos",element:a.jsx(Zi,{title:"Planos"})}),a.jsx(rt,{path:"/relatorios",element:a.jsx(Zi,{title:"Relatórios"})})]}),a.jsx(rt,{path:"*",element:a.jsx(os,{to:"/dashboard",replace:!0})})]})]})]})]})})]})}ld.createRoot(document.getElementById("root")).render(a.jsx(le.StrictMode,{children:a.jsx(uF,{})}));
