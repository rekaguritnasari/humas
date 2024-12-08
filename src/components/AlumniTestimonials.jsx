import React from "react";
import { Heart } from "lucide-react";

const ParentTestimonials = () => {
  const testimonials = [
    {
      name: "Ibu Anisa Rahma",
      childInfo: "Orang Tua dari Fariz (Kelas 3)",
      role: "Ibu Rumah Tangga",
      quote:
        "Anak saya sangat senang bersekolah di sini. Guru-gurunya sangat perhatian dan sabar dalam membimbing anak-anak. Sistem pembelajaran yang menyenangkan membuat anak saya selalu bersemangat untuk belajar.",
      avatar:
        "https://res.cloudinary.com/djljovvlq/image/upload/v1733673419/alfian-dimas-K6A1yIV2dUU-unsplash_mnjs98.jpg",
    },
    {
      name: "Bapak Dedi Kurniawan",
      childInfo: "Orang Tua dari Putri (Kelas 5)",
      role: "Pengusaha",
      quote:
        "Selain akademik yang bagus, sekolah ini juga mengajarkan nilai-nilai karakter yang baik. Putri saya jadi lebih mandiri dan percaya diri. Fasilitas sekolah juga sangat mendukung kegiatan belajar.",
      avatar:
        "https://res.cloudinary.com/djljovvlq/image/upload/v1733674705/alfian-dimas-hSjAwYXaHow-unsplash_drfvqk.jpg",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-blue-50 border border-blue-100"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-200"
              />
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-blue-600 font-medium">
                  {testimonial.childInfo}
                </p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              "{testimonial.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentTestimonials;
