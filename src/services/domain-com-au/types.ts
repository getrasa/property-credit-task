export interface Property {
  objective: string;
  propertyTypes: string[];
  status: string;
  saleMode: string;
  channel: string;
  addressParts: {
    stateAbbreviation: string;
    displayType: string;
    streetNumber: string;
    unitNumber: string;
    street: string;
    suburb: string;
    postcode: string;
    displayAddress: string;
  };
  advertiserIdentifiers: {
    advertiserType: string;
    advertiserId: number;
    contactIds: number[];
  };
  apmIdentifiers: {
    suburbId: number;
  };
  bathrooms: number;
  bedrooms: number;
  carspaces: number;
  dateAvailable: string;
  dateUpdated: string;
  description: string;
  geoLocation: {
    latitude: number;
    longitude: number;
  };
  headline: string;
  id: number;
  isNewDevelopment: boolean;
  media: {
    category: string;
    type: string;
    url: string;
  }[];
  priceDetails: {
    canDisplayPrice: boolean;
    displayPrice: string;
  };
  propertyId: string;
  rentalDetails: {
    rentalMethod: string;
    source: string;
    canDisplayPrice: boolean;
  };
  seoUrl: string;
  virtualTourUrl: string;
}

interface Agent {
  dateUpdated: string;
  agencyId: number;
  id: number;
  email: string;
  firstName: string;
  mobile: string;
  photo: string;
  lastName: string;
  isActiveProfilePage: string;
  phone: string;
  saleActive: boolean;
  rentalActive: boolean;
  isHideSoldLeasedListings: boolean;
  fax: string;
  contactTypeCode: number;
  receivesRequests: boolean;
  receiveScheduledReportEmail: boolean;
}

interface Profile {
  agencyPhotos: any[];
  profileWebsite: string;
  mapCertainty: number;
  numberForRent: number;
  numberForSale: number;
  agencyBanner: string;
}

interface Details {
  streetAddress1: string;
  suburb: string;
  state: string;
  postcode: string;
  showPastSalesPrices: boolean;
  isAgencyReportEnabled: boolean;
  isPromotionalTelephoneActive: boolean;
  hideMarketPriceEstimate: boolean;
  limitEmailDomain: boolean;
  showTabSoldLastYear: boolean;
}

interface ContactDetails {
  businessSale: any;
  businessRent: any;
  commercialLease: any;
  commercialSale: any;
  emailDomains: any[];
  general: any;
  residentialRent: any;
  residentialSale: any;
}

export interface AgencyData {
  accountType: string;
  profile: Profile;
  dateUpdated: string;
  name: string;
  details: Details;
  id: number;
  agents: Agent[];
  contactDetails: ContactDetails;
  homepassEnabled: boolean;
  subscribedToAgencyPerformanceReport: boolean;
}
