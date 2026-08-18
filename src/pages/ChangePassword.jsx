import FormField from "../components/FormField.jsx";

export default function ChangePassword() {
  return (
    <section className="section">
      <div className="form-panel">
        <p className="eyebrow">Account Security</p>
        <h2>Change Password</h2>
        <FormField label="Current Password" type="password" placeholder="Current password" />
        <FormField label="New Password" type="password" placeholder="New password" />
        <FormField label="Confirm New Password" type="password" placeholder="Confirm password" />
        <button className="btn btn-primary">Update Password</button>
      </div>
    </section>
  );
}
