import React from "react";
import ActiveListingsCard from "./cards/ActiveListingsCard";
import AveragePriceCard from "./cards/AveragePriceCard";
import { HighestListingPriceCard } from "./cards/HighestListingPriceCard";

export const ListingDetails: React.FC = () => {
  return (
    <div className="flex w-full gap-8">
      <div className="w-1/3">
        <ActiveListingsCard />
      </div>
      <div className="w-1/3">
        <AveragePriceCard />
      </div>
      <div className="w-1/3">
        <HighestListingPriceCard />
      </div>
    </div>
  );
};
