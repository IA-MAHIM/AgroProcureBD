import { useNavigate } from 'react-router-dom'

export default function Login({ t, setUser }) {
  const navigate = useNavigate()

  const demoLogin = (role) => {
    const user = { name: 'Demo User', role }
    localStorage.setItem('agro-user', JSON.stringify(user))
    setUser(user)
    if (role === 'farmer') navigate('/farmer')
    if (role === 'buyer') navigate('/buyer')
    if (role === 'government') navigate('/government')
    if (role === 'admin') navigate('/admin')
  }

  return (
    <section className="container section">
      <div className="form-card narrow">
        <p className="eyebrow">{t.login}</p>
        <h1>{t.loginTitle}</h1>
        <p>{t.demoLogin}</p>

        <label>{t.email}</label>
        <input type="email" placeholder="demo@example.com" />

        <label>{t.password}</label>
        <input type="password" placeholder="********" />

        <button className="primary-btn full" onClick={() => demoLogin('buyer')}>{t.login}</button>

        <div className="demo-grid">
          <button onClick={() => demoLogin('farmer')}>{t.farmer}</button>
          <button onClick={() => demoLogin('buyer')}>{t.buyer}</button>
          <button onClick={() => demoLogin('government')}>{t.govtOfficer}</button>
          <button onClick={() => demoLogin('admin')}>{t.admin}</button>
        </div>
      </div>
    </section>
  )
}
