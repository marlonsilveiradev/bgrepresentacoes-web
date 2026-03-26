import{c as A,a as s,p as Fe,u as Ne,b as ze,r as C,j as i,U as re,d as z}from"./index-NYSnQAlU.js";import{U as ie}from"./user-plus-1_6PNFjg.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=A("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=A("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=A("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=A("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=A("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);function y(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function O(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Oe=6048e5,Be=864e5;let Xe={};function G(){return Xe}function q(t,e){var m,f,g,x;const n=G(),a=(e==null?void 0:e.weekStartsOn)??((f=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:f.weekStartsOn)??n.weekStartsOn??((x=(g=n.locale)==null?void 0:g.options)==null?void 0:x.weekStartsOn)??0,r=y(t),o=r.getDay(),c=(o<a?7:0)+o-a;return r.setDate(r.getDate()-c),r.setHours(0,0,0,0),r}function V(t){return q(t,{weekStartsOn:1})}function Ce(t){const e=y(t),n=e.getFullYear(),a=O(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const r=V(a),o=O(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const c=V(o);return e.getTime()>=r.getTime()?n+1:e.getTime()>=c.getTime()?n:n-1}function se(t){const e=y(t);return e.setHours(0,0,0,0),e}function ce(t){const e=y(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Qe(t,e){const n=se(t),a=se(e),r=+n-ce(n),o=+a-ce(a);return Math.round((r-o)/Be)}function Ve(t){const e=Ce(t),n=O(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),V(n)}function Ge(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Ie(t){if(!Ge(t)&&typeof t!="number")return!1;const e=y(t);return!isNaN(Number(e))}function Ue(t){const e=y(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function Je(t){const e=y(t);return e.setDate(1),e.setHours(0,0,0,0),e}function Ke(t){const e=y(t),n=O(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Ze={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},et=(t,e,n)=>{let a;const r=Ze[t];return typeof r=="string"?a=r:e===1?a=r.one:a=r.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function T(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const tt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},nt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},at={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},rt={date:T({formats:tt,defaultWidth:"full"}),time:T({formats:nt,defaultWidth:"full"}),dateTime:T({formats:at,defaultWidth:"full"})},it={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ot=(t,e,n,a)=>it[t];function b(t){return(e,n)=>{const a=n!=null&&n.context?String(n.context):"standalone";let r;if(a==="formatting"&&t.formattingValues){const c=t.defaultFormattingWidth||t.defaultWidth,m=n!=null&&n.width?String(n.width):c;r=t.formattingValues[m]||t.formattingValues[c]}else{const c=t.defaultWidth,m=n!=null&&n.width?String(n.width):t.defaultWidth;r=t.values[m]||t.values[c]}const o=t.argumentCallback?t.argumentCallback(e):e;return r[o]}}const st={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ct={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},dt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ut={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},lt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},mt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ht=(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ft={ordinalNumber:ht,era:b({values:st,defaultWidth:"wide"}),quarter:b({values:ct,defaultWidth:"wide",argumentCallback:t=>t-1}),month:b({values:dt,defaultWidth:"wide"}),day:b({values:ut,defaultWidth:"wide"}),dayPeriod:b({values:lt,defaultWidth:"wide",formattingValues:mt,defaultFormattingWidth:"wide"})};function w(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const c=o[0],m=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],f=Array.isArray(m)?xt(m,p=>p.test(c)):gt(m,p=>p.test(c));let g;g=t.valueCallback?t.valueCallback(f):f,g=n.valueCallback?n.valueCallback(g):g;const x=e.slice(c.length);return{value:g,rest:x}}}function gt(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function xt(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function $e(t){return(e,n={})=>{const a=e.match(t.matchPattern);if(!a)return null;const r=a[0],o=e.match(t.parsePattern);if(!o)return null;let c=t.valueCallback?t.valueCallback(o[0]):o[0];c=n.valueCallback?n.valueCallback(c):c;const m=e.slice(r.length);return{value:c,rest:m}}}const yt=/^(\d+)(th|st|nd|rd)?/i,pt=/\d+/i,bt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},wt={any:[/^b/i,/^(a|c)/i]},vt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Mt={any:[/1/i,/2/i,/3/i,/4/i]},Pt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},jt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},kt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Dt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Wt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},St={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ot={ordinalNumber:$e({matchPattern:yt,parsePattern:pt,valueCallback:t=>parseInt(t,10)}),era:w({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:wt,defaultParseWidth:"any"}),quarter:w({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:Mt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:w({matchPatterns:Pt,defaultMatchWidth:"wide",parsePatterns:jt,defaultParseWidth:"any"}),day:w({matchPatterns:kt,defaultMatchWidth:"wide",parsePatterns:Dt,defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:Wt,defaultMatchWidth:"any",parsePatterns:St,defaultParseWidth:"any"})},Ct={code:"en-US",formatDistance:et,formatLong:rt,formatRelative:ot,localize:ft,match:Ot,options:{weekStartsOn:0,firstWeekContainsDate:1}};function $t(t){const e=y(t);return Qe(e,Ke(e))+1}function Tt(t){const e=y(t),n=+V(e)-+Ve(e);return Math.round(n/Oe)+1}function Te(t,e){var x,p,k,D;const n=y(t),a=n.getFullYear(),r=G(),o=(e==null?void 0:e.firstWeekContainsDate)??((p=(x=e==null?void 0:e.locale)==null?void 0:x.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((D=(k=r.locale)==null?void 0:k.options)==null?void 0:D.firstWeekContainsDate)??1,c=O(t,0);c.setFullYear(a+1,0,o),c.setHours(0,0,0,0);const m=q(c,e),f=O(t,0);f.setFullYear(a,0,o),f.setHours(0,0,0,0);const g=q(f,e);return n.getTime()>=m.getTime()?a+1:n.getTime()>=g.getTime()?a:a-1}function Yt(t,e){var m,f,g,x;const n=G(),a=(e==null?void 0:e.firstWeekContainsDate)??((f=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??n.firstWeekContainsDate??((x=(g=n.locale)==null?void 0:g.options)==null?void 0:x.firstWeekContainsDate)??1,r=Te(t,e),o=O(t,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),q(o,e)}function Et(t,e){const n=y(t),a=+q(n,e)-+Yt(n,e);return Math.round(a/Oe)+1}function d(t,e){const n=t<0?"-":"",a=Math.abs(t).toString().padStart(e,"0");return n+a}const j={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return d(e==="yy"?a%100:a,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):d(n+1,2)},d(t,e){return d(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return d(t.getHours()%12||12,e.length)},H(t,e){return d(t.getHours(),e.length)},m(t,e){return d(t.getMinutes(),e.length)},s(t,e){return d(t.getSeconds(),e.length)},S(t,e){const n=e.length,a=t.getMilliseconds(),r=Math.trunc(a*Math.pow(10,n-3));return d(r,e.length)}},$={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},de={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const a=t.getFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return j.y(t,e)},Y:function(t,e,n,a){const r=Te(t,a),o=r>0?r:1-r;if(e==="YY"){const c=o%100;return d(c,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):d(o,e.length)},R:function(t,e){const n=Ce(t);return d(n,e.length)},u:function(t,e){const n=t.getFullYear();return d(n,e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return d(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return d(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return j.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return d(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=Et(t,a);return e==="wo"?n.ordinalNumber(r,{unit:"week"}):d(r,e.length)},I:function(t,e,n){const a=Tt(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):d(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):j.d(t,e)},D:function(t,e,n){const a=$t(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):d(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return d(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return d(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=a===0?7:a;switch(e){case"i":return String(r);case"ii":return d(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(a===12?r=$.noon:a===0?r=$.midnight:r=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(a>=17?r=$.evening:a>=12?r=$.afternoon:a>=4?r=$.morning:r=$.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let a=t.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return j.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):j.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):d(a,e.length)},k:function(t,e,n){let a=t.getHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):d(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):j.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):j.s(t,e)},S:function(t,e){return j.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return le(a);case"XXXX":case"XX":return S(a);case"XXXXX":case"XXX":default:return S(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return le(a);case"xxxx":case"xx":return S(a);case"xxxxx":case"xxx":default:return S(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ue(a,":");case"OOOO":default:return"GMT"+S(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ue(a,":");case"zzzz":default:return"GMT"+S(a,":")}},t:function(t,e,n){const a=Math.trunc(t.getTime()/1e3);return d(a,e.length)},T:function(t,e,n){const a=t.getTime();return d(a,e.length)}};function ue(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),o=a%60;return o===0?n+String(r):n+String(r)+e+d(o,2)}function le(t,e){return t%60===0?(t>0?"-":"+")+d(Math.abs(t)/60,2):S(t,e)}function S(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=d(Math.trunc(a/60),2),o=d(a%60,2);return n+r+e+o}const me=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ye=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},qt=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return me(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",me(a,e)).replace("{{time}}",Ye(r,e))},At={p:Ye,P:qt},Ft=/^D+$/,Nt=/^Y+$/,zt=["D","DD","YY","YYYY"];function Ht(t){return Ft.test(t)}function _t(t){return Nt.test(t)}function Rt(t,e,n){const a=Lt(t,e,n);if(console.warn(a),zt.includes(t))throw new RangeError(a)}function Lt(t,e,n){const a=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Bt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Xt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Qt=/^'([^]*?)'?$/,Vt=/''/g,Gt=/[a-zA-Z]/;function Q(t,e,n){var x,p,k,D,F,N,Y,u;const a=G(),r=(n==null?void 0:n.locale)??a.locale??Ct,o=(n==null?void 0:n.firstWeekContainsDate)??((p=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:p.firstWeekContainsDate)??a.firstWeekContainsDate??((D=(k=a.locale)==null?void 0:k.options)==null?void 0:D.firstWeekContainsDate)??1,c=(n==null?void 0:n.weekStartsOn)??((N=(F=n==null?void 0:n.locale)==null?void 0:F.options)==null?void 0:N.weekStartsOn)??a.weekStartsOn??((u=(Y=a.locale)==null?void 0:Y.options)==null?void 0:u.weekStartsOn)??0,m=y(t);if(!Ie(m))throw new RangeError("Invalid time value");let f=e.match(Xt).map(l=>{const h=l[0];if(h==="p"||h==="P"){const v=At[h];return v(l,r.formatLong)}return l}).join("").match(Bt).map(l=>{if(l==="''")return{isToken:!1,value:"'"};const h=l[0];if(h==="'")return{isToken:!1,value:It(l)};if(de[h])return{isToken:!0,value:l};if(h.match(Gt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return{isToken:!1,value:l}});r.localize.preprocessor&&(f=r.localize.preprocessor(m,f));const g={firstWeekContainsDate:o,weekStartsOn:c,locale:r};return f.map(l=>{if(!l.isToken)return l.value;const h=l.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&_t(h)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Ht(h))&&Rt(h,e,String(t));const v=de[h[0]];return v(m,h,r.localize,g)}).join("")}function It(t){const e=t.match(Qt);return e?e[1].replace(Vt,"'"):t}const Ut={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 mês",other:"cerca de {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},Jt=(t,e,n)=>{let a;const r=Ut[t];return typeof r=="string"?a=r:e===1?a=r.one:a=r.other.replace("{{count}}",String(e)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"em "+a:"há "+a:a},Kt={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},Zt={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},en={full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},tn={date:T({formats:Kt,defaultWidth:"full"}),time:T({formats:Zt,defaultWidth:"full"}),dateTime:T({formats:en,defaultWidth:"full"})},nn={lastWeek:t=>{const e=t.getDay();return"'"+(e===0||e===6?"último":"última")+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"},an=(t,e,n,a)=>{const r=nn[t];return typeof r=="function"?r(e):r},rn={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},on={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},sn={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},cn={narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","terça","quarta","quinta","sexta","sábado"],wide:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},dn={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manhã",afternoon:"tarde",evening:"tarde",night:"noite"}},un={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manhã",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},ln=(t,e)=>{const n=Number(t);return(e==null?void 0:e.unit)==="week"?n+"ª":n+"º"},mn={ordinalNumber:ln,era:b({values:rn,defaultWidth:"wide"}),quarter:b({values:on,defaultWidth:"wide",argumentCallback:t=>t-1}),month:b({values:sn,defaultWidth:"wide"}),day:b({values:cn,defaultWidth:"wide"}),dayPeriod:b({values:dn,defaultWidth:"wide",formattingValues:un,defaultFormattingWidth:"wide"})},hn=/^(\d+)[ºªo]?/i,fn=/\d+/i,gn={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},xn={any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},yn={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},pn={any:[/1/i,/2/i,/3/i,/4/i]},bn={narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},wn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},vn={narrow:/^(dom|[23456]ª?|s[aá]b)/i,short:/^(dom|[23456]ª?|s[aá]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,wide:/^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i},Mn={short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[aá]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[aá]b/i]},Pn={narrow:/^(a|p|mn|md|(da) (manhã|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i},jn={any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manhã/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},kn={ordinalNumber:$e({matchPattern:hn,parsePattern:fn,valueCallback:t=>parseInt(t,10)}),era:w({matchPatterns:gn,defaultMatchWidth:"wide",parsePatterns:xn,defaultParseWidth:"any"}),quarter:w({matchPatterns:yn,defaultMatchWidth:"wide",parsePatterns:pn,defaultParseWidth:"any",valueCallback:t=>t+1}),month:w({matchPatterns:bn,defaultMatchWidth:"wide",parsePatterns:wn,defaultParseWidth:"any"}),day:w({matchPatterns:vn,defaultMatchWidth:"wide",parsePatterns:Mn,defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:Pn,defaultMatchWidth:"any",parsePatterns:jn,defaultParseWidth:"any"})},Ee={code:"pt-BR",formatDistance:Jt,formatLong:tn,formatRelative:an,localize:mn,match:kn,options:{weekStartsOn:0,firstWeekContainsDate:1}},Dn=Fe`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,he=s.div`
  animation: ${Dn} 0.3s ease-out;
  max-width: 1400px;
  margin: 0 auto;
`,fe=s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`,ge=s.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#231b15"}};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`,Wn=s.p`
  font-size: 14px;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#5e4d42"}};
  text-transform: capitalize;
`,Sn=s.div`
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
`,H=s.div`
  background: ${({theme:t})=>{var e;return((e=t.surface)==null?void 0:e.card)||"#ffffff"}};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: ${({theme:t})=>{var e;return((e=t.shadows)==null?void 0:e.sm)||"0 1px 2px rgba(0,0,0,0.05)"}};
  border: 1px solid ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.default)||"#e4d9cf"}};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:t})=>{var e;return((e=t.shadows)==null?void 0:e.md)||"0 4px 6px rgba(0,0,0,0.1)"}};
  }
`,_=s.div`
  width: 52px;
  height: 52px;
  background: ${({$color:t})=>`${t}15`};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$color:t})=>t};
`,R=s.div`
  flex: 1;
`,L=s.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#231b15"}};
  line-height: 1.2;
  margin-bottom: 4px;
`,B=s.div`
  font-size: 13px;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#5e4d42"}};
`,On=s.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Cn=s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,$n=s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,J=s.div`
  background: ${({theme:t})=>{var e;return((e=t.surface)==null?void 0:e.card)||"#ffffff"}};
  border-radius: 16px;
  padding: 20px;
  border: 1px solid ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.default)||"#e4d9cf"}};
  box-shadow: ${({theme:t})=>{var e;return((e=t.shadows)==null?void 0:e.sm)||"0 1px 2px rgba(0,0,0,0.05)"}};
`,K=s.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#231b15"}};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`,xe=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ye=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 12px;
  background: ${({theme:t})=>{var e;return((e=t.surface)==null?void 0:e.page)||"#faf7f5"}};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:t})=>{var e,n;return((n=(e=t.colors)==null?void 0:e.neutral)==null?void 0:n[100])||"#f2ece6"}};
    transform: translateX(4px);
  }
`,pe=s.div`
  width: 36px;
  height: 36px;
  background: ${({$color:t})=>`${t}15`};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$color:t})=>t};
  flex-shrink: 0;
`,be=s.div`
  flex: 1;
  min-width: 0;
`,we=s.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#231b15"}};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ve=s.div`
  font-size: 11px;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.muted)||"#96806e"}};
`,Me=s.div`
  text-align: center;
  padding: 32px;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.muted)||"#96806e"}};
  font-size: 14px;
`,Pe=s.span`
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({$status:t,theme:e})=>{var n,a,r;switch(t){case"approved":return((n=e.success)==null?void 0:n.light)||"#dcfce7";case"analysis":return((a=e.info)==null?void 0:a.light)||"#dbeafe";default:return((r=e.warning)==null?void 0:r.light)||"#fef3c7"}}};
  color: ${({$status:t,theme:e})=>{var n,a,r;switch(t){case"approved":return((n=e.success)==null?void 0:n.dark)||"#166534";case"analysis":return((a=e.info)==null?void 0:a.dark)||"#1e40af";default:return((r=e.warning)==null?void 0:r.dark)||"#92400e"}}};
  white-space: nowrap;
  flex-shrink: 0;
`,Tn=s.div`
  margin-top: 8px;
`;s.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#5e4d42"}};
  margin-bottom: 12px;
`;const Yn=s.div`
  background: ${({theme:t})=>{var e,n;return((n=(e=t.colors)==null?void 0:e.neutral)==null?void 0:n[100])||"#f2ece6"}};
  border-radius: 8px;
  overflow: hidden;
`,En=s.div`
  height: 8px;
  width: ${({$percentage:t})=>t}%;
  background: ${({$color:t})=>t};
  border-radius: 8px;
  transition: width 0.3s ease;
`,qn=s.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.default)||"#e4d9cf"}};
`,je=s.div`
  text-align: center;
  flex: 1;
