import PageHeader from "../components/PageHeader.jsx";

const faqs = [
  ["Can anyone register as a Government Officer?", "Yes, but the account will stay pending until Admin verifies the uploaded government ID card and employee details."],
  ["Is this connected to a real database?", "Not yet. This Phase 1-7 package is frontend-only. SQL database and backend API will be connected later."],
  ["Can farmers set their own crop price?", "Yes. Farmers set product prices. Government officers compare bids; they do not change farmer prices."],
  ["Will OTP be added later?", "Yes. Email OTP can be connected later from the Node.js backend."]
];

export default function FAQ() {
  return (
    <>
      <PageHeader title="FAQ" subtitle="Common questions about the project." image="/images/auth-otp.svg" />
      <section className="section card-grid">
        {faqs.map(([q, a]) => (
          <div className="card" key={q}>
            <h3>{q}</h3>
            <p>{a}</p>
          </div>
        ))}
      </section>
    </>
  );
}
