import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { productCategories, products } from "../data/mockData.js";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [district, setDistrict] = useState("");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const q = search.toLowerCase();
      return (
        product.name.toLowerCase().includes(q) &&
        (category ? product.category === category : true) &&
        (district ? product.district === district : true)
      );
    });
  }, [search, category, district]);

  const districts = [...new Set(products.map((item) => item.district))];

  return (
    <>
      <PageHeader title="Browse Products" subtitle="Search crops by name, category and district." image="/images/marketplace.svg" />
      <section className="section">
        <div className="filters">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search product name" />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            {productCategories.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={district} onChange={(e) => setDistrict(e.target.value)}>
            <option value="">All Districts</option>
            {districts.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className="product-grid">
          {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </>
  );
}
