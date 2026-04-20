import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore.jsx';
import { useUserStore } from '../store/useUserStore.jsx';

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

// Extended products data with categories - matching home page style
const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Classic Red Roses",
    price: 45.0,
    category: "Anniversary",
    image: "https://images.unsplash.com/photo-1549646864-46c9bb35cd9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Pastel Peony Dream",
    price: 65.0,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1582791695759-42b789178051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Lavender Elegance",
    price: 55.0,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Sunshine Sunflowers",
    price: 40.0,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55ef6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "White Lily Serenity",
    price: 75.0,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1517456793672-03f4baae621a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Spring Tulip Assortment",
    price: 35.0,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1520772719580-928dc4eaf169?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Wildflower Whisper",
    price: 50.0,
    category: "Anniversary",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Orchid Oasis",
    price: 85.0,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1533038590840-1cbeaabed8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Blushing Romance",
    price: 85.0,
    category: "Anniversary",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Golden Anniversary",
    price: 120.0,
    category: "Anniversary",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Birthday Bash Bouquet",
    price: 55.0,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Celebration Carnations",
    price: 40.0,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    name: "Bridal Bliss",
    price: 150.0,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    name: "Wedding Pure Elegance",
    price: 180.0,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    name: "Peaceful White Roses",
    price: 70.0,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    name: "Comfort Lilies",
    price: 65.0,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    name: "Holiday Sparkle",
    price: 95.0,
    category: "Holiday",
    image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    name: "Festive Poinsettia",
    price: 60.0,
    category: "Holiday",
    image: "https://images.unsplash.com/photo-1512236399254-6d277e9e3f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'Wedding', name: 'Wedding' },
  { id: 'Anniversary', name: 'Anniversary' },
  { id: 'Birthday', name: 'Birthday' },
  { id: 'Holiday', name: 'Holiday' },
  { id: 'Sympathy', name: 'Sympathy' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCartStore();
  const { isAuthenticated } = useUserStore();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(ALL_PRODUCTS);
  const [addedProducts, setAddedProducts] = useState({}); // Track which products were added

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
      setSelectedCategory(formattedCategory);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = ALL_PRODUCTS;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId.toLowerCase() });
    }
  };

  const handleAddToCart = (product) => {
    addItem(product);
    
    // Only show "Added to cart" message for authenticated users
    if (isAuthenticated) {
      setAddedProducts(prev => ({ ...prev, [product.id]: true }));
      
      // Clear the message after 2 seconds
      setTimeout(() => {
        setAddedProducts(prev => ({ ...prev, [product.id]: false }));
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-serif text-[#0b1220] mb-4 text-center">Our Flower Collection</h1>
        <p className="text-gray-600 text-center mb-8">Discover the perfect bouquet for every occasion</p>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search flowers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-full border border-gray-200 focus:border-[#f72798] focus:ring-2 focus:ring-[#f72798]/20 outline-none transition shadow-sm"
            />
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Category Filter Row */}
      <div className="border-y border-gray-100 py-4 mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#f72798] text-white shadow-md'
                    : 'bg-gray-50 text-[#0b1220] hover:bg-[#f72798]/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid - Matching Home Page Style */}
      <div className="max-w-7xl mx-auto px-4">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filteredProducts.map((item) => (
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
                      <div className="flex flex-col items-end gap-1">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#f72798] text-[#f72798] font-bold hover:bg-[#f72798] hover:text-white transition"
                          aria-label={`Add ${item.name} to cart`}
                        >
                          <IconShoppingCart className="w-4 h-4" />
                        </button>
                        {addedProducts[item.id] && (
                          <span className="text-green-500 text-xs font-medium animate-fade-in">
                            Added to cart!
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🌸</div>
            <h3 className="text-xl font-semibold text-[#0b1220] mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try a different search or category</p>
            <button
              onClick={() => { handleCategoryClick('all'); setSearchQuery(''); }}
              className="px-6 py-3 bg-[#f72798] text-white rounded-full hover:bg-[#d81b60] transition"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
