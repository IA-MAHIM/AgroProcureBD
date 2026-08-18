import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src="/images/logo-full.svg" alt="AgroProcureBD full logo" className="footer-logo" />
        <p>Smart agricultural marketplace and government procurement platform for Bangladesh.</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/privacy">Privacy</Link>
      </div>
      <div>
        <h4>Modules</h4>
        <Link to="/farmer/dashboard">Farmer Dashboard</Link>
        <Link to="/buyer/dashboard">Buyer Dashboard</Link>
        <Link to="/government/dashboard">Government Dashboard</Link>
        <Link to="/bids">Bidding System</Link>
      </div>
    </footer>
  );
}
