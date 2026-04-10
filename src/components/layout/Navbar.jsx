import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const userBtnRef = useRef(null);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const shopBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBgClass = isScrolled
    ? "bg-white/95 backdrop-blur shadow-md py-2"
    : "bg-transparent py-4";

  const navTextClass = isScrolled ? "text-[#0b1220]/80" : "text-white/90";

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (userBtnRef.current && !userBtnRef.current.contains(e.target)) {
        setUserDropdownOpen(false);
      }
      if (shopBtnRef.current && !shopBtnRef.current.contains(e.target)) {
        setShopDropdownOpen(false);
      }
    }
    if (userDropdownOpen || shopDropdownOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [userDropdownOpen, shopDropdownOpen]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${navBgClass} ${navTextClass}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-[#f72798] font-serif">
            Bloom
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-[#f72798] transition-colors">
            Home
          </Link>
          <div className="relative flex items-center h-full" ref={shopBtnRef}>
            <button 
              className="hover:text-[#f72798] transition-colors py-4 -my-4"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
              onClick={(e) => {
                e.preventDefault();
                setShopDropdownOpen((prev) => !prev);
              }}
            >
              Shop
            </button>
            <div 
              className={`absolute left-[-20px] top-full mt-0 w-48 bg-white text-[#18181b] rounded-xl shadow-lg z-50 transition-all duration-200 border border-gray-100 ${shopDropdownOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-2"}`}
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <div className="flex flex-col py-2">
                <Link to="/shop?category=anniversary" onClick={() => setShopDropdownOpen(false)} className="px-4 py-2.5 hover:bg-[#fdf6fa] hover:text-[#f72798] transition-colors font-medium border-b border-gray-50 last:border-b-0">Anniversary</Link>
                <Link to="/shop?category=birthday" onClick={() => setShopDropdownOpen(false)} className="px-4 py-2.5 hover:bg-[#fdf6fa] hover:text-[#f72798] transition-colors font-medium border-b border-gray-50 last:border-b-0">Happy Birthday</Link>
                <Link to="/shop?category=sympathy" onClick={() => setShopDropdownOpen(false)} className="px-4 py-2.5 hover:bg-[#fdf6fa] hover:text-[#f72798] transition-colors font-medium border-b border-gray-50 last:border-b-0">Sympathy</Link>
                <Link to="/shop?category=event" onClick={() => setShopDropdownOpen(false)} className="px-4 py-2.5 hover:bg-[#fdf6fa] hover:text-[#f72798] transition-colors font-medium">For Event</Link>
              </div>
            </div>
          </div>
          <Link to="/about" className="hover:text-[#f72798] transition-colors">
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#f72798] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            className="hover:text-[#f72798] transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[22px] w-[22px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button
            aria-label="Cart"
            className="hover:text-[#f72798] transition-colors cursor-pointer relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[22px] w-[22px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute -top-1.5 -right-2 bg-[#f72798] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              0
            </span>
          </button>

          {/* User Profile Icon with Dropdown */}
          <div className="relative" ref={userBtnRef}>
            <button
              className="flex items-center justify-center w-10 h-10 hover:text-[#f72798] transition-colors"
              aria-label="User menu"
              onClick={() => setUserDropdownOpen((v) => !v)}
              onDoubleClick={() => setUserDropdownOpen(false)}
              tabIndex={0}
            >
              {/* Minimal SVG user icon, white outline, no fill, matches other icons */}
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
              </svg>
            </button>
            {/* Dropdown */}
            <div
              className={`absolute right-0 mt-2 w-56 bg-white text-[#18181b] rounded-xl shadow-lg z-50 transition-all duration-200 ${userDropdownOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-2"}`}
              onMouseEnter={() => setUserDropdownOpen(true)}
              onMouseLeave={() => setUserDropdownOpen(false)}
            >
              {/* Mini Home Icon */}
              <div className="flex items-center justify-center py-3 border-b border-[#27272a]">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f72798"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                </svg>
              </div>
              <div className="flex gap-2 px-3 py-3">
                <button className="flex-1 text-center px-0 py-3 rounded-lg font-semibold bg-[#f72798] text-white shadow hover:bg-[#d81b60] transition border-2 border-[#f72798]">
                  Login
                </button>
                <button className="flex-1 text-center px-0 py-3 rounded-lg font-semibold bg-white text-[#f72798] shadow border-2 border-[#f72798] hover:bg-[#f6eef2] hover:text-[#d81b60] transition">
                  Register
                </button>
              </div>
              <div className="flex flex-col gap-2 px-3 py-2">
                <div className="flex flex-col items-center gap-2">
                  <button className="w-40 text-center px-3 py-2 bg-white/90 text-[#18181b] rounded-lg font-semibold hover:text-[#f72798] hover:bg-[#f6eef2] transition border border-[#f72798]">
                    Orders
                  </button>
                  <button className="w-40 text-center px-3 py-2 bg-white/90 text-[#18181b] rounded-lg font-semibold hover:text-[#f72798] hover:bg-[#f6eef2] transition border border-[#f72798]">
                    Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Hamburger */}
          <button
            className="md:hidden hover:text-[#f72798] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden mt-2 p-4 flex flex-col gap-4 shadow-md absolute w-full left-0 backdrop-blur border-t ${
            isScrolled
              ? "bg-white/95 border-[#0b1220]/10"
              : "bg-[#0b1220]/95 border-white/10"
          } ${isScrolled ? "text-[#0b1220]/80" : "text-white/90"}`}
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#f72798] transition-colors"
          >
            Home
          </Link>
          <div className="flex flex-col gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                // We're on mobile, you could add a toggle state here if desired, 
                // but since sub-links are always visible below it we just prevent default.
              }}
              className="hover:text-[#f72798] transition-colors text-left"
            >
              Shop
            </button>
            <div className={`flex flex-col gap-3 pl-4 border-l-2 ml-2 mt-1 ${isScrolled ? "border-[#0b1220]/10" : "border-white/10"}`}>
              <Link to="/shop?category=anniversary" onClick={() => setMenuOpen(false)} className="hover:text-[#f72798] transition-colors text-sm">Anniversary</Link>
              <Link to="/shop?category=birthday" onClick={() => setMenuOpen(false)} className="hover:text-[#f72798] transition-colors text-sm">Happy Birthday</Link>
              <Link to="/shop?category=sympathy" onClick={() => setMenuOpen(false)} className="hover:text-[#f72798] transition-colors text-sm">Sympathy</Link>
              <Link to="/shop?category=event" onClick={() => setMenuOpen(false)} className="hover:text-[#f72798] transition-colors text-sm">For Event</Link>
            </div>
          </div>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#f72798] transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#f72798] transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
