import { Search, ShoppingCart } from 'lucide-react'
import { useMemo, useState } from 'react'
import { sampleProducts } from '../data'
import { Card } from '../components/Card'

export default function Products({ t, lang }) {
  const [q, setQ] = useState('')

  const products = useMemo(() => {
    return sampleProducts.filter(item => {
      const text = `${item.name} ${item.bnName} ${item.district} ${item.category}`.toLowerCase()
      return text.includes(q.toLowerCase())
    })
  }, [q])

  return (
    <section className="container section">
      <div className="page-hero small">
        <div>
          <p className="eyebrow">{t.products}</p>
          <h1>{t.browse}</h1>
          <p>{t.buyerText}</p>
        </div>
      </div>

      <div className="search-box">
        <Search size={20} />
        <input value={q} onChange={e => setQ(e.target.value)} placeholder={t.searchPlaceholder} />
      </div>

      <div className="product-grid">
        {products.map(item => (
          <Card key={item.id} className="product-card">
            <div className="product-img">{lang === 'bn' ? item.bnName : item.name}</div>
            <h3>{lang === 'bn' ? item.bnName : item.name}</h3>
            <p>{item.farmer} • {item.district}</p>
            <div className="product-meta">
              <span>{t.price}: ৳ {item.price}/{item.unit}</span>
              <span>{t.quantity}: {item.quantity} {item.unit}</span>
            </div>
            <button className="primary-btn full"><ShoppingCart size={17} /> {t.placeOrder}</button>
          </Card>
        ))}
      </div>
    </section>
  )
}
