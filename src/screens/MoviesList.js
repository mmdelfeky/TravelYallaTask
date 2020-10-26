import React from 'react';
import {AppList, AppView} from '../common';
import AddMovie from '../components/moviesList/AddMovie';
import MovieCard from '../components/moviesList/MovieCard';

const MoviesList = ({
  route: {
    params: {movies, name},
  },
}) => {
  return (
    <AppView backgroundColor="rgb(245,245,245)" flex stretch>
      <AddMovie {...{name}} />

      <AppList
        data={movies}
        rowRenderer={(movie) => <MovieCard {...movie} />}
      />
    </AppView>
  );
};

export default MoviesList;