`,ke=s.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#231b15"}};
`,De=s.div`
  font-size: 11px;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.muted)||"#96806e"}};
  margin-top: 4px;
`,An=s.div`
  background: linear-gradient(
    135deg, 
    ${({theme:t})=>{var e,n;return((n=(e=t.colors)==null?void 0:e.neutral)==null?void 0:n[800])||"#3d3028"}} 0%, 
    ${({theme:t})=>{var e,n;return((n=(e=t.colors)==null?void 0:e.neutral)==null?void 0:n[900])||"#231b15"}} 100%
  );
  border-radius: 16px;
  padding: 20px;
  color: white;
`,Fn=s.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({theme:t})=>{var e,n;return((n=(e=t.colors)==null?void 0:e.neutral)==null?void 0:n[200])||"#e4d9cf"}};
`,Nn=s.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,X=s.button`
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
  color: ${({theme:t})=>{var e,n;return((n=(e=t.colors)==null?void 0:e.neutral)==null?void 0:n[200])||"#e4d9cf"}};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(4px);
    color: white;
  }
`,We=t=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t||0),Se=t=>t?Q(new Date(t),"dd 'de' MMMM",{locale:Ee}):"",zn=()=>{const t=new Date().getHours();return t<12?"Bom dia":t<18?"Boa tarde":"Boa noite"},Z={pending:{label:"Pendente",color:"#d97706"},analysis:{label:"Em análise",color:"#2563eb"},approved:{label:"Aprovado",color:"#059669"},cancelled:{label:"Cancelado",color:"#dc2626"}};function Rn(){var Y;const t=Ne(),{user:e,isAdmin:n,isUser:a}=ze(),[r,o]=C.useState(!0),[c,m]=C.useState({totalClients:0,totalSales:0,clientsInAnalysis:0,approvalRate:0}),[f,g]=C.useState([]),[x,p]=C.useState([]),[k,D]=C.useState({pending:0,analysis:0,approved:0}),F=zn(),N=Q(new Date,"EEEE, dd 'de' MMMM 'de' yyyy",{locale:Ee});return C.useEffect(()=>{(async()=>{var l,h,v,M,ee;o(!0);try{const I=Q(Je(new Date),"yyyy-MM-dd"),qe=Q(Ue(new Date),"yyyy-MM-dd"),P=await Promise.allSettled([z.get("/clients",{params:{limit:"100"}}),z.get("/reports/sales",{params:{date_start:I,date_end:qe}}),z.get("/clients",{params:{limit:"5"}}),z.get("/sales")]);let E=[];P[0].status==="fulfilled"&&(E=((l=P[0].value.data)==null?void 0:l.data)||[]);let te=0;if(P[1].status==="fulfilled"&&(te=((v=(h=P[1].value.data)==null?void 0:h.summary)==null?void 0:v.total_value)||0),P[2].status==="fulfilled"&&g(((M=P[2].value.data)==null?void 0:M.data)||[]),P[3].status==="fulfilled"){const W=((ee=P[3].value.data)==null?void 0:ee.data)||[];p(W)}else console.error("Erro ao carregar vendas recentes:",P[3].reason),p([]);const U=E.length,ne=E.filter(W=>W.overall_status==="analysis").length,ae=E.filter(W=>W.overall_status==="approved").length,Ae=U>0?ae/U*100:0;D({pending:E.filter(W=>W.overall_status==="pending").length,analysis:ne,approved:ae}),m({totalClients:U,totalSales:te,clientsInAnalysis:ne,approvalRate:Math.round(Ae)})}catch(I){console.error("Erro ao carregar dashboard:",I)}finally{o(!1)}})()},[]),r?i.jsx(he,{children:i.jsx(fe,{children:i.jsx(ge,{children:"Carregando dashboard..."})})}):i.jsxs(he,{children:[i.jsx(fe,{children:i.jsxs("div",{children:[i.jsxs(ge,{children:[F,", ",((Y=e==null?void 0:e.name)==null?void 0:Y.split(" ")[0])||"Usuário","!"]}),i.jsx(Wn,{children:N})]})}),i.jsxs(Sn,{children:[i.jsxs(H,{children:[i.jsx(_,{$color:"#B45A14",children:i.jsx(re,{size:24})}),i.jsxs(R,{children:[i.jsx(L,{children:c.totalClients}),i.jsx(B,{children:"Total de Clientes"})]})]}),i.jsxs(H,{children:[i.jsx(_,{$color:"#059669",children:i.jsx(Le,{size:24})}),i.jsxs(R,{children:[i.jsx(L,{children:We(c.totalSales)}),i.jsx(B,{children:"Vendas no Mês"})]})]}),i.jsxs(H,{children:[i.jsx(_,{$color:"#2563eb",children:i.jsx(Re,{size:24})}),i.jsxs(R,{children:[i.jsx(L,{children:c.clientsInAnalysis}),i.jsx(B,{children:"Em Análise"})]})]}),i.jsxs(H,{children:[i.jsx(_,{$color:"#8b5cf6",children:i.jsx(oe,{size:24})}),i.jsxs(R,{children:[i.jsxs(L,{children:[c.approvalRate,"%"]}),i.jsx(B,{children:"Taxa de Aprovação"})]})]})]}),i.jsxs(On,{children:[i.jsxs(Cn,{children:[i.jsxs(J,{children:[i.jsx(K,{children:"Distribuição de Clientes"}),i.jsxs(Tn,{children:[Object.entries(k).map(([u,l])=>{const h=c.totalClients||1,v=l/h*100,M=Z[u];return i.jsxs("div",{style:{marginBottom:"16px"},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[i.jsx("span",{style:{fontSize:"12px",color:"#7a6455"},children:(M==null?void 0:M.label)||u}),i.jsxs("span",{style:{fontSize:"12px",fontWeight:500,color:"#5e4d42"},children:[l," (",Math.round(v),"%)"]})]}),i.jsx(Yn,{children:i.jsx(En,{$percentage:v,$color:M==null?void 0:M.color})})]},u)}),i.jsxs(qn,{children:[i.jsxs(je,{children:[i.jsx(ke,{children:c.totalClients}),i.jsx(De,{children:"Total"})]}),i.jsxs(je,{children:[i.jsxs(ke,{children:[c.approvalRate,"%"]}),i.jsx(De,{children:"Aprovados"})]})]})]})]}),i.jsxs(J,{children:[i.jsx(K,{children:"Últimos Clientes"}),f.length>0?i.jsx(xe,{children:f.map(u=>{var l;return i.jsxs(ye,{onClick:()=>t(`/clientes/${u.id}`),children:[i.jsx(pe,{$color:"#B45A14",children:i.jsx(ie,{size:16})}),i.jsxs(be,{children:[i.jsx(we,{children:u.corporate_name}),i.jsxs(ve,{children:["Cadastrado em ",Se(u.createdAt)]})]}),i.jsx(Pe,{$status:u.overall_status,children:((l=Z[u.overall_status])==null?void 0:l.label)||u.overall_status})]},u.id)})}):i.jsx(Me,{children:"Nenhum cliente cadastrado."})]})]}),i.jsxs($n,{children:[i.jsxs(J,{children:[i.jsx(K,{children:"Últimas Vendas"}),x.length>0?i.jsx(xe,{children:x.map(u=>{var l,h;return i.jsxs(ye,{onClick:()=>t(`/clientes/${u.client_id}`),children:[i.jsx(pe,{$color:"#059669",children:i.jsx(oe,{size:16})}),i.jsxs(be,{children:[i.jsxs(we,{children:[((l=u.client)==null?void 0:l.corporate_name)||"Venda"," - ",We(u.total_value)]}),i.jsxs(ve,{children:[u.plan_name||"Serviço"," • ",Se(u.createdAt)]})]}),i.jsx(Pe,{$status:u.status,children:((h=Z[u.status])==null?void 0:h.label)||u.status})]},u.id)})}):i.jsx(Me,{children:"Nenhuma venda registrada."})]}),i.jsxs(An,{children:[i.jsx(Fn,{children:"Ações Rápidas"}),i.jsxs(Nn,{children:[(n||a)&&i.jsxs(i.Fragment,{children:[i.jsxs(X,{onClick:()=>t("/onboarding"),children:[i.jsx(ie,{size:18})," Novo Cliente"]}),i.jsxs(X,{onClick:()=>t("/clientes"),children:[i.jsx(re,{size:18})," Ver Clientes"]})]}),n&&i.jsxs(X,{onClick:()=>t("/relatorios"),children:[i.jsx(He,{size:18})," Relatórios"]}),i.jsxs(X,{onClick:()=>t("/perfil"),children:[i.jsx(_e,{size:18})," Meu Perfil"]})]})]})]})]})]})}export{Rn as default};
