import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-4 px-4 md:px-0 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 text-left">
        {/* Logo & Description */}
        <div className="flex flex-col gap-8 pb-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl text-[#f72798]">
              {/* Flower icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#f72798"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92"
                />
                <circle cx="12" cy="12" r="4" fill="#f72798" />
              </svg>
            </span>
            <span className="text-3xl font-serif font-bold text-[#f72798] leading-tight">
              Bloom
              <br />
              Haven
            </span>
          </div>
          <p className="text-gray-600 text-lg max-w-xs mt-6">
            Hand-curated floral arrangements for every special moment in your
            life. We bring nature's beauty to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-serif font-bold text-2xl mb-3 text-gray-900">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-lg">
            <li>
              <Link to="/" className="hover:text-[#f72798]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-[#f72798]">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#f72798]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#f72798]">
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-[#f72798]">
                My Account
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-serif font-bold text-2xl mb-3 text-gray-900">
            Categories
          </h3>
          <ul className="flex flex-col gap-2 text-lg">
            <li>
              <a href="#" className="hover:text-[#f72798]">
                Wedding Flowers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f72798]">
                Birthdays
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f72798]">
                Anniversary
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f72798]">
                Home Decor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f72798]">
                Sympathy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-serif font-bold text-2xl mb-3 text-gray-900">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#f72798] mt-1">
                {/* Improved Location icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#f72798"
                  strokeWidth="1.5"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                  />
                  <circle cx="12" cy="9" r="2.5" fill="#f72798" />
                </svg>
              </span>
              123 Blossom Lane,
              <br />
              Floral Valley, NY 10001
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#f72798]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#f72798"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25m-19.5 0l9.75 7.5 9.75-7.5"
                  />
                </svg>
              </span>
              hello@bloomhaven.com
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#f72798]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#f72798"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75m-19.5 0A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25m-19.5 0l9.75 7.5 9.75-7.5"
                  />
                </svg>
              </span>
              +1 (555) 000-0000
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-100 text-gray-400 text-sm gap-4">
        <div>© 2024 Bloom Haven Flower Shop. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#f72798]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#f72798]">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
