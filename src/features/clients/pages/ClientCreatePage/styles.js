// // ============================================================
// // src/features/clients/pages/ClientCreatePage/styles.js
// // Reutiliza a linguagem visual da ClientEditPage e adiciona
// // componentes específicos de seleção de plano e bandeiras.
// // ============================================================
// import styled, { keyframes } from 'styled-components';

// // ── Animações ─────────────────────────────────────────────────────────────────

// const fadeInUp = keyframes`
//   from { opacity: 0; transform: translateY(10px); }
//   to   { opacity: 1; transform: translateY(0); }
// `;

// export const shimmer = keyframes`
//   0%   { background-position: -600px 0; }
//   100% { background-position:  600px 0; }
// `;

// // ── Container raiz ────────────────────────────────────────────────────────────

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing[6]};
//   padding-bottom: 88px;
//   animation: ${fadeInUp} 0.3s ease both;
// `;

// // ── Header ────────────────────────────────────────────────────────────────────

// export const PageHeader = styled.div`
//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing[4]};
//   flex-wrap: wrap;
// `;

// export const BackButton = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing[2]};
//   padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
//   border: 1.5px solid ${({ theme }) => theme.border.default};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   background: transparent;
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
//   color: ${({ theme }) => theme.text.secondary};
//   cursor: pointer;
//   flex-shrink: 0;
//   transition:
//     background-color ${({ theme }) => theme.transitions.fast},
//     color ${({ theme }) => theme.transitions.fast},
//     border-color ${({ theme }) => theme.transitions.fast};

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.neutral[100]};
//     color: ${({ theme }) => theme.text.primary};
//     border-color: ${({ theme }) => theme.border.strong};
//   }
// `;

// export const TitleGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2px;
// `;

// export const PageTitle = styled.h1`
//   font-family: ${({ theme }) => theme.typography.fontFamily.serif};
//   font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
//   color: ${({ theme }) => theme.text.primary};
//   margin: 0;
//   line-height: ${({ theme }) => theme.typography.lineHeight.tight};
// `;

// export const PageSubtitle = styled.p`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   color: ${({ theme }) => theme.text.secondary};
//   margin: 0;
// `;

// // ── Cards ─────────────────────────────────────────────────────────────────────

// export const Card = styled.div`
//   background-color: ${({ theme }) => theme.surface.card};
//   border: 1px solid ${({ theme }) => theme.border.default};
//   border-radius: ${({ theme }) => theme.borderRadius.lg};
//   padding: ${({ theme }) => theme.spacing[6]};
//   box-shadow: ${({ theme }) => theme.shadows.sm};
// `;

// export const CardHeader = styled.div`
//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing[3]};
//   margin-bottom: ${({ theme }) => theme.spacing[6]};
//   padding-bottom: ${({ theme }) => theme.spacing[4]};
//   border-bottom: 1px solid ${({ theme }) => theme.border.default};
// `;

// export const CardIconWrapper = styled.div`
//   width: 36px;
//   height: 36px;
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   background-color: ${({ theme }) => theme.colors.primary[50]};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: ${({ theme }) => theme.brand.primary};
//   flex-shrink: 0;
// `;

// export const CardTitle = styled.h2`
//   font-family: ${({ theme }) => theme.typography.fontFamily.serif};
//   font-size: ${({ theme }) => theme.typography.fontSize.lg};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
//   color: ${({ theme }) => theme.text.primary};
//   margin: 0;
// `;

// // ── Grid de campos ────────────────────────────────────────────────────────────

// export const FormGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(${({ $cols }) => $cols ?? 2}, 1fr);
//   gap: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};

//   @media (max-width: 640px) {
//     grid-template-columns: 1fr;
//   }
// `;

// export const FullSpan = styled.div`
//   grid-column: 1 / -1;
// `;

// // ── Campos do formulário ──────────────────────────────────────────────────────

// export const Field = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing[2]};
// `;

// export const Label = styled.label`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.xs};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
//   letter-spacing: 0.07em;
//   text-transform: uppercase;
//   color: ${({ theme }) => theme.text.secondary};
//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing[2]};
// `;

