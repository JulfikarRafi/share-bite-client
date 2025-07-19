// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import axios from 'axios';

// const FoodDetails = () => {
//   const { id } = useParams();
//   const [food, setFood] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(`http://localhost:3000/food/${id}`)
//       .then(res => {
//         setFood(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="text-center mt-20">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   if (!food) {
//     return <div className="text-center mt-20 text-red-500">Food not found</div>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-4 mt-10">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <img
//           src={food.foodImage}
//           alt={food.foodName}
//           className="w-full h-64 object-cover"
//         />
//         <div className="p-6 space-y-3">
//           <h2 className="text-3xl font-bold">{food.foodName}</h2>
//           <p><strong>Quantity:</strong> {food.foodQuantity}</p>
//           <p><strong>Pickup Location:</strong> {food.pickupLocation}</p>
//           <p><strong>Expires At:</strong> {new Date(food.expiredDateTime).toLocaleString()}</p>
//           <p><strong>Status:</strong> {food.foodStatus}</p>
//           {food.notes && (
//             <p><strong>Notes:</strong> {food.notes}</p>
//           )}

//           <div className="mt-4 p-4 bg-gray-100 rounded">
//             <h3 className="font-semibold mb-2">Donor Info</h3>
//             <div className="flex items-center gap-4">
//               {food.donorImage && (
//                 <img src={food.donorImage} alt="Donor" className="w-12 h-12 rounded-full" />
//               )}
//               <div>
//                 <p className="font-medium">{food.donorName}</p>
//                 <p className="text-sm text-gray-600">{food.donorEmail}</p>
//               </div>
//             </div>
//           </div>

//           <button
//             className="btn btn-primary w-full mt-6"
//             onClick={() => alert('Request feature coming soon!')}
//           >
//             Request This Food
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodDetails;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import axios from 'axios';
// import { AuthContext } from '../Provider/AuthProvider';

// const FoodDetails = () => {
//   const { id } = useParams();
//   const { user } = useContext(AuthContext);
//   const [food, setFood] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [notes, setNotes] = useState('');

//   useEffect(() => {
//     axios.get(`http://localhost:3000/food/${id}`)
//       .then(res => {
//         setFood(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [id]);

//   const handleRequestSubmit = () => {
//     const requestData = {
//       foodId: food._id,
//       foodName: food.foodName,
//       foodImage: food.foodImage,
//       donorName: food.donorName,
//       donorEmail: food.donorEmail,
//       userEmail: user?.email,
//       requestDate: new Date().toISOString(),
//       pickupLocation: food.pickupLocation,
//       expiredDateTime: food.expiredDateTime,
//       notes: notes,
//     };

//     console.log('Request sent:', requestData);
//     alert('Food request submitted (mocked)');
//     setModalOpen(false);
//   };

//   if (loading) return <div className="text-center mt-20"><span className="loading loading-spinner loading-lg"></span></div>;
//   if (!food) return <div className="text-center mt-20 text-red-500">Food not found</div>;

//   return (
//     <div className="max-w-3xl mx-auto p-4 mt-10">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <img src={food.foodImage} alt={food.foodName} className="w-full h-64 object-cover" />
//         <div className="p-6 space-y-3">
//           <h2 className="text-3xl font-bold">{food.foodName}</h2>
//           <p><strong>Quantity:</strong> {food.foodQuantity}</p>
//           <p><strong>Pickup Location:</strong> {food.pickupLocation}</p>
//           <p><strong>Expires At:</strong> {new Date(food.expiredDateTime).toLocaleString()}</p>
//           <p><strong>Status:</strong> {food.foodStatus}</p>
//           {food.notes && <p><strong>Notes:</strong> {food.notes}</p>}

//           <div className="mt-4 p-4 bg-gray-100 rounded">
//             <h3 className="font-semibold mb-2">Donor Info</h3>
//             <div className="flex items-center gap-4">
//               {food.donorImage && (
//                 <img src={food.donorImage} alt="Donor" className="w-12 h-12 rounded-full" />
//               )}
//               <div>
//                 <p className="font-medium">{food.donorName}</p>
//                 <p className="text-sm text-gray-600">{food.donorEmail}</p>
//               </div>
//             </div>
//           </div>

