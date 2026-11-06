import bookCover from '../../assets/images/book-cover.webp'
import Button from '../button/Button.jsx'
import LoanStatusButton from '../button/LoanStatusButton.jsx'
import StatusCheck from '../status/StatusCheck.jsx'
import './SearchedBookCardMobile.css'

/**
 * Figma SearchedBookCard/mobile (노드 126:82)
 * 코드 이름에는 /를 쓸 수 없어 SearchedBookCardMobile로 쓴다.
 *
 * coverImage: 표지 자리에 넣을 내용. 없으면 Figma의 샘플 표지를 보여 준다.
 * category, title, author: 책 분류, 제목, 저자
 * loanStatus: 'success' 또는 'error'. 안에 든 LoanStatusButton과 StatusCheck에 함께 전달한다.
 * showLoanStatus: 표지 아래 StatusCheck를 보여 줄지 여부
 * showCardButtons: 아래 버튼 묶음을 보여 줄지 여부
 * onDetailClick, onReserveClick: 상세보기, 예약하기 버튼을 눌렀을 때 실행할 함수
 */
function SearchedBookCardMobile({
  coverImage = null,
  category = '소설',
  title = '별 헤는 밤',
  author = '김민수',
  loanStatus = 'success',
  showLoanStatus = true,
  showCardButtons = true,
  onDetailClick,
  onReserveClick,
  className = '',
  ...rest
}) {
  return (
    <article className={`searched-book-card-mobile ${className}`.trim()} {...rest}>
      <div className="searched-book-card-mobile__book-area">
        <div className="searched-book-card-mobile__cover-image">
          {coverImage ?? <img src={bookCover} alt="" />}
        </div>
        <div className="searched-book-card-mobile__book-info">
          <p className="searched-book-card-mobile__category">{category}</p>
          <h3 className="searched-book-card-mobile__title">{title}</h3>
          <p className="searched-book-card-mobile__author">{author}</p>
        </div>
      </div>
      {showLoanStatus && <StatusCheck loanStatus={loanStatus} />}
      {showCardButtons && (
        <div className="searched-book-card-mobile__button-group">
          <Button className="searched-book-card-mobile__button" onClick={onDetailClick}>
            상세보기
          </Button>
          <Button className="searched-book-card-mobile__button" onClick={onReserveClick}>
            예약하기
          </Button>
        </div>
      )}
      <LoanStatusButton
        className="searched-book-card-mobile__loan-status-button"
        loanStatus={loanStatus}
      />
    </article>
  )
}

export default SearchedBookCardMobile
