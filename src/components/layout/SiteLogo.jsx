import logoImage from '../../assets/images/site-logo.png'
import './SiteLogo.css'

/** Figma SiteLogo (노드 84:1109) */
function SiteLogo({ className = '', ...rest }) {
  return (
    <div className={`site-logo ${className}`.trim()} {...rest}>
      <img className="site-logo__image" src={logoImage} alt="" />
      <span className="site-logo__name">수원시 도서관</span>
    </div>
  )
}

export default SiteLogo
