const ADD = 'experiments/ADD';

const initialState = {
  experiments = [],
  lastExperimentId = 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return {
        ...state, 
        experiments: [
          ...state.experiments,
          {
            id: state.lastExperimentId + 1,
            name: action.name
          }
        ],
        lastExperimentId: state.lastExperimentId + 1
      }
    default:
      return state;
  }
}

export function addExperiment(name) {
  return {
    type: ADD,
    name: name
  };
}
