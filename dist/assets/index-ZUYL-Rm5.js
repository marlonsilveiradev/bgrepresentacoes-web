import{c as q,a as o,p as G,u as J,r as y,j as r,U as K,t as R,d as E}from"./index-79eoxmbg.js";import{u as D}from"./useQuery-CfcG5hg-.js";import{X as O}from"./x-CSxD-jbr.js";import{S as Q,C as W,a as X}from"./search-jTIiiaQa.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=q("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=q("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),te=G`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,re=o.div`
  animation: ${te} 0.3s ease-out;
  max-width: 1400px;
  margin: 0 auto;
`,ae=o.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 28px;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,oe=o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ne=o.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#231b15"}};
`,se=o.p`
  font-size: 13px;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#5e4d42"}};
`,ie=o.div`
  background: ${({theme:t})=>{var e;return((e=t.surface)==null?void 0:e.card)||"#ffffff"}};
  border: 1px solid ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.default)||"#e4d9cf"}};
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: ${({theme:t})=>{var e;return((e=t.shadows)==null?void 0:e.sm)||"0 1px 2px rgba(0,0,0,0.05)"}};
`,le=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  align-items: end;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,v=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,$=o.label`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#5e4d42"}};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,w=o.select`
  height: 40px;
  padding: 0 12px;
  border: 1.5px solid ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.default)||"#e4d9cf"}};
  border-radius: 8px;
  font-size: 13px;
  font-family: inherit;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#231b15"}};
  background: ${({theme:t})=>{var e;return((e=t.surface)==null?void 0:e.page)||"#faf7f5"}};
  cursor: pointer;
  transition: border-color 0.15s;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>{var e,n;return((n=(e=t.colors)==null?void 0:e.primary)==null?void 0:n[500])||"#B45A14"}};
  }
`,de=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.default)||"#e4d9cf"}};
`,ce=o.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  background: ${({theme:t})=>{var e,n;return((n=(e=t.colors)==null?void 0:e.primary)==null?void 0:n[600])||"#B45A14"}};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s;

  &:hover { background: ${({theme:t})=>{var e,n;return((n=(e=t.colors)==null?void 0:e.primary)==null?void 0:n[700])||"#9a4d11"}}; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`,pe=o.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 14px;
  background: transparent;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#5e4d42"}};
  border: 1.5px solid ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.default)||"#e4d9cf"}};
  border-radius: 8px;
  font-size: 13px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${({theme:t})=>{var e;return((e=t.surface)==null?void 0:e.page)||"#faf7f5"}};
    color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#231b15"}};
  }
`,xe=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px)  { grid-template-columns: 1fr; }
`,S=o.div`
  background: ${({theme:t})=>{var e;return((e=t.surface)==null?void 0:e.card)||"#ffffff"}};
  border: 1px solid ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.default)||"#e4d9cf"}};
  border-radius: 14px;
  padding: 18px 20px;
  box-shadow: ${({theme:t})=>{var e;return((e=t.shadows)==null?void 0:e.sm)||"0 1px 2px rgba(0,0,0,0.05)"}};
