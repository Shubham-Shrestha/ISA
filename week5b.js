const apiKey = '6b1edb2c'; 

async function getMovieData(title) {
  const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
  const data = await response.json();
  return data;
}

const form = document.querySelector('form');
const movieInfo = document.getElementById('movie-info');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = event.target.title.value;
  const movieData = await getMovieData(title);
  const movieDetails = `
    <h2>${movieData.Title} (${movieData.Year})</h2>
    <img src="${movieData.Poster}" alt="${movieData.Title} Poster">
    <p>${movieData.Plot}</p>
    <ul>
      <li><strong>Director:</strong> ${movieData.Director}</li>
      <li><strong>Actors:</strong> ${movieData.Actors}</li>
      <li><strong>Genre:</strong> ${movieData.Genre}</li>
      <li><strong>Runtime:</strong> ${movieData.Runtime}</li>
      <li><strong>Rating:</strong> ${movieData.imdbRating}/10 (${movieData.imdbVotes} votes)</li>
    </ul>
  `;
  movieInfo.innerHTML = movieDetails;
});
