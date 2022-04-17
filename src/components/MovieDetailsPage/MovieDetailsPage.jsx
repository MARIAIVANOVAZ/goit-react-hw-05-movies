import { Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { id } = useParams(null);
  const [film, setFilm] = useState({});
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');
  console.log(film);
  const navigate = useNavigate();

  //   const releaseDate = ({ release_date }) => release_date.slice(0, 4);
  //   console.log(releaseDate);
  useEffect(() => {
    const fetchMovie = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=bb0c5b52be3456598a7badc1793c41c3&language=en-US`
      )
        .then(response => response.json())
        .then(film => {
          setFilm(film);
          setGenres(film.genres.map(genre => genre.name).join(', '));
          setDate(film.release_date.slice(0, 4));
        });
    };
    fetchMovie();
  }, [id]);

  const { title, vote_average, overview, backdrop_path } = film;

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft></AiOutlineArrowLeft>Go back
      </button>
      {/* <Link to="/">
       Go back
      </Link> */}
      <hr />
      <div className={s.position}>
        <div>
          <img
            className={s.image}
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={title}
          />
        </div>
        <div className={s.about}>
          <h2>
            {title} ({date})
          </h2>
          <p className={s.title}>
            User score : <span className={s.description}>{vote_average}</span>
          </p>
          <p className={s.title}>
            Overview: <span className={s.description}>{overview}</span>
          </p>
          <p className={s.title}>
            Genres: <span className={s.description}>{genres}</span>
          </p>
        </div>
      </div>
      <hr />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`/movies/${id}/cast`} className={s.additional}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`} className={s.additional}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet></Outlet>
    </div>
  );
}
