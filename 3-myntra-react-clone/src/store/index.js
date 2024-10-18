import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";


const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatue:  fetchStatusSlice.reducer,
    bag:  bagSlice.reducer,
    },
});

export default myntraStore;