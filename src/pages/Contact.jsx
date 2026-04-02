import React from "react";

export default function Contact() {
  return (
    <section className="bg-[#fdf6fa] min-h-screen py-16 px-2 md:px-0 flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-[#0b1220] font-serif text-5xl mb-4">
          Get in Touch
        </h2>
        <p className="text-[#0b1220]/70 text-lg max-w-xl mx-auto">
          Have questions about our bouquets or planning a special event? We'd
          love to hear from you.
        </p>
      </div>
      <div className="w-full max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#f72798] to-[#a259e6] p-8 md:p-12 mb-12 shadow-lg">
        <h3 className="text-white font-serif text-3xl md:text-4xl font-bold mb-8">
          Contact Information
        </h3>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-xl p-4 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.52l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.06 16.06 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Call Us</div>
                <div className="text-white/90 text-base">+1 (555) 000-0000</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-xl p-4 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-4 4H8a4 4 0 01-4-4v-1"
                  />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Email Us</div>
                <div className="text-white/90 text-base">
                  hello@bloomhaven.com
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-xl p-4 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 12.414a8 8 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Our Studio</div>
                <div className="text-white/90 text-base">
                  123 Blossom Lane, Floral Valley, NY 10001
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="w-full max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg">
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1">
            <label
              className="block text-[#0b1220] font-bold mb-2 tracking-wide"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="w-full rounded-xl border border-[#f6eef2] bg-[#fdf6fa] px-5 py-4 text-[#0b1220] text-base focus:outline-none focus:ring-2 focus:ring-[#f72798]"
              id="firstName"
              placeholder="Jane"
            />
          </div>
          <div className="flex-1">
            <label
              className="block text-[#0b1220] font-bold mb-2 tracking-wide"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="w-full rounded-xl border border-[#f6eef2] bg-[#fdf6fa] px-5 py-4 text-[#0b1220] text-base focus:outline-none focus:ring-2 focus:ring-[#f72798]"
              id="lastName"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-[#0b1220] font-bold mb-2 tracking-wide"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="w-full rounded-xl border border-[#f6eef2] bg-[#fdf6fa] px-5 py-4 text-[#0b1220] text-base focus:outline-none focus:ring-2 focus:ring-[#f72798]"
            id="email"
            placeholder="jane@example.com"
          />
        </div>
        <div className="mb-8">
          <label
            className="block text-[#0b1220] font-bold mb-2 tracking-wide"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full rounded-xl border border-[#f6eef2] bg-[#fdf6fa] px-5 py-4 text-[#0b1220] text-base focus:outline-none focus:ring-2 focus:ring-[#f72798] min-h-[120px] md:min-h-[180px]"
            id="message"
            placeholder="Tell us about your floral needs..."
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-[#f72798] hover:bg-[#d81b81] text-white text-lg font-semibold rounded-xl flex items-center justify-center gap-2 transition-all"
        >
          Send Message
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 2L11 13"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 2l-7 20-4-9-9-4 20-7z"
            />
          </svg>
        </button>
      </form>
    </section>
  );
}
