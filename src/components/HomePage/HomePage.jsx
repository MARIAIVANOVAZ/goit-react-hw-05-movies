import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchMovies } from 'Services/fetch';

import s from './HomePage.module.css';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  // const fetchMovies = () => {
  //   FetchMovies()
  //     .then(response => response.json())
  //     .then(films => setFilms([...films.results]));
  // };

  useEffect(() => {
    const fetchMovies = () => {
      FetchMovies()
        .then(response => response.json())
        .then(films => setFilms([...films.results]));
    };
    fetchMovies();
  });
  // fetchMovies();

  return (
    <>
      <h3 className={s.title}>Tranding today</h3>
      <ul className={s.gallery}>
        {films.map(
          ({ title, id, backdrop_path }) =>
            title && (
              <li key={id} className={s.card}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
                  alt={title}
                />
                <Link className={s.name} to={`/movies/${id}`}>
                  {title}
                </Link>
              </li>
            )
        )}
      </ul>
    </>
  );
}
