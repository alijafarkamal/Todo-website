import React from 'react';
import { TrendingUp, ChevronRight, ArrowUp, ArrowDown } from 'lucide-react';

const TrendingSection = () => {
  const trendingMovies = [
    {
      rank: 1,
      title: "Drive to Survive: Season 6",
      change: "+23",
      image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=500&q=80",
      views: "2.1M"
    },
    {
      rank: 2,
      title: "Shogun",
      change: "+12",
      image: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?auto=format&fit=crop&w=500&q=80",
      views: "1.8M"
    },
    {
      rank: 3,
      title: "Avatar 3",
      change: "+45",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80",
      views: "1.5M"
    },
    {
      rank: 4,
      title: "The Walking Dead",
      change: "-2",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=500&q=80",
      views: "1.2M"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <TrendingUp className="text-[#F5C518]" size={32} />
          <div>
            <h2 className="text-3xl font-bold">Trending</h2>
            <p className="text-gray-400">What's popular right now</p>
          </div>
        </div>
        <button className="flex items-center space-x-2 text-[#F5C518] hover:text-[#E2B616] transition-colors">
          <span className="font-semibold">See all trending</span>
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {trendingMovies.map((movie, index) => (
          <div key={index} className="bg-[#1f1f1f] rounded-lg overflow-hidden hover:bg-[#252525] transition-colors group cursor-pointer">
            <div className="flex items-center p-4">
              <div className="w-16 h-16 bg-[#F5C518] text-black flex items-center justify-center text-2xl font-bold rounded-lg">
                {movie.rank}
              </div>
              <img src={movie.image} alt={movie.title} className="w-24 h-24 object-cover mx-6 rounded-md" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold group-hover:text-[#F5C518] transition-colors">{movie.title}</h3>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-gray-400">{movie.views} views</span>
                  <div className={`flex items-center space-x-1 ${movie.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {movie.change.startsWith('+') ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                    <span>{movie.change}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;