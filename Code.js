function renderMovie(movie) {
    document.getElementById("movietitle").innerText = movie.title;
    document.getElementById("movietext").innerText = movie.text;
    document.getElementById("movieimg").src = movie.img;
    for (let index = 0; index < movie.list.length; index++)
    { let newRow = "<li>" + movie.list[index] + "</li>"; document.getElementById("movielist").innerHTML += newRow; }
}
renderMovie(movieData);