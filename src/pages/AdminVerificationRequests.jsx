import PageHeader from "../components/PageHeader.jsx";
import DataTable from "../components/DataTable.jsx";
import RoleNotice from "../components/RoleNotice.jsx";
import { officerRequests } from "../data/mockData.js";

export default function AdminVerificationRequests() {
  return (
    <>
      <PageHeader
        title="Admin Verification Requests"
        subtitle="Government officer ID card upload requests appear here for approval or rejection."
        image="/images/id-verification.svg"
      />
      <section className="section">
        <RoleNotice>This is a small preview screen because government officer approval depends on ID upload. Full admin panel will be built in a later phase.</RoleNotice>
        <DataTable
          columns={["Request ID", "Name", "Employee ID", "Department", "District", "ID Card", "Status", "Action"]}
          rows={officerRequests.map((item) => [
            item.id,
            item.name,
            item.employeeId,
            item.department,
            item.district,
            item.idCard,
            item.status,
            "View / Approve / Reject"
          ])}
        />
      </section>
    </>
  );
}
