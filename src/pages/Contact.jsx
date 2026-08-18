import PageHeader from "../components/PageHeader.jsx";
import FormField from "../components/FormField.jsx";

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Send feedback, project questions or support requests."
        image="/images/reports-preview.svg"
      />
      <section className="section">
        <div className="form-panel">
          <h2>Send Message</h2>
          <div className="form-grid">
            <FormField label="Full Name" placeholder="Enter your name" />
            <FormField label="Email" type="email" placeholder="Enter your email" />
          </div>
          <FormField label="Subject" placeholder="Message subject" />
          <FormField label="Message" as="textarea" placeholder="Write your message" />
          <button className="btn btn-primary">Submit Message</button>
        </div>
      </section>
    </>
  );
}
