import{c as dr,a as D,p as Fr,u as Wr,b as qr,e as Qr,r as je,j as p,B as We,f as Gr,g as Vr,d as ir}from"./index-BIkF9nUC.js";import{u as Kr}from"./index.esm-DbWmM1XM.js";import{o as Zr,a as Yr,c as te}from"./index.esm-B4Q6Jri4.js";import{u as ar}from"./useQuery-BF08WLTa.js";import{A as Xr,B as Jr,M as et,L as rt,F as tt}from"./map-pin-Fzd7ceSd.js";import{C as ye,X as nt}from"./x-DBZvM3s1.js";import{S as ot,F as it,T as at,U as st}from"./upload-CdEfTcuP.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=dr("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=dr("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=dr("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);function dt(e,m){return m.forEach(function(T){T&&typeof T!="string"&&!Array.isArray(T)&&Object.keys(T).forEach(function(h){if(h!=="default"&&!(h in e)){var r=Object.getOwnPropertyDescriptor(T,h);Object.defineProperty(e,h,r.get?r:{enumerable:!0,get:function(){return T[h]}})}})}),Object.freeze(e)}function Cr(e,m){return new Promise(function(T,h){let r;return ft(e).then(function(t){try{return r=t,T(new Blob([m.slice(0,2),r,m.slice(2)],{type:"image/jpeg"}))}catch(c){return h(c)}},h)})}const ft=e=>new Promise((m,T)=>{const h=new FileReader;h.addEventListener("load",({target:{result:r}})=>{const t=new DataView(r);let c=0;if(t.getUint16(c)!==65496)return T("not a valid JPEG");for(c+=2;;){const s=t.getUint16(c);if(s===65498)break;const x=t.getUint16(c+2);if(s===65505&&t.getUint32(c+4)===1165519206){const j=c+10;let n;switch(t.getUint16(j)){case 18761:n=!0;break;case 19789:n=!1;break;default:return T("TIFF header contains invalid endian")}if(t.getUint16(j+2,n)!==42)return T("TIFF header contains invalid version");const i=t.getUint32(j+4,n),o=j+i+2+12*t.getUint16(j+i,n);for(let l=j+i+2;l<o;l+=12)if(t.getUint16(l,n)==274){if(t.getUint16(l+2,n)!==3)return T("Orientation data type is invalid");if(t.getUint32(l+4,n)!==1)return T("Orientation data count is invalid");t.setUint16(l+8,1,n);break}return m(r.slice(c,c+2+x))}c+=2+x}return m(new Blob)}),h.readAsArrayBuffer(e)});var Xe={},ut={get exports(){return Xe},set exports(e){Xe=e}};(function(e){var m,T,h={};ut.exports=h,h.parse=function(r,t){for(var c=h.bin.readUshort,s=h.bin.readUint,x=0,j={},n=new Uint8Array(r),i=n.length-4;s(n,i)!=101010256;)i--;x=i,x+=4;var o=c(n,x+=4);c(n,x+=2);var l=s(n,x+=2),g=s(n,x+=4);x+=4,x=g;for(var k=0;k<o;k++){s(n,x),x+=4,x+=4,x+=4,s(n,x+=4),l=s(n,x+=4);var E=s(n,x+=4),_=c(n,x+=4),B=c(n,x+2),P=c(n,x+4);x+=6;var U=s(n,x+=8);x+=4,x+=_+B+P,h._readLocal(n,U,j,l,E,t)}return j},h._readLocal=function(r,t,c,s,x,j){var n=h.bin.readUshort,i=h.bin.readUint;i(r,t),n(r,t+=4),n(r,t+=2);var o=n(r,t+=2);i(r,t+=2),i(r,t+=4),t+=4;var l=n(r,t+=8),g=n(r,t+=2);t+=2;var k=h.bin.readUTF8(r,t,l);if(t+=l,t+=g,j)c[k]={size:x,csize:s};else{var E=new Uint8Array(r.buffer,t);if(o==0)c[k]=new Uint8Array(E.buffer.slice(t,t+s));else{if(o!=8)throw"unknown compression method: "+o;var _=new Uint8Array(x);h.inflateRaw(E,_),c[k]=_}}},h.inflateRaw=function(r,t){return h.F.inflate(r,t)},h.inflate=function(r,t){return r[0],r[1],h.inflateRaw(new Uint8Array(r.buffer,r.byteOffset+2,r.length-6),t)},h.deflate=function(r,t){t==null&&(t={level:6});var c=0,s=new Uint8Array(50+Math.floor(1.1*r.length));s[c]=120,s[c+1]=156,c+=2,c=h.F.deflateRaw(r,s,c,t.level);var x=h.adler(r,0,r.length);return s[c+0]=x>>>24&255,s[c+1]=x>>>16&255,s[c+2]=x>>>8&255,s[c+3]=x>>>0&255,new Uint8Array(s.buffer,0,c+4)},h.deflateRaw=function(r,t){t==null&&(t={level:6});var c=new Uint8Array(50+Math.floor(1.1*r.length)),s=h.F.deflateRaw(r,c,s,t.level);return new Uint8Array(c.buffer,0,s)},h.encode=function(r,t){t==null&&(t=!1);var c=0,s=h.bin.writeUint,x=h.bin.writeUshort,j={};for(var n in r){var i=!h._noNeed(n)&&!t,o=r[n],l=h.crc.crc(o,0,o.length);j[n]={cpr:i,usize:o.length,crc:l,file:i?h.deflateRaw(o):o}}for(var n in j)c+=j[n].file.length+30+46+2*h.bin.sizeUTF8(n);c+=22;var g=new Uint8Array(c),k=0,E=[];for(var n in j){var _=j[n];E.push(k),k=h._writeHeader(g,k,n,_,0)}var B=0,P=k;for(var n in j)_=j[n],E.push(k),k=h._writeHeader(g,k,n,_,1,E[B++]);var U=k-P;return s(g,k,101010256),k+=4,x(g,k+=4,B),x(g,k+=2,B),s(g,k+=2,U),s(g,k+=4,P),k+=4,k+=2,g.buffer},h._noNeed=function(r){var t=r.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(t)!=-1},h._writeHeader=function(r,t,c,s,x,j){var n=h.bin.writeUint,i=h.bin.writeUshort,o=s.file;return n(r,t,x==0?67324752:33639248),t+=4,x==1&&(t+=2),i(r,t,20),i(r,t+=2,0),i(r,t+=2,s.cpr?8:0),n(r,t+=2,0),n(r,t+=4,s.crc),n(r,t+=4,o.length),n(r,t+=4,s.usize),i(r,t+=4,h.bin.sizeUTF8(c)),i(r,t+=2,0),t+=2,x==1&&(t+=2,t+=2,n(r,t+=6,j),t+=4),t+=h.bin.writeUTF8(r,t,c),x==0&&(r.set(o,t),t+=o.length),t},h.crc={table:function(){for(var r=new Uint32Array(256),t=0;t<256;t++){for(var c=t,s=0;s<8;s++)1&c?c=3988292384^c>>>1:c>>>=1;r[t]=c}return r}(),update:function(r,t,c,s){for(var x=0;x<s;x++)r=h.crc.table[255&(r^t[c+x])]^r>>>8;return r},crc:function(r,t,c){return 4294967295^h.crc.update(4294967295,r,t,c)}},h.adler=function(r,t,c){for(var s=1,x=0,j=t,n=t+c;j<n;){for(var i=Math.min(j+5552,n);j<i;)x+=s+=r[j++];s%=65521,x%=65521}return x<<16|s},h.bin={readUshort:function(r,t){return r[t]|r[t+1]<<8},writeUshort:function(r,t,c){r[t]=255&c,r[t+1]=c>>8&255},readUint:function(r,t){return 16777216*r[t+3]+(r[t+2]<<16|r[t+1]<<8|r[t])},writeUint:function(r,t,c){r[t]=255&c,r[t+1]=c>>8&255,r[t+2]=c>>16&255,r[t+3]=c>>24&255},readASCII:function(r,t,c){for(var s="",x=0;x<c;x++)s+=String.fromCharCode(r[t+x]);return s},writeASCII:function(r,t,c){for(var s=0;s<c.length;s++)r[t+s]=c.charCodeAt(s)},pad:function(r){return r.length<2?"0"+r:r},readUTF8:function(r,t,c){for(var s,x="",j=0;j<c;j++)x+="%"+h.bin.pad(r[t+j].toString(16));try{s=decodeURIComponent(x)}catch{return h.bin.readASCII(r,t,c)}return s},writeUTF8:function(r,t,c){for(var s=c.length,x=0,j=0;j<s;j++){var n=c.charCodeAt(j);if(!(4294967168&n))r[t+x]=n,x++;else if(!(4294965248&n))r[t+x]=192|n>>6,r[t+x+1]=128|n>>0&63,x+=2;else if(!(4294901760&n))r[t+x]=224|n>>12,r[t+x+1]=128|n>>6&63,r[t+x+2]=128|n>>0&63,x+=3;else{if(4292870144&n)throw"e";r[t+x]=240|n>>18,r[t+x+1]=128|n>>12&63,r[t+x+2]=128|n>>6&63,r[t+x+3]=128|n>>0&63,x+=4}}return x},sizeUTF8:function(r){for(var t=r.length,c=0,s=0;s<t;s++){var x=r.charCodeAt(s);if(!(4294967168&x))c++;else if(!(4294965248&x))c+=2;else if(!(4294901760&x))c+=3;else{if(4292870144&x)throw"e";c+=4}}return c}},h.F={},h.F.deflateRaw=function(r,t,c,s){var x=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][s],j=h.F.U,n=h.F._goodIndex;h.F._hash;var i=h.F._putsE,o=0,l=c<<3,g=0,k=r.length;if(s==0){for(;o<k;)i(t,l,o+(A=Math.min(65535,k-o))==k?1:0),l=h.F._copyExact(r,o,A,t,l+8),o+=A;return l>>>3}var E=j.lits,_=j.strt,B=j.prev,P=0,U=0,O=0,v=0,I=0,u=0;for(k>2&&(_[u=h.F._hash(r,0)]=0),o=0;o<k;o++){if(I=u,o+1<k-2){u=h.F._hash(r,o+1);var d=o+1&32767;B[d]=_[u],_[u]=d}if(g<=o){(P>14e3||U>26697)&&k-o>100&&(g<o&&(E[P]=o-g,P+=2,g=o),l=h.F._writeBlock(o==k-1||g==k?1:0,E,P,v,r,O,o-O,t,l),P=U=v=0,O=o);var b=0;o<k-2&&(b=h.F._bestMatch(r,o,B,I,Math.min(x[2],k-o),x[3]));var A=b>>>16,w=65535&b;if(b!=0){w=65535&b;var F=n(A=b>>>16,j.of0);j.lhst[257+F]++;var $=n(w,j.df0);j.dhst[$]++,v+=j.exb[F]+j.dxb[$],E[P]=A<<23|o-g,E[P+1]=w<<16|F<<8|$,P+=2,g=o+A}else j.lhst[r[o]]++;U++}}for(O==o&&r.length!=0||(g<o&&(E[P]=o-g,P+=2,g=o),l=h.F._writeBlock(1,E,P,v,r,O,o-O,t,l),P=0,U=0,P=U=v=0,O=o);7&l;)l++;return l>>>3},h.F._bestMatch=function(r,t,c,s,x,j){var n=32767&t,i=c[n],o=n-i+32768&32767;if(i==n||s!=h.F._hash(r,t-o))return 0;for(var l=0,g=0,k=Math.min(32767,t);o<=k&&--j!=0&&i!=n;){if(l==0||r[t+l]==r[t+l-o]){var E=h.F._howLong(r,t,o);if(E>l){if(g=o,(l=E)>=x)break;o+2<E&&(E=o+2);for(var _=0,B=0;B<E-2;B++){var P=t-o+B+32768&32767,U=P-c[P]+32768&32767;U>_&&(_=U,i=P)}}}o+=(n=i)-(i=c[n])+32768&32767}return l<<16|g},h.F._howLong=function(r,t,c){if(r[t]!=r[t-c]||r[t+1]!=r[t+1-c]||r[t+2]!=r[t+2-c])return 0;var s=t,x=Math.min(r.length,t+258);for(t+=3;t<x&&r[t]==r[t-c];)t++;return t-s},h.F._hash=function(r,t){return(r[t]<<8|r[t+1])+(r[t+2]<<4)&65535},h.saved=0,h.F._writeBlock=function(r,t,c,s,x,j,n,i,o){var l,g,k,E,_,B,P,U,O,v=h.F.U,I=h.F._putsF,u=h.F._putsE;v.lhst[256]++,g=(l=h.F.getTrees())[0],k=l[1],E=l[2],_=l[3],B=l[4],P=l[5],U=l[6],O=l[7];var d=32+(o+3&7?8-(o+3&7):0)+(n<<3),b=s+h.F.contSize(v.fltree,v.lhst)+h.F.contSize(v.fdtree,v.dhst),A=s+h.F.contSize(v.ltree,v.lhst)+h.F.contSize(v.dtree,v.dhst);A+=14+3*P+h.F.contSize(v.itree,v.ihst)+(2*v.ihst[16]+3*v.ihst[17]+7*v.ihst[18]);for(var w=0;w<286;w++)v.lhst[w]=0;for(w=0;w<30;w++)v.dhst[w]=0;for(w=0;w<19;w++)v.ihst[w]=0;var F=d<b&&d<A?0:b<A?1:2;if(I(i,o,r),I(i,o+1,F),o+=3,F==0){for(;7&o;)o++;o=h.F._copyExact(x,j,n,i,o)}else{var $,S;if(F==1&&($=v.fltree,S=v.fdtree),F==2){h.F.makeCodes(v.ltree,g),h.F.revCodes(v.ltree,g),h.F.makeCodes(v.dtree,k),h.F.revCodes(v.dtree,k),h.F.makeCodes(v.itree,E),h.F.revCodes(v.itree,E),$=v.ltree,S=v.dtree,u(i,o,_-257),u(i,o+=5,B-1),u(i,o+=5,P-4),o+=4;for(var f=0;f<P;f++)u(i,o+3*f,v.itree[1+(v.ordr[f]<<1)]);o+=3*P,o=h.F._codeTiny(U,v.itree,i,o),o=h.F._codeTiny(O,v.itree,i,o)}for(var a=j,R=0;R<c;R+=2){for(var C=t[R],M=C>>>23,W=a+(8388607&C);a<W;)o=h.F._writeLit(x[a++],$,i,o);if(M!=0){var L=t[R+1],H=L>>16,z=L>>8&255,y=255&L;u(i,o=h.F._writeLit(257+z,$,i,o),M-v.of0[z]),o+=v.exb[z],I(i,o=h.F._writeLit(y,S,i,o),H-v.df0[y]),o+=v.dxb[y],a+=M}}o=h.F._writeLit(256,$,i,o)}return o},h.F._copyExact=function(r,t,c,s,x){var j=x>>>3;return s[j]=c,s[j+1]=c>>>8,s[j+2]=255-s[j],s[j+3]=255-s[j+1],j+=4,s.set(new Uint8Array(r.buffer,t,c),j),x+(c+4<<3)},h.F.getTrees=function(){for(var r=h.F.U,t=h.F._hufTree(r.lhst,r.ltree,15),c=h.F._hufTree(r.dhst,r.dtree,15),s=[],x=h.F._lenCodes(r.ltree,s),j=[],n=h.F._lenCodes(r.dtree,j),i=0;i<s.length;i+=2)r.ihst[s[i]]++;for(i=0;i<j.length;i+=2)r.ihst[j[i]]++;for(var o=h.F._hufTree(r.ihst,r.itree,7),l=19;l>4&&r.itree[1+(r.ordr[l-1]<<1)]==0;)l--;return[t,c,o,x,n,l,s,j]},h.F.getSecond=function(r){for(var t=[],c=0;c<r.length;c+=2)t.push(r[c+1]);return t},h.F.nonZero=function(r){for(var t="",c=0;c<r.length;c+=2)r[c+1]!=0&&(t+=(c>>1)+",");return t},h.F.contSize=function(r,t){for(var c=0,s=0;s<t.length;s++)c+=t[s]*r[1+(s<<1)];return c},h.F._codeTiny=function(r,t,c,s){for(var x=0;x<r.length;x+=2){var j=r[x],n=r[x+1];s=h.F._writeLit(j,t,c,s);var i=j==16?2:j==17?3:7;j>15&&(h.F._putsE(c,s,n,i),s+=i)}return s},h.F._lenCodes=function(r,t){for(var c=r.length;c!=2&&r[c-1]==0;)c-=2;for(var s=0;s<c;s+=2){var x=r[s+1],j=s+3<c?r[s+3]:-1,n=s+5<c?r[s+5]:-1,i=s==0?-1:r[s-1];if(x==0&&j==x&&n==x){for(var o=s+5;o+2<c&&r[o+2]==x;)o+=2;(l=Math.min(o+1-s>>>1,138))<11?t.push(17,l-3):t.push(18,l-11),s+=2*l-2}else if(x==i&&j==x&&n==x){for(o=s+5;o+2<c&&r[o+2]==x;)o+=2;var l=Math.min(o+1-s>>>1,6);t.push(16,l-3),s+=2*l-2}else t.push(x,0)}return c>>>1},h.F._hufTree=function(r,t,c){var s=[],x=r.length,j=t.length,n=0;for(n=0;n<j;n+=2)t[n]=0,t[n+1]=0;for(n=0;n<x;n++)r[n]!=0&&s.push({lit:n,f:r[n]});var i=s.length,o=s.slice(0);if(i==0)return 0;if(i==1){var l=s[0].lit;return o=l==0?1:0,t[1+(l<<1)]=1,t[1+(o<<1)]=1,1}s.sort(function(U,O){return U.f-O.f});var g=s[0],k=s[1],E=0,_=1,B=2;for(s[0]={lit:-1,f:g.f+k.f,l:g,r:k,d:0};_!=i-1;)g=E!=_&&(B==i||s[E].f<s[B].f)?s[E++]:s[B++],k=E!=_&&(B==i||s[E].f<s[B].f)?s[E++]:s[B++],s[_++]={lit:-1,f:g.f+k.f,l:g,r:k};var P=h.F.setDepth(s[_-1],0);for(P>c&&(h.F.restrictDepth(o,c,P),P=c),n=0;n<i;n++)t[1+(o[n].lit<<1)]=o[n].d;return P},h.F.setDepth=function(r,t){return r.lit!=-1?(r.d=t,t):Math.max(h.F.setDepth(r.l,t+1),h.F.setDepth(r.r,t+1))},h.F.restrictDepth=function(r,t,c){var s=0,x=1<<c-t,j=0;for(r.sort(function(i,o){return o.d==i.d?i.f-o.f:o.d-i.d}),s=0;s<r.length&&r[s].d>t;s++){var n=r[s].d;r[s].d=t,j+=x-(1<<c-n)}for(j>>>=c-t;j>0;)(n=r[s].d)<t?(r[s].d++,j-=1<<t-n-1):s++;for(;s>=0;s--)r[s].d==t&&j<0&&(r[s].d--,j++);j!=0&&console.log("debt left")},h.F._goodIndex=function(r,t){var c=0;return t[16|c]<=r&&(c|=16),t[8|c]<=r&&(c|=8),t[4|c]<=r&&(c|=4),t[2|c]<=r&&(c|=2),t[1|c]<=r&&(c|=1),c},h.F._writeLit=function(r,t,c,s){return h.F._putsF(c,s,t[r<<1]),s+t[1+(r<<1)]},h.F.inflate=function(r,t){var c=Uint8Array;if(r[0]==3&&r[1]==0)return t||new c(0);var s=h.F,x=s._bitsF,j=s._bitsE,n=s._decodeTiny,i=s.makeCodes,o=s.codes2map,l=s._get17,g=s.U,k=t==null;k&&(t=new c(r.length>>>2<<3));for(var E,_,B=0,P=0,U=0,O=0,v=0,I=0,u=0,d=0,b=0;B==0;)if(B=x(r,b,1),P=x(r,b+1,2),b+=3,P!=0){if(k&&(t=h.F._check(t,d+(1<<17))),P==1&&(E=g.flmap,_=g.fdmap,I=511,u=31),P==2){U=j(r,b,5)+257,O=j(r,b+5,5)+1,v=j(r,b+10,4)+4,b+=14;for(var A=0;A<38;A+=2)g.itree[A]=0,g.itree[A+1]=0;var w=1;for(A=0;A<v;A++){var F=j(r,b+3*A,3);g.itree[1+(g.ordr[A]<<1)]=F,F>w&&(w=F)}b+=3*v,i(g.itree,w),o(g.itree,w,g.imap),E=g.lmap,_=g.dmap,b=n(g.imap,(1<<w)-1,U+O,r,b,g.ttree);var $=s._copyOut(g.ttree,0,U,g.ltree);I=(1<<$)-1;var S=s._copyOut(g.ttree,U,O,g.dtree);u=(1<<S)-1,i(g.ltree,$),o(g.ltree,$,E),i(g.dtree,S),o(g.dtree,S,_)}for(;;){var f=E[l(r,b)&I];b+=15&f;var a=f>>>4;if(!(a>>>8))t[d++]=a;else{if(a==256)break;var R=d+a-254;if(a>264){var C=g.ldef[a-257];R=d+(C>>>3)+j(r,b,7&C),b+=7&C}var M=_[l(r,b)&u];b+=15&M;var W=M>>>4,L=g.ddef[W],H=(L>>>4)+x(r,b,15&L);for(b+=15&L,k&&(t=h.F._check(t,d+(1<<17)));d<R;)t[d]=t[d++-H],t[d]=t[d++-H],t[d]=t[d++-H],t[d]=t[d++-H];d=R}}}else{7&b&&(b+=8-(7&b));var z=4+(b>>>3),y=r[z-4]|r[z-3]<<8;k&&(t=h.F._check(t,d+y)),t.set(new c(r.buffer,r.byteOffset+z,y),d),b=z+y<<3,d+=y}return t.length==d?t:t.slice(0,d)},h.F._check=function(r,t){var c=r.length;if(t<=c)return r;var s=new Uint8Array(Math.max(c<<1,t));return s.set(r,0),s},h.F._decodeTiny=function(r,t,c,s,x,j){for(var n=h.F._bitsE,i=h.F._get17,o=0;o<c;){var l=r[i(s,x)&t];x+=15&l;var g=l>>>4;if(g<=15)j[o]=g,o++;else{var k=0,E=0;g==16?(E=3+n(s,x,2),x+=2,k=j[o-1]):g==17?(E=3+n(s,x,3),x+=3):g==18&&(E=11+n(s,x,7),x+=7);for(var _=o+E;o<_;)j[o]=k,o++}}return x},h.F._copyOut=function(r,t,c,s){for(var x=0,j=0,n=s.length>>>1;j<c;){var i=r[j+t];s[j<<1]=0,s[1+(j<<1)]=i,i>x&&(x=i),j++}for(;j<n;)s[j<<1]=0,s[1+(j<<1)]=0,j++;return x},h.F.makeCodes=function(r,t){for(var c,s,x,j,n=h.F.U,i=r.length,o=n.bl_count,l=0;l<=t;l++)o[l]=0;for(l=1;l<i;l+=2)o[r[l]]++;var g=n.next_code;for(c=0,o[0]=0,s=1;s<=t;s++)c=c+o[s-1]<<1,g[s]=c;for(x=0;x<i;x+=2)(j=r[x+1])!=0&&(r[x]=g[j],g[j]++)},h.F.codes2map=function(r,t,c){for(var s=r.length,x=h.F.U.rev15,j=0;j<s;j+=2)if(r[j+1]!=0)for(var n=j>>1,i=r[j+1],o=n<<4|i,l=t-i,g=r[j]<<l,k=g+(1<<l);g!=k;)c[x[g]>>>15-t]=o,g++},h.F.revCodes=function(r,t){for(var c=h.F.U.rev15,s=15-t,x=0;x<r.length;x+=2){var j=r[x]<<t-r[x+1];r[x]=c[j]>>>s}},h.F._putsE=function(r,t,c){c<<=7&t;var s=t>>>3;r[s]|=c,r[s+1]|=c>>>8},h.F._putsF=function(r,t,c){c<<=7&t;var s=t>>>3;r[s]|=c,r[s+1]|=c>>>8,r[s+2]|=c>>>16},h.F._bitsE=function(r,t,c){return(r[t>>>3]|r[1+(t>>>3)]<<8)>>>(7&t)&(1<<c)-1},h.F._bitsF=function(r,t,c){return(r[t>>>3]|r[1+(t>>>3)]<<8|r[2+(t>>>3)]<<16)>>>(7&t)&(1<<c)-1},h.F._get17=function(r,t){return(r[t>>>3]|r[1+(t>>>3)]<<8|r[2+(t>>>3)]<<16)>>>(7&t)},h.F._get25=function(r,t){return(r[t>>>3]|r[1+(t>>>3)]<<8|r[2+(t>>>3)]<<16|r[3+(t>>>3)]<<24)>>>(7&t)},h.F.U=(m=Uint16Array,T=Uint32Array,{next_code:new m(16),bl_count:new m(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new m(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new T(32),flmap:new m(512),fltree:[],fdmap:new m(32),fdtree:[],lmap:new m(32768),ltree:[],ttree:[],dmap:new m(32768),dtree:[],imap:new m(512),itree:[],rev15:new m(32768),lhst:new T(286),dhst:new T(30),ihst:new T(19),lits:new T(15e3),strt:new m(65536),prev:new m(32768)}),function(){for(var r=h.F.U,t=0;t<32768;t++){var c=t;c=(4278255360&(c=(4042322160&(c=(3435973836&(c=(2863311530&c)>>>1|(1431655765&c)<<1))>>>2|(858993459&c)<<2))>>>4|(252645135&c)<<4))>>>8|(16711935&c)<<8,r.rev15[t]=(c>>>16|c<<16)>>>17}function s(x,j,n){for(;j--!=0;)x.push(0,n)}for(t=0;t<32;t++)r.ldef[t]=r.of0[t]<<3|r.exb[t],r.ddef[t]=r.df0[t]<<4|r.dxb[t];s(r.fltree,144,8),s(r.fltree,112,9),s(r.fltree,24,7),s(r.fltree,8,8),h.F.makeCodes(r.fltree,9),h.F.codes2map(r.fltree,9,r.flmap),h.F.revCodes(r.fltree,9),s(r.fdtree,32,5),h.F.makeCodes(r.fdtree,5),h.F.codes2map(r.fdtree,5,r.fdmap),h.F.revCodes(r.fdtree,5),s(r.itree,19,0),s(r.ltree,286,0),s(r.dtree,30,0),s(r.ttree,320,0)}()})();var ht=dt({__proto__:null,default:Xe},[Xe]);const $e=function(){var e={nextZero(n,i){for(;n[i]!=0;)i++;return i},readUshort:(n,i)=>n[i]<<8|n[i+1],writeUshort(n,i,o){n[i]=o>>8&255,n[i+1]=255&o},readUint:(n,i)=>16777216*n[i]+(n[i+1]<<16|n[i+2]<<8|n[i+3]),writeUint(n,i,o){n[i]=o>>24&255,n[i+1]=o>>16&255,n[i+2]=o>>8&255,n[i+3]=255&o},readASCII(n,i,o){let l="";for(let g=0;g<o;g++)l+=String.fromCharCode(n[i+g]);return l},writeASCII(n,i,o){for(let l=0;l<o.length;l++)n[i+l]=o.charCodeAt(l)},readBytes(n,i,o){const l=[];for(let g=0;g<o;g++)l.push(n[i+g]);return l},pad:n=>n.length<2?`0${n}`:n,readUTF8(n,i,o){let l,g="";for(let k=0;k<o;k++)g+=`%${e.pad(n[i+k].toString(16))}`;try{l=decodeURIComponent(g)}catch{return e.readASCII(n,i,o)}return l}};function m(n,i,o,l){const g=i*o,k=t(l),E=Math.ceil(i*k/8),_=new Uint8Array(4*g),B=new Uint32Array(_.buffer),{ctype:P}=l,{depth:U}=l,O=e.readUshort;if(P==6){const C=g<<2;if(U==8)for(var v=0;v<C;v+=4)_[v]=n[v],_[v+1]=n[v+1],_[v+2]=n[v+2],_[v+3]=n[v+3];if(U==16)for(v=0;v<C;v++)_[v]=n[v<<1]}else if(P==2){const C=l.tabs.tRNS;if(C==null){if(U==8)for(v=0;v<g;v++){var I=3*v;B[v]=255<<24|n[I+2]<<16|n[I+1]<<8|n[I]}if(U==16)for(v=0;v<g;v++)I=6*v,B[v]=255<<24|n[I+4]<<16|n[I+2]<<8|n[I]}else{var u=C[0];const M=C[1],W=C[2];if(U==8)for(v=0;v<g;v++){var d=v<<2;I=3*v,B[v]=255<<24|n[I+2]<<16|n[I+1]<<8|n[I],n[I]==u&&n[I+1]==M&&n[I+2]==W&&(_[d+3]=0)}if(U==16)for(v=0;v<g;v++)d=v<<2,I=6*v,B[v]=255<<24|n[I+4]<<16|n[I+2]<<8|n[I],O(n,I)==u&&O(n,I+2)==M&&O(n,I+4)==W&&(_[d+3]=0)}}else if(P==3){const C=l.tabs.PLTE,M=l.tabs.tRNS,W=M?M.length:0;if(U==1)for(var b=0;b<o;b++){var A=b*E,w=b*i;for(v=0;v<i;v++){d=w+v<<2;var F=3*($=n[A+(v>>3)]>>7-((7&v)<<0)&1);_[d]=C[F],_[d+1]=C[F+1],_[d+2]=C[F+2],_[d+3]=$<W?M[$]:255}}if(U==2)for(b=0;b<o;b++)for(A=b*E,w=b*i,v=0;v<i;v++)d=w+v<<2,F=3*($=n[A+(v>>2)]>>6-((3&v)<<1)&3),_[d]=C[F],_[d+1]=C[F+1],_[d+2]=C[F+2],_[d+3]=$<W?M[$]:255;if(U==4)for(b=0;b<o;b++)for(A=b*E,w=b*i,v=0;v<i;v++)d=w+v<<2,F=3*($=n[A+(v>>1)]>>4-((1&v)<<2)&15),_[d]=C[F],_[d+1]=C[F+1],_[d+2]=C[F+2],_[d+3]=$<W?M[$]:255;if(U==8)for(v=0;v<g;v++){var $;d=v<<2,F=3*($=n[v]),_[d]=C[F],_[d+1]=C[F+1],_[d+2]=C[F+2],_[d+3]=$<W?M[$]:255}}else if(P==4){if(U==8)for(v=0;v<g;v++){d=v<<2;var S=n[f=v<<1];_[d]=S,_[d+1]=S,_[d+2]=S,_[d+3]=n[f+1]}if(U==16)for(v=0;v<g;v++){var f;d=v<<2,S=n[f=v<<2],_[d]=S,_[d+1]=S,_[d+2]=S,_[d+3]=n[f+2]}}else if(P==0)for(u=l.tabs.tRNS?l.tabs.tRNS:-1,b=0;b<o;b++){const C=b*E,M=b*i;if(U==1)for(var a=0;a<i;a++){var R=(S=255*(n[C+(a>>>3)]>>>7-(7&a)&1))==255*u?0:255;B[M+a]=R<<24|S<<16|S<<8|S}else if(U==2)for(a=0;a<i;a++)R=(S=85*(n[C+(a>>>2)]>>>6-((3&a)<<1)&3))==85*u?0:255,B[M+a]=R<<24|S<<16|S<<8|S;else if(U==4)for(a=0;a<i;a++)R=(S=17*(n[C+(a>>>1)]>>>4-((1&a)<<2)&15))==17*u?0:255,B[M+a]=R<<24|S<<16|S<<8|S;else if(U==8)for(a=0;a<i;a++)R=(S=n[C+a])==u?0:255,B[M+a]=R<<24|S<<16|S<<8|S;else if(U==16)for(a=0;a<i;a++)S=n[C+(a<<1)],R=O(n,C+(a<<1))==u?0:255,B[M+a]=R<<24|S<<16|S<<8|S}return _}function T(n,i,o,l){const g=t(n),k=Math.ceil(o*g/8),E=new Uint8Array((k+1+n.interlace)*l);return i=n.tabs.CgBI?r(i,E):h(i,E),n.interlace==0?i=c(i,n,0,o,l):n.interlace==1&&(i=function(B,P){const U=P.width,O=P.height,v=t(P),I=v>>3,u=Math.ceil(U*v/8),d=new Uint8Array(O*u);let b=0;const A=[0,0,4,0,2,0,1],w=[0,4,0,2,0,1,0],F=[8,8,8,4,4,2,2],$=[8,8,4,4,2,2,1];let S=0;for(;S<7;){const a=F[S],R=$[S];let C=0,M=0,W=A[S];for(;W<O;)W+=a,M++;let L=w[S];for(;L<U;)L+=R,C++;const H=Math.ceil(C*v/8);c(B,P,b,C,M);let z=0,y=A[S];for(;y<O;){let N=w[S],Q=b+z*H<<3;for(;N<U;){var f;if(v==1&&(f=(f=B[Q>>3])>>7-(7&Q)&1,d[y*u+(N>>3)]|=f<<7-((7&N)<<0)),v==2&&(f=(f=B[Q>>3])>>6-(7&Q)&3,d[y*u+(N>>2)]|=f<<6-((3&N)<<1)),v==4&&(f=(f=B[Q>>3])>>4-(7&Q)&15,d[y*u+(N>>1)]|=f<<4-((1&N)<<2)),v>=8){const G=y*u+N*I;for(let q=0;q<I;q++)d[G+q]=B[(Q>>3)+q]}Q+=v,N+=R}z++,y+=a}C*M!=0&&(b+=M*(1+H)),S+=1}return d}(i,n)),i}function h(n,i){return r(new Uint8Array(n.buffer,2,n.length-6),i)}var r=function(){const n={H:{}};return n.H.N=function(i,o){const l=Uint8Array;let g,k,E=0,_=0,B=0,P=0,U=0,O=0,v=0,I=0,u=0;if(i[0]==3&&i[1]==0)return o||new l(0);const d=n.H,b=d.b,A=d.e,w=d.R,F=d.n,$=d.A,S=d.Z,f=d.m,a=o==null;for(a&&(o=new l(i.length>>>2<<5));E==0;)if(E=b(i,u,1),_=b(i,u+1,2),u+=3,_!=0){if(a&&(o=n.H.W(o,I+(1<<17))),_==1&&(g=f.J,k=f.h,O=511,v=31),_==2){B=A(i,u,5)+257,P=A(i,u+5,5)+1,U=A(i,u+10,4)+4,u+=14;let C=1;for(var R=0;R<38;R+=2)f.Q[R]=0,f.Q[R+1]=0;for(R=0;R<U;R++){const L=A(i,u+3*R,3);f.Q[1+(f.X[R]<<1)]=L,L>C&&(C=L)}u+=3*U,F(f.Q,C),$(f.Q,C,f.u),g=f.w,k=f.d,u=w(f.u,(1<<C)-1,B+P,i,u,f.v);const M=d.V(f.v,0,B,f.C);O=(1<<M)-1;const W=d.V(f.v,B,P,f.D);v=(1<<W)-1,F(f.C,M),$(f.C,M,g),F(f.D,W),$(f.D,W,k)}for(;;){const C=g[S(i,u)&O];u+=15&C;const M=C>>>4;if(!(M>>>8))o[I++]=M;else{if(M==256)break;{let W=I+M-254;if(M>264){const N=f.q[M-257];W=I+(N>>>3)+A(i,u,7&N),u+=7&N}const L=k[S(i,u)&v];u+=15&L;const H=L>>>4,z=f.c[H],y=(z>>>4)+b(i,u,15&z);for(u+=15&z;I<W;)o[I]=o[I++-y],o[I]=o[I++-y],o[I]=o[I++-y],o[I]=o[I++-y];I=W}}}}else{7&u&&(u+=8-(7&u));const C=4+(u>>>3),M=i[C-4]|i[C-3]<<8;a&&(o=n.H.W(o,I+M)),o.set(new l(i.buffer,i.byteOffset+C,M),I),u=C+M<<3,I+=M}return o.length==I?o:o.slice(0,I)},n.H.W=function(i,o){const l=i.length;if(o<=l)return i;const g=new Uint8Array(l<<1);return g.set(i,0),g},n.H.R=function(i,o,l,g,k,E){const _=n.H.e,B=n.H.Z;let P=0;for(;P<l;){const U=i[B(g,k)&o];k+=15&U;const O=U>>>4;if(O<=15)E[P]=O,P++;else{let v=0,I=0;O==16?(I=3+_(g,k,2),k+=2,v=E[P-1]):O==17?(I=3+_(g,k,3),k+=3):O==18&&(I=11+_(g,k,7),k+=7);const u=P+I;for(;P<u;)E[P]=v,P++}}return k},n.H.V=function(i,o,l,g){let k=0,E=0;const _=g.length>>>1;for(;E<l;){const B=i[E+o];g[E<<1]=0,g[1+(E<<1)]=B,B>k&&(k=B),E++}for(;E<_;)g[E<<1]=0,g[1+(E<<1)]=0,E++;return k},n.H.n=function(i,o){const l=n.H.m,g=i.length;let k,E,_,B;const P=l.j;for(var U=0;U<=o;U++)P[U]=0;for(U=1;U<g;U+=2)P[i[U]]++;const O=l.K;for(k=0,P[0]=0,E=1;E<=o;E++)k=k+P[E-1]<<1,O[E]=k;for(_=0;_<g;_+=2)B=i[_+1],B!=0&&(i[_]=O[B],O[B]++)},n.H.A=function(i,o,l){const g=i.length,k=n.H.m.r;for(let E=0;E<g;E+=2)if(i[E+1]!=0){const _=E>>1,B=i[E+1],P=_<<4|B,U=o-B;let O=i[E]<<U;const v=O+(1<<U);for(;O!=v;)l[k[O]>>>15-o]=P,O++}},n.H.l=function(i,o){const l=n.H.m.r,g=15-o;for(let k=0;k<i.length;k+=2){const E=i[k]<<o-i[k+1];i[k]=l[E]>>>g}},n.H.M=function(i,o,l){l<<=7&o;const g=o>>>3;i[g]|=l,i[g+1]|=l>>>8},n.H.I=function(i,o,l){l<<=7&o;const g=o>>>3;i[g]|=l,i[g+1]|=l>>>8,i[g+2]|=l>>>16},n.H.e=function(i,o,l){return(i[o>>>3]|i[1+(o>>>3)]<<8)>>>(7&o)&(1<<l)-1},n.H.b=function(i,o,l){return(i[o>>>3]|i[1+(o>>>3)]<<8|i[2+(o>>>3)]<<16)>>>(7&o)&(1<<l)-1},n.H.Z=function(i,o){return(i[o>>>3]|i[1+(o>>>3)]<<8|i[2+(o>>>3)]<<16)>>>(7&o)},n.H.i=function(i,o){return(i[o>>>3]|i[1+(o>>>3)]<<8|i[2+(o>>>3)]<<16|i[3+(o>>>3)]<<24)>>>(7&o)},n.H.m=function(){const i=Uint16Array,o=Uint32Array;return{K:new i(16),j:new i(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new i(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new o(32),J:new i(512),_:[],h:new i(32),$:[],w:new i(32768),C:[],v:[],d:new i(32768),D:[],u:new i(512),Q:[],r:new i(32768),s:new o(286),Y:new o(30),a:new o(19),t:new o(15e3),k:new i(65536),g:new i(32768)}}(),function(){const i=n.H.m;for(var o=0;o<32768;o++){let g=o;g=(2863311530&g)>>>1|(1431655765&g)<<1,g=(3435973836&g)>>>2|(858993459&g)<<2,g=(4042322160&g)>>>4|(252645135&g)<<4,g=(4278255360&g)>>>8|(16711935&g)<<8,i.r[o]=(g>>>16|g<<16)>>>17}function l(g,k,E){for(;k--!=0;)g.push(0,E)}for(o=0;o<32;o++)i.q[o]=i.S[o]<<3|i.T[o],i.c[o]=i.p[o]<<4|i.z[o];l(i._,144,8),l(i._,112,9),l(i._,24,7),l(i._,8,8),n.H.n(i._,9),n.H.A(i._,9,i.J),n.H.l(i._,9),l(i.$,32,5),n.H.n(i.$,5),n.H.A(i.$,5,i.h),n.H.l(i.$,5),l(i.Q,19,0),l(i.C,286,0),l(i.D,30,0),l(i.v,320,0)}(),n.H.N}();function t(n){return[1,null,3,1,2,null,4][n.ctype]*n.depth}function c(n,i,o,l,g){let k=t(i);const E=Math.ceil(l*k/8);let _,B;k=Math.ceil(k/8);let P=n[o],U=0;if(P>1&&(n[o]=[0,0,1][P-2]),P==3)for(U=k;U<E;U++)n[U+1]=n[U+1]+(n[U+1-k]>>>1)&255;for(let O=0;O<g;O++)if(_=o+O*E,B=_+O+1,P=n[B-1],U=0,P==0)for(;U<E;U++)n[_+U]=n[B+U];else if(P==1){for(;U<k;U++)n[_+U]=n[B+U];for(;U<E;U++)n[_+U]=n[B+U]+n[_+U-k]}else if(P==2)for(;U<E;U++)n[_+U]=n[B+U]+n[_+U-E];else if(P==3){for(;U<k;U++)n[_+U]=n[B+U]+(n[_+U-E]>>>1);for(;U<E;U++)n[_+U]=n[B+U]+(n[_+U-E]+n[_+U-k]>>>1)}else{for(;U<k;U++)n[_+U]=n[B+U]+s(0,n[_+U-E],0);for(;U<E;U++)n[_+U]=n[B+U]+s(n[_+U-k],n[_+U-E],n[_+U-k-E])}return n}function s(n,i,o){const l=n+i-o,g=l-n,k=l-i,E=l-o;return g*g<=k*k&&g*g<=E*E?n:k*k<=E*E?i:o}function x(n,i,o){o.width=e.readUint(n,i),i+=4,o.height=e.readUint(n,i),i+=4,o.depth=n[i],i++,o.ctype=n[i],i++,o.compress=n[i],i++,o.filter=n[i],i++,o.interlace=n[i],i++}function j(n,i,o,l,g,k,E,_,B){const P=Math.min(i,g),U=Math.min(o,k);let O=0,v=0;for(let S=0;S<U;S++)for(let f=0;f<P;f++)if(E>=0&&_>=0?(O=S*i+f<<2,v=(_+S)*g+E+f<<2):(O=(-_+S)*i-E+f<<2,v=S*g+f<<2),B==0)l[v]=n[O],l[v+1]=n[O+1],l[v+2]=n[O+2],l[v+3]=n[O+3];else if(B==1){var I=n[O+3]*.00392156862745098,u=n[O]*I,d=n[O+1]*I,b=n[O+2]*I,A=l[v+3]*(1/255),w=l[v]*A,F=l[v+1]*A,$=l[v+2]*A;const a=1-I,R=I+A*a,C=R==0?0:1/R;l[v+3]=255*R,l[v+0]=(u+w*a)*C,l[v+1]=(d+F*a)*C,l[v+2]=(b+$*a)*C}else if(B==2)I=n[O+3],u=n[O],d=n[O+1],b=n[O+2],A=l[v+3],w=l[v],F=l[v+1],$=l[v+2],I==A&&u==w&&d==F&&b==$?(l[v]=0,l[v+1]=0,l[v+2]=0,l[v+3]=0):(l[v]=u,l[v+1]=d,l[v+2]=b,l[v+3]=I);else if(B==3){if(I=n[O+3],u=n[O],d=n[O+1],b=n[O+2],A=l[v+3],w=l[v],F=l[v+1],$=l[v+2],I==A&&u==w&&d==F&&b==$)continue;if(I<220&&A>20)return!1}return!0}return{decode:function(i){const o=new Uint8Array(i);let l=8;const g=e,k=g.readUshort,E=g.readUint,_={tabs:{},frames:[]},B=new Uint8Array(o.length);let P,U=0,O=0;const v=[137,80,78,71,13,10,26,10];for(var I=0;I<8;I++)if(o[I]!=v[I])throw"The input is not a PNG file!";for(;l<o.length;){const S=g.readUint(o,l);l+=4;const f=g.readASCII(o,l,4);if(l+=4,f=="IHDR")x(o,l,_);else if(f=="iCCP"){for(var u=l;o[u]!=0;)u++;g.readASCII(o,l,u-l),o[u+1];const a=o.slice(u+2,l+S);let R=null;try{R=h(a)}catch{R=r(a)}_.tabs[f]=R}else if(f=="CgBI")_.tabs[f]=o.slice(l,l+4);else if(f=="IDAT"){for(I=0;I<S;I++)B[U+I]=o[l+I];U+=S}else if(f=="acTL")_.tabs[f]={num_frames:E(o,l),num_plays:E(o,l+4)},P=new Uint8Array(o.length);else if(f=="fcTL"){O!=0&&(($=_.frames[_.frames.length-1]).data=T(_,P.slice(0,O),$.rect.width,$.rect.height),O=0);const a={x:E(o,l+12),y:E(o,l+16),width:E(o,l+4),height:E(o,l+8)};let R=k(o,l+22);R=k(o,l+20)/(R==0?100:R);const C={rect:a,delay:Math.round(1e3*R),dispose:o[l+24],blend:o[l+25]};_.frames.push(C)}else if(f=="fdAT"){for(I=0;I<S-4;I++)P[O+I]=o[l+I+4];O+=S-4}else if(f=="pHYs")_.tabs[f]=[g.readUint(o,l),g.readUint(o,l+4),o[l+8]];else if(f=="cHRM")for(_.tabs[f]=[],I=0;I<8;I++)_.tabs[f].push(g.readUint(o,l+4*I));else if(f=="tEXt"||f=="zTXt"){_.tabs[f]==null&&(_.tabs[f]={});var d=g.nextZero(o,l),b=g.readASCII(o,l,d-l),A=l+S-d-1;if(f=="tEXt")F=g.readASCII(o,d+1,A);else{var w=h(o.slice(d+2,d+2+A));F=g.readUTF8(w,0,w.length)}_.tabs[f][b]=F}else if(f=="iTXt"){_.tabs[f]==null&&(_.tabs[f]={}),d=0,u=l,d=g.nextZero(o,u),b=g.readASCII(o,u,d-u);const a=o[u=d+1];var F;o[u+1],u+=2,d=g.nextZero(o,u),g.readASCII(o,u,d-u),u=d+1,d=g.nextZero(o,u),g.readUTF8(o,u,d-u),A=S-((u=d+1)-l),a==0?F=g.readUTF8(o,u,A):(w=h(o.slice(u,u+A)),F=g.readUTF8(w,0,w.length)),_.tabs[f][b]=F}else if(f=="PLTE")_.tabs[f]=g.readBytes(o,l,S);else if(f=="hIST"){const a=_.tabs.PLTE.length/3;for(_.tabs[f]=[],I=0;I<a;I++)_.tabs[f].push(k(o,l+2*I))}else if(f=="tRNS")_.ctype==3?_.tabs[f]=g.readBytes(o,l,S):_.ctype==0?_.tabs[f]=k(o,l):_.ctype==2&&(_.tabs[f]=[k(o,l),k(o,l+2),k(o,l+4)]);else if(f=="gAMA")_.tabs[f]=g.readUint(o,l)/1e5;else if(f=="sRGB")_.tabs[f]=o[l];else if(f=="bKGD")_.ctype==0||_.ctype==4?_.tabs[f]=[k(o,l)]:_.ctype==2||_.ctype==6?_.tabs[f]=[k(o,l),k(o,l+2),k(o,l+4)]:_.ctype==3&&(_.tabs[f]=o[l]);else if(f=="IEND")break;l+=S,g.readUint(o,l),l+=4}var $;return O!=0&&(($=_.frames[_.frames.length-1]).data=T(_,P.slice(0,O),$.rect.width,$.rect.height)),_.data=T(_,B,_.width,_.height),delete _.compress,delete _.interlace,delete _.filter,_},toRGBA8:function(i){const o=i.width,l=i.height;if(i.tabs.acTL==null)return[m(i.data,o,l,i).buffer];const g=[];i.frames[0].data==null&&(i.frames[0].data=i.data);const k=o*l*4,E=new Uint8Array(k),_=new Uint8Array(k),B=new Uint8Array(k);for(let U=0;U<i.frames.length;U++){const O=i.frames[U],v=O.rect.x,I=O.rect.y,u=O.rect.width,d=O.rect.height,b=m(O.data,u,d,i);if(U!=0)for(var P=0;P<k;P++)B[P]=E[P];if(O.blend==0?j(b,u,d,E,o,l,v,I,0):O.blend==1&&j(b,u,d,E,o,l,v,I,1),g.push(E.buffer.slice(0)),O.dispose!=0){if(O.dispose==1)j(_,u,d,E,o,l,v,I,0);else if(O.dispose==2)for(P=0;P<k;P++)E[P]=B[P]}}return g},_paeth:s,_copyTile:j,_bin:e}}();(function(){const{_copyTile:e}=$e,{_bin:m}=$e,T=$e._paeth;var h={table:function(){const u=new Uint32Array(256);for(let d=0;d<256;d++){let b=d;for(let A=0;A<8;A++)1&b?b=3988292384^b>>>1:b>>>=1;u[d]=b}return u}(),update(u,d,b,A){for(let w=0;w<A;w++)u=h.table[255&(u^d[b+w])]^u>>>8;return u},crc:(u,d,b)=>4294967295^h.update(4294967295,u,d,b)};function r(u,d,b,A){d[b]+=u[0]*A>>4,d[b+1]+=u[1]*A>>4,d[b+2]+=u[2]*A>>4,d[b+3]+=u[3]*A>>4}function t(u){return Math.max(0,Math.min(255,u))}function c(u,d){const b=u[0]-d[0],A=u[1]-d[1],w=u[2]-d[2],F=u[3]-d[3];return b*b+A*A+w*w+F*F}function s(u,d,b,A,w,F,$){$==null&&($=1);const S=A.length,f=[];for(var a=0;a<S;a++){const y=A[a];f.push([y>>>0&255,y>>>8&255,y>>>16&255,y>>>24&255])}for(a=0;a<S;a++){let y=4294967295;for(var R=0,C=0;C<S;C++){var M=c(f[a],f[C]);C!=a&&M<y&&(y=M,R=C)}}const W=new Uint32Array(w.buffer),L=new Int16Array(d*b*4),H=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(a=0;a<H.length;a++)H[a]=255*((H[a]+.5)/16-.5);for(let y=0;y<b;y++)for(let N=0;N<d;N++){var z;a=4*(y*d+N),$!=2?z=[t(u[a]+L[a]),t(u[a+1]+L[a+1]),t(u[a+2]+L[a+2]),t(u[a+3]+L[a+3])]:(M=H[4*(3&y)+(3&N)],z=[t(u[a]+M),t(u[a+1]+M),t(u[a+2]+M),t(u[a+3]+M)]),R=0;let Q=16777215;for(C=0;C<S;C++){const V=c(z,f[C]);V<Q&&(Q=V,R=C)}const G=f[R],q=[z[0]-G[0],z[1]-G[1],z[2]-G[2],z[3]-G[3]];$==1&&(N!=d-1&&r(q,L,a+4,7),y!=b-1&&(N!=0&&r(q,L,a+4*d-4,3),r(q,L,a+4*d,5),N!=d-1&&r(q,L,a+4*d+4,1))),F[a>>2]=R,W[a>>2]=A[R]}}function x(u,d,b,A,w){w==null&&(w={});const{crc:F}=h,$=m.writeUint,S=m.writeUshort,f=m.writeASCII;let a=8;const R=u.frames.length>1;let C,M=!1,W=33+(R?20:0);if(w.sRGB!=null&&(W+=13),w.pHYs!=null&&(W+=21),w.iCCP!=null&&(C=pako.deflate(w.iCCP),W+=21+C.length+4),u.ctype==3){for(var L=u.plte.length,H=0;H<L;H++)u.plte[H]>>>24!=255&&(M=!0);W+=8+3*L+4+(M?8+1*L+4:0)}for(var z=0;z<u.frames.length;z++)R&&(W+=38),W+=(G=u.frames[z]).cimg.length+12,z!=0&&(W+=4);W+=12;const y=new Uint8Array(W),N=[137,80,78,71,13,10,26,10];for(H=0;H<8;H++)y[H]=N[H];if($(y,a,13),a+=4,f(y,a,"IHDR"),a+=4,$(y,a,d),a+=4,$(y,a,b),a+=4,y[a]=u.depth,a++,y[a]=u.ctype,a++,y[a]=0,a++,y[a]=0,a++,y[a]=0,a++,$(y,a,F(y,a-17,17)),a+=4,w.sRGB!=null&&($(y,a,1),a+=4,f(y,a,"sRGB"),a+=4,y[a]=w.sRGB,a++,$(y,a,F(y,a-5,5)),a+=4),w.iCCP!=null){const q=13+C.length;$(y,a,q),a+=4,f(y,a,"iCCP"),a+=4,f(y,a,"ICC profile"),a+=11,a+=2,y.set(C,a),a+=C.length,$(y,a,F(y,a-(q+4),q+4)),a+=4}if(w.pHYs!=null&&($(y,a,9),a+=4,f(y,a,"pHYs"),a+=4,$(y,a,w.pHYs[0]),a+=4,$(y,a,w.pHYs[1]),a+=4,y[a]=w.pHYs[2],a++,$(y,a,F(y,a-13,13)),a+=4),R&&($(y,a,8),a+=4,f(y,a,"acTL"),a+=4,$(y,a,u.frames.length),a+=4,$(y,a,w.loop!=null?w.loop:0),a+=4,$(y,a,F(y,a-12,12)),a+=4),u.ctype==3){for($(y,a,3*(L=u.plte.length)),a+=4,f(y,a,"PLTE"),a+=4,H=0;H<L;H++){const q=3*H,V=u.plte[H],Z=255&V,oe=V>>>8&255,_e=V>>>16&255;y[a+q+0]=Z,y[a+q+1]=oe,y[a+q+2]=_e}if(a+=3*L,$(y,a,F(y,a-3*L-4,3*L+4)),a+=4,M){for($(y,a,L),a+=4,f(y,a,"tRNS"),a+=4,H=0;H<L;H++)y[a+H]=u.plte[H]>>>24&255;a+=L,$(y,a,F(y,a-L-4,L+4)),a+=4}}let Q=0;for(z=0;z<u.frames.length;z++){var G=u.frames[z];R&&($(y,a,26),a+=4,f(y,a,"fcTL"),a+=4,$(y,a,Q++),a+=4,$(y,a,G.rect.width),a+=4,$(y,a,G.rect.height),a+=4,$(y,a,G.rect.x),a+=4,$(y,a,G.rect.y),a+=4,S(y,a,A[z]),a+=2,S(y,a,1e3),a+=2,y[a]=G.dispose,a++,y[a]=G.blend,a++,$(y,a,F(y,a-30,30)),a+=4);const q=G.cimg;$(y,a,(L=q.length)+(z==0?0:4)),a+=4;const V=a;f(y,a,z==0?"IDAT":"fdAT"),a+=4,z!=0&&($(y,a,Q++),a+=4),y.set(q,a),a+=L,$(y,a,F(y,V,a-V)),a+=4}return $(y,a,0),a+=4,f(y,a,"IEND"),a+=4,$(y,a,F(y,a-4,4)),a+=4,y.buffer}function j(u,d,b){for(let A=0;A<u.frames.length;A++){const w=u.frames[A];w.rect.width;const F=w.rect.height,$=new Uint8Array(F*w.bpl+F);w.cimg=l(w.img,F,w.bpp,w.bpl,$,d,b)}}function n(u,d,b,A,w){const F=w[0],$=w[1],S=w[2],f=w[3],a=w[4],R=w[5];let C=6,M=8,W=255;for(var L=0;L<u.length;L++){const se=new Uint8Array(u[L]);for(var H=se.length,z=0;z<H;z+=4)W&=se[z+3]}const y=W!=255,N=function(X,J,le,ue,ie,ge){const ae=[];for(var ee=0;ee<X.length;ee++){const he=new Uint8Array(X[ee]),ve=new Uint32Array(he.buffer);var me;let xe=0,ke=0,we=J,ze=le,nr=ue?1:0;if(ee!=0){const Dr=ge||ue||ee==1||ae[ee-2].dispose!=0?1:2;let or=0,pr=1e9;for(let Be=0;Be<Dr;Be++){var Fe=new Uint8Array(X[ee-1-Be]);const Hr=new Uint32Array(X[ee-1-Be]);let Ce=J,Se=le,Te=-1,Le=-1;for(let Ie=0;Ie<le;Ie++)for(let Pe=0;Pe<J;Pe++)ve[de=Ie*J+Pe]!=Hr[de]&&(Pe<Ce&&(Ce=Pe),Pe>Te&&(Te=Pe),Ie<Se&&(Se=Ie),Ie>Le&&(Le=Ie));Te==-1&&(Ce=Se=Te=Le=0),ie&&((1&Ce)==1&&Ce--,(1&Se)==1&&Se--);const gr=(Te-Ce+1)*(Le-Se+1);gr<pr&&(pr=gr,or=Be,xe=Ce,ke=Se,we=Te-Ce+1,ze=Le-Se+1)}Fe=new Uint8Array(X[ee-1-or]),or==1&&(ae[ee-1].dispose=2),me=new Uint8Array(we*ze*4),e(Fe,J,le,me,we,ze,-xe,-ke,0),nr=e(he,J,le,me,we,ze,-xe,-ke,3)?1:0,nr==1?o(he,J,le,me,{x:xe,y:ke,width:we,height:ze}):e(he,J,le,me,we,ze,-xe,-ke,0)}else me=he.slice(0);ae.push({rect:{x:xe,y:ke,width:we,height:ze},img:me,blend:nr,dispose:0})}if(ue)for(ee=0;ee<ae.length;ee++){if((Ee=ae[ee]).blend==1)continue;const he=Ee.rect,ve=ae[ee-1].rect,xe=Math.min(he.x,ve.x),ke=Math.min(he.y,ve.y),we={x:xe,y:ke,width:Math.max(he.x+he.width,ve.x+ve.width)-xe,height:Math.max(he.y+he.height,ve.y+ve.height)-ke};ae[ee-1].dispose=1,ee-1!=0&&i(X,J,le,ae,ee-1,we,ie),i(X,J,le,ae,ee,we,ie)}let qe=0;if(X.length!=1)for(var de=0;de<ae.length;de++){var Ee;qe+=(Ee=ae[de]).rect.width*Ee.rect.height}return ae}(u,d,b,F,$,S),Q={},G=[],q=[];if(A!=0){const se=[];for(z=0;z<N.length;z++)se.push(N[z].img.buffer);const X=function(ie){let ge=0;for(var ae=0;ae<ie.length;ae++)ge+=ie[ae].byteLength;const ee=new Uint8Array(ge);let me=0;for(ae=0;ae<ie.length;ae++){const Fe=new Uint8Array(ie[ae]),qe=Fe.length;for(let de=0;de<qe;de+=4){let Ee=Fe[de],he=Fe[de+1],ve=Fe[de+2];const xe=Fe[de+3];xe==0&&(Ee=he=ve=0),ee[me+de]=Ee,ee[me+de+1]=he,ee[me+de+2]=ve,ee[me+de+3]=xe}me+=qe}return ee.buffer}(se),J=k(X,A);for(z=0;z<J.plte.length;z++)G.push(J.plte[z].est.rgba);let le=0;for(z=0;z<N.length;z++){const ue=(Z=N[z]).img.length;var V=new Uint8Array(J.inds.buffer,le>>2,ue>>2);q.push(V);const ie=new Uint8Array(J.abuf,le,ue);R&&s(Z.img,Z.rect.width,Z.rect.height,G,ie,V),Z.img.set(ie),le+=ue}}else for(L=0;L<N.length;L++){var Z=N[L];const se=new Uint32Array(Z.img.buffer);var oe=Z.rect.width;for(H=se.length,V=new Uint8Array(H),q.push(V),z=0;z<H;z++){const X=se[z];if(z!=0&&X==se[z-1])V[z]=V[z-1];else if(z>oe&&X==se[z-oe])V[z]=V[z-oe];else{let J=Q[X];if(J==null&&(Q[X]=J=G.length,G.push(X),G.length>=300))break;V[z]=J}}}const _e=G.length;for(_e<=256&&a==0&&(M=_e<=2?1:_e<=4?2:_e<=16?4:8,M=Math.max(M,f)),L=0;L<N.length;L++){(Z=N[L]).rect.x,Z.rect.y,oe=Z.rect.width;const se=Z.rect.height;let X=Z.img;new Uint32Array(X.buffer);let J=4*oe,le=4;if(_e<=256&&a==0){J=Math.ceil(M*oe/8);var Y=new Uint8Array(J*se);const ue=q[L];for(let ie=0;ie<se;ie++){z=ie*J;const ge=ie*oe;if(M==8)for(var K=0;K<oe;K++)Y[z+K]=ue[ge+K];else if(M==4)for(K=0;K<oe;K++)Y[z+(K>>1)]|=ue[ge+K]<<4-4*(1&K);else if(M==2)for(K=0;K<oe;K++)Y[z+(K>>2)]|=ue[ge+K]<<6-2*(3&K);else if(M==1)for(K=0;K<oe;K++)Y[z+(K>>3)]|=ue[ge+K]<<7-1*(7&K)}X=Y,C=3,le=1}else if(y==0&&N.length==1){Y=new Uint8Array(oe*se*3);const ue=oe*se;for(z=0;z<ue;z++){const ie=3*z,ge=4*z;Y[ie]=X[ge],Y[ie+1]=X[ge+1],Y[ie+2]=X[ge+2]}X=Y,C=2,le=3,J=3*oe}Z.img=X,Z.bpl=J,Z.bpp=le}return{ctype:C,depth:M,plte:G,frames:N}}function i(u,d,b,A,w,F,$){const S=Uint8Array,f=Uint32Array,a=new S(u[w-1]),R=new f(u[w-1]),C=w+1<u.length?new S(u[w+1]):null,M=new S(u[w]),W=new f(M.buffer);let L=d,H=b,z=-1,y=-1;for(let Q=0;Q<F.height;Q++)for(let G=0;G<F.width;G++){const q=F.x+G,V=F.y+Q,Z=V*d+q,oe=W[Z];oe==0||A[w-1].dispose==0&&R[Z]==oe&&(C==null||C[4*Z+3]!=0)||(q<L&&(L=q),q>z&&(z=q),V<H&&(H=V),V>y&&(y=V))}z==-1&&(L=H=z=y=0),$&&((1&L)==1&&L--,(1&H)==1&&H--),F={x:L,y:H,width:z-L+1,height:y-H+1};const N=A[w];N.rect=F,N.blend=1,N.img=new Uint8Array(F.width*F.height*4),A[w-1].dispose==0?(e(a,d,b,N.img,F.width,F.height,-F.x,-F.y,0),o(M,d,b,N.img,F)):e(M,d,b,N.img,F.width,F.height,-F.x,-F.y,0)}function o(u,d,b,A,w){e(u,d,b,A,w.width,w.height,-w.x,-w.y,2)}function l(u,d,b,A,w,F,$){const S=[];let f,a=[0,1,2,3,4];F!=-1?a=[F]:(d*A>5e5||b==1)&&(a=[0]),$&&(f={level:0});const R=ht;for(var C=0;C<a.length;C++){for(let L=0;L<d;L++)g(w,u,L,A,b,a[C]);S.push(R.deflate(w,f))}let M,W=1e9;for(C=0;C<S.length;C++)S[C].length<W&&(M=C,W=S[C].length);return S[M]}function g(u,d,b,A,w,F){const $=b*A;let S=$+b;if(u[S]=F,S++,F==0)if(A<500)for(var f=0;f<A;f++)u[S+f]=d[$+f];else u.set(new Uint8Array(d.buffer,$,A),S);else if(F==1){for(f=0;f<w;f++)u[S+f]=d[$+f];for(f=w;f<A;f++)u[S+f]=d[$+f]-d[$+f-w]+256&255}else if(b==0){for(f=0;f<w;f++)u[S+f]=d[$+f];if(F==2)for(f=w;f<A;f++)u[S+f]=d[$+f];if(F==3)for(f=w;f<A;f++)u[S+f]=d[$+f]-(d[$+f-w]>>1)+256&255;if(F==4)for(f=w;f<A;f++)u[S+f]=d[$+f]-T(d[$+f-w],0,0)+256&255}else{if(F==2)for(f=0;f<A;f++)u[S+f]=d[$+f]+256-d[$+f-A]&255;if(F==3){for(f=0;f<w;f++)u[S+f]=d[$+f]+256-(d[$+f-A]>>1)&255;for(f=w;f<A;f++)u[S+f]=d[$+f]+256-(d[$+f-A]+d[$+f-w]>>1)&255}if(F==4){for(f=0;f<w;f++)u[S+f]=d[$+f]+256-T(0,d[$+f-A],0)&255;for(f=w;f<A;f++)u[S+f]=d[$+f]+256-T(d[$+f-w],d[$+f-A],d[$+f-w-A])&255}}}function k(u,d){const b=new Uint8Array(u),A=b.slice(0),w=new Uint32Array(A.buffer),F=E(A,d),$=F[0],S=F[1],f=b.length,a=new Uint8Array(f>>2);let R;if(b.length<2e7)for(var C=0;C<f;C+=4)R=_($,M=b[C]*(1/255),W=b[C+1]*(1/255),L=b[C+2]*(1/255),H=b[C+3]*(1/255)),a[C>>2]=R.ind,w[C>>2]=R.est.rgba;else for(C=0;C<f;C+=4){var M=b[C]*.00392156862745098,W=b[C+1]*(1/255),L=b[C+2]*(1/255),H=b[C+3]*(1/255);for(R=$;R.left;)R=B(R.est,M,W,L,H)<=0?R.left:R.right;a[C>>2]=R.ind,w[C>>2]=R.est.rgba}return{abuf:A.buffer,inds:a,plte:S}}function E(u,d,b){b==null&&(b=1e-4);const A=new Uint32Array(u.buffer),w={i0:0,i1:u.length,bst:null,est:null,tdst:0,left:null,right:null};w.bst=O(u,w.i0,w.i1),w.est=v(w.bst);const F=[w];for(;F.length<d;){let S=0,f=0;for(var $=0;$<F.length;$++)F[$].est.L>S&&(S=F[$].est.L,f=$);if(S<b)break;const a=F[f],R=P(u,A,a.i0,a.i1,a.est.e,a.est.eMq255);if(a.i0>=R||a.i1<=R){a.est.L=0;continue}const C={i0:a.i0,i1:R,bst:null,est:null,tdst:0,left:null,right:null};C.bst=O(u,C.i0,C.i1),C.est=v(C.bst);const M={i0:R,i1:a.i1,bst:null,est:null,tdst:0,left:null,right:null};for(M.bst={R:[],m:[],N:a.bst.N-C.bst.N},$=0;$<16;$++)M.bst.R[$]=a.bst.R[$]-C.bst.R[$];for($=0;$<4;$++)M.bst.m[$]=a.bst.m[$]-C.bst.m[$];M.est=v(M.bst),a.left=C,a.right=M,F[f]=C,F.push(M)}for(F.sort((S,f)=>f.bst.N-S.bst.N),$=0;$<F.length;$++)F[$].ind=$;return[w,F]}function _(u,d,b,A,w){if(u.left==null)return u.tdst=function(C,M,W,L,H){const z=M-C[0],y=W-C[1],N=L-C[2],Q=H-C[3];return z*z+y*y+N*N+Q*Q}(u.est.q,d,b,A,w),u;const F=B(u.est,d,b,A,w);let $=u.left,S=u.right;F>0&&($=u.right,S=u.left);const f=_($,d,b,A,w);if(f.tdst<=F*F)return f;const a=_(S,d,b,A,w);return a.tdst<f.tdst?a:f}function B(u,d,b,A,w){const{e:F}=u;return F[0]*d+F[1]*b+F[2]*A+F[3]*w-u.eMq}function P(u,d,b,A,w,F){for(A-=4;b<A;){for(;U(u,b,w)<=F;)b+=4;for(;U(u,A,w)>F;)A-=4;if(b>=A)break;const $=d[b>>2];d[b>>2]=d[A>>2],d[A>>2]=$,b+=4,A-=4}for(;U(u,b,w)>F;)b-=4;return b+4}function U(u,d,b){return u[d]*b[0]+u[d+1]*b[1]+u[d+2]*b[2]+u[d+3]*b[3]}function O(u,d,b){const A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],w=[0,0,0,0],F=b-d>>2;for(let $=d;$<b;$+=4){const S=u[$]*.00392156862745098,f=u[$+1]*(1/255),a=u[$+2]*(1/255),R=u[$+3]*(1/255);w[0]+=S,w[1]+=f,w[2]+=a,w[3]+=R,A[0]+=S*S,A[1]+=S*f,A[2]+=S*a,A[3]+=S*R,A[5]+=f*f,A[6]+=f*a,A[7]+=f*R,A[10]+=a*a,A[11]+=a*R,A[15]+=R*R}return A[4]=A[1],A[8]=A[2],A[9]=A[6],A[12]=A[3],A[13]=A[7],A[14]=A[11],{R:A,m:w,N:F}}function v(u){const{R:d}=u,{m:b}=u,{N:A}=u,w=b[0],F=b[1],$=b[2],S=b[3],f=A==0?0:1/A,a=[d[0]-w*w*f,d[1]-w*F*f,d[2]-w*$*f,d[3]-w*S*f,d[4]-F*w*f,d[5]-F*F*f,d[6]-F*$*f,d[7]-F*S*f,d[8]-$*w*f,d[9]-$*F*f,d[10]-$*$*f,d[11]-$*S*f,d[12]-S*w*f,d[13]-S*F*f,d[14]-S*$*f,d[15]-S*S*f],R=a,C=I;let M=[Math.random(),Math.random(),Math.random(),Math.random()],W=0,L=0;if(A!=0)for(let z=0;z<16&&(M=C.multVec(R,M),L=Math.sqrt(C.dot(M,M)),M=C.sml(1/L,M),!(z!=0&&Math.abs(L-W)<1e-9));z++)W=L;const H=[w*f,F*f,$*f,S*f];return{Cov:a,q:H,e:M,L:W,eMq255:C.dot(C.sml(255,H),M),eMq:C.dot(M,H),rgba:(Math.round(255*H[3])<<24|Math.round(255*H[2])<<16|Math.round(255*H[1])<<8|Math.round(255*H[0])<<0)>>>0}}var I={multVec:(u,d)=>[u[0]*d[0]+u[1]*d[1]+u[2]*d[2]+u[3]*d[3],u[4]*d[0]+u[5]*d[1]+u[6]*d[2]+u[7]*d[3],u[8]*d[0]+u[9]*d[1]+u[10]*d[2]+u[11]*d[3],u[12]*d[0]+u[13]*d[1]+u[14]*d[2]+u[15]*d[3]],dot:(u,d)=>u[0]*d[0]+u[1]*d[1]+u[2]*d[2]+u[3]*d[3],sml:(u,d)=>[u*d[0],u*d[1],u*d[2],u*d[3]]};$e.encode=function(d,b,A,w,F,$,S){w==null&&(w=0),S==null&&(S=!1);const f=n(d,b,A,w,[!1,!1,!1,0,S,!1]);return j(f,-1),x(f,b,A,F,$)},$e.encodeLL=function(d,b,A,w,F,$,S,f){const a={ctype:0+(w==1?0:2)+(F==0?0:4),depth:$,frames:[]},R=(w+F)*$,C=R*b;for(let M=0;M<d.length;M++)a.frames.push({rect:{x:0,y:0,width:b,height:A},img:new Uint8Array(d[M]),blend:0,dispose:1,bpp:Math.ceil(R/8),bpl:Math.ceil(C/8)});return j(a,0,!0),x(a,b,A,S,f)},$e.encode.compress=n,$e.encode.dither=s,$e.quantize=k,$e.quantize.getKDtree=E,$e.quantize.getNearest=_})();const Sr={toArrayBuffer(e,m){const T=e.width,h=e.height,r=T<<2,t=e.getContext("2d").getImageData(0,0,T,h),c=new Uint32Array(t.data.buffer),s=(32*T+31)/32<<2,x=s*h,j=122+x,n=new ArrayBuffer(j),i=new DataView(n),o=1<<20;let l,g,k,E,_=o,B=0,P=0,U=0;function O(u){i.setUint16(P,u,!0),P+=2}function v(u){i.setUint32(P,u,!0),P+=4}function I(u){P+=u}O(19778),v(j),I(4),v(122),v(108),v(T),v(-h>>>0),O(1),O(32),v(3),v(x),v(2835),v(2835),I(8),v(16711680),v(65280),v(255),v(4278190080),v(1466527264),function u(){for(;B<h&&_>0;){for(E=122+B*s,l=0;l<r;)_--,g=c[U++],k=g>>>24,i.setUint32(E+l,g<<8|k),l+=4;B++}U<c.length?(_=o,setTimeout(u,Sr._dly)):m(n)}()},toBlob(e,m){this.toArrayBuffer(e,T=>{m(new Blob([T],{type:"image/bmp"}))})},_dly:9};var pe={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},pt={[pe.CHROME]:16384,[pe.FIREFOX]:11180,[pe.DESKTOP_SAFARI]:16384,[pe.IE]:8192,[pe.IOS]:4096,[pe.ETC]:8192};const fr=typeof window<"u",Ur=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Je=fr&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),gt=(fr||Ur)&&(Je&&Je.getOriginalSymbol(window,"File")||typeof File<"u"&&File),Er=(fr||Ur)&&(Je&&Je.getOriginalSymbol(window,"FileReader")||typeof FileReader<"u"&&FileReader);function ur(e,m,T=Date.now()){return new Promise(h=>{const r=e.split(","),t=r[0].match(/:(.*?);/)[1],c=globalThis.atob(r[1]);let s=c.length;const x=new Uint8Array(s);for(;s--;)x[s]=c.charCodeAt(s);const j=new Blob([x],{type:t});j.name=m,j.lastModified=T,h(j)})}function zr(e){return new Promise((m,T)=>{const h=new Er;h.onload=()=>m(h.result),h.onerror=r=>T(r),h.readAsDataURL(e)})}function Ir(e){return new Promise((m,T)=>{const h=new Image;h.onload=()=>m(h),h.onerror=r=>T(r),h.src=e})}function Re(){if(Re.cachedResult!==void 0)return Re.cachedResult;let e=pe.ETC;const{userAgent:m}=navigator;return/Chrom(e|ium)/i.test(m)?e=pe.CHROME:/iP(ad|od|hone)/i.test(m)&&/WebKit/i.test(m)?e=pe.IOS:/Safari/i.test(m)?e=pe.DESKTOP_SAFARI:/Firefox/i.test(m)?e=pe.FIREFOX:(/MSIE/i.test(m)||document.documentMode)&&(e=pe.IE),Re.cachedResult=e,Re.cachedResult}function Pr(e,m){const T=Re(),h=pt[T];let r=e,t=m,c=r*t;const s=r>t?t/r:r/t;for(;c>h*h;){const x=(h+r)/2,j=(h+t)/2;x<j?(t=j,r=j*s):(t=x*s,r=x),c=r*t}return{width:r,height:t}}function tr(e,m){let T,h;try{if(T=new OffscreenCanvas(e,m),h=T.getContext("2d"),h===null)throw new Error("getContext of OffscreenCanvas returns null")}catch{T=document.createElement("canvas"),h=T.getContext("2d")}return T.width=e,T.height=m,[T,h]}function Rr(e,m){const{width:T,height:h}=Pr(e.width,e.height),[r,t]=tr(T,h);return m&&/jpe?g/.test(m)&&(t.fillStyle="white",t.fillRect(0,0,r.width,r.height)),t.drawImage(e,0,0,r.width,r.height),r}function Ke(){return Ke.cachedResult!==void 0||(Ke.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&typeof document<"u"&&"ontouchend"in document),Ke.cachedResult}function er(e,m={}){return new Promise(function(T,h){let r,t;var c=function(){try{return t=Rr(r,m.fileType||e.type),T([r,t])}catch(x){return h(x)}},s=function(x){try{var j=function(n){try{throw n}catch(i){return h(i)}};try{let n;return zr(e).then(function(i){try{return n=i,Ir(n).then(function(o){try{return r=o,function(){try{return c()}catch(l){return h(l)}}()}catch(l){return j(l)}},j)}catch(o){return j(o)}},j)}catch(n){j(n)}}catch(n){return h(n)}};try{if(Ke()||[pe.DESKTOP_SAFARI,pe.MOBILE_SAFARI].includes(Re()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(e).then(function(x){try{return r=x,c()}catch{return s()}},s)}catch{s()}})}function rr(e,m,T,h,r=1){return new Promise(function(t,c){let s;if(m==="image/png"){let j,n,i;return j=e.getContext("2d"),{data:n}=j.getImageData(0,0,e.width,e.height),i=$e.encode([n.buffer],e.width,e.height,4096*r),s=new Blob([i],{type:m}),s.name=T,s.lastModified=h,x.call(this)}{let j=function(){return x.call(this)};if(m==="image/bmp")return new Promise(n=>Sr.toBlob(e,n)).then((function(n){try{return s=n,s.name=T,s.lastModified=h,j.call(this)}catch(i){return c(i)}}).bind(this),c);{let n=function(){return j.call(this)};if(typeof OffscreenCanvas=="function"&&e instanceof OffscreenCanvas)return e.convertToBlob({type:m,quality:r}).then((function(i){try{return s=i,s.name=T,s.lastModified=h,n.call(this)}catch(o){return c(o)}}).bind(this),c);{let i;return i=e.toDataURL(m,r),ur(i,T,h).then((function(o){try{return s=o,n.call(this)}catch(l){return c(l)}}).bind(this),c)}}}function x(){return t(s)}})}function Ae(e){e.width=0,e.height=0}function Oe(){return new Promise(function(e,m){let T,h,r,t;return Oe.cachedResult!==void 0?e(Oe.cachedResult):ur("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then(function(c){try{return T=c,er(T).then(function(s){try{return h=s[1],rr(h,T.type,T.name,T.lastModified).then(function(x){try{return r=x,Ae(h),er(r).then(function(j){try{return t=j[0],Oe.cachedResult=t.width===1&&t.height===2,e(Oe.cachedResult)}catch(n){return m(n)}},m)}catch(j){return m(j)}},m)}catch(x){return m(x)}},m)}catch(s){return m(s)}},m)})}function Tr(e){return new Promise((m,T)=>{const h=new Er;h.onload=r=>{const t=new DataView(r.target.result);if(t.getUint16(0,!1)!=65496)return m(-2);const c=t.byteLength;let s=2;for(;s<c;){if(t.getUint16(s+2,!1)<=8)return m(-1);const x=t.getUint16(s,!1);if(s+=2,x==65505){if(t.getUint32(s+=2,!1)!=1165519206)return m(-1);const j=t.getUint16(s+=6,!1)==18761;s+=t.getUint32(s+4,j);const n=t.getUint16(s,j);s+=2;for(let i=0;i<n;i++)if(t.getUint16(s+12*i,j)==274)return m(t.getUint16(s+12*i+8,j))}else{if((65280&x)!=65280)break;s+=t.getUint16(s,!1)}}return m(-1)},h.onerror=r=>T(r),h.readAsArrayBuffer(e)})}function Mr(e,m){const{width:T}=e,{height:h}=e,{maxWidthOrHeight:r}=m;let t,c=e;return isFinite(r)&&(T>r||h>r)&&([c,t]=tr(T,h),T>h?(c.width=r,c.height=h/T*r):(c.width=T/h*r,c.height=r),t.drawImage(e,0,0,c.width,c.height),Ae(e)),c}function Or(e,m){const{width:T}=e,{height:h}=e,[r,t]=tr(T,h);switch(m>4&&m<9?(r.width=h,r.height=T):(r.width=T,r.height=h),m){case 2:t.transform(-1,0,0,1,T,0);break;case 3:t.transform(-1,0,0,-1,T,h);break;case 4:t.transform(1,0,0,-1,0,h);break;case 5:t.transform(0,1,1,0,0,0);break;case 6:t.transform(0,1,-1,0,h,0);break;case 7:t.transform(0,-1,-1,0,h,T);break;case 8:t.transform(0,-1,1,0,0,T)}return t.drawImage(e,0,0,T,h),Ae(e),r}function yr(e,m,T=0){return new Promise(function(h,r){let t,c,s,x,j,n,i,o,l,g,k,E,_,B,P,U,O,v,I,u;function d(A=5){if(m.signal&&m.signal.aborted)throw m.signal.reason;t+=A,m.onProgress(Math.min(t,100))}function b(A){if(m.signal&&m.signal.aborted)throw m.signal.reason;t=Math.min(Math.max(A,t),100),m.onProgress(t)}return t=T,c=m.maxIteration||10,s=1024*m.maxSizeMB*1024,d(),er(e,m).then((function(A){try{return[,x]=A,d(),j=Mr(x,m),d(),new Promise(function(w,F){var $;if(!($=m.exifOrientation))return Tr(e).then((function(f){try{return $=f,S.call(this)}catch(a){return F(a)}}).bind(this),F);function S(){return w($)}return S.call(this)}).then((function(w){try{return n=w,d(),Oe().then((function(F){try{return i=F?j:Or(j,n),d(),o=m.initialQuality||1,l=m.fileType||e.type,rr(i,l,e.name,e.lastModified,o).then((function($){try{{let f=function(){if(c--&&(P>s||P>_)){let R,C;return R=u?.95*I.width:I.width,C=u?.95*I.height:I.height,[O,v]=tr(R,C),v.drawImage(I,0,0,R,C),o*=l==="image/png"?.85:.95,rr(O,l,e.name,e.lastModified,o).then(function(M){try{return U=M,Ae(I),I=O,P=U.size,b(Math.min(99,Math.floor((B-P)/(B-s)*100))),f}catch(W){return r(W)}},r)}return[1]},a=function(){return Ae(I),Ae(O),Ae(j),Ae(i),Ae(x),b(100),h(U)};if(g=$,d(),k=g.size>s,E=g.size>e.size,!k&&!E)return b(100),h(g);var S;return _=e.size,B=g.size,P=B,I=i,u=!m.alwaysKeepResolution&&k,(S=(function(R){for(;R;){if(R.then)return void R.then(S,r);try{if(R.pop){if(R.length)return R.pop()?a.call(this):R;R=f}else R=R.call(this)}catch(C){return r(C)}}}).bind(this))(f)}}catch(f){return r(f)}}).bind(this),r)}catch($){return r($)}}).bind(this),r)}catch(F){return r(F)}}).bind(this),r)}catch(w){return r(w)}}).bind(this),r)})}const mt=`
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
`;let sr;function yt(e,m){return new Promise((T,h)=>{sr||(sr=function(c){const s=[];return s.push(c),URL.createObjectURL(new Blob(s))}(mt));const r=new Worker(sr);r.addEventListener("message",function(c){if(m.signal&&m.signal.aborted)r.terminate();else if(c.data.progress===void 0){if(c.data.error)return h(new Error(c.data.error)),void r.terminate();T(c.data.file),r.terminate()}else m.onProgress(c.data.progress)}),r.addEventListener("error",h),m.signal&&m.signal.addEventListener("abort",()=>{h(m.signal.reason),r.terminate()}),r.postMessage({file:e,imageCompressionLibUrl:m.libURL,options:{...m,onProgress:void 0,signal:void 0}})})}function fe(e,m){return new Promise(function(T,h){let r,t,c,s,x,j;if(r={...m},c=0,{onProgress:s}=r,r.maxSizeMB=r.maxSizeMB||Number.POSITIVE_INFINITY,x=typeof r.useWebWorker!="boolean"||r.useWebWorker,delete r.useWebWorker,r.onProgress=l=>{c=l,typeof s=="function"&&s(c)},!(e instanceof Blob||e instanceof gt))return h(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(e.type))return h(new Error("The file given is not an image"));if(j=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,!x||typeof Worker!="function"||j)return yr(e,r).then((function(l){try{return t=l,o.call(this)}catch(g){return h(g)}}).bind(this),h);var n=(function(){try{return o.call(this)}catch(l){return h(l)}}).bind(this),i=function(l){try{return yr(e,r).then(function(g){try{return t=g,n()}catch(k){return h(k)}},h)}catch(g){return h(g)}};try{return r.libURL=r.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",yt(e,r).then(function(l){try{return t=l,n()}catch{return i()}},i)}catch{i()}function o(){try{t.name=e.name,t.lastModified=e.lastModified}catch{}try{r.preserveExif&&e.type==="image/jpeg"&&(!r.fileType||r.fileType&&r.fileType===e.type)&&(t=Cr(e,t))}catch{}return T(t)}})}fe.getDataUrlFromFile=zr,fe.getFilefromDataUrl=ur,fe.loadImage=Ir,fe.drawImageInCanvas=Rr,fe.drawFileInCanvas=er,fe.canvasToFile=rr,fe.getExifOrientation=Tr,fe.handleMaxWidthOrHeight=Mr,fe.followExifOrientation=Or,fe.cleanupCanvasMemory=Ae,fe.isAutoOrientationInBrowser=Oe,fe.approximateBelowMaximumCanvasSizeOfBrowser=Pr,fe.copyExifWithoutOrientation=Cr,fe.getBrowserName=Re,fe.version="2.0.2";const bt=Fr`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,xt=Fr`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,Br=D.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px;
  animation: ${bt} 0.3s ease both;
`,Lr=D.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,vt=D.button`
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
`,Nr=D.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,$t=D.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,_t=D.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,Me=D.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,Ne=D.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,De=D.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,He=D.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,Ze=D.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,br=D.div`
  grid-column: 1 / -1;
`,re=D.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,ne=D.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,hr=({theme:e,$hasError:m})=>`
  width: 100%;
  background-color: ${e.surface.card};
  border: 1.5px solid ${m?e.colors.error.base:e.colors.neutral[200]};
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
    border-color: ${m?e.colors.error.base:e.colors.primary[500]};
    box-shadow: 0 0 0 3px ${m?e.colors.error.base+"20":e.colors.primary[600]+"18"};
  }

  &:disabled {
    background-color: ${e.colors.neutral[50]};
    color: ${e.text.muted};
    cursor: not-allowed;
    opacity: 0.75;
  }
`,ce=D.input`
  ${({theme:e,$hasError:m})=>hr({theme:e,$hasError:m})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,Qe=D.select`
  ${({theme:e,$hasError:m})=>hr({theme:e,$hasError:m})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,wt=D.textarea`
  ${({theme:e,$hasError:m})=>hr({theme:e,$hasError:m})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,be=D.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,Ye=D.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,jt=D.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,At=D.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,kt=D.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[5]};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,xr=D.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border: 2px solid ${({theme:e,$active:m})=>m?e.colors.primary[500]:e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e,$active:m})=>m?e.colors.primary[50]:"transparent"};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e,$active:m})=>m?e.colors.primary[700]:e.text.secondary};
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
`,Ft=D.div`
  padding: ${({theme:e})=>e.spacing[4]};
  border: 2px solid ${({theme:e,$selected:m})=>m?e.colors.primary[400]:e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e,$selected:m})=>m?e.colors.primary[50]:e.surface.card};
  cursor: pointer;
  transition:
    border-color ${({theme:e})=>e.transitions.fast},
    background-color ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary[400]};
    background-color: ${({theme:e})=>e.colors.primary[50]};
  }
`,Ct=D.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,St=D.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
`,Ut=D.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`,Et=D.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,zt=D.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,It=D.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background-color: ${({theme:e})=>e.colors.primary[100]};
  color: ${({theme:e})=>e.colors.primary[700]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 11px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,Pt=D.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Rt=D.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Tt=D.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border: 2px solid ${({theme:e,$checked:m})=>m?e.colors.primary[400]:e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e,$checked:m})=>m?e.colors.primary[50]:e.surface.card};
  cursor: pointer;
  transition:
    border-color ${({theme:e})=>e.transitions.fast},
    background-color ${({theme:e})=>e.transitions.fast};
  user-select: none;

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary[400]};
    background-color: ${({theme:e})=>e.colors.primary[50]};
  }
`,Mt=D.div`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 2px solid ${({theme:e,$checked:m})=>m?e.colors.primary[500]:e.colors.neutral[300]};
  background-color: ${({theme:e,$checked:m})=>m?e.colors.primary[500]:"transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    border-color ${({theme:e})=>e.transitions.fast},
    background-color ${({theme:e})=>e.transitions.fast};
`,Ot=D.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Bt=D.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Lt=D.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.brand.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,vr=D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-top: ${({theme:e})=>e.spacing[4]};
`,$r=D.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
`,_r=D.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.brand.primary};
`,Nt=D.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Dt=D.div`
  border: 1.5px dashed ${({theme:e,$hasFile:m})=>m?e.colors.primary[400]:e.border.strong};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e,$hasFile:m})=>m?e.colors.primary[50]:e.colors.neutral[50]};
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
`,Ht=D.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,Wt=D.label`
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
`,qt=D.div`
  color: ${({theme:e,$hasFile:m})=>m?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,Qt=D.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,Gt=D.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,Vt=D.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,Kt=D.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,Zt=D.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Yt=D.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,Xt=D.button`
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
`,Jt=D.div`
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
`,en=D.button`
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
`,rn=D.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({$isSubmitting:e,theme:m})=>e?m.colors.primary[700]:`linear-gradient(135deg, ${m.colors.primary[600]}, ${m.colors.primary[500]})`};
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
`,lr=D.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,Ue=D.div`
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
  animation: ${xt} 1.4s ease infinite;
`,wr=D(Me)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,jr=D.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`,Ar=D.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,kr=D.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,tn=D.div`
  flex: 1;
  height: 6px;
  background-color: ${({theme:e})=>e.colors.neutral[100]};
  border-radius: 99px;
  overflow: hidden;
`,nn=D.div`
  height: 100%;
  width: ${({$percent:e})=>e??0}%;
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.primary[500]},
    ${({theme:e})=>e.colors.primary[400]}
  );
  border-radius: 99px;
  transition: width 300ms ease;
`,on=D.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.muted};
  white-space: nowrap;
  min-width: 32px;
  text-align: right;
`,cr=e=>e?Array.isArray(e)?e:Array.isArray(e.data)?e.data:Array.isArray(e.results)?e.results:[]:[],an=e=>{if(!e)return!1;const m=e.padStart(14,"0");if(/^(\d)\1+$/.test(m))return!1;let T=m.length-2,h=m.substring(0,T);const r=m.substring(T);let t=0,c=T-7;for(let x=T;x>=1;x--)t+=h.charAt(T-x)*c--,c<2&&(c=9);let s=t%11<2?0:11-t%11;if(s!=r.charAt(0))return!1;T=T+1,h=m.substring(0,T),t=0,c=T-7;for(let x=T;x>=1;x--)t+=h.charAt(T-x)*c--,c<2&&(c=9);return s=t%11<2?0:11-t%11,s==r.charAt(1)},sn=Yr({corporate_name:te().required("A razão social é obrigatória.").max(200,"Razão social deve ter no máximo 200 caracteres."),cnpj:te().required("O CNPJ é obrigatório.").transform(e=>(e==null?void 0:e.replace(/\D/g,""))||"").test("cnpj-valido","CNPJ inválido (dígitos verificadores não conferem).",e=>e?e.length===14&&an(e):!1),email:te().nullable().transform(e=>e||null).email("Informe um e-mail válido."),state_registration:te().nullable().transform(e=>(e==null?void 0:e.replace(/\D/g,""))||null).matches(/^\d*$/,"A inscrição estadual deve conter apenas números.").max(15,"Inscrição estadual deve ter no máximo 15 caracteres."),trade_name:te().nullable().transform(e=>e||null).max(200,"Nome fantasia deve ter no máximo 200 caracteres."),phone:te().nullable().transform(e=>e||null).max(20,"Telefone deve ter no máximo 20 caracteres."),benefit_type:te().required("O tipo de benefício é obrigatório.").oneOf(["food","meal","both"],"Tipo inválido."),notes:te().nullable().transform(e=>e||null),partner_id:te().nullable().transform(e=>e||null),address_street:te().nullable().transform(e=>e||null).max(255,"Logradouro deve ter no máximo 255 caracteres."),address_number:te().nullable().transform(e=>e||null).max(10,"Número deve ter no máximo 10 caracteres."),address_complement:te().nullable().transform(e=>e||null).max(100,"Complemento deve ter no máximo 100 caracteres."),address_neighborhood:te().nullable().transform(e=>e||null).max(100,"Bairro deve ter no máximo 100 caracteres."),address_city:te().nullable().transform(e=>e||null).max(100,"Cidade deve ter no máximo 100 caracteres."),address_state:te().nullable().transform(e=>e||null).max(2,"UF deve ter 2 caracteres."),address_zip:te().nullable().transform(e=>e||null).test("cep-valido","CEP inválido. Use o formato 00000-000.",e=>e?e.replace(/\D/g,"").length===8:!0),bank_bank_name:te().nullable().transform(e=>e||null).max(100,"Nome do banco deve ter no máximo 100 caracteres."),bank_agency:te().max(10,"Agência deve ter no máximo 10 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Agência é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(m=>m||null)}),bank_agency_digit:te().nullable().transform(e=>e||null).max(2,"Dígito deve ter no máximo 2 caracteres."),bank_account:te().max(20,"Conta deve ter no máximo 20 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Conta é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(m=>m||null)}),bank_account_digit:te().nullable().transform(e=>e||null).max(2,"Dígito deve ter no máximo 2 caracteres."),bank_account_type:te().when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Tipo é obrigatório.").oneOf(["checking","savings"],"Tipo inválido."),otherwise:e=>e.nullable().transform(m=>m||null)})}),ln=[{key:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",fieldName:"contrato"},{key:"proof_of_address",type:"proof_of_address",label:"Comprovante de Endereço",fieldName:"documentos",docIndex:0},{key:"bank_account_proof",type:"bank_account_proof",label:"Comprovante Bancário",fieldName:"documentos",docIndex:1},{key:"card_machine_proof",type:"card_machine_proof",label:"Comprovante de Maquininha",fieldName:"documentos",docIndex:2}],cn=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],dn=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],fn=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],un=async e=>{if(!e.type.startsWith("image/"))return e;try{const m=await fe(e,{maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0,fileType:e.type});return new File([m],e.name,{type:e.type})}catch{return e}},hn=(e="")=>{const m=e.replace(/\D/g,"").slice(0,14);return m.length<=2?m:m.length<=5?`${m.slice(0,2)}.${m.slice(2)}`:m.length<=8?`${m.slice(0,2)}.${m.slice(2,5)}.${m.slice(5)}`:m.length<=12?`${m.slice(0,2)}.${m.slice(2,5)}.${m.slice(5,8)}/${m.slice(8)}`:`${m.slice(0,2)}.${m.slice(2,5)}.${m.slice(5,8)}/${m.slice(8,12)}-${m.slice(12)}`},pn=(e="")=>{const m=e.replace(/\D/g,"").slice(0,11);return m.length<=2?`(${m}`:m.length<=6?`(${m.slice(0,2)}) ${m.slice(2)}`:m.length<=10?`(${m.slice(0,2)}) ${m.slice(2,6)}-${m.slice(6)}`:`(${m.slice(0,2)}) ${m.slice(2,7)}-${m.slice(7)}`},gn=(e="")=>{const m=e.replace(/\D/g,"").slice(0,8);return m.length<=5?m:`${m.slice(0,5)}-${m.slice(5)}`},Ge=(e="")=>e.replace(/\D/g,""),Ve=(e=0)=>Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),mn=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function yn(){const e=m=>Array.from({length:m}).map((T,h)=>p.jsxs(re,{children:[p.jsx(Ue,{$w:"45%",$h:"11px"}),p.jsx(Ue,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},h));return p.jsxs(Br,{children:[p.jsxs(Lr,{children:[p.jsx(Ue,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),p.jsxs(Nr,{children:[p.jsx(Ue,{$w:"180px",$h:"28px"}),p.jsx(Ue,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]}),p.jsxs(wr,{children:[p.jsx(Ue,{$w:"35%",$h:"20px"}),p.jsx(jr,{}),p.jsx(Ze,{children:e(6)})]}),p.jsxs(wr,{children:[p.jsx(Ue,{$w:"40%",$h:"20px"}),p.jsx(jr,{}),p.jsx(Ue,{$h:"120px",style:{borderRadius:"8px"}})]})]})}function bn({slot:e,selectedFile:m,onFileSelect:T,onClearFile:h,disabled:r}){const t=je.useRef(null),c=!!m;return p.jsxs(Dt,{$hasFile:c,children:[p.jsx(Ht,{children:e.label}),c&&p.jsxs(Vt,{children:[p.jsx(it,{size:16,style:{color:"#B45A14",flexShrink:0}}),p.jsxs(Kt,{children:[p.jsx(Zt,{children:m.name}),p.jsxs(Yt,{children:[mn(m.size)," · Será comprimido ao enviar"]})]}),p.jsx(Xt,{type:"button",onClick:()=>h(e.key),disabled:r,children:p.jsx(at,{size:13})})]}),p.jsxs(Wt,{htmlFor:`doc-input-${e.key}`,children:[p.jsx(qt,{$hasFile:c,children:p.jsx(st,{size:22})}),p.jsx(Qt,{children:c?"Trocar arquivo":"Selecionar arquivo"}),p.jsx(Gt,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),p.jsx("input",{ref:t,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:r,onChange:s=>{var j;const x=(j=s.target.files)==null?void 0:j[0];if(x){if(x.size>3*1024*1024){We.error("Arquivo muito grande. O limite é 3 MB.");return}T(e.key,x),s.target.value=""}}}),p.jsx(Ye,{children:"Imagens serão comprimidas automaticamente antes do envio."})]})}function kn(){const e=Wr(),{isAdmin:m}=qr(),T=Qr(),{data:h=[],isLoading:r}=ar({queryKey:["plans"],queryFn:async()=>{const y=await ir.get("/plans?limit=100");return cr(y.data)},staleTime:1e3*60*5,refetchOnWindowFocus:!1}),{data:t=[],isLoading:c}=ar({queryKey:["flags"],queryFn:async()=>{const y=await ir.get("/flags?limit=100");return cr(y.data)},staleTime:1e3*60*5,refetchOnWindowFocus:!1}),{data:s=[],isLoading:x}=ar({queryKey:["partners"],queryFn:async()=>{const y=await ir.get("/users?role=partner&limit=100");return cr(y.data)},enabled:m,staleTime:1e3*60*5,refetchOnWindowFocus:!1}),j=r||c||x,[n,i]=je.useState(!1),[o,l]=je.useState(0),[g,k]=je.useState(""),[E,_]=je.useState("plan"),[B,P]=je.useState(""),[U,O]=je.useState([]),[v,I]=je.useState({}),[u,d]=je.useState(""),{register:b,handleSubmit:A,setValue:w,watch:F,formState:{errors:$}}=Kr({resolver:Zr(sn),defaultValues:{corporate_name:"",cnpj:"",email:"",state_registration:"",trade_name:"",phone:"",benefit_type:"food",notes:"",partner_id:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",bank_bank_name:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}});je.useEffect(()=>{b("cnpj")},[b]);const f=!!F("bank_bank_name"),a=(y,N)=>{I(Q=>({...Q,[y]:N}))},R=y=>{I(N=>{const Q={...N};return delete Q[y],Q})},M=t.filter(y=>U.includes(y.id)).reduce((y,N)=>y+(Number(N.price)||0),0),W=h.find(y=>y.id===B),L=async y=>{var N,Q;if(E==="plan"&&!B){We.error("Selecione um plano para continuar.");return}if(E==="individual"&&U.length===0){We.error("Selecione ao menos uma bandeira.");return}i(!0),l(0),k("compressing");try{const G=Object.keys(v).length>0,q={};if(G){const Y=Object.entries(v);for(let K=0;K<Y.length;K++){const[se,X]=Y[K];q[se]=await un(X),l(Math.round((K+1)/Y.length*20))}}k("uploading");const V={corporate_name:y.corporate_name,cnpj:Ge(y.cnpj||u),benefit_type:y.benefit_type,trade_name:y.trade_name||void 0,email:y.email||void 0,state_registration:y.state_registration||void 0,phone:Ge(y.phone)||void 0,notes:y.notes||void 0,partner_id:y.partner_id||void 0,address_street:y.address_street||void 0,address_number:y.address_number||void 0,address_complement:y.address_complement||void 0,address_neighborhood:y.address_neighborhood||void 0,address_city:y.address_city||void 0,address_state:y.address_state||void 0,address_zip:y.address_zip||void 0,...E==="plan"?{plan_id:B}:{flag_ids:U},...f?{bank_name:y.bank_bank_name,agency:y.bank_agency,agency_digit:y.bank_agency_digit||void 0,account:y.bank_account,account_digit:y.bank_account_digit||void 0,account_type:y.bank_account_type}:{}};Object.keys(V).forEach(Y=>V[Y]===void 0&&delete V[Y]);const Z=new FormData;Z.append("data",JSON.stringify(V)),q.contrato&&Z.append("contrato",q.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(Y=>{q[Y]&&Z.append("documentos",q[Y])});const{data:oe}=await Gr.post("/onboarding",Z,{onUploadProgress:Y=>{if(!Y.total)return;const K=Math.round(Y.loaded/Y.total*70);l(20+K),Y.loaded>=Y.total&&k("processing")}});l(100),await T.invalidateQueries({queryKey:["clients"]}),We.success("Cliente cadastrado com sucesso!",{autoClose:4e3});const _e=(Q=(N=oe.data)==null?void 0:N.client)==null?void 0:Q.id;e(_e?`/clientes/${_e}`:"/clientes",{replace:!0})}catch(G){l(0),k(""),We.error(Vr(G,"Erro ao cadastrar cliente."))}finally{i(!1)}},H=()=>n?g==="compressing"?p.jsxs(p.Fragment,{children:[p.jsx(lr,{}),"Comprimindo imagens…"]}):g==="processing"?p.jsxs(p.Fragment,{children:[p.jsx(lr,{}),"Processando…"]}):p.jsxs(p.Fragment,{children:[p.jsx(lr,{}),"Enviando… ",o,"%"]}):p.jsxs(p.Fragment,{children:[p.jsx(ot,{size:15}),"Cadastrar Cliente"]});if(j)return p.jsx(yn,{});const z=y=>{var N;return(N=$[y])==null?void 0:N.message};return p.jsxs(p.Fragment,{children:[p.jsxs(Br,{children:[p.jsxs(Lr,{children:[p.jsxs(vt,{type:"button",onClick:()=>e("/clientes"),children:[p.jsx(Xr,{size:15})," Voltar"]}),p.jsxs(Nr,{children:[p.jsx($t,{children:"Novo Cliente"}),p.jsx(_t,{children:"Preencha os dados para cadastrar o cliente"})]})]}),p.jsxs("form",{id:"create-client-form",onSubmit:A(L),noValidate:!0,children:[p.jsxs(Me,{style:{marginBottom:"24px"},children:[p.jsxs(Ne,{children:[p.jsx(De,{children:p.jsx(Jr,{size:18})}),p.jsx(He,{children:"Dados da Empresa"})]}),p.jsxs(Ze,{children:[p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"corporate_name",children:"Razão Social *"}),p.jsx(ce,{id:"corporate_name",type:"text",placeholder:"Razão social completa",$hasError:!!z("corporate_name"),disabled:n,...b("corporate_name")}),z("corporate_name")&&p.jsxs(be,{children:[p.jsx(ye,{size:11}),z("corporate_name")]})]}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"cnpj",children:"CNPJ *"}),p.jsx(ce,{id:"cnpj",type:"text",placeholder:"00.000.000/0001-00",disabled:n,value:u,onChange:y=>{const N=hn(y.target.value);d(N),w("cnpj",Ge(N),{shouldValidate:!0})}}),z("cnpj")&&p.jsxs(be,{children:[p.jsx(ye,{size:11}),z("cnpj")]})]}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"trade_name",children:"Nome Fantasia"}),p.jsx(ce,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",disabled:n,...b("trade_name")})]}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"state_registration",children:"Inscrição Estadual"}),p.jsx(ce,{id:"state_registration",type:"text",placeholder:"Inscrição estadual (opcional)",$hasError:!!z("state_registration"),disabled:n,...b("state_registration",{onChange:y=>w("state_registration",Ge(y.target.value))})}),z("state_registration")&&p.jsxs(be,{children:[p.jsx(ye,{size:11}),z("state_registration")]})]}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"phone",children:"Telefone"}),p.jsx(ce,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",$hasError:!!z("phone"),disabled:n,...b("phone",{onChange:y=>w("phone",pn(y.target.value))})}),z("phone")&&p.jsxs(be,{children:[p.jsx(ye,{size:11}),z("phone")]})]}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"email",children:"E-mail *"}),p.jsx(ce,{id:"email",type:"email",placeholder:"contato@empresa.com.br",$hasError:!!z("email"),disabled:n,...b("email")}),z("email")&&p.jsxs(be,{children:[p.jsx(ye,{size:11}),z("email")]})]}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),p.jsx(Qe,{id:"benefit_type",$hasError:!!z("benefit_type"),disabled:n,...b("benefit_type"),children:cn.map(y=>p.jsx("option",{value:y.value,children:y.label},y.value))}),z("benefit_type")&&p.jsxs(be,{children:[p.jsx(ye,{size:11}),z("benefit_type")]})]}),m&&p.jsxs(re,{children:[p.jsx(ne,{children:"Parceiro responsável"}),p.jsxs(Qe,{...b("partner_id"),disabled:j,children:[p.jsx("option",{value:"",children:"Nenhum"}),s.map(y=>p.jsx("option",{value:y.id,children:y.name},y.id))]})]}),p.jsx(br,{children:p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"notes",children:"Observações"}),p.jsx(wt,{id:"notes",placeholder:"Observações…",disabled:n,...b("notes")})]})})]})]}),p.jsxs(Me,{style:{marginBottom:"24px"},children:[p.jsxs(Ne,{children:[p.jsx(De,{children:p.jsx(mr,{size:18})}),p.jsx(He,{children:"Contratação"})]}),p.jsxs(kt,{children:[p.jsxs(xr,{type:"button",$active:E==="plan",disabled:n,onClick:()=>{_("plan"),O([])},children:[p.jsx(mr,{size:16})," Escolher Plano"]}),p.jsxs(xr,{type:"button",$active:E==="individual",disabled:n,onClick:()=>{_("individual"),P("")},children:[p.jsx(ct,{size:16})," Bandeiras Individuais"]})]}),E==="plan"&&p.jsxs(p.Fragment,{children:[h.length===0?p.jsx(Ar,{children:p.jsx(kr,{children:"Nenhum plano ativo encontrado."})}):p.jsx(Pt,{children:h.map(y=>{var Q;const N=B===y.id;return p.jsxs(Ft,{$selected:N,onClick:()=>!n&&P(y.id),children:[p.jsxs(Ct,{children:[p.jsx(St,{children:y.name}),p.jsx(Ut,{children:Ve(y.price)})]}),y.description&&p.jsx(Et,{children:y.description}),((Q=y.flags)==null?void 0:Q.length)>0&&p.jsx(zt,{children:y.flags.map(G=>p.jsx(It,{children:G.name},G.id))})]},y.id)})}),W&&p.jsxs(vr,{children:[p.jsxs($r,{children:["Plano selecionado: ",W.name]}),p.jsx(_r,{children:Ve(W.price)})]})]}),E==="individual"&&p.jsxs(p.Fragment,{children:[p.jsx(Ye,{style:{marginBottom:"12px",display:"block"},children:"Selecione ao menos uma bandeira. O valor total será a soma dos preços individuais."}),t.length===0?p.jsx(Ar,{children:p.jsx(kr,{children:"Nenhuma bandeira ativa encontrada."})}):p.jsx(Rt,{children:t.map(y=>{const N=U.includes(y.id),Q=()=>{n||O(G=>N?G.filter(q=>q!==y.id):[...G,y.id])};return p.jsxs(Tt,{$checked:N,onClick:Q,children:[p.jsx(Mt,{$checked:N,children:N&&p.jsx(lt,{size:11,color:"#fff",strokeWidth:3})}),p.jsxs(Ot,{children:[p.jsx(Bt,{children:y.name}),p.jsx(Lt,{children:Ve(y.price)})]})]},y.id)})}),U.length>0&&p.jsxs(vr,{children:[p.jsxs($r,{children:[U.length," bandeira",U.length!==1?"s":""," selecionada",U.length!==1?"s":""]}),p.jsx(_r,{children:Ve(M)})]})]})]}),p.jsxs(Me,{style:{marginBottom:"24px"},children:[p.jsxs(Ne,{children:[p.jsx(De,{children:p.jsx(et,{size:18})}),p.jsx(He,{children:"Endereço"})]}),p.jsxs(Ze,{children:[p.jsx(br,{children:p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"address_street",children:"Logradouro"}),p.jsx(ce,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",$hasError:!!z("address_street"),disabled:n,...b("address_street")}),z("address_street")&&p.jsxs(be,{children:[p.jsx(ye,{size:11}),z("address_street")]})]})}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"address_number",children:"Número"}),p.jsx(ce,{id:"address_number",type:"text",placeholder:"Nº",$hasError:!!z("address_number"),disabled:n,...b("address_number")}),z("address_number")&&p.jsxs(be,{children:[p.jsx(ye,{size:11}),z("address_number")]})]}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"address_complement",children:"Complemento"}),p.jsx(ce,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",disabled:n,...b("address_complement")})]}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"address_neighborhood",children:"Bairro"}),p.jsx(ce,{id:"address_neighborhood",type:"text",placeholder:"Bairro",disabled:n,...b("address_neighborhood")})]}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"address_city",children:"Cidade"}),p.jsx(ce,{id:"address_city",type:"text",placeholder:"Cidade",disabled:n,...b("address_city")})]}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"address_state",children:"UF"}),p.jsxs(Qe,{id:"address_state",disabled:n,...b("address_state"),children:[p.jsx("option",{value:"",children:"Selecione"}),fn.map(y=>p.jsx("option",{value:y,children:y},y))]})]}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"address_zip",children:"CEP"}),p.jsx(ce,{id:"address_zip",type:"text",placeholder:"00000-000",$hasError:!!z("address_zip"),disabled:n,...b("address_zip",{onChange:y=>w("address_zip",gn(y.target.value))})}),z("address_zip")&&p.jsxs(be,{children:[p.jsx(ye,{size:11}),z("address_zip")]})]})]})]}),p.jsxs(Me,{style:{marginBottom:"24px"},children:[p.jsxs(Ne,{children:[p.jsx(De,{children:p.jsx(rt,{size:18})}),p.jsx(He,{children:"Conta Bancária"})]}),p.jsxs(jt,{children:[p.jsx(At,{children:"Dados Bancários"}),f&&p.jsx(Ye,{style:{marginBottom:"12px",display:"block"},children:"Agência e conta são obrigatórios quando o banco é informado."}),p.jsxs(Ze,{children:[p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),p.jsx(ce,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",$hasError:!!z("bank_bank_name"),disabled:n,...b("bank_bank_name")}),z("bank_bank_name")&&p.jsxs(be,{children:[p.jsx(ye,{size:11}),z("bank_bank_name")]})]}),p.jsxs(re,{children:[p.jsxs(ne,{htmlFor:"bank_agency",children:["Agência ",f&&p.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),p.jsx(ce,{id:"bank_agency",type:"text",placeholder:"0000",$hasError:!!z("bank_agency"),disabled:n,...b("bank_agency")}),z("bank_agency")&&p.jsxs(be,{children:[p.jsx(ye,{size:11}),z("bank_agency")]})]}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),p.jsx(ce,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,disabled:n,...b("bank_agency_digit")})]}),p.jsxs(re,{children:[p.jsxs(ne,{htmlFor:"bank_account",children:["Conta ",f&&p.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),p.jsx(ce,{id:"bank_account",type:"text",placeholder:"000000",$hasError:!!z("bank_account"),disabled:n,...b("bank_account")}),z("bank_account")&&p.jsxs(be,{children:[p.jsx(ye,{size:11}),z("bank_account")]})]}),p.jsxs(re,{children:[p.jsx(ne,{htmlFor:"bank_account_digit",children:"Dígito Conta"}),p.jsx(ce,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,disabled:n,...b("bank_account_digit")})]}),p.jsxs(re,{children:[p.jsxs(ne,{htmlFor:"bank_account_type",children:["Tipo de Conta ",f&&p.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),p.jsx(Qe,{id:"bank_account_type",$hasError:!!z("bank_account_type"),disabled:n,...b("bank_account_type"),children:dn.map(y=>p.jsx("option",{value:y.value,children:y.label},y.value))}),z("bank_account_type")&&p.jsxs(be,{children:[p.jsx(ye,{size:11}),z("bank_account_type")]})]})]})]})]}),p.jsxs(Me,{style:{marginBottom:"24px"},children:[p.jsxs(Ne,{children:[p.jsx(De,{children:p.jsx(tt,{size:18})}),p.jsx(He,{children:"Documentos"})]}),p.jsx(Ye,{style:{marginBottom:"16px",display:"block"},children:"Documentos são opcionais e podem ser adicionados depois pela edição do cliente."}),p.jsx(Nt,{children:ln.map(y=>p.jsx(bn,{slot:y,selectedFile:v[y.key],onFileSelect:a,onClearFile:R,disabled:n},y.key))})]})]})]}),p.jsxs(Jt,{children:[p.jsxs(en,{type:"button",disabled:n,onClick:()=>e("/clientes"),children:[p.jsx(nt,{size:15})," Cancelar"]}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px"},children:[n&&p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",width:"220px"},children:[p.jsx(tn,{children:p.jsx(nn,{$percent:o})}),p.jsxs(on,{children:[o,"%"]})]}),p.jsx(rn,{type:"submit",form:"create-client-form",$isSubmitting:n,disabled:n,children:H()})]})]})]})}export{kn as default};
