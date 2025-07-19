import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/availablefoods')
      .then(res => {
        setFoods(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading available foods...</div>;

  if (foods.length === 0) return <div className="text-center mt-10">No available foods found.</div>;

  return (
    <div className="max-w-5xl mx-auto p-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {foods.map(food => (
        <div key={food._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <img
            src={food.foodImage}
            alt={food.foodName}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2">{food.foodName}</h3>
            <p className="text-gray-600 mb-1"><strong>Quantity:</strong> {food.foodQuantity}</p>
            <p className="text-gray-600 mb-1"><strong>Pickup Location:</strong> {food.pickupLocation}</p>
            <p className="text-gray-600 mb-4"><strong>Expires:</strong> {new Date(food.expiredDateTime).toLocaleString()}</p>
            <button
              className="mt-auto btn btn-primary"
              onClick={() => alert(`View details for: ${food.foodName}`)}
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableFoods;
