import PageHeader from "../components/PageHeader.jsx";

export default function Privacy() {
  return (
    <>
      <PageHeader title="Privacy Policy" subtitle="How user data will be handled in the final system." image="/images/auth-otp.svg" />
      <section className="section">
        <div className="card">
          <h3>Privacy Plan</h3>
          <p>In the final system, user registration data, OTP verification, government officer ID uploads and order records will be stored securely in the backend database. This frontend package does not upload or store documents permanently.</p>
        </div>
      </section>
    </>
  );
}
