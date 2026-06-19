import { useState, useEffect } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Mail,
} from "lucide-react";

const navLinks = [
  { label: "Etusivu", href: "/" },
  {
    label: "Palvelut",
    href: "#",
    children: [
      { label: "Klassinen hieronta", href: "/palvelu/klassinen-hieronta" },
      { label: "Urheiluhieronta", href: "/palvelu/urheiluhieronta" },
      { label: "Purentalihashieronta", href: "/palvelu/purentilihashieronta" },
      { label: "Päähieronta", href: "/palvelu/paahieronta" },
    ],
  },
  { label: "Hinnasto", href: "/hinnasto" },
  { label: "UKK", href: "/usein-kysyttya" },
  { label: "Meistä", href: "/meista" },
  { label: "Yrityksille", href: "/yrityksille" },
  { label: "Yhteystiedot", href: "/yhteystiedot" },
];

export default function Layout() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href === "/palvelu") return location.pathname.startsWith("/palvelu/");
    return location.pathname === href;
  };

  return (
    <div className="min-h-[100dvh] bg-brand-main">
      {/* ═════════ NAVBAR ═════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          navScrolled || location.pathname !== "/"
            ? "bg-[rgba(39,53,91,0.97)] backdrop-blur-[12px]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] w-full mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo-andino.png" alt="H.K.A" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-body text-base font-medium text-[#FAFAFA]">Hieronta & Kehonhuolto Andino</span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) =>
              l.children ? (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 relative text-sm font-medium transition-colors duration-200 tracking-wide group ${
                      isActive("/palvelu")
                        ? "text-[#FAFAFA]"
                        : "text-[rgba(250,250,250,0.85)] hover:text-[#FAFAFA]"
                    }`}
                  >
                    {l.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute bottom-[-4px] left-0 h-[2px] transition-all duration-300 ${
                        isActive("/palvelu") ? "w-full bg-[#E95D49]" : "w-0 bg-[#E95D49] group-hover:w-full"
                      }`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-[rgba(39,53,91,0.98)] backdrop-blur-[16px] rounded-xl border border-[rgba(250,250,250,0.1)] py-3 px-2 min-w-[260px]">
                        {l.children.map((c) => (
                          <Link
                            key={c.href}
                            to={c.href}
                            className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                              location.pathname === c.href
                                ? "text-[#E95D49] bg-[rgba(233,93,73,0.1)] font-medium"
                                : "text-[rgba(250,250,250,0.8)] hover:text-[#FAFAFA] hover:bg-[rgba(250,250,250,0.05)]"
                            }`}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`relative text-sm font-medium transition-colors duration-200 tracking-wide group ${
                    isActive(l.href)
                      ? "text-[#FAFAFA]"
                      : "text-[rgba(250,250,250,0.85)] hover:text-[#FAFAFA]"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute bottom-[-4px] left-0 h-[2px] transition-all duration-300 ${
                      isActive(l.href) ? "w-full bg-[#E95D49]" : "w-0 bg-[#E95D49] group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:098712122" className="flex items-center gap-2 text-sm font-body font-medium text-[rgba(250,250,250,0.85)] hover:text-[#FAFAFA] transition-colors">
              <Phone className="w-4 h-4" />
              050 550 9799
            </a>
            <a
              href="https://vello.fi/hierontajakehonhuoltoandino/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-body font-medium text-[#FAFAFA] bg-[#E95D49] hover:bg-[#d94a36] transition-all duration-200"
            >
              Varaa aika
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-[#FAFAFA]">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="absolute top-[72px] left-0 right-0 bg-[rgba(39,53,91,0.97)] backdrop-blur-[12px] lg:hidden py-6 px-6 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((l) =>
              l.children ? (
                <div key={l.label} className="flex flex-col gap-1">
                  <span className="text-[#E95D49] text-xs font-semibold uppercase tracking-wider py-2">{l.label}</span>
                  {l.children.map((c) => (
                    <Link key={c.href} to={c.href} className="text-[rgba(250,250,250,0.85)] text-sm font-medium py-2 pl-3 border-l border-[rgba(250,250,250,0.15)] hover:text-[#FAFAFA]">
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link key={l.href} to={l.href} className="text-[#FAFAFA] text-base font-medium py-2">{l.label}</Link>
              )
            )}
            <a href="tel:098712122" className="flex items-center gap-2 text-[#FAFAFA] text-base font-medium py-2 mt-2">
              <Phone className="w-4 h-4" />050 550 9799
            </a>
          </div>
        )}
      </nav>

      {/* ═════════ MAIN ═════════ */}
      <main className="flex-1"><Outlet /></main>

      {/* ═════════ FOOTER ═════════ */}
      <footer className="bg-[#1B2340] pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo-andino.png" alt="Hieronta ja Kehonhuolto Andino" className="h-8 w-auto" />
              <span className="font-display text-xl font-semibold text-[#FAFAFA]">Hieronta & Kehonhuolto Andino</span>
            </Link>
            <p className="text-sm text-[rgba(250,250,250,0.7)] italic">"Andy Nwannah • H.K.A"</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xs font-body font-medium tracking-[0.1em] text-[#FAFAFA] uppercase mb-4">Yhteystiedot</h4>
              <div className="flex flex-col gap-3">
                <span className="flex items-start gap-2 text-sm text-[rgba(250,250,250,0.7)]">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />Onnelantie 1, 87100 Kajaani
                </span>
                <a href="tel:098712122" className="flex items-center gap-2 text-sm text-[rgba(250,250,250,0.7)] hover:text-[#FAFAFA] transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />050 550 9799
                </a>
                <a href="mailto:hierontaandino@gmail.com" className="flex items-center gap-2 text-sm text-[rgba(250,250,250,0.7)] hover:text-[#FAFAFA] transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />hierontaandino@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-body font-medium tracking-[0.1em] text-[#FAFAFA] uppercase mb-4">Aukioloajat</h4>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-body text-[rgba(250,250,250,0.7)]">Maanantai–perjantai</p>
                <p className="text-sm font-semibold text-[#FAFAFA]">10:00 – 18:00</p>
                <p className="text-sm text-[rgba(250,250,250,0.7)] mt-2">Kesäaikaan lauantaisin 11:00 – 14:00</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-body font-medium tracking-[0.1em] text-[#FAFAFA] uppercase mb-4">Maksutavat</h4>
              <div className="flex flex-wrap gap-2">
                {["Visa", "Mastercard", "Smartum", "ePassi"].map((m) => (
                  <span key={m} className="px-4 py-1.5 rounded-full text-xs font-medium text-[#27355B] bg-[#E8ECF4]">{m}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-body font-medium tracking-[0.1em] text-[#FAFAFA] uppercase mb-4">Pikalinkit</h4>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Etusivu", href: "/" },
                  { label: "Hinnasto", href: "/hinnasto" },
                  { label: "UKK", href: "/usein-kysyttya" },
                  { label: "Meistä", href: "/meista" },
                  { label: "Yhteystiedot", href: "/yhteystiedot" },
                ].map((l) => (
                  <Link key={l.href} to={l.href} className="text-left text-sm font-body text-[rgba(250,250,250,0.7)] hover:text-[#FAFAFA] transition-colors">{l.label}</Link>
                ))}
                <a href="https://vello.fi/hierontajakehonhuoltoandino/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#E95D49] hover:text-[#f7a89a] transition-colors font-semibold">Nettiajanvaraus →</a>
              </div>
            </div>
          </div>

          <div className="border-t border-[rgba(250,250,250,0.12)] pt-6 flex flex-col sm:flex-row justify-between gap-2">
            <p className="text-sm font-body text-[rgba(250,250,250,0.7)]">© 2025 Hieronta ja Kehonhuolto Andino</p>
            <p className="text-sm font-body text-[rgba(250,250,250,0.7)]">Onnelantie 1, Kajaani</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
