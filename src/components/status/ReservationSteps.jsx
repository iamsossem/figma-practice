import StepTitle from '../title/StepTitle.jsx'
import StepStatus from './StepStatus.jsx'
import './ReservationSteps.css'

const stepList = ['01', '02', '03']

/**
 * Figma ReservationSteps (노드 178:263)
 * Figma 완성화면처럼 현재 단계의 막대 하나만 진하게 표시한다.
 *
 * stepNumber: 현재 단계. '01', '02', '03' 중 하나
 */
function ReservationSteps({ stepNumber = '01', className = '', ...rest }) {
  return (
    <div className={`reservation-steps ${className}`.trim()} {...rest}>
      <StepTitle stepNumber={stepNumber} />
      <div
        className="reservation-steps__step-indicator"
        role="img"
        aria-label={`전체 ${stepList.length}단계 중 ${Number(stepNumber)}단계`}
      >
        {stepList.map((step) => (
          <StepStatus key={step} status={step === stepNumber ? 'active' : 'waiting'} />
        ))}
      </div>
    </div>
  )
}

export default ReservationSteps
