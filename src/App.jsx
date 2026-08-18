import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Categories from "./pages/Categories.jsx";
import ProcurementNotices from "./pages/ProcurementNotices.jsx";
import Login from "./pages/Login.jsx";
import RegisterBuyer from "./pages/RegisterBuyer.jsx";
import RegisterFarmer from "./pages/RegisterFarmer.jsx";
import RegisterOfficer from "./pages/RegisterOfficer.jsx";
import OtpVerification from "./pages/OtpVerification.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import ProfileHub from "./pages/ProfileHub.jsx";
import FarmerDashboard from "./pages/FarmerDashboard.jsx";
import FarmerProducts from "./pages/FarmerProducts.jsx";
import FarmerOrders from "./pages/FarmerOrders.jsx";
import FarmerSalesHistory from "./pages/FarmerSalesHistory.jsx";
import BuyerDashboard from "./pages/BuyerDashboard.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import BuyerOrders from "./pages/BuyerOrders.jsx";
import GovernmentDashboard from "./pages/GovernmentDashboard.jsx";
import ProcurementCreate from "./pages/ProcurementCreate.jsx";
import ProcurementManage from "./pages/ProcurementManage.jsx";
import ProcurementOffers from "./pages/ProcurementOffers.jsx";
import BiddingList from "./pages/BiddingList.jsx";
import SubmitBid from "./pages/SubmitBid.jsx";
import BidHistory from "./pages/BidHistory.jsx";
import AdminVerificationRequests from "./pages/AdminVerificationRequests.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/procurements" element={<ProcurementNotices />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register/buyer" element={<RegisterBuyer />} />
          <Route path="/register/farmer" element={<RegisterFarmer />} />
          <Route path="/register/government-officer" element={<RegisterOfficer />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />

          <Route path="/profiles" element={<ProfileHub />} />

          <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
          <Route path="/farmer/products" element={<FarmerProducts />} />
          <Route path="/farmer/orders" element={<FarmerOrders />} />
          <Route path="/farmer/sales-history" element={<FarmerSalesHistory />} />

          <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/buyer/orders" element={<BuyerOrders />} />

          <Route path="/government/dashboard" element={<GovernmentDashboard />} />
          <Route path="/government/procurements/create" element={<ProcurementCreate />} />
          <Route path="/government/procurements/manage" element={<ProcurementManage />} />
          <Route path="/government/procurements/offers" element={<ProcurementOffers />} />

          <Route path="/bids" element={<BiddingList />} />
          <Route path="/bids/submit" element={<SubmitBid />} />
          <Route path="/bids/history" element={<BidHistory />} />

          <Route path="/admin/verification-requests" element={<AdminVerificationRequests />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
