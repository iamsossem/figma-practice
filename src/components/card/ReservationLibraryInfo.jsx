import './ReservationLibraryInfo.css'

/**
 * Figma ReservationLibraryInfo (노드 194:905)
 *
 * items: 보여 줄 항목 목록. { label, value } 형태로 넘긴다.
 * stacked: 이름 아래에 값을 놓을지 여부. 기본은 이름 옆에 값을 놓는다.
 */
function ReservationLibraryInfo({ items = [], stacked = false, className = '', ...rest }) {
  const layoutClassName = stacked ? 'reservation-library-info--stacked' : ''

  return (
    <dl
      className={`reservation-library-info ${layoutClassName} ${className}`.replace(/\s+/g, ' ').trim()}
      {...rest}
    >
      {items.map(({ label, value }) => (
        <div className="reservation-library-info__item" key={label}>
          <dt className="reservation-library-info__label">{label}</dt>
          <dd className="reservation-library-info__value">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export default ReservationLibraryInfo
