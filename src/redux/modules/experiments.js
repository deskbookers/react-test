const ADD = 'experiments/ADD';

const initialState = {
  list: [],
  lastId: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      const nextId = state.lastId + 1;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: nextId,
            name: action.name
          }
        ],
        lastId: nextId
      };
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
