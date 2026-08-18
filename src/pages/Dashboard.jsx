import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiRequest } from '../services/api'

function getSavedUser() {
  try {
    return JSON.parse(localStorage.getItem('agro-user')) || null
  } catch {
    return null
  }
}

function DashboardShell({ roleTitle, children }) {
  const user = getSavedUser()

  return (
    <section className="container section">
      <div className="panel-header">
        <div>
          <p className="eyebrow">{roleTitle}</p>
          <h1>Welcome{user?.full_name ? `, ${user.full_name}` : ''}</h1>
          <p className="text-muted">
           
          </p>
        </div>
      </div>

      {children}
    </section>
  )
}

function EmptyCard({ title, text }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function Dashboard() {
  return (
    <DashboardShell roleTitle="Dashboard">
      <div className="dashboard-grid">
        <div className="stat-card">
          <strong>Active</strong>
          <span>Account Status</span>
        </div>

        <div className="stat-card">
          <strong>0</strong>
          <span>Demo Records</span>
        </div>

        <div className="stat-card">
          <strong>Clean</strong>
          <span>Dashboard Data</span>
        </div>
      </div>
    </DashboardShell>
  )
}

function BuyerDashboard() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await apiRequest('/products')
        setProducts(data.products || [])
      } catch (err) {
        setError(err.message || 'Could not load products')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <DashboardShell roleTitle="Buyer Dashboard">
      {error && <p className="error-text">{error}</p>}

      <div className="dashboard-grid">
        <div className="stat-card">
          <strong>{products.length}</strong>
          <span>Available Products</span>
        </div>

        <div className="stat-card">
          <strong>0</strong>
          <span>My Orders</span>
        </div>

        <div className="stat-card">
          <strong>Active</strong>
          <span>Account Status</span>
        </div>
      </div>

      <div className="panel mt-3">
        <div className="panel-header">
          <div>
            <h2>Available Products</h2>
            <p className="text-muted">
              Real products will appear here when farmers add them.
            </p>
          </div>
        </div>

        {loading ? (
          <p className="text-muted">Loading products...</p>
        ) : products.length === 0 ? (
          <EmptyCard
            title="No products available yet"
            text="This is a clean new account. No fake product or order history is shown."
          />
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <h3>{product.product_name || product.name || 'Product'}</h3>
                <p className="meta">Category: {product.category || 'N/A'}</p>
                <p className="meta">
                  Quantity: {product.quantity || 0} {product.unit || ''}
                </p>
                <p className="price">
                  ৳{product.price_per_unit || product.price || 0}
                  {product.unit ? ` / ${product.unit}` : ''}
                </p>
                <p className="meta">
                  Location: {product.district || product.location || 'N/A'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="panel mt-3">
        <h2>My Orders</h2>
        <EmptyCard
          title="No order history"
          text="Real orders will appear here only after the order system is connected."
        />
      </div>
    </DashboardShell>
  )
}

function FarmerDashboard() {
  return (
    <DashboardShell roleTitle="Farmer Dashboard">
      <div className="dashboard-grid">
        <div className="stat-card">
          <strong>0</strong>
          <span>My Products</span>
        </div>

        <div className="stat-card">
          <strong>0</strong>
          <span>My Bids</span>
        </div>

        <div className="stat-card">
          <strong>Active</strong>
          <span>Account Status</span>
        </div>
      </div>

      <div className="panel mt-3">
        <div className="panel-header">
          <div>
            <h2>Farmer Activity</h2>
            <p className="text-muted">
              Add your real agricultural products and submit procurement bids.
            </p>
          </div>

          <Link className="primary-btn" to="/add-product">
            Add Product
          </Link>
        </div>

        <EmptyCard
          title="No demo product data"
          text="Your real products will appear here after you add them."
        />
      </div>
    </DashboardShell>
  )
}

function GovernmentDashboard() {
  return (
    <DashboardShell roleTitle="Government Officer Dashboard">
      <div className="dashboard-grid">
        <div className="stat-card">
          <strong>0</strong>
          <span>Procurement Requests</span>
        </div>

        <div className="stat-card">
          <strong>0</strong>
          <span>Farmer Bids</span>
        </div>

        <div className="stat-card">
          <strong>Active</strong>
          <span>Account Status</span>
        </div>
      </div>

      <div className="panel mt-3">
        <div className="panel-header">
          <div>
            <h2>Government Procurement</h2>
            <p className="text-muted">
              Create procurement requests and review farmer bids.
            </p>
          </div>

          <Link className="primary-btn" to="/procurement">
            View Procurement
          </Link>
        </div>

        <EmptyCard
          title="No procurement history yet"
          text="Real procurement requests will appear here after you create them."
        />
      </div>
    </DashboardShell>
  )
}

function AdminDashboard() {
  return (
    <DashboardShell roleTitle="Admin Dashboard">
      <div className="dashboard-grid">
        <div className="stat-card">
          <strong>0</strong>
          <span>Pending Officers</span>
        </div>

        <div className="stat-card">
          <strong>Clean</strong>
          <span>No Fake Data</span>
        </div>

        <div className="stat-card">
          <strong>Admin</strong>
          <span>Account Type</span>
        </div>
      </div>

      <div className="panel mt-3">
        <h2>Government Officer Approval</h2>
        <EmptyCard
          title="No fake approval data"
          text="Real pending government officer requests will appear here after users register."
        />
      </div>
    </DashboardShell>
  )
}

function AddProduct() {
  const [form, setForm] = useState({
    product_name: '',
    category: '',
    quantity: '',
    unit: 'kg',
    price_per_unit: '',
    district: '',
    description: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      await apiRequest('/products', {
        method: 'POST',
        body: JSON.stringify(form)
      })

      setSuccess('Product added successfully.')
      setForm({
        product_name: '',
        category: '',
        quantity: '',
        unit: 'kg',
        price_per_unit: '',
        district: '',
        description: ''
      })
    } catch (err) {
      setError(err.message || 'Could not add product')
    } finally {
      setLoading(false)
    }
  }

  return (
    <DashboardShell roleTitle="Add Product">
      <div className="form-card narrow">
        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <form onSubmit={handleSubmit}>
          <label>Product Name</label>
          <input
            name="product_name"
            value={form.product_name}
            onChange={handleChange}
            required
          />

          <label>Category</label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          />

          <label>Quantity</label>
          <input
            name="quantity"
            type="number"
            value={form.quantity}
            onChange={handleChange}
            required
          />

          <label>Unit</label>
          <input name="unit" value={form.unit} onChange={handleChange} />

          <label>Price Per Unit</label>
          <input
            name="price_per_unit"
            type="number"
            value={form.price_per_unit}
            onChange={handleChange}
            required
          />

          <label>District</label>
          <input
            name="district"
            value={form.district}
            onChange={handleChange}
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <button className="primary-btn full" disabled={loading}>
            {loading ? 'Saving...' : 'Add Product'}
          </button>
        </form>
      </div>
    </DashboardShell>
  )
}

function FarmerBids() {
  return (
    <DashboardShell roleTitle="Farmer Bids">
      <div className="panel">
        <h2>My Bids</h2>
        <EmptyCard
          title="No bids yet"
          text="Your real submitted bids will appear here after the bidding system is connected."
        />
      </div>
    </DashboardShell>
  )
}

function SimpleFormPage({ title, subtitle }) {
  return (
    <DashboardShell roleTitle={title || 'Form'}>
      <div className="panel">
        <h2>{title || 'Form Page'}</h2>
        <p className="text-muted">
          {subtitle || 'This section is ready for real backend data.'}
        </p>
      </div>
    </DashboardShell>
  )
}

function Checkout() {
  return (
    <DashboardShell roleTitle="Checkout">
      <div className="panel">
        <h2>Checkout</h2>
        <EmptyCard
          title="No checkout data"
          text="Checkout will show real order information after the order system is connected."
        />
      </div>
    </DashboardShell>
  )
}

export default Dashboard

export {
  Dashboard,
  FarmerDashboard,
  BuyerDashboard,
  GovernmentDashboard,
  AdminDashboard,
  AddProduct,
  FarmerBids,
  SimpleFormPage,
  Checkout
}
