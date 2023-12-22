import Image from "next/image";
import React from "react";
import { BulbIcon, CloseIcon } from "~~/assets";

const GlobalSupport = () => {
  return (
    <button className="z-50 px-4 py-4 bg-[#4545FE] text-white gap-4  flex items-center rounded-full justify-center fixed bottom-10 right-8">
      <Image alt="support" src={BulbIcon} height={24} width={24} />
      <span>Veerge Assistant</span>
      <Image alt="close" src={CloseIcon} height={24} width={24} />
    </button>
  );
};

export default GlobalSupport;
