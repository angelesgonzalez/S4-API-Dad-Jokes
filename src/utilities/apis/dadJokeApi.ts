import { ApiError } from "../Error";
import { errors } from "../errorLog";

const OPTIONS = {
	method: "GET",
	headers: {
		Accept: "application/json",
	},
};

const URLAPI = "https://icanhazdadjoke.com/";

export async function getDadJoke() {
	try {
		let response = await fetch(URLAPI, OPTIONS);

		if (!response.ok) {
			throw new ApiError(
				"Failed to fetch joke",
				"FETCH_ERROR",
				response.status
			);
		}

		let data = await response.json();
		return data.joke;
	} catch (error) {
		error instanceof ApiError ? errors.push(error) : console.error(error);
	}
}
