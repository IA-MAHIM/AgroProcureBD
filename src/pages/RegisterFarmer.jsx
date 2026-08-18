import { Link } from "react-router-dom";
import FormField from "../components/FormField.jsx";

export default function RegisterFarmer() {
  return (
    <section className="auth-page">
      <img className="auth-image" src="/images/farmer-dashboard.svg" alt="Farmer registration" />
      <div className="auth-card">
        <p className="eyebrow">Farmer Registration</p>
        <h1>Create Farmer Account</h1>
        <p>Farmer account can be verified by Admin before product selling is enabled.</p>
        <div className="form-grid">
          <FormField label="Full Name" placeholder="Enter full name" />
          <FormField label="Phone" placeholder="01XXXXXXXXX" />
          <FormField label="Email" type="email" placeholder="farmer@mail.com" />
          <FormField label="NID Number" placeholder="Enter NID number" />
          <FormField label="District" placeholder="Bogura" />
          <FormField label="Upazila" placeholder="Sariakandi" />
          <FormField label="Farm Size" placeholder="Example: 5 acres" />
          <FormField label="Main Crop Type" placeholder="Rice, Potato, Mango" />
          <FormField label="Password" type="password" placeholder="Create password" />
          <FormField label="Confirm Password" type="password" placeholder="Confirm password" />
        </div>
        <Link className="btn btn-primary" to="/otp-verification">Register and Verify OTP</Link>
      </div>
    </section>
  );
}
