import DashboardLayout from "../components/DashboardLayout.jsx";
import DataTable from "../components/DataTable.jsx";
import FormField from "../components/FormField.jsx";
import { products } from "../data/mockData.js";

const links = [{ to: "/farmer/dashboard", label: "Dashboard" }, { to: "/farmer/products", label: "My Products" }, { to: "/farmer/orders", label: "Incoming Orders" }, { to: "/farmer/sales-history", label: "Sales History" }, { to: "/bids/submit", label: "Submit Bid" }];

export default function FarmerProducts() {
  return (
    <DashboardLayout title="My Products" role="Farmer Panel" links={links}>
      <div className="form-panel">
        <h2>Add Product</h2>
        <div className="form-grid">
          <FormField label="Product Name" placeholder="Example: Fresh Potato" />
          <FormField label="Category" placeholder="Vegetables" />
          <FormField label="Quantity" type="number" placeholder="500" />
          <FormField label="Unit" placeholder="kg / piece" />
          <FormField label="Price Per Unit" type="number" placeholder="35" />
          <FormField label="District" placeholder="Bogura" />
          <FormField label="Product Image" type="file" />
          <FormField label="Availability" placeholder="Available" />
        </div>
        <FormField label="Description" as="textarea" placeholder="Write product details" />
        <button className="btn btn-primary">Save Product</button>
      </div>
      <br />
      <DataTable
        columns={["Product", "Category", "District", "Price", "Quantity"]}
        rows={products.map((item) => [item.name, item.category, item.district, `৳${item.price}/${item.unit}`, `${item.quantity} ${item.unit}`])}
      />
    </DashboardLayout>
  );
}
