export interface Movie {
  id: number,
  title: string,
  year: string,
  duration: string,
  genres: string[],
  director: string,
  actors: string,
  plot: string,
  posterUrl: string,
}

export interface Category {
  title: string,
  items: Movie[]
}

export interface Carousel {
  carousels: Category[];
}