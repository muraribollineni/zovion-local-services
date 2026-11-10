
import { useState } from "react";
import api from "../api/axios";

function Login({ onLoginSuccess }) {
  const [form, setForm] = useState({
    email: "",
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
    setLoading(true);
    setMessage("");

    try {
     const response = await api.post("/users/login", form);

localStorage.setItem(
  "access_token",
  response.data.access_token
);

setMessage("Login successful!");

onLoginSuccess();

    } catch (error) {
      setMessage(
        error.response?.data?.detail || "Login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-[#123C35]">
        Welcome Back
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#123C35] p-3 font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
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

export default Login;
