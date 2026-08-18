import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiRequest } from '../services/api'

function Register({ t }) {
  const navigate = useNavigate()
  const text = t || {}

  const [role, setRole] = useState('buyer')
  const [loading, setLoading] = useState(false)
  const [otpMode, setOtpMode] = useState(false)
  const [otpLoading, setOtpLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [otp, setOtp] = useState('')

  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    password: '',
    district: '',
    address: '',
    employee_id: '',
    department: '',
    designation: '',
    office_address: ''
  })

  const [idCard, setIdCard] = useState(null)

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
    setSuccess('')

    try {
      const formData = new FormData()

      formData.append('role', role)
      formData.append('full_name', form.full_name)
      formData.append('email', form.email)
      formData.append('phone', form.phone)
      formData.append('password', form.password)
      formData.append('district', form.district)
      formData.append('address', form.address || '')

      if (role === 'government') {
        if (!idCard) {
          throw new Error('Government officer ID card is required')
        }

        formData.append('employee_id', form.employee_id)
        formData.append('department', form.department)
        formData.append('designation', form.designation)
        formData.append('office_address', form.office_address || '')
        formData.append('id_card', idCard)
      }

      await apiRequest('/auth/register', {
        method: 'POST',
        body: formData
      })

      localStorage.setItem('pending-otp-email', form.email)
      setSuccess('Registration successful. Enter OTP below.')
      setOtpMode(true)
    } catch (err) {
      setError(err.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const handleOtpSubmit = async (e) => {
    e.preventDefault()
    setOtpLoading(true)
    setError('')
    setSuccess('')

    try {
      await apiRequest('/auth/verify-otp', {
        method: 'POST',
        body: JSON.stringify({
          email: form.email,
          otp
        })
      })

      localStorage.removeItem('pending-otp-email')
      setSuccess('Email verified successfully. Redirecting to login...')

      setTimeout(() => {
        navigate('/login')
      }, 1000)
    } catch (err) {
      setError(err.message || 'OTP verification failed')
    } finally {
      setOtpLoading(false)
    }
  }

  if (otpMode) {
    return (
      <section className="container section">
        <div className="form-card narrow">
          <p className="eyebrow">OTP Verification</p>
          <h1>Verify your email</h1>

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}

          <p>OTP sent for: {form.email}</p>

          <form onSubmit={handleOtpSubmit}>
            <label>Enter OTP</label>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              required
            />

            <button className="primary-btn full" disabled={otpLoading}>
              {otpLoading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </form>
        </div>
      </section>
    )
  }

  return (
    <section className="container section">
      <div className="form-card narrow">
        <p className="eyebrow">{text.register || 'Register'}</p>
        <h1>{text.registerTitle || 'Create your account'}</h1>

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <form onSubmit={handleSubmit}>
          <label>{text.role || 'Account Type'}</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="buyer">{text.buyer || 'Buyer'}</option>
            <option value="farmer">{text.farmer || 'Farmer'}</option>
            <option value="government">
              {text.govtOfficer || 'Government Officer'}
            </option>
          </select>

          <label>{text.fullName || 'Full Name'}</label>
          <input
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            required
          />

          <label>{text.email || 'Email'}</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>{text.phone || 'Phone'}</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <label>{text.district || 'District'}</label>
          <input
            name="district"
            value={form.district}
            onChange={handleChange}
            required
          />

          <label>{text.address || 'Address'}</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
          />

          <label>{text.password || 'Password'}</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {role === 'government' && (
            <>
              <label>{text.employeeId || 'Employee ID'}</label>
              <input
                name="employee_id"
                value={form.employee_id}
                onChange={handleChange}
                required
              />

              <label>{text.department || 'Department'}</label>
              <input
                name="department"
                value={form.department}
                onChange={handleChange}
                required
              />

              <label>{text.designation || 'Designation'}</label>
              <input
                name="designation"
                value={form.designation}
                onChange={handleChange}
                required
              />

              <label>{text.officeAddress || 'Office Address'}</label>
              <textarea
                name="office_address"
                value={form.office_address}
                onChange={handleChange}
              />

              <label>{text.uploadId || 'Upload ID Card'}</label>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => setIdCard(e.target.files[0])}
                required
              />
            </>
          )}

          <button className="primary-btn full" disabled={loading}>
            {loading ? 'Submitting...' : text.submit || 'Submit'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Register
export { Register }
