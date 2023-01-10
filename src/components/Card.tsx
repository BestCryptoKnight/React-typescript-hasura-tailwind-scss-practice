import React from "react";

import { Game } from "../types";

type CardProp = {
  game: Game;
};

const Card = (props: CardProp) => {
  const { game } = props;
  return (
    <div
      className="card-wrap group bg-cardBackground "
    >
      <div className="flex-col-center group-hover:hidden">
        <img
          className=" w-full h-[160px] "
          src={`images/${game.directory_image_name}`}
          alt="card"
        />
        <div className=" pt-5 text-sm text-green">
          {game.is_live ? (
            "Live"
          ) : (
            <span className=" text-red">Not Live</span>
          )}
        </div>
        <div className=" pt-1 text-xl text-white">{game.name}</div>
        <div className=" pt-2 text-base text-lightYellow">
          {game.genres.map((genre) => {
            return genre.genre_name + ", ";
          })}
        </div>
      </div>
      <div className="flex-col-center hidden group-hover:block">
        <img src={`images/${game.directory_gif_name}`} alt="cardgif" />
        <div className=" pt-1 text-xl text-white">{game.name}</div>
        <div className=" pt-2 text-base text-lightYellow">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et aliqua. suspendisse
        </div>
      </div>
    </div>
  );
};

export default Card;
