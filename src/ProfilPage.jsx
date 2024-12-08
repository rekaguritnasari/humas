import React from "react";
import { User, ChevronRight } from "lucide-react";

const ProfilPage = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Admin Sekolah
              </h2>
              <p className="text-gray-600">admin@sekolah.com</p>
            </div>
          </div>
          <div className="space-y-4">
            <button className="w-full p-3 text-left rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span className="font-medium">Edit Profil</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full p-3 text-left rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span className="font-medium">Pengaturan Notifikasi</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-full p-3 text-left rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span className="font-medium">Bantuan</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
