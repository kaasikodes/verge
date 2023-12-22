import { Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GeneralUILoader: React.FC<{
  isLoading?: boolean;
  children?: React.ReactNode;
  noOfLines?: number;
}> = ({ isLoading = false, children, noOfLines = 1 }) => {
  return (
    <>
      {isLoading ? (
        <SkeletonText
          mt="4"
          noOfLines={noOfLines}
          spacing="4"
          skeletonHeight="5"
          isLoaded={!isLoading}
        />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default GeneralUILoader;
