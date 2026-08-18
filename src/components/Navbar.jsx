import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/procurements", label: "Procurements" },
  { to: "/farmer/dashboard", label: "Farmer" },
  { to: "/buyer/dashboard", label: "Buyer" },
  { to: "/government/dashboard", label: "Govt Officer" },
  { to: "/bids", label: "Bids" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <img src="/images/logo-mark.svg" alt="AgroProcureBD logo" />
        <span>AgroProcureBD</span>
      </Link>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </NavLink>
        ))}
        <Link to="/login" className="btn btn-outline" onClick={() => setOpen(false)}>Login</Link>
        <Link to="/register/buyer" className="btn btn-primary" onClick={() => setOpen(false)}>Register</Link>
      </nav>
    </header>
  );
}
