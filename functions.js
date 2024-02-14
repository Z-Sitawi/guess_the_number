function start(){
    playSound(audio_click)
    document.getElementById('start').style.fontSize = '40px';
    // wait befor executong next line
    setTimeout(function() {
        removeChild('body', 'box');
    }, 500);
}

function removeChild(pid, cid) {
    var parentDiv = document.getElementById(pid);
    var childDiv = document.getElementById(cid);
    parentDiv.removeChild(childDiv);
}

function changecolor(){
    document.getElementById('input').style.border = '10px solid rgb(249, 211, 183)';
}

function changecolor2(){
    setTimeout(function(){
        document.getElementById('input').style.border = '10px solid rgb(255, 111, 0)'
    }, 100);
}



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function attempts(){
    str = document.getElementById('att').textContent;
    num = parseInt(str[15]);
    switch (num) {
        case 3:
            num = 2;
            document.getElementById('att').textContent = 'Attempts Left: ' + num ;
            break;
        case 2:
            num = 1;
            document.getElementById('att').textContent = 'Attempts Left: ' + num ;
            break;
        case 1:
            num = 0;
            document.getElementById('att').textContent = 'Attempts Left: ' + num ;
            break;
        default:
            break;
    }
    return num;
}
function playAgain() {
    playSound(audio_click);
    setTimeout(function() {
        location.reload();
    }, 200);
}
 
/* ============ Random Number Part ===================== */
var x_number = getRandomNumber(1, 10)

function check(x=x_number) {
    changecolor()
    var att = attempts();
    var btn = document.getElementById('btn');

    var val = parseInt(document.getElementById('input').value); 
    if (val == x){
        document.getElementById('label').textContent = 'You Won';
        document.getElementById('label').style.backgroundColor = 'rgb(77, 250, 130)';
        playSound(audio_win);
        btn.disabled = true;
        document.getElementById('input').disabled = true;
        document.getElementById('reload').innerHTML = '<button class="btn btn-warning p-3" onclick="playAgain()"><b>Play Again</b></button>'
    }
    else{
        console.log(att);
        document.getElementById('label').textContent = 'Wrong';
        document.getElementById('label').style.backgroundColor = 'rgb(168, 98, 255)';
        document.getElementById('input').value = ""

    }

    if (att == 0 && val != x){
        document.getElementById('label').textContent = 'Game Over';
        document.getElementById('label').style.backgroundColor = 'rgb(200, 0, 0, 0.7)';
        playSound(audio_gover)
        document.getElementById('input').disabled = true;
        document.getElementById('input').value = ' ';
        document.getElementById('reload').innerHTML = '<button class="btn btn-warning p-3" onclick="playAgain()"><b>Play Again</b></button>'
        btn.disabled = true;
    }

}

/* ============ Declare Sounds ============ */
var audio_click = new Audio('./sound_click.wav');
var audio_gover = new Audio('./gameover.wav');
var audio_win = new Audio('./winner.wav');

function playSound(sound) {
    sound.play();
}

function muteSounds() {
    var muteButton = document.getElementById('muteButton');

    if (muteButton.style.backgroundColor === 'rgb(187, 236, 187)') {
        // Mute all audio elements
        audio_click.muted = true;
        audio_gover.muted = true;
        audio_win.muted = true;
        // Mute more audio elements as needed
        muteButton.style.backgroundColor = 'rgb(231, 162, 254)';
        muteButton.style.textDecoration = '3px line-through red';
    } else {
        // Unmute all audio elements
        audio_click.muted = false;
        audio_gover.muted = false;
        audio_win.muted = false;
        // Unmute more audio elements as needed
        muteButton.style.backgroundColor = 'rgb(187, 236, 187)';
        muteButton.style.textDecoration = 'none';
    }
}
