import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("products/fetchData", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  const data = res.data;
  return data;
});

const productSlice = createSlice({
  name: "product-controller",
  initialState: { data: [], isLoading: false, error: null },
  reducers: {
    appendProduct: (state, action) => {
      state.data.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...action.payload];
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { appendProduct } = productSlice.actions;

export default productSlice.reducer;
