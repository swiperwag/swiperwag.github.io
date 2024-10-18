fetch('movies.json')
  .then(response => {
    console.log(response);  // Log the full response object
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);  // Check if data has the "movies" key
    const movieList = document.querySelector('.list');
    
    data.movies.forEach(movie => {
      const movieDiv = document.createElement('div');
      movieDiv.classList.add('movie');
      
      const movieName = document.createElement('div');
      movieName.classList.add('movie-name');
      movieName.innerText = movie.name;

      const movieComment = document.createElement('div');
      movieComment.classList.add('movie-comment');
      movieComment.innerText = movie.comment;
      
      const rating = document.createElement('div');
      rating.classList.add('rating');
      rating.innerText = movie.rating;
      
      const date = document.createElement('div');
      date.classList.add('date');
      date.innerText = movie.date;
      
      movieDiv.appendChild(movieName);
      movieDiv.appendChild(movieComment);
      movieDiv.appendChild(rating);
      movieDiv.appendChild(date);
      
      movieList.appendChild(movieDiv);
    });
  })
  .catch(error => {
    console.error('Error loading the movies:', error);
  });
