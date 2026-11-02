
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Reddy",
    location: "Vijayawada",
    service: "Home Cleaning",
    review:
      "Finding a reliable cleaning professional was easy. The booking process was simple and the service experience was smooth.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
  },
  {
    name: "Rahul Varma",
    location: "Hyderabad",
    service: "Electrical Repair",
    review:
      "I could easily explore service options and compare professionals. The platform makes finding local help much easier.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
  },
  {
    name: "Sneha Kumar",
    location: "Vijayawada",
    service: "Plumbing",
    review:
      "The layout is easy to understand and the service information is clear. I liked how simple the booking process was.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200",
  },
];

function Testimonials() {
  return (
    <section className="bg-page px-5 py-20 lg:px-8 lg:py-28">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
            Customer experiences
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-heading md:text-4xl">
            What people say about
            <span className="text-brand"> Zovion.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted">
            We're building a simpler way to discover
            and book local services.
          </p>

        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (

            <article
              key={item.name}
              className="rounded-2xl border border-gray-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex items-center justify-between">

                <Quote
                  size={32}
                  className="text-accent"
                  fill="currentColor"
                />

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill="currentColor"
                      className="text-amber-400"
                    />
                  ))}
                </div>

              </div>

              <p className="mt-7 min-h-28 text-sm leading-7 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-6">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-heading">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-muted">
                    {item.location}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-brand">
                    {item.service}
                  </p>
                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;
