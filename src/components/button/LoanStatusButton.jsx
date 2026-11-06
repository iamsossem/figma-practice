import './LoanStatusButton.css'

const labelMap = {
  success: '대출가능',
  error: '대출불가',
}

/**
 * Figma LoanStatusButton (노드 166:872)
 * 이름은 Button이지만 눌리지 않는 상태 배지여서 button 태그를 쓰지 않는다.
 * 스크린 리더에서 "대출가능, 배지"처럼 읽히도록 aria-label을 넣는다.
 *
 * loanStatus: 'success'(대출가능) 또는 'error'(대출불가)
 */
function LoanStatusButton({ loanStatus = 'success', className = '', ...rest }) {
  const label = labelMap[loanStatus]

  return (
    <div
      role="img"
      aria-label={`${label}, 배지`}
      className={`loan-status-button loan-status-button--${loanStatus} ${className}`.trim()}
      {...rest}
    >
      {label}
    </div>
  )
}

export default LoanStatusButton
