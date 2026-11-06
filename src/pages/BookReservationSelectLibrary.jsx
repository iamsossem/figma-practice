import { useState } from 'react'
import coverConditionsOfHappiness from '../assets/images/cover-conditions-of-happiness.webp'
import Button from '../components/button/Button.jsx'
import NearbyLibraryItem from '../components/card/NearbyLibraryItem.jsx'
import ReservationBookCard from '../components/card/ReservationBookCard.jsx'
import MapIcon from '../components/icons/MapIcon.jsx'
import PopupMenuList from '../components/layout/PopupMenuList.jsx'
import ReservationSteps from '../components/status/ReservationSteps.jsx'
import PopupTitle from '../components/title/PopupTitle.jsx'
import ReservationGuide from '../components/title/ReservationGuide.jsx'
import './BookReservation.css'
import './BookReservationSelectLibrary.css'

const libraries = [
  {
    libraryName: '별마당 도서관',
    location: '1.2km 서울특별시 강남구',
    openStatus: '운영 중  10:00 ~ 22:00',
    remainingCount: '잔여 3권',
    isFavorite: true,
  },
  {
    libraryName: '지혜의 숲',
    location: '5.8km 경기도 파주시',
    openStatus: '운영 중  10:00 ~ 20:00',
    remainingCount: '잔여 5권',
    isFavorite: false,
  },
  {
    libraryName: '청운 문학 도서관',
    location: '3.2km 서울특별시 종로구',
    remainingCount: '잔여 1권',
    isFavorite: false,
    isClosed: true,
  },
]

/**
 * Figma BookReservation:SelectLibrary (노드 180:663)
 *
 * onClose: 닫기와 취소 버튼을 눌렀을 때 실행할 함수
 * onNext: 다음 단계로 버튼을 눌렀을 때 실행할 함수
 */
function BookReservationSelectLibrary({ onClose, onNext }) {
  const [selectedLibrary, setSelectedLibrary] = useState(libraries[0].libraryName)

  function getStatus({ libraryName, isClosed }) {
    if (isClosed) return 'closed'
    return libraryName === selectedLibrary ? 'selected' : 'default'
  }

  return (
    <div className="book-reservation">
      <PopupTitle title="도서예약" onClose={onClose} />
      <div className="book-reservation__summary">
        <ReservationSteps stepNumber="01" />
        <ReservationGuide title="수령 도서관 선택" description="대출 가능한 도서관 입니다." />
        <ReservationBookCard
          coverImage={<img src={coverConditionsOfHappiness} alt="" />}
          category="에세이"
          title="행복의 조건"
          author="이영희"
          holdingCount="3"
        />
      </div>
      <div className="book-reservation__detail">
        <div className="book-reservation-select-library__nearby-title">
          <h3 className="book-reservation-select-library__nearby-libraries-title">가까운 도서관</h3>
          <Button icon={<MapIcon />}>지도보기</Button>
        </div>
        <div className="book-reservation-select-library__nearby-library-list">
          {libraries.map(({ isClosed, ...library }) => (
            <NearbyLibraryItem
              key={library.libraryName}
              status={getStatus({ ...library, isClosed })}
              onClick={() => setSelectedLibrary(library.libraryName)}
              {...library}
            />
          ))}
        </div>
        <PopupMenuList onCancel={onClose} onSubmit={onNext} />
      </div>
    </div>
  )
}

export default BookReservationSelectLibrary
