const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
let currentSong;

const stopCurrentSong = () => {
	if (!currentSong) {
		return;
	}
	currentSong.pause();
};

sounds.forEach((sound) => {
	const btn = document.createElement("button");
	btn.classList.add("btn");

	btn.addEventListener("click", () => {
		stopCurrentSong();
		const song = document.getElementById(sound);

		song.play();
		currentSong = song;
	});

	btn.innerText = sound;
	document.getElementById("buttons").appendChild(btn);
});
