"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var $ = require("jquery");
function renderMovie(movie) {
    document.getElementById("movietitle").innerText = movie.title;
    document.getElementById("movietext").innerText = movie.text;
    document.getElementById("movieimg").setAttribute("src", movie.img);
    for (var i = 0; i < movie.list.length; i++) {
        var newRow = "<li>" + movie.list[i] + "</li>";
        document.getElementById("movielist").innerHTML += newRow;
    }
}
renderMovie(data_1.movieData);
function changeStarRating(rating) {
    for (var i = 1; i <= 5; i++) {
        var star = $("#star" + i);
        if (i <= rating) {
            star.addClass("filled");
        }
        else {
            star.removeClass("filled");
        }
    }
}
$(".stars").on("click", "span", function (e) {
    var opt = $(e.target).attr("id");
    changeStarRating(+opt[4]);
});
//# sourceMappingURL=Code.js.map