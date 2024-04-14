import DomainComAuService from "../../../../../services/domain-com-au";
import { NextApiRequest, NextApiResponse } from "next";
import {
  AgencyData,
  Property,
} from "../../../../../services/domain-com-au/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AgencyData | { error: string }>
) {
  const id = typeof req.query.id === "string" ? req.query.id : undefined;

  try {
    if (!id) {
      throw new Error("Missing or invalid id");
    }

    const properties = await DomainComAuService.getAgencyProfile(id);
    res.status(200).json(properties);
  } catch (error: unknown) {
    res.status(500).json({
      error:
        (error as { message?: string })?.message ||
        "An unexpected error occurred",
    });
  }
}
