"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BlueHomeIcon, BlueProfileIcon, WierdHandIcon } from "~~/assets";
import { AppActionBtn } from "~~/components/layout/AppSubHeader";
import GeneralUILoader from "~~/components/ui/GeneralUILoader";
import { SalesOverview } from "./salesOverview";
import OverviewInsightCard from "./overviewInsights/OverviewInsightCard";
import ListingOverviewCard from "./overviewInsights/ListingOverviewCard";
import OverviewDetailCard from "./overviewInsights/OverviewDetailCard";

type TProps = {
  isLoading?: boolean;
  data?: {
    userName: string;
    userId: string;
  };
};
const DashboardContainer: React.FC<TProps> = ({ isLoading, data }) => {
  return (
    <GeneralUILoader isLoading={isLoading} noOfLines={40}>
      <div className="grid grid-cols-3 gap-6 py-4 ">
        <div className="col-span-3 row-span-1">
          <WelcomeMessage name="Ahmed" />
        </div>
        <div className="col-span-3 lg:col-span-2 row-span-2">
          <SalesOverview />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <OverviewInsightCard
            iconSrc={BlueHomeIcon}
            items={[
              { title: "Total", value: "0" },
              { title: "Available", value: "0" },
              { title: "Sold", value: "0" },
            ]}
            title="Property Overview"
            handleViewAll={() => {}}
          />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <OverviewInsightCard
            iconSrc={BlueProfileIcon}
            items={[
              { title: "Total", value: "0" },
              { title: "New", value: "0" },
              { title: "Active", value: "0" },
              { title: "Inactive", value: "0" },
            ]}
            title="Customers Overview"
            handleViewAll={() => {}}
          />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <ListingOverviewCard title="Listing Overview" />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <OverviewDetailCard
            handleViewAll={() => {}}
            title="₦ 0.00"
            subText="Total Outstanding Balance"
            items={[
              {
                name: "Outstanding Balance",
                value: "₦ 0.00",
                valueTextClassName: "text-[#FF6A6A]",
              },
            ]}
          />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <OverviewDetailCard
            title="₦ 0.00"
            subText="Total Sold"
            highlight="Top Selling"
          />
        </div>
      </div>
    </GeneralUILoader>
  );
};

const WelcomeMessage: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Image
          alt="hello"
          src={WierdHandIcon}
          width={40}
          height={40}
          className="rounded-full"
        />
        <h6 className="font-bold text-2xl">Hi {name}</h6>
      </div>
      <span className="">Welcome to your Dashboard</span>
    </div>
  );
};

export default DashboardContainer;
