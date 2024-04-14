import React from "react";
import { useAgency } from "../../../api/DomainComAu";
import { Skeleton } from "primereact/skeleton";

export const Topbar: React.FC = () => {
  const { data: agencyData, isFetching } = useAgency();
  const agency = agencyData;

  const logoUrl = agency?.profile.agencyBanner || "";
  return (
    <div className="w-full bg-white h-16 border-b px-6 flex items-center justify-center sticky">
      {!isFetching ? (
        <img src={logoUrl} alt="Agency Logo" className="h-8" />
      ) : (
        <Skeleton width="10rem" height="2rem" />
      )}
    </div>
  );
};
