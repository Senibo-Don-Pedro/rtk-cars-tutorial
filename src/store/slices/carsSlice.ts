import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type Cars = {
  id: string;
  name: string;
  cost: number;
};

type CarsSlice = {
  searchTerm: string;
  data: Cars[];
};

type AddCarPayload = {
  name: string;
  cost: number;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  } as CarsSlice,
  reducers: {
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addCar(state, action: PayloadAction<AddCarPayload>) {
      //action.payload ==={name: "ab", cost: 140}
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action: PayloadAction<string>) {
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });

      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
