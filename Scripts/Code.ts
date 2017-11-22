import { Review } from "./interfaces";
import {movieData} from "./Data";
import * as $ from "jquery";

function renderMovie(Data: Review) {
    document.getElementById("movietitle").innerText = movieData.title;
    document.getElementById("movietext").innerText = movieData.text;
    document.getElementById("movieimg").setAttribute("src", movieData.img);
    for (let i = 0; i < movieData.list.length; i++)
    {
        let newRow = "<li>" + movieData.list[i] + "</li>";
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
    $(".stars").on("click", "span", (e) => {
        let opt = $(e.target).attr("id");
        changeStarRating(+opt[4]);
    });





