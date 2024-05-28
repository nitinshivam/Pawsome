import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitAppointmentForm } from "../pages/AppointmentFormPage";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentForm = () => {
  const dispatch = useDispatch();
  useSelector((state) => console.log(state.userState.user.info.email));
  const email = useSelector((state) => state.userState.user.info.email);
  
  const [formData, setFormData] = useState({
    email: email,
    pet: "",
    date: "",
    time: "",
    appointmentType: "vet",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dispatch an action to submit the form data to the backend
      const responseData = await dispatch(submitAppointmentForm(formData));

      // Optionally, handle the response data
      console.log("Form submitted successfully:", responseData);

      // Reset form fields
      setFormData({
        pet: "",
        date: "",
        time: "",
        appointmentType: "vet",
        message: "",
      });

      // Optionally, display a success message to the user
      // alert("Appointment booked successfully!");
      toast.success('Appointment booked successfully!');
    } catch (error) {
      // Error handling is done in the action creator, so you may not need to handle errors here
      console.error("Error submitting appointment form:", error.message);
      //alert("Error booking appointment. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-6 border rounded-md border-gray-400 p-6"
    >
      <div className="mb-4">
        <label
          htmlFor="pet"
          className="block text-sm font-medium text-gray-700"
        >
          Pet's Name:
        </label>
        <input
          type="text"
          id="pet"
          name="pet"
          value={formData.pet}
          onChange={handleChange}
          required
          className="p-2 mt-1 h-8 block w-full border-gray-300 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Preferred Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="p-2 mt-1 h-8 block w-full border-gray-300 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="time"
          className="block text-sm font-medium text-gray-700"
        >
          Preferred Time:
        </label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="p-2 mt-1 h-8 block w-full border-gray-300 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="type"
          className="block text-sm font-medium text-gray-700"
        >
          Type of Appointment:
        </label>
        <select
          id="type"
          name="appointmentType"
          value={formData.appointmentType}
          onChange={handleChange}
          className="mt-1 h-8 block w-full border-gray-300 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="veterinary">Veterinary</option>
          <option value="training">Training</option>
          <option value="grooming">Groom</option>
          <option value="walking">Walk</option>
          <option value="sitting">Sitting</option>
          <option value="feeding">Feeding</option>
          <option value="playtime">Playtime</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Additional Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="p-2 mt-1 block w-full border-gray-300 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8b70cd] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
