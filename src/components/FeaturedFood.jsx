import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const FeaturedFood = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeaturedFoods = async () => {
      try {
        const res = await axios.get('http://localhost:3000/availablefoods');
        // Sort by descending foodQuantity and take top 6
        const sorted = res.data
          .sort((a, b) => Number(b.foodQuantity) - Number(a.foodQuantity))
          .slice(0, 6);
        setFeaturedFoods(sorted);
      } catch (error) {
        console.error('Failed to fetch featured foods:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedFoods();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading featured foods...</div>;
  }

  if (featuredFoods.length === 0) {
    return <div className="text-center mt-10 text-gray-500">No featured foods available.</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Foods</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredFoods.map(food => (
          <div key={food._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{food.foodName}</h3>
              <p className="text-gray-600 mb-1">
                <strong>Quantity:</strong> {food.foodQuantity}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Pickup Location:</strong> {food.pickupLocation}
              </p>
              <p className="text-gray-600">
                <strong>Expires:</strong> {new Date(food.expiredDateTime).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate('/availablefoods')}
          className="btn btn-primary px-6 py-2 rounded-md"
        >
          Show All
        </button>
      </div>
    </section>
  );
};

export default FeaturedFood;
