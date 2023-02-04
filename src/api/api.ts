import axios from "axios";

type SearchOption = {
  searchTerm?: string;
  genre?: string;
  offset: number;
  limit: number;
  isAlive: boolean;
};

const headers = {
  "Content-Type": "application/json",
  "x-hasura-admin-secret": process.env.REACT_APP_HASURA_KEY,
};

export const getGenreNames = async () => {
  const gQuery = {
    query: `query MyQuery {
            game_genre_types {
              genre_name
            }
        }
        `,
  };

  const { data } = await axios.post(
    process.env.REACT_APP_HASURA_URL || "http://localhost:8080/v1/graphql",
    gQuery,
    {
      headers: headers,
    }
  );
  return data;
};

const getGames = async ({
  searchTerm,
  genre,
  offset,
  limit,
  isAlive,
}: SearchOption) => {
  const nameSearchToken = searchTerm ? `name: {_ilike: "%${searchTerm}%"}` : "";
  const genreSearchToken = genre ? `genres: {genre_name: {_eq: ${genre}}}` : "";
  const isAliveToken = `is_live: {_eq: ${isAlive}}`;
  const gQuery = {
    query: `query MyQuery {
        games (offset: ${offset}, limit: ${limit}, where: {${nameSearchToken}, ${genreSearchToken}, ${isAliveToken}}){
          directory_gif_name
          directory_image_name
          is_live
          name
          genres {
            genre_name
          }
        }
        games_aggregate (where: {${nameSearchToken}, ${genreSearchToken}, ${isAliveToken}}){
          aggregate {
            count
          }
        }
      }`,
  };

  const { data } = await axios.post(
    "http://localhost:8080/v1/graphql",
    gQuery,
    {
      headers: headers,
    }
  );
  return data;
};

export default getGames;
