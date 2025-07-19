// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../Provider/AuthProvider';

// const MyRequest = () => {
//   const { user } = useContext(AuthContext);
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (user?.email) {
//       axios.get(`https://my-assignment-11-server-three.vercel.app/myrequests?email=${user.email}`)
//         .then(res => {
//           setRequests(res.data);
//           setLoading(false);
//         })
//         .catch(err => {
//           console.error(err);
//           setLoading(false);
//         });
//     }
//   }, [user]);

//   if (loading) return <div className="text-center mt-10">Loading your requests...</div>;
//   if (requests.length === 0) return <div className="text-center mt-10">You have not requested any foods.</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//       {requests.map(food => (
//         <div key={food._id} className="bg-white shadow-md rounded-lg p-4">
//           <img src={food.foodImage} alt={food.foodName} className="w-full h-40 object-cover rounded mb-3" />
//           <h2 className="text-xl font-bold mb-1">{food.foodName}</h2>
//           <p><strong>Pickup:</strong> {food.pickupLocation}</p>
//           <p><strong>Expires:</strong> {new Date(food.expiredDateTime).toLocaleString()}</p>
//           <p><strong>Status:</strong> {food.foodStatus}</p>
//           <p><strong>Your Notes:</strong> {food?.requestedBy?.notes || 'N/A'}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyRequest;
// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../Provider/AuthProvider';

// const MyRequest = () => {
//   const { user } = useContext(AuthContext);
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (user?.email) {
//       axios.get(`https://my-assignment-11-server-three.vercel.app/myrequests?email=${user.email}`)
//         .then(res => {
//           setRequests(res.data);
//           setLoading(false);
//         })
//         .catch(err => {
//           console.error(err);
//           setLoading(false);
//         });
//     }
//   }, [user]);

//   if (loading) return <div className="text-center mt-10">Loading your requests...</div>;
//   if (requests.length === 0) return <div className="text-center mt-10">You have not requested any foods.</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//       {requests.map(food => (
//         <div key={food._id} className="bg-white shadow-md rounded-lg p-4">
//           <img src={food.foodImage} alt={food.foodName} className="w-full h-40 object-cover rounded mb-3" />
//           <h2 className="text-xl font-bold mb-1">{food.foodName}</h2>
//           <p><strong>Donor:</strong> {food.donorName || 'N/A'}</p>
//           <p><strong>Pickup:</strong> {food.pickupLocation}</p>
//           <p><strong>Expires:</strong> {new Date(food.expiredDateTime).toLocaleString()}</p>
//           <p><strong>Status:</strong> {food.foodStatus}</p>
//           <p><strong>Your Notes:</strong> {food?.requestedBy?.notes || 'N/A'}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyRequest;





// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../Provider/AuthProvider';

// const MyRequest = () => {
//   const { user } = useContext(AuthContext);
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [unauthorized, setUnauthorized] = useState(false);

//   useEffect(() => {
//     if (user?.email) {
//       axios
//         .get(`https://my-assignment-11-server-three.vercel.app/myrequests?email=${user.email}`, {
//           withCredentials: true, 
//         })
//         .then((res) => {
//           setRequests(res.data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error(err);
//           if (err.response && err.response.status === 401) {
//             setUnauthorized(true);
//           }
//           setLoading(false);
//         });
//     }
//   }, [user]);

//   if (loading) return <div className="text-center mt-10">Loading your requests...</div>;
//   if (unauthorized) return <div className="text-center mt-10 text-red-500">Unauthorized access. Please login again.</div>;
//   if (requests.length === 0) return <div className="text-center mt-10">You have not requested any foods.</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//       {requests.map((food) => (
//         <div key={food._id} className="bg-white shadow-md rounded-lg p-4">
//           <img src={food.foodImage} alt={food.foodName} className="w-full h-40 object-cover rounded mb-3" />
//           <h2 className="text-xl font-bold mb-1">{food.foodName}</h2>
//           <p><strong>Donor:</strong> {food.donorName || 'N/A'}</p>
//           <p><strong>Pickup:</strong> {food.pickupLocation}</p>
//           <p><strong>Expires:</strong> {new Date(food.expiredDateTime).toLocaleString()}</p>
//           <p><strong>Status:</strong> {food.foodStatus}</p>
//           <p><strong>Your Notes:</strong> {food?.requestedBy?.notes || 'N/A'}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyRequest;





import React, { useContext } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

const fetchMyRequests = async (email) => {
  const res = await axios.get(`https://my-assignment-11-server-three.vercel.app/myrequests?email=${email}`);
  return res.data;
};

const MyRequest = () => {
  const { user } = useContext(AuthContext);

  const {
    data: requests = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['myRequests', user?.email],
    enabled: !!user?.email, // Only fetch when email is available
    queryFn: () => fetchMyRequests(user.email),
  });

  if (isLoading) return <div className="text-center mt-10">Loading your requests...</div>;

  if (isError) {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      return <div className="text-center mt-10 text-red-500">Unauthorized access. Please login again.</div>;
    }
    return <div className="text-center mt-10 text-red-500">An error occurred: {error.message}</div>;
  }

  if (requests.length === 0) return <div className="text-center mt-10">You have not requested any foods.</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {requests.map((food) => (
        <div key={food._id} className="bg-white shadow-md rounded-lg p-4">
          <img src={food.foodImage} alt={food.foodName} className="w-full h-40 object-cover rounded mb-3" />
          <h2 className="text-xl font-bold mb-1">{food.foodName}</h2>
          <p><strong>Donor:</strong> {food.donorName || 'N/A'}</p>
          <p><strong>Pickup:</strong> {food.pickupLocation}</p>
          <p><strong>Expires:</strong> {new Date(food.expiredDateTime).toLocaleString()}</p>
          <p><strong>Status:</strong> {food.foodStatus}</p>
          <p><strong>Your Notes:</strong> {food?.requestedBy?.notes || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

export default MyRequest;







