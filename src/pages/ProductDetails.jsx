import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { products } from "../data/mockData.js";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id) || products[0];

  return (
    <>
      <PageHeader title={product.name} subtitle={`${product.category} from ${product.farmer}`} image={product.image} />
      <section className="section">
        <div className="card">
          <span className="badge">{product.category}</span>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p><strong>District:</strong> {product.district}</p>
          <p><strong>Price:</strong> ৳{product.price}/{product.unit}</p>
          <p><strong>Available Quantity:</strong> {product.quantity} {product.unit}</p>
          <div className="form-actions">
            <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
            <Link to="/checkout" className="btn btn-outline">Checkout Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
