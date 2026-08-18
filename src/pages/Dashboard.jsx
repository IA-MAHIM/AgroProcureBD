import { Link } from 'react-router-dom'
import { Package, ShoppingBag, FileText, ShieldCheck, Plus, CheckCircle2 } from 'lucide-react'
import { Card, StatCard } from '../components/Card'
import { bids, officerRequests, orders, procurementRequests, sampleProducts } from '../data'
import { images } from '../data'

function DashboardLayout({ title, text, image, children }) {
  return (
    <section className="container section">
      <div className="page-hero">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <img src={image} alt="Dashboard" />
      </div>
      {children}
    </section>
  )
}

export function FarmerDashboard({ t, lang }) {
  return (
    <DashboardLayout title={t.farmer} text={t.sellerText} image={images.dashboardImage}>
      <div className="stats-grid">
        <StatCard label={t.myProducts} value="4" />
        <StatCard label={t.orders} value="2" />
        <StatCard label={t.bids} value="2" />
      </div>

      <div className="dashboard-actions">
        <Link className="primary-btn" to="/farmer/add-product"><Plus size={18} /> {t.addProduct}</Link>
        <Link className="outline-btn" to="/farmer/bids">{t.bids}</Link>
      </div>

      <div className="table-card">
        <h2>{t.myProducts}</h2>
        <table>
          <thead><tr><th>{t.products}</th><th>{t.price}</th><th>{t.quantity}</th><th>{t.status}</th></tr></thead>
          <tbody>{sampleProducts.slice(0, 3).map(p => <tr key={p.id}><td>{lang === 'bn' ? p.bnName : p.name}</td><td>৳ {p.price}/kg</td><td>{p.quantity} kg</td><td>{p.status}</td></tr>)}</tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}

export function BuyerDashboard({ t, lang }) {
  return (
    <DashboardLayout title={t.buyer} text={t.buyerText} image={images.marketImage}>
      <div className="stats-grid">
        <StatCard label={t.orders} value="2" />
        <StatCard label={t.cart} value="1" />
        <StatCard label={t.orderHistory} value="5" />
      </div>

      <div className="dashboard-actions">
        <Link className="primary-btn" to="/products"><ShoppingBag size={18} /> {t.browse}</Link>
        <Link className="outline-btn" to="/checkout">{t.checkout}</Link>
      </div>

      <div className="table-card">
        <h2>{t.orderHistory}</h2>
        <table>
          <thead><tr><th>ID</th><th>{t.products}</th><th>{t.quantity}</th><th>{t.status}</th></tr></thead>
          <tbody>{orders.map(o => <tr key={o.id}><td>{o.id}</td><td>{lang === 'bn' ? o.bnProduct : o.product}</td><td>{o.quantity}</td><td>{o.status}</td></tr>)}</tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}

export function GovernmentDashboard({ t, lang }) {
  return (
    <DashboardLayout title={t.govtOfficer} text={t.govtText} image={images.procurementImage}>
      <div className="stats-grid">
        <StatCard label={t.procurement} value="3" />
        <StatCard label={t.viewOffers} value="2" />
        <StatCard label={t.approved} value="1" />
      </div>

      <div className="dashboard-actions">
        <Link className="primary-btn" to="/government/post-demand"><FileText size={18} /> {t.postDemand}</Link>
        <Link className="outline-btn" to="/government/offers">{t.viewOffers}</Link>
      </div>

      <div className="request-grid">
        {procurementRequests.map(req => (
          <Card key={req.id}>
            <h3>{req.id}</h3>
            <p>{lang === 'bn' ? req.bnProduct : req.product}</p>
            <p>{t.quantity}: {req.quantity}</p>
            <p>{t.status}: {req.status}</p>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}

export function AdminDashboard({ t }) {
  return (
    <DashboardLayout title={t.admin} text={t.adminTitle} image={images.idUploadImage}>
      <div className="stats-grid">
        <StatCard label={t.manageUsers} value="18" />
        <StatCard label={t.verifyRequests} value="2" />
        <StatCard label={t.reports} value="Ready" />
      </div>

      <div className="table-card">
        <h2>{t.verifyRequests}</h2>
        <table>
          <thead><tr><th>{t.fullName}</th><th>{t.department}</th><th>{t.employeeId}</th><th>{t.status}</th><th>Action</th></tr></thead>
          <tbody>{officerRequests.map(r => <tr key={r.id}><td>{r.name}</td><td>{r.department}</td><td>{r.employeeId}</td><td>{r.status}</td><td><button className="mini success"><CheckCircle2 size={14} /> {t.approve}</button> <button className="mini danger">{t.reject}</button></td></tr>)}</tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}

export function AddProduct({ t }) {
  return (
    <section className="container section">
      <div className="form-card narrow">
        <p className="eyebrow">{t.farmer}</p>
        <h1>{t.addProduct}</h1>
        <label>{t.products}</label><input placeholder="Rice / চাল" />
        <label>{t.quantity}</label><input placeholder="500 kg" />
        <label>{t.price}</label><input placeholder="৳ 50/kg" />
        <label>{t.district}</label><input placeholder={t.district} />
        <label>Photo</label><input type="file" accept="image/*" />
        <button className="primary-btn full">{t.save}</button>
      </div>
    </section>
  )
}

export function FarmerBids({ t }) {
  return (
    <section className="container section">
      <div className="table-card">
        <h1>{t.bids}</h1>
        <table>
          <thead><tr><th>ID</th><th>{t.procurement}</th><th>{t.price}</th><th>{t.quantity}</th><th>{t.status}</th></tr></thead>
          <tbody>{bids.map(b => <tr key={b.id}><td>{b.id}</td><td>{b.request}</td><td>{b.price}</td><td>{b.quantity}</td><td>{b.status}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  )
}

export function SimpleFormPage({ title, text, t }) {
  return (
    <section className="container section">
      <div className="form-card narrow">
        <h1>{title}</h1>
        <p>{text}</p>
        <label>{t.products}</label><input placeholder="Rice / চাল" />
        <label>{t.quantity}</label><input placeholder="1000 kg" />
        <label>{t.district}</label><input placeholder={t.district} />
        <label>{t.price}</label><input placeholder="৳ 60/kg" />
        <button className="primary-btn full">{t.submit}</button>
      </div>
    </section>
  )
}

export function Checkout({ t }) {
  return (
    <section className="container section">
      <div className="form-card narrow">
        <h1>{t.checkout}</h1>
        <label>{t.paymentMethod}</label><select><option>{t.cashOnDelivery}</option><option>{t.manualPayment}</option></select>
        <label>{t.fullName}</label><input placeholder={t.fullName} />
        <label>{t.phone}</label><input placeholder={t.phone} />
        <label>{t.shippingAddress}</label><textarea rows="4" />
        <button className="primary-btn full">{t.placeOrder}</button>
      </div>
    </section>
  )
}
