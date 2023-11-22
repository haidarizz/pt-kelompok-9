import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../image/logo.png";

const Navbar = () => {
  const location = useLocation();
  const isBerandaPage = location.pathname === "/";

  let Links = [
    { name: "BERANDA", link: "/" },
    { name: "BERITA", link: "/berita" },
    { name: "PROFIL", link: "/profil" },
    { name: "SATWA", link: "/satwa" },
    { name: "PETA", link: "/peta" },
    { name: "KONTAK KAMI", link: "/kontak" },
    { name: "PESAN TIKET", link: "/pesan" },
  ];

  const [selectedMenuItem, setSelectedMenuItem] = useState(
    isBerandaPage ? "BERANDA" : ""
  );
  const [selectedLanguage, setSelectedLanguage] = useState("ID");

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const handleMenuItemClick = (itemName) => {
    setSelectedMenuItem(itemName);
  };

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 h-[75px] z-50">
      <div className="flex  items-center gap-x-2 bg-white duration-200 ease-in-out px-2 h-full rounded-b-[16px]">
        <img src={logo} alt="Logo" className="h-[75px]" />

        {!isBerandaPage && (
          <div className="flex items-center gap-x-1 font-vollkorn">
            <span className="text-[16px] text-black py-[8px] ml-auto">
              PEMESANAN TIKET
            </span>
          </div>
        )}

        {isBerandaPage && (
          <div className="flex items-center gap-x-1 font-vollkorn">
            {/* Language choices */}
            <span
              onClick={() => handleLanguageClick("ID")}
              className={`cursor-pointer font-[16px] ${
                selectedLanguage === "ID"
                  ? "border-b-2 border-orange text-gray"
                  : "text-black border-b-[2px] border-white"
              }`}
            >
              ID
            </span>
            <span className="text-black font-[24px] border-b-[2px] border-white">
              |
            </span>
            <span
              onClick={() => handleLanguageClick("EN")}
              className={`cursor-pointer font-[16px] ${
                selectedLanguage === "EN"
                  ? "border-b-2 border-orange text-gray"
                  : "text-black border-b-[2px] border-white"
              }`}
            >
              EN
            </span>
          </div>
        )}

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute p-2 right-2 cursor-pointer h-full lg:hidden flex items-center"
        >
          {open ? (
            <GiHamburgerMenu style={{ fontSize: "24px" }} />
          ) : (
            <GiHamburgerMenu style={{ fontSize: "24px" }} />
          )}
        </div>

        <div
          className={`bg-back h-screen pt-[75px] px-[20px] text-white absolute z-[-1] top-[0px] w-1/2 lg:w-auto transition-all duration-500 ease-in ${
            open ? "left-0" : "-left-1/2"
          }`}
        >
          <ul>
            {Links.map((link) => (
              <li
                key={link.name}
                className={`lg:ml-6 text-[17px] my-[24px] ${
                  link.name === "PESAN TIKET"
                    ? "text-center text-[14px] bg-yellow text-black py-[8px]"
                    : selectedMenuItem === link.name
                    ? "text-gray hover:text-gray border-l-2 pl-2 border-orange lg:hover:border-b-brown"
                    : "text-white hover:text-brown border-l-2 border-back"
                }`}
              >
                <a
                  href={
                    selectedMenuItem === "BERANDA" ||
                    selectedMenuItem === "PESAN TIKET"
                      ? link.link
                      : null
                  }
                  onClick={() => handleMenuItemClick(link.name)}
                  className="font-vollkorn duration-200 ease-in"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
