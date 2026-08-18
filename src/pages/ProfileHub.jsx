import PageHeader from "../components/PageHeader.jsx";
import FormField from "../components/FormField.jsx";

export default function ProfileHub() {
  return (
    <>
      <PageHeader title="Profile Management" subtitle="Editable profile UI for all role types." image="/images/auth-otp.svg" />
      <section className="section">
        <div className="form-panel">
          <h2>Edit Profile</h2>
          <div className="form-grid">
            <FormField label="Full Name" placeholder="User name" />
            <FormField label="Phone" placeholder="Phone number" />
            <FormField label="Email" type="email" placeholder="user@mail.com" />
            <FormField label="District" placeholder="District" />
            <FormField label="Profile Photo" type="file" />
            <FormField label="Verification Status" placeholder="Pending / Approved / Rejected" />
          </div>
          <button className="btn btn-primary">Save Profile</button>
        </div>
      </section>
    </>
  );
}
