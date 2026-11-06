import './Icon.css'

/**
 * Figma WaitIcon (노드 84:1100)
 * 크기는 Icon.css에서 정하고, 색은 currentColor라 바깥 CSS의 color를 따른다.
 */
function WaitIcon({ className = '', ...rest }) {
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
        d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM26 34H22V30H26V34ZM26 26H22L21 14H27L26 26Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default WaitIcon
