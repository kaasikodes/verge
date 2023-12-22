import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import { LineChart } from "~~/components/charts";
import GeneralUILoader from "~~/components/ui/GeneralUILoader";
import { MONTH_CHART_LABELS } from "~~/constants";

type TProps = {
  handleNext?: () => void;
  handlePrev?: () => void;
  data?: { labels: string[]; values: number[] };
  isLoading?: boolean;
};
const SalesChart: React.FC<TProps> = ({
  isLoading,
  data = { labels: [], values: [] },
}) => {
  return (
    <GeneralUILoader isLoading={isLoading}>
      <div className="flex justify-stretch gap-4 h-full items-center w-full">
        <IconButton
          // TODO: Make this round to reflect as in design
          size="sm"
          aria-label="previous"
          icon={<ChevronLeftIcon />}
        />
        <div
          className={
            "flex-1 bg-transparent " +
            "shadow-[inset_-3px_0px_12px_0px_#00000024]"
          }
        >
          {/* TODO: Ensure that the y is to right as per design or remove y axis */}
          {/* TODO: Make line chart appearance be a curvature */}
          <LineChart
            maintainAspectRatio={false}
            data={data.values}
            labels={data.labels}
          />
        </div>
        <IconButton size="sm" aria-label="next" icon={<ChevronRightIcon />} />
      </div>
    </GeneralUILoader>
  );
};

export default SalesChart;
