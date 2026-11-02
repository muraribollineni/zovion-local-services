
import { useState } from "react";

function Hero() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  const popularServices = [
    "Electrician",
    "Plumber",
    "Home Cleaning",
    "AC Repair",
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    if (!service.trim()) {
      setSearchMessage("Please enter a service to search.");
      return;
    }

    setSearchMessage(
      `Searching for ${service} in ${location.trim() || "your area"}`
    );
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-page"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

        {/* Left content */}

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/10 bg-white px-4 py-2 text-sm font-semibold text-brand">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Your neighbourhood, made easier
          </div>

          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-heading md:text-6xl">
            Find the right
            <span className="block text-brand">
              professional
            </span>
            for every need.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">
            From everyday home repairs to expert services,
            discover trusted local professionals with Zovion.
          </p>

          {/* Search form */}

          <form
            onSubmit={handleSearch}
            className="mt-9 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl shadow-gray-200/50"
          >
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">

              {/* Service input */}

              <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                <svg
                  className="h-5 w-5 shrink-0 text-brand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="7" strokeWidth="1.8" />
                  <path d="m16 16 4 4" strokeWidth="1.8" />
                </svg>

                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="What service do you need?"
                  className="w-full min-w-0 bg-transparent text-sm text-heading outline-none placeholder:text-gray-400"
                />
              </div>

              {/* Location input */}

              <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                <svg
                  className="h-5 w-5 shrink-0 text-brand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="10" r="2" strokeWidth="1.8" />
                </svg>

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your location"
                  className="w-full min-w-0 bg-transparent text-sm text-heading outline-none placeholder:text-gray-400"
                />
              </div>

              {/* Search button */}

              <button
                type="submit"
                className="rounded-xl bg-brand px-7 py-4 text-sm font-bold text-white transition hover:bg-brand-dark"
              >
                Search Services
              </button>

            </div>
          </form>

          {/* Search feedback */}

          {searchMessage && (
            <p
              role="status"
              className="mt-3 text-sm font-medium text-brand"
            >
              {searchMessage}
            </p>
          )}

          {/* Popular searches */}

          <div className="mt-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
              Popular searches
            </p>

            <div className="flex flex-wrap gap-2">
              {popularServices.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setService(item);
                    setSearchMessage("");
                  }}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-brand hover:text-brand"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Trust indicators */}

          <div className="mt-10 flex flex-wrap gap-8 border-t border-gray-200 pt-7">

            <div>
              <p className="text-2xl font-extrabold text-brand">
                100%
              </p>
              <p className="mt-1 text-xs text-muted">
                Focus on quality
              </p>
            </div>

            <div>
              <p className="text-2xl font-extrabold text-brand">
                Local
              </p>
              <p className="mt-1 text-xs text-muted">
                Service professionals
              </p>
            </div>

            <div>
              <p className="text-2xl font-extrabold text-brand">
                Easy
              </p>
              <p className="mt-1 text-xs text-muted">
                Online booking
              </p>
            </div>

          </div>
        </div>

        {/* Right visual panel */}

        <div className="relative mx-auto w-full max-w-xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-brand p-8 text-white md:p-12">

            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-accent/20" />

            <div className="relative z-10">

              <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold tracking-wider">
                THE ZOVION EXPERIENCE
              </span>

              <h2 className="mt-10 max-w-sm text-3xl font-bold leading-snug md:text-4xl">
                Your home deserves the right hands.
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
                Find skilled professionals for the little
                things and the big jobs.
              </p>

              <div className="mt-10 space-y-4">

                {[
                  ["01", "Find a service", "Discover professionals near you"],
                  ["02", "Compare providers", "Choose the right professional"],
                  ["03", "Book with confidence", "Request your preferred service"],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent font-bold text-brand">
                      {number}
                    </div>

                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-xs text-white/65">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-6">
                <span className="text-sm font-semibold">
                  ZOVION
                </span>
                <span className="text-xs text-white/60">
                  Local services. Made simple.
                </span>
              </div>

            </div>
          </div>

          <div className="absolute -bottom-5 -right-3 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-xl md:-right-6">
            <p className="text-sm font-bold text-brand">
              Services made simple
            </p>
            <p className="mt-1 text-xs text-gray-500">
              One place. Many solutions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
