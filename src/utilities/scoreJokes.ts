import { radioButtons, currentJoke } from "./dom";
import { reportJokes } from "./reportJokes";

export let scoreJoke = () => {
	radioButtons.forEach((tab) => {
		tab.addEventListener("change", (event) => {
			let clickedTab = event.target as HTMLInputElement;
			let score = +clickedTab.value;
			let jokeId = +currentJoke.dataset.id;
			let foundJoke = reportJokes.find((joke) => joke.id === jokeId);

			if (foundJoke && foundJoke.score != score) {
				foundJoke.score = score;
			}

			console.log("Scores updated", reportJokes);
		});
	});
};
