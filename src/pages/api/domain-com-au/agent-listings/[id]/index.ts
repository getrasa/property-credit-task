import DomainComAuService from "../../../../../services/domain-com-au";
import { NextApiRequest, NextApiResponse } from "next";
import { Property } from "../../../../../services/domain-com-au/types";

interface RequestQueryParams {
  listingStatusFilter: string;
  pageNumber: number;
  pageSize: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property[] | { error: string }>
) {
  const id = typeof req.query.id === "string" ? req.query.id : undefined;

  try {
    const params: RequestQueryParams = {
      listingStatusFilter: req.query.listingStatusFilter as string,
      pageNumber: parseInt(req.query.pageNumber as string),
      pageSize: parseInt(req.query.pageSize as string),
    };

    if (!id) {
      throw new Error("Missing or invalid id");
    }

    let properties: Property[] = [];
    try {
      properties = await DomainComAuService.getAgencyListings(id, params);
    } catch (error) {
      console.log("ERROR!!!", error);
    }
    res.status(200).json(properties);
  } catch (error: unknown) {
    res.status(500).json({
      error:
        (error as { message?: string })?.message ||
        "An unexpected error occurred",
    });
  }
}
