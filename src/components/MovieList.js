import Movie from "./Movie";
import "./MovieList.css"

function MovieList(props){
    const {movies = []} = props
    return (
        <div className="movies">
            
            {
            movies.length ? movies.map(movie => {
                return <Movie key = {movie.imdbID} {...movie} />
            }) : <h2>Ничего не найдено</h2>
            } 
        </div>
    )
}

export default MovieList;