import './Icon.css'

/**
 * Figma SwitchIcon (노드 84:1099)
 * 크기는 Icon.css에서 정하고, 색은 currentColor라 바깥 CSS의 color를 따른다.
 */
function SwitchIcon({ className = '', ...rest }) {
  return (
    <svg
      className={`icon ${className}`.trim()}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M24 24C24 12 42 12 42 24C42 36 24 36 24 24ZM33 36C51 36 51 12 33 12H15C-3 12 -3 36 15 36"
        fill="currentColor"
      />
    </svg>
  )
}

export default SwitchIcon
