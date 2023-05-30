import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSuperheros,
  fetchSuperheroById,
  createSuperhero,
  editSuperhero,
  removeSuperhero,
} from "./superheroThunks";

const initialState = {
  superheros: [],
  isMoreAvailable: false,
  currentSuperhero: null,
  isLoading: false,
  error: null,
  message: null,
};

export const superheroSlice = createSlice({
  name: "superhero",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSuperheros.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSuperheros.fulfilled, (state, action) => {
      state.isLoading = false;
      state.superheros = action.payload.superheros;
      state.isMoreAvailable = action.payload.isMoreAvailable;
    });
    builder.addCase(fetchSuperheros.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchSuperheroById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSuperheroById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentSuperhero = action.payload;
    });
    builder.addCase(fetchSuperheroById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(createSuperhero.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createSuperhero.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentSuperhero = action.payload;
    });
    builder.addCase(createSuperhero.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(editSuperhero.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editSuperhero.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentSuperhero = action.payload;
    });
    builder.addCase(editSuperhero.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(removeSuperhero.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeSuperhero.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentSuperhero = null;
      state.message = action.payload;
    });
    builder.addCase(removeSuperhero.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { actions, reducer } = superheroSlice;
