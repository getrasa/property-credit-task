import axios from "axios";

export const domainSandboxApi = axios.create({
  baseURL: "https://api.domain.com.au/sandbox/v1/",
  headers: {
    "Content-Type": "application/json",
    // Credentials for sandbox so they can be public
    "X-Api-Key": "key_6c892ba579b6d7640fd5ff0281eb7b15",
  },
});
