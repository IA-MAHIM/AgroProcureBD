import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-card-body">
        <span className="badge">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.farmer} - {product.district}</p>
        <div className="product-meta">
          <strong>৳{product.price}/{product.unit}</strong>
          <span>{product.quantity} {product.unit} available</span>
        </div>
        <Link to={`/products/${product.id}`} className="btn btn-primary full">View Details</Link>
      </div>
    </article>
  );
}
