import FormField from "../components/FormField.jsx";

export default function ResetPassword() {
  return (
    <section className="auth-page">
      <img className="auth-image" src="/images/auth-otp.svg" alt="Reset password" />
      <div className="auth-card">
        <p className="eyebrow">Password Recovery</p>
        <h1>Reset Password</h1>
        <FormField label="New Password" type="password" placeholder="Enter new password" />
        <FormField label="Confirm Password" type="password" placeholder="Confirm new password" />
        <button className="btn btn-primary">Reset Password</button>
      </div>
    </section>
  );
}
