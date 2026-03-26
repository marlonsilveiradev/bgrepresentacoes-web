var jt=t=>{throw TypeError(t)};var nt=(t,e,s)=>e.has(t)||jt("Cannot "+s);var i=(t,e,s)=>(nt(t,e,"read from private field"),s?s.call(t):e.get(t)),x=(t,e,s)=>e.has(t)?jt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),f=(t,e,s,o)=>(nt(t,e,"write to private field"),o?o.call(t,s):e.set(t,s),s),y=(t,e,s)=>(nt(t,e,"access private method"),s);import{S as Dt,i as wt,k,l as at,m as X,n as lt,o as ct,q as Ct,t as At,v as it,w as Bt,x as Lt,y as Et,z as Ft,r as w,A as _t,C as Nt,a as u,p as Mt,u as Wt,b as Ht,B as Yt,g as Jt,j as r,U as Vt,d as Gt}from"./index-NYSnQAlU.js";import{U as Kt}from"./user-plus-1_6PNFjg.js";import{S as Xt,C as Zt,a as qt}from"./search-8wH08chn.js";var j,c,Z,v,Q,B,F,M,q,L,N,D,A,U,W,d,K,ht,dt,ut,pt,ft,gt,mt,Ut,Ot,te=(Ot=class extends Dt{constructor(e,s){super();x(this,d);x(this,j);x(this,c);x(this,Z);x(this,v);x(this,Q);x(this,B);x(this,F);x(this,M);x(this,q);x(this,L);x(this,N);x(this,D);x(this,A);x(this,U);x(this,W,new Set);this.options=s,f(this,j,e),f(this,M,null),f(this,F,wt()),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(i(this,c).addObserver(this),Pt(i(this,c),this.options)?y(this,d,K).call(this):this.updateResult(),y(this,d,pt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return yt(i(this,c),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return yt(i(this,c),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,y(this,d,ft).call(this),y(this,d,gt).call(this),i(this,c).removeObserver(this)}setOptions(e){const s=this.options,o=i(this,c);if(this.options=i(this,j).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof k(this.options.enabled,i(this,c))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");y(this,d,mt).call(this),i(this,c).setOptions(this.options),s._defaulted&&!at(this.options,s)&&i(this,j).getQueryCache().notify({type:"observerOptionsUpdated",query:i(this,c),observer:this});const l=this.hasListeners();l&&Tt(i(this,c),o,this.options,s)&&y(this,d,K).call(this),this.updateResult(),l&&(i(this,c)!==o||k(this.options.enabled,i(this,c))!==k(s.enabled,i(this,c))||X(this.options.staleTime,i(this,c))!==X(s.staleTime,i(this,c)))&&y(this,d,ht).call(this);const h=y(this,d,dt).call(this);l&&(i(this,c)!==o||k(this.options.enabled,i(this,c))!==k(s.enabled,i(this,c))||h!==i(this,U))&&y(this,d,ut).call(this,h)}getOptimisticResult(e){const s=i(this,j).getQueryCache().build(i(this,j),e),o=this.createResult(s,e);return se(this,o)&&(f(this,v,o),f(this,B,this.options),f(this,Q,i(this,c).state)),o}getCurrentResult(){return i(this,v)}trackResult(e,s){return new Proxy(e,{get:(o,l)=>(this.trackProp(l),s==null||s(l),l==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&i(this,F).status==="pending"&&i(this,F).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(o,l))})}trackProp(e){i(this,W).add(e)}getCurrentQuery(){return i(this,c)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const s=i(this,j).defaultQueryOptions(e),o=i(this,j).getQueryCache().build(i(this,j),s);return o.fetch().then(()=>this.createResult(o,s))}fetch(e){return y(this,d,K).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),i(this,v)))}createResult(e,s){var vt;const o=i(this,c),l=this.options,h=i(this,v),p=i(this,Q),$=i(this,B),b=e!==o?e.state:i(this,Z),{state:R}=e;let n={...R},C=!1,m;if(s._optimisticResults){const E=this.hasListeners(),Y=!E&&Pt(e,s),tt=E&&Tt(e,o,s,l);(Y||tt)&&(n={...n,...Lt(R.data,e.options)}),s._optimisticResults==="isRestoring"&&(n.fetchStatus="idle")}let{error:z,errorUpdatedAt:O,status:S}=n;m=n.data;let a=!1;if(s.placeholderData!==void 0&&m===void 0&&S==="pending"){let E;h!=null&&h.isPlaceholderData&&s.placeholderData===($==null?void 0:$.placeholderData)?(E=h.data,a=!0):E=typeof s.placeholderData=="function"?s.placeholderData((vt=i(this,N))==null?void 0:vt.state.data,i(this,N)):s.placeholderData,E!==void 0&&(S="success",m=Et(h==null?void 0:h.data,E,s),C=!0)}if(s.select&&m!==void 0&&!a)if(h&&m===(p==null?void 0:p.data)&&s.select===i(this,q))m=i(this,L);else try{f(this,q,s.select),m=s.select(m),m=Et(h==null?void 0:h.data,m,s),f(this,L,m),f(this,M,null)}catch(E){f(this,M,E)}i(this,M)&&(z=i(this,M),m=i(this,L),O=Date.now(),S="error");const g=n.fetchStatus==="fetching",P=S==="pending",T=S==="error",H=P&&g,St=m!==void 0,_={status:S,fetchStatus:n.fetchStatus,isPending:P,isSuccess:S==="success",isError:T,isInitialLoading:H,isLoading:H,data:m,dataUpdatedAt:n.dataUpdatedAt,error:z,errorUpdatedAt:O,failureCount:n.fetchFailureCount,failureReason:n.fetchFailureReason,errorUpdateCount:n.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:n.dataUpdateCount>b.dataUpdateCount||n.errorUpdateCount>b.errorUpdateCount,isFetching:g,isRefetching:g&&!P,isLoadingError:T&&!St,isPaused:n.fetchStatus==="paused",isPlaceholderData:C,isRefetchError:T&&St,isStale:xt(e,s),refetch:this.refetch,promise:i(this,F),isEnabled:k(s.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const E=_.data!==void 0,Y=_.status==="error"&&!E,tt=st=>{Y?st.reject(_.error):E&&st.resolve(_.data)},Rt=()=>{const st=f(this,F,_.promise=wt());tt(st)},et=i(this,F);switch(et.status){case"pending":e.queryHash===o.queryHash&&tt(et);break;case"fulfilled":(Y||_.data!==et.value)&&Rt();break;case"rejected":(!Y||_.error!==et.reason)&&Rt();break}}return _}updateResult(){const e=i(this,v),s=this.createResult(i(this,c),this.options);if(f(this,Q,i(this,c).state),f(this,B,this.options),i(this,Q).data!==void 0&&f(this,N,i(this,c)),at(s,e))return;f(this,v,s);const o=()=>{if(!e)return!0;const{notifyOnChangeProps:l}=this.options,h=typeof l=="function"?l():l;if(h==="all"||!h&&!i(this,W).size)return!0;const p=new Set(h??i(this,W));return this.options.throwOnError&&p.add("error"),Object.keys(i(this,v)).some($=>{const I=$;return i(this,v)[I]!==e[I]&&p.has(I)})};y(this,d,Ut).call(this,{listeners:o()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&y(this,d,pt).call(this)}},j=new WeakMap,c=new WeakMap,Z=new WeakMap,v=new WeakMap,Q=new WeakMap,B=new WeakMap,F=new WeakMap,M=new WeakMap,q=new WeakMap,L=new WeakMap,N=new WeakMap,D=new WeakMap,A=new WeakMap,U=new WeakMap,W=new WeakMap,d=new WeakSet,K=function(e){y(this,d,mt).call(this);let s=i(this,c).fetch(this.options,e);return e!=null&&e.throwOnError||(s=s.catch(lt)),s},ht=function(){y(this,d,ft).call(this);const e=X(this.options.staleTime,i(this,c));if(ct.isServer()||i(this,v).isStale||!Ct(e))return;const o=At(i(this,v).dataUpdatedAt,e)+1;f(this,D,it.setTimeout(()=>{i(this,v).isStale||this.updateResult()},o))},dt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(i(this,c)):this.options.refetchInterval)??!1},ut=function(e){y(this,d,gt).call(this),f(this,U,e),!(ct.isServer()||k(this.options.enabled,i(this,c))===!1||!Ct(i(this,U))||i(this,U)===0)&&f(this,A,it.setInterval(()=>{(this.options.refetchIntervalInBackground||Bt.isFocused())&&y(this,d,K).call(this)},i(this,U)))},pt=function(){y(this,d,ht).call(this),y(this,d,ut).call(this,y(this,d,dt).call(this))},ft=function(){i(this,D)&&(it.clearTimeout(i(this,D)),f(this,D,void 0))},gt=function(){i(this,A)&&(it.clearInterval(i(this,A)),f(this,A,void 0))},mt=function(){const e=i(this,j).getQueryCache().build(i(this,j),this.options);if(e===i(this,c))return;const s=i(this,c);f(this,c,e),f(this,Z,e.state),this.hasListeners()&&(s==null||s.removeObserver(this),e.addObserver(this))},Ut=function(e){Ft.batch(()=>{e.listeners&&this.listeners.forEach(s=>{s(i(this,v))}),i(this,j).getQueryCache().notify({query:i(this,c),type:"observerResultsUpdated"})})},Ot);function ee(t,e){return k(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Pt(t,e){return ee(t,e)||t.state.data!==void 0&&yt(t,e,e.refetchOnMount)}function yt(t,e,s){if(k(e.enabled,t)!==!1&&X(e.staleTime,t)!=="static"){const o=typeof s=="function"?s(t):s;return o==="always"||o!==!1&&xt(t,e)}return!1}function Tt(t,e,s,o){return(t!==e||k(o.enabled,t)===!1)&&(!s.suspense||t.state.status!=="error")&&xt(t,s)}function xt(t,e){return k(e.enabled,t)!==!1&&t.isStaleByTime(X(e.staleTime,t))}function se(t,e){return!at(t.getCurrentResult(),e)}var Qt=w.createContext(!1),ie=()=>w.useContext(Qt);Qt.Provider;function re(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var ne=w.createContext(re()),oe=()=>w.useContext(ne),ae=(t,e,s)=>{const o=s!=null&&s.state.error&&typeof t.throwOnError=="function"?_t(t.throwOnError,[s.state.error,s]):t.throwOnError;(t.suspense||t.experimental_prefetchInRender||o)&&(e.isReset()||(t.retryOnMount=!1))},le=t=>{w.useEffect(()=>{t.clearReset()},[t])},ce=({result:t,errorResetBoundary:e,throwOnError:s,query:o,suspense:l})=>t.isError&&!e.isReset()&&!t.isFetching&&o&&(l&&t.data===void 0||_t(s,[t.error,o])),he=t=>{if(t.suspense){const s=l=>l==="static"?l:Math.max(l??1e3,1e3),o=t.staleTime;t.staleTime=typeof o=="function"?(...l)=>s(o(...l)):s(o),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3))}},de=(t,e)=>t.isLoading&&t.isFetching&&!e,ue=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,kt=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function pe(t,e,s){var C,m,z,O;const o=ie(),l=oe(),h=Nt(),p=h.defaultQueryOptions(t);(m=(C=h.getDefaultOptions().queries)==null?void 0:C._experimental_beforeQuery)==null||m.call(C,p);const $=h.getQueryCache().get(p.queryHash);p._optimisticResults=o?"isRestoring":"optimistic",he(p),ae(p,l,$),le(l);const I=!h.getQueryCache().get(p.queryHash),[b]=w.useState(()=>new e(h,p)),R=b.getOptimisticResult(p),n=!o&&t.subscribed!==!1;if(w.useSyncExternalStore(w.useCallback(S=>{const a=n?b.subscribe(Ft.batchCalls(S)):lt;return b.updateResult(),a},[b,n]),()=>b.getCurrentResult(),()=>b.getCurrentResult()),w.useEffect(()=>{b.setOptions(p)},[p,b]),ue(p,R))throw kt(p,b,l);if(ce({result:R,errorResetBoundary:l,throwOnError:p.throwOnError,query:$,suspense:p.suspense}))throw R.error;if((O=(z=h.getDefaultOptions().queries)==null?void 0:z._experimental_afterQuery)==null||O.call(z,p,R),p.experimental_prefetchInRender&&!ct.isServer()&&de(R,o)){const S=I?kt(p,b,l):$==null?void 0:$.promise;S==null||S.catch(lt).finally(()=>{b.updateResult()})}return p.notifyOnChangeProps?R:b.trackResult(R)}function fe(t,e){return pe(t,te)}const $t=Mt`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,ge=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:t})=>t.spacing[4]};
  margin-bottom: ${({theme:t})=>t.spacing[8]};
  animation: ${$t} 0.35s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,me=u.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing[1]};
`,ye=u.h1`
  font-family: ${({theme:t})=>t.typography.fontFamily.serif};
  font-size: ${({theme:t})=>t.typography.fontSize["2xl"]};
  font-weight: ${({theme:t})=>t.typography.fontWeight.bold};
  color: ${({theme:t})=>t.text.primary};
  margin: 0;
  line-height: ${({theme:t})=>t.typography.lineHeight.tight};
`,be=u.p`
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.secondary};
  margin: 0;
`,xe=u.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing[2]};
  padding: ${({theme:t})=>t.spacing[3]} ${({theme:t})=>t.spacing[5]};
  background: linear-gradient(
    135deg,
    ${({theme:t})=>t.colors.primary[600]},
    ${({theme:t})=>t.colors.primary[500]}
  );
  color: #fff;
  border: none;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  font-weight: ${({theme:t})=>t.typography.fontWeight.semibold};
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 3px 12px ${({theme:t})=>t.colors.primary[900]}35;
  transition:
    transform ${({theme:t})=>t.transitions.fast},
    box-shadow ${({theme:t})=>t.transitions.base},
    background ${({theme:t})=>t.transitions.base};

  &:hover {
    background: linear-gradient(
      135deg,
      ${({theme:t})=>t.colors.primary[700]},
      ${({theme:t})=>t.colors.primary[600]}
    );
    box-shadow: 0 6px 20px ${({theme:t})=>t.colors.primary[900]}45;
    transform: translateY(-1px);
  }

  &:active { transform: translateY(0); }
`,$e=u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing[3]};
  margin-bottom: ${({theme:t})=>t.spacing[6]};
  animation: ${$t} 0.35s 0.05s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Se=u.div`
  position: relative;
  flex: 1;
  max-width: 360px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,ve=u.span`
  position: absolute;
  left: ${({theme:t})=>t.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:t})=>t.text.muted};
  display: flex;
  align-items: center;
  pointer-events: none;
`,Re=u.input`
  width: 100%;
  height: 40px;
  padding: 0 ${({theme:t})=>t.spacing[4]} 0 ${({theme:t})=>t.spacing[9]};
  border: 1.5px solid ${({theme:t})=>t.border.default};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  background-color: ${({theme:t})=>t.surface.card};
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.primary};
  outline: none;
  transition:
    border-color ${({theme:t})=>t.transitions.fast},
    box-shadow ${({theme:t})=>t.transitions.fast};
  box-sizing: border-box;

  &::placeholder { color: ${({theme:t})=>t.text.muted}; }

  &:focus {
    border-color: ${({theme:t})=>t.colors.primary[500]};
    box-shadow: 0 0 0 3px ${({theme:t})=>t.colors.primary[600]}18;
  }
`,je=u.select`
  height: 40px;
  padding: 0 ${({theme:t})=>t.spacing[4]};
  border: 1.5px solid ${({theme:t})=>t.border.default};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  background-color: ${({theme:t})=>t.surface.card};
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.primary};
  outline: none;
  cursor: pointer;
  transition: border-color ${({theme:t})=>t.transitions.fast};

  &:focus { border-color: ${({theme:t})=>t.colors.primary[500]}; }
`,we=u.div`
  background-color: ${({theme:t})=>t.surface.card};
  border: 1px solid ${({theme:t})=>t.border.default};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  overflow: hidden;
  animation: ${$t} 0.35s 0.1s ease both;
`,Ce=u.table`
  width: 100%;
  border-collapse: collapse;
`,Ee=u.thead`
  background-color: ${({theme:t})=>t.colors.neutral[50]};
  border-bottom: 1px solid ${({theme:t})=>t.border.default};
`,J=u.th`
  padding: ${({theme:t})=>t.spacing[3]} ${({theme:t})=>t.spacing[5]};
  text-align: left;
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.xs};
  font-weight: ${({theme:t})=>t.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:t})=>t.text.muted};
  white-space: nowrap;
