import{c as D,a as t,p as Z,h as ve,u as Se,b as ke,e as X,r as z,j as n,F as ze,d as R,B as L,g as ee}from"./index-BIkF9nUC.js";import{u as Ce}from"./useQuery-BF08WLTa.js";import{A as _e,B as Ee,M as Fe,F as H,L as Le}from"./map-pin-Fzd7ceSd.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=D("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=D("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=D("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=D("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),Re=Z`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Pe=Z`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,ne=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  animation: ${Re} 0.35s ease both;
`,te=t.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,re=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,Ie=t.button`
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
`,se=t.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ue=t.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,We=t.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  letter-spacing: 0.04em;
`,Ne=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`,f=t.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,y=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,$=t.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,j=t.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,oe=t.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,k=t.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,o=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`,a=t.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,i=t.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,qe=t(i)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,Q={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},G={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},K=t.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var s;return((s=Q[e])==null?void 0:s.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var s;return((s=Q[e])==null?void 0:s.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`,Me=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,Oe=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`,Ve=t.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,He=t.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Qe=t.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;t.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;const Ge=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ke=t.div`
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
`,Ye=t.span`
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
`,Je=t.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,Ze=t.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Xe=t.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,en=t.button`
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
`,nn=t.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,A=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,B=t.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`,b=t.div`
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
`,tn=t(f)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,rn=t.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[4]} 0;
`,sn=e=>{if(!e)return"—";const s=e.replace(/\D/g,"");return s.length!==14?e:s.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5")},on=e=>{if(!e)return"—";const s=e.replace(/\D/g,"");return s.length===11?s.replace(/^(\d{2})(\d{5})(\d{4})$/,"($1) $2-$3"):s.length===10?s.replace(/^(\d{2})(\d{4})(\d{4})$/,"($1) $2-$3"):e},Y=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",an=e=>e==null?"—":Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),ln={food:"Vale Alimentação",meal:"Vale Refeição",both:"Alimentação + Refeição"},dn={company_document:"Documento da Empresa",proof_of_address:"Comprovante de Endereço",bank_account_proof:"Comprovante Bancário",card_machine_proof:"Comprovante de Maquininha"};function cn(){return n.jsxs(ne,{children:[n.jsx(te,{children:n.jsxs(re,{children:[n.jsx(b,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),n.jsxs(se,{children:[n.jsx(b,{$w:"220px",$h:"28px"}),n.jsx(b,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]})}),n.jsx(oe,{children:n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:n.jsxs(tn,{children:[n.jsx(b,{$w:"40%",$h:"18px"}),n.jsx(rn,{}),n.jsx(k,{children:Array.from({length:6}).map((e,s)=>n.jsxs(o,{children:[n.jsx(b,{$w:"50%",$h:"11px"}),n.jsx(b,{$w:"80%",$h:"16px",style:{marginTop:"4px"}})]},s))})]})})})]})}const pn=[{value:"pending",label:"Pendente"},{value:"analysis",label:"Em análise"},{value:"approved",label:"Aprovado"}],J={approved:{bg:"#d1fae5",color:"#065f46"},analysis:{bg:"#dbeafe",color:"#1e40af"},pending:{bg:"#fef3c7",color:"#92400e"}};function xn({clientFlagId:e,currentStatus:s,onUpdated:C,onOptimisticUpdate:d}){const w=X(),[p,h]=z.useState(!1),[l,_]=z.useState(s),v=J[l]??J.pending,E=async g=>{const m=g.target.value,S=l;if(m!==S){_(m),d(e,m),h(!0);try{await R.patch(`/client-flags/${e}/status`,{status:m}),L.success("Status da bandeira atualizado."),C(),w.invalidateQueries({queryKey:["dashboard-recent-clients"]}),w.invalidateQueries({queryKey:["clients"]})}catch(F){_(S),d(e,S),L.error(ee(F,"Erro ao atualizar status."))}finally{h(!1)}}};return n.jsx("select",{value:l,onChange:E,disabled:p,style:{height:"28px",padding:"0 28px 0 8px",border:"1.5px solid #e4d9cf",borderRadius:"99px",fontFamily:"inherit",fontSize:"11px",fontWeight:600,backgroundColor:v.bg,color:v.color,cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 8px center"},children:pn.map(g=>n.jsx("option",{value:g.value,children:g.label},g.value))})}function fn(){var O,V;const{id:e}=ve(),s=Se(),{isAdmin:C,isPartner:d,isUser:w,user:p}=ke(),h=X(),{data:l,isLoading:_}=Ce({queryKey:["client",e],queryFn:async()=>{const{data:r}=await R.get(`/clients/${e}`);return r.data},onError:()=>{L.error("Erro ao carregar dados."),s("/clientes",{replace:!0})}}),[v,E]=z.useState(null),g=z.useCallback((r,x)=>{h.setQueryData(["client",e],u=>u&&{...u,clientFlags:u.clientFlags.map(c=>c.id===r?{...c,status:x}:c)})},[h,e]),m=z.useCallback(()=>{h.invalidateQueries({queryKey:["client",e]})},[h,e]),S=async r=>{E(r.id);try{const x=await R.get(`/documents/${r.id}/download`,{responseType:"blob"}),u=URL.createObjectURL(x.data),c=document.createElement("a");c.href=u,c.download=r.original_name??`documento-${r.id}`,document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(u)}catch(x){L.error(ee(x,"Erro no download."))}finally{E(null)}};if(_)return n.jsx(cn,{});if(!l)return null;const{corporate_name:F,trade_name:P,cnpj:ae,state_registration:ie,phone:le,email:de,protocol:ce,benefit_type:I,overall_status:T,notes:U,createdAt:pe,address_street:W,address_number:xe,address_complement:he,address_neighborhood:ge,address_city:N,address_state:ue,address_zip:fe,clientFlags:me=[],documents:q=[],bankAccounts:M=[]}=l,ye=!d&&(C||w&&l.created_by===(p==null?void 0:p.id)),$e=!d&&(C||w&&l.created_by===(p==null?void 0:p.id)),je=W||N,be=[W,xe,he].filter(Boolean).join(", "),we=[ge,N,ue].filter(Boolean).join(" — ");return n.jsxs(ne,{children:[n.jsxs(te,{children:[n.jsxs(re,{children:[n.jsxs(Ie,{onClick:()=>s("/clientes"),title:"Voltar",children:[n.jsx(_e,{size:18})," Voltar"]}),n.jsxs(se,{children:[n.jsx(Ue,{children:P||F}),n.jsxs(We,{children:["Protocolo #",ce]})]})]}),n.jsxs(Ne,{children:[ye&&n.jsxs("button",{onClick:()=>s(`/clientes/${e}/editar`),style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 14px",border:"1.5px solid #e4d9cf",borderRadius:"8px",background:"transparent",fontSize:"13px",fontWeight:500,color:"#7a6455",cursor:"pointer"},children:[n.jsx(Be,{size:14})," Editar"]}),n.jsx(K,{$status:T,children:G[T]??T})]})]}),n.jsxs(oe,{children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs(f,{children:[n.jsxs(y,{children:[n.jsx($,{children:n.jsx(Ee,{size:18})}),n.jsx(j,{children:"Dados da Empresa"})]}),n.jsxs(k,{children:[n.jsxs(o,{children:[n.jsx(a,{children:"Razão Social"}),n.jsx(i,{children:F||"—"})]}),!d&&n.jsxs(o,{children:[n.jsx(a,{children:"Nome Fantasia"}),n.jsx(i,{children:P||"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"CNPJ"}),n.jsx(i,{children:sn(ae)})]}),!d&&n.jsxs(o,{children:[n.jsx(a,{children:"Inscrição Estadual"}),n.jsx(i,{children:ie||"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Telefone"}),n.jsx(i,{children:on(le)})]}),!d&&n.jsxs(o,{children:[n.jsx(a,{children:"E-mail"}),n.jsx(i,{children:de||"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Tipo de Benefício"}),n.jsx(i,{children:ln[I]??I??"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Cadastrado em"}),n.jsx(i,{children:Y(pe)})]}),!d&&U&&n.jsxs(o,{$span:!0,children:[n.jsx(a,{children:"Observações Internas"}),n.jsx(qe,{children:U})]})]})]}),n.jsxs(f,{children:[n.jsxs(y,{children:[n.jsx($,{children:n.jsx(Fe,{size:18})}),n.jsx(j,{children:"Endereço"})]}),je?n.jsxs(k,{$cols:2,children:[n.jsxs(o,{$span:!0,children:[n.jsx(a,{children:"Logradouro"}),n.jsx(i,{children:be||"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Bairro / Cidade / UF"}),n.jsx(i,{children:we||"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"CEP"}),n.jsx(i,{children:fe||"—"})]})]}):n.jsx(A,{children:n.jsx(B,{children:"Endereço não informado."})})]}),!d&&n.jsxs(f,{children:[n.jsxs(y,{children:[n.jsx($,{children:n.jsx(H,{size:18})}),n.jsx(j,{children:"Documentos"})]}),q.length>0?n.jsx(Ge,{children:q.map(r=>n.jsxs(Ke,{children:[n.jsx(Je,{children:n.jsx(H,{size:16})}),n.jsxs(Ze,{style:{flex:1,minWidth:0},children:[n.jsx(Ye,{title:r.original_name||"Documento",children:r.original_name||"Documento"}),n.jsx(Xe,{children:dn[r.document_type]??r.document_type})]}),n.jsx(en,{onClick:()=>S(r),disabled:v===r.id,children:v===r.id?n.jsx(Ae,{size:14,className:"animate-spin"}):n.jsx(Te,{size:14})})]},r.id))}):n.jsx(A,{children:n.jsx(B,{children:"Sem documentos."})})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs(f,{children:[n.jsxs(y,{children:[n.jsx($,{children:n.jsx(ze,{size:18})}),n.jsx(j,{children:"Bandeiras"})]}),n.jsx(Me,{children:me.map(r=>{var x;return n.jsxs(Oe,{children:[n.jsxs(Ve,{children:[n.jsx(He,{children:((x=r.flag)==null?void 0:x.name)||"Bandeira"}),n.jsx(Qe,{children:r.origin})]}),$e?n.jsx(xn,{clientFlagId:r.id,currentStatus:r.status,onUpdated:m,onOptimisticUpdate:g}):n.jsx(K,{$status:r.status,style:{fontSize:"10px",padding:"2px 8px"},children:G[r.status]??r.status})]},r.id)})})]}),!d&&n.jsxs(f,{children:[n.jsxs(y,{children:[n.jsx($,{children:n.jsx(Le,{size:18})}),n.jsx(j,{children:"Dados Bancários"})]}),M.length>0?M.map(r=>n.jsx(nn,{children:n.jsxs(k,{$cols:1,children:[n.jsxs(o,{children:[n.jsx(a,{children:"Banco"}),n.jsx(i,{children:r.bank_name})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Agência/Conta"}),n.jsxs(i,{children:[r.agency,r.agency_digit?`-${r.agency_digit}`:""," / ",r.account,r.account_digit?`-${r.account_digit}`:""]})]})]})},r.id)):n.jsx(A,{children:n.jsx(B,{children:"Sem dados bancários."})})]}),l.sales&&l.sales.length>0&&n.jsxs(f,{children:[n.jsxs(y,{children:[n.jsx($,{children:n.jsx(De,{size:18})}),n.jsx(j,{children:"Plano Contratado"})]}),n.jsxs(k,{$cols:1,children:[n.jsxs(o,{children:[n.jsx(a,{children:"Nome do Plano"}),n.jsx(i,{children:((O=l.sales[0])==null?void 0:O.plan_name)||"—"})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Valor"}),n.jsx(i,{children:an((V=l.sales[0])==null?void 0:V.total_value)})]}),n.jsxs(o,{children:[n.jsx(a,{children:"Data da Venda"}),n.jsx(i,{children:Y(l.sales[0].createdAt)})]})]})]})]})]}),n.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } } .animate-spin { animation: spin 1s linear infinite; }"})]})}export{fn as default};
