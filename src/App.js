import React, { useState } from 'react';
import { useEffect } from 'react';
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';


const API_URL = 'https://www.omdbapi.com?apikey=791042bc'

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search)
    }
     
    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return(
        <div className="app">
            <h1>Val's movies</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            
            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie}/> // key={movie.imdbID} added as a unique identifier for each movie, ensuring that each child in the list has a unique key 
                        ))}
                    </div>
                )  : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
                    </div>
    );
}

export default App;
