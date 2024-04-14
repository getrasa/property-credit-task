import React, { useMemo } from "react";
import { useAgentListings } from "../../../../api/DomainComAu";
import { StyledCard } from "../../../ui/StyledCard";
import { Skeleton } from "primereact/skeleton";
import { Title } from "../../../ui/Title";
import { extractListingPrice } from "../../../../utils/functions";

const AveragePriceCard = () => {
  const { data: propertyData, isFetching } = useAgentListings();
  const propertyListings = propertyData || [];

  const averagePrice = useMemo(() => {
    const prices = propertyListings.map((listing) =>
      extractListingPrice(listing)
    );
    const total = prices.reduce((acc, curr) => acc + curr, 0);
    return total / propertyListings.length;
  }, [propertyListings]);

  return (
    <StyledCard title={<Title size="medium">Average Listing Price</Title>}>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        {!isFetching ? (
          <label>${averagePrice.toFixed(2)}</label>
        ) : (
          <Skeleton height="1.5rem" className=" max-w-16 my-1" />
        )}
      </div>
    </StyledCard>
  );
};

export default AveragePriceCard;
