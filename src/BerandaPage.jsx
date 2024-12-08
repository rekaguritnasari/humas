import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import AdvancedSearch from "./components/AdvancedSearch";
import {
  ChevronRight,
  ChevronLeft,
  ChevronRight as NextIcon,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

const generateCalendar = (date) => {
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysInMonth = endOfMonth.getDate();

  const calendar = [];
  let dayOfWeek = startOfMonth.getDay();
  let week = Array(dayOfWeek).fill(null);

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    calendar.push(week);
  }

  return calendar;
};

const importantDates = {
  // December 2024
  "2024-12": {
    10: { type: "school", title: "Ujian Akhir Semester Ganjil" },
    11: { type: "school", title: "Ujian Akhir Semester Ganjil" },
    12: { type: "school", title: "Ujian Akhir Semester Ganjil" },
    13: { type: "school", title: "Ujian Akhir Semester Ganjil" },
    15: { type: "school", title: "Pameran Seni & Budaya Sekolah" },
    20: { type: "school", title: "Pembagian Rapor Semester Ganjil" },
    21: { type: "school", title: "Awal Libur Semester Ganjil" },
    25: { type: "holiday", title: "Hari Natal" },
    31: { type: "holiday", title: "Malam Tahun Baru" },
  },
  // January 2025
  "2025-01": {
    1: { type: "holiday", title: "Tahun Baru 2025" },
    8: { type: "school", title: "Awal Semester Genap" },
    15: { type: "school", title: "Workshop Pengembangan Karakter" },
    20: { type: "school", title: "Pemilihan Ketua OSIS" },
    25: { type: "school", title: "Kompetisi Sains dan Matematika" },
    31: { type: "school", title: "Pekan Olahraga Sekolah" },
  },
  // February 2025
  "2025-02": {
    1: { type: "school", title: "Pekan Olahraga Sekolah" },
    8: { type: "school", title: "Perayaan Tahun Baru Imlek" },
    14: { type: "school", title: "Academic Fair" },
    15: { type: "holiday", title: "Tahun Baru Imlek 2576" },
    20: { type: "school", title: "Simulasi Ujian Nasional" },
    21: { type: "school", title: "Simulasi Ujian Nasional" },
    25: { type: "school", title: "Career Day & University Expo" },
    28: { type: "school", title: "Festival Budaya Sekolah" },
  },
};

