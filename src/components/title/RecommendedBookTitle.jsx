import BookListTitle from './BookListTitle.jsx'
import './RecommendedBookTitle.css'

const itemList = [
  { label: '추천도서', value: 'recommended' },
  { label: '신작도서', value: 'new' },
  { label: '인기도서', value: 'popular' },
]

/**
 * Figma RecommendedBookTitle (노드 153:810)
 * Figma 속성 이름 Property 1을 코드에서는 띄어쓰기 없이 property1로 쓴다.
 *
 * property1: 'recommended', 'new', 'popular' 중 하나
 * onSelect: 항목을 눌렀을 때 실행할 함수. 누른 항목의 값을 받는다.
 */
function RecommendedBookTitle({ property1 = 'recommended', onSelect, className = '', ...rest }) {
  return (
    <div className={`recommended-book-title ${className}`.trim()} {...rest}>
      {itemList.map(({ label, value }) => (
        <BookListTitle
          key={value}
          label={label}
          state={property1 === value ? 'clicked' : 'default'}
          onClick={() => onSelect?.(value)}
        />
      ))}
    </div>
  )
}

export default RecommendedBookTitle
