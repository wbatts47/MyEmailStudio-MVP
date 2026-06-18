import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NoiseOverlay from "./components/NoiseOverlay";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import UseCasesPage from "./pages/UseCasesPage";
import DemoPage from "./pages/DemoPage";
import FAQPage from "./pages/FAQPage";
import AboutPage from "./pages/AboutPage";
import UniversityApp from "./components/university/UniversityApp";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Layout = ({ children }) => (
  <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
    <NoiseOverlay />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

function AppRoutes() {
  const { pathname } = useLocation();
  const isUniversity = pathname.startsWith('/university');

  if (isUniversity) {
    return <UniversityApp />;
  }

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/university/*" element={<UniversityApp />} />
        <Route path="/*" element={
          <Layout>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/use-cases" element={<UseCasesPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
