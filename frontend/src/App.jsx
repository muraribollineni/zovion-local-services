import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Connecting...");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/health")
      .then((response) => {
        setMessage(
          `${response.data.application} API is ${response.data.status}`
        );
      })
      .catch(() => {
        setError("Backend connection failed");
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-5xl font-bold text-blue-400">
        ZOVION
      </h1>

      <p className="mt-4 text-slate-300">
        Local Services Marketplace
      </p>

      <div className="mt-8 rounded-xl bg-slate-800 p-6">
        {error ? error : message}
      </div>
    </div>
  );
}

export default App;