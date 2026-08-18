export default function FormField({ label, type = "text", placeholder, required = false, as = "input" }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      {as === "textarea" ? (
        <textarea placeholder={placeholder} required={required} />
      ) : (
        <input type={type} placeholder={placeholder} required={required} />
      )}
    </label>
  );
}
