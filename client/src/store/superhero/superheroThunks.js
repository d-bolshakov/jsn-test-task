import { createAsyncThunk } from "@reduxjs/toolkit";
import { URLS } from "../../common/urls";
import axios from "axios";

export const fetchSuperheros = createAsyncThunk(
  "superhero/fetchSuperheros",
  async (page = 1) => {
    const res = await axios.get(URLS.BASE, {
      params: {
        page,
      },
    });
    const data = await res.data;
    return data;
  }
);

export const fetchSuperheroById = createAsyncThunk(
  "superhero/fetchSuperheroById",
  async (id) => {
    const res = await axios.get(URLS.BASE + id.toString());
    const data = await res.data;
    return data.superhero;
  }
);

export const createSuperhero = createAsyncThunk(
  "superhero/createSuperhero",
  async (superhero) => {
    const res = await axios.post(URLS.BASE, superhero);
    const data = await res.data;
    return data.superhero;
  }
);

export const editSuperhero = createAsyncThunk(
  "superhero/editSuperhero",
  async (data) => {
    const res = await axios.put(
      URLS.BASE + data.id.toString(),
      data.superhero,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const resdata = await res.data;
    return resdata.superhero;
  }
);

export const removeSuperhero = createAsyncThunk(
  "superhero/removeSuperhero",
  async (id) => {
    const res = await axios.delete(URLS.BASE + id.toString());
    const data = await res.data;
    return data.message;
  }
);
