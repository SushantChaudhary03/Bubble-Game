var timer = 60;
var score = 0;
var Hitrn = 0;


function increase() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 85; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class = "bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
};



function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timmerVal").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1><br><h2>Your Score ${score}</h2>`;
            var elem = document.getElementById("pbtm").style.flexDirection = "column";           
        }

    }, 1000);
}

function getNewHit() {
    Hitrn =  Math.floor(Math.random() *10);
    document.querySelector("#newhit").textContent = Hitrn;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = (Number(dets.target.textContent));
    if (clickedNum === Hitrn){
        increase();
        makeBubble();
        getNewHit();

    }
});

getNewHit();
runTimer();
makeBubble();




