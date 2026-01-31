import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://becoming-raccoon-11.clerk.accounts.dev",
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;