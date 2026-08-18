import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import StatCard from "../components/StatCard.jsx";
import DataTable from "../components/DataTable.jsx";
import { products, procurementRequests, stats } from "../data/mockData.js";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">Bangladesh Agricultural Marketplace</p>
          <h1>Sell crops directly and manage government procurement digitally.</h1>
          <p>
            AgroProcureBD connects farmers, buyers and verified government officers in one platform.
            This frontend covers the first seven phases: public website, authentication, profiles,
            farmer module, buyer module, procurement and bidding.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">Browse Products</Link>
            <Link to="/procurements" className="btn btn-outline">View Procurement Notices</Link>
            <Link to="/register/government-officer" className="btn btn-soft">Officer Registration</Link>
          </div>
        </div>
        <img src="/images/hero-farm.svg" alt="AgroProcureBD hero" />
      </section>

      <section className="stats-grid">
        {stats.map((item) => <StatCard key={item.label} {...item} />)}
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Marketplace</p>
            <h2>Featured Products</h2>
          </div>
          <Link to="/products" className="btn btn-outline">View All</Link>
        </div>
        <div className="product-grid">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Government Requests</p>
            <h2>Latest Procurement Notices</h2>
          </div>
          <Link to="/bids" className="btn btn-primary">Submit Bid</Link>
        </div>
        <DataTable
          columns={["ID", "Product", "Quantity", "District", "Max Budget", "Status"]}
          rows={procurementRequests.map((item) => [
            item.id,
            item.product,
            `${item.quantity} ${item.unit}`,
            item.district,
            `৳${item.maxBudget.toLocaleString()}`,
            item.status
          ])}
        />
      </section>
    </>
  );
}
