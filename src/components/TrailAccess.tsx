import React from 'react';
import gql from 'graphql-tag';
import { AllLifts_allLifts_trailAccess } from '../types/AllLifts';

const TrailStatus: React.FC<AllLifts_allLifts_trailAccess> = ({ status }) => {
    return <div>
        {status}
    </div>
};


export const TrailStatusFragment = gql`
    fragment TrailStatusFragment on Trail {
        name
        id
        status
    }
  `;

export default TrailStatus;