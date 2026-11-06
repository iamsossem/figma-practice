import { useState } from 'react'
import Button from '../components/button/Button.jsx'
import BookSearchInputForm from '../components/form/BookSearchInputForm.jsx'
import PopupMenuList from '../components/layout/PopupMenuList.jsx'
import PopupTitle from '../components/title/PopupTitle.jsx'
import './SearchFilter.css'

const loanStatuses = ['전체보기', '대출가능']
const categories = ['전체선택', '소설', '과학 서적', '자기계발서', '역사책', '문제집', '어린이', '만화책', '요리책']
const publicationYears = ['최근1년', '최근5년', '전체기간']

function SelectButtons({ options, selected, onSelect, className }) {
  return (
    <div className={`search-filter__buttons ${className}`}>
      {options.map((option) => (
        <Button
          key={option}
          variant="select"
          selected={option === selected}
          onClick={() => onSelect(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  )
}

/**
 * Figma SearchFilter (노드 166:1522)
 *
 * onClose: 닫기와 취소 버튼을 눌렀을 때 실행할 함수
 * onSearch: 검색하기 버튼을 눌렀을 때 실행할 함수
 * panel: 데스크탑 검색 결과 화면 옆에 붙는 패널 모양으로 보여 줄지 여부
 */
function SearchFilter({ onClose, onSearch, panel = false }) {
  const [loanStatus, setLoanStatus] = useState('대출가능')
  const [category, setCategory] = useState('전체선택')
  const [publicationYear, setPublicationYear] = useState('최근1년')

  return (
    <div className={panel ? 'search-filter search-filter--panel' : 'search-filter'}>
      {panel ? (
        <h2 className="search-filter__panel-title">검색조건</h2>
      ) : (
        <PopupTitle onClose={onClose} />
      )}
      <BookSearchInputForm placeholder="나의 행복" showIcon={false} onSearch={onSearch} />
      <section className="search-filter__group">
        <h3 className="search-filter__group-title">대출상태</h3>
        <SelectButtons
          className="search-filter__buttons--two"
          options={loanStatuses}
          selected={loanStatus}
          onSelect={setLoanStatus}
        />
      </section>
      <section className="search-filter__group">
        <h3 className="search-filter__group-title">카테고리</h3>
        <SelectButtons
          className="search-filter__buttons--three"
          options={categories}
          selected={category}
          onSelect={setCategory}
        />
      </section>
      <section className="search-filter__group">
        <h3 className="search-filter__group-title">발행연도</h3>
        <div className="search-filter__publication-year-display">
          <div className="search-filter__year-bar" aria-hidden="true">
            <div className="search-filter__year-bar-fill" />
          </div>
          <div className="search-filter__date-range">
            <p className="search-filter__date-range-label">
              <span className="search-filter__date-label">FROM</span>
              <span>2025.04</span>
            </p>
            <p className="search-filter__date-range-label search-filter__date-range-label--end">
              <span className="search-filter__date-label">TO</span>
              <span>2026.04</span>
            </p>
          </div>
        </div>
        <SelectButtons
          className="search-filter__buttons--three"
          options={publicationYears}
          selected={publicationYear}
          onSelect={setPublicationYear}
        />
      </section>
      {panel ? (
        <Button className="search-filter__panel-button" onClick={onSearch}>
          검색하기
        </Button>
      ) : (
        <PopupMenuList submitLabel="검색하기" onCancel={onClose} onSubmit={onSearch} />
      )}
    </div>
  )
}

export default SearchFilter
