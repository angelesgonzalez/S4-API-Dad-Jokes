import { createJoke } from "./createJokes";
import { fetchWeatherData } from "./apis/weatherApi";

export let updateHTML = (id: string, update: string, jokeId: number) => {
	const htmlElement = document.getElementById(id);
	if (htmlElement) {
		htmlElement.innerHTML = update;
		htmlElement.dataset.id = jokeId.toString();
	}
};

export let showJoke = async () => {
	let newJoke = await createJoke();
	if (newJoke) {
		updateHTML("joke-display__text", `${newJoke.text}`, newJoke.id);
	}
};

export const nextJokeButton = document.getElementById("joke-display__button");

export const radioButtons = document.querySelectorAll(".tab-score");

export const currentJoke = document.getElementById("joke-display__text");

export const clearAllInput = () => {
	let allInputs = document.querySelectorAll("input");
	allInputs.forEach((singleInput) => (singleInput.value = ""));
};

export const showWeather = async () => {
	const weather = await fetchWeatherData();
	console.log(weather);
	
};
