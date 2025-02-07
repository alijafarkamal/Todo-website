import React from 'react';
import { Search, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#121212] py-2 px-4 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-[#F5C518] font-bold text-3xl">IMDb</span>
          </div>
          <button className="flex items-center space-x-1 hover:bg-[#252525] px-3 py-1 rounded">
            <Menu size={20} />
            <span>Menu</span>
          </button>
        </div>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search IMDb"
              className="w-full bg-white text-black px-4 py-1 rounded focus:outline-none"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hover:bg-[#252525] px-3 py-1 rounded">Sign In</button>
          <button className="bg-[#F5C518] text-black px-4 py-1 rounded font-semibold hover:bg-[#E2B616]">
            Join IMDb
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;