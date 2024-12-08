import React from "react";
import { useParams } from "react-router-dom";

// Data artikel
const articles = [
  {
    id: 1,
    title: "Lomba Cerdas Cermat Peringatan Hari Pendidikan Nasional",
    description:
      "Siswa-siswi SD kami berhasil meraih juara dalam lomba cerdas cermat tingkat kecamatan dalam rangka memperingati Hari Pendidikan Nasional.",
    content:
      "Dalam rangka memperingati Hari Pendidikan Nasional 2024, siswa-siswi SD kami berhasil meraih juara dalam lomba cerdas cermat tingkat kecamatan. Lomba ini diikuti oleh banyak sekolah dasar di sekitar daerah, dan menjadi ajang bagi siswa untuk menguji pengetahuan mereka dalam berbagai mata pelajaran. Tim kami yang terdiri dari enam siswa kelas 5 dan 6 menunjukkan kemampuan luar biasa dalam menjawab soal-soal yang cukup menantang. Keberhasilan ini membanggakan sekolah dan menjadi motivasi bagi siswa lainnya untuk terus belajar dan berprestasi.",
    thumbnail:
      "https://res.cloudinary.com/djljovvlq/image/upload/v1733673418/ismail-hasan-hdDljGwSnlc-unsplash_pphgbd.jpg",
  },
  {
    id: 2,
    title: "Festival Seni dan Budaya Anak SD",
    description:
      "Sekolah mengadakan Festival Seni dan Budaya untuk menampilkan bakat seni dan budaya tradisional siswa-siswi, seperti tari dan musik daerah.",
    content:
      "Pada tanggal 18 Juni 2024, sekolah mengadakan Festival Seni dan Budaya yang menampilkan bakat seni dan budaya tradisional siswa-siswi SD. Dalam acara ini, siswa dari berbagai kelas mempersembahkan tari-tarian tradisional, musik daerah, dan puisi dalam rangkaian acara yang meriah. Festival ini bertujuan untuk melestarikan budaya lokal sekaligus memberikan kesempatan kepada siswa untuk mengekspresikan diri melalui seni. Para orang tua dan guru turut hadir memberikan dukungan, menciptakan suasana penuh kebanggaan dan kebersamaan dalam melestarikan nilai-nilai budaya Indonesia.",
    thumbnail:
      "https://res.cloudinary.com/djljovvlq/image/upload/v1733673420/mufid-majnun-Ov7yezUNgvY-unsplash_tkimc3.jpg",
  },
];

const ArticlePage = () => {
  const { articleId } = useParams(); // Mengambil articleId dari URL
  const article = articles.find((art) => art.id === parseInt(articleId));

  if (!article) {
    return <div>Artikel tidak ditemukan.</div>;
  }

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-600 mb-6">
        {new Date().toLocaleDateString("id-ID")}
      </p>
      <div className="text-lg text-gray-800">{article.content}</div>
    </div>
  );
};

export default ArticlePage;
