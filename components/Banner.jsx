import React from 'react';

const Banner = ({ parentStyles, childStyles, bannerText }) => (
  <div
    className={`relative w-full flex items-center z-0 overflow-hidden shadow-lg nft-gradient ${parentStyles}`}
  >
    <p className={`font-bold text-5xl font-poppins leading-70 text-white ${childStyles}`}>{bannerText}</p>
    <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full white-bg -top-9 -left-16 -z-5" />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full white-bg right-9 -bottom-16 z-5" />
  </div>
);

export default Banner;
