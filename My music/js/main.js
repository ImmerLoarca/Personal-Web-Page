var audio = document.getElementById("audio");
var pause = document.getElementById("play");

pause.addEventListener("click", () => {
    if (audio.paused || audio.ended) {
        pause.querySelector(".pause-btn").classList.toggle("hide");
        pause.querySelector(".play-btn").classList.toggle("hide");
        audio.play();
    } else {
        audio.pause();
        pause.querySelector(".pause-btn").classList.toggle("hide");
        pause.querySelector(".play-btn").classList.toggle("hide");
    }
});


function myFunction(click) {
    var element = document.body;
    element.classList.toggle("giro");
 }

 function myFunctionp2(click) {
    var element = document.body;
    element.classList.toggle("nogiro");
 }

var newAudio = document.getElementById("BTD");
var newPause = document.getElementById("ride");

newPause.addEventListener("click", () => {
    if (newAudio.paused || newAudio.ended) {
        newPause.querySelector(".pause-btn").classList.toggle("hide");
        newPause.querySelector(".play-btn").classList.toggle("hide");
        newAudio.play();
    } else {
        newAudio.pause();
        newPause.querySelector(".pause-btn").classList.toggle("hide");
        newPause.querySelector(".play-btn").classList.toggle("hide");
    }
});

var Ciga = document.getElementById("CAS");
var Apocal = document.getElementById("Ap");

Apocal.addEventListener("click", () => {
    if (Ciga.paused || Ciga.ended) {
        Apocal.querySelector(".pause-btn").classList.toggle("hide");
        Apocal.querySelector(".play-btn").classList.toggle("hide");
        Ciga.play();
    } else {
        Ciga.pause();
        Apocal.querySelector(".pause-btn").classList.toggle("hide");
        Apocal.querySelector(".play-btn").classList.toggle("hide");
    }
});

var Cigarre = document.getElementById("Cas");
var Apocalyp = document.getElementById("Neon");

Apocalyp.addEventListener("click", () => {
    if (Cigarre.paused || Cigarre.ended) {
        Apocalyp.querySelector(".pause-btn").classList.toggle("hide");
        Apocalyp.querySelector(".play-btn").classList.toggle("hide");
        Cigarre.play();
    } else {
        Cigarre.pause();
        Apocalyp.querySelector(".pause-btn").classList.toggle("hide");
        Apocalyp.querySelector(".play-btn").classList.toggle("hide");
    }
});

var Tame = document.getElementById("TI");
var yes = document.getElementById("YIC");

yes.addEventListener("click", () => {
    if (Tame.paused || Tame.ended) {
        yes.querySelector(".pause-btn").classList.toggle("hide");
        yes.querySelector(".play-btn").classList.toggle("hide");
        Tame.play();
    } else {
        Tame.pause();
        yes.querySelector(".pause-btn").classList.toggle("hide");
        yes.querySelector(".play-btn").classList.toggle("hide");
    }
});

var clairo = document.getElementById("Clai");
var bag = document.getElementById("Bags");

bag.addEventListener("click", () => {
    if (clairo.paused || clairo.ended) {
        bag.querySelector(".pause-btn").classList.toggle("hide");
        bag.querySelector(".play-btn").classList.toggle("hide");
        clairo.play();
    } else {
        clairo.pause();
        bag.querySelector(".pause-btn").classList.toggle("hide");
        bag.querySelector(".play-btn").classList.toggle("hide");
    }
});

var Hay = document.getElementById("Hayley");
var found = document.getElementById("FMF");

found.addEventListener("click", () => {
    if (Hay.paused || Hay.ended) {
        found.querySelector(".pause-btn").classList.toggle("hide");
        found.querySelector(".play-btn").classList.toggle("hide");
        Hay.play();
    } else {
        Hay.pause();
        found.querySelector(".pause-btn").classList.toggle("hide");
        found.querySelector(".play-btn").classList.toggle("hide");
    }
});

var Billie = document.getElementById("BE");
var Bossa = document.getElementById("BBN");

Bossa.addEventListener("click", () => {
    if (Billie.paused || Billie.ended) {
        Bossa.querySelector(".pause-btn").classList.toggle("hide");
        Bossa.querySelector(".play-btn").classList.toggle("hide");
        Billie.play();
    } else {
        Billie.pause();
        Bossa.querySelector(".pause-btn").classList.toggle("hide");
        Bossa.querySelector(".play-btn").classList.toggle("hide");
    }
});

var lumineers = document.getElementById("TL");
var sleep = document.getElementById("SOF");

sleep.addEventListener("click", () => {
    if (lumineers.paused || lumineers.ended) {
        sleep.querySelector(".pause-btn").classList.toggle("hide");
        sleep.querySelector(".play-btn").classList.toggle("hide");
        lumineers.play();
    } else {
        lumineers.pause();
        sleep.querySelector(".pause-btn").classList.toggle("hide");
        sleep.querySelector(".play-btn").classList.toggle("hide");
    }
});