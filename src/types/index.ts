export type Game = {
  directory_gif_name: string;
  directory_image_name: string;
  is_live: boolean;
  name: string;
  genres: GenreName[];
};

export type GenreName = {
  genre_name: string;
};
