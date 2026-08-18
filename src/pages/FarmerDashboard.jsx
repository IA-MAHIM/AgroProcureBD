import DashboardLayout from "../components/DashboardLayout.jsx";
import StatCard from "../components/StatCard.jsx";
import DataTable from "../components/DataTable.jsx";
import RoleNotice from "../components/RoleNotice.jsx";
import { orders, bids } from "../data/mockData.js";

const links = [{ to: "/farmer/dashboard", label: "Dashboard" }, { to: "/farmer/products", label: "My Products" }, { to: "/farmer/orders", label: "Incoming Orders" }, { to: "/farmer/sales-history", label: "Sales History" }, { to: "/bids/submit", label: "Submit Bid" }];

export default function FarmerDashboard() {
  return (
    <DashboardLayout title="Farmer Dashboard" role="Farmer Panel" links={links}>
      <RoleNotice>Farmer verification and real order updates will be connected with backend later.</RoleNotice>
      <div className="dashboard-cards">
        <StatCard label="My Products" value="12" />
        <StatCard label="Pending Orders" value="5" />
        <StatCard label="Submitted Bids" value="3" />
        <StatCard label="Sales This Month" value="৳45K" />
      </div>
      <DataTable
        columns={["Order ID", "Buyer", "Product", "Quantity", "Status"]}
        rows={orders.map((item) => [item.id, item.buyer, item.product, item.quantity, item.status])}
      />
      <br />
      <DataTable
        columns={["Bid ID", "Procurement", "Offered Price", "Quantity", "Status"]}
        rows={bids.map((item) => [item.id, item.procurementId, `৳${item.offeredPrice}`, item.quantity, item.status])}
      />
    </DashboardLayout>
  );
}
