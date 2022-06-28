import db from './db.json';
import { Carousel, Movie } from './model';

export function getMovies():Promise<Carousel> {
  return new Promise((resolve) => {
    return resolve(db);
  });
}

export function getMoviesById(id: number): Promise<Movie | undefined> {
  
  return new Promise((resolve) => {
    let movies: Movie[] = []

    db.carousels.forEach(carousel => { 
      movies = [...movies, ...carousel.items]  
    })  
    
    return resolve(movies.find(movie => movie.id === id));
  });
}