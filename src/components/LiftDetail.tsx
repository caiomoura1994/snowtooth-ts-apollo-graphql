import React, { MouseEventHandler } from 'react';
import { gql } from '@apollo/client';
import TrailStatus, { TrailStatusFragment } from './TrailAccess';
import { AllLifts_allLifts } from '../types/AllLifts';


interface LiftDetailProps extends AllLifts_allLifts {
    onClickButton: MouseEventHandler
}

const LiftDetail: React.FC<LiftDetailProps> = (props) => {
    const { name, trailAccess, status, onClickButton } = props;
    return <div>{name}<button onClick={onClickButton}>{status}</button>
        {trailAccess.map(trail => <TrailStatus {...trail} key={trail.id} />)}
    </div>
};


export const LiftDetailFragment = gql`
    fragment LiftDetailFragment on Lift {
        name
        id
        status
        capacity
        trailAccess {
        ...TrailStatusFragment
        }
    }
    ${TrailStatusFragment}
  `;

export default LiftDetail;