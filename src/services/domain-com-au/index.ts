import { domainSandboxApi } from "../../common/domainSandboxApi";
import fs from "fs";
import { AgencyData, Property } from "./types";

interface RequestQueryParams {
  listingStatusFilter: string;
  pageNumber: number;
  pageSize: number;
}

class DomainComAuService {
  public async getAgencyListings(id: string, params?: RequestQueryParams) {
    // const response = await domainSandboxApi.get(`agencies/${id}/listings`, {
    //   params,
    // });
    // return response.data as Property[];
    const json = fs.readFileSync("src/data/agency-listings.json", "utf8");
    return JSON.parse(json) as Property[];
  }

  public async getAgencyProfile(id: string) {
    // Using a test agency endpoint
    // const response = await domainSandboxApi.post("agencies/_testAgency");
    // return response.data as AgencyData;
    const json = fs.readFileSync("src/data/agency.json", "utf8");
    return JSON.parse(json) as AgencyData;
  }
}
export default new DomainComAuService();
