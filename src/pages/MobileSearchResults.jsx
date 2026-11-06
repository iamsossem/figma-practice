import coverConditionsOfHappiness from '../assets/images/cover-conditions-of-happiness.webp'
import coverHappyDay from '../assets/images/cover-happy-day.webp'
import coverJourneyToFindMe from '../assets/images/cover-journey-to-find-me.webp'
import SearchedBookCardMobile from '../components/card/SearchedBookCardMobile.jsx'
import FilterIcon from '../components/icons/FilterIcon.jsx'
import TopMenu from '../components/layout/TopMenu.jsx'
import SearchFilter from './SearchFilter.jsx'
import './MobileSearchResults.css'

const books = [
  { cover: coverConditionsOfHappiness, category: '에세이', title: '행복의 조건', author: '이영희', loanStatus: 'success' },
  { cover: coverJourneyToFindMe, category: '자기계발', title: '나를 찾는 여행', author: '박지현', loanStatus: 'error' },
  { cover: coverHappyDay, category: '소설', title: '행복한 하루', author: '최민수', loanStatus: 'success' },
]

/**
 * Figma mobile/SearchResults (노드 166:1331)
 *
 * onFilterClick: 조건 버튼을 눌렀을 때 실행할 함수
 * onReserveClick: 예약하기 버튼을 눌렀을 때 실행할 함수
 */
function MobileSearchResults({ onFilterClick, onReserveClick }) {
  return (
    <div className="mobile-search-results">
      <TopMenu />
      <div className="mobile-search-results__body">
        <aside className="mobile-search-results__filter-panel">
          <SearchFilter panel />
        </aside>
        <div className="mobile-search-results__content">
          <div className="mobile-search-results__search-result-header">
            <div className="mobile-search-results__search-result-title">
              <p className="mobile-search-results__title">검색결과</p>
              <h1 className="mobile-search-results__subtitle">나의 행복</h1>
              <p className="mobile-search-results__search-result-count">검색결과 : 03권</p>
            </div>
            {/* Figma 프레임 48 x 49의 아이콘을 60 x 49로 늘려 쓰고 있어 그대로 맞춘다. */}
            <button type="button" className="mobile-search-results__filter" onClick={onFilterClick}>
              <FilterIcon viewBox="0 0 48 49" preserveAspectRatio="none" />
              <span className="mobile-search-results__filter-label">조건</span>
            </button>
          </div>
          <div className="mobile-search-results__recommended-books-list">
            {books.map(({ cover, ...book }) => (
              <SearchedBookCardMobile
                key={book.title}
                coverImage={<img src={cover} alt="" />}
                onReserveClick={onReserveClick}
                {...book}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileSearchResults
