export default function PageHeader({ title, subtitle, image = "/images/hero-farm.svg" }) {
  return (
    <section className="page-header">
      <div>
        <p className="eyebrow">AgroProcureBD</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <img src={image} alt={title} />
    </section>
  );
}
