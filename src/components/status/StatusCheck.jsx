import availableIcon from '../../assets/icons/status-check-success.png'
import unavailableIcon from '../../assets/icons/status-check-error.png'
import './StatusCheck.css'

const statusMap = {
  success: { label: '대출가능', icon: availableIcon },
  error: { label: '대출불가', icon: unavailableIcon },
}

/**
 * Figma StatusCheck (노드 126:77)
 *
 * loanStatus: 'success'(대출가능) 또는 'error'(대출불가)
 */
function StatusCheck({ loanStatus = 'success', className = '', ...rest }) {
  const { label, icon } = statusMap[loanStatus]

  return (
    <div className={`status-check status-check--${loanStatus} ${className}`.trim()} {...rest}>
      <img className="status-check__icon" src={icon} alt="" />
      <span className="status-check__label">{label}</span>
    </div>
  )
}

export default StatusCheck
