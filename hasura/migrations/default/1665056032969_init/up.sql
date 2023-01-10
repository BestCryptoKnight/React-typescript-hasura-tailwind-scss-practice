
CREATE TABLE "public"."games" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "is_live" Boolean NOT NULL, "directory_image_name" Text NOT NULL, "directory_gif_name" Text NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."game_platform_types" ("platform_name" Text NOT NULL, PRIMARY KEY ("platform_name") );

CREATE TABLE "public"."game_genres" ("genre_name" Text NOT NULL, PRIMARY KEY ("genre_name") );

INSERT INTO "public"."game_genres"("genre_name") VALUES (E'SANDBOX');

INSERT INTO "public"."game_genres"("genre_name") VALUES (E'RTS');

INSERT INTO "public"."game_genres"("genre_name") VALUES (E'FPS');

INSERT INTO "public"."game_genres"("genre_name") VALUES (E'TPS');

INSERT INTO "public"."game_genres"("genre_name") VALUES (E'RPG');

INSERT INTO "public"."game_genres"("genre_name") VALUES (E'ARPG');

INSERT INTO "public"."game_genres"("genre_name") VALUES (E'MOBA');

INSERT INTO "public"."game_genres"("genre_name") VALUES (E'SIMULATION');

INSERT INTO "public"."game_genres"("genre_name") VALUES (E'PUZZLE');

INSERT INTO "public"."game_genres"("genre_name") VALUES (E'PLATFORMER');

alter table "public"."game_genres" rename to "game_genre_types";

CREATE TABLE "public"."game_genres" ("game_id" uuid NOT NULL, "genre_name" Text NOT NULL, PRIMARY KEY ("game_id","genre_name") );

alter table "public"."game_genres"
  add constraint "game_genres_genre_name_fkey"
  foreign key ("genre_name")
  references "public"."game_genre_types"
  ("genre_name") on update restrict on delete restrict;

CREATE TABLE "public"."game_platforms" ("game_id" uuid NOT NULL, "platform_name" text NOT NULL, PRIMARY KEY ("game_id","platform_name") , FOREIGN KEY ("platform_name") REFERENCES "public"."game_platform_types"("platform_name") ON UPDATE restrict ON DELETE restrict);

alter table "public"."game_platforms"
  add constraint "game_platforms_game_id_fkey"
  foreign key ("game_id")
  references "public"."games"
  ("id") on update cascade on delete cascade;

alter table "public"."game_genres"
  add constraint "game_genres_game_id_fkey"
  foreign key ("game_id")
  references "public"."games"
  ("id") on update cascade on delete cascade;

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'53cf398f-1345-4478-90a0-bee555afaf9d', E'Stella Fantasy', false, E'stella_fantasy.jpg', E'stella_fantasy.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'd6e41289-a475-4016-b132-5e67f7e03ba2', E'Phantom Galaxies', false, E'phantom_galaxies.jpg', E'phantom_galaxies.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'c82296f4-0761-4722-b982-c647a0d558ae', E'Alien Worlds', false, E'alien_worlds.jpeg', E'alien_worlds.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'36df33c0-2a65-4e63-bb57-0ff4343a33b1', E'Apeiron', false, E'apeiron.jpeg', E'apeiron.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'1f37f98c-20de-4ab5-bbef-b846f4b0e2a1', E'Axie Infinity', true, E'axie_infinity.png', E'axie_infinity.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'd4339871-05ac-4a60-9a11-fc6309000e59', E'Evaverse', false, E'evaverse.jpeg', E'evaverse.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'fdc8f561-8397-4734-b84a-d63d460c157b', E'Gods Unchained', true, E'gods_unchained.jpeg', E'gods_unchained.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'e2e5eb6f-c8d3-493a-8a3f-43e1cd3f3cad', E'Guild of Guardians', false, E'guild_of_guardians.jpeg', E'guild_of_guardians.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'0a01f422-f28b-4d53-9790-c0c2d437e61f', E'Illuvium', false, E'illuvium.jpeg', E'illuvium.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'45a98447-804e-4de9-8808-b506bc5e2605', E'Mirandus', false, E'mirandus.jpeg', E'mirandus.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'a5d1dbec-5504-497a-847c-61ba7cf5aaa2', E'Neon District', false, E'neon_district.jpeg', E'neon_district.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'f1f03c20-5f52-4ecc-aba2-96bf829ac307', E'Pikaster', false, E'pikaster.jpeg', E'pikaster.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'18d72c3e-c793-4cd5-8cc2-57dafdf790d3', E'Polygonum', false, E'polygonum.jpeg', E'polygonum.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'9aad6bd8-0a2d-451e-a284-fc960314ab38', E'Rebel Bots', false, E'rebel_bots.jpeg', E'rebel_bots.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'af5e0e30-3b6a-465b-8b1c-2318c69a6d38', E'Seoul Stars', false, E'seoul_stars.jpeg', E'seoul_stars.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'59b0f255-0940-40a0-b01b-de0586565210', E'The Harvest', false, E'the_harvest.jpeg', E'the_harvest.gif');

INSERT INTO "public"."games"("id", "name", "is_live", "directory_image_name", "directory_gif_name") VALUES (E'4f198045-59cc-44f5-b2f7-ffa8ccbbd30a', E'Tiny Colony', false, E'tiny_colony.jpeg', E'tony_colony.gif');

INSERT INTO "public"."game_platform_types"("platform_name") VALUES (E'WINDOWS');

INSERT INTO "public"."game_platform_types"("platform_name") VALUES (E'MAC');
