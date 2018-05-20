import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());

// Next up: actions
// I'd like to increment the count
// I'd like to reset the count to zero