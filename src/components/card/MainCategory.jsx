import './MainCategory.css'

/**
 * Figma MainCategory (노드 126:32)
 * 메인 화면의 퀵 메뉴여서 button 태그를 쓴다. 누를 때 할 일은 onClick으로 전달한다.
 *
 * iconSlot: 글자 위에 넣을 아이콘
 * categoryLabel: 표시할 글자
 */
function MainCategory({
  iconSlot = null,
  categoryLabel = '내가 빌린 책 보기',
  className = '',
  ...rest
}) {
  return (
    <button type="button" className={`main-category ${className}`.trim()} {...rest}>
      <span className="main-category__icon-slot" aria-hidden="true">
        {iconSlot}
      </span>
      <span className="main-category__category-label">{categoryLabel}</span>
    </button>
  )
}

export default MainCategory
