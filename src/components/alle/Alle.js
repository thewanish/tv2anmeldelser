import './Alle.css';

import {
    Box,
    Card,
    Grid,
    TextField,
    Typography,
    InputAdornment,
    Button,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import SearchIcon from "@mui/icons-material/Search";
  import { Link } from "react-router-dom";



  const Alle = () => {
    const [movie, setMovie] = useState();
  
    //
    useEffect(() => {
      const fetchInitialMovies = async () => {
          const response = await axios.get(`http://localhost:8080/api/v1/movies`);
          console.log(response);
          setMovie(response.data);
      }
      fetchInitialMovies();
    }, );
  console.log(movie);
    return (
      <Grid container spacing={2} sx={{ margin: "2%" }}>
        
        {movie &&
          movie.map((p) => {
            return (
              <Grid key={p.Id} item xs={12} md={6} lg={4}>
                <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "2rem", fontWeight: "600" }}
                  >
               {p.title}
                  </Typography>
                  <Typography sx={{ color: "#585858", marginTop:"2%" }} variant="body" >
                    Imdb: {p.imdbId}
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h6">
                  Utgivelsesdato: {p.releaseDate} 
                  </Typography>
  
                  <Typography gutterBottom  variant="body">Sjangre : </Typography>
                  {p.genres.map((s, i) => {
                    return (
                      <Typography variant="body" gutterBottom key={i}>
                        {s} .
                        {` `}
                      </Typography>
                    );
                  })}
    
                </Card>
              </Grid>
            );
          })}
      </Grid>
    );
  };
export default Alle