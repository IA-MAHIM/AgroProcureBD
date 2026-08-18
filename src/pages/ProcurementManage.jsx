import DashboardLayout from "../components/DashboardLayout.jsx";
import DataTable from "../components/DataTable.jsx";
import { procurementRequests } from "../data/mockData.js";

const links = [{ to: "/government/dashboard", label: "Dashboard" }, { to: "/government/procurements/create", label: "Post Request" }, { to: "/government/procurements/manage", label: "Manage Requests" }, { to: "/government/procurements/offers", label: "View Offers" }, { to: "/procurements", label: "Public Notices" }];

export default function ProcurementManage() {
  return (
    <DashboardLayout title="Manage Procurement Requests" role="Govt Officer" links={links}>
      <DataTable
        columns={["ID", "Product", "Quantity", "Max Budget", "Status", "Action"]}
        rows={procurementRequests.map((item) => [item.id, item.product, `${item.quantity} ${item.unit}`, `৳${item.maxBudget.toLocaleString()}`, item.status, "Edit / Close"])}
      />
    </DashboardLayout>
  );
}
