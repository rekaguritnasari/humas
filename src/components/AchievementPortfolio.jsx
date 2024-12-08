import React from "react";
import { Award } from "lucide-react";

const AchievementPortfolio = () => {
  const achievements = [
    {
      title: "Juara 1 Olimpiade Sains",
      category: "Akademik",
      year: "2023",
      image:
        "https://res.cloudinary.com/djljovvlq/image/upload/v1733673438/syahrul-alamsyah-wahid-Z1NnYaPD6Vk-unsplash_ovjw8t.jpg",
    },
    {
      title: "Juara 1 Membatik",
      category: "Seni",
      year: "2023",
      image:
        "https://res.cloudinary.com/djljovvlq/image/upload/v1733673423/ed-us-kleCw7s_t0s-unsplash_danx8r.jpg",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-48 object-cover"
            />
            <div className="bg-white p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  {achievement.category}
                </span>
                <span className="text-sm text-gray-600 font-medium">
                  {achievement.year}
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-800">
                {achievement.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementPortfolio;
