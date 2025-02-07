import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

const FeaturedSection = () => {
  const featuredMovies = [
    {
      title: "Poor Things",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80",
      rating: "8.4",
      genre: "Comedy/Drama",
      year: "2024"
    },
    {
      title: "Oppenheimer",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=500&q=80",
      rating: "8.9",
      genre: "Biography/Drama",
      year: "2023"
    },
    {
      title: "The Zone of Interest",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80",
      rating: "8.2",
      genre: "Drama/History",
      year: "2024"
    },
    {
      title: "Anyone But You",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=500&q=80",
      rating: "7.5",
      genre: "Romance/Comedy",
      year: "2024"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          { <h2 className="text-3xl font-bold">Featured today</h2> }
          <p className="text-gray-400">Our selection of the best new releases</p>
        </div>
        <button className="flex items-center space-x-2 text-[#F5C518] hover:text-[#E2B616] transition-colors">
          <span className="font-semibold">See all featured</span>
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {featuredMovies.map((movie, index) => (
          <div key={index} className="flex bg-[#1f1f1f] rounded-lg overflow-hidden hover:bg-[#252525] transition-colors group cursor-pointer">
            <img src={movie.image} alt={movie.title} className="w-64 h-96 object-cover" />
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-[#F5C518] transition-colors">{movie.title}</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Star className="text-[#F5C518]" size={20} fill="#F5C518" />
                    <span className="font-semibold">{movie.rating}</span>
                  </div>
                  <span className="text-gray-400">{movie.year}</span>
                  <span className="text-gray-400">{movie.genre}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-6">
                <button className="bg-[#F5C518] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#E2B616] transition-colors">
                  Watch Trailer
                </button>
                <button className="bg-[#252525] px-6 py-2 rounded-full font-semibold hover:bg-[#303030] transition-colors">
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;