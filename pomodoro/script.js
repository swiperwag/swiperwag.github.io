let title = document.getElementById('title');
let focusBTN = document.getElementById('focusBTN');
let focus2BTN = document.getElementById('focus2BTN');
let breakBTN = document.getElementById('breakBTN'); 
let pauseBTN = document.getElementById('pauseBTN');
let focusTAB = document.querySelector('.pomodoro__focus');
let breakTAB = document.querySelector('.pomodoro__break');
let focusTimer = document.getElementById('focusTimer');
let breakTimer = document.getElementById('breakTimer');
let shortbreakBTN = document.getElementById('shortbreakBTN');
let longbreakBTN = document.getElementById('longbreakBTN');
let breakpauseBTN = document.getElementById('breakpauseBTN');
let breakpause2BTN = document.getElementById('breakpause2BTN');
let shortbreak2BTN = document.getElementById('shortbreak2BTN');
let longbreak2BTN = document.getElementById('longbreak2BTN');
let resetBTN = document.getElementById('resetBTN');
let clearBTN = document.getElementById('clearBTN');
let stat = document.getElementById('stat');
let statBTN = document.getElementById('statsel1');
let stat2BTN = document.getElementById('statsel2');
let setting = document.getElementById('setting');
let setting1BTN = document.getElementById('settingsel1');
let setting2BTN = document.getElementById('settingsel2');
let intervalId;
let intervalId2;
let Paused = true;
let Paused2 = true;
let btn = document.querySelector('.btn');
let blur = document.querySelector('.blur');
let blur2 = document.querySelector('.blur2');
let blur3 = document.querySelector('.blur3');
let blur4 = document.querySelector('.blur4');
let what1  = document.getElementById('what1');
let popupWhat = document.querySelector('.popup');
let main = document.querySelector('main');
let focustab = document.getElementById('focustab');
let breaktab = document.getElementById('breaktab');
let nav = document.querySelector('nav');
let alarmSound = document.getElementById('alarmSound');


function playAlarm() {
  alarmSound.play();
}


addEventListener('DOMContentLoaded', function() {
  focusTAB.classList.add('intro');
  nav.classList.add('intro');

  setTimeout(() => {
    focusTAB.classList.remove('intro');
    nav.classList.remove('intro');
  }, 1000);
});


function Exitpopup() {
  popupWhat.classList.add('closing');

  // After 5 seconds (same duration as the transition), remove the 'clicked' class
  setTimeout(function() {
    popupWhat.classList.remove('closing');
    popupWhat.style.display = 'none';
  }, 300);
}

what1.addEventListener('click',  function() {
  popupWhat.style.display = 'grid';
});

btn.addEventListener('click', function() {
  btn.classList.add('clicked');

  // After 5 seconds (same duration as the transition), remove the 'clicked' class
  setTimeout(function() {
    btn.classList.remove('clicked');
  }, 200); // 5000 milliseconds = 5 seconds
});


resetBTN.addEventListener('click', function() {
  clearInterval(intervalId);
  resetpomodoro();
  resetBTN.style.pointerEvents = 'none';
});

function resetpomodoro() {
  focus2BTN.style.display = 'none';
  pauseBTN.style.display = 'none';
  focusBTN.style.display = 'flex';
  focusTimer.innerHTML = "25:00";
  focustab.style.backgroundColor = 'black';
  focusTimer.style.color = 'rgb(191, 191, 191)';
  blur4.classList.add('animated');
  setTimeout(() => {
    blur4.classList.remove('animated');
    main.style.backgroundColor = 'white';
  }, 500);
}

function startblurAnim() {
  blur.style.display = 'flex';
  focusBTN.style.display = 'none';
  pauseBTN.style.display = 'flex';
  blur.classList.add('animated');
  setTimeout(() => {
    main.style.backgroundColor = 'rgb(255, 67, 67)';
    blur.classList.remove('animated');
  }, 500);
}
function stopblurAnim() {
  blur.classList.add('animated2');
  main.style.backgroundColor = 'white';
  setTimeout(() => {
    blur.classList.remove('animated2');
  }, 900);
}

