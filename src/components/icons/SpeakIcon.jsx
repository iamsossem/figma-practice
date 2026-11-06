import './Icon.css'

/**
 * Figma SpeakIcon (노드 84:1103)
 * 원본 그림은 28 x 36이고 48 x 48 틀의 가운데에 놓여 viewBox를 옮겨 맞춘다.
 * 크기는 Icon.css에서 정하고, 색은 currentColor라 바깥 CSS의 color를 따른다.
 */
function SpeakIcon({ className = '', ...rest }) {
  return (
    <svg
      className={`icon ${className}`.trim()}
      viewBox="-10 -6 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M19.6 7.6C19.6 4.50721 17.0928 2 14 2C10.9072 2 8.4 4.50721 8.4 7.6V18C8.4 21.0928 10.9072 23.6 14 23.6C17.0928 23.6 19.6 21.0928 19.6 18V7.6Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M2 17.2C2 23.8272 7.3728 29.2 14 29.2M14 29.2C20.6272 29.2 26 23.8272 26 17.2M14 29.2V34"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SpeakIcon
