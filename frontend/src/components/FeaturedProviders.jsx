
import {
  Star,
  MapPin,
  BadgeCheck,
  ArrowUpRight,
  Clock,
} from "lucide-react";

const providers = [
  {
    id: 1,
    name: "Rahul Kumar",
    profession: "Electrical Specialist",
    category: "Electrician",
    rating: "4.9",
    reviews: 124,
    experience: "8 years experience",
    location: "Vijayawada",
    price: "₹299",
    image:
      "https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg",
  },
  {
    id: 2,
    name: "Suresh Reddy",
    profession: "Professional Plumber",
    category: "Plumbing",
    rating: "4.8",
    reviews: 98,
    experience: "6 years experience",
    location: "Vijayawada",
    price: "₹249",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600",
  },
  {
    id: 3,
    name: "Priya Sharma",
    profession: "Home Cleaning Expert",
    category: "Home Cleaning",
    rating: "5.0",
    reviews: 156,
    experience: "5 years experience",
    location: "Vijayawada",
    price: "₹399",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600",
  },
];

function FeaturedProviders() {
  return (
    <section className="bg-page px-5 py-20 lg:px-8 lg:py-28">

      <div className="mx-auto max-w-7xl">

        {/* Section heading */}

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand">
              Meet the professionals
            </p>

            <h2 className="max-w-2xl text-3xl font-extrabold text-heading md:text-4xl">
              Skilled people.
              <span className="text-brand">
                {" "}Quality service.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
              Discover professionals who can help you
              take care of your everyday needs.
            </p>
          </div>

          <a
            href="#providers"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:gap-3"
          >
            View all professionals
            <ArrowUpRight size={18} />
          </a>

        </div>

        {/* Provider cards */}

        <div
          id="providers"
          className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >

          {providers.map((provider) => (

            <article
              key={provider.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60"
            >

              {/* Provider image */}

              <div className="relative h-60 overflow-hidden bg-gray-100">

                <img
  src={provider.image}
  alt={provider.profession}
  loading="lazy"
  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
  onError={(e) => {
    e.currentTarget.style.display = "none";
  }}
/>

                <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-xs font-bold text-brand shadow-sm">
                  {provider.category}
                </div>

              </div>

              {/* Provider information */}

              <div className="p-6">

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <div className="flex items-center gap-2">

                      <h3 className="text-lg font-bold text-heading">
                        {provider.name}
                      </h3>

                      <BadgeCheck
                        size={18}
                        className="shrink-0 text-brand"
                      />

                    </div>

                    <p className="mt-1 text-sm text-muted">
                      {provider.profession}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1">
                    <Star
                      size={15}
                      fill="currentColor"
                      className="text-amber-500"
                    />

                    <span className="text-sm font-bold text-heading">
                      {provider.rating}
                    </span>
                  </div>

                </div>

                <div className="mt-5 space-y-3 border-t border-gray-100 pt-5">

                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Clock size={17} />
                    {provider.experience}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted">
                    <MapPin size={17} />
                    {provider.location}
                  </div>

                  <p className="text-xs text-gray-400">
                    {provider.reviews} sample reviews
                  </p>

                </div>

                {/* Price and button */}

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

                  <div>
                    <p className="text-xs text-muted">
                      Starting from
                    </p>

                    <p className="mt-1 text-xl font-extrabold text-brand">
                      {provider.price}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
                  >
                    View Profile
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProviders;
