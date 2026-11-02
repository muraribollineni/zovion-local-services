import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen">

      <Navbar />

      <main
        id="home"
        className="flex min-h-[70vh] items-center justify-center px-5"
      >
        <div className="text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Welcome to Zovion
          </p>

          <h1 className="text-4xl font-bold text-heading md:text-6xl">
            Your Services.
            <br />
            <span className="text-brand">
              Your Trusted Professionals.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-gray-500">
            Discover reliable local professionals for your everyday needs.
          </p>

        </div>
      </main>

    </div>
  );
}

export default App;