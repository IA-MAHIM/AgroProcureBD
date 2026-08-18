import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { translations } from './i18n'

import Home from './pages/Home'
import Products from './pages/Products'
import Procurement from './pages/Procurement'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login, { AdminLogin } from './pages/Login'
import Otp from './pages/Otp'

import {
  FarmerDashboard,
  BuyerDashboard,
  GovernmentDashboard,
  AdminDashboard,
  AddProduct,
  FarmerBids,
  SimpleFormPage,
  Checkout
} from './pages/Dashboard'

function Protected({ user, role, children }) {
  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />
  }

  return children
}

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('agro-lang') || 'en'
  })

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('agro-theme') === 'dark'
  })

  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('agro-user')) || null
    } catch {
      return null
    }
  })

  const t = useMemo(() => {
    return translations[lang] || translations.en || {}
  }, [lang])

  useEffect(() => {
    localStorage.setItem('agro-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light'

    localStorage.setItem('agro-theme', theme)

    document.documentElement.classList.toggle('dark', darkMode)
    document.body.classList.toggle('dark', darkMode)

    document.documentElement.setAttribute('data-theme', theme)
    document.body.setAttribute('data-theme', theme)
  }, [darkMode])

  useEffect(() => {
    function syncUser() {
      try {
        const savedUser = JSON.parse(localStorage.getItem('agro-user')) || null
        setUser(savedUser)
      } catch {
        setUser(null)
      }
    }

    window.addEventListener('storage', syncUser)

    return () => {
      window.removeEventListener('storage', syncUser)
    }
  }, [])

  return (
    <div className={darkMode ? 'app dark' : 'app'} data-theme={darkMode ? 'dark' : 'light'}>
      <Header
        t={t}
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        user={user}
        setUser={setUser}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/products" element={<Products t={t} lang={lang} />} />
          <Route path="/procurement" element={<Procurement t={t} lang={lang} />} />
          <Route path="/contact" element={<Contact t={t} />} />

          <Route path="/register" element={<Register t={t} />} />
          <Route path="/login" element={<Login t={t} setUser={setUser} />} />
          <Route path="/admin-login" element={<AdminLogin t={t} setUser={setUser} />} />
          <Route path="/otp" element={<Otp t={t} />} />

          <Route
            path="/farmer"
            element={
              <Protected user={user} role="farmer">
                <FarmerDashboard t={t} lang={lang} />
              </Protected>
            }
          />

          <Route
            path="/farmer/add-product"
            element={
              <Protected user={user} role="farmer">
                <AddProduct t={t} />
              </Protected>
            }
          />

          <Route
            path="/add-product"
            element={
              <Protected user={user} role="farmer">
                <AddProduct t={t} />
              </Protected>
            }
          />

          <Route
            path="/farmer/bids"
            element={
              <Protected user={user} role="farmer">
                <FarmerBids t={t} />
              </Protected>
            }
          />

          <Route
            path="/buyer"
            element={
              <Protected user={user} role="buyer">
                <BuyerDashboard t={t} lang={lang} />
              </Protected>
            }
          />

          <Route
            path="/checkout"
            element={
              <Protected user={user}>
                <Checkout t={t} />
              </Protected>
            }
          />

          <Route
            path="/government"
            element={
              <Protected user={user} role="government">
                <GovernmentDashboard t={t} lang={lang} />
              </Protected>
            }
          />

          <Route
            path="/government/post-demand"
            element={
              <Protected user={user} role="government">
                <SimpleFormPage
                  title={t.postDemand || 'Post Procurement Demand'}
                  subtitle={t.govtText || 'Create a government procurement request.'}
                  t={t}
                />
              </Protected>
            }
          />

          <Route
            path="/government/offers"
            element={
              <Protected user={user} role="government">
                <FarmerBids t={t} />
              </Protected>
            }
          />

          <Route
            path="/admin"
            element={
              <Protected user={user} role="admin">
                <AdminDashboard t={t} />
              </Protected>
            }
          />

          <Route
            path="*"
            element={
              <section className="container section center">
                <h1>404</h1>
                <p>Page not found</p>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer t={t} />
    </div>
  )
}
