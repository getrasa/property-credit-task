import React from "react";
import { Divider } from "../../ui/Divider";
import { Skeleton } from "primereact/skeleton";
import { StyledCard } from "../../ui/StyledCard";
import { Title } from "../../ui/Title";
import { useAgency } from "../../../api/DomainComAu";

export interface AboutAgencyProps {}

export const AboutAgency: React.FC<AboutAgencyProps> = (props) => {
  const { data: agencyData, isFetching } = useAgency();
  const agency = agencyData;

  const agentCount = agency?.agents.length || 0;
  const forRentCount = agency?.profile?.numberForRent || 0;
  const forSaleCount = agency?.profile?.numberForSale || 0;

  const showValueIfNotFetching = (text: string) => {
    if (!isFetching) {
      return <p>{text}</p>;
    }

    return <Skeleton height="1rem" className=" max-w-16 my-1"></Skeleton>;
  };

  return (
    <StyledCard
      title={<Title size="large">Hello {!isFetching ? agency?.name : '...'}</Title>}
      titleDivider
    >
      <div className="flex w-full gap-4 pt-4">
        <div className="w-1/3">
          <Title size="small">Agents:</Title>
          {showValueIfNotFetching(agentCount.toString())}
        </div>
        <Divider orientation="vertical" />
        <div className="w-1/3">
          <Title size="small">For Rent:</Title>
          {showValueIfNotFetching(forRentCount.toString())}
        </div>
        <Divider orientation="vertical" />
        <div className="w-1/3">
          <Title size="small">For Sale:</Title>
          {showValueIfNotFetching(forSaleCount.toString())}
        </div>
      </div>
    </StyledCard>
  );
};
