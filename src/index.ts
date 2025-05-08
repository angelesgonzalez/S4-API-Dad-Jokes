import { nextJokeButton, showJoke, clearAllInput } from "./utilities/dom";
import { scoreJoke } from "./utilities/scoreJokes";
import { errors } from "./utilities/errorLog";
import { getWeather } from "./utilities/apis/weatherApi";

document.addEventListener("DOMContentLoaded", (event) => {
	showJoke();
	scoreJoke();
	getWeather(52.52, 13.41, "Europe/Berlin");
});

nextJokeButton.addEventListener("click", (event) => {
	clearAllInput();
	showJoke();
});
