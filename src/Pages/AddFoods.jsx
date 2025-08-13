


// import React, { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { AuthContext } from '../Provider/AuthProvider';

// const AddFoods = () => {
//   const { register, handleSubmit, reset } = useForm();
//   const { user } = useContext(AuthContext);

//   const onSubmit = async (data) => {
//     const foodData = {
//       foodName: data.foodName,
//       foodImage: data.foodImage,
//       foodQuantity: data.foodQuantity,
//       pickupLocation: data.pickupLocation,
//       expiredDateTime: data.expiredDateTime,
//       notes: data.notes,
//       donorImage: user?.photoURL,
//       donorName: user?.displayName,
//       donorEmail: user?.email,
//       foodStatus: 'available',
//     };

//     try {
//       const res = await axios.post('https://my-assignment-11-server-three.vercel.app/addfood', foodData);
//       if (res.data.insertedId) {
//         alert('Food added successfully!');
//         reset();
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Something went wrong.');
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-xl">
//       <h2 className="text-2xl font-bold mb-4 text-center">Add Food</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
//         <input {...register('foodName')} placeholder="Food Name" className="input input-bordered w-full" required />
//         <input {...register('foodImage')} placeholder="Food Image URL" className="input input-bordered w-full" required />
//         <input {...register('foodQuantity')} placeholder="Food Quantity" type="number" className="input input-bordered w-full" required />
//         <input {...register('pickupLocation')} placeholder="Pickup Location" className="input input-bordered w-full" required />
//         <input {...register('expiredDateTime')} type="datetime-local" className="input input-bordered w-full" required />
//         <textarea {...register('notes')} placeholder="Additional Notes" className="textarea textarea-bordered w-full" />

//         {/* Donor Info - Read Only */}
//         <div className="bg-gray-100 p-4 rounded">
//           <h3 className="font-semibold mb-2">Donor Info</h3>
//           <div className="flex items-center gap-4">
//             {user?.photoURL && (
//               <img src={user.photoURL} alt="Donor" className="w-12 h-12 rounded-full" />
//             )}
//             <div className="flex-1">
//               <input
//                 value={user?.displayName || ''}
//                 readOnly
//                 className="input input-bordered w-full mb-2"
//               />
//               <input
//                 value={user?.email || ''}
//                 readOnly
//                 className="input input-bordered w-full"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Food Status - Default 'available' */}
//         <input
//           value="available"
//           readOnly
//           className="input input-bordered w-full"
//         />

//         <button type="submit" className="btn bg-orange-500 text-white w-full">Add Food</button>
//       </form>
//     </div>
//   );
// };

// export default AddFoods;

import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddFoods = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const foodData = {
      foodName: data.foodName,
      foodImage: data.foodImage,
      foodQuantity: data.foodQuantity,
      pickupLocation: data.pickupLocation,
      expiredDateTime: data.expiredDateTime,
      notes: data.notes,
      donorImage: user?.photoURL,
      donorName: user?.displayName,
      donorEmail: user?.email,
      foodStatus: 'available',
    };

    try {
      const res = await axios.post('https://my-assignment-11-server-three.vercel.app/addfood', foodData);
      if (res.data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Food added successfully!',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        });
        reset();
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Close',
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-24 p-6 bg-white shadow-md rounded-xl ">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Food</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <input {...register('foodName')} placeholder="Food Name" className="input input-bordered w-full" required />
        <input {...register('foodImage')} placeholder="Food Image URL" className="input input-bordered w-full" required />
        <input {...register('foodQuantity')} placeholder="Food Quantity" type="number" className="input input-bordered w-full" required />
        <input {...register('pickupLocation')} placeholder="Pickup Location" className="input input-bordered w-full" required />
        <input {...register('expiredDateTime')} type="datetime-local" className="input input-bordered w-full" required />
        <textarea {...register('notes')} placeholder="Additional Notes" className="textarea textarea-bordered w-full" />

        {/* Donor Info - Read Only */}
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-2">Donor Info</h3>
          <div className="flex items-center gap-4">
            {user?.photoURL && (
              <img src={user.photoURL} alt="Donor" className="w-12 h-12 rounded-full" />
            )}
            <div className="flex-1">
              <input
                value={user?.displayName || ''}
                readOnly
                className="input input-bordered w-full mb-2"
              />
              <input
                value={user?.email || ''}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>

        {/* Food Status - Default 'available' */}
        <input
          value="available"
          readOnly
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn bg-orange-500 text-white w-full">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFoods;


