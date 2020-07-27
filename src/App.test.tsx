import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { MockedProvider, MockedResponse } from "@apollo/client/testing";

import App from './App';
import { AllLifts } from './types/AllLifts';
import { liftQuery, setLiftStatusMutation } from './App.gql';


interface AllLiftsMock extends AllLifts {
  totalLift: number
}

let allLifts = [{ "name": "Astra Express", "id": "astra-express", "status": "CLOSED", "capacity": 3, "trailAccess": [{ "name": "Blue Bird", "id": "blue-bird", "status": "OPEN", "__typename": "Trail" }, { "name": "Blackhawk", "id": "blackhawk", "status": "OPEN", "__typename": "Trail" }, { "name": "Duck's Revenge", "id": "ducks-revenge", "status": "OPEN", "__typename": "Trail" }, { "name": "Ice Streak", "id": "ice-streak", "status": "OPEN", "__typename": "Trail" }, { "name": "Parachute", "id": "parachute", "status": "OPEN", "__typename": "Trail" }, { "name": "Goosebumps", "id": "goosebumps", "status": "OPEN", "__typename": "Trail" }], "__typename": "Lift" }, { "name": "Jazz Cat", "id": "jazz-cat", "status": "OPEN", "capacity": 2, "trailAccess": [{ "name": "Goosebumps", "id": "goosebumps", "status": "OPEN", "__typename": "Trail" }, { "name": "River Run", "id": "river-run", "status": "OPEN", "__typename": "Trail" }, { "name": "Duck's Revenge", "id": "ducks-revenge", "status": "OPEN", "__typename": "Trail" }, { "name": "Cape Cod", "id": "cape-cod", "status": "CLOSED", "__typename": "Trail" }, { "name": "Grandma", "id": "grandma", "status": "OPEN", "__typename": "Trail" }, { "name": "Wild Child", "id": "wild-child", "status": "CLOSED", "__typename": "Trail" }, { "name": "Old Witch", "id": "old-witch", "status": "OPEN", "__typename": "Trail" }], "__typename": "Lift" }, { "name": "Jolly Roger", "id": "jolly-roger", "status": "OPEN", "capacity": 6, "trailAccess": [{ "name": "Dance Fight", "id": "dance-fight", "status": "OPEN", "__typename": "Trail" }, { "name": "Sneaky Pete", "id": "sneaky-pete", "status": "OPEN", "__typename": "Trail" }, { "name": "Bear Cave", "id": "bear-cave", "status": "OPEN", "__typename": "Trail" }, { "name": "Humpty Dumpty", "id": "humpty-dumpty", "status": "CLOSED", "__typename": "Trail" }, { "name": "Meatball", "id": "meatball", "status": "OPEN", "__typename": "Trail" }, { "name": "Early Riser", "id": "early-riser", "status": "OPEN", "__typename": "Trail" }, { "name": "Sunset", "id": "sunset", "status": "OPEN", "__typename": "Trail" }], "__typename": "Lift" }, { "name": "Neptune Rope", "id": "neptune-rope", "status": "OPEN", "capacity": 1, "trailAccess": [{ "name": "Home Run", "id": "home-run", "status": "OPEN", "__typename": "Trail" }, { "name": "Crosscut", "id": "crosscut", "status": "OPEN", "__typename": "Trail" }], "__typename": "Lift" }, { "name": "Panorama", "id": "panorama", "status": "OPEN", "capacity": 8, "trailAccess": [{ "name": "Ocean Breeze", "id": "ocean-breeze", "status": "OPEN", "__typename": "Trail" }, { "name": "Songstress", "id": "songstress", "status": "CLOSED", "__typename": "Trail" }, { "name": "Mountain Run", "id": "mountain-run", "status": "OPEN", "__typename": "Trail" }, { "name": "Summit Saunter", "id": "summit-saunter", "status": "OPEN", "__typename": "Trail" }, { "name": "Hemmed Slacks", "id": "hemmed-slacks", "status": "OPEN", "__typename": "Trail" }, { "name": "David's Dive", "id": "davids-dive", "status": "CLOSED", "__typename": "Trail" }, { "name": "Quarry Chute", "id": "quarry-chute", "status": "CLOSED", "__typename": "Trail" }, { "name": "Sunset", "id": "sunset", "status": "OPEN", "__typename": "Trail" }, { "name": "Blackhawk", "id": "blackhawk", "status": "OPEN", "__typename": "Trail" }], "__typename": "Lift" }, { "name": "Prickly Peak", "id": "prickly-peak", "status": "OPEN", "capacity": 3, "trailAccess": [{ "name": "Crooked Chute", "id": "crooked-chute", "status": "OPEN", "__typename": "Trail" }, { "name": "Mark's Chute", "id": "marks-chute", "status": "OPEN", "__typename": "Trail" }, { "name": "The Terrible Chute", "id": "the-terrible-chute", "status": "OPEN", "__typename": "Trail" }, { "name": "Magma Chute", "id": "magma-chute", "status": "OPEN", "__typename": "Trail" }, { "name": "Saddleback Chute", "id": "saddleback-chute", "status": "OPEN", "__typename": "Trail" }, { "name": "Omega Chute", "id": "omega-chute", "status": "OPEN", "__typename": "Trail" }, { "name": "Adirondack Chute", "id": "adirondack-chute", "status": "OPEN", "__typename": "Trail" }, { "name": "Chicken Out Traverse", "id": "chicken-out-traverse", "status": "OPEN", "__typename": "Trail" }], "__typename": "Lift" }, { "name": "Snowtooth Express", "id": "snowtooth-express", "status": "OPEN", "capacity": 6, "trailAccess": [{ "name": "Blue Streak", "id": "blue-streak", "status": "OPEN", "__typename": "Trail" }, { "name": "Hoya Saxa", "id": "hoya-saxa", "status": "OPEN", "__typename": "Trail" }, { "name": "Michigan Ave", "id": "michigan-ave", "status": "OPEN", "__typename": "Trail" }, { "name": "Parker Downhill", "id": "parker-downhill", "status": "OPEN", "__typename": "Trail" }, { "name": "Wiggle Waggle", "id": "wiggle-waggle", "status": "OPEN", "__typename": "Trail" }, { "name": "Meow Face", "id": "meow-face", "status": "OPEN", "__typename": "Trail" }, { "name": "Golden Ticket", "id": "golden-ticket", "status": "OPEN", "__typename": "Trail" }], "__typename": "Lift" }, { "name": "Summit", "id": "summit", "status": "CLOSED", "capacity": 6, "trailAccess": [{ "name": "Golden Ticket", "id": "golden-ticket", "status": "OPEN", "__typename": "Trail" }, { "name": "Summit Bowl", "id": "summit-bowl", "status": "CLOSED", "__typename": "Trail" }, { "name": "Hangar Bowl", "id": "hangar-bowl", "status": "CLOSED", "__typename": "Trail" }, { "name": "Big Gully", "id": "big-gully", "status": "CLOSED", "__typename": "Trail" }, { "name": "Bigger Gully", "id": "bigger-gully", "status": "CLOSED", "__typename": "Trail" }, { "name": "Broadway Bowl", "id": "broadway-bowl", "status": "CLOSED", "__typename": "Trail" }, { "name": "Fish Bowl", "id": "fish-bowl", "status": "CLOSED", "__typename": "Trail" }], "__typename": "Lift" }, { "name": "Wally's", "id": "wallys", "status": "CLOSED", "capacity": 2, "trailAccess": [{ "name": "Buford", "id": "buford", "status": "CLOSED", "__typename": "Trail" }, { "name": "Slippy Stream", "id": "slippy-stream", "status": "CLOSED", "__typename": "Trail" }, { "name": "Peacock", "id": "peacock", "status": "CLOSED", "__typename": "Trail" }, { "name": "Fun Run", "id": "fun-run", "status": "CLOSED", "__typename": "Trail" }, { "name": "Sweet Treat", "id": "sweet-treat", "status": "CLOSED", "__typename": "Trail" }, { "name": "Stump Alley", "id": "stump-alley", "status": "CLOSED", "__typename": "Trail" }], "__typename": "Lift" }, { "name": "Western States", "id": "western-states", "status": "CLOSED", "capacity": 6, "trailAccess": [{ "name": "Centennial", "id": "centennial", "status": "CLOSED", "__typename": "Trail" }, { "name": "Biennial", "id": "biennial", "status": "CLOSED", "__typename": "Trail" }, { "name": "Millenial", "id": "millenial", "status": "CLOSED", "__typename": "Trail" }, { "name": "Searcher", "id": "searcher", "status": "CLOSED", "__typename": "Trail" }, { "name": "White Lightning", "id": "white-lightning", "status": "CLOSED", "__typename": "Trail" }, { "name": "Richard's Return", "id": "richards-return", "status": "CLOSED", "__typename": "Trail" }, { "name": "Head Chutes Gate A", "id": "head-chutes-gate-a", "status": "CLOSED", "__typename": "Trail" }, { "name": "Head Chutes Gate B", "id": "head-chutes-gate-b", "status": "CLOSED", "__typename": "Trail" }, { "name": "Head Chutes Gate C", "id": "head-chutes-gate-c", "status": "CLOSED", "__typename": "Trail" }], "__typename": "Lift" }, { "name": "Whirlybird", "id": "whirlybird", "status": "CLOSED", "capacity": 2, "trailAccess": [{ "name": "Bird Glade", "id": "bird-glade", "status": "CLOSED", "__typename": "Trail" }, { "name": "Big Bird", "id": "big-bird", "status": "CLOSED", "__typename": "Trail" }, { "name": "Roller Park", "id": "roller-park", "status": "CLOSED", "__typename": "Trail" }, { "name": "Owl Glade", "id": "owl-glade", "status": "CLOSED", "__typename": "Trail" }, { "name": "Whippersnapper Ridge", "id": "whippersnapper-ridge", "status": "CLOSED", "__typename": "Trail" }, { "name": "Drop In", "id": "drop-in", "status": "CLOSED", "__typename": "Trail" }, { "name": "Mosh Pit", "id": "mosh-pit", "status": "CLOSED", "__typename": "Trail" }, { "name": "Richard's Return", "id": "richards-return", "status": "CLOSED", "__typename": "Trail" }], "__typename": "Lift" }]

const mocks = [
  {
    request: {
      query: liftQuery,
    },
    result: {
      data: {
        allLifts,
        totalLift: 1
      } as AllLiftsMock
    }
  },
  {
    request: {
      query: setLiftStatusMutation,
      variables: { "id": "astra-express", "status": "HOLD" },
    },
    newData: jest.fn((id, status) => ({
      data: {
        id,
        status
      },
    })),
    delay: 200
  }
] as MockedResponse[]

test('Should calls the mutation after click in first CLOSED Button', async () => {
  const { getByText, getAllByText, container } = render(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  );
  await waitFor(() => getByText('Astra Express'))
  const [closedButton] = getAllByText('CLOSED');
  fireEvent.click(closedButton)

  await waitFor(() => expect(mocks[1].newData).toHaveBeenCalled());

  expect(container.firstChild).toMatchSnapshot()
});
