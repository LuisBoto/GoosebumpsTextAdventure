class LoadCommand extends Command {

    constructor (value, f) {
        super(f);
        this.value = value;
    }

    execute(gameLayer) {
        if (awaitingInput && userInput!="") {
            awaitingInput = false;
            var block = userInput.toString();
            userInput = "";
            gameLayer.loadBlockFile(block);
        }

        gameLayer.printText(this.value);
        gameLayer.awaitInput();
    }
}