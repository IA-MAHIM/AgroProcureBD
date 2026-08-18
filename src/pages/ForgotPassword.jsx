import { Link } from "react-router-dom";
import FormField from "../components/FormField.jsx";

export default function ForgotPassword() {
  return (
    <section className="auth-page">
      <img className="auth-image" src="/images/auth-otp.svg" alt="Forgot password" />
      <div className="auth-card">
        <p className="eyebrow">Password Recovery</p>
        <h1>Forgot Password</h1>
        <FormField label="Email" type="email" placeholder="Enter registered email" />
        <Link to="/reset-password" className="btn btn-primary">Send Reset Link</Link>
      </div>
    </section>
  );
}
