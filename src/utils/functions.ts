import { Property } from "../services/domain-com-au/types";

export const extractListingPrice = (property: Property) => {
  const nonNumericOrDotRegex: RegExp = /[^0-9.]+/g;
  const price = property.priceDetails.displayPrice.replace(
    nonNumericOrDotRegex,
    ""
  );
  return parseFloat(price) || 0;
};
