import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Creative Ways to Reduce Food Waste at Home",
      description:
        "Learn how to turn leftovers into delicious meals and make your kitchen eco-friendly while saving money.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "How Restaurants Can Share Surplus Food",
      description:
        "Discover how local restaurants are donating unsold food to charities through ShareBite’s initiative.",
      img: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "The Environmental Impact of Food Waste",
      description:
        "Understand how reducing food waste can help fight climate change and protect our planet for future generations.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="bg-orange-100 py-10 px-4 mt-24">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Latest From Our Blog
        </h2>
        <p className="text-gray-600 mt-2">
          Stay inspired with tips and stories on reducing food waste.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm">{blog.description}</p>
              <button className="mt-4 inline-block px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-lg transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
