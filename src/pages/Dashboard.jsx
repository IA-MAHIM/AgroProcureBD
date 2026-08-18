import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { apiRequest } from '../services/api'

function Dashboard({ t }) {
  const text = t || {}
  const location = useLocation()

  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(false)
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

  const pathRole = location.pathname.includes('farmer')
    ? 'farmer'
    : location.pathname.includes('buyer')
      ? 'buyer'
      : location.pathname.includes('government')
        ? 'government'
        : location.pathname.includes('admin')
          ? 'admin'
          : ''

  const role = user?.role || pathRole || 'user'

  useEffect(() => {
    async function loadProducts() {
      if (role !== 'buyer') return

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
  }, [role])

  const roleTitle =
    role === 'buyer'
      ? 'Buyer Dashboard'
      : role === 'farmer'
        ? 'Farmer Dashboard'
        : role === 'government'
          ? 'Government Officer Dashboard'
          : role === 'admin'
            ? 'Admin Dashboard'
            : 'Dashboard'

  return (
    <section className="container section">
      <div className="panel-header">
        <div>
          <p className="eyebrow">{roleTitle}</p>
          <h1>
            Welcome{user?.full_name ? `, ${user.full_name}` : ''}
          </h1>
          <p className="text-muted">
            This dashboard is clean. No demo order history or fake data is shown.
          </p>
        </div>
      </div>

      {error && <p className="error-text">{error}</p>}

      <div className="dashboard-grid">
        <div className="stat-card">
          <strong>Active</strong>
          <span>Account Status</span>
        </div>

        <div className="stat-card">
          <strong>{role}</strong>
          <span>Account Type</span>
        </div>

        <div className="stat-card">
          <strong>0</strong>
          <span>Demo Records</span>
        </div>
      </div>

      {role === 'buyer' && (
        <>
          <div className="panel mt-3">
            <div className="panel-header">
              <div>
                <h2>Available Products</h2>
                <p className="text-muted">
                  Real products will appear here when farmers add products.
                </p>
              </div>
            </div>

            {loadingProducts ? (
              <p className="text-muted">Loading products...</p>
            ) : products.length === 0 ? (
              <div className="card">
                <h3>No products available yet</h3>
                <p>
                  This is a clean account. No fake products are shown.
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
                Real order history will appear here only after the order system
                is connected.
              </p>
            </div>
          </div>
        </>
      )}

      {role === 'farmer' && (
        <div className="panel mt-3">
          <div className="panel-header">
            <div>
              <h2>Farmer Activity</h2>
              <p className="text-muted">
                Add products and manage your listed agricultural items.
              </p>
            </div>

            <Link className="primary-btn" to="/products">
              View Products
            </Link>
          </div>

          <div className="card">
            <h3>No demo product data</h3>
            <p>
              Your products will appear here only after the product system is
              connected with your farmer account.
            </p>
          </div>
        </div>
      )}

      {role === 'government' && (
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

          <div className="card">
            <h3>No procurement history yet</h3>
            <p>
              Real procurement requests will appear here after you create them.
            </p>
          </div>
        </div>
      )}

      {role === 'admin' && (
        <div className="panel mt-3">
          <div className="panel-header">
            <div>
              <h2>Admin Panel</h2>
              <p className="text-muted">
                Verify government officers and manage platform approvals.
              </p>
            </div>
          </div>

          <div className="card">
            <h3>No fake approval data</h3>
            <p>
              Real pending government officer requests will appear here after
              users register.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Dashboard
export { Dashboard }
