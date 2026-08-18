import PageHeader from "../components/PageHeader.jsx";
import { productCategories } from "../data/mockData.js";

export default function Categories() {
  return (
    <>
      <PageHeader title="Product Categories" subtitle="Browse crop and agricultural product categories." image="/images/marketplace.svg" />
      <section className="section feature-grid">
        {productCategories.map((category) => (
          <div className="card" key={category}>
            <span className="badge">Category</span>
            <h3>{category}</h3>
            <p>Browse available {category.toLowerCase()} products from farmers and verified suppliers.</p>
          </div>
        ))}
      </section>
    </>
  );
}
