const OPTIONS = {
	method: "GET",
	headers: {
		Accept: "application/json",
	},
};

const URLAPI = "https://icanhazdadjoke.com/";

export async function getJoke() {
	try {
		let response = await fetch(URLAPI, OPTIONS);

		if (response.status !== 200) {
			throw new Error(`There was an error: ${response.status}`);
		}

		let data = await response.json();
		return data.joke;
	} catch (error) {
		console.log(error);
	}
}
