import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiRequest } from '../services/api'

export default function Register({ t }) {
  const navigate = useNavigate()
  const text = t || {}

  const [role, setRole] = useState('farmer')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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

    try {
      if (role === 'government' && !idCard) {
        throw new Error('Government officer ID card is required')
      }

      const formData = new FormData()

      formData.append('role', role)
      formData.append('full_name', form.full_name)
      formData.append('email', form.email)
      formData.append('phone', form.phone)
      formData.append('password', form.password)
      formData.append('district', form.district)
      formData.append('address', form.address)

      if (role === 'government') {
        formData.append('employee_id', form.employee_id)
        formData.append('department', form.department)
        formData.append('designation', form.designation)
        formData.append('office_address', form.office_address)
        formData.append('id_card', idCard)
      }

      await apiRequest('/auth/register', {
        method: 'POST',
        body: formData
      })

      localStorage.setItem('pending-otp-email', form.email)
      navigate('/otp')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container section">
      <div className="form-card narrow">
        <p className="eyebrow">{text.register || 'Register'}</p>
        <h1>{text.registerTitle || 'Create your account'}</h1>

        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>{text.role || 'Account Type'}</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="farmer">{text.farmer || 'Farmer'}</option>
            <option value="buyer">{text.buyer || 'Buyer'}</option>
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
