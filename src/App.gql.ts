import { gql } from "@apollo/client";
import { LiftDetailFragment } from "./components/LiftDetail";

export const liftQuery = gql`
  query AllLifts {
    allLifts {
      ...LiftDetailFragment
    }
    totalLift @client
  }
  ${LiftDetailFragment}
`;

export const setLiftStatusMutation = gql`
  mutation SetLiftStatusMutation($status: LiftStatus!, $id: ID!) {
    setLiftStatus(id: $id, status: $status) {
      id
      name
      status
    }
  }
`;
