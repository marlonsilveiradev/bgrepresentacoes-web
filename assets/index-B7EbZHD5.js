import{a as r,b as k,u as R,r as i,j as e,B as E}from"./index-NYSnQAlU.js";import{u as O}from"./index.esm-Cr1JiQTZ.js";import{o as I,c as g,a as L,b as N}from"./index.esm-XIuVu1WX.js";import{S as M}from"./shield-check-ByTrdAF2.js";import{E as u,a as m}from"./eye-U_AK4ks2.js";const T=r.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:s})=>s.surface.page};
`,Y=r.div`
  width: 100%;
  max-width: 420px;
  padding: 32px;
  background: ${({theme:s})=>s.surface.card};
  border-radius: ${({theme:s})=>s.borderRadius.lg};
  box-shadow: ${({theme:s})=>s.shadows.lg};
`,B=r.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`,F=r.h1`
  font-size: 22px;
  text-align: center;
  margin-bottom: 8px;
`,Z=r.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 24px;
  color: ${({theme:s})=>s.text.secondary};
`,_=r.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,h=r.div`
  display: flex;
  flex-direction: column;
`,x=r.label`
  font-size: 13px;
  margin-bottom: 6px;
`,b=r.input`
  height: 40px;
  padding: 0 10px;
  border: 1px solid ${({theme:s})=>s.border.default};
  border-radius: ${({theme:s})=>s.borderRadius.sm};
`,f=r.span`
  font-size: 12px;
  color: red;
  margin-top: 4px;
`,D=r.button`
  height: 42px;
  background: ${({theme:s})=>s.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${({theme:s})=>s.borderRadius.sm};
  cursor: pointer;
`,V=g().required("Campo obrigatório.").min(8,"A senha deve ter pelo menos 8 caracteres.").matches(/[A-Z]/,"A senha deve conter pelo menos uma letra maiúscula.").matches(/[a-z]/,"A senha deve conter pelo menos uma letra minúscula.").matches(/[0-9]/,"A senha deve conter pelo menos um número.").matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,"A senha deve conter pelo menos um caractere especial."),W=L({currentPassword:g().required("Informe a senha atual."),newPassword:V,confirmPassword:g().required("Confirme a nova senha.").oneOf([N("newPassword")],"As senhas não coincidem.")}),q=[{label:"Mínimo 8 caracteres",test:s=>s.length>=8},{label:"Letra maiúscula (A–Z)",test:s=>/[A-Z]/.test(s)},{label:"Letra minúscula (a–z)",test:s=>/[a-z]/.test(s)},{label:"Número (0–9)",test:s=>/[0-9]/.test(s)},{label:"Caractere especial (!@#$...)",test:s=>/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(s)}];function Q({password:s}){return s?e.jsx("div",{style:{marginTop:"8px",display:"flex",flexDirection:"column",gap:"4px"},children:q.map(a=>{const n=a.test(s);return e.jsxs("span",{style:{fontSize:"12px",color:n?"#059669":"#b45309",display:"flex",alignItems:"center",gap:"6px"},children:[n?"✓":"○"," ",a.label]},a.label)})}):null}function X(){const{changePassword:s,user:a}=k(),n=R(),[w,j]=i.useState(!1),[l,y]=i.useState(!1),[c,v]=i.useState(!1),[d,P]=i.useState(!1),{register:p,handleSubmit:C,watch:S,formState:{errors:o}}=O({resolver:I(W)}),$=S("newPassword")??"",z=async t=>{j(!0);try{await s(t.currentPassword,t.newPassword,t.confirmPassword),n("/dashboard",{replace:!0})}catch(A){E.error(A.message)}finally{j(!1)}};return e.jsx(T,{children:e.jsxs(Y,{children:[e.jsx(B,{children:e.jsx(M,{size:28})}),e.jsx(F,{children:"Alterar senha"}),e.jsxs(Z,{children:[a!=null&&a.name?`Olá, ${a.name.split(" ")[0]}. `:"","Você precisa definir uma nova senha para continuar."]}),e.jsxs(_,{onSubmit:C(z),children:[e.jsxs(h,{children:[e.jsx(x,{children:"Senha atual"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(b,{type:l?"text":"password",autoComplete:"current-password",...p("currentPassword"),style:{paddingRight:"40px"}}),e.jsx("button",{type:"button",onClick:()=>y(t=>!t),"aria-label":l?"Ocultar senha":"Mostrar senha",style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9ca3af",padding:0},children:l?e.jsx(u,{size:16}):e.jsx(m,{size:16})})]}),o.currentPassword&&e.jsx(f,{children:o.currentPassword.message})]}),e.jsxs(h,{children:[e.jsx(x,{children:"Nova senha"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(b,{type:c?"text":"password",autoComplete:"new-password",...p("newPassword"),style:{paddingRight:"40px"}}),e.jsx("button",{type:"button",onClick:()=>v(t=>!t),"aria-label":c?"Ocultar senha":"Mostrar senha",style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9ca3af",padding:0},children:c?e.jsx(u,{size:16}):e.jsx(m,{size:16})})]}),o.newPassword&&e.jsx(f,{children:o.newPassword.message}),e.jsx(Q,{password:$})]}),e.jsxs(h,{children:[e.jsx(x,{children:"Confirmar nova senha"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(b,{type:d?"text":"password",autoComplete:"new-password",...p("confirmPassword"),style:{paddingRight:"40px"}}),e.jsx("button",{type:"button",onClick:()=>P(t=>!t),"aria-label":d?"Ocultar senha":"Mostrar senha",style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9ca3af",padding:0},children:d?e.jsx(u,{size:16}):e.jsx(m,{size:16})})]}),o.confirmPassword&&e.jsx(f,{children:o.confirmPassword.message})]}),e.jsx(D,{type:"submit",disabled:w,children:w?"Salvando...":"Alterar senha"})]})]})})}export{X as default};
