/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { NFTContext } from '../context/NFTContext';
import { Loader, Button, Input } from '../components';

const ResellNFT = () => {
  const { createSale } = useContext(NFTContext);
  const router = useRouter();
  const { tokenId, tokenURI } = router.query;
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchNFT = async () => {
    if (!tokenURI) return;

    const { data } = await axios.get(tokenURI);
    setPrice(data.price);
    setImage(data.image);
    setIsLoading(false);
    console.log('data', data);
  };

  useEffect(() => {
    if (tokenURI) fetchNFT();
  }, []);

  const resell = async () => {
    await createSale(tokenURI, price, true, tokenId);

    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold">Resell NFT</h1>

        <Input
          inputType="number"
          title="Price"
          placeholder="NFT Price"
          handleClick={(e) => setPrice(e.target.value)}
        />

        {image && (
          <div className="flex mx-auto justify-center">
            <img src={image} alt="soi" className="rounded mt-4" width={450} />
          </div>
        )}

        <div className="mt-7 w-full flex justify-center">
          <Button
            btnName="List NFT"
            classStyles="rounded-lg"
            handleClick={resell}
          />
        </div>

      </div>
    </div>
  );
};

export default ResellNFT;
