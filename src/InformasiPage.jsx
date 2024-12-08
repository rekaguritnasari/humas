import React from "react";
import { ChevronRight } from "lucide-react";

const InformasiPage = () => {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Pusat Informasi</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Information Categories */}
        {[
          "Akademik",
          "Ekstrakurikuler",
          "Fasilitas",
          "Prestasi",
          "Beasiswa",
          "Alumni",
        ].map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
          >
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
              {category}
            </h3>
            <p className="text-gray-600 mb-4">
              Informasi lengkap seputar {category.toLowerCase()} sekolah
            </p>
            <ChevronRight className="w-6 h-6 text-blue-600 transform group-hover:translate-x-2 transition-transform" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformasiPage;
