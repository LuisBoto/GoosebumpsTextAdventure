class MusicCommand extends Command {

    constructor (value, f) {
        super(f);
        this.question = value.split(">")[0].trim();
        this.answers = value.split(">")[1].trim();
    }

    execute(gameLayer) {
        if (awaitingInput) {
            awaitingInput = false;
            if (userInput==="Y") {
                userInput = "";
                playAmbientMusic();
                controls.enter = true;
                return;
            }
            if (userInput==="N") {
                userInput = "";
                stopAmbientMusic();
                controls.enter = true;
                return;
            }
        }
        gameLayer.printText(this.question);
        gameLayer.printText(this.answers);
        gameLayer.awaitInput();
    }
}