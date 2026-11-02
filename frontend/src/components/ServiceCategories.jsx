
import { useState } from "react";
import {
  Zap,
  Droplets,
  Sparkles,
  Wind,
  Wrench,
  Paintbrush,
  Hammer,
  Bug,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "Electrician",
    description: "Wiring, lighting and electrical repairs",
    icon: Zap,
    color: "bg-amber-50 text-amber-600",
  },
  {
    name: "Plumbing",
    description: "Pipes, taps and bathroom repairs",
    icon: Droplets,
    color: "bg-sky-50 text-sky-600",
  },
  {
    name: "Home Cleaning",
    description: "Professional home cleaning services",
    icon: Sparkles,
    color: "bg-violet-50 text-violet-600",
  },
  {
    name: "AC Repair",
    description: "AC servicing and maintenance",
    icon: Wind,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    name: "Appliance Repair",
    description: "Repair for everyday home appliances",
    icon: Wrench,
    color: "bg-orange-50 text-orange-600",
  },
  {
    name: "Painting",
    description: "Interior and exterior painting",
    icon: Paintbrush,
    color: "bg-rose-50 text-rose-600",
  },
  {
    name: "Carpentry",
    description: "Furniture and woodwork solutions",
    icon: Hammer,
    color: "bg-yellow-50 text-yellow-700",
  },
  {
    name: "Pest Control",
    description: "Safe pest inspection and treatment",
    icon: Bug,
    color: "bg-emerald-50 text-emerald-600",
  },
];

function ServiceCategories() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <section
      id="services"
      className="bg-white px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand">
              Explore our services
            </p>

            <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-heading md:text-4xl">
              Everything your home needs,
              <span className="text-brand"> in one place.</span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
              From quick fixes to complete home solutions,
              find the right professional for every task.
            </p>
          </div>

          <a
            href="#services"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand transition hover:gap-3"
          >
            Explore all services
            <ArrowRight size={18} />
          </a>

        </div>

        {/* Category cards */}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected =
              selectedCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() =>
                  setSelectedCategory(
                    isSelected ? "" : category.name
                  )
                }
                aria-pressed={isSelected}
                className={`group rounded-2xl border p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-gray-200/60 ${
                  isSelected
                    ? "border-brand bg-brand-light"
                    : "border-gray-100 bg-page"
                }`}
              >

                <div className="flex items-start justify-between">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.color} transition duration-300 group-hover:scale-110`}
                  >
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <ArrowRight
                    size={19}
                    className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-brand"
                  />

                </div>

                <h3 className="mt-6 text-lg font-bold text-heading">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {category.description}
                </p>

              </button>
            );
          })}

        </div>

        {/* Selection feedback */}

        {selectedCategory && (
          <div
            role="status"
            className="mt-8 rounded-xl border border-brand/20 bg-brand-light p-4 text-sm text-brand"
          >
            <span className="font-bold">{selectedCategory}</span>
            {" "}selected. Provider search will be connected when we build the search API.
          </div>
        )}

      </div>
    </section>
  );
}

export default ServiceCategories;
