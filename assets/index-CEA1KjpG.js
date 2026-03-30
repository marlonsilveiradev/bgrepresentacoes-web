import{a as i,p as R,u as L,b as N,r as g,B as W,g as _,j as e,U,d as D}from"./index-79eoxmbg.js";import{u as Y}from"./useQuery-CfcG5hg-.js";import{U as I}from"./user-plus-DVgxs0iq.js";import{S as M,C as J,a as q}from"./search-jTIiiaQa.js";const v=R`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,H=i.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:t})=>t.spacing[4]};
  margin-bottom: ${({theme:t})=>t.spacing[8]};
  animation: ${v} 0.35s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,G=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing[1]};
`,K=i.h1`
  font-family: ${({theme:t})=>t.typography.fontFamily.serif};
  font-size: ${({theme:t})=>t.typography.fontSize["2xl"]};
  font-weight: ${({theme:t})=>t.typography.fontWeight.bold};
  color: ${({theme:t})=>t.text.primary};
  margin: 0;
  line-height: ${({theme:t})=>t.typography.lineHeight.tight};
`,Q=i.p`
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.secondary};
  margin: 0;
`,V=i.button`
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
`,O=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing[3]};
  margin-bottom: ${({theme:t})=>t.spacing[6]};
  animation: ${v} 0.35s 0.05s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,X=i.div`
  position: relative;
  flex: 1;
  max-width: 360px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,Z=i.span`
  position: absolute;
  left: ${({theme:t})=>t.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:t})=>t.text.muted};
  display: flex;
  align-items: center;
  pointer-events: none;
`,tt=i.input`
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
`,et=i.select`
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
`,ot=i.div`
  background-color: ${({theme:t})=>t.surface.card};
  border: 1px solid ${({theme:t})=>t.border.default};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  overflow: hidden;
  animation: ${v} 0.35s 0.1s ease both;
`,nt=i.table`
  width: 100%;
  border-collapse: collapse;
`,rt=i.thead`
  background-color: ${({theme:t})=>t.colors.neutral[50]};
  border-bottom: 1px solid ${({theme:t})=>t.border.default};
`,h=i.th`
  padding: ${({theme:t})=>t.spacing[3]} ${({theme:t})=>t.spacing[5]};
  text-align: left;
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.xs};
  font-weight: ${({theme:t})=>t.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:t})=>t.text.muted};
  white-space: nowrap;
`,it=i.tbody``,at=i.tr`
  border-bottom: 1px solid ${({theme:t})=>t.border.default};
  transition: background-color ${({theme:t})=>t.transitions.fast};
  cursor: pointer;

  &:last-child { border-bottom: none; }

  &:hover {
    background-color: ${({theme:t})=>t.colors.neutral[50]};
  }
`,w=i.td`
  padding: ${({theme:t})=>t.spacing[4]} ${({theme:t})=>t.spacing[5]};
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.primary};
  vertical-align: middle;
`,S=i(w)`
  color: ${({theme:t})=>t.text.secondary};
`,C={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},st=i.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.xs};
  font-weight: ${({theme:t})=>t.typography.fontWeight.semibold};
  background-color: ${({$status:t})=>{var n;return((n=C[t])==null?void 0:n.bg)??"#f3f4f6"}};
  color: ${({$status:t})=>{var n;return((n=C[t])==null?void 0:n.color)??"#374151"}};
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
`,lt={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},ct=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:t})=>t.spacing[16]} ${({theme:t})=>t.spacing[8]};
  gap: ${({theme:t})=>t.spacing[3]};
  text-align: center;
`,dt=i.div`
  color: ${({theme:t})=>t.colors.neutral[300]};
  margin-bottom: ${({theme:t})=>t.spacing[2]};
`,pt=i.p`
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.base};
  font-weight: ${({theme:t})=>t.typography.fontWeight.semibold};
  color: ${({theme:t})=>t.text.secondary};
  margin: 0;
`,gt=i.p`
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.muted};
  margin: 0;
  max-width: 300px;
  line-height: ${({theme:t})=>t.typography.lineHeight.relaxed};
