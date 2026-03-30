import{c as re,a,p as Q,h as ae,u as te,e as ne,r as w,j as o,f as ie,d as q,B as I,g as se}from"./index-79eoxmbg.js";import{u as le}from"./index.esm-CTIyMFzR.js";import{o as de,a as ce,c as i}from"./index.esm-C7xJ7Hp4.js";import{u as pe}from"./useQuery-CfcG5hg-.js";import{A as ge,B as fe,M as ye,L as me}from"./map-pin-Bywn8CQW.js";import{F,S as ue,T as xe,U as he}from"./upload-CMbMngdI.js";import{X as $e}from"./x-CSxD-jbr.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=re("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),je=Q`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,ke=Q`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`,L=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 88px; /* espaço para o footer fixo */
  animation: ${je} 0.3s ease both;
`,we=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,ze=a.button`
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
`,ve=a.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,_e=a.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,Se=a.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0;
`,b=a.div`
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,z=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.border.default};
`,v=a.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`,_=a.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.serif};
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.text.primary};
  margin: 0;
`,S=a.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Fe=a.div`
  grid-column: 1 / -1;
`,l=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,d=a.label`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`;a.span`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.neutral[400]};
  flex-shrink: 0;
`;const C=({theme:e,$hasError:r})=>`
  width: 100%;
  background-color: ${e.surface.card};
  border: 1.5px solid ${r?e.colors.error.base:e.colors.neutral[200]};
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
    border-color: ${r?e.colors.error.base:e.colors.primary[500]};
    box-shadow: 0 0 0 3px ${r?e.colors.error.base+"20":e.colors.primary[600]+"18"};
  }

  &:disabled {
    background-color: ${e.colors.neutral[50]};
    color: ${e.text.muted};
    cursor: not-allowed;
    opacity: 0.75;
  }
`,c=a.input`
  ${({theme:e,$hasError:r})=>C({theme:e,$hasError:r})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
`;a.select`
  ${({theme:e,$hasError:r})=>C({theme:e,$hasError:r})}
  height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[10]} 0 ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({theme:e})=>e.spacing[3]} center;
`;a.textarea`
  ${({theme:e,$hasError:r})=>C({theme:e,$hasError:r})}
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`;a.div`
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
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.neutral[400]};
  font-style: italic;
`;a.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.error.base};
`;const M=a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`;a.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`;a.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`;const Ce=a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Be=a.div`
  border: 1.5px dashed ${({theme:e,$hasFile:r})=>r?e.colors.primary[400]:e.border.strong};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({theme:e,$hasFile:r})=>r?e.colors.primary[50]:e.colors.neutral[50]};
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
`,De=a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.secondary};
`,Re=a.label`
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
`,Ee=a.div`
  color: ${({theme:e,$hasFile:r})=>r?e.colors.primary[500]:e.colors.neutral[300]};
  transition: color ${({theme:e})=>e.transitions.fast};
`,We=a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`;const P=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.borderRadius.base};
`,A=a.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,N=a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,U=a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`,Te=a.button`
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
`,qe=a.div`
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
`,Ie=a.button`
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
`,Le=a.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({$isSubmitting:e,theme:r})=>e?r.colors.primary[700]:`linear-gradient(135deg, ${r.colors.primary[600]}, ${r.colors.primary[500]})`};
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
`,O=a.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`;a.div`
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
  animation: ${ke} 1.4s ease infinite;
`;a(b)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`;a.hr`
  border: none;
  border-top: 1px solid ${({theme:e})=>e.border.default};
  margin: ${({theme:e})=>e.spacing[2]} 0;
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
`;a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`;a.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.base};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.brand.primary};
  flex-shrink: 0;
`;a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`;a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`;a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  gap: ${({theme:e})=>e.spacing[3]};
`;a.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.text.muted};
  text-transform: capitalize;
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.brand.primary};
  white-space: nowrap;
`;a.div`
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.neutral[50]};
  border: 1px solid ${({theme:e})=>e.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`;a.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({theme:e})=>e.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;a.div`
  display: grid;
  grid-template-columns: repeat(${({$cols:e})=>e??2}, 1fr);
  gap: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;a.button`
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
`;a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};
  text-align: center;
  color: ${({theme:e})=>e.text.muted};
`;a.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.text.muted};
  margin: 0;
