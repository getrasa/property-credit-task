import useCache from "../tools/cache/useCache";
import { backendApi } from "../common/api";
import { AgencyData, Property } from "../services/domain-com-au/types";

export const useAgentListings = (id = "0") =>
  useCache<Property[]>(async () => {
    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await backendApi.get(`domain-com-au/agent-listings/${id}`);
    
    return response.data;
  }, "agent-listings");
  
  export const useAgency = (id = "0") =>
  useCache<AgencyData>(async () => {
    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await backendApi.get(`domain-com-au/agency/${id}`);

    return response.data;
  }, ["agency", id]);
