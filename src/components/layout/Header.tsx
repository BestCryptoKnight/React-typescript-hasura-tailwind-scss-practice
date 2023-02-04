import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center h-[95px]">
        <img
          src="images/Logo/Group5626.png"
          alt="logo"
          className=" cursor-pointer"
        />
        <div className="flex text-white font-sans">
          <a href="#" className=" lg:px-7 md:px-4 sm:px-1">
            Games
          </a>
          <a href="#" className=" lg:px-7 md:px-4 sm:px-1">
            News
          </a>
          <a href="#" className=" lg:px-7 md:px-4 sm:px-1">
            Allies
          </a>
          <a href="#" className=" lg:px-7 md:px-4 sm:px-1">
            Badges
          </a>
          <a href="#" className=" lg:px-7 md:px-4 sm:px-1">
            WhitePaper
          </a>
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
        <div className="flex justify-center items-center text-white">
          <img src="images/Logo/image116.png" alt="logo" />
          <div className=" flex-col px-2">
            <div className="font-bold">Jeff Kimmel</div>
            <p>Power: 3412</p>
          </div>
          <div className="px-3">
            <img src="images/Icon/down.png" alt="arrow" />
          </div>
        </div>
      </div>
      <div className="layout-boarder"></div>
    </>
  );
};

export default Header;
