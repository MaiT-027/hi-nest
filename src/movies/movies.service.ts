import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id == id);
    if (!movie)
      throw new NotFoundException(`Movie with the ID ${id} is not found`);
    return movie;
  }

  deleteOne(id: number): boolean {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id != +id);
    return true;
  }

  create(movie: Movie) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movie,
    });
  }

  update(id: number, movieData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...movieData });
  }
}