// const fieldBase = ({ theme, $hasError }) => `
//   width: 100%;
//   background-color: ${theme.surface.card};
//   border: 1.5px solid ${$hasError ? theme.colors.error.base : theme.colors.neutral[200]};
//   border-radius: ${theme.borderRadius.md};
//   font-family: ${theme.typography.fontFamily.sans};
//   font-size: ${theme.typography.fontSize.base};
//   color: ${theme.text.primary};
//   outline: none;
//   transition:
//     border-color ${theme.transitions.fast},
//     box-shadow ${theme.transitions.fast};
//   box-sizing: border-box;

//   &::placeholder { color: ${theme.colors.neutral[300]}; }

//   &:focus {
//     border-color: ${$hasError ? theme.colors.error.base : theme.colors.primary[500]};
//     box-shadow: 0 0 0 3px ${$hasError
//       ? theme.colors.error.base + '20'
//       : theme.colors.primary[600] + '18'};
//   }

//   &:disabled {
//     background-color: ${theme.colors.neutral[50]};
//     color: ${theme.text.muted};
//     cursor: not-allowed;
//     opacity: 0.75;
//   }
// `;

// export const Input = styled.input`
//   ${({ theme, $hasError }) => fieldBase({ theme, $hasError })}
//   height: 44px;
//   padding: 0 ${({ theme }) => theme.spacing[4]};
// `;

// export const Select = styled.select`
//   ${({ theme, $hasError }) => fieldBase({ theme, $hasError })}
//   height: 44px;
//   padding: 0 ${({ theme }) => theme.spacing[10]} 0 ${({ theme }) => theme.spacing[4]};
//   cursor: pointer;
//   appearance: none;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
//   background-repeat: no-repeat;
//   background-position: right ${({ theme }) => theme.spacing[3]} center;
// `;

// export const Textarea = styled.textarea`
//   ${({ theme, $hasError }) => fieldBase({ theme, $hasError })}
//   padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
//   resize: vertical;
//   min-height: 96px;
//   line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
// `;

// export const FieldError = styled.span`
//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing[1]};
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.xs};
//   color: ${({ theme }) => theme.colors.error.base};
// `;

// export const FieldHint = styled.span`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.xs};
//   color: ${({ theme }) => theme.text.muted};
// `;

// // ── Seção bancária ────────────────────────────────────────────────────────────

// export const BankSection = styled.div`
//   padding: ${({ theme }) => theme.spacing[5]};
//   background-color: ${({ theme }) => theme.colors.neutral[50]};
//   border: 1px solid ${({ theme }) => theme.border.default};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
// `;

// export const BankSectionTitle = styled.h3`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
//   color: ${({ theme }) => theme.text.secondary};
//   margin: 0 0 ${({ theme }) => theme.spacing[4]};
// `;

// // ── Toggle de modo (Plano vs Individual) ──────────────────────────────────────

// export const ModeToggle = styled.div`
//   display: flex;
//   gap: ${({ theme }) => theme.spacing[3]};
//   margin-bottom: ${({ theme }) => theme.spacing[5]};

//   @media (max-width: 480px) {
//     flex-direction: column;
//   }
// `;

// export const ModeButton = styled.button`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: ${({ theme }) => theme.spacing[2]};
//   padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
//   border: 2px solid ${({ theme, $active }) =>
//     $active ? theme.colors.primary[500] : theme.border.default};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   background-color: ${({ theme, $active }) =>
//     $active ? theme.colors.primary[50] : 'transparent'};
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
//   color: ${({ theme, $active }) =>
//     $active ? theme.colors.primary[700] : theme.text.secondary};
//   cursor: pointer;
//   transition:
//     border-color ${({ theme }) => theme.transitions.fast},
//     background-color ${({ theme }) => theme.transitions.fast},
//     color ${({ theme }) => theme.transitions.fast};

//   &:hover:not(:disabled) {
//     border-color: ${({ theme }) => theme.colors.primary[400]};
//     background-color: ${({ theme }) => theme.colors.primary[50]};
//     color: ${({ theme }) => theme.colors.primary[700]};
//   }

//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// // ── Card de plano ─────────────────────────────────────────────────────────────

