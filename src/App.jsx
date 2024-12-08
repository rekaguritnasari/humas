import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Award, Star, User } from "lucide-react";

// Import individual page components
import BerandaPage from "./BerandaPage";
import PrestasiPage from "./components/AchievementPortfolio";
import TestimonialPage from "./components/AlumniTestimonials";
import NotifikasiPage from "./NotifikasiPage";
import ProfilPage from "./ProfilPage";

// Shared components
import Navigation from "./components/Navigation";

// Artikel Pages
import ArticlePage from "./ArticlePage";

const HumasApp = () => {
  const [activeTab, setActiveTab] = useState("beranda");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "beranda":
        return <BerandaPage />;
      case "prestasi":
        return <PrestasiPage />;
      case "testimonial":
        return <TestimonialPage />;
      case "profil":
        return <ProfilPage />;
      case "notifikasi":
        return <NotifikasiPage />;
      default:
        return <BerandaPage />;
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Header Navigation */}
        <Navigation
          isScrolled={isScrolled}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto pt-20">
          <Routes>
            <Route path="/" element={renderContent()} />
            <Route path="/artikel/:articleId" element={<ArticlePage />} />
          </Routes>
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
          <div className="flex justify-between items-center px-4 py-2 max-w-7xl mx-auto">
            {[
              { id: "beranda", icon: Home, label: "Beranda" },
              { id: "prestasi", icon: Award, label: "Prestasi" },
              { id: "testimonial", icon: Star, label: "Testimoni" },
              { id: "profil", icon: User, label: "Profil" },
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex flex-col items-center flex-1 p-2 ${
                  activeTab === id ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${
                    activeTab === id ? "text-blue-600" : "text-gray-400"
                  }`}
                />
                <span
                  className={`text-xs mt-1 ${
                    activeTab === id ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </Router>
  );
};

export default HumasApp;
