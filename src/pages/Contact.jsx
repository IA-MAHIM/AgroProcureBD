export default function Contact({ t }) {
  return (
    <section className="container section">
      <div className="form-card narrow">
        <p className="eyebrow">{t.contact}</p>
        <h1>{t.contact}</h1>
        <p>{t.contactText}</p>

        <label>{t.fullName}</label>
        <input placeholder={t.fullName} />

        <label>{t.email}</label>
        <input placeholder={t.email} />

        <label>Message</label>
        <textarea rows="5" placeholder="Write your message" />

        <button className="primary-btn full">{t.submit}</button>
      </div>
    </section>
  )
}
