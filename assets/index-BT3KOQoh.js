import{c as F,a as r,p as X,f as ke,u as Se,b as ze,r as c,d as _,B as E,g as R,j as n,F as Ce}from"./index-DA1kVu7H.js";import{A as _e,B as Ee,M as Fe,F as Y,L as Le}from"./map-pin-gDTZREaV.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=F("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=F("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=F("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=F("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),Re=X`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Pe=X`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,ee=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  animation: ${Re} 0.35s ease both;
`,ne=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,te=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,Ie=r.button`
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
`,re=r.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ue=r.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,We=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  letter-spacing: 0.04em;
`,Ne=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`,y=r.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,j=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,b=r.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,w=r.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,se=r.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,k=r.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,o=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`,a=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,i=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,Me=r(i)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,q={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},J={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},Z=r.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var s;return((s=q[e])==null?void 0:s.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var s;return((s=q[e])==null?void 0:s.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`,Oe=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,Ve=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`,He=r.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,Ge=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ye=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;const qe=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Je=r.div`
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
`,Ze=r.span`
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
`,Ke=r.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,Qe=r.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Xe=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,en=r.button`
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
`,nn=r.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,A=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,B=r.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,v=r.div`
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
  animation: ${Pe} 1.4s ease infinite;
`,tn=r(y)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,rn=r.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[4]} 0;
`,sn=e=>{if(!e)return"—";const s=e.replace(/\D/g,"");return s.length!==14?e:s.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5")},on=e=>{if(!e)return"—";const s=e.replace(/\D/g,"");return s.length===11?s.replace(/^(\d{2})(\d{5})(\d{4})$/,"($1) $2-$3"):s.length===10?s.replace(/^(\d{2})(\d{4})(\d{4})$/,"($1) $2-$3"):e},K=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",an=e=>e==null?"—":Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),ln={food:"Vale Alimentação",meal:"Vale Refeição",both:"Alimentação + Refeição"},dn={company_document:"Documento da Empresa",proof_of_address:"Comprovante de Endereço",bank_account_proof:"Comprovante Bancário",card_machine_proof:"Comprovante de Maquininha"};function cn(){return n.jsxs(ee,{children:[n.jsx(ne,{children:n.jsxs(te,{children:[n.jsx(v,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),n.jsxs(re,{children:[n.jsx(v,{$w:"220px",$h:"28px"}),n.jsx(v,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]})}),n.jsx(se,{children:n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:n.jsxs(tn,{children:[n.jsx(v,{$w:"40%",$h:"18px"}),n.jsx(rn,{}),n.jsx(k,{children:Array.from({length:6}).map((e,s)=>n.jsxs(o,{children:[n.jsx(v,{$w:"50%",$h:"11px"}),n.jsx(v,{$w:"80%",$h:"16px",style:{marginTop:"4px"}})]},s))})]})})})]})}const pn=[{value:"pending",label:"Pendente"},{value:"analysis",label:"Em análise"},{value:"approved",label:"Aprovado"}],Q={approved:{bg:"#d1fae5",color:"#065f46"},analysis:{bg:"#dbeafe",color:"#1e40af"},pending:{bg:"#fef3c7",color:"#92400e"}};function xn({clientFlagId:e,currentStatus:s,onUpdated:S,onOptimisticUpdate:d}){const[z,p]=c.useState(!1),[l,f]=c.useState(s),C=Q[l]??Q.pending;c.useEffect(()=>{f(s)},[s]);const L=async h=>{const m=h.target.value,$=l;if(m!==$){f(m),d(e,m),p(!0);try{await _.patch(`/client-flags/${e}/status`,{status:m}),E.success("Status da bandeira atualizado."),S()}catch(D){f($),d(e,$),E.error(R(D,"Erro ao atualizar status."))}finally{p(!1)}}};return n.jsx("select",{value:l,onChange:L,disabled:z,style:{height:"28px",padding:"0 28px 0 8px",border:"1.5px solid #e4d9cf",borderRadius:"99px",fontFamily:"inherit",fontSize:"11px",fontWeight:600,backgroundColor:C.bg,color:C.color,cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 8px center"},children:pn.map(h=>n.jsx("option",{value:h.value,children:h.label},h.value))})}function fn(){var H,G;const{id:e}=ke(),s=Se(),{isAdmin:S,isPartner:d,isUser:z,user:p}=ze(),[l,f]=c.useState(null),[C,L]=c.useState(!0),[h,m]=c.useState(null),$=c.useCallback(async()=>{try{const{data:t}=await _.get(`/clients/${e}`);f(t.data)}catch(t){E.error(R(t,"Erro ao carregar dados.")),s("/clientes",{replace:!0})}finally{L(!1)}},[e,s]);c.useEffect(()=>{$()},[$]);const D=c.useCallback((t,g)=>{f(u=>u&&{...u,clientFlags:u.clientFlags.map(x=>x.id===t?{...x,status:g}:x)})},[]),oe=c.useCallback(async()=>{try{const{data:t}=await _.get(`/clients/${e}`);f(t.data)}catch{}},[e]),ae=async t=>{m(t.id);try{const g=await _.get(`/documents/${t.id}/download`,{responseType:"blob"}),u=URL.createObjectURL(g.data),x=document.createElement("a");x.href=u,x.download=t.original_name??`documento-${t.id}`,document.body.appendChild(x),x.click(),x.remove(),URL.revokeObjectURL(u)}catch(g){E.error(R(g,"Erro no download."))}finally{m(null)}};if(C)return n.jsx(cn,{});if(!l)return null;const{corporate_name:P,trade_name:I,cnpj:ie,state_registration:le,phone:de,email:ce,protocol:pe,benefit_type:U,overall_status:T,notes:W,createdAt:xe,address_street:N,address_number:he,address_complement:ge,address_neighborhood:fe,address_city:M,address_state:me,address_zip:ue,clientFlags:ye=[],documents:O=[],bankAccounts:V=[]}=l,$e=!d&&(S||z&&l.created_by===(p==null?void 0:p.id)),je=!d&&(S||z&&l.created_by===(p==null?void 0:p.id)),be=N||M,we=[N,he,ge].filter(Boolean).join(", "),ve=[fe,M,me].filter(Boolean).join(" — ");return n.jsxs(ee,{children:[n.jsxs(ne,{children:[n.jsxs(te,{children:[n.jsxs(Ie,{onClick:()=>s("/clientes"),title:"Voltar",children:[n.jsx(_e,{size:18})," Voltar"]}),n.jsxs(re,{children:[n.jsx(Ue,{children:I||P}),n.jsxs(We,{children:["Protocolo #",pe]})]})]}),n.jsxs(Ne,{children:[$e&&n.jsxs("button",{onClick:()=>s(`/clientes/${e}/editar`),style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 14px",border:"1.5px solid #e4d9cf",borderRadius:"8px",background:"transparent",fontSize:"13px",fontWeight:500,color:"#7a6455",cursor:"pointer"},children:[n.jsx(Be,{size:14})," Editar"]}),n.jsx(Z,{$status:T,children:J[T]??T})]})]}),n.jsxs(se,{children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs(y,{children:[n.jsxs(j,{children:[n.jsx(b,{children:n.jsx(Ee,{size:18})}),n.jsx(w,{children:"Dados da Empresa"})]}),n.jsxs(k,{children:[n.jsxs(o,{children:[n.jsx(a,{children:"Razão Social"}),n.jsx(i,{children:P||"—"})]}),!d&&n.jsxs(o,{children:[n.jsx(a,{children:"Nome Fantasia"}),n.jsx(i,{children:I||"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"CNPJ"}),n.jsx(i,{children:sn(ie)})]}),!d&&n.jsxs(o,{children:[n.jsx(a,{children:"Inscrição Estadual"}),n.jsx(i,{children:le||"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Telefone"}),n.jsx(i,{children:on(de)})]}),!d&&n.jsxs(o,{children:[n.jsx(a,{children:"E-mail"}),n.jsx(i,{children:ce||"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Tipo de Benefício"}),n.jsx(i,{children:ln[U]??U??"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Cadastrado em"}),n.jsx(i,{children:K(xe)})]}),!d&&W&&n.jsxs(o,{$span:!0,children:[n.jsx(a,{children:"Observações Internas"}),n.jsx(Me,{children:W})]})]})]}),n.jsxs(y,{children:[n.jsxs(j,{children:[n.jsx(b,{children:n.jsx(Fe,{size:18})}),n.jsx(w,{children:"Endereço"})]}),be?n.jsxs(k,{$cols:2,children:[n.jsxs(o,{$span:!0,children:[n.jsx(a,{children:"Logradouro"}),n.jsx(i,{children:we||"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Bairro / Cidade / UF"}),n.jsx(i,{children:ve||"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"CEP"}),n.jsx(i,{children:ue||"—"})]})]}):n.jsx(A,{children:n.jsx(B,{children:"Endereço não informado."})})]}),!d&&n.jsxs(y,{children:[n.jsxs(j,{children:[n.jsx(b,{children:n.jsx(Y,{size:18})}),n.jsx(w,{children:"Documentos"})]}),O.length>0?n.jsx(qe,{children:O.map(t=>n.jsxs(Je,{children:[n.jsx(Ke,{children:n.jsx(Y,{size:16})}),n.jsxs(Qe,{style:{flex:1,minWidth:0},children:[n.jsx(Ze,{title:t.original_name||"Documento",children:t.original_name||"Documento"}),n.jsx(Xe,{children:dn[t.document_type]??t.document_type})]}),n.jsx(en,{onClick:()=>ae(t),disabled:h===t.id,children:h===t.id?n.jsx(Ae,{size:14,className:"animate-spin"}):n.jsx(Te,{size:14})})]},t.id))}):n.jsx(A,{children:n.jsx(B,{children:"Sem documentos."})})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs(y,{children:[n.jsxs(j,{children:[n.jsx(b,{children:n.jsx(Ce,{size:18})}),n.jsx(w,{children:"Bandeiras"})]}),n.jsx(Oe,{children:ye.map(t=>{var g;return n.jsxs(Ve,{children:[n.jsxs(He,{children:[n.jsx(Ge,{children:((g=t.flag)==null?void 0:g.name)||"Bandeira"}),n.jsx(Ye,{children:t.origin})]}),je?n.jsx(xn,{clientFlagId:t.id,currentStatus:t.status,onUpdated:oe,onOptimisticUpdate:D}):n.jsx(Z,{$status:t.status,style:{fontSize:"10px",padding:"2px 8px"},children:J[t.status]??t.status})]},t.id)})})]}),!d&&n.jsxs(y,{children:[n.jsxs(j,{children:[n.jsx(b,{children:n.jsx(Le,{size:18})}),n.jsx(w,{children:"Dados Bancários"})]}),V.length>0?V.map(t=>n.jsx(nn,{children:n.jsxs(k,{$cols:1,children:[n.jsxs(o,{children:[n.jsx(a,{children:"Banco"}),n.jsx(i,{children:t.bank_name})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Agência/Conta"}),n.jsxs(i,{children:[t.agency,t.agency_digit?`-${t.agency_digit}`:""," / ",t.account,t.account_digit?`-${t.account_digit}`:""]})]})]})},t.id)):n.jsx(A,{children:n.jsx(B,{children:"Sem dados bancários."})})]}),l.sales&&l.sales.length>0&&n.jsxs(y,{children:[n.jsxs(j,{children:[n.jsx(b,{children:n.jsx(De,{size:18})}),n.jsx(w,{children:"Plano Contratado"})]}),n.jsxs(k,{$cols:1,children:[n.jsxs(o,{children:[n.jsx(a,{children:"Nome do Plano"}),n.jsx(i,{children:((H=l.sales[0])==null?void 0:H.plan_name)||"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Valor"}),n.jsx(i,{children:an((G=l.sales[0])==null?void 0:G.total_value)})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Data da Venda"}),n.jsx(i,{children:K(l.sales[0].createdAt)})]})]})]})]})]}),n.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } } .animate-spin { animation: spin 1s linear infinite; }"})]})}export{fn as default};
