import{a as r,p as A,u as U,b as I,r as l,d as Y,B as D,g as M,j as e,U as J}from"./index-DA1kVu7H.js";import{U as H}from"./user-plus-Bp8ysmmc.js";import{S as G,C as q,a as V}from"./search-C-gj5qA3.js";const P=A`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,K=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:t})=>t.spacing[4]};
  margin-bottom: ${({theme:t})=>t.spacing[8]};
  animation: ${P} 0.35s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,O=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing[1]};
`,Q=r.h1`
  font-family: ${({theme:t})=>t.typography.fontFamily.serif};
  font-size: ${({theme:t})=>t.typography.fontSize["2xl"]};
  font-weight: ${({theme:t})=>t.typography.fontWeight.bold};
  color: ${({theme:t})=>t.text.primary};
  margin: 0;
  line-height: ${({theme:t})=>t.typography.lineHeight.tight};
`,X=r.p`
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.secondary};
  margin: 0;
`,Z=r.button`
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
`,tt=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing[3]};
  margin-bottom: ${({theme:t})=>t.spacing[6]};
  animation: ${P} 0.35s 0.05s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`,et=r.div`
  position: relative;
  flex: 1;
  max-width: 360px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,ot=r.span`
  position: absolute;
  left: ${({theme:t})=>t.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:t})=>t.text.muted};
  display: flex;
  align-items: center;
  pointer-events: none;
`,at=r.input`
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
`,rt=r.select`
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
`,nt=r.div`
  background-color: ${({theme:t})=>t.surface.card};
  border: 1px solid ${({theme:t})=>t.border.default};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  overflow: hidden;
  animation: ${P} 0.35s 0.1s ease both;
`,st=r.table`
  width: 100%;
  border-collapse: collapse;
`,it=r.thead`
  background-color: ${({theme:t})=>t.colors.neutral[50]};
  border-bottom: 1px solid ${({theme:t})=>t.border.default};
`,h=r.th`
  padding: ${({theme:t})=>t.spacing[3]} ${({theme:t})=>t.spacing[5]};
  text-align: left;
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.xs};
  font-weight: ${({theme:t})=>t.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:t})=>t.text.muted};
  white-space: nowrap;
`,lt=r.tbody``,ct=r.tr`
  border-bottom: 1px solid ${({theme:t})=>t.border.default};
  transition: background-color ${({theme:t})=>t.transitions.fast};
  cursor: pointer;

  &:last-child { border-bottom: none; }

  &:hover {
    background-color: ${({theme:t})=>t.colors.neutral[50]};
  }
`,v=r.td`
  padding: ${({theme:t})=>t.spacing[4]} ${({theme:t})=>t.spacing[5]};
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.primary};
  vertical-align: middle;
`,w=r(v)`
  color: ${({theme:t})=>t.text.secondary};
`,E={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}},dt=r.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.xs};
  font-weight: ${({theme:t})=>t.typography.fontWeight.semibold};
  background-color: ${({$status:t})=>{var o;return((o=E[t])==null?void 0:o.bg)??"#f3f4f6"}};
  color: ${({$status:t})=>{var o;return((o=E[t])==null?void 0:o.color)??"#374151"}};
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
`,pt={pending:"Pendente",analysis:"Em análise",approved:"Aprovado"},gt=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:t})=>t.spacing[16]} ${({theme:t})=>t.spacing[8]};
  gap: ${({theme:t})=>t.spacing[3]};
  text-align: center;
`,ht=r.div`
  color: ${({theme:t})=>t.colors.neutral[300]};
  margin-bottom: ${({theme:t})=>t.spacing[2]};
`,ft=r.p`
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.base};
  font-weight: ${({theme:t})=>t.typography.fontWeight.semibold};
  color: ${({theme:t})=>t.text.secondary};
  margin: 0;
`,ut=r.p`
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.muted};
  margin: 0;
  max-width: 300px;
  line-height: ${({theme:t})=>t.typography.lineHeight.relaxed};
`,mt=r.tr`
  border-bottom: 1px solid ${({theme:t})=>t.border.default};
  &:last-child { border-bottom: none; }
`,f=r.td`
  padding: ${({theme:t})=>t.spacing[4]} ${({theme:t})=>t.spacing[5]};
`,xt=A`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,u=r.div`
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
  animation: ${xt} 1.4s ease infinite;
