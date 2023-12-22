import { useState } from "react";
import { AppActionBtn } from "~~/components/layout/AppSubHeader";
import SalesChart from "./SalesChart";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { GreenUpIcon, RedUpIcon } from "~~/assets";
import { MONTH_CHART_LABELS } from "~~/constants";

export const SalesOverview: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>("1 Week");
  const handleKey = (val: string) => setActiveKey(val);
  return (
    <Card className="h-full">
      <CardBody className="  py-4 flex flex-col gap-4 h-full ">
        <div className="justify-between flex">
          <div className="flex flex-col gap-2">
            <h6 className="text-2xl font-bold">Sales Overview</h6>
            <span className="text-slate-700 text-sm">
              Showing overview Jan 2022 - Sep 2022
            </span>{" "}
            {/* TODO: Make this a dynamic prop based on date range selected by calender */}
          </div>
          <button className="px-6 py-0.5 text-sm text-center rounded-md border text-slate-400">
            View Transactions
          </button>
        </div>
        <div className="flex gap-4 pb-2 border-b justify-end">
          {[{ name: "1 Week" }, { name: "1 Month" }, { name: "1 Year" }].map(
            (item, i) => (
              <AppActionBtn
                name={item.name}
                key={i}
                onClick={() => handleKey(item.name)}
                isActive={activeKey === item.name}
              />
            )
          )}
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="col-span-4 lg:col-span-2 row-span-2">
            <SalesChart
              data={{
                labels: MONTH_CHART_LABELS,
                values: Array(12)
                  .fill(0)
                  .map(() => Math.floor(Math.random() * 100)),
              }}
            />
          </div>
          {[
            {
              amount: { value: 0, textClassName: "text-[#4545FE]" },
              attribute: {
                name: "Balance",
                value: 100,
                change: "increment" as TInfoCardProps["attribute"]["change"],
              },
            },
            {
              amount: { value: 0, textClassName: "text-[#12D8A0]" },
              attribute: {
                name: "Deposit",
                value: 100,
                change: "increment" as TInfoCardProps["attribute"]["change"],
              },
            },
            {
              amount: { value: 0, textClassName: "text-[#CBCBCB]" },
              attribute: {
                name: "Purchase",
                value: 100,
                change: "increment" as TInfoCardProps["attribute"]["change"],
              },
            },
            {
              amount: { value: 0, textClassName: "text-[#FF6A6A]" },
              attribute: {
                name: "Withdrawal",
                value: 100,
                change: "decrement" as TInfoCardProps["attribute"]["change"],
              },
            },
          ].map((item, i) => (
            <div className="col-span-2 lg:col-span-1" key={i}>
              <InfoCard {...item} />
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

type TInfoCardProps = {
  amount: { value: number; textClassName: string };
  attribute: {
    name: string;
    value: number;
    change: "increment" | "decrement";
  };
};

const InfoCard: React.FC<TInfoCardProps> = ({ amount, attribute }) => {
  const { name, value, change } = attribute;
  //   TODO: Ensure card is responsive
  return (
    <Card className="w-full">
      <CardBody>
        <div className="flex flex-col gap-4">
          <Heading
            size="md"
            className={amount.textClassName ?? "text-[#4545FE]"}
          >
            ₦ {amount.value.toFixed(2)}
          </Heading>
          <div className="flex gap-3 items-center lg:text-sm text-xs font-semibold">
            <span className=" ">{name}</span>
            <div className="flex gap-0.5 items-center">
              {change === "increment" && (
                <Image src={GreenUpIcon} alt="up" width={15} height={15} />
              )}
              {change === "decrement" && (
                <Image src={RedUpIcon} alt="down" width={15} height={15} />
              )}
              <span className="font-light">{value}%</span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
