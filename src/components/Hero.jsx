import React from 'react';
import { PlayCircle, Plus, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="w-full h-[700px] relative">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80"
          alt="Featured Movie"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold leading-tight">Dune: Part Two</h1>
                <div className="flex items-center space-x-6 text-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="text-[#F5C518]" size={24} fill="#F5C518" />
                    <span className="font-semibold">8.8</span>
                    <span className="text-gray-400">/ 10</span>
                  </div>
                  <span className="text-gray-300">2024</span>
                  <span className="text-gray-300">2h 46min</span>
                  <span className="px-2 py-1 bg-[#252525] rounded-md text-sm">PG-13</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex space-x-3 text-sm">
                  <span className="px-3 py-1 bg-[#252525] rounded-full">Action</span>
                  <span className="px-3 py-1 bg-[#252525] rounded-full">Adventure</span>
                  <span className="px-3 py-1 bg-[#252525] rounded-full">Drama</span>
                </div>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. As he battles to prevent a terrible future, he must confront the greatest challenge of his life.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <button className="bg-[#F5C518] text-black px-8 py-4 rounded-full font-semibold flex items-center space-x-3 hover:bg-[#E2B616] transition-colors">
                  <PlayCircle size={24} />
                  <span>Watch Trailer</span>
                </button>
                <button className="bg-[#252525] px-8 py-4 rounded-full font-semibold flex items-center space-x-3 hover:bg-[#303030] transition-colors">
                  <Plus size={24} />
                  <span>Add to Watchlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;