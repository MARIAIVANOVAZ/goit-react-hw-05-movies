import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from 'Services/fetch';
import s from './Cast.module.css';

export default function Cast() {
  const { id } = useParams(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetch = () => {
      fetchCast(id)
        .then(response => response.json())
        .then(items => {
          setCast(items.cast);
        });
    };

    fetch();
  }, [id]);
  console.log(cast);
  // const { profile_path } = cast;
  // if (!profile_path) {
  //  profile_path:  '../../image/NoImageAvailable.jpg';
  // }
  return (
    <ul className={s.gallery}>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          {profile_path ? (
            <img
              className={s.profileFoto}
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
          ) : (
            <img
              className={s.profileFoto}
              src={
                'https://www.hostpapa.com/blog/blog/wp-content/uploads/2019/05/image5.png'
              }
              alt={name}
            />
          )}
          {/* <img
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt={name}
          /> */}
          <h3>{name}</h3>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
