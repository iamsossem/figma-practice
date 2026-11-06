import Menu from '../icons/Menu.jsx'
import SiteLogo from './SiteLogo.jsx'
import UserIcon from '../icons/UserIcon.jsx'
import './TopMenu.css'

/**
 * Figma TopMenu (노드 148:89)
 * Figma의 mobile, tablet, desktop 모양이 모두 같아 화면 크기 값을 따로 받지 않는다.
 *
 * onMenuClick: 메뉴 버튼을 눌렀을 때 실행할 함수
 * onUserClick: 사용자 버튼을 눌렀을 때 실행할 함수
 */
function TopMenu({ onMenuClick, onUserClick, className = '', ...rest }) {
  return (
    <header className={`top-menu ${className}`.trim()} {...rest}>
      <button type="button" className="top-menu__button" aria-label="메뉴" onClick={onMenuClick}>
        <Menu />
      </button>
      <SiteLogo />
      <button type="button" className="top-menu__button" aria-label="사용자" onClick={onUserClick}>
        <UserIcon />
      </button>
    </header>
  )
}

export default TopMenu
