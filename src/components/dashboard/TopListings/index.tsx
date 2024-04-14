import React from "react";
import { useAgentListings } from "../../../api/DomainComAu";
import { Title } from "../../ui/Title";
import { Divider } from "../../ui/Divider";
import { Property } from "../../../services/domain-com-au/types";
import AgencyListingCard from "./cards/AgencyListingCard";
import { ProgressSpinner } from "primereact/progressspinner";

export interface TopListingsProps {}

export const TopListings: React.FC<TopListingsProps> = (props) => {
  const { data: propertyData, isFetching } = useAgentListings("30943");
  const propertyListings = propertyData || [];

  const extractPrice = (property: Property) => {
    const nonNumericOrDotRegex: RegExp = /[^0-9.]+/g;
    const price = property.priceDetails.displayPrice.replace(
      nonNumericOrDotRegex,
      ""
    );
    return parseFloat(price) || 0;
  };

  // Top 4 most expensive listings
  const mostExpensiveListings = propertyListings
    .sort((a, b) => extractPrice(b) - extractPrice(a))
    .slice(0, 4);

  return (
    <div>
      <Title size="large">Most Expensive Listings:</Title>
      <Divider />
      <div className="flex w-full gap-4 py-4">
        {isFetching && (
          <div className="w-full h-32 flex justify-center align-items">
            <ProgressSpinner className="w-14" />
          </div>
        )}
        {mostExpensiveListings.map((property, index) => (
          <div className="w-1/4">
            <AgencyListingCard property={property} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};
