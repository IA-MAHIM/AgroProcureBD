import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sprout, ShoppingBasket, Landmark, ShieldCheck } from 'lucide-react'

function dashboardPath(role) {
  if (role === 'farmer') return '/farmer'
  if (role === 'buyer') return '/buyer'
  if (role === 'government') return '/government'
  if (role === 'admin') return '/admin'
  return '/'
}

export default function Login({ t, setUser }) {
  const [role, setRole] = useState('farmer')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const roleOptions = [
    { value: 'farmer', label: t.farmerLogin, icon: Sprout },
    { value: 'buyer', label: t.buyerLogin, icon: ShoppingBasket },
    { value: 'government', label: t.govtLogin, icon: Landmark },
  ]

  const submitLogin = (e) => {
    e.preventDefault()
    const user = { name: email, email, role }
    localStorage.setItem('agro-user', JSON.stringify(user))
    setUser(user)
    navigate(dashboardPath(role))
  }

  return (
    <section className="container section">
      <div className="form-card narrow">
        <p className="eyebrow">{t.login}</p>
        <h1>{t.loginTitle}</h1>
        <p>{t.loginText}</p>

        <form onSubmit={submitLogin}>
          <label>{t.accountType}</label>
          <div className="role-select">
            {roleOptions.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                type="button"
                className={role === value ? 'role-option active' : 'role-option'}
                onClick={() => setRole(value)}
              >
                <Icon size={20} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <label>{t.email}</label>
          <input
            required
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="name@example.com"
          />

          <label>{t.password}</label>
          <input required type="password" placeholder="********" />

          <button className="primary-btn full" type="submit">{t.login}</button>
        </form>
      </div>
    </section>
  )
}

export function AdminLogin({ t, setUser }) {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const submitLogin = (e) => {
    e.preventDefault()
    const user = { name: email, email, role: 'admin' }
    localStorage.setItem('agro-user', JSON.stringify(user))
    setUser(user)
    navigate('/admin')
  }

  return (
    <section className="container section">
      <div className="form-card narrow">
        <p className="eyebrow">{t.admin}</p>
        <h1>{t.adminLogin}</h1>

        <form onSubmit={submitLogin}>
          <label>{t.email}</label>
          <input
            required
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="admin@agroprocurebd.com"
          />

          <label>{t.password}</label>
          <input required type="password" placeholder="********" />

          <button className="primary-btn full" type="submit">
            <ShieldCheck size={18} /> {t.login}
          </button>
        </form>
      </div>
    </section>
  )
}
