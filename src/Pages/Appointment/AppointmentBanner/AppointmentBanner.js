import React from 'react';
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
      <header>
        <div className="grid lg:grid-cols-2 gap-4 my-8">
          <div className="lg:ml-32 lg:mt-10 mb-2">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
          <div className="">
            <img
              src={chair}
              className="rounded-lg shadow-2xl lg:w-4/5 lg:mt-10"
              alt=""
            />
          </div>
        </div>
      </header>
    );
};

export default AppointmentBanner;