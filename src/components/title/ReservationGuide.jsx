import './ReservationGuide.css'

/**
 * Figma ReservationGuide (노드 180:756)
 *
 * title: 안내 제목
 * description: 안내 설명
 */
function ReservationGuide({ title, description, className = '', ...rest }) {
  return (
    <div className={`reservation-guide ${className}`.trim()} {...rest}>
      <h3 className="reservation-guide__title">{title}</h3>
      <p className="reservation-guide__description">{description}</p>
    </div>
  )
}

export default ReservationGuide
