import { ChevronRightIcon } from "@chakra-ui/icons";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BookmarkIcon, NoneIcon } from "~~/assets";

type TPersonInfo = {
  name: string;

  image?: string;
};
type TProps = {
  title: string;
  handleViewAll?: () => void;
  data?: {
    mostViewed?: TPersonInfo;
    mostShared?: TPersonInfo;
    mostWatchListed?: TPersonInfo;
    noOfWatchLists: number;
  };
};
const ListingOverviewCard: React.FC<TProps> = ({
  data,
  handleViewAll,
  title,
}) => {
  return (
    <Card>
      <CardHeader className="flex justify-between items-baseline">
        <div className="flex items-center gap-2">
          <h6 className="text-2xl font-bold capitalize">{title}</h6>
        </div>
        {handleViewAll && (
          <button className="text-sm text-[#CBCBCB]">
            <span>View All</span>
            <ChevronRightIcon />
          </button>
        )}
      </CardHeader>
      <CardBody className="grid grid-cols-2 gap-12">
        <div className="flex flex-col ">
          <h6 className="border-b-2 pb-2 font-medium">Most Viewed</h6>
          <CountInfo
            borderClassName="border border-[#12D8A0]"
            image={data?.mostViewed?.name}
            name={data?.mostViewed?.name}
          />
        </div>
        <div className="flex flex-col">
          <h6 className="border-b-2 pb-2 font-medium">Most Shared</h6>
          <CountInfo
            borderClassName="border border-[#4545FE]"
            name={data?.mostShared?.name}
            image={data?.mostShared?.image}
          />
        </div>
        <div className="col-span-2 bg-[#F5F5F5] rounded-md px-4 py-3 flex items-center gap-5">
          <div className="">
            <CountInfo
              borderClassName="border border-[#FF9103]"
              name={data?.mostWatchListed?.name}
              highlight="Most Watchlisted"
              image={data?.mostWatchListed?.image}
              imageHeight={40}
              imageWidth={40}
            />
          </div>
          <div className="flex-1">
            <WatchlistCount count={data?.noOfWatchLists} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const WatchlistCount: React.FC<{ count?: number }> = ({ count = 0 }) => {
  return (
    <Card>
      <CardBody className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="text-4xl font-normal">{count}</span>
          <Image src={BookmarkIcon} alt="bookmark" height={25} width={25} />
        </div>
        <p className="text-sm text-[#3D3D3D] font-medium">
          Number of watchlists
        </p>
      </CardBody>
    </Card>
  );
};
const CountInfo: React.FC<{
  image?: string;
  name?: string;
  borderClassName?: string;
  highlight?: string;
  imageHeight?: number;
  imageWidth?: number;
}> = ({
  image = NoneIcon,
  name = "None",
  borderClassName = "",
  highlight,
  imageHeight = 56,
  imageWidth = 56,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium text-sm mb-2">{highlight}</p>
      <div className={`flex gap-4 `}>
        <div
          className={`px-4 py-4 flex items-center justify-center rounded-md ${borderClassName}`}
        >
          <Image
            src={image}
            width={imageWidth}
            height={imageHeight}
            alt={name}
          />
        </div>
        <p className="capitalize font-bold text-lg">{name}</p>
      </div>
    </div>
  );
};

export default ListingOverviewCard;
