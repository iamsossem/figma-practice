import coverConditionsOfHappiness from '../assets/images/cover-conditions-of-happiness.webp'
import Notice from '../components/card/Notice.jsx'
import ReservationBookCard from '../components/card/ReservationBookCard.jsx'
import ReservationLibraryInfo from '../components/card/ReservationLibraryInfo.jsx'
import NoteIcon from '../components/icons/NoteIcon.jsx'
import PopupMenuList from '../components/layout/PopupMenuList.jsx'
import ReservationSteps from '../components/status/ReservationSteps.jsx'
import PopupTitle from '../components/title/PopupTitle.jsx'
import ReservationGuide from '../components/title/ReservationGuide.jsx'
import './BookReservation.css'
import './BookReservationConfirmInfo.css'

const libraryInfo = [
  { label: '장소', value: '도서관 이름 북부 지점 1F' },
  { label: '시간', value: '48시간 이내 수령 가능' },
]

const noticeItems = [
  '예약 완료 후 48 시간 이내에 수령하지 않으시면 예약이 자동으로 취소됩니다.',
  '도서 대출 시 회원증 혹은 모바일 바코드를 지참해 주세요.',
]

/**
 * Figma BookReservation:ConfirmInfo (노드 180:834)
 *
 * onClose: 닫기와 취소 버튼을 눌렀을 때 실행할 함수
 * onNext: 다음 단계로 버튼을 눌렀을 때 실행할 함수
 */
function BookReservationConfirmInfo({ onClose, onNext }) {
  return (
    <div className="book-reservation">
      <PopupTitle title="도서예약" onClose={onClose} />
      <div className="book-reservation__summary">
        <ReservationSteps stepNumber="02" />
        <ReservationGuide
          title="예약 정보 확인"
          description="선택하신 도서의 예약 정보를 확인해 주세요."
        />
        <ReservationBookCard
          coverImage={<img src={coverConditionsOfHappiness} alt="" />}
          showHolding={false}
        />
        <ReservationLibraryInfo items={libraryInfo} />
      </div>
      <div className="book-reservation__detail">
        <section className="book-reservation-confirm-info__curator-note">
          <NoteIcon />
          <div className="book-reservation-confirm-info__curator-note-frame">
            <h3 className="book-reservation-confirm-info__curator-note-title">큐레이터 노트</h3>
            <p className="book-reservation-confirm-info__curator-note-description">
              큐레이터 노트에 내용을 입력합니다. 큐레이터 노트에 내용을 입력합니다. 큐레이터 노트에
              내용을 입력합니다. 큐레이터 노트에 내용을 입력합니다.
            </p>
          </div>
        </section>
        <Notice items={noticeItems} />
        <PopupMenuList onCancel={onClose} onSubmit={onNext} />
      </div>
    </div>
  )
}

export default BookReservationConfirmInfo