`,Pe=u.tbody``,Te=u.tr`
  border-bottom: 1px solid ${({theme:t})=>t.border.default};
  transition: background-color ${({theme:t})=>t.transitions.fast};
  cursor: pointer;

  &:last-child { border-bottom: none; }

  &:hover {
    background-color: ${({theme:t})=>t.colors.neutral[50]};
  }
`,bt=u.td`
  padding: ${({theme:t})=>t.spacing[4]} ${({theme:t})=>t.spacing[5]};
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.primary};
  vertical-align: middle;
`,ot=u(bt)`
  color: ${({theme:t})=>t.text.secondary};
`,It={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},ke=u.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.xs};
  font-weight: ${({theme:t})=>t.typography.fontWeight.semibold};
  background-color: ${({$status:t})=>{var e;return((e=It[t])==null?void 0:e.bg)??"#f3f4f6"}};
  color: ${({$status:t})=>{var e;return((e=It[t])==null?void 0:e.color)??"#374151"}};
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
`,Ie={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},ze=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:t})=>t.spacing[16]} ${({theme:t})=>t.spacing[8]};
  gap: ${({theme:t})=>t.spacing[3]};
  text-align: center;
`,Oe=u.div`
  color: ${({theme:t})=>t.colors.neutral[300]};
  margin-bottom: ${({theme:t})=>t.spacing[2]};
