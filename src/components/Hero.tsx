import React from 'react';
import { PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16 mt-4">
      <div className="w-full h-[600px] relative">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80"
          alt="Featured Movie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Dune: Part Two</h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-[#F5C518] text-black px-2 py-1 rounded">IMDb 8.8</span>
                <span>2024</span>
                <span>2h 46min</span>
                <span>Action, Adventure, Drama</span>
              </div>
              <p className="text-lg mb-6">
                Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.
              </p>
              <button className="bg-[#F5C518] text-black px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-[#E2B616]">
                <PlayCircle />
                <span>Watch Trailer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;