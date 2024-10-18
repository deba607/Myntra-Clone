import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false, // false: 'PENDING' and true: 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state = initialState) => { // Initialize state with initialState
      state.fetchDone = true;
    },
    markFetchingStarted: (state = initialState) => { // Initialize state with initialState
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state = initialState) => { // Initialize state with initialState
      state.currentlyFetching = false;
    }
  }
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;