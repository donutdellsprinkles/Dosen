const startingMinutes= 67;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('Countdown');


setInterval(updateCountdown, 1000);

function updateCountdown () {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds <10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;

    time--;
    time = time < 0 ? 0 : time; 
    if (time <=0) {audio.play()};
    
}

const audio = new Audio();
audio.src = "alarm.mp3";

var button = document.querySelector('button');
button.onclick =()=> {
    document.getElementById("task").value = "";
    document.getElementById("task-2").value = "";
    document.getElementById("task-3").value = "";
    document.getElementById("task-4").value = "";
   window.location.reload();

}