
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCategories from "./components/ServiceCategories";
import FeaturedProviders from "./components/FeaturedProviders";

function App() {
  return (
    <div className="min-h-screen">

      <Navbar />

      <main>
        <Hero />
        <ServiceCategories />
        <FeaturedProviders />
      </main>

    </div>
  );
}

export default App;
