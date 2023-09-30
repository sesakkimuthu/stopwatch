const btnStart=document.querySelector('#startBtn');
const btnStop=document.querySelector('#stopBtn');
const btnReset=document.querySelector('#resetBtn');

let hrs=min=sec=ms=0,startTimer;

btnStart.addEventListener('click',()=>{
  startTimer=setInterval(()=>{
    ms++;//ms=ms+1;
    if(ms==100){
      sec++;
      ms=0;
    }
    if(sec==60){
      min++;
      sec=0;
    }
    if(min==60){
      hrs++;
      min=0;
    }
    updateDisplay();
  },10)
});

btnStop.addEventListener ('click',()=>{
  clearInterval(startTimer);
});

btnReset.addEventListener ('click',()=>{
  hrs=min=sec=ms=0;
  clearInterval(startTimer);
  updateDisplay();
});

function updateDisplay(){
  phrs=hrs<10? '0' +hrs:hrs;
  pmin=min<10? '0' +min:min;
  psec=sec<10? '0' +sec:sec;
  pms=ms<10? '0' +ms:ms;
  document.querySelector('.hrs').innerText=phrs;
  document.querySelector('.min').innerText=pmin;
  document.querySelector('.sec').innerText=psec;
  document.querySelector('.ms').innerText=pms;
}