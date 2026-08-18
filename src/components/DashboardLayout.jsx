import { NavLink } from "react-router-dom";

export default function DashboardLayout({ title, role, links, children }) {
  return (
    <section className="dashboard-shell">
      <aside className="sidebar">
        <h3>{role}</h3>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
        ))}
      </aside>
      <main className="dashboard-main">
        <div className="dashboard-title">
          <p className="eyebrow">Dashboard</p>
          <h1>{title}</h1>
        </div>
        {children}
      </main>
    </section>
  );
}
