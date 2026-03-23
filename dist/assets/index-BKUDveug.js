function vv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ig(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lg={exports:{}},Hl={},Dg={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns=Symbol.for("react.element"),bv=Symbol.for("react.portal"),wv=Symbol.for("react.fragment"),$v=Symbol.for("react.strict_mode"),kv=Symbol.for("react.profiler"),Sv=Symbol.for("react.provider"),_v=Symbol.for("react.context"),jv=Symbol.for("react.forward_ref"),Ev=Symbol.for("react.suspense"),Cv=Symbol.for("react.memo"),Fv=Symbol.for("react.lazy"),Tp=Symbol.iterator;function Tv(e){return e===null||typeof e!="object"?null:(e=Tp&&e[Tp]||e["@@iterator"],typeof e=="function"?e:null)}var Ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mg=Object.assign,Bg={};function ui(e,t,n){this.props=e,this.context=t,this.refs=Bg,this.updater=n||Ug}ui.prototype.isReactComponent={};ui.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ui.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vg(){}Vg.prototype=ui.prototype;function Yd(e,t,n){this.props=e,this.context=t,this.refs=Bg,this.updater=n||Ug}var Xd=Yd.prototype=new Vg;Xd.constructor=Yd;Mg(Xd,ui.prototype);Xd.isPureReactComponent=!0;var Pp=Array.isArray,Hg=Object.prototype.hasOwnProperty,Jd={current:null},Wg={key:!0,ref:!0,__self:!0,__source:!0};function qg(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Hg.call(t,r)&&!Wg.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var c=Array(a),f=0;f<a;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Ns,type:e,key:i,ref:s,props:o,_owner:Jd.current}}function Pv(e,t){return{$$typeof:Ns,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ns}function Av(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ap=/\/+/g;function jc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Av(""+e.key):t.toString(36)}function Fa(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ns:case bv:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+jc(s,0):r,Pp(o)?(n="",e!=null&&(n=e.replace(Ap,"$&/")+"/"),Fa(o,t,n,"",function(f){return f})):o!=null&&(Zd(o)&&(o=Pv(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Ap,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Pp(e))for(var a=0;a<e.length;a++){i=e[a];var c=r+jc(i,a);s+=Fa(i,t,n,c,o)}else if(c=Tv(e),typeof c=="function")for(e=c.call(e),a=0;!(i=e.next()).done;)i=i.value,c=r+jc(i,a++),s+=Fa(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ks(e,t,n){if(e==null)return e;var r=[],o=0;return Fa(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Rv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var At={current:null},Ta={transition:null},zv={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:Ta,ReactCurrentOwner:Jd};function Gg(){throw Error("act(...) is not supported in production builds of React.")}ye.Children={map:Ks,forEach:function(e,t,n){Ks(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ks(e,function(){t++}),t},toArray:function(e){return Ks(e,function(t){return t})||[]},only:function(e){if(!Zd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ye.Component=ui;ye.Fragment=wv;ye.Profiler=kv;ye.PureComponent=Yd;ye.StrictMode=$v;ye.Suspense=Ev;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zv;ye.act=Gg;ye.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mg({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Jd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Hg.call(t,c)&&!Wg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var f=0;f<c;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:Ns,type:e.type,key:o,ref:i,props:r,_owner:s}};ye.createContext=function(e){return e={$$typeof:_v,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sv,_context:e},e.Consumer=e};ye.createElement=qg;ye.createFactory=function(e){var t=qg.bind(null,e);return t.type=e,t};ye.createRef=function(){return{current:null}};ye.forwardRef=function(e){return{$$typeof:jv,render:e}};ye.isValidElement=Zd;ye.lazy=function(e){return{$$typeof:Fv,_payload:{_status:-1,_result:e},_init:Rv}};ye.memo=function(e,t){return{$$typeof:Cv,type:e,compare:t===void 0?null:t}};ye.startTransition=function(e){var t=Ta.transition;Ta.transition={};try{e()}finally{Ta.transition=t}};ye.unstable_act=Gg;ye.useCallback=function(e,t){return At.current.useCallback(e,t)};ye.useContext=function(e){return At.current.useContext(e)};ye.useDebugValue=function(){};ye.useDeferredValue=function(e){return At.current.useDeferredValue(e)};ye.useEffect=function(e,t){return At.current.useEffect(e,t)};ye.useId=function(){return At.current.useId()};ye.useImperativeHandle=function(e,t,n){return At.current.useImperativeHandle(e,t,n)};ye.useInsertionEffect=function(e,t){return At.current.useInsertionEffect(e,t)};ye.useLayoutEffect=function(e,t){return At.current.useLayoutEffect(e,t)};ye.useMemo=function(e,t){return At.current.useMemo(e,t)};ye.useReducer=function(e,t,n){return At.current.useReducer(e,t,n)};ye.useRef=function(e){return At.current.useRef(e)};ye.useState=function(e){return At.current.useState(e)};ye.useSyncExternalStore=function(e,t,n){return At.current.useSyncExternalStore(e,t,n)};ye.useTransition=function(){return At.current.useTransition()};ye.version="18.3.1";Dg.exports=ye;var D=Dg.exports;const se=Ig(D),Ov=vv({__proto__:null,default:se},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv=D,Iv=Symbol.for("react.element"),Lv=Symbol.for("react.fragment"),Dv=Object.prototype.hasOwnProperty,Uv=Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mv={key:!0,ref:!0,__self:!0,__source:!0};function Qg(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Dv.call(t,r)&&!Mv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Iv,type:e,key:i,ref:s,props:o,_owner:Uv.current}}Hl.Fragment=Lv;Hl.jsx=Qg;Hl.jsxs=Qg;Lg.exports=Hl;var l=Lg.exports,Pu={},Kg={exports:{}},tn={},Yg={exports:{}},Xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,z){var L=I.length;I.push(z);e:for(;0<L;){var Q=L-1>>>1,V=I[Q];if(0<o(V,z))I[Q]=z,I[L]=V,L=Q;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var z=I[0],L=I.pop();if(L!==z){I[0]=L;e:for(var Q=0,V=I.length,K=V>>>1;Q<K;){var G=2*(Q+1)-1,M=I[G],H=G+1,te=I[H];if(0>o(M,L))H<V&&0>o(te,M)?(I[Q]=te,I[H]=L,Q=H):(I[Q]=M,I[G]=L,Q=G);else if(H<V&&0>o(te,L))I[Q]=te,I[H]=L,Q=H;else break e}}return z}function o(I,z){var L=I.sortIndex-z.sortIndex;return L!==0?L:I.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],f=[],u=1,d=null,p=3,m=!1,h=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var z=n(f);z!==null;){if(z.callback===null)r(f);else if(z.startTime<=I)r(f),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(f)}}function w(I){if(b=!1,x(I),!h)if(n(c)!==null)h=!0,j(C);else{var z=n(f);z!==null&&$(w,z.startTime-I)}}function C(I,z){h=!1,b&&(b=!1,y(v),v=-1),m=!0;var L=p;try{for(x(z),d=n(c);d!==null&&(!(d.expirationTime>z)||I&&!F());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,p=d.priorityLevel;var V=Q(d.expirationTime<=z);z=e.unstable_now(),typeof V=="function"?d.callback=V:d===n(c)&&r(c),x(z)}else r(c);d=n(c)}if(d!==null)var K=!0;else{var G=n(f);G!==null&&$(w,G.startTime-z),K=!1}return K}finally{d=null,p=L,m=!1}}var _=!1,T=null,v=-1,S=5,P=-1;function F(){return!(e.unstable_now()-P<S)}function A(){if(T!==null){var I=e.unstable_now();P=I;var z=!0;try{z=T(!0,I)}finally{z?N():(_=!1,T=null)}}else _=!1}var N;if(typeof g=="function")N=function(){g(A)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,U=R.port2;R.port1.onmessage=A,N=function(){U.postMessage(null)}}else N=function(){k(A,0)};function j(I){T=I,_||(_=!0,N())}function $(I,z){v=k(function(){I(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){h||m||(h=!0,j(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(I){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var L=p;p=z;try{return I()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=p;p=I;try{return z()}finally{p=L}},e.unstable_scheduleCallback=function(I,z,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,I){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=L+V,I={id:u++,callback:z,priorityLevel:I,startTime:L,expirationTime:V,sortIndex:-1},L>Q?(I.sortIndex=L,t(f,I),n(c)===null&&I===n(f)&&(b?(y(v),v=-1):b=!0,$(w,L-Q))):(I.sortIndex=V,t(c,I),h||m||(h=!0,j(C))),I},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(I){var z=p;return function(){var L=p;p=z;try{return I.apply(this,arguments)}finally{p=L}}}})(Xg);Yg.exports=Xg;var Bv=Yg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv=D,en=Bv;function Z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jg=new Set,ds={};function co(e,t){Yo(e,t),Yo(e+"Capture",t)}function Yo(e,t){for(ds[e]=t,e=0;e<t.length;e++)Jg.add(t[e])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=Object.prototype.hasOwnProperty,Hv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rp={},zp={};function Wv(e){return Au.call(zp,e)?!0:Au.call(Rp,e)?!1:Hv.test(e)?zp[e]=!0:(Rp[e]=!0,!1)}function qv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gv(e,t,n,r){if(t===null||typeof t>"u"||qv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Rt(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xt[e]=new Rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xt[t]=new Rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xt[e]=new Rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xt[e]=new Rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xt[e]=new Rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xt[e]=new Rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xt[e]=new Rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xt[e]=new Rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xt[e]=new Rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ef=/[\-:]([a-z])/g;function tf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ef,tf);xt[t]=new Rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ef,tf);xt[t]=new Rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ef,tf);xt[t]=new Rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xt[e]=new Rt(e,1,!1,e.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xt[e]=new Rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function nf(e,t,n,r){var o=xt.hasOwnProperty(t)?xt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gv(t,n,o,r)&&(n=null),r||o===null?Wv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yn=Vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ys=Symbol.for("react.element"),To=Symbol.for("react.portal"),Po=Symbol.for("react.fragment"),rf=Symbol.for("react.strict_mode"),Ru=Symbol.for("react.profiler"),Zg=Symbol.for("react.provider"),e0=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),zu=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),sf=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),t0=Symbol.for("react.offscreen"),Op=Symbol.iterator;function $i(e){return e===null||typeof e!="object"?null:(e=Op&&e[Op]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Object.assign,Ec;function Mi(e){if(Ec===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ec=t&&t[1]||""}return`
`+Ec+e}var Cc=!1;function Fc(e,t){if(!e||Cc)return"";Cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{Cc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mi(e):""}function Qv(e){switch(e.tag){case 5:return Mi(e.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 2:case 15:return e=Fc(e.type,!1),e;case 11:return e=Fc(e.type.render,!1),e;case 1:return e=Fc(e.type,!0),e;default:return""}}function Nu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Po:return"Fragment";case To:return"Portal";case Ru:return"Profiler";case rf:return"StrictMode";case zu:return"Suspense";case Ou:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case e0:return(e.displayName||"Context")+".Consumer";case Zg:return(e._context.displayName||"Context")+".Provider";case of:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sf:return t=e.displayName||null,t!==null?t:Nu(e.type)||"Memo";case or:t=e._payload,e=e._init;try{return Nu(e(t))}catch{}}return null}function Kv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nu(t);case 8:return t===rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function n0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yv(e){var t=n0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){e._valueTracker||(e._valueTracker=Yv(e))}function r0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=n0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Iu(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Np(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_r(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function o0(e,t){t=t.checked,t!=null&&nf(e,"checked",t,!1)}function Lu(e,t){o0(e,t);var n=_r(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Du(e,t.type,n):t.hasOwnProperty("defaultValue")&&Du(e,t.type,_r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ip(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Du(e,t,n){(t!=="number"||tl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bi=Array.isArray;function Ho(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_r(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Uu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Z(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Z(92));if(Bi(n)){if(1<n.length)throw Error(Z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_r(n)}}function i0(e,t){var n=_r(t.value),r=_r(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Dp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function s0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?s0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Js,a0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Js=Js||document.createElement("div"),Js.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Js.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xv=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(e){Xv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yi[t]=Yi[e]})});function l0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yi.hasOwnProperty(e)&&Yi[e]?(""+t).trim():t+"px"}function c0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=l0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Jv=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bu(e,t){if(t){if(Jv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Z(62))}}function Vu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hu=null;function af(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wu=null,Wo=null,qo=null;function Up(e){if(e=Ds(e)){if(typeof Wu!="function")throw Error(Z(280));var t=e.stateNode;t&&(t=Kl(t),Wu(e.stateNode,e.type,t))}}function u0(e){Wo?qo?qo.push(e):qo=[e]:Wo=e}function d0(){if(Wo){var e=Wo,t=qo;if(qo=Wo=null,Up(e),t)for(e=0;e<t.length;e++)Up(t[e])}}function f0(e,t){return e(t)}function p0(){}var Tc=!1;function h0(e,t,n){if(Tc)return e(t,n);Tc=!0;try{return f0(e,t,n)}finally{Tc=!1,(Wo!==null||qo!==null)&&(p0(),d0())}}function ps(e,t){var n=e.stateNode;if(n===null)return null;var r=Kl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Z(231,t,typeof n));return n}var qu=!1;if(qn)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){qu=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{qu=!1}function Zv(e,t,n,r,o,i,s,a,c){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(u){this.onError(u)}}var Xi=!1,nl=null,rl=!1,Gu=null,eb={onError:function(e){Xi=!0,nl=e}};function tb(e,t,n,r,o,i,s,a,c){Xi=!1,nl=null,Zv.apply(eb,arguments)}function nb(e,t,n,r,o,i,s,a,c){if(tb.apply(this,arguments),Xi){if(Xi){var f=nl;Xi=!1,nl=null}else throw Error(Z(198));rl||(rl=!0,Gu=f)}}function uo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mp(e){if(uo(e)!==e)throw Error(Z(188))}function rb(e){var t=e.alternate;if(!t){if(t=uo(e),t===null)throw Error(Z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Mp(o),e;if(i===r)return Mp(o),t;i=i.sibling}throw Error(Z(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(Z(189))}}if(n.alternate!==r)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?e:t}function g0(e){return e=rb(e),e!==null?y0(e):null}function y0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=y0(e);if(t!==null)return t;e=e.sibling}return null}var x0=en.unstable_scheduleCallback,Bp=en.unstable_cancelCallback,ob=en.unstable_shouldYield,ib=en.unstable_requestPaint,Qe=en.unstable_now,sb=en.unstable_getCurrentPriorityLevel,lf=en.unstable_ImmediatePriority,v0=en.unstable_UserBlockingPriority,ol=en.unstable_NormalPriority,ab=en.unstable_LowPriority,b0=en.unstable_IdlePriority,Wl=null,Rn=null;function lb(e){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Wl,e,void 0,(e.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:db,cb=Math.log,ub=Math.LN2;function db(e){return e>>>=0,e===0?32:31-(cb(e)/ub|0)|0}var Zs=64,ea=4194304;function Vi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function il(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Vi(a):(i&=s,i!==0&&(r=Vi(i)))}else s=n&~o,s!==0?r=Vi(s):i!==0&&(r=Vi(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$n(t),o=1<<n,r|=e[n],t&=~o;return r}function fb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-$n(i),a=1<<s,c=o[s];c===-1?(!(a&n)||a&r)&&(o[s]=fb(a,t)):c<=t&&(e.expiredLanes|=a),i&=~a}}function Qu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function w0(){var e=Zs;return Zs<<=1,!(Zs&4194240)&&(Zs=64),e}function Pc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Is(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$n(t),e[t]=n}function hb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-$n(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function cf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$n(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var _e=0;function $0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var k0,uf,S0,_0,j0,Ku=!1,ta=[],hr=null,mr=null,gr=null,hs=new Map,ms=new Map,sr=[],mb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vp(e,t){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":hs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ms.delete(t.pointerId)}}function Si(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ds(t),t!==null&&uf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function gb(e,t,n,r,o){switch(t){case"focusin":return hr=Si(hr,e,t,n,r,o),!0;case"dragenter":return mr=Si(mr,e,t,n,r,o),!0;case"mouseover":return gr=Si(gr,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return hs.set(i,Si(hs.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ms.set(i,Si(ms.get(i)||null,e,t,n,r,o)),!0}return!1}function E0(e){var t=Mr(e.target);if(t!==null){var n=uo(t);if(n!==null){if(t=n.tag,t===13){if(t=m0(n),t!==null){e.blockedOn=t,j0(e.priority,function(){S0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hu=r,n.target.dispatchEvent(r),Hu=null}else return t=Ds(n),t!==null&&uf(t),e.blockedOn=n,!1;t.shift()}return!0}function Hp(e,t,n){Pa(e)&&n.delete(t)}function yb(){Ku=!1,hr!==null&&Pa(hr)&&(hr=null),mr!==null&&Pa(mr)&&(mr=null),gr!==null&&Pa(gr)&&(gr=null),hs.forEach(Hp),ms.forEach(Hp)}function _i(e,t){e.blockedOn===t&&(e.blockedOn=null,Ku||(Ku=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,yb)))}function gs(e){function t(o){return _i(o,e)}if(0<ta.length){_i(ta[0],e);for(var n=1;n<ta.length;n++){var r=ta[n];r.blockedOn===e&&(r.blockedOn=null)}}for(hr!==null&&_i(hr,e),mr!==null&&_i(mr,e),gr!==null&&_i(gr,e),hs.forEach(t),ms.forEach(t),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)E0(n),n.blockedOn===null&&sr.shift()}var Go=Yn.ReactCurrentBatchConfig,sl=!0;function xb(e,t,n,r){var o=_e,i=Go.transition;Go.transition=null;try{_e=1,df(e,t,n,r)}finally{_e=o,Go.transition=i}}function vb(e,t,n,r){var o=_e,i=Go.transition;Go.transition=null;try{_e=4,df(e,t,n,r)}finally{_e=o,Go.transition=i}}function df(e,t,n,r){if(sl){var o=Yu(e,t,n,r);if(o===null)Mc(e,t,r,al,n),Vp(e,r);else if(gb(o,e,t,n,r))r.stopPropagation();else if(Vp(e,r),t&4&&-1<mb.indexOf(e)){for(;o!==null;){var i=Ds(o);if(i!==null&&k0(i),i=Yu(e,t,n,r),i===null&&Mc(e,t,r,al,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Mc(e,t,r,null,n)}}var al=null;function Yu(e,t,n,r){if(al=null,e=af(r),e=Mr(e),e!==null)if(t=uo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=m0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return al=e,null}function C0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sb()){case lf:return 1;case v0:return 4;case ol:case ab:return 16;case b0:return 536870912;default:return 16}default:return 16}}var cr=null,ff=null,Aa=null;function F0(){if(Aa)return Aa;var e,t=ff,n=t.length,r,o="value"in cr?cr.value:cr.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Aa=o.slice(e,1<r?1-r:void 0)}function Ra(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function na(){return!0}function Wp(){return!1}function nn(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?na:Wp,this.isPropagationStopped=Wp,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),t}var di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=nn(di),Ls=Ue({},di,{view:0,detail:0}),bb=nn(Ls),Ac,Rc,ji,ql=Ue({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ji&&(ji&&e.type==="mousemove"?(Ac=e.screenX-ji.screenX,Rc=e.screenY-ji.screenY):Rc=Ac=0,ji=e),Ac)},movementY:function(e){return"movementY"in e?e.movementY:Rc}}),qp=nn(ql),wb=Ue({},ql,{dataTransfer:0}),$b=nn(wb),kb=Ue({},Ls,{relatedTarget:0}),zc=nn(kb),Sb=Ue({},di,{animationName:0,elapsedTime:0,pseudoElement:0}),_b=nn(Sb),jb=Ue({},di,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Eb=nn(jb),Cb=Ue({},di,{data:0}),Gp=nn(Cb),Fb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ab(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pb[e])?!!t[e]:!1}function hf(){return Ab}var Rb=Ue({},Ls,{key:function(e){if(e.key){var t=Fb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ra(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(e){return e.type==="keypress"?Ra(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ra(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zb=nn(Rb),Ob=Ue({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=nn(Ob),Nb=Ue({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),Ib=nn(Nb),Lb=Ue({},di,{propertyName:0,elapsedTime:0,pseudoElement:0}),Db=nn(Lb),Ub=Ue({},ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mb=nn(Ub),Bb=[9,13,27,32],mf=qn&&"CompositionEvent"in window,Ji=null;qn&&"documentMode"in document&&(Ji=document.documentMode);var Vb=qn&&"TextEvent"in window&&!Ji,T0=qn&&(!mf||Ji&&8<Ji&&11>=Ji),Kp=" ",Yp=!1;function P0(e,t){switch(e){case"keyup":return Bb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ao=!1;function Hb(e,t){switch(e){case"compositionend":return A0(t);case"keypress":return t.which!==32?null:(Yp=!0,Kp);case"textInput":return e=t.data,e===Kp&&Yp?null:e;default:return null}}function Wb(e,t){if(Ao)return e==="compositionend"||!mf&&P0(e,t)?(e=F0(),Aa=ff=cr=null,Ao=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return T0&&t.locale!=="ko"?null:t.data;default:return null}}var qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qb[e.type]:t==="textarea"}function R0(e,t,n,r){u0(r),t=ll(t,"onChange"),0<t.length&&(n=new pf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zi=null,ys=null;function Gb(e){H0(e,0)}function Gl(e){var t=Oo(e);if(r0(t))return e}function Qb(e,t){if(e==="change")return t}var z0=!1;if(qn){var Oc;if(qn){var Nc="oninput"in document;if(!Nc){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),Nc=typeof Jp.oninput=="function"}Oc=Nc}else Oc=!1;z0=Oc&&(!document.documentMode||9<document.documentMode)}function Zp(){Zi&&(Zi.detachEvent("onpropertychange",O0),ys=Zi=null)}function O0(e){if(e.propertyName==="value"&&Gl(ys)){var t=[];R0(t,ys,e,af(e)),h0(Gb,t)}}function Kb(e,t,n){e==="focusin"?(Zp(),Zi=t,ys=n,Zi.attachEvent("onpropertychange",O0)):e==="focusout"&&Zp()}function Yb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gl(ys)}function Xb(e,t){if(e==="click")return Gl(t)}function Jb(e,t){if(e==="input"||e==="change")return Gl(t)}function Zb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _n=typeof Object.is=="function"?Object.is:Zb;function xs(e,t){if(_n(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Au.call(t,o)||!_n(e[o],t[o]))return!1}return!0}function eh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function th(e,t){var n=eh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eh(n)}}function N0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?N0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I0(){for(var e=window,t=tl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tl(e.document)}return t}function gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function e2(e){var t=I0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&N0(n.ownerDocument.documentElement,n)){if(r!==null&&gf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=th(n,i);var s=th(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var t2=qn&&"documentMode"in document&&11>=document.documentMode,Ro=null,Xu=null,es=null,Ju=!1;function nh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ju||Ro==null||Ro!==tl(r)||(r=Ro,"selectionStart"in r&&gf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),es&&xs(es,r)||(es=r,r=ll(Xu,"onSelect"),0<r.length&&(t=new pf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ro)))}function ra(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zo={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Ic={},L0={};qn&&(L0=document.createElement("div").style,"AnimationEvent"in window||(delete zo.animationend.animation,delete zo.animationiteration.animation,delete zo.animationstart.animation),"TransitionEvent"in window||delete zo.transitionend.transition);function Ql(e){if(Ic[e])return Ic[e];if(!zo[e])return e;var t=zo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in L0)return Ic[e]=t[n];return e}var D0=Ql("animationend"),U0=Ql("animationiteration"),M0=Ql("animationstart"),B0=Ql("transitionend"),V0=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(e,t){V0.set(e,t),co(t,[e])}for(var Lc=0;Lc<rh.length;Lc++){var Dc=rh[Lc],n2=Dc.toLowerCase(),r2=Dc[0].toUpperCase()+Dc.slice(1);Cr(n2,"on"+r2)}Cr(D0,"onAnimationEnd");Cr(U0,"onAnimationIteration");Cr(M0,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(B0,"onTransitionEnd");Yo("onMouseEnter",["mouseout","mouseover"]);Yo("onMouseLeave",["mouseout","mouseover"]);Yo("onPointerEnter",["pointerout","pointerover"]);Yo("onPointerLeave",["pointerout","pointerover"]);co("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));co("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));co("onBeforeInput",["compositionend","keypress","textInput","paste"]);co("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));co("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));co("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));function oh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nb(r,t,void 0,e),e.currentTarget=null}function H0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,f=a.currentTarget;if(a=a.listener,c!==i&&o.isPropagationStopped())break e;oh(o,a,f),i=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,f=a.currentTarget,a=a.listener,c!==i&&o.isPropagationStopped())break e;oh(o,a,f),i=c}}}if(rl)throw e=Gu,rl=!1,Gu=null,e}function Fe(e,t){var n=t[rd];n===void 0&&(n=t[rd]=new Set);var r=e+"__bubble";n.has(r)||(W0(t,e,2,!1),n.add(r))}function Uc(e,t,n){var r=0;t&&(r|=4),W0(n,e,r,t)}var oa="_reactListening"+Math.random().toString(36).slice(2);function vs(e){if(!e[oa]){e[oa]=!0,Jg.forEach(function(n){n!=="selectionchange"&&(o2.has(n)||Uc(n,!1,e),Uc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oa]||(t[oa]=!0,Uc("selectionchange",!1,t))}}function W0(e,t,n,r){switch(C0(t)){case 1:var o=xb;break;case 4:o=vb;break;default:o=df}n=o.bind(null,t,n,e),o=void 0,!qu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Mc(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Mr(a),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}a=a.parentNode}}r=r.return}h0(function(){var f=i,u=af(n),d=[];e:{var p=V0.get(e);if(p!==void 0){var m=pf,h=e;switch(e){case"keypress":if(Ra(n)===0)break e;case"keydown":case"keyup":m=zb;break;case"focusin":h="focus",m=zc;break;case"focusout":h="blur",m=zc;break;case"beforeblur":case"afterblur":m=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=$b;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ib;break;case D0:case U0:case M0:m=_b;break;case B0:m=Db;break;case"scroll":m=bb;break;case"wheel":m=Mb;break;case"copy":case"cut":case"paste":m=Eb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qp}var b=(t&4)!==0,k=!b&&e==="scroll",y=b?p!==null?p+"Capture":null:p;b=[];for(var g=f,x;g!==null;){x=g;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,y!==null&&(w=ps(g,y),w!=null&&b.push(bs(g,w,x)))),k)break;g=g.return}0<b.length&&(p=new m(p,h,null,n,u),d.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==Hu&&(h=n.relatedTarget||n.fromElement)&&(Mr(h)||h[Gn]))break e;if((m||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,m?(h=n.relatedTarget||n.toElement,m=f,h=h?Mr(h):null,h!==null&&(k=uo(h),h!==k||h.tag!==5&&h.tag!==6)&&(h=null)):(m=null,h=f),m!==h)){if(b=qp,w="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=Qp,w="onPointerLeave",y="onPointerEnter",g="pointer"),k=m==null?p:Oo(m),x=h==null?p:Oo(h),p=new b(w,g+"leave",m,n,u),p.target=k,p.relatedTarget=x,w=null,Mr(u)===f&&(b=new b(y,g+"enter",h,n,u),b.target=x,b.relatedTarget=k,w=b),k=w,m&&h)t:{for(b=m,y=h,g=0,x=b;x;x=mo(x))g++;for(x=0,w=y;w;w=mo(w))x++;for(;0<g-x;)b=mo(b),g--;for(;0<x-g;)y=mo(y),x--;for(;g--;){if(b===y||y!==null&&b===y.alternate)break t;b=mo(b),y=mo(y)}b=null}else b=null;m!==null&&ih(d,p,m,b,!1),h!==null&&k!==null&&ih(d,k,h,b,!0)}}e:{if(p=f?Oo(f):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var C=Qb;else if(Xp(p))if(z0)C=Jb;else{C=Yb;var _=Kb}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Xb);if(C&&(C=C(e,f))){R0(d,C,n,u);break e}_&&_(e,p,f),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Du(p,"number",p.value)}switch(_=f?Oo(f):window,e){case"focusin":(Xp(_)||_.contentEditable==="true")&&(Ro=_,Xu=f,es=null);break;case"focusout":es=Xu=Ro=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,nh(d,n,u);break;case"selectionchange":if(t2)break;case"keydown":case"keyup":nh(d,n,u)}var T;if(mf)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ao?P0(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(T0&&n.locale!=="ko"&&(Ao||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ao&&(T=F0()):(cr=u,ff="value"in cr?cr.value:cr.textContent,Ao=!0)),_=ll(f,v),0<_.length&&(v=new Gp(v,e,null,n,u),d.push({event:v,listeners:_}),T?v.data=T:(T=A0(n),T!==null&&(v.data=T)))),(T=Vb?Hb(e,n):Wb(e,n))&&(f=ll(f,"onBeforeInput"),0<f.length&&(u=new Gp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:f}),u.data=T))}H0(d,t)})}function bs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ll(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ps(e,n),i!=null&&r.unshift(bs(e,i,o)),i=ps(e,t),i!=null&&r.push(bs(e,i,o))),e=e.return}return r}function mo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ih(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,f=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&f!==null&&(a=f,o?(c=ps(n,i),c!=null&&s.unshift(bs(n,c,a))):o||(c=ps(n,i),c!=null&&s.push(bs(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var i2=/\r\n?/g,s2=/\u0000|\uFFFD/g;function sh(e){return(typeof e=="string"?e:""+e).replace(i2,`
`).replace(s2,"")}function ia(e,t,n){if(t=sh(t),sh(e)!==t&&n)throw Error(Z(425))}function cl(){}var Zu=null,ed=null;function td(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nd=typeof setTimeout=="function"?setTimeout:void 0,a2=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,l2=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(e){return ah.resolve(null).then(e).catch(c2)}:nd;function c2(e){setTimeout(function(){throw e})}function Bc(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),gs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);gs(t)}function yr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fi=Math.random().toString(36).slice(2),An="__reactFiber$"+fi,ws="__reactProps$"+fi,Gn="__reactContainer$"+fi,rd="__reactEvents$"+fi,u2="__reactListeners$"+fi,d2="__reactHandles$"+fi;function Mr(e){var t=e[An];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gn]||n[An]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lh(e);e!==null;){if(n=e[An])return n;e=lh(e)}return t}e=n,n=e.parentNode}return null}function Ds(e){return e=e[An]||e[Gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Oo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Z(33))}function Kl(e){return e[ws]||null}var od=[],No=-1;function Fr(e){return{current:e}}function Pe(e){0>No||(e.current=od[No],od[No]=null,No--)}function Ce(e,t){No++,od[No]=e.current,e.current=t}var jr={},jt=Fr(jr),Ut=Fr(!1),eo=jr;function Xo(e,t){var n=e.type.contextTypes;if(!n)return jr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Mt(e){return e=e.childContextTypes,e!=null}function ul(){Pe(Ut),Pe(jt)}function ch(e,t,n){if(jt.current!==jr)throw Error(Z(168));Ce(jt,t),Ce(Ut,n)}function q0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(Z(108,Kv(e)||"Unknown",o));return Ue({},n,r)}function dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jr,eo=jt.current,Ce(jt,e),Ce(Ut,Ut.current),!0}function uh(e,t,n){var r=e.stateNode;if(!r)throw Error(Z(169));n?(e=q0(e,t,eo),r.__reactInternalMemoizedMergedChildContext=e,Pe(Ut),Pe(jt),Ce(jt,e)):Pe(Ut),Ce(Ut,n)}var Bn=null,Yl=!1,Vc=!1;function G0(e){Bn===null?Bn=[e]:Bn.push(e)}function f2(e){Yl=!0,G0(e)}function Tr(){if(!Vc&&Bn!==null){Vc=!0;var e=0,t=_e;try{var n=Bn;for(_e=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bn=null,Yl=!1}catch(o){throw Bn!==null&&(Bn=Bn.slice(e+1)),x0(lf,Tr),o}finally{_e=t,Vc=!1}}return null}var Io=[],Lo=0,fl=null,pl=0,on=[],sn=0,to=null,Vn=1,Hn="";function Nr(e,t){Io[Lo++]=pl,Io[Lo++]=fl,fl=e,pl=t}function Q0(e,t,n){on[sn++]=Vn,on[sn++]=Hn,on[sn++]=to,to=e;var r=Vn;e=Hn;var o=32-$n(r)-1;r&=~(1<<o),n+=1;var i=32-$n(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Vn=1<<32-$n(t)+o|n<<o|r,Hn=i+e}else Vn=1<<i|n<<o|r,Hn=e}function yf(e){e.return!==null&&(Nr(e,1),Q0(e,1,0))}function xf(e){for(;e===fl;)fl=Io[--Lo],Io[Lo]=null,pl=Io[--Lo],Io[Lo]=null;for(;e===to;)to=on[--sn],on[sn]=null,Hn=on[--sn],on[sn]=null,Vn=on[--sn],on[sn]=null}var Jt=null,Yt=null,Re=!1,vn=null;function K0(e,t){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Jt=e,Yt=yr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Jt=e,Yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=to!==null?{id:Vn,overflow:Hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Jt=e,Yt=null,!0):!1;default:return!1}}function id(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sd(e){if(Re){var t=Yt;if(t){var n=t;if(!dh(e,t)){if(id(e))throw Error(Z(418));t=yr(n.nextSibling);var r=Jt;t&&dh(e,t)?K0(r,n):(e.flags=e.flags&-4097|2,Re=!1,Jt=e)}}else{if(id(e))throw Error(Z(418));e.flags=e.flags&-4097|2,Re=!1,Jt=e}}}function fh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Jt=e}function sa(e){if(e!==Jt)return!1;if(!Re)return fh(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!td(e.type,e.memoizedProps)),t&&(t=Yt)){if(id(e))throw Y0(),Error(Z(418));for(;t;)K0(e,t),t=yr(t.nextSibling)}if(fh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Yt=yr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Yt=null}}else Yt=Jt?yr(e.stateNode.nextSibling):null;return!0}function Y0(){for(var e=Yt;e;)e=yr(e.nextSibling)}function Jo(){Yt=Jt=null,Re=!1}function vf(e){vn===null?vn=[e]:vn.push(e)}var p2=Yn.ReactCurrentBatchConfig;function Ei(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var r=n.stateNode}if(!r)throw Error(Z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,e))}return e}function aa(e,t){throw e=Object.prototype.toString.call(t),Error(Z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ph(e){var t=e._init;return t(e._payload)}function X0(e){function t(y,g){if(e){var x=y.deletions;x===null?(y.deletions=[g],y.flags|=16):x.push(g)}}function n(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function o(y,g){return y=wr(y,g),y.index=0,y.sibling=null,y}function i(y,g,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<g?(y.flags|=2,g):x):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,g,x,w){return g===null||g.tag!==6?(g=Yc(x,y.mode,w),g.return=y,g):(g=o(g,x),g.return=y,g)}function c(y,g,x,w){var C=x.type;return C===Po?u(y,g,x.props.children,w,x.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===or&&ph(C)===g.type)?(w=o(g,x.props),w.ref=Ei(y,g,x),w.return=y,w):(w=Ua(x.type,x.key,x.props,null,y.mode,w),w.ref=Ei(y,g,x),w.return=y,w)}function f(y,g,x,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Xc(x,y.mode,w),g.return=y,g):(g=o(g,x.children||[]),g.return=y,g)}function u(y,g,x,w,C){return g===null||g.tag!==7?(g=Yr(x,y.mode,w,C),g.return=y,g):(g=o(g,x),g.return=y,g)}function d(y,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Yc(""+g,y.mode,x),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ys:return x=Ua(g.type,g.key,g.props,null,y.mode,x),x.ref=Ei(y,null,g),x.return=y,x;case To:return g=Xc(g,y.mode,x),g.return=y,g;case or:var w=g._init;return d(y,w(g._payload),x)}if(Bi(g)||$i(g))return g=Yr(g,y.mode,x,null),g.return=y,g;aa(y,g)}return null}function p(y,g,x,w){var C=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(y,g,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ys:return x.key===C?c(y,g,x,w):null;case To:return x.key===C?f(y,g,x,w):null;case or:return C=x._init,p(y,g,C(x._payload),w)}if(Bi(x)||$i(x))return C!==null?null:u(y,g,x,w,null);aa(y,x)}return null}function m(y,g,x,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(x)||null,a(g,y,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ys:return y=y.get(w.key===null?x:w.key)||null,c(g,y,w,C);case To:return y=y.get(w.key===null?x:w.key)||null,f(g,y,w,C);case or:var _=w._init;return m(y,g,x,_(w._payload),C)}if(Bi(w)||$i(w))return y=y.get(x)||null,u(g,y,w,C,null);aa(g,w)}return null}function h(y,g,x,w){for(var C=null,_=null,T=g,v=g=0,S=null;T!==null&&v<x.length;v++){T.index>v?(S=T,T=null):S=T.sibling;var P=p(y,T,x[v],w);if(P===null){T===null&&(T=S);break}e&&T&&P.alternate===null&&t(y,T),g=i(P,g,v),_===null?C=P:_.sibling=P,_=P,T=S}if(v===x.length)return n(y,T),Re&&Nr(y,v),C;if(T===null){for(;v<x.length;v++)T=d(y,x[v],w),T!==null&&(g=i(T,g,v),_===null?C=T:_.sibling=T,_=T);return Re&&Nr(y,v),C}for(T=r(y,T);v<x.length;v++)S=m(T,y,v,x[v],w),S!==null&&(e&&S.alternate!==null&&T.delete(S.key===null?v:S.key),g=i(S,g,v),_===null?C=S:_.sibling=S,_=S);return e&&T.forEach(function(F){return t(y,F)}),Re&&Nr(y,v),C}function b(y,g,x,w){var C=$i(x);if(typeof C!="function")throw Error(Z(150));if(x=C.call(x),x==null)throw Error(Z(151));for(var _=C=null,T=g,v=g=0,S=null,P=x.next();T!==null&&!P.done;v++,P=x.next()){T.index>v?(S=T,T=null):S=T.sibling;var F=p(y,T,P.value,w);if(F===null){T===null&&(T=S);break}e&&T&&F.alternate===null&&t(y,T),g=i(F,g,v),_===null?C=F:_.sibling=F,_=F,T=S}if(P.done)return n(y,T),Re&&Nr(y,v),C;if(T===null){for(;!P.done;v++,P=x.next())P=d(y,P.value,w),P!==null&&(g=i(P,g,v),_===null?C=P:_.sibling=P,_=P);return Re&&Nr(y,v),C}for(T=r(y,T);!P.done;v++,P=x.next())P=m(T,y,v,P.value,w),P!==null&&(e&&P.alternate!==null&&T.delete(P.key===null?v:P.key),g=i(P,g,v),_===null?C=P:_.sibling=P,_=P);return e&&T.forEach(function(A){return t(y,A)}),Re&&Nr(y,v),C}function k(y,g,x,w){if(typeof x=="object"&&x!==null&&x.type===Po&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ys:e:{for(var C=x.key,_=g;_!==null;){if(_.key===C){if(C=x.type,C===Po){if(_.tag===7){n(y,_.sibling),g=o(_,x.props.children),g.return=y,y=g;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===or&&ph(C)===_.type){n(y,_.sibling),g=o(_,x.props),g.ref=Ei(y,_,x),g.return=y,y=g;break e}n(y,_);break}else t(y,_);_=_.sibling}x.type===Po?(g=Yr(x.props.children,y.mode,w,x.key),g.return=y,y=g):(w=Ua(x.type,x.key,x.props,null,y.mode,w),w.ref=Ei(y,g,x),w.return=y,y=w)}return s(y);case To:e:{for(_=x.key;g!==null;){if(g.key===_)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(y,g.sibling),g=o(g,x.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else t(y,g);g=g.sibling}g=Xc(x,y.mode,w),g.return=y,y=g}return s(y);case or:return _=x._init,k(y,g,_(x._payload),w)}if(Bi(x))return h(y,g,x,w);if($i(x))return b(y,g,x,w);aa(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(y,g.sibling),g=o(g,x),g.return=y,y=g):(n(y,g),g=Yc(x,y.mode,w),g.return=y,y=g),s(y)):n(y,g)}return k}var Zo=X0(!0),J0=X0(!1),hl=Fr(null),ml=null,Do=null,bf=null;function wf(){bf=Do=ml=null}function $f(e){var t=hl.current;Pe(hl),e._currentValue=t}function ad(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qo(e,t){ml=e,bf=Do=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Dt=!0),e.firstContext=null)}function cn(e){var t=e._currentValue;if(bf!==e)if(e={context:e,memoizedValue:t,next:null},Do===null){if(ml===null)throw Error(Z(308));Do=e,ml.dependencies={lanes:0,firstContext:e}}else Do=Do.next=e;return t}var Br=null;function kf(e){Br===null?Br=[e]:Br.push(e)}function Z0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,kf(t)):(n.next=o.next,o.next=n),t.interleaved=n,Qn(e,r)}function Qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ir=!1;function Sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ey(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Qn(e,n)}return o=r.interleaved,o===null?(t.next=t,kf(r)):(t.next=o.next,o.next=t),r.interleaved=t,Qn(e,n)}function za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cf(e,n)}}function hh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function gl(e,t,n,r){var o=e.updateQueue;ir=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var c=a,f=c.next;c.next=null,s===null?i=f:s.next=f,s=c;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=f:a.next=f,u.lastBaseUpdate=c))}if(i!==null){var d=o.baseState;s=0,u=f=c=null,a=i;do{var p=a.lane,m=a.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var h=e,b=a;switch(p=t,m=n,b.tag){case 1:if(h=b.payload,typeof h=="function"){d=h.call(m,d,p);break e}d=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=b.payload,p=typeof h=="function"?h.call(m,d,p):h,p==null)break e;d=Ue({},d,p);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else m={eventTime:m,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(f=u=m,c=d):u=u.next=m,s|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(u===null&&(c=d),o.baseState=c,o.firstBaseUpdate=f,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ro|=s,e.lanes=s,e.memoizedState=d}}function mh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(Z(191,o));o.call(r)}}}var Us={},zn=Fr(Us),$s=Fr(Us),ks=Fr(Us);function Vr(e){if(e===Us)throw Error(Z(174));return e}function _f(e,t){switch(Ce(ks,t),Ce($s,e),Ce(zn,Us),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Mu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Mu(t,e)}Pe(zn),Ce(zn,t)}function ei(){Pe(zn),Pe($s),Pe(ks)}function ty(e){Vr(ks.current);var t=Vr(zn.current),n=Mu(t,e.type);t!==n&&(Ce($s,e),Ce(zn,n))}function jf(e){$s.current===e&&(Pe(zn),Pe($s))}var Ie=Fr(0);function yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hc=[];function Ef(){for(var e=0;e<Hc.length;e++)Hc[e]._workInProgressVersionPrimary=null;Hc.length=0}var Oa=Yn.ReactCurrentDispatcher,Wc=Yn.ReactCurrentBatchConfig,no=0,Le=null,ot=null,lt=null,xl=!1,ts=!1,Ss=0,h2=0;function vt(){throw Error(Z(321))}function Cf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_n(e[n],t[n]))return!1;return!0}function Ff(e,t,n,r,o,i){if(no=i,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oa.current=e===null||e.memoizedState===null?x2:v2,e=n(r,o),ts){i=0;do{if(ts=!1,Ss=0,25<=i)throw Error(Z(301));i+=1,lt=ot=null,t.updateQueue=null,Oa.current=b2,e=n(r,o)}while(ts)}if(Oa.current=vl,t=ot!==null&&ot.next!==null,no=0,lt=ot=Le=null,xl=!1,t)throw Error(Z(300));return e}function Tf(){var e=Ss!==0;return Ss=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Le.memoizedState=lt=e:lt=lt.next=e,lt}function un(){if(ot===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=ot.next;var t=lt===null?Le.memoizedState:lt.next;if(t!==null)lt=t,ot=e;else{if(e===null)throw Error(Z(310));ot=e,e={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},lt===null?Le.memoizedState=lt=e:lt=lt.next=e}return lt}function _s(e,t){return typeof t=="function"?t(e):t}function qc(e){var t=un(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var r=ot,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,c=null,f=i;do{var u=f.lane;if((no&u)===u)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var d={lane:u,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(a=c=d,s=r):c=c.next=d,Le.lanes|=u,ro|=u}f=f.next}while(f!==null&&f!==i);c===null?s=r:c.next=a,_n(r,t.memoizedState)||(Dt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Le.lanes|=i,ro|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gc(e){var t=un(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);_n(i,t.memoizedState)||(Dt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ny(){}function ry(e,t){var n=Le,r=un(),o=t(),i=!_n(r.memoizedState,o);if(i&&(r.memoizedState=o,Dt=!0),r=r.queue,Pf(sy.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,js(9,iy.bind(null,n,r,o,t),void 0,null),ut===null)throw Error(Z(349));no&30||oy(n,t,o)}return o}function oy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function iy(e,t,n,r){t.value=n,t.getSnapshot=r,ay(t)&&ly(e)}function sy(e,t,n){return n(function(){ay(t)&&ly(e)})}function ay(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_n(e,n)}catch{return!0}}function ly(e){var t=Qn(e,1);t!==null&&kn(t,e,1,-1)}function gh(e){var t=Cn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:e},t.queue=e,e=e.dispatch=y2.bind(null,Le,e),[t.memoizedState,e]}function js(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cy(){return un().memoizedState}function Na(e,t,n,r){var o=Cn();Le.flags|=e,o.memoizedState=js(1|t,n,void 0,r===void 0?null:r)}function Xl(e,t,n,r){var o=un();r=r===void 0?null:r;var i=void 0;if(ot!==null){var s=ot.memoizedState;if(i=s.destroy,r!==null&&Cf(r,s.deps)){o.memoizedState=js(t,n,i,r);return}}Le.flags|=e,o.memoizedState=js(1|t,n,i,r)}function yh(e,t){return Na(8390656,8,e,t)}function Pf(e,t){return Xl(2048,8,e,t)}function uy(e,t){return Xl(4,2,e,t)}function dy(e,t){return Xl(4,4,e,t)}function fy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function py(e,t,n){return n=n!=null?n.concat([e]):null,Xl(4,4,fy.bind(null,t,e),n)}function Af(){}function hy(e,t){var n=un();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function my(e,t){var n=un();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gy(e,t,n){return no&21?(_n(n,t)||(n=w0(),Le.lanes|=n,ro|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Dt=!0),e.memoizedState=n)}function m2(e,t){var n=_e;_e=n!==0&&4>n?n:4,e(!0);var r=Wc.transition;Wc.transition={};try{e(!1),t()}finally{_e=n,Wc.transition=r}}function yy(){return un().memoizedState}function g2(e,t,n){var r=br(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xy(e))vy(t,n);else if(n=Z0(e,t,n,r),n!==null){var o=Pt();kn(n,e,r,o),by(n,t,r)}}function y2(e,t,n){var r=br(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xy(e))vy(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,_n(a,s)){var c=t.interleaved;c===null?(o.next=o,kf(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Z0(e,t,o,r),n!==null&&(o=Pt(),kn(n,e,r,o),by(n,t,r))}}function xy(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function vy(e,t){ts=xl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function by(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cf(e,n)}}var vl={readContext:cn,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},x2={readContext:cn,useCallback:function(e,t){return Cn().memoizedState=[e,t===void 0?null:t],e},useContext:cn,useEffect:yh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Na(4194308,4,fy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Na(4194308,4,e,t)},useInsertionEffect:function(e,t){return Na(4,2,e,t)},useMemo:function(e,t){var n=Cn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Cn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=g2.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=Cn();return e={current:e},t.memoizedState=e},useState:gh,useDebugValue:Af,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=gh(!1),t=e[0];return e=m2.bind(null,e[1]),Cn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,o=Cn();if(Re){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=t(),ut===null)throw Error(Z(349));no&30||oy(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,yh(sy.bind(null,r,i,e),[e]),r.flags|=2048,js(9,iy.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Cn(),t=ut.identifierPrefix;if(Re){var n=Hn,r=Vn;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ss++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=h2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},v2={readContext:cn,useCallback:hy,useContext:cn,useEffect:Pf,useImperativeHandle:py,useInsertionEffect:uy,useLayoutEffect:dy,useMemo:my,useReducer:qc,useRef:cy,useState:function(){return qc(_s)},useDebugValue:Af,useDeferredValue:function(e){var t=un();return gy(t,ot.memoizedState,e)},useTransition:function(){var e=qc(_s)[0],t=un().memoizedState;return[e,t]},useMutableSource:ny,useSyncExternalStore:ry,useId:yy,unstable_isNewReconciler:!1},b2={readContext:cn,useCallback:hy,useContext:cn,useEffect:Pf,useImperativeHandle:py,useInsertionEffect:uy,useLayoutEffect:dy,useMemo:my,useReducer:Gc,useRef:cy,useState:function(){return Gc(_s)},useDebugValue:Af,useDeferredValue:function(e){var t=un();return ot===null?t.memoizedState=e:gy(t,ot.memoizedState,e)},useTransition:function(){var e=Gc(_s)[0],t=un().memoizedState;return[e,t]},useMutableSource:ny,useSyncExternalStore:ry,useId:yy,unstable_isNewReconciler:!1};function gn(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ld(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jl={isMounted:function(e){return(e=e._reactInternals)?uo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pt(),o=br(e),i=Wn(r,o);i.payload=t,n!=null&&(i.callback=n),t=xr(e,i,o),t!==null&&(kn(t,e,o,r),za(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pt(),o=br(e),i=Wn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=xr(e,i,o),t!==null&&(kn(t,e,o,r),za(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pt(),r=br(e),o=Wn(n,r);o.tag=2,t!=null&&(o.callback=t),t=xr(e,o,r),t!==null&&(kn(t,e,r,n),za(t,e,r))}};function xh(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!xs(n,r)||!xs(o,i):!0}function wy(e,t,n){var r=!1,o=jr,i=t.contextType;return typeof i=="object"&&i!==null?i=cn(i):(o=Mt(t)?eo:jt.current,r=t.contextTypes,i=(r=r!=null)?Xo(e,o):jr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function vh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jl.enqueueReplaceState(t,t.state,null)}function cd(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Sf(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=cn(i):(i=Mt(t)?eo:jt.current,o.context=Xo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ld(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Jl.enqueueReplaceState(o,o.state,null),gl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ti(e,t){try{var n="",r=t;do n+=Qv(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Qc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ud(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var w2=typeof WeakMap=="function"?WeakMap:Map;function $y(e,t,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wl||(wl=!0,bd=r),ud(e,t)},n}function ky(e,t,n){n=Wn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ud(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ud(e,t),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function bh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new w2;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=O2.bind(null,e,t,n),t.then(e,e))}function wh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $h(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wn(-1,1),t.tag=2,xr(n,t,1))),n.lanes|=1),e)}var $2=Yn.ReactCurrentOwner,Dt=!1;function Ct(e,t,n,r){t.child=e===null?J0(t,null,n,r):Zo(t,e.child,n,r)}function kh(e,t,n,r,o){n=n.render;var i=t.ref;return Qo(t,o),r=Ff(e,t,n,r,i,o),n=Tf(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Kn(e,t,o)):(Re&&n&&yf(t),t.flags|=1,Ct(e,t,r,o),t.child)}function Sh(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Uf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Sy(e,t,i,r,o)):(e=Ua(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:xs,n(s,r)&&e.ref===t.ref)return Kn(e,t,o)}return t.flags|=1,e=wr(i,r),e.ref=t.ref,e.return=t,t.child=e}function Sy(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(xs(i,r)&&e.ref===t.ref)if(Dt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Dt=!0);else return t.lanes=e.lanes,Kn(e,t,o)}return dd(e,t,n,r,o)}function _y(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Mo,Qt),Qt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(Mo,Qt),Qt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ce(Mo,Qt),Qt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ce(Mo,Qt),Qt|=r;return Ct(e,t,o,n),t.child}function jy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dd(e,t,n,r,o){var i=Mt(n)?eo:jt.current;return i=Xo(t,i),Qo(t,o),n=Ff(e,t,n,r,i,o),r=Tf(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Kn(e,t,o)):(Re&&r&&yf(t),t.flags|=1,Ct(e,t,n,o),t.child)}function _h(e,t,n,r,o){if(Mt(n)){var i=!0;dl(t)}else i=!1;if(Qo(t,o),t.stateNode===null)Ia(e,t),wy(t,n,r),cd(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,f=n.contextType;typeof f=="object"&&f!==null?f=cn(f):(f=Mt(n)?eo:jt.current,f=Xo(t,f));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==f)&&vh(t,s,r,f),ir=!1;var p=t.memoizedState;s.state=p,gl(t,r,s,o),c=t.memoizedState,a!==r||p!==c||Ut.current||ir?(typeof u=="function"&&(ld(t,n,u,r),c=t.memoizedState),(a=ir||xh(t,n,a,r,p,c,f))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=f,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ey(e,t),a=t.memoizedProps,f=t.type===t.elementType?a:gn(t.type,a),s.props=f,d=t.pendingProps,p=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=cn(c):(c=Mt(n)?eo:jt.current,c=Xo(t,c));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||p!==c)&&vh(t,s,r,c),ir=!1,p=t.memoizedState,s.state=p,gl(t,r,s,o);var h=t.memoizedState;a!==d||p!==h||Ut.current||ir?(typeof m=="function"&&(ld(t,n,m,r),h=t.memoizedState),(f=ir||xh(t,n,f,r,p,h,c)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,h,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,h,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),s.props=r,s.state=h,s.context=c,r=f):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return fd(e,t,n,r,i,o)}function fd(e,t,n,r,o,i){jy(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&uh(t,n,!1),Kn(e,t,i);r=t.stateNode,$2.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Zo(t,e.child,null,i),t.child=Zo(t,null,a,i)):Ct(e,t,a,i),t.memoizedState=r.state,o&&uh(t,n,!0),t.child}function Ey(e){var t=e.stateNode;t.pendingContext?ch(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ch(e,t.context,!1),_f(e,t.containerInfo)}function jh(e,t,n,r,o){return Jo(),vf(o),t.flags|=256,Ct(e,t,n,r),t.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function hd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cy(e,t,n){var r=t.pendingProps,o=Ie.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ce(Ie,o&1),e===null)return sd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=tc(s,r,0,null),e=Yr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=hd(n),t.memoizedState=pd,e):Rf(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return k2(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=wr(o,c),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=wr(a,i):(i=Yr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?hd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=pd,r}return i=e.child,e=i.sibling,r=wr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rf(e,t){return t=tc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function la(e,t,n,r){return r!==null&&vf(r),Zo(t,e.child,null,n),e=Rf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function k2(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Qc(Error(Z(422))),la(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=tc({mode:"visible",children:r.children},o,0,null),i=Yr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Zo(t,e.child,null,s),t.child.memoizedState=hd(s),t.memoizedState=pd,i);if(!(t.mode&1))return la(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(Z(419)),r=Qc(i,r,void 0),la(e,t,s,r)}if(a=(s&e.childLanes)!==0,Dt||a){if(r=ut,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Qn(e,o),kn(r,e,o,-1))}return Df(),r=Qc(Error(Z(421))),la(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=N2.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Yt=yr(o.nextSibling),Jt=t,Re=!0,vn=null,e!==null&&(on[sn++]=Vn,on[sn++]=Hn,on[sn++]=to,Vn=e.id,Hn=e.overflow,to=t),t=Rf(t,r.children),t.flags|=4096,t)}function Eh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ad(e.return,t,n)}function Kc(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Fy(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ct(e,t,r.children,n),r=Ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eh(e,n,t);else if(e.tag===19)Eh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Ie,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&yl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Kc(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&yl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Kc(t,!0,n,null,i);break;case"together":Kc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ia(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ro|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Z(153));if(t.child!==null){for(e=t.child,n=wr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function S2(e,t,n){switch(t.tag){case 3:Ey(t),Jo();break;case 5:ty(t);break;case 1:Mt(t.type)&&dl(t);break;case 4:_f(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ce(hl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Ie,Ie.current&1),t.flags|=128,null):n&t.child.childLanes?Cy(e,t,n):(Ce(Ie,Ie.current&1),e=Kn(e,t,n),e!==null?e.sibling:null);Ce(Ie,Ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fy(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ce(Ie,Ie.current),r)break;return null;case 22:case 23:return t.lanes=0,_y(e,t,n)}return Kn(e,t,n)}var Ty,md,Py,Ay;Ty=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};md=function(){};Py=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Vr(zn.current);var i=null;switch(n){case"input":o=Iu(e,o),r=Iu(e,r),i=[];break;case"select":o=Ue({},o,{value:void 0}),r=Ue({},r,{value:void 0}),i=[];break;case"textarea":o=Uu(e,o),r=Uu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}Bu(n,r);var s;n=null;for(f in o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var a=o[f];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(ds.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var c=r[f];if(a=o!=null?o[f]:void 0,r.hasOwnProperty(f)&&c!==a&&(c!=null||a!=null))if(f==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(i=i||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(ds.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&Fe("scroll",e),i||a===c||(i=[])):(i=i||[]).push(f,c))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};Ay=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ci(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function bt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _2(e,t,n){var r=t.pendingProps;switch(xf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(t),null;case 1:return Mt(t.type)&&ul(),bt(t),null;case 3:return r=t.stateNode,ei(),Pe(Ut),Pe(jt),Ef(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(sa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vn!==null&&(kd(vn),vn=null))),md(e,t),bt(t),null;case 5:jf(t);var o=Vr(ks.current);if(n=t.type,e!==null&&t.stateNode!=null)Py(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Z(166));return bt(t),null}if(e=Vr(zn.current),sa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[An]=t,r[ws]=i,e=(t.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(o=0;o<Hi.length;o++)Fe(Hi[o],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":Np(r,i),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Fe("invalid",r);break;case"textarea":Lp(r,i),Fe("invalid",r)}Bu(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ia(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ia(r.textContent,a,e),o=["children",""+a]):ds.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Fe("scroll",r)}switch(n){case"input":Xs(r),Ip(r,i,!0);break;case"textarea":Xs(r),Dp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=cl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=s0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[An]=t,e[ws]=r,Ty(e,t,!1,!1),t.stateNode=e;e:{switch(s=Vu(n,r),n){case"dialog":Fe("cancel",e),Fe("close",e),o=r;break;case"iframe":case"object":case"embed":Fe("load",e),o=r;break;case"video":case"audio":for(o=0;o<Hi.length;o++)Fe(Hi[o],e);o=r;break;case"source":Fe("error",e),o=r;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),o=r;break;case"details":Fe("toggle",e),o=r;break;case"input":Np(e,r),o=Iu(e,r),Fe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Ue({},r,{value:void 0}),Fe("invalid",e);break;case"textarea":Lp(e,r),o=Uu(e,r),Fe("invalid",e);break;default:o=r}Bu(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];i==="style"?c0(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&a0(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&fs(e,c):typeof c=="number"&&fs(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ds.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Fe("scroll",e):c!=null&&nf(e,i,c,s))}switch(n){case"input":Xs(e),Ip(e,r,!1);break;case"textarea":Xs(e),Dp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_r(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ho(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ho(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return bt(t),null;case 6:if(e&&t.stateNode!=null)Ay(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Z(166));if(n=Vr(ks.current),Vr(zn.current),sa(t)){if(r=t.stateNode,n=t.memoizedProps,r[An]=t,(i=r.nodeValue!==n)&&(e=Jt,e!==null))switch(e.tag){case 3:ia(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ia(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=t,t.stateNode=r}return bt(t),null;case 13:if(Pe(Ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&Yt!==null&&t.mode&1&&!(t.flags&128))Y0(),Jo(),t.flags|=98560,i=!1;else if(i=sa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(Z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Z(317));i[An]=t}else Jo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;bt(t),i=!1}else vn!==null&&(kd(vn),vn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ie.current&1?st===0&&(st=3):Df())),t.updateQueue!==null&&(t.flags|=4),bt(t),null);case 4:return ei(),md(e,t),e===null&&vs(t.stateNode.containerInfo),bt(t),null;case 10:return $f(t.type._context),bt(t),null;case 17:return Mt(t.type)&&ul(),bt(t),null;case 19:if(Pe(Ie),i=t.memoizedState,i===null)return bt(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Ci(i,!1);else{if(st!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=yl(e),s!==null){for(t.flags|=128,Ci(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Ie,Ie.current&1|2),t.child}e=e.sibling}i.tail!==null&&Qe()>ni&&(t.flags|=128,r=!0,Ci(i,!1),t.lanes=4194304)}else{if(!r)if(e=yl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ci(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Re)return bt(t),null}else 2*Qe()-i.renderingStartTime>ni&&n!==1073741824&&(t.flags|=128,r=!0,Ci(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Qe(),t.sibling=null,n=Ie.current,Ce(Ie,r?n&1|2:n&1),t):(bt(t),null);case 22:case 23:return Lf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qt&1073741824&&(bt(t),t.subtreeFlags&6&&(t.flags|=8192)):bt(t),null;case 24:return null;case 25:return null}throw Error(Z(156,t.tag))}function j2(e,t){switch(xf(t),t.tag){case 1:return Mt(t.type)&&ul(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ei(),Pe(Ut),Pe(jt),Ef(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jf(t),null;case 13:if(Pe(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Z(340));Jo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Ie),null;case 4:return ei(),null;case 10:return $f(t.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var ca=!1,St=!1,E2=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Uo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(e,t,r)}else n.current=null}function gd(e,t,n){try{n()}catch(r){We(e,t,r)}}var Ch=!1;function C2(e,t){if(Zu=sl,e=I0(),gf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,f=0,u=0,d=e,p=null;t:for(;;){for(var m;d!==n||o!==0&&d.nodeType!==3||(a=s+o),d!==i||r!==0&&d.nodeType!==3||(c=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)p=d,d=m;for(;;){if(d===e)break t;if(p===n&&++f===o&&(a=s),p===i&&++u===r&&(c=s),(m=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=m}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ed={focusedElem:e,selectionRange:n},sl=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var b=h.memoizedProps,k=h.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?b:gn(t.type,b),k);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(w){We(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return h=Ch,Ch=!1,h}function ns(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&gd(t,n,i)}o=o.next}while(o!==r)}}function Zl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ry(e){var t=e.alternate;t!==null&&(e.alternate=null,Ry(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[An],delete t[ws],delete t[rd],delete t[u2],delete t[d2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zy(e){return e.tag===5||e.tag===3||e.tag===4}function Fh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(xd(e,t,n),e=e.sibling;e!==null;)xd(e,t,n),e=e.sibling}function vd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vd(e,t,n),e=e.sibling;e!==null;)vd(e,t,n),e=e.sibling}var gt=null,yn=!1;function tr(e,t,n){for(n=n.child;n!==null;)Oy(e,t,n),n=n.sibling}function Oy(e,t,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:St||Uo(n,t);case 6:var r=gt,o=yn;gt=null,tr(e,t,n),gt=r,yn=o,gt!==null&&(yn?(e=gt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(yn?(e=gt,n=n.stateNode,e.nodeType===8?Bc(e.parentNode,n):e.nodeType===1&&Bc(e,n),gs(e)):Bc(gt,n.stateNode));break;case 4:r=gt,o=yn,gt=n.stateNode.containerInfo,yn=!0,tr(e,t,n),gt=r,yn=o;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&gd(n,t,s),o=o.next}while(o!==r)}tr(e,t,n);break;case 1:if(!St&&(Uo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){We(n,t,a)}tr(e,t,n);break;case 21:tr(e,t,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,tr(e,t,n),St=r):tr(e,t,n);break;default:tr(e,t,n)}}function Th(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new E2),t.forEach(function(r){var o=I2.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function hn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:gt=a.stateNode,yn=!1;break e;case 3:gt=a.stateNode.containerInfo,yn=!0;break e;case 4:gt=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(gt===null)throw Error(Z(160));Oy(i,s,o),gt=null,yn=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(f){We(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ny(t,e),t=t.sibling}function Ny(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hn(t,e),En(e),r&4){try{ns(3,e,e.return),Zl(3,e)}catch(b){We(e,e.return,b)}try{ns(5,e,e.return)}catch(b){We(e,e.return,b)}}break;case 1:hn(t,e),En(e),r&512&&n!==null&&Uo(n,n.return);break;case 5:if(hn(t,e),En(e),r&512&&n!==null&&Uo(n,n.return),e.flags&32){var o=e.stateNode;try{fs(o,"")}catch(b){We(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&o0(o,i),Vu(a,s);var f=Vu(a,i);for(s=0;s<c.length;s+=2){var u=c[s],d=c[s+1];u==="style"?c0(o,d):u==="dangerouslySetInnerHTML"?a0(o,d):u==="children"?fs(o,d):nf(o,u,d,f)}switch(a){case"input":Lu(o,i);break;case"textarea":i0(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Ho(o,!!i.multiple,m,!1):p!==!!i.multiple&&(i.defaultValue!=null?Ho(o,!!i.multiple,i.defaultValue,!0):Ho(o,!!i.multiple,i.multiple?[]:"",!1))}o[ws]=i}catch(b){We(e,e.return,b)}}break;case 6:if(hn(t,e),En(e),r&4){if(e.stateNode===null)throw Error(Z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){We(e,e.return,b)}}break;case 3:if(hn(t,e),En(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gs(t.containerInfo)}catch(b){We(e,e.return,b)}break;case 4:hn(t,e),En(e);break;case 13:hn(t,e),En(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Nf=Qe())),r&4&&Th(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(St=(f=St)||u,hn(t,e),St=f):hn(t,e),En(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!u&&e.mode&1)for(ne=e,u=e.child;u!==null;){for(d=ne=u;ne!==null;){switch(p=ne,m=p.child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Uo(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(b){We(r,n,b)}}break;case 5:Uo(p,p.return);break;case 22:if(p.memoizedState!==null){Ah(d);continue}}m!==null?(m.return=p,ne=m):Ah(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,f?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,c=d.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=l0("display",s))}catch(b){We(e,e.return,b)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=f?"":d.memoizedProps}catch(b){We(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:hn(t,e),En(e),r&4&&Th(e);break;case 21:break;default:hn(t,e),En(e)}}function En(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zy(n)){var r=n;break e}n=n.return}throw Error(Z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(fs(o,""),r.flags&=-33);var i=Fh(e);vd(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Fh(e);xd(e,a,s);break;default:throw Error(Z(161))}}catch(c){We(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function F2(e,t,n){ne=e,Iy(e)}function Iy(e,t,n){for(var r=(e.mode&1)!==0;ne!==null;){var o=ne,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||ca;if(!s){var a=o.alternate,c=a!==null&&a.memoizedState!==null||St;a=ca;var f=St;if(ca=s,(St=c)&&!f)for(ne=o;ne!==null;)s=ne,c=s.child,s.tag===22&&s.memoizedState!==null?Rh(o):c!==null?(c.return=s,ne=c):Rh(o);for(;i!==null;)ne=i,Iy(i),i=i.sibling;ne=o,ca=a,St=f}Ph(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,ne=i):Ph(e)}}function Ph(e){for(;ne!==null;){var t=ne;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:St||Zl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!St)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:gn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&mh(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var u=f.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&gs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}St||t.flags&512&&yd(t)}catch(p){We(t,t.return,p)}}if(t===e){ne=null;break}if(n=t.sibling,n!==null){n.return=t.return,ne=n;break}ne=t.return}}function Ah(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ne=n;break}ne=t.return}}function Rh(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zl(4,t)}catch(c){We(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){We(t,o,c)}}var i=t.return;try{yd(t)}catch(c){We(t,i,c)}break;case 5:var s=t.return;try{yd(t)}catch(c){We(t,s,c)}}}catch(c){We(t,t.return,c)}if(t===e){ne=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ne=a;break}ne=t.return}}var T2=Math.ceil,bl=Yn.ReactCurrentDispatcher,zf=Yn.ReactCurrentOwner,ln=Yn.ReactCurrentBatchConfig,we=0,ut=null,Ze=null,yt=0,Qt=0,Mo=Fr(0),st=0,Es=null,ro=0,ec=0,Of=0,rs=null,It=null,Nf=0,ni=1/0,Dn=null,wl=!1,bd=null,vr=null,ua=!1,ur=null,$l=0,os=0,wd=null,La=-1,Da=0;function Pt(){return we&6?Qe():La!==-1?La:La=Qe()}function br(e){return e.mode&1?we&2&&yt!==0?yt&-yt:p2.transition!==null?(Da===0&&(Da=w0()),Da):(e=_e,e!==0||(e=window.event,e=e===void 0?16:C0(e.type)),e):1}function kn(e,t,n,r){if(50<os)throw os=0,wd=null,Error(Z(185));Is(e,n,r),(!(we&2)||e!==ut)&&(e===ut&&(!(we&2)&&(ec|=n),st===4&&ar(e,yt)),Bt(e,r),n===1&&we===0&&!(t.mode&1)&&(ni=Qe()+500,Yl&&Tr()))}function Bt(e,t){var n=e.callbackNode;pb(e,t);var r=il(e,e===ut?yt:0);if(r===0)n!==null&&Bp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bp(n),t===1)e.tag===0?f2(zh.bind(null,e)):G0(zh.bind(null,e)),l2(function(){!(we&6)&&Tr()}),n=null;else{switch($0(r)){case 1:n=lf;break;case 4:n=v0;break;case 16:n=ol;break;case 536870912:n=b0;break;default:n=ol}n=Wy(n,Ly.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ly(e,t){if(La=-1,Da=0,we&6)throw Error(Z(327));var n=e.callbackNode;if(Ko()&&e.callbackNode!==n)return null;var r=il(e,e===ut?yt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=kl(e,r);else{t=r;var o=we;we|=2;var i=Uy();(ut!==e||yt!==t)&&(Dn=null,ni=Qe()+500,Kr(e,t));do try{R2();break}catch(a){Dy(e,a)}while(!0);wf(),bl.current=i,we=o,Ze!==null?t=0:(ut=null,yt=0,t=st)}if(t!==0){if(t===2&&(o=Qu(e),o!==0&&(r=o,t=$d(e,o))),t===1)throw n=Es,Kr(e,0),ar(e,r),Bt(e,Qe()),n;if(t===6)ar(e,r);else{if(o=e.current.alternate,!(r&30)&&!P2(o)&&(t=kl(e,r),t===2&&(i=Qu(e),i!==0&&(r=i,t=$d(e,i))),t===1))throw n=Es,Kr(e,0),ar(e,r),Bt(e,Qe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(Z(345));case 2:Ir(e,It,Dn);break;case 3:if(ar(e,r),(r&130023424)===r&&(t=Nf+500-Qe(),10<t)){if(il(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Pt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=nd(Ir.bind(null,e,It,Dn),t);break}Ir(e,It,Dn);break;case 4:if(ar(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-$n(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*T2(r/1960))-r,10<r){e.timeoutHandle=nd(Ir.bind(null,e,It,Dn),r);break}Ir(e,It,Dn);break;case 5:Ir(e,It,Dn);break;default:throw Error(Z(329))}}}return Bt(e,Qe()),e.callbackNode===n?Ly.bind(null,e):null}function $d(e,t){var n=rs;return e.current.memoizedState.isDehydrated&&(Kr(e,t).flags|=256),e=kl(e,t),e!==2&&(t=It,It=n,t!==null&&kd(t)),e}function kd(e){It===null?It=e:It.push.apply(It,e)}function P2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!_n(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ar(e,t){for(t&=~Of,t&=~ec,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$n(t),r=1<<n;e[n]=-1,t&=~r}}function zh(e){if(we&6)throw Error(Z(327));Ko();var t=il(e,0);if(!(t&1))return Bt(e,Qe()),null;var n=kl(e,t);if(e.tag!==0&&n===2){var r=Qu(e);r!==0&&(t=r,n=$d(e,r))}if(n===1)throw n=Es,Kr(e,0),ar(e,t),Bt(e,Qe()),n;if(n===6)throw Error(Z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,It,Dn),Bt(e,Qe()),null}function If(e,t){var n=we;we|=1;try{return e(t)}finally{we=n,we===0&&(ni=Qe()+500,Yl&&Tr())}}function oo(e){ur!==null&&ur.tag===0&&!(we&6)&&Ko();var t=we;we|=1;var n=ln.transition,r=_e;try{if(ln.transition=null,_e=1,e)return e()}finally{_e=r,ln.transition=n,we=t,!(we&6)&&Tr()}}function Lf(){Qt=Mo.current,Pe(Mo)}function Kr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,a2(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(xf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ul();break;case 3:ei(),Pe(Ut),Pe(jt),Ef();break;case 5:jf(r);break;case 4:ei();break;case 13:Pe(Ie);break;case 19:Pe(Ie);break;case 10:$f(r.type._context);break;case 22:case 23:Lf()}n=n.return}if(ut=e,Ze=e=wr(e.current,null),yt=Qt=t,st=0,Es=null,Of=ec=ro=0,It=rs=null,Br!==null){for(t=0;t<Br.length;t++)if(n=Br[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Br=null}return e}function Dy(e,t){do{var n=Ze;try{if(wf(),Oa.current=vl,xl){for(var r=Le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}xl=!1}if(no=0,lt=ot=Le=null,ts=!1,Ss=0,zf.current=null,n===null||n.return===null){st=1,Es=t,Ze=null;break}e:{var i=e,s=n.return,a=n,c=t;if(t=yt,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=wh(s);if(m!==null){m.flags&=-257,$h(m,s,a,i,t),m.mode&1&&bh(i,f,t),t=m,c=f;var h=t.updateQueue;if(h===null){var b=new Set;b.add(c),t.updateQueue=b}else h.add(c);break e}else{if(!(t&1)){bh(i,f,t),Df();break e}c=Error(Z(426))}}else if(Re&&a.mode&1){var k=wh(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),$h(k,s,a,i,t),vf(ti(c,a));break e}}i=c=ti(c,a),st!==4&&(st=2),rs===null?rs=[i]:rs.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=$y(i,c,t);hh(i,y);break e;case 1:a=c;var g=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(vr===null||!vr.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=ky(i,a,t);hh(i,w);break e}}i=i.return}while(i!==null)}By(n)}catch(C){t=C,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(!0)}function Uy(){var e=bl.current;return bl.current=vl,e===null?vl:e}function Df(){(st===0||st===3||st===2)&&(st=4),ut===null||!(ro&268435455)&&!(ec&268435455)||ar(ut,yt)}function kl(e,t){var n=we;we|=2;var r=Uy();(ut!==e||yt!==t)&&(Dn=null,Kr(e,t));do try{A2();break}catch(o){Dy(e,o)}while(!0);if(wf(),we=n,bl.current=r,Ze!==null)throw Error(Z(261));return ut=null,yt=0,st}function A2(){for(;Ze!==null;)My(Ze)}function R2(){for(;Ze!==null&&!ob();)My(Ze)}function My(e){var t=Hy(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?By(e):Ze=t,zf.current=null}function By(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=j2(n,t),n!==null){n.flags&=32767,Ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{st=6,Ze=null;return}}else if(n=_2(n,t,Qt),n!==null){Ze=n;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);st===0&&(st=5)}function Ir(e,t,n){var r=_e,o=ln.transition;try{ln.transition=null,_e=1,z2(e,t,n,r)}finally{ln.transition=o,_e=r}return null}function z2(e,t,n,r){do Ko();while(ur!==null);if(we&6)throw Error(Z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(hb(e,i),e===ut&&(Ze=ut=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ua||(ua=!0,Wy(ol,function(){return Ko(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ln.transition,ln.transition=null;var s=_e;_e=1;var a=we;we|=4,zf.current=null,C2(e,n),Ny(n,e),e2(ed),sl=!!Zu,ed=Zu=null,e.current=n,F2(n),ib(),we=a,_e=s,ln.transition=i}else e.current=n;if(ua&&(ua=!1,ur=e,$l=o),i=e.pendingLanes,i===0&&(vr=null),lb(n.stateNode),Bt(e,Qe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(wl)throw wl=!1,e=bd,bd=null,e;return $l&1&&e.tag!==0&&Ko(),i=e.pendingLanes,i&1?e===wd?os++:(os=0,wd=e):os=0,Tr(),null}function Ko(){if(ur!==null){var e=$0($l),t=ln.transition,n=_e;try{if(ln.transition=null,_e=16>e?16:e,ur===null)var r=!1;else{if(e=ur,ur=null,$l=0,we&6)throw Error(Z(331));var o=we;for(we|=4,ne=e.current;ne!==null;){var i=ne,s=i.child;if(ne.flags&16){var a=i.deletions;if(a!==null){for(var c=0;c<a.length;c++){var f=a[c];for(ne=f;ne!==null;){var u=ne;switch(u.tag){case 0:case 11:case 15:ns(8,u,i)}var d=u.child;if(d!==null)d.return=u,ne=d;else for(;ne!==null;){u=ne;var p=u.sibling,m=u.return;if(Ry(u),u===f){ne=null;break}if(p!==null){p.return=m,ne=p;break}ne=m}}}var h=i.alternate;if(h!==null){var b=h.child;if(b!==null){h.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}ne=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,ne=s;else e:for(;ne!==null;){if(i=ne,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,ne=y;break e}ne=i.return}}var g=e.current;for(ne=g;ne!==null;){s=ne;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,ne=x;else e:for(s=g;ne!==null;){if(a=ne,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zl(9,a)}}catch(C){We(a,a.return,C)}if(a===s){ne=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,ne=w;break e}ne=a.return}}if(we=o,Tr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Wl,e)}catch{}r=!0}return r}finally{_e=n,ln.transition=t}}return!1}function Oh(e,t,n){t=ti(n,t),t=$y(e,t,1),e=xr(e,t,1),t=Pt(),e!==null&&(Is(e,1,t),Bt(e,t))}function We(e,t,n){if(e.tag===3)Oh(e,e,n);else for(;t!==null;){if(t.tag===3){Oh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){e=ti(n,e),e=ky(t,e,1),t=xr(t,e,1),e=Pt(),t!==null&&(Is(t,1,e),Bt(t,e));break}}t=t.return}}function O2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pt(),e.pingedLanes|=e.suspendedLanes&n,ut===e&&(yt&n)===n&&(st===4||st===3&&(yt&130023424)===yt&&500>Qe()-Nf?Kr(e,0):Of|=n),Bt(e,t)}function Vy(e,t){t===0&&(e.mode&1?(t=ea,ea<<=1,!(ea&130023424)&&(ea=4194304)):t=1);var n=Pt();e=Qn(e,t),e!==null&&(Is(e,t,n),Bt(e,n))}function N2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vy(e,n)}function I2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Z(314))}r!==null&&r.delete(t),Vy(e,n)}var Hy;Hy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ut.current)Dt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Dt=!1,S2(e,t,n);Dt=!!(e.flags&131072)}else Dt=!1,Re&&t.flags&1048576&&Q0(t,pl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ia(e,t),e=t.pendingProps;var o=Xo(t,jt.current);Qo(t,n),o=Ff(null,t,r,e,o,n);var i=Tf();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mt(r)?(i=!0,dl(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Sf(t),o.updater=Jl,t.stateNode=o,o._reactInternals=t,cd(t,r,e,n),t=fd(null,t,r,!0,i,n)):(t.tag=0,Re&&i&&yf(t),Ct(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ia(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=D2(r),e=gn(r,e),o){case 0:t=dd(null,t,r,e,n);break e;case 1:t=_h(null,t,r,e,n);break e;case 11:t=kh(null,t,r,e,n);break e;case 14:t=Sh(null,t,r,gn(r.type,e),n);break e}throw Error(Z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gn(r,o),dd(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gn(r,o),_h(e,t,r,o,n);case 3:e:{if(Ey(t),e===null)throw Error(Z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ey(e,t),gl(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ti(Error(Z(423)),t),t=jh(e,t,r,n,o);break e}else if(r!==o){o=ti(Error(Z(424)),t),t=jh(e,t,r,n,o);break e}else for(Yt=yr(t.stateNode.containerInfo.firstChild),Jt=t,Re=!0,vn=null,n=J0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jo(),r===o){t=Kn(e,t,n);break e}Ct(e,t,r,n)}t=t.child}return t;case 5:return ty(t),e===null&&sd(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,td(r,o)?s=null:i!==null&&td(r,i)&&(t.flags|=32),jy(e,t),Ct(e,t,s,n),t.child;case 6:return e===null&&sd(t),null;case 13:return Cy(e,t,n);case 4:return _f(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zo(t,null,r,n):Ct(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gn(r,o),kh(e,t,r,o,n);case 7:return Ct(e,t,t.pendingProps,n),t.child;case 8:return Ct(e,t,t.pendingProps.children,n),t.child;case 12:return Ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,Ce(hl,r._currentValue),r._currentValue=s,i!==null)if(_n(i.value,s)){if(i.children===o.children&&!Ut.current){t=Kn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Wn(-1,n&-n),c.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var u=f.pending;u===null?c.next=c:(c.next=u.next,u.next=c),f.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),ad(i.return,n,t),a.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(Z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ad(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Ct(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Qo(t,n),o=cn(o),r=r(o),t.flags|=1,Ct(e,t,r,n),t.child;case 14:return r=t.type,o=gn(r,t.pendingProps),o=gn(r.type,o),Sh(e,t,r,o,n);case 15:return Sy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gn(r,o),Ia(e,t),t.tag=1,Mt(r)?(e=!0,dl(t)):e=!1,Qo(t,n),wy(t,r,o),cd(t,r,o,n),fd(null,t,r,!0,e,n);case 19:return Fy(e,t,n);case 22:return _y(e,t,n)}throw Error(Z(156,t.tag))};function Wy(e,t){return x0(e,t)}function L2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,t,n,r){return new L2(e,t,n,r)}function Uf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function D2(e){if(typeof e=="function")return Uf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===of)return 11;if(e===sf)return 14}return 2}function wr(e,t){var n=e.alternate;return n===null?(n=an(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ua(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Uf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Po:return Yr(n.children,o,i,t);case rf:s=8,o|=8;break;case Ru:return e=an(12,n,t,o|2),e.elementType=Ru,e.lanes=i,e;case zu:return e=an(13,n,t,o),e.elementType=zu,e.lanes=i,e;case Ou:return e=an(19,n,t,o),e.elementType=Ou,e.lanes=i,e;case t0:return tc(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zg:s=10;break e;case e0:s=9;break e;case of:s=11;break e;case sf:s=14;break e;case or:s=16,r=null;break e}throw Error(Z(130,e==null?e:typeof e,""))}return t=an(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Yr(e,t,n,r){return e=an(7,e,r,t),e.lanes=n,e}function tc(e,t,n,r){return e=an(22,e,r,t),e.elementType=t0,e.lanes=n,e.stateNode={isHidden:!1},e}function Yc(e,t,n){return e=an(6,e,null,t),e.lanes=n,e}function Xc(e,t,n){return t=an(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function U2(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pc(0),this.expirationTimes=Pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Mf(e,t,n,r,o,i,s,a,c){return e=new U2(e,t,n,a,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=an(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sf(i),e}function M2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:To,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qy(e){if(!e)return jr;e=e._reactInternals;e:{if(uo(e)!==e||e.tag!==1)throw Error(Z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Z(171))}if(e.tag===1){var n=e.type;if(Mt(n))return q0(e,n,t)}return t}function Gy(e,t,n,r,o,i,s,a,c){return e=Mf(n,r,!0,e,o,i,s,a,c),e.context=qy(null),n=e.current,r=Pt(),o=br(n),i=Wn(r,o),i.callback=t??null,xr(n,i,o),e.current.lanes=o,Is(e,o,r),Bt(e,r),e}function nc(e,t,n,r){var o=t.current,i=Pt(),s=br(o);return n=qy(n),t.context===null?t.context=n:t.pendingContext=n,t=Wn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xr(o,t,s),e!==null&&(kn(e,o,s,i),za(e,o,s)),s}function Sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bf(e,t){Nh(e,t),(e=e.alternate)&&Nh(e,t)}function B2(){return null}var Qy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vf(e){this._internalRoot=e}rc.prototype.render=Vf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Z(409));nc(e,t,null,null)};rc.prototype.unmount=Vf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;oo(function(){nc(null,e,null,null)}),t[Gn]=null}};function rc(e){this._internalRoot=e}rc.prototype.unstable_scheduleHydration=function(e){if(e){var t=_0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sr.length&&t!==0&&t<sr[n].priority;n++);sr.splice(n,0,e),n===0&&E0(e)}};function Hf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ih(){}function V2(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var f=Sl(s);i.call(f)}}var s=Gy(t,r,e,0,null,!1,!1,"",Ih);return e._reactRootContainer=s,e[Gn]=s.current,vs(e.nodeType===8?e.parentNode:e),oo(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var f=Sl(c);a.call(f)}}var c=Mf(e,0,!1,null,null,!1,!1,"",Ih);return e._reactRootContainer=c,e[Gn]=c.current,vs(e.nodeType===8?e.parentNode:e),oo(function(){nc(t,c,n,r)}),c}function ic(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var c=Sl(s);a.call(c)}}nc(t,s,e,o)}else s=V2(n,t,e,o,r);return Sl(s)}k0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vi(t.pendingLanes);n!==0&&(cf(t,n|1),Bt(t,Qe()),!(we&6)&&(ni=Qe()+500,Tr()))}break;case 13:oo(function(){var r=Qn(e,1);if(r!==null){var o=Pt();kn(r,e,1,o)}}),Bf(e,1)}};uf=function(e){if(e.tag===13){var t=Qn(e,134217728);if(t!==null){var n=Pt();kn(t,e,134217728,n)}Bf(e,134217728)}};S0=function(e){if(e.tag===13){var t=br(e),n=Qn(e,t);if(n!==null){var r=Pt();kn(n,e,t,r)}Bf(e,t)}};_0=function(){return _e};j0=function(e,t){var n=_e;try{return _e=e,t()}finally{_e=n}};Wu=function(e,t,n){switch(t){case"input":if(Lu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Kl(r);if(!o)throw Error(Z(90));r0(r),Lu(r,o)}}}break;case"textarea":i0(e,n);break;case"select":t=n.value,t!=null&&Ho(e,!!n.multiple,t,!1)}};f0=If;p0=oo;var H2={usingClientEntryPoint:!1,Events:[Ds,Oo,Kl,u0,d0,If]},Fi={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W2={bundleType:Fi.bundleType,version:Fi.version,rendererPackageName:Fi.rendererPackageName,rendererConfig:Fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=g0(e),e===null?null:e.stateNode},findFiberByHostInstance:Fi.findFiberByHostInstance||B2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!da.isDisabled&&da.supportsFiber)try{Wl=da.inject(W2),Rn=da}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H2;tn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(t))throw Error(Z(200));return M2(e,t,null,n)};tn.createRoot=function(e,t){if(!Hf(e))throw Error(Z(299));var n=!1,r="",o=Qy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Mf(e,1,!1,null,null,n,!1,r,o),e[Gn]=t.current,vs(e.nodeType===8?e.parentNode:e),new Vf(t)};tn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Z(188)):(e=Object.keys(e).join(","),Error(Z(268,e)));return e=g0(t),e=e===null?null:e.stateNode,e};tn.flushSync=function(e){return oo(e)};tn.hydrate=function(e,t,n){if(!oc(t))throw Error(Z(200));return ic(null,e,t,!0,n)};tn.hydrateRoot=function(e,t,n){if(!Hf(e))throw Error(Z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Qy;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Gy(t,null,e,1,n??null,o,!1,i,s),e[Gn]=t.current,vs(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new rc(t)};tn.render=function(e,t,n){if(!oc(t))throw Error(Z(200));return ic(null,e,t,!1,n)};tn.unmountComponentAtNode=function(e){if(!oc(e))throw Error(Z(40));return e._reactRootContainer?(oo(function(){ic(null,null,e,!1,function(){e._reactRootContainer=null,e[Gn]=null})}),!0):!1};tn.unstable_batchedUpdates=If;tn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!oc(n))throw Error(Z(200));if(e==null||e._reactInternals===void 0)throw Error(Z(38));return ic(e,t,n,!1,r)};tn.version="18.3.1-next-f1338f8080-20240426";function Ky(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ky)}catch(e){console.error(e)}}Ky(),Kg.exports=tn;var Yy=Kg.exports,Lh=Yy;Pu.createRoot=Lh.createRoot,Pu.hydrateRoot=Lh.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cs.apply(this,arguments)}var dr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dr||(dr={}));const Dh="popstate";function q2(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return _l("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Fs(o)}return Xy(t,n,null,e)}function G2(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:a="",hash:c=""}=fo(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),_l("",{pathname:s,search:a,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let c=o.location.href,f=c.indexOf("#");a=f===-1?c:c.slice(0,f)}return a+"#"+(typeof i=="string"?i:Fs(i))}function r(o,i){sc(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Xy(t,n,r,e)}function De(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Q2(){return Math.random().toString(36).substr(2,8)}function Uh(e,t){return{usr:e.state,key:e.key,idx:t}}function _l(e,t,n,r){return n===void 0&&(n=null),Cs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fo(t):t,{state:n,key:t&&t.key||r||Q2()})}function Fs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function fo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xy(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=dr.Pop,c=null,f=u();f==null&&(f=0,s.replaceState(Cs({},s.state,{idx:f}),""));function u(){return(s.state||{idx:null}).idx}function d(){a=dr.Pop;let k=u(),y=k==null?null:k-f;f=k,c&&c({action:a,location:b.location,delta:y})}function p(k,y){a=dr.Push;let g=_l(b.location,k,y);n&&n(g,k),f=u()+1;let x=Uh(g,f),w=b.createHref(g);try{s.pushState(x,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(w)}i&&c&&c({action:a,location:b.location,delta:1})}function m(k,y){a=dr.Replace;let g=_l(b.location,k,y);n&&n(g,k),f=u();let x=Uh(g,f),w=b.createHref(g);s.replaceState(x,"",w),i&&c&&c({action:a,location:b.location,delta:0})}function h(k){let y=o.location.origin!=="null"?o.location.origin:o.location.href,g=typeof k=="string"?k:Fs(k);return g=g.replace(/ $/,"%20"),De(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let b={get action(){return a},get location(){return e(o,s)},listen(k){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Dh,d),c=k,()=>{o.removeEventListener(Dh,d),c=null}},createHref(k){return t(o,k)},createURL:h,encodeLocation(k){let y=h(k);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:m,go(k){return s.go(k)}};return b}var Mh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mh||(Mh={}));function K2(e,t,n){return n===void 0&&(n="/"),Y2(e,t,n)}function Y2(e,t,n,r){let o=typeof t=="string"?fo(t):t,i=ri(o.pathname||"/",n);if(i==null)return null;let s=Jy(e);X2(s);let a=null;for(let c=0;a==null&&c<s.length;++c){let f=lw(i);a=sw(s[c],f)}return a}function Jy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let c={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(De(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let f=$r([r,c.relativePath]),u=n.concat(c);i.children&&i.children.length>0&&(De(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Jy(i.children,t,u,f)),!(i.path==null&&!i.index)&&t.push({path:f,score:ow(f,i.index),routesMeta:u})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let c of Zy(i.path))o(i,s,c)}),t}function Zy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Zy(r.join("/")),a=[];return a.push(...s.map(c=>c===""?i:[i,c].join("/"))),o&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function X2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:iw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J2=/^:[\w-]+$/,Z2=3,ew=2,tw=1,nw=10,rw=-2,Bh=e=>e==="*";function ow(e,t){let n=e.split("/"),r=n.length;return n.some(Bh)&&(r+=rw),t&&(r+=ew),n.filter(o=>!Bh(o)).reduce((o,i)=>o+(J2.test(i)?Z2:i===""?tw:nw),r)}function iw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function sw(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],f=a===r.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Sd({path:c.relativePath,caseSensitive:c.caseSensitive,end:f},u),p=c.route;if(!d)return null;Object.assign(o,d.params),s.push({params:o,pathname:$r([i,d.pathname]),pathnameBase:pw($r([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=$r([i,d.pathnameBase]))}return s}function Sd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=aw(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((f,u,d)=>{let{paramName:p,isOptional:m}=u;if(p==="*"){let b=a[d]||"";s=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const h=a[d];return m&&!h?f[p]=void 0:f[p]=(h||"").replace(/%2F/g,"/"),f},{}),pathname:i,pathnameBase:s,pattern:e}}function aw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),sc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function lw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return sc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ri(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const cw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uw=e=>cw.test(e);function dw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?fo(e):e,i;if(n)if(uw(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),sc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=Vh(n.substring(1),"/"):i=Vh(n,t)}else i=t;return{pathname:i,search:hw(r),hash:mw(o)}}function Vh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Jc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Wf(e,t){let n=fw(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=fo(e):(o=Cs({},e),De(!o.pathname||!o.pathname.includes("?"),Jc("?","pathname","search",o)),De(!o.pathname||!o.pathname.includes("#"),Jc("#","pathname","hash",o)),De(!o.search||!o.search.includes("#"),Jc("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;o.pathname=p.join("/")}a=d>=0?t[d]:"/"}let c=dw(o,a),f=s&&s!=="/"&&s.endsWith("/"),u=(i||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(f||u)&&(c.pathname+="/"),c}const $r=e=>e.join("/").replace(/\/\/+/g,"/"),pw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function gw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const e1=["post","put","patch","delete"];new Set(e1);const yw=["get",...e1];new Set(yw);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ts(){return Ts=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ts.apply(this,arguments)}const ac=D.createContext(null),t1=D.createContext(null),Xn=D.createContext(null),lc=D.createContext(null),Nn=D.createContext({outlet:null,matches:[],isDataRoute:!1}),n1=D.createContext(null);function xw(e,t){let{relative:n}=t===void 0?{}:t;pi()||De(!1);let{basename:r,navigator:o}=D.useContext(Xn),{hash:i,pathname:s,search:a}=cc(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:$r([r,s])),o.createHref({pathname:c,search:a,hash:i})}function pi(){return D.useContext(lc)!=null}function Pr(){return pi()||De(!1),D.useContext(lc).location}function r1(e){D.useContext(Xn).static||D.useLayoutEffect(e)}function Jn(){let{isDataRoute:e}=D.useContext(Nn);return e?Rw():vw()}function vw(){pi()||De(!1);let e=D.useContext(ac),{basename:t,future:n,navigator:r}=D.useContext(Xn),{matches:o}=D.useContext(Nn),{pathname:i}=Pr(),s=JSON.stringify(Wf(o,n.v7_relativeSplatPath)),a=D.useRef(!1);return r1(()=>{a.current=!0}),D.useCallback(function(f,u){if(u===void 0&&(u={}),!a.current)return;if(typeof f=="number"){r.go(f);return}let d=qf(f,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:$r([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,s,i,e])}const bw=D.createContext(null);function ww(e){let t=D.useContext(Nn).outlet;return t&&D.createElement(bw.Provider,{value:e},t)}function o1(){let{matches:e}=D.useContext(Nn),t=e[e.length-1];return t?t.params:{}}function cc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=D.useContext(Xn),{matches:o}=D.useContext(Nn),{pathname:i}=Pr(),s=JSON.stringify(Wf(o,r.v7_relativeSplatPath));return D.useMemo(()=>qf(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function $w(e,t){return kw(e,t)}function kw(e,t,n,r){pi()||De(!1);let{navigator:o}=D.useContext(Xn),{matches:i}=D.useContext(Nn),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let f=Pr(),u;if(t){var d;let k=typeof t=="string"?fo(t):t;c==="/"||(d=k.pathname)!=null&&d.startsWith(c)||De(!1),u=k}else u=f;let p=u.pathname||"/",m=p;if(c!=="/"){let k=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let h=K2(e,{pathname:m}),b=Cw(h&&h.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:$r([c,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:$r([c,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&b?D.createElement(lc.Provider,{value:{location:Ts({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:dr.Pop}},b):b}function Sw(){let e=Aw(),t=gw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},t),n?D.createElement("pre",{style:o},n):null,null)}const _w=D.createElement(Sw,null);class jw extends D.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?D.createElement(Nn.Provider,{value:this.props.routeContext},D.createElement(n1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ew(e){let{routeContext:t,match:n,children:r}=e,o=D.useContext(ac);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Nn.Provider,{value:t},r)}function Cw(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let u=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||De(!1),s=s.slice(0,Math.min(s.length,u+1))}let c=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let d=s[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(f=u),d.route.id){let{loaderData:p,errors:m}=n,h=d.route.loader&&p[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||h){c=!0,f>=0?s=s.slice(0,f+1):s=[s[0]];break}}}return s.reduceRight((u,d,p)=>{let m,h=!1,b=null,k=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,b=d.route.errorElement||_w,c&&(f<0&&p===0?(zw("route-fallback"),h=!0,k=null):f===p&&(h=!0,k=d.route.hydrateFallbackElement||null)));let y=t.concat(s.slice(0,p+1)),g=()=>{let x;return m?x=b:h?x=k:d.route.Component?x=D.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=u,D.createElement(Ew,{match:d,routeContext:{outlet:u,matches:y,isDataRoute:n!=null},children:x})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?D.createElement(jw,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var i1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(i1||{}),s1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(s1||{});function Fw(e){let t=D.useContext(ac);return t||De(!1),t}function Tw(e){let t=D.useContext(t1);return t||De(!1),t}function Pw(e){let t=D.useContext(Nn);return t||De(!1),t}function a1(e){let t=Pw(),n=t.matches[t.matches.length-1];return n.route.id||De(!1),n.route.id}function Aw(){var e;let t=D.useContext(n1),n=Tw(),r=a1();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Rw(){let{router:e}=Fw(i1.UseNavigateStable),t=a1(s1.UseNavigateStable),n=D.useRef(!1);return r1(()=>{n.current=!0}),D.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ts({fromRouteId:t},i)))},[e,t])}const Hh={};function zw(e,t,n){Hh[e]||(Hh[e]=!0)}function l1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ma(e){let{to:t,replace:n,state:r,relative:o}=e;pi()||De(!1);let{future:i,static:s}=D.useContext(Xn),{matches:a}=D.useContext(Nn),{pathname:c}=Pr(),f=Jn(),u=qf(t,Wf(a,i.v7_relativeSplatPath),c,o==="path"),d=JSON.stringify(u);return D.useEffect(()=>f(JSON.parse(d),{replace:n,state:r,relative:o}),[f,d,o,n,r]),null}function _d(e){return ww(e.context)}function nt(e){De(!1)}function c1(e){let{basename:t="/",children:n=null,location:r,navigationType:o=dr.Pop,navigator:i,static:s=!1,future:a}=e;pi()&&De(!1);let c=t.replace(/^\/*/,"/"),f=D.useMemo(()=>({basename:c,navigator:i,static:s,future:Ts({v7_relativeSplatPath:!1},a)}),[c,a,i,s]);typeof r=="string"&&(r=fo(r));let{pathname:u="/",search:d="",hash:p="",state:m=null,key:h="default"}=r,b=D.useMemo(()=>{let k=ri(u,c);return k==null?null:{location:{pathname:k,search:d,hash:p,state:m,key:h},navigationType:o}},[c,u,d,p,m,h,o]);return b==null?null:D.createElement(Xn.Provider,{value:f},D.createElement(lc.Provider,{children:n,value:b}))}function Ow(e){let{children:t,location:n}=e;return $w(jd(t),n)}new Promise(()=>{});function jd(e,t){t===void 0&&(t=[]);let n=[];return D.Children.forEach(e,(r,o)=>{if(!D.isValidElement(r))return;let i=[...t,o];if(r.type===D.Fragment){n.push.apply(n,jd(r.props.children,i));return}r.type!==nt&&De(!1),!r.props.index||!r.props.children||De(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=jd(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jl(){return jl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jl.apply(this,arguments)}function u1(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Nw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Iw(e,t){return e.button===0&&(!t||t==="_self")&&!Nw(e)}const Lw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Dw=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Uw="6";try{window.__reactRouterVersion=Uw}catch{}const Mw=D.createContext({isTransitioning:!1}),Bw="startTransition",El=Ov[Bw];function Vw(e){let{basename:t,children:n,future:r,window:o}=e,i=D.useRef();i.current==null&&(i.current=q2({window:o,v5Compat:!0}));let s=i.current,[a,c]=D.useState({action:s.action,location:s.location}),{v7_startTransition:f}=r||{},u=D.useCallback(d=>{f&&El?El(()=>c(d)):c(d)},[c,f]);return D.useLayoutEffect(()=>s.listen(u),[s,u]),D.useEffect(()=>l1(r),[r]),D.createElement(c1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}function Hw(e){let{basename:t,children:n,future:r,window:o}=e,i=D.useRef();i.current==null&&(i.current=G2({window:o,v5Compat:!0}));let s=i.current,[a,c]=D.useState({action:s.action,location:s.location}),{v7_startTransition:f}=r||{},u=D.useCallback(d=>{f&&El?El(()=>c(d)):c(d)},[c,f]);return D.useLayoutEffect(()=>s.listen(u),[s,u]),D.useEffect(()=>l1(r),[r]),D.createElement(c1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Ww=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gw=D.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:c,to:f,preventScrollReset:u,viewTransition:d}=t,p=u1(t,Lw),{basename:m}=D.useContext(Xn),h,b=!1;if(typeof f=="string"&&qw.test(f)&&(h=f,Ww))try{let x=new URL(window.location.href),w=f.startsWith("//")?new URL(x.protocol+f):new URL(f),C=ri(w.pathname,m);w.origin===x.origin&&C!=null?f=C+w.search+w.hash:b=!0}catch{}let k=xw(f,{relative:o}),y=Yw(f,{replace:s,state:a,target:c,preventScrollReset:u,relative:o,viewTransition:d});function g(x){r&&r(x),x.defaultPrevented||y(x)}return D.createElement("a",jl({},p,{href:h||k,onClick:b||i?r:g,ref:n,target:c}))}),Qw=D.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:c,viewTransition:f,children:u}=t,d=u1(t,Dw),p=cc(c,{relative:d.relative}),m=Pr(),h=D.useContext(t1),{navigator:b,basename:k}=D.useContext(Xn),y=h!=null&&Xw(p)&&f===!0,g=b.encodeLocation?b.encodeLocation(p).pathname:p.pathname,x=m.pathname,w=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;o||(x=x.toLowerCase(),w=w?w.toLowerCase():null,g=g.toLowerCase()),w&&k&&(w=ri(w,k)||w);const C=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let _=x===g||!s&&x.startsWith(g)&&x.charAt(C)==="/",T=w!=null&&(w===g||!s&&w.startsWith(g)&&w.charAt(g.length)==="/"),v={isActive:_,isPending:T,isTransitioning:y},S=_?r:void 0,P;typeof i=="function"?P=i(v):P=[i,_?"active":null,T?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let F=typeof a=="function"?a(v):a;return D.createElement(Gw,jl({},d,{"aria-current":S,className:P,ref:n,style:F,to:c,viewTransition:f}),typeof u=="function"?u(v):u)});var Ed;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ed||(Ed={}));var Wh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wh||(Wh={}));function Kw(e){let t=D.useContext(ac);return t||De(!1),t}function Yw(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,c=Jn(),f=Pr(),u=cc(e,{relative:s});return D.useCallback(d=>{if(Iw(d,n)){d.preventDefault();let p=r!==void 0?r:Fs(f)===Fs(u);c(e,{replace:p,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[f,c,u,r,o,n,e,i,s,a])}function Xw(e,t){t===void 0&&(t={});let n=D.useContext(Mw);n==null&&De(!1);let{basename:r}=Kw(Ed.useViewTransitionState),o=cc(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=ri(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=ri(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Sd(o.pathname,s)!=null||Sd(o.pathname,i)!=null}var ct=function(){return ct=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ct.apply(this,arguments)};function oi(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Te="-ms-",is="-moz-",Se="-webkit-",d1="comm",uc="rule",Gf="decl",Jw="@import",Zw="@namespace",f1="@keyframes",e$="@layer",p1=Math.abs,Qf=String.fromCharCode,Cd=Object.assign;function t$(e,t){return it(e,0)^45?(((t<<2^it(e,0))<<2^it(e,1))<<2^it(e,2))<<2^it(e,3):0}function h1(e){return e.trim()}function Un(e,t){return(e=t.exec(e))?e[0]:e}function me(e,t,n){return e.replace(t,n)}function Ba(e,t,n){return e.indexOf(t,n)}function it(e,t){return e.charCodeAt(t)|0}function io(e,t,n){return e.slice(t,n)}function xn(e){return e.length}function m1(e){return e.length}function Wi(e,t){return t.push(e),e}function n$(e,t){return e.map(t).join("")}function qh(e,t){return e.filter(function(n){return!Un(n,t)})}var dc=1,ii=1,g1=0,dn=0,Je=0,hi="";function fc(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:dc,column:ii,length:s,return:"",siblings:a}}function rr(e,t){return Cd(fc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function go(e){for(;e.root;)e=rr(e.root,{children:[e]});Wi(e,e.siblings)}function r$(){return Je}function o$(){return Je=dn>0?it(hi,--dn):0,ii--,Je===10&&(ii=1,dc--),Je}function Sn(){return Je=dn<g1?it(hi,dn++):0,ii++,Je===10&&(ii=1,dc++),Je}function fr(){return it(hi,dn)}function Va(){return dn}function pc(e,t){return io(hi,e,t)}function Ps(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function i$(e){return dc=ii=1,g1=xn(hi=e),dn=0,[]}function s$(e){return hi="",e}function Zc(e){return h1(pc(dn-1,Fd(e===91?e+2:e===40?e+1:e)))}function a$(e){for(;(Je=fr())&&Je<33;)Sn();return Ps(e)>2||Ps(Je)>3?"":" "}function l$(e,t){for(;--t&&Sn()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return pc(e,Va()+(t<6&&fr()==32&&Sn()==32))}function Fd(e){for(;Sn();)switch(Je){case e:return dn;case 34:case 39:e!==34&&e!==39&&Fd(Je);break;case 40:e===41&&Fd(e);break;case 92:Sn();break}return dn}function c$(e,t){for(;Sn()&&e+Je!==57;)if(e+Je===84&&fr()===47)break;return"/*"+pc(t,dn-1)+"*"+Qf(e===47?e:Sn())}function u$(e){for(;!Ps(fr());)Sn();return pc(e,dn)}function d$(e){return s$(Ha("",null,null,null,[""],e=i$(e),0,[0],e))}function Ha(e,t,n,r,o,i,s,a,c){for(var f=0,u=0,d=s,p=0,m=0,h=0,b=1,k=1,y=1,g=0,x="",w=o,C=i,_=r,T=x;k;)switch(h=g,g=Sn()){case 40:if(h!=108&&it(T,d-1)==58){Ba(T+=me(Zc(g),"&","&\f"),"&\f",p1(f?a[f-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:T+=Zc(g);break;case 9:case 10:case 13:case 32:T+=a$(h);break;case 92:T+=l$(Va()-1,7);continue;case 47:switch(fr()){case 42:case 47:Wi(f$(c$(Sn(),Va()),t,n,c),c),(Ps(h||1)==5||Ps(fr()||1)==5)&&xn(T)&&io(T,-1,void 0)!==" "&&(T+=" ");break;default:T+="/"}break;case 123*b:a[f++]=xn(T)*y;case 125*b:case 59:case 0:switch(g){case 0:case 125:k=0;case 59+u:y==-1&&(T=me(T,/\f/g,"")),m>0&&(xn(T)-d||b===0&&h===47)&&Wi(m>32?Qh(T+";",r,n,d-1,c):Qh(me(T," ","")+";",r,n,d-2,c),c);break;case 59:T+=";";default:if(Wi(_=Gh(T,t,n,f,u,o,a,x,w=[],C=[],d,i),i),g===123)if(u===0)Ha(T,t,_,_,w,i,d,a,C);else{switch(p){case 99:if(it(T,3)===110)break;case 108:if(it(T,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Ha(e,_,_,r&&Wi(Gh(e,_,_,0,0,o,a,x,o,w=[],d,C),C),o,C,d,a,r?w:C):Ha(T,_,_,_,[""],C,0,a,C)}}f=u=m=0,b=y=1,x=T="",d=s;break;case 58:d=1+xn(T),m=h;default:if(b<1){if(g==123)--b;else if(g==125&&b++==0&&o$()==125)continue}switch(T+=Qf(g),g*b){case 38:y=u>0?1:(T+="\f",-1);break;case 44:a[f++]=(xn(T)-1)*y,y=1;break;case 64:fr()===45&&(T+=Zc(Sn())),p=fr(),u=d=xn(x=T+=u$(Va())),g++;break;case 45:h===45&&xn(T)==2&&(b=0)}}return i}function Gh(e,t,n,r,o,i,s,a,c,f,u,d){for(var p=o-1,m=o===0?i:[""],h=m1(m),b=0,k=0,y=0;b<r;++b)for(var g=0,x=io(e,p+1,p=p1(k=s[b])),w=e;g<h;++g)(w=h1(k>0?m[g]+" "+x:me(x,/&\f/g,m[g])))&&(c[y++]=w);return fc(e,t,n,o===0?uc:a,c,f,u,d)}function f$(e,t,n,r){return fc(e,t,n,d1,Qf(r$()),io(e,2,-2),0,r)}function Qh(e,t,n,r,o){return fc(e,t,n,Gf,io(e,0,r),io(e,r+1,-1),r,o)}function y1(e,t,n){switch(t$(e,t)){case 5103:return Se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Se+e+e;case 4855:return Se+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return is+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+e+is+e+Te+e+e;case 5936:switch(it(e,t+11)){case 114:return Se+e+Te+me(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Se+e+Te+me(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Se+e+Te+me(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Se+e+Te+e+e;case 6165:return Se+e+Te+"flex-"+e+e;case 5187:return Se+e+me(e,/(\w+).+(:[^]+)/,Se+"box-$1$2"+Te+"flex-$1$2")+e;case 5443:return Se+e+Te+"flex-item-"+me(e,/flex-|-self/g,"")+(Un(e,/flex-|baseline/)?"":Te+"grid-row-"+me(e,/flex-|-self/g,""))+e;case 4675:return Se+e+Te+"flex-line-pack"+me(e,/align-content|flex-|-self/g,"")+e;case 5548:return Se+e+Te+me(e,"shrink","negative")+e;case 5292:return Se+e+Te+me(e,"basis","preferred-size")+e;case 6060:return Se+"box-"+me(e,"-grow","")+Se+e+Te+me(e,"grow","positive")+e;case 4554:return Se+me(e,/([^-])(transform)/g,"$1"+Se+"$2")+e;case 6187:return me(me(me(e,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),e,"")+e;case 5495:case 3959:return me(e,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return me(me(e,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+Te+"flex-pack:$3"),/space-between/,"justify")+Se+e+e;case 4200:if(!Un(e,/flex-|baseline/))return Te+"grid-column-align"+io(e,t)+e;break;case 2592:case 3360:return Te+me(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Un(r.props,/grid-\w+-end/)})?~Ba(e+(n=n[t].value),"span",0)?e:Te+me(e,"-start","")+e+Te+"grid-row-span:"+(~Ba(n,"span",0)?Un(n,/\d+/):+Un(n,/\d+/)-+Un(e,/\d+/))+";":Te+me(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Un(r.props,/grid-\w+-start/)})?e:Te+me(me(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return me(e,/(.+)-inline(.+)/,Se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-t>6)switch(it(e,t+1)){case 109:if(it(e,t+4)!==45)break;case 102:return me(e,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+is+(it(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ba(e,"stretch",0)?y1(me(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return me(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,c,f){return Te+o+":"+i+f+(s?Te+o+"-span:"+(a?c:+c-+i)+f:"")+e});case 4949:if(it(e,t+6)===121)return me(e,":",":"+Se)+e;break;case 6444:switch(it(e,it(e,14)===45?18:11)){case 120:return me(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Se+(it(e,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+Te+"$2box$3")+e;case 100:return me(e,":",":"+Te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return me(e,"scroll-","scroll-snap-")+e}return e}function Cl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function p$(e,t,n,r){switch(e.type){case e$:if(e.children.length)break;case Jw:case Zw:case Gf:return e.return=e.return||e.value;case d1:return"";case f1:return e.return=e.value+"{"+Cl(e.children,r)+"}";case uc:if(!xn(e.value=e.props.join(",")))return""}return xn(n=Cl(e.children,r))?e.return=e.value+"{"+n+"}":""}function h$(e){var t=m1(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function m$(e){return function(t){t.root||(t=t.return)&&e(t)}}function g$(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Gf:e.return=y1(e.value,e.length,n);return;case f1:return Cl([rr(e,{value:me(e.value,"@","@"+Se)})],r);case uc:if(e.length)return n$(n=e.props,function(o){switch(Un(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":go(rr(e,{props:[me(o,/:(read-\w+)/,":"+is+"$1")]})),go(rr(e,{props:[o]})),Cd(e,{props:qh(n,r)});break;case"::placeholder":go(rr(e,{props:[me(o,/:(plac\w+)/,":"+Se+"input-$1")]})),go(rr(e,{props:[me(o,/:(plac\w+)/,":"+is+"$1")]})),go(rr(e,{props:[me(o,/:(plac\w+)/,Te+"input-$1")]})),go(rr(e,{props:[o]})),Cd(e,{props:qh(n,r)});break}return""})}}var y$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gt={},si=typeof process<"u"&&Gt!==void 0&&(Gt.REACT_APP_SC_ATTR||Gt.SC_ATTR)||"data-styled",x1="active",v1="data-styled-version",hc="6.3.11",Kf=`/*!sc*/
`,ss=typeof window<"u"&&typeof document<"u",x$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==""?Gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.SC_DISABLE_SPEEDY!==void 0&&Gt.SC_DISABLE_SPEEDY!==""&&Gt.SC_DISABLE_SPEEDY!=="false"&&Gt.SC_DISABLE_SPEEDY),v$={};function so(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Wa=new Map,Fl=new Map,qa=1,qi=function(e){if(Wa.has(e))return Wa.get(e);for(;Fl.has(qa);)qa++;var t=qa++;return Wa.set(e,t),Fl.set(t,e),t},b$=function(e,t){qa=t+1,Wa.set(e,t),Fl.set(t,e)},Yf=Object.freeze([]),ai=Object.freeze({});function b1(e,t,n){return n===void 0&&(n=ai),e.theme!==n.theme&&e.theme||t||n.theme}var w1=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),w$=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$$=/(^-|-$)/g;function Kh(e){return e.replace(w$,"-").replace($$,"")}var k$=/(a)(d)/gi,Yh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Td(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Yh(t%52)+n;return(Yh(t%52)+n).replace(k$,"$1-$2")}var eu,Dr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},$1=function(e){return Dr(5381,e)};function Xf(e){return Td($1(e)>>>0)}function S$(e){return e.displayName||e.name||"Component"}function tu(e){return typeof e=="string"&&!0}var k1=typeof Symbol=="function"&&Symbol.for,S1=k1?Symbol.for("react.memo"):60115,_$=k1?Symbol.for("react.forward_ref"):60112,j$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},E$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},C$=((eu={})[_$]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},eu[S1]=_1,eu);function Xh(e){return("type"in(t=e)&&t.type.$$typeof)===S1?_1:"$$typeof"in e?C$[e.$$typeof]:j$;var t}var F$=Object.defineProperty,T$=Object.getOwnPropertyNames,Jh=Object.getOwnPropertySymbols,P$=Object.getOwnPropertyDescriptor,A$=Object.getPrototypeOf,Zh=Object.prototype;function j1(e,t,n){if(typeof t!="string"){if(Zh){var r=A$(t);r&&r!==Zh&&j1(e,r,n)}var o=T$(t);Jh&&(o=o.concat(Jh(t)));for(var i=Xh(e),s=Xh(t),a=0;a<o.length;++a){var c=o[a];if(!(c in E$||n&&n[c]||s&&c in s||i&&c in i)){var f=P$(t,c);try{F$(e,c,f)}catch{}}}}return e}function ao(e){return typeof e=="function"}function Jf(e){return typeof e=="object"&&"styledComponentId"in e}function Hr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Tl(e,t){return e.join("")}function As(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Pd(e,t,n){if(n===void 0&&(n=!1),!n&&!As(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Pd(e[r],t[r]);else if(As(t))for(var r in t)e[r]=Pd(e[r],t[r]);return e}function Zf(e,t){Object.defineProperty(e,"toString",{value:t})}var R$=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw so(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),c=0,f=(s=0,n.length);s<f;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++,c++);c>0&&this._cGroup>t&&(this._cIndex+=c)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+=this.tag.getRule(s)+Kf;return n},e}(),z$="style[".concat(si,"][").concat(v1,'="').concat(hc,'"]'),O$=new RegExp("^".concat(si,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),em=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Ad=function(e){if(!e)return document;if(em(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(em(t))return t}return document},N$=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},I$=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Kf),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var c=a.match(O$);if(c){var f=0|parseInt(c[1],10),u=c[2];f!==0&&(b$(u,f),N$(e,u,c[3]),e.getTag().insertRules(f,o)),o.length=0}else o.push(a)}}},nu=function(e){for(var t=Ad(e.options.target).querySelectorAll(z$),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(si)!==x1&&(I$(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function L$(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var E1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var c=Array.from(a.querySelectorAll("style[".concat(si,"]")));return c[c.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(si,x1),r.setAttribute(v1,hc);var s=L$();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},D$=function(){function e(t){this.element=E1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,i=0,s=o.length;i<s;i++){var a=o[i];if(a.ownerNode===n)return a}throw so(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),U$=function(){function e(t){this.element=E1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),M$=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),tm=ss,B$={isServer:!ss,useCSSOMInjection:!x$},Pl=function(){function e(t,n,r){t===void 0&&(t=ai),n===void 0&&(n={});var o=this;this.options=ct(ct({},B$),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ss&&tm&&(tm=!1,nu(this)),Zf(this,function(){return function(i){for(var s=i.getTag(),a=s.length,c="",f=function(d){var p=function(y){return Fl.get(y)}(d);if(p===void 0)return"continue";var m=i.names.get(p);if(m===void 0||!m.size)return"continue";var h=s.getGroup(d);if(h.length===0)return"continue";var b=si+".g"+d+'[id="'+p+'"]',k="";m.forEach(function(y){y.length>0&&(k+=y+",")}),c+=h+b+'{content:"'+k+'"}'+Kf},u=0;u<a;u++)f(u);return c}(o)})}return e.registerId=function(t){return qi(t)},e.prototype.rehydrate=function(){!this.server&&ss&&nu(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ct(ct({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&ss&&t.target!==this.options.target&&Ad(this.options.target)!==Ad(t.target)&&nu(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new M$(o):r?new D$(o):new U$(o)}(this.options),new R$(t)));var t},e.prototype.hasNameForId=function(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o},e.prototype.registerName=function(t,n){qi(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(qi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(qi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),V$=/&/g,Mn=47,Ur=42;function nm(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,o=!1,i=0;i<t;i++){var s=e.charCodeAt(i);if(r!==0||o||s!==Mn||e.charCodeAt(i+1)!==Ur)if(o)s===Ur&&e.charCodeAt(i+1)===Mn&&(o=!1,i++);else if(s!==34&&s!==39||i!==0&&e.charCodeAt(i-1)===92){if(r===0){if(s===123)n++;else if(s===125&&--n<0)return!0}}else r===0?r=s:r===s&&(r=0);else o=!0,i++}return n!==0||r!==0}function C1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=C1(n.children,t)),n})}function H$(e){var t,n,r,o=ai,i=o.options,s=i===void 0?ai:i,a=o.plugins,c=a===void 0?Yf:a,f=function(h,b,k){return k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):h},u=c.slice();u.push(function(h){h.type===uc&&h.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),h.props[0]=h.props[0].replace(V$,n).replace(r,f))}),s.prefix&&u.push(g$),u.push(p$);var d=[],p=h$(u.concat(m$(function(h){return d.push(h)}))),m=function(h,b,k,y){b===void 0&&(b=""),k===void 0&&(k=""),y===void 0&&(y="&"),t=y,n=b,r=void 0;var g=function(w){if(!nm(w))return w;for(var C=w.length,_="",T=0,v=0,S=0,P=!1,F=0;F<C;F++){var A=w.charCodeAt(F);if(S!==0||P||A!==Mn||w.charCodeAt(F+1)!==Ur)if(P)A===Ur&&w.charCodeAt(F+1)===Mn&&(P=!1,F++);else if(A!==34&&A!==39||F!==0&&w.charCodeAt(F-1)===92){if(S===0)if(A===123)v++;else if(A===125){if(--v<0){for(var N=F+1;N<C;){var R=w.charCodeAt(N);if(R===59||R===10)break;N++}N<C&&w.charCodeAt(N)===59&&N++,v=0,F=N-1,T=N;continue}v===0&&(_+=w.substring(T,F+1),T=F+1)}else A===59&&v===0&&(_+=w.substring(T,F+1),T=F+1)}else S===0?S=A:S===A&&(S=0);else P=!0,F++}if(T<C){var U=w.substring(T);nm(U)||(_+=U)}return _}(function(w){if(w.indexOf("//")===-1)return w;for(var C=w.length,_=[],T=0,v=0,S=0,P=0;v<C;){var F=w.charCodeAt(v);if(F!==34&&F!==39||v!==0&&w.charCodeAt(v-1)===92)if(S===0)if(F===Mn&&v+1<C&&w.charCodeAt(v+1)===Ur){for(v+=2;v+1<C&&(w.charCodeAt(v)!==Ur||w.charCodeAt(v+1)!==Mn);)v++;v+=2}else if(F===40&&v>=3&&(32|w.charCodeAt(v-1))==108&&(32|w.charCodeAt(v-2))==114&&(32|w.charCodeAt(v-3))==117)P=1,v++;else if(P>0)F===41?P--:F===40&&P++,v++;else if(F===Ur&&v+1<C&&w.charCodeAt(v+1)===Mn)v>T&&_.push(w.substring(T,v)),T=v+=2;else if(F===Mn&&v+1<C&&w.charCodeAt(v+1)===Mn){for(v>T&&_.push(w.substring(T,v));v<C&&w.charCodeAt(v)!==10;)v++;T=v}else v++;else v++;else S===0?S=F:S===F&&(S=0),v++}return T===0?w:(T<C&&_.push(w.substring(T)),_.join(""))}(h)),x=d$(k||b?"".concat(k," ").concat(b," { ").concat(g," }"):g);return s.namespace&&(x=C1(x,s.namespace)),d=[],Cl(x,p),d};return m.hash=c.length?c.reduce(function(h,b){return b.name||so(15),Dr(h,b.name)},5381).toString():"",m}var W$=new Pl,Rd=H$(),F1=se.createContext({shouldForwardProp:void 0,styleSheet:W$,stylis:Rd});F1.Consumer;se.createContext(void 0);function zd(){return se.useContext(F1)}var T1=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Rd);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Zf(this,function(){throw so(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Rd),this.name+t.hash},e}();function q$(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in y$||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var G$=function(e){return e>="A"&&e<="Z"};function rm(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;G$(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var P1=function(e){return e==null||e===!1||e===""},A1=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!P1(r)&&(Array.isArray(r)&&r.isCss||ao(r)?t.push("".concat(rm(n),":"),r,";"):As(r)?t.push.apply(t,oi(oi(["".concat(n," {")],A1(r),!1),["}"],!1)):t.push("".concat(rm(n),": ").concat(q$(n,r),";")))}return t};function kr(e,t,n,r,o){if(o===void 0&&(o=[]),typeof e=="string")return e&&o.push(e),o;if(P1(e))return o;if(Jf(e))return o.push(".".concat(e.styledComponentId)),o;if(ao(e)){if(!ao(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return o.push(e),o;var i=e(t);return kr(i,t,n,r,o)}var s;if(e instanceof T1)return n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o;if(As(e)){for(var a=A1(e),c=0;c<a.length;c++)o.push(a[c]);return o}if(!Array.isArray(e))return o.push(e.toString()),o;for(c=0;c<e.length;c++)kr(e[c],t,n,r,o);return o}function R1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ao(n)&&!Jf(n))return!1}return!0}var Q$=$1(hc),K$=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&R1(t),this.componentId=n,this.baseHash=Dr(Q$,n),this.baseStyle=r,Pl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Hr(o,this.staticRulesId);else{var i=Tl(kr(this.rules,t,n,r)),s=Td(Dr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=Hr(o,s),this.staticRulesId=s}else{for(var c=Dr(this.baseHash,r.hash),f="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")f+=d;else if(d){var p=Tl(kr(d,t,n,r));c=Dr(Dr(c,String(u)),p),f+=p}}if(f){var m=Td(c>>>0);if(!n.hasNameForId(this.componentId,m)){var h=r(f,".".concat(m),void 0,this.componentId);n.insertRules(this.componentId,m,h)}o=Hr(o,m)}}return{className:o,css:typeof window>"u"?n.getTag().getGroup(qi(this.componentId)):""}},e}(),Rs=se.createContext(void 0);Rs.Consumer;function Y$(e){var t=se.useContext(Rs),n=se.useMemo(function(){return function(r,o){if(!r)throw so(14);if(ao(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw so(8);return o?ct(ct({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?se.createElement(Rs.Provider,{value:n},e.children):null}var ru={};function X$(e,t,n){var r=Jf(e),o=e,i=!tu(e),s=t.attrs,a=s===void 0?Yf:s,c=t.componentId,f=c===void 0?function(w,C){var _=typeof w!="string"?"sc":Kh(w);ru[_]=(ru[_]||0)+1;var T="".concat(_,"-").concat(Xf(hc+_+ru[_]));return C?"".concat(C,"-").concat(T):T}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(w){return tu(w)?"styled.".concat(w):"Styled(".concat(S$(w),")")}(e):u,p=t.displayName&&t.componentId?"".concat(Kh(t.displayName),"-").concat(t.componentId):t.componentId||f,m=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,h=t.shouldForwardProp;if(r&&o.shouldForwardProp){var b=o.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;h=function(w,C){return b(w,C)&&k(w,C)}}else h=b}var y=new K$(n,p,r?o.componentStyle:void 0);function g(w,C){return function(_,T,v){var S=_.attrs,P=_.componentStyle,F=_.defaultProps,A=_.foldedComponentIds,N=_.styledComponentId,R=_.target,U=se.useContext(Rs),j=zd(),$=_.shouldForwardProp||j.shouldForwardProp,I=b1(T,U,F)||ai,z=function(H,te,ee){for(var ie,le=ct(ct({},te),{className:void 0,theme:ee}),de=0;de<H.length;de+=1){var $e=ao(ie=H[de])?ie(le):ie;for(var Me in $e)Me==="className"?le.className=Hr(le.className,$e[Me]):Me==="style"?le.style=ct(ct({},le.style),$e[Me]):le[Me]=$e[Me]}return"className"in te&&typeof te.className=="string"&&(le.className=Hr(le.className,te.className)),le}(S,T,I),L=z.as||R,Q={};for(var V in z)z[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&z.theme===I||(V==="forwardedAs"?Q.as=z.forwardedAs:$&&!$(V,L)||(Q[V]=z[V]));var K=function(H,te){var ee=zd(),ie=H.generateAndInjectStyles(te,ee.styleSheet,ee.stylis);return ie}(P,z),G=K.className,M=Hr(A,N);return G&&(M+=" "+G),z.className&&(M+=" "+z.className),Q[tu(L)&&!w1.has(L)?"class":"className"]=M,v&&(Q.ref=v),D.createElement(L,Q)}(x,w,C)}g.displayName=d;var x=se.forwardRef(g);return x.attrs=m,x.componentStyle=y,x.displayName=d,x.shouldForwardProp=h,x.foldedComponentIds=r?Hr(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=p,x.target=r?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(C){for(var _=[],T=1;T<arguments.length;T++)_[T-1]=arguments[T];for(var v=0,S=_;v<S.length;v++)Pd(C,S[v],!0);return C}({},o.defaultProps,w):w}}),Zf(x,function(){return".".concat(x.styledComponentId)}),i&&j1(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function om(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var im=function(e){return Object.assign(e,{isCss:!0})};function Er(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ao(e)||As(e))return im(kr(om(Yf,oi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?kr(r):im(kr(om(r,t)))}function Od(e,t,n){if(n===void 0&&(n=ai),!t)throw so(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Er.apply(void 0,oi([o],i,!1)))};return r.attrs=function(o){return Od(e,t,ct(ct({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Od(e,t,ct(ct({},n),o))},r}var z1=function(e){return Od(X$,e)},E=z1;w1.forEach(function(e){E[e]=z1(e)});var J$=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=R1(t),Pl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Tl(kr(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Pl.registerId(this.componentId+t);var i=this.componentId+t;this.isStatic?r.hasNameForId(i,i)||this.createStyles(t,n,r,o):(this.removeStyles(t,r),this.createStyles(t,n,r,o))},e}();function Z$(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Er.apply(void 0,oi([e],t,!1)),o="sc-global-".concat(Xf(JSON.stringify(r))),i=new J$(r,o),s=new WeakMap,a=function(f){var u=zd(),d=se.useContext(Rs),p=s.get(u.styleSheet);return p===void 0&&(p=u.styleSheet.allocateGSInstance(o),s.set(u.styleSheet,p)),(typeof window>"u"||!u.styleSheet.server)&&c(p,f,u.styleSheet,d,u.stylis),se.useLayoutEffect(function(){return u.styleSheet.server||c(p,f,u.styleSheet,d,u.stylis),function(){var m;i.removeStyles(p,u.styleSheet),m=u.styleSheet.options.target,typeof document<"u"&&(m??document).querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(h){return h.remove()})}},[p,f,u.styleSheet,d,u.stylis]),null};function c(f,u,d,p,m){if(i.isStatic)i.renderStyles(f,v$,d,m);else{var h=ct(ct({},u),{theme:b1(u,p,a.defaultProps)});i.renderStyles(f,h,d,m)}}return se.memo(a)}function dt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Tl(Er.apply(void 0,oi([e],t,!1))),o=Xf(r);return new T1(o,r)}function O1(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=O1(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function pr(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=O1(e))&&(r&&(r+=" "),r+=t);return r}const zs=e=>typeof e=="number"&&!isNaN(e),Xr=e=>typeof e=="string",Xt=e=>typeof e=="function",Ga=e=>Xr(e)||Xt(e)?e:null,Nd=e=>D.isValidElement(e)||Xr(e)||Xt(e)||zs(e);function ek(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function mc(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(s){let{children:a,position:c,preventExitTransition:f,done:u,nodeRef:d,isIn:p,playToast:m}=s;const h=r?`${t}--${c}`:t,b=r?`${n}--${c}`:n,k=D.useRef(0);return D.useLayoutEffect(()=>{const y=d.current,g=h.split(" "),x=w=>{w.target===d.current&&(m(),y.removeEventListener("animationend",x),y.removeEventListener("animationcancel",x),k.current===0&&w.type!=="animationcancel"&&y.classList.remove(...g))};y.classList.add(...g),y.addEventListener("animationend",x),y.addEventListener("animationcancel",x)},[]),D.useEffect(()=>{const y=d.current,g=()=>{y.removeEventListener("animationend",g),o?ek(y,u,i):u()};p||(f?g():(k.current=1,y.className+=` ${b}`,y.addEventListener("animationend",g)))},[p]),se.createElement(se.Fragment,null,a)}}function sm(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const Tt=new Map;let Os=[];const Id=new Set,tk=e=>Id.forEach(t=>t(e)),N1=()=>Tt.size>0;function I1(e,t){var n;if(t)return!((n=Tt.get(t))==null||!n.isToastActive(e));let r=!1;return Tt.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function L1(e,t){Nd(e)&&(N1()||Os.push({content:e,options:t}),Tt.forEach(n=>{n.buildToast(e,t)}))}function am(e,t){Tt.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function nk(e){const{subscribe:t,getSnapshot:n,setProps:r}=D.useRef(function(i){const s=i.containerId||1;return{subscribe(a){const c=function(u,d,p){let m=1,h=0,b=[],k=[],y=[],g=d;const x=new Map,w=new Set,C=()=>{y=Array.from(x.values()),w.forEach(v=>v())},_=v=>{k=v==null?[]:k.filter(S=>S!==v),C()},T=v=>{const{toastId:S,onOpen:P,updateId:F,children:A}=v.props,N=F==null;v.staleId&&x.delete(v.staleId),x.set(S,v),k=[...k,v.props.toastId].filter(R=>R!==v.staleId),C(),p(sm(v,N?"added":"updated")),N&&Xt(P)&&P(D.isValidElement(A)&&A.props)};return{id:u,props:g,observe:v=>(w.add(v),()=>w.delete(v)),toggle:(v,S)=>{x.forEach(P=>{S!=null&&S!==P.props.toastId||Xt(P.toggle)&&P.toggle(v)})},removeToast:_,toasts:x,clearQueue:()=>{h-=b.length,b=[]},buildToast:(v,S)=>{if((V=>{let{containerId:K,toastId:G,updateId:M}=V;const H=K?K!==u:u!==1,te=x.has(G)&&M==null;return H||te})(S))return;const{toastId:P,updateId:F,data:A,staleId:N,delay:R}=S,U=()=>{_(P)},j=F==null;j&&h++;const $={...g,style:g.toastStyle,key:m++,...Object.fromEntries(Object.entries(S).filter(V=>{let[K,G]=V;return G!=null})),toastId:P,updateId:F,data:A,closeToast:U,isIn:!1,className:Ga(S.className||g.toastClassName),bodyClassName:Ga(S.bodyClassName||g.bodyClassName),progressClassName:Ga(S.progressClassName||g.progressClassName),autoClose:!S.isLoading&&(I=S.autoClose,z=g.autoClose,I===!1||zs(I)&&I>0?I:z),deleteToast(){const V=x.get(P),{onClose:K,children:G}=V.props;Xt(K)&&K(D.isValidElement(G)&&G.props),p(sm(V,"removed")),x.delete(P),h--,h<0&&(h=0),b.length>0?T(b.shift()):C()}};var I,z;$.closeButton=g.closeButton,S.closeButton===!1||Nd(S.closeButton)?$.closeButton=S.closeButton:S.closeButton===!0&&($.closeButton=!Nd(g.closeButton)||g.closeButton);let L=v;D.isValidElement(v)&&!Xr(v.type)?L=D.cloneElement(v,{closeToast:U,toastProps:$,data:A}):Xt(v)&&(L=v({closeToast:U,toastProps:$,data:A}));const Q={content:L,props:$,staleId:N};g.limit&&g.limit>0&&h>g.limit&&j?b.push(Q):zs(R)?setTimeout(()=>{T(Q)},R):T(Q)},setProps(v){g=v},setToggle:(v,S)=>{x.get(v).toggle=S},isToastActive:v=>k.some(S=>S===v),getSnapshot:()=>y}}(s,i,tk);Tt.set(s,c);const f=c.observe(a);return Os.forEach(u=>L1(u.content,u.options)),Os=[],()=>{f(),Tt.delete(s)}},setProps(a){var c;(c=Tt.get(s))==null||c.setProps(a)},getSnapshot(){var a;return(a=Tt.get(s))==null?void 0:a.getSnapshot()}}}(e)).current;r(e);const o=D.useSyncExternalStore(t,n,n);return{getToastToRender:function(i){if(!o)return[];const s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(a=>{const{position:c}=a.props;s.has(c)||s.set(c,[]),s.get(c).push(a)}),Array.from(s,a=>i(a[0],a[1]))},isToastActive:I1,count:o==null?void 0:o.length}}function rk(e){const[t,n]=D.useState(!1),[r,o]=D.useState(!1),i=D.useRef(null),s=D.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:c,closeToast:f,onClick:u,closeOnClick:d}=e;var p,m;function h(){n(!0)}function b(){n(!1)}function k(x){const w=i.current;s.canDrag&&w&&(s.didMove=!0,t&&b(),s.delta=e.draggableDirection==="x"?x.clientX-s.start:x.clientY-s.start,s.start!==x.clientX&&(s.canCloseOnClick=!1),w.style.transform=`translate3d(${e.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,w.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function y(){document.removeEventListener("pointermove",k),document.removeEventListener("pointerup",y);const x=i.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();x.style.transition="transform 0.2s, opacity 0.2s",x.style.removeProperty("transform"),x.style.removeProperty("opacity")}}(m=Tt.get((p={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||m.setToggle(p.id,p.fn),D.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||b(),window.addEventListener("focus",h),window.addEventListener("blur",b),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",b)}},[e.pauseOnFocusLoss]);const g={onPointerDown:function(x){if(e.draggable===!0||e.draggable===x.pointerType){s.didMove=!1,document.addEventListener("pointermove",k),document.addEventListener("pointerup",y);const w=i.current;s.canCloseOnClick=!0,s.canDrag=!0,w.style.transition="none",e.draggableDirection==="x"?(s.start=x.clientX,s.removalDistance=w.offsetWidth*(e.draggablePercent/100)):(s.start=x.clientY,s.removalDistance=w.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(x){const{top:w,bottom:C,left:_,right:T}=i.current.getBoundingClientRect();x.nativeEvent.type!=="touchend"&&e.pauseOnHover&&x.clientX>=_&&x.clientX<=T&&x.clientY>=w&&x.clientY<=C?b():h()}};return a&&c&&(g.onMouseEnter=b,e.stacked||(g.onMouseLeave=h)),d&&(g.onClick=x=>{u&&u(x),s.canCloseOnClick&&f()}),{playToast:h,pauseToast:b,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:g}}function ok(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:s,style:a,controlledProgress:c,progress:f,rtl:u,isIn:d,theme:p}=e;const m=i||c&&f===0,h={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};c&&(h.transform=`scaleX(${f})`);const b=pr("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":u}),k=Xt(s)?s({rtl:u,type:o,defaultClassName:b}):pr(b,s),y={[c&&f>=1?"onTransitionEnd":"onAnimationEnd"]:c&&f<1?null:()=>{d&&r()}};return se.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},se.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${o}`}),se.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:k,style:h,...y}))}let ik=1;const D1=()=>""+ik++;function sk(e){return e&&(Xr(e.toastId)||zs(e.toastId))?e.toastId:D1()}function as(e,t){return L1(e,t),t.toastId}function Al(e,t){return{...t,type:t&&t.type||e,toastId:sk(t)}}function fa(e){return(t,n)=>as(t,Al(e,n))}function ae(e,t){return as(e,Al("default",t))}ae.loading=(e,t)=>as(e,Al("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),ae.promise=function(e,t,n){let r,{pending:o,error:i,success:s}=t;o&&(r=Xr(o)?ae.loading(o,n):ae.loading(o.render,{...n,...o}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(u,d,p)=>{if(d==null)return void ae.dismiss(r);const m={type:u,...a,...n,data:p},h=Xr(d)?{render:d}:d;return r?ae.update(r,{...m,...h}):ae(h.render,{...m,...h}),p},f=Xt(e)?e():e;return f.then(u=>c("success",s,u)).catch(u=>c("error",i,u)),f},ae.success=fa("success"),ae.info=fa("info"),ae.error=fa("error"),ae.warning=fa("warning"),ae.warn=ae.warning,ae.dark=(e,t)=>as(e,Al("default",{theme:"dark",...t})),ae.dismiss=function(e){(function(t){var n;if(N1()){if(t==null||Xr(n=t)||zs(n))Tt.forEach(r=>{r.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const r=Tt.get(t.containerId);r?r.removeToast(t.id):Tt.forEach(o=>{o.removeToast(t.id)})}}else Os=Os.filter(r=>t!=null&&r.options.toastId!==t)})(e)},ae.clearWaitingQueue=function(e){e===void 0&&(e={}),Tt.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},ae.isActive=I1,ae.update=function(e,t){t===void 0&&(t={});const n=((r,o)=>{var i;let{containerId:s}=o;return(i=Tt.get(s||1))==null?void 0:i.toasts.get(r)})(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:D1()};i.toastId!==e&&(i.staleId=e);const s=i.render||o;delete i.render,as(s,i)}},ae.done=e=>{ae.update(e,{progress:1})},ae.onChange=function(e){return Id.add(e),()=>{Id.delete(e)}},ae.play=e=>am(!0,e),ae.pause=e=>am(!1,e);const ak=typeof window<"u"?D.useLayoutEffect:D.useEffect,pa=e=>{let{theme:t,type:n,isLoading:r,...o}=e;return se.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},ou={info:function(e){return se.createElement(pa,{...e},se.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return se.createElement(pa,{...e},se.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return se.createElement(pa,{...e},se.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return se.createElement(pa,{...e},se.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return se.createElement("div",{className:"Toastify__spinner"})}},lk=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=rk(e),{closeButton:s,children:a,autoClose:c,onClick:f,type:u,hideProgressBar:d,closeToast:p,transition:m,position:h,className:b,style:k,bodyClassName:y,bodyStyle:g,progressClassName:x,progressStyle:w,updateId:C,role:_,progress:T,rtl:v,toastId:S,deleteToast:P,isIn:F,isLoading:A,closeOnClick:N,theme:R}=e,U=pr("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":v},{"Toastify__toast--close-on-click":N}),j=Xt(b)?b({rtl:v,position:h,type:u,defaultClassName:U}):pr(U,b),$=function(Q){let{theme:V,type:K,isLoading:G,icon:M}=Q,H=null;const te={theme:V,type:K};return M===!1||(Xt(M)?H=M({...te,isLoading:G}):D.isValidElement(M)?H=D.cloneElement(M,te):G?H=ou.spinner():(ee=>ee in ou)(K)&&(H=ou[K](te))),H}(e),I=!!T||!c,z={closeToast:p,type:u,theme:R};let L=null;return s===!1||(L=Xt(s)?s(z):D.isValidElement(s)?D.cloneElement(s,z):function(Q){let{closeToast:V,theme:K,ariaLabel:G="close"}=Q;return se.createElement("button",{className:`Toastify__close-button Toastify__close-button--${K}`,type:"button",onClick:M=>{M.stopPropagation(),V(M)},"aria-label":G},se.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},se.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(z)),se.createElement(m,{isIn:F,done:P,position:h,preventExitTransition:n,nodeRef:r,playToast:i},se.createElement("div",{id:S,onClick:f,"data-in":F,className:j,...o,style:k,ref:r},se.createElement("div",{...F&&{role:_},className:Xt(y)?y({type:u}):pr("Toastify__toast-body",y),style:g},$!=null&&se.createElement("div",{className:pr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},$),se.createElement("div",null,a)),L,se.createElement(ok,{...C&&!I?{key:`pb-${C}`}:{},rtl:v,theme:R,delay:c,isRunning:t,isIn:F,closeToast:p,hide:d,type:u,style:w,className:x,controlledProgress:I,progress:T||0})))},gc=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},ck=mc(gc("bounce",!0));mc(gc("slide",!0));mc(gc("zoom"));mc(gc("flip"));const uk={position:"top-right",transition:ck,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function dk(e){let t={...uk,...e};const n=e.stacked,[r,o]=D.useState(!0),i=D.useRef(null),{getToastToRender:s,isToastActive:a,count:c}=nk(t),{className:f,style:u,rtl:d,containerId:p}=t;function m(b){const k=pr("Toastify__toast-container",`Toastify__toast-container--${b}`,{"Toastify__toast-container--rtl":d});return Xt(f)?f({position:b,rtl:d,defaultClassName:k}):pr(k,Ga(f))}function h(){n&&(o(!0),ae.play())}return ak(()=>{if(n){var b;const k=i.current.querySelectorAll('[data-in="true"]'),y=12,g=(b=t.position)==null?void 0:b.includes("top");let x=0,w=0;Array.from(k).reverse().forEach((C,_)=>{const T=C;T.classList.add("Toastify__toast--stacked"),_>0&&(T.dataset.collapsed=`${r}`),T.dataset.pos||(T.dataset.pos=g?"top":"bot");const v=x*(r?.2:1)+(r?0:y*_);T.style.setProperty("--y",`${g?v:-1*v}px`),T.style.setProperty("--g",`${y}`),T.style.setProperty("--s",""+(1-(r?w:0))),x+=T.offsetHeight,w+=.025})}},[r,c,n]),se.createElement("div",{ref:i,className:"Toastify",id:p,onMouseEnter:()=>{n&&(o(!1),ae.pause())},onMouseLeave:h},s((b,k)=>{const y=k.length?{...u}:{...u,pointerEvents:"none"};return se.createElement("div",{className:m(b),style:y,key:`container-${b}`},k.map(g=>{let{content:x,props:w}=g;return se.createElement(lk,{...w,stacked:n,collapseAll:h,isIn:a(w.toastId,w.containerId),style:w.style,key:`toast-${w.key}`},x)}))}))}const xe={primary:{50:"#fdf3e7",100:"#fae0c3",200:"#f5c28a",300:"#eda04e",400:"#e08530",500:"#C4671A",600:"#B45A14",700:"#96480f",800:"#7a3a0c",900:"#5e2c08"},neutral:{50:"#faf7f5",100:"#f2ece6",200:"#e4d9cf",300:"#cfc0b0",400:"#b5a090",500:"#96806e",600:"#7a6455",700:"#5e4d42",800:"#3d3028",900:"#231b15",950:"#130e0a"},success:{light:"#d1fae5",base:"#059669",dark:"#065f46"},warning:{light:"#fef3c7",base:"#d97706",dark:"#92400e"},error:{light:"#fee2e2",base:"#dc2626",dark:"#991b1b"},info:{light:"#dbeafe",base:"#2563eb",dark:"#1e40af"},white:"#ffffff",black:"#000000",transparent:"transparent"},fk={fontFamily:{sans:"'Sora', 'Helvetica Neue', Arial, sans-serif",serif:"'Playfair Display', Georgia, serif",mono:"'JetBrains Mono', 'Fira Code', monospace"},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem"},fontWeight:{regular:400,medium:500,semibold:600,bold:700},lineHeight:{tight:1.25,snug:1.375,normal:1.5,relaxed:1.625}},pk={0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem"},hk={none:"0",sm:"0.25rem",base:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},mk={sm:"0 1px 2px 0 rgba(35, 27, 21, 0.08)",base:"0 2px 4px 0 rgba(35, 27, 21, 0.10)",md:"0 4px 12px 0 rgba(35, 27, 21, 0.12)",lg:"0 8px 24px 0 rgba(35, 27, 21, 0.15)",xl:"0 16px 48px 0 rgba(35, 27, 21, 0.18)",amber:"0 4px 20px 0 rgba(180, 90, 20, 0.35)"},gk={fast:"150ms ease",base:"200ms ease",slow:"300ms ease",slower:"400ms cubic-bezier(0.4, 0, 0.2, 1)"},yk={base:0,raised:10,dropdown:100,sticky:200,overlay:300,modal:400,toast:500},lm={colors:xe,typography:fk,spacing:pk,borderRadius:hk,shadows:mk,transitions:gk,zIndex:yk,brand:{primary:xe.primary[600],primaryHover:xe.primary[700],primaryLight:xe.primary[100],primaryGhost:xe.primary[50]},surface:{page:xe.neutral[50],card:xe.white,sidebar:xe.neutral[900],elevated:xe.white,overlay:"rgba(35, 27, 21, 0.55)"},text:{primary:xe.neutral[900],secondary:xe.neutral[600],muted:xe.neutral[400],inverse:xe.white,brand:xe.primary[600],onDark:xe.neutral[200]},border:{default:xe.neutral[200],strong:xe.neutral[300],focus:xe.primary[600],error:xe.error.base},feedback:{success:{bg:xe.success.light,text:xe.success.dark,border:xe.success.base,icon:xe.success.base},warning:{bg:xe.warning.light,text:xe.warning.dark,border:xe.warning.base,icon:xe.warning.base},error:{bg:xe.error.light,text:xe.error.dark,border:xe.error.base,icon:xe.error.base},info:{bg:xe.info.light,text:xe.info.dark,border:xe.info.base,icon:xe.info.base}}},xk=Z$`
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
`;function U1(e,t){return function(){return e.apply(t,arguments)}}const{toString:vk}=Object.prototype,{getPrototypeOf:ep}=Object,{iterator:yc,toStringTag:M1}=Symbol,xc=(e=>t=>{const n=vk.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),jn=e=>(e=e.toLowerCase(),t=>xc(t)===e),vc=e=>t=>typeof t===e,{isArray:mi}=Array,li=vc("undefined");function Ms(e){return e!==null&&!li(e)&&e.constructor!==null&&!li(e.constructor)&&Vt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const B1=jn("ArrayBuffer");function bk(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&B1(e.buffer),t}const wk=vc("string"),Vt=vc("function"),V1=vc("number"),Bs=e=>e!==null&&typeof e=="object",$k=e=>e===!0||e===!1,Qa=e=>{if(xc(e)!=="object")return!1;const t=ep(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(M1 in e)&&!(yc in e)},kk=e=>{if(!Bs(e)||Ms(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Sk=jn("Date"),_k=jn("File"),jk=e=>!!(e&&typeof e.uri<"u"),Ek=e=>e&&typeof e.getParts<"u",Ck=jn("Blob"),Fk=jn("FileList"),Tk=e=>Bs(e)&&Vt(e.pipe);function Pk(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const cm=Pk(),um=typeof cm.FormData<"u"?cm.FormData:void 0,Ak=e=>{let t;return e&&(um&&e instanceof um||Vt(e.append)&&((t=xc(e))==="formdata"||t==="object"&&Vt(e.toString)&&e.toString()==="[object FormData]"))},Rk=jn("URLSearchParams"),[zk,Ok,Nk,Ik]=["ReadableStream","Request","Response","Headers"].map(jn),Lk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Vs(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),mi(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(Ms(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function H1(e,t){if(Ms(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Wr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,W1=e=>!li(e)&&e!==Wr;function Ld(){const{caseless:e,skipUndefined:t}=W1(this)&&this||{},n={},r=(o,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const s=e&&H1(n,i)||i;Qa(n[s])&&Qa(o)?n[s]=Ld(n[s],o):Qa(o)?n[s]=Ld({},o):mi(o)?n[s]=o.slice():(!t||!li(o))&&(n[s]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Vs(arguments[o],r);return n}const Dk=(e,t,n,{allOwnKeys:r}={})=>(Vs(t,(o,i)=>{n&&Vt(o)?Object.defineProperty(e,i,{value:U1(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Uk=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Mk=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Bk=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&ep(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Vk=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Hk=e=>{if(!e)return null;if(mi(e))return e;let t=e.length;if(!V1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Wk=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ep(Uint8Array)),qk=(e,t)=>{const r=(e&&e[yc]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Gk=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Qk=jn("HTMLFormElement"),Kk=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),dm=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Yk=jn("RegExp"),q1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Vs(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},Xk=e=>{q1(e,(t,n)=>{if(Vt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Vt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Jk=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return mi(e)?r(e):r(String(e).split(t)),n},Zk=()=>{},eS=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function tS(e){return!!(e&&Vt(e.append)&&e[M1]==="FormData"&&e[yc])}const nS=e=>{const t=new Array(10),n=(r,o)=>{if(Bs(r)){if(t.indexOf(r)>=0)return;if(Ms(r))return r;if(!("toJSON"in r)){t[o]=r;const i=mi(r)?[]:{};return Vs(r,(s,a)=>{const c=n(s,o+1);!li(c)&&(i[a]=c)}),t[o]=void 0,i}}return r};return n(e,0)},rS=jn("AsyncFunction"),oS=e=>e&&(Bs(e)||Vt(e))&&Vt(e.then)&&Vt(e.catch),G1=((e,t)=>e?setImmediate:t?((n,r)=>(Wr.addEventListener("message",({source:o,data:i})=>{o===Wr&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Wr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Vt(Wr.postMessage)),iS=typeof queueMicrotask<"u"?queueMicrotask.bind(Wr):typeof process<"u"&&process.nextTick||G1,sS=e=>e!=null&&Vt(e[yc]),q={isArray:mi,isArrayBuffer:B1,isBuffer:Ms,isFormData:Ak,isArrayBufferView:bk,isString:wk,isNumber:V1,isBoolean:$k,isObject:Bs,isPlainObject:Qa,isEmptyObject:kk,isReadableStream:zk,isRequest:Ok,isResponse:Nk,isHeaders:Ik,isUndefined:li,isDate:Sk,isFile:_k,isReactNativeBlob:jk,isReactNative:Ek,isBlob:Ck,isRegExp:Yk,isFunction:Vt,isStream:Tk,isURLSearchParams:Rk,isTypedArray:Wk,isFileList:Fk,forEach:Vs,merge:Ld,extend:Dk,trim:Lk,stripBOM:Uk,inherits:Mk,toFlatObject:Bk,kindOf:xc,kindOfTest:jn,endsWith:Vk,toArray:Hk,forEachEntry:qk,matchAll:Gk,isHTMLForm:Qk,hasOwnProperty:dm,hasOwnProp:dm,reduceDescriptors:q1,freezeMethods:Xk,toObjectSet:Jk,toCamelCase:Kk,noop:Zk,toFiniteNumber:eS,findKey:H1,global:Wr,isContextDefined:W1,isSpecCompliantForm:tS,toJSONObject:nS,isAsyncFn:rS,isThenable:oS,setImmediate:G1,asap:iS,isIterable:sS};let ce=class Q1 extends Error{static from(t,n,r,o,i,s){const a=new Q1(t.message,n||t.code,r,o,i);return a.cause=t,a.name=t.name,t.status!=null&&a.status==null&&(a.status=t.status),s&&Object.assign(a,s),a}constructor(t,n,r,o,i){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),o&&(this.request=o),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}};ce.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ce.ERR_BAD_OPTION="ERR_BAD_OPTION";ce.ECONNABORTED="ECONNABORTED";ce.ETIMEDOUT="ETIMEDOUT";ce.ERR_NETWORK="ERR_NETWORK";ce.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ce.ERR_DEPRECATED="ERR_DEPRECATED";ce.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ce.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ce.ERR_CANCELED="ERR_CANCELED";ce.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ce.ERR_INVALID_URL="ERR_INVALID_URL";const aS=null;function Dd(e){return q.isPlainObject(e)||q.isArray(e)}function K1(e){return q.endsWith(e,"[]")?e.slice(0,-2):e}function iu(e,t,n){return e?e.concat(t).map(function(o,i){return o=K1(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function lS(e){return q.isArray(e)&&!e.some(Dd)}const cS=q.toFlatObject(q,{},null,function(t){return/^is[A-Z]/.test(t)});function bc(e,t,n){if(!q.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,k){return!q.isUndefined(k[b])});const r=n.metaTokens,o=n.visitor||u,i=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(t);if(!q.isFunction(o))throw new TypeError("visitor must be a function");function f(h){if(h===null)return"";if(q.isDate(h))return h.toISOString();if(q.isBoolean(h))return h.toString();if(!c&&q.isBlob(h))throw new ce("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(h)||q.isTypedArray(h)?c&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function u(h,b,k){let y=h;if(q.isReactNative(t)&&q.isReactNativeBlob(h))return t.append(iu(k,b,i),f(h)),!1;if(h&&!k&&typeof h=="object"){if(q.endsWith(b,"{}"))b=r?b:b.slice(0,-2),h=JSON.stringify(h);else if(q.isArray(h)&&lS(h)||(q.isFileList(h)||q.endsWith(b,"[]"))&&(y=q.toArray(h)))return b=K1(b),y.forEach(function(x,w){!(q.isUndefined(x)||x===null)&&t.append(s===!0?iu([b],w,i):s===null?b:b+"[]",f(x))}),!1}return Dd(h)?!0:(t.append(iu(k,b,i),f(h)),!1)}const d=[],p=Object.assign(cS,{defaultVisitor:u,convertValue:f,isVisitable:Dd});function m(h,b){if(!q.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+b.join("."));d.push(h),q.forEach(h,function(y,g){(!(q.isUndefined(y)||y===null)&&o.call(t,y,q.isString(g)?g.trim():g,b,p))===!0&&m(y,b?b.concat(g):[g])}),d.pop()}}if(!q.isObject(e))throw new TypeError("data must be an object");return m(e),t}function fm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function tp(e,t){this._pairs=[],e&&bc(e,this,t)}const Y1=tp.prototype;Y1.append=function(t,n){this._pairs.push([t,n])};Y1.toString=function(t){const n=t?function(r){return t.call(this,r,fm)}:fm;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function uS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function X1(e,t,n){if(!t)return e;const r=n&&n.encode||uS,o=q.isFunction(n)?{serialize:n}:n,i=o&&o.serialize;let s;if(i?s=i(t,o):s=q.isURLSearchParams(t)?t.toString():new tp(t,o).toString(r),s){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class pm{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){q.forEach(this.handlers,function(r){r!==null&&t(r)})}}const np={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},dS=typeof URLSearchParams<"u"?URLSearchParams:tp,fS=typeof FormData<"u"?FormData:null,pS=typeof Blob<"u"?Blob:null,hS={isBrowser:!0,classes:{URLSearchParams:dS,FormData:fS,Blob:pS},protocols:["http","https","file","blob","url","data"]},rp=typeof window<"u"&&typeof document<"u",Ud=typeof navigator=="object"&&navigator||void 0,mS=rp&&(!Ud||["ReactNative","NativeScript","NS"].indexOf(Ud.product)<0),gS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",yS=rp&&window.location.href||"http://localhost",xS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:rp,hasStandardBrowserEnv:mS,hasStandardBrowserWebWorkerEnv:gS,navigator:Ud,origin:yS},Symbol.toStringTag,{value:"Module"})),_t={...xS,...hS};function vS(e,t){return bc(e,new _t.classes.URLSearchParams,{visitor:function(n,r,o,i){return _t.isNode&&q.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function bS(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function wS(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function J1(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),c=i>=n.length;return s=!s&&q.isArray(o)?o.length:s,c?(q.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!q.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&q.isArray(o[s])&&(o[s]=wS(o[s])),!a)}if(q.isFormData(e)&&q.isFunction(e.entries)){const n={};return q.forEachEntry(e,(r,o)=>{t(bS(r),o,n,0)}),n}return null}function $S(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Hs={transitional:np,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=q.isObject(t);if(i&&q.isHTMLForm(t)&&(t=new FormData(t)),q.isFormData(t))return o?JSON.stringify(J1(t)):t;if(q.isArrayBuffer(t)||q.isBuffer(t)||q.isStream(t)||q.isFile(t)||q.isBlob(t)||q.isReadableStream(t))return t;if(q.isArrayBufferView(t))return t.buffer;if(q.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return vS(t,this.formSerializer).toString();if((a=q.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return bc(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),$S(t)):t}],transformResponse:[function(t){const n=this.transitional||Hs.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(q.isResponse(t)||q.isReadableStream(t))return t;if(t&&q.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(a){if(s)throw a.name==="SyntaxError"?ce.from(a,ce.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_t.classes.FormData,Blob:_t.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],e=>{Hs.headers[e]={}});const kS=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),SS=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&kS[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},hm=Symbol("internals");function Ti(e){return e&&String(e).trim().toLowerCase()}function Ka(e){return e===!1||e==null?e:q.isArray(e)?e.map(Ka):String(e)}function _S(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const jS=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function su(e,t,n,r,o){if(q.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!q.isString(t)){if(q.isString(r))return t.indexOf(r)!==-1;if(q.isRegExp(r))return r.test(t)}}function ES(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function CS(e,t){const n=q.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}let Ht=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,c,f){const u=Ti(c);if(!u)throw new Error("header name must be a non-empty string");const d=q.findKey(o,u);(!d||o[d]===void 0||f===!0||f===void 0&&o[d]!==!1)&&(o[d||c]=Ka(a))}const s=(a,c)=>q.forEach(a,(f,u)=>i(f,u,c));if(q.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(q.isString(t)&&(t=t.trim())&&!jS(t))s(SS(t),n);else if(q.isObject(t)&&q.isIterable(t)){let a={},c,f;for(const u of t){if(!q.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[f=u[0]]=(c=a[f])?q.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}s(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Ti(t),t){const r=q.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return _S(o);if(q.isFunction(n))return n.call(this,o,r);if(q.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ti(t),t){const r=q.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||su(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Ti(s),s){const a=q.findKey(r,s);a&&(!n||su(r,r[a],a,n))&&(delete r[a],o=!0)}}return q.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||su(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return q.forEach(this,(o,i)=>{const s=q.findKey(r,i);if(s){n[s]=Ka(o),delete n[i];return}const a=t?ES(i):String(i).trim();a!==i&&delete n[i],n[a]=Ka(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return q.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&q.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[hm]=this[hm]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=Ti(s);r[a]||(CS(o,s),r[a]=!0)}return q.isArray(t)?t.forEach(i):i(t),this}};Ht.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(Ht.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});q.freezeMethods(Ht);function au(e,t){const n=this||Hs,r=t||n,o=Ht.from(r.headers);let i=r.data;return q.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Z1(e){return!!(e&&e.__CANCEL__)}let Ws=class extends ce{constructor(t,n,r){super(t??"canceled",ce.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function ex(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ce("Request failed with status code "+n.status,[ce.ERR_BAD_REQUEST,ce.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function FS(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function TS(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(c){const f=Date.now(),u=r[i];s||(s=f),n[o]=c,r[o]=f;let d=i,p=0;for(;d!==o;)p+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),f-s<t)return;const m=u&&f-u;return m?Math.round(p*1e3/m):void 0}}function PS(e,t){let n=0,r=1e3/t,o,i;const s=(f,u=Date.now())=>{n=u,o=null,i&&(clearTimeout(i),i=null),e(...f)};return[(...f)=>{const u=Date.now(),d=u-n;d>=r?s(f,u):(o=f,i||(i=setTimeout(()=>{i=null,s(o)},r-d)))},()=>o&&s(o)]}const Rl=(e,t,n=3)=>{let r=0;const o=TS(50,250);return PS(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,c=s-r,f=o(c),u=s<=a;r=s;const d={loaded:s,total:a,progress:a?s/a:void 0,bytes:c,rate:f||void 0,estimated:f&&a&&u?(a-s)/f:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(d)},n)},mm=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},gm=e=>(...t)=>q.asap(()=>e(...t)),AS=_t.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,_t.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(_t.origin),_t.navigator&&/(msie|trident)/i.test(_t.navigator.userAgent)):()=>!0,RS=_t.hasStandardBrowserEnv?{write(e,t,n,r,o,i,s){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];q.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),q.isString(r)&&a.push(`path=${r}`),q.isString(o)&&a.push(`domain=${o}`),i===!0&&a.push("secure"),q.isString(s)&&a.push(`SameSite=${s}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function zS(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function OS(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function tx(e,t,n){let r=!zS(t);return e&&(r||n==!1)?OS(e,t):t}const ym=e=>e instanceof Ht?{...e}:e;function lo(e,t){t=t||{};const n={};function r(f,u,d,p){return q.isPlainObject(f)&&q.isPlainObject(u)?q.merge.call({caseless:p},f,u):q.isPlainObject(u)?q.merge({},u):q.isArray(u)?u.slice():u}function o(f,u,d,p){if(q.isUndefined(u)){if(!q.isUndefined(f))return r(void 0,f,d,p)}else return r(f,u,d,p)}function i(f,u){if(!q.isUndefined(u))return r(void 0,u)}function s(f,u){if(q.isUndefined(u)){if(!q.isUndefined(f))return r(void 0,f)}else return r(void 0,u)}function a(f,u,d){if(d in t)return r(f,u);if(d in e)return r(void 0,f)}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(f,u,d)=>o(ym(f),ym(u),d,!0)};return q.forEach(Object.keys({...e,...t}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const d=q.hasOwnProp(c,u)?c[u]:o,p=d(e[u],t[u],u);q.isUndefined(p)&&d!==a||(n[u]=p)}),n}const nx=e=>{const t=lo({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;if(t.headers=s=Ht.from(s),t.url=X1(tx(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),q.isFormData(n)){if(_t.hasStandardBrowserEnv||_t.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(q.isFunction(n.getHeaders)){const c=n.getHeaders(),f=["content-type","content-length"];Object.entries(c).forEach(([u,d])=>{f.includes(u.toLowerCase())&&s.set(u,d)})}}if(_t.hasStandardBrowserEnv&&(r&&q.isFunction(r)&&(r=r(t)),r||r!==!1&&AS(t.url))){const c=o&&i&&RS.read(i);c&&s.set(o,c)}return t},NS=typeof XMLHttpRequest<"u",IS=NS&&function(e){return new Promise(function(n,r){const o=nx(e);let i=o.data;const s=Ht.from(o.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:f}=o,u,d,p,m,h;function b(){m&&m(),h&&h(),o.cancelToken&&o.cancelToken.unsubscribe(u),o.signal&&o.signal.removeEventListener("abort",u)}let k=new XMLHttpRequest;k.open(o.method.toUpperCase(),o.url,!0),k.timeout=o.timeout;function y(){if(!k)return;const x=Ht.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?k.responseText:k.response,status:k.status,statusText:k.statusText,headers:x,config:e,request:k};ex(function(T){n(T),b()},function(T){r(T),b()},C),k=null}"onloadend"in k?k.onloadend=y:k.onreadystatechange=function(){!k||k.readyState!==4||k.status===0&&!(k.responseURL&&k.responseURL.indexOf("file:")===0)||setTimeout(y)},k.onabort=function(){k&&(r(new ce("Request aborted",ce.ECONNABORTED,e,k)),k=null)},k.onerror=function(w){const C=w&&w.message?w.message:"Network Error",_=new ce(C,ce.ERR_NETWORK,e,k);_.event=w||null,r(_),k=null},k.ontimeout=function(){let w=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const C=o.transitional||np;o.timeoutErrorMessage&&(w=o.timeoutErrorMessage),r(new ce(w,C.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED,e,k)),k=null},i===void 0&&s.setContentType(null),"setRequestHeader"in k&&q.forEach(s.toJSON(),function(w,C){k.setRequestHeader(C,w)}),q.isUndefined(o.withCredentials)||(k.withCredentials=!!o.withCredentials),a&&a!=="json"&&(k.responseType=o.responseType),f&&([p,h]=Rl(f,!0),k.addEventListener("progress",p)),c&&k.upload&&([d,m]=Rl(c),k.upload.addEventListener("progress",d),k.upload.addEventListener("loadend",m)),(o.cancelToken||o.signal)&&(u=x=>{k&&(r(!x||x.type?new Ws(null,e,k):x),k.abort(),k=null)},o.cancelToken&&o.cancelToken.subscribe(u),o.signal&&(o.signal.aborted?u():o.signal.addEventListener("abort",u)));const g=FS(o.url);if(g&&_t.protocols.indexOf(g)===-1){r(new ce("Unsupported protocol "+g+":",ce.ERR_BAD_REQUEST,e));return}k.send(i||null)})},LS=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(f){if(!o){o=!0,a();const u=f instanceof Error?f:this.reason;r.abort(u instanceof ce?u:new Ws(u instanceof Error?u.message:u))}};let s=t&&setTimeout(()=>{s=null,i(new ce(`timeout of ${t}ms exceeded`,ce.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(f=>{f.unsubscribe?f.unsubscribe(i):f.removeEventListener("abort",i)}),e=null)};e.forEach(f=>f.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>q.asap(a),c}},DS=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},US=async function*(e,t){for await(const n of MS(e))yield*DS(n,t)},MS=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},xm=(e,t,n,r)=>{const o=US(e,t);let i=0,s,a=c=>{s||(s=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:f,value:u}=await o.next();if(f){a(),c.close();return}let d=u.byteLength;if(n){let p=i+=d;n(p)}c.enqueue(new Uint8Array(u))}catch(f){throw a(f),f}},cancel(c){return a(c),o.return()}},{highWaterMark:2})},vm=64*1024,{isFunction:ha}=q,BS=(({Request:e,Response:t})=>({Request:e,Response:t}))(q.global),{ReadableStream:bm,TextEncoder:wm}=q.global,$m=(e,...t)=>{try{return!!e(...t)}catch{return!1}},VS=e=>{e=q.merge.call({skipUndefined:!0},BS,e);const{fetch:t,Request:n,Response:r}=e,o=t?ha(t):typeof fetch=="function",i=ha(n),s=ha(r);if(!o)return!1;const a=o&&ha(bm),c=o&&(typeof wm=="function"?(h=>b=>h.encode(b))(new wm):async h=>new Uint8Array(await new n(h).arrayBuffer())),f=i&&a&&$m(()=>{let h=!1;const b=new n(_t.origin,{body:new bm,method:"POST",get duplex(){return h=!0,"half"}}).headers.has("Content-Type");return h&&!b}),u=s&&a&&$m(()=>q.isReadableStream(new r("").body)),d={stream:u&&(h=>h.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(h=>{!d[h]&&(d[h]=(b,k)=>{let y=b&&b[h];if(y)return y.call(b);throw new ce(`Response type '${h}' is not supported`,ce.ERR_NOT_SUPPORT,k)})});const p=async h=>{if(h==null)return 0;if(q.isBlob(h))return h.size;if(q.isSpecCompliantForm(h))return(await new n(_t.origin,{method:"POST",body:h}).arrayBuffer()).byteLength;if(q.isArrayBufferView(h)||q.isArrayBuffer(h))return h.byteLength;if(q.isURLSearchParams(h)&&(h=h+""),q.isString(h))return(await c(h)).byteLength},m=async(h,b)=>{const k=q.toFiniteNumber(h.getContentLength());return k??p(b)};return async h=>{let{url:b,method:k,data:y,signal:g,cancelToken:x,timeout:w,onDownloadProgress:C,onUploadProgress:_,responseType:T,headers:v,withCredentials:S="same-origin",fetchOptions:P}=nx(h),F=t||fetch;T=T?(T+"").toLowerCase():"text";let A=LS([g,x&&x.toAbortSignal()],w),N=null;const R=A&&A.unsubscribe&&(()=>{A.unsubscribe()});let U;try{if(_&&f&&k!=="get"&&k!=="head"&&(U=await m(v,y))!==0){let Q=new n(b,{method:"POST",body:y,duplex:"half"}),V;if(q.isFormData(y)&&(V=Q.headers.get("content-type"))&&v.setContentType(V),Q.body){const[K,G]=mm(U,Rl(gm(_)));y=xm(Q.body,vm,K,G)}}q.isString(S)||(S=S?"include":"omit");const j=i&&"credentials"in n.prototype,$={...P,signal:A,method:k.toUpperCase(),headers:v.normalize().toJSON(),body:y,duplex:"half",credentials:j?S:void 0};N=i&&new n(b,$);let I=await(i?F(N,P):F(b,$));const z=u&&(T==="stream"||T==="response");if(u&&(C||z&&R)){const Q={};["status","statusText","headers"].forEach(M=>{Q[M]=I[M]});const V=q.toFiniteNumber(I.headers.get("content-length")),[K,G]=C&&mm(V,Rl(gm(C),!0))||[];I=new r(xm(I.body,vm,K,()=>{G&&G(),R&&R()}),Q)}T=T||"text";let L=await d[q.findKey(d,T)||"text"](I,h);return!z&&R&&R(),await new Promise((Q,V)=>{ex(Q,V,{data:L,headers:Ht.from(I.headers),status:I.status,statusText:I.statusText,config:h,request:N})})}catch(j){throw R&&R(),j&&j.name==="TypeError"&&/Load failed|fetch/i.test(j.message)?Object.assign(new ce("Network Error",ce.ERR_NETWORK,h,N,j&&j.response),{cause:j.cause||j}):ce.from(j,j&&j.code,h,N,j&&j.response)}}},HS=new Map,rx=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:o}=t,i=[r,o,n];let s=i.length,a=s,c,f,u=HS;for(;a--;)c=i[a],f=u.get(c),f===void 0&&u.set(c,f=a?new Map:VS(t)),u=f;return f};rx();const op={http:aS,xhr:IS,fetch:{get:rx}};q.forEach(op,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const km=e=>`- ${e}`,WS=e=>q.isFunction(e)||e===null||e===!1;function qS(e,t){e=q.isArray(e)?e:[e];const{length:n}=e;let r,o;const i={};for(let s=0;s<n;s++){r=e[s];let a;if(o=r,!WS(r)&&(o=op[(a=String(r)).toLowerCase()],o===void 0))throw new ce(`Unknown adapter '${a}'`);if(o&&(q.isFunction(o)||(o=o.get(t))))break;i[a||"#"+s]=o}if(!o){const s=Object.entries(i).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let a=n?s.length>1?`since :
`+s.map(km).join(`
`):" "+km(s[0]):"as no adapter specified";throw new ce("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return o}const ox={getAdapter:qS,adapters:op};function lu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ws(null,e)}function Sm(e){return lu(e),e.headers=Ht.from(e.headers),e.data=au.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ox.getAdapter(e.adapter||Hs.adapter,e)(e).then(function(r){return lu(e),r.data=au.call(e,e.transformResponse,r),r.headers=Ht.from(r.headers),r},function(r){return Z1(r)||(lu(e),r&&r.response&&(r.response.data=au.call(e,e.transformResponse,r.response),r.response.headers=Ht.from(r.response.headers))),Promise.reject(r)})}const ix="1.13.6",wc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{wc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _m={};wc.transitional=function(t,n,r){function o(i,s){return"[Axios v"+ix+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new ce(o(s," has been removed"+(n?" in "+n:"")),ce.ERR_DEPRECATED);return n&&!_m[s]&&(_m[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};wc.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function GS(e,t,n){if(typeof e!="object")throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],c=a===void 0||s(a,i,e);if(c!==!0)throw new ce("option "+i+" must be "+c,ce.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ce("Unknown option "+i,ce.ERR_BAD_OPTION)}}const Ya={assertOptions:GS,validators:wc},rn=Ya.validators;let Jr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new pm,response:new pm}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=lo(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Ya.assertOptions(r,{silentJSONParsing:rn.transitional(rn.boolean),forcedJSONParsing:rn.transitional(rn.boolean),clarifyTimeoutError:rn.transitional(rn.boolean),legacyInterceptorReqResOrdering:rn.transitional(rn.boolean)},!1),o!=null&&(q.isFunction(o)?n.paramsSerializer={serialize:o}:Ya.assertOptions(o,{encode:rn.function,serialize:rn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ya.assertOptions(n,{baseUrl:rn.spelling("baseURL"),withXsrfToken:rn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&q.merge(i.common,i[n.method]);i&&q.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=Ht.concat(s,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){if(typeof b.runWhen=="function"&&b.runWhen(n)===!1)return;c=c&&b.synchronous;const k=n.transitional||np;k&&k.legacyInterceptorReqResOrdering?a.unshift(b.fulfilled,b.rejected):a.push(b.fulfilled,b.rejected)});const f=[];this.interceptors.response.forEach(function(b){f.push(b.fulfilled,b.rejected)});let u,d=0,p;if(!c){const h=[Sm.bind(this),void 0];for(h.unshift(...a),h.push(...f),p=h.length,u=Promise.resolve(n);d<p;)u=u.then(h[d++],h[d++]);return u}p=a.length;let m=n;for(;d<p;){const h=a[d++],b=a[d++];try{m=h(m)}catch(k){b.call(this,k);break}}try{u=Sm.call(this,m)}catch(h){return Promise.reject(h)}for(d=0,p=f.length;d<p;)u=u.then(f[d++],f[d++]);return u}getUri(t){t=lo(this.defaults,t);const n=tx(t.baseURL,t.url,t.allowAbsoluteUrls);return X1(n,t.params,t.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(t){Jr.prototype[t]=function(n,r){return this.request(lo(r||{},{method:t,url:n,data:(r||{}).data}))}});q.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(lo(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Jr.prototype[t]=n(),Jr.prototype[t+"Form"]=n(!0)});let QS=class sx{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new Ws(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new sx(function(o){t=o}),cancel:t}}};function KS(e){return function(n){return e.apply(null,n)}}function YS(e){return q.isObject(e)&&e.isAxiosError===!0}const Md={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Md).forEach(([e,t])=>{Md[t]=e});function ax(e){const t=new Jr(e),n=U1(Jr.prototype.request,t);return q.extend(n,Jr.prototype,t,{allOwnKeys:!0}),q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return ax(lo(e,o))},n}const Ae=ax(Hs);Ae.Axios=Jr;Ae.CanceledError=Ws;Ae.CancelToken=QS;Ae.isCancel=Z1;Ae.VERSION=ix;Ae.toFormData=bc;Ae.AxiosError=ce;Ae.Cancel=Ae.CanceledError;Ae.all=function(t){return Promise.all(t)};Ae.spread=KS;Ae.isAxiosError=YS;Ae.mergeConfig=lo;Ae.AxiosHeaders=Ht;Ae.formToJSON=e=>J1(q.isHTMLForm(e)?new FormData(e):e);Ae.getAdapter=ox.getAdapter;Ae.HttpStatusCode=Md;Ae.default=Ae;const{Axios:l6,AxiosError:c6,CanceledError:u6,isCancel:d6,CancelToken:f6,VERSION:p6,all:h6,Cancel:m6,isAxiosError:g6,spread:y6,toFormData:x6,AxiosHeaders:v6,HttpStatusCode:b6,formToJSON:w6,getAdapter:$6,mergeConfig:k6}=Ae,ip=(console.warn("[api.js] VITE_API_URL não definida. Certifique-se de que o arquivo .env existe e foi carregado corretamente."),"http://localhost:3000/api/v1"),ci={ACCESS_TOKEN:"bg:access_token",REFRESH_TOKEN:"bg:refresh_token"},lx=()=>localStorage.getItem(ci.ACCESS_TOKEN),cx=()=>localStorage.getItem(ci.REFRESH_TOKEN),ux=({accessToken:e,refreshToken:t})=>{e&&localStorage.setItem(ci.ACCESS_TOKEN,e),t&&localStorage.setItem(ci.REFRESH_TOKEN,t)},zl=()=>{localStorage.removeItem(ci.ACCESS_TOKEN),localStorage.removeItem(ci.REFRESH_TOKEN)};let ma=!1,Bd=[];const jm=(e,t=null)=>{Bd.forEach(({resolve:n,reject:r})=>e?r(e):n(t)),Bd=[]},dx=e=>{const t=lx();return t&&(e.headers.Authorization=`Bearer ${t}`),e},fx=async e=>{var i,s;const t=e.config,n=((i=e.response)==null?void 0:i.status)===401,r=!t._retry,o=!((s=t.url)!=null&&s.includes("/auth/refresh"));if(n&&r&&o){if(t._retry=!0,ma)return new Promise((c,f)=>{Bd.push({resolve:c,reject:f})}).then(c=>(t.headers.Authorization=`Bearer ${c}`,Ae(t)));ma=!0;const a=cx();if(!a)return ma=!1,zl(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(e);try{const{data:c}=await Ae.post(`${ip}/auth/refresh`,{refreshToken:a},{headers:{"Content-Type":"application/json"}}),f=c.data??c,u=f.token??f.accessToken,d=f.refreshToken;if(!u)throw new Error("Refresh não retornou accessToken");return ux({accessToken:u,refreshToken:d}),jm(null,u),t.headers.Authorization=`Bearer ${u}`,Ae(t)}catch(c){return jm(c,null),zl(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(c)}finally{ma=!1}}return Promise.reject(e)},qe=Ae.create({baseURL:ip,timeout:15e3,headers:{"Content-Type":"application/json",Accept:"application/json"}});qe.interceptors.request.use(dx,e=>Promise.reject(e));qe.interceptors.response.use(e=>e,fx);const sp=Ae.create({baseURL:ip,timeout:12e4,headers:{Accept:"application/json"}});sp.interceptors.request.use(dx,e=>Promise.reject(e));sp.interceptors.response.use(e=>e,fx);const Zt=(e,t="Ocorreu um erro inesperado.")=>{var n,r,o,i;return((r=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:r.message)??((i=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:i.error)??(e==null?void 0:e.message)??t},kt={INIT:"INIT",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGOUT:"LOGOUT",PASSWORD_CHANGED:"PASSWORD_CHANGED",UPDATE_USER:"UPDATE_USER",SET_LOADING:"SET_LOADING"},px={user:null,isAuthenticated:!1,isLoading:!0,mustChangePassword:!1};function XS(e,{type:t,payload:n}){switch(console.log("[REDUCER]",t,n),t){case kt.INIT:return{...e,user:n.user??null,isAuthenticated:!!n.user,isLoading:!1,mustChangePassword:n.mustChangePassword!==void 0?n.mustChangePassword:e.mustChangePassword};case kt.LOGIN_SUCCESS:return{...e,user:n.user,isAuthenticated:!0,isLoading:!1,mustChangePassword:n.mustChangePassword??!1};case kt.LOGOUT:return{...px,isLoading:!1};case kt.PASSWORD_CHANGED:return{...e,mustChangePassword:!1};case kt.UPDATE_USER:return{...e,user:{...e.user,...n}};case kt.SET_LOADING:return{...e,isLoading:n};default:return e}}const hx=D.createContext(null);function JS({children:e}){var m,h,b,k;const[t,n]=D.useReducer(XS,px),r=D.useRef(!1);D.useEffect(()=>{if(r.current)return;r.current=!0,(async()=>{var w;const g=lx(),x=cx();if(console.log("[INIT TOKENS]",{accessToken:g,refreshToken:x}),!g&&!x){n({type:kt.SET_LOADING,payload:!1});return}try{const{data:C}=await qe.get("/users/profile");console.log("[PROFILE RESPONSE]",C),n({type:kt.INIT,payload:{user:C.data,mustChangePassword:C.data.mustChangePassword??((w=C.data)==null?void 0:w.last_login_at)===null}})}catch{console.log("[INIT ERROR] limpando sessão"),zl(),n({type:kt.LOGOUT})}})()},[]),D.useEffect(()=>{const y=()=>n({type:kt.LOGOUT});return window.addEventListener("bg:session-expired",y),()=>window.removeEventListener("bg:session-expired",y)},[]);const o=D.useCallback(async(y,g)=>{n({type:kt.SET_LOADING,payload:!0});try{const{data:x}=await qe.post("/auth/login",{email:y,password:g});console.log("[LOGIN RESPONSE RAW]",x);const w=x.data??x,C=w.token??w.accessToken,{refreshToken:_,user:T}=w;console.log("[LOGIN PROCESSADO]",{user:T,mustChangePassword:w.mustChangePassword}),ux({accessToken:C,refreshToken:_});const v=w.mustChangePassword===!0;return Yy.flushSync(()=>{n({type:kt.LOGIN_SUCCESS,payload:{user:T,mustChangePassword:v}})}),ae.success("Login efetuado com sucesso!",{toastId:"login-success"}),{mustChangePassword:v}}catch(x){throw n({type:kt.SET_LOADING,payload:!1}),new Error(Zt(x,"E-mail ou senha inválidos."))}},[]),i=D.useCallback(async(y,g,x)=>{try{await qe.patch("/auth/change-password",{currentPassword:y,newPassword:g,confirmPassword:x}),n({type:kt.PASSWORD_CHANGED}),ae.success("Senha alterada com sucesso!")}catch(w){throw new Error(Zt(w,"Erro ao alterar a senha."))}},[]),s=D.useCallback(()=>{ae.success("Logout efetuado com sucesso!",{toastId:"logout-success"}),zl(),n({type:kt.LOGOUT}),qe.post("/auth/logout").catch(()=>{})},[]),a=D.useCallback(y=>{n({type:kt.UPDATE_USER,payload:y})},[]),c=((m=t.user)==null?void 0:m.role)==="admin",f=((h=t.user)==null?void 0:h.role)==="user",u=((b=t.user)==null?void 0:b.role)==="partner",d=D.useCallback((...y)=>{var g;return y.includes((g=t.user)==null?void 0:g.role)},[(k=t.user)==null?void 0:k.role]),p=D.useMemo(()=>({user:t.user,isAuthenticated:t.isAuthenticated,isLoading:t.isLoading,mustChangePassword:t.mustChangePassword,isAdmin:c,isUser:f,isPartner:u,hasRole:d,login:o,logout:s,changePassword:i,updateUser:a}),[t,c,f,u,d,o,s,i,a]);return l.jsx(hx.Provider,{value:p,children:e})}function Ar(){const e=D.useContext(hx);if(!e)throw new Error("useAuth deve ser usado dentro de <AuthProvider>.");return e}function Em({allowedRoles:e}){const{isAuthenticated:t,isLoading:n,user:r,mustChangePassword:o}=Ar(),i=Pr(),s=i.pathname.includes("/alterar-senha");return console.log("[ProtectedRoute]",{path:i.pathname,isAuthenticated:t,isLoading:n,mustChangePassword:o,user:r}),n?null:o?s?l.jsx(_d,{}):(console.log("[FORCE CHANGE PASSWORD]"),l.jsx(Ma,{to:"/alterar-senha",replace:!0})):t?e&&!e.includes(r==null?void 0:r.role)?l.jsx(Ma,{to:"/dashboard",replace:!0}):l.jsx(_d,{}):(console.log("[REDIRECT → LOGIN]"),l.jsx(Ma,{to:"/login",replace:!0}))}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mx=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var e_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=D.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:s,...a},c)=>D.createElement("svg",{ref:c,...e_,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:mx("lucide",o),...a},[...s.map(([f,u])=>D.createElement(f,u)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(e,t)=>{const n=D.forwardRef(({className:r,...o},i)=>D.createElement(t_,{ref:i,iconNode:t,className:mx(`lucide-${ZS(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=he("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=he("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=he("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=he("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=he("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=he("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=he("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=he("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=he("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=he("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=he("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=he("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=he("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=he("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=he("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=he("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=he("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=he("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=he("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=he("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=he("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=he("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=he("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=he("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=he("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=he("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=he("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=he("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=he("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=he("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=he("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=he("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=he("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=he("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=he("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=he("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=he("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=he("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=he("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=he("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=he("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),b_=dt`
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
`,w_=E.aside`
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
`,$_=E.div`
  padding: ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[5]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral[800]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  animation: ${b_} 0.4s ease both;
`,k_=E.div`
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
`,S_=E.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
`,__=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,j_=E.nav`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[3]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,E_=E.div`
  margin-top: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  padding: 0 ${({theme:e})=>e.spacing[2]};
`,C_=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral[600]};
`,F_=E(Qw)`
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
`,T_=E.span`
  flex: 1;
`;E.span`
  background-color: ${({theme:e})=>e.colors.primary[600]};
  color: #fff;
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  padding: 1px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  line-height: 1.6;
`;const P_=E.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[3]};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[800]};
`,A_=E.div`
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
`,R_=E.div`
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
`,z_=E.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,O_=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,N_=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[500]};
  text-transform: capitalize;
`,I_=E.div`
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
`,L_=(e="")=>e.split(" ").filter(Boolean).slice(0,2).map(t=>t[0].toUpperCase()).join(""),D_={admin:"Administrador",user:"Usuário",partner:"Parceiro"},U_=[{section:"Principal",items:[{path:"/dashboard",label:"Dashboard",icon:d_},{path:"/clientes",label:"Clientes",icon:v_},{path:"/vendas",label:"Vendas",icon:y_}]},{section:"Administração",adminOnly:!0,items:[{path:"/usuarios",label:"Usuários",icon:fp},{path:"/bandeiras",label:"Bandeiras",icon:bx},{path:"/planos",label:"Planos",icon:Cm},{path:"/relatorios",label:"Relatórios",icon:Cm}]},{section:"Conta",items:[{path:"/perfil",label:"Meu Perfil",icon:i_}]}];function M_({open:e,onClose:t}){const{user:n,isAdmin:r}=Ar();return l.jsxs(l.Fragment,{children:[l.jsx(I_,{$open:e,onClick:t}),l.jsxs(w_,{$open:e,children:[l.jsxs($_,{children:[l.jsx(k_,{children:"BG"}),l.jsx(S_,{children:l.jsx(__,{children:"BG Representações"})})]}),l.jsx(j_,{children:U_.map(o=>o.adminOnly&&!r?null:l.jsxs("div",{children:[l.jsx(E_,{children:l.jsx(C_,{children:o.section})}),o.items.map(({path:i,label:s,icon:a})=>l.jsxs(F_,{to:i,onClick:t,children:[l.jsx(a,{size:17}),l.jsx(T_,{children:s})]},i))]},o.section))}),l.jsx(P_,{children:l.jsxs(A_,{children:[l.jsx(R_,{children:L_(n==null?void 0:n.name)}),l.jsxs(z_,{children:[l.jsx(O_,{children:(n==null?void 0:n.name)??"Usuário"}),l.jsx(N_,{children:D_[n==null?void 0:n.role]??(n==null?void 0:n.role)})]})]})})]})]})}const B_=E.header`
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
`,V_=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,H_=E.button`
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
`,W_=E.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,q_=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,G_=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;

  /* Oculta em telas pequenas para não sobrecarregar */
  @media (max-width: 600px) {
    display: none;
  }
`,Q_=E.span`
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
`,K_=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`,Y_=E.div`
  width: 1px;
  height: 24px;
  background-color: ${({theme:e})=>e.border.default};
  flex-shrink: 0;

  @media (max-width: 600px) {
    display: none;
  }
`,X_=E.button`
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
`,cu={"/dashboard":"Dashboard","/clientes":"Clientes","/vendas":"Vendas","/usuarios":"Usuários","/bandeiras":"Bandeiras","/planos":"Planos","/relatorios":"Relatórios","/perfil":"Meu Perfil","/onboarding":"Novo Cliente"},J_={admin:"Administrador",user:"Usuário",partner:"Parceiro"};function Z_({onMenuClick:e}){var s;const{user:t,logout:n}=Ar(),r=Pr(),o=(()=>{const a=cu[r.pathname];if(a)return a;const c=Object.keys(cu).find(f=>r.pathname.startsWith(f+"/"));return c?cu[c]:"BG Representações"})(),i=((s=t==null?void 0:t.name)==null?void 0:s.split(" ")[0])??"Usuário";return l.jsxs(B_,{children:[l.jsxs(V_,{children:[l.jsx(H_,{type:"button",onClick:e,"aria-label":"Abrir menu",children:l.jsx(m_,{size:18})}),l.jsx(W_,{children:o})]}),l.jsxs(q_,{children:[l.jsxs(G_,{children:[l.jsxs(Q_,{children:["Olá, ",i]}),l.jsx(K_,{children:J_[t==null?void 0:t.role]??(t==null?void 0:t.role)})]}),l.jsx(Y_,{}),l.jsxs(X_,{type:"button",onClick:n,children:[l.jsx(h_,{size:15}),l.jsx("span",{children:"Sair"})]})]})]})}const e5=E.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.surface.page};
`,t5=E.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; /* evita overflow em flex */
  overflow: hidden;
`,n5=E.main`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[8]};
  background-color: ${({theme:e})=>e.surface.page};

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[4]};
  }
`;function Tm(){const[e,t]=D.useState(!1);return l.jsxs(e5,{children:[l.jsx(M_,{open:e,onClose:()=>t(!1)}),l.jsxs(t5,{children:[l.jsx(Z_,{onMenuClick:()=>t(n=>!n)}),l.jsx(n5,{children:l.jsx(_d,{})})]})]})}var qs=e=>e.type==="checkbox",qr=e=>e instanceof Date,Nt=e=>e==null;const jx=e=>typeof e=="object";var et=e=>!Nt(e)&&!Array.isArray(e)&&jx(e)&&!qr(e),r5=e=>et(e)&&e.target?qs(e.target)?e.target.checked:e.target.value:e,o5=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,i5=(e,t)=>e.has(o5(t)),s5=e=>{const t=e.constructor&&e.constructor.prototype;return et(t)&&t.hasOwnProperty("isPrototypeOf")},pp=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function rt(e){if(e instanceof Date)return new Date(e);const t=typeof FileList<"u"&&e instanceof FileList;if(pp&&(e instanceof Blob||t))return e;const n=Array.isArray(e);if(!n&&!(et(e)&&s5(e)))return e;const r=n?[]:Object.create(Object.getPrototypeOf(e));for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=rt(e[o]));return r}var kc=e=>/^\w*$/.test(e),Ne=e=>e===void 0,hp=e=>Array.isArray(e)?e.filter(Boolean):[],mp=e=>hp(e.replace(/["|']|\]/g,"").split(/\.|\[/)),re=(e,t,n)=>{if(!t||!et(e))return n;const r=(kc(t)?[t]:mp(t)).reduce((o,i)=>Nt(o)?o:o[i],e);return Ne(r)||r===e?Ne(e[t])?n:e[t]:r},Fn=e=>typeof e=="boolean",bn=e=>typeof e=="function",Ee=(e,t,n)=>{let r=-1;const o=kc(t)?[t]:mp(t),i=o.length,s=i-1;for(;++r<i;){const a=o[r];let c=n;if(r!==s){const f=e[a];c=et(f)||Array.isArray(f)?f:isNaN(+o[r+1])?{}:[]}if(a==="__proto__"||a==="constructor"||a==="prototype")return;e[a]=c,e=e[a]}};const Pm={BLUR:"blur",FOCUS_OUT:"focusout"},wn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},In={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},a5=se.createContext(null);a5.displayName="HookFormControlContext";var l5=(e,t,n,r=!0)=>{const o={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(o,i,{get:()=>{const s=i;return t._proxyFormState[s]!==wn.all&&(t._proxyFormState[s]=!r||wn.all),e[s]}});return o};const c5=typeof window<"u"?se.useLayoutEffect:se.useEffect;var Kt=e=>typeof e=="string",u5=(e,t,n,r,o)=>Kt(e)?(r&&t.watch.add(e),re(n,e,o)):Array.isArray(e)?e.map(i=>(r&&t.watch.add(i),re(n,i))):(r&&(t.watchAll=!0),n),Hd=e=>Nt(e)||!jx(e);function lr(e,t,n=new WeakSet){if(Hd(e)||Hd(t))return Object.is(e,t);if(qr(e)&&qr(t))return Object.is(e.getTime(),t.getTime());const r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;if(n.has(e)||n.has(t))return!0;n.add(e),n.add(t);for(const i of r){const s=e[i];if(!o.includes(i))return!1;if(i!=="ref"){const a=t[i];if(qr(s)&&qr(a)||et(s)&&et(a)||Array.isArray(s)&&Array.isArray(a)?!lr(s,a,n):!Object.is(s,a))return!1}}return!0}const d5=se.createContext(null);d5.displayName="HookFormContext";var Ex=(e,t,n,r,o)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:o||!0}}:{},ls=e=>Array.isArray(e)?e:[e],Am=()=>{let e=[];return{get observers(){return e},next:o=>{for(const i of e)i.next&&i.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(i=>i!==o)}}),unsubscribe:()=>{e=[]}}};function Cx(e,t){const n={};for(const r in e)if(e.hasOwnProperty(r)){const o=e[r],i=t[r];if(o&&et(o)&&i){const s=Cx(o,i);et(s)&&(n[r]=s)}else e[r]&&(n[r]=i)}return n}var Et=e=>et(e)&&!Object.keys(e).length,gp=e=>e.type==="file",Nl=e=>{if(!pp)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Fx=e=>e.type==="select-multiple",yp=e=>e.type==="radio",f5=e=>yp(e)||qs(e),uu=e=>Nl(e)&&e.isConnected;function p5(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Ne(e)?r++:e[t[r++]];return e}function h5(e){for(const t in e)if(e.hasOwnProperty(t)&&!Ne(e[t]))return!1;return!0}function Xe(e,t){const n=Array.isArray(t)?t:kc(t)?[t]:mp(t),r=n.length===1?e:p5(e,n),o=n.length-1,i=n[o];return r&&delete r[i],o!==0&&(et(r)&&Et(r)||Array.isArray(r)&&h5(r))&&Xe(e,n.slice(0,-1)),e}var m5=e=>{for(const t in e)if(bn(e[t]))return!0;return!1};function Tx(e){return Array.isArray(e)||et(e)&&!m5(e)}function Wd(e,t={}){for(const n in e){const r=e[n];Tx(r)?(t[n]=Array.isArray(r)?[]:{},Wd(r,t[n])):Ne(r)||(t[n]=!0)}return t}function Eo(e,t,n){n||(n=Wd(t));for(const r in e){const o=e[r];if(Tx(o))Ne(t)||Hd(n[r])?n[r]=Wd(o,Array.isArray(o)?[]:{}):Eo(o,Nt(t)?{}:t[r],n[r]);else{const i=t[r];n[r]=!lr(o,i)}}return n}const Rm={value:!1,isValid:!1},zm={value:!0,isValid:!0};var Px=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ne(e[0].attributes.value)?Ne(e[0].value)||e[0].value===""?zm:{value:e[0].value,isValid:!0}:zm:Rm}return Rm},Ax=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Ne(e)?e:t?e===""?NaN:e&&+e:n&&Kt(e)?new Date(e):r?r(e):e;const Om={isValid:!1,value:null};var Rx=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Om):Om;function Nm(e){const t=e.ref;return gp(t)?t.files:yp(t)?Rx(e.refs).value:Fx(t)?[...t.selectedOptions].map(({value:n})=>n):qs(t)?Px(e.refs).value:Ax(Ne(t.value)?e.ref.value:t.value,e)}var g5=(e,t,n,r)=>{const o={};for(const i of e){const s=re(t,i);s&&Ee(o,i,s._f)}return{criteriaMode:n,names:[...e],fields:o,shouldUseNativeValidation:r}},Il=e=>e instanceof RegExp,Pi=e=>Ne(e)?e:Il(e)?e.source:et(e)?Il(e.value)?e.value.source:e.value:e,Im=e=>({isOnSubmit:!e||e===wn.onSubmit,isOnBlur:e===wn.onBlur,isOnChange:e===wn.onChange,isOnAll:e===wn.all,isOnTouch:e===wn.onTouched});const Lm="AsyncFunction";var y5=e=>!!e&&!!e.validate&&!!(bn(e.validate)&&e.validate.constructor.name===Lm||et(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Lm)),x5=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Dm=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const cs=(e,t,n,r)=>{for(const o of n||Object.keys(e)){const i=re(e,o);if(i){const{_f:s,...a}=i;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],o)&&!r)return!0;if(s.ref&&t(s.ref,s.name)&&!r)return!0;if(cs(a,t))break}else if(et(a)&&cs(a,t))break}}};function Um(e,t,n){const r=re(e,n);if(r||kc(n))return{error:r,name:n};const o=n.split(".");for(;o.length;){const i=o.join("."),s=re(t,i),a=re(e,i);if(s&&!Array.isArray(s)&&n!==i)return{name:n};if(a&&a.type)return{name:i,error:a};if(a&&a.root&&a.root.type)return{name:`${i}.root`,error:a.root};o.pop()}return{name:n}}var v5=(e,t,n,r)=>{n(e);const{name:o,...i}=e;return Et(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(s=>t[s]===(!r||wn.all))},b5=(e,t,n)=>!e||!t||e===t||ls(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),w5=(e,t,n,r,o)=>o.isOnAll?!1:!n&&o.isOnTouch?!(t||e):(n?r.isOnBlur:o.isOnBlur)?!e:(n?r.isOnChange:o.isOnChange)?e:!0,$5=(e,t)=>!hp(re(e,t)).length&&Xe(e,t),k5=(e,t,n)=>{const r=ls(re(e,n));return Ee(r,"root",t[n]),Ee(e,n,r),e};function Mm(e,t,n="validate"){if(Kt(e)||Array.isArray(e)&&e.every(Kt)||Fn(e)&&!e)return{type:n,message:Kt(e)?e:"",ref:t}}var yo=e=>et(e)&&!Il(e)?e:{value:e,message:""},Bm=async(e,t,n,r,o,i)=>{const{ref:s,refs:a,required:c,maxLength:f,minLength:u,min:d,max:p,pattern:m,validate:h,name:b,valueAsNumber:k,mount:y}=e._f,g=re(n,b);if(!y||t.has(b))return{};const x=a?a[0]:s,w=A=>{o&&x.reportValidity&&(x.setCustomValidity(Fn(A)?"":A||""),x.reportValidity())},C={},_=yp(s),T=qs(s),v=_||T,S=(k||gp(s))&&Ne(s.value)&&Ne(g)||Nl(s)&&s.value===""||g===""||Array.isArray(g)&&!g.length,P=Ex.bind(null,b,r,C),F=(A,N,R,U=In.maxLength,j=In.minLength)=>{const $=A?N:R;C[b]={type:A?U:j,message:$,ref:s,...P(A?U:j,$)}};if(i?!Array.isArray(g)||!g.length:c&&(!v&&(S||Nt(g))||Fn(g)&&!g||T&&!Px(a).isValid||_&&!Rx(a).isValid)){const{value:A,message:N}=Kt(c)?{value:!!c,message:c}:yo(c);if(A&&(C[b]={type:In.required,message:N,ref:x,...P(In.required,N)},!r))return w(N),C}if(!S&&(!Nt(d)||!Nt(p))){let A,N;const R=yo(p),U=yo(d);if(!Nt(g)&&!isNaN(g)){const j=s.valueAsNumber||g&&+g;Nt(R.value)||(A=j>R.value),Nt(U.value)||(N=j<U.value)}else{const j=s.valueAsDate||new Date(g),$=L=>new Date(new Date().toDateString()+" "+L),I=s.type=="time",z=s.type=="week";Kt(R.value)&&g&&(A=I?$(g)>$(R.value):z?g>R.value:j>new Date(R.value)),Kt(U.value)&&g&&(N=I?$(g)<$(U.value):z?g<U.value:j<new Date(U.value))}if((A||N)&&(F(!!A,R.message,U.message,In.max,In.min),!r))return w(C[b].message),C}if((f||u)&&!S&&(Kt(g)||i&&Array.isArray(g))){const A=yo(f),N=yo(u),R=!Nt(A.value)&&g.length>+A.value,U=!Nt(N.value)&&g.length<+N.value;if((R||U)&&(F(R,A.message,N.message),!r))return w(C[b].message),C}if(m&&!S&&Kt(g)){const{value:A,message:N}=yo(m);if(Il(A)&&!g.match(A)&&(C[b]={type:In.pattern,message:N,ref:s,...P(In.pattern,N)},!r))return w(N),C}if(h){if(bn(h)){const A=await h(g,n),N=Mm(A,x);if(N&&(C[b]={...N,...P(In.validate,N.message)},!r))return w(N.message),C}else if(et(h)){let A={};for(const N in h){if(!Et(A)&&!r)break;const R=Mm(await h[N](g,n),x,N);R&&(A={...R,...P(N,R.message)},w(R.message),r&&(C[b]=A))}if(!Et(A)&&(C[b]={ref:x,...A},!r))return C}}return w(!0),C};const S5={mode:wn.onSubmit,reValidateMode:wn.onChange,shouldFocusError:!0};function _5(e={}){let t={...S5,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:bn(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},o=et(t.defaultValues)||et(t.values)?rt(t.defaultValues||t.values)||{}:{},i=t.shouldUnregister?{}:rt(o),s={action:!1,mount:!1,watch:!1,keepIsValid:!1},a={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},c,f=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={...u};let p={...d};const m={array:Am(),state:Am()},h=t.criteriaMode===wn.all,b=O=>B=>{clearTimeout(f),f=setTimeout(O,B)},k=async O=>{if(!s.keepIsValid&&!t.disabled&&(d.isValid||p.isValid||O)){let B;t.resolver?(B=Et((await v()).errors),y()):B=await P(r,!0),B!==n.isValid&&m.state.next({isValid:B})}},y=(O,B)=>{!t.disabled&&(d.isValidating||d.validatingFields||p.isValidating||p.validatingFields)&&((O||Array.from(a.mount)).forEach(W=>{W&&(B?Ee(n.validatingFields,W,B):Xe(n.validatingFields,W))}),m.state.next({validatingFields:n.validatingFields,isValidating:!Et(n.validatingFields)}))},g=(O,B=[],W,Y,J=!0,X=!0)=>{if(Y&&W&&!t.disabled){if(s.action=!0,X&&Array.isArray(re(r,O))){const oe=W(re(r,O),Y.argA,Y.argB);J&&Ee(r,O,oe)}if(X&&Array.isArray(re(n.errors,O))){const oe=W(re(n.errors,O),Y.argA,Y.argB);J&&Ee(n.errors,O,oe),$5(n.errors,O)}if((d.touchedFields||p.touchedFields)&&X&&Array.isArray(re(n.touchedFields,O))){const oe=W(re(n.touchedFields,O),Y.argA,Y.argB);J&&Ee(n.touchedFields,O,oe)}(d.dirtyFields||p.dirtyFields)&&(n.dirtyFields=Eo(o,i)),m.state.next({name:O,isDirty:A(O,B),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Ee(i,O,B)},x=(O,B)=>{Ee(n.errors,O,B),m.state.next({errors:n.errors})},w=O=>{n.errors=O,m.state.next({errors:n.errors,isValid:!1})},C=(O,B,W,Y)=>{const J=re(r,O);if(J){const X=re(i,O,Ne(W)?re(o,O):W);Ne(X)||Y&&Y.defaultChecked||B?Ee(i,O,B?X:Nm(J._f)):U(O,X),s.mount&&!s.action&&k()}},_=(O,B,W,Y,J)=>{let X=!1,oe=!1;const ue={name:O};if(!t.disabled){if(!W||Y){(d.isDirty||p.isDirty)&&(oe=n.isDirty,n.isDirty=ue.isDirty=A(),X=oe!==ue.isDirty);const ge=lr(re(o,O),B);oe=!!re(n.dirtyFields,O),ge?Xe(n.dirtyFields,O):Ee(n.dirtyFields,O,!0),ue.dirtyFields=n.dirtyFields,X=X||(d.dirtyFields||p.dirtyFields)&&oe!==!ge}if(W){const ge=re(n.touchedFields,O);ge||(Ee(n.touchedFields,O,W),ue.touchedFields=n.touchedFields,X=X||(d.touchedFields||p.touchedFields)&&ge!==W)}X&&J&&m.state.next(ue)}return X?ue:{}},T=(O,B,W,Y)=>{const J=re(n.errors,O),X=(d.isValid||p.isValid)&&Fn(B)&&n.isValid!==B;if(t.delayError&&W?(c=b(()=>x(O,W)),c(t.delayError)):(clearTimeout(f),c=null,W?Ee(n.errors,O,W):Xe(n.errors,O)),(W?!lr(J,W):J)||!Et(Y)||X){const oe={...Y,...X&&Fn(B)?{isValid:B}:{},errors:n.errors,name:O};n={...n,...oe},m.state.next(oe)}},v=async O=>(y(O,!0),await t.resolver(i,t.context,g5(O||a.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),S=async O=>{const{errors:B}=await v(O);if(y(O),O)for(const W of O){const Y=re(B,W);Y?Ee(n.errors,W,Y):Xe(n.errors,W)}else n.errors=B;return B},P=async(O,B,W={valid:!0})=>{for(const Y in O){const J=O[Y];if(J){const{_f:X,...oe}=J;if(X){const ue=a.array.has(X.name),ge=J._f&&y5(J._f);ge&&d.validatingFields&&y([X.name],!0);const ke=await Bm(J,a.disabled,i,h,t.shouldUseNativeValidation&&!B,ue);if(ge&&d.validatingFields&&y([X.name]),ke[X.name]&&(W.valid=!1,B||e.shouldUseNativeValidation))break;!B&&(re(ke,X.name)?ue?k5(n.errors,ke,X.name):Ee(n.errors,X.name,ke[X.name]):Xe(n.errors,X.name))}!Et(oe)&&await P(oe,B,W)}}return W.valid},F=()=>{for(const O of a.unMount){const B=re(r,O);B&&(B._f.refs?B._f.refs.every(W=>!uu(W)):!uu(B._f.ref))&&ee(O)}a.unMount=new Set},A=(O,B)=>!t.disabled&&(O&&B&&Ee(i,O,B),!lr(Q(),o)),N=(O,B,W)=>u5(O,a,{...s.mount?i:Ne(B)?o:Kt(O)?{[O]:B}:B},W,B),R=O=>hp(re(s.mount?i:o,O,t.shouldUnregister?re(o,O,[]):[])),U=(O,B,W={})=>{const Y=re(r,O);let J=B;if(Y){const X=Y._f;X&&(!X.disabled&&Ee(i,O,Ax(B,X)),J=Nl(X.ref)&&Nt(B)?"":B,Fx(X.ref)?[...X.ref.options].forEach(oe=>oe.selected=J.includes(oe.value)):X.refs?qs(X.ref)?X.refs.forEach(oe=>{(!oe.defaultChecked||!oe.disabled)&&(Array.isArray(J)?oe.checked=!!J.find(ue=>ue===oe.value):oe.checked=J===oe.value||!!J)}):X.refs.forEach(oe=>oe.checked=oe.value===J):gp(X.ref)?X.ref.value="":(X.ref.value=J,X.ref.type||m.state.next({name:O,values:rt(i)})))}(W.shouldDirty||W.shouldTouch)&&_(O,J,W.shouldTouch,W.shouldDirty,!0),W.shouldValidate&&L(O)},j=(O,B,W)=>{for(const Y in B){if(!B.hasOwnProperty(Y))return;const J=B[Y],X=O+"."+Y,oe=re(r,X);(a.array.has(O)||et(J)||oe&&!oe._f)&&!qr(J)?j(X,J,W):U(X,J,W)}},$=(O,B,W={})=>{const Y=re(r,O),J=a.array.has(O),X=rt(B);Ee(i,O,X),J?(m.array.next({name:O,values:rt(i)}),(d.isDirty||d.dirtyFields||p.isDirty||p.dirtyFields)&&W.shouldDirty&&m.state.next({name:O,dirtyFields:Eo(o,i),isDirty:A(O,X)})):Y&&!Y._f&&!Nt(X)?j(O,X,W):U(O,X,W),Dm(O,a)?m.state.next({...n,name:O,values:rt(i)}):m.state.next({name:s.mount?O:void 0,values:rt(i)})},I=async O=>{s.mount=!0;const B=O.target;let W=B.name,Y=!0;const J=re(r,W),X=ge=>{Y=Number.isNaN(ge)||qr(ge)&&isNaN(ge.getTime())||lr(ge,re(i,W,ge))},oe=Im(t.mode),ue=Im(t.reValidateMode);if(J){let ge,ke;const tt=B.type?Nm(J._f):r5(O),Ge=O.type===Pm.BLUR||O.type===Pm.FOCUS_OUT,fn=!x5(J._f)&&!t.resolver&&!re(n.errors,W)&&!J._f.deps||w5(Ge,re(n.touchedFields,W),n.isSubmitted,ue,oe),zt=Dm(W,a,Ge);Ee(i,W,tt),Ge?(!B||!B.readOnly)&&(J._f.onBlur&&J._f.onBlur(O),c&&c(0)):J._f.onChange&&J._f.onChange(O);const pn=_(W,tt,Ge),yi=!Et(pn)||zt;if(!Ge&&m.state.next({name:W,type:O.type,values:rt(i)}),fn)return(d.isValid||p.isValid)&&(t.mode==="onBlur"?Ge&&k():Ge||k()),yi&&m.state.next({name:W,...zt?{}:pn});if(!Ge&&zt&&m.state.next({...n}),t.resolver){const{errors:Qs}=await v([W]);if(y([W]),X(tt),Y){const xi=Um(n.errors,r,W),vi=Um(Qs,r,xi.name||W);ge=vi.error,W=vi.name,ke=Et(Qs)}}else y([W],!0),ge=(await Bm(J,a.disabled,i,h,t.shouldUseNativeValidation))[W],y([W]),X(tt),Y&&(ge?ke=!1:(d.isValid||p.isValid)&&(ke=await P(r,!0)));Y&&(J._f.deps&&(!Array.isArray(J._f.deps)||J._f.deps.length>0)&&L(J._f.deps),T(W,ke,ge,pn))}},z=(O,B)=>{if(re(n.errors,B)&&O.focus)return O.focus(),1},L=async(O,B={})=>{let W,Y;const J=ls(O);if(t.resolver){const X=await S(Ne(O)?O:J);W=Et(X),Y=O?!J.some(oe=>re(X,oe)):W}else O?(Y=(await Promise.all(J.map(async X=>{const oe=re(r,X);return await P(oe&&oe._f?{[X]:oe}:oe)}))).every(Boolean),!(!Y&&!n.isValid)&&k()):Y=W=await P(r);return m.state.next({...!Kt(O)||(d.isValid||p.isValid)&&W!==n.isValid?{}:{name:O},...t.resolver||!O?{isValid:W}:{},errors:n.errors}),B.shouldFocus&&!Y&&cs(r,z,O?J:a.mount),Y},Q=(O,B)=>{let W={...s.mount?i:o};return B&&(W=Cx(B.dirtyFields?n.dirtyFields:n.touchedFields,W)),Ne(O)?W:Kt(O)?re(W,O):O.map(Y=>re(W,Y))},V=(O,B)=>({invalid:!!re((B||n).errors,O),isDirty:!!re((B||n).dirtyFields,O),error:re((B||n).errors,O),isValidating:!!re(n.validatingFields,O),isTouched:!!re((B||n).touchedFields,O)}),K=O=>{const B=O?ls(O):void 0;B==null||B.forEach(W=>Xe(n.errors,W)),B?B.forEach(W=>{m.state.next({name:W,errors:n.errors})}):m.state.next({errors:{}})},G=(O,B,W)=>{const Y=(re(r,O,{_f:{}})._f||{}).ref,J=re(n.errors,O)||{},{ref:X,message:oe,type:ue,...ge}=J;Ee(n.errors,O,{...ge,...B,ref:Y}),m.state.next({name:O,errors:n.errors,isValid:!1}),W&&W.shouldFocus&&Y&&Y.focus&&Y.focus()},M=(O,B)=>bn(O)?m.state.subscribe({next:W=>"values"in W&&O(N(void 0,B),W)}):N(O,B,!0),H=O=>m.state.subscribe({next:B=>{b5(O.name,B.name,O.exact)&&v5(B,O.formState||d,ve,O.reRenderRoot)&&O.callback({values:{...i},...n,...B,defaultValues:o})}}).unsubscribe,te=O=>(s.mount=!0,p={...p,...O.formState},H({...O,formState:{...u,...O.formState}})),ee=(O,B={})=>{for(const W of O?ls(O):a.mount)a.mount.delete(W),a.array.delete(W),B.keepValue||(Xe(r,W),Xe(i,W)),!B.keepError&&Xe(n.errors,W),!B.keepDirty&&Xe(n.dirtyFields,W),!B.keepTouched&&Xe(n.touchedFields,W),!B.keepIsValidating&&Xe(n.validatingFields,W),!t.shouldUnregister&&!B.keepDefaultValue&&Xe(o,W);m.state.next({values:rt(i)}),m.state.next({...n,...B.keepDirty?{isDirty:A()}:{}}),!B.keepIsValid&&k()},ie=({disabled:O,name:B})=>{if(Fn(O)&&s.mount||O||a.disabled.has(B)){const J=a.disabled.has(B)!==!!O;O?a.disabled.add(B):a.disabled.delete(B),J&&s.mount&&!s.action&&k()}},le=(O,B={})=>{let W=re(r,O);const Y=Fn(B.disabled)||Fn(t.disabled);return Ee(r,O,{...W||{},_f:{...W&&W._f?W._f:{ref:{name:O}},name:O,mount:!0,...B}}),a.mount.add(O),W?ie({disabled:Fn(B.disabled)?B.disabled:t.disabled,name:O}):C(O,!0,B.value),{...Y?{disabled:B.disabled||t.disabled}:{},...t.progressive?{required:!!B.required,min:Pi(B.min),max:Pi(B.max),minLength:Pi(B.minLength),maxLength:Pi(B.maxLength),pattern:Pi(B.pattern)}:{},name:O,onChange:I,onBlur:I,ref:J=>{if(J){le(O,B),W=re(r,O);const X=Ne(J.value)&&J.querySelectorAll&&J.querySelectorAll("input,select,textarea")[0]||J,oe=f5(X),ue=W._f.refs||[];if(oe?ue.find(ge=>ge===X):X===W._f.ref)return;Ee(r,O,{_f:{...W._f,...oe?{refs:[...ue.filter(uu),X,...Array.isArray(re(o,O))?[{}]:[]],ref:{type:X.type,name:O}}:{ref:X}}}),C(O,!1,void 0,X)}else W=re(r,O,{}),W._f&&(W._f.mount=!1),(t.shouldUnregister||B.shouldUnregister)&&!(i5(a.array,O)&&s.action)&&a.unMount.add(O)}}},de=()=>t.shouldFocusError&&cs(r,z,a.mount),$e=O=>{Fn(O)&&(m.state.next({disabled:O}),cs(r,(B,W)=>{const Y=re(r,W);Y&&(B.disabled=Y._f.disabled||O,Array.isArray(Y._f.refs)&&Y._f.refs.forEach(J=>{J.disabled=Y._f.disabled||O}))},0,!1))},Me=(O,B)=>async W=>{let Y;W&&(W.preventDefault&&W.preventDefault(),W.persist&&W.persist());let J=rt(i);if(m.state.next({isSubmitting:!0}),t.resolver){const{errors:X,values:oe}=await v();y(),n.errors=X,J=rt(oe)}else await P(r);if(a.disabled.size)for(const X of a.disabled)Xe(J,X);if(Xe(n.errors,"root"),Et(n.errors)){m.state.next({errors:{}});try{await O(J,W)}catch(X){Y=X}}else B&&await B({...n.errors},W),de(),setTimeout(de);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Et(n.errors)&&!Y,submitCount:n.submitCount+1,errors:n.errors}),Y)throw Y},ft=(O,B={})=>{re(r,O)&&(Ne(B.defaultValue)?$(O,rt(re(o,O))):($(O,B.defaultValue),Ee(o,O,rt(B.defaultValue))),B.keepTouched||Xe(n.touchedFields,O),B.keepDirty||(Xe(n.dirtyFields,O),n.isDirty=B.defaultValue?A(O,rt(re(o,O))):A()),B.keepError||(Xe(n.errors,O),d.isValid&&k()),m.state.next({...n}))},je=(O,B={})=>{const W=O?rt(O):o,Y=rt(W),J=Et(O),X=J?o:Y;if(B.keepDefaultValues||(o=W),!B.keepValues){if(B.keepDirtyValues){const oe=new Set([...a.mount,...Object.keys(Eo(o,i))]);for(const ue of Array.from(oe)){const ge=re(n.dirtyFields,ue),ke=re(i,ue),tt=re(X,ue);ge&&!Ne(ke)?Ee(X,ue,ke):!ge&&!Ne(tt)&&$(ue,tt)}}else{if(pp&&Ne(O))for(const oe of a.mount){const ue=re(r,oe);if(ue&&ue._f){const ge=Array.isArray(ue._f.refs)?ue._f.refs[0]:ue._f.ref;if(Nl(ge)){const ke=ge.closest("form");if(ke){ke.reset();break}}}}if(B.keepFieldsRef)for(const oe of a.mount)$(oe,re(X,oe));else r={}}i=t.shouldUnregister?B.keepDefaultValues?rt(o):{}:rt(X),m.array.next({values:{...X}}),m.state.next({values:{...X}})}a={mount:B.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},s.mount=!d.isValid||!!B.keepIsValid||!!B.keepDirtyValues||!t.shouldUnregister&&!Et(X),s.watch=!!t.shouldUnregister,s.keepIsValid=!!B.keepIsValid,s.action=!1,B.keepErrors||(n.errors={}),m.state.next({submitCount:B.keepSubmitCount?n.submitCount:0,isDirty:J?!1:B.keepDirty?n.isDirty:!!(B.keepDefaultValues&&!lr(O,o)),isSubmitted:B.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:J?{}:B.keepDirtyValues?B.keepDefaultValues&&i?Eo(o,i):n.dirtyFields:B.keepDefaultValues&&O?Eo(o,O):B.keepDirty?n.dirtyFields:{},touchedFields:B.keepTouched?n.touchedFields:{},errors:B.keepErrors?n.errors:{},isSubmitSuccessful:B.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:o})},Be=(O,B)=>je(bn(O)?O(i):O,{...t.resetOptions,...B}),fe=(O,B={})=>{const W=re(r,O),Y=W&&W._f;if(Y){const J=Y.refs?Y.refs[0]:Y.ref;J.focus&&setTimeout(()=>{J.focus(),B.shouldSelect&&bn(J.select)&&J.select()})}},ve=O=>{n={...n,...O}},Ye={control:{register:le,unregister:ee,getFieldState:V,handleSubmit:Me,setError:G,_subscribe:H,_runSchema:v,_updateIsValidating:y,_focusError:de,_getWatch:N,_getDirty:A,_setValid:k,_setFieldArray:g,_setDisabledField:ie,_setErrors:w,_getFieldArray:R,_reset:je,_resetDefaultValues:()=>bn(t.defaultValues)&&t.defaultValues().then(O=>{Be(O,t.resetOptions),m.state.next({isLoading:!1})}),_removeUnmounted:F,_disableForm:$e,_subjects:m,_proxyFormState:d,get _fields(){return r},get _formValues(){return i},get _state(){return s},set _state(O){s=O},get _defaultValues(){return o},get _names(){return a},set _names(O){a=O},get _formState(){return n},get _options(){return t},set _options(O){t={...t,...O}}},subscribe:te,trigger:L,register:le,handleSubmit:Me,watch:M,setValue:$,getValues:Q,reset:Be,resetField:ft,clearErrors:K,unregister:ee,setError:G,setFocus:fe,getFieldState:V};return{...Ye,formControl:Ye}}function Sc(e={}){const t=se.useRef(void 0),n=se.useRef(void 0),[r,o]=se.useState({isDirty:!1,isValidating:!1,isLoading:bn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:bn(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:r},e.defaultValues&&!bn(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:s,...a}=_5(e);t.current={...a,formState:r}}const i=t.current.control;return i._options=e,c5(()=>{const s=i._subscribe({formState:i._proxyFormState,callback:()=>o({...i._formState}),reRenderRoot:!0});return o(a=>({...a,isReady:!0})),i._formState.isReady=!0,s},[i]),se.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),se.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode)},[i,e.mode,e.reValidateMode]),se.useEffect(()=>{e.errors&&(i._setErrors(e.errors),i._focusError())},[i,e.errors]),se.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),se.useEffect(()=>{if(i._proxyFormState.isDirty){const s=i._getDirty();s!==r.isDirty&&i._subjects.state.next({isDirty:s})}},[i,r.isDirty]),se.useEffect(()=>{var s;e.values&&!lr(e.values,n.current)?(i._reset(e.values,{keepFieldsRef:!0,...i._options.resetOptions}),!((s=i._options.resetOptions)===null||s===void 0)&&s.keepIsValid||i._setValid(),n.current=e.values,o(a=>({...a}))):i._resetDefaultValues()},[i,e.values]),se.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=se.useMemo(()=>l5(r,i),[i,r]),t.current}const j5=dt`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Gs=dt`
  from { opacity: 0; transform: translateX(-28px); }
  to   { opacity: 1; transform: translateX(0); }
`,E5=dt`
  from { opacity: 0; transform: translateX(28px); }
  to   { opacity: 1; transform: translateX(0); }
`,C5=dt`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,F5=dt`
  from { opacity: 0; transform: scale(1.02); }
  to   { opacity: 1; transform: scale(1); }
`,T5=E.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 55fr 45fr;
  overflow: hidden;

  @media (max-width: 900px) {
    display: block;
    min-height: 100vh;
  }
`,P5=E.section`
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

  animation: ${Gs} 0.6s ease both;

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[6]};
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    &::after { display: none; }
  }
`,A5=E.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
  }
`,R5=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[20]};
  animation: ${Gs} 0.55s 0.05s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({theme:e})=>e.spacing[12]};
    justify-content: center;
  }
`,z5=E.div`
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
`,O5=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary[200]};
  letter-spacing: 0.025em;
`,N5=E.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({theme:e})=>e.spacing[5]};
  max-width: 460px;
  animation: ${Gs} 0.55s 0.12s ease both;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.75rem, 7vw, 2.3rem);
    max-width: 320px;
  }
`,I5=E.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.neutral[500]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0 0 ${({theme:e})=>e.spacing[10]};
  max-width: 360px;
  animation: ${Gs} 0.55s 0.2s ease both;

  @media (max-width: 900px) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    max-width: 280px;
    margin-bottom: ${({theme:e})=>e.spacing[8]};
  }
`,L5=E.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};
  animation: ${Gs} 0.55s 0.28s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[6]};
  }
`,du=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,fu=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[400]};
  line-height: 1;
`,pu=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,D5=E.div`
  position: relative;
  z-index: 3;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[700]};
  animation: ${j5} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`,U5=E.button`
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
    animation: ${C5} 0.55s 0.35s ease both;
    transition:
      transform ${({theme:e})=>e.transitions.base},
      box-shadow ${({theme:e})=>e.transitions.base};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px ${({theme:e})=>e.colors.primary[900]}75;
    }
    &:active { transform: translateY(0); }
  }
`,M5=E.section`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[16]};
  animation: ${E5} 0.55s 0.1s ease both;

  @media (max-width: 1100px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[10]};
  }

  @media (max-width: 900px) {
    display: none;
  }
`,B5=E.div`
  width: 100%;
  max-width: 360px;
`,V5=E.div`
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
    ${({$open:e})=>e&&Er`
        & > * {
          animation: ${F5} 0.32s 0.05s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}
  }
`,H5=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing[10]};
  flex-shrink: 0;
`,W5=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,q5=E.div`
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
`,G5=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
`,Q5=E.button`
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
`,K5=E.div`
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,Y5=E.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.brand.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
`,X5=E.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,J5=E.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0;
`,Z5=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[8]};
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,Vm=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Hm=E.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,Wm=E.div`
  position: relative;
  display: flex;
  align-items: center;
`,qm=E.input`
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
`,ej=E.button`
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
`,Gm=E.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,tj=E.button`
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
`,nj=E.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: _spin 0.7s linear infinite;

  @keyframes _spin { to { transform: rotate(360deg); } }
`,rj=E.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[100]};
  margin: ${({theme:e})=>e.spacing[8]} 0 ${({theme:e})=>e.spacing[6]};
`,oj=E.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;function Qm({onSubmitSuccess:e}){const{login:t}=Ar(),[n,r]=D.useState(!1),[o,i]=D.useState(!1),{register:s,handleSubmit:a,formState:{errors:c}}=Sc({defaultValues:{email:"",password:""}}),f=async({email:u,password:d})=>{i(!0);try{const{mustChangePassword:p}=await t(u,d);e(p)}catch(p){ae.error(p.message,{toastId:"login-error"})}finally{i(!1)}};return l.jsxs(l.Fragment,{children:[l.jsxs(K5,{children:[l.jsx(Y5,{children:"Área restrita"}),l.jsx(X5,{children:"Bem-vindo de volta"}),l.jsx(J5,{children:"Use as credenciais fornecidas pelo administrador para acessar sua conta."})]}),l.jsxs("form",{onSubmit:a(f),noValidate:!0,children:[l.jsxs(Z5,{children:[l.jsxs(Vm,{children:[l.jsx(Hm,{htmlFor:"email",children:"E-mail"}),l.jsx(Wm,{children:l.jsx(qm,{id:"email",type:"email",placeholder:"seu@email.com",autoComplete:"email",$hasError:!!c.email,disabled:o,...s("email",{required:"O e-mail é obrigatório.",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Informe um e-mail válido."}})})}),c.email&&l.jsxs(Gm,{children:[l.jsx(be,{size:12}),c.email.message]})]}),l.jsxs(Vm,{children:[l.jsx(Hm,{htmlFor:"password",children:"Senha"}),l.jsxs(Wm,{children:[l.jsx(qm,{id:"password",type:n?"text":"password",placeholder:"••••••••",autoComplete:"current-password",$hasError:!!c.password,$hasToggle:!0,disabled:o,...s("password",{required:"A senha é obrigatória.",minLength:{value:6,message:"Mínimo 6 caracteres."}})}),l.jsx(ej,{type:"button",onClick:()=>r(u=>!u),"aria-label":n?"Ocultar senha":"Mostrar senha",tabIndex:-1,children:n?l.jsx(xx,{size:16}):l.jsx(vx,{size:16})})]}),c.password&&l.jsxs(Gm,{children:[l.jsx(be,{size:12}),c.password.message]})]})]}),l.jsx(tj,{type:"submit",disabled:o,$isLoading:o,children:o?l.jsxs(l.Fragment,{children:[l.jsx(nj,{}),"Carregando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(p_,{size:17}),"Entrar"]})})]}),l.jsx(rj,{}),l.jsx(oj,{children:"Problemas com o acesso? Fale com o administrador do sistema."})]})}function ij(){const e=Jn(),[t,n]=D.useState(!1);D.useEffect(()=>(document.body.style.overflow=t?"hidden":"",()=>{document.body.style.overflow=""}),[t]),D.useEffect(()=>{const o=i=>{i.key==="Escape"&&n(!1)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[]);const r=o=>{console.log("[LOGIN SUCCESS - NAVEGAÇÃO]",{mustChangePassword:o}),document.body.style.overflow="",o?e("/alterar-senha",{replace:!0}):e("/dashboard",{replace:!0})};return l.jsxs(T5,{children:[l.jsxs(P5,{children:[l.jsxs(A5,{children:[l.jsxs(R5,{children:[l.jsx(z5,{children:"BG"}),l.jsx(O5,{children:"BG Representações"})]}),l.jsxs(N5,{children:["Gestão de ",l.jsx("em",{children:"benefícios"})," com"," ","precisão corporativa."]}),l.jsx(I5,{children:"Plataforma integrada para gerenciamento de clientes, vendas e cartões de vale alimentação — com rastreabilidade completa e auditoria em cada etapa."}),l.jsxs(L5,{children:[l.jsxs(du,{children:[l.jsx(fu,{children:"100%"}),l.jsx(pu,{children:"Auditado"})]}),l.jsxs(du,{children:[l.jsx(fu,{children:"JWT"}),l.jsx(pu,{children:"Segurança"})]}),l.jsxs(du,{children:[l.jsx(fu,{children:"3 níveis"}),l.jsx(pu,{children:"de acesso"})]})]}),l.jsxs(U5,{type:"button",onClick:()=>n(!0),"aria-label":"Abrir formulário de login",children:["Acessar Sistema",l.jsx(n_,{size:17})]})]}),l.jsxs(D5,{children:["© ",new Date().getFullYear()," BG Representações — Uso interno exclusivo."]})]}),l.jsx(M5,{children:l.jsx(B5,{children:l.jsx(Qm,{onSubmitSuccess:r})})}),l.jsxs(V5,{$open:t,role:"dialog","aria-modal":"true","aria-label":"Formulário de login",children:[l.jsxs(H5,{children:[l.jsxs(W5,{children:[l.jsx(q5,{children:"BG"}),l.jsx(G5,{children:"BG Representações"})]}),l.jsx(Q5,{type:"button",onClick:()=>n(!1),"aria-label":"Fechar formulário",children:l.jsx($c,{size:18})})]}),l.jsx(Qm,{onSubmitSuccess:r})]})]})}const sj=E.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.surface.page};
`,aj=E.div`
  width: 100%;
  max-width: 420px;
  padding: 32px;
  background: ${({theme:e})=>e.surface.card};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.lg};
`,lj=E.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`,cj=E.h1`
  font-size: 22px;
  text-align: center;
  margin-bottom: 8px;
`,uj=E.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 24px;
  color: ${({theme:e})=>e.text.secondary};
`,dj=E.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,hu=E.div`
  display: flex;
  flex-direction: column;
`,mu=E.label`
  font-size: 13px;
  margin-bottom: 6px;
`,gu=E.input`
  height: 40px;
  padding: 0 10px;
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
`,yu=E.span`
  font-size: 12px;
  color: red;
  margin-top: 4px;
`,fj=E.button`
  height: 42px;
  background: ${({theme:e})=>e.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: pointer;
`;function pj(){const{changePassword:e,user:t}=Ar(),n=Jn(),[r,o]=D.useState(!1),{register:i,handleSubmit:s,watch:a,formState:{errors:c}}=Sc(),f=a("newPassword"),u=async d=>{o(!0);try{await e(d.currentPassword,d.newPassword,d.confirmPassword),n("/dashboard",{replace:!0})}catch(p){ae.error(p.message)}finally{o(!1)}};return l.jsx(sj,{children:l.jsxs(aj,{children:[l.jsx(lj,{children:l.jsx(kx,{size:28})}),l.jsx(cj,{children:"Alterar senha"}),l.jsxs(uj,{children:[t!=null&&t.name?`Olá, ${t.name.split(" ")[0]}. `:"","Você precisa definir uma nova senha para continuar."]}),l.jsxs(dj,{onSubmit:s(u),children:[l.jsxs(hu,{children:[l.jsx(mu,{children:"Senha atual"}),l.jsx(gu,{type:"password",...i("currentPassword",{required:!0})}),c.currentPassword&&l.jsx(yu,{children:"Obrigatório"})]}),l.jsxs(hu,{children:[l.jsx(mu,{children:"Nova senha"}),l.jsx(gu,{type:"password",...i("newPassword",{required:!0})}),c.newPassword&&l.jsx(yu,{children:"Obrigatório"})]}),l.jsxs(hu,{children:[l.jsx(mu,{children:"Confirmar senha"}),l.jsx(gu,{type:"password",...i("confirmPassword",{required:!0,validate:d=>d===f||"Senhas não coincidem"})}),c.confirmPassword&&l.jsx(yu,{children:c.confirmPassword.message})]}),l.jsx(fj,{type:"submit",disabled:r,children:r?"Salvando...":"Alterar senha"})]})]})})}const xp=dt`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,hj=E.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  animation: ${xp} 0.35s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,mj=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,gj=E.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,yj=E.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,xj=E.button`
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
`,vj=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  animation: ${xp} 0.35s 0.05s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,bj=E.div`
  position: relative;
  flex: 1;
  max-width: 360px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,wj=E.span`
  position: absolute;
  left: ${({theme:e})=>e.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.text.muted};
  display: flex;
  align-items: center;
  pointer-events: none;
`,$j=E.input`
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
`,kj=E.select`
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
`,Sj=E.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  animation: ${xp} 0.35s 0.1s ease both;
`,_j=E.table`
  width: 100%;
  border-collapse: collapse;
`,jj=E.thead`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Ai=E.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  text-align: left;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
  white-space: nowrap;
`,Ej=E.tbody``,Cj=E.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  transition: background-color ${({theme:e})=>e.transitions.fast};
  cursor: pointer;

  &:last-child { border-bottom: none; }

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[50]};
  }
`,qd=E.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.primary};
  vertical-align: middle;
`,xu=E(qd)`
  color: ${({theme:e})=>e.text.secondary};
`,Km={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},Fj=E.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=Km[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=Km[e])==null?void 0:t.color)??"#374151"}};
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
`,Tj={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},Pj=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[8]};
  gap: ${({theme:e})=>e.spacing[3]};
  text-align: center;
`,Aj=E.div`
  color: ${({theme:e})=>e.colors.neutral[300]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Rj=E.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,zj=E.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
  max-width: 300px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,Oj=E.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  &:last-child { border-bottom: none; }
`,Ri=E.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
`,Nj=dt`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,zi=E.div`
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
  animation: ${Nj} 1.4s ease infinite;
`,Ij=E.div`
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
`,Lj=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
`,Dj=E.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,ya=E.button`
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
`,Uj=15,Mj=({status:e})=>l.jsx(Fj,{$status:e,children:Tj[e]??e});function Bj(){return Array.from({length:5}).map((e,t)=>l.jsxs(Oj,{children:[l.jsx(Ri,{children:l.jsx(zi,{$w:"60%"})}),l.jsx(Ri,{children:l.jsx(zi,{$w:"80%"})}),l.jsx(Ri,{children:l.jsx(zi,{$w:"50%"})}),l.jsx(Ri,{children:l.jsx(zi,{$w:"70%"})}),l.jsx(Ri,{children:l.jsx(zi,{$w:"40%"})})]},t))}const Ym=(e="")=>{const t=e.slice(0,14);return t.length<=2?t:t.length<=5?`${t.slice(0,2)}.${t.slice(2)}`:t.length<=8?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5)}`:t.length<=12?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8)}`:`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8,12)}-${t.slice(12)}`},Vj=(e="")=>/^[\d.\-/]+$/.test(e)&&/\d/.test(e),Hj=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",Wj=e=>({food:"Alimentação",meal:"Refeição",both:"Ambos"})[e]??e??"—";function qj(){const e=Jn(),{hasRole:t}=Ar(),[n,r]=D.useState([]),[o,i]=D.useState({total:0,totalPages:1,currentPage:1}),[s,a]=D.useState(!0),[c,f]=D.useState(""),[u,d]=D.useState(1),[p,m]=D.useState(""),[h,b]=D.useState(""),k=D.useRef(null),y=D.useCallback(async()=>{var C,_,T;a(!0);try{const v=new URLSearchParams({page:u,limit:Uj});h&&v.set("search",h),c&&v.set("overall_status",c);const{data:S}=await qe.get(`/clients?${v.toString()}`);r(S.data??[]),i({total:((C=S.pagination)==null?void 0:C.total)??0,totalPages:((_=S.pagination)==null?void 0:_.totalPages)??1,currentPage:((T=S.pagination)==null?void 0:T.currentPage)??1})}catch(v){ae.error(Zt(v,"Erro ao carregar clientes.")),r([])}finally{a(!1)}},[u,h,c]);D.useEffect(()=>{y()},[y]);const g=C=>{const _=C.target.value,T=_.replace(/\D/g,"");if(Vj(_)){const v=Ym(T);m(v),x(v)}else _===""?(m(""),x("")):(m(_),x(_))},x=C=>{k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{b(C),d(1)},400)},w=C=>{f(C.target.value),d(1)};return l.jsxs(l.Fragment,{children:[l.jsxs(hj,{children:[l.jsxs(mj,{children:[l.jsx(gj,{children:"Clientes"}),l.jsx(yj,{children:o.total>0?`${o.total} cliente${o.total!==1?"s":""} cadastrado${o.total!==1?"s":""}`:"Nenhum cliente cadastrado ainda"})]}),t("admin","user")&&l.jsxs(xj,{type:"button",onClick:()=>e("/onboarding"),children:[l.jsx(dp,{size:16}),"Novo Cliente"]})]}),l.jsxs(vj,{children:[l.jsxs(bj,{children:[l.jsxs(wj,{children:[" ",l.jsx($x,{size:15})]}),l.jsx($j,{type:"text",placeholder:"Buscar por Razão Social ou CNPJ…",style:{paddingLeft:"30px"},value:p,onChange:g})]}),l.jsxs(kj,{value:c,onChange:w,children:[l.jsx("option",{value:"",children:"Todos os status"}),l.jsx("option",{value:"pending",children:"Pendente"}),l.jsx("option",{value:"analysis",children:"Em análise"}),l.jsx("option",{value:"approved",children:"Aprovado"})]})]}),l.jsxs(Sj,{children:[l.jsxs(_j,{children:[l.jsx(jj,{children:l.jsxs("tr",{children:[l.jsx(Ai,{children:"Razão Social"}),l.jsx(Ai,{children:"CNPJ"}),l.jsx(Ai,{children:"Benefício"}),l.jsx(Ai,{children:"Status"}),l.jsx(Ai,{children:"Cadastro"})]})}),l.jsxs(Ej,{children:[s&&l.jsx(Bj,{}),!s&&n.map(C=>l.jsxs(Cj,{onClick:()=>e(`/clientes/${C.id}`),title:"Ver detalhes",children:[l.jsx(qd,{children:C.corporate_name}),l.jsx(xu,{children:Ym(C.cnpj)??"—"}),l.jsx(xu,{children:Wj(C.benefit_type)}),l.jsx(qd,{children:l.jsx(Mj,{status:C.overall_status})}),l.jsx(xu,{children:Hj(C.createdAt)})]},C.id)),!s&&n.length===0&&l.jsx("tr",{children:l.jsx("td",{colSpan:5,children:l.jsxs(Pj,{children:[l.jsx(Aj,{children:l.jsx(fp,{size:40})}),l.jsx(Rj,{children:"Nenhum cliente encontrado"}),l.jsx(zj,{children:p||c?"Tente ajustar os filtros para ver mais resultados.":'Clique em "Novo Cliente" para iniciar o cadastro.'})]})})})]})]}),!s&&o.totalPages>1&&l.jsxs(Ij,{children:[l.jsxs(Lj,{children:["Página ",o.currentPage," de ",o.totalPages," ","· ",o.total," registros"]}),l.jsxs(Dj,{children:[l.jsx(ya,{type:"button",onClick:()=>d(C=>Math.max(1,C-1)),disabled:u<=1,"aria-label":"Página anterior",children:l.jsx(gx,{size:15})}),Array.from({length:o.totalPages},(C,_)=>_+1).filter(C=>C===1||C===o.totalPages||Math.abs(C-u)<=2).reduce((C,_,T,v)=>(T>0&&_-v[T-1]>1&&C.push("…"),C.push(_),C),[]).map((C,_)=>C==="…"?l.jsx(ya,{disabled:!0,as:"span",children:"…"},`ellipsis-${_}`):l.jsx(ya,{type:"button",$active:C===u,onClick:()=>d(C),children:C},C)),l.jsx(ya,{type:"button",onClick:()=>d(C=>Math.min(o.totalPages,C+1)),disabled:u>=o.totalPages,"aria-label":"Próxima página",children:l.jsx(yx,{size:15})})]})]})]})]})}const Gj=dt`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Qj=dt`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,zx=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  animation: ${Gj} 0.35s ease both;
`,Ox=E.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,Nx=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,Kj=E.button`
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
`,Ix=E.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Yj=E.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,Xj=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  letter-spacing: 0.04em;
`,Jj=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`,Lr=E.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,xo=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,vo=E.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,bo=E.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,Lx=E.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Gi=E.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,at=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`,pt=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,mt=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,Zj=E(mt)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,Xm={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},Jm={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},Zm=E.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=Xm[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=Xm[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`,eE=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,tE=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`,nE=E.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,rE=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,oE=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;const iE=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,sE=E.div`
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
`,aE=E.span`
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
`,lE=E.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,cE=E.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,uE=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,dE=E.button`
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
`,fE=E.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,vu=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,bu=E.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,wo=E.div`
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
  animation: ${Qj} 1.4s ease infinite;
`,pE=E(Lr)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,hE=E.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[4]} 0;
`,mE=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length!==14?e:t.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5")},gE=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length===11?t.replace(/^(\d{2})(\d{5})(\d{4})$/,"($1) $2-$3"):t.length===10?t.replace(/^(\d{2})(\d{4})(\d{4})$/,"($1) $2-$3"):e},eg=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",yE=e=>e==null?"—":Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),xE={food:"Vale Alimentação",meal:"Vale Refeição",both:"Alimentação + Refeição"},vE={company_document:"Documento da Empresa",proof_of_address:"Comprovante de Endereço",bank_account_proof:"Comprovante Bancário",card_machine_proof:"Comprovante de Maquininha"};function bE(){return l.jsxs(zx,{children:[l.jsx(Ox,{children:l.jsxs(Nx,{children:[l.jsx(wo,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),l.jsxs(Ix,{children:[l.jsx(wo,{$w:"220px",$h:"28px"}),l.jsx(wo,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]})}),l.jsx(Lx,{children:l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:l.jsxs(pE,{children:[l.jsx(wo,{$w:"40%",$h:"18px"}),l.jsx(hE,{}),l.jsx(Gi,{children:Array.from({length:6}).map((e,t)=>l.jsxs(at,{children:[l.jsx(wo,{$w:"50%",$h:"11px"}),l.jsx(wo,{$w:"80%",$h:"16px",style:{marginTop:"4px"}})]},t))})]})})})]})}const wE=[{value:"pending",label:"Pendente"},{value:"analysis",label:"Em análise"},{value:"approved",label:"Aprovado"}],tg={approved:{bg:"#d1fae5",color:"#065f46"},analysis:{bg:"#dbeafe",color:"#1e40af"},pending:{bg:"#fef3c7",color:"#92400e"}};function $E({clientFlagId:e,currentStatus:t,onUpdated:n,onOptimisticUpdate:r}){const[o,i]=D.useState(!1),[s,a]=D.useState(t),c=tg[s]??tg.pending;D.useEffect(()=>{a(t)},[t]);const f=async u=>{const d=u.target.value,p=s;if(d!==p){a(d),r(e,d),i(!0);try{await qe.patch(`/client-flags/${e}/status`,{status:d}),ae.success("Status da bandeira atualizado."),n()}catch(m){a(p),r(e,p),ae.error(Zt(m,"Erro ao atualizar status."))}finally{i(!1)}}};return l.jsx("select",{value:s,onChange:f,disabled:o,style:{height:"28px",padding:"0 28px 0 8px",border:"1.5px solid #e4d9cf",borderRadius:"99px",fontFamily:"inherit",fontSize:"11px",fontWeight:600,backgroundColor:c.bg,color:c.color,cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 8px center"},children:wE.map(u=>l.jsx("option",{value:u.value,children:u.label},u.value))})}function kE(){var H,te;const{id:e}=o1(),t=Jn(),{isAdmin:n,isPartner:r,isUser:o,user:i}=Ar(),[s,a]=D.useState(null),[c,f]=D.useState(!0),[u,d]=D.useState(null),p=D.useCallback(async()=>{try{const{data:ee}=await qe.get(`/clients/${e}`);a(ee.data)}catch(ee){ae.error(Zt(ee,"Erro ao carregar dados.")),t("/clientes",{replace:!0})}finally{f(!1)}},[e,t]);D.useEffect(()=>{p()},[p]);const m=D.useCallback((ee,ie)=>{a(le=>le&&{...le,clientFlags:le.clientFlags.map(de=>de.id===ee?{...de,status:ie}:de)})},[]),h=D.useCallback(async()=>{try{const{data:ee}=await qe.get(`/clients/${e}`);a(ee.data)}catch{}},[e]),b=async ee=>{d(ee.id);try{const ie=await qe.get(`/documents/${ee.id}/download`,{responseType:"blob"}),le=URL.createObjectURL(ie.data),de=document.createElement("a");de.href=le,de.download=ee.original_name??`documento-${ee.id}`,document.body.appendChild(de),de.click(),de.remove(),URL.revokeObjectURL(le)}catch(ie){ae.error(Zt(ie,"Erro no download."))}finally{d(null)}};if(c)return l.jsx(bE,{});if(!s)return null;const{corporate_name:k,trade_name:y,cnpj:g,state_registration:x,phone:w,email:C,protocol:_,benefit_type:T,overall_status:v,notes:S,createdAt:P,address_street:F,address_number:A,address_complement:N,address_neighborhood:R,address_city:U,address_state:j,address_zip:$,clientFlags:I=[],documents:z=[],bankAccounts:L=[]}=s,Q=!r&&(n||o&&s.created_by===(i==null?void 0:i.id)),V=!r&&(n||o&&s.created_by===(i==null?void 0:i.id)),K=F||U,G=[F,A,N].filter(Boolean).join(", "),M=[R,U,j].filter(Boolean).join(" — ");return l.jsxs(zx,{children:[l.jsxs(Ox,{children:[l.jsxs(Nx,{children:[l.jsxs(Kj,{onClick:()=>t("/clientes"),title:"Voltar",children:[l.jsx(ap,{size:18})," Voltar"]}),l.jsxs(Ix,{children:[l.jsx(Yj,{children:y||k}),l.jsxs(Xj,{children:["Protocolo #",_]})]})]}),l.jsxs(Jj,{children:[Q&&l.jsxs("button",{onClick:()=>t(`/clientes/${e}/editar`),style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 14px",border:"1.5px solid #e4d9cf",borderRadius:"8px",background:"transparent",fontSize:"13px",fontWeight:500,color:"#7a6455",cursor:"pointer"},children:[l.jsx(g_,{size:14})," Editar"]}),l.jsx(Zm,{$status:v,children:Jm[v]??v})]})]}),l.jsxs(Lx,{children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l.jsxs(Lr,{children:[l.jsxs(xo,{children:[l.jsx(vo,{children:l.jsx(lp,{size:18})}),l.jsx(bo,{children:"Dados da Empresa"})]}),l.jsxs(Gi,{children:[l.jsxs(at,{children:[l.jsx(pt,{children:"Razão Social"}),l.jsx(mt,{children:k||"—"})]}),!r&&l.jsxs(at,{children:[l.jsx(pt,{children:"Nome Fantasia"}),l.jsx(mt,{children:y||"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"CNPJ"}),l.jsx(mt,{children:mE(g)})]}),!r&&l.jsxs(at,{children:[l.jsx(pt,{children:"Inscrição Estadual"}),l.jsx(mt,{children:x||"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Telefone"}),l.jsx(mt,{children:gE(w)})]}),!r&&l.jsxs(at,{children:[l.jsx(pt,{children:"E-mail"}),l.jsx(mt,{children:C||"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Tipo de Benefício"}),l.jsx(mt,{children:xE[T]??T??"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Cadastrado em"}),l.jsx(mt,{children:eg(P)})]}),!r&&S&&l.jsxs(at,{$span:!0,children:[l.jsx(pt,{children:"Observações Internas"}),l.jsx(Zj,{children:S})]})]})]}),l.jsxs(Lr,{children:[l.jsxs(xo,{children:[l.jsx(vo,{children:l.jsx(up,{size:18})}),l.jsx(bo,{children:"Endereço"})]}),K?l.jsxs(Gi,{$cols:2,children:[l.jsxs(at,{$span:!0,children:[l.jsx(pt,{children:"Logradouro"}),l.jsx(mt,{children:G||"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Bairro / Cidade / UF"}),l.jsx(mt,{children:M||"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"CEP"}),l.jsx(mt,{children:$||"—"})]})]}):l.jsx(vu,{children:l.jsx(bu,{children:"Endereço não informado."})})]}),!r&&l.jsxs(Lr,{children:[l.jsxs(xo,{children:[l.jsx(vo,{children:l.jsx(Ol,{size:18})}),l.jsx(bo,{children:"Documentos"})]}),z.length>0?l.jsx(iE,{children:z.map(ee=>l.jsxs(sE,{children:[l.jsx(lE,{children:l.jsx(Ol,{size:16})}),l.jsxs(cE,{style:{flex:1,minWidth:0},children:[l.jsx(aE,{title:ee.original_name||"Documento",children:ee.original_name||"Documento"}),l.jsx(uE,{children:vE[ee.document_type]??ee.document_type})]}),l.jsx(dE,{onClick:()=>b(ee),disabled:u===ee.id,children:u===ee.id?l.jsx(f_,{size:14,className:"animate-spin"}):l.jsx(l_,{size:14})})]},ee.id))}):l.jsx(vu,{children:l.jsx(bu,{children:"Sem documentos."})})]})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l.jsxs(Lr,{children:[l.jsxs(xo,{children:[l.jsx(vo,{children:l.jsx(bx,{size:18})}),l.jsx(bo,{children:"Bandeiras"})]}),l.jsx(eE,{children:I.map(ee=>{var ie;return l.jsxs(tE,{children:[l.jsxs(nE,{children:[l.jsx(rE,{children:((ie=ee.flag)==null?void 0:ie.name)||"Bandeira"}),l.jsx(oE,{children:ee.origin})]}),V?l.jsx($E,{clientFlagId:ee.id,currentStatus:ee.status,onUpdated:h,onOptimisticUpdate:m}):l.jsx(Zm,{$status:ee.status,style:{fontSize:"10px",padding:"2px 8px"},children:Jm[ee.status]??ee.status})]},ee.id)})})]}),!r&&l.jsxs(Lr,{children:[l.jsxs(xo,{children:[l.jsx(vo,{children:l.jsx(cp,{size:18})}),l.jsx(bo,{children:"Dados Bancários"})]}),L.length>0?L.map(ee=>l.jsx(fE,{children:l.jsxs(Gi,{$cols:1,children:[l.jsxs(at,{children:[l.jsx(pt,{children:"Banco"}),l.jsx(mt,{children:ee.bank_name})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Agência/Conta"}),l.jsxs(mt,{children:[ee.agency,ee.agency_digit?`-${ee.agency_digit}`:""," / ",ee.account,ee.account_digit?`-${ee.account_digit}`:""]})]})]})},ee.id)):l.jsx(vu,{children:l.jsx(bu,{children:"Sem dados bancários."})})]}),s.sales&&s.sales.length>0&&l.jsxs(Lr,{children:[l.jsxs(xo,{children:[l.jsx(vo,{children:l.jsx(a_,{size:18})}),l.jsx(bo,{children:"Plano Contratado"})]}),l.jsxs(Gi,{$cols:1,children:[l.jsxs(at,{children:[l.jsx(pt,{children:"Nome do Plano"}),l.jsx(mt,{children:((H=s.sales[0])==null?void 0:H.plan_name)||"—"})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Valor"}),l.jsx(mt,{children:yE((te=s.sales[0])==null?void 0:te.total_value)})]}),l.jsxs(at,{children:[l.jsx(pt,{children:"Data da Venda"}),l.jsx(mt,{children:eg(s.sales[0].createdAt)})]})]})]})]})]}),l.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } } .animate-spin { animation: spin 1s linear infinite; }"})]})}const ng=(e,t,n)=>{if(e&&"reportValidity"in e){const r=re(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},Dx=(e,t)=>{for(const n in t.fields){const r=t.fields[n];r&&r.ref&&"reportValidity"in r.ref?ng(r.ref,n,e):r&&r.refs&&r.refs.forEach(o=>ng(o,n,e))}},SE=(e,t)=>{t.shouldUseNativeValidation&&Dx(e,t);const n={};for(const r in e){const o=re(t.fields,r),i=Object.assign(e[r]||{},{ref:o&&o.ref});if(_E(t.names||Object.keys(e),r)){const s=Object.assign({},re(n,r));Ee(s,"root",i),Ee(n,r,s)}else Ee(n,r,i)}return n},_E=(e,t)=>{const n=rg(t);return e.some(r=>rg(r).match(`^${n}\\.\\d+`))};function rg(e){return e.replace(/\]|\[/g,"")}function Ux(e,t,n){return n===void 0&&(n={}),function(r,o,i){try{return Promise.resolve(function(s,a){try{var c=(t!=null&&t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:o}))).then(function(f){return i.shouldUseNativeValidation&&Dx({},i),{values:n.raw?Object.assign({},r):f,errors:{}}}))}catch(f){return a(f)}return c&&c.then?c.then(void 0,a):c}(0,function(s){if(!s.inner)throw s;return{values:{},errors:SE((a=s,c=!i.shouldUseNativeValidation&&i.criteriaMode==="all",(a.inner||[]).reduce(function(f,u){if(f[u.path]||(f[u.path]={message:u.message,type:u.type}),c){var d=f[u.path].types,p=d&&d[u.type];f[u.path]=Ex(u.path,c,f,u.type,p?[].concat(p,u.message):u.message)}return f},{})),i)};var a,c}))}catch(s){return Promise.reject(s)}}}function gi(e){this._maxSize=e,this.clear()}gi.prototype.clear=function(){this._size=0,this._values=Object.create(null)};gi.prototype.get=function(e){return this._values[e]};gi.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var jE=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Mx=/^\d+$/,EE=/^\d/,CE=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,FE=/^\s*(['"]?)(.*?)(\1)\s*$/,vp=512,og=new gi(vp);new gi(vp);var ig=new gi(vp),Zr={split:Gd,normalizePath:sg,getter:function(e,t){var n=sg(e);return ig.get(e)||ig.set(e,function(o){for(var i=0,s=n.length;i<s;)if(o!=null||!t)o=o[n[i++]];else return;return o})},join:function(e){return e.reduce(function(t,n){return t+(bp(n)||Mx.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){TE(Array.isArray(e)?e:Gd(e),t,n)}};function sg(e){return og.get(e)||og.set(e,Gd(e).map(function(t){return t.replace(FE,"$2")}))}function Gd(e){return e.match(jE)||[""]}function TE(e,t,n){var r=e.length,o,i,s,a;for(i=0;i<r;i++)o=e[i],o&&(RE(o)&&(o='"'+o+'"'),a=bp(o),s=!a&&/^\d+$/.test(o),t.call(n,o,a,s,i,e))}function bp(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function PE(e){return e.match(EE)&&!e.match(Mx)}function AE(e){return CE.test(e)}function RE(e){return!bp(e)&&(PE(e)||AE(e))}const zE=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Bx=e=>e.match(zE)||[],OE=(e,t)=>Bx(e).join(t).toLowerCase(),NE=e=>Bx(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),IE=e=>OE(e,"_");var wu={camelCase:NE,snakeCase:IE},wp={exports:{}};wp.exports=function(e){return Vx(LE(e),e)};wp.exports.array=Vx;function Vx(e,t){var n=e.length,r=new Array(n),o={},i=n,s=DE(t),a=UE(e);for(t.forEach(function(f){if(!a.has(f[0])||!a.has(f[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)o[i]||c(e[i],i,new Set);return r;function c(f,u,d){if(d.has(f)){var p;try{p=", node was:"+JSON.stringify(f)}catch{p=""}throw new Error("Cyclic dependency"+p)}if(!a.has(f))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(f));if(!o[u]){o[u]=!0;var m=s.get(f)||new Set;if(m=Array.from(m),u=m.length){d.add(f);do{var h=m[--u];c(h,a.get(h),d)}while(u);d.delete(f)}r[--n]=f}}}function LE(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var o=e[n];t.add(o[0]),t.add(o[1])}return Array.from(t)}function DE(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var o=e[n];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}function UE(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var ME=wp.exports;const BE=Ig(ME),VE=Object.prototype.toString,HE=Error.prototype.toString,WE=RegExp.prototype.toString,qE=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",GE=/^Symbol\((.*)\)(.*)$/;function QE(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function ag(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return QE(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return qE.call(e).replace(GE,"Symbol($1)");const r=VE.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+HE.call(e)+"]":r==="RegExp"?WE.call(e):null}function Sr(e,t){let n=ag(e,t);return n!==null?n:JSON.stringify(e,function(r,o){let i=ag(this[r],t);return i!==null?i:o},2)}function Hx(e){return e==null?[]:[].concat(e)}let Wx,qx,Gx,KE=/\$\{\s*(\w+)\s*\}/g;Wx=Symbol.toStringTag;class lg{constructor(t,n,r,o){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[Wx]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=o,this.errors=[],this.inner=[],Hx(t).forEach(i=>{if(Ft.isError(i)){this.errors.push(...i.errors);const s=i.inner.length?i.inner:[i];this.inner.push(...s)}else this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}qx=Symbol.hasInstance;Gx=Symbol.toStringTag;class Ft extends Error{static formatError(t,n){const r=n.label||n.path||"this";return n=Object.assign({},n,{path:r,originalPath:n.path}),typeof t=="string"?t.replace(KE,(o,i)=>Sr(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,o,i){const s=new lg(t,n,r,o);if(i)return s;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[Gx]="Error",this.name=s.name,this.message=s.message,this.type=s.type,this.value=s.value,this.path=s.path,this.errors=s.errors,this.inner=s.inner,Error.captureStackTrace&&Error.captureStackTrace(this,Ft)}static[qx](t){return lg[Symbol.hasInstance](t)||super[Symbol.hasInstance](t)}}let Tn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const o=r!=null&&r!==n?` (cast from the value \`${Sr(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Sr(n,!0)}\``+o:`${e} must match the configured type. The validated value was: \`${Sr(n,!0)}\``+o}},Ot={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},YE={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Qd={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},XE={isValue:"${path} field must be ${value}"},Xa={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},JE={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},ZE={notType:e=>{const{path:t,value:n,spec:r}=e,o=r.types.length;if(Array.isArray(n)){if(n.length<o)return`${t} tuple value has too few items, expected a length of ${o} but got ${n.length} for value: \`${Sr(n,!0)}\``;if(n.length>o)return`${t} tuple value has too many items, expected a length of ${o} but got ${n.length} for value: \`${Sr(n,!0)}\``}return Ft.formatError(Tn.notType,e)}};Object.assign(Object.create(null),{mixed:Tn,string:Ot,number:YE,date:Qd,object:Xa,array:JE,boolean:XE,tuple:ZE});const $p=e=>e&&e.__isYupSchema__;class Ll{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:o,otherwise:i}=n,s=typeof r=="function"?r:(...a)=>a.every(c=>c===r);return new Ll(t,(a,c)=>{var f;let u=s(...a)?o:i;return(f=u==null?void 0:u(c))!=null?f:c})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),o=this.fn(r,t,n);if(o===void 0||o===t)return t;if(!$p(o))throw new TypeError("conditions must return a schema object");return o.resolve(n)}}const xa={context:"$",value:"."};class po{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===xa.context,this.isValue=this.key[0]===xa.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?xa.context:this.isValue?xa.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Zr.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let o=this.isContext?r:this.isValue?t:n;return this.getter&&(o=this.getter(o||{})),this.map&&(o=this.map(o)),o}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}po.prototype.__isYupRef=!0;const Gr=e=>e==null;function $o(e){function t({value:n,path:r="",options:o,originalValue:i,schema:s},a,c){const{name:f,test:u,params:d,message:p,skipAbsent:m}=e;let{parent:h,context:b,abortEarly:k=s.spec.abortEarly,disableStackTrace:y=s.spec.disableStackTrace}=o;const g={value:n,parent:h,context:b};function x(F={}){const A=Qx(Object.assign({value:n,originalValue:i,label:s.spec.label,path:F.path||r,spec:s.spec,disableStackTrace:F.disableStackTrace||y},d,F.params),g),N=new Ft(Ft.formatError(F.message||p,A),n,A.path,F.type||f,A.disableStackTrace);return N.params=A,N}const w=k?a:c;let C={path:r,parent:h,type:f,from:o.from,createError:x,resolve(F){return Kx(F,g)},options:o,originalValue:i,schema:s};const _=F=>{Ft.isError(F)?w(F):F?c(null):w(x())},T=F=>{Ft.isError(F)?w(F):a(F)};if(m&&Gr(n))return _(!0);let S;try{var P;if(S=u.call(C,n,C),typeof((P=S)==null?void 0:P.then)=="function"){if(o.sync)throw new Error(`Validation test of type: "${C.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(S).then(_,T)}}catch(F){T(F);return}_(S)}return t.OPTIONS=e,t}function Qx(e,t){if(!e)return e;for(const n of Object.keys(e))e[n]=Kx(e[n],t);return e}function Kx(e,t){return po.isRef(e)?e.getValue(t.value,t.parent,t.context):e}function e4(e,t,n,r=n){let o,i,s;return t?(Zr.forEach(t,(a,c,f)=>{let u=c?a.slice(1,a.length-1):a;e=e.resolve({context:r,parent:o,value:n});let d=e.type==="tuple",p=f?parseInt(u,10):0;if(e.innerType||d){if(d&&!f)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(n&&p>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);o=n,n=n&&n[p],e=d?e.spec.types[p]:e.innerType}if(!f){if(!e.fields||!e.fields[u])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);o=n,n=n&&n[u],e=e.fields[u]}i=u,s=c?"["+a+"]":"."+a}),{schema:e,parent:o,parentPath:i}):{parent:o,parentPath:t,schema:e}}class Dl extends Set{describe(){const t=[];for(const n of this.values())t.push(po.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Dl(this.values())}merge(t,n){const r=this.clone();return t.forEach(o=>r.add(o)),n.forEach(o=>r.delete(o)),r}}function Bo(e,t=new Map){if($p(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=Bo(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,o]of e.entries())n.set(r,Bo(o,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(Bo(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,o]of Object.entries(e))n[r]=Bo(o,t)}else throw Error(`Unable to clone ${e}`);return n}function t4(e){if(!(e!=null&&e.length))return;const t=[];let n="",r=!1,o=!1;for(let i=0;i<e.length;i++){const s=e[i];if(s==="["&&!o){n&&(t.push(...n.split(".").filter(Boolean)),n=""),r=!0;continue}if(s==="]"&&!o){n&&(/^\d+$/.test(n)?t.push(n):t.push(n.replace(/^"|"$/g,"")),n=""),r=!1;continue}if(s==='"'){o=!o;continue}if(s==="."&&!r&&!o){n&&(t.push(n),n="");continue}n+=s}return n&&t.push(...n.split(".").filter(Boolean)),t}function n4(e,t){const n=t?`${t}.${e.path}`:e.path;return e.errors.map(r=>({message:r,path:t4(n)}))}function Yx(e,t){var n;if(!((n=e.inner)!=null&&n.length)&&e.errors.length)return n4(e,t);const r=t?`${t}.${e.path}`:e.path;return e.inner.flatMap(o=>Yx(o,r))}class On{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Dl,this._blacklist=new Dl,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Tn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Bo(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const o=Object.assign({},n.spec,r.spec);return r.spec=o,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(s=>{i.test(s.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((o,i)=>i.resolve(o,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,o,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(o=t.recursive)!=null?o:this.spec.recursive,disableStackTrace:(i=t.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({},n,{value:t})),o=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(o&&Gr(i))return i;let s=Sr(t),a=Sr(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${s} 
`+(a!==s?`result of cast: ${a}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((o,i)=>i.call(this,o,t,this,n),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,o){let{path:i,originalValue:s=t,strict:a=this.spec.strict}=n,c=t;a||(c=this._cast(c,Object.assign({assert:!1},n)));let f=[];for(let u of Object.values(this.internalTests))u&&f.push(u);this.runTests({path:i,value:c,originalValue:s,options:n,tests:f},r,u=>{if(u.length)return o(u,c);this.runTests({path:i,value:c,originalValue:s,options:n,tests:this.tests},r,o)})}runTests(t,n,r){let o=!1,{tests:i,value:s,originalValue:a,path:c,options:f}=t,u=b=>{o||(o=!0,n(b,s))},d=b=>{o||(o=!0,r(b,s))},p=i.length,m=[];if(!p)return d([]);let h={value:s,originalValue:a,path:c,options:f,schema:this};for(let b=0;b<i.length;b++){const k=i[b];k(h,u,function(g){g&&(Array.isArray(g)?m.push(...g):m.push(g)),--p<=0&&d(m)})}}asNestedTest({key:t,index:n,parent:r,parentPath:o,originalParent:i,options:s}){const a=t??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const c=typeof a=="number";let f=r[a];const u=Object.assign({},s,{strict:!0,parent:r,value:f,originalValue:i[a],key:void 0,[c?"index":"key"]:a,path:c||a.includes(".")?`${o||""}[${c?a:`"${a}"`}]`:(o?`${o}.`:"")+t});return(d,p,m)=>this.resolve(u)._validate(f,u,p,m)}validate(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return new Promise((s,a)=>o._validate(t,n,(c,f)=>{Ft.isError(c)&&(c.value=f),a(c)},(c,f)=>{c.length?a(new Ft(c,f,void 0,void 0,i)):s(f)}))}validateSync(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i,s=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return o._validate(t,Object.assign({},n,{sync:!0}),(a,c)=>{throw Ft.isError(a)&&(a.value=c),a},(a,c)=>{if(a.length)throw new Ft(a,t,void 0,void 0,s);i=c}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Ft.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Ft.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):Bo(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=$o({message:n,name:"nullable",test(o){return o===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=$o({message:n,name:"optionality",test(o){return o===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=Tn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Tn.notNull){return this.nullability(!1,t)}required(t=Tn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Tn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),o=$o(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(s=>!(s.OPTIONS.name===n.name&&(i||s.OPTIONS.test===o.OPTIONS.test))),r.tests.push(o),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),o=Hx(t).map(i=>new po(i));return o.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new Ll(o,n):Ll.fromOptions(o,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=$o({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Tn.oneOf){let r=this.clone();return t.forEach(o=>{r._whitelist.add(o),r._blacklist.delete(o)}),r.internalTests.whiteList=$o({message:n,name:"oneOf",skipAbsent:!0,test(o){let i=this.schema._whitelist,s=i.resolveAll(this.resolve);return s.includes(o)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:s}})}}),r}notOneOf(t,n=Tn.notOneOf){let r=this.clone();return t.forEach(o=>{r._blacklist.add(o),r._whitelist.delete(o)}),r.internalTests.blacklist=$o({message:n,name:"notOneOf",test(o){let i=this.schema._blacklist,s=i.resolveAll(this.resolve);return s.includes(o)?this.createError({params:{values:Array.from(i).join(", "),resolved:s}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:o,optional:i,nullable:s}=n.spec;return{meta:o,label:r,optional:i,nullable:s,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.filter((c,f,u)=>u.findIndex(d=>d.OPTIONS.name===c.OPTIONS.name)===f).map(c=>{const f=c.OPTIONS.params&&t?Qx(Object.assign({},c.OPTIONS.params),t):c.OPTIONS.params;return{name:c.OPTIONS.name,params:f}})}}get"~standard"(){const t=this;return{version:1,vendor:"yup",async validate(r){try{return{value:await t.validate(r,{abortEarly:!1})}}catch(o){if(o instanceof Ft)return{issues:Yx(o)};throw o}}}}}On.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])On.prototype[`${e}At`]=function(t,n,r={}){const{parent:o,parentPath:i,schema:s}=e4(this,t,n,r.context);return s[e](o&&o[i],Object.assign({},r,{parent:o,path:t}))};for(const e of["equals","is"])On.prototype[e]=On.prototype.oneOf;for(const e of["not","nope"])On.prototype[e]=On.prototype.notOneOf;const r4=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function o4(e){const t=Kd(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;if(t.z===void 0&&t.plusMinus===void 0)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return t.z!=="Z"&&t.plusMinus!==void 0&&(n=t.hourOffset*60+t.minuteOffset,t.plusMinus==="+"&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}function Kd(e){var t,n;const r=r4.exec(e);return r?{year:Ln(r[1]),month:Ln(r[2],1)-1,day:Ln(r[3],1),hour:Ln(r[4]),minute:Ln(r[5]),second:Ln(r[6]),millisecond:r[7]?Ln(r[7].substring(0,3)):0,precision:(t=(n=r[7])==null?void 0:n.length)!=null?t:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:Ln(r[10]),minuteOffset:Ln(r[11])}:null}function Ln(e,t=0){return Number(e)||t}let i4=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,s4=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,a4=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,l4="^\\d{4}-\\d{2}-\\d{2}",c4="\\d{2}:\\d{2}:\\d{2}",u4="(([+-]\\d{2}(:?\\d{2})?)|Z)",d4=new RegExp(`${l4}T${c4}(\\.\\d+)?${u4}$`),f4=e=>Gr(e)||e===e.trim(),p4={}.toString();function pe(){return new Xx}class Xx extends On{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n)=>{if(!this.spec.coerce||this.isType(t)||Array.isArray(t))return t;const r=t!=null&&t.toString?t.toString():t;return r===p4?t:r})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||Tn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=Ot.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=Ot.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=Ot.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,o,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:o,name:i}=n:o=n),this.test({name:i||"matches",message:o||Ot.matches,params:{regex:t},skipAbsent:!0,test:s=>s===""&&r||s.search(t)!==-1})}email(t=Ot.email){return this.matches(i4,{name:"email",message:t,excludeEmptyString:!0})}url(t=Ot.url){return this.matches(s4,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Ot.uuid){return this.matches(a4,{name:"uuid",message:t,excludeEmptyString:!1})}datetime(t){let n="",r,o;return t&&(typeof t=="object"?{message:n="",allowOffset:r=!1,precision:o=void 0}=t:n=t),this.matches(d4,{name:"datetime",message:n||Ot.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||Ot.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:i=>{if(!i||r)return!0;const s=Kd(i);return s?!!s.z:!1}}).test({name:"datetime_precision",message:n||Ot.datetime_precision,params:{precision:o},skipAbsent:!0,test:i=>{if(!i||o==null)return!0;const s=Kd(i);return s?s.precision===o:!1}})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Ot.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:f4})}lowercase(t=Ot.lowercase){return this.transform(n=>Gr(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Gr(n)||n===n.toLowerCase()})}uppercase(t=Ot.uppercase){return this.transform(n=>Gr(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Gr(n)||n===n.toUpperCase()})}}pe.prototype=Xx.prototype;let h4=new Date(""),m4=e=>Object.prototype.toString.call(e)==="[object Date]";class kp extends On{constructor(){super({type:"date",check(t){return m4(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n)=>!this.spec.coerce||this.isType(t)||t===null?t:(t=o4(t),isNaN(t)?kp.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(po.isRef(t))r=t;else{let o=this.cast(t);if(!this._typeCheck(o))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=o}return r}min(t,n=Qd.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o>=this.resolve(r)}})}max(t,n=Qd.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(o){return o<=this.resolve(r)}})}}kp.INVALID_DATE=h4;function g4(e,t=[]){let n=[],r=new Set,o=new Set(t.map(([s,a])=>`${s}-${a}`));function i(s,a){let c=Zr.split(s)[0];r.add(c),o.has(`${a}-${c}`)||n.push([a,c])}for(const s of Object.keys(e)){let a=e[s];r.add(s),po.isRef(a)&&a.isSibling?i(a.path,s):$p(a)&&"deps"in a&&a.deps.forEach(c=>i(c,s))}return BE.array(Array.from(r),n).reverse()}function cg(e,t){let n=1/0;return e.some((r,o)=>{var i;if((i=t.path)!=null&&i.includes(r))return n=o,!0}),n}function Jx(e){return(t,n)=>cg(e,t)-cg(e,n)}const y4=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function Ja(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Ja(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Ja(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Ja)}):"optional"in e?e.optional():e}const x4=(e,t)=>{const n=[...Zr.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),o=Zr.getter(Zr.join(n),!0)(e);return!!(o&&r in o)};let ug=e=>Object.prototype.toString.call(e)==="[object Object]";function dg(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const v4=Jx([]);function Sp(e){return new Zx(e)}class Zx extends On{constructor(t){super({type:"object",check(n){return ug(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=v4,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let o=super._cast(t,n);if(o===void 0)return this.getDefault(n);if(!this._typeCheck(o))return o;let i=this.fields,s=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(o).filter(d=>!this._nodes.includes(d))),c={},f=Object.assign({},n,{parent:c,__validating:n.__validating||!1}),u=!1;for(const d of a){let p=i[d],m=d in o,h=o[d];if(p){let b;f.path=(n.path?`${n.path}.`:"")+d,p=p.resolve({value:h,context:n.context,parent:c});let k=p instanceof On?p.spec:void 0,y=k==null?void 0:k.strict;if(k!=null&&k.strip){u=u||d in o;continue}b=!n.__validating||!y?p.cast(h,f):h,b!==void 0&&(c[d]=b)}else m&&!s&&(c[d]=h);(m!==d in c||c[d]!==h)&&(u=!0)}return u?c:o}_validate(t,n={},r,o){let{from:i=[],originalValue:s=t,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:s},...i],n.__validating=!0,n.originalValue=s,super._validate(t,n,r,(c,f)=>{if(!a||!ug(f)){o(c,f);return}s=s||f;let u=[];for(let d of this._nodes){let p=this.fields[d];!p||po.isRef(p)||u.push(p.asNestedTest({options:n,key:d,parent:f,parentPath:n.path,originalParent:s}))}this.runTests({tests:u,value:f,originalValue:s,options:n},r,d=>{o(d.sort(this._sortErrors).concat(c),f)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[o,i]of Object.entries(this.fields)){const s=r[o];r[o]=s===void 0?i:s}return n.withMutation(o=>o.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var o;const i=this.fields[r];let s=t;(o=s)!=null&&o.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[r]})),n[r]=i&&"getDefault"in i?i.getDefault(s):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=g4(t,n),r._sortErrors=Jx(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let o=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),o=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),o)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return Ja(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,o])=>t.includes(r)&&t.includes(o)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let o=Zr.getter(t,!0);return this.transform(i=>{if(!i)return i;let s=i;return x4(i,t)&&(s=Object.assign({},i),r||delete s[t],s[n]=o(i)),s})}json(){return this.transform(y4)}exact(t){return this.test({name:"exact",exclusive:!0,message:t||Xa.exact,test(n){if(n==null)return!0;const r=dg(this.schema,n);return r.length===0||this.createError({params:{properties:r.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(t=!0,n=Xa.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(o){if(o==null)return!0;const i=dg(this.schema,o);return!t||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Xa.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const o of Object.keys(n))r[t(o)]=n[o];return r})}camelCase(){return this.transformKeys(wu.camelCase)}snakeCase(){return this.transformKeys(wu.snakeCase)}constantCase(){return this.transformKeys(t=>wu.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[i,s]of Object.entries(n.fields)){var o;let a=t;(o=a)!=null&&o.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),r.fields[i]=s.describe(a)}return r}}Sp.prototype=Zx.prototype;const b4=dt`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,w4=dt`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,ev=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px; /* espaço para o footer fixo */
  animation: ${b4} 0.3s ease both;
`,tv=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,$4=E.button`
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
`,nv=E.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,k4=E.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,S4=E.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,Qi=E.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,va=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,ba=E.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,wa=E.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,us=E.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,fg=E.div`
  grid-column: 1 / -1;
`,ze=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ve=E.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,$a=E.span`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.neutral[400]};
  flex-shrink: 0;
`,_p=({theme:e,$hasError:t})=>`
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
`,Wt=E.input`
  ${({theme:e,$hasError:t})=>_p({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,ka=E.select`
  ${({theme:e,$hasError:t})=>_p({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,_4=E.textarea`
  ${({theme:e,$hasError:t})=>_p({theme:e,$hasError:t})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,Sa=E.div`
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
`,_a=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[400]};
  font-style: italic;
`,wt=E.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,Ki=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,j4=E.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,E4=E.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,C4=E.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,F4=E.div`
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
`,T4=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,P4=E.label`
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
`,A4=E.div`
  color: ${({theme:e,$hasFile:t})=>t?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,R4=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,z4=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,pg=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,hg=E.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,mg=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,gg=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,O4=E.button`
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
`,N4=E.div`
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
`,I4=E.button`
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
`,L4=E.button`
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
`,D4=E.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,Or=E.div`
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
  animation: ${w4} 1.4s ease infinite;
`,yg=E(Qi)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,xg=E.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`;E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`;E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`;E.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`;E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`;E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`;E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`;E.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;E.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`;E.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;E.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;E.button`
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
`;E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`;E.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`;E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  /* Span full width dentro do grid (ex: campo "notes") */
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`;E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`;const U4=E.span`
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
`;E(U4)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;const vg={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}};E.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=vg[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=vg[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`;const M4=Sp({trade_name:pe().nullable().transform(e=>e||null).max(200,"Nome fantasia deve ter no máximo 200 caracteres."),phone:pe().nullable().transform(e=>e||null).max(20,"Telefone deve ter no máximo 20 caracteres."),benefit_type:pe().required("O tipo de benefício é obrigatório.").oneOf(["food","meal","both"],"Selecione um tipo de benefício válido."),notes:pe().nullable().transform(e=>e||null),partner_id:pe().nullable().transform(e=>e||null),address_street:pe().nullable().transform(e=>e||null).max(255,"Logradouro deve ter no máximo 255 caracteres."),address_number:pe().nullable().transform(e=>e||null).max(10,"Número deve ter no máximo 10 caracteres."),address_complement:pe().nullable().transform(e=>e||null).max(100,"Complemento deve ter no máximo 100 caracteres."),address_neighborhood:pe().nullable().transform(e=>e||null).max(100,"Bairro deve ter no máximo 100 caracteres."),address_city:pe().nullable().transform(e=>e||null).max(100,"Cidade deve ter no máximo 100 caracteres."),address_state:pe().nullable().transform(e=>e||null).max(2,"UF deve ter 2 caracteres."),address_zip:pe().nullable().transform(e=>e||null).test("cep-valido","CEP inválido. Use o formato 00000-000.",e=>e?e.replace(/\D/g,"").length===8:!0),bank_bank_name:pe().nullable().transform(e=>e||null).max(100,"Nome do banco deve ter no máximo 100 caracteres."),bank_agency:pe().max(10,"Agência deve ter no máximo 10 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Agência é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_agency_digit:pe().nullable().transform(e=>e||null).max(2,"Dígito da agência deve ter no máximo 2 caracteres."),bank_account:pe().max(20,"Conta deve ter no máximo 20 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Conta é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_account_digit:pe().nullable().transform(e=>e||null).max(2,"Dígito da conta deve ter no máximo 2 caracteres."),bank_account_type:pe().when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Tipo de conta é obrigatório.").oneOf(["checking","savings"],"Tipo de conta inválido."),otherwise:e=>e.nullable().transform(t=>t||null)})}),B4=[{key:"contrato",fieldName:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB."},{key:"proof_of_address",fieldName:"documentos",type:"proof_of_address",label:"Comprovante de Endereço",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:0},{key:"bank_account_proof",fieldName:"documentos",type:"bank_account_proof",label:"Comprovante Bancário",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:1},{key:"card_machine_proof",fieldName:"documentos",type:"card_machine_proof",label:"Comprovante de Maquininha",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:2}],V4=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],H4=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],W4=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"];let $u=null;const bg=(e="")=>{const t=e.replace(/\D/g,"").slice(0,11);return t.length<=2?`(${t}`:t.length<=6?`(${t.slice(0,2)}) ${t.slice(2)}`:t.length<=10?`(${t.slice(0,2)}) ${t.slice(2,6)}-${t.slice(6)}`:`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7)}`},wg=(e="")=>{const t=e.replace(/\D/g,"").slice(0,8);return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5)}`},q4=(e="")=>e.replace(/\D/g,""),$g=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function G4(){const e=t=>Array.from({length:t}).map((n,r)=>l.jsxs(ze,{children:[l.jsx(Or,{$w:"45%",$h:"11px"}),l.jsx(Or,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},r));return l.jsxs(ev,{children:[l.jsxs(tv,{children:[l.jsx(Or,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),l.jsxs(nv,{children:[l.jsx(Or,{$w:"200px",$h:"28px"}),l.jsx(Or,{$w:"140px",$h:"14px",style:{marginTop:"4px"}})]})]}),l.jsxs(yg,{children:[l.jsx(Or,{$w:"35%",$h:"20px"}),l.jsx(xg,{}),l.jsx(us,{children:e(6)})]}),l.jsxs(yg,{children:[l.jsx(Or,{$w:"30%",$h:"20px"}),l.jsx(xg,{}),l.jsx(us,{children:e(4)})]})]})}function Q4({slot:e,existingDoc:t,selectedFile:n,onFileSelect:r,onClearFile:o,disabled:i}){const s=D.useRef(null),a=!!n,c=!!t;return l.jsxs(F4,{$hasFile:a,children:[l.jsx(T4,{children:e.label}),a?l.jsxs(pg,{children:[l.jsx(Vd,{size:16,style:{color:"#B45A14",flexShrink:0}}),l.jsxs(hg,{children:[l.jsx(mg,{children:n.name}),l.jsxs(gg,{children:[$g(n.size)," · Novo arquivo"]})]}),l.jsx(O4,{type:"button",onClick:()=>o(e.key),disabled:i,title:"Remover seleção",children:l.jsx(Sx,{size:13})})]}):c?l.jsxs(pg,{children:[l.jsx(Vd,{size:16,style:{color:"#7a6455",flexShrink:0}}),l.jsxs(hg,{children:[l.jsx(mg,{children:t.original_name??"Documento existente"}),l.jsxs(gg,{children:[t.file_size?$g(t.file_size)+" · ":"","Substituir clicando abaixo"]})]})]}):null,l.jsxs(P4,{htmlFor:`doc-input-${e.key}`,children:[l.jsx(A4,{$hasFile:a,children:l.jsx(_x,{size:22})}),l.jsx(R4,{children:a?"Trocar arquivo":c?"Substituir documento":"Selecionar arquivo"}),l.jsx(z4,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),l.jsx("input",{ref:s,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:i,onChange:f=>{var d;const u=(d=f.target.files)==null?void 0:d[0];if(u){if(u.size>3*1024*1024){ae.error("Arquivo muito grande. O limite é 3 MB.");return}r(e.key,u),f.target.value=""}}}),l.jsx(Ki,{children:e.hint})]})}function K4(){const{id:e}=o1(),t=Jn(),[n,r]=D.useState(!0),[o,i]=D.useState(!1),[s,a]=D.useState(""),[c,f]=D.useState([]),[u,d]=D.useState(!1),[p,m]=D.useState({}),[h,b]=D.useState({}),[k,y]=D.useState({corporate_name:"",cnpj:"",email:"",state_registration:""}),{register:g,handleSubmit:x,reset:w,setValue:C,watch:_,formState:{errors:T,isDirty:v}}=Sc({resolver:Ux(M4),defaultValues:{trade_name:"",phone:"",benefit_type:"food",notes:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",partner_id:"",bank_bank_name:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}}),P=!!_("bank_bank_name"),F=D.useCallback(async()=>{var $,I;r(!0);try{const{data:z}=await qe.get(`/clients/${e}`),L=z.data;a(L.trade_name||L.corporate_name||""),y({corporate_name:L.corporate_name??"",cnpj:L.cnpj??"",email:L.email??"",state_registration:L.state_registration??""});const Q={};(L.documents??[]).forEach(K=>{Q[K.document_type]=K}),m(Q);const V=($=L.bankAccounts)==null?void 0:$[0];w({trade_name:L.trade_name??"",phone:bg(L.phone??""),benefit_type:L.benefit_type??"food",notes:L.notes??"",address_street:L.address_street??"",address_number:L.address_number??"",address_complement:L.address_complement??"",address_neighborhood:L.address_neighborhood??"",address_city:L.address_city??"",address_state:L.address_state??"",address_zip:wg(L.address_zip??""),partner_id:((I=L.partner)==null?void 0:I.id)??L.partner_id??"",bank_bank_name:(V==null?void 0:V.bank_name)??"",bank_agency:(V==null?void 0:V.agency)??"",bank_agency_digit:(V==null?void 0:V.agency_digit)??"",bank_account:(V==null?void 0:V.account)??"",bank_account_digit:(V==null?void 0:V.account_digit)??"",bank_account_type:(V==null?void 0:V.account_type)??"checking"})}catch(z){ae.error(Zt(z,"Erro ao carregar dados do cliente.")),t(`/clientes/${e}`,{replace:!0})}finally{r(!1)}},[e,t,w]);D.useEffect(()=>{F()},[F]),D.useEffect(()=>{(async()=>{if($u){f($u);return}d(!0);try{const{data:I}=await qe.get("/users?role=partner&limit=100"),z=I.data??[];$u=z,f(z)}catch{}finally{d(!1)}})()},[]);const A=($,I)=>{b(z=>({...z,[$]:I}))},N=$=>{b(I=>{const z={...I};return delete z[$],z})},R=async $=>{i(!0);try{const I=Object.keys(h).length>0,z={trade_name:$.trade_name||void 0,phone:q4($.phone)||void 0,benefit_type:$.benefit_type,notes:$.notes||void 0,address_street:$.address_street||void 0,address_number:$.address_number||void 0,address_complement:$.address_complement||void 0,address_neighborhood:$.address_neighborhood||void 0,address_city:$.address_city||void 0,address_state:$.address_state||void 0,address_zip:$.address_zip||void 0,partner_id:$.partner_id||null,...P?{bankAccount:{bank_name:$.bank_bank_name,agency:$.bank_agency,agency_digit:$.bank_agency_digit||void 0,account:$.bank_account,account_digit:$.bank_account_digit||void 0,account_type:$.bank_account_type}}:{}};if(Object.keys(z).forEach(L=>z[L]===void 0&&delete z[L]),I){const L=new FormData;L.append("data",JSON.stringify(z)),h.contrato&&L.append("contrato",h.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(Q=>{h[Q]&&L.append("documentos",h[Q])}),await qe.patch(`/clients/${e}`,L,{headers:{"Content-Type":"multipart/form-data"}})}else await qe.patch(`/clients/${e}`,z);ae.success("Cliente atualizado com sucesso!",{toastId:"client-updated"}),t(`/clientes/${e}`,{replace:!0})}catch(I){ae.error(Zt(I,"Erro ao salvar alterações."))}finally{i(!1)}};if(n)return l.jsx(G4,{});const U=v||Object.keys(h).length>0,j=$=>{var I;return(I=T[$])==null?void 0:I.message};return l.jsxs(l.Fragment,{children:[l.jsxs(ev,{children:[l.jsxs(tv,{children:[l.jsxs($4,{type:"button",onClick:()=>t(`/clientes/${e}`),children:[l.jsx(ap,{size:15})," Voltar"]}),l.jsxs(nv,{children:[l.jsx(k4,{children:"Editar Cliente"}),l.jsx(S4,{children:s})]})]}),l.jsxs("form",{id:"edit-client-form",onSubmit:x(R),noValidate:!0,children:[l.jsxs(Qi,{style:{marginBottom:"24px"},children:[l.jsxs(va,{children:[l.jsx(ba,{children:l.jsx(lp,{size:18})}),l.jsx(wa,{children:"Dados da Empresa"})]}),l.jsxs(us,{children:[l.jsxs(ze,{children:[l.jsxs(Ve,{children:[l.jsx($a,{children:l.jsx(ga,{size:11})}),"Razão Social"]}),l.jsx(Sa,{children:k.corporate_name||"—"}),l.jsx(_a,{children:"Campo único, não pode ser editado."})]}),l.jsxs(ze,{children:[l.jsxs(Ve,{children:[l.jsx($a,{children:l.jsx(ga,{size:11})}),"CNPJ"]}),l.jsx(Sa,{children:k.cnpj||"—"}),l.jsx(_a,{children:"Campo único, não pode ser editado."})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"trade_name",children:"Nome Fantasia"}),l.jsx(Wt,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",$hasError:!!j("trade_name"),disabled:o,...g("trade_name")}),j("trade_name")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("trade_name")]})]}),l.jsxs(ze,{children:[l.jsxs(Ve,{children:[l.jsx($a,{children:l.jsx(ga,{size:11})}),"Inscrição Estadual"]}),l.jsx(Sa,{children:k.state_registration||"—"}),l.jsx(_a,{children:"Campo único, não pode ser editado."})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"phone",children:"Telefone"}),l.jsx(Wt,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",$hasError:!!j("phone"),disabled:o,...g("phone",{onChange:$=>C("phone",bg($.target.value))})}),j("phone")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("phone")]})]}),l.jsxs(ze,{children:[l.jsxs(Ve,{children:[l.jsx($a,{children:l.jsx(ga,{size:11})}),"E-mail"]}),l.jsx(Sa,{children:k.email||"—"}),l.jsx(_a,{children:"Campo único, não pode ser editado."})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),l.jsx(ka,{id:"benefit_type",$hasError:!!j("benefit_type"),disabled:o,...g("benefit_type"),children:V4.map($=>l.jsx("option",{value:$.value,children:$.label},$.value))}),j("benefit_type")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("benefit_type")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"partner_id",children:"Parceiro Vinculado"}),l.jsxs(ka,{id:"partner_id",disabled:o||u,...g("partner_id"),children:[l.jsx("option",{value:"",children:u?"Carregando parceiros…":"Sem parceiro vinculado"}),c.map($=>l.jsx("option",{value:$.id,children:$.name},$.id))]}),l.jsx(Ki,{children:u?"Buscando parceiros…":`${c.length} parceiro${c.length!==1?"s":""} disponível${c.length!==1?"is":""}`})]}),l.jsx(fg,{children:l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"notes",children:"Observações"}),l.jsx(_4,{id:"notes",placeholder:"Observações internas…",disabled:o,...g("notes")}),l.jsx(Ki,{children:"Visível apenas para a equipe interna."})]})})]})]}),l.jsxs(Qi,{style:{marginBottom:"24px"},children:[l.jsxs(va,{children:[l.jsx(ba,{children:l.jsx(up,{size:18})}),l.jsx(wa,{children:"Endereço"})]}),l.jsxs(us,{children:[l.jsx(fg,{children:l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_street",children:"Logradouro"}),l.jsx(Wt,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",$hasError:!!j("address_street"),disabled:o,...g("address_street")}),j("address_street")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("address_street")]})]})}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_number",children:"Número"}),l.jsx(Wt,{id:"address_number",type:"text",placeholder:"Nº",$hasError:!!j("address_number"),disabled:o,...g("address_number")}),j("address_number")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("address_number")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_complement",children:"Complemento"}),l.jsx(Wt,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",$hasError:!!j("address_complement"),disabled:o,...g("address_complement")}),j("address_complement")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("address_complement")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_neighborhood",children:"Bairro"}),l.jsx(Wt,{id:"address_neighborhood",type:"text",placeholder:"Bairro",$hasError:!!j("address_neighborhood"),disabled:o,...g("address_neighborhood")}),j("address_neighborhood")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("address_neighborhood")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_city",children:"Cidade"}),l.jsx(Wt,{id:"address_city",type:"text",placeholder:"Cidade",$hasError:!!j("address_city"),disabled:o,...g("address_city")}),j("address_city")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("address_city")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_state",children:"UF"}),l.jsxs(ka,{id:"address_state",$hasError:!!j("address_state"),disabled:o,...g("address_state"),children:[l.jsx("option",{value:"",children:"Selecione"}),W4.map($=>l.jsx("option",{value:$,children:$},$))]}),j("address_state")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("address_state")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"address_zip",children:"CEP"}),l.jsx(Wt,{id:"address_zip",type:"text",placeholder:"00000-000",$hasError:!!j("address_zip"),disabled:o,...g("address_zip",{onChange:$=>C("address_zip",wg($.target.value))})}),j("address_zip")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("address_zip")]})]})]})]}),l.jsxs(Qi,{style:{marginBottom:"24px"},children:[l.jsxs(va,{children:[l.jsx(ba,{children:l.jsx(cp,{size:18})}),l.jsx(wa,{children:"Conta Bancária"})]}),l.jsxs(j4,{children:[l.jsx(E4,{children:"Dados Bancários Principais"}),P&&l.jsx(Ki,{style:{marginBottom:"12px",display:"block"},children:"Agência e conta são obrigatórios quando o banco é informado."}),l.jsxs(us,{children:[l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),l.jsx(Wt,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",$hasError:!!j("bank_bank_name"),disabled:o,...g("bank_bank_name")}),j("bank_bank_name")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("bank_bank_name")]})]}),l.jsxs(ze,{children:[l.jsxs(Ve,{htmlFor:"bank_agency",children:["Agência ",P&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(Wt,{id:"bank_agency",type:"text",placeholder:"0000",$hasError:!!j("bank_agency"),disabled:o,...g("bank_agency")}),j("bank_agency")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("bank_agency")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),l.jsx(Wt,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,$hasError:!!j("bank_agency_digit"),disabled:o,...g("bank_agency_digit")}),j("bank_agency_digit")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("bank_agency_digit")]})]}),l.jsxs(ze,{children:[l.jsxs(Ve,{htmlFor:"bank_account",children:["Conta ",P&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(Wt,{id:"bank_account",type:"text",placeholder:"000000",$hasError:!!j("bank_account"),disabled:o,...g("bank_account")}),j("bank_account")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("bank_account")]})]}),l.jsxs(ze,{children:[l.jsx(Ve,{htmlFor:"bank_account_digit",children:"Dígito Conta"}),l.jsx(Wt,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,$hasError:!!j("bank_account_digit"),disabled:o,...g("bank_account_digit")}),j("bank_account_digit")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("bank_account_digit")]})]}),l.jsxs(ze,{children:[l.jsxs(Ve,{htmlFor:"bank_account_type",children:["Tipo de Conta ",P&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(ka,{id:"bank_account_type",$hasError:!!j("bank_account_type"),disabled:o,...g("bank_account_type"),children:H4.map($=>l.jsx("option",{value:$.value,children:$.label},$.value))}),j("bank_account_type")&&l.jsxs(wt,{children:[l.jsx(be,{size:11}),j("bank_account_type")]})]})]})]})]}),l.jsxs(Qi,{style:{marginBottom:"24px"},children:[l.jsxs(va,{children:[l.jsx(ba,{children:l.jsx(Ol,{size:18})}),l.jsx(wa,{children:"Documentos"})]}),l.jsxs(Ki,{style:{marginBottom:"16px",display:"block"},children:["Selecione um novo arquivo para ",l.jsx("strong",{children:"substituir"})," o documento existente. O arquivo antigo é removido automaticamente do Cloudinary."]}),l.jsx(C4,{children:B4.map($=>l.jsx(Q4,{slot:$,existingDoc:p[$.type],selectedFile:h[$.key],onFileSelect:A,onClearFile:N,disabled:o},$.key))})]})]})]}),l.jsxs(N4,{children:[l.jsxs(I4,{type:"button",disabled:o,onClick:()=>t(`/clientes/${e}`),children:[l.jsx($c,{size:15})," Cancelar"]}),l.jsx(L4,{type:"submit",form:"edit-client-form",disabled:o||!U,$isSubmitting:o,title:U?void 0:"Nenhuma alteração detectada",children:o?l.jsxs(l.Fragment,{children:[l.jsx(D4,{}),"Salvando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(wx,{size:15}),"Salvar Alterações"]})})]})]})}function Y4(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(e)}function rv(e,t){return new Promise(function(n,r){let o;return X4(e).then(function(i){try{return o=i,n(new Blob([t.slice(0,2),o,t.slice(2)],{type:"image/jpeg"}))}catch(s){return r(s)}},r)})}const X4=e=>new Promise((t,n)=>{const r=new FileReader;r.addEventListener("load",({target:{result:o}})=>{const i=new DataView(o);let s=0;if(i.getUint16(s)!==65496)return n("not a valid JPEG");for(s+=2;;){const a=i.getUint16(s);if(a===65498)break;const c=i.getUint16(s+2);if(a===65505&&i.getUint32(s+4)===1165519206){const f=s+10;let u;switch(i.getUint16(f)){case 18761:u=!0;break;case 19789:u=!1;break;default:return n("TIFF header contains invalid endian")}if(i.getUint16(f+2,u)!==42)return n("TIFF header contains invalid version");const d=i.getUint32(f+4,u),p=f+d+2+12*i.getUint16(f+d,u);for(let m=f+d+2;m<p;m+=12)if(i.getUint16(m,u)==274){if(i.getUint16(m+2,u)!==3)return n("Orientation data type is invalid");if(i.getUint32(m+4,u)!==1)return n("Orientation data count is invalid");i.setUint16(m+8,1,u);break}return t(o.slice(s,s+2+c))}s+=2+c}return t(new Blob)}),r.readAsArrayBuffer(e)});var Ul={},J4={get exports(){return Ul},set exports(e){Ul=e}};(function(e){var t,n,r={};J4.exports=r,r.parse=function(o,i){for(var s=r.bin.readUshort,a=r.bin.readUint,c=0,f={},u=new Uint8Array(o),d=u.length-4;a(u,d)!=101010256;)d--;c=d,c+=4;var p=s(u,c+=4);s(u,c+=2);var m=a(u,c+=2),h=a(u,c+=4);c+=4,c=h;for(var b=0;b<p;b++){a(u,c),c+=4,c+=4,c+=4,a(u,c+=4),m=a(u,c+=4);var k=a(u,c+=4),y=s(u,c+=4),g=s(u,c+2),x=s(u,c+4);c+=6;var w=a(u,c+=8);c+=4,c+=y+g+x,r._readLocal(u,w,f,m,k,i)}return f},r._readLocal=function(o,i,s,a,c,f){var u=r.bin.readUshort,d=r.bin.readUint;d(o,i),u(o,i+=4),u(o,i+=2);var p=u(o,i+=2);d(o,i+=2),d(o,i+=4),i+=4;var m=u(o,i+=8),h=u(o,i+=2);i+=2;var b=r.bin.readUTF8(o,i,m);if(i+=m,i+=h,f)s[b]={size:c,csize:a};else{var k=new Uint8Array(o.buffer,i);if(p==0)s[b]=new Uint8Array(k.buffer.slice(i,i+a));else{if(p!=8)throw"unknown compression method: "+p;var y=new Uint8Array(c);r.inflateRaw(k,y),s[b]=y}}},r.inflateRaw=function(o,i){return r.F.inflate(o,i)},r.inflate=function(o,i){return o[0],o[1],r.inflateRaw(new Uint8Array(o.buffer,o.byteOffset+2,o.length-6),i)},r.deflate=function(o,i){i==null&&(i={level:6});var s=0,a=new Uint8Array(50+Math.floor(1.1*o.length));a[s]=120,a[s+1]=156,s+=2,s=r.F.deflateRaw(o,a,s,i.level);var c=r.adler(o,0,o.length);return a[s+0]=c>>>24&255,a[s+1]=c>>>16&255,a[s+2]=c>>>8&255,a[s+3]=c>>>0&255,new Uint8Array(a.buffer,0,s+4)},r.deflateRaw=function(o,i){i==null&&(i={level:6});var s=new Uint8Array(50+Math.floor(1.1*o.length)),a=r.F.deflateRaw(o,s,a,i.level);return new Uint8Array(s.buffer,0,a)},r.encode=function(o,i){i==null&&(i=!1);var s=0,a=r.bin.writeUint,c=r.bin.writeUshort,f={};for(var u in o){var d=!r._noNeed(u)&&!i,p=o[u],m=r.crc.crc(p,0,p.length);f[u]={cpr:d,usize:p.length,crc:m,file:d?r.deflateRaw(p):p}}for(var u in f)s+=f[u].file.length+30+46+2*r.bin.sizeUTF8(u);s+=22;var h=new Uint8Array(s),b=0,k=[];for(var u in f){var y=f[u];k.push(b),b=r._writeHeader(h,b,u,y,0)}var g=0,x=b;for(var u in f)y=f[u],k.push(b),b=r._writeHeader(h,b,u,y,1,k[g++]);var w=b-x;return a(h,b,101010256),b+=4,c(h,b+=4,g),c(h,b+=2,g),a(h,b+=2,w),a(h,b+=4,x),b+=4,b+=2,h.buffer},r._noNeed=function(o){var i=o.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(i)!=-1},r._writeHeader=function(o,i,s,a,c,f){var u=r.bin.writeUint,d=r.bin.writeUshort,p=a.file;return u(o,i,c==0?67324752:33639248),i+=4,c==1&&(i+=2),d(o,i,20),d(o,i+=2,0),d(o,i+=2,a.cpr?8:0),u(o,i+=2,0),u(o,i+=4,a.crc),u(o,i+=4,p.length),u(o,i+=4,a.usize),d(o,i+=4,r.bin.sizeUTF8(s)),d(o,i+=2,0),i+=2,c==1&&(i+=2,i+=2,u(o,i+=6,f),i+=4),i+=r.bin.writeUTF8(o,i,s),c==0&&(o.set(p,i),i+=p.length),i},r.crc={table:function(){for(var o=new Uint32Array(256),i=0;i<256;i++){for(var s=i,a=0;a<8;a++)1&s?s=3988292384^s>>>1:s>>>=1;o[i]=s}return o}(),update:function(o,i,s,a){for(var c=0;c<a;c++)o=r.crc.table[255&(o^i[s+c])]^o>>>8;return o},crc:function(o,i,s){return 4294967295^r.crc.update(4294967295,o,i,s)}},r.adler=function(o,i,s){for(var a=1,c=0,f=i,u=i+s;f<u;){for(var d=Math.min(f+5552,u);f<d;)c+=a+=o[f++];a%=65521,c%=65521}return c<<16|a},r.bin={readUshort:function(o,i){return o[i]|o[i+1]<<8},writeUshort:function(o,i,s){o[i]=255&s,o[i+1]=s>>8&255},readUint:function(o,i){return 16777216*o[i+3]+(o[i+2]<<16|o[i+1]<<8|o[i])},writeUint:function(o,i,s){o[i]=255&s,o[i+1]=s>>8&255,o[i+2]=s>>16&255,o[i+3]=s>>24&255},readASCII:function(o,i,s){for(var a="",c=0;c<s;c++)a+=String.fromCharCode(o[i+c]);return a},writeASCII:function(o,i,s){for(var a=0;a<s.length;a++)o[i+a]=s.charCodeAt(a)},pad:function(o){return o.length<2?"0"+o:o},readUTF8:function(o,i,s){for(var a,c="",f=0;f<s;f++)c+="%"+r.bin.pad(o[i+f].toString(16));try{a=decodeURIComponent(c)}catch{return r.bin.readASCII(o,i,s)}return a},writeUTF8:function(o,i,s){for(var a=s.length,c=0,f=0;f<a;f++){var u=s.charCodeAt(f);if(!(4294967168&u))o[i+c]=u,c++;else if(!(4294965248&u))o[i+c]=192|u>>6,o[i+c+1]=128|u>>0&63,c+=2;else if(!(4294901760&u))o[i+c]=224|u>>12,o[i+c+1]=128|u>>6&63,o[i+c+2]=128|u>>0&63,c+=3;else{if(4292870144&u)throw"e";o[i+c]=240|u>>18,o[i+c+1]=128|u>>12&63,o[i+c+2]=128|u>>6&63,o[i+c+3]=128|u>>0&63,c+=4}}return c},sizeUTF8:function(o){for(var i=o.length,s=0,a=0;a<i;a++){var c=o.charCodeAt(a);if(!(4294967168&c))s++;else if(!(4294965248&c))s+=2;else if(!(4294901760&c))s+=3;else{if(4292870144&c)throw"e";s+=4}}return s}},r.F={},r.F.deflateRaw=function(o,i,s,a){var c=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][a],f=r.F.U,u=r.F._goodIndex;r.F._hash;var d=r.F._putsE,p=0,m=s<<3,h=0,b=o.length;if(a==0){for(;p<b;)d(i,m,p+(F=Math.min(65535,b-p))==b?1:0),m=r.F._copyExact(o,p,F,i,m+8),p+=F;return m>>>3}var k=f.lits,y=f.strt,g=f.prev,x=0,w=0,C=0,_=0,T=0,v=0;for(b>2&&(y[v=r.F._hash(o,0)]=0),p=0;p<b;p++){if(T=v,p+1<b-2){v=r.F._hash(o,p+1);var S=p+1&32767;g[S]=y[v],y[v]=S}if(h<=p){(x>14e3||w>26697)&&b-p>100&&(h<p&&(k[x]=p-h,x+=2,h=p),m=r.F._writeBlock(p==b-1||h==b?1:0,k,x,_,o,C,p-C,i,m),x=w=_=0,C=p);var P=0;p<b-2&&(P=r.F._bestMatch(o,p,g,T,Math.min(c[2],b-p),c[3]));var F=P>>>16,A=65535&P;if(P!=0){A=65535&P;var N=u(F=P>>>16,f.of0);f.lhst[257+N]++;var R=u(A,f.df0);f.dhst[R]++,_+=f.exb[N]+f.dxb[R],k[x]=F<<23|p-h,k[x+1]=A<<16|N<<8|R,x+=2,h=p+F}else f.lhst[o[p]]++;w++}}for(C==p&&o.length!=0||(h<p&&(k[x]=p-h,x+=2,h=p),m=r.F._writeBlock(1,k,x,_,o,C,p-C,i,m),x=0,w=0,x=w=_=0,C=p);7&m;)m++;return m>>>3},r.F._bestMatch=function(o,i,s,a,c,f){var u=32767&i,d=s[u],p=u-d+32768&32767;if(d==u||a!=r.F._hash(o,i-p))return 0;for(var m=0,h=0,b=Math.min(32767,i);p<=b&&--f!=0&&d!=u;){if(m==0||o[i+m]==o[i+m-p]){var k=r.F._howLong(o,i,p);if(k>m){if(h=p,(m=k)>=c)break;p+2<k&&(k=p+2);for(var y=0,g=0;g<k-2;g++){var x=i-p+g+32768&32767,w=x-s[x]+32768&32767;w>y&&(y=w,d=x)}}}p+=(u=d)-(d=s[u])+32768&32767}return m<<16|h},r.F._howLong=function(o,i,s){if(o[i]!=o[i-s]||o[i+1]!=o[i+1-s]||o[i+2]!=o[i+2-s])return 0;var a=i,c=Math.min(o.length,i+258);for(i+=3;i<c&&o[i]==o[i-s];)i++;return i-a},r.F._hash=function(o,i){return(o[i]<<8|o[i+1])+(o[i+2]<<4)&65535},r.saved=0,r.F._writeBlock=function(o,i,s,a,c,f,u,d,p){var m,h,b,k,y,g,x,w,C,_=r.F.U,T=r.F._putsF,v=r.F._putsE;_.lhst[256]++,h=(m=r.F.getTrees())[0],b=m[1],k=m[2],y=m[3],g=m[4],x=m[5],w=m[6],C=m[7];var S=32+(p+3&7?8-(p+3&7):0)+(u<<3),P=a+r.F.contSize(_.fltree,_.lhst)+r.F.contSize(_.fdtree,_.dhst),F=a+r.F.contSize(_.ltree,_.lhst)+r.F.contSize(_.dtree,_.dhst);F+=14+3*x+r.F.contSize(_.itree,_.ihst)+(2*_.ihst[16]+3*_.ihst[17]+7*_.ihst[18]);for(var A=0;A<286;A++)_.lhst[A]=0;for(A=0;A<30;A++)_.dhst[A]=0;for(A=0;A<19;A++)_.ihst[A]=0;var N=S<P&&S<F?0:P<F?1:2;if(T(d,p,o),T(d,p+1,N),p+=3,N==0){for(;7&p;)p++;p=r.F._copyExact(c,f,u,d,p)}else{var R,U;if(N==1&&(R=_.fltree,U=_.fdtree),N==2){r.F.makeCodes(_.ltree,h),r.F.revCodes(_.ltree,h),r.F.makeCodes(_.dtree,b),r.F.revCodes(_.dtree,b),r.F.makeCodes(_.itree,k),r.F.revCodes(_.itree,k),R=_.ltree,U=_.dtree,v(d,p,y-257),v(d,p+=5,g-1),v(d,p+=5,x-4),p+=4;for(var j=0;j<x;j++)v(d,p+3*j,_.itree[1+(_.ordr[j]<<1)]);p+=3*x,p=r.F._codeTiny(w,_.itree,d,p),p=r.F._codeTiny(C,_.itree,d,p)}for(var $=f,I=0;I<s;I+=2){for(var z=i[I],L=z>>>23,Q=$+(8388607&z);$<Q;)p=r.F._writeLit(c[$++],R,d,p);if(L!=0){var V=i[I+1],K=V>>16,G=V>>8&255,M=255&V;v(d,p=r.F._writeLit(257+G,R,d,p),L-_.of0[G]),p+=_.exb[G],T(d,p=r.F._writeLit(M,U,d,p),K-_.df0[M]),p+=_.dxb[M],$+=L}}p=r.F._writeLit(256,R,d,p)}return p},r.F._copyExact=function(o,i,s,a,c){var f=c>>>3;return a[f]=s,a[f+1]=s>>>8,a[f+2]=255-a[f],a[f+3]=255-a[f+1],f+=4,a.set(new Uint8Array(o.buffer,i,s),f),c+(s+4<<3)},r.F.getTrees=function(){for(var o=r.F.U,i=r.F._hufTree(o.lhst,o.ltree,15),s=r.F._hufTree(o.dhst,o.dtree,15),a=[],c=r.F._lenCodes(o.ltree,a),f=[],u=r.F._lenCodes(o.dtree,f),d=0;d<a.length;d+=2)o.ihst[a[d]]++;for(d=0;d<f.length;d+=2)o.ihst[f[d]]++;for(var p=r.F._hufTree(o.ihst,o.itree,7),m=19;m>4&&o.itree[1+(o.ordr[m-1]<<1)]==0;)m--;return[i,s,p,c,u,m,a,f]},r.F.getSecond=function(o){for(var i=[],s=0;s<o.length;s+=2)i.push(o[s+1]);return i},r.F.nonZero=function(o){for(var i="",s=0;s<o.length;s+=2)o[s+1]!=0&&(i+=(s>>1)+",");return i},r.F.contSize=function(o,i){for(var s=0,a=0;a<i.length;a++)s+=i[a]*o[1+(a<<1)];return s},r.F._codeTiny=function(o,i,s,a){for(var c=0;c<o.length;c+=2){var f=o[c],u=o[c+1];a=r.F._writeLit(f,i,s,a);var d=f==16?2:f==17?3:7;f>15&&(r.F._putsE(s,a,u,d),a+=d)}return a},r.F._lenCodes=function(o,i){for(var s=o.length;s!=2&&o[s-1]==0;)s-=2;for(var a=0;a<s;a+=2){var c=o[a+1],f=a+3<s?o[a+3]:-1,u=a+5<s?o[a+5]:-1,d=a==0?-1:o[a-1];if(c==0&&f==c&&u==c){for(var p=a+5;p+2<s&&o[p+2]==c;)p+=2;(m=Math.min(p+1-a>>>1,138))<11?i.push(17,m-3):i.push(18,m-11),a+=2*m-2}else if(c==d&&f==c&&u==c){for(p=a+5;p+2<s&&o[p+2]==c;)p+=2;var m=Math.min(p+1-a>>>1,6);i.push(16,m-3),a+=2*m-2}else i.push(c,0)}return s>>>1},r.F._hufTree=function(o,i,s){var a=[],c=o.length,f=i.length,u=0;for(u=0;u<f;u+=2)i[u]=0,i[u+1]=0;for(u=0;u<c;u++)o[u]!=0&&a.push({lit:u,f:o[u]});var d=a.length,p=a.slice(0);if(d==0)return 0;if(d==1){var m=a[0].lit;return p=m==0?1:0,i[1+(m<<1)]=1,i[1+(p<<1)]=1,1}a.sort(function(w,C){return w.f-C.f});var h=a[0],b=a[1],k=0,y=1,g=2;for(a[0]={lit:-1,f:h.f+b.f,l:h,r:b,d:0};y!=d-1;)h=k!=y&&(g==d||a[k].f<a[g].f)?a[k++]:a[g++],b=k!=y&&(g==d||a[k].f<a[g].f)?a[k++]:a[g++],a[y++]={lit:-1,f:h.f+b.f,l:h,r:b};var x=r.F.setDepth(a[y-1],0);for(x>s&&(r.F.restrictDepth(p,s,x),x=s),u=0;u<d;u++)i[1+(p[u].lit<<1)]=p[u].d;return x},r.F.setDepth=function(o,i){return o.lit!=-1?(o.d=i,i):Math.max(r.F.setDepth(o.l,i+1),r.F.setDepth(o.r,i+1))},r.F.restrictDepth=function(o,i,s){var a=0,c=1<<s-i,f=0;for(o.sort(function(d,p){return p.d==d.d?d.f-p.f:p.d-d.d}),a=0;a<o.length&&o[a].d>i;a++){var u=o[a].d;o[a].d=i,f+=c-(1<<s-u)}for(f>>>=s-i;f>0;)(u=o[a].d)<i?(o[a].d++,f-=1<<i-u-1):a++;for(;a>=0;a--)o[a].d==i&&f<0&&(o[a].d--,f++);f!=0&&console.log("debt left")},r.F._goodIndex=function(o,i){var s=0;return i[16|s]<=o&&(s|=16),i[8|s]<=o&&(s|=8),i[4|s]<=o&&(s|=4),i[2|s]<=o&&(s|=2),i[1|s]<=o&&(s|=1),s},r.F._writeLit=function(o,i,s,a){return r.F._putsF(s,a,i[o<<1]),a+i[1+(o<<1)]},r.F.inflate=function(o,i){var s=Uint8Array;if(o[0]==3&&o[1]==0)return i||new s(0);var a=r.F,c=a._bitsF,f=a._bitsE,u=a._decodeTiny,d=a.makeCodes,p=a.codes2map,m=a._get17,h=a.U,b=i==null;b&&(i=new s(o.length>>>2<<3));for(var k,y,g=0,x=0,w=0,C=0,_=0,T=0,v=0,S=0,P=0;g==0;)if(g=c(o,P,1),x=c(o,P+1,2),P+=3,x!=0){if(b&&(i=r.F._check(i,S+(1<<17))),x==1&&(k=h.flmap,y=h.fdmap,T=511,v=31),x==2){w=f(o,P,5)+257,C=f(o,P+5,5)+1,_=f(o,P+10,4)+4,P+=14;for(var F=0;F<38;F+=2)h.itree[F]=0,h.itree[F+1]=0;var A=1;for(F=0;F<_;F++){var N=f(o,P+3*F,3);h.itree[1+(h.ordr[F]<<1)]=N,N>A&&(A=N)}P+=3*_,d(h.itree,A),p(h.itree,A,h.imap),k=h.lmap,y=h.dmap,P=u(h.imap,(1<<A)-1,w+C,o,P,h.ttree);var R=a._copyOut(h.ttree,0,w,h.ltree);T=(1<<R)-1;var U=a._copyOut(h.ttree,w,C,h.dtree);v=(1<<U)-1,d(h.ltree,R),p(h.ltree,R,k),d(h.dtree,U),p(h.dtree,U,y)}for(;;){var j=k[m(o,P)&T];P+=15&j;var $=j>>>4;if(!($>>>8))i[S++]=$;else{if($==256)break;var I=S+$-254;if($>264){var z=h.ldef[$-257];I=S+(z>>>3)+f(o,P,7&z),P+=7&z}var L=y[m(o,P)&v];P+=15&L;var Q=L>>>4,V=h.ddef[Q],K=(V>>>4)+c(o,P,15&V);for(P+=15&V,b&&(i=r.F._check(i,S+(1<<17)));S<I;)i[S]=i[S++-K],i[S]=i[S++-K],i[S]=i[S++-K],i[S]=i[S++-K];S=I}}}else{7&P&&(P+=8-(7&P));var G=4+(P>>>3),M=o[G-4]|o[G-3]<<8;b&&(i=r.F._check(i,S+M)),i.set(new s(o.buffer,o.byteOffset+G,M),S),P=G+M<<3,S+=M}return i.length==S?i:i.slice(0,S)},r.F._check=function(o,i){var s=o.length;if(i<=s)return o;var a=new Uint8Array(Math.max(s<<1,i));return a.set(o,0),a},r.F._decodeTiny=function(o,i,s,a,c,f){for(var u=r.F._bitsE,d=r.F._get17,p=0;p<s;){var m=o[d(a,c)&i];c+=15&m;var h=m>>>4;if(h<=15)f[p]=h,p++;else{var b=0,k=0;h==16?(k=3+u(a,c,2),c+=2,b=f[p-1]):h==17?(k=3+u(a,c,3),c+=3):h==18&&(k=11+u(a,c,7),c+=7);for(var y=p+k;p<y;)f[p]=b,p++}}return c},r.F._copyOut=function(o,i,s,a){for(var c=0,f=0,u=a.length>>>1;f<s;){var d=o[f+i];a[f<<1]=0,a[1+(f<<1)]=d,d>c&&(c=d),f++}for(;f<u;)a[f<<1]=0,a[1+(f<<1)]=0,f++;return c},r.F.makeCodes=function(o,i){for(var s,a,c,f,u=r.F.U,d=o.length,p=u.bl_count,m=0;m<=i;m++)p[m]=0;for(m=1;m<d;m+=2)p[o[m]]++;var h=u.next_code;for(s=0,p[0]=0,a=1;a<=i;a++)s=s+p[a-1]<<1,h[a]=s;for(c=0;c<d;c+=2)(f=o[c+1])!=0&&(o[c]=h[f],h[f]++)},r.F.codes2map=function(o,i,s){for(var a=o.length,c=r.F.U.rev15,f=0;f<a;f+=2)if(o[f+1]!=0)for(var u=f>>1,d=o[f+1],p=u<<4|d,m=i-d,h=o[f]<<m,b=h+(1<<m);h!=b;)s[c[h]>>>15-i]=p,h++},r.F.revCodes=function(o,i){for(var s=r.F.U.rev15,a=15-i,c=0;c<o.length;c+=2){var f=o[c]<<i-o[c+1];o[c]=s[f]>>>a}},r.F._putsE=function(o,i,s){s<<=7&i;var a=i>>>3;o[a]|=s,o[a+1]|=s>>>8},r.F._putsF=function(o,i,s){s<<=7&i;var a=i>>>3;o[a]|=s,o[a+1]|=s>>>8,o[a+2]|=s>>>16},r.F._bitsE=function(o,i,s){return(o[i>>>3]|o[1+(i>>>3)]<<8)>>>(7&i)&(1<<s)-1},r.F._bitsF=function(o,i,s){return(o[i>>>3]|o[1+(i>>>3)]<<8|o[2+(i>>>3)]<<16)>>>(7&i)&(1<<s)-1},r.F._get17=function(o,i){return(o[i>>>3]|o[1+(i>>>3)]<<8|o[2+(i>>>3)]<<16)>>>(7&i)},r.F._get25=function(o,i){return(o[i>>>3]|o[1+(i>>>3)]<<8|o[2+(i>>>3)]<<16|o[3+(i>>>3)]<<24)>>>(7&i)},r.F.U=(t=Uint16Array,n=Uint32Array,{next_code:new t(16),bl_count:new t(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new t(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new n(32),flmap:new t(512),fltree:[],fdmap:new t(32),fdtree:[],lmap:new t(32768),ltree:[],ttree:[],dmap:new t(32768),dtree:[],imap:new t(512),itree:[],rev15:new t(32768),lhst:new n(286),dhst:new n(30),ihst:new n(19),lits:new n(15e3),strt:new t(65536),prev:new t(32768)}),function(){for(var o=r.F.U,i=0;i<32768;i++){var s=i;s=(4278255360&(s=(4042322160&(s=(3435973836&(s=(2863311530&s)>>>1|(1431655765&s)<<1))>>>2|(858993459&s)<<2))>>>4|(252645135&s)<<4))>>>8|(16711935&s)<<8,o.rev15[i]=(s>>>16|s<<16)>>>17}function a(c,f,u){for(;f--!=0;)c.push(0,u)}for(i=0;i<32;i++)o.ldef[i]=o.of0[i]<<3|o.exb[i],o.ddef[i]=o.df0[i]<<4|o.dxb[i];a(o.fltree,144,8),a(o.fltree,112,9),a(o.fltree,24,7),a(o.fltree,8,8),r.F.makeCodes(o.fltree,9),r.F.codes2map(o.fltree,9,o.flmap),r.F.revCodes(o.fltree,9),a(o.fdtree,32,5),r.F.makeCodes(o.fdtree,5),r.F.codes2map(o.fdtree,5,o.fdmap),r.F.revCodes(o.fdtree,5),a(o.itree,19,0),a(o.ltree,286,0),a(o.dtree,30,0),a(o.ttree,320,0)}()})();var Z4=Y4({__proto__:null,default:Ul},[Ul]);const mn=function(){var e={nextZero(u,d){for(;u[d]!=0;)d++;return d},readUshort:(u,d)=>u[d]<<8|u[d+1],writeUshort(u,d,p){u[d]=p>>8&255,u[d+1]=255&p},readUint:(u,d)=>16777216*u[d]+(u[d+1]<<16|u[d+2]<<8|u[d+3]),writeUint(u,d,p){u[d]=p>>24&255,u[d+1]=p>>16&255,u[d+2]=p>>8&255,u[d+3]=255&p},readASCII(u,d,p){let m="";for(let h=0;h<p;h++)m+=String.fromCharCode(u[d+h]);return m},writeASCII(u,d,p){for(let m=0;m<p.length;m++)u[d+m]=p.charCodeAt(m)},readBytes(u,d,p){const m=[];for(let h=0;h<p;h++)m.push(u[d+h]);return m},pad:u=>u.length<2?`0${u}`:u,readUTF8(u,d,p){let m,h="";for(let b=0;b<p;b++)h+=`%${e.pad(u[d+b].toString(16))}`;try{m=decodeURIComponent(h)}catch{return e.readASCII(u,d,p)}return m}};function t(u,d,p,m){const h=d*p,b=i(m),k=Math.ceil(d*b/8),y=new Uint8Array(4*h),g=new Uint32Array(y.buffer),{ctype:x}=m,{depth:w}=m,C=e.readUshort;if(x==6){const z=h<<2;if(w==8)for(var _=0;_<z;_+=4)y[_]=u[_],y[_+1]=u[_+1],y[_+2]=u[_+2],y[_+3]=u[_+3];if(w==16)for(_=0;_<z;_++)y[_]=u[_<<1]}else if(x==2){const z=m.tabs.tRNS;if(z==null){if(w==8)for(_=0;_<h;_++){var T=3*_;g[_]=255<<24|u[T+2]<<16|u[T+1]<<8|u[T]}if(w==16)for(_=0;_<h;_++)T=6*_,g[_]=255<<24|u[T+4]<<16|u[T+2]<<8|u[T]}else{var v=z[0];const L=z[1],Q=z[2];if(w==8)for(_=0;_<h;_++){var S=_<<2;T=3*_,g[_]=255<<24|u[T+2]<<16|u[T+1]<<8|u[T],u[T]==v&&u[T+1]==L&&u[T+2]==Q&&(y[S+3]=0)}if(w==16)for(_=0;_<h;_++)S=_<<2,T=6*_,g[_]=255<<24|u[T+4]<<16|u[T+2]<<8|u[T],C(u,T)==v&&C(u,T+2)==L&&C(u,T+4)==Q&&(y[S+3]=0)}}else if(x==3){const z=m.tabs.PLTE,L=m.tabs.tRNS,Q=L?L.length:0;if(w==1)for(var P=0;P<p;P++){var F=P*k,A=P*d;for(_=0;_<d;_++){S=A+_<<2;var N=3*(R=u[F+(_>>3)]>>7-((7&_)<<0)&1);y[S]=z[N],y[S+1]=z[N+1],y[S+2]=z[N+2],y[S+3]=R<Q?L[R]:255}}if(w==2)for(P=0;P<p;P++)for(F=P*k,A=P*d,_=0;_<d;_++)S=A+_<<2,N=3*(R=u[F+(_>>2)]>>6-((3&_)<<1)&3),y[S]=z[N],y[S+1]=z[N+1],y[S+2]=z[N+2],y[S+3]=R<Q?L[R]:255;if(w==4)for(P=0;P<p;P++)for(F=P*k,A=P*d,_=0;_<d;_++)S=A+_<<2,N=3*(R=u[F+(_>>1)]>>4-((1&_)<<2)&15),y[S]=z[N],y[S+1]=z[N+1],y[S+2]=z[N+2],y[S+3]=R<Q?L[R]:255;if(w==8)for(_=0;_<h;_++){var R;S=_<<2,N=3*(R=u[_]),y[S]=z[N],y[S+1]=z[N+1],y[S+2]=z[N+2],y[S+3]=R<Q?L[R]:255}}else if(x==4){if(w==8)for(_=0;_<h;_++){S=_<<2;var U=u[j=_<<1];y[S]=U,y[S+1]=U,y[S+2]=U,y[S+3]=u[j+1]}if(w==16)for(_=0;_<h;_++){var j;S=_<<2,U=u[j=_<<2],y[S]=U,y[S+1]=U,y[S+2]=U,y[S+3]=u[j+2]}}else if(x==0)for(v=m.tabs.tRNS?m.tabs.tRNS:-1,P=0;P<p;P++){const z=P*k,L=P*d;if(w==1)for(var $=0;$<d;$++){var I=(U=255*(u[z+($>>>3)]>>>7-(7&$)&1))==255*v?0:255;g[L+$]=I<<24|U<<16|U<<8|U}else if(w==2)for($=0;$<d;$++)I=(U=85*(u[z+($>>>2)]>>>6-((3&$)<<1)&3))==85*v?0:255,g[L+$]=I<<24|U<<16|U<<8|U;else if(w==4)for($=0;$<d;$++)I=(U=17*(u[z+($>>>1)]>>>4-((1&$)<<2)&15))==17*v?0:255,g[L+$]=I<<24|U<<16|U<<8|U;else if(w==8)for($=0;$<d;$++)I=(U=u[z+$])==v?0:255,g[L+$]=I<<24|U<<16|U<<8|U;else if(w==16)for($=0;$<d;$++)U=u[z+($<<1)],I=C(u,z+($<<1))==v?0:255,g[L+$]=I<<24|U<<16|U<<8|U}return y}function n(u,d,p,m){const h=i(u),b=Math.ceil(p*h/8),k=new Uint8Array((b+1+u.interlace)*m);return d=u.tabs.CgBI?o(d,k):r(d,k),u.interlace==0?d=s(d,u,0,p,m):u.interlace==1&&(d=function(g,x){const w=x.width,C=x.height,_=i(x),T=_>>3,v=Math.ceil(w*_/8),S=new Uint8Array(C*v);let P=0;const F=[0,0,4,0,2,0,1],A=[0,4,0,2,0,1,0],N=[8,8,8,4,4,2,2],R=[8,8,4,4,2,2,1];let U=0;for(;U<7;){const $=N[U],I=R[U];let z=0,L=0,Q=F[U];for(;Q<C;)Q+=$,L++;let V=A[U];for(;V<w;)V+=I,z++;const K=Math.ceil(z*_/8);s(g,x,P,z,L);let G=0,M=F[U];for(;M<C;){let H=A[U],te=P+G*K<<3;for(;H<w;){var j;if(_==1&&(j=(j=g[te>>3])>>7-(7&te)&1,S[M*v+(H>>3)]|=j<<7-((7&H)<<0)),_==2&&(j=(j=g[te>>3])>>6-(7&te)&3,S[M*v+(H>>2)]|=j<<6-((3&H)<<1)),_==4&&(j=(j=g[te>>3])>>4-(7&te)&15,S[M*v+(H>>1)]|=j<<4-((1&H)<<2)),_>=8){const ee=M*v+H*T;for(let ie=0;ie<T;ie++)S[ee+ie]=g[(te>>3)+ie]}te+=_,H+=I}G++,M+=$}z*L!=0&&(P+=L*(1+K)),U+=1}return S}(d,u)),d}function r(u,d){return o(new Uint8Array(u.buffer,2,u.length-6),d)}var o=function(){const u={H:{}};return u.H.N=function(d,p){const m=Uint8Array;let h,b,k=0,y=0,g=0,x=0,w=0,C=0,_=0,T=0,v=0;if(d[0]==3&&d[1]==0)return p||new m(0);const S=u.H,P=S.b,F=S.e,A=S.R,N=S.n,R=S.A,U=S.Z,j=S.m,$=p==null;for($&&(p=new m(d.length>>>2<<5));k==0;)if(k=P(d,v,1),y=P(d,v+1,2),v+=3,y!=0){if($&&(p=u.H.W(p,T+(1<<17))),y==1&&(h=j.J,b=j.h,C=511,_=31),y==2){g=F(d,v,5)+257,x=F(d,v+5,5)+1,w=F(d,v+10,4)+4,v+=14;let z=1;for(var I=0;I<38;I+=2)j.Q[I]=0,j.Q[I+1]=0;for(I=0;I<w;I++){const V=F(d,v+3*I,3);j.Q[1+(j.X[I]<<1)]=V,V>z&&(z=V)}v+=3*w,N(j.Q,z),R(j.Q,z,j.u),h=j.w,b=j.d,v=A(j.u,(1<<z)-1,g+x,d,v,j.v);const L=S.V(j.v,0,g,j.C);C=(1<<L)-1;const Q=S.V(j.v,g,x,j.D);_=(1<<Q)-1,N(j.C,L),R(j.C,L,h),N(j.D,Q),R(j.D,Q,b)}for(;;){const z=h[U(d,v)&C];v+=15&z;const L=z>>>4;if(!(L>>>8))p[T++]=L;else{if(L==256)break;{let Q=T+L-254;if(L>264){const H=j.q[L-257];Q=T+(H>>>3)+F(d,v,7&H),v+=7&H}const V=b[U(d,v)&_];v+=15&V;const K=V>>>4,G=j.c[K],M=(G>>>4)+P(d,v,15&G);for(v+=15&G;T<Q;)p[T]=p[T++-M],p[T]=p[T++-M],p[T]=p[T++-M],p[T]=p[T++-M];T=Q}}}}else{7&v&&(v+=8-(7&v));const z=4+(v>>>3),L=d[z-4]|d[z-3]<<8;$&&(p=u.H.W(p,T+L)),p.set(new m(d.buffer,d.byteOffset+z,L),T),v=z+L<<3,T+=L}return p.length==T?p:p.slice(0,T)},u.H.W=function(d,p){const m=d.length;if(p<=m)return d;const h=new Uint8Array(m<<1);return h.set(d,0),h},u.H.R=function(d,p,m,h,b,k){const y=u.H.e,g=u.H.Z;let x=0;for(;x<m;){const w=d[g(h,b)&p];b+=15&w;const C=w>>>4;if(C<=15)k[x]=C,x++;else{let _=0,T=0;C==16?(T=3+y(h,b,2),b+=2,_=k[x-1]):C==17?(T=3+y(h,b,3),b+=3):C==18&&(T=11+y(h,b,7),b+=7);const v=x+T;for(;x<v;)k[x]=_,x++}}return b},u.H.V=function(d,p,m,h){let b=0,k=0;const y=h.length>>>1;for(;k<m;){const g=d[k+p];h[k<<1]=0,h[1+(k<<1)]=g,g>b&&(b=g),k++}for(;k<y;)h[k<<1]=0,h[1+(k<<1)]=0,k++;return b},u.H.n=function(d,p){const m=u.H.m,h=d.length;let b,k,y,g;const x=m.j;for(var w=0;w<=p;w++)x[w]=0;for(w=1;w<h;w+=2)x[d[w]]++;const C=m.K;for(b=0,x[0]=0,k=1;k<=p;k++)b=b+x[k-1]<<1,C[k]=b;for(y=0;y<h;y+=2)g=d[y+1],g!=0&&(d[y]=C[g],C[g]++)},u.H.A=function(d,p,m){const h=d.length,b=u.H.m.r;for(let k=0;k<h;k+=2)if(d[k+1]!=0){const y=k>>1,g=d[k+1],x=y<<4|g,w=p-g;let C=d[k]<<w;const _=C+(1<<w);for(;C!=_;)m[b[C]>>>15-p]=x,C++}},u.H.l=function(d,p){const m=u.H.m.r,h=15-p;for(let b=0;b<d.length;b+=2){const k=d[b]<<p-d[b+1];d[b]=m[k]>>>h}},u.H.M=function(d,p,m){m<<=7&p;const h=p>>>3;d[h]|=m,d[h+1]|=m>>>8},u.H.I=function(d,p,m){m<<=7&p;const h=p>>>3;d[h]|=m,d[h+1]|=m>>>8,d[h+2]|=m>>>16},u.H.e=function(d,p,m){return(d[p>>>3]|d[1+(p>>>3)]<<8)>>>(7&p)&(1<<m)-1},u.H.b=function(d,p,m){return(d[p>>>3]|d[1+(p>>>3)]<<8|d[2+(p>>>3)]<<16)>>>(7&p)&(1<<m)-1},u.H.Z=function(d,p){return(d[p>>>3]|d[1+(p>>>3)]<<8|d[2+(p>>>3)]<<16)>>>(7&p)},u.H.i=function(d,p){return(d[p>>>3]|d[1+(p>>>3)]<<8|d[2+(p>>>3)]<<16|d[3+(p>>>3)]<<24)>>>(7&p)},u.H.m=function(){const d=Uint16Array,p=Uint32Array;return{K:new d(16),j:new d(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new d(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new p(32),J:new d(512),_:[],h:new d(32),$:[],w:new d(32768),C:[],v:[],d:new d(32768),D:[],u:new d(512),Q:[],r:new d(32768),s:new p(286),Y:new p(30),a:new p(19),t:new p(15e3),k:new d(65536),g:new d(32768)}}(),function(){const d=u.H.m;for(var p=0;p<32768;p++){let h=p;h=(2863311530&h)>>>1|(1431655765&h)<<1,h=(3435973836&h)>>>2|(858993459&h)<<2,h=(4042322160&h)>>>4|(252645135&h)<<4,h=(4278255360&h)>>>8|(16711935&h)<<8,d.r[p]=(h>>>16|h<<16)>>>17}function m(h,b,k){for(;b--!=0;)h.push(0,k)}for(p=0;p<32;p++)d.q[p]=d.S[p]<<3|d.T[p],d.c[p]=d.p[p]<<4|d.z[p];m(d._,144,8),m(d._,112,9),m(d._,24,7),m(d._,8,8),u.H.n(d._,9),u.H.A(d._,9,d.J),u.H.l(d._,9),m(d.$,32,5),u.H.n(d.$,5),u.H.A(d.$,5,d.h),u.H.l(d.$,5),m(d.Q,19,0),m(d.C,286,0),m(d.D,30,0),m(d.v,320,0)}(),u.H.N}();function i(u){return[1,null,3,1,2,null,4][u.ctype]*u.depth}function s(u,d,p,m,h){let b=i(d);const k=Math.ceil(m*b/8);let y,g;b=Math.ceil(b/8);let x=u[p],w=0;if(x>1&&(u[p]=[0,0,1][x-2]),x==3)for(w=b;w<k;w++)u[w+1]=u[w+1]+(u[w+1-b]>>>1)&255;for(let C=0;C<h;C++)if(y=p+C*k,g=y+C+1,x=u[g-1],w=0,x==0)for(;w<k;w++)u[y+w]=u[g+w];else if(x==1){for(;w<b;w++)u[y+w]=u[g+w];for(;w<k;w++)u[y+w]=u[g+w]+u[y+w-b]}else if(x==2)for(;w<k;w++)u[y+w]=u[g+w]+u[y+w-k];else if(x==3){for(;w<b;w++)u[y+w]=u[g+w]+(u[y+w-k]>>>1);for(;w<k;w++)u[y+w]=u[g+w]+(u[y+w-k]+u[y+w-b]>>>1)}else{for(;w<b;w++)u[y+w]=u[g+w]+a(0,u[y+w-k],0);for(;w<k;w++)u[y+w]=u[g+w]+a(u[y+w-b],u[y+w-k],u[y+w-b-k])}return u}function a(u,d,p){const m=u+d-p,h=m-u,b=m-d,k=m-p;return h*h<=b*b&&h*h<=k*k?u:b*b<=k*k?d:p}function c(u,d,p){p.width=e.readUint(u,d),d+=4,p.height=e.readUint(u,d),d+=4,p.depth=u[d],d++,p.ctype=u[d],d++,p.compress=u[d],d++,p.filter=u[d],d++,p.interlace=u[d],d++}function f(u,d,p,m,h,b,k,y,g){const x=Math.min(d,h),w=Math.min(p,b);let C=0,_=0;for(let U=0;U<w;U++)for(let j=0;j<x;j++)if(k>=0&&y>=0?(C=U*d+j<<2,_=(y+U)*h+k+j<<2):(C=(-y+U)*d-k+j<<2,_=U*h+j<<2),g==0)m[_]=u[C],m[_+1]=u[C+1],m[_+2]=u[C+2],m[_+3]=u[C+3];else if(g==1){var T=u[C+3]*.00392156862745098,v=u[C]*T,S=u[C+1]*T,P=u[C+2]*T,F=m[_+3]*(1/255),A=m[_]*F,N=m[_+1]*F,R=m[_+2]*F;const $=1-T,I=T+F*$,z=I==0?0:1/I;m[_+3]=255*I,m[_+0]=(v+A*$)*z,m[_+1]=(S+N*$)*z,m[_+2]=(P+R*$)*z}else if(g==2)T=u[C+3],v=u[C],S=u[C+1],P=u[C+2],F=m[_+3],A=m[_],N=m[_+1],R=m[_+2],T==F&&v==A&&S==N&&P==R?(m[_]=0,m[_+1]=0,m[_+2]=0,m[_+3]=0):(m[_]=v,m[_+1]=S,m[_+2]=P,m[_+3]=T);else if(g==3){if(T=u[C+3],v=u[C],S=u[C+1],P=u[C+2],F=m[_+3],A=m[_],N=m[_+1],R=m[_+2],T==F&&v==A&&S==N&&P==R)continue;if(T<220&&F>20)return!1}return!0}return{decode:function(d){const p=new Uint8Array(d);let m=8;const h=e,b=h.readUshort,k=h.readUint,y={tabs:{},frames:[]},g=new Uint8Array(p.length);let x,w=0,C=0;const _=[137,80,78,71,13,10,26,10];for(var T=0;T<8;T++)if(p[T]!=_[T])throw"The input is not a PNG file!";for(;m<p.length;){const U=h.readUint(p,m);m+=4;const j=h.readASCII(p,m,4);if(m+=4,j=="IHDR")c(p,m,y);else if(j=="iCCP"){for(var v=m;p[v]!=0;)v++;h.readASCII(p,m,v-m),p[v+1];const $=p.slice(v+2,m+U);let I=null;try{I=r($)}catch{I=o($)}y.tabs[j]=I}else if(j=="CgBI")y.tabs[j]=p.slice(m,m+4);else if(j=="IDAT"){for(T=0;T<U;T++)g[w+T]=p[m+T];w+=U}else if(j=="acTL")y.tabs[j]={num_frames:k(p,m),num_plays:k(p,m+4)},x=new Uint8Array(p.length);else if(j=="fcTL"){C!=0&&((R=y.frames[y.frames.length-1]).data=n(y,x.slice(0,C),R.rect.width,R.rect.height),C=0);const $={x:k(p,m+12),y:k(p,m+16),width:k(p,m+4),height:k(p,m+8)};let I=b(p,m+22);I=b(p,m+20)/(I==0?100:I);const z={rect:$,delay:Math.round(1e3*I),dispose:p[m+24],blend:p[m+25]};y.frames.push(z)}else if(j=="fdAT"){for(T=0;T<U-4;T++)x[C+T]=p[m+T+4];C+=U-4}else if(j=="pHYs")y.tabs[j]=[h.readUint(p,m),h.readUint(p,m+4),p[m+8]];else if(j=="cHRM")for(y.tabs[j]=[],T=0;T<8;T++)y.tabs[j].push(h.readUint(p,m+4*T));else if(j=="tEXt"||j=="zTXt"){y.tabs[j]==null&&(y.tabs[j]={});var S=h.nextZero(p,m),P=h.readASCII(p,m,S-m),F=m+U-S-1;if(j=="tEXt")N=h.readASCII(p,S+1,F);else{var A=r(p.slice(S+2,S+2+F));N=h.readUTF8(A,0,A.length)}y.tabs[j][P]=N}else if(j=="iTXt"){y.tabs[j]==null&&(y.tabs[j]={}),S=0,v=m,S=h.nextZero(p,v),P=h.readASCII(p,v,S-v);const $=p[v=S+1];var N;p[v+1],v+=2,S=h.nextZero(p,v),h.readASCII(p,v,S-v),v=S+1,S=h.nextZero(p,v),h.readUTF8(p,v,S-v),F=U-((v=S+1)-m),$==0?N=h.readUTF8(p,v,F):(A=r(p.slice(v,v+F)),N=h.readUTF8(A,0,A.length)),y.tabs[j][P]=N}else if(j=="PLTE")y.tabs[j]=h.readBytes(p,m,U);else if(j=="hIST"){const $=y.tabs.PLTE.length/3;for(y.tabs[j]=[],T=0;T<$;T++)y.tabs[j].push(b(p,m+2*T))}else if(j=="tRNS")y.ctype==3?y.tabs[j]=h.readBytes(p,m,U):y.ctype==0?y.tabs[j]=b(p,m):y.ctype==2&&(y.tabs[j]=[b(p,m),b(p,m+2),b(p,m+4)]);else if(j=="gAMA")y.tabs[j]=h.readUint(p,m)/1e5;else if(j=="sRGB")y.tabs[j]=p[m];else if(j=="bKGD")y.ctype==0||y.ctype==4?y.tabs[j]=[b(p,m)]:y.ctype==2||y.ctype==6?y.tabs[j]=[b(p,m),b(p,m+2),b(p,m+4)]:y.ctype==3&&(y.tabs[j]=p[m]);else if(j=="IEND")break;m+=U,h.readUint(p,m),m+=4}var R;return C!=0&&((R=y.frames[y.frames.length-1]).data=n(y,x.slice(0,C),R.rect.width,R.rect.height)),y.data=n(y,g,y.width,y.height),delete y.compress,delete y.interlace,delete y.filter,y},toRGBA8:function(d){const p=d.width,m=d.height;if(d.tabs.acTL==null)return[t(d.data,p,m,d).buffer];const h=[];d.frames[0].data==null&&(d.frames[0].data=d.data);const b=p*m*4,k=new Uint8Array(b),y=new Uint8Array(b),g=new Uint8Array(b);for(let w=0;w<d.frames.length;w++){const C=d.frames[w],_=C.rect.x,T=C.rect.y,v=C.rect.width,S=C.rect.height,P=t(C.data,v,S,d);if(w!=0)for(var x=0;x<b;x++)g[x]=k[x];if(C.blend==0?f(P,v,S,k,p,m,_,T,0):C.blend==1&&f(P,v,S,k,p,m,_,T,1),h.push(k.buffer.slice(0)),C.dispose!=0){if(C.dispose==1)f(y,v,S,k,p,m,_,T,0);else if(C.dispose==2)for(x=0;x<b;x++)k[x]=g[x]}}return h},_paeth:a,_copyTile:f,_bin:e}}();(function(){const{_copyTile:e}=mn,{_bin:t}=mn,n=mn._paeth;var r={table:function(){const v=new Uint32Array(256);for(let S=0;S<256;S++){let P=S;for(let F=0;F<8;F++)1&P?P=3988292384^P>>>1:P>>>=1;v[S]=P}return v}(),update(v,S,P,F){for(let A=0;A<F;A++)v=r.table[255&(v^S[P+A])]^v>>>8;return v},crc:(v,S,P)=>4294967295^r.update(4294967295,v,S,P)};function o(v,S,P,F){S[P]+=v[0]*F>>4,S[P+1]+=v[1]*F>>4,S[P+2]+=v[2]*F>>4,S[P+3]+=v[3]*F>>4}function i(v){return Math.max(0,Math.min(255,v))}function s(v,S){const P=v[0]-S[0],F=v[1]-S[1],A=v[2]-S[2],N=v[3]-S[3];return P*P+F*F+A*A+N*N}function a(v,S,P,F,A,N,R){R==null&&(R=1);const U=F.length,j=[];for(var $=0;$<U;$++){const M=F[$];j.push([M>>>0&255,M>>>8&255,M>>>16&255,M>>>24&255])}for($=0;$<U;$++){let M=4294967295;for(var I=0,z=0;z<U;z++){var L=s(j[$],j[z]);z!=$&&L<M&&(M=L,I=z)}}const Q=new Uint32Array(A.buffer),V=new Int16Array(S*P*4),K=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for($=0;$<K.length;$++)K[$]=255*((K[$]+.5)/16-.5);for(let M=0;M<P;M++)for(let H=0;H<S;H++){var G;$=4*(M*S+H),R!=2?G=[i(v[$]+V[$]),i(v[$+1]+V[$+1]),i(v[$+2]+V[$+2]),i(v[$+3]+V[$+3])]:(L=K[4*(3&M)+(3&H)],G=[i(v[$]+L),i(v[$+1]+L),i(v[$+2]+L),i(v[$+3]+L)]),I=0;let te=16777215;for(z=0;z<U;z++){const le=s(G,j[z]);le<te&&(te=le,I=z)}const ee=j[I],ie=[G[0]-ee[0],G[1]-ee[1],G[2]-ee[2],G[3]-ee[3]];R==1&&(H!=S-1&&o(ie,V,$+4,7),M!=P-1&&(H!=0&&o(ie,V,$+4*S-4,3),o(ie,V,$+4*S,5),H!=S-1&&o(ie,V,$+4*S+4,1))),N[$>>2]=I,Q[$>>2]=F[I]}}function c(v,S,P,F,A){A==null&&(A={});const{crc:N}=r,R=t.writeUint,U=t.writeUshort,j=t.writeASCII;let $=8;const I=v.frames.length>1;let z,L=!1,Q=33+(I?20:0);if(A.sRGB!=null&&(Q+=13),A.pHYs!=null&&(Q+=21),A.iCCP!=null&&(z=pako.deflate(A.iCCP),Q+=21+z.length+4),v.ctype==3){for(var V=v.plte.length,K=0;K<V;K++)v.plte[K]>>>24!=255&&(L=!0);Q+=8+3*V+4+(L?8+1*V+4:0)}for(var G=0;G<v.frames.length;G++)I&&(Q+=38),Q+=(ee=v.frames[G]).cimg.length+12,G!=0&&(Q+=4);Q+=12;const M=new Uint8Array(Q),H=[137,80,78,71,13,10,26,10];for(K=0;K<8;K++)M[K]=H[K];if(R(M,$,13),$+=4,j(M,$,"IHDR"),$+=4,R(M,$,S),$+=4,R(M,$,P),$+=4,M[$]=v.depth,$++,M[$]=v.ctype,$++,M[$]=0,$++,M[$]=0,$++,M[$]=0,$++,R(M,$,N(M,$-17,17)),$+=4,A.sRGB!=null&&(R(M,$,1),$+=4,j(M,$,"sRGB"),$+=4,M[$]=A.sRGB,$++,R(M,$,N(M,$-5,5)),$+=4),A.iCCP!=null){const ie=13+z.length;R(M,$,ie),$+=4,j(M,$,"iCCP"),$+=4,j(M,$,"ICC profile"),$+=11,$+=2,M.set(z,$),$+=z.length,R(M,$,N(M,$-(ie+4),ie+4)),$+=4}if(A.pHYs!=null&&(R(M,$,9),$+=4,j(M,$,"pHYs"),$+=4,R(M,$,A.pHYs[0]),$+=4,R(M,$,A.pHYs[1]),$+=4,M[$]=A.pHYs[2],$++,R(M,$,N(M,$-13,13)),$+=4),I&&(R(M,$,8),$+=4,j(M,$,"acTL"),$+=4,R(M,$,v.frames.length),$+=4,R(M,$,A.loop!=null?A.loop:0),$+=4,R(M,$,N(M,$-12,12)),$+=4),v.ctype==3){for(R(M,$,3*(V=v.plte.length)),$+=4,j(M,$,"PLTE"),$+=4,K=0;K<V;K++){const ie=3*K,le=v.plte[K],de=255&le,$e=le>>>8&255,Me=le>>>16&255;M[$+ie+0]=de,M[$+ie+1]=$e,M[$+ie+2]=Me}if($+=3*V,R(M,$,N(M,$-3*V-4,3*V+4)),$+=4,L){for(R(M,$,V),$+=4,j(M,$,"tRNS"),$+=4,K=0;K<V;K++)M[$+K]=v.plte[K]>>>24&255;$+=V,R(M,$,N(M,$-V-4,V+4)),$+=4}}let te=0;for(G=0;G<v.frames.length;G++){var ee=v.frames[G];I&&(R(M,$,26),$+=4,j(M,$,"fcTL"),$+=4,R(M,$,te++),$+=4,R(M,$,ee.rect.width),$+=4,R(M,$,ee.rect.height),$+=4,R(M,$,ee.rect.x),$+=4,R(M,$,ee.rect.y),$+=4,U(M,$,F[G]),$+=2,U(M,$,1e3),$+=2,M[$]=ee.dispose,$++,M[$]=ee.blend,$++,R(M,$,N(M,$-30,30)),$+=4);const ie=ee.cimg;R(M,$,(V=ie.length)+(G==0?0:4)),$+=4;const le=$;j(M,$,G==0?"IDAT":"fdAT"),$+=4,G!=0&&(R(M,$,te++),$+=4),M.set(ie,$),$+=V,R(M,$,N(M,le,$-le)),$+=4}return R(M,$,0),$+=4,j(M,$,"IEND"),$+=4,R(M,$,N(M,$-4,4)),$+=4,M.buffer}function f(v,S,P){for(let F=0;F<v.frames.length;F++){const A=v.frames[F];A.rect.width;const N=A.rect.height,R=new Uint8Array(N*A.bpl+N);A.cimg=m(A.img,N,A.bpp,A.bpl,R,S,P)}}function u(v,S,P,F,A){const N=A[0],R=A[1],U=A[2],j=A[3],$=A[4],I=A[5];let z=6,L=8,Q=255;for(var V=0;V<v.length;V++){const Be=new Uint8Array(v[V]);for(var K=Be.length,G=0;G<K;G+=4)Q&=Be[G+3]}const M=Q!=255,H=function(fe,ve,Ke,Ye,O,B){const W=[];for(var Y=0;Y<fe.length;Y++){const ke=new Uint8Array(fe[Y]),tt=new Uint32Array(ke.buffer);var J;let Ge=0,fn=0,zt=ve,pn=Ke,yi=Ye?1:0;if(Y!=0){const Qs=B||Ye||Y==1||W[Y-2].dispose!=0?1:2;let xi=0,vi=1e9;for(let bi=0;bi<Qs;bi++){var X=new Uint8Array(fe[Y-1-bi]);const xv=new Uint32Array(fe[Y-1-bi]);let Zn=ve,er=Ke,ho=-1,wi=-1;for(let Rr=0;Rr<Ke;Rr++)for(let zr=0;zr<ve;zr++)tt[ue=Rr*ve+zr]!=xv[ue]&&(zr<Zn&&(Zn=zr),zr>ho&&(ho=zr),Rr<er&&(er=Rr),Rr>wi&&(wi=Rr));ho==-1&&(Zn=er=ho=wi=0),O&&((1&Zn)==1&&Zn--,(1&er)==1&&er--);const Fp=(ho-Zn+1)*(wi-er+1);Fp<vi&&(vi=Fp,xi=bi,Ge=Zn,fn=er,zt=ho-Zn+1,pn=wi-er+1)}X=new Uint8Array(fe[Y-1-xi]),xi==1&&(W[Y-1].dispose=2),J=new Uint8Array(zt*pn*4),e(X,ve,Ke,J,zt,pn,-Ge,-fn,0),yi=e(ke,ve,Ke,J,zt,pn,-Ge,-fn,3)?1:0,yi==1?p(ke,ve,Ke,J,{x:Ge,y:fn,width:zt,height:pn}):e(ke,ve,Ke,J,zt,pn,-Ge,-fn,0)}else J=ke.slice(0);W.push({rect:{x:Ge,y:fn,width:zt,height:pn},img:J,blend:yi,dispose:0})}if(Ye)for(Y=0;Y<W.length;Y++){if((ge=W[Y]).blend==1)continue;const ke=ge.rect,tt=W[Y-1].rect,Ge=Math.min(ke.x,tt.x),fn=Math.min(ke.y,tt.y),zt={x:Ge,y:fn,width:Math.max(ke.x+ke.width,tt.x+tt.width)-Ge,height:Math.max(ke.y+ke.height,tt.y+tt.height)-fn};W[Y-1].dispose=1,Y-1!=0&&d(fe,ve,Ke,W,Y-1,zt,O),d(fe,ve,Ke,W,Y,zt,O)}let oe=0;if(fe.length!=1)for(var ue=0;ue<W.length;ue++){var ge;oe+=(ge=W[ue]).rect.width*ge.rect.height}return W}(v,S,P,N,R,U),te={},ee=[],ie=[];if(F!=0){const Be=[];for(G=0;G<H.length;G++)Be.push(H[G].img.buffer);const fe=function(O){let B=0;for(var W=0;W<O.length;W++)B+=O[W].byteLength;const Y=new Uint8Array(B);let J=0;for(W=0;W<O.length;W++){const X=new Uint8Array(O[W]),oe=X.length;for(let ue=0;ue<oe;ue+=4){let ge=X[ue],ke=X[ue+1],tt=X[ue+2];const Ge=X[ue+3];Ge==0&&(ge=ke=tt=0),Y[J+ue]=ge,Y[J+ue+1]=ke,Y[J+ue+2]=tt,Y[J+ue+3]=Ge}J+=oe}return Y.buffer}(Be),ve=b(fe,F);for(G=0;G<ve.plte.length;G++)ee.push(ve.plte[G].est.rgba);let Ke=0;for(G=0;G<H.length;G++){const Ye=(de=H[G]).img.length;var le=new Uint8Array(ve.inds.buffer,Ke>>2,Ye>>2);ie.push(le);const O=new Uint8Array(ve.abuf,Ke,Ye);I&&a(de.img,de.rect.width,de.rect.height,ee,O,le),de.img.set(O),Ke+=Ye}}else for(V=0;V<H.length;V++){var de=H[V];const Be=new Uint32Array(de.img.buffer);var $e=de.rect.width;for(K=Be.length,le=new Uint8Array(K),ie.push(le),G=0;G<K;G++){const fe=Be[G];if(G!=0&&fe==Be[G-1])le[G]=le[G-1];else if(G>$e&&fe==Be[G-$e])le[G]=le[G-$e];else{let ve=te[fe];if(ve==null&&(te[fe]=ve=ee.length,ee.push(fe),ee.length>=300))break;le[G]=ve}}}const Me=ee.length;for(Me<=256&&$==0&&(L=Me<=2?1:Me<=4?2:Me<=16?4:8,L=Math.max(L,j)),V=0;V<H.length;V++){(de=H[V]).rect.x,de.rect.y,$e=de.rect.width;const Be=de.rect.height;let fe=de.img;new Uint32Array(fe.buffer);let ve=4*$e,Ke=4;if(Me<=256&&$==0){ve=Math.ceil(L*$e/8);var ft=new Uint8Array(ve*Be);const Ye=ie[V];for(let O=0;O<Be;O++){G=O*ve;const B=O*$e;if(L==8)for(var je=0;je<$e;je++)ft[G+je]=Ye[B+je];else if(L==4)for(je=0;je<$e;je++)ft[G+(je>>1)]|=Ye[B+je]<<4-4*(1&je);else if(L==2)for(je=0;je<$e;je++)ft[G+(je>>2)]|=Ye[B+je]<<6-2*(3&je);else if(L==1)for(je=0;je<$e;je++)ft[G+(je>>3)]|=Ye[B+je]<<7-1*(7&je)}fe=ft,z=3,Ke=1}else if(M==0&&H.length==1){ft=new Uint8Array($e*Be*3);const Ye=$e*Be;for(G=0;G<Ye;G++){const O=3*G,B=4*G;ft[O]=fe[B],ft[O+1]=fe[B+1],ft[O+2]=fe[B+2]}fe=ft,z=2,Ke=3,ve=3*$e}de.img=fe,de.bpl=ve,de.bpp=Ke}return{ctype:z,depth:L,plte:ee,frames:H}}function d(v,S,P,F,A,N,R){const U=Uint8Array,j=Uint32Array,$=new U(v[A-1]),I=new j(v[A-1]),z=A+1<v.length?new U(v[A+1]):null,L=new U(v[A]),Q=new j(L.buffer);let V=S,K=P,G=-1,M=-1;for(let te=0;te<N.height;te++)for(let ee=0;ee<N.width;ee++){const ie=N.x+ee,le=N.y+te,de=le*S+ie,$e=Q[de];$e==0||F[A-1].dispose==0&&I[de]==$e&&(z==null||z[4*de+3]!=0)||(ie<V&&(V=ie),ie>G&&(G=ie),le<K&&(K=le),le>M&&(M=le))}G==-1&&(V=K=G=M=0),R&&((1&V)==1&&V--,(1&K)==1&&K--),N={x:V,y:K,width:G-V+1,height:M-K+1};const H=F[A];H.rect=N,H.blend=1,H.img=new Uint8Array(N.width*N.height*4),F[A-1].dispose==0?(e($,S,P,H.img,N.width,N.height,-N.x,-N.y,0),p(L,S,P,H.img,N)):e(L,S,P,H.img,N.width,N.height,-N.x,-N.y,0)}function p(v,S,P,F,A){e(v,S,P,F,A.width,A.height,-A.x,-A.y,2)}function m(v,S,P,F,A,N,R){const U=[];let j,$=[0,1,2,3,4];N!=-1?$=[N]:(S*F>5e5||P==1)&&($=[0]),R&&(j={level:0});const I=Z4;for(var z=0;z<$.length;z++){for(let V=0;V<S;V++)h(A,v,V,F,P,$[z]);U.push(I.deflate(A,j))}let L,Q=1e9;for(z=0;z<U.length;z++)U[z].length<Q&&(L=z,Q=U[z].length);return U[L]}function h(v,S,P,F,A,N){const R=P*F;let U=R+P;if(v[U]=N,U++,N==0)if(F<500)for(var j=0;j<F;j++)v[U+j]=S[R+j];else v.set(new Uint8Array(S.buffer,R,F),U);else if(N==1){for(j=0;j<A;j++)v[U+j]=S[R+j];for(j=A;j<F;j++)v[U+j]=S[R+j]-S[R+j-A]+256&255}else if(P==0){for(j=0;j<A;j++)v[U+j]=S[R+j];if(N==2)for(j=A;j<F;j++)v[U+j]=S[R+j];if(N==3)for(j=A;j<F;j++)v[U+j]=S[R+j]-(S[R+j-A]>>1)+256&255;if(N==4)for(j=A;j<F;j++)v[U+j]=S[R+j]-n(S[R+j-A],0,0)+256&255}else{if(N==2)for(j=0;j<F;j++)v[U+j]=S[R+j]+256-S[R+j-F]&255;if(N==3){for(j=0;j<A;j++)v[U+j]=S[R+j]+256-(S[R+j-F]>>1)&255;for(j=A;j<F;j++)v[U+j]=S[R+j]+256-(S[R+j-F]+S[R+j-A]>>1)&255}if(N==4){for(j=0;j<A;j++)v[U+j]=S[R+j]+256-n(0,S[R+j-F],0)&255;for(j=A;j<F;j++)v[U+j]=S[R+j]+256-n(S[R+j-A],S[R+j-F],S[R+j-A-F])&255}}}function b(v,S){const P=new Uint8Array(v),F=P.slice(0),A=new Uint32Array(F.buffer),N=k(F,S),R=N[0],U=N[1],j=P.length,$=new Uint8Array(j>>2);let I;if(P.length<2e7)for(var z=0;z<j;z+=4)I=y(R,L=P[z]*(1/255),Q=P[z+1]*(1/255),V=P[z+2]*(1/255),K=P[z+3]*(1/255)),$[z>>2]=I.ind,A[z>>2]=I.est.rgba;else for(z=0;z<j;z+=4){var L=P[z]*.00392156862745098,Q=P[z+1]*(1/255),V=P[z+2]*(1/255),K=P[z+3]*(1/255);for(I=R;I.left;)I=g(I.est,L,Q,V,K)<=0?I.left:I.right;$[z>>2]=I.ind,A[z>>2]=I.est.rgba}return{abuf:F.buffer,inds:$,plte:U}}function k(v,S,P){P==null&&(P=1e-4);const F=new Uint32Array(v.buffer),A={i0:0,i1:v.length,bst:null,est:null,tdst:0,left:null,right:null};A.bst=C(v,A.i0,A.i1),A.est=_(A.bst);const N=[A];for(;N.length<S;){let U=0,j=0;for(var R=0;R<N.length;R++)N[R].est.L>U&&(U=N[R].est.L,j=R);if(U<P)break;const $=N[j],I=x(v,F,$.i0,$.i1,$.est.e,$.est.eMq255);if($.i0>=I||$.i1<=I){$.est.L=0;continue}const z={i0:$.i0,i1:I,bst:null,est:null,tdst:0,left:null,right:null};z.bst=C(v,z.i0,z.i1),z.est=_(z.bst);const L={i0:I,i1:$.i1,bst:null,est:null,tdst:0,left:null,right:null};for(L.bst={R:[],m:[],N:$.bst.N-z.bst.N},R=0;R<16;R++)L.bst.R[R]=$.bst.R[R]-z.bst.R[R];for(R=0;R<4;R++)L.bst.m[R]=$.bst.m[R]-z.bst.m[R];L.est=_(L.bst),$.left=z,$.right=L,N[j]=z,N.push(L)}for(N.sort((U,j)=>j.bst.N-U.bst.N),R=0;R<N.length;R++)N[R].ind=R;return[A,N]}function y(v,S,P,F,A){if(v.left==null)return v.tdst=function(z,L,Q,V,K){const G=L-z[0],M=Q-z[1],H=V-z[2],te=K-z[3];return G*G+M*M+H*H+te*te}(v.est.q,S,P,F,A),v;const N=g(v.est,S,P,F,A);let R=v.left,U=v.right;N>0&&(R=v.right,U=v.left);const j=y(R,S,P,F,A);if(j.tdst<=N*N)return j;const $=y(U,S,P,F,A);return $.tdst<j.tdst?$:j}function g(v,S,P,F,A){const{e:N}=v;return N[0]*S+N[1]*P+N[2]*F+N[3]*A-v.eMq}function x(v,S,P,F,A,N){for(F-=4;P<F;){for(;w(v,P,A)<=N;)P+=4;for(;w(v,F,A)>N;)F-=4;if(P>=F)break;const R=S[P>>2];S[P>>2]=S[F>>2],S[F>>2]=R,P+=4,F-=4}for(;w(v,P,A)>N;)P-=4;return P+4}function w(v,S,P){return v[S]*P[0]+v[S+1]*P[1]+v[S+2]*P[2]+v[S+3]*P[3]}function C(v,S,P){const F=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],A=[0,0,0,0],N=P-S>>2;for(let R=S;R<P;R+=4){const U=v[R]*.00392156862745098,j=v[R+1]*(1/255),$=v[R+2]*(1/255),I=v[R+3]*(1/255);A[0]+=U,A[1]+=j,A[2]+=$,A[3]+=I,F[0]+=U*U,F[1]+=U*j,F[2]+=U*$,F[3]+=U*I,F[5]+=j*j,F[6]+=j*$,F[7]+=j*I,F[10]+=$*$,F[11]+=$*I,F[15]+=I*I}return F[4]=F[1],F[8]=F[2],F[9]=F[6],F[12]=F[3],F[13]=F[7],F[14]=F[11],{R:F,m:A,N}}function _(v){const{R:S}=v,{m:P}=v,{N:F}=v,A=P[0],N=P[1],R=P[2],U=P[3],j=F==0?0:1/F,$=[S[0]-A*A*j,S[1]-A*N*j,S[2]-A*R*j,S[3]-A*U*j,S[4]-N*A*j,S[5]-N*N*j,S[6]-N*R*j,S[7]-N*U*j,S[8]-R*A*j,S[9]-R*N*j,S[10]-R*R*j,S[11]-R*U*j,S[12]-U*A*j,S[13]-U*N*j,S[14]-U*R*j,S[15]-U*U*j],I=$,z=T;let L=[Math.random(),Math.random(),Math.random(),Math.random()],Q=0,V=0;if(F!=0)for(let G=0;G<16&&(L=z.multVec(I,L),V=Math.sqrt(z.dot(L,L)),L=z.sml(1/V,L),!(G!=0&&Math.abs(V-Q)<1e-9));G++)Q=V;const K=[A*j,N*j,R*j,U*j];return{Cov:$,q:K,e:L,L:Q,eMq255:z.dot(z.sml(255,K),L),eMq:z.dot(L,K),rgba:(Math.round(255*K[3])<<24|Math.round(255*K[2])<<16|Math.round(255*K[1])<<8|Math.round(255*K[0])<<0)>>>0}}var T={multVec:(v,S)=>[v[0]*S[0]+v[1]*S[1]+v[2]*S[2]+v[3]*S[3],v[4]*S[0]+v[5]*S[1]+v[6]*S[2]+v[7]*S[3],v[8]*S[0]+v[9]*S[1]+v[10]*S[2]+v[11]*S[3],v[12]*S[0]+v[13]*S[1]+v[14]*S[2]+v[15]*S[3]],dot:(v,S)=>v[0]*S[0]+v[1]*S[1]+v[2]*S[2]+v[3]*S[3],sml:(v,S)=>[v*S[0],v*S[1],v*S[2],v*S[3]]};mn.encode=function(S,P,F,A,N,R,U){A==null&&(A=0),U==null&&(U=!1);const j=u(S,P,F,A,[!1,!1,!1,0,U,!1]);return f(j,-1),c(j,P,F,N,R)},mn.encodeLL=function(S,P,F,A,N,R,U,j){const $={ctype:0+(A==1?0:2)+(N==0?0:4),depth:R,frames:[]},I=(A+N)*R,z=I*P;for(let L=0;L<S.length;L++)$.frames.push({rect:{x:0,y:0,width:P,height:F},img:new Uint8Array(S[L]),blend:0,dispose:1,bpp:Math.ceil(I/8),bpl:Math.ceil(z/8)});return f($,0,!0),c($,P,F,U,j)},mn.encode.compress=u,mn.encode.dither=a,mn.quantize=b,mn.quantize.getKDtree=k,mn.quantize.getNearest=y})();const ov={toArrayBuffer(e,t){const n=e.width,r=e.height,o=n<<2,i=e.getContext("2d").getImageData(0,0,n,r),s=new Uint32Array(i.data.buffer),a=(32*n+31)/32<<2,c=a*r,f=122+c,u=new ArrayBuffer(f),d=new DataView(u),p=1<<20;let m,h,b,k,y=p,g=0,x=0,w=0;function C(v){d.setUint16(x,v,!0),x+=2}function _(v){d.setUint32(x,v,!0),x+=4}function T(v){x+=v}C(19778),_(f),T(4),_(122),_(108),_(n),_(-r>>>0),C(1),C(32),_(3),_(c),_(2835),_(2835),T(8),_(16711680),_(65280),_(255),_(4278190080),_(1466527264),function v(){for(;g<r&&y>0;){for(k=122+g*a,m=0;m<o;)y--,h=s[w++],b=h>>>24,d.setUint32(k+m,h<<8|b),m+=4;g++}w<s.length?(y=p,setTimeout(v,ov._dly)):t(u)}()},toBlob(e,t){this.toArrayBuffer(e,n=>{t(new Blob([n],{type:"image/bmp"}))})},_dly:9};var Lt={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},e3={[Lt.CHROME]:16384,[Lt.FIREFOX]:11180,[Lt.DESKTOP_SAFARI]:16384,[Lt.IE]:8192,[Lt.IOS]:4096,[Lt.ETC]:8192};const jp=typeof window<"u",iv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ml=jp&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),t3=(jp||iv)&&(Ml&&Ml.getOriginalSymbol(window,"File")||typeof File<"u"&&File),sv=(jp||iv)&&(Ml&&Ml.getOriginalSymbol(window,"FileReader")||typeof FileReader<"u"&&FileReader);function Ep(e,t,n=Date.now()){return new Promise(r=>{const o=e.split(","),i=o[0].match(/:(.*?);/)[1],s=globalThis.atob(o[1]);let a=s.length;const c=new Uint8Array(a);for(;a--;)c[a]=s.charCodeAt(a);const f=new Blob([c],{type:i});f.name=t,f.lastModified=n,r(f)})}function av(e){return new Promise((t,n)=>{const r=new sv;r.onload=()=>t(r.result),r.onerror=o=>n(o),r.readAsDataURL(e)})}function lv(e){return new Promise((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=o=>n(o),r.src=e})}function Qr(){if(Qr.cachedResult!==void 0)return Qr.cachedResult;let e=Lt.ETC;const{userAgent:t}=navigator;return/Chrom(e|ium)/i.test(t)?e=Lt.CHROME:/iP(ad|od|hone)/i.test(t)&&/WebKit/i.test(t)?e=Lt.IOS:/Safari/i.test(t)?e=Lt.DESKTOP_SAFARI:/Firefox/i.test(t)?e=Lt.FIREFOX:(/MSIE/i.test(t)||document.documentMode)&&(e=Lt.IE),Qr.cachedResult=e,Qr.cachedResult}function cv(e,t){const n=Qr(),r=e3[n];let o=e,i=t,s=o*i;const a=o>i?i/o:o/i;for(;s>r*r;){const c=(r+o)/2,f=(r+i)/2;c<f?(i=f,o=f*a):(i=c*a,o=c),s=o*i}return{width:o,height:i}}function _c(e,t){let n,r;try{if(n=new OffscreenCanvas(e,t),r=n.getContext("2d"),r===null)throw new Error("getContext of OffscreenCanvas returns null")}catch{n=document.createElement("canvas"),r=n.getContext("2d")}return n.width=e,n.height=t,[n,r]}function uv(e,t){const{width:n,height:r}=cv(e.width,e.height),[o,i]=_c(n,r);return t&&/jpe?g/.test(t)&&(i.fillStyle="white",i.fillRect(0,0,o.width,o.height)),i.drawImage(e,0,0,o.width,o.height),o}function Za(){return Za.cachedResult!==void 0||(Za.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&typeof document<"u"&&"ontouchend"in document),Za.cachedResult}function Bl(e,t={}){return new Promise(function(n,r){let o,i;var s=function(){try{return i=uv(o,t.fileType||e.type),n([o,i])}catch(c){return r(c)}},a=function(c){try{var f=function(u){try{throw u}catch(d){return r(d)}};try{let u;return av(e).then(function(d){try{return u=d,lv(u).then(function(p){try{return o=p,function(){try{return s()}catch(m){return r(m)}}()}catch(m){return f(m)}},f)}catch(p){return f(p)}},f)}catch(u){f(u)}}catch(u){return r(u)}};try{if(Za()||[Lt.DESKTOP_SAFARI,Lt.MOBILE_SAFARI].includes(Qr()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(e).then(function(c){try{return o=c,s()}catch{return a()}},a)}catch{a()}})}function Vl(e,t,n,r,o=1){return new Promise(function(i,s){let a;if(t==="image/png"){let d,p,m;return d=e.getContext("2d"),{data:p}=d.getImageData(0,0,e.width,e.height),m=mn.encode([p.buffer],e.width,e.height,4096*o),a=new Blob([m],{type:t}),a.name=n,a.lastModified=r,c.call(this)}{let d=function(){return c.call(this)};var f=d;if(t==="image/bmp")return new Promise(p=>ov.toBlob(e,p)).then((function(p){try{return a=p,a.name=n,a.lastModified=r,d.call(this)}catch(m){return s(m)}}).bind(this),s);{let p=function(){return d.call(this)};var u=p;if(typeof OffscreenCanvas=="function"&&e instanceof OffscreenCanvas)return e.convertToBlob({type:t,quality:o}).then((function(m){try{return a=m,a.name=n,a.lastModified=r,p.call(this)}catch(h){return s(h)}}).bind(this),s);{let m;return m=e.toDataURL(t,o),Ep(m,n,r).then((function(h){try{return a=h,p.call(this)}catch(b){return s(b)}}).bind(this),s)}}}function c(){return i(a)}})}function Pn(e){e.width=0,e.height=0}function Vo(){return new Promise(function(e,t){let n,r,o,i;return Vo.cachedResult!==void 0?e(Vo.cachedResult):Ep("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then(function(s){try{return n=s,Bl(n).then(function(a){try{return r=a[1],Vl(r,n.type,n.name,n.lastModified).then(function(c){try{return o=c,Pn(r),Bl(o).then(function(f){try{return i=f[0],Vo.cachedResult=i.width===1&&i.height===2,e(Vo.cachedResult)}catch(u){return t(u)}},t)}catch(f){return t(f)}},t)}catch(c){return t(c)}},t)}catch(a){return t(a)}},t)})}function dv(e){return new Promise((t,n)=>{const r=new sv;r.onload=o=>{const i=new DataView(o.target.result);if(i.getUint16(0,!1)!=65496)return t(-2);const s=i.byteLength;let a=2;for(;a<s;){if(i.getUint16(a+2,!1)<=8)return t(-1);const c=i.getUint16(a,!1);if(a+=2,c==65505){if(i.getUint32(a+=2,!1)!=1165519206)return t(-1);const f=i.getUint16(a+=6,!1)==18761;a+=i.getUint32(a+4,f);const u=i.getUint16(a,f);a+=2;for(let d=0;d<u;d++)if(i.getUint16(a+12*d,f)==274)return t(i.getUint16(a+12*d+8,f))}else{if((65280&c)!=65280)break;a+=i.getUint16(a,!1)}}return t(-1)},r.onerror=o=>n(o),r.readAsArrayBuffer(e)})}function fv(e,t){const{width:n}=e,{height:r}=e,{maxWidthOrHeight:o}=t;let i,s=e;return isFinite(o)&&(n>o||r>o)&&([s,i]=_c(n,r),n>r?(s.width=o,s.height=r/n*o):(s.width=n/r*o,s.height=o),i.drawImage(e,0,0,s.width,s.height),Pn(e)),s}function pv(e,t){const{width:n}=e,{height:r}=e,[o,i]=_c(n,r);switch(t>4&&t<9?(o.width=r,o.height=n):(o.width=n,o.height=r),t){case 2:i.transform(-1,0,0,1,n,0);break;case 3:i.transform(-1,0,0,-1,n,r);break;case 4:i.transform(1,0,0,-1,0,r);break;case 5:i.transform(0,1,1,0,0,0);break;case 6:i.transform(0,1,-1,0,r,0);break;case 7:i.transform(0,-1,-1,0,r,n);break;case 8:i.transform(0,-1,1,0,0,n)}return i.drawImage(e,0,0,n,r),Pn(e),o}function kg(e,t,n=0){return new Promise(function(r,o){let i,s,a,c,f,u,d,p,m,h,b,k,y,g,x,w,C,_,T,v;function S(F=5){if(t.signal&&t.signal.aborted)throw t.signal.reason;i+=F,t.onProgress(Math.min(i,100))}function P(F){if(t.signal&&t.signal.aborted)throw t.signal.reason;i=Math.min(Math.max(F,i),100),t.onProgress(i)}return i=n,s=t.maxIteration||10,a=1024*t.maxSizeMB*1024,S(),Bl(e,t).then((function(F){try{return[,c]=F,S(),f=fv(c,t),S(),new Promise(function(A,N){var R;if(!(R=t.exifOrientation))return dv(e).then((function(j){try{return R=j,U.call(this)}catch($){return N($)}}).bind(this),N);function U(){return A(R)}return U.call(this)}).then((function(A){try{return u=A,S(),Vo().then((function(N){try{return d=N?f:pv(f,u),S(),p=t.initialQuality||1,m=t.fileType||e.type,Vl(d,m,e.name,e.lastModified,p).then((function(R){try{{let I=function(){if(s--&&(x>a||x>y)){let L,Q;return L=v?.95*T.width:T.width,Q=v?.95*T.height:T.height,[C,_]=_c(L,Q),_.drawImage(T,0,0,L,Q),p*=m==="image/png"?.85:.95,Vl(C,m,e.name,e.lastModified,p).then(function(V){try{return w=V,Pn(T),T=C,x=w.size,P(Math.min(99,Math.floor((g-x)/(g-a)*100))),I}catch(K){return o(K)}},o)}return[1]},z=function(){return Pn(T),Pn(C),Pn(f),Pn(d),Pn(c),P(100),r(w)};var j=I,$=z;if(h=R,S(),b=h.size>a,k=h.size>e.size,!b&&!k)return P(100),r(h);var U;return y=e.size,g=h.size,x=g,T=d,v=!t.alwaysKeepResolution&&b,(U=(function(L){for(;L;){if(L.then)return void L.then(U,o);try{if(L.pop){if(L.length)return L.pop()?z.call(this):L;L=I}else L=L.call(this)}catch(Q){return o(Q)}}}).bind(this))(I)}}catch(I){return o(I)}}).bind(this),o)}catch(R){return o(R)}}).bind(this),o)}catch(N){return o(N)}}).bind(this),o)}catch(A){return o(A)}}).bind(this),o)})}const n3=`
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
`;let ku;function r3(e,t){return new Promise((n,r)=>{ku||(ku=function(s){const a=[];return a.push(s),URL.createObjectURL(new Blob(a))}(n3));const o=new Worker(ku);o.addEventListener("message",function(s){if(t.signal&&t.signal.aborted)o.terminate();else if(s.data.progress===void 0){if(s.data.error)return r(new Error(s.data.error)),void o.terminate();n(s.data.file),o.terminate()}else t.onProgress(s.data.progress)}),o.addEventListener("error",r),t.signal&&t.signal.addEventListener("abort",()=>{r(t.signal.reason),o.terminate()}),o.postMessage({file:e,imageCompressionLibUrl:t.libURL,options:{...t,onProgress:void 0,signal:void 0}})})}function $t(e,t){return new Promise(function(n,r){let o,i,s,a,c,f;if(o={...t},s=0,{onProgress:a}=o,o.maxSizeMB=o.maxSizeMB||Number.POSITIVE_INFINITY,c=typeof o.useWebWorker!="boolean"||o.useWebWorker,delete o.useWebWorker,o.onProgress=m=>{s=m,typeof a=="function"&&a(s)},!(e instanceof Blob||e instanceof t3))return r(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(e.type))return r(new Error("The file given is not an image"));if(f=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,!c||typeof Worker!="function"||f)return kg(e,o).then((function(m){try{return i=m,p.call(this)}catch(h){return r(h)}}).bind(this),r);var u=(function(){try{return p.call(this)}catch(m){return r(m)}}).bind(this),d=function(m){try{return kg(e,o).then(function(h){try{return i=h,u()}catch(b){return r(b)}},r)}catch(h){return r(h)}};try{return o.libURL=o.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",r3(e,o).then(function(m){try{return i=m,u()}catch{return d()}},d)}catch{d()}function p(){try{i.name=e.name,i.lastModified=e.lastModified}catch{}try{o.preserveExif&&e.type==="image/jpeg"&&(!o.fileType||o.fileType&&o.fileType===e.type)&&(i=rv(e,i))}catch{}return n(i)}})}$t.getDataUrlFromFile=av,$t.getFilefromDataUrl=Ep,$t.loadImage=lv,$t.drawImageInCanvas=uv,$t.drawFileInCanvas=Bl,$t.canvasToFile=Vl,$t.getExifOrientation=dv,$t.handleMaxWidthOrHeight=fv,$t.followExifOrientation=pv,$t.cleanupCanvasMemory=Pn,$t.isAutoOrientationInBrowser=Vo,$t.approximateBelowMaximumCanvasSizeOfBrowser=cv,$t.copyExifWithoutOrientation=rv,$t.getBrowserName=Qr,$t.version="2.0.2";const o3=dt`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,i3=dt`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,hv=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px;
  animation: ${o3} 0.3s ease both;
`,mv=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,s3=E.button`
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
`,gv=E.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,a3=E.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,l3=E.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,Co=E.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Oi=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Ni=E.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,Ii=E.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,el=E.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Sg=E.div`
  grid-column: 1 / -1;
`,Oe=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,He=E.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Cp=({theme:e,$hasError:t})=>`
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
`,ht=E.input`
  ${({theme:e,$hasError:t})=>Cp({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,ja=E.select`
  ${({theme:e,$hasError:t})=>Cp({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,c3=E.textarea`
  ${({theme:e,$hasError:t})=>Cp({theme:e,$hasError:t})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,qt=E.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,Fo=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,u3=E.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,d3=E.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,f3=E.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[5]};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,_g=E.button`
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
`,p3=E.div`
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
`,h3=E.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,m3=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
`,g3=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`,y3=E.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,x3=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,v3=E.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background-color: ${({theme:e})=>e.colors.primary[100]};
  color: ${({theme:e})=>e.colors.primary[700]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 11px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,b3=E.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,w3=E.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,$3=E.div`
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
`,k3=E.div`
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
`,S3=E.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,_3=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,j3=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.brand.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,jg=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-top: ${({theme:e})=>e.spacing[4]};
`,Eg=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
`,Cg=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.brand.primary};
`,E3=E.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,C3=E.div`
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
`,F3=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,T3=E.label`
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
`,P3=E.div`
  color: ${({theme:e,$hasFile:t})=>t?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,A3=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,R3=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,z3=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,O3=E.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,N3=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,I3=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,L3=E.button`
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
`,D3=E.div`
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
`,U3=E.button`
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
`,M3=E.button`
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
`,Su=E.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,nr=E.div`
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
  animation: ${i3} 1.4s ease infinite;
`,Fg=E(Co)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Tg=E.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`,Pg=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,Ag=E.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,B3=E.div`
  flex: 1;
  height: 6px;
  background-color: ${({theme:e})=>e.colors.neutral[100]};
  border-radius: 99px;
  overflow: hidden;
`,V3=E.div`
  height: 100%;
  width: ${({$percent:e})=>e??0}%;
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.primary[500]},
    ${({theme:e})=>e.colors.primary[400]}
  );
  border-radius: 99px;
  transition: width 300ms ease;
`,H3=E.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.muted};
  white-space: nowrap;
  min-width: 32px;
  text-align: right;
`;let Li=null,Di=null,Ui=null;const W3=Sp({corporate_name:pe().required("A razão social é obrigatória.").max(200,"Razão social deve ter no máximo 200 caracteres."),cnpj:pe().required("O CNPJ é obrigatório.").transform(e=>(e==null?void 0:e.replace(/\D/g,""))||"").test("cnpj-valido","CNPJ deve ter 14 dígitos.",e=>!e||e.length===14),email:pe().required("O e-mail é obrigatório.").nullable().transform(e=>e||null).email("Informe um e-mail válido."),state_registration:pe().nullable().transform(e=>e||null).max(15,"Inscrição estadual deve ter no máximo 15 caracteres."),trade_name:pe().nullable().transform(e=>e||null).max(200,"Nome fantasia deve ter no máximo 200 caracteres."),phone:pe().nullable().transform(e=>e||null).max(20,"Telefone deve ter no máximo 20 caracteres."),benefit_type:pe().required("O tipo de benefício é obrigatório.").oneOf(["food","meal","both"],"Tipo inválido."),notes:pe().nullable().transform(e=>e||null),partner_id:pe().nullable().transform(e=>e||null),address_street:pe().nullable().transform(e=>e||null).max(255,"Logradouro deve ter no máximo 255 caracteres."),address_number:pe().nullable().transform(e=>e||null).max(10,"Número deve ter no máximo 10 caracteres."),address_complement:pe().nullable().transform(e=>e||null).max(100,"Complemento deve ter no máximo 100 caracteres."),address_neighborhood:pe().nullable().transform(e=>e||null).max(100,"Bairro deve ter no máximo 100 caracteres."),address_city:pe().nullable().transform(e=>e||null).max(100,"Cidade deve ter no máximo 100 caracteres."),address_state:pe().nullable().transform(e=>e||null).max(2,"UF deve ter 2 caracteres."),address_zip:pe().nullable().transform(e=>e||null).test("cep-valido","CEP inválido. Use o formato 00000-000.",e=>e?e.replace(/\D/g,"").length===8:!0),bank_bank_name:pe().nullable().transform(e=>e||null).max(100,"Nome do banco deve ter no máximo 100 caracteres."),bank_agency:pe().max(10,"Agência deve ter no máximo 10 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Agência é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_agency_digit:pe().nullable().transform(e=>e||null).max(2,"Dígito deve ter no máximo 2 caracteres."),bank_account:pe().max(20,"Conta deve ter no máximo 20 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Conta é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_account_digit:pe().nullable().transform(e=>e||null).max(2,"Dígito deve ter no máximo 2 caracteres."),bank_account_type:pe().when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Tipo é obrigatório.").oneOf(["checking","savings"],"Tipo inválido."),otherwise:e=>e.nullable().transform(t=>t||null)})}),q3=[{key:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",fieldName:"contrato"},{key:"proof_of_address",type:"proof_of_address",label:"Comprovante de Endereço",fieldName:"documentos",docIndex:0},{key:"bank_account_proof",type:"bank_account_proof",label:"Comprovante Bancário",fieldName:"documentos",docIndex:1},{key:"card_machine_proof",type:"card_machine_proof",label:"Comprovante de Maquininha",fieldName:"documentos",docIndex:2}],G3=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],Q3=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],K3=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],Y3=async e=>{if(!e.type.startsWith("image/"))return e;try{const t=await $t(e,{maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0,fileType:e.type});return new File([t],e.name,{type:e.type})}catch{return e}},X3=(e="")=>{const t=e.replace(/\D/g,"").slice(0,14);return t.length<=2?t:t.length<=5?`${t.slice(0,2)}.${t.slice(2)}`:t.length<=8?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5)}`:t.length<=12?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8)}`:`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8,12)}-${t.slice(12)}`},J3=(e="")=>{const t=e.replace(/\D/g,"").slice(0,11);return t.length<=2?`(${t}`:t.length<=6?`(${t.slice(0,2)}) ${t.slice(2)}`:t.length<=10?`(${t.slice(0,2)}) ${t.slice(2,6)}-${t.slice(6)}`:`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7)}`},Z3=(e="")=>{const t=e.replace(/\D/g,"").slice(0,8);return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5)}`},_u=(e="")=>e.replace(/\D/g,""),Ea=(e=0)=>Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),eC=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function tC(){const e=t=>Array.from({length:t}).map((n,r)=>l.jsxs(Oe,{children:[l.jsx(nr,{$w:"45%",$h:"11px"}),l.jsx(nr,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},r));return l.jsxs(hv,{children:[l.jsxs(mv,{children:[l.jsx(nr,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),l.jsxs(gv,{children:[l.jsx(nr,{$w:"180px",$h:"28px"}),l.jsx(nr,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]}),l.jsxs(Fg,{children:[l.jsx(nr,{$w:"35%",$h:"20px"}),l.jsx(Tg,{}),l.jsx(el,{children:e(6)})]}),l.jsxs(Fg,{children:[l.jsx(nr,{$w:"40%",$h:"20px"}),l.jsx(Tg,{}),l.jsx(nr,{$h:"120px",style:{borderRadius:"8px"}})]})]})}function nC({slot:e,selectedFile:t,onFileSelect:n,onClearFile:r,disabled:o}){const i=D.useRef(null),s=!!t;return l.jsxs(C3,{$hasFile:s,children:[l.jsx(F3,{children:e.label}),s&&l.jsxs(z3,{children:[l.jsx(Vd,{size:16,style:{color:"#B45A14",flexShrink:0}}),l.jsxs(O3,{children:[l.jsx(N3,{children:t.name}),l.jsxs(I3,{children:[eC(t.size)," · Será comprimido ao enviar"]})]}),l.jsx(L3,{type:"button",onClick:()=>r(e.key),disabled:o,children:l.jsx(Sx,{size:13})})]}),l.jsxs(T3,{htmlFor:`doc-input-${e.key}`,children:[l.jsx(P3,{$hasFile:s,children:l.jsx(_x,{size:22})}),l.jsx(A3,{children:s?"Trocar arquivo":"Selecionar arquivo"}),l.jsx(R3,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),l.jsx("input",{ref:i,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:o,onChange:a=>{var f;const c=(f=a.target.files)==null?void 0:f[0];if(c){if(c.size>3*1024*1024){ae.error("Arquivo muito grande. O limite é 3 MB.");return}n(e.key,c),a.target.value=""}}}),l.jsx(Fo,{children:"Imagens serão comprimidas automaticamente antes do envio."})]})}function rC(){const e=Jn(),[t,n]=D.useState([]),[r,o]=D.useState([]),[i,s]=D.useState([]),[a,c]=D.useState(!0),[f,u]=D.useState(!1),[d,p]=D.useState(0),[m,h]=D.useState(""),[b,k]=D.useState("plan"),[y,g]=D.useState(""),[x,w]=D.useState([]),[C,_]=D.useState({}),[T,v]=D.useState(""),S=D.useRef(null),{register:P,handleSubmit:F,setValue:A,watch:N,formState:{errors:R}}=Sc({resolver:Ux(W3),defaultValues:{corporate_name:"",cnpj:"",email:"",state_registration:"",trade_name:"",phone:"",benefit_type:"food",notes:"",partner_id:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",bank_bank_name:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}}),j=!!N("bank_bank_name");D.useEffect(()=>{(async()=>{c(!0);try{await Promise.all([!Li||Li.length===0?qe.get("/plans?limit=100").then(({data:te})=>{Li=te.data??[]}).catch(()=>{ae.error("Erro ao carregar planos."),Li=[]}):Promise.resolve(),!Di||Di.length===0?qe.get("/flags?limit=100").then(({data:te})=>{Di=te.data??[]}).catch(()=>{ae.error("Erro ao carregar bandeiras."),Di=[]}):Promise.resolve(),!Ui||Ui.length===0?qe.get("/users?role=partner&limit=100").then(({data:te})=>{Ui=te.data??[]}).catch(()=>{Ui=[]}):Promise.resolve()])}finally{n(Li??[]),o(Di??[]),s(Ui??[]),c(!1)}})()},[]);const $=(H,te)=>{_(ee=>({...ee,[H]:te}))},I=H=>{_(te=>{const ee={...te};return delete ee[H],ee})},z=H=>{const te=H.target.value;v(X3(te)),S.current&&clearTimeout(S.current),S.current=setTimeout(()=>{A("cnpj",_u(te),{shouldValidate:!0})},400)},Q=r.filter(H=>x.includes(H.id)).reduce((H,te)=>H+parseFloat(te.price||0),0),V=t.find(H=>H.id===y),K=async H=>{var te,ee,ie,le;if(b==="plan"&&!y){ae.error("Selecione um plano para continuar.");return}if(b==="individual"&&x.length===0){ae.error("Selecione ao menos uma bandeira.");return}u(!0),p(0),h("compressing");try{const de=Object.keys(C).length>0,$e={};if(de){const fe=Object.entries(C);for(let ve=0;ve<fe.length;ve++){const[Ke,Ye]=fe[ve];$e[Ke]=await Y3(Ye),p(Math.round((ve+1)/fe.length*20))}}h("uploading");const Me={corporate_name:H.corporate_name,cnpj:_u(H.cnpj||T),benefit_type:H.benefit_type,trade_name:H.trade_name||void 0,email:H.email||void 0,state_registration:H.state_registration||void 0,phone:_u(H.phone)||void 0,notes:H.notes||void 0,partner_id:H.partner_id||void 0,address_street:H.address_street||void 0,address_number:H.address_number||void 0,address_complement:H.address_complement||void 0,address_neighborhood:H.address_neighborhood||void 0,address_city:H.address_city||void 0,address_state:H.address_state||void 0,address_zip:H.address_zip||void 0,...b==="plan"?{plan_id:y}:{flag_ids:x},...j?{bank_name:H.bank_bank_name,agency:H.bank_agency,agency_digit:H.bank_agency_digit||void 0,account:H.bank_account,account_digit:H.bank_account_digit||void 0,account_type:H.bank_account_type}:{}};Object.keys(Me).forEach(fe=>Me[fe]===void 0&&delete Me[fe]);const ft=new FormData;ft.append("data",JSON.stringify(Me)),$e.contrato&&ft.append("contrato",$e.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(fe=>{$e[fe]&&ft.append("documentos",$e[fe])});const{data:je}=await sp.post("/onboarding",ft,{onUploadProgress:fe=>{const ve=Math.round(fe.loaded/(fe.total||1)*70);p(20+ve),fe.loaded>=fe.total&&h("processing")}});p(100),ae.success(`Cliente cadastrado! Protocolo: ${((ee=(te=je.data)==null?void 0:te.client)==null?void 0:ee.protocol)??""}`,{autoClose:5e3});const Be=(le=(ie=je.data)==null?void 0:ie.client)==null?void 0:le.id;e(Be?`/clientes/${Be}`:"/clientes",{replace:!0})}catch(de){p(0),h(""),ae.error(Zt(de,"Erro ao cadastrar cliente."))}finally{u(!1)}},G=()=>f?m==="compressing"?l.jsxs(l.Fragment,{children:[l.jsx(Su,{}),"Comprimindo imagens…"]}):m==="processing"?l.jsxs(l.Fragment,{children:[l.jsx(Su,{}),"Processando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(Su,{}),"Enviando… ",d,"%"]}):l.jsxs(l.Fragment,{children:[l.jsx(wx,{size:15}),"Cadastrar Cliente"]});if(a)return l.jsx(tC,{});const M=H=>{var te;return(te=R[H])==null?void 0:te.message};return l.jsxs(l.Fragment,{children:[l.jsxs(hv,{children:[l.jsxs(mv,{children:[l.jsxs(s3,{type:"button",onClick:()=>e("/clientes"),children:[l.jsx(ap,{size:15})," Voltar"]}),l.jsxs(gv,{children:[l.jsx(a3,{children:"Novo Cliente"}),l.jsx(l3,{children:"Preencha os dados para iniciar o onboarding"})]})]}),l.jsxs("form",{id:"create-client-form",onSubmit:F(K),noValidate:!0,children:[l.jsxs(Co,{style:{marginBottom:"24px"},children:[l.jsxs(Oi,{children:[l.jsx(Ni,{children:l.jsx(lp,{size:18})}),l.jsx(Ii,{children:"Dados da Empresa"})]}),l.jsxs(el,{children:[l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"corporate_name",children:"Razão Social *"}),l.jsx(ht,{id:"corporate_name",type:"text",placeholder:"Razão social completa",$hasError:!!M("corporate_name"),disabled:f,...P("corporate_name")}),M("corporate_name")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),M("corporate_name")]})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"cnpj",children:"CNPJ *"}),l.jsx(ht,{id:"cnpj",type:"text",placeholder:"00.000.000/0001-00",value:T,$hasError:!!M("cnpj"),disabled:f,onChange:z}),M("cnpj")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),M("cnpj")]})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"trade_name",children:"Nome Fantasia"}),l.jsx(ht,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",disabled:f,...P("trade_name")})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"state_registration",children:"Inscrição Estadual"}),l.jsx(ht,{id:"state_registration",type:"text",placeholder:"Inscrição estadual (opcional)",$hasError:!!M("state_registration"),disabled:f,...P("state_registration")}),M("state_registration")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),M("state_registration")]})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"phone",children:"Telefone"}),l.jsx(ht,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",$hasError:!!M("phone"),disabled:f,...P("phone",{onChange:H=>A("phone",J3(H.target.value))})}),M("phone")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),M("phone")]})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"email",children:"E-mail *"}),l.jsx(ht,{id:"email",type:"email",placeholder:"contato@empresa.com.br",$hasError:!!M("email"),disabled:f,...P("email")}),M("email")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),M("email")]})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),l.jsx(ja,{id:"benefit_type",$hasError:!!M("benefit_type"),disabled:f,...P("benefit_type"),children:G3.map(H=>l.jsx("option",{value:H.value,children:H.label},H.value))}),M("benefit_type")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),M("benefit_type")]})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"partner_id",children:"Parceiro Vinculado"}),l.jsxs(ja,{id:"partner_id",disabled:f,...P("partner_id"),children:[l.jsx("option",{value:"",children:"Sem parceiro vinculado"}),i.map(H=>l.jsx("option",{value:H.id,children:H.name},H.id))]}),l.jsxs(Fo,{children:[i.length," parceiro",i.length!==1?"s":""," disponível",i.length!==1?"is":""]})]}),l.jsx(Sg,{children:l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"notes",children:"Observações"}),l.jsx(c3,{id:"notes",placeholder:"Observações internas…",disabled:f,...P("notes")}),l.jsx(Fo,{children:"Visível apenas para a equipe interna."})]})})]})]}),l.jsxs(Co,{style:{marginBottom:"24px"},children:[l.jsxs(Oi,{children:[l.jsx(Ni,{children:l.jsx(Fm,{size:18})}),l.jsx(Ii,{children:"Contratação"})]}),l.jsxs(f3,{children:[l.jsxs(_g,{type:"button",$active:b==="plan",disabled:f,onClick:()=>{k("plan"),w([])},children:[l.jsx(Fm,{size:16})," Escolher Plano"]}),l.jsxs(_g,{type:"button",$active:b==="individual",disabled:f,onClick:()=>{k("individual"),g("")},children:[l.jsx(u_,{size:16})," Bandeiras Individuais"]})]}),b==="plan"&&l.jsxs(l.Fragment,{children:[t.length===0?l.jsx(Pg,{children:l.jsx(Ag,{children:"Nenhum plano ativo encontrado."})}):l.jsx(b3,{children:t.map(H=>{var ee;const te=y===H.id;return l.jsxs(p3,{$selected:te,onClick:()=>!f&&g(H.id),children:[l.jsxs(h3,{children:[l.jsx(m3,{children:H.name}),l.jsx(g3,{children:Ea(H.price)})]}),H.description&&l.jsx(y3,{children:H.description}),((ee=H.flags)==null?void 0:ee.length)>0&&l.jsx(x3,{children:H.flags.map(ie=>l.jsx(v3,{children:ie.name},ie.id))})]},H.id)})}),V&&l.jsxs(jg,{children:[l.jsxs(Eg,{children:["Plano selecionado: ",V.name]}),l.jsx(Cg,{children:Ea(V.price)})]})]}),b==="individual"&&l.jsxs(l.Fragment,{children:[l.jsx(Fo,{style:{marginBottom:"12px",display:"block"},children:"Selecione ao menos uma bandeira. O valor total será a soma dos preços individuais."}),r.length===0?l.jsx(Pg,{children:l.jsx(Ag,{children:"Nenhuma bandeira ativa encontrada."})}):l.jsx(w3,{children:r.map(H=>{const te=x.includes(H.id),ee=()=>{f||w(ie=>te?ie.filter(le=>le!==H.id):[...ie,H.id])};return l.jsxs($3,{$checked:te,onClick:ee,children:[l.jsx(k3,{$checked:te,children:te&&l.jsx(r_,{size:11,color:"#fff",strokeWidth:3})}),l.jsxs(S3,{children:[l.jsx(_3,{children:H.name}),l.jsx(j3,{children:Ea(H.price)})]})]},H.id)})}),x.length>0&&l.jsxs(jg,{children:[l.jsxs(Eg,{children:[x.length," bandeira",x.length!==1?"s":""," selecionada",x.length!==1?"s":""]}),l.jsx(Cg,{children:Ea(Q)})]})]})]}),l.jsxs(Co,{style:{marginBottom:"24px"},children:[l.jsxs(Oi,{children:[l.jsx(Ni,{children:l.jsx(up,{size:18})}),l.jsx(Ii,{children:"Endereço"})]}),l.jsxs(el,{children:[l.jsx(Sg,{children:l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"address_street",children:"Logradouro"}),l.jsx(ht,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",$hasError:!!M("address_street"),disabled:f,...P("address_street")}),M("address_street")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),M("address_street")]})]})}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"address_number",children:"Número"}),l.jsx(ht,{id:"address_number",type:"text",placeholder:"Nº",$hasError:!!M("address_number"),disabled:f,...P("address_number")}),M("address_number")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),M("address_number")]})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"address_complement",children:"Complemento"}),l.jsx(ht,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",disabled:f,...P("address_complement")})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"address_neighborhood",children:"Bairro"}),l.jsx(ht,{id:"address_neighborhood",type:"text",placeholder:"Bairro",disabled:f,...P("address_neighborhood")})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"address_city",children:"Cidade"}),l.jsx(ht,{id:"address_city",type:"text",placeholder:"Cidade",disabled:f,...P("address_city")})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"address_state",children:"UF"}),l.jsxs(ja,{id:"address_state",disabled:f,...P("address_state"),children:[l.jsx("option",{value:"",children:"Selecione"}),K3.map(H=>l.jsx("option",{value:H,children:H},H))]})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"address_zip",children:"CEP"}),l.jsx(ht,{id:"address_zip",type:"text",placeholder:"00000-000",$hasError:!!M("address_zip"),disabled:f,...P("address_zip",{onChange:H=>A("address_zip",Z3(H.target.value))})}),M("address_zip")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),M("address_zip")]})]})]})]}),l.jsxs(Co,{style:{marginBottom:"24px"},children:[l.jsxs(Oi,{children:[l.jsx(Ni,{children:l.jsx(cp,{size:18})}),l.jsx(Ii,{children:"Conta Bancária"})]}),l.jsxs(u3,{children:[l.jsx(d3,{children:"Dados Bancários"}),j&&l.jsx(Fo,{style:{marginBottom:"12px",display:"block"},children:"Agência e conta são obrigatórios quando o banco é informado."}),l.jsxs(el,{children:[l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),l.jsx(ht,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",$hasError:!!M("bank_bank_name"),disabled:f,...P("bank_bank_name")}),M("bank_bank_name")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),M("bank_bank_name")]})]}),l.jsxs(Oe,{children:[l.jsxs(He,{htmlFor:"bank_agency",children:["Agência ",j&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(ht,{id:"bank_agency",type:"text",placeholder:"0000",$hasError:!!M("bank_agency"),disabled:f,...P("bank_agency")}),M("bank_agency")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),M("bank_agency")]})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),l.jsx(ht,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,disabled:f,...P("bank_agency_digit")})]}),l.jsxs(Oe,{children:[l.jsxs(He,{htmlFor:"bank_account",children:["Conta ",j&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(ht,{id:"bank_account",type:"text",placeholder:"000000",$hasError:!!M("bank_account"),disabled:f,...P("bank_account")}),M("bank_account")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),M("bank_account")]})]}),l.jsxs(Oe,{children:[l.jsx(He,{htmlFor:"bank_account_digit",children:"Dígito Conta"}),l.jsx(ht,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,disabled:f,...P("bank_account_digit")})]}),l.jsxs(Oe,{children:[l.jsxs(He,{htmlFor:"bank_account_type",children:["Tipo de Conta ",j&&l.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),l.jsx(ja,{id:"bank_account_type",$hasError:!!M("bank_account_type"),disabled:f,...P("bank_account_type"),children:Q3.map(H=>l.jsx("option",{value:H.value,children:H.label},H.value))}),M("bank_account_type")&&l.jsxs(qt,{children:[l.jsx(be,{size:11}),M("bank_account_type")]})]})]})]})]}),l.jsxs(Co,{style:{marginBottom:"24px"},children:[l.jsxs(Oi,{children:[l.jsx(Ni,{children:l.jsx(Ol,{size:18})}),l.jsx(Ii,{children:"Documentos"})]}),l.jsx(Fo,{style:{marginBottom:"16px",display:"block"},children:"Documentos são opcionais e podem ser adicionados depois pela edição do cliente."}),l.jsx(E3,{children:q3.map(H=>l.jsx(nC,{slot:H,selectedFile:C[H.key],onFileSelect:$,onClearFile:I,disabled:f},H.key))})]})]})]}),l.jsxs(D3,{children:[l.jsxs(U3,{type:"button",disabled:f,onClick:()=>e("/clientes"),children:[l.jsx($c,{size:15})," Cancelar"]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px"},children:[f&&l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",width:"220px"},children:[l.jsx(B3,{children:l.jsx(V3,{$percent:d})}),l.jsxs(H3,{children:[d,"%"]})]}),l.jsx(M3,{type:"submit",form:"create-client-form",$isSubmitting:f,disabled:f,children:G()})]})]})]})}const oC=dt`
  0%   { background-position: -400px 0; }
  100% { background-position:  400px 0; }
`,yv=dt`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,iC=dt`
  to { transform: rotate(360deg); }
`,sC=dt`
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`,aC=E.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  margin-bottom:   24px;
  gap:             16px;
  flex-wrap:       wrap;
`,lC=E.div`
  display:        flex;
  flex-direction: column;
  gap:            4px;
`,cC=E.h1`
  font-size:   1.375rem;
  font-weight: 700;
  color:       #3d2b1f;
  margin:      0;
  line-height: 1.2;
`,uC=E.p`
  font-size: 0.8125rem;
  color:     #a0856f;
  margin:    0;
`,dC=E.button`
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
`,fC=E.div`
  display:       flex;
  align-items:   center;
  gap:           12px;
  margin-bottom: 16px;
  flex-wrap:     wrap;
`,pC=E.div`
  position: relative;
  flex:     1;
  min-width: 200px;
`,hC=E.span`
  position:   absolute;
  left:       10px;
  top:        50%;
  transform:  translateY(-50%);
  color:      #b8a49a;
  display:    flex;
  align-items: center;
  pointer-events: none;
`,mC=E.input`
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
`,Rg=E.select`
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
`,gC=E.div`
  background:    #fff;
  border:        1.5px solid #e4d9cf;
  border-radius: 12px;
  overflow:      hidden;
  animation:     ${yv} 0.2s ease;
`,yC=E.table`
  width:           100%;
  border-collapse: collapse;
`,xC=E.thead`
  background: #faf5f1;
  border-bottom: 1.5px solid #e4d9cf;
`,ko=E.th`
  padding:     12px 16px;
  font-size:   0.6875rem;
  font-weight: 700;
  color:       #a0856f;
  text-align:  left;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
`,vC=E.tbody``,bC=E.tr`
  border-bottom: 1px solid #f0e8e2;
  transition:    background 0.1s;

  &:last-child { border-bottom: none; }
  &:hover      { background: #faf5f1; }
`,ju=E.td`
  padding:   13px 16px;
  font-size: 0.8125rem;
  color:     #3d2b1f;
  font-weight: 500;
  vertical-align: middle;
`,zg=E.td`
  padding:   13px 16px;
  font-size: 0.8125rem;
  color:     #8a7060;
  vertical-align: middle;
`,wC=E.td`
  padding:   10px 16px;
  vertical-align: middle;
  white-space: nowrap;
`,$C={admin:"Admin",user:"Usuário",partner:"Parceiro"},kC={admin:{bg:"#ede9fe",color:"#5b21b6"},user:{bg:"#dbeafe",color:"#1e40af"},partner:{bg:"#ffedd5",color:"#9a3412"}},SC=E.span`
  display:       inline-flex;
  align-items:   center;
  gap:           4px;
  padding:       3px 9px;
  border-radius: 99px;
  font-size:     0.6875rem;
  font-weight:   700;
  letter-spacing: 0.03em;
  white-space:   nowrap;

  ${({$role:e})=>{const t=kC[e]??{bg:"#f3f4f6",color:"#374151"};return Er`
      background: ${t.bg};
      color:      ${t.color};
    `}}
`,_C=E.span`
  display:     inline-flex;
  align-items: center;
  gap:         5px;
  font-size:   0.8rem;
  font-weight: 600;

  ${({$active:e})=>e?Er`color: #065f46;`:Er`color: #991b1b;`}
`,Eu={danger:{border:"#fca5a5",color:"#991b1b",hover:"#fee2e2"},success:{border:"#6ee7b7",color:"#065f46",hover:"#d1fae5"}},Og=E.button`
  padding:       5px 12px;
  border-radius: 6px;
  border:        1.5px solid ${({$variant:e})=>{var t;return((t=Eu[e])==null?void 0:t.border)??"#e4d9cf"}};
  background:    transparent;
  color:         ${({$variant:e})=>{var t;return((t=Eu[e])==null?void 0:t.color)??"#3d2b1f"}};
  font-size:     0.75rem;
  font-weight:   600;
  font-family:   inherit;
  cursor:        pointer;
  transition:    background 0.15s, transform 0.1s;
  white-space:   nowrap;

  &:hover {
    background: ${({$variant:e})=>{var t;return((t=Eu[e])==null?void 0:t.hover)??"#faf5f1"}};
  }
  &:active { transform: scale(0.97); }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,jC=E.div`
  display:        flex;
  flex-direction: column;
  align-items:    center;
  padding:        60px 24px;
  gap:            10px;
  animation:      ${yv} 0.2s ease;
`,EC=E.div`
  color:         #d4c4b8;
  margin-bottom: 4px;
`,CC=E.p`
  font-size:   0.9375rem;
  font-weight: 600;
  color:       #7a6455;
  margin:      0;
`,FC=E.p`
  font-size: 0.8125rem;
  color:     #a0856f;
  margin:    0;
  text-align: center;
`,TC=Er`
  background: linear-gradient(90deg, #f0e8e2 25%, #f7f0ec 50%, #f0e8e2 75%);
  background-size: 400px 100%;
  animation: ${oC} 1.4s ease infinite;
  border-radius: 4px;
`,PC=E.tr`
  border-bottom: 1px solid #f0e8e2;
  &:last-child { border-bottom: none; }
`,So=E.td`
  padding: 15px 16px;
  vertical-align: middle;
`,_o=E.span`
  display: block;
  height:  13px;
  width:   ${({$w:e})=>e??"100%"};
  ${TC}
`,AC=E.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  padding:         14px 20px;
  border-top:      1px solid #f0e8e2;
  flex-wrap:       wrap;
  gap:             12px;
`,RC=E.span`
  font-size: 0.8rem;
  color:     #a0856f;
`,zC=E.div`
  display:     flex;
  align-items: center;
  gap:         4px;
`,Ca=E.button`
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
`,OC=E.div`
  position:   fixed;
  inset:      0;
  background: rgba(30, 18, 10, 0.45);
  backdrop-filter: blur(2px);
  display:    flex;
  align-items: center;
  justify-content: center;
  z-index:    1000;
  padding:    16px;
`,NC=E.div`
  background:    #fff;
  border-radius: 14px;
  width:         100%;
  max-width:     440px;
  box-shadow:    0 20px 60px rgba(30, 18, 10, 0.18);
  animation:     ${sC} 0.2s ease;
  overflow:      hidden;
`,IC=E.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  padding:         20px 24px 16px;
  border-bottom:   1.5px solid #f0e8e2;
`,LC=E.h2`
  font-size:   1rem;
  font-weight: 700;
  color:       #3d2b1f;
  margin:      0;
`,DC=E.button`
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
`,UC=E.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,MC=E.div`
  display:         flex;
  align-items:     center;
  justify-content: flex-end;
  gap:             10px;
  padding:         16px 24px 20px;
  border-top:      1.5px solid #f0e8e2;
`,BC=E.button`
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
`,VC=E.button`
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
`,HC=E.span`
  display:       inline-block;
  width:         14px;
  height:        14px;
  border:        2px solid rgba(255,255,255,0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation:     ${iC} 0.7s linear infinite;
`,Cu=E.div`
  display:        flex;
  flex-direction: column;
  gap:            5px;
`,Fu=E.label`
  font-size:   0.8rem;
  font-weight: 600;
  color:       #5c4033;
`,Ng=E.input`
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
`,WC=E.select`
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
`,Tu=E.span`
  display:     inline-flex;
  align-items: center;
  gap:         4px;
  font-size:   0.75rem;
  color:       #dc2626;
  font-weight: 500;
`,qC=E.div`
  background:    #fffbeb;
  border:        1.5px solid #fcd34d;
  border-radius: 10px;
  padding:       16px;
  display:       flex;
  flex-direction: column;
  gap:           10px;
`,GC=E.p`
  font-size:   0.8125rem;
  color:       #78350f;
  font-weight: 600;
  margin:      0;
  line-height: 1.4;
`,QC=E.input`
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
`,KC=E.div`
  position:    relative;
  display:     flex;
  align-items: center;
`,YC=E.button`
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
`,XC=E.button`
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
`,JC=15;function ZC(){return Array.from({length:6}).map((e,t)=>l.jsxs(PC,{children:[l.jsx(So,{children:l.jsx(_o,{$w:"55%"})}),l.jsx(So,{children:l.jsx(_o,{$w:"70%"})}),l.jsx(So,{children:l.jsx(_o,{$w:"40%"})}),l.jsx(So,{children:l.jsx(_o,{$w:"30%"})}),l.jsx(So,{children:l.jsx(_o,{$w:"50%"})}),l.jsx(So,{children:l.jsx(_o,{$w:"60px"})})]},t))}const e6=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",t6={admin:l.jsx(kx,{size:12}),user:l.jsx(x_,{size:12}),partner:l.jsx(c_,{size:12})};function n6({onClose:e,onCreated:t}){const[n,r]=D.useState({name:"",email:"",role:"user"}),[o,i]=D.useState({}),[s,a]=D.useState(!1),[c,f]=D.useState(!1),[u,d]=D.useState(null),[p,m]=D.useState(!1);D.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),D.useEffect(()=>{const g=x=>{x.key==="Escape"&&e()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[e]);const h=()=>{const g={};return n.name.trim()?n.name.trim().length>150&&(g.name="Nome deve ter no máximo 150 caracteres."):g.name="Nome é obrigatório.",n.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(g.email="Informe um e-mail válido."):g.email="E-mail é obrigatório.",["admin","user","partner"].includes(n.role)||(g.role="Selecione um papel válido."),g},b=g=>{const{name:x,value:w}=g.target;r(C=>({...C,[x]:w})),o[x]&&i(C=>({...C,[x]:void 0}))},k=async()=>{var x;const g=h();if(Object.keys(g).length>0){i(g);return}a(!0);try{const{data:w}=await qe.post("/users",{name:n.name.trim(),email:n.email.toLowerCase().trim(),role:n.role});d(((x=w.data)==null?void 0:x.temporaryPassword)??null),ae.success("Usuário criado com sucesso!"),t()}catch(w){ae.error(Zt(w,"Erro ao criar usuário."))}finally{a(!1)}},y=()=>{u&&navigator.clipboard.writeText(u).then(()=>{m(!0),setTimeout(()=>m(!1),2e3)})};return l.jsx(OC,{onClick:e,children:l.jsxs(NC,{onClick:g=>g.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[l.jsxs(IC,{children:[l.jsx(LC,{id:"modal-title",children:"Novo Usuário"}),l.jsx(DC,{type:"button",onClick:e,"aria-label":"Fechar",children:l.jsx($c,{size:18})})]}),l.jsxs(UC,{children:[u&&l.jsxs(qC,{children:[l.jsx(GC,{children:"⚠️ Senha temporária gerada — anote e repasse ao usuário. Ela não será exibida novamente."}),l.jsxs(KC,{children:[l.jsx(QC,{type:c?"text":"password",value:u,readOnly:!0}),l.jsx(YC,{type:"button",onClick:()=>f(g=>!g),"aria-label":c?"Ocultar":"Mostrar",children:c?l.jsx(xx,{size:15}):l.jsx(vx,{size:15})})]}),l.jsx(XC,{type:"button",onClick:y,children:p?"✓ Copiado!":"Copiar senha"})]}),!u&&l.jsxs(l.Fragment,{children:[l.jsxs(Cu,{children:[l.jsx(Fu,{htmlFor:"user-name",children:"Nome *"}),l.jsx(Ng,{id:"user-name",name:"name",type:"text",placeholder:"Nome completo",value:n.name,onChange:b,$hasError:!!o.name,disabled:s,autoFocus:!0}),o.name&&l.jsxs(Tu,{children:[l.jsx(be,{size:11}),o.name]})]}),l.jsxs(Cu,{children:[l.jsx(Fu,{htmlFor:"user-email",children:"E-mail *"}),l.jsx(Ng,{id:"user-email",name:"email",type:"email",placeholder:"usuario@empresa.com",value:n.email,onChange:b,$hasError:!!o.email,disabled:s}),o.email&&l.jsxs(Tu,{children:[l.jsx(be,{size:11}),o.email]})]}),l.jsxs(Cu,{children:[l.jsx(Fu,{htmlFor:"user-role",children:"Papel *"}),l.jsxs(WC,{id:"user-role",name:"role",value:n.role,onChange:b,$hasError:!!o.role,disabled:s,children:[l.jsx("option",{value:"user",children:"Usuário"}),l.jsx("option",{value:"admin",children:"Administrador"}),l.jsx("option",{value:"partner",children:"Parceiro"})]}),o.role&&l.jsxs(Tu,{children:[l.jsx(be,{size:11}),o.role]})]})]})]}),l.jsxs(MC,{children:[l.jsx(BC,{type:"button",onClick:e,disabled:s,children:u?"Fechar":"Cancelar"}),!u&&l.jsx(VC,{type:"button",onClick:k,disabled:s,children:s?l.jsxs(l.Fragment,{children:[l.jsx(HC,{}),"Criando…"]}):l.jsxs(l.Fragment,{children:[l.jsx(dp,{size:15}),"Criar Usuário"]})})]})]})})}function r6(){const e=Jn(),{isAdmin:t}=Ar();D.useEffect(()=>{t||e("/clientes",{replace:!0})},[t,e]);const[n,r]=D.useState([]),[o,i]=D.useState({total:0,totalPages:1,currentPage:1}),[s,a]=D.useState(!0),[c,f]=D.useState(1),[u,d]=D.useState(""),[p,m]=D.useState(""),[h,b]=D.useState(""),[k,y]=D.useState(""),[g,x]=D.useState(!1),w=D.useRef(null),C=D.useCallback(async()=>{var F,A,N;a(!0);try{const R=new URLSearchParams({page:c,limit:JC});k&&R.set("search",k),u&&R.set("role",u),p!==""&&R.set("is_active",p);const{data:U}=await qe.get(`/users?${R.toString()}`);r(U.data??[]),i({total:((F=U.pagination)==null?void 0:F.total)??0,totalPages:((A=U.pagination)==null?void 0:A.totalPages)??1,currentPage:((N=U.pagination)==null?void 0:N.currentPage)??1})}catch(R){ae.error(Zt(R,"Erro ao carregar usuários.")),r([])}finally{a(!1)}},[c,k,u,p]);D.useEffect(()=>{C()},[C]);const _=F=>{const A=F.target.value;b(A),w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{y(A.trim()),f(1)},400)},T=F=>{d(F.target.value),f(1)},v=F=>{m(F.target.value),f(1)},S=async F=>{if(window.confirm(`Desativar o usuário "${F.name}"?`))try{await qe.patch(`/users/${F.id}/deactivate`),ae.success(`Usuário "${F.name}" desativado.`),C()}catch(A){ae.error(Zt(A,"Erro ao desativar usuário."))}},P=async F=>{if(window.confirm(`Reativar o usuário "${F.name}"?`))try{await qe.patch(`/users/${F.id}/reactivate`),ae.success(`Usuário "${F.name}" reativado.`),C()}catch(A){ae.error(Zt(A,"Erro ao reativar usuário."))}};return t?l.jsxs(l.Fragment,{children:[l.jsxs(aC,{children:[l.jsxs(lC,{children:[l.jsx(cC,{children:"Usuários"}),l.jsx(uC,{children:o.total>0?`${o.total} usuário${o.total!==1?"s":""} cadastrado${o.total!==1?"s":""}`:"Nenhum usuário cadastrado ainda"})]}),l.jsxs(dC,{type:"button",onClick:()=>x(!0),children:[l.jsx(dp,{size:16}),"Novo Usuário"]})]}),l.jsxs(fC,{children:[l.jsxs(pC,{children:[l.jsx(hC,{children:l.jsx($x,{size:15})}),l.jsx(mC,{type:"text",placeholder:"Buscar por nome ou e-mail…",value:h,onChange:_})]}),l.jsxs(Rg,{value:u,onChange:T,children:[l.jsx("option",{value:"",children:"Todos os papéis"}),l.jsx("option",{value:"admin",children:"Administrador"}),l.jsx("option",{value:"user",children:"Usuário"}),l.jsx("option",{value:"partner",children:"Parceiro"})]}),l.jsxs(Rg,{value:p,onChange:v,children:[l.jsx("option",{value:"",children:"Todos os status"}),l.jsx("option",{value:"true",children:"Ativos"}),l.jsx("option",{value:"false",children:"Inativos"})]})]}),l.jsxs(gC,{children:[l.jsxs(yC,{children:[l.jsx(xC,{children:l.jsxs("tr",{children:[l.jsx(ko,{children:"Nome"}),l.jsx(ko,{children:"E-mail"}),l.jsx(ko,{children:"Papel"}),l.jsx(ko,{children:"Status"}),l.jsx(ko,{children:"Último acesso"}),l.jsx(ko,{children:"Ações"})]})}),l.jsxs(vC,{children:[s&&l.jsx(ZC,{}),!s&&n.map(F=>l.jsxs(bC,{children:[l.jsx(ju,{children:F.name}),l.jsx(zg,{children:F.email}),l.jsx(ju,{children:l.jsxs(SC,{$role:F.role,children:[t6[F.role],$C[F.role]??F.role]})}),l.jsx(ju,{children:l.jsx(_C,{$active:F.is_active,children:F.is_active?l.jsxs(l.Fragment,{children:[l.jsx(o_,{size:13}),"Ativo"]}):l.jsxs(l.Fragment,{children:[l.jsx(s_,{size:13}),"Inativo"]})})}),l.jsx(zg,{children:F.last_login_at?e6(F.last_login_at):"Nunca acessou"}),l.jsx(wC,{children:F.is_active?l.jsx(Og,{type:"button",$variant:"danger",onClick:()=>S(F),title:"Desativar usuário",children:"Desativar"}):l.jsx(Og,{type:"button",$variant:"success",onClick:()=>P(F),title:"Reativar usuário",children:"Reativar"})})]},F.id)),!s&&n.length===0&&l.jsx("tr",{children:l.jsx("td",{colSpan:6,children:l.jsxs(jC,{children:[l.jsx(EC,{children:l.jsx(fp,{size:40})}),l.jsx(CC,{children:"Nenhum usuário encontrado"}),l.jsx(FC,{children:h||u||p?"Tente ajustar os filtros para ver mais resultados.":'Clique em "Novo Usuário" para criar o primeiro.'})]})})})]})]}),!s&&o.totalPages>1&&l.jsxs(AC,{children:[l.jsxs(RC,{children:["Página ",o.currentPage," de ",o.totalPages," ","· ",o.total," registros"]}),l.jsxs(zC,{children:[l.jsx(Ca,{type:"button",onClick:()=>f(F=>Math.max(1,F-1)),disabled:c<=1,"aria-label":"Página anterior",children:l.jsx(gx,{size:15})}),Array.from({length:o.totalPages},(F,A)=>A+1).filter(F=>F===1||F===o.totalPages||Math.abs(F-c)<=2).reduce((F,A,N,R)=>(N>0&&A-R[N-1]>1&&F.push("…"),F.push(A),F),[]).map((F,A)=>F==="…"?l.jsx(Ca,{disabled:!0,as:"span",children:"…"},`ellipsis-${A}`):l.jsx(Ca,{type:"button",$active:F===c,onClick:()=>f(F),children:F},F)),l.jsx(Ca,{type:"button",onClick:()=>f(F=>Math.min(o.totalPages,F+1)),disabled:c>=o.totalPages,"aria-label":"Próxima página",children:l.jsx(yx,{size:15})})]})]})]}),g&&l.jsx(n6,{onClose:()=>x(!1),onCreated:()=>{C()}})]}):null}const jo=({title:e})=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center",justifyContent:"center",minHeight:"60vh",color:"#7a6455"},children:[l.jsx("p",{style:{fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Em construção"}),l.jsx("p",{style:{fontSize:"22px",fontWeight:"700",fontFamily:"serif"},children:e})]});function o6(){const e=window.location.hostname.includes("github.io"),t=e?Hw:Vw,n=e?{}:{basename:"/bgrepresentacoes-web/"};return l.jsxs(Y$,{theme:lm,children:[l.jsx(xk,{}),l.jsx(t,{...n,children:l.jsxs(JS,{children:[l.jsx(dk,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",style:{fontFamily:lm.typography.fontFamily.sans}}),l.jsxs(Ow,{children:[l.jsx(nt,{path:"/login",element:l.jsx(ij,{})}),l.jsxs(nt,{element:l.jsx(Em,{}),children:[l.jsx(nt,{path:"/alterar-senha",element:l.jsx(pj,{})}),l.jsxs(nt,{element:l.jsx(Tm,{}),children:[l.jsx(nt,{path:"/dashboard",element:l.jsx(jo,{title:"Dashboard"})}),l.jsx(nt,{path:"/clientes",element:l.jsx(qj,{})}),l.jsx(nt,{path:"/clientes/:id",element:l.jsx(kE,{})}),l.jsx(nt,{path:"/clientes/:id/editar",element:l.jsx(K4,{})}),l.jsx(nt,{path:"/onboarding",element:l.jsx(rC,{})}),l.jsx(nt,{path:"/vendas",element:l.jsx(jo,{title:"Vendas"})}),l.jsx(nt,{path:"/perfil",element:l.jsx(jo,{title:"Meu Perfil"})}),l.jsx(nt,{path:"*",element:l.jsx(Ma,{to:"/dashboard",replace:!0})})]})]}),l.jsx(nt,{element:l.jsx(Em,{allowedRoles:["admin"]}),children:l.jsxs(nt,{element:l.jsx(Tm,{}),children:[l.jsx(nt,{path:"/usuarios",element:l.jsx(r6,{})}),l.jsx(nt,{path:"/bandeiras",element:l.jsx(jo,{title:"Bandeiras"})}),l.jsx(nt,{path:"/planos",element:l.jsx(jo,{title:"Planos"})}),l.jsx(nt,{path:"/relatorios",element:l.jsx(jo,{title:"Relatórios"})})]})})]})]})})]})}Pu.createRoot(document.getElementById("root")).render(l.jsx(se.StrictMode,{children:l.jsx(o6,{})}));
