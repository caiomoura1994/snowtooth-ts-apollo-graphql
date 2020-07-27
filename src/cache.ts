import { makeVar, InMemoryCache } from "@apollo/client";

export const totalLiftVar = makeVar(0);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        totalLift: {
          read() {
            return totalLiftVar();
          },
        },
      },
    },
  },
});
