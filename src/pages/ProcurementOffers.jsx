import DashboardLayout from "../components/DashboardLayout.jsx";
import DataTable from "../components/DataTable.jsx";
import { bids } from "../data/mockData.js";

const links = [{ to: "/government/dashboard", label: "Dashboard" }, { to: "/government/procurements/create", label: "Post Request" }, { to: "/government/procurements/manage", label: "Manage Requests" }, { to: "/government/procurements/offers", label: "View Offers" }, { to: "/procurements", label: "Public Notices" }];

export default function ProcurementOffers() {
  return (
    <DashboardLayout title="Farmer Offers" role="Govt Officer" links={links}>
      <DataTable
        columns={["Bid ID", "Procurement", "Farmer", "Offered Price", "Quantity", "Delivery", "Action"]}
        rows={bids.map((item) => [item.id, item.procurementId, item.farmer, `৳${item.offeredPrice}`, item.quantity, item.deliveryDate, "Accept / Reject"])}
      />
    </DashboardLayout>
  );
}
