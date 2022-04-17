import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import HomePage from './HomePage/HomePage';
import Navigation from './Navigation/Navigation';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
// import Reviews from './Reviews/Reviews';
// import Cast from './Cast/Cast';
// import MoviesPage from './MoviesPage/MoviesPage';
// import PageNotFound from './PageNotFound/PageNotFound';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage')
);
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
// const PageNotFound = lazy(() => import('./PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Navigation />
      <Suspense fallback="">
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          {/* <Route path="*" element={<PageNotFound />}></Route>
           */}
          <Route path="*" element={<Navigate to="/" />} />

          {/* <Route
          path="/movies/:id/cast"
          element={
            <>
              <MovieDetailsPage />
              <Cast />
            </>
          }
        ></Route> */}
          {/* <Route
          path="/movies/:id/reviews"
          element={
            <>
              <MovieDetailsPage />
              <Reviews />
            </>
          }
        ></Route> */}
        </Routes>
      </Suspense>
    </div>
  );
};