`;a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  /* Span full width dentro do grid (ex: campo "notes") */
  ${({$span:e})=>e&&"grid-column: 1 / -1;"}
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text.muted};
`;const Me=a.span`
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
`;a(Me)`
  color: ${({theme:e})=>e.text.secondary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
`;const H={pending:{bg:"#fef3c7",color:"#92400e"},analysis:{bg:"#dbeafe",color:"#1e40af"},approved:{bg:"#d1fae5",color:"#065f46"}};a.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.typography.fontFamily.sans};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  background-color: ${({$status:e})=>{var r;return((r=H[e])==null?void 0:r.bg)??"#f3f4f6"}};
  color: ${({$status:e})=>{var r;return((r=H[e])==null?void 0:r.color)??"#374151"}};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`;const Pe=(e="")=>{const r=e.replace(/\D/g,"").slice(0,14);return r.length<=2?r:r.length<=5?`${r.slice(0,2)}.${r.slice(2)}`:r.length<=8?`${r.slice(0,2)}.${r.slice(2,5)}.${r.slice(5)}`:r.length<=12?`${r.slice(0,2)}.${r.slice(2,5)}.${r.slice(5,8)}/${r.slice(8)}`:`${r.slice(0,2)}.${r.slice(2,5)}.${r.slice(5,8)}/${r.slice(8,12)}-${r.slice(12)}`},K=(e="")=>{const r=e.replace(/\D/g,"").slice(0,11);return r.length<=2?`(${r}`:r.length<=6?`(${r.slice(0,2)}) ${r.slice(2)}`:r.length<=10?`(${r.slice(0,2)}) ${r.slice(2,6)}-${r.slice(6)}`:`(${r.slice(0,2)}) ${r.slice(2,7)}-${r.slice(7)}`},Ae=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`:"",Ne=ce({trade_name:i().nullable().max(200,"Máximo 200 caracteres."),state_registration:i().nullable().transform(e=>(e==null?void 0:e.replace(/\D/g,""))||null).matches(/^\d*$/,"A inscrição estadual deve conter apenas números.").max(15,"Inscrição estadual deve ter no máximo 15 caracteres."),phone:i().nullable().max(20,"Máximo 20 caracteres."),benefit_type:i().required("Obrigatório.").oneOf(["food","meal","both"]),notes:i().nullable(),address_street:i().nullable().max(255),address_number:i().nullable().max(10),address_complement:i().nullable().max(100),address_neighborhood:i().nullable().max(100),address_city:i().nullable().max(100),address_state:i().nullable().max(2),address_zip:i().nullable().test("cep","CEP inválido",e=>!e||e.replace(/\D/g,"").length===8),bank_bank_name:i().nullable(),bank_agency:i().nullable(),bank_account:i().nullable(),bank_account_type:i().nullable().oneOf(["checking","savings",""])}),Ue=[{key:"contrato",type:"company_document",label:"Contrato / Doc. Empresa"},{key:"proof_of_address",type:"proof_of_address",label:"Comprovante de Endereço"},{key:"bank_account_proof",type:"bank_account_proof",label:"Comprovante Bancário"},{key:"card_machine_proof",type:"card_machine_proof",label:"Comprovante de Maquininha"}];function Oe({slot:e,existingDoc:r,selectedFile:m,onFileSelect:h,onClearFile:j,disabled:g}){const y=!!m;return o.jsxs(Be,{$hasFile:y||!!r,children:[o.jsx(De,{children:e.label}),r&&!y&&o.jsxs(P,{children:[o.jsx(F,{size:16,color:"#059669"}),o.jsxs(A,{children:[o.jsx(N,{children:"Documento já enviado"}),o.jsx(U,{children:"Clique abaixo para substituir"})]})]}),y&&o.jsxs(P,{children:[o.jsx(F,{size:16,color:"#B45A14"}),o.jsxs(A,{children:[o.jsx(N,{children:m.name}),o.jsx(U,{children:Ae(m.size)})]}),o.jsx(Te,{type:"button",onClick:()=>j(e.key),disabled:g,children:o.jsx(xe,{size:13})})]}),o.jsxs(Re,{htmlFor:`file-${e.key}`,children:[o.jsx(Ee,{$hasFile:y,children:o.jsx(he,{size:20})}),o.jsx(We,{children:y||r?"Trocar arquivo":"Selecionar arquivo"})]}),o.jsx("input",{id:`file-${e.key}`,type:"file",hidden:!0,disabled:g,accept:"application/pdf,image/*",onChange:t=>{var k;return((k=t.target.files)==null?void 0:k[0])&&h(e.key,t.target.files[0])}})]})}function eo(){const{id:e}=ae(),r=te(),m=ne(),[h,j]=w.useState(!1),[g,y]=w.useState({}),{data:t,isLoading:k}=pe({queryKey:["client",e],queryFn:async()=>(await q.get(`/clients/${e}`)).data.data}),{register:f,handleSubmit:V,watch:He,setValue:Y,formState:{errors:Ke,isDirty:G}}=le({resolver:de(Ne),values:w.useMemo(()=>{var n,p,s,u,x,$,D,R,E,W,T;if(t)return{trade_name:t.trade_name||"",state_registration:t.state_registration||"",phone:K(t.phone||""),benefit_type:t.benefit_type||"food",notes:t.notes||"",address_street:((n=t.address)==null?void 0:n.street)||"",address_number:((p=t.address)==null?void 0:p.number)||"",address_complement:((s=t.address)==null?void 0:s.complement)||"",address_neighborhood:((u=t.address)==null?void 0:u.neighborhood)||"",address_city:((x=t.address)==null?void 0:x.city)||"",address_state:(($=t.address)==null?void 0:$.state)||"",address_zip:((D=t.address)==null?void 0:D.zip_code)||"",bank_bank_name:((R=t.bank_account)==null?void 0:R.bank_name)||"",bank_agency:((E=t.bank_account)==null?void 0:E.agency)||"",bank_account:((W=t.bank_account)==null?void 0:W.account)||"",bank_account_type:((T=t.bank_account)==null?void 0:T.account_type)||""}},[t])}),J=w.useMemo(()=>{var n;return((n=t==null?void 0:t.documents)==null?void 0:n.reduce((p,s)=>({...p,[s.type]:s}),{}))||{}},[t]),B=Object.keys(g).length>0,Z=!G&&!B,X=(n,p)=>y(s=>({...s,[n]:p})),ee=n=>y(p=>{const s={...p};return delete s[n],s}),oe=async n=>{var p,s;j(!0);try{const u={...n,phone:(p=n.phone)==null?void 0:p.replace(/\D/g,""),address_zip:(s=n.address_zip)==null?void 0:s.replace(/\D/g,"")};if(B){const x=new FormData;x.append("data",JSON.stringify(u)),g.contrato&&x.append("contrato",g.contrato),["proof_of_address","bank_account_proof","card_machine_proof"].forEach($=>{g[$]&&x.append("documentos",g[$])}),await ie.patch(`/clients/${e}`,x)}else await q.patch(`/clients/${e}`,u);await Promise.all([m.invalidateQueries({queryKey:["client",e]}),m.invalidateQueries({queryKey:["clients"]}),m.invalidateQueries({queryKey:["dashboard-recent-clients"]})]),I.success("Cliente atualizado com sucesso!"),r(`/clientes/${e}`)}catch(u){I.error(se(u,"Erro ao salvar alterações."))}finally{j(!1)}};return k?o.jsxs(L,{children:[o.jsx(O,{})," Carregando dados do cliente..."]}):o.jsxs(L,{children:[o.jsxs(we,{children:[o.jsxs(ze,{type:"button",onClick:()=>r(-1),children:[o.jsx(ge,{size:16})," Voltar"]}),o.jsxs(ve,{children:[o.jsx(_e,{children:"Editar Cliente"}),o.jsxs(Se,{children:["Alterando dados de: ",o.jsx("strong",{children:t==null?void 0:t.corporate_name})]})]})]}),o.jsxs("form",{id:"edit-client-form",onSubmit:V(oe),children:[o.jsxs(b,{style:{marginBottom:"24px"},children:[o.jsxs(z,{children:[o.jsx(v,{children:o.jsx(fe,{size:18})}),o.jsx(_,{children:"Dados da Empresa (Bloqueados)"})]}),o.jsxs(S,{children:[o.jsxs(l,{children:[o.jsx(d,{children:"Razão Social"}),o.jsx(c,{value:(t==null?void 0:t.corporate_name)||"",disabled:!0,style:{backgroundColor:"#f9fafb"}})]}),o.jsxs(l,{children:[o.jsx(d,{children:"CNPJ"}),o.jsx(c,{value:Pe((t==null?void 0:t.cnpj)||""),disabled:!0,style:{backgroundColor:"#f9fafb"}})]}),o.jsxs(l,{children:[o.jsx(d,{children:"Nome Fantasia"}),o.jsx(c,{...f("trade_name"),placeholder:"Nome fantasia"})]}),o.jsxs(l,{children:[o.jsx(d,{children:"Inscrição Estadual"}),o.jsx(c,{...f("state_registration"),placeholder:"Inscrição estadual"})]})]}),o.jsxs(M,{style:{marginTop:"12px"},children:[o.jsx(be,{size:12})," Dados fiscais e de identificação não podem ser alterados após o cadastro."]})]}),o.jsxs(b,{style:{marginBottom:"24px"},children:[o.jsxs(z,{children:[o.jsx(v,{children:o.jsx(ye,{size:18})}),o.jsx(_,{children:"Endereço e Contato"})]}),o.jsxs(S,{children:[o.jsxs(l,{children:[o.jsx(d,{children:"E-mail Principal"}),o.jsx(c,{value:(t==null?void 0:t.email)||"",disabled:!0,style:{backgroundColor:"#f9fafb"}})]}),o.jsxs(l,{children:[o.jsx(d,{children:"Telefone"}),o.jsx(c,{...f("phone"),onChange:n=>Y("phone",K(n.target.value)),placeholder:"(00) 00000-0000"})]}),o.jsx(Fe,{children:o.jsxs(l,{children:[o.jsx(d,{children:"Logradouro"}),o.jsx(c,{...f("address_street"),placeholder:"Rua, Av..."})]})}),o.jsxs(l,{children:[o.jsx(d,{children:"Número"}),o.jsx(c,{...f("address_number")})]}),o.jsxs(l,{children:[o.jsx(d,{children:"Bairro"}),o.jsx(c,{...f("address_neighborhood")})]})]})]}),o.jsxs(b,{style:{marginBottom:"24px"},children:[o.jsxs(z,{children:[o.jsx(v,{children:o.jsx(me,{size:18})}),o.jsx(_,{children:"Dados Bancários"})]}),o.jsxs(S,{children:[o.jsxs(l,{children:[o.jsx(d,{children:"Banco"}),o.jsx(c,{...f("bank_bank_name")})]}),o.jsxs(l,{children:[o.jsx(d,{children:"Agência"}),o.jsx(c,{...f("bank_agency")})]}),o.jsxs(l,{children:[o.jsx(d,{children:"Conta"}),o.jsx(c,{...f("bank_account")})]})]})]}),o.jsxs(b,{style:{marginBottom:"24px"},children:[o.jsxs(z,{children:[o.jsx(v,{children:o.jsx(F,{size:18})}),o.jsx(_,{children:"Documentação"})]}),o.jsx(M,{style:{marginBottom:"16px"},children:"Ao selecionar um novo arquivo, o documento anterior será substituído automaticamente."}),o.jsx(Ce,{children:Ue.map(n=>o.jsx(Oe,{slot:n,existingDoc:J[n.type],selectedFile:g[n.key],onFileSelect:X,onClearFile:ee,disabled:h},n.key))})]}),o.jsxs(qe,{children:[o.jsxs(Ie,{type:"button",onClick:()=>r(-1),disabled:h,children:[o.jsx($e,{size:15})," Cancelar"]}),o.jsx(Le,{type:"submit",disabled:h||Z,children:h?o.jsxs(o.Fragment,{children:[o.jsx(O,{})," Salvando..."]}):o.jsxs(o.Fragment,{children:[o.jsx(ue,{size:15})," Salvar Alterações"]})})]})]})]})}export{eo as default};
