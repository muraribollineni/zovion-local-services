
import { useState } from "react";
import api from "../api/axios";

function BookingForm({ service, onClose }) {
  const [form, setForm] = useState({
    booking_date: "",
    address: "",
    description: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!localStorage.getItem("access_token")) {
      setMessage("Please log in before booking.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await api.post("/bookings/", {
        service_id: service.id,
        booking_date: form.booking_date,
        address: form.address,
        description: form.description,
      });

      setMessage("Booking created successfully!");

      setTimeout(() => onClose(), 1200);
    } catch (error) {
      setMessage(
        error.response?.data?.detail || "Booking failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-2 text-2xl font-bold text-[#123C35]">
        Book {service.name}
      </h2>

      <p className="mb-5 text-gray-600">
        Price: ₹{Number(service.price).toFixed(2)}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="datetime-local"
          required
          value={form.booking_date}
          onChange={(e) =>
            setForm({ ...form, booking_date: e.target.value })
          }
          className="w-full rounded-lg border p-3"
        />

        <input
          type="text"
          placeholder="Service address"
          required
          value={form.address}
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
          className="w-full rounded-lg border p-3"
        />

        <textarea
          placeholder="Describe your requirements"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#123C35] p-3 font-semibold text-white"
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm">{message}</p>
      )}

      <button
        onClick={onClose}
        className="mt-4 w-full text-sm text-gray-500"
      >
        Close
      </button>
    </div>
  );
}

export default BookingForm;
