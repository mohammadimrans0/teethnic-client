import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from './Review';

const Testimonial = () => {
    const reviews = [
      {
        _id: 1,
        name: "Winson Herry",
        review:
                "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: 'California',
        img: people1
      },
      {
        _id: 2,
        name: "Lary Page",
        review:
                "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: 'Texas',
        img: people2
      },
      {
        _id: 3,
        name: "Hena Morries",
        review:
                "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: 'New York',
        img: people3
      },
    ];
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary  font-bold mb-3'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Say</h2>
                </div>
                <figure>
                    <img className='hidden md:block md:w-32 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;