const BerandaPage = () => {
  const slides = [
    {
      image:
        "https://res.cloudinary.com/djljovvlq/image/upload/v1733673007/image_26_eehjjj.png",
      title: "Sekolah Unggulan Terakreditasi A",
      description:
        "Mendidik generasi masa depan dengan fasilitas modern dan kurikulum terkini",
    },
    {
      image:
        "https://res.cloudinary.com/djljovvlq/image/upload/v1733673438/syahrul-alamsyah-wahid-Z1NnYaPD6Vk-unsplash_ovjw8t.jpg",
      title: "Prestasi Akademik dan Non-Akademik",
      description:
        "Mengembangkan bakat dan potensi siswa melalui berbagai program unggulan",
    },
    {
      image:
        "https://res.cloudinary.com/djljovvlq/image/upload/v1733673436/husniati-salma-ldkHWg5s3Ec-unsplash_eo5ngz.jpg",
      title: "Lingkungan Belajar yang Nyaman",
      description:
        "Menciptakan suasana belajar yang kondusif untuk perkembangan optimal siswa",
    },
  ];

  const newsItems = [
    {
      id: 1,
      title: "Lomba Cerdas Cermat Peringatan Hari Pendidikan Nasional",
      description:
        "Siswa-siswi SD kami berhasil meraih juara dalam lomba cerdas cermat tingkat kecamatan dalam rangka memperingati Hari Pendidikan Nasional.",
      date: new Date("2024-05-02"),
      thumbnail:
        "https://res.cloudinary.com/djljovvlq/image/upload/v1733673418/ismail-hasan-hdDljGwSnlc-unsplash_pphgbd.jpg", // Tambahkan thumbnail
    },
    {
      id: 2,
      title: "Festival Seni dan Budaya Anak SD",
      description:
        "Sekolah mengadakan Festival Seni dan Budaya untuk menampilkan bakat seni dan budaya tradisional siswa-siswi, seperti tari dan musik daerah.",
      date: new Date("2024-06-18"),
      thumbnail:
        "https://res.cloudinary.com/djljovvlq/image/upload/v1733673420/mufid-majnun-Ov7yezUNgvY-unsplash_tkimc3.jpg", // Tambahkan thumbnail
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendar, setCalendar] = useState(generateCalendar(currentDate));
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDate = new Date();
      setCurrentDate(newDate);
      setCalendar(generateCalendar(newDate));
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setCalendar(generateCalendar(new Date(currentYear, currentMonth)));
  }, [currentMonth, currentYear]);

  const currentDay = currentDate.getDate();

  const isPastDate = (day) => {
    if (!day) return false;
    const today = new Date();
    const dateToCheck = new Date(currentYear, currentMonth, day);
    return dateToCheck < today;
  };

  const getDateInfo = (day) => {
    if (!day) return null;
    const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}`;
    return importantDates[dateKey]?.[day];
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentYear, currentMonth + direction, 1);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());
  };

  const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

  // Fungsi untuk mendapatkan events bulan ini
  const getCurrentMonthEvents = () => {
    const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}`;
    const events = [];
    if (importantDates[dateKey]) {
      Object.entries(importantDates[dateKey]).forEach(([day, event]) => {
        events.push({
          date: new Date(currentYear, currentMonth, parseInt(day)),
          ...event,
        });
      });
    }
    return events.sort((a, b) => a.date - b.date);
  };

  const currentPageEvents = getCurrentMonthEvents().slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const totalPages = Math.ceil(getCurrentMonthEvents().length / itemsPerPage);

  // Fungsi untuk berpindah halaman
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="px-4 md:px-8 py-6">
      {/* Hero Carousel */}
      <div className="mb-8">
        <Carousel slides={slides} />
      </div>

      {/* Advanced Search */}
      <AdvancedSearch />

      {/* Content Grid without sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* News Cards */}
            {newsItems.map((news, index) => (
              <div
                key={news.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={news.thumbnail}
                    alt="News"
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {news.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {new Date().toLocaleDateString("id-ID")}
                    </span>
                    <Link
                      to={`/artikel/${news.id}`}
                      className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-700"
                    >
                      Selengkapnya
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Academic Calendar Section */}
      <div className="space-y-6 mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Calendar */}
          <div className="bg-blue-900 p-6 rounded-xl shadow-lg w-full md:w-2/3">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-white" />
                <h4 className="text-xl font-semibold text-white">
                  {monthNames[currentMonth]} {currentYear}
                </h4>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 sm:gap-4">
              {dayNames.map((day, index) => (
                <div
                  key={index}
                  className="text-center font-semibold text-white/90 text-xs sm:text-sm mb-2"
                >
                  {day}
                </div>
              ))}

              {calendar.map((week, weekIndex) => (
                <React.Fragment key={weekIndex}>
                  {week.map((day, dayIndex) => {
                    const dateInfo = getDateInfo(day);
                    return (
                      <div
                        key={dayIndex}
                        className={`
                          relative flex items-center justify-center p-2 sm:p-3 
                          text-xs sm:text-sm rounded-lg transition-all duration-200
                          ${!day ? "invisible" : ""}
                          ${
                            day === currentDay
                              ? "bg-white text-blue-600 font-bold shadow-md"
                              : dateInfo?.type === "holiday"
                              ? "bg-red-500/40 text-white hover:bg-red-500/50"
                              : dateInfo?.type === "school"
                              ? "bg-green-500/40 text-white hover:bg-green-500/50"
                              : isPastDate(day)
                              ? "bg-white/10 text-white/50"
                              : "bg-white/20 text-white hover:bg-white/30"
                          }
                        `}
                        title={dateInfo?.title || ""}
                      >
                        <span className={isPastDate(day) ? "relative" : ""}>
                          {day}
                          {isPastDate(day) && (
                            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500 transform -rotate-45" />
                          )}
                        </span>
                        {dateInfo && (
                          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Important Events */}
          <div className="bg-white p-6 rounded-xl shadow-lg w-full md:w-1/3">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Kegiatan Penting - {monthNames[currentMonth]} {currentYear}
            </h4>
            <ul className="space-y-4">
              {currentPageEvents.map((event, index) => (
                <li
                  key={index}
                  className={`
                p-3 rounded-lg transition-colors
                ${
                  event.type === "holiday"
                    ? "bg-red-50 hover:bg-red-100"
                    : "bg-green-50 hover:bg-green-100"
                }
              `}
                >
                  <span
                    className={`font-semibold block mb-1 ${
                      event.type === "holiday"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {event.date.toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                    })}
                  </span>
                  <span className="text-sm text-gray-600">{event.title}</span>
                  <span
                    className={`
                  text-xs px-2 py-1 rounded-full ml-2
                  ${
                    event.type === "holiday"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }
                `}
                  >
                    {event.type === "holiday" ? "Libur" : "Kegiatan Sekolah"}
                  </span>
                </li>
              ))}
            </ul>
            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-blue-300"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600">
                Halaman {currentPage + 1} dari {totalPages}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-blue-300"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BerandaPage;
