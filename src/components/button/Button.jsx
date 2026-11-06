import './Button.css'

/**
 * Figma Button 컴포넌트 (노드 126:28)
 *
 * variant
 * - primary: 기본 버튼. 호버와 눌림은 CSS가 자동으로 처리한다.
 * - cancel: 취소 버튼
 * - select: 선택 버튼. selected 값으로 선택/선택안됨을 표시한다.
 *
 * icon: 글자 앞에 넣을 아이콘. primary 버튼에서 사용한다.
 */
function Button({
  children,
  variant = 'primary',
  selected = false,
  icon = null,
  type = 'button',
  className = '',
  ...rest
}) {
  const classNames = [
    'button',
    `button--${variant}`,
    variant === 'select' && selected && 'button--selected',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      className={classNames}
      aria-pressed={variant === 'select' ? selected : undefined}
      {...rest}
    >
      {icon && (
        <span className="button__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </button>
  )
}

export default Button
