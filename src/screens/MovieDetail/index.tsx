import { MovieInfo } from '../../components/MovieInfo';
import { MovieHeader } from '../../components/MovieHeader';
import { Movie } from '../../services/model';
import AppLoading from 'expo-app-loading';

import {
  Container,
} from './styles';
import { getMoviesById } from '../../services/movies';
import { useEffect, useState } from 'react';

interface MovieDetailProps {
  route: {
    params: {
      id: number
    }
  }
}

export function MovieDetail({route}: MovieDetailProps) { 
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    (async() => {
      const response = await getMoviesById(route.params.id);
      setMovie(response);
    })()
  },[])
  
  if(!movie) {
    return <AppLoading />
  }

  return (
    <Container>
      <MovieHeader movie={movie}/>
      <MovieInfo movie={movie}/>
    </Container>
  );
}
