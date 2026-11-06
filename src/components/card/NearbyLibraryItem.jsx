import './NearbyLibraryItem.css'

/**
 * Figma NearbyLibraryItem (노드 180:573)
 * selected와 default는 고를 수 있어 button으로, closed는 고를 수 없어 div로 만든다.
 * button 안에는 p와 div를 넣을 수 없어 안쪽을 모두 span으로 만든다.
 *
 * status: 'selected', 'default', 'closed' 중 하나
 * libraryName, location: 도서관 이름, 거리와 위치
 * openStatus: 운영 시간. closed에서는 Figma처럼 "금일 운영 안함"으로 고정된다.
 * remainingCount: 잔여 권수 글자
 * isFavorite: 단골도서관 배지를 보여 줄지 여부
 * onClick: 눌렀을 때 실행할 함수. closed에서는 실행되지 않는다.
 */
function NearbyLibraryItem({
  status = 'selected',
  libraryName = '도서관이름',
  location = '0.8km 경기도 수원시 장안구',
  openStatus = '운영 중  09:00 ~ 22:00',
  remainingCount = '잔여 1권',
  isFavorite = true,
  onClick,
  className = '',
  ...rest
}) {
  const isClosed = status === 'closed'
  const Root = isClosed ? 'div' : 'button'
  const rootProps = isClosed
    ? {}
    : { type: 'button', 'aria-pressed': status === 'selected', onClick }

  return (
    <Root
      className={`nearby-library-item nearby-library-item--${status} ${className}`.trim()}
      {...rootProps}
      {...rest}
    >
      <span className="nearby-library-item__nearby-library-content">
        <span className="nearby-library-item__library-name">{libraryName}</span>
        <span className="nearby-library-item__location">{location}</span>
        <span className="nearby-library-item__open-status-and-remaining">
          <span className="nearby-library-item__open-status">
            <span aria-hidden="true">●</span>
            <span>{isClosed ? '금일 운영 안함' : openStatus}</span>
          </span>
          <span className="nearby-library-item__remaining-count">{remainingCount}</span>
        </span>
      </span>
      {isFavorite && <span className="nearby-library-item__favorite-library">단골도서관</span>}
    </Root>
  )
}

export default NearbyLibraryItem
