# Movie Database

A responsive React movie database that allows users to search for movies, view detailed information, and rate movies using data from the OMDb API.

## Live Demo

[View the Live Demo] (https://ramarbell.github.io/movie-database-app/)

## Screenshot

<img width="1428" height="677" alt="Movie Database search results showing movie cards" src="https://github.com/user-attachments/assets/3bb96abc-c149-48d2-a41e-63763ff34329" />

## Features

- Search for movies using the OMDb API
- View detailed movie information
- Rate movies
- Save favourite movies
- Track watched movies
- Persist favourites and watched movies between sessions
- Cache search results to reduce unnecessary API requests

## Built With

- React
- React Router
- JavaScript (ES6+)
- CSS
- OMDb API
- Vite

## How It Works

The Movie Database fetches data from the OMDb API. Search results are handled by a custom hook, which is responsible for the API requests as well as the loading and error states. In addition, the search results are cached using sessionStorage to avoid unnecessary repeat API requests, while favourites and watched movies are persisted using localStorage. A separate custom hook is responsible for the movie details. React Router handles navigation between search results, movie details, favourites, and watched movies.

## Running Locally

1. Clone the repository.
2. Install the dependencies:

   npm install

3. Create a `.env` file and add your OMDb API key:

   VITE_OMDB_API_KEY=your_api_key_here

4. Start the development server:

   npm run dev

## What I Learned

This project taught me that building larger applications is less about individual technologies and more about how those technologies work together.

## Future Improvements

- Improve the search experience by adding filters to help users narrow down results.
- Expand the favourites functionality by adding a separate watchlist for movies users want to watch later.
