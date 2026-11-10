
import { useEffect, useState } from "react";
import api from "../api/axios";
import BookingForm from "./BookingForm";

function ServicesList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get("/services/");
        setServices(response.data);
      } catch (err) {
        setError(
          err.response?.data?.detail || "Unable to load services."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <p className="py-10 text-center">Loading services...</p>;
  }

  if (error) {
    return <p className="py-10 text-center text-red-600">{error}</p>;
  }

  return (
    <section id="services" className="bg-[#F7F8F5] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-[#123C35]">
          Available Services
        </h2>

        {services.length === 0 ? (
          <p>No services are available yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <p className="mb-2 text-sm font-medium text-[#737D77]">
                  {service.category}
                </p>

                <h3 className="text-xl font-bold text-[#123C35]">
                  {service.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {service.description || "Professional local service"}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="font-bold text-[#123C35]">
                    ₹{Number(service.price).toFixed(2)}
                  </span>

                  <span className="text-sm text-gray-500">
                    {service.duration_minutes} minutes
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesList;