`,$t=r.div`
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
`,yt=r.span`
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  color: ${({theme:t})=>t.text.muted};
`,bt=r.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing[2]};
`,$=r.button`
  height: 32px;
  min-width: 32px;
  padding: 0 ${({theme:t})=>t.spacing[3]};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  border: 1.5px solid ${({theme:t,$active:o})=>o?t.colors.primary[500]:t.border.default};
  background-color: ${({theme:t,$active:o})=>o?t.colors.primary[50]:t.surface.card};
  color: ${({theme:t,$active:o})=>o?t.colors.primary[700]:t.text.secondary};
  font-family: ${({theme:t})=>t.typography.fontFamily.sans};
  font-size: ${({theme:t})=>t.typography.fontSize.sm};
  font-weight: ${({$active:t,theme:o})=>t?o.typography.fontWeight.semibold:o.typography.fontWeight.regular};
  cursor: ${({disabled:t})=>t?"not-allowed":"pointer"};
  opacity: ${({disabled:t})=>t?.4:1};
  transition:
    background-color ${({theme:t})=>t.transitions.fast},
    border-color ${({theme:t})=>t.transitions.fast};

  &:hover:not(:disabled) {
    background-color: ${({theme:t})=>t.colors.neutral[100]};
    border-color: ${({theme:t})=>t.colors.neutral[300]};
  }
`,jt=15,St=({status:t})=>e.jsx(dt,{$status:t,children:pt[t]??t});function wt(){return Array.from({length:5}).map((t,o)=>e.jsxs(mt,{children:[e.jsx(f,{children:e.jsx(u,{$w:"60%"})}),e.jsx(f,{children:e.jsx(u,{$w:"80%"})}),e.jsx(f,{children:e.jsx(u,{$w:"50%"})}),e.jsx(f,{children:e.jsx(u,{$w:"70%"})}),e.jsx(f,{children:e.jsx(u,{$w:"40%"})})]},o))}const F=(t="")=>{const o=t.slice(0,14);return o.length<=2?o:o.length<=5?`${o.slice(0,2)}.${o.slice(2)}`:o.length<=8?`${o.slice(0,2)}.${o.slice(2,5)}.${o.slice(5)}`:o.length<=12?`${o.slice(0,2)}.${o.slice(2,5)}.${o.slice(5,8)}/${o.slice(8)}`:`${o.slice(0,2)}.${o.slice(2,5)}.${o.slice(5,8)}/${o.slice(8,12)}-${o.slice(12)}`},vt=(t="")=>/^[\d.\-/]+$/.test(t)&&/\d/.test(t),Pt=t=>t?new Date(t).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}):"—",kt=t=>({food:"Alimentação",meal:"Refeição",both:"Ambos"})[t]??t??"—";function Rt(){const t=U(),{hasRole:o}=I(),[k,z]=l.useState([]),[s,B]=l.useState({total:0,totalPages:1,currentPage:1}),[m,C]=l.useState(!0),[p,L]=l.useState(""),[d,g]=l.useState(1),[T,y]=l.useState(""),[b,N]=l.useState(""),j=l.useRef(null),R=l.useCallback(async()=>{var a,n,c;C(!0);try{const i=new URLSearchParams({page:d,limit:jt});b&&i.set("search",b),p&&i.set("overall_status",p);const{data:x}=await Y.get(`/clients?${i.toString()}`);z(x.data??[]),B({total:((a=x.pagination)==null?void 0:a.total)??0,totalPages:((n=x.pagination)==null?void 0:n.totalPages)??1,currentPage:((c=x.pagination)==null?void 0:c.currentPage)??1})}catch(i){D.error(M(i,"Erro ao carregar clientes.")),z([])}finally{C(!1)}},[d,b,p]);l.useEffect(()=>{R()},[R]);const W=a=>{const n=a.target.value,c=n.replace(/\D/g,"");if(vt(n)){const i=F(c);y(i),S(i)}else n===""?(y(""),S("")):(y(n),S(n))},S=a=>{j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{N(a),g(1)},400)},_=a=>{L(a.target.value),g(1)};return e.jsxs(e.Fragment,{children:[e.jsxs(K,{children:[e.jsxs(O,{children:[e.jsx(Q,{children:"Clientes"}),e.jsx(X,{children:s.total>0?`${s.total} cliente${s.total!==1?"s":""} cadastrado${s.total!==1?"s":""}`:"Nenhum cliente cadastrado ainda"})]}),o("admin","user")&&e.jsxs(Z,{type:"button",onClick:()=>t("/onboarding"),children:[e.jsx(H,{size:16}),"Novo Cliente"]})]}),e.jsxs(tt,{children:[e.jsxs(et,{children:[e.jsxs(ot,{children:[" ",e.jsx(G,{size:15})]}),e.jsx(at,{type:"text",placeholder:"Buscar por Razão Social ou CNPJ…",style:{paddingLeft:"30px"},value:T,onChange:W})]}),e.jsxs(rt,{value:p,onChange:_,children:[e.jsx("option",{value:"",children:"Todos os status"}),e.jsx("option",{value:"pending",children:"Pendente"}),e.jsx("option",{value:"analysis",children:"Em análise"}),e.jsx("option",{value:"approved",children:"Aprovado"})]})]}),e.jsxs(nt,{children:[e.jsxs(st,{children:[e.jsx(it,{children:e.jsxs("tr",{children:[e.jsx(h,{children:"Razão Social"}),e.jsx(h,{children:"CNPJ"}),e.jsx(h,{children:"Benefício"}),e.jsx(h,{children:"Status"}),e.jsx(h,{children:"Cadastro"})]})}),e.jsxs(lt,{children:[m&&e.jsx(wt,{}),!m&&k.map(a=>e.jsxs(ct,{onClick:()=>t(`/clientes/${a.id}`),title:"Ver detalhes",children:[e.jsx(v,{children:a.corporate_name}),e.jsx(w,{children:F(a.cnpj)??"—"}),e.jsx(w,{children:kt(a.benefit_type)}),e.jsx(v,{children:e.jsx(St,{status:a.overall_status})}),e.jsx(w,{children:Pt(a.createdAt)})]},a.id)),!m&&k.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsxs(gt,{children:[e.jsx(ht,{children:e.jsx(J,{size:40})}),e.jsx(ft,{children:"Nenhum cliente encontrado"}),e.jsx(ut,{children:T||p?"Tente ajustar os filtros para ver mais resultados.":'Clique em "Novo Cliente" para iniciar o cadastro.'})]})})})]})]}),!m&&s.totalPages>1&&e.jsxs($t,{children:[e.jsxs(yt,{children:["Página ",s.currentPage," de ",s.totalPages," ","· ",s.total," registros"]}),e.jsxs(bt,{children:[e.jsx($,{type:"button",onClick:()=>g(a=>Math.max(1,a-1)),disabled:d<=1,"aria-label":"Página anterior",children:e.jsx(q,{size:15})}),Array.from({length:s.totalPages},(a,n)=>n+1).filter(a=>a===1||a===s.totalPages||Math.abs(a-d)<=2).reduce((a,n,c,i)=>(c>0&&n-i[c-1]>1&&a.push("…"),a.push(n),a),[]).map((a,n)=>a==="…"?e.jsx($,{disabled:!0,as:"span",children:"…"},`ellipsis-${n}`):e.jsx($,{type:"button",$active:a===d,onClick:()=>g(a),children:a},a)),e.jsx($,{type:"button",onClick:()=>g(a=>Math.min(s.totalPages,a+1)),disabled:d>=s.totalPages,"aria-label":"Próxima página",children:e.jsx(V,{size:15})})]})]})]})]})}export{Rt as default};
