import DashboardLayout from "../components/DashboardLayout.jsx";
import DataTable from "../components/DataTable.jsx";
import { orders } from "../data/mockData.js";

const links = [{ to: "/buyer/dashboard", label: "Dashboard" }, { to: "/products", label: "Browse Products" }, { to: "/cart", label: "Cart" }, { to: "/checkout", label: "Checkout" }, { to: "/buyer/orders", label: "Order History" }];

export default function BuyerOrders() {
  return (
    <DashboardLayout title="Order History" role="Buyer Panel" links={links}>
      <DataTable
        columns={["Order ID", "Product", "Quantity", "Total", "Status", "Payment"]}
        rows={orders.map((item) => [item.id, item.product, item.quantity, `৳${item.total}`, item.status, item.payment])}
      />
    </DashboardLayout>
  );
}
