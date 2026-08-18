import DashboardLayout from "../components/DashboardLayout.jsx";
import StatCard from "../components/StatCard.jsx";
import ProductCard from "../components/ProductCard.jsx";
import RoleNotice from "../components/RoleNotice.jsx";
import { products } from "../data/mockData.js";

const links = [{ to: "/buyer/dashboard", label: "Dashboard" }, { to: "/products", label: "Browse Products" }, { to: "/cart", label: "Cart" }, { to: "/checkout", label: "Checkout" }, { to: "/buyer/orders", label: "Order History" }];

export default function BuyerDashboard() {
  return (
    <DashboardLayout title="Buyer Dashboard" role="Buyer Panel" links={links}>
      <RoleNotice>Cart and checkout are frontend demo pages. Backend order placement will be connected later.</RoleNotice>
      <div className="dashboard-cards">
        <StatCard label="Cart Items" value="3" />
        <StatCard label="Orders" value="8" />
        <StatCard label="Pending Delivery" value="2" />
        <StatCard label="Saved Farmers" value="5" />
      </div>
      <div className="product-grid">
        {products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </DashboardLayout>
  );
}
