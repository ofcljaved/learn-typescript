import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StateType {
  count: number;
}

const initialState: StateType = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
const reducer = counterSlice.reducer;

export const store = configureStore({ reducer: reducer });
