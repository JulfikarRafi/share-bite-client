import React from 'react';

const TopDonators = () => {
  // Dummy data (can be fetched from backend later)
  const topDonators = [
    {
      name: 'Rafi Ahmed',
      email: 'rafi@example.com',
      totalFoods: 12,
      avatar: 'https://i.pravatar.cc/150?img=11',
    },
    {
      name: 'Nadia Rahman',
      email: 'nadia@example.com',
      totalFoods: 9,
      avatar: 'https://i.pravatar.cc/150?img=14',
    },
    {
      name: 'Shakil Khan',
      email: 'shakil@example.com',
      totalFoods: 7,
      avatar: 'https://i.pravatar.cc/150?img=17',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 py-10 px-4 md:px-8 rounded-xl shadow-md my-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-orange-600 mb-6">
        🌟 Top Donators of the Week
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {topDonators.map((donator, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 text-center transition hover:shadow-xl"
          >
            <img
              src={donator.avatar}
              alt={donator.name}
              className="w-20 h-20 mx-auto rounded-full border-4 border-orange-300 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">{donator.name}</h3>
            <p className="text-sm text-gray-500">{donator.email}</p>
            <p className="mt-2 text-orange-600 font-bold text-xl">
              {donator.totalFoods} Foods Donated
            </p>
            {index === 0 && (
              <span className="mt-2 inline-block bg-yellow-300 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full">
                🏆 Champion
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDonators;
