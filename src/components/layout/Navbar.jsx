import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore.jsx";
import { useUserStore } from "../../store/useUserStore.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const userBtnRef = useRef(null);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const shopBtnRef = useRef(null);
  const navigate = useNavigate();
  
  // Auth modal states
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Get cart count and user state
  const { getItemCount, addItem } = useCartStore();
  const cartCount = getItemCount();
  const { user, isAuthenticated, login, register, logout } = useUserStore();
  


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
          <Link to="/shop" className="hover:text-[#f72798] transition-colors">
            Shop
          </Link>
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
            onClick={() => navigate('/shop')}
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
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#f72798] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
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
              {!isAuthenticated ? (
                <>
                  <div className="px-4 py-3 text-center">
                    <p className="text-sm text-gray-500 mb-3">Welcome! Please sign in</p>
                    <button 
                      onClick={() => { setAuthMode('login'); setAuthModalOpen(true); setUserDropdownOpen(false); }}
                      className="w-full text-center px-3 py-2 bg-[#f72798] text-white rounded-lg font-semibold hover:bg-[#d81b60] transition"
                    >
                      Login
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm text-gray-500">Welcome,</p>
                    <p className="font-semibold text-[#0b1220]">{user?.name || 'User'}</p>
                  </div>
                  <div className="flex flex-col gap-2 px-3 py-2">
                    <div className="flex flex-col items-center gap-2">
                      <button 
                        onClick={() => { navigate('/profile'); setUserDropdownOpen(false); }}
                        className="w-40 text-center px-3 py-2 bg-white/90 text-[#18181b] rounded-lg font-semibold hover:text-[#f72798] hover:bg-[#f6eef2] transition border border-[#f72798]"
                      >
                        Profile
                      </button>
                      <button 
                        onClick={() => { navigate('/orders'); setUserDropdownOpen(false); }}
                        className="w-40 text-center px-3 py-2 bg-white/90 text-[#18181b] rounded-lg font-semibold hover:text-[#f72798] hover:bg-[#f6eef2] transition border border-[#f72798]"
                      >
                        Orders
                      </button>
                      <button 
                        onClick={() => { logout(); setUserDropdownOpen(false); }}
                        className="w-40 text-center px-3 py-2 bg-[#f72798]/10 text-[#f72798] rounded-lg font-semibold hover:bg-[#f72798]/20 transition border border-[#f72798]"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Sign Up Button (shown when not authenticated) */}
          {!isAuthenticated && (
            <button
              onClick={() => { setAuthMode('register'); setAuthModalOpen(true); }}
              className="hidden md:block px-5 py-2 bg-[#f72798] text-white rounded-full font-medium hover:bg-[#d81b60] transition"
            >
              Sign Up
            </button>
          )}

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
          <Link
            to="/shop"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#f72798] transition-colors"
          >
            Shop
          </Link>
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
          {!isAuthenticated ? (
            <div className="flex gap-3 pt-2 border-t border-gray-200/20">
              <button 
                onClick={() => { setAuthMode('login'); setAuthModalOpen(true); setMenuOpen(false); }}
                className="flex-1 py-2 rounded-lg font-semibold bg-[#f72798] text-white text-sm"
              >
                Login
              </button>
              <button 
                onClick={() => { setAuthMode('register'); setAuthModalOpen(true); setMenuOpen(false); }}
                className="flex-1 py-2 rounded-lg font-semibold bg-white text-[#f72798] text-sm border-2 border-[#f72798]"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-200/20">
              <Link to="/profile" onClick={() => setMenuOpen(false)} className="hover:text-[#f72798] transition-colors">My Profile</Link>
              <Link to="/orders" onClick={() => setMenuOpen(false)} className="hover:text-[#f72798] transition-colors">My Orders</Link>
              <button onClick={() => { logout(); setMenuOpen(false); }} className="text-left hover:text-[#f72798] transition-colors text-[#f72798]">Logout</button>
            </div>
          )}
        </div>
      )}

      {/* Auth Modal */}
      {authModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative">
            {/* Modal Header */}
            <div className="flex border-b">
              <button
                onClick={() => setAuthMode('login')}
                className={`flex-1 py-4 text-center font-semibold transition-colors ${
                  authMode === 'login' 
                    ? 'text-[#f72798] border-b-2 border-[#f72798]' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setAuthMode('register')}
                className={`flex-1 py-4 text-center font-semibold transition-colors ${
                  authMode === 'register' 
                    ? 'text-[#f72798] border-b-2 border-[#f72798]' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Sign Up
              </button>
            </div>
            
            {/* Modal Body - Fixed height container for equal sizing */}
            <div className="p-6 h-[460px] relative overflow-hidden">
              {/* Login Form */}
              <div 
                className={`absolute inset-0 p-6 transition-transform duration-300 ease-in-out z-10 ${
                  authMode === 'login' ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'
                }`}
              >
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    login({ email: loginForm.email, name: loginForm.email.split('@')[0] });
                    setAuthModalOpen(false);
                    setLoginForm({ email: '', password: '' });
                  }}
                  className="h-full flex flex-col"
                >
                  <h3 className="text-2xl font-serif text-[#0b1220] mb-6 text-center">Welcome Back</h3>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <label className="text-sm font-medium text-gray-700 w-20 shrink-0">Email</label>
                      <input
                        type="email"
                        required
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-[#f72798] focus:ring-2 focus:ring-[#f72798]/20 outline-none transition"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="text-sm font-medium text-gray-700 w-20 shrink-0">Password</label>
                      <div className="relative flex-1">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={loginForm.password}
                          onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#f72798] focus:ring-2 focus:ring-[#f72798]/20 outline-none transition pr-10"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                        >
                          {showPassword ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        type="button"
                        onClick={() => alert('Forgot password feature coming soon!')}
                        className="text-xs text-[#f72798] hover:underline"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2 bg-[#f72798] text-white font-semibold rounded-lg hover:bg-[#d81b60] transition"
                    >
                      Login
                    </button>
                  </div>
                  {/* Bottom link */}
                  <p className="text-center text-xs text-gray-500 mt-3">
                    Don&apos;t have an account?
                    <button
                      type="button"
                      onClick={() => setAuthMode('register')}
                      className="text-[#f72798] font-medium hover:underline ml-1"
                    >
                      Sign up
                    </button>
                  </p>
                </form>
              </div>

              {/* Register Form */}
              <div 
                className={`absolute inset-0 p-6 transition-transform duration-300 ease-in-out z-10 ${
                  authMode === 'register' ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
                }`}
              >
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (registerForm.password !== registerForm.confirmPassword) {
                      alert('Passwords do not match!');
                      return;
                    }
                    register({ 
                      name: registerForm.name, 
                      email: registerForm.email 
                    });
                    setAuthModalOpen(false);
                    setRegisterForm({ name: '', email: '', password: '', confirmPassword: '' });
                  }}
                  className="h-full flex flex-col"
                >
                  <h3 className="text-2xl font-serif text-[#0b1220] mb-5 text-center">Create Account</h3>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <label className="text-sm font-medium text-gray-700 w-20 shrink-0">Full Name</label>
                      <input
                        type="text"
                        required
                        value={registerForm.name}
                        onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-[#f72798] focus:ring-2 focus:ring-[#f72798]/20 outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="text-sm font-medium text-gray-700 w-20 shrink-0">Email</label>
                      <input
                        type="email"
                        required
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-[#f72798] focus:ring-2 focus:ring-[#f72798]/20 outline-none transition"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="text-sm font-medium text-gray-700 w-20 shrink-0">Password</label>
                      <div className="relative flex-1">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={registerForm.password}
                          onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#f72798] focus:ring-2 focus:ring-[#f72798]/20 outline-none transition pr-10"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                        >
                          {showPassword ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="text-sm font-medium text-gray-700 w-20 shrink-0">Confirm</label>
                      <div className="relative flex-1">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          required
                          value={registerForm.confirmPassword}
                          onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#f72798] focus:ring-2 focus:ring-[#f72798]/20 outline-none transition pr-10"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                        >
                          {showConfirmPassword ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2 bg-[#f72798] text-white font-semibold rounded-lg hover:bg-[#d81b60] transition"
                    >
                      Sign Up
                    </button>
                  </div>
                  {/* Bottom link */}
                  <p className="text-center text-xs text-gray-500 mt-4">
                    Already have an account?
                    <button
                      type="button"
                      onClick={() => setAuthMode('login')}
                      className="text-[#f72798] font-medium hover:underline ml-1"
                    >
                      Login
                    </button>
                  </p>
                </form>
              </div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setAuthModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Backdrop click to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={() => setAuthModalOpen(false)}
          />
        </div>
      )}
    </nav>
  );
}
