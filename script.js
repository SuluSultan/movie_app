// The Movie Database (TMDB)

let API_KEY = 'api_key=80d8ee8fa3cbb62c3614bbe03a243bb2';
let MAIN_URL = 'https://api.themoviedb.org/3';
let BUILDED_URL = MAIN_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

let MAIN_IMG_URL = 'https://image.tmdb.org/t/p/w500';
let BUILDED_SEARCH_URL = MAIN_URL+'/search/movie?'+API_KEY;

let MAIN_CONTAINER = document.getElementById('main-container');


getMovies(BUILDED_URL);

function getMovies(url){
    // USHUL ZHER BIR AZ KYIYN BOLUP ZHATAT
    fetch(url).then(res => res.json()).then(data => {
        
        // console.log(data.results)
        showMovies(data.results);
    })
}





function showMovies(data) {
    MAIN_CONTAINER.innerHTML = '';

    data.forEach(MOVIE_DATA_INFO => {

    let {title, poster_path, vote_average, overview } = MOVIE_DATA_INFO;
    let ADD_TO_MAIN_CONTAINER = document.createElement('div');
    ADD_TO_MAIN_CONTAINER.classList.add('movie-card');
    ADD_TO_MAIN_CONTAINER.innerHTML =`
        <img src="${MAIN_IMG_URL+poster_path}" alt="${title}">

            <div class="movie-info">
                  <h3>${title}</h3>
                  <span>${vote_average}</span>
    
                </div>
    
                <div class="overview">
                  <h3>Overview</h3>
                  ${overview}
    
            </div>
            
            
        `
         MAIN_CONTAINER.appendChild(ADD_TO_MAIN_CONTAINER);

    })
}




    document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault();

    let searchTyping = document.getElementById('search').value;
    
    if(searchTyping){
        getMovies(BUILDED_SEARCH_URL+'&query='+searchTyping)
    } 
} )