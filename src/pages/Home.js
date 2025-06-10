import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { FaCar, FaTshirt, FaMobileAlt, FaHome, FaLaptop, FaBook } from 'react-icons/fa';
import axios from 'axios';

const categories = [
  { name: 'Cars', icon: <FaCar />, link: '/ads/cars' },
  { name: 'Property', icon: <FaHome />, link: '/ads/property' },
  { name: 'Mobiles', icon: <FaMobileAlt />, link: '/ads/mobiles' },
  { name: 'Fashion', icon: <FaTshirt />, link: '/ads/fashion' },
  { name: 'Electronics', icon: <FaLaptop />, link: '/ads/electronics' },
  { name: 'Books', icon: <FaBook />, link: '/ads/books' },
];

const Home = () => {
  const [featuredAds, setFeaturedAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedAds = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/ads/featured');
        setFeaturedAds(response.data); 
      } catch (err) {
        setError('Failed to load featured ads. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedAds();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Category Quick Links */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Browse Categories</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map(cat => (
            <Link key={cat.name} to={cat.link} className="flex flex-col items-center justify-center p-4 w-32 h-32 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all">
              <span className="text-4xl text-red-600 mb-2">{cat.icon}</span>
              <span className="text-md font-medium text-slate-700">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Ads */}
      <div className='mb-12'>
        <h2 className="text-2xl font-semibold mb-4">Featured Ads</h2>
        {loading ? (<p>Loading ads...</p>) : error ? (<p className="text-red-500">{error}</p>) : 
        featuredAds.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
            {featuredAds.map(ad => <ProductCard key={ad._id || ad.id} ad={ad} />)}
          </div>
        ) : (<p>No featured ads found.</p>)}
      </div>

      
    </div>
  );
};
export default Home;
