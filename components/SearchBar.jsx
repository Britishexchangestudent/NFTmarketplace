/* eslint-disable no-unused-vars */
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import images from '../assets';

const SearchBar = ({ activeSelect, setActiveSelect, handleSearch, clearSearch }) => {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [toggle, setToggle] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(debouncedSearch);
    }, 1000);

    return () => clearTimeout(timer);
  }, [debouncedSearch]);

  useEffect(() => {
    if (search) {
      handleSearch(search);
    } else {
      clearSearch();
    }
  }, [search]);

  return (
    <div className="flex-1 flexCenter space-x-3 flex-row  md:flex-col">
      <div className="flex-1 flexCenter dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 px-4 rounded-md py-3 my-2">
        <Image src={images.search} objectFit="contain" width={15} height={15} alt="search" className={theme === 'light' ? 'filter invert' : ''} />
        <input
          type="text"
          placeholder="Search NFT here"
          className="dark:bg-nft-black-2 bg-white mx-4 w-full dark:text-white text-nft-black-1 font-normal text-xs outline-none"
          onChange={(e) => setDebouncedSearch(e.target.value)}
          value={debouncedSearch}
        />
      </div>

      <div onClick={() => setToggle((prev) => !prev)} className="relative flexBetween ml-4  min-w-190 cursor-pointer dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 px-4 rounded-md py-3">
        <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xs">{activeSelect}</p>
        <Image src={images.arrow} objectFit="contain" width={15} height={15} alt="arrow" className={theme === 'light' ? 'filter invert' : ''} />
        {toggle && (
        <div className="absolute top-full left-0 right-0 w-full mt-1 z-10 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 px-4 rounded-md py-3 animated fadeIn duration-300">
          {['Recently added', 'Price (low to high)', 'Price (high to low)'].map((item) => (
            <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xs my-3 cursor-pointer hover:bg-nft-gray-1 px-4 py-2 duration-300 rounded-md dark:hover:bg-nft-black-1" onClick={() => setActiveSelect(item)} key={item}>
              {item}
            </p>
          ))}
        </div>
        )}
      </div>

    </div>
  );
};

export default SearchBar;
