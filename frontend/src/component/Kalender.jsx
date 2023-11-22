import React, { useState } from "react";
import koala from "../image/koala.png";
import Table from "./Table";
import { GiTavernSign } from "react-icons/gi";

const Kalender = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${koala}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.4)", // White color with 50% opacity
  };
  const months = [
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

  const years = [2023, 2024];

  const [selectedMonth, setSelectedMonth] = useState("November");
  const [selectedYear, setSelectedYear] = useState(2023);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value, 10));
  };

  return (
    <div
      className="text-white w-full h-screen bg-black overflow-hidden"
      style={backgroundImageStyle}
    >
      <div style={overlayStyle}>
        <div className="flex flex-row justify-between bg-darkgreen mx-4 rounded-3xl px-4 py-2 mt-[96px]">
          <div className="mr-2 font-vollkorn text-[16px] text-white font-bold">
            Bulan Kunjungan
          </div>
          <div className="flex gap-x-3">
            <select
              value={selectedMonth}
              onChange={handleMonthChange}
              className="font-vollkorn text-gray rounded-xl text-[12px] px-1"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={handleYearChange}
              className="font-vollkorn text-gray rounded-xl text-[12px] px-1"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Kalender;
