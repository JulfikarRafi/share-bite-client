import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Creative Ways to Reduce Food Waste at Home",
      description:
        "Every year, millions of tons of perfectly good food end up in the trash — much of it from our own kitchens. In this article, we share five simple yet powerful strategies to make your food go further. From transforming leftovers into gourmet dishes, to proper storage techniques that extend shelf life, these tips will not only save you money but also help fight climate change. Learn how small changes in your daily habits can make a big impact for both your wallet and the planet.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "How Restaurants Can Share Surplus Food",
      description:
        "Across the globe, restaurants close each night with trays of unsold meals — many of which are still fresh and safe to eat. Sadly, most of this surplus ends up as waste. ShareBite’s restaurant partners are proving there’s a better way. In this blog, we explore how eateries are donating extra meals to local shelters and food banks, connecting with hungry communities while reducing landfill waste. We also cover practical steps for restaurants to join the movement and the legal protections that make food donations safer than ever.",
      img: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "The Environmental Impact of Food Waste",
      description:
        "When we throw away food, we’re not just wasting the food itself — we’re wasting all the resources that went into producing it: the water, energy, land, labor, and fuel. Worse, rotting food in landfills produces methane, a greenhouse gas far more potent than carbon dioxide. This article dives deep into the science and statistics behind food waste’s environmental toll, and explains how initiatives like ShareBite are tackling the problem from farm to table. By the end, you’ll see why saving food is one of the most powerful ways to save the planet.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="bg-orange-100 py-10 px-4 mt-24 h-[800px]">
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
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
