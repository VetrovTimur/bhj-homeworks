const imgCookie = document.getElementById('cookie');
const clickerStatus = document.querySelector('.clicker__status');
clickerStatus.innerHTML += '<br>Скорость кликов <span id="clicker__speed">0</span>';
const speed = document.getElementById('clicker__speed');
const clickerCounter = document.getElementById('clicker__counter');

let counter = 0;
let clickTime = null;

imgCookie.onclick = function() {
    const currTime = new Date();
    counter++;

    clickerCounter.innerText = counter;

    if(counter % 2 == 0) {
        imgCookie.width = "200";
    } else {
        imgCookie.width = "250";
    }

    if (clickTime) {
		const time = (currTime - clickTime) / 1000;
		const clickerSpeed = 1 / time;
		speed.innerHTML = clickerSpeed.toFixed(2);
	}
    
    clickTime = currTime;
}

