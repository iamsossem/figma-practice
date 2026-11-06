import enabledIcon from '../../assets/icons/notification-setting-enabled.png'
import disabledIcon from '../../assets/icons/notification-setting-disabled.png'
import './NotificationSetting.css'

/**
 * Figma NotificationSetting (노드 197:1095)
 *
 * status: 'enabled'(활성화) 또는 'disabled'(비활성화)
 * 누를 때 할 일은 onClick으로 전달한다.
 */
function NotificationSetting({ status = 'enabled', className = '', ...rest }) {
  const isEnabled = status === 'enabled'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEnabled}
      className={`notification-setting notification-setting--${status} ${className}`.trim()}
      {...rest}
    >
      <span className="notification-setting__label">알림 수신 설정</span>
      <img
        className="notification-setting__icon"
        src={isEnabled ? enabledIcon : disabledIcon}
        alt=""
      />
    </button>
  )
}

export default NotificationSetting
