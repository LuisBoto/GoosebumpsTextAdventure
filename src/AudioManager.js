var ambientMusic = new Audio("res/ambient.mp3");
ambientMusic.loop = true;

function playAmbientMusic() {
    ambientMusic.play();
}

function stopMusic() {
    ambientMusic.stop();
}

