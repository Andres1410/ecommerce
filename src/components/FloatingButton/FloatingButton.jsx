import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  const handleClick = () => {
    window.open("https://wa.link/exagc0", "_blank");
  };

  return (
    <div
      className="fixed bottom-5 right-5 bg-[#16f929] rounded-full w-9 h-9 flex items-center 
			justify-center cursor-grab z-20 "
      onClick={handleClick}>
      <FaWhatsapp size={50} color="#ffffff" />
    </div>
  );
};

export default FloatingButton;
