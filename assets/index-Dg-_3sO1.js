function v1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function qm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gm={exports:{}},ll={},Ym={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ss=Symbol.for("react.element"),$1=Symbol.for("react.portal"),b1=Symbol.for("react.fragment"),w1=Symbol.for("react.strict_mode"),S1=Symbol.for("react.profiler"),k1=Symbol.for("react.provider"),_1=Symbol.for("react.context"),j1=Symbol.for("react.forward_ref"),E1=Symbol.for("react.suspense"),C1=Symbol.for("react.memo"),F1=Symbol.for("react.lazy"),Mf=Symbol.iterator;function T1(e){return e===null||typeof e!="object"?null:(e=Mf&&e[Mf]||e["@@iterator"],typeof e=="function"?e:null)}var Km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qm=Object.assign,Jm={};function Do(e,t,n){this.props=e,this.context=t,this.refs=Jm,this.updater=n||Km}Do.prototype.isReactComponent={};Do.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Do.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xm(){}Xm.prototype=Do.prototype;function cd(e,t,n){this.props=e,this.context=t,this.refs=Jm,this.updater=n||Km}var ud=cd.prototype=new Xm;ud.constructor=cd;Qm(ud,Do.prototype);ud.isPureReactComponent=!0;var Uf=Array.isArray,Zm=Object.prototype.hasOwnProperty,dd={current:null},eg={key:!0,ref:!0,__self:!0,__source:!0};function tg(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Zm.call(t,r)&&!eg.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:ss,type:e,key:i,ref:s,props:o,_owner:dd.current}}function z1(e,t){return{$$typeof:ss,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ss}function P1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vf=/\/+/g;function ql(e,t){return typeof e=="object"&&e!==null&&e.key!=null?P1(""+e.key):t.toString(36)}function Xs(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ss:case $1:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+ql(s,0):r,Uf(o)?(n="",e!=null&&(n=e.replace(Vf,"$&/")+"/"),Xs(o,t,n,"",function(u){return u})):o!=null&&(fd(o)&&(o=z1(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Vf,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Uf(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+ql(i,l);s+=Xs(i,t,n,c,o)}else if(c=T1(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+ql(i,l++),s+=Xs(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function vs(e,t,n){if(e==null)return e;var r=[],o=0;return Xs(e,r,"","",function(i){return t.call(n,i,o++)}),r}function R1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $t={current:null},Zs={transition:null},O1={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Zs,ReactCurrentOwner:dd};function ng(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:vs,forEach:function(e,t,n){vs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vs(e,function(){t++}),t},toArray:function(e){return vs(e,function(t){return t})||[]},only:function(e){if(!fd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=Do;ae.Fragment=b1;ae.Profiler=S1;ae.PureComponent=cd;ae.StrictMode=w1;ae.Suspense=E1;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O1;ae.act=ng;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qm({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=dd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Zm.call(t,c)&&!eg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ss,type:e.type,key:o,ref:i,props:r,_owner:s}};ae.createContext=function(e){return e={$$typeof:_1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:k1,_context:e},e.Consumer=e};ae.createElement=tg;ae.createFactory=function(e){var t=tg.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:j1,render:e}};ae.isValidElement=fd;ae.lazy=function(e){return{$$typeof:F1,_payload:{_status:-1,_result:e},_init:R1}};ae.memo=function(e,t){return{$$typeof:C1,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=Zs.transition;Zs.transition={};try{e()}finally{Zs.transition=t}};ae.unstable_act=ng;ae.useCallback=function(e,t){return $t.current.useCallback(e,t)};ae.useContext=function(e){return $t.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return $t.current.useDeferredValue(e)};ae.useEffect=function(e,t){return $t.current.useEffect(e,t)};ae.useId=function(){return $t.current.useId()};ae.useImperativeHandle=function(e,t,n){return $t.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return $t.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return $t.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return $t.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return $t.current.useReducer(e,t,n)};ae.useRef=function(e){return $t.current.useRef(e)};ae.useState=function(e){return $t.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return $t.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return $t.current.useTransition()};ae.version="18.3.1";Ym.exports=ae;var j=Ym.exports;const Q=qm(j),N1=v1({__proto__:null,default:Q},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A1=j,L1=Symbol.for("react.element"),I1=Symbol.for("react.fragment"),D1=Object.prototype.hasOwnProperty,B1=A1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M1={key:!0,ref:!0,__self:!0,__source:!0};function rg(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)D1.call(t,r)&&!M1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:L1,type:e,key:i,ref:s,props:o,_owner:B1.current}}ll.Fragment=I1;ll.jsx=rg;ll.jsxs=rg;Gm.exports=ll;var a=Gm.exports,Wc={},og={exports:{}},Bt={},ig={exports:{}},sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,B){var P=O.length;O.push(B);e:for(;0<P;){var z=P-1>>>1,A=O[z];if(0<o(A,B))O[z]=B,O[P]=A,P=z;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var B=O[0],P=O.pop();if(P!==B){O[0]=P;e:for(var z=0,A=O.length,ne=A>>>1;z<ne;){var oe=2*(z+1)-1,he=O[oe],ue=oe+1,xe=O[ue];if(0>o(he,P))ue<A&&0>o(xe,he)?(O[z]=xe,O[ue]=P,z=ue):(O[z]=he,O[oe]=P,z=oe);else if(ue<A&&0>o(xe,P))O[z]=xe,O[ue]=P,z=ue;else break e}}return B}function o(O,B){var P=O.sortIndex-B.sortIndex;return P!==0?P:O.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,f=null,y=3,b=!1,x=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(O){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=O)r(u),B.sortIndex=B.expirationTime,t(c,B);else break;B=n(u)}}function $(O){if(v=!1,h(O),!x)if(n(c)!==null)x=!0,M(k);else{var B=n(u);B!==null&&D($,B.startTime-O)}}function k(O,B){x=!1,v&&(v=!1,g(E),E=-1),b=!0;var P=y;try{for(h(B),f=n(c);f!==null&&(!(f.expirationTime>B)||O&&!V());){var z=f.callback;if(typeof z=="function"){f.callback=null,y=f.priorityLevel;var A=z(f.expirationTime<=B);B=e.unstable_now(),typeof A=="function"?f.callback=A:f===n(c)&&r(c),h(B)}else r(c);f=n(c)}if(f!==null)var ne=!0;else{var oe=n(u);oe!==null&&D($,oe.startTime-B),ne=!1}return ne}finally{f=null,y=P,b=!1}}var C=!1,_=null,E=-1,N=5,L=-1;function V(){return!(e.unstable_now()-L<N)}function W(){if(_!==null){var O=e.unstable_now();L=O;var B=!0;try{B=_(!0,O)}finally{B?G():(C=!1,_=null)}}else C=!1}var G;if(typeof p=="function")G=function(){p(W)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,re=Z.port2;Z.port1.onmessage=W,G=function(){re.postMessage(null)}}else G=function(){w(W,0)};function M(O){_=O,C||(C=!0,G())}function D(O,B){E=w(function(){O(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){x||b||(x=!0,M(k))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(y){case 1:case 2:case 3:var B=3;break;default:B=y}var P=y;y=B;try{return O()}finally{y=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var P=y;y=O;try{return B()}finally{y=P}},e.unstable_scheduleCallback=function(O,B,P){var z=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?z+P:z):P=z,O){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=P+A,O={id:d++,callback:B,priorityLevel:O,startTime:P,expirationTime:A,sortIndex:-1},P>z?(O.sortIndex=P,t(u,O),n(c)===null&&O===n(u)&&(v?(g(E),E=-1):v=!0,D($,P-z))):(O.sortIndex=A,t(c,O),x||b||(x=!0,M(k))),O},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(O){var B=y;return function(){var P=y;y=B;try{return O.apply(this,arguments)}finally{y=P}}}})(sg);ig.exports=sg;var U1=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1=j,Dt=U1;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ag=new Set,Ni={};function Ur(e,t){_o(e,t),_o(e+"Capture",t)}function _o(e,t){for(Ni[e]=t,e=0;e<t.length;e++)ag.add(t[e])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=Object.prototype.hasOwnProperty,W1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wf={},Hf={};function H1(e){return Hc.call(Hf,e)?!0:Hc.call(Wf,e)?!1:W1.test(e)?Hf[e]=!0:(Wf[e]=!0,!1)}function q1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G1(e,t,n,r){if(t===null||typeof t>"u"||q1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function bt(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new bt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var pd=/[\-:]([a-z])/g;function hd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pd,hd);st[t]=new bt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pd,hd);st[t]=new bt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pd,hd);st[t]=new bt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new bt(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function md(e,t,n,r){var o=st.hasOwnProperty(t)?st[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G1(t,n,o,r)&&(n=null),r||o===null?H1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rn=V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$s=Symbol.for("react.element"),io=Symbol.for("react.portal"),so=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),cg=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Yc=Symbol.for("react.suspense_list"),xd=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),ug=Symbol.for("react.offscreen"),qf=Symbol.iterator;function qo(e){return e===null||typeof e!="object"?null:(e=qf&&e[qf]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Gl;function di(e){if(Gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gl=t&&t[1]||""}return`
`+Gl+e}var Yl=!1;function Kl(e,t){if(!e||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?di(e):""}function Y1(e){switch(e.tag){case 5:return di(e.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return e=Kl(e.type,!1),e;case 11:return e=Kl(e.type.render,!1),e;case 1:return e=Kl(e.type,!0),e;default:return""}}function Kc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case so:return"Fragment";case io:return"Portal";case qc:return"Profiler";case gd:return"StrictMode";case Gc:return"Suspense";case Yc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cg:return(e.displayName||"Context")+".Consumer";case lg:return(e._context.displayName||"Context")+".Provider";case yd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xd:return t=e.displayName||null,t!==null?t:Kc(e.type)||"Memo";case Bn:t=e._payload,e=e._init;try{return Kc(e(t))}catch{}}return null}function K1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kc(t);case 8:return t===gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ar(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Q1(e){var t=dg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bs(e){e._valueTracker||(e._valueTracker=Q1(e))}function fg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qc(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ar(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pg(e,t){t=t.checked,t!=null&&md(e,"checked",t,!1)}function Jc(e,t){pg(e,t);var n=ar(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xc(e,t.type,ar(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xc(e,t,n){(t!=="number"||wa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fi=Array.isArray;function vo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ar(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Zc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(fi(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ar(n)}}function hg(e,t){var n=ar(t.value),r=ar(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ws,gg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ws=ws||document.createElement("div"),ws.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ws.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J1=["Webkit","ms","Moz","O"];Object.keys($i).forEach(function(e){J1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$i[t]=$i[e]})});function yg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$i.hasOwnProperty(e)&&$i[e]?(""+t).trim():t+"px"}function xg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=yg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var X1=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(e,t){if(t){if(X1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function nu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ru=null;function vd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ou=null,$o=null,bo=null;function Jf(e){if(e=cs(e)){if(typeof ou!="function")throw Error(I(280));var t=e.stateNode;t&&(t=pl(t),ou(e.stateNode,e.type,t))}}function vg(e){$o?bo?bo.push(e):bo=[e]:$o=e}function $g(){if($o){var e=$o,t=bo;if(bo=$o=null,Jf(e),t)for(e=0;e<t.length;e++)Jf(t[e])}}function bg(e,t){return e(t)}function wg(){}var Ql=!1;function Sg(e,t,n){if(Ql)return e(t,n);Ql=!0;try{return bg(e,t,n)}finally{Ql=!1,($o!==null||bo!==null)&&(wg(),$g())}}function Li(e,t){var n=e.stateNode;if(n===null)return null;var r=pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var iu=!1;if(Cn)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{iu=!1}function Z1(e,t,n,r,o,i,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var bi=!1,Sa=null,ka=!1,su=null,ev={onError:function(e){bi=!0,Sa=e}};function tv(e,t,n,r,o,i,s,l,c){bi=!1,Sa=null,Z1.apply(ev,arguments)}function nv(e,t,n,r,o,i,s,l,c){if(tv.apply(this,arguments),bi){if(bi){var u=Sa;bi=!1,Sa=null}else throw Error(I(198));ka||(ka=!0,su=u)}}function Vr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xf(e){if(Vr(e)!==e)throw Error(I(188))}function rv(e){var t=e.alternate;if(!t){if(t=Vr(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Xf(o),e;if(i===r)return Xf(o),t;i=i.sibling}throw Error(I(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function _g(e){return e=rv(e),e!==null?jg(e):null}function jg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jg(e);if(t!==null)return t;e=e.sibling}return null}var Eg=Dt.unstable_scheduleCallback,Zf=Dt.unstable_cancelCallback,ov=Dt.unstable_shouldYield,iv=Dt.unstable_requestPaint,Ie=Dt.unstable_now,sv=Dt.unstable_getCurrentPriorityLevel,$d=Dt.unstable_ImmediatePriority,Cg=Dt.unstable_UserBlockingPriority,_a=Dt.unstable_NormalPriority,av=Dt.unstable_LowPriority,Fg=Dt.unstable_IdlePriority,cl=null,hn=null;function lv(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(cl,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:dv,cv=Math.log,uv=Math.LN2;function dv(e){return e>>>=0,e===0?32:31-(cv(e)/uv|0)|0}var Ss=64,ks=4194304;function pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ja(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=pi(l):(i&=s,i!==0&&(r=pi(i)))}else s=n&~o,s!==0?r=pi(s):i!==0&&(r=pi(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rn(t),o=1<<n,r|=e[n],t&=~o;return r}function fv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-rn(i),l=1<<s,c=o[s];c===-1?(!(l&n)||l&r)&&(o[s]=fv(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function au(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tg(){var e=Ss;return Ss<<=1,!(Ss&4194240)&&(Ss=64),e}function Jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function as(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rn(t),e[t]=n}function hv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-rn(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function bd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ye=0;function zg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pg,wd,Rg,Og,Ng,lu=!1,_s=[],Qn=null,Jn=null,Xn=null,Ii=new Map,Di=new Map,Un=[],mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ep(e,t){switch(e){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":Ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(t.pointerId)}}function Yo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=cs(t),t!==null&&wd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function gv(e,t,n,r,o){switch(t){case"focusin":return Qn=Yo(Qn,e,t,n,r,o),!0;case"dragenter":return Jn=Yo(Jn,e,t,n,r,o),!0;case"mouseover":return Xn=Yo(Xn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ii.set(i,Yo(Ii.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Di.set(i,Yo(Di.get(i)||null,e,t,n,r,o)),!0}return!1}function Ag(e){var t=br(e.target);if(t!==null){var n=Vr(t);if(n!==null){if(t=n.tag,t===13){if(t=kg(n),t!==null){e.blockedOn=t,Ng(e.priority,function(){Rg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ea(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ru=r,n.target.dispatchEvent(r),ru=null}else return t=cs(n),t!==null&&wd(t),e.blockedOn=n,!1;t.shift()}return!0}function tp(e,t,n){ea(e)&&n.delete(t)}function yv(){lu=!1,Qn!==null&&ea(Qn)&&(Qn=null),Jn!==null&&ea(Jn)&&(Jn=null),Xn!==null&&ea(Xn)&&(Xn=null),Ii.forEach(tp),Di.forEach(tp)}function Ko(e,t){e.blockedOn===t&&(e.blockedOn=null,lu||(lu=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,yv)))}function Bi(e){function t(o){return Ko(o,e)}if(0<_s.length){Ko(_s[0],e);for(var n=1;n<_s.length;n++){var r=_s[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qn!==null&&Ko(Qn,e),Jn!==null&&Ko(Jn,e),Xn!==null&&Ko(Xn,e),Ii.forEach(t),Di.forEach(t),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Ag(n),n.blockedOn===null&&Un.shift()}var wo=Rn.ReactCurrentBatchConfig,Ea=!0;function xv(e,t,n,r){var o=ye,i=wo.transition;wo.transition=null;try{ye=1,Sd(e,t,n,r)}finally{ye=o,wo.transition=i}}function vv(e,t,n,r){var o=ye,i=wo.transition;wo.transition=null;try{ye=4,Sd(e,t,n,r)}finally{ye=o,wo.transition=i}}function Sd(e,t,n,r){if(Ea){var o=cu(e,t,n,r);if(o===null)ac(e,t,r,Ca,n),ep(e,r);else if(gv(o,e,t,n,r))r.stopPropagation();else if(ep(e,r),t&4&&-1<mv.indexOf(e)){for(;o!==null;){var i=cs(o);if(i!==null&&Pg(i),i=cu(e,t,n,r),i===null&&ac(e,t,r,Ca,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ac(e,t,r,null,n)}}var Ca=null;function cu(e,t,n,r){if(Ca=null,e=vd(r),e=br(e),e!==null)if(t=Vr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ca=e,null}function Lg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sv()){case $d:return 1;case Cg:return 4;case _a:case av:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var Hn=null,kd=null,ta=null;function Ig(){if(ta)return ta;var e,t=kd,n=t.length,r,o="value"in Hn?Hn.value:Hn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return ta=o.slice(e,1<r?1-r:void 0)}function na(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function js(){return!0}function np(){return!1}function Mt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?js:np,this.isPropagationStopped=np,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),t}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=Mt(Bo),ls=Pe({},Bo,{view:0,detail:0}),$v=Mt(ls),Xl,Zl,Qo,ul=Pe({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qo&&(Qo&&e.type==="mousemove"?(Xl=e.screenX-Qo.screenX,Zl=e.screenY-Qo.screenY):Zl=Xl=0,Qo=e),Xl)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),rp=Mt(ul),bv=Pe({},ul,{dataTransfer:0}),wv=Mt(bv),Sv=Pe({},ls,{relatedTarget:0}),ec=Mt(Sv),kv=Pe({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),_v=Mt(kv),jv=Pe({},Bo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ev=Mt(jv),Cv=Pe({},Bo,{data:0}),op=Mt(Cv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zv[e])?!!t[e]:!1}function jd(){return Pv}var Rv=Pe({},ls,{key:function(e){if(e.key){var t=Fv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jd,charCode:function(e){return e.type==="keypress"?na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ov=Mt(Rv),Nv=Pe({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=Mt(Nv),Av=Pe({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jd}),Lv=Mt(Av),Iv=Pe({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dv=Mt(Iv),Bv=Pe({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mv=Mt(Bv),Uv=[9,13,27,32],Ed=Cn&&"CompositionEvent"in window,wi=null;Cn&&"documentMode"in document&&(wi=document.documentMode);var Vv=Cn&&"TextEvent"in window&&!wi,Dg=Cn&&(!Ed||wi&&8<wi&&11>=wi),sp=" ",ap=!1;function Bg(e,t){switch(e){case"keyup":return Uv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ao=!1;function Wv(e,t){switch(e){case"compositionend":return Mg(t);case"keypress":return t.which!==32?null:(ap=!0,sp);case"textInput":return e=t.data,e===sp&&ap?null:e;default:return null}}function Hv(e,t){if(ao)return e==="compositionend"||!Ed&&Bg(e,t)?(e=Ig(),ta=kd=Hn=null,ao=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dg&&t.locale!=="ko"?null:t.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qv[e.type]:t==="textarea"}function Ug(e,t,n,r){vg(r),t=Fa(t,"onChange"),0<t.length&&(n=new _d("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Si=null,Mi=null;function Gv(e){Zg(e,0)}function dl(e){var t=uo(e);if(fg(t))return e}function Yv(e,t){if(e==="change")return t}var Vg=!1;if(Cn){var tc;if(Cn){var nc="oninput"in document;if(!nc){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),nc=typeof cp.oninput=="function"}tc=nc}else tc=!1;Vg=tc&&(!document.documentMode||9<document.documentMode)}function up(){Si&&(Si.detachEvent("onpropertychange",Wg),Mi=Si=null)}function Wg(e){if(e.propertyName==="value"&&dl(Mi)){var t=[];Ug(t,Mi,e,vd(e)),Sg(Gv,t)}}function Kv(e,t,n){e==="focusin"?(up(),Si=t,Mi=n,Si.attachEvent("onpropertychange",Wg)):e==="focusout"&&up()}function Qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(Mi)}function Jv(e,t){if(e==="click")return dl(t)}function Xv(e,t){if(e==="input"||e==="change")return dl(t)}function Zv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var an=typeof Object.is=="function"?Object.is:Zv;function Ui(e,t){if(an(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Hc.call(t,o)||!an(e[o],t[o]))return!1}return!0}function dp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fp(e,t){var n=dp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dp(n)}}function Hg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qg(){for(var e=window,t=wa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wa(e.document)}return t}function Cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function e$(e){var t=qg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hg(n.ownerDocument.documentElement,n)){if(r!==null&&Cd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=fp(n,i);var s=fp(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var t$=Cn&&"documentMode"in document&&11>=document.documentMode,lo=null,uu=null,ki=null,du=!1;function pp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||lo==null||lo!==wa(r)||(r=lo,"selectionStart"in r&&Cd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&Ui(ki,r)||(ki=r,r=Fa(uu,"onSelect"),0<r.length&&(t=new _d("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lo)))}function Es(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var co={animationend:Es("Animation","AnimationEnd"),animationiteration:Es("Animation","AnimationIteration"),animationstart:Es("Animation","AnimationStart"),transitionend:Es("Transition","TransitionEnd")},rc={},Gg={};Cn&&(Gg=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function fl(e){if(rc[e])return rc[e];if(!co[e])return e;var t=co[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gg)return rc[e]=t[n];return e}var Yg=fl("animationend"),Kg=fl("animationiteration"),Qg=fl("animationstart"),Jg=fl("transitionend"),Xg=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(e,t){Xg.set(e,t),Ur(t,[e])}for(var oc=0;oc<hp.length;oc++){var ic=hp[oc],n$=ic.toLowerCase(),r$=ic[0].toUpperCase()+ic.slice(1);cr(n$,"on"+r$)}cr(Yg,"onAnimationEnd");cr(Kg,"onAnimationIteration");cr(Qg,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(Jg,"onTransitionEnd");_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o$=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function mp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nv(r,t,void 0,e),e.currentTarget=null}function Zg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&o.isPropagationStopped())break e;mp(o,l,u),i=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&o.isPropagationStopped())break e;mp(o,l,u),i=c}}}if(ka)throw e=su,ka=!1,su=null,e}function we(e,t){var n=t[gu];n===void 0&&(n=t[gu]=new Set);var r=e+"__bubble";n.has(r)||(ey(t,e,2,!1),n.add(r))}function sc(e,t,n){var r=0;t&&(r|=4),ey(n,e,r,t)}var Cs="_reactListening"+Math.random().toString(36).slice(2);function Vi(e){if(!e[Cs]){e[Cs]=!0,ag.forEach(function(n){n!=="selectionchange"&&(o$.has(n)||sc(n,!1,e),sc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cs]||(t[Cs]=!0,sc("selectionchange",!1,t))}}function ey(e,t,n,r){switch(Lg(t)){case 1:var o=xv;break;case 4:o=vv;break;default:o=Sd}n=o.bind(null,t,n,e),o=void 0,!iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ac(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;l!==null;){if(s=br(l),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}l=l.parentNode}}r=r.return}Sg(function(){var u=i,d=vd(n),f=[];e:{var y=Xg.get(e);if(y!==void 0){var b=_d,x=e;switch(e){case"keypress":if(na(n)===0)break e;case"keydown":case"keyup":b=Ov;break;case"focusin":x="focus",b=ec;break;case"focusout":x="blur",b=ec;break;case"beforeblur":case"afterblur":b=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Lv;break;case Yg:case Kg:case Qg:b=_v;break;case Jg:b=Dv;break;case"scroll":b=$v;break;case"wheel":b=Mv;break;case"copy":case"cut":case"paste":b=Ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ip}var v=(t&4)!==0,w=!v&&e==="scroll",g=v?y!==null?y+"Capture":null:y;v=[];for(var p=u,h;p!==null;){h=p;var $=h.stateNode;if(h.tag===5&&$!==null&&(h=$,g!==null&&($=Li(p,g),$!=null&&v.push(Wi(p,$,h)))),w)break;p=p.return}0<v.length&&(y=new b(y,x,null,n,d),f.push({event:y,listeners:v}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",y&&n!==ru&&(x=n.relatedTarget||n.fromElement)&&(br(x)||x[Fn]))break e;if((b||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,b?(x=n.relatedTarget||n.toElement,b=u,x=x?br(x):null,x!==null&&(w=Vr(x),x!==w||x.tag!==5&&x.tag!==6)&&(x=null)):(b=null,x=u),b!==x)){if(v=rp,$="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=ip,$="onPointerLeave",g="onPointerEnter",p="pointer"),w=b==null?y:uo(b),h=x==null?y:uo(x),y=new v($,p+"leave",b,n,d),y.target=w,y.relatedTarget=h,$=null,br(d)===u&&(v=new v(g,p+"enter",x,n,d),v.target=h,v.relatedTarget=w,$=v),w=$,b&&x)t:{for(v=b,g=x,p=0,h=v;h;h=Yr(h))p++;for(h=0,$=g;$;$=Yr($))h++;for(;0<p-h;)v=Yr(v),p--;for(;0<h-p;)g=Yr(g),h--;for(;p--;){if(v===g||g!==null&&v===g.alternate)break t;v=Yr(v),g=Yr(g)}v=null}else v=null;b!==null&&gp(f,y,b,v,!1),x!==null&&w!==null&&gp(f,w,x,v,!0)}}e:{if(y=u?uo(u):window,b=y.nodeName&&y.nodeName.toLowerCase(),b==="select"||b==="input"&&y.type==="file")var k=Yv;else if(lp(y))if(Vg)k=Xv;else{k=Qv;var C=Kv}else(b=y.nodeName)&&b.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(k=Jv);if(k&&(k=k(e,u))){Ug(f,k,n,d);break e}C&&C(e,y,u),e==="focusout"&&(C=y._wrapperState)&&C.controlled&&y.type==="number"&&Xc(y,"number",y.value)}switch(C=u?uo(u):window,e){case"focusin":(lp(C)||C.contentEditable==="true")&&(lo=C,uu=u,ki=null);break;case"focusout":ki=uu=lo=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,pp(f,n,d);break;case"selectionchange":if(t$)break;case"keydown":case"keyup":pp(f,n,d)}var _;if(Ed)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ao?Bg(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Dg&&n.locale!=="ko"&&(ao||E!=="onCompositionStart"?E==="onCompositionEnd"&&ao&&(_=Ig()):(Hn=d,kd="value"in Hn?Hn.value:Hn.textContent,ao=!0)),C=Fa(u,E),0<C.length&&(E=new op(E,e,null,n,d),f.push({event:E,listeners:C}),_?E.data=_:(_=Mg(n),_!==null&&(E.data=_)))),(_=Vv?Wv(e,n):Hv(e,n))&&(u=Fa(u,"onBeforeInput"),0<u.length&&(d=new op("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=_))}Zg(f,t)})}function Wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Li(e,n),i!=null&&r.unshift(Wi(e,i,o)),i=Li(e,t),i!=null&&r.push(Wi(e,i,o))),e=e.return}return r}function Yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gp(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,o?(c=Li(n,i),c!=null&&s.unshift(Wi(n,c,l))):o||(c=Li(n,i),c!=null&&s.push(Wi(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var i$=/\r\n?/g,s$=/\u0000|\uFFFD/g;function yp(e){return(typeof e=="string"?e:""+e).replace(i$,`
`).replace(s$,"")}function Fs(e,t,n){if(t=yp(t),yp(e)!==t&&n)throw Error(I(425))}function Ta(){}var fu=null,pu=null;function hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,a$=typeof clearTimeout=="function"?clearTimeout:void 0,xp=typeof Promise=="function"?Promise:void 0,l$=typeof queueMicrotask=="function"?queueMicrotask:typeof xp<"u"?function(e){return xp.resolve(null).then(e).catch(c$)}:mu;function c$(e){setTimeout(function(){throw e})}function lc(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Bi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Bi(t)}function Zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),pn="__reactFiber$"+Mo,Hi="__reactProps$"+Mo,Fn="__reactContainer$"+Mo,gu="__reactEvents$"+Mo,u$="__reactListeners$"+Mo,d$="__reactHandles$"+Mo;function br(e){var t=e[pn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fn]||n[pn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vp(e);e!==null;){if(n=e[pn])return n;e=vp(e)}return t}e=n,n=e.parentNode}return null}function cs(e){return e=e[pn]||e[Fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function uo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function pl(e){return e[Hi]||null}var yu=[],fo=-1;function ur(e){return{current:e}}function ke(e){0>fo||(e.current=yu[fo],yu[fo]=null,fo--)}function be(e,t){fo++,yu[fo]=e.current,e.current=t}var lr={},pt=ur(lr),jt=ur(!1),Rr=lr;function jo(e,t){var n=e.type.contextTypes;if(!n)return lr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Et(e){return e=e.childContextTypes,e!=null}function za(){ke(jt),ke(pt)}function $p(e,t,n){if(pt.current!==lr)throw Error(I(168));be(pt,t),be(jt,n)}function ty(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,K1(e)||"Unknown",o));return Pe({},n,r)}function Pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||lr,Rr=pt.current,be(pt,e),be(jt,jt.current),!0}function bp(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=ty(e,t,Rr),r.__reactInternalMemoizedMergedChildContext=e,ke(jt),ke(pt),be(pt,e)):ke(jt),be(jt,n)}var kn=null,hl=!1,cc=!1;function ny(e){kn===null?kn=[e]:kn.push(e)}function f$(e){hl=!0,ny(e)}function dr(){if(!cc&&kn!==null){cc=!0;var e=0,t=ye;try{var n=kn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kn=null,hl=!1}catch(o){throw kn!==null&&(kn=kn.slice(e+1)),Eg($d,dr),o}finally{ye=t,cc=!1}}return null}var po=[],ho=0,Ra=null,Oa=0,Vt=[],Wt=0,Or=null,_n=1,jn="";function gr(e,t){po[ho++]=Oa,po[ho++]=Ra,Ra=e,Oa=t}function ry(e,t,n){Vt[Wt++]=_n,Vt[Wt++]=jn,Vt[Wt++]=Or,Or=e;var r=_n;e=jn;var o=32-rn(r)-1;r&=~(1<<o),n+=1;var i=32-rn(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,_n=1<<32-rn(t)+o|n<<o|r,jn=i+e}else _n=1<<i|n<<o|r,jn=e}function Fd(e){e.return!==null&&(gr(e,1),ry(e,1,0))}function Td(e){for(;e===Ra;)Ra=po[--ho],po[ho]=null,Oa=po[--ho],po[ho]=null;for(;e===Or;)Or=Vt[--Wt],Vt[Wt]=null,jn=Vt[--Wt],Vt[Wt]=null,_n=Vt[--Wt],Vt[Wt]=null}var It=null,At=null,_e=!1,en=null;function oy(e,t){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,At=Zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,At=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Or!==null?{id:_n,overflow:jn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,It=e,At=null,!0):!1;default:return!1}}function xu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vu(e){if(_e){var t=At;if(t){var n=t;if(!wp(e,t)){if(xu(e))throw Error(I(418));t=Zn(n.nextSibling);var r=It;t&&wp(e,t)?oy(r,n):(e.flags=e.flags&-4097|2,_e=!1,It=e)}}else{if(xu(e))throw Error(I(418));e.flags=e.flags&-4097|2,_e=!1,It=e}}}function Sp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function Ts(e){if(e!==It)return!1;if(!_e)return Sp(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hu(e.type,e.memoizedProps)),t&&(t=At)){if(xu(e))throw iy(),Error(I(418));for(;t;)oy(e,t),t=Zn(t.nextSibling)}if(Sp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){At=Zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}At=null}}else At=It?Zn(e.stateNode.nextSibling):null;return!0}function iy(){for(var e=At;e;)e=Zn(e.nextSibling)}function Eo(){At=It=null,_e=!1}function zd(e){en===null?en=[e]:en.push(e)}var p$=Rn.ReactCurrentBatchConfig;function Jo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function zs(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kp(e){var t=e._init;return t(e._payload)}function sy(e){function t(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=rr(g,p),g.index=0,g.sibling=null,g}function i(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,p,h,$){return p===null||p.tag!==6?(p=gc(h,g.mode,$),p.return=g,p):(p=o(p,h),p.return=g,p)}function c(g,p,h,$){var k=h.type;return k===so?d(g,p,h.props.children,$,h.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Bn&&kp(k)===p.type)?($=o(p,h.props),$.ref=Jo(g,p,h),$.return=g,$):($=ca(h.type,h.key,h.props,null,g.mode,$),$.ref=Jo(g,p,h),$.return=g,$)}function u(g,p,h,$){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=yc(h,g.mode,$),p.return=g,p):(p=o(p,h.children||[]),p.return=g,p)}function d(g,p,h,$,k){return p===null||p.tag!==7?(p=Fr(h,g.mode,$,k),p.return=g,p):(p=o(p,h),p.return=g,p)}function f(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=gc(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $s:return h=ca(p.type,p.key,p.props,null,g.mode,h),h.ref=Jo(g,null,p),h.return=g,h;case io:return p=yc(p,g.mode,h),p.return=g,p;case Bn:var $=p._init;return f(g,$(p._payload),h)}if(fi(p)||qo(p))return p=Fr(p,g.mode,h,null),p.return=g,p;zs(g,p)}return null}function y(g,p,h,$){var k=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:l(g,p,""+h,$);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case $s:return h.key===k?c(g,p,h,$):null;case io:return h.key===k?u(g,p,h,$):null;case Bn:return k=h._init,y(g,p,k(h._payload),$)}if(fi(h)||qo(h))return k!==null?null:d(g,p,h,$,null);zs(g,h)}return null}function b(g,p,h,$,k){if(typeof $=="string"&&$!==""||typeof $=="number")return g=g.get(h)||null,l(p,g,""+$,k);if(typeof $=="object"&&$!==null){switch($.$$typeof){case $s:return g=g.get($.key===null?h:$.key)||null,c(p,g,$,k);case io:return g=g.get($.key===null?h:$.key)||null,u(p,g,$,k);case Bn:var C=$._init;return b(g,p,h,C($._payload),k)}if(fi($)||qo($))return g=g.get(h)||null,d(p,g,$,k,null);zs(p,$)}return null}function x(g,p,h,$){for(var k=null,C=null,_=p,E=p=0,N=null;_!==null&&E<h.length;E++){_.index>E?(N=_,_=null):N=_.sibling;var L=y(g,_,h[E],$);if(L===null){_===null&&(_=N);break}e&&_&&L.alternate===null&&t(g,_),p=i(L,p,E),C===null?k=L:C.sibling=L,C=L,_=N}if(E===h.length)return n(g,_),_e&&gr(g,E),k;if(_===null){for(;E<h.length;E++)_=f(g,h[E],$),_!==null&&(p=i(_,p,E),C===null?k=_:C.sibling=_,C=_);return _e&&gr(g,E),k}for(_=r(g,_);E<h.length;E++)N=b(_,g,E,h[E],$),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?E:N.key),p=i(N,p,E),C===null?k=N:C.sibling=N,C=N);return e&&_.forEach(function(V){return t(g,V)}),_e&&gr(g,E),k}function v(g,p,h,$){var k=qo(h);if(typeof k!="function")throw Error(I(150));if(h=k.call(h),h==null)throw Error(I(151));for(var C=k=null,_=p,E=p=0,N=null,L=h.next();_!==null&&!L.done;E++,L=h.next()){_.index>E?(N=_,_=null):N=_.sibling;var V=y(g,_,L.value,$);if(V===null){_===null&&(_=N);break}e&&_&&V.alternate===null&&t(g,_),p=i(V,p,E),C===null?k=V:C.sibling=V,C=V,_=N}if(L.done)return n(g,_),_e&&gr(g,E),k;if(_===null){for(;!L.done;E++,L=h.next())L=f(g,L.value,$),L!==null&&(p=i(L,p,E),C===null?k=L:C.sibling=L,C=L);return _e&&gr(g,E),k}for(_=r(g,_);!L.done;E++,L=h.next())L=b(_,g,E,L.value,$),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?E:L.key),p=i(L,p,E),C===null?k=L:C.sibling=L,C=L);return e&&_.forEach(function(W){return t(g,W)}),_e&&gr(g,E),k}function w(g,p,h,$){if(typeof h=="object"&&h!==null&&h.type===so&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case $s:e:{for(var k=h.key,C=p;C!==null;){if(C.key===k){if(k=h.type,k===so){if(C.tag===7){n(g,C.sibling),p=o(C,h.props.children),p.return=g,g=p;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Bn&&kp(k)===C.type){n(g,C.sibling),p=o(C,h.props),p.ref=Jo(g,C,h),p.return=g,g=p;break e}n(g,C);break}else t(g,C);C=C.sibling}h.type===so?(p=Fr(h.props.children,g.mode,$,h.key),p.return=g,g=p):($=ca(h.type,h.key,h.props,null,g.mode,$),$.ref=Jo(g,p,h),$.return=g,g=$)}return s(g);case io:e:{for(C=h.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(g,p.sibling),p=o(p,h.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=yc(h,g.mode,$),p.return=g,g=p}return s(g);case Bn:return C=h._init,w(g,p,C(h._payload),$)}if(fi(h))return x(g,p,h,$);if(qo(h))return v(g,p,h,$);zs(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(g,p.sibling),p=o(p,h),p.return=g,g=p):(n(g,p),p=gc(h,g.mode,$),p.return=g,g=p),s(g)):n(g,p)}return w}var Co=sy(!0),ay=sy(!1),Na=ur(null),Aa=null,mo=null,Pd=null;function Rd(){Pd=mo=Aa=null}function Od(e){var t=Na.current;ke(Na),e._currentValue=t}function $u(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function So(e,t){Aa=e,Pd=mo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_t=!0),e.firstContext=null)}function Gt(e){var t=e._currentValue;if(Pd!==e)if(e={context:e,memoizedValue:t,next:null},mo===null){if(Aa===null)throw Error(I(308));mo=e,Aa.dependencies={lanes:0,firstContext:e}}else mo=mo.next=e;return t}var wr=null;function Nd(e){wr===null?wr=[e]:wr.push(e)}function ly(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Nd(t)):(n.next=o.next,o.next=n),t.interleaved=n,Tn(e,r)}function Tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mn=!1;function Ad(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function er(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Tn(e,n)}return o=r.interleaved,o===null?(t.next=t,Nd(r)):(t.next=o.next,o.next=t),r.interleaved=t,Tn(e,n)}function ra(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bd(e,n)}}function _p(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function La(e,t,n,r){var o=e.updateQueue;Mn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?i=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(i!==null){var f=o.baseState;s=0,d=u=c=null,l=i;do{var y=l.lane,b=l.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,v=l;switch(y=t,b=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){f=x.call(b,f,y);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,y=typeof x=="function"?x.call(b,f,y):x,y==null)break e;f=Pe({},f,y);break e;case 2:Mn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=o.effects,y===null?o.effects=[l]:y.push(l))}else b={eventTime:b,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=b,c=f):d=d.next=b,s|=y;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;y=l,l=y.next,y.next=null,o.lastBaseUpdate=y,o.shared.pending=null}}while(!0);if(d===null&&(c=f),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Ar|=s,e.lanes=s,e.memoizedState=f}}function jp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var us={},mn=ur(us),qi=ur(us),Gi=ur(us);function Sr(e){if(e===us)throw Error(I(174));return e}function Ld(e,t){switch(be(Gi,t),be(qi,e),be(mn,us),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=eu(t,e)}ke(mn),be(mn,t)}function Fo(){ke(mn),ke(qi),ke(Gi)}function uy(e){Sr(Gi.current);var t=Sr(mn.current),n=eu(t,e.type);t!==n&&(be(qi,e),be(mn,n))}function Id(e){qi.current===e&&(ke(mn),ke(qi))}var Fe=ur(0);function Ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uc=[];function Dd(){for(var e=0;e<uc.length;e++)uc[e]._workInProgressVersionPrimary=null;uc.length=0}var oa=Rn.ReactCurrentDispatcher,dc=Rn.ReactCurrentBatchConfig,Nr=0,Te=null,Ge=null,Je=null,Da=!1,_i=!1,Yi=0,h$=0;function at(){throw Error(I(321))}function Bd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!an(e[n],t[n]))return!1;return!0}function Md(e,t,n,r,o,i){if(Nr=i,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oa.current=e===null||e.memoizedState===null?x$:v$,e=n(r,o),_i){i=0;do{if(_i=!1,Yi=0,25<=i)throw Error(I(301));i+=1,Je=Ge=null,t.updateQueue=null,oa.current=$$,e=n(r,o)}while(_i)}if(oa.current=Ba,t=Ge!==null&&Ge.next!==null,Nr=0,Je=Ge=Te=null,Da=!1,t)throw Error(I(300));return e}function Ud(){var e=Yi!==0;return Yi=0,e}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Te.memoizedState=Je=e:Je=Je.next=e,Je}function Yt(){if(Ge===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Je===null?Te.memoizedState:Je.next;if(t!==null)Je=t,Ge=e;else{if(e===null)throw Error(I(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Je===null?Te.memoizedState=Je=e:Je=Je.next=e}return Je}function Ki(e,t){return typeof t=="function"?t(e):t}function fc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=Ge,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,c=null,u=i;do{var d=u.lane;if((Nr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,s=r):c=c.next=f,Te.lanes|=d,Ar|=d}u=u.next}while(u!==null&&u!==i);c===null?s=r:c.next=l,an(r,t.memoizedState)||(_t=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Te.lanes|=i,Ar|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);an(i,t.memoizedState)||(_t=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function dy(){}function fy(e,t){var n=Te,r=Yt(),o=t(),i=!an(r.memoizedState,o);if(i&&(r.memoizedState=o,_t=!0),r=r.queue,Vd(my.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,Qi(9,hy.bind(null,n,r,o,t),void 0,null),Ze===null)throw Error(I(349));Nr&30||py(n,t,o)}return o}function py(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hy(e,t,n,r){t.value=n,t.getSnapshot=r,gy(t)&&yy(e)}function my(e,t,n){return n(function(){gy(t)&&yy(e)})}function gy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!an(e,n)}catch{return!0}}function yy(e){var t=Tn(e,1);t!==null&&on(t,e,1,-1)}function Ep(e){var t=un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},t.queue=e,e=e.dispatch=y$.bind(null,Te,e),[t.memoizedState,e]}function Qi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xy(){return Yt().memoizedState}function ia(e,t,n,r){var o=un();Te.flags|=e,o.memoizedState=Qi(1|t,n,void 0,r===void 0?null:r)}function ml(e,t,n,r){var o=Yt();r=r===void 0?null:r;var i=void 0;if(Ge!==null){var s=Ge.memoizedState;if(i=s.destroy,r!==null&&Bd(r,s.deps)){o.memoizedState=Qi(t,n,i,r);return}}Te.flags|=e,o.memoizedState=Qi(1|t,n,i,r)}function Cp(e,t){return ia(8390656,8,e,t)}function Vd(e,t){return ml(2048,8,e,t)}function vy(e,t){return ml(4,2,e,t)}function $y(e,t){return ml(4,4,e,t)}function by(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wy(e,t,n){return n=n!=null?n.concat([e]):null,ml(4,4,by.bind(null,t,e),n)}function Wd(){}function Sy(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ky(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _y(e,t,n){return Nr&21?(an(n,t)||(n=Tg(),Te.lanes|=n,Ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_t=!0),e.memoizedState=n)}function m$(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=dc.transition;dc.transition={};try{e(!1),t()}finally{ye=n,dc.transition=r}}function jy(){return Yt().memoizedState}function g$(e,t,n){var r=nr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ey(e))Cy(t,n);else if(n=ly(e,t,n,r),n!==null){var o=vt();on(n,e,r,o),Fy(n,t,r)}}function y$(e,t,n){var r=nr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ey(e))Cy(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,an(l,s)){var c=t.interleaved;c===null?(o.next=o,Nd(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=ly(e,t,o,r),n!==null&&(o=vt(),on(n,e,r,o),Fy(n,t,r))}}function Ey(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function Cy(e,t){_i=Da=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fy(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bd(e,n)}}var Ba={readContext:Gt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},x$={readContext:Gt,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:Gt,useEffect:Cp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ia(4194308,4,by.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ia(4194308,4,e,t)},useInsertionEffect:function(e,t){return ia(4,2,e,t)},useMemo:function(e,t){var n=un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=un();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=g$.bind(null,Te,e),[r.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:Ep,useDebugValue:Wd,useDeferredValue:function(e){return un().memoizedState=e},useTransition:function(){var e=Ep(!1),t=e[0];return e=m$.bind(null,e[1]),un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Te,o=un();if(_e){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Ze===null)throw Error(I(349));Nr&30||py(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Cp(my.bind(null,r,i,e),[e]),r.flags|=2048,Qi(9,hy.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=un(),t=Ze.identifierPrefix;if(_e){var n=jn,r=_n;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=h$++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},v$={readContext:Gt,useCallback:Sy,useContext:Gt,useEffect:Vd,useImperativeHandle:wy,useInsertionEffect:vy,useLayoutEffect:$y,useMemo:ky,useReducer:fc,useRef:xy,useState:function(){return fc(Ki)},useDebugValue:Wd,useDeferredValue:function(e){var t=Yt();return _y(t,Ge.memoizedState,e)},useTransition:function(){var e=fc(Ki)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:dy,useSyncExternalStore:fy,useId:jy,unstable_isNewReconciler:!1},$$={readContext:Gt,useCallback:Sy,useContext:Gt,useEffect:Vd,useImperativeHandle:wy,useInsertionEffect:vy,useLayoutEffect:$y,useMemo:ky,useReducer:pc,useRef:xy,useState:function(){return pc(Ki)},useDebugValue:Wd,useDeferredValue:function(e){var t=Yt();return Ge===null?t.memoizedState=e:_y(t,Ge.memoizedState,e)},useTransition:function(){var e=pc(Ki)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:dy,useSyncExternalStore:fy,useId:jy,unstable_isNewReconciler:!1};function Jt(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gl={isMounted:function(e){return(e=e._reactInternals)?Vr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vt(),o=nr(e),i=En(r,o);i.payload=t,n!=null&&(i.callback=n),t=er(e,i,o),t!==null&&(on(t,e,o,r),ra(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vt(),o=nr(e),i=En(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=er(e,i,o),t!==null&&(on(t,e,o,r),ra(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),r=nr(e),o=En(n,r);o.tag=2,t!=null&&(o.callback=t),t=er(e,o,r),t!==null&&(on(t,e,r,n),ra(t,e,r))}};function Fp(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Ui(n,r)||!Ui(o,i):!0}function Ty(e,t,n){var r=!1,o=lr,i=t.contextType;return typeof i=="object"&&i!==null?i=Gt(i):(o=Et(t)?Rr:pt.current,r=t.contextTypes,i=(r=r!=null)?jo(e,o):lr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Tp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gl.enqueueReplaceState(t,t.state,null)}function wu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ad(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Gt(i):(i=Et(t)?Rr:pt.current,o.context=jo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(bu(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&gl.enqueueReplaceState(o,o.state,null),La(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function To(e,t){try{var n="",r=t;do n+=Y1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function hc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Su(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var b$=typeof WeakMap=="function"?WeakMap:Map;function zy(e,t,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ua||(Ua=!0,Ru=r),Su(e,t)},n}function Py(e,t,n){n=En(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Su(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Su(e,t),typeof r!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function zp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new b$;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=N$.bind(null,e,t,n),t.then(e,e))}function Pp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rp(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=En(-1,1),t.tag=2,er(n,t,1))),n.lanes|=1),e)}var w$=Rn.ReactCurrentOwner,_t=!1;function gt(e,t,n,r){t.child=e===null?ay(t,null,n,r):Co(t,e.child,n,r)}function Op(e,t,n,r,o){n=n.render;var i=t.ref;return So(t,o),r=Md(e,t,n,r,i,o),n=Ud(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zn(e,t,o)):(_e&&n&&Fd(t),t.flags|=1,gt(e,t,r,o),t.child)}function Np(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Xd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ry(e,t,i,r,o)):(e=ca(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ui,n(s,r)&&e.ref===t.ref)return zn(e,t,o)}return t.flags|=1,e=rr(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ry(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ui(i,r)&&e.ref===t.ref)if(_t=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(_t=!0);else return t.lanes=e.lanes,zn(e,t,o)}return ku(e,t,n,r,o)}function Oy(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(yo,Ot),Ot|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(yo,Ot),Ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,be(yo,Ot),Ot|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,be(yo,Ot),Ot|=r;return gt(e,t,o,n),t.child}function Ny(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ku(e,t,n,r,o){var i=Et(n)?Rr:pt.current;return i=jo(t,i),So(t,o),n=Md(e,t,n,r,i,o),r=Ud(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zn(e,t,o)):(_e&&r&&Fd(t),t.flags|=1,gt(e,t,n,o),t.child)}function Ap(e,t,n,r,o){if(Et(n)){var i=!0;Pa(t)}else i=!1;if(So(t,o),t.stateNode===null)sa(e,t),Ty(t,n,r),wu(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=Et(n)?Rr:pt.current,u=jo(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Tp(t,s,r,u),Mn=!1;var y=t.memoizedState;s.state=y,La(t,r,s,o),c=t.memoizedState,l!==r||y!==c||jt.current||Mn?(typeof d=="function"&&(bu(t,n,d,r),c=t.memoizedState),(l=Mn||Fp(t,n,l,r,y,c,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,cy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Jt(t.type,l),s.props=u,f=t.pendingProps,y=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Gt(c):(c=Et(n)?Rr:pt.current,c=jo(t,c));var b=n.getDerivedStateFromProps;(d=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||y!==c)&&Tp(t,s,r,c),Mn=!1,y=t.memoizedState,s.state=y,La(t,r,s,o);var x=t.memoizedState;l!==f||y!==x||jt.current||Mn?(typeof b=="function"&&(bu(t,n,b,r),x=t.memoizedState),(u=Mn||Fp(t,n,u,r,y,x,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return _u(e,t,n,r,i,o)}function _u(e,t,n,r,o,i){Ny(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&bp(t,n,!1),zn(e,t,i);r=t.stateNode,w$.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Co(t,e.child,null,i),t.child=Co(t,null,l,i)):gt(e,t,l,i),t.memoizedState=r.state,o&&bp(t,n,!0),t.child}function Ay(e){var t=e.stateNode;t.pendingContext?$p(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$p(e,t.context,!1),Ld(e,t.containerInfo)}function Lp(e,t,n,r,o){return Eo(),zd(o),t.flags|=256,gt(e,t,n,r),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Eu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ly(e,t,n){var r=t.pendingProps,o=Fe.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),be(Fe,o&1),e===null)return vu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=vl(s,r,0,null),e=Fr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Eu(n),t.memoizedState=ju,e):Hd(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return S$(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=rr(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=rr(l,i):(i=Fr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Eu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=ju,r}return i=e.child,e=i.sibling,r=rr(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Hd(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ps(e,t,n,r){return r!==null&&zd(r),Co(t,e.child,null,n),e=Hd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function S$(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=hc(Error(I(422))),Ps(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=vl({mode:"visible",children:r.children},o,0,null),i=Fr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Co(t,e.child,null,s),t.child.memoizedState=Eu(s),t.memoizedState=ju,i);if(!(t.mode&1))return Ps(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(I(419)),r=hc(i,r,void 0),Ps(e,t,s,r)}if(l=(s&e.childLanes)!==0,_t||l){if(r=Ze,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Tn(e,o),on(r,e,o,-1))}return Jd(),r=hc(Error(I(421))),Ps(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=A$.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,At=Zn(o.nextSibling),It=t,_e=!0,en=null,e!==null&&(Vt[Wt++]=_n,Vt[Wt++]=jn,Vt[Wt++]=Or,_n=e.id,jn=e.overflow,Or=t),t=Hd(t,r.children),t.flags|=4096,t)}function Ip(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$u(e.return,t,n)}function mc(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Iy(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(gt(e,t,r.children,n),r=Fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ip(e,n,t);else if(e.tag===19)Ip(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Fe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ia(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),mc(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ia(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}mc(t,!0,n,null,i);break;case"together":mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=rr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function k$(e,t,n){switch(t.tag){case 3:Ay(t),Eo();break;case 5:uy(t);break;case 1:Et(t.type)&&Pa(t);break;case 4:Ld(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;be(Na,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Fe,Fe.current&1),t.flags|=128,null):n&t.child.childLanes?Ly(e,t,n):(be(Fe,Fe.current&1),e=zn(e,t,n),e!==null?e.sibling:null);be(Fe,Fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Iy(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),be(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Oy(e,t,n)}return zn(e,t,n)}var Dy,Cu,By,My;Dy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cu=function(){};By=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Sr(mn.current);var i=null;switch(n){case"input":o=Qc(e,o),r=Qc(e,r),i=[];break;case"select":o=Pe({},o,{value:void 0}),r=Pe({},r,{value:void 0}),i=[];break;case"textarea":o=Zc(e,o),r=Zc(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ta)}tu(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ni.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ni.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&we("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};My=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xo(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _$(e,t,n){var r=t.pendingProps;switch(Td(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return Et(t.type)&&za(),lt(t),null;case 3:return r=t.stateNode,Fo(),ke(jt),ke(pt),Dd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,en!==null&&(Au(en),en=null))),Cu(e,t),lt(t),null;case 5:Id(t);var o=Sr(Gi.current);if(n=t.type,e!==null&&t.stateNode!=null)By(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return lt(t),null}if(e=Sr(mn.current),Ts(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pn]=t,r[Hi]=i,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(o=0;o<hi.length;o++)we(hi[o],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Gf(r,i),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},we("invalid",r);break;case"textarea":Kf(r,i),we("invalid",r)}tu(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Fs(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Fs(r.textContent,l,e),o=["children",""+l]):Ni.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&we("scroll",r)}switch(n){case"input":bs(r),Yf(r,i,!0);break;case"textarea":bs(r),Qf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ta)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[pn]=t,e[Hi]=r,Dy(e,t,!1,!1),t.stateNode=e;e:{switch(s=nu(n,r),n){case"dialog":we("cancel",e),we("close",e),o=r;break;case"iframe":case"object":case"embed":we("load",e),o=r;break;case"video":case"audio":for(o=0;o<hi.length;o++)we(hi[o],e);o=r;break;case"source":we("error",e),o=r;break;case"img":case"image":case"link":we("error",e),we("load",e),o=r;break;case"details":we("toggle",e),o=r;break;case"input":Gf(e,r),o=Qc(e,r),we("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Pe({},r,{value:void 0}),we("invalid",e);break;case"textarea":Kf(e,r),o=Zc(e,r),we("invalid",e);break;default:o=r}tu(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?xg(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&gg(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ai(e,c):typeof c=="number"&&Ai(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ni.hasOwnProperty(i)?c!=null&&i==="onScroll"&&we("scroll",e):c!=null&&md(e,i,c,s))}switch(n){case"input":bs(e),Yf(e,r,!1);break;case"textarea":bs(e),Qf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ar(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?vo(e,!!r.multiple,i,!1):r.defaultValue!=null&&vo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)My(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=Sr(Gi.current),Sr(mn.current),Ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[pn]=t,(i=r.nodeValue!==n)&&(e=It,e!==null))switch(e.tag){case 3:Fs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fs(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=t,t.stateNode=r}return lt(t),null;case 13:if(ke(Fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&At!==null&&t.mode&1&&!(t.flags&128))iy(),Eo(),t.flags|=98560,i=!1;else if(i=Ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[pn]=t}else Eo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lt(t),i=!1}else en!==null&&(Au(en),en=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?Ke===0&&(Ke=3):Jd())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return Fo(),Cu(e,t),e===null&&Vi(t.stateNode.containerInfo),lt(t),null;case 10:return Od(t.type._context),lt(t),null;case 17:return Et(t.type)&&za(),lt(t),null;case 19:if(ke(Fe),i=t.memoizedState,i===null)return lt(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Xo(i,!1);else{if(Ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ia(e),s!==null){for(t.flags|=128,Xo(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Fe,Fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ie()>zo&&(t.flags|=128,r=!0,Xo(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ia(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!_e)return lt(t),null}else 2*Ie()-i.renderingStartTime>zo&&n!==1073741824&&(t.flags|=128,r=!0,Xo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ie(),t.sibling=null,n=Fe.current,be(Fe,r?n&1|2:n&1),t):(lt(t),null);case 22:case 23:return Qd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ot&1073741824&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function j$(e,t){switch(Td(t),t.tag){case 1:return Et(t.type)&&za(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fo(),ke(jt),ke(pt),Dd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Id(t),null;case 13:if(ke(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Eo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Fe),null;case 4:return Fo(),null;case 10:return Od(t.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var Rs=!1,dt=!1,E$=typeof WeakSet=="function"?WeakSet:Set,Y=null;function go(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function Fu(e,t,n){try{n()}catch(r){Ae(e,t,r)}}var Dp=!1;function C$(e,t){if(fu=Ea,e=qg(),Cd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,f=e,y=null;t:for(;;){for(var b;f!==n||o!==0&&f.nodeType!==3||(l=s+o),f!==i||r!==0&&f.nodeType!==3||(c=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(b=f.firstChild)!==null;)y=f,f=b;for(;;){if(f===e)break t;if(y===n&&++u===o&&(l=s),y===i&&++d===r&&(c=s),(b=f.nextSibling)!==null)break;f=y,y=f.parentNode}f=b}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:e,selectionRange:n},Ea=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,w=x.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Jt(t.type,v),w);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch($){Ae(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return x=Dp,Dp=!1,x}function ji(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Fu(t,n,i)}o=o.next}while(o!==r)}}function yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uy(e){var t=e.alternate;t!==null&&(e.alternate=null,Uy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pn],delete t[Hi],delete t[gu],delete t[u$],delete t[d$])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vy(e){return e.tag===5||e.tag===3||e.tag===4}function Bp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ta));else if(r!==4&&(e=e.child,e!==null))for(zu(e,t,n),e=e.sibling;e!==null;)zu(e,t,n),e=e.sibling}function Pu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pu(e,t,n),e=e.sibling;e!==null;)Pu(e,t,n),e=e.sibling}var ot=null,Xt=!1;function An(e,t,n){for(n=n.child;n!==null;)Wy(e,t,n),n=n.sibling}function Wy(e,t,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:dt||go(n,t);case 6:var r=ot,o=Xt;ot=null,An(e,t,n),ot=r,Xt=o,ot!==null&&(Xt?(e=ot,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(Xt?(e=ot,n=n.stateNode,e.nodeType===8?lc(e.parentNode,n):e.nodeType===1&&lc(e,n),Bi(e)):lc(ot,n.stateNode));break;case 4:r=ot,o=Xt,ot=n.stateNode.containerInfo,Xt=!0,An(e,t,n),ot=r,Xt=o;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Fu(n,t,s),o=o.next}while(o!==r)}An(e,t,n);break;case 1:if(!dt&&(go(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,t,l)}An(e,t,n);break;case 21:An(e,t,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,An(e,t,n),dt=r):An(e,t,n);break;default:An(e,t,n)}}function Mp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new E$),t.forEach(function(r){var o=L$.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,Xt=!1;break e;case 3:ot=l.stateNode.containerInfo,Xt=!0;break e;case 4:ot=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(ot===null)throw Error(I(160));Wy(i,s,o),ot=null,Xt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){Ae(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hy(t,e),t=t.sibling}function Hy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qt(t,e),cn(e),r&4){try{ji(3,e,e.return),yl(3,e)}catch(v){Ae(e,e.return,v)}try{ji(5,e,e.return)}catch(v){Ae(e,e.return,v)}}break;case 1:Qt(t,e),cn(e),r&512&&n!==null&&go(n,n.return);break;case 5:if(Qt(t,e),cn(e),r&512&&n!==null&&go(n,n.return),e.flags&32){var o=e.stateNode;try{Ai(o,"")}catch(v){Ae(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&pg(o,i),nu(l,s);var u=nu(l,i);for(s=0;s<c.length;s+=2){var d=c[s],f=c[s+1];d==="style"?xg(o,f):d==="dangerouslySetInnerHTML"?gg(o,f):d==="children"?Ai(o,f):md(o,d,f,u)}switch(l){case"input":Jc(o,i);break;case"textarea":hg(o,i);break;case"select":var y=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?vo(o,!!i.multiple,b,!1):y!==!!i.multiple&&(i.defaultValue!=null?vo(o,!!i.multiple,i.defaultValue,!0):vo(o,!!i.multiple,i.multiple?[]:"",!1))}o[Hi]=i}catch(v){Ae(e,e.return,v)}}break;case 6:if(Qt(t,e),cn(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){Ae(e,e.return,v)}}break;case 3:if(Qt(t,e),cn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bi(t.containerInfo)}catch(v){Ae(e,e.return,v)}break;case 4:Qt(t,e),cn(e);break;case 13:Qt(t,e),cn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Yd=Ie())),r&4&&Mp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(dt=(u=dt)||d,Qt(t,e),dt=u):Qt(t,e),cn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Y=e,d=e.child;d!==null;){for(f=Y=d;Y!==null;){switch(y=Y,b=y.child,y.tag){case 0:case 11:case 14:case 15:ji(4,y,y.return);break;case 1:go(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){Ae(r,n,v)}}break;case 5:go(y,y.return);break;case 22:if(y.memoizedState!==null){Vp(f);continue}}b!==null?(b.return=y,Y=b):Vp(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,c=f.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=yg("display",s))}catch(v){Ae(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){Ae(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qt(t,e),cn(e),r&4&&Mp(e);break;case 21:break;default:Qt(t,e),cn(e)}}function cn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vy(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ai(o,""),r.flags&=-33);var i=Bp(e);Pu(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Bp(e);zu(e,l,s);break;default:throw Error(I(161))}}catch(c){Ae(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function F$(e,t,n){Y=e,qy(e)}function qy(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var o=Y,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Rs;if(!s){var l=o.alternate,c=l!==null&&l.memoizedState!==null||dt;l=Rs;var u=dt;if(Rs=s,(dt=c)&&!u)for(Y=o;Y!==null;)s=Y,c=s.child,s.tag===22&&s.memoizedState!==null?Wp(o):c!==null?(c.return=s,Y=c):Wp(o);for(;i!==null;)Y=i,qy(i),i=i.sibling;Y=o,Rs=l,dt=u}Up(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,Y=i):Up(e)}}function Up(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dt||yl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!dt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Jt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&jp(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jp(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Bi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}dt||t.flags&512&&Tu(t)}catch(y){Ae(t,t.return,y)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Vp(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Wp(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yl(4,t)}catch(c){Ae(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){Ae(t,o,c)}}var i=t.return;try{Tu(t)}catch(c){Ae(t,i,c)}break;case 5:var s=t.return;try{Tu(t)}catch(c){Ae(t,s,c)}}}catch(c){Ae(t,t.return,c)}if(t===e){Y=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Y=l;break}Y=t.return}}var T$=Math.ceil,Ma=Rn.ReactCurrentDispatcher,qd=Rn.ReactCurrentOwner,qt=Rn.ReactCurrentBatchConfig,fe=0,Ze=null,Ve=null,it=0,Ot=0,yo=ur(0),Ke=0,Ji=null,Ar=0,xl=0,Gd=0,Ei=null,kt=null,Yd=0,zo=1/0,bn=null,Ua=!1,Ru=null,tr=null,Os=!1,qn=null,Va=0,Ci=0,Ou=null,aa=-1,la=0;function vt(){return fe&6?Ie():aa!==-1?aa:aa=Ie()}function nr(e){return e.mode&1?fe&2&&it!==0?it&-it:p$.transition!==null?(la===0&&(la=Tg()),la):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Lg(e.type)),e):1}function on(e,t,n,r){if(50<Ci)throw Ci=0,Ou=null,Error(I(185));as(e,n,r),(!(fe&2)||e!==Ze)&&(e===Ze&&(!(fe&2)&&(xl|=n),Ke===4&&Vn(e,it)),Ct(e,r),n===1&&fe===0&&!(t.mode&1)&&(zo=Ie()+500,hl&&dr()))}function Ct(e,t){var n=e.callbackNode;pv(e,t);var r=ja(e,e===Ze?it:0);if(r===0)n!==null&&Zf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zf(n),t===1)e.tag===0?f$(Hp.bind(null,e)):ny(Hp.bind(null,e)),l$(function(){!(fe&6)&&dr()}),n=null;else{switch(zg(r)){case 1:n=$d;break;case 4:n=Cg;break;case 16:n=_a;break;case 536870912:n=Fg;break;default:n=_a}n=e0(n,Gy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gy(e,t){if(aa=-1,la=0,fe&6)throw Error(I(327));var n=e.callbackNode;if(ko()&&e.callbackNode!==n)return null;var r=ja(e,e===Ze?it:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Wa(e,r);else{t=r;var o=fe;fe|=2;var i=Ky();(Ze!==e||it!==t)&&(bn=null,zo=Ie()+500,Cr(e,t));do try{R$();break}catch(l){Yy(e,l)}while(!0);Rd(),Ma.current=i,fe=o,Ve!==null?t=0:(Ze=null,it=0,t=Ke)}if(t!==0){if(t===2&&(o=au(e),o!==0&&(r=o,t=Nu(e,o))),t===1)throw n=Ji,Cr(e,0),Vn(e,r),Ct(e,Ie()),n;if(t===6)Vn(e,r);else{if(o=e.current.alternate,!(r&30)&&!z$(o)&&(t=Wa(e,r),t===2&&(i=au(e),i!==0&&(r=i,t=Nu(e,i))),t===1))throw n=Ji,Cr(e,0),Vn(e,r),Ct(e,Ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:yr(e,kt,bn);break;case 3:if(Vn(e,r),(r&130023424)===r&&(t=Yd+500-Ie(),10<t)){if(ja(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){vt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=mu(yr.bind(null,e,kt,bn),t);break}yr(e,kt,bn);break;case 4:if(Vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-rn(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*T$(r/1960))-r,10<r){e.timeoutHandle=mu(yr.bind(null,e,kt,bn),r);break}yr(e,kt,bn);break;case 5:yr(e,kt,bn);break;default:throw Error(I(329))}}}return Ct(e,Ie()),e.callbackNode===n?Gy.bind(null,e):null}function Nu(e,t){var n=Ei;return e.current.memoizedState.isDehydrated&&(Cr(e,t).flags|=256),e=Wa(e,t),e!==2&&(t=kt,kt=n,t!==null&&Au(t)),e}function Au(e){kt===null?kt=e:kt.push.apply(kt,e)}function z$(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!an(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t){for(t&=~Gd,t&=~xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rn(t),r=1<<n;e[n]=-1,t&=~r}}function Hp(e){if(fe&6)throw Error(I(327));ko();var t=ja(e,0);if(!(t&1))return Ct(e,Ie()),null;var n=Wa(e,t);if(e.tag!==0&&n===2){var r=au(e);r!==0&&(t=r,n=Nu(e,r))}if(n===1)throw n=Ji,Cr(e,0),Vn(e,t),Ct(e,Ie()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yr(e,kt,bn),Ct(e,Ie()),null}function Kd(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(zo=Ie()+500,hl&&dr())}}function Lr(e){qn!==null&&qn.tag===0&&!(fe&6)&&ko();var t=fe;fe|=1;var n=qt.transition,r=ye;try{if(qt.transition=null,ye=1,e)return e()}finally{ye=r,qt.transition=n,fe=t,!(fe&6)&&dr()}}function Qd(){Ot=yo.current,ke(yo)}function Cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,a$(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&za();break;case 3:Fo(),ke(jt),ke(pt),Dd();break;case 5:Id(r);break;case 4:Fo();break;case 13:ke(Fe);break;case 19:ke(Fe);break;case 10:Od(r.type._context);break;case 22:case 23:Qd()}n=n.return}if(Ze=e,Ve=e=rr(e.current,null),it=Ot=t,Ke=0,Ji=null,Gd=xl=Ar=0,kt=Ei=null,wr!==null){for(t=0;t<wr.length;t++)if(n=wr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}wr=null}return e}function Yy(e,t){do{var n=Ve;try{if(Rd(),oa.current=Ba,Da){for(var r=Te.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Da=!1}if(Nr=0,Je=Ge=Te=null,_i=!1,Yi=0,qd.current=null,n===null||n.return===null){Ke=1,Ji=t,Ve=null;break}e:{var i=e,s=n.return,l=n,c=t;if(t=it,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var b=Pp(s);if(b!==null){b.flags&=-257,Rp(b,s,l,i,t),b.mode&1&&zp(i,u,t),t=b,c=u;var x=t.updateQueue;if(x===null){var v=new Set;v.add(c),t.updateQueue=v}else x.add(c);break e}else{if(!(t&1)){zp(i,u,t),Jd();break e}c=Error(I(426))}}else if(_e&&l.mode&1){var w=Pp(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Rp(w,s,l,i,t),zd(To(c,l));break e}}i=c=To(c,l),Ke!==4&&(Ke=2),Ei===null?Ei=[i]:Ei.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=zy(i,c,t);_p(i,g);break e;case 1:l=c;var p=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tr===null||!tr.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var $=Py(i,l,t);_p(i,$);break e}}i=i.return}while(i!==null)}Jy(n)}catch(k){t=k,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function Ky(){var e=Ma.current;return Ma.current=Ba,e===null?Ba:e}function Jd(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ze===null||!(Ar&268435455)&&!(xl&268435455)||Vn(Ze,it)}function Wa(e,t){var n=fe;fe|=2;var r=Ky();(Ze!==e||it!==t)&&(bn=null,Cr(e,t));do try{P$();break}catch(o){Yy(e,o)}while(!0);if(Rd(),fe=n,Ma.current=r,Ve!==null)throw Error(I(261));return Ze=null,it=0,Ke}function P$(){for(;Ve!==null;)Qy(Ve)}function R$(){for(;Ve!==null&&!ov();)Qy(Ve)}function Qy(e){var t=Zy(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,t===null?Jy(e):Ve=t,qd.current=null}function Jy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=j$(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,Ve=null;return}}else if(n=_$(n,t,Ot),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Ke===0&&(Ke=5)}function yr(e,t,n){var r=ye,o=qt.transition;try{qt.transition=null,ye=1,O$(e,t,n,r)}finally{qt.transition=o,ye=r}return null}function O$(e,t,n,r){do ko();while(qn!==null);if(fe&6)throw Error(I(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(hv(e,i),e===Ze&&(Ve=Ze=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Os||(Os=!0,e0(_a,function(){return ko(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=qt.transition,qt.transition=null;var s=ye;ye=1;var l=fe;fe|=4,qd.current=null,C$(e,n),Hy(n,e),e$(pu),Ea=!!fu,pu=fu=null,e.current=n,F$(n),iv(),fe=l,ye=s,qt.transition=i}else e.current=n;if(Os&&(Os=!1,qn=e,Va=o),i=e.pendingLanes,i===0&&(tr=null),lv(n.stateNode),Ct(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ua)throw Ua=!1,e=Ru,Ru=null,e;return Va&1&&e.tag!==0&&ko(),i=e.pendingLanes,i&1?e===Ou?Ci++:(Ci=0,Ou=e):Ci=0,dr(),null}function ko(){if(qn!==null){var e=zg(Va),t=qt.transition,n=ye;try{if(qt.transition=null,ye=16>e?16:e,qn===null)var r=!1;else{if(e=qn,qn=null,Va=0,fe&6)throw Error(I(331));var o=fe;for(fe|=4,Y=e.current;Y!==null;){var i=Y,s=i.child;if(Y.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(Y=u;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:ji(8,d,i)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var y=d.sibling,b=d.return;if(Uy(d),d===u){Y=null;break}if(y!==null){y.return=b,Y=y;break}Y=b}}}var x=i.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}Y=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,Y=s;else e:for(;Y!==null;){if(i=Y,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ji(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,Y=g;break e}Y=i.return}}var p=e.current;for(Y=p;Y!==null;){s=Y;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,Y=h;else e:for(s=p;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yl(9,l)}}catch(k){Ae(l,l.return,k)}if(l===s){Y=null;break e}var $=l.sibling;if($!==null){$.return=l.return,Y=$;break e}Y=l.return}}if(fe=o,dr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(cl,e)}catch{}r=!0}return r}finally{ye=n,qt.transition=t}}return!1}function qp(e,t,n){t=To(n,t),t=zy(e,t,1),e=er(e,t,1),t=vt(),e!==null&&(as(e,1,t),Ct(e,t))}function Ae(e,t,n){if(e.tag===3)qp(e,e,n);else for(;t!==null;){if(t.tag===3){qp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tr===null||!tr.has(r))){e=To(n,e),e=Py(t,e,1),t=er(t,e,1),e=vt(),t!==null&&(as(t,1,e),Ct(t,e));break}}t=t.return}}function N$(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&n,Ze===e&&(it&n)===n&&(Ke===4||Ke===3&&(it&130023424)===it&&500>Ie()-Yd?Cr(e,0):Gd|=n),Ct(e,t)}function Xy(e,t){t===0&&(e.mode&1?(t=ks,ks<<=1,!(ks&130023424)&&(ks=4194304)):t=1);var n=vt();e=Tn(e,t),e!==null&&(as(e,t,n),Ct(e,n))}function A$(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xy(e,n)}function L$(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Xy(e,n)}var Zy;Zy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||jt.current)_t=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _t=!1,k$(e,t,n);_t=!!(e.flags&131072)}else _t=!1,_e&&t.flags&1048576&&ry(t,Oa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;sa(e,t),e=t.pendingProps;var o=jo(t,pt.current);So(t,n),o=Md(null,t,r,e,o,n);var i=Ud();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Et(r)?(i=!0,Pa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ad(t),o.updater=gl,t.stateNode=o,o._reactInternals=t,wu(t,r,e,n),t=_u(null,t,r,!0,i,n)):(t.tag=0,_e&&i&&Fd(t),gt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(sa(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=D$(r),e=Jt(r,e),o){case 0:t=ku(null,t,r,e,n);break e;case 1:t=Ap(null,t,r,e,n);break e;case 11:t=Op(null,t,r,e,n);break e;case 14:t=Np(null,t,r,Jt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Jt(r,o),ku(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Jt(r,o),Ap(e,t,r,o,n);case 3:e:{if(Ay(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,o=i.element,cy(e,t),La(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=To(Error(I(423)),t),t=Lp(e,t,r,n,o);break e}else if(r!==o){o=To(Error(I(424)),t),t=Lp(e,t,r,n,o);break e}else for(At=Zn(t.stateNode.containerInfo.firstChild),It=t,_e=!0,en=null,n=ay(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Eo(),r===o){t=zn(e,t,n);break e}gt(e,t,r,n)}t=t.child}return t;case 5:return uy(t),e===null&&vu(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,hu(r,o)?s=null:i!==null&&hu(r,i)&&(t.flags|=32),Ny(e,t),gt(e,t,s,n),t.child;case 6:return e===null&&vu(t),null;case 13:return Ly(e,t,n);case 4:return Ld(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Co(t,null,r,n):gt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Jt(r,o),Op(e,t,r,o,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,be(Na,r._currentValue),r._currentValue=s,i!==null)if(an(i.value,s)){if(i.children===o.children&&!jt.current){t=zn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=En(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),$u(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(I(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$u(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}gt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,So(t,n),o=Gt(o),r=r(o),t.flags|=1,gt(e,t,r,n),t.child;case 14:return r=t.type,o=Jt(r,t.pendingProps),o=Jt(r.type,o),Np(e,t,r,o,n);case 15:return Ry(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Jt(r,o),sa(e,t),t.tag=1,Et(r)?(e=!0,Pa(t)):e=!1,So(t,n),Ty(t,r,o),wu(t,r,o,n),_u(null,t,r,!0,e,n);case 19:return Iy(e,t,n);case 22:return Oy(e,t,n)}throw Error(I(156,t.tag))};function e0(e,t){return Eg(e,t)}function I$(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,n,r){return new I$(e,t,n,r)}function Xd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function D$(e){if(typeof e=="function")return Xd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yd)return 11;if(e===xd)return 14}return 2}function rr(e,t){var n=e.alternate;return n===null?(n=Ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ca(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Xd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case so:return Fr(n.children,o,i,t);case gd:s=8,o|=8;break;case qc:return e=Ht(12,n,t,o|2),e.elementType=qc,e.lanes=i,e;case Gc:return e=Ht(13,n,t,o),e.elementType=Gc,e.lanes=i,e;case Yc:return e=Ht(19,n,t,o),e.elementType=Yc,e.lanes=i,e;case ug:return vl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lg:s=10;break e;case cg:s=9;break e;case yd:s=11;break e;case xd:s=14;break e;case Bn:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=Ht(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Fr(e,t,n,r){return e=Ht(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=Ht(22,e,r,t),e.elementType=ug,e.lanes=n,e.stateNode={isHidden:!1},e}function gc(e,t,n){return e=Ht(6,e,null,t),e.lanes=n,e}function yc(e,t,n){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function B$(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Zd(e,t,n,r,o,i,s,l,c){return e=new B$(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ht(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ad(i),e}function M$(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:io,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function t0(e){if(!e)return lr;e=e._reactInternals;e:{if(Vr(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Et(n))return ty(e,n,t)}return t}function n0(e,t,n,r,o,i,s,l,c){return e=Zd(n,r,!0,e,o,i,s,l,c),e.context=t0(null),n=e.current,r=vt(),o=nr(n),i=En(r,o),i.callback=t??null,er(n,i,o),e.current.lanes=o,as(e,o,r),Ct(e,r),e}function $l(e,t,n,r){var o=t.current,i=vt(),s=nr(o);return n=t0(n),t.context===null?t.context=n:t.pendingContext=n,t=En(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=er(o,t,s),e!==null&&(on(e,o,s,i),ra(e,o,s)),s}function Ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ef(e,t){Gp(e,t),(e=e.alternate)&&Gp(e,t)}function U$(){return null}var r0=typeof reportError=="function"?reportError:function(e){console.error(e)};function tf(e){this._internalRoot=e}bl.prototype.render=tf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));$l(e,t,null,null)};bl.prototype.unmount=tf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lr(function(){$l(null,e,null,null)}),t[Fn]=null}};function bl(e){this._internalRoot=e}bl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Og();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&Ag(e)}};function nf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function V$(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ha(s);i.call(u)}}var s=n0(t,r,e,0,null,!1,!1,"",Yp);return e._reactRootContainer=s,e[Fn]=s.current,Vi(e.nodeType===8?e.parentNode:e),Lr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Ha(c);l.call(u)}}var c=Zd(e,0,!1,null,null,!1,!1,"",Yp);return e._reactRootContainer=c,e[Fn]=c.current,Vi(e.nodeType===8?e.parentNode:e),Lr(function(){$l(t,c,n,r)}),c}function Sl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var c=Ha(s);l.call(c)}}$l(t,s,e,o)}else s=V$(n,t,e,o,r);return Ha(s)}Pg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pi(t.pendingLanes);n!==0&&(bd(t,n|1),Ct(t,Ie()),!(fe&6)&&(zo=Ie()+500,dr()))}break;case 13:Lr(function(){var r=Tn(e,1);if(r!==null){var o=vt();on(r,e,1,o)}}),ef(e,1)}};wd=function(e){if(e.tag===13){var t=Tn(e,134217728);if(t!==null){var n=vt();on(t,e,134217728,n)}ef(e,134217728)}};Rg=function(e){if(e.tag===13){var t=nr(e),n=Tn(e,t);if(n!==null){var r=vt();on(n,e,t,r)}ef(e,t)}};Og=function(){return ye};Ng=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};ou=function(e,t,n){switch(t){case"input":if(Jc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=pl(r);if(!o)throw Error(I(90));fg(r),Jc(r,o)}}}break;case"textarea":hg(e,n);break;case"select":t=n.value,t!=null&&vo(e,!!n.multiple,t,!1)}};bg=Kd;wg=Lr;var W$={usingClientEntryPoint:!1,Events:[cs,uo,pl,vg,$g,Kd]},Zo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},H$={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_g(e),e===null?null:e.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||U$,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ns.isDisabled&&Ns.supportsFiber)try{cl=Ns.inject(H$),hn=Ns}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$;Bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nf(t))throw Error(I(200));return M$(e,t,null,n)};Bt.createRoot=function(e,t){if(!nf(e))throw Error(I(299));var n=!1,r="",o=r0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Zd(e,1,!1,null,null,n,!1,r,o),e[Fn]=t.current,Vi(e.nodeType===8?e.parentNode:e),new tf(t)};Bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=_g(t),e=e===null?null:e.stateNode,e};Bt.flushSync=function(e){return Lr(e)};Bt.hydrate=function(e,t,n){if(!wl(t))throw Error(I(200));return Sl(null,e,t,!0,n)};Bt.hydrateRoot=function(e,t,n){if(!nf(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=r0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=n0(t,null,e,1,n??null,o,!1,i,s),e[Fn]=t.current,Vi(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new bl(t)};Bt.render=function(e,t,n){if(!wl(t))throw Error(I(200));return Sl(null,e,t,!1,n)};Bt.unmountComponentAtNode=function(e){if(!wl(e))throw Error(I(40));return e._reactRootContainer?(Lr(function(){Sl(null,null,e,!1,function(){e._reactRootContainer=null,e[Fn]=null})}),!0):!1};Bt.unstable_batchedUpdates=Kd;Bt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wl(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Sl(e,t,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function o0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o0)}catch(e){console.error(e)}}o0(),og.exports=Bt;var q$=og.exports,Kp=q$;Wc.createRoot=Kp.createRoot,Wc.hydrateRoot=Kp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xi(){return Xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xi.apply(this,arguments)}var Gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Gn||(Gn={}));const Qp="popstate";function G$(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:l}=r.location;return qa("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Zi(o)}return i0(t,n,null,e)}function Y$(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:l="",hash:c=""}=Wr(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),qa("",{pathname:s,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let c=o.location.href,u=c.indexOf("#");l=u===-1?c:c.slice(0,u)}return l+"#"+(typeof i=="string"?i:Zi(i))}function r(o,i){kl(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return i0(t,n,r,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function kl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function K$(){return Math.random().toString(36).substr(2,8)}function Jp(e,t){return{usr:e.state,key:e.key,idx:t}}function qa(e,t,n,r){return n===void 0&&(n=null),Xi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wr(t):t,{state:n,key:t&&t.key||r||K$()})}function Zi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function i0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,l=Gn.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(Xi({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){l=Gn.Pop;let w=d(),g=w==null?null:w-u;u=w,c&&c({action:l,location:v.location,delta:g})}function y(w,g){l=Gn.Push;let p=qa(v.location,w,g);n&&n(p,w),u=d()+1;let h=Jp(p,u),$=v.createHref(p);try{s.pushState(h,"",$)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign($)}i&&c&&c({action:l,location:v.location,delta:1})}function b(w,g){l=Gn.Replace;let p=qa(v.location,w,g);n&&n(p,w),u=d();let h=Jp(p,u),$=v.createHref(p);s.replaceState(h,"",$),i&&c&&c({action:l,location:v.location,delta:0})}function x(w){let g=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof w=="string"?w:Zi(w);return p=p.replace(/ $/,"%20"),ze(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let v={get action(){return l},get location(){return e(o,s)},listen(w){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Qp,f),c=w,()=>{o.removeEventListener(Qp,f),c=null}},createHref(w){return t(o,w)},createURL:x,encodeLocation(w){let g=x(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:y,replace:b,go(w){return s.go(w)}};return v}var Xp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Xp||(Xp={}));function Q$(e,t,n){return n===void 0&&(n="/"),J$(e,t,n)}function J$(e,t,n,r){let o=typeof t=="string"?Wr(t):t,i=Po(o.pathname||"/",n);if(i==null)return null;let s=s0(e);X$(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=cb(i);l=ab(s[c],u)}return l}function s0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};c.relativePath.startsWith("/")&&(ze(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=or([r,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(ze(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),s0(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:ib(u,i.index),routesMeta:d})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,s);else for(let c of a0(i.path))o(i,s,c)}),t}function a0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=a0(r.join("/")),l=[];return l.push(...s.map(c=>c===""?i:[i,c].join("/"))),o&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function X$(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Z$=/^:[\w-]+$/,eb=3,tb=2,nb=1,rb=10,ob=-2,Zp=e=>e==="*";function ib(e,t){let n=e.split("/"),r=n.length;return n.some(Zp)&&(r+=ob),t&&(r+=tb),n.filter(o=>!Zp(o)).reduce((o,i)=>o+(Z$.test(i)?eb:i===""?nb:rb),r)}function sb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ab(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=Lu({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),y=c.route;if(!f)return null;Object.assign(o,f.params),s.push({params:o,pathname:or([i,f.pathname]),pathnameBase:hb(or([i,f.pathnameBase])),route:y}),f.pathnameBase!=="/"&&(i=or([i,f.pathnameBase]))}return s}function Lu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=lb(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:y,isOptional:b}=d;if(y==="*"){let v=l[f]||"";s=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const x=l[f];return b&&!x?u[y]=void 0:u[y]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function lb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),kl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function cb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return kl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Po(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ub=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,db=e=>ub.test(e);function fb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Wr(e):e,i;if(n)if(db(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),kl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=eh(n.substring(1),"/"):i=eh(n,t)}else i=t;return{pathname:i,search:mb(r),hash:gb(o)}}function eh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function xc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function rf(e,t){let n=pb(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function of(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Wr(e):(o=Xi({},e),ze(!o.pathname||!o.pathname.includes("?"),xc("?","pathname","search",o)),ze(!o.pathname||!o.pathname.includes("#"),xc("#","pathname","hash",o)),ze(!o.search||!o.search.includes("#"),xc("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,l;if(s==null)l=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let y=s.split("/");for(;y[0]==="..";)y.shift(),f-=1;o.pathname=y.join("/")}l=f>=0?t[f]:"/"}let c=fb(o,l),u=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const or=e=>e.join("/").replace(/\/\/+/g,"/"),hb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const l0=["post","put","patch","delete"];new Set(l0);const xb=["get",...l0];new Set(xb);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},es.apply(this,arguments)}const _l=j.createContext(null),c0=j.createContext(null),On=j.createContext(null),jl=j.createContext(null),yn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),u0=j.createContext(null);function vb(e,t){let{relative:n}=t===void 0?{}:t;Uo()||ze(!1);let{basename:r,navigator:o}=j.useContext(On),{hash:i,pathname:s,search:l}=El(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:or([r,s])),o.createHref({pathname:c,search:l,hash:i})}function Uo(){return j.useContext(jl)!=null}function fr(){return Uo()||ze(!1),j.useContext(jl).location}function d0(e){j.useContext(On).static||j.useLayoutEffect(e)}function pr(){let{isDataRoute:e}=j.useContext(yn);return e?Ob():$b()}function $b(){Uo()||ze(!1);let e=j.useContext(_l),{basename:t,future:n,navigator:r}=j.useContext(On),{matches:o}=j.useContext(yn),{pathname:i}=fr(),s=JSON.stringify(rf(o,n.v7_relativeSplatPath)),l=j.useRef(!1);return d0(()=>{l.current=!0}),j.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=of(u,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:or([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,i,e])}const bb=j.createContext(null);function wb(e){let t=j.useContext(yn).outlet;return t&&j.createElement(bb.Provider,{value:e},t)}function f0(){let{matches:e}=j.useContext(yn),t=e[e.length-1];return t?t.params:{}}function El(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(On),{matches:o}=j.useContext(yn),{pathname:i}=fr(),s=JSON.stringify(rf(o,r.v7_relativeSplatPath));return j.useMemo(()=>of(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Sb(e,t){return kb(e,t)}function kb(e,t,n,r){Uo()||ze(!1);let{navigator:o}=j.useContext(On),{matches:i}=j.useContext(yn),s=i[i.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=fr(),d;if(t){var f;let w=typeof t=="string"?Wr(t):t;c==="/"||(f=w.pathname)!=null&&f.startsWith(c)||ze(!1),d=w}else d=u;let y=d.pathname||"/",b=y;if(c!=="/"){let w=c.replace(/^\//,"").split("/");b="/"+y.replace(/^\//,"").split("/").slice(w.length).join("/")}let x=Q$(e,{pathname:b}),v=Fb(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:or([c,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:or([c,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n,r);return t&&v?j.createElement(jl.Provider,{value:{location:es({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Gn.Pop}},v):v}function _b(){let e=Rb(),t=yb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:o},n):null,null)}const jb=j.createElement(_b,null);class Eb extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(yn.Provider,{value:this.props.routeContext},j.createElement(u0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cb(e){let{routeContext:t,match:n,children:r}=e,o=j.useContext(_l);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(yn.Provider,{value:t},r)}function Fb(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||ze(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:y,errors:b}=n,x=f.route.loader&&y[f.route.id]===void 0&&(!b||b[f.route.id]===void 0);if(f.route.lazy||x){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,y)=>{let b,x=!1,v=null,w=null;n&&(b=l&&f.route.id?l[f.route.id]:void 0,v=f.route.errorElement||jb,c&&(u<0&&y===0?(Nb("route-fallback"),x=!0,w=null):u===y&&(x=!0,w=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,y+1)),p=()=>{let h;return b?h=v:x?h=w:f.route.Component?h=j.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,j.createElement(Cb,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||y===0)?j.createElement(Eb,{location:n.location,revalidation:n.revalidation,component:v,error:b,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var p0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(p0||{}),h0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(h0||{});function Tb(e){let t=j.useContext(_l);return t||ze(!1),t}function zb(e){let t=j.useContext(c0);return t||ze(!1),t}function Pb(e){let t=j.useContext(yn);return t||ze(!1),t}function m0(e){let t=Pb(),n=t.matches[t.matches.length-1];return n.route.id||ze(!1),n.route.id}function Rb(){var e;let t=j.useContext(u0),n=zb(),r=m0();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ob(){let{router:e}=Tb(p0.UseNavigateStable),t=m0(h0.UseNavigateStable),n=j.useRef(!1);return d0(()=>{n.current=!0}),j.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,es({fromRouteId:t},i)))},[e,t])}const th={};function Nb(e,t,n){th[e]||(th[e]=!0)}function g0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ga(e){let{to:t,replace:n,state:r,relative:o}=e;Uo()||ze(!1);let{future:i,static:s}=j.useContext(On),{matches:l}=j.useContext(yn),{pathname:c}=fr(),u=pr(),d=of(t,rf(l,i.v7_relativeSplatPath),c,o==="path"),f=JSON.stringify(d);return j.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:o}),[u,f,o,n,r]),null}function y0(e){return wb(e.context)}function Ne(e){ze(!1)}function x0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Gn.Pop,navigator:i,static:s=!1,future:l}=e;Uo()&&ze(!1);let c=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:c,navigator:i,static:s,future:es({v7_relativeSplatPath:!1},l)}),[c,l,i,s]);typeof r=="string"&&(r=Wr(r));let{pathname:d="/",search:f="",hash:y="",state:b=null,key:x="default"}=r,v=j.useMemo(()=>{let w=Po(d,c);return w==null?null:{location:{pathname:w,search:f,hash:y,state:b,key:x},navigationType:o}},[c,d,f,y,b,x,o]);return v==null?null:j.createElement(On.Provider,{value:u},j.createElement(jl.Provider,{children:n,value:v}))}function Ab(e){let{children:t,location:n}=e;return Sb(Iu(t),n)}new Promise(()=>{});function Iu(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,o)=>{if(!j.isValidElement(r))return;let i=[...t,o];if(r.type===j.Fragment){n.push.apply(n,Iu(r.props.children,i));return}r.type!==Ne&&ze(!1),!r.props.index||!r.props.children||ze(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Iu(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ya.apply(this,arguments)}function v0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Lb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ib(e,t){return e.button===0&&(!t||t==="_self")&&!Lb(e)}const Db=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Bb=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Mb="6";try{window.__reactRouterVersion=Mb}catch{}const Ub=j.createContext({isTransitioning:!1}),Vb="startTransition",Ka=N1[Vb];function Wb(e){let{basename:t,children:n,future:r,window:o}=e,i=j.useRef();i.current==null&&(i.current=G$({window:o,v5Compat:!0}));let s=i.current,[l,c]=j.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=j.useCallback(f=>{u&&Ka?Ka(()=>c(f)):c(f)},[c,u]);return j.useLayoutEffect(()=>s.listen(d),[s,d]),j.useEffect(()=>g0(r),[r]),j.createElement(x0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}function Hb(e){let{basename:t,children:n,future:r,window:o}=e,i=j.useRef();i.current==null&&(i.current=Y$({window:o,v5Compat:!0}));let s=i.current,[l,c]=j.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=j.useCallback(f=>{u&&Ka?Ka(()=>c(f)):c(f)},[c,u]);return j.useLayoutEffect(()=>s.listen(d),[s,d]),j.useEffect(()=>g0(r),[r]),j.createElement(x0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const qb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yb=j.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,y=v0(t,Db),{basename:b}=j.useContext(On),x,v=!1;if(typeof u=="string"&&Gb.test(u)&&(x=u,qb))try{let h=new URL(window.location.href),$=u.startsWith("//")?new URL(h.protocol+u):new URL(u),k=Po($.pathname,b);$.origin===h.origin&&k!=null?u=k+$.search+$.hash:v=!0}catch{}let w=vb(u,{relative:o}),g=Jb(u,{replace:s,state:l,target:c,preventScrollReset:d,relative:o,viewTransition:f});function p(h){r&&r(h),h.defaultPrevented||g(h)}return j.createElement("a",Ya({},y,{href:x||w,onClick:v||i?r:p,ref:n,target:c}))}),Kb=j.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:l,to:c,viewTransition:u,children:d}=t,f=v0(t,Bb),y=El(c,{relative:f.relative}),b=fr(),x=j.useContext(c0),{navigator:v,basename:w}=j.useContext(On),g=x!=null&&Xb(y)&&u===!0,p=v.encodeLocation?v.encodeLocation(y).pathname:y.pathname,h=b.pathname,$=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;o||(h=h.toLowerCase(),$=$?$.toLowerCase():null,p=p.toLowerCase()),$&&w&&($=Po($,w)||$);const k=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let C=h===p||!s&&h.startsWith(p)&&h.charAt(k)==="/",_=$!=null&&($===p||!s&&$.startsWith(p)&&$.charAt(p.length)==="/"),E={isActive:C,isPending:_,isTransitioning:g},N=C?r:void 0,L;typeof i=="function"?L=i(E):L=[i,C?"active":null,_?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let V=typeof l=="function"?l(E):l;return j.createElement(Yb,Ya({},f,{"aria-current":N,className:L,ref:n,style:V,to:c,viewTransition:u}),typeof d=="function"?d(E):d)});var Du;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Du||(Du={}));var nh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(nh||(nh={}));function Qb(e){let t=j.useContext(_l);return t||ze(!1),t}function Jb(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:l}=t===void 0?{}:t,c=pr(),u=fr(),d=El(e,{relative:s});return j.useCallback(f=>{if(Ib(f,n)){f.preventDefault();let y=r!==void 0?r:Zi(u)===Zi(d);c(e,{replace:y,state:o,preventScrollReset:i,relative:s,viewTransition:l})}},[u,c,d,r,o,n,e,i,s,l])}function Xb(e,t){t===void 0&&(t={});let n=j.useContext(Ub);n==null&&ze(!1);let{basename:r}=Qb(Du.useViewTransitionState),o=El(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Po(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Po(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Lu(o.pathname,s)!=null||Lu(o.pathname,i)!=null}var Xe=function(){return Xe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Xe.apply(this,arguments)};function Ro(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Se="-ms-",Fi="-moz-",pe="-webkit-",$0="comm",Cl="rule",sf="decl",Zb="@import",ew="@namespace",b0="@keyframes",tw="@layer",w0=Math.abs,af=String.fromCharCode,Bu=Object.assign;function nw(e,t){return Ye(e,0)^45?(((t<<2^Ye(e,0))<<2^Ye(e,1))<<2^Ye(e,2))<<2^Ye(e,3):0}function S0(e){return e.trim()}function wn(e,t){return(e=t.exec(e))?e[0]:e}function se(e,t,n){return e.replace(t,n)}function ua(e,t,n){return e.indexOf(t,n)}function Ye(e,t){return e.charCodeAt(t)|0}function Ir(e,t,n){return e.slice(t,n)}function Zt(e){return e.length}function k0(e){return e.length}function mi(e,t){return t.push(e),e}function rw(e,t){return e.map(t).join("")}function rh(e,t){return e.filter(function(n){return!wn(n,t)})}var Fl=1,Oo=1,_0=0,Kt=0,Ue=0,Vo="";function Tl(e,t,n,r,o,i,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Fl,column:Oo,length:s,return:"",siblings:l}}function Dn(e,t){return Bu(Tl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Kr(e){for(;e.root;)e=Dn(e.root,{children:[e]});mi(e,e.siblings)}function ow(){return Ue}function iw(){return Ue=Kt>0?Ye(Vo,--Kt):0,Oo--,Ue===10&&(Oo=1,Fl--),Ue}function sn(){return Ue=Kt<_0?Ye(Vo,Kt++):0,Oo++,Ue===10&&(Oo=1,Fl++),Ue}function Yn(){return Ye(Vo,Kt)}function da(){return Kt}function zl(e,t){return Ir(Vo,e,t)}function ts(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sw(e){return Fl=Oo=1,_0=Zt(Vo=e),Kt=0,[]}function aw(e){return Vo="",e}function vc(e){return S0(zl(Kt-1,Mu(e===91?e+2:e===40?e+1:e)))}function lw(e){for(;(Ue=Yn())&&Ue<33;)sn();return ts(e)>2||ts(Ue)>3?"":" "}function cw(e,t){for(;--t&&sn()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return zl(e,da()+(t<6&&Yn()==32&&sn()==32))}function Mu(e){for(;sn();)switch(Ue){case e:return Kt;case 34:case 39:e!==34&&e!==39&&Mu(Ue);break;case 40:e===41&&Mu(e);break;case 92:sn();break}return Kt}function uw(e,t){for(;sn()&&e+Ue!==57;)if(e+Ue===84&&Yn()===47)break;return"/*"+zl(t,Kt-1)+"*"+af(e===47?e:sn())}function dw(e){for(;!ts(Yn());)sn();return zl(e,Kt)}function fw(e){return aw(fa("",null,null,null,[""],e=sw(e),0,[0],e))}function fa(e,t,n,r,o,i,s,l,c){for(var u=0,d=0,f=s,y=0,b=0,x=0,v=1,w=1,g=1,p=0,h="",$=o,k=i,C=r,_=h;w;)switch(x=p,p=sn()){case 40:if(x!=108&&Ye(_,f-1)==58){ua(_+=se(vc(p),"&","&\f"),"&\f",w0(u?l[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:_+=vc(p);break;case 9:case 10:case 13:case 32:_+=lw(x);break;case 92:_+=cw(da()-1,7);continue;case 47:switch(Yn()){case 42:case 47:mi(pw(uw(sn(),da()),t,n,c),c),(ts(x||1)==5||ts(Yn()||1)==5)&&Zt(_)&&Ir(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*v:l[u++]=Zt(_)*g;case 125*v:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+d:g==-1&&(_=se(_,/\f/g,"")),b>0&&(Zt(_)-f||v===0&&x===47)&&mi(b>32?ih(_+";",r,n,f-1,c):ih(se(_," ","")+";",r,n,f-2,c),c);break;case 59:_+=";";default:if(mi(C=oh(_,t,n,u,d,o,l,h,$=[],k=[],f,i),i),p===123)if(d===0)fa(_,t,C,C,$,i,f,l,k);else{switch(y){case 99:if(Ye(_,3)===110)break;case 108:if(Ye(_,2)===97)break;default:d=0;case 100:case 109:case 115:}d?fa(e,C,C,r&&mi(oh(e,C,C,0,0,o,l,h,o,$=[],f,k),k),o,k,f,l,r?$:k):fa(_,C,C,C,[""],k,0,l,k)}}u=d=b=0,v=g=1,h=_="",f=s;break;case 58:f=1+Zt(_),b=x;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&iw()==125)continue}switch(_+=af(p),p*v){case 38:g=d>0?1:(_+="\f",-1);break;case 44:l[u++]=(Zt(_)-1)*g,g=1;break;case 64:Yn()===45&&(_+=vc(sn())),y=Yn(),d=f=Zt(h=_+=dw(da())),p++;break;case 45:x===45&&Zt(_)==2&&(v=0)}}return i}function oh(e,t,n,r,o,i,s,l,c,u,d,f){for(var y=o-1,b=o===0?i:[""],x=k0(b),v=0,w=0,g=0;v<r;++v)for(var p=0,h=Ir(e,y+1,y=w0(w=s[v])),$=e;p<x;++p)($=S0(w>0?b[p]+" "+h:se(h,/&\f/g,b[p])))&&(c[g++]=$);return Tl(e,t,n,o===0?Cl:l,c,u,d,f)}function pw(e,t,n,r){return Tl(e,t,n,$0,af(ow()),Ir(e,2,-2),0,r)}function ih(e,t,n,r,o){return Tl(e,t,n,sf,Ir(e,0,r),Ir(e,r+1,-1),r,o)}function j0(e,t,n){switch(nw(e,t)){case 5103:return pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return pe+e+e;case 4855:return pe+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Fi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+e+Fi+e+Se+e+e;case 5936:switch(Ye(e,t+11)){case 114:return pe+e+Se+se(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return pe+e+Se+se(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return pe+e+Se+se(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return pe+e+Se+e+e;case 6165:return pe+e+Se+"flex-"+e+e;case 5187:return pe+e+se(e,/(\w+).+(:[^]+)/,pe+"box-$1$2"+Se+"flex-$1$2")+e;case 5443:return pe+e+Se+"flex-item-"+se(e,/flex-|-self/g,"")+(wn(e,/flex-|baseline/)?"":Se+"grid-row-"+se(e,/flex-|-self/g,""))+e;case 4675:return pe+e+Se+"flex-line-pack"+se(e,/align-content|flex-|-self/g,"")+e;case 5548:return pe+e+Se+se(e,"shrink","negative")+e;case 5292:return pe+e+Se+se(e,"basis","preferred-size")+e;case 6060:return pe+"box-"+se(e,"-grow","")+pe+e+Se+se(e,"grow","positive")+e;case 4554:return pe+se(e,/([^-])(transform)/g,"$1"+pe+"$2")+e;case 6187:return se(se(se(e,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),e,"")+e;case 5495:case 3959:return se(e,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return se(se(e,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+pe+e+e;case 4200:if(!wn(e,/flex-|baseline/))return Se+"grid-column-align"+Ir(e,t)+e;break;case 2592:case 3360:return Se+se(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,wn(r.props,/grid-\w+-end/)})?~ua(e+(n=n[t].value),"span",0)?e:Se+se(e,"-start","")+e+Se+"grid-row-span:"+(~ua(n,"span",0)?wn(n,/\d+/):+wn(n,/\d+/)-+wn(e,/\d+/))+";":Se+se(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return wn(r.props,/grid-\w+-start/)})?e:Se+se(se(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return se(e,/(.+)-inline(.+)/,pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zt(e)-1-t>6)switch(Ye(e,t+1)){case 109:if(Ye(e,t+4)!==45)break;case 102:return se(e,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+Fi+(Ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ua(e,"stretch",0)?j0(se(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return se(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,l,c,u){return Se+o+":"+i+u+(s?Se+o+"-span:"+(l?c:+c-+i)+u:"")+e});case 4949:if(Ye(e,t+6)===121)return se(e,":",":"+pe)+e;break;case 6444:switch(Ye(e,Ye(e,14)===45?18:11)){case 120:return se(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(Ye(e,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+Se+"$2box$3")+e;case 100:return se(e,":",":"+Se)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(e,"scroll-","scroll-snap-")+e}return e}function Qa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function hw(e,t,n,r){switch(e.type){case tw:if(e.children.length)break;case Zb:case ew:case sf:return e.return=e.return||e.value;case $0:return"";case b0:return e.return=e.value+"{"+Qa(e.children,r)+"}";case Cl:if(!Zt(e.value=e.props.join(",")))return""}return Zt(n=Qa(e.children,r))?e.return=e.value+"{"+n+"}":""}function mw(e){var t=k0(e);return function(n,r,o,i){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,i)||"";return s}}function gw(e){return function(t){t.root||(t=t.return)&&e(t)}}function yw(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case sf:e.return=j0(e.value,e.length,n);return;case b0:return Qa([Dn(e,{value:se(e.value,"@","@"+pe)})],r);case Cl:if(e.length)return rw(n=e.props,function(o){switch(wn(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Kr(Dn(e,{props:[se(o,/:(read-\w+)/,":"+Fi+"$1")]})),Kr(Dn(e,{props:[o]})),Bu(e,{props:rh(n,r)});break;case"::placeholder":Kr(Dn(e,{props:[se(o,/:(plac\w+)/,":"+pe+"input-$1")]})),Kr(Dn(e,{props:[se(o,/:(plac\w+)/,":"+Fi+"$1")]})),Kr(Dn(e,{props:[se(o,/:(plac\w+)/,Se+"input-$1")]})),Kr(Dn(e,{props:[o]})),Bu(e,{props:rh(n,r)});break}return""})}}var xw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rt={},No=typeof process<"u"&&Rt!==void 0&&(Rt.REACT_APP_SC_ATTR||Rt.SC_ATTR)||"data-styled",E0="active",C0="data-styled-version",Pl="6.3.11",lf=`/*!sc*/
`,Ti=typeof window<"u"&&typeof document<"u",vw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==""?Rt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Rt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.SC_DISABLE_SPEEDY!==void 0&&Rt.SC_DISABLE_SPEEDY!==""&&Rt.SC_DISABLE_SPEEDY!=="false"&&Rt.SC_DISABLE_SPEEDY),$w={};function Dr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var pa=new Map,Ja=new Map,ha=1,gi=function(e){if(pa.has(e))return pa.get(e);for(;Ja.has(ha);)ha++;var t=ha++;return pa.set(e,t),Ja.set(t,e),t},bw=function(e,t){ha=t+1,pa.set(e,t),Ja.set(t,e)},cf=Object.freeze([]),Ao=Object.freeze({});function F0(e,t,n){return n===void 0&&(n=Ao),e.theme!==n.theme&&e.theme||t||n.theme}var T0=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),ww=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sw=/(^-|-$)/g;function sh(e){return e.replace(ww,"-").replace(Sw,"")}var kw=/(a)(d)/gi,ah=function(e){return String.fromCharCode(e+(e>25?39:97))};function Uu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ah(t%52)+n;return(ah(t%52)+n).replace(kw,"$1-$2")}var $c,vr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},z0=function(e){return vr(5381,e)};function uf(e){return Uu(z0(e)>>>0)}function _w(e){return e.displayName||e.name||"Component"}function bc(e){return typeof e=="string"&&!0}var P0=typeof Symbol=="function"&&Symbol.for,R0=P0?Symbol.for("react.memo"):60115,jw=P0?Symbol.for("react.forward_ref"):60112,Ew={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Cw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},O0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fw=(($c={})[jw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$c[R0]=O0,$c);function lh(e){return("type"in(t=e)&&t.type.$$typeof)===R0?O0:"$$typeof"in e?Fw[e.$$typeof]:Ew;var t}var Tw=Object.defineProperty,zw=Object.getOwnPropertyNames,ch=Object.getOwnPropertySymbols,Pw=Object.getOwnPropertyDescriptor,Rw=Object.getPrototypeOf,uh=Object.prototype;function N0(e,t,n){if(typeof t!="string"){if(uh){var r=Rw(t);r&&r!==uh&&N0(e,r,n)}var o=zw(t);ch&&(o=o.concat(ch(t)));for(var i=lh(e),s=lh(t),l=0;l<o.length;++l){var c=o[l];if(!(c in Cw||n&&n[c]||s&&c in s||i&&c in i)){var u=Pw(t,c);try{Tw(e,c,u)}catch{}}}}return e}function Br(e){return typeof e=="function"}function df(e){return typeof e=="object"&&"styledComponentId"in e}function kr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Xa(e,t){return e.join("")}function ns(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Vu(e,t,n){if(n===void 0&&(n=!1),!n&&!ns(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Vu(e[r],t[r]);else if(ns(t))for(var r in t)e[r]=Vu(e[r],t[r]);return e}function ff(e,t){Object.defineProperty(e,"toString",{value:t})}var Ow=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Dr(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),c=0,u=(s=0,n.length);s<u;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++,c++);c>0&&this._cGroup>t&&(this._cIndex+=c)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+=this.tag.getRule(s)+lf;return n},e}(),Nw="style[".concat(No,"][").concat(C0,'="').concat(Pl,'"]'),Aw=new RegExp("^".concat(No,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dh=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Wu=function(e){if(!e)return document;if(dh(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(dh(t))return t}return document},Lw=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Iw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(lf),o=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var c=l.match(Aw);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(bw(d,u),Lw(e,d,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}},wc=function(e){for(var t=Wu(e.options.target).querySelectorAll(Nw),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(No)!==E0&&(Iw(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Dw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var A0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var c=Array.from(l.querySelectorAll("style[".concat(No,"]")));return c[c.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(No,E0),r.setAttribute(C0,Pl);var s=Dw();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Bw=function(){function e(t){this.element=A0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,i=0,s=o.length;i<s;i++){var l=o[i];if(l.ownerNode===n)return l}throw Dr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Mw=function(){function e(t){this.element=A0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Uw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),fh=Ti,Vw={isServer:!Ti,useCSSOMInjection:!vw},Za=function(){function e(t,n,r){t===void 0&&(t=Ao),n===void 0&&(n={});var o=this;this.options=Xe(Xe({},Vw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ti&&fh&&(fh=!1,wc(this)),ff(this,function(){return function(i){for(var s=i.getTag(),l=s.length,c="",u=function(f){var y=function(g){return Ja.get(g)}(f);if(y===void 0)return"continue";var b=i.names.get(y);if(b===void 0||!b.size)return"continue";var x=s.getGroup(f);if(x.length===0)return"continue";var v=No+".g"+f+'[id="'+y+'"]',w="";b.forEach(function(g){g.length>0&&(w+=g+",")}),c+=x+v+'{content:"'+w+'"}'+lf},d=0;d<l;d++)u(d);return c}(o)})}return e.registerId=function(t){return gi(t)},e.prototype.rehydrate=function(){!this.server&&Ti&&wc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(Xe(Xe({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Ti&&t.target!==this.options.target&&Wu(this.options.target)!==Wu(t.target)&&wc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Uw(o):r?new Bw(o):new Mw(o)}(this.options),new Ow(t)));var t},e.prototype.hasNameForId=function(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o},e.prototype.registerName=function(t,n){gi(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(gi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(gi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ww=/&/g,Sn=47,$r=42;function ph(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,o=!1,i=0;i<t;i++){var s=e.charCodeAt(i);if(r!==0||o||s!==Sn||e.charCodeAt(i+1)!==$r)if(o)s===$r&&e.charCodeAt(i+1)===Sn&&(o=!1,i++);else if(s!==34&&s!==39||i!==0&&e.charCodeAt(i-1)===92){if(r===0){if(s===123)n++;else if(s===125&&--n<0)return!0}}else r===0?r=s:r===s&&(r=0);else o=!0,i++}return n!==0||r!==0}function L0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=L0(n.children,t)),n})}function Hw(e){var t,n,r,o=Ao,i=o.options,s=i===void 0?Ao:i,l=o.plugins,c=l===void 0?cf:l,u=function(x,v,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):x},d=c.slice();d.push(function(x){x.type===Cl&&x.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),x.props[0]=x.props[0].replace(Ww,n).replace(r,u))}),s.prefix&&d.push(yw),d.push(hw);var f=[],y=mw(d.concat(gw(function(x){return f.push(x)}))),b=function(x,v,w,g){v===void 0&&(v=""),w===void 0&&(w=""),g===void 0&&(g="&"),t=g,n=v,r=void 0;var p=function($){if(!ph($))return $;for(var k=$.length,C="",_=0,E=0,N=0,L=!1,V=0;V<k;V++){var W=$.charCodeAt(V);if(N!==0||L||W!==Sn||$.charCodeAt(V+1)!==$r)if(L)W===$r&&$.charCodeAt(V+1)===Sn&&(L=!1,V++);else if(W!==34&&W!==39||V!==0&&$.charCodeAt(V-1)===92){if(N===0)if(W===123)E++;else if(W===125){if(--E<0){for(var G=V+1;G<k;){var Z=$.charCodeAt(G);if(Z===59||Z===10)break;G++}G<k&&$.charCodeAt(G)===59&&G++,E=0,V=G-1,_=G;continue}E===0&&(C+=$.substring(_,V+1),_=V+1)}else W===59&&E===0&&(C+=$.substring(_,V+1),_=V+1)}else N===0?N=W:N===W&&(N=0);else L=!0,V++}if(_<k){var re=$.substring(_);ph(re)||(C+=re)}return C}(function($){if($.indexOf("//")===-1)return $;for(var k=$.length,C=[],_=0,E=0,N=0,L=0;E<k;){var V=$.charCodeAt(E);if(V!==34&&V!==39||E!==0&&$.charCodeAt(E-1)===92)if(N===0)if(V===Sn&&E+1<k&&$.charCodeAt(E+1)===$r){for(E+=2;E+1<k&&($.charCodeAt(E)!==$r||$.charCodeAt(E+1)!==Sn);)E++;E+=2}else if(V===40&&E>=3&&(32|$.charCodeAt(E-1))==108&&(32|$.charCodeAt(E-2))==114&&(32|$.charCodeAt(E-3))==117)L=1,E++;else if(L>0)V===41?L--:V===40&&L++,E++;else if(V===$r&&E+1<k&&$.charCodeAt(E+1)===Sn)E>_&&C.push($.substring(_,E)),_=E+=2;else if(V===Sn&&E+1<k&&$.charCodeAt(E+1)===Sn){for(E>_&&C.push($.substring(_,E));E<k&&$.charCodeAt(E)!==10;)E++;_=E}else E++;else E++;else N===0?N=V:N===V&&(N=0),E++}return _===0?$:(_<k&&C.push($.substring(_)),C.join(""))}(x)),h=fw(w||v?"".concat(w," ").concat(v," { ").concat(p," }"):p);return s.namespace&&(h=L0(h,s.namespace)),f=[],Qa(h,y),f};return b.hash=c.length?c.reduce(function(x,v){return v.name||Dr(15),vr(x,v.name)},5381).toString():"",b}var qw=new Za,Hu=Hw(),I0=Q.createContext({shouldForwardProp:void 0,styleSheet:qw,stylis:Hu});I0.Consumer;Q.createContext(void 0);function qu(){return Q.useContext(I0)}var D0=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Hu);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ff(this,function(){throw Dr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Hu),this.name+t.hash},e}();function Gw(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in xw||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Yw=function(e){return e>="A"&&e<="Z"};function hh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Yw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var B0=function(e){return e==null||e===!1||e===""},M0=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!B0(r)&&(Array.isArray(r)&&r.isCss||Br(r)?t.push("".concat(hh(n),":"),r,";"):ns(r)?t.push.apply(t,Ro(Ro(["".concat(n," {")],M0(r),!1),["}"],!1)):t.push("".concat(hh(n),": ").concat(Gw(n,r),";")))}return t};function ir(e,t,n,r,o){if(o===void 0&&(o=[]),typeof e=="string")return e&&o.push(e),o;if(B0(e))return o;if(df(e))return o.push(".".concat(e.styledComponentId)),o;if(Br(e)){if(!Br(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return o.push(e),o;var i=e(t);return ir(i,t,n,r,o)}var s;if(e instanceof D0)return n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o;if(ns(e)){for(var l=M0(e),c=0;c<l.length;c++)o.push(l[c]);return o}if(!Array.isArray(e))return o.push(e.toString()),o;for(c=0;c<e.length;c++)ir(e[c],t,n,r,o);return o}function U0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Br(n)&&!df(n))return!1}return!0}var Kw=z0(Pl),Qw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&U0(t),this.componentId=n,this.baseHash=vr(Kw,n),this.baseStyle=r,Za.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=kr(o,this.staticRulesId);else{var i=Xa(ir(this.rules,t,n,r)),s=Uu(vr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}o=kr(o,s),this.staticRulesId=s}else{for(var c=vr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var y=Xa(ir(f,t,n,r));c=vr(vr(c,String(d)),y),u+=y}}if(u){var b=Uu(c>>>0);if(!n.hasNameForId(this.componentId,b)){var x=r(u,".".concat(b),void 0,this.componentId);n.insertRules(this.componentId,b,x)}o=kr(o,b)}}return{className:o,css:typeof window>"u"?n.getTag().getGroup(gi(this.componentId)):""}},e}(),rs=Q.createContext(void 0);rs.Consumer;function Jw(e){var t=Q.useContext(rs),n=Q.useMemo(function(){return function(r,o){if(!r)throw Dr(14);if(Br(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw Dr(8);return o?Xe(Xe({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?Q.createElement(rs.Provider,{value:n},e.children):null}var Sc={};function Xw(e,t,n){var r=df(e),o=e,i=!bc(e),s=t.attrs,l=s===void 0?cf:s,c=t.componentId,u=c===void 0?function($,k){var C=typeof $!="string"?"sc":sh($);Sc[C]=(Sc[C]||0)+1;var _="".concat(C,"-").concat(uf(Pl+C+Sc[C]));return k?"".concat(k,"-").concat(_):_}(t.displayName,t.parentComponentId):c,d=t.displayName,f=d===void 0?function($){return bc($)?"styled.".concat($):"Styled(".concat(_w($),")")}(e):d,y=t.displayName&&t.componentId?"".concat(sh(t.displayName),"-").concat(t.componentId):t.componentId||u,b=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,x=t.shouldForwardProp;if(r&&o.shouldForwardProp){var v=o.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;x=function($,k){return v($,k)&&w($,k)}}else x=v}var g=new Qw(n,y,r?o.componentStyle:void 0);function p($,k){return function(C,_,E){var N=C.attrs,L=C.componentStyle,V=C.defaultProps,W=C.foldedComponentIds,G=C.styledComponentId,Z=C.target,re=Q.useContext(rs),M=qu(),D=C.shouldForwardProp||M.shouldForwardProp,O=F0(_,re,V)||Ao,B=function(ue,xe,X){for(var Be,ve=Xe(Xe({},xe),{className:void 0,theme:X}),et=0;et<ue.length;et+=1){var Gr=Br(Be=ue[et])?Be(ve):Be;for(var xn in Gr)xn==="className"?ve.className=kr(ve.className,Gr[xn]):xn==="style"?ve.style=Xe(Xe({},ve.style),Gr[xn]):ve[xn]=Gr[xn]}return"className"in xe&&typeof xe.className=="string"&&(ve.className=kr(ve.className,xe.className)),ve}(N,_,O),P=B.as||Z,z={};for(var A in B)B[A]===void 0||A[0]==="$"||A==="as"||A==="theme"&&B.theme===O||(A==="forwardedAs"?z.as=B.forwardedAs:D&&!D(A,P)||(z[A]=B[A]));var ne=function(ue,xe){var X=qu(),Be=ue.generateAndInjectStyles(xe,X.styleSheet,X.stylis);return Be}(L,B),oe=ne.className,he=kr(W,G);return oe&&(he+=" "+oe),B.className&&(he+=" "+B.className),z[bc(P)&&!T0.has(P)?"class":"className"]=he,E&&(z.ref=E),j.createElement(P,z)}(h,$,k)}p.displayName=f;var h=Q.forwardRef(p);return h.attrs=b,h.componentStyle=g,h.displayName=f,h.shouldForwardProp=x,h.foldedComponentIds=r?kr(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=y,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=r?function(k){for(var C=[],_=1;_<arguments.length;_++)C[_-1]=arguments[_];for(var E=0,N=C;E<N.length;E++)Vu(k,N[E],!0);return k}({},o.defaultProps,$):$}}),ff(h,function(){return".".concat(h.styledComponentId)}),i&&N0(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function mh(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var gh=function(e){return Object.assign(e,{isCss:!0})};function ds(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Br(e)||ns(e))return gh(ir(mh(cf,Ro([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?ir(r):gh(ir(mh(r,t)))}function Gu(e,t,n){if(n===void 0&&(n=Ao),!t)throw Dr(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,ds.apply(void 0,Ro([o],i,!1)))};return r.attrs=function(o){return Gu(e,t,Xe(Xe({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Gu(e,t,Xe(Xe({},n),o))},r}var V0=function(e){return Gu(Xw,e)},m=V0;T0.forEach(function(e){m[e]=V0(e)});var Zw=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=U0(t),Za.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Xa(ir(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Za.registerId(this.componentId+t);var i=this.componentId+t;this.isStatic?r.hasNameForId(i,i)||this.createStyles(t,n,r,o):(this.removeStyles(t,r),this.createStyles(t,n,r,o))},e}();function eS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ds.apply(void 0,Ro([e],t,!1)),o="sc-global-".concat(uf(JSON.stringify(r))),i=new Zw(r,o),s=new WeakMap,l=function(u){var d=qu(),f=Q.useContext(rs),y=s.get(d.styleSheet);return y===void 0&&(y=d.styleSheet.allocateGSInstance(o),s.set(d.styleSheet,y)),(typeof window>"u"||!d.styleSheet.server)&&c(y,u,d.styleSheet,f,d.stylis),Q.useLayoutEffect(function(){return d.styleSheet.server||c(y,u,d.styleSheet,f,d.stylis),function(){var b;i.removeStyles(y,d.styleSheet),b=d.styleSheet.options.target,typeof document<"u"&&(b??document).querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(x){return x.remove()})}},[y,u,d.styleSheet,f,d.stylis]),null};function c(u,d,f,y,b){if(i.isStatic)i.renderStyles(u,$w,f,b);else{var x=Xe(Xe({},d),{theme:F0(d,y,l.defaultProps)});i.renderStyles(u,x,f,b)}}return Q.memo(l)}function He(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Xa(ds.apply(void 0,Ro([e],t,!1))),o=uf(r);return new D0(o,r)}function W0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=W0(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Kn(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=W0(e))&&(r&&(r+=" "),r+=t);return r}const os=e=>typeof e=="number"&&!isNaN(e),Tr=e=>typeof e=="string",Lt=e=>typeof e=="function",ma=e=>Tr(e)||Lt(e)?e:null,Yu=e=>j.isValidElement(e)||Tr(e)||Lt(e)||os(e);function tS(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function Rl(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(s){let{children:l,position:c,preventExitTransition:u,done:d,nodeRef:f,isIn:y,playToast:b}=s;const x=r?`${t}--${c}`:t,v=r?`${n}--${c}`:n,w=j.useRef(0);return j.useLayoutEffect(()=>{const g=f.current,p=x.split(" "),h=$=>{$.target===f.current&&(b(),g.removeEventListener("animationend",h),g.removeEventListener("animationcancel",h),w.current===0&&$.type!=="animationcancel"&&g.classList.remove(...p))};g.classList.add(...p),g.addEventListener("animationend",h),g.addEventListener("animationcancel",h)},[]),j.useEffect(()=>{const g=f.current,p=()=>{g.removeEventListener("animationend",p),o?tS(g,d,i):d()};y||(u?p():(w.current=1,g.className+=` ${v}`,g.addEventListener("animationend",p)))},[y]),Q.createElement(Q.Fragment,null,l)}}function yh(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const xt=new Map;let is=[];const Ku=new Set,nS=e=>Ku.forEach(t=>t(e)),H0=()=>xt.size>0;function q0(e,t){var n;if(t)return!((n=xt.get(t))==null||!n.isToastActive(e));let r=!1;return xt.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function G0(e,t){Yu(e)&&(H0()||is.push({content:e,options:t}),xt.forEach(n=>{n.buildToast(e,t)}))}function xh(e,t){xt.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function rS(e){const{subscribe:t,getSnapshot:n,setProps:r}=j.useRef(function(i){const s=i.containerId||1;return{subscribe(l){const c=function(d,f,y){let b=1,x=0,v=[],w=[],g=[],p=f;const h=new Map,$=new Set,k=()=>{g=Array.from(h.values()),$.forEach(E=>E())},C=E=>{w=E==null?[]:w.filter(N=>N!==E),k()},_=E=>{const{toastId:N,onOpen:L,updateId:V,children:W}=E.props,G=V==null;E.staleId&&h.delete(E.staleId),h.set(N,E),w=[...w,E.props.toastId].filter(Z=>Z!==E.staleId),k(),y(yh(E,G?"added":"updated")),G&&Lt(L)&&L(j.isValidElement(W)&&W.props)};return{id:d,props:p,observe:E=>($.add(E),()=>$.delete(E)),toggle:(E,N)=>{h.forEach(L=>{N!=null&&N!==L.props.toastId||Lt(L.toggle)&&L.toggle(E)})},removeToast:C,toasts:h,clearQueue:()=>{x-=v.length,v=[]},buildToast:(E,N)=>{if((A=>{let{containerId:ne,toastId:oe,updateId:he}=A;const ue=ne?ne!==d:d!==1,xe=h.has(oe)&&he==null;return ue||xe})(N))return;const{toastId:L,updateId:V,data:W,staleId:G,delay:Z}=N,re=()=>{C(L)},M=V==null;M&&x++;const D={...p,style:p.toastStyle,key:b++,...Object.fromEntries(Object.entries(N).filter(A=>{let[ne,oe]=A;return oe!=null})),toastId:L,updateId:V,data:W,closeToast:re,isIn:!1,className:ma(N.className||p.toastClassName),bodyClassName:ma(N.bodyClassName||p.bodyClassName),progressClassName:ma(N.progressClassName||p.progressClassName),autoClose:!N.isLoading&&(O=N.autoClose,B=p.autoClose,O===!1||os(O)&&O>0?O:B),deleteToast(){const A=h.get(L),{onClose:ne,children:oe}=A.props;Lt(ne)&&ne(j.isValidElement(oe)&&oe.props),y(yh(A,"removed")),h.delete(L),x--,x<0&&(x=0),v.length>0?_(v.shift()):k()}};var O,B;D.closeButton=p.closeButton,N.closeButton===!1||Yu(N.closeButton)?D.closeButton=N.closeButton:N.closeButton===!0&&(D.closeButton=!Yu(p.closeButton)||p.closeButton);let P=E;j.isValidElement(E)&&!Tr(E.type)?P=j.cloneElement(E,{closeToast:re,toastProps:D,data:W}):Lt(E)&&(P=E({closeToast:re,toastProps:D,data:W}));const z={content:P,props:D,staleId:G};p.limit&&p.limit>0&&x>p.limit&&M?v.push(z):os(Z)?setTimeout(()=>{_(z)},Z):_(z)},setProps(E){p=E},setToggle:(E,N)=>{h.get(E).toggle=N},isToastActive:E=>w.some(N=>N===E),getSnapshot:()=>g}}(s,i,nS);xt.set(s,c);const u=c.observe(l);return is.forEach(d=>G0(d.content,d.options)),is=[],()=>{u(),xt.delete(s)}},setProps(l){var c;(c=xt.get(s))==null||c.setProps(l)},getSnapshot(){var l;return(l=xt.get(s))==null?void 0:l.getSnapshot()}}}(e)).current;r(e);const o=j.useSyncExternalStore(t,n,n);return{getToastToRender:function(i){if(!o)return[];const s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(l=>{const{position:c}=l.props;s.has(c)||s.set(c,[]),s.get(c).push(l)}),Array.from(s,l=>i(l[0],l[1]))},isToastActive:q0,count:o==null?void 0:o.length}}function oS(e){const[t,n]=j.useState(!1),[r,o]=j.useState(!1),i=j.useRef(null),s=j.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:f}=e;var y,b;function x(){n(!0)}function v(){n(!1)}function w(h){const $=i.current;s.canDrag&&$&&(s.didMove=!0,t&&v(),s.delta=e.draggableDirection==="x"?h.clientX-s.start:h.clientY-s.start,s.start!==h.clientX&&(s.canCloseOnClick=!1),$.style.transform=`translate3d(${e.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,$.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",g);const h=i.current;if(s.canDrag&&s.didMove&&h){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();h.style.transition="transform 0.2s, opacity 0.2s",h.style.removeProperty("transform"),h.style.removeProperty("opacity")}}(b=xt.get((y={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||b.setToggle(y.id,y.fn),j.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||v(),window.addEventListener("focus",x),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",x),window.removeEventListener("blur",v)}},[e.pauseOnFocusLoss]);const p={onPointerDown:function(h){if(e.draggable===!0||e.draggable===h.pointerType){s.didMove=!1,document.addEventListener("pointermove",w),document.addEventListener("pointerup",g);const $=i.current;s.canCloseOnClick=!0,s.canDrag=!0,$.style.transition="none",e.draggableDirection==="x"?(s.start=h.clientX,s.removalDistance=$.offsetWidth*(e.draggablePercent/100)):(s.start=h.clientY,s.removalDistance=$.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(h){const{top:$,bottom:k,left:C,right:_}=i.current.getBoundingClientRect();h.nativeEvent.type!=="touchend"&&e.pauseOnHover&&h.clientX>=C&&h.clientX<=_&&h.clientY>=$&&h.clientY<=k?v():x()}};return l&&c&&(p.onMouseEnter=v,e.stacked||(p.onMouseLeave=x)),f&&(p.onClick=h=>{d&&d(h),s.canCloseOnClick&&u()}),{playToast:x,pauseToast:v,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:p}}function iS(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:s,style:l,controlledProgress:c,progress:u,rtl:d,isIn:f,theme:y}=e;const b=i||c&&u===0,x={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};c&&(x.transform=`scaleX(${u})`);const v=Kn("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":d}),w=Lt(s)?s({rtl:d,type:o,defaultClassName:v}):Kn(v,s),g={[c&&u>=1?"onTransitionEnd":"onAnimationEnd"]:c&&u<1?null:()=>{f&&r()}};return Q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":b},Q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${y} Toastify__progress-bar--${o}`}),Q.createElement("div",{role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:w,style:x,...g}))}let sS=1;const Y0=()=>""+sS++;function aS(e){return e&&(Tr(e.toastId)||os(e.toastId))?e.toastId:Y0()}function zi(e,t){return G0(e,t),t.toastId}function el(e,t){return{...t,type:t&&t.type||e,toastId:aS(t)}}function As(e){return(t,n)=>zi(t,el(e,n))}function te(e,t){return zi(e,el("default",t))}te.loading=(e,t)=>zi(e,el("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),te.promise=function(e,t,n){let r,{pending:o,error:i,success:s}=t;o&&(r=Tr(o)?te.loading(o,n):te.loading(o.render,{...n,...o}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(d,f,y)=>{if(f==null)return void te.dismiss(r);const b={type:d,...l,...n,data:y},x=Tr(f)?{render:f}:f;return r?te.update(r,{...b,...x}):te(x.render,{...b,...x}),y},u=Lt(e)?e():e;return u.then(d=>c("success",s,d)).catch(d=>c("error",i,d)),u},te.success=As("success"),te.info=As("info"),te.error=As("error"),te.warning=As("warning"),te.warn=te.warning,te.dark=(e,t)=>zi(e,el("default",{theme:"dark",...t})),te.dismiss=function(e){(function(t){var n;if(H0()){if(t==null||Tr(n=t)||os(n))xt.forEach(r=>{r.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const r=xt.get(t.containerId);r?r.removeToast(t.id):xt.forEach(o=>{o.removeToast(t.id)})}}else is=is.filter(r=>t!=null&&r.options.toastId!==t)})(e)},te.clearWaitingQueue=function(e){e===void 0&&(e={}),xt.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},te.isActive=q0,te.update=function(e,t){t===void 0&&(t={});const n=((r,o)=>{var i;let{containerId:s}=o;return(i=xt.get(s||1))==null?void 0:i.toasts.get(r)})(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:Y0()};i.toastId!==e&&(i.staleId=e);const s=i.render||o;delete i.render,zi(s,i)}},te.done=e=>{te.update(e,{progress:1})},te.onChange=function(e){return Ku.add(e),()=>{Ku.delete(e)}},te.play=e=>xh(!0,e),te.pause=e=>xh(!1,e);const lS=typeof window<"u"?j.useLayoutEffect:j.useEffect,Ls=e=>{let{theme:t,type:n,isLoading:r,...o}=e;return Q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},kc={info:function(e){return Q.createElement(Ls,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return Q.createElement(Ls,{...e},Q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return Q.createElement(Ls,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return Q.createElement(Ls,{...e},Q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return Q.createElement("div",{className:"Toastify__spinner"})}},cS=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=oS(e),{closeButton:s,children:l,autoClose:c,onClick:u,type:d,hideProgressBar:f,closeToast:y,transition:b,position:x,className:v,style:w,bodyClassName:g,bodyStyle:p,progressClassName:h,progressStyle:$,updateId:k,role:C,progress:_,rtl:E,toastId:N,deleteToast:L,isIn:V,isLoading:W,closeOnClick:G,theme:Z}=e,re=Kn("Toastify__toast",`Toastify__toast-theme--${Z}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":G}),M=Lt(v)?v({rtl:E,position:x,type:d,defaultClassName:re}):Kn(re,v),D=function(z){let{theme:A,type:ne,isLoading:oe,icon:he}=z,ue=null;const xe={theme:A,type:ne};return he===!1||(Lt(he)?ue=he({...xe,isLoading:oe}):j.isValidElement(he)?ue=j.cloneElement(he,xe):oe?ue=kc.spinner():(X=>X in kc)(ne)&&(ue=kc[ne](xe))),ue}(e),O=!!_||!c,B={closeToast:y,type:d,theme:Z};let P=null;return s===!1||(P=Lt(s)?s(B):j.isValidElement(s)?j.cloneElement(s,B):function(z){let{closeToast:A,theme:ne,ariaLabel:oe="close"}=z;return Q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${ne}`,type:"button",onClick:he=>{he.stopPropagation(),A(he)},"aria-label":oe},Q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(B)),Q.createElement(b,{isIn:V,done:L,position:x,preventExitTransition:n,nodeRef:r,playToast:i},Q.createElement("div",{id:N,onClick:u,"data-in":V,className:M,...o,style:w,ref:r},Q.createElement("div",{...V&&{role:C},className:Lt(g)?g({type:d}):Kn("Toastify__toast-body",g),style:p},D!=null&&Q.createElement("div",{className:Kn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!W})},D),Q.createElement("div",null,l)),P,Q.createElement(iS,{...k&&!O?{key:`pb-${k}`}:{},rtl:E,theme:Z,delay:c,isRunning:t,isIn:V,closeToast:y,hide:f,type:d,style:$,className:h,controlledProgress:O,progress:_||0})))},Ol=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},uS=Rl(Ol("bounce",!0));Rl(Ol("slide",!0));Rl(Ol("zoom"));Rl(Ol("flip"));const dS={position:"top-right",transition:uS,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function fS(e){let t={...dS,...e};const n=e.stacked,[r,o]=j.useState(!0),i=j.useRef(null),{getToastToRender:s,isToastActive:l,count:c}=rS(t),{className:u,style:d,rtl:f,containerId:y}=t;function b(v){const w=Kn("Toastify__toast-container",`Toastify__toast-container--${v}`,{"Toastify__toast-container--rtl":f});return Lt(u)?u({position:v,rtl:f,defaultClassName:w}):Kn(w,ma(u))}function x(){n&&(o(!0),te.play())}return lS(()=>{if(n){var v;const w=i.current.querySelectorAll('[data-in="true"]'),g=12,p=(v=t.position)==null?void 0:v.includes("top");let h=0,$=0;Array.from(w).reverse().forEach((k,C)=>{const _=k;_.classList.add("Toastify__toast--stacked"),C>0&&(_.dataset.collapsed=`${r}`),_.dataset.pos||(_.dataset.pos=p?"top":"bot");const E=h*(r?.2:1)+(r?0:g*C);_.style.setProperty("--y",`${p?E:-1*E}px`),_.style.setProperty("--g",`${g}`),_.style.setProperty("--s",""+(1-(r?$:0))),h+=_.offsetHeight,$+=.025})}},[r,c,n]),Q.createElement("div",{ref:i,className:"Toastify",id:y,onMouseEnter:()=>{n&&(o(!1),te.pause())},onMouseLeave:x},s((v,w)=>{const g=w.length?{...d}:{...d,pointerEvents:"none"};return Q.createElement("div",{className:b(v),style:g,key:`container-${v}`},w.map(p=>{let{content:h,props:$}=p;return Q.createElement(cS,{...$,stacked:n,collapseAll:x,isIn:l($.toastId,$.containerId),style:$.style,key:`toast-${$.key}`},h)}))}))}const ce={primary:{50:"#fdf3e7",100:"#fae0c3",200:"#f5c28a",300:"#eda04e",400:"#e08530",500:"#C4671A",600:"#B45A14",700:"#96480f",800:"#7a3a0c",900:"#5e2c08"},neutral:{50:"#faf7f5",100:"#f2ece6",200:"#e4d9cf",300:"#cfc0b0",400:"#b5a090",500:"#96806e",600:"#7a6455",700:"#5e4d42",800:"#3d3028",900:"#231b15",950:"#130e0a"},success:{light:"#d1fae5",base:"#059669",dark:"#065f46"},warning:{light:"#fef3c7",base:"#d97706",dark:"#92400e"},error:{light:"#fee2e2",base:"#dc2626",dark:"#991b1b"},info:{light:"#dbeafe",base:"#2563eb",dark:"#1e40af"},white:"#ffffff",black:"#000000",transparent:"transparent"},pS={fontFamily:{sans:"'Sora', 'Helvetica Neue', Arial, sans-serif",serif:"'Playfair Display', Georgia, serif",mono:"'JetBrains Mono', 'Fira Code', monospace"},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem"},fontWeight:{regular:400,medium:500,semibold:600,bold:700},lineHeight:{tight:1.25,snug:1.375,normal:1.5,relaxed:1.625}},hS={0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem"},mS={none:"0",sm:"0.25rem",base:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem",full:"9999px"},gS={sm:"0 1px 2px 0 rgba(35, 27, 21, 0.08)",base:"0 2px 4px 0 rgba(35, 27, 21, 0.10)",md:"0 4px 12px 0 rgba(35, 27, 21, 0.12)",lg:"0 8px 24px 0 rgba(35, 27, 21, 0.15)",xl:"0 16px 48px 0 rgba(35, 27, 21, 0.18)",amber:"0 4px 20px 0 rgba(180, 90, 20, 0.35)"},yS={fast:"150ms ease",base:"200ms ease",slow:"300ms ease",slower:"400ms cubic-bezier(0.4, 0, 0.2, 1)"},xS={base:0,raised:10,dropdown:100,sticky:200,overlay:300,modal:400,toast:500},vh={colors:ce,typography:pS,spacing:hS,borderRadius:mS,shadows:gS,transitions:yS,zIndex:xS,brand:{primary:ce.primary[600],primaryHover:ce.primary[700],primaryLight:ce.primary[100],primaryGhost:ce.primary[50]},surface:{page:ce.neutral[50],card:ce.white,sidebar:ce.neutral[900],elevated:ce.white,overlay:"rgba(35, 27, 21, 0.55)"},text:{primary:ce.neutral[900],secondary:ce.neutral[600],muted:ce.neutral[400],inverse:ce.white,brand:ce.primary[600],onDark:ce.neutral[200]},border:{default:ce.neutral[200],strong:ce.neutral[300],focus:ce.primary[600],error:ce.error.base},feedback:{success:{bg:ce.success.light,text:ce.success.dark,border:ce.success.base,icon:ce.success.base},warning:{bg:ce.warning.light,text:ce.warning.dark,border:ce.warning.base,icon:ce.warning.base},error:{bg:ce.error.light,text:ce.error.dark,border:ce.error.base,icon:ce.error.base},info:{bg:ce.info.light,text:ce.info.dark,border:ce.info.base,icon:ce.info.base}}},vS=eS`
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
`;function K0(e,t){return function(){return e.apply(t,arguments)}}const{toString:$S}=Object.prototype,{getPrototypeOf:pf}=Object,{iterator:Nl,toStringTag:Q0}=Symbol,Al=(e=>t=>{const n=$S.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ln=e=>(e=e.toLowerCase(),t=>Al(t)===e),Ll=e=>t=>typeof t===e,{isArray:Wo}=Array,Lo=Ll("undefined");function fs(e){return e!==null&&!Lo(e)&&e.constructor!==null&&!Lo(e.constructor)&&Ft(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const J0=ln("ArrayBuffer");function bS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&J0(e.buffer),t}const wS=Ll("string"),Ft=Ll("function"),X0=Ll("number"),ps=e=>e!==null&&typeof e=="object",SS=e=>e===!0||e===!1,ga=e=>{if(Al(e)!=="object")return!1;const t=pf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Q0 in e)&&!(Nl in e)},kS=e=>{if(!ps(e)||fs(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},_S=ln("Date"),jS=ln("File"),ES=e=>!!(e&&typeof e.uri<"u"),CS=e=>e&&typeof e.getParts<"u",FS=ln("Blob"),TS=ln("FileList"),zS=e=>ps(e)&&Ft(e.pipe);function PS(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const $h=PS(),bh=typeof $h.FormData<"u"?$h.FormData:void 0,RS=e=>{let t;return e&&(bh&&e instanceof bh||Ft(e.append)&&((t=Al(e))==="formdata"||t==="object"&&Ft(e.toString)&&e.toString()==="[object FormData]"))},OS=ln("URLSearchParams"),[NS,AS,LS,IS]=["ReadableStream","Request","Response","Headers"].map(ln),DS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function hs(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Wo(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(fs(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function Z0(e,t){if(fs(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const _r=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ex=e=>!Lo(e)&&e!==_r;function Qu(){const{caseless:e,skipUndefined:t}=ex(this)&&this||{},n={},r=(o,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const s=e&&Z0(n,i)||i;ga(n[s])&&ga(o)?n[s]=Qu(n[s],o):ga(o)?n[s]=Qu({},o):Wo(o)?n[s]=o.slice():(!t||!Lo(o))&&(n[s]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&hs(arguments[o],r);return n}const BS=(e,t,n,{allOwnKeys:r}={})=>(hs(t,(o,i)=>{n&&Ft(o)?Object.defineProperty(e,i,{value:K0(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),MS=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),US=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},VS=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&pf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},WS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},HS=e=>{if(!e)return null;if(Wo(e))return e;let t=e.length;if(!X0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},qS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&pf(Uint8Array)),GS=(e,t)=>{const r=(e&&e[Nl]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},YS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},KS=ln("HTMLFormElement"),QS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),wh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),JS=ln("RegExp"),tx=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};hs(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},XS=e=>{tx(e,(t,n)=>{if(Ft(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ft(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ZS=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Wo(e)?r(e):r(String(e).split(t)),n},ek=()=>{},tk=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function nk(e){return!!(e&&Ft(e.append)&&e[Q0]==="FormData"&&e[Nl])}const rk=e=>{const t=new Array(10),n=(r,o)=>{if(ps(r)){if(t.indexOf(r)>=0)return;if(fs(r))return r;if(!("toJSON"in r)){t[o]=r;const i=Wo(r)?[]:{};return hs(r,(s,l)=>{const c=n(s,o+1);!Lo(c)&&(i[l]=c)}),t[o]=void 0,i}}return r};return n(e,0)},ok=ln("AsyncFunction"),ik=e=>e&&(ps(e)||Ft(e))&&Ft(e.then)&&Ft(e.catch),nx=((e,t)=>e?setImmediate:t?((n,r)=>(_r.addEventListener("message",({source:o,data:i})=>{o===_r&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),_r.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ft(_r.postMessage)),sk=typeof queueMicrotask<"u"?queueMicrotask.bind(_r):typeof process<"u"&&process.nextTick||nx,ak=e=>e!=null&&Ft(e[Nl]),T={isArray:Wo,isArrayBuffer:J0,isBuffer:fs,isFormData:RS,isArrayBufferView:bS,isString:wS,isNumber:X0,isBoolean:SS,isObject:ps,isPlainObject:ga,isEmptyObject:kS,isReadableStream:NS,isRequest:AS,isResponse:LS,isHeaders:IS,isUndefined:Lo,isDate:_S,isFile:jS,isReactNativeBlob:ES,isReactNative:CS,isBlob:FS,isRegExp:JS,isFunction:Ft,isStream:zS,isURLSearchParams:OS,isTypedArray:qS,isFileList:TS,forEach:hs,merge:Qu,extend:BS,trim:DS,stripBOM:MS,inherits:US,toFlatObject:VS,kindOf:Al,kindOfTest:ln,endsWith:WS,toArray:HS,forEachEntry:GS,matchAll:YS,isHTMLForm:KS,hasOwnProperty:wh,hasOwnProp:wh,reduceDescriptors:tx,freezeMethods:XS,toObjectSet:ZS,toCamelCase:QS,noop:ek,toFiniteNumber:tk,findKey:Z0,global:_r,isContextDefined:ex,isSpecCompliantForm:nk,toJSONObject:rk,isAsyncFn:ok,isThenable:ik,setImmediate:nx,asap:sk,isIterable:ak};let ee=class rx extends Error{static from(t,n,r,o,i,s){const l=new rx(t.message,n||t.code,r,o,i);return l.cause=t,l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),s&&Object.assign(l,s),l}constructor(t,n,r,o,i){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),o&&(this.request=o),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:T.toJSONObject(this.config),code:this.code,status:this.status}}};ee.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ee.ERR_BAD_OPTION="ERR_BAD_OPTION";ee.ECONNABORTED="ECONNABORTED";ee.ETIMEDOUT="ETIMEDOUT";ee.ERR_NETWORK="ERR_NETWORK";ee.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ee.ERR_DEPRECATED="ERR_DEPRECATED";ee.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ee.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ee.ERR_CANCELED="ERR_CANCELED";ee.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ee.ERR_INVALID_URL="ERR_INVALID_URL";const lk=null;function Ju(e){return T.isPlainObject(e)||T.isArray(e)}function ox(e){return T.endsWith(e,"[]")?e.slice(0,-2):e}function _c(e,t,n){return e?e.concat(t).map(function(o,i){return o=ox(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function ck(e){return T.isArray(e)&&!e.some(Ju)}const uk=T.toFlatObject(T,{},null,function(t){return/^is[A-Z]/.test(t)});function Il(e,t,n){if(!T.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=T.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,w){return!T.isUndefined(w[v])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&T.isSpecCompliantForm(t);if(!T.isFunction(o))throw new TypeError("visitor must be a function");function u(x){if(x===null)return"";if(T.isDate(x))return x.toISOString();if(T.isBoolean(x))return x.toString();if(!c&&T.isBlob(x))throw new ee("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(x)||T.isTypedArray(x)?c&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function d(x,v,w){let g=x;if(T.isReactNative(t)&&T.isReactNativeBlob(x))return t.append(_c(w,v,i),u(x)),!1;if(x&&!w&&typeof x=="object"){if(T.endsWith(v,"{}"))v=r?v:v.slice(0,-2),x=JSON.stringify(x);else if(T.isArray(x)&&ck(x)||(T.isFileList(x)||T.endsWith(v,"[]"))&&(g=T.toArray(x)))return v=ox(v),g.forEach(function(h,$){!(T.isUndefined(h)||h===null)&&t.append(s===!0?_c([v],$,i):s===null?v:v+"[]",u(h))}),!1}return Ju(x)?!0:(t.append(_c(w,v,i),u(x)),!1)}const f=[],y=Object.assign(uk,{defaultVisitor:d,convertValue:u,isVisitable:Ju});function b(x,v){if(!T.isUndefined(x)){if(f.indexOf(x)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(x),T.forEach(x,function(g,p){(!(T.isUndefined(g)||g===null)&&o.call(t,g,T.isString(p)?p.trim():p,v,y))===!0&&b(g,v?v.concat(p):[p])}),f.pop()}}if(!T.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Sh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function hf(e,t){this._pairs=[],e&&Il(e,this,t)}const ix=hf.prototype;ix.append=function(t,n){this._pairs.push([t,n])};ix.toString=function(t){const n=t?function(r){return t.call(this,r,Sh)}:Sh;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function dk(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function sx(e,t,n){if(!t)return e;const r=n&&n.encode||dk,o=T.isFunction(n)?{serialize:n}:n,i=o&&o.serialize;let s;if(i?s=i(t,o):s=T.isURLSearchParams(t)?t.toString():new hf(t,o).toString(r),s){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class kh{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){T.forEach(this.handlers,function(r){r!==null&&t(r)})}}const mf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},fk=typeof URLSearchParams<"u"?URLSearchParams:hf,pk=typeof FormData<"u"?FormData:null,hk=typeof Blob<"u"?Blob:null,mk={isBrowser:!0,classes:{URLSearchParams:fk,FormData:pk,Blob:hk},protocols:["http","https","file","blob","url","data"]},gf=typeof window<"u"&&typeof document<"u",Xu=typeof navigator=="object"&&navigator||void 0,gk=gf&&(!Xu||["ReactNative","NativeScript","NS"].indexOf(Xu.product)<0),yk=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xk=gf&&window.location.href||"http://localhost",vk=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:gf,hasStandardBrowserEnv:gk,hasStandardBrowserWebWorkerEnv:yk,navigator:Xu,origin:xk},Symbol.toStringTag,{value:"Module"})),ft={...vk,...mk};function $k(e,t){return Il(e,new ft.classes.URLSearchParams,{visitor:function(n,r,o,i){return ft.isNode&&T.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function bk(e){return T.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function wk(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function ax(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),c=i>=n.length;return s=!s&&T.isArray(o)?o.length:s,c?(T.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!T.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&T.isArray(o[s])&&(o[s]=wk(o[s])),!l)}if(T.isFormData(e)&&T.isFunction(e.entries)){const n={};return T.forEachEntry(e,(r,o)=>{t(bk(r),o,n,0)}),n}return null}function Sk(e,t,n){if(T.isString(e))try{return(t||JSON.parse)(e),T.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ms={transitional:mf,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=T.isObject(t);if(i&&T.isHTMLForm(t)&&(t=new FormData(t)),T.isFormData(t))return o?JSON.stringify(ax(t)):t;if(T.isArrayBuffer(t)||T.isBuffer(t)||T.isStream(t)||T.isFile(t)||T.isBlob(t)||T.isReadableStream(t))return t;if(T.isArrayBufferView(t))return t.buffer;if(T.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return $k(t,this.formSerializer).toString();if((l=T.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Il(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Sk(t)):t}],transformResponse:[function(t){const n=this.transitional||ms.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(T.isResponse(t)||T.isReadableStream(t))return t;if(t&&T.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(l){if(s)throw l.name==="SyntaxError"?ee.from(l,ee.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ft.classes.FormData,Blob:ft.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};T.forEach(["delete","get","head","post","put","patch"],e=>{ms.headers[e]={}});const kk=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_k=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&kk[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},_h=Symbol("internals");function ei(e){return e&&String(e).trim().toLowerCase()}function ya(e){return e===!1||e==null?e:T.isArray(e)?e.map(ya):String(e)}function jk(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Ek=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function jc(e,t,n,r,o){if(T.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!T.isString(t)){if(T.isString(r))return t.indexOf(r)!==-1;if(T.isRegExp(r))return r.test(t)}}function Ck(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Fk(e,t){const n=T.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}let Tt=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,c,u){const d=ei(c);if(!d)throw new Error("header name must be a non-empty string");const f=T.findKey(o,d);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||c]=ya(l))}const s=(l,c)=>T.forEach(l,(u,d)=>i(u,d,c));if(T.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(T.isString(t)&&(t=t.trim())&&!Ek(t))s(_k(t),n);else if(T.isObject(t)&&T.isIterable(t)){let l={},c,u;for(const d of t){if(!T.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[u=d[0]]=(c=l[u])?T.isArray(c)?[...c,d[1]]:[c,d[1]]:d[1]}s(l,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=ei(t),t){const r=T.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return jk(o);if(T.isFunction(n))return n.call(this,o,r);if(T.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ei(t),t){const r=T.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||jc(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=ei(s),s){const l=T.findKey(r,s);l&&(!n||jc(r,r[l],l,n))&&(delete r[l],o=!0)}}return T.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||jc(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return T.forEach(this,(o,i)=>{const s=T.findKey(r,i);if(s){n[s]=ya(o),delete n[i];return}const l=t?Ck(i):String(i).trim();l!==i&&delete n[i],n[l]=ya(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return T.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&T.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[_h]=this[_h]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=ei(s);r[l]||(Fk(o,s),r[l]=!0)}return T.isArray(t)?t.forEach(i):i(t),this}};Tt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);T.reduceDescriptors(Tt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});T.freezeMethods(Tt);function Ec(e,t){const n=this||ms,r=t||n,o=Tt.from(r.headers);let i=r.data;return T.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function lx(e){return!!(e&&e.__CANCEL__)}let gs=class extends ee{constructor(t,n,r){super(t??"canceled",ee.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function cx(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Tk(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function zk(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[i];s||(s=u),n[o]=c,r[o]=u;let f=i,y=0;for(;f!==o;)y+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const b=d&&u-d;return b?Math.round(y*1e3/b):void 0}}function Pk(e,t){let n=0,r=1e3/t,o,i;const s=(u,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e(...u)};return[(...u)=>{const d=Date.now(),f=d-n;f>=r?s(u,d):(o=u,i||(i=setTimeout(()=>{i=null,s(o)},r-f)))},()=>o&&s(o)]}const tl=(e,t,n=3)=>{let r=0;const o=zk(50,250);return Pk(i=>{const s=i.loaded,l=i.lengthComputable?i.total:void 0,c=s-r,u=o(c),d=s<=l;r=s;const f={loaded:s,total:l,progress:l?s/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l&&d?(l-s)/u:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(f)},n)},jh=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Eh=e=>(...t)=>T.asap(()=>e(...t)),Rk=ft.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ft.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ft.origin),ft.navigator&&/(msie|trident)/i.test(ft.navigator.userAgent)):()=>!0,Ok=ft.hasStandardBrowserEnv?{write(e,t,n,r,o,i,s){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];T.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),T.isString(r)&&l.push(`path=${r}`),T.isString(o)&&l.push(`domain=${o}`),i===!0&&l.push("secure"),T.isString(s)&&l.push(`SameSite=${s}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Nk(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ak(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ux(e,t,n){let r=!Nk(t);return e&&(r||n==!1)?Ak(e,t):t}const Ch=e=>e instanceof Tt?{...e}:e;function Mr(e,t){t=t||{};const n={};function r(u,d,f,y){return T.isPlainObject(u)&&T.isPlainObject(d)?T.merge.call({caseless:y},u,d):T.isPlainObject(d)?T.merge({},d):T.isArray(d)?d.slice():d}function o(u,d,f,y){if(T.isUndefined(d)){if(!T.isUndefined(u))return r(void 0,u,f,y)}else return r(u,d,f,y)}function i(u,d){if(!T.isUndefined(d))return r(void 0,d)}function s(u,d){if(T.isUndefined(d)){if(!T.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,d,f)=>o(Ch(u),Ch(d),f,!0)};return T.forEach(Object.keys({...e,...t}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const f=T.hasOwnProp(c,d)?c[d]:o,y=f(e[d],t[d],d);T.isUndefined(y)&&f!==l||(n[d]=y)}),n}const dx=e=>{const t=Mr({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:l}=t;if(t.headers=s=Tt.from(s),t.url=sx(ux(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),T.isFormData(n)){if(ft.hasStandardBrowserEnv||ft.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(T.isFunction(n.getHeaders)){const c=n.getHeaders(),u=["content-type","content-length"];Object.entries(c).forEach(([d,f])=>{u.includes(d.toLowerCase())&&s.set(d,f)})}}if(ft.hasStandardBrowserEnv&&(r&&T.isFunction(r)&&(r=r(t)),r||r!==!1&&Rk(t.url))){const c=o&&i&&Ok.read(i);c&&s.set(o,c)}return t},Lk=typeof XMLHttpRequest<"u",Ik=Lk&&function(e){return new Promise(function(n,r){const o=dx(e);let i=o.data;const s=Tt.from(o.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=o,d,f,y,b,x;function v(){b&&b(),x&&x(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let w=new XMLHttpRequest;w.open(o.method.toUpperCase(),o.url,!0),w.timeout=o.timeout;function g(){if(!w)return;const h=Tt.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),k={data:!l||l==="text"||l==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:h,config:e,request:w};cx(function(_){n(_),v()},function(_){r(_),v()},k),w=null}"onloadend"in w?w.onloadend=g:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(g)},w.onabort=function(){w&&(r(new ee("Request aborted",ee.ECONNABORTED,e,w)),w=null)},w.onerror=function($){const k=$&&$.message?$.message:"Network Error",C=new ee(k,ee.ERR_NETWORK,e,w);C.event=$||null,r(C),w=null},w.ontimeout=function(){let $=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const k=o.transitional||mf;o.timeoutErrorMessage&&($=o.timeoutErrorMessage),r(new ee($,k.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,w)),w=null},i===void 0&&s.setContentType(null),"setRequestHeader"in w&&T.forEach(s.toJSON(),function($,k){w.setRequestHeader(k,$)}),T.isUndefined(o.withCredentials)||(w.withCredentials=!!o.withCredentials),l&&l!=="json"&&(w.responseType=o.responseType),u&&([y,x]=tl(u,!0),w.addEventListener("progress",y)),c&&w.upload&&([f,b]=tl(c),w.upload.addEventListener("progress",f),w.upload.addEventListener("loadend",b)),(o.cancelToken||o.signal)&&(d=h=>{w&&(r(!h||h.type?new gs(null,e,w):h),w.abort(),w=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const p=Tk(o.url);if(p&&ft.protocols.indexOf(p)===-1){r(new ee("Unsupported protocol "+p+":",ee.ERR_BAD_REQUEST,e));return}w.send(i||null)})},Dk=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(u){if(!o){o=!0,l();const d=u instanceof Error?u:this.reason;r.abort(d instanceof ee?d:new gs(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new ee(`timeout of ${t}ms exceeded`,ee.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>T.asap(l),c}},Bk=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},Mk=async function*(e,t){for await(const n of Uk(e))yield*Bk(n,t)},Uk=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Fh=(e,t,n,r)=>{const o=Mk(e,t);let i=0,s,l=c=>{s||(s=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await o.next();if(u){l(),c.close();return}let f=d.byteLength;if(n){let y=i+=f;n(y)}c.enqueue(new Uint8Array(d))}catch(u){throw l(u),u}},cancel(c){return l(c),o.return()}},{highWaterMark:2})},Th=64*1024,{isFunction:Is}=T,Vk=(({Request:e,Response:t})=>({Request:e,Response:t}))(T.global),{ReadableStream:zh,TextEncoder:Ph}=T.global,Rh=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Wk=e=>{e=T.merge.call({skipUndefined:!0},Vk,e);const{fetch:t,Request:n,Response:r}=e,o=t?Is(t):typeof fetch=="function",i=Is(n),s=Is(r);if(!o)return!1;const l=o&&Is(zh),c=o&&(typeof Ph=="function"?(x=>v=>x.encode(v))(new Ph):async x=>new Uint8Array(await new n(x).arrayBuffer())),u=i&&l&&Rh(()=>{let x=!1;const v=new n(ft.origin,{body:new zh,method:"POST",get duplex(){return x=!0,"half"}}).headers.has("Content-Type");return x&&!v}),d=s&&l&&Rh(()=>T.isReadableStream(new r("").body)),f={stream:d&&(x=>x.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(x=>{!f[x]&&(f[x]=(v,w)=>{let g=v&&v[x];if(g)return g.call(v);throw new ee(`Response type '${x}' is not supported`,ee.ERR_NOT_SUPPORT,w)})});const y=async x=>{if(x==null)return 0;if(T.isBlob(x))return x.size;if(T.isSpecCompliantForm(x))return(await new n(ft.origin,{method:"POST",body:x}).arrayBuffer()).byteLength;if(T.isArrayBufferView(x)||T.isArrayBuffer(x))return x.byteLength;if(T.isURLSearchParams(x)&&(x=x+""),T.isString(x))return(await c(x)).byteLength},b=async(x,v)=>{const w=T.toFiniteNumber(x.getContentLength());return w??y(v)};return async x=>{let{url:v,method:w,data:g,signal:p,cancelToken:h,timeout:$,onDownloadProgress:k,onUploadProgress:C,responseType:_,headers:E,withCredentials:N="same-origin",fetchOptions:L}=dx(x),V=t||fetch;_=_?(_+"").toLowerCase():"text";let W=Dk([p,h&&h.toAbortSignal()],$),G=null;const Z=W&&W.unsubscribe&&(()=>{W.unsubscribe()});let re;try{if(C&&u&&w!=="get"&&w!=="head"&&(re=await b(E,g))!==0){let z=new n(v,{method:"POST",body:g,duplex:"half"}),A;if(T.isFormData(g)&&(A=z.headers.get("content-type"))&&E.setContentType(A),z.body){const[ne,oe]=jh(re,tl(Eh(C)));g=Fh(z.body,Th,ne,oe)}}T.isString(N)||(N=N?"include":"omit");const M=i&&"credentials"in n.prototype,D={...L,signal:W,method:w.toUpperCase(),headers:E.normalize().toJSON(),body:g,duplex:"half",credentials:M?N:void 0};G=i&&new n(v,D);let O=await(i?V(G,L):V(v,D));const B=d&&(_==="stream"||_==="response");if(d&&(k||B&&Z)){const z={};["status","statusText","headers"].forEach(he=>{z[he]=O[he]});const A=T.toFiniteNumber(O.headers.get("content-length")),[ne,oe]=k&&jh(A,tl(Eh(k),!0))||[];O=new r(Fh(O.body,Th,ne,()=>{oe&&oe(),Z&&Z()}),z)}_=_||"text";let P=await f[T.findKey(f,_)||"text"](O,x);return!B&&Z&&Z(),await new Promise((z,A)=>{cx(z,A,{data:P,headers:Tt.from(O.headers),status:O.status,statusText:O.statusText,config:x,request:G})})}catch(M){throw Z&&Z(),M&&M.name==="TypeError"&&/Load failed|fetch/i.test(M.message)?Object.assign(new ee("Network Error",ee.ERR_NETWORK,x,G,M&&M.response),{cause:M.cause||M}):ee.from(M,M&&M.code,x,G,M&&M.response)}}},Hk=new Map,fx=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:o}=t,i=[r,o,n];let s=i.length,l=s,c,u,d=Hk;for(;l--;)c=i[l],u=d.get(c),u===void 0&&d.set(c,u=l?new Map:Wk(t)),d=u;return u};fx();const yf={http:lk,xhr:Ik,fetch:{get:fx}};T.forEach(yf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Oh=e=>`- ${e}`,qk=e=>T.isFunction(e)||e===null||e===!1;function Gk(e,t){e=T.isArray(e)?e:[e];const{length:n}=e;let r,o;const i={};for(let s=0;s<n;s++){r=e[s];let l;if(o=r,!qk(r)&&(o=yf[(l=String(r)).toLowerCase()],o===void 0))throw new ee(`Unknown adapter '${l}'`);if(o&&(T.isFunction(o)||(o=o.get(t))))break;i[l||"#"+s]=o}if(!o){const s=Object.entries(i).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=n?s.length>1?`since :
`+s.map(Oh).join(`
`):" "+Oh(s[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return o}const px={getAdapter:Gk,adapters:yf};function Cc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new gs(null,e)}function Nh(e){return Cc(e),e.headers=Tt.from(e.headers),e.data=Ec.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),px.getAdapter(e.adapter||ms.adapter,e)(e).then(function(r){return Cc(e),r.data=Ec.call(e,e.transformResponse,r),r.headers=Tt.from(r.headers),r},function(r){return lx(r)||(Cc(e),r&&r.response&&(r.response.data=Ec.call(e,e.transformResponse,r.response),r.response.headers=Tt.from(r.response.headers))),Promise.reject(r)})}const hx="1.13.6",Dl={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Dl[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ah={};Dl.transitional=function(t,n,r){function o(i,s){return"[Axios v"+hx+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new ee(o(s," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!Ah[s]&&(Ah[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,l):!0}};Dl.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Yk(e,t,n){if(typeof e!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],c=l===void 0||s(l,i,e);if(c!==!0)throw new ee("option "+i+" must be "+c,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+i,ee.ERR_BAD_OPTION)}}const xa={assertOptions:Yk,validators:Dl},Ut=xa.validators;let zr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new kh,response:new kh}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Mr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&xa.assertOptions(r,{silentJSONParsing:Ut.transitional(Ut.boolean),forcedJSONParsing:Ut.transitional(Ut.boolean),clarifyTimeoutError:Ut.transitional(Ut.boolean),legacyInterceptorReqResOrdering:Ut.transitional(Ut.boolean)},!1),o!=null&&(T.isFunction(o)?n.paramsSerializer={serialize:o}:xa.assertOptions(o,{encode:Ut.function,serialize:Ut.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),xa.assertOptions(n,{baseUrl:Ut.spelling("baseURL"),withXsrfToken:Ut.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&T.merge(i.common,i[n.method]);i&&T.forEach(["delete","get","head","post","put","patch","common"],x=>{delete i[x]}),n.headers=Tt.concat(s,i);const l=[];let c=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(n)===!1)return;c=c&&v.synchronous;const w=n.transitional||mf;w&&w.legacyInterceptorReqResOrdering?l.unshift(v.fulfilled,v.rejected):l.push(v.fulfilled,v.rejected)});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let d,f=0,y;if(!c){const x=[Nh.bind(this),void 0];for(x.unshift(...l),x.push(...u),y=x.length,d=Promise.resolve(n);f<y;)d=d.then(x[f++],x[f++]);return d}y=l.length;let b=n;for(;f<y;){const x=l[f++],v=l[f++];try{b=x(b)}catch(w){v.call(this,w);break}}try{d=Nh.call(this,b)}catch(x){return Promise.reject(x)}for(f=0,y=u.length;f<y;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Mr(this.defaults,t);const n=ux(t.baseURL,t.url,t.allowAbsoluteUrls);return sx(n,t.params,t.paramsSerializer)}};T.forEach(["delete","get","head","options"],function(t){zr.prototype[t]=function(n,r){return this.request(Mr(r||{},{method:t,url:n,data:(r||{}).data}))}});T.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(Mr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}zr.prototype[t]=n(),zr.prototype[t+"Form"]=n(!0)});let Kk=class mx{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new gs(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new mx(function(o){t=o}),cancel:t}}};function Qk(e){return function(n){return e.apply(null,n)}}function Jk(e){return T.isObject(e)&&e.isAxiosError===!0}const Zu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Zu).forEach(([e,t])=>{Zu[t]=e});function gx(e){const t=new zr(e),n=K0(zr.prototype.request,t);return T.extend(n,zr.prototype,t,{allOwnKeys:!0}),T.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return gx(Mr(e,o))},n}const Le=gx(ms);Le.Axios=zr;Le.CanceledError=gs;Le.CancelToken=Kk;Le.isCancel=lx;Le.VERSION=hx;Le.toFormData=Il;Le.AxiosError=ee;Le.Cancel=Le.CanceledError;Le.all=function(t){return Promise.all(t)};Le.spread=Qk;Le.isAxiosError=Jk;Le.mergeConfig=Mr;Le.AxiosHeaders=Tt;Le.formToJSON=e=>ax(T.isHTMLForm(e)?new FormData(e):e);Le.getAdapter=px.getAdapter;Le.HttpStatusCode=Zu;Le.default=Le;const{Axios:EF,AxiosError:CF,CanceledError:FF,isCancel:TF,CancelToken:zF,VERSION:PF,all:RF,Cancel:OF,isAxiosError:NF,spread:AF,toFormData:LF,AxiosHeaders:IF,HttpStatusCode:DF,formToJSON:BF,getAdapter:MF,mergeConfig:UF}=Le,yx="https://bgrepresentacoes-api-production.up.railway.app/api/v1",Io={ACCESS_TOKEN:"bg:access_token",REFRESH_TOKEN:"bg:refresh_token"},xx=()=>localStorage.getItem(Io.ACCESS_TOKEN),vx=()=>localStorage.getItem(Io.REFRESH_TOKEN),$x=({accessToken:e,refreshToken:t})=>{e&&localStorage.setItem(Io.ACCESS_TOKEN,e),t&&localStorage.setItem(Io.REFRESH_TOKEN,t)},nl=()=>{localStorage.removeItem(Io.ACCESS_TOKEN),localStorage.removeItem(Io.REFRESH_TOKEN)},De=Le.create({baseURL:yx,timeout:15e3,headers:{"Content-Type":"application/json",Accept:"application/json"}});let Ds=!1,ed=[];const Lh=(e,t=null)=>{ed.forEach(({resolve:n,reject:r})=>e?r(e):n(t)),ed=[]};De.interceptors.request.use(e=>{const t=xx();return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));De.interceptors.response.use(e=>e,async e=>{var i,s;const t=e.config,n=((i=e.response)==null?void 0:i.status)===401,r=!t._retry,o=!((s=t.url)!=null&&s.includes("/auth/refresh"));if(n&&r&&o){if(t._retry=!0,Ds)return new Promise((c,u)=>{ed.push({resolve:c,reject:u})}).then(c=>(t.headers.Authorization=`Bearer ${c}`,De(t)));Ds=!0;const l=vx();if(!l)return Ds=!1,nl(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(e);try{const{data:c}=await Le.post(`${yx}/auth/refresh`,{refreshToken:l},{headers:{"Content-Type":"application/json"}}),u=c.data??c,d=u.token??u.accessToken,f=u.refreshToken;if(!d)throw new Error("Refresh não retornou accessToken");return $x({accessToken:d,refreshToken:f}),Lh(null,d),t.headers.Authorization=`Bearer ${d}`,De(t)}catch(c){return Lh(c,null),nl(),window.dispatchEvent(new CustomEvent("bg:session-expired")),Promise.reject(c)}finally{Ds=!1}}return Promise.reject(e)});const Pn=(e,t="Ocorreu um erro inesperado.")=>{var n,r,o,i;return((r=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:r.message)??((i=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:i.error)??(e==null?void 0:e.message)??t},ut={INIT:"INIT",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGOUT:"LOGOUT",PASSWORD_CHANGED:"PASSWORD_CHANGED",UPDATE_USER:"UPDATE_USER",SET_LOADING:"SET_LOADING"},bx={user:null,isAuthenticated:!1,isLoading:!0,mustChangePassword:!1};function Xk(e,{type:t,payload:n}){switch(t){case ut.INIT:return{...e,user:n.user??null,isAuthenticated:!!n.user,isLoading:!1,mustChangePassword:n.mustChangePassword??!1};case ut.LOGIN_SUCCESS:return{...e,user:n.user,isAuthenticated:!0,isLoading:!1,mustChangePassword:n.mustChangePassword??!1};case ut.LOGOUT:return{...bx,isLoading:!1};case ut.PASSWORD_CHANGED:return{...e,mustChangePassword:!1};case ut.UPDATE_USER:return{...e,user:{...e.user,...n}};case ut.SET_LOADING:return{...e,isLoading:n};default:return e}}const wx=j.createContext(null);function Zk({children:e}){var b,x,v,w;const[t,n]=j.useReducer(Xk,bx),r=j.useRef(!1);j.useEffect(()=>{if(r.current)return;r.current=!0,(async()=>{const p=xx(),h=vx();if(!p&&!h){n({type:ut.INIT,payload:{user:null}});return}try{const{data:$}=await De.get("/users/profile");n({type:ut.INIT,payload:{user:$.data}})}catch{nl(),n({type:ut.INIT,payload:{user:null}})}})()},[]),j.useEffect(()=>{const g=()=>{n({type:ut.LOGOUT})};return window.addEventListener("bg:session-expired",g),()=>window.removeEventListener("bg:session-expired",g)},[]);const o=j.useCallback(async(g,p)=>{n({type:ut.SET_LOADING,payload:!0});try{const{data:h}=await De.post("/auth/login",{email:g,password:p}),$=h.data??h,k=$.token??$.accessToken,{refreshToken:C,user:_}=$;te.success("Login efetuado com sucesso!",{toastId:"login-success"}),$x({accessToken:k,refreshToken:C});const E=($.mustChangePassword??h.mustChangePassword??((_==null?void 0:_.last_login_at)===null||(_==null?void 0:_.last_login_at)===void 0),!1),N=$.mustChangePassword===!0;return n({type:ut.LOGIN_SUCCESS,payload:{user:_,mustChangePassword:N}}),{mustChangePassword:N}}catch(h){throw n({type:ut.SET_LOADING,payload:!1}),new Error(Pn(h,"E-mail ou senha inválidos."))}},[]),i=j.useCallback(async(g,p,h)=>{try{await De.patch("/auth/change-password",{currentPassword:g,newPassword:p,confirmPassword:h}),n({type:ut.PASSWORD_CHANGED}),te.success("Senha alterada com sucesso!")}catch($){throw new Error(Pn($,"Erro ao alterar a senha. Tente novamente."))}},[]),s=j.useCallback(()=>{te.success("Logout efetuado com sucesso!",{toastId:"logout-success"}),nl(),n({type:ut.LOGOUT}),De.post("/auth/logout").catch(()=>{})},[]),l=j.useCallback(g=>{n({type:ut.UPDATE_USER,payload:g})},[]),c=((b=t.user)==null?void 0:b.role)==="admin",u=((x=t.user)==null?void 0:x.role)==="user",d=((v=t.user)==null?void 0:v.role)==="partner",f=j.useCallback((...g)=>{var p;return g.includes((p=t.user)==null?void 0:p.role)},[(w=t.user)==null?void 0:w.role]),y=j.useMemo(()=>({user:t.user,isAuthenticated:t.isAuthenticated,isLoading:t.isLoading,mustChangePassword:t.mustChangePassword,isAdmin:c,isUser:u,isPartner:d,hasRole:f,login:o,logout:s,changePassword:i,updateUser:l}),[t,c,u,d,f,o,s,i,l]);return a.jsx(wx.Provider,{value:y,children:e})}function Hr(){const e=j.useContext(wx);if(!e)throw new Error("useAuth deve ser usado dentro de <AuthProvider>.");return e}const e2=He`
  to { transform: rotate(360deg); }
`,t2=m.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.surface.page};
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,n2=m.div`
  width: 36px;
  height: 36px;
  border: 3px solid ${({theme:e})=>e.colors.primary[100]};
  border-top-color: ${({theme:e})=>e.brand.primary};
  border-radius: 50%;
  animation: ${e2} 0.8s linear infinite;
`,r2=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,o2=m.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.surface.page};
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
`,i2=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[200]};
  margin: 0;
  line-height: 1;
`,s2=m.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,a2=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
  max-width: 320px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;function Fc({allowedRoles:e=[]}){const{isAuthenticated:t,isLoading:n,mustChangePassword:r,user:o}=Hr(),i=fr();return n?a.jsxs(t2,{children:[a.jsx(n2,{}),a.jsx(r2,{children:"Verificando sessão…"})]}):t?r&&i.pathname!=="/alterar-senha"?a.jsx(Ga,{to:"/alterar-senha",replace:!0}):e.length>0&&!e.includes(o==null?void 0:o.role)?a.jsxs(o2,{children:[a.jsx(i2,{children:"403"}),a.jsx(s2,{children:"Acesso não autorizado"}),a.jsx(a2,{children:"Você não tem permissão para acessar esta área. Entre em contato com o administrador caso acredite que isso é um erro."})]}):a.jsx(y0,{}):a.jsx(Ga,{to:"/login",state:{from:i},replace:!0})}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sx=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=j.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:s,...l},c)=>j.createElement("svg",{ref:c,...c2,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Sx("lucide",o),...l},[...s.map(([u,d])=>j.createElement(u,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(e,t)=>{const n=j.forwardRef(({className:r,...o},i)=>j.createElement(u2,{ref:i,iconNode:t,className:Sx(`lucide-${l2(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=le("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=le("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=le("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=le("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=le("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=le("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=le("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=le("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=le("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=le("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=le("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=le("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=le("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=le("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=le("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=le("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=le("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=le("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=le("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=le("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=le("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=le("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=le("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=le("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=le("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=le("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=le("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=le("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=le("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=le("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=le("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=le("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=le("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=le("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=le("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),E2=He`
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
`,C2=m.aside`
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
`,F2=m.div`
  padding: ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[5]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral[800]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  animation: ${E2} 0.4s ease both;
`,T2=m.div`
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
`,z2=m.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
`,P2=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,R2=m.nav`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[3]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,O2=m.div`
  margin-top: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  padding: 0 ${({theme:e})=>e.spacing[2]};
`,N2=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.neutral[600]};
`,A2=m(Kb)`
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
`,L2=m.span`
  flex: 1;
`;m.span`
  background-color: ${({theme:e})=>e.colors.primary[600]};
  color: #fff;
  font-size: 10px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  padding: 1px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  line-height: 1.6;
`;const I2=m.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[3]};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[800]};
`,D2=m.div`
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
`,B2=m.div`
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
`,M2=m.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,U2=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,V2=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[500]};
  text-transform: capitalize;
`,W2=m.div`
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
`,H2=(e="")=>e.split(" ").filter(Boolean).slice(0,2).map(t=>t[0].toUpperCase()).join(""),q2={admin:"Administrador",user:"Usuário",partner:"Parceiro"},G2=[{section:"Principal",items:[{path:"/dashboard",label:"Dashboard",icon:x2},{path:"/clientes",label:"Clientes",icon:j2},{path:"/vendas",label:"Vendas",icon:k2}]},{section:"Administração",adminOnly:!0,items:[{path:"/usuarios",label:"Usuários",icon:Px},{path:"/bandeiras",label:"Bandeiras",icon:Ex},{path:"/planos",label:"Planos",icon:Ih},{path:"/relatorios",label:"Relatórios",icon:Ih}]},{section:"Conta",items:[{path:"/perfil",label:"Meu Perfil",icon:h2}]}];function Y2({open:e,onClose:t}){const{user:n,isAdmin:r}=Hr();return a.jsxs(a.Fragment,{children:[a.jsx(W2,{$open:e,onClick:t}),a.jsxs(C2,{$open:e,children:[a.jsxs(F2,{children:[a.jsx(T2,{children:"BG"}),a.jsx(z2,{children:a.jsx(P2,{children:"BG Representações"})})]}),a.jsx(R2,{children:G2.map(o=>o.adminOnly&&!r?null:a.jsxs("div",{children:[a.jsx(O2,{children:a.jsx(N2,{children:o.section})}),o.items.map(({path:i,label:s,icon:l})=>a.jsxs(A2,{to:i,onClick:t,children:[a.jsx(l,{size:17}),a.jsx(L2,{children:s})]},i))]},o.section))}),a.jsx(I2,{children:a.jsxs(D2,{children:[a.jsx(B2,{children:H2(n==null?void 0:n.name)}),a.jsxs(M2,{children:[a.jsx(U2,{children:(n==null?void 0:n.name)??"Usuário"}),a.jsx(V2,{children:q2[n==null?void 0:n.role]??(n==null?void 0:n.role)})]})]})})]})]})}const K2=m.header`
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
`,Q2=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,J2=m.button`
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
`,X2=m.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,Z2=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,e_=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;

  /* Oculta em telas pequenas para não sobrecarregar */
  @media (max-width: 600px) {
    display: none;
  }
`,t_=m.span`
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
`,n_=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`,r_=m.div`
  width: 1px;
  height: 24px;
  background-color: ${({theme:e})=>e.border.default};
  flex-shrink: 0;

  @media (max-width: 600px) {
    display: none;
  }
`,o_=m.button`
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
`,Tc={"/dashboard":"Dashboard","/clientes":"Clientes","/vendas":"Vendas","/usuarios":"Usuários","/bandeiras":"Bandeiras","/planos":"Planos","/relatorios":"Relatórios","/perfil":"Meu Perfil","/onboarding":"Novo Cliente"},i_={admin:"Administrador",user:"Usuário",partner:"Parceiro"};function s_({onMenuClick:e}){var s;const{user:t,logout:n}=Hr(),r=fr(),o=(()=>{const l=Tc[r.pathname];if(l)return l;const c=Object.keys(Tc).find(u=>r.pathname.startsWith(u+"/"));return c?Tc[c]:"BG Representações"})(),i=((s=t==null?void 0:t.name)==null?void 0:s.split(" ")[0])??"Usuário";return a.jsxs(K2,{children:[a.jsxs(Q2,{children:[a.jsx(J2,{type:"button",onClick:e,"aria-label":"Abrir menu",children:a.jsx(b2,{size:18})}),a.jsx(X2,{children:o})]}),a.jsxs(Z2,{children:[a.jsxs(e_,{children:[a.jsxs(t_,{children:["Olá, ",i]}),a.jsx(n_,{children:i_[t==null?void 0:t.role]??(t==null?void 0:t.role)})]}),a.jsx(r_,{}),a.jsxs(o_,{type:"button",onClick:n,children:[a.jsx($2,{size:15}),a.jsx("span",{children:"Sair"})]})]})]})}const a_=m.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.surface.page};
`,l_=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; /* evita overflow em flex */
  overflow: hidden;
`,c_=m.main`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[8]};
  background-color: ${({theme:e})=>e.surface.page};

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[4]};
  }
`;function Bh(){const[e,t]=j.useState(!1);return a.jsxs(a_,{children:[a.jsx(Y2,{open:e,onClose:()=>t(!1)}),a.jsxs(l_,{children:[a.jsx(s_,{onMenuClick:()=>t(n=>!n)}),a.jsx(c_,{children:a.jsx(y0,{})})]})]})}var ys=e=>e.type==="checkbox",jr=e=>e instanceof Date,St=e=>e==null;const Rx=e=>typeof e=="object";var We=e=>!St(e)&&!Array.isArray(e)&&Rx(e)&&!jr(e),u_=e=>We(e)&&e.target?ys(e.target)?e.target.checked:e.target.value:e,d_=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,f_=(e,t)=>e.has(d_(t)),p_=e=>{const t=e.constructor&&e.constructor.prototype;return We(t)&&t.hasOwnProperty("isPrototypeOf")},wf=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function qe(e){if(e instanceof Date)return new Date(e);const t=typeof FileList<"u"&&e instanceof FileList;if(wf&&(e instanceof Blob||t))return e;const n=Array.isArray(e);if(!n&&!(We(e)&&p_(e)))return e;const r=n?[]:Object.create(Object.getPrototypeOf(e));for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=qe(e[o]));return r}var Ml=e=>/^\w*$/.test(e),Ce=e=>e===void 0,Sf=e=>Array.isArray(e)?e.filter(Boolean):[],kf=e=>Sf(e.replace(/["|']|\]/g,"").split(/\.|\[/)),K=(e,t,n)=>{if(!t||!We(e))return n;const r=(Ml(t)?[t]:kf(t)).reduce((o,i)=>St(o)?o:o[i],e);return Ce(r)||r===e?Ce(e[t])?n:e[t]:r},dn=e=>typeof e=="boolean",tn=e=>typeof e=="function",$e=(e,t,n)=>{let r=-1;const o=Ml(t)?[t]:kf(t),i=o.length,s=i-1;for(;++r<i;){const l=o[r];let c=n;if(r!==s){const u=e[l];c=We(u)||Array.isArray(u)?u:isNaN(+o[r+1])?{}:[]}if(l==="__proto__"||l==="constructor"||l==="prototype")return;e[l]=c,e=e[l]}};const Mh={BLUR:"blur",FOCUS_OUT:"focusout"},nn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},vn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},h_=Q.createContext(null);h_.displayName="HookFormControlContext";var m_=(e,t,n,r=!0)=>{const o={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(o,i,{get:()=>{const s=i;return t._proxyFormState[s]!==nn.all&&(t._proxyFormState[s]=!r||nn.all),e[s]}});return o};const g_=typeof window<"u"?Q.useLayoutEffect:Q.useEffect;var Nt=e=>typeof e=="string",y_=(e,t,n,r,o)=>Nt(e)?(r&&t.watch.add(e),K(n,e,o)):Array.isArray(e)?e.map(i=>(r&&t.watch.add(i),K(n,i))):(r&&(t.watchAll=!0),n),nd=e=>St(e)||!Rx(e);function Wn(e,t,n=new WeakSet){if(nd(e)||nd(t))return Object.is(e,t);if(jr(e)&&jr(t))return Object.is(e.getTime(),t.getTime());const r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;if(n.has(e)||n.has(t))return!0;n.add(e),n.add(t);for(const i of r){const s=e[i];if(!o.includes(i))return!1;if(i!=="ref"){const l=t[i];if(jr(s)&&jr(l)||We(s)&&We(l)||Array.isArray(s)&&Array.isArray(l)?!Wn(s,l,n):!Object.is(s,l))return!1}}return!0}const x_=Q.createContext(null);x_.displayName="HookFormContext";var Ox=(e,t,n,r,o)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:o||!0}}:{},Pi=e=>Array.isArray(e)?e:[e],Uh=()=>{let e=[];return{get observers(){return e},next:o=>{for(const i of e)i.next&&i.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(i=>i!==o)}}),unsubscribe:()=>{e=[]}}};function Nx(e,t){const n={};for(const r in e)if(e.hasOwnProperty(r)){const o=e[r],i=t[r];if(o&&We(o)&&i){const s=Nx(o,i);We(s)&&(n[r]=s)}else e[r]&&(n[r]=i)}return n}var mt=e=>We(e)&&!Object.keys(e).length,_f=e=>e.type==="file",ol=e=>{if(!wf)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Ax=e=>e.type==="select-multiple",jf=e=>e.type==="radio",v_=e=>jf(e)||ys(e),zc=e=>ol(e)&&e.isConnected;function $_(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Ce(e)?r++:e[t[r++]];return e}function b_(e){for(const t in e)if(e.hasOwnProperty(t)&&!Ce(e[t]))return!1;return!0}function Me(e,t){const n=Array.isArray(t)?t:Ml(t)?[t]:kf(t),r=n.length===1?e:$_(e,n),o=n.length-1,i=n[o];return r&&delete r[i],o!==0&&(We(r)&&mt(r)||Array.isArray(r)&&b_(r))&&Me(e,n.slice(0,-1)),e}var w_=e=>{for(const t in e)if(tn(e[t]))return!0;return!1};function Lx(e){return Array.isArray(e)||We(e)&&!w_(e)}function rd(e,t={}){for(const n in e){const r=e[n];Lx(r)?(t[n]=Array.isArray(r)?[]:{},rd(r,t[n])):Ce(r)||(t[n]=!0)}return t}function no(e,t,n){n||(n=rd(t));for(const r in e){const o=e[r];if(Lx(o))Ce(t)||nd(n[r])?n[r]=rd(o,Array.isArray(o)?[]:{}):no(o,St(t)?{}:t[r],n[r]);else{const i=t[r];n[r]=!Wn(o,i)}}return n}const Vh={value:!1,isValid:!1},Wh={value:!0,isValid:!0};var Ix=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ce(e[0].attributes.value)?Ce(e[0].value)||e[0].value===""?Wh:{value:e[0].value,isValid:!0}:Wh:Vh}return Vh},Dx=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Ce(e)?e:t?e===""?NaN:e&&+e:n&&Nt(e)?new Date(e):r?r(e):e;const Hh={isValid:!1,value:null};var Bx=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Hh):Hh;function qh(e){const t=e.ref;return _f(t)?t.files:jf(t)?Bx(e.refs).value:Ax(t)?[...t.selectedOptions].map(({value:n})=>n):ys(t)?Ix(e.refs).value:Dx(Ce(t.value)?e.ref.value:t.value,e)}var S_=(e,t,n,r)=>{const o={};for(const i of e){const s=K(t,i);s&&$e(o,i,s._f)}return{criteriaMode:n,names:[...e],fields:o,shouldUseNativeValidation:r}},il=e=>e instanceof RegExp,ti=e=>Ce(e)?e:il(e)?e.source:We(e)?il(e.value)?e.value.source:e.value:e,Gh=e=>({isOnSubmit:!e||e===nn.onSubmit,isOnBlur:e===nn.onBlur,isOnChange:e===nn.onChange,isOnAll:e===nn.all,isOnTouch:e===nn.onTouched});const Yh="AsyncFunction";var k_=e=>!!e&&!!e.validate&&!!(tn(e.validate)&&e.validate.constructor.name===Yh||We(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===Yh)),__=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Kh=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Ri=(e,t,n,r)=>{for(const o of n||Object.keys(e)){const i=K(e,o);if(i){const{_f:s,...l}=i;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],o)&&!r)return!0;if(s.ref&&t(s.ref,s.name)&&!r)return!0;if(Ri(l,t))break}else if(We(l)&&Ri(l,t))break}}};function Qh(e,t,n){const r=K(e,n);if(r||Ml(n))return{error:r,name:n};const o=n.split(".");for(;o.length;){const i=o.join("."),s=K(t,i),l=K(e,i);if(s&&!Array.isArray(s)&&n!==i)return{name:n};if(l&&l.type)return{name:i,error:l};if(l&&l.root&&l.root.type)return{name:`${i}.root`,error:l.root};o.pop()}return{name:n}}var j_=(e,t,n,r)=>{n(e);const{name:o,...i}=e;return mt(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(s=>t[s]===(!r||nn.all))},E_=(e,t,n)=>!e||!t||e===t||Pi(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r))),C_=(e,t,n,r,o)=>o.isOnAll?!1:!n&&o.isOnTouch?!(t||e):(n?r.isOnBlur:o.isOnBlur)?!e:(n?r.isOnChange:o.isOnChange)?e:!0,F_=(e,t)=>!Sf(K(e,t)).length&&Me(e,t),T_=(e,t,n)=>{const r=Pi(K(e,n));return $e(r,"root",t[n]),$e(e,n,r),e};function Jh(e,t,n="validate"){if(Nt(e)||Array.isArray(e)&&e.every(Nt)||dn(e)&&!e)return{type:n,message:Nt(e)?e:"",ref:t}}var Qr=e=>We(e)&&!il(e)?e:{value:e,message:""},Xh=async(e,t,n,r,o,i)=>{const{ref:s,refs:l,required:c,maxLength:u,minLength:d,min:f,max:y,pattern:b,validate:x,name:v,valueAsNumber:w,mount:g}=e._f,p=K(n,v);if(!g||t.has(v))return{};const h=l?l[0]:s,$=W=>{o&&h.reportValidity&&(h.setCustomValidity(dn(W)?"":W||""),h.reportValidity())},k={},C=jf(s),_=ys(s),E=C||_,N=(w||_f(s))&&Ce(s.value)&&Ce(p)||ol(s)&&s.value===""||p===""||Array.isArray(p)&&!p.length,L=Ox.bind(null,v,r,k),V=(W,G,Z,re=vn.maxLength,M=vn.minLength)=>{const D=W?G:Z;k[v]={type:W?re:M,message:D,ref:s,...L(W?re:M,D)}};if(i?!Array.isArray(p)||!p.length:c&&(!E&&(N||St(p))||dn(p)&&!p||_&&!Ix(l).isValid||C&&!Bx(l).isValid)){const{value:W,message:G}=Nt(c)?{value:!!c,message:c}:Qr(c);if(W&&(k[v]={type:vn.required,message:G,ref:h,...L(vn.required,G)},!r))return $(G),k}if(!N&&(!St(f)||!St(y))){let W,G;const Z=Qr(y),re=Qr(f);if(!St(p)&&!isNaN(p)){const M=s.valueAsNumber||p&&+p;St(Z.value)||(W=M>Z.value),St(re.value)||(G=M<re.value)}else{const M=s.valueAsDate||new Date(p),D=P=>new Date(new Date().toDateString()+" "+P),O=s.type=="time",B=s.type=="week";Nt(Z.value)&&p&&(W=O?D(p)>D(Z.value):B?p>Z.value:M>new Date(Z.value)),Nt(re.value)&&p&&(G=O?D(p)<D(re.value):B?p<re.value:M<new Date(re.value))}if((W||G)&&(V(!!W,Z.message,re.message,vn.max,vn.min),!r))return $(k[v].message),k}if((u||d)&&!N&&(Nt(p)||i&&Array.isArray(p))){const W=Qr(u),G=Qr(d),Z=!St(W.value)&&p.length>+W.value,re=!St(G.value)&&p.length<+G.value;if((Z||re)&&(V(Z,W.message,G.message),!r))return $(k[v].message),k}if(b&&!N&&Nt(p)){const{value:W,message:G}=Qr(b);if(il(W)&&!p.match(W)&&(k[v]={type:vn.pattern,message:G,ref:s,...L(vn.pattern,G)},!r))return $(G),k}if(x){if(tn(x)){const W=await x(p,n),G=Jh(W,h);if(G&&(k[v]={...G,...L(vn.validate,G.message)},!r))return $(G.message),k}else if(We(x)){let W={};for(const G in x){if(!mt(W)&&!r)break;const Z=Jh(await x[G](p,n),h,G);Z&&(W={...Z,...L(G,Z.message)},$(Z.message),r&&(k[v]=W))}if(!mt(W)&&(k[v]={ref:h,...W},!r))return k}}return $(!0),k};const z_={mode:nn.onSubmit,reValidateMode:nn.onChange,shouldFocusError:!0};function P_(e={}){let t={...z_,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:tn(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},o=We(t.defaultValues)||We(t.values)?qe(t.defaultValues||t.values)||{}:{},i=t.shouldUnregister?{}:qe(o),s={action:!1,mount:!1,watch:!1,keepIsValid:!1},l={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},c,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={...d};let y={...f};const b={array:Uh(),state:Uh()},x=t.criteriaMode===nn.all,v=S=>F=>{clearTimeout(u),u=setTimeout(S,F)},w=async S=>{if(!s.keepIsValid&&!t.disabled&&(f.isValid||y.isValid||S)){let F;t.resolver?(F=mt((await E()).errors),g()):F=await L(r,!0),F!==n.isValid&&b.state.next({isValid:F})}},g=(S,F)=>{!t.disabled&&(f.isValidating||f.validatingFields||y.isValidating||y.validatingFields)&&((S||Array.from(l.mount)).forEach(R=>{R&&(F?$e(n.validatingFields,R,F):Me(n.validatingFields,R))}),b.state.next({validatingFields:n.validatingFields,isValidating:!mt(n.validatingFields)}))},p=(S,F=[],R,q,H=!0,U=!0)=>{if(q&&R&&!t.disabled){if(s.action=!0,U&&Array.isArray(K(r,S))){const J=R(K(r,S),q.argA,q.argB);H&&$e(r,S,J)}if(U&&Array.isArray(K(n.errors,S))){const J=R(K(n.errors,S),q.argA,q.argB);H&&$e(n.errors,S,J),F_(n.errors,S)}if((f.touchedFields||y.touchedFields)&&U&&Array.isArray(K(n.touchedFields,S))){const J=R(K(n.touchedFields,S),q.argA,q.argB);H&&$e(n.touchedFields,S,J)}(f.dirtyFields||y.dirtyFields)&&(n.dirtyFields=no(o,i)),b.state.next({name:S,isDirty:W(S,F),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else $e(i,S,F)},h=(S,F)=>{$e(n.errors,S,F),b.state.next({errors:n.errors})},$=S=>{n.errors=S,b.state.next({errors:n.errors,isValid:!1})},k=(S,F,R,q)=>{const H=K(r,S);if(H){const U=K(i,S,Ce(R)?K(o,S):R);Ce(U)||q&&q.defaultChecked||F?$e(i,S,F?U:qh(H._f)):re(S,U),s.mount&&!s.action&&w()}},C=(S,F,R,q,H)=>{let U=!1,J=!1;const me={name:S};if(!t.disabled){if(!R||q){(f.isDirty||y.isDirty)&&(J=n.isDirty,n.isDirty=me.isDirty=W(),U=J!==me.isDirty);const ge=Wn(K(o,S),F);J=!!K(n.dirtyFields,S),ge?Me(n.dirtyFields,S):$e(n.dirtyFields,S,!0),me.dirtyFields=n.dirtyFields,U=U||(f.dirtyFields||y.dirtyFields)&&J!==!ge}if(R){const ge=K(n.touchedFields,S);ge||($e(n.touchedFields,S,R),me.touchedFields=n.touchedFields,U=U||(f.touchedFields||y.touchedFields)&&ge!==R)}U&&H&&b.state.next(me)}return U?me:{}},_=(S,F,R,q)=>{const H=K(n.errors,S),U=(f.isValid||y.isValid)&&dn(F)&&n.isValid!==F;if(t.delayError&&R?(c=v(()=>h(S,R)),c(t.delayError)):(clearTimeout(u),c=null,R?$e(n.errors,S,R):Me(n.errors,S)),(R?!Wn(H,R):H)||!mt(q)||U){const J={...q,...U&&dn(F)?{isValid:F}:{},errors:n.errors,name:S};n={...n,...J},b.state.next(J)}},E=async S=>(g(S,!0),await t.resolver(i,t.context,S_(S||l.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),N=async S=>{const{errors:F}=await E(S);if(g(S),S)for(const R of S){const q=K(F,R);q?$e(n.errors,R,q):Me(n.errors,R)}else n.errors=F;return F},L=async(S,F,R={valid:!0})=>{for(const q in S){const H=S[q];if(H){const{_f:U,...J}=H;if(U){const me=l.array.has(U.name),ge=H._f&&k_(H._f);ge&&f.validatingFields&&g([U.name],!0);const ht=await Xh(H,l.disabled,i,x,t.shouldUseNativeValidation&&!F,me);if(ge&&f.validatingFields&&g([U.name]),ht[U.name]&&(R.valid=!1,F||e.shouldUseNativeValidation))break;!F&&(K(ht,U.name)?me?T_(n.errors,ht,U.name):$e(n.errors,U.name,ht[U.name]):Me(n.errors,U.name))}!mt(J)&&await L(J,F,R)}}return R.valid},V=()=>{for(const S of l.unMount){const F=K(r,S);F&&(F._f.refs?F._f.refs.every(R=>!zc(R)):!zc(F._f.ref))&&X(S)}l.unMount=new Set},W=(S,F)=>!t.disabled&&(S&&F&&$e(i,S,F),!Wn(z(),o)),G=(S,F,R)=>y_(S,l,{...s.mount?i:Ce(F)?o:Nt(S)?{[S]:F}:F},R,F),Z=S=>Sf(K(s.mount?i:o,S,t.shouldUnregister?K(o,S,[]):[])),re=(S,F,R={})=>{const q=K(r,S);let H=F;if(q){const U=q._f;U&&(!U.disabled&&$e(i,S,Dx(F,U)),H=ol(U.ref)&&St(F)?"":F,Ax(U.ref)?[...U.ref.options].forEach(J=>J.selected=H.includes(J.value)):U.refs?ys(U.ref)?U.refs.forEach(J=>{(!J.defaultChecked||!J.disabled)&&(Array.isArray(H)?J.checked=!!H.find(me=>me===J.value):J.checked=H===J.value||!!H)}):U.refs.forEach(J=>J.checked=J.value===H):_f(U.ref)?U.ref.value="":(U.ref.value=H,U.ref.type||b.state.next({name:S,values:qe(i)})))}(R.shouldDirty||R.shouldTouch)&&C(S,H,R.shouldTouch,R.shouldDirty,!0),R.shouldValidate&&P(S)},M=(S,F,R)=>{for(const q in F){if(!F.hasOwnProperty(q))return;const H=F[q],U=S+"."+q,J=K(r,U);(l.array.has(S)||We(H)||J&&!J._f)&&!jr(H)?M(U,H,R):re(U,H,R)}},D=(S,F,R={})=>{const q=K(r,S),H=l.array.has(S),U=qe(F);$e(i,S,U),H?(b.array.next({name:S,values:qe(i)}),(f.isDirty||f.dirtyFields||y.isDirty||y.dirtyFields)&&R.shouldDirty&&b.state.next({name:S,dirtyFields:no(o,i),isDirty:W(S,U)})):q&&!q._f&&!St(U)?M(S,U,R):re(S,U,R),Kh(S,l)?b.state.next({...n,name:S,values:qe(i)}):b.state.next({name:s.mount?S:void 0,values:qe(i)})},O=async S=>{s.mount=!0;const F=S.target;let R=F.name,q=!0;const H=K(r,R),U=ge=>{q=Number.isNaN(ge)||jr(ge)&&isNaN(ge.getTime())||Wn(ge,K(i,R,ge))},J=Gh(t.mode),me=Gh(t.reValidateMode);if(H){let ge,ht;const hr=F.type?qh(H._f):u_(S),Nn=S.type===Mh.BLUR||S.type===Mh.FOCUS_OUT,g1=!__(H._f)&&!t.resolver&&!K(n.errors,R)&&!H._f.deps||C_(Nn,K(n.touchedFields,R),n.isSubmitted,me,J),Wl=Kh(R,l,Nn);$e(i,R,hr),Nn?(!F||!F.readOnly)&&(H._f.onBlur&&H._f.onBlur(S),c&&c(0)):H._f.onChange&&H._f.onChange(S);const Hl=C(R,hr,Nn),y1=!mt(Hl)||Wl;if(!Nn&&b.state.next({name:R,type:S.type,values:qe(i)}),g1)return(f.isValid||y.isValid)&&(t.mode==="onBlur"?Nn&&w():Nn||w()),y1&&b.state.next({name:R,...Wl?{}:Hl});if(!Nn&&Wl&&b.state.next({...n}),t.resolver){const{errors:Df}=await E([R]);if(g([R]),U(hr),q){const x1=Qh(n.errors,r,R),Bf=Qh(Df,r,x1.name||R);ge=Bf.error,R=Bf.name,ht=mt(Df)}}else g([R],!0),ge=(await Xh(H,l.disabled,i,x,t.shouldUseNativeValidation))[R],g([R]),U(hr),q&&(ge?ht=!1:(f.isValid||y.isValid)&&(ht=await L(r,!0)));q&&(H._f.deps&&(!Array.isArray(H._f.deps)||H._f.deps.length>0)&&P(H._f.deps),_(R,ht,ge,Hl))}},B=(S,F)=>{if(K(n.errors,F)&&S.focus)return S.focus(),1},P=async(S,F={})=>{let R,q;const H=Pi(S);if(t.resolver){const U=await N(Ce(S)?S:H);R=mt(U),q=S?!H.some(J=>K(U,J)):R}else S?(q=(await Promise.all(H.map(async U=>{const J=K(r,U);return await L(J&&J._f?{[U]:J}:J)}))).every(Boolean),!(!q&&!n.isValid)&&w()):q=R=await L(r);return b.state.next({...!Nt(S)||(f.isValid||y.isValid)&&R!==n.isValid?{}:{name:S},...t.resolver||!S?{isValid:R}:{},errors:n.errors}),F.shouldFocus&&!q&&Ri(r,B,S?H:l.mount),q},z=(S,F)=>{let R={...s.mount?i:o};return F&&(R=Nx(F.dirtyFields?n.dirtyFields:n.touchedFields,R)),Ce(S)?R:Nt(S)?K(R,S):S.map(q=>K(R,q))},A=(S,F)=>({invalid:!!K((F||n).errors,S),isDirty:!!K((F||n).dirtyFields,S),error:K((F||n).errors,S),isValidating:!!K(n.validatingFields,S),isTouched:!!K((F||n).touchedFields,S)}),ne=S=>{const F=S?Pi(S):void 0;F==null||F.forEach(R=>Me(n.errors,R)),F?F.forEach(R=>{b.state.next({name:R,errors:n.errors})}):b.state.next({errors:{}})},oe=(S,F,R)=>{const q=(K(r,S,{_f:{}})._f||{}).ref,H=K(n.errors,S)||{},{ref:U,message:J,type:me,...ge}=H;$e(n.errors,S,{...ge,...F,ref:q}),b.state.next({name:S,errors:n.errors,isValid:!1}),R&&R.shouldFocus&&q&&q.focus&&q.focus()},he=(S,F)=>tn(S)?b.state.subscribe({next:R=>"values"in R&&S(G(void 0,F),R)}):G(S,F,!0),ue=S=>b.state.subscribe({next:F=>{E_(S.name,F.name,S.exact)&&j_(F,S.formState||f,m1,S.reRenderRoot)&&S.callback({values:{...i},...n,...F,defaultValues:o})}}).unsubscribe,xe=S=>(s.mount=!0,y={...y,...S.formState},ue({...S,formState:{...d,...S.formState}})),X=(S,F={})=>{for(const R of S?Pi(S):l.mount)l.mount.delete(R),l.array.delete(R),F.keepValue||(Me(r,R),Me(i,R)),!F.keepError&&Me(n.errors,R),!F.keepDirty&&Me(n.dirtyFields,R),!F.keepTouched&&Me(n.touchedFields,R),!F.keepIsValidating&&Me(n.validatingFields,R),!t.shouldUnregister&&!F.keepDefaultValue&&Me(o,R);b.state.next({values:qe(i)}),b.state.next({...n,...F.keepDirty?{isDirty:W()}:{}}),!F.keepIsValid&&w()},Be=({disabled:S,name:F})=>{if(dn(S)&&s.mount||S||l.disabled.has(F)){const H=l.disabled.has(F)!==!!S;S?l.disabled.add(F):l.disabled.delete(F),H&&s.mount&&!s.action&&w()}},ve=(S,F={})=>{let R=K(r,S);const q=dn(F.disabled)||dn(t.disabled);return $e(r,S,{...R||{},_f:{...R&&R._f?R._f:{ref:{name:S}},name:S,mount:!0,...F}}),l.mount.add(S),R?Be({disabled:dn(F.disabled)?F.disabled:t.disabled,name:S}):k(S,!0,F.value),{...q?{disabled:F.disabled||t.disabled}:{},...t.progressive?{required:!!F.required,min:ti(F.min),max:ti(F.max),minLength:ti(F.minLength),maxLength:ti(F.maxLength),pattern:ti(F.pattern)}:{},name:S,onChange:O,onBlur:O,ref:H=>{if(H){ve(S,F),R=K(r,S);const U=Ce(H.value)&&H.querySelectorAll&&H.querySelectorAll("input,select,textarea")[0]||H,J=v_(U),me=R._f.refs||[];if(J?me.find(ge=>ge===U):U===R._f.ref)return;$e(r,S,{_f:{...R._f,...J?{refs:[...me.filter(zc),U,...Array.isArray(K(o,S))?[{}]:[]],ref:{type:U.type,name:S}}:{ref:U}}}),k(S,!1,void 0,U)}else R=K(r,S,{}),R._f&&(R._f.mount=!1),(t.shouldUnregister||F.shouldUnregister)&&!(f_(l.array,S)&&s.action)&&l.unMount.add(S)}}},et=()=>t.shouldFocusError&&Ri(r,B,l.mount),Gr=S=>{dn(S)&&(b.state.next({disabled:S}),Ri(r,(F,R)=>{const q=K(r,R);q&&(F.disabled=q._f.disabled||S,Array.isArray(q._f.refs)&&q._f.refs.forEach(H=>{H.disabled=q._f.disabled||S}))},0,!1))},xn=(S,F)=>async R=>{let q;R&&(R.preventDefault&&R.preventDefault(),R.persist&&R.persist());let H=qe(i);if(b.state.next({isSubmitting:!0}),t.resolver){const{errors:U,values:J}=await E();g(),n.errors=U,H=qe(J)}else await L(r);if(l.disabled.size)for(const U of l.disabled)Me(H,U);if(Me(n.errors,"root"),mt(n.errors)){b.state.next({errors:{}});try{await S(H,R)}catch(U){q=U}}else F&&await F({...n.errors},R),et(),setTimeout(et);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:mt(n.errors)&&!q,submitCount:n.submitCount+1,errors:n.errors}),q)throw q},p1=(S,F={})=>{K(r,S)&&(Ce(F.defaultValue)?D(S,qe(K(o,S))):(D(S,F.defaultValue),$e(o,S,qe(F.defaultValue))),F.keepTouched||Me(n.touchedFields,S),F.keepDirty||(Me(n.dirtyFields,S),n.isDirty=F.defaultValue?W(S,qe(K(o,S))):W()),F.keepError||(Me(n.errors,S),f.isValid&&w()),b.state.next({...n}))},Af=(S,F={})=>{const R=S?qe(S):o,q=qe(R),H=mt(S),U=H?o:q;if(F.keepDefaultValues||(o=R),!F.keepValues){if(F.keepDirtyValues){const J=new Set([...l.mount,...Object.keys(no(o,i))]);for(const me of Array.from(J)){const ge=K(n.dirtyFields,me),ht=K(i,me),hr=K(U,me);ge&&!Ce(ht)?$e(U,me,ht):!ge&&!Ce(hr)&&D(me,hr)}}else{if(wf&&Ce(S))for(const J of l.mount){const me=K(r,J);if(me&&me._f){const ge=Array.isArray(me._f.refs)?me._f.refs[0]:me._f.ref;if(ol(ge)){const ht=ge.closest("form");if(ht){ht.reset();break}}}}if(F.keepFieldsRef)for(const J of l.mount)D(J,K(U,J));else r={}}i=t.shouldUnregister?F.keepDefaultValues?qe(o):{}:qe(U),b.array.next({values:{...U}}),b.state.next({values:{...U}})}l={mount:F.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},s.mount=!f.isValid||!!F.keepIsValid||!!F.keepDirtyValues||!t.shouldUnregister&&!mt(U),s.watch=!!t.shouldUnregister,s.keepIsValid=!!F.keepIsValid,s.action=!1,F.keepErrors||(n.errors={}),b.state.next({submitCount:F.keepSubmitCount?n.submitCount:0,isDirty:H?!1:F.keepDirty?n.isDirty:!!(F.keepDefaultValues&&!Wn(S,o)),isSubmitted:F.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:H?{}:F.keepDirtyValues?F.keepDefaultValues&&i?no(o,i):n.dirtyFields:F.keepDefaultValues&&S?no(o,S):F.keepDirty?n.dirtyFields:{},touchedFields:F.keepTouched?n.touchedFields:{},errors:F.keepErrors?n.errors:{},isSubmitSuccessful:F.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:o})},Lf=(S,F)=>Af(tn(S)?S(i):S,{...t.resetOptions,...F}),h1=(S,F={})=>{const R=K(r,S),q=R&&R._f;if(q){const H=q.refs?q.refs[0]:q.ref;H.focus&&setTimeout(()=>{H.focus(),F.shouldSelect&&tn(H.select)&&H.select()})}},m1=S=>{n={...n,...S}},If={control:{register:ve,unregister:X,getFieldState:A,handleSubmit:xn,setError:oe,_subscribe:ue,_runSchema:E,_updateIsValidating:g,_focusError:et,_getWatch:G,_getDirty:W,_setValid:w,_setFieldArray:p,_setDisabledField:Be,_setErrors:$,_getFieldArray:Z,_reset:Af,_resetDefaultValues:()=>tn(t.defaultValues)&&t.defaultValues().then(S=>{Lf(S,t.resetOptions),b.state.next({isLoading:!1})}),_removeUnmounted:V,_disableForm:Gr,_subjects:b,_proxyFormState:f,get _fields(){return r},get _formValues(){return i},get _state(){return s},set _state(S){s=S},get _defaultValues(){return o},get _names(){return l},set _names(S){l=S},get _formState(){return n},get _options(){return t},set _options(S){t={...t,...S}}},subscribe:xe,trigger:P,register:ve,handleSubmit:xn,watch:he,setValue:D,getValues:z,reset:Lf,resetField:p1,clearErrors:ne,unregister:X,setError:oe,setFocus:h1,getFieldState:A};return{...If,formControl:If}}function Ul(e={}){const t=Q.useRef(void 0),n=Q.useRef(void 0),[r,o]=Q.useState({isDirty:!1,isValidating:!1,isLoading:tn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:tn(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:r},e.defaultValues&&!tn(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:s,...l}=P_(e);t.current={...l,formState:r}}const i=t.current.control;return i._options=e,g_(()=>{const s=i._subscribe({formState:i._proxyFormState,callback:()=>o({...i._formState}),reRenderRoot:!0});return o(l=>({...l,isReady:!0})),i._formState.isReady=!0,s},[i]),Q.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),Q.useEffect(()=>{e.mode&&(i._options.mode=e.mode),e.reValidateMode&&(i._options.reValidateMode=e.reValidateMode)},[i,e.mode,e.reValidateMode]),Q.useEffect(()=>{e.errors&&(i._setErrors(e.errors),i._focusError())},[i,e.errors]),Q.useEffect(()=>{e.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,e.shouldUnregister]),Q.useEffect(()=>{if(i._proxyFormState.isDirty){const s=i._getDirty();s!==r.isDirty&&i._subjects.state.next({isDirty:s})}},[i,r.isDirty]),Q.useEffect(()=>{var s;e.values&&!Wn(e.values,n.current)?(i._reset(e.values,{keepFieldsRef:!0,...i._options.resetOptions}),!((s=i._options.resetOptions)===null||s===void 0)&&s.keepIsValid||i._setValid(),n.current=e.values,o(l=>({...l}))):i._resetDefaultValues()},[i,e.values]),Q.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=Q.useMemo(()=>m_(r,i),[i,r]),t.current}const R_=He`
  from { opacity: 0; }
  to   { opacity: 1; }
`,xs=He`
  from { opacity: 0; transform: translateX(-28px); }
  to   { opacity: 1; transform: translateX(0); }
`,O_=He`
  from { opacity: 0; transform: translateX(28px); }
  to   { opacity: 1; transform: translateX(0); }
`,N_=He`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,A_=He`
  from { opacity: 0; transform: scale(1.02); }
  to   { opacity: 1; transform: scale(1); }
`,L_=m.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 55fr 45fr;
  overflow: hidden;

  @media (max-width: 900px) {
    display: block;
    min-height: 100vh;
  }
`,I_=m.section`
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

  animation: ${xs} 0.6s ease both;

  @media (max-width: 900px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[6]};
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    &::after { display: none; }
  }
`,D_=m.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
  }
`,B_=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[20]};
  animation: ${xs} 0.55s 0.05s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({theme:e})=>e.spacing[12]};
    justify-content: center;
  }
`,M_=m.div`
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
`,U_=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary[200]};
  letter-spacing: 0.025em;
`,V_=m.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({theme:e})=>e.spacing[5]};
  max-width: 460px;
  animation: ${xs} 0.55s 0.12s ease both;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.75rem, 7vw, 2.3rem);
    max-width: 320px;
  }
`,W_=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.neutral[500]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0 0 ${({theme:e})=>e.spacing[10]};
  max-width: 360px;
  animation: ${xs} 0.55s 0.2s ease both;

  @media (max-width: 900px) {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    max-width: 280px;
    margin-bottom: ${({theme:e})=>e.spacing[8]};
  }
`,H_=m.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};
  animation: ${xs} 0.55s 0.28s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[6]};
  }
`,Pc=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,Rc=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[400]};
  line-height: 1;
`,Oc=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,q_=m.div`
  position: relative;
  z-index: 3;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[700]};
  animation: ${R_} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`,G_=m.button`
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
    animation: ${N_} 0.55s 0.35s ease both;
    transition:
      transform ${({theme:e})=>e.transitions.base},
      box-shadow ${({theme:e})=>e.transitions.base};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px ${({theme:e})=>e.colors.primary[900]}75;
    }
    &:active { transform: translateY(0); }
  }
`,Y_=m.section`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[16]};
  animation: ${O_} 0.55s 0.1s ease both;

  @media (max-width: 1100px) {
    padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[10]};
  }

  @media (max-width: 900px) {
    display: none;
  }
`,K_=m.div`
  width: 100%;
  max-width: 360px;
`,Q_=m.div`
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
    ${({$open:e})=>e&&ds`
        & > * {
          animation: ${A_} 0.32s 0.05s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}
  }
`,J_=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing[10]};
  flex-shrink: 0;
`,X_=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Z_=m.div`
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
`,ej=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
`,tj=m.button`
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
`,nj=m.div`
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,rj=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.brand.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
`,oj=m.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,ij=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0;
`,sj=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[8]};
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,Zh=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,em=m.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,tm=m.div`
  position: relative;
  display: flex;
  align-items: center;
`,nm=m.input`
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
`,aj=m.button`
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
`,rm=m.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,lj=m.button`
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
`,cj=m.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: _spin 0.7s linear infinite;

  @keyframes _spin { to { transform: rotate(360deg); } }
`,uj=m.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral[100]};
  margin: ${({theme:e})=>e.spacing[8]} 0 ${({theme:e})=>e.spacing[6]};
`,dj=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;function om({onSubmitSuccess:e}){const{login:t}=Hr(),[n,r]=j.useState(!1),[o,i]=j.useState(!1),{register:s,handleSubmit:l,formState:{errors:c}}=Ul({defaultValues:{email:"",password:""}}),u=async({email:d,password:f})=>{i(!0);try{const{mustChangePassword:y}=await t(d,f);e(y)}catch(y){te.error(y.message,{toastId:"login-error"})}finally{i(!1)}};return a.jsxs(a.Fragment,{children:[a.jsxs(nj,{children:[a.jsx(rj,{children:"Área restrita"}),a.jsx(oj,{children:"Bem-vindo de volta"}),a.jsx(ij,{children:"Use as credenciais fornecidas pelo administrador para acessar sua conta."})]}),a.jsxs("form",{onSubmit:l(u),noValidate:!0,children:[a.jsxs(sj,{children:[a.jsxs(Zh,{children:[a.jsx(em,{htmlFor:"email",children:"E-mail"}),a.jsx(tm,{children:a.jsx(nm,{id:"email",type:"email",placeholder:"seu@email.com",autoComplete:"email",$hasError:!!c.email,disabled:o,...s("email",{required:"O e-mail é obrigatório.",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Informe um e-mail válido."}})})}),c.email&&a.jsxs(rm,{children:[a.jsx(de,{size:12}),c.email.message]})]}),a.jsxs(Zh,{children:[a.jsx(em,{htmlFor:"password",children:"Senha"}),a.jsxs(tm,{children:[a.jsx(nm,{id:"password",type:n?"text":"password",placeholder:"••••••••",autoComplete:"current-password",$hasError:!!c.password,$hasToggle:!0,disabled:o,...s("password",{required:"A senha é obrigatória.",minLength:{value:6,message:"Mínimo 6 caracteres."}})}),a.jsx(aj,{type:"button",onClick:()=>r(d=>!d),"aria-label":n?"Ocultar senha":"Mostrar senha",tabIndex:-1,children:n?a.jsx(_x,{size:16}):a.jsx(jx,{size:16})})]}),c.password&&a.jsxs(rm,{children:[a.jsx(de,{size:12}),c.password.message]})]})]}),a.jsx(lj,{type:"submit",disabled:o,$isLoading:o,children:o?a.jsxs(a.Fragment,{children:[a.jsx(cj,{}),"Carregando…"]}):a.jsxs(a.Fragment,{children:[a.jsx(Cx,{size:17}),"Entrar"]})})]}),a.jsx(uj,{}),a.jsx(dj,{children:"Problemas com o acesso? Fale com o administrador do sistema."})]})}function fj(){const e=pr(),[t,n]=j.useState(!1);j.useEffect(()=>(document.body.style.overflow=t?"hidden":"",()=>{document.body.style.overflow=""}),[t]),j.useEffect(()=>{const o=i=>{i.key==="Escape"&&n(!1)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[]);const r=o=>{o?(n(!1),setTimeout(()=>e("/alterar-senha",{replace:!0}),180)):e("/dashboard",{replace:!0})};return a.jsxs(L_,{children:[a.jsxs(I_,{children:[a.jsxs(D_,{children:[a.jsxs(B_,{children:[a.jsx(M_,{children:"BG"}),a.jsx(U_,{children:"BG Representações"})]}),a.jsxs(V_,{children:["Gestão de ",a.jsx("em",{children:"benefícios"})," com"," ","precisão corporativa."]}),a.jsx(W_,{children:"Plataforma integrada para gerenciamento de clientes, vendas e cartões de vale alimentação — com rastreabilidade completa e auditoria em cada etapa."}),a.jsxs(H_,{children:[a.jsxs(Pc,{children:[a.jsx(Rc,{children:"100%"}),a.jsx(Oc,{children:"Auditado"})]}),a.jsxs(Pc,{children:[a.jsx(Rc,{children:"JWT"}),a.jsx(Oc,{children:"Segurança"})]}),a.jsxs(Pc,{children:[a.jsx(Rc,{children:"3 níveis"}),a.jsx(Oc,{children:"de acesso"})]})]}),a.jsxs(G_,{type:"button",onClick:()=>n(!0),"aria-label":"Abrir formulário de login",children:["Acessar Sistema",a.jsx(kx,{size:17})]})]}),a.jsxs(q_,{children:["© ",new Date().getFullYear()," BG Representações — Uso interno exclusivo."]})]}),a.jsx(Y_,{children:a.jsx(K_,{children:a.jsx(om,{onSubmitSuccess:r})})}),a.jsxs(Q_,{$open:t,role:"dialog","aria-modal":"true","aria-label":"Formulário de login",children:[a.jsxs(J_,{children:[a.jsxs(X_,{children:[a.jsx(Z_,{children:"BG"}),a.jsx(ej,{children:"BG Representações"})]}),a.jsx(tj,{type:"button",onClick:()=>n(!1),"aria-label":"Fechar formulário",children:a.jsx(Bl,{size:18})})]}),a.jsx(om,{onSubmitSuccess:r})]})]})}const pj=He`
  from { opacity: 0; }
  to   { opacity: 1; }
`,hj=He`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,mj=He`
  from { opacity: 0; transform: translateX(32px); }
  to   { opacity: 1; transform: translateX(0); }
`,Vl=He`
  from { opacity: 0; transform: translateX(-32px); }
  to   { opacity: 1; transform: translateX(0); }
`;He`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.03); }
`;const gj=m.div`
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
`,yj=m.section`
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
`,xj=m.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (max-width: 900px) {
    align-items: center;
  }
`,vj=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[16]};
  animation: ${Vl} 0.6s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({theme:e})=>e.spacing[10]};
    justify-content: center;
  }
`,$j=m.div`
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
`,bj=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary[200]};
  letter-spacing: 0.02em;
`,wj=m.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({theme:e})=>e.spacing[6]};
  animation: ${Vl} 0.6s 0.1s ease both;
  max-width: 480px;

  em {
    font-style: normal;
    color: ${({theme:e})=>e.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.8rem, 7vw, 2.4rem);
    max-width: 340px;
  }
`,Sj=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.neutral[400]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  margin: 0 0 ${({theme:e})=>e.spacing[10]};
  max-width: 380px;
  animation: ${Vl} 0.6s 0.2s ease both;

  @media (max-width: 900px) {
    max-width: 300px;
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }
`,kj=m.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};
  animation: ${Vl} 0.6s 0.3s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[6]};
  }

  @media (max-width: 380px) {
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,Nc=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,Ac=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.primary[300]};
  line-height: 1;
`,Lc=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[500]};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`,_j=m.div`
  position: relative;
  z-index: 3;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[600]};
  animation: ${pj} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`,jj=m.button`
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
  animation: ${hj} 0.6s 0.4s ease both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(180, 90, 20, 0.55);
  }

  @media (max-width: 900px) {
    display: inline-flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,Ej=m.section`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[10]};
  animation: ${mj} 0.5s 0.15s ease both;

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
`,Cj=m.div`
  width: 100%;
  max-width: 380px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`,Fj=m.button`
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
`,Tj=m.div`
  margin-bottom: ${({theme:e})=>e.spacing[10]};
`,zj=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.brand.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[3]};
`,Pj=m.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,Rj=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,Oj=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
`,im=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,sm=m.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,am=m.div`
  position: relative;
  display: flex;
  align-items: center;
`,od=m.input`
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
  ${({$hasToggle:e,theme:t})=>e&&ds`
    padding-right: ${t.spacing[10]};
  `}
`;m.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: ${({theme:e})=>e.brand.primary};
  transition: width ${({theme:e})=>e.transitions.slow};

  ${od}:focus ~ & {
    width: 100%;
  }
`;const Nj=m.button`
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
`,lm=m.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,Aj=m.button`
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
`,Lj=m.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;

  @keyframes spin { to { transform: rotate(360deg); } }
`,Ij=m.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[6]} 0;
`,Dj=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,Bj=m.div`
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
`,Mj=m.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    width: 40px;
    height: 4px;
    background-color: ${({theme:e})=>e.colors.neutral[300]};
    border-radius: ${({theme:e})=>e.borderRadius.full};
    margin: 0 auto ${({theme:e})=>e.spacing[8]};
  }
`;function Uj(){const{login:e}=Hr(),t=pr(),[n,r]=j.useState(!1),[o,i]=j.useState(!1),[s,l]=j.useState(!1),{register:c,handleSubmit:u,formState:{errors:d}}=Ul({defaultValues:{email:"",password:""}}),f=()=>{r(!0),document.body.style.overflow="hidden"},y=()=>{r(!1),document.body.style.overflow=""},b=async({email:x,password:v})=>{l(!0);try{const{mustChangePassword:w}=await e(x,v);document.body.style.overflow="",w?t("/alterar-senha",{replace:!0}):t("/dashboard",{replace:!0})}catch(w){te.error(w.message,{toastId:"login-error"})}finally{l(!1)}};return a.jsxs(gj,{children:[a.jsxs(yj,{children:[a.jsxs(xj,{children:[a.jsxs(vj,{children:[a.jsx($j,{children:"BG"}),a.jsx(bj,{children:"BG Representações"})]}),a.jsxs(wj,{children:["Gestão de ",a.jsx("em",{children:"benefícios"})," com"," ","precisão corporativa."]}),a.jsx(Sj,{children:"Plataforma integrada para gerenciamento de clientes, vendas e cartões de vale alimentação — com rastreabilidade completa e auditoria em cada etapa."}),a.jsxs(kj,{children:[a.jsxs(Nc,{children:[a.jsx(Ac,{children:"100%"}),a.jsx(Lc,{children:"Auditado"})]}),a.jsxs(Nc,{children:[a.jsx(Ac,{children:"JWT"}),a.jsx(Lc,{children:"Segurança"})]}),a.jsxs(Nc,{children:[a.jsx(Ac,{children:"3 níveis"}),a.jsx(Lc,{children:"de acesso"})]})]}),a.jsxs(jj,{type:"button",onClick:f,children:["Acessar o sistema",a.jsx(kx,{size:17})]})]}),a.jsxs(_j,{children:["© ",new Date().getFullYear()," BG Representações — Uso interno exclusivo."]})]}),a.jsx(Bj,{$open:n,onClick:y}),a.jsxs(Ej,{$open:n,children:[a.jsx(Mj,{}),a.jsx(Fj,{type:"button",onClick:y,"aria-label":"Fechar",children:a.jsx(Bl,{size:18})}),a.jsxs(Cj,{children:[a.jsxs(Tj,{children:[a.jsx(zj,{children:"Área restrita"}),a.jsx(Pj,{children:"Bem-vindo de volta"}),a.jsx(Rj,{children:"Use as credenciais fornecidas pelo administrador para acessar sua conta."})]}),a.jsxs("form",{onSubmit:u(b),noValidate:!0,children:[a.jsxs(Oj,{children:[a.jsxs(im,{children:[a.jsx(sm,{htmlFor:"email",children:"E-mail"}),a.jsx(am,{children:a.jsx(od,{id:"email",type:"email",placeholder:"seu@email.com",autoComplete:"email",$hasError:!!d.email,disabled:s,...c("email",{required:"O e-mail é obrigatório.",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Informe um e-mail válido."}})})}),d.email&&a.jsxs(lm,{children:[a.jsx(de,{size:12}),d.email.message]})]}),a.jsxs(im,{children:[a.jsx(sm,{htmlFor:"password",children:"Senha"}),a.jsxs(am,{children:[a.jsx(od,{id:"password",type:o?"text":"password",placeholder:"••••••••",autoComplete:"current-password",$hasError:!!d.password,$hasToggle:!0,disabled:s,...c("password",{required:"A senha é obrigatória.",minLength:{value:6,message:"Mínimo 6 caracteres."}})}),a.jsx(Nj,{type:"button",onClick:()=>i(x=>!x),"aria-label":o?"Ocultar senha":"Mostrar senha",tabIndex:-1,children:o?a.jsx(_x,{size:16}):a.jsx(jx,{size:16})})]}),d.password&&a.jsxs(lm,{children:[a.jsx(de,{size:12}),d.password.message]})]})]}),a.jsx(Aj,{type:"submit",disabled:s,$isLoading:s,children:s?a.jsxs(a.Fragment,{children:[a.jsx(Lj,{}),"Carregando…"]}):a.jsxs(a.Fragment,{children:[a.jsx(Cx,{size:17}),"Entrar"]})})]}),a.jsx(Ij,{}),a.jsx(Dj,{children:"Problemas com o acesso? Fale com o administrador do sistema."})]})]})]})}const Ef=He`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Vj=m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  animation: ${Ef} 0.35s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Wj=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,Hj=m.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,qj=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,Gj=m.button`
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
`,Yj=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  animation: ${Ef} 0.35s 0.05s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Kj=m.div`
  position: relative;
  flex: 1;
  max-width: 360px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,Qj=m.span`
  position: absolute;
  left: ${({theme:e})=>e.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.text.muted};
  display: flex;
  align-items: center;
  pointer-events: none;
`,Jj=m.input`
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
`,Xj=m.select`
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
`,Zj=m.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  animation: ${Ef} 0.35s 0.1s ease both;
`,eE=m.table`
  width: 100%;
  border-collapse: collapse;
`,tE=m.thead`
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,ni=m.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  text-align: left;
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
  white-space: nowrap;
`,nE=m.tbody``,rE=m.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  transition: background-color ${({theme:e})=>e.transitions.fast};
  cursor: pointer;

  &:last-child { border-bottom: none; }

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral[50]};
  }
`,id=m.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.primary};
  vertical-align: middle;
`,Ic=m(id)`
  color: ${({theme:e})=>e.text.secondary};
`,cm={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},oE=m.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=cm[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=cm[e])==null?void 0:t.color)??"#374151"}};
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
`,iE={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},sE=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[8]};
  gap: ${({theme:e})=>e.spacing[3]};
  text-align: center;
`,aE=m.div`
  color: ${({theme:e})=>e.colors.neutral[300]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,lE=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,cE=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
  max-width: 300px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,uE=m.tr`
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
  &:last-child { border-bottom: none; }
`,ri=m.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
`,dE=He`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,oi=m.div`
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
  animation: ${dE} 1.4s ease infinite;
`,fE=m.div`
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
`,pE=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
`,hE=m.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ms=m.button`
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
`,mE=15,gE=({status:e})=>a.jsx(oE,{$status:e,children:iE[e]??e});function yE(){return Array.from({length:5}).map((e,t)=>a.jsxs(uE,{children:[a.jsx(ri,{children:a.jsx(oi,{$w:"60%"})}),a.jsx(ri,{children:a.jsx(oi,{$w:"80%"})}),a.jsx(ri,{children:a.jsx(oi,{$w:"50%"})}),a.jsx(ri,{children:a.jsx(oi,{$w:"70%"})}),a.jsx(ri,{children:a.jsx(oi,{$w:"40%"})})]},t))}const um=(e="")=>{const t=e.slice(0,14);return t.length<=2?t:t.length<=5?`${t.slice(0,2)}.${t.slice(2)}`:t.length<=8?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5)}`:t.length<=12?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8)}`:`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8,12)}-${t.slice(12)}`},xE=(e="")=>/^[\d.\-/]+$/.test(e)&&/\d/.test(e),vE=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",$E=e=>({food:"Alimentação",meal:"Refeição",both:"Ambos"})[e]??e??"—";function bE(){const e=pr(),{hasRole:t}=Hr(),[n,r]=j.useState([]),[o,i]=j.useState({total:0,totalPages:1,currentPage:1}),[s,l]=j.useState(!0),[c,u]=j.useState(""),[d,f]=j.useState(1),[y,b]=j.useState(""),[x,v]=j.useState(""),w=j.useRef(null),g=j.useCallback(async()=>{var k,C,_;l(!0);try{const E=new URLSearchParams({page:d,limit:mE});x&&E.set("search",x),c&&E.set("overall_status",c);const{data:N}=await De.get(`/clients?${E.toString()}`);r(N.data??[]),i({total:((k=N.pagination)==null?void 0:k.total)??0,totalPages:((C=N.pagination)==null?void 0:C.totalPages)??1,currentPage:((_=N.pagination)==null?void 0:_.currentPage)??1})}catch(E){te.error(Pn(E,"Erro ao carregar clientes.")),r([])}finally{l(!1)}},[d,x,c]);j.useEffect(()=>{g()},[g]);const p=k=>{const C=k.target.value,_=C.replace(/\D/g,"");if(xE(C)){const E=um(_);b(E),h(E)}else C===""?(b(""),h("")):(b(C),h(C))},h=k=>{w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{v(k),f(1)},400)},$=k=>{u(k.target.value),f(1)};return a.jsxs(a.Fragment,{children:[a.jsxs(Vj,{children:[a.jsxs(Wj,{children:[a.jsx(Hj,{children:"Clientes"}),a.jsx(qj,{children:o.total>0?`${o.total} cliente${o.total!==1?"s":""} cadastrado${o.total!==1?"s":""}`:"Nenhum cliente cadastrado ainda"})]}),t("admin","user")&&a.jsxs(Gj,{type:"button",onClick:()=>e("/onboarding"),children:[a.jsx(_2,{size:16}),"Novo Cliente"]})]}),a.jsxs(Yj,{children:[a.jsxs(Kj,{children:[a.jsxs(Qj,{children:[" ",a.jsx(S2,{size:15})]}),a.jsx(Jj,{type:"text",placeholder:"Buscar por Razão Social ou CNPJ…",style:{paddingLeft:"30px"},value:y,onChange:p})]}),a.jsxs(Xj,{value:c,onChange:$,children:[a.jsx("option",{value:"",children:"Todos os status"}),a.jsx("option",{value:"pending",children:"Pendente"}),a.jsx("option",{value:"analysis",children:"Em análise"}),a.jsx("option",{value:"approved",children:"Aprovado"})]})]}),a.jsxs(Zj,{children:[a.jsxs(eE,{children:[a.jsx(tE,{children:a.jsxs("tr",{children:[a.jsx(ni,{children:"Razão Social"}),a.jsx(ni,{children:"CNPJ"}),a.jsx(ni,{children:"Benefício"}),a.jsx(ni,{children:"Status"}),a.jsx(ni,{children:"Cadastro"})]})}),a.jsxs(nE,{children:[s&&a.jsx(yE,{}),!s&&n.map(k=>a.jsxs(rE,{onClick:()=>e(`/clientes/${k.id}`),title:"Ver detalhes",children:[a.jsx(id,{children:k.corporate_name}),a.jsx(Ic,{children:um(k.cnpj)??"—"}),a.jsx(Ic,{children:$E(k.benefit_type)}),a.jsx(id,{children:a.jsx(gE,{status:k.overall_status})}),a.jsx(Ic,{children:vE(k.createdAt)})]},k.id)),!s&&n.length===0&&a.jsx("tr",{children:a.jsx("td",{colSpan:5,children:a.jsxs(sE,{children:[a.jsx(aE,{children:a.jsx(Px,{size:40})}),a.jsx(lE,{children:"Nenhum cliente encontrado"}),a.jsx(cE,{children:y||c?"Tente ajustar os filtros para ver mais resultados.":'Clique em "Novo Cliente" para iniciar o cadastro.'})]})})})]})]}),!s&&o.totalPages>1&&a.jsxs(fE,{children:[a.jsxs(pE,{children:["Página ",o.currentPage," de ",o.totalPages," ","· ",o.total," registros"]}),a.jsxs(hE,{children:[a.jsx(Ms,{type:"button",onClick:()=>f(k=>Math.max(1,k-1)),disabled:d<=1,"aria-label":"Página anterior",children:a.jsx(f2,{size:15})}),Array.from({length:o.totalPages},(k,C)=>C+1).filter(k=>k===1||k===o.totalPages||Math.abs(k-d)<=2).reduce((k,C,_,E)=>(_>0&&C-E[_-1]>1&&k.push("…"),k.push(C),k),[]).map((k,C)=>k==="…"?a.jsx(Ms,{disabled:!0,as:"span",children:"…"},`ellipsis-${C}`):a.jsx(Ms,{type:"button",$active:k===d,onClick:()=>f(k),children:k},k)),a.jsx(Ms,{type:"button",onClick:()=>f(k=>Math.min(o.totalPages,k+1)),disabled:d>=o.totalPages,"aria-label":"Próxima página",children:a.jsx(p2,{size:15})})]})]})]})]})}const wE=He`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,SE=He`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,Mx=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  animation: ${wE} 0.35s ease both;
`,Ux=m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,Vx=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,kE=m.button`
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
`,Wx=m.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,_E=m.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,jE=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  letter-spacing: 0.04em;
`,EE=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`,xr=m.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Jr=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Xr=m.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,Zr=m.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,Hx=m.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,yi=m.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Qe=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`,tt=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,rt=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,CE=m(rt)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,dm={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},fm={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},pm=m.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=dm[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=dm[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`,FE=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,TE=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`,zE=m.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,PE=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,RE=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;const OE=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,NE=m.div`
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
`,AE=m.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,LE=m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,IE=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,DE=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,BE=m.button`
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
`,ME=m.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,Dc=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,Bc=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,eo=m.div`
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
  animation: ${SE} 1.4s ease infinite;
`,UE=m(xr)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,VE=m.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[4]} 0;
`,WE=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length!==14?e:t.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5")},HE=e=>{if(!e)return"—";const t=e.replace(/\D/g,"");return t.length===11?t.replace(/^(\d{2})(\d{5})(\d{4})$/,"($1) $2-$3"):t.length===10?t.replace(/^(\d{2})(\d{4})(\d{4})$/,"($1) $2-$3"):e},hm=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",qE=e=>e==null?"—":Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),GE={food:"Vale Alimentação",meal:"Vale Refeição",both:"Alimentação + Refeição"},YE={company_document:"Documento da Empresa",proof_of_address:"Comprovante de Endereço",bank_account_proof:"Comprovante Bancário",card_machine_proof:"Comprovante de Maquininha"};function KE(){return a.jsxs(Mx,{children:[a.jsx(Ux,{children:a.jsxs(Vx,{children:[a.jsx(eo,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),a.jsxs(Wx,{children:[a.jsx(eo,{$w:"220px",$h:"28px"}),a.jsx(eo,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]})}),a.jsx(Hx,{children:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:a.jsxs(UE,{children:[a.jsx(eo,{$w:"40%",$h:"18px"}),a.jsx(VE,{}),a.jsx(yi,{children:Array.from({length:6}).map((e,t)=>a.jsxs(Qe,{children:[a.jsx(eo,{$w:"50%",$h:"11px"}),a.jsx(eo,{$w:"80%",$h:"16px",style:{marginTop:"4px"}})]},t))})]})})})]})}const QE=[{value:"pending",label:"Pendente"},{value:"analysis",label:"Em análise"},{value:"approved",label:"Aprovado"}],mm={approved:{bg:"#d1fae5",color:"#065f46"},analysis:{bg:"#dbeafe",color:"#1e40af"},pending:{bg:"#fef3c7",color:"#92400e"}};function JE({clientFlagId:e,currentStatus:t,onUpdated:n,onOptimisticUpdate:r}){const[o,i]=j.useState(!1),[s,l]=j.useState(t),c=mm[s]??mm.pending;j.useEffect(()=>{l(t)},[t]);const u=async d=>{const f=d.target.value,y=s;if(f!==y){l(f),r(e,f),i(!0);try{await De.patch(`/client-flags/${e}/status`,{status:f}),te.success("Status da bandeira atualizado."),n()}catch(b){l(y),r(e,y),te.error(Pn(b,"Erro ao atualizar status."))}finally{i(!1)}}};return a.jsx("select",{value:s,onChange:u,disabled:o,style:{height:"28px",padding:"0 28px 0 8px",border:"1.5px solid #e4d9cf",borderRadius:"99px",fontFamily:"inherit",fontSize:"11px",fontWeight:600,backgroundColor:c.bg,color:c.color,cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 8px center"},children:QE.map(d=>a.jsx("option",{value:d.value,children:d.label},d.value))})}function XE(){var ue,xe;const{id:e}=f0(),t=pr(),{isAdmin:n,isPartner:r,isUser:o,user:i}=Hr(),[s,l]=j.useState(null),[c,u]=j.useState(!0),[d,f]=j.useState(null),y=j.useCallback(async()=>{try{const{data:X}=await De.get(`/clients/${e}`);console.log(X.data),l(X.data)}catch(X){te.error(Pn(X,"Erro ao carregar dados.")),t("/clientes",{replace:!0})}finally{u(!1)}},[e,t]);j.useEffect(()=>{y()},[y]);const b=j.useCallback((X,Be)=>{l(ve=>ve&&{...ve,clientFlags:ve.clientFlags.map(et=>et.id===X?{...et,status:Be}:et)})},[]),x=j.useCallback(async()=>{try{const{data:X}=await De.get(`/clients/${e}`);l(X.data)}catch{}},[e]),v=async X=>{f(X.id);try{const Be=await De.get(`/documents/${X.id}/download`,{responseType:"blob"}),ve=URL.createObjectURL(Be.data),et=document.createElement("a");et.href=ve,et.download=X.original_name??`documento-${X.id}`,document.body.appendChild(et),et.click(),et.remove(),URL.revokeObjectURL(ve)}catch(Be){te.error(Pn(Be,"Erro no download."))}finally{f(null)}};if(c)return a.jsx(KE,{});if(!s)return null;const{corporate_name:w,trade_name:g,cnpj:p,state_registration:h,phone:$,email:k,protocol:C,benefit_type:_,overall_status:E,notes:N,createdAt:L,address_street:V,address_number:W,address_complement:G,address_neighborhood:Z,address_city:re,address_state:M,address_zip:D,clientFlags:O=[],documents:B=[],bankAccounts:P=[]}=s,z=!r&&(n||o&&s.created_by===(i==null?void 0:i.id)),A=!r&&(n||o&&s.created_by===(i==null?void 0:i.id)),ne=V||re,oe=[V,W,G].filter(Boolean).join(", "),he=[Z,re,M].filter(Boolean).join(" — ");return a.jsxs(Mx,{children:[a.jsxs(Ux,{children:[a.jsxs(Vx,{children:[a.jsxs(kE,{onClick:()=>t("/clientes"),title:"Voltar",children:[a.jsx(xf,{size:18})," Voltar"]}),a.jsxs(Wx,{children:[a.jsx(_E,{children:g||w}),a.jsxs(jE,{children:["Protocolo #",C]})]})]}),a.jsxs(EE,{children:[z&&a.jsxs("button",{onClick:()=>t(`/clientes/${e}/editar`),style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 14px",border:"1.5px solid #e4d9cf",borderRadius:"8px",background:"transparent",fontSize:"13px",fontWeight:500,color:"#7a6455",cursor:"pointer"},children:[a.jsx(w2,{size:14})," Editar"]}),a.jsx(pm,{$status:E,children:fm[E]??E})]})]}),a.jsxs(Hx,{children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs(xr,{children:[a.jsxs(Jr,{children:[a.jsx(Xr,{children:a.jsx(vf,{size:18})}),a.jsx(Zr,{children:"Dados da Empresa"})]}),a.jsxs(yi,{children:[a.jsxs(Qe,{children:[a.jsx(tt,{children:"Razão Social"}),a.jsx(rt,{children:w||"—"})]}),!r&&a.jsxs(Qe,{children:[a.jsx(tt,{children:"Nome Fantasia"}),a.jsx(rt,{children:g||"—"})]}),a.jsxs(Qe,{children:[a.jsx(tt,{children:"CNPJ"}),a.jsx(rt,{children:WE(p)})]}),!r&&a.jsxs(Qe,{children:[a.jsx(tt,{children:"Inscrição Estadual"}),a.jsx(rt,{children:h||"—"})]}),a.jsxs(Qe,{children:[a.jsx(tt,{children:"Telefone"}),a.jsx(rt,{children:HE($)})]}),!r&&a.jsxs(Qe,{children:[a.jsx(tt,{children:"E-mail"}),a.jsx(rt,{children:k||"—"})]}),a.jsxs(Qe,{children:[a.jsx(tt,{children:"Tipo de Benefício"}),a.jsx(rt,{children:GE[_]??_??"—"})]}),a.jsxs(Qe,{children:[a.jsx(tt,{children:"Cadastrado em"}),a.jsx(rt,{children:hm(L)})]}),!r&&N&&a.jsxs(Qe,{$span:!0,children:[a.jsx(tt,{children:"Observações Internas"}),a.jsx(CE,{children:N})]})]})]}),a.jsxs(xr,{children:[a.jsxs(Jr,{children:[a.jsx(Xr,{children:a.jsx(bf,{size:18})}),a.jsx(Zr,{children:"Endereço"})]}),ne?a.jsxs(yi,{$cols:2,children:[a.jsxs(Qe,{$span:!0,children:[a.jsx(tt,{children:"Logradouro"}),a.jsx(rt,{children:oe||"—"})]}),a.jsxs(Qe,{children:[a.jsx(tt,{children:"Bairro / Cidade / UF"}),a.jsx(rt,{children:he||"—"})]}),a.jsxs(Qe,{children:[a.jsx(tt,{children:"CEP"}),a.jsx(rt,{children:D||"—"})]})]}):a.jsx(Dc,{children:a.jsx(Bc,{children:"Endereço não informado."})})]}),!r&&a.jsxs(xr,{children:[a.jsxs(Jr,{children:[a.jsx(Xr,{children:a.jsx(rl,{size:18})}),a.jsx(Zr,{children:"Documentos"})]}),B.length>0?a.jsx(OE,{children:B.map(X=>a.jsxs(NE,{children:[a.jsx(AE,{children:a.jsx(rl,{size:16})}),a.jsxs(LE,{children:[a.jsx(IE,{children:X.original_name||"Documento"}),a.jsx(DE,{children:YE[X.document_type]??X.document_type})]}),a.jsx(BE,{onClick:()=>v(X),disabled:d===X.id,children:d===X.id?a.jsx(v2,{size:14,className:"animate-spin"}):a.jsx(g2,{size:14})})]},X.id))}):a.jsx(Dc,{children:a.jsx(Bc,{children:"Sem documentos."})})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsxs(xr,{children:[a.jsxs(Jr,{children:[a.jsx(Xr,{children:a.jsx(Ex,{size:18})}),a.jsx(Zr,{children:"Bandeiras"})]}),a.jsx(FE,{children:O.map(X=>{var Be;return a.jsxs(TE,{children:[a.jsxs(zE,{children:[a.jsx(PE,{children:((Be=X.flag)==null?void 0:Be.name)||"Bandeira"}),a.jsx(RE,{children:X.origin})]}),A?a.jsx(JE,{clientFlagId:X.id,currentStatus:X.status,onUpdated:x,onOptimisticUpdate:b}):a.jsx(pm,{$status:X.status,style:{fontSize:"10px",padding:"2px 8px"},children:fm[X.status]??X.status})]},X.id)})})]}),!r&&a.jsxs(xr,{children:[a.jsxs(Jr,{children:[a.jsx(Xr,{children:a.jsx($f,{size:18})}),a.jsx(Zr,{children:"Dados Bancários"})]}),P.length>0?P.map(X=>a.jsx(ME,{children:a.jsxs(yi,{$cols:1,children:[a.jsxs(Qe,{children:[a.jsx(tt,{children:"Banco"}),a.jsx(rt,{children:X.bank_name})]}),a.jsxs(Qe,{children:[a.jsx(tt,{children:"Agência/Conta"}),a.jsxs(rt,{children:[X.agency,X.agency_digit?`-${X.agency_digit}`:""," / ",X.account,X.account_digit?`-${X.account_digit}`:""]})]})]})},X.id)):a.jsx(Dc,{children:a.jsx(Bc,{children:"Sem dados bancários."})})]}),s.sales&&s.sales.length>0&&a.jsxs(xr,{children:[a.jsxs(Jr,{children:[a.jsx(Xr,{children:a.jsx(m2,{size:18})}),a.jsx(Zr,{children:"Plano Contratado"})]}),a.jsxs(yi,{$cols:1,children:[a.jsxs(Qe,{children:[a.jsx(tt,{children:"Nome do Plano"}),a.jsx(rt,{children:((ue=s.sales[0])==null?void 0:ue.plan_name)||"—"})]}),a.jsxs(Qe,{children:[a.jsx(tt,{children:"Valor"}),a.jsx(rt,{children:qE((xe=s.sales[0])==null?void 0:xe.total_value)})]}),a.jsxs(Qe,{children:[a.jsx(tt,{children:"Data da Venda"}),a.jsx(rt,{children:hm(s.sales[0].createdAt)})]})]})]})]})]}),a.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } } .animate-spin { animation: spin 1s linear infinite; }"})]})}const gm=(e,t,n)=>{if(e&&"reportValidity"in e){const r=K(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},qx=(e,t)=>{for(const n in t.fields){const r=t.fields[n];r&&r.ref&&"reportValidity"in r.ref?gm(r.ref,n,e):r&&r.refs&&r.refs.forEach(o=>gm(o,n,e))}},ZE=(e,t)=>{t.shouldUseNativeValidation&&qx(e,t);const n={};for(const r in e){const o=K(t.fields,r),i=Object.assign(e[r]||{},{ref:o&&o.ref});if(eC(t.names||Object.keys(e),r)){const s=Object.assign({},K(n,r));$e(s,"root",i),$e(n,r,s)}else $e(n,r,i)}return n},eC=(e,t)=>{const n=ym(t);return e.some(r=>ym(r).match(`^${n}\\.\\d+`))};function ym(e){return e.replace(/\]|\[/g,"")}function Gx(e,t,n){return n===void 0&&(n={}),function(r,o,i){try{return Promise.resolve(function(s,l){try{var c=(t!=null&&t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:o}))).then(function(u){return i.shouldUseNativeValidation&&qx({},i),{values:n.raw?Object.assign({},r):u,errors:{}}}))}catch(u){return l(u)}return c&&c.then?c.then(void 0,l):c}(0,function(s){if(!s.inner)throw s;return{values:{},errors:ZE((l=s,c=!i.shouldUseNativeValidation&&i.criteriaMode==="all",(l.inner||[]).reduce(function(u,d){if(u[d.path]||(u[d.path]={message:d.message,type:d.type}),c){var f=u[d.path].types,y=f&&f[d.type];u[d.path]=Ox(d.path,c,u,d.type,y?[].concat(y,d.message):d.message)}return u},{})),i)};var l,c}))}catch(s){return Promise.reject(s)}}}function Ho(e){this._maxSize=e,this.clear()}Ho.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ho.prototype.get=function(e){return this._values[e]};Ho.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var tC=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Yx=/^\d+$/,nC=/^\d/,rC=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,oC=/^\s*(['"]?)(.*?)(\1)\s*$/,Cf=512,xm=new Ho(Cf);new Ho(Cf);var vm=new Ho(Cf),Pr={split:sd,normalizePath:$m,getter:function(e,t){var n=$m(e);return vm.get(e)||vm.set(e,function(o){for(var i=0,s=n.length;i<s;)if(o!=null||!t)o=o[n[i++]];else return;return o})},join:function(e){return e.reduce(function(t,n){return t+(Ff(n)||Yx.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){iC(Array.isArray(e)?e:sd(e),t,n)}};function $m(e){return xm.get(e)||xm.set(e,sd(e).map(function(t){return t.replace(oC,"$2")}))}function sd(e){return e.match(tC)||[""]}function iC(e,t,n){var r=e.length,o,i,s,l;for(i=0;i<r;i++)o=e[i],o&&(lC(o)&&(o='"'+o+'"'),l=Ff(o),s=!l&&/^\d+$/.test(o),t.call(n,o,l,s,i,e))}function Ff(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function sC(e){return e.match(nC)&&!e.match(Yx)}function aC(e){return rC.test(e)}function lC(e){return!Ff(e)&&(sC(e)||aC(e))}const cC=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Kx=e=>e.match(cC)||[],uC=(e,t)=>Kx(e).join(t).toLowerCase(),dC=e=>Kx(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),fC=e=>uC(e,"_");var Mc={camelCase:dC,snakeCase:fC},Tf={exports:{}};Tf.exports=function(e){return Qx(pC(e),e)};Tf.exports.array=Qx;function Qx(e,t){var n=e.length,r=new Array(n),o={},i=n,s=hC(t),l=mC(e);for(t.forEach(function(u){if(!l.has(u[0])||!l.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)o[i]||c(e[i],i,new Set);return r;function c(u,d,f){if(f.has(u)){var y;try{y=", node was:"+JSON.stringify(u)}catch{y=""}throw new Error("Cyclic dependency"+y)}if(!l.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!o[d]){o[d]=!0;var b=s.get(u)||new Set;if(b=Array.from(b),d=b.length){f.add(u);do{var x=b[--d];c(x,l.get(x),f)}while(d);f.delete(u)}r[--n]=u}}}function pC(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var o=e[n];t.add(o[0]),t.add(o[1])}return Array.from(t)}function hC(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var o=e[n];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}function mC(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var gC=Tf.exports;const yC=qm(gC),xC=Object.prototype.toString,vC=Error.prototype.toString,$C=RegExp.prototype.toString,bC=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",wC=/^Symbol\((.*)\)(.*)$/;function SC(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function bm(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return SC(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return bC.call(e).replace(wC,"Symbol($1)");const r=xC.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+vC.call(e)+"]":r==="RegExp"?$C.call(e):null}function sr(e,t){let n=bm(e,t);return n!==null?n:JSON.stringify(e,function(r,o){let i=bm(this[r],t);return i!==null?i:o},2)}function Jx(e){return e==null?[]:[].concat(e)}let Xx,Zx,e1,kC=/\$\{\s*(\w+)\s*\}/g;Xx=Symbol.toStringTag;class wm{constructor(t,n,r,o){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[Xx]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=o,this.errors=[],this.inner=[],Jx(t).forEach(i=>{if(yt.isError(i)){this.errors.push(...i.errors);const s=i.inner.length?i.inner:[i];this.inner.push(...s)}else this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Zx=Symbol.hasInstance;e1=Symbol.toStringTag;class yt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return n=Object.assign({},n,{path:r,originalPath:n.path}),typeof t=="string"?t.replace(kC,(o,i)=>sr(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,o,i){const s=new wm(t,n,r,o);if(i)return s;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[e1]="Error",this.name=s.name,this.message=s.message,this.type=s.type,this.value=s.value,this.path=s.path,this.errors=s.errors,this.inner=s.inner,Error.captureStackTrace&&Error.captureStackTrace(this,yt)}static[Zx](t){return wm[Symbol.hasInstance](t)||super[Symbol.hasInstance](t)}}let fn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const o=r!=null&&r!==n?` (cast from the value \`${sr(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${sr(n,!0)}\``+o:`${e} must match the configured type. The validated value was: \`${sr(n,!0)}\``+o}},wt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},_C={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},ad={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},jC={isValue:"${path} field must be ${value}"},va={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},EC={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},CC={notType:e=>{const{path:t,value:n,spec:r}=e,o=r.types.length;if(Array.isArray(n)){if(n.length<o)return`${t} tuple value has too few items, expected a length of ${o} but got ${n.length} for value: \`${sr(n,!0)}\``;if(n.length>o)return`${t} tuple value has too many items, expected a length of ${o} but got ${n.length} for value: \`${sr(n,!0)}\``}return yt.formatError(fn.notType,e)}};Object.assign(Object.create(null),{mixed:fn,string:wt,number:_C,date:ad,object:va,array:EC,boolean:jC,tuple:CC});const zf=e=>e&&e.__isYupSchema__;class sl{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:o,otherwise:i}=n,s=typeof r=="function"?r:(...l)=>l.every(c=>c===r);return new sl(t,(l,c)=>{var u;let d=s(...l)?o:i;return(u=d==null?void 0:d(c))!=null?u:c})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),o=this.fn(r,t,n);if(o===void 0||o===t)return t;if(!zf(o))throw new TypeError("conditions must return a schema object");return o.resolve(n)}}const Us={context:"$",value:"."};class qr{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Us.context,this.isValue=this.key[0]===Us.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Us.context:this.isValue?Us.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Pr.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let o=this.isContext?r:this.isValue?t:n;return this.getter&&(o=this.getter(o||{})),this.map&&(o=this.map(o)),o}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}qr.prototype.__isYupRef=!0;const Er=e=>e==null;function to(e){function t({value:n,path:r="",options:o,originalValue:i,schema:s},l,c){const{name:u,test:d,params:f,message:y,skipAbsent:b}=e;let{parent:x,context:v,abortEarly:w=s.spec.abortEarly,disableStackTrace:g=s.spec.disableStackTrace}=o;const p={value:n,parent:x,context:v};function h(V={}){const W=t1(Object.assign({value:n,originalValue:i,label:s.spec.label,path:V.path||r,spec:s.spec,disableStackTrace:V.disableStackTrace||g},f,V.params),p),G=new yt(yt.formatError(V.message||y,W),n,W.path,V.type||u,W.disableStackTrace);return G.params=W,G}const $=w?l:c;let k={path:r,parent:x,type:u,from:o.from,createError:h,resolve(V){return n1(V,p)},options:o,originalValue:i,schema:s};const C=V=>{yt.isError(V)?$(V):V?c(null):$(h())},_=V=>{yt.isError(V)?$(V):l(V)};if(b&&Er(n))return C(!0);let N;try{var L;if(N=d.call(k,n,k),typeof((L=N)==null?void 0:L.then)=="function"){if(o.sync)throw new Error(`Validation test of type: "${k.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(N).then(C,_)}}catch(V){_(V);return}C(N)}return t.OPTIONS=e,t}function t1(e,t){if(!e)return e;for(const n of Object.keys(e))e[n]=n1(e[n],t);return e}function n1(e,t){return qr.isRef(e)?e.getValue(t.value,t.parent,t.context):e}function FC(e,t,n,r=n){let o,i,s;return t?(Pr.forEach(t,(l,c,u)=>{let d=c?l.slice(1,l.length-1):l;e=e.resolve({context:r,parent:o,value:n});let f=e.type==="tuple",y=u?parseInt(d,10):0;if(e.innerType||f){if(f&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(n&&y>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);o=n,n=n&&n[y],e=f?e.spec.types[y]:e.innerType}if(!u){if(!e.fields||!e.fields[d])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);o=n,n=n&&n[d],e=e.fields[d]}i=d,s=c?"["+l+"]":"."+l}),{schema:e,parent:o,parentPath:i}):{parent:o,parentPath:t,schema:e}}class al extends Set{describe(){const t=[];for(const n of this.values())t.push(qr.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new al(this.values())}merge(t,n){const r=this.clone();return t.forEach(o=>r.add(o)),n.forEach(o=>r.delete(o)),r}}function xo(e,t=new Map){if(zf(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=xo(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,o]of e.entries())n.set(r,xo(o,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(xo(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,o]of Object.entries(e))n[r]=xo(o,t)}else throw Error(`Unable to clone ${e}`);return n}function TC(e){if(!(e!=null&&e.length))return;const t=[];let n="",r=!1,o=!1;for(let i=0;i<e.length;i++){const s=e[i];if(s==="["&&!o){n&&(t.push(...n.split(".").filter(Boolean)),n=""),r=!0;continue}if(s==="]"&&!o){n&&(/^\d+$/.test(n)?t.push(n):t.push(n.replace(/^"|"$/g,"")),n=""),r=!1;continue}if(s==='"'){o=!o;continue}if(s==="."&&!r&&!o){n&&(t.push(n),n="");continue}n+=s}return n&&t.push(...n.split(".").filter(Boolean)),t}function zC(e,t){const n=t?`${t}.${e.path}`:e.path;return e.errors.map(r=>({message:r,path:TC(n)}))}function r1(e,t){var n;if(!((n=e.inner)!=null&&n.length)&&e.errors.length)return zC(e,t);const r=t?`${t}.${e.path}`:e.path;return e.inner.flatMap(o=>r1(o,r))}class gn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new al,this._blacklist=new al,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(fn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=xo(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const o=Object.assign({},n.spec,r.spec);return r.spec=o,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(s=>{i.test(s.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((o,i)=>i.resolve(o,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,o,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(o=t.recursive)!=null?o:this.spec.recursive,disableStackTrace:(i=t.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({},n,{value:t})),o=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(o&&Er(i))return i;let s=sr(t),l=sr(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${s} 
`+(l!==s?`result of cast: ${l}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((o,i)=>i.call(this,o,t,this,n),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,o){let{path:i,originalValue:s=t,strict:l=this.spec.strict}=n,c=t;l||(c=this._cast(c,Object.assign({assert:!1},n)));let u=[];for(let d of Object.values(this.internalTests))d&&u.push(d);this.runTests({path:i,value:c,originalValue:s,options:n,tests:u},r,d=>{if(d.length)return o(d,c);this.runTests({path:i,value:c,originalValue:s,options:n,tests:this.tests},r,o)})}runTests(t,n,r){let o=!1,{tests:i,value:s,originalValue:l,path:c,options:u}=t,d=v=>{o||(o=!0,n(v,s))},f=v=>{o||(o=!0,r(v,s))},y=i.length,b=[];if(!y)return f([]);let x={value:s,originalValue:l,path:c,options:u,schema:this};for(let v=0;v<i.length;v++){const w=i[v];w(x,d,function(p){p&&(Array.isArray(p)?b.push(...p):b.push(p)),--y<=0&&f(b)})}}asNestedTest({key:t,index:n,parent:r,parentPath:o,originalParent:i,options:s}){const l=t??n;if(l==null)throw TypeError("Must include `key` or `index` for nested validations");const c=typeof l=="number";let u=r[l];const d=Object.assign({},s,{strict:!0,parent:r,value:u,originalValue:i[l],key:void 0,[c?"index":"key"]:l,path:c||l.includes(".")?`${o||""}[${c?l:`"${l}"`}]`:(o?`${o}.`:"")+t});return(f,y,b)=>this.resolve(d)._validate(u,d,y,b)}validate(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return new Promise((s,l)=>o._validate(t,n,(c,u)=>{yt.isError(c)&&(c.value=u),l(c)},(c,u)=>{c.length?l(new yt(c,u,void 0,void 0,i)):s(u)}))}validateSync(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i,s=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return o._validate(t,Object.assign({},n,{sync:!0}),(l,c)=>{throw yt.isError(l)&&(l.value=c),l},(l,c)=>{if(l.length)throw new yt(l,t,void 0,void 0,s);i=c}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(yt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(yt.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):xo(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=to({message:n,name:"nullable",test(o){return o===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=to({message:n,name:"optionality",test(o){return o===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=fn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=fn.notNull){return this.nullability(!1,t)}required(t=fn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=fn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),o=to(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(s=>!(s.OPTIONS.name===n.name&&(i||s.OPTIONS.test===o.OPTIONS.test))),r.tests.push(o),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),o=Jx(t).map(i=>new qr(i));return o.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new sl(o,n):sl.fromOptions(o,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=to({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=fn.oneOf){let r=this.clone();return t.forEach(o=>{r._whitelist.add(o),r._blacklist.delete(o)}),r.internalTests.whiteList=to({message:n,name:"oneOf",skipAbsent:!0,test(o){let i=this.schema._whitelist,s=i.resolveAll(this.resolve);return s.includes(o)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:s}})}}),r}notOneOf(t,n=fn.notOneOf){let r=this.clone();return t.forEach(o=>{r._blacklist.add(o),r._whitelist.delete(o)}),r.internalTests.blacklist=to({message:n,name:"notOneOf",test(o){let i=this.schema._blacklist,s=i.resolveAll(this.resolve);return s.includes(o)?this.createError({params:{values:Array.from(i).join(", "),resolved:s}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:o,optional:i,nullable:s}=n.spec;return{meta:o,label:r,optional:i,nullable:s,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.filter((c,u,d)=>d.findIndex(f=>f.OPTIONS.name===c.OPTIONS.name)===u).map(c=>{const u=c.OPTIONS.params&&t?t1(Object.assign({},c.OPTIONS.params),t):c.OPTIONS.params;return{name:c.OPTIONS.name,params:u}})}}get"~standard"(){const t=this;return{version:1,vendor:"yup",async validate(r){try{return{value:await t.validate(r,{abortEarly:!1})}}catch(o){if(o instanceof yt)return{issues:r1(o)};throw o}}}}}gn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])gn.prototype[`${e}At`]=function(t,n,r={}){const{parent:o,parentPath:i,schema:s}=FC(this,t,n,r.context);return s[e](o&&o[i],Object.assign({},r,{parent:o,path:t}))};for(const e of["equals","is"])gn.prototype[e]=gn.prototype.oneOf;for(const e of["not","nope"])gn.prototype[e]=gn.prototype.notOneOf;const PC=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function RC(e){const t=ld(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;if(t.z===void 0&&t.plusMinus===void 0)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return t.z!=="Z"&&t.plusMinus!==void 0&&(n=t.hourOffset*60+t.minuteOffset,t.plusMinus==="+"&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}function ld(e){var t,n;const r=PC.exec(e);return r?{year:$n(r[1]),month:$n(r[2],1)-1,day:$n(r[3],1),hour:$n(r[4]),minute:$n(r[5]),second:$n(r[6]),millisecond:r[7]?$n(r[7].substring(0,3)):0,precision:(t=(n=r[7])==null?void 0:n.length)!=null?t:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:$n(r[10]),minuteOffset:$n(r[11])}:null}function $n(e,t=0){return Number(e)||t}let OC=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,NC=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,AC=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,LC="^\\d{4}-\\d{2}-\\d{2}",IC="\\d{2}:\\d{2}:\\d{2}",DC="(([+-]\\d{2}(:?\\d{2})?)|Z)",BC=new RegExp(`${LC}T${IC}(\\.\\d+)?${DC}$`),MC=e=>Er(e)||e===e.trim(),UC={}.toString();function ie(){return new o1}class o1 extends gn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n)=>{if(!this.spec.coerce||this.isType(t)||Array.isArray(t))return t;const r=t!=null&&t.toString?t.toString():t;return r===UC?t:r})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||fn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=wt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=wt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=wt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,o,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:o,name:i}=n:o=n),this.test({name:i||"matches",message:o||wt.matches,params:{regex:t},skipAbsent:!0,test:s=>s===""&&r||s.search(t)!==-1})}email(t=wt.email){return this.matches(OC,{name:"email",message:t,excludeEmptyString:!0})}url(t=wt.url){return this.matches(NC,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=wt.uuid){return this.matches(AC,{name:"uuid",message:t,excludeEmptyString:!1})}datetime(t){let n="",r,o;return t&&(typeof t=="object"?{message:n="",allowOffset:r=!1,precision:o=void 0}=t:n=t),this.matches(BC,{name:"datetime",message:n||wt.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||wt.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:i=>{if(!i||r)return!0;const s=ld(i);return s?!!s.z:!1}}).test({name:"datetime_precision",message:n||wt.datetime_precision,params:{precision:o},skipAbsent:!0,test:i=>{if(!i||o==null)return!0;const s=ld(i);return s?s.precision===o:!1}})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=wt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:MC})}lowercase(t=wt.lowercase){return this.transform(n=>Er(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Er(n)||n===n.toLowerCase()})}uppercase(t=wt.uppercase){return this.transform(n=>Er(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Er(n)||n===n.toUpperCase()})}}ie.prototype=o1.prototype;let VC=new Date(""),WC=e=>Object.prototype.toString.call(e)==="[object Date]";class Pf extends gn{constructor(){super({type:"date",check(t){return WC(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n)=>!this.spec.coerce||this.isType(t)||t===null?t:(t=RC(t),isNaN(t)?Pf.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(qr.isRef(t))r=t;else{let o=this.cast(t);if(!this._typeCheck(o))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=o}return r}min(t,n=ad.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o>=this.resolve(r)}})}max(t,n=ad.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(o){return o<=this.resolve(r)}})}}Pf.INVALID_DATE=VC;function HC(e,t=[]){let n=[],r=new Set,o=new Set(t.map(([s,l])=>`${s}-${l}`));function i(s,l){let c=Pr.split(s)[0];r.add(c),o.has(`${l}-${c}`)||n.push([l,c])}for(const s of Object.keys(e)){let l=e[s];r.add(s),qr.isRef(l)&&l.isSibling?i(l.path,s):zf(l)&&"deps"in l&&l.deps.forEach(c=>i(c,s))}return yC.array(Array.from(r),n).reverse()}function Sm(e,t){let n=1/0;return e.some((r,o)=>{var i;if((i=t.path)!=null&&i.includes(r))return n=o,!0}),n}function i1(e){return(t,n)=>Sm(e,t)-Sm(e,n)}const qC=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function $a(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=$a(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=$a(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map($a)}):"optional"in e?e.optional():e}const GC=(e,t)=>{const n=[...Pr.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),o=Pr.getter(Pr.join(n),!0)(e);return!!(o&&r in o)};let km=e=>Object.prototype.toString.call(e)==="[object Object]";function _m(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const YC=i1([]);function Rf(e){return new s1(e)}class s1 extends gn{constructor(t){super({type:"object",check(n){return km(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=YC,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let o=super._cast(t,n);if(o===void 0)return this.getDefault(n);if(!this._typeCheck(o))return o;let i=this.fields,s=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,l=[].concat(this._nodes,Object.keys(o).filter(f=>!this._nodes.includes(f))),c={},u=Object.assign({},n,{parent:c,__validating:n.__validating||!1}),d=!1;for(const f of l){let y=i[f],b=f in o,x=o[f];if(y){let v;u.path=(n.path?`${n.path}.`:"")+f,y=y.resolve({value:x,context:n.context,parent:c});let w=y instanceof gn?y.spec:void 0,g=w==null?void 0:w.strict;if(w!=null&&w.strip){d=d||f in o;continue}v=!n.__validating||!g?y.cast(x,u):x,v!==void 0&&(c[f]=v)}else b&&!s&&(c[f]=x);(b!==f in c||c[f]!==x)&&(d=!0)}return d?c:o}_validate(t,n={},r,o){let{from:i=[],originalValue:s=t,recursive:l=this.spec.recursive}=n;n.from=[{schema:this,value:s},...i],n.__validating=!0,n.originalValue=s,super._validate(t,n,r,(c,u)=>{if(!l||!km(u)){o(c,u);return}s=s||u;let d=[];for(let f of this._nodes){let y=this.fields[f];!y||qr.isRef(y)||d.push(y.asNestedTest({options:n,key:f,parent:u,parentPath:n.path,originalParent:s}))}this.runTests({tests:d,value:u,originalValue:s,options:n},r,f=>{o(f.sort(this._sortErrors).concat(c),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[o,i]of Object.entries(this.fields)){const s=r[o];r[o]=s===void 0?i:s}return n.withMutation(o=>o.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var o;const i=this.fields[r];let s=t;(o=s)!=null&&o.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[r]})),n[r]=i&&"getDefault"in i?i.getDefault(s):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=HC(t,n),r._sortErrors=i1(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let o=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),o=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),o)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return $a(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,o])=>t.includes(r)&&t.includes(o)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let o=Pr.getter(t,!0);return this.transform(i=>{if(!i)return i;let s=i;return GC(i,t)&&(s=Object.assign({},i),r||delete s[t],s[n]=o(i)),s})}json(){return this.transform(qC)}exact(t){return this.test({name:"exact",exclusive:!0,message:t||va.exact,test(n){if(n==null)return!0;const r=_m(this.schema,n);return r.length===0||this.createError({params:{properties:r.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(t=!0,n=va.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(o){if(o==null)return!0;const i=_m(this.schema,o);return!t||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=va.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const o of Object.keys(n))r[t(o)]=n[o];return r})}camelCase(){return this.transformKeys(Mc.camelCase)}snakeCase(){return this.transformKeys(Mc.snakeCase)}constantCase(){return this.transformKeys(t=>Mc.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[i,s]of Object.entries(n.fields)){var o;let l=t;(o=l)!=null&&o.value&&(l=Object.assign({},l,{parent:l.value,value:l.value[i]})),r.fields[i]=s.describe(l)}return r}}Rf.prototype=s1.prototype;const KC=He`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,QC=He`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,a1=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px; /* espaço para o footer fixo */
  animation: ${KC} 0.3s ease both;
`,l1=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,JC=m.button`
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
`,c1=m.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,XC=m.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,ZC=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,xi=m.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Vs=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,Ws=m.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,Hs=m.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,Oi=m.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,jm=m.div`
  grid-column: 1 / -1;
`,je=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Re=m.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,qs=m.span`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.neutral[400]};
  flex-shrink: 0;
`,Of=({theme:e,$hasError:t})=>`
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
`,zt=m.input`
  ${({theme:e,$hasError:t})=>Of({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,Gs=m.select`
  ${({theme:e,$hasError:t})=>Of({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,e5=m.textarea`
  ${({theme:e,$hasError:t})=>Of({theme:e,$hasError:t})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,Ys=m.div`
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
`,Ks=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[400]};
  font-style: italic;
`,ct=m.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,vi=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,t5=m.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,n5=m.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,r5=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,o5=m.div`
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
`,i5=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,s5=m.label`
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
`,a5=m.div`
  color: ${({theme:e,$hasFile:t})=>t?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,l5=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,c5=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,Em=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,Cm=m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,Fm=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Tm=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,u5=m.button`
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
`,d5=m.div`
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
`,f5=m.button`
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
`,p5=m.button`
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
`,h5=m.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,mr=m.div`
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
  animation: ${QC} 1.4s ease infinite;
`,zm=m(xi)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Pm=m.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`;m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`;m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`;m.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`;m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`;m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`;m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`;m.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;m.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`;m.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;m.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;m.button`
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
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`;m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`;m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  /* Span full width dentro do grid (ex: campo "notes") */
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`;m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`;const m5=m.span`
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
`;m(m5)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;const Rm={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}};m.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var t;return((t=Rm[e])==null?void 0:t.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var t;return((t=Rm[e])==null?void 0:t.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`;const g5=Rf({trade_name:ie().nullable().transform(e=>e||null).max(200,"Nome fantasia deve ter no máximo 200 caracteres."),phone:ie().nullable().transform(e=>e||null).max(20,"Telefone deve ter no máximo 20 caracteres."),benefit_type:ie().required("O tipo de benefício é obrigatório.").oneOf(["food","meal","both"],"Selecione um tipo de benefício válido."),notes:ie().nullable().transform(e=>e||null),partner_id:ie().nullable().transform(e=>e||null),address_street:ie().nullable().transform(e=>e||null).max(255,"Logradouro deve ter no máximo 255 caracteres."),address_number:ie().nullable().transform(e=>e||null).max(10,"Número deve ter no máximo 10 caracteres."),address_complement:ie().nullable().transform(e=>e||null).max(100,"Complemento deve ter no máximo 100 caracteres."),address_neighborhood:ie().nullable().transform(e=>e||null).max(100,"Bairro deve ter no máximo 100 caracteres."),address_city:ie().nullable().transform(e=>e||null).max(100,"Cidade deve ter no máximo 100 caracteres."),address_state:ie().nullable().transform(e=>e||null).max(2,"UF deve ter 2 caracteres."),address_zip:ie().nullable().transform(e=>e||null).test("cep-valido","CEP inválido. Use o formato 00000-000.",e=>e?e.replace(/\D/g,"").length===8:!0),bank_bank_name:ie().nullable().transform(e=>e||null).max(100,"Nome do banco deve ter no máximo 100 caracteres."),bank_agency:ie().max(10,"Agência deve ter no máximo 10 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Agência é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_agency_digit:ie().nullable().transform(e=>e||null).max(2,"Dígito da agência deve ter no máximo 2 caracteres."),bank_account:ie().max(20,"Conta deve ter no máximo 20 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Conta é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_account_digit:ie().nullable().transform(e=>e||null).max(2,"Dígito da conta deve ter no máximo 2 caracteres."),bank_account_type:ie().when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Tipo de conta é obrigatório.").oneOf(["checking","savings"],"Tipo de conta inválido."),otherwise:e=>e.nullable().transform(t=>t||null)})}),y5=[{key:"contrato",fieldName:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB."},{key:"proof_of_address",fieldName:"documentos",type:"proof_of_address",label:"Comprovante de Endereço",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:0},{key:"bank_account_proof",fieldName:"documentos",type:"bank_account_proof",label:"Comprovante Bancário",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:1},{key:"card_machine_proof",fieldName:"documentos",type:"card_machine_proof",label:"Comprovante de Maquininha",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:2}],x5=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],v5=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],$5=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"];let Uc=null;const Om=(e="")=>{const t=e.replace(/\D/g,"").slice(0,11);return t.length<=2?`(${t}`:t.length<=6?`(${t.slice(0,2)}) ${t.slice(2)}`:t.length<=10?`(${t.slice(0,2)}) ${t.slice(2,6)}-${t.slice(6)}`:`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7)}`},Nm=(e="")=>{const t=e.replace(/\D/g,"").slice(0,8);return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5)}`},b5=(e="")=>e.replace(/\D/g,""),Am=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function w5(){const e=t=>Array.from({length:t}).map((n,r)=>a.jsxs(je,{children:[a.jsx(mr,{$w:"45%",$h:"11px"}),a.jsx(mr,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},r));return a.jsxs(a1,{children:[a.jsxs(l1,{children:[a.jsx(mr,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),a.jsxs(c1,{children:[a.jsx(mr,{$w:"200px",$h:"28px"}),a.jsx(mr,{$w:"140px",$h:"14px",style:{marginTop:"4px"}})]})]}),a.jsxs(zm,{children:[a.jsx(mr,{$w:"35%",$h:"20px"}),a.jsx(Pm,{}),a.jsx(Oi,{children:e(6)})]}),a.jsxs(zm,{children:[a.jsx(mr,{$w:"30%",$h:"20px"}),a.jsx(Pm,{}),a.jsx(Oi,{children:e(4)})]})]})}function S5({slot:e,existingDoc:t,selectedFile:n,onFileSelect:r,onClearFile:o,disabled:i}){const s=j.useRef(null),l=!!n,c=!!t;return a.jsxs(o5,{$hasFile:l,children:[a.jsx(i5,{children:e.label}),l?a.jsxs(Em,{children:[a.jsx(td,{size:16,style:{color:"#B45A14",flexShrink:0}}),a.jsxs(Cm,{children:[a.jsx(Fm,{children:n.name}),a.jsxs(Tm,{children:[Am(n.size)," · Novo arquivo"]})]}),a.jsx(u5,{type:"button",onClick:()=>o(e.key),disabled:i,title:"Remover seleção",children:a.jsx(Tx,{size:13})})]}):c?a.jsxs(Em,{children:[a.jsx(td,{size:16,style:{color:"#7a6455",flexShrink:0}}),a.jsxs(Cm,{children:[a.jsx(Fm,{children:t.original_name??"Documento existente"}),a.jsxs(Tm,{children:[t.file_size?Am(t.file_size)+" · ":"","Substituir clicando abaixo"]})]})]}):null,a.jsxs(s5,{htmlFor:`doc-input-${e.key}`,children:[a.jsx(a5,{$hasFile:l,children:a.jsx(zx,{size:22})}),a.jsx(l5,{children:l?"Trocar arquivo":c?"Substituir documento":"Selecionar arquivo"}),a.jsx(c5,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),a.jsx("input",{ref:s,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:i,onChange:u=>{var f;const d=(f=u.target.files)==null?void 0:f[0];if(d){if(d.size>3*1024*1024){te.error("Arquivo muito grande. O limite é 3 MB.");return}r(e.key,d),u.target.value=""}}}),a.jsx(vi,{children:e.hint})]})}function k5(){const{id:e}=f0(),t=pr(),[n,r]=j.useState(!0),[o,i]=j.useState(!1),[s,l]=j.useState(""),[c,u]=j.useState([]),[d,f]=j.useState(!1),[y,b]=j.useState({}),[x,v]=j.useState({}),[w,g]=j.useState({corporate_name:"",cnpj:"",email:"",state_registration:""}),{register:p,handleSubmit:h,reset:$,setValue:k,watch:C,formState:{errors:_,isDirty:E}}=Ul({resolver:Gx(g5),defaultValues:{trade_name:"",phone:"",benefit_type:"food",notes:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",partner_id:"",bank_bank_name:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}}),L=!!C("bank_bank_name"),V=j.useCallback(async()=>{var D,O;r(!0);try{const{data:B}=await De.get(`/clients/${e}`),P=B.data;l(P.trade_name||P.corporate_name||""),g({corporate_name:P.corporate_name??"",cnpj:P.cnpj??"",email:P.email??"",state_registration:P.state_registration??""});const z={};(P.documents??[]).forEach(ne=>{z[ne.document_type]=ne}),b(z);const A=(D=P.bankAccounts)==null?void 0:D[0];$({trade_name:P.trade_name??"",phone:Om(P.phone??""),benefit_type:P.benefit_type??"food",notes:P.notes??"",address_street:P.address_street??"",address_number:P.address_number??"",address_complement:P.address_complement??"",address_neighborhood:P.address_neighborhood??"",address_city:P.address_city??"",address_state:P.address_state??"",address_zip:Nm(P.address_zip??""),partner_id:((O=P.partner)==null?void 0:O.id)??P.partner_id??"",bank_bank_name:(A==null?void 0:A.bank_name)??"",bank_agency:(A==null?void 0:A.agency)??"",bank_agency_digit:(A==null?void 0:A.agency_digit)??"",bank_account:(A==null?void 0:A.account)??"",bank_account_digit:(A==null?void 0:A.account_digit)??"",bank_account_type:(A==null?void 0:A.account_type)??"checking"})}catch(B){te.error(Pn(B,"Erro ao carregar dados do cliente.")),t(`/clientes/${e}`,{replace:!0})}finally{r(!1)}},[e,t,$]);j.useEffect(()=>{V()},[V]),j.useEffect(()=>{(async()=>{if(Uc){u(Uc);return}f(!0);try{const{data:O}=await De.get("/users?role=partner&limit=100"),B=O.data??[];Uc=B,u(B)}catch{}finally{f(!1)}})()},[]);const W=(D,O)=>{v(B=>({...B,[D]:O}))},G=D=>{v(O=>{const B={...O};return delete B[D],B})},Z=async D=>{i(!0);try{const O=Object.keys(x).length>0,B={trade_name:D.trade_name||void 0,phone:b5(D.phone)||void 0,benefit_type:D.benefit_type,notes:D.notes||void 0,address_street:D.address_street||void 0,address_number:D.address_number||void 0,address_complement:D.address_complement||void 0,address_neighborhood:D.address_neighborhood||void 0,address_city:D.address_city||void 0,address_state:D.address_state||void 0,address_zip:D.address_zip||void 0,partner_id:D.partner_id||null,...L?{bankAccount:{bank_name:D.bank_bank_name,agency:D.bank_agency,agency_digit:D.bank_agency_digit||void 0,account:D.bank_account,account_digit:D.bank_account_digit||void 0,account_type:D.bank_account_type}}:{}};if(Object.keys(B).forEach(P=>B[P]===void 0&&delete B[P]),O){const P=new FormData;P.append("data",JSON.stringify(B)),x.contrato&&P.append("contrato",x.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(z=>{x[z]&&P.append("documentos",x[z])}),await De.patch(`/clients/${e}`,P,{headers:{"Content-Type":"multipart/form-data"}})}else await De.patch(`/clients/${e}`,B);te.success("Cliente atualizado com sucesso!",{toastId:"client-updated"}),t(`/clientes/${e}`,{replace:!0})}catch(O){te.error(Pn(O,"Erro ao salvar alterações."))}finally{i(!1)}};if(n)return a.jsx(w5,{});const re=E||Object.keys(x).length>0,M=D=>{var O;return(O=_[D])==null?void 0:O.message};return a.jsxs(a.Fragment,{children:[a.jsxs(a1,{children:[a.jsxs(l1,{children:[a.jsxs(JC,{type:"button",onClick:()=>t(`/clientes/${e}`),children:[a.jsx(xf,{size:15})," Voltar"]}),a.jsxs(c1,{children:[a.jsx(XC,{children:"Editar Cliente"}),a.jsx(ZC,{children:s})]})]}),a.jsxs("form",{id:"edit-client-form",onSubmit:h(Z),noValidate:!0,children:[a.jsxs(xi,{style:{marginBottom:"24px"},children:[a.jsxs(Vs,{children:[a.jsx(Ws,{children:a.jsx(vf,{size:18})}),a.jsx(Hs,{children:"Dados da Empresa"})]}),a.jsxs(Oi,{children:[a.jsxs(je,{children:[a.jsxs(Re,{children:[a.jsx(qs,{children:a.jsx(Bs,{size:11})}),"Razão Social"]}),a.jsx(Ys,{children:w.corporate_name||"—"}),a.jsx(Ks,{children:"Campo único, não pode ser editado."})]}),a.jsxs(je,{children:[a.jsxs(Re,{children:[a.jsx(qs,{children:a.jsx(Bs,{size:11})}),"CNPJ"]}),a.jsx(Ys,{children:w.cnpj||"—"}),a.jsx(Ks,{children:"Campo único, não pode ser editado."})]}),a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"trade_name",children:"Nome Fantasia"}),a.jsx(zt,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",$hasError:!!M("trade_name"),disabled:o,...p("trade_name")}),M("trade_name")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("trade_name")]})]}),a.jsxs(je,{children:[a.jsxs(Re,{children:[a.jsx(qs,{children:a.jsx(Bs,{size:11})}),"Inscrição Estadual"]}),a.jsx(Ys,{children:w.state_registration||"—"}),a.jsx(Ks,{children:"Campo único, não pode ser editado."})]}),a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"phone",children:"Telefone"}),a.jsx(zt,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",$hasError:!!M("phone"),disabled:o,...p("phone",{onChange:D=>k("phone",Om(D.target.value))})}),M("phone")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("phone")]})]}),a.jsxs(je,{children:[a.jsxs(Re,{children:[a.jsx(qs,{children:a.jsx(Bs,{size:11})}),"E-mail"]}),a.jsx(Ys,{children:w.email||"—"}),a.jsx(Ks,{children:"Campo único, não pode ser editado."})]}),a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),a.jsx(Gs,{id:"benefit_type",$hasError:!!M("benefit_type"),disabled:o,...p("benefit_type"),children:x5.map(D=>a.jsx("option",{value:D.value,children:D.label},D.value))}),M("benefit_type")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("benefit_type")]})]}),a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"partner_id",children:"Parceiro Vinculado"}),a.jsxs(Gs,{id:"partner_id",disabled:o||d,...p("partner_id"),children:[a.jsx("option",{value:"",children:d?"Carregando parceiros…":"Sem parceiro vinculado"}),c.map(D=>a.jsx("option",{value:D.id,children:D.name},D.id))]}),a.jsx(vi,{children:d?"Buscando parceiros…":`${c.length} parceiro${c.length!==1?"s":""} disponível${c.length!==1?"is":""}`})]}),a.jsx(jm,{children:a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"notes",children:"Observações"}),a.jsx(e5,{id:"notes",placeholder:"Observações internas…",disabled:o,...p("notes")}),a.jsx(vi,{children:"Visível apenas para a equipe interna."})]})})]})]}),a.jsxs(xi,{style:{marginBottom:"24px"},children:[a.jsxs(Vs,{children:[a.jsx(Ws,{children:a.jsx(bf,{size:18})}),a.jsx(Hs,{children:"Endereço"})]}),a.jsxs(Oi,{children:[a.jsx(jm,{children:a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"address_street",children:"Logradouro"}),a.jsx(zt,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",$hasError:!!M("address_street"),disabled:o,...p("address_street")}),M("address_street")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("address_street")]})]})}),a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"address_number",children:"Número"}),a.jsx(zt,{id:"address_number",type:"text",placeholder:"Nº",$hasError:!!M("address_number"),disabled:o,...p("address_number")}),M("address_number")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("address_number")]})]}),a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"address_complement",children:"Complemento"}),a.jsx(zt,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",$hasError:!!M("address_complement"),disabled:o,...p("address_complement")}),M("address_complement")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("address_complement")]})]}),a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"address_neighborhood",children:"Bairro"}),a.jsx(zt,{id:"address_neighborhood",type:"text",placeholder:"Bairro",$hasError:!!M("address_neighborhood"),disabled:o,...p("address_neighborhood")}),M("address_neighborhood")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("address_neighborhood")]})]}),a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"address_city",children:"Cidade"}),a.jsx(zt,{id:"address_city",type:"text",placeholder:"Cidade",$hasError:!!M("address_city"),disabled:o,...p("address_city")}),M("address_city")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("address_city")]})]}),a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"address_state",children:"UF"}),a.jsxs(Gs,{id:"address_state",$hasError:!!M("address_state"),disabled:o,...p("address_state"),children:[a.jsx("option",{value:"",children:"Selecione"}),$5.map(D=>a.jsx("option",{value:D,children:D},D))]}),M("address_state")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("address_state")]})]}),a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"address_zip",children:"CEP"}),a.jsx(zt,{id:"address_zip",type:"text",placeholder:"00000-000",$hasError:!!M("address_zip"),disabled:o,...p("address_zip",{onChange:D=>k("address_zip",Nm(D.target.value))})}),M("address_zip")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("address_zip")]})]})]})]}),a.jsxs(xi,{style:{marginBottom:"24px"},children:[a.jsxs(Vs,{children:[a.jsx(Ws,{children:a.jsx($f,{size:18})}),a.jsx(Hs,{children:"Conta Bancária"})]}),a.jsxs(t5,{children:[a.jsx(n5,{children:"Dados Bancários Principais"}),L&&a.jsx(vi,{style:{marginBottom:"12px",display:"block"},children:"Agência e conta são obrigatórios quando o banco é informado."}),a.jsxs(Oi,{children:[a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),a.jsx(zt,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",$hasError:!!M("bank_bank_name"),disabled:o,...p("bank_bank_name")}),M("bank_bank_name")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("bank_bank_name")]})]}),a.jsxs(je,{children:[a.jsxs(Re,{htmlFor:"bank_agency",children:["Agência ",L&&a.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),a.jsx(zt,{id:"bank_agency",type:"text",placeholder:"0000",$hasError:!!M("bank_agency"),disabled:o,...p("bank_agency")}),M("bank_agency")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("bank_agency")]})]}),a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),a.jsx(zt,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,$hasError:!!M("bank_agency_digit"),disabled:o,...p("bank_agency_digit")}),M("bank_agency_digit")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("bank_agency_digit")]})]}),a.jsxs(je,{children:[a.jsxs(Re,{htmlFor:"bank_account",children:["Conta ",L&&a.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),a.jsx(zt,{id:"bank_account",type:"text",placeholder:"000000",$hasError:!!M("bank_account"),disabled:o,...p("bank_account")}),M("bank_account")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("bank_account")]})]}),a.jsxs(je,{children:[a.jsx(Re,{htmlFor:"bank_account_digit",children:"Dígito Conta"}),a.jsx(zt,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,$hasError:!!M("bank_account_digit"),disabled:o,...p("bank_account_digit")}),M("bank_account_digit")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("bank_account_digit")]})]}),a.jsxs(je,{children:[a.jsxs(Re,{htmlFor:"bank_account_type",children:["Tipo de Conta ",L&&a.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),a.jsx(Gs,{id:"bank_account_type",$hasError:!!M("bank_account_type"),disabled:o,...p("bank_account_type"),children:v5.map(D=>a.jsx("option",{value:D.value,children:D.label},D.value))}),M("bank_account_type")&&a.jsxs(ct,{children:[a.jsx(de,{size:11}),M("bank_account_type")]})]})]})]})]}),a.jsxs(xi,{style:{marginBottom:"24px"},children:[a.jsxs(Vs,{children:[a.jsx(Ws,{children:a.jsx(rl,{size:18})}),a.jsx(Hs,{children:"Documentos"})]}),a.jsxs(vi,{style:{marginBottom:"16px",display:"block"},children:["Selecione um novo arquivo para ",a.jsx("strong",{children:"substituir"})," o documento existente. O arquivo antigo é removido automaticamente do Cloudinary."]}),a.jsx(r5,{children:y5.map(D=>a.jsx(S5,{slot:D,existingDoc:y[D.type],selectedFile:x[D.key],onFileSelect:W,onClearFile:G,disabled:o},D.key))})]})]})]}),a.jsxs(d5,{children:[a.jsxs(f5,{type:"button",disabled:o,onClick:()=>t(`/clientes/${e}`),children:[a.jsx(Bl,{size:15})," Cancelar"]}),a.jsx(p5,{type:"submit",form:"edit-client-form",disabled:o||!re,$isSubmitting:o,title:re?void 0:"Nenhuma alteração detectada",children:o?a.jsxs(a.Fragment,{children:[a.jsx(h5,{}),"Salvando…"]}):a.jsxs(a.Fragment,{children:[a.jsx(Fx,{size:15}),"Salvar Alterações"]})})]})]})}const _5=He`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,j5=He`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,u1=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px;
  animation: ${_5} 0.3s ease both;
`,d1=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,E5=m.button`
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
`,f1=m.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,C5=m.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,F5=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,ro=m.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,ii=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,si=m.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,ai=m.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,ba=m.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Lm=m.div`
  grid-column: 1 / -1;
`,Ee=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Oe=m.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Nf=({theme:e,$hasError:t})=>`
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
`,nt=m.input`
  ${({theme:e,$hasError:t})=>Nf({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,Qs=m.select`
  ${({theme:e,$hasError:t})=>Nf({theme:e,$hasError:t})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,T5=m.textarea`
  ${({theme:e,$hasError:t})=>Nf({theme:e,$hasError:t})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,Pt=m.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,oo=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,z5=m.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,P5=m.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,R5=m.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[5]};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Im=m.button`
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
`,O5=m.div`
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
`,N5=m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,A5=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
`,L5=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`,I5=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,D5=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,B5=m.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background-color: ${({theme:e})=>e.colors.primary[100]};
  color: ${({theme:e})=>e.colors.primary[700]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 11px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,M5=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,U5=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,V5=m.div`
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
`,W5=m.div`
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
`,H5=m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,q5=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,G5=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.brand.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,Dm=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-top: ${({theme:e})=>e.spacing[4]};
`,Bm=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
`,Mm=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.brand.primary};
`,Y5=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,K5=m.div`
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
`,Q5=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,J5=m.label`
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
`,X5=m.div`
  color: ${({theme:e,$hasFile:t})=>t?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,Z5=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,eF=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,tF=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,nF=m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,rF=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,oF=m.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,iF=m.button`
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
`,sF=m.div`
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
`,aF=m.button`
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
`,lF=m.button`
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
`,cF=m.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,Ln=m.div`
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
  animation: ${j5} 1.4s ease infinite;
`,Um=m(ro)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Vm=m.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`,Wm=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,Hm=m.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`;let li=null,ci=null,ui=null;const uF=Rf({corporate_name:ie().required("A razão social é obrigatória.").max(200,"Razão social deve ter no máximo 200 caracteres."),cnpj:ie().required("O CNPJ é obrigatório.").transform(e=>(e==null?void 0:e.replace(/\D/g,""))||"").test("cnpj-valido","CNPJ deve ter 14 dígitos.",e=>!e||e.length===14),email:ie().required("O e-mail é obrigatório.").nullable().transform(e=>e||null).email("Informe um e-mail válido."),state_registration:ie().nullable().transform(e=>e||null).max(15,"Inscrição estadual deve ter no máximo 15 caracteres."),trade_name:ie().nullable().transform(e=>e||null).max(200,"Nome fantasia deve ter no máximo 200 caracteres."),phone:ie().nullable().transform(e=>e||null).max(20,"Telefone deve ter no máximo 20 caracteres."),benefit_type:ie().required("O tipo de benefício é obrigatório.").oneOf(["food","meal","both"],"Tipo inválido."),notes:ie().nullable().transform(e=>e||null),partner_id:ie().nullable().transform(e=>e||null),address_street:ie().nullable().transform(e=>e||null).max(255,"Logradouro deve ter no máximo 255 caracteres."),address_number:ie().nullable().transform(e=>e||null).max(10,"Número deve ter no máximo 10 caracteres."),address_complement:ie().nullable().transform(e=>e||null).max(100,"Complemento deve ter no máximo 100 caracteres."),address_neighborhood:ie().nullable().transform(e=>e||null).max(100,"Bairro deve ter no máximo 100 caracteres."),address_city:ie().nullable().transform(e=>e||null).max(100,"Cidade deve ter no máximo 100 caracteres."),address_state:ie().nullable().transform(e=>e||null).max(2,"UF deve ter 2 caracteres."),address_zip:ie().nullable().transform(e=>e||null).test("cep-valido","CEP inválido. Use o formato 00000-000.",e=>e?e.replace(/\D/g,"").length===8:!0),bank_bank_name:ie().nullable().transform(e=>e||null).max(100,"Nome do banco deve ter no máximo 100 caracteres."),bank_agency:ie().max(10,"Agência deve ter no máximo 10 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Agência é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_agency_digit:ie().nullable().transform(e=>e||null).max(2,"Dígito deve ter no máximo 2 caracteres."),bank_account:ie().max(20,"Conta deve ter no máximo 20 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Conta é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(t=>t||null)}),bank_account_digit:ie().nullable().transform(e=>e||null).max(2,"Dígito deve ter no máximo 2 caracteres."),bank_account_type:ie().when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Tipo é obrigatório.").oneOf(["checking","savings"],"Tipo inválido."),otherwise:e=>e.nullable().transform(t=>t||null)})}),dF=[{key:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",fieldName:"contrato"},{key:"proof_of_address",type:"proof_of_address",label:"Comprovante de Endereço",fieldName:"documentos",docIndex:0},{key:"bank_account_proof",type:"bank_account_proof",label:"Comprovante Bancário",fieldName:"documentos",docIndex:1},{key:"card_machine_proof",type:"card_machine_proof",label:"Comprovante de Maquininha",fieldName:"documentos",docIndex:2}],fF=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],pF=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],hF=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],mF=(e="")=>{const t=e.replace(/\D/g,"").slice(0,14);return t.length<=2?t:t.length<=5?`${t.slice(0,2)}.${t.slice(2)}`:t.length<=8?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5)}`:t.length<=12?`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8)}`:`${t.slice(0,2)}.${t.slice(2,5)}.${t.slice(5,8)}/${t.slice(8,12)}-${t.slice(12)}`},gF=(e="")=>{const t=e.replace(/\D/g,"").slice(0,11);return t.length<=2?`(${t}`:t.length<=6?`(${t.slice(0,2)}) ${t.slice(2)}`:t.length<=10?`(${t.slice(0,2)}) ${t.slice(2,6)}-${t.slice(6)}`:`(${t.slice(0,2)}) ${t.slice(2,7)}-${t.slice(7)}`},yF=(e="")=>{const t=e.replace(/\D/g,"").slice(0,8);return t.length<=5?t:`${t.slice(0,5)}-${t.slice(5)}`},Vc=(e="")=>e.replace(/\D/g,""),Js=(e=0)=>Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),xF=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function vF(){const e=t=>Array.from({length:t}).map((n,r)=>a.jsxs(Ee,{children:[a.jsx(Ln,{$w:"45%",$h:"11px"}),a.jsx(Ln,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},r));return a.jsxs(u1,{children:[a.jsxs(d1,{children:[a.jsx(Ln,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),a.jsxs(f1,{children:[a.jsx(Ln,{$w:"180px",$h:"28px"}),a.jsx(Ln,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]}),a.jsxs(Um,{children:[a.jsx(Ln,{$w:"35%",$h:"20px"}),a.jsx(Vm,{}),a.jsx(ba,{children:e(6)})]}),a.jsxs(Um,{children:[a.jsx(Ln,{$w:"40%",$h:"20px"}),a.jsx(Vm,{}),a.jsx(Ln,{$h:"120px",style:{borderRadius:"8px"}})]})]})}function $F({slot:e,selectedFile:t,onFileSelect:n,onClearFile:r,disabled:o}){const i=j.useRef(null),s=!!t;return a.jsxs(K5,{$hasFile:s,children:[a.jsx(Q5,{children:e.label}),s&&a.jsxs(tF,{children:[a.jsx(td,{size:16,style:{color:"#B45A14",flexShrink:0}}),a.jsxs(nF,{children:[a.jsx(rF,{children:t.name}),a.jsxs(oF,{children:[xF(t.size)," · Novo arquivo"]})]}),a.jsx(iF,{type:"button",onClick:()=>r(e.key),disabled:o,children:a.jsx(Tx,{size:13})})]}),a.jsxs(J5,{htmlFor:`doc-input-${e.key}`,children:[a.jsx(X5,{$hasFile:s,children:a.jsx(zx,{size:22})}),a.jsx(Z5,{children:s?"Trocar arquivo":"Selecionar arquivo"}),a.jsx(eF,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),a.jsx("input",{ref:i,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:o,onChange:l=>{var u;const c=(u=l.target.files)==null?void 0:u[0];if(c){if(c.size>3*1024*1024){te.error("Arquivo muito grande. O limite é 3 MB.");return}n(e.key,c),l.target.value=""}}}),a.jsx(oo,{children:"PDF, JPG ou PNG · máx. 3 MB"})]})}function bF(){const e=pr(),[t,n]=j.useState([]),[r,o]=j.useState([]),[i,s]=j.useState([]),[l,c]=j.useState(!0),[u,d]=j.useState(!1),[f,y]=j.useState("plan"),[b,x]=j.useState(""),[v,w]=j.useState([]),[g,p]=j.useState({}),[h,$]=j.useState(""),k=j.useRef(null),{register:C,handleSubmit:_,setValue:E,watch:N,formState:{errors:L}}=Ul({resolver:Gx(uF),defaultValues:{corporate_name:"",cnpj:"",email:"",state_registration:"",trade_name:"",phone:"",benefit_type:"food",notes:"",partner_id:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",bank_bank_name:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}}),W=!!N("bank_bank_name");j.useEffect(()=>{(async()=>{c(!0);try{await Promise.all([!li||li.length===0?De.get("/plans?limit=100").then(({data:A})=>{li=A.data??[]}).catch(()=>{te.error("Erro ao carregar planos."),li=[]}):Promise.resolve(),!ci||ci.length===0?De.get("/flags?limit=100").then(({data:A})=>{ci=A.data??[]}).catch(()=>{te.error("Erro ao carregar bandeiras."),ci=[]}):Promise.resolve(),!ui||ui.length===0?De.get("/users?role=partner&limit=100").then(({data:A})=>{ui=A.data??[]}).catch(()=>{ui=[]}):Promise.resolve()])}finally{n(li??[]),o(ci??[]),s(ui??[]),c(!1)}})()},[]);const G=(z,A)=>{p(ne=>({...ne,[z]:A}))},Z=z=>{p(A=>{const ne={...A};return delete ne[z],ne})},re=z=>{const A=z.target.value,ne=mF(A);$(ne),k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{E("cnpj",Vc(A),{shouldValidate:!0})},400)},D=r.filter(z=>v.includes(z.id)).reduce((z,A)=>z+parseFloat(A.price||0),0),O=t.find(z=>z.id===b),B=async z=>{var A,ne,oe,he;if(f==="plan"&&!b){te.error("Selecione um plano para continuar.");return}if(f==="individual"&&v.length===0){te.error("Selecione ao menos uma bandeira.");return}d(!0);try{const ue={corporate_name:z.corporate_name,cnpj:Vc(z.cnpj||h),benefit_type:z.benefit_type,trade_name:z.trade_name||void 0,email:z.email||void 0,state_registration:z.state_registration||void 0,phone:Vc(z.phone)||void 0,notes:z.notes||void 0,partner_id:z.partner_id||void 0,address_street:z.address_street||void 0,address_number:z.address_number||void 0,address_complement:z.address_complement||void 0,address_neighborhood:z.address_neighborhood||void 0,address_city:z.address_city||void 0,address_state:z.address_state||void 0,address_zip:z.address_zip||void 0,...f==="plan"?{plan_id:b}:{flag_ids:v},...W?{bank_name:z.bank_bank_name,agency:z.bank_agency,agency_digit:z.bank_agency_digit||void 0,account:z.bank_account,account_digit:z.bank_account_digit||void 0,account_type:z.bank_account_type}:{}};Object.keys(ue).forEach(ve=>ue[ve]===void 0&&delete ue[ve]);const xe=new FormData;xe.append("data",JSON.stringify(ue)),g.contrato&&xe.append("contrato",g.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(ve=>{g[ve]&&xe.append("documentos",g[ve])});const{data:X}=await De.post("/onboarding",xe,{headers:{"Content-Type":"multipart/form-data"}});te.success(`Cliente cadastrado com sucesso! Protocolo: ${((ne=(A=X.data)==null?void 0:A.client)==null?void 0:ne.protocol)??""}`,{autoClose:5e3});const Be=(he=(oe=X.data)==null?void 0:oe.client)==null?void 0:he.id;Be?e(`/clientes/${Be}`,{replace:!0}):e("/clientes",{replace:!0})}catch(ue){te.error(Pn(ue,"Erro ao cadastrar cliente."))}finally{d(!1)}};if(l)return a.jsx(vF,{});const P=z=>{var A;return(A=L[z])==null?void 0:A.message};return a.jsxs(a.Fragment,{children:[a.jsxs(u1,{children:[a.jsxs(d1,{children:[a.jsxs(E5,{type:"button",onClick:()=>e("/clientes"),children:[a.jsx(xf,{size:15})," Voltar"]}),a.jsxs(f1,{children:[a.jsx(C5,{children:"Novo Cliente"}),a.jsx(F5,{children:"Preencha os dados para iniciar o onboarding"})]})]}),a.jsxs("form",{id:"create-client-form",onSubmit:_(B),noValidate:!0,children:[a.jsxs(ro,{style:{marginBottom:"24px"},children:[a.jsxs(ii,{children:[a.jsx(si,{children:a.jsx(vf,{size:18})}),a.jsx(ai,{children:"Dados da Empresa"})]}),a.jsxs(ba,{children:[a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"corporate_name",children:"Razão Social *"}),a.jsx(nt,{id:"corporate_name",type:"text",placeholder:"Razão social completa",$hasError:!!P("corporate_name"),disabled:u,...C("corporate_name")}),P("corporate_name")&&a.jsxs(Pt,{children:[a.jsx(de,{size:11}),P("corporate_name")]})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"cnpj",children:"CNPJ *"}),a.jsx(nt,{id:"cnpj",type:"text",placeholder:"00.000.000/0001-00",value:h,$hasError:!!P("cnpj"),disabled:u,onChange:re}),P("cnpj")&&a.jsxs(Pt,{children:[a.jsx(de,{size:11}),P("cnpj")]})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"trade_name",children:"Nome Fantasia"}),a.jsx(nt,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",disabled:u,...C("trade_name")})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"state_registration",children:"Inscrição Estadual"}),a.jsx(nt,{id:"state_registration",type:"text",placeholder:"Inscrição estadual (opcional)",$hasError:!!P("state_registration"),disabled:u,...C("state_registration")}),P("state_registration")&&a.jsxs(Pt,{children:[a.jsx(de,{size:11}),P("state_registration")]})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"phone",children:"Telefone"}),a.jsx(nt,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",$hasError:!!P("phone"),disabled:u,...C("phone",{onChange:z=>E("phone",gF(z.target.value))})}),P("phone")&&a.jsxs(Pt,{children:[a.jsx(de,{size:11}),P("phone")]})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"email",children:"E-mail *"}),a.jsx(nt,{id:"email",type:"email",placeholder:"contato@empresa.com.br",$hasError:!!P("email"),disabled:u,...C("email")}),P("email")&&a.jsxs(Pt,{children:[a.jsx(de,{size:11}),P("email")]})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),a.jsx(Qs,{id:"benefit_type",$hasError:!!P("benefit_type"),disabled:u,...C("benefit_type"),children:fF.map(z=>a.jsx("option",{value:z.value,children:z.label},z.value))}),P("benefit_type")&&a.jsxs(Pt,{children:[a.jsx(de,{size:11}),P("benefit_type")]})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"partner_id",children:"Parceiro Vinculado"}),a.jsxs(Qs,{id:"partner_id",disabled:u,...C("partner_id"),children:[a.jsx("option",{value:"",children:"Sem parceiro vinculado"}),i.map(z=>a.jsx("option",{value:z.id,children:z.name},z.id))]}),a.jsxs(oo,{children:[i.length," parceiro",i.length!==1?"s":""," disponível",i.length!==1?"is":""]})]}),a.jsx(Lm,{children:a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"notes",children:"Observações"}),a.jsx(T5,{id:"notes",placeholder:"Observações internas…",disabled:u,...C("notes")}),a.jsx(oo,{children:"Visível apenas para a equipe interna."})]})})]})]}),a.jsxs(ro,{style:{marginBottom:"24px"},children:[a.jsxs(ii,{children:[a.jsx(si,{children:a.jsx(Dh,{size:18})}),a.jsx(ai,{children:"Contratação"})]}),a.jsxs(R5,{children:[a.jsxs(Im,{type:"button",$active:f==="plan",disabled:u,onClick:()=>{y("plan"),w([])},children:[a.jsx(Dh,{size:16}),"Escolher Plano"]}),a.jsxs(Im,{type:"button",$active:f==="individual",disabled:u,onClick:()=>{y("individual"),x("")},children:[a.jsx(y2,{size:16}),"Bandeiras Individuais"]})]}),f==="plan"&&a.jsxs(a.Fragment,{children:[t.length===0?a.jsx(Wm,{children:a.jsx(Hm,{children:"Nenhum plano ativo encontrado."})}):a.jsx(M5,{children:t.map(z=>{var ne;const A=b===z.id;return a.jsxs(O5,{$selected:A,onClick:()=>!u&&x(z.id),children:[a.jsxs(N5,{children:[a.jsx(A5,{children:z.name}),a.jsx(L5,{children:Js(z.price)})]}),z.description&&a.jsx(I5,{children:z.description}),((ne=z.flags)==null?void 0:ne.length)>0&&a.jsx(D5,{children:z.flags.map(oe=>a.jsx(B5,{children:oe.name},oe.id))})]},z.id)})}),O&&a.jsxs(Dm,{children:[a.jsxs(Bm,{children:["Plano selecionado: ",O.name]}),a.jsx(Mm,{children:Js(O.price)})]})]}),f==="individual"&&a.jsxs(a.Fragment,{children:[a.jsx(oo,{style:{marginBottom:"12px",display:"block"},children:"Selecione ao menos uma bandeira. O valor total será a soma dos preços individuais."}),r.length===0?a.jsx(Wm,{children:a.jsx(Hm,{children:"Nenhuma bandeira ativa encontrada."})}):a.jsx(U5,{children:r.map(z=>{const A=v.includes(z.id),ne=()=>{u||w(oe=>A?oe.filter(he=>he!==z.id):[...oe,z.id])};return a.jsxs(V5,{$checked:A,onClick:ne,children:[a.jsx(W5,{$checked:A,children:A&&a.jsx(d2,{size:11,color:"#fff",strokeWidth:3})}),a.jsxs(H5,{children:[a.jsx(q5,{children:z.name}),a.jsx(G5,{children:Js(z.price)})]})]},z.id)})}),v.length>0&&a.jsxs(Dm,{children:[a.jsxs(Bm,{children:[v.length," bandeira",v.length!==1?"s":""," selecionada",v.length!==1?"s":""]}),a.jsx(Mm,{children:Js(D)})]})]})]}),a.jsxs(ro,{style:{marginBottom:"24px"},children:[a.jsxs(ii,{children:[a.jsx(si,{children:a.jsx(bf,{size:18})}),a.jsx(ai,{children:"Endereço"})]}),a.jsxs(ba,{children:[a.jsx(Lm,{children:a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"address_street",children:"Logradouro"}),a.jsx(nt,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",$hasError:!!P("address_street"),disabled:u,...C("address_street")}),P("address_street")&&a.jsxs(Pt,{children:[a.jsx(de,{size:11}),P("address_street")]})]})}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"address_number",children:"Número"}),a.jsx(nt,{id:"address_number",type:"text",placeholder:"Nº",$hasError:!!P("address_number"),disabled:u,...C("address_number")}),P("address_number")&&a.jsxs(Pt,{children:[a.jsx(de,{size:11}),P("address_number")]})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"address_complement",children:"Complemento"}),a.jsx(nt,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",disabled:u,...C("address_complement")})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"address_neighborhood",children:"Bairro"}),a.jsx(nt,{id:"address_neighborhood",type:"text",placeholder:"Bairro",disabled:u,...C("address_neighborhood")})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"address_city",children:"Cidade"}),a.jsx(nt,{id:"address_city",type:"text",placeholder:"Cidade",disabled:u,...C("address_city")})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"address_state",children:"UF"}),a.jsxs(Qs,{id:"address_state",disabled:u,...C("address_state"),children:[a.jsx("option",{value:"",children:"Selecione"}),hF.map(z=>a.jsx("option",{value:z,children:z},z))]})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"address_zip",children:"CEP"}),a.jsx(nt,{id:"address_zip",type:"text",placeholder:"00000-000",$hasError:!!P("address_zip"),disabled:u,...C("address_zip",{onChange:z=>E("address_zip",yF(z.target.value))})}),P("address_zip")&&a.jsxs(Pt,{children:[a.jsx(de,{size:11}),P("address_zip")]})]})]})]}),a.jsxs(ro,{style:{marginBottom:"24px"},children:[a.jsxs(ii,{children:[a.jsx(si,{children:a.jsx($f,{size:18})}),a.jsx(ai,{children:"Conta Bancária"})]}),a.jsxs(z5,{children:[a.jsx(P5,{children:"Dados Bancários"}),W&&a.jsx(oo,{style:{marginBottom:"12px",display:"block"},children:"Agência e conta são obrigatórios quando o banco é informado."}),a.jsxs(ba,{children:[a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),a.jsx(nt,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",$hasError:!!P("bank_bank_name"),disabled:u,...C("bank_bank_name")}),P("bank_bank_name")&&a.jsxs(Pt,{children:[a.jsx(de,{size:11}),P("bank_bank_name")]})]}),a.jsxs(Ee,{children:[a.jsxs(Oe,{htmlFor:"bank_agency",children:["Agência ",W&&a.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),a.jsx(nt,{id:"bank_agency",type:"text",placeholder:"0000",$hasError:!!P("bank_agency"),disabled:u,...C("bank_agency")}),P("bank_agency")&&a.jsxs(Pt,{children:[a.jsx(de,{size:11}),P("bank_agency")]})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),a.jsx(nt,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,disabled:u,...C("bank_agency_digit")})]}),a.jsxs(Ee,{children:[a.jsxs(Oe,{htmlFor:"bank_account",children:["Conta ",W&&a.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),a.jsx(nt,{id:"bank_account",type:"text",placeholder:"000000",$hasError:!!P("bank_account"),disabled:u,...C("bank_account")}),P("bank_account")&&a.jsxs(Pt,{children:[a.jsx(de,{size:11}),P("bank_account")]})]}),a.jsxs(Ee,{children:[a.jsx(Oe,{htmlFor:"bank_account_digit",children:"Dígito Conta"}),a.jsx(nt,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,disabled:u,...C("bank_account_digit")})]}),a.jsxs(Ee,{children:[a.jsxs(Oe,{htmlFor:"bank_account_type",children:["Tipo de Conta ",W&&a.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),a.jsx(Qs,{id:"bank_account_type",$hasError:!!P("bank_account_type"),disabled:u,...C("bank_account_type"),children:pF.map(z=>a.jsx("option",{value:z.value,children:z.label},z.value))}),P("bank_account_type")&&a.jsxs(Pt,{children:[a.jsx(de,{size:11}),P("bank_account_type")]})]})]})]})]}),a.jsxs(ro,{style:{marginBottom:"24px"},children:[a.jsxs(ii,{children:[a.jsx(si,{children:a.jsx(rl,{size:18})}),a.jsx(ai,{children:"Documentos"})]}),a.jsx(oo,{style:{marginBottom:"16px",display:"block"},children:"Documentos são opcionais e podem ser adicionados depois pela edição do cliente."}),a.jsx(Y5,{children:dF.map(z=>a.jsx($F,{slot:z,selectedFile:g[z.key],onFileSelect:G,onClearFile:Z,disabled:u},z.key))})]})]})]}),a.jsxs(sF,{children:[a.jsxs(aF,{type:"button",disabled:u,onClick:()=>e("/clientes"),children:[a.jsx(Bl,{size:15})," Cancelar"]}),a.jsx(lF,{type:"submit",form:"create-client-form",$isSubmitting:u,disabled:u,children:u?a.jsxs(a.Fragment,{children:[a.jsx(cF,{}),"Cadastrando…"]}):a.jsxs(a.Fragment,{children:[a.jsx(Fx,{size:15}),"Cadastrar Cliente"]})})]})]})}const In=({title:e})=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center",justifyContent:"center",minHeight:"60vh",color:"#7a6455"},children:[a.jsx("p",{style:{fontSize:"12px",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Em construção"}),a.jsx("p",{style:{fontSize:"22px",fontWeight:"700",fontFamily:"serif"},children:e})]});function wF(){const e=window.location.hostname.includes("github.io"),t=e?Hb:Wb,n=e?{}:{basename:"/bgrepresentacoes-web/"};return a.jsxs(Jw,{theme:vh,children:[a.jsx(vS,{}),a.jsx(t,{...n,children:a.jsxs(Zk,{children:[a.jsx(fS,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",style:{fontFamily:vh.typography.fontFamily.sans}}),a.jsxs(Ab,{children:[a.jsx(Ne,{path:"/login",element:a.jsx(fj,{})}),a.jsx(Ne,{element:a.jsx(Fc,{}),children:a.jsx(Ne,{path:"/alterar-senha",element:a.jsx(Uj,{})})}),a.jsx(Ne,{element:a.jsx(Fc,{}),children:a.jsxs(Ne,{element:a.jsx(Bh,{}),children:[a.jsx(Ne,{path:"/dashboard",element:a.jsx(In,{title:"Dashboard"})}),a.jsx(Ne,{path:"/clientes",element:a.jsx(bE,{})}),a.jsx(Ne,{path:"/clientes/:id",element:a.jsx(XE,{})}),a.jsx(Ne,{path:"/clientes/:id/editar",element:a.jsx(k5,{})}),a.jsx(Ne,{path:"/onboarding",element:a.jsx(bF,{})}),a.jsx(Ne,{path:"/vendas",element:a.jsx(In,{title:"Vendas"})}),a.jsx(Ne,{path:"/vendas/:id",element:a.jsx(In,{title:"Detalhe da Venda"})}),a.jsx(Ne,{path:"/perfil",element:a.jsx(In,{title:"Meu Perfil"})})]})}),a.jsx(Ne,{element:a.jsx(Fc,{allowedRoles:["admin"]}),children:a.jsxs(Ne,{element:a.jsx(Bh,{}),children:[a.jsx(Ne,{path:"/usuarios",element:a.jsx(In,{title:"Usuários"})}),a.jsx(Ne,{path:"/bandeiras",element:a.jsx(In,{title:"Bandeiras"})}),a.jsx(Ne,{path:"/planos",element:a.jsx(In,{title:"Planos"})}),a.jsx(Ne,{path:"/relatorios",element:a.jsx(In,{title:"Relatórios"})})]})}),a.jsx(Ne,{path:"/",element:a.jsx(Ga,{to:"/dashboard",replace:!0})}),a.jsx(Ne,{path:"*",element:a.jsx(Ga,{to:"/dashboard",replace:!0})})]})]})})]})}Wc.createRoot(document.getElementById("root")).render(a.jsx(Q.StrictMode,{children:a.jsx(wF,{})}));
