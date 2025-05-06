import { getJoke } from "./services/api";

let updateHTML = (id: string, update: string) => {
	const htmlElement = document.getElementById(id);
	if (htmlElement) htmlElement.innerHTML = update;
};

// let jokeDisplayText = document.getElementById("joke-display__text");

let showJoke = async () => {
	let joke = await getJoke();
	if (joke) {
		updateHTML("joke-display__text", `${joke}`);
	}
};

document.addEventListener("DOMContentLoaded", (event) => {
	showJoke();
});
