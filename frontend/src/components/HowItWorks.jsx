
import {
  Search,
  Users,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Find your service",
    description:
      "Explore services and discover professionals available in your area.",
    icon: Search,
  },
  {
    number: "02",
    title: "Choose your professional",
    description:
      "Compare experience, pricing and customer reviews before choosing.",
    icon: Users,
  },
  {
    number: "03",
    title: "Book with confidence",
    description:
      "Select your preferred date and time and submit your booking request.",
    icon: CalendarCheck,
  },
];

function HowItWorks() {
  return (
    <section
      id="about"
      className="bg-white px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand">
            Simple process
          </p>

          <h2 className="text-3xl font-extrabold text-heading md:text-4xl">
            Quality service,
            <span className="text-brand"> made simple.</span>
          </h2>

          <p className="mt-4 leading-7 text-muted">
            Getting the help you need shouldn't be complicated.
            Zovion makes finding and booking professionals easier.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">

                <div className="rounded-2xl border border-gray-100 bg-page p-8 transition hover:-translate-y-1 hover:shadow-xl">

                  <div className="flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white">
                      <Icon size={30} strokeWidth={1.7} />
                    </div>

                    <span className="text-4xl font-extrabold text-gray-200">
                      {step.number}
                    </span>

                  </div>

                  <h3 className="mt-8 text-xl font-bold text-heading">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {step.description}
                  </p>

                </div>

                {index !== 2 && (
                  <div className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-gray-100 bg-white p-2 text-brand shadow-sm md:block">
                    <ArrowRight size={18} />
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
