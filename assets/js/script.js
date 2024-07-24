const clockHours = document.getElementById('hours')
const clockMinutes = document.getElementById('minutes')
const clockSeconds = document.getElementById('seconds')

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let minute = dateToday.getMinutes();
    let second = dateToday.getSeconds();

    clockHours.textContent = String(hour).padStart(2, '0');
    clockMinutes.textContent = String(minute).padStart(2, '0');
    clockSeconds.textContent = String(second).padStart(2, '0');
},1000);
