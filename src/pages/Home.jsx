import FeaturedBouquets from "../components/home/FeaturedBouquets";
import ShopByOccasion from "../components/home/ShopByOccasion";
import Testimonials from "../components/Testimonials";
import NewsletterSignup from "../components/NewsletterSignup";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore.jsx";

export default function Home() {
  const { addItem } = useCartStore();
  return (
    <>
      <div className="relative w-full min-h-[110vh] flex items-stretch overflow-hidden font-sans p-0 m-0">
        {/* Background Image */}
        <img
          src="C:\Users\Hp\Desktop\Projects\Maya's Blossom\colorful tulip background.jpg"
          alt="flowers"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-100 z-0"
          style={{ minHeight: "110vh", height: "100%", margin: 0, padding: 0 }}
        />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-start pt-24">
          <div className="max-w-xl lg:max-w-2xl mt-6 md:mt-14">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <span className="text-[#f72798] font-semibold text-lg md:text-xl tracking-wider flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline w-6 h-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#f72798"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3m-2 4h8"
                  />
                </svg>
                Hand-curated with love 🌸
              </span>
            </div>

            <h1 className="font-serif leading-[1.1] md:leading-[1.1]">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] text-[#0b1220] font-medium tracking-tight">
                Fresh Flowers for
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] text-[#f72798] font-medium tracking-tight mt-1">
                Every Moment
              </span>
            </h1>

            <p className="mt-8 text-[1.1rem] md:text-lg text-[#0b1220]/70 leading-relaxed max-w-lg font-light">
              Experience the beauty of nature delivered to your door. From
              romantic weddings to intimate celebrations, we create floral magic
              for every occasion.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 md:gap-6">
              <button className="px-8 py-3.5 bg-[#f72798] hover:bg-[#d81b81] text-white text-base font-medium rounded-full transition-all flex items-center gap-2 group shadow-sm">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              <Link to="/about" className="px-8 py-3.5 bg-white/10 border-2 border-[#f72798] text-[#f72798] hover:bg-white/15 text-base font-medium rounded-full transition-all shadow-sm backdrop-blur inline-flex items-center justify-center">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Bouquets Section */}
      <FeaturedBouquets onAddToCart={addItem} />

      {/* Shop by Occasion */}
      <ShopByOccasion />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Signup Section */}
      <NewsletterSignup />
    </>
  );
}
