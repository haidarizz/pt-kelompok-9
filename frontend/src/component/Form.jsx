import React, { useState, useEffect } from "react";
import koala from "../image/koala.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
//import { useEffect } from "react";

const Form = () => {
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
  const [name, setName] = useState("");
  const [nomerWA, setNomerWA] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // console.log("name: ", name);
    // console.log("wa: ", nomerWA);
    // console.log("email: ", email);
    localStorage.setItem("name", name);
    localStorage.setItem("nomerWA", nomerWA);
    localStorage.setItem("email", email);
  }, [name, nomerWA, email]);

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    // Check if all required fields are not null
    const allFieldsFilled = name !== "" && nomerWA !== "" && email !== "";
    setIsButtonEnabled(allFieldsFilled);
  }, [name, nomerWA, email]);

  return (
    <div
      className="text-white w-full h-screen bg-black overflow-hidden"
      style={backgroundImageStyle}
    >
      <div style={overlayStyle}>
        <div className="flex flex-col h-full justify-between px-4 pt-[96px] pb-10">
          <div className="flex flex-col justify-center items-center gap-y-4">
            <div className="flex items-center justify-center bg-darkgreen w-[206px] py-2 font-vollkorn text-[16px] rounded-full">
              Identitas Pemesan
            </div>
            <div className="flex flex-col justify-start w-full gap-y-3 mt-4">
              <div className="flex flex-row text-[16px] items-center font-vollkorn text-black">
                <div className="flex w-[122px]">
                  Nama Pemesan
                  <span className="text-red">*</span>
                </div>
                <div className="flex mx-2">:</div>
                <div className="flex flex-grow">
                  <input
                    type="text"
                    id="inputName"
                    name="inputName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-2 py-1 font-vollkorn text-[16px] rounded-full w-full bg-orange2 bg-opacity-30"
                  />
                </div>
              </div>
              <div className="flex flex-row text-[16px] items-center font-vollkorn text-black">
                <div className="flex w-[122px]">
                  Nomer WA<span className="text-red">*</span>
                </div>
                <div className="flex mx-2">:</div>
                <div className="flex flex-grow">
                  {/* // <div className="pl-2 py-1 font-vollkorn text-[16px] rounded-l-full w-[10%] bg-orange2 bg-opacity-30">62</div> */}
                  <input
                    type="text"
                    id="inputNomer"
                    name="inputNomer"
                    value={nomerWA}
                    onChange={(e) => setNomerWA(e.target.value)}
                    className="px-2 py-1 font-vollkorn text-[16px] rounded-full w-full bg-orange2 bg-opacity-30"
                  />
                </div>
              </div>
              <div className="flex flex-row text-[16px] items-center font-vollkorn text-black">
                <div className="flex w-[122px]">
                  E-Mail<span className="text-red">*</span>
                </div>
                <div className="flex mx-2">:</div>
                <div className="flex flex-grow">
                  <input
                    type="text"
                    id="inputEmail"
                    name="inputEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-2 py-1 font-vollkorn text-[16px] rounded-full w-full bg-orange2 bg-opacity-30"
                  />
                </div>
              </div>
            </div>
            <div className="font-vollkorn text-[16px] italic text-black text-opacity-80">
              <span className="text-red">*</span>Wajib diisi salah satu atau
              keduanya dan pastikan data benar karena untuk mengirimkan E-Ticket
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <a
              href="/pesan"
              className="flex flex-row items-center bg-darkgreen font-vollkorn h-[29px] pr-3 pl-1 gap-x-1 rounded-full"
            >
              <div className="text-orange2 font-extrabold text-[20px]">
                <IoIosArrowBack />
              </div>
              <p className="text-[16px]">Ke pilih tanggal</p>
            </a>
            <a
              href={`${isButtonEnabled ? "/rincian" : "/identitas"}`}
              className={`flex flex-row items-center bg-darkgreen font-vollkorn h-[29px] pl-3 pr-1 gap-x-1 rounded-full ${
                isButtonEnabled ? "" : "bg-opacity-50"
              }`}
              disabled={!isButtonEnabled}
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

export default Form;
