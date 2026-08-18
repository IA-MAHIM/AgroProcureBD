import { Link } from 'react-router-dom'

export default function Otp({ t }) {
  return (
    <section className="container section">
      <div className="form-card narrow center">
        <p className="eyebrow">OTP</p>
        <h1>{t.otpTitle}</h1>
        <p>{t.otpText}</p>

        <div className="otp-row">
          <input maxLength="1" />
          <input maxLength="1" />
          <input maxLength="1" />
          <input maxLength="1" />
          <input maxLength="1" />
          <input maxLength="1" />
        </div>

        <Link className="primary-btn full" to="/login">{t.submit}</Link>
      </div>
    </section>
  )
}
