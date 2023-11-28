import React, { useState, useEffect } from "react";
import koala from "../image/beruang.jpg";
// import Table from "./Table";
// import { GiTavernSign } from "react-icons/gi";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Kalender = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${koala})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed", // Fixed background to prevent scrolling
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "rgba(255, 255, 255, 0.8)", // White color with 50% opacity
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

  // TABEL KALENDER

  const [selectedCell, setSelectedCell] = useState(null);
  const [day, setDay] = useState(0);
  const [price, setPrice] = useState(0);
  const numberOfRows = 5; // Update this to the actual number of rows in your table
  const numberOfColumns = 7; // Update this to the actual number of columns in your table
  //const cellWidth = `${100 / numberOfColumns}%`;
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateCellValue = (rowIndex, colIndex) => {
    // Define the pattern for each column
    const patterns = [
      [30, 31, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24, 25, 26],
      [27, 28, 29, 30, 1, 2, 3],
    ];

    // Calculate the cell value based on the row and column indices
    return patterns[rowIndex][colIndex];
  };

  const calculateCellPrice = (rowIndex, colIndex) => {
    // Define the pattern for each column
    const patterns = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 64, 63, 62, 52, 76, 82],
      [51, 62, 61, 61, 50, 75, 78],
      [50, 61, 61, 61, 0, 0, 0],
    ];

    // Calculate the cell value based on the row and column indices
    return patterns[rowIndex][colIndex];
  };

  const isCellSelected = (rowIndex, colIndex) => {
    // Calculate the cell value based on the row and column indices
    const cellValue = calculateCellValue(rowIndex, colIndex);

    // Check if the cell is selected and within the allowed range, excluding cell (1,1)
    return (
      selectedCell &&
      selectedCell.rowIndex === rowIndex &&
      selectedCell.colIndex === colIndex &&
      cellValue >= 14 &&
      cellValue <= 30 &&
      !(rowIndex === 0 && colIndex === 0) // Check if it's not in cell (1,1)
    );
  };

  const handleCellClick = (rowIndex, colIndex) => {
    // Calculate the cell value based on the row and column indices
    const cellValue = calculateCellValue(rowIndex, colIndex);
    // const priceValue = calculateCellPrice(rowIndex, colIndex);
    // Toggle selection only if the cell value is between 14 and 30 and not in cell (1,1)
    if (
      cellValue >= 14 &&
      cellValue <= 30 &&
      !(rowIndex === 0 && colIndex === 0) // Check if it's not in cell (1,1)
    ) {
      if (
        selectedCell &&
        selectedCell.rowIndex === rowIndex &&
        selectedCell.colIndex === colIndex
      ) {
        // If the clicked cell is already selected, unselect it
        setSelectedCell(null);
      } else {
        // Otherwise, select the new cell
        setSelectedCell({ rowIndex, colIndex });
        //console.log(selectedCell);
      }
    }
    // setDay(cellValue);
    // setPrice(priceValue);
    // console.log("day: ", day);
    // console.log("price: ", price);
  };

  useEffect(() => {
    if (
      selectedCell &&
      selectedCell.rowIndex !== null &&
      selectedCell.colIndex !== null
    ) {
      // console.log(selectedCell.rowIndex);
      const cellValue = calculateCellValue(
        selectedCell.rowIndex,
        selectedCell.colIndex
      );
      const priceValue = calculateCellPrice(
        selectedCell.rowIndex,
        selectedCell.colIndex
      );
      setDay(cellValue);
      setPrice(priceValue);
      //   console.log("day: ", day);
      //   console.log("price: ", price);
      // Add your additional logic here
    } else {
      setDay(0);
      setPrice(0);
    }
  }, [selectedCell]);

  useEffect(() => {
    console.log("day: ", day);
    console.log("price: ", price);
  }, [day, price]);

  //TICKETING

  const [ticketCount, setTicketCount] = useState(0);

  const decreaseTicket = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
    }
  };

  const increaseTicket = () => {
    setTicketCount(ticketCount + 1);
  };

  useEffect(() => {
    setTotalPrice(price * ticketCount);
  }, [ticketCount, price]);

  useEffect(() => {
    localStorage.setItem("day", day);
    localStorage.setItem("selectedMonth", selectedMonth);
    localStorage.setItem("selectedYear", selectedYear);
    localStorage.setItem("ticketCount", ticketCount);
    localStorage.setItem("price", price);
    localStorage.setItem("totalPrice", totalPrice);
  }, [day, selectedMonth, selectedYear, ticketCount, price, totalPrice]);

  return (
    <div
      className="text-white w-full h-screen bg-black overflow-hidden"
      style={backgroundImageStyle}
    >
      <div style={overlayStyle}>
        <div className="flex flex-row justify-between bg-darkgreen mx-4 rounded-full px-4 py-2 mt-[96px]">
          <div className="mr-2 font-vollkorn text-[16px] text-white font-bold">
            Bulan Kunjungan
          </div>
          <div className="flex gap-x-3">
            <select
              value={selectedMonth}
              onChange={handleMonthChange}
              className="font-vollkorn text-gray rounded-full text-[12px] px-1"
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
              className="font-vollkorn text-gray rounded-full text-[12px] px-1"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex bg-darkgreen mx-4 rounded-t-full py-1 justify-center mt-[18px] gap-x-4">
          <div className="items-center font-vollkorn text-[16px] text-white font-bold">
            {selectedMonth.toUpperCase()}
          </div>
          <div className="items-center font-vollkorn text-[16px] text-white font-bold">
            |
          </div>
          <div className="items-center font-vollkorn text-[16px] text-white font-bold">
            {selectedYear}
          </div>
        </div>
        <div className="grid grid-cols-7 mx-4 pt-2 pb-1">
          <div className="flex items-center justify-center font-vollkorn text-[12px] text-black font-bold w-full">
            MON
          </div>
          <div className="flex items-center justify-center font-vollkorn text-[12px] text-black font-bold w-full">
            TUE
          </div>
          <div className="flex items-center justify-center font-vollkorn text-[12px] text-black font-bold w-full">
            WED
          </div>
          <div className="flex items-center justify-center font-vollkorn text-[12px] text-black font-bold w-full">
            THU
          </div>
          <div className="flex items-center justify-center font-vollkorn text-[12px] text-black font-bold w-full">
            FRI
          </div>
          <div className="flex items-center justify-center font-vollkorn text-[12px] text-black font-bold w-full">
            SAT
          </div>
          <div className="flex items-center justify-center font-vollkorn text-[12px] text-red font-bold w-full">
            SUN
          </div>
        </div>

        <div className="w-full px-4">
          <table className="table-auto w-full">
            <colgroup>
              {Array.from({ length: numberOfColumns }).map((_, colIndex) => (
                <col key={colIndex} />
              ))}
            </colgroup>
            <tbody>
              {Array.from({ length: numberOfRows }, (_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: numberOfColumns }, (_, colIndex) => {
                    const cellValue = calculateCellValue(rowIndex, colIndex);
                    const priceValue = calculateCellPrice(rowIndex, colIndex);
                    return (
                      <td
                        key={colIndex}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                        className={`px-1 py-1 h-[50px] border border-gray ${
                          isCellSelected(rowIndex, colIndex)
                            ? "text-white bg-white bg-opacity-30 cursor-pointer"
                            : cellValue === 17 || cellValue === 20
                            ? "bg-lightgreen cursor-pointer text-black"
                            : cellValue === 27 || cellValue === 24
                            ? "bg-darkgreen cursor-pointer text-black"
                            : cellValue === 18 ||
                              cellValue === 25 ||
                              cellValue === 26
                            ? "bg-cream cursor-pointer text-black"
                            : cellValue === 19
                            ? "bg-lightbrown cursor-pointer text-black"
                            : cellValue >= 14 &&
                              cellValue <= 30 &&
                              !(rowIndex === 0 && colIndex === 0)
                            ? "cursor-pointer bg-lightcream text-black"
                            : "cursor-pointer text-gray"
                        }`}
                        style={{ width: `${100 / 7}%` }}
                      >
                        <div className="flex flex-col items-center">
                          <div
                            className={`text-[15px] font-vollkorn ${
                              isCellSelected(rowIndex, colIndex)
                                ? "bg-brown rounded-full px-1"
                                : ""
                            }`}
                          >
                            {cellValue}
                          </div>
                          {priceValue !== 0 && (
                            <div className="text-[9px] text-black font-vollkorn">
                              Rp{priceValue}.000
                            </div>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-row justify-start gap-x-1 mx-4 mt-3">
          <div className="flex items-center text-brown text-[14px]">
            <FaCircle />
          </div>
          <div className="flex items-center text-black text-[12px] font-vollkorn">
            = Tanggal terpilih
          </div>
        </div>

        <div className="flex flex-row justify-start gap-x-2 mx-4 mt-2">
          <div className="flex items-center text-black text-[12px] font-vollkorn">
            Harga terendah
          </div>
          <div className="flex flex-row justify-start gap-x-0 items-center">
            <div className="w-[14px] h-[14px] items-center justify-center rounded-l-full bg-darkgreen"></div>
            <div className="w-[14px] h-[14px] items-center justify-center bg-lightgreen"></div>
            <div className="w-[14px] h-[14px] items-center justify-center bg-lightcream"></div>
            <div className="w-[14px] h-[14px] items-center justify-center bg-cream"></div>
            <div className="w-[14px] h-[14px] items-center justify-center rounded-r-full bg-lightbrown"></div>
          </div>
          <div className="flex items-center text-black text-[12px] font-vollkorn">
            Harga tertinggi
          </div>
        </div>

        <div className="flex flex-row justify-between w-[195px] gap-x-1 px-3 py-2 rounded-full bg-darkgreen mx-4 mt-2">
          <div className="text-[16px] font-vollkorn text-white text-opacity-80">
            Jumlah tiket
          </div>
          <div className="text-[16px] font-vollkorn text-white text-opacity-80">
            :
          </div>
          <div className="flex flex-row bg-white w-[68px] rounded-full px-2 gap-x-2">
            <div className="flex items-center text-center text-orange2 w-[11px] text-[16px]">
              <button
                onClick={decreaseTicket}
                disabled={ticketCount === 0}
                className="w-full font-extrabold"
              >
                -
              </button>
            </div>
            <div className="flex items-center text-black text-[16px] font-vollkorn">
              {ticketCount}
            </div>
            <div className="flex items-center text-center text-orange2 w-[11px] text-[16px]">
              <button onClick={increaseTicket} className="w-full font-bold">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start mx-4 mt-2">
          <div className="font-bold text-[16px] font-vollkorn text-black">
            Rincian
          </div>
          <div className="flex flex-row text-[16px] font-vollkorn text-black">
            <div className="flex w-[110px]">Jumlah tiket</div>
            <div>: {ticketCount}</div>
          </div>
          <div className="flex flex-row text-[16px] font-vollkorn text-black">
            <div className="flex w-[110px]">Harga per tiket</div>
            <div>: Rp{price}.000</div>
          </div>
          <div className="flex flex-row text-[16px] font-vollkorn text-black">
            <div className="flex w-[110px]">Total harga</div>
            <div>: Rp{totalPrice}.000</div>
          </div>
        </div>
        <div className="flex flex-row justify-between mx-4 mt-2 mb-10">
          <div
            className={`font-vollkorn text-[12px] ${
              totalPrice !== 0 ? "text-orange2" : "text-black"
            } italic w-[162px]`}
          >
            *harga final, sudah termasuk pajak dan biaya lainnya
          </div>
          <div className="flex items-center">
            <a
              href="/identitas"
              className="flex flex-row items-center bg-darkgreen font-vollkorn h-[29px] pl-3 pr-1 gap-x-1 rounded-full"
            >
              <p className="text-[16px]">Simpan & Lanjut</p>
              <div className="text-orange2 font-extrabold text-[20px]">
                <IoIosArrowForward />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kalender;
