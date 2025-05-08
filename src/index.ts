import { nextJokeButton, showJoke, clearAllInput, showWeather } from "./utilities/dom";
import { scoreJoke } from "./utilities/scoreJokes";
import { errors } from "./utilities/errorLog";

document.addEventListener("DOMContentLoaded", async () => {
	showWeather();
	showJoke();
	scoreJoke();
});

nextJokeButton.addEventListener("click", (event) => {
	clearAllInput();
	showJoke();
});
