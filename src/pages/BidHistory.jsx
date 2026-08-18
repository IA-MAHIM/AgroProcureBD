import DashboardLayout from "../components/DashboardLayout.jsx";
import DataTable from "../components/DataTable.jsx";
import { bids } from "../data/mockData.js";

const links = [{ to: "/bids", label: "Open Requests" }, { to: "/bids/submit", label: "Submit Bid" }, { to: "/bids/history", label: "Bid History" }, { to: "/procurements", label: "Notices" }, { to: "/farmer/dashboard", label: "Farmer Panel" }];

export default function BidHistory() {
  return (
    <DashboardLayout title="Bid History" role="Bidding System" links={links}>
      <DataTable
        columns={["Bid ID", "Procurement", "Farmer", "Price", "Quantity", "Delivery Date", "Status"]}
        rows={bids.map((item) => [item.id, item.procurementId, item.farmer, `৳${item.offeredPrice}`, item.quantity, item.deliveryDate, item.status])}
      />
    </DashboardLayout>
  );
}