`,k=o.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#5e4d42"}};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
`,T=o.div`
  font-size: 26px;
  font-weight: 700;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#231b15"}};
  line-height: 1.2;
`,_=o.div`
  width: 40px;
  height: 40px;
  background: ${({$color:t})=>`${t}15`};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$color:t})=>t};
  margin-bottom: 12px;
`,ue=o.div`
  background: ${({theme:t})=>{var e;return((e=t.surface)==null?void 0:e.card)||"#ffffff"}};
  border: 1px solid ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.default)||"#e4d9cf"}};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({theme:t})=>{var e;return((e=t.shadows)==null?void 0:e.sm)||"0 1px 2px rgba(0,0,0,0.05)"}};
`,he=o.div`
  overflow-x: auto;
`,fe=o.table`
  width: 100%;
  border-collapse: collapse;
`,me=o.thead`
  background: ${({theme:t})=>{var e;return((e=t.surface)==null?void 0:e.page)||"#faf7f5"}};
  border-bottom: 1px solid ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.default)||"#e4d9cf"}};
`,h=o.th`
  padding: 12px 16px;
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#5e4d42"}};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
`,ge=o.tbody``,be=o.tr`
  border-bottom: 1px solid ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.default)||"#e4d9cf"}};
  transition: background 0.15s;
  cursor: pointer;

  &:last-child { border-bottom: none; }
  &:hover { background: ${({theme:t})=>{var e;return((e=t.surface)==null?void 0:e.page)||"#faf7f5"}}; }
`,B=o.td`
  padding: 14px 16px;
  font-size: 13px;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#231b15"}};
`,H=o.td`
  padding: 14px 16px;
  font-size: 13px;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#5e4d42"}};
`,je=o.span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  white-space: nowrap;
  background: ${({$status:t})=>{switch(t){case"approved":return"#dcfce7";case"analysis":return"#dbeafe";default:return"#fef3c7"}}};
  color: ${({$status:t})=>{switch(t){case"approved":return"#166534";case"analysis":return"#1e40af";default:return"#92400e"}}};
`,ye=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  gap: 12px;
`,ve=o.div`
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.muted)||"#96806e"}};
  opacity: 0.5;
`,$e=o.p`
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#5e4d42"}};
`,we=o.p`
  font-size: 13px;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.muted)||"#96806e"}};
`,Se=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-top: 1px solid ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.default)||"#e4d9cf"}};
  background: ${({theme:t})=>{var e;return((e=t.surface)==null?void 0:e.page)||"#faf7f5"}};

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 10px;
  }
`,ke=o.span`
  font-size: 13px;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#5e4d42"}};
`,Te=o.div`
  display: flex;
  gap: 4px;
`,C=o.button`
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border-radius: 6px;
  border: 1.5px solid ${({$active:t,theme:e})=>{var n,s,x;return t?((s=(n=e.colors)==null?void 0:n.primary)==null?void 0:s[600])||"#B45A14":((x=e.border)==null?void 0:x.default)||"#e4d9cf"}};
  background: ${({$active:t,theme:e})=>{var n,s;return t?((s=(n=e.colors)==null?void 0:n.primary)==null?void 0:s[600])||"#B45A14":"transparent"}};
  color: ${({$active:t,theme:e})=>{var n;return t?"white":((n=e.text)==null?void 0:n.secondary)||"#5e4d42"}};
  font-size: 13px;
  font-weight: ${({$active:t})=>t?600:400};
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    border-color: ${({theme:t})=>{var e,n;return((n=(e=t.colors)==null?void 0:e.primary)==null?void 0:n[600])||"#B45A14"}};
    color: ${({theme:t})=>{var e,n;return((n=(e=t.colors)==null?void 0:e.primary)==null?void 0:n[600])||"#B45A14"}};
  }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`,f=o.div`
  height: ${({$h:t})=>t||"14px"};
  width: ${({$w:t})=>t||"100%"};
  background: linear-gradient(90deg, #f0e8e0 25%, #e8ddd5 50%, #f0e8e0 75%);
  background-size: 200% 100%;
  border-radius: 6px;
  animation: shimmer 1.4s infinite;

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`,_e=o.tr`
  border-bottom: 1px solid ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.default)||"#e4d9cf"}};
`,m=o.td`
  padding: 14px 16px;
