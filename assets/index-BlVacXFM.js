import{c as Se,a as r,p as ge,f as Fe,u as Ce,r as y,d as T,B as G,g as ee,j as o}from"./index-DA1kVu7H.js";import{u as Ee}from"./index.esm-2Y7AU5Rf.js";import{o as Pe,a as Be,c as m}from"./index.esm-CTARbawQ.js";import{A as Re,B as Ne,M as Te,L as Ae,F as Oe}from"./map-pin-gDTZREaV.js";import{C as h,X as Ie}from"./x-D9epE0Bh.js";import{S as Me,F as oe,T as Le,U as De}from"./upload-Cp_ogxiG.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=Se("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),We=ge`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,qe=ge`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,he=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px; /* espaço para o footer fixo */
  animation: ${We} 0.3s ease both;
`,xe=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,Ge=r.button`
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
`,ue=r.div`
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
`,Ve=r.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,P=r.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,O=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,I=r.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,M=r.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,R=r.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,re=r.div`
  grid-column: 1 / -1;
`,d=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,l=r.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,L=r.span`
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
`,f=r.input`
  ${({theme:e,$hasError:a})=>J({theme:e,$hasError:a})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`,D=r.select`
  ${({theme:e,$hasError:a})=>J({theme:e,$hasError:a})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`,Je=r.textarea`
  ${({theme:e,$hasError:a})=>J({theme:e,$hasError:a})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,W=r.div`
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
`,q=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[400]};
  font-style: italic;
`,x=r.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`,B=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,He=r.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,Ye=r.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`,Ze=r.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Xe=r.div`
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
`,Ke=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,Qe=r.label`
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
`,eo=r.div`
  color: ${({theme:e,$hasFile:a})=>a?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,oo=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,ro=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,ae=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,ne=r.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,te=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,se=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,ao=r.button`
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
`,no=r.div`
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
`,to=r.button`
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
`,so=r.button`
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
`,io=r.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`,j=r.div`
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
  animation: ${qe} 1.4s ease infinite;
`,ie=r(P)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,de=r.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`;r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`;r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`;r.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`;r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`;r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`;r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`;r.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;r.span`
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
`;r.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`;r.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;r.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;r.button`
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
`;r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`;r.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`;r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  /* Span full width dentro do grid (ex: campo "notes") */
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`;r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`;const lo=r.span`
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
`;r(lo)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;const le={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}};r.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var a;return((a=le[e])==null?void 0:a.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var a;return((a=le[e])==null?void 0:a.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`;const co=Be({trade_name:m().nullable().transform(e=>e||null).max(200,"Nome fantasia deve ter no máximo 200 caracteres."),phone:m().nullable().transform(e=>e||null).max(20,"Telefone deve ter no máximo 20 caracteres."),benefit_type:m().required("O tipo de benefício é obrigatório.").oneOf(["food","meal","both"],"Selecione um tipo de benefício válido."),notes:m().nullable().transform(e=>e||null),partner_id:m().nullable().transform(e=>e||null),address_street:m().nullable().transform(e=>e||null).max(255,"Logradouro deve ter no máximo 255 caracteres."),address_number:m().nullable().transform(e=>e||null).max(10,"Número deve ter no máximo 10 caracteres."),address_complement:m().nullable().transform(e=>e||null).max(100,"Complemento deve ter no máximo 100 caracteres."),address_neighborhood:m().nullable().transform(e=>e||null).max(100,"Bairro deve ter no máximo 100 caracteres."),address_city:m().nullable().transform(e=>e||null).max(100,"Cidade deve ter no máximo 100 caracteres."),address_state:m().nullable().transform(e=>e||null).max(2,"UF deve ter 2 caracteres."),address_zip:m().nullable().transform(e=>e||null).test("cep-valido","CEP inválido. Use o formato 00000-000.",e=>e?e.replace(/\D/g,"").length===8:!0),bank_bank_name:m().nullable().transform(e=>e||null).max(100,"Nome do banco deve ter no máximo 100 caracteres."),bank_agency:m().max(10,"Agência deve ter no máximo 10 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Agência é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(a=>a||null)}),bank_agency_digit:m().nullable().transform(e=>e||null).max(2,"Dígito da agência deve ter no máximo 2 caracteres."),bank_account:m().max(20,"Conta deve ter no máximo 20 caracteres.").when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Conta é obrigatória quando o banco é informado."),otherwise:e=>e.nullable().transform(a=>a||null)}),bank_account_digit:m().nullable().transform(e=>e||null).max(2,"Dígito da conta deve ter no máximo 2 caracteres."),bank_account_type:m().when("bank_bank_name",{is:e=>!!e,then:e=>e.required("Tipo de conta é obrigatório.").oneOf(["checking","savings"],"Tipo de conta inválido."),otherwise:e=>e.nullable().transform(a=>a||null)})}),po=[{key:"contrato",fieldName:"contrato",type:"company_document",label:"Contrato / Doc. da Empresa",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB."},{key:"proof_of_address",fieldName:"documentos",type:"proof_of_address",label:"Comprovante de Endereço",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:0},{key:"bank_account_proof",fieldName:"documentos",type:"bank_account_proof",label:"Comprovante Bancário",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:1},{key:"card_machine_proof",fieldName:"documentos",type:"card_machine_proof",label:"Comprovante de Maquininha",hint:"Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.",docIndex:2}],mo=[{value:"food",label:"Vale Alimentação"},{value:"meal",label:"Vale Refeição"},{value:"both",label:"Alimentação + Refeição"}],go=[{value:"checking",label:"Conta Corrente"},{value:"savings",label:"Conta Poupança"}],ho=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"];let V=null;const ce=(e="")=>{const a=e.replace(/\D/g,"").slice(0,11);return a.length<=2?`(${a}`:a.length<=6?`(${a.slice(0,2)}) ${a.slice(2)}`:a.length<=10?`(${a.slice(0,2)}) ${a.slice(2,6)}-${a.slice(6)}`:`(${a.slice(0,2)}) ${a.slice(2,7)}-${a.slice(7)}`},pe=(e="")=>{const a=e.replace(/\D/g,"").slice(0,8);return a.length<=5?a:`${a.slice(0,5)}-${a.slice(5)}`},xo=(e="")=>e.replace(/\D/g,""),me=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"";function uo(){const e=a=>Array.from({length:a}).map((k,v)=>o.jsxs(d,{children:[o.jsx(j,{$w:"45%",$h:"11px"}),o.jsx(j,{$h:"44px",style:{borderRadius:"8px",marginTop:"2px"}})]},v));return o.jsxs(he,{children:[o.jsxs(xe,{children:[o.jsx(j,{$w:"80px",$h:"36px",style:{borderRadius:"6px"}}),o.jsxs(ue,{children:[o.jsx(j,{$w:"200px",$h:"28px"}),o.jsx(j,{$w:"140px",$h:"14px",style:{marginTop:"4px"}})]})]}),o.jsxs(ie,{children:[o.jsx(j,{$w:"35%",$h:"20px"}),o.jsx(de,{}),o.jsx(R,{children:e(6)})]}),o.jsxs(ie,{children:[o.jsx(j,{$w:"30%",$h:"20px"}),o.jsx(de,{}),o.jsx(R,{children:e(4)})]})]})}function fo({slot:e,existingDoc:a,selectedFile:k,onFileSelect:v,onClearFile:i,disabled:w}){const U=y.useRef(null),z=!!k,b=!!a;return o.jsxs(Xe,{$hasFile:z,children:[o.jsx(Ke,{children:e.label}),z?o.jsxs(ae,{children:[o.jsx(oe,{size:16,style:{color:"#B45A14",flexShrink:0}}),o.jsxs(ne,{children:[o.jsx(te,{children:k.name}),o.jsxs(se,{children:[me(k.size)," · Novo arquivo"]})]}),o.jsx(ao,{type:"button",onClick:()=>i(e.key),disabled:w,title:"Remover seleção",children:o.jsx(Le,{size:13})})]}):b?o.jsxs(ae,{children:[o.jsx(oe,{size:16,style:{color:"#7a6455",flexShrink:0}}),o.jsxs(ne,{children:[o.jsx(te,{children:a.original_name??"Documento existente"}),o.jsxs(se,{children:[a.file_size?me(a.file_size)+" · ":"","Substituir clicando abaixo"]})]})]}):null,o.jsxs(Qe,{htmlFor:`doc-input-${e.key}`,children:[o.jsx(eo,{$hasFile:z,children:o.jsx(De,{size:22})}),o.jsx(oo,{children:z?"Trocar arquivo":b?"Substituir documento":"Selecionar arquivo"}),o.jsx(ro,{children:"PDF, JPG ou PNG · máx. 3 MB"})]}),o.jsx("input",{ref:U,id:`doc-input-${e.key}`,type:"file",accept:"application/pdf,image/jpeg,image/png",style:{display:"none"},disabled:w,onChange:S=>{var F;const $=(F=S.target.files)==null?void 0:F[0];if($){if($.size>3*1024*1024){G.error("Arquivo muito grande. O limite é 3 MB.");return}v(e.key,$),S.target.value=""}}}),o.jsx(B,{children:e.hint})]})}function zo(){const{id:e}=Fe(),a=Ce(),[k,v]=y.useState(!0),[i,w]=y.useState(!1),[U,z]=y.useState(""),[b,S]=y.useState([]),[$,F]=y.useState(!1),[fe,ye]=y.useState({}),[_,H]=y.useState({}),[N,be]=y.useState({corporate_name:"",cnpj:"",email:"",state_registration:""}),{register:c,handleSubmit:$e,reset:Y,setValue:Z,watch:_e,formState:{errors:je,isDirty:ke}}=Ee({resolver:Pe(co),defaultValues:{trade_name:"",phone:"",benefit_type:"food",notes:"",address_street:"",address_number:"",address_complement:"",address_neighborhood:"",address_city:"",address_state:"",address_zip:"",partner_id:"",bank_bank_name:"",bank_agency:"",bank_agency_digit:"",bank_account:"",bank_account_digit:"",bank_account_type:"checking"}}),C=!!_e("bank_bank_name"),X=y.useCallback(async()=>{var n,u;v(!0);try{const{data:g}=await T.get(`/clients/${e}`),s=g.data;z(s.trade_name||s.corporate_name||""),be({corporate_name:s.corporate_name??"",cnpj:s.cnpj??"",email:s.email??"",state_registration:s.state_registration??""});const E={};(s.documents??[]).forEach(Q=>{E[Q.document_type]=Q}),ye(E);const p=(n=s.bankAccounts)==null?void 0:n[0];Y({trade_name:s.trade_name??"",phone:ce(s.phone??""),benefit_type:s.benefit_type??"food",notes:s.notes??"",address_street:s.address_street??"",address_number:s.address_number??"",address_complement:s.address_complement??"",address_neighborhood:s.address_neighborhood??"",address_city:s.address_city??"",address_state:s.address_state??"",address_zip:pe(s.address_zip??""),partner_id:((u=s.partner)==null?void 0:u.id)??s.partner_id??"",bank_bank_name:(p==null?void 0:p.bank_name)??"",bank_agency:(p==null?void 0:p.agency)??"",bank_agency_digit:(p==null?void 0:p.agency_digit)??"",bank_account:(p==null?void 0:p.account)??"",bank_account_digit:(p==null?void 0:p.account_digit)??"",bank_account_type:(p==null?void 0:p.account_type)??"checking"})}catch(g){G.error(ee(g,"Erro ao carregar dados do cliente.")),a(`/clientes/${e}`,{replace:!0})}finally{v(!1)}},[e,a,Y]);y.useEffect(()=>{X()},[X]),y.useEffect(()=>{(async()=>{if(V){S(V);return}F(!0);try{const{data:u}=await T.get("/users?role=partner&limit=100"),g=u.data??[];V=g,S(g)}catch{}finally{F(!1)}})()},[]);const ve=(n,u)=>{H(g=>({...g,[n]:u}))},ze=n=>{H(u=>{const g={...u};return delete g[n],g})},we=async n=>{w(!0);try{const u=Object.keys(_).length>0,g={trade_name:n.trade_name||void 0,phone:xo(n.phone)||void 0,benefit_type:n.benefit_type,notes:n.notes||void 0,address_street:n.address_street||void 0,address_number:n.address_number||void 0,address_complement:n.address_complement||void 0,address_neighborhood:n.address_neighborhood||void 0,address_city:n.address_city||void 0,address_state:n.address_state||void 0,address_zip:n.address_zip||void 0,partner_id:n.partner_id||null,...C?{bankAccount:{bank_name:n.bank_bank_name,agency:n.bank_agency,agency_digit:n.bank_agency_digit||void 0,account:n.bank_account,account_digit:n.bank_account_digit||void 0,account_type:n.bank_account_type}}:{}};if(Object.keys(g).forEach(s=>g[s]===void 0&&delete g[s]),u){const s=new FormData;s.append("data",JSON.stringify(g)),_.contrato&&s.append("contrato",_.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach(E=>{_[E]&&s.append("documentos",_[E])}),await T.patch(`/clients/${e}`,s,{headers:{"Content-Type":"multipart/form-data"}})}else await T.patch(`/clients/${e}`,g);G.success("Cliente atualizado com sucesso!",{toastId:"client-updated"}),a(`/clientes/${e}`,{replace:!0})}catch(u){G.error(ee(u,"Erro ao salvar alterações."))}finally{w(!1)}};if(k)return o.jsx(uo,{});const K=ke||Object.keys(_).length>0,t=n=>{var u;return(u=je[n])==null?void 0:u.message};return o.jsxs(o.Fragment,{children:[o.jsxs(he,{children:[o.jsxs(xe,{children:[o.jsxs(Ge,{type:"button",onClick:()=>a(`/clientes/${e}`),children:[o.jsx(Re,{size:15})," Voltar"]}),o.jsxs(ue,{children:[o.jsx(Ue,{children:"Editar Cliente"}),o.jsx(Ve,{children:U})]})]}),o.jsxs("form",{id:"edit-client-form",onSubmit:$e(we),noValidate:!0,children:[o.jsxs(P,{style:{marginBottom:"24px"},children:[o.jsxs(O,{children:[o.jsx(I,{children:o.jsx(Ne,{size:18})}),o.jsx(M,{children:"Dados da Empresa"})]}),o.jsxs(R,{children:[o.jsxs(d,{children:[o.jsxs(l,{children:[o.jsx(L,{children:o.jsx(A,{size:11})}),"Razão Social"]}),o.jsx(W,{children:N.corporate_name||"—"}),o.jsx(q,{children:"Campo único, não pode ser editado."})]}),o.jsxs(d,{children:[o.jsxs(l,{children:[o.jsx(L,{children:o.jsx(A,{size:11})}),"CNPJ"]}),o.jsx(W,{children:N.cnpj||"—"}),o.jsx(q,{children:"Campo único, não pode ser editado."})]}),o.jsxs(d,{children:[o.jsx(l,{htmlFor:"trade_name",children:"Nome Fantasia"}),o.jsx(f,{id:"trade_name",type:"text",placeholder:"Nome fantasia (opcional)",$hasError:!!t("trade_name"),disabled:i,...c("trade_name")}),t("trade_name")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("trade_name")]})]}),o.jsxs(d,{children:[o.jsxs(l,{children:[o.jsx(L,{children:o.jsx(A,{size:11})}),"Inscrição Estadual"]}),o.jsx(W,{children:N.state_registration||"—"}),o.jsx(q,{children:"Campo único, não pode ser editado."})]}),o.jsxs(d,{children:[o.jsx(l,{htmlFor:"phone",children:"Telefone"}),o.jsx(f,{id:"phone",type:"tel",placeholder:"(00) 00000-0000",$hasError:!!t("phone"),disabled:i,...c("phone",{onChange:n=>Z("phone",ce(n.target.value))})}),t("phone")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("phone")]})]}),o.jsxs(d,{children:[o.jsxs(l,{children:[o.jsx(L,{children:o.jsx(A,{size:11})}),"E-mail"]}),o.jsx(W,{children:N.email||"—"}),o.jsx(q,{children:"Campo único, não pode ser editado."})]}),o.jsxs(d,{children:[o.jsx(l,{htmlFor:"benefit_type",children:"Tipo de Benefício *"}),o.jsx(D,{id:"benefit_type",$hasError:!!t("benefit_type"),disabled:i,...c("benefit_type"),children:mo.map(n=>o.jsx("option",{value:n.value,children:n.label},n.value))}),t("benefit_type")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("benefit_type")]})]}),o.jsxs(d,{children:[o.jsx(l,{htmlFor:"partner_id",children:"Parceiro Vinculado"}),o.jsxs(D,{id:"partner_id",disabled:i||$,...c("partner_id"),children:[o.jsx("option",{value:"",children:$?"Carregando parceiros…":"Sem parceiro vinculado"}),b.map(n=>o.jsx("option",{value:n.id,children:n.name},n.id))]}),o.jsx(B,{children:$?"Buscando parceiros…":`${b.length} parceiro${b.length!==1?"s":""} disponível${b.length!==1?"is":""}`})]}),o.jsx(re,{children:o.jsxs(d,{children:[o.jsx(l,{htmlFor:"notes",children:"Observações"}),o.jsx(Je,{id:"notes",placeholder:"Observações internas…",disabled:i,...c("notes")}),o.jsx(B,{children:"Visível apenas para a equipe interna."})]})})]})]}),o.jsxs(P,{style:{marginBottom:"24px"},children:[o.jsxs(O,{children:[o.jsx(I,{children:o.jsx(Te,{size:18})}),o.jsx(M,{children:"Endereço"})]}),o.jsxs(R,{children:[o.jsx(re,{children:o.jsxs(d,{children:[o.jsx(l,{htmlFor:"address_street",children:"Logradouro"}),o.jsx(f,{id:"address_street",type:"text",placeholder:"Rua, Avenida, etc.",$hasError:!!t("address_street"),disabled:i,...c("address_street")}),t("address_street")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("address_street")]})]})}),o.jsxs(d,{children:[o.jsx(l,{htmlFor:"address_number",children:"Número"}),o.jsx(f,{id:"address_number",type:"text",placeholder:"Nº",$hasError:!!t("address_number"),disabled:i,...c("address_number")}),t("address_number")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("address_number")]})]}),o.jsxs(d,{children:[o.jsx(l,{htmlFor:"address_complement",children:"Complemento"}),o.jsx(f,{id:"address_complement",type:"text",placeholder:"Sala, Andar, Bloco…",$hasError:!!t("address_complement"),disabled:i,...c("address_complement")}),t("address_complement")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("address_complement")]})]}),o.jsxs(d,{children:[o.jsx(l,{htmlFor:"address_neighborhood",children:"Bairro"}),o.jsx(f,{id:"address_neighborhood",type:"text",placeholder:"Bairro",$hasError:!!t("address_neighborhood"),disabled:i,...c("address_neighborhood")}),t("address_neighborhood")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("address_neighborhood")]})]}),o.jsxs(d,{children:[o.jsx(l,{htmlFor:"address_city",children:"Cidade"}),o.jsx(f,{id:"address_city",type:"text",placeholder:"Cidade",$hasError:!!t("address_city"),disabled:i,...c("address_city")}),t("address_city")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("address_city")]})]}),o.jsxs(d,{children:[o.jsx(l,{htmlFor:"address_state",children:"UF"}),o.jsxs(D,{id:"address_state",$hasError:!!t("address_state"),disabled:i,...c("address_state"),children:[o.jsx("option",{value:"",children:"Selecione"}),ho.map(n=>o.jsx("option",{value:n,children:n},n))]}),t("address_state")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("address_state")]})]}),o.jsxs(d,{children:[o.jsx(l,{htmlFor:"address_zip",children:"CEP"}),o.jsx(f,{id:"address_zip",type:"text",placeholder:"00000-000",$hasError:!!t("address_zip"),disabled:i,...c("address_zip",{onChange:n=>Z("address_zip",pe(n.target.value))})}),t("address_zip")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("address_zip")]})]})]})]}),o.jsxs(P,{style:{marginBottom:"24px"},children:[o.jsxs(O,{children:[o.jsx(I,{children:o.jsx(Ae,{size:18})}),o.jsx(M,{children:"Conta Bancária"})]}),o.jsxs(He,{children:[o.jsx(Ye,{children:"Dados Bancários Principais"}),C&&o.jsx(B,{style:{marginBottom:"12px",display:"block"},children:"Agência e conta são obrigatórios quando o banco é informado."}),o.jsxs(R,{children:[o.jsxs(d,{children:[o.jsx(l,{htmlFor:"bank_bank_name",children:"Nome do Banco"}),o.jsx(f,{id:"bank_bank_name",type:"text",placeholder:"Ex: Bradesco, Nubank…",$hasError:!!t("bank_bank_name"),disabled:i,...c("bank_bank_name")}),t("bank_bank_name")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("bank_bank_name")]})]}),o.jsxs(d,{children:[o.jsxs(l,{htmlFor:"bank_agency",children:["Agência ",C&&o.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),o.jsx(f,{id:"bank_agency",type:"text",placeholder:"0000",$hasError:!!t("bank_agency"),disabled:i,...c("bank_agency")}),t("bank_agency")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("bank_agency")]})]}),o.jsxs(d,{children:[o.jsx(l,{htmlFor:"bank_agency_digit",children:"Dígito Agência"}),o.jsx(f,{id:"bank_agency_digit",type:"text",placeholder:"X",maxLength:2,$hasError:!!t("bank_agency_digit"),disabled:i,...c("bank_agency_digit")}),t("bank_agency_digit")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("bank_agency_digit")]})]}),o.jsxs(d,{children:[o.jsxs(l,{htmlFor:"bank_account",children:["Conta ",C&&o.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),o.jsx(f,{id:"bank_account",type:"text",placeholder:"000000",$hasError:!!t("bank_account"),disabled:i,...c("bank_account")}),t("bank_account")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("bank_account")]})]}),o.jsxs(d,{children:[o.jsx(l,{htmlFor:"bank_account_digit",children:"Dígito Conta"}),o.jsx(f,{id:"bank_account_digit",type:"text",placeholder:"0",maxLength:2,$hasError:!!t("bank_account_digit"),disabled:i,...c("bank_account_digit")}),t("bank_account_digit")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("bank_account_digit")]})]}),o.jsxs(d,{children:[o.jsxs(l,{htmlFor:"bank_account_type",children:["Tipo de Conta ",C&&o.jsx("span",{style:{color:"#dc2626"},children:"*"})]}),o.jsx(D,{id:"bank_account_type",$hasError:!!t("bank_account_type"),disabled:i,...c("bank_account_type"),children:go.map(n=>o.jsx("option",{value:n.value,children:n.label},n.value))}),t("bank_account_type")&&o.jsxs(x,{children:[o.jsx(h,{size:11}),t("bank_account_type")]})]})]})]})]}),o.jsxs(P,{style:{marginBottom:"24px"},children:[o.jsxs(O,{children:[o.jsx(I,{children:o.jsx(Oe,{size:18})}),o.jsx(M,{children:"Documentos"})]}),o.jsxs(B,{style:{marginBottom:"16px",display:"block"},children:["Selecione um novo arquivo para ",o.jsx("strong",{children:"substituir"})," o documento existente. O arquivo antigo é removido automaticamente do Cloudinary."]}),o.jsx(Ze,{children:po.map(n=>o.jsx(fo,{slot:n,existingDoc:fe[n.type],selectedFile:_[n.key],onFileSelect:ve,onClearFile:ze,disabled:i},n.key))})]})]})]}),o.jsxs(no,{children:[o.jsxs(to,{type:"button",disabled:i,onClick:()=>a(`/clientes/${e}`),children:[o.jsx(Ie,{size:15})," Cancelar"]}),o.jsx(so,{type:"submit",form:"edit-client-form",disabled:i||!K,$isSubmitting:i,title:K?void 0:"Nenhuma alteração detectada",children:i?o.jsxs(o.Fragment,{children:[o.jsx(io,{}),"Salvando…"]}):o.jsxs(o.Fragment,{children:[o.jsx(Me,{size:15}),"Salvar Alterações"]})})]})]})}export{zo as default};
