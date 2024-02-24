// src/components/MovieDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/movie/${id}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [id]);


  return (
    <div>
      {movieDetails ? (
        <div style={{padding: '4rem'}}>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.tagline}</p>
          <div style={{display: 'flex', gap: '2rem'}} className='details'>
            <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} alt={movieDetails.title} />
            <div style={{fontSize: '20px', textAlign: 'justify'}}>
              <p>{movieDetails.overview}</p>
              <p>Género: {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
              <p>Fecha de lanzamiento: {movieDetails.release_date}</p>
              <p>Duración: {movieDetails.runtime} minutos</p> 
              <Link to="/">Regresar</Link>
            </div>
          </div>
        </div>
      ) : (
        
        <p>Cargando detalles...</p>
      )}
    </div>
  );
};

export default MovieDetail;
