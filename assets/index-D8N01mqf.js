import{c as Fe,a as o,p as he,h as Ce,u as Ee,e as Pe,r as y,d as A,B as U,g as re,j as r}from"./index-BIkF9nUC.js";import{u as Be}from"./index.esm-DbWmM1XM.js";import{o as Re,a as Ne,c as m}from"./index.esm-B4Q6Jri4.js";import{A as Te,B as Ae,M as Oe,L as Ie,F as Me}from"./map-pin-Fzd7ceSd.js";import{C as h,X as qe}from"./x-DBZvM3s1.js";import{S as Le,F as oe,T as De,U as We}from"./upload-CdEfTcuP.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=Fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Ge=he`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,Ue=he`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,xe=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px; /* espaço para o footer fixo */
  animation: ${Ge} 0.3s ease both;
`,ue=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,Ve=o.button`
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
`,fe=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Je=o.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,He=o.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,C=o.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,I=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,M=o.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,q=o.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,P=o.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,ae=o.div`
  grid-column: 1 / -1;
`,d=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,l=o.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,L=o.span`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.neutral[400]};
  flex-shrink: 0;
`,J=({theme:e,$hasError:a})=>`
  width: 100%;
  background-color: ${e.surface.card};
  border: 1.5px solid ${a?e.colors.error.base:e.colors.neutral[200]};
  border-radius: ${e.borderRadius.md};
  font-family: ${e.typography.fontFamily.sans};
  font-size: ${e.typography.fontSize.base};
  color: ${e.text.primary};
  outline: none;
  transition:
    border-color ${e.transitions.fast},
    box-shadow ${e.transitions.fast};
  box-sizing: border-box;

  &::placeholder {
    color: ${e.colors.neutral[300]};
  }

  &:focus {
    border-color: ${a?e.colors.error.base:e.colors.primary[500]};
    box-shadow: 0 0 0 3px ${a?e.colors.error.base+"20":e.colors.primary[600]+"18"};
  }

  &:disabled {
    background-color: ${e.colors.neutral[50]};
    color: ${e.text.muted};
    cursor: not-allowed;
    opacity: 0.75;
  }
