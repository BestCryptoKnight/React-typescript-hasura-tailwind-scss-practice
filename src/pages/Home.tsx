import React, { useState, useEffect } from "react";

import Card from "../components/Card";
import getGames from "../api/api";
import { getGenreNames } from "../api/api";
import { Game, GenreName } from "../types";
import Pagination from "../components/Pagination/Pagination";
import { AiOutlineSearch } from "react-icons/ai";

import GameSelector from "../components/Selector";
import useDebounce from "../hooks/useDebounce";

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
  const perPage: number = 12;

  const debouncedSearchTerm = useDebounce(searchTerm, 500); 

  // Error exception
  const [errorResult, setErrorResult] = useState<string>("No Data");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getGenreNames();
        if (data) {
          setGenres(data.game_genre_types);
        }
      } catch (error) {
        console.log(error);
        setErrorResult("Server disconnected");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
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
      } catch (error) {
        console.log(error);
        setErrorResult("Server disconnected");
      }
    })();
  }, [debouncedSearchTerm, genre, current, toggleState, perPage]);

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
                className=" search-input text-white border border-solid border-border2"
                placeholder="Search for game"
                onChange={onSearchTermChange}
                value={searchTerm}
              />
            </div>
          </div>
          <GameSelector genres={genres} onGenreOptionChange={onGenreOptionChange}/>
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
        {games.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {games.map((game) => {
              return <Card key={game.name} game={game} />;
            })}
          </div>
        ) : (
          <div className="flex justify-center">
            <p className=" gradient">{errorResult}</p>
          </div>
        )}
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
