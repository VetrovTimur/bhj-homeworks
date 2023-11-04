const hit = document.getElementById('dead');
const missed = document.getElementById('lost');

const reload = () => {
	hit.textContent = 0;
	missed.textContent = 0;
}

const getHole = (index) => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
	let hole = getHole(i);

	hole.onclick = function () {
		if (hole.classList.contains('hole_has-mole')) {
			hit.textContent++;
		} else {
			missed.textContent++;
		}

		if (hit.textContent >= 10) {
			alert('Победа!');
			reload();
		} else if (missed.textContent >= 5) {
			alert('Вы проиграли!');
			reload();
		}
	}
}