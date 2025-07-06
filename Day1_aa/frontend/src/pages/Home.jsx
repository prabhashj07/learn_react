import MovieCard from "../components/moviecard"
import {useState} from "react";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id:1, title:"john Wick", release_date:"2014-10-24"},
        {id:2, title:"Inception", release_date:"2010-07-16"},
        {id:3, title:"Interstellar", release_date:"2014-11-07"},
        {id:4, title:"The Dark Knight", release_date:"2008-07-18"},
    ]    
    const handleSearch = (e) => {
        alert(` ${searchQuery}`);
        e.preventDefault();
        setSearchQuery("Search Here");
    }
    return ( <div className ="Home">
        <form onSubmit={handleSearch} className="search-form">
        <input 
        type="text" 
        placeholder="Search for a movie..." 
        className="search-input" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
<button type="submit" className="search-button">
            Search
</button>
        </form>

    <div className="movie-grid">
        {movies.map((movie) => 
            movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
    </div>
    );
}

export default Home;