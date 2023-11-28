import React, { useState, useEffect } from "react";
import koala from "../image/beruang.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Detail = () => {
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
  const day_2 = localStorage.getItem("day");
  const month_2 = localStorage.getItem("selectedMonth");
  const year_2 = localStorage.getItem("selectedYear");
  const ticketCount_2 = localStorage.getItem("ticketCount");
  const price_2 = localStorage.getItem("price");
  const totalPrice_2 = localStorage.getItem("totalPrice");
  const name_2 = localStorage.getItem("name");
  const nomerWA_2 = localStorage.getItem("nomerWA");
  const email_2 = localStorage.getItem("email");

  return (
    <div
      className="text-white w-full h-screen bg-black overflow-hidden"
      style={backgroundImageStyle}
    >
      <div style={overlayStyle}>
        <div className="flex flex-col h-full justify-between px-4 pt-[96px] pb-20">
          <div className="flex flex-col justify-center items-center gap-y-4">
            <div className="flex items-center justify-center bg-darkgreen w-[206px] py-2 font-vollkorn text-[16px] rounded-full">
              Rincian Pemesanan
            </div>
            <div className="flex flex-col justify-start w-full mx-4 mt-2">
              <div className="font-bold text-[16px] font-vollkorn text-black">
                Pemesan
              </div>
              <div className="flex flex-row text-[16px] font-vollkorn text-black">
                <div className="flex w-[120px]">Nama</div>
                <div>: {name_2 ? name_2 : ""}</div>
              </div>
              <div className="flex flex-row text-[16px] font-vollkorn text-black">
                <div className="flex w-[120px]">Nomer WA</div>
                <div>: {nomerWA_2 ? nomerWA_2 : ""}</div>
              </div>
              <div className="flex flex-row text-[16px] font-vollkorn text-black">
                <div className="flex w-[120px]">E-Mail</div>
                <div>: {email_2 ? email_2 : ""}</div>
              </div>
            </div>
            <div className="flex flex-col justify-start w-full mx-4 mt-2">
              <div className="font-bold text-[16px] font-vollkorn text-black">
                Detail Kunjungan
              </div>
              <div className="flex flex-row text-[16px] font-vollkorn text-black">
                <div className="flex w-[120px]">Tanggal</div>
                <div>: {day_2 ? day_2 : ""} {month_2 ? month_2 : ""} {year_2 ? year_2 : ""}</div>
              </div>
              <div className="flex flex-row text-[16px] font-vollkorn text-black">
                <div className="flex w-[120px]">Jam operasional</div>
                <div>: 08.00 - 16.00</div>
              </div>
            </div>
            <div className="flex flex-col justify-start w-full mx-4 mt-2">
              <div className="font-bold text-[16px] font-vollkorn text-black">
                Harga
              </div>
              <div className="flex flex-row text-[16px] font-vollkorn text-black">
                <div className="flex w-[120px]">Jumlah tiket</div>
                <div>: {ticketCount_2 ? ticketCount_2 : ""}</div>
              </div>
              <div className="flex flex-row text-[16px] font-vollkorn text-black">
                <div className="flex w-[120px]">Harga per tiket</div>
                <div>: Rp{price_2 ? price_2 : ""}.000</div>
              </div>
              <div className="flex flex-row text-[16px] font-vollkorn text-black">
                <div className="flex w-[120px]">Total harga</div>
                <div>: Rp{totalPrice_2 ? totalPrice_2 : ""}.000</div>
              </div>
              <div className="italic w-full text-[16px] font-vollkorn text-black text-opacity-70">*harga final, sudah termasuk pajak dan biaya lainnya</div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <a
              href="/identitas"
              className="flex flex-row items-center bg-darkgreen font-vollkorn h-[29px] pr-3 pl-1 gap-x-1 rounded-full"
            >
              <div className="text-orange2 font-extrabold text-[20px]">
                <IoIosArrowBack />
              </div>
              <p className="text-[16px]">Ke Identitas</p>
            </a>
            <a
              href="/pembayaran"
              className="flex flex-row items-center bg-darkgreen font-vollkorn h-[29px] pl-3 pr-1 gap-x-1 rounded-full"
            >
              <p className="text-[16px]">Bayar</p>
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

export default Detail;
