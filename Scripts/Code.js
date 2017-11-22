"use strict";
exports.__esModule = true;
var Data_1 = require("./Data");
var $ = require("jquery");
function renderMovie(Data) {
    document.getElementById("movietitle").innerText = Data_1.movieData.title;
    document.getElementById("movietext").innerText = Data_1.movieData.text;
    document.getElementById("movieimg").setAttribute("src", Data_1.movieData.img);
    for (var i = 0; i < Data_1.movieData.list.length; i++) {
        var newRow = "<li>" + Data_1.movieData.list[i] + "</li>";
        document.getElementById("movielist").innerHTML += newRow;
    }
}
renderMovie(Data_1.movieData);
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