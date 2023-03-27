import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Treatment = () => {
    return (
      <div className="hero md:my-36">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="rounded-lg shadow-2xl lg:w-5/12"
            alt=""
          />
          <div className="lg:ml-20">
            <h1 className="text-3xl font-semibold md:text-5xl md:font-bold md:leading-snug">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6 my-4 md:text-xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page .
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
};

export default Treatment;