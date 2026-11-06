import './Notice.css'

/**
 * Figma Notice (노드 166:1264)
 *
 * title: 제목
 * items: 목록으로 보여 줄 내용. 일부만 굵게 하려면 글자 대신 JSX를 넘긴다.
 */
function Notice({ title = '주의사항', items = [], className = '', ...rest }) {
  return (
    <section className={`notice ${className}`.trim()} {...rest}>
      <h3 className="notice__title">{title}</h3>
      <ul className="notice__description">
        {items.map((item, index) => (
          <li className="notice__item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Notice
