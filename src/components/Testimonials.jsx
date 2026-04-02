import React from "react";

const testimonials = [
  {
    name: "Sarah J.",
    text: "The most beautiful bouquet I have ever received! Fresh, fragrant, and perfectly arranged. Bloom Haven exceeded all expectations.",
    stars: 5,
  },
  {
    name: "Michael R.",
    text: "Fast delivery and incredible customer service. They helped me pick the perfect anniversary flowers. My wife loved them!",
    stars: 5,
  },
  {
    name: "Emma W.",
    text: "I used Bloom Haven for my wedding flowers and it was the best decision. Every detail was stunning and the colors were exactly as requested.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-transparent">
      <div className="max-w-6xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative bg-pink-50 rounded-3xl shadow-md p-8 pt-8 flex flex-col items-start text-left"
          >
            <div className="absolute -top-8 left-8 w-16 h-16 bg-[#f72798] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div className="flex gap-1 mb-4 mt-2 justify-center md:justify-start w-full">
              {[...Array(t.stars)].map((_, idx) => (
                <svg
                  key={idx}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#f72798"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <blockquote className="italic text-lg text-gray-700 mb-6">
              “{t.text}”
            </blockquote>
            <div className="font-bold text-lg text-gray-900 flex items-center gap-2">
              <span className="text-xl">—</span> {t.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
