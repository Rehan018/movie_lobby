import request from 'supertest';
import '../setupTests';
import app from '../../src/app'; 

describe('Movie Routes Integration Tests', () => {
  test('GET /api/movies should return all movies', async () => {
    const response = await request(app).get('/api/movies');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });

});