`,A=t=>Number(t||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),Ce=t=>t?new Date(t).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",Pe={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},ze=[{value:"",label:"Todos os meses"},{value:"1",label:"Janeiro"},{value:"2",label:"Fevereiro"},{value:"3",label:"Março"},{value:"4",label:"Abril"},{value:"5",label:"Maio"},{value:"6",label:"Junho"},{value:"7",label:"Julho"},{value:"8",label:"Agosto"},{value:"9",label:"Setembro"},{value:"10",label:"Outubro"},{value:"11",label:"Novembro"},{value:"12",label:"Dezembro"}],P=new Date().getFullYear(),Be=Array.from({length:5},(t,e)=>P-e);function Ae(){return Array.from({length:5}).map((t,e)=>r.jsxs(_e,{children:[r.jsx(m,{children:r.jsx(f,{$w:"60%"})}),r.jsx(m,{children:r.jsx(f,{$w:"50%"})}),r.jsx(m,{children:r.jsx(f,{$w:"70%"})}),r.jsx(m,{children:r.jsx(f,{$w:"40%"})}),r.jsx(m,{children:r.jsx(f,{$w:"55%"})})]},e))}function Ee(){const t=J(),[e,n]=y.useState({year:String(P),month:"",overall_status:"",partner_id:""}),[s,x]=y.useState({year:String(P),month:"",overall_status:"",partner_id:""}),[p,u]=y.useState(1),I=20,F=y.useRef(null),{data:l,isLoading:d,isFetching:L}=D({queryKey:["reports-sales",s,p],queryFn:async()=>{const a=new URLSearchParams({page:p,limit:I});s.year&&a.set("year",s.year),s.month&&a.set("month",s.month),s.overall_status&&a.set("overall_status",s.overall_status);const{data:i}=await E.get(`/reports/sales?${a.toString()}`);return i},keepPreviousData:!0,staleTime:1e3*60*2}),{data:z}=D({queryKey:["partners-list"],queryFn:async()=>{const a=await E.get("/users",{params:{role:"partner"}});return a.data.data||a.data},staleTime:1e3*60*10}),M=(l==null?void 0:l.rows)??[],g=(l==null?void 0:l.summary)??{},c=(l==null?void 0:l.pagination)??{},U=()=>{x({...e}),u(1)},V=()=>{const a={year:String(P),month:"",overall_status:"",partner_id:""};n(a),x(a),u(1)},b=(a,i)=>{n(j=>({...j,[a]:i}))},N=()=>{const a=F.current;if(!a)return;const i=document.body.innerHTML;document.body.innerHTML=a.innerHTML,window.print(),document.body.innerHTML=i,window.location.reload()};return r.jsxs(re,{children:[r.jsx(ae,{children:r.jsxs(oe,{children:[r.jsx(ne,{children:"Relatórios"}),r.jsx(se,{children:"Visão consolidada de vendas e clientes por período"})]})}),r.jsxs(ie,{children:[r.jsxs(le,{children:[r.jsxs(v,{children:[r.jsx($,{children:"Ano"}),r.jsxs(w,{value:e.year,onChange:a=>b("year",a.target.value),children:[r.jsx("option",{value:"",children:"Todos os anos"}),Be.map(a=>r.jsx("option",{value:String(a),children:a},a))]})]}),r.jsxs(v,{children:[r.jsx($,{children:"Mês"}),r.jsx(w,{value:e.month,onChange:a=>b("month",a.target.value),children:ze.map(a=>r.jsx("option",{value:a.value,children:a.label},a.value))})]}),r.jsxs(v,{children:[r.jsx($,{children:"Status do Cliente"}),r.jsxs(w,{value:e.overall_status,onChange:a=>b("overall_status",a.target.value),children:[r.jsx("option",{value:"",children:"Todos os status"}),r.jsx("option",{value:"pending",children:"Pendente"}),r.jsx("option",{value:"analysis",children:"Em análise"}),r.jsx("option",{value:"approved",children:"Aprovado"})]})]}),r.jsxs(v,{children:[r.jsx($,{children:"Parceiro"}),r.jsxs(w,{value:e.partner_id,onChange:a=>b("partner_id",a.target.value),children:[r.jsx("option",{value:"",children:"Todos os parceiros"}),z==null?void 0:z.map(a=>r.jsx("option",{value:String(a.id),children:a.name},a.id))]})]})]}),r.jsxs(de,{children:[r.jsxs(pe,{type:"button",onClick:V,children:[r.jsx(O,{size:14})," Limpar"]}),r.jsxs(ce,{type:"button",onClick:U,disabled:d||L,children:[r.jsx(Q,{size:14}),L?"Buscando…":"Buscar"]}),r.jsx("button",{type:"button",onClick:N,children:"Imprimir"})]})]}),r.jsxs(xe,{children:[r.jsxs(S,{children:[r.jsx(_,{$color:"#B45A14",children:r.jsx(K,{size:20})}),r.jsx(k,{children:"Total de Clientes"}),r.jsx(T,{children:d?"—":g.total_clients??0})]}),r.jsxs(S,{children:[r.jsx(_,{$color:"#059669",children:r.jsx(Z,{size:20})}),r.jsx(k,{children:"Valor Total"}),r.jsx(T,{children:d?"—":A(g.total_value)})]}),r.jsxs(S,{children:[r.jsx(_,{$color:"#2563eb",children:r.jsx(R,{size:20})}),r.jsx(k,{children:"Total de Vendas"}),r.jsx(T,{children:d?"—":g.total_sales??0})]}),r.jsxs(S,{children:[r.jsx(_,{$color:"#8b5cf6",children:r.jsx(ee,{size:20})}),r.jsx(k,{children:"Ticket Médio"}),r.jsx(T,{children:d?"—":A(g.average_ticket)})]})]}),r.jsxs("div",{ref:F,children:[r.jsxs("div",{style:{marginBottom:"20px",borderBottom:"1px solid #ccc",paddingBottom:"10px"},children:[r.jsx("h2",{children:"Relatório de Clientes"}),r.jsxs("p",{children:["Data: ",new Date().toLocaleDateString("pt-BR")]}),r.jsxs("p",{children:["Filtros:",s.year&&` Ano: ${s.year}`,s.month&&` | Mês: ${s.month}`,s.overall_status&&` | Status: ${s.overall_status}`]})]}),r.jsxs(ue,{children:[r.jsx(he,{children:r.jsxs(fe,{children:[r.jsx(me,{children:r.jsxs("tr",{children:[r.jsx(h,{children:"Empresa"}),r.jsx(h,{children:"Plano"}),r.jsx(h,{children:"Valor Total"}),r.jsx(h,{children:"Status"}),r.jsx(h,{children:"Cadastro"})]})}),r.jsxs(ge,{children:[d&&r.jsx(Ae,{}),!d&&M.map(a=>r.jsxs(be,{onClick:()=>t(`/clientes/${a.client_id}`),title:"Ver detalhes do cliente",children:[r.jsx(B,{children:a.corporate_name}),r.jsx(H,{children:a.latest_plan||"—"}),r.jsx(B,{children:A(a.total_value)}),r.jsx(B,{children:r.jsx(je,{$status:a.overall_status,children:Pe[a.overall_status]??a.overall_status})}),r.jsx(H,{children:Ce(a.registered_at)})]},a.client_id)),!d&&M.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:5,children:r.jsxs(ye,{children:[r.jsx(ve,{children:r.jsx(R,{size:40})}),r.jsx($e,{children:"Nenhum resultado encontrado"}),r.jsx(we,{children:"Tente ajustar os filtros para ver mais resultados."})]})})})]})]})}),!d&&c.totalPages>1&&r.jsxs(Se,{children:[r.jsxs(ke,{children:["Página ",c.currentPage," de ",c.totalPages," · ",c.total," registros"]}),r.jsxs(Te,{children:[r.jsx(C,{type:"button",onClick:()=>u(a=>Math.max(1,a-1)),disabled:p<=1,"aria-label":"Página anterior",children:r.jsx(W,{size:15})}),Array.from({length:c.totalPages},(a,i)=>i+1).filter(a=>a===1||a===c.totalPages||Math.abs(a-p)<=2).reduce((a,i,j,Y)=>(j>0&&i-Y[j-1]>1&&a.push("…"),a.push(i),a),[]).map((a,i)=>a==="…"?r.jsx(C,{disabled:!0,as:"span",children:"…"},`ellipsis-${i}`):r.jsx(C,{type:"button",$active:a===p,onClick:()=>u(a),children:a},a)),r.jsx(C,{type:"button",onClick:()=>u(a=>Math.min(c.totalPages,a+1)),disabled:p>=c.totalPages,"aria-label":"Próxima página",children:r.jsx(X,{size:15})})]})]})]})]})]})}export{Ee as default};
