import React, { useState, useEffect } from "react";

import Card from "../components/Card";
import getGames from "../api/api";
import { getGenreNames } from "../api/api";
import { Game, GenreName } from "../types";
import Pagination from "../components/Pagination/Pagination";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  const [toggleState, setToggleState] = useState(true);
  const [games, setGames] = useState<Game[]>([]);
  const [genres, setGenres] = useState<GenreName[]>([]);

  // Search
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [genre, setGenre] = useState<string>("");

  // Pagination
  const [current, setCurrent] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [perPage] = useState<number>(12);

  useEffect(() => {
    (async () => {
      const { data } = await getGenreNames();
      if (data) {
        setGenres(data.game_genre_types);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await getGames({
        searchTerm,
        genre,
        isAlive: !toggleState,
        limit: perPage,
        offset: current * perPage,
      });
      if (data) {
        setGames(data.games);
        const newTotal = data.games_aggregate.aggregate.count;
        setTotal(newTotal);
        const newPages = Math.ceil(newTotal / perPage);
        if (newPages < current + 1 && newPages > 0) {
          setCurrent(newPages - 1);
        }
      }
    })();
  }, [searchTerm, genre, current, toggleState, perPage]);

  const onSearchTermChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const onGenreOptionChange = (e: any) => {
    setGenre(e.target.value);
  };

  return (
    <>
      <div className="home">
        <div className="title">Game Directory</div>
        <div className="option-pannel">
          <div className="flex-col items-start">
            <p>Search</p>
            <div className="relative w-full ">
              <div className="search-icon">
                <AiOutlineSearch color="grey" />
              </div>
              <input
                type="text"
                id="search"
                className=" search-input text-white "
                placeholder="Search for game"
                onChange={onSearchTermChange}
                value={searchTerm}
              />
            </div>
          </div>
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
          <div className="flex-col px-[3%]">
            <p className=" text-[#0C1E28]">.</p>
            <div
              className="flex items-center hover:cursor-pointer"
              onClick={() => setToggleState(!toggleState)}
            >
              <img
                src="images/Logo/toggle1.png"
                hidden={toggleState}
                alt="logo"
              />
              <img
                src="images/Logo/toggle2.png"
                hidden={!toggleState}
                alt="logo"
              />
              <span className=" pl-3">
                {toggleState ? "Non" : ""} Live Games
              </span>
            </div>
          </div>
        </div>
        <div className="grid">
          {games.length > 0 
          ?
           games.map((game) => {
            return <Card key={game.name} game={game} />;
          })
          : <p className=" text-4xl">No data</p>
        }
        </div>
        <Pagination
          total={total}
          perPage={perPage}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
    </>
  );
};

export default Home;
