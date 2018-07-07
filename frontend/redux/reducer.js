import { combineReducers } from 'redux';

function testReducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

const reducers = {
  test: testReducer
};

const combinedReducers = combineReducers(reducers, {});

export default function mainReducer(state, action) {
  return combinedReducers(state, action);
}
