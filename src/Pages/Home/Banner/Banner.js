import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
      <div className="grid lg:grid-cols-2 gap-4 my-8">
        <div>
          <h1 className="text-4xl font-semibold lg:text-7xl lg:font-bold lg:leading-tight">
            Your New Smile <br /> Starts Here
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi <br /> exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <div className="">
          <img src={chair} className="rounded-lg shadow-2xl" alt="" />
        </div>
      </div>
    );
};

export default Banner;