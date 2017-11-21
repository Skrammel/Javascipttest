function renderMovie(movie) {
    document.getElementById("movietitle").innerText = movie.title;
    document.getElementById("movietext").innerText = movie.text;
    document.getElementById("movieimg").setAttribute("src", movie.img);
    for (let i = 0; i < movie.list.length; i++)
    {
        let newRow = "<li>" + movie.list[i] + "</li>";
        document.getElementById("movielist").innerHTML += newRow;
    }
}
renderMovie(movieData);