// export const PlanCard = styled.div`
//   padding: ${({ theme }) => theme.spacing[4]};
//   border: 2px solid ${({ theme, $selected }) =>
//     $selected ? theme.colors.primary[400] : theme.border.default};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   background-color: ${({ theme, $selected }) =>
//     $selected ? theme.colors.primary[50] : theme.surface.card};
//   cursor: pointer;
//   transition:
//     border-color ${({ theme }) => theme.transitions.fast},
//     background-color ${({ theme }) => theme.transitions.fast};

//   &:hover {
//     border-color: ${({ theme }) => theme.colors.primary[400]};
//     background-color: ${({ theme }) => theme.colors.primary[50]};
//   }
// `;

// export const PlanCardHeader = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   gap: ${({ theme }) => theme.spacing[3]};
//   margin-bottom: ${({ theme }) => theme.spacing[2]};
// `;

// export const PlanName = styled.span`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
//   color: ${({ theme }) => theme.text.primary};
// `;

// export const PlanPrice = styled.span`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
//   color: ${({ theme }) => theme.brand.primary};
//   white-space: nowrap;
// `;

// export const PlanDescription = styled.p`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.xs};
//   color: ${({ theme }) => theme.text.muted};
//   margin: 0 0 ${({ theme }) => theme.spacing[2]};
//   line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
// `;

// export const PlanFlagsPreview = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: ${({ theme }) => theme.spacing[1]};
// `;

// export const PlanFlagTag = styled.span`
//   display: inline-flex;
//   align-items: center;
//   padding: 2px 8px;
//   border-radius: ${({ theme }) => theme.borderRadius.full};
//   background-color: ${({ theme }) => theme.colors.primary[100]};
//   color: ${({ theme }) => theme.colors.primary[700]};
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: 11px;
//   font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
// `;

// export const PlansGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: ${({ theme }) => theme.spacing[3]};

//   @media (max-width: 640px) {
//     grid-template-columns: 1fr;
//   }
// `;

// // ── Grid de bandeiras individuais ─────────────────────────────────────────────

// export const FlagsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: ${({ theme }) => theme.spacing[3]};

//   @media (max-width: 640px) {
//     grid-template-columns: 1fr;
//   }
// `;

// export const FlagCheckCard = styled.div`
//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing[3]};
//   padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
//   border: 2px solid ${({ theme, $checked }) =>
//     $checked ? theme.colors.primary[400] : theme.border.default};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   background-color: ${({ theme, $checked }) =>
//     $checked ? theme.colors.primary[50] : theme.surface.card};
//   cursor: pointer;
//   transition:
//     border-color ${({ theme }) => theme.transitions.fast},
//     background-color ${({ theme }) => theme.transitions.fast};
//   user-select: none;

//   &:hover {
//     border-color: ${({ theme }) => theme.colors.primary[400]};
//     background-color: ${({ theme }) => theme.colors.primary[50]};
//   }
// `;

// export const FlagCheckbox = styled.div`
//   width: 18px;
//   height: 18px;
//   border-radius: 4px;
//   border: 2px solid ${({ theme, $checked }) =>
//     $checked ? theme.colors.primary[500] : theme.colors.neutral[300]};
//   background-color: ${({ theme, $checked }) =>
//     $checked ? theme.colors.primary[500] : 'transparent'};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-shrink: 0;
//   transition:
//     border-color ${({ theme }) => theme.transitions.fast},
//     background-color ${({ theme }) => theme.transitions.fast};
// `;

// export const FlagCheckInfo = styled.div`
//   flex: 1;
//   min-width: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 2px;
// `;

// export const FlagCheckName = styled.span`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
//   color: ${({ theme }) => theme.text.primary};
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// export const FlagCheckPrice = styled.span`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.xs};
//   color: ${({ theme }) => theme.brand.primary};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
// `;

// // ── Resumo do valor total ─────────────────────────────────────────────────────

// export const TotalBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
//   background-color: ${({ theme }) => theme.colors.neutral[50]};
//   border: 1.5px solid ${({ theme }) => theme.border.default};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   margin-top: ${({ theme }) => theme.spacing[4]};
// `;

// export const TotalLabel = styled.span`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
//   color: ${({ theme }) => theme.text.secondary};
// `;

