"use client";

import { Input } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SearchIcon } from "~~/assets";

type TProps = {
  items: {
    name: string;
    iconSrc?: string;
    link: string;
  }[];
  allowSearch?: boolean;
};

const AppSubHeader: React.FC<TProps> = ({ items, allowSearch = true }) => {
  const pathname = usePathname();
  return (
    <div className="border-b flex w-full lg:flex-row flex-col justify-between items-center py-2 Container bg-white">
      <div className="flex gap-4 items-center flex-1">
        {items.map((item, i) => (
          <LinkBtn key={i} {...item} isActive={pathname === item.link} />
        ))}
      </div>
      {allowSearch ? <SearchBar /> : null}
    </div>
  );
};
type TLinkBtnProps = TProps["items"][0] & { isActive?: boolean };
const LinkBtn: React.FC<TLinkBtnProps> = ({
  name,
  iconSrc,
  isActive,
  link,
}) => {
  return (
    <Link href={link}>
      <AppActionBtn name={name} iconSrc={iconSrc} isActive={isActive} />
    </Link>
  );
};
export const AppActionBtn: React.FC<
  Pick<TLinkBtnProps, "iconSrc" | "isActive" | "name"> & {
    onClick?: () => void;
  }
> = ({ name, isActive, iconSrc, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-2  text-sm items-center px-3 py-3 rounded-md hover:bg-[#F5F5F5] hover:text-slate-600 hover:shadow-md ${
        isActive ? "bg-[#F5F5F5] shadow-sm font-bold" : ""
      }`}
    >
      {iconSrc ? (
        <Image src={iconSrc} alt={name} height={20} width={20} />
      ) : null}
      <span className="mb-0 leading-none capitalize">{name}</span>
    </button>
  );
};
const SearchBar = () => {
  return (
    <div className="bg-red-200w w-2/6 flex items-center justify-end">
      <Input placeholder="Search... properties, customers here" bg="#E4E4E4" />
      <button className="z-10 -ml-8 bg-[#E4E4E4]">
        <Image src={SearchIcon} alt="search" height={24} width={24} />
      </button>
    </div>
  );
};

export default AppSubHeader;
