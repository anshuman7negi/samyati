import React from 'react';
import object from '../assets/objects.svg';

const Partners = () => {
  return (
    <div className="relative flex w-full justify-end overflow-hidden">
      <ul className="partners-list w-[90%] flex gap-8 md:justify-between font-bold text-2xl text-gray-500 p-11 animate-marquee">
        <li>tripadvisor</li>
        <li>Booking.com</li>
        <li>Expedia</li>
        <li>airbnb</li>
        <li>RBITZ</li>
      </ul>
      <img src={object} alt="" className="absolute left-5" />
    </div>
  );
};

export default Partners;
