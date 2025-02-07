import React from 'react';
import { Search, Menu, Bell, BookmarkPlus } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#121212] py-3 px-4 fixed w-full top-0 z-50 border-b border-[#252525]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <span className="text-[#F5C518] font-bold text-4xl tracking-tighter">IMDb</span>
          </div>
          <button className="flex items-center space-x-2 hover:bg-[#252525] px-4 py-2 rounded-md transition-colors">
            <Menu size={20} />
            <span className="font-medium">Menu</span>
          </button>
        </div>

        <div className="flex-1 max-w-3xl mx-8">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search IMDb"
              className="w-full bg-white text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5C518] transition-all"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#F5C518] transition-colors" size={20} />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="hover:bg-[#252525] p-2 rounded-full transition-colors">
            <BookmarkPlus size={20} />
          </button>
          <button className="hover:bg-[#252525] p-2 rounded-full transition-colors">
            <Bell size={20} />
          </button>
          <button className="hover:bg-[#252525] px-4 py-2 rounded-md transition-colors">Sign In</button>
          <button className="bg-[#F5C518] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#E2B616] transition-colors">
            Join IMDb
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;