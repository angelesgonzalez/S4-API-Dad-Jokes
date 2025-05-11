import {
	nextJokeButton,
	showJoke,
	showWeather,
	showRandomMeme,
} from "./utilities/dom";
import { scoreJoke } from "./utilities/scoreJokes";

document.addEventListener("DOMContentLoaded", async () => {
	showWeather();
	showRandomMeme();
	showJoke();
	scoreJoke();
});

nextJokeButton.addEventListener("click", (event) => {
	showJoke();
});
