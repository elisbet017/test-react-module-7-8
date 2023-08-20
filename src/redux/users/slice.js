import { createSlice } from '@reduxjs/toolkit';
import {
  addUser,
  deleteUserById,
  editUser,
  getAllUsers,
  getUserById,
} from './operations';

const slice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentUser: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(getUserById.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(deleteUserById.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.items = state.items.map(user => {
          if (user.id === payload.id) {
            return payload;
          }
          return user;
        });
        state.currentUser = payload;
      })
      .addMatcher(
        action => action.type.endsWith('pending'),
        state => (state.isLoading = true)
      )
      .addMatcher(
        action => action.type.endsWith('fulfilled'),
        state => {
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
});

export const usersReducer = slice.reducer;
