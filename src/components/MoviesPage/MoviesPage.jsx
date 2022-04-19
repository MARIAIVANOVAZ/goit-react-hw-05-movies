import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import s from './MoviesPage.module.css';
import { fetchSearchMovie } from '../../Services/fetch';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      alert('Enter your search query!');
      return;
    }
    if (!query) {
      return;
    }

    const fetch = () => {
      setLoading(true);

      fetchSearchMovie(query)
        .then(response => response.json())
        .then(films => {
          setFilms([...films.results]);
        })
        .catch(error => error.message)
        .finally(() => {
          setLoading(false);
        });
    };

    fetch();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({
      query: e.currentTarget.elements.query.value.trim(),
    });

    console.log(e.currentTarget.elements.query.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="query"
            //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter your search query"
            // onChange={handleInputChange}
          />
        </label>
        <button type="submit">Search</button>
        {loading && <h4>Loading...</h4>}
      </form>

      {films.length === 0 && !loading && <h4>Nothing found</h4>}
      <div>
        <ul className={s.gallery}>
          {films.map(
            ({ title, id, backdrop_path }) =>
              title && (
                <li key={id} className={s.card}>
                  {backdrop_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${backdrop_path}`}
                      alt={title}
                    />
                  ) : (
                    <img
                      src={
                        'https://www.hostpapa.com/blog/blog/wp-content/uploads/2019/05/image5.png'
                      }
                      alt={title}
                      width="200px"
                    />
                  )}
                  {/* <img
                    src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
                    alt={title}
                  /> */}
                  <Link className={s.name} to={`/movies/${id}`}>
                    {title}
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
}