// #################################################
focusBTN.addEventListener('click', function() {
  Paused = true;
  clearInterval(intervalId2);
  resetplacing();
  let focus = "focus";
  focusTimer.innerHTML = "25:00";
  breaktab.style.backgroundColor = 'black';
  startCountdown(1499, focusTimer, focus);
  startblurAnim();
  resetBTN.style.pointerEvents = 'unset';
  clearBTN.style.pointerEvents = 'none';
  focustab.style.backgroundColor = 'red';
});

focus2BTN.addEventListener('click', function() {
  Paused = true;
  focus2BTN.style.display = 'none';
  pauseBTN.style.display = 'flex';
  focustab.style.backgroundColor = 'red';
  startblurAnim();
});

pauseBTN.addEventListener('click', function() {
  focus2BTN.style.display = 'flex';
  pauseBTN.style.display = 'none';
  Paused = false;
  stopblurAnim();
});
// #################################################




// #################################################
shortbreakBTN.addEventListener('click', function() {
  Paused2 = true;
  clearInterval(intervalId2);
  clearInterval(intervalId);
  resetplacing();
  focusBTN.style.display = 'flex';
  focus2BTN.style.display = 'none';
  pauseBTN.style.display = 'none';
  focusTimer.innerHTML = "25:00";
  shortbreakBTN.style.display = 'none';
  longbreak2BTN.style.display = 'none';
  breakpause2BTN.style.display = 'none';
  longbreakBTN.style.display = 'flex';
  breakpauseBTN.style.display = 'flex';
  breakTimer.innerHTML = "05:00";
  focustab.style.backgroundColor = 'black';
  breaktab.style.backgroundColor = 'rgb(0, 214, 110)';
  let short = "short";
  blur2.classList.add('animated');
  startCountdownshort(299, breakTimer, "short");
  setTimeout(() => {
    blur2.classList.remove('animated');
    main.style.backgroundColor = 'rgb(19, 255, 141)';
  }, 500);
  clearBTN.style.pointerEvents = 'unset';
  resetBTN.style.pointerEvents = 'none';
});

shortbreak2BTN.addEventListener('click', function() {
  Paused2 = true;
  focusTimer.innerHTML = "25:00";
  shortbreak2BTN.style.display = 'none';
  breakpauseBTN.style.display = 'flex';
  blur2.classList.add('animated');
  setTimeout(() => {
    blur2.classList.remove('animated');
    main.style.backgroundColor = 'rgb(19, 255, 141)';
  }, 800);
});

longbreakBTN.addEventListener('click', function() {
  Paused2 = true;
  clearInterval(intervalId);
  clearInterval(intervalId2);
  resetplacing();
  focusBTN.style.display = 'flex';
  focus2BTN.style.display = 'none';
  pauseBTN.style.display = 'none';
  focusTimer.innerHTML = "25:00";
  longbreakBTN.style.display = 'none';
  shortbreak2BTN.style.display = 'none';
  breakpauseBTN.style.display = 'none';
  shortbreakBTN.style.display = 'flex';
  breakpause2BTN.style.display = 'flex';
  breakTimer.innerHTML = "15:00";
  let long = "long";
  startCountdownshort(899, breakTimer, "long");
  focustab.style.backgroundColor = 'black';
  breaktab.style.backgroundColor = 'rgb(0, 204, 223)';
  blur3.classList.add('animated');
  setTimeout(() => {
    blur3.classList.remove('animated');
    main.style.backgroundColor = 'rgb(0, 234, 255)';
  }, 500);
  clearBTN.style.pointerEvents = 'unset';
  resetBTN.style.pointerEvents = 'none';
});

longbreak2BTN.addEventListener('click', function() {
  Paused2 = true;
  longbreak2BTN.style.display = 'none';
  breakpause2BTN.style.display = 'flex';
  blur3.classList.add('animated');
  setTimeout(() => {
    blur3.classList.remove('animated');
    main.style.backgroundColor = 'rgb(0, 234, 255)';
  },500);
});

