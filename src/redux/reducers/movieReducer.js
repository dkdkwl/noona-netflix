let initialState = {
    popularMovies: {},
    topRatedMovies : {},
    upcomingMovies: {},
    loding : true,
}

function movieReducer(state = initialState,action){
    let {type,payload} = action;

    switch(type){
        case "GET_MOVIES_REQUEST":
            return{...state,
                loding : true
            }
        case "GET_MOVIES_SUCCESS":
            return {...state,
                popularMovies : payload.topRatedMovies,
                topRatedMovies : payload.upcomingMovies,
                upComingMovies : payload.upComingMovies,
                loading : false
                };
        case "GET_MOVIES_FAILUTE" : 
            return{...state,
                loading : false
                }
                default :
            return {...state}
    }
}

export default movieReducer;