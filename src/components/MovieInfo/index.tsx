import { Movie } from '../../services/model';
import { convertMinsToHrsMins } from '../../utils/convertMinsToHrsMins';
import {
  Content,
  Sinopse,
  MovieDetailsContainer,
  MovieDetailsInfo,
  MovieDetailsData

} from './styles'

interface MovieDetailProps {
  movie: Movie 
}

export function MovieInfo({movie}: MovieDetailProps) {
  const movieInfo: Record<string, string> = {
    Genres: movie.genres.join(', '),
    Runtime: convertMinsToHrsMins(Number(movie.duration)),
    Director: movie.director
  }
  
  return (
    <Content>
        <Sinopse textBreakStrategy='highQuality'>{movie.plot}</Sinopse>
        {Object.keys(movieInfo).map(info => {
          return(
            <MovieDetailsContainer key={info}>
              <MovieDetailsInfo>{info}</MovieDetailsInfo>
              <MovieDetailsData>{movieInfo[info]}</MovieDetailsData>
            </MovieDetailsContainer>
          );
        })}
      </Content>
  );
}