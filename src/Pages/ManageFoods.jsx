import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';

const ManageFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // Update modal state
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  // Form state for update
  const [formData, setFormData] = useState({
    foodName: '',
    foodImage: '',
    foodQuantity: '',
    pickupLocation: '',
    expiredDateTime: '',
    notes: '',
  });

  useEffect(() => {
    if (!user?.email) return;

    const fetchFoods = async () => {
      try {
        setLoading(true);
        // Fetch all foods added by the logged in user
        const res = await axios.get(`https://my-assignment-11-server-three.vercel.app/userfoods?email=${user.email}`);
        setFoods(res.data);
      } catch (error) {
        console.error('Failed to fetch foods:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, [user?.email]);

  // Delete food
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this food?')) return;

    try {
      await axios.delete(`https://my-assignment-11-server-three.vercel.app/food/${id}`);
      setFoods(prev => prev.filter(food => food._id !== id));
      alert('Food deleted successfully');
    } catch (error) {
      console.error('Failed to delete food:', error);
      alert('Failed to delete food');
    }
  };

  // Open update modal & fill form
  const openUpdateModal = (food) => {
    setSelectedFood(food);
    setFormData({
      foodName: food.foodName || '',
      foodImage: food.foodImage || '',
      foodQuantity: food.foodQuantity || '',
      pickupLocation: food.pickupLocation || '',
      expiredDateTime: food.expiredDateTime ? new Date(food.expiredDateTime).toISOString().slice(0,16) : '',
      notes: food.notes || '',
    });
    setUpdateModalOpen(true);
  };

  // Handle form input change
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit update
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFood) return;

    try {
      const res = await axios.put(`https://my-assignment-11-server-three.vercel.app/food/${selectedFood._id}`, formData);
      if (res.data.modifiedCount > 0) {
        alert('Food updated successfully');
        // Update foods state with new data
        setFoods((prev) =>
          prev.map((food) =>
            food._id === selectedFood._id ? { ...food, ...formData } : food
          )
        );
        setUpdateModalOpen(false);
      } else {
        alert('No changes were made.');
      }
    } catch (error) {
      console.error('Failed to update food:', error);
      alert('Failed to update food');
    }
  };

  if (loading) return <div className="text-center mt-10">Loading your foods...</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 mt-24">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Your Foods</h1>

      {foods.length === 0 ? (
        <p className="text-center text-gray-500">You have not added any foods yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Food Name</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Pickup Location</th>
                <th className="p-3 text-left">Expires At</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {foods.map(food => (
                <tr key={food._id} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="p-3">{food.foodName}</td>
                  <td className="p-3">{food.foodQuantity}</td>
                  <td className="p-3">{food.pickupLocation}</td>
                  <td className="p-3">{new Date(food.expiredDateTime).toLocaleString()}</td>
                  <td className="p-3 space-x-2">
                    <button
                      className="btn btn-sm btn-outline btn-info"
                      onClick={() => openUpdateModal(food)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-sm btn-outline btn-error"
                      onClick={() => handleDelete(food._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Update Modal */}
      {updateModalOpen && (
        <dialog open className="modal">
          <form onSubmit={handleUpdateSubmit} className="modal-box max-w-lg space-y-4">
            <h3 className="font-bold text-lg">Update Food</h3>

            <input
              type="text"
              name="foodName"
              className="input input-bordered w-full"
              placeholder="Food Name"
              value={formData.foodName}
              onChange={handleChange}
              required
            />
            <input
              type="url"
              name="foodImage"
              className="input input-bordered w-full"
              placeholder="Food Image URL"
              value={formData.foodImage}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="foodQuantity"
              className="input input-bordered w-full"
              placeholder="Food Quantity"
              value={formData.foodQuantity}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="pickupLocation"
              className="input input-bordered w-full"
              placeholder="Pickup Location"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
            />
            <input
              type="datetime-local"
              name="expiredDateTime"
              className="input input-bordered w-full"
              value={formData.expiredDateTime}
              onChange={handleChange}
              required
            />
            <textarea
              name="notes"
              className="textarea textarea-bordered w-full"
              placeholder="Additional Notes"
              value={formData.notes}
              onChange={handleChange}
            />

            <div className="modal-action">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setUpdateModalOpen(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default ManageFoods;
