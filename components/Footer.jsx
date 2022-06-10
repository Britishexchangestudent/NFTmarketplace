/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { useTheme } from 'next-themes';
import Image from 'next/image';
import images from '../assets';
import { Button } from '.';

const FooterLinks = ({ heading, items }) => (
  <div className="flex-1 justify-start items-start duration-300">
    <h3 className="font-bold font-poppins dark:text-white text-nft-black-1 text-xl mb-6 duration-300">
      {heading}
    </h3>
    {items.map((item, i) => (
      <p key={i} className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3 duration-300">{item}</p>
    ))}

  </div>
);

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16 duration-300">

      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16 duration-300">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-2 duration-300">CryptoKat</p>
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">
            Get the latest updates
          </p>
          <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md">
            <input
              type="email"
              placeholder="Your Email"
              className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 py-2 rounded-md dark:text-white text-nft-black-1 font-normal font-xs minlg:text-lg outline-none"
            />
            <div className="flex-initial">
              <Button btnName="Email me" classStyles="rounded-md" />
            </div>
          </div>
        </div>

        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks heading="CryptoKat" items={['Explore', 'How it Works', 'Contact Us']} />
          <FooterLinks heading="Support" items={['Help center', 'Terms of Service', 'Legal', 'Privacy Policy']} />
        </div>

      </div>

      {/* ALL RIGHTS RESERVED AND ICONS */}
      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16 duration-300">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold duration-300">CryptoKat, Inc. All Rights Reserved</p>
          <div className="flex flex-row sm:mt-4">
            {[images.instagram, images.twitter, images.telegram, images.discord].map((image, i) => (
              <div key={i} className="mx-2 cursor-pointer duration-300 hover:scale-105 active:scale-x-95">
                <Image
                  src={image}
                  objectFit="contain"
                  width={24}
                  height={24}
                  alt="social"
                  className={theme === 'light' && 'filter invert'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
