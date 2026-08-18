import DashboardLayout from "../components/DashboardLayout.jsx";
import DataTable from "../components/DataTable.jsx";
import { products } from "../data/mockData.js";

const links = [{ to: "/buyer/dashboard", label: "Dashboard" }, { to: "/products", label: "Browse Products" }, { to: "/cart", label: "Cart" }, { to: "/checkout", label: "Checkout" }, { to: "/buyer/orders", label: "Order History" }];

export default function Cart() {
  const rows = products.slice(0, 3).map((item) => [item.name, `৳${item.price}`, "10", `৳${item.price * 10}`, "Remove"]);
  return (
    <DashboardLayout title="Shopping Cart" role="Buyer Panel" links={links}>
      <DataTable columns={["Product", "Price", "Quantity", "Subtotal", "Action"]} rows={rows} />
      <div className="form-actions">
        <a href="/checkout" className="btn btn-primary">Proceed to Checkout</a>
      </div>
    </DashboardLayout>
  );
}
