
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCategories from "./components/ServiceCategories";
import FeaturedProviders from "./components/FeaturedProviders";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div className="min-h-screen">

      <Navbar />

<main>
  <Hero />
  <ServiceCategories />
  <FeaturedProviders />
  <HowItWorks />
</main>

    </div>
  );
}

export default App;
