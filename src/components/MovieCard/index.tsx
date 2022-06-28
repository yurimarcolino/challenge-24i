import { 
  Container,
  MovieTitle,
  Button
} from './styles';

import { Thumbnail } from '../Thumbnail';

interface MovieCardProps {
  image: string,
  title: string,
  handleOnPress: () => void;
}

export function MovieCard ({image, title, handleOnPress}: MovieCardProps) {
  return (
    <Container>
        <Button onPress={handleOnPress}>
          <Thumbnail imageUri={image}/>
        </Button>
        <MovieTitle adjustsFontSizeToFit>
          { title.length < 13
            ? `${title}`
            : `${title.substring(0, 10)}...`
          }
        </MovieTitle>
    </Container>
  );
}