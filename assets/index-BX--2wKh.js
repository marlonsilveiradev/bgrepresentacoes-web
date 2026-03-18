function P0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function T0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sh={exports:{}},$a={},bh={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=Symbol.for("react.element"),z0=Symbol.for("react.portal"),N0=Symbol.for("react.fragment"),F0=Symbol.for("react.strict_mode"),O0=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),I0=Symbol.for("react.forward_ref"),D0=Symbol.for("react.suspense"),B0=Symbol.for("react.memo"),M0=Symbol.for("react.lazy"),Dd=Symbol.iterator;function U0(e){return e===null||typeof e!="object"?null:(e=Dd&&e[Dd]||e["@@iterator"],typeof e=="function"?e:null)}var kh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eh=Object.assign,_h={};function wo(e,t,n){this.props=e,this.context=t,this.refs=_h,this.updater=n||kh}wo.prototype.isReactComponent={};wo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ch(){}Ch.prototype=wo.prototype;function yc(e,t,n){this.props=e,this.context=t,this.refs=_h,this.updater=n||kh}var xc=yc.prototype=new Ch;xc.constructor=yc;Eh(xc,wo.prototype);xc.isPureReactComponent=!0;var Bd=Array.isArray,jh=Object.prototype.hasOwnProperty,vc={current:null},Rh={key:!0,ref:!0,__self:!0,__source:!0};function Ph(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)jh.call(t,r)&&!Rh.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Ti,type:e,key:i,ref:s,props:o,_owner:vc.current}}function V0(e,t){return{$$typeof:Ti,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function wc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ti}function W0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Md=/\/+/g;function rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?W0(""+e.key):t.toString(36)}function gs(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ti:case z0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+rl(s,0):r,Bd(o)?(n="",e!=null&&(n=e.replace(Md,"$&/")+"/"),gs(o,t,n,"",function(c){return c})):o!=null&&(wc(o)&&(o=V0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Md,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Bd(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+rl(i,a);s+=gs(i,t,n,u,o)}else if(u=U0(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+rl(i,a++),s+=gs(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Wi(e,t,n){if(e==null)return e;var r=[],o=0;return gs(e,r,"","",function(i){return t.call(n,i,o++)}),r}function H0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ut={current:null},ys={transition:null},G0={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:ys,ReactCurrentOwner:vc};function Th(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Wi,forEach:function(e,t,n){Wi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wi(e,function(){t++}),t},toArray:function(e){return Wi(e,function(t){return t})||[]},only:function(e){if(!wc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=wo;ee.Fragment=N0;ee.Profiler=O0;ee.PureComponent=yc;ee.StrictMode=F0;ee.Suspense=D0;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G0;ee.act=Th;ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Eh({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=vc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)jh.call(t,u)&&!Rh.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ti,type:e.type,key:o,ref:i,props:r,_owner:s}};ee.createContext=function(e){return e={$$typeof:A0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:L0,_context:e},e.Consumer=e};ee.createElement=Ph;ee.createFactory=function(e){var t=Ph.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:I0,render:e}};ee.isValidElement=wc;ee.lazy=function(e){return{$$typeof:M0,_payload:{_status:-1,_result:e},_init:H0}};ee.memo=function(e,t){return{$$typeof:B0,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=ys.transition;ys.transition={};try{e()}finally{ys.transition=t}};ee.unstable_act=Th;ee.useCallback=function(e,t){return ut.current.useCallback(e,t)};ee.useContext=function(e){return ut.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return ut.current.useDeferredValue(e)};ee.useEffect=function(e,t){return ut.current.useEffect(e,t)};ee.useId=function(){return ut.current.useId()};ee.useImperativeHandle=function(e,t,n){return ut.current.useImperativeHandle(e,t,n)};ee.useInsertionEffect=function(e,t){return ut.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return ut.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return ut.current.useMemo(e,t)};ee.useReducer=function(e,t,n){return ut.current.useReducer(e,t,n)};ee.useRef=function(e){return ut.current.useRef(e)};ee.useState=function(e){return ut.current.useState(e)};ee.useSyncExternalStore=function(e,t,n){return ut.current.useSyncExternalStore(e,t,n)};ee.useTransition=function(){return ut.current.useTransition()};ee.version="18.3.1";bh.exports=ee;var j=bh.exports;const G=T0(j),q0=P0({__proto__:null,default:G},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0=j,Y0=Symbol.for("react.element"),K0=Symbol.for("react.fragment"),X0=Object.prototype.hasOwnProperty,J0=Q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z0={key:!0,ref:!0,__self:!0,__source:!0};function zh(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)X0.call(t,r)&&!Z0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Y0,type:e,key:i,ref:s,props:o,_owner:J0.current}}$a.Fragment=K0;$a.jsx=zh;$a.jsxs=zh;Sh.exports=$a;var l=Sh.exports,nu={},Nh={exports:{}},jt={},Fh={exports:{}},Oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,z){var U=N.length;N.push(z);e:for(;0<U;){var Y=U-1>>>1,q=N[Y];if(0<o(q,z))N[Y]=z,N[U]=q,U=Y;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],U=N.pop();if(U!==z){N[0]=U;e:for(var Y=0,q=N.length,pe=q>>>1;Y<pe;){var ae=2*(Y+1)-1,ve=N[ae],we=ae+1,Ae=N[we];if(0>o(ve,U))we<q&&0>o(Ae,ve)?(N[Y]=Ae,N[we]=U,Y=we):(N[Y]=ve,N[ae]=U,Y=ae);else if(we<q&&0>o(Ae,U))N[Y]=Ae,N[we]=U,Y=we;else break e}}return z}function o(N,z){var U=N.sortIndex-z.sortIndex;return U!==0?U:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],d=1,h=null,g=3,$=!1,y=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=N)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function v(N){if(w=!1,p(N),!y)if(n(u)!==null)y=!0,Z(E);else{var z=n(c);z!==null&&ne(v,z.startTime-N)}}function E(N,z){y=!1,w&&(w=!1,m(_),_=-1),$=!0;var U=g;try{for(p(z),h=n(u);h!==null&&(!(h.expirationTime>z)||N&&!W());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,g=h.priorityLevel;var q=Y(h.expirationTime<=z);z=e.unstable_now(),typeof q=="function"?h.callback=q:h===n(u)&&r(u),p(z)}else r(u);h=n(u)}if(h!==null)var pe=!0;else{var ae=n(c);ae!==null&&ne(v,ae.startTime-z),pe=!1}return pe}finally{h=null,g=U,$=!1}}var P=!1,k=null,_=-1,L=5,A=-1;function W(){return!(e.unstable_now()-A<L)}function D(){if(k!==null){var N=e.unstable_now();A=N;var z=!0;try{z=k(!0,N)}finally{z?V():(P=!1,k=null)}}else P=!1}var V;if(typeof f=="function")V=function(){f(D)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,te=X.port2;X.port1.onmessage=D,V=function(){te.postMessage(null)}}else V=function(){x(D,0)};function Z(N){k=N,P||(P=!0,V())}function ne(N,z){_=x(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||$||(y=!0,Z(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var U=g;g=z;try{return N()}finally{g=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var U=g;g=N;try{return z()}finally{g=U}},e.unstable_scheduleCallback=function(N,z,U){var Y=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Y+U:Y):U=Y,N){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=U+q,N={id:d++,callback:z,priorityLevel:N,startTime:U,expirationTime:q,sortIndex:-1},U>Y?(N.sortIndex=U,t(c,N),n(u)===null&&N===n(c)&&(w?(m(_),_=-1):w=!0,ne(v,U-Y))):(N.sortIndex=q,t(u,N),y||$||(y=!0,Z(E))),N},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(N){var z=g;return function(){var U=g;g=z;try{return N.apply(this,arguments)}finally{g=U}}}})(Oh);Fh.exports=Oh;var e1=Fh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1=j,Ct=e1;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lh=new Set,si={};function Cr(e,t){io(e,t),io(e+"Capture",t)}function io(e,t){for(si[e]=t,e=0;e<t.length;e++)Lh.add(t[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=Object.prototype.hasOwnProperty,n1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ud={},Vd={};function r1(e){return ru.call(Vd,e)?!0:ru.call(Ud,e)?!1:n1.test(e)?Vd[e]=!0:(Ud[e]=!0,!1)}function o1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function i1(e,t,n,r){if(t===null||typeof t>"u"||o1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ct(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new ct(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new ct(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new ct(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new ct(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new ct(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new ct(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new ct(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new ct(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new ct(e,5,!1,e.toLowerCase(),null,!1,!1)});var $c=/[\-:]([a-z])/g;function Sc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($c,Sc);Xe[t]=new ct(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($c,Sc);Xe[t]=new ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($c,Sc);Xe[t]=new ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new ct(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new ct(e,1,!1,e.toLowerCase(),null,!0,!0)});function bc(e,t,n,r){var o=Xe.hasOwnProperty(t)?Xe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(i1(t,n,o,r)&&(n=null),r||o===null?r1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wn=t1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hi=Symbol.for("react.element"),Br=Symbol.for("react.portal"),Mr=Symbol.for("react.fragment"),kc=Symbol.for("react.strict_mode"),ou=Symbol.for("react.profiler"),Ah=Symbol.for("react.provider"),Ih=Symbol.for("react.context"),Ec=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),su=Symbol.for("react.suspense_list"),_c=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),Dh=Symbol.for("react.offscreen"),Wd=Symbol.iterator;function _o(e){return e===null||typeof e!="object"?null:(e=Wd&&e[Wd]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Object.assign,ol;function Do(e){if(ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ol=t&&t[1]||""}return`
`+ol+e}var il=!1;function sl(e,t){if(!e||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Do(e):""}function s1(e){switch(e.tag){case 5:return Do(e.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return e=sl(e.type,!1),e;case 11:return e=sl(e.type.render,!1),e;case 1:return e=sl(e.type,!0),e;default:return""}}function au(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mr:return"Fragment";case Br:return"Portal";case ou:return"Profiler";case kc:return"StrictMode";case iu:return"Suspense";case su:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ih:return(e.displayName||"Context")+".Consumer";case Ah:return(e._context.displayName||"Context")+".Provider";case Ec:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _c:return t=e.displayName||null,t!==null?t:au(e.type)||"Memo";case _n:t=e._payload,e=e._init;try{return au(e(t))}catch{}}return null}function a1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return au(t);case 8:return t===kc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l1(e){var t=Bh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=l1(e))}function Mh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Is(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lu(e,t){var n=t.checked;return _e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Hd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uh(e,t){t=t.checked,t!=null&&bc(e,"checked",t,!1)}function uu(e,t){Uh(e,t);var n=qn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cu(e,t.type,n):t.hasOwnProperty("defaultValue")&&cu(e,t.type,qn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cu(e,t,n){(t!=="number"||Is(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bo=Array.isArray;function Zr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function du(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return _e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Bo(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qn(n)}}function Vh(e,t){var n=qn(t.value),r=qn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,Hh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u1=["Webkit","ms","Moz","O"];Object.keys(Ho).forEach(function(e){u1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ho[t]=Ho[e]})});function Gh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ho.hasOwnProperty(e)&&Ho[e]?(""+t).trim():t+"px"}function qh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Gh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var c1=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(e,t){if(t){if(c1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function hu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=null;function Cc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gu=null,eo=null,to=null;function Yd(e){if(e=Fi(e)){if(typeof gu!="function")throw Error(F(280));var t=e.stateNode;t&&(t=_a(t),gu(e.stateNode,e.type,t))}}function Qh(e){eo?to?to.push(e):to=[e]:eo=e}function Yh(){if(eo){var e=eo,t=to;if(to=eo=null,Yd(e),t)for(e=0;e<t.length;e++)Yd(t[e])}}function Kh(e,t){return e(t)}function Xh(){}var al=!1;function Jh(e,t,n){if(al)return e(t,n);al=!0;try{return Kh(e,t,n)}finally{al=!1,(eo!==null||to!==null)&&(Xh(),Yh())}}function li(e,t){var n=e.stateNode;if(n===null)return null;var r=_a(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var yu=!1;if(gn)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){yu=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{yu=!1}function d1(e,t,n,r,o,i,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Go=!1,Ds=null,Bs=!1,xu=null,f1={onError:function(e){Go=!0,Ds=e}};function p1(e,t,n,r,o,i,s,a,u){Go=!1,Ds=null,d1.apply(f1,arguments)}function h1(e,t,n,r,o,i,s,a,u){if(p1.apply(this,arguments),Go){if(Go){var c=Ds;Go=!1,Ds=null}else throw Error(F(198));Bs||(Bs=!0,xu=c)}}function jr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Kd(e){if(jr(e)!==e)throw Error(F(188))}function m1(e){var t=e.alternate;if(!t){if(t=jr(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Kd(o),e;if(i===r)return Kd(o),t;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function em(e){return e=m1(e),e!==null?tm(e):null}function tm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tm(e);if(t!==null)return t;e=e.sibling}return null}var nm=Ct.unstable_scheduleCallback,Xd=Ct.unstable_cancelCallback,g1=Ct.unstable_shouldYield,y1=Ct.unstable_requestPaint,ze=Ct.unstable_now,x1=Ct.unstable_getCurrentPriorityLevel,jc=Ct.unstable_ImmediatePriority,rm=Ct.unstable_UserBlockingPriority,Ms=Ct.unstable_NormalPriority,v1=Ct.unstable_LowPriority,om=Ct.unstable_IdlePriority,Sa=null,nn=null;function w1(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Sa,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:b1,$1=Math.log,S1=Math.LN2;function b1(e){return e>>>=0,e===0?32:31-($1(e)/S1|0)|0}var Qi=64,Yi=4194304;function Mo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Us(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Mo(a):(i&=s,i!==0&&(r=Mo(i)))}else s=n&~o,s!==0?r=Mo(s):i!==0&&(r=Mo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Gt(t),o=1<<n,r|=e[n],t&=~o;return r}function k1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Gt(i),a=1<<s,u=o[s];u===-1?(!(a&n)||a&r)&&(o[s]=k1(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function vu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function im(){var e=Qi;return Qi<<=1,!(Qi&4194240)&&(Qi=64),e}function ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=n}function _1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Gt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Rc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ce=0;function sm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var am,Pc,lm,um,cm,wu=!1,Ki=[],An=null,In=null,Dn=null,ui=new Map,ci=new Map,jn=[],C1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jd(e,t){switch(e){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function jo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Fi(t),t!==null&&Pc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function j1(e,t,n,r,o){switch(t){case"focusin":return An=jo(An,e,t,n,r,o),!0;case"dragenter":return In=jo(In,e,t,n,r,o),!0;case"mouseover":return Dn=jo(Dn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ui.set(i,jo(ui.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ci.set(i,jo(ci.get(i)||null,e,t,n,r,o)),!0}return!1}function dm(e){var t=ar(e.target);if(t!==null){var n=jr(t);if(n!==null){if(t=n.tag,t===13){if(t=Zh(n),t!==null){e.blockedOn=t,cm(e.priority,function(){lm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$u(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mu=r,n.target.dispatchEvent(r),mu=null}else return t=Fi(n),t!==null&&Pc(t),e.blockedOn=n,!1;t.shift()}return!0}function Zd(e,t,n){xs(e)&&n.delete(t)}function R1(){wu=!1,An!==null&&xs(An)&&(An=null),In!==null&&xs(In)&&(In=null),Dn!==null&&xs(Dn)&&(Dn=null),ui.forEach(Zd),ci.forEach(Zd)}function Ro(e,t){e.blockedOn===t&&(e.blockedOn=null,wu||(wu=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,R1)))}function di(e){function t(o){return Ro(o,e)}if(0<Ki.length){Ro(Ki[0],e);for(var n=1;n<Ki.length;n++){var r=Ki[n];r.blockedOn===e&&(r.blockedOn=null)}}for(An!==null&&Ro(An,e),In!==null&&Ro(In,e),Dn!==null&&Ro(Dn,e),ui.forEach(t),ci.forEach(t),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)dm(n),n.blockedOn===null&&jn.shift()}var no=wn.ReactCurrentBatchConfig,Vs=!0;function P1(e,t,n,r){var o=ce,i=no.transition;no.transition=null;try{ce=1,Tc(e,t,n,r)}finally{ce=o,no.transition=i}}function T1(e,t,n,r){var o=ce,i=no.transition;no.transition=null;try{ce=4,Tc(e,t,n,r)}finally{ce=o,no.transition=i}}function Tc(e,t,n,r){if(Vs){var o=$u(e,t,n,r);if(o===null)xl(e,t,r,Ws,n),Jd(e,r);else if(j1(o,e,t,n,r))r.stopPropagation();else if(Jd(e,r),t&4&&-1<C1.indexOf(e)){for(;o!==null;){var i=Fi(o);if(i!==null&&am(i),i=$u(e,t,n,r),i===null&&xl(e,t,r,Ws,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else xl(e,t,r,null,n)}}var Ws=null;function $u(e,t,n,r){if(Ws=null,e=Cc(r),e=ar(e),e!==null)if(t=jr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ws=e,null}function fm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x1()){case jc:return 1;case rm:return 4;case Ms:case v1:return 16;case om:return 536870912;default:return 16}default:return 16}}var Tn=null,zc=null,vs=null;function pm(){if(vs)return vs;var e,t=zc,n=t.length,r,o="value"in Tn?Tn.value:Tn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return vs=o.slice(e,1<r?1-r:void 0)}function ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function ef(){return!1}function Rt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xi:ef,this.isPropagationStopped=ef,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=Rt($o),Ni=_e({},$o,{view:0,detail:0}),z1=Rt(Ni),ul,cl,Po,ba=_e({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Po&&(Po&&e.type==="mousemove"?(ul=e.screenX-Po.screenX,cl=e.screenY-Po.screenY):cl=ul=0,Po=e),ul)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),tf=Rt(ba),N1=_e({},ba,{dataTransfer:0}),F1=Rt(N1),O1=_e({},Ni,{relatedTarget:0}),dl=Rt(O1),L1=_e({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),A1=Rt(L1),I1=_e({},$o,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),D1=Rt(I1),B1=_e({},$o,{data:0}),nf=Rt(B1),M1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=V1[e])?!!t[e]:!1}function Fc(){return W1}var H1=_e({},Ni,{key:function(e){if(e.key){var t=M1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(e){return e.type==="keypress"?ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),G1=Rt(H1),q1=_e({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rf=Rt(q1),Q1=_e({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),Y1=Rt(Q1),K1=_e({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),X1=Rt(K1),J1=_e({},ba,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z1=Rt(J1),ex=[9,13,27,32],Oc=gn&&"CompositionEvent"in window,qo=null;gn&&"documentMode"in document&&(qo=document.documentMode);var tx=gn&&"TextEvent"in window&&!qo,hm=gn&&(!Oc||qo&&8<qo&&11>=qo),of=" ",sf=!1;function mm(e,t){switch(e){case"keyup":return ex.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function nx(e,t){switch(e){case"compositionend":return gm(t);case"keypress":return t.which!==32?null:(sf=!0,of);case"textInput":return e=t.data,e===of&&sf?null:e;default:return null}}function rx(e,t){if(Ur)return e==="compositionend"||!Oc&&mm(e,t)?(e=pm(),vs=zc=Tn=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hm&&t.locale!=="ko"?null:t.data;default:return null}}var ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ox[e.type]:t==="textarea"}function ym(e,t,n,r){Qh(r),t=Hs(t,"onChange"),0<t.length&&(n=new Nc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qo=null,fi=null;function ix(e){jm(e,0)}function ka(e){var t=Hr(e);if(Mh(t))return e}function sx(e,t){if(e==="change")return t}var xm=!1;if(gn){var fl;if(gn){var pl="oninput"in document;if(!pl){var lf=document.createElement("div");lf.setAttribute("oninput","return;"),pl=typeof lf.oninput=="function"}fl=pl}else fl=!1;xm=fl&&(!document.documentMode||9<document.documentMode)}function uf(){Qo&&(Qo.detachEvent("onpropertychange",vm),fi=Qo=null)}function vm(e){if(e.propertyName==="value"&&ka(fi)){var t=[];ym(t,fi,e,Cc(e)),Jh(ix,t)}}function ax(e,t,n){e==="focusin"?(uf(),Qo=t,fi=n,Qo.attachEvent("onpropertychange",vm)):e==="focusout"&&uf()}function lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ka(fi)}function ux(e,t){if(e==="click")return ka(t)}function cx(e,t){if(e==="input"||e==="change")return ka(t)}function dx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:dx;function pi(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ru.call(t,o)||!Yt(e[o],t[o]))return!1}return!0}function cf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function df(e,t){var n=cf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cf(n)}}function wm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $m(){for(var e=window,t=Is();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Is(e.document)}return t}function Lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fx(e){var t=$m(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wm(n.ownerDocument.documentElement,n)){if(r!==null&&Lc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=df(n,i);var s=df(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var px=gn&&"documentMode"in document&&11>=document.documentMode,Vr=null,Su=null,Yo=null,bu=!1;function ff(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bu||Vr==null||Vr!==Is(r)||(r=Vr,"selectionStart"in r&&Lc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yo&&pi(Yo,r)||(Yo=r,r=Hs(Su,"onSelect"),0<r.length&&(t=new Nc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vr)))}function Ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wr={animationend:Ji("Animation","AnimationEnd"),animationiteration:Ji("Animation","AnimationIteration"),animationstart:Ji("Animation","AnimationStart"),transitionend:Ji("Transition","TransitionEnd")},hl={},Sm={};gn&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function Ea(e){if(hl[e])return hl[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sm)return hl[e]=t[n];return e}var bm=Ea("animationend"),km=Ea("animationiteration"),Em=Ea("animationstart"),_m=Ea("transitionend"),Cm=new Map,pf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,t){Cm.set(e,t),Cr(t,[e])}for(var ml=0;ml<pf.length;ml++){var gl=pf[ml],hx=gl.toLowerCase(),mx=gl[0].toUpperCase()+gl.slice(1);Yn(hx,"on"+mx)}Yn(bm,"onAnimationEnd");Yn(km,"onAnimationIteration");Yn(Em,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(_m,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function hf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,h1(r,t,void 0,e),e.currentTarget=null}function jm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;hf(o,a,c),i=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;hf(o,a,c),i=u}}}if(Bs)throw e=xu,Bs=!1,xu=null,e}function he(e,t){var n=t[ju];n===void 0&&(n=t[ju]=new Set);var r=e+"__bubble";n.has(r)||(Rm(t,e,2,!1),n.add(r))}function yl(e,t,n){var r=0;t&&(r|=4),Rm(n,e,r,t)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function hi(e){if(!e[Zi]){e[Zi]=!0,Lh.forEach(function(n){n!=="selectionchange"&&(gx.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zi]||(t[Zi]=!0,yl("selectionchange",!1,t))}}function Rm(e,t,n,r){switch(fm(t)){case 1:var o=P1;break;case 4:o=T1;break;default:o=Tc}n=o.bind(null,t,n,e),o=void 0,!yu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function xl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;a!==null;){if(s=ar(a),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}a=a.parentNode}}r=r.return}Jh(function(){var c=i,d=Cc(n),h=[];e:{var g=Cm.get(e);if(g!==void 0){var $=Nc,y=e;switch(e){case"keypress":if(ws(n)===0)break e;case"keydown":case"keyup":$=G1;break;case"focusin":y="focus",$=dl;break;case"focusout":y="blur",$=dl;break;case"beforeblur":case"afterblur":$=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=F1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Y1;break;case bm:case km:case Em:$=A1;break;case _m:$=X1;break;case"scroll":$=z1;break;case"wheel":$=Z1;break;case"copy":case"cut":case"paste":$=D1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=rf}var w=(t&4)!==0,x=!w&&e==="scroll",m=w?g!==null?g+"Capture":null:g;w=[];for(var f=c,p;f!==null;){p=f;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,m!==null&&(v=li(f,m),v!=null&&w.push(mi(f,v,p)))),x)break;f=f.return}0<w.length&&(g=new $(g,y,null,n,d),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",g&&n!==mu&&(y=n.relatedTarget||n.fromElement)&&(ar(y)||y[yn]))break e;if(($||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,$?(y=n.relatedTarget||n.toElement,$=c,y=y?ar(y):null,y!==null&&(x=jr(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):($=null,y=c),$!==y)){if(w=tf,v="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=rf,v="onPointerLeave",m="onPointerEnter",f="pointer"),x=$==null?g:Hr($),p=y==null?g:Hr(y),g=new w(v,f+"leave",$,n,d),g.target=x,g.relatedTarget=p,v=null,ar(d)===c&&(w=new w(m,f+"enter",y,n,d),w.target=p,w.relatedTarget=x,v=w),x=v,$&&y)t:{for(w=$,m=y,f=0,p=w;p;p=Nr(p))f++;for(p=0,v=m;v;v=Nr(v))p++;for(;0<f-p;)w=Nr(w),f--;for(;0<p-f;)m=Nr(m),p--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=Nr(w),m=Nr(m)}w=null}else w=null;$!==null&&mf(h,g,$,w,!1),y!==null&&x!==null&&mf(h,x,y,w,!0)}}e:{if(g=c?Hr(c):window,$=g.nodeName&&g.nodeName.toLowerCase(),$==="select"||$==="input"&&g.type==="file")var E=sx;else if(af(g))if(xm)E=cx;else{E=lx;var P=ax}else($=g.nodeName)&&$.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=ux);if(E&&(E=E(e,c))){ym(h,E,n,d);break e}P&&P(e,g,c),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&cu(g,"number",g.value)}switch(P=c?Hr(c):window,e){case"focusin":(af(P)||P.contentEditable==="true")&&(Vr=P,Su=c,Yo=null);break;case"focusout":Yo=Su=Vr=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,ff(h,n,d);break;case"selectionchange":if(px)break;case"keydown":case"keyup":ff(h,n,d)}var k;if(Oc)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ur?mm(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(hm&&n.locale!=="ko"&&(Ur||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ur&&(k=pm()):(Tn=d,zc="value"in Tn?Tn.value:Tn.textContent,Ur=!0)),P=Hs(c,_),0<P.length&&(_=new nf(_,e,null,n,d),h.push({event:_,listeners:P}),k?_.data=k:(k=gm(n),k!==null&&(_.data=k)))),(k=tx?nx(e,n):rx(e,n))&&(c=Hs(c,"onBeforeInput"),0<c.length&&(d=new nf("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=k))}jm(h,t)})}function mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hs(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=li(e,n),i!=null&&r.unshift(mi(e,i,o)),i=li(e,t),i!=null&&r.push(mi(e,i,o))),e=e.return}return r}function Nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mf(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=li(n,i),u!=null&&s.unshift(mi(n,u,a))):o||(u=li(n,i),u!=null&&s.push(mi(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var yx=/\r\n?/g,xx=/\u0000|\uFFFD/g;function gf(e){return(typeof e=="string"?e:""+e).replace(yx,`
`).replace(xx,"")}function es(e,t,n){if(t=gf(t),gf(e)!==t&&n)throw Error(F(425))}function Gs(){}var ku=null,Eu=null;function _u(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,vx=typeof clearTimeout=="function"?clearTimeout:void 0,yf=typeof Promise=="function"?Promise:void 0,wx=typeof queueMicrotask=="function"?queueMicrotask:typeof yf<"u"?function(e){return yf.resolve(null).then(e).catch($x)}:Cu;function $x(e){setTimeout(function(){throw e})}function vl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),di(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);di(t)}function Bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var So=Math.random().toString(36).slice(2),tn="__reactFiber$"+So,gi="__reactProps$"+So,yn="__reactContainer$"+So,ju="__reactEvents$"+So,Sx="__reactListeners$"+So,bx="__reactHandles$"+So;function ar(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yn]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xf(e);e!==null;){if(n=e[tn])return n;e=xf(e)}return t}e=n,n=e.parentNode}return null}function Fi(e){return e=e[tn]||e[yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function _a(e){return e[gi]||null}var Ru=[],Gr=-1;function Kn(e){return{current:e}}function ge(e){0>Gr||(e.current=Ru[Gr],Ru[Gr]=null,Gr--)}function fe(e,t){Gr++,Ru[Gr]=e.current,e.current=t}var Qn={},rt=Kn(Qn),ht=Kn(!1),yr=Qn;function so(e,t){var n=e.type.contextTypes;if(!n)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function mt(e){return e=e.childContextTypes,e!=null}function qs(){ge(ht),ge(rt)}function vf(e,t,n){if(rt.current!==Qn)throw Error(F(168));fe(rt,t),fe(ht,n)}function Pm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(F(108,a1(e)||"Unknown",o));return _e({},n,r)}function Qs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,yr=rt.current,fe(rt,e),fe(ht,ht.current),!0}function wf(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=Pm(e,t,yr),r.__reactInternalMemoizedMergedChildContext=e,ge(ht),ge(rt),fe(rt,e)):ge(ht),fe(ht,n)}var fn=null,Ca=!1,wl=!1;function Tm(e){fn===null?fn=[e]:fn.push(e)}function kx(e){Ca=!0,Tm(e)}function Xn(){if(!wl&&fn!==null){wl=!0;var e=0,t=ce;try{var n=fn;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}fn=null,Ca=!1}catch(o){throw fn!==null&&(fn=fn.slice(e+1)),nm(jc,Xn),o}finally{ce=t,wl=!1}}return null}var qr=[],Qr=0,Ys=null,Ks=0,Tt=[],zt=0,xr=null,pn=1,hn="";function nr(e,t){qr[Qr++]=Ks,qr[Qr++]=Ys,Ys=e,Ks=t}function zm(e,t,n){Tt[zt++]=pn,Tt[zt++]=hn,Tt[zt++]=xr,xr=e;var r=pn;e=hn;var o=32-Gt(r)-1;r&=~(1<<o),n+=1;var i=32-Gt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,pn=1<<32-Gt(t)+o|n<<o|r,hn=i+e}else pn=1<<i|n<<o|r,hn=e}function Ac(e){e.return!==null&&(nr(e,1),zm(e,1,0))}function Ic(e){for(;e===Ys;)Ys=qr[--Qr],qr[Qr]=null,Ks=qr[--Qr],qr[Qr]=null;for(;e===xr;)xr=Tt[--zt],Tt[zt]=null,hn=Tt[--zt],Tt[zt]=null,pn=Tt[--zt],Tt[zt]=null}var _t=null,bt=null,xe=!1,Vt=null;function Nm(e,t){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $f(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_t=e,bt=Bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_t=e,bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xr!==null?{id:pn,overflow:hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_t=e,bt=null,!0):!1;default:return!1}}function Pu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tu(e){if(xe){var t=bt;if(t){var n=t;if(!$f(e,t)){if(Pu(e))throw Error(F(418));t=Bn(n.nextSibling);var r=_t;t&&$f(e,t)?Nm(r,n):(e.flags=e.flags&-4097|2,xe=!1,_t=e)}}else{if(Pu(e))throw Error(F(418));e.flags=e.flags&-4097|2,xe=!1,_t=e}}}function Sf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_t=e}function ts(e){if(e!==_t)return!1;if(!xe)return Sf(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_u(e.type,e.memoizedProps)),t&&(t=bt)){if(Pu(e))throw Fm(),Error(F(418));for(;t;)Nm(e,t),t=Bn(t.nextSibling)}if(Sf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){bt=Bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}bt=null}}else bt=_t?Bn(e.stateNode.nextSibling):null;return!0}function Fm(){for(var e=bt;e;)e=Bn(e.nextSibling)}function ao(){bt=_t=null,xe=!1}function Dc(e){Vt===null?Vt=[e]:Vt.push(e)}var Ex=wn.ReactCurrentBatchConfig;function To(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bf(e){var t=e._init;return t(e._payload)}function Om(e){function t(m,f){if(e){var p=m.deletions;p===null?(m.deletions=[f],m.flags|=16):p.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function o(m,f){return m=Wn(m,f),m.index=0,m.sibling=null,m}function i(m,f,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<f?(m.flags|=2,f):p):(m.flags|=2,f)):(m.flags|=1048576,f)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,p,v){return f===null||f.tag!==6?(f=Cl(p,m.mode,v),f.return=m,f):(f=o(f,p),f.return=m,f)}function u(m,f,p,v){var E=p.type;return E===Mr?d(m,f,p.props.children,v,p.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_n&&bf(E)===f.type)?(v=o(f,p.props),v.ref=To(m,f,p),v.return=m,v):(v=Cs(p.type,p.key,p.props,null,m.mode,v),v.ref=To(m,f,p),v.return=m,v)}function c(m,f,p,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=jl(p,m.mode,v),f.return=m,f):(f=o(f,p.children||[]),f.return=m,f)}function d(m,f,p,v,E){return f===null||f.tag!==7?(f=hr(p,m.mode,v,E),f.return=m,f):(f=o(f,p),f.return=m,f)}function h(m,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Cl(""+f,m.mode,p),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Hi:return p=Cs(f.type,f.key,f.props,null,m.mode,p),p.ref=To(m,null,f),p.return=m,p;case Br:return f=jl(f,m.mode,p),f.return=m,f;case _n:var v=f._init;return h(m,v(f._payload),p)}if(Bo(f)||_o(f))return f=hr(f,m.mode,p,null),f.return=m,f;ns(m,f)}return null}function g(m,f,p,v){var E=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(m,f,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Hi:return p.key===E?u(m,f,p,v):null;case Br:return p.key===E?c(m,f,p,v):null;case _n:return E=p._init,g(m,f,E(p._payload),v)}if(Bo(p)||_o(p))return E!==null?null:d(m,f,p,v,null);ns(m,p)}return null}function $(m,f,p,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(p)||null,a(f,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Hi:return m=m.get(v.key===null?p:v.key)||null,u(f,m,v,E);case Br:return m=m.get(v.key===null?p:v.key)||null,c(f,m,v,E);case _n:var P=v._init;return $(m,f,p,P(v._payload),E)}if(Bo(v)||_o(v))return m=m.get(p)||null,d(f,m,v,E,null);ns(f,v)}return null}function y(m,f,p,v){for(var E=null,P=null,k=f,_=f=0,L=null;k!==null&&_<p.length;_++){k.index>_?(L=k,k=null):L=k.sibling;var A=g(m,k,p[_],v);if(A===null){k===null&&(k=L);break}e&&k&&A.alternate===null&&t(m,k),f=i(A,f,_),P===null?E=A:P.sibling=A,P=A,k=L}if(_===p.length)return n(m,k),xe&&nr(m,_),E;if(k===null){for(;_<p.length;_++)k=h(m,p[_],v),k!==null&&(f=i(k,f,_),P===null?E=k:P.sibling=k,P=k);return xe&&nr(m,_),E}for(k=r(m,k);_<p.length;_++)L=$(k,m,_,p[_],v),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?_:L.key),f=i(L,f,_),P===null?E=L:P.sibling=L,P=L);return e&&k.forEach(function(W){return t(m,W)}),xe&&nr(m,_),E}function w(m,f,p,v){var E=_o(p);if(typeof E!="function")throw Error(F(150));if(p=E.call(p),p==null)throw Error(F(151));for(var P=E=null,k=f,_=f=0,L=null,A=p.next();k!==null&&!A.done;_++,A=p.next()){k.index>_?(L=k,k=null):L=k.sibling;var W=g(m,k,A.value,v);if(W===null){k===null&&(k=L);break}e&&k&&W.alternate===null&&t(m,k),f=i(W,f,_),P===null?E=W:P.sibling=W,P=W,k=L}if(A.done)return n(m,k),xe&&nr(m,_),E;if(k===null){for(;!A.done;_++,A=p.next())A=h(m,A.value,v),A!==null&&(f=i(A,f,_),P===null?E=A:P.sibling=A,P=A);return xe&&nr(m,_),E}for(k=r(m,k);!A.done;_++,A=p.next())A=$(k,m,_,A.value,v),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?_:A.key),f=i(A,f,_),P===null?E=A:P.sibling=A,P=A);return e&&k.forEach(function(D){return t(m,D)}),xe&&nr(m,_),E}function x(m,f,p,v){if(typeof p=="object"&&p!==null&&p.type===Mr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Hi:e:{for(var E=p.key,P=f;P!==null;){if(P.key===E){if(E=p.type,E===Mr){if(P.tag===7){n(m,P.sibling),f=o(P,p.props.children),f.return=m,m=f;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_n&&bf(E)===P.type){n(m,P.sibling),f=o(P,p.props),f.ref=To(m,P,p),f.return=m,m=f;break e}n(m,P);break}else t(m,P);P=P.sibling}p.type===Mr?(f=hr(p.props.children,m.mode,v,p.key),f.return=m,m=f):(v=Cs(p.type,p.key,p.props,null,m.mode,v),v.ref=To(m,f,p),v.return=m,m=v)}return s(m);case Br:e:{for(P=p.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(m,f.sibling),f=o(f,p.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=jl(p,m.mode,v),f.return=m,m=f}return s(m);case _n:return P=p._init,x(m,f,P(p._payload),v)}if(Bo(p))return y(m,f,p,v);if(_o(p))return w(m,f,p,v);ns(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(m,f.sibling),f=o(f,p),f.return=m,m=f):(n(m,f),f=Cl(p,m.mode,v),f.return=m,m=f),s(m)):n(m,f)}return x}var lo=Om(!0),Lm=Om(!1),Xs=Kn(null),Js=null,Yr=null,Bc=null;function Mc(){Bc=Yr=Js=null}function Uc(e){var t=Xs.current;ge(Xs),e._currentValue=t}function zu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ro(e,t){Js=e,Bc=Yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pt=!0),e.firstContext=null)}function Ot(e){var t=e._currentValue;if(Bc!==e)if(e={context:e,memoizedValue:t,next:null},Yr===null){if(Js===null)throw Error(F(308));Yr=e,Js.dependencies={lanes:0,firstContext:e}}else Yr=Yr.next=e;return t}var lr=null;function Vc(e){lr===null?lr=[e]:lr.push(e)}function Am(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Vc(t)):(n.next=o.next,o.next=n),t.interleaved=n,xn(e,r)}function xn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Cn=!1;function Wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Im(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,xn(e,n)}return o=r.interleaved,o===null?(t.next=t,Vc(r)):(t.next=o.next,o.next=t),r.interleaved=t,xn(e,n)}function $s(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rc(e,n)}}function kf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zs(e,t,n,r){var o=e.updateQueue;Cn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;s=0,d=c=u=null,a=i;do{var g=a.lane,$=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:$,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(g=t,$=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call($,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call($,h,g):y,g==null)break e;h=_e({},h,g);break e;case 2:Cn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else $={eventTime:$,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=$,u=h):d=d.next=$,s|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(d===null&&(u=h),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);wr|=s,e.lanes=s,e.memoizedState=h}}function Ef(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(F(191,o));o.call(r)}}}var Oi={},rn=Kn(Oi),yi=Kn(Oi),xi=Kn(Oi);function ur(e){if(e===Oi)throw Error(F(174));return e}function Hc(e,t){switch(fe(xi,t),fe(yi,e),fe(rn,Oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fu(t,e)}ge(rn),fe(rn,t)}function uo(){ge(rn),ge(yi),ge(xi)}function Dm(e){ur(xi.current);var t=ur(rn.current),n=fu(t,e.type);t!==n&&(fe(yi,e),fe(rn,n))}function Gc(e){yi.current===e&&(ge(rn),ge(yi))}var be=Kn(0);function ea(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function qc(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var Ss=wn.ReactCurrentDispatcher,Sl=wn.ReactCurrentBatchConfig,vr=0,ke=null,Be=null,He=null,ta=!1,Ko=!1,vi=0,_x=0;function Je(){throw Error(F(321))}function Qc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yt(e[n],t[n]))return!1;return!0}function Yc(e,t,n,r,o,i){if(vr=i,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ss.current=e===null||e.memoizedState===null?Px:Tx,e=n(r,o),Ko){i=0;do{if(Ko=!1,vi=0,25<=i)throw Error(F(301));i+=1,He=Be=null,t.updateQueue=null,Ss.current=zx,e=n(r,o)}while(Ko)}if(Ss.current=na,t=Be!==null&&Be.next!==null,vr=0,He=Be=ke=null,ta=!1,t)throw Error(F(300));return e}function Kc(){var e=vi!==0;return vi=0,e}function Zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?ke.memoizedState=He=e:He=He.next=e,He}function Lt(){if(Be===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=He===null?ke.memoizedState:He.next;if(t!==null)He=t,Be=e;else{if(e===null)throw Error(F(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},He===null?ke.memoizedState=He=e:He=He.next=e}return He}function wi(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=Lt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=Be,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,u=null,c=i;do{var d=c.lane;if((vr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,s=r):u=u.next=h,ke.lanes|=d,wr|=d}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=a,Yt(r,t.memoizedState)||(pt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ke.lanes|=i,wr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function kl(e){var t=Lt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Yt(i,t.memoizedState)||(pt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Bm(){}function Mm(e,t){var n=ke,r=Lt(),o=t(),i=!Yt(r.memoizedState,o);if(i&&(r.memoizedState=o,pt=!0),r=r.queue,Xc(Wm.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,$i(9,Vm.bind(null,n,r,o,t),void 0,null),qe===null)throw Error(F(349));vr&30||Um(n,t,o)}return o}function Um(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vm(e,t,n,r){t.value=n,t.getSnapshot=r,Hm(t)&&Gm(e)}function Wm(e,t,n){return n(function(){Hm(t)&&Gm(e)})}function Hm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yt(e,n)}catch{return!0}}function Gm(e){var t=xn(e,1);t!==null&&qt(t,e,1,-1)}function _f(e){var t=Zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:e},t.queue=e,e=e.dispatch=Rx.bind(null,ke,e),[t.memoizedState,e]}function $i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qm(){return Lt().memoizedState}function bs(e,t,n,r){var o=Zt();ke.flags|=e,o.memoizedState=$i(1|t,n,void 0,r===void 0?null:r)}function ja(e,t,n,r){var o=Lt();r=r===void 0?null:r;var i=void 0;if(Be!==null){var s=Be.memoizedState;if(i=s.destroy,r!==null&&Qc(r,s.deps)){o.memoizedState=$i(t,n,i,r);return}}ke.flags|=e,o.memoizedState=$i(1|t,n,i,r)}function Cf(e,t){return bs(8390656,8,e,t)}function Xc(e,t){return ja(2048,8,e,t)}function Qm(e,t){return ja(4,2,e,t)}function Ym(e,t){return ja(4,4,e,t)}function Km(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xm(e,t,n){return n=n!=null?n.concat([e]):null,ja(4,4,Km.bind(null,t,e),n)}function Jc(){}function Jm(e,t){var n=Lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zm(e,t){var n=Lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function eg(e,t,n){return vr&21?(Yt(n,t)||(n=im(),ke.lanes|=n,wr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=n)}function Cx(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=Sl.transition;Sl.transition={};try{e(!1),t()}finally{ce=n,Sl.transition=r}}function tg(){return Lt().memoizedState}function jx(e,t,n){var r=Vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ng(e))rg(t,n);else if(n=Am(e,t,n,r),n!==null){var o=lt();qt(n,e,r,o),og(n,t,r)}}function Rx(e,t,n){var r=Vn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ng(e))rg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,Yt(a,s)){var u=t.interleaved;u===null?(o.next=o,Vc(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Am(e,t,o,r),n!==null&&(o=lt(),qt(n,e,r,o),og(n,t,r))}}function ng(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function rg(e,t){Ko=ta=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function og(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rc(e,n)}}var na={readContext:Ot,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},Px={readContext:Ot,useCallback:function(e,t){return Zt().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:Cf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bs(4194308,4,Km.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bs(4194308,4,e,t)},useInsertionEffect:function(e,t){return bs(4,2,e,t)},useMemo:function(e,t){var n=Zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jx.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Zt();return e={current:e},t.memoizedState=e},useState:_f,useDebugValue:Jc,useDeferredValue:function(e){return Zt().memoizedState=e},useTransition:function(){var e=_f(!1),t=e[0];return e=Cx.bind(null,e[1]),Zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,o=Zt();if(xe){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),qe===null)throw Error(F(349));vr&30||Um(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Cf(Wm.bind(null,r,i,e),[e]),r.flags|=2048,$i(9,Vm.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Zt(),t=qe.identifierPrefix;if(xe){var n=hn,r=pn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_x++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tx={readContext:Ot,useCallback:Jm,useContext:Ot,useEffect:Xc,useImperativeHandle:Xm,useInsertionEffect:Qm,useLayoutEffect:Ym,useMemo:Zm,useReducer:bl,useRef:qm,useState:function(){return bl(wi)},useDebugValue:Jc,useDeferredValue:function(e){var t=Lt();return eg(t,Be.memoizedState,e)},useTransition:function(){var e=bl(wi)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Bm,useSyncExternalStore:Mm,useId:tg,unstable_isNewReconciler:!1},zx={readContext:Ot,useCallback:Jm,useContext:Ot,useEffect:Xc,useImperativeHandle:Xm,useInsertionEffect:Qm,useLayoutEffect:Ym,useMemo:Zm,useReducer:kl,useRef:qm,useState:function(){return kl(wi)},useDebugValue:Jc,useDeferredValue:function(e){var t=Lt();return Be===null?t.memoizedState=e:eg(t,Be.memoizedState,e)},useTransition:function(){var e=kl(wi)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Bm,useSyncExternalStore:Mm,useId:tg,unstable_isNewReconciler:!1};function Bt(e,t){if(e&&e.defaultProps){t=_e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Nu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ra={isMounted:function(e){return(e=e._reactInternals)?jr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),o=Vn(e),i=mn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Mn(e,i,o),t!==null&&(qt(t,e,o,r),$s(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),o=Vn(e),i=mn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Mn(e,i,o),t!==null&&(qt(t,e,o,r),$s(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=Vn(e),o=mn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Mn(e,o,r),t!==null&&(qt(t,e,r,n),$s(t,e,r))}};function jf(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!pi(n,r)||!pi(o,i):!0}function ig(e,t,n){var r=!1,o=Qn,i=t.contextType;return typeof i=="object"&&i!==null?i=Ot(i):(o=mt(t)?yr:rt.current,r=t.contextTypes,i=(r=r!=null)?so(e,o):Qn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ra,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Rf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ra.enqueueReplaceState(t,t.state,null)}function Fu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Wc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ot(i):(i=mt(t)?yr:rt.current,o.context=so(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Nu(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ra.enqueueReplaceState(o,o.state,null),Zs(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function co(e,t){try{var n="",r=t;do n+=s1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function El(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ou(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Nx=typeof WeakMap=="function"?WeakMap:Map;function sg(e,t,n){n=mn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oa||(oa=!0,Hu=r),Ou(e,t)},n}function ag(e,t,n){n=mn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ou(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ou(e,t),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nx;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=qx.bind(null,e,t,n),t.then(e,e))}function Tf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zf(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mn(-1,1),t.tag=2,Mn(n,t,1))),n.lanes|=1),e)}var Fx=wn.ReactCurrentOwner,pt=!1;function st(e,t,n,r){t.child=e===null?Lm(t,null,n,r):lo(t,e.child,n,r)}function Nf(e,t,n,r,o){n=n.render;var i=t.ref;return ro(t,o),r=Yc(e,t,n,r,i,o),n=Kc(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vn(e,t,o)):(xe&&n&&Ac(t),t.flags|=1,st(e,t,r,o),t.child)}function Ff(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!sd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,lg(e,t,i,r,o)):(e=Cs(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(s,r)&&e.ref===t.ref)return vn(e,t,o)}return t.flags|=1,e=Wn(i,r),e.ref=t.ref,e.return=t,t.child=e}function lg(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(pi(i,r)&&e.ref===t.ref)if(pt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(pt=!0);else return t.lanes=e.lanes,vn(e,t,o)}return Lu(e,t,n,r,o)}function ug(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Xr,$t),$t|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(Xr,$t),$t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,fe(Xr,$t),$t|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,fe(Xr,$t),$t|=r;return st(e,t,o,n),t.child}function cg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Lu(e,t,n,r,o){var i=mt(n)?yr:rt.current;return i=so(t,i),ro(t,o),n=Yc(e,t,n,r,i,o),r=Kc(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vn(e,t,o)):(xe&&r&&Ac(t),t.flags|=1,st(e,t,n,o),t.child)}function Of(e,t,n,r,o){if(mt(n)){var i=!0;Qs(t)}else i=!1;if(ro(t,o),t.stateNode===null)ks(e,t),ig(t,n,r),Fu(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ot(c):(c=mt(n)?yr:rt.current,c=so(t,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Rf(t,s,r,c),Cn=!1;var g=t.memoizedState;s.state=g,Zs(t,r,s,o),u=t.memoizedState,a!==r||g!==u||ht.current||Cn?(typeof d=="function"&&(Nu(t,n,d,r),u=t.memoizedState),(a=Cn||jf(t,n,a,r,g,u,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Im(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Bt(t.type,a),s.props=c,h=t.pendingProps,g=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ot(u):(u=mt(n)?yr:rt.current,u=so(t,u));var $=n.getDerivedStateFromProps;(d=typeof $=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||g!==u)&&Rf(t,s,r,u),Cn=!1,g=t.memoizedState,s.state=g,Zs(t,r,s,o);var y=t.memoizedState;a!==h||g!==y||ht.current||Cn?(typeof $=="function"&&(Nu(t,n,$,r),y=t.memoizedState),(c=Cn||jf(t,n,c,r,g,y,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Au(e,t,n,r,i,o)}function Au(e,t,n,r,o,i){cg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&wf(t,n,!1),vn(e,t,i);r=t.stateNode,Fx.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=lo(t,e.child,null,i),t.child=lo(t,null,a,i)):st(e,t,a,i),t.memoizedState=r.state,o&&wf(t,n,!0),t.child}function dg(e){var t=e.stateNode;t.pendingContext?vf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vf(e,t.context,!1),Hc(e,t.containerInfo)}function Lf(e,t,n,r,o){return ao(),Dc(o),t.flags|=256,st(e,t,n,r),t.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function Du(e){return{baseLanes:e,cachePool:null,transitions:null}}function fg(e,t,n){var r=t.pendingProps,o=be.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),fe(be,o&1),e===null)return Tu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=za(s,r,0,null),e=hr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Du(n),t.memoizedState=Iu,e):Zc(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Ox(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Wn(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Wn(a,i):(i=hr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Du(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Iu,r}return i=e.child,e=i.sibling,r=Wn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zc(e,t){return t=za({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rs(e,t,n,r){return r!==null&&Dc(r),lo(t,e.child,null,n),e=Zc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ox(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=El(Error(F(422))),rs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=za({mode:"visible",children:r.children},o,0,null),i=hr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&lo(t,e.child,null,s),t.child.memoizedState=Du(s),t.memoizedState=Iu,i);if(!(t.mode&1))return rs(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(F(419)),r=El(i,r,void 0),rs(e,t,s,r)}if(a=(s&e.childLanes)!==0,pt||a){if(r=qe,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,xn(e,o),qt(r,e,o,-1))}return id(),r=El(Error(F(421))),rs(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Qx.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,bt=Bn(o.nextSibling),_t=t,xe=!0,Vt=null,e!==null&&(Tt[zt++]=pn,Tt[zt++]=hn,Tt[zt++]=xr,pn=e.id,hn=e.overflow,xr=t),t=Zc(t,r.children),t.flags|=4096,t)}function Af(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zu(e.return,t,n)}function _l(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function pg(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(st(e,t,r.children,n),r=be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Af(e,n,t);else if(e.tag===19)Af(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(be,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ea(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),_l(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ea(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}_l(t,!0,n,null,i);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ks(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=Wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lx(e,t,n){switch(t.tag){case 3:dg(t),ao();break;case 5:Dm(t);break;case 1:mt(t.type)&&Qs(t);break;case 4:Hc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;fe(Xs,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(be,be.current&1),t.flags|=128,null):n&t.child.childLanes?fg(e,t,n):(fe(be,be.current&1),e=vn(e,t,n),e!==null?e.sibling:null);fe(be,be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pg(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),fe(be,be.current),r)break;return null;case 22:case 23:return t.lanes=0,ug(e,t,n)}return vn(e,t,n)}var hg,Bu,mg,gg;hg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bu=function(){};mg=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ur(rn.current);var i=null;switch(n){case"input":o=lu(e,o),r=lu(e,r),i=[];break;case"select":o=_e({},o,{value:void 0}),r=_e({},r,{value:void 0}),i=[];break;case"textarea":o=du(e,o),r=du(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gs)}pu(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(si.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(si.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&he("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};gg=function(e,t,n,r){n!==r&&(t.flags|=4)};function zo(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ax(e,t,n){var r=t.pendingProps;switch(Ic(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return mt(t.type)&&qs(),Ze(t),null;case 3:return r=t.stateNode,uo(),ge(ht),ge(rt),qc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vt!==null&&(Qu(Vt),Vt=null))),Bu(e,t),Ze(t),null;case 5:Gc(t);var o=ur(xi.current);if(n=t.type,e!==null&&t.stateNode!=null)mg(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return Ze(t),null}if(e=ur(rn.current),ts(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[tn]=t,r[gi]=i,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(o=0;o<Uo.length;o++)he(Uo[o],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Hd(r,i),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},he("invalid",r);break;case"textarea":qd(r,i),he("invalid",r)}pu(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&es(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&es(r.textContent,a,e),o=["children",""+a]):si.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&he("scroll",r)}switch(n){case"input":Gi(r),Gd(r,i,!0);break;case"textarea":Gi(r),Qd(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Gs)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[tn]=t,e[gi]=r,hg(e,t,!1,!1),t.stateNode=e;e:{switch(s=hu(n,r),n){case"dialog":he("cancel",e),he("close",e),o=r;break;case"iframe":case"object":case"embed":he("load",e),o=r;break;case"video":case"audio":for(o=0;o<Uo.length;o++)he(Uo[o],e);o=r;break;case"source":he("error",e),o=r;break;case"img":case"image":case"link":he("error",e),he("load",e),o=r;break;case"details":he("toggle",e),o=r;break;case"input":Hd(e,r),o=lu(e,r),he("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=_e({},r,{value:void 0}),he("invalid",e);break;case"textarea":qd(e,r),o=du(e,r),he("invalid",e);break;default:o=r}pu(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?qh(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Hh(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ai(e,u):typeof u=="number"&&ai(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(si.hasOwnProperty(i)?u!=null&&i==="onScroll"&&he("scroll",e):u!=null&&bc(e,i,u,s))}switch(n){case"input":Gi(e),Gd(e,r,!1);break;case"textarea":Gi(e),Qd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Zr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Zr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Gs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)gg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=ur(xi.current),ur(rn.current),ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[tn]=t,(i=r.nodeValue!==n)&&(e=_t,e!==null))switch(e.tag){case 3:es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&es(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=t,t.stateNode=r}return Ze(t),null;case 13:if(ge(be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&bt!==null&&t.mode&1&&!(t.flags&128))Fm(),ao(),t.flags|=98560,i=!1;else if(i=ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(F(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[tn]=t}else ao(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),i=!1}else Vt!==null&&(Qu(Vt),Vt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||be.current&1?Ue===0&&(Ue=3):id())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return uo(),Bu(e,t),e===null&&hi(t.stateNode.containerInfo),Ze(t),null;case 10:return Uc(t.type._context),Ze(t),null;case 17:return mt(t.type)&&qs(),Ze(t),null;case 19:if(ge(be),i=t.memoizedState,i===null)return Ze(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)zo(i,!1);else{if(Ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ea(e),s!==null){for(t.flags|=128,zo(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(be,be.current&1|2),t.child}e=e.sibling}i.tail!==null&&ze()>fo&&(t.flags|=128,r=!0,zo(i,!1),t.lanes=4194304)}else{if(!r)if(e=ea(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!xe)return Ze(t),null}else 2*ze()-i.renderingStartTime>fo&&n!==1073741824&&(t.flags|=128,r=!0,zo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ze(),t.sibling=null,n=be.current,fe(be,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return od(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$t&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function Ix(e,t){switch(Ic(t),t.tag){case 1:return mt(t.type)&&qs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return uo(),ge(ht),ge(rt),qc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gc(t),null;case 13:if(ge(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));ao()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(be),null;case 4:return uo(),null;case 10:return Uc(t.type._context),null;case 22:case 23:return od(),null;case 24:return null;default:return null}}var os=!1,tt=!1,Dx=typeof WeakSet=="function"?WeakSet:Set,M=null;function Kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function Mu(e,t,n){try{n()}catch(r){Re(e,t,r)}}var If=!1;function Bx(e,t){if(ku=Vs,e=$m(),Lc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,d=0,h=e,g=null;t:for(;;){for(var $;h!==n||o!==0&&h.nodeType!==3||(a=s+o),h!==i||r!==0&&h.nodeType!==3||(u=s+r),h.nodeType===3&&(s+=h.nodeValue.length),($=h.firstChild)!==null;)g=h,h=$;for(;;){if(h===e)break t;if(g===n&&++c===o&&(a=s),g===i&&++d===r&&(u=s),($=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=$}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eu={focusedElem:e,selectionRange:n},Vs=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,x=y.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Bt(t.type,w),x);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(v){Re(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return y=If,If=!1,y}function Xo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Mu(t,n,i)}o=o.next}while(o!==r)}}function Pa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Uu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yg(e){var t=e.alternate;t!==null&&(e.alternate=null,yg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tn],delete t[gi],delete t[ju],delete t[Sx],delete t[bx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xg(e){return e.tag===5||e.tag===3||e.tag===4}function Df(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gs));else if(r!==4&&(e=e.child,e!==null))for(Vu(e,t,n),e=e.sibling;e!==null;)Vu(e,t,n),e=e.sibling}function Wu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wu(e,t,n),e=e.sibling;e!==null;)Wu(e,t,n),e=e.sibling}var Ye=null,Mt=!1;function kn(e,t,n){for(n=n.child;n!==null;)vg(e,t,n),n=n.sibling}function vg(e,t,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Sa,n)}catch{}switch(n.tag){case 5:tt||Kr(n,t);case 6:var r=Ye,o=Mt;Ye=null,kn(e,t,n),Ye=r,Mt=o,Ye!==null&&(Mt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Mt?(e=Ye,n=n.stateNode,e.nodeType===8?vl(e.parentNode,n):e.nodeType===1&&vl(e,n),di(e)):vl(Ye,n.stateNode));break;case 4:r=Ye,o=Mt,Ye=n.stateNode.containerInfo,Mt=!0,kn(e,t,n),Ye=r,Mt=o;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Mu(n,t,s),o=o.next}while(o!==r)}kn(e,t,n);break;case 1:if(!tt&&(Kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,t,a)}kn(e,t,n);break;case 21:kn(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,kn(e,t,n),tt=r):kn(e,t,n);break;default:kn(e,t,n)}}function Bf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dx),t.forEach(function(r){var o=Yx.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,Mt=!1;break e;case 3:Ye=a.stateNode.containerInfo,Mt=!0;break e;case 4:Ye=a.stateNode.containerInfo,Mt=!0;break e}a=a.return}if(Ye===null)throw Error(F(160));vg(i,s,o),Ye=null,Mt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){Re(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wg(t,e),t=t.sibling}function wg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Jt(e),r&4){try{Xo(3,e,e.return),Pa(3,e)}catch(w){Re(e,e.return,w)}try{Xo(5,e,e.return)}catch(w){Re(e,e.return,w)}}break;case 1:It(t,e),Jt(e),r&512&&n!==null&&Kr(n,n.return);break;case 5:if(It(t,e),Jt(e),r&512&&n!==null&&Kr(n,n.return),e.flags&32){var o=e.stateNode;try{ai(o,"")}catch(w){Re(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Uh(o,i),hu(a,s);var c=hu(a,i);for(s=0;s<u.length;s+=2){var d=u[s],h=u[s+1];d==="style"?qh(o,h):d==="dangerouslySetInnerHTML"?Hh(o,h):d==="children"?ai(o,h):bc(o,d,h,c)}switch(a){case"input":uu(o,i);break;case"textarea":Vh(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var $=i.value;$!=null?Zr(o,!!i.multiple,$,!1):g!==!!i.multiple&&(i.defaultValue!=null?Zr(o,!!i.multiple,i.defaultValue,!0):Zr(o,!!i.multiple,i.multiple?[]:"",!1))}o[gi]=i}catch(w){Re(e,e.return,w)}}break;case 6:if(It(t,e),Jt(e),r&4){if(e.stateNode===null)throw Error(F(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){Re(e,e.return,w)}}break;case 3:if(It(t,e),Jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(w){Re(e,e.return,w)}break;case 4:It(t,e),Jt(e);break;case 13:It(t,e),Jt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(nd=ze())),r&4&&Bf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(c=tt)||d,It(t,e),tt=c):It(t,e),Jt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(h=M=d;M!==null;){switch(g=M,$=g.child,g.tag){case 0:case 11:case 14:case 15:Xo(4,g,g.return);break;case 1:Kr(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Re(r,n,w)}}break;case 5:Kr(g,g.return);break;case 22:if(g.memoizedState!==null){Uf(h);continue}}$!==null?($.return=g,M=$):Uf(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,u=h.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Gh("display",s))}catch(w){Re(e,e.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){Re(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:It(t,e),Jt(e),r&4&&Bf(e);break;case 21:break;default:It(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xg(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ai(o,""),r.flags&=-33);var i=Df(e);Wu(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Df(e);Vu(e,a,s);break;default:throw Error(F(161))}}catch(u){Re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mx(e,t,n){M=e,$g(e)}function $g(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||os;if(!s){var a=o.alternate,u=a!==null&&a.memoizedState!==null||tt;a=os;var c=tt;if(os=s,(tt=u)&&!c)for(M=o;M!==null;)s=M,u=s.child,s.tag===22&&s.memoizedState!==null?Vf(o):u!==null?(u.return=s,M=u):Vf(o);for(;i!==null;)M=i,$g(i),i=i.sibling;M=o,os=a,tt=c}Mf(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):Mf(e)}}function Mf(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||Pa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Bt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ef(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ef(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&di(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}tt||t.flags&512&&Uu(t)}catch(g){Re(t,t.return,g)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Uf(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Vf(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pa(4,t)}catch(u){Re(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){Re(t,o,u)}}var i=t.return;try{Uu(t)}catch(u){Re(t,i,u)}break;case 5:var s=t.return;try{Uu(t)}catch(u){Re(t,s,u)}}}catch(u){Re(t,t.return,u)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var Ux=Math.ceil,ra=wn.ReactCurrentDispatcher,ed=wn.ReactCurrentOwner,Ft=wn.ReactCurrentBatchConfig,ie=0,qe=null,Oe=null,Ke=0,$t=0,Xr=Kn(0),Ue=0,Si=null,wr=0,Ta=0,td=0,Jo=null,ft=null,nd=0,fo=1/0,un=null,oa=!1,Hu=null,Un=null,is=!1,zn=null,ia=0,Zo=0,Gu=null,Es=-1,_s=0;function lt(){return ie&6?ze():Es!==-1?Es:Es=ze()}function Vn(e){return e.mode&1?ie&2&&Ke!==0?Ke&-Ke:Ex.transition!==null?(_s===0&&(_s=im()),_s):(e=ce,e!==0||(e=window.event,e=e===void 0?16:fm(e.type)),e):1}function qt(e,t,n,r){if(50<Zo)throw Zo=0,Gu=null,Error(F(185));zi(e,n,r),(!(ie&2)||e!==qe)&&(e===qe&&(!(ie&2)&&(Ta|=n),Ue===4&&Rn(e,Ke)),gt(e,r),n===1&&ie===0&&!(t.mode&1)&&(fo=ze()+500,Ca&&Xn()))}function gt(e,t){var n=e.callbackNode;E1(e,t);var r=Us(e,e===qe?Ke:0);if(r===0)n!==null&&Xd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xd(n),t===1)e.tag===0?kx(Wf.bind(null,e)):Tm(Wf.bind(null,e)),wx(function(){!(ie&6)&&Xn()}),n=null;else{switch(sm(r)){case 1:n=jc;break;case 4:n=rm;break;case 16:n=Ms;break;case 536870912:n=om;break;default:n=Ms}n=Rg(n,Sg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sg(e,t){if(Es=-1,_s=0,ie&6)throw Error(F(327));var n=e.callbackNode;if(oo()&&e.callbackNode!==n)return null;var r=Us(e,e===qe?Ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sa(e,r);else{t=r;var o=ie;ie|=2;var i=kg();(qe!==e||Ke!==t)&&(un=null,fo=ze()+500,pr(e,t));do try{Hx();break}catch(a){bg(e,a)}while(!0);Mc(),ra.current=i,ie=o,Oe!==null?t=0:(qe=null,Ke=0,t=Ue)}if(t!==0){if(t===2&&(o=vu(e),o!==0&&(r=o,t=qu(e,o))),t===1)throw n=Si,pr(e,0),Rn(e,r),gt(e,ze()),n;if(t===6)Rn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Vx(o)&&(t=sa(e,r),t===2&&(i=vu(e),i!==0&&(r=i,t=qu(e,i))),t===1))throw n=Si,pr(e,0),Rn(e,r),gt(e,ze()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:rr(e,ft,un);break;case 3:if(Rn(e,r),(r&130023424)===r&&(t=nd+500-ze(),10<t)){if(Us(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Cu(rr.bind(null,e,ft,un),t);break}rr(e,ft,un);break;case 4:if(Rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Gt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ux(r/1960))-r,10<r){e.timeoutHandle=Cu(rr.bind(null,e,ft,un),r);break}rr(e,ft,un);break;case 5:rr(e,ft,un);break;default:throw Error(F(329))}}}return gt(e,ze()),e.callbackNode===n?Sg.bind(null,e):null}function qu(e,t){var n=Jo;return e.current.memoizedState.isDehydrated&&(pr(e,t).flags|=256),e=sa(e,t),e!==2&&(t=ft,ft=n,t!==null&&Qu(t)),e}function Qu(e){ft===null?ft=e:ft.push.apply(ft,e)}function Vx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Yt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rn(e,t){for(t&=~td,t&=~Ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Gt(t),r=1<<n;e[n]=-1,t&=~r}}function Wf(e){if(ie&6)throw Error(F(327));oo();var t=Us(e,0);if(!(t&1))return gt(e,ze()),null;var n=sa(e,t);if(e.tag!==0&&n===2){var r=vu(e);r!==0&&(t=r,n=qu(e,r))}if(n===1)throw n=Si,pr(e,0),Rn(e,t),gt(e,ze()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,ft,un),gt(e,ze()),null}function rd(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(fo=ze()+500,Ca&&Xn())}}function $r(e){zn!==null&&zn.tag===0&&!(ie&6)&&oo();var t=ie;ie|=1;var n=Ft.transition,r=ce;try{if(Ft.transition=null,ce=1,e)return e()}finally{ce=r,Ft.transition=n,ie=t,!(ie&6)&&Xn()}}function od(){$t=Xr.current,ge(Xr)}function pr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vx(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Ic(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qs();break;case 3:uo(),ge(ht),ge(rt),qc();break;case 5:Gc(r);break;case 4:uo();break;case 13:ge(be);break;case 19:ge(be);break;case 10:Uc(r.type._context);break;case 22:case 23:od()}n=n.return}if(qe=e,Oe=e=Wn(e.current,null),Ke=$t=t,Ue=0,Si=null,td=Ta=wr=0,ft=Jo=null,lr!==null){for(t=0;t<lr.length;t++)if(n=lr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}lr=null}return e}function bg(e,t){do{var n=Oe;try{if(Mc(),Ss.current=na,ta){for(var r=ke.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ta=!1}if(vr=0,He=Be=ke=null,Ko=!1,vi=0,ed.current=null,n===null||n.return===null){Ue=1,Si=t,Oe=null;break}e:{var i=e,s=n.return,a=n,u=t;if(t=Ke,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var $=Tf(s);if($!==null){$.flags&=-257,zf($,s,a,i,t),$.mode&1&&Pf(i,c,t),t=$,u=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(u),t.updateQueue=w}else y.add(u);break e}else{if(!(t&1)){Pf(i,c,t),id();break e}u=Error(F(426))}}else if(xe&&a.mode&1){var x=Tf(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),zf(x,s,a,i,t),Dc(co(u,a));break e}}i=u=co(u,a),Ue!==4&&(Ue=2),Jo===null?Jo=[i]:Jo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=sg(i,u,t);kf(i,m);break e;case 1:a=u;var f=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Un===null||!Un.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=ag(i,a,t);kf(i,v);break e}}i=i.return}while(i!==null)}_g(n)}catch(E){t=E,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function kg(){var e=ra.current;return ra.current=na,e===null?na:e}function id(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),qe===null||!(wr&268435455)&&!(Ta&268435455)||Rn(qe,Ke)}function sa(e,t){var n=ie;ie|=2;var r=kg();(qe!==e||Ke!==t)&&(un=null,pr(e,t));do try{Wx();break}catch(o){bg(e,o)}while(!0);if(Mc(),ie=n,ra.current=r,Oe!==null)throw Error(F(261));return qe=null,Ke=0,Ue}function Wx(){for(;Oe!==null;)Eg(Oe)}function Hx(){for(;Oe!==null&&!g1();)Eg(Oe)}function Eg(e){var t=jg(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?_g(e):Oe=t,ed.current=null}function _g(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ix(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Oe=null;return}}else if(n=Ax(n,t,$t),n!==null){Oe=n;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Ue===0&&(Ue=5)}function rr(e,t,n){var r=ce,o=Ft.transition;try{Ft.transition=null,ce=1,Gx(e,t,n,r)}finally{Ft.transition=o,ce=r}return null}function Gx(e,t,n,r){do oo();while(zn!==null);if(ie&6)throw Error(F(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(_1(e,i),e===qe&&(Oe=qe=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||is||(is=!0,Rg(Ms,function(){return oo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ft.transition,Ft.transition=null;var s=ce;ce=1;var a=ie;ie|=4,ed.current=null,Bx(e,n),wg(n,e),fx(Eu),Vs=!!ku,Eu=ku=null,e.current=n,Mx(n),y1(),ie=a,ce=s,Ft.transition=i}else e.current=n;if(is&&(is=!1,zn=e,ia=o),i=e.pendingLanes,i===0&&(Un=null),w1(n.stateNode),gt(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(oa)throw oa=!1,e=Hu,Hu=null,e;return ia&1&&e.tag!==0&&oo(),i=e.pendingLanes,i&1?e===Gu?Zo++:(Zo=0,Gu=e):Zo=0,Xn(),null}function oo(){if(zn!==null){var e=sm(ia),t=Ft.transition,n=ce;try{if(Ft.transition=null,ce=16>e?16:e,zn===null)var r=!1;else{if(e=zn,zn=null,ia=0,ie&6)throw Error(F(331));var o=ie;for(ie|=4,M=e.current;M!==null;){var i=M,s=i.child;if(M.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(M=c;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:Xo(8,d,i)}var h=d.child;if(h!==null)h.return=d,M=h;else for(;M!==null;){d=M;var g=d.sibling,$=d.return;if(yg(d),d===c){M=null;break}if(g!==null){g.return=$,M=g;break}M=$}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}M=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,M=s;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xo(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,M=m;break e}M=i.return}}var f=e.current;for(M=f;M!==null;){s=M;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,M=p;else e:for(s=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Pa(9,a)}}catch(E){Re(a,a.return,E)}if(a===s){M=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,M=v;break e}M=a.return}}if(ie=o,Xn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Sa,e)}catch{}r=!0}return r}finally{ce=n,Ft.transition=t}}return!1}function Hf(e,t,n){t=co(n,t),t=sg(e,t,1),e=Mn(e,t,1),t=lt(),e!==null&&(zi(e,1,t),gt(e,t))}function Re(e,t,n){if(e.tag===3)Hf(e,e,n);else for(;t!==null;){if(t.tag===3){Hf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){e=co(n,e),e=ag(t,e,1),t=Mn(t,e,1),e=lt(),t!==null&&(zi(t,1,e),gt(t,e));break}}t=t.return}}function qx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(Ke&n)===n&&(Ue===4||Ue===3&&(Ke&130023424)===Ke&&500>ze()-nd?pr(e,0):td|=n),gt(e,t)}function Cg(e,t){t===0&&(e.mode&1?(t=Yi,Yi<<=1,!(Yi&130023424)&&(Yi=4194304)):t=1);var n=lt();e=xn(e,t),e!==null&&(zi(e,t,n),gt(e,n))}function Qx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cg(e,n)}function Yx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),Cg(e,n)}var jg;jg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)pt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pt=!1,Lx(e,t,n);pt=!!(e.flags&131072)}else pt=!1,xe&&t.flags&1048576&&zm(t,Ks,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ks(e,t),e=t.pendingProps;var o=so(t,rt.current);ro(t,n),o=Yc(null,t,r,e,o,n);var i=Kc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,mt(r)?(i=!0,Qs(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wc(t),o.updater=Ra,t.stateNode=o,o._reactInternals=t,Fu(t,r,e,n),t=Au(null,t,r,!0,i,n)):(t.tag=0,xe&&i&&Ac(t),st(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ks(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Xx(r),e=Bt(r,e),o){case 0:t=Lu(null,t,r,e,n);break e;case 1:t=Of(null,t,r,e,n);break e;case 11:t=Nf(null,t,r,e,n);break e;case 14:t=Ff(null,t,r,Bt(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Bt(r,o),Lu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Bt(r,o),Of(e,t,r,o,n);case 3:e:{if(dg(t),e===null)throw Error(F(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Im(e,t),Zs(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=co(Error(F(423)),t),t=Lf(e,t,r,n,o);break e}else if(r!==o){o=co(Error(F(424)),t),t=Lf(e,t,r,n,o);break e}else for(bt=Bn(t.stateNode.containerInfo.firstChild),_t=t,xe=!0,Vt=null,n=Lm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),r===o){t=vn(e,t,n);break e}st(e,t,r,n)}t=t.child}return t;case 5:return Dm(t),e===null&&Tu(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,_u(r,o)?s=null:i!==null&&_u(r,i)&&(t.flags|=32),cg(e,t),st(e,t,s,n),t.child;case 6:return e===null&&Tu(t),null;case 13:return fg(e,t,n);case 4:return Hc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lo(t,null,r,n):st(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Bt(r,o),Nf(e,t,r,o,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,fe(Xs,r._currentValue),r._currentValue=s,i!==null)if(Yt(i.value,s)){if(i.children===o.children&&!ht.current){t=vn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=mn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),zu(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(F(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),zu(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}st(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ro(t,n),o=Ot(o),r=r(o),t.flags|=1,st(e,t,r,n),t.child;case 14:return r=t.type,o=Bt(r,t.pendingProps),o=Bt(r.type,o),Ff(e,t,r,o,n);case 15:return lg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Bt(r,o),ks(e,t),t.tag=1,mt(r)?(e=!0,Qs(t)):e=!1,ro(t,n),ig(t,r,o),Fu(t,r,o,n),Au(null,t,r,!0,e,n);case 19:return pg(e,t,n);case 22:return ug(e,t,n)}throw Error(F(156,t.tag))};function Rg(e,t){return nm(e,t)}function Kx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,n,r){return new Kx(e,t,n,r)}function sd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xx(e){if(typeof e=="function")return sd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ec)return 11;if(e===_c)return 14}return 2}function Wn(e,t){var n=e.alternate;return n===null?(n=Nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cs(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")sd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Mr:return hr(n.children,o,i,t);case kc:s=8,o|=8;break;case ou:return e=Nt(12,n,t,o|2),e.elementType=ou,e.lanes=i,e;case iu:return e=Nt(13,n,t,o),e.elementType=iu,e.lanes=i,e;case su:return e=Nt(19,n,t,o),e.elementType=su,e.lanes=i,e;case Dh:return za(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ah:s=10;break e;case Ih:s=9;break e;case Ec:s=11;break e;case _c:s=14;break e;case _n:s=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Nt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function hr(e,t,n,r){return e=Nt(7,e,r,t),e.lanes=n,e}function za(e,t,n,r){return e=Nt(22,e,r,t),e.elementType=Dh,e.lanes=n,e.stateNode={isHidden:!1},e}function Cl(e,t,n){return e=Nt(6,e,null,t),e.lanes=n,e}function jl(e,t,n){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jx(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ad(e,t,n,r,o,i,s,a,u){return e=new Jx(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Nt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(i),e}function Zx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pg(e){if(!e)return Qn;e=e._reactInternals;e:{if(jr(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(mt(n))return Pm(e,n,t)}return t}function Tg(e,t,n,r,o,i,s,a,u){return e=ad(n,r,!0,e,o,i,s,a,u),e.context=Pg(null),n=e.current,r=lt(),o=Vn(n),i=mn(r,o),i.callback=t??null,Mn(n,i,o),e.current.lanes=o,zi(e,o,r),gt(e,r),e}function Na(e,t,n,r){var o=t.current,i=lt(),s=Vn(o);return n=Pg(n),t.context===null?t.context=n:t.pendingContext=n,t=mn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mn(o,t,s),e!==null&&(qt(e,o,s,i),$s(e,o,s)),s}function aa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ld(e,t){Gf(e,t),(e=e.alternate)&&Gf(e,t)}function ev(){return null}var zg=typeof reportError=="function"?reportError:function(e){console.error(e)};function ud(e){this._internalRoot=e}Fa.prototype.render=ud.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Na(e,t,null,null)};Fa.prototype.unmount=ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$r(function(){Na(null,e,null,null)}),t[yn]=null}};function Fa(e){this._internalRoot=e}Fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=um();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jn.length&&t!==0&&t<jn[n].priority;n++);jn.splice(n,0,e),n===0&&dm(e)}};function cd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qf(){}function tv(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=aa(s);i.call(c)}}var s=Tg(t,r,e,0,null,!1,!1,"",qf);return e._reactRootContainer=s,e[yn]=s.current,hi(e.nodeType===8?e.parentNode:e),$r(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=aa(u);a.call(c)}}var u=ad(e,0,!1,null,null,!1,!1,"",qf);return e._reactRootContainer=u,e[yn]=u.current,hi(e.nodeType===8?e.parentNode:e),$r(function(){Na(t,u,n,r)}),u}function La(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var u=aa(s);a.call(u)}}Na(t,s,e,o)}else s=tv(n,t,e,o,r);return aa(s)}am=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mo(t.pendingLanes);n!==0&&(Rc(t,n|1),gt(t,ze()),!(ie&6)&&(fo=ze()+500,Xn()))}break;case 13:$r(function(){var r=xn(e,1);if(r!==null){var o=lt();qt(r,e,1,o)}}),ld(e,1)}};Pc=function(e){if(e.tag===13){var t=xn(e,134217728);if(t!==null){var n=lt();qt(t,e,134217728,n)}ld(e,134217728)}};lm=function(e){if(e.tag===13){var t=Vn(e),n=xn(e,t);if(n!==null){var r=lt();qt(n,e,t,r)}ld(e,t)}};um=function(){return ce};cm=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};gu=function(e,t,n){switch(t){case"input":if(uu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=_a(r);if(!o)throw Error(F(90));Mh(r),uu(r,o)}}}break;case"textarea":Vh(e,n);break;case"select":t=n.value,t!=null&&Zr(e,!!n.multiple,t,!1)}};Kh=rd;Xh=$r;var nv={usingClientEntryPoint:!1,Events:[Fi,Hr,_a,Qh,Yh,rd]},No={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rv={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=em(e),e===null?null:e.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||ev,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{Sa=ss.inject(rv),nn=ss}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nv;jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(t))throw Error(F(200));return Zx(e,t,null,n)};jt.createRoot=function(e,t){if(!cd(e))throw Error(F(299));var n=!1,r="",o=zg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ad(e,1,!1,null,null,n,!1,r,o),e[yn]=t.current,hi(e.nodeType===8?e.parentNode:e),new ud(t)};jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=em(t),e=e===null?null:e.stateNode,e};jt.flushSync=function(e){return $r(e)};jt.hydrate=function(e,t,n){if(!Oa(t))throw Error(F(200));return La(null,e,t,!0,n)};jt.hydrateRoot=function(e,t,n){if(!cd(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=zg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Tg(t,null,e,1,n??null,o,!1,i,s),e[yn]=t.current,hi(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Fa(t)};jt.render=function(e,t,n){if(!Oa(t))throw Error(F(200));return La(null,e,t,!1,n)};jt.unmountComponentAtNode=function(e){if(!Oa(e))throw Error(F(40));return e._reactRootContainer?($r(function(){La(null,null,e,!1,function(){e._reactRootContainer=null,e[yn]=null})}),!0):!1};jt.unstable_batchedUpdates=rd;jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oa(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return La(e,t,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function Ng(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ng)}catch(e){console.error(e)}}Ng(),Nh.exports=jt;var ov=Nh.exports,Qf=ov;nu.createRoot=Qf.createRoot,nu.hydrateRoot=Qf.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bi.apply(this,arguments)}var Nn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nn||(Nn={}));const Yf="popstate";function iv(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return la("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ki(o)}return Fg(t,n,null,e)}function sv(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:a="",hash:u=""}=Rr(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),la("",{pathname:s,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let u=o.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof i=="string"?i:ki(i))}function r(o,i){Aa(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Fg(t,n,r,e)}function Ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Aa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function av(){return Math.random().toString(36).substr(2,8)}function Kf(e,t){return{usr:e.state,key:e.key,idx:t}}function la(e,t,n,r){return n===void 0&&(n=null),bi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Rr(t):t,{state:n,key:t&&t.key||r||av()})}function ki(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Rr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Nn.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(bi({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function h(){a=Nn.Pop;let x=d(),m=x==null?null:x-c;c=x,u&&u({action:a,location:w.location,delta:m})}function g(x,m){a=Nn.Push;let f=la(w.location,x,m);n&&n(f,x),c=d()+1;let p=Kf(f,c),v=w.createHref(f);try{s.pushState(p,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(v)}i&&u&&u({action:a,location:w.location,delta:1})}function $(x,m){a=Nn.Replace;let f=la(w.location,x,m);n&&n(f,x),c=d();let p=Kf(f,c),v=w.createHref(f);s.replaceState(p,"",v),i&&u&&u({action:a,location:w.location,delta:0})}function y(x){let m=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof x=="string"?x:ki(x);return f=f.replace(/ $/,"%20"),Ee(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let w={get action(){return a},get location(){return e(o,s)},listen(x){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Yf,h),u=x,()=>{o.removeEventListener(Yf,h),u=null}},createHref(x){return t(o,x)},createURL:y,encodeLocation(x){let m=y(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:$,go(x){return s.go(x)}};return w}var Xf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Xf||(Xf={}));function lv(e,t,n){return n===void 0&&(n="/"),uv(e,t,n)}function uv(e,t,n,r){let o=typeof t=="string"?Rr(t):t,i=po(o.pathname||"/",n);if(i==null)return null;let s=Og(e);cv(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let c=$v(i);a=vv(s[u],c)}return a}function Og(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(Ee(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Hn([r,u.relativePath]),d=n.concat(u);i.children&&i.children.length>0&&(Ee(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Og(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:yv(c,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let u of Lg(i.path))o(i,s,u)}),t}function Lg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Lg(r.join("/")),a=[];return a.push(...s.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function cv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dv=/^:[\w-]+$/,fv=3,pv=2,hv=1,mv=10,gv=-2,Jf=e=>e==="*";function yv(e,t){let n=e.split("/"),r=n.length;return n.some(Jf)&&(r+=gv),t&&(r+=pv),n.filter(o=>!Jf(o)).reduce((o,i)=>o+(dv.test(i)?fv:i===""?hv:mv),r)}function xv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function vv(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",h=Yu({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!h)return null;Object.assign(o,h.params),s.push({params:o,pathname:Hn([i,h.pathname]),pathnameBase:_v(Hn([i,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(i=Hn([i,h.pathnameBase]))}return s}function Yu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=wv(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,d,h)=>{let{paramName:g,isOptional:$}=d;if(g==="*"){let w=a[h]||"";s=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[h];return $&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function wv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Aa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function $v(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Aa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function po(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bv=e=>Sv.test(e);function kv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Rr(e):e,i;if(n)if(bv(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Aa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=Zf(n.substring(1),"/"):i=Zf(n,t)}else i=t;return{pathname:i,search:Cv(r),hash:jv(o)}}function Zf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Rl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ev(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dd(e,t){let n=Ev(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Rr(e):(o=bi({},e),Ee(!o.pathname||!o.pathname.includes("?"),Rl("?","pathname","search",o)),Ee(!o.pathname||!o.pathname.includes("#"),Rl("#","pathname","hash",o)),Ee(!o.search||!o.search.includes("#"),Rl("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),h-=1;o.pathname=g.join("/")}a=h>=0?t[h]:"/"}let u=kv(o,a),c=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Hn=e=>e.join("/").replace(/\/\/+/g,"/"),_v=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Cv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Rv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ag=["post","put","patch","delete"];new Set(Ag);const Pv=["get",...Ag];new Set(Pv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ei(){return Ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ei.apply(this,arguments)}const Ia=j.createContext(null),Ig=j.createContext(null),$n=j.createContext(null),Da=j.createContext(null),on=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Dg=j.createContext(null);function Tv(e,t){let{relative:n}=t===void 0?{}:t;bo()||Ee(!1);let{basename:r,navigator:o}=j.useContext($n),{hash:i,pathname:s,search:a}=Ba(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Hn([r,s])),o.createHref({pathname:u,search:a,hash:i})}function bo(){return j.useContext(Da)!=null}function Jn(){return bo()||Ee(!1),j.useContext(Da).location}function Bg(e){j.useContext($n).static||j.useLayoutEffect(e)}function Pr(){let{isDataRoute:e}=j.useContext(on);return e?Gv():zv()}function zv(){bo()||Ee(!1);let e=j.useContext(Ia),{basename:t,future:n,navigator:r}=j.useContext($n),{matches:o}=j.useContext(on),{pathname:i}=Jn(),s=JSON.stringify(dd(o,n.v7_relativeSplatPath)),a=j.useRef(!1);return Bg(()=>{a.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=fd(c,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Hn([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,s,i,e])}const Nv=j.createContext(null);function Fv(e){let t=j.useContext(on).outlet;return t&&j.createElement(Nv.Provider,{value:e},t)}function Mg(){let{matches:e}=j.useContext(on),t=e[e.length-1];return t?t.params:{}}function Ba(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext($n),{matches:o}=j.useContext(on),{pathname:i}=Jn(),s=JSON.stringify(dd(o,r.v7_relativeSplatPath));return j.useMemo(()=>fd(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Ov(e,t){return Lv(e,t)}function Lv(e,t,n,r){bo()||Ee(!1);let{navigator:o}=j.useContext($n),{matches:i}=j.useContext(on),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Jn(),d;if(t){var h;let x=typeof t=="string"?Rr(t):t;u==="/"||(h=x.pathname)!=null&&h.startsWith(u)||Ee(!1),d=x}else d=c;let g=d.pathname||"/",$=g;if(u!=="/"){let x=u.replace(/^\//,"").split("/");$="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let y=lv(e,{pathname:$}),w=Mv(y&&y.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Hn([u,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:Hn([u,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n,r);return t&&w?j.createElement(Da.Provider,{value:{location:Ei({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Nn.Pop}},w):w}function Av(){let e=Hv(),t=Rv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:o},n):null,null)}const Iv=j.createElement(Av,null);class Dv extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(on.Provider,{value:this.props.routeContext},j.createElement(Dg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bv(e){let{routeContext:t,match:n,children:r}=e,o=j.useContext(Ia);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(on.Provider,{value:t},r)}function Mv(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||Ee(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let h=s[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:g,errors:$}=n,y=h.route.loader&&g[h.route.id]===void 0&&(!$||$[h.route.id]===void 0);if(h.route.lazy||y){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,h,g)=>{let $,y=!1,w=null,x=null;n&&($=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||Iv,u&&(c<0&&g===0?(qv("route-fallback"),y=!0,x=null):c===g&&(y=!0,x=h.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,g+1)),f=()=>{let p;return $?p=w:y?p=x:h.route.Component?p=j.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=d,j.createElement(Bv,{match:h,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?j.createElement(Dv,{location:n.location,revalidation:n.revalidation,component:w,error:$,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Ug=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ug||{}),Vg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vg||{});function Uv(e){let t=j.useContext(Ia);return t||Ee(!1),t}function Vv(e){let t=j.useContext(Ig);return t||Ee(!1),t}function Wv(e){let t=j.useContext(on);return t||Ee(!1),t}function Wg(e){let t=Wv(),n=t.matches[t.matches.length-1];return n.route.id||Ee(!1),n.route.id}function Hv(){var e;let t=j.useContext(Dg),n=Vv(),r=Wg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Gv(){let{router:e}=Uv(Ug.UseNavigateStable),t=Wg(Vg.UseNavigateStable),n=j.useRef(!1);return Bg(()=>{n.current=!0}),j.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ei({fromRouteId:t},i)))},[e,t])}const ep={};function qv(e,t,n){ep[e]||(ep[e]=!0)}function Hg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ua(e){let{to:t,replace:n,state:r,relative:o}=e;bo()||Ee(!1);let{future:i,static:s}=j.useContext($n),{matches:a}=j.useContext(on),{pathname:u}=Jn(),c=Pr(),d=fd(t,dd(a,i.v7_relativeSplatPath),u,o==="path"),h=JSON.stringify(d);return j.useEffect(()=>c(JSON.parse(h),{replace:n,state:r,relative:o}),[c,h,o,n,r]),null}function Gg(e){return Fv(e.context)}function je(e){Ee(!1)}function qg(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Nn.Pop,navigator:i,static:s=!1,future:a}=e;bo()&&Ee(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:i,static:s,future:Ei({v7_relativeSplatPath:!1},a)}),[u,a,i,s]);typeof r=="string"&&(r=Rr(r));let{pathname:d="/",search:h="",hash:g="",state:$=null,key:y="default"}=r,w=j.useMemo(()=>{let x=po(d,u);return x==null?null:{location:{pathname:x,search:h,hash:g,state:$,key:y},navigationType:o}},[u,d,h,g,$,y,o]);return w==null?null:j.createElement($n.Provider,{value:c},j.createElement(Da.Provider,{children:n,value:w}))}function Qv(e){let{children:t,location:n}=e;return Ov(Ku(t),n)}new Promise(()=>{});function Ku(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,o)=>{if(!j.isValidElement(r))return;let i=[...t,o];if(r.type===j.Fragment){n.push.apply(n,Ku(r.props.children,i));return}r.type!==je&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ku(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ca(){return ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ca.apply(this,arguments)}function Qg(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Yv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kv(e,t){return e.button===0&&(!t||t==="_self")&&!Yv(e)}const Xv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Jv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Zv="6";try{window.__reactRouterVersion=Zv}catch{}const ew=j.createContext({isTransitioning:!1}),tw="startTransition",da=q0[tw];function nw(e){let{basename:t,children:n,future:r,window:o}=e,i=j.useRef();i.current==null&&(i.current=iv({window:o,v5Compat:!0}));let s=i.current,[a,u]=j.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=j.useCallback(h=>{c&&da?da(()=>u(h)):u(h)},[u,c]);return j.useLayoutEffect(()=>s.listen(d),[s,d]),j.useEffect(()=>Hg(r),[r]),j.createElement(qg,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}function rw(e){let{basename:t,children:n,future:r,window:o}=e,i=j.useRef();i.current==null&&(i.current=sv({window:o,v5Compat:!0}));let s=i.current,[a,u]=j.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=j.useCallback(h=>{c&&da?da(()=>u(h)):u(h)},[u,c]);return j.useLayoutEffect(()=>s.listen(d),[s,d]),j.useEffect(()=>Hg(r),[r]),j.createElement(qg,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const ow=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sw=j.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:u,to:c,preventScrollReset:d,viewTransition:h}=t,g=Qg(t,Xv),{basename:$}=j.useContext($n),y,w=!1;if(typeof c=="string"&&iw.test(c)&&(y=c,ow))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),E=po(v.pathname,$);v.origin===p.origin&&E!=null?c=E+v.search+v.hash:w=!0}catch{}let x=Tv(c,{relative:o}),m=uw(c,{replace:s,state:a,target:u,preventScrollReset:d,relative:o,viewTransition:h});function f(p){r&&r(p),p.defaultPrevented||m(p)}return j.createElement("a",ca({},g,{href:y||x,onClick:w||i?r:f,ref:n,target:u}))}),aw=j.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:u,viewTransition:c,children:d}=t,h=Qg(t,Jv),g=Ba(u,{relative:h.relative}),$=Jn(),y=j.useContext(Ig),{navigator:w,basename:x}=j.useContext($n),m=y!=null&&cw(g)&&c===!0,f=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,p=$.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(p=p.toLowerCase(),v=v?v.toLowerCase():null,f=f.toLowerCase()),v&&x&&(v=po(v,x)||v);const E=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let P=p===f||!s&&p.startsWith(f)&&p.charAt(E)==="/",k=v!=null&&(v===f||!s&&v.startsWith(f)&&v.charAt(f.length)==="/"),_={isActive:P,isPending:k,isTransitioning:m},L=P?r:void 0,A;typeof i=="function"?A=i(_):A=[i,P?"active":null,k?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let W=typeof a=="function"?a(_):a;return j.createElement(sw,ca({},h,{"aria-current":L,className:A,ref:n,style:W,to:u,viewTransition:c}),typeof d=="function"?d(_):d)});var Xu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Xu||(Xu={}));var tp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tp||(tp={}));function lw(e){let t=j.useContext(Ia);return t||Ee(!1),t}function uw(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,u=Pr(),c=Jn(),d=Ba(e,{relative:s});return j.useCallback(h=>{if(Kv(h,n)){h.preventDefault();let g=r!==void 0?r:ki(c)===ki(d);u(e,{replace:g,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[c,u,d,r,o,n,e,i,s,a])}function cw(e,t){t===void 0&&(t={});let n=j.useContext(ew);n==null&&Ee(!1);let{basename:r}=lw(Xu.useViewTransitionState),o=Ba(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=po(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=po(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Yu(o.pathname,s)!=null||Yu(o.pathname,i)!=null}var Ge=function(){return Ge=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ge.apply(this,arguments)};function ho(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var me="-ms-",ei="-moz-",se="-webkit-",Yg="comm",Ma="rule",pd="decl",dw="@import",fw="@namespace",Kg="@keyframes",pw="@layer",Xg=Math.abs,hd=String.fromCharCode,Ju=Object.assign;function hw(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function Jg(e){return e.trim()}function cn(e,t){return(e=t.exec(e))?e[0]:e}function J(e,t,n){return e.replace(t,n)}function js(e,t,n){return e.indexOf(t,n)}function Me(e,t){return e.charCodeAt(t)|0}function Sr(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function Zg(e){return e.length}function Vo(e,t){return t.push(e),e}function mw(e,t){return e.map(t).join("")}function np(e,t){return e.filter(function(n){return!cn(n,t)})}var Ua=1,mo=1,ey=0,At=0,Fe=0,ko="";function Va(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ua,column:mo,length:s,return:"",siblings:a}}function En(e,t){return Ju(Va("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fr(e){for(;e.root;)e=En(e.root,{children:[e]});Vo(e,e.siblings)}function gw(){return Fe}function yw(){return Fe=At>0?Me(ko,--At):0,mo--,Fe===10&&(mo=1,Ua--),Fe}function Qt(){return Fe=At<ey?Me(ko,At++):0,mo++,Fe===10&&(mo=1,Ua++),Fe}function Fn(){return Me(ko,At)}function Rs(){return At}function Wa(e,t){return Sr(ko,e,t)}function _i(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xw(e){return Ua=mo=1,ey=Ut(ko=e),At=0,[]}function vw(e){return ko="",e}function Pl(e){return Jg(Wa(At-1,Zu(e===91?e+2:e===40?e+1:e)))}function ww(e){for(;(Fe=Fn())&&Fe<33;)Qt();return _i(e)>2||_i(Fe)>3?"":" "}function $w(e,t){for(;--t&&Qt()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return Wa(e,Rs()+(t<6&&Fn()==32&&Qt()==32))}function Zu(e){for(;Qt();)switch(Fe){case e:return At;case 34:case 39:e!==34&&e!==39&&Zu(Fe);break;case 40:e===41&&Zu(e);break;case 92:Qt();break}return At}function Sw(e,t){for(;Qt()&&e+Fe!==57;)if(e+Fe===84&&Fn()===47)break;return"/*"+Wa(t,At-1)+"*"+hd(e===47?e:Qt())}function bw(e){for(;!_i(Fn());)Qt();return Wa(e,At)}function kw(e){return vw(Ps("",null,null,null,[""],e=xw(e),0,[0],e))}function Ps(e,t,n,r,o,i,s,a,u){for(var c=0,d=0,h=s,g=0,$=0,y=0,w=1,x=1,m=1,f=0,p="",v=o,E=i,P=r,k=p;x;)switch(y=f,f=Qt()){case 40:if(y!=108&&Me(k,h-1)==58){js(k+=J(Pl(f),"&","&\f"),"&\f",Xg(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:k+=Pl(f);break;case 9:case 10:case 13:case 32:k+=ww(y);break;case 92:k+=$w(Rs()-1,7);continue;case 47:switch(Fn()){case 42:case 47:Vo(Ew(Sw(Qt(),Rs()),t,n,u),u),(_i(y||1)==5||_i(Fn()||1)==5)&&Ut(k)&&Sr(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*w:a[c++]=Ut(k)*m;case 125*w:case 59:case 0:switch(f){case 0:case 125:x=0;case 59+d:m==-1&&(k=J(k,/\f/g,"")),$>0&&(Ut(k)-h||w===0&&y===47)&&Vo($>32?op(k+";",r,n,h-1,u):op(J(k," ","")+";",r,n,h-2,u),u);break;case 59:k+=";";default:if(Vo(P=rp(k,t,n,c,d,o,a,p,v=[],E=[],h,i),i),f===123)if(d===0)Ps(k,t,P,P,v,i,h,a,E);else{switch(g){case 99:if(Me(k,3)===110)break;case 108:if(Me(k,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Ps(e,P,P,r&&Vo(rp(e,P,P,0,0,o,a,p,o,v=[],h,E),E),o,E,h,a,r?v:E):Ps(k,P,P,P,[""],E,0,a,E)}}c=d=$=0,w=m=1,p=k="",h=s;break;case 58:h=1+Ut(k),$=y;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&yw()==125)continue}switch(k+=hd(f),f*w){case 38:m=d>0?1:(k+="\f",-1);break;case 44:a[c++]=(Ut(k)-1)*m,m=1;break;case 64:Fn()===45&&(k+=Pl(Qt())),g=Fn(),d=h=Ut(p=k+=bw(Rs())),f++;break;case 45:y===45&&Ut(k)==2&&(w=0)}}return i}function rp(e,t,n,r,o,i,s,a,u,c,d,h){for(var g=o-1,$=o===0?i:[""],y=Zg($),w=0,x=0,m=0;w<r;++w)for(var f=0,p=Sr(e,g+1,g=Xg(x=s[w])),v=e;f<y;++f)(v=Jg(x>0?$[f]+" "+p:J(p,/&\f/g,$[f])))&&(u[m++]=v);return Va(e,t,n,o===0?Ma:a,u,c,d,h)}function Ew(e,t,n,r){return Va(e,t,n,Yg,hd(gw()),Sr(e,2,-2),0,r)}function op(e,t,n,r,o){return Va(e,t,n,pd,Sr(e,0,r),Sr(e,r+1,-1),r,o)}function ty(e,t,n){switch(hw(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return se+e+e;case 4855:return se+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ei+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+ei+e+me+e+e;case 5936:switch(Me(e,t+11)){case 114:return se+e+me+J(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+me+J(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+me+J(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return se+e+me+e+e;case 6165:return se+e+me+"flex-"+e+e;case 5187:return se+e+J(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+me+"flex-$1$2")+e;case 5443:return se+e+me+"flex-item-"+J(e,/flex-|-self/g,"")+(cn(e,/flex-|baseline/)?"":me+"grid-row-"+J(e,/flex-|-self/g,""))+e;case 4675:return se+e+me+"flex-line-pack"+J(e,/align-content|flex-|-self/g,"")+e;case 5548:return se+e+me+J(e,"shrink","negative")+e;case 5292:return se+e+me+J(e,"basis","preferred-size")+e;case 6060:return se+"box-"+J(e,"-grow","")+se+e+me+J(e,"grow","positive")+e;case 4554:return se+J(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return J(J(J(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return J(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return J(J(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+me+"flex-pack:$3"),/space-between/,"justify")+se+e+e;case 4200:if(!cn(e,/flex-|baseline/))return me+"grid-column-align"+Sr(e,t)+e;break;case 2592:case 3360:return me+J(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,cn(r.props,/grid-\w+-end/)})?~js(e+(n=n[t].value),"span",0)?e:me+J(e,"-start","")+e+me+"grid-row-span:"+(~js(n,"span",0)?cn(n,/\d+/):+cn(n,/\d+/)-+cn(e,/\d+/))+";":me+J(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return cn(r.props,/grid-\w+-start/)})?e:me+J(J(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return J(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return J(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+ei+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~js(e,"stretch",0)?ty(J(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return J(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,u,c){return me+o+":"+i+c+(s?me+o+"-span:"+(a?u:+u-+i)+c:"")+e});case 4949:if(Me(e,t+6)===121)return J(e,":",":"+se)+e;break;case 6444:switch(Me(e,Me(e,14)===45?18:11)){case 120:return J(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+se+(Me(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+me+"$2box$3")+e;case 100:return J(e,":",":"+me)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return J(e,"scroll-","scroll-snap-")+e}return e}function fa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function _w(e,t,n,r){switch(e.type){case pw:if(e.children.length)break;case dw:case fw:case pd:return e.return=e.return||e.value;case Yg:return"";case Kg:return e.return=e.value+"{"+fa(e.children,r)+"}";case Ma:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=fa(e.children,r))?e.return=e.value+"{"+n+"}":""}function Cw(e){var t=Zg(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function jw(e){return function(t){t.root||(t=t.return)&&e(t)}}function Rw(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case pd:e.return=ty(e.value,e.length,n);return;case Kg:return fa([En(e,{value:J(e.value,"@","@"+se)})],r);case Ma:if(e.length)return mw(n=e.props,function(o){switch(cn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fr(En(e,{props:[J(o,/:(read-\w+)/,":"+ei+"$1")]})),Fr(En(e,{props:[o]})),Ju(e,{props:np(n,r)});break;case"::placeholder":Fr(En(e,{props:[J(o,/:(plac\w+)/,":"+se+"input-$1")]})),Fr(En(e,{props:[J(o,/:(plac\w+)/,":"+ei+"$1")]})),Fr(En(e,{props:[J(o,/:(plac\w+)/,me+"input-$1")]})),Fr(En(e,{props:[o]})),Ju(e,{props:np(n,r)});break}return""})}}var Pw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wt={},go=typeof process<"u"&&wt!==void 0&&(wt.REACT_APP_SC_ATTR||wt.SC_ATTR)||"data-styled",ny="active",ry="data-styled-version",Ha="6.3.11",md=`/*!sc*/
`,ti=typeof window<"u"&&typeof document<"u",Tw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==""?wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.SC_DISABLE_SPEEDY!==void 0&&wt.SC_DISABLE_SPEEDY!==""&&wt.SC_DISABLE_SPEEDY!=="false"&&wt.SC_DISABLE_SPEEDY),zw={};function br(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ts=new Map,pa=new Map,zs=1,Wo=function(e){if(Ts.has(e))return Ts.get(e);for(;pa.has(zs);)zs++;var t=zs++;return Ts.set(e,t),pa.set(t,e),t},Nw=function(e,t){zs=t+1,Ts.set(e,t),pa.set(t,e)},gd=Object.freeze([]),yo=Object.freeze({});function oy(e,t,n){return n===void 0&&(n=yo),e.theme!==n.theme&&e.theme||t||n.theme}var iy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Fw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ow=/(^-|-$)/g;function ip(e){return e.replace(Fw,"-").replace(Ow,"")}var Lw=/(a)(d)/gi,sp=function(e){return String.fromCharCode(e+(e>25?39:97))};function ec(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=sp(t%52)+n;return(sp(t%52)+n).replace(Lw,"$1-$2")}var Tl,ir=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},sy=function(e){return ir(5381,e)};function yd(e){return ec(sy(e)>>>0)}function Aw(e){return e.displayName||e.name||"Component"}function zl(e){return typeof e=="string"&&!0}var ay=typeof Symbol=="function"&&Symbol.for,ly=ay?Symbol.for("react.memo"):60115,Iw=ay?Symbol.for("react.forward_ref"):60112,Dw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Bw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},uy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mw=((Tl={})[Iw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tl[ly]=uy,Tl);function ap(e){return("type"in(t=e)&&t.type.$$typeof)===ly?uy:"$$typeof"in e?Mw[e.$$typeof]:Dw;var t}var Uw=Object.defineProperty,Vw=Object.getOwnPropertyNames,lp=Object.getOwnPropertySymbols,Ww=Object.getOwnPropertyDescriptor,Hw=Object.getPrototypeOf,up=Object.prototype;function cy(e,t,n){if(typeof t!="string"){if(up){var r=Hw(t);r&&r!==up&&cy(e,r,n)}var o=Vw(t);lp&&(o=o.concat(lp(t)));for(var i=ap(e),s=ap(t),a=0;a<o.length;++a){var u=o[a];if(!(u in Bw||n&&n[u]||s&&u in s||i&&u in i)){var c=Ww(t,u);try{Uw(e,u,c)}catch{}}}}return e}function kr(e){return typeof e=="function"}function xd(e){return typeof e=="object"&&"styledComponentId"in e}function cr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ha(e,t){return e.join("")}function Ci(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function tc(e,t,n){if(n===void 0&&(n=!1),!n&&!Ci(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=tc(e[r],t[r]);else if(Ci(t))for(var r in t)e[r]=tc(e[r],t[r]);return e}function vd(e,t){Object.defineProperty(e,"toString",{value:t})}var Gw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw br(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),u=0,c=(s=0,n.length);s<c;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++,u++);u>0&&this._cGroup>t&&(this._cIndex+=u)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+=this.tag.getRule(s)+md;return n},e}(),qw="style[".concat(go,"][").concat(ry,'="').concat(Ha,'"]'),Qw=new RegExp("^".concat(go,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cp=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},nc=function(e){if(!e)return document;if(cp(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(cp(t))return t}return document},Yw=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Kw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(md),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var u=a.match(Qw);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(Nw(d,c),Yw(e,d,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}},Nl=function(e){for(var t=nc(e.options.target).querySelectorAll(qw),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(go)!==ny&&(Kw(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Xw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var u=Array.from(a.querySelectorAll("style[".concat(go,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(go,ny),r.setAttribute(ry,Ha);var s=Xw();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Jw=function(){function e(t){this.element=dy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,i=0,s=o.length;i<s;i++){var a=o[i];if(a.ownerNode===n)return a}throw br(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Zw=function(){function e(t){this.element=dy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),e$=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),dp=ti,t$={isServer:!ti,useCSSOMInjection:!Tw},ma=function(){function e(t,n,r){t===void 0&&(t=yo),n===void 0&&(n={});var o=this;this.options=Ge(Ge({},t$),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ti&&dp&&(dp=!1,Nl(this)),vd(this,function(){return function(i){for(var s=i.getTag(),a=s.length,u="",c=function(h){var g=function(m){return pa.get(m)}(h);if(g===void 0)return"continue";var $=i.names.get(g);if($===void 0||!$.size)return"continue";var y=s.getGroup(h);if(y.length===0)return"continue";var w=go+".g"+h+'[id="'+g+'"]',x="";$.forEach(function(m){m.length>0&&(x+=m+",")}),u+=y+w+'{content:"'+x+'"}'+md},d=0;d<a;d++)c(d);return u}(o)})}return e.registerId=function(t){return Wo(t)},e.prototype.rehydrate=function(){!this.server&&ti&&Nl(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(Ge(Ge({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ti&&t.target!==this.options.target&&nc(this.options.target)!==nc(t.target)&&Nl(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new e$(o):r?new Jw(o):new Zw(o)}(this.options),new Gw(t)));var t},e.prototype.hasNameForId=function(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o},e.prototype.registerName=function(t,n){Wo(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Wo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Wo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),n$=/&/g,dn=47,sr=42;function fp(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,o=!1,i=0;i<t;i++){var s=e.charCodeAt(i);if(r!==0||o||s!==dn||e.charCodeAt(i+1)!==sr)if(o)s===sr&&e.charCodeAt(i+1)===dn&&(o=!1,i++);else if(s!==34&&s!==39||i!==0&&e.charCodeAt(i-1)===92){if(r===0){if(s===123)n++;else if(s===125&&--n<0)return!0}}else r===0?r=s:r===s&&(r=0);else o=!0,i++}return n!==0||r!==0}function fy(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=fy(n.children,t)),n})}function r$(e){var t,n,r,o=yo,i=o.options,s=i===void 0?yo:i,a=o.plugins,u=a===void 0?gd:a,c=function(y,w,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):y},d=u.slice();d.push(function(y){y.type===Ma&&y.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),y.props[0]=y.props[0].replace(n$,n).replace(r,c))}),s.prefix&&d.push(Rw),d.push(_w);var h=[],g=Cw(d.concat(jw(function(y){return h.push(y)}))),$=function(y,w,x,m){w===void 0&&(w=""),x===void 0&&(x=""),m===void 0&&(m="&"),t=m,n=w,r=void 0;var f=function(v){if(!fp(v))return v;for(var E=v.length,P="",k=0,_=0,L=0,A=!1,W=0;W<E;W++){var D=v.charCodeAt(W);if(L!==0||A||D!==dn||v.charCodeAt(W+1)!==sr)if(A)D===sr&&v.charCodeAt(W+1)===dn&&(A=!1,W++);else if(D!==34&&D!==39||W!==0&&v.charCodeAt(W-1)===92){if(L===0)if(D===123)_++;else if(D===125){if(--_<0){for(var V=W+1;V<E;){var X=v.charCodeAt(V);if(X===59||X===10)break;V++}V<E&&v.charCodeAt(V)===59&&V++,_=0,W=V-1,k=V;continue}_===0&&(P+=v.substring(k,W+1),k=W+1)}else D===59&&_===0&&(P+=v.substring(k,W+1),k=W+1)}else L===0?L=D:L===D&&(L=0);else A=!0,W++}if(k<E){var te=v.substring(k);fp(te)||(P+=te)}return P}(function(v){if(v.indexOf("//")===-1)return v;for(var E=v.length,P=[],k=0,_=0,L=0,A=0;_<E;){var W=v.charCodeAt(_);if(W!==34&&W!==39||_!==0&&v.charCodeAt(_-1)===92)if(L===0)if(W===dn&&_+1<E&&v.charCodeAt(_+1)===sr){for(_+=2;_+1<E&&(v.charCodeAt(_)!==sr||v.charCodeAt(_+1)!==dn);)_++;_+=2}else if(W===40&&_>=3&&(32|v.charCodeAt(_-1))==108&&(32|v.charCodeAt(_-2))==114&&(32|v.charCodeAt(_-3))==117)A=1,_++;else if(A>0)W===41?A--:W===40&&A++,_++;else if(W===sr&&_+1<E&&v.charCodeAt(_+1)===dn)_>k&&P.push(v.substring(k,_)),k=_+=2;else if(W===dn&&_+1<E&&v.charCodeAt(_+1)===dn){for(_>k&&P.push(v.substring(k,_));_<E&&v.charCodeAt(_)!==10;)_++;k=_}else _++;else _++;else L===0?L=W:L===W&&(L=0),_++}return k===0?v:(k<E&&P.push(v.substring(k)),P.join(""))}(y)),p=kw(x||w?"".concat(x," ").concat(w," { ").concat(f," }"):f);return s.namespace&&(p=fy(p,s.namespace)),h=[],fa(p,g),h};return $.hash=u.length?u.reduce(function(y,w){return w.name||br(15),ir(y,w.name)},5381).toString():"",$}var o$=new ma,rc=r$(),py=G.createContext({shouldForwardProp:void 0,styleSheet:o$,stylis:rc});py.Consumer;G.createContext(void 0);function oc(){return G.useContext(py)}var hy=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=rc);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,vd(this,function(){throw br(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=rc),this.name+t.hash},e}();function i$(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Pw||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var s$=function(e){return e>="A"&&e<="Z"};function pp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;s$(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var my=function(e){return e==null||e===!1||e===""},gy=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!my(r)&&(Array.isArray(r)&&r.isCss||kr(r)?t.push("".concat(pp(n),":"),r,";"):Ci(r)?t.push.apply(t,ho(ho(["".concat(n," {")],gy(r),!1),["}"],!1)):t.push("".concat(pp(n),": ").concat(i$(n,r),";")))}return t};function Gn(e,t,n,r,o){if(o===void 0&&(o=[]),typeof e=="string")return e&&o.push(e),o;if(my(e))return o;if(xd(e))return o.push(".".concat(e.styledComponentId)),o;if(kr(e)){if(!kr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return o.push(e),o;var i=e(t);return Gn(i,t,n,r,o)}var s;if(e instanceof hy)return n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o;if(Ci(e)){for(var a=gy(e),u=0;u<a.length;u++)o.push(a[u]);return o}if(!Array.isArray(e))return o.push(e.toString()),o;for(u=0;u<e.length;u++)Gn(e[u],t,n,r,o);return o}function yy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(kr(n)&&!xd(n))return!1}return!0}var a$=sy(Ha),l$=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&yy(t),this.componentId=n,this.baseHash=ir(a$,n),this.baseStyle=r,ma.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=cr(o,this.staticRulesId);else{var i=ha(Gn(this.rules,t,n,r)),s=ec(ir(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=cr(o,s),this.staticRulesId=s}else{for(var u=ir(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")c+=h;else if(h){var g=ha(Gn(h,t,n,r));u=ir(ir(u,String(d)),g),c+=g}}if(c){var $=ec(u>>>0);if(!n.hasNameForId(this.componentId,$)){var y=r(c,".".concat($),void 0,this.componentId);n.insertRules(this.componentId,$,y)}o=cr(o,$)}}return{className:o,css:typeof window>"u"?n.getTag().getGroup(Wo(this.componentId)):""}},e}(),ji=G.createContext(void 0);ji.Consumer;function u$(e){var t=G.useContext(ji),n=G.useMemo(function(){return function(r,o){if(!r)throw br(14);if(kr(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw br(8);return o?Ge(Ge({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?G.createElement(ji.Provider,{value:n},e.children):null}var Fl={};function c$(e,t,n){var r=xd(e),o=e,i=!zl(e),s=t.attrs,a=s===void 0?gd:s,u=t.componentId,c=u===void 0?function(v,E){var P=typeof v!="string"?"sc":ip(v);Fl[P]=(Fl[P]||0)+1;var k="".concat(P,"-").concat(yd(Ha+P+Fl[P]));return E?"".concat(E,"-").concat(k):k}(t.displayName,t.parentComponentId):u,d=t.displayName,h=d===void 0?function(v){return zl(v)?"styled.".concat(v):"Styled(".concat(Aw(v),")")}(e):d,g=t.displayName&&t.componentId?"".concat(ip(t.displayName),"-").concat(t.componentId):t.componentId||c,$=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;y=function(v,E){return w(v,E)&&x(v,E)}}else y=w}var m=new l$(n,g,r?o.componentStyle:void 0);function f(v,E){return function(P,k,_){var L=P.attrs,A=P.componentStyle,W=P.defaultProps,D=P.foldedComponentIds,V=P.styledComponentId,X=P.target,te=G.useContext(ji),Z=oc(),ne=P.shouldForwardProp||Z.shouldForwardProp,N=oy(k,te,W)||yo,z=function(we,Ae,Xt){for(var Sn,vt=Ge(Ge({},Ae),{className:void 0,theme:Xt}),Zn=0;Zn<we.length;Zn+=1){var zr=kr(Sn=we[Zn])?Sn(vt):Sn;for(var sn in zr)sn==="className"?vt.className=cr(vt.className,zr[sn]):sn==="style"?vt.style=Ge(Ge({},vt.style),zr[sn]):vt[sn]=zr[sn]}return"className"in Ae&&typeof Ae.className=="string"&&(vt.className=cr(vt.className,Ae.className)),vt}(L,k,N),U=z.as||X,Y={};for(var q in z)z[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&z.theme===N||(q==="forwardedAs"?Y.as=z.forwardedAs:ne&&!ne(q,U)||(Y[q]=z[q]));var pe=function(we,Ae){var Xt=oc(),Sn=we.generateAndInjectStyles(Ae,Xt.styleSheet,Xt.stylis);return Sn}(A,z),ae=pe.className,ve=cr(D,V);return ae&&(ve+=" "+ae),z.className&&(ve+=" "+z.className),Y[zl(U)&&!iy.has(U)?"class":"className"]=ve,_&&(Y.ref=_),j.createElement(U,Y)}(p,v,E)}f.displayName=h;var p=G.forwardRef(f);return p.attrs=$,p.componentStyle=m,p.displayName=h,p.shouldForwardProp=y,p.foldedComponentIds=r?cr(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=g,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(E){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var _=0,L=P;_<L.length;_++)tc(E,L[_],!0);return E}({},o.defaultProps,v):v}}),vd(p,function(){return".".concat(p.styledComponentId)}),i&&cy(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function hp(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var mp=function(e){return Object.assign(e,{isCss:!0})};function Li(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(kr(e)||Ci(e))return mp(Gn(hp(gd,ho([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Gn(r):mp(Gn(hp(r,t)))}function ic(e,t,n){if(n===void 0&&(n=yo),!t)throw br(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Li.apply(void 0,ho([o],i,!1)))};return r.attrs=function(o){return ic(e,t,Ge(Ge({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ic(e,t,Ge(Ge({},n),o))},r}var xy=function(e){return ic(c$,e)},b=xy;iy.forEach(function(e){b[e]=xy(e)});var d$=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=yy(t),ma.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(ha(Gn(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&ma.registerId(this.componentId+t);var i=this.componentId+t;this.isStatic?r.hasNameForId(i,i)||this.createStyles(t,n,r,o):(this.removeStyles(t,r),this.createStyles(t,n,r,o))},e}();function f$(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Li.apply(void 0,ho([e],t,!1)),o="sc-global-".concat(yd(JSON.stringify(r))),i=new d$(r,o),s=new WeakMap,a=function(c){var d=oc(),h=G.useContext(ji),g=s.get(d.styleSheet);return g===void 0&&(g=d.styleSheet.allocateGSInstance(o),s.set(d.styleSheet,g)),(typeof window>"u"||!d.styleSheet.server)&&u(g,c,d.styleSheet,h,d.stylis),G.useLayoutEffect(function(){return d.styleSheet.server||u(g,c,d.styleSheet,h,d.stylis),function(){var $;i.removeStyles(g,d.styleSheet),$=d.styleSheet.options.target,typeof document<"u"&&($??document).querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(y){return y.remove()})}},[g,c,d.styleSheet,h,d.stylis]),null};function u(c,d,h,g,$){if(i.isStatic)i.renderStyles(c,zw,h,$);else{var y=Ge(Ge({},d),{theme:oy(d,g,a.defaultProps)});i.renderStyles(c,y,h,$)}}return G.memo(a)}function Qe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ha(Li.apply(void 0,ho([e],t,!1))),o=yd(r);return new hy(o,r)}function vy(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=vy(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function On(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=vy(e))&&(r&&(r+=" "),r+=t);return r}const Ri=e=>typeof e=="number"&&!isNaN(e),mr=e=>typeof e=="string",kt=e=>typeof e=="function",Ns=e=>mr(e)||kt(e)?e:null,sc=e=>j.isValidElement(e)||mr(e)||kt(e)||Ri(e);function p$(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function Ga(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(s){let{children:a,position:u,preventExitTransition:c,done:d,nodeRef:h,isIn:g,playToast:$}=s;const y=r?`${t}--${u}`:t,w=r?`${n}--${u}`:n,x=j.useRef(0);return j.useLayoutEffect(()=>{const m=h.current,f=y.split(" "),p=v=>{v.target===h.current&&($(),m.removeEventListener("animationend",p),m.removeEventListener("animationcancel",p),x.current===0&&v.type!=="animationcancel"&&m.classList.remove(...f))};m.classList.add(...f),m.addEventListener("animationend",p),m.addEventListener("animationcancel",p)},[]),j.useEffect(()=>{const m=h.current,f=()=>{m.removeEventListener("animationend",f),o?p$(m,d,i):d()};g||(c?f():(x.current=1,m.className+=` ${w}`,m.addEventListener("animationend",f)))},[g]),G.createElement(G.Fragment,null,a)}}function gp(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const at=new Map;let Pi=[];const ac=new Set,h$=e=>ac.forEach(t=>t(e)),wy=()=>at.size>0;function $y(e,t){var n;if(t)return!((n=at.get(t))==null||!n.isToastActive(e));let r=!1;return at.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function Sy(e,t){sc(e)&&(wy()||Pi.push({content:e,options:t}),at.forEach(n=>{n.buildToast(e,t)}))}function yp(e,t){at.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function m$(e){const{subscribe:t,getSnapshot:n,setProps:r}=j.useRef(function(i){const s=i.containerId||1;return{subscribe(a){const u=function(d,h,g){let $=1,y=0,w=[],x=[],m=[],f=h;const p=new Map,v=new Set,E=()=>{m=Array.from(p.values()),v.forEach(_=>_())},P=_=>{x=_==null?[]:x.filter(L=>L!==_),E()},k=_=>{const{toastId:L,onOpen:A,updateId:W,children:D}=_.props,V=W==null;_.staleId&&p.delete(_.staleId),p.set(L,_),x=[...x,_.props.toastId].filter(X=>X!==_.staleId),E(),g(gp(_,V?"added":"updated")),V&&kt(A)&&A(j.isValidElement(D)&&D.props)};return{id:d,props:f,observe:_=>(v.add(_),()=>v.delete(_)),toggle:(_,L)=>{p.forEach(A=>{L!=null&&L!==A.props.toastId||kt(A.toggle)&&A.toggle(_)})},removeToast:P,toasts:p,clearQueue:()=>{y-=w.length,w=[]},buildToast:(_,L)=>{if((q=>{let{containerId:pe,toastId:ae,updateId:ve}=q;const we=pe?pe!==d:d!==1,Ae=p.has(ae)&&ve==null;return we||Ae})(L))return;const{toastId:A,updateId:W,data:D,staleId:V,delay:X}=L,te=()=>{P(A)},Z=W==null;Z&&y++;const ne={...f,style:f.toastStyle,key:$++,...Object.fromEntries(Object.entries(L).filter(q=>{let[pe,ae]=q;return ae!=null})),toastId:A,updateId:W,data:D,closeToast:te,isIn:!1,className:Ns(L.className||f.toastClassName),bodyClassName:Ns(L.bodyClassName||f.bodyClassName),progressClassName:Ns(L.progressClassName||f.progressClassName),autoClose:!L.isLoading&&(N=L.autoClose,z=f.autoClose,N===!1||Ri(N)&&N>0?N:z),deleteToast(){const q=p.get(A),{onClose:pe,children:ae}=q.props;kt(pe)&&pe(j.isValidElement(ae)&&ae.props),g(gp(q,"removed")),p.delete(A),y--,y<0&&(y=0),w.length>0?k(w.shift()):E()}};var N,z;ne.closeButton=f.closeButton,L.closeButton===!1||sc(L.closeButton)?ne.closeButton=L.closeButton:L.closeButton===!0&&(ne.closeButton=!sc(f.closeButton)||f.closeButton);let U=_;j.isValidElement(_)&&!mr(_.type)?U=j.cloneElement(_,{closeToast:te,toastProps:ne,data:D}):kt(_)&&(U=_({closeToast:te,toastProps:ne,data:D}));const Y={content:U,props:ne,staleId:V};f.limit&&f.limit>0&&y>f.limit&&Z?w.push(Y):Ri(X)?setTimeout(()=>{k(Y)},X):k(Y)},setProps(_){f=_},setToggle:(_,L)=>{p.get(_).toggle=L},isToastActive:_=>x.some(L=>L===_),getSnapshot:()=>m}}(s,i,h$);at.set(s,u);const c=u.observe(a);return Pi.forEach(d=>Sy(d.content,d.options)),Pi=[],()=>{c(),at.delete(s)}},setProps(a){var u;(u=at.get(s))==null||u.setProps(a)},getSnapshot(){var a;return(a=at.get(s))==null?void 0:a.getSnapshot()}}}(e)).current;r(e);const o=j.useSyncExternalStore(t,n,n);return{getToastToRender:function(i){if(!o)return[];const s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(a=>{const{position:u}=a.props;s.has(u)||s.set(u,[]),s.get(u).push(a)}),Array.from(s,a=>i(a[0],a[1]))},isToastActive:$y,count:o==null?void 0:o.length}}function g$(e){const[t,n]=j.useState(!1),[r,o]=j.useState(!1),i=j.useRef(null),s=j.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:h}=e;var g,$;function y(){n(!0)}function w(){n(!1)}function x(p){const v=i.current;s.canDrag&&v&&(s.didMove=!0,t&&w(),s.delta=e.draggableDirection==="x"?p.clientX-s.start:p.clientY-s.start,s.start!==p.clientX&&(s.canCloseOnClick=!1),v.style.transform=`translate3d(${e.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,v.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function m(){document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",m);const p=i.current;if(s.canDrag&&s.didMove&&p){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();p.style.transition="transform 0.2s, opacity 0.2s",p.style.removeProperty("transform"),p.style.removeProperty("opacity")}}($=at.get((g={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||$.setToggle(g.id,g.fn),j.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||w(),window.addEventListener("focus",y),window.addEventListener("blur",w),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",w)}},[e.pauseOnFocusLoss]);const f={onPointerDown:function(p){if(e.draggable===!0||e.draggable===p.pointerType){s.didMove=!1,document.addEventListener("pointermove",x),document.addEventListener("pointerup",m);const v=i.current;s.canCloseOnClick=!0,s.canDrag=!0,v.style.transition="none",e.draggableDirection==="x"?(s.start=p.clientX,s.removalDistance=v.offsetWidth*(e.draggablePercent/100)):(s.start=p.clientY,s.removalDistance=v.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(p){const{top:v,bottom:E,left:P,right:k}=i.current.getBoundingClientRect();p.nativeEvent.type!=="touchend"&&e.pauseOnHover&&p.clientX>=P&&p.clientX<=k&&p.clientY>=v&&p.clientY<=E?w():y()}};return a&&u&&(f.onMouseEnter=w,e.stacked||(f.onMouseLeave=y)),h&&(f.onClick=p=>{d&&d(p),s.canCloseOnClick&&c()}),{playToast:y,pauseToast:w,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:f}}function y$(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:s,style:a,controlledProgress:u,progress:c,rtl:d,isIn:h,theme:g}=e;const $=i||u&&c===0,y={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};u&&(y.transform=`scaleX(${c})`);const w=On("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":d}),x=kt(s)?s({rtl:d,type:o,defaultClassName:w}):On(w,s),m={[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{h&&r()}};return G.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":$},G.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${o}`}),G.createElement("div",{role:"progressbar","aria-hidden":$?"true":"false","aria-label":"notification timer",className:x,style:y,...m}))}let x$=1;const by=()=>""+x$++;function v$(e){return e&&(mr(e.toastId)||Ri(e.toastId))?e.toastId:by()}function ni(e,t){return Sy(e,t),t.toastId}function ga(e,t){return{...t,type:t&&t.type||e,toastId:v$(t)}}function as(e){return(t,n)=>ni(t,ga(e,n))}function re(e,t){return ni(e,ga("default",t))}re.loading=(e,t)=>ni(e,ga("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),re.promise=function(e,t,n){let r,{pending:o,error:i,success:s}=t;o&&(r=mr(o)?re.loading(o,n):re.loading(o.render,{...n,...o}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(d,h,g)=>{if(h==null)return void re.dismiss(r);const $={type:d,...a,...n,data:g},y=mr(h)?{render:h}:h;return r?re.update(r,{...$,...y}):re(y.render,{...$,...y}),g},c=kt(e)?e():e;return c.then(d=>u("success",s,d)).catch(d=>u("error",i,d)),c},re.success=as("success"),re.info=as("info"),re.error=as("error"),re.warning=as("warning"),re.warn=re.warning,re.dark=(e,t)=>ni(e,ga("default",{theme:"dark",...t})),re.dismiss=function(e){(function(t){var n;if(wy()){if(t==null||mr(n=t)||Ri(n))at.forEach(r=>{r.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const r=at.get(t.containerId);r?r.removeToast(t.id):at.forEach(o=>{o.removeToast(t.id)})}}else Pi=Pi.filter(r=>t!=null&&r.options.toastId!==t)})(e)},re.clearWaitingQueue=function(e){e===void 0&&(e={}),at.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},re.isActive=$y,re.update=function(e,t){t===void 0&&(t={});const n=((r,o)=>{var i;let{containerId:s}=o;return(i=at.get(s||1))==null?void 0:i.toasts.get(r)})(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:by()};i.toastId!==e&&(i.staleId=e);const s=i.render||o;delete i.render,ni(s,i)}},re.done=e=>{re.update(e,{progress:1})},re.onChange=function(e){return ac.add(e),()=>{ac.delete(e)}},re.play=e=>yp(!0,e),re.pause=e=>yp(!1,e);const w$=typeof window<"u"?j.useLayoutEffect:j.useEffect,ls=e=>{let{theme:t,type:n,isLoading:r,...o}=e;return G.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},Ol={info:function(e){return G.createElement(ls,{...e},G.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return G.createElement(ls,{...e},G.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return G.createElement(ls,{...e},G.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return G.createElement(ls,{...e},G.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return G.createElement("div",{className:"Toastify__spinner"})}},$$=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=g$(e),{closeButton:s,children:a,autoClose:u,onClick:c,type:d,hideProgressBar:h,closeToast:g,transition:$,position:y,className:w,style:x,bodyClassName:m,bodyStyle:f,progressClassName:p,progressStyle:v,updateId:E,role:P,progress:k,rtl:_,toastId:L,deleteToast:A,isIn:W,isLoading:D,closeOnClick:V,theme:X}=e,te=On("Toastify__toast",`Toastify__toast-theme--${X}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":_},{"Toastify__toast--close-on-click":V}),Z=kt(w)?w({rtl:_,position:y,type:d,defaultClassName:te}):On(te,w),ne=function(Y){let{theme:q,type:pe,isLoading:ae,icon:ve}=Y,we=null;const Ae={theme:q,type:pe};return ve===!1||(kt(ve)?we=ve({...Ae,isLoading:ae}):j.isValidElement(ve)?we=j.cloneElement(ve,Ae):ae?we=Ol.spinner():(Xt=>Xt in Ol)(pe)&&(we=Ol[pe](Ae))),we}(e),N=!!k||!u,z={closeToast:g,type:d,theme:X};let U=null;return s===!1||(U=kt(s)?s(z):j.isValidElement(s)?j.cloneElement(s,z):function(Y){let{closeToast:q,theme:pe,ariaLabel:ae="close"}=Y;return G.createElement("button",{className:`Toastify__close-button Toastify__close-button--${pe}`,type:"button",onClick:ve=>{ve.stopPropagation(),q(ve)},"aria-label":ae},G.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},G.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(z)),G.createElement($,{isIn:W,done:A,position:y,preventExitTransition:n,nodeRef:r,playToast:i},G.createElement("div",{id:L,onClick:c,"data-in":W,className:Z,...o,style:x,ref:r},G.createElement("div",{...W&&{role:P},className:kt(m)?m({type:d}):On("Toastify__toast-body",m),style:f},ne!=null&&G.createElement("div",{className:On("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},ne),G.createElement("div",null,a)),U,G.createElement(y$,{...E&&!N?{key:`pb-${E}`}:{},rtl:_,theme:X,delay:u,isRunning:t,isIn:W,closeToast:g,hide:h,type:d,style:v,className:p,controlledProgress:N,progress:k||0})))},qa=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},S$=Ga(qa("bounce",!0));Ga(qa("slide",!0));Ga(qa("zoom"));Ga(qa("flip"));const b$={position:"top-right",transition:S$,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function k$(e){let t={...b$,...e};const n=e.stacked,[r,o]=j.useState(!0),i=j.useRef(null),{getToastToRender:s,isToastActive:a,count:u}=m$(t),{className:c,style:d,rtl:h,containerId:g}=t;function $(w){const x=On("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":h});return kt(c)?c({position:w,rtl:h,defaultClassName:x}):On(x,Ns(c))}function y(){n&&(o(!0),re.play())}return w$(()=>{if(n){var w;const x=i.current.querySelectorAll('[data-in="true"]'),m=12,f=(w=t.position)==null?void 0:w.includes("top");let p=0,v=0;Array.from(x).reverse().forEach((E,P)=>{const k=E;k.classList.add("Toastify__toast--stacked"),P>0&&(k.dataset.collapsed=`${r}`),k.dataset.pos||(k.dataset.pos=f?"top":"bot");const _=p*(r?.2:1)+(r?0:m*P);k.style.setProperty("--y",`${f?_:-1*_}px`),k.style.setProperty("--g",`${m}`),k.style.setProperty("--s",""+(1-(r?v:0))),p+=k.offsetHeight,v+=.025})}},[r,u,n]),G.createElement("div",{ref:i,className:"Toastify",id:g,onMouseEnter:()=>{n&&(o(!1),re.pause())},onMouseLeave:y},s((w,x)=>{const m=x.length?{...d}:{...d,pointerEvents:"none"};return G.createElement("div",{className:$(w),style:m,key:`container-${w}`},x.map(f=>{let{content:p,props:v}=f;return G.createElement($$,{...v,stacked:n,collapseAll:y,isIn:a(v.toastId,v.containerId),style:v.style,key:`toast-${v.key}`},p)}))}))}const oe={primary:{50:"#fdf3e7",100:"#fae0c3",200:"#f5c28a",300:"#eda04e",400:"#e08530",500:"#C4671A",600:"#B45A14",700:"#96480f",800:"#7a3a0c",900:"#5e2c08"},neutral:{50:"#faf7f5",100:"#f2ece6",200:"#e4d9cf",300:"#cfc0b0",400:"#b5a090",500:"#96806e",600:"#7a6455",700:"#5e4d42",800:"#3d3028",900:"#231b15",950:"#130e0a"},success:{light:"#d1fae5",base:"#059669",dark:"#065f46"},warning:{light:"#fef3c7",base:"#d97706",dark:"#92400e"},error:{light:"#fee2e2",base:"#dc2626",dark:"#991b1b"},info:{light:"#dbeafe",base:"#2563eb",dark:"#1e40af"},white:"#ffffff",black:"#000000",transparent:"transparent"},E$={fontFamily:{sans:"'Sora', 'Helvetica Neue', Arial, sans-serif",serif:"'Playfair Display', Georgia, serif",mono:"'JetBrains Mono', 'Fira Code', monospace"},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem"},fontWeight:{regular:400,medium:500,semibold:600,bold:700},lineHeight:{tight:1.25,snug:1.375,normal:1.5,relaxed:1.625}},_$={0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem"},C$={none:"0",sm:"0.25rem",base:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},j$={sm:"0 1px 2px 0 rgba(35, 27, 21, 0.08)",base:"0 2px 4px 0 rgba(35, 27, 21, 0.10)",md:"0 4px 12px 0 rgba(35, 27, 21, 0.12)",lg:"0 8px 24px 0 rgba(35, 27, 21, 0.15)",xl:"0 16px 48px 0 rgba(35, 27, 21, 0.18)",amber:"0 4px 20px 0 rgba(180, 90, 20, 0.35)"},R$={fast:"150ms ease",base:"200ms ease",slow:"300ms ease",slower:"400ms cubic-bezier(0.4, 0, 0.2, 1)"},P$={base:0,raised:10,dropdown:100,sticky:200,overlay:300,modal:400,toast:500},xp={colors:oe,typography:E$,spacing:_$,borderRadius:C$,shadows:j$,transitions:R$,zIndex:P$,brand:{primary:oe.primary[600],primaryHover:oe.primary[700],primaryLight:oe.primary[100],primaryGhost:oe.primary[50]},surface:{page:oe.neutral[50],card:oe.white,sidebar:oe.neutral[900],elevated:oe.white,overlay:"rgba(35, 27, 21, 0.55)"},text:{primary:oe.neutral[900],secondary:oe.neutral[600],muted:oe.neutral[400],inverse:oe.white,brand:oe.primary[600],onDark:oe.neutral[200]},border:{default:oe.neutral[200],strong:oe.neutral[300],focus:oe.primary[600],error:oe.error.base},feedback:{success:{bg:oe.success.light,text:oe.success.dark,border:oe.success.base,icon:oe.success.base},warning:{bg:oe.warning.light,text:oe.warning.dark,border:oe.warning.base,icon:oe.warning.base},error:{bg:oe.error.light,text:oe.error.dark,border:oe.error.base,icon:oe.error.base},info:{bg:oe.info.light,text:oe.info.dark,border:oe.info.base,icon:oe.info.base}}},T$=f$`
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
`;function ky(e,t){return function(){return e.apply(t,arguments)}}const{toString:z$}=Object.prototype,{getPrototypeOf:wd}=Object,{iterator:Qa,toStringTag:Ey}=Symbol,Ya=(e=>t=>{const n=z$.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Kt=e=>(e=e.toLowerCase(),t=>Ya(t)===e),Ka=e=>t=>typeof t===e,{isArray:Eo}=Array,xo=Ka("undefined");function Ai(e){return e!==null&&!xo(e)&&e.constructor!==null&&!xo(e.constructor)&&yt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _y=Kt("ArrayBuffer");function N$(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_y(e.buffer),t}const F$=Ka("string"),yt=Ka("function"),Cy=Ka("number"),Ii=e=>e!==null&&typeof e=="object",O$=e=>e===!0||e===!1,Fs=e=>{if(Ya(e)!=="object")return!1;const t=wd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ey in e)&&!(Qa in e)},L$=e=>{if(!Ii(e)||Ai(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},A$=Kt("Date"),I$=Kt("File"),D$=e=>!!(e&&typeof e.uri<"u"),B$=e=>e&&typeof e.getParts<"u",M$=Kt("Blob"),U$=Kt("FileList"),V$=e=>Ii(e)&&yt(e.pipe);function W$(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const vp=W$(),wp=typeof vp.FormData<"u"?vp.FormData:void 0,H$=e=>{let t;return e&&(wp&&e instanceof wp||yt(e.append)&&((t=Ya(e))==="formdata"||t==="object"&&yt(e.toString)&&e.toString()==="[object FormData]"))},G$=Kt("URLSearchParams"),[q$,Q$,Y$,K$]=["ReadableStream","Request","Response","Headers"].map(Kt),X$=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Di(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Eo(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(Ai(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function jy(e,t){if(Ai(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ry=e=>!xo(e)&&e!==dr;function lc(){const{caseless:e,skipUndefined:t}=Ry(this)&&this||{},n={},r=(o,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const s=e&&jy(n,i)||i;Fs(n[s])&&Fs(o)?n[s]=lc(n[s],o):Fs(o)?n[s]=lc({},o):Eo(o)?n[s]=o.slice():(!t||!xo(o))&&(n[s]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Di(arguments[o],r);return n}const J$=(e,t,n,{allOwnKeys:r}={})=>(Di(t,(o,i)=>{n&&yt(o)?Object.defineProperty(e,i,{value:ky(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Z$=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),eS=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},tS=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&wd(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},nS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},rS=e=>{if(!e)return null;if(Eo(e))return e;let t=e.length;if(!Cy(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},oS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&wd(Uint8Array)),iS=(e,t)=>{const r=(e&&e[Qa]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},sS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},aS=Kt("HTMLFormElement"),lS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),$p=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),uS=Kt("RegExp"),Py=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Di(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},cS=e=>{Py(e,(t,n)=>{if(yt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(yt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},dS=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Eo(e)?r(e):r(String(e).split(t)),n},fS=()=>{},pS=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function hS(e){return!!(e&&yt(e.append)&&e[Ey]==="FormData"&&e[Qa])}const mS=e=>{const t=new Array(10),n=(r,o)=>{if(Ii(r)){if(t.indexOf(r)>=0)return;if(Ai(r))return r;if(!("toJSON"in r)){t[o]=r;const i=Eo(r)?[]:{};return Di(r,(s,a)=>{const u=n(s,o+1);!xo(u)&&(i[a]=u)}),t[o]=void 0,i}}return r};return n(e,0)},gS=Kt("AsyncFunction"),yS=e=>e&&(Ii(e)||yt(e))&&yt(e.then)&&yt(e.catch),Ty=((e,t)=>e?setImmediate:t?((n,r)=>(dr.addEventListener("message",({source:o,data:i})=>{o===dr&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),dr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",yt(dr.postMessage)),xS=typeof queueMicrotask<"u"?queueMicrotask.bind(dr):typeof process<"u"&&process.nextTick||Ty,vS=e=>e!=null&&yt(e[Qa]),R={isArray:Eo,isArrayBuffer:_y,isBuffer:Ai,isFormData:H$,isArrayBufferView:N$,isString:F$,isNumber:Cy,isBoolean:O$,isObject:Ii,isPlainObject:Fs,isEmptyObject:L$,isReadableStream:q$,isRequest:Q$,isResponse:Y$,isHeaders:K$,isUndefined:xo,isDate:A$,isFile:I$,isReactNativeBlob:D$,isReactNative:B$,isBlob:M$,isRegExp:uS,isFunction:yt,isStream:V$,isURLSearchParams:G$,isTypedArray:oS,isFileList:U$,forEach:Di,merge:lc,extend:J$,trim:X$,stripBOM:Z$,inherits:eS,toFlatObject:tS,kindOf:Ya,kindOfTest:Kt,endsWith:nS,toArray:rS,forEachEntry:iS,matchAll:sS,isHTMLForm:aS,hasOwnProperty:$p,hasOwnProp:$p,reduceDescriptors:Py,freezeMethods:cS,toObjectSet:dS,toCamelCase:lS,noop:fS,toFiniteNumber:pS,findKey:jy,global:dr,isContextDefined:Ry,isSpecCompliantForm:hS,toJSONObject:mS,isAsyncFn:gS,isThenable:yS,setImmediate:Ty,asap:xS,isIterable:vS};let K=class zy extends Error{static from(t,n,r,o,i,s){const a=new zy(t.message,n||t.code,r,o,i);return a.cause=t,a.name=t.name,t.status!=null&&a.status==null&&(a.status=t.status),s&&Object.assign(a,s),a}constructor(t,n,r,o,i){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),o&&(this.request=o),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.status}}};K.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";K.ERR_BAD_OPTION="ERR_BAD_OPTION";K.ECONNABORTED="ECONNABORTED";K.ETIMEDOUT="ETIMEDOUT";K.ERR_NETWORK="ERR_NETWORK";K.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";K.ERR_DEPRECATED="ERR_DEPRECATED";K.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";K.ERR_BAD_REQUEST="ERR_BAD_REQUEST";K.ERR_CANCELED="ERR_CANCELED";K.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";K.ERR_INVALID_URL="ERR_INVALID_URL";const wS=null;function uc(e){return R.isPlainObject(e)||R.isArray(e)}function Ny(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function Ll(e,t,n){return e?e.concat(t).map(function(o,i){return o=Ny(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function $S(e){return R.isArray(e)&&!e.some(uc)}const SS=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function Xa(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,x){return!R.isUndefined(x[w])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(o))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(R.isDate(y))return y.toISOString();if(R.isBoolean(y))return y.toString();if(!u&&R.isBlob(y))throw new K("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(y)||R.isTypedArray(y)?u&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,w,x){let m=y;if(R.isReactNative(t)&&R.isReactNativeBlob(y))return t.append(Ll(x,w,i),c(y)),!1;if(y&&!x&&typeof y=="object"){if(R.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(R.isArray(y)&&$S(y)||(R.isFileList(y)||R.endsWith(w,"[]"))&&(m=R.toArray(y)))return w=Ny(w),m.forEach(function(p,v){!(R.isUndefined(p)||p===null)&&t.append(s===!0?Ll([w],v,i):s===null?w:w+"[]",c(p))}),!1}return uc(y)?!0:(t.append(Ll(x,w,i),c(y)),!1)}const h=[],g=Object.assign(SS,{defaultVisitor:d,convertValue:c,isVisitable:uc});function $(y,w){if(!R.isUndefined(y)){if(h.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(y),R.forEach(y,function(m,f){(!(R.isUndefined(m)||m===null)&&o.call(t,m,R.isString(f)?f.trim():f,w,g))===!0&&$(m,w?w.concat(f):[f])}),h.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return $(e),t}function Sp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function $d(e,t){this._pairs=[],e&&Xa(e,this,t)}const Fy=$d.prototype;Fy.append=function(t,n){this._pairs.push([t,n])};Fy.toString=function(t){const n=t?function(r){return t.call(this,r,Sp)}:Sp;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function bS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Oy(e,t,n){if(!t)return e;const r=n&&n.encode||bS,o=R.isFunction(n)?{serialize:n}:n,i=o&&o.serialize;let s;if(i?s=i(t,o):s=R.isURLSearchParams(t)?t.toString():new $d(t,o).toString(r),s){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class bp{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Sd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},kS=typeof URLSearchParams<"u"?URLSearchParams:$d,ES=typeof FormData<"u"?FormData:null,_S=typeof Blob<"u"?Blob:null,CS={isBrowser:!0,classes:{URLSearchParams:kS,FormData:ES,Blob:_S},protocols:["http","https","file","blob","url","data"]},bd=typeof window<"u"&&typeof document<"u",cc=typeof navigator=="object"&&navigator||void 0,jS=bd&&(!cc||["ReactNative","NativeScript","NS"].indexOf(cc.product)<0),RS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",PS=bd&&window.location.href||"http://localhost",TS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:bd,hasStandardBrowserEnv:jS,hasStandardBrowserWebWorkerEnv:RS,navigator:cc,origin:PS},Symbol.toStringTag,{value:"Module"})),nt={...TS,...CS};function zS(e,t){return Xa(e,new nt.classes.URLSearchParams,{visitor:function(n,r,o,i){return nt.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function NS(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function FS(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Ly(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),u=i>=n.length;return s=!s&&R.isArray(o)?o.length:s,u?(R.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!R.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&R.isArray(o[s])&&(o[s]=FS(o[s])),!a)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,o)=>{t(NS(r),o,n,0)}),n}return null}function OS(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Bi={transitional:Sd,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=R.isObject(t);if(i&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return o?JSON.stringify(Ly(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t)||R.isReadableStream(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return zS(t,this.formSerializer).toString();if((a=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Xa(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),OS(t)):t}],transformResponse:[function(t){const n=this.transitional||Bi.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(R.isResponse(t)||R.isReadableStream(t))return t;if(t&&R.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(a){if(s)throw a.name==="SyntaxError"?K.from(a,K.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt.classes.FormData,Blob:nt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};R.forEach(["delete","get","head","post","put","patch"],e=>{Bi.headers[e]={}});const LS=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),AS=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&LS[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},kp=Symbol("internals");function Fo(e){return e&&String(e).trim().toLowerCase()}function Os(e){return e===!1||e==null?e:R.isArray(e)?e.map(Os):String(e)}function IS(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const DS=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Al(e,t,n,r,o){if(R.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function BS(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function MS(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}let xt=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,u,c){const d=Fo(u);if(!d)throw new Error("header name must be a non-empty string");const h=R.findKey(o,d);(!h||o[h]===void 0||c===!0||c===void 0&&o[h]!==!1)&&(o[h||u]=Os(a))}const s=(a,u)=>R.forEach(a,(c,d)=>i(c,d,u));if(R.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(R.isString(t)&&(t=t.trim())&&!DS(t))s(AS(t),n);else if(R.isObject(t)&&R.isIterable(t)){let a={},u,c;for(const d of t){if(!R.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[c=d[0]]=(u=a[c])?R.isArray(u)?[...u,d[1]]:[u,d[1]]:d[1]}s(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Fo(t),t){const r=R.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return IS(o);if(R.isFunction(n))return n.call(this,o,r);if(R.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Fo(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Al(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Fo(s),s){const a=R.findKey(r,s);a&&(!n||Al(r,r[a],a,n))&&(delete r[a],o=!0)}}return R.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Al(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return R.forEach(this,(o,i)=>{const s=R.findKey(r,i);if(s){n[s]=Os(o),delete n[i];return}const a=t?BS(i):String(i).trim();a!==i&&delete n[i],n[a]=Os(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[kp]=this[kp]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=Fo(s);r[a]||(MS(o,s),r[a]=!0)}return R.isArray(t)?t.forEach(i):i(t),this}};xt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.reduceDescriptors(xt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});R.freezeMethods(xt);function Il(e,t){const n=this||Bi,r=t||n,o=xt.from(r.headers);let i=r.data;return R.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Ay(e){return!!(e&&e.__CANCEL__)}let Mi=class extends K{constructor(t,n,r){super(t??"canceled",K.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function Iy(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function US(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function VS(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=r[i];s||(s=c),n[o]=u,r[o]=c;let h=i,g=0;for(;h!==o;)g+=n[h++],h=h%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-s<t)return;const $=d&&c-d;return $?Math.round(g*1e3/$):void 0}}function WS(e,t){let n=0,r=1e3/t,o,i;const s=(c,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e(...c)};return[(...c)=>{const d=Date.now(),h=d-n;h>=r?s(c,d):(o=c,i||(i=setTimeout(()=>{i=null,s(o)},r-h)))},()=>o&&s(o)]}const ya=(e,t,n=3)=>{let r=0;const o=VS(50,250);return WS(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,u=s-r,c=o(u),d=s<=a;r=s;const h={loaded:s,total:a,progress:a?s/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a&&d?(a-s)/c:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(h)},n)},Ep=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},_p=e=>(...t)=>R.asap(()=>e(...t)),HS=nt.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,nt.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(nt.origin),nt.navigator&&/(msie|trident)/i.test(nt.navigator.userAgent)):()=>!0,GS=nt.hasStandardBrowserEnv?{write(e,t,n,r,o,i,s){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];R.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),R.isString(r)&&a.push(`path=${r}`),R.isString(o)&&a.push(`domain=${o}`),i===!0&&a.push("secure"),R.isString(s)&&a.push(`SameSite=${s}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function qS(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function QS(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Dy(e,t,n){let r=!qS(t);return e&&(r||n==!1)?QS(e,t):t}const Cp=e=>e instanceof xt?{...e}:e;function Er(e,t){t=t||{};const n={};function r(c,d,h,g){return R.isPlainObject(c)&&R.isPlainObject(d)?R.merge.call({caseless:g},c,d):R.isPlainObject(d)?R.merge({},d):R.isArray(d)?d.slice():d}function o(c,d,h,g){if(R.isUndefined(d)){if(!R.isUndefined(c))return r(void 0,c,h,g)}else return r(c,d,h,g)}function i(c,d){if(!R.isUndefined(d))return r(void 0,d)}function s(c,d){if(R.isUndefined(d)){if(!R.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,h){if(h in t)return r(c,d);if(h in e)return r(void 0,c)}const u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,d,h)=>o(Cp(c),Cp(d),h,!0)};return R.forEach(Object.keys({...e,...t}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const h=R.hasOwnProp(u,d)?u[d]:o,g=h(e[d],t[d],d);R.isUndefined(g)&&h!==a||(n[d]=g)}),n}const By=e=>{const t=Er({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;if(t.headers=s=xt.from(s),t.url=Oy(Dy(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),R.isFormData(n)){if(nt.hasStandardBrowserEnv||nt.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(R.isFunction(n.getHeaders)){const u=n.getHeaders(),c=["content-type","content-length"];Object.entries(u).forEach(([d,h])=>{c.includes(d.toLowerCase())&&s.set(d,h)})}}if(nt.hasStandardBrowserEnv&&(r&&R.isFunction(r)&&(r=r(t)),r||r!==!1&&HS(t.url))){const u=o&&i&&GS.read(i);u&&s.set(o,u)}return t},YS=typeof XMLHttpRequest<"u",KS=YS&&function(e){return new Promise(function(n,r){const o=By(e);let i=o.data;const s=xt.from(o.headers).normalize();let{responseType:a,onUploadProgress:u,onDownloadProgress:c}=o,d,h,g,$,y;function w(){$&&$(),y&&y(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let x=new XMLHttpRequest;x.open(o.method.toUpperCase(),o.url,!0),x.timeout=o.timeout;function m(){if(!x)return;const p=xt.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),E={data:!a||a==="text"||a==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:p,config:e,request:x};Iy(function(k){n(k),w()},function(k){r(k),w()},E),x=null}"onloadend"in x?x.onloadend=m:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(m)},x.onabort=function(){x&&(r(new K("Request aborted",K.ECONNABORTED,e,x)),x=null)},x.onerror=function(v){const E=v&&v.message?v.message:"Network Error",P=new K(E,K.ERR_NETWORK,e,x);P.event=v||null,r(P),x=null},x.ontimeout=function(){let v=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const E=o.transitional||Sd;o.timeoutErrorMessage&&(v=o.timeoutErrorMessage),r(new K(v,E.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,e,x)),x=null},i===void 0&&s.setContentType(null),"setRequestHeader"in x&&R.forEach(s.toJSON(),function(v,E){x.setRequestHeader(E,v)}),R.isUndefined(o.withCredentials)||(x.withCredentials=!!o.withCredentials),a&&a!=="json"&&(x.responseType=o.responseType),c&&([g,y]=ya(c,!0),x.addEventListener("progress",g)),u&&x.upload&&([h,$]=ya(u),x.upload.addEventListener("progress",h),x.upload.addEventListener("loadend",$)),(o.cancelToken||o.signal)&&(d=p=>{x&&(r(!p||p.type?new Mi(null,e,x):p),x.abort(),x=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const f=US(o.url);if(f&&nt.protocols.indexOf(f)===-1){r(new K("Unsupported protocol "+f+":",K.ERR_BAD_REQUEST,e));return}x.send(i||null)})},XS=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(c){if(!o){o=!0,a();const d=c instanceof Error?c:this.reason;r.abort(d instanceof K?d:new Mi(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new K(`timeout of ${t}ms exceeded`,K.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:u}=r;return u.unsubscribe=()=>R.asap(a),u}},JS=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},ZS=async function*(e,t){for await(const n of eb(e))yield*JS(n,t)},eb=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},jp=(e,t,n,r)=>{const o=ZS(e,t);let i=0,s,a=u=>{s||(s=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await o.next();if(c){a(),u.close();return}let h=d.byteLength;if(n){let g=i+=h;n(g)}u.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(u){return a(u),o.return()}},{highWaterMark:2})},Rp=64*1024,{isFunction:us}=R,tb=(({Request:e,Response:t})=>({Request:e,Response:t}))(R.global),{ReadableStream:Pp,TextEncoder:Tp}=R.global,zp=(e,...t)=>{try{return!!e(...t)}catch{return!1}},nb=e=>{e=R.merge.call({skipUndefined:!0},tb,e);const{fetch:t,Request:n,Response:r}=e,o=t?us(t):typeof fetch=="function",i=us(n),s=us(r);if(!o)return!1;const a=o&&us(Pp),u=o&&(typeof Tp=="function"?(y=>w=>y.encode(w))(new Tp):async y=>new Uint8Array(await new n(y).arrayBuffer())),c=i&&a&&zp(()=>{let y=!1;const w=new n(nt.origin,{body:new Pp,method:"POST",get duplex(){return y=!0,"half"}}).headers.has("Content-Type");return y&&!w}),d=s&&a&&zp(()=>R.isReadableStream(new r("").body)),h={stream:d&&(y=>y.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(y=>{!h[y]&&(h[y]=(w,x)=>{let m=w&&w[y];if(m)return m.call(w);throw new K(`Response type '${y}' is not supported`,K.ERR_NOT_SUPPORT,x)})});const g=async y=>{if(y==null)return 0;if(R.isBlob(y))return y.size;if(R.isSpecCompliantForm(y))return(await new n(nt.origin,{method:"POST",body:y}).arrayBuffer()).byteLength;if(R.isArrayBufferView(y)||R.isArrayBuffer(y))return y.byteLength;if(R.isURLSearchParams(y)&&(y=y+""),R.isString(y))return(await u(y)).byteLength},$=async(y,w)=>{const x=R.toFiniteNumber(y.getContentLength());return x??g(w)};return async y=>{let{url:w,method:x,data:m,signal:f,cancelToken:p,timeout:v,onDownloadProgress:E,onUploadProgress:P,responseType:k,headers:_,withCredentials:L="same-origin",fetchOptions:A}=By(y),W=t||fetch;k=k?(k+"").toLowerCase():"text";let D=XS([f,p&&p.toAbortSignal()],v),V=null;const X=D&&D.unsubscribe&&(()=>{D.unsubscribe()});let te;try{if(P&&c&&x!=="get"&&x!=="head"&&(te=await $(_,m))!==0){let Y=new n(w,{method:"POST",body:m,duplex:"half"}),q;if(R.isFormData(m)&&(q=Y.headers.get("content-type"))&&_.setContentType(q),Y.body){const[pe,ae]=Ep(te,ya(_p(P)));m=jp(Y.body,Rp,pe,ae)}}R.isString(L)||(L=L?"include":"omit");const Z=i&&"credentials"in n.prototype,ne={...A,signal:D,method:x.toUpperCase(),headers:_.normalize().toJSON(),body:m,duplex:"half",credentials:Z?L:void 0};V=i&&new n(w,ne);let N=await(i?W(V,A):W(w,ne));const z=d&&(k==="stream"||k==="response");if(d&&(E||z&&X)){const Y={};["status","statusText","headers"].forEach(ve=>{Y[ve]=N[ve]});const q=R.toFiniteNumber(N.headers.get("content-length")),[pe,ae]=E&&Ep(q,ya(_p(E),!0))||[];N=new r(jp(N.body,Rp,pe,()=>{ae&&ae(),X&&X()}),Y)}k=k||"text";let U=await h[R.findKey(h,k)||"text"](N,y);return!z&&X&&X(),await new Promise((Y,q)=>{Iy(Y,q,{data:U,headers:xt.from(N.headers),status:N.status,statusText:N.statusText,config:y,request:V})})}catch(Z){throw X&&X(),Z&&Z.name==="TypeError"&&/Load failed|fetch/i.test(Z.message)?Object.assign(new K("Network Error",K.ERR_NETWORK,y,V,Z&&Z.response),{cause:Z.cause||Z}):K.from(Z,Z&&Z.code,y,V,Z&&Z.response)}}},rb=new Map,My=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:o}=t,i=[r,o,n];let s=i.length,a=s,u,c,d=rb;for(;a--;)u=i[a],c=d.get(u),c===void 0&&d.set(u,c=a?new Map:nb(t)),d=c;return c};My();const kd={http:wS,xhr:KS,fetch:{get:My}};R.forEach(kd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Np=e=>`- ${e}`,ob=e=>R.isFunction(e)||e===null||e===!1;function ib(e,t){e=R.isArray(e)?e:[e];const{length:n}=e;let r,o;const i={};for(let s=0;s<n;s++){r=e[s];let a;if(o=r,!ob(r)&&(o=kd[(a=String(r)).toLowerCase()],o===void 0))throw new K(`Unknown adapter '${a}'`);if(o&&(R.isFunction(o)||(o=o.get(t))))break;i[a||"#"+s]=o}if(!o){const s=Object.entries(i).map(([u,c])=>`adapter ${u} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?s.length>1?`since :
`+s.map(Np).join(`
`):" "+Np(s[0]):"as no adapter specified";throw new K("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return o}const Uy={getAdapter:ib,adapters:kd};function Dl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Mi(null,e)}function Fp(e){return Dl(e),e.headers=xt.from(e.headers),e.data=Il.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Uy.getAdapter(e.adapter||Bi.adapter,e)(e).then(function(r){return Dl(e),r.data=Il.call(e,e.transformResponse,r),r.headers=xt.from(r.headers),r},function(r){return Ay(r)||(Dl(e),r&&r.response&&(r.response.data=Il.call(e,e.transformResponse,r.response),r.response.headers=xt.from(r.response.headers))),Promise.reject(r)})}const Vy="1.13.6",Ja={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ja[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Op={};Ja.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Vy+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new K(o(s," has been removed"+(n?" in "+n:"")),K.ERR_DEPRECATED);return n&&!Op[s]&&(Op[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};Ja.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function sb(e,t,n){if(typeof e!="object")throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],u=a===void 0||s(a,i,e);if(u!==!0)throw new K("option "+i+" must be "+u,K.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new K("Unknown option "+i,K.ERR_BAD_OPTION)}}const Ls={assertOptions:sb,validators:Ja},Pt=Ls.validators;let gr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new bp,response:new bp}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Er(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Ls.assertOptions(r,{silentJSONParsing:Pt.transitional(Pt.boolean),forcedJSONParsing:Pt.transitional(Pt.boolean),clarifyTimeoutError:Pt.transitional(Pt.boolean),legacyInterceptorReqResOrdering:Pt.transitional(Pt.boolean)},!1),o!=null&&(R.isFunction(o)?n.paramsSerializer={serialize:o}:Ls.assertOptions(o,{encode:Pt.function,serialize:Pt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ls.assertOptions(n,{baseUrl:Pt.spelling("baseURL"),withXsrfToken:Pt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&R.merge(i.common,i[n.method]);i&&R.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=xt.concat(s,i);const a=[];let u=!0;this.interceptors.request.forEach(function(w){if(typeof w.runWhen=="function"&&w.runWhen(n)===!1)return;u=u&&w.synchronous;const x=n.transitional||Sd;x&&x.legacyInterceptorReqResOrdering?a.unshift(w.fulfilled,w.rejected):a.push(w.fulfilled,w.rejected)});const c=[];this.interceptors.response.forEach(function(w){c.push(w.fulfilled,w.rejected)});let d,h=0,g;if(!u){const y=[Fp.bind(this),void 0];for(y.unshift(...a),y.push(...c),g=y.length,d=Promise.resolve(n);h<g;)d=d.then(y[h++],y[h++]);return d}g=a.length;let $=n;for(;h<g;){const y=a[h++],w=a[h++];try{$=y($)}catch(x){w.call(this,x);break}}try{d=Fp.call(this,$)}catch(y){return Promise.reject(y)}for(h=0,g=c.length;h<g;)d=d.then(c[h++],c[h++]);return d}getUri(t){t=Er(this.defaults,t);const n=Dy(t.baseURL,t.url,t.allowAbsoluteUrls);return Oy(n,t.params,t.paramsSerializer)}};R.forEach(["delete","get","head","options"],function(t){gr.prototype[t]=function(n,r){return this.request(Er(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(Er(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}gr.prototype[t]=n(),gr.prototype[t+"Form"]=n(!0)});let ab=class Wy{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new Mi(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Wy(function(o){t=o}),cancel:t}}};function lb(e){return function(n){return e.apply(null,n)}}function ub(e){return R.isObject(e)&&e.isAxiosError===!0}const dc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(dc).forEach(([e,t])=>{dc[t]=e});function Hy(e){const t=new gr(e),n=ky(gr.prototype.request,t);return R.extend(n,gr.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Hy(Er(e,o))},n}const Pe=Hy(Bi);Pe.Axios=gr;Pe.CanceledError=Mi;Pe.CancelToken=ab;Pe.isCancel=Ay;Pe.VERSION=Vy;Pe.toFormData=Xa;Pe.AxiosError=K;Pe.Cancel=Pe.CanceledError;Pe.all=function(t){return Promise.all(t)};Pe.spread=lb;Pe.isAxiosError=ub;Pe.mergeConfig=Er;Pe.AxiosHeaders=xt;Pe.formToJSON=e=>Ly(R.isHTMLForm(e)?new FormData(e):e);Pe.getAdapter=Uy.getAdapter;Pe.HttpStatusCode=dc;Pe.default=Pe;const{Axios:C_,AxiosError:j_,CanceledError:R_,isCancel:P_,CancelToken:T_,VERSION:z_,all:N_,Cancel:F_,isAxiosError:O_,spread:L_,toFormData:A_,AxiosHeaders:I_,HttpStatusCode:D_,formToJSON:B_,getAdapter:M_,mergeConfig:U_}=Pe,Gy="https://bgrepresentacoes-api-production.up.railway.app/api/v1",vo={ACCESS_TOKEN:"bg:access_token",REFRESH_TOKEN:"bg:refresh_token"},qy=()=>localStorage.getItem(vo.ACCESS_TOKEN),Qy=()=>localStorage.getItem(vo.REFRESH_TOKEN),Yy=({accessToken:e,refreshToken:t})=>{e&&localStorage.setItem(vo.ACCESS_TOKEN,e),t&&localStorage.setItem(vo.REFRESH_TOKEN,t)},xa=()=>{localStorage.removeItem(vo.ACCESS_TOKEN),localStorage.removeItem(vo.REFRESH_TOKEN)},Et=Pe.create({baseURL:Gy,timeout:15e3,headers:{"Content-Type":"application/json",Accept:"application/json"}});let cs=!1,fc=[];const Lp=(e,t=null)=>{fc.forEach(({resolve:n,reject:r})=>e?r(e):n(t)),fc=[]};Et.interceptors.request.use(e=>{const t=qy();return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));Et.interceptors.response.use(e=>e,async e=>{var i,s;const t=e.config,n=((i=e.response)==null?void 0:i.status)===401,r=!t._retry,o=!((s=t.url)!=null&&s.includes("/auth/refresh"));if(n&&r&&o){if(t._retry=!0,cs)return new Promise((u,c)=>{fc.push({resolve:u,reject:c})}).then(u=>(t.headers.Authorization=`Bearer ${u}`,Et(t)));cs=!0;const a=Qy();if(!a)return cs=!1,xa(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(e);try{const{data:u}=await Pe.post(`${Gy}/auth/refresh`,{refreshToken:a},{headers:{"Content-Type":"application/json"}}),c=u.data??u,d=c.token??c.accessToken,h=c.refreshToken;if(!d)throw new Error("Refresh não retornou accessToken");return Yy({accessToken:d,refreshToken:h}),Lp(null,d),t.headers.Authorization=`Bearer ${d}`,Et(t)}catch(u){return Lp(u,null),xa(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(u)}finally{cs=!1}}return Promise.reject(e)});const _r=(e,t="Ocorreu um erro inesperado.")=>{var n,r,o,i;return((r=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:r.message)??((i=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:i.error)??(e==null?void 0:e.message)??t},et={INIT:"INIT",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGOUT:"LOGOUT",PASSWORD_CHANGED:"PASSWORD_CHANGED",UPDATE_USER:"UPDATE_USER",SET_LOADING:"SET_LOADING"},Ky={user:null,isAuthenticated:!1,isLoading:!0,mustChangePassword:!1};function cb(e,{type:t,payload:n}){switch(t){case et.INIT:return{...e,user:n.user??null,isAuthenticated:!!n.user,isLoading:!1,mustChangePassword:n.mustChangePassword??!1};case et.LOGIN_SUCCESS:return{...e,user:n.user,isAuthenticated:!0,isLoading:!1,mustChangePassword:n.mustChangePassword??!1};case et.LOGOUT:return{...Ky,isLoading:!1};case et.PASSWORD_CHANGED:return{...e,mustChangePassword:!1};case et.UPDATE_USER:return{...e,user:{...e.user,...n}};case et.SET_LOADING:return{...e,isLoading:n};default:return e}}const Xy=j.createContext(null);function db({children:e}){var $,y,w,x;const[t,n]=j.useReducer(cb,Ky),r=j.useRef(!1);j.useEffect(()=>{if(r.current)return;r.current=!0,(async()=>{const f=qy(),p=Qy();if(!f&&!p){n({type:et.INIT,payload:{user:null}});return}try{const{data:v}=await Et.get("/users/profile");n({type:et.INIT,payload:{user:v.data}})}catch{xa(),n({type:et.INIT,payload:{user:null}})}})()},[]),j.useEffect(()=>{const m=()=>{n({type:et.LOGOUT})};return window.addEventListener("bg:session-expired",m),()=>window.removeEventListener("bg:session-expired",m)},[]);const o=j.useCallback(async(m,f)=>{n({type:et.SET_LOADING,payload:!0});try{const{data:p}=await Et.post("/auth/login",{email:m,password:f}),v=p.data??p,E=v.token??v.accessToken,{refreshToken:P,user:k}=v;re.success("Login efetuado com sucesso!",{toastId:"login-success"}),Yy({accessToken:E,refreshToken:P});const _=(v.mustChangePassword??p.mustChangePassword??((k==null?void 0:k.last_login_at)===null||(k==null?void 0:k.last_login_at)===void 0),!1),L=v.mustChangePassword===!0;return n({type:et.LOGIN_SUCCESS,payload:{user:k,mustChangePassword:L}}),{mustChangePassword:L}}catch(p){throw n({type:et.SET_LOADING,payload:!1}),new Error(_r(p,"E-mail ou senha inválidos."))}},[]),i=j.useCallback(async(m,f,p)=>{try{await Et.patch("/auth/change-password",{currentPassword:m,newPassword:f,confirmPassword:p}),n({type:et.PASSWORD_CHANGED}),re.success("Senha alterada com sucesso!")}catch(v){throw new Error(_r(v,"Erro ao alterar a senha. Tente novamente."))}},[]),s=j.useCallback(()=>{re.success("Logout efetuado com sucesso!",{toastId:"logout-success"}),xa(),n({type:et.LOGOUT}),Et.post("/auth/logout").catch(()=>{})},[]),a=j.useCallback(m=>{n({type:et.UPDATE_USER,payload:m})},[]),u=(($=t.user)==null?void 0:$.role)==="admin",c=((y=t.user)==null?void 0:y.role)==="user",d=((w=t.user)==null?void 0:w.role)==="partner",h=j.useCallback((...m)=>{var f;return m.includes((f=t.user)==null?void 0:f.role)},[(x=t.user)==null?void 0:x.role]),g=j.useMemo(()=>({user:t.user,isAuthenticated:t.isAuthenticated,isLoading:t.isLoading,mustChangePassword:t.mustChangePassword,isAdmin:u,isUser:c,isPartner:d,hasRole:h,login:o,logout:s,changePassword:i,updateUser:a}),[t,u,c,d,h,o,s,i,a]);return l.jsx(Xy.Provider,{value:g,children:e})}function Tr(){const e=j.useContext(Xy);if(!e)throw new Error("useAuth deve ser usado dentro de <AuthProvider>.");return e}const fb=Qe`
  to { transform: rotate(360deg); }
`,pb=b.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.surface.page};
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,hb=b.div`
  width: 36px;
  height: 36px;
  border: 3px solid ${({theme:e})=>e.colors.primary[100]};
  border-top-color: ${({theme:e})=>e.brand.primary};
  border-radius: 50%;
  animation: ${fb} 0.8s linear infinite;
`,mb=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,gb=b.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.surface.page};
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
`,yb=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[200]};
  margin: 0;
  line-height: 1;
`,xb=b.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,vb=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
  max-width: 320px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;function Bl({allowedRoles:e=[]}){const{isAuthenticated:t,isLoading:n,mustChangePassword:r,user:o}=Tr(),i=Jn();return n?l.jsxs(pb,{children:[l.jsx(hb,{}),l.jsx(mb,{children:"Verificando sessão…"})]}):t?r&&i.pathname!=="/alterar-senha"?l.jsx(ua,{to:"/alterar-senha",replace:!0}):e.length>0&&!e.includes(o==null?void 0:o.role)?l.jsxs(gb,{children:[l.jsx(yb,{children:"403"}),l.jsx(xb,{children:"Acesso não autorizado"}),l.jsx(vb,{children:"Você não tem permissão para acessar esta área. Entre em contato com o administrador caso acredite que isso é um erro."})]}):l.jsx(Gg,{}):l.jsx(ua,{to:"/login",state:{from:i},replace:!0})}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jy=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=j.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:s,...a},u)=>j.createElement("svg",{ref:u,...$b,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Jy("lucide",o),...a},[...s.map(([c,d])=>j.createElement(c,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(e,t)=>{const n=j.forwardRef(({className:r,...o},i)=>j.createElement(Sb,{ref:i,iconNode:t,className:Jy(`lucide-${wb(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=de("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=de("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=de("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=de("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=de("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=de("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=de("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=de("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=de("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=de("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=de("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=de("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=de("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=de("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=de("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=de("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=de("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=de("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=de("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=de("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=de("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=de("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=de("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=de("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=de("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=de("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=de("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=de("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=de("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ib=Qe`
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
`,Db=b.aside`
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
`,Bb=b.div`
  padding: ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[5]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral[800]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  animation: ${Ib} 0.4s ease both;
`,Mb=b.div`
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
`,Ub=b.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
`,Vb=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Wb=b.nav`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[3]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,Hb=b.div`
  margin-top: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  padding: 0 ${({theme:e})=>e.spacing[2]};
`,Gb=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral[600]};
`,qb=b(aw)`
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
`,Qb=b.span`
  flex: 1;
`;b.span`
  background-color: ${({theme:e})=>e.colors.primary[600]};
  color: #fff;
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  padding: 1px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  line-height: 1.6;
`;const Yb=b.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[3]};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[800]};
`,Kb=b.div`
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
`,Xb=b.div`
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
`,Jb=b.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,Zb=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ek=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[500]};
  text-transform: capitalize;
`,tk=b.div`
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
`,nk=(e="")=>e.split(" ").filter(Boolean).slice(0,2).map(t=>t[0].toUpperCase()).join(""),rk={admin:"Administrador",user:"Usuário",partner:"Parceiro"},ok=[{section:"Principal",items:[{path:"/dashboard",label:"Dashboard",icon:jb},{path:"/clientes",label:"Clientes",icon:Ab},{path:"/vendas",label:"Vendas",icon:Ob}]},{section:"Administração",adminOnly:!0,items:[{path:"/usuarios",label:"Usuários",icon:l0},{path:"/bandeiras",label:"Bandeiras",icon:o0},{path:"/planos",label:"Planos",icon:Ap},{path:"/relatorios",label:"Relatórios",icon:Ap}]},{section:"Conta",items:[{path:"/perfil",label:"Meu Perfil",icon:Eb}]}];function ik({open:e,onClose:t}){const{user:n,isAdmin:r}=Tr();return l.jsxs(l.Fragment,{children:[l.jsx(tk,{$open:e,onClick:t}),l.jsxs(Db,{$open:e,children:[l.jsxs(Bb,{children:[l.jsx(Mb,{children:"BG"}),l.jsx(Ub,{children:l.jsx(Vb,{children:"BG Representações"})})]}),l.jsx(Wb,{children:ok.map(o=>o.adminOnly&&!r?null:l.jsxs("div",{children:[l.jsx(Hb,{children:l.jsx(Gb,{children:o.section})}),o.items.map(({path:i,label:s,icon:a})=>l.jsxs(qb,{to:i,onClick:t,children:[l.jsx(a,{size:17}),l.jsx(Qb,{children:s})]},i))]},o.section))}),l.jsx(Yb,{children:l.jsxs(Kb,{children:[l.jsx(Xb,{children:nk(n==null?void 0:n.name)}),l.jsxs(Jb,{children:[l.jsx(Zb,{children:(n==null?void 0:n.name)??"Usuário"}),l.jsx(ek,{children:rk[n==null?void 0:n.role]??(n==null?void 0:n.role)})]})]})})]})]})}const sk=b.header`
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
`,ak=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,lk=b.button`
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
`,uk=b.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,ck=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,dk=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;

  /* Oculta em telas pequenas para não sobrecarregar */
  @media (max-width: 600px) {
    display: none;
  }
`,fk=b.span`
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
`,pk=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`,hk=b.div`
  width: 1px;
  height: 24px;
  background-color: ${({theme:e})=>e.border.default};
  flex-shrink: 0;

  @media (max-width: 600px) {
    display: none;
  }
`,mk=b.button`
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
`,Ml={"/dashboard":"Dashboard","/clientes":"Clientes","/vendas":"Vendas","/usuarios":"Usuários","/bandeiras":"Bandeiras","/planos":"Planos","/relatorios":"Relatórios","/perfil":"Meu Perfil","/onboarding":"Novo Cliente"},gk={admin:"Administrador",user:"Usuário",partner:"Parceiro"};function yk({onMenuClick:e}){var s;const{user:t,logout:n}=Tr(),r=Jn(),o=(()=>{const a=Ml[r.pathname];if(a)return a;const u=Object.keys(Ml).find(c=>r.pathname.startsWith(c+"/"));return u?Ml[u]:"BG Representações"})(),i=((s=t==null?void 0:t.name)==null?void 0:s.split(" ")[0])??"Usuário";return l.jsxs(sk,{children:[l.jsxs(ak,{children:[l.jsx(lk,{type:"button",onClick:e,"aria-label":"Abrir menu",children:l.jsx(Tb,{size:18})}),l.jsx(uk,{children:o})]}),l.jsxs(ck,{children:[l.jsxs(dk,{children:[l.jsxs(fk,{children:["Olá, ",i]}),l.jsx(pk,{children:gk[t==null?void 0:t.role]??(t==null?void 0:t.role)})]}),l.jsx(hk,{}),l.jsxs(mk,{type:"button",onClick:n,children:[l.jsx(Pb,{size:15}),l.jsx("span",{children:"Sair"})]})]})]})}const xk=b.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.surface.page};
`,vk=b.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; /* evita overflow em flex */
  overflow: hidden;
`,wk=b.main`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[8]};
  background-color: ${({theme:e})=>e.surface.page};

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[4]};
  }
`;function Dp(){const[e,t]=j.useState(!1);return l.jsxs(xk,{children:[l.jsx(ik,{open:e,onClose:()=>t(!1)}),l.jsxs(vk,{children:[l.jsx(yk,{onMenuClick:()=>t(n=>!n)}),l.jsx(wk,{children:l.jsx(Gg,{})})]})]})}var Ui=e=>e.type==="checkbox",fr=e=>e instanceof Date,dt=e=>e==null;const u0=e=>typeof e=="object";var Le=e=>!dt(e)&&!Array.isArray(e)&&u0(e)&&!fr(e),$k=e=>Le(e)&&e.target?Ui(e.target)?e.target.checked:e.target.value:e,Sk=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,bk=(e,t)=>e.has(Sk(t)),kk=e=>{const t=e.constructor&&e.constructor.prototype;return Le(t)&&t.hasOwnProperty("isPrototypeOf")},_d=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function De(e){if(e instanceof Date)return new Date(e);const t=typeof FileList<"u"&&e instanceof FileList;if(_d&&(e instanceof Blob||t))return e;const n=Array.isArray(e);if(!n&&!(Le(e)&&kk(e)))return e;const r=n?[]:Object.create(Object.getPrototypeOf(e));for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=De(e[o]));return r}var Za=e=>/^\w*$/.test(e),Se=e=>e===void 0,Cd=e=>Array.isArray(e)?e.filter(Boolean):[],jd=e=>Cd(e.replace(/["|']|\]/g,"").split(/\.|\[/)),H=(e,t,n)=>{if(!t||!Le(e))return n;const r=(Za(t)?[t]:jd(t)).reduce((o,i)=>dt(o)?o:o[i],e);return Se(r)||r===e?Se(e[t])?n:e[t]:r},en=e=>typeof e=="boolean",Wt=e=>typeof e=="function",ye=(e,t,n)=>{let r=-1;const o=Za(t)?[t]:jd(t),i=o.length,s=i-1;for(;++r<i;){const a=o[r];let u=n;if(r!==s){const c=e[a];u=Le(c)||Array.isArray(c)?c:isNaN(+o[r+1])?{}:[]}if(a==="__proto__"||a==="constructor"||a==="prototype")return;e[a]=u,e=e[a]}};const Bp={BLUR:"blur",FOCUS_OUT:"focusout"},Ht={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},an={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ek=G.createContext(null);Ek.displayName="HookFormControlContext";var _k=(e,t,n,r=!0)=>{const o={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(o,i,{get:()=>{const s=i;return t._proxyFormState[s]!==Ht.all&&(t._proxyFormState[s]=!r||Ht.all),e[s]}});return o};const Ck=typeof window<"u"?G.useLayoutEffect:G.useEffect;var St=e=>typeof e=="string",jk=(e,t,n,r,o)=>St(e)?(r&&t.watch.add(e),H(n,e,o)):Array.isArray(e)?e.map(i=>(r&&t.watch.add(i),H(n,i))):(r&&(t.watchAll=!0),n),pc=e=>dt(e)||!u0(e);function Pn(e,t,n=new WeakSet){if(pc(e)||pc(t))return Object.is(e,t);if(fr(e)&&fr(t))return Object.is(e.getTime(),t.getTime());const r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;if(n.has(e)||n.has(t))return!0;n.add(e),n.add(t);for(const i of r){const s=e[i];if(!o.includes(i))return!1;if(i!=="ref"){const a=t[i];if(fr(s)&&fr(a)||Le(s)&&Le(a)||Array.isArray(s)&&Array.isArray(a)?!Pn(s,a,n):!Object.is(s,a))return!1}}return!0}const Rk=G.createContext(null);Rk.displayName="HookFormContext";var Pk=(e,t,n,r,o)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:o||!0}}:{},ri=e=>Array.isArray(e)?e:[e],Mp=()=>{let e=[];return{get observers(){return e},next:o=>{for(const i of e)i.next&&i.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(i=>i!==o)}}),unsubscribe:()=>{e=[]}}};function c0(e,t){const n={};for(const r in e)if(e.hasOwnProperty(r)){const o=e[r],i=t[r];if(o&&Le(o)&&i){const s=c0(o,i);Le(s)&&(n[r]=s)}else e[r]&&(n[r]=i)}return n}var it=e=>Le(e)&&!Object.keys(e).length,Rd=e=>e.type==="file",va=e=>{if(!_d)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},d0=e=>e.type==="select-multiple",Pd=e=>e.type==="radio",Tk=e=>Pd(e)||Ui(e),Ul=e=>va(e)&&e.isConnected;function zk(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Se(e)?r++:e[t[r++]];return e}function Nk(e){for(const t in e)if(e.hasOwnProperty(t)&&!Se(e[t]))return!1;return!0}function Ne(e,t){const n=Array.isArray(t)?t:Za(t)?[t]:jd(t),r=n.length===1?e:zk(e,n),o=n.length-1,i=n[o];return r&&delete r[i],o!==0&&(Le(r)&&it(r)||Array.isArray(r)&&Nk(r))&&Ne(e,n.slice(0,-1)),e}var Fk=e=>{for(const t in e)if(Wt(e[t]))return!0;return!1};function f0(e){return Array.isArray(e)||Le(e)&&!Fk(e)}function hc(e,t={}){for(const n in e){const r=e[n];f0(r)?(t[n]=Array.isArray(r)?[]:{},hc(r,t[n])):Se(r)||(t[n]=!0)}return t}function Dr(e,t,n){n||(n=hc(t));for(const r in e){const o=e[r];if(f0(o))Se(t)||pc(n[r])?n[r]=hc(o,Array.isArray(o)?[]:{}):Dr(o,dt(t)?{}:t[r],n[r]);else{const i=t[r];n[r]=!Pn(o,i)}}return n}const Up={value:!1,isValid:!1},Vp={value:!0,isValid:!0};var p0=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Se(e[0].attributes.value)?Se(e[0].value)||e[0].value===""?Vp:{value:e[0].value,isValid:!0}:Vp:Up}return Up},h0=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Se(e)?e:t?e===""?NaN:e&&+e:n&&St(e)?new Date(e):r?r(e):e;const Wp={isValid:!1,value:null};var m0=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Wp):Wp;function Hp(e){const t=e.ref;return Rd(t)?t.files:Pd(t)?m0(e.refs).value:d0(t)?[...t.selectedOptions].map(({value:n})=>n):Ui(t)?p0(e.refs).value:h0(Se(t.value)?e.ref.value:t.value,e)}var Ok=(e,t,n,r)=>{const o={};for(const i of e){const s=H(t,i);s&&ye(o,i,s._f)}return{criteriaMode:n,names:[...e],fields:o,shouldUseNativeValidation:r}},wa=e=>e instanceof RegExp,Oo=e=>Se(e)?e:wa(e)?e.source:Le(e)?wa(e.value)?e.value.source:e.value:e,Gp=e=>({isOnSubmit:!e||e===Ht.onSubmit,isOnBlur:e===Ht.onBlur,isOnChange:e===Ht.onChange,isOnAll:e===Ht.all,isOnTouch:e===Ht.onTouched});const qp="AsyncFunction";var Lk=e=>!!e&&!!e.validate&&!!(Wt(e.validate)&&e.validate.constructor.name===qp||Le(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===qp)),Ak=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Qp=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const oi=(e,t,n,r)=>{for(const o of n||Object.keys(e)){const i=H(e,o);if(i){const{_f:s,...a}=i;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],o)&&!r)return!0;if(s.ref&&t(s.ref,s.name)&&!r)return!0;if(oi(a,t))break}else if(Le(a)&&oi(a,t))break}}};function Yp(e,t,n){const r=H(e,n);if(r||Za(n))return{error:r,name:n};const o=n.split(".");for(;o.length;){const i=o.join("."),s=H(t,i),a=H(e,i);if(s&&!Array.isArray(s)&&n!==i)return{name:n};if(a&&a.type)return{name:i,error:a};if(a&&a.root&&a.root.type)return{name:`${i}.root`,error:a.root};o.pop()}return{name:n}}var Ik=(e,t,n,r)=>{n(e);const{name:o,...i}=e;return it(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(s=>t[s]===(!r||Ht.all))},Dk=(e,t,n)=>!e||!t||e===t||ri(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),Bk=(e,t,n,r,o)=>o.isOnAll?!1:!n&&o.isOnTouch?!(t||e):(n?r.isOnBlur:o.isOnBlur)?!e:(n?r.isOnChange:o.isOnChange)?e:!0,Mk=(e,t)=>!Cd(H(e,t)).length&&Ne(e,t),Uk=(e,t,n)=>{const r=ri(H(e,n));return ye(r,"root",t[n]),ye(e,n,r),e};function Kp(e,t,n="validate"){if(St(e)||Array.isArray(e)&&e.every(St)||en(e)&&!e)return{type:n,message:St(e)?e:"",ref:t}}var Or=e=>Le(e)&&!wa(e)?e:{value:e,message:""},Xp=async(e,t,n,r,o,i)=>{const{ref:s,refs:a,required:u,maxLength:c,minLength:d,min:h,max:g,pattern:$,validate:y,name:w,valueAsNumber:x,mount:m}=e._f,f=H(n,w);if(!m||t.has(w))return{};const p=a?a[0]:s,v=D=>{o&&p.reportValidity&&(p.setCustomValidity(en(D)?"":D||""),p.reportValidity())},E={},P=Pd(s),k=Ui(s),_=P||k,L=(x||Rd(s))&&Se(s.value)&&Se(f)||va(s)&&s.value===""||f===""||Array.isArray(f)&&!f.length,A=Pk.bind(null,w,r,E),W=(D,V,X,te=an.maxLength,Z=an.minLength)=>{const ne=D?V:X;E[w]={type:D?te:Z,message:ne,ref:s,...A(D?te:Z,ne)}};if(i?!Array.isArray(f)||!f.length:u&&(!_&&(L||dt(f))||en(f)&&!f||k&&!p0(a).isValid||P&&!m0(a).isValid)){const{value:D,message:V}=St(u)?{value:!!u,message:u}:Or(u);if(D&&(E[w]={type:an.required,message:V,ref:p,...A(an.required,V)},!r))return v(V),E}if(!L&&(!dt(h)||!dt(g))){let D,V;const X=Or(g),te=Or(h);if(!dt(f)&&!isNaN(f)){const Z=s.valueAsNumber||f&&+f;dt(X.value)||(D=Z>X.value),dt(te.value)||(V=Z<te.value)}else{const Z=s.valueAsDate||new Date(f),ne=U=>new Date(new Date().toDateString()+" "+U),N=s.type=="time",z=s.type=="week";St(X.value)&&f&&(D=N?ne(f)>ne(X.value):z?f>X.value:Z>new Date(X.value)),St(te.value)&&f&&(V=N?ne(f)<ne(te.value):z?f<te.value:Z<new Date(te.value))}if((D||V)&&(W(!!D,X.message,te.message,an.max,an.min),!r))return v(E[w].message),E}if((c||d)&&!L&&(St(f)||i&&Array.isArray(f))){const D=Or(c),V=Or(d),X=!dt(D.value)&&f.length>+D.value,te=!dt(V.value)&&f.length<+V.value;if((X||te)&&(W(X,D.message,V.message),!r))return v(E[w].message),E}if($&&!L&&St(f)){const{value:D,message:V}=Or($);if(wa(D)&&!f.match(D)&&(E[w]={type:an.pattern,message:V,ref:s,...A(an.pattern,V)},!r))return v(V),E}if(y){if(Wt(y)){const D=await y(f,n),V=Kp(D,p);if(V&&(E[w]={...V,...A(an.validate,V.message)},!r))return v(V.message),E}else if(Le(y)){let D={};for(const V in y){if(!it(D)&&!r)break;const X=Kp(await y[V](f,n),p,V);X&&(D={...X,...A(V,X.message)},v(X.message),r&&(E[w]=D))}if(!it(D)&&(E[w]={ref:p,...D},!r))return E}}return v(!0),E};const Vk={mode:Ht.onSubmit,reValidateMode:Ht.onChange,shouldFocusError:!0};function Wk(e={}){let t={...Vk,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:Wt(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},o=Le(t.defaultValues)||Le(t.values)?De(t.defaultValues||t.values)||{}:{},i=t.shouldUnregister?{}:De(o),s={action:!1,mount:!1,watch:!1,keepIsValid:!1},a={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={...d};let g={...h};const $={array:Mp(),state:Mp()},y=t.criteriaMode===Ht.all,w=S=>C=>{clearTimeout(c),c=setTimeout(S,C)},x=async S=>{if(!s.keepIsValid&&!t.disabled&&(h.isValid||g.isValid||S)){let C;t.resolver?(C=it((await _()).errors),m()):C=await A(r,!0),C!==n.isValid&&$.state.next({isValid:C})}},m=(S,C)=>{!t.disabled&&(h.isValidating||h.validatingFields||g.isValidating||g.validatingFields)&&((S||Array.from(a.mount)).forEach(T=>{T&&(C?ye(n.validatingFields,T,C):Ne(n.validatingFields,T))}),$.state.next({validatingFields:n.validatingFields,isValidating:!it(n.validatingFields)}))},f=(S,C=[],T,B,I=!0,O=!0)=>{if(B&&T&&!t.disabled){if(s.action=!0,O&&Array.isArray(H(r,S))){const Q=T(H(r,S),B.argA,B.argB);I&&ye(r,S,Q)}if(O&&Array.isArray(H(n.errors,S))){const Q=T(H(n.errors,S),B.argA,B.argB);I&&ye(n.errors,S,Q),Mk(n.errors,S)}if((h.touchedFields||g.touchedFields)&&O&&Array.isArray(H(n.touchedFields,S))){const Q=T(H(n.touchedFields,S),B.argA,B.argB);I&&ye(n.touchedFields,S,Q)}(h.dirtyFields||g.dirtyFields)&&(n.dirtyFields=Dr(o,i)),$.state.next({name:S,isDirty:D(S,C),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ye(i,S,C)},p=(S,C)=>{ye(n.errors,S,C),$.state.next({errors:n.errors})},v=S=>{n.errors=S,$.state.next({errors:n.errors,isValid:!1})},E=(S,C,T,B)=>{const I=H(r,S);if(I){const O=H(i,S,Se(T)?H(o,S):T);Se(O)||B&&B.defaultChecked||C?ye(i,S,C?O:Hp(I._f)):te(S,O),s.mount&&!s.action&&x()}},P=(S,C,T,B,I)=>{let O=!1,Q=!1;const le={name:S};if(!t.disabled){if(!T||B){(h.isDirty||g.isDirty)&&(Q=n.isDirty,n.isDirty=le.isDirty=D(),O=Q!==le.isDirty);const ue=Pn(H(o,S),C);Q=!!H(n.dirtyFields,S),ue?Ne(n.dirtyFields,S):ye(n.dirtyFields,S,!0),le.dirtyFields=n.dirtyFields,O=O||(h.dirtyFields||g.dirtyFields)&&Q!==!ue}if(T){const ue=H(n.touchedFields,S);ue||(ye(n.touchedFields,S,T),le.touchedFields=n.touchedFields,O=O||(h.touchedFields||g.touchedFields)&&ue!==T)}O&&I&&$.state.next(le)}return O?le:{}},k=(S,C,T,B)=>{const I=H(n.errors,S),O=(h.isValid||g.isValid)&&en(C)&&n.isValid!==C;if(t.delayError&&T?(u=w(()=>p(S,T)),u(t.delayError)):(clearTimeout(c),u=null,T?ye(n.errors,S,T):Ne(n.errors,S)),(T?!Pn(I,T):I)||!it(B)||O){const Q={...B,...O&&en(C)?{isValid:C}:{},errors:n.errors,name:S};n={...n,...Q},$.state.next(Q)}},_=async S=>(m(S,!0),await t.resolver(i,t.context,Ok(S||a.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),L=async S=>{const{errors:C}=await _(S);if(m(S),S)for(const T of S){const B=H(C,T);B?ye(n.errors,T,B):Ne(n.errors,T)}else n.errors=C;return C},A=async(S,C,T={valid:!0})=>{for(const B in S){const I=S[B];if(I){const{_f:O,...Q}=I;if(O){const le=a.array.has(O.name),ue=I._f&&Lk(I._f);ue&&h.validatingFields&&m([O.name],!0);const ot=await Xp(I,a.disabled,i,y,t.shouldUseNativeValidation&&!C,le);if(ue&&h.validatingFields&&m([O.name]),ot[O.name]&&(T.valid=!1,C||e.shouldUseNativeValidation))break;!C&&(H(ot,O.name)?le?Uk(n.errors,ot,O.name):ye(n.errors,O.name,ot[O.name]):Ne(n.errors,O.name))}!it(Q)&&await A(Q,C,T)}}return T.valid},W=()=>{for(const S of a.unMount){const C=H(r,S);C&&(C._f.refs?C._f.refs.every(T=>!Ul(T)):!Ul(C._f.ref))&&Xt(S)}a.unMount=new Set},D=(S,C)=>!t.disabled&&(S&&C&&ye(i,S,C),!Pn(Y(),o)),V=(S,C,T)=>jk(S,a,{...s.mount?i:Se(C)?o:St(S)?{[S]:C}:C},T,C),X=S=>Cd(H(s.mount?i:o,S,t.shouldUnregister?H(o,S,[]):[])),te=(S,C,T={})=>{const B=H(r,S);let I=C;if(B){const O=B._f;O&&(!O.disabled&&ye(i,S,h0(C,O)),I=va(O.ref)&&dt(C)?"":C,d0(O.ref)?[...O.ref.options].forEach(Q=>Q.selected=I.includes(Q.value)):O.refs?Ui(O.ref)?O.refs.forEach(Q=>{(!Q.defaultChecked||!Q.disabled)&&(Array.isArray(I)?Q.checked=!!I.find(le=>le===Q.value):Q.checked=I===Q.value||!!I)}):O.refs.forEach(Q=>Q.checked=Q.value===I):Rd(O.ref)?O.ref.value="":(O.ref.value=I,O.ref.type||$.state.next({name:S,values:De(i)})))}(T.shouldDirty||T.shouldTouch)&&P(S,I,T.shouldTouch,T.shouldDirty,!0),T.shouldValidate&&U(S)},Z=(S,C,T)=>{for(const B in C){if(!C.hasOwnProperty(B))return;const I=C[B],O=S+"."+B,Q=H(r,O);(a.array.has(S)||Le(I)||Q&&!Q._f)&&!fr(I)?Z(O,I,T):te(O,I,T)}},ne=(S,C,T={})=>{const B=H(r,S),I=a.array.has(S),O=De(C);ye(i,S,O),I?($.array.next({name:S,values:De(i)}),(h.isDirty||h.dirtyFields||g.isDirty||g.dirtyFields)&&T.shouldDirty&&$.state.next({name:S,dirtyFields:Dr(o,i),isDirty:D(S,O)})):B&&!B._f&&!dt(O)?Z(S,O,T):te(S,O,T),Qp(S,a)?$.state.next({...n,name:S,values:De(i)}):$.state.next({name:s.mount?S:void 0,values:De(i)})},N=async S=>{s.mount=!0;const C=S.target;let T=C.name,B=!0;const I=H(r,T),O=ue=>{B=Number.isNaN(ue)||fr(ue)&&isNaN(ue.getTime())||Pn(ue,H(i,T,ue))},Q=Gp(t.mode),le=Gp(t.reValidateMode);if(I){let ue,ot;const er=C.type?Hp(I._f):$k(S),bn=S.type===Bp.BLUR||S.type===Bp.FOCUS_OUT,C0=!Ak(I._f)&&!t.resolver&&!H(n.errors,T)&&!I._f.deps||Bk(bn,H(n.touchedFields,T),n.isSubmitted,le,Q),tl=Qp(T,a,bn);ye(i,T,er),bn?(!C||!C.readOnly)&&(I._f.onBlur&&I._f.onBlur(S),u&&u(0)):I._f.onChange&&I._f.onChange(S);const nl=P(T,er,bn),j0=!it(nl)||tl;if(!bn&&$.state.next({name:T,type:S.type,values:De(i)}),C0)return(h.isValid||g.isValid)&&(t.mode==="onBlur"?bn&&x():bn||x()),j0&&$.state.next({name:T,...tl?{}:nl});if(!bn&&tl&&$.state.next({...n}),t.resolver){const{errors:Ad}=await _([T]);if(m([T]),O(er),B){const R0=Yp(n.errors,r,T),Id=Yp(Ad,r,R0.name||T);ue=Id.error,T=Id.name,ot=it(Ad)}}else m([T],!0),ue=(await Xp(I,a.disabled,i,y,t.shouldUseNativeValidation))[T],m([T]),O(er),B&&(ue?ot=!1:(h.isValid||g.isValid)&&(ot=await A(r,!0)));B&&(I._f.deps&&(!Array.isArray(I._f.deps)||I._f.deps.length>0)&&U(I._f.deps),k(T,ot,ue,nl))}},z=(S,C)=>{if(H(n.errors,C)&&S.focus)return S.focus(),1},U=async(S,C={})=>{let T,B;const I=ri(S);if(t.resolver){const O=await L(Se(S)?S:I);T=it(O),B=S?!I.some(Q=>H(O,Q)):T}else S?(B=(await Promise.all(I.map(async O=>{const Q=H(r,O);return await A(Q&&Q._f?{[O]:Q}:Q)}))).every(Boolean),!(!B&&!n.isValid)&&x()):B=T=await A(r);return $.state.next({...!St(S)||(h.isValid||g.isValid)&&T!==n.isValid?{}:{name:S},...t.resolver||!S?{isValid:T}:{},errors:n.errors}),C.shouldFocus&&!B&&oi(r,z,S?I:a.mount),B},Y=(S,C)=>{let T={...s.mount?i:o};return C&&(T=c0(C.dirtyFields?n.dirtyFields:n.touchedFields,T)),Se(S)?T:St(S)?H(T,S):S.map(B=>H(T,B))},q=(S,C)=>({invalid:!!H((C||n).errors,S),isDirty:!!H((C||n).dirtyFields,S),error:H((C||n).errors,S),isValidating:!!H(n.validatingFields,S),isTouched:!!H((C||n).touchedFields,S)}),pe=S=>{const C=S?ri(S):void 0;C==null||C.forEach(T=>Ne(n.errors,T)),C?C.forEach(T=>{$.state.next({name:T,errors:n.errors})}):$.state.next({errors:{}})},ae=(S,C,T)=>{const B=(H(r,S,{_f:{}})._f||{}).ref,I=H(n.errors,S)||{},{ref:O,message:Q,type:le,...ue}=I;ye(n.errors,S,{...ue,...C,ref:B}),$.state.next({name:S,errors:n.errors,isValid:!1}),T&&T.shouldFocus&&B&&B.focus&&B.focus()},ve=(S,C)=>Wt(S)?$.state.subscribe({next:T=>"values"in T&&S(V(void 0,C),T)}):V(S,C,!0),we=S=>$.state.subscribe({next:C=>{Dk(S.name,C.name,S.exact)&&Ik(C,S.formState||h,_0,S.reRenderRoot)&&S.callback({values:{...i},...n,...C,defaultValues:o})}}).unsubscribe,Ae=S=>(s.mount=!0,g={...g,...S.formState},we({...S,formState:{...d,...S.formState}})),Xt=(S,C={})=>{for(const T of S?ri(S):a.mount)a.mount.delete(T),a.array.delete(T),C.keepValue||(Ne(r,T),Ne(i,T)),!C.keepError&&Ne(n.errors,T),!C.keepDirty&&Ne(n.dirtyFields,T),!C.keepTouched&&Ne(n.touchedFields,T),!C.keepIsValidating&&Ne(n.validatingFields,T),!t.shouldUnregister&&!C.keepDefaultValue&&Ne(o,T);$.state.next({values:De(i)}),$.state.next({...n,...C.keepDirty?{isDirty:D()}:{}}),!C.keepIsValid&&x()},Sn=({disabled:S,name:C})=>{if(en(S)&&s.mount||S||a.disabled.has(C)){const I=a.disabled.has(C)!==!!S;S?a.disabled.add(C):a.disabled.delete(C),I&&s.mount&&!s.action&&x()}},vt=(S,C={})=>{let T=H(r,S);const B=en(C.disabled)||en(t.disabled);return ye(r,S,{...T||{},_f:{...T&&T._f?T._f:{ref:{name:S}},name:S,mount:!0,...C}}),a.mount.add(S),T?Sn({disabled:en(C.disabled)?C.disabled:t.disabled,name:S}):E(S,!0,C.value),{...B?{disabled:C.disabled||t.disabled}:{},...t.progressive?{required:!!C.required,min:Oo(C.min),max:Oo(C.max),minLength:Oo(C.minLength),maxLength:Oo(C.maxLength),pattern:Oo(C.pattern)}:{},name:S,onChange:N,onBlur:N,ref:I=>{if(I){vt(S,C),T=H(r,S);const O=Se(I.value)&&I.querySelectorAll&&I.querySelectorAll("input,select,textarea")[0]||I,Q=Tk(O),le=T._f.refs||[];if(Q?le.find(ue=>ue===O):O===T._f.ref)return;ye(r,S,{_f:{...T._f,...Q?{refs:[...le.filter(Ul),O,...Array.isArray(H(o,S))?[{}]:[]],ref:{type:O.type,name:S}}:{ref:O}}}),E(S,!1,void 0,O)}else T=H(r,S,{}),T._f&&(T._f.mount=!1),(t.shouldUnregister||C.shouldUnregister)&&!(bk(a.array,S)&&s.action)&&a.unMount.add(S)}}},Zn=()=>t.shouldFocusError&&oi(r,z,a.mount),zr=S=>{en(S)&&($.state.next({disabled:S}),oi(r,(C,T)=>{const B=H(r,T);B&&(C.disabled=B._f.disabled||S,Array.isArray(B._f.refs)&&B._f.refs.forEach(I=>{I.disabled=B._f.disabled||S}))},0,!1))},sn=(S,C)=>async T=>{let B;T&&(T.preventDefault&&T.preventDefault(),T.persist&&T.persist());let I=De(i);if($.state.next({isSubmitting:!0}),t.resolver){const{errors:O,values:Q}=await _();m(),n.errors=O,I=De(Q)}else await A(r);if(a.disabled.size)for(const O of a.disabled)Ne(I,O);if(Ne(n.errors,"root"),it(n.errors)){$.state.next({errors:{}});try{await S(I,T)}catch(O){B=O}}else C&&await C({...n.errors},T),Zn(),setTimeout(Zn);if($.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:it(n.errors)&&!B,submitCount:n.submitCount+1,errors:n.errors}),B)throw B},k0=(S,C={})=>{H(r,S)&&(Se(C.defaultValue)?ne(S,De(H(o,S))):(ne(S,C.defaultValue),ye(o,S,De(C.defaultValue))),C.keepTouched||Ne(n.touchedFields,S),C.keepDirty||(Ne(n.dirtyFields,S),n.isDirty=C.defaultValue?D(S,De(H(o,S))):D()),C.keepError||(Ne(n.errors,S),h.isValid&&x()),$.state.next({...n}))},Fd=(S,C={})=>{const T=S?De(S):o,B=De(T),I=it(S),O=I?o:B;if(C.keepDefaultValues||(o=T),!C.keepValues){if(C.keepDirtyValues){const Q=new Set([...a.mount,...Object.keys(Dr(o,i))]);for(const le of Array.from(Q)){const ue=H(n.dirtyFields,le),ot=H(i,le),er=H(O,le);ue&&!Se(ot)?ye(O,le,ot):!ue&&!Se(er)&&ne(le,er)}}else{if(_d&&Se(S))for(const Q of a.mount){const le=H(r,Q);if(le&&le._f){const ue=Array.isArray(le._f.refs)?le._f.refs[0]:le._f.ref;if(va(ue)){const ot=ue.closest("form");if(ot){ot.reset();break}}}}if(C.keepFieldsRef)for(const Q of a.mount)ne(Q,H(O,Q));else r={}}i=t.shouldUnregister?C.keepDefaultValues?De(o):{}:De(O),$.array.next({values:{...O}}),$.state.next({values:{...O}})}a={mount:C.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},s.mount=!h.isValid||!!C.keepIsValid||!!C.keepDirtyValues||!t.shouldUnregister&&!it(O),s.watch=!!t.shouldUnregister,s.keepIsValid=!!C.keepIsValid,s.action=!1,C.keepErrors||(n.errors={}),$.state.next({submitCount:C.keepSubmitCount?n.submitCount:0,isDirty:I?!1:C.keepDirty?n.isDirty:!!(C.keepDefaultValues&&!Pn(S,o)),isSubmitted:C.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:I?{}:C.keepDirtyValues?C.keepDefaultValues&&i?Dr(o,i):n.dirtyFields:C.keepDefaultValues&&S?Dr(o,S):C.keepDirty?n.dirtyFields:{},touchedFields:C.keepTouched?n.touchedFields:{},errors:C.keepErrors?n.errors:{},isSubmitSuccessful:C.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:o})},Od=(S,C)=>Fd(Wt(S)?S(i):S,{...t.resetOptions,...C}),E0=(S,C={})=>{const T=H(r,S),B=T&&T._f;if(B){const I=B.refs?B.refs[0]:B.ref;I.focus&&setTimeout(()=>{I.focus(),C.shouldSelect&&Wt(I.select)&&I.select()})}},_0=S=>{n={...n,...S}},Ld={control:{register:vt,unregister:Xt,getFieldState:q,handleSubmit:sn,setError:ae,_subscribe:we,_runSchema:_,_updateIsValidating:m,_focusError:Zn,_getWatch:V,_getDirty:D,_setValid:x,_setFieldArray:f,_setDisabledField:Sn,_setErrors:v,_getFieldArray:X,_reset:Fd,_resetDefaultValues:()=>Wt(t.defaultValues)&&t.defaultValues().then(S=>{Od(S,t.resetOptions),$.state.next({isLoading:!1})}),_removeUnmounted:W,_disableForm:zr,_subjects:$,_proxyFormState:h,get _fields(){return r},get _formValues(){return i},get _state(){return s},set _state(S){s=S},get _defaultValues(){return o},get _names(){return a},set _names(S){a=S},get _formState(){return n},get _options(){return t},set _options(S){t={...t,...S}}},subscribe:Ae,trigger:U,register:vt,handleSubmit:sn,watch:ve,setValue:ne,getValues:Y,reset:Od,resetField:k0,clearErrors:pe,unregister:Xt,setError:ae,setFocus:E0,getFieldState:q};return{...Ld,formControl:Ld}}function Td(e={}){const t=G.useRef(void 0),n=G.useRef(void 0),[r,o]=G.useState({isDirty:!1,isValidating:!1,isLoading:Wt(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Wt(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:r},e.defaultValues&&!Wt(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:s,...a}=Wk(e);t.current={...a,formState:r}}const i=t.current.control;return i._options=e,Ck(()=>{const s=i._subscribe({formState:i._proxyFormState,callback:()=>o({...i._formState}),reRenderRoot:!0});return o(a=>({...a,isReady:!0})),i._formState.isReady=!0,s},[i]),G.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),G.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode)},[i,e.mode,e.reValidateMode]),G.useEffect(()=>{e.errors&&(i._setErrors(e.errors),i._focusError())},[i,e.errors]),G.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),G.useEffect(()=>{if(i._proxyFormState.isDirty){const s=i._getDirty();s!==r.isDirty&&i._subjects.state.next({isDirty:s})}},[i,r.isDirty]),G.useEffect(()=>{var s;e.values&&!Pn(e.values,n.current)?(i._reset(e.values,{keepFieldsRef:!0,...i._options.resetOptions}),!((s=i._options.resetOptions)===null||s===void 0)&&s.keepIsValid||i._setValid(),n.current=e.values,o(a=>({...a}))):i._resetDefaultValues()},[i,e.values]),G.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=G.useMemo(()=>_k(r,i),[i,r]),t.current}const Hk=Qe`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Vi=Qe`
  from { opacity: 0; transform: translateX(-28px); }
  to   { opacity: 1; transform: translateX(0); }
`,Gk=Qe`
  from { opacity: 0; transform: translateX(28px); }
  to   { opacity: 1; transform: translateX(0); }
`,qk=Qe`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,Qk=Qe`
  from { opacity: 0; transform: scale(1.02); }
  to   { opacity: 1; transform: scale(1); }
`,Yk=b.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 55fr 45fr;
  overflow: hidden;

  @media (max-width: 900px) {
    display: block;
    min-height: 100vh;
  }
`,Kk=b.section`
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

  animation: ${Vi} 0.6s ease both;

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[6]};
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    &::after { display: none; }
  }
`,Xk=b.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
  }
`,Jk=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[20]};
  animation: ${Vi} 0.55s 0.05s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({theme:e})=>e.spacing[12]};
    justify-content: center;
  }
`,Zk=b.div`
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
`,eE=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary[200]};
  letter-spacing: 0.025em;
`,tE=b.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({theme:e})=>e.spacing[5]};
  max-width: 460px;
  animation: ${Vi} 0.55s 0.12s ease both;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.75rem, 7vw, 2.3rem);
    max-width: 320px;
  }
`,nE=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.neutral[500]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0 0 ${({theme:e})=>e.spacing[10]};
  max-width: 360px;
  animation: ${Vi} 0.55s 0.2s ease both;

  @media (max-width: 900px) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    max-width: 280px;
    margin-bottom: ${({theme:e})=>e.spacing[8]};
  }
`,rE=b.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};
  animation: ${Vi} 0.55s 0.28s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[6]};
  }
`,Vl=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,Wl=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[400]};
  line-height: 1;
`,Hl=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,oE=b.div`
  position: relative;
  z-index: 3;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[700]};
  animation: ${Hk} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`,iE=b.button`
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
    animation: ${qk} 0.55s 0.35s ease both;
    transition:
      transform ${({theme:e})=>e.transitions.base},
      box-shadow ${({theme:e})=>e.transitions.base};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px ${({theme:e})=>e.colors.primary[900]}75;
    }
    &:active { transform: translateY(0); }
  }
`,sE=b.section`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[16]};
  animation: ${Gk} 0.55s 0.1s ease both;

  @media (max-width: 1100px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[10]};
  }

  @media (max-width: 900px) {
    display: none;
  }
`,aE=b.div`
  width: 100%;
  max-width: 360px;
`,lE=b.div`
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
    ${({$open:e})=>e&&Li`
        & > * {
          animation: ${Qk} 0.32s 0.05s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}
  }
`,uE=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing[10]};
  flex-shrink: 0;
`,cE=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,dE=b.div`
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
`,fE=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
`,pE=b.button`
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
`,hE=b.div`
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,mE=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.brand.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
`,gE=b.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,yE=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0;
`,xE=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[8]};
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,Jp=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Zp=b.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,eh=b.div`
  position: relative;
  display: flex;
  align-items: center;
`,th=b.input`
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
`,vE=b.button`
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
`,nh=b.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,wE=b.button`
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
`,$E=b.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: _spin 0.7s linear infinite;

  @keyframes _spin { to { transform: rotate(360deg); } }
`,SE=b.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[100]};
  margin: ${({theme:e})=>e.spacing[8]} 0 ${({theme:e})=>e.spacing[6]};
`,bE=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;function rh({onSubmitSuccess:e}){const{login:t}=Tr(),[n,r]=j.useState(!1),[o,i]=j.useState(!1),{register:s,handleSubmit:a,formState:{errors:u}}=Td({defaultValues:{email:"",password:""}}),c=async({email:d,password:h})=>{i(!0);try{const{mustChangePassword:g}=await t(d,h);e(g)}catch(g){re.error(g.message,{toastId:"login-error"})}finally{i(!1)}};return l.jsxs(l.Fragment,{children:[l.jsxs(hE,{children:[l.jsx(mE,{children:"Área restrita"}),l.jsx(gE,{children:"Bem-vindo de volta"}),l.jsx(yE,{children:"Use as credenciais fornecidas pelo administrador para acessar sua conta."})]}),l.jsxs("form",{onSubmit:a(c),noValidate:!0,children:[l.jsxs(xE,{children:[l.jsxs(Jp,{children:[l.jsx(Zp,{htmlFor:"email",children:"E-mail"}),l.jsx(eh,{children:l.jsx(th,{id:"email",type:"email",placeholder:"seu@email.com",autoComplete:"email",$hasError:!!u.email,disabled:o,...s("email",{required:"O e-mail é obrigatório.",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Informe um e-mail válido."}})})}),u.email&&l.jsxs(nh,{children:[l.jsx(Ln,{size:12}),u.email.message]})]}),l.jsxs(Jp,{children:[l.jsx(Zp,{htmlFor:"password",children:"Senha"}),l.jsxs(eh,{children:[l.jsx(th,{id:"password",type:n?"text":"password",placeholder:"••••••••",autoComplete:"current-password",$hasError:!!u.password,$hasToggle:!0,disabled:o,...s("password",{required:"A senha é obrigatória.",minLength:{value:6,message:"Mínimo 6 caracteres."}})}),l.jsx(vE,{type:"button",onClick:()=>r(d=>!d),"aria-label":n?"Ocultar senha":"Mostrar senha",tabIndex:-1,children:n?l.jsx(n0,{size:16}):l.jsx(r0,{size:16})})]}),u.password&&l.jsxs(nh,{children:[l.jsx(Ln,{size:12}),u.password.message]})]})]}),l.jsx(wE,{type:"submit",disabled:o,$isLoading:o,children:o?l.jsxs(l.Fragment,{children:[l.jsx($E,{}),"Carregando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(s0,{size:17}),"Entrar"]})})]}),l.jsx(SE,{}),l.jsx(bE,{children:"Problemas com o acesso? Fale com o administrador do sistema."})]})}function kE(){const e=Pr(),[t,n]=j.useState(!1);j.useEffect(()=>(document.body.style.overflow=t?"hidden":"",()=>{document.body.style.overflow=""}),[t]),j.useEffect(()=>{const o=i=>{i.key==="Escape"&&n(!1)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[]);const r=o=>{o?(n(!1),setTimeout(()=>e("/alterar-senha",{replace:!0}),180)):e("/dashboard",{replace:!0})};return l.jsxs(Yk,{children:[l.jsxs(Kk,{children:[l.jsxs(Xk,{children:[l.jsxs(Jk,{children:[l.jsx(Zk,{children:"BG"}),l.jsx(eE,{children:"BG Representações"})]}),l.jsxs(tE,{children:["Gestão de ",l.jsx("em",{children:"benefícios"})," com"," ","precisão corporativa."]}),l.jsx(nE,{children:"Plataforma integrada para gerenciamento de clientes, vendas e cartões de vale alimentação — com rastreabilidade completa e auditoria em cada etapa."}),l.jsxs(rE,{children:[l.jsxs(Vl,{children:[l.jsx(Wl,{children:"100%"}),l.jsx(Hl,{children:"Auditado"})]}),l.jsxs(Vl,{children:[l.jsx(Wl,{children:"JWT"}),l.jsx(Hl,{children:"Segurança"})]}),l.jsxs(Vl,{children:[l.jsx(Wl,{children:"3 níveis"}),l.jsx(Hl,{children:"de acesso"})]})]}),l.jsxs(iE,{type:"button",onClick:()=>n(!0),"aria-label":"Abrir formulário de login",children:["Acessar Sistema",l.jsx(e0,{size:17})]})]}),l.jsxs(oE,{children:["© ",new Date().getFullYear()," BG Representações — Uso interno exclusivo."]})]}),l.jsx(sE,{children:l.jsx(aE,{children:l.jsx(rh,{onSubmitSuccess:r})})}),l.jsxs(lE,{$open:t,role:"dialog","aria-modal":"true","aria-label":"Formulário de login",children:[l.jsxs(uE,{children:[l.jsxs(cE,{children:[l.jsx(dE,{children:"BG"}),l.jsx(fE,{children:"BG Representações"})]}),l.jsx(pE,{type:"button",onClick:()=>n(!1),"aria-label":"Fechar formulário",children:l.jsx(Ed,{size:18})})]}),l.jsx(rh,{onSubmitSuccess:r})]})]})}const EE=Qe`
  from { opacity: 0; }
  to   { opacity: 1; }
`,_E=Qe`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,CE=Qe`
  from { opacity: 0; transform: translateX(32px); }
  to   { opacity: 1; transform: translateX(0); }
`,el=Qe`
  from { opacity: 0; transform: translateX(-32px); }
  to   { opacity: 1; transform: translateX(0); }
`;Qe`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.03); }
`;const jE=b.div`
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
`,RE=b.section`
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
`,PE=b.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (max-width: 900px) {
    align-items: center;
  }
`,TE=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[16]};
  animation: ${el} 0.6s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({theme:e})=>e.spacing[10]};
    justify-content: center;
  }
`,zE=b.div`
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
`,NE=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary[200]};
  letter-spacing: 0.02em;
`,FE=b.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({theme:e})=>e.spacing[6]};
  animation: ${el} 0.6s 0.1s ease both;
  max-width: 480px;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.8rem, 7vw, 2.4rem);
    max-width: 340px;
  }
`,OE=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.neutral[400]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0 0 ${({theme:e})=>e.spacing[10]};
  max-width: 380px;
  animation: ${el} 0.6s 0.2s ease both;

  @media (max-width: 900px) {
    max-width: 300px;
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }
`,LE=b.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};
  animation: ${el} 0.6s 0.3s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[6]};
  }

  @media (max-width: 380px) {
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,Gl=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,ql=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[300]};
  line-height: 1;
`,Ql=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[500]};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`,AE=b.div`
  position: relative;
  z-index: 3;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
  animation: ${EE} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`,IE=b.button`
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
  animation: ${_E} 0.6s 0.4s ease both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(180, 90, 20, 0.55);
  }

  @media (max-width: 900px) {
    display: inline-flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,DE=b.section`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[10]};
  animation: ${CE} 0.5s 0.15s ease both;

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
`,BE=b.div`
  width: 100%;
  max-width: 380px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`,ME=b.button`
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
`,UE=b.div`
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,VE=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.brand.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
`,WE=b.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,HE=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,GE=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
`,oh=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,ih=b.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,sh=b.div`
  position: relative;
  display: flex;
  align-items: center;
`,mc=b.input`
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
  ${({$hasToggle:e,theme:t})=>e&&Li`
    padding-right: ${t.spacing[10]};
  `}
`;b.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: ${({theme:e})=>e.brand.primary};
  transition: width ${({theme:e})=>e.transitions.slow};

  ${mc}:focus ~ & {
    width: 100%;
  }
`;const qE=b.button`
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
`,ah=b.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,QE=b.button`
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
`,YE=b.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;

  @keyframes spin { to { transform: rotate(360deg); } }
`,KE=b.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[6]} 0;
`,XE=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,JE=b.div`
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
`,ZE=b.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    width: 40px;
    height: 4px;
    background-color: ${({theme:e})=>e.colors.neutral[300]};
    border-radius: ${({theme:e})=>e.borderRadius.full};
    margin: 0 auto ${({theme:e})=>e.spacing[8]};
  }
`;function e2(){const{login:e}=Tr(),t=Pr(),[n,r]=j.useState(!1),[o,i]=j.useState(!1),[s,a]=j.useState(!1),{register:u,handleSubmit:c,formState:{errors:d}}=Td({defaultValues:{email:"",password:""}}),h=()=>{r(!0),document.body.style.overflow="hidden"},g=()=>{r(!1),document.body.style.overflow=""},$=async({email:y,password:w})=>{a(!0);try{const{mustChangePassword:x}=await e(y,w);document.body.style.overflow="",x?t("/alterar-senha",{replace:!0}):t("/dashboard",{replace:!0})}catch(x){re.error(x.message,{toastId:"login-error"})}finally{a(!1)}};return l.jsxs(jE,{children:[l.jsxs(RE,{children:[l.jsxs(PE,{children:[l.jsxs(TE,{children:[l.jsx(zE,{children:"BG"}),l.jsx(NE,{children:"BG Representações"})]}),l.jsxs(FE,{children:["Gestão de ",l.jsx("em",{children:"benefícios"})," com"," ","precisão corporativa."]}),l.jsx(OE,{children:"Plataforma integrada para gerenciamento de clientes, vendas e cartões de vale alimentação — com rastreabilidade completa e auditoria em cada etapa."}),l.jsxs(LE,{children:[l.jsxs(Gl,{children:[l.jsx(ql,{children:"100%"}),l.jsx(Ql,{children:"Auditado"})]}),l.jsxs(Gl,{children:[l.jsx(ql,{children:"JWT"}),l.jsx(Ql,{children:"Segurança"})]}),l.jsxs(Gl,{children:[l.jsx(ql,{children:"3 níveis"}),l.jsx(Ql,{children:"de acesso"})]})]}),l.jsxs(IE,{type:"button",onClick:h,children:["Acessar o sistema",l.jsx(e0,{size:17})]})]}),l.jsxs(AE,{children:["© ",new Date().getFullYear()," BG Representações — Uso interno exclusivo."]})]}),l.jsx(JE,{$open:n,onClick:g}),l.jsxs(DE,{$open:n,children:[l.jsx(ZE,{}),l.jsx(ME,{type:"button",onClick:g,"aria-label":"Fechar",children:l.jsx(Ed,{size:18})}),l.jsxs(BE,{children:[l.jsxs(UE,{children:[l.jsx(VE,{children:"Área restrita"}),l.jsx(WE,{children:"Bem-vindo de volta"}),l.jsx(HE,{children:"Use as credenciais fornecidas pelo administrador para acessar sua conta."})]}),l.jsxs("form",{onSubmit:c($),noValidate:!0,children:[l.jsxs(GE,{children:[l.jsxs(oh,{children:[l.jsx(ih,{htmlFor:"email",children:"E-mail"}),l.jsx(sh,{children:l.jsx(mc,{id:"email",type:"email",placeholder:"seu@email.com",autoComplete:"email",$hasError:!!d.email,disabled:s,...u("email",{required:"O e-mail é obrigatório.",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Informe um e-mail válido."}})})}),d.email&&l.jsxs(ah,{children:[l.jsx(Ln,{size:12}),d.email.message]})]}),l.jsxs(oh,{children:[l.jsx(ih,{htmlFor:"password",children:"Senha"}),l.jsxs(sh,{children:[l.jsx(mc,{id:"password",type:o?"text":"password",placeholder:"••••••••",autoComplete:"current-password",$hasError:!!d.password,$hasToggle:!0,disabled:s,...u("password",{required:"A senha é obrigatória.",minLength:{value:6,message:"Mínimo 6 caracteres."}})}),l.jsx(qE,{type:"button",onClick:()=>i(y=>!y),"aria-label":o?"Ocultar senha":"Mostrar senha",tabIndex:-1,children:o?l.jsx(n0,{size:16}):l.jsx(r0,{size:16})})]}),d.password&&l.jsxs(ah,{children:[l.jsx(Ln,{size:12}),d.password.message]})]})]}),l.jsx(QE,{type:"submit",disabled:s,$isLoading:s,children:s?l.jsxs(l.Fragment,{children:[l.jsx(YE,{}),"Carregando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(s0,{size:17}),"Entrar"]})})]}),l.jsx(KE,{}),l.jsx(XE,{children:"Problemas com o acesso? Fale com o administrador do sistema."})]})]})]})}const zd=Qe`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,t2=b.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  animation: ${zd} 0.35s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,n2=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,r2=b.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,o2=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,i2=b.button`
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
`,s2=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  animation: ${zd} 0.35s 0.05s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,a2=b.div`
  position: relative;
  flex: 1;
  max-width: 360px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,l2=b.span`
  position: absolute;
  left: ${({theme:e})=>e.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.text.muted};
  display: flex;
  align-items: center;
  pointer-events: none;
`,u2=b.input`
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
`,c2=b.select`
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
`,d2=b.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  animation: ${zd} 0.35s 0.1s ease both;
`,f2=b.table`
  width: 100%;
  border-collapse: collapse;
`,p2=b.thead`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Lo=b.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  text-align: left;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
  white-space: nowrap;
`,h2=b.tbody``,m2=b.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  transition: background-color ${({theme:e})=>e.transitions.fast};
  cursor: pointer;

  &:last-child { border-bottom: none; }

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[50]};
  }
`,gc=b.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.primary};
  vertical-align: middle;
`,Yl=b(gc)`
  color: ${({theme:e})=>e.text.secondary};
`,lh={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},g2=b.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=lh[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=lh[e])==null?void 0:t.color)??"#374151"}};
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
`,y2={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},x2=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[8]};
  gap: ${({theme:e})=>e.spacing[3]};
  text-align: center;
`,v2=b.div`
  color: ${({theme:e})=>e.colors.neutral[300]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,w2=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,$2=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
  max-width: 300px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,S2=b.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  &:last-child { border-bottom: none; }
`,Ao=b.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
`,b2=Qe`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,Io=b.div`
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
  animation: ${b2} 1.4s ease infinite;
`,k2=b.div`
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
`,E2=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
`,_2=b.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,ds=b.button`
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
`,C2=15,j2=({status:e})=>l.jsx(g2,{$status:e,children:y2[e]??e});function R2(){return Array.from({length:5}).map((e,t)=>l.jsxs(S2,{children:[l.jsx(Ao,{children:l.jsx(Io,{$w:"60%"})}),l.jsx(Ao,{children:l.jsx(Io,{$w:"80%"})}),l.jsx(Ao,{children:l.jsx(Io,{$w:"50%"})}),l.jsx(Ao,{children:l.jsx(Io,{$w:"70%"})}),l.jsx(Ao,{children:l.jsx(Io,{$w:"40%"})})]},t))}function P2(){const e=Pr(),{hasRole:t}=Tr(),[n,r]=j.useState([]),[o,i]=j.useState({total:0,totalPages:1,currentPage:1}),[s,a]=j.useState(!0),[u,c]=j.useState(""),[d,h]=j.useState(""),[g,$]=j.useState(1),y=j.useCallback(async()=>{var p,v,E;a(!0);try{const P=new URLSearchParams({page:g,limit:C2});u&&P.set("search",u),d&&P.set("overall_status",d);const{data:k}=await Et.get(`/clients?${P.toString()}`);r(k.data??[]),i({total:((p=k.pagination)==null?void 0:p.total)??0,totalPages:((v=k.pagination)==null?void 0:v.totalPages)??1,currentPage:((E=k.pagination)==null?void 0:E.currentPage)??1})}catch(P){re.error(_r(P,"Erro ao carregar clientes.")),r([])}finally{a(!1)}},[g,u,d]);j.useEffect(()=>{y()},[y]);const w=p=>{c(p.target.value),$(1)},x=p=>{h(p.target.value),$(1)},m=p=>p?new Date(p).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",f=p=>({food:"Alimentação",meal:"Refeição",both:"Ambos"})[p]??p??"—";return l.jsxs(l.Fragment,{children:[l.jsxs(t2,{children:[l.jsxs(n2,{children:[l.jsx(r2,{children:"Clientes"}),l.jsx(o2,{children:o.total>0?`${o.total} cliente${o.total!==1?"s":""} cadastrado${o.total!==1?"s":""}`:"Nenhum cliente cadastrado ainda"})]}),t("admin","user")&&l.jsxs(i2,{type:"button",onClick:()=>e("/onboarding"),children:[l.jsx(Lb,{size:16}),"Novo Cliente"]})]}),l.jsxs(s2,{children:[l.jsxs(a2,{children:[l.jsx(l2,{children:l.jsx(Fb,{size:15})}),l.jsx(u2,{type:"text",placeholder:"Buscar por nome, CPF ou e-mail…",value:u,onChange:w})]}),l.jsxs(c2,{value:d,onChange:x,children:[l.jsx("option",{value:"",children:"Todos os status"}),l.jsx("option",{value:"pending",children:"Pendente"}),l.jsx("option",{value:"analysis",children:"Em análise"}),l.jsx("option",{value:"approved",children:"Aprovado"})]})]}),l.jsxs(d2,{children:[l.jsxs(f2,{children:[l.jsx(p2,{children:l.jsxs("tr",{children:[l.jsx(Lo,{children:"Razão Social"}),l.jsx(Lo,{children:"CPF / CNPJ"}),l.jsx(Lo,{children:"Benefício"}),l.jsx(Lo,{children:"Status"}),l.jsx(Lo,{children:"Cadastro"})]})}),l.jsxs(h2,{children:[s&&l.jsx(R2,{}),!s&&n.map(p=>l.jsxs(m2,{onClick:()=>e(`/clientes/${p.id}`),title:"Ver detalhes",children:[l.jsx(gc,{children:p.corporate_name}),l.jsx(Yl,{children:p.cnpj??"—"}),l.jsx(Yl,{children:f(p.benefit_type)}),l.jsx(gc,{children:l.jsx(j2,{status:p.overall_status})}),l.jsx(Yl,{children:m(p.createdAt)})]},p.id)),!s&&n.length===0&&l.jsx("tr",{children:l.jsx("td",{colSpan:5,children:l.jsxs(x2,{children:[l.jsx(v2,{children:l.jsx(l0,{size:40})}),l.jsx(w2,{children:"Nenhum cliente encontrado"}),l.jsx($2,{children:u||d?"Tente ajustar os filtros para ver mais resultados.":'Clique em "Novo Cliente" para iniciar o cadastro.'})]})})})]})]}),!s&&o.totalPages>1&&l.jsxs(k2,{children:[l.jsxs(E2,{children:["Página ",o.currentPage," de ",o.totalPages," ","· ",o.total," registros"]}),l.jsxs(_2,{children:[l.jsx(ds,{type:"button",onClick:()=>$(p=>Math.max(1,p-1)),disabled:g<=1,"aria-label":"Página anterior",children:l.jsx(bb,{size:15})}),Array.from({length:o.totalPages},(p,v)=>v+1).filter(p=>p===1||p===o.totalPages||Math.abs(p-g)<=2).reduce((p,v,E,P)=>(E>0&&v-P[E-1]>1&&p.push("…"),p.push(v),p),[]).map((p,v)=>p==="…"?l.jsx(ds,{disabled:!0,as:"span",children:"…"},`ellipsis-${v}`):l.jsx(ds,{type:"button",$active:p===g,onClick:()=>$(p),children:p},p)),l.jsx(ds,{type:"button",onClick:()=>$(p=>Math.min(o.totalPages,p+1)),disabled:g>=o.totalPages,"aria-label":"Próxima página",children:l.jsx(kb,{size:15})})]})]})]})]})}const T2=Qe`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,z2=Qe`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,g0=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  animation: ${T2} 0.3s ease both;
`,y0=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,x0=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,N2=b.button`
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
`,v0=b.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,F2=b.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,O2=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  letter-spacing: 0.04em;
`,L2=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`,or=b.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Lr=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Ar=b.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,Ir=b.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,w0=b.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Jr=b.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Te=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  /* Span full width dentro do grid (ex: campo "notes") */
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`,Ie=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,We=b.span`
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
`,uh=b(We)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,ch={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},dh={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},fh=b.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=ch[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=ch[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`,A2=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,I2=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`,D2=b.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,B2=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,M2=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`,U2=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`,V2=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,W2=b.div`
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
`,H2=b.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,G2=b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,q2=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Q2=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,Y2=b.button`
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
`,K2=b.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,fs=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,ps=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,Dt=b.div`
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
  animation: ${z2} 1.4s ease infinite;
`,Kl=b(or)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Xl=b.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[4]} 0;
`,X2=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length!==14?e:t.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5")},J2=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length===11?t.replace(/^(\d{2})(\d{5})(\d{4})$/,"($1) $2-$3"):t.length===10?t.replace(/^(\d{2})(\d{4})(\d{4})$/,"($1) $2-$3"):e},Z2=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",ph=e=>e==null?"—":Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),e_={food:"Vale Alimentação",meal:"Vale Refeição",both:"Alimentação + Refeição"},hh={company_document:"Documento da Empresa",proof_of_address:"Comprovante de Endereço",bank_account_proof:"Comprovante Bancário",card_machine_proof:"Comprovante de Maquininha"},t_={checking:"Conta Corrente",savings:"Conta Poupança"},n_=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function r_(){return l.jsxs(g0,{children:[l.jsx(y0,{children:l.jsxs(x0,{children:[l.jsx(Dt,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),l.jsxs(v0,{children:[l.jsx(Dt,{$w:"220px",$h:"28px"}),l.jsx(Dt,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]})}),l.jsxs(w0,{children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l.jsxs(Kl,{children:[l.jsx(Dt,{$w:"40%",$h:"18px"}),l.jsx(Xl,{}),l.jsx(Jr,{children:Array.from({length:6}).map((e,t)=>l.jsxs(Te,{children:[l.jsx(Dt,{$w:"50%",$h:"11px"}),l.jsx(Dt,{$w:"80%",$h:"16px",style:{marginTop:"4px"}})]},t))})]}),l.jsxs(Kl,{children:[l.jsx(Dt,{$w:"35%",$h:"18px"}),l.jsx(Xl,{}),l.jsx(Jr,{children:Array.from({length:4}).map((e,t)=>l.jsxs(Te,{children:[l.jsx(Dt,{$w:"45%",$h:"11px"}),l.jsx(Dt,{$w:"70%",$h:"16px",style:{marginTop:"4px"}})]},t))})]})]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:l.jsxs(Kl,{children:[l.jsx(Dt,{$w:"55%",$h:"18px"}),l.jsx(Xl,{}),Array.from({length:3}).map((e,t)=>l.jsx(Dt,{$h:"52px",style:{borderRadius:"8px"}},t))]})})]})]})}function o_(){const{id:e}=Mg(),t=Pr(),{isAdmin:n}=Tr(),[r,o]=j.useState(null),[i,s]=j.useState(!0),[a,u]=j.useState(null),c=j.useCallback(async()=>{s(!0);try{const{data:z}=await Et.get(`/clients/${e}`);o(z.data)}catch(z){re.error(_r(z,"Erro ao carregar dados do cliente.")),t("/clientes",{replace:!0})}finally{s(!1)}},[e,t]);j.useEffect(()=>{c()},[c]);const d=async z=>{u(z.id);try{const U=await Et.get(`/documents/${z.id}/download`,{responseType:"blob"}),Y=URL.createObjectURL(U.data),q=document.createElement("a");q.href=Y,q.download=z.original_name??`documento-${z.id}`,document.body.appendChild(q),q.click(),q.remove(),URL.revokeObjectURL(Y)}catch(U){re.error(_r(U,"Erro ao baixar o documento."))}finally{u(null)}};if(i)return l.jsx(r_,{});if(!r)return null;const{corporate_name:h,trade_name:g,cnpj:$,state_registration:y,phone:w,email:x,protocol:m,benefit_type:f,overall_status:p,notes:v,createdAt:E,address_street:P,address_number:k,address_complement:_,address_neighborhood:L,address_city:A,address_state:W,address_zip:D,clientFlags:V=[],documents:X=[],bankAccounts:te=[]}=r,Z=P||A,ne=[P,k,_].filter(Boolean).join(", "),N=[L,A,W].filter(Boolean).join(" — ");return l.jsxs(g0,{children:[l.jsxs(y0,{children:[l.jsxs(x0,{children:[l.jsxs(N2,{type:"button",onClick:()=>t(-1),children:[l.jsx(Zy,{size:15}),"Voltar"]}),l.jsxs(v0,{children:[l.jsx(F2,{children:g||h}),l.jsxs(O2,{children:["Protocolo #",m]})]})]}),l.jsxs(L2,{children:[l.jsxs("button",{onClick:()=>t(`/clientes/${e}/editar`),children:[l.jsx(zb,{size:15})," Editar"]}),l.jsx(fh,{$status:p,children:dh[p]??p})]})]}),l.jsxs(w0,{children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l.jsxs(or,{children:[l.jsxs(Lr,{children:[l.jsx(Ar,{children:l.jsx(t0,{size:18})}),l.jsx(Ir,{children:"Dados da Empresa"})]}),l.jsxs(Jr,{children:[l.jsxs(Te,{children:[l.jsx(Ie,{children:"Razão Social"}),l.jsx(We,{children:h||"—"})]}),l.jsxs(Te,{children:[l.jsx(Ie,{children:"Nome Fantasia"}),l.jsx(We,{children:g||"—"})]}),l.jsxs(Te,{children:[l.jsx(Ie,{children:"CNPJ"}),l.jsx(We,{children:X2($)})]}),l.jsxs(Te,{children:[l.jsx(Ie,{children:"Inscrição Estadual"}),l.jsx(We,{children:y||"—"})]}),l.jsxs(Te,{children:[l.jsx(Ie,{children:"Telefone"}),l.jsx(We,{children:J2(w)})]}),l.jsxs(Te,{children:[l.jsx(Ie,{children:"E-mail"}),l.jsx(We,{children:x||"—"})]}),l.jsxs(Te,{children:[l.jsx(Ie,{children:"Tipo de Benefício"}),l.jsx(We,{children:e_[f]??f??"—"})]}),l.jsxs(Te,{children:[l.jsx(Ie,{children:"Cadastrado em"}),l.jsx(We,{children:Z2(E)})]}),v&&l.jsxs(Te,{$span:!0,children:[l.jsx(Ie,{children:"Observações"}),l.jsx(uh,{children:v})]})]})]}),l.jsxs(or,{children:[l.jsxs(Lr,{children:[l.jsx(Ar,{children:l.jsx(a0,{size:18})}),l.jsx(Ir,{children:"Endereço"})]}),Z?l.jsxs(Jr,{$cols:2,children:[l.jsxs(Te,{$span:!0,children:[l.jsx(Ie,{children:"Logradouro"}),l.jsx(We,{children:ne||"—"})]}),l.jsxs(Te,{children:[l.jsx(Ie,{children:"Bairro / Cidade / UF"}),l.jsx(We,{children:N||"—"})]}),l.jsxs(Te,{children:[l.jsx(Ie,{children:"CEP"}),l.jsx(We,{children:D?D.replace(/^(\d{5})(\d{3})$/,"$1-$2"):"—"})]})]}):l.jsx(fs,{children:l.jsx(ps,{children:"Endereço não informado."})})]}),l.jsxs(or,{children:[l.jsxs(Lr,{children:[l.jsx(Ar,{children:l.jsx(Ip,{size:18})}),l.jsx(Ir,{children:"Documentos"})]}),X.length>0?l.jsx(V2,{children:X.map(z=>l.jsxs(W2,{children:[l.jsx(H2,{children:l.jsx(Ip,{size:16})}),l.jsxs(G2,{children:[l.jsx(q2,{children:z.original_name||hh[z.document_type]||"Documento"}),l.jsxs(Q2,{children:[hh[z.document_type]??z.document_type,z.file_size?` · ${n_(z.file_size)}`:""]})]}),l.jsx(Y2,{type:"button",onClick:()=>d(z),disabled:a===z.id,title:"Baixar documento",children:a===z.id?l.jsx(Rb,{size:14,style:{animation:"spin 1s linear infinite"}}):l.jsx(Cb,{size:14})})]},z.id))}):l.jsx(fs,{children:l.jsx(ps,{children:"Nenhum documento anexado."})})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l.jsxs(or,{children:[l.jsxs(Lr,{children:[l.jsx(Ar,{children:l.jsx(o0,{size:18})}),l.jsx(Ir,{children:"Bandeiras"})]}),V.length>0?l.jsx(A2,{children:V.map(z=>{var U;return l.jsxs(I2,{children:[l.jsxs(D2,{children:[l.jsx(B2,{children:((U=z.flag)==null?void 0:U.name)??`Bandeira #${z.flag_id}`}),l.jsxs(M2,{children:[z.origin," · ",l.jsx(fh,{$status:z.status,style:{fontSize:"10px",padding:"2px 8px"},children:dh[z.status]??z.status})]})]}),z.price&&l.jsx(U2,{children:ph(z.price)})]},z.id)})}):l.jsx(fs,{children:l.jsx(ps,{children:"Nenhuma bandeira vinculada."})})]}),l.jsxs(or,{children:[l.jsxs(Lr,{children:[l.jsx(Ar,{children:l.jsx(i0,{size:18})}),l.jsx(Ir,{children:"Conta Bancária"})]}),te.length>0?te.map(z=>l.jsx(K2,{children:l.jsxs(Jr,{$cols:1,children:[l.jsxs(Te,{children:[l.jsx(Ie,{children:"Banco"}),l.jsxs(We,{children:[z.bank_name,z.bank_code?` (${z.bank_code})`:""]})]}),l.jsxs(Te,{children:[l.jsx(Ie,{children:"Agência"}),l.jsxs(We,{children:[z.agency,z.agency_digit?`-${z.agency_digit}`:""]})]}),l.jsxs(Te,{children:[l.jsx(Ie,{children:"Conta"}),l.jsxs(We,{children:[z.account,"-",z.account_digit]})]}),l.jsxs(Te,{children:[l.jsx(Ie,{children:"Tipo"}),l.jsx(We,{children:t_[z.account_type]??z.account_type})]})]})},z.id)):l.jsx(fs,{children:l.jsx(ps,{children:"Nenhuma conta bancária cadastrada."})})]}),r.plan&&l.jsxs(or,{children:[l.jsxs(Lr,{children:[l.jsx(Ar,{children:l.jsx(_b,{size:18})}),l.jsx(Ir,{children:"Plano"})]}),l.jsxs(Jr,{$cols:1,children:[l.jsxs(Te,{children:[l.jsx(Ie,{children:"Nome do Plano"}),l.jsx(We,{children:r.plan.name})]}),r.plan.description&&l.jsxs(Te,{children:[l.jsx(Ie,{children:"Descrição"}),l.jsx(uh,{children:r.plan.description})]}),l.jsxs(Te,{children:[l.jsx(Ie,{children:"Valor"}),l.jsx(We,{children:ph(r.plan.price)})]})]})]})]})]}),l.jsx("style",{children:`
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}const i_=Qe`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,s_=Qe`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,$0=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  /* Padding extra embaixo para o footer fixo não sobrepor o conteúdo */
  padding-bottom: 88px;
  animation: ${i_} 0.3s ease both;
`,S0=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,a_=b.button`
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
`,b0=b.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,l_=b.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,u_=b.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,As=b.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Jl=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Zl=b.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,eu=b.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,ii=b.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,mh=b.div`
  grid-column: 1 / -1;
`,$e=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ce=b.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,Nd=({theme:e,$hasError:t})=>`
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
`,Ve=b.input`
  ${({theme:e,$hasError:t})=>Nd({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,tu=b.select`
  ${({theme:e,$hasError:t})=>Nd({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
  padding-right: ${({theme:e})=>e.spacing[10]};
`,c_=b.textarea`
  ${({theme:e,$hasError:t})=>Nd({theme:e,$hasError:t})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,hs=b.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,gh=b.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,d_=b.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,f_=b.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,p_=b.div`
  position: fixed;
  bottom: 0;
  /* Alinha com a área de conteúdo (descontando a sidebar de 240px) */
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
    /* No mobile a sidebar some, então o footer ocupa tudo */
    left: 0;
    padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  }
`,h_=b.button`
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

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[100]};
    color: ${({theme:e})=>e.text.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,m_=b.button`
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

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,g_=b.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: _spin 0.7s linear infinite;
  flex-shrink: 0;

  @keyframes _spin { to { transform: rotate(360deg); } }
`,tr=b.div`
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
  animation: ${s_} 1.4s ease infinite;
`,yh=b(As)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,xh=b.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`,y_=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],x_=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],v_=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],vh=(e="")=>{const t=e.replace(/\D/g,"").slice(0,14);return t.length<=2?t:t.length<=5?`${t.slice(0,2)}.${t.slice(2)}`:t.length<=8?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5)}`:t.length<=12?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8)}`:`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8,12)}-${t.slice(12)}`},wh=(e="")=>{const t=e.replace(/\D/g,"").slice(0,11);return t.length<=2?`(${t}`:t.length<=6?`(${t.slice(0,2)}) ${t.slice(2)}`:t.length<=10?`(${t.slice(0,2)}) ${t.slice(2,6)}-${t.slice(6)}`:`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7)}`},$h=(e="")=>{const t=e.replace(/\D/g,"").slice(0,8);return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5)}`},ms=(e="")=>e.replace(/\D/g,"");function w_(){const e=t=>Array.from({length:t}).map((n,r)=>l.jsxs($e,{children:[l.jsx(tr,{$w:"45%",$h:"11px"}),l.jsx(tr,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},r));return l.jsxs($0,{children:[l.jsxs(S0,{children:[l.jsx(tr,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),l.jsxs(b0,{children:[l.jsx(tr,{$w:"200px",$h:"28px"}),l.jsx(tr,{$w:"140px",$h:"14px",style:{marginTop:"4px"}})]})]}),l.jsxs(yh,{children:[l.jsx(tr,{$w:"35%",$h:"20px"}),l.jsx(xh,{}),l.jsx(ii,{children:e(6)})]}),l.jsxs(yh,{children:[l.jsx(tr,{$w:"30%",$h:"20px"}),l.jsx(xh,{}),l.jsx(ii,{children:e(4)})]})]})}function $_(){const{id:e}=Mg(),t=Pr(),[n,r]=j.useState(!0),[o,i]=j.useState(!1),[s,a]=j.useState(""),{register:u,handleSubmit:c,reset:d,setValue:h,formState:{errors:g,isDirty:$}}=Td({defaultValues:{corporate_name:"",trade_name:"",cnpj:"",state_registration:"",phone:"",email:"",benefit_type:"food",notes:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",bank_bank_name:"",bank_bank_code:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}}),y=j.useCallback(async()=>{var x;r(!0);try{const{data:m}=await Et.get(`/clients/${e}`),f=m.data;a(f.trade_name||f.corporate_name||"");const p=(x=f.bankAccounts)==null?void 0:x[0];d({corporate_name:f.corporate_name??"",trade_name:f.trade_name??"",cnpj:vh(f.cnpj??""),state_registration:f.state_registration??"",phone:wh(f.phone??""),email:f.email??"",benefit_type:f.benefit_type??"food",notes:f.notes??"",address_street:f.address_street??"",address_number:f.address_number??"",address_complement:f.address_complement??"",address_neighborhood:f.address_neighborhood??"",address_city:f.address_city??"",address_state:f.address_state??"",address_zip:$h(f.address_zip??""),bank_bank_name:(p==null?void 0:p.bank_name)??"",bank_bank_code:(p==null?void 0:p.bank_code)??"",bank_agency:(p==null?void 0:p.agency)??"",bank_agency_digit:(p==null?void 0:p.agency_digit)??"",bank_account:(p==null?void 0:p.account)??"",bank_account_digit:(p==null?void 0:p.account_digit)??"",bank_account_type:(p==null?void 0:p.account_type)??"checking"})}catch(m){re.error(_r(m,"Erro ao carregar dados do cliente.")),t(`/clientes/${e}`,{replace:!0})}finally{r(!1)}},[e,t,d]);j.useEffect(()=>{y()},[y]);const w=async x=>{i(!0);try{const m={corporate_name:x.corporate_name||void 0,trade_name:x.trade_name||void 0,cnpj:ms(x.cnpj)||void 0,state_registration:x.state_registration||void 0,phone:ms(x.phone)||void 0,email:x.email||void 0,benefit_type:x.benefit_type,notes:x.notes||void 0,address_street:x.address_street||void 0,address_number:x.address_number||void 0,address_complement:x.address_complement||void 0,address_neighborhood:x.address_neighborhood||void 0,address_city:x.address_city||void 0,address_state:x.address_state||void 0,address_zip:ms(x.address_zip)||void 0,...x.bank_bank_name&&x.bank_agency&&x.bank_account?{bankAccount:{bank_name:x.bank_bank_name,bank_code:x.bank_bank_code||void 0,agency:x.bank_agency,agency_digit:x.bank_agency_digit||void 0,account:x.bank_account,account_digit:x.bank_account_digit,account_type:x.bank_account_type}}:{}};Object.keys(m).forEach(f=>m[f]===void 0&&delete m[f]),await Et.patch(`/clients/${e}`,m),re.success("Cliente atualizado com sucesso!",{toastId:"client-updated"}),t(`/clientes/${e}`,{replace:!0})}catch(m){re.error(_r(m,"Erro ao salvar alterações."))}finally{i(!1)}};return n?l.jsx(w_,{}):l.jsxs(l.Fragment,{children:[l.jsxs($0,{children:[l.jsxs(S0,{children:[l.jsxs(a_,{type:"button",onClick:()=>t(`/clientes/${e}`),children:[l.jsx(Zy,{size:15}),"Voltar"]}),l.jsxs(b0,{children:[l.jsx(l_,{children:"Editar Cliente"}),l.jsx(u_,{children:s})]})]}),l.jsxs("form",{id:"edit-client-form",onSubmit:c(w),noValidate:!0,children:[l.jsxs(As,{style:{marginBottom:"24px"},children:[l.jsxs(Jl,{children:[l.jsx(Zl,{children:l.jsx(t0,{size:18})}),l.jsx(eu,{children:"Dados da Empresa"})]}),l.jsxs(ii,{children:[l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"corporate_name",children:"Razão Social *"}),l.jsx(Ve,{id:"corporate_name",type:"text",placeholder:"Razão social completa",$hasError:!!g.corporate_name,disabled:o,...u("corporate_name",{required:"A razão social é obrigatória.",minLength:{value:3,message:"Mínimo 3 caracteres."}})}),g.corporate_name&&l.jsxs(hs,{children:[l.jsx(Ln,{size:11}),g.corporate_name.message]})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"trade_name",children:"Nome Fantasia"}),l.jsx(Ve,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",disabled:o,...u("trade_name")})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"cnpj",children:"CNPJ *"}),l.jsx(Ve,{id:"cnpj",type:"text",placeholder:"00.000.000/0001-00",$hasError:!!g.cnpj,disabled:o,...u("cnpj",{required:"O CNPJ é obrigatório.",validate:x=>ms(x).length===14||"CNPJ deve ter 14 dígitos.",onChange:x=>h("cnpj",vh(x.target.value))})}),g.cnpj&&l.jsxs(hs,{children:[l.jsx(Ln,{size:11}),g.cnpj.message]})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"state_registration",children:"Inscrição Estadual"}),l.jsx(Ve,{id:"state_registration",type:"text",placeholder:"Inscrição estadual (opcional)",disabled:o,...u("state_registration")})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"phone",children:"Telefone"}),l.jsx(Ve,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",disabled:o,...u("phone",{onChange:x=>h("phone",wh(x.target.value))})})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"email",children:"E-mail"}),l.jsx(Ve,{id:"email",type:"email",placeholder:"contato@empresa.com.br",$hasError:!!g.email,disabled:o,...u("email",{pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Informe um e-mail válido."}})}),g.email&&l.jsxs(hs,{children:[l.jsx(Ln,{size:11}),g.email.message]})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),l.jsx(tu,{id:"benefit_type",$hasError:!!g.benefit_type,disabled:o,...u("benefit_type",{required:"Selecione o tipo."}),children:y_.map(x=>l.jsx("option",{value:x.value,children:x.label},x.value))}),g.benefit_type&&l.jsxs(hs,{children:[l.jsx(Ln,{size:11}),g.benefit_type.message]})]}),l.jsx(mh,{children:l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"notes",children:"Observações"}),l.jsx(c_,{id:"notes",placeholder:"Observações internas sobre o cliente…",disabled:o,...u("notes")}),l.jsx(gh,{children:"Visível apenas para a equipe interna."})]})})]})]}),l.jsxs(As,{style:{marginBottom:"24px"},children:[l.jsxs(Jl,{children:[l.jsx(Zl,{children:l.jsx(a0,{size:18})}),l.jsx(eu,{children:"Endereço"})]}),l.jsxs(ii,{children:[l.jsx(mh,{children:l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"address_street",children:"Logradouro"}),l.jsx(Ve,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",disabled:o,...u("address_street")})]})}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"address_number",children:"Número"}),l.jsx(Ve,{id:"address_number",type:"text",placeholder:"Nº",disabled:o,...u("address_number")})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"address_complement",children:"Complemento"}),l.jsx(Ve,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",disabled:o,...u("address_complement")})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"address_neighborhood",children:"Bairro"}),l.jsx(Ve,{id:"address_neighborhood",type:"text",placeholder:"Bairro",disabled:o,...u("address_neighborhood")})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"address_city",children:"Cidade"}),l.jsx(Ve,{id:"address_city",type:"text",placeholder:"Cidade",disabled:o,...u("address_city")})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"address_state",children:"UF"}),l.jsxs(tu,{id:"address_state",disabled:o,...u("address_state"),children:[l.jsx("option",{value:"",children:"Selecione"}),v_.map(x=>l.jsx("option",{value:x,children:x},x))]})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"address_zip",children:"CEP"}),l.jsx(Ve,{id:"address_zip",type:"text",placeholder:"00000-000",disabled:o,...u("address_zip",{onChange:x=>h("address_zip",$h(x.target.value))})})]})]})]}),l.jsxs(As,{style:{marginBottom:"24px"},children:[l.jsxs(Jl,{children:[l.jsx(Zl,{children:l.jsx(i0,{size:18})}),l.jsx(eu,{children:"Conta Bancária"})]}),l.jsxs(d_,{children:[l.jsx(f_,{children:"Dados Bancários Principais"}),l.jsxs(ii,{children:[l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),l.jsx(Ve,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Itaú, Nubank…",disabled:o,...u("bank_bank_name")})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"bank_bank_code",children:"Código do Banco"}),l.jsx(Ve,{id:"bank_bank_code",type:"text",placeholder:"Ex: 237",disabled:o,...u("bank_bank_code")}),l.jsx(gh,{children:"Código COMPE de 3 dígitos (opcional)."})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"bank_agency",children:"Agência *"}),l.jsx(Ve,{id:"bank_agency",type:"text",placeholder:"0000",disabled:o,...u("bank_agency")})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"bank_agency_digit",children:"Dígito da Agência"}),l.jsx(Ve,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,disabled:o,...u("bank_agency_digit")})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"bank_account",children:"Conta *"}),l.jsx(Ve,{id:"bank_account",type:"text",placeholder:"000000",disabled:o,...u("bank_account")})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"bank_account_digit",children:"Dígito da Conta *"}),l.jsx(Ve,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,disabled:o,...u("bank_account_digit")})]}),l.jsxs($e,{children:[l.jsx(Ce,{htmlFor:"bank_account_type",children:"Tipo de Conta"}),l.jsx(tu,{id:"bank_account_type",disabled:o,...u("bank_account_type"),children:x_.map(x=>l.jsx("option",{value:x.value,children:x.label},x.value))})]})]})]})]})]})]}),l.jsxs(p_,{children:[l.jsxs(h_,{type:"button",disabled:o,onClick:()=>t(`/clientes/${e}`),children:[l.jsx(Ed,{size:15}),"Cancelar"]}),l.jsx(m_,{type:"submit",form:"edit-client-form",disabled:o||!$,$isSubmitting:o,title:$?void 0:"Nenhuma alteração detectada",children:o?l.jsxs(l.Fragment,{children:[l.jsx(g_,{}),"Salvando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(Nb,{size:15}),"Salvar Alterações"]})})]})]})}const ln=({title:e})=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center",justifyContent:"center",minHeight:"60vh",color:"#7a6455"},children:[l.jsx("p",{style:{fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Em construção"}),l.jsx("p",{style:{fontSize:"22px",fontWeight:"700",fontFamily:"serif"},children:e})]});function S_(){const t=window.location.hostname.includes("github.io")?rw:nw;return l.jsxs(u$,{theme:xp,children:[l.jsx(T$,{}),l.jsx(t,{children:l.jsxs(db,{children:[l.jsx(k$,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",style:{fontFamily:xp.typography.fontFamily.sans}}),l.jsxs(Qv,{children:[l.jsx(je,{path:"/login",element:l.jsx(kE,{})}),l.jsx(je,{element:l.jsx(Bl,{}),children:l.jsx(je,{path:"/alterar-senha",element:l.jsx(e2,{})})}),l.jsx(je,{element:l.jsx(Bl,{}),children:l.jsxs(je,{element:l.jsx(Dp,{}),children:[l.jsx(je,{path:"/dashboard",element:l.jsx(ln,{title:"Dashboard"})}),l.jsx(je,{path:"/clientes",element:l.jsx(P2,{})}),l.jsx(je,{path:"/clientes/:id",element:l.jsx(o_,{})}),l.jsx(je,{path:"/clientes/:id/editar",element:l.jsx($_,{})}),l.jsx(je,{path:"/onboarding",element:l.jsx(ln,{title:"Novo Cliente"})}),l.jsx(je,{path:"/vendas",element:l.jsx(ln,{title:"Vendas"})}),l.jsx(je,{path:"/vendas/:id",element:l.jsx(ln,{title:"Detalhe da Venda"})}),l.jsx(je,{path:"/perfil",element:l.jsx(ln,{title:"Meu Perfil"})})]})}),l.jsx(je,{element:l.jsx(Bl,{allowedRoles:["admin"]}),children:l.jsxs(je,{element:l.jsx(Dp,{}),children:[l.jsx(je,{path:"/usuarios",element:l.jsx(ln,{title:"Usuários"})}),l.jsx(je,{path:"/bandeiras",element:l.jsx(ln,{title:"Bandeiras"})}),l.jsx(je,{path:"/planos",element:l.jsx(ln,{title:"Planos"})}),l.jsx(je,{path:"/relatorios",element:l.jsx(ln,{title:"Relatórios"})})]})}),l.jsx(je,{path:"/",element:l.jsx(ua,{to:"/dashboard",replace:!0})}),l.jsx(je,{path:"*",element:l.jsx(ua,{to:"/dashboard",replace:!0})})]})]})})]})}nu.createRoot(document.getElementById("root")).render(l.jsx(G.StrictMode,{children:l.jsx(S_,{})}));
