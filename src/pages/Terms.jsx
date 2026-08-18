import PageHeader from "../components/PageHeader.jsx";

export default function Terms() {
  return (
    <>
      <PageHeader title="Terms and Conditions" subtitle="Project demo terms for AgroProcureBD." image="/images/id-verification.svg" />
      <section className="section">
        <div className="card">
          <h3>Academic Demo Terms</h3>
          <p>This frontend is created for a software engineering academic project. Product prices, procurement requests, users, orders and bids are demo data. Real transactions, payments, database actions and delivery are not active in this version.</p>
          <p>Users should not upload real sensitive documents during frontend testing. File upload fields are UI placeholders until backend file storage is connected.</p>
        </div>
      </section>
    </>
  );
}
