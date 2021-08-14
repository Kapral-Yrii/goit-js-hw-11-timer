class CountdownTimer{
    constructor(endData) {
        this.endData = endData
        this.sec = document.querySelector('p[data-value="secs"]')
        this.min = document.querySelector('p[data-value="mins"]')
        this.hour = document.querySelector('p[data-value="hours"]')
        this.day = document.querySelector('p[data-value="days"]')
    }
    calc = () => {
        const currentDate = Date.now();
        const time = (this.endData - currentDate);
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        this.sec.textContent = secs < 10 ? `0${secs}` : secs;
        this.min.textContent = mins < 10 ? `0${mins}` : mins;
        this.hour.textContent = hours < 10 ? `0${hours}` : hours;
        this.day.textContent = days < 10 ? `0${days}` : days;
    }
    CountdownTimer = () => {
       setInterval(this.calc, 1000) 
    }
}

const timer = new CountdownTimer(new Date('Sep 1, 2021'))

window.addEventListener('DOMContentLoaded', timer.CountdownTimer)