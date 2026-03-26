import{c as fr,a as W,p as Cr,u as Qr,b as qr,r as pe,j as p,d as sr,B as Re,e as Gr,g as Vr}from"./index-NYSnQAlU.js";import{u as Zr}from"./index.esm-Cr1JiQTZ.js";import{o as Kr,a as Yr,c as oe}from"./index.esm-XIuVu1WX.js";import{A as Xr,B as Jr,M as et,L as rt,F as tt}from"./map-pin-CLyM_LJx.js";import{C as xe,X as nt}from"./x-BF42FSoD.js";import{S as ot,F as at,T as it,U as st}from"./upload-D4RbnDBi.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=fr("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=fr("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=fr("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);function dt(e,m){return m.forEach(function(P){P&&typeof P!="string"&&!Array.isArray(P)&&Object.keys(P).forEach(function(h){if(h!=="default"&&!(h in e)){var r=Object.getOwnPropertyDescriptor(P,h);Object.defineProperty(e,h,r.get?r:{enumerable:!0,get:function(){return P[h]}})}})}),Object.freeze(e)}function Sr(e,m){return new Promise(function(P,h){let r;return ft(e).then(function(t){try{return r=t,P(new Blob([m.slice(0,2),r,m.slice(2)],{type:"image/jpeg"}))}catch(c){return h(c)}},h)})}const ft=e=>new Promise((m,P)=>{const h=new FileReader;h.addEventListener("load",({target:{result:r}})=>{const t=new DataView(r);let c=0;if(t.getUint16(c)!==65496)return P("not a valid JPEG");for(c+=2;;){const s=t.getUint16(c);if(s===65498)break;const y=t.getUint16(c+2);if(s===65505&&t.getUint32(c+4)===1165519206){const w=c+10;let n;switch(t.getUint16(w)){case 18761:n=!0;break;case 19789:n=!1;break;default:return P("TIFF header contains invalid endian")}if(t.getUint16(w+2,n)!==42)return P("TIFF header contains invalid version");const a=t.getUint32(w+4,n),o=w+a+2+12*t.getUint16(w+a,n);for(let l=w+a+2;l<o;l+=12)if(t.getUint16(l,n)==274){if(t.getUint16(l+2,n)!==3)return P("Orientation data type is invalid");if(t.getUint32(l+4,n)!==1)return P("Orientation data count is invalid");t.setUint16(l+8,1,n);break}return m(r.slice(c,c+2+y))}c+=2+y}return m(new Blob)}),h.readAsArrayBuffer(e)});var er={},ut={get exports(){return er},set exports(e){er=e}};(function(e){var m,P,h={};ut.exports=h,h.parse=function(r,t){for(var c=h.bin.readUshort,s=h.bin.readUint,y=0,w={},n=new Uint8Array(r),a=n.length-4;s(n,a)!=101010256;)a--;y=a,y+=4;var o=c(n,y+=4);c(n,y+=2);var l=s(n,y+=2),g=s(n,y+=4);y+=4,y=g;for(var k=0;k<o;k++){s(n,y),y+=4,y+=4,y+=4,s(n,y+=4),l=s(n,y+=4);var U=s(n,y+=4),_=c(n,y+=4),B=c(n,y+2),I=c(n,y+4);y+=6;var S=s(n,y+=8);y+=4,y+=_+B+I,h._readLocal(n,S,w,l,U,t)}return w},h._readLocal=function(r,t,c,s,y,w){var n=h.bin.readUshort,a=h.bin.readUint;a(r,t),n(r,t+=4),n(r,t+=2);var o=n(r,t+=2);a(r,t+=2),a(r,t+=4),t+=4;var l=n(r,t+=8),g=n(r,t+=2);t+=2;var k=h.bin.readUTF8(r,t,l);if(t+=l,t+=g,w)c[k]={size:y,csize:s};else{var U=new Uint8Array(r.buffer,t);if(o==0)c[k]=new Uint8Array(U.buffer.slice(t,t+s));else{if(o!=8)throw"unknown compression method: "+o;var _=new Uint8Array(y);h.inflateRaw(U,_),c[k]=_}}},h.inflateRaw=function(r,t){return h.F.inflate(r,t)},h.inflate=function(r,t){return r[0],r[1],h.inflateRaw(new Uint8Array(r.buffer,r.byteOffset+2,r.length-6),t)},h.deflate=function(r,t){t==null&&(t={level:6});var c=0,s=new Uint8Array(50+Math.floor(1.1*r.length));s[c]=120,s[c+1]=156,c+=2,c=h.F.deflateRaw(r,s,c,t.level);var y=h.adler(r,0,r.length);return s[c+0]=y>>>24&255,s[c+1]=y>>>16&255,s[c+2]=y>>>8&255,s[c+3]=y>>>0&255,new Uint8Array(s.buffer,0,c+4)},h.deflateRaw=function(r,t){t==null&&(t={level:6});var c=new Uint8Array(50+Math.floor(1.1*r.length)),s=h.F.deflateRaw(r,c,s,t.level);return new Uint8Array(c.buffer,0,s)},h.encode=function(r,t){t==null&&(t=!1);var c=0,s=h.bin.writeUint,y=h.bin.writeUshort,w={};for(var n in r){var a=!h._noNeed(n)&&!t,o=r[n],l=h.crc.crc(o,0,o.length);w[n]={cpr:a,usize:o.length,crc:l,file:a?h.deflateRaw(o):o}}for(var n in w)c+=w[n].file.length+30+46+2*h.bin.sizeUTF8(n);c+=22;var g=new Uint8Array(c),k=0,U=[];for(var n in w){var _=w[n];U.push(k),k=h._writeHeader(g,k,n,_,0)}var B=0,I=k;for(var n in w)_=w[n],U.push(k),k=h._writeHeader(g,k,n,_,1,U[B++]);var S=k-I;return s(g,k,101010256),k+=4,y(g,k+=4,B),y(g,k+=2,B),s(g,k+=2,S),s(g,k+=4,I),k+=4,k+=2,g.buffer},h._noNeed=function(r){var t=r.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(t)!=-1},h._writeHeader=function(r,t,c,s,y,w){var n=h.bin.writeUint,a=h.bin.writeUshort,o=s.file;return n(r,t,y==0?67324752:33639248),t+=4,y==1&&(t+=2),a(r,t,20),a(r,t+=2,0),a(r,t+=2,s.cpr?8:0),n(r,t+=2,0),n(r,t+=4,s.crc),n(r,t+=4,o.length),n(r,t+=4,s.usize),a(r,t+=4,h.bin.sizeUTF8(c)),a(r,t+=2,0),t+=2,y==1&&(t+=2,t+=2,n(r,t+=6,w),t+=4),t+=h.bin.writeUTF8(r,t,c),y==0&&(r.set(o,t),t+=o.length),t},h.crc={table:function(){for(var r=new Uint32Array(256),t=0;t<256;t++){for(var c=t,s=0;s<8;s++)1&c?c=3988292384^c>>>1:c>>>=1;r[t]=c}return r}(),update:function(r,t,c,s){for(var y=0;y<s;y++)r=h.crc.table[255&(r^t[c+y])]^r>>>8;return r},crc:function(r,t,c){return 4294967295^h.crc.update(4294967295,r,t,c)}},h.adler=function(r,t,c){for(var s=1,y=0,w=t,n=t+c;w<n;){for(var a=Math.min(w+5552,n);w<a;)y+=s+=r[w++];s%=65521,y%=65521}return y<<16|s},h.bin={readUshort:function(r,t){return r[t]|r[t+1]<<8},writeUshort:function(r,t,c){r[t]=255&c,r[t+1]=c>>8&255},readUint:function(r,t){return 16777216*r[t+3]+(r[t+2]<<16|r[t+1]<<8|r[t])},writeUint:function(r,t,c){r[t]=255&c,r[t+1]=c>>8&255,r[t+2]=c>>16&255,r[t+3]=c>>24&255},readASCII:function(r,t,c){for(var s="",y=0;y<c;y++)s+=String.fromCharCode(r[t+y]);return s},writeASCII:function(r,t,c){for(var s=0;s<c.length;s++)r[t+s]=c.charCodeAt(s)},pad:function(r){return r.length<2?"0"+r:r},readUTF8:function(r,t,c){for(var s,y="",w=0;w<c;w++)y+="%"+h.bin.pad(r[t+w].toString(16));try{s=decodeURIComponent(y)}catch{return h.bin.readASCII(r,t,c)}return s},writeUTF8:function(r,t,c){for(var s=c.length,y=0,w=0;w<s;w++){var n=c.charCodeAt(w);if(!(4294967168&n))r[t+y]=n,y++;else if(!(4294965248&n))r[t+y]=192|n>>6,r[t+y+1]=128|n>>0&63,y+=2;else if(!(4294901760&n))r[t+y]=224|n>>12,r[t+y+1]=128|n>>6&63,r[t+y+2]=128|n>>0&63,y+=3;else{if(4292870144&n)throw"e";r[t+y]=240|n>>18,r[t+y+1]=128|n>>12&63,r[t+y+2]=128|n>>6&63,r[t+y+3]=128|n>>0&63,y+=4}}return y},sizeUTF8:function(r){for(var t=r.length,c=0,s=0;s<t;s++){var y=r.charCodeAt(s);if(!(4294967168&y))c++;else if(!(4294965248&y))c+=2;else if(!(4294901760&y))c+=3;else{if(4292870144&y)throw"e";c+=4}}return c}},h.F={},h.F.deflateRaw=function(r,t,c,s){var y=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][s],w=h.F.U,n=h.F._goodIndex;h.F._hash;var a=h.F._putsE,o=0,l=c<<3,g=0,k=r.length;if(s==0){for(;o<k;)a(t,l,o+(x=Math.min(65535,k-o))==k?1:0),l=h.F._copyExact(r,o,x,t,l+8),o+=x;return l>>>3}var U=w.lits,_=w.strt,B=w.prev,I=0,S=0,O=0,b=0,z=0,f=0;for(k>2&&(_[f=h.F._hash(r,0)]=0),o=0;o<k;o++){if(z=f,o+1<k-2){f=h.F._hash(r,o+1);var d=o+1&32767;B[d]=_[f],_[f]=d}if(g<=o){(I>14e3||S>26697)&&k-o>100&&(g<o&&(U[I]=o-g,I+=2,g=o),l=h.F._writeBlock(o==k-1||g==k?1:0,U,I,b,r,O,o-O,t,l),I=S=b=0,O=o);var v=0;o<k-2&&(v=h.F._bestMatch(r,o,B,z,Math.min(y[2],k-o),y[3]));var x=v>>>16,j=65535&v;if(v!=0){j=65535&v;var A=n(x=v>>>16,w.of0);w.lhst[257+A]++;var $=n(j,w.df0);w.dhst[$]++,b+=w.exb[A]+w.dxb[$],U[I]=x<<23|o-g,U[I+1]=j<<16|A<<8|$,I+=2,g=o+x}else w.lhst[r[o]]++;S++}}for(O==o&&r.length!=0||(g<o&&(U[I]=o-g,I+=2,g=o),l=h.F._writeBlock(1,U,I,b,r,O,o-O,t,l),I=0,S=0,I=S=b=0,O=o);7&l;)l++;return l>>>3},h.F._bestMatch=function(r,t,c,s,y,w){var n=32767&t,a=c[n],o=n-a+32768&32767;if(a==n||s!=h.F._hash(r,t-o))return 0;for(var l=0,g=0,k=Math.min(32767,t);o<=k&&--w!=0&&a!=n;){if(l==0||r[t+l]==r[t+l-o]){var U=h.F._howLong(r,t,o);if(U>l){if(g=o,(l=U)>=y)break;o+2<U&&(U=o+2);for(var _=0,B=0;B<U-2;B++){var I=t-o+B+32768&32767,S=I-c[I]+32768&32767;S>_&&(_=S,a=I)}}}o+=(n=a)-(a=c[n])+32768&32767}return l<<16|g},h.F._howLong=function(r,t,c){if(r[t]!=r[t-c]||r[t+1]!=r[t+1-c]||r[t+2]!=r[t+2-c])return 0;var s=t,y=Math.min(r.length,t+258);for(t+=3;t<y&&r[t]==r[t-c];)t++;return t-s},h.F._hash=function(r,t){return(r[t]<<8|r[t+1])+(r[t+2]<<4)&65535},h.saved=0,h.F._writeBlock=function(r,t,c,s,y,w,n,a,o){var l,g,k,U,_,B,I,S,O,b=h.F.U,z=h.F._putsF,f=h.F._putsE;b.lhst[256]++,g=(l=h.F.getTrees())[0],k=l[1],U=l[2],_=l[3],B=l[4],I=l[5],S=l[6],O=l[7];var d=32+(o+3&7?8-(o+3&7):0)+(n<<3),v=s+h.F.contSize(b.fltree,b.lhst)+h.F.contSize(b.fdtree,b.dhst),x=s+h.F.contSize(b.ltree,b.lhst)+h.F.contSize(b.dtree,b.dhst);x+=14+3*I+h.F.contSize(b.itree,b.ihst)+(2*b.ihst[16]+3*b.ihst[17]+7*b.ihst[18]);for(var j=0;j<286;j++)b.lhst[j]=0;for(j=0;j<30;j++)b.dhst[j]=0;for(j=0;j<19;j++)b.ihst[j]=0;var A=d<v&&d<x?0:v<x?1:2;if(z(a,o,r),z(a,o+1,A),o+=3,A==0){for(;7&o;)o++;o=h.F._copyExact(y,w,n,a,o)}else{var $,C;if(A==1&&($=b.fltree,C=b.fdtree),A==2){h.F.makeCodes(b.ltree,g),h.F.revCodes(b.ltree,g),h.F.makeCodes(b.dtree,k),h.F.revCodes(b.dtree,k),h.F.makeCodes(b.itree,U),h.F.revCodes(b.itree,U),$=b.ltree,C=b.dtree,f(a,o,_-257),f(a,o+=5,B-1),f(a,o+=5,I-4),o+=4;for(var u=0;u<I;u++)f(a,o+3*u,b.itree[1+(b.ordr[u]<<1)]);o+=3*I,o=h.F._codeTiny(S,b.itree,a,o),o=h.F._codeTiny(O,b.itree,a,o)}for(var i=w,R=0;R<c;R+=2){for(var F=t[R],T=F>>>23,q=i+(8388607&F);i<q;)o=h.F._writeLit(y[i++],$,a,o);if(T!=0){var D=t[R+1],H=D>>16,L=D>>8&255,E=255&D;f(a,o=h.F._writeLit(257+L,$,a,o),T-b.of0[L]),o+=b.exb[L],z(a,o=h.F._writeLit(E,C,a,o),H-b.df0[E]),o+=b.dxb[E],i+=T}}o=h.F._writeLit(256,$,a,o)}return o},h.F._copyExact=function(r,t,c,s,y){var w=y>>>3;return s[w]=c,s[w+1]=c>>>8,s[w+2]=255-s[w],s[w+3]=255-s[w+1],w+=4,s.set(new Uint8Array(r.buffer,t,c),w),y+(c+4<<3)},h.F.getTrees=function(){for(var r=h.F.U,t=h.F._hufTree(r.lhst,r.ltree,15),c=h.F._hufTree(r.dhst,r.dtree,15),s=[],y=h.F._lenCodes(r.ltree,s),w=[],n=h.F._lenCodes(r.dtree,w),a=0;a<s.length;a+=2)r.ihst[s[a]]++;for(a=0;a<w.length;a+=2)r.ihst[w[a]]++;for(var o=h.F._hufTree(r.ihst,r.itree,7),l=19;l>4&&r.itree[1+(r.ordr[l-1]<<1)]==0;)l--;return[t,c,o,y,n,l,s,w]},h.F.getSecond=function(r){for(var t=[],c=0;c<r.length;c+=2)t.push(r[c+1]);return t},h.F.nonZero=function(r){for(var t="",c=0;c<r.length;c+=2)r[c+1]!=0&&(t+=(c>>1)+",");return t},h.F.contSize=function(r,t){for(var c=0,s=0;s<t.length;s++)c+=t[s]*r[1+(s<<1)];return c},h.F._codeTiny=function(r,t,c,s){for(var y=0;y<r.length;y+=2){var w=r[y],n=r[y+1];s=h.F._writeLit(w,t,c,s);var a=w==16?2:w==17?3:7;w>15&&(h.F._putsE(c,s,n,a),s+=a)}return s},h.F._lenCodes=function(r,t){for(var c=r.length;c!=2&&r[c-1]==0;)c-=2;for(var s=0;s<c;s+=2){var y=r[s+1],w=s+3<c?r[s+3]:-1,n=s+5<c?r[s+5]:-1,a=s==0?-1:r[s-1];if(y==0&&w==y&&n==y){for(var o=s+5;o+2<c&&r[o+2]==y;)o+=2;(l=Math.min(o+1-s>>>1,138))<11?t.push(17,l-3):t.push(18,l-11),s+=2*l-2}else if(y==a&&w==y&&n==y){for(o=s+5;o+2<c&&r[o+2]==y;)o+=2;var l=Math.min(o+1-s>>>1,6);t.push(16,l-3),s+=2*l-2}else t.push(y,0)}return c>>>1},h.F._hufTree=function(r,t,c){var s=[],y=r.length,w=t.length,n=0;for(n=0;n<w;n+=2)t[n]=0,t[n+1]=0;for(n=0;n<y;n++)r[n]!=0&&s.push({lit:n,f:r[n]});var a=s.length,o=s.slice(0);if(a==0)return 0;if(a==1){var l=s[0].lit;return o=l==0?1:0,t[1+(l<<1)]=1,t[1+(o<<1)]=1,1}s.sort(function(S,O){return S.f-O.f});var g=s[0],k=s[1],U=0,_=1,B=2;for(s[0]={lit:-1,f:g.f+k.f,l:g,r:k,d:0};_!=a-1;)g=U!=_&&(B==a||s[U].f<s[B].f)?s[U++]:s[B++],k=U!=_&&(B==a||s[U].f<s[B].f)?s[U++]:s[B++],s[_++]={lit:-1,f:g.f+k.f,l:g,r:k};var I=h.F.setDepth(s[_-1],0);for(I>c&&(h.F.restrictDepth(o,c,I),I=c),n=0;n<a;n++)t[1+(o[n].lit<<1)]=o[n].d;return I},h.F.setDepth=function(r,t){return r.lit!=-1?(r.d=t,t):Math.max(h.F.setDepth(r.l,t+1),h.F.setDepth(r.r,t+1))},h.F.restrictDepth=function(r,t,c){var s=0,y=1<<c-t,w=0;for(r.sort(function(a,o){return o.d==a.d?a.f-o.f:o.d-a.d}),s=0;s<r.length&&r[s].d>t;s++){var n=r[s].d;r[s].d=t,w+=y-(1<<c-n)}for(w>>>=c-t;w>0;)(n=r[s].d)<t?(r[s].d++,w-=1<<t-n-1):s++;for(;s>=0;s--)r[s].d==t&&w<0&&(r[s].d--,w++);w!=0&&console.log("debt left")},h.F._goodIndex=function(r,t){var c=0;return t[16|c]<=r&&(c|=16),t[8|c]<=r&&(c|=8),t[4|c]<=r&&(c|=4),t[2|c]<=r&&(c|=2),t[1|c]<=r&&(c|=1),c},h.F._writeLit=function(r,t,c,s){return h.F._putsF(c,s,t[r<<1]),s+t[1+(r<<1)]},h.F.inflate=function(r,t){var c=Uint8Array;if(r[0]==3&&r[1]==0)return t||new c(0);var s=h.F,y=s._bitsF,w=s._bitsE,n=s._decodeTiny,a=s.makeCodes,o=s.codes2map,l=s._get17,g=s.U,k=t==null;k&&(t=new c(r.length>>>2<<3));for(var U,_,B=0,I=0,S=0,O=0,b=0,z=0,f=0,d=0,v=0;B==0;)if(B=y(r,v,1),I=y(r,v+1,2),v+=3,I!=0){if(k&&(t=h.F._check(t,d+(1<<17))),I==1&&(U=g.flmap,_=g.fdmap,z=511,f=31),I==2){S=w(r,v,5)+257,O=w(r,v+5,5)+1,b=w(r,v+10,4)+4,v+=14;for(var x=0;x<38;x+=2)g.itree[x]=0,g.itree[x+1]=0;var j=1;for(x=0;x<b;x++){var A=w(r,v+3*x,3);g.itree[1+(g.ordr[x]<<1)]=A,A>j&&(j=A)}v+=3*b,a(g.itree,j),o(g.itree,j,g.imap),U=g.lmap,_=g.dmap,v=n(g.imap,(1<<j)-1,S+O,r,v,g.ttree);var $=s._copyOut(g.ttree,0,S,g.ltree);z=(1<<$)-1;var C=s._copyOut(g.ttree,S,O,g.dtree);f=(1<<C)-1,a(g.ltree,$),o(g.ltree,$,U),a(g.dtree,C),o(g.dtree,C,_)}for(;;){var u=U[l(r,v)&z];v+=15&u;var i=u>>>4;if(!(i>>>8))t[d++]=i;else{if(i==256)break;var R=d+i-254;if(i>264){var F=g.ldef[i-257];R=d+(F>>>3)+w(r,v,7&F),v+=7&F}var T=_[l(r,v)&f];v+=15&T;var q=T>>>4,D=g.ddef[q],H=(D>>>4)+y(r,v,15&D);for(v+=15&D,k&&(t=h.F._check(t,d+(1<<17)));d<R;)t[d]=t[d++-H],t[d]=t[d++-H],t[d]=t[d++-H],t[d]=t[d++-H];d=R}}}else{7&v&&(v+=8-(7&v));var L=4+(v>>>3),E=r[L-4]|r[L-3]<<8;k&&(t=h.F._check(t,d+E)),t.set(new c(r.buffer,r.byteOffset+L,E),d),v=L+E<<3,d+=E}return t.length==d?t:t.slice(0,d)},h.F._check=function(r,t){var c=r.length;if(t<=c)return r;var s=new Uint8Array(Math.max(c<<1,t));return s.set(r,0),s},h.F._decodeTiny=function(r,t,c,s,y,w){for(var n=h.F._bitsE,a=h.F._get17,o=0;o<c;){var l=r[a(s,y)&t];y+=15&l;var g=l>>>4;if(g<=15)w[o]=g,o++;else{var k=0,U=0;g==16?(U=3+n(s,y,2),y+=2,k=w[o-1]):g==17?(U=3+n(s,y,3),y+=3):g==18&&(U=11+n(s,y,7),y+=7);for(var _=o+U;o<_;)w[o]=k,o++}}return y},h.F._copyOut=function(r,t,c,s){for(var y=0,w=0,n=s.length>>>1;w<c;){var a=r[w+t];s[w<<1]=0,s[1+(w<<1)]=a,a>y&&(y=a),w++}for(;w<n;)s[w<<1]=0,s[1+(w<<1)]=0,w++;return y},h.F.makeCodes=function(r,t){for(var c,s,y,w,n=h.F.U,a=r.length,o=n.bl_count,l=0;l<=t;l++)o[l]=0;for(l=1;l<a;l+=2)o[r[l]]++;var g=n.next_code;for(c=0,o[0]=0,s=1;s<=t;s++)c=c+o[s-1]<<1,g[s]=c;for(y=0;y<a;y+=2)(w=r[y+1])!=0&&(r[y]=g[w],g[w]++)},h.F.codes2map=function(r,t,c){for(var s=r.length,y=h.F.U.rev15,w=0;w<s;w+=2)if(r[w+1]!=0)for(var n=w>>1,a=r[w+1],o=n<<4|a,l=t-a,g=r[w]<<l,k=g+(1<<l);g!=k;)c[y[g]>>>15-t]=o,g++},h.F.revCodes=function(r,t){for(var c=h.F.U.rev15,s=15-t,y=0;y<r.length;y+=2){var w=r[y]<<t-r[y+1];r[y]=c[w]>>>s}},h.F._putsE=function(r,t,c){c<<=7&t;var s=t>>>3;r[s]|=c,r[s+1]|=c>>>8},h.F._putsF=function(r,t,c){c<<=7&t;var s=t>>>3;r[s]|=c,r[s+1]|=c>>>8,r[s+2]|=c>>>16},h.F._bitsE=function(r,t,c){return(r[t>>>3]|r[1+(t>>>3)]<<8)>>>(7&t)&(1<<c)-1},h.F._bitsF=function(r,t,c){return(r[t>>>3]|r[1+(t>>>3)]<<8|r[2+(t>>>3)]<<16)>>>(7&t)&(1<<c)-1},h.F._get17=function(r,t){return(r[t>>>3]|r[1+(t>>>3)]<<8|r[2+(t>>>3)]<<16)>>>(7&t)},h.F._get25=function(r,t){return(r[t>>>3]|r[1+(t>>>3)]<<8|r[2+(t>>>3)]<<16|r[3+(t>>>3)]<<24)>>>(7&t)},h.F.U=(m=Uint16Array,P=Uint32Array,{next_code:new m(16),bl_count:new m(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new m(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new P(32),flmap:new m(512),fltree:[],fdmap:new m(32),fdtree:[],lmap:new m(32768),ltree:[],ttree:[],dmap:new m(32768),dtree:[],imap:new m(512),itree:[],rev15:new m(32768),lhst:new P(286),dhst:new P(30),ihst:new P(19),lits:new P(15e3),strt:new m(65536),prev:new m(32768)}),function(){for(var r=h.F.U,t=0;t<32768;t++){var c=t;c=(4278255360&(c=(4042322160&(c=(3435973836&(c=(2863311530&c)>>>1|(1431655765&c)<<1))>>>2|(858993459&c)<<2))>>>4|(252645135&c)<<4))>>>8|(16711935&c)<<8,r.rev15[t]=(c>>>16|c<<16)>>>17}function s(y,w,n){for(;w--!=0;)y.push(0,n)}for(t=0;t<32;t++)r.ldef[t]=r.of0[t]<<3|r.exb[t],r.ddef[t]=r.df0[t]<<4|r.dxb[t];s(r.fltree,144,8),s(r.fltree,112,9),s(r.fltree,24,7),s(r.fltree,8,8),h.F.makeCodes(r.fltree,9),h.F.codes2map(r.fltree,9,r.flmap),h.F.revCodes(r.fltree,9),s(r.fdtree,32,5),h.F.makeCodes(r.fdtree,5),h.F.codes2map(r.fdtree,5,r.fdmap),h.F.revCodes(r.fdtree,5),s(r.itree,19,0),s(r.ltree,286,0),s(r.dtree,30,0),s(r.ttree,320,0)}()})();var ht=dt({__proto__:null,default:er},[er]);const we=function(){var e={nextZero(n,a){for(;n[a]!=0;)a++;return a},readUshort:(n,a)=>n[a]<<8|n[a+1],writeUshort(n,a,o){n[a]=o>>8&255,n[a+1]=255&o},readUint:(n,a)=>16777216*n[a]+(n[a+1]<<16|n[a+2]<<8|n[a+3]),writeUint(n,a,o){n[a]=o>>24&255,n[a+1]=o>>16&255,n[a+2]=o>>8&255,n[a+3]=255&o},readASCII(n,a,o){let l="";for(let g=0;g<o;g++)l+=String.fromCharCode(n[a+g]);return l},writeASCII(n,a,o){for(let l=0;l<o.length;l++)n[a+l]=o.charCodeAt(l)},readBytes(n,a,o){const l=[];for(let g=0;g<o;g++)l.push(n[a+g]);return l},pad:n=>n.length<2?`0${n}`:n,readUTF8(n,a,o){let l,g="";for(let k=0;k<o;k++)g+=`%${e.pad(n[a+k].toString(16))}`;try{l=decodeURIComponent(g)}catch{return e.readASCII(n,a,o)}return l}};function m(n,a,o,l){const g=a*o,k=t(l),U=Math.ceil(a*k/8),_=new Uint8Array(4*g),B=new Uint32Array(_.buffer),{ctype:I}=l,{depth:S}=l,O=e.readUshort;if(I==6){const F=g<<2;if(S==8)for(var b=0;b<F;b+=4)_[b]=n[b],_[b+1]=n[b+1],_[b+2]=n[b+2],_[b+3]=n[b+3];if(S==16)for(b=0;b<F;b++)_[b]=n[b<<1]}else if(I==2){const F=l.tabs.tRNS;if(F==null){if(S==8)for(b=0;b<g;b++){var z=3*b;B[b]=255<<24|n[z+2]<<16|n[z+1]<<8|n[z]}if(S==16)for(b=0;b<g;b++)z=6*b,B[b]=255<<24|n[z+4]<<16|n[z+2]<<8|n[z]}else{var f=F[0];const T=F[1],q=F[2];if(S==8)for(b=0;b<g;b++){var d=b<<2;z=3*b,B[b]=255<<24|n[z+2]<<16|n[z+1]<<8|n[z],n[z]==f&&n[z+1]==T&&n[z+2]==q&&(_[d+3]=0)}if(S==16)for(b=0;b<g;b++)d=b<<2,z=6*b,B[b]=255<<24|n[z+4]<<16|n[z+2]<<8|n[z],O(n,z)==f&&O(n,z+2)==T&&O(n,z+4)==q&&(_[d+3]=0)}}else if(I==3){const F=l.tabs.PLTE,T=l.tabs.tRNS,q=T?T.length:0;if(S==1)for(var v=0;v<o;v++){var x=v*U,j=v*a;for(b=0;b<a;b++){d=j+b<<2;var A=3*($=n[x+(b>>3)]>>7-((7&b)<<0)&1);_[d]=F[A],_[d+1]=F[A+1],_[d+2]=F[A+2],_[d+3]=$<q?T[$]:255}}if(S==2)for(v=0;v<o;v++)for(x=v*U,j=v*a,b=0;b<a;b++)d=j+b<<2,A=3*($=n[x+(b>>2)]>>6-((3&b)<<1)&3),_[d]=F[A],_[d+1]=F[A+1],_[d+2]=F[A+2],_[d+3]=$<q?T[$]:255;if(S==4)for(v=0;v<o;v++)for(x=v*U,j=v*a,b=0;b<a;b++)d=j+b<<2,A=3*($=n[x+(b>>1)]>>4-((1&b)<<2)&15),_[d]=F[A],_[d+1]=F[A+1],_[d+2]=F[A+2],_[d+3]=$<q?T[$]:255;if(S==8)for(b=0;b<g;b++){var $;d=b<<2,A=3*($=n[b]),_[d]=F[A],_[d+1]=F[A+1],_[d+2]=F[A+2],_[d+3]=$<q?T[$]:255}}else if(I==4){if(S==8)for(b=0;b<g;b++){d=b<<2;var C=n[u=b<<1];_[d]=C,_[d+1]=C,_[d+2]=C,_[d+3]=n[u+1]}if(S==16)for(b=0;b<g;b++){var u;d=b<<2,C=n[u=b<<2],_[d]=C,_[d+1]=C,_[d+2]=C,_[d+3]=n[u+2]}}else if(I==0)for(f=l.tabs.tRNS?l.tabs.tRNS:-1,v=0;v<o;v++){const F=v*U,T=v*a;if(S==1)for(var i=0;i<a;i++){var R=(C=255*(n[F+(i>>>3)]>>>7-(7&i)&1))==255*f?0:255;B[T+i]=R<<24|C<<16|C<<8|C}else if(S==2)for(i=0;i<a;i++)R=(C=85*(n[F+(i>>>2)]>>>6-((3&i)<<1)&3))==85*f?0:255,B[T+i]=R<<24|C<<16|C<<8|C;else if(S==4)for(i=0;i<a;i++)R=(C=17*(n[F+(i>>>1)]>>>4-((1&i)<<2)&15))==17*f?0:255,B[T+i]=R<<24|C<<16|C<<8|C;else if(S==8)for(i=0;i<a;i++)R=(C=n[F+i])==f?0:255,B[T+i]=R<<24|C<<16|C<<8|C;else if(S==16)for(i=0;i<a;i++)C=n[F+(i<<1)],R=O(n,F+(i<<1))==f?0:255,B[T+i]=R<<24|C<<16|C<<8|C}return _}function P(n,a,o,l){const g=t(n),k=Math.ceil(o*g/8),U=new Uint8Array((k+1+n.interlace)*l);return a=n.tabs.CgBI?r(a,U):h(a,U),n.interlace==0?a=c(a,n,0,o,l):n.interlace==1&&(a=function(B,I){const S=I.width,O=I.height,b=t(I),z=b>>3,f=Math.ceil(S*b/8),d=new Uint8Array(O*f);let v=0;const x=[0,0,4,0,2,0,1],j=[0,4,0,2,0,1,0],A=[8,8,8,4,4,2,2],$=[8,8,4,4,2,2,1];let C=0;for(;C<7;){const i=A[C],R=$[C];let F=0,T=0,q=x[C];for(;q<O;)q+=i,T++;let D=j[C];for(;D<S;)D+=R,F++;const H=Math.ceil(F*b/8);c(B,I,v,F,T);let L=0,E=x[C];for(;E<O;){let N=j[C],M=v+L*H<<3;for(;N<S;){var u;if(b==1&&(u=(u=B[M>>3])>>7-(7&M)&1,d[E*f+(N>>3)]|=u<<7-((7&N)<<0)),b==2&&(u=(u=B[M>>3])>>6-(7&M)&3,d[E*f+(N>>2)]|=u<<6-((3&N)<<1)),b==4&&(u=(u=B[M>>3])>>4-(7&M)&15,d[E*f+(N>>1)]|=u<<4-((1&N)<<2)),b>=8){const Q=E*f+N*z;for(let G=0;G<z;G++)d[Q+G]=B[(M>>3)+G]}M+=b,N+=R}L++,E+=i}F*T!=0&&(v+=T*(1+H)),C+=1}return d}(a,n)),a}function h(n,a){return r(new Uint8Array(n.buffer,2,n.length-6),a)}var r=function(){const n={H:{}};return n.H.N=function(a,o){const l=Uint8Array;let g,k,U=0,_=0,B=0,I=0,S=0,O=0,b=0,z=0,f=0;if(a[0]==3&&a[1]==0)return o||new l(0);const d=n.H,v=d.b,x=d.e,j=d.R,A=d.n,$=d.A,C=d.Z,u=d.m,i=o==null;for(i&&(o=new l(a.length>>>2<<5));U==0;)if(U=v(a,f,1),_=v(a,f+1,2),f+=3,_!=0){if(i&&(o=n.H.W(o,z+(1<<17))),_==1&&(g=u.J,k=u.h,O=511,b=31),_==2){B=x(a,f,5)+257,I=x(a,f+5,5)+1,S=x(a,f+10,4)+4,f+=14;let F=1;for(var R=0;R<38;R+=2)u.Q[R]=0,u.Q[R+1]=0;for(R=0;R<S;R++){const D=x(a,f+3*R,3);u.Q[1+(u.X[R]<<1)]=D,D>F&&(F=D)}f+=3*S,A(u.Q,F),$(u.Q,F,u.u),g=u.w,k=u.d,f=j(u.u,(1<<F)-1,B+I,a,f,u.v);const T=d.V(u.v,0,B,u.C);O=(1<<T)-1;const q=d.V(u.v,B,I,u.D);b=(1<<q)-1,A(u.C,T),$(u.C,T,g),A(u.D,q),$(u.D,q,k)}for(;;){const F=g[C(a,f)&O];f+=15&F;const T=F>>>4;if(!(T>>>8))o[z++]=T;else{if(T==256)break;{let q=z+T-254;if(T>264){const N=u.q[T-257];q=z+(N>>>3)+x(a,f,7&N),f+=7&N}const D=k[C(a,f)&b];f+=15&D;const H=D>>>4,L=u.c[H],E=(L>>>4)+v(a,f,15&L);for(f+=15&L;z<q;)o[z]=o[z++-E],o[z]=o[z++-E],o[z]=o[z++-E],o[z]=o[z++-E];z=q}}}}else{7&f&&(f+=8-(7&f));const F=4+(f>>>3),T=a[F-4]|a[F-3]<<8;i&&(o=n.H.W(o,z+T)),o.set(new l(a.buffer,a.byteOffset+F,T),z),f=F+T<<3,z+=T}return o.length==z?o:o.slice(0,z)},n.H.W=function(a,o){const l=a.length;if(o<=l)return a;const g=new Uint8Array(l<<1);return g.set(a,0),g},n.H.R=function(a,o,l,g,k,U){const _=n.H.e,B=n.H.Z;let I=0;for(;I<l;){const S=a[B(g,k)&o];k+=15&S;const O=S>>>4;if(O<=15)U[I]=O,I++;else{let b=0,z=0;O==16?(z=3+_(g,k,2),k+=2,b=U[I-1]):O==17?(z=3+_(g,k,3),k+=3):O==18&&(z=11+_(g,k,7),k+=7);const f=I+z;for(;I<f;)U[I]=b,I++}}return k},n.H.V=function(a,o,l,g){let k=0,U=0;const _=g.length>>>1;for(;U<l;){const B=a[U+o];g[U<<1]=0,g[1+(U<<1)]=B,B>k&&(k=B),U++}for(;U<_;)g[U<<1]=0,g[1+(U<<1)]=0,U++;return k},n.H.n=function(a,o){const l=n.H.m,g=a.length;let k,U,_,B;const I=l.j;for(var S=0;S<=o;S++)I[S]=0;for(S=1;S<g;S+=2)I[a[S]]++;const O=l.K;for(k=0,I[0]=0,U=1;U<=o;U++)k=k+I[U-1]<<1,O[U]=k;for(_=0;_<g;_+=2)B=a[_+1],B!=0&&(a[_]=O[B],O[B]++)},n.H.A=function(a,o,l){const g=a.length,k=n.H.m.r;for(let U=0;U<g;U+=2)if(a[U+1]!=0){const _=U>>1,B=a[U+1],I=_<<4|B,S=o-B;let O=a[U]<<S;const b=O+(1<<S);for(;O!=b;)l[k[O]>>>15-o]=I,O++}},n.H.l=function(a,o){const l=n.H.m.r,g=15-o;for(let k=0;k<a.length;k+=2){const U=a[k]<<o-a[k+1];a[k]=l[U]>>>g}},n.H.M=function(a,o,l){l<<=7&o;const g=o>>>3;a[g]|=l,a[g+1]|=l>>>8},n.H.I=function(a,o,l){l<<=7&o;const g=o>>>3;a[g]|=l,a[g+1]|=l>>>8,a[g+2]|=l>>>16},n.H.e=function(a,o,l){return(a[o>>>3]|a[1+(o>>>3)]<<8)>>>(7&o)&(1<<l)-1},n.H.b=function(a,o,l){return(a[o>>>3]|a[1+(o>>>3)]<<8|a[2+(o>>>3)]<<16)>>>(7&o)&(1<<l)-1},n.H.Z=function(a,o){return(a[o>>>3]|a[1+(o>>>3)]<<8|a[2+(o>>>3)]<<16)>>>(7&o)},n.H.i=function(a,o){return(a[o>>>3]|a[1+(o>>>3)]<<8|a[2+(o>>>3)]<<16|a[3+(o>>>3)]<<24)>>>(7&o)},n.H.m=function(){const a=Uint16Array,o=Uint32Array;return{K:new a(16),j:new a(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new a(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new o(32),J:new a(512),_:[],h:new a(32),$:[],w:new a(32768),C:[],v:[],d:new a(32768),D:[],u:new a(512),Q:[],r:new a(32768),s:new o(286),Y:new o(30),a:new o(19),t:new o(15e3),k:new a(65536),g:new a(32768)}}(),function(){const a=n.H.m;for(var o=0;o<32768;o++){let g=o;g=(2863311530&g)>>>1|(1431655765&g)<<1,g=(3435973836&g)>>>2|(858993459&g)<<2,g=(4042322160&g)>>>4|(252645135&g)<<4,g=(4278255360&g)>>>8|(16711935&g)<<8,a.r[o]=(g>>>16|g<<16)>>>17}function l(g,k,U){for(;k--!=0;)g.push(0,U)}for(o=0;o<32;o++)a.q[o]=a.S[o]<<3|a.T[o],a.c[o]=a.p[o]<<4|a.z[o];l(a._,144,8),l(a._,112,9),l(a._,24,7),l(a._,8,8),n.H.n(a._,9),n.H.A(a._,9,a.J),n.H.l(a._,9),l(a.$,32,5),n.H.n(a.$,5),n.H.A(a.$,5,a.h),n.H.l(a.$,5),l(a.Q,19,0),l(a.C,286,0),l(a.D,30,0),l(a.v,320,0)}(),n.H.N}();function t(n){return[1,null,3,1,2,null,4][n.ctype]*n.depth}function c(n,a,o,l,g){let k=t(a);const U=Math.ceil(l*k/8);let _,B;k=Math.ceil(k/8);let I=n[o],S=0;if(I>1&&(n[o]=[0,0,1][I-2]),I==3)for(S=k;S<U;S++)n[S+1]=n[S+1]+(n[S+1-k]>>>1)&255;for(let O=0;O<g;O++)if(_=o+O*U,B=_+O+1,I=n[B-1],S=0,I==0)for(;S<U;S++)n[_+S]=n[B+S];else if(I==1){for(;S<k;S++)n[_+S]=n[B+S];for(;S<U;S++)n[_+S]=n[B+S]+n[_+S-k]}else if(I==2)for(;S<U;S++)n[_+S]=n[B+S]+n[_+S-U];else if(I==3){for(;S<k;S++)n[_+S]=n[B+S]+(n[_+S-U]>>>1);for(;S<U;S++)n[_+S]=n[B+S]+(n[_+S-U]+n[_+S-k]>>>1)}else{for(;S<k;S++)n[_+S]=n[B+S]+s(0,n[_+S-U],0);for(;S<U;S++)n[_+S]=n[B+S]+s(n[_+S-k],n[_+S-U],n[_+S-k-U])}return n}function s(n,a,o){const l=n+a-o,g=l-n,k=l-a,U=l-o;return g*g<=k*k&&g*g<=U*U?n:k*k<=U*U?a:o}function y(n,a,o){o.width=e.readUint(n,a),a+=4,o.height=e.readUint(n,a),a+=4,o.depth=n[a],a++,o.ctype=n[a],a++,o.compress=n[a],a++,o.filter=n[a],a++,o.interlace=n[a],a++}function w(n,a,o,l,g,k,U,_,B){const I=Math.min(a,g),S=Math.min(o,k);let O=0,b=0;for(let C=0;C<S;C++)for(let u=0;u<I;u++)if(U>=0&&_>=0?(O=C*a+u<<2,b=(_+C)*g+U+u<<2):(O=(-_+C)*a-U+u<<2,b=C*g+u<<2),B==0)l[b]=n[O],l[b+1]=n[O+1],l[b+2]=n[O+2],l[b+3]=n[O+3];else if(B==1){var z=n[O+3]*.00392156862745098,f=n[O]*z,d=n[O+1]*z,v=n[O+2]*z,x=l[b+3]*(1/255),j=l[b]*x,A=l[b+1]*x,$=l[b+2]*x;const i=1-z,R=z+x*i,F=R==0?0:1/R;l[b+3]=255*R,l[b+0]=(f+j*i)*F,l[b+1]=(d+A*i)*F,l[b+2]=(v+$*i)*F}else if(B==2)z=n[O+3],f=n[O],d=n[O+1],v=n[O+2],x=l[b+3],j=l[b],A=l[b+1],$=l[b+2],z==x&&f==j&&d==A&&v==$?(l[b]=0,l[b+1]=0,l[b+2]=0,l[b+3]=0):(l[b]=f,l[b+1]=d,l[b+2]=v,l[b+3]=z);else if(B==3){if(z=n[O+3],f=n[O],d=n[O+1],v=n[O+2],x=l[b+3],j=l[b],A=l[b+1],$=l[b+2],z==x&&f==j&&d==A&&v==$)continue;if(z<220&&x>20)return!1}return!0}return{decode:function(a){const o=new Uint8Array(a);let l=8;const g=e,k=g.readUshort,U=g.readUint,_={tabs:{},frames:[]},B=new Uint8Array(o.length);let I,S=0,O=0;const b=[137,80,78,71,13,10,26,10];for(var z=0;z<8;z++)if(o[z]!=b[z])throw"The input is not a PNG file!";for(;l<o.length;){const C=g.readUint(o,l);l+=4;const u=g.readASCII(o,l,4);if(l+=4,u=="IHDR")y(o,l,_);else if(u=="iCCP"){for(var f=l;o[f]!=0;)f++;g.readASCII(o,l,f-l),o[f+1];const i=o.slice(f+2,l+C);let R=null;try{R=h(i)}catch{R=r(i)}_.tabs[u]=R}else if(u=="CgBI")_.tabs[u]=o.slice(l,l+4);else if(u=="IDAT"){for(z=0;z<C;z++)B[S+z]=o[l+z];S+=C}else if(u=="acTL")_.tabs[u]={num_frames:U(o,l),num_plays:U(o,l+4)},I=new Uint8Array(o.length);else if(u=="fcTL"){O!=0&&(($=_.frames[_.frames.length-1]).data=P(_,I.slice(0,O),$.rect.width,$.rect.height),O=0);const i={x:U(o,l+12),y:U(o,l+16),width:U(o,l+4),height:U(o,l+8)};let R=k(o,l+22);R=k(o,l+20)/(R==0?100:R);const F={rect:i,delay:Math.round(1e3*R),dispose:o[l+24],blend:o[l+25]};_.frames.push(F)}else if(u=="fdAT"){for(z=0;z<C-4;z++)I[O+z]=o[l+z+4];O+=C-4}else if(u=="pHYs")_.tabs[u]=[g.readUint(o,l),g.readUint(o,l+4),o[l+8]];else if(u=="cHRM")for(_.tabs[u]=[],z=0;z<8;z++)_.tabs[u].push(g.readUint(o,l+4*z));else if(u=="tEXt"||u=="zTXt"){_.tabs[u]==null&&(_.tabs[u]={});var d=g.nextZero(o,l),v=g.readASCII(o,l,d-l),x=l+C-d-1;if(u=="tEXt")A=g.readASCII(o,d+1,x);else{var j=h(o.slice(d+2,d+2+x));A=g.readUTF8(j,0,j.length)}_.tabs[u][v]=A}else if(u=="iTXt"){_.tabs[u]==null&&(_.tabs[u]={}),d=0,f=l,d=g.nextZero(o,f),v=g.readASCII(o,f,d-f);const i=o[f=d+1];var A;o[f+1],f+=2,d=g.nextZero(o,f),g.readASCII(o,f,d-f),f=d+1,d=g.nextZero(o,f),g.readUTF8(o,f,d-f),x=C-((f=d+1)-l),i==0?A=g.readUTF8(o,f,x):(j=h(o.slice(f,f+x)),A=g.readUTF8(j,0,j.length)),_.tabs[u][v]=A}else if(u=="PLTE")_.tabs[u]=g.readBytes(o,l,C);else if(u=="hIST"){const i=_.tabs.PLTE.length/3;for(_.tabs[u]=[],z=0;z<i;z++)_.tabs[u].push(k(o,l+2*z))}else if(u=="tRNS")_.ctype==3?_.tabs[u]=g.readBytes(o,l,C):_.ctype==0?_.tabs[u]=k(o,l):_.ctype==2&&(_.tabs[u]=[k(o,l),k(o,l+2),k(o,l+4)]);else if(u=="gAMA")_.tabs[u]=g.readUint(o,l)/1e5;else if(u=="sRGB")_.tabs[u]=o[l];else if(u=="bKGD")_.ctype==0||_.ctype==4?_.tabs[u]=[k(o,l)]:_.ctype==2||_.ctype==6?_.tabs[u]=[k(o,l),k(o,l+2),k(o,l+4)]:_.ctype==3&&(_.tabs[u]=o[l]);else if(u=="IEND")break;l+=C,g.readUint(o,l),l+=4}var $;return O!=0&&(($=_.frames[_.frames.length-1]).data=P(_,I.slice(0,O),$.rect.width,$.rect.height)),_.data=P(_,B,_.width,_.height),delete _.compress,delete _.interlace,delete _.filter,_},toRGBA8:function(a){const o=a.width,l=a.height;if(a.tabs.acTL==null)return[m(a.data,o,l,a).buffer];const g=[];a.frames[0].data==null&&(a.frames[0].data=a.data);const k=o*l*4,U=new Uint8Array(k),_=new Uint8Array(k),B=new Uint8Array(k);for(let S=0;S<a.frames.length;S++){const O=a.frames[S],b=O.rect.x,z=O.rect.y,f=O.rect.width,d=O.rect.height,v=m(O.data,f,d,a);if(S!=0)for(var I=0;I<k;I++)B[I]=U[I];if(O.blend==0?w(v,f,d,U,o,l,b,z,0):O.blend==1&&w(v,f,d,U,o,l,b,z,1),g.push(U.buffer.slice(0)),O.dispose!=0){if(O.dispose==1)w(_,f,d,U,o,l,b,z,0);else if(O.dispose==2)for(I=0;I<k;I++)U[I]=B[I]}}return g},_paeth:s,_copyTile:w,_bin:e}}();(function(){const{_copyTile:e}=we,{_bin:m}=we,P=we._paeth;var h={table:function(){const f=new Uint32Array(256);for(let d=0;d<256;d++){let v=d;for(let x=0;x<8;x++)1&v?v=3988292384^v>>>1:v>>>=1;f[d]=v}return f}(),update(f,d,v,x){for(let j=0;j<x;j++)f=h.table[255&(f^d[v+j])]^f>>>8;return f},crc:(f,d,v)=>4294967295^h.update(4294967295,f,d,v)};function r(f,d,v,x){d[v]+=f[0]*x>>4,d[v+1]+=f[1]*x>>4,d[v+2]+=f[2]*x>>4,d[v+3]+=f[3]*x>>4}function t(f){return Math.max(0,Math.min(255,f))}function c(f,d){const v=f[0]-d[0],x=f[1]-d[1],j=f[2]-d[2],A=f[3]-d[3];return v*v+x*x+j*j+A*A}function s(f,d,v,x,j,A,$){$==null&&($=1);const C=x.length,u=[];for(var i=0;i<C;i++){const E=x[i];u.push([E>>>0&255,E>>>8&255,E>>>16&255,E>>>24&255])}for(i=0;i<C;i++){let E=4294967295;for(var R=0,F=0;F<C;F++){var T=c(u[i],u[F]);F!=i&&T<E&&(E=T,R=F)}}const q=new Uint32Array(j.buffer),D=new Int16Array(d*v*4),H=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(i=0;i<H.length;i++)H[i]=255*((H[i]+.5)/16-.5);for(let E=0;E<v;E++)for(let N=0;N<d;N++){var L;i=4*(E*d+N),$!=2?L=[t(f[i]+D[i]),t(f[i+1]+D[i+1]),t(f[i+2]+D[i+2]),t(f[i+3]+D[i+3])]:(T=H[4*(3&E)+(3&N)],L=[t(f[i]+T),t(f[i+1]+T),t(f[i+2]+T),t(f[i+3]+T)]),R=0;let M=16777215;for(F=0;F<C;F++){const Z=c(L,u[F]);Z<M&&(M=Z,R=F)}const Q=u[R],G=[L[0]-Q[0],L[1]-Q[1],L[2]-Q[2],L[3]-Q[3]];$==1&&(N!=d-1&&r(G,D,i+4,7),E!=v-1&&(N!=0&&r(G,D,i+4*d-4,3),r(G,D,i+4*d,5),N!=d-1&&r(G,D,i+4*d+4,1))),A[i>>2]=R,q[i>>2]=x[R]}}function y(f,d,v,x,j){j==null&&(j={});const{crc:A}=h,$=m.writeUint,C=m.writeUshort,u=m.writeASCII;let i=8;const R=f.frames.length>1;let F,T=!1,q=33+(R?20:0);if(j.sRGB!=null&&(q+=13),j.pHYs!=null&&(q+=21),j.iCCP!=null&&(F=pako.deflate(j.iCCP),q+=21+F.length+4),f.ctype==3){for(var D=f.plte.length,H=0;H<D;H++)f.plte[H]>>>24!=255&&(T=!0);q+=8+3*D+4+(T?8+1*D+4:0)}for(var L=0;L<f.frames.length;L++)R&&(q+=38),q+=(Q=f.frames[L]).cimg.length+12,L!=0&&(q+=4);q+=12;const E=new Uint8Array(q),N=[137,80,78,71,13,10,26,10];for(H=0;H<8;H++)E[H]=N[H];if($(E,i,13),i+=4,u(E,i,"IHDR"),i+=4,$(E,i,d),i+=4,$(E,i,v),i+=4,E[i]=f.depth,i++,E[i]=f.ctype,i++,E[i]=0,i++,E[i]=0,i++,E[i]=0,i++,$(E,i,A(E,i-17,17)),i+=4,j.sRGB!=null&&($(E,i,1),i+=4,u(E,i,"sRGB"),i+=4,E[i]=j.sRGB,i++,$(E,i,A(E,i-5,5)),i+=4),j.iCCP!=null){const G=13+F.length;$(E,i,G),i+=4,u(E,i,"iCCP"),i+=4,u(E,i,"ICC profile"),i+=11,i+=2,E.set(F,i),i+=F.length,$(E,i,A(E,i-(G+4),G+4)),i+=4}if(j.pHYs!=null&&($(E,i,9),i+=4,u(E,i,"pHYs"),i+=4,$(E,i,j.pHYs[0]),i+=4,$(E,i,j.pHYs[1]),i+=4,E[i]=j.pHYs[2],i++,$(E,i,A(E,i-13,13)),i+=4),R&&($(E,i,8),i+=4,u(E,i,"acTL"),i+=4,$(E,i,f.frames.length),i+=4,$(E,i,j.loop!=null?j.loop:0),i+=4,$(E,i,A(E,i-12,12)),i+=4),f.ctype==3){for($(E,i,3*(D=f.plte.length)),i+=4,u(E,i,"PLTE"),i+=4,H=0;H<D;H++){const G=3*H,Z=f.plte[H],X=255&Z,re=Z>>>8&255,me=Z>>>16&255;E[i+G+0]=X,E[i+G+1]=re,E[i+G+2]=me}if(i+=3*D,$(E,i,A(E,i-3*D-4,3*D+4)),i+=4,T){for($(E,i,D),i+=4,u(E,i,"tRNS"),i+=4,H=0;H<D;H++)E[i+H]=f.plte[H]>>>24&255;i+=D,$(E,i,A(E,i-D-4,D+4)),i+=4}}let M=0;for(L=0;L<f.frames.length;L++){var Q=f.frames[L];R&&($(E,i,26),i+=4,u(E,i,"fcTL"),i+=4,$(E,i,M++),i+=4,$(E,i,Q.rect.width),i+=4,$(E,i,Q.rect.height),i+=4,$(E,i,Q.rect.x),i+=4,$(E,i,Q.rect.y),i+=4,C(E,i,x[L]),i+=2,C(E,i,1e3),i+=2,E[i]=Q.dispose,i++,E[i]=Q.blend,i++,$(E,i,A(E,i-30,30)),i+=4);const G=Q.cimg;$(E,i,(D=G.length)+(L==0?0:4)),i+=4;const Z=i;u(E,i,L==0?"IDAT":"fdAT"),i+=4,L!=0&&($(E,i,M++),i+=4),E.set(G,i),i+=D,$(E,i,A(E,Z,i-Z)),i+=4}return $(E,i,0),i+=4,u(E,i,"IEND"),i+=4,$(E,i,A(E,i-4,4)),i+=4,E.buffer}function w(f,d,v){for(let x=0;x<f.frames.length;x++){const j=f.frames[x];j.rect.width;const A=j.rect.height,$=new Uint8Array(A*j.bpl+A);j.cimg=l(j.img,A,j.bpp,j.bpl,$,d,v)}}function n(f,d,v,x,j){const A=j[0],$=j[1],C=j[2],u=j[3],i=j[4],R=j[5];let F=6,T=8,q=255;for(var D=0;D<f.length;D++){const se=new Uint8Array(f[D]);for(var H=se.length,L=0;L<H;L+=4)q&=se[L+3]}const E=q!=255,N=function(Y,V,ee,le,ne,ye){const ie=[];for(var J=0;J<Y.length;J++){const he=new Uint8Array(Y[J]),_e=new Uint32Array(he.buffer);var be;let $e=0,ke=0,je=V,ze=ee,ar=le?1:0;if(J!=0){const Hr=ye||le||J==1||ie[J-2].dispose!=0?1:2;let ir=0,gr=1e9;for(let Le=0;Le<Hr;Le++){var Fe=new Uint8Array(Y[J-1-Le]);const Wr=new Uint32Array(Y[J-1-Le]);let Ce=V,Se=ee,Me=-1,Ne=-1;for(let Ie=0;Ie<ee;Ie++)for(let Pe=0;Pe<V;Pe++)_e[de=Ie*V+Pe]!=Wr[de]&&(Pe<Ce&&(Ce=Pe),Pe>Me&&(Me=Pe),Ie<Se&&(Se=Ie),Ie>Ne&&(Ne=Ie));Me==-1&&(Ce=Se=Me=Ne=0),ne&&((1&Ce)==1&&Ce--,(1&Se)==1&&Se--);const mr=(Me-Ce+1)*(Ne-Se+1);mr<gr&&(gr=mr,ir=Le,$e=Ce,ke=Se,je=Me-Ce+1,ze=Ne-Se+1)}Fe=new Uint8Array(Y[J-1-ir]),ir==1&&(ie[J-1].dispose=2),be=new Uint8Array(je*ze*4),e(Fe,V,ee,be,je,ze,-$e,-ke,0),ar=e(he,V,ee,be,je,ze,-$e,-ke,3)?1:0,ar==1?o(he,V,ee,be,{x:$e,y:ke,width:je,height:ze}):e(he,V,ee,be,je,ze,-$e,-ke,0)}else be=he.slice(0);ie.push({rect:{x:$e,y:ke,width:je,height:ze},img:be,blend:ar,dispose:0})}if(le)for(J=0;J<ie.length;J++){if((Ee=ie[J]).blend==1)continue;const he=Ee.rect,_e=ie[J-1].rect,$e=Math.min(he.x,_e.x),ke=Math.min(he.y,_e.y),je={x:$e,y:ke,width:Math.max(he.x+he.width,_e.x+_e.width)-$e,height:Math.max(he.y+he.height,_e.y+_e.height)-ke};ie[J-1].dispose=1,J-1!=0&&a(Y,V,ee,ie,J-1,je,ne),a(Y,V,ee,ie,J,je,ne)}let Ve=0;if(Y.length!=1)for(var de=0;de<ie.length;de++){var Ee;Ve+=(Ee=ie[de]).rect.width*Ee.rect.height}return ie}(f,d,v,A,$,C),M={},Q=[],G=[];if(x!=0){const se=[];for(L=0;L<N.length;L++)se.push(N[L].img.buffer);const Y=function(ne){let ye=0;for(var ie=0;ie<ne.length;ie++)ye+=ne[ie].byteLength;const J=new Uint8Array(ye);let be=0;for(ie=0;ie<ne.length;ie++){const Fe=new Uint8Array(ne[ie]),Ve=Fe.length;for(let de=0;de<Ve;de+=4){let Ee=Fe[de],he=Fe[de+1],_e=Fe[de+2];const $e=Fe[de+3];$e==0&&(Ee=he=_e=0),J[be+de]=Ee,J[be+de+1]=he,J[be+de+2]=_e,J[be+de+3]=$e}be+=Ve}return J.buffer}(se),V=k(Y,x);for(L=0;L<V.plte.length;L++)Q.push(V.plte[L].est.rgba);let ee=0;for(L=0;L<N.length;L++){const le=(X=N[L]).img.length;var Z=new Uint8Array(V.inds.buffer,ee>>2,le>>2);G.push(Z);const ne=new Uint8Array(V.abuf,ee,le);R&&s(X.img,X.rect.width,X.rect.height,Q,ne,Z),X.img.set(ne),ee+=le}}else for(D=0;D<N.length;D++){var X=N[D];const se=new Uint32Array(X.img.buffer);var re=X.rect.width;for(H=se.length,Z=new Uint8Array(H),G.push(Z),L=0;L<H;L++){const Y=se[L];if(L!=0&&Y==se[L-1])Z[L]=Z[L-1];else if(L>re&&Y==se[L-re])Z[L]=Z[L-re];else{let V=M[Y];if(V==null&&(M[Y]=V=Q.length,Q.push(Y),Q.length>=300))break;Z[L]=V}}}const me=Q.length;for(me<=256&&i==0&&(T=me<=2?1:me<=4?2:me<=16?4:8,T=Math.max(T,u)),D=0;D<N.length;D++){(X=N[D]).rect.x,X.rect.y,re=X.rect.width;const se=X.rect.height;let Y=X.img;new Uint32Array(Y.buffer);let V=4*re,ee=4;if(me<=256&&i==0){V=Math.ceil(T*re/8);var ue=new Uint8Array(V*se);const le=G[D];for(let ne=0;ne<se;ne++){L=ne*V;const ye=ne*re;if(T==8)for(var K=0;K<re;K++)ue[L+K]=le[ye+K];else if(T==4)for(K=0;K<re;K++)ue[L+(K>>1)]|=le[ye+K]<<4-4*(1&K);else if(T==2)for(K=0;K<re;K++)ue[L+(K>>2)]|=le[ye+K]<<6-2*(3&K);else if(T==1)for(K=0;K<re;K++)ue[L+(K>>3)]|=le[ye+K]<<7-1*(7&K)}Y=ue,F=3,ee=1}else if(E==0&&N.length==1){ue=new Uint8Array(re*se*3);const le=re*se;for(L=0;L<le;L++){const ne=3*L,ye=4*L;ue[ne]=Y[ye],ue[ne+1]=Y[ye+1],ue[ne+2]=Y[ye+2]}Y=ue,F=2,ee=3,V=3*re}X.img=Y,X.bpl=V,X.bpp=ee}return{ctype:F,depth:T,plte:Q,frames:N}}function a(f,d,v,x,j,A,$){const C=Uint8Array,u=Uint32Array,i=new C(f[j-1]),R=new u(f[j-1]),F=j+1<f.length?new C(f[j+1]):null,T=new C(f[j]),q=new u(T.buffer);let D=d,H=v,L=-1,E=-1;for(let M=0;M<A.height;M++)for(let Q=0;Q<A.width;Q++){const G=A.x+Q,Z=A.y+M,X=Z*d+G,re=q[X];re==0||x[j-1].dispose==0&&R[X]==re&&(F==null||F[4*X+3]!=0)||(G<D&&(D=G),G>L&&(L=G),Z<H&&(H=Z),Z>E&&(E=Z))}L==-1&&(D=H=L=E=0),$&&((1&D)==1&&D--,(1&H)==1&&H--),A={x:D,y:H,width:L-D+1,height:E-H+1};const N=x[j];N.rect=A,N.blend=1,N.img=new Uint8Array(A.width*A.height*4),x[j-1].dispose==0?(e(i,d,v,N.img,A.width,A.height,-A.x,-A.y,0),o(T,d,v,N.img,A)):e(T,d,v,N.img,A.width,A.height,-A.x,-A.y,0)}function o(f,d,v,x,j){e(f,d,v,x,j.width,j.height,-j.x,-j.y,2)}function l(f,d,v,x,j,A,$){const C=[];let u,i=[0,1,2,3,4];A!=-1?i=[A]:(d*x>5e5||v==1)&&(i=[0]),$&&(u={level:0});const R=ht;for(var F=0;F<i.length;F++){for(let D=0;D<d;D++)g(j,f,D,x,v,i[F]);C.push(R.deflate(j,u))}let T,q=1e9;for(F=0;F<C.length;F++)C[F].length<q&&(T=F,q=C[F].length);return C[T]}function g(f,d,v,x,j,A){const $=v*x;let C=$+v;if(f[C]=A,C++,A==0)if(x<500)for(var u=0;u<x;u++)f[C+u]=d[$+u];else f.set(new Uint8Array(d.buffer,$,x),C);else if(A==1){for(u=0;u<j;u++)f[C+u]=d[$+u];for(u=j;u<x;u++)f[C+u]=d[$+u]-d[$+u-j]+256&255}else if(v==0){for(u=0;u<j;u++)f[C+u]=d[$+u];if(A==2)for(u=j;u<x;u++)f[C+u]=d[$+u];if(A==3)for(u=j;u<x;u++)f[C+u]=d[$+u]-(d[$+u-j]>>1)+256&255;if(A==4)for(u=j;u<x;u++)f[C+u]=d[$+u]-P(d[$+u-j],0,0)+256&255}else{if(A==2)for(u=0;u<x;u++)f[C+u]=d[$+u]+256-d[$+u-x]&255;if(A==3){for(u=0;u<j;u++)f[C+u]=d[$+u]+256-(d[$+u-x]>>1)&255;for(u=j;u<x;u++)f[C+u]=d[$+u]+256-(d[$+u-x]+d[$+u-j]>>1)&255}if(A==4){for(u=0;u<j;u++)f[C+u]=d[$+u]+256-P(0,d[$+u-x],0)&255;for(u=j;u<x;u++)f[C+u]=d[$+u]+256-P(d[$+u-j],d[$+u-x],d[$+u-j-x])&255}}}function k(f,d){const v=new Uint8Array(f),x=v.slice(0),j=new Uint32Array(x.buffer),A=U(x,d),$=A[0],C=A[1],u=v.length,i=new Uint8Array(u>>2);let R;if(v.length<2e7)for(var F=0;F<u;F+=4)R=_($,T=v[F]*(1/255),q=v[F+1]*(1/255),D=v[F+2]*(1/255),H=v[F+3]*(1/255)),i[F>>2]=R.ind,j[F>>2]=R.est.rgba;else for(F=0;F<u;F+=4){var T=v[F]*.00392156862745098,q=v[F+1]*(1/255),D=v[F+2]*(1/255),H=v[F+3]*(1/255);for(R=$;R.left;)R=B(R.est,T,q,D,H)<=0?R.left:R.right;i[F>>2]=R.ind,j[F>>2]=R.est.rgba}return{abuf:x.buffer,inds:i,plte:C}}function U(f,d,v){v==null&&(v=1e-4);const x=new Uint32Array(f.buffer),j={i0:0,i1:f.length,bst:null,est:null,tdst:0,left:null,right:null};j.bst=O(f,j.i0,j.i1),j.est=b(j.bst);const A=[j];for(;A.length<d;){let C=0,u=0;for(var $=0;$<A.length;$++)A[$].est.L>C&&(C=A[$].est.L,u=$);if(C<v)break;const i=A[u],R=I(f,x,i.i0,i.i1,i.est.e,i.est.eMq255);if(i.i0>=R||i.i1<=R){i.est.L=0;continue}const F={i0:i.i0,i1:R,bst:null,est:null,tdst:0,left:null,right:null};F.bst=O(f,F.i0,F.i1),F.est=b(F.bst);const T={i0:R,i1:i.i1,bst:null,est:null,tdst:0,left:null,right:null};for(T.bst={R:[],m:[],N:i.bst.N-F.bst.N},$=0;$<16;$++)T.bst.R[$]=i.bst.R[$]-F.bst.R[$];for($=0;$<4;$++)T.bst.m[$]=i.bst.m[$]-F.bst.m[$];T.est=b(T.bst),i.left=F,i.right=T,A[u]=F,A.push(T)}for(A.sort((C,u)=>u.bst.N-C.bst.N),$=0;$<A.length;$++)A[$].ind=$;return[j,A]}function _(f,d,v,x,j){if(f.left==null)return f.tdst=function(F,T,q,D,H){const L=T-F[0],E=q-F[1],N=D-F[2],M=H-F[3];return L*L+E*E+N*N+M*M}(f.est.q,d,v,x,j),f;const A=B(f.est,d,v,x,j);let $=f.left,C=f.right;A>0&&($=f.right,C=f.left);const u=_($,d,v,x,j);if(u.tdst<=A*A)return u;const i=_(C,d,v,x,j);return i.tdst<u.tdst?i:u}function B(f,d,v,x,j){const{e:A}=f;return A[0]*d+A[1]*v+A[2]*x+A[3]*j-f.eMq}function I(f,d,v,x,j,A){for(x-=4;v<x;){for(;S(f,v,j)<=A;)v+=4;for(;S(f,x,j)>A;)x-=4;if(v>=x)break;const $=d[v>>2];d[v>>2]=d[x>>2],d[x>>2]=$,v+=4,x-=4}for(;S(f,v,j)>A;)v-=4;return v+4}function S(f,d,v){return f[d]*v[0]+f[d+1]*v[1]+f[d+2]*v[2]+f[d+3]*v[3]}function O(f,d,v){const x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],j=[0,0,0,0],A=v-d>>2;for(let $=d;$<v;$+=4){const C=f[$]*.00392156862745098,u=f[$+1]*(1/255),i=f[$+2]*(1/255),R=f[$+3]*(1/255);j[0]+=C,j[1]+=u,j[2]+=i,j[3]+=R,x[0]+=C*C,x[1]+=C*u,x[2]+=C*i,x[3]+=C*R,x[5]+=u*u,x[6]+=u*i,x[7]+=u*R,x[10]+=i*i,x[11]+=i*R,x[15]+=R*R}return x[4]=x[1],x[8]=x[2],x[9]=x[6],x[12]=x[3],x[13]=x[7],x[14]=x[11],{R:x,m:j,N:A}}function b(f){const{R:d}=f,{m:v}=f,{N:x}=f,j=v[0],A=v[1],$=v[2],C=v[3],u=x==0?0:1/x,i=[d[0]-j*j*u,d[1]-j*A*u,d[2]-j*$*u,d[3]-j*C*u,d[4]-A*j*u,d[5]-A*A*u,d[6]-A*$*u,d[7]-A*C*u,d[8]-$*j*u,d[9]-$*A*u,d[10]-$*$*u,d[11]-$*C*u,d[12]-C*j*u,d[13]-C*A*u,d[14]-C*$*u,d[15]-C*C*u],R=i,F=z;let T=[Math.random(),Math.random(),Math.random(),Math.random()],q=0,D=0;if(x!=0)for(let L=0;L<16&&(T=F.multVec(R,T),D=Math.sqrt(F.dot(T,T)),T=F.sml(1/D,T),!(L!=0&&Math.abs(D-q)<1e-9));L++)q=D;const H=[j*u,A*u,$*u,C*u];return{Cov:i,q:H,e:T,L:q,eMq255:F.dot(F.sml(255,H),T),eMq:F.dot(T,H),rgba:(Math.round(255*H[3])<<24|Math.round(255*H[2])<<16|Math.round(255*H[1])<<8|Math.round(255*H[0])<<0)>>>0}}var z={multVec:(f,d)=>[f[0]*d[0]+f[1]*d[1]+f[2]*d[2]+f[3]*d[3],f[4]*d[0]+f[5]*d[1]+f[6]*d[2]+f[7]*d[3],f[8]*d[0]+f[9]*d[1]+f[10]*d[2]+f[11]*d[3],f[12]*d[0]+f[13]*d[1]+f[14]*d[2]+f[15]*d[3]],dot:(f,d)=>f[0]*d[0]+f[1]*d[1]+f[2]*d[2]+f[3]*d[3],sml:(f,d)=>[f*d[0],f*d[1],f*d[2],f*d[3]]};we.encode=function(d,v,x,j,A,$,C){j==null&&(j=0),C==null&&(C=!1);const u=n(d,v,x,j,[!1,!1,!1,0,C,!1]);return w(u,-1),y(u,v,x,A,$)},we.encodeLL=function(d,v,x,j,A,$,C,u){const i={ctype:0+(j==1?0:2)+(A==0?0:4),depth:$,frames:[]},R=(j+A)*$,F=R*v;for(let T=0;T<d.length;T++)i.frames.push({rect:{x:0,y:0,width:v,height:x},img:new Uint8Array(d[T]),blend:0,dispose:1,bpp:Math.ceil(R/8),bpl:Math.ceil(F/8)});return w(i,0,!0),y(i,v,x,C,u)},we.encode.compress=n,we.encode.dither=s,we.quantize=k,we.quantize.getKDtree=U,we.quantize.getNearest=_})();const Ur={toArrayBuffer(e,m){const P=e.width,h=e.height,r=P<<2,t=e.getContext("2d").getImageData(0,0,P,h),c=new Uint32Array(t.data.buffer),s=(32*P+31)/32<<2,y=s*h,w=122+y,n=new ArrayBuffer(w),a=new DataView(n),o=1<<20;let l,g,k,U,_=o,B=0,I=0,S=0;function O(f){a.setUint16(I,f,!0),I+=2}function b(f){a.setUint32(I,f,!0),I+=4}function z(f){I+=f}O(19778),b(w),z(4),b(122),b(108),b(P),b(-h>>>0),O(1),O(32),b(3),b(y),b(2835),b(2835),z(8),b(16711680),b(65280),b(255),b(4278190080),b(1466527264),function f(){for(;B<h&&_>0;){for(U=122+B*s,l=0;l<r;)_--,g=c[S++],k=g>>>24,a.setUint32(U+l,g<<8|k),l+=4;B++}S<c.length?(_=o,setTimeout(f,Ur._dly)):m(n)}()},toBlob(e,m){this.toArrayBuffer(e,P=>{m(new Blob([P],{type:"image/bmp"}))})},_dly:9};var ge={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},pt={[ge.CHROME]:16384,[ge.FIREFOX]:11180,[ge.DESKTOP_SAFARI]:16384,[ge.IE]:8192,[ge.IOS]:4096,[ge.ETC]:8192};const ur=typeof window<"u",Er=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,rr=ur&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),gt=(ur||Er)&&(rr&&rr.getOriginalSymbol(window,"File")||typeof File<"u"&&File),zr=(ur||Er)&&(rr&&rr.getOriginalSymbol(window,"FileReader")||typeof FileReader<"u"&&FileReader);function hr(e,m,P=Date.now()){return new Promise(h=>{const r=e.split(","),t=r[0].match(/:(.*?);/)[1],c=globalThis.atob(r[1]);let s=c.length;const y=new Uint8Array(s);for(;s--;)y[s]=c.charCodeAt(s);const w=new Blob([y],{type:t});w.name=m,w.lastModified=P,h(w)})}function Ir(e){return new Promise((m,P)=>{const h=new zr;h.onload=()=>m(h.result),h.onerror=r=>P(r),h.readAsDataURL(e)})}function Pr(e){return new Promise((m,P)=>{const h=new Image;h.onload=()=>m(h),h.onerror=r=>P(r),h.src=e})}function Te(){if(Te.cachedResult!==void 0)return Te.cachedResult;let e=ge.ETC;const{userAgent:m}=navigator;return/Chrom(e|ium)/i.test(m)?e=ge.CHROME:/iP(ad|od|hone)/i.test(m)&&/WebKit/i.test(m)?e=ge.IOS:/Safari/i.test(m)?e=ge.DESKTOP_SAFARI:/Firefox/i.test(m)?e=ge.FIREFOX:(/MSIE/i.test(m)||document.documentMode)&&(e=ge.IE),Te.cachedResult=e,Te.cachedResult}function Rr(e,m){const P=Te(),h=pt[P];let r=e,t=m,c=r*t;const s=r>t?t/r:r/t;for(;c>h*h;){const y=(h+r)/2,w=(h+t)/2;y<w?(t=w,r=w*s):(t=y*s,r=y),c=r*t}return{width:r,height:t}}function or(e,m){let P,h;try{if(P=new OffscreenCanvas(e,m),h=P.getContext("2d"),h===null)throw new Error("getContext of OffscreenCanvas returns null")}catch{P=document.createElement("canvas"),h=P.getContext("2d")}return P.width=e,P.height=m,[P,h]}function Tr(e,m){const{width:P,height:h}=Rr(e.width,e.height),[r,t]=or(P,h);return m&&/jpe?g/.test(m)&&(t.fillStyle="white",t.fillRect(0,0,r.width,r.height)),t.drawImage(e,0,0,r.width,r.height),r}function Ye(){return Ye.cachedResult!==void 0||(Ye.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&typeof document<"u"&&"ontouchend"in document),Ye.cachedResult}function tr(e,m={}){return new Promise(function(P,h){let r,t;var c=function(){try{return t=Tr(r,m.fileType||e.type),P([r,t])}catch(y){return h(y)}},s=function(y){try{var w=function(n){try{throw n}catch(a){return h(a)}};try{let n;return Ir(e).then(function(a){try{return n=a,Pr(n).then(function(o){try{return r=o,function(){try{return c()}catch(l){return h(l)}}()}catch(l){return w(l)}},w)}catch(o){return w(o)}},w)}catch(n){w(n)}}catch(n){return h(n)}};try{if(Ye()||[ge.DESKTOP_SAFARI,ge.MOBILE_SAFARI].includes(Te()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(e).then(function(y){try{return r=y,c()}catch{return s()}},s)}catch{s()}})}function nr(e,m,P,h,r=1){return new Promise(function(t,c){let s;if(m==="image/png"){let w,n,a;return w=e.getContext("2d"),{data:n}=w.getImageData(0,0,e.width,e.height),a=we.encode([n.buffer],e.width,e.height,4096*r),s=new Blob([a],{type:m}),s.name=P,s.lastModified=h,y.call(this)}{let w=function(){return y.call(this)};if(m==="image/bmp")return new Promise(n=>Ur.toBlob(e,n)).then((function(n){try{return s=n,s.name=P,s.lastModified=h,w.call(this)}catch(a){return c(a)}}).bind(this),c);{let n=function(){return w.call(this)};if(typeof OffscreenCanvas=="function"&&e instanceof OffscreenCanvas)return e.convertToBlob({type:m,quality:r}).then((function(a){try{return s=a,s.name=P,s.lastModified=h,n.call(this)}catch(o){return c(o)}}).bind(this),c);{let a;return a=e.toDataURL(m,r),hr(a,P,h).then((function(o){try{return s=o,n.call(this)}catch(l){return c(l)}}).bind(this),c)}}}function y(){return t(s)}})}function Ae(e){e.width=0,e.height=0}function Be(){return new Promise(function(e,m){let P,h,r,t;return Be.cachedResult!==void 0?e(Be.cachedResult):hr("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then(function(c){try{return P=c,tr(P).then(function(s){try{return h=s[1],nr(h,P.type,P.name,P.lastModified).then(function(y){try{return r=y,Ae(h),tr(r).then(function(w){try{return t=w[0],Be.cachedResult=t.width===1&&t.height===2,e(Be.cachedResult)}catch(n){return m(n)}},m)}catch(w){return m(w)}},m)}catch(y){return m(y)}},m)}catch(s){return m(s)}},m)})}function Mr(e){return new Promise((m,P)=>{const h=new zr;h.onload=r=>{const t=new DataView(r.target.result);if(t.getUint16(0,!1)!=65496)return m(-2);const c=t.byteLength;let s=2;for(;s<c;){if(t.getUint16(s+2,!1)<=8)return m(-1);const y=t.getUint16(s,!1);if(s+=2,y==65505){if(t.getUint32(s+=2,!1)!=1165519206)return m(-1);const w=t.getUint16(s+=6,!1)==18761;s+=t.getUint32(s+4,w);const n=t.getUint16(s,w);s+=2;for(let a=0;a<n;a++)if(t.getUint16(s+12*a,w)==274)return m(t.getUint16(s+12*a+8,w))}else{if((65280&y)!=65280)break;s+=t.getUint16(s,!1)}}return m(-1)},h.onerror=r=>P(r),h.readAsArrayBuffer(e)})}function Or(e,m){const{width:P}=e,{height:h}=e,{maxWidthOrHeight:r}=m;let t,c=e;return isFinite(r)&&(P>r||h>r)&&([c,t]=or(P,h),P>h?(c.width=r,c.height=h/P*r):(c.width=P/h*r,c.height=r),t.drawImage(e,0,0,c.width,c.height),Ae(e)),c}function Br(e,m){const{width:P}=e,{height:h}=e,[r,t]=or(P,h);switch(m>4&&m<9?(r.width=h,r.height=P):(r.width=P,r.height=h),m){case 2:t.transform(-1,0,0,1,P,0);break;case 3:t.transform(-1,0,0,-1,P,h);break;case 4:t.transform(1,0,0,-1,0,h);break;case 5:t.transform(0,1,1,0,0,0);break;case 6:t.transform(0,1,-1,0,h,0);break;case 7:t.transform(0,-1,-1,0,h,P);break;case 8:t.transform(0,-1,1,0,0,P)}return t.drawImage(e,0,0,P,h),Ae(e),r}function br(e,m,P=0){return new Promise(function(h,r){let t,c,s,y,w,n,a,o,l,g,k,U,_,B,I,S,O,b,z,f;function d(x=5){if(m.signal&&m.signal.aborted)throw m.signal.reason;t+=x,m.onProgress(Math.min(t,100))}function v(x){if(m.signal&&m.signal.aborted)throw m.signal.reason;t=Math.min(Math.max(x,t),100),m.onProgress(t)}return t=P,c=m.maxIteration||10,s=1024*m.maxSizeMB*1024,d(),tr(e,m).then((function(x){try{return[,y]=x,d(),w=Or(y,m),d(),new Promise(function(j,A){var $;if(!($=m.exifOrientation))return Mr(e).then((function(u){try{return $=u,C.call(this)}catch(i){return A(i)}}).bind(this),A);function C(){return j($)}return C.call(this)}).then((function(j){try{return n=j,d(),Be().then((function(A){try{return a=A?w:Br(w,n),d(),o=m.initialQuality||1,l=m.fileType||e.type,nr(a,l,e.name,e.lastModified,o).then((function($){try{{let u=function(){if(c--&&(I>s||I>_)){let R,F;return R=f?.95*z.width:z.width,F=f?.95*z.height:z.height,[O,b]=or(R,F),b.drawImage(z,0,0,R,F),o*=l==="image/png"?.85:.95,nr(O,l,e.name,e.lastModified,o).then(function(T){try{return S=T,Ae(z),z=O,I=S.size,v(Math.min(99,Math.floor((B-I)/(B-s)*100))),u}catch(q){return r(q)}},r)}return[1]},i=function(){return Ae(z),Ae(O),Ae(w),Ae(a),Ae(y),v(100),h(S)};if(g=$,d(),k=g.size>s,U=g.size>e.size,!k&&!U)return v(100),h(g);var C;return _=e.size,B=g.size,I=B,z=a,f=!m.alwaysKeepResolution&&k,(C=(function(R){for(;R;){if(R.then)return void R.then(C,r);try{if(R.pop){if(R.length)return R.pop()?i.call(this):R;R=u}else R=R.call(this)}catch(F){return r(F)}}}).bind(this))(u)}}catch(u){return r(u)}}).bind(this),r)}catch($){return r($)}}).bind(this),r)}catch(A){return r(A)}}).bind(this),r)}catch(j){return r(j)}}).bind(this),r)})}const mt=`
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
`;let lr;function yt(e,m){return new Promise((P,h)=>{lr||(lr=function(c){const s=[];return s.push(c),URL.createObjectURL(new Blob(s))}(mt));const r=new Worker(lr);r.addEventListener("message",function(c){if(m.signal&&m.signal.aborted)r.terminate();else if(c.data.progress===void 0){if(c.data.error)return h(new Error(c.data.error)),void r.terminate();P(c.data.file),r.terminate()}else m.onProgress(c.data.progress)}),r.addEventListener("error",h),m.signal&&m.signal.addEventListener("abort",()=>{h(m.signal.reason),r.terminate()}),r.postMessage({file:e,imageCompressionLibUrl:m.libURL,options:{...m,onProgress:void 0,signal:void 0}})})}function fe(e,m){return new Promise(function(P,h){let r,t,c,s,y,w;if(r={...m},c=0,{onProgress:s}=r,r.maxSizeMB=r.maxSizeMB||Number.POSITIVE_INFINITY,y=typeof r.useWebWorker!="boolean"||r.useWebWorker,delete r.useWebWorker,r.onProgress=l=>{c=l,typeof s=="function"&&s(c)},!(e instanceof Blob||e instanceof gt))return h(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(e.type))return h(new Error("The file given is not an image"));if(w=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,!y||typeof Worker!="function"||w)return br(e,r).then((function(l){try{return t=l,o.call(this)}catch(g){return h(g)}}).bind(this),h);var n=(function(){try{return o.call(this)}catch(l){return h(l)}}).bind(this),a=function(l){try{return br(e,r).then(function(g){try{return t=g,n()}catch(k){return h(k)}},h)}catch(g){return h(g)}};try{return r.libURL=r.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",yt(e,r).then(function(l){try{return t=l,n()}catch{return a()}},a)}catch{a()}function o(){try{t.name=e.name,t.lastModified=e.lastModified}catch{}try{r.preserveExif&&e.type==="image/jpeg"&&(!r.fileType||r.fileType&&r.fileType===e.type)&&(t=Sr(e,t))}catch{}return P(t)}})}fe.getDataUrlFromFile=Ir,fe.getFilefromDataUrl=hr,fe.loadImage=Pr,fe.drawImageInCanvas=Tr,fe.drawFileInCanvas=tr,fe.canvasToFile=nr,fe.getExifOrientation=Mr,fe.handleMaxWidthOrHeight=Or,fe.followExifOrientation=Br,fe.cleanupCanvasMemory=Ae,fe.isAutoOrientationInBrowser=Be,fe.approximateBelowMaximumCanvasSizeOfBrowser=Rr,fe.copyExifWithoutOrientation=Sr,fe.getBrowserName=Te,fe.version="2.0.2";const bt=Cr`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,xt=Cr`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,Lr=W.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px;
  animation: ${bt} 0.3s ease both;
`,Nr=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,vt=W.button`
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
`,Dr=W.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,$t=W.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,_t=W.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,Oe=W.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,De=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,He=W.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,We=W.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,Xe=W.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,xr=W.div`
  grid-column: 1 / -1;
`,te=W.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,ae=W.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,pr=({theme:e,$hasError:m})=>`
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
`,ce=W.input`
  ${({theme:e,$hasError:m})=>pr({theme:e,$hasError:m})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,Ze=W.select`
  ${({theme:e,$hasError:m})=>pr({theme:e,$hasError:m})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,wt=W.textarea`
  ${({theme:e,$hasError:m})=>pr({theme:e,$hasError:m})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,ve=W.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,Je=W.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,jt=W.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,At=W.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,kt=W.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[5]};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,vr=W.button`
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
`,Ft=W.div`
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
`,Ct=W.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,St=W.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
`,Ut=W.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`,Et=W.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,zt=W.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,It=W.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background-color: ${({theme:e})=>e.colors.primary[100]};
  color: ${({theme:e})=>e.colors.primary[700]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: 11px;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,Pt=W.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Rt=W.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Tt=W.div`
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
`,Mt=W.div`
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
`,Ot=W.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Bt=W.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Lt=W.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.brand.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,$r=W.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1.5px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-top: ${({theme:e})=>e.spacing[4]};
`,_r=W.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
`,wr=W.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.brand.primary};
`,Nt=W.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Dt=W.div`
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
`,Ht=W.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,Wt=W.label`
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
`,Qt=W.div`
  color: ${({theme:e,$hasFile:m})=>m?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,qt=W.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,Gt=W.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,Vt=W.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,Zt=W.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,Kt=W.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Yt=W.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,Xt=W.button`
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
`,Jt=W.div`
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
`,en=W.button`
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
`,rn=W.button`
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
`,cr=W.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,Ue=W.div`
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
`,jr=W(Oe)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Ar=W.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`,kr=W.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,Fr=W.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,tn=W.div`
  flex: 1;
  height: 6px;
  background-color: ${({theme:e})=>e.colors.neutral[100]};
  border-radius: 99px;
  overflow: hidden;
`,nn=W.div`
  height: 100%;
  width: ${({$percent:e})=>e??0}%;
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.primary[500]},
    ${({theme:e})=>e.colors.primary[400]}
  );
  border-radius: 99px;
  transition: width 300ms ease;
`,on=W.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.muted};
  white-space: nowrap;
  min-width: 32px;
  text-align: right;
`;let Qe=null,qe=null,Ge=null;const an=e=>{if(!e)return!1;const m=e.padStart(14,"0");if(/^(\d)\1+$/.test(m))return!1;let P=m.length-2,h=m.substring(0,P);const r=m.substring(P);let t=0,c=P-7;for(let y=P;y>=1;y--)t+=h.charAt(P-y)*c--,c<2&&(c=9);let s=t%11<2?0:11-t%11;if(s!=r.charAt(0))return!1;P=P+1,h=m.substring(0,P),t=0,c=P-7;for(let y=P;y>=1;y--)t+=h.charAt(P-y)*c--,c<2&&(c=9);return s=t%11<2?0:11-t%11,s==r.charAt(1)},sn=Yr({corporate_name:oe().required("A razão social é obrigatória.").max(200,"Razão social deve ter no máximo 200 caracteres."),cnpj:oe().required("O CNPJ é obrigatório.").transform(e=>(e==null?void 0:e.replace(/\D/g,""))||"").test("cnpj-valido","CNPJ inválido (dígitos verificadores não conferem).",e=>e?e.length===14&&an(e):!1),email:oe().required("O e-mail é obrigatório.").nullable().transform(e=>e||null).email("Informe um e-mail válido."),state_registration:oe().nullable().transform(e=>e||null).max(15,"Inscrição estadual deve ter no máximo 15 caracteres."),trade_name:oe().nullable().transform(e=>e||null).max(200,"Nome fantasia deve ter no máximo 200 caracteres."),phone:oe().nullable().transform(e=>e||null).max(20,"Telefone deve ter no máximo 20 caracteres."),benefit_type:oe().required("O tipo de benefício é obrigatório.").oneOf(["food","meal","both"],"Tipo inválido."),notes:oe().nullable().transform(e=>e||null),partner_id:oe().nullable().transform(e=>e||null),address_street:oe().nullable().transform(e=>e||null).max(255,"Logradouro deve ter no máximo 255 caracteres."),address_number:oe().nullable().transform(e=>e||null).max(10,"Número deve ter no máximo 10 caracteres."),address_complement:oe().nullable().transform(e=>e||null).max(100,"Complemento deve ter no máximo 100 caracteres."),address_neighborhood:oe().nullable().transform(e=>e||null).max(100,"Bairro deve ter no máximo 100 caracteres."),address_city:oe().nullable().transform(e=>e||null).max(100,"Cidade deve ter no máximo 100 caracteres."),address_state:oe().nullable().transform(e=>e||null).max(2,"UF deve ter 2 caracteres."),address_zip:oe().nullable().transform(e=>e||null).test("cep-valido","CEP inválido. Use o formato 00000-000.",e=>e?e.replace(/\D/g,"").length===8:!0),bank_bank_name:oe().nullable().transform(e=>e||null).max(100,"Nome do banco deve ter no máximo 100 caracteres."),bank_agency:oe().max(10,"Agência deve ter no máximo 10 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Agência é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(m=>m||null)}),bank_agency_digit:oe().nullable().transform(e=>e||null).max(2,"Dígito deve ter no máximo 2 caracteres."),bank_account:oe().max(20,"Conta deve ter no máximo 20 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Conta é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(m=>m||null)}),bank_account_digit:oe().nullable().transform(e=>e||null).max(2,"Dígito deve ter no máximo 2 caracteres."),bank_account_type:oe().when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Tipo é obrigatório.").oneOf(["checking","savings"],"Tipo inválido."),otherwise:e=>e.nullable().transform(m=>m||null)})}),ln=[{key:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",fieldName:"contrato"},{key:"proof_of_address",type:"proof_of_address",label:"Comprovante de Endereço",fieldName:"documentos",docIndex:0},{key:"bank_account_proof",type:"bank_account_proof",label:"Comprovante Bancário",fieldName:"documentos",docIndex:1},{key:"card_machine_proof",type:"card_machine_proof",label:"Comprovante de Maquininha",fieldName:"documentos",docIndex:2}],cn=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],dn=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],fn=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],un=async e=>{if(!e.type.startsWith("image/"))return e;try{const m=await fe(e,{maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0,fileType:e.type});return new File([m],e.name,{type:e.type})}catch{return e}},hn=(e="")=>{const m=e.replace(/\D/g,"").slice(0,14);return m.length<=2?m:m.length<=5?`${m.slice(0,2)}.${m.slice(2)}`:m.length<=8?`${m.slice(0,2)}.${m.slice(2,5)}.${m.slice(5)}`:m.length<=12?`${m.slice(0,2)}.${m.slice(2,5)}.${m.slice(5,8)}/${m.slice(8)}`:`${m.slice(0,2)}.${m.slice(2,5)}.${m.slice(5,8)}/${m.slice(8,12)}-${m.slice(12)}`},pn=(e="")=>{const m=e.replace(/\D/g,"").slice(0,11);return m.length<=2?`(${m}`:m.length<=6?`(${m.slice(0,2)}) ${m.slice(2)}`:m.length<=10?`(${m.slice(0,2)}) ${m.slice(2,6)}-${m.slice(6)}`:`(${m.slice(0,2)}) ${m.slice(2,7)}-${m.slice(7)}`},gn=(e="")=>{const m=e.replace(/\D/g,"").slice(0,8);return m.length<=5?m:`${m.slice(0,5)}-${m.slice(5)}`},dr=(e="")=>e.replace(/\D/g,""),Ke=(e=0)=>Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),mn=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function yn(){const e=m=>Array.from({length:m}).map((P,h)=>p.jsxs(te,{children:[p.jsx(Ue,{$w:"45%",$h:"11px"}),p.jsx(Ue,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},h));return p.jsxs(Lr,{children:[p.jsxs(Nr,{children:[p.jsx(Ue,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),p.jsxs(Dr,{children:[p.jsx(Ue,{$w:"180px",$h:"28px"}),p.jsx(Ue,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]}),p.jsxs(jr,{children:[p.jsx(Ue,{$w:"35%",$h:"20px"}),p.jsx(Ar,{}),p.jsx(Xe,{children:e(6)})]}),p.jsxs(jr,{children:[p.jsx(Ue,{$w:"40%",$h:"20px"}),p.jsx(Ar,{}),p.jsx(Ue,{$h:"120px",style:{borderRadius:"8px"}})]})]})}function bn({slot:e,selectedFile:m,onFileSelect:P,onClearFile:h,disabled:r}){const t=pe.useRef(null),c=!!m;return p.jsxs(Dt,{$hasFile:c,children:[p.jsx(Ht,{children:e.label}),c&&p.jsxs(Vt,{children:[p.jsx(at,{size:16,style:{color:"#B45A14",flexShrink:0}}),p.jsxs(Zt,{children:[p.jsx(Kt,{children:m.name}),p.jsxs(Yt,{children:[mn(m.size)," · Será comprimido ao enviar"]})]}),p.jsx(Xt,{type:"button",onClick:()=>h(e.key),disabled:r,children:p.jsx(it,{size:13})})]}),p.jsxs(Wt,{htmlFor:`doc-input-${e.key}`,children:[p.jsx(Qt,{$hasFile:c,children:p.jsx(st,{size:22})}),p.jsx(qt,{children:c?"Trocar arquivo":"Selecionar arquivo"}),p.jsx(Gt,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),p.jsx("input",{ref:t,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:r,onChange:s=>{var w;const y=(w=s.target.files)==null?void 0:w[0];if(y){if(y.size>3*1024*1024){Re.error("Arquivo muito grande. O limite é 3 MB.");return}P(e.key,y),s.target.value=""}}}),p.jsx(Je,{children:"Imagens serão comprimidas automaticamente antes do envio."})]})}function An(){const e=Qr(),{isAdmin:m}=qr(),[P,h]=pe.useState([]),[r,t]=pe.useState([]),[c,s]=pe.useState([]),[y,w]=pe.useState(!0),[n,a]=pe.useState(!1),[o,l]=pe.useState(0),[g,k]=pe.useState(""),[U,_]=pe.useState("plan"),[B,I]=pe.useState(""),[S,O]=pe.useState([]),[b,z]=pe.useState({}),[f,d]=pe.useState(""),v=pe.useRef(null),{register:x,handleSubmit:j,setValue:A,watch:$,formState:{errors:C}}=Zr({resolver:Kr(sn),defaultValues:{corporate_name:"",cnpj:"",email:"",state_registration:"",trade_name:"",phone:"",benefit_type:"food",notes:"",partner_id:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",bank_bank_name:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}}),i=!!$("bank_bank_name");pe.useEffect(()=>{(async()=>{w(!0);try{await Promise.all([!Qe||Qe.length===0?sr.get("/plans?limit=100").then(({data:Q})=>{Qe=Q.data??[]}).catch(()=>{Re.error("Erro ao carregar planos."),Qe=[]}):Promise.resolve(),!qe||qe.length===0?sr.get("/flags?limit=100").then(({data:Q})=>{qe=Q.data??[]}).catch(()=>{Re.error("Erro ao carregar bandeiras."),qe=[]}):Promise.resolve(),m&&(!Ge||Ge.length===0)?sr.get("/users?role=partner&limit=100").then(({data:Q})=>{Ge=Q.data??[]}).catch(()=>{Ge=[]}):Promise.resolve()])}finally{h(Qe??[]),t(qe??[]),s(Ge??[]),w(!1)}})()},[]);const R=(M,Q)=>{z(G=>({...G,[M]:Q}))},F=M=>{z(Q=>{const G={...Q};return delete G[M],G})},T=M=>{const Q=M.target.value;d(hn(Q)),v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{A("cnpj",dr(Q),{shouldValidate:!0})},400)},D=r.filter(M=>S.includes(M.id)).reduce((M,Q)=>M+parseFloat(Q.price||0),0),H=P.find(M=>M.id===B),L=async M=>{var Q,G,Z,X;if(U==="plan"&&!B){Re.error("Selecione um plano para continuar.");return}if(U==="individual"&&S.length===0){Re.error("Selecione ao menos uma bandeira.");return}a(!0),l(0),k("compressing");try{const re=Object.keys(b).length>0,me={};if(re){const V=Object.entries(b);for(let ee=0;ee<V.length;ee++){const[le,ne]=V[ee];me[le]=await un(ne),l(Math.round((ee+1)/V.length*20))}}k("uploading");const ue={corporate_name:M.corporate_name,cnpj:dr(M.cnpj||f),benefit_type:M.benefit_type,trade_name:M.trade_name||void 0,email:M.email||void 0,state_registration:M.state_registration||void 0,phone:dr(M.phone)||void 0,notes:M.notes||void 0,partner_id:M.partner_id||void 0,address_street:M.address_street||void 0,address_number:M.address_number||void 0,address_complement:M.address_complement||void 0,address_neighborhood:M.address_neighborhood||void 0,address_city:M.address_city||void 0,address_state:M.address_state||void 0,address_zip:M.address_zip||void 0,...U==="plan"?{plan_id:B}:{flag_ids:S},...i?{bank_name:M.bank_bank_name,agency:M.bank_agency,agency_digit:M.bank_agency_digit||void 0,account:M.bank_account,account_digit:M.bank_account_digit||void 0,account_type:M.bank_account_type}:{}};Object.keys(ue).forEach(V=>ue[V]===void 0&&delete ue[V]);const K=new FormData;K.append("data",JSON.stringify(ue)),me.contrato&&K.append("contrato",me.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(V=>{me[V]&&K.append("documentos",me[V])});const{data:se}=await Gr.post("/onboarding",K,{onUploadProgress:V=>{const ee=Math.round(V.loaded/(V.total||1)*70);l(20+ee),V.loaded>=V.total&&k("processing")}});l(100),Re.success(`Cliente cadastrado! Protocolo: ${((G=(Q=se.data)==null?void 0:Q.client)==null?void 0:G.protocol)??""}`,{autoClose:5e3});const Y=(X=(Z=se.data)==null?void 0:Z.client)==null?void 0:X.id;e(Y?`/clientes/${Y}`:"/clientes",{replace:!0})}catch(re){l(0),k(""),Re.error(Vr(re,"Erro ao cadastrar cliente."))}finally{a(!1)}},E=()=>n?g==="compressing"?p.jsxs(p.Fragment,{children:[p.jsx(cr,{}),"Comprimindo imagens…"]}):g==="processing"?p.jsxs(p.Fragment,{children:[p.jsx(cr,{}),"Processando…"]}):p.jsxs(p.Fragment,{children:[p.jsx(cr,{}),"Enviando… ",o,"%"]}):p.jsxs(p.Fragment,{children:[p.jsx(ot,{size:15}),"Cadastrar Cliente"]});if(y)return p.jsx(yn,{});const N=M=>{var Q;return(Q=C[M])==null?void 0:Q.message};return p.jsxs(p.Fragment,{children:[p.jsxs(Lr,{children:[p.jsxs(Nr,{children:[p.jsxs(vt,{type:"button",onClick:()=>e("/clientes"),children:[p.jsx(Xr,{size:15})," Voltar"]}),p.jsxs(Dr,{children:[p.jsx($t,{children:"Novo Cliente"}),p.jsx(_t,{children:"Preencha os dados para cadastrar o cliente"})]})]}),p.jsxs("form",{id:"create-client-form",onSubmit:j(L),noValidate:!0,children:[p.jsxs(Oe,{style:{marginBottom:"24px"},children:[p.jsxs(De,{children:[p.jsx(He,{children:p.jsx(Jr,{size:18})}),p.jsx(We,{children:"Dados da Empresa"})]}),p.jsxs(Xe,{children:[p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"corporate_name",children:"Razão Social *"}),p.jsx(ce,{id:"corporate_name",type:"text",placeholder:"Razão social completa",$hasError:!!N("corporate_name"),disabled:n,...x("corporate_name")}),N("corporate_name")&&p.jsxs(ve,{children:[p.jsx(xe,{size:11}),N("corporate_name")]})]}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"cnpj",children:"CNPJ *"}),p.jsx(ce,{id:"cnpj",type:"text",placeholder:"00.000.000/0001-00",value:f,$hasError:!!N("cnpj"),disabled:n,onChange:T}),N("cnpj")&&p.jsxs(ve,{children:[p.jsx(xe,{size:11}),N("cnpj")]})]}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"trade_name",children:"Nome Fantasia"}),p.jsx(ce,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",disabled:n,...x("trade_name")})]}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"state_registration",children:"Inscrição Estadual"}),p.jsx(ce,{id:"state_registration",type:"text",placeholder:"Inscrição estadual (opcional)",$hasError:!!N("state_registration"),disabled:n,...x("state_registration")}),N("state_registration")&&p.jsxs(ve,{children:[p.jsx(xe,{size:11}),N("state_registration")]})]}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"phone",children:"Telefone"}),p.jsx(ce,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",$hasError:!!N("phone"),disabled:n,...x("phone",{onChange:M=>A("phone",pn(M.target.value))})}),N("phone")&&p.jsxs(ve,{children:[p.jsx(xe,{size:11}),N("phone")]})]}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"email",children:"E-mail *"}),p.jsx(ce,{id:"email",type:"email",placeholder:"contato@empresa.com.br",$hasError:!!N("email"),disabled:n,...x("email")}),N("email")&&p.jsxs(ve,{children:[p.jsx(xe,{size:11}),N("email")]})]}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),p.jsx(Ze,{id:"benefit_type",$hasError:!!N("benefit_type"),disabled:n,...x("benefit_type"),children:cn.map(M=>p.jsx("option",{value:M.value,children:M.label},M.value))}),N("benefit_type")&&p.jsxs(ve,{children:[p.jsx(xe,{size:11}),N("benefit_type")]})]}),m&&p.jsxs(te,{children:[p.jsx(ae,{children:"Parceiro responsável"}),p.jsxs(Ze,{...x("partner_id"),disabled:y,children:[p.jsx("option",{value:"",children:"Nenhum"}),c.map(M=>p.jsx("option",{value:M.id,children:M.name},M.id))]})]}),p.jsx(xr,{children:p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"notes",children:"Observações"}),p.jsx(wt,{id:"notes",placeholder:"Observações…",disabled:n,...x("notes")})]})})]})]}),p.jsxs(Oe,{style:{marginBottom:"24px"},children:[p.jsxs(De,{children:[p.jsx(He,{children:p.jsx(yr,{size:18})}),p.jsx(We,{children:"Contratação"})]}),p.jsxs(kt,{children:[p.jsxs(vr,{type:"button",$active:U==="plan",disabled:n,onClick:()=>{_("plan"),O([])},children:[p.jsx(yr,{size:16})," Escolher Plano"]}),p.jsxs(vr,{type:"button",$active:U==="individual",disabled:n,onClick:()=>{_("individual"),I("")},children:[p.jsx(ct,{size:16})," Bandeiras Individuais"]})]}),U==="plan"&&p.jsxs(p.Fragment,{children:[P.length===0?p.jsx(kr,{children:p.jsx(Fr,{children:"Nenhum plano ativo encontrado."})}):p.jsx(Pt,{children:P.map(M=>{var G;const Q=B===M.id;return p.jsxs(Ft,{$selected:Q,onClick:()=>!n&&I(M.id),children:[p.jsxs(Ct,{children:[p.jsx(St,{children:M.name}),p.jsx(Ut,{children:Ke(M.price)})]}),M.description&&p.jsx(Et,{children:M.description}),((G=M.flags)==null?void 0:G.length)>0&&p.jsx(zt,{children:M.flags.map(Z=>p.jsx(It,{children:Z.name},Z.id))})]},M.id)})}),H&&p.jsxs($r,{children:[p.jsxs(_r,{children:["Plano selecionado: ",H.name]}),p.jsx(wr,{children:Ke(H.price)})]})]}),U==="individual"&&p.jsxs(p.Fragment,{children:[p.jsx(Je,{style:{marginBottom:"12px",display:"block"},children:"Selecione ao menos uma bandeira. O valor total será a soma dos preços individuais."}),r.length===0?p.jsx(kr,{children:p.jsx(Fr,{children:"Nenhuma bandeira ativa encontrada."})}):p.jsx(Rt,{children:r.map(M=>{const Q=S.includes(M.id),G=()=>{n||O(Z=>Q?Z.filter(X=>X!==M.id):[...Z,M.id])};return p.jsxs(Tt,{$checked:Q,onClick:G,children:[p.jsx(Mt,{$checked:Q,children:Q&&p.jsx(lt,{size:11,color:"#fff",strokeWidth:3})}),p.jsxs(Ot,{children:[p.jsx(Bt,{children:M.name}),p.jsx(Lt,{children:Ke(M.price)})]})]},M.id)})}),S.length>0&&p.jsxs($r,{children:[p.jsxs(_r,{children:[S.length," bandeira",S.length!==1?"s":""," selecionada",S.length!==1?"s":""]}),p.jsx(wr,{children:Ke(D)})]})]})]}),p.jsxs(Oe,{style:{marginBottom:"24px"},children:[p.jsxs(De,{children:[p.jsx(He,{children:p.jsx(et,{size:18})}),p.jsx(We,{children:"Endereço"})]}),p.jsxs(Xe,{children:[p.jsx(xr,{children:p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"address_street",children:"Logradouro"}),p.jsx(ce,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",$hasError:!!N("address_street"),disabled:n,...x("address_street")}),N("address_street")&&p.jsxs(ve,{children:[p.jsx(xe,{size:11}),N("address_street")]})]})}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"address_number",children:"Número"}),p.jsx(ce,{id:"address_number",type:"text",placeholder:"Nº",$hasError:!!N("address_number"),disabled:n,...x("address_number")}),N("address_number")&&p.jsxs(ve,{children:[p.jsx(xe,{size:11}),N("address_number")]})]}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"address_complement",children:"Complemento"}),p.jsx(ce,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",disabled:n,...x("address_complement")})]}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"address_neighborhood",children:"Bairro"}),p.jsx(ce,{id:"address_neighborhood",type:"text",placeholder:"Bairro",disabled:n,...x("address_neighborhood")})]}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"address_city",children:"Cidade"}),p.jsx(ce,{id:"address_city",type:"text",placeholder:"Cidade",disabled:n,...x("address_city")})]}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"address_state",children:"UF"}),p.jsxs(Ze,{id:"address_state",disabled:n,...x("address_state"),children:[p.jsx("option",{value:"",children:"Selecione"}),fn.map(M=>p.jsx("option",{value:M,children:M},M))]})]}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"address_zip",children:"CEP"}),p.jsx(ce,{id:"address_zip",type:"text",placeholder:"00000-000",$hasError:!!N("address_zip"),disabled:n,...x("address_zip",{onChange:M=>A("address_zip",gn(M.target.value))})}),N("address_zip")&&p.jsxs(ve,{children:[p.jsx(xe,{size:11}),N("address_zip")]})]})]})]}),p.jsxs(Oe,{style:{marginBottom:"24px"},children:[p.jsxs(De,{children:[p.jsx(He,{children:p.jsx(rt,{size:18})}),p.jsx(We,{children:"Conta Bancária"})]}),p.jsxs(jt,{children:[p.jsx(At,{children:"Dados Bancários"}),i&&p.jsx(Je,{style:{marginBottom:"12px",display:"block"},children:"Agência e conta são obrigatórios quando o banco é informado."}),p.jsxs(Xe,{children:[p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),p.jsx(ce,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",$hasError:!!N("bank_bank_name"),disabled:n,...x("bank_bank_name")}),N("bank_bank_name")&&p.jsxs(ve,{children:[p.jsx(xe,{size:11}),N("bank_bank_name")]})]}),p.jsxs(te,{children:[p.jsxs(ae,{htmlFor:"bank_agency",children:["Agência ",i&&p.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),p.jsx(ce,{id:"bank_agency",type:"text",placeholder:"0000",$hasError:!!N("bank_agency"),disabled:n,...x("bank_agency")}),N("bank_agency")&&p.jsxs(ve,{children:[p.jsx(xe,{size:11}),N("bank_agency")]})]}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),p.jsx(ce,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,disabled:n,...x("bank_agency_digit")})]}),p.jsxs(te,{children:[p.jsxs(ae,{htmlFor:"bank_account",children:["Conta ",i&&p.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),p.jsx(ce,{id:"bank_account",type:"text",placeholder:"000000",$hasError:!!N("bank_account"),disabled:n,...x("bank_account")}),N("bank_account")&&p.jsxs(ve,{children:[p.jsx(xe,{size:11}),N("bank_account")]})]}),p.jsxs(te,{children:[p.jsx(ae,{htmlFor:"bank_account_digit",children:"Dígito Conta"}),p.jsx(ce,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,disabled:n,...x("bank_account_digit")})]}),p.jsxs(te,{children:[p.jsxs(ae,{htmlFor:"bank_account_type",children:["Tipo de Conta ",i&&p.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),p.jsx(Ze,{id:"bank_account_type",$hasError:!!N("bank_account_type"),disabled:n,...x("bank_account_type"),children:dn.map(M=>p.jsx("option",{value:M.value,children:M.label},M.value))}),N("bank_account_type")&&p.jsxs(ve,{children:[p.jsx(xe,{size:11}),N("bank_account_type")]})]})]})]})]}),p.jsxs(Oe,{style:{marginBottom:"24px"},children:[p.jsxs(De,{children:[p.jsx(He,{children:p.jsx(tt,{size:18})}),p.jsx(We,{children:"Documentos"})]}),p.jsx(Je,{style:{marginBottom:"16px",display:"block"},children:"Documentos são opcionais e podem ser adicionados depois pela edição do cliente."}),p.jsx(Nt,{children:ln.map(M=>p.jsx(bn,{slot:M,selectedFile:b[M.key],onFileSelect:R,onClearFile:F,disabled:n},M.key))})]})]})]}),p.jsxs(Jt,{children:[p.jsxs(en,{type:"button",disabled:n,onClick:()=>e("/clientes"),children:[p.jsx(nt,{size:15})," Cancelar"]}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px"},children:[n&&p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",width:"220px"},children:[p.jsx(tn,{children:p.jsx(nn,{$percent:o})}),p.jsxs(on,{children:[o,"%"]})]}),p.jsx(rn,{type:"submit",form:"create-client-form",$isSubmitting:n,disabled:n,children:E()})]})]})]})}export{An as default};
