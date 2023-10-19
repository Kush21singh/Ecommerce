import React, { useState, useEffect } from 'react';
import Loader from './Loader'; // Import your Loader component

function Product() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newMovie, setNewMovie] = useState({
    title: '',
    openingText: '',
    releaseDate: '',
  });
  // State to manage the visibility of the form
  const [isFormVisible, setIsFormVisible] = useState(true); // Set it to true to display the form

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('New movie data:', newMovie);
    setNewMovie({ title: '', openingText: '', releaseDate: '' });
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:5000/movies');
      const data = await response.json();
      setMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching movie data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
      {isFormVisible && (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="title"
            value={newMovie.title}
            onChange={handleFormChange}
            placeholder="Movie Title"
          />
          <input
            type="text"
            name="openingText"
            value={newMovie.openingText}
            onChange={handleFormChange}
            placeholder="Opening Text"
          />
          <input
            type="date"
            name="releaseDate"
            value={newMovie.releaseDate}
            onChange={handleFormChange}
          />
          <button type="submit">Add Movie</button>
        </form>
      )}
    </div>
  );
}

export default Product;
