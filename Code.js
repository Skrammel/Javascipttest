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

function changeStarRating(rating) {
    for (let i = 1; i <= 5; i++) {
        let star = document.getElementById("star" + i);
        if (i <= rating) {
            star.classList.add("filled");
        } else {
            star.classList.remove("filled");
        }
    }
}

for (let i = 1; i <= 5; i++) {
    let star = document.getElementById("star" + i);
    star.addEventListener("click", function () {
        changeStarRating(i);
    });
}
renderMovie(movieData);