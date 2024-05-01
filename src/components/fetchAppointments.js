import { fetchAppointmentsSuccess, fetchAppointmentsFailure } from '../features/user/userSlice';

export const fetchAppointments = (email) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/api/users/getAppointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      dispatch(fetchAppointmentsSuccess(data)); // Dispatch success action
    } catch (error) {
      console.error('Error fetching appointments:', error);
      dispatch(fetchAppointmentsFailure()); // Dispatch failure action
    }
  };
};


