import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Page transition wrapper
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

// Animated routes component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Shared Navbar */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Routed content area, which expands to push the footer down */}
        <main className="flex-grow px-4 sm:px-8 py-8 pt-40">
          <AnimatedRoutes />
        </main>

        {/* Shared Footer */}
        <Footer />
      </div>
    </Router>
  );
}
export default App;