import movies from "./movieList"
function MoviesRendered(){
    function getDescription(movie){
        console.log(movie.storyline)
    }
    return(
        <div>
            {movies.map(movie =>{
                <h2 onClick={() => getDescription(movie)} >{movies.name}</h2>
            })}
        </div>


    )

}
export default MoviesRendered;