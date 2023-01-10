

DELETE FROM "public"."game_platform_types" WHERE "platform_name" = 'MAC';

DELETE FROM "public"."game_platform_types" WHERE "platform_name" = 'WINDOWS';

DELETE FROM "public"."games" WHERE "id" = '4f198045-59cc-44f5-b2f7-ffa8ccbbd30a';

DELETE FROM "public"."games" WHERE "id" = '59b0f255-0940-40a0-b01b-de0586565210';

DELETE FROM "public"."games" WHERE "id" = '7b97dddc-fb34-4820-b75a-99bff608393c';

DELETE FROM "public"."games" WHERE "id" = 'af5e0e30-3b6a-465b-8b1c-2318c69a6d38';

DELETE FROM "public"."games" WHERE "id" = '9aad6bd8-0a2d-451e-a284-fc960314ab38';

DELETE FROM "public"."games" WHERE "id" = '18d72c3e-c793-4cd5-8cc2-57dafdf790d3';

DELETE FROM "public"."games" WHERE "id" = 'f1f03c20-5f52-4ecc-aba2-96bf829ac307';

DELETE FROM "public"."games" WHERE "id" = 'a5d1dbec-5504-497a-847c-61ba7cf5aaa2';

DELETE FROM "public"."games" WHERE "id" = '45a98447-804e-4de9-8808-b506bc5e2605';

DELETE FROM "public"."games" WHERE "id" = '0a01f422-f28b-4d53-9790-c0c2d437e61f';

DELETE FROM "public"."games" WHERE "id" = 'e2e5eb6f-c8d3-493a-8a3f-43e1cd3f3cad';

DELETE FROM "public"."games" WHERE "id" = 'fdc8f561-8397-4734-b84a-d63d460c157b';

DELETE FROM "public"."games" WHERE "id" = 'd4339871-05ac-4a60-9a11-fc6309000e59';

DELETE FROM "public"."games" WHERE "id" = '1f37f98c-20de-4ab5-bbef-b846f4b0e2a1';

DELETE FROM "public"."games" WHERE "id" = '36df33c0-2a65-4e63-bb57-0ff4343a33b1';

DELETE FROM "public"."games" WHERE "id" = 'c82296f4-0761-4722-b982-c647a0d558ae';

DELETE FROM "public"."games" WHERE "id" = 'd6e41289-a475-4016-b132-5e67f7e03ba2';

DELETE FROM "public"."games" WHERE "id" = '53cf398f-1345-4478-90a0-bee555afaf9d';

alter table "public"."game_genres" drop constraint "game_genres_game_id_fkey";

alter table "public"."game_platforms" drop constraint "game_platforms_game_id_fkey";

DROP TABLE "public"."game_platforms";

alter table "public"."game_genres" drop constraint "game_genres_genre_name_fkey";

DROP TABLE "public"."game_genres";

alter table "public"."game_genre_types" rename to "game_genres";

DELETE FROM "public"."game_genres" WHERE "genre_name" = 'PLATFORMER';

DELETE FROM "public"."game_genres" WHERE "genre_name" = 'Puzzle';

DELETE FROM "public"."game_genres" WHERE "genre_name" = 'Simulation';

DELETE FROM "public"."game_genres" WHERE "genre_name" = 'MOBA';

DELETE FROM "public"."game_genres" WHERE "genre_name" = 'ARPG';

DELETE FROM "public"."game_genres" WHERE "genre_name" = 'RPG';

DELETE FROM "public"."game_genres" WHERE "genre_name" = 'TPS';

DELETE FROM "public"."game_genres" WHERE "genre_name" = 'FPS';

DELETE FROM "public"."game_genres" WHERE "genre_name" = 'RTS';

DELETE FROM "public"."game_genres" WHERE "genre_name" = 'SANDBOX';

DROP TABLE "public"."game_genres";

DROP TABLE "public"."game_platform_types";

DROP TABLE "public"."games";