`,Fe=u.p`
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.base};
  font-weight: ${({theme:t})=>t.typography.fontWeight.semibold};
  color: ${({theme:t})=>t.text.secondary};
  margin: 0;
`,_e=u.p`
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.muted};
  margin: 0;
  max-width: 300px;
  line-height: ${({theme:t})=>t.typography.lineHeight.relaxed};
`,Me=u.tr`
  border-bottom: 1px solid ${({theme:t})=>t.border.default};
  &:last-child { border-bottom: none; }
`,V=u.td`
  padding: ${({theme:t})=>t.spacing[4]} ${({theme:t})=>t.spacing[5]};
`,Ue=Mt`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,G=u.div`
  height: 14px;
  width: ${({$w:t})=>t??"100%"};
  border-radius: ${({theme:t})=>t.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${({theme:t})=>t.colors.neutral[100]} 25%,
    ${({theme:t})=>t.colors.neutral[50]}  50%,
    ${({theme:t})=>t.colors.neutral[100]} 75%
  );
  background-size: 600px 100%;
  animation: ${Ue} 1.4s ease infinite;
`,Qe=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:t})=>t.spacing[4]} ${({theme:t})=>t.spacing[5]};
  border-top: 1px solid ${({theme:t})=>t.border.default};
  background-color: ${({theme:t})=>t.colors.neutral[50]};

  @media (max-width: 500px) {
    flex-direction: column;
    gap: ${({theme:t})=>t.spacing[3]};
    text-align: center;
  }
