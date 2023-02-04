import React from "react";

const Footer = () => {
  return (
    <>
      <div className="layout-boarder"></div>
      <div className=" px-[12%]">
        <div className="flex justify-around items-center h-[88px]">
          <img src="images/Logo/Group5626.png" alt="logo" className="cursor-pointer"/>
          <div className="flex text-white font-sans">
            <a href="#" className=" lg:px-7 md:px-4 sm:px-1">Games</a>
            <a href="#" className=" lg:px-7 md:px-4 sm:px-1">News</a>
            <a href="#" className=" lg:px-7 md:px-4 sm:px-1">Allies</a>
            <a href="#" className=" lg:px-7 md:px-4 sm:px-1">Badges</a>
            <a href="#" className=" lg:px-7 md:px-4 sm:px-1">WhitePaper</a>
            <a href="#" className=" lg:px-5 md:px-3 sm:px-1">
              <img src="images/Icon/twitter.png" alt="twitter" />
            </a>
            <a href="#" className=" lg:px-5 md:px-3 sm:px-1">
              <img src="images/Icon/facebook.png" alt="facebook" />
            </a>
            <a href="#" className=" lg:px-5 md:px-3 sm:px-1">
              <img src="images/Icon/discord.png" alt="discord" />
            </a>
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
