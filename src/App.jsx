import { useState } from 'react'
import BookReservationComplete from './pages/BookReservationComplete.jsx'
import BookReservationConfirmInfo from './pages/BookReservationConfirmInfo.jsx'
import BookReservationSelectLibrary from './pages/BookReservationSelectLibrary.jsx'
import MobileMainPage from './pages/MobileMainPage.jsx'
import MobileSearchResults from './pages/MobileSearchResults.jsx'
import SearchFilter from './pages/SearchFilter.jsx'

/**
 * 완성본의 모바일 화면 6개를 버튼으로 오가며 볼 수 있게 한다.
 * 라이브러리를 추가하지 않고 지금 보여 줄 화면의 이름만 기억한다.
 */
function App() {
  const [screen, setScreen] = useState('main')

  function goTo(nextScreen) {
    setScreen(nextScreen)
    window.scrollTo(0, 0)
  }

  return (
    <main>
      {screen === 'main' && <MobileMainPage onSearch={() => goTo('searchResults')} />}
      {screen === 'searchResults' && (
        <MobileSearchResults
          onFilterClick={() => goTo('searchFilter')}
          onReserveClick={() => goTo('selectLibrary')}
        />
      )}
      {screen === 'searchFilter' && (
        <SearchFilter
          onClose={() => goTo('searchResults')}
          onSearch={() => goTo('searchResults')}
        />
      )}
      {screen === 'selectLibrary' && (
        <BookReservationSelectLibrary
          onClose={() => goTo('searchResults')}
          onNext={() => goTo('confirmInfo')}
        />
      )}
      {screen === 'confirmInfo' && (
        <BookReservationConfirmInfo
          onClose={() => goTo('selectLibrary')}
          onNext={() => goTo('complete')}
        />
      )}
      {screen === 'complete' && <BookReservationComplete onClose={() => goTo('main')} />}
    </main>
  )
}

export default App
