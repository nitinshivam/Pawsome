import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
  winter: 'winter',
  dracula: 'dracula',
};

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user.info')) || null;
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.winter;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  //  user: getUserFromLocalStorage(),
    user: {
    info: getUserFromLocalStorage(),
    appointments: [],
  },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user.info = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user.info = null;
      state.user.appointments = [];
      localStorage.removeItem('user');
      toast.success('Logged out successfully');
    },
    toggleTheme: (state) => {
      const { dracula, winter } = themes;
      state.theme = state.theme === dracula ? winter : dracula;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
    fetchAppointmentsSuccess: (state, action) => {
      state.user.appointments = action.payload.appointments;
      state.loading = false;
    },
    fetchAppointmentsFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { loginUser, logoutUser, toggleTheme,fetchAppointmentsSuccess, fetchAppointmentsFailure } = userSlice.actions;

export default userSlice.reducer;
