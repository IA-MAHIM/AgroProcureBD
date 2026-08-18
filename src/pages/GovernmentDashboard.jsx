import DashboardLayout from "../components/DashboardLayout.jsx";
import StatCard from "../components/StatCard.jsx";
import DataTable from "../components/DataTable.jsx";
import RoleNotice from "../components/RoleNotice.jsx";
import { procurementRequests } from "../data/mockData.js";

const links = [{ to: "/government/dashboard", label: "Dashboard" }, { to: "/government/procurements/create", label: "Post Request" }, { to: "/government/procurements/manage", label: "Manage Requests" }, { to: "/government/procurements/offers", label: "View Offers" }, { to: "/procurements", label: "Public Notices" }];

export default function GovernmentDashboard() {
  return (
    <DashboardLayout title="Government Officer Dashboard" role="Govt Officer" links={links}>
      <RoleNotice>Government officer accounts must be approved by Admin after ID card review.</RoleNotice>
      <div className="dashboard-cards">
        <StatCard label="Open Requests" value="7" />
        <StatCard label="Received Offers" value="26" />
        <StatCard label="Selected Bids" value="4" />
        <StatCard label="Completed" value="12" />
      </div>
      <DataTable
        columns={["ID", "Product", "Quantity", "District", "Deadline", "Status"]}
        rows={procurementRequests.map((item) => [item.id, item.product, `${item.quantity} ${item.unit}`, item.district, item.deadline, item.status])}
      />
    </DashboardLayout>
  );
}
