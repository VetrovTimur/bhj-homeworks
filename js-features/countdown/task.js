const elemetTimer = document.getElementById('timer');
let time = parseInt(timer.innerText);

function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function timerСountdown() {
    elemetTimer.innerText = formatTime(time);
    if (time > 0) {
        time--;
    } else {
        clearInterval(timerInterval);
        alert("Вы победили в конкурсе!");
        window.location.href = "https://urikadm.ru/800/600/https/pbs.twimg.com/media/CyaKT9XUAAQRI_q.jpg";
    }
}

const timerInterval = setInterval(timerСountdown, 1000);