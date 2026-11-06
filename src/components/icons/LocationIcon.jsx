import './Icon.css'

/**
 * Figma LocationIcon (노드 84:1090)
 * Figma 틀은 48 x 48.02이지만 그림이 48 안에 들어가 다른 아이콘과 같은 48로 둔다.
 * 크기는 Icon.css에서 정하고, 색은 currentColor라 바깥 CSS의 color를 따른다.
 */
function LocationIcon({ className = '', ...rest }) {
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
        d="M24 4C15.18 4 8 11.18 8 20C7.94 32.88 22.24 43.2 22.84 43.64C23.18 43.88 23.6 44.02 24 44.02C24.4 44.02 24.82 43.9 25.16 43.64C25.76 43.2 40.06 32.9 40 20C40 11.18 32.82 4 24 4ZM24 28C19.58 28 16 24.42 16 20C16 15.58 19.58 12 24 12C28.42 12 32 15.58 32 20C32 24.42 28.42 28 24 28Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default LocationIcon
