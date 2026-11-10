import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#102F2A] px-5 pt-16 text-white lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>
            <a href="#home" className="flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl font-extrabold text-brand">
                Z
              </div>

              <span className="text-2xl font-extrabold tracking-tight">
                ZOVION
              </span>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/65">
              Your trusted destination for discovering
              local professionals and booking everyday services.
            </p>

            <div className="mt-6 flex gap-3">
              {[
  { Icon: FaFacebookF, href: "https://facebook.com" },
  { Icon: FaInstagram, href: "https://instagram.com" },
  { Icon: FaLinkedinIn, href: "https://linkedin.com" },
  { Icon: FaTwitter, href: "https://twitter.com" },
].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit social media"
                  className="rounded-lg border border-white/15 p-2.5 text-white/70 transition hover:bg-white hover:text-brand"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}

          <div>
            <h3 className="text-base font-bold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-white/65">
              <li>
                <a href="#home" className="hover:text-accent">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-accent">
                  Explore Services
                </a>
              </li>

              <li>
                <a href="#providers" className="hover:text-accent">
                  Professionals
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-accent">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-base font-bold">
              Popular Services
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-white/65">
              <li>Electrician</li>
              <li>Plumbing</li>
              <li>Home Cleaning</li>
              <li>AC Repair</li>
              <li>Appliance Repair</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-base font-bold">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5 text-sm text-white/65">

              <div className="flex items-start gap-3">
                <Mail size={18} className="shrink-0 text-accent" />
                <span>support@zovion.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="shrink-0 text-accent" />
                <span>Contact support</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-accent" />
                <span>Serving local communities</span>
              </div>

            </div>

            <a
              href="mailto:support@zovion.com"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-brand transition hover:bg-white"
            >
              Contact Us
              <ArrowRight size={17} />
            </a>
          </div>

        </div>

        {/* Bottom footer */}

        <div className="flex flex-col justify-between gap-4 border-t border-white/15 py-7 text-sm text-white/50 md:flex-row md:items-center">

          <p>
            © {new Date().getFullYear()} Zovion. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <a href="#privacy" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#terms" className="hover:text-white">
              Terms of Service
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
