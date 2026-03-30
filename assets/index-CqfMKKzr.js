var te=t=>{throw TypeError(t)};var X=(t,s,o)=>s.has(t)||te("Cannot "+o);var d=(t,s,o)=>(X(t,s,"read from private field"),o?o.call(t):s.get(t)),O=(t,s,o)=>s.has(t)?te("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,o),_=(t,s,o,n)=>(X(t,s,"write to private field"),n?n.call(t,o):s.set(t,o),o),B=(t,s,o)=>(X(t,s,"access private method"),o);import{S as Ue,k as Re,l as se,m as Ae,n as de,e as ce,r as a,o as Oe,q as _e,c as D,a as r,s as Q,p as W,u as Be,b as Le,j as e,B as U,g as J,d as Y}from"./index-79eoxmbg.js";import{u as Ie}from"./useQuery-CfcG5hg-.js";import{U as Fe}from"./user-plus-DVgxs0iq.js";import{S as Ne,C as qe,a as De}from"./search-jTIiiaQa.js";import{S as Ke}from"./shield-check-DYc36jRw.js";import{X as pe}from"./x-CSxD-jbr.js";import{E as he,a as ue}from"./eye-CkTLlwLr.js";var k,M,g,S,C,H,Z,le,He=(le=class extends Ue{constructor(s,o){super();O(this,C);O(this,k);O(this,M);O(this,g);O(this,S);_(this,k,s),this.setOptions(o),this.bindMethods(),B(this,C,H).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(s){var n;const o=this.options;this.options=d(this,k).defaultMutationOptions(s),Re(this.options,o)||d(this,k).getMutationCache().notify({type:"observerOptionsUpdated",mutation:d(this,g),observer:this}),o!=null&&o.mutationKey&&this.options.mutationKey&&se(o.mutationKey)!==se(this.options.mutationKey)?this.reset():((n=d(this,g))==null?void 0:n.state.status)==="pending"&&d(this,g).setOptions(this.options)}onUnsubscribe(){var s;this.hasListeners()||(s=d(this,g))==null||s.removeObserver(this)}onMutationUpdate(s){B(this,C,H).call(this),B(this,C,Z).call(this,s)}getCurrentResult(){return d(this,M)}reset(){var s;(s=d(this,g))==null||s.removeObserver(this),_(this,g,void 0),B(this,C,H).call(this),B(this,C,Z).call(this)}mutate(s,o){var n;return _(this,S,o),(n=d(this,g))==null||n.removeObserver(this),_(this,g,d(this,k).getMutationCache().build(d(this,k),this.options)),d(this,g).addObserver(this),d(this,g).execute(s)}},k=new WeakMap,M=new WeakMap,g=new WeakMap,S=new WeakMap,C=new WeakSet,H=function(){var o;const s=((o=d(this,g))==null?void 0:o.state)??Ae();_(this,M,{...s,isPending:s.status==="pending",isSuccess:s.status==="success",isError:s.status==="error",isIdle:s.status==="idle",mutate:this.mutate,reset:this.reset})},Z=function(s){de.batch(()=>{var o,n,l,p,f,y,b,P;if(d(this,S)&&this.hasListeners()){const h=d(this,M).variables,v=d(this,M).context,j={client:d(this,k),meta:this.options.meta,mutationKey:this.options.mutationKey};if((s==null?void 0:s.type)==="success"){try{(n=(o=d(this,S)).onSuccess)==null||n.call(o,s.data,h,v,j)}catch(x){Promise.reject(x)}try{(p=(l=d(this,S)).onSettled)==null||p.call(l,s.data,null,h,v,j)}catch(x){Promise.reject(x)}}else if((s==null?void 0:s.type)==="error"){try{(y=(f=d(this,S)).onError)==null||y.call(f,s.error,h,v,j)}catch(x){Promise.reject(x)}try{(P=(b=d(this,S)).onSettled)==null||P.call(b,void 0,s.error,h,v,j)}catch(x){Promise.reject(x)}}}this.listeners.forEach(h=>{h(d(this,M))})})},le);function Qe(t,s){const o=ce(),[n]=a.useState(()=>new He(o,t));a.useEffect(()=>{n.setOptions(t)},[n,t]);const l=a.useSyncExternalStore(a.useCallback(f=>n.subscribe(de.batchCalls(f)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),p=a.useCallback((f,y)=>{n.mutate(f,y).catch(Oe)},[n]);if(l.error&&_e(n.options.throwOnError,[l.error]))throw l.error;return{...l,mutate:p,mutateAsync:l.mutate}}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=D("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=D("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=D("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=D("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=D("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Ze=W`
  0%   { background-position: -400px 0; }
  100% { background-position:  400px 0; }
`,fe=W`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`,Je=W`
  to { transform: rotate(360deg); }
`,et=W`
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`,tt=r.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  margin-bottom:   24px;
  gap:             16px;
  flex-wrap:       wrap;
`,st=r.div`
  display:        flex;
  flex-direction: column;
  gap:            4px;
`,rt=r.h1`
  font-size:   1.375rem;
  font-weight: 700;
  color:       #3d2b1f;
  margin:      0;
  line-height: 1.2;
`,ot=r.p`
  font-size: 0.8125rem;
  color:     #a0856f;
  margin:    0;
`,it=r.button`
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
`,nt=r.div`
  display:       flex;
  align-items:   center;
  gap:           12px;
  margin-bottom: 16px;
  flex-wrap:     wrap;
`,at=r.div`
  position: relative;
  flex:     1;
  min-width: 200px;
`,lt=r.span`
  position:   absolute;
  left:       10px;
  top:        50%;
  transform:  translateY(-50%);
  color:      #b8a49a;
  display:    flex;
  align-items: center;
  pointer-events: none;
`,dt=r.input`
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
`,re=r.select`
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
`,ct=r.div`
  background:    #fff;
  border:        1.5px solid #e4d9cf;
  border-radius: 12px;
  overflow:      hidden;
  animation:     ${fe} 0.2s ease;
`,pt=r.table`
  width:           100%;
  border-collapse: collapse;
`,ht=r.thead`
  background: #faf5f1;
  border-bottom: 1.5px solid #e4d9cf;
`,L=r.th`
  padding:     12px 16px;
  font-size:   0.6875rem;
  font-weight: 700;
  color:       #a0856f;
  text-align:  left;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
`,ut=r.tbody``,ft=r.tr`
  border-bottom: 1px solid #f0e8e2;
  transition:    background 0.1s;

  &:last-child { border-bottom: none; }
  &:hover      { background: #faf5f1; }
`,G=r.td`
  padding:   13px 16px;
  font-size: 0.8125rem;
  color:     #3d2b1f;
  font-weight: 600;
  vertical-align: middle;
`,oe=r.td`
  padding:   13px 16px;
  font-size: 0.8125rem;
  font-weight: 600;
  color:     #3d2b1f;
  vertical-align: middle;
`,xt=r.td`
  padding:   10px 16px;
  vertical-align: middle;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
`,mt={admin:"Admin",user:"Usuário",partner:"Parceiro"},gt={admin:{bg:"#ede9fe",color:"#5b21b6"},user:{bg:"#dbeafe",color:"#1e40af"},partner:{bg:"#ffedd5",color:"#9a3412"}},bt=r.span`
  display:       inline-flex;
  align-items:   center;
  gap:           4px;
  padding:       3px 9px;
  border-radius: 99px;
  font-size:     0.6875rem;
  font-weight:   700;
  letter-spacing: 0.03em;
  white-space:   nowrap;

  ${({$role:t})=>{const s=gt[t]??{bg:"#f3f4f6",color:"#374151"};return Q`
      background: ${s.bg};
      color:      ${s.color};
    `}}
`,vt=r.span`
  display:     inline-flex;
  align-items: center;
  gap:         5px;
  font-size:   0.8rem;
  font-weight: 600;

  ${({$active:t})=>t?Q`color: #065f46;`:Q`color: #991b1b;`}
`,V={danger:{border:"#fca5a5",color:"#991b1b",hover:"#fee2e2"},success:{border:"#6ee7b7",color:"#065f46",hover:"#d1fae5"},edit:{border:"#6366f1",color:"#4338ca",hover:"#eef2ff"}},ie=r.button`
display:       inline-flex;
align-items:   center;
gap:           6px;
justify-content: center;
height: 32px;
  padding:       0px 12px;
  line-height: 1;
  border-radius: 6px;
  border:        1.5px solid ${({$variant:t})=>{var s;return((s=V[t])==null?void 0:s.border)??"#e4d9cf"}};
  background:    transparent;
  color:         ${({$variant:t})=>{var s;return((s=V[t])==null?void 0:s.color)??"#3d2b1f"}};
  font-size:     0.75rem;
  font-weight:   600;
  font-family:   inherit;
  cursor:        pointer;
  transition:    background 0.15s, transform 0.1s;
  white-space:   nowrap;

  &:hover {
    background: ${({$variant:t})=>{var s;return((s=V[t])==null?void 0:s.hover)??"#faf5f1"}};
  }
  &:active { transform: scale(0.97); }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;r.div`
  display:        flex;
  flex-direction: column;
  align-items:    center;
  padding:        60px 24px;
  gap:            10px;
  animation:      ${fe} 0.2s ease;
`;r.div`
  color:         #d4c4b8;
  margin-bottom: 4px;
`;r.p`
  font-size:   0.9375rem;
  font-weight: 600;
  color:       #7a6455;
  margin:      0;
`;r.p`
  font-size: 0.8125rem;
  color:     #a0856f;
  margin:    0;
  text-align: center;
`;const jt=Q`
  background: linear-gradient(90deg, #f0e8e2 25%, #f7f0ec 50%, #f0e8e2 75%);
  background-size: 400px 100%;
  animation: ${Ze} 1.4s ease infinite;
  border-radius: 4px;
`,yt=r.tr`
  border-bottom: 1px solid #f0e8e2;
  &:last-child { border-bottom: none; }
`,I=r.td`
  padding: 15px 16px;
  vertical-align: middle;
`,F=r.span`
  display: block;
  height:  13px;
  width:   ${({$w:t})=>t??"100%"};
  ${jt}
`,wt=r.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  padding:         14px 20px;
  border-top:      1px solid #f0e8e2;
  flex-wrap:       wrap;
  gap:             12px;
`,kt=r.span`
  font-size: 0.8rem;
  color:     #a0856f;
`,St=r.div`
  display:     flex;
  align-items: center;
  gap:         4px;
`,ne=r.button`
  display:       inline-flex;
  align-items:   center;
  justify-content: center;
  min-width:     32px;
  height:        32px;
  padding:       0 6px;
  border:        1.5px solid ${({$active:t})=>t?"#7a6455":"#e4d9cf"};
  border-radius: 6px;
  background:    ${({$active:t})=>t?"#7a6455":"transparent"};
  color:         ${({$active:t})=>t?"#fff":"#7a6455"};
  font-size:     0.8125rem;
  font-weight:   ${({$active:t})=>t?700:500};
  font-family:   inherit;
  cursor:        ${({disabled:t})=>t?"not-allowed":"pointer"};
  opacity:       ${({disabled:t})=>t?.35:1};
  transition:    background 0.15s, border-color 0.15s;

  &:hover:not(:disabled):not([disabled]) {
    background:   ${({$active:t})=>t?"#6b5547":"#faf5f1"};
    border-color: #7a6455;
  }
`,xe=r.div`
  position:   fixed;
  inset:      0;
  background: rgba(30, 18, 10, 0.45);
  backdrop-filter: blur(2px);
  display:    flex;
  align-items: center;
  justify-content: center;
  z-index:    1000;
  padding:    16px;
`,me=r.div`
  background:    #fff;
  border-radius: 14px;
  width:         100%;
  max-width:     440px;
  box-shadow:    0 20px 60px rgba(30, 18, 10, 0.18);
  animation:     ${et} 0.2s ease;
  overflow:      hidden;
`,ge=r.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  padding:         20px 24px 16px;
  border-bottom:   1.5px solid #f0e8e2;
`,be=r.h2`
  font-size:   1rem;
  font-weight: 700;
  color:       #3d2b1f;
  margin:      0;
`,ve=r.button`
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
`,je=r.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ye=r.div`
  display:         flex;
  align-items:     center;
  justify-content: flex-end;
  gap:             10px;
  padding:         16px 24px 20px;
  border-top:      1.5px solid #f0e8e2;
`,we=r.button`
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
`,ke=r.button`
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
`,Ct=r.span`
  display:       inline-block;
  width:         14px;
  height:        14px;
  border:        2px solid rgba(255,255,255,0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation:     ${Je} 0.7s linear infinite;
`,E=r.div`
  display:        flex;
  flex-direction: column;
  gap:            5px;
`,$=r.label`
  font-size:   0.8rem;
  font-weight: 600;
  color:       #5c4033;
`,q=r.input`
  height:        38px;
  padding:       0 12px;
  border:        1.5px solid ${({$hasError:t})=>t?"#ef4444":"#e4d9cf"};
  border-radius: 8px;
  background:    #fdfaf8;
  font-size:     0.875rem;
  font-family:   inherit;
  color:         #3d2b1f;
  transition:    border-color 0.15s, box-shadow 0.15s;

  &::placeholder { color: #c2ae9e; }

  &:focus {
    outline:      none;
    border-color: ${({$hasError:t})=>t?"#ef4444":"#7a6455"};
    box-shadow:   0 0 0 3px ${({$hasError:t})=>t?"rgba(239,68,68,0.12)":"rgba(122,100,85,0.12)"};
  }

  &:disabled { opacity: 0.6; cursor: not-allowed; background: #f7f0ec; }
`,Se=r.select`
  height:        38px;
  padding:       0 32px 0 10px;
  border:        1.5px solid ${({$hasError:t})=>t?"#ef4444":"#e4d9cf"};
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
    border-color: ${({$hasError:t})=>t?"#ef4444":"#7a6455"};
    box-shadow:   0 0 0 3px ${({$hasError:t})=>t?"rgba(239,68,68,0.12)":"rgba(122,100,85,0.12)"};
  }

  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,ae=r.span`
  display:     inline-flex;
  align-items: center;
  gap:         4px;
  font-size:   0.75rem;
  color:       #dc2626;
  font-weight: 500;
`,Pt=r.div`
  background:    #fffbeb;
  border:        1.5px solid #fcd34d;
  border-radius: 10px;
  padding:       16px;
  display:       flex;
  flex-direction: column;
  gap:           10px;
`,zt=r.p`
  font-size:   0.8125rem;
  color:       #78350f;
  font-weight: 600;
  margin:      0;
  line-height: 1.4;
`,Et=r.input`
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
`,Ce=r.div`
  position:    relative;
  display:     flex;
  align-items: center;
`,Pe=r.button`
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
`,$t=r.button`
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
`,Mt=15;function Tt(){return Array.from({length:6}).map((t,s)=>e.jsxs(yt,{children:[e.jsx(I,{children:e.jsx(F,{$w:"55%"})}),e.jsx(I,{children:e.jsx(F,{$w:"70%"})}),e.jsx(I,{children:e.jsx(F,{$w:"40%"})}),e.jsx(I,{children:e.jsx(F,{$w:"30%"})}),e.jsx(I,{children:e.jsx(F,{$w:"50%"})}),e.jsx(I,{children:e.jsx(F,{$w:"60px"})})]},s))}const Ut=t=>t?new Date(t).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",Rt={admin:e.jsx(Ke,{size:12}),user:e.jsx(Ve,{size:12}),partner:e.jsx(Xe,{size:12})};function At({onClose:t,onCreated:s}){const[o,n]=a.useState({name:"",email:"",role:"user"}),[l,p]=a.useState({}),[f,y]=a.useState(!1),[b,P]=a.useState(!1),[h,v]=a.useState(null),[j,x]=a.useState(!1);a.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),a.useEffect(()=>{const c=m=>{m.key==="Escape"&&t()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[t]);const N=()=>{const c={};return o.name.trim()||(c.name="Nome é obrigatório."),o.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(c.email="Informe um e-mail válido."):c.email="E-mail é obrigatório.",c},u=c=>{const{name:m,value:w}=c.target;n(T=>({...T,[m]:w})),l[m]&&p(T=>({...T,[m]:void 0}))},R=async()=>{var m;const c=N();if(Object.keys(c).length>0){p(c);return}y(!0);try{const{data:w}=await Y.post("/users",{name:o.name.trim(),email:o.email.toLowerCase().trim(),role:o.role});v(((m=w.data)==null?void 0:m.temporaryPassword)??null),U.success("Usuário criado com sucesso!"),s()}catch(w){U.error(J(w,"Erro ao criar usuário."))}finally{y(!1)}};return e.jsx(xe,{onClick:t,children:e.jsxs(me,{onClick:c=>c.stopPropagation(),children:[e.jsxs(ge,{children:[e.jsx(be,{children:"Novo Usuário"}),e.jsx(ve,{onClick:t,children:e.jsx(pe,{size:18})})]}),e.jsx(je,{children:h?e.jsxs(Pt,{children:[e.jsx(zt,{children:"⚠️ Senha temporária (copie agora):"}),e.jsxs(Ce,{children:[e.jsx(Et,{type:b?"text":"password",value:h,readOnly:!0}),e.jsx(Pe,{onClick:()=>P(!b),children:b?e.jsx(he,{size:15}):e.jsx(ue,{size:15})})]}),e.jsx($t,{onClick:()=>{navigator.clipboard.writeText(h),x(!0),setTimeout(()=>x(!1),2e3)},children:j?"✓ Copiado!":"Copiar senha"})]}):e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:[e.jsx($,{children:"Nome *"}),e.jsx(q,{name:"name",value:o.name,onChange:u,$hasError:!!l.name}),l.name&&e.jsx(ae,{children:l.name})]}),e.jsxs(E,{children:[e.jsx($,{children:"E-mail *"}),e.jsx(q,{name:"email",value:o.email,onChange:u,$hasError:!!l.email}),l.email&&e.jsx(ae,{children:l.email})]}),e.jsxs(E,{children:[e.jsx($,{children:"Papel *"}),e.jsxs(Se,{name:"role",value:o.role,onChange:u,children:[e.jsx("option",{value:"user",children:"Usuário"}),e.jsx("option",{value:"admin",children:"Administrador"}),e.jsx("option",{value:"partner",children:"Parceiro"})]})]})]})}),e.jsxs(ye,{children:[e.jsx(we,{onClick:t,children:h?"Fechar":"Cancelar"}),!h&&e.jsx(ke,{onClick:R,disabled:f,children:f?e.jsx(Ct,{}):"Criar Usuário"})]})]})})}function Ot({user:t,onClose:s,onUpdated:o}){const[n,l]=a.useState({name:t.name,email:t.email,role:t.role,is_active:t.is_active}),[p,f]=a.useState(""),[y,b]=a.useState({}),[P,h]=a.useState(!1),[v,j]=a.useState(!1);a.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]);const x=u=>{const{name:R,value:c,type:m,checked:w}=u.target;l(T=>({...T,[R]:m==="checkbox"?w:c}))},N=async()=>{h(!0);try{const u={...n,name:n.name.trim()};p&&(u.password=p),await Y.patch(`/users/${t.id}`,u),U.success("Usuário atualizado!"),o(),s()}catch(u){U.error(J(u,"Erro ao atualizar."))}finally{h(!1)}};return e.jsx(xe,{onClick:s,children:e.jsxs(me,{onClick:u=>u.stopPropagation(),children:[e.jsxs(ge,{children:[e.jsx(be,{children:"Editar Usuário"}),e.jsx(ve,{onClick:s,children:e.jsx(pe,{size:18})})]}),e.jsxs(je,{children:[e.jsxs(E,{children:[e.jsx($,{children:"Nome *"}),e.jsx(q,{name:"name",value:n.name,onChange:x})]}),e.jsxs(E,{children:[e.jsx($,{children:"E-mail (Não editável)"}),e.jsx(q,{value:n.email,disabled:!0})]}),e.jsxs(E,{children:[e.jsx($,{children:"Papel"}),e.jsxs(Se,{name:"role",value:n.role,onChange:x,children:[e.jsx("option",{value:"user",children:"Usuário"}),e.jsx("option",{value:"admin",children:"Administrador"}),e.jsx("option",{value:"partner",children:"Parceiro"})]})]}),e.jsx(E,{children:e.jsxs($,{children:[e.jsx("input",{type:"checkbox",name:"is_active",checked:n.is_active,onChange:x})," Ativo"]})}),e.jsxs(E,{children:[e.jsx($,{children:"Nova senha (opcional)"}),e.jsxs(Ce,{children:[e.jsx(q,{type:v?"text":"password",value:p,onChange:u=>f(u.target.value)}),e.jsx(Pe,{onClick:()=>j(!v),children:v?e.jsx(he,{size:15}):e.jsx(ue,{size:15})})]})]})]}),e.jsxs(ye,{children:[e.jsx(we,{onClick:s,children:"Cancelar"}),e.jsx(ke,{onClick:N,disabled:P,children:"Salvar"})]})]})})}function Kt(){const t=Be(),s=ce(),{user:o,isAdmin:n}=Le(),[l,p]=a.useState(1),[f,y]=a.useState(""),[b,P]=a.useState(""),[h,v]=a.useState(""),[j,x]=a.useState(""),[N,u]=a.useState(!1),[R,c]=a.useState(null),m=a.useRef(null);a.useEffect(()=>{n||t("/clientes",{replace:!0})},[n,t]);const w=i=>{const z=i.target.value;v(z),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{x(z),p(1)},500)},T=i=>{y(i.target.value),p(1)},ze=i=>{P(i.target.value),p(1)},{data:A,isLoading:Ee}=Ie({queryKey:["users",l,j,f,b],queryFn:async()=>{const i=new URLSearchParams({page:l,limit:Mt});j&&i.set("search",j),f&&i.set("role",f),b!==""&&i.set("is_active",b==="true"?1:0);const{data:z}=await Y.get(`/users?${i.toString()}`);return z},keepPreviousData:!0}),$e=(A==null?void 0:A.data)??[],K=(A==null?void 0:A.pagination)??{total:0,totalPages:1},{mutate:ee}=Qe({mutationFn:({id:i,action:z})=>Y.patch(`/users/${i}/${z}`),onSuccess:(i,z)=>{U.success(`Usuário ${z.action==="deactivate"?"desativado":"reativado"}.`),s.invalidateQueries(["users"])},onError:i=>U.error(J(i))}),Me=i=>{if(i.id===(o==null?void 0:o.id))return U.warning("Não pode desativar a si mesmo.");window.confirm(`Desativar ${i.name}?`)&&ee({id:i.id,action:"deactivate"})},Te=i=>{window.confirm(`Reativar ${i.name}?`)&&ee({id:i.id,action:"reactivate"})};return n?e.jsxs(e.Fragment,{children:[e.jsxs(tt,{children:[e.jsxs(st,{children:[e.jsx(rt,{children:"Usuários"}),e.jsxs(ot,{children:[K.total," usuários cadastrados"]})]}),e.jsxs(it,{onClick:()=>u(!0),children:[e.jsx(Fe,{size:16})," Novo Usuário"]})]}),e.jsxs(nt,{children:[e.jsxs(at,{children:[e.jsx(lt,{children:e.jsx(Ne,{size:15})}),e.jsx(dt,{placeholder:"Buscar...",value:h,onChange:w})]}),e.jsxs(re,{value:f,onChange:T,children:[e.jsx("option",{value:"",children:"Todos os papéis"}),e.jsx("option",{value:"admin",children:"Administrador"}),e.jsx("option",{value:"user",children:"Usuário"}),e.jsx("option",{value:"partner",children:"Parceiro"})]}),e.jsxs(re,{value:b,onChange:ze,children:[e.jsx("option",{value:"",children:"Todos os status"}),e.jsx("option",{value:"true",children:"Ativos"}),e.jsx("option",{value:"false",children:"Inativos"})]})]}),e.jsxs(ct,{children:[e.jsxs(pt,{children:[e.jsx(ht,{children:e.jsxs("tr",{children:[e.jsx(L,{children:"Nome"}),e.jsx(L,{children:"E-mail"}),e.jsx(L,{children:"Papel"}),e.jsx(L,{children:"Status"}),e.jsx(L,{children:"Acesso"}),e.jsx(L,{children:"Ações"})]})}),e.jsx(ut,{children:Ee?e.jsx(Tt,{}):$e.map(i=>e.jsxs(ft,{children:[e.jsx(G,{children:i.name}),e.jsx(oe,{children:i.email}),e.jsx(G,{children:e.jsxs(bt,{$role:i.role,children:[Rt[i.role]," ",mt[i.role]]})}),e.jsx(G,{children:e.jsxs(vt,{$active:i.is_active,children:[i.is_active?e.jsx(Ye,{size:13}):e.jsx(We,{size:13}),i.is_active?"Ativo":"Inativo"]})}),e.jsx(oe,{children:i.last_login_at?Ut(i.last_login_at):"—"}),e.jsxs(xt,{children:[e.jsx(ie,{$variant:"edit",onClick:()=>c(i),children:e.jsx(Ge,{size:14})}),e.jsx(ie,{$variant:i.is_active?"danger":"success",onClick:()=>i.is_active?Me(i):Te(i),children:i.is_active?"Desativar":"Reativar"})]})]},i.id))})]}),K.totalPages>1&&e.jsxs(wt,{children:[e.jsxs(kt,{children:["Página ",l," de ",K.totalPages]}),e.jsxs(St,{children:[e.jsx(ne,{disabled:l===1,onClick:()=>p(l-1),children:e.jsx(qe,{size:15})}),e.jsx(ne,{disabled:l===K.totalPages,onClick:()=>p(l+1),children:e.jsx(De,{size:15})})]})]})]}),N&&e.jsx(At,{onClose:()=>u(!1),onCreated:()=>s.invalidateQueries(["users"])}),R&&e.jsx(Ot,{user:R,onClose:()=>c(null),onUpdated:()=>s.invalidateQueries(["users"])})]}):null}export{Kt as default};
