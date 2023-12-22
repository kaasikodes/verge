import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { title } from "process";
import React, { useEffect, useState } from "react";
import { NoneIcon } from "~~/assets";
type TProps = {
  iconSrc?: string;
  title: string;
  handleViewAll?: () => void;
  items?: {
    name: string;
    value: string | number;
    valueTextClassName?: string;
  }[];
  subText: string;
  highlight?: string;
};
const OverviewDetailCard: React.FC<TProps> = ({
  items = [], //TODO: Use these items to display carousel items with state
  iconSrc,
  handleViewAll,
  title,
  subText,
  highlight,
}) => {
  const [selectedAttribute, setSelectedAttribute] = useState<{
    name: string;
    value: string | number;
    valueTextClassName?: string;
  }>();
  useEffect(() => {
    setSelectedAttribute(items[0]);
  }, [items]);
  return (
    <Card className="h-full">
      <CardHeader className="flex justify-between items-baseline">
        <div className="flex flex-col gap-2">
          <span className="text-[#12D8A0] font-semibold text-lg">
            {highlight}
          </span>
          <h6 className="text-4xl font-bold">{title}</h6>
          <span className="text-xl font-normal text-[#606060]">{subText}</span>
        </div>
        {handleViewAll && (
          <button className="text-lg text-[#CBCBCB]">
            <span>View All</span>
            <ChevronRightIcon />
            {/* TODO: Use the right outlined icon */}
          </button>
        )}
      </CardHeader>
      <CardBody className="flex gap-4 items-center w-full justify-stretch">
        <CountInfo image={iconSrc} attribute={selectedAttribute} />
        {/* TODO: Add controls for count info */}
        <div className="mt-auto flex justify-end gap-4 items-center">
          <span>1/5</span>
          <IconButton aria-label="prev" icon={<ChevronLeftIcon />} />
          <IconButton aria-label="next" icon={<ChevronRightIcon />} />
        </div>
      </CardBody>
    </Card>
  );
};

const CountInfo: React.FC<{
  image?: string;
  name?: string;
  borderClassName?: string;
  highlight?: string;
  attribute?: {
    name: string;
    value: string | number;
    valueTextClassName?: string;
  };
}> = ({
  image = NoneIcon,
  name = "None",
  borderClassName = "",
  highlight,
  attribute,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-sm">{highlight}</p>
      <div className={`flex gap-4 `}>
        <div
          className={`px-4 py-4 bg-[#f5f5f5] flex items-center justify-center rounded-md ${borderClassName}`}
        >
          <Image src={image} width={180} height={180} alt={name} />
        </div>
        <div className="flex flex-col gap-4">
          <p className="capitalize font-bold text-2xl">{name}</p>
          <div className="flex flex-col gap-2">
            <span className={`font-bold ${attribute?.valueTextClassName}`}>
              {attribute?.value}
            </span>
            <span className=" font-bold">{attribute?.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewDetailCard;
