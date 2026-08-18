import PageHeader from "../components/PageHeader.jsx";

export default function About() {
  return (
    <>
      <PageHeader
        title="About AgroProcureBD"
        subtitle="A simple digital solution for agricultural selling, buying and government procurement."
        image="/images/marketplace.svg"
      />
      <section className="section card-grid">
        <div className="card">
          <h3>For Farmers</h3>
          <p>Farmers can add crops, update stock, set price, view buyer orders and submit offers for government procurement.</p>
        </div>
        <div className="card">
          <h3>For Buyers</h3>
          <p>Buyers can browse products, filter by category or district, add to cart, checkout and track order history.</p>
        </div>
        <div className="card">
          <h3>For Government Officers</h3>
          <p>Verified officers can post procurement demands, view farmer bids, compare offers and manage procurement records.</p>
        </div>
      </section>
    </>
  );
}