// export const TotalValue = styled.span`
//   font-family: ${({ theme }) => theme.typography.fontFamily.serif};
//   font-size: ${({ theme }) => theme.typography.fontSize.xl};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
//   color: ${({ theme }) => theme.brand.primary};
// `;

// // ── Documentos ────────────────────────────────────────────────────────────────

// export const DocumentsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: ${({ theme }) => theme.spacing[4]};

//   @media (max-width: 640px) {
//     grid-template-columns: 1fr;
//   }
// `;

// export const DocumentUploadCard = styled.div`
//   border: 1.5px dashed ${({ theme, $hasFile }) =>
//     $hasFile ? theme.colors.primary[400] : theme.border.strong};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   background-color: ${({ theme, $hasFile }) =>
//     $hasFile ? theme.colors.primary[50] : theme.colors.neutral[50]};
//   padding: ${({ theme }) => theme.spacing[4]};
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing[3]};
//   transition:
//     border-color ${({ theme }) => theme.transitions.fast},
//     background-color ${({ theme }) => theme.transitions.fast};

//   &:hover {
//     border-color: ${({ theme }) => theme.colors.primary[400]};
//     background-color: ${({ theme }) => theme.colors.primary[50]};
//   }
// `;

// export const DocumentUploadLabel = styled.span`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.xs};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
//   letter-spacing: 0.07em;
//   text-transform: uppercase;
//   color: ${({ theme }) => theme.text.secondary};
// `;

// export const DropZone = styled.label`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: ${({ theme }) => theme.spacing[2]};
//   padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[4]};
//   border-radius: ${({ theme }) => theme.borderRadius.base};
//   cursor: pointer;
//   text-align: center;
//   min-height: 88px;
// `;

// export const DropZoneIcon = styled.div`
//   color: ${({ theme, $hasFile }) =>
//     $hasFile ? theme.colors.primary[500] : theme.colors.neutral[300]};
//   transition: color ${({ theme }) => theme.transitions.fast};
// `;

// export const DropZoneText = styled.span`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   color: ${({ theme }) => theme.text.secondary};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
// `;

// export const DropZoneSubtext = styled.span`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.xs};
//   color: ${({ theme }) => theme.text.muted};
// `;

// export const FileInfo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing[2]};
//   padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
//   background-color: ${({ theme }) => theme.surface.card};
//   border: 1px solid ${({ theme }) => theme.colors.primary[200]};
//   border-radius: ${({ theme }) => theme.borderRadius.base};
// `;

// export const FileInfoText = styled.div`
//   flex: 1;
//   min-width: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 1px;
// `;

// export const FileName = styled.span`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.xs};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
//   color: ${({ theme }) => theme.text.primary};
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// export const FileMeta = styled.span`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.xs};
//   color: ${({ theme }) => theme.text.muted};
// `;

// export const RemoveFileButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 24px;
//   height: 24px;
//   border-radius: ${({ theme }) => theme.borderRadius.full};
//   border: none;
//   background-color: ${({ theme }) => theme.colors.neutral[100]};
//   color: ${({ theme }) => theme.text.muted};
//   cursor: pointer;
//   flex-shrink: 0;
//   transition:
//     background-color ${({ theme }) => theme.transitions.fast},
//     color ${({ theme }) => theme.transitions.fast};

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.error.light};
//     color: ${({ theme }) => theme.colors.error.base};
//   }
// `;

// // ── Footer fixo ───────────────────────────────────────────────────────────────

// export const FormFooter = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 240px;
//   right: 0;
//   z-index: ${({ theme }) => theme.zIndex.sticky};
//   background-color: ${({ theme }) => theme.surface.card};
//   border-top: 1px solid ${({ theme }) => theme.border.default};
//   padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   gap: ${({ theme }) => theme.spacing[3]};
//   box-shadow: 0 -4px 16px rgba(35, 27, 21, 0.06);

//   @media (max-width: 900px) {
//     left: 0;
//     padding: ${({ theme }) => theme.spacing[4]};
//   }
// `;

// export const CancelButton = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing[2]};
//   padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
//   border: 1.5px solid ${({ theme }) => theme.border.default};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   background: transparent;
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
//   color: ${({ theme }) => theme.text.secondary};
//   cursor: pointer;
//   transition:
//     background-color ${({ theme }) => theme.transitions.fast},
//     color ${({ theme }) => theme.transitions.fast};

