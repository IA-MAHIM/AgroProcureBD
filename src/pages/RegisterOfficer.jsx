import { Link } from "react-router-dom";
import FormField from "../components/FormField.jsx";
import RoleNotice from "../components/RoleNotice.jsx";

export default function RegisterOfficer() {
  return (
    <section className="auth-page">
      <img className="auth-image" src="/images/id-verification.svg" alt="Government officer registration" />
      <div className="auth-card">
        <p className="eyebrow">Government Officer Registration</p>
        <h1>Apply for Officer Account</h1>
        <RoleNotice>The account will stay pending until Admin reviews the uploaded ID card and employee information.</RoleNotice>
        <div className="form-grid">
          <FormField label="Full Name" placeholder="Enter full name" />
          <FormField label="Government Email" type="email" placeholder="officer@gov.bd" />
          <FormField label="Phone" placeholder="01XXXXXXXXX" />
          <FormField label="NID Number" placeholder="Enter NID number" />
          <FormField label="Employee ID" placeholder="Example: AG-29384" />
          <FormField label="Designation" placeholder="Procurement Officer" />
          <FormField label="Department" placeholder="Department name" />
          <FormField label="Office District" placeholder="Dhaka" />
          <FormField label="Password" type="password" placeholder="Create password" />
          <FormField label="Confirm Password" type="password" placeholder="Confirm password" />
          <FormField label="Government ID Card Front" type="file" />
          <FormField label="Government ID Card Back" type="file" />
        </div>
        <FormField label="Office Address" as="textarea" placeholder="Enter office address" />
        <div className="form-actions">
          <Link className="btn btn-primary" to="/otp-verification">Submit for Verification</Link>
          <Link className="btn btn-outline" to="/admin/verification-requests">Admin Review Preview</Link>
        </div>
      </div>
    </section>
  );
}
