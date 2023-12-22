"use client";

import { TriangleDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import {
  CalenderIcon,
  LightLogo,
  NotificationIcon,
  PlusIcon,
  UserIcon,
} from "~~/assets";
import { CalenderBtn } from "~~/modules/dashboard/scheduler/Scheduler";

const AppHeader = () => {
  // TODO: Make responsive
  return (
    <div className="border-b flex w-full  lg:flex-row flex-col justify-between items-center py-6 text-white bg-zinc-950 Container">
      <LogoSection />
      <div className="flex gap-6 items-center">
        {/* icon btns */}
        <div className="flex gap-4 items-center">
          <AddIconBtn />
          <CalenderBtn />
          <NotificationBtn />
        </div>
        {/* user profile menu */}
        <UserProfileMenu name={`Ahmed Ali`} />
      </div>
    </div>
  );
};
const UserProfileMenu: React.FC<{ src?: string; name: string }> = ({
  src,
  name,
}) => {
  return (
    <button className="flex gap-2 items-center">
      <Avatar
        src={src ?? UserIcon}
        height={10}
        width={10}
        className="bg-slate-400" //TODO: ensure bg matches design
      />
      <span className="text-sm">{name}</span>
      <TriangleDownIcon height={2} />
    </button>
  );
};
const NotificationBtn = () => {
  return (
    <button>
      <Image src={NotificationIcon} alt="schedule" height={24} width={24} />
    </button>
  );
};

const AddIconBtn = () => {
  return (
    <button>
      <Image src={PlusIcon} alt="add" height={24} width={24} />
    </button>
  );
};

const LogoSection = () => {
  // TODO: Deal with font configuration: Proxima Nova
  return (
    <div className="flex flex-col gap-1">
      <Image alt="logo" src={LightLogo} height={40} width={80} />
      <span className="text-sm font-proxima tracking-widest">
        For Mainstone
      </span>
    </div>
  );
};

export default AppHeader;
