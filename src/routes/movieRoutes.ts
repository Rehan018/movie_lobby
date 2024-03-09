import express from 'express';
import * as movieController from '../controllers/movieController';

const router = express.Router();

router.get('/movies', movieController.getAllMovies);
router.get('/search', movieController.searchMovies);
router.post('/movies', movieController.addMovie);
router.put('/movies/:id', movieController.updateMovie);
router.delete('/movies/:id', movieController.deleteMovie);

export default router;