`,De=u.span`
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.muted};
`,Ae=u.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing[2]};
`,rt=u.button`
  height: 32px;
  min-width: 32px;
  padding: 0 ${({theme:t})=>t.spacing[3]};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  border: 1.5px solid ${({theme:t,$active:e})=>e?t.colors.primary[500]:t.border.default};
  background-color: ${({theme:t,$active:e})=>e?t.colors.primary[50]:t.surface.card};
  color: ${({theme:t,$active:e})=>e?t.colors.primary[700]:t.text.secondary};
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  font-weight: ${({$active:t,theme:e})=>t?e.typography.fontWeight.semibold:e.typography.fontWeight.regular};
  cursor: ${({disabled:t})=>t?"not-allowed":"pointer"};
  opacity: ${({disabled:t})=>t?.4:1};
  transition:
    background-color ${({theme:t})=>t.transitions.fast},
    border-color ${({theme:t})=>t.transitions.fast};

  &:hover:not(:disabled) {
    background-color: ${({theme:t})=>t.colors.neutral[100]};
    border-color: ${({theme:t})=>t.colors.neutral[300]};
  }
`,Be=15,Le=({status:t})=>r.jsx(ke,{$status:t,children:Ie[t]??t});function Ne(){return Array.from({length:5}).map((t,e)=>r.jsxs(Me,{children:[r.jsx(V,{children:r.jsx(G,{$w:"60%"})}),r.jsx(V,{children:r.jsx(G,{$w:"80%"})}),r.jsx(V,{children:r.jsx(G,{$w:"50%"})}),r.jsx(V,{children:r.jsx(G,{$w:"70%"})}),r.jsx(V,{children:r.jsx(G,{$w:"40%"})})]},e))}const zt=(t="")=>{const e=t.slice(0,14);return e.length<=2?e:e.length<=5?`${e.slice(0,2)}.${e.slice(2)}`:e.length<=8?`${e.slice(0,2)}.${e.slice(2,5)}.${e.slice(5)}`:e.length<=12?`${e.slice(0,2)}.${e.slice(2,5)}.${e.slice(5,8)}/${e.slice(8)}`:`${e.slice(0,2)}.${e.slice(2,5)}.${e.slice(5,8)}/${e.slice(8,12)}-${e.slice(12)}`},We=(t="")=>/^[\d.\-/]+$/.test(t)&&/\d/.test(t),He=t=>t?new Date(t).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",Ye=t=>({food:"Alimentação",meal:"Refeição",both:"Ambos"})[t]??t??"—";function Ze(){const t=Wt(),{hasRole:e}=Ht(),[s,o]=w.useState(""),[l,h]=w.useState(1),[p,$]=w.useState(""),[I,b]=w.useState(""),R=w.useRef(null),{data:n,isLoading:C,error:m}=fe({queryKey:["clients",l,I,s],queryFn:async()=>{var P,T,H;const a=new URLSearchParams({page:l,limit:Be});I&&a.set("search",I),s&&a.set("overall_status",s);const{data:g}=await Gt.get(`/clients?${a.toString()}`);return{clients:g.data??[],pagination:{total:((P=g.pagination)==null?void 0:P.total)??0,totalPages:((T=g.pagination)==null?void 0:T.totalPages)??1,currentPage:((H=g.pagination)==null?void 0:H.currentPage)??1}}},keepPreviousData:!0});m&&Yt.error(Jt(m,"Erro ao carregar clientes."));const z=a=>{const g=a.target.value,P=g.replace(/\D/g,"");if(We(g)){const T=zt(P);$(T),O(T)}else g===""?($(""),O("")):($(g),O(g))},O=a=>{R.current&&clearTimeout(R.current),R.current=setTimeout(()=>{b(a),h(1)},400)},S=a=>{o(a.target.value),h(1)};return r.jsxs(r.Fragment,{children:[r.jsxs(ge,{children:[r.jsxs(me,{children:[r.jsx(ye,{children:"Clientes"}),r.jsx(be,{children:(n==null?void 0:n.pagination.total)>0?`${n==null?void 0:n.pagination.total} cliente${(n==null?void 0:n.pagination.total)!==1?"s":""} cadastrado${(n==null?void 0:n.pagination.total)!==1?"s":""}`:"Nenhum cliente cadastrado ainda"})]}),e("admin","user")&&r.jsxs(xe,{type:"button",onClick:()=>t("/onboarding"),children:[r.jsx(Kt,{size:16}),"Novo Cliente"]})]}),r.jsxs($e,{children:[r.jsxs(Se,{children:[r.jsxs(ve,{children:[" ",r.jsx(Xt,{size:15})]}),r.jsx(Re,{type:"text",placeholder:"Buscar por Razão Social ou CNPJ…",style:{paddingLeft:"30px"},value:p,onChange:z})]}),r.jsxs(je,{value:s,onChange:S,children:[r.jsx("option",{value:"",children:"Todos os status"}),r.jsx("option",{value:"pending",children:"Pendente"}),r.jsx("option",{value:"analysis",children:"Em análise"}),r.jsx("option",{value:"approved",children:"Aprovado"})]})]}),r.jsxs(we,{children:[r.jsxs(Ce,{children:[r.jsx(Ee,{children:r.jsxs("tr",{children:[r.jsx(J,{children:"Razão Social"}),r.jsx(J,{children:"CNPJ"}),r.jsx(J,{children:"Benefício"}),r.jsx(J,{children:"Status"}),r.jsx(J,{children:"Cadastro"})]})}),r.jsxs(Pe,{children:[C&&r.jsx(Ne,{}),!C&&(n==null?void 0:n.clients.map(a=>r.jsxs(Te,{onClick:()=>t(`/clientes/${a.id}`),title:"Ver detalhes",children:[r.jsx(bt,{children:a.corporate_name}),r.jsx(ot,{children:zt(a.cnpj)??"—"}),r.jsx(ot,{children:Ye(a.benefit_type)}),r.jsx(bt,{children:r.jsx(Le,{status:a.overall_status})}),r.jsx(ot,{children:He(a.createdAt)})]},a.id))),!C&&(n==null?void 0:n.clients.length)===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:5,children:r.jsxs(ze,{children:[r.jsx(Oe,{children:r.jsx(Vt,{size:40})}),r.jsx(Fe,{children:"Nenhum cliente encontrado"}),r.jsx(_e,{children:p||s?"Tente ajustar os filtros para ver mais resultados.":'Clique em "Novo Cliente" para iniciar o cadastro.'})]})})})]})]}),!C&&(n==null?void 0:n.pagination.totalPages)>1&&r.jsxs(Qe,{children:[r.jsxs(De,{children:["Página ",n==null?void 0:n.pagination.currentPage," de ",n==null?void 0:n.pagination.totalPages," ","· ",n==null?void 0:n.pagination.total," registros"]}),r.jsxs(Ae,{children:[r.jsx(rt,{type:"button",onClick:()=>h(a=>Math.min((n==null?void 0:n.pagination.totalPages)||1,a+1)),disabled:l>=((n==null?void 0:n.pagination.totalPages)||1),"aria-label":"Página anterior",children:r.jsx(Zt,{size:15})}),Array.from({length:n==null?void 0:n.pagination.totalPages},(a,g)=>g+1).filter(a=>a===1||a===(n==null?void 0:n.pagination.totalPages)||Math.abs(a-l)<=2).reduce((a,g,P,T)=>(P>0&&g-T[P-1]>1&&a.push("…"),a.push(g),a),[]).map((a,g)=>a==="…"?r.jsx(rt,{disabled:!0,as:"span",children:"…"},`ellipsis-${g}`):r.jsx(rt,{type:"button",$active:a===l,onClick:()=>h(a),children:a},a)),r.jsx(rt,{type:"button",onClick:()=>h(a=>Math.min(pagination.totalPages,a+1)),disabled:l>=pagination.totalPages,"aria-label":"Próxima página",children:r.jsx(qt,{size:15})})]})]})]})]})}export{Ze as default};
