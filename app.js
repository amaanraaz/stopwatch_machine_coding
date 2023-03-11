const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

const d1 = document.querySelector(".milli");
const d2 = document.querySelector(".sec");
const d3 = document.querySelector(".min");
const d4 = document.querySelector(".hrs");

let hr="00",min="00",sec="00",milli="00";
let startTime;

function display(){
    d1.innerHTML=milli;
    d2.innerHTML=sec;
    d3.innerHTML=min;
    d4.innerHTML=hr;
}
function startTimer(){
 startTime = setInterval(() => {
        milli++;
        milli = milli<10?"0"+milli:milli;
        if(milli==100){
            sec++;
            sec = sec<10?"0"+sec:sec;
            milli = "0"+0;
        }
        if(sec==60){
            min++;
            min=min<10?"0"+min:min;
            sec="0"+0;
        }
        if(min==60){
            hr++;
            hr=hr<10?"0"+hr:hr;
            min="0"+0;
        }
        display();
    }, 10);
};

start.addEventListener('click',startTimer)
stop.addEventListener('click',()=>{
    // console.log("heooll");
    clearInterval(startTime);
});

reset.addEventListener('click',()=>{
    clearInterval(startTime)
    hr=min=sec=milli="0";
    display();
});

