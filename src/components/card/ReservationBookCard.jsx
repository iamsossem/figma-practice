import bookCover from '../../assets/images/book-cover.webp'
import './ReservationBookCard.css'

/**
 * Figma ReservationBookCard (노드 178:306)
 *
 * coverImage: 표지 자리에 넣을 내용. 없으면 Figma의 샘플 표지를 보여 준다.
 * category, title, author: 책 분류, 제목, 저자
 * holdingCount: 소장 중인 지점 수
 * showHolding: 소장 정보를 보여 줄지 여부
 */
function ReservationBookCard({
  coverImage = null,
  category = '소설',
  title = '별 헤는 밤',
  author = '김민수',
  holdingCount = '4',
  showHolding = true,
  className = '',
  ...rest
}) {
  return (
    <div className={`reservation-book-card ${className}`.trim()} {...rest}>
      <div className="reservation-book-card__cover-image">
        {coverImage ?? <img src={bookCover} alt="" />}
      </div>
      <div className="reservation-book-card__right-book-info">
        <div className="reservation-book-card__book-info">
          <p className="reservation-book-card__category">{category}</p>
          <h3 className="reservation-book-card__title">{title}</h3>
          <p className="reservation-book-card__author">{author}</p>
        </div>
        {showHolding && (
          <p className="reservation-book-card__holding-info">
            <svg
              className="reservation-book-card__holding-mark"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="6" />
              <circle cx="7" cy="7" r="3.2" />
            </svg>
            <span>{holdingCount}</span>
            <span>지점에서 소장 중</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default ReservationBookCard