`,f=o.input`
  ${({theme:e,$hasError:a})=>J({theme:e,$hasError:a})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,D=o.select`
  ${({theme:e,$hasError:a})=>J({theme:e,$hasError:a})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,Ye=o.textarea`
  ${({theme:e,$hasError:a})=>J({theme:e,$hasError:a})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,W=o.div`
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1.5px solid ${({theme:e})=>e.colors.neutral[200]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.muted};
  user-select: none;
  cursor: not-allowed;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,G=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[400]};
  font-style: italic;
`,x=o.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,E=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,Ke=o.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,Qe=o.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,Ze=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Xe=o.div`
  border: 1.5px dashed ${({theme:e,$hasFile:a})=>a?e.colors.primary[400]:e.border.strong};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e,$hasFile:a})=>a?e.colors.primary[50]:e.colors.neutral[50]};
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
`,er=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,rr=o.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
  cursor: pointer;
  text-align: center;
  min-height: 96px;
`,or=o.div`
  color: ${({theme:e,$hasFile:a})=>a?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,ar=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,nr=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,ne=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,te=o.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,se=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ie=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,tr=o.button`
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
`,sr=o.div`
  position: fixed;
  bottom: 0;
  left: 240px; /* largura da sidebar */
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
`,ir=o.button`
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
`,dr=o.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({$isSubmitting:e,theme:a})=>e?a.colors.primary[700]:`linear-gradient(135deg, ${a.colors.primary[600]}, ${a.colors.primary[500]})`};
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
`,lr=o.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,j=o.div`
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
  animation: ${Ue} 1.4s ease infinite;
`,de=o(C)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,le=o.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`;o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`;o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`;o.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`;o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`;o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`;o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`;o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;o.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`;o.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;o.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;o.button`
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
`;o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`;o.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`;o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  /* Span full width dentro do grid (ex: campo "notes") */
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`;o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`;const cr=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};

  /* Valor vazio */
  &:empty::after,
  &[data-empty]::after {
    content: '—';
    color: ${({theme:e})=>e.text.muted};
  }
`;o(cr)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;const ce={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}};o.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var a;return((a=ce[e])==null?void 0:a.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var a;return((a=ce[e])==null?void 0:a.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`;const pr=Ne({trade_name:m().nullable().transform(e=>e||null).max(200,"Nome fantasia deve ter no máximo 200 caracteres."),phone:m().nullable().transform(e=>e||null).max(20,"Telefone deve ter no máximo 20 caracteres."),benefit_type:m().required("O tipo de benefício é obrigatório.").oneOf(["food","meal","both"],"Selecione um tipo de benefício válido."),notes:m().nullable().transform(e=>e||null),partner_id:m().nullable().transform(e=>e||null),address_street:m().nullable().transform(e=>e||null).max(255,"Logradouro deve ter no máximo 255 caracteres."),address_number:m().nullable().transform(e=>e||null).max(10,"Número deve ter no máximo 10 caracteres."),address_complement:m().nullable().transform(e=>e||null).max(100,"Complemento deve ter no máximo 100 caracteres."),address_neighborhood:m().nullable().transform(e=>e||null).max(100,"Bairro deve ter no máximo 100 caracteres."),address_city:m().nullable().transform(e=>e||null).max(100,"Cidade deve ter no máximo 100 caracteres."),address_state:m().nullable().transform(e=>e||null).max(2,"UF deve ter 2 caracteres."),address_zip:m().nullable().transform(e=>e||null).test("cep-valido","CEP inválido. Use o formato 00000-000.",e=>e?e.replace(/\D/g,"").length===8:!0),bank_bank_name:m().nullable().transform(e=>e||null).max(100,"Nome do banco deve ter no máximo 100 caracteres."),bank_agency:m().max(10,"Agência deve ter no máximo 10 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Agência é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(a=>a||null)}),bank_agency_digit:m().nullable().transform(e=>e||null).max(2,"Dígito da agência deve ter no máximo 2 caracteres."),bank_account:m().max(20,"Conta deve ter no máximo 20 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Conta é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(a=>a||null)}),bank_account_digit:m().nullable().transform(e=>e||null).max(2,"Dígito da conta deve ter no máximo 2 caracteres."),bank_account_type:m().when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Tipo de conta é obrigatório.").oneOf(["checking","savings"],"Tipo de conta inválido."),otherwise:e=>e.nullable().transform(a=>a||null)})}),mr=[{key:"contrato",fieldName:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB."},{key:"proof_of_address",fieldName:"documentos",type:"proof_of_address",label:"Comprovante de Endereço",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:0},{key:"bank_account_proof",fieldName:"documentos",type:"bank_account_proof",label:"Comprovante Bancário",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:1},{key:"card_machine_proof",fieldName:"documentos",type:"card_machine_proof",label:"Comprovante de Maquininha",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:2}],gr=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],hr=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],xr=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"];let V=null;const pe=(e="")=>{const a=e.replace(/\D/g,"").slice(0,11);return a.length<=2?`(${a}`:a.length<=6?`(${a.slice(0,2)}) ${a.slice(2)}`:a.length<=10?`(${a.slice(0,2)}) ${a.slice(2,6)}-${a.slice(6)}`:`(${a.slice(0,2)}) ${a.slice(2,7)}-${a.slice(7)}`},me=(e="")=>{const a=e.replace(/\D/g,"").slice(0,8);return a.length<=5?a:`${a.slice(0,5)}-${a.slice(5)}`},ur=(e="")=>e.replace(/\D/g,""),ge=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function fr(){const e=a=>Array.from({length:a}).map((b,w)=>r.jsxs(d,{children:[r.jsx(j,{$w:"45%",$h:"11px"}),r.jsx(j,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},w));return r.jsxs(xe,{children:[r.jsxs(ue,{children:[r.jsx(j,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),r.jsxs(fe,{children:[r.jsx(j,{$w:"200px",$h:"28px"}),r.jsx(j,{$w:"140px",$h:"14px",style:{marginTop:"4px"}})]})]}),r.jsxs(de,{children:[r.jsx(j,{$w:"35%",$h:"20px"}),r.jsx(le,{}),r.jsx(P,{children:e(6)})]}),r.jsxs(de,{children:[r.jsx(j,{$w:"30%",$h:"20px"}),r.jsx(le,{}),r.jsx(P,{children:e(4)})]})]})}function yr({slot:e,existingDoc:a,selectedFile:b,onFileSelect:w,onClearFile:B,disabled:i}){const R=y.useRef(null),k=!!b,N=!!a;return r.jsxs(Xe,{$hasFile:k,children:[r.jsx(er,{children:e.label}),k?r.jsxs(ne,{children:[r.jsx(oe,{size:16,style:{color:"#B45A14",flexShrink:0}}),r.jsxs(te,{children:[r.jsx(se,{children:b.name}),r.jsxs(ie,{children:[ge(b.size)," · Novo arquivo"]})]}),r.jsx(tr,{type:"button",onClick:()=>B(e.key),disabled:i,title:"Remover seleção",children:r.jsx(De,{size:13})})]}):N?r.jsxs(ne,{children:[r.jsx(oe,{size:16,style:{color:"#7a6455",flexShrink:0}}),r.jsxs(te,{children:[r.jsx(se,{children:a.original_name??"Documento existente"}),r.jsxs(ie,{children:[a.file_size?ge(a.file_size)+" · ":"","Substituir clicando abaixo"]})]})]}):null,r.jsxs(rr,{htmlFor:`doc-input-${e.key}`,children:[r.jsx(or,{$hasFile:k,children:r.jsx(We,{size:22})}),r.jsx(ar,{children:k?"Trocar arquivo":N?"Substituir documento":"Selecionar arquivo"}),r.jsx(nr,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),r.jsx("input",{ref:R,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:i,onChange:$=>{var z;const v=(z=$.target.files)==null?void 0:z[0];if(v){if(v.size>3*1024*1024){U.error("Arquivo muito grande. O limite é 3 MB.");return}w(e.key,v),$.target.value=""}}}),r.jsx(E,{children:e.hint})]})}function wr(){const{id:e}=Ce(),a=Ee(),b=Pe(),[w,B]=y.useState(!0),[i,R]=y.useState(!1),[k,N]=y.useState(""),[$,v]=y.useState([]),[z,H]=y.useState(!1),[ye,be]=y.useState({}),[_,Y]=y.useState({}),[T,$e]=y.useState({corporate_name:"",cnpj:"",email:"",state_registration:""}),{register:c,handleSubmit:_e,reset:K,setValue:Q,watch:je,formState:{errors:ke,isDirty:ve}}=Be({resolver:Re(pr),defaultValues:{trade_name:"",phone:"",benefit_type:"food",notes:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",partner_id:"",bank_bank_name:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}}),S=!!je("bank_bank_name"),Z=y.useCallback(async()=>{var n,u;B(!0);try{const{data:g}=await A.get(`/clients/${e}`),s=g.data;N(s.trade_name||s.corporate_name||""),$e({corporate_name:s.corporate_name??"",cnpj:s.cnpj??"",email:s.email??"",state_registration:s.state_registration??""});const F={};(s.documents??[]).forEach(ee=>{F[ee.document_type]=ee}),be(F);const p=(n=s.bankAccounts)==null?void 0:n[0];K({trade_name:s.trade_name??"",phone:pe(s.phone??""),benefit_type:s.benefit_type??"food",notes:s.notes??"",address_street:s.address_street??"",address_number:s.address_number??"",address_complement:s.address_complement??"",address_neighborhood:s.address_neighborhood??"",address_city:s.address_city??"",address_state:s.address_state??"",address_zip:me(s.address_zip??""),partner_id:((u=s.partner)==null?void 0:u.id)??s.partner_id??"",bank_bank_name:(p==null?void 0:p.bank_name)??"",bank_agency:(p==null?void 0:p.agency)??"",bank_agency_digit:(p==null?void 0:p.agency_digit)??"",bank_account:(p==null?void 0:p.account)??"",bank_account_digit:(p==null?void 0:p.account_digit)??"",bank_account_type:(p==null?void 0:p.account_type)??"checking"})}catch(g){U.error(re(g,"Erro ao carregar dados do cliente.")),a(`/clientes/${e}`,{replace:!0})}finally{B(!1)}},[e,a,K]);useEffect(()=>{Z()},[Z]),useEffect(()=>{(async()=>{if(V){v(V);return}H(!0);try{const{data:u}=await A.get("/users?role=partner&limit=100"),g=u.data??[];V=g,v(g)}catch{}finally{H(!1)}})()},[]);const ze=(n,u)=>{Y(g=>({...g,[n]:u}))},we=n=>{Y(u=>{const g={...u};return delete g[n],g})},Se=async n=>{R(!0);try{const u=Object.keys(_).length>0,g={trade_name:n.trade_name||void 0,phone:ur(n.phone)||void 0,benefit_type:n.benefit_type,notes:n.notes||void 0,address_street:n.address_street||void 0,address_number:n.address_number||void 0,address_complement:n.address_complement||void 0,address_neighborhood:n.address_neighborhood||void 0,address_city:n.address_city||void 0,address_state:n.address_state||void 0,address_zip:n.address_zip||void 0,partner_id:n.partner_id||null,...S?{bankAccount:{bank_name:n.bank_bank_name,agency:n.bank_agency,agency_digit:n.bank_agency_digit||void 0,account:n.bank_account,account_digit:n.bank_account_digit||void 0,account_type:n.bank_account_type}}:{}};if(Object.keys(g).forEach(s=>g[s]===void 0&&delete g[s]),u){const s=new FormData;s.append("data",JSON.stringify(g)),_.contrato&&s.append("contrato",_.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(F=>{_[F]&&s.append("documentos",_[F])}),await A.patch(`/clients/${e}`,s,{headers:{"Content-Type":"multipart/form-data"}})}else await A.patch(`/clients/${e}`,g);U.success("Cliente atualizado com sucesso!",{toastId:"client-updated"}),b.invalidateQueries({queryKey:["clients"]}),b.invalidateQueries({queryKey:["dashboard-recent-clients"]}),b.invalidateQueries({queryKey:["client",e]}),a(`/clientes/${e}`,{replace:!0})}catch(u){U.error(re(u,"Erro ao salvar alterações."))}finally{R(!1)}};if(w)return r.jsx(fr,{});const X=ve||Object.keys(_).length>0,t=n=>{var u;return(u=ke[n])==null?void 0:u.message};return r.jsxs(r.Fragment,{children:[r.jsxs(xe,{children:[r.jsxs(ue,{children:[r.jsxs(Ve,{type:"button",onClick:()=>a(`/clientes/${e}`),children:[r.jsx(Te,{size:15})," Voltar"]}),r.jsxs(fe,{children:[r.jsx(Je,{children:"Editar Cliente"}),r.jsx(He,{children:k})]})]}),r.jsxs("form",{id:"edit-client-form",onSubmit:_e(Se),noValidate:!0,children:[r.jsxs(C,{style:{marginBottom:"24px"},children:[r.jsxs(I,{children:[r.jsx(M,{children:r.jsx(Ae,{size:18})}),r.jsx(q,{children:"Dados da Empresa"})]}),r.jsxs(P,{children:[r.jsxs(d,{children:[r.jsxs(l,{children:[r.jsx(L,{children:r.jsx(O,{size:11})}),"Razão Social"]}),r.jsx(W,{children:T.corporate_name||"—"}),r.jsx(G,{children:"Campo único, não pode ser editado."})]}),r.jsxs(d,{children:[r.jsxs(l,{children:[r.jsx(L,{children:r.jsx(O,{size:11})}),"CNPJ"]}),r.jsx(W,{children:T.cnpj||"—"}),r.jsx(G,{children:"Campo único, não pode ser editado."})]}),r.jsxs(d,{children:[r.jsx(l,{htmlFor:"trade_name",children:"Nome Fantasia"}),r.jsx(f,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",$hasError:!!t("trade_name"),disabled:i,...c("trade_name")}),t("trade_name")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("trade_name")]})]}),r.jsxs(d,{children:[r.jsxs(l,{children:[r.jsx(L,{children:r.jsx(O,{size:11})}),"Inscrição Estadual"]}),r.jsx(W,{children:T.state_registration||"—"}),r.jsx(G,{children:"Campo único, não pode ser editado."})]}),r.jsxs(d,{children:[r.jsx(l,{htmlFor:"phone",children:"Telefone"}),r.jsx(f,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",$hasError:!!t("phone"),disabled:i,...c("phone",{onChange:n=>Q("phone",pe(n.target.value))})}),t("phone")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("phone")]})]}),r.jsxs(d,{children:[r.jsxs(l,{children:[r.jsx(L,{children:r.jsx(O,{size:11})}),"E-mail"]}),r.jsx(W,{children:T.email||"—"}),r.jsx(G,{children:"Campo único, não pode ser editado."})]}),r.jsxs(d,{children:[r.jsx(l,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),r.jsx(D,{id:"benefit_type",$hasError:!!t("benefit_type"),disabled:i,...c("benefit_type"),children:gr.map(n=>r.jsx("option",{value:n.value,children:n.label},n.value))}),t("benefit_type")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("benefit_type")]})]}),r.jsxs(d,{children:[r.jsx(l,{htmlFor:"partner_id",children:"Parceiro Vinculado"}),r.jsxs(D,{id:"partner_id",disabled:i||z,...c("partner_id"),children:[r.jsx("option",{value:"",children:z?"Carregando parceiros…":"Sem parceiro vinculado"}),$.map(n=>r.jsx("option",{value:n.id,children:n.name},n.id))]}),r.jsx(E,{children:z?"Buscando parceiros…":`${$.length} parceiro${$.length!==1?"s":""} disponível${$.length!==1?"is":""}`})]}),r.jsx(ae,{children:r.jsxs(d,{children:[r.jsx(l,{htmlFor:"notes",children:"Observações"}),r.jsx(Ye,{id:"notes",placeholder:"Observações internas…",disabled:i,...c("notes")}),r.jsx(E,{children:"Visível apenas para a equipe interna."})]})})]})]}),r.jsxs(C,{style:{marginBottom:"24px"},children:[r.jsxs(I,{children:[r.jsx(M,{children:r.jsx(Oe,{size:18})}),r.jsx(q,{children:"Endereço"})]}),r.jsxs(P,{children:[r.jsx(ae,{children:r.jsxs(d,{children:[r.jsx(l,{htmlFor:"address_street",children:"Logradouro"}),r.jsx(f,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",$hasError:!!t("address_street"),disabled:i,...c("address_street")}),t("address_street")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("address_street")]})]})}),r.jsxs(d,{children:[r.jsx(l,{htmlFor:"address_number",children:"Número"}),r.jsx(f,{id:"address_number",type:"text",placeholder:"Nº",$hasError:!!t("address_number"),disabled:i,...c("address_number")}),t("address_number")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("address_number")]})]}),r.jsxs(d,{children:[r.jsx(l,{htmlFor:"address_complement",children:"Complemento"}),r.jsx(f,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",$hasError:!!t("address_complement"),disabled:i,...c("address_complement")}),t("address_complement")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("address_complement")]})]}),r.jsxs(d,{children:[r.jsx(l,{htmlFor:"address_neighborhood",children:"Bairro"}),r.jsx(f,{id:"address_neighborhood",type:"text",placeholder:"Bairro",$hasError:!!t("address_neighborhood"),disabled:i,...c("address_neighborhood")}),t("address_neighborhood")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("address_neighborhood")]})]}),r.jsxs(d,{children:[r.jsx(l,{htmlFor:"address_city",children:"Cidade"}),r.jsx(f,{id:"address_city",type:"text",placeholder:"Cidade",$hasError:!!t("address_city"),disabled:i,...c("address_city")}),t("address_city")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("address_city")]})]}),r.jsxs(d,{children:[r.jsx(l,{htmlFor:"address_state",children:"UF"}),r.jsxs(D,{id:"address_state",$hasError:!!t("address_state"),disabled:i,...c("address_state"),children:[r.jsx("option",{value:"",children:"Selecione"}),xr.map(n=>r.jsx("option",{value:n,children:n},n))]}),t("address_state")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("address_state")]})]}),r.jsxs(d,{children:[r.jsx(l,{htmlFor:"address_zip",children:"CEP"}),r.jsx(f,{id:"address_zip",type:"text",placeholder:"00000-000",$hasError:!!t("address_zip"),disabled:i,...c("address_zip",{onChange:n=>Q("address_zip",me(n.target.value))})}),t("address_zip")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("address_zip")]})]})]})]}),r.jsxs(C,{style:{marginBottom:"24px"},children:[r.jsxs(I,{children:[r.jsx(M,{children:r.jsx(Ie,{size:18})}),r.jsx(q,{children:"Conta Bancária"})]}),r.jsxs(Ke,{children:[r.jsx(Qe,{children:"Dados Bancários Principais"}),S&&r.jsx(E,{style:{marginBottom:"12px",display:"block"},children:"Agência e conta são obrigatórios quando o banco é informado."}),r.jsxs(P,{children:[r.jsxs(d,{children:[r.jsx(l,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),r.jsx(f,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",$hasError:!!t("bank_bank_name"),disabled:i,...c("bank_bank_name")}),t("bank_bank_name")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("bank_bank_name")]})]}),r.jsxs(d,{children:[r.jsxs(l,{htmlFor:"bank_agency",children:["Agência ",S&&r.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),r.jsx(f,{id:"bank_agency",type:"text",placeholder:"0000",$hasError:!!t("bank_agency"),disabled:i,...c("bank_agency")}),t("bank_agency")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("bank_agency")]})]}),r.jsxs(d,{children:[r.jsx(l,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),r.jsx(f,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,$hasError:!!t("bank_agency_digit"),disabled:i,...c("bank_agency_digit")}),t("bank_agency_digit")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("bank_agency_digit")]})]}),r.jsxs(d,{children:[r.jsxs(l,{htmlFor:"bank_account",children:["Conta ",S&&r.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),r.jsx(f,{id:"bank_account",type:"text",placeholder:"000000",$hasError:!!t("bank_account"),disabled:i,...c("bank_account")}),t("bank_account")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("bank_account")]})]}),r.jsxs(d,{children:[r.jsx(l,{htmlFor:"bank_account_digit",children:"Dígito Conta"}),r.jsx(f,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,$hasError:!!t("bank_account_digit"),disabled:i,...c("bank_account_digit")}),t("bank_account_digit")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("bank_account_digit")]})]}),r.jsxs(d,{children:[r.jsxs(l,{htmlFor:"bank_account_type",children:["Tipo de Conta ",S&&r.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),r.jsx(D,{id:"bank_account_type",$hasError:!!t("bank_account_type"),disabled:i,...c("bank_account_type"),children:hr.map(n=>r.jsx("option",{value:n.value,children:n.label},n.value))}),t("bank_account_type")&&r.jsxs(x,{children:[r.jsx(h,{size:11}),t("bank_account_type")]})]})]})]})]}),r.jsxs(C,{style:{marginBottom:"24px"},children:[r.jsxs(I,{children:[r.jsx(M,{children:r.jsx(Me,{size:18})}),r.jsx(q,{children:"Documentos"})]}),r.jsxs(E,{style:{marginBottom:"16px",display:"block"},children:["Selecione um novo arquivo para ",r.jsx("strong",{children:"substituir"})," o documento existente. O arquivo antigo é removido automaticamente do Cloudinary."]}),r.jsx(Ze,{children:mr.map(n=>r.jsx(yr,{slot:n,existingDoc:ye[n.type],selectedFile:_[n.key],onFileSelect:ze,onClearFile:we,disabled:i},n.key))})]})]})]}),r.jsxs(sr,{children:[r.jsxs(ir,{type:"button",disabled:i,onClick:()=>a(`/clientes/${e}`),children:[r.jsx(qe,{size:15})," Cancelar"]}),r.jsx(dr,{type:"submit",form:"edit-client-form",disabled:i||!X,$isSubmitting:i,title:X?void 0:"Nenhuma alteração detectada",children:i?r.jsxs(r.Fragment,{children:[r.jsx(lr,{}),"Salvando…"]}):r.jsxs(r.Fragment,{children:[r.jsx(Le,{size:15}),"Salvar Alterações"]})})]})]})}export{wr as default};
