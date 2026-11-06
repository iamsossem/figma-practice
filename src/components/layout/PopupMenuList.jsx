import Button from '../button/Button.jsx'
import './PopupMenuList.css'

/**
 * Figma PopupMenuList (노드 168:1677)
 * 팝업 화면 맨 아래의 버튼 두 개 묶음이다.
 *
 * cancelLabel, submitLabel: 왼쪽 취소 버튼과 오른쪽 기본 버튼의 글자
 * onCancel, onSubmit: 각 버튼을 눌렀을 때 실행할 함수
 * equalWidth: 두 버튼 폭을 같게 할지 여부. 기본은 오른쪽 버튼이 남는 폭을 채운다.
 */
function PopupMenuList({
  cancelLabel = '취소',
  submitLabel = '다음 단계로 →',
  onCancel,
  onSubmit,
  equalWidth = false,
  className = '',
  ...rest
}) {
  const cancelClassName = equalWidth ? 'popup-menu-list__button' : ''

  return (
    <div className={`popup-menu-list ${className}`.trim()} {...rest}>
      <Button variant="cancel" className={cancelClassName} onClick={onCancel}>
        {cancelLabel}
      </Button>
      <Button className="popup-menu-list__button" onClick={onSubmit}>
        {submitLabel}
      </Button>
    </div>
  )
}

export default PopupMenuList
