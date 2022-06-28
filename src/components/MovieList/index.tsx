import { useNavigation } from '@react-navigation/core';
import { NavigationProps } from '../../routes/app.routes';

import { Movie } from "../../services/model";
import { MovieCard } from '../MovieCard';

import { List } from './styles';

interface MovieListProps {
  movies: Movie[]
}

export function MovieList({movies}: MovieListProps) {
  const { navigate } = useNavigation<NavigationProps>();

  function handleMovieDetailPageNavigation(movie: Movie) {
    navigate('MovieDetail', movie)
  }

  return (
    <List>
      {movies.map(item => {
        return (
          <MovieCard 
            key={item.id} 
            title={item.title} 
            image={item.posterUrl} 
            handleOnPress={() => handleMovieDetailPageNavigation(item)}
          />
        );
      })}
    </List>
  );
}