breakpauseBTN.addEventListener('click', function() {
  Paused2 = false;
  blur2.classList.add('animated2');
  main.style.backgroundColor = 'white';
  setTimeout(() => {
    blur2.classList.remove('animated2');
  }, 800);
  shortbreak2BTN.style.display = 'flex';
  breakpauseBTN.style.display = 'none';
});
breakpause2BTN.addEventListener('click', function() {
  Paused2 = false;
  longbreak2BTN.style.display = 'flex';
  breakpause2BTN.style.display = 'none';
  blur3.classList.add('animated2');
  main.style.backgroundColor = 'white';
  setTimeout(() => {
    blur3.classList.remove('animated2');
  }, 800);
});
clearBTN.addEventListener('click', function() {
  breakTimer.innerHTML = "00:00";
  clearInterval(intervalId2);
  shortbreak2BTN.style.display = 'none';
  breakpauseBTN.style.display = 'none';
  breakpause2BTN.style.display = 'none';
  longbreak2BTN.style.display = 'none';
  shortbreakBTN.style.display = 'flex';
  longbreakBTN.style.display = 'flex';
  breakTimer.style.color = 'rgb(191, 191, 191)';
  breaktab.style.backgroundColor = 'black';
  blur4.classList.add('animated');
  setTimeout(() => {
    blur4.classList.remove('animated');
    main.style.backgroundColor = 'white'
  }, 500);
  clearBTN.style.pointerEvents = 'none';
});
function resetplacing() {
  breakTimer.innerHTML = "00:00";
  shortbreak2BTN.style.display = 'none';
  breakpauseBTN.style.display = 'none';
  breakpause2BTN.style.display = 'none';
  longbreak2BTN.style.display = 'none';
  shortbreakBTN.style.display = 'flex';
  longbreakBTN.style.display = 'flex';
  breakTimer.style.color = 'rgb(191, 191, 191)';
  focusTimer.style.color = 'rgb(191, 191, 191)';
  focustab.style.backgroundColor = 'black';
  breaktab.style.backgroundColor = 'black';
  main.style.backgroundColor = 'white';
}


// #################################################



function focusBreakTAB() {
  focusTAB.style.display = 'none';
  breakTAB.style.display = 'flex';
}  
function focusFocusTAB() {
  focusTAB.style.display = 'flex';
  breakTAB.style.display = 'none';
}



function taptaptap(bobo) {
  let intervalId = bobo;
  clearInterval(intervalId);
  breakTimer.innerHTML = "00:00";
  breakTimer.style.color = 'rgb(191, 191, 191)';
}


function startCountdown(duration, id, tae) {
  let tae1 = tae;
  let time = duration;
  id = id;
  focusTimer.style.color = 'black';
  intervalId = setInterval(function () {
    if(Paused != false){
      focustab.style.backgroundColor= 'red'
      updateCountdown(time, id, tae1);
      time--;
      if(time < 0) {
        taptaptap(intervalId);
        title.innerText = "FK.";
        resetpomodoro();
        focusTimer.style.color = 'rgb(191, 191, 191)';
        playAlarm();
      }}
    }, 1000);
    if(Paused == true){
      focustab.style.backgroundColor = 'black';
    }
}

function startCountdownshort(duration, id, tae) {
  let tae2 = tae;
  let time = duration;
  let id1 = id;
  breakTimer.style.color = 'black';
  intervalId2  = setInterval(function () {
  if(tae2 == 'short'){
    breaktab.style.backgroundColor = 'rgb(0, 214, 110)';
  }
  if(tae2 == 'long'){
    breaktab.style.backgroundColor = 'rgb(0, 204, 223)';
  }

    if(Paused2 != false){
      updateCountdown(time, id1, tae2);
      time--;
      if(time < 0) {
        taptaptap(intervalId2);
        resetplacing();
        title.innerHTML = "FK.";
        breakTimer.style.color = 'rgb(191, 191, 191)';
      }}
    }, 1000);
}

function secondsToStandardTime(seconds) {
  // Calculate hours, minutes, and remaining seconds
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = seconds % 60;
  
  // Format the time into HH:MM:SS
  var formattedTime = 
  padZero(minutes) + ":" + 
  padZero(remainingSeconds);
  
  return formattedTime;
}

// Function to add leading zero if the number is less than 10
function padZero(number) {
  return (number < 10 ? '0' : '') + number;
}

function updateCountdown(time, timer, text) {
  let text1 = text;
  let seconds = time;
  let formattedTime = secondsToStandardTime(seconds);
  timer.innerHTML = formattedTime;
  title.innerHTML = `${text1} ${formattedTime}`;
}

