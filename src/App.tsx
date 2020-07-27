import React from 'react';
import './App.css';

import { useMutation, useQuery } from '@apollo/client';
import { AllLifts } from './types/AllLifts';
import LiftDetail from './components/LiftDetail';
import { LiftStatus } from './types/graphql-global-types';
import { totalLiftVar } from './cache';
import { liftQuery, setLiftStatusMutation } from './App.gql';

const App: React.FC = () => {
  const { data } = useQuery<AllLifts>(liftQuery);

  const [setLiftStatus] = useMutation(setLiftStatusMutation, { refetchQueries: ['AllLifts'] });

  function updateLift(id: string, status: LiftStatus | null) {
    setLiftStatus({ variables: { id, status } })
    const totalLift = totalLiftVar();
    totalLiftVar(totalLift + 1)
  }

  return <div>{data?.allLifts?.map(lift => <LiftDetail
    onClickButton={() => updateLift(lift.id, LiftStatus.HOLD)}
    {...lift}
    key={lift.id}
  />
  )}</div>
};
export default App;