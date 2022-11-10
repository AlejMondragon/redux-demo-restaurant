import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMeals = createAsyncThunk(
  'meals/getMeals', async () => {
      const response = await fetch('https://latraditional-demo-default-rtdb.firebaseio.com/meals.json');
      if(!response.ok) {
        throw new Error('Something went wrong, we couldn\'t fetch the meals list.')
      } 
      const responseData = await response.json()
      
      return responseData
  }
);

const initialState = {
  meals: [],
  status: null,
  statusMessage: "Something went wrong, we couldn't fetch the menu, please try again later."
}

const mealsSlice = createSlice({
  name: 'meals',
  initialState: initialState,
  extraReducers: {
    [getMeals.pending]: (state) => {
      state.status = "pending"
    },
    [getMeals.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.meals = action.payload || []
    },
    [getMeals.rejected]: (state) => {
      state.status = "rejected"
    }
  }
})

export default mealsSlice.reducer;