
import { useState } from "react";

function Navbar({
  onLogin,
  onRegister,
  onHome,
  isLoggedIn,
  onLogout
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", action: onHome },
    { name: "Explore Services", href: "#services" },
    { name: "Become a Provider", href: "#provider" },
    { name: "About Us", href: "#about" },
  ];

  const handleNavigation = (action) => {
    if (action) action();
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <button
          onClick={() => handleNavigation(onHome)}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-2xl font-bold text-white">
            Z
          </div>

          <span className="text-2xl font-extrabold tracking-tight text-brand">
            ZOVION
          </span>
        </button>

        {/* Desktop Navigation */}
       <div className="hidden items-center gap-4 lg:flex">
  {isLoggedIn ? (
    <>
      <span className="font-semibold text-brand">
        My Account
      </span>

      <button
        onClick={onLogout}
        className="rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <button onClick={onLogin}>
        Log in
      </button>

      <button
        onClick={onRegister}
        className="rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white"
      >
        Get Started
      </button>
    </>
  )}
</div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-gray-200 p-2 text-brand lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavigation(link.action)}
                className="text-sm font-medium text-gray-700 hover:text-brand"
              >
                {link.name}
              </a>
            ))}

            <hr className="border-gray-100" />

            <button
              onClick={() => handleNavigation(onLogin)}
              className="text-left text-sm font-semibold text-brand"
            >
              Log in
            </button>

            <button
              onClick={() => handleNavigation(onRegister)}
              className="rounded-lg bg-brand px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


export default Navbar;
