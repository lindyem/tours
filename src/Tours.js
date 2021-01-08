import React from 'react';
import Tour from './Tour';
const Tours = ({ tours }) => {
  return <section>
    <div className="title">
      <h2>Our Tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {tours.map((tour) => {
        return <Tour key={tour.id} image={tour.image} info={tour.info} price={tour.price} name={tour.name} ></Tour>
      })}
    </div>
  
  </section>;
};

export default Tours;
