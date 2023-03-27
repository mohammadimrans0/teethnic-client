import React from 'react';

const Review = ({ review }) => {
    const { name, review: userReview, location, img } = review;
    return (
      <div className="card shadow-xl">
        <div className="card-body">
          <p>{userReview}</p>
          <div className="flex items-center space-x-6 mt-4 mb-2">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
                    </div>
                    <div>
                        <h5 className='text-lg'>{name}</h5>
                        <p>{ location}</p>
                    </div>
          </div>
        </div>
      </div>
    );
};

export default Review;