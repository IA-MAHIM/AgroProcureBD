import DashboardLayout from "../components/DashboardLayout.jsx";
import FormField from "../components/FormField.jsx";

const links = [{ to: "/government/dashboard", label: "Dashboard" }, { to: "/government/procurements/create", label: "Post Request" }, { to: "/government/procurements/manage", label: "Manage Requests" }, { to: "/government/procurements/offers", label: "View Offers" }, { to: "/procurements", label: "Public Notices" }];

export default function ProcurementCreate() {
  return (
    <DashboardLayout title="Post Procurement Request" role="Govt Officer" links={links}>
      <div className="form-panel">
        <h2>Create New Request</h2>
        <div className="form-grid">
          <FormField label="Product Name" placeholder="Rice" />
          <FormField label="Quantity" type="number" placeholder="5000" />
          <FormField label="Unit" placeholder="kg / piece" />
          <FormField label="Maximum Budget" type="number" placeholder="350000" />
          <FormField label="District" placeholder="Dhaka" />
          <FormField label="Deadline" type="date" />
        </div>
        <FormField label="Requirement Details" as="textarea" placeholder="Quality, delivery condition, office address etc." />
        <button className="btn btn-primary">Publish Request</button>
      </div>
    </DashboardLayout>
  );
}
