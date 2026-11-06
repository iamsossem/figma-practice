import './Icon.css'

/**
 * Figma NoteIcon (노드 84:1089)
 * 원본 그림은 32 x 40이고 48 x 48 틀의 가운데에 놓여 viewBox를 옮겨 맞춘다.
 * 크기는 Icon.css에서 정하고, 색은 currentColor라 바깥 CSS의 color를 따른다.
 */
function NoteIcon({ className = '', ...rest }) {
  return (
    <svg
      className={`icon ${className}`.trim()}
      viewBox="-8 -4 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M4 40C2.9 40 1.95867 39.6087 1.176 38.826C0.393333 38.0433 0.00133333 37.1013 0 36V4C0 2.9 0.392 1.95867 1.176 1.176C1.96 0.393333 2.90133 0.00133333 4 0H28C29.1 0 30.042 0.392 30.826 1.176C31.61 1.96 32.0013 2.90133 32 4V36C32 37.1 31.6087 38.042 30.826 38.826C30.0433 39.61 29.1013 40.0013 28 40H4ZM4 36H28V4H24V18L19 15L14 18V4H4V36Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default NoteIcon