`,ht=i.tr`
  border-bottom: 1px solid ${({theme:t})=>t.border.default};
  &:last-child { border-bottom: none; }
`,f=i.td`
  padding: ${({theme:t})=>t.spacing[4]} ${({theme:t})=>t.spacing[5]};
`,ft=R`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,u=i.div`
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
  animation: ${ft} 1.4s ease infinite;
`,ut=i.div`
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
`,mt=i.span`
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.muted};
`,xt=i.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing[2]};
`,x=i.button`
  height: 32px;
  min-width: 32px;
  padding: 0 ${({theme:t})=>t.spacing[3]};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  border: 1.5px solid ${({theme:t,$active:n})=>n?t.colors.primary[500]:t.border.default};
  background-color: ${({theme:t,$active:n})=>n?t.colors.primary[50]:t.surface.card};
  color: ${({theme:t,$active:n})=>n?t.colors.primary[700]:t.text.secondary};
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  font-weight: ${({$active:t,theme:n})=>t?n.typography.fontWeight.semibold:n.typography.fontWeight.regular};
  cursor: ${({disabled:t})=>t?"not-allowed":"pointer"};
  opacity: ${({disabled:t})=>t?.4:1};
  transition:
    background-color ${({theme:t})=>t.transitions.fast},
    border-color ${({theme:t})=>t.transitions.fast};

  &:hover:not(:disabled) {
    background-color: ${({theme:t})=>t.colors.neutral[100]};
    border-color: ${({theme:t})=>t.colors.neutral[300]};
  }
