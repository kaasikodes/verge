import { ChevronRightIcon } from "@chakra-ui/icons";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type TProps = {
  iconSrc: string;
  title: string;
  handleViewAll?: () => void;
  items: { title: string; value: string }[];
};
const OverviewInsightCard: React.FC<TProps> = ({
  items,
  iconSrc,
  handleViewAll,
  title,
}) => {
  return (
    <Card>
      <CardHeader className="flex justify-between items-baseline">
        <div className="flex items-center gap-2">
          <Image
            alt={title}
            src={iconSrc}
            width={20}
            height={20}
            className="rounded-full"
          />
          <h6 className="font-bold text-lg">{title}</h6>
        </div>
        {handleViewAll && (
          <button className="text-sm text-[#CBCBCB]">
            <span>View All</span>
            <ChevronRightIcon />
            {/* TODO: Use the right outlined icon */}
          </button>
        )}
      </CardHeader>
      <CardBody className="flex gap-4 items-center w-full justify-stretch">
        {items.map((item, i) => (
          <Card key={i} border={`1px solid #E4E4E4`} className="flex-1">
            <CardBody className="flex flex-col gap-4 items-center text-center">
              <Heading size="lg">{item.value}</Heading>
              <p className={`text-slate-600`}>{item.title}</p>
            </CardBody>
          </Card>
        ))}
      </CardBody>
    </Card>
  );
};

export default OverviewInsightCard;
