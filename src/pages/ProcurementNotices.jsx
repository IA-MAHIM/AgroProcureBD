import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import DataTable from "../components/DataTable.jsx";
import { procurementRequests } from "../data/mockData.js";

export default function ProcurementNotices() {
  return (
    <>
      <PageHeader
        title="Government Procurement Notices"
        subtitle="Farmers can view open procurement requests and submit bids."
        image="/images/government-procurement.svg"
      />
      <section className="section">
        <DataTable
          columns={["ID", "Product", "Quantity", "District", "Deadline", "Max Budget", "Status"]}
          rows={procurementRequests.map((item) => [
            item.id,
            item.product,
            `${item.quantity} ${item.unit}`,
            item.district,
            item.deadline,
            `৳${item.maxBudget.toLocaleString()}`,
            item.status
          ])}
        />
        <div className="form-actions">
          <Link to="/bids/submit" className="btn btn-primary">Submit Bid</Link>
          <Link to="/government/procurements/create" className="btn btn-outline">Post Procurement Request</Link>
        </div>
      </section>
    </>
  );
}
