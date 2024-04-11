let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm/2 + ss/120;
    let mRotation = 6 * mm + ss/10;
    let sRotation = 6 * ss;

    hours.style.transform = `rotate(${hRotation}deg)`
    minutes.style.transform = `rotate(${mRotation}deg)`
    seconds.style.transform = `rotate(${sRotation}deg)`
}

setInterval(displayTime, 1000)
