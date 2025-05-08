"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dom_1 = require("./utilities/dom");
const scoreJokes_1 = require("./utilities/scoreJokes");
const weatherApi_1 = require("./utilities/apis/weatherApi");
document.addEventListener("DOMContentLoaded", (event) => {
    (0, dom_1.showJoke)();
    (0, scoreJokes_1.scoreJoke)();
    (0, weatherApi_1.getWeather)(52.52, 13.41, "Europe/Berlin");
});
dom_1.nextJokeButton.addEventListener("click", (event) => {
    (0, dom_1.clearAllInput)();
    (0, dom_1.showJoke)();
});
//# sourceMappingURL=index.js.map