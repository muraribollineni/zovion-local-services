
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCategories from "./components/ServiceCategories";
import FeaturedProviders from "./components/FeaturedProviders";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import Register from "./components/Register";
import Login from "./components/Login";
import ServicesList from "./components/ServicesList";

function App() {
  const [page, setPage] = useState("home");

  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("access_token"))
  );

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
    setPage("home");
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setPage("home");
  };

  return (
    <div className="min-h-screen">
      <Navbar
        onLogin={() => setPage("login")}
        onRegister={() => setPage("register")}
        onHome={() => setPage("home")}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      {page === "home" && (
        <>
          <main>
           <Hero />
<ServiceCategories />
<ServicesList />
<FeaturedProviders />
<HowItWorks />
<Testimonials />
          </main>
          <Footer />
        </>
      )}

      {page === "login" && (
        <main className="min-h-[75vh] bg-[#F7F8F5] px-6 py-16">
          <Login onLoginSuccess={handleLoginSuccess} />
        </main>
      )}

      {page === "register" && (
        <main className="min-h-[75vh] bg-[#F7F8F5] px-6 py-16">
          <Register />
        </main>
      )}
    </div>
  );
}

export default App;
