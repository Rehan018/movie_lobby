import { Request, Response } from 'express';
import '../setupTests';
import * as movieController from '../../src/controllers/movieController';
import MovieModel, { Movie } from '../../src/models/movieModel';

describe('Movie Controller Unit Tests', () => {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getAllMovies function should return all movies', async () => {
    const mockMovies = [
      { title: 'Movie 1', genre: ['Action'], rating: 7.5, streamingLink: 'https://example.com/movie1' },
      { title: 'Movie 2', genre: ['Comedy'], rating: 8.2, streamingLink: 'https://example.com/movie2' }
    ] as Movie[];
    jest.spyOn(MovieModel, 'find').mockResolvedValue(mockMovies);
    await movieController.getAllMovies(req, res);
    expect(res.json).toHaveBeenCalledWith(mockMovies);
  });

});
