import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Moon, Sun, LogOut, LayoutDashboard } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.svg'

function roleDashboardPath(role) {
  if (role === 'farmer') return '/farmer'
  if (role === 'buyer') return '/buyer'
  if (role === 'government') return '/government'
  if (role === 'admin') return '/admin'
  return '/'
}

export default function Header({
  t,
  lang,
  setLang,
  darkMode,
  setDarkMode,
  user,
  setUser
}) {
  const text = t || {}
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const closeMenu = () => {
    setOpen(false)
  }

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'bn' : 'en')
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const logout = () => {
    localStorage.removeItem('agro-token')
    localStorage.removeItem('agro-user')
    setUser(null)
    setOpen(false)
    navigate('/')
  }

  const navItems = [
    ['/', text.home || 'Home'],
    ['/products', text.products || 'Products'],
    ['/procurement', text.procurement || 'Procurement'],
    ['/contact', text.contact || 'Contact']
  ]

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="AgroProcureBD logo" />
          <span>{text.brand || 'AgroProcureBD'}</span>
        </Link>

        <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
          {navItems.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {label}
            </NavLink>
          ))}

          {user && (
            <NavLink
              to={roleDashboardPath(user.role)}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {text.dashboard || 'Dashboard'}
            </NavLink>
          )}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="ghost-btn header-small-btn"
            onClick={toggleLanguage}
          >
            {lang === 'en' ? 'বাংলা' : 'EN'}
          </button>

          <button
            type="button"
            className="ghost-btn header-small-btn"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            <span>{darkMode ? text.light || 'Light' : text.dark || 'Dark'}</span>
          </button>

          {!user ? (
            <>
              <Link className="ghost-btn header-auth hide-mobile" to="/login">
                {text.login || 'Login'}
              </Link>

              <Link className="primary-btn header-auth hide-mobile" to="/register">
                {text.register || 'Register'}
              </Link>
            </>
          ) : (
            <>
              <Link
                className="ghost-btn header-auth hide-mobile"
                to={roleDashboardPath(user.role)}
              >
                <LayoutDashboard size={17} />
                {text.dashboard || 'Dashboard'}
              </Link>

              <button
                type="button"
                className="ghost-btn header-auth hide-mobile"
                onClick={logout}
              >
                <LogOut size={17} />
                {text.logout || 'Logout'}
              </button>
            </>
          )}

          <button
            type="button"
            className="ghost-btn menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="container mobile-header-actions">
          {!user ? (
            <>
              <Link className="ghost-btn full" to="/login" onClick={closeMenu}>
                {text.login || 'Login'}
              </Link>

              <Link className="primary-btn full" to="/register" onClick={closeMenu}>
                {text.register || 'Register'}
              </Link>
            </>
          ) : (
            <>
              <Link
                className="ghost-btn full"
                to={roleDashboardPath(user.role)}
                onClick={closeMenu}
              >
                {text.dashboard || 'Dashboard'}
              </Link>

              <button type="button" className="ghost-btn full" onClick={logout}>
                {text.logout || 'Logout'}
              </button>
            </>
          )}
        </div>
      )}
    </header>
  )
}
