let [millisecond, second, minute, hour] = [0, 0, 0, 0];
let timer = document.querySelector(".stopwatch");
let int = null;

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("start").addEventListener("click", () => {
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(running, 1);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(int);
    [millisecond, second, minute, hour] = [0, 0, 0, 0];
    timer.innerHTML = "00 : 00 : 00 : 000";
});

function running() {
    millisecond += 1;
    if(millisecond == 1000) {
        millisecond = 0;
        second++;
        if(second == 60) {
            second = 0;
            minute++;
            if(minute == 60) {
                minute = 0;
                hour++;
                if(hour == 24) {
                    hour = 0;
                    clearInterval(int);
                    [millisecond, second, minute, hour] = [0, 0, 0, 0];
                    timer.innerHTML = "00 : 00 : 00 : 000";
                }
            }
        }
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = millisecond < 10 ? "00" + millisecond : millisecond < 100 ? "0" + millisecond : millisecond;

    timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}