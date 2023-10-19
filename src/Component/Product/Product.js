import React, { useState, useEffect, useMemo } from 'react';
import Loader from './Loader'; // Import your Loader component

function Product() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Make the API call to fetch movies when the component mounts
    fetch('your_api_url_here')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // An empty dependency array ensures this effect runs only once when the component mounts

  // Use useMemo to memoize the list of movie components
  const movieComponents = useMemo(() => {
    return movies.map((movie) => (
      <div key={movie.id}>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
      </div>
    ));
  }, [movies]);

  return (
    <div>
      {isLoading ? <Loader /> : movieComponents}
      {/* Display the Loader component conditionally */}
    </div>
  );
}

export default Product;
