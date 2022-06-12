// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import images from '../assets';

// const NFTCard = ({ nft }) => (
//   <Link href={{ pathname: '/nft-details', query: { nft } }}>
//     <div className="flex flex-col ">

//       <div
//         className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155
//     minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white rounded-2xl  m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer shadow-lg"
//       >
//         <div className="relative w-full h-full sm:h-36 xs:h-56 minmd:h-60 minlg:h-300 rounded-2xl shadow-lg">
//           <Image src={nft.image || images[`nft${nft.i}`]} objectFit="cover" layout="fill" alt="nft" className="rounded-2xl shadow-lg" />
//         </div>

//       </div>

//       <div className="-mt-20 mx-5 z-10 text-black shadow-lg h-32 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl">
//         hello
//       </div>
//     </div>

//   </Link>
// );

// export default NFTCard;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import images from '../assets';

const NFTCard = ({ nft }) => (
  <Link href={{ pathname: '/nft-details', query: nft }}>

    <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155
    minmd:min-w-256 minlg:min-w-327 bg-transparent rounded-2xl p-4  m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer hover:scale-105 duration-300"
    >
      <div className="relative w-full h-52 sm:h-36 xs:h-56 minmd:h-60 minlg:h-300 rounded-2xl shadow-lg">
        <Image src={nft.image || images[`nft${nft.i}`]} objectFit="cover" layout="fill" alt="nft" className="rounded-tl-2xl rounded-tr-2xl shadow-lg" />
      </div>

      <div className=" flex flex-col shadow-lg
bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl sm:p-5 p-10 -mt-6 mx-auto"
      >
        <p className="font-poppins dark:text-white text-nft-black font-semibold text-sm minlg:text-xl text-center">{nft.name}</p>
        <div className="flex w-11/12 h-[1px] mx-auto mt-2 dark:bg-white bg-nft-black-3 " />
        <div className="flexBetween mt-3 minlg:mt-3 flex-row xs:flex-col xs:items-start xs:mt-3">
          <p className="font-poppins dark:text-white text-nft-black font-semibold text-xs minlg:text-lg">{nft.price} <span className="normal">ETH</span></p>
          <p className="font-poppins dark:text-white text-nft-black font-semibold text-xs minlg:text-lg">{nft.seller}</p>
        </div>
      </div>

    </div>

  </Link>
);

export default NFTCard;
