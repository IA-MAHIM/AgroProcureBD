import FormField from "../components/FormField.jsx";
import RoleNotice from "../components/RoleNotice.jsx";

export default function OtpVerification() {
  return (
    <section className="auth-page">
      <img className="auth-image" src="/images/auth-otp.svg" alt="OTP verification" />
      <div className="auth-card">
        <p className="eyebrow">Email Verification</p>
        <h1>Enter OTP</h1>
        <RoleNotice>Email OTP will be sent from Node.js backend later. This page is ready for frontend integration.</RoleNotice>
        <FormField label="6 Digit OTP" placeholder="123456" />
        <div className="form-actions">
          <button className="btn btn-primary">Verify OTP</button>
          <button className="btn btn-outline">Resend OTP</button>
        </div>
      </div>
    </section>
  );
}