//   &:hover:not(:disabled) {
//     background-color: ${({ theme }) => theme.colors.neutral[100]};
//     color: ${({ theme }) => theme.text.primary};
//   }
//   &:disabled { opacity: 0.5; cursor: not-allowed; }
// `;

// export const SaveButton = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing[2]};
//   padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
//   border: none;
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   background: ${({ $isSubmitting, theme }) =>
//     $isSubmitting
//       ? theme.colors.primary[700]
//       : `linear-gradient(135deg, ${theme.colors.primary[600]}, ${theme.colors.primary[500]})`};
//   color: #fff;
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
//   cursor: ${({ $isSubmitting }) => ($isSubmitting ? 'not-allowed' : 'pointer')};
//   box-shadow: 0 3px 12px ${({ theme }) => theme.colors.primary[900]}35;
//   transition:
//     background ${({ theme }) => theme.transitions.base},
//     transform ${({ theme }) => theme.transitions.fast},
//     box-shadow ${({ theme }) => theme.transitions.base};

//   &:hover:not(:disabled) {
//     background: linear-gradient(
//       135deg,
//       ${({ theme }) => theme.colors.primary[700]},
//       ${({ theme }) => theme.colors.primary[600]}
//     );
//     box-shadow: 0 6px 20px ${({ theme }) => theme.colors.primary[900]}45;
//     transform: translateY(-1px);
//   }
//   &:active:not(:disabled) { transform: translateY(0); }
//   &:disabled { opacity: 0.65; cursor: not-allowed; }
// `;

// export const Spinner = styled.span`
//   width: 15px;
//   height: 15px;
//   border: 2px solid rgba(255, 255, 255, 0.3);
//   border-top-color: #fff;
//   border-radius: 50%;
//   flex-shrink: 0;
//   animation: _spin 0.7s linear infinite;
//   @keyframes _spin { to { transform: rotate(360deg); } }
// `;

// // ── Skeleton ──────────────────────────────────────────────────────────────────

// export const SkeletonBar = styled.div`
//   height: ${({ $h }) => $h ?? '14px'};
//   width: ${({ $w }) => $w ?? '100%'};
//   border-radius: ${({ theme }) => theme.borderRadius.sm};
//   background: linear-gradient(
//     90deg,
//     ${({ theme }) => theme.colors.neutral[100]} 25%,
//     ${({ theme }) => theme.colors.neutral[50]}  50%,
//     ${({ theme }) => theme.colors.neutral[100]} 75%
//   );
//   background-size: 600px 100%;
//   animation: ${shimmer} 1.4s ease infinite;
// `;

// export const SkeletonCard = styled(Card)`
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing[4]};
// `;

// export const Divider = styled.hr`
//   border: none;
//   border-top: 1px solid ${({ theme }) => theme.border.default};
//   margin: ${({ theme }) => theme.spacing[2]} 0;
// `;

// export const EmptyState = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[4]};
//   gap: ${({ theme }) => theme.spacing[2]};
//   text-align: center;
//   color: ${({ theme }) => theme.text.muted};
// `;

// export const EmptyText = styled.p`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   color: ${({ theme }) => theme.text.muted};
//   margin: 0;
// `;

// ============================================================
// src/features/clients/pages/ClientCreatePage/styles.js
// Reutiliza a linguagem visual da ClientEditPage e adiciona
// componentes específicos de seleção de plano e bandeiras.
// ============================================================
import styled, { keyframes } from 'styled-components';

// ── Animações ─────────────────────────────────────────────────────────────────

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;

// ── Container raiz ────────────────────────────────────────────────────────────

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  padding-bottom: 88px;
  animation: ${fadeInUp} 0.3s ease both;
`;

// ── Header ────────────────────────────────────────────────────────────────────

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border: 1.5px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.text.secondary};
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    color: ${({ theme }) => theme.text.primary};
    border-color: ${({ theme }) => theme.border.strong};
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const PageSubtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.text.secondary};
  margin: 0;
`;

// ── Cards ─────────────────────────────────────────────────────────────────────

export const Card = styled.div`
  background-color: ${({ theme }) => theme.surface.card};
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
`;

export const CardIconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.brand.primary};
  flex-shrink: 0;
