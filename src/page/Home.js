import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner  from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {
    const dispatch = useDispatch();
    const {popularMovies,topRatedMovies,upcomingMovies,loading} = useSelector(state=>state.movie);
    console.log("home",popularMovies);
    console.log("loading",loading)
    useEffect(()=>{
        dispatch(movieAction.getMovies());
    },[]);
  
    //로딩이 true면 loading 스피너를 보여주고 만약 loading이 false면 데이터를 보여준다.
    //true : 데이터가 도착 전
    //false : 데이터가 도착 후 거나 에러가 났을때
    if(loading == true){
      return (
        <ClipLoader color={"#fff"} loading={loading} size={150} />
      )
    }
  return (
    <div>

      {popularMovies.results && <Banner movie={popularMovies.results[0]}/>}

      <h1>Popular Movie</h1>
      <MovieSlide movies = {popularMovies}/>
      <h1>Top reated Movie</h1>
      <MovieSlide movies = {topRatedMovies}/>
      <h1>Upcoming Movie</h1>
      <MovieSlide movies = {upcomingMovies}/>
    </div>
  )
}

export default Home