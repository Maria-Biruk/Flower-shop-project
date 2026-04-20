import { useState } from 'react';
import { useUserStore } from '../store/useUserStore.jsx';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, isAuthenticated, updateProfile, logout } = useUserStore();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: user?.city || '',
    country: user?.country || ''
  });

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-serif text-[#0b1220] mb-4">Please Sign In</h1>
          <p className="text-gray-600 mb-6">You need to be logged in to view your profile.</p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#f72798] text-white rounded-full hover:bg-[#d81b60] transition"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-[#f72798] flex items-center justify-center text-white text-3xl font-bold">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-serif text-[#0b1220] mb-1">{user?.name}</h1>
              <p className="text-gray-500">{user?.email}</p>
              <p className="text-sm text-[#f72798] mt-2">Member since {new Date().toLocaleDateString()}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-2 bg-[#f72798] text-white rounded-full hover:bg-[#d81b60] transition"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-2 border-2 border-[#f72798] text-[#f72798] rounded-full hover:bg-[#f72798]/10 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-semibold text-[#0b1220] mb-6">Personal Information</h2>
          
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f72798] focus:ring-2 focus:ring-[#f72798]/20 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f72798] focus:ring-2 focus:ring-[#f72798]/20 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f72798] focus:ring-2 focus:ring-[#f72798]/20 outline-none transition"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f72798] focus:ring-2 focus:ring-[#f72798]/20 outline-none transition"
                    placeholder="New York"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f72798] focus:ring-2 focus:ring-[#f72798]/20 outline-none transition"
                  placeholder="123 Main Street, Apt 4B"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#f72798] text-white rounded-full hover:bg-[#d81b60] transition"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                  <p className="text-[#0b1220] font-medium">{user?.name || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
                  <p className="text-[#0b1220] font-medium">{user?.email || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Phone</label>
                  <p className="text-[#0b1220] font-medium">{user?.phone || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">City</label>
                  <p className="text-[#0b1220] font-medium">{user?.city || 'Not set'}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Address</label>
                <p className="text-[#0b1220] font-medium">{user?.address || 'Not set'}</p>
              </div>
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer" onClick={() => navigate('/orders')}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f72798]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#f72798]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#0b1220]">My Orders</h3>
                <p className="text-sm text-gray-500">View your order history</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer" onClick={() => navigate('/shop')}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f72798]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#f72798]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#0b1220]">Continue Shopping</h3>
                <p className="text-sm text-gray-500">Browse our collection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
