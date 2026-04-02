const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M5 12h12m0 0-5-5m5 5-5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconHeart = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M12 21s-7-4.4-9.5-8.3C.6 9.6 2.1 6.7 5 6c1.9-.4 3.7.4 5 1.7C11.3 6.4 13.1 5.6 15 6c2.9.7 4.4 3.6 2.5 6.7C19 16.6 12 21 12 21Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconShoppingCart = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.7H8.1a2 2 0 0 1-2-1.6L4.2 3.8A1 1 0 0 0 3.2 3H2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BOUQUETS = [
  {
    id: 1,
    category: "Anniversary",
    name: "Blushing Romance",
    price: 85.0,
    image:
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c19f2bdc-d442-43ba-ba7c-ce9339b7a0f1/hero-bouquet-4e4b37d6-1774791197885.webp",
  },
  {
    id: 2,
    category: "Decoration",
    name: "Wild Meadow Whisper",
    price: 65.0,
    image:
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c19f2bdc-d442-43ba-ba7c-ce9339b7a0f1/minimal-flowers-4dfa56a6-1774791190985.webp",
  },
  {
    id: 3,
    category: "Wedding",
    name: "Wedding Pure Elegance",
    price: 120.0,
    image:
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/c19f2bdc-d442-43ba-ba7c-ce9339b7a0f1/wedding-flowers-17b60c34-1774791197314.webp",
  },
];

export const FeaturedBouquets = ({ onAddToCart }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-[#f72798] text-sm font-bold uppercase tracking-widest block mb-2">
              Top Selections
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0b1220]">
              Featured Bouquets
            </h2>
          </div>
          <button className="text-[#f72798] font-bold flex items-center gap-2 group">
            View All Products
            <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BOUQUETS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-[2rem] overflow-hidden border border-[#0b1220]/10 bg-white shadow-sm hover:shadow-xl transition-all flex flex-col items-center"
              style={{
                width: "300px",
                minWidth: "220px",
                maxWidth: "100%",
                height: "420px",
                margin: "0 auto",
              }}
            >
              {/* Image */}
              <div className="relative w-full h-[260px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Favorite Icon */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/70 backdrop-blur rounded-full flex items-center justify-center text-[#f72798] hover:bg-[#f72798] hover:text-white transition">
                  <IconHeart className="w-5 h-5" />
                </button>
              </div>
              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-center w-full h-full">
                <div className="flex flex-col items-start w-full h-full justify-between">
                  <div>
                    <span className="text-[#f72798] text-xs font-bold uppercase tracking-widest mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-serif text-[#0b1220] mb-1">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex flex-row items-center gap-2 w-full mt-4 justify-between">
                    <span className="text-xl font-bold text-[#0b1220]">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => onAddToCart?.(item)}
                      className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#f72798] text-[#f72798] font-bold hover:bg-[#f72798] hover:text-white transition"
                      aria-label={`Add ${item.name} to cart`}
                    >
                      <IconShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBouquets;
