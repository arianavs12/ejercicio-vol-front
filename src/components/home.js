import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import { Autocomplete } from '@mui/material';

const Home = ({ darkMode }) => {
  const navigate = useNavigate();
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await axios.get('http://localhost:8000/api/popular');
      setPopularMovies(response.data);
    };

    fetchPopularMovies();
  }, []);

  const handleSearch = async () => {
    if (searchTerm.trim() === '') {
      return;
    }
    try {
      const response = await axios.get('http://localhost:8000/api/search', {
        params: { title: searchTerm },
      });
      if (response.data.length > 0) {
        navigate(`/movie/${response.data[0].id}`);
      } else {
        console.log('No se encontraron resultados');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (id) => {
    navigate(`/movie/${id}`)
  }

  return (
    <div style={{padding: '4rem'}}>
      <div className="search-area" style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1>Películas Populares</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={popularMovies}
            getOptionLabel={(option) => option.title}
            sx={{
              width: 300,
              marginRight: '10px',
              '& .MuiInputBase-input': {
                color: darkMode ? 'white' : 'black',
              },
              '& .MuiInputLabel-root': {
                color: darkMode ? 'white' : 'black',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: darkMode ? 'white' : 'black',
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Buscar película por título"
                sx={{
                  '& .MuiInputLabel-formControl': {
                    top: '-8px',
                  },
                }}
              />
            )}
            value={null}
            onChange={(event, newValue) => setSearchTerm(newValue?.title || '')}
          />
          <Button variant="contained" color="secondary" onClick={handleSearch}>
            Buscar
          </Button>
        </div>
      </div>
      <div className="container">
        {popularMovies.map((movie) => (
          <div key={movie.id} onClick={() => handleClick(movie.id)} className="movie-card">
              <img
              style={{
                borderRadius: '1rem',
                maxWidth: '100%', // Añade esto para asegurar que la imagen no se desborde
                height: 'auto',   // Añade esto para mantener la proporción de la imagen
              }}
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />            
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
