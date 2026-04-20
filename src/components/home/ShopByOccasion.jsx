import { useNavigate } from "react-router-dom";

const OCCASIONS = [
  {
    key: "wedding",
    title: "Wedding",
    image:
      "https://i.pinimg.com/webp/1200x/8f/d1/49/8fd149b55bbfb33f7fb836fbeae31dbf.webp",
  },
  {
    key: "birthday",
    title: "Birthday",
    image:
      "https://i.pinimg.com/webp/736x/70/97/2e/70972e7983b93b58d7df3e3a58c7983a.webp",
  },
  {
    key: "anniversary",
    title: "Anniversary",
    image:
      "https://i.pinimg.com/736x/bd/38/d6/bd38d676f750ea04431c23c99a5c3ed5.jpg",
  },
  {
    key: "sympathy",
    title: "Sympathy",
    image:
      "https://i.pinimg.com/1200x/04/0d/63/040d6396856599dfefc011f17a6c8856.jpg",
  },
];

export default function ShopByOccasion() {
  const navigate = useNavigate();
  
  const handleOccasionClick = (key) => {
    navigate(`/shop?category=${key}`);
  };
  
  return (
    <section className="bg-[#f6eef2] w-full py-14">
      {/* Title */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-[#0b1220] font-serif text-4xl md:text-5xl">
          Shop by Occasion
        </h2>
        <p className="text-[#0b1220]/60 text-base max-w-2xl mx-auto mt-3">
          Discover the perfect floral arrangement curated specifically for your
          most meaningful moments.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {OCCASIONS.map((o) => (
            <div
              key={o.key}
              onClick={() => handleOccasionClick(o.key)}
              className="group relative rounded-[20px] overflow-hidden shadow-lg cursor-pointer border border-gray-200"
              style={{ height: "383px" }}
            >
              {/* Image */}
              <img
                src={o.image}
                alt={o.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />
              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-3xl md:text-4xl drop-shadow-md">
                  {o.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