//           <button className="btn btn-primary w-full mt-6" onClick={() => setModalOpen(true)}>
//             Request This Food
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {modalOpen && (
//         <dialog open className="modal">
//           <div className="modal-box max-w-2xl">
//             <h3 className="font-bold text-lg mb-4">Request Food</h3>

//             <div className="space-y-3">
//               <input className="input input-bordered w-full" value={food.foodName} readOnly />
//               <input className="input input-bordered w-full" value={food.foodImage} readOnly />
//               <input className="input input-bordered w-full" value={food._id} readOnly />
//               <input className="input input-bordered w-full" value={food.donorName} readOnly />
//               <input className="input input-bordered w-full" value={food.donorEmail} readOnly />
//               <input className="input input-bordered w-full" value={user?.email} readOnly />
//               <input className="input input-bordered w-full" value={new Date().toLocaleString()} readOnly />
//               <input className="input input-bordered w-full" value={food.pickupLocation} readOnly />
//               <input className="input input-bordered w-full" value={new Date(food.expiredDateTime).toLocaleString()} readOnly />
//               <textarea
//                 className="textarea textarea-bordered w-full"
//                 placeholder="Additional Notes"
//                 value={notes}
//                 onChange={(e) => setNotes(e.target.value)}
//               ></textarea>
//             </div>

//             <div className="modal-action mt-4">
//               <button className="btn btn-outline" onClick={() => setModalOpen(false)}>Cancel</button>
//               <button className="btn btn-primary" onClick={handleRequestSubmit}>Request</button>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </div>
//   );
// };

// export default FoodDetails;


import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';

const FoodDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/food/${id}`)
      .then(res => {
        setFood(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleRequestSubmit = async () => {
    if (!food || !user) return;

    const requestData = {
      userEmail: user.email,
      userName: user.displayName,
      notes: notes,
      requestDate: new Date().toISOString(),
    };

    try {
      const res = await axios.patch(
        `http://localhost:3000/food/request/${food._id}`,
        requestData
      );

      if (res.data.modifiedCount > 0) {
        alert('Food successfully requested!');
        setModalOpen(false);
        // Optionally, update UI or redirect
      } else {
        alert('This food might have been already requested or unavailable.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to request food.');
    }
  };

  if (loading) return <div className="text-center mt-20"><span className="loading loading-spinner loading-lg"></span></div>;
  if (!food) return <div className="text-center mt-20 text-red-500">Food not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-4 mt-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={food.foodImage} alt={food.foodName} className="w-full h-64 object-cover" />
        <div className="p-6 space-y-3">
          <h2 className="text-3xl font-bold">{food.foodName}</h2>
          <p><strong>Quantity:</strong> {food.foodQuantity}</p>
          <p><strong>Pickup Location:</strong> {food.pickupLocation}</p>
          <p><strong>Expires At:</strong> {new Date(food.expiredDateTime).toLocaleString()}</p>
          <p><strong>Status:</strong> {food.foodStatus}</p>
          {food.notes && <p><strong>Notes:</strong> {food.notes}</p>}

          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h3 className="font-semibold mb-2">Donor Info</h3>
            <div className="flex items-center gap-4">
              {food.donorImage && (
                <img src={food.donorImage} alt="Donor" className="w-12 h-12 rounded-full" />
              )}
              <div>
                <p className="font-medium">{food.donorName}</p>
                <p className="text-sm text-gray-600">{food.donorEmail}</p>
              </div>
            </div>
          </div>

          <button className="btn btn-primary w-full mt-6" onClick={() => setModalOpen(true)}>
            Request This Food
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <dialog open className="modal">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg mb-4">Request Food</h3>

            <div className="space-y-3">
              <input className="input input-bordered w-full" value={food.foodName} readOnly />
              <input className="input input-bordered w-full" value={food.foodImage} readOnly />
              <input className="input input-bordered w-full" value={food._id} readOnly />
              <input className="input input-bordered w-full" value={food.donorName} readOnly />
              <input className="input input-bordered w-full" value={food.donorEmail} readOnly />
              <input className="input input-bordered w-full" value={user?.email} readOnly />
              <input className="input input-bordered w-full" value={new Date().toLocaleString()} readOnly />
              <input className="input input-bordered w-full" value={food.pickupLocation} readOnly />
              <input className="input input-bordered w-full" value={new Date(food.expiredDateTime).toLocaleString()} readOnly />
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Additional Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>

            <div className="modal-action mt-4">
              <button className="btn btn-outline" onClick={() => setModalOpen(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleRequestSubmit}>Request</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default FoodDetails;


