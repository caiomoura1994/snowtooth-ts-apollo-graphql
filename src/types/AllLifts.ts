/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LiftStatus, TrailStatus } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: AllLifts
// ====================================================

export interface AllLifts_allLifts_trailAccess {
  __typename: "Trail";
  /**
   * A unique identifier for a `Trail` (id: 'hemmed-slacks')
   */
  id: string;
  /**
   * The name of a `Trail`
   */
  name: string;
  /**
   * The current status for a `Trail`: OPEN, CLOSED
   */
  status: TrailStatus | null;
}

export interface AllLifts_allLifts {
  __typename: "Lift";
  /**
   * The unique identifier for a `Lift` (id: "panorama")
   */
  id: string;
  /**
   * The name of a `Lift`
   */
  name: string;
  /**
   * The current status for a `Lift`: `OPEN`, `CLOSED`, `HOLD`
   */
  status: LiftStatus | null;
  /**
   * The number of people that a `Lift` can hold
   */
  capacity: number;
  /**
   * A list of trails that this `Lift` serves
   */
  trailAccess: AllLifts_allLifts_trailAccess[];
}

export interface AllLifts {
  /**
   * A list of all `Lift` objects
   */
  allLifts: AllLifts_allLifts[];
}
