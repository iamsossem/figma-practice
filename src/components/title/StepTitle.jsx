import './StepTitle.css'

/**
 * Figma StepTitle (노드 178:229)
 *
 * stepNumber: STEP 뒤에 표시할 번호
 */
function StepTitle({ stepNumber = '01', className = '', ...rest }) {
  return (
    <p className={`step-title ${className}`.trim()} {...rest}>
      <span>STEP</span> <span>{stepNumber}</span>
    </p>
  )
}

export default StepTitle
