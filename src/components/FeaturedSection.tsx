import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

const FeaturedSection = () => {
  const featuredMovies = [
    {
      title: "Poor Things",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80",
      rating: "8.4"
    },
    {
      title: "Oppenheimer",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=500&q=80",
      rating: "8.9"
    },
    {
      title: "The Zone of Interest",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80",
      rating: "8.2"
    },
    {
      title: "Anyone But You",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=500&q=80",
      rating: "7.5"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured today</h2>
        <button className="flex items-center text-[#F5C518] hover:text-[#E2B616]">
          See all <ChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featuredMovies.map((movie, index) => (
          <div key={index} className="bg-[#1f1f1f] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200">
            <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{movie.title}</h3>
              <div className="flex items-center">
                <Star className="text-[#F5C518]" size={16} />
                <span className="ml-1">{movie.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;