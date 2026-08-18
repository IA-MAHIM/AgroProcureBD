import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { images } from '../data'

export default function Register({ t }) {
  const [role, setRole] = useState('farmer')
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    navigate('/otp')
  }

  return (
    <section className="container section auth-grid">
      <div className="form-card">
        <p className="eyebrow">{t.register}</p>
        <h1>{t.registerTitle}</h1>
        <form onSubmit={submit}>
          <label>{t.role}</label>
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="farmer">{t.farmer}</option>
            <option value="buyer">{t.buyer}</option>
            <option value="government">{t.govtOfficer}</option>
          </select>

          <label>{t.fullName}</label>
          <input required placeholder={t.fullName} />

          <label>{t.email}</label>
          <input required type="email" placeholder="name@example.com" />

          <label>{t.phone}</label>
          <input required placeholder="01XXXXXXXXX" />

          <label>{t.district}</label>
          <input required placeholder={t.district} />

          <label>{t.password}</label>
          <input required type="password" placeholder="********" />

          {role === 'government' && (
            <div className="govt-fields">
              <p className="soft-note">{t.govtNote}</p>
              <label>{t.employeeId}</label>
              <input required placeholder="AG-12345" />

              <label>{t.department}</label>
              <input required placeholder={t.department} />

              <label>{t.designation}</label>
              <input required placeholder={t.designation} />

              <label>{t.uploadId}</label>
              <input type="file" accept="image/*,.pdf" />
            </div>
          )}

          <button className="primary-btn full">{t.submit}</button>
        </form>
      </div>

      <img className="side-illustration" src={role === 'government' ? images.idUploadImage : images.registerImage} alt="Registration" />
    </section>
  )
}
