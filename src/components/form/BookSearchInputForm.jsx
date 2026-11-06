import speakIcon from '../../assets/icons/speak-icon.svg?raw'
import searchIcon from '../../assets/icons/search-icon.svg?raw'
import './BookSearchInputForm.css'

/**
 * Figma BookSearchInputForm (노드 128:10)
 * 아이콘 색을 CSS 토큰으로 정하려고 SVG 내용을 ?raw로 읽어 페이지에 직접 넣는다.
 * 프로젝트 안의 고정 파일만 넣으므로 dangerouslySetInnerHTML을 써도 안전하다.
 *
 * placeholder: 입력칸에 미리 보여 줄 안내 글자
 * showIcon: 음성 검색, 검색 버튼을 보여 줄지 여부
 * value, onChange: 입력값을 바깥에서 관리할 때 함께 넘긴다. onChange는 input의 이벤트를 받는다.
 * defaultValue: 입력값을 바깥에서 관리하지 않을 때의 처음 값
 * onSearch: Enter나 검색 버튼으로 검색할 때 실행할 함수. 입력한 글자를 받는다.
 * onVoiceClick: 음성 검색 버튼을 눌렀을 때 실행할 함수
 */
function BookSearchInputForm({
  placeholder = '어떤 책을 찾으세요?',
  showIcon = true,
  value,
  defaultValue,
  onChange,
  onSearch,
  onVoiceClick,
  className = '',
  ...rest
}) {
  function handleSubmit(event) {
    event.preventDefault()
    onSearch?.(new FormData(event.currentTarget).get('keyword'))
  }

  return (
    <form
      role="search"
      className={`book-search-input-form ${className}`.trim()}
      onSubmit={handleSubmit}
      {...rest}
    >
      <input
        type="search"
        name="keyword"
        className="book-search-input-form__book-search-input"
        placeholder={placeholder}
        aria-label="도서 검색어"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      {showIcon && (
        <div className="book-search-input-form__search-icon-wrapper">
          <button
            type="button"
            className="book-search-input-form__speak-icon"
            aria-label="음성 검색"
            onClick={onVoiceClick}
          >
            <span
              className="book-search-input-form__icon-frame"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: speakIcon }}
            />
          </button>
          <button type="submit" className="book-search-input-form__search-icon" aria-label="검색">
            <span
              className="book-search-input-form__icon-frame"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: searchIcon }}
            />
          </button>
        </div>
      )}
    </form>
  )
}

export default BookSearchInputForm