`,$t=15,yt=({status:t})=>e.jsx(st,{$status:t,children:lt[t]??t});function bt(){return Array.from({length:5}).map((t,n)=>e.jsxs(ht,{children:[e.jsx(f,{children:e.jsx(u,{$w:"60%"})}),e.jsx(f,{children:e.jsx(u,{$w:"80%"})}),e.jsx(f,{children:e.jsx(u,{$w:"50%"})}),e.jsx(f,{children:e.jsx(u,{$w:"70%"})}),e.jsx(f,{children:e.jsx(u,{$w:"40%"})})]},n))}const T=(t="")=>{const n=t.slice(0,14);return n.length<=2?n:n.length<=5?`${n.slice(0,2)}.${n.slice(2)}`:n.length<=8?`${n.slice(0,2)}.${n.slice(2,5)}.${n.slice(5)}`:n.length<=12?`${n.slice(0,2)}.${n.slice(2,5)}.${n.slice(5,8)}/${n.slice(8)}`:`${n.slice(0,2)}.${n.slice(2,5)}.${n.slice(5,8)}/${n.slice(8,12)}-${n.slice(12)}`},jt=(t="")=>/^[\d.\-/]+$/.test(t)&&/\d/.test(t),St=t=>t?new Date(t).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",wt=t=>({food:"Alimentação",meal:"Refeição",both:"Ambos"})[t]??t??"—";function Ct(){const t=L(),{hasRole:n}=N(),[d,F]=g.useState(""),[c,p]=g.useState(1),[P,$]=g.useState(""),[y,A]=g.useState(""),b=g.useRef(null),{data:o,isLoading:m,error:k}=Y({queryKey:["clients",c,y,d],queryFn:async()=>{var s,l,z;const r=new URLSearchParams({page:c,limit:$t});y&&r.set("search",y),d&&r.set("overall_status",d);const{data:a}=await D.get(`/clients?${r.toString()}`);return{clients:a.data??[],pagination:{total:((s=a.pagination)==null?void 0:s.total)??0,totalPages:((l=a.pagination)==null?void 0:l.totalPages)??1,currentPage:((z=a.pagination)==null?void 0:z.currentPage)??1}}},keepPreviousData:!0});k&&W.error(_(k,"Erro ao carregar clientes."));const B=r=>{const a=r.target.value,s=a.replace(/\D/g,"");if(jt(a)){const l=T(s);$(l),j(l)}else a===""?($(""),j("")):($(a),j(a))},j=r=>{b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{A(r),p(1)},400)},E=r=>{F(r.target.value),p(1)};return e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:[e.jsxs(G,{children:[e.jsx(K,{children:"Clientes"}),e.jsx(Q,{children:(o==null?void 0:o.pagination.total)>0?`${o==null?void 0:o.pagination.total} cliente${(o==null?void 0:o.pagination.total)!==1?"s":""} cadastrado${(o==null?void 0:o.pagination.total)!==1?"s":""}`:"Nenhum cliente cadastrado ainda"})]}),n("admin","user")&&e.jsxs(V,{type:"button",onClick:()=>t("/onboarding"),children:[e.jsx(I,{size:16}),"Novo Cliente"]})]}),e.jsxs(O,{children:[e.jsxs(X,{children:[e.jsxs(Z,{children:[" ",e.jsx(M,{size:15})]}),e.jsx(tt,{type:"text",placeholder:"Buscar por Razão Social ou CNPJ…",style:{paddingLeft:"30px"},value:P,onChange:B})]}),e.jsxs(et,{value:d,onChange:E,children:[e.jsx("option",{value:"",children:"Todos os status"}),e.jsx("option",{value:"pending",children:"Pendente"}),e.jsx("option",{value:"analysis",children:"Em análise"}),e.jsx("option",{value:"approved",children:"Aprovado"})]})]}),e.jsxs(ot,{children:[e.jsxs(nt,{children:[e.jsx(rt,{children:e.jsxs("tr",{children:[e.jsx(h,{children:"Razão Social"}),e.jsx(h,{children:"CNPJ"}),e.jsx(h,{children:"Benefício"}),e.jsx(h,{children:"Status"}),e.jsx(h,{children:"Cadastro"})]})}),e.jsxs(it,{children:[m&&e.jsx(bt,{}),!m&&(o==null?void 0:o.clients.map(r=>e.jsxs(at,{onClick:()=>t(`/clientes/${r.id}`),title:"Ver detalhes",children:[e.jsx(w,{children:r.corporate_name}),e.jsx(S,{children:T(r.cnpj)??"—"}),e.jsx(S,{children:wt(r.benefit_type)}),e.jsx(w,{children:e.jsx(yt,{status:r.overall_status})}),e.jsx(S,{children:St(r.createdAt)})]},r.id))),!m&&(o==null?void 0:o.clients.length)===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsxs(ct,{children:[e.jsx(dt,{children:e.jsx(U,{size:40})}),e.jsx(pt,{children:"Nenhum cliente encontrado"}),e.jsx(gt,{children:P||d?"Tente ajustar os filtros para ver mais resultados.":'Clique em "Novo Cliente" para iniciar o cadastro.'})]})})})]})]}),!m&&(o==null?void 0:o.pagination.totalPages)>1&&e.jsxs(ut,{children:[e.jsxs(mt,{children:["Página ",o==null?void 0:o.pagination.currentPage," de ",o==null?void 0:o.pagination.totalPages," ","· ",o==null?void 0:o.pagination.total," registros"]}),e.jsxs(xt,{children:[e.jsx(x,{type:"button",onClick:()=>p(r=>Math.min((o==null?void 0:o.pagination.totalPages)||1,r+1)),disabled:c>=((o==null?void 0:o.pagination.totalPages)||1),"aria-label":"Página anterior",children:e.jsx(J,{size:15})}),Array.from({length:o==null?void 0:o.pagination.totalPages},(r,a)=>a+1).filter(r=>r===1||r===(o==null?void 0:o.pagination.totalPages)||Math.abs(r-c)<=2).reduce((r,a,s,l)=>(s>0&&a-l[s-1]>1&&r.push("…"),r.push(a),r),[]).map((r,a)=>r==="…"?e.jsx(x,{disabled:!0,as:"span",children:"…"},`ellipsis-${a}`):e.jsx(x,{type:"button",$active:r===c,onClick:()=>p(r),children:r},r)),e.jsx(x,{type:"button",onClick:()=>p(r=>Math.min(o==null?void 0:o.pagination.totalPages,r+1)),disabled:c>=(o==null?void 0:o.pagination.totalPages),"aria-label":"Próxima página",children:e.jsx(q,{size:15})})]})]})]})]})}export{Ct as default};
