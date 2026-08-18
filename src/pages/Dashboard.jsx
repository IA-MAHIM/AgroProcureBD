import { useEffect, useState } from 'react'
import { apiRequest } from '../services/api'

function BuyerDashboard({ t }) {
  const text = t || {}

  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const savedUser = localStorage.getItem('agro-user')

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch {
        setUser(null)
      }
    }
  }, [])

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoadingProducts(true)
        setError('')

        const data = await apiRequest('/products')
        setProducts(data.products || [])
      } catch (err) {
        setError(err.message || 'Could not load products')
      } finally {
        setLoadingProducts(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <section className="container section">
      <div className="panel-header">
        <div>
          <p className="eyebrow">{text.buyer || 'Buyer'} Dashboard</p>
          <h1>Welcome{user?.full_name ? `, ${user.full_name}` : ''}</h1>
          <p className="text-muted">
            Browse available agricultural products from verified farmers.
          </p>
        </div>
      </div>

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
              Products will appear here when farmers add them.
            </p>
          </div>
        </div>

        {loadingProducts ? (
          <p className="text-muted">Loading products...</p>
        ) : products.length === 0 ? (
          <div className="card">
            <h3>No products available yet</h3>
            <p>
              This is a clean new account. No fake order history or demo product
              data is shown.
            </p>
          </div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <h3>{product.product_name || product.name || 'Product'}</h3>

                <p className="meta">
                  Category: {product.category || 'N/A'}
                </p>

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

                <p className="meta">
                  Farmer: {product.farmer_name || 'Verified Farmer'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="panel mt-3">
        <div className="panel-header">
          <div>
            <h2>My Orders</h2>
            <p className="text-muted">
              You have not placed any order yet.
            </p>
          </div>
        </div>

        <div className="card">
          <h3>No order history</h3>
          <p>
            Your order history is empty. Real orders will appear here only after
            the order system is connected.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BuyerDashboard
export { BuyerDashboard }
