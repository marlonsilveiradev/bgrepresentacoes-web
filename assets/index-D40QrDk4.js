function Ix(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function pm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hm={exports:{}},Ha={},mm={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qi=Symbol.for("react.element"),Dx=Symbol.for("react.portal"),Mx=Symbol.for("react.fragment"),Bx=Symbol.for("react.strict_mode"),Ux=Symbol.for("react.profiler"),Vx=Symbol.for("react.provider"),Wx=Symbol.for("react.context"),Hx=Symbol.for("react.forward_ref"),Gx=Symbol.for("react.suspense"),qx=Symbol.for("react.memo"),Yx=Symbol.for("react.lazy"),yf=Symbol.iterator;function Qx(e){return e===null||typeof e!="object"?null:(e=yf&&e[yf]||e["@@iterator"],typeof e=="function"?e:null)}var gm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ym=Object.assign,xm={};function Oo(e,t,n){this.props=e,this.context=t,this.refs=xm,this.updater=n||gm}Oo.prototype.isReactComponent={};Oo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Oo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vm(){}vm.prototype=Oo.prototype;function Vc(e,t,n){this.props=e,this.context=t,this.refs=xm,this.updater=n||gm}var Wc=Vc.prototype=new vm;Wc.constructor=Vc;ym(Wc,Oo.prototype);Wc.isPureReactComponent=!0;var xf=Array.isArray,wm=Object.prototype.hasOwnProperty,Hc={current:null},$m={key:!0,ref:!0,__self:!0,__source:!0};function bm(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)wm.call(t,r)&&!$m.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:qi,type:e,key:i,ref:s,props:o,_owner:Hc.current}}function Kx(e,t){return{$$typeof:qi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gc(e){return typeof e=="object"&&e!==null&&e.$$typeof===qi}function Xx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vf=/\/+/g;function jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xx(""+e.key):t.toString(36)}function Ls(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case qi:case Dx:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+jl(s,0):r,xf(o)?(n="",e!=null&&(n=e.replace(vf,"$&/")+"/"),Ls(o,t,n,"",function(c){return c})):o!=null&&(Gc(o)&&(o=Kx(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(vf,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",xf(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+jl(i,a);s+=Ls(i,t,n,u,o)}else if(u=Qx(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+jl(i,a++),s+=Ls(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ss(e,t,n){if(e==null)return e;var r=[],o=0;return Ls(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Jx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},Is={transition:null},Zx={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Is,ReactCurrentOwner:Hc};function Sm(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:ss,forEach:function(e,t,n){ss(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ss(e,function(){t++}),t},toArray:function(e){return ss(e,function(t){return t})||[]},only:function(e){if(!Gc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};oe.Component=Oo;oe.Fragment=Mx;oe.Profiler=Ux;oe.PureComponent=Vc;oe.StrictMode=Bx;oe.Suspense=Gx;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zx;oe.act=Sm;oe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ym({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Hc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)wm.call(t,u)&&!$m.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:qi,type:e.type,key:o,ref:i,props:r,_owner:s}};oe.createContext=function(e){return e={$$typeof:Wx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vx,_context:e},e.Consumer=e};oe.createElement=bm;oe.createFactory=function(e){var t=bm.bind(null,e);return t.type=e,t};oe.createRef=function(){return{current:null}};oe.forwardRef=function(e){return{$$typeof:Hx,render:e}};oe.isValidElement=Gc;oe.lazy=function(e){return{$$typeof:Yx,_payload:{_status:-1,_result:e},_init:Jx}};oe.memo=function(e,t){return{$$typeof:qx,type:e,compare:t===void 0?null:t}};oe.startTransition=function(e){var t=Is.transition;Is.transition={};try{e()}finally{Is.transition=t}};oe.unstable_act=Sm;oe.useCallback=function(e,t){return yt.current.useCallback(e,t)};oe.useContext=function(e){return yt.current.useContext(e)};oe.useDebugValue=function(){};oe.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};oe.useEffect=function(e,t){return yt.current.useEffect(e,t)};oe.useId=function(){return yt.current.useId()};oe.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};oe.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};oe.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};oe.useMemo=function(e,t){return yt.current.useMemo(e,t)};oe.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};oe.useRef=function(e){return yt.current.useRef(e)};oe.useState=function(e){return yt.current.useState(e)};oe.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};oe.useTransition=function(){return yt.current.useTransition()};oe.version="18.3.1";mm.exports=oe;var j=mm.exports;const Q=pm(j),e1=Ix({__proto__:null,default:Q},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1=j,n1=Symbol.for("react.element"),r1=Symbol.for("react.fragment"),o1=Object.prototype.hasOwnProperty,i1=t1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s1={key:!0,ref:!0,__self:!0,__source:!0};function km(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)o1.call(t,r)&&!s1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:n1,type:e,key:i,ref:s,props:o,_owner:i1.current}}Ha.Fragment=r1;Ha.jsx=km;Ha.jsxs=km;hm.exports=Ha;var l=hm.exports,ku={},_m={exports:{}},At={},Em={exports:{}},jm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,D){var z=P.length;P.push(D);e:for(;0<z;){var X=z-1>>>1,W=P[X];if(0<o(W,D))P[X]=D,P[z]=W,z=X;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],z=P.pop();if(z!==D){P[0]=z;e:for(var X=0,W=P.length,ce=W>>>1;X<ce;){var le=2*(X+1)-1,ye=P[le],me=le+1,Te=P[me];if(0>o(ye,z))me<W&&0>o(Te,ye)?(P[X]=Te,P[me]=z,X=me):(P[X]=ye,P[le]=z,X=le);else if(me<W&&0>o(Te,z))P[X]=Te,P[me]=z,X=me;else break e}}return D}function o(P,D){var z=P.sortIndex-D.sortIndex;return z!==0?z:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],d=1,f=null,m=3,$=!1,y=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(P){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=P)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function v(P){if(x=!1,h(P),!y)if(n(u)!==null)y=!0,L(k);else{var D=n(c);D!==null&&I(v,D.startTime-P)}}function k(P,D){y=!1,x&&(x=!1,g(E),E=-1),$=!0;var z=m;try{for(h(D),f=n(u);f!==null&&(!(f.expirationTime>D)||P&&!B());){var X=f.callback;if(typeof X=="function"){f.callback=null,m=f.priorityLevel;var W=X(f.expirationTime<=D);D=e.unstable_now(),typeof W=="function"?f.callback=W:f===n(u)&&r(u),h(D)}else r(u);f=n(u)}if(f!==null)var ce=!0;else{var le=n(c);le!==null&&I(v,le.startTime-D),ce=!1}return ce}finally{f=null,m=z,$=!1}}var T=!1,_=null,E=-1,O=5,N=-1;function B(){return!(e.unstable_now()-N<O)}function V(){if(_!==null){var P=e.unstable_now();N=P;var D=!0;try{D=_(!0,P)}finally{D?G():(T=!1,_=null)}}else T=!1}var G;if(typeof p=="function")G=function(){p(V)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ne=Z.port2;Z.port1.onmessage=V,G=function(){ne.postMessage(null)}}else G=function(){b(V,0)};function L(P){_=P,T||(T=!0,G())}function I(P,D){E=b(function(){P(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||$||(y=!0,L(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var z=m;m=D;try{return P()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=m;m=P;try{return D()}finally{m=z}},e.unstable_scheduleCallback=function(P,D,z){var X=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?X+z:X):z=X,P){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=z+W,P={id:d++,callback:D,priorityLevel:P,startTime:z,expirationTime:W,sortIndex:-1},z>X?(P.sortIndex=z,t(c,P),n(u)===null&&P===n(c)&&(x?(g(E),E=-1):x=!0,I(v,z-X))):(P.sortIndex=W,t(u,P),y||$||(y=!0,L(k))),P},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(P){var D=m;return function(){var z=m;m=D;try{return P.apply(this,arguments)}finally{m=z}}}})(jm);Em.exports=jm;var a1=Em.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1=j,Nt=a1;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cm=new Set,bi={};function Ar(e,t){vo(e,t),vo(e+"Capture",t)}function vo(e,t){for(bi[e]=t,e=0;e<t.length;e++)Cm.add(t[e])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=Object.prototype.hasOwnProperty,u1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wf={},$f={};function c1(e){return _u.call($f,e)?!0:_u.call(wf,e)?!1:u1.test(e)?$f[e]=!0:(wf[e]=!0,!1)}function d1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function f1(e,t,n,r){if(t===null||typeof t>"u"||d1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xt(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ot[e]=new xt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ot[t]=new xt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ot[e]=new xt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ot[e]=new xt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ot[e]=new xt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ot[e]=new xt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ot[e]=new xt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ot[e]=new xt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ot[e]=new xt(e,5,!1,e.toLowerCase(),null,!1,!1)});var qc=/[\-:]([a-z])/g;function Yc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qc,Yc);ot[t]=new xt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qc,Yc);ot[t]=new xt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qc,Yc);ot[t]=new xt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ot[e]=new xt(e,1,!1,e.toLowerCase(),null,!1,!1)});ot.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ot[e]=new xt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qc(e,t,n,r){var o=ot.hasOwnProperty(t)?ot[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(f1(t,n,o,r)&&(n=null),r||o===null?c1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tn=l1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,as=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),eo=Symbol.for("react.fragment"),Kc=Symbol.for("react.strict_mode"),Eu=Symbol.for("react.profiler"),Tm=Symbol.for("react.provider"),Fm=Symbol.for("react.context"),Xc=Symbol.for("react.forward_ref"),ju=Symbol.for("react.suspense"),Cu=Symbol.for("react.suspense_list"),Jc=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),Rm=Symbol.for("react.offscreen"),bf=Symbol.iterator;function Mo(e){return e===null||typeof e!="object"?null:(e=bf&&e[bf]||e["@@iterator"],typeof e=="function"?e:null)}var Ce=Object.assign,Cl;function Zo(e){if(Cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cl=t&&t[1]||""}return`
`+Cl+e}var Tl=!1;function Fl(e,t){if(!e||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zo(e):""}function p1(e){switch(e.tag){case 5:return Zo(e.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function Tu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case eo:return"Fragment";case Zr:return"Portal";case Eu:return"Profiler";case Kc:return"StrictMode";case ju:return"Suspense";case Cu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fm:return(e.displayName||"Context")+".Consumer";case Tm:return(e._context.displayName||"Context")+".Provider";case Xc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jc:return t=e.displayName||null,t!==null?t:Tu(e.type)||"Memo";case zn:t=e._payload,e=e._init;try{return Tu(e(t))}catch{}}return null}function h1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tu(t);case 8:return t===Kc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function m1(e){var t=Pm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ls(e){e._valueTracker||(e._valueTracker=m1(e))}function Om(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function sa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fu(e,t){var n=t.checked;return Ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zm(e,t){t=t.checked,t!=null&&Qc(e,"checked",t,!1)}function Ru(e,t){zm(e,t);var n=tr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pu(e,t.type,tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pu(e,t,n){(t!=="number"||sa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ei=Array.isArray;function po(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ou(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _f(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(ei(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tr(n)}}function Nm(e,t){var n=tr(t.value),r=tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ef(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Am(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Am(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var us,Lm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(us=us||document.createElement("div"),us.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=us.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g1=["Webkit","ms","Moz","O"];Object.keys(ai).forEach(function(e){g1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ai[t]=ai[e]})});function Im(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ai.hasOwnProperty(e)&&ai[e]?(""+t).trim():t+"px"}function Dm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Im(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var y1=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nu(e,t){if(t){if(y1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Au(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lu=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Iu=null,ho=null,mo=null;function jf(e){if(e=Ki(e)){if(typeof Iu!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Ka(t),Iu(e.stateNode,e.type,t))}}function Mm(e){ho?mo?mo.push(e):mo=[e]:ho=e}function Bm(){if(ho){var e=ho,t=mo;if(mo=ho=null,jf(e),t)for(e=0;e<t.length;e++)jf(t[e])}}function Um(e,t){return e(t)}function Vm(){}var Rl=!1;function Wm(e,t,n){if(Rl)return e(t,n);Rl=!0;try{return Um(e,t,n)}finally{Rl=!1,(ho!==null||mo!==null)&&(Vm(),Bm())}}function ki(e,t){var n=e.stateNode;if(n===null)return null;var r=Ka(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Du=!1;if(_n)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){Du=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{Du=!1}function x1(e,t,n,r,o,i,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var li=!1,aa=null,la=!1,Mu=null,v1={onError:function(e){li=!0,aa=e}};function w1(e,t,n,r,o,i,s,a,u){li=!1,aa=null,x1.apply(v1,arguments)}function $1(e,t,n,r,o,i,s,a,u){if(w1.apply(this,arguments),li){if(li){var c=aa;li=!1,aa=null}else throw Error(A(198));la||(la=!0,Mu=c)}}function Lr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cf(e){if(Lr(e)!==e)throw Error(A(188))}function b1(e){var t=e.alternate;if(!t){if(t=Lr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Cf(o),e;if(i===r)return Cf(o),t;i=i.sibling}throw Error(A(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Gm(e){return e=b1(e),e!==null?qm(e):null}function qm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qm(e);if(t!==null)return t;e=e.sibling}return null}var Ym=Nt.unstable_scheduleCallback,Tf=Nt.unstable_cancelCallback,S1=Nt.unstable_shouldYield,k1=Nt.unstable_requestPaint,Ne=Nt.unstable_now,_1=Nt.unstable_getCurrentPriorityLevel,ed=Nt.unstable_ImmediatePriority,Qm=Nt.unstable_UserBlockingPriority,ua=Nt.unstable_NormalPriority,E1=Nt.unstable_LowPriority,Km=Nt.unstable_IdlePriority,Ga=null,cn=null;function j1(e){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Ga,e,void 0,(e.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:F1,C1=Math.log,T1=Math.LN2;function F1(e){return e>>>=0,e===0?32:31-(C1(e)/T1|0)|0}var cs=64,ds=4194304;function ti(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ca(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=ti(a):(i&=s,i!==0&&(r=ti(i)))}else s=n&~o,s!==0?r=ti(s):i!==0&&(r=ti(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Zt(t),o=1<<n,r|=e[n],t&=~o;return r}function R1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Zt(i),a=1<<s,u=o[s];u===-1?(!(a&n)||a&r)&&(o[s]=R1(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function Bu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xm(){var e=cs;return cs<<=1,!(cs&4194240)&&(cs=64),e}function Pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Zt(t),e[t]=n}function O1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Zt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function td(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Zt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var pe=0;function Jm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zm,nd,eg,tg,ng,Uu=!1,fs=[],Wn=null,Hn=null,Gn=null,_i=new Map,Ei=new Map,An=[],z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ff(e,t){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Uo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ki(t),t!==null&&nd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function N1(e,t,n,r,o){switch(t){case"focusin":return Wn=Uo(Wn,e,t,n,r,o),!0;case"dragenter":return Hn=Uo(Hn,e,t,n,r,o),!0;case"mouseover":return Gn=Uo(Gn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return _i.set(i,Uo(_i.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ei.set(i,Uo(Ei.get(i)||null,e,t,n,r,o)),!0}return!1}function rg(e){var t=mr(e.target);if(t!==null){var n=Lr(t);if(n!==null){if(t=n.tag,t===13){if(t=Hm(n),t!==null){e.blockedOn=t,ng(e.priority,function(){eg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ds(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Lu=r,n.target.dispatchEvent(r),Lu=null}else return t=Ki(n),t!==null&&nd(t),e.blockedOn=n,!1;t.shift()}return!0}function Rf(e,t,n){Ds(e)&&n.delete(t)}function A1(){Uu=!1,Wn!==null&&Ds(Wn)&&(Wn=null),Hn!==null&&Ds(Hn)&&(Hn=null),Gn!==null&&Ds(Gn)&&(Gn=null),_i.forEach(Rf),Ei.forEach(Rf)}function Vo(e,t){e.blockedOn===t&&(e.blockedOn=null,Uu||(Uu=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,A1)))}function ji(e){function t(o){return Vo(o,e)}if(0<fs.length){Vo(fs[0],e);for(var n=1;n<fs.length;n++){var r=fs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wn!==null&&Vo(Wn,e),Hn!==null&&Vo(Hn,e),Gn!==null&&Vo(Gn,e),_i.forEach(t),Ei.forEach(t),n=0;n<An.length;n++)r=An[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<An.length&&(n=An[0],n.blockedOn===null);)rg(n),n.blockedOn===null&&An.shift()}var go=Tn.ReactCurrentBatchConfig,da=!0;function L1(e,t,n,r){var o=pe,i=go.transition;go.transition=null;try{pe=1,rd(e,t,n,r)}finally{pe=o,go.transition=i}}function I1(e,t,n,r){var o=pe,i=go.transition;go.transition=null;try{pe=4,rd(e,t,n,r)}finally{pe=o,go.transition=i}}function rd(e,t,n,r){if(da){var o=Vu(e,t,n,r);if(o===null)Ul(e,t,r,fa,n),Ff(e,r);else if(N1(o,e,t,n,r))r.stopPropagation();else if(Ff(e,r),t&4&&-1<z1.indexOf(e)){for(;o!==null;){var i=Ki(o);if(i!==null&&Zm(i),i=Vu(e,t,n,r),i===null&&Ul(e,t,r,fa,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var fa=null;function Vu(e,t,n,r){if(fa=null,e=Zc(r),e=mr(e),e!==null)if(t=Lr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fa=e,null}function og(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_1()){case ed:return 1;case Qm:return 4;case ua:case E1:return 16;case Km:return 536870912;default:return 16}default:return 16}}var Dn=null,od=null,Ms=null;function ig(){if(Ms)return Ms;var e,t=od,n=t.length,r,o="value"in Dn?Dn.value:Dn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Ms=o.slice(e,1<r?1-r:void 0)}function Bs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ps(){return!0}function Pf(){return!1}function Lt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ps:Pf,this.isPropagationStopped=Pf,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),t}var zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},id=Lt(zo),Qi=Ce({},zo,{view:0,detail:0}),D1=Lt(Qi),Ol,zl,Wo,qa=Ce({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wo&&(Wo&&e.type==="mousemove"?(Ol=e.screenX-Wo.screenX,zl=e.screenY-Wo.screenY):zl=Ol=0,Wo=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Of=Lt(qa),M1=Ce({},qa,{dataTransfer:0}),B1=Lt(M1),U1=Ce({},Qi,{relatedTarget:0}),Nl=Lt(U1),V1=Ce({},zo,{animationName:0,elapsedTime:0,pseudoElement:0}),W1=Lt(V1),H1=Ce({},zo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G1=Lt(H1),q1=Ce({},zo,{data:0}),zf=Lt(q1),Y1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K1[e])?!!t[e]:!1}function sd(){return X1}var J1=Ce({},Qi,{key:function(e){if(e.key){var t=Y1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sd,charCode:function(e){return e.type==="keypress"?Bs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z1=Lt(J1),ev=Ce({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=Lt(ev),tv=Ce({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sd}),nv=Lt(tv),rv=Ce({},zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ov=Lt(rv),iv=Ce({},qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sv=Lt(iv),av=[9,13,27,32],ad=_n&&"CompositionEvent"in window,ui=null;_n&&"documentMode"in document&&(ui=document.documentMode);var lv=_n&&"TextEvent"in window&&!ui,sg=_n&&(!ad||ui&&8<ui&&11>=ui),Af=" ",Lf=!1;function ag(e,t){switch(e){case"keyup":return av.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var to=!1;function uv(e,t){switch(e){case"compositionend":return lg(t);case"keypress":return t.which!==32?null:(Lf=!0,Af);case"textInput":return e=t.data,e===Af&&Lf?null:e;default:return null}}function cv(e,t){if(to)return e==="compositionend"||!ad&&ag(e,t)?(e=ig(),Ms=od=Dn=null,to=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sg&&t.locale!=="ko"?null:t.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dv[e.type]:t==="textarea"}function ug(e,t,n,r){Mm(r),t=pa(t,"onChange"),0<t.length&&(n=new id("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ci=null,Ci=null;function fv(e){wg(e,0)}function Ya(e){var t=oo(e);if(Om(t))return e}function pv(e,t){if(e==="change")return t}var cg=!1;if(_n){var Al;if(_n){var Ll="oninput"in document;if(!Ll){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),Ll=typeof Df.oninput=="function"}Al=Ll}else Al=!1;cg=Al&&(!document.documentMode||9<document.documentMode)}function Mf(){ci&&(ci.detachEvent("onpropertychange",dg),Ci=ci=null)}function dg(e){if(e.propertyName==="value"&&Ya(Ci)){var t=[];ug(t,Ci,e,Zc(e)),Wm(fv,t)}}function hv(e,t,n){e==="focusin"?(Mf(),ci=t,Ci=n,ci.attachEvent("onpropertychange",dg)):e==="focusout"&&Mf()}function mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ya(Ci)}function gv(e,t){if(e==="click")return Ya(t)}function yv(e,t){if(e==="input"||e==="change")return Ya(t)}function xv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nn=typeof Object.is=="function"?Object.is:xv;function Ti(e,t){if(nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!_u.call(t,o)||!nn(e[o],t[o]))return!1}return!0}function Bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uf(e,t){var n=Bf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bf(n)}}function fg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pg(){for(var e=window,t=sa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sa(e.document)}return t}function ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vv(e){var t=pg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fg(n.ownerDocument.documentElement,n)){if(r!==null&&ld(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Uf(n,i);var s=Uf(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wv=_n&&"documentMode"in document&&11>=document.documentMode,no=null,Wu=null,di=null,Hu=!1;function Vf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hu||no==null||no!==sa(r)||(r=no,"selectionStart"in r&&ld(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),di&&Ti(di,r)||(di=r,r=pa(Wu,"onSelect"),0<r.length&&(t=new id("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=no)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ro={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},Il={},hg={};_n&&(hg=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function Qa(e){if(Il[e])return Il[e];if(!ro[e])return e;var t=ro[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hg)return Il[e]=t[n];return e}var mg=Qa("animationend"),gg=Qa("animationiteration"),yg=Qa("animationstart"),xg=Qa("transitionend"),vg=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(e,t){vg.set(e,t),Ar(t,[e])}for(var Dl=0;Dl<Wf.length;Dl++){var Ml=Wf[Dl],$v=Ml.toLowerCase(),bv=Ml[0].toUpperCase()+Ml.slice(1);or($v,"on"+bv)}or(mg,"onAnimationEnd");or(gg,"onAnimationIteration");or(yg,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(xg,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));function Hf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$1(r,t,void 0,e),e.currentTarget=null}function wg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Hf(o,a,c),i=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Hf(o,a,c),i=u}}}if(la)throw e=Mu,la=!1,Mu=null,e}function xe(e,t){var n=t[Ku];n===void 0&&(n=t[Ku]=new Set);var r=e+"__bubble";n.has(r)||($g(t,e,2,!1),n.add(r))}function Bl(e,t,n){var r=0;t&&(r|=4),$g(n,e,r,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function Fi(e){if(!e[ms]){e[ms]=!0,Cm.forEach(function(n){n!=="selectionchange"&&(Sv.has(n)||Bl(n,!1,e),Bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,Bl("selectionchange",!1,t))}}function $g(e,t,n,r){switch(og(t)){case 1:var o=L1;break;case 4:o=I1;break;default:o=rd}n=o.bind(null,t,n,e),o=void 0,!Du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;a!==null;){if(s=mr(a),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}a=a.parentNode}}r=r.return}Wm(function(){var c=i,d=Zc(n),f=[];e:{var m=vg.get(e);if(m!==void 0){var $=id,y=e;switch(e){case"keypress":if(Bs(n)===0)break e;case"keydown":case"keyup":$=Z1;break;case"focusin":y="focus",$=Nl;break;case"focusout":y="blur",$=Nl;break;case"beforeblur":case"afterblur":$=Nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=B1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=nv;break;case mg:case gg:case yg:$=W1;break;case xg:$=ov;break;case"scroll":$=D1;break;case"wheel":$=sv;break;case"copy":case"cut":case"paste":$=G1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Nf}var x=(t&4)!==0,b=!x&&e==="scroll",g=x?m!==null?m+"Capture":null:m;x=[];for(var p=c,h;p!==null;){h=p;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,g!==null&&(v=ki(p,g),v!=null&&x.push(Ri(p,v,h)))),b)break;p=p.return}0<x.length&&(m=new $(m,y,null,n,d),f.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",m&&n!==Lu&&(y=n.relatedTarget||n.fromElement)&&(mr(y)||y[En]))break e;if(($||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,$?(y=n.relatedTarget||n.toElement,$=c,y=y?mr(y):null,y!==null&&(b=Lr(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):($=null,y=c),$!==y)){if(x=Of,v="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Nf,v="onPointerLeave",g="onPointerEnter",p="pointer"),b=$==null?m:oo($),h=y==null?m:oo(y),m=new x(v,p+"leave",$,n,d),m.target=b,m.relatedTarget=h,v=null,mr(d)===c&&(x=new x(g,p+"enter",y,n,d),x.target=h,x.relatedTarget=b,v=x),b=v,$&&y)t:{for(x=$,g=y,p=0,h=x;h;h=Vr(h))p++;for(h=0,v=g;v;v=Vr(v))h++;for(;0<p-h;)x=Vr(x),p--;for(;0<h-p;)g=Vr(g),h--;for(;p--;){if(x===g||g!==null&&x===g.alternate)break t;x=Vr(x),g=Vr(g)}x=null}else x=null;$!==null&&Gf(f,m,$,x,!1),y!==null&&b!==null&&Gf(f,b,y,x,!0)}}e:{if(m=c?oo(c):window,$=m.nodeName&&m.nodeName.toLowerCase(),$==="select"||$==="input"&&m.type==="file")var k=pv;else if(If(m))if(cg)k=yv;else{k=mv;var T=hv}else($=m.nodeName)&&$.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=gv);if(k&&(k=k(e,c))){ug(f,k,n,d);break e}T&&T(e,m,c),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Pu(m,"number",m.value)}switch(T=c?oo(c):window,e){case"focusin":(If(T)||T.contentEditable==="true")&&(no=T,Wu=c,di=null);break;case"focusout":di=Wu=no=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,Vf(f,n,d);break;case"selectionchange":if(wv)break;case"keydown":case"keyup":Vf(f,n,d)}var _;if(ad)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else to?ag(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(sg&&n.locale!=="ko"&&(to||E!=="onCompositionStart"?E==="onCompositionEnd"&&to&&(_=ig()):(Dn=d,od="value"in Dn?Dn.value:Dn.textContent,to=!0)),T=pa(c,E),0<T.length&&(E=new zf(E,e,null,n,d),f.push({event:E,listeners:T}),_?E.data=_:(_=lg(n),_!==null&&(E.data=_)))),(_=lv?uv(e,n):cv(e,n))&&(c=pa(c,"onBeforeInput"),0<c.length&&(d=new zf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=_))}wg(f,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ki(e,n),i!=null&&r.unshift(Ri(e,i,o)),i=ki(e,t),i!=null&&r.push(Ri(e,i,o))),e=e.return}return r}function Vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gf(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=ki(n,i),u!=null&&s.unshift(Ri(n,u,a))):o||(u=ki(n,i),u!=null&&s.push(Ri(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var kv=/\r\n?/g,_v=/\u0000|\uFFFD/g;function qf(e){return(typeof e=="string"?e:""+e).replace(kv,`
`).replace(_v,"")}function gs(e,t,n){if(t=qf(t),qf(e)!==t&&n)throw Error(A(425))}function ha(){}var Gu=null,qu=null;function Yu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,Ev=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,jv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(e){return Yf.resolve(null).then(e).catch(Cv)}:Qu;function Cv(e){setTimeout(function(){throw e})}function Vl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ji(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ji(t)}function qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var No=Math.random().toString(36).slice(2),un="__reactFiber$"+No,Pi="__reactProps$"+No,En="__reactContainer$"+No,Ku="__reactEvents$"+No,Tv="__reactListeners$"+No,Fv="__reactHandles$"+No;function mr(e){var t=e[un];if(t)return t;for(var n=e.parentNode;n;){if(t=n[En]||n[un]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qf(e);e!==null;){if(n=e[un])return n;e=Qf(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[un]||e[En],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function oo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Ka(e){return e[Pi]||null}var Xu=[],io=-1;function ir(e){return{current:e}}function we(e){0>io||(e.current=Xu[io],Xu[io]=null,io--)}function ge(e,t){io++,Xu[io]=e.current,e.current=t}var nr={},ct=ir(nr),kt=ir(!1),jr=nr;function wo(e,t){var n=e.type.contextTypes;if(!n)return nr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _t(e){return e=e.childContextTypes,e!=null}function ma(){we(kt),we(ct)}function Kf(e,t,n){if(ct.current!==nr)throw Error(A(168));ge(ct,t),ge(kt,n)}function bg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(A(108,h1(e)||"Unknown",o));return Ce({},n,r)}function ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nr,jr=ct.current,ge(ct,e),ge(kt,kt.current),!0}function Xf(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=bg(e,t,jr),r.__reactInternalMemoizedMergedChildContext=e,we(kt),we(ct),ge(ct,e)):we(kt),ge(kt,n)}var $n=null,Xa=!1,Wl=!1;function Sg(e){$n===null?$n=[e]:$n.push(e)}function Rv(e){Xa=!0,Sg(e)}function sr(){if(!Wl&&$n!==null){Wl=!0;var e=0,t=pe;try{var n=$n;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$n=null,Xa=!1}catch(o){throw $n!==null&&($n=$n.slice(e+1)),Ym(ed,sr),o}finally{pe=t,Wl=!1}}return null}var so=[],ao=0,ya=null,xa=0,Dt=[],Mt=0,Cr=null,bn=1,Sn="";function cr(e,t){so[ao++]=xa,so[ao++]=ya,ya=e,xa=t}function kg(e,t,n){Dt[Mt++]=bn,Dt[Mt++]=Sn,Dt[Mt++]=Cr,Cr=e;var r=bn;e=Sn;var o=32-Zt(r)-1;r&=~(1<<o),n+=1;var i=32-Zt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,bn=1<<32-Zt(t)+o|n<<o|r,Sn=i+e}else bn=1<<i|n<<o|r,Sn=e}function ud(e){e.return!==null&&(cr(e,1),kg(e,1,0))}function cd(e){for(;e===ya;)ya=so[--ao],so[ao]=null,xa=so[--ao],so[ao]=null;for(;e===Cr;)Cr=Dt[--Mt],Dt[Mt]=null,Sn=Dt[--Mt],Dt[Mt]=null,bn=Dt[--Mt],Dt[Mt]=null}var zt=null,Pt=null,be=!1,Kt=null;function _g(e,t){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Jf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zt=e,Pt=qn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zt=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cr!==null?{id:bn,overflow:Sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,zt=e,Pt=null,!0):!1;default:return!1}}function Ju(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zu(e){if(be){var t=Pt;if(t){var n=t;if(!Jf(e,t)){if(Ju(e))throw Error(A(418));t=qn(n.nextSibling);var r=zt;t&&Jf(e,t)?_g(r,n):(e.flags=e.flags&-4097|2,be=!1,zt=e)}}else{if(Ju(e))throw Error(A(418));e.flags=e.flags&-4097|2,be=!1,zt=e}}}function Zf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function ys(e){if(e!==zt)return!1;if(!be)return Zf(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yu(e.type,e.memoizedProps)),t&&(t=Pt)){if(Ju(e))throw Eg(),Error(A(418));for(;t;)_g(e,t),t=qn(t.nextSibling)}if(Zf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pt=qn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=zt?qn(e.stateNode.nextSibling):null;return!0}function Eg(){for(var e=Pt;e;)e=qn(e.nextSibling)}function $o(){Pt=zt=null,be=!1}function dd(e){Kt===null?Kt=[e]:Kt.push(e)}var Pv=Tn.ReactCurrentBatchConfig;function Ho(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function xs(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ep(e){var t=e._init;return t(e._payload)}function jg(e){function t(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=Xn(g,p),g.index=0,g.sibling=null,g}function i(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,p,h,v){return p===null||p.tag!==6?(p=Xl(h,g.mode,v),p.return=g,p):(p=o(p,h),p.return=g,p)}function u(g,p,h,v){var k=h.type;return k===eo?d(g,p,h.props.children,v,h.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===zn&&ep(k)===p.type)?(v=o(p,h.props),v.ref=Ho(g,p,h),v.return=g,v):(v=Ys(h.type,h.key,h.props,null,g.mode,v),v.ref=Ho(g,p,h),v.return=g,v)}function c(g,p,h,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Jl(h,g.mode,v),p.return=g,p):(p=o(p,h.children||[]),p.return=g,p)}function d(g,p,h,v,k){return p===null||p.tag!==7?(p=Sr(h,g.mode,v,k),p.return=g,p):(p=o(p,h),p.return=g,p)}function f(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xl(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case as:return h=Ys(p.type,p.key,p.props,null,g.mode,h),h.ref=Ho(g,null,p),h.return=g,h;case Zr:return p=Jl(p,g.mode,h),p.return=g,p;case zn:var v=p._init;return f(g,v(p._payload),h)}if(ei(p)||Mo(p))return p=Sr(p,g.mode,h,null),p.return=g,p;xs(g,p)}return null}function m(g,p,h,v){var k=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:a(g,p,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case as:return h.key===k?u(g,p,h,v):null;case Zr:return h.key===k?c(g,p,h,v):null;case zn:return k=h._init,m(g,p,k(h._payload),v)}if(ei(h)||Mo(h))return k!==null?null:d(g,p,h,v,null);xs(g,h)}return null}function $(g,p,h,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(h)||null,a(p,g,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case as:return g=g.get(v.key===null?h:v.key)||null,u(p,g,v,k);case Zr:return g=g.get(v.key===null?h:v.key)||null,c(p,g,v,k);case zn:var T=v._init;return $(g,p,h,T(v._payload),k)}if(ei(v)||Mo(v))return g=g.get(h)||null,d(p,g,v,k,null);xs(p,v)}return null}function y(g,p,h,v){for(var k=null,T=null,_=p,E=p=0,O=null;_!==null&&E<h.length;E++){_.index>E?(O=_,_=null):O=_.sibling;var N=m(g,_,h[E],v);if(N===null){_===null&&(_=O);break}e&&_&&N.alternate===null&&t(g,_),p=i(N,p,E),T===null?k=N:T.sibling=N,T=N,_=O}if(E===h.length)return n(g,_),be&&cr(g,E),k;if(_===null){for(;E<h.length;E++)_=f(g,h[E],v),_!==null&&(p=i(_,p,E),T===null?k=_:T.sibling=_,T=_);return be&&cr(g,E),k}for(_=r(g,_);E<h.length;E++)O=$(_,g,E,h[E],v),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?E:O.key),p=i(O,p,E),T===null?k=O:T.sibling=O,T=O);return e&&_.forEach(function(B){return t(g,B)}),be&&cr(g,E),k}function x(g,p,h,v){var k=Mo(h);if(typeof k!="function")throw Error(A(150));if(h=k.call(h),h==null)throw Error(A(151));for(var T=k=null,_=p,E=p=0,O=null,N=h.next();_!==null&&!N.done;E++,N=h.next()){_.index>E?(O=_,_=null):O=_.sibling;var B=m(g,_,N.value,v);if(B===null){_===null&&(_=O);break}e&&_&&B.alternate===null&&t(g,_),p=i(B,p,E),T===null?k=B:T.sibling=B,T=B,_=O}if(N.done)return n(g,_),be&&cr(g,E),k;if(_===null){for(;!N.done;E++,N=h.next())N=f(g,N.value,v),N!==null&&(p=i(N,p,E),T===null?k=N:T.sibling=N,T=N);return be&&cr(g,E),k}for(_=r(g,_);!N.done;E++,N=h.next())N=$(_,g,E,N.value,v),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?E:N.key),p=i(N,p,E),T===null?k=N:T.sibling=N,T=N);return e&&_.forEach(function(V){return t(g,V)}),be&&cr(g,E),k}function b(g,p,h,v){if(typeof h=="object"&&h!==null&&h.type===eo&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case as:e:{for(var k=h.key,T=p;T!==null;){if(T.key===k){if(k=h.type,k===eo){if(T.tag===7){n(g,T.sibling),p=o(T,h.props.children),p.return=g,g=p;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===zn&&ep(k)===T.type){n(g,T.sibling),p=o(T,h.props),p.ref=Ho(g,T,h),p.return=g,g=p;break e}n(g,T);break}else t(g,T);T=T.sibling}h.type===eo?(p=Sr(h.props.children,g.mode,v,h.key),p.return=g,g=p):(v=Ys(h.type,h.key,h.props,null,g.mode,v),v.ref=Ho(g,p,h),v.return=g,g=v)}return s(g);case Zr:e:{for(T=h.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(g,p.sibling),p=o(p,h.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Jl(h,g.mode,v),p.return=g,g=p}return s(g);case zn:return T=h._init,b(g,p,T(h._payload),v)}if(ei(h))return y(g,p,h,v);if(Mo(h))return x(g,p,h,v);xs(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(g,p.sibling),p=o(p,h),p.return=g,g=p):(n(g,p),p=Xl(h,g.mode,v),p.return=g,g=p),s(g)):n(g,p)}return b}var bo=jg(!0),Cg=jg(!1),va=ir(null),wa=null,lo=null,fd=null;function pd(){fd=lo=wa=null}function hd(e){var t=va.current;we(va),e._currentValue=t}function ec(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yo(e,t){wa=e,fd=lo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(St=!0),e.firstContext=null)}function Vt(e){var t=e._currentValue;if(fd!==e)if(e={context:e,memoizedValue:t,next:null},lo===null){if(wa===null)throw Error(A(308));lo=e,wa.dependencies={lanes:0,firstContext:e}}else lo=lo.next=e;return t}var gr=null;function md(e){gr===null?gr=[e]:gr.push(e)}function Tg(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,md(t)):(n.next=o.next,o.next=n),t.interleaved=n,jn(e,r)}function jn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nn=!1;function gd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,jn(e,n)}return o=r.interleaved,o===null?(t.next=t,md(r)):(t.next=o.next,o.next=t),r.interleaved=t,jn(e,n)}function Us(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,td(e,n)}}function tp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $a(e,t,n,r){var o=e.updateQueue;Nn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(i!==null){var f=o.baseState;s=0,d=c=u=null,a=i;do{var m=a.lane,$=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:$,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(m=t,$=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call($,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,m=typeof y=="function"?y.call($,f,m):y,m==null)break e;f=Ce({},f,m);break e;case 2:Nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else $={eventTime:$,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=$,u=f):d=d.next=$,s|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(d===null&&(u=f),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Fr|=s,e.lanes=s,e.memoizedState=f}}function np(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(A(191,o));o.call(r)}}}var Xi={},dn=ir(Xi),Oi=ir(Xi),zi=ir(Xi);function yr(e){if(e===Xi)throw Error(A(174));return e}function yd(e,t){switch(ge(zi,t),ge(Oi,e),ge(dn,Xi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zu(t,e)}we(dn),ge(dn,t)}function So(){we(dn),we(Oi),we(zi)}function Rg(e){yr(zi.current);var t=yr(dn.current),n=zu(t,e.type);t!==n&&(ge(Oi,e),ge(dn,n))}function xd(e){Oi.current===e&&(we(dn),we(Oi))}var _e=ir(0);function ba(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function vd(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var Vs=Tn.ReactCurrentDispatcher,Gl=Tn.ReactCurrentBatchConfig,Tr=0,Ee=null,Ue=null,Ge=null,Sa=!1,fi=!1,Ni=0,Ov=0;function it(){throw Error(A(321))}function wd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nn(e[n],t[n]))return!1;return!0}function $d(e,t,n,r,o,i){if(Tr=i,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vs.current=e===null||e.memoizedState===null?Lv:Iv,e=n(r,o),fi){i=0;do{if(fi=!1,Ni=0,25<=i)throw Error(A(301));i+=1,Ge=Ue=null,t.updateQueue=null,Vs.current=Dv,e=n(r,o)}while(fi)}if(Vs.current=ka,t=Ue!==null&&Ue.next!==null,Tr=0,Ge=Ue=Ee=null,Sa=!1,t)throw Error(A(300));return e}function bd(){var e=Ni!==0;return Ni=0,e}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ee.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Wt(){if(Ue===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Ge===null?Ee.memoizedState:Ge.next;if(t!==null)Ge=t,Ue=e;else{if(e===null)throw Error(A(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ge===null?Ee.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ai(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=Wt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ue,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,u=null,c=i;do{var d=c.lane;if((Tr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,s=r):u=u.next=f,Ee.lanes|=d,Fr|=d}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=a,nn(r,t.memoizedState)||(St=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Ee.lanes|=i,Fr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yl(e){var t=Wt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);nn(i,t.memoizedState)||(St=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Pg(){}function Og(e,t){var n=Ee,r=Wt(),o=t(),i=!nn(r.memoizedState,o);if(i&&(r.memoizedState=o,St=!0),r=r.queue,Sd(Ag.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Li(9,Ng.bind(null,n,r,o,t),void 0,null),Ye===null)throw Error(A(349));Tr&30||zg(n,t,o)}return o}function zg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ng(e,t,n,r){t.value=n,t.getSnapshot=r,Lg(t)&&Ig(e)}function Ag(e,t,n){return n(function(){Lg(t)&&Ig(e)})}function Lg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nn(e,n)}catch{return!0}}function Ig(e){var t=jn(e,1);t!==null&&en(t,e,1,-1)}function rp(e){var t=sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:e},t.queue=e,e=e.dispatch=Av.bind(null,Ee,e),[t.memoizedState,e]}function Li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dg(){return Wt().memoizedState}function Ws(e,t,n,r){var o=sn();Ee.flags|=e,o.memoizedState=Li(1|t,n,void 0,r===void 0?null:r)}function Ja(e,t,n,r){var o=Wt();r=r===void 0?null:r;var i=void 0;if(Ue!==null){var s=Ue.memoizedState;if(i=s.destroy,r!==null&&wd(r,s.deps)){o.memoizedState=Li(t,n,i,r);return}}Ee.flags|=e,o.memoizedState=Li(1|t,n,i,r)}function op(e,t){return Ws(8390656,8,e,t)}function Sd(e,t){return Ja(2048,8,e,t)}function Mg(e,t){return Ja(4,2,e,t)}function Bg(e,t){return Ja(4,4,e,t)}function Ug(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vg(e,t,n){return n=n!=null?n.concat([e]):null,Ja(4,4,Ug.bind(null,t,e),n)}function kd(){}function Wg(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hg(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gg(e,t,n){return Tr&21?(nn(n,t)||(n=Xm(),Ee.lanes|=n,Fr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=n)}function zv(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),t()}finally{pe=n,Gl.transition=r}}function qg(){return Wt().memoizedState}function Nv(e,t,n){var r=Kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yg(e))Qg(t,n);else if(n=Tg(e,t,n,r),n!==null){var o=gt();en(n,e,r,o),Kg(n,t,r)}}function Av(e,t,n){var r=Kn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yg(e))Qg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,nn(a,s)){var u=t.interleaved;u===null?(o.next=o,md(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Tg(e,t,o,r),n!==null&&(o=gt(),en(n,e,r,o),Kg(n,t,r))}}function Yg(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Qg(e,t){fi=Sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,td(e,n)}}var ka={readContext:Vt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},Lv={readContext:Vt,useCallback:function(e,t){return sn().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:op,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ws(4194308,4,Ug.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ws(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ws(4,2,e,t)},useMemo:function(e,t){var n=sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=sn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nv.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=sn();return e={current:e},t.memoizedState=e},useState:rp,useDebugValue:kd,useDeferredValue:function(e){return sn().memoizedState=e},useTransition:function(){var e=rp(!1),t=e[0];return e=zv.bind(null,e[1]),sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,o=sn();if(be){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Ye===null)throw Error(A(349));Tr&30||zg(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,op(Ag.bind(null,r,i,e),[e]),r.flags|=2048,Li(9,Ng.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=sn(),t=Ye.identifierPrefix;if(be){var n=Sn,r=bn;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ov++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Iv={readContext:Vt,useCallback:Wg,useContext:Vt,useEffect:Sd,useImperativeHandle:Vg,useInsertionEffect:Mg,useLayoutEffect:Bg,useMemo:Hg,useReducer:ql,useRef:Dg,useState:function(){return ql(Ai)},useDebugValue:kd,useDeferredValue:function(e){var t=Wt();return Gg(t,Ue.memoizedState,e)},useTransition:function(){var e=ql(Ai)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Pg,useSyncExternalStore:Og,useId:qg,unstable_isNewReconciler:!1},Dv={readContext:Vt,useCallback:Wg,useContext:Vt,useEffect:Sd,useImperativeHandle:Vg,useInsertionEffect:Mg,useLayoutEffect:Bg,useMemo:Hg,useReducer:Yl,useRef:Dg,useState:function(){return Yl(Ai)},useDebugValue:kd,useDeferredValue:function(e){var t=Wt();return Ue===null?t.memoizedState=e:Gg(t,Ue.memoizedState,e)},useTransition:function(){var e=Yl(Ai)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Pg,useSyncExternalStore:Og,useId:qg,unstable_isNewReconciler:!1};function qt(e,t){if(e&&e.defaultProps){t=Ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function tc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Za={isMounted:function(e){return(e=e._reactInternals)?Lr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),o=Kn(e),i=kn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Yn(e,i,o),t!==null&&(en(t,e,o,r),Us(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),o=Kn(e),i=kn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Yn(e,i,o),t!==null&&(en(t,e,o,r),Us(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=Kn(e),o=kn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Yn(e,o,r),t!==null&&(en(t,e,r,n),Us(t,e,r))}};function ip(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,r)||!Ti(o,i):!0}function Xg(e,t,n){var r=!1,o=nr,i=t.contextType;return typeof i=="object"&&i!==null?i=Vt(i):(o=_t(t)?jr:ct.current,r=t.contextTypes,i=(r=r!=null)?wo(e,o):nr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Za,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function sp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Za.enqueueReplaceState(t,t.state,null)}function nc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},gd(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Vt(i):(i=_t(t)?jr:ct.current,o.context=wo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(tc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Za.enqueueReplaceState(o,o.state,null),$a(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ko(e,t){try{var n="",r=t;do n+=p1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function rc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mv=typeof WeakMap=="function"?WeakMap:Map;function Jg(e,t,n){n=kn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ea||(Ea=!0,pc=r),rc(e,t)},n}function Zg(e,t,n){n=kn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){rc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){rc(e,t),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ap(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ew.bind(null,e,t,n),t.then(e,e))}function lp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function up(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kn(-1,1),t.tag=2,Yn(n,t,1))),n.lanes|=1),e)}var Bv=Tn.ReactCurrentOwner,St=!1;function pt(e,t,n,r){t.child=e===null?Cg(t,null,n,r):bo(t,e.child,n,r)}function cp(e,t,n,r,o){n=n.render;var i=t.ref;return yo(t,o),r=$d(e,t,n,r,i,o),n=bd(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Cn(e,t,o)):(be&&n&&ud(t),t.flags|=1,pt(e,t,r,o),t.child)}function dp(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Pd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ey(e,t,i,r,o)):(e=Ys(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(s,r)&&e.ref===t.ref)return Cn(e,t,o)}return t.flags|=1,e=Xn(i,r),e.ref=t.ref,e.return=t,t.child=e}function ey(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ti(i,r)&&e.ref===t.ref)if(St=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(St=!0);else return t.lanes=e.lanes,Cn(e,t,o)}return oc(e,t,n,r,o)}function ty(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(co,Ft),Ft|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(co,Ft),Ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(co,Ft),Ft|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ge(co,Ft),Ft|=r;return pt(e,t,o,n),t.child}function ny(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function oc(e,t,n,r,o){var i=_t(n)?jr:ct.current;return i=wo(t,i),yo(t,o),n=$d(e,t,n,r,i,o),r=bd(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Cn(e,t,o)):(be&&r&&ud(t),t.flags|=1,pt(e,t,n,o),t.child)}function fp(e,t,n,r,o){if(_t(n)){var i=!0;ga(t)}else i=!1;if(yo(t,o),t.stateNode===null)Hs(e,t),Xg(t,n,r),nc(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vt(c):(c=_t(n)?jr:ct.current,c=wo(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&sp(t,s,r,c),Nn=!1;var m=t.memoizedState;s.state=m,$a(t,r,s,o),u=t.memoizedState,a!==r||m!==u||kt.current||Nn?(typeof d=="function"&&(tc(t,n,d,r),u=t.memoizedState),(a=Nn||ip(t,n,a,r,m,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Fg(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:qt(t.type,a),s.props=c,f=t.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=_t(n)?jr:ct.current,u=wo(t,u));var $=n.getDerivedStateFromProps;(d=typeof $=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==u)&&sp(t,s,r,u),Nn=!1,m=t.memoizedState,s.state=m,$a(t,r,s,o);var y=t.memoizedState;a!==f||m!==y||kt.current||Nn?(typeof $=="function"&&(tc(t,n,$,r),y=t.memoizedState),(c=Nn||ip(t,n,c,r,m,y,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ic(e,t,n,r,i,o)}function ic(e,t,n,r,o,i){ny(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Xf(t,n,!1),Cn(e,t,i);r=t.stateNode,Bv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=bo(t,e.child,null,i),t.child=bo(t,null,a,i)):pt(e,t,a,i),t.memoizedState=r.state,o&&Xf(t,n,!0),t.child}function ry(e){var t=e.stateNode;t.pendingContext?Kf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kf(e,t.context,!1),yd(e,t.containerInfo)}function pp(e,t,n,r,o){return $o(),dd(o),t.flags|=256,pt(e,t,n,r),t.child}var sc={dehydrated:null,treeContext:null,retryLane:0};function ac(e){return{baseLanes:e,cachePool:null,transitions:null}}function oy(e,t,n){var r=t.pendingProps,o=_e.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ge(_e,o&1),e===null)return Zu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=nl(s,r,0,null),e=Sr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ac(n),t.memoizedState=sc,e):_d(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Uv(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Xn(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Xn(a,i):(i=Sr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?ac(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=sc,r}return i=e.child,e=i.sibling,r=Xn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _d(e,t){return t=nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vs(e,t,n,r){return r!==null&&dd(r),bo(t,e.child,null,n),e=_d(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uv(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(A(422))),vs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=nl({mode:"visible",children:r.children},o,0,null),i=Sr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&bo(t,e.child,null,s),t.child.memoizedState=ac(s),t.memoizedState=sc,i);if(!(t.mode&1))return vs(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(A(419)),r=Ql(i,r,void 0),vs(e,t,s,r)}if(a=(s&e.childLanes)!==0,St||a){if(r=Ye,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,jn(e,o),en(r,e,o,-1))}return Rd(),r=Ql(Error(A(421))),vs(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=tw.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Pt=qn(o.nextSibling),zt=t,be=!0,Kt=null,e!==null&&(Dt[Mt++]=bn,Dt[Mt++]=Sn,Dt[Mt++]=Cr,bn=e.id,Sn=e.overflow,Cr=t),t=_d(t,r.children),t.flags|=4096,t)}function hp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ec(e.return,t,n)}function Kl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function iy(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(pt(e,t,r.children,n),r=_e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hp(e,n,t);else if(e.tag===19)hp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(_e,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ba(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Kl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ba(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Kl(t,!0,n,null,i);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vv(e,t,n){switch(t.tag){case 3:ry(t),$o();break;case 5:Rg(t);break;case 1:_t(t.type)&&ga(t);break;case 4:yd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ge(va,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(_e,_e.current&1),t.flags|=128,null):n&t.child.childLanes?oy(e,t,n):(ge(_e,_e.current&1),e=Cn(e,t,n),e!==null?e.sibling:null);ge(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return iy(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ge(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,ty(e,t,n)}return Cn(e,t,n)}var sy,lc,ay,ly;sy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lc=function(){};ay=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,yr(dn.current);var i=null;switch(n){case"input":o=Fu(e,o),r=Fu(e,r),i=[];break;case"select":o=Ce({},o,{value:void 0}),r=Ce({},r,{value:void 0}),i=[];break;case"textarea":o=Ou(e,o),r=Ou(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ha)}Nu(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bi.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bi.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&xe("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};ly=function(e,t,n,r){n!==r&&(t.flags|=4)};function Go(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function st(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wv(e,t,n){var r=t.pendingProps;switch(cd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(t),null;case 1:return _t(t.type)&&ma(),st(t),null;case 3:return r=t.stateNode,So(),we(kt),we(ct),vd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ys(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Kt!==null&&(gc(Kt),Kt=null))),lc(e,t),st(t),null;case 5:xd(t);var o=yr(zi.current);if(n=t.type,e!==null&&t.stateNode!=null)ay(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return st(t),null}if(e=yr(dn.current),ys(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[un]=t,r[Pi]=i,e=(t.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(o=0;o<ni.length;o++)xe(ni[o],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Sf(r,i),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},xe("invalid",r);break;case"textarea":_f(r,i),xe("invalid",r)}Nu(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&gs(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&gs(r.textContent,a,e),o=["children",""+a]):bi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&xe("scroll",r)}switch(n){case"input":ls(r),kf(r,i,!0);break;case"textarea":ls(r),Ef(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ha)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Am(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[un]=t,e[Pi]=r,sy(e,t,!1,!1),t.stateNode=e;e:{switch(s=Au(n,r),n){case"dialog":xe("cancel",e),xe("close",e),o=r;break;case"iframe":case"object":case"embed":xe("load",e),o=r;break;case"video":case"audio":for(o=0;o<ni.length;o++)xe(ni[o],e);o=r;break;case"source":xe("error",e),o=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),o=r;break;case"details":xe("toggle",e),o=r;break;case"input":Sf(e,r),o=Fu(e,r),xe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Ce({},r,{value:void 0}),xe("invalid",e);break;case"textarea":_f(e,r),o=Ou(e,r),xe("invalid",e);break;default:o=r}Nu(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Dm(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Lm(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Si(e,u):typeof u=="number"&&Si(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(bi.hasOwnProperty(i)?u!=null&&i==="onScroll"&&xe("scroll",e):u!=null&&Qc(e,i,u,s))}switch(n){case"input":ls(e),kf(e,r,!1);break;case"textarea":ls(e),Ef(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tr(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?po(e,!!r.multiple,i,!1):r.defaultValue!=null&&po(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ha)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return st(t),null;case 6:if(e&&t.stateNode!=null)ly(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=yr(zi.current),yr(dn.current),ys(t)){if(r=t.stateNode,n=t.memoizedProps,r[un]=t,(i=r.nodeValue!==n)&&(e=zt,e!==null))switch(e.tag){case 3:gs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gs(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=t,t.stateNode=r}return st(t),null;case 13:if(we(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&Pt!==null&&t.mode&1&&!(t.flags&128))Eg(),$o(),t.flags|=98560,i=!1;else if(i=ys(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[un]=t}else $o(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;st(t),i=!1}else Kt!==null&&(gc(Kt),Kt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?We===0&&(We=3):Rd())),t.updateQueue!==null&&(t.flags|=4),st(t),null);case 4:return So(),lc(e,t),e===null&&Fi(t.stateNode.containerInfo),st(t),null;case 10:return hd(t.type._context),st(t),null;case 17:return _t(t.type)&&ma(),st(t),null;case 19:if(we(_e),i=t.memoizedState,i===null)return st(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Go(i,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ba(e),s!==null){for(t.flags|=128,Go(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(_e,_e.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ne()>_o&&(t.flags|=128,r=!0,Go(i,!1),t.lanes=4194304)}else{if(!r)if(e=ba(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Go(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!be)return st(t),null}else 2*Ne()-i.renderingStartTime>_o&&n!==1073741824&&(t.flags|=128,r=!0,Go(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ne(),t.sibling=null,n=_e.current,ge(_e,r?n&1|2:n&1),t):(st(t),null);case 22:case 23:return Fd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ft&1073741824&&(st(t),t.subtreeFlags&6&&(t.flags|=8192)):st(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Hv(e,t){switch(cd(t),t.tag){case 1:return _t(t.type)&&ma(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return So(),we(kt),we(ct),vd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xd(t),null;case 13:if(we(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));$o()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(_e),null;case 4:return So(),null;case 10:return hd(t.type._context),null;case 22:case 23:return Fd(),null;case 24:return null;default:return null}}var ws=!1,lt=!1,Gv=typeof WeakSet=="function"?WeakSet:Set,q=null;function uo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function uc(e,t,n){try{n()}catch(r){Re(e,t,r)}}var mp=!1;function qv(e,t){if(Gu=da,e=pg(),ld(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,d=0,f=e,m=null;t:for(;;){for(var $;f!==n||o!==0&&f.nodeType!==3||(a=s+o),f!==i||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),($=f.firstChild)!==null;)m=f,f=$;for(;;){if(f===e)break t;if(m===n&&++c===o&&(a=s),m===i&&++d===r&&(u=s),($=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=$}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(qu={focusedElem:e,selectionRange:n},da=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,b=y.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:qt(t.type,x),b);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(v){Re(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return y=mp,mp=!1,y}function pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&uc(t,n,i)}o=o.next}while(o!==r)}}function el(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function cc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uy(e){var t=e.alternate;t!==null&&(e.alternate=null,uy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[un],delete t[Pi],delete t[Ku],delete t[Tv],delete t[Fv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cy(e){return e.tag===5||e.tag===3||e.tag===4}function gp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ha));else if(r!==4&&(e=e.child,e!==null))for(dc(e,t,n),e=e.sibling;e!==null;)dc(e,t,n),e=e.sibling}function fc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fc(e,t,n),e=e.sibling;e!==null;)fc(e,t,n),e=e.sibling}var tt=null,Yt=!1;function Pn(e,t,n){for(n=n.child;n!==null;)dy(e,t,n),n=n.sibling}function dy(e,t,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Ga,n)}catch{}switch(n.tag){case 5:lt||uo(n,t);case 6:var r=tt,o=Yt;tt=null,Pn(e,t,n),tt=r,Yt=o,tt!==null&&(Yt?(e=tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(Yt?(e=tt,n=n.stateNode,e.nodeType===8?Vl(e.parentNode,n):e.nodeType===1&&Vl(e,n),ji(e)):Vl(tt,n.stateNode));break;case 4:r=tt,o=Yt,tt=n.stateNode.containerInfo,Yt=!0,Pn(e,t,n),tt=r,Yt=o;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&uc(n,t,s),o=o.next}while(o!==r)}Pn(e,t,n);break;case 1:if(!lt&&(uo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,t,a)}Pn(e,t,n);break;case 21:Pn(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Pn(e,t,n),lt=r):Pn(e,t,n);break;default:Pn(e,t,n)}}function yp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gv),t.forEach(function(r){var o=nw.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:tt=a.stateNode,Yt=!1;break e;case 3:tt=a.stateNode.containerInfo,Yt=!0;break e;case 4:tt=a.stateNode.containerInfo,Yt=!0;break e}a=a.return}if(tt===null)throw Error(A(160));dy(i,s,o),tt=null,Yt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){Re(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fy(t,e),t=t.sibling}function fy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Gt(t,e),on(e),r&4){try{pi(3,e,e.return),el(3,e)}catch(x){Re(e,e.return,x)}try{pi(5,e,e.return)}catch(x){Re(e,e.return,x)}}break;case 1:Gt(t,e),on(e),r&512&&n!==null&&uo(n,n.return);break;case 5:if(Gt(t,e),on(e),r&512&&n!==null&&uo(n,n.return),e.flags&32){var o=e.stateNode;try{Si(o,"")}catch(x){Re(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&zm(o,i),Au(a,s);var c=Au(a,i);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];d==="style"?Dm(o,f):d==="dangerouslySetInnerHTML"?Lm(o,f):d==="children"?Si(o,f):Qc(o,d,f,c)}switch(a){case"input":Ru(o,i);break;case"textarea":Nm(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var $=i.value;$!=null?po(o,!!i.multiple,$,!1):m!==!!i.multiple&&(i.defaultValue!=null?po(o,!!i.multiple,i.defaultValue,!0):po(o,!!i.multiple,i.multiple?[]:"",!1))}o[Pi]=i}catch(x){Re(e,e.return,x)}}break;case 6:if(Gt(t,e),on(e),r&4){if(e.stateNode===null)throw Error(A(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){Re(e,e.return,x)}}break;case 3:if(Gt(t,e),on(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ji(t.containerInfo)}catch(x){Re(e,e.return,x)}break;case 4:Gt(t,e),on(e);break;case 13:Gt(t,e),on(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Cd=Ne())),r&4&&yp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(c=lt)||d,Gt(t,e),lt=c):Gt(t,e),on(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(q=e,d=e.child;d!==null;){for(f=q=d;q!==null;){switch(m=q,$=m.child,m.tag){case 0:case 11:case 14:case 15:pi(4,m,m.return);break;case 1:uo(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){Re(r,n,x)}}break;case 5:uo(m,m.return);break;case 22:if(m.memoizedState!==null){vp(f);continue}}$!==null?($.return=m,q=$):vp(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Im("display",s))}catch(x){Re(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Re(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gt(t,e),on(e),r&4&&yp(e);break;case 21:break;default:Gt(t,e),on(e)}}function on(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cy(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Si(o,""),r.flags&=-33);var i=gp(e);fc(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=gp(e);dc(e,a,s);break;default:throw Error(A(161))}}catch(u){Re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yv(e,t,n){q=e,py(e)}function py(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var o=q,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||ws;if(!s){var a=o.alternate,u=a!==null&&a.memoizedState!==null||lt;a=ws;var c=lt;if(ws=s,(lt=u)&&!c)for(q=o;q!==null;)s=q,u=s.child,s.tag===22&&s.memoizedState!==null?wp(o):u!==null?(u.return=s,q=u):wp(o);for(;i!==null;)q=i,py(i),i=i.sibling;q=o,ws=a,lt=c}xp(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,q=i):xp(e)}}function xp(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||el(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:qt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&np(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}np(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ji(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}lt||t.flags&512&&cc(t)}catch(m){Re(t,t.return,m)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function vp(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function wp(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{el(4,t)}catch(u){Re(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){Re(t,o,u)}}var i=t.return;try{cc(t)}catch(u){Re(t,i,u)}break;case 5:var s=t.return;try{cc(t)}catch(u){Re(t,s,u)}}}catch(u){Re(t,t.return,u)}if(t===e){q=null;break}var a=t.sibling;if(a!==null){a.return=t.return,q=a;break}q=t.return}}var Qv=Math.ceil,_a=Tn.ReactCurrentDispatcher,Ed=Tn.ReactCurrentOwner,Ut=Tn.ReactCurrentBatchConfig,se=0,Ye=null,De=null,rt=0,Ft=0,co=ir(0),We=0,Ii=null,Fr=0,tl=0,jd=0,hi=null,bt=null,Cd=0,_o=1/0,xn=null,Ea=!1,pc=null,Qn=null,$s=!1,Mn=null,ja=0,mi=0,hc=null,Gs=-1,qs=0;function gt(){return se&6?Ne():Gs!==-1?Gs:Gs=Ne()}function Kn(e){return e.mode&1?se&2&&rt!==0?rt&-rt:Pv.transition!==null?(qs===0&&(qs=Xm()),qs):(e=pe,e!==0||(e=window.event,e=e===void 0?16:og(e.type)),e):1}function en(e,t,n,r){if(50<mi)throw mi=0,hc=null,Error(A(185));Yi(e,n,r),(!(se&2)||e!==Ye)&&(e===Ye&&(!(se&2)&&(tl|=n),We===4&&Ln(e,rt)),Et(e,r),n===1&&se===0&&!(t.mode&1)&&(_o=Ne()+500,Xa&&sr()))}function Et(e,t){var n=e.callbackNode;P1(e,t);var r=ca(e,e===Ye?rt:0);if(r===0)n!==null&&Tf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tf(n),t===1)e.tag===0?Rv($p.bind(null,e)):Sg($p.bind(null,e)),jv(function(){!(se&6)&&sr()}),n=null;else{switch(Jm(r)){case 1:n=ed;break;case 4:n=Qm;break;case 16:n=ua;break;case 536870912:n=Km;break;default:n=ua}n=$y(n,hy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hy(e,t){if(Gs=-1,qs=0,se&6)throw Error(A(327));var n=e.callbackNode;if(xo()&&e.callbackNode!==n)return null;var r=ca(e,e===Ye?rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ca(e,r);else{t=r;var o=se;se|=2;var i=gy();(Ye!==e||rt!==t)&&(xn=null,_o=Ne()+500,br(e,t));do try{Jv();break}catch(a){my(e,a)}while(!0);pd(),_a.current=i,se=o,De!==null?t=0:(Ye=null,rt=0,t=We)}if(t!==0){if(t===2&&(o=Bu(e),o!==0&&(r=o,t=mc(e,o))),t===1)throw n=Ii,br(e,0),Ln(e,r),Et(e,Ne()),n;if(t===6)Ln(e,r);else{if(o=e.current.alternate,!(r&30)&&!Kv(o)&&(t=Ca(e,r),t===2&&(i=Bu(e),i!==0&&(r=i,t=mc(e,i))),t===1))throw n=Ii,br(e,0),Ln(e,r),Et(e,Ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:dr(e,bt,xn);break;case 3:if(Ln(e,r),(r&130023424)===r&&(t=Cd+500-Ne(),10<t)){if(ca(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Qu(dr.bind(null,e,bt,xn),t);break}dr(e,bt,xn);break;case 4:if(Ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Zt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qv(r/1960))-r,10<r){e.timeoutHandle=Qu(dr.bind(null,e,bt,xn),r);break}dr(e,bt,xn);break;case 5:dr(e,bt,xn);break;default:throw Error(A(329))}}}return Et(e,Ne()),e.callbackNode===n?hy.bind(null,e):null}function mc(e,t){var n=hi;return e.current.memoizedState.isDehydrated&&(br(e,t).flags|=256),e=Ca(e,t),e!==2&&(t=bt,bt=n,t!==null&&gc(t)),e}function gc(e){bt===null?bt=e:bt.push.apply(bt,e)}function Kv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!nn(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t){for(t&=~jd,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Zt(t),r=1<<n;e[n]=-1,t&=~r}}function $p(e){if(se&6)throw Error(A(327));xo();var t=ca(e,0);if(!(t&1))return Et(e,Ne()),null;var n=Ca(e,t);if(e.tag!==0&&n===2){var r=Bu(e);r!==0&&(t=r,n=mc(e,r))}if(n===1)throw n=Ii,br(e,0),Ln(e,t),Et(e,Ne()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dr(e,bt,xn),Et(e,Ne()),null}function Td(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(_o=Ne()+500,Xa&&sr())}}function Rr(e){Mn!==null&&Mn.tag===0&&!(se&6)&&xo();var t=se;se|=1;var n=Ut.transition,r=pe;try{if(Ut.transition=null,pe=1,e)return e()}finally{pe=r,Ut.transition=n,se=t,!(se&6)&&sr()}}function Fd(){Ft=co.current,we(co)}function br(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ev(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(cd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ma();break;case 3:So(),we(kt),we(ct),vd();break;case 5:xd(r);break;case 4:So();break;case 13:we(_e);break;case 19:we(_e);break;case 10:hd(r.type._context);break;case 22:case 23:Fd()}n=n.return}if(Ye=e,De=e=Xn(e.current,null),rt=Ft=t,We=0,Ii=null,jd=tl=Fr=0,bt=hi=null,gr!==null){for(t=0;t<gr.length;t++)if(n=gr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}gr=null}return e}function my(e,t){do{var n=De;try{if(pd(),Vs.current=ka,Sa){for(var r=Ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Sa=!1}if(Tr=0,Ge=Ue=Ee=null,fi=!1,Ni=0,Ed.current=null,n===null||n.return===null){We=1,Ii=t,De=null;break}e:{var i=e,s=n.return,a=n,u=t;if(t=rt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var $=lp(s);if($!==null){$.flags&=-257,up($,s,a,i,t),$.mode&1&&ap(i,c,t),t=$,u=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(u),t.updateQueue=x}else y.add(u);break e}else{if(!(t&1)){ap(i,c,t),Rd();break e}u=Error(A(426))}}else if(be&&a.mode&1){var b=lp(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),up(b,s,a,i,t),dd(ko(u,a));break e}}i=u=ko(u,a),We!==4&&(We=2),hi===null?hi=[i]:hi.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Jg(i,u,t);tp(i,g);break e;case 1:a=u;var p=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Qn===null||!Qn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Zg(i,a,t);tp(i,v);break e}}i=i.return}while(i!==null)}xy(n)}catch(k){t=k,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function gy(){var e=_a.current;return _a.current=ka,e===null?ka:e}function Rd(){(We===0||We===3||We===2)&&(We=4),Ye===null||!(Fr&268435455)&&!(tl&268435455)||Ln(Ye,rt)}function Ca(e,t){var n=se;se|=2;var r=gy();(Ye!==e||rt!==t)&&(xn=null,br(e,t));do try{Xv();break}catch(o){my(e,o)}while(!0);if(pd(),se=n,_a.current=r,De!==null)throw Error(A(261));return Ye=null,rt=0,We}function Xv(){for(;De!==null;)yy(De)}function Jv(){for(;De!==null&&!S1();)yy(De)}function yy(e){var t=wy(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?xy(e):De=t,Ed.current=null}function xy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hv(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,De=null;return}}else if(n=Wv(n,t,Ft),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);We===0&&(We=5)}function dr(e,t,n){var r=pe,o=Ut.transition;try{Ut.transition=null,pe=1,Zv(e,t,n,r)}finally{Ut.transition=o,pe=r}return null}function Zv(e,t,n,r){do xo();while(Mn!==null);if(se&6)throw Error(A(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(O1(e,i),e===Ye&&(De=Ye=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$s||($s=!0,$y(ua,function(){return xo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ut.transition,Ut.transition=null;var s=pe;pe=1;var a=se;se|=4,Ed.current=null,qv(e,n),fy(n,e),vv(qu),da=!!Gu,qu=Gu=null,e.current=n,Yv(n),k1(),se=a,pe=s,Ut.transition=i}else e.current=n;if($s&&($s=!1,Mn=e,ja=o),i=e.pendingLanes,i===0&&(Qn=null),j1(n.stateNode),Et(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ea)throw Ea=!1,e=pc,pc=null,e;return ja&1&&e.tag!==0&&xo(),i=e.pendingLanes,i&1?e===hc?mi++:(mi=0,hc=e):mi=0,sr(),null}function xo(){if(Mn!==null){var e=Jm(ja),t=Ut.transition,n=pe;try{if(Ut.transition=null,pe=16>e?16:e,Mn===null)var r=!1;else{if(e=Mn,Mn=null,ja=0,se&6)throw Error(A(331));var o=se;for(se|=4,q=e.current;q!==null;){var i=q,s=i.child;if(q.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:pi(8,d,i)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var m=d.sibling,$=d.return;if(uy(d),d===c){q=null;break}if(m!==null){m.return=$,q=m;break}q=$}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}q=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,q=s;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pi(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,q=g;break e}q=i.return}}var p=e.current;for(q=p;q!==null;){s=q;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,q=h;else e:for(s=p;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:el(9,a)}}catch(k){Re(a,a.return,k)}if(a===s){q=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,q=v;break e}q=a.return}}if(se=o,sr(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Ga,e)}catch{}r=!0}return r}finally{pe=n,Ut.transition=t}}return!1}function bp(e,t,n){t=ko(n,t),t=Jg(e,t,1),e=Yn(e,t,1),t=gt(),e!==null&&(Yi(e,1,t),Et(e,t))}function Re(e,t,n){if(e.tag===3)bp(e,e,n);else for(;t!==null;){if(t.tag===3){bp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){e=ko(n,e),e=Zg(t,e,1),t=Yn(t,e,1),e=gt(),t!==null&&(Yi(t,1,e),Et(t,e));break}}t=t.return}}function ew(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,Ye===e&&(rt&n)===n&&(We===4||We===3&&(rt&130023424)===rt&&500>Ne()-Cd?br(e,0):jd|=n),Et(e,t)}function vy(e,t){t===0&&(e.mode&1?(t=ds,ds<<=1,!(ds&130023424)&&(ds=4194304)):t=1);var n=gt();e=jn(e,t),e!==null&&(Yi(e,t,n),Et(e,n))}function tw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vy(e,n)}function nw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),vy(e,n)}var wy;wy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)St=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return St=!1,Vv(e,t,n);St=!!(e.flags&131072)}else St=!1,be&&t.flags&1048576&&kg(t,xa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var o=wo(t,ct.current);yo(t,n),o=$d(null,t,r,e,o,n);var i=bd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_t(r)?(i=!0,ga(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,gd(t),o.updater=Za,t.stateNode=o,o._reactInternals=t,nc(t,r,e,n),t=ic(null,t,r,!0,i,n)):(t.tag=0,be&&i&&ud(t),pt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ow(r),e=qt(r,e),o){case 0:t=oc(null,t,r,e,n);break e;case 1:t=fp(null,t,r,e,n);break e;case 11:t=cp(null,t,r,e,n);break e;case 14:t=dp(null,t,r,qt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qt(r,o),oc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qt(r,o),fp(e,t,r,o,n);case 3:e:{if(ry(t),e===null)throw Error(A(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Fg(e,t),$a(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ko(Error(A(423)),t),t=pp(e,t,r,n,o);break e}else if(r!==o){o=ko(Error(A(424)),t),t=pp(e,t,r,n,o);break e}else for(Pt=qn(t.stateNode.containerInfo.firstChild),zt=t,be=!0,Kt=null,n=Cg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($o(),r===o){t=Cn(e,t,n);break e}pt(e,t,r,n)}t=t.child}return t;case 5:return Rg(t),e===null&&Zu(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Yu(r,o)?s=null:i!==null&&Yu(r,i)&&(t.flags|=32),ny(e,t),pt(e,t,s,n),t.child;case 6:return e===null&&Zu(t),null;case 13:return oy(e,t,n);case 4:return yd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bo(t,null,r,n):pt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qt(r,o),cp(e,t,r,o,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,ge(va,r._currentValue),r._currentValue=s,i!==null)if(nn(i.value,s)){if(i.children===o.children&&!kt.current){t=Cn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=kn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ec(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(A(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ec(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}pt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,yo(t,n),o=Vt(o),r=r(o),t.flags|=1,pt(e,t,r,n),t.child;case 14:return r=t.type,o=qt(r,t.pendingProps),o=qt(r.type,o),dp(e,t,r,o,n);case 15:return ey(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qt(r,o),Hs(e,t),t.tag=1,_t(r)?(e=!0,ga(t)):e=!1,yo(t,n),Xg(t,r,o),nc(t,r,o,n),ic(null,t,r,!0,e,n);case 19:return iy(e,t,n);case 22:return ty(e,t,n)}throw Error(A(156,t.tag))};function $y(e,t){return Ym(e,t)}function rw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,n,r){return new rw(e,t,n,r)}function Pd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ow(e){if(typeof e=="function")return Pd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xc)return 11;if(e===Jc)return 14}return 2}function Xn(e,t){var n=e.alternate;return n===null?(n=Bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ys(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Pd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case eo:return Sr(n.children,o,i,t);case Kc:s=8,o|=8;break;case Eu:return e=Bt(12,n,t,o|2),e.elementType=Eu,e.lanes=i,e;case ju:return e=Bt(13,n,t,o),e.elementType=ju,e.lanes=i,e;case Cu:return e=Bt(19,n,t,o),e.elementType=Cu,e.lanes=i,e;case Rm:return nl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tm:s=10;break e;case Fm:s=9;break e;case Xc:s=11;break e;case Jc:s=14;break e;case zn:s=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Bt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Sr(e,t,n,r){return e=Bt(7,e,r,t),e.lanes=n,e}function nl(e,t,n,r){return e=Bt(22,e,r,t),e.elementType=Rm,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=Bt(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iw(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Od(e,t,n,r,o,i,s,a,u){return e=new iw(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Bt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gd(i),e}function sw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function by(e){if(!e)return nr;e=e._reactInternals;e:{if(Lr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(_t(n))return bg(e,n,t)}return t}function Sy(e,t,n,r,o,i,s,a,u){return e=Od(n,r,!0,e,o,i,s,a,u),e.context=by(null),n=e.current,r=gt(),o=Kn(n),i=kn(r,o),i.callback=t??null,Yn(n,i,o),e.current.lanes=o,Yi(e,o,r),Et(e,r),e}function rl(e,t,n,r){var o=t.current,i=gt(),s=Kn(o);return n=by(n),t.context===null?t.context=n:t.pendingContext=n,t=kn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yn(o,t,s),e!==null&&(en(e,o,s,i),Us(e,o,s)),s}function Ta(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zd(e,t){Sp(e,t),(e=e.alternate)&&Sp(e,t)}function aw(){return null}var ky=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nd(e){this._internalRoot=e}ol.prototype.render=Nd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));rl(e,t,null,null)};ol.prototype.unmount=Nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rr(function(){rl(null,e,null,null)}),t[En]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=tg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<An.length&&t!==0&&t<An[n].priority;n++);An.splice(n,0,e),n===0&&rg(e)}};function Ad(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kp(){}function lw(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ta(s);i.call(c)}}var s=Sy(t,r,e,0,null,!1,!1,"",kp);return e._reactRootContainer=s,e[En]=s.current,Fi(e.nodeType===8?e.parentNode:e),Rr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Ta(u);a.call(c)}}var u=Od(e,0,!1,null,null,!1,!1,"",kp);return e._reactRootContainer=u,e[En]=u.current,Fi(e.nodeType===8?e.parentNode:e),Rr(function(){rl(t,u,n,r)}),u}function sl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var u=Ta(s);a.call(u)}}rl(t,s,e,o)}else s=lw(n,t,e,o,r);return Ta(s)}Zm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ti(t.pendingLanes);n!==0&&(td(t,n|1),Et(t,Ne()),!(se&6)&&(_o=Ne()+500,sr()))}break;case 13:Rr(function(){var r=jn(e,1);if(r!==null){var o=gt();en(r,e,1,o)}}),zd(e,1)}};nd=function(e){if(e.tag===13){var t=jn(e,134217728);if(t!==null){var n=gt();en(t,e,134217728,n)}zd(e,134217728)}};eg=function(e){if(e.tag===13){var t=Kn(e),n=jn(e,t);if(n!==null){var r=gt();en(n,e,t,r)}zd(e,t)}};tg=function(){return pe};ng=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};Iu=function(e,t,n){switch(t){case"input":if(Ru(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ka(r);if(!o)throw Error(A(90));Om(r),Ru(r,o)}}}break;case"textarea":Nm(e,n);break;case"select":t=n.value,t!=null&&po(e,!!n.multiple,t,!1)}};Um=Td;Vm=Rr;var uw={usingClientEntryPoint:!1,Events:[Ki,oo,Ka,Mm,Bm,Td]},qo={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cw={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gm(e),e===null?null:e.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||aw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{Ga=bs.inject(cw),cn=bs}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uw;At.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(t))throw Error(A(200));return sw(e,t,null,n)};At.createRoot=function(e,t){if(!Ad(e))throw Error(A(299));var n=!1,r="",o=ky;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Od(e,1,!1,null,null,n,!1,r,o),e[En]=t.current,Fi(e.nodeType===8?e.parentNode:e),new Nd(t)};At.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Gm(t),e=e===null?null:e.stateNode,e};At.flushSync=function(e){return Rr(e)};At.hydrate=function(e,t,n){if(!il(t))throw Error(A(200));return sl(null,e,t,!0,n)};At.hydrateRoot=function(e,t,n){if(!Ad(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=ky;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Sy(t,null,e,1,n??null,o,!1,i,s),e[En]=t.current,Fi(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ol(t)};At.render=function(e,t,n){if(!il(t))throw Error(A(200));return sl(null,e,t,!1,n)};At.unmountComponentAtNode=function(e){if(!il(e))throw Error(A(40));return e._reactRootContainer?(Rr(function(){sl(null,null,e,!1,function(){e._reactRootContainer=null,e[En]=null})}),!0):!1};At.unstable_batchedUpdates=Td;At.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!il(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return sl(e,t,n,!1,r)};At.version="18.3.1-next-f1338f8080-20240426";function _y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_y)}catch(e){console.error(e)}}_y(),_m.exports=At;var dw=_m.exports,_p=dw;ku.createRoot=_p.createRoot,ku.hydrateRoot=_p.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Di(){return Di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Di.apply(this,arguments)}var Bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bn||(Bn={}));const Ep="popstate";function fw(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return Fa("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Mi(o)}return Ey(t,n,null,e)}function pw(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:a="",hash:u=""}=Ir(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Fa("",{pathname:s,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let u=o.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof i=="string"?i:Mi(i))}function r(o,i){al(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Ey(t,n,r,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function al(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hw(){return Math.random().toString(36).substr(2,8)}function jp(e,t){return{usr:e.state,key:e.key,idx:t}}function Fa(e,t,n,r){return n===void 0&&(n=null),Di({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ir(t):t,{state:n,key:t&&t.key||r||hw()})}function Mi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ey(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=Bn.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(Di({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Bn.Pop;let b=d(),g=b==null?null:b-c;c=b,u&&u({action:a,location:x.location,delta:g})}function m(b,g){a=Bn.Push;let p=Fa(x.location,b,g);n&&n(p,b),c=d()+1;let h=jp(p,c),v=x.createHref(p);try{s.pushState(h,"",v)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(v)}i&&u&&u({action:a,location:x.location,delta:1})}function $(b,g){a=Bn.Replace;let p=Fa(x.location,b,g);n&&n(p,b),c=d();let h=jp(p,c),v=x.createHref(p);s.replaceState(h,"",v),i&&u&&u({action:a,location:x.location,delta:0})}function y(b){let g=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof b=="string"?b:Mi(b);return p=p.replace(/ $/,"%20"),je(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let x={get action(){return a},get location(){return e(o,s)},listen(b){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Ep,f),u=b,()=>{o.removeEventListener(Ep,f),u=null}},createHref(b){return t(o,b)},createURL:y,encodeLocation(b){let g=y(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:$,go(b){return s.go(b)}};return x}var Cp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cp||(Cp={}));function mw(e,t,n){return n===void 0&&(n="/"),gw(e,t,n)}function gw(e,t,n,r){let o=typeof t=="string"?Ir(t):t,i=Eo(o.pathname||"/",n);if(i==null)return null;let s=jy(e);yw(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let c=Cw(i);a=Ew(s[u],c)}return a}function jy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(je(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Jn([r,u.relativePath]),d=n.concat(u);i.children&&i.children.length>0&&(je(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),jy(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:kw(c,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let u of Cy(i.path))o(i,s,u)}),t}function Cy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Cy(r.join("/")),a=[];return a.push(...s.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function yw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_w(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xw=/^:[\w-]+$/,vw=3,ww=2,$w=1,bw=10,Sw=-2,Tp=e=>e==="*";function kw(e,t){let n=e.split("/"),r=n.length;return n.some(Tp)&&(r+=Sw),t&&(r+=ww),n.filter(o=>!Tp(o)).reduce((o,i)=>o+(xw.test(i)?vw:i===""?$w:bw),r)}function _w(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Ew(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=yc({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f)return null;Object.assign(o,f.params),s.push({params:o,pathname:Jn([i,f.pathname]),pathnameBase:Ow(Jn([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=Jn([i,f.pathnameBase]))}return s}function yc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jw(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:$}=d;if(m==="*"){let x=a[f]||"";s=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[f];return $&&!y?c[m]=void 0:c[m]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function jw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),al(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Cw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return al(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Eo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Tw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fw=e=>Tw.test(e);function Rw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Ir(e):e,i;if(n)if(Fw(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),al(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=Fp(n.substring(1),"/"):i=Fp(n,t)}else i=t;return{pathname:i,search:zw(r),hash:Nw(o)}}function Fp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Zl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Pw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ld(e,t){let n=Pw(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Id(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Ir(e):(o=Di({},e),je(!o.pathname||!o.pathname.includes("?"),Zl("?","pathname","search",o)),je(!o.pathname||!o.pathname.includes("#"),Zl("#","pathname","hash",o)),je(!o.search||!o.search.includes("#"),Zl("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;o.pathname=m.join("/")}a=f>=0?t[f]:"/"}let u=Rw(o,a),c=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Jn=e=>e.join("/").replace(/\/\/+/g,"/"),Ow=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Nw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Aw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ty=["post","put","patch","delete"];new Set(Ty);const Lw=["get",...Ty];new Set(Lw);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bi.apply(this,arguments)}const ll=j.createContext(null),Fy=j.createContext(null),Fn=j.createContext(null),ul=j.createContext(null),pn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Ry=j.createContext(null);function Iw(e,t){let{relative:n}=t===void 0?{}:t;Ao()||je(!1);let{basename:r,navigator:o}=j.useContext(Fn),{hash:i,pathname:s,search:a}=cl(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Jn([r,s])),o.createHref({pathname:u,search:a,hash:i})}function Ao(){return j.useContext(ul)!=null}function ar(){return Ao()||je(!1),j.useContext(ul).location}function Py(e){j.useContext(Fn).static||j.useLayoutEffect(e)}function Dr(){let{isDataRoute:e}=j.useContext(pn);return e?Zw():Dw()}function Dw(){Ao()||je(!1);let e=j.useContext(ll),{basename:t,future:n,navigator:r}=j.useContext(Fn),{matches:o}=j.useContext(pn),{pathname:i}=ar(),s=JSON.stringify(Ld(o,n.v7_relativeSplatPath)),a=j.useRef(!1);return Py(()=>{a.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Id(c,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Jn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,i,e])}const Mw=j.createContext(null);function Bw(e){let t=j.useContext(pn).outlet;return t&&j.createElement(Mw.Provider,{value:e},t)}function Oy(){let{matches:e}=j.useContext(pn),t=e[e.length-1];return t?t.params:{}}function cl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Fn),{matches:o}=j.useContext(pn),{pathname:i}=ar(),s=JSON.stringify(Ld(o,r.v7_relativeSplatPath));return j.useMemo(()=>Id(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Uw(e,t){return Vw(e,t)}function Vw(e,t,n,r){Ao()||je(!1);let{navigator:o}=j.useContext(Fn),{matches:i}=j.useContext(pn),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=ar(),d;if(t){var f;let b=typeof t=="string"?Ir(t):t;u==="/"||(f=b.pathname)!=null&&f.startsWith(u)||je(!1),d=b}else d=c;let m=d.pathname||"/",$=m;if(u!=="/"){let b=u.replace(/^\//,"").split("/");$="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let y=mw(e,{pathname:$}),x=Yw(y&&y.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:Jn([u,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:Jn([u,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return t&&x?j.createElement(ul.Provider,{value:{location:Bi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Bn.Pop}},x):x}function Ww(){let e=Jw(),t=Aw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:o},n):null,null)}const Hw=j.createElement(Ww,null);class Gw extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(pn.Provider,{value:this.props.routeContext},j.createElement(Ry.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qw(e){let{routeContext:t,match:n,children:r}=e,o=j.useContext(ll);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(pn.Provider,{value:t},r)}function Yw(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||je(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:$}=n,y=f.route.loader&&m[f.route.id]===void 0&&(!$||$[f.route.id]===void 0);if(f.route.lazy||y){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,m)=>{let $,y=!1,x=null,b=null;n&&($=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||Hw,u&&(c<0&&m===0?(e$("route-fallback"),y=!0,b=null):c===m&&(y=!0,b=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,m+1)),p=()=>{let h;return $?h=x:y?h=b:f.route.Component?h=j.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,j.createElement(qw,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?j.createElement(Gw,{location:n.location,revalidation:n.revalidation,component:x,error:$,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var zy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(zy||{}),Ny=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ny||{});function Qw(e){let t=j.useContext(ll);return t||je(!1),t}function Kw(e){let t=j.useContext(Fy);return t||je(!1),t}function Xw(e){let t=j.useContext(pn);return t||je(!1),t}function Ay(e){let t=Xw(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function Jw(){var e;let t=j.useContext(Ry),n=Kw(),r=Ay();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Zw(){let{router:e}=Qw(zy.UseNavigateStable),t=Ay(Ny.UseNavigateStable),n=j.useRef(!1);return Py(()=>{n.current=!0}),j.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Bi({fromRouteId:t},i)))},[e,t])}const Rp={};function e$(e,t,n){Rp[e]||(Rp[e]=!0)}function Ly(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ra(e){let{to:t,replace:n,state:r,relative:o}=e;Ao()||je(!1);let{future:i,static:s}=j.useContext(Fn),{matches:a}=j.useContext(pn),{pathname:u}=ar(),c=Dr(),d=Id(t,Ld(a,i.v7_relativeSplatPath),u,o==="path"),f=JSON.stringify(d);return j.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:o}),[c,f,o,n,r]),null}function Iy(e){return Bw(e.context)}function Fe(e){je(!1)}function Dy(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Bn.Pop,navigator:i,static:s=!1,future:a}=e;Ao()&&je(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:i,static:s,future:Bi({v7_relativeSplatPath:!1},a)}),[u,a,i,s]);typeof r=="string"&&(r=Ir(r));let{pathname:d="/",search:f="",hash:m="",state:$=null,key:y="default"}=r,x=j.useMemo(()=>{let b=Eo(d,u);return b==null?null:{location:{pathname:b,search:f,hash:m,state:$,key:y},navigationType:o}},[u,d,f,m,$,y,o]);return x==null?null:j.createElement(Fn.Provider,{value:c},j.createElement(ul.Provider,{children:n,value:x}))}function t$(e){let{children:t,location:n}=e;return Uw(xc(t),n)}new Promise(()=>{});function xc(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,o)=>{if(!j.isValidElement(r))return;let i=[...t,o];if(r.type===j.Fragment){n.push.apply(n,xc(r.props.children,i));return}r.type!==Fe&&je(!1),!r.props.index||!r.props.children||je(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=xc(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pa.apply(this,arguments)}function My(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function n$(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function r$(e,t){return e.button===0&&(!t||t==="_self")&&!n$(e)}const o$=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],i$=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],s$="6";try{window.__reactRouterVersion=s$}catch{}const a$=j.createContext({isTransitioning:!1}),l$="startTransition",Oa=e1[l$];function u$(e){let{basename:t,children:n,future:r,window:o}=e,i=j.useRef();i.current==null&&(i.current=fw({window:o,v5Compat:!0}));let s=i.current,[a,u]=j.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=j.useCallback(f=>{c&&Oa?Oa(()=>u(f)):u(f)},[u,c]);return j.useLayoutEffect(()=>s.listen(d),[s,d]),j.useEffect(()=>Ly(r),[r]),j.createElement(Dy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}function c$(e){let{basename:t,children:n,future:r,window:o}=e,i=j.useRef();i.current==null&&(i.current=pw({window:o,v5Compat:!0}));let s=i.current,[a,u]=j.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=j.useCallback(f=>{c&&Oa?Oa(()=>u(f)):u(f)},[u,c]);return j.useLayoutEffect(()=>s.listen(d),[s,d]),j.useEffect(()=>Ly(r),[r]),j.createElement(Dy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const d$=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f$=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p$=j.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:u,to:c,preventScrollReset:d,viewTransition:f}=t,m=My(t,o$),{basename:$}=j.useContext(Fn),y,x=!1;if(typeof c=="string"&&f$.test(c)&&(y=c,d$))try{let h=new URL(window.location.href),v=c.startsWith("//")?new URL(h.protocol+c):new URL(c),k=Eo(v.pathname,$);v.origin===h.origin&&k!=null?c=k+v.search+v.hash:x=!0}catch{}let b=Iw(c,{relative:o}),g=g$(c,{replace:s,state:a,target:u,preventScrollReset:d,relative:o,viewTransition:f});function p(h){r&&r(h),h.defaultPrevented||g(h)}return j.createElement("a",Pa({},m,{href:y||b,onClick:x||i?r:p,ref:n,target:u}))}),h$=j.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:u,viewTransition:c,children:d}=t,f=My(t,i$),m=cl(u,{relative:f.relative}),$=ar(),y=j.useContext(Fy),{navigator:x,basename:b}=j.useContext(Fn),g=y!=null&&y$(m)&&c===!0,p=x.encodeLocation?x.encodeLocation(m).pathname:m.pathname,h=$.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(h=h.toLowerCase(),v=v?v.toLowerCase():null,p=p.toLowerCase()),v&&b&&(v=Eo(v,b)||v);const k=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let T=h===p||!s&&h.startsWith(p)&&h.charAt(k)==="/",_=v!=null&&(v===p||!s&&v.startsWith(p)&&v.charAt(p.length)==="/"),E={isActive:T,isPending:_,isTransitioning:g},O=T?r:void 0,N;typeof i=="function"?N=i(E):N=[i,T?"active":null,_?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let B=typeof a=="function"?a(E):a;return j.createElement(p$,Pa({},f,{"aria-current":O,className:N,ref:n,style:B,to:u,viewTransition:c}),typeof d=="function"?d(E):d)});var vc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vc||(vc={}));var Pp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pp||(Pp={}));function m$(e){let t=j.useContext(ll);return t||je(!1),t}function g$(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,u=Dr(),c=ar(),d=cl(e,{relative:s});return j.useCallback(f=>{if(r$(f,n)){f.preventDefault();let m=r!==void 0?r:Mi(c)===Mi(d);u(e,{replace:m,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[c,u,d,r,o,n,e,i,s,a])}function y$(e,t){t===void 0&&(t={});let n=j.useContext(a$);n==null&&je(!1);let{basename:r}=m$(vc.useViewTransitionState),o=cl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Eo(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Eo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return yc(o.pathname,s)!=null||yc(o.pathname,i)!=null}var qe=function(){return qe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},qe.apply(this,arguments)};function jo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ve="-ms-",gi="-moz-",ue="-webkit-",By="comm",dl="rule",Dd="decl",x$="@import",v$="@namespace",Uy="@keyframes",w$="@layer",Vy=Math.abs,Md=String.fromCharCode,wc=Object.assign;function $$(e,t){return Ve(e,0)^45?(((t<<2^Ve(e,0))<<2^Ve(e,1))<<2^Ve(e,2))<<2^Ve(e,3):0}function Wy(e){return e.trim()}function vn(e,t){return(e=t.exec(e))?e[0]:e}function te(e,t,n){return e.replace(t,n)}function Qs(e,t,n){return e.indexOf(t,n)}function Ve(e,t){return e.charCodeAt(t)|0}function Pr(e,t,n){return e.slice(t,n)}function Qt(e){return e.length}function Hy(e){return e.length}function ri(e,t){return t.push(e),e}function b$(e,t){return e.map(t).join("")}function Op(e,t){return e.filter(function(n){return!vn(n,t)})}var fl=1,Co=1,Gy=0,Ht=0,Ie=0,Lo="";function pl(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:fl,column:Co,length:s,return:"",siblings:a}}function On(e,t){return wc(pl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Wr(e){for(;e.root;)e=On(e.root,{children:[e]});ri(e,e.siblings)}function S$(){return Ie}function k$(){return Ie=Ht>0?Ve(Lo,--Ht):0,Co--,Ie===10&&(Co=1,fl--),Ie}function tn(){return Ie=Ht<Gy?Ve(Lo,Ht++):0,Co++,Ie===10&&(Co=1,fl++),Ie}function Un(){return Ve(Lo,Ht)}function Ks(){return Ht}function hl(e,t){return Pr(Lo,e,t)}function Ui(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _$(e){return fl=Co=1,Gy=Qt(Lo=e),Ht=0,[]}function E$(e){return Lo="",e}function eu(e){return Wy(hl(Ht-1,$c(e===91?e+2:e===40?e+1:e)))}function j$(e){for(;(Ie=Un())&&Ie<33;)tn();return Ui(e)>2||Ui(Ie)>3?"":" "}function C$(e,t){for(;--t&&tn()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return hl(e,Ks()+(t<6&&Un()==32&&tn()==32))}function $c(e){for(;tn();)switch(Ie){case e:return Ht;case 34:case 39:e!==34&&e!==39&&$c(Ie);break;case 40:e===41&&$c(e);break;case 92:tn();break}return Ht}function T$(e,t){for(;tn()&&e+Ie!==57;)if(e+Ie===84&&Un()===47)break;return"/*"+hl(t,Ht-1)+"*"+Md(e===47?e:tn())}function F$(e){for(;!Ui(Un());)tn();return hl(e,Ht)}function R$(e){return E$(Xs("",null,null,null,[""],e=_$(e),0,[0],e))}function Xs(e,t,n,r,o,i,s,a,u){for(var c=0,d=0,f=s,m=0,$=0,y=0,x=1,b=1,g=1,p=0,h="",v=o,k=i,T=r,_=h;b;)switch(y=p,p=tn()){case 40:if(y!=108&&Ve(_,f-1)==58){Qs(_+=te(eu(p),"&","&\f"),"&\f",Vy(c?a[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:_+=eu(p);break;case 9:case 10:case 13:case 32:_+=j$(y);break;case 92:_+=C$(Ks()-1,7);continue;case 47:switch(Un()){case 42:case 47:ri(P$(T$(tn(),Ks()),t,n,u),u),(Ui(y||1)==5||Ui(Un()||1)==5)&&Qt(_)&&Pr(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*x:a[c++]=Qt(_)*g;case 125*x:case 59:case 0:switch(p){case 0:case 125:b=0;case 59+d:g==-1&&(_=te(_,/\f/g,"")),$>0&&(Qt(_)-f||x===0&&y===47)&&ri($>32?Np(_+";",r,n,f-1,u):Np(te(_," ","")+";",r,n,f-2,u),u);break;case 59:_+=";";default:if(ri(T=zp(_,t,n,c,d,o,a,h,v=[],k=[],f,i),i),p===123)if(d===0)Xs(_,t,T,T,v,i,f,a,k);else{switch(m){case 99:if(Ve(_,3)===110)break;case 108:if(Ve(_,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Xs(e,T,T,r&&ri(zp(e,T,T,0,0,o,a,h,o,v=[],f,k),k),o,k,f,a,r?v:k):Xs(_,T,T,T,[""],k,0,a,k)}}c=d=$=0,x=g=1,h=_="",f=s;break;case 58:f=1+Qt(_),$=y;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&k$()==125)continue}switch(_+=Md(p),p*x){case 38:g=d>0?1:(_+="\f",-1);break;case 44:a[c++]=(Qt(_)-1)*g,g=1;break;case 64:Un()===45&&(_+=eu(tn())),m=Un(),d=f=Qt(h=_+=F$(Ks())),p++;break;case 45:y===45&&Qt(_)==2&&(x=0)}}return i}function zp(e,t,n,r,o,i,s,a,u,c,d,f){for(var m=o-1,$=o===0?i:[""],y=Hy($),x=0,b=0,g=0;x<r;++x)for(var p=0,h=Pr(e,m+1,m=Vy(b=s[x])),v=e;p<y;++p)(v=Wy(b>0?$[p]+" "+h:te(h,/&\f/g,$[p])))&&(u[g++]=v);return pl(e,t,n,o===0?dl:a,u,c,d,f)}function P$(e,t,n,r){return pl(e,t,n,By,Md(S$()),Pr(e,2,-2),0,r)}function Np(e,t,n,r,o){return pl(e,t,n,Dd,Pr(e,0,r),Pr(e,r+1,-1),r,o)}function qy(e,t,n){switch($$(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return gi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+gi+e+ve+e+e;case 5936:switch(Ve(e,t+11)){case 114:return ue+e+ve+te(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ve+te(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ve+te(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ve+e+e;case 6165:return ue+e+ve+"flex-"+e+e;case 5187:return ue+e+te(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ve+"flex-$1$2")+e;case 5443:return ue+e+ve+"flex-item-"+te(e,/flex-|-self/g,"")+(vn(e,/flex-|baseline/)?"":ve+"grid-row-"+te(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ve+"flex-line-pack"+te(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ve+te(e,"shrink","negative")+e;case 5292:return ue+e+ve+te(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+te(e,"-grow","")+ue+e+ve+te(e,"grow","positive")+e;case 4554:return ue+te(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return te(te(te(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return te(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return te(te(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ve+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!vn(e,/flex-|baseline/))return ve+"grid-column-align"+Pr(e,t)+e;break;case 2592:case 3360:return ve+te(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,vn(r.props,/grid-\w+-end/)})?~Qs(e+(n=n[t].value),"span",0)?e:ve+te(e,"-start","")+e+ve+"grid-row-span:"+(~Qs(n,"span",0)?vn(n,/\d+/):+vn(n,/\d+/)-+vn(e,/\d+/))+";":ve+te(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return vn(r.props,/grid-\w+-start/)})?e:ve+te(te(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return te(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qt(e)-1-t>6)switch(Ve(e,t+1)){case 109:if(Ve(e,t+4)!==45)break;case 102:return te(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+gi+(Ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Qs(e,"stretch",0)?qy(te(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return te(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,u,c){return ve+o+":"+i+c+(s?ve+o+"-span:"+(a?u:+u-+i)+c:"")+e});case 4949:if(Ve(e,t+6)===121)return te(e,":",":"+ue)+e;break;case 6444:switch(Ve(e,Ve(e,14)===45?18:11)){case 120:return te(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Ve(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ve+"$2box$3")+e;case 100:return te(e,":",":"+ve)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(e,"scroll-","scroll-snap-")+e}return e}function za(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function O$(e,t,n,r){switch(e.type){case w$:if(e.children.length)break;case x$:case v$:case Dd:return e.return=e.return||e.value;case By:return"";case Uy:return e.return=e.value+"{"+za(e.children,r)+"}";case dl:if(!Qt(e.value=e.props.join(",")))return""}return Qt(n=za(e.children,r))?e.return=e.value+"{"+n+"}":""}function z$(e){var t=Hy(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function N$(e){return function(t){t.root||(t=t.return)&&e(t)}}function A$(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Dd:e.return=qy(e.value,e.length,n);return;case Uy:return za([On(e,{value:te(e.value,"@","@"+ue)})],r);case dl:if(e.length)return b$(n=e.props,function(o){switch(vn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wr(On(e,{props:[te(o,/:(read-\w+)/,":"+gi+"$1")]})),Wr(On(e,{props:[o]})),wc(e,{props:Op(n,r)});break;case"::placeholder":Wr(On(e,{props:[te(o,/:(plac\w+)/,":"+ue+"input-$1")]})),Wr(On(e,{props:[te(o,/:(plac\w+)/,":"+gi+"$1")]})),Wr(On(e,{props:[te(o,/:(plac\w+)/,ve+"input-$1")]})),Wr(On(e,{props:[o]})),wc(e,{props:Op(n,r)});break}return""})}}var L$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tt={},To=typeof process<"u"&&Tt!==void 0&&(Tt.REACT_APP_SC_ATTR||Tt.SC_ATTR)||"data-styled",Yy="active",Qy="data-styled-version",ml="6.3.11",Bd=`/*!sc*/
`,yi=typeof window<"u"&&typeof document<"u",I$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Tt!==void 0&&Tt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Tt.REACT_APP_SC_DISABLE_SPEEDY!==""?Tt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Tt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Tt!==void 0&&Tt.SC_DISABLE_SPEEDY!==void 0&&Tt.SC_DISABLE_SPEEDY!==""&&Tt.SC_DISABLE_SPEEDY!=="false"&&Tt.SC_DISABLE_SPEEDY),D$={};function Or(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Js=new Map,Na=new Map,Zs=1,oi=function(e){if(Js.has(e))return Js.get(e);for(;Na.has(Zs);)Zs++;var t=Zs++;return Js.set(e,t),Na.set(t,e),t},M$=function(e,t){Zs=t+1,Js.set(e,t),Na.set(t,e)},Ud=Object.freeze([]),Fo=Object.freeze({});function Ky(e,t,n){return n===void 0&&(n=Fo),e.theme!==n.theme&&e.theme||t||n.theme}var Xy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),B$=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,U$=/(^-|-$)/g;function Ap(e){return e.replace(B$,"-").replace(U$,"")}var V$=/(a)(d)/gi,Lp=function(e){return String.fromCharCode(e+(e>25?39:97))};function bc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Lp(t%52)+n;return(Lp(t%52)+n).replace(V$,"$1-$2")}var tu,pr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jy=function(e){return pr(5381,e)};function Vd(e){return bc(Jy(e)>>>0)}function W$(e){return e.displayName||e.name||"Component"}function nu(e){return typeof e=="string"&&!0}var Zy=typeof Symbol=="function"&&Symbol.for,e0=Zy?Symbol.for("react.memo"):60115,H$=Zy?Symbol.for("react.forward_ref"):60112,G$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},q$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Y$=((tu={})[H$]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tu[e0]=t0,tu);function Ip(e){return("type"in(t=e)&&t.type.$$typeof)===e0?t0:"$$typeof"in e?Y$[e.$$typeof]:G$;var t}var Q$=Object.defineProperty,K$=Object.getOwnPropertyNames,Dp=Object.getOwnPropertySymbols,X$=Object.getOwnPropertyDescriptor,J$=Object.getPrototypeOf,Mp=Object.prototype;function n0(e,t,n){if(typeof t!="string"){if(Mp){var r=J$(t);r&&r!==Mp&&n0(e,r,n)}var o=K$(t);Dp&&(o=o.concat(Dp(t)));for(var i=Ip(e),s=Ip(t),a=0;a<o.length;++a){var u=o[a];if(!(u in q$||n&&n[u]||s&&u in s||i&&u in i)){var c=X$(t,u);try{Q$(e,u,c)}catch{}}}}return e}function zr(e){return typeof e=="function"}function Wd(e){return typeof e=="object"&&"styledComponentId"in e}function xr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Aa(e,t){return e.join("")}function Vi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sc(e,t,n){if(n===void 0&&(n=!1),!n&&!Vi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sc(e[r],t[r]);else if(Vi(t))for(var r in t)e[r]=Sc(e[r],t[r]);return e}function Hd(e,t){Object.defineProperty(e,"toString",{value:t})}var Z$=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Or(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),u=0,c=(s=0,n.length);s<c;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++,u++);u>0&&this._cGroup>t&&(this._cIndex+=u)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+=this.tag.getRule(s)+Bd;return n},e}(),eb="style[".concat(To,"][").concat(Qy,'="').concat(ml,'"]'),tb=new RegExp("^".concat(To,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Bp=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},kc=function(e){if(!e)return document;if(Bp(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Bp(t))return t}return document},nb=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},rb=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Bd),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var u=a.match(tb);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(M$(d,c),nb(e,d,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}},ru=function(e){for(var t=kc(e.options.target).querySelectorAll(eb),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(To)!==Yy&&(rb(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function ob(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var r0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var u=Array.from(a.querySelectorAll("style[".concat(To,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(To,Yy),r.setAttribute(Qy,ml);var s=ob();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},ib=function(){function e(t){this.element=r0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,i=0,s=o.length;i<s;i++){var a=o[i];if(a.ownerNode===n)return a}throw Or(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),sb=function(){function e(t){this.element=r0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ab=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Up=yi,lb={isServer:!yi,useCSSOMInjection:!I$},La=function(){function e(t,n,r){t===void 0&&(t=Fo),n===void 0&&(n={});var o=this;this.options=qe(qe({},lb),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&yi&&Up&&(Up=!1,ru(this)),Hd(this,function(){return function(i){for(var s=i.getTag(),a=s.length,u="",c=function(f){var m=function(g){return Na.get(g)}(f);if(m===void 0)return"continue";var $=i.names.get(m);if($===void 0||!$.size)return"continue";var y=s.getGroup(f);if(y.length===0)return"continue";var x=To+".g"+f+'[id="'+m+'"]',b="";$.forEach(function(g){g.length>0&&(b+=g+",")}),u+=y+x+'{content:"'+b+'"}'+Bd},d=0;d<a;d++)c(d);return u}(o)})}return e.registerId=function(t){return oi(t)},e.prototype.rehydrate=function(){!this.server&&yi&&ru(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(qe(qe({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&yi&&t.target!==this.options.target&&kc(this.options.target)!==kc(t.target)&&ru(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new ab(o):r?new ib(o):new sb(o)}(this.options),new Z$(t)));var t},e.prototype.hasNameForId=function(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o},e.prototype.registerName=function(t,n){oi(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(oi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(oi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ub=/&/g,wn=47,hr=42;function Vp(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,o=!1,i=0;i<t;i++){var s=e.charCodeAt(i);if(r!==0||o||s!==wn||e.charCodeAt(i+1)!==hr)if(o)s===hr&&e.charCodeAt(i+1)===wn&&(o=!1,i++);else if(s!==34&&s!==39||i!==0&&e.charCodeAt(i-1)===92){if(r===0){if(s===123)n++;else if(s===125&&--n<0)return!0}}else r===0?r=s:r===s&&(r=0);else o=!0,i++}return n!==0||r!==0}function o0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=o0(n.children,t)),n})}function cb(e){var t,n,r,o=Fo,i=o.options,s=i===void 0?Fo:i,a=o.plugins,u=a===void 0?Ud:a,c=function(y,x,b){return b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(t):y},d=u.slice();d.push(function(y){y.type===dl&&y.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),y.props[0]=y.props[0].replace(ub,n).replace(r,c))}),s.prefix&&d.push(A$),d.push(O$);var f=[],m=z$(d.concat(N$(function(y){return f.push(y)}))),$=function(y,x,b,g){x===void 0&&(x=""),b===void 0&&(b=""),g===void 0&&(g="&"),t=g,n=x,r=void 0;var p=function(v){if(!Vp(v))return v;for(var k=v.length,T="",_=0,E=0,O=0,N=!1,B=0;B<k;B++){var V=v.charCodeAt(B);if(O!==0||N||V!==wn||v.charCodeAt(B+1)!==hr)if(N)V===hr&&v.charCodeAt(B+1)===wn&&(N=!1,B++);else if(V!==34&&V!==39||B!==0&&v.charCodeAt(B-1)===92){if(O===0)if(V===123)E++;else if(V===125){if(--E<0){for(var G=B+1;G<k;){var Z=v.charCodeAt(G);if(Z===59||Z===10)break;G++}G<k&&v.charCodeAt(G)===59&&G++,E=0,B=G-1,_=G;continue}E===0&&(T+=v.substring(_,B+1),_=B+1)}else V===59&&E===0&&(T+=v.substring(_,B+1),_=B+1)}else O===0?O=V:O===V&&(O=0);else N=!0,B++}if(_<k){var ne=v.substring(_);Vp(ne)||(T+=ne)}return T}(function(v){if(v.indexOf("//")===-1)return v;for(var k=v.length,T=[],_=0,E=0,O=0,N=0;E<k;){var B=v.charCodeAt(E);if(B!==34&&B!==39||E!==0&&v.charCodeAt(E-1)===92)if(O===0)if(B===wn&&E+1<k&&v.charCodeAt(E+1)===hr){for(E+=2;E+1<k&&(v.charCodeAt(E)!==hr||v.charCodeAt(E+1)!==wn);)E++;E+=2}else if(B===40&&E>=3&&(32|v.charCodeAt(E-1))==108&&(32|v.charCodeAt(E-2))==114&&(32|v.charCodeAt(E-3))==117)N=1,E++;else if(N>0)B===41?N--:B===40&&N++,E++;else if(B===hr&&E+1<k&&v.charCodeAt(E+1)===wn)E>_&&T.push(v.substring(_,E)),_=E+=2;else if(B===wn&&E+1<k&&v.charCodeAt(E+1)===wn){for(E>_&&T.push(v.substring(_,E));E<k&&v.charCodeAt(E)!==10;)E++;_=E}else E++;else E++;else O===0?O=B:O===B&&(O=0),E++}return _===0?v:(_<k&&T.push(v.substring(_)),T.join(""))}(y)),h=R$(b||x?"".concat(b," ").concat(x," { ").concat(p," }"):p);return s.namespace&&(h=o0(h,s.namespace)),f=[],za(h,m),f};return $.hash=u.length?u.reduce(function(y,x){return x.name||Or(15),pr(y,x.name)},5381).toString():"",$}var db=new La,_c=cb(),i0=Q.createContext({shouldForwardProp:void 0,styleSheet:db,stylis:_c});i0.Consumer;Q.createContext(void 0);function Ec(){return Q.useContext(i0)}var s0=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=_c);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Hd(this,function(){throw Or(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=_c),this.name+t.hash},e}();function fb(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in L$||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var pb=function(e){return e>="A"&&e<="Z"};function Wp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;pb(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var a0=function(e){return e==null||e===!1||e===""},l0=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!a0(r)&&(Array.isArray(r)&&r.isCss||zr(r)?t.push("".concat(Wp(n),":"),r,";"):Vi(r)?t.push.apply(t,jo(jo(["".concat(n," {")],l0(r),!1),["}"],!1)):t.push("".concat(Wp(n),": ").concat(fb(n,r),";")))}return t};function Zn(e,t,n,r,o){if(o===void 0&&(o=[]),typeof e=="string")return e&&o.push(e),o;if(a0(e))return o;if(Wd(e))return o.push(".".concat(e.styledComponentId)),o;if(zr(e)){if(!zr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return o.push(e),o;var i=e(t);return Zn(i,t,n,r,o)}var s;if(e instanceof s0)return n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o;if(Vi(e)){for(var a=l0(e),u=0;u<a.length;u++)o.push(a[u]);return o}if(!Array.isArray(e))return o.push(e.toString()),o;for(u=0;u<e.length;u++)Zn(e[u],t,n,r,o);return o}function u0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zr(n)&&!Wd(n))return!1}return!0}var hb=Jy(ml),mb=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&u0(t),this.componentId=n,this.baseHash=pr(hb,n),this.baseStyle=r,La.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=xr(o,this.staticRulesId);else{var i=Aa(Zn(this.rules,t,n,r)),s=bc(pr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=xr(o,s),this.staticRulesId=s}else{for(var u=pr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var m=Aa(Zn(f,t,n,r));u=pr(pr(u,String(d)),m),c+=m}}if(c){var $=bc(u>>>0);if(!n.hasNameForId(this.componentId,$)){var y=r(c,".".concat($),void 0,this.componentId);n.insertRules(this.componentId,$,y)}o=xr(o,$)}}return{className:o,css:typeof window>"u"?n.getTag().getGroup(oi(this.componentId)):""}},e}(),Wi=Q.createContext(void 0);Wi.Consumer;function gb(e){var t=Q.useContext(Wi),n=Q.useMemo(function(){return function(r,o){if(!r)throw Or(14);if(zr(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw Or(8);return o?qe(qe({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?Q.createElement(Wi.Provider,{value:n},e.children):null}var ou={};function yb(e,t,n){var r=Wd(e),o=e,i=!nu(e),s=t.attrs,a=s===void 0?Ud:s,u=t.componentId,c=u===void 0?function(v,k){var T=typeof v!="string"?"sc":Ap(v);ou[T]=(ou[T]||0)+1;var _="".concat(T,"-").concat(Vd(ml+T+ou[T]));return k?"".concat(k,"-").concat(_):_}(t.displayName,t.parentComponentId):u,d=t.displayName,f=d===void 0?function(v){return nu(v)?"styled.".concat(v):"Styled(".concat(W$(v),")")}(e):d,m=t.displayName&&t.componentId?"".concat(Ap(t.displayName),"-").concat(t.componentId):t.componentId||c,$=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;y=function(v,k){return x(v,k)&&b(v,k)}}else y=x}var g=new mb(n,m,r?o.componentStyle:void 0);function p(v,k){return function(T,_,E){var O=T.attrs,N=T.componentStyle,B=T.defaultProps,V=T.foldedComponentIds,G=T.styledComponentId,Z=T.target,ne=Q.useContext(Wi),L=Ec(),I=T.shouldForwardProp||L.shouldForwardProp,P=Ky(_,ne,B)||Fo,D=function(me,Te,J){for(var Ke,Oe=qe(qe({},Te),{className:void 0,theme:J}),Xe=0;Xe<me.length;Xe+=1){var Ur=zr(Ke=me[Xe])?Ke(Oe):Ke;for(var hn in Ur)hn==="className"?Oe.className=xr(Oe.className,Ur[hn]):hn==="style"?Oe.style=qe(qe({},Oe.style),Ur[hn]):Oe[hn]=Ur[hn]}return"className"in Te&&typeof Te.className=="string"&&(Oe.className=xr(Oe.className,Te.className)),Oe}(O,_,P),z=D.as||Z,X={};for(var W in D)D[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&D.theme===P||(W==="forwardedAs"?X.as=D.forwardedAs:I&&!I(W,z)||(X[W]=D[W]));var ce=function(me,Te){var J=Ec(),Ke=me.generateAndInjectStyles(Te,J.styleSheet,J.stylis);return Ke}(N,D),le=ce.className,ye=xr(V,G);return le&&(ye+=" "+le),D.className&&(ye+=" "+D.className),X[nu(z)&&!Xy.has(z)?"class":"className"]=ye,E&&(X.ref=E),j.createElement(z,X)}(h,v,k)}p.displayName=f;var h=Q.forwardRef(p);return h.attrs=$,h.componentStyle=g,h.displayName=f,h.shouldForwardProp=y,h.foldedComponentIds=r?xr(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=m,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(k){for(var T=[],_=1;_<arguments.length;_++)T[_-1]=arguments[_];for(var E=0,O=T;E<O.length;E++)Sc(k,O[E],!0);return k}({},o.defaultProps,v):v}}),Hd(h,function(){return".".concat(h.styledComponentId)}),i&&n0(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Hp(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Gp=function(e){return Object.assign(e,{isCss:!0})};function Ji(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zr(e)||Vi(e))return Gp(Zn(Hp(Ud,jo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Zn(r):Gp(Zn(Hp(r,t)))}function jc(e,t,n){if(n===void 0&&(n=Fo),!t)throw Or(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Ji.apply(void 0,jo([o],i,!1)))};return r.attrs=function(o){return jc(e,t,qe(qe({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return jc(e,t,qe(qe({},n),o))},r}var c0=function(e){return jc(yb,e)},w=c0;Xy.forEach(function(e){w[e]=c0(e)});var xb=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=u0(t),La.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Aa(Zn(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&La.registerId(this.componentId+t);var i=this.componentId+t;this.isStatic?r.hasNameForId(i,i)||this.createStyles(t,n,r,o):(this.removeStyles(t,r),this.createStyles(t,n,r,o))},e}();function vb(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ji.apply(void 0,jo([e],t,!1)),o="sc-global-".concat(Vd(JSON.stringify(r))),i=new xb(r,o),s=new WeakMap,a=function(c){var d=Ec(),f=Q.useContext(Wi),m=s.get(d.styleSheet);return m===void 0&&(m=d.styleSheet.allocateGSInstance(o),s.set(d.styleSheet,m)),(typeof window>"u"||!d.styleSheet.server)&&u(m,c,d.styleSheet,f,d.stylis),Q.useLayoutEffect(function(){return d.styleSheet.server||u(m,c,d.styleSheet,f,d.stylis),function(){var $;i.removeStyles(m,d.styleSheet),$=d.styleSheet.options.target,typeof document<"u"&&($??document).querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(y){return y.remove()})}},[m,c,d.styleSheet,f,d.stylis]),null};function u(c,d,f,m,$){if(i.isStatic)i.renderStyles(c,D$,f,$);else{var y=qe(qe({},d),{theme:Ky(d,m,a.defaultProps)});i.renderStyles(c,y,f,$)}}return Q.memo(a)}function Qe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Aa(Ji.apply(void 0,jo([e],t,!1))),o=Vd(r);return new s0(o,r)}function d0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=d0(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Vn(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=d0(e))&&(r&&(r+=" "),r+=t);return r}const Hi=e=>typeof e=="number"&&!isNaN(e),kr=e=>typeof e=="string",Ot=e=>typeof e=="function",ea=e=>kr(e)||Ot(e)?e:null,Cc=e=>j.isValidElement(e)||kr(e)||Ot(e)||Hi(e);function wb(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function gl(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(s){let{children:a,position:u,preventExitTransition:c,done:d,nodeRef:f,isIn:m,playToast:$}=s;const y=r?`${t}--${u}`:t,x=r?`${n}--${u}`:n,b=j.useRef(0);return j.useLayoutEffect(()=>{const g=f.current,p=y.split(" "),h=v=>{v.target===f.current&&($(),g.removeEventListener("animationend",h),g.removeEventListener("animationcancel",h),b.current===0&&v.type!=="animationcancel"&&g.classList.remove(...p))};g.classList.add(...p),g.addEventListener("animationend",h),g.addEventListener("animationcancel",h)},[]),j.useEffect(()=>{const g=f.current,p=()=>{g.removeEventListener("animationend",p),o?wb(g,d,i):d()};m||(c?p():(b.current=1,g.className+=` ${x}`,g.addEventListener("animationend",p)))},[m]),Q.createElement(Q.Fragment,null,a)}}function qp(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const mt=new Map;let Gi=[];const Tc=new Set,$b=e=>Tc.forEach(t=>t(e)),f0=()=>mt.size>0;function p0(e,t){var n;if(t)return!((n=mt.get(t))==null||!n.isToastActive(e));let r=!1;return mt.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function h0(e,t){Cc(e)&&(f0()||Gi.push({content:e,options:t}),mt.forEach(n=>{n.buildToast(e,t)}))}function Yp(e,t){mt.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function bb(e){const{subscribe:t,getSnapshot:n,setProps:r}=j.useRef(function(i){const s=i.containerId||1;return{subscribe(a){const u=function(d,f,m){let $=1,y=0,x=[],b=[],g=[],p=f;const h=new Map,v=new Set,k=()=>{g=Array.from(h.values()),v.forEach(E=>E())},T=E=>{b=E==null?[]:b.filter(O=>O!==E),k()},_=E=>{const{toastId:O,onOpen:N,updateId:B,children:V}=E.props,G=B==null;E.staleId&&h.delete(E.staleId),h.set(O,E),b=[...b,E.props.toastId].filter(Z=>Z!==E.staleId),k(),m(qp(E,G?"added":"updated")),G&&Ot(N)&&N(j.isValidElement(V)&&V.props)};return{id:d,props:p,observe:E=>(v.add(E),()=>v.delete(E)),toggle:(E,O)=>{h.forEach(N=>{O!=null&&O!==N.props.toastId||Ot(N.toggle)&&N.toggle(E)})},removeToast:T,toasts:h,clearQueue:()=>{y-=x.length,x=[]},buildToast:(E,O)=>{if((W=>{let{containerId:ce,toastId:le,updateId:ye}=W;const me=ce?ce!==d:d!==1,Te=h.has(le)&&ye==null;return me||Te})(O))return;const{toastId:N,updateId:B,data:V,staleId:G,delay:Z}=O,ne=()=>{T(N)},L=B==null;L&&y++;const I={...p,style:p.toastStyle,key:$++,...Object.fromEntries(Object.entries(O).filter(W=>{let[ce,le]=W;return le!=null})),toastId:N,updateId:B,data:V,closeToast:ne,isIn:!1,className:ea(O.className||p.toastClassName),bodyClassName:ea(O.bodyClassName||p.bodyClassName),progressClassName:ea(O.progressClassName||p.progressClassName),autoClose:!O.isLoading&&(P=O.autoClose,D=p.autoClose,P===!1||Hi(P)&&P>0?P:D),deleteToast(){const W=h.get(N),{onClose:ce,children:le}=W.props;Ot(ce)&&ce(j.isValidElement(le)&&le.props),m(qp(W,"removed")),h.delete(N),y--,y<0&&(y=0),x.length>0?_(x.shift()):k()}};var P,D;I.closeButton=p.closeButton,O.closeButton===!1||Cc(O.closeButton)?I.closeButton=O.closeButton:O.closeButton===!0&&(I.closeButton=!Cc(p.closeButton)||p.closeButton);let z=E;j.isValidElement(E)&&!kr(E.type)?z=j.cloneElement(E,{closeToast:ne,toastProps:I,data:V}):Ot(E)&&(z=E({closeToast:ne,toastProps:I,data:V}));const X={content:z,props:I,staleId:G};p.limit&&p.limit>0&&y>p.limit&&L?x.push(X):Hi(Z)?setTimeout(()=>{_(X)},Z):_(X)},setProps(E){p=E},setToggle:(E,O)=>{h.get(E).toggle=O},isToastActive:E=>b.some(O=>O===E),getSnapshot:()=>g}}(s,i,$b);mt.set(s,u);const c=u.observe(a);return Gi.forEach(d=>h0(d.content,d.options)),Gi=[],()=>{c(),mt.delete(s)}},setProps(a){var u;(u=mt.get(s))==null||u.setProps(a)},getSnapshot(){var a;return(a=mt.get(s))==null?void 0:a.getSnapshot()}}}(e)).current;r(e);const o=j.useSyncExternalStore(t,n,n);return{getToastToRender:function(i){if(!o)return[];const s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(a=>{const{position:u}=a.props;s.has(u)||s.set(u,[]),s.get(u).push(a)}),Array.from(s,a=>i(a[0],a[1]))},isToastActive:p0,count:o==null?void 0:o.length}}function Sb(e){const[t,n]=j.useState(!1),[r,o]=j.useState(!1),i=j.useRef(null),s=j.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:f}=e;var m,$;function y(){n(!0)}function x(){n(!1)}function b(h){const v=i.current;s.canDrag&&v&&(s.didMove=!0,t&&x(),s.delta=e.draggableDirection==="x"?h.clientX-s.start:h.clientY-s.start,s.start!==h.clientX&&(s.canCloseOnClick=!1),v.style.transform=`translate3d(${e.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,v.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",g);const h=i.current;if(s.canDrag&&s.didMove&&h){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();h.style.transition="transform 0.2s, opacity 0.2s",h.style.removeProperty("transform"),h.style.removeProperty("opacity")}}($=mt.get((m={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||$.setToggle(m.id,m.fn),j.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||x(),window.addEventListener("focus",y),window.addEventListener("blur",x),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",x)}},[e.pauseOnFocusLoss]);const p={onPointerDown:function(h){if(e.draggable===!0||e.draggable===h.pointerType){s.didMove=!1,document.addEventListener("pointermove",b),document.addEventListener("pointerup",g);const v=i.current;s.canCloseOnClick=!0,s.canDrag=!0,v.style.transition="none",e.draggableDirection==="x"?(s.start=h.clientX,s.removalDistance=v.offsetWidth*(e.draggablePercent/100)):(s.start=h.clientY,s.removalDistance=v.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(h){const{top:v,bottom:k,left:T,right:_}=i.current.getBoundingClientRect();h.nativeEvent.type!=="touchend"&&e.pauseOnHover&&h.clientX>=T&&h.clientX<=_&&h.clientY>=v&&h.clientY<=k?x():y()}};return a&&u&&(p.onMouseEnter=x,e.stacked||(p.onMouseLeave=y)),f&&(p.onClick=h=>{d&&d(h),s.canCloseOnClick&&c()}),{playToast:y,pauseToast:x,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:p}}function kb(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:s,style:a,controlledProgress:u,progress:c,rtl:d,isIn:f,theme:m}=e;const $=i||u&&c===0,y={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};u&&(y.transform=`scaleX(${c})`);const x=Vn("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":d}),b=Ot(s)?s({rtl:d,type:o,defaultClassName:x}):Vn(x,s),g={[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{f&&r()}};return Q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":$},Q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${o}`}),Q.createElement("div",{role:"progressbar","aria-hidden":$?"true":"false","aria-label":"notification timer",className:b,style:y,...g}))}let _b=1;const m0=()=>""+_b++;function Eb(e){return e&&(kr(e.toastId)||Hi(e.toastId))?e.toastId:m0()}function xi(e,t){return h0(e,t),t.toastId}function Ia(e,t){return{...t,type:t&&t.type||e,toastId:Eb(t)}}function Ss(e){return(t,n)=>xi(t,Ia(e,n))}function re(e,t){return xi(e,Ia("default",t))}re.loading=(e,t)=>xi(e,Ia("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),re.promise=function(e,t,n){let r,{pending:o,error:i,success:s}=t;o&&(r=kr(o)?re.loading(o,n):re.loading(o.render,{...n,...o}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(d,f,m)=>{if(f==null)return void re.dismiss(r);const $={type:d,...a,...n,data:m},y=kr(f)?{render:f}:f;return r?re.update(r,{...$,...y}):re(y.render,{...$,...y}),m},c=Ot(e)?e():e;return c.then(d=>u("success",s,d)).catch(d=>u("error",i,d)),c},re.success=Ss("success"),re.info=Ss("info"),re.error=Ss("error"),re.warning=Ss("warning"),re.warn=re.warning,re.dark=(e,t)=>xi(e,Ia("default",{theme:"dark",...t})),re.dismiss=function(e){(function(t){var n;if(f0()){if(t==null||kr(n=t)||Hi(n))mt.forEach(r=>{r.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const r=mt.get(t.containerId);r?r.removeToast(t.id):mt.forEach(o=>{o.removeToast(t.id)})}}else Gi=Gi.filter(r=>t!=null&&r.options.toastId!==t)})(e)},re.clearWaitingQueue=function(e){e===void 0&&(e={}),mt.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},re.isActive=p0,re.update=function(e,t){t===void 0&&(t={});const n=((r,o)=>{var i;let{containerId:s}=o;return(i=mt.get(s||1))==null?void 0:i.toasts.get(r)})(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:m0()};i.toastId!==e&&(i.staleId=e);const s=i.render||o;delete i.render,xi(s,i)}},re.done=e=>{re.update(e,{progress:1})},re.onChange=function(e){return Tc.add(e),()=>{Tc.delete(e)}},re.play=e=>Yp(!0,e),re.pause=e=>Yp(!1,e);const jb=typeof window<"u"?j.useLayoutEffect:j.useEffect,ks=e=>{let{theme:t,type:n,isLoading:r,...o}=e;return Q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},iu={info:function(e){return Q.createElement(ks,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return Q.createElement(ks,{...e},Q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return Q.createElement(ks,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return Q.createElement(ks,{...e},Q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return Q.createElement("div",{className:"Toastify__spinner"})}},Cb=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=Sb(e),{closeButton:s,children:a,autoClose:u,onClick:c,type:d,hideProgressBar:f,closeToast:m,transition:$,position:y,className:x,style:b,bodyClassName:g,bodyStyle:p,progressClassName:h,progressStyle:v,updateId:k,role:T,progress:_,rtl:E,toastId:O,deleteToast:N,isIn:B,isLoading:V,closeOnClick:G,theme:Z}=e,ne=Vn("Toastify__toast",`Toastify__toast-theme--${Z}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":G}),L=Ot(x)?x({rtl:E,position:y,type:d,defaultClassName:ne}):Vn(ne,x),I=function(X){let{theme:W,type:ce,isLoading:le,icon:ye}=X,me=null;const Te={theme:W,type:ce};return ye===!1||(Ot(ye)?me=ye({...Te,isLoading:le}):j.isValidElement(ye)?me=j.cloneElement(ye,Te):le?me=iu.spinner():(J=>J in iu)(ce)&&(me=iu[ce](Te))),me}(e),P=!!_||!u,D={closeToast:m,type:d,theme:Z};let z=null;return s===!1||(z=Ot(s)?s(D):j.isValidElement(s)?j.cloneElement(s,D):function(X){let{closeToast:W,theme:ce,ariaLabel:le="close"}=X;return Q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${ce}`,type:"button",onClick:ye=>{ye.stopPropagation(),W(ye)},"aria-label":le},Q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(D)),Q.createElement($,{isIn:B,done:N,position:y,preventExitTransition:n,nodeRef:r,playToast:i},Q.createElement("div",{id:O,onClick:c,"data-in":B,className:L,...o,style:b,ref:r},Q.createElement("div",{...B&&{role:T},className:Ot(g)?g({type:d}):Vn("Toastify__toast-body",g),style:p},I!=null&&Q.createElement("div",{className:Vn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!V})},I),Q.createElement("div",null,a)),z,Q.createElement(kb,{...k&&!P?{key:`pb-${k}`}:{},rtl:E,theme:Z,delay:u,isRunning:t,isIn:B,closeToast:m,hide:f,type:d,style:v,className:h,controlledProgress:P,progress:_||0})))},yl=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Tb=gl(yl("bounce",!0));gl(yl("slide",!0));gl(yl("zoom"));gl(yl("flip"));const Fb={position:"top-right",transition:Tb,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Rb(e){let t={...Fb,...e};const n=e.stacked,[r,o]=j.useState(!0),i=j.useRef(null),{getToastToRender:s,isToastActive:a,count:u}=bb(t),{className:c,style:d,rtl:f,containerId:m}=t;function $(x){const b=Vn("Toastify__toast-container",`Toastify__toast-container--${x}`,{"Toastify__toast-container--rtl":f});return Ot(c)?c({position:x,rtl:f,defaultClassName:b}):Vn(b,ea(c))}function y(){n&&(o(!0),re.play())}return jb(()=>{if(n){var x;const b=i.current.querySelectorAll('[data-in="true"]'),g=12,p=(x=t.position)==null?void 0:x.includes("top");let h=0,v=0;Array.from(b).reverse().forEach((k,T)=>{const _=k;_.classList.add("Toastify__toast--stacked"),T>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=p?"top":"bot");const E=h*(r?.2:1)+(r?0:g*T);_.style.setProperty("--y",`${p?E:-1*E}px`),_.style.setProperty("--g",`${g}`),_.style.setProperty("--s",""+(1-(r?v:0))),h+=_.offsetHeight,v+=.025})}},[r,u,n]),Q.createElement("div",{ref:i,className:"Toastify",id:m,onMouseEnter:()=>{n&&(o(!1),re.pause())},onMouseLeave:y},s((x,b)=>{const g=b.length?{...d}:{...d,pointerEvents:"none"};return Q.createElement("div",{className:$(x),style:g,key:`container-${x}`},b.map(p=>{let{content:h,props:v}=p;return Q.createElement(Cb,{...v,stacked:n,collapseAll:y,isIn:a(v.toastId,v.containerId),style:v.style,key:`toast-${v.key}`},h)}))}))}const ie={primary:{50:"#fdf3e7",100:"#fae0c3",200:"#f5c28a",300:"#eda04e",400:"#e08530",500:"#C4671A",600:"#B45A14",700:"#96480f",800:"#7a3a0c",900:"#5e2c08"},neutral:{50:"#faf7f5",100:"#f2ece6",200:"#e4d9cf",300:"#cfc0b0",400:"#b5a090",500:"#96806e",600:"#7a6455",700:"#5e4d42",800:"#3d3028",900:"#231b15",950:"#130e0a"},success:{light:"#d1fae5",base:"#059669",dark:"#065f46"},warning:{light:"#fef3c7",base:"#d97706",dark:"#92400e"},error:{light:"#fee2e2",base:"#dc2626",dark:"#991b1b"},info:{light:"#dbeafe",base:"#2563eb",dark:"#1e40af"},white:"#ffffff",black:"#000000",transparent:"transparent"},Pb={fontFamily:{sans:"'Sora', 'Helvetica Neue', Arial, sans-serif",serif:"'Playfair Display', Georgia, serif",mono:"'JetBrains Mono', 'Fira Code', monospace"},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem"},fontWeight:{regular:400,medium:500,semibold:600,bold:700},lineHeight:{tight:1.25,snug:1.375,normal:1.5,relaxed:1.625}},Ob={0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem"},zb={none:"0",sm:"0.25rem",base:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},Nb={sm:"0 1px 2px 0 rgba(35, 27, 21, 0.08)",base:"0 2px 4px 0 rgba(35, 27, 21, 0.10)",md:"0 4px 12px 0 rgba(35, 27, 21, 0.12)",lg:"0 8px 24px 0 rgba(35, 27, 21, 0.15)",xl:"0 16px 48px 0 rgba(35, 27, 21, 0.18)",amber:"0 4px 20px 0 rgba(180, 90, 20, 0.35)"},Ab={fast:"150ms ease",base:"200ms ease",slow:"300ms ease",slower:"400ms cubic-bezier(0.4, 0, 0.2, 1)"},Lb={base:0,raised:10,dropdown:100,sticky:200,overlay:300,modal:400,toast:500},Qp={colors:ie,typography:Pb,spacing:Ob,borderRadius:zb,shadows:Nb,transitions:Ab,zIndex:Lb,brand:{primary:ie.primary[600],primaryHover:ie.primary[700],primaryLight:ie.primary[100],primaryGhost:ie.primary[50]},surface:{page:ie.neutral[50],card:ie.white,sidebar:ie.neutral[900],elevated:ie.white,overlay:"rgba(35, 27, 21, 0.55)"},text:{primary:ie.neutral[900],secondary:ie.neutral[600],muted:ie.neutral[400],inverse:ie.white,brand:ie.primary[600],onDark:ie.neutral[200]},border:{default:ie.neutral[200],strong:ie.neutral[300],focus:ie.primary[600],error:ie.error.base},feedback:{success:{bg:ie.success.light,text:ie.success.dark,border:ie.success.base,icon:ie.success.base},warning:{bg:ie.warning.light,text:ie.warning.dark,border:ie.warning.base,icon:ie.warning.base},error:{bg:ie.error.light,text:ie.error.dark,border:ie.error.base,icon:ie.error.base},info:{bg:ie.info.light,text:ie.info.dark,border:ie.info.base,icon:ie.info.base}}},Ib=vb`
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
`;function g0(e,t){return function(){return e.apply(t,arguments)}}const{toString:Db}=Object.prototype,{getPrototypeOf:Gd}=Object,{iterator:xl,toStringTag:y0}=Symbol,vl=(e=>t=>{const n=Db.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),rn=e=>(e=e.toLowerCase(),t=>vl(t)===e),wl=e=>t=>typeof t===e,{isArray:Io}=Array,Ro=wl("undefined");function Zi(e){return e!==null&&!Ro(e)&&e.constructor!==null&&!Ro(e.constructor)&&jt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const x0=rn("ArrayBuffer");function Mb(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&x0(e.buffer),t}const Bb=wl("string"),jt=wl("function"),v0=wl("number"),es=e=>e!==null&&typeof e=="object",Ub=e=>e===!0||e===!1,ta=e=>{if(vl(e)!=="object")return!1;const t=Gd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(y0 in e)&&!(xl in e)},Vb=e=>{if(!es(e)||Zi(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Wb=rn("Date"),Hb=rn("File"),Gb=e=>!!(e&&typeof e.uri<"u"),qb=e=>e&&typeof e.getParts<"u",Yb=rn("Blob"),Qb=rn("FileList"),Kb=e=>es(e)&&jt(e.pipe);function Xb(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Kp=Xb(),Xp=typeof Kp.FormData<"u"?Kp.FormData:void 0,Jb=e=>{let t;return e&&(Xp&&e instanceof Xp||jt(e.append)&&((t=vl(e))==="formdata"||t==="object"&&jt(e.toString)&&e.toString()==="[object FormData]"))},Zb=rn("URLSearchParams"),[eS,tS,nS,rS]=["ReadableStream","Request","Response","Headers"].map(rn),oS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ts(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Io(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(Zi(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function w0(e,t){if(Zi(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const vr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,$0=e=>!Ro(e)&&e!==vr;function Fc(){const{caseless:e,skipUndefined:t}=$0(this)&&this||{},n={},r=(o,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const s=e&&w0(n,i)||i;ta(n[s])&&ta(o)?n[s]=Fc(n[s],o):ta(o)?n[s]=Fc({},o):Io(o)?n[s]=o.slice():(!t||!Ro(o))&&(n[s]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&ts(arguments[o],r);return n}const iS=(e,t,n,{allOwnKeys:r}={})=>(ts(t,(o,i)=>{n&&jt(o)?Object.defineProperty(e,i,{value:g0(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),sS=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),aS=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},lS=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Gd(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},uS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},cS=e=>{if(!e)return null;if(Io(e))return e;let t=e.length;if(!v0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},dS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Gd(Uint8Array)),fS=(e,t)=>{const r=(e&&e[xl]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},pS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},hS=rn("HTMLFormElement"),mS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Jp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),gS=rn("RegExp"),b0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ts(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},yS=e=>{b0(e,(t,n)=>{if(jt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(jt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},xS=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Io(e)?r(e):r(String(e).split(t)),n},vS=()=>{},wS=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function $S(e){return!!(e&&jt(e.append)&&e[y0]==="FormData"&&e[xl])}const bS=e=>{const t=new Array(10),n=(r,o)=>{if(es(r)){if(t.indexOf(r)>=0)return;if(Zi(r))return r;if(!("toJSON"in r)){t[o]=r;const i=Io(r)?[]:{};return ts(r,(s,a)=>{const u=n(s,o+1);!Ro(u)&&(i[a]=u)}),t[o]=void 0,i}}return r};return n(e,0)},SS=rn("AsyncFunction"),kS=e=>e&&(es(e)||jt(e))&&jt(e.then)&&jt(e.catch),S0=((e,t)=>e?setImmediate:t?((n,r)=>(vr.addEventListener("message",({source:o,data:i})=>{o===vr&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),vr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",jt(vr.postMessage)),_S=typeof queueMicrotask<"u"?queueMicrotask.bind(vr):typeof process<"u"&&process.nextTick||S0,ES=e=>e!=null&&jt(e[xl]),F={isArray:Io,isArrayBuffer:x0,isBuffer:Zi,isFormData:Jb,isArrayBufferView:Mb,isString:Bb,isNumber:v0,isBoolean:Ub,isObject:es,isPlainObject:ta,isEmptyObject:Vb,isReadableStream:eS,isRequest:tS,isResponse:nS,isHeaders:rS,isUndefined:Ro,isDate:Wb,isFile:Hb,isReactNativeBlob:Gb,isReactNative:qb,isBlob:Yb,isRegExp:gS,isFunction:jt,isStream:Kb,isURLSearchParams:Zb,isTypedArray:dS,isFileList:Qb,forEach:ts,merge:Fc,extend:iS,trim:oS,stripBOM:sS,inherits:aS,toFlatObject:lS,kindOf:vl,kindOfTest:rn,endsWith:uS,toArray:cS,forEachEntry:fS,matchAll:pS,isHTMLForm:hS,hasOwnProperty:Jp,hasOwnProp:Jp,reduceDescriptors:b0,freezeMethods:yS,toObjectSet:xS,toCamelCase:mS,noop:vS,toFiniteNumber:wS,findKey:w0,global:vr,isContextDefined:$0,isSpecCompliantForm:$S,toJSONObject:bS,isAsyncFn:SS,isThenable:kS,setImmediate:S0,asap:_S,isIterable:ES};let ee=class k0 extends Error{static from(t,n,r,o,i,s){const a=new k0(t.message,n||t.code,r,o,i);return a.cause=t,a.name=t.name,t.status!=null&&a.status==null&&(a.status=t.status),s&&Object.assign(a,s),a}constructor(t,n,r,o,i){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),o&&(this.request=o),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.status}}};ee.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ee.ERR_BAD_OPTION="ERR_BAD_OPTION";ee.ECONNABORTED="ECONNABORTED";ee.ETIMEDOUT="ETIMEDOUT";ee.ERR_NETWORK="ERR_NETWORK";ee.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ee.ERR_DEPRECATED="ERR_DEPRECATED";ee.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ee.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ee.ERR_CANCELED="ERR_CANCELED";ee.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ee.ERR_INVALID_URL="ERR_INVALID_URL";const jS=null;function Rc(e){return F.isPlainObject(e)||F.isArray(e)}function _0(e){return F.endsWith(e,"[]")?e.slice(0,-2):e}function su(e,t,n){return e?e.concat(t).map(function(o,i){return o=_0(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function CS(e){return F.isArray(e)&&!e.some(Rc)}const TS=F.toFlatObject(F,{},null,function(t){return/^is[A-Z]/.test(t)});function $l(e,t,n){if(!F.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=F.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,b){return!F.isUndefined(b[x])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&F.isSpecCompliantForm(t);if(!F.isFunction(o))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(F.isDate(y))return y.toISOString();if(F.isBoolean(y))return y.toString();if(!u&&F.isBlob(y))throw new ee("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(y)||F.isTypedArray(y)?u&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,x,b){let g=y;if(F.isReactNative(t)&&F.isReactNativeBlob(y))return t.append(su(b,x,i),c(y)),!1;if(y&&!b&&typeof y=="object"){if(F.endsWith(x,"{}"))x=r?x:x.slice(0,-2),y=JSON.stringify(y);else if(F.isArray(y)&&CS(y)||(F.isFileList(y)||F.endsWith(x,"[]"))&&(g=F.toArray(y)))return x=_0(x),g.forEach(function(h,v){!(F.isUndefined(h)||h===null)&&t.append(s===!0?su([x],v,i):s===null?x:x+"[]",c(h))}),!1}return Rc(y)?!0:(t.append(su(b,x,i),c(y)),!1)}const f=[],m=Object.assign(TS,{defaultVisitor:d,convertValue:c,isVisitable:Rc});function $(y,x){if(!F.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(y),F.forEach(y,function(g,p){(!(F.isUndefined(g)||g===null)&&o.call(t,g,F.isString(p)?p.trim():p,x,m))===!0&&$(g,x?x.concat(p):[p])}),f.pop()}}if(!F.isObject(e))throw new TypeError("data must be an object");return $(e),t}function Zp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function qd(e,t){this._pairs=[],e&&$l(e,this,t)}const E0=qd.prototype;E0.append=function(t,n){this._pairs.push([t,n])};E0.toString=function(t){const n=t?function(r){return t.call(this,r,Zp)}:Zp;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function FS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function j0(e,t,n){if(!t)return e;const r=n&&n.encode||FS,o=F.isFunction(n)?{serialize:n}:n,i=o&&o.serialize;let s;if(i?s=i(t,o):s=F.isURLSearchParams(t)?t.toString():new qd(t,o).toString(r),s){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class eh{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){F.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Yd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},RS=typeof URLSearchParams<"u"?URLSearchParams:qd,PS=typeof FormData<"u"?FormData:null,OS=typeof Blob<"u"?Blob:null,zS={isBrowser:!0,classes:{URLSearchParams:RS,FormData:PS,Blob:OS},protocols:["http","https","file","blob","url","data"]},Qd=typeof window<"u"&&typeof document<"u",Pc=typeof navigator=="object"&&navigator||void 0,NS=Qd&&(!Pc||["ReactNative","NativeScript","NS"].indexOf(Pc.product)<0),AS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",LS=Qd&&window.location.href||"http://localhost",IS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qd,hasStandardBrowserEnv:NS,hasStandardBrowserWebWorkerEnv:AS,navigator:Pc,origin:LS},Symbol.toStringTag,{value:"Module"})),ut={...IS,...zS};function DS(e,t){return $l(e,new ut.classes.URLSearchParams,{visitor:function(n,r,o,i){return ut.isNode&&F.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function MS(e){return F.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function BS(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function C0(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),u=i>=n.length;return s=!s&&F.isArray(o)?o.length:s,u?(F.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!F.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&F.isArray(o[s])&&(o[s]=BS(o[s])),!a)}if(F.isFormData(e)&&F.isFunction(e.entries)){const n={};return F.forEachEntry(e,(r,o)=>{t(MS(r),o,n,0)}),n}return null}function US(e,t,n){if(F.isString(e))try{return(t||JSON.parse)(e),F.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ns={transitional:Yd,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=F.isObject(t);if(i&&F.isHTMLForm(t)&&(t=new FormData(t)),F.isFormData(t))return o?JSON.stringify(C0(t)):t;if(F.isArrayBuffer(t)||F.isBuffer(t)||F.isStream(t)||F.isFile(t)||F.isBlob(t)||F.isReadableStream(t))return t;if(F.isArrayBufferView(t))return t.buffer;if(F.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return DS(t,this.formSerializer).toString();if((a=F.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return $l(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),US(t)):t}],transformResponse:[function(t){const n=this.transitional||ns.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(F.isResponse(t)||F.isReadableStream(t))return t;if(t&&F.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(a){if(s)throw a.name==="SyntaxError"?ee.from(a,ee.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ut.classes.FormData,Blob:ut.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};F.forEach(["delete","get","head","post","put","patch"],e=>{ns.headers[e]={}});const VS=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),WS=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&VS[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},th=Symbol("internals");function Yo(e){return e&&String(e).trim().toLowerCase()}function na(e){return e===!1||e==null?e:F.isArray(e)?e.map(na):String(e)}function HS(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const GS=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function au(e,t,n,r,o){if(F.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!F.isString(t)){if(F.isString(r))return t.indexOf(r)!==-1;if(F.isRegExp(r))return r.test(t)}}function qS(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function YS(e,t){const n=F.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}let Ct=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,u,c){const d=Yo(u);if(!d)throw new Error("header name must be a non-empty string");const f=F.findKey(o,d);(!f||o[f]===void 0||c===!0||c===void 0&&o[f]!==!1)&&(o[f||u]=na(a))}const s=(a,u)=>F.forEach(a,(c,d)=>i(c,d,u));if(F.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(F.isString(t)&&(t=t.trim())&&!GS(t))s(WS(t),n);else if(F.isObject(t)&&F.isIterable(t)){let a={},u,c;for(const d of t){if(!F.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[c=d[0]]=(u=a[c])?F.isArray(u)?[...u,d[1]]:[u,d[1]]:d[1]}s(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Yo(t),t){const r=F.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return HS(o);if(F.isFunction(n))return n.call(this,o,r);if(F.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Yo(t),t){const r=F.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||au(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Yo(s),s){const a=F.findKey(r,s);a&&(!n||au(r,r[a],a,n))&&(delete r[a],o=!0)}}return F.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||au(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return F.forEach(this,(o,i)=>{const s=F.findKey(r,i);if(s){n[s]=na(o),delete n[i];return}const a=t?qS(i):String(i).trim();a!==i&&delete n[i],n[a]=na(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return F.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&F.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[th]=this[th]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=Yo(s);r[a]||(YS(o,s),r[a]=!0)}return F.isArray(t)?t.forEach(i):i(t),this}};Ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);F.reduceDescriptors(Ct.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});F.freezeMethods(Ct);function lu(e,t){const n=this||ns,r=t||n,o=Ct.from(r.headers);let i=r.data;return F.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function T0(e){return!!(e&&e.__CANCEL__)}let rs=class extends ee{constructor(t,n,r){super(t??"canceled",ee.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function F0(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function QS(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function KS(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=r[i];s||(s=c),n[o]=u,r[o]=c;let f=i,m=0;for(;f!==o;)m+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-s<t)return;const $=d&&c-d;return $?Math.round(m*1e3/$):void 0}}function XS(e,t){let n=0,r=1e3/t,o,i;const s=(c,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e(...c)};return[(...c)=>{const d=Date.now(),f=d-n;f>=r?s(c,d):(o=c,i||(i=setTimeout(()=>{i=null,s(o)},r-f)))},()=>o&&s(o)]}const Da=(e,t,n=3)=>{let r=0;const o=KS(50,250);return XS(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,u=s-r,c=o(u),d=s<=a;r=s;const f={loaded:s,total:a,progress:a?s/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a&&d?(a-s)/c:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},nh=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},rh=e=>(...t)=>F.asap(()=>e(...t)),JS=ut.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ut.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ut.origin),ut.navigator&&/(msie|trident)/i.test(ut.navigator.userAgent)):()=>!0,ZS=ut.hasStandardBrowserEnv?{write(e,t,n,r,o,i,s){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];F.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),F.isString(r)&&a.push(`path=${r}`),F.isString(o)&&a.push(`domain=${o}`),i===!0&&a.push("secure"),F.isString(s)&&a.push(`SameSite=${s}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ek(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function tk(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function R0(e,t,n){let r=!ek(t);return e&&(r||n==!1)?tk(e,t):t}const oh=e=>e instanceof Ct?{...e}:e;function Nr(e,t){t=t||{};const n={};function r(c,d,f,m){return F.isPlainObject(c)&&F.isPlainObject(d)?F.merge.call({caseless:m},c,d):F.isPlainObject(d)?F.merge({},d):F.isArray(d)?d.slice():d}function o(c,d,f,m){if(F.isUndefined(d)){if(!F.isUndefined(c))return r(void 0,c,f,m)}else return r(c,d,f,m)}function i(c,d){if(!F.isUndefined(d))return r(void 0,d)}function s(c,d){if(F.isUndefined(d)){if(!F.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,d,f)=>o(oh(c),oh(d),f,!0)};return F.forEach(Object.keys({...e,...t}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const f=F.hasOwnProp(u,d)?u[d]:o,m=f(e[d],t[d],d);F.isUndefined(m)&&f!==a||(n[d]=m)}),n}const P0=e=>{const t=Nr({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;if(t.headers=s=Ct.from(s),t.url=j0(R0(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),F.isFormData(n)){if(ut.hasStandardBrowserEnv||ut.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(F.isFunction(n.getHeaders)){const u=n.getHeaders(),c=["content-type","content-length"];Object.entries(u).forEach(([d,f])=>{c.includes(d.toLowerCase())&&s.set(d,f)})}}if(ut.hasStandardBrowserEnv&&(r&&F.isFunction(r)&&(r=r(t)),r||r!==!1&&JS(t.url))){const u=o&&i&&ZS.read(i);u&&s.set(o,u)}return t},nk=typeof XMLHttpRequest<"u",rk=nk&&function(e){return new Promise(function(n,r){const o=P0(e);let i=o.data;const s=Ct.from(o.headers).normalize();let{responseType:a,onUploadProgress:u,onDownloadProgress:c}=o,d,f,m,$,y;function x(){$&&$(),y&&y(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function g(){if(!b)return;const h=Ct.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),k={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:h,config:e,request:b};F0(function(_){n(_),x()},function(_){r(_),x()},k),b=null}"onloadend"in b?b.onloadend=g:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(g)},b.onabort=function(){b&&(r(new ee("Request aborted",ee.ECONNABORTED,e,b)),b=null)},b.onerror=function(v){const k=v&&v.message?v.message:"Network Error",T=new ee(k,ee.ERR_NETWORK,e,b);T.event=v||null,r(T),b=null},b.ontimeout=function(){let v=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const k=o.transitional||Yd;o.timeoutErrorMessage&&(v=o.timeoutErrorMessage),r(new ee(v,k.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,b)),b=null},i===void 0&&s.setContentType(null),"setRequestHeader"in b&&F.forEach(s.toJSON(),function(v,k){b.setRequestHeader(k,v)}),F.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),a&&a!=="json"&&(b.responseType=o.responseType),c&&([m,y]=Da(c,!0),b.addEventListener("progress",m)),u&&b.upload&&([f,$]=Da(u),b.upload.addEventListener("progress",f),b.upload.addEventListener("loadend",$)),(o.cancelToken||o.signal)&&(d=h=>{b&&(r(!h||h.type?new rs(null,e,b):h),b.abort(),b=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const p=QS(o.url);if(p&&ut.protocols.indexOf(p)===-1){r(new ee("Unsupported protocol "+p+":",ee.ERR_BAD_REQUEST,e));return}b.send(i||null)})},ok=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(c){if(!o){o=!0,a();const d=c instanceof Error?c:this.reason;r.abort(d instanceof ee?d:new rs(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new ee(`timeout of ${t}ms exceeded`,ee.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:u}=r;return u.unsubscribe=()=>F.asap(a),u}},ik=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},sk=async function*(e,t){for await(const n of ak(e))yield*ik(n,t)},ak=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},ih=(e,t,n,r)=>{const o=sk(e,t);let i=0,s,a=u=>{s||(s=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await o.next();if(c){a(),u.close();return}let f=d.byteLength;if(n){let m=i+=f;n(m)}u.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(u){return a(u),o.return()}},{highWaterMark:2})},sh=64*1024,{isFunction:_s}=F,lk=(({Request:e,Response:t})=>({Request:e,Response:t}))(F.global),{ReadableStream:ah,TextEncoder:lh}=F.global,uh=(e,...t)=>{try{return!!e(...t)}catch{return!1}},uk=e=>{e=F.merge.call({skipUndefined:!0},lk,e);const{fetch:t,Request:n,Response:r}=e,o=t?_s(t):typeof fetch=="function",i=_s(n),s=_s(r);if(!o)return!1;const a=o&&_s(ah),u=o&&(typeof lh=="function"?(y=>x=>y.encode(x))(new lh):async y=>new Uint8Array(await new n(y).arrayBuffer())),c=i&&a&&uh(()=>{let y=!1;const x=new n(ut.origin,{body:new ah,method:"POST",get duplex(){return y=!0,"half"}}).headers.has("Content-Type");return y&&!x}),d=s&&a&&uh(()=>F.isReadableStream(new r("").body)),f={stream:d&&(y=>y.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(y=>{!f[y]&&(f[y]=(x,b)=>{let g=x&&x[y];if(g)return g.call(x);throw new ee(`Response type '${y}' is not supported`,ee.ERR_NOT_SUPPORT,b)})});const m=async y=>{if(y==null)return 0;if(F.isBlob(y))return y.size;if(F.isSpecCompliantForm(y))return(await new n(ut.origin,{method:"POST",body:y}).arrayBuffer()).byteLength;if(F.isArrayBufferView(y)||F.isArrayBuffer(y))return y.byteLength;if(F.isURLSearchParams(y)&&(y=y+""),F.isString(y))return(await u(y)).byteLength},$=async(y,x)=>{const b=F.toFiniteNumber(y.getContentLength());return b??m(x)};return async y=>{let{url:x,method:b,data:g,signal:p,cancelToken:h,timeout:v,onDownloadProgress:k,onUploadProgress:T,responseType:_,headers:E,withCredentials:O="same-origin",fetchOptions:N}=P0(y),B=t||fetch;_=_?(_+"").toLowerCase():"text";let V=ok([p,h&&h.toAbortSignal()],v),G=null;const Z=V&&V.unsubscribe&&(()=>{V.unsubscribe()});let ne;try{if(T&&c&&b!=="get"&&b!=="head"&&(ne=await $(E,g))!==0){let X=new n(x,{method:"POST",body:g,duplex:"half"}),W;if(F.isFormData(g)&&(W=X.headers.get("content-type"))&&E.setContentType(W),X.body){const[ce,le]=nh(ne,Da(rh(T)));g=ih(X.body,sh,ce,le)}}F.isString(O)||(O=O?"include":"omit");const L=i&&"credentials"in n.prototype,I={...N,signal:V,method:b.toUpperCase(),headers:E.normalize().toJSON(),body:g,duplex:"half",credentials:L?O:void 0};G=i&&new n(x,I);let P=await(i?B(G,N):B(x,I));const D=d&&(_==="stream"||_==="response");if(d&&(k||D&&Z)){const X={};["status","statusText","headers"].forEach(ye=>{X[ye]=P[ye]});const W=F.toFiniteNumber(P.headers.get("content-length")),[ce,le]=k&&nh(W,Da(rh(k),!0))||[];P=new r(ih(P.body,sh,ce,()=>{le&&le(),Z&&Z()}),X)}_=_||"text";let z=await f[F.findKey(f,_)||"text"](P,y);return!D&&Z&&Z(),await new Promise((X,W)=>{F0(X,W,{data:z,headers:Ct.from(P.headers),status:P.status,statusText:P.statusText,config:y,request:G})})}catch(L){throw Z&&Z(),L&&L.name==="TypeError"&&/Load failed|fetch/i.test(L.message)?Object.assign(new ee("Network Error",ee.ERR_NETWORK,y,G,L&&L.response),{cause:L.cause||L}):ee.from(L,L&&L.code,y,G,L&&L.response)}}},ck=new Map,O0=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:o}=t,i=[r,o,n];let s=i.length,a=s,u,c,d=ck;for(;a--;)u=i[a],c=d.get(u),c===void 0&&d.set(u,c=a?new Map:uk(t)),d=c;return c};O0();const Kd={http:jS,xhr:rk,fetch:{get:O0}};F.forEach(Kd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ch=e=>`- ${e}`,dk=e=>F.isFunction(e)||e===null||e===!1;function fk(e,t){e=F.isArray(e)?e:[e];const{length:n}=e;let r,o;const i={};for(let s=0;s<n;s++){r=e[s];let a;if(o=r,!dk(r)&&(o=Kd[(a=String(r)).toLowerCase()],o===void 0))throw new ee(`Unknown adapter '${a}'`);if(o&&(F.isFunction(o)||(o=o.get(t))))break;i[a||"#"+s]=o}if(!o){const s=Object.entries(i).map(([u,c])=>`adapter ${u} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?s.length>1?`since :
`+s.map(ch).join(`
`):" "+ch(s[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return o}const z0={getAdapter:fk,adapters:Kd};function uu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new rs(null,e)}function dh(e){return uu(e),e.headers=Ct.from(e.headers),e.data=lu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),z0.getAdapter(e.adapter||ns.adapter,e)(e).then(function(r){return uu(e),r.data=lu.call(e,e.transformResponse,r),r.headers=Ct.from(r.headers),r},function(r){return T0(r)||(uu(e),r&&r.response&&(r.response.data=lu.call(e,e.transformResponse,r.response),r.response.headers=Ct.from(r.response.headers))),Promise.reject(r)})}const N0="1.13.6",bl={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{bl[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const fh={};bl.transitional=function(t,n,r){function o(i,s){return"[Axios v"+N0+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new ee(o(s," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!fh[s]&&(fh[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};bl.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function pk(e,t,n){if(typeof e!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],u=a===void 0||s(a,i,e);if(u!==!0)throw new ee("option "+i+" must be "+u,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+i,ee.ERR_BAD_OPTION)}}const ra={assertOptions:pk,validators:bl},It=ra.validators;let _r=class{constructor(t){this.defaults=t||{},this.interceptors={request:new eh,response:new eh}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Nr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&ra.assertOptions(r,{silentJSONParsing:It.transitional(It.boolean),forcedJSONParsing:It.transitional(It.boolean),clarifyTimeoutError:It.transitional(It.boolean),legacyInterceptorReqResOrdering:It.transitional(It.boolean)},!1),o!=null&&(F.isFunction(o)?n.paramsSerializer={serialize:o}:ra.assertOptions(o,{encode:It.function,serialize:It.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ra.assertOptions(n,{baseUrl:It.spelling("baseURL"),withXsrfToken:It.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&F.merge(i.common,i[n.method]);i&&F.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Ct.concat(s,i);const a=[];let u=!0;this.interceptors.request.forEach(function(x){if(typeof x.runWhen=="function"&&x.runWhen(n)===!1)return;u=u&&x.synchronous;const b=n.transitional||Yd;b&&b.legacyInterceptorReqResOrdering?a.unshift(x.fulfilled,x.rejected):a.push(x.fulfilled,x.rejected)});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let d,f=0,m;if(!u){const y=[dh.bind(this),void 0];for(y.unshift(...a),y.push(...c),m=y.length,d=Promise.resolve(n);f<m;)d=d.then(y[f++],y[f++]);return d}m=a.length;let $=n;for(;f<m;){const y=a[f++],x=a[f++];try{$=y($)}catch(b){x.call(this,b);break}}try{d=dh.call(this,$)}catch(y){return Promise.reject(y)}for(f=0,m=c.length;f<m;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=Nr(this.defaults,t);const n=R0(t.baseURL,t.url,t.allowAbsoluteUrls);return j0(n,t.params,t.paramsSerializer)}};F.forEach(["delete","get","head","options"],function(t){_r.prototype[t]=function(n,r){return this.request(Nr(r||{},{method:t,url:n,data:(r||{}).data}))}});F.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(Nr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}_r.prototype[t]=n(),_r.prototype[t+"Form"]=n(!0)});let hk=class A0{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new rs(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new A0(function(o){t=o}),cancel:t}}};function mk(e){return function(n){return e.apply(null,n)}}function gk(e){return F.isObject(e)&&e.isAxiosError===!0}const Oc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Oc).forEach(([e,t])=>{Oc[t]=e});function L0(e){const t=new _r(e),n=g0(_r.prototype.request,t);return F.extend(n,_r.prototype,t,{allOwnKeys:!0}),F.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return L0(Nr(e,o))},n}const Pe=L0(ns);Pe.Axios=_r;Pe.CanceledError=rs;Pe.CancelToken=hk;Pe.isCancel=T0;Pe.VERSION=N0;Pe.toFormData=$l;Pe.AxiosError=ee;Pe.Cancel=Pe.CanceledError;Pe.all=function(t){return Promise.all(t)};Pe.spread=mk;Pe.isAxiosError=gk;Pe.mergeConfig=Nr;Pe.AxiosHeaders=Ct;Pe.formToJSON=e=>C0(F.isHTMLForm(e)?new FormData(e):e);Pe.getAdapter=z0.getAdapter;Pe.HttpStatusCode=Oc;Pe.default=Pe;const{Axios:XC,AxiosError:JC,CanceledError:ZC,isCancel:e5,CancelToken:t5,VERSION:n5,all:r5,Cancel:o5,isAxiosError:i5,spread:s5,toFormData:a5,AxiosHeaders:l5,HttpStatusCode:u5,formToJSON:c5,getAdapter:d5,mergeConfig:f5}=Pe,I0="https://bgrepresentacoes-api-production.up.railway.app/api/v1",Po={ACCESS_TOKEN:"bg:access_token",REFRESH_TOKEN:"bg:refresh_token"},D0=()=>localStorage.getItem(Po.ACCESS_TOKEN),M0=()=>localStorage.getItem(Po.REFRESH_TOKEN),B0=({accessToken:e,refreshToken:t})=>{e&&localStorage.setItem(Po.ACCESS_TOKEN,e),t&&localStorage.setItem(Po.REFRESH_TOKEN,t)},Ma=()=>{localStorage.removeItem(Po.ACCESS_TOKEN),localStorage.removeItem(Po.REFRESH_TOKEN)},nt=Pe.create({baseURL:I0,timeout:15e3,headers:{"Content-Type":"application/json",Accept:"application/json"}});let Es=!1,zc=[];const ph=(e,t=null)=>{zc.forEach(({resolve:n,reject:r})=>e?r(e):n(t)),zc=[]};nt.interceptors.request.use(e=>{const t=D0();return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));nt.interceptors.response.use(e=>e,async e=>{var i,s;const t=e.config,n=((i=e.response)==null?void 0:i.status)===401,r=!t._retry,o=!((s=t.url)!=null&&s.includes("/auth/refresh"));if(n&&r&&o){if(t._retry=!0,Es)return new Promise((u,c)=>{zc.push({resolve:u,reject:c})}).then(u=>(t.headers.Authorization=`Bearer ${u}`,nt(t)));Es=!0;const a=M0();if(!a)return Es=!1,Ma(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(e);try{const{data:u}=await Pe.post(`${I0}/auth/refresh`,{refreshToken:a},{headers:{"Content-Type":"application/json"}}),c=u.data??u,d=c.token??c.accessToken,f=c.refreshToken;if(!d)throw new Error("Refresh não retornou accessToken");return B0({accessToken:d,refreshToken:f}),ph(null,d),t.headers.Authorization=`Bearer ${d}`,nt(t)}catch(u){return ph(u,null),Ma(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(u)}finally{Es=!1}}return Promise.reject(e)});const rr=(e,t="Ocorreu um erro inesperado.")=>{var n,r,o,i;return((r=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:r.message)??((i=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:i.error)??(e==null?void 0:e.message)??t},at={INIT:"INIT",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGOUT:"LOGOUT",PASSWORD_CHANGED:"PASSWORD_CHANGED",UPDATE_USER:"UPDATE_USER",SET_LOADING:"SET_LOADING"},U0={user:null,isAuthenticated:!1,isLoading:!0,mustChangePassword:!1};function yk(e,{type:t,payload:n}){switch(t){case at.INIT:return{...e,user:n.user??null,isAuthenticated:!!n.user,isLoading:!1,mustChangePassword:n.mustChangePassword??!1};case at.LOGIN_SUCCESS:return{...e,user:n.user,isAuthenticated:!0,isLoading:!1,mustChangePassword:n.mustChangePassword??!1};case at.LOGOUT:return{...U0,isLoading:!1};case at.PASSWORD_CHANGED:return{...e,mustChangePassword:!1};case at.UPDATE_USER:return{...e,user:{...e.user,...n}};case at.SET_LOADING:return{...e,isLoading:n};default:return e}}const V0=j.createContext(null);function xk({children:e}){var $,y,x,b;const[t,n]=j.useReducer(yk,U0),r=j.useRef(!1);j.useEffect(()=>{if(r.current)return;r.current=!0,(async()=>{const p=D0(),h=M0();if(!p&&!h){n({type:at.INIT,payload:{user:null}});return}try{const{data:v}=await nt.get("/users/profile");n({type:at.INIT,payload:{user:v.data}})}catch{Ma(),n({type:at.INIT,payload:{user:null}})}})()},[]),j.useEffect(()=>{const g=()=>{n({type:at.LOGOUT})};return window.addEventListener("bg:session-expired",g),()=>window.removeEventListener("bg:session-expired",g)},[]);const o=j.useCallback(async(g,p)=>{n({type:at.SET_LOADING,payload:!0});try{const{data:h}=await nt.post("/auth/login",{email:g,password:p}),v=h.data??h,k=v.token??v.accessToken,{refreshToken:T,user:_}=v;re.success("Login efetuado com sucesso!",{toastId:"login-success"}),B0({accessToken:k,refreshToken:T});const E=(v.mustChangePassword??h.mustChangePassword??((_==null?void 0:_.last_login_at)===null||(_==null?void 0:_.last_login_at)===void 0),!1),O=v.mustChangePassword===!0;return n({type:at.LOGIN_SUCCESS,payload:{user:_,mustChangePassword:O}}),{mustChangePassword:O}}catch(h){throw n({type:at.SET_LOADING,payload:!1}),new Error(rr(h,"E-mail ou senha inválidos."))}},[]),i=j.useCallback(async(g,p,h)=>{try{await nt.patch("/auth/change-password",{currentPassword:g,newPassword:p,confirmPassword:h}),n({type:at.PASSWORD_CHANGED}),re.success("Senha alterada com sucesso!")}catch(v){throw new Error(rr(v,"Erro ao alterar a senha. Tente novamente."))}},[]),s=j.useCallback(()=>{re.success("Logout efetuado com sucesso!",{toastId:"logout-success"}),Ma(),n({type:at.LOGOUT}),nt.post("/auth/logout").catch(()=>{})},[]),a=j.useCallback(g=>{n({type:at.UPDATE_USER,payload:g})},[]),u=(($=t.user)==null?void 0:$.role)==="admin",c=((y=t.user)==null?void 0:y.role)==="user",d=((x=t.user)==null?void 0:x.role)==="partner",f=j.useCallback((...g)=>{var p;return g.includes((p=t.user)==null?void 0:p.role)},[(b=t.user)==null?void 0:b.role]),m=j.useMemo(()=>({user:t.user,isAuthenticated:t.isAuthenticated,isLoading:t.isLoading,mustChangePassword:t.mustChangePassword,isAdmin:u,isUser:c,isPartner:d,hasRole:f,login:o,logout:s,changePassword:i,updateUser:a}),[t,u,c,d,f,o,s,i,a]);return l.jsx(V0.Provider,{value:m,children:e})}function Mr(){const e=j.useContext(V0);if(!e)throw new Error("useAuth deve ser usado dentro de <AuthProvider>.");return e}const vk=Qe`
  to { transform: rotate(360deg); }
`,wk=w.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.surface.page};
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,$k=w.div`
  width: 36px;
  height: 36px;
  border: 3px solid ${({theme:e})=>e.colors.primary[100]};
  border-top-color: ${({theme:e})=>e.brand.primary};
  border-radius: 50%;
  animation: ${vk} 0.8s linear infinite;
`,bk=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,Sk=w.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.surface.page};
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
`,kk=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[200]};
  margin: 0;
  line-height: 1;
`,_k=w.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,Ek=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
  max-width: 320px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;function cu({allowedRoles:e=[]}){const{isAuthenticated:t,isLoading:n,mustChangePassword:r,user:o}=Mr(),i=ar();return n?l.jsxs(wk,{children:[l.jsx($k,{}),l.jsx(bk,{children:"Verificando sessão…"})]}):t?r&&i.pathname!=="/alterar-senha"?l.jsx(Ra,{to:"/alterar-senha",replace:!0}):e.length>0&&!e.includes(o==null?void 0:o.role)?l.jsxs(Sk,{children:[l.jsx(kk,{children:"403"}),l.jsx(_k,{children:"Acesso não autorizado"}),l.jsx(Ek,{children:"Você não tem permissão para acessar esta área. Entre em contato com o administrador caso acredite que isso é um erro."})]}):l.jsx(Iy,{}):l.jsx(Ra,{to:"/login",state:{from:i},replace:!0})}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),W0=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ck={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=j.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:s,...a},u)=>j.createElement("svg",{ref:u,...Ck,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:W0("lucide",o),...a},[...s.map(([c,d])=>j.createElement(c,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=(e,t)=>{const n=j.forwardRef(({className:r,...o},i)=>j.createElement(Tk,{ref:i,iconNode:t,className:W0(`lucide-${jk(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=ae("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=ae("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=ae("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=ae("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=ae("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=ae("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=ae("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=ae("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=ae("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=ae("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=ae("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=ae("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=ae("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=ae("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=ae("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=ae("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=ae("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=ae("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=ae("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=ae("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=ae("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=ae("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=ae("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=ae("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=ae("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=ae("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=ae("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=ae("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=ae("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=ae("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=ae("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=ae("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),qk=Qe`
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
`,Yk=w.aside`
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
`,Qk=w.div`
  padding: ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[5]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral[800]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  animation: ${qk} 0.4s ease both;
`,Kk=w.div`
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
`,Xk=w.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
`,Jk=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Zk=w.nav`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[3]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,e2=w.div`
  margin-top: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  padding: 0 ${({theme:e})=>e.spacing[2]};
`,t2=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral[600]};
`,n2=w(h$)`
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
`,r2=w.span`
  flex: 1;
`;w.span`
  background-color: ${({theme:e})=>e.colors.primary[600]};
  color: #fff;
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  padding: 1px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  line-height: 1.6;
`;const o2=w.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[3]};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[800]};
`,i2=w.div`
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
`,s2=w.div`
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
`,a2=w.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,l2=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,u2=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[500]};
  text-transform: capitalize;
`,c2=w.div`
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
`,d2=(e="")=>e.split(" ").filter(Boolean).slice(0,2).map(t=>t[0].toUpperCase()).join(""),f2={admin:"Administrador",user:"Usuário",partner:"Parceiro"},p2=[{section:"Principal",items:[{path:"/dashboard",label:"Dashboard",icon:Nk},{path:"/clientes",label:"Clientes",icon:Gk},{path:"/vendas",label:"Vendas",icon:Uk}]},{section:"Administração",adminOnly:!0,items:[{path:"/usuarios",label:"Usuários",icon:ex},{path:"/bandeiras",label:"Bandeiras",icon:K0},{path:"/planos",label:"Planos",icon:hh},{path:"/relatorios",label:"Relatórios",icon:hh}]},{section:"Conta",items:[{path:"/perfil",label:"Meu Perfil",icon:Pk}]}];function h2({open:e,onClose:t}){const{user:n,isAdmin:r}=Mr();return l.jsxs(l.Fragment,{children:[l.jsx(c2,{$open:e,onClick:t}),l.jsxs(Yk,{$open:e,children:[l.jsxs(Qk,{children:[l.jsx(Kk,{children:"BG"}),l.jsx(Xk,{children:l.jsx(Jk,{children:"BG Representações"})})]}),l.jsx(Zk,{children:p2.map(o=>o.adminOnly&&!r?null:l.jsxs("div",{children:[l.jsx(e2,{children:l.jsx(t2,{children:o.section})}),o.items.map(({path:i,label:s,icon:a})=>l.jsxs(n2,{to:i,onClick:t,children:[l.jsx(a,{size:17}),l.jsx(r2,{children:s})]},i))]},o.section))}),l.jsx(o2,{children:l.jsxs(i2,{children:[l.jsx(s2,{children:d2(n==null?void 0:n.name)}),l.jsxs(a2,{children:[l.jsx(l2,{children:(n==null?void 0:n.name)??"Usuário"}),l.jsx(u2,{children:f2[n==null?void 0:n.role]??(n==null?void 0:n.role)})]})]})})]})]})}const m2=w.header`
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
`,g2=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,y2=w.button`
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
`,x2=w.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,v2=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,w2=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;

  /* Oculta em telas pequenas para não sobrecarregar */
  @media (max-width: 600px) {
    display: none;
  }
`,$2=w.span`
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
`,b2=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`,S2=w.div`
  width: 1px;
  height: 24px;
  background-color: ${({theme:e})=>e.border.default};
  flex-shrink: 0;

  @media (max-width: 600px) {
    display: none;
  }
`,k2=w.button`
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
`,du={"/dashboard":"Dashboard","/clientes":"Clientes","/vendas":"Vendas","/usuarios":"Usuários","/bandeiras":"Bandeiras","/planos":"Planos","/relatorios":"Relatórios","/perfil":"Meu Perfil","/onboarding":"Novo Cliente"},_2={admin:"Administrador",user:"Usuário",partner:"Parceiro"};function E2({onMenuClick:e}){var s;const{user:t,logout:n}=Mr(),r=ar(),o=(()=>{const a=du[r.pathname];if(a)return a;const u=Object.keys(du).find(c=>r.pathname.startsWith(c+"/"));return u?du[u]:"BG Representações"})(),i=((s=t==null?void 0:t.name)==null?void 0:s.split(" ")[0])??"Usuário";return l.jsxs(m2,{children:[l.jsxs(g2,{children:[l.jsx(y2,{type:"button",onClick:e,"aria-label":"Abrir menu",children:l.jsx(Ik,{size:18})}),l.jsx(x2,{children:o})]}),l.jsxs(v2,{children:[l.jsxs(w2,{children:[l.jsxs($2,{children:["Olá, ",i]}),l.jsx(b2,{children:_2[t==null?void 0:t.role]??(t==null?void 0:t.role)})]}),l.jsx(S2,{}),l.jsxs(k2,{type:"button",onClick:n,children:[l.jsx(Lk,{size:15}),l.jsx("span",{children:"Sair"})]})]})]})}const j2=w.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.surface.page};
`,C2=w.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; /* evita overflow em flex */
  overflow: hidden;
`,T2=w.main`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[8]};
  background-color: ${({theme:e})=>e.surface.page};

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[4]};
  }
`;function gh(){const[e,t]=j.useState(!1);return l.jsxs(j2,{children:[l.jsx(h2,{open:e,onClose:()=>t(!1)}),l.jsxs(C2,{children:[l.jsx(E2,{onMenuClick:()=>t(n=>!n)}),l.jsx(T2,{children:l.jsx(Iy,{})})]})]})}var os=e=>e.type==="checkbox",wr=e=>e instanceof Date,$t=e=>e==null;const tx=e=>typeof e=="object";var Me=e=>!$t(e)&&!Array.isArray(e)&&tx(e)&&!wr(e),F2=e=>Me(e)&&e.target?os(e.target)?e.target.checked:e.target.value:e,R2=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,P2=(e,t)=>e.has(R2(t)),O2=e=>{const t=e.constructor&&e.constructor.prototype;return Me(t)&&t.hasOwnProperty("isPrototypeOf")},Jd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Be(e){if(e instanceof Date)return new Date(e);const t=typeof FileList<"u"&&e instanceof FileList;if(Jd&&(e instanceof Blob||t))return e;const n=Array.isArray(e);if(!n&&!(Me(e)&&O2(e)))return e;const r=n?[]:Object.create(Object.getPrototypeOf(e));for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=Be(e[o]));return r}var Sl=e=>/^\w*$/.test(e),ke=e=>e===void 0,Zd=e=>Array.isArray(e)?e.filter(Boolean):[],ef=e=>Zd(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Y=(e,t,n)=>{if(!t||!Me(e))return n;const r=(Sl(t)?[t]:ef(t)).reduce((o,i)=>$t(o)?o:o[i],e);return ke(r)||r===e?ke(e[t])?n:e[t]:r},an=e=>typeof e=="boolean",Xt=e=>typeof e=="function",he=(e,t,n)=>{let r=-1;const o=Sl(t)?[t]:ef(t),i=o.length,s=i-1;for(;++r<i;){const a=o[r];let u=n;if(r!==s){const c=e[a];u=Me(c)||Array.isArray(c)?c:isNaN(+o[r+1])?{}:[]}if(a==="__proto__"||a==="constructor"||a==="prototype")return;e[a]=u,e=e[a]}};const yh={BLUR:"blur",FOCUS_OUT:"focusout"},Jt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},mn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},z2=Q.createContext(null);z2.displayName="HookFormControlContext";var N2=(e,t,n,r=!0)=>{const o={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(o,i,{get:()=>{const s=i;return t._proxyFormState[s]!==Jt.all&&(t._proxyFormState[s]=!r||Jt.all),e[s]}});return o};const A2=typeof window<"u"?Q.useLayoutEffect:Q.useEffect;var Rt=e=>typeof e=="string",L2=(e,t,n,r,o)=>Rt(e)?(r&&t.watch.add(e),Y(n,e,o)):Array.isArray(e)?e.map(i=>(r&&t.watch.add(i),Y(n,i))):(r&&(t.watchAll=!0),n),Ac=e=>$t(e)||!tx(e);function In(e,t,n=new WeakSet){if(Ac(e)||Ac(t))return Object.is(e,t);if(wr(e)&&wr(t))return Object.is(e.getTime(),t.getTime());const r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;if(n.has(e)||n.has(t))return!0;n.add(e),n.add(t);for(const i of r){const s=e[i];if(!o.includes(i))return!1;if(i!=="ref"){const a=t[i];if(wr(s)&&wr(a)||Me(s)&&Me(a)||Array.isArray(s)&&Array.isArray(a)?!In(s,a,n):!Object.is(s,a))return!1}}return!0}const I2=Q.createContext(null);I2.displayName="HookFormContext";var nx=(e,t,n,r,o)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:o||!0}}:{},vi=e=>Array.isArray(e)?e:[e],xh=()=>{let e=[];return{get observers(){return e},next:o=>{for(const i of e)i.next&&i.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(i=>i!==o)}}),unsubscribe:()=>{e=[]}}};function rx(e,t){const n={};for(const r in e)if(e.hasOwnProperty(r)){const o=e[r],i=t[r];if(o&&Me(o)&&i){const s=rx(o,i);Me(s)&&(n[r]=s)}else e[r]&&(n[r]=i)}return n}var ft=e=>Me(e)&&!Object.keys(e).length,tf=e=>e.type==="file",Ba=e=>{if(!Jd)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ox=e=>e.type==="select-multiple",nf=e=>e.type==="radio",D2=e=>nf(e)||os(e),fu=e=>Ba(e)&&e.isConnected;function M2(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=ke(e)?r++:e[t[r++]];return e}function B2(e){for(const t in e)if(e.hasOwnProperty(t)&&!ke(e[t]))return!1;return!0}function Le(e,t){const n=Array.isArray(t)?t:Sl(t)?[t]:ef(t),r=n.length===1?e:M2(e,n),o=n.length-1,i=n[o];return r&&delete r[i],o!==0&&(Me(r)&&ft(r)||Array.isArray(r)&&B2(r))&&Le(e,n.slice(0,-1)),e}var U2=e=>{for(const t in e)if(Xt(e[t]))return!0;return!1};function ix(e){return Array.isArray(e)||Me(e)&&!U2(e)}function Lc(e,t={}){for(const n in e){const r=e[n];ix(r)?(t[n]=Array.isArray(r)?[]:{},Lc(r,t[n])):ke(r)||(t[n]=!0)}return t}function Xr(e,t,n){n||(n=Lc(t));for(const r in e){const o=e[r];if(ix(o))ke(t)||Ac(n[r])?n[r]=Lc(o,Array.isArray(o)?[]:{}):Xr(o,$t(t)?{}:t[r],n[r]);else{const i=t[r];n[r]=!In(o,i)}}return n}const vh={value:!1,isValid:!1},wh={value:!0,isValid:!0};var sx=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ke(e[0].attributes.value)?ke(e[0].value)||e[0].value===""?wh:{value:e[0].value,isValid:!0}:wh:vh}return vh},ax=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>ke(e)?e:t?e===""?NaN:e&&+e:n&&Rt(e)?new Date(e):r?r(e):e;const $h={isValid:!1,value:null};var lx=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,$h):$h;function bh(e){const t=e.ref;return tf(t)?t.files:nf(t)?lx(e.refs).value:ox(t)?[...t.selectedOptions].map(({value:n})=>n):os(t)?sx(e.refs).value:ax(ke(t.value)?e.ref.value:t.value,e)}var V2=(e,t,n,r)=>{const o={};for(const i of e){const s=Y(t,i);s&&he(o,i,s._f)}return{criteriaMode:n,names:[...e],fields:o,shouldUseNativeValidation:r}},Ua=e=>e instanceof RegExp,Qo=e=>ke(e)?e:Ua(e)?e.source:Me(e)?Ua(e.value)?e.value.source:e.value:e,Sh=e=>({isOnSubmit:!e||e===Jt.onSubmit,isOnBlur:e===Jt.onBlur,isOnChange:e===Jt.onChange,isOnAll:e===Jt.all,isOnTouch:e===Jt.onTouched});const kh="AsyncFunction";var W2=e=>!!e&&!!e.validate&&!!(Xt(e.validate)&&e.validate.constructor.name===kh||Me(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===kh)),H2=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),_h=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const wi=(e,t,n,r)=>{for(const o of n||Object.keys(e)){const i=Y(e,o);if(i){const{_f:s,...a}=i;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],o)&&!r)return!0;if(s.ref&&t(s.ref,s.name)&&!r)return!0;if(wi(a,t))break}else if(Me(a)&&wi(a,t))break}}};function Eh(e,t,n){const r=Y(e,n);if(r||Sl(n))return{error:r,name:n};const o=n.split(".");for(;o.length;){const i=o.join("."),s=Y(t,i),a=Y(e,i);if(s&&!Array.isArray(s)&&n!==i)return{name:n};if(a&&a.type)return{name:i,error:a};if(a&&a.root&&a.root.type)return{name:`${i}.root`,error:a.root};o.pop()}return{name:n}}var G2=(e,t,n,r)=>{n(e);const{name:o,...i}=e;return ft(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(s=>t[s]===(!r||Jt.all))},q2=(e,t,n)=>!e||!t||e===t||vi(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),Y2=(e,t,n,r,o)=>o.isOnAll?!1:!n&&o.isOnTouch?!(t||e):(n?r.isOnBlur:o.isOnBlur)?!e:(n?r.isOnChange:o.isOnChange)?e:!0,Q2=(e,t)=>!Zd(Y(e,t)).length&&Le(e,t),K2=(e,t,n)=>{const r=vi(Y(e,n));return he(r,"root",t[n]),he(e,n,r),e};function jh(e,t,n="validate"){if(Rt(e)||Array.isArray(e)&&e.every(Rt)||an(e)&&!e)return{type:n,message:Rt(e)?e:"",ref:t}}var Hr=e=>Me(e)&&!Ua(e)?e:{value:e,message:""},Ch=async(e,t,n,r,o,i)=>{const{ref:s,refs:a,required:u,maxLength:c,minLength:d,min:f,max:m,pattern:$,validate:y,name:x,valueAsNumber:b,mount:g}=e._f,p=Y(n,x);if(!g||t.has(x))return{};const h=a?a[0]:s,v=V=>{o&&h.reportValidity&&(h.setCustomValidity(an(V)?"":V||""),h.reportValidity())},k={},T=nf(s),_=os(s),E=T||_,O=(b||tf(s))&&ke(s.value)&&ke(p)||Ba(s)&&s.value===""||p===""||Array.isArray(p)&&!p.length,N=nx.bind(null,x,r,k),B=(V,G,Z,ne=mn.maxLength,L=mn.minLength)=>{const I=V?G:Z;k[x]={type:V?ne:L,message:I,ref:s,...N(V?ne:L,I)}};if(i?!Array.isArray(p)||!p.length:u&&(!E&&(O||$t(p))||an(p)&&!p||_&&!sx(a).isValid||T&&!lx(a).isValid)){const{value:V,message:G}=Rt(u)?{value:!!u,message:u}:Hr(u);if(V&&(k[x]={type:mn.required,message:G,ref:h,...N(mn.required,G)},!r))return v(G),k}if(!O&&(!$t(f)||!$t(m))){let V,G;const Z=Hr(m),ne=Hr(f);if(!$t(p)&&!isNaN(p)){const L=s.valueAsNumber||p&&+p;$t(Z.value)||(V=L>Z.value),$t(ne.value)||(G=L<ne.value)}else{const L=s.valueAsDate||new Date(p),I=z=>new Date(new Date().toDateString()+" "+z),P=s.type=="time",D=s.type=="week";Rt(Z.value)&&p&&(V=P?I(p)>I(Z.value):D?p>Z.value:L>new Date(Z.value)),Rt(ne.value)&&p&&(G=P?I(p)<I(ne.value):D?p<ne.value:L<new Date(ne.value))}if((V||G)&&(B(!!V,Z.message,ne.message,mn.max,mn.min),!r))return v(k[x].message),k}if((c||d)&&!O&&(Rt(p)||i&&Array.isArray(p))){const V=Hr(c),G=Hr(d),Z=!$t(V.value)&&p.length>+V.value,ne=!$t(G.value)&&p.length<+G.value;if((Z||ne)&&(B(Z,V.message,G.message),!r))return v(k[x].message),k}if($&&!O&&Rt(p)){const{value:V,message:G}=Hr($);if(Ua(V)&&!p.match(V)&&(k[x]={type:mn.pattern,message:G,ref:s,...N(mn.pattern,G)},!r))return v(G),k}if(y){if(Xt(y)){const V=await y(p,n),G=jh(V,h);if(G&&(k[x]={...G,...N(mn.validate,G.message)},!r))return v(G.message),k}else if(Me(y)){let V={};for(const G in y){if(!ft(V)&&!r)break;const Z=jh(await y[G](p,n),h,G);Z&&(V={...Z,...N(G,Z.message)},v(Z.message),r&&(k[x]=V))}if(!ft(V)&&(k[x]={ref:h,...V},!r))return k}}return v(!0),k};const X2={mode:Jt.onSubmit,reValidateMode:Jt.onChange,shouldFocusError:!0};function J2(e={}){let t={...X2,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:Xt(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},o=Me(t.defaultValues)||Me(t.values)?Be(t.defaultValues||t.values)||{}:{},i=t.shouldUnregister?{}:Be(o),s={action:!1,mount:!1,watch:!1,keepIsValid:!1},a={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={...d};let m={...f};const $={array:xh(),state:xh()},y=t.criteriaMode===Jt.all,x=S=>C=>{clearTimeout(c),c=setTimeout(S,C)},b=async S=>{if(!s.keepIsValid&&!t.disabled&&(f.isValid||m.isValid||S)){let C;t.resolver?(C=ft((await E()).errors),g()):C=await N(r,!0),C!==n.isValid&&$.state.next({isValid:C})}},g=(S,C)=>{!t.disabled&&(f.isValidating||f.validatingFields||m.isValidating||m.validatingFields)&&((S||Array.from(a.mount)).forEach(R=>{R&&(C?he(n.validatingFields,R,C):Le(n.validatingFields,R))}),$.state.next({validatingFields:n.validatingFields,isValidating:!ft(n.validatingFields)}))},p=(S,C=[],R,H,U=!0,M=!0)=>{if(H&&R&&!t.disabled){if(s.action=!0,M&&Array.isArray(Y(r,S))){const K=R(Y(r,S),H.argA,H.argB);U&&he(r,S,K)}if(M&&Array.isArray(Y(n.errors,S))){const K=R(Y(n.errors,S),H.argA,H.argB);U&&he(n.errors,S,K),Q2(n.errors,S)}if((f.touchedFields||m.touchedFields)&&M&&Array.isArray(Y(n.touchedFields,S))){const K=R(Y(n.touchedFields,S),H.argA,H.argB);U&&he(n.touchedFields,S,K)}(f.dirtyFields||m.dirtyFields)&&(n.dirtyFields=Xr(o,i)),$.state.next({name:S,isDirty:V(S,C),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else he(i,S,C)},h=(S,C)=>{he(n.errors,S,C),$.state.next({errors:n.errors})},v=S=>{n.errors=S,$.state.next({errors:n.errors,isValid:!1})},k=(S,C,R,H)=>{const U=Y(r,S);if(U){const M=Y(i,S,ke(R)?Y(o,S):R);ke(M)||H&&H.defaultChecked||C?he(i,S,C?M:bh(U._f)):ne(S,M),s.mount&&!s.action&&b()}},T=(S,C,R,H,U)=>{let M=!1,K=!1;const de={name:S};if(!t.disabled){if(!R||H){(f.isDirty||m.isDirty)&&(K=n.isDirty,n.isDirty=de.isDirty=V(),M=K!==de.isDirty);const fe=In(Y(o,S),C);K=!!Y(n.dirtyFields,S),fe?Le(n.dirtyFields,S):he(n.dirtyFields,S,!0),de.dirtyFields=n.dirtyFields,M=M||(f.dirtyFields||m.dirtyFields)&&K!==!fe}if(R){const fe=Y(n.touchedFields,S);fe||(he(n.touchedFields,S,R),de.touchedFields=n.touchedFields,M=M||(f.touchedFields||m.touchedFields)&&fe!==R)}M&&U&&$.state.next(de)}return M?de:{}},_=(S,C,R,H)=>{const U=Y(n.errors,S),M=(f.isValid||m.isValid)&&an(C)&&n.isValid!==C;if(t.delayError&&R?(u=x(()=>h(S,R)),u(t.delayError)):(clearTimeout(c),u=null,R?he(n.errors,S,R):Le(n.errors,S)),(R?!In(U,R):U)||!ft(H)||M){const K={...H,...M&&an(C)?{isValid:C}:{},errors:n.errors,name:S};n={...n,...K},$.state.next(K)}},E=async S=>(g(S,!0),await t.resolver(i,t.context,V2(S||a.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),O=async S=>{const{errors:C}=await E(S);if(g(S),S)for(const R of S){const H=Y(C,R);H?he(n.errors,R,H):Le(n.errors,R)}else n.errors=C;return C},N=async(S,C,R={valid:!0})=>{for(const H in S){const U=S[H];if(U){const{_f:M,...K}=U;if(M){const de=a.array.has(M.name),fe=U._f&&W2(U._f);fe&&f.validatingFields&&g([M.name],!0);const dt=await Ch(U,a.disabled,i,y,t.shouldUseNativeValidation&&!C,de);if(fe&&f.validatingFields&&g([M.name]),dt[M.name]&&(R.valid=!1,C||e.shouldUseNativeValidation))break;!C&&(Y(dt,M.name)?de?K2(n.errors,dt,M.name):he(n.errors,M.name,dt[M.name]):Le(n.errors,M.name))}!ft(K)&&await N(K,C,R)}}return R.valid},B=()=>{for(const S of a.unMount){const C=Y(r,S);C&&(C._f.refs?C._f.refs.every(R=>!fu(R)):!fu(C._f.ref))&&J(S)}a.unMount=new Set},V=(S,C)=>!t.disabled&&(S&&C&&he(i,S,C),!In(X(),o)),G=(S,C,R)=>L2(S,a,{...s.mount?i:ke(C)?o:Rt(S)?{[S]:C}:C},R,C),Z=S=>Zd(Y(s.mount?i:o,S,t.shouldUnregister?Y(o,S,[]):[])),ne=(S,C,R={})=>{const H=Y(r,S);let U=C;if(H){const M=H._f;M&&(!M.disabled&&he(i,S,ax(C,M)),U=Ba(M.ref)&&$t(C)?"":C,ox(M.ref)?[...M.ref.options].forEach(K=>K.selected=U.includes(K.value)):M.refs?os(M.ref)?M.refs.forEach(K=>{(!K.defaultChecked||!K.disabled)&&(Array.isArray(U)?K.checked=!!U.find(de=>de===K.value):K.checked=U===K.value||!!U)}):M.refs.forEach(K=>K.checked=K.value===U):tf(M.ref)?M.ref.value="":(M.ref.value=U,M.ref.type||$.state.next({name:S,values:Be(i)})))}(R.shouldDirty||R.shouldTouch)&&T(S,U,R.shouldTouch,R.shouldDirty,!0),R.shouldValidate&&z(S)},L=(S,C,R)=>{for(const H in C){if(!C.hasOwnProperty(H))return;const U=C[H],M=S+"."+H,K=Y(r,M);(a.array.has(S)||Me(U)||K&&!K._f)&&!wr(U)?L(M,U,R):ne(M,U,R)}},I=(S,C,R={})=>{const H=Y(r,S),U=a.array.has(S),M=Be(C);he(i,S,M),U?($.array.next({name:S,values:Be(i)}),(f.isDirty||f.dirtyFields||m.isDirty||m.dirtyFields)&&R.shouldDirty&&$.state.next({name:S,dirtyFields:Xr(o,i),isDirty:V(S,M)})):H&&!H._f&&!$t(M)?L(S,M,R):ne(S,M,R),_h(S,a)?$.state.next({...n,name:S,values:Be(i)}):$.state.next({name:s.mount?S:void 0,values:Be(i)})},P=async S=>{s.mount=!0;const C=S.target;let R=C.name,H=!0;const U=Y(r,R),M=fe=>{H=Number.isNaN(fe)||wr(fe)&&isNaN(fe.getTime())||In(fe,Y(i,R,fe))},K=Sh(t.mode),de=Sh(t.reValidateMode);if(U){let fe,dt;const lr=C.type?bh(U._f):F2(S),Rn=S.type===yh.BLUR||S.type===yh.FOCUS_OUT,Nx=!H2(U._f)&&!t.resolver&&!Y(n.errors,R)&&!U._f.deps||Y2(Rn,Y(n.touchedFields,R),n.isSubmitted,de,K),_l=_h(R,a,Rn);he(i,R,lr),Rn?(!C||!C.readOnly)&&(U._f.onBlur&&U._f.onBlur(S),u&&u(0)):U._f.onChange&&U._f.onChange(S);const El=T(R,lr,Rn),Ax=!ft(El)||_l;if(!Rn&&$.state.next({name:R,type:S.type,values:Be(i)}),Nx)return(f.isValid||m.isValid)&&(t.mode==="onBlur"?Rn&&b():Rn||b()),Ax&&$.state.next({name:R,..._l?{}:El});if(!Rn&&_l&&$.state.next({...n}),t.resolver){const{errors:mf}=await E([R]);if(g([R]),M(lr),H){const Lx=Eh(n.errors,r,R),gf=Eh(mf,r,Lx.name||R);fe=gf.error,R=gf.name,dt=ft(mf)}}else g([R],!0),fe=(await Ch(U,a.disabled,i,y,t.shouldUseNativeValidation))[R],g([R]),M(lr),H&&(fe?dt=!1:(f.isValid||m.isValid)&&(dt=await N(r,!0)));H&&(U._f.deps&&(!Array.isArray(U._f.deps)||U._f.deps.length>0)&&z(U._f.deps),_(R,dt,fe,El))}},D=(S,C)=>{if(Y(n.errors,C)&&S.focus)return S.focus(),1},z=async(S,C={})=>{let R,H;const U=vi(S);if(t.resolver){const M=await O(ke(S)?S:U);R=ft(M),H=S?!U.some(K=>Y(M,K)):R}else S?(H=(await Promise.all(U.map(async M=>{const K=Y(r,M);return await N(K&&K._f?{[M]:K}:K)}))).every(Boolean),!(!H&&!n.isValid)&&b()):H=R=await N(r);return $.state.next({...!Rt(S)||(f.isValid||m.isValid)&&R!==n.isValid?{}:{name:S},...t.resolver||!S?{isValid:R}:{},errors:n.errors}),C.shouldFocus&&!H&&wi(r,D,S?U:a.mount),H},X=(S,C)=>{let R={...s.mount?i:o};return C&&(R=rx(C.dirtyFields?n.dirtyFields:n.touchedFields,R)),ke(S)?R:Rt(S)?Y(R,S):S.map(H=>Y(R,H))},W=(S,C)=>({invalid:!!Y((C||n).errors,S),isDirty:!!Y((C||n).dirtyFields,S),error:Y((C||n).errors,S),isValidating:!!Y(n.validatingFields,S),isTouched:!!Y((C||n).touchedFields,S)}),ce=S=>{const C=S?vi(S):void 0;C==null||C.forEach(R=>Le(n.errors,R)),C?C.forEach(R=>{$.state.next({name:R,errors:n.errors})}):$.state.next({errors:{}})},le=(S,C,R)=>{const H=(Y(r,S,{_f:{}})._f||{}).ref,U=Y(n.errors,S)||{},{ref:M,message:K,type:de,...fe}=U;he(n.errors,S,{...fe,...C,ref:H}),$.state.next({name:S,errors:n.errors,isValid:!1}),R&&R.shouldFocus&&H&&H.focus&&H.focus()},ye=(S,C)=>Xt(S)?$.state.subscribe({next:R=>"values"in R&&S(G(void 0,C),R)}):G(S,C,!0),me=S=>$.state.subscribe({next:C=>{q2(S.name,C.name,S.exact)&&G2(C,S.formState||f,zx,S.reRenderRoot)&&S.callback({values:{...i},...n,...C,defaultValues:o})}}).unsubscribe,Te=S=>(s.mount=!0,m={...m,...S.formState},me({...S,formState:{...d,...S.formState}})),J=(S,C={})=>{for(const R of S?vi(S):a.mount)a.mount.delete(R),a.array.delete(R),C.keepValue||(Le(r,R),Le(i,R)),!C.keepError&&Le(n.errors,R),!C.keepDirty&&Le(n.dirtyFields,R),!C.keepTouched&&Le(n.touchedFields,R),!C.keepIsValidating&&Le(n.validatingFields,R),!t.shouldUnregister&&!C.keepDefaultValue&&Le(o,R);$.state.next({values:Be(i)}),$.state.next({...n,...C.keepDirty?{isDirty:V()}:{}}),!C.keepIsValid&&b()},Ke=({disabled:S,name:C})=>{if(an(S)&&s.mount||S||a.disabled.has(C)){const U=a.disabled.has(C)!==!!S;S?a.disabled.add(C):a.disabled.delete(C),U&&s.mount&&!s.action&&b()}},Oe=(S,C={})=>{let R=Y(r,S);const H=an(C.disabled)||an(t.disabled);return he(r,S,{...R||{},_f:{...R&&R._f?R._f:{ref:{name:S}},name:S,mount:!0,...C}}),a.mount.add(S),R?Ke({disabled:an(C.disabled)?C.disabled:t.disabled,name:S}):k(S,!0,C.value),{...H?{disabled:C.disabled||t.disabled}:{},...t.progressive?{required:!!C.required,min:Qo(C.min),max:Qo(C.max),minLength:Qo(C.minLength),maxLength:Qo(C.maxLength),pattern:Qo(C.pattern)}:{},name:S,onChange:P,onBlur:P,ref:U=>{if(U){Oe(S,C),R=Y(r,S);const M=ke(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,K=D2(M),de=R._f.refs||[];if(K?de.find(fe=>fe===M):M===R._f.ref)return;he(r,S,{_f:{...R._f,...K?{refs:[...de.filter(fu),M,...Array.isArray(Y(o,S))?[{}]:[]],ref:{type:M.type,name:S}}:{ref:M}}}),k(S,!1,void 0,M)}else R=Y(r,S,{}),R._f&&(R._f.mount=!1),(t.shouldUnregister||C.shouldUnregister)&&!(P2(a.array,S)&&s.action)&&a.unMount.add(S)}}},Xe=()=>t.shouldFocusError&&wi(r,D,a.mount),Ur=S=>{an(S)&&($.state.next({disabled:S}),wi(r,(C,R)=>{const H=Y(r,R);H&&(C.disabled=H._f.disabled||S,Array.isArray(H._f.refs)&&H._f.refs.forEach(U=>{U.disabled=H._f.disabled||S}))},0,!1))},hn=(S,C)=>async R=>{let H;R&&(R.preventDefault&&R.preventDefault(),R.persist&&R.persist());let U=Be(i);if($.state.next({isSubmitting:!0}),t.resolver){const{errors:M,values:K}=await E();g(),n.errors=M,U=Be(K)}else await N(r);if(a.disabled.size)for(const M of a.disabled)Le(U,M);if(Le(n.errors,"root"),ft(n.errors)){$.state.next({errors:{}});try{await S(U,R)}catch(M){H=M}}else C&&await C({...n.errors},R),Xe(),setTimeout(Xe);if($.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ft(n.errors)&&!H,submitCount:n.submitCount+1,errors:n.errors}),H)throw H},Px=(S,C={})=>{Y(r,S)&&(ke(C.defaultValue)?I(S,Be(Y(o,S))):(I(S,C.defaultValue),he(o,S,Be(C.defaultValue))),C.keepTouched||Le(n.touchedFields,S),C.keepDirty||(Le(n.dirtyFields,S),n.isDirty=C.defaultValue?V(S,Be(Y(o,S))):V()),C.keepError||(Le(n.errors,S),f.isValid&&b()),$.state.next({...n}))},ff=(S,C={})=>{const R=S?Be(S):o,H=Be(R),U=ft(S),M=U?o:H;if(C.keepDefaultValues||(o=R),!C.keepValues){if(C.keepDirtyValues){const K=new Set([...a.mount,...Object.keys(Xr(o,i))]);for(const de of Array.from(K)){const fe=Y(n.dirtyFields,de),dt=Y(i,de),lr=Y(M,de);fe&&!ke(dt)?he(M,de,dt):!fe&&!ke(lr)&&I(de,lr)}}else{if(Jd&&ke(S))for(const K of a.mount){const de=Y(r,K);if(de&&de._f){const fe=Array.isArray(de._f.refs)?de._f.refs[0]:de._f.ref;if(Ba(fe)){const dt=fe.closest("form");if(dt){dt.reset();break}}}}if(C.keepFieldsRef)for(const K of a.mount)I(K,Y(M,K));else r={}}i=t.shouldUnregister?C.keepDefaultValues?Be(o):{}:Be(M),$.array.next({values:{...M}}),$.state.next({values:{...M}})}a={mount:C.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},s.mount=!f.isValid||!!C.keepIsValid||!!C.keepDirtyValues||!t.shouldUnregister&&!ft(M),s.watch=!!t.shouldUnregister,s.keepIsValid=!!C.keepIsValid,s.action=!1,C.keepErrors||(n.errors={}),$.state.next({submitCount:C.keepSubmitCount?n.submitCount:0,isDirty:U?!1:C.keepDirty?n.isDirty:!!(C.keepDefaultValues&&!In(S,o)),isSubmitted:C.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:U?{}:C.keepDirtyValues?C.keepDefaultValues&&i?Xr(o,i):n.dirtyFields:C.keepDefaultValues&&S?Xr(o,S):C.keepDirty?n.dirtyFields:{},touchedFields:C.keepTouched?n.touchedFields:{},errors:C.keepErrors?n.errors:{},isSubmitSuccessful:C.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:o})},pf=(S,C)=>ff(Xt(S)?S(i):S,{...t.resetOptions,...C}),Ox=(S,C={})=>{const R=Y(r,S),H=R&&R._f;if(H){const U=H.refs?H.refs[0]:H.ref;U.focus&&setTimeout(()=>{U.focus(),C.shouldSelect&&Xt(U.select)&&U.select()})}},zx=S=>{n={...n,...S}},hf={control:{register:Oe,unregister:J,getFieldState:W,handleSubmit:hn,setError:le,_subscribe:me,_runSchema:E,_updateIsValidating:g,_focusError:Xe,_getWatch:G,_getDirty:V,_setValid:b,_setFieldArray:p,_setDisabledField:Ke,_setErrors:v,_getFieldArray:Z,_reset:ff,_resetDefaultValues:()=>Xt(t.defaultValues)&&t.defaultValues().then(S=>{pf(S,t.resetOptions),$.state.next({isLoading:!1})}),_removeUnmounted:B,_disableForm:Ur,_subjects:$,_proxyFormState:f,get _fields(){return r},get _formValues(){return i},get _state(){return s},set _state(S){s=S},get _defaultValues(){return o},get _names(){return a},set _names(S){a=S},get _formState(){return n},get _options(){return t},set _options(S){t={...t,...S}}},subscribe:Te,trigger:z,register:Oe,handleSubmit:hn,watch:ye,setValue:I,getValues:X,reset:pf,resetField:Px,clearErrors:ce,unregister:J,setError:le,setFocus:Ox,getFieldState:W};return{...hf,formControl:hf}}function rf(e={}){const t=Q.useRef(void 0),n=Q.useRef(void 0),[r,o]=Q.useState({isDirty:!1,isValidating:!1,isLoading:Xt(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Xt(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:r},e.defaultValues&&!Xt(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:s,...a}=J2(e);t.current={...a,formState:r}}const i=t.current.control;return i._options=e,A2(()=>{const s=i._subscribe({formState:i._proxyFormState,callback:()=>o({...i._formState}),reRenderRoot:!0});return o(a=>({...a,isReady:!0})),i._formState.isReady=!0,s},[i]),Q.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),Q.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode)},[i,e.mode,e.reValidateMode]),Q.useEffect(()=>{e.errors&&(i._setErrors(e.errors),i._focusError())},[i,e.errors]),Q.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),Q.useEffect(()=>{if(i._proxyFormState.isDirty){const s=i._getDirty();s!==r.isDirty&&i._subjects.state.next({isDirty:s})}},[i,r.isDirty]),Q.useEffect(()=>{var s;e.values&&!In(e.values,n.current)?(i._reset(e.values,{keepFieldsRef:!0,...i._options.resetOptions}),!((s=i._options.resetOptions)===null||s===void 0)&&s.keepIsValid||i._setValid(),n.current=e.values,o(a=>({...a}))):i._resetDefaultValues()},[i,e.values]),Q.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=Q.useMemo(()=>N2(r,i),[i,r]),t.current}const Z2=Qe`
  from { opacity: 0; }
  to   { opacity: 1; }
`,is=Qe`
  from { opacity: 0; transform: translateX(-28px); }
  to   { opacity: 1; transform: translateX(0); }
`,e_=Qe`
  from { opacity: 0; transform: translateX(28px); }
  to   { opacity: 1; transform: translateX(0); }
`,t_=Qe`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,n_=Qe`
  from { opacity: 0; transform: scale(1.02); }
  to   { opacity: 1; transform: scale(1); }
`,r_=w.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 55fr 45fr;
  overflow: hidden;

  @media (max-width: 900px) {
    display: block;
    min-height: 100vh;
  }
`,o_=w.section`
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

  animation: ${is} 0.6s ease both;

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[6]};
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    &::after { display: none; }
  }
`,i_=w.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
  }
`,s_=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[20]};
  animation: ${is} 0.55s 0.05s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({theme:e})=>e.spacing[12]};
    justify-content: center;
  }
`,a_=w.div`
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
`,l_=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary[200]};
  letter-spacing: 0.025em;
`,u_=w.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({theme:e})=>e.spacing[5]};
  max-width: 460px;
  animation: ${is} 0.55s 0.12s ease both;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.75rem, 7vw, 2.3rem);
    max-width: 320px;
  }
`,c_=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.neutral[500]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0 0 ${({theme:e})=>e.spacing[10]};
  max-width: 360px;
  animation: ${is} 0.55s 0.2s ease both;

  @media (max-width: 900px) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    max-width: 280px;
    margin-bottom: ${({theme:e})=>e.spacing[8]};
  }
`,d_=w.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};
  animation: ${is} 0.55s 0.28s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[6]};
  }
`,pu=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,hu=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[400]};
  line-height: 1;
`,mu=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,f_=w.div`
  position: relative;
  z-index: 3;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[700]};
  animation: ${Z2} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`,p_=w.button`
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
    animation: ${t_} 0.55s 0.35s ease both;
    transition:
      transform ${({theme:e})=>e.transitions.base},
      box-shadow ${({theme:e})=>e.transitions.base};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px ${({theme:e})=>e.colors.primary[900]}75;
    }
    &:active { transform: translateY(0); }
  }
`,h_=w.section`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[16]};
  animation: ${e_} 0.55s 0.1s ease both;

  @media (max-width: 1100px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[10]};
  }

  @media (max-width: 900px) {
    display: none;
  }
`,m_=w.div`
  width: 100%;
  max-width: 360px;
`,g_=w.div`
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
    ${({$open:e})=>e&&Ji`
        & > * {
          animation: ${n_} 0.32s 0.05s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}
  }
`,y_=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing[10]};
  flex-shrink: 0;
`,x_=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,v_=w.div`
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
`,w_=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
`,$_=w.button`
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
`,b_=w.div`
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,S_=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.brand.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
`,k_=w.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,__=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0;
`,E_=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[8]};
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,Th=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Fh=w.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,Rh=w.div`
  position: relative;
  display: flex;
  align-items: center;
`,Ph=w.input`
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
`,j_=w.button`
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
`,Oh=w.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,C_=w.button`
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
`,T_=w.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: _spin 0.7s linear infinite;

  @keyframes _spin { to { transform: rotate(360deg); } }
`,F_=w.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[100]};
  margin: ${({theme:e})=>e.spacing[8]} 0 ${({theme:e})=>e.spacing[6]};
`,R_=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;function zh({onSubmitSuccess:e}){const{login:t}=Mr(),[n,r]=j.useState(!1),[o,i]=j.useState(!1),{register:s,handleSubmit:a,formState:{errors:u}}=rf({defaultValues:{email:"",password:""}}),c=async({email:d,password:f})=>{i(!0);try{const{mustChangePassword:m}=await t(d,f);e(m)}catch(m){re.error(m.message,{toastId:"login-error"})}finally{i(!1)}};return l.jsxs(l.Fragment,{children:[l.jsxs(b_,{children:[l.jsx(S_,{children:"Área restrita"}),l.jsx(k_,{children:"Bem-vindo de volta"}),l.jsx(__,{children:"Use as credenciais fornecidas pelo administrador para acessar sua conta."})]}),l.jsxs("form",{onSubmit:a(c),noValidate:!0,children:[l.jsxs(E_,{children:[l.jsxs(Th,{children:[l.jsx(Fh,{htmlFor:"email",children:"E-mail"}),l.jsx(Rh,{children:l.jsx(Ph,{id:"email",type:"email",placeholder:"seu@email.com",autoComplete:"email",$hasError:!!u.email,disabled:o,...s("email",{required:"O e-mail é obrigatório.",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Informe um e-mail válido."}})})}),u.email&&l.jsxs(Oh,{children:[l.jsx(ze,{size:12}),u.email.message]})]}),l.jsxs(Th,{children:[l.jsx(Fh,{htmlFor:"password",children:"Senha"}),l.jsxs(Rh,{children:[l.jsx(Ph,{id:"password",type:n?"text":"password",placeholder:"••••••••",autoComplete:"current-password",$hasError:!!u.password,$hasToggle:!0,disabled:o,...s("password",{required:"A senha é obrigatória.",minLength:{value:6,message:"Mínimo 6 caracteres."}})}),l.jsx(j_,{type:"button",onClick:()=>r(d=>!d),"aria-label":n?"Ocultar senha":"Mostrar senha",tabIndex:-1,children:n?l.jsx(Y0,{size:16}):l.jsx(Q0,{size:16})})]}),u.password&&l.jsxs(Oh,{children:[l.jsx(ze,{size:12}),u.password.message]})]})]}),l.jsx(C_,{type:"submit",disabled:o,$isLoading:o,children:o?l.jsxs(l.Fragment,{children:[l.jsx(T_,{}),"Carregando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(J0,{size:17}),"Entrar"]})})]}),l.jsx(F_,{}),l.jsx(R_,{children:"Problemas com o acesso? Fale com o administrador do sistema."})]})}function P_(){const e=Dr(),[t,n]=j.useState(!1);j.useEffect(()=>(document.body.style.overflow=t?"hidden":"",()=>{document.body.style.overflow=""}),[t]),j.useEffect(()=>{const o=i=>{i.key==="Escape"&&n(!1)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[]);const r=o=>{o?(n(!1),setTimeout(()=>e("/alterar-senha",{replace:!0}),180)):e("/dashboard",{replace:!0})};return l.jsxs(r_,{children:[l.jsxs(o_,{children:[l.jsxs(i_,{children:[l.jsxs(s_,{children:[l.jsx(a_,{children:"BG"}),l.jsx(l_,{children:"BG Representações"})]}),l.jsxs(u_,{children:["Gestão de ",l.jsx("em",{children:"benefícios"})," com"," ","precisão corporativa."]}),l.jsx(c_,{children:"Plataforma integrada para gerenciamento de clientes, vendas e cartões de vale alimentação — com rastreabilidade completa e auditoria em cada etapa."}),l.jsxs(d_,{children:[l.jsxs(pu,{children:[l.jsx(hu,{children:"100%"}),l.jsx(mu,{children:"Auditado"})]}),l.jsxs(pu,{children:[l.jsx(hu,{children:"JWT"}),l.jsx(mu,{children:"Segurança"})]}),l.jsxs(pu,{children:[l.jsx(hu,{children:"3 níveis"}),l.jsx(mu,{children:"de acesso"})]})]}),l.jsxs(p_,{type:"button",onClick:()=>n(!0),"aria-label":"Abrir formulário de login",children:["Acessar Sistema",l.jsx(G0,{size:17})]})]}),l.jsxs(f_,{children:["© ",new Date().getFullYear()," BG Representações — Uso interno exclusivo."]})]}),l.jsx(h_,{children:l.jsx(m_,{children:l.jsx(zh,{onSubmitSuccess:r})})}),l.jsxs(g_,{$open:t,role:"dialog","aria-modal":"true","aria-label":"Formulário de login",children:[l.jsxs(y_,{children:[l.jsxs(x_,{children:[l.jsx(v_,{children:"BG"}),l.jsx(w_,{children:"BG Representações"})]}),l.jsx($_,{type:"button",onClick:()=>n(!1),"aria-label":"Fechar formulário",children:l.jsx(Xd,{size:18})})]}),l.jsx(zh,{onSubmitSuccess:r})]})]})}const O_=Qe`
  from { opacity: 0; }
  to   { opacity: 1; }
`,z_=Qe`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,N_=Qe`
  from { opacity: 0; transform: translateX(32px); }
  to   { opacity: 1; transform: translateX(0); }
`,kl=Qe`
  from { opacity: 0; transform: translateX(-32px); }
  to   { opacity: 1; transform: translateX(0); }
`;Qe`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.03); }
`;const A_=w.div`
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
`,L_=w.section`
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
`,I_=w.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (max-width: 900px) {
    align-items: center;
  }
`,D_=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[16]};
  animation: ${kl} 0.6s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({theme:e})=>e.spacing[10]};
    justify-content: center;
  }
`,M_=w.div`
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
`,B_=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary[200]};
  letter-spacing: 0.02em;
`,U_=w.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({theme:e})=>e.spacing[6]};
  animation: ${kl} 0.6s 0.1s ease both;
  max-width: 480px;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.8rem, 7vw, 2.4rem);
    max-width: 340px;
  }
`,V_=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.neutral[400]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0 0 ${({theme:e})=>e.spacing[10]};
  max-width: 380px;
  animation: ${kl} 0.6s 0.2s ease both;

  @media (max-width: 900px) {
    max-width: 300px;
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }
`,W_=w.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};
  animation: ${kl} 0.6s 0.3s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[6]};
  }

  @media (max-width: 380px) {
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,gu=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,yu=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[300]};
  line-height: 1;
`,xu=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[500]};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`,H_=w.div`
  position: relative;
  z-index: 3;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
  animation: ${O_} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`,G_=w.button`
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
  animation: ${z_} 0.6s 0.4s ease both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(180, 90, 20, 0.55);
  }

  @media (max-width: 900px) {
    display: inline-flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,q_=w.section`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[10]};
  animation: ${N_} 0.5s 0.15s ease both;

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
`,Y_=w.div`
  width: 100%;
  max-width: 380px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`,Q_=w.button`
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
`,K_=w.div`
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,X_=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.brand.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
`,J_=w.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,Z_=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,eE=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
`,Nh=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ah=w.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,Lh=w.div`
  position: relative;
  display: flex;
  align-items: center;
`,Ic=w.input`
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
  ${({$hasToggle:e,theme:t})=>e&&Ji`
    padding-right: ${t.spacing[10]};
  `}
`;w.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: ${({theme:e})=>e.brand.primary};
  transition: width ${({theme:e})=>e.transitions.slow};

  ${Ic}:focus ~ & {
    width: 100%;
  }
`;const tE=w.button`
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
`,Ih=w.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,nE=w.button`
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
`,rE=w.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;

  @keyframes spin { to { transform: rotate(360deg); } }
`,oE=w.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[6]} 0;
`,iE=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,sE=w.div`
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
`,aE=w.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    width: 40px;
    height: 4px;
    background-color: ${({theme:e})=>e.colors.neutral[300]};
    border-radius: ${({theme:e})=>e.borderRadius.full};
    margin: 0 auto ${({theme:e})=>e.spacing[8]};
  }
`;function lE(){const{login:e}=Mr(),t=Dr(),[n,r]=j.useState(!1),[o,i]=j.useState(!1),[s,a]=j.useState(!1),{register:u,handleSubmit:c,formState:{errors:d}}=rf({defaultValues:{email:"",password:""}}),f=()=>{r(!0),document.body.style.overflow="hidden"},m=()=>{r(!1),document.body.style.overflow=""},$=async({email:y,password:x})=>{a(!0);try{const{mustChangePassword:b}=await e(y,x);document.body.style.overflow="",b?t("/alterar-senha",{replace:!0}):t("/dashboard",{replace:!0})}catch(b){re.error(b.message,{toastId:"login-error"})}finally{a(!1)}};return l.jsxs(A_,{children:[l.jsxs(L_,{children:[l.jsxs(I_,{children:[l.jsxs(D_,{children:[l.jsx(M_,{children:"BG"}),l.jsx(B_,{children:"BG Representações"})]}),l.jsxs(U_,{children:["Gestão de ",l.jsx("em",{children:"benefícios"})," com"," ","precisão corporativa."]}),l.jsx(V_,{children:"Plataforma integrada para gerenciamento de clientes, vendas e cartões de vale alimentação — com rastreabilidade completa e auditoria em cada etapa."}),l.jsxs(W_,{children:[l.jsxs(gu,{children:[l.jsx(yu,{children:"100%"}),l.jsx(xu,{children:"Auditado"})]}),l.jsxs(gu,{children:[l.jsx(yu,{children:"JWT"}),l.jsx(xu,{children:"Segurança"})]}),l.jsxs(gu,{children:[l.jsx(yu,{children:"3 níveis"}),l.jsx(xu,{children:"de acesso"})]})]}),l.jsxs(G_,{type:"button",onClick:f,children:["Acessar o sistema",l.jsx(G0,{size:17})]})]}),l.jsxs(H_,{children:["© ",new Date().getFullYear()," BG Representações — Uso interno exclusivo."]})]}),l.jsx(sE,{$open:n,onClick:m}),l.jsxs(q_,{$open:n,children:[l.jsx(aE,{}),l.jsx(Q_,{type:"button",onClick:m,"aria-label":"Fechar",children:l.jsx(Xd,{size:18})}),l.jsxs(Y_,{children:[l.jsxs(K_,{children:[l.jsx(X_,{children:"Área restrita"}),l.jsx(J_,{children:"Bem-vindo de volta"}),l.jsx(Z_,{children:"Use as credenciais fornecidas pelo administrador para acessar sua conta."})]}),l.jsxs("form",{onSubmit:c($),noValidate:!0,children:[l.jsxs(eE,{children:[l.jsxs(Nh,{children:[l.jsx(Ah,{htmlFor:"email",children:"E-mail"}),l.jsx(Lh,{children:l.jsx(Ic,{id:"email",type:"email",placeholder:"seu@email.com",autoComplete:"email",$hasError:!!d.email,disabled:s,...u("email",{required:"O e-mail é obrigatório.",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Informe um e-mail válido."}})})}),d.email&&l.jsxs(Ih,{children:[l.jsx(ze,{size:12}),d.email.message]})]}),l.jsxs(Nh,{children:[l.jsx(Ah,{htmlFor:"password",children:"Senha"}),l.jsxs(Lh,{children:[l.jsx(Ic,{id:"password",type:o?"text":"password",placeholder:"••••••••",autoComplete:"current-password",$hasError:!!d.password,$hasToggle:!0,disabled:s,...u("password",{required:"A senha é obrigatória.",minLength:{value:6,message:"Mínimo 6 caracteres."}})}),l.jsx(tE,{type:"button",onClick:()=>i(y=>!y),"aria-label":o?"Ocultar senha":"Mostrar senha",tabIndex:-1,children:o?l.jsx(Y0,{size:16}):l.jsx(Q0,{size:16})})]}),d.password&&l.jsxs(Ih,{children:[l.jsx(ze,{size:12}),d.password.message]})]})]}),l.jsx(nE,{type:"submit",disabled:s,$isLoading:s,children:s?l.jsxs(l.Fragment,{children:[l.jsx(rE,{}),"Carregando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(J0,{size:17}),"Entrar"]})})]}),l.jsx(oE,{}),l.jsx(iE,{children:"Problemas com o acesso? Fale com o administrador do sistema."})]})]})]})}const of=Qe`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,uE=w.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  animation: ${of} 0.35s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,cE=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,dE=w.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,fE=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,pE=w.button`
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
`,hE=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  animation: ${of} 0.35s 0.05s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,mE=w.div`
  position: relative;
  flex: 1;
  max-width: 360px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,gE=w.span`
  position: absolute;
  left: ${({theme:e})=>e.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.text.muted};
  display: flex;
  align-items: center;
  pointer-events: none;
`,yE=w.input`
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
`,xE=w.select`
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
`,vE=w.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  animation: ${of} 0.35s 0.1s ease both;
`,wE=w.table`
  width: 100%;
  border-collapse: collapse;
`,$E=w.thead`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Ko=w.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  text-align: left;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
  white-space: nowrap;
`,bE=w.tbody``,SE=w.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  transition: background-color ${({theme:e})=>e.transitions.fast};
  cursor: pointer;

  &:last-child { border-bottom: none; }

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[50]};
  }
`,Dc=w.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.primary};
  vertical-align: middle;
`,vu=w(Dc)`
  color: ${({theme:e})=>e.text.secondary};
`,Dh={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},kE=w.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=Dh[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=Dh[e])==null?void 0:t.color)??"#374151"}};
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
`,_E={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},EE=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[8]};
  gap: ${({theme:e})=>e.spacing[3]};
  text-align: center;
`,jE=w.div`
  color: ${({theme:e})=>e.colors.neutral[300]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,CE=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,TE=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
  max-width: 300px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,FE=w.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  &:last-child { border-bottom: none; }
`,Xo=w.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
`,RE=Qe`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,Jo=w.div`
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
  animation: ${RE} 1.4s ease infinite;
`,PE=w.div`
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
`,OE=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
`,zE=w.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,Cs=w.button`
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
`,NE=15,AE=({status:e})=>l.jsx(kE,{$status:e,children:_E[e]??e});function LE(){return Array.from({length:5}).map((e,t)=>l.jsxs(FE,{children:[l.jsx(Xo,{children:l.jsx(Jo,{$w:"60%"})}),l.jsx(Xo,{children:l.jsx(Jo,{$w:"80%"})}),l.jsx(Xo,{children:l.jsx(Jo,{$w:"50%"})}),l.jsx(Xo,{children:l.jsx(Jo,{$w:"70%"})}),l.jsx(Xo,{children:l.jsx(Jo,{$w:"40%"})})]},t))}const IE=(e="")=>{const t=e.slice(0,14);return t.length<=2?t:t.length<=5?`${t.slice(0,2)}.${t.slice(2)}`:t.length<=8?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5)}`:t.length<=12?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8)}`:`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8,12)}-${t.slice(12)}`},DE=(e="")=>/^[\d.\-/]+$/.test(e)&&/\d/.test(e),ME=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",BE=e=>({food:"Alimentação",meal:"Refeição",both:"Ambos"})[e]??e??"—";function UE(){const e=Dr(),{hasRole:t}=Mr(),[n,r]=j.useState([]),[o,i]=j.useState({total:0,totalPages:1,currentPage:1}),[s,a]=j.useState(!0),[u,c]=j.useState(""),[d,f]=j.useState(1),[m,$]=j.useState(""),[y,x]=j.useState(""),b=j.useRef(null),g=j.useCallback(async()=>{var k,T,_;a(!0);try{const E=new URLSearchParams({page:d,limit:NE});y&&E.set("search",y),u&&E.set("overall_status",u);const{data:O}=await nt.get(`/clients?${E.toString()}`);r(O.data??[]),i({total:((k=O.pagination)==null?void 0:k.total)??0,totalPages:((T=O.pagination)==null?void 0:T.totalPages)??1,currentPage:((_=O.pagination)==null?void 0:_.currentPage)??1})}catch(E){re.error(rr(E,"Erro ao carregar clientes.")),r([])}finally{a(!1)}},[d,y,u]);j.useEffect(()=>{g()},[g]);const p=k=>{const T=k.target.value,_=T.replace(/\D/g,"");if(DE(T)){const E=IE(_);$(E),h(E)}else T===""?($(""),h("")):($(T),h(T))},h=k=>{b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{x(k),f(1)},400)},v=k=>{c(k.target.value),f(1)};return l.jsxs(l.Fragment,{children:[l.jsxs(uE,{children:[l.jsxs(cE,{children:[l.jsx(dE,{children:"Clientes"}),l.jsx(fE,{children:o.total>0?`${o.total} cliente${o.total!==1?"s":""} cadastrado${o.total!==1?"s":""}`:"Nenhum cliente cadastrado ainda"})]}),t("admin","user")&&l.jsxs(pE,{type:"button",onClick:()=>e("/onboarding"),children:[l.jsx(Hk,{size:16}),"Novo Cliente"]})]}),l.jsxs(hE,{children:[l.jsxs(mE,{children:[l.jsxs(gE,{children:[" ",l.jsx(Bk,{size:15})]}),l.jsx(yE,{type:"text",placeholder:"Buscar por Razão Social ou CNPJ…",style:{paddingLeft:"30px"},value:m,onChange:p})]}),l.jsxs(xE,{value:u,onChange:v,children:[l.jsx("option",{value:"",children:"Todos os status"}),l.jsx("option",{value:"pending",children:"Pendente"}),l.jsx("option",{value:"analysis",children:"Em análise"}),l.jsx("option",{value:"approved",children:"Aprovado"})]})]}),l.jsxs(vE,{children:[l.jsxs(wE,{children:[l.jsx($E,{children:l.jsxs("tr",{children:[l.jsx(Ko,{children:"Razão Social"}),l.jsx(Ko,{children:"CNPJ"}),l.jsx(Ko,{children:"Benefício"}),l.jsx(Ko,{children:"Status"}),l.jsx(Ko,{children:"Cadastro"})]})}),l.jsxs(bE,{children:[s&&l.jsx(LE,{}),!s&&n.map(k=>l.jsxs(SE,{onClick:()=>e(`/clientes/${k.id}`),title:"Ver detalhes",children:[l.jsx(Dc,{children:k.corporate_name}),l.jsx(vu,{children:k.cnpj??"—"}),l.jsx(vu,{children:BE(k.benefit_type)}),l.jsx(Dc,{children:l.jsx(AE,{status:k.overall_status})}),l.jsx(vu,{children:ME(k.createdAt)})]},k.id)),!s&&n.length===0&&l.jsx("tr",{children:l.jsx("td",{colSpan:5,children:l.jsxs(EE,{children:[l.jsx(jE,{children:l.jsx(ex,{size:40})}),l.jsx(CE,{children:"Nenhum cliente encontrado"}),l.jsx(TE,{children:m||u?"Tente ajustar os filtros para ver mais resultados.":'Clique em "Novo Cliente" para iniciar o cadastro.'})]})})})]})]}),!s&&o.totalPages>1&&l.jsxs(PE,{children:[l.jsxs(OE,{children:["Página ",o.currentPage," de ",o.totalPages," ","· ",o.total," registros"]}),l.jsxs(zE,{children:[l.jsx(Cs,{type:"button",onClick:()=>f(k=>Math.max(1,k-1)),disabled:d<=1,"aria-label":"Página anterior",children:l.jsx(Fk,{size:15})}),Array.from({length:o.totalPages},(k,T)=>T+1).filter(k=>k===1||k===o.totalPages||Math.abs(k-d)<=2).reduce((k,T,_,E)=>(_>0&&T-E[_-1]>1&&k.push("…"),k.push(T),k),[]).map((k,T)=>k==="…"?l.jsx(Cs,{disabled:!0,as:"span",children:"…"},`ellipsis-${T}`):l.jsx(Cs,{type:"button",$active:k===d,onClick:()=>f(k),children:k},k)),l.jsx(Cs,{type:"button",onClick:()=>f(k=>Math.min(o.totalPages,k+1)),disabled:d>=o.totalPages,"aria-label":"Próxima página",children:l.jsx(Rk,{size:15})})]})]})]})]})}const VE=Qe`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,WE=Qe`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,ux=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  animation: ${VE} 0.35s ease both;
`,cx=w.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,dx=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,HE=w.button`
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
`,fx=w.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,GE=w.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,qE=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  letter-spacing: 0.04em;
`,YE=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`,fr=w.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Gr=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,qr=w.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,Yr=w.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,px=w.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,ii=w.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,He=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`,Je=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,et=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,QE=w(et)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,Mh={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},Bh={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},Uh=w.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=Mh[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=Mh[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`,KE=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,XE=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`,JE=w.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,ZE=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ej=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;const tj=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,nj=w.div`
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
`,rj=w.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,oj=w.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ij=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,sj=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,aj=w.button`
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
`,lj=w.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,wu=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,$u=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,Qr=w.div`
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
`,uj=w(fr)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,cj=w.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[4]} 0;
`,dj=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length!==14?e:t.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5")},fj=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length===11?t.replace(/^(\d{2})(\d{5})(\d{4})$/,"($1) $2-$3"):t.length===10?t.replace(/^(\d{2})(\d{4})(\d{4})$/,"($1) $2-$3"):e},Vh=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",pj=e=>e==null?"—":Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),hj={food:"Vale Alimentação",meal:"Vale Refeição",both:"Alimentação + Refeição"},mj={company_document:"Documento da Empresa",proof_of_address:"Comprovante de Endereço",bank_account_proof:"Comprovante Bancário",card_machine_proof:"Comprovante de Maquininha"};function gj(){return l.jsxs(ux,{children:[l.jsx(cx,{children:l.jsxs(dx,{children:[l.jsx(Qr,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),l.jsxs(fx,{children:[l.jsx(Qr,{$w:"220px",$h:"28px"}),l.jsx(Qr,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]})}),l.jsx(px,{children:l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:l.jsxs(uj,{children:[l.jsx(Qr,{$w:"40%",$h:"18px"}),l.jsx(cj,{}),l.jsx(ii,{children:Array.from({length:6}).map((e,t)=>l.jsxs(He,{children:[l.jsx(Qr,{$w:"50%",$h:"11px"}),l.jsx(Qr,{$w:"80%",$h:"16px",style:{marginTop:"4px"}})]},t))})]})})})]})}const yj=[{value:"pending",label:"Pendente"},{value:"analysis",label:"Em análise"},{value:"approved",label:"Aprovado"}],Wh={approved:{bg:"#d1fae5",color:"#065f46"},analysis:{bg:"#dbeafe",color:"#1e40af"},pending:{bg:"#fef3c7",color:"#92400e"}};function xj({clientFlagId:e,currentStatus:t,onUpdated:n,onOptimisticUpdate:r}){const[o,i]=j.useState(!1),[s,a]=j.useState(t),u=Wh[s]??Wh.pending;j.useEffect(()=>{a(t)},[t]);const c=async d=>{const f=d.target.value,m=s;if(f!==m){a(f),r(e,f),i(!0);try{await nt.patch(`/client-flags/${e}/status`,{status:f}),re.success("Status da bandeira atualizado."),n()}catch($){a(m),r(e,m),re.error(rr($,"Erro ao atualizar status."))}finally{i(!1)}}};return l.jsx("select",{value:s,onChange:c,disabled:o,style:{height:"28px",padding:"0 28px 0 8px",border:"1.5px solid #e4d9cf",borderRadius:"99px",fontFamily:"inherit",fontSize:"11px",fontWeight:600,backgroundColor:u.bg,color:u.color,cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 8px center"},children:yj.map(d=>l.jsx("option",{value:d.value,children:d.label},d.value))})}function vj(){var me,Te;const{id:e}=Oy(),t=Dr(),{isAdmin:n,isPartner:r,isUser:o,user:i}=Mr(),[s,a]=j.useState(null),[u,c]=j.useState(!0),[d,f]=j.useState(null),m=j.useCallback(async()=>{try{const{data:J}=await nt.get(`/clients/${e}`);console.log(J.data),a(J.data)}catch(J){re.error(rr(J,"Erro ao carregar dados.")),t("/clientes",{replace:!0})}finally{c(!1)}},[e,t]);j.useEffect(()=>{m()},[m]);const $=j.useCallback((J,Ke)=>{a(Oe=>Oe&&{...Oe,clientFlags:Oe.clientFlags.map(Xe=>Xe.id===J?{...Xe,status:Ke}:Xe)})},[]),y=j.useCallback(async()=>{try{const{data:J}=await nt.get(`/clients/${e}`);a(J.data)}catch{}},[e]),x=async J=>{f(J.id);try{const Ke=await nt.get(`/documents/${J.id}/download`,{responseType:"blob"}),Oe=URL.createObjectURL(Ke.data),Xe=document.createElement("a");Xe.href=Oe,Xe.download=J.original_name??`documento-${J.id}`,document.body.appendChild(Xe),Xe.click(),Xe.remove(),URL.revokeObjectURL(Oe)}catch(Ke){re.error(rr(Ke,"Erro no download."))}finally{f(null)}};if(u)return l.jsx(gj,{});if(!s)return null;const{corporate_name:b,trade_name:g,cnpj:p,state_registration:h,phone:v,email:k,protocol:T,benefit_type:_,overall_status:E,notes:O,createdAt:N,address_street:B,address_number:V,address_complement:G,address_neighborhood:Z,address_city:ne,address_state:L,address_zip:I,clientFlags:P=[],documents:D=[],bankAccounts:z=[]}=s,X=!r&&(n||o&&s.created_by===(i==null?void 0:i.id)),W=!r&&(n||o&&s.created_by===(i==null?void 0:i.id)),ce=B||ne,le=[B,V,G].filter(Boolean).join(", "),ye=[Z,ne,L].filter(Boolean).join(" — ");return l.jsxs(ux,{children:[l.jsxs(cx,{children:[l.jsxs(dx,{children:[l.jsxs(HE,{onClick:()=>t("/clientes"),title:"Voltar",children:[l.jsx(H0,{size:18})," Voltar"]}),l.jsxs(fx,{children:[l.jsx(GE,{children:g||b}),l.jsxs(qE,{children:["Protocolo #",T]})]})]}),l.jsxs(YE,{children:[X&&l.jsxs("button",{onClick:()=>t(`/clientes/${e}/editar`),style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 14px",border:"1.5px solid #e4d9cf",borderRadius:"8px",background:"transparent",fontSize:"13px",fontWeight:500,color:"#7a6455",cursor:"pointer"},children:[l.jsx(Dk,{size:14})," Editar"]}),l.jsx(Uh,{$status:E,children:Bh[E]??E})]})]}),l.jsxs(px,{children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l.jsxs(fr,{children:[l.jsxs(Gr,{children:[l.jsx(qr,{children:l.jsx(q0,{size:18})}),l.jsx(Yr,{children:"Dados da Empresa"})]}),l.jsxs(ii,{children:[l.jsxs(He,{children:[l.jsx(Je,{children:"Razão Social"}),l.jsx(et,{children:b||"—"})]}),!r&&l.jsxs(He,{children:[l.jsx(Je,{children:"Nome Fantasia"}),l.jsx(et,{children:g||"—"})]}),l.jsxs(He,{children:[l.jsx(Je,{children:"CNPJ"}),l.jsx(et,{children:dj(p)})]}),!r&&l.jsxs(He,{children:[l.jsx(Je,{children:"Inscrição Estadual"}),l.jsx(et,{children:h||"—"})]}),l.jsxs(He,{children:[l.jsx(Je,{children:"Telefone"}),l.jsx(et,{children:fj(v)})]}),!r&&l.jsxs(He,{children:[l.jsx(Je,{children:"E-mail"}),l.jsx(et,{children:k||"—"})]}),l.jsxs(He,{children:[l.jsx(Je,{children:"Tipo de Benefício"}),l.jsx(et,{children:hj[_]??_??"—"})]}),l.jsxs(He,{children:[l.jsx(Je,{children:"Cadastrado em"}),l.jsx(et,{children:Vh(N)})]}),!r&&O&&l.jsxs(He,{$span:!0,children:[l.jsx(Je,{children:"Observações Internas"}),l.jsx(QE,{children:O})]})]})]}),l.jsxs(fr,{children:[l.jsxs(Gr,{children:[l.jsx(qr,{children:l.jsx(Z0,{size:18})}),l.jsx(Yr,{children:"Endereço"})]}),ce?l.jsxs(ii,{$cols:2,children:[l.jsxs(He,{$span:!0,children:[l.jsx(Je,{children:"Logradouro"}),l.jsx(et,{children:le||"—"})]}),l.jsxs(He,{children:[l.jsx(Je,{children:"Bairro / Cidade / UF"}),l.jsx(et,{children:ye||"—"})]}),l.jsxs(He,{children:[l.jsx(Je,{children:"CEP"}),l.jsx(et,{children:I||"—"})]})]}):l.jsx(wu,{children:l.jsx($u,{children:"Endereço não informado."})})]}),!r&&l.jsxs(fr,{children:[l.jsxs(Gr,{children:[l.jsx(qr,{children:l.jsx(Nc,{size:18})}),l.jsx(Yr,{children:"Documentos"})]}),D.length>0?l.jsx(tj,{children:D.map(J=>l.jsxs(nj,{children:[l.jsx(rj,{children:l.jsx(Nc,{size:16})}),l.jsxs(oj,{children:[l.jsx(ij,{children:J.original_name||"Documento"}),l.jsx(sj,{children:mj[J.document_type]??J.document_type})]}),l.jsx(aj,{onClick:()=>x(J),disabled:d===J.id,children:d===J.id?l.jsx(Ak,{size:14,className:"animate-spin"}):l.jsx(zk,{size:14})})]},J.id))}):l.jsx(wu,{children:l.jsx($u,{children:"Sem documentos."})})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l.jsxs(fr,{children:[l.jsxs(Gr,{children:[l.jsx(qr,{children:l.jsx(K0,{size:18})}),l.jsx(Yr,{children:"Bandeiras"})]}),l.jsx(KE,{children:P.map(J=>{var Ke;return l.jsxs(XE,{children:[l.jsxs(JE,{children:[l.jsx(ZE,{children:((Ke=J.flag)==null?void 0:Ke.name)||"Bandeira"}),l.jsx(ej,{children:J.origin})]}),W?l.jsx(xj,{clientFlagId:J.id,currentStatus:J.status,onUpdated:y,onOptimisticUpdate:$}):l.jsx(Uh,{$status:J.status,style:{fontSize:"10px",padding:"2px 8px"},children:Bh[J.status]??J.status})]},J.id)})})]}),!r&&l.jsxs(fr,{children:[l.jsxs(Gr,{children:[l.jsx(qr,{children:l.jsx(X0,{size:18})}),l.jsx(Yr,{children:"Dados Bancários"})]}),z.length>0?z.map(J=>l.jsx(lj,{children:l.jsxs(ii,{$cols:1,children:[l.jsxs(He,{children:[l.jsx(Je,{children:"Banco"}),l.jsx(et,{children:J.bank_name})]}),l.jsxs(He,{children:[l.jsx(Je,{children:"Agência/Conta"}),l.jsxs(et,{children:[J.agency,J.agency_digit?`-${J.agency_digit}`:""," / ",J.account,J.account_digit?`-${J.account_digit}`:""]})]})]})},J.id)):l.jsx(wu,{children:l.jsx($u,{children:"Sem dados bancários."})})]}),s.sales&&s.sales.length>0&&l.jsxs(fr,{children:[l.jsxs(Gr,{children:[l.jsx(qr,{children:l.jsx(Ok,{size:18})}),l.jsx(Yr,{children:"Plano Contratado"})]}),l.jsxs(ii,{$cols:1,children:[l.jsxs(He,{children:[l.jsx(Je,{children:"Nome do Plano"}),l.jsx(et,{children:((me=s.sales[0])==null?void 0:me.plan_name)||"—"})]}),l.jsxs(He,{children:[l.jsx(Je,{children:"Valor"}),l.jsx(et,{children:pj((Te=s.sales[0])==null?void 0:Te.total_value)})]}),l.jsxs(He,{children:[l.jsx(Je,{children:"Data da Venda"}),l.jsx(et,{children:Vh(s.sales[0].createdAt)})]})]})]})]})]}),l.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } } .animate-spin { animation: spin 1s linear infinite; }"})]})}const Hh=(e,t,n)=>{if(e&&"reportValidity"in e){const r=Y(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},hx=(e,t)=>{for(const n in t.fields){const r=t.fields[n];r&&r.ref&&"reportValidity"in r.ref?Hh(r.ref,n,e):r&&r.refs&&r.refs.forEach(o=>Hh(o,n,e))}},wj=(e,t)=>{t.shouldUseNativeValidation&&hx(e,t);const n={};for(const r in e){const o=Y(t.fields,r),i=Object.assign(e[r]||{},{ref:o&&o.ref});if($j(t.names||Object.keys(e),r)){const s=Object.assign({},Y(n,r));he(s,"root",i),he(n,r,s)}else he(n,r,i)}return n},$j=(e,t)=>{const n=Gh(t);return e.some(r=>Gh(r).match(`^${n}\\.\\d+`))};function Gh(e){return e.replace(/\]|\[/g,"")}function bj(e,t,n){return n===void 0&&(n={}),function(r,o,i){try{return Promise.resolve(function(s,a){try{var u=(t!=null&&t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:o}))).then(function(c){return i.shouldUseNativeValidation&&hx({},i),{values:n.raw?Object.assign({},r):c,errors:{}}}))}catch(c){return a(c)}return u&&u.then?u.then(void 0,a):u}(0,function(s){if(!s.inner)throw s;return{values:{},errors:wj((a=s,u=!i.shouldUseNativeValidation&&i.criteriaMode==="all",(a.inner||[]).reduce(function(c,d){if(c[d.path]||(c[d.path]={message:d.message,type:d.type}),u){var f=c[d.path].types,m=f&&f[d.type];c[d.path]=nx(d.path,u,c,d.type,m?[].concat(m,d.message):d.message)}return c},{})),i)};var a,u}))}catch(s){return Promise.reject(s)}}}function Do(e){this._maxSize=e,this.clear()}Do.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Do.prototype.get=function(e){return this._values[e]};Do.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var Sj=/[^.^\]^[]+|(?=\[\]|\.\.)/g,mx=/^\d+$/,kj=/^\d/,_j=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Ej=/^\s*(['"]?)(.*?)(\1)\s*$/,sf=512,qh=new Do(sf);new Do(sf);var Yh=new Do(sf),Er={split:Mc,normalizePath:Qh,getter:function(e,t){var n=Qh(e);return Yh.get(e)||Yh.set(e,function(o){for(var i=0,s=n.length;i<s;)if(o!=null||!t)o=o[n[i++]];else return;return o})},join:function(e){return e.reduce(function(t,n){return t+(af(n)||mx.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){jj(Array.isArray(e)?e:Mc(e),t,n)}};function Qh(e){return qh.get(e)||qh.set(e,Mc(e).map(function(t){return t.replace(Ej,"$2")}))}function Mc(e){return e.match(Sj)||[""]}function jj(e,t,n){var r=e.length,o,i,s,a;for(i=0;i<r;i++)o=e[i],o&&(Fj(o)&&(o='"'+o+'"'),a=af(o),s=!a&&/^\d+$/.test(o),t.call(n,o,a,s,i,e))}function af(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function Cj(e){return e.match(kj)&&!e.match(mx)}function Tj(e){return _j.test(e)}function Fj(e){return!af(e)&&(Cj(e)||Tj(e))}const Rj=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,gx=e=>e.match(Rj)||[],Pj=(e,t)=>gx(e).join(t).toLowerCase(),Oj=e=>gx(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),zj=e=>Pj(e,"_");var bu={camelCase:Oj,snakeCase:zj},lf={exports:{}};lf.exports=function(e){return yx(Nj(e),e)};lf.exports.array=yx;function yx(e,t){var n=e.length,r=new Array(n),o={},i=n,s=Aj(t),a=Lj(e);for(t.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)o[i]||u(e[i],i,new Set);return r;function u(c,d,f){if(f.has(c)){var m;try{m=", node was:"+JSON.stringify(c)}catch{m=""}throw new Error("Cyclic dependency"+m)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!o[d]){o[d]=!0;var $=s.get(c)||new Set;if($=Array.from($),d=$.length){f.add(c);do{var y=$[--d];u(y,a.get(y),f)}while(d);f.delete(c)}r[--n]=c}}}function Nj(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var o=e[n];t.add(o[0]),t.add(o[1])}return Array.from(t)}function Aj(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var o=e[n];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}function Lj(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var Ij=lf.exports;const Dj=pm(Ij),Mj=Object.prototype.toString,Bj=Error.prototype.toString,Uj=RegExp.prototype.toString,Vj=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",Wj=/^Symbol\((.*)\)(.*)$/;function Hj(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Kh(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return Hj(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return Vj.call(e).replace(Wj,"Symbol($1)");const r=Mj.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+Bj.call(e)+"]":r==="RegExp"?Uj.call(e):null}function er(e,t){let n=Kh(e,t);return n!==null?n:JSON.stringify(e,function(r,o){let i=Kh(this[r],t);return i!==null?i:o},2)}function xx(e){return e==null?[]:[].concat(e)}let vx,wx,$x,Gj=/\$\{\s*(\w+)\s*\}/g;vx=Symbol.toStringTag;class Xh{constructor(t,n,r,o){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[vx]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=o,this.errors=[],this.inner=[],xx(t).forEach(i=>{if(ht.isError(i)){this.errors.push(...i.errors);const s=i.inner.length?i.inner:[i];this.inner.push(...s)}else this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}wx=Symbol.hasInstance;$x=Symbol.toStringTag;class ht extends Error{static formatError(t,n){const r=n.label||n.path||"this";return n=Object.assign({},n,{path:r,originalPath:n.path}),typeof t=="string"?t.replace(Gj,(o,i)=>er(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,o,i){const s=new Xh(t,n,r,o);if(i)return s;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[$x]="Error",this.name=s.name,this.message=s.message,this.type=s.type,this.value=s.value,this.path=s.path,this.errors=s.errors,this.inner=s.inner,Error.captureStackTrace&&Error.captureStackTrace(this,ht)}static[wx](t){return Xh[Symbol.hasInstance](t)||super[Symbol.hasInstance](t)}}let ln={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const o=r!=null&&r!==n?` (cast from the value \`${er(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${er(n,!0)}\``+o:`${e} must match the configured type. The validated value was: \`${er(n,!0)}\``+o}},wt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},qj={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Bc={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},Yj={isValue:"${path} field must be ${value}"},oa={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},Qj={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Kj={notType:e=>{const{path:t,value:n,spec:r}=e,o=r.types.length;if(Array.isArray(n)){if(n.length<o)return`${t} tuple value has too few items, expected a length of ${o} but got ${n.length} for value: \`${er(n,!0)}\``;if(n.length>o)return`${t} tuple value has too many items, expected a length of ${o} but got ${n.length} for value: \`${er(n,!0)}\``}return ht.formatError(ln.notType,e)}};Object.assign(Object.create(null),{mixed:ln,string:wt,number:qj,date:Bc,object:oa,array:Qj,boolean:Yj,tuple:Kj});const uf=e=>e&&e.__isYupSchema__;class Va{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:o,otherwise:i}=n,s=typeof r=="function"?r:(...a)=>a.every(u=>u===r);return new Va(t,(a,u)=>{var c;let d=s(...a)?o:i;return(c=d==null?void 0:d(u))!=null?c:u})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),o=this.fn(r,t,n);if(o===void 0||o===t)return t;if(!uf(o))throw new TypeError("conditions must return a schema object");return o.resolve(n)}}const Ts={context:"$",value:"."};class Br{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ts.context,this.isValue=this.key[0]===Ts.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Ts.context:this.isValue?Ts.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Er.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let o=this.isContext?r:this.isValue?t:n;return this.getter&&(o=this.getter(o||{})),this.map&&(o=this.map(o)),o}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Br.prototype.__isYupRef=!0;const $r=e=>e==null;function Kr(e){function t({value:n,path:r="",options:o,originalValue:i,schema:s},a,u){const{name:c,test:d,params:f,message:m,skipAbsent:$}=e;let{parent:y,context:x,abortEarly:b=s.spec.abortEarly,disableStackTrace:g=s.spec.disableStackTrace}=o;const p={value:n,parent:y,context:x};function h(B={}){const V=bx(Object.assign({value:n,originalValue:i,label:s.spec.label,path:B.path||r,spec:s.spec,disableStackTrace:B.disableStackTrace||g},f,B.params),p),G=new ht(ht.formatError(B.message||m,V),n,V.path,B.type||c,V.disableStackTrace);return G.params=V,G}const v=b?a:u;let k={path:r,parent:y,type:c,from:o.from,createError:h,resolve(B){return Sx(B,p)},options:o,originalValue:i,schema:s};const T=B=>{ht.isError(B)?v(B):B?u(null):v(h())},_=B=>{ht.isError(B)?v(B):a(B)};if($&&$r(n))return T(!0);let O;try{var N;if(O=d.call(k,n,k),typeof((N=O)==null?void 0:N.then)=="function"){if(o.sync)throw new Error(`Validation test of type: "${k.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(O).then(T,_)}}catch(B){_(B);return}T(O)}return t.OPTIONS=e,t}function bx(e,t){if(!e)return e;for(const n of Object.keys(e))e[n]=Sx(e[n],t);return e}function Sx(e,t){return Br.isRef(e)?e.getValue(t.value,t.parent,t.context):e}function Xj(e,t,n,r=n){let o,i,s;return t?(Er.forEach(t,(a,u,c)=>{let d=u?a.slice(1,a.length-1):a;e=e.resolve({context:r,parent:o,value:n});let f=e.type==="tuple",m=c?parseInt(d,10):0;if(e.innerType||f){if(f&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(n&&m>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);o=n,n=n&&n[m],e=f?e.spec.types[m]:e.innerType}if(!c){if(!e.fields||!e.fields[d])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);o=n,n=n&&n[d],e=e.fields[d]}i=d,s=u?"["+a+"]":"."+a}),{schema:e,parent:o,parentPath:i}):{parent:o,parentPath:t,schema:e}}class Wa extends Set{describe(){const t=[];for(const n of this.values())t.push(Br.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Wa(this.values())}merge(t,n){const r=this.clone();return t.forEach(o=>r.add(o)),n.forEach(o=>r.delete(o)),r}}function fo(e,t=new Map){if(uf(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=fo(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,o]of e.entries())n.set(r,fo(o,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(fo(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,o]of Object.entries(e))n[r]=fo(o,t)}else throw Error(`Unable to clone ${e}`);return n}function Jj(e){if(!(e!=null&&e.length))return;const t=[];let n="",r=!1,o=!1;for(let i=0;i<e.length;i++){const s=e[i];if(s==="["&&!o){n&&(t.push(...n.split(".").filter(Boolean)),n=""),r=!0;continue}if(s==="]"&&!o){n&&(/^\d+$/.test(n)?t.push(n):t.push(n.replace(/^"|"$/g,"")),n=""),r=!1;continue}if(s==='"'){o=!o;continue}if(s==="."&&!r&&!o){n&&(t.push(n),n="");continue}n+=s}return n&&t.push(...n.split(".").filter(Boolean)),t}function Zj(e,t){const n=t?`${t}.${e.path}`:e.path;return e.errors.map(r=>({message:r,path:Jj(n)}))}function kx(e,t){var n;if(!((n=e.inner)!=null&&n.length)&&e.errors.length)return Zj(e,t);const r=t?`${t}.${e.path}`:e.path;return e.inner.flatMap(o=>kx(o,r))}class fn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Wa,this._blacklist=new Wa,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(ln.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=fo(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const o=Object.assign({},n.spec,r.spec);return r.spec=o,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(s=>{i.test(s.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((o,i)=>i.resolve(o,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,o,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(o=t.recursive)!=null?o:this.spec.recursive,disableStackTrace:(i=t.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({},n,{value:t})),o=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(o&&$r(i))return i;let s=er(t),a=er(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${s} 
`+(a!==s?`result of cast: ${a}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((o,i)=>i.call(this,o,t,this,n),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,o){let{path:i,originalValue:s=t,strict:a=this.spec.strict}=n,u=t;a||(u=this._cast(u,Object.assign({assert:!1},n)));let c=[];for(let d of Object.values(this.internalTests))d&&c.push(d);this.runTests({path:i,value:u,originalValue:s,options:n,tests:c},r,d=>{if(d.length)return o(d,u);this.runTests({path:i,value:u,originalValue:s,options:n,tests:this.tests},r,o)})}runTests(t,n,r){let o=!1,{tests:i,value:s,originalValue:a,path:u,options:c}=t,d=x=>{o||(o=!0,n(x,s))},f=x=>{o||(o=!0,r(x,s))},m=i.length,$=[];if(!m)return f([]);let y={value:s,originalValue:a,path:u,options:c,schema:this};for(let x=0;x<i.length;x++){const b=i[x];b(y,d,function(p){p&&(Array.isArray(p)?$.push(...p):$.push(p)),--m<=0&&f($)})}}asNestedTest({key:t,index:n,parent:r,parentPath:o,originalParent:i,options:s}){const a=t??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof a=="number";let c=r[a];const d=Object.assign({},s,{strict:!0,parent:r,value:c,originalValue:i[a],key:void 0,[u?"index":"key"]:a,path:u||a.includes(".")?`${o||""}[${u?a:`"${a}"`}]`:(o?`${o}.`:"")+t});return(f,m,$)=>this.resolve(d)._validate(c,d,m,$)}validate(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return new Promise((s,a)=>o._validate(t,n,(u,c)=>{ht.isError(u)&&(u.value=c),a(u)},(u,c)=>{u.length?a(new ht(u,c,void 0,void 0,i)):s(c)}))}validateSync(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i,s=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return o._validate(t,Object.assign({},n,{sync:!0}),(a,u)=>{throw ht.isError(a)&&(a.value=u),a},(a,u)=>{if(a.length)throw new ht(a,t,void 0,void 0,s);i=u}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(ht.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(ht.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):fo(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Kr({message:n,name:"nullable",test(o){return o===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Kr({message:n,name:"optionality",test(o){return o===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=ln.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=ln.notNull){return this.nullability(!1,t)}required(t=ln.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=ln.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),o=Kr(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(s=>!(s.OPTIONS.name===n.name&&(i||s.OPTIONS.test===o.OPTIONS.test))),r.tests.push(o),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),o=xx(t).map(i=>new Br(i));return o.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new Va(o,n):Va.fromOptions(o,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Kr({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=ln.oneOf){let r=this.clone();return t.forEach(o=>{r._whitelist.add(o),r._blacklist.delete(o)}),r.internalTests.whiteList=Kr({message:n,name:"oneOf",skipAbsent:!0,test(o){let i=this.schema._whitelist,s=i.resolveAll(this.resolve);return s.includes(o)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:s}})}}),r}notOneOf(t,n=ln.notOneOf){let r=this.clone();return t.forEach(o=>{r._blacklist.add(o),r._whitelist.delete(o)}),r.internalTests.blacklist=Kr({message:n,name:"notOneOf",test(o){let i=this.schema._blacklist,s=i.resolveAll(this.resolve);return s.includes(o)?this.createError({params:{values:Array.from(i).join(", "),resolved:s}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:o,optional:i,nullable:s}=n.spec;return{meta:o,label:r,optional:i,nullable:s,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.filter((u,c,d)=>d.findIndex(f=>f.OPTIONS.name===u.OPTIONS.name)===c).map(u=>{const c=u.OPTIONS.params&&t?bx(Object.assign({},u.OPTIONS.params),t):u.OPTIONS.params;return{name:u.OPTIONS.name,params:c}})}}get"~standard"(){const t=this;return{version:1,vendor:"yup",async validate(r){try{return{value:await t.validate(r,{abortEarly:!1})}}catch(o){if(o instanceof ht)return{issues:kx(o)};throw o}}}}}fn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])fn.prototype[`${e}At`]=function(t,n,r={}){const{parent:o,parentPath:i,schema:s}=Xj(this,t,n,r.context);return s[e](o&&o[i],Object.assign({},r,{parent:o,path:t}))};for(const e of["equals","is"])fn.prototype[e]=fn.prototype.oneOf;for(const e of["not","nope"])fn.prototype[e]=fn.prototype.notOneOf;const eC=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function tC(e){const t=Uc(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;if(t.z===void 0&&t.plusMinus===void 0)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return t.z!=="Z"&&t.plusMinus!==void 0&&(n=t.hourOffset*60+t.minuteOffset,t.plusMinus==="+"&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}function Uc(e){var t,n;const r=eC.exec(e);return r?{year:gn(r[1]),month:gn(r[2],1)-1,day:gn(r[3],1),hour:gn(r[4]),minute:gn(r[5]),second:gn(r[6]),millisecond:r[7]?gn(r[7].substring(0,3)):0,precision:(t=(n=r[7])==null?void 0:n.length)!=null?t:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:gn(r[10]),minuteOffset:gn(r[11])}:null}function gn(e,t=0){return Number(e)||t}let nC=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,rC=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,oC=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,iC="^\\d{4}-\\d{2}-\\d{2}",sC="\\d{2}:\\d{2}:\\d{2}",aC="(([+-]\\d{2}(:?\\d{2})?)|Z)",lC=new RegExp(`${iC}T${sC}(\\.\\d+)?${aC}$`),uC=e=>$r(e)||e===e.trim(),cC={}.toString();function Ae(){return new _x}class _x extends fn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n)=>{if(!this.spec.coerce||this.isType(t)||Array.isArray(t))return t;const r=t!=null&&t.toString?t.toString():t;return r===cC?t:r})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||ln.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=wt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=wt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=wt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,o,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:o,name:i}=n:o=n),this.test({name:i||"matches",message:o||wt.matches,params:{regex:t},skipAbsent:!0,test:s=>s===""&&r||s.search(t)!==-1})}email(t=wt.email){return this.matches(nC,{name:"email",message:t,excludeEmptyString:!0})}url(t=wt.url){return this.matches(rC,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=wt.uuid){return this.matches(oC,{name:"uuid",message:t,excludeEmptyString:!1})}datetime(t){let n="",r,o;return t&&(typeof t=="object"?{message:n="",allowOffset:r=!1,precision:o=void 0}=t:n=t),this.matches(lC,{name:"datetime",message:n||wt.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||wt.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:i=>{if(!i||r)return!0;const s=Uc(i);return s?!!s.z:!1}}).test({name:"datetime_precision",message:n||wt.datetime_precision,params:{precision:o},skipAbsent:!0,test:i=>{if(!i||o==null)return!0;const s=Uc(i);return s?s.precision===o:!1}})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=wt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:uC})}lowercase(t=wt.lowercase){return this.transform(n=>$r(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>$r(n)||n===n.toLowerCase()})}uppercase(t=wt.uppercase){return this.transform(n=>$r(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>$r(n)||n===n.toUpperCase()})}}Ae.prototype=_x.prototype;let dC=new Date(""),fC=e=>Object.prototype.toString.call(e)==="[object Date]";class cf extends fn{constructor(){super({type:"date",check(t){return fC(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n)=>!this.spec.coerce||this.isType(t)||t===null?t:(t=tC(t),isNaN(t)?cf.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Br.isRef(t))r=t;else{let o=this.cast(t);if(!this._typeCheck(o))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=o}return r}min(t,n=Bc.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o>=this.resolve(r)}})}max(t,n=Bc.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(o){return o<=this.resolve(r)}})}}cf.INVALID_DATE=dC;function pC(e,t=[]){let n=[],r=new Set,o=new Set(t.map(([s,a])=>`${s}-${a}`));function i(s,a){let u=Er.split(s)[0];r.add(u),o.has(`${a}-${u}`)||n.push([a,u])}for(const s of Object.keys(e)){let a=e[s];r.add(s),Br.isRef(a)&&a.isSibling?i(a.path,s):uf(a)&&"deps"in a&&a.deps.forEach(u=>i(u,s))}return Dj.array(Array.from(r),n).reverse()}function Jh(e,t){let n=1/0;return e.some((r,o)=>{var i;if((i=t.path)!=null&&i.includes(r))return n=o,!0}),n}function Ex(e){return(t,n)=>Jh(e,t)-Jh(e,n)}const hC=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function ia(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=ia(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=ia(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(ia)}):"optional"in e?e.optional():e}const mC=(e,t)=>{const n=[...Er.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),o=Er.getter(Er.join(n),!0)(e);return!!(o&&r in o)};let Zh=e=>Object.prototype.toString.call(e)==="[object Object]";function em(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const gC=Ex([]);function jx(e){return new Cx(e)}class Cx extends fn{constructor(t){super({type:"object",check(n){return Zh(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=gC,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let o=super._cast(t,n);if(o===void 0)return this.getDefault(n);if(!this._typeCheck(o))return o;let i=this.fields,s=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(o).filter(f=>!this._nodes.includes(f))),u={},c=Object.assign({},n,{parent:u,__validating:n.__validating||!1}),d=!1;for(const f of a){let m=i[f],$=f in o,y=o[f];if(m){let x;c.path=(n.path?`${n.path}.`:"")+f,m=m.resolve({value:y,context:n.context,parent:u});let b=m instanceof fn?m.spec:void 0,g=b==null?void 0:b.strict;if(b!=null&&b.strip){d=d||f in o;continue}x=!n.__validating||!g?m.cast(y,c):y,x!==void 0&&(u[f]=x)}else $&&!s&&(u[f]=y);($!==f in u||u[f]!==y)&&(d=!0)}return d?u:o}_validate(t,n={},r,o){let{from:i=[],originalValue:s=t,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:s},...i],n.__validating=!0,n.originalValue=s,super._validate(t,n,r,(u,c)=>{if(!a||!Zh(c)){o(u,c);return}s=s||c;let d=[];for(let f of this._nodes){let m=this.fields[f];!m||Br.isRef(m)||d.push(m.asNestedTest({options:n,key:f,parent:c,parentPath:n.path,originalParent:s}))}this.runTests({tests:d,value:c,originalValue:s,options:n},r,f=>{o(f.sort(this._sortErrors).concat(u),c)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[o,i]of Object.entries(this.fields)){const s=r[o];r[o]=s===void 0?i:s}return n.withMutation(o=>o.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var o;const i=this.fields[r];let s=t;(o=s)!=null&&o.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[r]})),n[r]=i&&"getDefault"in i?i.getDefault(s):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=pC(t,n),r._sortErrors=Ex(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let o=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),o=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),o)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return ia(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,o])=>t.includes(r)&&t.includes(o)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let o=Er.getter(t,!0);return this.transform(i=>{if(!i)return i;let s=i;return mC(i,t)&&(s=Object.assign({},i),r||delete s[t],s[n]=o(i)),s})}json(){return this.transform(hC)}exact(t){return this.test({name:"exact",exclusive:!0,message:t||oa.exact,test(n){if(n==null)return!0;const r=em(this.schema,n);return r.length===0||this.createError({params:{properties:r.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(t=!0,n=oa.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(o){if(o==null)return!0;const i=em(this.schema,o);return!t||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=oa.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const o of Object.keys(n))r[t(o)]=n[o];return r})}camelCase(){return this.transformKeys(bu.camelCase)}snakeCase(){return this.transformKeys(bu.snakeCase)}constantCase(){return this.transformKeys(t=>bu.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[i,s]of Object.entries(n.fields)){var o;let a=t;(o=a)!=null&&o.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),r.fields[i]=s.describe(a)}return r}}jx.prototype=Cx.prototype;const yC=Qe`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,xC=Qe`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,Tx=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px; /* espaço para o footer fixo */
  animation: ${yC} 0.3s ease both;
`,Fx=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,vC=w.button`
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
`,Rx=w.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,wC=w.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,$C=w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,si=w.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Fs=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Rs=w.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,Ps=w.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,$i=w.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,tm=w.div`
  grid-column: 1 / -1;
`,$e=w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Se=w.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Os=w.span`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.neutral[400]};
  flex-shrink: 0;
`,df=({theme:e,$hasError:t})=>`
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
`,vt=w.input`
  ${({theme:e,$hasError:t})=>df({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,zs=w.select`
  ${({theme:e,$hasError:t})=>df({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,bC=w.textarea`
  ${({theme:e,$hasError:t})=>df({theme:e,$hasError:t})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,Ns=w.div`
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
`,As=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[400]};
  font-style: italic;
`,Ze=w.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,Jr=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,SC=w.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,kC=w.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,_C=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,EC=w.div`
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
`,jC=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,CC=w.label`
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
`,TC=w.div`
  color: ${({theme:e,$hasFile:t})=>t?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,FC=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,RC=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,nm=w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,rm=w.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,om=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,im=w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,PC=w.button`
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
`,OC=w.div`
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
`,zC=w.button`
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
`,NC=w.button`
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
`,AC=w.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,ur=w.div`
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
  animation: ${xC} 1.4s ease infinite;
`,sm=w(si)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,am=w.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`;w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`;w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`;w.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`;w.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`;w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`;w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`;w.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;w.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`;w.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;w.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;w.button`
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
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`;w.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`;w.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  /* Span full width dentro do grid (ex: campo "notes") */
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`;w.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`;const LC=w.span`
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
`;w(LC)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;const lm={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}};w.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=lm[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=lm[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`;const IC=jx({trade_name:Ae().max(200,"Nome fantasia deve ter no máximo 200 caracteres.").nullable().transform(e=>e||null),phone:Ae().max(20,"Telefone deve ter no máximo 20 caracteres.").nullable().transform(e=>e||null),benefit_type:Ae().oneOf(["food","meal","both"],"Selecione um tipo de benefício válido.").required("O tipo de benefício é obrigatório."),notes:Ae().nullable().transform(e=>e||null),address_street:Ae().max(255,"Logradouro deve ter no máximo 255 caracteres.").nullable().transform(e=>e||null),address_number:Ae().max(10,"Número deve ter no máximo 10 caracteres.").nullable().transform(e=>e||null),address_complement:Ae().max(100,"Complemento deve ter no máximo 100 caracteres.").nullable().transform(e=>e||null),address_neighborhood:Ae().max(100,"Bairro deve ter no máximo 100 caracteres.").nullable().transform(e=>e||null),address_city:Ae().max(100,"Cidade deve ter no máximo 100 caracteres.").nullable().transform(e=>e||null),address_state:Ae().max(2,"UF deve ter 2 caracteres.").nullable().transform(e=>e||null),address_zip:Ae().test("cep-valido","CEP inválido. Use o formato 00000-000.",e=>{if(!e)return!0;const t=e.replace(/\D/g,"");return t.length===0||t.length===8}).nullable().transform(e=>e||null),partner_id:Ae().nullable().transform(e=>e||null),bank_bank_name:Ae().max(100,"Nome do banco deve ter no máximo 100 caracteres.").nullable().transform(e=>e||null),bank_bank_code:Ae().max(10,"Código do banco deve ter no máximo 10 caracteres.").nullable().transform(e=>e||null),bank_agency:Ae().max(10,"Agência deve ter no máximo 10 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Agência é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_agency_digit:Ae().max(2,"Dígito da agência deve ter no máximo 2 caracteres.").nullable().transform(e=>e||null),bank_account:Ae().max(20,"Conta deve ter no máximo 20 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Conta é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_account_digit:Ae().max(2,"Dígito da conta deve ter no máximo 2 caracteres.").nullable().transform(e=>e||null),bank_account_type:Ae().oneOf(["checking","savings"],"Tipo de conta inválido.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Tipo de conta é obrigatório."),otherwise:e=>e.nullable().transform(t=>t||null)})}),DC=[{key:"contrato",fieldName:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",multiple:!1},{key:"proof_of_address",fieldName:"documentos",type:"proof_of_address",label:"Comprovante de Endereço",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",multiple:!1,docIndex:0},{key:"bank_account_proof",fieldName:"documentos",type:"bank_account_proof",label:"Comprovante Bancário",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",multiple:!1,docIndex:1},{key:"card_machine_proof",fieldName:"documentos",type:"card_machine_proof",label:"Comprovante de Maquininha",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",multiple:!1,docIndex:2}],MC=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],BC=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],UC=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"];let Su=null;const um=(e="")=>{const t=e.replace(/\D/g,"").slice(0,11);return t.length<=2?`(${t}`:t.length<=6?`(${t.slice(0,2)}) ${t.slice(2)}`:t.length<=10?`(${t.slice(0,2)}) ${t.slice(2,6)}-${t.slice(6)}`:`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7)}`},cm=(e="")=>{const t=e.replace(/\D/g,"").slice(0,8);return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5)}`},dm=(e="")=>e.replace(/\D/g,""),fm=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function VC(){const e=t=>Array.from({length:t}).map((n,r)=>l.jsxs($e,{children:[l.jsx(ur,{$w:"45%",$h:"11px"}),l.jsx(ur,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},r));return l.jsxs(Tx,{children:[l.jsxs(Fx,{children:[l.jsx(ur,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),l.jsxs(Rx,{children:[l.jsx(ur,{$w:"200px",$h:"28px"}),l.jsx(ur,{$w:"140px",$h:"14px",style:{marginTop:"4px"}})]})]}),l.jsxs(sm,{children:[l.jsx(ur,{$w:"35%",$h:"20px"}),l.jsx(am,{}),l.jsx($i,{children:e(6)})]}),l.jsxs(sm,{children:[l.jsx(ur,{$w:"30%",$h:"20px"}),l.jsx(am,{}),l.jsx($i,{children:e(4)})]})]})}function WC({slot:e,existingDoc:t,selectedFile:n,onFileSelect:r,onClearFile:o,disabled:i}){const s=j.useRef(null),a=!!n,u=!!t;return l.jsxs(EC,{$hasFile:a,children:[l.jsx(jC,{children:e.label}),a?l.jsxs(nm,{children:[l.jsx(mh,{size:16,style:{color:"#B45A14",flexShrink:0}}),l.jsxs(rm,{children:[l.jsx(om,{children:n.name}),l.jsxs(im,{children:[fm(n.size)," · Novo arquivo"]})]}),l.jsx(PC,{type:"button",onClick:()=>o(e.key),disabled:i,title:"Remover seleção",children:l.jsx(Vk,{size:13})})]}):u?l.jsxs(nm,{children:[l.jsx(mh,{size:16,style:{color:"#7a6455",flexShrink:0}}),l.jsxs(rm,{children:[l.jsx(om,{children:t.original_name??"Documento existente"}),l.jsxs(im,{children:[t.file_size?fm(t.file_size)+" · ":"","Substituir clicando abaixo"]})]})]}):null,l.jsxs(CC,{htmlFor:`doc-input-${e.key}`,children:[l.jsx(TC,{$hasFile:a,children:l.jsx(Wk,{size:22})}),l.jsx(FC,{children:a?"Trocar arquivo":u?"Substituir documento":"Selecionar arquivo"}),l.jsx(RC,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),l.jsx("input",{ref:s,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:i,onChange:c=>{var f;const d=(f=c.target.files)==null?void 0:f[0];if(d){if(d.size>3*1024*1024){re.error("Arquivo muito grande. O limite é 3 MB.");return}r(e.key,d),c.target.value=""}}}),l.jsx(Jr,{children:e.hint})]})}function HC(){const{id:e}=Oy(),t=Dr(),[n,r]=j.useState(!0),[o,i]=j.useState(!1),[s,a]=j.useState(""),[u,c]=j.useState([]),[d,f]=j.useState(!1),[m,$]=j.useState({}),[y,x]=j.useState({}),[b,g]=j.useState({corporate_name:"",cnpj:"",email:"",state_registration:""}),{register:p,handleSubmit:h,reset:v,setValue:k,watch:T,formState:{errors:_,isDirty:E}}=rf({resolver:bj(IC),defaultValues:{trade_name:"",phone:"",benefit_type:"food",notes:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",partner_id:"",bank_bank_name:"",bank_bank_code:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}}),N=!!T("bank_bank_name"),B=j.useCallback(async()=>{var I,P;r(!0);try{const{data:D}=await nt.get(`/clients/${e}`),z=D.data;a(z.trade_name||z.corporate_name||""),g({corporate_name:z.corporate_name??"",cnpj:z.cnpj??"",email:z.email??"",state_registration:z.state_registration??""});const X={};(z.documents??[]).forEach(ce=>{X[ce.document_type]=ce}),$(X);const W=(I=z.bankAccounts)==null?void 0:I[0];v({trade_name:z.trade_name??"",phone:um(z.phone??""),benefit_type:z.benefit_type??"food",notes:z.notes??"",address_street:z.address_street??"",address_number:z.address_number??"",address_complement:z.address_complement??"",address_neighborhood:z.address_neighborhood??"",address_city:z.address_city??"",address_state:z.address_state??"",address_zip:cm(z.address_zip??""),partner_id:((P=z.partner)==null?void 0:P.id)??z.partner_id??"",bank_bank_name:(W==null?void 0:W.bank_name)??"",bank_bank_code:(W==null?void 0:W.bank_code)??"",bank_agency:(W==null?void 0:W.agency)??"",bank_agency_digit:(W==null?void 0:W.agency_digit)??"",bank_account:(W==null?void 0:W.account)??"",bank_account_digit:(W==null?void 0:W.account_digit)??"",bank_account_type:(W==null?void 0:W.account_type)??"checking"})}catch(D){re.error(rr(D,"Erro ao carregar dados do cliente.")),t(`/clientes/${e}`,{replace:!0})}finally{r(!1)}},[e,t,v]);j.useEffect(()=>{B()},[B]),j.useEffect(()=>{(async()=>{var P;if(Su){c(Su);return}f(!0);try{const z=((P=(await nt.get("/users?role=partner&limit=100&is_active=true")).data)==null?void 0:P.data)??[];Su=z,c(z)}catch{}finally{f(!1)}})()},[]);const V=(I,P)=>{x(D=>({...D,[I]:P}))},G=I=>{x(P=>{const D={...P};return delete D[I],D})},Z=async I=>{i(!0);try{const P=Object.keys(y).length>0,D={trade_name:I.trade_name||void 0,phone:dm(I.phone)||void 0,benefit_type:I.benefit_type,notes:I.notes||void 0,address_street:I.address_street||void 0,address_number:I.address_number||void 0,address_complement:I.address_complement||void 0,address_neighborhood:I.address_neighborhood||void 0,address_city:I.address_city||void 0,address_state:I.address_state||void 0,address_zip:dm(I.address_zip)||void 0,partner_id:I.partner_id||null,...N?{bankAccount:{bank_name:I.bank_bank_name,bank_code:I.bank_bank_code||void 0,agency:I.bank_agency,agency_digit:I.bank_agency_digit||void 0,account:I.bank_account,account_digit:I.bank_account_digit||null,account_type:I.bank_account_type}}:{}};if(Object.keys(D).forEach(z=>D[z]===void 0&&delete D[z]),P){const z=new FormData;z.append("data",JSON.stringify(D)),y.contrato&&z.append("contrato",y.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(W=>{y[W]&&z.append("documentos",y[W])}),await nt.patch(`/clients/${e}`,z,{headers:{"Content-Type":"multipart/form-data"}})}else await nt.patch(`/clients/${e}`,D);re.success("Cliente atualizado com sucesso!",{toastId:"client-updated"}),t(`/clientes/${e}`,{replace:!0})}catch(P){re.error(rr(P,"Erro ao salvar alterações."))}finally{i(!1)}};if(n)return l.jsx(VC,{});const ne=E||Object.keys(y).length>0,L=I=>{var P;return(P=_[I])==null?void 0:P.message};return l.jsxs(l.Fragment,{children:[l.jsxs(Tx,{children:[l.jsxs(Fx,{children:[l.jsxs(vC,{type:"button",onClick:()=>t(`/clientes/${e}`),children:[l.jsx(H0,{size:15})," Voltar"]}),l.jsxs(Rx,{children:[l.jsx(wC,{children:"Editar Cliente"}),l.jsx($C,{children:s})]})]}),l.jsxs("form",{id:"edit-client-form",onSubmit:h(Z),noValidate:!0,children:[l.jsxs(si,{style:{marginBottom:"24px"},children:[l.jsxs(Fs,{children:[l.jsx(Rs,{children:l.jsx(q0,{size:18})}),l.jsx(Ps,{children:"Dados da Empresa"})]}),l.jsxs($i,{children:[l.jsxs($e,{children:[l.jsxs(Se,{children:[l.jsx(Os,{children:l.jsx(js,{size:11})}),"Razão Social"]}),l.jsx(Ns,{title:"Campo único — não pode ser alterado",children:b.corporate_name||"—"}),l.jsx(As,{children:"Campo único, não pode ser editado."})]}),l.jsxs($e,{children:[l.jsxs(Se,{children:[l.jsx(Os,{children:l.jsx(js,{size:11})}),"CNPJ"]}),l.jsx(Ns,{title:"Campo único — não pode ser alterado",children:b.cnpj||"—"}),l.jsx(As,{children:"Campo único, não pode ser editado."})]}),l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"trade_name",children:"Nome Fantasia"}),l.jsx(vt,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",$hasError:!!L("trade_name"),disabled:o,...p("trade_name")}),L("trade_name")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("trade_name")]})]}),l.jsxs($e,{children:[l.jsxs(Se,{children:[l.jsx(Os,{children:l.jsx(js,{size:11})}),"Inscrição Estadual"]}),l.jsx(Ns,{title:"Campo único — não pode ser alterado",children:b.state_registration||"—"}),l.jsx(As,{children:"Campo único, não pode ser editado."})]}),l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"phone",children:"Telefone"}),l.jsx(vt,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",$hasError:!!L("phone"),disabled:o,...p("phone",{onChange:I=>k("phone",um(I.target.value))})}),L("phone")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("phone")]})]}),l.jsxs($e,{children:[l.jsxs(Se,{children:[l.jsx(Os,{children:l.jsx(js,{size:11})}),"E-mail"]}),l.jsx(Ns,{title:"Campo único — não pode ser alterado",children:b.email||"—"}),l.jsx(As,{children:"Campo único, não pode ser editado."})]}),l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),l.jsx(zs,{id:"benefit_type",$hasError:!!L("benefit_type"),disabled:o,...p("benefit_type"),children:MC.map(I=>l.jsx("option",{value:I.value,children:I.label},I.value))}),L("benefit_type")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("benefit_type")]})]}),l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"partner_id",children:"Parceiro Vinculado"}),l.jsxs(zs,{id:"partner_id",disabled:o||d,...p("partner_id"),children:[l.jsx("option",{value:"",children:d?"Carregando parceiros…":"Sem parceiro vinculado"}),u.map(I=>l.jsx("option",{value:I.id,children:I.name},I.id))]}),l.jsx(Jr,{children:d?"Buscando parceiros cadastrados…":`${u.length} parceiro${u.length!==1?"s":""} disponível${u.length!==1?"is":""}`})]}),l.jsx(tm,{children:l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"notes",children:"Observações"}),l.jsx(bC,{id:"notes",placeholder:"Observações internas…",disabled:o,...p("notes")}),l.jsx(Jr,{children:"Visível apenas para a equipe interna."})]})})]})]}),l.jsxs(si,{style:{marginBottom:"24px"},children:[l.jsxs(Fs,{children:[l.jsx(Rs,{children:l.jsx(Z0,{size:18})}),l.jsx(Ps,{children:"Endereço"})]}),l.jsxs($i,{children:[l.jsx(tm,{children:l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"address_street",children:"Logradouro"}),l.jsx(vt,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",$hasError:!!L("address_street"),disabled:o,...p("address_street")}),L("address_street")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("address_street")]})]})}),l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"address_number",children:"Número"}),l.jsx(vt,{id:"address_number",type:"text",placeholder:"Nº",$hasError:!!L("address_number"),disabled:o,...p("address_number")}),L("address_number")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("address_number")]})]}),l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"address_complement",children:"Complemento"}),l.jsx(vt,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",$hasError:!!L("address_complement"),disabled:o,...p("address_complement")}),L("address_complement")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("address_complement")]})]}),l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"address_neighborhood",children:"Bairro"}),l.jsx(vt,{id:"address_neighborhood",type:"text",placeholder:"Bairro",$hasError:!!L("address_neighborhood"),disabled:o,...p("address_neighborhood")}),L("address_neighborhood")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("address_neighborhood")]})]}),l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"address_city",children:"Cidade"}),l.jsx(vt,{id:"address_city",type:"text",placeholder:"Cidade",$hasError:!!L("address_city"),disabled:o,...p("address_city")}),L("address_city")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("address_city")]})]}),l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"address_state",children:"UF"}),l.jsxs(zs,{id:"address_state",$hasError:!!L("address_state"),disabled:o,...p("address_state"),children:[l.jsx("option",{value:"",children:"Selecione"}),UC.map(I=>l.jsx("option",{value:I,children:I},I))]}),L("address_state")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("address_state")]})]}),l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"address_zip",children:"CEP"}),l.jsx(vt,{id:"address_zip",type:"text",placeholder:"00000-000",$hasError:!!L("address_zip"),disabled:o,...p("address_zip",{onChange:I=>k("address_zip",cm(I.target.value))})}),L("address_zip")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("address_zip")]})]})]})]}),l.jsxs(si,{style:{marginBottom:"24px"},children:[l.jsxs(Fs,{children:[l.jsx(Rs,{children:l.jsx(X0,{size:18})}),l.jsx(Ps,{children:"Conta Bancária"})]}),l.jsxs(SC,{children:[l.jsx(kC,{children:"Dados Bancários Principais"}),N&&l.jsx(Jr,{style:{marginBottom:"12px",display:"block"},children:"Agência, conta e dígito são obrigatórios quando o banco é informado."}),l.jsxs($i,{children:[l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),l.jsx(vt,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",$hasError:!!L("bank_bank_name"),disabled:o,...p("bank_bank_name")}),L("bank_bank_name")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("bank_bank_name")]})]}),l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"bank_bank_code",children:"Código COMPE"}),l.jsx(vt,{id:"bank_bank_code",type:"text",placeholder:"Ex: 237",$hasError:!!L("bank_bank_code"),disabled:o,...p("bank_bank_code")}),L("bank_bank_code")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("bank_bank_code")]}),l.jsx(Jr,{children:"Código de 3 dígitos (opcional)."})]}),l.jsxs($e,{children:[l.jsxs(Se,{htmlFor:"bank_agency",children:["Agência ",N&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(vt,{id:"bank_agency",type:"text",placeholder:"0000",$hasError:!!L("bank_agency"),disabled:o,...p("bank_agency")}),L("bank_agency")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("bank_agency")]})]}),l.jsxs($e,{children:[l.jsx(Se,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),l.jsx(vt,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,$hasError:!!L("bank_agency_digit"),disabled:o,...p("bank_agency_digit")}),L("bank_agency_digit")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("bank_agency_digit")]})]}),l.jsxs($e,{children:[l.jsxs(Se,{htmlFor:"bank_account",children:["Conta ",N&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(vt,{id:"bank_account",type:"text",placeholder:"000000",$hasError:!!L("bank_account"),disabled:o,...p("bank_account")}),L("bank_account")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("bank_account")]})]}),l.jsxs($e,{children:[l.jsxs(Se,{htmlFor:"bank_account_digit",children:["Dígito Conta ",N&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(vt,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,$hasError:!!L("bank_account_digit"),disabled:o,...p("bank_account_digit")}),L("bank_account_digit")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("bank_account_digit")]})]}),l.jsxs($e,{children:[l.jsxs(Se,{htmlFor:"bank_account_type",children:["Tipo de Conta ",N&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(zs,{id:"bank_account_type",$hasError:!!L("bank_account_type"),disabled:o,...p("bank_account_type"),children:BC.map(I=>l.jsx("option",{value:I.value,children:I.label},I.value))}),L("bank_account_type")&&l.jsxs(Ze,{children:[l.jsx(ze,{size:11}),L("bank_account_type")]})]})]})]})]}),l.jsxs(si,{style:{marginBottom:"24px"},children:[l.jsxs(Fs,{children:[l.jsx(Rs,{children:l.jsx(Nc,{size:18})}),l.jsx(Ps,{children:"Documentos"})]}),l.jsxs(Jr,{style:{marginBottom:"16px",display:"block"},children:["Selecione um novo arquivo para ",l.jsx("strong",{children:"substituir"})," o documento existente. O arquivo antigo é removido automaticamente do Cloudinary."]}),l.jsx(_C,{children:DC.map(I=>l.jsx(WC,{slot:I,existingDoc:m[I.type],selectedFile:y[I.key],onFileSelect:V,onClearFile:G,disabled:o},I.key))})]})]})]}),l.jsxs(OC,{children:[l.jsxs(zC,{type:"button",disabled:o,onClick:()=>t(`/clientes/${e}`),children:[l.jsx(Xd,{size:15})," Cancelar"]}),l.jsx(NC,{type:"submit",form:"edit-client-form",disabled:o||!ne,$isSubmitting:o,title:ne?void 0:"Nenhuma alteração detectada",children:o?l.jsxs(l.Fragment,{children:[l.jsx(AC,{}),"Salvando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(Mk,{size:15}),"Salvar Alterações"]})})]})]})}const yn=({title:e})=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center",justifyContent:"center",minHeight:"60vh",color:"#7a6455"},children:[l.jsx("p",{style:{fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Em construção"}),l.jsx("p",{style:{fontSize:"22px",fontWeight:"700",fontFamily:"serif"},children:e})]});function GC(){const e=window.location.hostname.includes("github.io"),t=e?c$:u$,n=e?{}:{basename:"/bgrepresentacoes-web/"};return l.jsxs(gb,{theme:Qp,children:[l.jsx(Ib,{}),l.jsx(t,{...n,children:l.jsxs(xk,{children:[l.jsx(Rb,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",style:{fontFamily:Qp.typography.fontFamily.sans}}),l.jsxs(t$,{children:[l.jsx(Fe,{path:"/login",element:l.jsx(P_,{})}),l.jsx(Fe,{element:l.jsx(cu,{}),children:l.jsx(Fe,{path:"/alterar-senha",element:l.jsx(lE,{})})}),l.jsx(Fe,{element:l.jsx(cu,{}),children:l.jsxs(Fe,{element:l.jsx(gh,{}),children:[l.jsx(Fe,{path:"/dashboard",element:l.jsx(yn,{title:"Dashboard"})}),l.jsx(Fe,{path:"/clientes",element:l.jsx(UE,{})}),l.jsx(Fe,{path:"/clientes/:id",element:l.jsx(vj,{})}),l.jsx(Fe,{path:"/clientes/:id/editar",element:l.jsx(HC,{})}),l.jsx(Fe,{path:"/onboarding",element:l.jsx(yn,{title:"Novo Cliente"})}),l.jsx(Fe,{path:"/vendas",element:l.jsx(yn,{title:"Vendas"})}),l.jsx(Fe,{path:"/vendas/:id",element:l.jsx(yn,{title:"Detalhe da Venda"})}),l.jsx(Fe,{path:"/perfil",element:l.jsx(yn,{title:"Meu Perfil"})})]})}),l.jsx(Fe,{element:l.jsx(cu,{allowedRoles:["admin"]}),children:l.jsxs(Fe,{element:l.jsx(gh,{}),children:[l.jsx(Fe,{path:"/usuarios",element:l.jsx(yn,{title:"Usuários"})}),l.jsx(Fe,{path:"/bandeiras",element:l.jsx(yn,{title:"Bandeiras"})}),l.jsx(Fe,{path:"/planos",element:l.jsx(yn,{title:"Planos"})}),l.jsx(Fe,{path:"/relatorios",element:l.jsx(yn,{title:"Relatórios"})})]})}),l.jsx(Fe,{path:"/",element:l.jsx(Ra,{to:"/dashboard",replace:!0})}),l.jsx(Fe,{path:"*",element:l.jsx(Ra,{to:"/dashboard",replace:!0})})]})]})})]})}ku.createRoot(document.getElementById("root")).render(l.jsx(Q.StrictMode,{children:l.jsx(GC,{})}));
