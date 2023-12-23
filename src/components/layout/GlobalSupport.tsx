import Image from "next/image";
import React from "react";
import { BulbIcon, CloseIcon } from "~~/assets";

const GlobalSupport = () => {
  return (
    <button className="z-50 px-3 py-3 hover:bg-[#4d4dce] bg-[#4545FE] text-white gap-3 shadow-md flex items-center rounded-full justify-center fixed bottom-10 right-8">
      <Image alt="support" src={BulbIcon} height={20} width={20} />
      <span>Veerge Assistant</span>
      <Image alt="close" src={CloseIcon} height={20} width={20} />
    </button>
  );
};

export default GlobalSupport;
