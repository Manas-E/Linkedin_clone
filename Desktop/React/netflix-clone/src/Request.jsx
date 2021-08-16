const API_KEY= process.env.REACT_APP_API_KEY;
const baseURL = "https://api.themoviedb.org/3";

const requests = {

    fetchTrending: baseURL+ `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchNetflixOriginals: baseURL+`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchComedyMovies:baseURL+ `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: baseURL+"/discover/movie?api_key=" +API_KEY + "&with_genres=27",
    fetchRomanceMovies:baseURL+ `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    fetchDocumentaries: baseURL+`/discover/movie?api_key=${API_KEY}&with_genres=99`

}

export default requests;
