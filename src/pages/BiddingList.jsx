import DashboardLayout from "../components/DashboardLayout.jsx";
import DataTable from "../components/DataTable.jsx";
import { procurementRequests } from "../data/mockData.js";

const links = [{ to: "/bids", label: "Open Requests" }, { to: "/bids/submit", label: "Submit Bid" }, { to: "/bids/history", label: "Bid History" }, { to: "/procurements", label: "Notices" }, { to: "/farmer/dashboard", label: "Farmer Panel" }];

export default function BiddingList() {
  return (
    <DashboardLayout title="Open Procurement Requests" role="Bidding System" links={links}>
      <DataTable
        columns={["ID", "Product", "Quantity", "District", "Deadline", "Budget", "Status"]}
        rows={procurementRequests.map((item) => [item.id, item.product, `${item.quantity} ${item.unit}`, item.district, item.deadline, `৳${item.maxBudget.toLocaleString()}`, item.status])}
      />
    </DashboardLayout>
  );
}
