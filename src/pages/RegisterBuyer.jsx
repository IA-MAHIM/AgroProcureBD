import { Link } from "react-router-dom";
import FormField from "../components/FormField.jsx";

export default function RegisterBuyer() {
  return (
    <section className="auth-page">
      <img className="auth-image" src="/images/buyer-dashboard.svg" alt="Buyer registration" />
      <div className="auth-card">
        <p className="eyebrow">Buyer Registration</p>
        <h1>Create Buyer Account</h1>
        <div className="form-grid">
          <FormField label="Full Name" placeholder="Enter full name" />
          <FormField label="Phone" placeholder="01XXXXXXXXX" />
          <FormField label="Email" type="email" placeholder="buyer@mail.com" />
          <FormField label="District" placeholder="Dhaka" />
          <FormField label="Password" type="password" placeholder="Create password" />
          <FormField label="Confirm Password" type="password" placeholder="Confirm password" />
        </div>
        <div className="form-actions">
          <Link className="btn btn-primary" to="/otp-verification">Register and Verify OTP</Link>
          <Link className="btn btn-outline" to="/register/farmer">Register as Farmer</Link>
          <Link className="btn btn-soft" to="/register/government-officer">Govt Officer</Link>
        </div>
      </div>
    </section>
  );
}
