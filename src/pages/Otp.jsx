import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiRequest } from '../services/api'

export default function Otp({ t }) {
  const navigate = useNavigate()
  const text = t || {}

  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const email = localStorage.getItem('pending-otp-email')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await apiRequest('/auth/verify-otp', {
        method: 'POST',
        body: JSON.stringify({
          email,
          otp
        })
      })

      localStorage.removeItem('pending-otp-email')
      navigate('/login')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const resendOtp = async () => {
    try {
      await apiRequest('/auth/resend-otp', {
        method: 'POST',
        body: JSON.stringify({ email })
      })

      alert('OTP sent again. Check Render logs.')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section className="container section">
      <div className="form-card narrow center">
        <p className="eyebrow">OTP Verification</p>
        <h1>{text.otpTitle || 'Verify your email'}</h1>

        {email && <p>OTP sent for: {email}</p>}
        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Enter OTP</label>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength="6"
            required
          />

          <button className="primary-btn full" disabled={loading}>
            {loading ? 'Verifying...' : text.submit || 'Submit'}
          </button>
        </form>

        <button className="outline-btn full" onClick={resendOtp}>
          Resend OTP
        </button>
      </div>
    </section>
  )
}
