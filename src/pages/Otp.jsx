import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiRequest } from '../services/api'

function Otp({ t }) {
  const navigate = useNavigate()
  const text = t || {}

  const [email, setEmail] = useState(
    localStorage.getItem('pending-otp-email') || ''
  )
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [resending, setResending] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    localStorage.setItem('pending-otp-email', e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      if (!email) {
        throw new Error('Email is required')
      }

      if (!otp) {
        throw new Error('OTP is required')
      }

      await apiRequest('/auth/verify-otp', {
        method: 'POST',
        body: JSON.stringify({
          email,
          otp
        })
      })

      localStorage.removeItem('pending-otp-email')
      setSuccess('Email verified successfully. Redirecting to login...')

      setTimeout(() => {
        navigate('/login')
      }, 1200)
    } catch (err) {
      setError(err.message || 'OTP verification failed')
    } finally {
      setLoading(false)
    }
  }

  const resendOtp = async () => {
    setResending(true)
    setError('')
    setSuccess('')

    try {
      if (!email) {
        throw new Error('Email is required to resend OTP')
      }

      await apiRequest('/auth/resend-otp', {
        method: 'POST',
        body: JSON.stringify({ email })
      })

      setSuccess('OTP sent again. Check Render logs.')
    } catch (err) {
      setError(err.message || 'Could not resend OTP')
    } finally {
      setResending(false)
    }
  }

  return (
    <section className="container section">
      <div className="form-card narrow center">
        <p className="eyebrow">OTP Verification</p>
        <h1>{text.otpTitle || 'Verify your email'}</h1>

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <form onSubmit={handleSubmit}>
          <label>{text.email || 'Email'}</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />

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

        <button
          type="button"
          className="outline-btn full"
          onClick={resendOtp}
          disabled={resending}
        >
          {resending ? 'Sending...' : 'Resend OTP'}
        </button>
      </div>
    </section>
  )
}

export default Otp
export { Otp }
