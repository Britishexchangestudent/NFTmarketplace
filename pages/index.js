/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Banner, CreatorCard, Loader, NFTCard, SearchBar } from '../components';
import images from '../assets';
import { makeId } from '../utils/makeId';
import { NFTContext } from '../context/NFTContext';
import { getCreators } from '../utils/getTopCreators';
import { shortenAddress } from '../utils/shortenAddress';

const Home = () => {
  const [hideButtons, setHideButtons] = useState(false);
  const [activeSelect, setActiveSelect] = useState('Recently added');
  const [isLoading, setIsLoading] = useState(true);

  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const { theme } = useTheme();

  const { fetchNFTs } = useContext(NFTContext);

  useEffect(() => {
    fetchNFTs().then((items) => {
      setNfts(items);
      setNftsCopy(items);
      setIsLoading(false);
    });
    console.log('nfts', nfts);
  }, []);

  useEffect(() => {
    const sortedNFTs = [...nfts];
    switch (activeSelect) {
      case 'Price (low to high)':
        setNfts(sortedNFTs.sort((a, b) => a.price - b.price));
        break;
      case 'Price (high to low)':
        setNfts(sortedNFTs.sort((a, b) => b.price - a.price));
        break;
      case 'Recently added':
        setNfts(sortedNFTs.sort((a, b) => b.tokenId - a.tokenId));
        break;

      default:
        setNfts(nfts);
        break;
    }
  }, [activeSelect]);

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButtons(false);
    } else {
      setHideButtons(true);
    }
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);

    return () => window.removeEventListener('resize', isScrollable);
  }, []);

  const topCreators = getCreators(nftsCopy);

  const onHandleSearch = (value) => {
    const item = nfts.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));

    if (item.length) {
      setNfts(item);
    } else {
      setNfts(item);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          bannerText="Discover, collect, and sell extraordinary NFTs"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
        />

        {!isLoading && !nfts.length ? (
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Thats wierd.... No NFTs for sale</h1>
        ) : isLoading ? <Loader /> : (
          <div>
            {/* BEST CREATORS */}

            <div>
              <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
                Top Sellers
              </h1>

              <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
                <div className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none" ref={scrollRef}>
                  {/* {[6, 7, 8, 9, 10].map((i) => (

                <CreatorCard
                  key={`creator-${i}`}
                  rank={i}
                  creatorImage={images[`creator${i}`]}
                  creatorName={`0x${makeId(3)}...${makeId(4)}`}
                  creatorEths={10 - i * 0.5}
                />

              ))} */}

                  {topCreators?.map((creator, i) => (

                    <CreatorCard
                      key={creator.seller}
                      rank={i + 1}
                      creatorImage={images[`creator${i + 1}`]}
                      creatorName={shortenAddress(creator?.seller)}
                      creatorEths={creator?.sum}
                    />

                  ))}
                  {!hideButtons && (

                  <>
                    <div className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0" onClick={() => handleScroll('left')}>
                      <Image src={images.left} layout="fill" objectFit="contain" alt="left_arrow" className={theme === 'light' ? 'filter invert' : ''} />
                    </div>
                    <div className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0" onClick={() => handleScroll('right')}>
                      <Image src={images.right} layout="fill" objectFit="contain" alt="right_arrow" className={theme === 'light' ? 'filter invert' : ''} />
                    </div>
                  </>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 flex-row sm:flex-col sm:items-start">
                <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold xs:ml-0 sm:mb-4">Hot NFTs</h1>
                <div className="flex-2 sm:w-full flex flex-row sm:flex-col ml-5 flexCenter sm:ml-0">
                  <SearchBar activeSelect={activeSelect} setActiveSelect={setActiveSelect} handleSearch={onHandleSearch} clearSearch={onClearSearch} />
                </div>
              </div>
              <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center h-auto">
                {nfts.map((nft) => <NFTCard key={nft.tokenId} nft={nft} />)}
                {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <NFTCard
                key={i}
                nft={{
                  i,
                  name: `Nyfty NFT ${i}`,
                  price: (10 - i * 0.4).toFixed(2),
                  seller: `0x${makeId(3)}...${makeId(4)}`,
                  owner: `0x${makeId(3)}...${makeId(4)}`,
                  description: 'Cool NFT on sale',
                }}
              />
            ))} */}
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default Home;
