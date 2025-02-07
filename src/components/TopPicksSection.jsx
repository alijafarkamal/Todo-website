import React from 'react';
import { Star, Award } from 'lucide-react';

const TopPicksSection = () => {
  const topPicks = [
    {
      title: "The Batman",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=500&q=80",
      rating: "9.1",
      genre: "Action"
    },
    {
      title: "Inception",
      image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=500&q=80",
      rating: "8.8",
      genre: "Sci-Fi"
    },
    {
      title: "Interstellar",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=80",
      rating: "8.9",
      genre: "Adventure"
    },
    {
      title: "The Dark Knight",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=500&q=80",
      rating: "9.0",
      genre: "Action"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Award className="text-[#F5C518]" size={32} />
        <div>
          <h2 className="text-3xl font-bold">IMDb Top Picks</h2>
          <p className="text-gray-400">Must-watch movies of all time</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {topPicks.map((movie, index) => (
          <div key={index} className="bg-[#1f1f1f] rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative">
              <img src={movie.image} alt={movie.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <button className="w-full bg-[#F5C518] text-black py-2 rounded-md font-semibold">
                  View Details
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-[#F5C518] transition-colors">{movie.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="text-[#F5C518]" size={16} fill="#F5C518" />
                  <span>{movie.rating}</span>
                </div>
                <span className="text-gray-400 text-sm">{movie.genre}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksSection;