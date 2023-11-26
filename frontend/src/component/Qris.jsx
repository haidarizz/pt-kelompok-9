import React, { useState, useEffect } from "react";
import koala from "../image/koala.png";
import qris from "../image/qris.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaWhatsappSquare, FaDownload } from "react-icons/fa";

const Qris = () => {
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
    background: "rgba(255, 255, 255, 0.7)", // White color with 50% opacity
  };

  //TIMER
  const [timer, setTimer] = useState(900); // 15 minutes in seconds

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qris; // Set the image URL
    link.download = "qris.png"; // Set the desired filename
    link.click();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(intervalId);
        // Timer has reached 0, you can perform any action here
        //alert("Timer has expired!");
      }
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [timer]);

  // Calculate minutes and seconds
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  return (
    <div
      className="text-white w-full h-screen bg-black overflow-hidden"
      style={backgroundImageStyle}
    >
      <div style={overlayStyle}>
        <div className="flex flex-col h-full justify-between px-4 pt-[96px] pb-10">
          <div className="flex flex-col justify-center items-center gap-y-3">
            <div className="flex items-center justify-between bg-darkgreen w-[320px] px-4 py-2 font-vollkorn text-[16px] rounded-full">
              <div>Selesaikan pembayaran dalam</div>
              <div className="flex items-center justify-center text-black bg-white w-[24px] rounded-full">
                {minutes}
              </div>
              <div>:</div>
              <div className="flex items-center justify-center text-black bg-white w-[24px] rounded-full">
                {seconds}
              </div>
            </div>
            <div className="font-vollkorn text-black text-[16px]">
              Kode booking: 1a2bc
            </div>
            <div>
              <img
                src={qris}
                alt="QRIS Image"
                style={{ maxHeight: "380px", width: "auto" }}
              />
            </div>
            <div className="flex flex-row justify-between gap-x-8 font-vollkorn text-black text-[16px] mt-2">
              <a
                href="https://wa.me/6281234512312"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-row justify-between gap-x-2">
                  <div className="flex items-center justify-center">
                    Bantuan
                  </div>
                  <div className="flex items-center text-[24px]">
                    <FaWhatsappSquare />
                  </div>
                </div>
              </a>
              <div
                className="flex flex-row justify-between gap-x-2"
                onClick={handleDownload}
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center justify-center">Unduh</div>
                <div className="flex items-center text-[22px]">
                  <FaDownload />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <a
              href="/rincian"
              className="flex flex-row items-center bg-darkgreen font-vollkorn h-[29px] pr-3 pl-1 gap-x-1 rounded-full"
            >
              <div className="text-orange2 font-extrabold text-[20px]">
                <IoIosArrowBack />
              </div>
              <p className="text-[16px]">Ke Rincian</p>
            </a>
            <a
              href="/final"
              className="flex flex-row items-center bg-darkgreen font-vollkorn h-[29px] pl-3 pr-1 gap-x-1 rounded-full"
            >
              <p className="text-[16px]">Sudah bayar</p>
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

export default Qris;
