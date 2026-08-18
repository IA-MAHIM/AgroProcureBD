import DashboardLayout from "../components/DashboardLayout.jsx";
import DataTable from "../components/DataTable.jsx";
import { orders } from "../data/mockData.js";

const links = [{ to: "/farmer/dashboard", label: "Dashboard" }, { to: "/farmer/products", label: "My Products" }, { to: "/farmer/orders", label: "Incoming Orders" }, { to: "/farmer/sales-history", label: "Sales History" }, { to: "/bids/submit", label: "Submit Bid" }];

export default function FarmerOrders() {
  return (
    <DashboardLayout title="Incoming Orders" role="Farmer Panel" links={links}>
      <DataTable
        columns={["Order ID", "Buyer", "Product", "Quantity", "Total", "Action"]}
        rows={orders.map((item) => [item.id, item.buyer, item.product, item.quantity, `৳${item.total}`, "Accept / Reject"])}
      />
    </DashboardLayout>
  );
}
