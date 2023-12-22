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
          <Heading size="md">{title}</Heading>
        </div>
        {handleViewAll && (
          <button className="text-sm text-[#CBCBCB]">
            <span>View All</span>
            <ChevronRightIcon />
          </button>
        )}
      </CardHeader>
      <CardBody className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <h6 className="border-b pb-2">Most Viewed</h6>
          <CountInfo
            borderClassName="border border-[#12D8A0]"
            image={data?.mostViewed?.name}
            name={data?.mostViewed?.name}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="border-b pb-2">Most Shared</h6>
          <CountInfo
            borderClassName="border border-[#4545FE]"
            name={data?.mostShared?.name}
            image={data?.mostShared?.image}
          />
        </div>
        <div className="col-span-2 bg-[#F5F5F5] rounded-md px-4 py-2 flex items-center gap-4">
          <div className="flex-1">
            <CountInfo
              borderClassName="border border-[#FF9103]"
              name={data?.mostWatchListed?.name}
              highlight="Most Watchlisted"
              image={data?.mostWatchListed?.image}
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
        <Heading size="lg" className="flex justify-between">
          <span>{count}</span>
          <Image src={BookmarkIcon} alt="bookmark" height={20} width={20} />
        </Heading>
        <p>Number of watchlists</p>
      </CardBody>
    </Card>
  );
};
const CountInfo: React.FC<{
  image?: string;
  name?: string;
  borderClassName?: string;
  highlight?: string;
}> = ({ image = NoneIcon, name = "None", borderClassName = "", highlight }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-sm">{highlight}</p>
      <div className={`flex gap-4 `}>
        <div
          className={`px-4 py-4 flex items-center justify-center rounded-md ${borderClassName}`}
        >
          <Image src={image} width={56} height={56} alt={name} />
        </div>
        <p className="capitalize font-bold text-xl">{name}</p>
      </div>
    </div>
  );
};

export default ListingOverviewCard;
