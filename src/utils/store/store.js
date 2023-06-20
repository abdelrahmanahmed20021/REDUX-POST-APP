import { configureStore } from "@reduxjs/toolkit";

import product from "../reducers/reducers";

export const store = configureStore({
  reducer: {
    product,
  },
});
