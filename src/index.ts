import {
	nextJokeButton,
	showJoke,
	clearAllInput,
	showWeather,
	showRandomMeme,
} from "./utilities/dom";
import { scoreJoke } from "./utilities/scoreJokes";
import { errors } from "./utilities/errorLog";

document.addEventListener("DOMContentLoaded", async () => {
	showWeather();
	showRandomMeme();
	showJoke();
	scoreJoke();
});

nextJokeButton.addEventListener("click", (event) => {
	clearAllInput();
	showJoke();
});
