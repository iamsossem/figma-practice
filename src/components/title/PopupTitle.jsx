import Close from '../icons/Close.jsx'
import './PopupTitle.css'

/**
 * Figma PopupTitle (노드 166:1521)
 *
 * title: 제목 글자
 * onClose: 닫기 버튼을 눌렀을 때 실행할 함수
 */
function PopupTitle({ title = '도서검색', onClose, className = '', ...rest }) {
  return (
    <div className={`popup-title ${className}`.trim()} {...rest}>
      <button type="button" className="popup-title__close" aria-label="닫기" onClick={onClose}>
        <Close />
      </button>
      <h2 className="popup-title__title">{title}</h2>
    </div>
  )
}

export default PopupTitle