`;

export const CardTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
`;

// ── Grid de campos ────────────────────────────────────────────────────────────

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols ?? 2}, 1fr);
  gap: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FullSpan = styled.div`
  grid-column: 1 / -1;
`;

// ── Campos do formulário ──────────────────────────────────────────────────────

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const fieldBase = ({ theme, $hasError }) => `
  width: 100%;
  background-color: ${theme.surface.card};
  border: 1.5px solid ${$hasError ? theme.colors.error.base : theme.colors.neutral[200]};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.text.primary};
  outline: none;
  transition:
    border-color ${theme.transitions.fast},
    box-shadow ${theme.transitions.fast};
  box-sizing: border-box;

  &::placeholder { color: ${theme.colors.neutral[300]}; }

  &:focus {
    border-color: ${$hasError ? theme.colors.error.base : theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${$hasError
      ? theme.colors.error.base + '20'
      : theme.colors.primary[600] + '18'};
  }

  &:disabled {
    background-color: ${theme.colors.neutral[50]};
    color: ${theme.text.muted};
    cursor: not-allowed;
    opacity: 0.75;
  }
`;

export const Input = styled.input`
  ${({ theme, $hasError }) => fieldBase({ theme, $hasError })}
  height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[4]};
`;

export const Select = styled.select`
  ${({ theme, $hasError }) => fieldBase({ theme, $hasError })}
  height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[10]} 0 ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({ theme }) => theme.spacing[3]} center;
`;

export const Textarea = styled.textarea`
  ${({ theme, $hasError }) => fieldBase({ theme, $hasError })}
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

export const FieldError = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.error.base};
`;

export const FieldHint = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.text.muted};
`;

// ── Seção bancária ────────────────────────────────────────────────────────────

export const BankSection = styled.div`
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const BankSectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.text.secondary};
  margin: 0 0 ${({ theme }) => theme.spacing[4]};
`;

// ── Toggle de modo (Plano vs Individual) ──────────────────────────────────────

export const ModeToggle = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[5]};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ModeButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 2px solid ${({ theme, $active }) =>
    $active ? theme.colors.primary[500] : theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primary[50] : 'transparent'};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary[700] : theme.text.secondary};
  cursor: pointer;
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary[400]};
    background-color: ${({ theme }) => theme.colors.primary[50]};
    color: ${({ theme }) => theme.colors.primary[700]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// ── Card de plano ─────────────────────────────────────────────────────────────

export const PlanCard = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  border: 2px solid ${({ theme, $selected }) =>
    $selected ? theme.colors.primary[400] : theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary[50] : theme.surface.card};
  cursor: pointer;
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[400]};
    background-color: ${({ theme }) => theme.colors.primary[50]};
  }
`;

export const PlanCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const PlanName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.text.primary};
`;

export const PlanPrice = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.brand.primary};
  white-space: nowrap;
`;

export const PlanDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.text.muted};
  margin: 0 0 ${({ theme }) => theme.spacing[2]};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

export const PlanFlagsPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const PlanFlagTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.primary[100]};
  color: ${({ theme }) => theme.colors.primary[700]};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

// ── Grid de bandeiras individuais ─────────────────────────────────────────────

export const FlagsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FlagCheckCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 2px solid ${({ theme, $checked }) =>
    $checked ? theme.colors.primary[400] : theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme, $checked }) =>
    $checked ? theme.colors.primary[50] : theme.surface.card};
  cursor: pointer;
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast};
  user-select: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[400]};
    background-color: ${({ theme }) => theme.colors.primary[50]};
  }
`;

export const FlagCheckbox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 2px solid ${({ theme, $checked }) =>
    $checked ? theme.colors.primary[500] : theme.colors.neutral[300]};
  background-color: ${({ theme, $checked }) =>
    $checked ? theme.colors.primary[500] : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast};
`;

export const FlagCheckInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const FlagCheckName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FlagCheckPrice = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.brand.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

// ── Resumo do valor total ─────────────────────────────────────────────────────

export const TotalBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border: 1.5px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

export const TotalLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.text.secondary};
`;

export const TotalValue = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.brand.primary};
`;

// ── Documentos ────────────────────────────────────────────────────────────────

