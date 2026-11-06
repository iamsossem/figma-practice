import { useState } from 'react'
import courseImage from '../assets/images/course-image.webp'
import coverMyHappiness from '../assets/images/cover-my-happiness.webp'
import coverSecretOfUniverse from '../assets/images/cover-secret-of-universe.webp'
import coverSelfImprovement from '../assets/images/cover-self-improvement.webp'
import heroBanner from '../assets/images/hero-banner.webp'
import Button from '../components/button/Button.jsx'
import MainCategory from '../components/card/MainCategory.jsx'
import SearchedBookCardMobile from '../components/card/SearchedBookCardMobile.jsx'
import BookSearchInputForm from '../components/form/BookSearchInputForm.jsx'
import ListIcon from '../components/icons/ListIcon.jsx'
import LocationIcon from '../components/icons/LocationIcon.jsx'
import MapIcon from '../components/icons/MapIcon.jsx'
import ReserveIcon from '../components/icons/ReserveIcon.jsx'
import TopMenu from '../components/layout/TopMenu.jsx'
import RecommendedBookTitle from '../components/title/RecommendedBookTitle.jsx'
import './MobileMainPage.css'

const categories = [
  { label: '내가 빌린 책 보기', Icon: ListIcon },
  { label: '책 배달 서비스', Icon: MapIcon },
  { label: '단골도서관', Icon: ReserveIcon },
  { label: '통합 도서관 검색', Icon: LocationIcon },
]

const books = [
  { cover: coverMyHappiness, category: '에세이', title: '나의 행복', author: '박지영', loanStatus: 'success' },
  { cover: coverSecretOfUniverse, category: '과학', title: '우주의 비밀', author: '박재현', loanStatus: 'error' },
  { cover: coverSelfImprovement, category: '자기계발', title: '자기계발, 꿈을 이루다', author: '김지우', loanStatus: 'success' },
]

/**
 * Figma mobile/MainPage (노드 153:437)
 *
 * onSearch: 검색할 때 실행할 함수
 */
function MobileMainPage({ onSearch }) {
  const [bookList, setBookList] = useState('recommended')

  return (
    <div className="mobile-main-page">
      <TopMenu />
      <section className="mobile-main-page__hero-section">
        <div className="mobile-main-page__hero-banner">
          <img src={heroBanner} alt="" />
        </div>
        <div className="mobile-main-page__hero-quick-menu">
          <div className="mobile-main-page__hero-headline">
            <h1 className="mobile-main-page__hero-welcome-message">
              수원시 도서관에 오신 것을 환영합니다.
            </h1>
            <p className="mobile-main-page__body-text">
              지식과 문화가 공존하는 공간,
              <br />
              일상을 더 풍요롭게 만드는 당신의 파트너 입니다.
            </p>
            <Button>{'전체 도서관 보기 >'}</Button>
          </div>
          <div className="mobile-main-page__quick-menu">
            {categories.map(({ label, Icon }) => (
              <MainCategory key={label} iconSlot={<Icon />} categoryLabel={label} />
            ))}
          </div>
        </div>
        <BookSearchInputForm className="mobile-main-page__search-input-form" onSearch={onSearch} />
      </section>
      <section className="mobile-main-page__recommended-books-heading">
        <div className="mobile-main-page__recommended-books-title">
          <p className="mobile-main-page__body-text">엄선된 도서 컬렉션</p>
          <h2 className="mobile-main-page__hero-text">지금, 이 책</h2>
        </div>
        <RecommendedBookTitle property1={bookList} onSelect={setBookList} />
      </section>
      <div className="mobile-main-page__recommended-books-list">
        {books.map(({ cover, ...book }) => (
          <SearchedBookCardMobile
            key={book.title}
            coverImage={<img src={cover} alt="" />}
            showLoanStatus={false}
            showCardButtons={false}
            {...book}
          />
        ))}
      </div>
      <div className="mobile-main-page__library-course">
        <section className="mobile-main-page__library-info-section">
          <h2 className="mobile-main-page__hero-text">
            함께 읽고,
            <br />
            함께 성정합니다.
          </h2>
          <p className="mobile-main-page__body-text">
            수원시 도서관에서는 매주 작가와의 만남, 독서 토론, 어린이 창의 수업 등 다양한 문화
            프로그램이 열리고 있습니다. 당신의 새로운 영감을 지금 찾아보세요.
          </p>
          <div className="mobile-main-page__button-list">
            <Button className="mobile-main-page__button">
              도서관
              <br />
              행사 안내
            </Button>
            <Button className="mobile-main-page__button">
              도서관
              <br />
              소식지 구독
            </Button>
          </div>
        </section>
        <section className="mobile-main-page__course-section">
          <div className="mobile-main-page__course-image">
            <img src={courseImage} alt="" />
          </div>
          <div className="mobile-main-page__course-info">
            <p className="mobile-main-page__hero-text">120+</p>
            <p className="mobile-main-page__course-description">
              이번달 진행되는 오프라인 문화 클래스와 전시회 개수
            </p>
          </div>
        </section>
      </div>
      <footer className="mobile-main-page__footer-text">
        <p>@2026 소은경 지역 사회의 지식 공유와 웹접근성을 위해 노력합니다.</p>
      </footer>
    </div>
  )
}

export default MobileMainPage
