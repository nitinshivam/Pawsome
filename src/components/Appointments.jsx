import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointments } from './fetchAppointments';
import { FaClock, FaPaw, FaCalendarAlt } from 'react-icons/fa';
import { RiServiceFill } from "react-icons/ri";

const Appointments = () => {
  const dispatch = useDispatch();
   useSelector((state) => console.log(state));
  // const { appointments } = useSelector((state) => state.userState.user);
  const userState = useSelector((state) => state.userState.user);
  const { appointments} = userState;
  const email = userState.info ? userState.info.email : null;
  console.log(appointments);

  // const email = useSelector((state) => state.userState.user.info.email);

  useEffect(() => {
    if (email) {
      dispatch(fetchAppointments(email));
    }
  }, [dispatch, email]);


  return (
    <div className="container mx-auto px-4 py-8 min-h-screen ">
      <h2 className="text-4xl font-bold text-center mb-12">My Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-center">No appointments booked yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {appointments.map(appointment => (
            <div
              key={appointment.id}
              className="bg-white bg-opacity-20 rounded-xl shadow-xl p-6 backdrop-blur-lg hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <FaPaw className="text-3xl mr-2"/>
                <h3 className="text-2xl font-semibold">{appointment.petname}</h3>
              </div>
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-lg mr-2"/>
                <p className="text-lg">{appointment.date}</p>
              </div>
              <div className="flex items-center mb-2">
                <FaClock className="text-lg mr-2"/>
                <p className="text-lg">{appointment.time}</p>
              </div>
              <div className="flex items-center">
                <RiServiceFill className="text-lg mr-2"/>
                <p className="text-lg">{appointment.service}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;
