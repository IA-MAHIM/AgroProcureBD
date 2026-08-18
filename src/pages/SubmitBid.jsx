import DashboardLayout from "../components/DashboardLayout.jsx";
import FormField from "../components/FormField.jsx";
import RoleNotice from "../components/RoleNotice.jsx";

const links = [{ to: "/bids", label: "Open Requests" }, { to: "/bids/submit", label: "Submit Bid" }, { to: "/bids/history", label: "Bid History" }, { to: "/procurements", label: "Notices" }, { to: "/farmer/dashboard", label: "Farmer Panel" }];

export default function SubmitBid() {
  return (
    <DashboardLayout title="Submit Bid" role="Bidding System" links={links}>
      <RoleNotice>Only approved farmers should be allowed to submit bids after backend role authorization is added.</RoleNotice>
      <div className="form-panel">
        <h2>Farmer Offer Form</h2>
        <div className="form-grid">
          <FormField label="Procurement ID" placeholder="GOV-2026-001" />
          <FormField label="Farmer Name" placeholder="Rahman Agro Farm" />
          <FormField label="Offered Price Per Unit" type="number" placeholder="64" />
          <FormField label="Quantity Offered" type="number" placeholder="5000" />
          <FormField label="Delivery Date" type="date" />
          <FormField label="Product Quality Note" placeholder="Clean and verified" />
        </div>
        <FormField label="Additional Message" as="textarea" placeholder="Write delivery and quality details" />
        <button className="btn btn-primary">Submit Bid</button>
      </div>
    </DashboardLayout>
  );
}
