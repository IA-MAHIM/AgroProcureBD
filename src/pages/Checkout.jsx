import DashboardLayout from "../components/DashboardLayout.jsx";
import FormField from "../components/FormField.jsx";
import RoleNotice from "../components/RoleNotice.jsx";

const links = [{ to: "/buyer/dashboard", label: "Dashboard" }, { to: "/products", label: "Browse Products" }, { to: "/cart", label: "Cart" }, { to: "/checkout", label: "Checkout" }, { to: "/buyer/orders", label: "Order History" }];

export default function Checkout() {
  return (
    <DashboardLayout title="Checkout" role="Buyer Panel" links={links}>
      <RoleNotice>Payment and shipping are planned for later phases. This page prepares the frontend form structure.</RoleNotice>
      <div className="form-panel">
        <h2>Shipping Information</h2>
        <div className="form-grid">
          <FormField label="Receiver Name" placeholder="Enter name" />
          <FormField label="Phone" placeholder="01XXXXXXXXX" />
          <FormField label="District" placeholder="Dhaka" />
          <FormField label="Delivery Area" placeholder="Uttara" />
        </div>
        <FormField label="Full Address" as="textarea" placeholder="Enter delivery address" />
        <h2>Payment Method</h2>
        <div className="form-grid">
          <FormField label="Payment Option" placeholder="Cash on Delivery / Demo Online" />
          <FormField label="Order Note" placeholder="Optional note" />
        </div>
        <button className="btn btn-primary">Place Order Demo</button>
      </div>
    </DashboardLayout>
  );
}
