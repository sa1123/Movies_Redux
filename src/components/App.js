import React from "react";
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";
import {StoreContext} from '../index'

class App extends React.Component {
  componentDidMount(){
    this.props.store.subscribe(() => this.forceUpdate());
    this.props.store.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const {movies} = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if(index !== -1) {
      return true;
    }
    return false;
  };

  changeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val))
  }

  render () {
    const {movies, search} = this.props.store.getState();
    const { list, favourites = [], showFavourites = []} = movies;

    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.changeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.changeTab(true)}>Favourites</div>
          </div>

          <div className="list">
            {displayMovies.map((movie) => {
              <MovieCard 
                movie={movie}
                key={movie.imdbID}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}/>
                return null
            })}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No movies to display</div> : null}
        </div>
      </div>
      );
  }
}

class AppWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <App store={store} />}
      </StoreContext.Consumer>
    );
  }
}

export default AppWrapper;