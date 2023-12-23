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

type TItem = {
  title?: string;
  iconSrc?: string;
  name: string;
  value: string | number;
  valueTextClassName?: string;
};
type TProps = {
  title: string;
  handleViewAll?: () => void;
  items?: TItem[];
  subText: string;
  highlight?: string;
};
const OverviewDetailCard: React.FC<TProps> = ({
  items = [], //TODO: Use these items to display carousel items with state
  handleViewAll,
  title,
  subText,
  highlight,
}) => {
  const [selectedAttribute, setSelectedAttribute] = useState<TItem>();
  useEffect(() => {
    setSelectedAttribute(items[0]);
  }, [items]);
  return (
    <Card className="h-full">
      <CardBody className="flex flex-col gap-7">
        <div className="flex justify-between items-baseline">
          <div className="flex flex-col gap-2">
            <span className="text-[#12D8A0] font-semibold text-lg">
              {highlight}
            </span>
            <h6 className="text-3xl font-bold">{title}</h6>
            <span className="text-lg font-normal text-[#606060]">
              {subText}
            </span>
          </div>
          {handleViewAll && (
            <button className="text-base text-[#CBCBCB]">
              <span>View All</span>
              <ChevronRightIcon />
              {/* TODO: Use the right outlined icon */}
            </button>
          )}
        </div>
        <div className="flex-1 flex gap-4 items- h-full  w-full justify-stretch">
          <div className="w-5/12 mt-4">
            <ImageInfo image={selectedAttribute?.iconSrc} />
          </div>
          <div className="flex-1 h-full flex flex-col gap-4">
            <div className=" flex flex-col gap-16">
              <p className="capitalize font-bold text-2xl text-[#191919]">
                {selectedAttribute?.title ?? "None"}
              </p>
              <div className="flex flex-col gap-2">
                <span
                  className={`font-seminbold text-lg ${selectedAttribute?.valueTextClassName}`}
                >
                  {selectedAttribute?.value}
                </span>
                <span className="text-base font-normal text-[#606060]">
                  {selectedAttribute?.name}
                </span>
              </div>
            </div>
            {/* TODO: Add controls for count info */}
            <div className="flex-1 flex h-full ">
              <div className="self-end w-full flex justify-end gap-4 items-center">
                <span>1/5</span>
                <IconButton
                  aria-label="prev"
                  icon={<ChevronLeftIcon />}
                  isRound
                />
                <IconButton
                  aria-label="next"
                  icon={<ChevronRightIcon />}
                  isRound
                />
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const ImageInfo: React.FC<{
  image?: string;
  name?: string;
  borderClassName?: string;
}> = ({ image = NoneIcon, name = "None", borderClassName = "" }) => {
  return (
    <div
      className={`px-4 py-4 bg-[#f5f5f5] flex items-center justify-center rounded-md ${borderClassName}`}
    >
      <Image src={image} width={180} height={180} alt={name} />
    </div>
  );
};

export default OverviewDetailCard;
