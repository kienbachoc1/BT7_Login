import { createSlice } from "@reduxjs/toolkit";

const dataDefault = {
  prods: [
    {
      id: 1,
      name: "Galaxy S10",
      quantity: "Korean",
      price: 10000000,
      details: "new product",
      supplier: "samsung",
    },
    {
      id: 2,
      name: "iphone 11",
      quantity: "USA",
      price: 11000000,
      details: "new product",
      supplier: "apple",
    },
    {
      id: 3,
      name: "Galaxy a11",
      quantity: "Korean",
      price: 2000000,
      details: "new product",
      supplier: "samsung",
    },
    {
      id: 4,
      name: "ipad 11",
      quantity: "USA",
      price: 10000000,
      details: "new product",
      supplier: "apple",
    },
    {
      id: 5,
      name: "Galaxy S20",
      quantity: "Korean",
      price: 20000000,
      details: "new product",
      supplier: "samsung",
    },
  ],
};

export default createSlice({
  name: "products",
  initialState: dataDefault,
  reducers: {
    //=> Tự động tạo ra action creator
    addProduct: (state, action) => {
      //mutation || IMER
      state.prods.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.prods = state.prods.filter((prod) => prod.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.prods.findIndex(
        (item) => item.id === action.payload.id
      );
      state.prods[index] = action.payload;
    },
  }, // => { type:'products/addProduct' }
});
