import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiRequest } from '../services/api'

export default function Login({ t, setUser }) {
  const navigate = useNavigate()
  const text = t || {}

  const [form, setForm] = useState({
    email: '',
    password: '',
    role: 'buyer'
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify(form)
      })

      localStorage.setItem('agro-token', data.token)
      localStorage.setItem('agro-user', JSON.stringify(data.user))

      if (typeof setUser === 'function') {
        setUser(data.user)
      }

      if (data.user.role === 'farmer') {
        navigate('/farmer')
      } else if (data.user.role === 'buyer') {
        navigate('/buyer')
      } else if (data.user.role === 'government') {
        navigate('/government')
      } else {
        navigate('/')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container section">
      <div className="form-card narrow">
        <p className="eyebrow">{text.login || 'Login'}</p>
        <h1>{text.loginTitle || 'Login to your account'}</h1>

        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>{text.role || 'Account Type'}</label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="buyer">{text.buyer || 'Buyer'}</option>
            <option value="farmer">{text.farmer || 'Farmer'}</option>
            <option value="government">
              {text.govtOfficer || 'Government Officer'}
            </option>
          </select>

          <label>{text.email || 'Email'}</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>{text.password || 'Password'}</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="primary-btn full" disabled={loading}>
            {loading ? 'Loading...' : text.login || 'Login'}
          </button>
        </form>
      </div>
    </section>
  )
}
