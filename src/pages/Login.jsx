import { Link } from "react-router-dom";
import FormField from "../components/FormField.jsx";
import RoleNotice from "../components/RoleNotice.jsx";

export default function Login() {
  return (
    <section className="auth-page">
      <img className="auth-image" src="/images/auth-otp.svg" alt="Login" />
      <div className="auth-card">
        <p className="eyebrow">Secure Access</p>
        <h1>Login</h1>
        <p>Backend authentication will be connected later. This is the frontend login UI.</p>
        <RoleNotice>After backend connection, users will be redirected by role: Farmer, Buyer, Government Officer or Admin.</RoleNotice>
        <FormField label="Email" type="email" placeholder="example@mail.com" />
        <FormField label="Password" type="password" placeholder="Enter password" />
        <button className="btn btn-primary full">Login</button>
        <div className="form-actions">
          <Link to="/forgot-password">Forgot password?</Link>
          <Link to="/register/buyer">Create account</Link>
        </div>
      </div>
    </section>
  );
}
