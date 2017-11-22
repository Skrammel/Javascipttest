import { movieData } from "./data";
import * as $ from "jquery";

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
function changeStarRating(rating) {
    for (let i = 1; i <= 5; i++) {
        let star = $("#star" + i);
        if (i <= rating) {
            star.addClass("filled");
        } else {
            star.removeClass("filled");
        }
    }
}
    $(".stars").on("click", "span", function (e) {
        let opt = $(e.target).attr("id");
        changeStarRating(+opt[4]);
    });





