"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreJoke = void 0;
const dom_1 = require("./dom");
const reportJokes_1 = require("./reportJokes");
let scoreJoke = () => {
    dom_1.radioButtons.forEach((tab) => {
        tab.addEventListener("change", (event) => {
            let clickedTab = event.target;
            let score = +clickedTab.value;
            let jokeId = +dom_1.currentJoke.dataset.id;
            let foundJoke = reportJokes_1.reportJokes.find((joke) => joke.id === jokeId);
            if (foundJoke && foundJoke.score != score) {
                foundJoke.score = score;
            }
        });
    });
};
exports.scoreJoke = scoreJoke;
//# sourceMappingURL=scoreJokes.js.map