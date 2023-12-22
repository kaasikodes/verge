import Image from "next/image";
import React from "react";
import { LockIcon } from "~~/assets";

const AppFooter = () => {
  return (
    <footer className="w-full flex gap-4 justify-center items-center py-6">
      <Image alt="encryption" src={LockIcon} height={24} width={24} />
      <span>End-to-end encryption</span>
    </footer>
  );
};

export default AppFooter;
