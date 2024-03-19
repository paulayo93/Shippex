import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState} from '../types/store.types';
import {IsUser} from '../types/types';

const initialState = {
  user: {},
  isAuthenticated: false,
  fullname: '',
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<IsUser>) => {
      state.user = action.payload;
      state.isAuthenticated =
        action.payload.isAuthenticated != null
          ? action.payload.isAuthenticated
          : true;
    },
    userLogout: state => {
      state.isAuthenticated = false;
      state.user = {} as IsUser;
    },
  },
});
export const {userLogin, userLogout} = userSlice.actions;

export default userSlice.reducer;
