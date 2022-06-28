import { Movie } from '../../services/model';
import { Thumbnail } from '../Thumbnail';

import {
  Header,
  Title
} from './styles'

interface MovieHeaderProps {
  movie: Movie
}

export function MovieHeader({movie}: MovieHeaderProps) {
  return (
    <Header>
        <Thumbnail imageUri={movie.posterUrl} size="LARGE"/>
        <Title 
          numberOfLines={1} 
          adjustsFontSizeToFit
        >
          {`${movie.title} (${movie.year})`}
        </Title>
      </Header>
  );
}