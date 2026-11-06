import { useState } from 'react'
import coverConditionsOfHappiness from '../assets/images/cover-conditions-of-happiness.webp'
import Notice from '../components/card/Notice.jsx'
import ReservationBookCard from '../components/card/ReservationBookCard.jsx'
import ReservationLibraryInfo from '../components/card/ReservationLibraryInfo.jsx'
import NotificationSetting from '../components/form/NotificationSetting.jsx'
import PopupMenuList from '../components/layout/PopupMenuList.jsx'
import ReservationSteps from '../components/status/ReservationSteps.jsx'
import PopupTitle from '../components/title/PopupTitle.jsx'
import ReservationGuide from '../components/title/ReservationGuide.jsx'
import './BookReservation.css'

const libraryInfo = [
  { label: '수량장소', value: '도서관 이름 북부 지점 1F' },
  { label: '수령시간', value: '2026.04.22(수) ~ 2026.04.24(금)' },
]

const noticeItems = [
  '도서 준비 완료 시 카카오톡 알림 톡으로 바코드가 발송됩니다.',
  <>
    알림 발송 후 <strong>48시간</strong> 이내에 수령하지 않으시면 예약이 자동 취소됩니다.
  </>,
]

/**
 * Figma BookReservation:Complete (노드 194:947)
 *
 * onClose: 닫기와 홈으로 버튼을 눌렀을 때 실행할 함수
 */
function BookReservationComplete({ onClose }) {
  const [notification, setNotification] = useState('enabled')

  function toggleNotification() {
    setNotification(notification === 'enabled' ? 'disabled' : 'enabled')
  }

  return (
    <div className="book-reservation">
      <PopupTitle title="도서예약" onClose={onClose} />
      <div className="book-reservation__summary">
        <ReservationSteps stepNumber="03" />
        <ReservationGuide
          title="예약이 완료되었습니다."
          description="도서가 준비되면 알림톡으로 안내해 드립니다."
        />
        <ReservationBookCard
          coverImage={<img src={coverConditionsOfHappiness} alt="" />}
          showHolding={false}
        />
        <ReservationLibraryInfo items={libraryInfo} stacked />
      </div>
      <div className="book-reservation__detail">
        <Notice title="알림 및 유의사항" items={noticeItems} />
        <NotificationSetting status={notification} onClick={toggleNotification} />
        <PopupMenuList
          cancelLabel="홈으로"
          submitLabel="예약 내역 확인"
          equalWidth
          onCancel={onClose}
        />
      </div>
    </div>
  )
}

export default BookReservationComplete
