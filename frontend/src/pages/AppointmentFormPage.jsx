import React from "react";
import AppointmentForm from "../components/AppointmentForm";

export const submitAppointmentForm = (formData) => {
  return async (dispatch) => {
    try {
      // Send a POST request to the backend endpoint with form data
      const response = await fetch('api/users/bookAppointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit appointment form');
      }

      // Optionally, parse the response data if needed
      const responseData = await response.json();

      // Dispatch an action to update the Redux store if necessary
      dispatch(appointmentFormSubmitted(responseData));

      // Optionally, return response data
      return responseData;
    } catch (error) {
      // Handle errors, e.g., dispatch an error action
      console.error('Error submitting appointment form:', error.message);
      dispatch(appointmentFormSubmissionFailed(error.message));
      throw error; // Rethrow the error for components to handle
    }
  };
};

const appointmentFormSubmitted = (responseData) => ({
  type: 'APPOINTMENT_FORM_SUBMITTED',
  payload: responseData,
});

const appointmentFormSubmissionFailed = (errorMessage) => ({
  type: 'APPOINTMENT_FORM_SUBMISSION_FAILED',
  payload: errorMessage,
});


const AppointmentFormPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 flex justify-center ">Book an Appointment</h1>
      <AppointmentForm submitAppointmentForm={(formData, email) => dispatch(submitAppointmentForm(formData, email))} />
    </div>
  );
};

export default AppointmentFormPage;
