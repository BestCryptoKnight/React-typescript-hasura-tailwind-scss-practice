import React from "react";

const Header = () => {
    return (
        <>
            <div className="flex justify-around items-center h-[95px] z-10">
                <img src="images/Logo/Group5626.png" alt="logo"/>
                <div className="flex text-white font-sans">
                    <div className=" lg:px-7 md:px-4 sm:px-1">Games</div>
                    <div className=" lg:px-7 md:px-4 sm:px-1">News</div>
                    <div className=" lg:px-7 md:px-4 sm:px-1">Allies</div>
                    <div className=" lg:px-7 md:px-4 sm:px-1">Badges</div>
                    <div className=" lg:px-7 md:px-4 sm:px-1">WhitePaper</div>
                    <div className=" lg:px-5 md:px-3 sm:px-1"><img src="images/Icon/twitter.png" alt="twitter"/></div>
                    <div className=" lg:px-5 md:px-3 sm:px-1"><img src="images/Icon/facebook.png" alt="facebook"/></div>
                    <div className=" lg:px-5 md:px-3 sm:px-1"><img src="images/Icon/discord.png" alt="discord"/></div>
                </div>
                <div className="flex justify-center items-center text-white">
                    <img src="images/Logo/image116.png" alt="logo"/>
                    <div className=" flex-col px-2">
                        <div className="font-bold">Jeff Kimmel</div>
                        <p>Power: 3412</p>
                    </div>
                    <div className="px-3">
                        <img src="images/Icon/down.png" alt="arrow"/>
                    </div>
                </div>
            </div>
            <div className="layout-boarder"></div>
        </>
    )
}

export default Header;