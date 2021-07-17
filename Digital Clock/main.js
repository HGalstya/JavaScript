function currentTime() {
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let month = date.getMonth();
    let year = date.getFullYear();
    let currentDate = date.getDate()
    let month_name = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "Novembber", "December"];
    let showDay = document.querySelectorAll(".day_wrapper span");
    let midday = (hour > 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    currentDate =updateTime(currentDate);
    document.querySelector("#time").innerHTML = `${hour}:${min}`;
    document.querySelector("#sec").innerHTML = `${sec}`;
    document.querySelector("#midday").innerHTML = `${midday}`;
    document.querySelector("#full_date").innerHTML = `${month_name[month]} ${currentDate} ${year}`;
    showDay[day].style.opacity = "1";
}

function updateTime(num) {
    if (num < 10)
        return ("0" + num);
    else
        return num;
}

setInterval(currentTime, 1000)