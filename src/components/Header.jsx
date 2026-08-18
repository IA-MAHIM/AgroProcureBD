import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.svg'

function roleDashboardPath(role) {
  if (role === 'farmer') return '/farmer'
  if (role === 'buyer') return '/buyer'
  if (role === 'government') return '/government'
  if (role === 'admin') return '/admin'
  return '/'
}

export default function Header({ t, lang, setLang, darkMode, setDarkMode, user, setUser }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('agro-user')
    setUser(null)
    setOpen(false)
    navigate('/')
  }

  const navItems = [
    ['/', t.home],
    ['/products', t.products],
    ['/how-it-works', t.howItWorks],
    ['/procurement', t.procurement],
    ['/contact', t.contact],
  ]

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" to="/">
          <img src={logo} alt="AgroProcureBD logo" />
          <span>{t.brand}</span>
        </Link>

        <nav className={open ? 'main-nav open' : 'main-nav'}>
          {navItems.map(([path, label]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}

          {user && (
            <NavLink className="dashboard-link" to={roleDashboardPath(user.role)} onClick={() => setOpen(false)}>
              {t.dashboard}
            </NavLink>
          )}
        </nav>

        <div className="header-actions">
          <button className="small-btn" onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} aria-label="Change language">
            {t.language}
          </button>

          <button className="icon-btn" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{darkMode ? t.light : t.dark}</span>
          </button>

          {!user ? (
            <>
              <Link className="login-btn hide-sm" to="/login">{t.login}</Link>
              <Link className="primary-btn hide-sm" to="/register">{t.register}</Link>
            </>
          ) : (
            <button className="login-btn hide-sm" onClick={logout}>{t.logout}</button>
          )}

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Open menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-auth container">
          {!user ? (
            <>
              <Link className="login-btn" to="/login" onClick={() => setOpen(false)}>{t.login}</Link>
              <Link className="primary-btn" to="/register" onClick={() => setOpen(false)}>{t.register}</Link>
            </>
          ) : (
            <button className="login-btn" onClick={logout}>{t.logout}</button>
          )}
        </div>
      )}
    </header>
  )
}
