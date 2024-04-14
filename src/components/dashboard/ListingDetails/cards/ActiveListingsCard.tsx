import React from "react";
import { useAgentListings } from "../../../../api/DomainComAu";
import { StyledCard } from "../../../ui/StyledCard";
import { Title } from "../../../ui/Title";
import { Skeleton } from "primereact/skeleton";

const ActiveListingsCard = () => {
  const { data: propertyData, isFetching } = useAgentListings();
  const propertyListings = propertyData || [];

  const activeListings = propertyListings.length || 0;
  return (
    <StyledCard title={<Title size="large">Listings</Title>}>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        {!isFetching ? (
          <label>{activeListings}</label>
        ) : (
          <Skeleton height="1.5rem" className=" max-w-16 my-1"></Skeleton>
        )}
      </div>
    </StyledCard>
  );
};

export default ActiveListingsCard;
