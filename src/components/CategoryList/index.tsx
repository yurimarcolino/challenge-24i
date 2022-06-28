import React, { useEffect, useState } from "react";
import { getMovies } from "../../services/movies";
import { Carousel } from "../../services/model";
import { MovieList } from '../MovieList';

import {Content, CarouselTitle} from './styles';

export function CategoryList() {
  const [data, setData] = useState<Carousel>();

  useEffect(() => {
    (async () => {
      const response = await getMovies();
      setData(response);
    })();
  },[])
  
  return(
    <>
      {data?.carousels.map(carousel => {
        return (
          <Content key={carousel.title}>
            <CarouselTitle>{carousel.title}</CarouselTitle>
            <MovieList movies={carousel.items}/>
          </Content>
        )
      })}
    </>
  );
}