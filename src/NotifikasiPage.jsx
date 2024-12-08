import React from "react";
import { Bell } from "lucide-react";

const NotifikasiPage = () => {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Notifikasi</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Pengumuman Penting
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Ada pengumuman baru yang perlu Anda ketahui
                </p>
                <span className="text-xs text-gray-500">2 jam yang lalu</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotifikasiPage;
