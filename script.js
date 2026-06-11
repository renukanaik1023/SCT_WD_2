let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;
let isRunning = false;

const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");

const laps = document.getElementById("laps");



// START BUTTON
startBtn.addEventListener("click", () => {

    if (!isRunning) {

        isRunning = true;

        timer = setInterval(updateTime, 10);
    }

});



// PAUSE BUTTON
pauseBtn.addEventListener("click", () => {

    clearInterval(timer);

    isRunning = false;

});



// RESET BUTTON
resetBtn.addEventListener("click", () => {

    clearInterval(timer);

    isRunning = false;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    display.innerHTML = "00:00:00:00";

    laps.innerHTML = "";

});



// LAP BUTTON
lapBtn.addEventListener("click", () => {

    if (
        hours === 0 &&
        minutes === 0 &&
        seconds === 0 &&
        milliseconds === 0
    ) {
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        Lap ${laps.children.length + 1} :
        ${formatTime(hours)} :
        ${formatTime(minutes)} :
        ${formatTime(seconds)} :
        ${formatMilliseconds(milliseconds)}
    `;

    laps.prepend(li);

});



// UPDATE TIME FUNCTION
function updateTime() {

    milliseconds++;

    if (milliseconds === 100) {

        milliseconds = 0;
        seconds++;

        if (seconds === 60) {

            seconds = 0;
            minutes++;

            if (minutes === 60) {

                minutes = 0;
                hours++;

            }
        }
    }

    display.innerHTML =
        `${formatTime(hours)}:` +
        `${formatTime(minutes)}:` +
        `${formatTime(seconds)}:` +
        `${formatMilliseconds(milliseconds)}`;
}



// FORMAT HOURS / MINUTES / SECONDS
function formatTime(time) {

    return time < 10 ? `0${time}` : time;

}



// FORMAT MILLISECONDS
function formatMilliseconds(ms) {

    return ms < 10 ? `0${ms}` : ms;

}