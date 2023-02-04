import React from "react";
import { GenreName } from "../types";

type GameSelectorProps = {
    genres: GenreName[];
    onGenreOptionChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const GameSelector = (props:GameSelectorProps ) => {
  const { genres, onGenreOptionChange }= props;

  return (
    <div className="flex-col items-start px-[3%]">
      <p>Game Genre</p>
      <div className="relative w-full lg:max-w-sm">
        <select
          placeholder="Strategy"
          className="select-input"
          onChange={onGenreOptionChange}
        >
          {genres.map((genre) => {
            return (
              <option
                value={genre.genre_name}
                key={genre.genre_name}
                className="select-option"
              >
                {genre.genre_name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default GameSelector;
