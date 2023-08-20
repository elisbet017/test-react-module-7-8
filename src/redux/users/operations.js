import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64d70e2a2a017531bc12f3a0.mockapi.io';

export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getUserById = createAsyncThunk(
  'users/getUserById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/users/${id}`);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const deleteUserById = createAsyncThunk(
  'users/deleteUserById',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`);
      return id;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/addUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users', user);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const editUser = createAsyncThunk(
  'users/editUser',
  async (user, { rejectWithValue }) => {
    try {
    const { data } = await axios.put(`/users/${user.id}`, user);
    console.log(data)
    return data
  } catch (e) {
      return rejectWithValue(e);
  }
  })