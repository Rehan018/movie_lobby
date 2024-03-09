### Task Details:
- **Objective**: Build an API for a movie lobby for OTT applications using TypeScript, Express.js, and MongoDB.
- **Features**:
  1. List all the movies in the lobby
  2. Search for a movie by title or genre
  3. Add a new movie to the lobby (requires "admin" role)
  4. Update an existing movie's information (requires "admin" role)
  5. Delete a movie from the lobby (requires "admin" role)

### Technology Stack Used:
- **Language**: TypeScript
- **Backend Framework**: Express.js
- **Database**: MongoDB
- **ODM/ORM**: Mongoose
- **Testing Framework**: Jest
- **Linting**: ESLint
- **Dependency Management**: npm

### Approach:
1. **Folder Structure**:
   - Separated into `models`, `controllers`, `routes`, `middleware`, `services`.
   - Each responsible for specific functionality, promoting separation of concerns.

2. **Development Steps**:
   - Set up project dependencies: Installed required packages (`express`, `mongoose`, etc.) via npm.
   - Implemented core functionalities:
     - Defined Mongoose schema for movies.
     - Implemented CRUD operations for movies in controllers.
     - Created routes to handle incoming requests.
   - Set up error handling middleware.
   - Established database connection.
   - Implemented tests using Jest for each endpoint.

3. **API Endpoints**:
   - Detailed in `movieRoutes.ts`:
     - `GET /api/movies`
     - `GET /api/search?q={query}`
     - `POST /api/movies`
     - `PUT /api/movies/:id`
     - `DELETE /api/movies/:id`.

### Here's an example of data you can use for API testing:
1. **List all the movies in the lobby**:
   - Method: GET
   - URL: `http://localhost:3000/api/movies`
   - Expected Response:
     ```json
     [
       {
         "_id": "65ebf6c6dd200a7815d5881c",
         "title": "Inception",
         "genre": ["Science Fiction"],
         "rating": 8.8,
         "streamingLink": "https://example.com/inception"
       },
       {
         "_id": "65ebf6c6dd200a7815d5881d",
         "title": "The Shawshank Redemption",
         "genre": ["Drama"],
         "rating": 9.3,
         "streamingLink": "https://example.com/shawshank"
       },
     ]
     ```

2. **Search for a movie by title or genre**:
   - Method: GET
   - URL: `http://localhost:3000/api/search?q=Inception`
   - Expected Response:
     ```json
     [
       {
         "_id": "65ebf6c6dd200a7815d5881c",
         "title": "Inception",
         "genre": ["Science Fiction"],
         "rating": 8.8,
         "streamingLink": "https://example.com/inception"
       }
     ]
     ```

3. **Add a new movie to the lobby**:
   - Method: POST
   - URL: `http://localhost:3000/api/movies`
   - Request Body:
     ```json
     {
       "title": "The Dark Knight",
       "genre": ["Action", "Drama"],
       "rating": 9.0,
       "streamingLink": "https://example.com/darkknight"
     }
     ```
   - Expected Response:
     ```json
     {
       "message": "Movie added successfully",
       "movie": {
         "_id": "65ebf6c6dd200a7815d5881e",
         "title": "The Dark Knight",
         "genre": ["Action", "Drama"],
         "rating": 9.0,
         "streamingLink": "https://example.com/darkknight"
       }
     }
     ```

4. **Update an existing movie information**:
   - Method: PUT
   - URL: `http://localhost:3000/api/movies/65ebf6c6dd200a7815d5881e` (Replace with the ID of the movie you want to update)
   - Request Body:
     ```json
     {
       "title": "The Dark Knight Rises",
       "genre": ["Action", "Drama"],
       "rating": 8.8,
       "streamingLink": "https://example.com/darkknightrises"
     }
     ```
   - Expected Response:
     ```json
     {
       "message": "Movie updated successfully",
       "updatedMovie": {
         "_id": "65ebf6c6dd200a7815d5881e",
         "title": "The Dark Knight Rises",
         "genre": ["Action", "Drama"],
         "rating": 8.8,
         "streamingLink": "https://example.com/darkknightrises"
       }
     }
     ```

5. **Delete a movie from the lobby**:
   - Method: DELETE
   - URL: `http://localhost:3000/api/movies/65ebf6c6dd200a7815d5881e` (Replace with the ID of the movie you want to delete)
   - Expected Response:
     ```json
     {
       "message": "Movie deleted successfully",
       "deletedMovie": {
         "_id": "65ebf6c6dd200a7815d5881e",
         "title": "The Dark Knight Rises",
         "genre": ["Action", "Drama"],
         "rating": 8.8,
         "streamingLink": "https://example.com/darkknightrises"
       }
     }
     ```

4. **Sample Data**:
   - Provided sample movie data for testing each endpoint.
   - Used Postman for API testing.

5. **Installation and Setup**:
   - Detailed instructions provided in `README.md`:
     - Install dependencies: `npm install`
     - Start server: `npm start`
     - Access API endpoints using Postman or curl.
     - Testing: Run `npm test` to execute Jest test suite.

### Conclusion:
- **Achievements**:
  - Implemented a fully functional RESTful API for a movie lobby with CRUD operations.
  - Utilized TypeScript to enforce type safety and improve code quality.
  - Incorporated MongoDB for data storage, enhancing scalability and flexibility.
  - Employed Jest for testing to ensure code reliability and robustness.
- **Challenges**:
  - Handling asynchronous operations with MongoDB and Mongoose.
  - Integrating TypeScript with Express.js and Jest.
- **Future Enhancements**:
  - Implement authentication and authorization for admin roles.
  - Add pagination and filtering options for listing movies.
  - Improve error handling and validation.