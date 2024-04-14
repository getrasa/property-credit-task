import React from "react";
import { Skeleton } from "primereact/skeleton";
import { StyledCard } from "../../../ui/StyledCard";
import { Title } from "../../../ui/Title";
import { useAgentListings } from "../../../../api/DomainComAu";
import { extractListingPrice } from "../../../../utils/functions";

export const HighestListingPriceCard: React.FC = () => {
  const { data: propertyData, isFetching } = useAgentListings();
  const propertyListings = propertyData || [];

  const highestPrice = propertyListings.reduce((acc, curr) => {
    const price = extractListingPrice(curr);
    return price > acc ? price : acc;
  }, 0);

  return (
    <StyledCard title={<Title size="large">Highest Listing Price</Title>}>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        {!isFetching ? (
          <label>${highestPrice}</label>
        ) : (
          <Skeleton height="1.5rem" className=" max-w-16 my-1"></Skeleton>
        )}
      </div>
    </StyledCard>
  );
};
