import React from 'react';
import { TrendingUp, ChevronRight } from 'lucide-react';

const TrendingSection = () => {
  const trendingMovies = [
    {
      rank: 1,
      title: "Drive to Survive: Season 6",
      change: "+23",
      image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=500&q=80"
    },
    {
      rank: 2,
      title: "Shogun",
      change: "+12",
      image: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?auto=format&fit=crop&w=500&q=80"
    },
    {
      rank: 3,
      title: "Avatar 3",
      change: "+45",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80"
    },
    {
      rank: 4,
      title: "The Walking Dead",
      change: "-2",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <TrendingUp className="text-[#F5C518]" size={24} />
          <h2 className="text-2xl font-bold">Trending</h2>
        </div>
        <button className="flex items-center text-[#F5C518] hover:text-[#E2B616]">
          See all <ChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {trendingMovies.map((movie, index) => (
          <div key={index} className="bg-[#1f1f1f] rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative">
              <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
              <div className="absolute top-0 left-0 w-10 h-10 bg-[#F5C518] text-black flex items-center justify-center font-bold">
                {movie.rank}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2 group-hover:text-[#F5C518]">{movie.title}</h3>
              <span className={`${movie.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {movie.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;