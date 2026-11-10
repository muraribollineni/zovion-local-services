import { useState } from "react";
import api from "../api/axios";

function Register() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await api.post("/users/register", form);

      setMessage("Registration successful! Welcome to Zovion.");

      setForm({
        full_name: "",
        email: "",
        phone: "",
        password: "",
      });

      console.log("Registered user:", response.data);

    } catch (error) {
      setMessage(
        error.response?.data?.detail || "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-[#123C35]">
        Create Your Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="full_name"
          placeholder="Full Name"
          value={form.full_name}
          onChange={handleChange}
          required
          className="w-full rounded-lg border p-3"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg border p-3"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          minLength={8}
          className="w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#123C35] p-3 font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Creating Account..." : "Register"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm">
          {message}
        </p>
      )}
    </div>
  );
}

export default Register;