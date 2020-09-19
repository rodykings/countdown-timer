const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const copyrightEl = document.getElementById('copyright');
const titleEl = document.getElementById('title');
const spanEl = document.getElementById('anniversary');

//Anniversary date
const anniversaryDay = 19;
const anniversaryMonth = 10;//month-1
let nextAnniversaryYear;
let nextAnniversary;


let currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

copyrightEl.innerHTML =`© Copyright ${currentYear} Rodykings`;


nextAnniversaryYear = currentYear;

if(currentDay === anniversaryDay && currentMonth === anniversaryMonth){
    console.log(true);
    titleEl.innerHTML = "Parabéns Trofa!";
    daysEl.innerHTML = "--";
    hoursEl.innerHTML = "--";
    minsEl.innerHTML = "--";
    secondsEl.innerHTML = "--";

    nextAnniversary = new Date(nextAnniversaryYear,anniversaryMonth,anniversaryDay,0,0,0,0);
    spanEl.innerHTML = nextAnniversary.toDateString();
    
    
}else{
    if(currentMonth > anniversaryMonth){
        console.log("aqui");
        nextAnniversaryYear+=1; 
    }else if(currentMonth === anniversaryMonth){
        if(currentDay > anniversaryDay){
            nextAnniversaryYear+=1;
        }
    }
    nextAnniversary = new Date(nextAnniversaryYear,anniversaryMonth,anniversaryDay,0,0,0,0);
    spanEl.innerHTML = nextAnniversary.toDateString();
    
    countdown();

    setInterval(countdown, 1000);
}




function countdown(){

    currentDate = new Date();
    const totalSeconds = Math.abs(currentDate-nextAnniversary) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const minutes = Math.floor(totalSeconds/ 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;



    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    
}

function formatTime(time){
    return time < 10 ? (`0${time}`): time;
}

