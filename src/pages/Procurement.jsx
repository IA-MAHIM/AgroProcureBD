import { FileText } from 'lucide-react'
import { procurementRequests } from '../data'
import { Card } from '../components/Card'
import { images } from '../data'

export default function Procurement({ t, lang }) {
  return (
    <section className="container section">
      <div className="page-hero">
        <div>
          <p className="eyebrow">{t.procurement}</p>
          <h1>{t.govtTitle}</h1>
          <p>{t.govtText}</p>
        </div>
        <img src={images.procurementImage} alt="Procurement" />
      </div>

      <div className="request-grid">
        {procurementRequests.map(req => (
          <Card key={req.id}>
            <FileText className="card-icon" />
            <h3>{req.id} • {lang === 'bn' ? req.bnProduct : req.product}</h3>
            <p>{t.quantity}: {req.quantity}</p>
            <p>{t.district}: {req.district}</p>
            <p>Budget: {req.budget}</p>
            <p>Deadline: {req.deadline}</p>
            <button className="primary-btn full">{t.makeOffer}</button>
          </Card>
        ))}
      </div>
    </section>
  )
}
