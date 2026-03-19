function L0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function A0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jh={exports:{}},_a={},Rh={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=Symbol.for("react.element"),I0=Symbol.for("react.portal"),D0=Symbol.for("react.fragment"),B0=Symbol.for("react.strict_mode"),M0=Symbol.for("react.profiler"),U0=Symbol.for("react.provider"),V0=Symbol.for("react.context"),W0=Symbol.for("react.forward_ref"),H0=Symbol.for("react.suspense"),G0=Symbol.for("react.memo"),q0=Symbol.for("react.lazy"),Ud=Symbol.iterator;function Q0(e){return e===null||typeof e!="object"?null:(e=Ud&&e[Ud]||e["@@iterator"],typeof e=="function"?e:null)}var Ph={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Th=Object.assign,zh={};function xo(e,t,n){this.props=e,this.context=t,this.refs=zh,this.updater=n||Ph}xo.prototype.isReactComponent={};xo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fh(){}Fh.prototype=xo.prototype;function wc(e,t,n){this.props=e,this.context=t,this.refs=zh,this.updater=n||Ph}var $c=wc.prototype=new Fh;$c.constructor=wc;Th($c,xo.prototype);$c.isPureReactComponent=!0;var Vd=Array.isArray,Nh=Object.prototype.hasOwnProperty,Sc={current:null},Oh={key:!0,ref:!0,__self:!0,__source:!0};function Lh(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Nh.call(t,r)&&!Oh.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Fi,type:e,key:i,ref:s,props:o,_owner:Sc.current}}function Y0(e,t){return{$$typeof:Fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fi}function K0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wd=/\/+/g;function ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K0(""+e.key):t.toString(36)}function Ss(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Fi:case I0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+ll(s,0):r,Vd(o)?(n="",e!=null&&(n=e.replace(Wd,"$&/")+"/"),Ss(o,t,n,"",function(c){return c})):o!=null&&(bc(o)&&(o=Y0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Wd,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Vd(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+ll(i,a);s+=Ss(i,t,n,u,o)}else if(u=Q0(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+ll(i,a++),s+=Ss(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Gi(e,t,n){if(e==null)return e;var r=[],o=0;return Ss(e,r,"","",function(i){return t.call(n,i,o++)}),r}function X0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pt={current:null},bs={transition:null},J0={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:bs,ReactCurrentOwner:Sc};function Ah(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Gi,forEach:function(e,t,n){Gi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Gi(e,function(){t++}),t},toArray:function(e){return Gi(e,function(t){return t})||[]},only:function(e){if(!bc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};oe.Component=xo;oe.Fragment=D0;oe.Profiler=M0;oe.PureComponent=wc;oe.StrictMode=B0;oe.Suspense=H0;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J0;oe.act=Ah;oe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Th({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Sc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Nh.call(t,u)&&!Oh.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Fi,type:e.type,key:o,ref:i,props:r,_owner:s}};oe.createContext=function(e){return e={$$typeof:V0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:U0,_context:e},e.Consumer=e};oe.createElement=Lh;oe.createFactory=function(e){var t=Lh.bind(null,e);return t.type=e,t};oe.createRef=function(){return{current:null}};oe.forwardRef=function(e){return{$$typeof:W0,render:e}};oe.isValidElement=bc;oe.lazy=function(e){return{$$typeof:q0,_payload:{_status:-1,_result:e},_init:X0}};oe.memo=function(e,t){return{$$typeof:G0,type:e,compare:t===void 0?null:t}};oe.startTransition=function(e){var t=bs.transition;bs.transition={};try{e()}finally{bs.transition=t}};oe.unstable_act=Ah;oe.useCallback=function(e,t){return pt.current.useCallback(e,t)};oe.useContext=function(e){return pt.current.useContext(e)};oe.useDebugValue=function(){};oe.useDeferredValue=function(e){return pt.current.useDeferredValue(e)};oe.useEffect=function(e,t){return pt.current.useEffect(e,t)};oe.useId=function(){return pt.current.useId()};oe.useImperativeHandle=function(e,t,n){return pt.current.useImperativeHandle(e,t,n)};oe.useInsertionEffect=function(e,t){return pt.current.useInsertionEffect(e,t)};oe.useLayoutEffect=function(e,t){return pt.current.useLayoutEffect(e,t)};oe.useMemo=function(e,t){return pt.current.useMemo(e,t)};oe.useReducer=function(e,t,n){return pt.current.useReducer(e,t,n)};oe.useRef=function(e){return pt.current.useRef(e)};oe.useState=function(e){return pt.current.useState(e)};oe.useSyncExternalStore=function(e,t,n){return pt.current.useSyncExternalStore(e,t,n)};oe.useTransition=function(){return pt.current.useTransition()};oe.version="18.3.1";Rh.exports=oe;var C=Rh.exports;const Q=A0(C),Z0=L0({__proto__:null,default:Q},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1=C,t1=Symbol.for("react.element"),n1=Symbol.for("react.fragment"),r1=Object.prototype.hasOwnProperty,o1=e1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i1={key:!0,ref:!0,__self:!0,__source:!0};function Ih(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)r1.call(t,r)&&!i1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:t1,type:e,key:i,ref:s,props:o,_owner:o1.current}}_a.Fragment=n1;_a.jsx=Ih;_a.jsxs=Ih;jh.exports=_a;var l=jh.exports,ou={},Dh={exports:{}},Tt={},Bh={exports:{}},Mh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,N){var G=F.length;F.push(N);e:for(;0<G;){var X=G-1>>>1,J=F[X];if(0<o(J,N))F[X]=N,F[G]=J,G=X;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var N=F[0],G=F.pop();if(G!==N){F[0]=G;e:for(var X=0,J=F.length,pe=J>>>1;X<pe;){var le=2*(X+1)-1,ge=F[le],he=le+1,Re=F[he];if(0>o(ge,G))he<J&&0>o(Re,ge)?(F[X]=Re,F[he]=G,X=he):(F[X]=ge,F[le]=G,X=le);else if(he<J&&0>o(Re,G))F[X]=Re,F[he]=G,X=he;else break e}}return N}function o(F,N){var G=F.sortIndex-N.sortIndex;return G!==0?G:F.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],d=1,p=null,y=3,$=!1,g=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(F){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=F)r(c),N.sortIndex=N.expirationTime,t(u,N);else break;N=n(c)}}function v(F){if(w=!1,h(F),!g)if(n(u)!==null)g=!0,Y(k);else{var N=n(c);N!==null&&U(v,N.startTime-F)}}function k(F,N){g=!1,w&&(w=!1,m(_),_=-1),$=!0;var G=y;try{for(h(N),p=n(u);p!==null&&(!(p.expirationTime>N)||F&&!W());){var X=p.callback;if(typeof X=="function"){p.callback=null,y=p.priorityLevel;var J=X(p.expirationTime<=N);N=e.unstable_now(),typeof J=="function"?p.callback=J:p===n(u)&&r(u),h(N)}else r(u);p=n(u)}if(p!==null)var pe=!0;else{var le=n(c);le!==null&&U(v,le.startTime-N),pe=!1}return pe}finally{p=null,y=G,$=!1}}var R=!1,E=null,_=-1,O=5,I=-1;function W(){return!(e.unstable_now()-I<O)}function B(){if(E!==null){var F=e.unstable_now();I=F;var N=!0;try{N=E(!0,F)}finally{N?H():(R=!1,E=null)}}else R=!1}var H;if(typeof f=="function")H=function(){f(B)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,ee=z.port2;z.port1.onmessage=B,H=function(){ee.postMessage(null)}}else H=function(){b(B,0)};function Y(F){E=F,R||(R=!0,H())}function U(F,N){_=b(function(){F(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){g||$||(g=!0,Y(k))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(F){switch(y){case 1:case 2:case 3:var N=3;break;default:N=y}var G=y;y=N;try{return F()}finally{y=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,N){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var G=y;y=F;try{return N()}finally{y=G}},e.unstable_scheduleCallback=function(F,N,G){var X=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?X+G:X):G=X,F){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=G+J,F={id:d++,callback:N,priorityLevel:F,startTime:G,expirationTime:J,sortIndex:-1},G>X?(F.sortIndex=G,t(c,F),n(u)===null&&F===n(c)&&(w?(m(_),_=-1):w=!0,U(v,G-X))):(F.sortIndex=J,t(u,F),g||$||(g=!0,Y(k))),F},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(F){var N=y;return function(){var G=y;y=N;try{return F.apply(this,arguments)}finally{y=G}}}})(Mh);Bh.exports=Mh;var s1=Bh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1=C,Pt=s1;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uh=new Set,ai={};function _r(e,t){ro(e,t),ro(e+"Capture",t)}function ro(e,t){for(ai[e]=t,e=0;e<t.length;e++)Uh.add(t[e])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=Object.prototype.hasOwnProperty,l1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hd={},Gd={};function u1(e){return iu.call(Gd,e)?!0:iu.call(Hd,e)?!1:l1.test(e)?Gd[e]=!0:(Hd[e]=!0,!1)}function c1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function d1(e,t,n,r){if(t===null||typeof t>"u"||c1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var kc=/[\-:]([a-z])/g;function Ec(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(kc,Ec);tt[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(kc,Ec);tt[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(kc,Ec);tt[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function _c(e,t,n,r){var o=tt.hasOwnProperty(t)?tt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(d1(t,n,o,r)&&(n=null),r||o===null?u1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $n=a1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qi=Symbol.for("react.element"),Dr=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Cc=Symbol.for("react.strict_mode"),su=Symbol.for("react.profiler"),Vh=Symbol.for("react.provider"),Wh=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),au=Symbol.for("react.suspense"),lu=Symbol.for("react.suspense_list"),Rc=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),Hh=Symbol.for("react.offscreen"),qd=Symbol.iterator;function ko(e){return e===null||typeof e!="object"?null:(e=qd&&e[qd]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,ul;function Ao(e){if(ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ul=t&&t[1]||""}return`
`+ul+e}var cl=!1;function dl(e,t){if(!e||cl)return"";cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{cl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ao(e):""}function f1(e){switch(e.tag){case 5:return Ao(e.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return e=dl(e.type,!1),e;case 11:return e=dl(e.type.render,!1),e;case 1:return e=dl(e.type,!0),e;default:return""}}function uu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Br:return"Fragment";case Dr:return"Portal";case su:return"Profiler";case Cc:return"StrictMode";case au:return"Suspense";case lu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wh:return(e.displayName||"Context")+".Consumer";case Vh:return(e._context.displayName||"Context")+".Provider";case jc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rc:return t=e.displayName||null,t!==null?t:uu(e.type)||"Memo";case _n:t=e._payload,e=e._init;try{return uu(e(t))}catch{}}return null}function p1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uu(t);case 8:return t===Cc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function h1(e){var t=Gh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qi(e){e._valueTracker||(e._valueTracker=h1(e))}function qh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cu(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qh(e,t){t=t.checked,t!=null&&_c(e,"checked",t,!1)}function du(e,t){Qh(e,t);var n=Gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fu(e,t.type,n):t.hasOwnProperty("defaultValue")&&fu(e,t.type,Gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fu(e,t,n){(t!=="number"||Vs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Io=Array.isArray;function Xr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function pu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(Io(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gn(n)}}function Yh(e,t){var n=Gn(t.value),r=Gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yi,Xh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yi=Yi||document.createElement("div"),Yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function li(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m1=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(e){m1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Go[t]=Go[e]})});function Jh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Go.hasOwnProperty(e)&&Go[e]?(""+t).trim():t+"px"}function Zh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Jh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var g1=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mu(e,t){if(t){if(g1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function gu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yu=null;function Pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xu=null,Jr=null,Zr=null;function Jd(e){if(e=Li(e)){if(typeof xu!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Ta(t),xu(e.stateNode,e.type,t))}}function em(e){Jr?Zr?Zr.push(e):Zr=[e]:Jr=e}function tm(){if(Jr){var e=Jr,t=Zr;if(Zr=Jr=null,Jd(e),t)for(e=0;e<t.length;e++)Jd(t[e])}}function nm(e,t){return e(t)}function rm(){}var fl=!1;function om(e,t,n){if(fl)return e(t,n);fl=!0;try{return nm(e,t,n)}finally{fl=!1,(Jr!==null||Zr!==null)&&(rm(),tm())}}function ui(e,t){var n=e.stateNode;if(n===null)return null;var r=Ta(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var vu=!1;if(yn)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){vu=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{vu=!1}function y1(e,t,n,r,o,i,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var qo=!1,Ws=null,Hs=!1,wu=null,x1={onError:function(e){qo=!0,Ws=e}};function v1(e,t,n,r,o,i,s,a,u){qo=!1,Ws=null,y1.apply(x1,arguments)}function w1(e,t,n,r,o,i,s,a,u){if(v1.apply(this,arguments),qo){if(qo){var c=Ws;qo=!1,Ws=null}else throw Error(L(198));Hs||(Hs=!0,wu=c)}}function Cr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function im(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zd(e){if(Cr(e)!==e)throw Error(L(188))}function $1(e){var t=e.alternate;if(!t){if(t=Cr(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Zd(o),e;if(i===r)return Zd(o),t;i=i.sibling}throw Error(L(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function sm(e){return e=$1(e),e!==null?am(e):null}function am(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=am(e);if(t!==null)return t;e=e.sibling}return null}var lm=Pt.unstable_scheduleCallback,ef=Pt.unstable_cancelCallback,S1=Pt.unstable_shouldYield,b1=Pt.unstable_requestPaint,Ne=Pt.unstable_now,k1=Pt.unstable_getCurrentPriorityLevel,Tc=Pt.unstable_ImmediatePriority,um=Pt.unstable_UserBlockingPriority,Gs=Pt.unstable_NormalPriority,E1=Pt.unstable_LowPriority,cm=Pt.unstable_IdlePriority,Ca=null,rn=null;function _1(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Ca,e,void 0,(e.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:R1,C1=Math.log,j1=Math.LN2;function R1(e){return e>>>=0,e===0?32:31-(C1(e)/j1|0)|0}var Ki=64,Xi=4194304;function Do(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Do(a):(i&=s,i!==0&&(r=Do(i)))}else s=n&~o,s!==0?r=Do(s):i!==0&&(r=Do(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qt(t),o=1<<n,r|=e[n],t&=~o;return r}function P1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Qt(i),a=1<<s,u=o[s];u===-1?(!(a&n)||a&r)&&(o[s]=P1(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function $u(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dm(){var e=Ki;return Ki<<=1,!(Ki&4194240)&&(Ki=64),e}function pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ni(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qt(t),e[t]=n}function z1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Qt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function zc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var fe=0;function fm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pm,Fc,hm,mm,gm,Su=!1,Ji=[],Ln=null,An=null,In=null,ci=new Map,di=new Map,jn=[],F1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tf(e,t){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(t.pointerId)}}function _o(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Li(t),t!==null&&Fc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function N1(e,t,n,r,o){switch(t){case"focusin":return Ln=_o(Ln,e,t,n,r,o),!0;case"dragenter":return An=_o(An,e,t,n,r,o),!0;case"mouseover":return In=_o(In,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ci.set(i,_o(ci.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,di.set(i,_o(di.get(i)||null,e,t,n,r,o)),!0}return!1}function ym(e){var t=ar(e.target);if(t!==null){var n=Cr(t);if(n!==null){if(t=n.tag,t===13){if(t=im(n),t!==null){e.blockedOn=t,gm(e.priority,function(){hm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yu=r,n.target.dispatchEvent(r),yu=null}else return t=Li(n),t!==null&&Fc(t),e.blockedOn=n,!1;t.shift()}return!0}function nf(e,t,n){ks(e)&&n.delete(t)}function O1(){Su=!1,Ln!==null&&ks(Ln)&&(Ln=null),An!==null&&ks(An)&&(An=null),In!==null&&ks(In)&&(In=null),ci.forEach(nf),di.forEach(nf)}function Co(e,t){e.blockedOn===t&&(e.blockedOn=null,Su||(Su=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,O1)))}function fi(e){function t(o){return Co(o,e)}if(0<Ji.length){Co(Ji[0],e);for(var n=1;n<Ji.length;n++){var r=Ji[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ln!==null&&Co(Ln,e),An!==null&&Co(An,e),In!==null&&Co(In,e),ci.forEach(t),di.forEach(t),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)ym(n),n.blockedOn===null&&jn.shift()}var eo=$n.ReactCurrentBatchConfig,Qs=!0;function L1(e,t,n,r){var o=fe,i=eo.transition;eo.transition=null;try{fe=1,Nc(e,t,n,r)}finally{fe=o,eo.transition=i}}function A1(e,t,n,r){var o=fe,i=eo.transition;eo.transition=null;try{fe=4,Nc(e,t,n,r)}finally{fe=o,eo.transition=i}}function Nc(e,t,n,r){if(Qs){var o=bu(e,t,n,r);if(o===null)bl(e,t,r,Ys,n),tf(e,r);else if(N1(o,e,t,n,r))r.stopPropagation();else if(tf(e,r),t&4&&-1<F1.indexOf(e)){for(;o!==null;){var i=Li(o);if(i!==null&&pm(i),i=bu(e,t,n,r),i===null&&bl(e,t,r,Ys,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else bl(e,t,r,null,n)}}var Ys=null;function bu(e,t,n,r){if(Ys=null,e=Pc(r),e=ar(e),e!==null)if(t=Cr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=im(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ys=e,null}function xm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k1()){case Tc:return 1;case um:return 4;case Gs:case E1:return 16;case cm:return 536870912;default:return 16}default:return 16}}var Tn=null,Oc=null,Es=null;function vm(){if(Es)return Es;var e,t=Oc,n=t.length,r,o="value"in Tn?Tn.value:Tn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Es=o.slice(e,1<r?1-r:void 0)}function _s(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function rf(){return!1}function zt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zi:rf,this.isPropagationStopped=rf,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=zt(vo),Oi=je({},vo,{view:0,detail:0}),I1=zt(Oi),hl,ml,jo,ja=je({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jo&&(jo&&e.type==="mousemove"?(hl=e.screenX-jo.screenX,ml=e.screenY-jo.screenY):ml=hl=0,jo=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:ml}}),of=zt(ja),D1=je({},ja,{dataTransfer:0}),B1=zt(D1),M1=je({},Oi,{relatedTarget:0}),gl=zt(M1),U1=je({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),V1=zt(U1),W1=je({},vo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H1=zt(W1),G1=je({},vo,{data:0}),sf=zt(G1),q1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Y1[e])?!!t[e]:!1}function Ac(){return K1}var X1=je({},Oi,{key:function(e){if(e.key){var t=q1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(e){return e.type==="keypress"?_s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J1=zt(X1),Z1=je({},ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),af=zt(Z1),ex=je({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),tx=zt(ex),nx=je({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),rx=zt(nx),ox=je({},ja,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ix=zt(ox),sx=[9,13,27,32],Ic=yn&&"CompositionEvent"in window,Qo=null;yn&&"documentMode"in document&&(Qo=document.documentMode);var ax=yn&&"TextEvent"in window&&!Qo,wm=yn&&(!Ic||Qo&&8<Qo&&11>=Qo),lf=" ",uf=!1;function $m(e,t){switch(e){case"keyup":return sx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mr=!1;function lx(e,t){switch(e){case"compositionend":return Sm(t);case"keypress":return t.which!==32?null:(uf=!0,lf);case"textInput":return e=t.data,e===lf&&uf?null:e;default:return null}}function ux(e,t){if(Mr)return e==="compositionend"||!Ic&&$m(e,t)?(e=vm(),Es=Oc=Tn=null,Mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wm&&t.locale!=="ko"?null:t.data;default:return null}}var cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cx[e.type]:t==="textarea"}function bm(e,t,n,r){em(r),t=Ks(t,"onChange"),0<t.length&&(n=new Lc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yo=null,pi=null;function dx(e){Nm(e,0)}function Ra(e){var t=Wr(e);if(qh(t))return e}function fx(e,t){if(e==="change")return t}var km=!1;if(yn){var yl;if(yn){var xl="oninput"in document;if(!xl){var df=document.createElement("div");df.setAttribute("oninput","return;"),xl=typeof df.oninput=="function"}yl=xl}else yl=!1;km=yl&&(!document.documentMode||9<document.documentMode)}function ff(){Yo&&(Yo.detachEvent("onpropertychange",Em),pi=Yo=null)}function Em(e){if(e.propertyName==="value"&&Ra(pi)){var t=[];bm(t,pi,e,Pc(e)),om(dx,t)}}function px(e,t,n){e==="focusin"?(ff(),Yo=t,pi=n,Yo.attachEvent("onpropertychange",Em)):e==="focusout"&&ff()}function hx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ra(pi)}function mx(e,t){if(e==="click")return Ra(t)}function gx(e,t){if(e==="input"||e==="change")return Ra(t)}function yx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xt=typeof Object.is=="function"?Object.is:yx;function hi(e,t){if(Xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!iu.call(t,o)||!Xt(e[o],t[o]))return!1}return!0}function pf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hf(e,t){var n=pf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pf(n)}}function _m(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_m(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cm(){for(var e=window,t=Vs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vs(e.document)}return t}function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xx(e){var t=Cm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_m(n.ownerDocument.documentElement,n)){if(r!==null&&Dc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=hf(n,i);var s=hf(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vx=yn&&"documentMode"in document&&11>=document.documentMode,Ur=null,ku=null,Ko=null,Eu=!1;function mf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eu||Ur==null||Ur!==Vs(r)||(r=Ur,"selectionStart"in r&&Dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ko&&hi(Ko,r)||(Ko=r,r=Ks(ku,"onSelect"),0<r.length&&(t=new Lc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ur)))}function es(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vr={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionend:es("Transition","TransitionEnd")},vl={},jm={};yn&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function Pa(e){if(vl[e])return vl[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jm)return vl[e]=t[n];return e}var Rm=Pa("animationend"),Pm=Pa("animationiteration"),Tm=Pa("animationstart"),zm=Pa("transitionend"),Fm=new Map,gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,t){Fm.set(e,t),_r(t,[e])}for(var wl=0;wl<gf.length;wl++){var $l=gf[wl],wx=$l.toLowerCase(),$x=$l[0].toUpperCase()+$l.slice(1);Yn(wx,"on"+$x)}Yn(Rm,"onAnimationEnd");Yn(Pm,"onAnimationIteration");Yn(Tm,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(zm,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function yf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,w1(r,t,void 0,e),e.currentTarget=null}function Nm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;yf(o,a,c),i=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;yf(o,a,c),i=u}}}if(Hs)throw e=wu,Hs=!1,wu=null,e}function ye(e,t){var n=t[Pu];n===void 0&&(n=t[Pu]=new Set);var r=e+"__bubble";n.has(r)||(Om(t,e,2,!1),n.add(r))}function Sl(e,t,n){var r=0;t&&(r|=4),Om(n,e,r,t)}var ts="_reactListening"+Math.random().toString(36).slice(2);function mi(e){if(!e[ts]){e[ts]=!0,Uh.forEach(function(n){n!=="selectionchange"&&(Sx.has(n)||Sl(n,!1,e),Sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ts]||(t[ts]=!0,Sl("selectionchange",!1,t))}}function Om(e,t,n,r){switch(xm(t)){case 1:var o=L1;break;case 4:o=A1;break;default:o=Nc}n=o.bind(null,t,n,e),o=void 0,!vu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function bl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;a!==null;){if(s=ar(a),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}a=a.parentNode}}r=r.return}om(function(){var c=i,d=Pc(n),p=[];e:{var y=Fm.get(e);if(y!==void 0){var $=Lc,g=e;switch(e){case"keypress":if(_s(n)===0)break e;case"keydown":case"keyup":$=J1;break;case"focusin":g="focus",$=gl;break;case"focusout":g="blur",$=gl;break;case"beforeblur":case"afterblur":$=gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=B1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=tx;break;case Rm:case Pm:case Tm:$=V1;break;case zm:$=rx;break;case"scroll":$=I1;break;case"wheel":$=ix;break;case"copy":case"cut":case"paste":$=H1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=af}var w=(t&4)!==0,b=!w&&e==="scroll",m=w?y!==null?y+"Capture":null:y;w=[];for(var f=c,h;f!==null;){h=f;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,m!==null&&(v=ui(f,m),v!=null&&w.push(gi(f,v,h)))),b)break;f=f.return}0<w.length&&(y=new $(y,g,null,n,d),p.push({event:y,listeners:w}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",y&&n!==yu&&(g=n.relatedTarget||n.fromElement)&&(ar(g)||g[xn]))break e;if(($||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,$?(g=n.relatedTarget||n.toElement,$=c,g=g?ar(g):null,g!==null&&(b=Cr(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):($=null,g=c),$!==g)){if(w=of,v="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=af,v="onPointerLeave",m="onPointerEnter",f="pointer"),b=$==null?y:Wr($),h=g==null?y:Wr(g),y=new w(v,f+"leave",$,n,d),y.target=b,y.relatedTarget=h,v=null,ar(d)===c&&(w=new w(m,f+"enter",g,n,d),w.target=h,w.relatedTarget=b,v=w),b=v,$&&g)t:{for(w=$,m=g,f=0,h=w;h;h=Tr(h))f++;for(h=0,v=m;v;v=Tr(v))h++;for(;0<f-h;)w=Tr(w),f--;for(;0<h-f;)m=Tr(m),h--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=Tr(w),m=Tr(m)}w=null}else w=null;$!==null&&xf(p,y,$,w,!1),g!==null&&b!==null&&xf(p,b,g,w,!0)}}e:{if(y=c?Wr(c):window,$=y.nodeName&&y.nodeName.toLowerCase(),$==="select"||$==="input"&&y.type==="file")var k=fx;else if(cf(y))if(km)k=gx;else{k=hx;var R=px}else($=y.nodeName)&&$.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(k=mx);if(k&&(k=k(e,c))){bm(p,k,n,d);break e}R&&R(e,y,c),e==="focusout"&&(R=y._wrapperState)&&R.controlled&&y.type==="number"&&fu(y,"number",y.value)}switch(R=c?Wr(c):window,e){case"focusin":(cf(R)||R.contentEditable==="true")&&(Ur=R,ku=c,Ko=null);break;case"focusout":Ko=ku=Ur=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,mf(p,n,d);break;case"selectionchange":if(vx)break;case"keydown":case"keyup":mf(p,n,d)}var E;if(Ic)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Mr?$m(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(wm&&n.locale!=="ko"&&(Mr||_!=="onCompositionStart"?_==="onCompositionEnd"&&Mr&&(E=vm()):(Tn=d,Oc="value"in Tn?Tn.value:Tn.textContent,Mr=!0)),R=Ks(c,_),0<R.length&&(_=new sf(_,e,null,n,d),p.push({event:_,listeners:R}),E?_.data=E:(E=Sm(n),E!==null&&(_.data=E)))),(E=ax?lx(e,n):ux(e,n))&&(c=Ks(c,"onBeforeInput"),0<c.length&&(d=new sf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=E))}Nm(p,t)})}function gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ks(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ui(e,n),i!=null&&r.unshift(gi(e,i,o)),i=ui(e,t),i!=null&&r.push(gi(e,i,o))),e=e.return}return r}function Tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xf(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=ui(n,i),u!=null&&s.unshift(gi(n,u,a))):o||(u=ui(n,i),u!=null&&s.push(gi(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var bx=/\r\n?/g,kx=/\u0000|\uFFFD/g;function vf(e){return(typeof e=="string"?e:""+e).replace(bx,`
`).replace(kx,"")}function ns(e,t,n){if(t=vf(t),vf(e)!==t&&n)throw Error(L(425))}function Xs(){}var _u=null,Cu=null;function ju(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ru=typeof setTimeout=="function"?setTimeout:void 0,Ex=typeof clearTimeout=="function"?clearTimeout:void 0,wf=typeof Promise=="function"?Promise:void 0,_x=typeof queueMicrotask=="function"?queueMicrotask:typeof wf<"u"?function(e){return wf.resolve(null).then(e).catch(Cx)}:Ru;function Cx(e){setTimeout(function(){throw e})}function kl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);fi(t)}function Dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wo=Math.random().toString(36).slice(2),nn="__reactFiber$"+wo,yi="__reactProps$"+wo,xn="__reactContainer$"+wo,Pu="__reactEvents$"+wo,jx="__reactListeners$"+wo,Rx="__reactHandles$"+wo;function ar(e){var t=e[nn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xn]||n[nn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$f(e);e!==null;){if(n=e[nn])return n;e=$f(e)}return t}e=n,n=e.parentNode}return null}function Li(e){return e=e[nn]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Ta(e){return e[yi]||null}var Tu=[],Hr=-1;function Kn(e){return{current:e}}function ve(e){0>Hr||(e.current=Tu[Hr],Tu[Hr]=null,Hr--)}function me(e,t){Hr++,Tu[Hr]=e.current,e.current=t}var qn={},at=Kn(qn),vt=Kn(!1),yr=qn;function oo(e,t){var n=e.type.contextTypes;if(!n)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function wt(e){return e=e.childContextTypes,e!=null}function Js(){ve(vt),ve(at)}function Sf(e,t,n){if(at.current!==qn)throw Error(L(168));me(at,t),me(vt,n)}function Lm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(L(108,p1(e)||"Unknown",o));return je({},n,r)}function Zs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,yr=at.current,me(at,e),me(vt,vt.current),!0}function bf(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=Lm(e,t,yr),r.__reactInternalMemoizedMergedChildContext=e,ve(vt),ve(at),me(at,e)):ve(vt),me(vt,n)}var pn=null,za=!1,El=!1;function Am(e){pn===null?pn=[e]:pn.push(e)}function Px(e){za=!0,Am(e)}function Xn(){if(!El&&pn!==null){El=!0;var e=0,t=fe;try{var n=pn;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pn=null,za=!1}catch(o){throw pn!==null&&(pn=pn.slice(e+1)),lm(Tc,Xn),o}finally{fe=t,El=!1}}return null}var Gr=[],qr=0,ea=null,ta=0,Nt=[],Ot=0,xr=null,hn=1,mn="";function nr(e,t){Gr[qr++]=ta,Gr[qr++]=ea,ea=e,ta=t}function Im(e,t,n){Nt[Ot++]=hn,Nt[Ot++]=mn,Nt[Ot++]=xr,xr=e;var r=hn;e=mn;var o=32-Qt(r)-1;r&=~(1<<o),n+=1;var i=32-Qt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,hn=1<<32-Qt(t)+o|n<<o|r,mn=i+e}else hn=1<<i|n<<o|r,mn=e}function Bc(e){e.return!==null&&(nr(e,1),Im(e,1,0))}function Mc(e){for(;e===ea;)ea=Gr[--qr],Gr[qr]=null,ta=Gr[--qr],Gr[qr]=null;for(;e===xr;)xr=Nt[--Ot],Nt[Ot]=null,mn=Nt[--Ot],Nt[Ot]=null,hn=Nt[--Ot],Nt[Ot]=null}var Rt=null,Ct=null,Se=!1,Ht=null;function Dm(e,t){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Rt=e,Ct=Dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Rt=e,Ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xr!==null?{id:hn,overflow:mn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Rt=e,Ct=null,!0):!1;default:return!1}}function zu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fu(e){if(Se){var t=Ct;if(t){var n=t;if(!kf(e,t)){if(zu(e))throw Error(L(418));t=Dn(n.nextSibling);var r=Rt;t&&kf(e,t)?Dm(r,n):(e.flags=e.flags&-4097|2,Se=!1,Rt=e)}}else{if(zu(e))throw Error(L(418));e.flags=e.flags&-4097|2,Se=!1,Rt=e}}}function Ef(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rt=e}function rs(e){if(e!==Rt)return!1;if(!Se)return Ef(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ju(e.type,e.memoizedProps)),t&&(t=Ct)){if(zu(e))throw Bm(),Error(L(418));for(;t;)Dm(e,t),t=Dn(t.nextSibling)}if(Ef(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ct=Dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ct=null}}else Ct=Rt?Dn(e.stateNode.nextSibling):null;return!0}function Bm(){for(var e=Ct;e;)e=Dn(e.nextSibling)}function io(){Ct=Rt=null,Se=!1}function Uc(e){Ht===null?Ht=[e]:Ht.push(e)}var Tx=$n.ReactCurrentBatchConfig;function Ro(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function os(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _f(e){var t=e._init;return t(e._payload)}function Mm(e){function t(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function o(m,f){return m=Vn(m,f),m.index=0,m.sibling=null,m}function i(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,h,v){return f===null||f.tag!==6?(f=zl(h,m.mode,v),f.return=m,f):(f=o(f,h),f.return=m,f)}function u(m,f,h,v){var k=h.type;return k===Br?d(m,f,h.props.children,v,h.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===_n&&_f(k)===f.type)?(v=o(f,h.props),v.ref=Ro(m,f,h),v.return=m,v):(v=Fs(h.type,h.key,h.props,null,m.mode,v),v.ref=Ro(m,f,h),v.return=m,v)}function c(m,f,h,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Fl(h,m.mode,v),f.return=m,f):(f=o(f,h.children||[]),f.return=m,f)}function d(m,f,h,v,k){return f===null||f.tag!==7?(f=hr(h,m.mode,v,k),f.return=m,f):(f=o(f,h),f.return=m,f)}function p(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=zl(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case qi:return h=Fs(f.type,f.key,f.props,null,m.mode,h),h.ref=Ro(m,null,f),h.return=m,h;case Dr:return f=Fl(f,m.mode,h),f.return=m,f;case _n:var v=f._init;return p(m,v(f._payload),h)}if(Io(f)||ko(f))return f=hr(f,m.mode,h,null),f.return=m,f;os(m,f)}return null}function y(m,f,h,v){var k=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:a(m,f,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case qi:return h.key===k?u(m,f,h,v):null;case Dr:return h.key===k?c(m,f,h,v):null;case _n:return k=h._init,y(m,f,k(h._payload),v)}if(Io(h)||ko(h))return k!==null?null:d(m,f,h,v,null);os(m,h)}return null}function $(m,f,h,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(h)||null,a(f,m,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qi:return m=m.get(v.key===null?h:v.key)||null,u(f,m,v,k);case Dr:return m=m.get(v.key===null?h:v.key)||null,c(f,m,v,k);case _n:var R=v._init;return $(m,f,h,R(v._payload),k)}if(Io(v)||ko(v))return m=m.get(h)||null,d(f,m,v,k,null);os(f,v)}return null}function g(m,f,h,v){for(var k=null,R=null,E=f,_=f=0,O=null;E!==null&&_<h.length;_++){E.index>_?(O=E,E=null):O=E.sibling;var I=y(m,E,h[_],v);if(I===null){E===null&&(E=O);break}e&&E&&I.alternate===null&&t(m,E),f=i(I,f,_),R===null?k=I:R.sibling=I,R=I,E=O}if(_===h.length)return n(m,E),Se&&nr(m,_),k;if(E===null){for(;_<h.length;_++)E=p(m,h[_],v),E!==null&&(f=i(E,f,_),R===null?k=E:R.sibling=E,R=E);return Se&&nr(m,_),k}for(E=r(m,E);_<h.length;_++)O=$(E,m,_,h[_],v),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?_:O.key),f=i(O,f,_),R===null?k=O:R.sibling=O,R=O);return e&&E.forEach(function(W){return t(m,W)}),Se&&nr(m,_),k}function w(m,f,h,v){var k=ko(h);if(typeof k!="function")throw Error(L(150));if(h=k.call(h),h==null)throw Error(L(151));for(var R=k=null,E=f,_=f=0,O=null,I=h.next();E!==null&&!I.done;_++,I=h.next()){E.index>_?(O=E,E=null):O=E.sibling;var W=y(m,E,I.value,v);if(W===null){E===null&&(E=O);break}e&&E&&W.alternate===null&&t(m,E),f=i(W,f,_),R===null?k=W:R.sibling=W,R=W,E=O}if(I.done)return n(m,E),Se&&nr(m,_),k;if(E===null){for(;!I.done;_++,I=h.next())I=p(m,I.value,v),I!==null&&(f=i(I,f,_),R===null?k=I:R.sibling=I,R=I);return Se&&nr(m,_),k}for(E=r(m,E);!I.done;_++,I=h.next())I=$(E,m,_,I.value,v),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?_:I.key),f=i(I,f,_),R===null?k=I:R.sibling=I,R=I);return e&&E.forEach(function(B){return t(m,B)}),Se&&nr(m,_),k}function b(m,f,h,v){if(typeof h=="object"&&h!==null&&h.type===Br&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case qi:e:{for(var k=h.key,R=f;R!==null;){if(R.key===k){if(k=h.type,k===Br){if(R.tag===7){n(m,R.sibling),f=o(R,h.props.children),f.return=m,m=f;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===_n&&_f(k)===R.type){n(m,R.sibling),f=o(R,h.props),f.ref=Ro(m,R,h),f.return=m,m=f;break e}n(m,R);break}else t(m,R);R=R.sibling}h.type===Br?(f=hr(h.props.children,m.mode,v,h.key),f.return=m,m=f):(v=Fs(h.type,h.key,h.props,null,m.mode,v),v.ref=Ro(m,f,h),v.return=m,m=v)}return s(m);case Dr:e:{for(R=h.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(m,f.sibling),f=o(f,h.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Fl(h,m.mode,v),f.return=m,m=f}return s(m);case _n:return R=h._init,b(m,f,R(h._payload),v)}if(Io(h))return g(m,f,h,v);if(ko(h))return w(m,f,h,v);os(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(m,f.sibling),f=o(f,h),f.return=m,m=f):(n(m,f),f=zl(h,m.mode,v),f.return=m,m=f),s(m)):n(m,f)}return b}var so=Mm(!0),Um=Mm(!1),na=Kn(null),ra=null,Qr=null,Vc=null;function Wc(){Vc=Qr=ra=null}function Hc(e){var t=na.current;ve(na),e._currentValue=t}function Nu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function to(e,t){ra=e,Vc=Qr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xt=!0),e.firstContext=null)}function It(e){var t=e._currentValue;if(Vc!==e)if(e={context:e,memoizedValue:t,next:null},Qr===null){if(ra===null)throw Error(L(308));Qr=e,ra.dependencies={lanes:0,firstContext:e}}else Qr=Qr.next=e;return t}var lr=null;function Gc(e){lr===null?lr=[e]:lr.push(e)}function Vm(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Gc(t)):(n.next=o.next,o.next=n),t.interleaved=n,vn(e,r)}function vn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Cn=!1;function qc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,vn(e,n)}return o=r.interleaved,o===null?(t.next=t,Gc(r)):(t.next=o.next,o.next=t),r.interleaved=t,vn(e,n)}function Cs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zc(e,n)}}function Cf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oa(e,t,n,r){var o=e.updateQueue;Cn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;s=0,d=c=u=null,a=i;do{var y=a.lane,$=a.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:$,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,w=a;switch(y=t,$=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){p=g.call($,p,y);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,y=typeof g=="function"?g.call($,p,y):g,y==null)break e;p=je({},p,y);break e;case 2:Cn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,y=o.effects,y===null?o.effects=[a]:y.push(a))}else $={eventTime:$,lane:y,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=$,u=p):d=d.next=$,s|=y;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;y=a,a=y.next,y.next=null,o.lastBaseUpdate=y,o.shared.pending=null}}while(!0);if(d===null&&(u=p),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);wr|=s,e.lanes=s,e.memoizedState=p}}function jf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(L(191,o));o.call(r)}}}var Ai={},on=Kn(Ai),xi=Kn(Ai),vi=Kn(Ai);function ur(e){if(e===Ai)throw Error(L(174));return e}function Qc(e,t){switch(me(vi,t),me(xi,e),me(on,Ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hu(t,e)}ve(on),me(on,t)}function ao(){ve(on),ve(xi),ve(vi)}function Hm(e){ur(vi.current);var t=ur(on.current),n=hu(t,e.type);t!==n&&(me(xi,e),me(on,n))}function Yc(e){xi.current===e&&(ve(on),ve(xi))}var Ee=Kn(0);function ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _l=[];function Kc(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var js=$n.ReactCurrentDispatcher,Cl=$n.ReactCurrentBatchConfig,vr=0,_e=null,Be=null,We=null,sa=!1,Xo=!1,wi=0,zx=0;function nt(){throw Error(L(321))}function Xc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xt(e[n],t[n]))return!1;return!0}function Jc(e,t,n,r,o,i){if(vr=i,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,js.current=e===null||e.memoizedState===null?Lx:Ax,e=n(r,o),Xo){i=0;do{if(Xo=!1,wi=0,25<=i)throw Error(L(301));i+=1,We=Be=null,t.updateQueue=null,js.current=Ix,e=n(r,o)}while(Xo)}if(js.current=aa,t=Be!==null&&Be.next!==null,vr=0,We=Be=_e=null,sa=!1,t)throw Error(L(300));return e}function Zc(){var e=wi!==0;return wi=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?_e.memoizedState=We=e:We=We.next=e,We}function Dt(){if(Be===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=We===null?_e.memoizedState:We.next;if(t!==null)We=t,Be=e;else{if(e===null)throw Error(L(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},We===null?_e.memoizedState=We=e:We=We.next=e}return We}function $i(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=Dt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=Be,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,u=null,c=i;do{var d=c.lane;if((vr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,s=r):u=u.next=p,_e.lanes|=d,wr|=d}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=a,Xt(r,t.memoizedState)||(xt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,_e.lanes|=i,wr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Rl(e){var t=Dt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);Xt(i,t.memoizedState)||(xt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Gm(){}function qm(e,t){var n=_e,r=Dt(),o=t(),i=!Xt(r.memoizedState,o);if(i&&(r.memoizedState=o,xt=!0),r=r.queue,ed(Km.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Si(9,Ym.bind(null,n,r,o,t),void 0,null),Ge===null)throw Error(L(349));vr&30||Qm(n,t,o)}return o}function Qm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ym(e,t,n,r){t.value=n,t.getSnapshot=r,Xm(t)&&Jm(e)}function Km(e,t,n){return n(function(){Xm(t)&&Jm(e)})}function Xm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xt(e,n)}catch{return!0}}function Jm(e){var t=vn(e,1);t!==null&&Yt(t,e,1,-1)}function Rf(e){var t=en();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},t.queue=e,e=e.dispatch=Ox.bind(null,_e,e),[t.memoizedState,e]}function Si(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zm(){return Dt().memoizedState}function Rs(e,t,n,r){var o=en();_e.flags|=e,o.memoizedState=Si(1|t,n,void 0,r===void 0?null:r)}function Fa(e,t,n,r){var o=Dt();r=r===void 0?null:r;var i=void 0;if(Be!==null){var s=Be.memoizedState;if(i=s.destroy,r!==null&&Xc(r,s.deps)){o.memoizedState=Si(t,n,i,r);return}}_e.flags|=e,o.memoizedState=Si(1|t,n,i,r)}function Pf(e,t){return Rs(8390656,8,e,t)}function ed(e,t){return Fa(2048,8,e,t)}function eg(e,t){return Fa(4,2,e,t)}function tg(e,t){return Fa(4,4,e,t)}function ng(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rg(e,t,n){return n=n!=null?n.concat([e]):null,Fa(4,4,ng.bind(null,t,e),n)}function td(){}function og(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ig(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sg(e,t,n){return vr&21?(Xt(n,t)||(n=dm(),_e.lanes|=n,wr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=n)}function Fx(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=Cl.transition;Cl.transition={};try{e(!1),t()}finally{fe=n,Cl.transition=r}}function ag(){return Dt().memoizedState}function Nx(e,t,n){var r=Un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lg(e))ug(t,n);else if(n=Vm(e,t,n,r),n!==null){var o=ft();Yt(n,e,r,o),cg(n,t,r)}}function Ox(e,t,n){var r=Un(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lg(e))ug(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,Xt(a,s)){var u=t.interleaved;u===null?(o.next=o,Gc(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Vm(e,t,o,r),n!==null&&(o=ft(),Yt(n,e,r,o),cg(n,t,r))}}function lg(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function ug(e,t){Xo=sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zc(e,n)}}var aa={readContext:It,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},Lx={readContext:It,useCallback:function(e,t){return en().memoizedState=[e,t===void 0?null:t],e},useContext:It,useEffect:Pf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Rs(4194308,4,ng.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rs(4,2,e,t)},useMemo:function(e,t){var n=en();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=en();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nx.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=en();return e={current:e},t.memoizedState=e},useState:Rf,useDebugValue:td,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=Rf(!1),t=e[0];return e=Fx.bind(null,e[1]),en().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,o=en();if(Se){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Ge===null)throw Error(L(349));vr&30||Qm(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Pf(Km.bind(null,r,i,e),[e]),r.flags|=2048,Si(9,Ym.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=en(),t=Ge.identifierPrefix;if(Se){var n=mn,r=hn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ax={readContext:It,useCallback:og,useContext:It,useEffect:ed,useImperativeHandle:rg,useInsertionEffect:eg,useLayoutEffect:tg,useMemo:ig,useReducer:jl,useRef:Zm,useState:function(){return jl($i)},useDebugValue:td,useDeferredValue:function(e){var t=Dt();return sg(t,Be.memoizedState,e)},useTransition:function(){var e=jl($i)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Gm,useSyncExternalStore:qm,useId:ag,unstable_isNewReconciler:!1},Ix={readContext:It,useCallback:og,useContext:It,useEffect:ed,useImperativeHandle:rg,useInsertionEffect:eg,useLayoutEffect:tg,useMemo:ig,useReducer:Rl,useRef:Zm,useState:function(){return Rl($i)},useDebugValue:td,useDeferredValue:function(e){var t=Dt();return Be===null?t.memoizedState=e:sg(t,Be.memoizedState,e)},useTransition:function(){var e=Rl($i)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Gm,useSyncExternalStore:qm,useId:ag,unstable_isNewReconciler:!1};function Ut(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ou(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Na={isMounted:function(e){return(e=e._reactInternals)?Cr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),o=Un(e),i=gn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Bn(e,i,o),t!==null&&(Yt(t,e,o,r),Cs(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),o=Un(e),i=gn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Bn(e,i,o),t!==null&&(Yt(t,e,o,r),Cs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=Un(e),o=gn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Bn(e,o,r),t!==null&&(Yt(t,e,r,n),Cs(t,e,r))}};function Tf(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!hi(n,r)||!hi(o,i):!0}function dg(e,t,n){var r=!1,o=qn,i=t.contextType;return typeof i=="object"&&i!==null?i=It(i):(o=wt(t)?yr:at.current,r=t.contextTypes,i=(r=r!=null)?oo(e,o):qn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Na,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function zf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Na.enqueueReplaceState(t,t.state,null)}function Lu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},qc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=It(i):(i=wt(t)?yr:at.current,o.context=oo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ou(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Na.enqueueReplaceState(o,o.state,null),oa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function lo(e,t){try{var n="",r=t;do n+=f1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Au(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dx=typeof WeakMap=="function"?WeakMap:Map;function fg(e,t,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ua||(ua=!0,qu=r),Au(e,t)},n}function pg(e,t,n){n=gn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Au(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Au(e,t),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ff(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dx;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Zx.bind(null,e,t,n),t.then(e,e))}function Nf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Of(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gn(-1,1),t.tag=2,Bn(n,t,1))),n.lanes|=1),e)}var Bx=$n.ReactCurrentOwner,xt=!1;function ct(e,t,n,r){t.child=e===null?Um(t,null,n,r):so(t,e.child,n,r)}function Lf(e,t,n,r,o){n=n.render;var i=t.ref;return to(t,o),r=Jc(e,t,n,r,i,o),n=Zc(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wn(e,t,o)):(Se&&n&&Bc(t),t.flags|=1,ct(e,t,r,o),t.child)}function Af(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ud(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hg(e,t,i,r,o)):(e=Fs(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(s,r)&&e.ref===t.ref)return wn(e,t,o)}return t.flags|=1,e=Vn(i,r),e.ref=t.ref,e.return=t,t.child=e}function hg(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(hi(i,r)&&e.ref===t.ref)if(xt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(xt=!0);else return t.lanes=e.lanes,wn(e,t,o)}return Iu(e,t,n,r,o)}function mg(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Kr,Et),Et|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(Kr,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,me(Kr,Et),Et|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,me(Kr,Et),Et|=r;return ct(e,t,o,n),t.child}function gg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Iu(e,t,n,r,o){var i=wt(n)?yr:at.current;return i=oo(t,i),to(t,o),n=Jc(e,t,n,r,i,o),r=Zc(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wn(e,t,o)):(Se&&r&&Bc(t),t.flags|=1,ct(e,t,n,o),t.child)}function If(e,t,n,r,o){if(wt(n)){var i=!0;Zs(t)}else i=!1;if(to(t,o),t.stateNode===null)Ps(e,t),dg(t,n,r),Lu(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=It(c):(c=wt(n)?yr:at.current,c=oo(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&zf(t,s,r,c),Cn=!1;var y=t.memoizedState;s.state=y,oa(t,r,s,o),u=t.memoizedState,a!==r||y!==u||vt.current||Cn?(typeof d=="function"&&(Ou(t,n,d,r),u=t.memoizedState),(a=Cn||Tf(t,n,a,r,y,u,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Wm(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ut(t.type,a),s.props=c,p=t.pendingProps,y=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=It(u):(u=wt(n)?yr:at.current,u=oo(t,u));var $=n.getDerivedStateFromProps;(d=typeof $=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||y!==u)&&zf(t,s,r,u),Cn=!1,y=t.memoizedState,s.state=y,oa(t,r,s,o);var g=t.memoizedState;a!==p||y!==g||vt.current||Cn?(typeof $=="function"&&(Ou(t,n,$,r),g=t.memoizedState),(c=Cn||Tf(t,n,c,r,y,g,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Du(e,t,n,r,i,o)}function Du(e,t,n,r,o,i){gg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&bf(t,n,!1),wn(e,t,i);r=t.stateNode,Bx.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=so(t,e.child,null,i),t.child=so(t,null,a,i)):ct(e,t,a,i),t.memoizedState=r.state,o&&bf(t,n,!0),t.child}function yg(e){var t=e.stateNode;t.pendingContext?Sf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sf(e,t.context,!1),Qc(e,t.containerInfo)}function Df(e,t,n,r,o){return io(),Uc(o),t.flags|=256,ct(e,t,n,r),t.child}var Bu={dehydrated:null,treeContext:null,retryLane:0};function Mu(e){return{baseLanes:e,cachePool:null,transitions:null}}function xg(e,t,n){var r=t.pendingProps,o=Ee.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),me(Ee,o&1),e===null)return Fu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Aa(s,r,0,null),e=hr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Mu(n),t.memoizedState=Bu,e):nd(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Mx(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Vn(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Vn(a,i):(i=hr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Mu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Bu,r}return i=e.child,e=i.sibling,r=Vn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nd(e,t){return t=Aa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function is(e,t,n,r){return r!==null&&Uc(r),so(t,e.child,null,n),e=nd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mx(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(L(422))),is(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Aa({mode:"visible",children:r.children},o,0,null),i=hr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&so(t,e.child,null,s),t.child.memoizedState=Mu(s),t.memoizedState=Bu,i);if(!(t.mode&1))return is(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(L(419)),r=Pl(i,r,void 0),is(e,t,s,r)}if(a=(s&e.childLanes)!==0,xt||a){if(r=Ge,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,vn(e,o),Yt(r,e,o,-1))}return ld(),r=Pl(Error(L(421))),is(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ev.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ct=Dn(o.nextSibling),Rt=t,Se=!0,Ht=null,e!==null&&(Nt[Ot++]=hn,Nt[Ot++]=mn,Nt[Ot++]=xr,hn=e.id,mn=e.overflow,xr=t),t=nd(t,r.children),t.flags|=4096,t)}function Bf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nu(e.return,t,n)}function Tl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function vg(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ct(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bf(e,n,t);else if(e.tag===19)Bf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ia(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Tl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ia(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Tl(t,!0,n,null,i);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ps(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ux(e,t,n){switch(t.tag){case 3:yg(t),io();break;case 5:Hm(t);break;case 1:wt(t.type)&&Zs(t);break;case 4:Qc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;me(na,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?xg(e,t,n):(me(Ee,Ee.current&1),e=wn(e,t,n),e!==null?e.sibling:null);me(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vg(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),me(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,mg(e,t,n)}return wn(e,t,n)}var wg,Uu,$g,Sg;wg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uu=function(){};$g=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ur(on.current);var i=null;switch(n){case"input":o=cu(e,o),r=cu(e,r),i=[];break;case"select":o=je({},o,{value:void 0}),r=je({},r,{value:void 0}),i=[];break;case"textarea":o=pu(e,o),r=pu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xs)}mu(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ai.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ai.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Sg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Po(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vx(e,t,n){var r=t.pendingProps;switch(Mc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return wt(t.type)&&Js(),rt(t),null;case 3:return r=t.stateNode,ao(),ve(vt),ve(at),Kc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(rs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ht!==null&&(Ku(Ht),Ht=null))),Uu(e,t),rt(t),null;case 5:Yc(t);var o=ur(vi.current);if(n=t.type,e!==null&&t.stateNode!=null)$g(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return rt(t),null}if(e=ur(on.current),rs(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[nn]=t,r[yi]=i,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(o=0;o<Bo.length;o++)ye(Bo[o],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Qd(r,i),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ye("invalid",r);break;case"textarea":Kd(r,i),ye("invalid",r)}mu(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ns(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ns(r.textContent,a,e),o=["children",""+a]):ai.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ye("scroll",r)}switch(n){case"input":Qi(r),Yd(r,i,!0);break;case"textarea":Qi(r),Xd(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xs)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nn]=t,e[yi]=r,wg(e,t,!1,!1),t.stateNode=e;e:{switch(s=gu(n,r),n){case"dialog":ye("cancel",e),ye("close",e),o=r;break;case"iframe":case"object":case"embed":ye("load",e),o=r;break;case"video":case"audio":for(o=0;o<Bo.length;o++)ye(Bo[o],e);o=r;break;case"source":ye("error",e),o=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),o=r;break;case"details":ye("toggle",e),o=r;break;case"input":Qd(e,r),o=cu(e,r),ye("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=je({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Kd(e,r),o=pu(e,r),ye("invalid",e);break;default:o=r}mu(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Zh(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xh(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&li(e,u):typeof u=="number"&&li(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ai.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ye("scroll",e):u!=null&&_c(e,i,u,s))}switch(n){case"input":Qi(e),Yd(e,r,!1);break;case"textarea":Qi(e),Xd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Xr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Xr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Xs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)Sg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=ur(vi.current),ur(on.current),rs(t)){if(r=t.stateNode,n=t.memoizedProps,r[nn]=t,(i=r.nodeValue!==n)&&(e=Rt,e!==null))switch(e.tag){case 3:ns(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ns(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=t,t.stateNode=r}return rt(t),null;case 13:if(ve(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&Ct!==null&&t.mode&1&&!(t.flags&128))Bm(),io(),t.flags|=98560,i=!1;else if(i=rs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(L(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[nn]=t}else io(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),i=!1}else Ht!==null&&(Ku(Ht),Ht=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?Ue===0&&(Ue=3):ld())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return ao(),Uu(e,t),e===null&&mi(t.stateNode.containerInfo),rt(t),null;case 10:return Hc(t.type._context),rt(t),null;case 17:return wt(t.type)&&Js(),rt(t),null;case 19:if(ve(Ee),i=t.memoizedState,i===null)return rt(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Po(i,!1);else{if(Ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ia(e),s!==null){for(t.flags|=128,Po(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Ee,Ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ne()>uo&&(t.flags|=128,r=!0,Po(i,!1),t.lanes=4194304)}else{if(!r)if(e=ia(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Po(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Se)return rt(t),null}else 2*Ne()-i.renderingStartTime>uo&&n!==1073741824&&(t.flags|=128,r=!0,Po(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ne(),t.sibling=null,n=Ee.current,me(Ee,r?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return ad(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Et&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function Wx(e,t){switch(Mc(t),t.tag){case 1:return wt(t.type)&&Js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ao(),ve(vt),ve(at),Kc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yc(t),null;case 13:if(ve(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));io()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Ee),null;case 4:return ao(),null;case 10:return Hc(t.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var ss=!1,it=!1,Hx=typeof WeakSet=="function"?WeakSet:Set,V=null;function Yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Vu(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Mf=!1;function Gx(e,t){if(_u=Qs,e=Cm(),Dc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,d=0,p=e,y=null;t:for(;;){for(var $;p!==n||o!==0&&p.nodeType!==3||(a=s+o),p!==i||r!==0&&p.nodeType!==3||(u=s+r),p.nodeType===3&&(s+=p.nodeValue.length),($=p.firstChild)!==null;)y=p,p=$;for(;;){if(p===e)break t;if(y===n&&++c===o&&(a=s),y===i&&++d===r&&(u=s),($=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=$}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cu={focusedElem:e,selectionRange:n},Qs=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,b=g.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ut(t.type,w),b);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(v){Te(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return g=Mf,Mf=!1,g}function Jo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Vu(t,n,i)}o=o.next}while(o!==r)}}function Oa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bg(e){var t=e.alternate;t!==null&&(e.alternate=null,bg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nn],delete t[yi],delete t[Pu],delete t[jx],delete t[Rx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kg(e){return e.tag===5||e.tag===3||e.tag===4}function Uf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xs));else if(r!==4&&(e=e.child,e!==null))for(Hu(e,t,n),e=e.sibling;e!==null;)Hu(e,t,n),e=e.sibling}function Gu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gu(e,t,n),e=e.sibling;e!==null;)Gu(e,t,n),e=e.sibling}var Je=null,Vt=!1;function kn(e,t,n){for(n=n.child;n!==null;)Eg(e,t,n),n=n.sibling}function Eg(e,t,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Ca,n)}catch{}switch(n.tag){case 5:it||Yr(n,t);case 6:var r=Je,o=Vt;Je=null,kn(e,t,n),Je=r,Vt=o,Je!==null&&(Vt?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Vt?(e=Je,n=n.stateNode,e.nodeType===8?kl(e.parentNode,n):e.nodeType===1&&kl(e,n),fi(e)):kl(Je,n.stateNode));break;case 4:r=Je,o=Vt,Je=n.stateNode.containerInfo,Vt=!0,kn(e,t,n),Je=r,Vt=o;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Vu(n,t,s),o=o.next}while(o!==r)}kn(e,t,n);break;case 1:if(!it&&(Yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,t,a)}kn(e,t,n);break;case 21:kn(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,kn(e,t,n),it=r):kn(e,t,n);break;default:kn(e,t,n)}}function Vf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hx),t.forEach(function(r){var o=tv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,Vt=!1;break e;case 3:Je=a.stateNode.containerInfo,Vt=!0;break e;case 4:Je=a.stateNode.containerInfo,Vt=!0;break e}a=a.return}if(Je===null)throw Error(L(160));Eg(i,s,o),Je=null,Vt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){Te(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_g(t,e),t=t.sibling}function _g(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Zt(e),r&4){try{Jo(3,e,e.return),Oa(3,e)}catch(w){Te(e,e.return,w)}try{Jo(5,e,e.return)}catch(w){Te(e,e.return,w)}}break;case 1:Mt(t,e),Zt(e),r&512&&n!==null&&Yr(n,n.return);break;case 5:if(Mt(t,e),Zt(e),r&512&&n!==null&&Yr(n,n.return),e.flags&32){var o=e.stateNode;try{li(o,"")}catch(w){Te(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Qh(o,i),gu(a,s);var c=gu(a,i);for(s=0;s<u.length;s+=2){var d=u[s],p=u[s+1];d==="style"?Zh(o,p):d==="dangerouslySetInnerHTML"?Xh(o,p):d==="children"?li(o,p):_c(o,d,p,c)}switch(a){case"input":du(o,i);break;case"textarea":Yh(o,i);break;case"select":var y=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var $=i.value;$!=null?Xr(o,!!i.multiple,$,!1):y!==!!i.multiple&&(i.defaultValue!=null?Xr(o,!!i.multiple,i.defaultValue,!0):Xr(o,!!i.multiple,i.multiple?[]:"",!1))}o[yi]=i}catch(w){Te(e,e.return,w)}}break;case 6:if(Mt(t,e),Zt(e),r&4){if(e.stateNode===null)throw Error(L(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){Te(e,e.return,w)}}break;case 3:if(Mt(t,e),Zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(w){Te(e,e.return,w)}break;case 4:Mt(t,e),Zt(e);break;case 13:Mt(t,e),Zt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(id=Ne())),r&4&&Vf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(it=(c=it)||d,Mt(t,e),it=c):Mt(t,e),Zt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(V=e,d=e.child;d!==null;){for(p=V=d;V!==null;){switch(y=V,$=y.child,y.tag){case 0:case 11:case 14:case 15:Jo(4,y,y.return);break;case 1:Yr(y,y.return);var g=y.stateNode;if(typeof g.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(w){Te(r,n,w)}}break;case 5:Yr(y,y.return);break;case 22:if(y.memoizedState!==null){Hf(p);continue}}$!==null?($.return=y,V=$):Hf(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Jh("display",s))}catch(w){Te(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){Te(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mt(t,e),Zt(e),r&4&&Vf(e);break;case 21:break;default:Mt(t,e),Zt(e)}}function Zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kg(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(li(o,""),r.flags&=-33);var i=Uf(e);Gu(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Uf(e);Hu(e,a,s);break;default:throw Error(L(161))}}catch(u){Te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qx(e,t,n){V=e,Cg(e)}function Cg(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var o=V,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||ss;if(!s){var a=o.alternate,u=a!==null&&a.memoizedState!==null||it;a=ss;var c=it;if(ss=s,(it=u)&&!c)for(V=o;V!==null;)s=V,u=s.child,s.tag===22&&s.memoizedState!==null?Gf(o):u!==null?(u.return=s,V=u):Gf(o);for(;i!==null;)V=i,Cg(i),i=i.sibling;V=o,ss=a,it=c}Wf(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,V=i):Wf(e)}}function Wf(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||Oa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ut(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&jf(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jf(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&fi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}it||t.flags&512&&Wu(t)}catch(y){Te(t,t.return,y)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function Hf(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function Gf(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oa(4,t)}catch(u){Te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){Te(t,o,u)}}var i=t.return;try{Wu(t)}catch(u){Te(t,i,u)}break;case 5:var s=t.return;try{Wu(t)}catch(u){Te(t,s,u)}}}catch(u){Te(t,t.return,u)}if(t===e){V=null;break}var a=t.sibling;if(a!==null){a.return=t.return,V=a;break}V=t.return}}var Qx=Math.ceil,la=$n.ReactCurrentDispatcher,rd=$n.ReactCurrentOwner,At=$n.ReactCurrentBatchConfig,se=0,Ge=null,Ae=null,et=0,Et=0,Kr=Kn(0),Ue=0,bi=null,wr=0,La=0,od=0,Zo=null,yt=null,id=0,uo=1/0,cn=null,ua=!1,qu=null,Mn=null,as=!1,zn=null,ca=0,ei=0,Qu=null,Ts=-1,zs=0;function ft(){return se&6?Ne():Ts!==-1?Ts:Ts=Ne()}function Un(e){return e.mode&1?se&2&&et!==0?et&-et:Tx.transition!==null?(zs===0&&(zs=dm()),zs):(e=fe,e!==0||(e=window.event,e=e===void 0?16:xm(e.type)),e):1}function Yt(e,t,n,r){if(50<ei)throw ei=0,Qu=null,Error(L(185));Ni(e,n,r),(!(se&2)||e!==Ge)&&(e===Ge&&(!(se&2)&&(La|=n),Ue===4&&Rn(e,et)),$t(e,r),n===1&&se===0&&!(t.mode&1)&&(uo=Ne()+500,za&&Xn()))}function $t(e,t){var n=e.callbackNode;T1(e,t);var r=qs(e,e===Ge?et:0);if(r===0)n!==null&&ef(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ef(n),t===1)e.tag===0?Px(qf.bind(null,e)):Am(qf.bind(null,e)),_x(function(){!(se&6)&&Xn()}),n=null;else{switch(fm(r)){case 1:n=Tc;break;case 4:n=um;break;case 16:n=Gs;break;case 536870912:n=cm;break;default:n=Gs}n=Og(n,jg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jg(e,t){if(Ts=-1,zs=0,se&6)throw Error(L(327));var n=e.callbackNode;if(no()&&e.callbackNode!==n)return null;var r=qs(e,e===Ge?et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=da(e,r);else{t=r;var o=se;se|=2;var i=Pg();(Ge!==e||et!==t)&&(cn=null,uo=Ne()+500,pr(e,t));do try{Xx();break}catch(a){Rg(e,a)}while(!0);Wc(),la.current=i,se=o,Ae!==null?t=0:(Ge=null,et=0,t=Ue)}if(t!==0){if(t===2&&(o=$u(e),o!==0&&(r=o,t=Yu(e,o))),t===1)throw n=bi,pr(e,0),Rn(e,r),$t(e,Ne()),n;if(t===6)Rn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Yx(o)&&(t=da(e,r),t===2&&(i=$u(e),i!==0&&(r=i,t=Yu(e,i))),t===1))throw n=bi,pr(e,0),Rn(e,r),$t(e,Ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:rr(e,yt,cn);break;case 3:if(Rn(e,r),(r&130023424)===r&&(t=id+500-Ne(),10<t)){if(qs(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ru(rr.bind(null,e,yt,cn),t);break}rr(e,yt,cn);break;case 4:if(Rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Qt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qx(r/1960))-r,10<r){e.timeoutHandle=Ru(rr.bind(null,e,yt,cn),r);break}rr(e,yt,cn);break;case 5:rr(e,yt,cn);break;default:throw Error(L(329))}}}return $t(e,Ne()),e.callbackNode===n?jg.bind(null,e):null}function Yu(e,t){var n=Zo;return e.current.memoizedState.isDehydrated&&(pr(e,t).flags|=256),e=da(e,t),e!==2&&(t=yt,yt=n,t!==null&&Ku(t)),e}function Ku(e){yt===null?yt=e:yt.push.apply(yt,e)}function Yx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Xt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rn(e,t){for(t&=~od,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qt(t),r=1<<n;e[n]=-1,t&=~r}}function qf(e){if(se&6)throw Error(L(327));no();var t=qs(e,0);if(!(t&1))return $t(e,Ne()),null;var n=da(e,t);if(e.tag!==0&&n===2){var r=$u(e);r!==0&&(t=r,n=Yu(e,r))}if(n===1)throw n=bi,pr(e,0),Rn(e,t),$t(e,Ne()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,yt,cn),$t(e,Ne()),null}function sd(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(uo=Ne()+500,za&&Xn())}}function $r(e){zn!==null&&zn.tag===0&&!(se&6)&&no();var t=se;se|=1;var n=At.transition,r=fe;try{if(At.transition=null,fe=1,e)return e()}finally{fe=r,At.transition=n,se=t,!(se&6)&&Xn()}}function ad(){Et=Kr.current,ve(Kr)}function pr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ex(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Mc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Js();break;case 3:ao(),ve(vt),ve(at),Kc();break;case 5:Yc(r);break;case 4:ao();break;case 13:ve(Ee);break;case 19:ve(Ee);break;case 10:Hc(r.type._context);break;case 22:case 23:ad()}n=n.return}if(Ge=e,Ae=e=Vn(e.current,null),et=Et=t,Ue=0,bi=null,od=La=wr=0,yt=Zo=null,lr!==null){for(t=0;t<lr.length;t++)if(n=lr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}lr=null}return e}function Rg(e,t){do{var n=Ae;try{if(Wc(),js.current=aa,sa){for(var r=_e.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}sa=!1}if(vr=0,We=Be=_e=null,Xo=!1,wi=0,rd.current=null,n===null||n.return===null){Ue=1,bi=t,Ae=null;break}e:{var i=e,s=n.return,a=n,u=t;if(t=et,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var $=Nf(s);if($!==null){$.flags&=-257,Of($,s,a,i,t),$.mode&1&&Ff(i,c,t),t=$,u=c;var g=t.updateQueue;if(g===null){var w=new Set;w.add(u),t.updateQueue=w}else g.add(u);break e}else{if(!(t&1)){Ff(i,c,t),ld();break e}u=Error(L(426))}}else if(Se&&a.mode&1){var b=Nf(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Of(b,s,a,i,t),Uc(lo(u,a));break e}}i=u=lo(u,a),Ue!==4&&(Ue=2),Zo===null?Zo=[i]:Zo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=fg(i,u,t);Cf(i,m);break e;case 1:a=u;var f=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Mn===null||!Mn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=pg(i,a,t);Cf(i,v);break e}}i=i.return}while(i!==null)}zg(n)}catch(k){t=k,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function Pg(){var e=la.current;return la.current=aa,e===null?aa:e}function ld(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ge===null||!(wr&268435455)&&!(La&268435455)||Rn(Ge,et)}function da(e,t){var n=se;se|=2;var r=Pg();(Ge!==e||et!==t)&&(cn=null,pr(e,t));do try{Kx();break}catch(o){Rg(e,o)}while(!0);if(Wc(),se=n,la.current=r,Ae!==null)throw Error(L(261));return Ge=null,et=0,Ue}function Kx(){for(;Ae!==null;)Tg(Ae)}function Xx(){for(;Ae!==null&&!S1();)Tg(Ae)}function Tg(e){var t=Ng(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?zg(e):Ae=t,rd.current=null}function zg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wx(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Ae=null;return}}else if(n=Vx(n,t,Et),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ue===0&&(Ue=5)}function rr(e,t,n){var r=fe,o=At.transition;try{At.transition=null,fe=1,Jx(e,t,n,r)}finally{At.transition=o,fe=r}return null}function Jx(e,t,n,r){do no();while(zn!==null);if(se&6)throw Error(L(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(z1(e,i),e===Ge&&(Ae=Ge=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||as||(as=!0,Og(Gs,function(){return no(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=At.transition,At.transition=null;var s=fe;fe=1;var a=se;se|=4,rd.current=null,Gx(e,n),_g(n,e),xx(Cu),Qs=!!_u,Cu=_u=null,e.current=n,qx(n),b1(),se=a,fe=s,At.transition=i}else e.current=n;if(as&&(as=!1,zn=e,ca=o),i=e.pendingLanes,i===0&&(Mn=null),_1(n.stateNode),$t(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ua)throw ua=!1,e=qu,qu=null,e;return ca&1&&e.tag!==0&&no(),i=e.pendingLanes,i&1?e===Qu?ei++:(ei=0,Qu=e):ei=0,Xn(),null}function no(){if(zn!==null){var e=fm(ca),t=At.transition,n=fe;try{if(At.transition=null,fe=16>e?16:e,zn===null)var r=!1;else{if(e=zn,zn=null,ca=0,se&6)throw Error(L(331));var o=se;for(se|=4,V=e.current;V!==null;){var i=V,s=i.child;if(V.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(V=c;V!==null;){var d=V;switch(d.tag){case 0:case 11:case 15:Jo(8,d,i)}var p=d.child;if(p!==null)p.return=d,V=p;else for(;V!==null;){d=V;var y=d.sibling,$=d.return;if(bg(d),d===c){V=null;break}if(y!==null){y.return=$,V=y;break}V=$}}}var g=i.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}V=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,V=s;else e:for(;V!==null;){if(i=V,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Jo(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,V=m;break e}V=i.return}}var f=e.current;for(V=f;V!==null;){s=V;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,V=h;else e:for(s=f;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oa(9,a)}}catch(k){Te(a,a.return,k)}if(a===s){V=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,V=v;break e}V=a.return}}if(se=o,Xn(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Ca,e)}catch{}r=!0}return r}finally{fe=n,At.transition=t}}return!1}function Qf(e,t,n){t=lo(n,t),t=fg(e,t,1),e=Bn(e,t,1),t=ft(),e!==null&&(Ni(e,1,t),$t(e,t))}function Te(e,t,n){if(e.tag===3)Qf(e,e,n);else for(;t!==null;){if(t.tag===3){Qf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=lo(n,e),e=pg(t,e,1),t=Bn(t,e,1),e=ft(),t!==null&&(Ni(t,1,e),$t(t,e));break}}t=t.return}}function Zx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(et&n)===n&&(Ue===4||Ue===3&&(et&130023424)===et&&500>Ne()-id?pr(e,0):od|=n),$t(e,t)}function Fg(e,t){t===0&&(e.mode&1?(t=Xi,Xi<<=1,!(Xi&130023424)&&(Xi=4194304)):t=1);var n=ft();e=vn(e,t),e!==null&&(Ni(e,t,n),$t(e,n))}function ev(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fg(e,n)}function tv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),Fg(e,n)}var Ng;Ng=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)xt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xt=!1,Ux(e,t,n);xt=!!(e.flags&131072)}else xt=!1,Se&&t.flags&1048576&&Im(t,ta,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ps(e,t),e=t.pendingProps;var o=oo(t,at.current);to(t,n),o=Jc(null,t,r,e,o,n);var i=Zc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(r)?(i=!0,Zs(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,qc(t),o.updater=Na,t.stateNode=o,o._reactInternals=t,Lu(t,r,e,n),t=Du(null,t,r,!0,i,n)):(t.tag=0,Se&&i&&Bc(t),ct(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ps(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=rv(r),e=Ut(r,e),o){case 0:t=Iu(null,t,r,e,n);break e;case 1:t=If(null,t,r,e,n);break e;case 11:t=Lf(null,t,r,e,n);break e;case 14:t=Af(null,t,r,Ut(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ut(r,o),Iu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ut(r,o),If(e,t,r,o,n);case 3:e:{if(yg(t),e===null)throw Error(L(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Wm(e,t),oa(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=lo(Error(L(423)),t),t=Df(e,t,r,n,o);break e}else if(r!==o){o=lo(Error(L(424)),t),t=Df(e,t,r,n,o);break e}else for(Ct=Dn(t.stateNode.containerInfo.firstChild),Rt=t,Se=!0,Ht=null,n=Um(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),r===o){t=wn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return Hm(t),e===null&&Fu(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,ju(r,o)?s=null:i!==null&&ju(r,i)&&(t.flags|=32),gg(e,t),ct(e,t,s,n),t.child;case 6:return e===null&&Fu(t),null;case 13:return xg(e,t,n);case 4:return Qc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=so(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ut(r,o),Lf(e,t,r,o,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,me(na,r._currentValue),r._currentValue=s,i!==null)if(Xt(i.value,s)){if(i.children===o.children&&!vt.current){t=wn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=gn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Nu(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(L(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Nu(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ct(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,to(t,n),o=It(o),r=r(o),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,o=Ut(r,t.pendingProps),o=Ut(r.type,o),Af(e,t,r,o,n);case 15:return hg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ut(r,o),Ps(e,t),t.tag=1,wt(r)?(e=!0,Zs(t)):e=!1,to(t,n),dg(t,r,o),Lu(t,r,o,n),Du(null,t,r,!0,e,n);case 19:return vg(e,t,n);case 22:return mg(e,t,n)}throw Error(L(156,t.tag))};function Og(e,t){return lm(e,t)}function nv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,n,r){return new nv(e,t,n,r)}function ud(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rv(e){if(typeof e=="function")return ud(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jc)return 11;if(e===Rc)return 14}return 2}function Vn(e,t){var n=e.alternate;return n===null?(n=Lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fs(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")ud(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Br:return hr(n.children,o,i,t);case Cc:s=8,o|=8;break;case su:return e=Lt(12,n,t,o|2),e.elementType=su,e.lanes=i,e;case au:return e=Lt(13,n,t,o),e.elementType=au,e.lanes=i,e;case lu:return e=Lt(19,n,t,o),e.elementType=lu,e.lanes=i,e;case Hh:return Aa(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vh:s=10;break e;case Wh:s=9;break e;case jc:s=11;break e;case Rc:s=14;break e;case _n:s=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=Lt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function hr(e,t,n,r){return e=Lt(7,e,r,t),e.lanes=n,e}function Aa(e,t,n,r){return e=Lt(22,e,r,t),e.elementType=Hh,e.lanes=n,e.stateNode={isHidden:!1},e}function zl(e,t,n){return e=Lt(6,e,null,t),e.lanes=n,e}function Fl(e,t,n){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ov(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function cd(e,t,n,r,o,i,s,a,u){return e=new ov(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Lt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(i),e}function iv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lg(e){if(!e)return qn;e=e._reactInternals;e:{if(Cr(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(wt(n))return Lm(e,n,t)}return t}function Ag(e,t,n,r,o,i,s,a,u){return e=cd(n,r,!0,e,o,i,s,a,u),e.context=Lg(null),n=e.current,r=ft(),o=Un(n),i=gn(r,o),i.callback=t??null,Bn(n,i,o),e.current.lanes=o,Ni(e,o,r),$t(e,r),e}function Ia(e,t,n,r){var o=t.current,i=ft(),s=Un(o);return n=Lg(n),t.context===null?t.context=n:t.pendingContext=n,t=gn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bn(o,t,s),e!==null&&(Yt(e,o,s,i),Cs(e,o,s)),s}function fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dd(e,t){Yf(e,t),(e=e.alternate)&&Yf(e,t)}function sv(){return null}var Ig=typeof reportError=="function"?reportError:function(e){console.error(e)};function fd(e){this._internalRoot=e}Da.prototype.render=fd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Ia(e,t,null,null)};Da.prototype.unmount=fd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$r(function(){Ia(null,e,null,null)}),t[xn]=null}};function Da(e){this._internalRoot=e}Da.prototype.unstable_scheduleHydration=function(e){if(e){var t=mm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jn.length&&t!==0&&t<jn[n].priority;n++);jn.splice(n,0,e),n===0&&ym(e)}};function pd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kf(){}function av(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=fa(s);i.call(c)}}var s=Ag(t,r,e,0,null,!1,!1,"",Kf);return e._reactRootContainer=s,e[xn]=s.current,mi(e.nodeType===8?e.parentNode:e),$r(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=fa(u);a.call(c)}}var u=cd(e,0,!1,null,null,!1,!1,"",Kf);return e._reactRootContainer=u,e[xn]=u.current,mi(e.nodeType===8?e.parentNode:e),$r(function(){Ia(t,u,n,r)}),u}function Ma(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var u=fa(s);a.call(u)}}Ia(t,s,e,o)}else s=av(n,t,e,o,r);return fa(s)}pm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Do(t.pendingLanes);n!==0&&(zc(t,n|1),$t(t,Ne()),!(se&6)&&(uo=Ne()+500,Xn()))}break;case 13:$r(function(){var r=vn(e,1);if(r!==null){var o=ft();Yt(r,e,1,o)}}),dd(e,1)}};Fc=function(e){if(e.tag===13){var t=vn(e,134217728);if(t!==null){var n=ft();Yt(t,e,134217728,n)}dd(e,134217728)}};hm=function(e){if(e.tag===13){var t=Un(e),n=vn(e,t);if(n!==null){var r=ft();Yt(n,e,t,r)}dd(e,t)}};mm=function(){return fe};gm=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};xu=function(e,t,n){switch(t){case"input":if(du(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ta(r);if(!o)throw Error(L(90));qh(r),du(r,o)}}}break;case"textarea":Yh(e,n);break;case"select":t=n.value,t!=null&&Xr(e,!!n.multiple,t,!1)}};nm=sd;rm=$r;var lv={usingClientEntryPoint:!1,Events:[Li,Wr,Ta,em,tm,sd]},To={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uv={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sm(e),e===null?null:e.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{Ca=ls.inject(uv),rn=ls}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv;Tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(t))throw Error(L(200));return iv(e,t,null,n)};Tt.createRoot=function(e,t){if(!pd(e))throw Error(L(299));var n=!1,r="",o=Ig;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=cd(e,1,!1,null,null,n,!1,r,o),e[xn]=t.current,mi(e.nodeType===8?e.parentNode:e),new fd(t)};Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=sm(t),e=e===null?null:e.stateNode,e};Tt.flushSync=function(e){return $r(e)};Tt.hydrate=function(e,t,n){if(!Ba(t))throw Error(L(200));return Ma(null,e,t,!0,n)};Tt.hydrateRoot=function(e,t,n){if(!pd(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Ig;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ag(t,null,e,1,n??null,o,!1,i,s),e[xn]=t.current,mi(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Da(t)};Tt.render=function(e,t,n){if(!Ba(t))throw Error(L(200));return Ma(null,e,t,!1,n)};Tt.unmountComponentAtNode=function(e){if(!Ba(e))throw Error(L(40));return e._reactRootContainer?($r(function(){Ma(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};Tt.unstable_batchedUpdates=sd;Tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ba(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Ma(e,t,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function Dg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dg)}catch(e){console.error(e)}}Dg(),Dh.exports=Tt;var cv=Dh.exports,Xf=cv;ou.createRoot=Xf.createRoot,ou.hydrateRoot=Xf.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ki.apply(this,arguments)}var Fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Fn||(Fn={}));const Jf="popstate";function dv(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return pa("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ei(o)}return Bg(t,n,null,e)}function fv(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:a="",hash:u=""}=jr(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),pa("",{pathname:s,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let u=o.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof i=="string"?i:Ei(i))}function r(o,i){Ua(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Bg(t,n,r,e)}function Ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ua(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pv(){return Math.random().toString(36).substr(2,8)}function Zf(e,t){return{usr:e.state,key:e.key,idx:t}}function pa(e,t,n,r){return n===void 0&&(n=null),ki({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jr(t):t,{state:n,key:t&&t.key||r||pv()})}function Ei(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Bg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Fn.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(ki({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function p(){a=Fn.Pop;let b=d(),m=b==null?null:b-c;c=b,u&&u({action:a,location:w.location,delta:m})}function y(b,m){a=Fn.Push;let f=pa(w.location,b,m);n&&n(f,b),c=d()+1;let h=Zf(f,c),v=w.createHref(f);try{s.pushState(h,"",v)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(v)}i&&u&&u({action:a,location:w.location,delta:1})}function $(b,m){a=Fn.Replace;let f=pa(w.location,b,m);n&&n(f,b),c=d();let h=Zf(f,c),v=w.createHref(f);s.replaceState(h,"",v),i&&u&&u({action:a,location:w.location,delta:0})}function g(b){let m=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof b=="string"?b:Ei(b);return f=f.replace(/ $/,"%20"),Ce(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let w={get action(){return a},get location(){return e(o,s)},listen(b){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Jf,p),u=b,()=>{o.removeEventListener(Jf,p),u=null}},createHref(b){return t(o,b)},createURL:g,encodeLocation(b){let m=g(b);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:y,replace:$,go(b){return s.go(b)}};return w}var ep;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ep||(ep={}));function hv(e,t,n){return n===void 0&&(n="/"),mv(e,t,n)}function mv(e,t,n,r){let o=typeof t=="string"?jr(t):t,i=co(o.pathname||"/",n);if(i==null)return null;let s=Mg(e);gv(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let c=Cv(i);a=Ev(s[u],c)}return a}function Mg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(Ce(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Wn([r,u.relativePath]),d=n.concat(u);i.children&&i.children.length>0&&(Ce(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Mg(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:bv(c,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let u of Ug(i.path))o(i,s,u)}),t}function Ug(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Ug(r.join("/")),a=[];return a.push(...s.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function gv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:kv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yv=/^:[\w-]+$/,xv=3,vv=2,wv=1,$v=10,Sv=-2,tp=e=>e==="*";function bv(e,t){let n=e.split("/"),r=n.length;return n.some(tp)&&(r+=Sv),t&&(r+=vv),n.filter(o=>!tp(o)).reduce((o,i)=>o+(yv.test(i)?xv:i===""?wv:$v),r)}function kv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Ev(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",p=Xu({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),y=u.route;if(!p)return null;Object.assign(o,p.params),s.push({params:o,pathname:Wn([i,p.pathname]),pathnameBase:zv(Wn([i,p.pathnameBase])),route:y}),p.pathnameBase!=="/"&&(i=Wn([i,p.pathnameBase]))}return s}function Xu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_v(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:y,isOptional:$}=d;if(y==="*"){let w=a[p]||"";s=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const g=a[p];return $&&!g?c[y]=void 0:c[y]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function _v(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ua(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Cv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ua(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function co(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const jv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rv=e=>jv.test(e);function Pv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?jr(e):e,i;if(n)if(Rv(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Ua(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=np(n.substring(1),"/"):i=np(n,t)}else i=t;return{pathname:i,search:Fv(r),hash:Nv(o)}}function np(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Nl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function hd(e,t){let n=Tv(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function md(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=jr(e):(o=ki({},e),Ce(!o.pathname||!o.pathname.includes("?"),Nl("?","pathname","search",o)),Ce(!o.pathname||!o.pathname.includes("#"),Nl("#","pathname","hash",o)),Ce(!o.search||!o.search.includes("#"),Nl("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let y=s.split("/");for(;y[0]==="..";)y.shift(),p-=1;o.pathname=y.join("/")}a=p>=0?t[p]:"/"}let u=Pv(o,a),c=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Wn=e=>e.join("/").replace(/\/\/+/g,"/"),zv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Fv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Nv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ov(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Vg=["post","put","patch","delete"];new Set(Vg);const Lv=["get",...Vg];new Set(Lv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(){return _i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_i.apply(this,arguments)}const Va=C.createContext(null),Wg=C.createContext(null),Sn=C.createContext(null),Wa=C.createContext(null),sn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Hg=C.createContext(null);function Av(e,t){let{relative:n}=t===void 0?{}:t;$o()||Ce(!1);let{basename:r,navigator:o}=C.useContext(Sn),{hash:i,pathname:s,search:a}=Ha(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Wn([r,s])),o.createHref({pathname:u,search:a,hash:i})}function $o(){return C.useContext(Wa)!=null}function Jn(){return $o()||Ce(!1),C.useContext(Wa).location}function Gg(e){C.useContext(Sn).static||C.useLayoutEffect(e)}function Rr(){let{isDataRoute:e}=C.useContext(sn);return e?Jv():Iv()}function Iv(){$o()||Ce(!1);let e=C.useContext(Va),{basename:t,future:n,navigator:r}=C.useContext(Sn),{matches:o}=C.useContext(sn),{pathname:i}=Jn(),s=JSON.stringify(hd(o,n.v7_relativeSplatPath)),a=C.useRef(!1);return Gg(()=>{a.current=!0}),C.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=md(c,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Wn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,s,i,e])}const Dv=C.createContext(null);function Bv(e){let t=C.useContext(sn).outlet;return t&&C.createElement(Dv.Provider,{value:e},t)}function qg(){let{matches:e}=C.useContext(sn),t=e[e.length-1];return t?t.params:{}}function Ha(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Sn),{matches:o}=C.useContext(sn),{pathname:i}=Jn(),s=JSON.stringify(hd(o,r.v7_relativeSplatPath));return C.useMemo(()=>md(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Mv(e,t){return Uv(e,t)}function Uv(e,t,n,r){$o()||Ce(!1);let{navigator:o}=C.useContext(Sn),{matches:i}=C.useContext(sn),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Jn(),d;if(t){var p;let b=typeof t=="string"?jr(t):t;u==="/"||(p=b.pathname)!=null&&p.startsWith(u)||Ce(!1),d=b}else d=c;let y=d.pathname||"/",$=y;if(u!=="/"){let b=u.replace(/^\//,"").split("/");$="/"+y.replace(/^\//,"").split("/").slice(b.length).join("/")}let g=hv(e,{pathname:$}),w=qv(g&&g.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:Wn([u,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:Wn([u,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return t&&w?C.createElement(Wa.Provider,{value:{location:_i({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Fn.Pop}},w):w}function Vv(){let e=Xv(),t=Ov(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,null)}const Wv=C.createElement(Vv,null);class Hv extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(sn.Provider,{value:this.props.routeContext},C.createElement(Hg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gv(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(Va);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(sn.Provider,{value:t},r)}function qv(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);d>=0||Ce(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:y,errors:$}=n,g=p.route.loader&&y[p.route.id]===void 0&&(!$||$[p.route.id]===void 0);if(p.route.lazy||g){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,p,y)=>{let $,g=!1,w=null,b=null;n&&($=a&&p.route.id?a[p.route.id]:void 0,w=p.route.errorElement||Wv,u&&(c<0&&y===0?(Zv("route-fallback"),g=!0,b=null):c===y&&(g=!0,b=p.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,y+1)),f=()=>{let h;return $?h=w:g?h=b:p.route.Component?h=C.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,C.createElement(Gv,{match:p,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?C.createElement(Hv,{location:n.location,revalidation:n.revalidation,component:w,error:$,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Qg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qg||{}),Yg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yg||{});function Qv(e){let t=C.useContext(Va);return t||Ce(!1),t}function Yv(e){let t=C.useContext(Wg);return t||Ce(!1),t}function Kv(e){let t=C.useContext(sn);return t||Ce(!1),t}function Kg(e){let t=Kv(),n=t.matches[t.matches.length-1];return n.route.id||Ce(!1),n.route.id}function Xv(){var e;let t=C.useContext(Hg),n=Yv(),r=Kg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Jv(){let{router:e}=Qv(Qg.UseNavigateStable),t=Kg(Yg.UseNavigateStable),n=C.useRef(!1);return Gg(()=>{n.current=!0}),C.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,_i({fromRouteId:t},i)))},[e,t])}const rp={};function Zv(e,t,n){rp[e]||(rp[e]=!0)}function Xg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ha(e){let{to:t,replace:n,state:r,relative:o}=e;$o()||Ce(!1);let{future:i,static:s}=C.useContext(Sn),{matches:a}=C.useContext(sn),{pathname:u}=Jn(),c=Rr(),d=md(t,hd(a,i.v7_relativeSplatPath),u,o==="path"),p=JSON.stringify(d);return C.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:o}),[c,p,o,n,r]),null}function Jg(e){return Bv(e.context)}function Pe(e){Ce(!1)}function Zg(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Fn.Pop,navigator:i,static:s=!1,future:a}=e;$o()&&Ce(!1);let u=t.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:u,navigator:i,static:s,future:_i({v7_relativeSplatPath:!1},a)}),[u,a,i,s]);typeof r=="string"&&(r=jr(r));let{pathname:d="/",search:p="",hash:y="",state:$=null,key:g="default"}=r,w=C.useMemo(()=>{let b=co(d,u);return b==null?null:{location:{pathname:b,search:p,hash:y,state:$,key:g},navigationType:o}},[u,d,p,y,$,g,o]);return w==null?null:C.createElement(Sn.Provider,{value:c},C.createElement(Wa.Provider,{children:n,value:w}))}function ew(e){let{children:t,location:n}=e;return Mv(Ju(t),n)}new Promise(()=>{});function Ju(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,o)=>{if(!C.isValidElement(r))return;let i=[...t,o];if(r.type===C.Fragment){n.push.apply(n,Ju(r.props.children,i));return}r.type!==Pe&&Ce(!1),!r.props.index||!r.props.children||Ce(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ju(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ma.apply(this,arguments)}function ey(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function tw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nw(e,t){return e.button===0&&(!t||t==="_self")&&!tw(e)}const rw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ow=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],iw="6";try{window.__reactRouterVersion=iw}catch{}const sw=C.createContext({isTransitioning:!1}),aw="startTransition",ga=Z0[aw];function lw(e){let{basename:t,children:n,future:r,window:o}=e,i=C.useRef();i.current==null&&(i.current=dv({window:o,v5Compat:!0}));let s=i.current,[a,u]=C.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=C.useCallback(p=>{c&&ga?ga(()=>u(p)):u(p)},[u,c]);return C.useLayoutEffect(()=>s.listen(d),[s,d]),C.useEffect(()=>Xg(r),[r]),C.createElement(Zg,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}function uw(e){let{basename:t,children:n,future:r,window:o}=e,i=C.useRef();i.current==null&&(i.current=fv({window:o,v5Compat:!0}));let s=i.current,[a,u]=C.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=C.useCallback(p=>{c&&ga?ga(()=>u(p)):u(p)},[u,c]);return C.useLayoutEffect(()=>s.listen(d),[s,d]),C.useEffect(()=>Xg(r),[r]),C.createElement(Zg,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const cw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fw=C.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:u,to:c,preventScrollReset:d,viewTransition:p}=t,y=ey(t,rw),{basename:$}=C.useContext(Sn),g,w=!1;if(typeof c=="string"&&dw.test(c)&&(g=c,cw))try{let h=new URL(window.location.href),v=c.startsWith("//")?new URL(h.protocol+c):new URL(c),k=co(v.pathname,$);v.origin===h.origin&&k!=null?c=k+v.search+v.hash:w=!0}catch{}let b=Av(c,{relative:o}),m=mw(c,{replace:s,state:a,target:u,preventScrollReset:d,relative:o,viewTransition:p});function f(h){r&&r(h),h.defaultPrevented||m(h)}return C.createElement("a",ma({},y,{href:g||b,onClick:w||i?r:f,ref:n,target:u}))}),pw=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:u,viewTransition:c,children:d}=t,p=ey(t,ow),y=Ha(u,{relative:p.relative}),$=Jn(),g=C.useContext(Wg),{navigator:w,basename:b}=C.useContext(Sn),m=g!=null&&gw(y)&&c===!0,f=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,h=$.pathname,v=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;o||(h=h.toLowerCase(),v=v?v.toLowerCase():null,f=f.toLowerCase()),v&&b&&(v=co(v,b)||v);const k=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let R=h===f||!s&&h.startsWith(f)&&h.charAt(k)==="/",E=v!=null&&(v===f||!s&&v.startsWith(f)&&v.charAt(f.length)==="/"),_={isActive:R,isPending:E,isTransitioning:m},O=R?r:void 0,I;typeof i=="function"?I=i(_):I=[i,R?"active":null,E?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let W=typeof a=="function"?a(_):a;return C.createElement(fw,ma({},p,{"aria-current":O,className:I,ref:n,style:W,to:u,viewTransition:c}),typeof d=="function"?d(_):d)});var Zu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Zu||(Zu={}));var op;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(op||(op={}));function hw(e){let t=C.useContext(Va);return t||Ce(!1),t}function mw(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,u=Rr(),c=Jn(),d=Ha(e,{relative:s});return C.useCallback(p=>{if(nw(p,n)){p.preventDefault();let y=r!==void 0?r:Ei(c)===Ei(d);u(e,{replace:y,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[c,u,d,r,o,n,e,i,s,a])}function gw(e,t){t===void 0&&(t={});let n=C.useContext(sw);n==null&&Ce(!1);let{basename:r}=hw(Zu.useViewTransitionState),o=Ha(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=co(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=co(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Xu(o.pathname,s)!=null||Xu(o.pathname,i)!=null}var He=function(){return He=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},He.apply(this,arguments)};function fo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var xe="-ms-",ti="-moz-",ue="-webkit-",ty="comm",Ga="rule",gd="decl",yw="@import",xw="@namespace",ny="@keyframes",vw="@layer",ry=Math.abs,yd=String.fromCharCode,ec=Object.assign;function ww(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function oy(e){return e.trim()}function dn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Ns(e,t,n){return e.indexOf(t,n)}function Me(e,t){return e.charCodeAt(t)|0}function Sr(e,t,n){return e.slice(t,n)}function Wt(e){return e.length}function iy(e){return e.length}function Mo(e,t){return t.push(e),e}function $w(e,t){return e.map(t).join("")}function ip(e,t){return e.filter(function(n){return!dn(n,t)})}var qa=1,po=1,sy=0,Bt=0,Le=0,So="";function Qa(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:qa,column:po,length:s,return:"",siblings:a}}function En(e,t){return ec(Qa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function zr(e){for(;e.root;)e=En(e.root,{children:[e]});Mo(e,e.siblings)}function Sw(){return Le}function bw(){return Le=Bt>0?Me(So,--Bt):0,po--,Le===10&&(po=1,qa--),Le}function Kt(){return Le=Bt<sy?Me(So,Bt++):0,po++,Le===10&&(po=1,qa++),Le}function Nn(){return Me(So,Bt)}function Os(){return Bt}function Ya(e,t){return Sr(So,e,t)}function Ci(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kw(e){return qa=po=1,sy=Wt(So=e),Bt=0,[]}function Ew(e){return So="",e}function Ol(e){return oy(Ya(Bt-1,tc(e===91?e+2:e===40?e+1:e)))}function _w(e){for(;(Le=Nn())&&Le<33;)Kt();return Ci(e)>2||Ci(Le)>3?"":" "}function Cw(e,t){for(;--t&&Kt()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Ya(e,Os()+(t<6&&Nn()==32&&Kt()==32))}function tc(e){for(;Kt();)switch(Le){case e:return Bt;case 34:case 39:e!==34&&e!==39&&tc(Le);break;case 40:e===41&&tc(e);break;case 92:Kt();break}return Bt}function jw(e,t){for(;Kt()&&e+Le!==57;)if(e+Le===84&&Nn()===47)break;return"/*"+Ya(t,Bt-1)+"*"+yd(e===47?e:Kt())}function Rw(e){for(;!Ci(Nn());)Kt();return Ya(e,Bt)}function Pw(e){return Ew(Ls("",null,null,null,[""],e=kw(e),0,[0],e))}function Ls(e,t,n,r,o,i,s,a,u){for(var c=0,d=0,p=s,y=0,$=0,g=0,w=1,b=1,m=1,f=0,h="",v=o,k=i,R=r,E=h;b;)switch(g=f,f=Kt()){case 40:if(g!=108&&Me(E,p-1)==58){Ns(E+=ne(Ol(f),"&","&\f"),"&\f",ry(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:E+=Ol(f);break;case 9:case 10:case 13:case 32:E+=_w(g);break;case 92:E+=Cw(Os()-1,7);continue;case 47:switch(Nn()){case 42:case 47:Mo(Tw(jw(Kt(),Os()),t,n,u),u),(Ci(g||1)==5||Ci(Nn()||1)==5)&&Wt(E)&&Sr(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*w:a[c++]=Wt(E)*m;case 125*w:case 59:case 0:switch(f){case 0:case 125:b=0;case 59+d:m==-1&&(E=ne(E,/\f/g,"")),$>0&&(Wt(E)-p||w===0&&g===47)&&Mo($>32?ap(E+";",r,n,p-1,u):ap(ne(E," ","")+";",r,n,p-2,u),u);break;case 59:E+=";";default:if(Mo(R=sp(E,t,n,c,d,o,a,h,v=[],k=[],p,i),i),f===123)if(d===0)Ls(E,t,R,R,v,i,p,a,k);else{switch(y){case 99:if(Me(E,3)===110)break;case 108:if(Me(E,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Ls(e,R,R,r&&Mo(sp(e,R,R,0,0,o,a,h,o,v=[],p,k),k),o,k,p,a,r?v:k):Ls(E,R,R,R,[""],k,0,a,k)}}c=d=$=0,w=m=1,h=E="",p=s;break;case 58:p=1+Wt(E),$=g;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&bw()==125)continue}switch(E+=yd(f),f*w){case 38:m=d>0?1:(E+="\f",-1);break;case 44:a[c++]=(Wt(E)-1)*m,m=1;break;case 64:Nn()===45&&(E+=Ol(Kt())),y=Nn(),d=p=Wt(h=E+=Rw(Os())),f++;break;case 45:g===45&&Wt(E)==2&&(w=0)}}return i}function sp(e,t,n,r,o,i,s,a,u,c,d,p){for(var y=o-1,$=o===0?i:[""],g=iy($),w=0,b=0,m=0;w<r;++w)for(var f=0,h=Sr(e,y+1,y=ry(b=s[w])),v=e;f<g;++f)(v=oy(b>0?$[f]+" "+h:ne(h,/&\f/g,$[f])))&&(u[m++]=v);return Qa(e,t,n,o===0?Ga:a,u,c,d,p)}function Tw(e,t,n,r){return Qa(e,t,n,ty,yd(Sw()),Sr(e,2,-2),0,r)}function ap(e,t,n,r,o){return Qa(e,t,n,gd,Sr(e,0,r),Sr(e,r+1,-1),r,o)}function ay(e,t,n){switch(ww(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ti+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+ti+e+xe+e+e;case 5936:switch(Me(e,t+11)){case 114:return ue+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+xe+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+xe+e+e;case 6165:return ue+e+xe+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return ue+e+xe+"flex-item-"+ne(e,/flex-|-self/g,"")+(dn(e,/flex-|baseline/)?"":xe+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+xe+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+xe+ne(e,"shrink","negative")+e;case 5292:return ue+e+xe+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+xe+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+xe+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!dn(e,/flex-|baseline/))return xe+"grid-column-align"+Sr(e,t)+e;break;case 2592:case 3360:return xe+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,dn(r.props,/grid-\w+-end/)})?~Ns(e+(n=n[t].value),"span",0)?e:xe+ne(e,"-start","")+e+xe+"grid-row-span:"+(~Ns(n,"span",0)?dn(n,/\d+/):+dn(n,/\d+/)-+dn(e,/\d+/))+";":xe+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return dn(r.props,/grid-\w+-start/)})?e:xe+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wt(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+ti+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ns(e,"stretch",0)?ay(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,u,c){return xe+o+":"+i+c+(s?xe+o+"-span:"+(a?u:+u-+i)+c:"")+e});case 4949:if(Me(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Me(e,Me(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Me(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+xe+"$2box$3")+e;case 100:return ne(e,":",":"+xe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function ya(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function zw(e,t,n,r){switch(e.type){case vw:if(e.children.length)break;case yw:case xw:case gd:return e.return=e.return||e.value;case ty:return"";case ny:return e.return=e.value+"{"+ya(e.children,r)+"}";case Ga:if(!Wt(e.value=e.props.join(",")))return""}return Wt(n=ya(e.children,r))?e.return=e.value+"{"+n+"}":""}function Fw(e){var t=iy(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function Nw(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ow(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case gd:e.return=ay(e.value,e.length,n);return;case ny:return ya([En(e,{value:ne(e.value,"@","@"+ue)})],r);case Ga:if(e.length)return $w(n=e.props,function(o){switch(dn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zr(En(e,{props:[ne(o,/:(read-\w+)/,":"+ti+"$1")]})),zr(En(e,{props:[o]})),ec(e,{props:ip(n,r)});break;case"::placeholder":zr(En(e,{props:[ne(o,/:(plac\w+)/,":"+ue+"input-$1")]})),zr(En(e,{props:[ne(o,/:(plac\w+)/,":"+ti+"$1")]})),zr(En(e,{props:[ne(o,/:(plac\w+)/,xe+"input-$1")]})),zr(En(e,{props:[o]})),ec(e,{props:ip(n,r)});break}return""})}}var Lw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},kt={},ho=typeof process<"u"&&kt!==void 0&&(kt.REACT_APP_SC_ATTR||kt.SC_ATTR)||"data-styled",ly="active",uy="data-styled-version",Ka="6.3.11",xd=`/*!sc*/
`,ni=typeof window<"u"&&typeof document<"u",Aw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&kt!==void 0&&kt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&kt.REACT_APP_SC_DISABLE_SPEEDY!==""?kt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&kt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&kt!==void 0&&kt.SC_DISABLE_SPEEDY!==void 0&&kt.SC_DISABLE_SPEEDY!==""&&kt.SC_DISABLE_SPEEDY!=="false"&&kt.SC_DISABLE_SPEEDY),Iw={};function br(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var As=new Map,xa=new Map,Is=1,Uo=function(e){if(As.has(e))return As.get(e);for(;xa.has(Is);)Is++;var t=Is++;return As.set(e,t),xa.set(t,e),t},Dw=function(e,t){Is=t+1,As.set(e,t),xa.set(t,e)},vd=Object.freeze([]),mo=Object.freeze({});function cy(e,t,n){return n===void 0&&(n=mo),e.theme!==n.theme&&e.theme||t||n.theme}var dy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Bw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mw=/(^-|-$)/g;function lp(e){return e.replace(Bw,"-").replace(Mw,"")}var Uw=/(a)(d)/gi,up=function(e){return String.fromCharCode(e+(e>25?39:97))};function nc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=up(t%52)+n;return(up(t%52)+n).replace(Uw,"$1-$2")}var Ll,ir=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},fy=function(e){return ir(5381,e)};function wd(e){return nc(fy(e)>>>0)}function Vw(e){return e.displayName||e.name||"Component"}function Al(e){return typeof e=="string"&&!0}var py=typeof Symbol=="function"&&Symbol.for,hy=py?Symbol.for("react.memo"):60115,Ww=py?Symbol.for("react.forward_ref"):60112,Hw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},my={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qw=((Ll={})[Ww]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ll[hy]=my,Ll);function cp(e){return("type"in(t=e)&&t.type.$$typeof)===hy?my:"$$typeof"in e?qw[e.$$typeof]:Hw;var t}var Qw=Object.defineProperty,Yw=Object.getOwnPropertyNames,dp=Object.getOwnPropertySymbols,Kw=Object.getOwnPropertyDescriptor,Xw=Object.getPrototypeOf,fp=Object.prototype;function gy(e,t,n){if(typeof t!="string"){if(fp){var r=Xw(t);r&&r!==fp&&gy(e,r,n)}var o=Yw(t);dp&&(o=o.concat(dp(t)));for(var i=cp(e),s=cp(t),a=0;a<o.length;++a){var u=o[a];if(!(u in Gw||n&&n[u]||s&&u in s||i&&u in i)){var c=Kw(t,u);try{Qw(e,u,c)}catch{}}}}return e}function kr(e){return typeof e=="function"}function $d(e){return typeof e=="object"&&"styledComponentId"in e}function cr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function va(e,t){return e.join("")}function ji(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function rc(e,t,n){if(n===void 0&&(n=!1),!n&&!ji(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=rc(e[r],t[r]);else if(ji(t))for(var r in t)e[r]=rc(e[r],t[r]);return e}function Sd(e,t){Object.defineProperty(e,"toString",{value:t})}var Jw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw br(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),u=0,c=(s=0,n.length);s<c;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++,u++);u>0&&this._cGroup>t&&(this._cIndex+=u)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+=this.tag.getRule(s)+xd;return n},e}(),Zw="style[".concat(ho,"][").concat(uy,'="').concat(Ka,'"]'),e$=new RegExp("^".concat(ho,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),pp=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},oc=function(e){if(!e)return document;if(pp(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(pp(t))return t}return document},t$=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},n$=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(xd),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var u=a.match(e$);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(Dw(d,c),t$(e,d,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}},Il=function(e){for(var t=oc(e.options.target).querySelectorAll(Zw),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(ho)!==ly&&(n$(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function r$(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var u=Array.from(a.querySelectorAll("style[".concat(ho,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(ho,ly),r.setAttribute(uy,Ka);var s=r$();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},o$=function(){function e(t){this.element=yy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,i=0,s=o.length;i<s;i++){var a=o[i];if(a.ownerNode===n)return a}throw br(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),i$=function(){function e(t){this.element=yy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),s$=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),hp=ni,a$={isServer:!ni,useCSSOMInjection:!Aw},wa=function(){function e(t,n,r){t===void 0&&(t=mo),n===void 0&&(n={});var o=this;this.options=He(He({},a$),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ni&&hp&&(hp=!1,Il(this)),Sd(this,function(){return function(i){for(var s=i.getTag(),a=s.length,u="",c=function(p){var y=function(m){return xa.get(m)}(p);if(y===void 0)return"continue";var $=i.names.get(y);if($===void 0||!$.size)return"continue";var g=s.getGroup(p);if(g.length===0)return"continue";var w=ho+".g"+p+'[id="'+y+'"]',b="";$.forEach(function(m){m.length>0&&(b+=m+",")}),u+=g+w+'{content:"'+b+'"}'+xd},d=0;d<a;d++)c(d);return u}(o)})}return e.registerId=function(t){return Uo(t)},e.prototype.rehydrate=function(){!this.server&&ni&&Il(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(He(He({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ni&&t.target!==this.options.target&&oc(this.options.target)!==oc(t.target)&&Il(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new s$(o):r?new o$(o):new i$(o)}(this.options),new Jw(t)));var t},e.prototype.hasNameForId=function(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o},e.prototype.registerName=function(t,n){Uo(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Uo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Uo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),l$=/&/g,fn=47,sr=42;function mp(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,o=!1,i=0;i<t;i++){var s=e.charCodeAt(i);if(r!==0||o||s!==fn||e.charCodeAt(i+1)!==sr)if(o)s===sr&&e.charCodeAt(i+1)===fn&&(o=!1,i++);else if(s!==34&&s!==39||i!==0&&e.charCodeAt(i-1)===92){if(r===0){if(s===123)n++;else if(s===125&&--n<0)return!0}}else r===0?r=s:r===s&&(r=0);else o=!0,i++}return n!==0||r!==0}function xy(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=xy(n.children,t)),n})}function u$(e){var t,n,r,o=mo,i=o.options,s=i===void 0?mo:i,a=o.plugins,u=a===void 0?vd:a,c=function(g,w,b){return b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(t):g},d=u.slice();d.push(function(g){g.type===Ga&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(l$,n).replace(r,c))}),s.prefix&&d.push(Ow),d.push(zw);var p=[],y=Fw(d.concat(Nw(function(g){return p.push(g)}))),$=function(g,w,b,m){w===void 0&&(w=""),b===void 0&&(b=""),m===void 0&&(m="&"),t=m,n=w,r=void 0;var f=function(v){if(!mp(v))return v;for(var k=v.length,R="",E=0,_=0,O=0,I=!1,W=0;W<k;W++){var B=v.charCodeAt(W);if(O!==0||I||B!==fn||v.charCodeAt(W+1)!==sr)if(I)B===sr&&v.charCodeAt(W+1)===fn&&(I=!1,W++);else if(B!==34&&B!==39||W!==0&&v.charCodeAt(W-1)===92){if(O===0)if(B===123)_++;else if(B===125){if(--_<0){for(var H=W+1;H<k;){var z=v.charCodeAt(H);if(z===59||z===10)break;H++}H<k&&v.charCodeAt(H)===59&&H++,_=0,W=H-1,E=H;continue}_===0&&(R+=v.substring(E,W+1),E=W+1)}else B===59&&_===0&&(R+=v.substring(E,W+1),E=W+1)}else O===0?O=B:O===B&&(O=0);else I=!0,W++}if(E<k){var ee=v.substring(E);mp(ee)||(R+=ee)}return R}(function(v){if(v.indexOf("//")===-1)return v;for(var k=v.length,R=[],E=0,_=0,O=0,I=0;_<k;){var W=v.charCodeAt(_);if(W!==34&&W!==39||_!==0&&v.charCodeAt(_-1)===92)if(O===0)if(W===fn&&_+1<k&&v.charCodeAt(_+1)===sr){for(_+=2;_+1<k&&(v.charCodeAt(_)!==sr||v.charCodeAt(_+1)!==fn);)_++;_+=2}else if(W===40&&_>=3&&(32|v.charCodeAt(_-1))==108&&(32|v.charCodeAt(_-2))==114&&(32|v.charCodeAt(_-3))==117)I=1,_++;else if(I>0)W===41?I--:W===40&&I++,_++;else if(W===sr&&_+1<k&&v.charCodeAt(_+1)===fn)_>E&&R.push(v.substring(E,_)),E=_+=2;else if(W===fn&&_+1<k&&v.charCodeAt(_+1)===fn){for(_>E&&R.push(v.substring(E,_));_<k&&v.charCodeAt(_)!==10;)_++;E=_}else _++;else _++;else O===0?O=W:O===W&&(O=0),_++}return E===0?v:(E<k&&R.push(v.substring(E)),R.join(""))}(g)),h=Pw(b||w?"".concat(b," ").concat(w," { ").concat(f," }"):f);return s.namespace&&(h=xy(h,s.namespace)),p=[],ya(h,y),p};return $.hash=u.length?u.reduce(function(g,w){return w.name||br(15),ir(g,w.name)},5381).toString():"",$}var c$=new wa,ic=u$(),vy=Q.createContext({shouldForwardProp:void 0,styleSheet:c$,stylis:ic});vy.Consumer;Q.createContext(void 0);function sc(){return Q.useContext(vy)}var wy=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ic);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Sd(this,function(){throw br(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ic),this.name+t.hash},e}();function d$(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Lw||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var f$=function(e){return e>="A"&&e<="Z"};function gp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;f$(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var $y=function(e){return e==null||e===!1||e===""},Sy=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!$y(r)&&(Array.isArray(r)&&r.isCss||kr(r)?t.push("".concat(gp(n),":"),r,";"):ji(r)?t.push.apply(t,fo(fo(["".concat(n," {")],Sy(r),!1),["}"],!1)):t.push("".concat(gp(n),": ").concat(d$(n,r),";")))}return t};function Hn(e,t,n,r,o){if(o===void 0&&(o=[]),typeof e=="string")return e&&o.push(e),o;if($y(e))return o;if($d(e))return o.push(".".concat(e.styledComponentId)),o;if(kr(e)){if(!kr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return o.push(e),o;var i=e(t);return Hn(i,t,n,r,o)}var s;if(e instanceof wy)return n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o;if(ji(e)){for(var a=Sy(e),u=0;u<a.length;u++)o.push(a[u]);return o}if(!Array.isArray(e))return o.push(e.toString()),o;for(u=0;u<e.length;u++)Hn(e[u],t,n,r,o);return o}function by(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(kr(n)&&!$d(n))return!1}return!0}var p$=fy(Ka),h$=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&by(t),this.componentId=n,this.baseHash=ir(p$,n),this.baseStyle=r,wa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=cr(o,this.staticRulesId);else{var i=va(Hn(this.rules,t,n,r)),s=nc(ir(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=cr(o,s),this.staticRulesId=s}else{for(var u=ir(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")c+=p;else if(p){var y=va(Hn(p,t,n,r));u=ir(ir(u,String(d)),y),c+=y}}if(c){var $=nc(u>>>0);if(!n.hasNameForId(this.componentId,$)){var g=r(c,".".concat($),void 0,this.componentId);n.insertRules(this.componentId,$,g)}o=cr(o,$)}}return{className:o,css:typeof window>"u"?n.getTag().getGroup(Uo(this.componentId)):""}},e}(),Ri=Q.createContext(void 0);Ri.Consumer;function m$(e){var t=Q.useContext(Ri),n=Q.useMemo(function(){return function(r,o){if(!r)throw br(14);if(kr(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw br(8);return o?He(He({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?Q.createElement(Ri.Provider,{value:n},e.children):null}var Dl={};function g$(e,t,n){var r=$d(e),o=e,i=!Al(e),s=t.attrs,a=s===void 0?vd:s,u=t.componentId,c=u===void 0?function(v,k){var R=typeof v!="string"?"sc":lp(v);Dl[R]=(Dl[R]||0)+1;var E="".concat(R,"-").concat(wd(Ka+R+Dl[R]));return k?"".concat(k,"-").concat(E):E}(t.displayName,t.parentComponentId):u,d=t.displayName,p=d===void 0?function(v){return Al(v)?"styled.".concat(v):"Styled(".concat(Vw(v),")")}(e):d,y=t.displayName&&t.componentId?"".concat(lp(t.displayName),"-").concat(t.componentId):t.componentId||c,$=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;g=function(v,k){return w(v,k)&&b(v,k)}}else g=w}var m=new h$(n,y,r?o.componentStyle:void 0);function f(v,k){return function(R,E,_){var O=R.attrs,I=R.componentStyle,W=R.defaultProps,B=R.foldedComponentIds,H=R.styledComponentId,z=R.target,ee=Q.useContext(Ri),Y=sc(),U=R.shouldForwardProp||Y.shouldForwardProp,F=cy(E,ee,W)||mo,N=function(he,Re,Z){for(var Qe,Fe=He(He({},Re),{className:void 0,theme:Z}),Ye=0;Ye<he.length;Ye+=1){var Pr=kr(Qe=he[Ye])?Qe(Fe):Qe;for(var an in Pr)an==="className"?Fe.className=cr(Fe.className,Pr[an]):an==="style"?Fe.style=He(He({},Fe.style),Pr[an]):Fe[an]=Pr[an]}return"className"in Re&&typeof Re.className=="string"&&(Fe.className=cr(Fe.className,Re.className)),Fe}(O,E,F),G=N.as||z,X={};for(var J in N)N[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&N.theme===F||(J==="forwardedAs"?X.as=N.forwardedAs:U&&!U(J,G)||(X[J]=N[J]));var pe=function(he,Re){var Z=sc(),Qe=he.generateAndInjectStyles(Re,Z.styleSheet,Z.stylis);return Qe}(I,N),le=pe.className,ge=cr(B,H);return le&&(ge+=" "+le),N.className&&(ge+=" "+N.className),X[Al(G)&&!dy.has(G)?"class":"className"]=ge,_&&(X.ref=_),C.createElement(G,X)}(h,v,k)}f.displayName=p;var h=Q.forwardRef(f);return h.attrs=$,h.componentStyle=m,h.displayName=p,h.shouldForwardProp=g,h.foldedComponentIds=r?cr(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=y,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(k){for(var R=[],E=1;E<arguments.length;E++)R[E-1]=arguments[E];for(var _=0,O=R;_<O.length;_++)rc(k,O[_],!0);return k}({},o.defaultProps,v):v}}),Sd(h,function(){return".".concat(h.styledComponentId)}),i&&gy(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function yp(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var xp=function(e){return Object.assign(e,{isCss:!0})};function Ii(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(kr(e)||ji(e))return xp(Hn(yp(vd,fo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Hn(r):xp(Hn(yp(r,t)))}function ac(e,t,n){if(n===void 0&&(n=mo),!t)throw br(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Ii.apply(void 0,fo([o],i,!1)))};return r.attrs=function(o){return ac(e,t,He(He({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ac(e,t,He(He({},n),o))},r}var ky=function(e){return ac(g$,e)},x=ky;dy.forEach(function(e){x[e]=ky(e)});var y$=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=by(t),wa.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(va(Hn(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&wa.registerId(this.componentId+t);var i=this.componentId+t;this.isStatic?r.hasNameForId(i,i)||this.createStyles(t,n,r,o):(this.removeStyles(t,r),this.createStyles(t,n,r,o))},e}();function x$(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ii.apply(void 0,fo([e],t,!1)),o="sc-global-".concat(wd(JSON.stringify(r))),i=new y$(r,o),s=new WeakMap,a=function(c){var d=sc(),p=Q.useContext(Ri),y=s.get(d.styleSheet);return y===void 0&&(y=d.styleSheet.allocateGSInstance(o),s.set(d.styleSheet,y)),(typeof window>"u"||!d.styleSheet.server)&&u(y,c,d.styleSheet,p,d.stylis),Q.useLayoutEffect(function(){return d.styleSheet.server||u(y,c,d.styleSheet,p,d.stylis),function(){var $;i.removeStyles(y,d.styleSheet),$=d.styleSheet.options.target,typeof document<"u"&&($??document).querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(g){return g.remove()})}},[y,c,d.styleSheet,p,d.stylis]),null};function u(c,d,p,y,$){if(i.isStatic)i.renderStyles(c,Iw,p,$);else{var g=He(He({},d),{theme:cy(d,y,a.defaultProps)});i.renderStyles(c,g,p,$)}}return Q.memo(a)}function qe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=va(Ii.apply(void 0,fo([e],t,!1))),o=wd(r);return new wy(o,r)}function Ey(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Ey(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function On(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Ey(e))&&(r&&(r+=" "),r+=t);return r}const Pi=e=>typeof e=="number"&&!isNaN(e),mr=e=>typeof e=="string",jt=e=>typeof e=="function",Ds=e=>mr(e)||jt(e)?e:null,lc=e=>C.isValidElement(e)||mr(e)||jt(e)||Pi(e);function v$(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function Xa(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(s){let{children:a,position:u,preventExitTransition:c,done:d,nodeRef:p,isIn:y,playToast:$}=s;const g=r?`${t}--${u}`:t,w=r?`${n}--${u}`:n,b=C.useRef(0);return C.useLayoutEffect(()=>{const m=p.current,f=g.split(" "),h=v=>{v.target===p.current&&($(),m.removeEventListener("animationend",h),m.removeEventListener("animationcancel",h),b.current===0&&v.type!=="animationcancel"&&m.classList.remove(...f))};m.classList.add(...f),m.addEventListener("animationend",h),m.addEventListener("animationcancel",h)},[]),C.useEffect(()=>{const m=p.current,f=()=>{m.removeEventListener("animationend",f),o?v$(m,d,i):d()};y||(c?f():(b.current=1,m.className+=` ${w}`,m.addEventListener("animationend",f)))},[y]),Q.createElement(Q.Fragment,null,a)}}function vp(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const dt=new Map;let Ti=[];const uc=new Set,w$=e=>uc.forEach(t=>t(e)),_y=()=>dt.size>0;function Cy(e,t){var n;if(t)return!((n=dt.get(t))==null||!n.isToastActive(e));let r=!1;return dt.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function jy(e,t){lc(e)&&(_y()||Ti.push({content:e,options:t}),dt.forEach(n=>{n.buildToast(e,t)}))}function wp(e,t){dt.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function $$(e){const{subscribe:t,getSnapshot:n,setProps:r}=C.useRef(function(i){const s=i.containerId||1;return{subscribe(a){const u=function(d,p,y){let $=1,g=0,w=[],b=[],m=[],f=p;const h=new Map,v=new Set,k=()=>{m=Array.from(h.values()),v.forEach(_=>_())},R=_=>{b=_==null?[]:b.filter(O=>O!==_),k()},E=_=>{const{toastId:O,onOpen:I,updateId:W,children:B}=_.props,H=W==null;_.staleId&&h.delete(_.staleId),h.set(O,_),b=[...b,_.props.toastId].filter(z=>z!==_.staleId),k(),y(vp(_,H?"added":"updated")),H&&jt(I)&&I(C.isValidElement(B)&&B.props)};return{id:d,props:f,observe:_=>(v.add(_),()=>v.delete(_)),toggle:(_,O)=>{h.forEach(I=>{O!=null&&O!==I.props.toastId||jt(I.toggle)&&I.toggle(_)})},removeToast:R,toasts:h,clearQueue:()=>{g-=w.length,w=[]},buildToast:(_,O)=>{if((J=>{let{containerId:pe,toastId:le,updateId:ge}=J;const he=pe?pe!==d:d!==1,Re=h.has(le)&&ge==null;return he||Re})(O))return;const{toastId:I,updateId:W,data:B,staleId:H,delay:z}=O,ee=()=>{R(I)},Y=W==null;Y&&g++;const U={...f,style:f.toastStyle,key:$++,...Object.fromEntries(Object.entries(O).filter(J=>{let[pe,le]=J;return le!=null})),toastId:I,updateId:W,data:B,closeToast:ee,isIn:!1,className:Ds(O.className||f.toastClassName),bodyClassName:Ds(O.bodyClassName||f.bodyClassName),progressClassName:Ds(O.progressClassName||f.progressClassName),autoClose:!O.isLoading&&(F=O.autoClose,N=f.autoClose,F===!1||Pi(F)&&F>0?F:N),deleteToast(){const J=h.get(I),{onClose:pe,children:le}=J.props;jt(pe)&&pe(C.isValidElement(le)&&le.props),y(vp(J,"removed")),h.delete(I),g--,g<0&&(g=0),w.length>0?E(w.shift()):k()}};var F,N;U.closeButton=f.closeButton,O.closeButton===!1||lc(O.closeButton)?U.closeButton=O.closeButton:O.closeButton===!0&&(U.closeButton=!lc(f.closeButton)||f.closeButton);let G=_;C.isValidElement(_)&&!mr(_.type)?G=C.cloneElement(_,{closeToast:ee,toastProps:U,data:B}):jt(_)&&(G=_({closeToast:ee,toastProps:U,data:B}));const X={content:G,props:U,staleId:H};f.limit&&f.limit>0&&g>f.limit&&Y?w.push(X):Pi(z)?setTimeout(()=>{E(X)},z):E(X)},setProps(_){f=_},setToggle:(_,O)=>{h.get(_).toggle=O},isToastActive:_=>b.some(O=>O===_),getSnapshot:()=>m}}(s,i,w$);dt.set(s,u);const c=u.observe(a);return Ti.forEach(d=>jy(d.content,d.options)),Ti=[],()=>{c(),dt.delete(s)}},setProps(a){var u;(u=dt.get(s))==null||u.setProps(a)},getSnapshot(){var a;return(a=dt.get(s))==null?void 0:a.getSnapshot()}}}(e)).current;r(e);const o=C.useSyncExternalStore(t,n,n);return{getToastToRender:function(i){if(!o)return[];const s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(a=>{const{position:u}=a.props;s.has(u)||s.set(u,[]),s.get(u).push(a)}),Array.from(s,a=>i(a[0],a[1]))},isToastActive:Cy,count:o==null?void 0:o.length}}function S$(e){const[t,n]=C.useState(!1),[r,o]=C.useState(!1),i=C.useRef(null),s=C.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:p}=e;var y,$;function g(){n(!0)}function w(){n(!1)}function b(h){const v=i.current;s.canDrag&&v&&(s.didMove=!0,t&&w(),s.delta=e.draggableDirection==="x"?h.clientX-s.start:h.clientY-s.start,s.start!==h.clientX&&(s.canCloseOnClick=!1),v.style.transform=`translate3d(${e.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,v.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function m(){document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",m);const h=i.current;if(s.canDrag&&s.didMove&&h){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();h.style.transition="transform 0.2s, opacity 0.2s",h.style.removeProperty("transform"),h.style.removeProperty("opacity")}}($=dt.get((y={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||$.setToggle(y.id,y.fn),C.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||w(),window.addEventListener("focus",g),window.addEventListener("blur",w),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",w)}},[e.pauseOnFocusLoss]);const f={onPointerDown:function(h){if(e.draggable===!0||e.draggable===h.pointerType){s.didMove=!1,document.addEventListener("pointermove",b),document.addEventListener("pointerup",m);const v=i.current;s.canCloseOnClick=!0,s.canDrag=!0,v.style.transition="none",e.draggableDirection==="x"?(s.start=h.clientX,s.removalDistance=v.offsetWidth*(e.draggablePercent/100)):(s.start=h.clientY,s.removalDistance=v.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(h){const{top:v,bottom:k,left:R,right:E}=i.current.getBoundingClientRect();h.nativeEvent.type!=="touchend"&&e.pauseOnHover&&h.clientX>=R&&h.clientX<=E&&h.clientY>=v&&h.clientY<=k?w():g()}};return a&&u&&(f.onMouseEnter=w,e.stacked||(f.onMouseLeave=g)),p&&(f.onClick=h=>{d&&d(h),s.canCloseOnClick&&c()}),{playToast:g,pauseToast:w,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:f}}function b$(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:s,style:a,controlledProgress:u,progress:c,rtl:d,isIn:p,theme:y}=e;const $=i||u&&c===0,g={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};u&&(g.transform=`scaleX(${c})`);const w=On("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":d}),b=jt(s)?s({rtl:d,type:o,defaultClassName:w}):On(w,s),m={[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{p&&r()}};return Q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":$},Q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${y} Toastify__progress-bar--${o}`}),Q.createElement("div",{role:"progressbar","aria-hidden":$?"true":"false","aria-label":"notification timer",className:b,style:g,...m}))}let k$=1;const Ry=()=>""+k$++;function E$(e){return e&&(mr(e.toastId)||Pi(e.toastId))?e.toastId:Ry()}function ri(e,t){return jy(e,t),t.toastId}function $a(e,t){return{...t,type:t&&t.type||e,toastId:E$(t)}}function us(e){return(t,n)=>ri(t,$a(e,n))}function re(e,t){return ri(e,$a("default",t))}re.loading=(e,t)=>ri(e,$a("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),re.promise=function(e,t,n){let r,{pending:o,error:i,success:s}=t;o&&(r=mr(o)?re.loading(o,n):re.loading(o.render,{...n,...o}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(d,p,y)=>{if(p==null)return void re.dismiss(r);const $={type:d,...a,...n,data:y},g=mr(p)?{render:p}:p;return r?re.update(r,{...$,...g}):re(g.render,{...$,...g}),y},c=jt(e)?e():e;return c.then(d=>u("success",s,d)).catch(d=>u("error",i,d)),c},re.success=us("success"),re.info=us("info"),re.error=us("error"),re.warning=us("warning"),re.warn=re.warning,re.dark=(e,t)=>ri(e,$a("default",{theme:"dark",...t})),re.dismiss=function(e){(function(t){var n;if(_y()){if(t==null||mr(n=t)||Pi(n))dt.forEach(r=>{r.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const r=dt.get(t.containerId);r?r.removeToast(t.id):dt.forEach(o=>{o.removeToast(t.id)})}}else Ti=Ti.filter(r=>t!=null&&r.options.toastId!==t)})(e)},re.clearWaitingQueue=function(e){e===void 0&&(e={}),dt.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},re.isActive=Cy,re.update=function(e,t){t===void 0&&(t={});const n=((r,o)=>{var i;let{containerId:s}=o;return(i=dt.get(s||1))==null?void 0:i.toasts.get(r)})(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:Ry()};i.toastId!==e&&(i.staleId=e);const s=i.render||o;delete i.render,ri(s,i)}},re.done=e=>{re.update(e,{progress:1})},re.onChange=function(e){return uc.add(e),()=>{uc.delete(e)}},re.play=e=>wp(!0,e),re.pause=e=>wp(!1,e);const _$=typeof window<"u"?C.useLayoutEffect:C.useEffect,cs=e=>{let{theme:t,type:n,isLoading:r,...o}=e;return Q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},Bl={info:function(e){return Q.createElement(cs,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return Q.createElement(cs,{...e},Q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return Q.createElement(cs,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return Q.createElement(cs,{...e},Q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return Q.createElement("div",{className:"Toastify__spinner"})}},C$=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=S$(e),{closeButton:s,children:a,autoClose:u,onClick:c,type:d,hideProgressBar:p,closeToast:y,transition:$,position:g,className:w,style:b,bodyClassName:m,bodyStyle:f,progressClassName:h,progressStyle:v,updateId:k,role:R,progress:E,rtl:_,toastId:O,deleteToast:I,isIn:W,isLoading:B,closeOnClick:H,theme:z}=e,ee=On("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":_},{"Toastify__toast--close-on-click":H}),Y=jt(w)?w({rtl:_,position:g,type:d,defaultClassName:ee}):On(ee,w),U=function(X){let{theme:J,type:pe,isLoading:le,icon:ge}=X,he=null;const Re={theme:J,type:pe};return ge===!1||(jt(ge)?he=ge({...Re,isLoading:le}):C.isValidElement(ge)?he=C.cloneElement(ge,Re):le?he=Bl.spinner():(Z=>Z in Bl)(pe)&&(he=Bl[pe](Re))),he}(e),F=!!E||!u,N={closeToast:y,type:d,theme:z};let G=null;return s===!1||(G=jt(s)?s(N):C.isValidElement(s)?C.cloneElement(s,N):function(X){let{closeToast:J,theme:pe,ariaLabel:le="close"}=X;return Q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${pe}`,type:"button",onClick:ge=>{ge.stopPropagation(),J(ge)},"aria-label":le},Q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(N)),Q.createElement($,{isIn:W,done:I,position:g,preventExitTransition:n,nodeRef:r,playToast:i},Q.createElement("div",{id:O,onClick:c,"data-in":W,className:Y,...o,style:b,ref:r},Q.createElement("div",{...W&&{role:R},className:jt(m)?m({type:d}):On("Toastify__toast-body",m),style:f},U!=null&&Q.createElement("div",{className:On("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!B})},U),Q.createElement("div",null,a)),G,Q.createElement(b$,{...k&&!F?{key:`pb-${k}`}:{},rtl:_,theme:z,delay:u,isRunning:t,isIn:W,closeToast:y,hide:p,type:d,style:v,className:h,controlledProgress:F,progress:E||0})))},Ja=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},j$=Xa(Ja("bounce",!0));Xa(Ja("slide",!0));Xa(Ja("zoom"));Xa(Ja("flip"));const R$={position:"top-right",transition:j$,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function P$(e){let t={...R$,...e};const n=e.stacked,[r,o]=C.useState(!0),i=C.useRef(null),{getToastToRender:s,isToastActive:a,count:u}=$$(t),{className:c,style:d,rtl:p,containerId:y}=t;function $(w){const b=On("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":p});return jt(c)?c({position:w,rtl:p,defaultClassName:b}):On(b,Ds(c))}function g(){n&&(o(!0),re.play())}return _$(()=>{if(n){var w;const b=i.current.querySelectorAll('[data-in="true"]'),m=12,f=(w=t.position)==null?void 0:w.includes("top");let h=0,v=0;Array.from(b).reverse().forEach((k,R)=>{const E=k;E.classList.add("Toastify__toast--stacked"),R>0&&(E.dataset.collapsed=`${r}`),E.dataset.pos||(E.dataset.pos=f?"top":"bot");const _=h*(r?.2:1)+(r?0:m*R);E.style.setProperty("--y",`${f?_:-1*_}px`),E.style.setProperty("--g",`${m}`),E.style.setProperty("--s",""+(1-(r?v:0))),h+=E.offsetHeight,v+=.025})}},[r,u,n]),Q.createElement("div",{ref:i,className:"Toastify",id:y,onMouseEnter:()=>{n&&(o(!1),re.pause())},onMouseLeave:g},s((w,b)=>{const m=b.length?{...d}:{...d,pointerEvents:"none"};return Q.createElement("div",{className:$(w),style:m,key:`container-${w}`},b.map(f=>{let{content:h,props:v}=f;return Q.createElement(C$,{...v,stacked:n,collapseAll:g,isIn:a(v.toastId,v.containerId),style:v.style,key:`toast-${v.key}`},h)}))}))}const ie={primary:{50:"#fdf3e7",100:"#fae0c3",200:"#f5c28a",300:"#eda04e",400:"#e08530",500:"#C4671A",600:"#B45A14",700:"#96480f",800:"#7a3a0c",900:"#5e2c08"},neutral:{50:"#faf7f5",100:"#f2ece6",200:"#e4d9cf",300:"#cfc0b0",400:"#b5a090",500:"#96806e",600:"#7a6455",700:"#5e4d42",800:"#3d3028",900:"#231b15",950:"#130e0a"},success:{light:"#d1fae5",base:"#059669",dark:"#065f46"},warning:{light:"#fef3c7",base:"#d97706",dark:"#92400e"},error:{light:"#fee2e2",base:"#dc2626",dark:"#991b1b"},info:{light:"#dbeafe",base:"#2563eb",dark:"#1e40af"},white:"#ffffff",black:"#000000",transparent:"transparent"},T$={fontFamily:{sans:"'Sora', 'Helvetica Neue', Arial, sans-serif",serif:"'Playfair Display', Georgia, serif",mono:"'JetBrains Mono', 'Fira Code', monospace"},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem"},fontWeight:{regular:400,medium:500,semibold:600,bold:700},lineHeight:{tight:1.25,snug:1.375,normal:1.5,relaxed:1.625}},z$={0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem"},F$={none:"0",sm:"0.25rem",base:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},N$={sm:"0 1px 2px 0 rgba(35, 27, 21, 0.08)",base:"0 2px 4px 0 rgba(35, 27, 21, 0.10)",md:"0 4px 12px 0 rgba(35, 27, 21, 0.12)",lg:"0 8px 24px 0 rgba(35, 27, 21, 0.15)",xl:"0 16px 48px 0 rgba(35, 27, 21, 0.18)",amber:"0 4px 20px 0 rgba(180, 90, 20, 0.35)"},O$={fast:"150ms ease",base:"200ms ease",slow:"300ms ease",slower:"400ms cubic-bezier(0.4, 0, 0.2, 1)"},L$={base:0,raised:10,dropdown:100,sticky:200,overlay:300,modal:400,toast:500},$p={colors:ie,typography:T$,spacing:z$,borderRadius:F$,shadows:N$,transitions:O$,zIndex:L$,brand:{primary:ie.primary[600],primaryHover:ie.primary[700],primaryLight:ie.primary[100],primaryGhost:ie.primary[50]},surface:{page:ie.neutral[50],card:ie.white,sidebar:ie.neutral[900],elevated:ie.white,overlay:"rgba(35, 27, 21, 0.55)"},text:{primary:ie.neutral[900],secondary:ie.neutral[600],muted:ie.neutral[400],inverse:ie.white,brand:ie.primary[600],onDark:ie.neutral[200]},border:{default:ie.neutral[200],strong:ie.neutral[300],focus:ie.primary[600],error:ie.error.base},feedback:{success:{bg:ie.success.light,text:ie.success.dark,border:ie.success.base,icon:ie.success.base},warning:{bg:ie.warning.light,text:ie.warning.dark,border:ie.warning.base,icon:ie.warning.base},error:{bg:ie.error.light,text:ie.error.dark,border:ie.error.base,icon:ie.error.base},info:{bg:ie.info.light,text:ie.info.dark,border:ie.info.base,icon:ie.info.base}}},A$=x$`
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
`;function Py(e,t){return function(){return e.apply(t,arguments)}}const{toString:I$}=Object.prototype,{getPrototypeOf:bd}=Object,{iterator:Za,toStringTag:Ty}=Symbol,el=(e=>t=>{const n=I$.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Jt=e=>(e=e.toLowerCase(),t=>el(t)===e),tl=e=>t=>typeof t===e,{isArray:bo}=Array,go=tl("undefined");function Di(e){return e!==null&&!go(e)&&e.constructor!==null&&!go(e.constructor)&&St(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const zy=Jt("ArrayBuffer");function D$(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&zy(e.buffer),t}const B$=tl("string"),St=tl("function"),Fy=tl("number"),Bi=e=>e!==null&&typeof e=="object",M$=e=>e===!0||e===!1,Bs=e=>{if(el(e)!=="object")return!1;const t=bd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ty in e)&&!(Za in e)},U$=e=>{if(!Bi(e)||Di(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},V$=Jt("Date"),W$=Jt("File"),H$=e=>!!(e&&typeof e.uri<"u"),G$=e=>e&&typeof e.getParts<"u",q$=Jt("Blob"),Q$=Jt("FileList"),Y$=e=>Bi(e)&&St(e.pipe);function K$(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Sp=K$(),bp=typeof Sp.FormData<"u"?Sp.FormData:void 0,X$=e=>{let t;return e&&(bp&&e instanceof bp||St(e.append)&&((t=el(e))==="formdata"||t==="object"&&St(e.toString)&&e.toString()==="[object FormData]"))},J$=Jt("URLSearchParams"),[Z$,eS,tS,nS]=["ReadableStream","Request","Response","Headers"].map(Jt),rS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Mi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),bo(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(Di(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function Ny(e,t){if(Di(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Oy=e=>!go(e)&&e!==dr;function cc(){const{caseless:e,skipUndefined:t}=Oy(this)&&this||{},n={},r=(o,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const s=e&&Ny(n,i)||i;Bs(n[s])&&Bs(o)?n[s]=cc(n[s],o):Bs(o)?n[s]=cc({},o):bo(o)?n[s]=o.slice():(!t||!go(o))&&(n[s]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Mi(arguments[o],r);return n}const oS=(e,t,n,{allOwnKeys:r}={})=>(Mi(t,(o,i)=>{n&&St(o)?Object.defineProperty(e,i,{value:Py(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),iS=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),sS=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},aS=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&bd(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},lS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},uS=e=>{if(!e)return null;if(bo(e))return e;let t=e.length;if(!Fy(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},cS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&bd(Uint8Array)),dS=(e,t)=>{const r=(e&&e[Za]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},fS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},pS=Jt("HTMLFormElement"),hS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),kp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mS=Jt("RegExp"),Ly=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Mi(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},gS=e=>{Ly(e,(t,n)=>{if(St(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(St(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yS=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return bo(e)?r(e):r(String(e).split(t)),n},xS=()=>{},vS=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function wS(e){return!!(e&&St(e.append)&&e[Ty]==="FormData"&&e[Za])}const $S=e=>{const t=new Array(10),n=(r,o)=>{if(Bi(r)){if(t.indexOf(r)>=0)return;if(Di(r))return r;if(!("toJSON"in r)){t[o]=r;const i=bo(r)?[]:{};return Mi(r,(s,a)=>{const u=n(s,o+1);!go(u)&&(i[a]=u)}),t[o]=void 0,i}}return r};return n(e,0)},SS=Jt("AsyncFunction"),bS=e=>e&&(Bi(e)||St(e))&&St(e.then)&&St(e.catch),Ay=((e,t)=>e?setImmediate:t?((n,r)=>(dr.addEventListener("message",({source:o,data:i})=>{o===dr&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),dr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",St(dr.postMessage)),kS=typeof queueMicrotask<"u"?queueMicrotask.bind(dr):typeof process<"u"&&process.nextTick||Ay,ES=e=>e!=null&&St(e[Za]),P={isArray:bo,isArrayBuffer:zy,isBuffer:Di,isFormData:X$,isArrayBufferView:D$,isString:B$,isNumber:Fy,isBoolean:M$,isObject:Bi,isPlainObject:Bs,isEmptyObject:U$,isReadableStream:Z$,isRequest:eS,isResponse:tS,isHeaders:nS,isUndefined:go,isDate:V$,isFile:W$,isReactNativeBlob:H$,isReactNative:G$,isBlob:q$,isRegExp:mS,isFunction:St,isStream:Y$,isURLSearchParams:J$,isTypedArray:cS,isFileList:Q$,forEach:Mi,merge:cc,extend:oS,trim:rS,stripBOM:iS,inherits:sS,toFlatObject:aS,kindOf:el,kindOfTest:Jt,endsWith:lS,toArray:uS,forEachEntry:dS,matchAll:fS,isHTMLForm:pS,hasOwnProperty:kp,hasOwnProp:kp,reduceDescriptors:Ly,freezeMethods:gS,toObjectSet:yS,toCamelCase:hS,noop:xS,toFiniteNumber:vS,findKey:Ny,global:dr,isContextDefined:Oy,isSpecCompliantForm:wS,toJSONObject:$S,isAsyncFn:SS,isThenable:bS,setImmediate:Ay,asap:kS,isIterable:ES};let te=class Iy extends Error{static from(t,n,r,o,i,s){const a=new Iy(t.message,n||t.code,r,o,i);return a.cause=t,a.name=t.name,t.status!=null&&a.status==null&&(a.status=t.status),s&&Object.assign(a,s),a}constructor(t,n,r,o,i){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),o&&(this.request=o),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}};te.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";te.ERR_BAD_OPTION="ERR_BAD_OPTION";te.ECONNABORTED="ECONNABORTED";te.ETIMEDOUT="ETIMEDOUT";te.ERR_NETWORK="ERR_NETWORK";te.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";te.ERR_DEPRECATED="ERR_DEPRECATED";te.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";te.ERR_BAD_REQUEST="ERR_BAD_REQUEST";te.ERR_CANCELED="ERR_CANCELED";te.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";te.ERR_INVALID_URL="ERR_INVALID_URL";const _S=null;function dc(e){return P.isPlainObject(e)||P.isArray(e)}function Dy(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function Ml(e,t,n){return e?e.concat(t).map(function(o,i){return o=Dy(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function CS(e){return P.isArray(e)&&!e.some(dc)}const jS=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function nl(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,b){return!P.isUndefined(b[w])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(o))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(P.isDate(g))return g.toISOString();if(P.isBoolean(g))return g.toString();if(!u&&P.isBlob(g))throw new te("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(g)||P.isTypedArray(g)?u&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,w,b){let m=g;if(P.isReactNative(t)&&P.isReactNativeBlob(g))return t.append(Ml(b,w,i),c(g)),!1;if(g&&!b&&typeof g=="object"){if(P.endsWith(w,"{}"))w=r?w:w.slice(0,-2),g=JSON.stringify(g);else if(P.isArray(g)&&CS(g)||(P.isFileList(g)||P.endsWith(w,"[]"))&&(m=P.toArray(g)))return w=Dy(w),m.forEach(function(h,v){!(P.isUndefined(h)||h===null)&&t.append(s===!0?Ml([w],v,i):s===null?w:w+"[]",c(h))}),!1}return dc(g)?!0:(t.append(Ml(b,w,i),c(g)),!1)}const p=[],y=Object.assign(jS,{defaultVisitor:d,convertValue:c,isVisitable:dc});function $(g,w){if(!P.isUndefined(g)){if(p.indexOf(g)!==-1)throw Error("Circular reference detected in "+w.join("."));p.push(g),P.forEach(g,function(m,f){(!(P.isUndefined(m)||m===null)&&o.call(t,m,P.isString(f)?f.trim():f,w,y))===!0&&$(m,w?w.concat(f):[f])}),p.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return $(e),t}function Ep(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function kd(e,t){this._pairs=[],e&&nl(e,this,t)}const By=kd.prototype;By.append=function(t,n){this._pairs.push([t,n])};By.toString=function(t){const n=t?function(r){return t.call(this,r,Ep)}:Ep;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function RS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function My(e,t,n){if(!t)return e;const r=n&&n.encode||RS,o=P.isFunction(n)?{serialize:n}:n,i=o&&o.serialize;let s;if(i?s=i(t,o):s=P.isURLSearchParams(t)?t.toString():new kd(t,o).toString(r),s){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class _p{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ed={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},PS=typeof URLSearchParams<"u"?URLSearchParams:kd,TS=typeof FormData<"u"?FormData:null,zS=typeof Blob<"u"?Blob:null,FS={isBrowser:!0,classes:{URLSearchParams:PS,FormData:TS,Blob:zS},protocols:["http","https","file","blob","url","data"]},_d=typeof window<"u"&&typeof document<"u",fc=typeof navigator=="object"&&navigator||void 0,NS=_d&&(!fc||["ReactNative","NativeScript","NS"].indexOf(fc.product)<0),OS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",LS=_d&&window.location.href||"http://localhost",AS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_d,hasStandardBrowserEnv:NS,hasStandardBrowserWebWorkerEnv:OS,navigator:fc,origin:LS},Symbol.toStringTag,{value:"Module"})),st={...AS,...FS};function IS(e,t){return nl(e,new st.classes.URLSearchParams,{visitor:function(n,r,o,i){return st.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function DS(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function BS(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Uy(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),u=i>=n.length;return s=!s&&P.isArray(o)?o.length:s,u?(P.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!P.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&P.isArray(o[s])&&(o[s]=BS(o[s])),!a)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,o)=>{t(DS(r),o,n,0)}),n}return null}function MS(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ui={transitional:Ed,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=P.isObject(t);if(i&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return o?JSON.stringify(Uy(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t)||P.isReadableStream(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return IS(t,this.formSerializer).toString();if((a=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return nl(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),MS(t)):t}],transformResponse:[function(t){const n=this.transitional||Ui.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(P.isResponse(t)||P.isReadableStream(t))return t;if(t&&P.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(a){if(s)throw a.name==="SyntaxError"?te.from(a,te.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:st.classes.FormData,Blob:st.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{Ui.headers[e]={}});const US=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),VS=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&US[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Cp=Symbol("internals");function zo(e){return e&&String(e).trim().toLowerCase()}function Ms(e){return e===!1||e==null?e:P.isArray(e)?e.map(Ms):String(e)}function WS(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const HS=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ul(e,t,n,r,o){if(P.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function GS(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function qS(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}let bt=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,u,c){const d=zo(u);if(!d)throw new Error("header name must be a non-empty string");const p=P.findKey(o,d);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||u]=Ms(a))}const s=(a,u)=>P.forEach(a,(c,d)=>i(c,d,u));if(P.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(P.isString(t)&&(t=t.trim())&&!HS(t))s(VS(t),n);else if(P.isObject(t)&&P.isIterable(t)){let a={},u,c;for(const d of t){if(!P.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[c=d[0]]=(u=a[c])?P.isArray(u)?[...u,d[1]]:[u,d[1]]:d[1]}s(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=zo(t),t){const r=P.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return WS(o);if(P.isFunction(n))return n.call(this,o,r);if(P.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=zo(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ul(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=zo(s),s){const a=P.findKey(r,s);a&&(!n||Ul(r,r[a],a,n))&&(delete r[a],o=!0)}}return P.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Ul(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return P.forEach(this,(o,i)=>{const s=P.findKey(r,i);if(s){n[s]=Ms(o),delete n[i];return}const a=t?GS(i):String(i).trim();a!==i&&delete n[i],n[a]=Ms(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Cp]=this[Cp]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=zo(s);r[a]||(qS(o,s),r[a]=!0)}return P.isArray(t)?t.forEach(i):i(t),this}};bt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(bt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});P.freezeMethods(bt);function Vl(e,t){const n=this||Ui,r=t||n,o=bt.from(r.headers);let i=r.data;return P.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Vy(e){return!!(e&&e.__CANCEL__)}let Vi=class extends te{constructor(t,n,r){super(t??"canceled",te.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function Wy(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function QS(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function YS(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=r[i];s||(s=c),n[o]=u,r[o]=c;let p=i,y=0;for(;p!==o;)y+=n[p++],p=p%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-s<t)return;const $=d&&c-d;return $?Math.round(y*1e3/$):void 0}}function KS(e,t){let n=0,r=1e3/t,o,i;const s=(c,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e(...c)};return[(...c)=>{const d=Date.now(),p=d-n;p>=r?s(c,d):(o=c,i||(i=setTimeout(()=>{i=null,s(o)},r-p)))},()=>o&&s(o)]}const Sa=(e,t,n=3)=>{let r=0;const o=YS(50,250);return KS(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,u=s-r,c=o(u),d=s<=a;r=s;const p={loaded:s,total:a,progress:a?s/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a&&d?(a-s)/c:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(p)},n)},jp=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Rp=e=>(...t)=>P.asap(()=>e(...t)),XS=st.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,st.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(st.origin),st.navigator&&/(msie|trident)/i.test(st.navigator.userAgent)):()=>!0,JS=st.hasStandardBrowserEnv?{write(e,t,n,r,o,i,s){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];P.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),P.isString(r)&&a.push(`path=${r}`),P.isString(o)&&a.push(`domain=${o}`),i===!0&&a.push("secure"),P.isString(s)&&a.push(`SameSite=${s}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ZS(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function eb(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Hy(e,t,n){let r=!ZS(t);return e&&(r||n==!1)?eb(e,t):t}const Pp=e=>e instanceof bt?{...e}:e;function Er(e,t){t=t||{};const n={};function r(c,d,p,y){return P.isPlainObject(c)&&P.isPlainObject(d)?P.merge.call({caseless:y},c,d):P.isPlainObject(d)?P.merge({},d):P.isArray(d)?d.slice():d}function o(c,d,p,y){if(P.isUndefined(d)){if(!P.isUndefined(c))return r(void 0,c,p,y)}else return r(c,d,p,y)}function i(c,d){if(!P.isUndefined(d))return r(void 0,d)}function s(c,d){if(P.isUndefined(d)){if(!P.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,p){if(p in t)return r(c,d);if(p in e)return r(void 0,c)}const u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,d,p)=>o(Pp(c),Pp(d),p,!0)};return P.forEach(Object.keys({...e,...t}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const p=P.hasOwnProp(u,d)?u[d]:o,y=p(e[d],t[d],d);P.isUndefined(y)&&p!==a||(n[d]=y)}),n}const Gy=e=>{const t=Er({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;if(t.headers=s=bt.from(s),t.url=My(Hy(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),P.isFormData(n)){if(st.hasStandardBrowserEnv||st.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(P.isFunction(n.getHeaders)){const u=n.getHeaders(),c=["content-type","content-length"];Object.entries(u).forEach(([d,p])=>{c.includes(d.toLowerCase())&&s.set(d,p)})}}if(st.hasStandardBrowserEnv&&(r&&P.isFunction(r)&&(r=r(t)),r||r!==!1&&XS(t.url))){const u=o&&i&&JS.read(i);u&&s.set(o,u)}return t},tb=typeof XMLHttpRequest<"u",nb=tb&&function(e){return new Promise(function(n,r){const o=Gy(e);let i=o.data;const s=bt.from(o.headers).normalize();let{responseType:a,onUploadProgress:u,onDownloadProgress:c}=o,d,p,y,$,g;function w(){$&&$(),g&&g(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function m(){if(!b)return;const h=bt.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),k={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:h,config:e,request:b};Wy(function(E){n(E),w()},function(E){r(E),w()},k),b=null}"onloadend"in b?b.onloadend=m:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(m)},b.onabort=function(){b&&(r(new te("Request aborted",te.ECONNABORTED,e,b)),b=null)},b.onerror=function(v){const k=v&&v.message?v.message:"Network Error",R=new te(k,te.ERR_NETWORK,e,b);R.event=v||null,r(R),b=null},b.ontimeout=function(){let v=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const k=o.transitional||Ed;o.timeoutErrorMessage&&(v=o.timeoutErrorMessage),r(new te(v,k.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,e,b)),b=null},i===void 0&&s.setContentType(null),"setRequestHeader"in b&&P.forEach(s.toJSON(),function(v,k){b.setRequestHeader(k,v)}),P.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),a&&a!=="json"&&(b.responseType=o.responseType),c&&([y,g]=Sa(c,!0),b.addEventListener("progress",y)),u&&b.upload&&([p,$]=Sa(u),b.upload.addEventListener("progress",p),b.upload.addEventListener("loadend",$)),(o.cancelToken||o.signal)&&(d=h=>{b&&(r(!h||h.type?new Vi(null,e,b):h),b.abort(),b=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const f=QS(o.url);if(f&&st.protocols.indexOf(f)===-1){r(new te("Unsupported protocol "+f+":",te.ERR_BAD_REQUEST,e));return}b.send(i||null)})},rb=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(c){if(!o){o=!0,a();const d=c instanceof Error?c:this.reason;r.abort(d instanceof te?d:new Vi(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new te(`timeout of ${t}ms exceeded`,te.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:u}=r;return u.unsubscribe=()=>P.asap(a),u}},ob=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},ib=async function*(e,t){for await(const n of sb(e))yield*ob(n,t)},sb=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Tp=(e,t,n,r)=>{const o=ib(e,t);let i=0,s,a=u=>{s||(s=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await o.next();if(c){a(),u.close();return}let p=d.byteLength;if(n){let y=i+=p;n(y)}u.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(u){return a(u),o.return()}},{highWaterMark:2})},zp=64*1024,{isFunction:ds}=P,ab=(({Request:e,Response:t})=>({Request:e,Response:t}))(P.global),{ReadableStream:Fp,TextEncoder:Np}=P.global,Op=(e,...t)=>{try{return!!e(...t)}catch{return!1}},lb=e=>{e=P.merge.call({skipUndefined:!0},ab,e);const{fetch:t,Request:n,Response:r}=e,o=t?ds(t):typeof fetch=="function",i=ds(n),s=ds(r);if(!o)return!1;const a=o&&ds(Fp),u=o&&(typeof Np=="function"?(g=>w=>g.encode(w))(new Np):async g=>new Uint8Array(await new n(g).arrayBuffer())),c=i&&a&&Op(()=>{let g=!1;const w=new n(st.origin,{body:new Fp,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!w}),d=s&&a&&Op(()=>P.isReadableStream(new r("").body)),p={stream:d&&(g=>g.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!p[g]&&(p[g]=(w,b)=>{let m=w&&w[g];if(m)return m.call(w);throw new te(`Response type '${g}' is not supported`,te.ERR_NOT_SUPPORT,b)})});const y=async g=>{if(g==null)return 0;if(P.isBlob(g))return g.size;if(P.isSpecCompliantForm(g))return(await new n(st.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(P.isArrayBufferView(g)||P.isArrayBuffer(g))return g.byteLength;if(P.isURLSearchParams(g)&&(g=g+""),P.isString(g))return(await u(g)).byteLength},$=async(g,w)=>{const b=P.toFiniteNumber(g.getContentLength());return b??y(w)};return async g=>{let{url:w,method:b,data:m,signal:f,cancelToken:h,timeout:v,onDownloadProgress:k,onUploadProgress:R,responseType:E,headers:_,withCredentials:O="same-origin",fetchOptions:I}=Gy(g),W=t||fetch;E=E?(E+"").toLowerCase():"text";let B=rb([f,h&&h.toAbortSignal()],v),H=null;const z=B&&B.unsubscribe&&(()=>{B.unsubscribe()});let ee;try{if(R&&c&&b!=="get"&&b!=="head"&&(ee=await $(_,m))!==0){let X=new n(w,{method:"POST",body:m,duplex:"half"}),J;if(P.isFormData(m)&&(J=X.headers.get("content-type"))&&_.setContentType(J),X.body){const[pe,le]=jp(ee,Sa(Rp(R)));m=Tp(X.body,zp,pe,le)}}P.isString(O)||(O=O?"include":"omit");const Y=i&&"credentials"in n.prototype,U={...I,signal:B,method:b.toUpperCase(),headers:_.normalize().toJSON(),body:m,duplex:"half",credentials:Y?O:void 0};H=i&&new n(w,U);let F=await(i?W(H,I):W(w,U));const N=d&&(E==="stream"||E==="response");if(d&&(k||N&&z)){const X={};["status","statusText","headers"].forEach(ge=>{X[ge]=F[ge]});const J=P.toFiniteNumber(F.headers.get("content-length")),[pe,le]=k&&jp(J,Sa(Rp(k),!0))||[];F=new r(Tp(F.body,zp,pe,()=>{le&&le(),z&&z()}),X)}E=E||"text";let G=await p[P.findKey(p,E)||"text"](F,g);return!N&&z&&z(),await new Promise((X,J)=>{Wy(X,J,{data:G,headers:bt.from(F.headers),status:F.status,statusText:F.statusText,config:g,request:H})})}catch(Y){throw z&&z(),Y&&Y.name==="TypeError"&&/Load failed|fetch/i.test(Y.message)?Object.assign(new te("Network Error",te.ERR_NETWORK,g,H,Y&&Y.response),{cause:Y.cause||Y}):te.from(Y,Y&&Y.code,g,H,Y&&Y.response)}}},ub=new Map,qy=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:o}=t,i=[r,o,n];let s=i.length,a=s,u,c,d=ub;for(;a--;)u=i[a],c=d.get(u),c===void 0&&d.set(u,c=a?new Map:lb(t)),d=c;return c};qy();const Cd={http:_S,xhr:nb,fetch:{get:qy}};P.forEach(Cd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Lp=e=>`- ${e}`,cb=e=>P.isFunction(e)||e===null||e===!1;function db(e,t){e=P.isArray(e)?e:[e];const{length:n}=e;let r,o;const i={};for(let s=0;s<n;s++){r=e[s];let a;if(o=r,!cb(r)&&(o=Cd[(a=String(r)).toLowerCase()],o===void 0))throw new te(`Unknown adapter '${a}'`);if(o&&(P.isFunction(o)||(o=o.get(t))))break;i[a||"#"+s]=o}if(!o){const s=Object.entries(i).map(([u,c])=>`adapter ${u} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?s.length>1?`since :
`+s.map(Lp).join(`
`):" "+Lp(s[0]):"as no adapter specified";throw new te("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return o}const Qy={getAdapter:db,adapters:Cd};function Wl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Vi(null,e)}function Ap(e){return Wl(e),e.headers=bt.from(e.headers),e.data=Vl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Qy.getAdapter(e.adapter||Ui.adapter,e)(e).then(function(r){return Wl(e),r.data=Vl.call(e,e.transformResponse,r),r.headers=bt.from(r.headers),r},function(r){return Vy(r)||(Wl(e),r&&r.response&&(r.response.data=Vl.call(e,e.transformResponse,r.response),r.response.headers=bt.from(r.response.headers))),Promise.reject(r)})}const Yy="1.13.6",rl={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{rl[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ip={};rl.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Yy+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new te(o(s," has been removed"+(n?" in "+n:"")),te.ERR_DEPRECATED);return n&&!Ip[s]&&(Ip[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};rl.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function fb(e,t,n){if(typeof e!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],u=a===void 0||s(a,i,e);if(u!==!0)throw new te("option "+i+" must be "+u,te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new te("Unknown option "+i,te.ERR_BAD_OPTION)}}const Us={assertOptions:fb,validators:rl},Ft=Us.validators;let gr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new _p,response:new _p}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Er(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Us.assertOptions(r,{silentJSONParsing:Ft.transitional(Ft.boolean),forcedJSONParsing:Ft.transitional(Ft.boolean),clarifyTimeoutError:Ft.transitional(Ft.boolean),legacyInterceptorReqResOrdering:Ft.transitional(Ft.boolean)},!1),o!=null&&(P.isFunction(o)?n.paramsSerializer={serialize:o}:Us.assertOptions(o,{encode:Ft.function,serialize:Ft.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Us.assertOptions(n,{baseUrl:Ft.spelling("baseURL"),withXsrfToken:Ft.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&P.merge(i.common,i[n.method]);i&&P.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=bt.concat(s,i);const a=[];let u=!0;this.interceptors.request.forEach(function(w){if(typeof w.runWhen=="function"&&w.runWhen(n)===!1)return;u=u&&w.synchronous;const b=n.transitional||Ed;b&&b.legacyInterceptorReqResOrdering?a.unshift(w.fulfilled,w.rejected):a.push(w.fulfilled,w.rejected)});const c=[];this.interceptors.response.forEach(function(w){c.push(w.fulfilled,w.rejected)});let d,p=0,y;if(!u){const g=[Ap.bind(this),void 0];for(g.unshift(...a),g.push(...c),y=g.length,d=Promise.resolve(n);p<y;)d=d.then(g[p++],g[p++]);return d}y=a.length;let $=n;for(;p<y;){const g=a[p++],w=a[p++];try{$=g($)}catch(b){w.call(this,b);break}}try{d=Ap.call(this,$)}catch(g){return Promise.reject(g)}for(p=0,y=c.length;p<y;)d=d.then(c[p++],c[p++]);return d}getUri(t){t=Er(this.defaults,t);const n=Hy(t.baseURL,t.url,t.allowAbsoluteUrls);return My(n,t.params,t.paramsSerializer)}};P.forEach(["delete","get","head","options"],function(t){gr.prototype[t]=function(n,r){return this.request(Er(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(Er(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}gr.prototype[t]=n(),gr.prototype[t+"Form"]=n(!0)});let pb=class Ky{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new Vi(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Ky(function(o){t=o}),cancel:t}}};function hb(e){return function(n){return e.apply(null,n)}}function mb(e){return P.isObject(e)&&e.isAxiosError===!0}const pc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(pc).forEach(([e,t])=>{pc[t]=e});function Xy(e){const t=new gr(e),n=Py(gr.prototype.request,t);return P.extend(n,gr.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Xy(Er(e,o))},n}const ze=Xy(Ui);ze.Axios=gr;ze.CanceledError=Vi;ze.CancelToken=pb;ze.isCancel=Vy;ze.VERSION=Yy;ze.toFormData=nl;ze.AxiosError=te;ze.Cancel=ze.CanceledError;ze.all=function(t){return Promise.all(t)};ze.spread=hb;ze.isAxiosError=mb;ze.mergeConfig=Er;ze.AxiosHeaders=bt;ze.formToJSON=e=>Uy(P.isHTMLForm(e)?new FormData(e):e);ze.getAdapter=Qy.getAdapter;ze.HttpStatusCode=pc;ze.default=ze;const{Axios:tC,AxiosError:nC,CanceledError:rC,isCancel:oC,CancelToken:iC,VERSION:sC,all:aC,Cancel:lC,isAxiosError:uC,spread:cC,toFormData:dC,AxiosHeaders:fC,HttpStatusCode:pC,formToJSON:hC,getAdapter:mC,mergeConfig:gC}=ze,Jy="https://bgrepresentacoes-api-production.up.railway.app/api/v1",yo={ACCESS_TOKEN:"bg:access_token",REFRESH_TOKEN:"bg:refresh_token"},Zy=()=>localStorage.getItem(yo.ACCESS_TOKEN),e0=()=>localStorage.getItem(yo.REFRESH_TOKEN),t0=({accessToken:e,refreshToken:t})=>{e&&localStorage.setItem(yo.ACCESS_TOKEN,e),t&&localStorage.setItem(yo.REFRESH_TOKEN,t)},ba=()=>{localStorage.removeItem(yo.ACCESS_TOKEN),localStorage.removeItem(yo.REFRESH_TOKEN)},Ze=ze.create({baseURL:Jy,timeout:15e3,headers:{"Content-Type":"application/json",Accept:"application/json"}});let fs=!1,hc=[];const Dp=(e,t=null)=>{hc.forEach(({resolve:n,reject:r})=>e?r(e):n(t)),hc=[]};Ze.interceptors.request.use(e=>{const t=Zy();return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));Ze.interceptors.response.use(e=>e,async e=>{var i,s;const t=e.config,n=((i=e.response)==null?void 0:i.status)===401,r=!t._retry,o=!((s=t.url)!=null&&s.includes("/auth/refresh"));if(n&&r&&o){if(t._retry=!0,fs)return new Promise((u,c)=>{hc.push({resolve:u,reject:c})}).then(u=>(t.headers.Authorization=`Bearer ${u}`,Ze(t)));fs=!0;const a=e0();if(!a)return fs=!1,ba(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(e);try{const{data:u}=await ze.post(`${Jy}/auth/refresh`,{refreshToken:a},{headers:{"Content-Type":"application/json"}}),c=u.data??u,d=c.token??c.accessToken,p=c.refreshToken;if(!d)throw new Error("Refresh não retornou accessToken");return t0({accessToken:d,refreshToken:p}),Dp(null,d),t.headers.Authorization=`Bearer ${d}`,Ze(t)}catch(u){return Dp(u,null),ba(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(u)}finally{fs=!1}}return Promise.reject(e)});const Qn=(e,t="Ocorreu um erro inesperado.")=>{var n,r,o,i;return((r=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:r.message)??((i=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:i.error)??(e==null?void 0:e.message)??t},ot={INIT:"INIT",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGOUT:"LOGOUT",PASSWORD_CHANGED:"PASSWORD_CHANGED",UPDATE_USER:"UPDATE_USER",SET_LOADING:"SET_LOADING"},n0={user:null,isAuthenticated:!1,isLoading:!0,mustChangePassword:!1};function gb(e,{type:t,payload:n}){switch(t){case ot.INIT:return{...e,user:n.user??null,isAuthenticated:!!n.user,isLoading:!1,mustChangePassword:n.mustChangePassword??!1};case ot.LOGIN_SUCCESS:return{...e,user:n.user,isAuthenticated:!0,isLoading:!1,mustChangePassword:n.mustChangePassword??!1};case ot.LOGOUT:return{...n0,isLoading:!1};case ot.PASSWORD_CHANGED:return{...e,mustChangePassword:!1};case ot.UPDATE_USER:return{...e,user:{...e.user,...n}};case ot.SET_LOADING:return{...e,isLoading:n};default:return e}}const r0=C.createContext(null);function yb({children:e}){var $,g,w,b;const[t,n]=C.useReducer(gb,n0),r=C.useRef(!1);C.useEffect(()=>{if(r.current)return;r.current=!0,(async()=>{const f=Zy(),h=e0();if(!f&&!h){n({type:ot.INIT,payload:{user:null}});return}try{const{data:v}=await Ze.get("/users/profile");n({type:ot.INIT,payload:{user:v.data}})}catch{ba(),n({type:ot.INIT,payload:{user:null}})}})()},[]),C.useEffect(()=>{const m=()=>{n({type:ot.LOGOUT})};return window.addEventListener("bg:session-expired",m),()=>window.removeEventListener("bg:session-expired",m)},[]);const o=C.useCallback(async(m,f)=>{n({type:ot.SET_LOADING,payload:!0});try{const{data:h}=await Ze.post("/auth/login",{email:m,password:f}),v=h.data??h,k=v.token??v.accessToken,{refreshToken:R,user:E}=v;re.success("Login efetuado com sucesso!",{toastId:"login-success"}),t0({accessToken:k,refreshToken:R});const _=(v.mustChangePassword??h.mustChangePassword??((E==null?void 0:E.last_login_at)===null||(E==null?void 0:E.last_login_at)===void 0),!1),O=v.mustChangePassword===!0;return n({type:ot.LOGIN_SUCCESS,payload:{user:E,mustChangePassword:O}}),{mustChangePassword:O}}catch(h){throw n({type:ot.SET_LOADING,payload:!1}),new Error(Qn(h,"E-mail ou senha inválidos."))}},[]),i=C.useCallback(async(m,f,h)=>{try{await Ze.patch("/auth/change-password",{currentPassword:m,newPassword:f,confirmPassword:h}),n({type:ot.PASSWORD_CHANGED}),re.success("Senha alterada com sucesso!")}catch(v){throw new Error(Qn(v,"Erro ao alterar a senha. Tente novamente."))}},[]),s=C.useCallback(()=>{re.success("Logout efetuado com sucesso!",{toastId:"logout-success"}),ba(),n({type:ot.LOGOUT}),Ze.post("/auth/logout").catch(()=>{})},[]),a=C.useCallback(m=>{n({type:ot.UPDATE_USER,payload:m})},[]),u=(($=t.user)==null?void 0:$.role)==="admin",c=((g=t.user)==null?void 0:g.role)==="user",d=((w=t.user)==null?void 0:w.role)==="partner",p=C.useCallback((...m)=>{var f;return m.includes((f=t.user)==null?void 0:f.role)},[(b=t.user)==null?void 0:b.role]),y=C.useMemo(()=>({user:t.user,isAuthenticated:t.isAuthenticated,isLoading:t.isLoading,mustChangePassword:t.mustChangePassword,isAdmin:u,isUser:c,isPartner:d,hasRole:p,login:o,logout:s,changePassword:i,updateUser:a}),[t,u,c,d,p,o,s,i,a]);return l.jsx(r0.Provider,{value:y,children:e})}function Zn(){const e=C.useContext(r0);if(!e)throw new Error("useAuth deve ser usado dentro de <AuthProvider>.");return e}const xb=qe`
  to { transform: rotate(360deg); }
`,vb=x.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.surface.page};
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,wb=x.div`
  width: 36px;
  height: 36px;
  border: 3px solid ${({theme:e})=>e.colors.primary[100]};
  border-top-color: ${({theme:e})=>e.brand.primary};
  border-radius: 50%;
  animation: ${xb} 0.8s linear infinite;
`,$b=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,Sb=x.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.surface.page};
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
`,bb=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[200]};
  margin: 0;
  line-height: 1;
`,kb=x.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,Eb=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
  max-width: 320px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;function Hl({allowedRoles:e=[]}){const{isAuthenticated:t,isLoading:n,mustChangePassword:r,user:o}=Zn(),i=Jn();return n?l.jsxs(vb,{children:[l.jsx(wb,{}),l.jsx($b,{children:"Verificando sessão…"})]}):t?r&&i.pathname!=="/alterar-senha"?l.jsx(ha,{to:"/alterar-senha",replace:!0}):e.length>0&&!e.includes(o==null?void 0:o.role)?l.jsxs(Sb,{children:[l.jsx(bb,{children:"403"}),l.jsx(kb,{children:"Acesso não autorizado"}),l.jsx(Eb,{children:"Você não tem permissão para acessar esta área. Entre em contato com o administrador caso acredite que isso é um erro."})]}):l.jsx(Jg,{}):l.jsx(ha,{to:"/login",state:{from:i},replace:!0})}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o0=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=C.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:s,...a},u)=>C.createElement("svg",{ref:u,...Cb,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:o0("lucide",o),...a},[...s.map(([c,d])=>C.createElement(c,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=(e,t)=>{const n=C.forwardRef(({className:r,...o},i)=>C.createElement(jb,{ref:i,iconNode:t,className:o0(`lucide-${_b(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=ae("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=ae("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=ae("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=ae("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=ae("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=ae("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=ae("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=ae("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=ae("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=ae("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=ae("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=ae("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=ae("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=ae("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=ae("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=ae("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=ae("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=ae("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=ae("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=ae("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=ae("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=ae("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=ae("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=ae("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=ae("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=ae("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=ae("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=ae("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=ae("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=ae("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=ae("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=ae("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Gb=qe`
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
`,qb=x.aside`
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
`,Qb=x.div`
  padding: ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[5]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral[800]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  animation: ${Gb} 0.4s ease both;
`,Yb=x.div`
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
`,Kb=x.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
`,Xb=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Jb=x.nav`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[3]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,Zb=x.div`
  margin-top: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  padding: 0 ${({theme:e})=>e.spacing[2]};
`,ek=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral[600]};
`,tk=x(pw)`
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
`,nk=x.span`
  flex: 1;
`;x.span`
  background-color: ${({theme:e})=>e.colors.primary[600]};
  color: #fff;
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  padding: 1px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  line-height: 1.6;
`;const rk=x.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[3]};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[800]};
`,ok=x.div`
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
`,ik=x.div`
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
`,sk=x.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,ak=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,lk=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[500]};
  text-transform: capitalize;
`,uk=x.div`
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
`,ck=(e="")=>e.split(" ").filter(Boolean).slice(0,2).map(t=>t[0].toUpperCase()).join(""),dk={admin:"Administrador",user:"Usuário",partner:"Parceiro"},fk=[{section:"Principal",items:[{path:"/dashboard",label:"Dashboard",icon:Nb},{path:"/clientes",label:"Clientes",icon:Hb},{path:"/vendas",label:"Vendas",icon:Mb}]},{section:"Administração",adminOnly:!0,items:[{path:"/usuarios",label:"Usuários",icon:h0},{path:"/bandeiras",label:"Bandeiras",icon:c0},{path:"/planos",label:"Planos",icon:Bp},{path:"/relatorios",label:"Relatórios",icon:Bp}]},{section:"Conta",items:[{path:"/perfil",label:"Meu Perfil",icon:Tb}]}];function pk({open:e,onClose:t}){const{user:n,isAdmin:r}=Zn();return l.jsxs(l.Fragment,{children:[l.jsx(uk,{$open:e,onClick:t}),l.jsxs(qb,{$open:e,children:[l.jsxs(Qb,{children:[l.jsx(Yb,{children:"BG"}),l.jsx(Kb,{children:l.jsx(Xb,{children:"BG Representações"})})]}),l.jsx(Jb,{children:fk.map(o=>o.adminOnly&&!r?null:l.jsxs("div",{children:[l.jsx(Zb,{children:l.jsx(ek,{children:o.section})}),o.items.map(({path:i,label:s,icon:a})=>l.jsxs(tk,{to:i,onClick:t,children:[l.jsx(a,{size:17}),l.jsx(nk,{children:s})]},i))]},o.section))}),l.jsx(rk,{children:l.jsxs(ok,{children:[l.jsx(ik,{children:ck(n==null?void 0:n.name)}),l.jsxs(sk,{children:[l.jsx(ak,{children:(n==null?void 0:n.name)??"Usuário"}),l.jsx(lk,{children:dk[n==null?void 0:n.role]??(n==null?void 0:n.role)})]})]})})]})]})}const hk=x.header`
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
`,mk=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,gk=x.button`
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
`,yk=x.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,xk=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,vk=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;

  /* Oculta em telas pequenas para não sobrecarregar */
  @media (max-width: 600px) {
    display: none;
  }
`,wk=x.span`
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
`,$k=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`,Sk=x.div`
  width: 1px;
  height: 24px;
  background-color: ${({theme:e})=>e.border.default};
  flex-shrink: 0;

  @media (max-width: 600px) {
    display: none;
  }
`,bk=x.button`
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
`,Gl={"/dashboard":"Dashboard","/clientes":"Clientes","/vendas":"Vendas","/usuarios":"Usuários","/bandeiras":"Bandeiras","/planos":"Planos","/relatorios":"Relatórios","/perfil":"Meu Perfil","/onboarding":"Novo Cliente"},kk={admin:"Administrador",user:"Usuário",partner:"Parceiro"};function Ek({onMenuClick:e}){var s;const{user:t,logout:n}=Zn(),r=Jn(),o=(()=>{const a=Gl[r.pathname];if(a)return a;const u=Object.keys(Gl).find(c=>r.pathname.startsWith(c+"/"));return u?Gl[u]:"BG Representações"})(),i=((s=t==null?void 0:t.name)==null?void 0:s.split(" ")[0])??"Usuário";return l.jsxs(hk,{children:[l.jsxs(mk,{children:[l.jsx(gk,{type:"button",onClick:e,"aria-label":"Abrir menu",children:l.jsx(Ab,{size:18})}),l.jsx(yk,{children:o})]}),l.jsxs(xk,{children:[l.jsxs(vk,{children:[l.jsxs(wk,{children:["Olá, ",i]}),l.jsx($k,{children:kk[t==null?void 0:t.role]??(t==null?void 0:t.role)})]}),l.jsx(Sk,{}),l.jsxs(bk,{type:"button",onClick:n,children:[l.jsx(Lb,{size:15}),l.jsx("span",{children:"Sair"})]})]})]})}const _k=x.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.surface.page};
`,Ck=x.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; /* evita overflow em flex */
  overflow: hidden;
`,jk=x.main`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[8]};
  background-color: ${({theme:e})=>e.surface.page};

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[4]};
  }
`;function Up(){const[e,t]=C.useState(!1);return l.jsxs(_k,{children:[l.jsx(pk,{open:e,onClose:()=>t(!1)}),l.jsxs(Ck,{children:[l.jsx(Ek,{onMenuClick:()=>t(n=>!n)}),l.jsx(jk,{children:l.jsx(Jg,{})})]})]})}var Wi=e=>e.type==="checkbox",fr=e=>e instanceof Date,gt=e=>e==null;const m0=e=>typeof e=="object";var Ie=e=>!gt(e)&&!Array.isArray(e)&&m0(e)&&!fr(e),Rk=e=>Ie(e)&&e.target?Wi(e.target)?e.target.checked:e.target.value:e,Pk=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Tk=(e,t)=>e.has(Pk(t)),zk=e=>{const t=e.constructor&&e.constructor.prototype;return Ie(t)&&t.hasOwnProperty("isPrototypeOf")},Rd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function De(e){if(e instanceof Date)return new Date(e);const t=typeof FileList<"u"&&e instanceof FileList;if(Rd&&(e instanceof Blob||t))return e;const n=Array.isArray(e);if(!n&&!(Ie(e)&&zk(e)))return e;const r=n?[]:Object.create(Object.getPrototypeOf(e));for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=De(e[o]));return r}var ol=e=>/^\w*$/.test(e),ke=e=>e===void 0,Pd=e=>Array.isArray(e)?e.filter(Boolean):[],Td=e=>Pd(e.replace(/["|']|\]/g,"").split(/\.|\[/)),q=(e,t,n)=>{if(!t||!Ie(e))return n;const r=(ol(t)?[t]:Td(t)).reduce((o,i)=>gt(o)?o:o[i],e);return ke(r)||r===e?ke(e[t])?n:e[t]:r},tn=e=>typeof e=="boolean",Gt=e=>typeof e=="function",$e=(e,t,n)=>{let r=-1;const o=ol(t)?[t]:Td(t),i=o.length,s=i-1;for(;++r<i;){const a=o[r];let u=n;if(r!==s){const c=e[a];u=Ie(c)||Array.isArray(c)?c:isNaN(+o[r+1])?{}:[]}if(a==="__proto__"||a==="constructor"||a==="prototype")return;e[a]=u,e=e[a]}};const Vp={BLUR:"blur",FOCUS_OUT:"focusout"},qt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ln={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Fk=Q.createContext(null);Fk.displayName="HookFormControlContext";var Nk=(e,t,n,r=!0)=>{const o={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(o,i,{get:()=>{const s=i;return t._proxyFormState[s]!==qt.all&&(t._proxyFormState[s]=!r||qt.all),e[s]}});return o};const Ok=typeof window<"u"?Q.useLayoutEffect:Q.useEffect;var _t=e=>typeof e=="string",Lk=(e,t,n,r,o)=>_t(e)?(r&&t.watch.add(e),q(n,e,o)):Array.isArray(e)?e.map(i=>(r&&t.watch.add(i),q(n,i))):(r&&(t.watchAll=!0),n),gc=e=>gt(e)||!m0(e);function Pn(e,t,n=new WeakSet){if(gc(e)||gc(t))return Object.is(e,t);if(fr(e)&&fr(t))return Object.is(e.getTime(),t.getTime());const r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;if(n.has(e)||n.has(t))return!0;n.add(e),n.add(t);for(const i of r){const s=e[i];if(!o.includes(i))return!1;if(i!=="ref"){const a=t[i];if(fr(s)&&fr(a)||Ie(s)&&Ie(a)||Array.isArray(s)&&Array.isArray(a)?!Pn(s,a,n):!Object.is(s,a))return!1}}return!0}const Ak=Q.createContext(null);Ak.displayName="HookFormContext";var Ik=(e,t,n,r,o)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:o||!0}}:{},oi=e=>Array.isArray(e)?e:[e],Wp=()=>{let e=[];return{get observers(){return e},next:o=>{for(const i of e)i.next&&i.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(i=>i!==o)}}),unsubscribe:()=>{e=[]}}};function g0(e,t){const n={};for(const r in e)if(e.hasOwnProperty(r)){const o=e[r],i=t[r];if(o&&Ie(o)&&i){const s=g0(o,i);Ie(s)&&(n[r]=s)}else e[r]&&(n[r]=i)}return n}var ut=e=>Ie(e)&&!Object.keys(e).length,zd=e=>e.type==="file",ka=e=>{if(!Rd)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},y0=e=>e.type==="select-multiple",Fd=e=>e.type==="radio",Dk=e=>Fd(e)||Wi(e),ql=e=>ka(e)&&e.isConnected;function Bk(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=ke(e)?r++:e[t[r++]];return e}function Mk(e){for(const t in e)if(e.hasOwnProperty(t)&&!ke(e[t]))return!1;return!0}function Oe(e,t){const n=Array.isArray(t)?t:ol(t)?[t]:Td(t),r=n.length===1?e:Bk(e,n),o=n.length-1,i=n[o];return r&&delete r[i],o!==0&&(Ie(r)&&ut(r)||Array.isArray(r)&&Mk(r))&&Oe(e,n.slice(0,-1)),e}var Uk=e=>{for(const t in e)if(Gt(e[t]))return!0;return!1};function x0(e){return Array.isArray(e)||Ie(e)&&!Uk(e)}function yc(e,t={}){for(const n in e){const r=e[n];x0(r)?(t[n]=Array.isArray(r)?[]:{},yc(r,t[n])):ke(r)||(t[n]=!0)}return t}function Ir(e,t,n){n||(n=yc(t));for(const r in e){const o=e[r];if(x0(o))ke(t)||gc(n[r])?n[r]=yc(o,Array.isArray(o)?[]:{}):Ir(o,gt(t)?{}:t[r],n[r]);else{const i=t[r];n[r]=!Pn(o,i)}}return n}const Hp={value:!1,isValid:!1},Gp={value:!0,isValid:!0};var v0=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ke(e[0].attributes.value)?ke(e[0].value)||e[0].value===""?Gp:{value:e[0].value,isValid:!0}:Gp:Hp}return Hp},w0=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>ke(e)?e:t?e===""?NaN:e&&+e:n&&_t(e)?new Date(e):r?r(e):e;const qp={isValid:!1,value:null};var $0=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,qp):qp;function Qp(e){const t=e.ref;return zd(t)?t.files:Fd(t)?$0(e.refs).value:y0(t)?[...t.selectedOptions].map(({value:n})=>n):Wi(t)?v0(e.refs).value:w0(ke(t.value)?e.ref.value:t.value,e)}var Vk=(e,t,n,r)=>{const o={};for(const i of e){const s=q(t,i);s&&$e(o,i,s._f)}return{criteriaMode:n,names:[...e],fields:o,shouldUseNativeValidation:r}},Ea=e=>e instanceof RegExp,Fo=e=>ke(e)?e:Ea(e)?e.source:Ie(e)?Ea(e.value)?e.value.source:e.value:e,Yp=e=>({isOnSubmit:!e||e===qt.onSubmit,isOnBlur:e===qt.onBlur,isOnChange:e===qt.onChange,isOnAll:e===qt.all,isOnTouch:e===qt.onTouched});const Kp="AsyncFunction";var Wk=e=>!!e&&!!e.validate&&!!(Gt(e.validate)&&e.validate.constructor.name===Kp||Ie(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Kp)),Hk=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Xp=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const ii=(e,t,n,r)=>{for(const o of n||Object.keys(e)){const i=q(e,o);if(i){const{_f:s,...a}=i;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],o)&&!r)return!0;if(s.ref&&t(s.ref,s.name)&&!r)return!0;if(ii(a,t))break}else if(Ie(a)&&ii(a,t))break}}};function Jp(e,t,n){const r=q(e,n);if(r||ol(n))return{error:r,name:n};const o=n.split(".");for(;o.length;){const i=o.join("."),s=q(t,i),a=q(e,i);if(s&&!Array.isArray(s)&&n!==i)return{name:n};if(a&&a.type)return{name:i,error:a};if(a&&a.root&&a.root.type)return{name:`${i}.root`,error:a.root};o.pop()}return{name:n}}var Gk=(e,t,n,r)=>{n(e);const{name:o,...i}=e;return ut(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(s=>t[s]===(!r||qt.all))},qk=(e,t,n)=>!e||!t||e===t||oi(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),Qk=(e,t,n,r,o)=>o.isOnAll?!1:!n&&o.isOnTouch?!(t||e):(n?r.isOnBlur:o.isOnBlur)?!e:(n?r.isOnChange:o.isOnChange)?e:!0,Yk=(e,t)=>!Pd(q(e,t)).length&&Oe(e,t),Kk=(e,t,n)=>{const r=oi(q(e,n));return $e(r,"root",t[n]),$e(e,n,r),e};function Zp(e,t,n="validate"){if(_t(e)||Array.isArray(e)&&e.every(_t)||tn(e)&&!e)return{type:n,message:_t(e)?e:"",ref:t}}var Fr=e=>Ie(e)&&!Ea(e)?e:{value:e,message:""},eh=async(e,t,n,r,o,i)=>{const{ref:s,refs:a,required:u,maxLength:c,minLength:d,min:p,max:y,pattern:$,validate:g,name:w,valueAsNumber:b,mount:m}=e._f,f=q(n,w);if(!m||t.has(w))return{};const h=a?a[0]:s,v=B=>{o&&h.reportValidity&&(h.setCustomValidity(tn(B)?"":B||""),h.reportValidity())},k={},R=Fd(s),E=Wi(s),_=R||E,O=(b||zd(s))&&ke(s.value)&&ke(f)||ka(s)&&s.value===""||f===""||Array.isArray(f)&&!f.length,I=Ik.bind(null,w,r,k),W=(B,H,z,ee=ln.maxLength,Y=ln.minLength)=>{const U=B?H:z;k[w]={type:B?ee:Y,message:U,ref:s,...I(B?ee:Y,U)}};if(i?!Array.isArray(f)||!f.length:u&&(!_&&(O||gt(f))||tn(f)&&!f||E&&!v0(a).isValid||R&&!$0(a).isValid)){const{value:B,message:H}=_t(u)?{value:!!u,message:u}:Fr(u);if(B&&(k[w]={type:ln.required,message:H,ref:h,...I(ln.required,H)},!r))return v(H),k}if(!O&&(!gt(p)||!gt(y))){let B,H;const z=Fr(y),ee=Fr(p);if(!gt(f)&&!isNaN(f)){const Y=s.valueAsNumber||f&&+f;gt(z.value)||(B=Y>z.value),gt(ee.value)||(H=Y<ee.value)}else{const Y=s.valueAsDate||new Date(f),U=G=>new Date(new Date().toDateString()+" "+G),F=s.type=="time",N=s.type=="week";_t(z.value)&&f&&(B=F?U(f)>U(z.value):N?f>z.value:Y>new Date(z.value)),_t(ee.value)&&f&&(H=F?U(f)<U(ee.value):N?f<ee.value:Y<new Date(ee.value))}if((B||H)&&(W(!!B,z.message,ee.message,ln.max,ln.min),!r))return v(k[w].message),k}if((c||d)&&!O&&(_t(f)||i&&Array.isArray(f))){const B=Fr(c),H=Fr(d),z=!gt(B.value)&&f.length>+B.value,ee=!gt(H.value)&&f.length<+H.value;if((z||ee)&&(W(z,B.message,H.message),!r))return v(k[w].message),k}if($&&!O&&_t(f)){const{value:B,message:H}=Fr($);if(Ea(B)&&!f.match(B)&&(k[w]={type:ln.pattern,message:H,ref:s,...I(ln.pattern,H)},!r))return v(H),k}if(g){if(Gt(g)){const B=await g(f,n),H=Zp(B,h);if(H&&(k[w]={...H,...I(ln.validate,H.message)},!r))return v(H.message),k}else if(Ie(g)){let B={};for(const H in g){if(!ut(B)&&!r)break;const z=Zp(await g[H](f,n),h,H);z&&(B={...z,...I(H,z.message)},v(z.message),r&&(k[w]=B))}if(!ut(B)&&(k[w]={ref:h,...B},!r))return k}}return v(!0),k};const Xk={mode:qt.onSubmit,reValidateMode:qt.onChange,shouldFocusError:!0};function Jk(e={}){let t={...Xk,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:Gt(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},o=Ie(t.defaultValues)||Ie(t.values)?De(t.defaultValues||t.values)||{}:{},i=t.shouldUnregister?{}:De(o),s={action:!1,mount:!1,watch:!1,keepIsValid:!1},a={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={...d};let y={...p};const $={array:Wp(),state:Wp()},g=t.criteriaMode===qt.all,w=S=>j=>{clearTimeout(c),c=setTimeout(S,j)},b=async S=>{if(!s.keepIsValid&&!t.disabled&&(p.isValid||y.isValid||S)){let j;t.resolver?(j=ut((await _()).errors),m()):j=await I(r,!0),j!==n.isValid&&$.state.next({isValid:j})}},m=(S,j)=>{!t.disabled&&(p.isValidating||p.validatingFields||y.isValidating||y.validatingFields)&&((S||Array.from(a.mount)).forEach(T=>{T&&(j?$e(n.validatingFields,T,j):Oe(n.validatingFields,T))}),$.state.next({validatingFields:n.validatingFields,isValidating:!ut(n.validatingFields)}))},f=(S,j=[],T,M,D=!0,A=!0)=>{if(M&&T&&!t.disabled){if(s.action=!0,A&&Array.isArray(q(r,S))){const K=T(q(r,S),M.argA,M.argB);D&&$e(r,S,K)}if(A&&Array.isArray(q(n.errors,S))){const K=T(q(n.errors,S),M.argA,M.argB);D&&$e(n.errors,S,K),Yk(n.errors,S)}if((p.touchedFields||y.touchedFields)&&A&&Array.isArray(q(n.touchedFields,S))){const K=T(q(n.touchedFields,S),M.argA,M.argB);D&&$e(n.touchedFields,S,K)}(p.dirtyFields||y.dirtyFields)&&(n.dirtyFields=Ir(o,i)),$.state.next({name:S,isDirty:B(S,j),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else $e(i,S,j)},h=(S,j)=>{$e(n.errors,S,j),$.state.next({errors:n.errors})},v=S=>{n.errors=S,$.state.next({errors:n.errors,isValid:!1})},k=(S,j,T,M)=>{const D=q(r,S);if(D){const A=q(i,S,ke(T)?q(o,S):T);ke(A)||M&&M.defaultChecked||j?$e(i,S,j?A:Qp(D._f)):ee(S,A),s.mount&&!s.action&&b()}},R=(S,j,T,M,D)=>{let A=!1,K=!1;const ce={name:S};if(!t.disabled){if(!T||M){(p.isDirty||y.isDirty)&&(K=n.isDirty,n.isDirty=ce.isDirty=B(),A=K!==ce.isDirty);const de=Pn(q(o,S),j);K=!!q(n.dirtyFields,S),de?Oe(n.dirtyFields,S):$e(n.dirtyFields,S,!0),ce.dirtyFields=n.dirtyFields,A=A||(p.dirtyFields||y.dirtyFields)&&K!==!de}if(T){const de=q(n.touchedFields,S);de||($e(n.touchedFields,S,T),ce.touchedFields=n.touchedFields,A=A||(p.touchedFields||y.touchedFields)&&de!==T)}A&&D&&$.state.next(ce)}return A?ce:{}},E=(S,j,T,M)=>{const D=q(n.errors,S),A=(p.isValid||y.isValid)&&tn(j)&&n.isValid!==j;if(t.delayError&&T?(u=w(()=>h(S,T)),u(t.delayError)):(clearTimeout(c),u=null,T?$e(n.errors,S,T):Oe(n.errors,S)),(T?!Pn(D,T):D)||!ut(M)||A){const K={...M,...A&&tn(j)?{isValid:j}:{},errors:n.errors,name:S};n={...n,...K},$.state.next(K)}},_=async S=>(m(S,!0),await t.resolver(i,t.context,Vk(S||a.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),O=async S=>{const{errors:j}=await _(S);if(m(S),S)for(const T of S){const M=q(j,T);M?$e(n.errors,T,M):Oe(n.errors,T)}else n.errors=j;return j},I=async(S,j,T={valid:!0})=>{for(const M in S){const D=S[M];if(D){const{_f:A,...K}=D;if(A){const ce=a.array.has(A.name),de=D._f&&Wk(D._f);de&&p.validatingFields&&m([A.name],!0);const lt=await eh(D,a.disabled,i,g,t.shouldUseNativeValidation&&!j,ce);if(de&&p.validatingFields&&m([A.name]),lt[A.name]&&(T.valid=!1,j||e.shouldUseNativeValidation))break;!j&&(q(lt,A.name)?ce?Kk(n.errors,lt,A.name):$e(n.errors,A.name,lt[A.name]):Oe(n.errors,A.name))}!ut(K)&&await I(K,j,T)}}return T.valid},W=()=>{for(const S of a.unMount){const j=q(r,S);j&&(j._f.refs?j._f.refs.every(T=>!ql(T)):!ql(j._f.ref))&&Z(S)}a.unMount=new Set},B=(S,j)=>!t.disabled&&(S&&j&&$e(i,S,j),!Pn(X(),o)),H=(S,j,T)=>Lk(S,a,{...s.mount?i:ke(j)?o:_t(S)?{[S]:j}:j},T,j),z=S=>Pd(q(s.mount?i:o,S,t.shouldUnregister?q(o,S,[]):[])),ee=(S,j,T={})=>{const M=q(r,S);let D=j;if(M){const A=M._f;A&&(!A.disabled&&$e(i,S,w0(j,A)),D=ka(A.ref)&&gt(j)?"":j,y0(A.ref)?[...A.ref.options].forEach(K=>K.selected=D.includes(K.value)):A.refs?Wi(A.ref)?A.refs.forEach(K=>{(!K.defaultChecked||!K.disabled)&&(Array.isArray(D)?K.checked=!!D.find(ce=>ce===K.value):K.checked=D===K.value||!!D)}):A.refs.forEach(K=>K.checked=K.value===D):zd(A.ref)?A.ref.value="":(A.ref.value=D,A.ref.type||$.state.next({name:S,values:De(i)})))}(T.shouldDirty||T.shouldTouch)&&R(S,D,T.shouldTouch,T.shouldDirty,!0),T.shouldValidate&&G(S)},Y=(S,j,T)=>{for(const M in j){if(!j.hasOwnProperty(M))return;const D=j[M],A=S+"."+M,K=q(r,A);(a.array.has(S)||Ie(D)||K&&!K._f)&&!fr(D)?Y(A,D,T):ee(A,D,T)}},U=(S,j,T={})=>{const M=q(r,S),D=a.array.has(S),A=De(j);$e(i,S,A),D?($.array.next({name:S,values:De(i)}),(p.isDirty||p.dirtyFields||y.isDirty||y.dirtyFields)&&T.shouldDirty&&$.state.next({name:S,dirtyFields:Ir(o,i),isDirty:B(S,A)})):M&&!M._f&&!gt(A)?Y(S,A,T):ee(S,A,T),Xp(S,a)?$.state.next({...n,name:S,values:De(i)}):$.state.next({name:s.mount?S:void 0,values:De(i)})},F=async S=>{s.mount=!0;const j=S.target;let T=j.name,M=!0;const D=q(r,T),A=de=>{M=Number.isNaN(de)||fr(de)&&isNaN(de.getTime())||Pn(de,q(i,T,de))},K=Yp(t.mode),ce=Yp(t.reValidateMode);if(D){let de,lt;const er=j.type?Qp(D._f):Rk(S),bn=S.type===Vp.BLUR||S.type===Vp.FOCUS_OUT,F0=!Hk(D._f)&&!t.resolver&&!q(n.errors,T)&&!D._f.deps||Qk(bn,q(n.touchedFields,T),n.isSubmitted,ce,K),sl=Xp(T,a,bn);$e(i,T,er),bn?(!j||!j.readOnly)&&(D._f.onBlur&&D._f.onBlur(S),u&&u(0)):D._f.onChange&&D._f.onChange(S);const al=R(T,er,bn),N0=!ut(al)||sl;if(!bn&&$.state.next({name:T,type:S.type,values:De(i)}),F0)return(p.isValid||y.isValid)&&(t.mode==="onBlur"?bn&&b():bn||b()),N0&&$.state.next({name:T,...sl?{}:al});if(!bn&&sl&&$.state.next({...n}),t.resolver){const{errors:Bd}=await _([T]);if(m([T]),A(er),M){const O0=Jp(n.errors,r,T),Md=Jp(Bd,r,O0.name||T);de=Md.error,T=Md.name,lt=ut(Bd)}}else m([T],!0),de=(await eh(D,a.disabled,i,g,t.shouldUseNativeValidation))[T],m([T]),A(er),M&&(de?lt=!1:(p.isValid||y.isValid)&&(lt=await I(r,!0)));M&&(D._f.deps&&(!Array.isArray(D._f.deps)||D._f.deps.length>0)&&G(D._f.deps),E(T,lt,de,al))}},N=(S,j)=>{if(q(n.errors,j)&&S.focus)return S.focus(),1},G=async(S,j={})=>{let T,M;const D=oi(S);if(t.resolver){const A=await O(ke(S)?S:D);T=ut(A),M=S?!D.some(K=>q(A,K)):T}else S?(M=(await Promise.all(D.map(async A=>{const K=q(r,A);return await I(K&&K._f?{[A]:K}:K)}))).every(Boolean),!(!M&&!n.isValid)&&b()):M=T=await I(r);return $.state.next({...!_t(S)||(p.isValid||y.isValid)&&T!==n.isValid?{}:{name:S},...t.resolver||!S?{isValid:T}:{},errors:n.errors}),j.shouldFocus&&!M&&ii(r,N,S?D:a.mount),M},X=(S,j)=>{let T={...s.mount?i:o};return j&&(T=g0(j.dirtyFields?n.dirtyFields:n.touchedFields,T)),ke(S)?T:_t(S)?q(T,S):S.map(M=>q(T,M))},J=(S,j)=>({invalid:!!q((j||n).errors,S),isDirty:!!q((j||n).dirtyFields,S),error:q((j||n).errors,S),isValidating:!!q(n.validatingFields,S),isTouched:!!q((j||n).touchedFields,S)}),pe=S=>{const j=S?oi(S):void 0;j==null||j.forEach(T=>Oe(n.errors,T)),j?j.forEach(T=>{$.state.next({name:T,errors:n.errors})}):$.state.next({errors:{}})},le=(S,j,T)=>{const M=(q(r,S,{_f:{}})._f||{}).ref,D=q(n.errors,S)||{},{ref:A,message:K,type:ce,...de}=D;$e(n.errors,S,{...de,...j,ref:M}),$.state.next({name:S,errors:n.errors,isValid:!1}),T&&T.shouldFocus&&M&&M.focus&&M.focus()},ge=(S,j)=>Gt(S)?$.state.subscribe({next:T=>"values"in T&&S(H(void 0,j),T)}):H(S,j,!0),he=S=>$.state.subscribe({next:j=>{qk(S.name,j.name,S.exact)&&Gk(j,S.formState||p,z0,S.reRenderRoot)&&S.callback({values:{...i},...n,...j,defaultValues:o})}}).unsubscribe,Re=S=>(s.mount=!0,y={...y,...S.formState},he({...S,formState:{...d,...S.formState}})),Z=(S,j={})=>{for(const T of S?oi(S):a.mount)a.mount.delete(T),a.array.delete(T),j.keepValue||(Oe(r,T),Oe(i,T)),!j.keepError&&Oe(n.errors,T),!j.keepDirty&&Oe(n.dirtyFields,T),!j.keepTouched&&Oe(n.touchedFields,T),!j.keepIsValidating&&Oe(n.validatingFields,T),!t.shouldUnregister&&!j.keepDefaultValue&&Oe(o,T);$.state.next({values:De(i)}),$.state.next({...n,...j.keepDirty?{isDirty:B()}:{}}),!j.keepIsValid&&b()},Qe=({disabled:S,name:j})=>{if(tn(S)&&s.mount||S||a.disabled.has(j)){const D=a.disabled.has(j)!==!!S;S?a.disabled.add(j):a.disabled.delete(j),D&&s.mount&&!s.action&&b()}},Fe=(S,j={})=>{let T=q(r,S);const M=tn(j.disabled)||tn(t.disabled);return $e(r,S,{...T||{},_f:{...T&&T._f?T._f:{ref:{name:S}},name:S,mount:!0,...j}}),a.mount.add(S),T?Qe({disabled:tn(j.disabled)?j.disabled:t.disabled,name:S}):k(S,!0,j.value),{...M?{disabled:j.disabled||t.disabled}:{},...t.progressive?{required:!!j.required,min:Fo(j.min),max:Fo(j.max),minLength:Fo(j.minLength),maxLength:Fo(j.maxLength),pattern:Fo(j.pattern)}:{},name:S,onChange:F,onBlur:F,ref:D=>{if(D){Fe(S,j),T=q(r,S);const A=ke(D.value)&&D.querySelectorAll&&D.querySelectorAll("input,select,textarea")[0]||D,K=Dk(A),ce=T._f.refs||[];if(K?ce.find(de=>de===A):A===T._f.ref)return;$e(r,S,{_f:{...T._f,...K?{refs:[...ce.filter(ql),A,...Array.isArray(q(o,S))?[{}]:[]],ref:{type:A.type,name:S}}:{ref:A}}}),k(S,!1,void 0,A)}else T=q(r,S,{}),T._f&&(T._f.mount=!1),(t.shouldUnregister||j.shouldUnregister)&&!(Tk(a.array,S)&&s.action)&&a.unMount.add(S)}}},Ye=()=>t.shouldFocusError&&ii(r,N,a.mount),Pr=S=>{tn(S)&&($.state.next({disabled:S}),ii(r,(j,T)=>{const M=q(r,T);M&&(j.disabled=M._f.disabled||S,Array.isArray(M._f.refs)&&M._f.refs.forEach(D=>{D.disabled=M._f.disabled||S}))},0,!1))},an=(S,j)=>async T=>{let M;T&&(T.preventDefault&&T.preventDefault(),T.persist&&T.persist());let D=De(i);if($.state.next({isSubmitting:!0}),t.resolver){const{errors:A,values:K}=await _();m(),n.errors=A,D=De(K)}else await I(r);if(a.disabled.size)for(const A of a.disabled)Oe(D,A);if(Oe(n.errors,"root"),ut(n.errors)){$.state.next({errors:{}});try{await S(D,T)}catch(A){M=A}}else j&&await j({...n.errors},T),Ye(),setTimeout(Ye);if($.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ut(n.errors)&&!M,submitCount:n.submitCount+1,errors:n.errors}),M)throw M},P0=(S,j={})=>{q(r,S)&&(ke(j.defaultValue)?U(S,De(q(o,S))):(U(S,j.defaultValue),$e(o,S,De(j.defaultValue))),j.keepTouched||Oe(n.touchedFields,S),j.keepDirty||(Oe(n.dirtyFields,S),n.isDirty=j.defaultValue?B(S,De(q(o,S))):B()),j.keepError||(Oe(n.errors,S),p.isValid&&b()),$.state.next({...n}))},Ad=(S,j={})=>{const T=S?De(S):o,M=De(T),D=ut(S),A=D?o:M;if(j.keepDefaultValues||(o=T),!j.keepValues){if(j.keepDirtyValues){const K=new Set([...a.mount,...Object.keys(Ir(o,i))]);for(const ce of Array.from(K)){const de=q(n.dirtyFields,ce),lt=q(i,ce),er=q(A,ce);de&&!ke(lt)?$e(A,ce,lt):!de&&!ke(er)&&U(ce,er)}}else{if(Rd&&ke(S))for(const K of a.mount){const ce=q(r,K);if(ce&&ce._f){const de=Array.isArray(ce._f.refs)?ce._f.refs[0]:ce._f.ref;if(ka(de)){const lt=de.closest("form");if(lt){lt.reset();break}}}}if(j.keepFieldsRef)for(const K of a.mount)U(K,q(A,K));else r={}}i=t.shouldUnregister?j.keepDefaultValues?De(o):{}:De(A),$.array.next({values:{...A}}),$.state.next({values:{...A}})}a={mount:j.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},s.mount=!p.isValid||!!j.keepIsValid||!!j.keepDirtyValues||!t.shouldUnregister&&!ut(A),s.watch=!!t.shouldUnregister,s.keepIsValid=!!j.keepIsValid,s.action=!1,j.keepErrors||(n.errors={}),$.state.next({submitCount:j.keepSubmitCount?n.submitCount:0,isDirty:D?!1:j.keepDirty?n.isDirty:!!(j.keepDefaultValues&&!Pn(S,o)),isSubmitted:j.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:D?{}:j.keepDirtyValues?j.keepDefaultValues&&i?Ir(o,i):n.dirtyFields:j.keepDefaultValues&&S?Ir(o,S):j.keepDirty?n.dirtyFields:{},touchedFields:j.keepTouched?n.touchedFields:{},errors:j.keepErrors?n.errors:{},isSubmitSuccessful:j.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:o})},Id=(S,j)=>Ad(Gt(S)?S(i):S,{...t.resetOptions,...j}),T0=(S,j={})=>{const T=q(r,S),M=T&&T._f;if(M){const D=M.refs?M.refs[0]:M.ref;D.focus&&setTimeout(()=>{D.focus(),j.shouldSelect&&Gt(D.select)&&D.select()})}},z0=S=>{n={...n,...S}},Dd={control:{register:Fe,unregister:Z,getFieldState:J,handleSubmit:an,setError:le,_subscribe:he,_runSchema:_,_updateIsValidating:m,_focusError:Ye,_getWatch:H,_getDirty:B,_setValid:b,_setFieldArray:f,_setDisabledField:Qe,_setErrors:v,_getFieldArray:z,_reset:Ad,_resetDefaultValues:()=>Gt(t.defaultValues)&&t.defaultValues().then(S=>{Id(S,t.resetOptions),$.state.next({isLoading:!1})}),_removeUnmounted:W,_disableForm:Pr,_subjects:$,_proxyFormState:p,get _fields(){return r},get _formValues(){return i},get _state(){return s},set _state(S){s=S},get _defaultValues(){return o},get _names(){return a},set _names(S){a=S},get _formState(){return n},get _options(){return t},set _options(S){t={...t,...S}}},subscribe:Re,trigger:G,register:Fe,handleSubmit:an,watch:ge,setValue:U,getValues:X,reset:Id,resetField:P0,clearErrors:pe,unregister:Z,setError:le,setFocus:T0,getFieldState:J};return{...Dd,formControl:Dd}}function Nd(e={}){const t=Q.useRef(void 0),n=Q.useRef(void 0),[r,o]=Q.useState({isDirty:!1,isValidating:!1,isLoading:Gt(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Gt(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:r},e.defaultValues&&!Gt(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:s,...a}=Jk(e);t.current={...a,formState:r}}const i=t.current.control;return i._options=e,Ok(()=>{const s=i._subscribe({formState:i._proxyFormState,callback:()=>o({...i._formState}),reRenderRoot:!0});return o(a=>({...a,isReady:!0})),i._formState.isReady=!0,s},[i]),Q.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),Q.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode)},[i,e.mode,e.reValidateMode]),Q.useEffect(()=>{e.errors&&(i._setErrors(e.errors),i._focusError())},[i,e.errors]),Q.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),Q.useEffect(()=>{if(i._proxyFormState.isDirty){const s=i._getDirty();s!==r.isDirty&&i._subjects.state.next({isDirty:s})}},[i,r.isDirty]),Q.useEffect(()=>{var s;e.values&&!Pn(e.values,n.current)?(i._reset(e.values,{keepFieldsRef:!0,...i._options.resetOptions}),!((s=i._options.resetOptions)===null||s===void 0)&&s.keepIsValid||i._setValid(),n.current=e.values,o(a=>({...a}))):i._resetDefaultValues()},[i,e.values]),Q.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=Q.useMemo(()=>Nk(r,i),[i,r]),t.current}const Zk=qe`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Hi=qe`
  from { opacity: 0; transform: translateX(-28px); }
  to   { opacity: 1; transform: translateX(0); }
`,e2=qe`
  from { opacity: 0; transform: translateX(28px); }
  to   { opacity: 1; transform: translateX(0); }
`,t2=qe`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,n2=qe`
  from { opacity: 0; transform: scale(1.02); }
  to   { opacity: 1; transform: scale(1); }
`,r2=x.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 55fr 45fr;
  overflow: hidden;

  @media (max-width: 900px) {
    display: block;
    min-height: 100vh;
  }
`,o2=x.section`
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

  animation: ${Hi} 0.6s ease both;

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[6]};
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    &::after { display: none; }
  }
`,i2=x.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
  }
`,s2=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[20]};
  animation: ${Hi} 0.55s 0.05s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({theme:e})=>e.spacing[12]};
    justify-content: center;
  }
`,a2=x.div`
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
`,l2=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary[200]};
  letter-spacing: 0.025em;
`,u2=x.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({theme:e})=>e.spacing[5]};
  max-width: 460px;
  animation: ${Hi} 0.55s 0.12s ease both;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.75rem, 7vw, 2.3rem);
    max-width: 320px;
  }
`,c2=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.neutral[500]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0 0 ${({theme:e})=>e.spacing[10]};
  max-width: 360px;
  animation: ${Hi} 0.55s 0.2s ease both;

  @media (max-width: 900px) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    max-width: 280px;
    margin-bottom: ${({theme:e})=>e.spacing[8]};
  }
`,d2=x.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};
  animation: ${Hi} 0.55s 0.28s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[6]};
  }
`,Ql=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,Yl=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[400]};
  line-height: 1;
`,Kl=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,f2=x.div`
  position: relative;
  z-index: 3;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[700]};
  animation: ${Zk} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`,p2=x.button`
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
    animation: ${t2} 0.55s 0.35s ease both;
    transition:
      transform ${({theme:e})=>e.transitions.base},
      box-shadow ${({theme:e})=>e.transitions.base};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px ${({theme:e})=>e.colors.primary[900]}75;
    }
    &:active { transform: translateY(0); }
  }
`,h2=x.section`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[16]};
  animation: ${e2} 0.55s 0.1s ease both;

  @media (max-width: 1100px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[10]};
  }

  @media (max-width: 900px) {
    display: none;
  }
`,m2=x.div`
  width: 100%;
  max-width: 360px;
`,g2=x.div`
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
    ${({$open:e})=>e&&Ii`
        & > * {
          animation: ${n2} 0.32s 0.05s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}
  }
`,y2=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing[10]};
  flex-shrink: 0;
`,x2=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,v2=x.div`
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
`,w2=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
`,$2=x.button`
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
`,S2=x.div`
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,b2=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.brand.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
`,k2=x.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,E2=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0;
`,_2=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[8]};
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,th=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,nh=x.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,rh=x.div`
  position: relative;
  display: flex;
  align-items: center;
`,oh=x.input`
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
`,C2=x.button`
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
`,ih=x.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,j2=x.button`
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
`,R2=x.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: _spin 0.7s linear infinite;

  @keyframes _spin { to { transform: rotate(360deg); } }
`,P2=x.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[100]};
  margin: ${({theme:e})=>e.spacing[8]} 0 ${({theme:e})=>e.spacing[6]};
`,T2=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;function sh({onSubmitSuccess:e}){const{login:t}=Zn(),[n,r]=C.useState(!1),[o,i]=C.useState(!1),{register:s,handleSubmit:a,formState:{errors:u}}=Nd({defaultValues:{email:"",password:""}}),c=async({email:d,password:p})=>{i(!0);try{const{mustChangePassword:y}=await t(d,p);e(y)}catch(y){re.error(y.message,{toastId:"login-error"})}finally{i(!1)}};return l.jsxs(l.Fragment,{children:[l.jsxs(S2,{children:[l.jsx(b2,{children:"Área restrita"}),l.jsx(k2,{children:"Bem-vindo de volta"}),l.jsx(E2,{children:"Use as credenciais fornecidas pelo administrador para acessar sua conta."})]}),l.jsxs("form",{onSubmit:a(c),noValidate:!0,children:[l.jsxs(_2,{children:[l.jsxs(th,{children:[l.jsx(nh,{htmlFor:"email",children:"E-mail"}),l.jsx(rh,{children:l.jsx(oh,{id:"email",type:"email",placeholder:"seu@email.com",autoComplete:"email",$hasError:!!u.email,disabled:o,...s("email",{required:"O e-mail é obrigatório.",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Informe um e-mail válido."}})})}),u.email&&l.jsxs(ih,{children:[l.jsx(zi,{size:12}),u.email.message]})]}),l.jsxs(th,{children:[l.jsx(nh,{htmlFor:"password",children:"Senha"}),l.jsxs(rh,{children:[l.jsx(oh,{id:"password",type:n?"text":"password",placeholder:"••••••••",autoComplete:"current-password",$hasError:!!u.password,$hasToggle:!0,disabled:o,...s("password",{required:"A senha é obrigatória.",minLength:{value:6,message:"Mínimo 6 caracteres."}})}),l.jsx(C2,{type:"button",onClick:()=>r(d=>!d),"aria-label":n?"Ocultar senha":"Mostrar senha",tabIndex:-1,children:n?l.jsx(l0,{size:16}):l.jsx(u0,{size:16})})]}),u.password&&l.jsxs(ih,{children:[l.jsx(zi,{size:12}),u.password.message]})]})]}),l.jsx(j2,{type:"submit",disabled:o,$isLoading:o,children:o?l.jsxs(l.Fragment,{children:[l.jsx(R2,{}),"Carregando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(f0,{size:17}),"Entrar"]})})]}),l.jsx(P2,{}),l.jsx(T2,{children:"Problemas com o acesso? Fale com o administrador do sistema."})]})}function z2(){const e=Rr(),[t,n]=C.useState(!1);C.useEffect(()=>(document.body.style.overflow=t?"hidden":"",()=>{document.body.style.overflow=""}),[t]),C.useEffect(()=>{const o=i=>{i.key==="Escape"&&n(!1)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[]);const r=o=>{o?(n(!1),setTimeout(()=>e("/alterar-senha",{replace:!0}),180)):e("/dashboard",{replace:!0})};return l.jsxs(r2,{children:[l.jsxs(o2,{children:[l.jsxs(i2,{children:[l.jsxs(s2,{children:[l.jsx(a2,{children:"BG"}),l.jsx(l2,{children:"BG Representações"})]}),l.jsxs(u2,{children:["Gestão de ",l.jsx("em",{children:"benefícios"})," com"," ","precisão corporativa."]}),l.jsx(c2,{children:"Plataforma integrada para gerenciamento de clientes, vendas e cartões de vale alimentação — com rastreabilidade completa e auditoria em cada etapa."}),l.jsxs(d2,{children:[l.jsxs(Ql,{children:[l.jsx(Yl,{children:"100%"}),l.jsx(Kl,{children:"Auditado"})]}),l.jsxs(Ql,{children:[l.jsx(Yl,{children:"JWT"}),l.jsx(Kl,{children:"Segurança"})]}),l.jsxs(Ql,{children:[l.jsx(Yl,{children:"3 níveis"}),l.jsx(Kl,{children:"de acesso"})]})]}),l.jsxs(p2,{type:"button",onClick:()=>n(!0),"aria-label":"Abrir formulário de login",children:["Acessar Sistema",l.jsx(s0,{size:17})]})]}),l.jsxs(f2,{children:["© ",new Date().getFullYear()," BG Representações — Uso interno exclusivo."]})]}),l.jsx(h2,{children:l.jsx(m2,{children:l.jsx(sh,{onSubmitSuccess:r})})}),l.jsxs(g2,{$open:t,role:"dialog","aria-modal":"true","aria-label":"Formulário de login",children:[l.jsxs(y2,{children:[l.jsxs(x2,{children:[l.jsx(v2,{children:"BG"}),l.jsx(w2,{children:"BG Representações"})]}),l.jsx($2,{type:"button",onClick:()=>n(!1),"aria-label":"Fechar formulário",children:l.jsx(jd,{size:18})})]}),l.jsx(sh,{onSubmitSuccess:r})]})]})}const F2=qe`
  from { opacity: 0; }
  to   { opacity: 1; }
`,N2=qe`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,O2=qe`
  from { opacity: 0; transform: translateX(32px); }
  to   { opacity: 1; transform: translateX(0); }
`,il=qe`
  from { opacity: 0; transform: translateX(-32px); }
  to   { opacity: 1; transform: translateX(0); }
`;qe`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.03); }
`;const L2=x.div`
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
`,A2=x.section`
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
`,I2=x.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (max-width: 900px) {
    align-items: center;
  }
`,D2=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[16]};
  animation: ${il} 0.6s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({theme:e})=>e.spacing[10]};
    justify-content: center;
  }
`,B2=x.div`
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
`,M2=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary[200]};
  letter-spacing: 0.02em;
`,U2=x.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({theme:e})=>e.spacing[6]};
  animation: ${il} 0.6s 0.1s ease both;
  max-width: 480px;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.8rem, 7vw, 2.4rem);
    max-width: 340px;
  }
`,V2=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.neutral[400]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0 0 ${({theme:e})=>e.spacing[10]};
  max-width: 380px;
  animation: ${il} 0.6s 0.2s ease both;

  @media (max-width: 900px) {
    max-width: 300px;
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }
`,W2=x.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};
  animation: ${il} 0.6s 0.3s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[6]};
  }

  @media (max-width: 380px) {
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,Xl=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,Jl=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[300]};
  line-height: 1;
`,Zl=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[500]};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`,H2=x.div`
  position: relative;
  z-index: 3;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
  animation: ${F2} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`,G2=x.button`
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
  animation: ${N2} 0.6s 0.4s ease both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(180, 90, 20, 0.55);
  }

  @media (max-width: 900px) {
    display: inline-flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,q2=x.section`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[10]};
  animation: ${O2} 0.5s 0.15s ease both;

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
`,Q2=x.div`
  width: 100%;
  max-width: 380px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`,Y2=x.button`
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
`,K2=x.div`
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,X2=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.brand.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
`,J2=x.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,Z2=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,eE=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
`,ah=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,lh=x.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,uh=x.div`
  position: relative;
  display: flex;
  align-items: center;
`,xc=x.input`
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
  ${({$hasToggle:e,theme:t})=>e&&Ii`
    padding-right: ${t.spacing[10]};
  `}
`;x.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: ${({theme:e})=>e.brand.primary};
  transition: width ${({theme:e})=>e.transitions.slow};

  ${xc}:focus ~ & {
    width: 100%;
  }
`;const tE=x.button`
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
`,ch=x.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,nE=x.button`
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
`,rE=x.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;

  @keyframes spin { to { transform: rotate(360deg); } }
`,oE=x.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[6]} 0;
`,iE=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,sE=x.div`
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
`,aE=x.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    width: 40px;
    height: 4px;
    background-color: ${({theme:e})=>e.colors.neutral[300]};
    border-radius: ${({theme:e})=>e.borderRadius.full};
    margin: 0 auto ${({theme:e})=>e.spacing[8]};
  }
`;function lE(){const{login:e}=Zn(),t=Rr(),[n,r]=C.useState(!1),[o,i]=C.useState(!1),[s,a]=C.useState(!1),{register:u,handleSubmit:c,formState:{errors:d}}=Nd({defaultValues:{email:"",password:""}}),p=()=>{r(!0),document.body.style.overflow="hidden"},y=()=>{r(!1),document.body.style.overflow=""},$=async({email:g,password:w})=>{a(!0);try{const{mustChangePassword:b}=await e(g,w);document.body.style.overflow="",b?t("/alterar-senha",{replace:!0}):t("/dashboard",{replace:!0})}catch(b){re.error(b.message,{toastId:"login-error"})}finally{a(!1)}};return l.jsxs(L2,{children:[l.jsxs(A2,{children:[l.jsxs(I2,{children:[l.jsxs(D2,{children:[l.jsx(B2,{children:"BG"}),l.jsx(M2,{children:"BG Representações"})]}),l.jsxs(U2,{children:["Gestão de ",l.jsx("em",{children:"benefícios"})," com"," ","precisão corporativa."]}),l.jsx(V2,{children:"Plataforma integrada para gerenciamento de clientes, vendas e cartões de vale alimentação — com rastreabilidade completa e auditoria em cada etapa."}),l.jsxs(W2,{children:[l.jsxs(Xl,{children:[l.jsx(Jl,{children:"100%"}),l.jsx(Zl,{children:"Auditado"})]}),l.jsxs(Xl,{children:[l.jsx(Jl,{children:"JWT"}),l.jsx(Zl,{children:"Segurança"})]}),l.jsxs(Xl,{children:[l.jsx(Jl,{children:"3 níveis"}),l.jsx(Zl,{children:"de acesso"})]})]}),l.jsxs(G2,{type:"button",onClick:p,children:["Acessar o sistema",l.jsx(s0,{size:17})]})]}),l.jsxs(H2,{children:["© ",new Date().getFullYear()," BG Representações — Uso interno exclusivo."]})]}),l.jsx(sE,{$open:n,onClick:y}),l.jsxs(q2,{$open:n,children:[l.jsx(aE,{}),l.jsx(Y2,{type:"button",onClick:y,"aria-label":"Fechar",children:l.jsx(jd,{size:18})}),l.jsxs(Q2,{children:[l.jsxs(K2,{children:[l.jsx(X2,{children:"Área restrita"}),l.jsx(J2,{children:"Bem-vindo de volta"}),l.jsx(Z2,{children:"Use as credenciais fornecidas pelo administrador para acessar sua conta."})]}),l.jsxs("form",{onSubmit:c($),noValidate:!0,children:[l.jsxs(eE,{children:[l.jsxs(ah,{children:[l.jsx(lh,{htmlFor:"email",children:"E-mail"}),l.jsx(uh,{children:l.jsx(xc,{id:"email",type:"email",placeholder:"seu@email.com",autoComplete:"email",$hasError:!!d.email,disabled:s,...u("email",{required:"O e-mail é obrigatório.",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Informe um e-mail válido."}})})}),d.email&&l.jsxs(ch,{children:[l.jsx(zi,{size:12}),d.email.message]})]}),l.jsxs(ah,{children:[l.jsx(lh,{htmlFor:"password",children:"Senha"}),l.jsxs(uh,{children:[l.jsx(xc,{id:"password",type:o?"text":"password",placeholder:"••••••••",autoComplete:"current-password",$hasError:!!d.password,$hasToggle:!0,disabled:s,...u("password",{required:"A senha é obrigatória.",minLength:{value:6,message:"Mínimo 6 caracteres."}})}),l.jsx(tE,{type:"button",onClick:()=>i(g=>!g),"aria-label":o?"Ocultar senha":"Mostrar senha",tabIndex:-1,children:o?l.jsx(l0,{size:16}):l.jsx(u0,{size:16})})]}),d.password&&l.jsxs(ch,{children:[l.jsx(zi,{size:12}),d.password.message]})]})]}),l.jsx(nE,{type:"submit",disabled:s,$isLoading:s,children:s?l.jsxs(l.Fragment,{children:[l.jsx(rE,{}),"Carregando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(f0,{size:17}),"Entrar"]})})]}),l.jsx(oE,{}),l.jsx(iE,{children:"Problemas com o acesso? Fale com o administrador do sistema."})]})]})]})}const Od=qe`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,uE=x.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  animation: ${Od} 0.35s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,cE=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,dE=x.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,fE=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,pE=x.button`
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
`,hE=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  animation: ${Od} 0.35s 0.05s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,mE=x.div`
  position: relative;
  flex: 1;
  max-width: 360px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,gE=x.span`
  position: absolute;
  left: ${({theme:e})=>e.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.text.muted};
  display: flex;
  align-items: center;
  pointer-events: none;
`,yE=x.input`
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
`,xE=x.select`
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
`,vE=x.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  animation: ${Od} 0.35s 0.1s ease both;
`,wE=x.table`
  width: 100%;
  border-collapse: collapse;
`,$E=x.thead`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,No=x.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  text-align: left;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
  white-space: nowrap;
`,SE=x.tbody``,bE=x.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  transition: background-color ${({theme:e})=>e.transitions.fast};
  cursor: pointer;

  &:last-child { border-bottom: none; }

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[50]};
  }
`,vc=x.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.primary};
  vertical-align: middle;
`,eu=x(vc)`
  color: ${({theme:e})=>e.text.secondary};
`,dh={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},kE=x.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=dh[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=dh[e])==null?void 0:t.color)??"#374151"}};
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
`,EE={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},_E=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[8]};
  gap: ${({theme:e})=>e.spacing[3]};
  text-align: center;
`,CE=x.div`
  color: ${({theme:e})=>e.colors.neutral[300]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,jE=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,RE=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
  max-width: 300px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,PE=x.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  &:last-child { border-bottom: none; }
`,Oo=x.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
`,TE=qe`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,Lo=x.div`
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
  animation: ${TE} 1.4s ease infinite;
`,zE=x.div`
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
`,FE=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
`,NE=x.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,hs=x.button`
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
`,OE=15,LE=({status:e})=>l.jsx(kE,{$status:e,children:EE[e]??e});function AE(){return Array.from({length:5}).map((e,t)=>l.jsxs(PE,{children:[l.jsx(Oo,{children:l.jsx(Lo,{$w:"60%"})}),l.jsx(Oo,{children:l.jsx(Lo,{$w:"80%"})}),l.jsx(Oo,{children:l.jsx(Lo,{$w:"50%"})}),l.jsx(Oo,{children:l.jsx(Lo,{$w:"70%"})}),l.jsx(Oo,{children:l.jsx(Lo,{$w:"40%"})})]},t))}const IE=(e="")=>{const t=e.slice(0,14);return t.length<=2?t:t.length<=5?`${t.slice(0,2)}.${t.slice(2)}`:t.length<=8?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5)}`:t.length<=12?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8)}`:`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8,12)}-${t.slice(12)}`},DE=(e="")=>/^[\d.\-/]+$/.test(e)&&/\d/.test(e),BE=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",ME=e=>({food:"Alimentação",meal:"Refeição",both:"Ambos"})[e]??e??"—";function UE(){const e=Rr(),{hasRole:t}=Zn(),[n,r]=C.useState([]),[o,i]=C.useState({total:0,totalPages:1,currentPage:1}),[s,a]=C.useState(!0),[u,c]=C.useState(""),[d,p]=C.useState(1),[y,$]=C.useState(""),[g,w]=C.useState(""),b=C.useRef(null),m=C.useCallback(async()=>{var k,R,E;a(!0);try{const _=new URLSearchParams({page:d,limit:OE});g&&_.set("search",g),u&&_.set("overall_status",u);const{data:O}=await Ze.get(`/clients?${_.toString()}`);r(O.data??[]),i({total:((k=O.pagination)==null?void 0:k.total)??0,totalPages:((R=O.pagination)==null?void 0:R.totalPages)??1,currentPage:((E=O.pagination)==null?void 0:E.currentPage)??1})}catch(_){re.error(Qn(_,"Erro ao carregar clientes.")),r([])}finally{a(!1)}},[d,g,u]);C.useEffect(()=>{m()},[m]);const f=k=>{const R=k.target.value,E=R.replace(/\D/g,"");if(DE(R)){const _=IE(E);$(_),h(_)}else R===""?($(""),h("")):($(R),h(R))},h=k=>{b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{w(k),p(1)},400)},v=k=>{c(k.target.value),p(1)};return l.jsxs(l.Fragment,{children:[l.jsxs(uE,{children:[l.jsxs(cE,{children:[l.jsx(dE,{children:"Clientes"}),l.jsx(fE,{children:o.total>0?`${o.total} cliente${o.total!==1?"s":""} cadastrado${o.total!==1?"s":""}`:"Nenhum cliente cadastrado ainda"})]}),t("admin","user")&&l.jsxs(pE,{type:"button",onClick:()=>e("/onboarding"),children:[l.jsx(Wb,{size:16}),"Novo Cliente"]})]}),l.jsxs(hE,{children:[l.jsxs(mE,{children:[l.jsxs(gE,{children:[" ",l.jsx(Bb,{size:15})]}),l.jsx(yE,{type:"text",placeholder:"Buscar por Razão Social ou CNPJ…",style:{paddingLeft:"30px"},value:y,onChange:f})]}),l.jsxs(xE,{value:u,onChange:v,children:[l.jsx("option",{value:"",children:"Todos os status"}),l.jsx("option",{value:"pending",children:"Pendente"}),l.jsx("option",{value:"analysis",children:"Em análise"}),l.jsx("option",{value:"approved",children:"Aprovado"})]})]}),l.jsxs(vE,{children:[l.jsxs(wE,{children:[l.jsx($E,{children:l.jsxs("tr",{children:[l.jsx(No,{children:"Razão Social"}),l.jsx(No,{children:"CNPJ"}),l.jsx(No,{children:"Benefício"}),l.jsx(No,{children:"Status"}),l.jsx(No,{children:"Cadastro"})]})}),l.jsxs(SE,{children:[s&&l.jsx(AE,{}),!s&&n.map(k=>l.jsxs(bE,{onClick:()=>e(`/clientes/${k.id}`),title:"Ver detalhes",children:[l.jsx(vc,{children:k.corporate_name}),l.jsx(eu,{children:k.cnpj??"—"}),l.jsx(eu,{children:ME(k.benefit_type)}),l.jsx(vc,{children:l.jsx(LE,{status:k.overall_status})}),l.jsx(eu,{children:BE(k.createdAt)})]},k.id)),!s&&n.length===0&&l.jsx("tr",{children:l.jsx("td",{colSpan:5,children:l.jsxs(_E,{children:[l.jsx(CE,{children:l.jsx(h0,{size:40})}),l.jsx(jE,{children:"Nenhum cliente encontrado"}),l.jsx(RE,{children:y||u?"Tente ajustar os filtros para ver mais resultados.":'Clique em "Novo Cliente" para iniciar o cadastro.'})]})})})]})]}),!s&&o.totalPages>1&&l.jsxs(zE,{children:[l.jsxs(FE,{children:["Página ",o.currentPage," de ",o.totalPages," ","· ",o.total," registros"]}),l.jsxs(NE,{children:[l.jsx(hs,{type:"button",onClick:()=>p(k=>Math.max(1,k-1)),disabled:d<=1,"aria-label":"Página anterior",children:l.jsx(Rb,{size:15})}),Array.from({length:o.totalPages},(k,R)=>R+1).filter(k=>k===1||k===o.totalPages||Math.abs(k-d)<=2).reduce((k,R,E,_)=>(E>0&&R-_[E-1]>1&&k.push("…"),k.push(R),k),[]).map((k,R)=>k==="…"?l.jsx(hs,{disabled:!0,as:"span",children:"…"},`ellipsis-${R}`):l.jsx(hs,{type:"button",$active:k===d,onClick:()=>p(k),children:k},k)),l.jsx(hs,{type:"button",onClick:()=>p(k=>Math.min(o.totalPages,k+1)),disabled:d>=o.totalPages,"aria-label":"Próxima página",children:l.jsx(Pb,{size:15})})]})]})]})]})}const VE=qe`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,WE=qe`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,S0=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  animation: ${VE} 0.35s ease both;
`,b0=x.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,k0=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,HE=x.button`
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
`,E0=x.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,GE=x.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,qE=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  letter-spacing: 0.04em;
`,QE=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`,or=x.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Nr=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Or=x.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,Lr=x.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,_0=x.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Vo=x.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Ve=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`,Ke=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,Xe=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,YE=x(Xe)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,fh={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},ph={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},hh=x.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=fh[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=fh[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`,KE=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,XE=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`,JE=x.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,ZE=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,e_=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;const t_=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,n_=x.div`
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
`,r_=x.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,o_=x.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,i_=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s_=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,a_=x.button`
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
`,l_=x.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,tu=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,nu=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,Ar=x.div`
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
  animation: ${WE} 1.4s ease infinite;
`,u_=x(or)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,c_=x.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[4]} 0;
`,d_=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length!==14?e:t.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5")},f_=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length===11?t.replace(/^(\d{2})(\d{5})(\d{4})$/,"($1) $2-$3"):t.length===10?t.replace(/^(\d{2})(\d{4})(\d{4})$/,"($1) $2-$3"):e},mh=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",p_=e=>e==null?"—":Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),h_={food:"Vale Alimentação",meal:"Vale Refeição",both:"Alimentação + Refeição"},m_={company_document:"Documento da Empresa",proof_of_address:"Comprovante de Endereço",bank_account_proof:"Comprovante Bancário",card_machine_proof:"Comprovante de Maquininha"};function g_(){return l.jsxs(S0,{children:[l.jsx(b0,{children:l.jsxs(k0,{children:[l.jsx(Ar,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),l.jsxs(E0,{children:[l.jsx(Ar,{$w:"220px",$h:"28px"}),l.jsx(Ar,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]})}),l.jsx(_0,{children:l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:l.jsxs(u_,{children:[l.jsx(Ar,{$w:"40%",$h:"18px"}),l.jsx(c_,{}),l.jsx(Vo,{children:Array.from({length:6}).map((e,t)=>l.jsxs(Ve,{children:[l.jsx(Ar,{$w:"50%",$h:"11px"}),l.jsx(Ar,{$w:"80%",$h:"16px",style:{marginTop:"4px"}})]},t))})]})})})]})}const y_=[{value:"pending",label:"Pendente"},{value:"analysis",label:"Em análise"},{value:"approved",label:"Aprovado"}],gh={approved:{bg:"#d1fae5",color:"#065f46"},analysis:{bg:"#dbeafe",color:"#1e40af"},pending:{bg:"#fef3c7",color:"#92400e"}};function x_({clientFlagId:e,currentStatus:t,onUpdated:n,onOptimisticUpdate:r}){const[o,i]=C.useState(!1),[s,a]=C.useState(t),u=gh[s]??gh.pending;C.useEffect(()=>{a(t)},[t]);const c=async d=>{const p=d.target.value,y=s;if(p!==y){a(p),r(e,p),i(!0);try{await Ze.patch(`/client-flags/${e}/status`,{status:p}),re.success("Status da bandeira atualizado."),n()}catch($){a(y),r(e,y),re.error(Qn($,"Erro ao atualizar status."))}finally{i(!1)}}};return l.jsx("select",{value:s,onChange:c,disabled:o,style:{height:"28px",padding:"0 28px 0 8px",border:"1.5px solid #e4d9cf",borderRadius:"99px",fontFamily:"inherit",fontSize:"11px",fontWeight:600,backgroundColor:u.bg,color:u.color,cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 8px center"},children:y_.map(d=>l.jsx("option",{value:d.value,children:d.label},d.value))})}function v_(){var he,Re;const{id:e}=qg(),t=Rr(),{isAdmin:n,isPartner:r,isUser:o,user:i}=Zn(),[s,a]=C.useState(null),[u,c]=C.useState(!0),[d,p]=C.useState(null),y=C.useCallback(async()=>{try{const{data:Z}=await Ze.get(`/clients/${e}`);console.log(Z.data),a(Z.data)}catch(Z){re.error(Qn(Z,"Erro ao carregar dados.")),t("/clientes",{replace:!0})}finally{c(!1)}},[e,t]);C.useEffect(()=>{y()},[y]);const $=C.useCallback((Z,Qe)=>{a(Fe=>Fe&&{...Fe,clientFlags:Fe.clientFlags.map(Ye=>Ye.id===Z?{...Ye,status:Qe}:Ye)})},[]),g=C.useCallback(async()=>{try{const{data:Z}=await Ze.get(`/clients/${e}`);a(Z.data)}catch{}},[e]),w=async Z=>{p(Z.id);try{const Qe=await Ze.get(`/documents/${Z.id}/download`,{responseType:"blob"}),Fe=URL.createObjectURL(Qe.data),Ye=document.createElement("a");Ye.href=Fe,Ye.download=Z.original_name??`documento-${Z.id}`,document.body.appendChild(Ye),Ye.click(),Ye.remove(),URL.revokeObjectURL(Fe)}catch(Qe){re.error(Qn(Qe,"Erro no download."))}finally{p(null)}};if(u)return l.jsx(g_,{});if(!s)return null;const{corporate_name:b,trade_name:m,cnpj:f,state_registration:h,phone:v,email:k,protocol:R,benefit_type:E,overall_status:_,notes:O,createdAt:I,address_street:W,address_number:B,address_complement:H,address_neighborhood:z,address_city:ee,address_state:Y,address_zip:U,clientFlags:F=[],documents:N=[],bankAccounts:G=[]}=s,X=!r&&(n||o&&s.created_by===(i==null?void 0:i.id)),J=!r&&(n||o&&s.created_by===(i==null?void 0:i.id)),pe=W||ee,le=[W,B,H].filter(Boolean).join(", "),ge=[z,ee,Y].filter(Boolean).join(" — ");return l.jsxs(S0,{children:[l.jsxs(b0,{children:[l.jsxs(k0,{children:[l.jsxs(HE,{onClick:()=>t("/clientes"),title:"Voltar",children:[l.jsx(i0,{size:18})," Voltar"]}),l.jsxs(E0,{children:[l.jsx(GE,{children:m||b}),l.jsxs(qE,{children:["Protocolo #",R]})]})]}),l.jsxs(QE,{children:[X&&l.jsxs("button",{onClick:()=>t(`/clientes/${e}/editar`),style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 14px",border:"1.5px solid #e4d9cf",borderRadius:"8px",background:"transparent",fontSize:"13px",fontWeight:500,color:"#7a6455",cursor:"pointer"},children:[l.jsx(Ib,{size:14})," Editar"]}),l.jsx(hh,{$status:_,children:ph[_]??_})]})]}),l.jsxs(_0,{children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l.jsxs(or,{children:[l.jsxs(Nr,{children:[l.jsx(Or,{children:l.jsx(a0,{size:18})}),l.jsx(Lr,{children:"Dados da Empresa"})]}),l.jsxs(Vo,{children:[l.jsxs(Ve,{children:[l.jsx(Ke,{children:"Razão Social"}),l.jsx(Xe,{children:b||"—"})]}),!r&&l.jsxs(Ve,{children:[l.jsx(Ke,{children:"Nome Fantasia"}),l.jsx(Xe,{children:m||"—"})]}),l.jsxs(Ve,{children:[l.jsx(Ke,{children:"CNPJ"}),l.jsx(Xe,{children:d_(f)})]}),!r&&l.jsxs(Ve,{children:[l.jsx(Ke,{children:"Inscrição Estadual"}),l.jsx(Xe,{children:h||"—"})]}),l.jsxs(Ve,{children:[l.jsx(Ke,{children:"Telefone"}),l.jsx(Xe,{children:f_(v)})]}),!r&&l.jsxs(Ve,{children:[l.jsx(Ke,{children:"E-mail"}),l.jsx(Xe,{children:k||"—"})]}),l.jsxs(Ve,{children:[l.jsx(Ke,{children:"Tipo de Benefício"}),l.jsx(Xe,{children:h_[E]??E??"—"})]}),l.jsxs(Ve,{children:[l.jsx(Ke,{children:"Cadastrado em"}),l.jsx(Xe,{children:mh(I)})]}),!r&&O&&l.jsxs(Ve,{$span:!0,children:[l.jsx(Ke,{children:"Observações Internas"}),l.jsx(YE,{children:O})]})]})]}),l.jsxs(or,{children:[l.jsxs(Nr,{children:[l.jsx(Or,{children:l.jsx(p0,{size:18})}),l.jsx(Lr,{children:"Endereço"})]}),pe?l.jsxs(Vo,{$cols:2,children:[l.jsxs(Ve,{$span:!0,children:[l.jsx(Ke,{children:"Logradouro"}),l.jsx(Xe,{children:le||"—"})]}),l.jsxs(Ve,{children:[l.jsx(Ke,{children:"Bairro / Cidade / UF"}),l.jsx(Xe,{children:ge||"—"})]}),l.jsxs(Ve,{children:[l.jsx(Ke,{children:"CEP"}),l.jsx(Xe,{children:U||"—"})]})]}):l.jsx(tu,{children:l.jsx(nu,{children:"Endereço não informado."})})]}),!r&&l.jsxs(or,{children:[l.jsxs(Nr,{children:[l.jsx(Or,{children:l.jsx(mc,{size:18})}),l.jsx(Lr,{children:"Documentos"})]}),N.length>0?l.jsx(t_,{children:N.map(Z=>l.jsxs(n_,{children:[l.jsx(r_,{children:l.jsx(mc,{size:16})}),l.jsxs(o_,{children:[l.jsx(i_,{children:Z.original_name||"Documento"}),l.jsx(s_,{children:m_[Z.document_type]??Z.document_type})]}),l.jsx(a_,{onClick:()=>w(Z),disabled:d===Z.id,children:d===Z.id?l.jsx(Ob,{size:14,className:"animate-spin"}):l.jsx(Fb,{size:14})})]},Z.id))}):l.jsx(tu,{children:l.jsx(nu,{children:"Sem documentos."})})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l.jsxs(or,{children:[l.jsxs(Nr,{children:[l.jsx(Or,{children:l.jsx(c0,{size:18})}),l.jsx(Lr,{children:"Bandeiras"})]}),l.jsx(KE,{children:F.map(Z=>{var Qe;return l.jsxs(XE,{children:[l.jsxs(JE,{children:[l.jsx(ZE,{children:((Qe=Z.flag)==null?void 0:Qe.name)||"Bandeira"}),l.jsx(e_,{children:Z.origin})]}),J?l.jsx(x_,{clientFlagId:Z.id,currentStatus:Z.status,onUpdated:g,onOptimisticUpdate:$}):l.jsx(hh,{$status:Z.status,style:{fontSize:"10px",padding:"2px 8px"},children:ph[Z.status]??Z.status})]},Z.id)})})]}),!r&&l.jsxs(or,{children:[l.jsxs(Nr,{children:[l.jsx(Or,{children:l.jsx(d0,{size:18})}),l.jsx(Lr,{children:"Dados Bancários"})]}),G.length>0?G.map(Z=>l.jsx(l_,{children:l.jsxs(Vo,{$cols:1,children:[l.jsxs(Ve,{children:[l.jsx(Ke,{children:"Banco"}),l.jsx(Xe,{children:Z.bank_name})]}),l.jsxs(Ve,{children:[l.jsx(Ke,{children:"Agência/Conta"}),l.jsxs(Xe,{children:[Z.agency,Z.agency_digit?`-${Z.agency_digit}`:""," / ",Z.account,Z.account_digit?`-${Z.account_digit}`:""]})]})]})},Z.id)):l.jsx(tu,{children:l.jsx(nu,{children:"Sem dados bancários."})})]}),s.sales&&s.sales.length>0&&l.jsxs(or,{children:[l.jsxs(Nr,{children:[l.jsx(Or,{children:l.jsx(zb,{size:18})}),l.jsx(Lr,{children:"Plano Contratado"})]}),l.jsxs(Vo,{$cols:1,children:[l.jsxs(Ve,{children:[l.jsx(Ke,{children:"Nome do Plano"}),l.jsx(Xe,{children:((he=s.sales[0])==null?void 0:he.plan_name)||"—"})]}),l.jsxs(Ve,{children:[l.jsx(Ke,{children:"Valor"}),l.jsx(Xe,{children:p_((Re=s.sales[0])==null?void 0:Re.total_value)})]}),l.jsxs(Ve,{children:[l.jsx(Ke,{children:"Data da Venda"}),l.jsx(Xe,{children:mh(s.sales[0].createdAt)})]})]})]})]})]}),l.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } } .animate-spin { animation: spin 1s linear infinite; }"})]})}const w_=qe`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,$_=qe`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,C0=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px; /* espaço para o footer fixo */
  animation: ${w_} 0.3s ease both;
`,j0=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,S_=x.button`
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
`,R0=x.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,b_=x.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,k_=x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,Wo=x.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,ms=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,gs=x.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,ys=x.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,si=x.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,yh=x.div`
  grid-column: 1 / -1;
`,we=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,be=x.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,xs=x.span`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.neutral[400]};
  flex-shrink: 0;
`,Ld=({theme:e,$hasError:t})=>`
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
`,mt=x.input`
  ${({theme:e,$hasError:t})=>Ld({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,vs=x.select`
  ${({theme:e,$hasError:t})=>Ld({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,E_=x.textarea`
  ${({theme:e,$hasError:t})=>Ld({theme:e,$hasError:t})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,ws=x.div`
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
`,$s=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[400]};
  font-style: italic;
`,__=x.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,Ho=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,C_=x.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,j_=x.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,R_=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,P_=x.div`
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
`,T_=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,z_=x.label`
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
`,F_=x.div`
  color: ${({theme:e,$hasFile:t})=>t?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,N_=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,O_=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,xh=x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,vh=x.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,wh=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$h=x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,L_=x.button`
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
`,A_=x.div`
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
`,I_=x.button`
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
`,D_=x.button`
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
`,B_=x.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,tr=x.div`
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
  animation: ${$_} 1.4s ease infinite;
`,Sh=x(Wo)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,bh=x.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`;x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`;x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`;x.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`;x.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`;x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`;x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`;x.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;x.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`;x.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;x.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;x.button`
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
`;x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`;x.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`;x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  /* Span full width dentro do grid (ex: campo "notes") */
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`;x.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`;const M_=x.span`
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
`;x(M_)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;const kh={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}};x.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=kh[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=kh[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`;let ru=null;const U_=[{key:"contrato",fieldName:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",hint:"Substitui o documento existente",multiple:!1},{key:"proof_of_address",fieldName:"documentos",type:"proof_of_address",label:"Comprovante de Endereço",hint:"Substitui o documento existente",multiple:!1,docIndex:0},{key:"bank_account_proof",fieldName:"documentos",type:"bank_account_proof",label:"Comprovante Bancário",hint:"Substitui o documento existente",multiple:!1,docIndex:1},{key:"card_machine_proof",fieldName:"documentos",type:"card_machine_proof",label:"Comprovante de Maquininha",hint:"Substitui o documento existente",multiple:!1,docIndex:2}],V_=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],W_=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],H_=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],Eh=(e="")=>{const t=e.replace(/\D/g,"").slice(0,11);return t.length<=2?`(${t}`:t.length<=6?`(${t.slice(0,2)}) ${t.slice(2)}`:t.length<=10?`(${t.slice(0,2)}) ${t.slice(2,6)}-${t.slice(6)}`:`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7)}`},_h=(e="")=>{const t=e.replace(/\D/g,"").slice(0,8);return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5)}`},G_=(e="")=>e.replace(/\D/g,""),Ch=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function q_(){const e=t=>Array.from({length:t}).map((n,r)=>l.jsxs(we,{children:[l.jsx(tr,{$w:"45%",$h:"11px"}),l.jsx(tr,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},r));return l.jsxs(C0,{children:[l.jsxs(j0,{children:[l.jsx(tr,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),l.jsxs(R0,{children:[l.jsx(tr,{$w:"200px",$h:"28px"}),l.jsx(tr,{$w:"140px",$h:"14px",style:{marginTop:"4px"}})]})]}),l.jsxs(Sh,{children:[l.jsx(tr,{$w:"35%",$h:"20px"}),l.jsx(bh,{}),l.jsx(si,{children:e(6)})]}),l.jsxs(Sh,{children:[l.jsx(tr,{$w:"30%",$h:"20px"}),l.jsx(bh,{}),l.jsx(si,{children:e(4)})]})]})}function Q_({slot:e,existingDoc:t,selectedFile:n,onFileSelect:r,onClearFile:o,disabled:i}){const s=C.useRef(null),a=!!n,u=!!t;return l.jsxs(P_,{$hasFile:a,children:[l.jsx(T_,{children:e.label}),a?l.jsxs(xh,{children:[l.jsx(Mp,{size:16,style:{color:"#B45A14",flexShrink:0}}),l.jsxs(vh,{children:[l.jsx(wh,{children:n.name}),l.jsxs($h,{children:[Ch(n.size)," · Novo arquivo"]})]}),l.jsx(L_,{type:"button",onClick:()=>o(e.key),disabled:i,title:"Remover seleção",children:l.jsx(Ub,{size:13})})]}):u?l.jsxs(xh,{children:[l.jsx(Mp,{size:16,style:{color:"#7a6455",flexShrink:0}}),l.jsxs(vh,{children:[l.jsx(wh,{children:t.original_name??"Documento existente"}),l.jsxs($h,{children:[t.file_size?Ch(t.file_size)+" · ":"","Substituir clicando abaixo"]})]})]}):null,l.jsxs(z_,{htmlFor:`doc-input-${e.key}`,children:[l.jsx(F_,{$hasFile:a,children:l.jsx(Vb,{size:22})}),l.jsx(N_,{children:a?"Trocar arquivo":u?"Substituir documento":"Selecionar arquivo"}),l.jsx(O_,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),l.jsx("input",{ref:s,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:i,onChange:c=>{var p;const d=(p=c.target.files)==null?void 0:p[0];d&&r(e.key,d),c.target.value=""}}),l.jsx(Ho,{children:e.hint})]})}function Y_(){const{id:e}=qg(),t=Rr(),{isPartner:n}=Zn(),[r,o]=C.useState(!0),[i,s]=C.useState(!1),[a,u]=C.useState(""),[c,d]=C.useState([]),[p,y]=C.useState(!1);C.useEffect(()=>{n&&(re.error("Acesso negado. Parceiros não podem editar clientes."),t(`/clientes/${e}`,{replace:!0}))},[n,t,e]);const[$,g]=C.useState({corporate_name:"",cnpj:"",email:"",state_registration:""}),[w,b]=C.useState({}),[m,f]=C.useState({}),{register:h,handleSubmit:v,reset:k,setValue:R,formState:{errors:E,isDirty:_}}=Nd({defaultValues:{trade_name:"",phone:"",benefit_type:"food",notes:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",bank_bank_name:"",bank_bank_code:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking",partner_id:""}}),O=C.useCallback(async()=>{var z,ee;if(!n){o(!0);try{const{data:Y}=await Ze.get(`/clients/${e}`),U=Y.data;u(U.trade_name||U.corporate_name||""),g({corporate_name:U.corporate_name??"",cnpj:U.cnpj??"",email:U.email??"",state_registration:U.state_registration??""});const F={};(U.documents??[]).forEach(G=>{F[G.document_type]=G}),b(F);const N=(z=U.bankAccounts)==null?void 0:z[0];k({trade_name:U.trade_name??"",phone:Eh(U.phone??""),benefit_type:U.benefit_type??"food",notes:U.notes??"",address_street:U.address_street??"",address_number:U.address_number??"",address_complement:U.address_complement??"",address_neighborhood:U.address_neighborhood??"",address_city:U.address_city??"",address_state:U.address_state??"",address_zip:_h(U.address_zip??""),bank_bank_name:(N==null?void 0:N.bank_name)??"",bank_bank_code:(N==null?void 0:N.bank_code)??"",bank_agency:(N==null?void 0:N.agency)??"",bank_agency_digit:(N==null?void 0:N.agency_digit)??"",bank_account:(N==null?void 0:N.account)??"",bank_account_digit:(N==null?void 0:N.account_digit)??"",bank_account_type:(N==null?void 0:N.account_type)??"checking",partner_id:((ee=U.partner)==null?void 0:ee.id)??U.partner_id??""})}catch(Y){re.error(Qn(Y,"Erro ao carregar dados do cliente.")),t(`/clientes/${e}`,{replace:!0})}finally{o(!1)}}},[e,t,k,n]);C.useEffect(()=>{O()},[O]),C.useEffect(()=>{if(n)return;(async()=>{var ee;if(ru){d(ru);return}y(!0);try{const U=((ee=(await Ze.get("/users?role=partner&limit=100")).data)==null?void 0:ee.data)??[];ru=U,d(U)}catch(Y){console.error("Erro na busca de parceiros:",Y)}finally{y(!1)}})()},[]);const I=(z,ee)=>{f(Y=>({...Y,[z]:ee}))},W=z=>{f(ee=>{const Y={...ee};return delete Y[z],Y})},B=async z=>{var ee,Y;s(!0);try{const U=Object.keys(m).length>0,F={trade_name:z.trade_name||void 0,phone:G_(z.phone)||void 0,benefit_type:z.benefit_type,notes:z.notes||void 0,address_street:z.address_street||void 0,address_number:z.address_number||void 0,address_complement:z.address_complement||void 0,address_neighborhood:z.address_neighborhood||void 0,address_city:z.address_city||void 0,address_state:z.address_state||void 0,address_zip:z.address_zip||void 0,partner_id:z.partner_id||null,...z.bank_bank_name&&z.bank_agency&&z.bank_account?{bankAccount:{bank_name:z.bank_bank_name,bank_code:z.bank_bank_code||void 0,agency:z.bank_agency,agency_digit:z.bank_agency_digit||void 0,account:z.bank_account,account_digit:z.bank_account_digit,account_type:z.bank_account_type}}:{}};if(Object.keys(F).forEach(N=>F[N]===void 0&&delete F[N]),U){const N=new FormData;N.append("data",JSON.stringify(F)),m.contrato&&N.append("contrato",m.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(X=>{m[X]&&N.append("documentos",m[X])}),await Ze.patch(`/clients/${e}`,N,{headers:{"Content-Type":"multipart/form-data"}})}else await Ze.patch(`/clients/${e}`,F);re.success("Cliente atualizado com sucesso!",{toastId:"client-updated"}),t(`/clientes/${e}`,{replace:!0})}catch(U){(Y=(ee=U.response)==null?void 0:ee.data)!=null&&Y.errors&&console.table(U.response.data.errors),re.error(Qn(U,"Erro ao salvar alterações."))}finally{s(!1)}};if(n)return null;if(r)return l.jsx(q_,{});const H=_||Object.keys(m).length>0;return l.jsxs(l.Fragment,{children:[l.jsxs(C0,{children:[l.jsxs(j0,{children:[l.jsxs(S_,{type:"button",onClick:()=>t(`/clientes/${e}`),children:[l.jsx(i0,{size:15}),"Voltar"]}),l.jsxs(R0,{children:[l.jsx(b_,{children:"Editar Cliente"}),l.jsx(k_,{children:a})]})]}),l.jsxs("form",{id:"edit-client-form",onSubmit:v(B),noValidate:!0,children:[l.jsxs(Wo,{style:{marginBottom:"24px"},children:[l.jsxs(ms,{children:[l.jsx(gs,{children:l.jsx(a0,{size:18})}),l.jsx(ys,{children:"Dados da Empresa"})]}),l.jsxs(si,{children:[l.jsxs(we,{children:[l.jsxs(be,{children:[l.jsx(xs,{children:l.jsx(ps,{size:11})}),"Razão Social"]}),l.jsx(ws,{title:"Campo único — não pode ser alterado",children:$.corporate_name||"—"}),l.jsx($s,{children:"Campo único, não pode ser editado."})]}),l.jsxs(we,{children:[l.jsxs(be,{children:[l.jsx(xs,{children:l.jsx(ps,{size:11})}),"CNPJ"]}),l.jsx(ws,{title:"Campo único — não pode ser alterado",children:$.cnpj||"—"}),l.jsx($s,{children:"Campo único, não pode ser editado."})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"trade_name",children:"Nome Fantasia"}),l.jsx(mt,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",disabled:i,...h("trade_name")})]}),l.jsxs(we,{children:[l.jsxs(be,{children:[l.jsx(xs,{children:l.jsx(ps,{size:11})}),"Inscrição Estadual"]}),l.jsx(ws,{title:"Campo único — não pode ser alterado",children:$.state_registration||"—"}),l.jsx($s,{children:"Campo único, não pode ser editado."})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"phone",children:"Telefone"}),l.jsx(mt,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",disabled:i,...h("phone",{onChange:z=>R("phone",Eh(z.target.value))})})]}),l.jsxs(we,{children:[l.jsxs(be,{children:[l.jsx(xs,{children:l.jsx(ps,{size:11})}),"E-mail"]}),l.jsx(ws,{title:"Campo único — não pode ser alterado",children:$.email||"—"}),l.jsx($s,{children:"Campo único, não pode ser editado."})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),l.jsx(vs,{id:"benefit_type",$hasError:!!E.benefit_type,disabled:i,...h("benefit_type",{required:"Selecione o tipo."}),children:V_.map(z=>l.jsx("option",{value:z.value,children:z.label},z.value))}),E.benefit_type&&l.jsxs(__,{children:[l.jsx(zi,{size:11}),E.benefit_type.message]})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"partner_id",children:"Parceiro Vinculado"}),l.jsxs(vs,{id:"partner_id",disabled:i||p,...h("partner_id"),children:[l.jsx("option",{value:"",children:p?"Carregando parceiros…":"Sem parceiro vinculado"}),c.map(z=>l.jsx("option",{value:z.id,children:z.name},z.id))]}),l.jsx(Ho,{children:p?"Buscando parceiros cadastrados…":`${c.length} parceiro${c.length!==1?"s":""} disponível${c.length!==1?"is":""}`})]}),l.jsx(yh,{children:l.jsxs(we,{children:[l.jsx(be,{htmlFor:"notes",children:"Observações"}),l.jsx(E_,{id:"notes",placeholder:"Observações internas…",disabled:i,...h("notes")}),l.jsx(Ho,{children:"Visível apenas para a equipe interna."})]})})]})]}),l.jsxs(Wo,{style:{marginBottom:"24px"},children:[l.jsxs(ms,{children:[l.jsx(gs,{children:l.jsx(p0,{size:18})}),l.jsx(ys,{children:"Endereço"})]}),l.jsxs(si,{children:[l.jsx(yh,{children:l.jsxs(we,{children:[l.jsx(be,{htmlFor:"address_street",children:"Logradouro"}),l.jsx(mt,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",disabled:i,...h("address_street")})]})}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"address_number",children:"Número"}),l.jsx(mt,{id:"address_number",type:"text",placeholder:"Nº",disabled:i,...h("address_number")})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"address_complement",children:"Complemento"}),l.jsx(mt,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",disabled:i,...h("address_complement")})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"address_neighborhood",children:"Bairro"}),l.jsx(mt,{id:"address_neighborhood",type:"text",placeholder:"Bairro",disabled:i,...h("address_neighborhood")})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"address_city",children:"Cidade"}),l.jsx(mt,{id:"address_city",type:"text",placeholder:"Cidade",disabled:i,...h("address_city")})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"address_state",children:"UF"}),l.jsxs(vs,{id:"address_state",disabled:i,...h("address_state"),children:[l.jsx("option",{value:"",children:"Selecione"}),H_.map(z=>l.jsx("option",{value:z,children:z},z))]})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"address_zip",children:"CEP"}),l.jsx(mt,{id:"address_zip",type:"text",placeholder:"00000-000",disabled:i,...h("address_zip",{onChange:z=>R("address_zip",_h(z.target.value))})})]})]})]}),l.jsxs(Wo,{style:{marginBottom:"24px"},children:[l.jsxs(ms,{children:[l.jsx(gs,{children:l.jsx(d0,{size:18})}),l.jsx(ys,{children:"Conta Bancária"})]}),l.jsxs(C_,{children:[l.jsx(j_,{children:"Dados Bancários Principais"}),l.jsxs(si,{children:[l.jsxs(we,{children:[l.jsx(be,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),l.jsx(mt,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",disabled:i,...h("bank_bank_name")})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"bank_bank_code",children:"Código COMPE"}),l.jsx(mt,{id:"bank_bank_code",type:"text",placeholder:"Ex: 237",disabled:i,...h("bank_bank_code")}),l.jsx(Ho,{children:"Código de 3 dígitos (opcional)."})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"bank_agency",children:"Agência"}),l.jsx(mt,{id:"bank_agency",type:"text",placeholder:"0000",disabled:i,...h("bank_agency")})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),l.jsx(mt,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,disabled:i,...h("bank_agency_digit")})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"bank_account",children:"Conta"}),l.jsx(mt,{id:"bank_account",type:"text",placeholder:"000000",disabled:i,...h("bank_account")})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"bank_account_digit",children:"Dígito Conta"}),l.jsx(mt,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,disabled:i,...h("bank_account_digit")})]}),l.jsxs(we,{children:[l.jsx(be,{htmlFor:"bank_account_type",children:"Tipo de Conta"}),l.jsx(vs,{id:"bank_account_type",disabled:i,...h("bank_account_type"),children:W_.map(z=>l.jsx("option",{value:z.value,children:z.label},z.value))})]})]})]})]}),l.jsxs(Wo,{style:{marginBottom:"24px"},children:[l.jsxs(ms,{children:[l.jsx(gs,{children:l.jsx(mc,{size:18})}),l.jsx(ys,{children:"Documentos"})]}),l.jsxs(Ho,{style:{marginBottom:"16px"},children:["Selecione um novo arquivo para ",l.jsx("strong",{children:"substituir"})," o documento existente no servidor. O arquivo antigo é removido automaticamente do Cloudinary."]}),l.jsx(R_,{children:U_.map(z=>l.jsx(Q_,{slot:z,existingDoc:w[z.type],selectedFile:m[z.key],onFileSelect:I,onClearFile:W,disabled:i},z.key))})]})]})]}),l.jsxs(A_,{children:[l.jsxs(I_,{type:"button",disabled:i,onClick:()=>t(`/clientes/${e}`),children:[l.jsx(jd,{size:15}),"Cancelar"]}),l.jsx(D_,{type:"submit",form:"edit-client-form",disabled:i||!H,$isSubmitting:i,title:H?void 0:"Nenhuma alteração detectada",children:i?l.jsxs(l.Fragment,{children:[l.jsx(B_,{}),"Salvando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(Db,{size:15}),"Salvar Alterações"]})})]})]})}const un=({title:e})=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center",justifyContent:"center",minHeight:"60vh",color:"#7a6455"},children:[l.jsx("p",{style:{fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Em construção"}),l.jsx("p",{style:{fontSize:"22px",fontWeight:"700",fontFamily:"serif"},children:e})]});function K_(){const e=window.location.hostname.includes("github.io"),t=e?uw:lw,n=e?{}:{basename:"/bgrepresentacoes-web/"};return l.jsxs(m$,{theme:$p,children:[l.jsx(A$,{}),l.jsx(t,{...n,children:l.jsxs(yb,{children:[l.jsx(P$,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",style:{fontFamily:$p.typography.fontFamily.sans}}),l.jsxs(ew,{children:[l.jsx(Pe,{path:"/login",element:l.jsx(z2,{})}),l.jsx(Pe,{element:l.jsx(Hl,{}),children:l.jsx(Pe,{path:"/alterar-senha",element:l.jsx(lE,{})})}),l.jsx(Pe,{element:l.jsx(Hl,{}),children:l.jsxs(Pe,{element:l.jsx(Up,{}),children:[l.jsx(Pe,{path:"/dashboard",element:l.jsx(un,{title:"Dashboard"})}),l.jsx(Pe,{path:"/clientes",element:l.jsx(UE,{})}),l.jsx(Pe,{path:"/clientes/:id",element:l.jsx(v_,{})}),l.jsx(Pe,{path:"/clientes/:id/editar",element:l.jsx(Y_,{})}),l.jsx(Pe,{path:"/onboarding",element:l.jsx(un,{title:"Novo Cliente"})}),l.jsx(Pe,{path:"/vendas",element:l.jsx(un,{title:"Vendas"})}),l.jsx(Pe,{path:"/vendas/:id",element:l.jsx(un,{title:"Detalhe da Venda"})}),l.jsx(Pe,{path:"/perfil",element:l.jsx(un,{title:"Meu Perfil"})})]})}),l.jsx(Pe,{element:l.jsx(Hl,{allowedRoles:["admin"]}),children:l.jsxs(Pe,{element:l.jsx(Up,{}),children:[l.jsx(Pe,{path:"/usuarios",element:l.jsx(un,{title:"Usuários"})}),l.jsx(Pe,{path:"/bandeiras",element:l.jsx(un,{title:"Bandeiras"})}),l.jsx(Pe,{path:"/planos",element:l.jsx(un,{title:"Planos"})}),l.jsx(Pe,{path:"/relatorios",element:l.jsx(un,{title:"Relatórios"})})]})}),l.jsx(Pe,{path:"/",element:l.jsx(ha,{to:"/dashboard",replace:!0})}),l.jsx(Pe,{path:"*",element:l.jsx(ha,{to:"/dashboard",replace:!0})})]})]})})]})}ou.createRoot(document.getElementById("root")).render(l.jsx(Q.StrictMode,{children:l.jsx(K_,{})}));
