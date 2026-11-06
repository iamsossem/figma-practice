import './StepStatus.css'

/**
 * Figma StepStatus (노드 178:236)
 *
 * status: 'active'(현재 단계) 또는 'waiting'(대기 단계)
 */
function StepStatus({ status = 'active', className = '', ...rest }) {
  return <div className={`step-status step-status--${status} ${className}`.trim()} {...rest} />
}

export default StepStatus
