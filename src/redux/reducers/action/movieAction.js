function getMovies(){
    return (dispatch)=>{
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
    }
}