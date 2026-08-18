import logo from '../assets/logo.svg'

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img src={logo} alt="Logo" />
            <strong>{t.brand}</strong>
          </div>
          <p>{t.footer}</p>
        </div>
        <div>
          <strong>{t.project}</strong>
          <p>{t.projectText}</p>
        </div>
        <div>
          <strong>{t.contact}</strong>
          <p>support@agroprocurebd.com</p>
        </div>
      </div>
    </footer>
  )
}
