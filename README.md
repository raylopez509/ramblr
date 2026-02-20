## About

This is a blogging app that uses React for the frontend, expressJS for the backend, and PostgreSQL in Docker for the database.
It can read, create, update, and delete posts that are created.

## Setting Up PostgreSQL Server and Web Page Server

The PostgreSQL Server is setup in Docker so you must have that installed in order to set it up

git clone https://github.com/raylopez509/ramblr
cd ramblr
cp .env.example .env
docker compose up

After that finishes, in another terminal in same directory:
npm run dev

And it should run now
