import React from "react";

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
  const { name, price, slots } = appointmentOption;
  return (
    <div className="card shadow-xl mt-4">
      <div className="card-body text-center">
        <h2 className="text-3xl text-center text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p className="text-black"><small>Price: {price } $</small></p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
            onClick={() => setTreatment(appointmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
