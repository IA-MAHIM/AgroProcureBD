import { images } from '../data'

export default function HowItWorks({ t }) {
  return (
    <section className="container section">
      <div className="page-hero">
        <div>
          <p className="eyebrow">{t.howItWorks}</p>
          <h1>{t.simpleWords}</h1>
          <p>{t.heroText}</p>
        </div>
        <img src={images.marketImage} alt="Marketplace" />
      </div>

      <div className="timeline">
        <div><strong>1</strong><h3>{t.sellerTitle}</h3><p>{t.sellerText}</p></div>
        <div><strong>2</strong><h3>{t.buyerTitle}</h3><p>{t.buyerText}</p></div>
        <div><strong>3</strong><h3>{t.govtTitle}</h3><p>{t.govtText}</p></div>
        <div><strong>4</strong><h3>{t.adminTitle}</h3><p>{t.adminText}</p></div>
      </div>
    </section>
  )
}