export const DocumentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const DocumentUploadCard = styled.div`
  border: 1.5px dashed ${({ theme, $hasFile }) =>
    $hasFile ? theme.colors.primary[400] : theme.border.strong};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme, $hasFile }) =>
    $hasFile ? theme.colors.primary[50] : theme.colors.neutral[50]};
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[400]};
    background-color: ${({ theme }) => theme.colors.primary[50]};
  }
`;

export const DocumentUploadLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.secondary};
`;

export const DropZone = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  cursor: pointer;
  text-align: center;
  min-height: 88px;
`;

export const DropZoneIcon = styled.div`
  color: ${({ theme, $hasFile }) =>
    $hasFile ? theme.colors.primary[500] : theme.colors.neutral[300]};
  transition: color ${({ theme }) => theme.transitions.fast};
`;

export const DropZoneText = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const DropZoneSubtext = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.text.muted};
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.surface.card};
  border: 1px solid ${({ theme }) => theme.colors.primary[200]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
`;

export const FileInfoText = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const FileName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FileMeta = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.text.muted};
`;

export const RemoveFileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: none;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  color: ${({ theme }) => theme.text.muted};
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.error.light};
    color: ${({ theme }) => theme.colors.error.base};
  }
`;

// ── Footer fixo ───────────────────────────────────────────────────────────────

export const FormFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 240px;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background-color: ${({ theme }) => theme.surface.card};
  border-top: 1px solid ${({ theme }) => theme.border.default};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[3]};
  box-shadow: 0 -4px 16px rgba(35, 27, 21, 0.06);

  @media (max-width: 900px) {
    left: 0;
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

export const CancelButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  border: 1.5px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.text.secondary};
  cursor: pointer;
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    color: ${({ theme }) => theme.text.primary};
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

export const SaveButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $isSubmitting, theme }) =>
    $isSubmitting
      ? theme.colors.primary[700]
      : `linear-gradient(135deg, ${theme.colors.primary[600]}, ${theme.colors.primary[500]})`};
  color: #fff;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: ${({ $isSubmitting }) => ($isSubmitting ? 'not-allowed' : 'pointer')};
  box-shadow: 0 3px 12px ${({ theme }) => theme.colors.primary[900]}35;
  transition:
    background ${({ theme }) => theme.transitions.base},
    transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.base};

  &:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary[700]},
      ${({ theme }) => theme.colors.primary[600]}
    );
    box-shadow: 0 6px 20px ${({ theme }) => theme.colors.primary[900]}45;
    transform: translateY(-1px);
  }
  &:active:not(:disabled) { transform: translateY(0); }
  &:disabled { opacity: 0.65; cursor: not-allowed; }
`;

export const Spinner = styled.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  animation: _spin 0.7s linear infinite;
  @keyframes _spin { to { transform: rotate(360deg); } }
`;

// ── Skeleton ──────────────────────────────────────────────────────────────────

export const SkeletonBar = styled.div`
  height: ${({ $h }) => $h ?? '14px'};
  width: ${({ $w }) => $w ?? '100%'};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.neutral[100]} 25%,
    ${({ theme }) => theme.colors.neutral[50]}  50%,
    ${({ theme }) => theme.colors.neutral[100]} 75%
  );
  background-size: 600px 100%;
  animation: ${shimmer} 1.4s ease infinite;
`;

export const SkeletonCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.border.default};
  margin: ${({ theme }) => theme.spacing[2]} 0;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[4]};
  gap: ${({ theme }) => theme.spacing[2]};
  text-align: center;
  color: ${({ theme }) => theme.text.muted};
`;

export const EmptyText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.text.muted};
  margin: 0;
`;

// ── Barra de progresso de upload ──────────────────────────────────────────────

export const UploadProgressBar = styled.div`
  flex: 1;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: 99px;
  overflow: hidden;
`;

export const UploadProgressFill = styled.div`
  height: 100%;
  width: ${({ $percent }) => $percent ?? 0}%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary[500]},
    ${({ theme }) => theme.colors.primary[400]}
  );
  border-radius: 99px;
  transition: width 300ms ease;
`;

export const UploadProgressLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.text.muted};
  white-space: nowrap;
  min-width: 32px;
  text-align: right;
`;