import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import logo from '../assets/logo.svg'

export default function Footer({ t }) {
  const text = t || {}
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-block">
            <Link className="footer-brand" to="/">
              <img src={logo} alt="AgroProcureBD logo" />
              <span>{text.brand || 'AgroProcureBD'}</span>
            </Link>

            <p>
              A smart agricultural marketplace and government procurement
              platform connecting farmers, buyers, and verified government
              officers in Bangladesh.
            </p>

            <div className="footer-badge">
              <ShieldCheck size={18} />
              <span>Verified Agricultural Procurement Platform</span>
            </div>
          </div>

          <div className="footer-column">
            <h4>Platform</h4>
            <Link to="/">{text.home || 'Home'}</Link>
            <Link to="/products">{text.products || 'Products'}</Link>
            <Link to="/procurement">
              {text.procurement || 'Procurement'}
            </Link>
            <Link to="/contact">{text.contact || 'Contact'}</Link>
          </div>

          <div className="footer-column">
            <h4>Accounts</h4>
            <Link to="/register">{text.register || 'Register'}</Link>
            <Link to="/login">{text.login || 'Login'}</Link>
            <Link to="/products">Browse Products</Link>
            <Link to="/procurement">Government Requests</Link>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>

            <div className="footer-contact-item">
              <MapPin size={17} />
              <span>Dhaka, Bangladesh</span>
            </div>

            <div className="footer-contact-item">
              <Mail size={17} />
              <span>support@agroprocurebd.com</span>
            </div>

            <div className="footer-contact-item">
              <Phone size={17} />
              <span>+880 1XXX-XXXXXX</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} AgroProcureBD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
