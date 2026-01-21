let timer;
let isRunning = false;
let seconds = 0,
    minutes = 0,
    hours = 0;

function startStop() {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        document.getElementById("playIcon").classList.remove("fa-play");
        document.getElementById("playIcon").classList.add("fa-pause");
        isRunning = true;
    } else {
        clearInterval(timer);
        document.getElementById("playIcon").classList.remove("fa-pause");
        document.getElementById("playIcon").classList.add("fa-play");
        isRunning = false;
    }
}

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("playIcon").classList.remove("fa-pause");
    document.getElementById("playIcon").classList.add("fa-play");
    isRunning = false;
    document.getElementById("laps").innerHTML = ""; // Clear laps
}

function recordLap() {
    if (isRunning) {
        let lapTime = document.getElementById("display").innerText;
        let li = document.createElement("li");
        li.innerText = `Lap ${document.getElementById("laps").childElementCount + 1}: ${lapTime}`;
        document.getElementById("laps").prepend(li); // Add new lap to top
    }
}