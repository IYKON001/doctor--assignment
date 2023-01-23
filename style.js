let is12Hour = true; // keep track of whether the clock is currently in 12-hour format

function displayTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let timeString = "";

    if (is12Hour) {
        timeString += ("0"+ hour % 12 || 12 )+ ":" + (minutes < 10 ? "0" : "") + minutes + ":" + seconds;
        timeString += (hour >= 12) ? " PM" : " AM";
    } else {
        timeString += (hour < 10 ? "0" : "") + hour + ":"+(minutes < 10 ? "0" : "") + minutes + ":" + seconds;
        timeString += (hour >= 12) ? " PM" : " AM";
    }

    document.getElementById("clock").innerHTML = timeString;
}

function toggleFormat() {
    is12Hour = !is12Hour;
}
setInterval(displayTime, 1000);





