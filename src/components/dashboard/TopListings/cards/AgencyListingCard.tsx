import React from "react";
import { useAgentListings } from "../../../../api/DomainComAu";
import { Property } from "../../../../services/domain-com-au/types";

interface AgencyListingCardProps {
  property: Property;
}

const AgencyListingCard: React.FC<AgencyListingCardProps> = ({ property }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg h-full">
      <img className="w-full aspect-[16/9]" src={property.media[0]?.url} alt="Property" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{property.headline}</div>
        <p className="text-gray-700 text-base line-clamp-6">
          {property.description}
        </p>
        <ul className="list-disc p-4">
          <li>Bedrooms: {property.bedrooms}</li>
          <li>Bathrooms: {property.bathrooms}</li>
          <li>Carspaces: {property.carspaces}</li>
          {property.priceDetails.canDisplayPrice && (
            <li>Price: {property.priceDetails.displayPrice}</li>
          )}
        </ul>
        <a
          href={property.seoUrl}
          target="_blank"
          className="inline-block bg-blue-500 text-white py-2 px-4 border border-blue-700 rounded hover:bg-blue-700"
        >
          View Details
        </a>
      </div>
      <div className="px-6 pt-4 pb-2 text-sm text-gray-600">
        Last updated: {property.dateUpdated}
      </div>
    </div>
  );
};

export default AgencyListingCard;
