import {useNavigate} from 'react-router-dom';
import {Film} from '../../types/film';
import FilmList from '../../components/film-list/film-list';
import {AppRoute} from '../../consts';
import GenreFilter from '../../components/genre-filter/genre-filter';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {loadFilmsByGenre} from '../../store/action';
import ShowMore from '../../components/show-more/show-more';

type MainPageProps = {
  filmName: string;
  filmGenre: string;
  filmReleaseDate: string;
  films:Film[];
}

function MainPage({filmName,filmGenre,filmReleaseDate, films}:MainPageProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const genre = useAppSelector((state) => state.genre);
  const countOfFilms = useAppSelector((state) => state.countFilmsToShow);
  const filmsByGenre = useAppSelector((state) => state.films);
  useEffect(()=>{
    dispatch(loadFilmsByGenre());
  },[genre]);
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width={63}
                  height={63}
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmGenre}</span>
                <span className="film-card__year">{filmReleaseDate}</span>
              </p>
              <div className="film-card__buttons">
                <button onClick={()=>navigate(AppRoute.Player)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button onClick={()=>navigate(AppRoute.MyList)} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My List</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreFilter/>
          <div className="catalog__films-list">
            <FilmList films={filmsByGenre} countFilmsToSHow={countOfFilms}/>
          </div>
          {(filmsByGenre.length > countOfFilms) && <ShowMore/>}
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
