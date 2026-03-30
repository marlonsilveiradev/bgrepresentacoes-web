import{c as D,a as t,p as se,h as Fe,u as Le,b as De,e as ae,r as z,j as n,F as Ae,d as P,B as L,g as oe}from"./index-79eoxmbg.js";import{u as Te}from"./useQuery-CfcG5hg-.js";import{A as Re,B as Be,M as Pe,L as Ie}from"./map-pin-Bywn8CQW.js";import{F as X}from"./file-text-CvIjqaiO.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=D("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=D("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=D("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=D("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),Me=se`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Oe=se`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,ie=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  animation: ${Me} 0.35s ease both;
`,le=t.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,de=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,Ve=t.button`
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
`,ce=t.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,He=t.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,Qe=t.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  letter-spacing: 0.04em;
`,Ge=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`,u=t.div`
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
`,pe=t.div`
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
`,i=t.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`,l=t.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,Ke=t(l)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`,ee={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},ne={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},te=t.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var s;return((s=ee[e])==null?void 0:s.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var s;return((s=ee[e])==null?void 0:s.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`,Ye=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,Je=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`,Ze=t.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,Xe=t.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,en=t.span`
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
`;const nn=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,tn=t.div`
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
`,rn=t.span`
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
`,sn=t.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,an=t.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,on=t.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,ln=t.button`
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
`,dn=t.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,T=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`,R=t.p`
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
  animation: ${Oe} 1.4s ease infinite;
`,cn=t(u)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,pn=t.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[4]} 0;
`,xn=e=>{if(!e)return"—";const s=e.replace(/\D/g,"");return s.length!==14?e:s.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5")},hn=e=>{if(!e)return"—";const s=e.replace(/\D/g,"");return s.length===11?s.replace(/^(\d{2})(\d{5})(\d{4})$/,"($1) $2-$3"):s.length===10?s.replace(/^(\d{2})(\d{4})(\d{4})$/,"($1) $2-$3"):e},B=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",gn=e=>e==null?"—":Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),mn={food:"Vale Alimentação",meal:"Vale Refeição",both:"Alimentação + Refeição"},un={company_document:"Documento da Empresa",proof_of_address:"Comprovante de Endereço",bank_account_proof:"Comprovante Bancário",card_machine_proof:"Comprovante de Maquininha"};function fn(){return n.jsxs(ie,{children:[n.jsx(le,{children:n.jsxs(de,{children:[n.jsx(b,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),n.jsxs(ce,{children:[n.jsx(b,{$w:"220px",$h:"28px"}),n.jsx(b,{$w:"120px",$h:"14px",style:{marginTop:"4px"}})]})]})}),n.jsx(pe,{children:n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:n.jsxs(cn,{children:[n.jsx(b,{$w:"40%",$h:"18px"}),n.jsx(pn,{}),n.jsx(k,{children:Array.from({length:6}).map((e,s)=>n.jsxs(o,{children:[n.jsx(b,{$w:"50%",$h:"11px"}),n.jsx(b,{$w:"80%",$h:"16px",style:{marginTop:"4px"}})]},s))})]})})})]})}const yn=[{value:"pending",label:"Pendente"},{value:"analysis",label:"Em análise"},{value:"approved",label:"Aprovado"}],re={approved:{bg:"#d1fae5",color:"#065f46"},analysis:{bg:"#dbeafe",color:"#1e40af"},pending:{bg:"#fef3c7",color:"#92400e"}};function $n({clientFlagId:e,currentStatus:s,onUpdated:_,onOptimisticUpdate:d}){const w=ae(),[p,h]=z.useState(!1),[a,C]=z.useState(s),v=re[a]??re.pending,E=async g=>{const f=g.target.value,S=a;if(f!==S){C(f),d(e,f),h(!0);try{await P.patch(`/client-flags/${e}/status`,{status:f}),L.success("Status da bandeira atualizado."),_(),w.invalidateQueries({queryKey:["dashboard-recent-clients"]}),w.invalidateQueries({queryKey:["clients"]})}catch(F){C(S),d(e,S),L.error(oe(F,"Erro ao atualizar status."))}finally{h(!1)}}};return n.jsx("select",{value:a,onChange:E,disabled:p,style:{height:"28px",padding:"0 28px 0 8px",border:"1.5px solid #e4d9cf",borderRadius:"99px",fontFamily:"inherit",fontSize:"11px",fontWeight:600,backgroundColor:v.bg,color:v.color,cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 8px center"},children:yn.map(g=>n.jsx("option",{value:g.value,children:g.label},g.value))})}function Sn(){var V,H,Q,G,K,Y,J,Z;const{id:e}=Fe(),s=Le(),{isAdmin:_,isPartner:d,isUser:w,user:p}=De(),h=ae(),{data:a,isLoading:C}=Te({queryKey:["client",e],queryFn:async()=>{const{data:r}=await P.get(`/clients/${e}`);return r.data},onError:()=>{L.error("Erro ao carregar dados."),s("/clientes",{replace:!0})}}),[v,E]=z.useState(null),g=z.useCallback((r,x)=>{h.setQueryData(["client",e],m=>m&&{...m,clientFlags:m.clientFlags.map(c=>c.id===r?{...c,status:x}:c)})},[h,e]),f=z.useCallback(()=>{h.invalidateQueries({queryKey:["client",e]})},[h,e]),S=async r=>{E(r.id);try{const x=await P.get(`/documents/${r.id}/download`,{responseType:"blob"}),m=URL.createObjectURL(x.data),c=document.createElement("a");c.href=m,c.download=r.original_name??`documento-${r.id}`,document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(m)}catch(x){L.error(oe(x,"Erro no download."))}finally{E(null)}};if(C)return n.jsx(fn,{});if(!a)return null;const{corporate_name:F,trade_name:I,cnpj:xe,state_registration:he,responsible_name:ge,phone:me,email:ue,protocol:fe,benefit_type:U,overall_status:A,notes:W,createdAt:ye,address_street:N,address_number:$e,address_complement:je,address_neighborhood:be,address_city:q,address_state:we,address_zip:ve,clientFlags:Se=[],documents:M=[],bankAccounts:O=[]}=a,ke=!d&&(_||w&&a.created_by===(p==null?void 0:p.id)),ze=!d&&(_||w&&a.created_by===(p==null?void 0:p.id)),_e=N||q,Ce=[N,$e,je].filter(Boolean).join(", "),Ee=[be,q,we].filter(Boolean).join(" — ");return n.jsxs(ie,{children:[n.jsxs(le,{children:[n.jsxs(de,{children:[n.jsxs(Ve,{onClick:()=>s("/clientes"),title:"Voltar",children:[n.jsx(Re,{size:18})," Voltar"]}),n.jsxs(ce,{children:[n.jsx(He,{children:I||F}),n.jsxs(Qe,{children:["Protocolo #",fe]})]})]}),n.jsxs(Ge,{children:[ke&&n.jsxs("button",{onClick:()=>s(`/clientes/${e}/editar`),style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 14px",border:"1.5px solid #e4d9cf",borderRadius:"8px",background:"transparent",fontSize:"13px",fontWeight:500,color:"#7a6455",cursor:"pointer"},children:[n.jsx(qe,{size:14})," Editar"]}),n.jsx(te,{$status:A,children:ne[A]??A})]})]}),n.jsxs(pe,{children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs(u,{children:[n.jsxs(y,{children:[n.jsx($,{children:n.jsx(Be,{size:18})}),n.jsx(j,{children:"Dados da Empresa"})]}),n.jsxs(k,{children:[n.jsxs(o,{children:[n.jsx(i,{children:"Razão Social"}),n.jsx(l,{children:F||"—"})]}),!d&&n.jsxs(o,{children:[n.jsx(i,{children:"Nome Fantasia"}),n.jsx(l,{children:I||"—"})]}),n.jsxs(o,{children:[n.jsx(i,{children:"CNPJ"}),n.jsx(l,{children:xn(xe)})]}),!d&&n.jsxs(o,{children:[n.jsx(i,{children:"Inscrição Estadual"}),n.jsx(l,{children:he||"—"})]}),n.jsxs(o,{children:[n.jsx(i,{children:"Responsável"}),n.jsx(l,{children:ge||"—"})]}),n.jsxs(o,{children:[n.jsx(i,{children:"Telefone"}),n.jsx(l,{children:hn(me)})]}),!d&&n.jsxs(o,{children:[n.jsx(i,{children:"E-mail"}),n.jsx(l,{children:ue||"—"})]}),n.jsxs(o,{children:[n.jsx(i,{children:"Tipo de Benefício"}),n.jsx(l,{children:mn[U]??U??"—"})]}),n.jsxs(o,{children:[n.jsx(i,{children:"Cadastrado em"}),n.jsx(l,{children:B(ye)})]}),W&&n.jsxs(o,{$span:!0,children:[n.jsx(i,{children:"Observações Internas"}),n.jsx(Ke,{children:W})]})]})]}),n.jsxs(u,{children:[n.jsxs(y,{children:[n.jsx($,{children:n.jsx(Pe,{size:18})}),n.jsx(j,{children:"Endereço"})]}),_e?n.jsxs(k,{$cols:2,children:[n.jsxs(o,{$span:!0,children:[n.jsx(i,{children:"Logradouro"}),n.jsx(l,{children:Ce||"—"})]}),n.jsxs(o,{children:[n.jsx(i,{children:"Bairro / Cidade / UF"}),n.jsx(l,{children:Ee||"—"})]}),n.jsxs(o,{children:[n.jsx(i,{children:"CEP"}),n.jsx(l,{children:ve||"—"})]})]}):n.jsx(T,{children:n.jsx(R,{children:"Endereço não informado."})})]}),!d&&n.jsxs(u,{children:[n.jsxs(y,{children:[n.jsx($,{children:n.jsx(X,{size:18})}),n.jsx(j,{children:"Documentos"})]}),M.length>0?n.jsx(nn,{children:M.map(r=>n.jsxs(tn,{children:[n.jsx(sn,{children:n.jsx(X,{size:16})}),n.jsxs(an,{style:{flex:1,minWidth:0},children:[n.jsx(rn,{title:r.original_name||"Documento",children:r.original_name||"Documento"}),n.jsx(on,{children:un[r.document_type]??r.document_type})]}),n.jsx(ln,{onClick:()=>S(r),disabled:v===r.id,children:v===r.id?n.jsx(Ne,{size:14,className:"animate-spin"}):n.jsx(We,{size:14})})]},r.id))}):n.jsx(T,{children:n.jsx(R,{children:"Sem documentos."})})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs(u,{children:[n.jsxs(y,{children:[n.jsx($,{children:n.jsx(Ae,{size:18})}),n.jsx(j,{children:"Bandeiras"})]}),n.jsx(Ye,{children:Se.map(r=>{var x;return n.jsxs(Je,{children:[n.jsxs(Ze,{children:[n.jsx(Xe,{children:((x=r.flag)==null?void 0:x.name)||"Bandeira"}),n.jsx(en,{children:r.origin})]}),ze?n.jsx($n,{clientFlagId:r.id,currentStatus:r.status,onUpdated:f,onOptimisticUpdate:g}):n.jsx(te,{$status:r.status,style:{fontSize:"10px",padding:"2px 8px"},children:ne[r.status]??r.status})]},r.id)})})]}),!d&&n.jsxs(u,{children:[n.jsxs(y,{children:[n.jsx($,{children:n.jsx(Ie,{size:18})}),n.jsx(j,{children:"Dados Bancários"})]}),O.length>0?O.map(r=>n.jsx(dn,{children:n.jsxs(k,{$cols:1,children:[n.jsxs(o,{children:[n.jsx(i,{children:"Banco"}),n.jsx(l,{children:r.bank_name})]}),n.jsxs(o,{children:[n.jsx(i,{children:"Agência/Conta"}),n.jsxs(l,{children:[r.agency,r.agency_digit?`-${r.agency_digit}`:""," / ",r.account,r.account_digit?`-${r.account_digit}`:""]})]})]})},r.id)):n.jsx(T,{children:n.jsx(R,{children:"Sem dados bancários."})})]}),a&&(a.plan_name||a.sales&&a.sales.length>0)&&n.jsxs(u,{children:[n.jsxs(y,{children:[n.jsx($,{children:n.jsx(Ue,{size:18})}),n.jsx(j,{children:"Plano Contratado"})]}),n.jsxs(k,{$cols:1,children:[n.jsxs(o,{children:[n.jsx(i,{children:"Nome do Plano"}),n.jsx(l,{children:((H=(V=a.sales)==null?void 0:V[0])==null?void 0:H.plan_name)||a.plan_name||"—"})]}),!d&&((G=(Q=a.sales)==null?void 0:Q[0])==null?void 0:G.total_value)&&n.jsxs(o,{children:[n.jsx(i,{children:"Valor"}),n.jsx(l,{children:(Y=(K=a.sales)==null?void 0:K[0])!=null&&Y.total_value?gn(a.sales[0].total_value):"—"})]}),n.jsxs(o,{children:[n.jsx(i,{children:"Data da Venda"}),n.jsx(l,{children:(Z=(J=a.sales)==null?void 0:J[0])!=null&&Z.createdAt?B(a.sales[0].createdAt):a.createdAt?B(a.createdAt):"—"})]})]})]})]})]}),n.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } } .animate-spin { animation: spin 1s linear infinite; }"})]})}export{Sn as default};
