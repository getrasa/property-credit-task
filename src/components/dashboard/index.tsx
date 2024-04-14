import React from "react";
import { AboutAgency } from "./AboutAgency";
import { ListingDetails } from "./ListingDetails";
import { TopListings } from "./TopListings";

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <AboutAgency />
      <ListingDetails />
      <TopListings />
    </div>
  );
};

export default Dashboard;
