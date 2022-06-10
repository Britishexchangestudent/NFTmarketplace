/* eslint-disable no-unused-vars */
import Image from 'next/image';
import React from 'react';
import images from '../assets';

const CreatorCard = ({ rank, creatorImage, creatorName, creatorEths }) => (
  <div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white shadow-lg  rounded-3xl flex flex-col p-4 m-4">
    <div className="w-8 h-8 minmd:w-10 minmd:h-10 bg-nft-red-violet shadow-lg flexCenter rounded-full">
      <p className="font-poppins text-white font-semibold text-base minlg:text-lg">{rank}</p>
    </div>

    <div className="my-2 flex justify-center">
      <div className="relative w-20 h-20 minlg:w-28 minlg:h-28">
        <Image src={creatorImage} alt="creatorName" layout="fill" objectFit="cover" className="rounded-full shadow-lg" />
        <div className="absolute w-4 h-4 bottom-2 -right-0 minmd:w-5 minmd:h-5">
          <Image src={images.tick} alt="tick" objectFit="contain" layout="fill" />
        </div>
      </div>
    </div>

    <div className="flexCenter flex-col mt-3 text-center">
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">{creatorName}</p>
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-1">{creatorEths.toFixed(2)} <span className="font-normal">ETH</span></p>
    </div>
  </div>
);

export default CreatorCard;
