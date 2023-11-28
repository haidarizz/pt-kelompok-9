import React from "react";
import koala from "../image/beruang.jpg";
import { FaWhatsappSquare } from "react-icons/fa";

const Etiket = () => {
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
  const day_3 = localStorage.getItem("day");
  const month_3 = localStorage.getItem("selectedMonth");
  const year_3 = localStorage.getItem("selectedYear");
  const ticketCount_3 = localStorage.getItem("ticketCount");
  const price_3 = localStorage.getItem("price");
  const totalPrice_3 = localStorage.getItem("totalPrice");
  const name_3 = localStorage.getItem("name");
  const nomerWA_3 = localStorage.getItem("nomerWA");
  const email_3 = localStorage.getItem("email");
  return (
    <div
      className="text-white w-full h-screen bg-black overflow-hidden"
      style={backgroundImageStyle}
    >
      <div style={overlayStyle}>
        <div className="flex flex-col h-full justify-between px-4 pt-[96px] pb-20">
          <div className="flex flex-col justify-center items-center gap-y-4">
            <div className="flex items-center justify-center bg-darkgreen w-[118px] py-2 font-vollkorn text-[16px] rounded-full">
              E-Ticket
            </div>
            <div className="flex flex-col justify-start w-full mx-4 mt-2">
              <div className="flex flex-row text-[16px] font-vollkorn text-black text-opacity-80">
                <div className="flex">
                  E-Ticket dikirimkan melalui WA dan E-Mail berikut:
                </div>
              </div>
              <div className="flex flex-row text-[16px] font-vollkorn text-black text-opacity-80">
                <div className="flex w-[120px]">Nomer WA</div>
                <div>: {nomerWA_3 ? nomerWA_3 : ""}</div>
              </div>
              <div className="flex flex-row text-[16px] font-vollkorn text-black text-opacity-80">
                <div className="flex w-[120px]">E-Mail</div>
                <div>: {email_3 ? email_3 : ""}</div>
              </div>
            </div>
            <div className="text-darkgreen font-bold text-[20px] font-vollkorn mt-3">
              E-Ticket belum muncul?
            </div>
            <div className="text-black text-opacity-80 text-[16px] font-vollkorn text-justify">
              Sampaikan melalui Whatsapp GLZ pada nomor +6281234512312 atau klik
              logo WA di bawah dengan menyebutkan kode booking Anda.
            </div>
            <div className="text-black text-opacity-80 text-[16px] font-bold font-vollkorn text-left">
              Kode booking : 1a2bc
            </div>
          </div>
          <a
            href="https://wa.me/6281234512312"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row justify-center items-center gap-x-2">
              <div className="flex items-center font-vollkorn text-black">
                Butuh bantuan?
              </div>
              <div className="flex items-center text-[24px] text-black">
                <FaWhatsappSquare />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Etiket;
