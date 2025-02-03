import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

type FormSlice = {
  name: string;
  cost: number;
};

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  } as FormSlice,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeCost(state, action: PayloadAction<number>) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeCost, changeName } = formSlice.actions;
export const formReducer = formSlice.reducer;
