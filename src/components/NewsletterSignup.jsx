import React, { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="w-full py-20 bg-pink-100 bg-gradient-to-br from-pink-100 to-pink-200 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-800 mb-4 text-center">
        Join the Bloom Club
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-2xl">
        Subscribe to receive 15% off your first order, plus floral care tips and
        exclusive offers.
      </p>
      {submitted ? (
        <div className="text-green-600 text-lg font-medium">
          Thank you for subscribing!
        </div>
      ) : (
        <form
          className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="rounded-full px-8 py-5 text-lg w-full md:w-[420px] bg-white border-none shadow focus:ring-2 focus:ring-pink-300 outline-none transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-full px-10 py-4 bg-[#f72798] hover:bg-pink-500 text-white text-lg font-semibold transition-all shadow"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}
