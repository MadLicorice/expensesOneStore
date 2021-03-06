import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
const addExpense = () => {
  
}
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filters reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null,
}
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

// Store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
  })
);

console.log(store.getState());


// const demoState = {
//   expenses: [{
//     id: 'sasasas',
//     description: 'January Rent',
//     note: 'This was the final payment for that address',
//     amount: 54500,
//     createdAt: 0,
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // date or amount
//     startDate: null,
//     endDate: null,
//   }
// }