import React from "react";

const Footer = () => {
  return (
    <>
      <div className="layout-boarder"></div>
      <div className=" px-[11%]">
        <div className="flex justify-around items-center h-[96px] z-10">
          <img src="images/Logo/Group5626.png" alt="logo" />
          <div className="flex text-white font-sans">
            <div className=" lg:px-7 md:px-4 sm:px-1">Games</div>
            <div className=" lg:px-7 md:px-4 sm:px-1">News</div>
            <div className=" lg:px-7 md:px-4 sm:px-1">Allies</div>
            <div className=" lg:px-7 md:px-4 sm:px-1">Badges</div>
            <div className=" lg:px-7 md:px-4 sm:px-1">WhitePaper</div>
            <div className=" lg:px-5 md:px-3 sm:px-1">
              <img src="images/Icon/twitter.png" alt="twitter" />
            </div>
            <div className=" lg:px-5 md:px-3 sm:px-1">
              <img src="images/Icon/facebook.png" alt="facebook" />
            </div>
            <div className=" lg:px-5 md:px-3 sm:px-1">
              <img src="images/Icon/discord.png" alt="discord" />
            </div>
          </div>
        </div>
        <div className="flex text-lg justify-between">
          <div className="opacity-30">
            All Rights Reserved 2022 Earn Alliance
          </div>
          <div className="flex justify-between pb-20">
            <div className="px-4">Privacy Policy</div>
            <div className="px-4">Terms of Use</div>
            <div className="px-4">Cookies Policy</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
