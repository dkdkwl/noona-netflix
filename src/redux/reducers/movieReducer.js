let initialState = {
    popularMovies: {},
    topRatedMovies : {},
    upcomingMovies: {}
}

function movieReducer(state = initialState,action){
    let {type,payload} = action;

    switch(type){
        case "GET_MOVIES_SUCCESS":
            return {...state,
                popularMovies : payload.topRatedMovies,
                topRatedMovies : payload.upcomingMovies,
                upComingMovies : payload.upComingMovies,
                };
                default :
            return {...state}
    }
}

export default movieReducer;