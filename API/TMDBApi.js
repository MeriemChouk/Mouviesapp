// API/TMDBApi.js

// API/TMDBApi.js
const API_TOKEN = "0d3de02e599d0483eba694c9ec8a32f7";
export function getFilmsFromApiWithSearchedText(text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))

}
// API/TMDBApi.js

export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}
 // R�cup�ration du d�tail d'un film
export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
