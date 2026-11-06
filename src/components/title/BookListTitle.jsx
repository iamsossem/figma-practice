import './BookListTitle.css'

/**
 * Figma BookListTitle (노드 145:24)
 *
 * label: 표시할 글자
 * state: 'default' 또는 'clicked'. 'clicked'이면 아래에 선이 생긴다.
 */
function BookListTitle({ label = '추천도서', state = 'default', className = '', ...rest }) {
  const isClicked = state === 'clicked'
  const classNames = ['book-list-title', isClicked && 'book-list-title--clicked', className]
    .filter(Boolean)
    .join(' ')

  return (
    <button type="button" className={classNames} aria-pressed={isClicked} {...rest}>
      {label}
    </button>
  )
}

export default BookListTitle
