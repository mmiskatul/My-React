import MovieCard from "../MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery,setSearchQuery]=useState("");
    const movie = [ 
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1999" },
        { id: 3, title: "The Matrix", release_date: "1998" },
    ];

    const handleSearch = (e) => {
        e.preventDefault(); 
        alert(searchQuery);
        // Implement search logic here
    };

    return ( 
        <>
            <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input type="text" placeholder="Search for Movie" className="search-input"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-btn">Search</button>
                </form>
                <div className="movies-grid">
                    {movie.map(movie => 
                       movie.title.toLowerCase().startsWith(searchQuery) &&
                       (<MovieCard movie={movie} key={movie.id}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
