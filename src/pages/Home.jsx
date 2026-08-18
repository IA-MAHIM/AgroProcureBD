import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Sprout, ShoppingBasket, Landmark, ShieldCheck } from 'lucide-react'
import { images } from '../data'
import { Card } from '../components/Card'

export default function Home({ t }) {
  const steps = [
    [Sprout, t.sellerTitle, t.sellerText],
    [ShoppingBasket, t.buyerTitle, t.buyerText],
    [Landmark, t.govtTitle, t.govtText],
    [ShieldCheck, t.adminTitle, t.adminText],
  ]

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow">{t.simpleWords}</p>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroText}</p>
            <div className="hero-actions">
              <Link className="primary-btn big" to="/register">
                {t.getStarted} <ArrowRight size={18} />
              </Link>
              <Link className="outline-btn big" to="/products">{t.browse}</Link>
            </div>
            <p className="soft-note">{t.dashboardOnly}</p>
          </div>
          <img className="hero-img" src={images.heroFarm} alt="Farm illustration" />
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <p className="eyebrow">{t.easyRead}</p>
          <h2>{t.howItWorks}</h2>
        </div>
        <div className="feature-grid">
          {steps.map(([Icon, title, text]) => (
            <Card key={title}>
              <Icon className="card-icon" size={32} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container info-banner">
        <div>
          <h2>{t.procurement}</h2>
          <p>{t.govtText}</p>
        </div>
        <Link className="primary-btn" to="/procurement">{t.viewOffers}</Link>
      </section>
    </>
  )
}
