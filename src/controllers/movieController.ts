import { Request, Response } from 'express';
import MovieModel, { Movie } from '../models/movieModel';
export const getAllMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const movies: Movie[] = await MovieModel.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server error: Unable to fetch movies' });
  }
};

export const searchMovies = async (req: Request, res: Response): Promise<void> => {
  const query: string = req.query.q as string;
  try {
    const movies: Movie[] = await MovieModel.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { genre: { $regex: query, $options: 'i' } },
      ],
    });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server error: Unable to search movies' });
  }
};
export const addMovie = async (req: Request, res: Response): Promise<void> => {
  const { title, genre, rating, streamingLink } = req.body;
  try {
    const newMovie: Movie = new MovieModel({ title, genre, rating, streamingLink });
    await newMovie.save();
    res.status(201).json({ message: 'Movie added successfully', movie: newMovie });
  } catch (error) {
    res.status(500).json({ message: 'Server error: Unable to add movie' });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, genre, rating, streamingLink } = req.body;
  
    try {
      const updatedMovie = await MovieModel.findByIdAndUpdate(
        id,
        { title, genre, rating, streamingLink },
        { new: true } 
      );
  
      if (!updatedMovie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
  
      return res.json({ message: 'Movie updated successfully', updatedMovie });
    } catch (error) {
      console.error('Error updating movie:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  const movieId: string = req.params.id;
  try {
    const deletedMovie: Movie | null = await MovieModel.findByIdAndDelete(movieId);
    if (deletedMovie) {
      res.status(200).json({ message: 'Movie deleted successfully' });
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error: Unable to delete movie' });
  }
};
