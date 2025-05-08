export let getRandomMeme = () => {
	let randomNumber = Math.floor(Math.random() * 10) + 1;
	let imageSrc = `src/assets/memes/meme-${randomNumber}.gif`;
	return imageSrc;
};
