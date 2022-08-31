const countdown = () => {
    // Date and time we are counting down to 
    const countDate = new Date("Nov 20, 2022 11:00:00").getTime();
    const now = new Date().getTime();

    // calculate remaining time
    const remainingTime = countDate - now;

    // time in days, hours, mins, seconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(remainingTime/day);
    var textHour = Math.floor((remainingTime % day)/hour);
    var textMinute = Math.floor((remainingTime % hour)/ minute);
    var textSecond = Math.floor((remainingTime % minute) / second);

    // update html with calculated values
    document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
    document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0 ;
    document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;

}

// countdown every 500ms to display time
setInterval(countdown, 500);