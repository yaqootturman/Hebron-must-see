BEGIN;

drop table if exists places, guides, users, arabic_words, guides_reviews, places_reviews
CASCADE;

create table places
(
place_id serial primary key,
name varchar(100) not null,
type text not null,
image1 text not null,
image2 text,
image3 text,
description text,
availability text not null,
price text not null,
address text not null
);



create table places_reviews
(
id serial primary key,
review text not null,
place_id INTEGER,
FOREIGN KEY
(place_id) REFERENCES places (place_id)
);


create table users
(
user_id serial primary key,
name varchar(100) not null,
email text not null,
password text not null
);



create table guides
(
guide_id serial primary key,
type text not null,
photo text not null,
description text not null,
availability text not null,
phone text not null,
age text not null,
user_id INTEGER,
FOREIGN KEY
(user_id) REFERENCES users (user_id)
);


create table guides_reviews
(
id serial primary key,
review text not null,
user_id INTEGER,
FOREIGN KEY
(user_id) REFERENCES users (user_id),
guide_id INTEGER,
FOREIGN KEY
(guide_id) REFERENCES guides (guide_id)
);



create table arabic_words
(
id serial primary key,
arabic text not null,
english text not null,
pronunciation text not null
);



COMMIT;
