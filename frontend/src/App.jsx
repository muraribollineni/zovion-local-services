
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCategories from "./components/ServiceCategories";
import FeaturedProviders from "./components/FeaturedProviders";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen">

      <Navbar />

<main>
  <Hero />
  <ServiceCategories />
  <FeaturedProviders />
  <HowItWorks />
  <Testimonials />
</main>

    </div>
  );
}

export default App;
