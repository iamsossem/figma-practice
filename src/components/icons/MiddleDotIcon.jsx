import './Icon.css'

/**
 * Figma MiddleDotIcon (노드 84:1098)
 * 크기는 Icon.css에서 정하고, 색은 currentColor라 바깥 CSS의 color를 따른다.
 */
function MiddleDotIcon({ className = '', ...rest }) {
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
        d="M24 20C22.9391 20 21.9217 20.4214 21.1716 21.1716C20.4214 21.9217 20 22.9391 20 24C20 25.0609 20.4214 26.0783 21.1716 26.8284C21.9217 27.5786 22.9391 28 24 28C26.22 28 28 26.22 28 24C28 22.9391 27.5786 21.9217 26.8284 21.1716C26.0783 20.4214 25.0609 20 24 20Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default MiddleDotIcon
